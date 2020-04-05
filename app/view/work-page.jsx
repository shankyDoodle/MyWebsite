var React = require("react");
var _ = require('lodash');
var ImageGalleryView = require('./image-gallery-view').view;

var WorkPageView = React.createClass({
    propTypes: {},

    getInitialState: function () {
        return {
            viewContext: "buttonsView",
        };
    },


    handleWorkButtonClicked: function (sContext) {
        this.setState({
            viewContext: sContext
        });
    },

    getButtonsDom: function () {
        return <div className="buttonsContainer">
            <div className="workButton showOnly technologyButton"
                 onClick={this.handleWorkButtonClicked.bind(this, "technologyView")}>Projects
            </div>
            <div className="workButton showOnly artButton"
                 onClick={this.handleWorkButtonClicked.bind(this, "artView")}>Art
            </div>
            <div className="workButton showOnly musicButton"
                 onClick={this.handleWorkButtonClicked.bind(this, "musicView")}>Music
            </div>
        </div>
    },

    getArtViewDom: function () {
        return (
            <div className="workInnerViewWrapper">
                <div className="workButton artButton" onClick={this.handleWorkButtonClicked.bind(this, "buttonsView")}>◀ Art</div>
                <ImageGalleryView context={"art"}/>
            </div>)
    },

    getMusicViewDom: function () {
        return (
            <div className="workInnerViewWrapper">
                <div className="workButton musicButton" onClick={this.handleWorkButtonClicked.bind(this, "buttonsView")}>◀ Music</div>
                <ImageGalleryView context={"music"}/>
            </div>)
    },

    redirectToProjectsPage: function(){
        window.open("https://shankydoodle.github.io/projects-page/");
    },

    render: function () {
        var oViewToRender = null;
        var sCurrentStateContext = this.state.viewContext;
        switch (sCurrentStateContext) {
            case "buttonsView":
                oViewToRender = this.getButtonsDom();
                break;
            case "technologyView":
                this.redirectToProjectsPage();
                oViewToRender = this.getButtonsDom();
                break;
            case "artView":
                oViewToRender = this.getArtViewDom();
                break;
            case "musicView":
                oViewToRender = this.getMusicViewDom();
                break;
        }

        return (
            <div className="workPageContainer">
                {oViewToRender}
            </div>);
    }
});

module.exports = {
    view: WorkPageView,
};