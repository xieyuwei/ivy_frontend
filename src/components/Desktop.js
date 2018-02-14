import React from 'react'
import '../assets/styles/desktop.css'
import avator from './../assets/images/profile-photo.jpg';
import banner from './../assets/images/banner-image.jpg';
import hm from './../assets/logos/hm-logo.svg';
import move from './../assets/logos/move-logo.svg';

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
          <div className='Desktop-selector-firstRow'>
            <p>Sort by</p>
            <div>
              <p>Newest Vacancy</p>
              <i className="fa fa-chevron-down" aria-hidden="true"/>
            </div>
          </div>
          <div className='Desktop-selector-secondRow'>
            <p>F I L T E R S<i className="fa fa-plus" aria-hidden="true" /></p>
            <div className='Desktop-selector-secondRow-find'>
              <p>F I N D</p>
              <input placeholder="Type any Job Title"/>

              <i className="fa fa-search" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className='Desktop-content'>
          <List/>
        </div>
        <div className='Desktop-footer'>
          <img src={hm} alt="hm-logo"/>
          <div className='Desktop-footer-right'>
            <p>BACK TO TOP</p>
            <i className="fa fa-chevron-up" aria-hidden="true"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Desktop
