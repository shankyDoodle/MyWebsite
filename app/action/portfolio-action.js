/**
 * Created by Shashank on 1/27/2017.
 */
var _ = require('lodash');

var eventBus = require('../../libraries/eventdispatcher/EventDispatcher');

var PortfolioStore = require("../store/portfolio-store");

var PortfolioAction = (function () {

    var oEventHandler = {};

    var handleHeaderViewToggleClicked = function () {
        PortfolioStore.handleHeaderViewToggleClicked();
    };

    var initiateEventHandler = function () {
        var _setEvent = _.set.bind(this, oEventHandler);

        // _setEvent(HomeInformationViewEvents.HEADER_VIEW_TOGGLE_CLICKED, handleHeaderViewToggleClicked);
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
