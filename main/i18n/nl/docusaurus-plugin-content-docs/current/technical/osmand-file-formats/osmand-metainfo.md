---
source-hash: 7d2329d146d37fabfc8bb2a88931d3b6d8348378e4d02d7a0ec48973e6660cea
sidebar_position: 9
---

# Maptegelmapindeling - .metainfo {#tiles-directory-format---metainfo}

Het Metainfo-formaat dat in OsmAnd wordt gebruikt om de voorkeuren voor tegellagen op te slaan. In OsmAnd voegen we een aantal tabellen toe die het formaat uitbreiden:


| Veld | Specificatie en doel |
| :---- | :---------------|
| `[url_template]` | Tekenreeks. URL-sjabloon om tegels mee te downloaden:<br /> zoom: `{0}` of `{$z}`<br /> x: `{1}` of `{$x}` , y: `{2}` of `{$y}`.<br /> Let op de volgorde van x / y, deze kan verschillen in de URL<br />servernaam - `{rnd}` genomen van [randoms]<br />sommige servers verwachten quadkey - `{q}` die moet worden gebruikt in plaats van XYZ<br />`{bbox}` - begrenzingskader, in graden, met formaat minLongitude,minLatitude,maxLongitude,maxLatitude, zoals `-111.02783203,35.01200204,-111.00585938,35.02999637`<br />voorbeelden:<br />`http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{$z}/{$y}/{$x}`<br />`http://a{rnd}.ortho.tiles.virtualearth.net/tiles/a{q}.jpeg?g=700`<br />`https://encdirect.noaa.gov/arcgis/services/encdirect/enc_harbour/MapServer/WmsServer?bbox={bbox}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:4326&width=256&height=256&layers=0,6,11&map=&styles=` |
| `[randoms]` | Tekenreeks. De namen van de mirrors van de server. Door komma's gescheiden. Eén van deze waarden zal willekeurig de placeholder `{rdn}` in het veld "url" vervangen. |
| `[minzoom]` | Geheel getal. Minimaal zoomniveau. In regulier formaat (OSM, Google Maps). |
| `[maxzoom]` | Geheel getal. Maximaal zoomniveau. In regulier formaat (OSM, Google Maps). |
| `[ellipsoid]` | Booleaans "true" of "false". True voor Elliptic Mercator (Yandex-tegels). False voor reguliere Spheric Web Mercator (OSM, Google Maps). |
| `[inverted_y]` | Booleaans "true" of "false". True voor omgekeerd Y-tegelnummer (Nakarte.me-tegels). |
| `[tile_size]` | Geheel getal 256 of 512. Zijgrootte van de te downloaden tegel in px. |
| `[img_density]` | Geheel getal. Tegelafbeeldingsdichtheid. |
| `[avg_img_size]` | Geheel getal. Gemiddelde tegelafbeeldingsgrootte. |
| `[expiration_time_minutes]` | Geheel getal. Specificeert of tegels moeten verlopen na het opgegeven aantal minuten. Ze worden dan nog steeds weergegeven, maar ook opnieuw gedownload. |

De klasse die deze tegelbron ondersteunt, bevindt zich op of nabij [View](https://github.com/osmandapp/Osmand/blob/master/OsmAnd-java/src/main/java/net/osmand/map/TileSourceManager.java#L28).