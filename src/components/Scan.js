import React from 'react'
import '../assets/styles/scan.css'
import back from './../assets/images/back.svg';

class Scan extends React.Component {
  constructor () {
    super();
    this.cameraUp = this.cameraUp.bind(this);
  }
  componentDidMount() {
    this.cameraUp();
  }
  cameraUp() {
    var video = document.getElementById('video'),
      canvas = document.getElementById('canvas'),
      snap = document.getElementById('tack'),
      img = document.getElementById('img'),
      vendorUrl = window.URL || window.webkitURL;

    //媒体对象
    navigator.getMedia = navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;
    navigator.getMedia({
      video: true, //使用摄像头对象
      audio: false  //不适用音频
    }, function(strem){
      console.log(strem);
      video.src = vendorUrl.createObjectURL(strem);
      video.play();
    }, function(error) {
      //error.code
      console.log(error);
    });
  }
  render () {
    return (
      <div className='Scan'>
        <div className='Scan-title'>
          <img src={back} className='Scan-back' alt="back"/>
          <p>Scan QR Code</p>
          <p>Album</p>
        </div>
        <div className='Scan-container'>
          {/*<div className='Scan-container-camera'>1111</div>*/}
          <video id="video" className='Scan-container-camera'></video>
          <p>Align QR Code / barcode within</p>
          <p>frame to scan</p>
        </div>
      </div>
    )
  }
}

export default Scan
