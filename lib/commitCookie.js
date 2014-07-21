module.exports = function(res, name, value, domain, path, maxAge, secure, httpOnly) {
    var headerValueParts = [name + '=' + value];

    if (domain) {
        headerValueParts.push('Domain=' + domain);
    }

    if (path) {
        headerValueParts.push('Path=' + path);
    }

    if (maxAge >= 0) {
        // Instead of using the MaxAge cookie property, we use
        // Expires since it is supported by all web browsers (including IE)
        headerValueParts.push('Expires=' + this._expires(maxAge));
    }

    if (httpOnly) {
        headerValueParts.push('HttpOnly');
    }

    if (secure) {
        headerValueParts.push('Secure');
    }

    
    res.setHeader('Set-Cookie', headerValueParts.join('; '));
};