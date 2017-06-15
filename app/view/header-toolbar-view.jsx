var React = require("react");
var _ = require('lodash');
var $ = require('jquery');

var Events = {};

var HeaderToolbarView = React.createClass({
    propTypes: {
        toolbarOptions: React.PropTypes.array
    },

    getInitialState: function () {
        return{
            imageOpen: true
        }
    },

    handleToolOptionClicked: function () {

    },

    handleExploreIconClicked: function () {
        /*var oContainerDOM = this.refs["headerToolbarContainer"];
        oContainerDOM.removeClass("imageClose");
        oContainerDOM.addClass("imageOpen");*/
        this.setState({
            imageOpen: false
        })
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

    getLowerToolbarView: function () {
        var sClassSuffix = this.state.imageOpen ? " imageOpen" : " imageClose";
        var oRightSideButtons = !this.state.imageOpen ?
            <div className="toolbarOptionsContainer">
                {this.getToolbarOptionsView()}
            </div> :
            <div className="exploreWebsiteIcon" onClick={this.handleExploreIconClicked}></div>;
        return (
            <div className={"lowerHeaderToolbarContainer"+ sClassSuffix}>
                <div className="nameContainer">Shashank Kaldate</div>
                {oRightSideButtons}
            </div>);
    },

    getUpperImageViewContainer: function () {
        var sClassSuffix = this.state.imageOpen ? " imageOpen" : " imageClose";
        return (
            <div className={"mainImageContainer" + sClassSuffix}>
                <div className="mainImage">
                    <span className="designationSpan"> Front End Developer</span>
                    <br></br>
                    <span className="descriptionSpan"> Working Hard to Make Internet More Beautiful </span>
                    <div className="exploreMoreButton" onClick={this.handleExploreIconClicked}>Explore More</div>
                </div>

            </div>
        )
    },

    render: function () {
        var oLowerToolbarView = this.getLowerToolbarView();
        var oUpperImageViewContainer = this.getUpperImageViewContainer();
        var sClassSuffix = this.state.imageOpen ? " imageOpen" : " imageClose";
        return (
            <div className={"headerToolbarContainer" + sClassSuffix} ref="headerToolbarContainer">
                {oUpperImageViewContainer}
                {oLowerToolbarView}
            </div>
        );
    }
});

module.exports = {
    view: HeaderToolbarView,
    events: Events
};