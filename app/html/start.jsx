var ReactDOM = require('react-dom');
var React = require('react');

var $ = require("jquery");
window.jQuery = $;
require('./../../libraries/tagcanvas/tagcanvas.min');
require("react-image-gallery/styles/css/image-gallery.css") ;
require('react-toastify/dist/ReactToastify.min.css');

var PortfolioStore = require("../store/portfolio-store");
var PortfolioAction = require('../action/portfolio-action');
var AppController = require('../controller/app-controller.jsx').view;
ReactDOM.render(<AppController store={PortfolioStore} action={PortfolioAction}/>, document.querySelector('body'));