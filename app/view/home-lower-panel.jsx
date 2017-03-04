var React = require("react");
var _ = require('lodash');

var HomeInformationBlock = require("../view/home-information-block").view;
var HomeLowerPanelMockData = require("../store/mock/constant-data-home-lower-panel");

var Events = {};

var HomeLowerPanelView = React.createClass({
    propTypes: {
        toolbarOptions: React.PropTypes.array
    },

    getInformationBlocks: function () {
        return _.map(HomeLowerPanelMockData, function (oData) {
            return(<HomeInformationBlock dataObject={oData}/>);
        });
    },

    render: function () {
        var aInformationBlocks = this.getInformationBlocks();
        return (
            <div className="homeLowerPanelContainer">
                {aInformationBlocks}
            </div>);
    }
});

module.exports = {
    view: HomeLowerPanelView,
    events: Events
};