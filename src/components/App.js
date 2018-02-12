import React, { Component } from 'react';
import '../assets/styles/app.css'
import Navigation from './Navigation'
import Home from './Home'
import Knowledge from './Knowledge'
import Me from './Me'

import Scan from './Scan'
// import Install from './Install'
// import SignUp from './SignUp'
// import Landing from './Landing'

class App extends Component {
  constructor () {
    super()
    this.state = {
      pageIndex: 0,
      showModal: false
    }
    this.switchContent = this.switchContent.bind(this)
  }
  showContent () {
    const { pageIndex } = this.state
    return (
      <div className='app-content'>
        <div className={`app-content-item ${pageIndex !== 0 ? 'hidden' : ''}`}>
          <Home />
        </div>
        <div className={`app-content-item ${pageIndex !== 1 ? 'hidden' : ''}`}>
          <Knowledge />
        </div>
        <div className={`app-content-item ${pageIndex !== 2 ? 'hidden' : ''}`}>
          <Me />
        </div>
      </div>
    )
  }
  switchContent (index) {
    this.setState({ pageIndex: index })
  }
  render() {
    const { pageIndex } = this.state
    return (
      <div className="app">
        <Scan />
        {/*<Install />*/}
        {/*<Landing />*/}
        {/*<SignUp />*/}
        {/*{this.showContent()}*/}
        {/*<Navigation onSwitch={this.switchContent} value={pageIndex} />*/}
      </div>

    );
  }
}

export default App;
