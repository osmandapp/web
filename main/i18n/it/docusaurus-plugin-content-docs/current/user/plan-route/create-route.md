---
source-hash: cfeff8f8f57fbdb014fad35d6ada3afdf1bf6cd5443cc3e69f77460144202dd0
sidebar_position: 1
title:  Pianifica un percorso
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Panoramica {#overview}

Lo strumento **Pianifica un percorso** (*Menu → Pianifica un percorso*) è una potente funzionalità dell'applicazione OsmAnd che consente di [creare nuovi percorsi](#create-new-route) come tracce GPX, [modificare e aggiungere nuovi segmenti](#segments) a tracce già salvate, [misurare le distanze](#distance-measurement) sulla mappa e [agganciare la traccia](#attach-track-to-roads) ai segmenti della strada disponibile più vicina utilizzando diversi profili di navigazione. La funzione è progettata per funzionare in *modalità offline*.

Un percorso è costituito da un insieme di segmenti tra punti specificati. I segmenti possono essere linee rette o percorsi adattati al profilo selezionato. Il percorso può essere salvato come GPX per essere importato in seguito, modificato e utilizzato per la [navigazione](../navigation/setup/gpx-navigation.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_overview_ios.webp)

</TabItem>

</Tabs>


## Casi d'uso principali {#main-use-cases}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare a: *<Translate android="true" ids="shared_string_menu,plan_a_route"/>*  

![Plan a route android](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare a: *<Translate ios="true" ids="shared_string_menu,plan_route"/>*  

![Plan a route ios](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>

</Tabs>


### Creare un nuovo percorso {#create-new-route}

Per creare una nuova traccia in formato GPX, utilizzare la funzione principale dello strumento *Pianifica un percorso*. La pre-creazione di un percorso presenta molti vantaggi, a differenza della registrazione della traccia corrente con il *[plugin Registrazione viaggio](../plugins/trip-recording.md)*. È possibile [aggiungere](#adding-points) al percorso tutti i punti che si desidera, [eliminarli e spostarli](#point-context-menu), cambiare i tipi di percorso per [segmenti](#route-between-points) e ottenere [informazioni dettagliate sul percorso](#graph--analyze).  

Per impostazione predefinita, il tipo di percorso corrisponderà al profilo precedentemente selezionato; toccare l'icona del percorso per selezionare il modo in cui l'applicazione deve calcolare il segmento per collegare i punti. Il profilo disponibile deve essere configurato [separatamente](../navigation/routing/osmand-routing.md#routing-types).  

È possibile **ingrandire e ridurre** per facilitare il posizionamento dei punti durante la creazione o la modifica di una traccia. Quando si **riduce lo zoom**, i punti della traccia diventano invisibili per una migliore visione dell'intera lunghezza della traccia e della mappa nel suo complesso. Rimangono visibili solo l'ultimo punto aggiunto e il puntatore per l'aggiunta del punto successivo.


### Modificare una traccia GPX esistente {#modify-existing-gpx-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare a: *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Andare a: *<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>  

Lo strumento *Pianifica un percorso* consente di modificare una traccia GPX esistente e una [traccia importata](../personal/tracks/manage-tracks.md#import). Tuttavia, nel caso in cui sia necessario escludere una grande quantità di punti in base a criteri generici, [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) potrebbe essere uno strumento più adatto.


### Misurazione della distanza {#distance-measurement}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_lines_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route iOS](@site/static/img/plan-route/plan_route_lines_ios.webp)

</TabItem>

</Tabs>  

*Pianifica un percorso* è un modo semplice e veloce per misurare la distanza tra i punti.

- Selezionare il metodo di pianificazione del percorso *Linea retta*. Tra i punti verrà tracciata una linea tratteggiata.
- [Aggiungere](#adding-points) il primo punto sulla mappa da cui verrà tracciata la linea.
- Spostare la mappa per determinare la distanza e l'azimut. Le informazioni verranno visualizzate in un campo con un elenco di punti sotto la mappa.

:::note
La *Linea retta* è necessaria e verrà utilizzata per le aree non coperte dai dati di routing, come le aree fuoristrada e fuori traccia.
:::


### Ottenere i dati di altitudine {#get-elevation-data}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_graph_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route iOS](@site/static/img/plan-route/plan_route_graph_ios.webp)

</TabItem>

</Tabs> 

Se in una traccia esistente mancano i [dati di altitudine](../map/tracks/track-context-menu.md#calculate-missing-elevation), è possibile aggiungerli utilizzando i seguenti strumenti:

- [Usa strade vicine](#attach-track-to-roads). Questa modalità utilizza le mappe offline per trovare le strade più vicine per costruire una traccia, in modo che i dati di altitudine vengano recuperati dalle strade collegate. La geometria della traccia può essere regolata.  
- [Usa Mappe del terreno](../map/tracks/track-context-menu.md#calculate-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) La modalità calcola l'altitudine in base ai dati della mappa del terreno (3D). La differenza tra le altitudini registrate dal dispositivo può essere utilizzata per la correzione dell'altitudine.  La geometria della traccia rimane invariata.

:::note

La **correzione dell'altitudine online** (basata su server) è stata rimossa nelle versioni recenti di OsmAnd ed è non disponibile.  
Per le versioni precedenti, era deprecata e non affidabile.  
Usa invece le opzioni offline: aggancia alle strade o Mappe del terreno (Pro).  

:::

### Agganciare la traccia alle strade {#attach-track-to-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route snap-road-andr](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.webp) ![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios_2.webp)

</TabItem>

</Tabs>  

L'impostazione **Aggancia alle strade** consente di agganciare una traccia registrata o importata alle strade delle mappe offline di OsmAnd per ottenere informazioni aggiuntive:

- Informazioni corrette sulle svolte per [Naviga lungo la traccia](../navigation/setup/gpx-navigation.md#follow-track-options) (specialmente alle rotatorie).
- Nomi delle strade e informazioni sulle corsie.
- Dati di altitudine.
- [Attributi della strada](../navigation/setup/route-details.md#road-attributes).
- Profilo di altitudine aggiornato basato sulla geometria della strada.
- Ricalcolo possibile della geometria della traccia (semplificando o regolando i punti alla rete stradale).

Quando una traccia viene agganciata alle strade, i seguenti parametri potrebbero cambiare perché la geometria e l'altitudine della traccia vengono ricalcolate: *Distanza, Salita / Discesa, Velocità media (e il grafico della velocità), Velocità massima, Tempo in movimento* e *Durata*. Questi valori potrebbero differire dalla traccia GPX originale se l'altitudine o la geometria ricalcolata basata sulla strada devia significativamente dai dati GPS registrati.

È possibile selezionare un [valore di soglia](../navigation/setup/gpx-navigation.md#attach-to-the-roads) per la distanza che i punti della traccia semplificata possono avere rispetto ai punti della traccia originale.

:::note Icona del profilo non specificata
Se si seleziona una traccia e accanto all'icona *Impostazioni* viene visualizzata l'icona del profilo ***non specificato*** ("?"), toccarla per scegliere se agganciare la traccia alle strade o semplicemente collegare i punti con una linea retta e trattarla come una traccia registrata.
:::

<!--
### Add Route Points to Navigation from GPX {#add-route-points-to-navigation-from-gpx}

If you import a GPX file containing a route (with `<rtept>` elements), OsmAnd will display the route on the map but will not automatically convert the route points into a turn-by-turn navigation list.

To generate navigation instructions:

1. Open the GPX file from *My Places → Tracks*.
2. Tap the track to open it.
3. Tap the point menu (⋮) and choose **Add to Navigation**.
4. OsmAnd will convert the route points into a full navigation route with instructions.

> **NOTE:** *You may still use [Attach to roads](#attach-track-to-roads) to adjust geometry before converting to navigation.*
-->


## Punti e Segmenti {#points--segments}

### Aggiungere punti {#adding-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_points_list_andr.png) ![Plan a route Favorites android](@site/static/img/plan-route/plan_route_favorites_and.png)

Per misurare una distanza o pianificare un viaggio, aggiungere i punti nella posizione del *Puntatore* uno per uno e toccare il pulsante *Aggiungi*. Accedendo all'**elenco dei punti** sottostante, è possibile riordinare i punti, eliminarli o accedere a un [menu contestuale del punto](#point-context-menu) specifico.

È anche possibile aggiungere un punto intermedio direttamente dalla mappa toccando un POI o un Preferito per aprire il suo menu contestuale e quindi toccando *AGGIUNGI PUNTO*. In questa modalità, i menu contestuali per oggetti non punti non vengono visualizzati. Quando si aggiunge un POI/Preferito, il suo nome viene preservato come nome del punto del percorso; se in seguito si sposta questo punto sulla mappa, il nome viene azzerato.

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_points_list_ios.webp)

Per misurare una distanza o pianificare un viaggio, aggiungere i punti nella posizione del *Puntatore* uno per uno e toccare il pulsante *Route +*. Accedendo all'**elenco dei punti** sottostante, è possibile riordinare i punti, eliminarli o accedere a un [menu contestuale del punto](#point-context-menu) specifico.

</TabItem>

</Tabs>  

:::note
È anche possibile **Annullare**/**Ripristinare** ogni azione effettuata nella pianificazione del percorso.
:::

### Aggiungere waypoint (solo iOS) {#adding-waypoints}

![Plan a route ios](@site/static/img/plan-route/adding_poi_ios.webp) ![Plan a route ios](@site/static/img/plan-route/adding_poi_2_ios.webp)

La scheda POI consente di aggiungere e gestire waypoint durante la pianificazione di un percorso.

Per aggiungere un waypoint, selezionare una posizione sulla mappa e toccare il pulsante *+ POI*. Si apre la schermata Waypoint, dove è possibile inserire un nome, una descrizione e un indirizzo, selezionare un gruppo e personalizzare l'icona, il colore e la forma. È possibile selezionare un gruppo esistente o toccare *Aggiungi un gruppo* per crearne uno nuovo.

La scheda POI visualizza i punti aggiunti raggruppati per cartelle. Ogni gruppo mostra il proprio nome e il numero di punti che contiene. Per ogni gruppo, toccare il menu a tre punti per accedere alle azioni del gruppo:
- **Rinomina** — cambiare il nome del gruppo.
- **Cambia aspetto** — cambiare l'aspetto del gruppo.
- **Ordina** — cambiare l'ordine dei punti nel gruppo.
- **Elimina** — eliminare il gruppo.

Il menu Ordina fornisce le seguenti opzioni: *Ultima modifica*, *Nome A–Z*, *Nome Z–A*, *Data più recente prima* e *Data più vecchia prima*.

Toccare un punto in un gruppo per aprire il suo menu contestuale. È possibile:
- **Modifica** — aprire la schermata Modifica waypoint.
- **Elimina** — rimuovere il punto dal gruppo.
  
### Percorso tra i punti {#route-between-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_between_points_andr.png) ![Plan a route android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

I punti aggiunti nell'editor possono essere collegati come una linea retta o come un percorso tra punti di un profilo selezionato. È possibile accedere a *Percorso tra i punti* in diversi modi:

1. Dal menu *Opzioni* *→* *Percorso tra i punti*.
2. Toccare l'icona del *profilo* nell'angolo in basso a sinistra della schermata della mappa. Non sull'icona in alto, che aprirà il menu Configura mappa.
3. Nel *[Menu contestuale del punto](#point-context-menu) → Cambia tipo di percorso prima/dopo*.  

È possibile modificare il percorso tra 2 punti specifici o tra più punti:

- *Intera traccia*. L'intera traccia verrà ricalcolata utilizzando il profilo selezionato.
- *Segmento successivo*. Solo il segmento successivo verrà ricalcolato utilizzando il profilo selezionato.  
- *Cambia il Tipo di Percorso Prima/Dopo il Punto*. Nel *menu contestuale del punto*, è possibile modificare il modo in cui viene calcolato il percorso per la sezione da questo punto al punto più vicino o al punto finale. L'impostazione fornisce informazioni sulla distanza da questo punto all'inizio o alla fine del percorso, o al punto successivo/precedente.
- *Ricalcola percorsi*. È possibile utilizzare il ricalcolo del percorso senza modificare il tipo di profilo. L'icona del profilo mostrata sul percorso pianificato nello strumento non cambierà, ma il tipo di percorso corrisponderà a quello selezionato. Potrebbe essere necessario per trovare percorsi alternativi.  

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/route_between_points_ios.webp) ![Plan a route ios](@site/static/img/plan-route/settings_tab_ios.webp)

I punti aggiunti possono essere collegati con una linea retta o con un percorso calcolato utilizzando un profilo di routing selezionato. Il menu Percorso tra i punti consente di visualizzare e modificare il tipo di routing e le impostazioni per i segmenti e le sezioni del percorso.

È possibile aprire Percorso tra i punti toccando il pulsante *Percorso tra i punti*, che mostra l'icona del profilo di routing attualmente selezionato, oppure da un menu [Segmento](#segments) o Sezione.

Nella scheda Tipo di percorso, è possibile selezionare un profilo di routing per il segmento o la sezione selezionati. La linea retta è disponibile come prima opzione, seguita dai profili di routing disponibili.

Quando un percorso contiene un solo tipo di routing, viene visualizzata la vista semplice di Percorso tra i punti. Quando un percorso contiene più tipi di routing, la vista complessa mostra tutti i segmenti e le sezioni, consentendo di selezionare quale parte del percorso modificare.

È anche possibile:
- **Avvia nuovo segmento** — creare un nuovo segmento e continuare ad aggiungere punti del percorso. Il nuovo segmento utilizza lo stesso tipo di percorso di quello corrente.
- **Cambia per l'intera traccia** — selezionare un tipo di routing da applicare all'intera traccia.

Nella scheda Impostazioni, è possibile selezionare le impostazioni di routing predefinite per il tipo di percorso selezionato.

</TabItem>

</Tabs>


### Segmenti {#segments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Un segmento di traccia è un insieme di punti collegati senza **interruzioni**. Nello strumento di pianificazione del percorso, è possibile:

- Unire i segmenti: l'opzione [Unisci segmenti](#point-context-menu) rimuove l'interruzione tra segmenti precedentemente separati.
- Dividere o creare nuove sezioni non collegate di una traccia. Per crearne una, utilizzare l'opzione [Inizia nuovo segmento](#point-context-menu) o selezionare la funzione [Dividi](#point-context-menu) dal menu contestuale del punto.

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/segment_menu.webp) ![Plan a route ios](@site/static/img/plan-route/section_menu.webp)

Un percorso può contenere uno o più segmenti. Un segmento può utilizzare un singolo tipo di percorso o contenere più sezioni con tipi di percorso diversi.

Nella scheda Percorso, ogni segmento viene visualizzato con il suo tipo di percorso e la distanza. Quando un segmento contiene più sezioni, ciascuna sezione mostra il tipo di percorso e la distanza.

È possibile gestire un segmento utilizzando il relativo menu a tre punti:
- **Cambia tipo di percorso** — disponibile per un segmento con un singolo tipo di percorso. Apre Percorso tra i punti, dove è possibile selezionare un tipo di percorso diverso.
- **Imposta tipo di percorso singolo** — disponibile quando un segmento contiene più sezioni con tipi di percorso diversi. Apre Percorso tra i punti, dove è possibile applicare un tipo di percorso al segmento.
- **Ordina** — riordinare manualmente i punti del percorso o utilizzare Ordina porta a porta per riordinarli in modo da ridurre al minimo la distanza totale di viaggio.
- **Salva come…** — salvare il segmento come file separato.
- **Elimina segmento** — eliminare il segmento.

Per creare un nuovo segmento non collegato, toccare *Avvia nuovo segmento* in fondo alla scheda Percorso.

Un segmento può essere suddiviso in [sezioni](#multimodal-routes) quando per diverse parti del segmento vengono utilizzati tipi di percorso diversi. Ogni sezione mostra il tipo di percorso e la distanza.

Toccare il menu a tre punti di una sezione per:
- **Cambia tipo di percorso** — aprire Percorso tra i punti e selezionare un altro tipo di percorso.
- **Ordina** — accedere alle opzioni di ordinamento disponibili.
- **Elimina sezione** — rimuovere la sezione.

</TabItem>

</Tabs>


### Menu contestuale del punto {#point-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_points_menu_ios.webp)

</TabItem>

</Tabs>

Ogni punto del percorso ha il suo menu contestuale. Mostra il *numero di sequenza* del punto, la *distanza dall'inizio del percorso*, la funzione per spostarlo sulla mappa e rimuoverlo, e una serie di azioni con le sezioni del percorso prima e dopo questo punto. Per modificare, toccare il punto desiderato nell' [elenco dei punti](#adding-points) o direttamente sulla mappa.

- ***Informazioni sul punto***. Il numero di punti nell'elenco. La distanza dal primo punto si basa sul tipo di percorso impostato; la distanza può cambiare se ricalcolata con il nuovo tipo se il parametro *Percorso tra i punti* viene modificato.  

- ***<Translate ios="true" ids="move_point"/>***. Consente di modificare la posizione di un punto sulla mappa. Spostare la mappa usando i gesti per cambiare la posizione del punto. L'indicatore del punto sarà al centro della parte visibile della mappa.  

- ***<Translate ios="true" ids="add_point_after"/>***. Spostare la mappa per aggiungere un punto dopo il punto selezionato. È possibile aggiungere tutti i punti necessari finché non si tocca Annulla o Applica.  

- ***<Translate ios="true" ids="add_point_before"/>***. Spostare la mappa per aggiungere tutti i punti necessari dopo il punto selezionato nel segmento tra questo punto e il successivo.  

- ***<Translate ios="true" ids="trim_before"/>***. È possibile tagliare l'intera sezione del percorso, punti e segmenti, dal suo inizio al punto selezionato. La distanza da tagliare è indicata sotto il nome dell'opzione.  

- ***<Translate ios="true" ids="trim_after"/>***. È possibile tagliare un percorso, punti e segmenti, dall'ultimo punto aggiunto al punto selezionato. La distanza da tagliare è indicata sotto il nome dell'opzione.  

- ***<Translate ios="true" ids="plan_route_split_before"/>***. Consente di dividere il percorso prima del punto selezionato in segmenti separati e non collegati.

- ***<Translate ios="true" ids="plan_route_split_after"/>***. Consente di dividere il percorso dopo il punto selezionato in segmenti separati e non collegati.  

- ***<Translate ios="true" ids="join_segments"/>***. L'ultimo punto su uno dei segmenti divisi e il successivo nell'elenco dei punti sull'altro segmento hanno questa impostazione di connessione.  

- ***<Translate ios="true" ids="change_route_type_before"/>***. È possibile modificare il tipo di percorso configurato per un profilo disponibile, tra i punti del segmento precedente o per tutti i segmenti dall'inizio del percorso al punto selezionato.  

- ***<Translate ios="true" ids="change_route_type_after"/>***. È possibile modificare il tipo di percorso tra i punti del segmento successivo o per tutti i segmenti dal punto selezionato all'ultimo punto aggiunto.  

- ***<Translate ios="true" ids="delete_point"/>***. Rimuovere il punto selezionato dal percorso. Simile all'eliminazione di un punto in un elenco.

### Percorsi multimodali {#multimodal-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android-routeline](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-screen](@site/static/img/plan-route/plan-route-routeline-ios.webp)

</TabItem>

</Tabs>

Utilizzando lo strumento *Pianifica un percorso* e l'opzione [Percorso tra i punti](#route-between-points), è possibile creare percorsi multimodali in cui, ad esempio, la prima parte può essere un percorso in *bicicletta*, la seconda parte una *linea retta* e poi una *pedonale*. Si noti che la navigazione su percorsi multimodali non è disponibile, quindi è necessario selezionare uno dei profili più adatti per poter seguire le istruzioni passo-passo.


## Editor {#editor}

### Salva percorso {#save-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

Dopo aver [aggiunto](#adding-points) almeno un punto alla mappa, è possibile utilizzare l'opzione di salvataggio. Tutte le tracce salvate in *Pianifica un percorso* si trovano nel menu principale *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)*.  

Ci sono quattro modi per salvare:

- ***Salvataggio rapido***. Il pulsante in alto a destra ***Fatto*** (per le tracce esistenti) consente di salvare rapidamente le modifiche e di uscire dallo strumento *Pianifica un percorso*. Il nome viene generato in base alla data corrente.
- ***Salva modifiche*** nel [menu Opzioni](#options) consente di salvare le modifiche in un file e di continuare a pianificare il percorso.
- ***Salva come nuova traccia*** nel [menu Opzioni](#options) apre una finestra di dialogo in cui si specifica il nome della traccia e la cartella in cui verrà salvato il percorso.
- ***Aggiungi modifiche a una traccia***. Collega una traccia creata come [segmento separato](#segments) a un'altra traccia esistente. Le modifiche a una traccia selezionata *non possono essere annullate*.

Durante il salvataggio, la traccia eredita il tipo di attività del profilo di routing utilizzato per la pianificazione. L'attività viene salvata nei metadati della traccia e preservata dopo l'esportazione o l'importazione del file GPX.

:::note Opzione traccia semplificata
Quando si salva una nuova traccia, è possibile selezionare l'opzione traccia ***Semplificata*** per rendere la traccia compatibile con altre applicazioni di terze parti. Tecnicamente, la traccia verrà salvata senza istruzioni di percorso come una traccia puramente geometrica.
:::

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_save_changes_ios.webp)

Dopo aver [aggiunto](#adding-points) almeno un punto alla mappa, è possibile utilizzare l'opzione di salvataggio. Tutte le tracce salvate in *Pianifica un percorso* si trovano nel menu principale *<Translate ios="true" ids="shared_string_menu"/> → <Translate ios="true" ids="shared_string_my_places"/> →* *[<Translate ios="true" ids="shared_string_gpx_tracks"/>](../personal/tracks/manage-tracks.md)*.

Per un nuovo percorso, toccare *Salva* nella barra degli strumenti in alto per salvare la traccia corrente. È anche possibile utilizzare *Salva come…* dal menu Opzioni per inserire un nome file e salvare il percorso.

Durante la modifica di una traccia esistente, *Salva* salva le modifiche correnti. È anche possibile utilizzare le seguenti opzioni:
- **Salva come…** — salva la traccia con un nuovo nome file.
- **Salva come copia** — salva un duplicato della traccia.
- **Aggiungi a traccia esistente** — aggiunge la traccia pianificata come segmento separato a una traccia esistente.

Durante il salvataggio, la traccia eredita il tipo di attività del profilo di routing utilizzato per la pianificazione. L'attività viene salvata nei metadati della traccia e preservata dopo l'esportazione o l'importazione del file GPX.

</TabItem>

</Tabs>  


### Opzioni {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android-options](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

- [<Translate android="true" ids="route_between_points"/>](#route-between-points). Mostra il profilo dell'applicazione selezionato (l'impostazione predefinita è una linea retta). Toccando questa azione si ottiene lo stesso risultato che toccando il pulsante *Profilo*, che apre il [menu dei profili](../personal/profiles.md) dell'applicazione.
- **<Translate ios="true" ids="gpx_start_new_segment"/>** (*iOS*) o **<Translate android="true" ids="plan_route_add_new_segment"/>** (*Android*). Disegna nuovi segmenti di percorso che non si collegano al segmento precedente.
- [<Translate android="true" ids="shared_string_save_changes"/>](#save-route). Se si tratta di una nuova traccia non collegata a quella esistente, si apre il menu *Salva come nuova traccia*. Quando si aggiungono nuovi segmenti a una traccia aperta o importata, appare la notifica del salvataggio del file GPS nella memoria, dopodiché è possibile continuare a creare il segmento successivo.
- [<Translate android="true" ids="save_as_new_track"/>](#save-route). Salva il percorso come traccia GPX.
- [<Translate android="true" ids="add_to_a_track"/>](#save-route). Aggiunge il percorso a una traccia dalla cartella delle tracce e salva la nuova traccia.
- [<Translate android="true" ids="shared_string_navigation"/>](../navigation/setup/gpx-navigation.md). Avvia la navigazione dalla propria posizione al punto di arrivo utilizzando un percorso disegnato.
- **<Translate android="true" ids="reverse_route"/>**. Si scambiano il punto di *Partenza* del percorso e l'ultimo punto aggiunto. Le impostazioni del segmento di percorso non cambiano quando si applica Inverti.
- [<Translate android="true" ids="attach_to_the_roads"/>](#attach-track-to-roads). Crea un percorso approssimativo. Ogni punto della traccia viene abbinato alla strada consentita più vicina sulla mappa in base al profilo selezionato e alla distanza di soglia.
- [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) (solo Android). È possibile filtrare i punti del percorso che non corrispondono al tipo di percorso selezionato, eliminare i dati non necessari o correggere i dati imprecisi. Il filtro GPS funziona solo se il tipo di percorso è specificato come *Linea retta*. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- [<Translate android="true" ids="get_altitude_data"/>](#get-elevation-data) (*solo Android*). Questa opzione viene visualizzata nel menu solo se non sono disponibili dati di altitudine. Con questa [opzione](#get-elevation-data), è possibile calcolare l'altitudine utilizzando i *dati della mappa del terreno* o utilizzare i dati delle mappe scaricate per trovare le *strade vicine*.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. Elimina completamente tutte le azioni. Sulla mappa rimane un "artefatto": le linee tratteggiate del percorso appena cancellato. Scompare alla successiva aggiunta di nuovi punti. È possibile annullare la funzione Cancella tutto con il pulsante Annulla azione. La funzione non influisce sulle parti non modificate dei percorsi aperti nello strumento.

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-options](@site/static/img/plan-route/plan_route_menu_options_ios.webp)

Toccare il menu a tre punti nella barra degli strumenti in alto per aprire il menu *Opzioni*. Le azioni disponibili dipendono dal fatto che si stia creando un nuovo percorso o modificando una traccia esistente.

- **Salva come…** — salvare il percorso con un nuovo nome file. Disponibile sia per i nuovi percorsi che per le tracce modificate.
- **Salva come copia** — salvare un duplicato di una traccia esistente. Disponibile durante la modifica di una traccia esistente.
- **Aggiungi a traccia esistente** — aggiungere il percorso pianificato come segmento separato a una traccia esistente.
- **Cambia ordine segmenti** — cambiare l'ordine dei segmenti del percorso.
- **Inverti percorso** — invertire la direzione del percorso.
- **Navigazione** — chiudere Pianifica un percorso e avviare la navigazione utilizzando il percorso pianificato.
- **Cancella tutti i punti** — rimuovere tutti i punti dal percorso pianificato.

</TabItem>

</Tabs>


### Grafico / Analizza {#graph--analyze}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_graph_5_new_andr.png)

Durante la pianificazione del percorso, il [grafico](../navigation/setup/route-details.md#elevation-graph) mostra le informazioni sull'altitudine del percorso e sulla percentuale di pendenza; inoltre, è possibile toccare un punto qualsiasi del grafico per visualizzare un puntatore con dati particolari.  

Il grafico viene visualizzato nella scheda *Grafico* quando si crea o si apre una traccia e quando si [naviga](../navigation/setup/gpx-navigation.md) utilizzando *Pianifica un percorso*.

Quando si calcola un percorso per la navigazione in *Pianifica un percorso*, è possibile trovare informazioni aggiuntive sulla traccia come [Info altitudine](../navigation/setup/route-details.md#elevation-info) e [Attributi della strada](../navigation/setup/route-details.md#road-attributes), e utilizzare lo strumento [Analizza sulla mappa](../navigation/setup/route-details.md#analyze-on-map). Toccare il pulsante *Dettagli* sotto il grafico.  

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route_analyze_ios.webp) ![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route_analyze_ios_2.webp)

La sezione Panoramica visualizza un grafico basato sull'asse selezionato. Utilizzare i controlli di selezione dell'asse per scegliere i dati visualizzati sul grafico. *Ricalcola altitudine* consente di ricalcolare i dati di altitudine quando necessario. Se i dati di altitudine non sono disponibili, la scheda Analizza visualizza Nessun dato di altitudine. Il messaggio spiega che OsmAnd può recuperare i dati di altitudine dalle strade vicine o dalle mappe del terreno. Toccare *Ottieni dati di altitudine* per calcolare i dati di altitudine. Per ulteriori informazioni, vedere la sezione [Ottenere i dati di altitudine](#get-elevation-data).

La sezione Statistiche Panoramica visualizza *Salita*, *Discesa*, *Intervallo altitudine*, *Velocità media*, *Velocità massima* e *Tempo in movimento*. Viene visualizzato un trattino `–` quando i dati non sono disponibili. Ad esempio, velocità e tempo in movimento potrebbero non essere disponibili per i percorsi pianificati.

Le sezioni Tipi di strada, Pendenza, Superficie e Scorrevolezza mostrano le caratteristiche corrispondenti del percorso. Toccare una sezione per espanderla e visualizzare informazioni dettagliate nella legenda.

</TabItem>

</Tabs>


## Articoli correlati {#related-articles}

- [Mostra traccia sulla mappa](../map/tracks/index.md)
- [Analizza sulla mappa](../map/tracks/index.md#analyze-track-on-map)
- [Menu contestuale della traccia](../map/tracks/track-context-menu.md)
- [Navigazione lungo la traccia](../navigation/setup/gpx-navigation.md)
- [Registrazione viaggio](../plugins/trip-recording.md)