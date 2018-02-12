import React from 'react'
import '../../assets/styles/modal.css'
import Apply from './Apply'
import Ready from './Ready'
import Connected from './Connected'
import Completed from './Completed'
import Share from './Share'

class Modal extends React.Component {
  constructor() {
    super()
    this.state = {
      step: 0
    }
    this.goNextStep = this.goNextStep.bind(this)
  }
  goNextStep () {
    let step = this.state.step + 1
    if (step === 1) {
      this.props.onClose()
    }
    if (step === 5) {
      this.props.onClose(true)
      step = 1
    }
    this.setState({ step })
  }
  showModalContent() {
    const { step } = this.state
    let Content = null
    switch (step) {
      default:
      case 0:
        Content = Share
        break
      case 1:
        Content = Apply
        break
      case 2:
        Content = Connected
        break
      case 3:
        Content = Ready
        break
      case 4:
        Content = Completed
        break
    }
    return Content ? <Content {...this.props} onNext={this.goNextStep} /> : Content
  }
  render() {
    const { props: { isOpen } } = this
    return (
      <div className={`modal ${isOpen ? 'open' : ''}`}>
        {this.showModalContent()}
      </div>
    )
  }
}

export default Modal
