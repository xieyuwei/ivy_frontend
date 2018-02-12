import React from 'react'

class Connected extends React.Component {
  componentDidMount () {
    const { onNext } = this.props
    setTimeout(onNext, 3000)
  }
  render () {
    const { props: { onClose } } = this
    return (
      <div className='modal-block'>
        <div className='modal-close'>
          <a onClick={onClose}>X</a>
        </div>
        <div className='modal-header'>
          <span className='modal-title'>iTBra Connected</span>
        </div>
        <div className='modal-body'></div>
      </div>
    )
  }
}

export default Connected
