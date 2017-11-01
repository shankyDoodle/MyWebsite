var React = require("react");
var _ = require('lodash');

var Events = {
};

var RotatingPyramidView = React.createClass({
    propTypes: {
    },

    render: function () {
        return (
            <div className="container">
                <div className="side left"></div>
                <div className="side front"></div>
                <div className="side right"></div>
                <div className="side back"></div>

                <div className="shadow"></div>
            </div>);
    }
});

module.exports = {
    view: RotatingPyramidView,
    events: Events
};