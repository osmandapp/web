'use strict';

class Bounds {
  /**
   * @see http://www.topografix.com/gpx/1/1/#type_boundsType
   */
  constructor(minlat, minlon, maxlat, maxlon) {
    this.minlat = minlat;
    this.minlon = minlon;
    this.maxlat = maxlat;
    this.maxlon = maxlon;
  }

  toObject() {
    const {
      minlat,
      minlon,
      maxlat,
      maxlon
    } = this;
    return {
      attributes: {
        minlat,
        minlon,
        maxlat,
        maxlon
      }
    };
  }

}

module.exports = Bounds;
