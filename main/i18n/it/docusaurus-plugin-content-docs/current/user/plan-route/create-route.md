---
source-hash: 73fd3987a12239ff567c70bd00c4dac78fb02e95a9841f96a04a50b80ef31390
sidebar_position: 1
title:  Pianificare un percorso
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

Lo strumento **Pianifica un percorso** (*Menu → Pianifica un percorso*) è una potente funzionalità dell'applicazione OsmAnd che consente di [creare nuovi percorsi](#create-new-route) come tracce GPX, [modificare e aggiungere nuovi segmenti](#segments) a tracce già salvate, [misurare distanze](#distance-measurement) sulla mappa e [collegare segmenti di traccia](#attach-track-to-roads) alla strada disponibile più vicina utilizzando diversi profili di navigazione. La funzionalità è progettata per funzionare in *modalità offline*.

Un percorso è costituito da un insieme di segmenti tra punti specificati. I segmenti possono essere linee rette o percorsi adattati al profilo selezionato. Il percorso può essere salvato come GPX per successive importazioni, modifiche e [navigazioni](../navigation/setup/gpx-navigation.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pianifica un percorso Android](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pianifica un percorso iOS](@site/static/img/plan-route/plan_route_overview_ios.png)

</TabItem>

</Tabs>


## Principali casi d'uso {#main-use-cases}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,plan_a_route"/>*  

