import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class BitcoinTile extends React.Component{
    render(){
        return(
            <div className="bitcoinTile">
            <p> I am a test! Eventually I will have bitcoin information...</p>
            </div> 
        );
    } 
    
}



ReactDOM.render(
  <BitcoinTile />,
  document.getElementById('root')
);
