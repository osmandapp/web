---
source-hash: 0ece8e7a1a25127672614cdf13cd0688a67a4cbb64515cc18d60c278f7999862
title: Offline raster- & vectorkaarten maken
versions: '*'
intro: Met OsmAndMapCreator zijn er veel manieren om raster- & vectorkaarten te maken en aan te passen voor uw behoeften.
---

## OsmAndMapCreator {#osmandmapcreator}

[**OsmAndMapCreator**](https://wiki.openstreetmap.org/wiki/OsmAndMapCreator) kan worden gebruikt om zelf kaarten te maken die door OsmAnd worden ondersteund. U kunt de nieuwste versie downloaden van de [website](https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). OsmAndMapCreator heeft UI-mogelijkheden om raster- & vectorkaarten te maken. *Om een vectorkaart te maken heeft u een OSM-bestand (`*.pbf, *.osm.gz, *.osm.bz2`)* nodig en *om een online sqlite-kaartbestand te maken heeft u een `basis tegel-URL` nodig*.

### Rasterkaarten (eenvoudig) {#raster-maps-simple}

Zodra u de tegels hebt geselecteerd waaruit u een kaart wilt maken in het menu **Bron van tegels** en deze succesvol zijn geladen in OsmAndMapCreator, kunt u met de rechtermuisknop klikken op het gebied dat u wilt voorladen. Daarna kunt u een `.sqlitedb`-bestand maken in **Bron van tegels** → **Sqlite-database maken**.

Om een vectorkaart te maken heeft u een OSM-bestand (*.pbf, *.osm.gz, *.osm.bz2) nodig en om een online sqlite-kaart te maken heeft u de URL van de basistegel nodig.

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-download-raster-maps.png').default} alt="Rasterkaarten downloaden" />

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-create-raster-maps.png').default} alt="Sqlitedb-kaarten maken" />

### Vectorkaarten (eenvoudig) {#vector-maps-simple}

Stappen om een vectorkaart te maken via de OsmAndMapCreator UI:

1. OSM-bestand
    - Download het van [Geofabrik](https://www.geofabrik.de/data/download.html) of een kleine export van [OpenStreetMap](https://www.openstreetmap.org/export#map=19/48.80672/2.13187)
    - Converteer [Shapefile naar OSM](https://wiki.openstreetmap.org/wiki/OGR)
    - Genereer [OSM XML](https://wiki.openstreetmap.org/wiki/OSM_XML) zelf met behulp van programmeerhulpmiddelen, u kunt verdergaan door het te converteren naar [OBF-formaat](../osmand-file-formats/osmand-obf.md) dat OsmAnd kan begrijpen
2. Selecteer de selectievakjes of u kaarten wilt produceren inclusief Adres / Routering / Transport / Kaartgegevens
3. Selecteer in **Bestand** → **Maak .obf van bestand**.
4. Zodra het proces is voltooid, heeft u een `.obf`-bestand in de werkmap.

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-create-vector-maps.png').default} alt="Vectorkaarten maken" />

Meer parameters voor het genereren van vectorkaarten kunnen worden gespecificeerd in het shell-script `utilities.sh`.

## Vectorkaarten (shellscript) {#vector-maps-shell-script}

De meest typische en krachtigste manier om kaarten te maken die door ontwikkelaars wordt gebruikt, is via het shellscript `utilities.sh` dat is verpakt in OsmAndMapCreator. Het heeft ook veel andere hulpprogramma's om aangepaste kaarten te maken, zoals een basiskaart of een kaart met regionamen en grenzen (regions.ocbf).

Voorbeeldscript:
```
wget -N http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip
wget  https://creator.osmand.net/osm-extract/albania_europe/albania_europe.pbf
unzip OsmAndMapCreator-main.zip -d OsmAndMapCreator
OsmAndMapCreator/utilities.sh generate-poi albania_europe.pbf --chars-build-poi-nameindex=3
```

Het generatiescript verwerkt slechts 1 OSM-bestand tegelijk (.pbf, .osm.gz, osm.bz2, .osm) en vele optionele parameters gespecificeerd als `--xxxxxx`.

| Hoofdcommando | Beschrijving |
|--------------|---------------|
| `generate-obf` | Genereert volledige obf met kaart-, adres-, POI-, transport- en routeringsinformatie |
| `generate-obf-no-address` | Genereert volledige obf maar zonder adresinformatie |
| `generate-address` | Genereert kaart met alleen adresinformatie |
| `generate-poi` | Genereert kaart met alleen POI-informatie |
| `generate-map` | Genereert kaart met alleen kaartweergave-informatie |
| `generate-roads` | Genereert kaart met alleen routeringsinformatie |

Alle extra parameters zijn te vinden in de code voor het geval ze niet correct zijn gedocumenteerd [Main Utilities](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/MainUtilities.java#L219). Alle parameters zijn optioneel!

| Parameters | Beschrijving |
|--------------|---------------|
| `--add-region-tags` | Vertraagt het kaartcreatieproces door aan elke weg een regionaamtag toe te voegen waar deze is verwerkt. Dit is alleen nodig voor wereldwijde basiskaarten of wanneer u multinationale regio's verwerkt, in alle andere gevallen is het gemakkelijker om een juiste naam voor uw bestand te hebben, d.w.z. germany_... , us_.... Als u deze parameter niet hebt en u deze parameter niet toevoegt, is het waarschijnlijk dat u niet-gelokaliseerde weg-/openbaarvervoerroutebadges in OsmAnd zult zien. |
| `--keep-only-sea-objects` | Verwijdert objecten die geen deel uitmaken van de oceaan/zee, dit wordt gebruikt om nautische kaarten te produceren |
| `--ram-process` | Specificeert dat de creatie RAM SQlite DB zal gebruiken in plaats van schijf - [meer informatie](#ram-to-process-maps). |
| `--srtm=<FOLDER>` | Specificeert de map met TIF-DEM-afbeeldingen, zodat informatie over hoogte en helling in wegen wordt gecodeerd |
| `--rendering-types=<FILE>` | Locatie van rendering_types.xml met regels en OSM-tags die in OBF moeten worden gecodeerd - [meer informatie](#custom-vector-map-tags). |
| `--poi-types=<FILE>` | Locatie van poi_types.xml met regels en OSM-tags die in OBF moeten worden gecodeerd voor POI - [meer informatie](#custom-vector-map-tags). |
| `--extra-relations=<FILE>` | OSM-bestand met polygonen zoals lage-emissiezones waarvan de tags moeten worden doorgegeven aan de wegen. |

**Opmerking**: Het maken van kaarten met batch.xml is verouderd, gebruik de hierboven genoemde shell-methoden en combineer deze met downloads/for-cycli met behulp van standaard shellscriptmogelijkheden.

### RAM om kaarten te verwerken {#ram-to-process-maps}

Het maken van kaarten is geheugenintensief en I/O-intensief. Met andere woorden: het duurt erg lang en kan zonder geheugen komen te zitten! Controleer eerst de generatie op kleine kaarten.
Om meer geheugen aan JVM te geven, kunt u de omgevingsvariabele JAVA_OPTS declareren.
```
export JAVA_OPTS="-Xms256M -Xmx6400M"
OsmAndMapCreator/utilities.sh generate-obf ....
```

Wat kunt u doen om de prestaties te verbeteren:

- Gebruik SSD-schijven.
- Gebruik meerdere schijven.
- Gebruik "in-memory" verwerking.
Als u schijfruimte wilt vermijden en alleen RAM wilt gebruiken om het proces te versnellen, specificeer dan de parameter `--ram-process`. Deze "in-memory" verwerking versnelt de kaartgeneratie met 10-50%, maar vereist veel geheugen. 10% tot 50% hangt af van de kaartgrootte. Kleinere kaarten profiteren minder van in-memory verwerking dan grotere kaarten, omdat schijftoegang voor initiële lezing en uiteindelijke kaartschrijven een grotere rol speelt, terwijl grotere kaarten meer "berekening" vereisen.

Bij normale "op schijf" verwerking wordt een *nodes.tmp.odb*-bestand gemaakt van uw *.osm*- of *.osm.pbf*-bestand. Dit *nodes.tmp.odb*-bestand is een sqlite-databasebestand en is ongeveer 15 tot 25 keer zo groot als het originele *.osm.pbf*-bestand dat u hebt gedownload van [geofabrik.de](http://download.geofabrik.de/). Dus als uw originele *.osm.pbf*-bestand 300 MB is, zal uw *nodes.tmp.odb*-bestand 5 GB tot 6 GB zijn! Houd er rekening mee dat kleinere kaarten rond de 15x factor zullen liggen, terwijl grote kaarten (>350 MB) zullen eindigen met een 20x tot 25x ruimtevergroting.

Bij "in-memory" verwerking wordt dit *nodes.tmp.odb*-bestand in uw werkgeheugen gemaakt. U hebt "de grootte van de nodes.tmp.odb" + 20-25% nodig. Houd er rekening mee dat u de `-Xmx`-parameter niet hoeft te verhogen, omdat SQLite in-memory geen JVM-geheugen zal innemen en alleen native besturingsgeheugen zal gebruiken.

Voorbeeld: voor een *.osm.pbf* van 250 MB wordt een *nodes.tmp.odb*-bestand van ~4,5 GB gegenereerd.

### Aangepaste vectorkaart (tags) {#custom-vector-map-tags}

OsmAnd-rendering en POI-zoekopdrachten zijn afhankelijk van informatie die naar [OBF](../osmand-file-formats/osmand-obf.md) is geschreven. Het heeft een andere structuur dan andere OSM-formaten en is geoptimaliseerd voor mobiel gebruik. U kunt de inhoud inspecteren met [Binary Inspector](../map-creation/how-to-inspect-an-obf.md). De 3 belangrijkste onderdelen van het OBF-bestand zijn:

- **Kaartsectie** gebruikt voor kaartweergave gedefinieerd door [Rendering types](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml)
- **POI-sectie** gebruikt voor POI-zoekopdrachten en objectinformatie gedefinieerd door [POI types](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/poi_types.xml)
- **Routeringssectie** gebruikt voor routering gedefinieerd door [Routing types](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml) - hetzelfde bestand als rendering types, maar heeft een eigen sectie `<category name="routing"> - routing_type`.

`rendering_types.xml` en `poi_types.xml` kunnen worden overschreven tijdens het kaartcreatieproces in de OsmAndMapCreator UI-instellingen of als opdrachtregelparameters `--rendering-types=<path>`, `--poi-types==<path>` naar `utilities.sh generate-obf` (verpakt met OsmAndMapCreator).

- Het hoofdkaartobjecttype (`<type tag="abandoned:highway" value="track" minzoom="13"/>`) wordt per OSM-entiteit (knooppunt of weg of multipolygon) geregistreerd. Er kunnen veel hoofdtypen per 1 entiteit worden geregistreerd (d.w.z. weg + tram + route_bus), de tag `order` sorteert typen binnen de entiteit.
- Het aanvullende kaartobjecttype (`<type tag="service" value="driveway" minzoom="13" additional="true"/>`) is aanvullende informatie die aan de OSM-entiteit is gekoppeld, dus als de OSM-entiteit niet is geregistreerd met het hoofdtype, wordt deze niet opgeslagen in OBF. Meestal slaat het informatie op om extra functies zoals kleur, gladheid weer te geven.
- Het tekstkaartobjecttype (`<type tag="int_ref" additional="text" minzoom="1" order="32"/>`) slaat tekstinformatie over het object op, zodat deze later op de kaart kan worden weergegeven.
- `entity_convert` vertegenwoordigt eenvoudige tagtransformatiescripts (`<entity_convert pattern="tag_transform" from_tag="bridge" if_tag1="highway" if_value1="proposed" routing="no"/>`). Het wordt vaak gebruikt om tags te combineren in specifieke typen, zodat het gemakkelijker is om weer te geven met een aangepaste renderingstijl. Het maakt het ook mogelijk om regiospecifieke tagtransformatie te geven en maakt het mogelijk om verschillende functies per land weer te geven.
- Relatietagpropagatie. OsmAnd indexeert geen relatieobjecten (behalve multipolygonen - opgeslagen als gebiedsobjecten), maar het maakt het mogelijk om tags van relaties naar leden te propageren, te pushen. Uiteraard kan 1 lid meerdere bovenliggende relaties hebben en zijn tagconflicten mogelijk. OsmAnd ondersteunt 3 manieren om met conflicten om te gaan:
  - combineer alle tags als één lange komma-gescheiden regel (goed voor het weergeven van busroutenamen als een lange string op de weg - `nameTags`, `namePrefix`).
  - sorteer waarden en behoud de hoogste waarde (goed voor het weergeven van lokale versus internationale routes - `relationGroupSort`, `additionalTags`, `additionalNamePrefix`).
  - genereert unieke tags voor elke relatie (wordt nu niet gebruikt, maar slaat informatie zonder verlies op - `relationGroupNameTags`, `relationGroupAdditionalTags`, `relationGroupPrefix`). **Meer informatie** vindt u in [Rendering types](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml).

**Lees meer**: meestal worden aangepaste vectorkaarten gecombineerd met een [aangepaste renderingstijl](../osmand-file-formats/osmand-rendering-style.md).

## Rasterkaarten (geavanceerd) {#raster-maps-advanced}

OSM is een grote database voor kaarten, maar het bevat niet altijd de informatie die u nodig hebt (bijvoorbeeld over woestijnen). Soms kunt u de benodigde informatie uit andere bronnen halen, zoals papieren kaarten of satellietbeelden.

Er zijn speciale programma's voor de voorbereiding, conversie, kalibratie van alle bronkaarten (kaarten in afbeeldingsformaat, pdf-formaat, raster online kaarten) naar OsmAnd online kaarten.

Hieronder enkele daarvan.

### MOBAC {#mobac}

Mobile Atlas Creator (MOBAC) is een open source (GPL) programma voor het maken van offline atlassen. Mobile Atlas Creator kan een groot aantal verschillende online kaarten, zoals OpenStreetMap en andere kaartproviders, gebruiken als bron voor het maken van een offline atlas.

[Download](https://mobac.sourceforge.io/) het programma en voer het vervolgens uit.

Kies in het dialoogvenster voor het kiezen van het formaat *OsmAnd SQLite* of *OsmAnd tegelopslag*. SQLite is een enkel bestand met het geselecteerde gebied, terwijl tegels afzonderlijke stukken van de kaart zijn die op uw apparaat zijn verzameld. SQLite is vaak handiger omdat het op één plaats wordt opgeslagen en minder opslagruimte inneemt.

Kies de kaartbron, zoomniveaus en andere functies. Selecteer een gebied en kies vervolgens het menu *Selectie* -> *Selectie toevoegen*.

Daarna kunt u uw SQLite-bestand maken: 'Atlas' -> 'Atlas maken'.

### MAPC2MAPC {#mapc2mapc}

[MAPC2MAPC](https://www.the-thorns.org.uk/mapping/) is een Windows-programma om digitale kaarten te manipuleren en te converteren tussen verschillende platforms en software.

U kunt bijvoorbeeld elk afbeeldingsformaat en pdf-kaarten converteren en kalibreren naar een OsmAnd online kaart.

[Video-tutorial](https://www.youtube.com/watch?v=Y_fekLfcOc) over het gebruik van het programma.

### SASPlanet {#sasplanet}

SASPlanet is een gratis, open-source navigatiesoftware met de mogelijkheid om kaarten en satellietbeelden van de aarde van verschillende online services te bekijken en te downloaden naar een OsmAnd online kaart.

[Download](http://www.sasgis.org/download/) het programma, [Engelse handleiding](https://www.evernote.com/shard/s100/client/snv?noteGuid=e659886a-096c-46b4-8280-b57b77373847&noteKey=dac8148d9a74ed77&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs100%2Fsh%2Fe659886a-096c-46b4-8280-b57b77373847%2Fdac8148d9a74ed77&title=How%2Bto%2Buse%2BSAS.Planet.%2BEnglish%2Bguideline).

### Geolocated PDF of TIFF {#geolocated-pdf-or-tiff}

Hoe geolocated pdf/tif/tiff-bestanden te converteren naar [OsmAnd SQLitedb](../osmand-file-formats/osmand-sqlite.md) in Windows.
Georeferencing van tif/tiff en pdf-bestanden kan vrij eenvoudig worden gedaan in QGIS.

1. **Installeer en voer OSGeo4W uit**

[OSGeo4W](https://trac.osgeo.org/osgeo4w/) is een binaire distributie van een breed scala aan open source geospatiale software voor Windows. Het omvat QGIS, GDAL/OGR, GRASS en vele andere pakketten (meer dan 150). Download en voer de [OSGeo4W](https://trac.osgeo.org/osgeo4w/) netwerkinstaller uit.

Voer nu vanuit het Startmenu OSGeo4W Shell uit. Het zou moeten starten in de standaard _C:\OSGeo4W_-map. Navigeer naar uw werkmap (of u kunt hiervoor gewoon _C:\OSGeo4W_ gebruiken).

2. **Converteer tif/pdf naar mbtiles**

Om _tif/pdf_ naar _mbtiles_ te converteren, voert u uit (vervang _tif/pdf_ en _mbtiles_ bestandsnamen waar nodig):

&nbsp;<i>gdal_translate -co "ZLEVEL=9" -of mbtiles map_1.tif map_1.mbtiles --config gdal_pdf_dpi 600</i>&nbsp;

&nbsp;<i>gdaladdo -r nearest map_1.mbtiles</i>&nbsp;

Het eerste commando laat _GDAL_ de maximale zoom bepalen die het kan genereren op basis van de afbeeldingsresolutie. En converteert _tif/pdf_-bestand naar _mbtiles_ met de opgegeven DPI. Voel je vrij om met deze instelling te experimenteren, maar wees voorzichtig, want hoge DPI-waarden zullen het conversieproces erg lang maken en de resulterende bestandsgrootte erg groot.

Het tweede commando laat _GDAL_ de lagere zoomniveaus bepalen en genereren op basis van het reeds bestaande maximale zoomniveau. Het is niet ongebruikelijk dat deze twee commando's enige tijd in beslag nemen.

3. **Installeer Python vanuit de Microsoft Store**

Waarschijnlijk de eenvoudigste manier is om naar de [Microsoft Store](https://apps.microsoft.com/detail/9nj46sx7x90p) te gaan.

Als, tijdens het uitvoeren van het Python-script in de volgende stap, deze fout optreedt:

_Traceback (meest recente aanroep laatst):_

_Bestand ```<console>```, regel 1, in ```<module>```_

_ImportError: Geen module genaamd PIL_

Voer dan in PowerShell het volgende commando uit:

_pip install Pillow_

4. **Converteer mbtiles-formaat naar sqlitedb (geschikt voor OsmAnd en RMaps)**

U vindt het Python-script _mbtiles2osmand.py_ op [GitHub](https://github.com/tarwirdur/mbtiles2osmand). Download het naar uw werkmap en voer Command Prompt of PowerShell uit.

**Gebruik:**

&nbsp;<i>python3_ mbtiles2osmand.py [-h] [-f] [--jpg JPEG_QUALITY] input output</i>&nbsp;

&nbsp;<u>Positionele argumenten:</u>&nbsp;

**input**&nbsp;&nbsp;&nbsp;&nbsp; invoerbestand

**output**&nbsp;&nbsp;&nbsp;&nbsp; uitvoerbestand

&nbsp;<u>Optionele argumenten:</u>&nbsp;

**-h, --help** &nbsp;&nbsp;&nbsp;&nbsp;toon dit helpbericht en sluit af

**-f, -force** &nbsp;&nbsp;&nbsp;&nbsp;overschrijf uitvoerbestand indien aanwezig

**--jpg JPEG_QUALITY** &nbsp;&nbsp;&nbsp;&nbsp;converteer tegels naar JPEG met gespecificeerde kwaliteit

**Voorbeelden:**

Eenvoudig:

&nbsp;<i>python3 mbtiles2osmand.py _input.mbtiles output.sqlitedb_</i>&nbsp;

Tegels converteren naar jpeg met compressie:

&nbsp;<i>python3 mbtiles2osmand.py _--jpg 75 input.mbtiles output.sqlitedb_</i>&nbsp;

5. **Kopieer het .sqlitedb-bestand naar OsmAnd**

Nu zou u een .sqlitedb-bestand in uw werkmap moeten hebben. Kopieer het naar de juiste OsmAnd-map en gebruik het als hoofd-, onderliggende of overlay-kaart. Zie de [Gebruikershandleiding](../../user/map/raster-maps.md) voor meer details. Klaar!

6. **(OPTIONEEL) Meerdere OsmAnd-bestanden samenvoegen tot één bestand**

Als u dat nodig hebt, kunt u het scriptbestand unite_osmand.py vinden op [GitHub](https://github.com/tarwirdur/mbtiles2osmand). Nogmaals - download het naar uw werkmap en voer Command Prompt of PowerShell uit.

**Gebruik:**

&nbsp;<i>python3 unite_osmand.py [-h] [-f] input [input ...] output</i>&nbsp;

<u>Positionele argumenten:</u>

**input** &nbsp;&nbsp;&nbsp;&nbsp; invoerbestanden. Als meerdere bestanden een tegel met dezelfde coördinaten bevatten, wordt de tegel van het eerste (uit de argumentenlijst) bestand gebruikt

**output** &nbsp;&nbsp;&nbsp;&nbsp;uitvoerbestand

<u>Optionele argumenten:</u>

**-h, --help** &nbsp;&nbsp;&nbsp;&nbsp;toon dit helpbericht en sluit af

**-f, -force** &nbsp;&nbsp;&nbsp;&nbsp;overschrijf uitvoerbestand indien aanwezig

7. **EXTRA: Een enkele GeoPDF converteren naar GeoTIFF**

Als u om welke reden dan ook een enkele _geopdf_ naar _geotiff_ wilt converteren, gebruikt u het _gdal_translate_-commando en voert u uw eigen parameters in waar aangegeven met < >. U kunt _gdal_translate_ met of zonder optionele parameters gebruiken. Het kan lang duren om te verwerken en de resulterende tiff kan erg groot zijn, vooral wanneer de ortho-afbeeldingen en het gearceerde terrein worden meegenomen. Daarom kan het een goed idee zijn om enkele van de PDF-lagen uit te sluiten (zie tweede voorbeeld).

**Gebruik:**

&nbsp;<i>gdal_translate ```<GeoPDF bestandsnaam> <Output Geotiff Bestandsnaam>``` -of gtiff --config
gdal_pdf_layers_off “```<pdf laagnaam 1>,<pdf laagnaam 2>,<pdf laagnaam 3>```” --config gdal_pdf_dpi ```<output dpi>``` </i>&nbsp;

**Voorbeelden:**

Pdf converteren met al zijn lagen naar een geotiff met standaard DPI:

&nbsp;<i>gdal_translate geo_sample_map.pdf output_sample_map.tif -of gtiff</i>&nbsp;

Uitsluiten van verschillende lagen van conversie door de parameter _gdal_pdf_layers_off_ gevolgd door een lijst met komma-gescheiden laagnamen. Het uitvoerbestand is een geotiff, met gespecificeerde 600 DPI:

&nbsp;<i>gdal_translate geo_sample_map.pdf output_sample_map.tif -of gtiff --config gdal_pdf_layers_off “Map_Collar, Map_Frame.Projections_and_Grids, Map_Frame.Terrain.Shaded_Relief, Images.Orthoimage” --config gdal_pdf_dpi 600</i>&nbsp;

8. **Bronnen:**

- [Gdal2mbtiles](https://github.com/tarwirdur/mbtiles2osmandhttps://gist.github.com/jbaranski/0073f7b98bdf1f64f49988853daed67bhttps://github.com/ecometrica/gdal2mbtiles) (alleen ter referentie),
- [Hoe geopdf naar geotiff te converteren met GDAL](https://opengislab.com/blog/2016/4/2/usgs-geopdf-to-geotif-with-gdal),
- Zie ook [Overlay-kaarten maken voor OsmAnd op Linux](https://shallowsky.com/blog/mapping/osmand-making-overlay-maps.html).

## Veelvoorkomende problemen {#common-issues}

### OutOfMemoryError-probleem {#outofmemoryerror-issue}

**Probleem**: OsmAndMapCreator mislukt met de melding - OutOfMemoryError.

Het bestand dat u probeert te verwerken met OsmAndMapCreator is te groot. Probeer ofwel een kleiner bestand te verwerken, of verhoog het geheugen voor OsmAndMapCreator in het .sh- of .bat-bestand. De `-Xmx`-parameter specificeert hoeveel geheugen het programma kan verbruiken. Instellingen kunnen verschillen voor 64-bit (meer dan 1,5 GB) en 32-bit (maximaal ongeveer 1,5 GB) machines.

### Leeg bestand probleem {#empty-file-issue}

**Probleem**: Na het converteren van een .osm naar .obf met alleen een POI-index, is de .obf leeg, hoewel het originele .osm-bestand wel POI's bevatte.

Het kan zijn dat een cruciale tag ontbrak voor OsmAndMapCreator om een POI te herkennen toen u de osm van een andere bron, zoals Garmin, converteerde. Als een punt in het OSM-bestand er zo uitziet:
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
  </node>
```
wijzig het dan om een extra 'amenity'-tag te bevatten, zoals:
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
    <tag k='amenity' v='point' />
  </node>
```

Converteer vervolgens het bestand met OsmAndMapCreator. U kunt op de OSM-site controleren welke tags goed zijn om te gebruiken en u kunt ook controleren welke tags worden ondersteund door [OsmAnd](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/poi_types.xml).