'use strict';

const { TextDecoder, TextEncoder } = require('node:util');

// missing in jsdom, used by the app code (e.g. gzip of the .info payload)
global.TextEncoder = global.TextEncoder ?? TextEncoder;
global.TextDecoder = global.TextDecoder ?? TextDecoder;

// the app builds request urls from this - nothing is ever requested, the host is a placeholder
process.env.REACT_APP_USER_API_SITE = 'https://api.test';
