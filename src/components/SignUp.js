import React from 'react'
import $ from 'jquery';
import { homeText, resultText } from '../lib'
import '../assets/styles/signUp.css'
import back from './../assets/images/back.svg';
import scan from './../assets/images/scan.svg';



class SignUp extends React.Component {
  constructor () {
    super();
    this.changeColor = this.changeColor.bind(this);
  }

  showSignUpContent () {
    return (
      <div>
        <div className='signUp-content'>
          <div>Phone Number</div>
          <div>
            <div>Verification Code</div>
            <button className='signUp-content-btn'>Send Code</button>
          </div>
          <div>
            <div>Create a Passcode</div>
            <div className="signUp-box">
              <span className="signUp-box-small"></span>
              <span className="signUp-box-small"></span>
              <span className="signUp-box-small"></span>
              <span className="signUp-box-small"></span>
            </div>
          </div>
          <div>
            <div>Re-enter the Passcode</div>
            <div className="signUp-box">
              <span className="signUp-box-small"></span>
              <span className="signUp-box-small"></span>
              <span className="signUp-box-small"></span>
              <span className="signUp-box-small"></span>
            </div>
          </div>
        </div>
        <div className='signUp-content'>
          <div>Name</div>
          <div>Date of Birth</div>
          <div>Country</div>
        </div>
        <div className='signUp-content'>
          <div>
            <div>I agree to the iTBra Terms of Use and<br/> Privacy Policy</div>
            <div className='signUp-circle' onClick={this.changeColor}>
              <div className='signUp-circle-big'>
                <div className='signUp-circle-small'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  changeColor () {
    let point = $(".signUp-circle-small");
    if(point.hasClass("signUp-circle-color")){
      point.removeClass("signUp-circle-color");
    }else{
      point.addClass("signUp-circle-color");
    }
  }

  render () {
    return (
      <div className='signUp'>
        <div className='signUp-container'>
          <div className='signUp-title'>
            <img src={back} className='signUp-back' alt="back"/>
            <p>Sign Up</p>
            <img src={scan} className='signUp-scan' alt="scan"/>
          </div>
          {this.showSignUpContent()}
        </div>
        <div className='signUp-footer'>
          <button className='signUp-btn'>Sign Up</button>
        </div>
      </div>
    )
  }
}

export default SignUp
