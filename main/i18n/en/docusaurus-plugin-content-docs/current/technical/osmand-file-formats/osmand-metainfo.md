---
source-hash: 7d2329d146d37fabfc8bb2a88931d3b6d8348378e4d02d7a0ec48973e6660cea
sidebar_position: 9
---

# Tiles Directory Format - .metainfo {#tiles-directory-format---metainfo}

The Metainfo format is used in OsmAnd to store tile layer preferences. In OsmAnd, we add a number of tables extending the format:

| Field | Spec and Purpose|
| :---- | :---------------|
| `[url_template]` | String. URL template to download tiles with:<br /> zoom: `{0}` or `{$z}`<br /> x: `{1}` or `{$x}` , y: `{2}` or `{$y}`.<br /> Watch the order of x / y, it could be different in the url<br />server name - `{rnd}` taken from [randoms]<br />some servers expects quadkey - `{q}` that should be used instead of XYZ<br />`{bbox}` - bounding box, in degrees, with format minLongitude,minLatitude,maxLongitude,maxLatitude, such as `-111.02783203,35.01200204,-111.00585938,35.02999637`<br />examples:<br />`http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{$z}/{$y}/{$x}`<br />`http://a{rnd}.ortho.tiles.virtualearth.net/tiles/a{q}.jpeg?g=700`<br />`https://encdirect.noaa.gov/arcgis/services/encdirect/enc_harbour/MapServer/WmsServer?bbox={bbox}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:4326&width=256&height=256&layers=0,6,11&map=&styles=` |
| `[randoms]` | String. The names of the mirrors of server. Comma-separated. One of these values will randomly replace the placeholder `{rdn}` in "url" field.|
| `[minzoom]` | Integer. Min zoom level. In regular format (OSM, Google maps).|
| `[maxzoom]` | Integer. Max zoom level. In regular format (OSM, Google maps).|
| `[ellipsoid]` | Bool "true" or "false". True for Elliptic Mercator (Yandex tiles). False for regular Spheric Web Mercator (OSM, Google maps)|
| `[inverted_y]` | Bool "true" or "false". True for inverted Y tile number (Nakarte.me tiles).|
| `[tile_size]` | Integer 256 or 512. Side size of downloading tile in px.|
| `[img_density]` | Integer. Tile image density.|
| `[avg_img_size]` | Integer.Average tile image size.|
| `[expiration_time_minutes]` | Integer. Specifies if tiles shall expire after the given number of minutes. They would still be displayed, but also re-downloaded.|

The class supporting this tile source is at or near [View](https://github.com/osmandapp/Osmand/blob/master/OsmAnd-java/src/main/java/net/osmand/map/TileSourceManager.java#L28).