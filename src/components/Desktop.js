import React from 'react'
import '../assets/styles/desktop.css'
import avator from './../assets/images/profile-photo.jpg';
import banner from './../assets/images/banner-image.jpg';
import hm from './../assets/logos/hm-logo.svg';
import move from './../assets/logos/move-logo.svg';

import down from './../assets/icons/icon-down-arrow.svg';
import List from './List'


class Desktop extends React.Component {
  render () {
    return (
      <div className='Desktop'>
        <div className='Desktop-header'>
          <img src={move} className='Desktop-header-move' alt="logo-move"/>
          <div className="Desktop-header-tab">
            <span>VACANCIES</span>
            <span>FUNCTIONS</span>
            <span>MY APPLICATIONS(3)</span>
            <span>MY TEAM</span>
          </div>
          <div className="Desktop-header-personal">
            <span>
              Hi Employee
              <i className="fa fa-chevron-down" aria-hidden="true" />
            </span>
            <img src={avator} alt="avator"/>
          </div>
        </div>
        <div className='Desktop-banner'>
          <img src={banner} className='Desktop-banner-img' alt="banner"/>
          <p>VA<span>CACI</span>ES</p>
        </div>
        <div className='Desktop-selector'>
          <p>Sort by</p>
          <div>
            Newest Vacancy
            <span><i></i></span>
          </div>
        </div>
        <div className='Desktop-content'>
          <List/>
        </div>
        <div className='Desktop-footer'>
          <p>Align QR Code / barcode within</p>
          <p>frame to scan</p>
        </div>
      </div>
    )
  }
}

export default Desktop
