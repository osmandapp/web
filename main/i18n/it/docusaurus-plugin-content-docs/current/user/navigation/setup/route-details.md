---
source-hash: e31e5212327dba32b41b4f464d67c7ab7f9725a2d4fbd06bb60453040bbfe587
sidebar_position: 4
title:  Dettagli del percorso
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Panoramica {#overview}

OsmAnd consente di trovare il percorso migliore e di esplorarne i dettagli. L'app fornisce informazioni dettagliate sul percorso, come la distanza, il [tempo di percorrenza](#distance--time--co2), il [tipo di superficie](#road-attributes), i [dislivelli](#elevation-info), i [dati sull'impronta di CO2](#distance--time--co2) e le [informazioni sulle svolte](#turn-by-turn-information). È inoltre possibile [analizzare](#analyze-on-map) il percorso sulla mappa, scoprire informazioni sui segmenti della traccia, [stampare](#print) il piano del percorso, [salvare](#share--export-actions) il percorso e condividerlo con altri. Grazie a questa funzionalità, conoscerete sempre i dettagli del percorso e potrete pianificare il vostro viaggio in modo più efficiente.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dettagli del percorso Android](@site/static/img/navigation/route/route_detail_overview_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Dettagli del percorso iOS](@site/static/img/navigation/route/route_detail_overview_4_ios.png)

</TabItem>

</Tabs>


### Come accedere {#how-to-access}

Dopo aver calcolato un percorso nel [menu Navigazione](./route-navigation.md#start--stop-navigation), si ha accesso ai "Dettagli" di quel percorso. Queste informazioni sono utili da utilizzare prima di iniziare un viaggio per migliorare la pianificazione del percorso o per controllare le informazioni sulla strada da percorrere durante la guida.
Ci sono tre modi per accedere al menu *Dettagli del percorso*.

1. Andare al *Menu → Navigazione* principale, impostare il percorso e toccare il pulsante *Dettagli*.
2. Toccare l'icona *Navigazione* sulla schermata della mappa, impostare il percorso e toccare il pulsante *Dettagli*.
3. Andare al menu *I miei luoghi*, toccare una qualsiasi traccia disponibile nell'elenco *Menu → I miei luoghi → Tracce*, selezionare l'icona *Navigazione* nel menu contestuale della traccia in *Panoramica* e toccare *Dettagli*.

A seconda delle [impostazioni del profilo](../../personal/profiles.md) selezionate e del [tipo di percorso](../../navigation/routing/osmand-routing.md#routing-types) scelto, alcuni dettagli del percorso potrebbero non essere visualizzati. Inoltre, i dettagli del percorso dipendono molto dalla *copertura dei dati di OpenStreetMap*.


## Distanza / Tempo / CO2 {#distance--time--co2}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dettagli del percorso](@site/static/img/navigation/route/route_details_distance-time-CO2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorso di navigazione iOS](@site/static/img/navigation/route/route_details_distance-time-CO2_2_ios.png)

</TabItem>

</Tabs>

- La ***Distanza totale*** viene calcolata tra tutti i segmenti del percorso, compresi i punti intermedi, nelle [unità](../../personal/profiles.md#units--formats) selezionate.

- Il ***Tempo di percorrenza stimato*** è calcolato come la somma dei tempi di ogni segmento e delle penalità di tempo in punti specifici. Ogni profilo di navigazione ha regole diverse per il calcolo della velocità su un segmento e per le penalità da includere (configurate in [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md)). Ad esempio, i profili per auto e bicicletta prendono la velocità media per segmento dai dati di OpenStreetMap, mentre i profili per pedoni, barche e aerei utilizzano la velocità *predefinita* dalle [Impostazioni di navigazione](../guidance/vehicle-parameters.md#default-speed).

- L'***Orario di arrivo stimato*** viene calcolato come un'ora a partire da ora, nell'ora locale dell'origine, utilizzando il *Tempo di percorrenza stimato*.

- I ***Dati sull'impronta di CO2*** stimano approssimativamente la quantità di CO2 che verrà prodotta seguendo il percorso. Per ottenere un'approssimazione più accurata, è necessario configurare il [Tipo di motore a carburante](../guidance/vehicle-parameters.md#fuel-used-by-motor) nei parametri del veicolo.


## Informazioni sull'altitudine {#elevation-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dettagli del percorso](@site/static/img/navigation/route/route_details_info-block_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorso di navigazione iOS](@site/static/img/navigation/route/route_details_info-block_ios.png)

</TabItem>

</Tabs>

**Le informazioni sull'altitudine** sono fornite in tutti i profili di percorso offline di OsmAnd, ad eccezione dei profili che utilizzano la [Navigazione in linea retta](../routing/straight-line-routing.md). I dati sull'altitudine fanno parte delle Mappe offline di OsmAnd e sono calcolati sulla base di [fonti pubbliche SRTM](https://en.wikipedia.org/wiki/Shuttle_Radar_Topography_Mission).

- *Intervallo di altitudine*. Visualizza l'altitudine minima/massima del percorso.
- *Altitudine media*. Visualizza l'altitudine media ponderata del percorso.
- *Salita / discesa*. Visualizza il rapporto tra il percorso e l'orizzontale, dove lo zero indica l'orizzontalità e il numero di gradi indica un grado di pendenza maggiore o più ripido. La pendenza mostra la pendenza massima della strada in percentuale dal punto in cui ci si trova fino alla fine del grafico visibile, o per la sezione selezionata del percorso senza il punto di localizzazione visibile sullo schermo.


***Una licenza per i dati DEM utilizzati da OsmAnd per il rilevamento del terreno***
I dati di altitudine sulla mappa (tra 70 gradi di latitudine nord e 70 gradi di latitudine sud) sono stati ottenuti da misurazioni effettuate nell'ambito della *Shuttle Radar Topography Mission (SRTM)*. È stato utilizzato l'*Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*, lo strumento di imaging primario del *Sistema di Osservazione della Terra della NASA*. Per informazioni complete, consultare la [Licenza](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>Dati DEM (DSM)</summary>
 - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. The original data used for this product was supplied by JAXA’s AW3D.<br/>
 - <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
 - <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummens, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
 - <a href="https://sonny.4lima.de">Sonny's LiDAR Digital Terrain Models of Europe</a> (DTM).

</details>


### Grafico dell'altitudine {#elevation-graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dettagli del percorso](@site/static/img/navigation/route/route_details_el_graph_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorso di navigazione iOS](@site/static/img/navigation/route/route_details_el_graph_ios.png)

</TabItem>

</Tabs>

I [grafici](../../map/tracks/track-context-menu.md#altitude--speed-graphs) visualizzano le informazioni sull'altitudine e sulla pendenza del percorso di navigazione e la posizione corrente su questo grafico con l'altitudine e la pendenza attuali. Il grafico è tracciato su due assi. L'asse X è la distanza del percorso. Il primo asse Y è l'altitudine sul livello del mare, il cui valore dipende dal terreno, e il secondo asse Y è la [pendenza](https://en.wikipedia.org/wiki/Grade_(slope)) approssimata. È possibile visualizzare il grafico dell'altitudine per l'intero percorso o solo per un intervallo selezionato, scalando il grafico.

- ***Zoom avanti/indietro***. Per impostazione predefinita, il grafico mostra il percorso dalla posizione corrente al punto di destinazione. È possibile utilizzare i [movimenti con due dita](../../map/interact-with-map.md#gestures) per ingrandire e ridurre la visualizzazione per una visione più dettagliata. È anche possibile spostare il grafico a destra, in avanti sul percorso, e indietro fino alla posizione corrente. *Tali manipolazioni si riferiscono anche al blocco visivo di informazioni nel blocco [Attributi della strada](#road-attributes).*

- ***Puntina di localizzazione***. Se si desidera visualizzare le informazioni in un punto particolare del percorso, è possibile toccare un punto qualsiasi del grafico e apparirà un puntatore con l'altitudine e la percentuale di pendenza.


## Analizza sulla mappa {#analyze-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dettagli del percorso Android](@site/static/img/navigation/route/navigation_route_analiz_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Dettagli del percorso iOS](@site/static/img/navigation/route/navigation_route_analiz_ios.png)

</TabItem>

</Tabs>

Lo strumento **Analizza sulla mappa** è simile allo strumento per la visualizzazione dei [dettagli della traccia](../../map/tracks/index.md#analyze-track-on-map) sulla mappa. Consente di visualizzare e interagire visivamente con vari grafici e di vedere il punto selezionato sulla mappa.

Se i dati sono presenti, è possibile selezionare uno dei seguenti tipi:

- *Asse Y*:
   - [*Altitudine*](../../map/tracks/track-context-menu.md#altitude). È il [processo](https://wiki.openstreetmap.org/wiki/Altitude) di ottenimento dell'altezza rispetto a un livello fisso.
   - [*Pendenza*](https://wiki.openstreetmap.org/wiki/Key:incline). La [pendenza della forma del terreno](https://en.wikipedia.org/wiki/Grade_(slope)) indica la tangente dell'angolo di inclinazione della superficie rispetto all'orizzontale.
   - [*Velocità*](../../map/tracks/track-context-menu.md#speed). Valori di velocità durante la guida su una traccia.
   - Grafici con due tipi di dati: &nbsp;*Altitudine/Pendenza*, &nbsp;*Altitudine/Velocità*, &nbsp;*Pendenza/Velocità*, &nbsp;*Zoom animato/Velocità*.
- *Asse X*:
   - *Distanza*. È possibile visualizzare i dati del percorso relativi alla lunghezza del percorso.
   - *Tempo*. È possibile visualizzare i dati del percorso relativi al tempo calcolato per quel percorso.
   - *Ora del giorno*. È possibile visualizzare i dati del percorso in determinati momenti della giornata.


### Tipo di interazioni {#type-of-interactions}

- *Tocca e scorri*. Toccare il grafico per visualizzare le informazioni sul punto della traccia e sul movimento lungo di essa. Il grafico evidenzia la posizione del punto sulla mappa e ne visualizza le informazioni sul righello.
- *Scala*. Scalare il grafico con il [gesto con due dita](../../map/interact-with-map.md#gestures).
- *Segui la mia posizione* (*solo Android*). È possibile toccare [La mia posizione](../../map/interact-with-map.md#my-location-and-zoom) per sincronizzare la visualizzazione della mappa e il grafico con la propria posizione. Man mano che ci si sposta, il grafico si sposterà da sinistra a destra, visualizzando le informazioni che precedono il percorso.


## Attributi della strada {#road-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_details"/>*

![Percorso di navigazione Android](@site/static/img/navigation/route/route_details_attributes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *scheda <Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_details,shared_string_analysis"/>*

![Percorso di navigazione iOS](@site/static/img/navigation/route/route_details_attributes_ios.png)

</TabItem>

</Tabs>

Gli attributi della strada sono accessibili in [Dettagli del percorso](#how-to-access) e visualizzano le informazioni relative ai segmenti da OpenStreetMap e i dati sull'altitudine. L'indicazione del colore è legata al modo in cui gli attributi specifici vengono resi sulla mappa (vedere [Legenda della mappa](../../map-legend/osmand.md#surface-smoothness)). Anche i grafici a barre sono interattivi ed è possibile visualizzare le informazioni in una posizione specifica toccando il grafico.

- [**Tipo di strada**](https://wiki.openstreetmap.org/wiki/Key:highway#Roads). Il tipo di strada è determinato in base alla sua destinazione funzionale e alle sue caratteristiche, come il numero di corsie, i limiti di velocità, la capacità di carico, la presenza di percorsi pedonali e ciclabili, i cigli stradali e altri parametri. I diversi tipi di strade possono avere restrizioni e regole di circolazione diverse.

   Ad esempio, le [autostrade](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway) principali hanno di solito un limite di velocità elevato e possono essere suddivise in corsie, mentre le [strade locali](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) possono avere un limite di velocità basso e una corsia per ogni direzione.

- [**Superficie**](https://wiki.openstreetmap.org/wiki/Key:surface). Le superfici stradali sono lo strato superiore della pavimentazione che entra in contatto con le ruote dei veicoli. Possono essere di diversi tipi a seconda delle loro proprietà e della loro destinazione funzionale.

   Ad esempio, la pavimentazione in [asfalto](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) offre una buona trazione e un buon isolamento acustico, mentre quella in [cemento](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete) è più resistente e ha una maggiore capacità di carico. Per creare una superficie stradale si possono utilizzare anche altri materiali come ghiaia, pietrisco, tavole di legno e altri.

- [**Ripidezza**](https://wiki.openstreetmap.org/wiki/Key:incline#Common_&_extreme_inclines). È una misura dell'angolo di pendenza della strada, espressa in percentuale. Indica quanto la strada è inclinata verso l'alto o verso il basso rispetto all'orizzonte e si calcola misurando la variazione verticale dell'altitudine della strada rispetto alla distanza orizzontale e moltiplicando il valore risultante per 100%.

   Ad esempio, se la pendenza della strada è del 10%, significa che per ogni 100 metri di distanza orizzontale lungo la strada, si sale o si scende di 10 metri. La pendenza della strada può influire sulla velocità del veicolo, sulla frenata, sul consumo di carburante e sulla sicurezza di guida, soprattutto su strade scivolose in inverno.

- [**Consistenza della superficie**](https://wiki.openstreetmap.org/wiki/Key:tracktype). La superficie stradale può riprendersi da una deformazione o da un carico. Maggiore è la consistenza della superficie, minore è la possibilità di danneggiare il veicolo e più confortevole sarà la strada. La consistenza della superficie può anche influire sulla velocità del veicolo e sul consumo di carburante.

- [**Pendenza**](https://wiki.openstreetmap.org/wiki/Key:incline). Indica la percentuale di pendenze presenti sul percorso.

- [**Scorrevolezza**](https://wiki.openstreetmap.org/wiki/Key:smoothness). Applicabile a tutti i tipi di percorsi e aree, come autostrade, parcheggi, spiagge e sentieri, indica l'usabilità del percorso. Fornisce informazioni sulla possibilità di guidare senza rischi significativi di danni, come il sottoscocca del veicolo, o di lesioni, come una caduta.

- [**Strade invernali e ghiacciate**](https://wiki.openstreetmap.org/wiki/Proposed_features/Winter_roads). Mostra lo schema di colori del percorso in base alla classificazione delle [strade invernali](../../map/vector-maps.md#winter-and-ski).

- [**Difficoltà dei percorsi a cavallo**](https://wiki.openstreetmap.org/wiki/Riding). Questo attributo stradale indica la difficoltà del percorso a cavallo. Adatto per il [Percorso a cavallo](../../navigation/routing/horse-routing.md).


## Informazioni svolta per svolta {#turn-by-turn-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Percorso di navigazione Android](@site/static/img/navigation/route/navigation_route_android_turn.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorso di navigazione Android](@site/static/img/navigation/route/navigation_route_turn_2_ios.png)

</TabItem>

</Tabs>

Le informazioni svolta per svolta forniscono [istruzioni](#instructions) dettagliate su come percorrere un itinerario. Oltre che nel menu *Dettagli*, vengono visualizzate anche nei widget [*Manovre del percorso*](../../widgets/nav-widgets.md#route-guidance) e [*Corsie*](../../widgets/nav-widgets.md#lanes). Queste informazioni aiutano a navigare meglio nel percorso e consentono di pianificare in anticipo.

Toccare una sezione specifica del percorso nell'elenco per visualizzare informazioni dettagliate o apportare le modifiche necessarie. La mappa si ingrandisce e si apre un [Menu contestuale](../../map/map-context-menu.md).


### Istruzioni {#instructions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Percorso di navigazione Android](@site/static/img/navigation/route/navigation_turn_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorso di navigazione Android](@site/static/img/navigation/route/navigation_turn_ios.png)

</TabItem>

</Tabs>

Le istruzioni includono informazioni sullo spostamento lungo il percorso, quali:

- La [*freccia della prossima svolta*](../../widgets/nav-widgets.md#next-turn) e la *sua direzione*.
- *Distanza dalla manovra*.
- Una descrizione di *cosa fare*, che include il *nome della strada o del sentiero*.
- *Distanza totale* e *tempo del percorso*.
- *Layout delle [Corsie](../../widgets/nav-widgets.md#lanes)* per la strada corrente.
- [*Indicatore del lato della strada*](#roadside-indicator) (*solo iOS*).


### Indicatore del lato della strada {#roadside-indicator}

:::caution Solo iOS
Questo tipo di istruzione non è attualmente disponibile per la versione Android dell'app OsmAnd.
:::

![Indicazione laterale](@site/static/img/navigation/route/side_indication.png)

Nell'elenco delle istruzioni, l'**indicatore del lato della strada** mostra in quale direzione rispetto alla posizione corrente e alla direzione di movimento verso il punto finale si trova la destinazione; può essere a sinistra, a destra e dritto.

Viene misurato l'angolo tra la destinazione (*[Rilevamento](https://en.wikipedia.org/w/index.php?title=Bearing_(navigation)&oldformat=true) dall'ultimo punto*) e l'ultimo segmento (*Rilevamento verso gli ultimi 2 punti del percorso*), diviso in 3 settori di 120 gradi, e il risultato è che si può vedere in quale direzione si trova la destinazione.

- da `-60 °`&nbsp; &nbsp; &nbsp; a &nbsp; &nbsp;`60 °`&nbsp; &nbsp; &nbsp; - contrassegnato come **dritto**.
- da `-180 °`&nbsp; &nbsp; a &nbsp; &nbsp;`-60 °`&nbsp; &nbsp; - contrassegnato come lato **sinistro**.
- da `60 °`&nbsp; &nbsp; &nbsp; &nbsp; a &nbsp; &nbsp;`180 °`&nbsp; &nbsp; - contrassegnato come lato **destro**.


### Stampa {#print}

<InfoAndroidOnly/>

![dettagli del percorso](@site/static/img/navigation/route/route_details_print-2.png)

La funzione **Stampa** della descrizione di un percorso svolta per svolta può essere utile se si preferisce avere una copia fisica della descrizione del percorso invece di utilizzare dispositivi elettronici, o se non si ha accesso ad app di navigazione o a navigatori GPS, non si ha accesso a Internet o se si ha bisogno di informazioni per altre persone che viaggiano con voi.

La descrizione stampata del percorso fornisce *istruzioni dettagliate svolta per svolta* su come percorrere il percorso, includendo la distanza dalla svolta successiva, la direzione di marcia e i nomi delle strade o dei sentieri, nonché informazioni sulla distanza e sul tempo di percorrenza.

Queste informazioni possono essere utili quando si pianifica un viaggio e si vuole stimare il tempo e la distanza tra i diversi punti del percorso e determinare l'orario di arrivo previsto.

La possibilità di **stampare** o **salvare** le informazioni svolta per svolta **in formato PDF** è particolarmente utile quando si viaggia per lunghe distanze o in luoghi sconosciuti, quando si ha bisogno di avere un'idea più dettagliata del percorso e del tempo necessario per raggiungerlo.


## Condividi / Esporta (Azioni) {#share--export-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Percorso di navigazione Android](@site/static/img/navigation/route/navigation_route_share_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorso di navigazione iOS](@site/static/img/navigation/route/navigation_route_share_ios.png)

</TabItem>

</Tabs>

La sezione di navigazione Dettagli del percorso dispone di opzioni che consentono di eseguire determinate azioni con le informazioni sul percorso.

- [**Stampa**](#print). Consente di stampare o salvare le informazioni sul percorso svolta per svolta.
- **Esporta/Salva**. Consente di salvare le informazioni sul percorso **come nuova traccia** per un successivo utilizzo offline. La traccia esportata contiene tutte le informazioni sugli attributi della strada e le istruzioni di svolta. Pertanto, la [navigazione tramite questa traccia](./gpx-navigation.md) dovrebbe fornire tutte le funzioni della navigazione tramite il percorso.
- **Condividi**. Condivide una traccia esportata o un link al percorso che può essere aperto su un altro dispositivo con OsmAnd.


## Articoli correlati {#related-articles}

- [Parametri del percorso](../routing/osmand-routing.md#routing-types)
- [Preparazione del percorso](./route-navigation.md)
- [Navigazione tramite traccia](./gpx-navigation.md)
- [Navigazione tramite indicatori](./markers-navigation.md)
- [Impostazioni di navigazione](../guidance/navigation-settings.md)
- [Schermata della mappa durante la navigazione](../guidance/map-during-navigation.md)
- [Istruzioni vocali / Notifiche](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)