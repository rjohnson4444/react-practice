import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const ErrorBoxContainer = React.createClass({
  render() {
    return (
      <ErrorBox>
        The word is ending
      </ErrorBox>
    )
  }
})

function ErrorBox(props) {
  return (
    <div className='error-box'>
      <i className='fa fa-exclamation-triangle fa-2x icon' />
      <span className='text'>
        {props.children}
      </span>
    </div>
  )
}

ReactDOM.render(
  <ErrorBoxContainer />,
  document.getElementById('root')
);
