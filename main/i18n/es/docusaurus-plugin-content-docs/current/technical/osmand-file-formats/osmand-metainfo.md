---
source-hash: 7d2329d146d37fabfc8bb2a88931d3b6d8348378e4d02d7a0ec48973e6660cea
sidebar_position: 9
---

# Formato de directorio de mosaicos - .metainfo {#tiles-directory-format---metainfo}

El formato Metainfo utilizado en OsmAnd para almacenar las preferencias de las capas de mosaicos. En OsmAnd añadimos una serie de tablas que amplían el formato:


| Campo | Especificación y propósito |
| :---- | :---------------|
| `[url\_template]` | Cadena. Plantilla de URL para descargar mosaicos con:<br /> zoom: `{0}` o `{$z}`<br /> x: `{1}` o `{$x}` , y: `{2}` o `{$y}`.<br />  Observe el orden de x / y, podría ser diferente en la url<br />nombre del servidor - `{rnd}` tomado de [randoms]<br />algunos servidores esperan quadkey - `{q}` que debe usarse en lugar de XYZ<br />`{bbox}` - cuadro delimitador, en grados, con formato minLongitud,minLatitud,maxLongitud,maxLatitud, como `-111.02783203,35.01200204,-111.00585938,35.02999637`<br />ejemplos:<br />`http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{$z}/{$y}/{$x}`<br />`http://a{rnd}.ortho.tiles.virtualearth.net/tiles/a{q}.jpeg?g=700`<br />`https://encdirect.noaa.gov/arcgis/services/encdirect/enc_harbour/MapServer/WmsServer?bbox={bbox}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:4326&width=256&height=256&layers=0,6,11&map=&styles=` |
| `[randoms]` | Cadena. Los nombres de los espejos del servidor. Separados por comas. Uno de estos valores reemplazará aleatoriamente el marcador de posición `{rdn}` en el campo "url".|
| `[minzoom]` | Entero. Nivel de zoom mínimo. En formato regular (OSM, Google maps).|
| `[maxzoom]` | Entero. Nivel de zoom máximo. En formato regular (OSM, Google maps).|
| `[ellipsoid]` | Booleano "true" o "false". True para Mercator elíptico (mosaicos de Yandex). False para Mercator Web esférico regular (OSM, Google maps)|
| `[inverted\_y]` | Booleano "true" o "false". True para número de mosaico Y invertido (mosaicos de Nakarte.me).|
| `[tile\_size]` | Entero 256 o 512. Tamaño lateral del mosaico de descarga en px.|
| `[img\_density]` | Entero. Densidad de la imagen del mosaico.|
| `[avg\_img\_size]` | Entero. Tamaño promedio de la imagen del mosaico.|
| `[expiration\_time\_minutes]` | Entero. Especifica si los mosaicos deben caducar después del número de minutos dado. Todavía se mostrarían, pero también se volverían a descargar.|

La clase que soporta esta fuente de mosaicos se encuentra en o cerca de [View](https://github.com/osmandapp/Osmand/blob/master/OsmAnd-java/src/main/java/net/osmand/map/TileSourceManager.java#L28).