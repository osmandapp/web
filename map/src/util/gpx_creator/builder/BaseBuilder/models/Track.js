'use strict';

class Track {
  /**
   * @see http://www.topografix.com/gpx/1/1/#type_trkType
   */
  // eslint-disable-next-line complexity
  constructor(trkseg, {
    name,
    cmt,
    desc,
    src,
    link,
    number,
    type,
    extensions
  } = {}) {
    this.name = name;
    this.cmt = cmt;
    this.desc = desc;
    this.src = src;
    this.link = link;
    this.number = number;
    this.type = type;
    this.extensions = extensions;
    this.trkseg = trkseg;
  }

  setSegments(trkseg) {
    this.trkseg = trkseg;
    return this;
  } // eslint-disable-next-line complexity


  toObject() {
    const {
      name,
      cmt,
      desc,
      src,
      link,
      number,
      type,
      extensions,
      trkseg
    } = this;
    return { ...(name ? {
        name
      } : {}),
      ...(cmt ? {
        cmt
      } : {}),
      ...(desc ? {
        desc
      } : {}),
      ...(src ? {
        src
      } : {}),
      ...(link ? {
        link: link.toObject()
      } : {}),
      ...(typeof number === 'number' ? {
        number
      } : {}),
      ...(type ? {
        type
      } : {}),
      ...(extensions ? {
        extensions
      } : {}),
      ...(trkseg ? {
        trkseg: trkseg.map(segment => segment.toObject())
      } : {})
    };
  }

}

module.exports = Track;
