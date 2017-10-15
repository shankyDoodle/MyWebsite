var React = require("react");
var _ = require('lodash');
var ImageGalleryView =  require('./image-gallery-view').view;

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
            <div className="workButton technologyButton"
                 onClick={this.handleWorkButtonClicked.bind(this, "technologyView")}>Technology</div>
            <div className="workButton artButton"
                 onClick={this.handleWorkButtonClicked.bind(this, "artView")}>Art</div>
            <div className="workButton musicButton"
                 onClick={this.handleWorkButtonClicked.bind(this, "musicView")}>Music</div>
        </div>
    },

    getArtViewDom: function () {
      return <ImageGalleryView />
    },

    render: function () {
        var oViewToRender = null;
        var sCurrentStateContext = this.state.viewContext;
        switch (sCurrentStateContext) {
            case "buttonsView":
                oViewToRender = this.getButtonsDom();
                break;
            case "technologyView":
                break;
            case "artView":
                oViewToRender = this.getArtViewDom();
                break;
            case "musicView":
                oViewToRender = this.getButtonsDom();
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