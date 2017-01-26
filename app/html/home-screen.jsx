var ReactDOM = require('react-dom');
var React = require('react');
var AppController = require('../controller/app-controller.jsx').view;
var PortfolioStore = require("../store/portfolio-store");
var PortfolioAction = require('../action/portfolio-action');
{/**/}
ReactDOM.render(<AppController store={PortfolioStore} action={PortfolioAction}/>, document.querySelector('body'));