import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import data from'./inputFile.json';

class BitcoinTile extends React.Component{
    render(){
        return(
                <div className="bitCoinTile">
                    <label className="bitCoinPriceLabel">Bitcoin price: </label>
                    <br /> 
                    <span className="bitCoinPrice">Current bitcoin price: </span>
                </div>

        );
    } 
    
}

class BitCoinRestCall extends React.Component {
    constructor() {
        super();
    
        this.state = {
          posts: []
        };
      }
    
      
    /*  componentDidMount(){
        axios
          .get('./inputFile.json')
          .then(({ data })=> {
            console.log(data);
            this.setState(
              { array: data.recipes }
            );
          })
          .catch((err)=> {})
      }
    */
      render() {
      
        return (
          <div>
            <ul>
            <p>
                Currency: {data.FromCurrencyName} ({data.FromCurrencySymbol})<br />
                Current Date: {data.Date} <br />
                Amount in USD: {data.Rate} <br />
            </p>
           </ul>
          </div>
        );
      }
    }
   



ReactDOM.render(
  <BitCoinRestCall />,
  document.getElementById('root')
);
