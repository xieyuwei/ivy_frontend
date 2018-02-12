import React from 'react'

class Share extends React.Component {
  render () {
    console.log('completed render')
    const { props: { onNext } } = this
    return (
      <div className='modal-block'>
        <div className='modal-header'>
          <span className='modal-title'>You've completed 6 scan now,  </span>
          <span className='modal-title'>amazing work!</span>
        </div>
        <div className='modal-body'>
          <b>To better raise awareness and improve</b>
          <b>early detection, we encourage our users</b>
          <b>to share the iTBra with family and friends</b>
          <b>to everyone can stay healthy and safe.</b>
          <br />
          <b>Would you like to do that?</b>
        </div>
        <div className='modal-footer'>
          <button className='modal-btn'>Let's Tell People About It</button>
          <button className='modal-btn' onClick={onNext}>Not Right Now</button>
        </div>
      </div>
    )
  }
}

export default Share
