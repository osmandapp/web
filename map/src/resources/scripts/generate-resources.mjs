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

// 3. WPT icons array based on list of svg-files
generateSvgMap({
    file: 'src/resources/generated/poiBackgroundIcons.json',
    directory: 'src/assets/wpt',
    validate: (json) => Object.keys(json).length > 0,
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

/**
 * @param {string} file - The file to store the generated SVG map.
 * @param {string} directory - The directory where the SVG files are located.
 * @param {Function} validate - A function to validate the generated SVG map.
 */
function generateSvgMap({ file, directory, validate }) {
    let svgMap = {};
    const svgFiles = ls(directory);
    if (svgFiles) {
        svgFiles.forEach((svgFile) => {
            const svgContent = readFileSync(`${directory}/${svgFile}`, 'utf-8');
            if (svgContent) {
                svgMap[svgFile] = svgContent;
            }
        });
    }
    ensureFileExists(file);
    generate({ file, json: svgMap, validate });
}

/**
 * Ensures that a file exists. If the file does not exist, creates the necessary directories for the file.
 * @param {string} filePath - The path to the file.
 */
function ensureFileExists(filePath) {
    if (!existsSync(filePath)) {
        const directory = dirname(filePath);
        if (!existsSync(directory)) {
            mkdirSync(directory, { recursive: true });
        }
    }
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
