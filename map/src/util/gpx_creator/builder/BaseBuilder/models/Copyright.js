'use strict';

class Copyright {
  /**
   * @param author - Owner of licence
   * @param year - Year of licence
   * @param license - Type of licence
   * @see http://www.topografix.com/gpx/1/1/#type_copyrightType
   */
  constructor(author, {
    year,
    license
  }) {
    this.author = author;
    this.year = year;
    this.license = license;
  }

  toObject() {
    const {
      author,
      year,
      license
    } = this;
    return {
      attributes: {
        author
      },
      ...(typeof year === 'number' ? {
        year
      } : {}),
      ...(license ? {
        license
      } : {})
    };
  }

}

module.exports = Copyright;
