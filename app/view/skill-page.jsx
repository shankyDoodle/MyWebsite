var React = require("react");
var _ = require('lodash');
var $ = require("jquery");
var ToastAlert = require('react-toastify').toast;

var SkillPageView = React.createClass({
    propTypes: {
        // toolbarOptions: React.PropTypes.array
    },

    componentDidMount: function () {
        this.handleTagcanvas();
    },

    handleTagcanvas: function () {
        if (!$('#myCanvas').tagcanvas({
                textColour : '#08fdd8',
                outlineThickness : 0.8,
                outlineColour : '#fe0853',
                maxSpeed : 0.08,
                freezeActive:true,
                shuffleTags:true,
                shape:'sphere',
                noSelect:true,
                textFont:null,
                textHeight:25,
                pinchZoom:true,
                freezeDecel:true,
                fadeIn:2000,
                initial: [0.2,-0.1],
                depth : 0.4
            })) {
            console.log("something went wrong, hide the canvas container");
            $('#myCanvasContainer').hide();
        }else {
            setTimeout(function () {
                ToastAlert("Scroll over the sphere for zoom effect.", {
                    className: 'custom-dark-toast',
                    progressClassName: 'custom-blue-progress',
                    autoClose: 5000
                });
            }, 2000);
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
        var sPara1 = "The scope of my work is a large part of the front end: HTML, CSS, JS, coding layouts, single-page applications with ReactJs.";
        var sPara2 = "I worked at 'Contentserv' for 3 years, where I joined the firm as 'Jr. Software Developer' and left it as " +
            "'Sr. Software Developer Team Lead'. Before that, I had a short experience as 'a Project Intern' at a firm known as Soft Corner in India."
        var sPara3 = "And as a Master's student, I am working as a Research Assistant at 'The Research Foundation for SUNY' on a " +
            "Computer Architecture & Organisation project from the last 1.5 years, in which we are trying to keep Moore's law alive."

        var oPara1DOM = (<div className="paraWrapper">{this.getWordSeparatedDomArray(sPara1)}</div>);
        var oPara2DOM = (<div className="paraWrapper">{this.getWordSeparatedDomArray(sPara2)}</div>);
        var oPara3DOM = (<div className="paraWrapper">{this.getWordSeparatedDomArray(sPara3)}</div>);

        return [oPara1DOM, oPara2DOM, oPara3DOM];
    },

    getTagCanvasView: function () {
        return (
            <div id="myCanvasContainer">
                <canvas width="500" height="500" id="myCanvas">
                    <ul>
                        <li><a href="/HTML">HTML5</a></li>
                        <li><a href="/fish">CSS</a></li>
                        <li><a href="/chips">JavaScript</a></li>
                        <li><a href="/salt">JAVA</a></li>
                        <li><a href="/vinegar">C</a></li>
                        <li><a href="/vinegar">C++</a></li>
                        <li><a href="/vinegar">React.Js</a></li>
                        <li><a href="/vinegar">Node.Js</a></li>
                        <li><a href="/vinegar">jQuery</a></li>
                        <li><a href="/vinegar">Ajax</a></li>
                        <li><a href="/vinegar">Python</a></li>
                        <li><a href="/vinegar">Art</a></li>
                        <li><a href="/vinegar">Sketch</a></li>
                        <li><a href="/vinegar">Flute</a></li>
                        <li><a href="/vinegar">GIT</a></li>
                        <li><a href="/vinegar">SASS</a></li>
                        <li><a href="/vinegar">JSON</a></li>
                        <li><a href="/vinegar">npm</a></li>
                        <li><a href="/vinegar">REST</a></li>
                    </ul>
                </canvas>
            </div>);
    },

    getTimelineView: function () {

        return (
            <div className={"timelineWrapper"}>
                <div className={"intern"}></div>
                <div className={"contentserv"}></div>
                <div className={"nowork"}></div>
                <div className={"sunyrf"}></div>
            </div>
        );
    },

    render: function () {
        return (
            <div className="skillPageContainer">

                <div className="skillLeftBlock pageLeftBlock">
                    <div className="informationBlock">
                        <div className="headerInformation shakeWithH1">
                            {this.getHeaderText()}
                        </div>
                        <div className="bodyInformation shakeWithH1">
                            {this.getBodyText()}
                        </div>
                    </div>
                    {/*<div className={"workexTimeline"}>*/}
                        {/*{this.getTimelineView()}*/}
                    {/*</div>*/}
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