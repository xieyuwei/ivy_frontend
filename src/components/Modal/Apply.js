import React from 'react'

class Apply extends React.Component {
  render () {
    const { props: { onClose, onNext } } = this
    return (
      <div className='modal-block'>
        <div className='modal-close'>
          <a onClick={onClose}>X</a>
        </div>
        <div className='modal-header'>
          <span className='modal-title'>Apply Your iTBra</span>
        </div>
        <div className='modal-body'></div>
        <div className='modal-footer'>
          <button className='modal-btn' onClick={onNext}>I'm ready.Let's start!</button>
        </div>
      </div>
    )
  }
}

export default Apply
