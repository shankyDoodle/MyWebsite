/**
 * Created by Shashank on 1/27/2017.
 */
var _ = require('lodash');

var eventBus = require('../../libraries/eventdispatcher/EventDispatcher');

// var ActionItemViewEvent = require('../../../../../viewlibraries/actionitemview/action-item-view').event;

var PortfolioAction = (function () {

    var oEventHandler = {};

    /*
     * Can not directly set "oEventHandler.ViewEventName.EventName = Handler" directly in the oEventHandler Object,
     * So Using lodash API _.set(Object, key, value) we bounded oEventHandler so no need to pass oEventHandler object always
     * Then calling the bounded API and passing Event as key and handler as value
     */
    var initiateEventHandler = function () {
        var _setEvent = _.set.bind(this, oEventHandler);

        // _setEvent(ActionItemViewEvent.CONTENT_ITEM_EVENT_HANDLER, handleActionItemClicked);
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
