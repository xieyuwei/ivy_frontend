import React from 'react'
import { homeText, resultText } from '../lib'
import '../assets/styles/knowledge.css'
import logo from './../assets/images/logo.svg';


class Knowledge extends React.Component {
  constructor () {
    super()
  }

  showKnowledgeContent () {
    return (
      <div>
        <div className='knowledge-content'>
          <div>
            <img src={logo} className="knowledge-logoPlaceHolder" alt="logo"/>
              <p>
                <p>About Breast Health</p>
                <p>Lorem ipsum dolor sit amet,<br/>
                  consectetur adipiscing elit.Nullam ac<br/> ullamcorper Lectus. Cras eget elit eu<br/>
                  arcu fringilla
                </p>
              </p>
          </div>
          <div>
            <img src={logo} className="knowledge-logoPlaceHolder" alt="logo"/>
              <p>
                <p>About iTbra</p>
                <p>Lorem ipsum dolor sit amet,<br/>
                  consectetur adipiscing elit.Nullam ac<br/> ullamcorper Lectus.
                </p>
              </p>
          </div>
          <div>
            <img src={logo} className="knowledge-logoPlaceHolder" alt="logo"/>
              <p>
                <p>Future topic # 1</p>
                <p>Lorem ipsum dolor sit amet,<br/>
                  consectetur adipiscing elit.Nullam ac
                </p>
              </p>
          </div>
          <div>
            <img src={logo} className="knowledge-logoPlaceHolder" alt="logo"/>
              <p>
                <p>Future topic # 2</p>
                <p>Lorem ipsum dolor sit amet,<br/>
                  consectetur adipiscing elit.Nullam ac
                </p>
              </p>
          </div>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className='knowledge'>
        <div className="knowledge-title">
          Knowledge Base
        </div>
        {this.showKnowledgeContent()}
      </div>
    )
  }
}

export default Knowledge
