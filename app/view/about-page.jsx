var React = require("react");
var _ = require('lodash');

var RotatingPyramidView = require('./rotating-pyramid-view').view;

var AboutPageView = React.createClass({
    propTypes: {
        // toolbarOptions: React.PropTypes.array
    },

    getWordSeparatedDomArray: function (sTextString) {
        var aDom = [];
        var aTextString = sTextString.split(" ");
        var iTextStringLength = aTextString.length;
        _.forEach(aTextString, function (sWord, iIndex) {
            aDom.push(<div className="character_shake" key={iIndex + "/" + sWord}>{sWord}</div>);
            if (iIndex < iTextStringLength) {
                aDom.push(<div className="character_shake" key={iIndex + "/space"}>{" "}</div>);
            }
        });
        return aDom;
    },

    getHeaderText: function () {
        var sTextString = "About Me";
        return this.getWordSeparatedDomArray(sTextString);
    },

    getBodyText: function () {
        var sPara1 = "I am a Software Developer and an Art enthusiast who has competence in various art forms. So having technical " +
                "comprehension and artistic vision, I am working towards making the web more beautiful by amalgamating both of these.";
        var sPara2 = "For the past 5 years, I am specializing in front-end development -HTML/CSS/JS, React.Js and server-side scripting in Node.js.";
        var sPara3 = "But I also get my hands dirty on back-end development in JAVA, Python and database technologies, along with working in core computer science technologies.";

        var oPara1DOM = (<div className="paraWrapper">{this.getWordSeparatedDomArray(sPara1)}</div>);
        var oPara2DOM = (<div className="paraWrapper">{this.getWordSeparatedDomArray(sPara2)}</div>);
        var oPara3DOM = (<div className="paraWrapper">{this.getWordSeparatedDomArray(sPara3)}</div>);
        return [oPara1DOM, oPara2DOM, oPara3DOM];
    },

    getPyramidView: function () {
        return(
            <RotatingPyramidView />
        )
        return (
            <div className="pyramidContainer">
                <div className="jsPlane"></div>
                <div className="reactPlane"></div>
                <div className="cssPlane"></div>
                <div className="htmlPlane"></div>
            </div>);
    },

    handleResumeButtonClicked: function(){
        window.open("https://drive.google.com/file/d/1CIhV1Vpq0y3TxMh9mWwYMrggeKj2Py-e/view")
    },

    render: function () {
        return (
            <div className="aboutPageContainer">
                <div className="aboutLeftBlock pageLeftBlock">
                    <div className="informationBlock">
                        <div className="headerInformation shakeWithH1">
                            {this.getHeaderText()}
                        </div>
                        <div className="bodyInformation shakeWithH1">
                            {this.getBodyText()}
                        </div>
                        <div className="resumeBlock">
                            <div className="workButton " onClick={this.handleResumeButtonClicked.bind(this)}>Resume</div>
                        </div>

                    </div>
                </div>
                <div className="aboutRightBlock pageRightBlock">
                    {this.getPyramidView()}
                </div>
            </div>);
    }
});

module.exports = {
    view: AboutPageView,
};