var React = require("react");
var _ = require('lodash');

var HomePageView = React.createClass({
    propTypes: {
        // toolbarOptions: React.PropTypes.array
    },

    getTextArea: function () {
        var sTextString = "Hi,I'm Shashank,web developer.";
        var aDom = [];
        _.forEach(sTextString, function (sCharacter) {
            aDom.push(<div className="character_shake">{sCharacter}</div>);
            if (sCharacter == ",") {
                aDom.push(<br />);
            }
        });
        return aDom;
    },

    getSpiderView: function () {

        return (
            <div className='spider'>
                <div className='spiderweb'></div>
                <div className='body'>
                    <div className='eye left'></div>
                    <div className='eye right'></div>
                </div>
                <div className='legs left'>
                    <div className='leg'></div>
                    <div className='leg'></div>
                    <div className='leg'></div>
                </div>
                <div className='legs right'>
                    <div className='leg'></div>
                    <div className='leg'></div>
                    <div className='leg'></div>
                </div>
            </div>)
    },

    render: function () {
        return (
            <div className="homePageContainer">

                <div className="homeLeftBlock">
                    <div className="introductorySection">
                        {this.getTextArea()}
                    </div>
                    <div className="introductorySectionBottom">Front End Developer | React JS | Artist</div>
                </div>
                <div className="homeRightBlock spider">
                    {this.getSpiderView()}
                </div>
            </div>);
    }
});

module.exports = {
    view: HomePageView,
};