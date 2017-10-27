import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

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
    
      componentDidMount() {
        axios.get(`http://globalcurrencies.xignite.com/xGlobalCurrencies.json/GetHistoricalRate?_token=AE4A02E0271A4E77B78B314AEE9A132D&Symbol=EURUSD&PriceType=Mid&AsOfDate=10/20/2017&FixingTime=22:00`)
          .then(res => {
            const posts = res.data.data.children.map(obj => obj.data);
            this.setState({ posts });
          });
      }
    
      render() {
        return (
          <div>
            <ul>
              {this.state.posts}
            </ul>
          </div>
        );
      }
    }
   



ReactDOM.render(
  <BitCoinRestCall />,
  document.getElementById('root')
);
