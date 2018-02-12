import ReactDOM from 'react-dom';
import React from 'react'
import '../assets/styles/landing.css'

import logo from './../assets/images/logo.svg';


class Landing extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className='landing'>
        <div className="landing-logo">
          <img src={logo} className="landing-logoPlaceHolder" alt="logo"/>
        </div>
        <div className='landing-footer'>
          <button className='landing-btn'>Sign Up</button>
          <p>Already a user? <u>Log in</u></p>
        </div>
      </div>
    )
  }
}

export default Landing
