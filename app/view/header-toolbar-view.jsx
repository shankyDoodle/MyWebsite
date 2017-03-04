var React = require("react");
var _ = require('lodash');

var Events = {};

var HeaderToolbarView = React.createClass({
    propTypes: {
        toolbarOptions: React.PropTypes.array
    },

    handleToolOptionClicked: function () {

    },

    getToolbarOptionsView: function () {
        var that = this;
        var aToolbarOptions = this.props.toolbarOptions;
        return _.map(aToolbarOptions, function (oTool) {
            var sSelectedClass = oTool.isSelected ? " selected" : "";
            return <div className={"headerTool" + sSelectedClass}
                        onClick={that.handleToolOptionClicked.bind(that, oTool.id)}>{oTool.label}</div>
        });
    },

    render: function () {
        return (
            <div className="headerToolbarContainer">
                <div className="nameContainer">Shashank Kaldate</div>
                <div className="toolbarOptionsContainer">
                    {this.getToolbarOptionsView()}
                </div>
            </div>);
    }
});

module.exports = {
    view: HeaderToolbarView,
    events: Events
};