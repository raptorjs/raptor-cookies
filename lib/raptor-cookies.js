var CookieManager = require('./CookieManager');
var LOOKUP_KEY = module.id;

exports.getCookieManager = function(req) {
    if (!req) {
        throw new Error('"req" is a required argument');
    }

    var cookieManager = req[LOOKUP_KEY];
    if (!cookieManager) {
        cookieManager = req[LOOKUP_KEY] = new CookieManager(req);
    }
    return cookieManager;
};