import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Envelope = React.createClass({
    render: function() {
        return(
            <div className='envelope'>
                <div className='from-address'>
                  <AddressLabel person={this.props.fromPerson}/>
                </div>
                <div className='to-address'>
                  <AddressLabel person={this.props.toPerson}/>
                </div>
                <div className='stamp'>
                  <Stamp stampText={this.props.stamp.stampText}/>
                </div>
            </div>
        )
    }
});

const AddressLabel = React.createClass({
    render: function() {
        const { firstName, lastName, address, city, state, zipcode } = this.props.person;
        const fullName   = `${firstName} ${lastName}`

        return (
            <div className='full-name'>
                <div>
                    {fullName}
                </div>
                <div>
                    {address}
                </div>
                <div>
                    {city}, {state} {zipcode}
                </div>
            </div>
        );
    }
});

const Stamp = React.createClass({
  render: function() {
    const { stampText } = this.props;
    return(
      <div className='stampText'>
        {stampText}
      </div>
    )
  }
})

var toPerson = {
    firstName: 'Kayla',
    lastName: 'Johnson',
    address: '14228 e 1st dr, Unit C-12',
    city: 'Denver',
    state: 'CO',
    zipcode: 82932
}

var fromPerson = {
    firstName: 'Eddie',
    lastName: 'Ramon',
    address: '345 Main St.',
    city: 'Aurora',
    state: 'CO',
    zipcode: 80011
}

var stamp = {
  stampText: 'STAMP'
}

ReactDOM.render(
  <Envelope stamp={stamp} toPerson={toPerson} fromPerson={fromPerson}/>,
  document.getElementById('root')
);
