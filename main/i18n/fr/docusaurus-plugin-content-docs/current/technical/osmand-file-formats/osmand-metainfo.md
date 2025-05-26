---
source-hash: 4531f0d36cb16cd94772ffa387029c3cc77dcd066bf8f0983a2e9089ef69f5c7
sidebar_position: 9
---

# Format du répertoire de tuiles - .metainfo {#tiles-directory-format---metainfo}

Le format Metainfo utilisé dans OsmAnd pour stocker les préférences des couches de tuiles. Dans OsmAnd, nous ajoutons un certain nombre de tables étendant le format :

| Champ | Spécification et objectif |
| :---- | :--------------- |
| `[url\_template]` | Chaîne de caractères. Modèle d'URL pour télécharger les tuiles avec :<br /> zoom : `{0}` ou `{$z}`<br /> x : `{1}` ou `{$x}`, y : `{2}` ou `{$y}`.<br /> Attention à l'ordre de x / y, il peut être différent dans l'URL<br /> nom du serveur - `{rnd}` pris dans [randoms]<br /> certains serveurs attendent une quadkey - `{q}` qui doit être utilisée à la place de XYZ<br /> `{bbox}` - boîte englobante, en degrés, au format minLongitude,minLatitude,maxLongitude,maxLatitude, tel que `-111.02783203,35.01200204,-111.00585938,35.02999637`<br /> exemples :<br /> `http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{$z}/{$y}/{$x}`<br /> `http://a{rnd}.ortho.tiles.virtualearth.net/tiles/a{q}.jpeg?g=700`<br /> `https://encdirect.noaa.gov/arcgis/services/encdirect/enc_harbour/MapServer/WmsServer?bbox={bbox}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:4326&width=256&height=256&layers=0,6,11&map=&styles=` |
| `[randoms]` | Chaîne de caractères. Les noms des miroirs du serveur. Séparés par des virgules. L'une de ces valeurs remplacera aléatoirement l'espace réservé `{rdn}` dans le champ "url". |
| `[minzoom]` | Entier. Niveau de zoom minimum. Au format standard (OSM, Google maps). |
| `[maxzoom]` | Entier. Niveau de zoom maximum. Au format standard (OSM, Google maps). |
| `[ellipsoid]` | Booléen "true" ou "false". True pour Mercator Elliptique (tuiles Yandex). False pour Mercator Web Sphérique standard (OSM, Google maps). |
| `[inverted\_y]` | Booléen "true" ou "false". True pour un numéro de tuile Y inversé (tuiles Nakarte.me). |
| `[tile\_size]` | Entier 256 ou 512. Taille latérale de la tuile téléchargée en px. |
| `[img\_density]` | Entier. Densité de l'image de la tuile. |
| `[avg\_img\_size]` | Entier. Taille moyenne de l'image de la tuile. |
| `[expiration\_time\_minutes]` | Entier. Spécifie si les tuiles doivent expirer après le nombre de minutes donné. Elles seraient toujours affichées, mais aussi re-téléchargées. |

La classe prenant en charge cette source de tuiles se trouve à ou près de [View](https://github.com/osmandapp/Osmand/blob/master/OsmAnd-java/src/main/java/net/osmand/map/TileSourceManager.java#L28).