![Pianifica un percorso Android](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,plan_route"/>*  

![Pianifica un percorso iOS](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>

</Tabs>


### Crea nuovo percorso {#create-new-route}

Per creare una nuova traccia in formato GPX, utilizza la funzione principale dello strumento *Pianifica un percorso*. La pre-creazione di un percorso ha molti vantaggi, a differenza della registrazione della traccia corrente con il *[plugin di registrazione del viaggio](../plugins/trip-recording.md)*. Puoi [aggiungere](#adding-points) tutti i punti che desideri al percorso, [eliminarli e spostarli](#point-context-menu), modificare i tipi di percorso per [segmenti](#route-between-points) e ottenere [informazioni dettagliate sul percorso](#graph).  

Per impostazione predefinita, il tipo di routing corrisponderà al profilo precedentemente selezionato, tocca l'icona del routing per selezionare come l'applicazione deve calcolare il segmento per collegare i punti. Il profilo disponibile deve essere configurato [separatamente](../navigation/routing/osmand-routing.md#routing-types).  

Puoi **ingrandire e rimpicciolire** per posizionare facilmente i punti durante la creazione o la modifica di una traccia. Quando **rimpicciolisci**, i punti sulla traccia diventano invisibili per una migliore visualizzazione dell'intera lunghezza della traccia e della mappa nel suo complesso. Rimangono visibili solo l'ultimo punto aggiunto e il puntatore per l'aggiunta del punto successivo.


### Modifica traccia GPX esistente {#modify-existing-gpx-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>  

Lo strumento *Pianifica un percorso* consente di modificare una traccia GPX esistente, così come una [traccia importata](../personal/tracks/manage-tracks.md#import). Tuttavia, nel caso in cui sia necessario escludere una grande quantità di punti in base a criteri generici, [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) potrebbe essere uno strumento più adatto.


### Misurazione della distanza {#distance-measurement}

![Pianifica un percorso Android](@site/static/img/plan-route/plan_route_lines_andr.png)  

*Pianifica un percorso* è un modo rapido e semplice per misurare la distanza tra i punti.

- Seleziona il metodo di pianificazione del percorso *Linea retta*. Verrà tracciata una linea tratteggiata tra i punti.
- [Aggiungi](#adding-points) il primo punto sulla mappa da cui verrà tracciata la linea.
- Sposta la mappa per determinare la distanza e l'azimut. Le informazioni verranno visualizzate in un campo con un elenco di punti sotto la mappa.

:::note
La *Linea retta* è necessaria e verrà utilizzata per aree non coperte da dati di routing, come aree fuori strada e fuori traccia.
:::


### Ottieni dati di elevazione {#get-elevation-data}

<InfoAndroidOnly />

![Pianifica un percorso Android](@site/static/img/plan-route/plan_route_graph_4_andr.png)  

Se i [dati di elevazione](../map/tracks/track-context-menu.md#calculating-missing-elevation) mancano in una traccia esistente, è possibile aggiungerli utilizzando i seguenti strumenti:

- [Usa strade vicine](#attach-track-to-roads). Questa modalità utilizza mappe offline per trovare le strade più vicine per costruire una traccia, quindi i dati di elevazione verranno recuperati dalle strade collegate. La geometria della traccia può essere regolata.  
- [Usa mappe del terreno](../map/tracks/track-context-menu.md#calculating-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) La modalità calcola l'altitudine in base ai dati della mappa del terreno (3D). La differenza tra le altitudini registrate dal tuo dispositivo può essere utilizzata per la correzione dell'elevazione. La geometria della traccia rimane invariata.


### Collega la traccia alle strade {#attach-track-to-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pianifica un percorso snap-road-ios](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pianifica un percorso snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>  

L'impostazione **Collega alle strade** consente di collegare una traccia registrata o importata alle strade dalle mappe offline di OsmAnd per ottenere informazioni aggiuntive:

- Informazioni corrette sulle svolte per [Naviga per traccia](../navigation/setup/gpx-navigation.md#how-to-follow-the-track) (specialmente nelle rotatorie).
- Nomi delle strade e informazioni sulle corsie.
- Dati di elevazione.
- [Attributi stradali](../navigation/setup/route-details.md#road-attributes).

È possibile selezionare un [valore di soglia](../navigation/setup/gpx-navigation.md#attach-to-the-roads) per la distanza che i punti della traccia semplificata possono avere dai punti della traccia originale.

:::note Icona profilo non specificato
Se selezioni una traccia e l'icona del profilo ***non specificato*** ("?") viene visualizzata accanto all'icona *Impostazioni*, toccala per scegliere se collegare la traccia alle strade o semplicemente collegare i punti con una linea retta e trattarla come una traccia registrata.
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


## Punti e segmenti {#points--segments}

### Aggiunta di punti {#adding-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pianifica un percorso Android](@site/static/img/plan-route/plan_route_points_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pianifica un percorso iOS](@site/static/img/plan-route/plan_route_points_list_ios.png)

</TabItem>

</Tabs>  

Per misurare una distanza o pianificare un viaggio, aggiungi i punti nella posizione del *puntatore* uno per uno e tocca il pulsante *Aggiungi punto*. Accedendo all'**elenco dei punti** qui sotto, puoi riordinare i punti, eliminarli o accedere a uno specifico [menu contestuale del punto](#point-context-menu).

:::note
Puoi anche **Annullare**/**Ripristinare** ogni azione che hai fatto nella pianificazione del percorso.
:::
  
### Percorso tra i punti {#route-between-points}

I punti aggiunti nell'editor possono essere collegati come una linea retta o come un percorso tra i punti di un profilo selezionato. Il *Percorso tra i punti* può essere raggiunto in diversi modi:

1. Dal menu *Opzioni* *→* *Percorso tra i punti*.
2. Tocca l'*icona del profilo* nell'angolo in basso a sinistra della schermata della mappa. Non sull'icona in alto, aprirà il menu Configura mappa.
3. Nel *[menu contestuale del punto](#point-context-menu) → Cambia tipo di percorso prima/dopo*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pianifica un percorso Android](@site/static/img/plan-route/plan_route_between_points_andr.png) ![Pianifica un percorso Android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pianifica un percorso iOS](@site/static/img/plan-route/plan_route_between_points_ios.png) ![Pianifica un percorso iOS](@site/static/img/plan-route/plan_route_change-route-type_ios.png)

</TabItem>

</Tabs>

Puoi cambiare il percorso tra 2 punti specifici o tra più punti:

- *Intera traccia*. L'intera traccia verrà ricalcolata utilizzando il profilo selezionato.
- *Segmento successivo*. Solo il segmento successivo verrà ricalcolato utilizzando il profilo selezionato.  
- *Cambia il tipo di percorso prima/dopo il punto*. Nel *menu contestuale del punto*, puoi cambiare il modo in cui il percorso viene calcolato per la sezione da questo punto al più vicino o al punto finale. L'impostazione fornisce informazioni sulla distanza da questo punto all'inizio o alla fine del percorso, o al punto successivo/precedente.
- *Ricalcola percorsi*. Puoi usare il ricalcolo del percorso senza cambiare il tipo di profilo. L'icona del profilo mostrata sul percorso pianificato nello strumento non cambierà, ma il tipo di percorso corrisponderà a quello selezionato. Potrebbe essere necessario per trovare percorsi alternativi.  

### Segmenti {#segments}

Un segmento di traccia è una raccolta di punti collegati senza **interruzioni**. In uno strumento di pianificazione del percorso, è possibile:

- Unire segmenti: l'opzione [Unisci segmenti](#point-context-menu) rimuove il divario ai segmenti precedentemente separati.
- Dividere o creare nuove sezioni non collegate di una traccia. Per crearne una, usa l'opzione [Inizia nuovo segmento](#point-context-menu) o seleziona la funzione [Dividi](#point-context-menu) dal menu contestuale del punto.

### Menu contestuale del punto {#point-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pianifica un percorso Android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pianifica un percorso iOS](@site/static/img/plan-route/plan_route_points_menu_ios.png)

</TabItem>

</Tabs>

Ogni punto del tuo percorso ha il suo menu contestuale. Mostra il *numero di sequenza* del punto, la *distanza dall'inizio del percorso*, la funzione per spostarlo sulla mappa e rimuoverlo, e un set di azioni con sezioni del percorso prima e dopo questo punto. Per modificare, tocca il punto desiderato nell'[elenco dei punti](#adding-points) o direttamente sulla mappa.

- ***Informazioni sul punto***. Il numero di punti nell'elenco. La distanza dal primo punto si basa sul tipo di routing impostato, la distanza può cambiare quando ricalcolata al nuovo tipo se il parametro *Percorso tra i punti* viene modificato.  

- ***<Translate ios="true" ids="move_point"/>***. Consente di modificare la posizione di un punto sulla mappa. Sposta la mappa usando i gesti per cambiare la posizione del punto. L'indicatore del punto sarà al centro della parte visibile della mappa.  

- ***<Translate ios="true" ids="add_point_after"/>***. Sposta la mappa per aggiungere un punto dopo il punto selezionato. Puoi aggiungere tutti i punti di cui hai bisogno finché non tocchi annulla o applica.  

- ***<Translate ios="true" ids="add_point_before"/>***. Sposta la mappa per aggiungere tutti i punti necessari dopo il punto selezionato sul segmento tra questo punto e il successivo.  

- ***<Translate ios="true" ids="trim_before"/>***. Puoi tagliare l'intera sezione del percorso, punti e segmenti, dal suo inizio al punto selezionato. La distanza da tagliare è indicata sotto il nome dell'opzione.  

- ***<Translate ios="true" ids="trim_after"/>***. Puoi tagliare un percorso, punti e segmenti, dall'ultimo punto aggiunto al punto selezionato. La distanza da tagliare è indicata sotto il nome dell'opzione.  

- ***<Translate ios="true" ids="plan_route_split_before"/>***. Consente di dividere il percorso prima del punto selezionato in segmenti separati e non collegati.

- ***<Translate ios="true" ids="plan_route_split_after"/>***. Consente di dividere il percorso dopo il punto selezionato in segmenti separati e non collegati.  

- ***<Translate ios="true" ids="join_segments"/>***. L'ultimo punto su uno dei segmenti divisi e il successivo nell'elenco dei punti sull'altro segmento hanno questa impostazione di connessione.  

- ***<Translate ios="true" ids="change_route_type_before"/>***. Puoi cambiare il tipo di routing configurato per un profilo disponibile, tra i punti sul segmento precedente, o per tutti i segmenti dall'inizio del percorso al punto selezionato.  

- ***<Translate ios="true" ids="change_route_type_after"/>***. Puoi cambiare il tipo di routing tra i punti sul segmento successivo, o per tutti i segmenti dal punto selezionato all'ultimo punto aggiunto.  

- ***<Translate ios="true" ids="delete_point"/>***. Rimuove il punto selezionato dal percorso. Simile all'eliminazione di un punto in un elenco.

### Percorsi multimodali {#multimodal-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pianifica un percorso Android-routeline](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pianifica un percorso iOS-screen](@site/static/img/plan-route/plan-route-routeline-ios.png)

</TabItem>

</Tabs>

Utilizzando lo strumento *Pianifica un percorso* e l'opzione [Percorso tra i punti](#route-between-points), puoi creare percorsi multimodali in cui, ad esempio, la prima parte può essere un percorso *ciclabile*, la seconda parte un percorso in *linea retta* e poi uno *pedonale*. Tieni presente che la navigazione su percorsi multimodali non è disponibile, quindi devi selezionare uno dei profili più adatti per poter seguire le istruzioni passo-passo.


## Editor {#editor}

### Salva percorso {#save-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pianifica un percorso Android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pianifica un percorso iOS](@site/static/img/plan-route/plan_route_save_changes_ios.png)

</TabItem>

</Tabs>  


Dopo [aver aggiunto](#adding-points) almeno un punto alla mappa, puoi utilizzare l'opzione di salvataggio. Tutte le tracce salvate in *Pianifica un percorso* si trovano nel *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)*.  

Ci sono quattro modi per salvare:

- ***Salvataggio rapido***. Il pulsante in alto a destra ***Fatto*** / ***Salva*** (per le tracce esistenti) consente il salvataggio rapido delle modifiche e l'uscita dallo strumento *Pianifica un percorso*. Il nome viene generato in base alla data corrente.
- ***Salva modifiche*** nel [menu Opzioni](#options) consente di salvare le modifiche in un file e continuare a pianificare il percorso.
- ***Salva come nuova traccia*** nel [menu Opzioni](#options) apre una finestra di dialogo in cui si specifica il nome della traccia e la cartella in cui verrà salvato il percorso.
- ***Aggiungi modifiche a una traccia***. Collega una traccia creata come [segmento separato](#segments) a un'altra traccia esistente. Le modifiche a una traccia selezionata *non possono essere annullate*.

:::note Opzione traccia semplificata
Quando salvi una nuova traccia, puoi selezionare l'opzione traccia ***Semplificata*** per rendere la traccia compatibile con altre applicazioni di terze parti. Tecnicamente, la traccia verrà salvata senza istruzioni di percorso come una traccia puramente geometrica.
:::

### Opzioni {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pianifica un percorso Android-options](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pianifica un percorso iOS-options](@site/static/img/plan-route/plan_route_menu_options_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="route_between_points"/>](#route-between-points). Mostra il profilo dell'applicazione selezionato (il valore predefinito è una linea retta). Toccare questa azione è come toccare il pulsante *Profilo*, che apre il menu [profilo dell'applicazione](../personal/profiles.md).
- **<Translate ios="true" ids="gpx_start_new_segment"/>** (*iOS*) o **<Translate android="true" ids="plan_route_add_new_segment"/>** (*Android*). Disegna nuovi segmenti di percorso che non si collegano al segmento precedente.
- [<Translate android="true" ids="shared_string_save_changes"/>](#save-route). Se si tratta di una nuova traccia senza collegamento a quella esistente, si apre il menu *Salva come nuova traccia*. Quando si aggiungono nuovi segmenti a una traccia aperta o importata, appare la notifica sul salvataggio del file GPS nella memoria, dopodiché è possibile continuare a creare il segmento successivo.
- [<Translate android="true" ids="save_as_new_track"/>](#save-route). Salva il tuo percorso come traccia GPX.
- [<Translate android="true" ids="add_to_a_track"/>](#save-route). Aggiungi il tuo percorso a una traccia dalla tua cartella delle tracce e salva la nuova traccia.
- [<Translate android="true" ids="shared_string_navigation"/>](../navigation/setup/gpx-navigation.md). Avvia la navigazione dalla tua posizione al punto di arrivo utilizzando un percorso disegnato.
- **<Translate android="true" ids="reverse_route"/>**. Scambi il punto di *inizio* del percorso e l'ultimo punto aggiunto. Le impostazioni del segmento di percorso non cambiano quando viene applicato Inverti.
- [<Translate android="true" ids="attach_to_the_roads"/>](#attach-track-to-roads). Crea un percorso approssimativo. Ogni punto della traccia viene abbinato alla strada consentita più vicina sulla mappa in base al profilo selezionato e alla distanza di soglia.
- [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) (solo Android). Puoi filtrare i punti del percorso che non corrispondono al tipo di routing selezionato, eliminare dati non necessari o correggere dati imprecisi. Il filtro GPS funzionerà solo se il tipo di routing è specificato come *Linea retta*. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing??** -->
- [<Translate android="true" ids="get_altitude_data"/>](#get-elevation-data) (*solo Android*). Questa opzione viene visualizzata nel menu solo se non sono disponibili dati di elevazione. Con questa [opzione](#get-elevation-data), puoi calcolare l'altitudine utilizzando i *dati della mappa del terreno* o utilizzare i dati delle mappe scaricate per trovare le *strade vicine*.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. Archivia completamente tutte le tue azioni. Sulla mappa rimane un "artefatto" - le linee tratteggiate del percorso appena cancellato. Scompare alla prossima aggiunta di nuovi punti. Puoi annullare la funzione Cancella tutto con il pulsante Azione ritorno. La funzione non influisce sulle parti invariate dei percorsi aperti nello strumento.

### Grafico {#graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pianifica un percorso Android](@site/static/img/plan-route/plan_route_graph_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pianifica un percorso snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>

Durante la pianificazione del percorso, il [grafico](../navigation/setup/route-details.md#elevation-graph) visualizza le informazioni sull'altitudine del percorso e sulla percentuale di pendenza, inoltre puoi toccare un punto qualsiasi del grafico per visualizzare un puntatore con dati specifici.  

- Per **Android**, il grafico viene visualizzato nella scheda *Grafico* durante la creazione o l'apertura di una traccia, e durante la [Navigazione](../navigation/setup/gpx-navigation.md) utilizzando *Pianifica un percorso*.
- Per **iOS**, il grafico è disponibile solo tramite il menu *[Opzioni](#options) → Navigazione*.

Quando si calcola un percorso per la navigazione in *Pianifica un percorso*, è possibile trovare informazioni aggiuntive sulla traccia come [Informazioni sull'elevazione](../navigation/setup/route-details.md#elevation-info) e [Attributi stradali](../navigation/setup/route-details.md#road-attributes), e utilizzare lo strumento [Analizza sulla mappa](../navigation/setup/route-details.md#analyse-on-map). Tocca il pulsante *Dettagli* sotto il grafico.  


## Articoli correlati {#related-articles}

- [Mostra traccia sulla mappa](../map/tracks/index.md)
- [Analizza sulla mappa](../map/tracks/index.md#analyze-track-on-map)
- [Menu contestuale della traccia](../map/tracks/track-context-menu.md)
- [Navigazione per traccia](../navigation/setup/gpx-navigation.md)
- [Registrazione del viaggio](../plugins/trip-recording.md)

> *Ultimo aggiornamento: Maggio 2025*