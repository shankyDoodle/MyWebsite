/**
 * Created by DEV on 01-10-2015.
 */
var _ = require('lodash');

var PortfolioProps = require("./model/portfolio-props");


var MicroEvent = require('../../libraries/microevent/MicroEvent.js');

var PortfolioStore = (function () {

    //************************************* Private API's ************-**********************************//
    var _triggerChange = function () {
        PortfolioStore.trigger('portfolio-change');
    };

    var _handleHeaderViewToggleClicked = function () {
        var bIsHeaderViewExpanded = PortfolioProps.getIsHeaderViewExpanded();
        PortfolioProps.setIsHeaderViewExpanded(!bIsHeaderViewExpanded);
        _triggerChange();
    };

    //************************************* Public API's **********************************************//
    return {
        handleHeaderViewToggleClicked: function () {
            _handleHeaderViewToggleClicked();
        }
    }
})();

MicroEvent.mixin(PortfolioStore);

module.exports = PortfolioStore;
