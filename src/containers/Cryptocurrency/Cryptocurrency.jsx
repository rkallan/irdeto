import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/nl';

// NPM Modules
import { Helmet } from "react-helmet";

// Assets: Styles & Images
import './assets/styles/Cryptocurrency.css';

// Actions
import { ExampleActions } from '../../redux/example';

class Cryptocurrency extends React.Component {
  constructor() {
  	super();
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

  handleChange(event) {
    let pair = 'BTC_' + event.target.value;
    this.state = { 
      currencyData:[],
      apiUrl: 'https://poloniex.com/public?command=returnChartData',
      apiUrlParams: {
        currencyPair: pair,
       start: Math.round((Date.now() - 24*60*60*1000)/1000),
       end: Date.now(), 
       period: 300
      }
    };
    this.getData();
  }

  componentWillMount() {
    this.getData();
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.autoUpdate(),
      300000
    );
  }

  shouldComponentUpdate() {
    return true;
  }

  autoUpdate() {
    this.setState({
      currencyData:[],
      apiUrl: 'https://poloniex.com/public?command=returnChartData',
      apiUrlParams: {
        currencyPair: 'BTC_XMR',
        start: Math.round((Date.now() - 24*60*60*1000)/1000),
        end: Date.now(), 
        period: 300
      }
    })
    this.getData();
  }

  getData() {
    let url = this.getUrl();
  	fetch(url)
 		.then(result => result.json())
    .then(currencyData => this.setState({currencyData}))
  }

  getUrl() {
    let apiUrlParams = this.state.apiUrlParams;
    let url = this.state.apiUrl;
    let esc = encodeURIComponent;
    let query = Object.keys(apiUrlParams).map(k => esc(k) + '=' + esc(apiUrlParams[k])).join('&');

    return url + '&' + query;
  }

  render() {
    return (
      <main className="container" data-component='main' data-page="cryptocurrency">
        <Helmet>
            <title>Crypto currency</title>
        </Helmet>

        <div className='row'>
        {}
          <div className='col'>
          <select onChange={this.handleChange} value={this.state.apiUrlParams.currencyPair.split('_')[1]}>
            <option value="LSK">Lisk (LSK)</option>
            <option value="ETH">Etherium (ETH)</option>
            <option value="XMR">Monero (XMR)</option>
            <option value="STRAT">StratisAudi (STRAT)</option>
            <option value="BCH">Bitcoin Cash (BCH)</option>
          </select>
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
            {this.state.currencyData.reverse().map(currencyData => 
                <tr key={currencyData.date}>
                  <td><Moment unix tz='Europe/Amsterdam' locale='nl' format='dddd, D MMMM YYYY H:mm'>{ currencyData.date }</Moment></td>
                  <td>{currencyData.high}</td>
                  <td>{currencyData.low}</td>
                  <td>{currencyData.volume}</td>
                </tr>
              ) 
            }
            </tbody>
          </table>
          : <div>Loading</div>
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