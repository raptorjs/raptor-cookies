var nodeCookie = require('cookie');
var parseOpts = {decode: function(str) { return str; }};
var forEachEntry = require('raptor-util/forEachEntry');

module.exports = function(req, callback) {
    /* Use the parsed cookies if present which
     * may be added by connect/express middleware
     */

    var cookies = req.cookies;

    var cookiesHeader = req.headers.cookie;
    if (cookiesHeader) {
        cookies = nodeCookie.parse(cookiesHeader, parseOpts);    

        if (cookies) {
            // Convert all of the cookies to raptor-cookies/lib/Cookie
            // objects and add them to the internal collection
            forEachEntry(cookies, function(name, value) {
                callback(name, value);
            }, this);
        }
    }
};