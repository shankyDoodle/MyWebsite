/**
 * Created by DEV on 01-10-2015.
 */
var _ = require('lodash');

var MicroEvent = require('../../libraries/microevent/MicroEvent.js');

var PortfolioStore = (function () {

    //************************************* Private API's ************-**********************************//
    var _triggerChange = function () {
        PortfolioStore.trigger('portfolio-change');
    };

    //************************************* Public API's **********************************************//
    return {
        handleConcatenatedAttributeExpressionChanged: function (sAttributeId, sValue, sSectionId, sExpressionId) {
            _handleConcatenatedAttributeExpressionChanged(sAttributeId, sValue, sSectionId, sExpressionId);
            _triggerChange();
        }
    }
})();

MicroEvent.mixin(PortfolioStore);

module.exports = PortfolioStore;
