---
source-hash: 0ece8e7a1a25127672614cdf13cd0688a67a4cbb64515cc18d60c278f7999862
title: Creare mappe raster e vettoriali offline
versions: '*'
intro: Con OsmAndMapCreator ci sono molti modi per creare e personalizzare mappe raster e vettoriali per le tue esigenze.
---

## OsmAndMapCreator {#osmandmapcreator}

[**OsmAndMapCreator**](https://wiki.openstreetmap.org/wiki/OsmAndMapCreator) può essere utilizzato per creare autonomamente qualsiasi mappa supportata da OsmAnd. Puoi scaricare l'ultima versione dal [sito web](https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). OsmAndMapCreator ha funzionalità UI per creare mappe raster e vettoriali. *Per creare una mappa vettoriale avrai bisogno di un file OSM (`*.pbf, *.osm.gz, *.osm.bz2`)* e *per creare un file mappa sqlite online avrai bisogno di un `url base tile`*.

### Mappe raster (semplice) {#raster-maps-simple}

Una volta selezionate le tessere da cui si desidera creare una mappa nel menu **Sorgente di tessere** e queste sono state caricate correttamente in OsmAndMapCreator, è possibile fare clic con il pulsante destro del mouse sull'area che si desidera precaricare. Successivamente è possibile creare il file `.sqlitedb` in **Sorgente di tessere** → **Crea database sqlite**.

Per creare una mappa vettoriale avrai bisogno di un file OSM (*.pbf, *.osm.gz, *.osm.bz2) e per creare una mappa sqlite online avrai bisogno dell'url della tessera base.

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-download-raster-maps.png').default} alt="Scarica mappe raster" />

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-create-raster-maps.png').default} alt="Crea mappe sqlitedb" />

### Mappe vettoriali (semplice) {#vector-maps-simple}

Passaggi per creare una mappa vettoriale tramite l'interfaccia utente di OsmAndMapCreator:

1. File OSM
    - Scaricalo da [Geofabrik](https://www.geofabrik.de/data/download.html) o una piccola esportazione da [OpenStreetMap](https://www.openstreetmap.org/export#map=19/48.80672/2.13187)
    - Converti [Shapefile in OSM](https://wiki.openstreetmap.org/wiki/OGR)
    - Genera [OSM XML](https://wiki.openstreetmap.org/wiki/OSM_XML) tu stesso utilizzando qualsiasi utilità di programmazione, puoi procedere convertendolo in [Formato OBF](../osmand-file-formats/osmand-obf.md) che OsmAnd può capire
2. Seleziona le caselle di controllo se desideri produrre mappe che includano informazioni su indirizzi / percorsi / trasporti / dati mappa
3. Seleziona in **File** → **Crea .obf da file**.
4. Una volta completato il processo, avrai il file `.obf` nella directory di lavoro.

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-create-vector-maps.png').default} alt="Crea mappe vettoriali" />

Ulteriori parametri su come generare mappe vettoriali possono essere specificati nello script shell `utilities.sh`.

## Mappe vettoriali (script shell) {#vector-maps-shell-script}

Il modo più tipico e potente per creare mappe utilizzato dagli sviluppatori è tramite lo script shell `utilities.sh` incluso in OsmAndMapCreator. Ha anche molti altri metodi di utilità per creare alcune mappe personalizzate come la mappa base o la mappa con nomi e confini di regioni (regions.ocbf).

Esempio di script:
```
wget -N http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip
wget  https://creator.osmand.net/osm-extract/albania_europe/albania_europe.pbf
unzip OsmAndMapCreator-main.zip -d OsmAndMapCreator
OsmAndMapCreator/utilities.sh generate-poi albania_europe.pbf --chars-build-poi-nameindex=3
```

Lo script di generazione accetta un solo file OSM alla volta (.pbf, .osm.gz, osm.bz2, .osm) e molti parametri opzionali specificati come `--xxxxxx`.

| Comando principale | Descrizione |
|--------------|---------------|
| `generate-obf` | Genera un obf completo con informazioni su mappa, indirizzo, poi, trasporto, routing |
| `generate-obf-no-address` | Genera un obf completo ma senza informazioni sull'indirizzo |
| `generate-address` | Genera una mappa con solo informazioni sull'indirizzo |
| `generate-poi` | Genera una mappa con solo informazioni sui poi |
| `generate-map` | Genera una mappa con solo informazioni di rendering della mappa |
| `generate-roads` | Genera una mappa con solo informazioni di routing |

Tutti i parametri extra possono essere trovati nel codice nel caso in cui non siano documentati correttamente [Main Utilities](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/MainUtilities.java#L219). Tutti i parametri sono opzionali!

| Parametri | Descrizione |
|--------------|---------------|
| `--add-region-tags` | Rallenta il processo di creazione della mappa aggiungendo a ogni via un tag con il nome della regione in cui è stata elaborata. È necessario solo per la mappa base mondiale o quando si elaborano regioni multinazionali, in tutti gli altri casi è più facile avere un nome appropriato per il proprio file, ad esempio germany_..., us_.... Se non si dispone di questo parametro e non lo si specifica, è probabile che si vedano badge di percorsi stradali / di trasporto pubblico non localizzati in OsmAnd. |
| `--keep-only-sea-objects` | Rimuove gli oggetti che non fanno parte dell'oceano / mare, viene utilizzato per produrre mappe nautiche |
| `--ram-process` | Specifica che la creazione utilizzerà un database SQlite in RAM invece che su disco - [maggiori informazioni](#ram-to-process-maps). |
| `--srtm=<CARTELLA>` | Specifica la cartella con le immagini TIF-DEM, in modo che le informazioni su altezza e pendenza vengano codificate nelle strade |
| `--rendering-types=<FILE>` | Posizione di rendering_types.xml con regole e tag OSM che devono essere codificati in OBF - [maggiori informazioni](#custom-vector-map-tags). |
| `--poi-types=<FILE>` | Posizione di poi_types.xml con regole e tag OSM che devono essere codificati in OBF per i POI - [maggiori informazioni](#custom-vector-map-tags). |
| `--extra-relations=<FILE>` | File OSM con poligoni come le Zone a Bassa Emissione i cui tag dovrebbero essere propagati alle vie. |

**Nota**: La creazione di mappe con batch.xml è deprecata, si prega di utilizzare i metodi shell menzionati sopra e combinarli con download / cicli for utilizzando le capacità standard degli script shell.

### RAM per elaborare le mappe {#ram-to-process-maps}

La creazione di mappe richiede molta memoria e I/O intensivo. In altre parole: richiede molto tempo e potrebbe esaurire la memoria! Si prega di verificare prima la generazione su mappe piccole.
Per dare più memoria alla JVM, è possibile dichiarare la variabile d'ambiente JAVA_OPTS.
```
export JAVA_OPTS="-Xms256M -Xmx6400M"
OsmAndMapCreator/utilities.sh generate-obf ....
```

Cosa si può fare per migliorare le prestazioni:

- Utilizzare dischi SSD.
- Utilizzare più dischi.
- Utilizzare l'elaborazione "in memoria".
Se si desidera evitare di utilizzare spazio su disco e utilizzare solo la RAM per velocizzare il processo, specificare il parametro `--ram-process`. Questa elaborazione "in memoria" velocizzerà la generazione della mappa del 10-50%, ma richiede molta memoria. Il 10% al 50% dipende dalla dimensione della mappa. Le mappe più piccole traggono meno vantaggio dall'elaborazione in memoria rispetto alle mappe più grandi, poiché l'accesso al disco per la lettura iniziale e la scrittura finale della mappa gioca un ruolo maggiore, mentre le mappe più grandi richiedono più "calcolo".

Nella normale elaborazione "su disco", viene creato un file *nodes.tmp.odb* dal tuo file *.osm* o *.osm.pbf*. Questo file *nodes.tmp.odb* è un file di database sqlite ed è circa 15-25 volte più grande del file *.osm.pbf* originale che hai scaricato da [geofabrik.de](http://download.geofabrik.de/). Quindi, se il tuo file *.osm.pbf* originale è di 300 MB, il tuo file *nodes.tmp.odb* sarà di 5-6 GB! Nota che le mappe più piccole saranno intorno al fattore 15x, mentre le mappe grandi (>350 MB) finiranno con un aumento di spazio di 20x-25x.

Con l'elaborazione "in memoria", questo file *nodes.tmp.odb* verrà creato nella tua memoria di lavoro. Avrai bisogno di "la dimensione del nodes.tmp.odb" + 20-25%. Si prega di notare che non è necessario aumentare il parametro `-Xmx` perché SQLite in memoria non occuperà la memoria JVM e utilizzerà solo la memoria nativa del sistema operativo.

Esempio: per un *.osm.pbf* da 250 MB verrà generato un file *nodes.tmp.odb* da ~4,5 GB.

### Mappa vettoriale personalizzata (tag) {#custom-vector-map-tags}

Il rendering e la ricerca POI di OsmAnd si basano sulle informazioni scritte in [OBF](../osmand-file-formats/osmand-obf.md). Ha una struttura diversa dagli altri formati OSM ed è ottimizzato per l'uso mobile. È possibile ispezionare il contenuto utilizzando [Binary Inspector](../map-creation/how-to-inspect-an-obf.md). Le 3 parti più importanti del file OBF sono

- **Sezione mappa** utilizzata per il rendering della mappa definita da [Rendering types](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml)
- **Sezione POI** utilizzata per la ricerca POI e le informazioni sugli oggetti definite da [POI types](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/poi_types.xml)
- **Sezione routing** utilizzata per il routing definita da [Routing types](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml) - stesso file dei tipi di rendering ma ha una sezione propria `<category name="routing"> - routing_type`.

`rendering_types.xml` e `poi_types.xml` possono essere sovrascritti durante il processo di creazione della mappa nelle impostazioni dell'interfaccia utente di OsmAndMapCreator o come parametri della riga di comando `--rendering-types=<path>`, `--poi-types==<path>` a `utilities.sh generate-obf` (incluso in OsmAndMapCreator).

- Il tipo di oggetto mappa principale (`<type tag="abandoned:highway" value="track" minzoom="13"/>`) è registrato per entità OSM (nodo o via o multipoligono). Possono esserci molti tipi principali registrati per 1 entità (ad esempio, strada + tram + percorso bus), il tag `order` ordinerà i tipi all'interno dell'entità.
- Il tipo di oggetto mappa aggiuntivo (`<type tag="service" value="driveway" minzoom="13" additional="true"/>`) è un'informazione aggiuntiva allegata all'entità OSM, quindi nel caso in cui l'entità OSM non sia registrata con un tipo principale non verrà memorizzata all'interno dell'OBF. Di solito memorizza informazioni per visualizzare funzionalità extra come colore, scorrevolezza.
- Il tipo di oggetto mappa testuale (`<type tag="int_ref" additional="text" minzoom="1" order="32"/>`), memorizza informazioni testuali sull'oggetto in modo che possano essere visualizzate successivamente sulla mappa.
- `entity_convert` rappresenta semplici script di trasformazione dei tag (`<entity_convert pattern="tag_transform" from_tag="bridge" if_tag1="highway" if_value1="proposed" routing="no"/>`). Viene spesso utilizzato per combinare tag in tipi specifici, in modo che sia più facile visualizzarli con uno stile di rendering personalizzato. Inoltre, consente di avere trasformazioni di tag specifiche per regione e consente di avere rendering di funzionalità diverse per paese.
- Propagazione dei tag di relazione. OsmAnd non indicizza gli oggetti di relazione (eccetto i multipoligoni - memorizzati come oggetti area) ma consente di propagare, spingere i tag dalla relazione ai membri. Ovviamente 1 membro può avere più relazioni padre e sono possibili conflitti di tag. OsmAnd supporta 3 modi per gestire i conflitti:
  - combinare tutti i tag come una lunga riga separata da virgole (ottimo per visualizzare i nomi delle linee di autobus come una lunga stringa sulla via - `nameTags`, `namePrefix`).
  - ordinare i valori e mantenere il valore più alto (ottimo per visualizzare percorsi locali vs internazionali - `relationGroupSort`, `additionalTags`, `additionalNamePrefix`).
  - genera tag univoci per ogni relazione (non utilizzato per ora ma memorizza informazioni senza perdita - `relationGroupNameTags`, `relationGroupAdditionalTags`, `relationGroupPrefix`). **Maggiori informazioni** si possono trovare in [Rendering types](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml).

**Leggi di più**: di solito le mappe vettoriali personalizzate sono combinate con uno [stile di rendering personalizzato](../osmand-file-formats/osmand-rendering-style.md).

## Mappe raster (avanzate) {#raster-maps-advanced}

OSM è un grande database per le mappe, ma non sempre contiene le informazioni di cui hai bisogno (ad esempio, sui deserti). A volte puoi ottenere le informazioni di cui hai bisogno da altre fonti, come mappe cartacee o immagini satellitari.

Esistono programmi speciali per la preparazione, la conversione, la calibrazione di qualsiasi mappa sorgente (mappe in formato immagine, formato pdf, mappe raster online) in mappe online di OsmAnd.

Di seguito alcuni di essi.

### MOBAC {#mobac}

Mobile Atlas Creator (MOBAC) è un programma open source (GPL) per la creazione di atlanti offline. Mobile Atlas Creator può utilizzare un gran numero di diverse mappe online, come OpenStreetMap e altri fornitori di mappe, come sorgente per la creazione di un atlante offline.

Basta [scaricare](https://mobac.sourceforge.io/) il programma, quindi eseguirlo.

Nella finestra di dialogo di scelta del formato, seleziona *OsmAnd SQLite* o *OsmAnd tile storage*. SQLite è un singolo file con l'area selezionata, mentre le tessere sono pezzi separati della mappa raccolti sul tuo dispositivo. SQLite spesso risulta più conveniente in quanto è archiviato in un unico posto e occupa meno spazio di archiviazione.

Scegli la sorgente della mappa, i livelli di zoom e altre funzionalità. Seleziona un'area, quindi scegli il menu *Selezione* -> *Aggiungi selezione*.

Successivamente, puoi creare il tuo file SQLite: 'Atlante' -> 'Crea Atlante'.

### MAPC2MAPC {#mapc2mapc}

[MAPC2MAPC](https://www.the-thorns.org.uk/mapping/) è un programma per Windows per manipolare mappe digitali e convertirle tra diverse piattaforme e software.

Ad esempio, puoi convertire e calibrare qualsiasi formato di immagine e mappe pdf in mappe online di OsmAnd.

[Video tutorial](https://www.youtube.com/watch?v=Y_fekLfcUOc) sull'utilizzo del programma.

### SASPlanet {#sasplanet}

SASPlanet è un software di navigazione freeware e open source con la capacità di visualizzare e scaricare mappe e immagini satellitari della Terra da vari servizi online in mappe online di OsmAnd.

[Scarica](http://www.sasgis.org/download/) il programma, [guida in inglese](https://www.evernote.com/shard/s100/client/snv?noteGuid=e659886a-096c-46b4-8280-b57b77373847&noteKey=dac8148d9a74ed77&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs100%2Fsh%2Fe659886a-096c-46b4-8280-b57b77373847%2Fdac8148d9a74ed77&title=How%2Bto%2Buse%2BSAS.Planet.%2BEnglish%2Bguideline).

### PDF o TIFF geolocalizzati {#geolocated-pdf-or-tiff}

Come convertire file pdf/tif/tiff geolocalizzati in [OsmAnd SQLitedb](../osmand-file-formats/osmand-sqlite.md) in Windows.
La georeferenziazione di file tif/tiff e pdf può essere fatta abbastanza semplicemente in QGIS.

1. **Installa ed esegui OSGeo4W**

[OSGeo4W](https://trac.osgeo.org/osgeo4w/) è una distribuzione binaria di un ampio set di software geospaziali open source per Windows. Include QGIS, GDAL/OGR, GRASS oltre a molti altri pacchetti (oltre 150). Scarica ed esegui il programma di installazione di rete [OSGeo4W](https://trac.osgeo.org/osgeo4w/).

Ora, dal menu Start, esegui OSGeo4W Shell. Dovrebbe avviarsi nella directory predefinita _C:\OSGeo4W_. Naviga nella tua cartella di lavoro (o potresti semplicemente usare _C:\OSGeo4W_ per questo scopo).

2. **Converti tif/pdf in mbtiles**

Per convertire _tif/pdf_ in _mbtiles_ esegui (sostituendo i nomi dei file _tif/pdf_ e _mbtiles_ dove necessario):

&nbsp;<i>gdal_translate -co "ZLEVEL=9" -of mbtiles map_1.tif map_1.mbtiles --config gdal_pdf_dpi 600</i>&nbsp;

&nbsp;<i>gdaladdo -r nearest map_1.mbtiles</i>&nbsp;

Il primo comando consente a _GDAL_ di capire lo zoom massimo che può generare in base alla risoluzione dell'immagine. E converte il file _tif/pdf_ in _mbtiles_ con il DPI specificato. Sentiti libero di giocare con questa impostazione, ma fai attenzione perché valori DPI elevati renderanno il processo di conversione molto lungo e la dimensione del file risultante molto grande.

Il secondo comando consente a _GDAL_ di capire e generare i livelli di zoom inferiori in base al livello di zoom massimo che già esiste. Non è raro che questi due comandi richiedano un po' di tempo per essere completati.

3. **Installa Python dal Microsoft Store**

Probabilmente il modo più semplice è andare al [Microsoft Store](https://apps.microsoft.com/detail/9nj46sx7x90p).

Se, mentre si tenta di eseguire lo script Python nel passaggio successivo, si verifica questo errore:

_Traceback (most recent call last):_

_File ```<console>```, line 1, in ```<module>```_

_ImportError: No module named PIL_

Allora in PowerShell, esegui il seguente comando:

_pip install Pillow_

4. **Converti il formato mbtiles in sqlitedb (adatto per OsmAnd e RMaps)**

Troverai lo script Python _mbtiles2osmand.py_ su [GitHub](https://github.com/tarwirdur/mbtiles2osmand). Scaricalo nella tua cartella di lavoro ed esegui il Prompt dei comandi o PowerShell.

**Utilizzo:**

&nbsp;<i>python3_ mbtiles2osmand.py [-h] [-f] [--jpg JPEG_QUALITY] input output</i>&nbsp;

&nbsp;<u>Argomenti posizionali:</u>&nbsp;

**input**&nbsp;&nbsp;&nbsp;&nbsp; file di input

**output**&nbsp;&nbsp;&nbsp;&nbsp; file di output

&nbsp;<u>Argomenti opzionali:</u>&nbsp;

**-h, --help** &nbsp;&nbsp;&nbsp;&nbsp;mostra questo messaggio di aiuto ed esci

**-f, -force** &nbsp;&nbsp;&nbsp;&nbsp;sovrascrivi il file di output se esiste

**--jpg JPEG_QUALITY** &nbsp;&nbsp;&nbsp;&nbsp;converti le tessere in JPEG con la qualità specificata

**Esempi:**

Semplice:

&nbsp;<i>python3 mbtiles2osmand.py _input.mbtiles output.sqlitedb_</i>&nbsp;

Conversione delle tessere in jpeg con compressione:

&nbsp;<i>python3 mbtiles2osmand.py _--jpg 75 input.mbtiles output.sqlitedb_</i>&nbsp;

5. **Copia il file .sqlitedb in OsmAnd**

Ora dovresti avere un file .sqlitedb pronto nella tua cartella di lavoro. Copialo nella cartella appropriata di OsmAnd e usalo come principale, sottostante o sovrapposto. Vedi la [Guida per l'utente](../../user/map/raster-maps.md) per maggiori dettagli. Fatto!

6. **(OPZIONALE) Unisci più file osmand in un singolo file**

Se necessario, puoi trovare il file script unite_osmand.py su [GitHub](https://github.com/tarwirdur/mbtiles2osmand). Ancora una volta, scaricalo nella tua cartella di lavoro ed esegui il Prompt dei comandi o PowerShell.

**Utilizzo:**

&nbsp;<i>python3 unite_osmand.py [-h] [-f] input [input ...] output</i>&nbsp;

<u>Argomenti posizionali:</u>

**input** &nbsp;&nbsp;&nbsp;&nbsp; file di input. Se più file contengono una tessera con le stesse coordinate, verrà utilizzata la tessera dal primo file (dall'elenco degli argomenti)

**output** &nbsp;&nbsp;&nbsp;&nbsp;file di output

<u>Argomenti opzionali:</u>

**-h, --help** &nbsp;&nbsp;&nbsp;&nbsp;mostra questo messaggio di aiuto ed esci

**-f, -force** &nbsp;&nbsp;&nbsp;&nbsp;sovrascrivi il file di output se esiste

7. **EXTRA: Converti un singolo GeoPDF in GeoTIFF**

Se, per qualsiasi motivo, desideri convertire un singolo _geopdf_ in _geotiff_, usa il comando _gdal_translate_ e inserisci i tuoi parametri dove indicato da < >. Puoi usare _gdal_translate_ con o senza parametri opzionali. Può richiedere molto tempo per l'elaborazione e il tiff risultante può essere davvero grande, specialmente quando include l'ortoimmagine e il terreno ombreggiato. Pertanto, potrebbe essere una buona idea escludere alcuni dei livelli PDF (vedi il secondo esempio).

**Utilizzo:**

&nbsp;<i>gdal_translate ```<Nome file GeoPDF> <Nome file Geotiff di output>``` -of gtiff --config
gdal_pdf_layers_off “```<nome livello pdf 1>,<nome livello pdf 2>,<nome livello pdf 3>```” --config gdal_pdf_dpi ```<dpi di output>```</i>&nbsp;

**Esempi:**

Conversione di un pdf con tutti i suoi livelli in un geotiff con DPI predefinito:

&nbsp;<i>gdal_translate geo_sample_map.pdf output_sample_map.tif -of gtiff</i>&nbsp;

Esclusione di diversi livelli dalla conversione tramite il parametro _gdal_pdf_layers_off_ seguito da un elenco di nomi di livelli separati da virgole. Il file di output è un geotiff, con 600 DPI specificati:

&nbsp;<i>gdal_translate geo_sample_map.pdf output_sample_map.tif -of gtiff --config gdal_pdf_layers_off “Map_Collar, Map_Frame.Projections_and_Grids, Map_Frame.Terrain.Shaded_Relief, Images.Orthoimage” --config gdal_pdf_dpi 600</i>&nbsp;

8. **Fonti:**

- [Gdal2mbtiles](https://github.com/tarwirdur/mbtiles2osmandhttps://gist.github.com/jbaranski/0073f7b98bdf1f64f49988853daed67bhttps://github.com/ecometrica/gdal2mbtiles) (solo per riferimento),
- [Come convertire geopdf in geotiff usando GDAL](https://opengislab.com/blog/2016/4/2/usgs-geopdf-to-geotif-with-gdal),
- Vedi anche [Creare mappe overlay per OsmAnd su Linux](https://shallowsky.com/blog/mapping/osmand-making-overlay-maps.html).

## Problemi comuni {#common-issues}

### Problema OutOfMemoryError {#outofmemoryerror-issue}

**Problema**: OsmAndMapCreator fallisce con il messaggio - OutOfMemoryError.

Il file che stai cercando di elaborare con OsmAndMapCreator è troppo grande. Prova a elaborare un file più piccolo o aumenta la memoria per OsmAndMapCreator nel file .sh o .bat. Il parametro `-Xmx` specifica quanta memoria il programma può consumare. Le impostazioni possono essere diverse per macchine a 64 bit (più di 1,5 GB) e a 32 bit (massimo circa 1,5 GB).

### Problema file vuoto {#empty-file-issue}

**Problema**: Dopo aver convertito un .osm in .obf con solo un indice POI, il .obf è vuoto, sebbene il file .osm originale contenesse POI.

Potrebbe essere che mancasse un tag cruciale affinché OsmAndMapCreator riconoscesse un POI quando hai convertito l'osm da un'altra sorgente, come Garmin. Se un punto nel file OSM appare così:
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
  </node>
```
modificalo per contenere un tag 'amenity' aggiuntivo, come:
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
    <tag k='amenity' v='point' />
  </node>
```

Quindi converti il file usando OsmAndMapCreator. Puoi controllare sul sito OSM quali tag sono buoni da usare e puoi anche verificare quali tag sono supportati da [OsmAnd](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/poi_types.xml).