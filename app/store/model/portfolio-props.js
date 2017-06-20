var PortfolioProps = (function () {

    var sCurrentPageContext = "home";

    return {
        getCurrentPageContext: function () {
            return sCurrentPageContext;
        },

        setCurrentPageContext: function (sContext) {
            sCurrentPageContext = sContext;
        },

    }
})();

module.exports = PortfolioProps;



