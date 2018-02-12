import React from 'react'
import '../assets/styles/navigation.css'
import { navigations } from '../lib'

const Navigation = ({ value, onSwitch }) => (
  <div className='navigation'>
    {
      navigations.map(({ key, title, icon }) => (
        <div key={key} className={`navigation-item ${value === key ? 'active' : ''}`}
        onClick={() => onSwitch ? onSwitch(key) : null}>
          <a>{title}</a>
        </div>
      ))
    }
  </div>
)

export default Navigation
