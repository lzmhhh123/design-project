import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
var browser = navigator.userAgent.toLowerCase();
var isMobile = false;
for (var i=0; i<mobileAgent.length; i++)
{ if (browser.indexOf(mobileAgent) != -1) { isMobile = true;} }

if(isMobile) ReactDOM.render(<Main />, document.getElementById('root'));
else ReactDOM.render(<Main />, document.getElementById('root'));
