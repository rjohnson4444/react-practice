import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Email = React.createClass({
  render() {
    const { sender, subject, date, message } = this.props.email;

    return (
      <div className="email-body">
        <Checkbox />
        <Thumbtack />
        <Sender sender={sender}/>
        <Subject subject={subject} />
        <Date date={date}/>
        <Message subject={subject} message={message} />
      </div>
    )
  }
});

const Checkbox = React.createClass({
  render() {
    return (
      <div className='email-checkbox'>
        <input type='checkbox' />
      </div>
    )
  }
});

const Sender = React.createClass({
  render() {
    return (
      <div className='sender'>
        {this.props.sender}
      </div>
    )
  }
})

const Subject = React.createClass({
  render() {
    return (
      <div className='subject'>
        {this.props.subject}
      </div>
    )
  }
});

const Date = React.createClass({
  render() {
    return (
      <div className='date'>
        {this.props.date}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return (
      <div className='message'>
        {this.props.subject} - {this.props.message}
      </div>
    )
  }
});

const Thumbtack = React.createClass({
  render() {
    return (
      <div className='thumbtack'>
        <i className='fa fa-thumb-tack' />
      </div>
    )
  }
})

const email = {
  sender: 'Ryan Johnson',
  subject: 'How Have You Been?',
  date: 'Jun 23',
  message: "I wanted to touch basis with you to see how you've been doing?",
};

ReactDOM.render(
  <Email email={email} />,
  document.getElementById('root')
);
