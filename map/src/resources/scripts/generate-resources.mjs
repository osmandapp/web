'use strict';

import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname } from 'patch-package/dist/path.js';

const ALLOW_STALE_FILES = true; // do not fail on invalid fresh json but valid old file (default)

// 1. OSRM routing providers (file copy + validate)
generate({
    file: 'src/resources/generated/online-routing-providers.json',
    json: cat('../main/static/online-routing-providers.json'),
    validate: (json) => json.providers[0].type === 'osrm',
});

// 2. POI icons array based on list of svg-files
generate({
    file: 'src/resources/generated/poiicons.json',
    json: ls('public/images/poi-icons-svg'),
    validate: (json) => json.some((x) => x === 'mx_service.svg'),
});

// 2. Map icons array based on list of svg-files
generate({
    file: 'src/resources/generated/mapicons.json',
    json: ls('public/images/map-icons-svg'),
    validate: (json) => json.some((x) => x === 'c_mx_building_map.svg'),
});

// 2. Shaders icons array based on list of svg-files
generate({
    file: 'src/resources/generated/shadersicons.json',
    json: ls('public/images/map-shaders-svg'),
    validate: (json) => json.some((x) => x === 'c_h_arrow.svg'),
});

/**
 * @param file <String> file to store fresh data (and read/validate stale data)
 * @param json <JSON> ready to use JSON-object to filter, validate and store to file
 * @param filter <Function> (json) => () filter-function, should return filtered JSON-data (optional)
 * @param validate <Function> (json) => () validate-function, should validate and return true/false (optional)
 */
function generate({ file, json, filter, validate }) {
    if (json) {
        try {
            if (filter) {
                json = filter(json);
            }
            if (validate && validate(json) !== true) {
                throw new Error(`FRESH-JSON invalid ('${file}')`);
            }
            const pretty = prettyJSON(json);
            const directory = dirname(file);
            if (!existsSync(directory)) {
                mkdirSync(directory, { recursive: true });
            }
            writeFileSync(file, pretty, { encoding: 'utf8' });
            console.log(`OK. File '${file}' generated successfully (${pretty.length} bytes)`);
            return true;
        } catch (e) {
            if (ALLOW_STALE_FILES === false) {
                throw new Error(e);
            } else {
                console.warn(e);
            }
        }
    }
    if (ALLOW_STALE_FILES) {
        const stale = cat(file);
        if (stale && validate && validate(stale) !== true) {
            throw new Error(`STALE-JSON invalid ('${file}')`);
        }
        if (stale) {
            const pretty = prettyJSON(stale);
            console.log(`WARNING. Stale '${file}' accepted (${pretty.length} bytes)`);
            return true;
        }
    }

    throw new Error(`Fatal error: ${file} neither found nor generated`);
}

function prettyJSON(smth) {
    return JSON.stringify(smth, null, 2);
}

function ls(dir) {
    try {
        return readdirSync(dir).sort();
    } catch (e) {
        console.warn(e);
        return null;
    }
}

function cat(file) {
    try {
        const input = readFileSync(file, { encoding: 'utf8' });
        // remove utf8 Byte Order Mark (not supported by JSON.parse)
        return JSON.parse(input.replace(/^\uFEFF/gm, '')); // drop bom
    } catch (e) {
        console.warn(e);
        return null;
    }
}
