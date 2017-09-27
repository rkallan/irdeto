import React, { Component } from "react";

// Assets: Styles & Images
import "./assets/styles/Select.css";

class Select extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){

  }

  handleChange(event) {
    this.props.onSelectChange(event);
  }

  render() {
    return (
      <div className="container" data-component="select">
        <div className='unit'>
            { this.props.selectOptions.lenght && this.props.selectOptions.lenght > 1  }
            <select onChange={this.handleChange} value={ this.props.selectedValue }>
                { Object.keys(this.props.selectOptions).map(
                    optionKey => <option key={optionKey} value={optionKey}>{this.props.selectOptions[optionKey]}</option>
                )}    
            </select>
        </div>
      </div>
    );
  }
}
export default Select;
