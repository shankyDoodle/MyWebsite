var React = require("react");
var _ = require('lodash');

var HeaderToolbarView = require("../view/header-toolbar-view.jsx").view;
var HeaderInformationView = require("../view/header-information-view").view;
var HomeLowerPanelView = require("../view/home-lower-panel").view;

var aToolbarOptions = require("./../store/mock/constant-data-toolbar-option-list");

var Events = {};

var ApplicationController = React.createClass({
    propTypes: {
        store: React.PropTypes.object
    },

    /*componentWillMount: function () {
        this.setState({
            data: this.getStore().initialize().data,
            clickedPieChart: this.getStore().initialize().clickedPieChart
        });
    },

    getStore: function () {
        return this.props.store;
    },

    //@UnBind: store with state
    componentWillUnmount: function () {
        this.getStore().unbind('change', this.stateChanged);
        this.props.action.deRegisterEvent();
    },

    //@Bind: Store with state
    componentDidMount: function () {
        this.getStore().bind('change', this.stateChanged);
        this.props.action.registerEvent();
    },

    stateChanged: function () {
        this.setState({
            data: this.getStore().getSystemItemList(),
            clickedPieChart: this.getStore().getClickedPieChart()
        });
    },
*/

    getMainBodyView: function () {
        return(<HomeLowerPanelView />);
    },

    render: function () {

        return (
            <div className="wrapperMain">
                <HeaderToolbarView toolbarOptions={aToolbarOptions}/>
                {/*<HeaderInformationView />*/}
                <div className="mainBody">
                    {this.getMainBodyView()}
                </div>
            </div>);
    }
});

module.exports = {
    view: ApplicationController,
    events: Events
};