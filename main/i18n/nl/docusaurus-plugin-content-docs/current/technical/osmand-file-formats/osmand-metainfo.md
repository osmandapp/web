---
source-hash: 7d2329d146d37fabfc8bb2a88931d3b6d8348378e4d02d7a0ec48973e6660cea
sidebar_position: 9
---

# Tegelmapindeling - .metainfo {#tiles-directory-format---metainfo}

Het Metainfo-formaat dat in OsmAnd wordt gebruikt om de voorkeuren voor tegellagen op te slaan. In OsmAnd voegen we een aantal tabellen toe die het formaat uitbreiden:

| Veld | Specificatie en Doel |
| :---- | :--------------- |
| `[url_template]` | String. URL-sjabloon om tegels te downloaden met:<br /> zoom: `{0}` of `{$z}`<br /> x: `{1}` of `{$x}`, y: `{2}` of `{$y}`.<br /> Let op de volgorde van x / y, deze kan verschillen in de URL<br /> servernaam - `{rnd}` genomen van [randoms]<br /> sommige servers verwachten quadkey - `{q}` die moet worden gebruikt in plaats van XYZ<br /> `{bbox}` - bounding box, in graden, met formaat minLongitude,minLatitude,maxLongitude,maxLatitude, zoals `-111.02783203,35.01200204,-111.00585938,35.02999637`<br /> voorbeelden:<br /> `http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{$z}/{$y}/{$x}`<br /> `http://a{rnd}.ortho.tiles.virtualearth.net/tiles/a{q}.jpeg?g=700`<br /> `https://encdirect.noaa.gov/arcgis/services/encdirect/enc_harbour/MapServer/WmsServer?bbox={bbox}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:4326&width=256&height=256&layers=0,6,11&map=&styles=` |
| `[randoms]` | String. De namen van de mirrors van de server. Komma-gescheiden. Een van deze waarden zal willekeurig de placeholder `{rdn}` in het veld "url" vervangen. |
| `[minzoom]` | Integer. Min zoomniveau. In regulier formaat (OSM, Google maps). |
| `[maxzoom]` | Integer. Max zoomniveau. In regulier formaat (OSM, Google maps). |
| `[ellipsoid]` | Booleaans "true" of "false". True voor Elliptic Mercator (Yandex-tegels). False voor reguliere Spheric Web Mercator (OSM, Google maps) |
| `[inverted_y]` | Booleaans "true" of "false". True voor omgekeerd Y-tegelnummer (Nakarte.me-tegels). |
| `[tile_size]` | Integer 256 of 512. Zijgrootte van de te downloaden tegel in px. |
| `[img_density]` | Integer. Tegelbeeld dichtheid. |
| `[avg_img_size]` | Integer. Gemiddelde tegelbeeldgrootte. |
| `[expiration_time_minutes]` | Integer. Specificeert of tegels moeten verlopen na het opgegeven aantal minuten. Ze worden dan nog steeds weergegeven, maar ook opnieuw gedownload. |

De klasse die deze tegelbron ondersteunt, bevindt zich op of nabij [View](https://github.com/osmandapp/Osmand/blob/master/OsmAnd-java/src/main/java/net/osmand/map/TileSourceManager.java#L28).