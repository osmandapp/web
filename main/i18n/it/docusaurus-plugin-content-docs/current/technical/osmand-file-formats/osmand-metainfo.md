---
source-hash: 7d2329d146d37fabfc8bb2a88931d3b6d8348378e4d02d7a0ec48973e6660cea
sidebar_position: 9
---

# Formato della directory delle tessere - .metainfo {#tiles-directory-format---metainfo}

Il formato Metainfo utilizzato in OsmAnd per memorizzare le preferenze dei livelli di tessere. In OsmAnd aggiungiamo una serie di tabelle che estendono il formato:


| Campo | Specifica e scopo| 
| :---- | :---------------| 
| `[url\_template]` | Stringa. Modello URL per scaricare le tessere con:<br /> zoom: `{0}` o `{$z}`<br /> x: `{1}` o `{$x}` , y: `{2}` o `{$y}`.<br />  Osserva l'ordine di x / y, potrebbe essere diverso nell'url<br />nome del server - `{rnd}` preso da [randoms]<br />alcuni server si aspettano quadkey - `{q}` che dovrebbe essere usato al posto di XYZ<br />`{bbox}` - riquadro di delimitazione, in gradi, con formato longitudine minima,latitudine minima,longitudine massima,latitudine massima, come `-111.02783203,35.01200204,-111.00585938,35.02999637`<br />esempi:<br />`http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{$z}/{$y}/{$x}`<br />`http://a{rnd}.ortho.tiles.virtualearth.net/tiles/a{q}.jpeg?g=700`<br />`https://encdirect.noaa.gov/arcgis/services/encdirect/enc_harbour/MapServer/WmsServer?bbox={bbox}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:4326&width=256&height=256&layers=0,6,11&map=&styles=` | 
| `[randoms]` | Stringa. I nomi dei mirror del server. Separati da virgola. Uno di questi valori sostituirà casualmente il segnaposto `{rdn}` nel campo "url".| 
| `[minzoom]` | Intero. Livello di zoom minimo. Nel formato regolare (OSM, Google maps).| 
| `[maxzoom]` | Intero. Livello di zoom massimo. Nel formato regolare (OSM, Google maps).| 
| `[ellipsoid]` | Booleano "true" o "false". True per Mercatore ellittico (tessere Yandex). False per il regolare Mercatore sferico web (OSM, Google maps)| 
| `[inverted\_y]` | Booleano "true" o "false". True per numero di tessere Y invertito (tessere Nakarte.me).| 
| `[tile\_size]` | Intero 256 o 512. Dimensione del lato della tessera scaricata in px.| 
| `[img\_density]` | Intero. Densità dell'immagine della tessera.| 
| `[avg\_img\_size]` | Intero. Dimensione media dell'immagine della tessera.| 
| `[expiration\_time\_minutes]` | Intero. Specifica se le tessere devono scadere dopo il numero di minuti indicato. Verranno comunque visualizzate, ma anche scaricate nuovamente.| 

La classe che supporta questa sorgente di tessere si trova in o vicino a [View](https://github.com/osmandapp/Osmand/blob/master/OsmAnd-java/src/main/java/net/osmand/map/TileSourceManager.java#L28).