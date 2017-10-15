var ReactDOM = require('react-dom');
var React = require('react');

var $ = require("jquery");
window.jQuery = $;
require('./../../libraries/tagcanvas/tagcanvas.min');
require("react-image-gallery/styles/css/image-gallery.css") ;


var AppController = require('../controller/app-controller.jsx').view;
var PortfolioStore = require("../store/portfolio-store");
var PortfolioAction = require('../action/portfolio-action');
ReactDOM.render(<AppController store={PortfolioStore} action={PortfolioAction}/>, document.querySelector('body'));