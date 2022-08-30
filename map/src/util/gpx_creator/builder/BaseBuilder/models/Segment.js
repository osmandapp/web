'use strict';

class Segment {
  /**
   * @see http://www.topografix.com/gpx/1/1/#type_trksegType
   */
  constructor(trkpt, extensions) {
    this.trkpt = trkpt;
    this.extensions = extensions;
  }

  setPoints(trkpt) {
    this.trkpt = trkpt;
    return this;
  }

  toObject() {
    const {
      trkpt,
      extensions
    } = this;

    return {
      ...(trkpt ? {
        trkpt: trkpt.map(item => item.toObject())
      } : {}),
      ...extensions ? {
        extensions : extensions.toObject()
      } : {}
    };
  }

}

module.exports = Segment;
