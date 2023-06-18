import { useNavigate } from "react-router-dom";
import { quickNaNfix } from "../util/Utils";

/*
    The idea: wrap all API requests and handle auth-failed-to-logout answers

    The concept:
       
        universal wrapper for axios/fetch functions
            &&
        global component for react-route nagivate from everywhere
            ==
        catch "auth-failed" from API and do react-route to "login-logout"

        Notes:

            login-logout is a login page with #logout hash to handle logout (loginLogoutForm)
            default behavior: assume any 302-redirect as auth-failed => remote-logout
            you can make any logic to detect API remote-logout answers

    Usage as component for globalNavigate:

        import { HttpApiLogout, globalNavigate } from '../login/HttpApiLogout';

        <HttpApiLogout /> // add component inside BrowserRoute

        call globalNavigate() everywhere you need

    Usage as http-wrappers:

        import { apiGet, apiPost } from '../login/HttpApiLogout';

        call apiGet(url, options) instead of fetch() or axios() or axios.get()
        call apiPost(url, data, options) instead of axios.post()

        call quickNaNfix(badString) fix NaN(s) before JSON.parse() (Utils.js)

    Read more details below.
*/

const loginLogoutForm = '/map/loginForm#logout';

// global useNavigate()
export let globalNavigate;

// component to include inside <BrowserRoute>
export const HttpApiLogout = () => {
  globalNavigate = useNavigate();
  return null;
};

/*
    Universal wrapper replaces fetch() and axios() / axios.get() / axios.post()

    Any 302 redirects cause navigate to login-logout (default)

    Compatibility:

        fetch: fully compatible, return original json/text/blob

        axios: apiGet() support POST as { method: 'post' }
        axios: apiGet() auto-detect-parse JSON into response.data
        axios: apiGet() support single-parameter call like axios({ url, ... })
        axios: apiGet() support { responseType: 'blob' } to force binary data return
        
        axios: apiPost() auto-detect JSON from post.data and stringify it
        axios: apiPost() auto-detect post.data Content-Type (text/json/FormData)
        axios: apiPost() support { params } to make query string for POST request
        axios: apiPost() Content-Type header in options might be overriden by data auto-detect

        NaN: fast method to fix NaN before JSON.parse
            * default "ele":NaN is converted to "ele":NAN_MARKER
            * others NaN are converted to null (that's OK because JSON never support NaN)
            * available only for axios-like response.data: json()/text() will fail, use quickNaNfix() !

    Options:

        default { redirect: 'manual' } block redirect + do logout
        use { redirect: 'error' } to block redirects + block logout
        use { redirect: 'follow' } to allow redirects + block logout

        any other options {} are passed to fetch() - { method: 'POST' } as example
*/

export async function apiGet(url, options = null) {
    // parse axios single-parameter call ({ url, ... })
    // it might be url, get/post, data and other options
    // fetch { url }, then shift url (as options) to options
    // finally, if post-data found in options, do post request
    if(options === null && typeof url === 'object' && url?.url) {
        // swap
        options = url;

        // fetch url
        url = options.url;
        delete options.url;

        // fetch data
        const data = options.data;
        delete options.data;
        
        if(data) {
            return apiPost(url, data, options); // if data found, make post request
        }
    }
    
    let response;

    try {
        response = await fetch(url, Object.assign({}, { redirect: 'manual' }, options));
    } catch (e) {
        // got general error, no response at all
        console.log('fetch-catch-error', url, e);
        return { ok: () => false, text: () => null, json: () => null, blob: () => null, data: null };
    }

    // got blocked redirect
    if (response.type === 'opaqueredirect') {
        console.log('fetch-redirect-stop', url);
        globalNavigate(loginLogoutForm);
        return Object.assign(response, { text: () => null, json: () => null, blob: () => null, data: null });
    }

    // got http-error
    if (!response.ok) {
        console.log('fetch-http-error', url);
        return Object.assign(response, { text: () => null, json: () => null, blob: () => null, data: null });
    }

    let data = null;

    const contentType = response?.headers?.get('Content-Type')?.toString() || 'application/octet-stream'; // default
    
    // auto-parse JSON => data, for particular Content-Type
    // examples: text/plain text/plain;charset=UTF-8 application/json
    if (contentType.match(/text|json/i)) {
        try { // pure json
            data = await response.clone().json();
            // console.log('fetch-json-ok', url);
        } catch (e) { // try NaN fix (fast method, with 2 regexp, without callback)
            try {
                const bad = await response.clone().text();

                // const ele = '"ele":' + TracksManager.NAN_MARKER; // "ele" to NAN_MARKER (99999)
                // const nil = ':null'; // others to null

                // const good = bad
                //     .replace(/"ele": ?NaN\b/g, ele)
                //     .replace(/: ?NaN\b/g, nil);
                
                data = JSON.parse(quickNaNfix(bad));
               
                // console.log('fetch-json-fix', url);
            } catch { // text, finally
                data = await response.clone().text();
                // console.log('fetch-json-text', url, e);
            }
        }
    } else { // blob() or text()
        if (options?.responseType === 'blob') {
            data = await response.clone().blob();
            // console.log('fetch-blob-data', url, contentType);
        } else { // finally, get text by default
            data = await response.clone().text();
            // console.log('fetch-text-string', url, contentType);
        }
    }

    return Object.assign(response, {
        data, // data is for axios lovers :)
        blob: response.blob, // original
        json: response.json, // original
        text: response.text, // original
    });
}

/*
    axios post() wrapper

    Support:

        data autodetect = text | FormData | json

        options.params => url query string (axios-like)
*/

export async function apiPost(url, data = '', options = null) {
    let body = '';
    let type = null;
    
    if(typeof data === 'string' ) { // plain string
        body = data;
        type = 'text/plain';
    } else if(isFormData(data)) { // FormData, keep type=null
        body = data; // type is formed by fetch()
    } else { // finally, try to convert from json
        if (typeof data === 'object') {
            let converted = '';
            try { converted = JSON.stringify(data); } catch { }

            if (converted.length > 0) {
                body = converted;
                type = 'application/json';
            } else {
                // defaults used (empty body, empty type)
                console.log('post-unknown-data', url, typeof data, data);
            }
        }
    }
    // console.log('post-data', url, type, typeof data, data);

    // parse headers from options, override optional Content-Type
    const contentType = type ? { 'Content-Type': type } : {}; // null?
    const headers = Object.assign({}, options?.headers || {}, contentType);
    const fullOptions = Object.assign({}, options, { method: 'POST' }, { headers }, { body });

    // parse query string from options.params (axios)
    const qs = '?' + new URLSearchParams(options?.params || {}).toString();
    const fullURL = url + (qs === '?' ? '' : qs);
    
    // console.log('fetch-post', fullURL, fullOptions);
    return apiGet(fullURL, fullOptions);
}

function isFormData(data) {
    var search = '[object FormData]';
    
    return data && (
      (typeof FormData === 'function' && data instanceof FormData)
      || toString.call(data) === search
      || (toString.call(data.toString) === '[object Function]' && data.toString() === search)
    );
}