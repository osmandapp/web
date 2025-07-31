---
source-hash: ae9687e6f1f23d70428677a5ebd5a73f6a67a71286137aec6ff175aad5589758
sidebar_position: 2
title: Navigare tramite traccia
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

L'opzione *Navigazione tramite traccia* (GPX) consente di seguire un percorso o una traccia predefiniti su una mappa. Può essere particolarmente utile per attività all'aperto come escursioni, ciclismo o guida fuoristrada, dove avere un percorso pianificato migliora la sicurezza e l'efficienza. Se si viaggia in un gruppo organizzato, questa funzione aiuta te e ogni membro del gruppo ad avere le stesse informazioni sul percorso degli altri.

L'opzione *Navigazione tramite traccia* può essere utilizzata anche nella vita di tutti i giorni. Puoi utilizzare una [traccia registrata](../../plugins/trip-recording.md) in precedenza o [creare una traccia](../../personal/tracks/manage-tracks.md#create-a-track) e condividerla con la tua famiglia o i tuoi amici invece di spiegare loro il percorso. Puoi anche utilizzare i [percorsi sulla mappa OsmAnd](../../../../blog/routes/) per la navigazione. Come evidenziarli sulla mappa e cosa significano i loro colori è descritto nella sezione [Percorsi](../../map/vector-maps.md#routes) dell'articolo *Mappe vettoriali*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Schermata Navigazione tramite traccia Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Schermata Navigazione tramite traccia iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Selezionare la traccia {#select-the-track}

Prima di utilizzare l'opzione *Navigazione tramite traccia*, è necessario [visualizzare la traccia sulla mappa](../../map/tracks/index.md#display-tracks-on-the-map). OsmAnd supporta la traccia come linea (**Geometria**) e la traccia come percorso (**Percorso**) o una combinazione di essi (**OsmAnd** tramite [Pianifica percorso](../../plan-route/create-route.md)). Se hai una traccia come raccolta di **Waypoint**, puoi utilizzare la [Navigazione marcatori](./markers-navigation.md).


- La traccia **Geometria** avrà una navigazione molto basilare per impostazione predefinita e non fornirà svolte precise, nomi di strade e corsie di svolta. Per ottenere le informazioni mancanti, è necessario utilizzare lo strumento [Allega alle strade](#attach-to-the-roads).

- La traccia **Percorso** calcolerà il percorso tra i punti del percorso in base al profilo selezionato. In pratica, tutti i punti del percorso saranno considerati punti intermedi. Se il tuo percorso è composto da più di 50 punti, è molto probabile che sia una traccia **Geometria** configurata in modo errato.

- La traccia **OsmAnd** è composta sia da parti geometriche che da parti di percorso, ed è adatta a fornire esattamente la stessa guida della navigazione predefinita. Queste tracce sono prodotte da [Pianifica percorso](../../plan-route/create-route.md) o dalla [versione Web](../../web/index.md). È possibile salvare nuovamente questa traccia come traccia di sola **Geometria** come [**Semplificata**](../../plan-route/create-route.md#save-route) per essere utilizzata in programmi di terze parti.


### Avviare la navigazione GPX {#start-gpx-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Selezionare la traccia per navigare Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Selezionare la traccia per navigare Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Selezionare la traccia per navigare iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Selezionare la traccia per navigare iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

La navigazione su una traccia può essere avviata utilizzando il pulsante di azione rapida nel [menu contestuale della traccia](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) (aperto selezionando una delle [tracce evidenziate](./route-navigation.md#history-of-previous-routes) sulla mappa, o toccando un file di traccia nella sezione [I miei luoghi](../../personal/myplaces.md) del *Menu principale*) o dal menu di navigazione, che si apre toccando:

- [*Pulsante Navigazione*](../../widgets/map-buttons.md#directions) sulla schermata della mappa.
- *Sezione Navigazione* nel *Menu principale* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- Nel [*menu Navigazione*](./route-navigation.md#navigation-menu) vai a *<Translate android="true" ids="shared_string_settings,follow_track"/>*.

### Scegliere i segmenti {#choose-segments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Segmenti Android](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segmenti iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

Per la navigazione, se la traccia selezionata è composta da più segmenti o tracce, è possibile selezionare un segmento specifico o l'intero file di traccia GPX. Durante l'[**importazione**](../../personal/tracks/manage-tracks.md#import) è possibile scegliere se salvarlo in un unico file o in più file.


### Opzioni Segui Traccia {#follow-track-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![Schermata Navigazione tramite traccia Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![Schermata Navigazione tramite traccia iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **Modifica** (*icona a matita* accanto al nome della traccia) — Apre la traccia nello strumento [*Pianifica un percorso*](../../plan-route/create-route.md).
- **<Translate android="true" ids="select_another_track"/>** — Seleziona un file GPX diverso per la navigazione.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — Se questa impostazione è abilitata, la direzione del movimento lungo la traccia viene invertita.
- **<Translate android="true" ids="attach_to_the_roads"/>** — Configura l'[allegato di una traccia alle strade](#attach-to-the-roads).
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — Puoi selezionare come navigare dalla mia posizione alla traccia:
al *<Translate android="true" ids="start_of_the_track"/>* o al *<Translate android="true" ids="nearest_point"/>* sulla traccia.
- Scegli il **tipo di navigazione** per il primo e l'ultimo segmento: costruisci una [*linea retta*](../routing/straight-line-routing.md) o usa il [*tipo di routing*](../routing/osmand-routing.md#routing-types) dal profilo corrente.


### Allega alle strade {#attach-to-the-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Allega alle strade 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Allega alle strade 1 ios](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

La funzione **Allega alle strade** allinea la tua traccia alla strada più vicina per un'esperienza di navigazione più precisa. Disponibile nel menu [Segui traccia](#follow-track-options), questa funzione assicura che il tuo percorso segua la rete stradale appropriata in base al *profilo di navigazione* selezionato e alla **distanza di soglia**. Questo migliora sia i [dettagli del percorso](../setup/route-details.md) che le [istruzioni vocali](#guidance) durante la navigazione.

***Come funziona:***

- OsmAnd abbina ogni punto della traccia alla **strada più vicina** entro la **distanza di soglia** impostata (predefinita: **50 metri**).
- La **distanza di soglia** definisce la massima distanza consentita tra un punto della traccia GPS e una strada per l'allegato.
- **Riallegato automatico** — Quando si cambiano i **profili di navigazione**, OsmAnd riallega automaticamente la traccia alle strade adatte al nuovo profilo.
- Per tracce grandi con molti punti, il processo di allegato potrebbe richiedere un po' più di tempo. Verrà visualizzato un **indicatore di progresso** (*linea di stato arancione*) che mostra lo stato dell'allegato.
- Una volta completato l'allegato, tocca **Applica** per utilizzare la traccia modificata per la navigazione.

#### Allegato automatico alle strade {#automatic-attachment-to-the-roads}

OsmAnd aggancia automaticamente i percorsi alle strade quando si utilizza lo strumento **Pianifica un percorso**:

- I **Waypoint** si allineano automaticamente alla strada disponibile più vicina (*eccetto per il [Routing in linea retta](../../navigation/routing/straight-line-routing.md) e il [Routing diretto al punto](../../navigation/routing/direct-to-point-routing.md)*).
- Se non vengono rilevate strade (ad esempio, in ambienti fuoristrada), il percorso seguirà **segmenti in linea retta**.
- È possibile **regolare manualmente** il percorso trascinando i waypoint in posizioni diverse.

Per impostazione predefinita, la funzione **Allega alle strade** viene eseguita **automaticamente** quando una traccia viene selezionata per la navigazione. È possibile modificare questa impostazione secondo necessità. Per maggiori dettagli, fare riferimento a [Guida dettagliata della traccia](../guidance/navigation-settings.md#detailed-track-guidance) nell'articolo *Impostazioni di navigazione*.


## Punti {#points}

### Punto di partenza/arrivo {#start--finish-point}

È possibile specificare il punto di partenza e di arrivo per un percorso diverso da quello specificato nel file GPX. Basta modificarlo come si fa per la [Navigazione](../setup/route-navigation.md#select-starting-point).

Nel [menu Segui traccia](#follow-track-options), puoi scegliere se vuoi navigare dalla tua posizione corrente al punto di partenza della traccia o al punto più vicino sulla traccia GPX. Inoltre, puoi scegliere [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types) che verrà utilizzato per il segmento di inizio e fine del tuo percorso.

### Waypoint {#waypoints}

Se la traccia ha dei waypoint, puoi usare [Mostra lungo il percorso](../guidance/map-during-navigation.md#show-points-along-the-route) e [Guida vocale](../guidance/voice-navigation.md#voice-settings) per ricevere notifiche sui Punti di Interesse. Puoi aggiungere **Waypoint** a una traccia esistente tramite il [Menu contestuale](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint), la traccia deve essere visibile sulla mappa.

### Punti intermedi {#intermediate-points}

Quando si prepara o si naviga una traccia GPX, non è possibile aggiungere luoghi intermedi che si prevede di attraversare all'interno di quella traccia. È possibile assegnare solo punti di inizio e fine oltre alla traccia o al segmento che si intende seguire.

## Guida {#guidance}

La *Navigazione tramite traccia GPX* contiene le stesse [istruzioni vocali](../guidance/voice-navigation.md) della navigazione del percorso. Tuttavia, alcune svolte o rotatorie potrebbero non essere interpretate correttamente perché non ci sono informazioni sulle intersezioni stradali in GPX, ad eccezione dei file GPX creati da OsmAnd. Per eliminare questi problemi, è necessario utilizzare la funzione [Allega alle strade](#attach-to-the-roads).

Durante la navigazione, puoi utilizzare varie opzioni come lo zoom avanti o indietro, lo scorrimento della mappa o il passaggio a uno stile di mappa diverso. Se devii dalla traccia, OsmAnd ricalcolerà automaticamente il percorso per riportarti in pista. Puoi anche regolare la velocità della traccia e impostare avvisi acustici per i punti di avvicinamento o le deviazioni dal percorso.


## Articoli correlati {#related-articles}

- [Parametri del percorso](../routing/osmand-routing.md#routing-types)
- [Preparazione del percorso](./route-navigation.md)
- [Dettagli del percorso](./route-details.md)
- [Navigazione per marcatori](./markers-navigation.md)
- [Impostazioni di navigazione](../guidance/navigation-settings.md)
- [Schermata della mappa durante la navigazione](../guidance/map-during-navigation.md)
- [Suggerimenti vocali / Notifiche](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Ultimo aggiornamento: aprile 2025*