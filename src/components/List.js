import React from 'react'
import '../assets/styles/list.css'
import { desktopLists } from '../lib'
import locationIcon from '../assets/icons/icon-location.svg'

const List = ({ value, onSwitch }) => (
  <div className='List'>
    {
      desktopLists.map(({ key, title, icon, location, Function, status, Published, Expires }) => (
        <div key={key}>
          <div className="List-title"><span>{title}</span></div>
          <div className="List-container">
            <div className={`List-container ${icon ? '' : 'iconFalse'}`}>
              <img src={locationIcon} alt="locationIcon" />
            </div>
            <div className="List-container-content">
              <div><span>Location</span><span>{location}</span></div>
              <div><span>Function</span><span>{Function}</span></div>
              <div><span>Status</span><span>{status}</span></div>
              <div><span>Published</span><span>{Published}</span></div>
              <div><span>Expires</span><span>{Expires}</span></div>
            </div>
          </div>
        </div>
        //通过类名来判断是否显示，看一下源代码里active的样式，这里类名没有-，不知道会不会出错
      ))
    }
  </div>
)

export default List
