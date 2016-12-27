import React, { Component } from 'react';
import logo from './logo.svg';
import './Dialog.css';

class DialogBox extends Component {
  render() {
    return (
      <Dialog>
        <Title />
        <Body />
        <Footer />
      </Dialog>
    );
  }
}

class Dialog extends Component {
  render() {
    return (
      <div className="Dialog">
      </div>
    );
  }
}

class Title extends Component {
  render() {
    return (
      <div></div>
    )
  }
}

class Body extends Component {
  render() {
    return (
      <div></div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <div></div>
    )
  }
}

export default DialogBox;
