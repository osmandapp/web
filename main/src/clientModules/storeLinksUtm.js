// Passes the visitor's campaign (utm_* in the landing URL) to the app store links,
// so installs and purchases can be attributed:
// Google Play gets it in `referrer` (the app reads it with the Install Referrer API),
// the App Store gets it as a campaign token `ct` (App Store Connect analytics).
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign'];
const STORAGE_KEY = 'osmand_utm';
const DEFAULT_UTM = { utm_source: 'osmand.net', utm_medium: 'website' };
const PLAY_APPS = ['net.osmand', 'net.osmand.plus'];
const APP_STORE_ID = 'id934850257';
// Provider token from App Store Connect; without it `ct` is not attributed
const APP_STORE_PROVIDER_TOKEN = '';
const MAX_CT_LENGTH = 40;

function readStored() {
    try {
        return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || null;
    } catch (e) {
        return null;
    }
}

function saveLandingUtm() {
    const params = new URLSearchParams(window.location.search);
    const utm = {};
    UTM_KEYS.forEach((key) => {
        const value = params.get(key);
        if (value) {
            utm[key] = value.slice(0, 100);
        }
    });
    if (utm.utm_source) {
        try {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
        } catch (e) {
            // storage blocked: the campaign is used only on this page
        }
        return utm;
    }
    return null;
}

function currentUtm(landingUtm) {
    return landingUtm || readStored() || DEFAULT_UTM;
}

function playUrl(url, utm) {
    if (!PLAY_APPS.includes(url.searchParams.get('id')) || url.searchParams.has('referrer')) {
        return null;
    }
    const referrer = new URLSearchParams();
    UTM_KEYS.forEach((key) => utm[key] && referrer.set(key, utm[key]));
    url.searchParams.set('referrer', referrer.toString());
    return url.toString();
}

function appStoreUrl(url, utm) {
    if (!url.pathname.includes(APP_STORE_ID) || url.searchParams.has('ct') || !APP_STORE_PROVIDER_TOKEN) {
        return null;
    }
    const ct = [utm.utm_source, utm.utm_campaign].filter(Boolean).join('_');
    url.searchParams.set('pt', APP_STORE_PROVIDER_TOKEN);
    url.searchParams.set('ct', ct.slice(0, MAX_CT_LENGTH));
    return url.toString();
}

function storeUrl(href, utm) {
    let url;
    try {
        url = new URL(href);
    } catch (e) {
        return null;
    }
    if (url.hostname === 'play.google.com' && url.pathname === '/store/apps/details') {
        return playUrl(url, utm);
    }
    if (url.hostname === 'apps.apple.com' || url.hostname === 'itunes.apple.com') {
        return appStoreUrl(url, utm);
    }
    return null;
}

let landingUtm = null;

function onLinkClick(event) {
    const link = event.target.closest && event.target.closest('a[href]');
    if (!link) {
        return;
    }
    const href = storeUrl(link.href, currentUtm(landingUtm));
    if (href) {
        link.href = href;
    }
}

if (ExecutionEnvironment.canUseDOM) {
    landingUtm = saveLandingUtm();
    // capture phase: the href is updated before the browser follows the link
    document.addEventListener('click', onLinkClick, true);
    document.addEventListener('auxclick', onLinkClick, true);
}
