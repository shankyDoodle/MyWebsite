var React = require("react");
var _ = require('lodash');
var Particles = require('react-particles-js').Particles;

var HomePage = require('../view/home-page').view;
var AboutPage = require('../view/about-page').view;
var SkillPage = require('../view/skill-page').view;
var ContactPage = require('../view/contact-page').view;
var WorkPage = require('../view/work-page').view;
var LeftToolbarPanel = require('../view/left-toolbar-panel').view;

var Events = {};

var ApplicationController = React.createClass({
    propTypes: {
        store: React.PropTypes.object
    },

    getInitialState: function () {
        return {
            store: this.props.store,
        };
    },

    /*componentWillMount: function () {
        this.setState({
            store: this.props.store
        });
    },*/

    //@UnBind: store with state
    componentWillUnmount: function () {
        this.getStore().unbind('change', this.appStateChanged);
        this.props.action.deRegisterEvent();
    },

    //@Bind: Store with state
    componentDidMount: function () {
        this.getStore().bind('change', this.appStateChanged);
        this.props.action.registerEvent();
    },

    //@set: state
    appStateChanged: function () {
        this.setState({
            store: this.props.store,
        });
    },

    getStore: function () {
        return this.state.store;
    },

    getCurrentPageView: function (sCurrentPageContext) {
        switch (sCurrentPageContext) {
            case "home":
                return <HomePage />;

            case "aboutMe":
                return <AboutPage />;

            case "skill":
                return <SkillPage />;

            case "contact":
                return <ContactPage />;

            case "work":
                return <WorkPage />
        }
    },

    render: function () {
        var oParam = {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 1024
                    }
                },
                "color": {
                    "value": "#8c8c8c"
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
                        "enable": false,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false,
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
            "retina_detect": false
        };
        var sCurrentPageContext = this.getStore().getCurrentPageContext();
        var oCurrentPageView = this.getCurrentPageView(sCurrentPageContext);
        return (
            <div className="wrapperMain">
                <LeftToolbarPanel currentPageContext={sCurrentPageContext}/>
                <div className="rightPanelContainer">
                    <div className="particleCanvasContainer">
                        <Particles params={oParam}/>
                    </div>
                    <div className="tags upperTags">
                        {"<html>"}
                        <br/>
                        {"      <body>"}
                    </div>
                    <div className="tags lowerTags">
                        {"      </body>"}
                        <br/>
                        {"</html>"}
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