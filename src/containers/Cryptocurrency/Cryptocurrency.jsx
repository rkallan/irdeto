import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/nl';
import Select from '../../utils/Select/Select';
import Loader from '../../utils/Loader/Loader';

// NPM Modules
import { Helmet } from "react-helmet";

// Assets: Styles & Images
import './assets/styles/Cryptocurrency.css';

// Actions
import { ExampleActions } from '../../redux/example';

const selectOptions = {
  lsk: 'Lisk (LSK)',
  eth: 'Etherium (ETH)',
  xmr: 'Monero (XMR)',
  strat: 'StratisAudi (STRAT)',
  bch: 'Bitcoin Cash (BCH)'  
};

class Cryptocurrency extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
        currencyData:[],
        apiUrl: 'https://poloniex.com/public?command=returnChartData',
        apiUrlParams: {
          currencyPair: 'BTC_XMR',
          start: Math.round((Date.now() - 24*60*60*1000)/1000),
          end: Date.now(), 
          period: 300
        }
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.setTimeOutInterval();
  }

  componentWillUnmount() {
    clearInterval(this.timeoutInterval);
  }

  setTimeOutInterval() {
    let currentDateTime = new Date()
    let nextAutoUpdate = new Date(currentDateTime.getFullYear(), currentDateTime.getMonth(), currentDateTime.getDate(), currentDateTime.getHours(), (currentDateTime.getMinutes() - (currentDateTime.getMinutes() % 5)) + 6, 0, 0)
    let intervalTime = nextAutoUpdate - currentDateTime;

    this.setComponentState();

    this.timeoutInterval = setTimeout(
      () => this.setTimeOutInterval(),
      intervalTime
    );
  }

  setComponentState(data) {
    let currencyPair;
    if (data && data.currencyPair) {
      currencyPair = data.currencyPair;
    } else {
      currencyPair = this.state.apiUrlParams.currencyPair
    }

    this.setState({
      apiUrlParams: {
        currencyPair: currencyPair,
        start: Math.round((Date.now() - 24*60*60*1000)/1000),
        end: Date.now(), 
        period: 300
      }
    }, this.setCurrencyData)
   
  }

  setCurrencyData() {
  	fetch(this.getUrl())
 		.then(result => {
       return result.json()
    }).then(currencyData => {
      this.setState({
        currencyData: currencyData
      })
    }).catch();
  }

  deleteAllCurrencyData() {
    this.setState({
      currencyData: []
    });
  }

  getUrl() {
    let apiUrlParams = this.state.apiUrlParams;
    let url = this.state.apiUrl;
    let esc = encodeURIComponent;
    let query = Object.keys(apiUrlParams).map(k => esc(k) + '=' + esc(apiUrlParams[k])).join('&');

    return url + '&' + query;
  }

  handleChange(event) {
    this.deleteAllCurrencyData();

    let apiUrlParams = {
      currencyPair: 'BTC_' + event.target.value.toUpperCase()
    }

    this.setComponentState(apiUrlParams);
  }

  render() {
    return (
      <main className="container" data-component='main' data-page="cryptocurrency">
        <Helmet>
            <title>Crypto currency</title>
        </Helmet>
        
        <div className='row'>
          <div className='col' data-grid-col='col-tablet-3-12'>
            <Select onSelectChange={this.handleChange} selectedValue={this.state.apiUrlParams.currencyPair.split('_')[1].toLowerCase()} selectOptions={selectOptions} />
          </div>
        </div>
        
        <div className='row'>
        { this.state.currencyData.length ? 
          <table className='currency-data'>
            <thead>
              <tr>
                <th>Time</th>
                <th>High</th>
                <th>Low</th>
                <th>Volume</th>
              </tr>
            </thead>
            <tbody>
            {this.state.currencyData.map(currencyData => 
                <tr key={currencyData.date}>
                  <td><Moment unix tz='Europe/Amsterdam' locale='en' format='dddd, D MMMM YYYY H:mm'>{ currencyData.date }</Moment></td>
                  <td>{currencyData.high.toFixed(12)}</td>
                  <td>{currencyData.low.toFixed(12)}</td>
                  <td>{currencyData.volume.toFixed(12)}</td>
                </tr>
              ) 
            }
            </tbody>
          </table>
          : 
          <Loader />
        }
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  routing: state.routing,
})

const mapDispatchToProps = (dispatch) => ({
  exampleActions: bindActionCreators(ExampleActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Cryptocurrency)