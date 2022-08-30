'use strict';

class Route {
  /**
   * @see http://www.topografix.com/gpx/1/1/#type_rteType
   */
  constructor(data) {
    this.cmt = data.cmt;
    this.desc = data.desc;
    this.extensions = data.extensions;
    this.link = data.link;
    this.name = data.name;
    this.number = data.number;
    this.rtept = data.rtept;
    this.src = data.src;
    this.type = data.type;
  } // eslint-disable-next-line complexity


  toObject() {
    const {
      cmt,
      desc,
      src,
      link,
      number,
      type,
      extensions,
      rtept,
      name
    } = this;
    return { ...(cmt ? {
        cmt
      } : {}),
      ...(desc ? {
        desc
      } : {}),
      ...(src ? {
        src
      } : {}),
      ...(link ? {
        link
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
      ...(rtept ? {
        rtept: rtept.map(item => item.toObject())
      } : {}),
      ...(name ? {
        name
      } : {})
    };
  }

}

module.exports = Route;
