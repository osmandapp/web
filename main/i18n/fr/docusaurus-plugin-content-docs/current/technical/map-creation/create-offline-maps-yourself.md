---
source-hash: 1d9578202d2aac42373cc72aa3c9dc504d4fa30c02071abbabd105f85add5670 
title: Créer des cartes raster et vectorielles hors ligne
versions: '*'
intro: Avec OsmAndMapCreator, il existe de nombreuses façons de créer et de personnaliser des cartes raster et vectorielles pour vos besoins.
---

## OsmAndMapCreator

[**OsmAndMapCreator**](https://wiki.openstreetmap.org/wiki/OsmAndMapCreator) peut être utilisé pour créer vous-même toutes les cartes prises en charge par OsmAnd. Vous pouvez télécharger la dernière version depuis le [site web](https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). OsmAndMapCreator dispose de capacités d'interface utilisateur pour créer des cartes raster et vectorielles. *Pour créer une carte vectorielle, vous aurez besoin d'un fichier OSM (`*.pbf, *.osm.gz, *.osm.bz2`)* et *pour créer un fichier de carte sqlite en ligne, vous aurez besoin d'une `url de tuile de base`*.

### Cartes raster (simples)

Une fois que vous avez sélectionné les tuiles à partir desquelles vous souhaitez créer une carte dans le menu **Source of tiles** et qu'elles ont été chargées avec succès dans OsmAndMapCreator, vous pouvez cliquer avec le bouton droit de la souris sur la zone que vous souhaitez précharger. Après cela, vous pouvez créer un fichier `.sqlitedb` dans **Source of tiles** → **Create sqlite database**.

Pour créer une carte vectorielle, vous aurez besoin d'un fichier OSM (*.pbf, *.osm.gz, *.osm.bz2) et pour créer une carte sqlite en ligne, vous aurez besoin de l'URL de la tuile de base.

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-download-raster-maps.png').default} alt="Télécharger des cartes raster" />

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-create-raster-maps.png').default} alt="Créer des cartes sqlitedb" />

### Cartes vectorielles (simples)

Étapes pour créer une carte vectorielle via l'interface utilisateur d'OsmAndMapCreator :

1. Fichier OSM
    - Téléchargez-le depuis [Geofabrik](https://www.geofabrik.de/data/download.html) ou une petite exportation depuis [OpenStreetMap](https://www.openstreetmap.org/export#map=19/48.80672/2.13187)
    - Convertir [Shapefile en OSM](https://wiki.openstreetmap.org/wiki/OGR)
    - Générez vous-même [OSM XML](https://wiki.openstreetmap.org/wiki/OSM_XML) à l'aide de n'importe quel utilitaire de programmation, vous pouvez ensuite le convertir au [Format OBF](../osmand-file-formats/osmand-obf.md) qu'OsmAnd peut comprendre
2. Cochez les cases si vous souhaitez produire des cartes incluant les adresses / le routage / les transports / les données cartographiques
3. Sélectionnez dans **File** → **Create .obf from file**.
4. Une fois le processus terminé, vous aurez un fichier `.obf` dans le répertoire de travail.

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-create-vector-maps.png').default} alt="Créer des cartes vectorielles" />

D'autres paramètres pour générer des cartes vectorielles peuvent être spécifiés dans le script shell `utilities.sh`.

## Cartes vectorielles (script shell)

La manière la plus typique et la plus puissante de créer des cartes utilisée par les développeurs est via le script shell `utilities.sh` inclus dans OsmAndMapCreator. Il dispose également de nombreuses autres méthodes utilitaires pour créer des cartes personnalisées telles qu'une carte de base ou une carte avec les noms et les limites des régions (regions.ocbf).

Exemple de script :
```
wget -N http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip
wget  https://creator.osmand.net/osm-extract/albania_europe/albania_europe.pbf
unzip OsmAndMapCreator-main.zip -d OsmAndMapCreator
OsmAndMapCreator/utilities.sh generate-poi albania_europe.pbf --chars-build-poi-nameindex=3
```

Le script de génération ne prend qu'un seul fichier OSM à la fois (.pbf, .osm.gz, osm.bz2, .osm) et de nombreux paramètres optionnels spécifiés comme `--xxxxxx`.

| Commande principale | Description |
|--------------|---------------|
| `generate-obf` | Génère un obf complet avec les informations de carte, d'adresse, de poi, de transport, de routage |
| `generate-obf-no-address` | Génère un obf complet mais sans les informations d'adresse |
| `generate-address` | Génère une carte avec uniquement les informations d'adresse |
| `generate-poi` | Génère une carte avec uniquement les informations de poi |
| `generate-map` | Génère une carte avec uniquement les informations de rendu de carte |
| `generate-roads` | Génère une carte avec uniquement les informations de routage |

Tous les paramètres supplémentaires peuvent être trouvés dans le code au cas où ils ne seraient pas correctement documentés [Main Utilities](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/MainUtilities.java#L219). Tous les paramètres sont optionnels !

| Paramètres | Description |
|--------------|---------------|
| `--add-region-tags` | Ralentit le processus de création de carte en ajoutant à chaque chemin une balise de nom de région où il est traité. Cela n'est nécessaire que pour la carte de base mondiale ou lorsque vous traitez des régions multinationales, dans tous les autres cas, il est plus facile d'avoir un nom approprié pour votre fichier, c'est-à-dire germany_..., us_.... Si vous n'avez pas ce paramètre et que vous ne le spécifiez pas, il est probable que vous verrez des badges de route / de transport public non localisés dans OsmAnd. |
| `--keep-only-sea-objects` | Supprime les objets qui ne font pas partie de l'océan / de la mer, il est utilisé pour produire une carte nautique |
| `--ram-process` | Spécifie que la création utilisera une base de données SQlite en RAM au lieu du disque - [plus d'informations](#ram-to-process-maps). |
| `--srtm=<FOLDER>` | Spécifie le dossier avec les images TIF-DEM, de sorte que les informations sur la hauteur et la pente seront codées dans les routes |
| `--rendering-types=<FILE>` | Emplacement de rendering_types.xml avec les règles et les balises OSM qui doivent être codées en OBF - [plus d'informations](#custom-vector-map-tags). |
| `--poi-types=<FILE>` | Emplacement de poi_types.xml avec les règles et les balises OSM qui doivent être codées en OBF pour les POI - [plus d'informations](#custom-vector-map-tags). |
| `--extra-relations=<FILE>` | Fichier OSM avec des polygones comme les zones à faibles émissions dont les balises doivent être propagées aux chemins. |

**Note** : La création de cartes avec batch.xml est obsolète, veuillez utiliser les méthodes shell mentionnées ci-dessus et les combiner avec des téléchargements / des boucles for en utilisant les capacités standard des scripts shell.

### RAM pour traiter les cartes

La création de cartes est gourmande en mémoire et intensive en E/S. En d'autres termes : cela prend très longtemps et peut manquer de mémoire ! Veuillez d'abord vérifier la génération sur de petites cartes.
Pour donner plus de mémoire à la JVM, vous pouvez déclarer la variable d'environnement JAVA_OPTS.
```
export JAVA_OPTS="-Xms256M -Xmx6400M"
OsmAndMapCreator/utilities.sh generate-obf ....
```

Que pouvez-vous faire pour améliorer les performances :

- Utiliser des disques SSD.
- Utiliser plusieurs disques.
- Utiliser le traitement "en mémoire".
Si vous souhaitez éviter d'utiliser de l'espace disque et utiliser uniquement la RAM pour accélérer le processus, spécifiez le paramètre `--ram-process`. Ce traitement "en mémoire" accélérera la génération de carte de 10 à 50 %, mais nécessite beaucoup de mémoire. 10 % à 50 % dépendent de la taille de la carte. Les cartes plus petites bénéficient moins du traitement en mémoire que les cartes plus grandes, car l'accès au disque pour la lecture initiale et l'écriture finale de la carte joue un rôle plus important, tandis que les cartes plus grandes nécessitent plus de "calcul".

Dans le traitement normal "sur disque", un fichier *nodes.tmp.odb* est créé à partir de votre fichier *.osm* ou *.osm.pbf*. Ce fichier *nodes.tmp.odb* est un fichier de base de données sqlite et il est environ 15 à 25 fois plus grand que le fichier *.osm.pbf* original que vous avez téléchargé depuis [geofabrik.de](http://download.geofabrik.de/). Donc, si votre fichier *.osm.pbf* original est de 300 Mo, votre fichier *nodes.tmp.odb* sera de 5 Go à 6 Go ! Notez que les cartes plus petites seront autour du facteur 15x tandis que les grandes cartes (>350 Mo) finiront par augmenter l'espace de 20x à 25x.

Avec le traitement "en mémoire", ce fichier *nodes.tmp.odb* sera créé dans votre mémoire de travail. Vous aurez besoin de "la taille du nodes.tmp.odb" + 20-25 %. Veuillez noter que vous n'avez pas besoin d'augmenter le paramètre `-Xmx` car SQLite en mémoire n'occupera pas la mémoire JVM et utilisera uniquement la mémoire native du système d'exploitation.

Exemple : pour un *.osm.pbf* de 250 Mo, un fichier *nodes.tmp.odb* d'environ 4,5 Go sera généré.

### Carte vectorielle personnalisée (balises)

Le rendu et la recherche de POI d'OsmAnd reposent sur les informations écrites dans [OBF](../osmand-file-formats/osmand-obf.md). Il a une structure différente des autres formats OSM et est optimisé pour une utilisation mobile. Vous pouvez inspecter le contenu à l'aide de [Binary Inspector](../map-creation/how-to-inspect-an-obf.md). Les 3 parties les plus importantes du fichier OBF sont

- **Section Carte** utilisée pour le rendu de carte défini par [Rendering types](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml)
- **Section POI** utilisée pour la recherche de POI et les informations d'objet définies par [POI types](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/poi_types.xml)
- **Section Routage** utilisée pour le routage défini par [Routing types](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml) - même fichier que les types de rendu mais a sa propre section `<category name="routing"> - routing_type`.

`rendering_types.xml` et `poi_types.xml` peuvent être remplacés pendant le processus de création de carte dans les paramètres de l'interface utilisateur d'OsmAndMapCreator ou en tant que paramètres de ligne de commande `--rendering-types=<path>`, `--poi-types==<path>` pour `utilities.sh generate-obf` (inclus avec OsmAndMapCreator).

- Le type d'objet de carte principal (`<type tag="abandoned:highway" value="track" minzoom="13"/>`) est enregistré par entité OSM (nœud ou chemin ou multipolygone). Il peut y avoir plusieurs types principaux enregistrés par 1 entité (par exemple, route + tram + route_bus), la balise `order` triera les types au sein de l'entité.
- Le type d'objet de carte supplémentaire (`<type tag="service" value="driveway" minzoom="13" additional="true"/>`) est une information supplémentaire attachée à l'entité OSM, donc si l'entité OSM n'est pas enregistrée avec un type principal, elle ne sera pas stockée dans l'OBF. Habituellement, elle stocke des informations pour afficher des fonctionnalités supplémentaires comme la couleur, la fluidité.
- Le type d'objet de carte texte (`<type tag="int_ref" additional="text" minzoom="1" order="32"/>`), stocke des informations textuelles sur l'objet afin qu'elles puissent être affichées ultérieurement sur la carte.
- `entity_convert` représente de simples scripts de transformation de balises (`<entity_convert pattern="tag_transform" from_tag="bridge" if_tag1="highway" if_value1="proposed" routing="no"/>`). Il est souvent utilisé pour combiner des balises en types spécifiques, il est donc plus facile de les afficher avec un style de rendu personnalisé. Il permet également de donner une transformation de balise spécifique à une région et permet d'avoir un rendu de fonctionnalités différent par pays.
- Propagation des balises de relation. OsmAnd n'indexe pas les objets de relation (sauf les multipolygones - stockés comme objets de zone) mais il permet de propager, de pousser les balises de la relation sur les membres. Évidemment, 1 membre peut avoir plusieurs relations parentes et des conflits de balises sont possibles. OsmAnd prend en charge 3 façons de gérer les conflits :
  - combiner toutes les balises en une longue ligne séparée par des virgules (bon pour afficher les noms de lignes de bus comme une longue chaîne sur le chemin - `nameTags`, `namePrefix`).
  - trier les valeurs et conserver la valeur la plus élevée (bon pour afficher les routes locales vs internationales - `relationGroupSort`, `additionalTags`, `additionalNamePrefix`).
  - génère des balises uniques pour chaque relation (pas utilisé pour l'instant mais stocke les informations sans perte - `relationGroupNameTags`, `relationGroupAdditionalTags`, `relationGroupPrefix`). **Plus d'informations** vous pouvez trouver dans [Rendering types](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml).

**En savoir plus** : généralement, les cartes vectorielles personnalisées sont combinées avec un [style de rendu personnalisé](../osmand-file-formats/osmand-rendering-style.md).

## Cartes raster (avancées)

OSM est une grande base de données pour les cartes, mais elle ne contient pas toujours les informations dont vous avez besoin (par exemple, sur les déserts). Parfois, vous pouvez obtenir les informations dont vous avez besoin à partir d'autres sources, telles que des cartes papier ou des images satellite.

Il existe des programmes spéciaux pour la préparation, la conversion, la calibration de toutes les cartes sources (cartes au format image, format pdf, cartes raster en ligne) en cartes en ligne OsmAnd.

Quelques-uns d'entre eux ci-dessous.

### MOBAC

Mobile Atlas Creator (MOBAC) est un programme open source (GPL) pour créer des atlas hors ligne. Mobile Atlas Creator peut utiliser un grand nombre de cartes en ligne différentes, telles qu'OpenStreetMap et d'autres fournisseurs de cartes, comme source pour créer un atlas hors ligne.

Il suffit de [télécharger](https://mobac.sourceforge.io/) le programme, puis de l'exécuter.

Dans la boîte de dialogue de choix du format, choisissez *OsmAnd SQLite* ou *OsmAnd tile storage*. SQLite est un seul fichier avec la zone sélectionnée tandis que les tuiles sont des morceaux séparés de la carte rassemblés sur votre appareil. SQLite est souvent plus pratique car il est stocké en un seul endroit et occupe moins d'espace de stockage.

Choisissez la source de la carte, les niveaux de zoom et d'autres fonctionnalités. Sélectionnez une zone, puis choisissez le menu *Selection* -> *Add selection*.

Après cela, vous pouvez créer votre fichier SQLite : 'Atlas' -> 'Create Atlas'.

### MAPC2MAPC

[MAPC2MAPC](https://www.the-thorns.org.uk/mapping/) est un programme Windows pour manipuler des cartes numériques et les convertir entre différentes plateformes et logiciels.

Par exemple, vous pouvez convertir et calibrer n'importe quel format d'image et cartes pdf en carte en ligne OsmAnd.

[Tutoriel vidéo](https://www.youtube.com/watch?v=Y_fekLfcUOc) sur l'utilisation du programme.

### SASPlanet

SASPlanet est un logiciel de navigation gratuit et open source capable de visualiser et de télécharger des cartes et des images satellite de la Terre à partir de divers services en ligne vers la carte en ligne OsmAnd.

[Téléchargez](http://www.sasgis.org/download/) le programme, [guide en anglais](https://www.evernote.com/shard/s100/client/snv?noteGuid=e659886a-096c-46b4-8280-b57b77373847&noteKey=dac8148d9a74ed77&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs100%2Fsh%2Fe659886a-096c-46b4-8280-b57b77373847%2Fdac8148d9a74ed77&title=How%2Bto%2Buse%2BSAS.Planet.%2BEnglish%2Bguideline).

### PDF ou TIFF géolocalisé

Comment convertir des fichiers pdf/tif/tiff géolocalisés en [OsmAnd SQLitedb](../osmand-file-formats/osmand-sqlite.md) sous Windows.
Le géoréférencement des fichiers tif/tiff et pdf peut être fait assez simplement dans QGIS.

1. **Installer et exécuter OSGeo4W**

[OSGeo4W](https://trac.osgeo.org/osgeo4w/) est une distribution binaire d'un large ensemble de logiciels géospatiaux open source pour Windows. Il comprend QGIS, GDAL/OGR, GRASS ainsi que de nombreux autres packages (plus de 150). Téléchargez et exécutez l'installateur réseau [OSGeo4W](https://trac.osgeo.org/osgeo4w/).

Maintenant, depuis le menu Démarrer, exécutez OSGeo4W Shell. Il devrait démarrer dans le répertoire par défaut _C:\OSGeo4W_. Naviguez jusqu'à votre dossier de travail (ou vous pouvez simplement utiliser _C:\OSGeo4W_ à cette fin).

2. **Convertir tif/pdf en mbtiles**

Pour convertir _tif/pdf_ en _mbtiles_, exécutez (en remplaçant les noms de fichiers _tif/pdf_ et _mbtiles_ si nécessaire) :

&nbsp;<i>gdal_translate -co "ZLEVEL=9" -of mbtiles map_1.tif map_1.mbtiles --config gdal_pdf_dpi 600</i>&nbsp;

&nbsp;<i>gdaladdo -r nearest map_1.mbtiles</i>&nbsp;

La première commande permet à _GDAL_ de déterminer le zoom maximum qu'il peut générer en fonction de la résolution de l'image. Et convertit le fichier _tif/pdf_ en _mbtiles_ avec le DPI spécifié. N'hésitez pas à jouer avec ce paramètre, mais soyez prudent car des valeurs DPI élevées rendront le processus de conversion très long et la taille du fichier résultant très grande.

La deuxième commande permet à _GDAL_ de déterminer et de générer les niveaux de zoom inférieurs en fonction du niveau de zoom maximum qui existe déjà. Il n'est pas rare que ces deux commandes prennent un certain temps à se terminer.

3. **Installer Python depuis le Microsoft Store**

Probablement le moyen le plus simple est de se rendre sur le [Microsoft Store](https://apps.microsoft.com/detail/9nj46sx7x90p).

Si, en essayant d'exécuter le script Python à l'étape suivante, cette erreur se produit :

_Traceback (most recent call last):_

_File ```<console>```, line 1, in ```<module>```_

_ImportError: No module named PIL_

Alors dans PowerShell, exécutez la commande suivante :

_pip install Pillow_

4. **Convertir le format mbtiles en sqlitedb (adapté à OsmAnd et RMaps)**

Vous trouverez le script Python _mbtiles2osmand.py_ sur [GitHub](https://github.com/tarwirdur/mbtiles2osmand). Téléchargez-le dans votre dossier de travail et exécutez l'invite de commande ou PowerShell.

**Utilisation :**

&nbsp;<i>python3_ mbtiles2osmand.py [-h] [-f] [--jpg JPEG_QUALITY] input output</i>&nbsp;

&nbsp;<u>Arguments positionnels :</u>&nbsp;

**input**&nbsp;&nbsp;&nbsp;&nbsp; fichier d'entrée

**output**&nbsp;&nbsp;&nbsp;&nbsp; fichier de sortie

&nbsp;<u>Arguments optionnels :</u>&nbsp;

**-h, --help** &nbsp;&nbsp;&nbsp;&nbsp;afficher ce message d'aide et quitter

**-f, -force** &nbsp;&nbsp;&nbsp;&nbsp;écraser le fichier de sortie s'il existe

**--jpg JPEG_QUALITY** &nbsp;&nbsp;&nbsp;&nbsp;convertir les tuiles en JPEG avec la qualité spécifiée

**Exemples :**

Simple :

&nbsp;<i>python3 mbtiles2osmand.py _input.mbtiles output.sqlitedb_</i>&nbsp;

Conversion des tuiles en jpeg avec compression :

&nbsp;<i>python3 mbtiles2osmand.py _--jpg 75 input.mbtiles output.sqlitedb_</i>&nbsp;

5. **Copier le fichier .sqlitedb dans OsmAnd**

Vous devriez maintenant avoir un fichier .sqlitedb prêt dans votre dossier de travail. Copiez-le dans le dossier OsmAnd approprié et utilisez-le comme carte principale, sous-jacente ou superposée. Voir le [Guide de l'utilisateur](../../user/map/raster-maps.md) pour plus de détails. C'est fait !

6. **(OPTIONNEL) Unir plusieurs fichiers osmand en un seul fichier**

Si vous en avez besoin, vous pouvez trouver le fichier script unite_osmand.py sur [GitHub](https://github.com/tarwirdur/mbtiles2osmand). Encore une fois, téléchargez-le dans votre dossier de travail et exécutez l'invite de commande ou PowerShell.

**Utilisation :**

&nbsp;<i>python3 unite_osmand.py [-h] [-f] input [input ...] output</i>&nbsp;

<u>Arguments positionnels :</u>

**input** &nbsp;&nbsp;&nbsp;&nbsp; fichiers d'entrée. Si plusieurs fichiers contiennent une tuile avec les mêmes coordonnées, la tuile du premier fichier (de la liste d'arguments) sera utilisée

**output** &nbsp;&nbsp;&nbsp;&nbsp;fichier de sortie

<u>Arguments optionnels :</u>

**-h, --help** &nbsp;&nbsp;&nbsp;&nbsp;afficher ce message d'aide et quitter

**-f, -force** &nbsp;&nbsp;&nbsp;&nbsp;écraser le fichier de sortie s'il existe

7. **EXTRA : Convertir un seul GeoPDF en GeoTIFF**

Si, pour une raison quelconque, vous souhaitez convertir un seul _geopdf_ en _geotiff_, utilisez la commande _gdal_translate_ et entrez vos propres paramètres là où indiqué par < >. Vous pouvez utiliser _gdal_translate_ avec ou sans paramètres optionnels. Le traitement peut prendre beaucoup de temps et le tiff résultant peut être très volumineux, surtout s'il inclut l'orthoimage et le terrain ombré. Par conséquent, il peut être judicieux d'exclure certaines des couches PDF (voir le deuxième exemple).

**Utilisation :**

&nbsp;<i>gdal_translate ```<Nom du fichier GeoPDF> <Nom du fichier Geotiff de sortie>``` -of gtiff --config
gdal_pdf_layers_off “```<nom de la couche pdf 1>,<nom de la couche pdf 2>,<nom de la couche pdf 3>```” --config gdal_pdf_dpi ```<dpi de sortie>``` </i>&nbsp;

**Exemples :**

Conversion d'un pdf avec toutes ses couches en geotiff au DPI par défaut :

&nbsp;<i>gdal_translate geo_sample_map.pdf output_sample_map.tif -of gtiff</i>&nbsp;

Exclusion de plusieurs couches de la conversion par le paramètre <i>gdal_pdf_layers_off</i> suivi d'une liste de noms de couches séparés par des virgules. Le fichier de sortie est un geotiff, avec un DPI spécifié de 600 :

&nbsp;<i>gdal_translate geo_sample_map.pdf output_sample_map.tif -of gtiff --config gdal_pdf_layers_off “Map_Collar, Map_Frame.Projections_and_Grids, Map_Frame.Terrain.Shaded_Relief, Images.Orthoimage” --config gdal_pdf_dpi 600</i>&nbsp;

8. **Sources :**

- [Gdal2mbtiles](https://github.com/tarwirdur/mbtiles2osmandhttps://gist.github.com/jbaranski/0073f7b98bdf1f64f49988853daed67bhttps://github.com/ecometrica/gdal2mbtiles) (pour référence uniquement),
- [Comment convertir geopdf en geotiff en utilisant GDAL](https://opengislab.com/blog/2016/4/2/usgs-geopdf-to-geotif-with-gdal),
- Voir aussi [Créer des cartes superposées pour OsmAnd sous Linux](https://shallowsky.com/blog/mapping/osmand-making-overlay-maps.html).

## Problèmes courants

### Problème OutOfMemoryError

**Problème** : OsmAndMapCreator échoue avec le message - OutOfMemoryError.

Le fichier que vous essayez de traiter avec OsmAndMapCreator est trop volumineux. Essayez de traiter un fichier plus petit, ou augmentez la mémoire pour OsmAndMapCreator dans le fichier .sh ou .bat. Le paramètre `-Xmx` spécifie la quantité de mémoire que le programme peut consommer. Les paramètres peuvent être différents pour les machines 64 bits (plus de 1,5 Go) et 32 bits (maximum environ 1,5 Go).

### Problème de fichier vide

**Problème** : Après avoir converti un .osm en .obf avec seulement un index POI, le .obf est vide, bien que le fichier .osm original contenait des POI.

Il se peut qu'une balise cruciale manquait pour qu'OsmAndMapCreator reconnaisse un POI lorsque vous avez converti l'osm d'une autre source, comme Garmin. Si un point dans le fichier OSM ressemble à ceci :
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
  </node>
```
modifiez-le pour qu'il contienne une balise 'amenity' supplémentaire, comme :
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
    <tag k='amenity' v='point' />
  </node>
```

Ensuite, convertissez le fichier à l'aide d'OsmAndMapCreator. Vous pouvez vérifier sur le site OSM quelles balises sont bonnes à utiliser et vous pouvez également vérifier quelles balises sont prises en charge par [OsmAnd](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/poi_types.xml).

