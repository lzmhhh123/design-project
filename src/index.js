import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import Mobile from './Mobile/Main'
import './css/index.css'
import './css/filepicker.css'
import './css/dropzone.min.css'
import './css/styles.min.css'
import './css/antd.min.css'
import initReactFastclick from 'react-fastclick';
initReactFastclick();
var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
var browser = navigator.userAgent.toLowerCase();
var isMobile = false;
for(var i = 0; i < mobileAgent.length; i++) {
  if(browser.indexOf(mobileAgent[i]) !== -1) {
    isMobile = true;
  }
}

if(0) ReactDOM.render(<Mobile />, document.getElementById('root'));
else {
  document.body.onresize = () => {
    if (document.body.clientWidth > document.body.clientHeight ) {
      ReactDOM.render(<Main />, document.getElementById('root'));
    }
    else ReactDOM.render(<Mobile />, document.getElementById('root'))
  }
  if (document.body.clientWidth > document.body.clientHeight ) ReactDOM.render(<Main />, document.getElementById('root'))
  else ReactDOM.render(<Mobile />, document.getElementById('root'))
}
