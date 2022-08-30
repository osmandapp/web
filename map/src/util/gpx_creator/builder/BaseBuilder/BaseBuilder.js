'use strict';

var index = require('./models/index.js');
var Track = require('./models/Track.js');
var Segment = require('./models/Segment.js');

/* eslint-disable import/no-duplicates */
class BaseBuilder {
  constructor() {
    this.data = {};
    this.schemaLocation = ['http://www.topografix.com/GPX/1/1', 'http://www.topografix.com/GPX/1/1/gpx.xsd'];
  }
  /**
   * Set metadata object.
   *
   * @param metadata - Metadata object
   * @returns {BaseBuilder} self
   */


  setMetadata(metadata) {
    this.data.metadata = metadata.toObject();
    return this;
  }
  /**
   * Set list of waypoints
   *
   * @param waypoints - Points objects
   * @returns {BaseBuilder} self
   */


  setWayPoints(waypoints) {
    this.data.wpt = waypoints.map(point => point.toObject());
    return this;
  }
  /**
   * Set list of routes.
   *
   * @param routes - List of routes
   * @returns {BaseBuilder} self
   */


  setRoutes(routes) {
    this.data.rte = routes.map(route => route.toObject());
    return this;
  }
  /**
   * Set list of tracks.
   *
   * @param tracks - List of tracks
   * @returns {BaseBuilder} self
   */


  setTracks(tracks) {
    this.data.trk = tracks.map(track => track.toObject());
    return this;
  }
  /**
   * Set extension Object.
   *
   * @param extensions - Extensions
   * @returns {BaseBuilder} self
   */


  setExtensions(extensions) {
    this.data.extensions = extensions;
    return this;
  }
  /**
   * Simple method to set list of points to single track and segment.
   *
   * @param points - list of Points
   * @returns {BaseBuilder} self
   */


  setSegmentPoints(points) {
    this.setTracks([new Track([new Segment(points)])]);
    return this;
  }
  /**
   * Object that can be used to build XML file.
   *
   * @returns {GPXBuildData}
   */


  toObject() {
    return { ...this.data,
      attributes: {
        'creator': 'fabulator:gpx-builder',
        'version': '1.1',
        'xmlns': 'http://www.topografix.com/GPX/1/1',
        'xmlns:osmand': 'https://osmand.net',
        'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
        'xsi:schemaLocation': this.schemaLocation.join(' '),
        ...this.data.attributes
      }
    };
  }

}
BaseBuilder.MODELS = index;

module.exports = BaseBuilder;
