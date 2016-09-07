import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const NavContainer = React.createClass({
  render() {
    return (
      <Nav>
        <NavItem url='/' icon='fa fa-home icon'>Home</NavItem>
        <NavItem url='/about' icon='fa fa-bars icon'>About</NavItem>
        <NavItem url='/contact' icon='fa fa-envelope icon'>Contact</NavItem>
        <a href='/'>Contacts</a>
      </Nav>
    );
  }
})

const Nav = React.createClass({
  propTypes: {
    children: React.PropTypes.arrayOf(
      React.PropTypes.oneOfType([
        React.PropTypes.element
      ])
    )
  },

  render() {
    let items = React.Children.toArray(this.props.children);
    for(let i = items.length - 1; i >= 1; i--) {
      items.splice(i, 0,
        <span key={i} className='separator'>|</span>
      );
    }

    return (
      <div>{items}</div>
    );
  }
})

function NavItem({ children, url, icon }) {
  return (
    <a href={url} className='nav-item'>
      <i className={icon} />
      {children}
    </a>
  )
}

ReactDOM.render(
  <NavContainer />,
  document.getElementById('root')
);
