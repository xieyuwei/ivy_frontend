import React from 'react'
import '../assets/styles/list.css'
import { desktopLists } from '../lib'
import locationIcon from '../assets/icons/icon-location.svg'

class List extends React.Component {
  render () {
    return (
      desktopLists.map(({ key, title, icon, location, Function, status, Published, Expires }) => (
        <div key={key} className="List">
          <div className="List-title"><span>{title}</span></div>
          <div className="List-container">
            <img src={locationIcon} className={`List-container-icon ${icon ? '' : 'iconFalse'}`} alt="locationIcon"/>
            <div className="List-container-content">
              <div><span className="List-container-content-name">Location</span><span
                className="List-container-content-filler">{location}</span></div>
              <div><span className="List-container-content-name">Function</span><span
                className="List-container-content-filler">{Function}</span></div>
              <div><span className="List-container-content-name">Status</span><span
                className="List-container-content-filler">{status}</span></div>
              <div><span className="List-container-content-name">Published</span><span
                className="List-container-content-filler">{Published}</span></div>
              <div><span className="List-container-content-name">Expires</span><span
                className="List-container-content-filler">{Expires}</span></div>
            </div>
          </div>
        </div>
      )
    ))
  }
}

export default List
