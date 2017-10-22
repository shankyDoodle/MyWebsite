var React = require("react");
var _ = require('lodash');

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
        var sPara1 = "Since past 2 years I am specialising in front-end development -HTML/CSS/JS, React.Js.",
            sPara2 = "But I also get my hands dirty on back-end development on rare occasions in JAVA and database technologies.",
            sPara3 = "I am an art enthusiast as well, like to participate in every art form - Music, Drawing, Dance, Acting.";

        var oPara1DOM = (<div className="paraWrapper">{this.getWordSeparatedDomArray(sPara1)}</div>);
        var oPara2DOM = (<div className="paraWrapper">{this.getWordSeparatedDomArray(sPara2)}</div>);
        var oPara3DOM = (<div className="paraWrapper">{this.getWordSeparatedDomArray(sPara3)}</div>);
        return [oPara1DOM, oPara2DOM, oPara3DOM];
    },

    getPyramidView: function () {
        return (
            <div className="pyramidContainer">
                <div className="jsPlane"></div>
                <div className="reactPlane"></div>
                <div className="cssPlane"></div>
                <div className="htmlPlane"></div>
            </div>);
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