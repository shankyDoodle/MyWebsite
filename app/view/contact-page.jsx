var React = require("react");
var _ = require('lodash');

var compose = require("recompose").compose;
var withProps = require("recompose").withProps;
var withScriptjs = require('react-google-maps').withScriptjs;
var withGoogleMap = require('react-google-maps').withGoogleMap;
var GoogleMap = require('react-google-maps').GoogleMap;
var InfoBox = require("react-google-maps").InfoWindow;
var demoFancyMapStyles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#012621"
            },
            {
                "weight": 0.8
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#012621"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#0c0000"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#012621"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#012621"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#012621"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#06c5a9"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "color": "#06c5a9"
            },
            {
                "lightness": -7
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "color": "#06c5a9"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "weight": 0.3
            },
            {
                "lightness": 10
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#047968"
            },
            {
                "lightness": "-7"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#06c5a9"
            },
            {
                "visibility": "on"
            },
            {
                "lightness": -15
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#06c5a9"
            },
            {
                "lightness": "7"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#06c5a9"
            },
            {
                "lightness": -34
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#333739"
            }
        ]
    }
];

const StyledMapWithAnInfoBox = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCE8pmFRNX0ugYSE7wRLwra1aaEzBj7B4Q&callback=initMap",
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `400px`}}/>,
        mapElement: <div style={{height: `100%`}}/>,
        center: {lat: 18.5072, lng: 73.9237},
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={5}
        defaultCenter={props.center}
        defaultOptions={{styles: demoFancyMapStyles}}
    >
        <InfoBox
            defaultPosition={new google.maps.LatLng(props.center.lat, props.center.lng)}
            options={{closeBoxURL: ``, enableEventPropagation: true}}
        >
            <div style={{backgroundColor: `yellow`, opacity: 0.75, padding: `12px`}}>
                <div style={{fontSize: `16px`, fontColor: `#08233B`}}>
                    Hello from Shashank
                </div>
            </div>
        </InfoBox>
    </GoogleMap>
);

var ContactPageView = React.createClass({
    propTypes: {},

    render: function () {
        return (
            <div className="contactPageContainer">
                <div className="contactLeftBlock">
                    <div className="informationBlock">
                        contact me goes here
                    </div>
                </div>
                <div className="contactRightBlock">
                    <StyledMapWithAnInfoBox />
                </div>
            </div>);
    }
});

module.exports = {
    view: ContactPageView,
};