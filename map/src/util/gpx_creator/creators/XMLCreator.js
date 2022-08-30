'use strict';

var xmlbuilder2 = require('xmlbuilder2');

class XMLCreator {
  constructor(settings = {}) {
    this.settings = settings;
  } // eslint-disable-next-line complexity


  processXmlItem(dir, key, value) {
    if (key === 'attributes') {
      Object.keys(value).forEach(attribute => {
        dir.att(attribute, value[attribute]);
      });
      return;
    }

    if (key === 'email') {
      const email = value.split('@');
      dir.ele(key, {
        id: email[0],
        domain: email[1]
      });
      return;
    }

    if (value instanceof Date) {
      dir.ele(key).txt(value.toISOString());
      return;
    }

    if (Array.isArray(value) && typeof value[0] === 'object') {
      value.forEach(item => {
        this.generateXmlData(dir.ele(key), item);
      });
      return;
    }

    if (Array.isArray(value)) {
      dir.ele(key).txt(value.join(','));
      return;
    }

    if (typeof value === 'object') {
      this.generateXmlData(dir.ele(key), value);
      return;
    }

    dir.ele(key).txt(value);
  }

  generateXmlData(dir, object) {
    Object.keys(object).map(key => {
      return {
        key,
        value: object[key]
      };
    }).forEach(({
      key,
      value
    }) => {
      this.processXmlItem(dir, key, value);
    });
  }

  toString(data) {
    const root = xmlbuilder2.create({
      encoding: 'UTF-8'
    }, 'gpx');
    this.generateXmlData(root.first(), data);
    return root.end({
      allowEmptyTags: false,
      indent: '  ',
      newline: '\n',
      prettyPrint: true,
      ...this.settings
    });
  }

}

module.exports = XMLCreator;
