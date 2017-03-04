var React = require("react");
var _ = require('lodash');


var Events = {};

var HomeInformationBlockView = React.createClass({
    propTypes: {
        dataObject: React.PropTypes.object
    },

    handleBlockButtonClicked: function () {
    },

    render: function () {
        var oData = this.props.dataObject;
        var sMessage = oData.message;
        var sHeaderLabel = oData.headerLabel;
        var sBlockButtonLabel = oData.buttonLabel;
        var sId = oData.id;

        return (
            <div className="homeInformationBlockViewContainer">
                <div className="blockHeader">{sHeaderLabel}</div>
                <div className={"imageContainer "+ sId}></div>
                <div className={"blockInformationContainer"}>{sMessage}</div>
                <div className="blockButton" onClick={this.handleBlockButtonClicked.bind(this, sId)}>{sBlockButtonLabel}</div>
            </div>);
    }
});

module.exports = {
    view: HomeInformationBlockView,
    events: Events
};