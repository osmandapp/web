'use strict';

class Metadata {
  /**
   * @see http://www.topografix.com/gpx/1/1/#type_metadataType
   */
  // eslint-disable-next-line
  constructor({
    name,
    desc,
    author,
    copyright,
    link,
    time,
    keywords,
    bounds,
    extensions
  }) {
    this.name = name || null;
    this.desc = desc || null;
    this.author = author || null;
    this.copyright = copyright || null;
    this.link = link || null;
    this.time = time || null;
    this.keywords = keywords || null;
    this.bounds = bounds || null;
    this.extensions = extensions || null;
  } // eslint-disable-next-line complexity


  toObject() {
    const {
      name,
      desc,
      author,
      copyright,
      link,
      time,
      keywords,
      bounds,
      extensions
    } = this;
    return { ...(name ? {
        name
      } : {}),
      ...(desc ? {
        desc
      } : {}),
      ...(author ? {
        author: author.toObject()
      } : {}),
      ...(copyright ? {
        copyright: copyright.toObject()
      } : {}),
      ...(link ? {
        link: link.toObject()
      } : {}),
      ...(time ? {
        time
      } : {}),
      ...(keywords ? {
        keywords
      } : {}),
      ...(bounds ? {
        bounds: bounds.toObject()
      } : {}),
      ...(extensions ? {
        extensions
      } : {})
    };
  }

}

module.exports = Metadata;
