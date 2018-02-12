import React from 'react'
import { homeText, resultText } from '../lib'
import '../assets/styles/me.css'
import right from './../assets/images/right.svg';
import myPhoto from './../assets/images/me.png';



class Me extends React.Component {
  constructor () {
    super()
  }

  showMeContent () {
    return (
      <div>
        <div className='me-content'>
          <div>
            <div>My Physician</div>
            <img src={right} className="Me-right" alt="right"/>
          </div>
          <div>
            <div>My Insurance</div>
            <img src={right} className="Me-right" alt="right"/>
          </div>
        </div>

        <div className='me-content'>
          <div>
            <div>Recommend iTBra</div>
            <img src={right} className="Me-right" alt="right"/>
          </div>
        </div>

        <div className='me-content'>
          <div>
            <div>Contact Us</div>
            <img src={right} className="Me-right" alt="right"/>
          </div>
          <div>
            <div>About the App</div>
            <img src={right} className="Me-right" alt="right"/>
          </div>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className='me'>
        <div className='me-avatar'>
          <img src={myPhoto} className='me-pic' alt="myPhoto" />
        </div>
        <div className='me-name'>
          <b>Jane</b>
        </div>
        {this.showMeContent()}
      </div>
    )
  }
}

export default Me
