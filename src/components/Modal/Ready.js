import React from 'react'

class Ready extends React.Component {
  componentDidMount () {
    const { onNext } = this.props
    setTimeout(onNext, 2000)
  }
  render () {
    const { props: { onClose } } = this
    return (
      <div className='modal-block'>
        <div className='modal-close'>
          <a onClick={onClose}>X</a>
        </div>
        <div className='modal-header'>
          <span className='modal-title'>Ready to Start</span>
        </div>
        <div className='modal-body'></div>
        <div className='modal-footer'>
          <b>Your iTBra is in good condition and the</b>
          <b style={{ marginBottom: '2rem' }}>scan is about to start right now</b>
        </div>
      </div>
    )
  }
}

export default Ready
