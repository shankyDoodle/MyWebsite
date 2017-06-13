var React = require("react");
var _ = require('lodash');
var EventBus = require('../../libraries/eventdispatcher/EventDispatcher');

var Events = {
    HEADER_VIEW_TOGGLE_CLICKED: "header_view_toggle_clicked"
};

var HeaderInformationView = React.createClass({
    propTypes: {
        // toolbarOptions: React.PropTypes.array
    },

    handleToggleViewButtonClicked: function (oEvent) {
        EventBus.dispatch(Events.HEADER_VIEW_TOGGLE_CLICKED);
    },

    render: function () {
        var sTriggerClassName = '';
        return (
            <div className="headerInformationContainer">
                <div className="upperPartContainer">
                    <div className="homeImage"></div>
                </div>
                <div className="lowerPartContainer">
                    <div className="nameContainer">Shashank Kaldate</div>
                    <div className={"triggerButton " + sTriggerClassName} onClick={this.handleToggleViewButtonClicked}></div>
                </div>

            </div>);
    }
});

module.exports = {
    view: HeaderInformationView,
    events: Events
};