---
source-hash: a712a44f73377cd525fd51b44694dfb5b3a2ded809dfa1224660e6d06215701e
sidebar_position: 2
title:  Navigazione tramite traccia
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

L'opzione *Navigazione tramite traccia* (GPX) consente di seguire un percorso o una traccia predefinita su una mappa. Può essere particolarmente utile per attività all'aperto come escursionismo, ciclismo o guida fuoristrada, dove avere un percorso pianificato migliora la sicurezza e l'efficienza. Se si viaggia in un gruppo organizzato, questa funzione aiuta voi e ogni membro del gruppo ad avere le stesse informazioni sul percorso degli altri.  

L'opzione *Navigazione tramite traccia* può essere utilizzata anche nella vita di tutti i giorni. È possibile utilizzare una [traccia registrata](../../plugins/trip-recording.md) in precedenza o [creare una traccia](../../personal/tracks/manage-tracks.md#create-a-track) e condividerla con la famiglia o gli amici invece di spiegare loro il percorso. È anche possibile utilizzare i [percorsi sulla mappa di OsmAnd](../../../../blog/routes/) per la navigazione. Come evidenziarli sulla mappa e cosa significano i loro colori è descritto nella sezione [Percorsi](../../map/vector-maps.md#routes) dell'articolo *Mappe vettoriali*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Schermata di navigazione per traccia Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Schermata di navigazione per traccia iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Selezionare la traccia {#select-the-track}

Prima di utilizzare l'opzione *Navigazione tramite traccia*, è necessario [visualizzare la traccia sulla mappa](../../map/tracks/index.md#display-tracks-on-the-map). OsmAnd supporta la traccia come linea (**Geometria**) e la traccia come percorso (**Percorso**) o una combinazione di essi (**OsmAnd** tramite [Pianifica percorso](../../plan-route/create-route.md)). Se si dispone di una traccia come raccolta di **Waypoint**, è possibile utilizzare la [Navigazione tramite punti di riferimento](./markers-navigation.md).


- La traccia **Geometria** avrà una navigazione molto basilare per impostazione predefinita e non fornirà svolte accurate, nomi di strade e corsie di svolta. Per ottenere le informazioni mancanti, è necessario utilizzare lo strumento [Collega alle strade](#attach-to-the-roads).

- La traccia **Percorso** calcolerà il percorso tra i punti del percorso in base al profilo selezionato. Fondamentalmente, tutti i punti del percorso saranno considerati come punti intermedi. Se il percorso è composto da > 50 punti, è molto probabile che si tratti di una traccia **Geometria** configurata in modo errato.

- La traccia **OsmAnd** è composta da parti di geometria e di percorso, ed è adatta a fornire esattamente la stessa guida della navigazione predefinita. Queste tracce sono prodotte da [Pianifica percorso](../../plan-route/create-route.md) o dalla [Versione Web](../../web/index.md). È possibile salvare nuovamente questa traccia come traccia solo **Geometria** come [**Semplificata**](../../plan-route/create-route.md#save-route) per essere utilizzata in programmi di terze parti.


### Avviare la navigazione GPX {#start-gpx-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Seleziona traccia per navigare Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Seleziona traccia per navigare Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seleziona traccia per navigare iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Seleziona traccia per navigare iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

La navigazione su una traccia può essere avviata utilizzando il pulsante di azione rapida nel [menu contestuale della traccia](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) (aperto selezionando una delle [tracce evidenziate](./route-navigation.md#history-of-previous-routes) sulla mappa, o toccando un file di traccia nella sezione [I miei luoghi](../../personal/myplaces.md) del *Menu principale*) o dal menu di navigazione, che si apre toccando:

- [*Pulsante Navigazione*](../../widgets/map-buttons.md#directions) sulla schermata della mappa.  
- *Sezione Navigazione* nel *Menu principale* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- Nel [*Menu di navigazione*](./route-navigation.md#navigation-menu) vai a *<Translate android="true" ids="shared_string_settings,follow_track"/>*.  

### Scegliere i segmenti {#choose-segments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Segmenti Android](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segmenti iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

Per la navigazione, se la traccia selezionata è composta da più segmenti o tracce, è possibile selezionare un segmento specifico o l'intero file di traccia GPX. Durante l'**[importazione](../../personal/tracks/manage-tracks.md#import)** è possibile scegliere se salvarlo in un unico file o in più file.


### Opzioni Segui traccia {#follow-track-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![Schermata di navigazione per traccia Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![Schermata di navigazione per traccia iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **Modifica** (*icona a forma di matita* accanto al nome della traccia) — Apre la traccia nello strumento [*Pianifica un percorso*](../../plan-route/create-route.md).
- **<Translate android="true" ids="select_another_track"/>** — Seleziona un file GPX diverso per la navigazione.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — Se questa impostazione è abilitata, la direzione del movimento lungo la traccia viene invertita.
- **<Translate android="true" ids="attach_to_the_roads"/>** — Configura il [collegamento di una traccia alle strade](#attach-to-the-roads).
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — È possibile selezionare come navigare dalla mia posizione alla traccia:
all'*<Translate android="true" ids="start_of_the_track"/>* o al *<Translate android="true" ids="nearest_point"/>* sulla traccia.
- Scegli il **Tipo di navigazione** per il primo e l'ultimo segmento: costruisci una [*linea retta*](../routing/straight-line-routing.md) o usa il [*tipo di percorso*](../routing/osmand-routing.md#routing-types) dal profilo corrente.


### Reverse Track Direction {#reverse-track-direction}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Modalità inversa](@site/static/img/navigation/gpx/reverse_mode_android.png) ![Naviga verso](@site/static/img/navigation/gpx/navigate_to_android.png)

L'opzione **Inverti direzione della traccia** consente di navigare una traccia GPX salvata nella direzione opposta — dal punto finale al punto di partenza. Quando questa impostazione è attivata, l'algoritmo di navigazione inverte automaticamente la geometria GPX e ricalcola le direzioni di conseguenza. Una volta abilitata, diventa disponibile il parametro **Modalità inversa**:

- **Calcola percorso**. Raccomandato per i profili auto e bicicletta. Viene ricalcolato un nuovo percorso ottimizzato lungo la traccia GPX invertita in base al profilo di navigazione selezionato. Vengono rispettate le regole stradali come le strade a senso unico e le restrizioni di svolta per garantire una navigazione sicura.
- **Traccia originale**. La linea GPX viene seguita rigorosamente in senso inverso senza ricalcolare il percorso. Questa modalità è utile per camminate, escursioni o navigazione fuoristrada dove le regole stradali non si applicano.

Quando la direzione inversa è abilitata, i punti di partenza e arrivo della traccia vengono scambiati automaticamente e la navigazione viene costruita dalla posizione corrente o più vicina sulla traccia invertita. L'opzione *Punto della traccia per navigare = Punto più vicino* si riferisce al punto più vicino sulla linea GPX invertita, e sia la guida vocale che la funzione Collega alle strade funzionano allo stesso modo della navigazione in avanti.

</TabItem>

<TabItem value="ios" label="iOS">

![Naviga verso iOS](@site/static/img/navigation/gpx/navigate_to_ios.png)

L'opzione **Inverti direzione della traccia** consente di navigare una traccia GPX salvata nella direzione opposta — dal suo punto finale al punto di partenza. Quando questa impostazione è abilitata, la geometria della traccia viene invertita automaticamente e il percorso viene ricalcolato in base al profilo di navigazione selezionato.

I punti di partenza e arrivo della traccia vengono scambiati e la navigazione viene costruita dalla posizione corrente o più vicina sulla linea invertita. L'opzione *Naviga verso = Punto più vicino* si riferisce al punto più vicino sulla traccia GPX invertita.

Viene ricalcolato un nuovo percorso ottimizzato lungo la traccia invertita con piena considerazione delle regole stradali come le strade a senso unico e le restrizioni di svolta. La guida vocale, le istruzioni visive e la funzione Collega alle strade operano come nella navigazione standard in avanti, garantendo un routing accurato e sicuro.

</TabItem>

</Tabs>


### Collega alle strade {#attach-to-the-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Collega alle strade 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Collega alle strade 1 iOS](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

La funzione **Collega alle strade** allinea la tua traccia alla strada più vicina per un'esperienza di navigazione più accurata. Disponibile nel menu [Segui traccia](#follow-track-options), questa funzione assicura che il tuo percorso segua la rete stradale appropriata in base al *profilo di navigazione* selezionato e alla **distanza di soglia**. Ciò migliora sia i [dettagli del percorso](../setup/route-details.md) che le [istruzioni vocali](#guidance) durante la navigazione.

***Come funziona:***

- OsmAnd abbina ogni punto della traccia alla **strada più vicina** entro la **distanza di soglia** impostata (predefinita: **50 metri**).  
- La **distanza di soglia** definisce la distanza massima consentita tra un punto della traccia GPS e una strada per il collegamento.
- **Ricollegamento automatico** — Quando si cambiano i **profili di navigazione**, OsmAnd ricollega automaticamente la traccia alle strade adatte al nuovo profilo.
- Per tracce grandi con molti punti, il processo di collegamento potrebbe richiedere un po' più di tempo. Vedrai un **indicatore di avanzamento** (*linea di stato arancione*) che mostra lo stato del collegamento.
- Una volta completato il collegamento, tocca **Applica** per utilizzare la traccia modificata per la navigazione.

### Collegamento automatico alle strade {#automatic-attachment-to-the-roads}

OsmAnd aggancia automaticamente i percorsi alle strade quando si utilizza lo strumento **Pianifica un percorso**:

- I **Waypoint** si allineano automaticamente alla strada disponibile più vicina (*eccetto per il [Percorso in linea retta](../../navigation/routing/straight-line-routing.md) e il [Percorso diretto al punto](../../navigation/routing/direct-to-point-routing.md)*).
- Se non vengono rilevate strade (ad esempio, in ambienti fuoristrada), il percorso seguirà **segmenti in linea retta**.
- È possibile **regolare manualmente** il percorso trascinando i waypoint in posizione diverse.

Per impostazione predefinita, la funzione **Collega alle strade** viene eseguita **automaticamente** quando viene selezionata una traccia per la navigazione. È possibile modificare questa impostazione secondo necessità. Per maggiori dettagli, fare riferimento a [Guida dettagliata della traccia](../guidance/navigation-settings.md#detailed-track-guidance) nell'articolo *Impostazioni di navigazione*.


## Punti {#points}

### Punto di partenza / arrivo {#start--finish-point}

È possibile specificare il punto di partenza e di arrivo di un percorso diverso da quello di partenza/arrivo specificato nel file GPX. Basta cambiarlo come si fa per la [Navigazione](../setup/route-navigation.md#select-start-point).

Nel [menu Segui traccia](#follow-track-options), è possibile scegliere se si desidera navigare dalla posizione corrente al punto di partenza della traccia o al punto più vicino sulla traccia GPX.  Inoltre, è possibile scegliere il [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types) che verrà utilizzato per il segmento iniziale e finale del percorso.  

### Waypoint {#waypoints}

Se la traccia ha dei waypoint, è possibile utilizzare [Mostra lungo il percorso](../guidance/map-during-navigation.md#show-points-along-the-route) e la [Guida vocale](../guidance/voice-navigation.md#voice-settings) per ricevere notifiche sui Punti di Interesse. È possibile aggiungere **Waypoint** a una traccia esistente tramite il [Menu contestuale](../../map/map-context-menu.md#-add--edit-track-waypoint), la traccia deve essere visibile sulla mappa.

### Punti intermedi {#intermediate-points}

Quando si prepara o si naviga una traccia GPX, non è possibile aggiungere luoghi intermedi che si prevede di attraversare all'interno di quella traccia. È possibile assegnare solo punti di partenza e di arrivo in aggiunta alla traccia o al segmento che si intende seguire.

## Guida {#guidance}

La *Navigazione tramite traccia GPX* contiene le stesse [istruzioni vocali](../guidance/voice-navigation.md) della navigazione su percorso. Tuttavia, alcune svolte o rotatorie potrebbero non essere interpretate correttamente perché non ci sono informazioni sugli incroci stradali in GPX, ad eccezione dei file GPX creati da OsmAnd. Per eliminare questi problemi, è necessario utilizzare la funzione [Collega alle strade](#attach-to-the-roads).  

Durante la navigazione, è possibile utilizzare varie opzioni come lo zoom avanti o indietro, lo spostamento della mappa o il passaggio a uno stile di mappa diverso. Se ci si allontana dalla traccia, OsmAnd ricalcolerà automaticamente il percorso per riportarvi sulla traccia. È anche possibile regolare la velocità della traccia e impostare avvisi sonori per l'avvicinamento a punti o deviazioni dal percorso.  


## Articoli correlati {#related-articles}

- [Parametri del percorso](../routing/osmand-routing.md#routing-types)
- [Preparazione del percorso](./route-navigation.md)
- [Dettagli del percorso](./route-details.md)
- [Navigazione tramite punti di riferimento](./markers-navigation.md)
- [Impostazioni di navigazione](../guidance/navigation-settings.md)
- [Schermata della mappa durante la navigazione](../guidance/map-during-navigation.md)
- [Istruzioni vocali / Notifiche](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)