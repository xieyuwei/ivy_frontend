import React from 'react'
import { homeText, resultText } from '../lib'
import '../assets/styles/home.css'
import Modal from './Modal'

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      showModal: true,
      showResult: false,
      showHistory: true
    }
    this.closeModal = this.closeModal.bind(this)
    this.showModal = this.showModal.bind(this)
  }
  showText () {
    const { showResult } = this.state
    const text = showResult ? resultText : homeText
    return (
      <div className='home-text'>
        {
          text.map((item, index) => (
            <span key={index}>{item}</span>
          ))
        }
      </div>
    )
  }
  showScanBtn () {
    return !this.state.showResult ? (
      <div className='home-btn'>
        <button onClick={this.showModal}>Start a Scan</button>
      </div>
    ) : null
  }
  showScanResult () {
    return this.state.showResult ? (
      <div className='home-result'>
        <div className='home-result-card'>
          <div>
            <div>Scan Time</div>
            <div>Nov 25,2017 07:30 pm - 09:03 pm</div>
          </div>
          <div>
            <div>Result</div>
            <div>Clear</div>
          </div>
        </div>
        <div className='home-result-btn'>
          <button>Recommend iTBra to Friends</button>
          <button onClick={this.showModal}>Start a Scan</button>
        </div>
      </div>
    ) : null
  }
  showHistoryResult () {
    return this.state.showHistory ? (
      <div className='home-history'>
        <div className='home-history-header'>
          <div>Scan History</div>
          <div>Show All ></div>
        </div>
        <div className='home-history-item'>
          <div>November</div>
          <div>Nov 26,2017 9:30 pm</div>
        </div>
        <div className='home-history-item'>
          <div>October</div>
          <div>Oct 28,2017 7:03 pm</div>
        </div>
        <div className='home-history-item'>
          <div>September</div>
          <div>Sep 24,2017 8:03 pm</div>
        </div>
      </div>
    ) : null
  }
  showModal () {
    this.setState({ showModal: true })
  }
  closeModal (isFinish) {
    let newState = { showModal: false }
    if (isFinish) {
      newState = Object.assign({}, newState, { showResult: true })
    }
    this.setState(newState)
  }
  render () {
    const { showModal } = this.state
    return (
      <div className='home'>
        <Modal onClose={this.closeModal} isOpen={showModal} />
        <div className='home-header'></div>
        <div className='home-name'>Hi, <b>Jane</b></div>
        {this.showText()}
        {this.showScanBtn()}
        {this.showScanResult()}
        {this.showHistoryResult()}
      </div>
    )
  }
}

export default Home
