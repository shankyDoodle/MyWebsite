var React = require("react");
var _ = require('lodash');
var $ = require("jquery");

var SkillPageView = React.createClass({
    propTypes: {
        // toolbarOptions: React.PropTypes.array
    },

    componentDidMount: function () {
        this.handleTagcanvas();
    },

    handleTagcanvas: function () {
        if (!$('#myCanvas').tagcanvas({
                textColour : '#08FDD8',
                outlineThickness : 0.5,
                outlineColour : '#fe0853',
                maxSpeed : 0.05,
                freezeActive:true,
                shuffleTags:true,
                shape:'sphere',
                noSelect:true,
                textFont:null,
                pinchZoom:true,
                freezeDecel:true,
                fadeIn:3000,
                initial: [0.2,-0.1],
                depth : 0.4
            })) {
            console.log("something went wrong, hide the canvas container");
            $('#myCanvasContainer').hide();
        }
    },

    getWordSeparatedDomArray: function (sTextString) {
        var aDom = [];
        var aTextString = sTextString.split(" ");
        var iTextStringLength = aTextString.length;
        _.forEach(aTextString, function (sWord, iIndex) {
            aDom.push(<div className="character_shake" key={iIndex + "/" + sWord}>{sWord}</div>);
            if(iIndex < iTextStringLength){
                aDom.push(<div className="character_shake" key={iIndex + "/space"}>{" "}</div>);
            }
        });
        return aDom;
    },

    getHeaderText: function () {
        var sTextString = "Skills & Experience";
        return this.getWordSeparatedDomArray(sTextString);
    },

    getBodyText: function () {

    },

    getTagCanvasView: function () {
        return (
            <div id="myCanvasContainer">
                <canvas width="500" height="500" id="myCanvas">
                    <ul>
                        <li><a href="/HTML">HTML</a></li>
                        <li><a href="/fish">CSS</a></li>
                        <li><a href="/chips">JavaScript</a></li>
                        <li><a href="/salt">JAVA</a></li>
                        <li><a href="/vinegar">C</a></li>
                        <li><a href="/vinegar">C++</a></li>
                        <li><a href="/vinegar">React.Js</a></li>
                        <li><a href="/vinegar">Node.Js</a></li>
                        <li><a href="/vinegar">jQuery</a></li>
                        <li><a href="/vinegar">Ajax</a></li>
                        <li><a href="/vinegar">VB</a></li>
                        <li><a href="/vinegar">Art</a></li>
                        <li><a href="/vinegar">Sketch</a></li>
                        <li><a href="/vinegar">Flute</a></li>
                    </ul>
                </canvas>
            </div>);
    },

    render: function () {
        return (
            <div className="skillPageContainer">

                <div className="skillLeftBlock pageLeftBlock">
                    <div className="informationBlock">
                        <div className="headerInformation shakeWithH1">
                            {this.getHeaderText()}
                        </div>
                        <div className="bodyInformation">
                            {this.getBodyText()}
                        </div>
                    </div>
                </div>
                <div className="skillRightBlock pageRightBlock">
                    {this.getTagCanvasView()}
                </div>
            </div>);
    }
});

module.exports = {
    view: SkillPageView,
};