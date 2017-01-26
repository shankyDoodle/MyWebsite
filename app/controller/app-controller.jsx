var React = require("react");
var EventBus = require('../../libraries/eventdispatcher/EventDispatcher');

var _ = require('lodash');


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

    render: function () {


        return (
            <div className="wrapperMain">
                Hello
            </div>);
    }
});

module.exports = {
    view: ApplicationController,
    events: Events
};