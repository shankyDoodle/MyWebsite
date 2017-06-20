var React = require("react");
var _ = require('lodash');
var Particles = require('react-particles-js').Particles;

var HomePage = require('../view/home-page').view;
var LeftToolbarPanel = require('../view/left-toolbar-panel').view;

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
    getStore: function () {
        return this.props.store;
    },

    getCurrentPageView: function () {
        var sCurrentPageContext = this.getStore().getCurrentPageContext();

        switch(sCurrentPageContext){
            case "home":
                return <HomePage />;
        }
    },

    render: function () {
        var oParam = {
            "particles": {
                "number": {
                    "value": 90,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#9f9f9f"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 144,
                    "color": "#9f9f9f",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "window",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 200,
                        "line_linked": {
                            "opacity": 0.4
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        };
        var oCurrentPageView = this.getCurrentPageView();
        var sCurrentPageContext = this.getStore().getCurrentPageContext();
        return (
            <div className="wrapperMain">
                <LeftToolbarPanel currentPageContext={sCurrentPageContext}/>
                <div className="rightPanelContainer">
                    <div className="particleCanvasContainer">
                        <Particles params={oParam}/>
                    </div>
                    {oCurrentPageView}
                </div>
            </div>);
    }
});

module.exports = {
    view: ApplicationController,
    events: Events
};