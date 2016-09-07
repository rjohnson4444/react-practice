import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Poster = React.createClass({
  render() {
    const { image, title, text } = this.props.poster;

    const posterStyles = {
      height: '400px',
      width: '600px',
      border: '1px solid #00d7ff',
      position: 'fixed',
      top: '20%',
      right: '8%',
      backgroundColor: 'rgb(33, 33, 33)',
    }

    return(
      <div style={posterStyles}>
        <Image image={image}/>
        <Title title={title}/>
        <Text text={text}/>
      </div>
    )
  }
})

const Image = React.createClass({
  render() {
    const imageContainerStyles = {
      height: '260px',
      width: '433px',
      position: 'relative',
      border: '1px solid #00d7ff',
      top: '10%',
      left: '14%',
    }

    const imageStyles = {
      position: 'relative',
      display: 'block',
      margin: 'auto',
      top: '6%',
    }

    return(
      <div style={imageContainerStyles}>
        <img style={imageStyles}src='images/react.png' />
      </div>
    )
  }
})

const Title = React.createClass({
  render() {
    let title         = this.props.title
    let titleLength   = title.length
    let firstLetter   = title.charAt(0).toUpperCase()
    let lastLetter    = title.charAt(titleLength - 1).toUpperCase()
    let restOfLetters = title.substr(1, titleLength - 2).toUpperCase()

    const titleStyles = {
      position: 'relative',
      top: '9%',
      color: '#00d7ff',
      textAlign: 'center',
      fontFamily: 'Times',
      fontWeight: 'bold',
    }

    const firstLetterStyles = {
      fontSize: '43px',
      display: 'inline-block',
    }

    const restOfLettersStyles = {
      position: 'relative',
      display: 'inline-block',
      bottom: '5px',
      fontSize: '35px',
      letterSpacing: '1.5px',
      padding: '0px 2px',
    }

    const lastLetterStyles = {
      fontSize: '43px',
      display: 'inline-block',
    }

    return(
      <div style={titleStyles}>
        <div style={firstLetterStyles}>
          {firstLetter}
        </div>
        <div style={restOfLettersStyles}>
          {restOfLetters}
        </div>
        <div style={lastLetterStyles}>
          {lastLetter}
        </div>
      </div>
    )
  }
})

const Text = React.createClass({
  render() {
    const textStyles = {
      color: 'white',
      position: 'relative',
      top: '10%',
      fontSize: '22px',
      letterSpacing: '1px',
      textAlign: 'center',
    }

    return(
      <div style={textStyles}>
        {this.props.text}
      </div>
    )
  }
})

const poster = {
  image: 'images/react.png',
  title: 'React',
  text: 'The best thing since jQuery, probably.'
}

ReactDOM.render(
  <Poster poster={poster}/>,
  document.getElementById('root')
);
