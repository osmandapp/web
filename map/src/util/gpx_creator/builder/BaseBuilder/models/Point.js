

class Point {
  /**
   * @see http://www.topografix.com/gpx/1/1/#type_wptType
   */

  constructor(lat, lon, {
    ele,
    time,
    magvar,
    geoidheight,
    name,
    cmt,
    desc,
    src,
    link,
    sym,
    type,
    fix,
    sat,
    hdop,
    vdop,
    pdop,
    ageofdgpsdata,
    dgpsid,
    extensions
  } = {}) {
    this.lat = lat;
    this.lon = lon;
    this.ele = ele;
    this.time = time;
    this.magvar = magvar;
    this.geoidheight = geoidheight;
    this.name = name;
    this.cmt = cmt;
    this.desc = desc;
    this.src = src;
    this.link = link;
    this.sym = sym;
    this.type = type;
    this.fix = fix;
    this.sat = sat;
    this.hdop = hdop;
    this.vdop = vdop;
    this.pdop = pdop;
    this.ageofdgpsdata = ageofdgpsdata;
    this.dgpsid = dgpsid;
    this.extensions = extensions;
  }


  toObject() {
    const {
      lat,
      lon,
      ele,
      time,
      magvar,
      geoidheight,
      name,
      cmt,
      desc,
      src,
      link,
      sym,
      type,
      fix,
      sat,
      hdop,
      vdop,
      pdop,
      ageofdgpsdata,
      dgpsid,
      extensions
    } = this;
    return {
      attributes: {
        lat,
        lon
      },
      ...(typeof ele === 'number' ? {
        ele
      } : {}),
      ...(time instanceof Date ? {
        time
      } : {}),
      ...(typeof magvar === 'number' ? {
        magvar
      } : {}),
      ...(typeof geoidheight === 'number' ? {
        geoidheight
      } : {}),
      ...(name ? {
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
      ...(sym ? {
        sym
      } : {}),
      ...(type ? {
        type
      } : {}),
      ...(typeof fix === 'number' ? {
        fix
      } : {}),
      ...(typeof sat === 'number' ? {
        sat
      } : {}),
      ...(typeof hdop === 'number' ? {
        hdop
      } : {}),
      ...(typeof vdop === 'number' ? {
        vdop
      } : {}),
      ...(typeof pdop === 'number' ? {
        pdop
      } : {}),
      ...(typeof ageofdgpsdata === 'number' ? {
        ageofdgpsdata
      } : {}),
      ...(typeof dgpsid === 'number' ? {
        dgpsid
      } : {}),
      ...(extensions && Object.keys(extensions).length > 0 ? {
        extensions
      } : {})
    };
  }

}

module.exports = Point;
