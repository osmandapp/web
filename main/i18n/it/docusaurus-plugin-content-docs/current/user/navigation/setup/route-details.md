---
source-hash: c79e974f36d7aa431b244d904400ae8e4b3fa0f00f5d843333d559e34b86a4b7
sidebar_position: 4
title: Dettagli del percorso
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

OsmAnd ti consente di trovare il percorso migliore ed esplorarne i dettagli. L'app fornisce informazioni dettagliate sul percorso come distanza, [tempo di percorrenza](#distance--time--co2), [tipo di superficie](#road-attributes), [differenze di elevazione](#elevation-info), [dati sull'impronta di CO2](#distance--time--co2) e [informazioni sulle svolte](#turn-by-turn-information). Puoi anche [analizzare](#analyze-on-map) il percorso sulla mappa, trovare informazioni sui segmenti del tracciato, [stampare](#print) il piano del percorso, [salvare](#share--export-actions) il percorso e condividerlo con altri. Con questa funzionalità, conoscerai sempre i dettagli del percorso e potrai pianificare il tuo viaggio in modo più efficiente.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dettagli del percorso Android](@site/static/img/navigation/route/route_detail_overview_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Dettagli del percorso iOS](@site/static/img/navigation/route/route_detail_overview_4_ios.png)

</TabItem>

</Tabs>

### Come accedere {#how-to-access}

Dopo aver calcolato un percorso nel [menu Navigazione](./route-navigation.md#start--stop-navigation), hai accesso ai "Dettagli" di quel percorso. Queste informazioni sono utili da utilizzare prima di iniziare un viaggio per migliorare la pianificazione del percorso o per controllare le informazioni sulla strada da percorrere durante la guida.
Ci sono tre modi per accedere al *menu Dettagli percorso*.

1. Vai al *Menu principale → Navigazione*, imposta il percorso e tocca il pulsante *Dettagli*.
2. Tocca l'icona *Navigazione* nella schermata della mappa, imposta il percorso e tocca il pulsante *Dettagli*.
3. Vai al menu *I miei luoghi*, tocca un qualsiasi tracciato disponibile nell'elenco *Menu → I miei luoghi → Tracciati*, seleziona l'icona *Navigazione* nel menu contestuale del tracciato in *Panoramica* e tocca *Dettagli*.

A seconda delle [impostazioni del profilo](../../personal/profiles.md) selezionate e del [tipo di percorso](../../navigation/routing/osmand-routing.md#routing-types) selezionato, alcuni dettagli del percorso potrebbero non essere visualizzati. Inoltre, i dettagli del percorso dipendono fortemente dalla *copertura dei dati di OpenStreetMap*.

## Distanza / Tempo / CO2 {#distance--time--co2}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dettagli del percorso](@site/static/img/navigation/route/route_details_distance-time-CO2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorso di navigazione iOS](@site/static/img/navigation/route/route_details_distance-time-CO2_2_ios.png)

</TabItem>

</Tabs>

- ***Distanza totale*** è calcolata tra tutti i segmenti del percorso, inclusi i punti intermedi nelle [unità](../../personal/profiles.md#units--formats) selezionate.

- ***Tempo di percorrenza stimato*** è calcolato come la somma dei tempi su ogni segmento e delle penalità di tempo su punti specifici. Ogni profilo di navigazione ha regole diverse per il calcolo della velocità su un segmento e quali penalità devono essere incluse (configurate in [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md)). Ad esempio, i profili auto e bicicletta prendono la velocità media per segmento dai dati di OpenStreetMap, ma i profili pedonale, barca e aereo utilizzano la velocità *predefinita* dalle [Impostazioni di navigazione](../guidance/navigation-settings.md#default-speed--road-speeds).

- ***Ora di arrivo stimata*** è calcolata come un tempo da ora nell'ora locale dell'origine utilizzando il *Tempo di percorrenza stimato*.

- ***Dati sull'impronta di CO2*** stimano approssimativamente quanta CO2 verrà prodotta seguendo il percorso. È necessario configurare il [tipo di motore a carburante](../guidance/navigation-settings.md#fuel-used-by-motor) nei parametri del veicolo per ottenere un'approssimazione più accurata.

## Informazioni sull'altitudine {#elevation-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dettagli del percorso](@site/static/img/navigation/route/route_details_info-block_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorso di navigazione iOS](@site/static/img/navigation/route/route_details_info-block_ios.png)

</TabItem>

</Tabs>

Le **informazioni sull'altitudine** sono fornite in tutti i profili di percorso offline di OsmAnd, ad eccezione dei profili che utilizzano la [navigazione in linea retta](../routing/straight-line-routing.md). I dati sull'altitudine fanno parte delle mappe offline di OsmAnd e sono calcolati in base alle [fonti SRTM pubbliche](https://en.wikipedia.org/wiki/Shuttle_Radar_Topography_Mission).

- *Intervallo di altitudine*. Visualizza l'altitudine minima/massima sul percorso.
- *Altitudine media*. Visualizza l'altitudine media ponderata sul percorso.
- *In salita/in discesa*. Visualizza il rapporto del percorso rispetto all'orizzontale, dove zero indica l'orizzontalità e il numero di gradi indica un grado di pendenza maggiore o più ripido. La pendenza mostra la pendenza massima della strada in percentuale dal tuo punto di posizione alla fine del grafico visibile, o per la sezione selezionata del percorso senza il punto di posizione visibile sullo schermo.

***Una licenza per i dati DEM utilizzati da OsmAnd per il rilevamento del terreno***
I dati di altitudine sulla mappa (tra 70 gradi di latitudine nord e 70 gradi di latitudine sud) sono stati ottenuti da misurazioni effettuate come parte della *Shuttle Radar Topography Mission (SRTM)*. Ha utilizzato l'*Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*, lo strumento di imaging primario nel *NASA's Earth Observation System*. Per informazioni complete, vedere la [Licenza](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).

<details>
<summary>Dati DEM (DSM)</summary>
 - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. I dati originali utilizzati per questo prodotto sono stati forniti da AW3D di JAXA.<br/>
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

I [grafici](../../map/tracks/track-context-menu.md#altitude--speed-graphs) visualizzano le informazioni sull'altitudine e la pendenza del tuo percorso di navigazione e la tua posizione attuale su questo grafico con l'altitudine e la pendenza attuali. Il grafico è tracciato su due assi. L'asse X è la distanza sul tuo percorso. Il primo asse Y è l'altitudine sul livello del mare, il cui valore dipende dal terreno, e il secondo asse Y è la [pendenza](https://en.wikipedia.org/wiki/Grade_(slope)) approssimata. Puoi visualizzare il grafico dell'altitudine per l'intero percorso o solo per un intervallo selezionato scalando il grafico.

- ***Zoom avanti/indietro***. Per impostazione predefinita, il grafico mostra il percorso dalla posizione attuale al punto di destinazione. Puoi utilizzare i [movimenti a due dita](../../map/interact-with-map.md#gestures) per ingrandire e rimpicciolire per una visualizzazione più dettagliata. Puoi anche spostare il grafico a destra, in avanti sul percorso e indietro alla posizione attuale. *Tali manipolazioni si riferiscono anche al blocco visivo delle informazioni nel blocco [Attributi stradali](#road-attributes).*

- ***Puntatore di posizione***. Se desideri visualizzare le informazioni in un punto specifico più avanti sul tuo percorso, puoi toccare un punto qualsiasi del grafico e apparirà un puntatore con l'altitudine e la percentuale di pendenza.

## Analizza sulla mappa {#analyze-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dettagli del percorso Android](@site/static/img/navigation/route/navigation_route_analiz_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Dettagli del percorso iOS](@site/static/img/navigation/route/navigation_route_analiz_ios.png)

</TabItem>

</Tabs>

Lo strumento **Analizza sulla mappa** è simile allo strumento per la visualizzazione dei [dettagli del tracciato](../../map/tracks/index.md#analyze-track-on-map) sulla mappa. Ti consente di visualizzare e interagire visivamente con vari grafici e di vedere il punto selezionato sulla mappa.

Se i dati sono presenti, puoi selezionare uno dei seguenti tipi:

- *Asse Y*:
   - [*Altitudine*](../../map/tracks/track-context-menu.md#altitude). Questo è il [processo](https://wiki.openstreetmap.org/wiki/Altitude) di ottenimento dell'altezza sopra un livello fisso.
   - [*Pendenza*](https://wiki.openstreetmap.org/wiki/Key:incline). La [pendenza della forma del terreno](https://en.wikipedia.org/wiki/Grade_(slope)) indica la tangente dell'angolo di inclinazione della superficie rispetto all'orizzontale.
   - [*Velocità*](../../map/tracks/track-context-menu.md#speed). Valori di velocità durante la guida su un tracciato.
   - Grafici con due tipi di dati: &nbsp;*Altitudine/Pendenza*, &nbsp;*Altitudine/Velocità*, &nbsp;*Pendenza/Velocità*, &nbsp;*Zoom animato/Velocità*.
- *Asse X*:
   - *Distanza*. Puoi visualizzare i dati del percorso relativi alla lunghezza del percorso.
   - *Tempo*. Puoi visualizzare i dati del percorso relativi al tempo calcolato per quel percorso.
   - *Ora del giorno*. Puoi visualizzare i dati del percorso a determinate ore del giorno.

### Tipo di interazioni {#type-of-interactions}

- *Tocca e scorri*. Tocca il grafico per visualizzare le informazioni sul punto del tracciato e il movimento lungo di esso. Il grafico evidenzia la posizione del punto sulla mappa e visualizza le informazioni su di esso sul righello.
- *Scala*. Scala il grafico con il [gesto a due dita](../../map/interact-with-map.md#gestures).
- *Segui la mia posizione* (*solo Android*). Puoi toccare [La mia posizione](../../map/interact-with-map.md#my-location-and-zoom) per sincronizzare la visualizzazione della mappa e il grafico con la tua posizione. Man mano che ti muovi, il grafico si sposterà da sinistra a destra, visualizzando le informazioni davanti al tuo percorso.

## Attributi stradali {#road-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_details"/>*

![Percorso di navigazione Android](@site/static/img/navigation/route/route_details_attributes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_details,shared_string_analysis"/> scheda*

![Percorso di navigazione iOS](@site/static/img/navigation/route/route_details_attributes_ios.png)

</TabItem>

</Tabs>

Gli attributi stradali sono accessibili nei [Dettagli del percorso](#how-to-access) e visualizzano informazioni relative ai segmenti da OpenStreetMap e dati di elevazione. L'indicazione del colore è correlata a come gli attributi specifici sono renderizzati sulla mappa (vedi [Legenda della mappa](../../map-legend/osmand.md#surface-smoothness)). I grafici a barre sono anche interattivi ed è possibile visualizzare informazioni in una posizione specifica toccando il grafico.

- [**Tipo di strada**](https://wiki.openstreetmap.org/wiki/Key:highway#Roads). Il tipo di strada è determinato in base al suo scopo funzionale e alle sue caratteristiche, come il numero di corsie, i limiti di velocità, la capacità di carico, la presenza di percorsi pedonali e ciclabili, banchine e altri parametri. Diversi tipi di strade possono avere restrizioni e regole del traffico diverse.

   Ad esempio, le [autostrade](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway) principali di solito hanno un limite di velocità elevato e possono essere divise in corsie, e le [strade locali](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) possono avere un limite di velocità basso e una corsia per ogni direzione.

- [**Superficie**](https://wiki.openstreetmap.org/wiki/Key:surface). Le superfici stradali sono lo strato superiore della pavimentazione che entra in contatto con le ruote dei veicoli. Possono essere di diversi tipi a seconda delle loro proprietà e dello scopo funzionale.

   Ad esempio, la pavimentazione in [asfalto](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) offre una buona trazione e isolamento acustico, e la pavimentazione in [cemento](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete) è più durevole e ha una maggiore capacità di carico. Altri materiali come ghiaia, pietrisco, tavole di legno e altri possono anche essere utilizzati per creare una superficie stradale.

- [**Pendenza**](https://wiki.openstreetmap.org/wiki/Key:incline#Common_&_extreme_inclines). Questa è una misurazione dell'angolo di pendenza della strada, espressa in percentuale. Indica quanto ripidamente la strada è inclinata in salita o in discesa rispetto all'orizzonte, ed è calcolata misurando il cambiamento verticale nell'elevazione della strada rispetto alla distanza orizzontale e moltiplicando il valore risultante per 100%.

   Ad esempio, se la pendenza della strada è del 10%, significa che per ogni 100 metri di distanza orizzontale lungo la strada, si sale o si scende di 10 metri. La pendenza della strada può influire sulla velocità del veicolo, sulla frenata, sul consumo di carburante e sulla sicurezza di guida, specialmente su strade scivolose in inverno.

- [**Consistenza della superficie**](https://wiki.openstreetmap.org/wiki/Key:tracktype). La superficie stradale può recuperare dalla deformazione o dal carico. Maggiore è la consistenza della superficie, minore è la possibilità di danni al veicolo e più confortevole sarà la strada. La consistenza della superficie può anche influire sulla velocità del veicolo e sul consumo di carburante.

- [**Pendenza**](https://wiki.openstreetmap.org/wiki/Key:incline). Indica la percentuale di pendenze presenti sul percorso.

- [**Regolarità**](https://wiki.openstreetmap.org/wiki/Key:smoothness). Applicabile a tutti i tipi di percorsi e aree, come autostrade, parcheggi, spiagge e sentieri, e indica l'usabilità del percorso. Ti fornisce informazioni che puoi guidare senza un rischio significativo di danni, come il sottoscocca del veicolo, o lesioni, come una caduta.

- [**Strade invernali e ghiacciate**](https://wiki.openstreetmap.org/wiki/Proposed_features/Winter_roads). Mostra lo schema di colori del percorso in base alla classificazione delle [strade invernali](../../map/vector-maps.md#winter-and-ski).

- [**Difficoltà dei sentieri equestri**](https://wiki.openstreetmap.org/wiki/Riding). Questo attributo stradale indica la difficoltà del percorso durante la guida a cavallo. Adatto per il [routing a cavallo](../../navigation/routing/horse-routing.md).

## Informazioni svolta per svolta {#turn-by-turn-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Percorso di navigazione Android](@site/static/img/navigation/route/navigation_route_android_turn.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorso di navigazione Android](@site/static/img/navigation/route/navigation_route_turn_2_ios.png)

</TabItem>

</Tabs>

Le informazioni svolta per svolta forniscono [istruzioni](#instructions) dettagliate su come navigare un percorso. Oltre al menu *Dettagli*, vengono visualizzate anche nei widget [*Manovre del percorso*](../../widgets/nav-widgets.md#route-maneuvers) e [*Corsie*](../../widgets/nav-widgets.md#lanes). Queste informazioni ti aiutano a navigare meglio il tuo percorso e ti consentono di pianificare in anticipo.

Tocca una sezione specifica del percorso nell'elenco per visualizzare informazioni dettagliate o apportare le modifiche richieste. La mappa si ingrandisce e si apre un [menu contestuale](../../map/map-context-menu.md).

### Istruzioni {#instructions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Percorso di navigazione Android](@site/static/img/navigation/route/navigation_turn_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorso di navigazione Android](@site/static/img/navigation/route/navigation_turn_ios.png)

</TabItem>

</Tabs>

Le istruzioni includono informazioni sul movimento lungo il percorso, come:

- La [*freccia della svolta successiva*](../../widgets/nav-widgets.md#next-turn) e la *sua direzione*.
- *Distanza alla manovra*.
- Una descrizione di *cosa fare*, che include il *nome della strada o del sentiero*.
- *Distanza totale* e *tempo del percorso*.
- *[Layout delle corsie](../../widgets/nav-widgets.md#lanes)* per la strada attuale.
- [*Indicatore del lato della strada*](#roadside-indicator) (*solo iOS*).

### Indicatore del lato della strada {#roadside-indicator}

:::caution Solo iOS
Questo tipo di istruzione *non è attualmente disponibile per la versione Android* dell'app OsmAnd.
:::

![Indicazione del lato](@site/static/img/navigation/route/side_indication.png)

Nell'elenco delle istruzioni, l'**indicatore del lato della strada** mostra in quale direzione dalla tua posizione attuale e direzione di movimento verso il tuo punto finale si trova la tua destinazione, che può essere a sinistra, a destra e dritto.

Viene misurato l'angolo tra la tua destinazione (*[Rilevamento](https://en.wikipedia.org/w/index.php?title=Bearing_(navigation)&oldformat=true) dall'ultimo punto*) e l'ultimo segmento (*Rilevamento agli ultimi 2 punti del percorso*), diviso in 3 settori di 120 gradi, e il risultato è che puoi vedere in quale direzione si trova la tua destinazione.

- `-60 °` &nbsp; &nbsp; &nbsp; a &nbsp; &nbsp;`60 °` &nbsp; &nbsp; &nbsp; - contrassegnato come **dritto**.
- `-180 °` &nbsp; &nbsp; a &nbsp; &nbsp;`-60 °` &nbsp; &nbsp; - contrassegnato come lato **sinistro**.
- `60 °` &nbsp; &nbsp; &nbsp; &nbsp; a &nbsp; &nbsp;`180 °` &nbsp; &nbsp; - contrassegnato come lato **destro**.

### Stampa {#print}

<InfoAndroidOnly/>

![dettagli del percorso](@site/static/img/navigation/route/route_details_print-2.png)

La funzione **Stampa** di una descrizione del percorso svolta per svolta può essere utile se preferisci avere una copia fisica della descrizione del percorso invece di utilizzare dispositivi elettronici, o se non hai accesso ad app di navigazione o navigatori GPS, non hai accesso a Internet, o se hai bisogno di informazioni per altre persone che viaggiano con te.

Una descrizione del percorso stampata fornisce [istruzioni dettagliate svolta per svolta](#instructions) su come navigare il percorso, inclusa la distanza alla svolta successiva, la direzione di guida e i nomi delle strade o dei sentieri, nonché informazioni sulla distanza e sul tempo di percorrenza.

Queste informazioni possono essere utili quando stai pianificando un viaggio e vuoi stimare il tempo e la distanza tra diversi punti del percorso e determinare l'ora di arrivo prevista.

La possibilità **di stampare** o **salvare** le informazioni svolta per svolta **in formato PDF** è particolarmente utile quando si viaggia per lunghe distanze o in luoghi sconosciuti, quando è necessario avere un'idea più dettagliata del percorso e del tempo necessario per arrivarci.

## Condividi / Esporta (Azioni) {#share--export-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Percorso di navigazione Android](@site/static/img/navigation/route/navigation_route_share_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorso di navigazione iOS](@site/static/img/navigation/route/navigation_route_share_ios.png)

</TabItem>

</Tabs>

La sezione di navigazione Dettagli percorso ha opzioni che ti consentono di eseguire determinate azioni con le informazioni del percorso.

- [**Stampa**](#print). Consente di stampare o salvare le informazioni del percorso svolta per svolta.
- **Esporta/Salva**. Consente di salvare le informazioni del percorso **come nuovo tracciato** per un uso offline successivo. Il tracciato esportato contiene tutte le informazioni sugli attributi stradali e le istruzioni di svolta. Quindi, la [navigazione tramite questo tracciato](./gpx-navigation.md) dovrebbe fornire tutte le funzionalità come la navigazione tramite il percorso.
- **Condividi**. Condivide un tracciato esportato o un link al percorso che può essere aperto su un altro dispositivo con OsmAnd.

## Articoli correlati {#related-articles}

- [Parametri del percorso](../routing/osmand-routing.md#routing-types)
- [Preparazione del percorso](./route-navigation.md)
- [Navigazione per tracciato](./gpx-navigation.md)
- [Navigazione per marcatori](./markers-navigation.md)
- [Impostazioni di navigazione](../guidance/navigation-settings.md)
- [Schermata della mappa durante la navigazione](../guidance/map-during-navigation.md)
- [Indicazioni vocali / Notifiche](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Ultimo aggiornamento: novembre 2024*