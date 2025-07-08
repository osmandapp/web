---
source-hash: f4b2b293ad51358460be21f120eea4ead0ba855b2536fc69c26f9eb724fe95d1
sidebar_position: 2
---

# OsmAnd GPX {#osmand-gpx}

## Introduzione {#introduction}

GPX (GPS Exchange Format) è uno standard basato su XML ampiamente utilizzato per l'archiviazione di dati GPS, inclusi tracciati, percorsi e waypoint. OsmAnd supporta il formato GPX per l'importazione, l'esportazione e la personalizzazione dei dati GPS per la navigazione, consentendo sia agli utenti principianti che a quelli avanzati di ottimizzare la loro esperienza.

#### Cosa rende unico OsmAnd GPX? {#what-makes-osmand-gpx-unique}

OsmAnd estende lo standard GPX 1.1 introducendo il proprio namespace XML personalizzato `osmand:`. Questo namespace consente di memorizzare dati aggiuntivi come:

- Impostazioni visive del tracciato (colore, larghezza, frecce).
- Raggruppamento e icone dei waypoint.
- Attributi dettagliati del percorso, inclusi percorsi calcolati e tipi di attività.

#### Cosa imparerai in questa guida? {#what-will-you-learn-in-this-guide}

Questo articolo fornisce una panoramica completa della struttura e delle funzionalità dei file GPX in OsmAnd. Imparerai:

1. Come personalizzare tracciati e waypoint utilizzando i tag GPX.
2. Funzionalità avanzate come descrizioni HTML, dati dei sensori e tipi di attività.
3. Come esportare percorsi calcolati e preservarne la piena funzionalità.
4. Convertire file GPX in formato OBF per un'archiviazione ottimizzata e funzionalità di ricerca avanzate.

#### Panoramica della struttura GPX {#gpx-structure-overview}

I file GPX in OsmAnd organizzano i dati gerarchicamente nei seguenti elementi:

- `<gpx>` - l'elemento radice del file.
- `<trk>` - rappresenta i tracciati, che contengono:
  - `<trkseg>` - segmenti del tracciato, che sono ulteriormente suddivisi in `<trkpt>` (punti del tracciato).
- `<rte>` - rappresenta i percorsi, inclusi waypoint e punti chiave.
- `<wpt>` - rappresenta i singoli waypoint.


## Personalizzazione del tracciato {#track-customization}

### Parametri di aspetto del tracciato {#track-appearance-parameters}

Questa sezione descrive come OsmAnd visualizza i tracciati sulla mappa e le opzioni di personalizzazione disponibili per regolarne l'aspetto. I parametri descritti di seguito vengono applicati all'interno del tag `<gpx>` e influenzano tutti i tracciati inclusi in un file GPX.

