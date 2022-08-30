'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var XMLCreator = require('./creators/XMLCreator.js');
var BaseBuilder = require('./builder/BaseBuilder/BaseBuilder.js');

/**
 * Function that create XML string with GPX data.
 *
 * @param data - Formated data
 * @param creator - Creator that converts data to XML string
 * @returns XML string
 */
function buildGPX(data, creator) {
  const gpxCreator = creator || new XMLCreator();
  return gpxCreator.toString(data);
}

exports.BaseBuilder = BaseBuilder;
exports.buildGPX = buildGPX;
