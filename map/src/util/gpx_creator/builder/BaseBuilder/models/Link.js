'use strict';

class Link {
  /**
   * @see http://www.topografix.com/gpx/1/1/#type_linkType
   */
  constructor(href, {
    text,
    type
  }) {
    this.href = href;
    this.text = text;
    this.type = type;
  }

  toObject() {
    const {
      href,
      text,
      type
    } = this;
    return {
      attributes: {
        href
      },
      ...(text ? {
        text
      } : {}),
      ...(type ? {
        type
      } : {})
    };
  }

}

module.exports = Link;
