/**
 * Created by DEV on 01-10-2015.
 */
var _ = require('lodash');

var PortfolioProps = require("./model/portfolio-props");


var MicroEvent = require('../../libraries/microevent/MicroEvent.js');

var PortfolioStore = (function () {

    //************************************* Private API's ************-**********************************//
    var _triggerChange = function () {
        PortfolioStore.trigger('change');
    };

    var _handleScreenChange = function (sClickedItem) {
        PortfolioProps.setCurrentPageContext(sClickedItem);
        _triggerChange();
    };

    //************************************* Public API's **********************************************//
    return {
        handleScreenChange: function (sClickedItem) {
            _handleScreenChange(sClickedItem);
        },

        getCurrentPageContext: function () {
            return PortfolioProps.getCurrentPageContext();
        },
    }
})();

MicroEvent.mixin(PortfolioStore);

module.exports = PortfolioStore;
