var setCookie = function(key, value, session, domain, expireTimeParam, secure) {
    if (typeof document === 'undefined' || typeof document.cookie === 'undefined' || !key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) {
        return;
    }
    const today = new Date();
    const expire = new Date();
    let secureFlag = false;
    const expireTime = expireTimeParam ? expireTimeParam : 3600000 * 24 * 999;
    expire.setTime(today.getTime() + expireTime);
    let expireStr = '0';
    if (!session) {
        expireStr = expire.toUTCString();
    }
    let forDomain = '';
    if (domain) {
        forDomain = `;domain=${domain}`;
    }
    if (secure) {
        secureFlag = ';secure';
    }
    document.cookie = `${key}=${value}${forDomain};expires=${expireStr}${secureFlag}`;
}

var getCookie = function (key) {
    if (typeof document === 'undefined' || !document.cookie || !key) {
        return false;
    }
    return decodeURIComponent(document.cookie.replace(new RegExp(`(?:(?:^|.*;)\\s*${encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&')}\\s*\\=\\s*([^;]*).*$)|^.*$`), '$1')) || null;
}