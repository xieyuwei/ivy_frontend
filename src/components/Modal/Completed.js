import React from 'react'

class Completed extends React.Component {
  render () {
    const { props: { onClose, onNext } } = this
    return (
      <div className='modal-block'>
        <div className='modal-close'>
          <a onClick={onClose}>X</a>
        </div>
        <div className='modal-header'>
          <span className='modal-title'>Ready to Start</span>
        </div>
        <div className='modal-body'>
          <b>The collected data has been</b>
          <b>anonymously uploaded to our</b>
          <b>server successfully. After we finish</b>
          <b>the analysis, you'll receive a</b>
          <b>notification to check the result.</b>
        </div>
        <div className='modal-footer'>
          <button className='modal-btn' onClick={onNext}>Recommend iTBra to Friends</button>
        </div>
      </div>
    )
  }
}

export default Completed