| Nome tag  | Descrizione / Valori |
|:----------------------------------------|:---------|
| `<color>`                                 | - Definisce il colore della linea del tracciato sulla mappa.  <br/>  - *Stringa:* codice colore HEX `#RRGGBB` o `#AARRGGBB` |
| `<width>`                                 | - Specifica la larghezza della linea del tracciato. <br/>  - *Stringa:* `“thin”`, `“medium"`, `“bold”` (definito dall'attributo `“currentTrackWidth”`), o intero (1-24) |
| `<show_arrows>`                           | - Abilita o disabilita le frecce direzionali lungo il tracciato. <br/> - *Bool:* `"true"` / `"false"` |
| `<show_start_finish>`                     | - Mostra o nasconde i marcatori per l'inizio e la fine del tracciato. <br/> - *Bool:* `"true"` / `"false"` |
| `<split_type>`                            | - Specifica il tipo di segmentazione per il tracciato. <br/> - *Stringa:* `"no_split"`, `"distance"`, `"time"` |
| `<split_interval>`                        | - Imposta l'intervallo per la segmentazione del tracciato in base al tipo selezionato. <br/> - *Double:* Intero (metri per `"distance"`, secondi per `"time"`) |
| `<line_3d_visualization_by_type>`         | - Specifica il tipo di visualizzazione 3D per il tracciato. <br/> - *Stringa:* `"none"`, `"altitude"`, `"shared_string_speed"`, `"map_widget_ant_heart_rate"`, `"map_widget_ant_bicycle_cadence"`, `"map_widget_ant_bicycle_power"`, `"shared_string_temperature"`, `"shared_string_speed"`, `"fixed_height"` |
| `<line_3d_visualization_wall_color_type>` | - Definisce il tipo di colore della parete per la visualizzazione 3D. <br/> - *Stringa:* `"none"`, `"solid"`, `"downward_gradient"`, `"upward_gradient"`, `"altitude"`, `"slope"`, `"speed"` |
| `<line_3d_visualization_position_type>`   | - Imposta la posizione della visualizzazione 3D rispetto al tracciato. <br/> - *Stringa:* `"top"`, `"bottom"`, `"top_bottom"`|
| `<vertical_exaggeration_scale>`           | - Moltiplicatore per scalare il valore dell'attributo `line_3d_visualization_by_type`. <br/> - *Float:* Predefinito: 1.0 |
| `<elevation_meters>`                      | - Specifica un'elevazione fissa in metri per `"fixed_height"` in `<line_3d_visualization_by_type>`. <br/> - *Float:* Predefinito: `1000` |
| `<coloring_type>`                         | - Determina il metodo di colorazione per il tracciato. <br/> - *Stringa:* `"solid"`, `"speed"`, `"altitude"`, `"slope"`, `"routeInfo_roadClass`, `"routeInfo_surface"`, `"routeInfo_smoothness"` |
| `<color_palette>`                         | - Specifica lo schema di colori per il tracciato. <br/> - *Stringa:* `"default"` / [schemi definiti dall'utente](/docs/user/personal/color-palette-schemes) |

***Esempio:***

```xml
<gpx version="1.1" creator="OsmAnd~ 5.0.0" xmlns="https://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net/docs/technical/osmand-file-formats/osmand-gpx" xmlns:gpxtpx="https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd" xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://www.topografix.com/GPX/1/1 https://www.topografix.com/GPX/1/1/gpx.xsd">
...
  <extensions>
    <osmand:color>#4e4eff</osmand:color>
    <osmand:width>bold</osmand:width>
    <osmand:show_arrows>true</osmand:show_arrows>
    <osmand:split_type>distance</osmand:split_type>
    <osmand:split_interval>2000.0</osmand:split_interval>
  </extensions>
</gpx>
```

### Tag 'coloring_type' {#tag-coloringtype}

Il tag `<coloring_type>` in OsmAnd consente agli utenti di personalizzare la colorazione del tracciato in base ad attributi di dati specifici, fornendo un modo visivo per interpretare le informazioni chiave lungo il tracciato.

| Tipo | Descrizione | Caso d'uso |
|:-----------------------|:--------|:--------|
| `<solid>`                | L'intero tracciato viene visualizzato con un unico colore solido specificato dal tag `color`. | Utilizzare quando è necessario un colore uniforme per una chiara visibilità. |
| `<speed>`                | Il tracciato è colorato con un gradiente basato sui valori di velocità in ogni punto del tracciato (`<trkpt>`). Le velocità più elevate sono rappresentate da colori distinti. | Ideale per attività come il ciclismo o la guida per visualizzare i cambiamenti di velocità. |
| `<altitude>`             | Il tracciato è colorato in base ai dati di elevazione in ogni `<trkpt>`. Viene applicato un gradiente, che indica diversi intervalli di altitudine. | Utile per escursioni o percorsi di montagna per evidenziare i cambiamenti di altitudine. |
| `<slope>`                | Il tracciato è colorato in base all'inclinazione/discesa tra punti consecutivi del tracciato. I gradienti positivi indicano pendenze in salita, mentre i gradienti negativi indicano pendenze in discesa. | Adatto per ciclisti o escursionisti che analizzano la difficoltà del tracciato. |
| `<routeInfo_roadClass>`  | Colora i segmenti del tracciato in base alla classificazione stradale di OpenStreetMap (OSM) (ad esempio, autostrada, strada residenziale). | Aiuta a distinguere tra diversi tipi di strade quando si segue un percorso. |
| `<routeInfo_surface>`    | Colora i segmenti del tracciato in base al tipo di superficie OSM (ad esempio, asfaltata, ghiaia, sterrato). | Utile per determinare le condizioni del tracciato durante attività come il fuoristrada. |
| `<routeInfo_smoothness>` | Colora il tracciato in base alle valutazioni di scorrevolezza OSM, indicando la rugosità o la scorrevolezza del percorso (ad esempio, eccellente, cattivo). | Utile per valutare la navigabilità del tracciato per veicoli specifici. |

### Tag GPX nell'interfaccia utente {#gpx-tags-in-ui}

I tag delle estensioni GPX vengono visualizzati nella parte inferiore del menu contestuale del tracciato.
Vengono elencati sia `<metadata>` che `<gpx>` `<extensions>`.
I tag di aspetto sono esclusi dall'elenco.
Supportato da OsmAnd Android 5.0.

## Personalizzazione dei waypoint {#waypoints-customization}

Questa sezione spiega come OsmAnd consente la personalizzazione dei waypoint nei file GPX utilizzando icone, colori e raggruppamento.

### Icone dei waypoint {#waypoint-icons}

I seguenti tag controllano l'aspetto delle icone dei waypoint in OsmAnd:

| Tag GPX      | Predefinito   | Scopo    |
|:-------------|:----------|:-----------|
| `<icon>`       | *(nessuno)*    | Specifica l'icona per il waypoint (ad esempio, `historic_castle`). |
| `<color>`      | `"red"`     | Imposta il colore dell'icona utilizzando un codice HEX (ad esempio, `#FF0000`) o un nome di colore (ad esempio, `"blue"`). |
| `<background>` | `"circle"`  | Definisce la forma dello sfondo dell'icona. Valori possibili: `"circle"`, `"square"`, `"octagon"`. |

***Esempio:***

```xml
<wpt lat="52.5163" lon="13.3779">
  <name>Porta di Brandeburgo</name>
  <extensions>
    <osmand:color>#FF5020</osmand:color>
    <osmand:icon>city_gate</osmand:icon>
    <osmand:background>square</osmand:background>
  </extensions>
</wpt>
```

### Gruppi di waypoint {#waypoint-groups}

I waypoint in OsmAnd possono essere ordinati in gruppi in base al loro tipo. Questo raggruppamento consente all'utente di organizzare più waypoint in categorie specifiche, migliorando la chiarezza e la leggibilità della mappa.

- **Definizione del gruppo di punti.** Il tag `<type>` all'interno dell'elemento `<wpt>` specifica il gruppo del punto (ad esempio, `"castle"`, `"aqueduct"`).
- **Configurazione del gruppo.** L'estensione `<osmand:points_groups>` nell'elemento `<gpx>` definisce le impostazioni per ogni gruppo, inclusi `name`, `color`, `icon` e `background` per tutti i waypoint in quel gruppo.

***Esempio:***

```xml
<gpx>
  <wpt lat="1.234" lon="5.678">
    <name>Guarda in alto per vedere l'acqua</name>
    <type>aqueduct</type>
  </wpt>
  <wpt lat="5.678" lon="1.234">
    <name>Attenzione ai fantasmi</name>
    <type>castle</type>
  </wpt>
  <wpt lat="66.666" lon="66.666">
    <name>La casa di Beetlejuice</name>
    <type>castle</type>
  </wpt>
  <extensions>
    <osmand:points_groups>
      <group name="castle" color="#FF0000" icon="historic_castle" background="circle"/>
      <group name="aqueduct" color="#0000FF" icon="bridge_structure_arch" background="circle"/>
    </osmand:points_groups>
  </extensions>
</gpx>
```


## Funzionalità GPX avanzate {#advanced-gpx-features}

### Tipo di attività {#activity-type}

A partire da OsmAnd [versione 4.9](/blog/osmand-android-4-9-released/#gpx-track-activities), puoi classificare i tuoi tracciati per tipo di attività per ulteriori analisi e organizzazione in cartelle.

L'elenco dei tipi di attività supportati è disponibile nel file [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json). Ogni attività è identificata dal suo `ID` univoco e archiviata all'interno delle estensioni `<metadata>` del file GPX.


***Esempio:***

```xml
  <metadata>
    <extensions>
      <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
    </extensions>
  </metadata>
```

### HTML nelle descrizioni {#html-in-descriptions}

I tag HTML possono essere utilizzati all'interno dei tag `<desc>` negli elementi `<metadata>` o `<wpt>` per fornire descrizioni formattate per tracciati o waypoint.

Per evitare conflitti con la sintassi XML, sostituire i caratteri speciali come segue:

- `<` *→* `&lt;`
- `>` *→* `&gt;`
- `&` *→* `&amp;`

***Esempio:***

```xml
<metadata>
  <desc>
    &lt;p&gt;
        Il primo paragrafo verrà visualizzato come descrizione &lt;b&gt;breve&lt;/b&gt;.
        I tag HTML vengono rimossi nelle descrizioni brevi.
    &lt;/p&gt;
    &lt;p&gt;
      &lt;h3&gt;Secondo paragrafo&lt;/h3&gt;
        &lt;b&gt;Ciao mondo!&lt;/b&gt;&lt;br/&gt;
        &lt;img src="..."/&gt;&lt;br/&gt;
        &lt;a href="..."&gt;url&lt;/a&gt;&lt;br/&gt;
        &lt;table&gt; ... &lt;/table&gt;
    &lt;/p&gt;
  </desc>
</metadata>
```

***Note importanti:***

- OsmAnd rimuove tutti i tag HTML durante la generazione di descrizioni brevi, lasciando testo semplice.
- Puoi utilizzare tag come `<b>`, `<i>`, `<p>`, `<br/>`, `<a>`, `<img>` e altri per la personalizzazione.


### Tag Link {#link-tag}

Utilizza il tag `<link>` per associare URL a metadati, informazioni sull'autore o waypoint nei file GPX di OsmAnd. Questo tag può anche visualizzare un'immagine quando l'URL punta a un file immagine.

***Esempi (Link metadati con immagine):***

```xml
<metadata>
  <link href="https://osmand.net/img/logo.png">
    <text>Logo OsmAnd</text>
  </link>
</metadata>
```

***Esempi (Link waypoint con immagine):***

```xml
<wpt lat="52.5163" lon="13.3779">
  <link href="https://osmand.net/img/logo.png" />
</wpt>
```

### Tag dati sensori {#sensor-data-tags}

Puoi arricchire i tuoi tracciati con dati provenienti da sensori fitness, come cardiofrequenzimetri o sensori di temperatura. OsmAnd utilizza lo schema [TrackPointExtension](https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd) di Garmin per archiviare questi dati, rendendoli compatibili con piattaforme come **Strava** e **Garmin Basecamp**.

*Tag dati sensori supportati:*

- **hr** - frequenza cardiaca (in battiti al minuto).
- **cad** - cadenza ciclistica (in rivoluzioni al minuto).
- **atemp** - temperatura ambiente (in gradi Celsius).
- **power** - potenza ciclistica (in watt).

***Esempio:***

```xml
<extensions>
  <gpxtpx:TrackPointExtension>
    <gpxtpx:hr>145</gpxtpx:hr>
    <gpxtpx:cad>80</gpxtpx:cad>
    <gpxtpx:atemp>22</gpxtpx:atemp>
    <gpxtpx:power>250</gpxtpx:power>
  </gpxtpx:TrackPointExtension>
</extensions>
```

### Dettagli punto tracciato {#track-point-details}

Ogni `<trkpt>` (punto tracciato) nel file GPX può includere attributi aggiuntivi per acquisire dati come velocità, direzione ed elevazione.

*Attributi supportati:*

- **speed** - velocità nel punto tracciato (in metri al secondo).
- **heading** - direzione del movimento (0-359 gradi).
- **ele** - elevazione sul livello del mare (in metri).
- **time** - timestamp per il punto tracciato.

***Esempio:***

```xml
  <trkpt lat="52.397799" lon="4.575998">
    <ele>203</ele>
    <time>2019-05-08T10:36:43Z</time>
    <hdop>3</hdop>
    <extensions>
      <heading>273</heading>
      <speed>5.02</speed>
    </extensions>
  </trkpt>
```



## Percorso(i) calcolato(i) {#calculated-routes}

In **OsmAnd** puoi calcolare un percorso e salvare tutti i dati in GPX, in modo che in seguito tutte le funzionalità di navigazione siano disponibili come navigazione GPX in esecuzione, quindi il gpx di **OsmAnd** conterrà segmenti di percorso, svolte, nomi di strade, tipi di strade, restrizioni, ecc. Il percorso può essere completamente ripristinato come se fosse appena costruito, anche in assenza delle rispettive mappe offline.

Un file gpx può contenere diversi percorsi. Ciascuno di essi è contenuto in un segmento specifico sotto **trkseg** / **extensions**. Un file gpx viene salvato in questa forma quando si esporta un percorso costruito o quando si salva un tracciato composto da diversi segmenti separati tramite la funzionalità [**Pianifica un percorso**](../../user/plan-route/create-route.md).

[**Pianifica un percorso**](../../user/plan-route/create-route.md) aggiunge anche uno (o più, in base al numero di segmenti / tracciati separati contenuti) blocchi **rte** al file gpx, contenenti i punti chiave del percorso (**rtept**).

#### Struttura Gpx: {#gpx-structure}

```xml
<trk>
  <trkseg>
    // Elenco dei punti del segmento. L'ordine dei punti corrisponde all'ordine e alla lunghezza dei segmenti del percorso (<route><segment length="x" ... />).
    // Il valore dell'attributo "length" corrisponde al numero di punti in questo segmento del percorso.
    <trkpt ... ></trkpt>
    <extensions>
      // Elenco dei segmenti del percorso
      <route>
        <segment ... />
      </route>
      // Proprietà dei segmenti inclusi nel percorso.
      // Questi dati vengono presi dalle mappe offline durante la costruzione iniziale di un percorso.
      <types>
        <type ... />
      </types>
    </extensions>
  </trkseg>
</trk>

// Elenco dei punti intermedi del percorso. Se ci sono più percorsi, l'ordine dell'elenco rte corrisponde all'ordine dei segmenti del percorso.
<rte>
  <rtept ... />
    // Per i percorsi costruiti con "Pianifica percorso", vengono salvati i parametri dei punti chiave.
    // Se rtept non è il primo e l'ultimo, prima di esso (con lo stesso idx) ci sarà trkpt con gli stessi dati.
    <extensions>
      // Tipo di profilo del percorso per il segmento successivo (auto, bicicletta, pedone, ecc.).
      <profile>...</profile>
      // L'indice del punto nel segmento gpx che corrisponde al primo punto del percorso calcolato per questo segmento.
      // Se rtept non è il primo e l'ultimo, prima di esso (con lo stesso idx) ci sarà trkpt con gli stessi dati.
      <trkpt_idx>...</trkpt_idx>
    </extensions>
  </rtept>
</rte>
```

#### Proprietà importanti: {#important-properties}

* **trkpt_idx** del primo **rtept** in **trkseg** è 0. Quindi, se ci sono due **trkseg**, ci saranno due **rtept** con **trkpt_idx** = 0
* **trkpt_idx** dell'ultimo **rtept** in **trkseg** è uguale al numero di **trkpt** in **trkseg** meno 1. Ad esempio, se **trkseg** ha 12 **trkpt**, **trkpt_idx** dell'ultimo **rtept** dovrebbe essere 11
* I **segmenti** di percorso vicini si sovrappongono: la fine del **segmento** precedente e l'inizio del **segmento** successivo sono lo stesso **trkpt**.
* C'è un'eccezione quando i **segmenti** di percorso vicini non si sovrappongono (non condividono lo stesso **trkpt**). Ciò accade quando c'è un **rtept** "tra" i **segmenti** di percorso. La fine del **segmento** di percorso precedente è un **trkpt**, e l'inizio del **segmento** di percorso successivo è un altro **rtept**. Ma questi due **trkpt** sono totalmente uguali per lat, lon e altri parametri.
* La sovrapposizione dei **segmenti** di percorso può essere rilevata tramite **length** e **startTrkptIdx** (quest'ultimo viene utilizzato solo per comodità di lettura umana):
  - Se la somma di **startTrkptIdx** e **length** del **segmento** di percorso precedente è uguale a **startTrkptIdx** del **segmento** di percorso successivo, i **segmenti** di percorso non si sovrappongono
  - Se la somma è inferiore di uno, i **segmenti** di percorso si sovrappongono
* Possono esserci **segmenti** di percorso rettilinei. Sono contrassegnati con **id="-1"**. Possono apparire in due casi:
  - È un percorso multiprofilo e l'utente ha selezionato una linea retta
  - L'utente ha posizionato **rtept** troppo lontano dalla strada più vicina, quindi osmand ha creato una linea retta tra **rtept** e la strada
* trkpts = length - (segments - 1) + (rtepts - 2), dove:
  - trkpts - quantità di **trkpt** all'interno di **trkseg**
  - length - somma di tutte le **length** dei **segmenti** di percorso all'interno di **trkseg**
  - segments - quantità di **segmenti** di percorso all'interno di **trkseg**
  - rtepts - quantità di **rtept** posseduti da **trkseg**

#### Esempio: {#example}

```xml
<gpx version="1.1" creator="OsmAndRouterV2" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name>Ven 06 Nov 2020</name>
  </metadata>
  <trk>
    <name>Ven 06 Nov 2020</name>
    <trkseg>
      <trkpt lat="52.3639849" lon="4.8900533">
        <ele>0.801</ele>
      </trkpt>
      <trkpt lat="52.3636917" lon="4.8922849">
        <ele>0.998</ele>
      </trkpt>
      <trkpt lat="52.3636885" lon="4.892309">
        <ele>1</ele>
      </trkpt>
      <trkpt lat="52.3636426" lon="4.8922902">
        <ele>0.963</ele>
      </trkpt>
      <trkpt lat="52.363564" lon="4.8922607">
        <ele>0.899</ele>
      </trkpt>

      ....

      <extensions>
        <route>
          <segment id="7372058" length="3" segmentTime="178.44" speed="1.11" turnType="C" types="0,1,2,3,4,5,6" names="57" />
          <segment id="334164679" length="5" segmentTime="86.11" speed="1.11" turnType="TR" turnAngle="91.88" types="7,8,0,9,10,11,12,13,6" pointTypes=";;14,15;16,17,18;" names="58" />
          <segment id="334603581" length="6" segmentTime="75.5" speed="1.11" types="19,20,21,7,8,0,22,9,10,11,12,13,23,6" pointTypes=";14;16,24;16,24;14;" names="58" />
          <segment id="446707354" length="3" segmentTime="8.32" speed="1.11" turnType="TSLL" turnAngle="-25.44" types="19,25,21,7,8,22,9,1,11,12,13,6" names="58" />
          ...
        </route>
        <types>
          <type t="lit" v="yes" />
          <type t="oneway" v="yes" />
          <type t="highway" v="unclassified" />
          <type t="surface" v="paving_stones" />
          <type t="maxspeed" v="30" />
          ...
        </types>
      </extensions>
    </trkseg>
  </trk>

  <rte>
    <rtept lat="52.3639945" lon="4.8900532">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>0</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3612797" lon="4.8911677">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>24</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.356996" lon="4.8912071">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>89</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3542374" lon="4.8947024">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>121</trkpt_idx>
      </extensions>
    </rtept>
  </rte>
</gpx>
```

## Raccolte GPX in OBF {#gpx-collections-in-obf}

OsmAnd consente di convertire più file GPX in un singolo file OBF. Ciò consente l'archiviazione di migliaia di tracciati GPX in un formato compatto e ottimizzato, mantenendo al contempo funzionalità come icone speciali sulla mappa, personalizzazione dell'aspetto del tracciato e funzionalità di ricerca. Ciò evita un limite di file GPX locali di grandi dimensioni che in genere non possono gestire > 500 K punti in totale, tuttavia alcune funzionalità dei tracciati GPX potrebbero mancare rispetto alla visualizzazione del file OBF.

Passaggi per convertire GPX in OBF:

- Accedi a [OsmAnd Web Map](https://osmand.net/map) *→ Tracciati → Seleziona una cartella → *Menu* (⋮) *→ Scarica come raccolta OBF*

- Il file `<.obf>` risultante può essere importato in OsmAnd (richiede OsmAnd Android 5.0+).


### Stile linea tracciato {#track-line-style}

Personalizza le linee del tracciato con i seguenti tag:

| Tag GPX                   | Predefinito | Scopo  |
|:--------------------------|:--------|:---------|
| `<name>`                  | *(nessuno)*  | Nome visualizzato sopra la linea del tracciato.  |
| `color`                   | `red`   | Colore primario (HEX o testo). |
| `colour`, `displaycolor`  | *(nessuno)*  | Modi alternativi per sovrascrivere `color`. |
| `shield_waycolor`         | *(nessuno)*  | Sovrascrittura per il `color` della linea del tracciato dello scudo. |
| `translucent_line_colors` | `no`    | Impostare su `yes` per colori semi-trasparenti. |
| `width`                   | `thin`  | Larghezza linea: `"thin"`, `"medium"`, `"bold"`, `"1-24"`, o `"roadstyle"` |

**Colori supportati:** black, blue, brown, darkyellow, gray, green, lightblue, lightgreen, orange, purple, red, white, yellow.

***Esempio:***

```xml
<gpx>
  <metadata>
    <name>
      Nome tracciato situato nei metadati
    </name>
  </metadata>
  <trk>
    ...
  </trk>
  <extensions>
    <osmand:color>yellow</osmand:color>
    <osmand:width>roadstyle</osmand:width>
    <osmand:translucent_line_colors>yes</osmand:translucent_line_colors>
  </extensions>
</gpx>
```

### Scudi linea tracciato {#track-line-shields}

Gli scudi sono icone o simboli visualizzati lungo la linea del tracciato. OsmAnd supporta scudi [OSMC-symbol-style](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol), che possono includere:

- Icona di sfondo - la forma principale (ad esempio, cerchio o quadrato).
- Icone in primo piano - fino a due simboli più piccoli sovrapposti allo sfondo.
- Testo - brevi descrizioni o identificatori, derivati dai tag `shield_text` o `ref`.

Se non vengono definite proprietà dello scudo, OsmAnd utilizza uno scudo giallo auto-dimensionato per il tracciato.

***Tag per gli scudi:***

| Tag GPX            | Scopo                                                                |
|:-------------------|:-----------------------------------------------------------------------|
| `shield_bg`        | Definisce l'icona di sfondo per lo scudo.                            |
| `shield_fg`        | Specifica la prima icona in primo piano (ad esempio, una freccia o un punto).           |
| `shield_fg_2`      | Specifica la seconda icona in primo piano (opzionale).                       |
| `shield_text`      | Imposta il testo breve da visualizzare sopra lo scudo (ad esempio, riferimento percorso). |
| `shield_textcolor` | Determina il colore del testo dello scudo (opzionale).                    |
| `shield_waycolor`  | Sovrascrive il colore standard del tracciato per la linea dello scudo (opzionale).   |
| `ref`              | Utilizzato come testo di fallback se `shield_text` non è fornito.                |

***Esempio:***

```xml
<gpx>
  <trk>
    <name>Percorso di esempio</name>
  </trk>
  <extensions>
    <osmand:shield_text>ABC</osmand:shield_text>
    <osmand:shield_fg>osmc_red_dot</osmand:shield_fg>
    <osmand:shield_bg>osmc_white_bg</osmand:shield_bg>
    <osmand:shield_waycolor>red</osmand:shield_waycolor>
    <osmand:shield_textcolor>black</osmand:shield_textcolor>
  </extensions>
</gpx>
```

### Visualizzazione waypoint {#waypoints-display}

Le icone dei waypoint possono essere personalizzate con i seguenti tag:

| Tag GPX      | Predefinito  | Scopo                                   |
|:-------------|:---------|:---------------------------------------------------|
| `icon`       | *(nessuno)*   | Specifica l'icona per il waypoint (utilizza le icone standard dell'editor waypoint di OsmAnd). |
| `color`      | `red`    | Imposta il colore dell'icona utilizzando un codice HEX (ad esempio, `#ffaa00`) o un nome di colore supportato (opzioni limitate). |
| `background` | `circle` | Definisce la forma dell'icona. Valori supportati: `circle`, `square`, `octagon`. |

***Comportamento delle forme `background`:***

- `circle` - visualizza l'icona con uno sfondo circolare.
- `square` - visualizza l'icona con uno sfondo quadrato, predefinito su rosso se non viene specificato alcun colore.
- `octagon` - trattato come sfondo circolare in OsmAnd.

**Colori supportati per** `background=circle`: blue, gray, green, lightblue, lightgreen, orange, purple, yellow.

***Miglioramenti con elementi aggiuntivi:***

- Puoi aggiungere descrizioni formattate ai waypoint utilizzando [codice HTML](#html-in-descriptions). Ciò ti consente di includere testo stilizzato, link o persino immagini.
- I waypoint possono visualizzare immagini collegate utilizzando [Link-as-Image](#link-tag).

***Esempio:***

```xml
<wpt lat="3.1415926" lon="42">
  <name>PI</name>
  <extensions>
    <osmand:icon>historic_archaeological_site</osmand:icon>
    <osmand:background>circle</osmand:background>
    <osmand:color>#ffaa00</osmand:color>
  </extensions>
</wpt>
```


### Ricerca per nome e riferimenti {#search-by-name-and-refs}

I tracciati e i waypoint possono essere localizzati utilizzando una varietà di tag GPX.

| Tag GPX       | Posizione               | Scopo                                                                     |
|:--------------|:-----------------------|:----------------------------------------------------------------------------|
| `<name>`      | `<metadata>`           | Il nome principale del tracciato GPX.                                          |
| `ref`         | GPX `<extensions>`     | Un breve identificatore, spesso derivato dal tag OSM `ref`.                   |
| `shield_text` | GPX `<extensions>`     | Testo visualizzato sugli scudi (può essere utilizzato anche con `ref`).                    |
| `name_-_lang` | GPX/WPT `<extensions>` | `name:lang` localizzato (ad esempio, `name_-_en` per l'inglese, sostituire `:` -> `_-_`) |
| `<name>`      | `<wpt>`                | Il nome del waypoint.                                                   |

***Esempio:***

```xml
<gpx>
  <metadata>
    <name>Sentiero del patrimonio di Xemxija</name>
  </metadata>
  <extensions>
    <osmand:ref>XHT</osmand:ref>
  </extensions>
  <wpt lat="35.948477" lon="14.3806796">
    <name>Il-Mighba Rumana</name>
    <extensions>
      <osmand:name_-_en>L'Apiario Romano</osmand:name_-_en>
    </extensions>
  </wpt>
</gpx>
```

### Ricerca per tipo di attività {#search-by-activity-type}

OsmAnd organizza i tracciati nei file OBF in **Gruppi di attività** e **Tipi di attività**. Queste classificazioni ti aiutano a filtrare i tracciati come POI o a creare filtri di ricerca basati sull'attività.

Come funzionano i tipi di attività:

- I tipi e i gruppi di attività sono determinati utilizzando `"id"` e `"tags"` dal file [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json).
- OsmAnd utilizza i tag `osmand:activity` o `osmand:route` per classificare le attività nei file GPX.


| Tag GPX           | Posizione | Scopo                                          |
|:------------------|:---------|:-------------------------------------------------|
| `osmand:activity` | `<metadata>` | Tag principale di OsmAnd per memorizzare il tipo di attività (ID). |
| `osmand:route`    | GPX `<extensions>` | Modo alternativo OSM per definire il tipo di attività. |


***Esempi di organizzazione dei tracciati per tipo di attività:***

1. Questo classificherà il tracciato nel gruppo **Motociclismo** con il tipo **Motociclismo fuoristrada (Dirt Biking)**.

    ```xml
    <metadata>
      <extensions>
        <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
      </extensions>
    </metadata>
    ```

2. Questo organizzerà il tracciato nel gruppo **Ciclismo** con il tipo **Mountain Biking**.

    ```xml
    <gpx>
      <extensions>
        <osmand:route>mtb</osmand:route>
      </extensions>
    </gpx>
    ```

### Tag informazioni di ricerca {#search-information-tags}

I file OBF generano e archiviano automaticamente statistiche e analisi critiche del tracciato.

| Tag OBF                               | Scopo                                                               |
|:--------------------------------------|:----------------------------------------------------------------------|
| `distance`                            | Distanza totale coperta da tutti i segmenti del tracciato.                         |
| `start_ele`, `ele_graph`              | Dati di elevazione da GPX, racchiusi in un array binario compatto.           |
| `min_ele`, `avg_ele`, `max_ele`       | Analisi di elevazione minima, media e massima.                    |
| `diff_ele_up`, `diff_ele_down`        | Guadagno e perdita di elevazione totale lungo il tracciato.                       |
| `max_speed`, `avg_speed`, `min_speed` | Analisi della velocità del tracciato, inclusa velocità massima, media e minima. |
| `time_span`, `time_span_no_gaps`      | Tempo totale per il tracciato, con e senza considerare le interruzioni.       |
| `time_moving`, `time_moving_no_gaps`  | Tempo di movimento totale, con e senza considerare le interruzioni.              |

### Tag interni {#internal-tags}

Alcuni tag GPX vengono utilizzati o archiviati indirettamente nei file OBF. Fare riferimento a [OsmGpxWriteContext.java](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/obf/OsmGpxWriteContext.java) per i dettagli sull'implementazione.

| Tag OBF                      | Scopo                                                                                                    |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------|
| `route_id`                   | Un identificatore univoco per il file GPX, che collega i dati di mappa e POI (formato: `/[A-Z]+[0-9]+/` ad esempio `OSM12345`). |
| `route_type`                 | Identificatore del gruppo di attività (`id`) derivato da `poi/activities.json`                                        |
| `route_activity_type`        | Identificatore del tipo di attività (all'interno del gruppo) (`id`) derivato da `poi/activities.json`                      |
| `name`, `ref`, `description` | Attributi localizzabili e ricercabili (`lang="true"` nei tipi POI)                                         |
| `filename`                   | Il nome del file GPX originale utilizzato per generare questo tracciato.                                            |
| `track_color`                | Colore del tracciato della sezione mappa derivato da `shield_waycolor`, `color`, `colour` o `displaycolor`               |
| `extensions_extra_tags`      | Tag extra arbitrari per `<gpx><extensions>` in formato JSON.                                               |
| `metadata_extra_tags`        | Tag extra arbitrari per `<metadata><extensions>` in formato JSON.                                               |
| `wpt_extra_tags`             | Tag extra arbitrari per i waypoint `<wpt><extensions>` in formato JSON.                                     |
| `route_track_point`          | I waypoint dal file GPX utilizzano questo tipo nei dati POI.                                                         |
| `route_bbox_radius`          | Specifica il raggio predefinito per la ricerca di parti del tracciato all'interno della sezione POI                       |
| `route_shortlink_tiles`      | Specifica un elenco separato da virgole di tile OSM Shortlink per velocizzare la lettura dei dati geometrici (opzionale)       |
| `route_segment_index`        | Specifica un numero ordinale del segmento geometrico collegato a questo punto (opzionale)               |
| `route_name`                 | Il nome del percorso, utilizzato dalla ricerca interna `searchPoiByName` (deprecato)                                            |

> *Ultimo aggiornamento: Marzo 2025*