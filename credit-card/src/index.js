import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const CreditCard = React.createClass({
  render() {
    let { bankName, creditCardNumber, expirationDate, name } = this.props.cardInfo;

    let cardStyles = {
      backgroundColor: 'blue',
      position: 'fixed',
      top: '30%',
      left: '30%',
      height: '200px',
      width: '300px',
      border: '1px solid blue',
      borderRadius: '10px'
    }

    return(
      <div style={cardStyles}>
        <BankName bankName={bankName} />
        <CardNumber cardNumber={creditCardNumber} />
        <ExpirationDate expirationDate={expirationDate} />
        <CardholderName cardHolderName={name} />
      </div>
    )
  }
});

const BankName = React.createClass({
  render() {
    const bankNameStyle = {
      color: 'white',
      textSize: '15px',
      marginTop: '10%',
      marginLeft: '50%',
      fontSize: '20px'
    };

    return(
      <div style={bankNameStyle}>
        {this.props.bankName}
      </div>
    )
  }
})

const CardNumber = React.createClass({
  render() {

    let creditCardNumbers = this.props.cardNumber.split(" ");

    const cardNumberStyles = {
      position: 'relative',
      top: '20%',
      left: '8%',
    };

    const numberStyles = {
      padding: '0px 10px',
      color: 'white',
      fontSize: '20px'
    };

    const firstFourNumbersStyles = {
      position: 'relative',
      color: 'white',
      fontSize: '8px',
      padding: '0px 10px',
    }

    const firstFourOfCardNumber = creditCardNumbers[0]

    const cardNumbers = creditCardNumbers.map((number, index) => {
      return(
        <span key={index} style={numberStyles}>{ number }</span>
      )
    });

    return(
      <div style={cardNumberStyles}>
        {cardNumbers}
        <div style={firstFourNumbersStyles}>{firstFourOfCardNumber}</div>
      </div>
    )
  }
})

const ExpirationDate = React.createClass({
  render() {
    const expirationDateStyles = {
      position: 'relative',
      top: '20%',
      left: '35%',
      color: 'white',
    }

    const validStyles = {
      color: 'white',
      fontSize: '8px',
      float: 'left',
      width: '10px',
      paddingRight: '20px',
    }

    return(
      <div style={expirationDateStyles}>
        <div style={validStyles}>VALID THRU</div>
        {this.props.expirationDate}
      </div>
    )
  }
})

const CardholderName = React.createClass({
  render() {
    const name = this.props.cardHolderName.toUpperCase();

    const cardHolderNameStyles = {
      position: 'relative',
      top: '65px',
      left: '35px',
      color: 'white',

    }

    return(
      <div style={cardHolderNameStyles}>
        {name}
      </div>
    )
  }
})

const cardInfo1 = {
  name: 'Ryan Johnson',
  expirationDate: '08/19',
  creditCardNumber: '1234 5678 8765 4321',
  bankName: 'Big Bank, Inc.'
}

const cardInfo2 = {
  name: 'Kayla Johnson',
  expirationDate: '04/23',
  creditCardNumber: '2234 5423 4242 2355',
  bankName: 'Simple'
}

ReactDOM.render(
  <CreditCard cardInfo={cardInfo1} />,
  document.getElementById('root')
);
