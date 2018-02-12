import ReactDOM from 'react-dom';
import React from 'react'
import '../assets/styles/install.css'
import appStore from './../assets/images/app-Store.jpeg';
import googlePlay from './../assets/images/google-play.jpeg';
import logo from './../assets/images/logo.svg';


class Knowledge extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className='install'>
        <div className="install-logo">
          <img src={logo} className="install-logoPlaceHolder" alt="logo"/>
          <p>by Cyrcadia</p>
        </div>
        <div className="install-icon">
          <img src={googlePlay} className="install-googlePlay" alt="googlePlay"/>
          <img src={appStore} className="install-appStore" alt="appStore"/>
        </div>
      </div>
    )
  }
}

export default Knowledge
