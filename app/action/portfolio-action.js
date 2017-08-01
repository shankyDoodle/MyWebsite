/**
 * Created by Shashank on 1/27/2017.
 */
var _ = require('lodash');

var eventBus = require('../../libraries/eventdispatcher/EventDispatcher');

var PortfolioStore = require("../store/portfolio-store");

var LeftToolbarPanelViewEvents = require("../view/left-toolbar-panel").events;


var PortfolioAction = (function () {

    var oEventHandler = {};

    var handleScreenChange = function (oContext, sClickedItem) {
        PortfolioStore.handleScreenChange(sClickedItem);
    };

    var initiateEventHandler = function () {
        var _setEvent = _.set.bind(this, oEventHandler);

        _setEvent(LeftToolbarPanelViewEvents.CHANGE_SCREEN, handleScreenChange);
    }.call(this);

    return {

        registerEvent: function () {
            _.forEach(oEventHandler, function (oHandler, sEventName) {
                eventBus.addEventListener(sEventName, oHandler);
            });
        },

        deRegisterEvent: function () {
            _.forEach(oEventHandler, function (oHandler, sEventName) {
                eventBus.removeEventListener(sEventName, oHandler);
            });
        }
    }
})();

module.exports = PortfolioAction;
