var React = require("react");
var _ = require('lodash');

var EventBus = require('../../libraries/eventdispatcher/EventDispatcher');

var Events = {
    CHANGE_SCREEN: "change_screen"
};

var HeaderInformationView = React.createClass({
    propTypes: {
        currentPageContext: React.PropTypes.string
    },

    handleToolbarIconClicked: function (sClickedItem) {
        EventBus.dispatch(Events.CHANGE_SCREEN, this, sClickedItem);
    },

    handleSocialMediaIconClicked: function () {

    },

    render: function () {
        var sActivePageContext = this.props.currentPageContext;
        return (
            <div className="leftToolbarPanelContainer">
                <div className="myLogo" onClick={this.handleToolbarIconClicked.bind(this, "home")}></div>

                <div className="toolbarIconContainer">
                    <div className={"toolbarIcon home" + (sActivePageContext == "home" ? " active" : "")}
                         onClick={this.handleToolbarIconClicked.bind(this, "home")}></div>
                    <div className={"toolbarIcon aboutMe" + (sActivePageContext == "aboutMe" ? " active" : "")}
                         onClick={this.handleToolbarIconClicked.bind(this, "aboutMe")}></div>
                    <div className={"toolbarIcon skill" + (sActivePageContext == "skill" ? " active" : "")}
                         onClick={this.handleToolbarIconClicked.bind(this, "skill")}></div>
                    <div className={"toolbarIcon work" + (sActivePageContext == "work" ? " active" : "")}
                         onClick={this.handleToolbarIconClicked.bind(this, "work")}></div>
                    <div className={"toolbarIcon contact" + (sActivePageContext == "contact" ? " active" : "")}
                         onClick={this.handleToolbarIconClicked.bind(this, "contact")}></div>
                </div>

                <div className="socialMediaIconContainer">
                    <div className="mediaIcon facebook"
                         onClick={this.handleSocialMediaIconClicked.bind(this, "facebook")}></div>
                    <div className="mediaIcon linkedIn"
                         onClick={this.handleSocialMediaIconClicked.bind(this, "linkedIn")}></div>
                    <div className="mediaIcon twitter"
                         onClick={this.handleSocialMediaIconClicked.bind(this, "twitter")}></div>
                    <div className="mediaIcon instagram"
                         onClick={this.handleSocialMediaIconClicked.bind(this, "instagram")}></div>
                </div>
            </div>);
    }
});

module.exports = {
    view: HeaderInformationView,
    events: Events
};