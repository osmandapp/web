---
source-hash: 5b1f516001588d13044bc97b434ef0d12f0f32e20295902b3d61ccfb9d49d0f5
sidebar_position: 2
title:  Navigazione per percorso
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

L'opzione *Navigazione per percorso* (GPX) consente di seguire un percorso o una traccia predefinita su una mappa. Può essere particolarmente utile per attività all'aperto come escursionismo, ciclismo o guida fuoristrada, dove avere un percorso pianificato migliora la sicurezza e l'efficienza. Se viaggi in un gruppo organizzato, questa funzione aiuta te e ogni membro del gruppo ad avere le stesse informazioni sul percorso degli altri.

L'opzione *Navigazione per percorso* può essere utilizzata anche nella vita di tutti i giorni. Puoi utilizzare un [percorso registrato](../../plugins/trip-recording.md) in precedenza o [creare un percorso](../../personal/tracks/manage-tracks.md#create-a-track) e condividerlo con la tua famiglia o i tuoi amici invece di spiegare loro il percorso. Puoi anche utilizzare i [percorsi sulla mappa OsmAnd](../../../../blog/routes/) per la navigazione. Come evidenziarli sulla mappa e cosa significano i loro colori è descritto nella sezione [Percorsi](../../map/vector-maps.md#routes) dell'articolo *Mappe vettoriali*.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Schermata Navigazione per percorso Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Schermata Navigazione per percorso iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Seleziona il percorso {#select-the-track}

Prima di utilizzare l'opzione *Navigazione per percorso*, devi [visualizzare il percorso sulla mappa](../../map/tracks/index.md#display-tracks-on-the-map). OsmAnd supporta il percorso come linea (**Geometria**) e il percorso come rotta (**Rotta**) o una combinazione di essi (**OsmAnd** tramite [Pianifica percorso](../../plan-route/create-route.md)). Se hai un percorso come raccolta di **Waypoint**, puoi utilizzare la [Navigazione per marcatori](./markers-navigation.md).


- Il percorso **Geometria** avrà una navigazione molto basilare per impostazione predefinita e non fornirà svolte accurate, nomi di strade e corsie di svolta. Per ottenere le informazioni mancanti, è necessario utilizzare lo strumento [Allega alle strade](#attach-to-the-roads).

- Il percorso **Rotta** calcolerà la rotta tra i punti di rotta in base al profilo selezionato. Fondamentalmente, tutti i punti di rotta saranno considerati come punti intermedi. Se la tua rotta è composta da > 50 punti, è molto probabile che si tratti di un percorso **Geometria** configurato in modo errato.

- Il percorso **OsmAnd** è costituito sia da parti di geometria che di rotta ed è adatto a fornire esattamente la stessa guida della navigazione per impostazione predefinita. Questi percorsi sono prodotti da [Pianifica percorso](../../plan-route/create-route.md) o dalla [versione Web](../../web/index.md). È possibile salvare nuovamente questo percorso come percorso solo **Geometria** come [**Semplificato**](../../plan-route/create-route.md#save-route) per essere utilizzato in programmi di terze parti.


### Avvia navigazione GPX {#start-gpx-navigation}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Seleziona percorso per navigare Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Seleziona percorso per navigare Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seleziona percorso per navigare iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Seleziona percorso per navigare iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

La navigazione su un percorso può essere avviata utilizzando il pulsante di azione rapida nel [menu contestuale del percorso](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) (aperto selezionando uno dei [percorsi evidenziati](./route-navigation.md#history-of-previous-routes) sulla mappa, o toccando un file di percorso nella sezione [I miei luoghi](../../personal/myplaces.md) del *Menu principale*) o dal menu di navigazione, che si apre toccando:

- [*Pulsante Navigazione*](../../widgets/map-buttons.md#directions) nella schermata della mappa.
- *Sezione Navigazione* nel *Menu principale* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- Nel [*Menu di navigazione*](./route-navigation.md#navigation-menu) vai a *<Translate android="true" ids="shared_string_settings,follow_track"/>*.

### Scegli segmenti {#choose-segments}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Segmenti Android](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segmenti iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

Per la navigazione, se il percorso selezionato è composto da più segmenti o percorsi, puoi selezionare un segmento specifico o l'intero file di percorso GPX. Quando [**importi**](../../personal/tracks/manage-tracks.md#import) puoi scegliere se salvarlo in un singolo file o in più file.


### Opzioni Segui percorso {#follow-track-options}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![Schermata Navigazione per percorso Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![Schermata Navigazione per percorso iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **Modifica** (*icona matita* accanto al nome del percorso) — Apre il percorso nello strumento [*Pianifica un percorso*](../../plan-route/create-route.md).
- **<Translate android="true" ids="select_another_track"/>** — Seleziona un file GPX diverso per la navigazione.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — Se questa impostazione è abilitata, la direzione di movimento lungo il percorso viene invertita.
- **<Translate android="true" ids="attach_to_the_roads"/>** — Configura [l'aggancio del percorso alle strade](#attach-to-the-roads).
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — Puoi selezionare come navigare dalla tua posizione al percorso:
al *<Translate android="true" ids="start_of_the_track"/>* o al *<Translate android="true" ids="nearest_point"/>* sul percorso.
- Scegli il **Tipo di navigazione** per il primo e l'ultimo segmento: costruisci una [*linea retta*](../routing/straight-line-routing.md) o usa il [*tipo di routing*](../routing/osmand-routing.md#routing-types) dal profilo corrente.


### Aggancia alle strade {#attach-to-the-roads}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Aggancia alle strade 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aggancia alle strade 1 ios](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

La funzione **Aggancia alle strade** allinea il tuo percorso alla strada più vicina per un'esperienza di navigazione più precisa. Disponibile nel menu [Segui percorso](#follow-track-options), questa funzione garantisce che il tuo percorso segua la rete stradale appropriata in base al *profilo di navigazione* selezionato e alla **distanza di soglia**. Ciò migliora sia i [dettagli del percorso](../setup/route-details.md) che le [istruzioni vocali](#guidance) durante la navigazione.

***Come funziona:***

- OsmAnd abbina ogni punto del percorso alla **strada più vicina** entro la **distanza di soglia** impostata (impostazione predefinita: **50 metri**).
- La **distanza di soglia** definisce la distanza massima consentita tra un punto del percorso GPS e una strada per l'aggancio.
- **Riaggancio automatico** — Quando si cambiano i **profili di navigazione**, OsmAnd riaggancia automaticamente il percorso alle strade adatte al nuovo profilo.
- Per percorsi di grandi dimensioni con molti punti, il processo di aggancio potrebbe richiedere un po' più di tempo. Verrà visualizzato un **indicatore di avanzamento** (*linea di stato arancione*) che mostra lo stato dell'aggancio.
- Dopo che l'aggancio è completo, tocca **Applica** per utilizzare il percorso modificato per la navigazione.

#### Aggancio automatico alle strade {#automatic-attachment-to-the-roads}

OsmAnd aggancia automaticamente i percorsi alle strade quando si utilizza lo strumento **Pianifica un percorso**:

- I **Waypoint** si allineano automaticamente alla strada più vicina disponibile (*eccetto per il [Routing in linea retta](../../navigation/routing/straight-line-routing.md) e il [Routing diretto a punto](../../navigation/routing/direct-to-point-routing.md)*).
- Se non vengono rilevate strade (ad esempio, in ambienti fuoristrada), il percorso seguirà **segmenti in linea retta**.
- Puoi **regolare manualmente** il percorso trascinando i waypoint in posizioni diverse.

Per impostazione predefinita, la funzione **Aggancia alle strade** viene eseguita **automaticamente** quando un percorso viene selezionato per la navigazione. Puoi modificare questa impostazione secondo necessità. Per maggiori dettagli, consulta [Guida dettagliata del percorso](../guidance/navigation-settings.md#detailed-track-guidance) nell'articolo *Impostazioni di navigazione*.


## Punti {#points}

### Punto di partenza/arrivo {#start--finish-point}

Puoi specificare un punto di partenza e di arrivo per un percorso diverso da quello specificato nel file GPX. Basta cambiarlo come fai per la [Navigazione](../setup/route-navigation.md#select-starting-point).

Nel [menu Segui percorso](#follow-track-options), puoi scegliere se vuoi navigare dalla tua posizione corrente al punto di partenza del percorso o al punto più vicino sul percorso GPX. Inoltre, puoi scegliere [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types) che verrà utilizzato per il segmento di partenza e di arrivo del tuo percorso.

### Waypoint {#waypoints}

Se il percorso ha dei waypoint, puoi utilizzare [Mostra lungo il percorso](../guidance/map-during-navigation.md#show-points-along-the-route) e [Guida vocale](../guidance/voice-navigation.md#voice-settings) per essere avvisato dei punti di interesse. Puoi aggiungere **Waypoint** a un percorso esistente tramite il [Menu contestuale](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint), il percorso deve essere visibile sulla mappa.

### Punti intermedi {#intermediate-points}

Quando prepari o navighi un percorso GPX, non puoi aggiungere luoghi intermedi che prevedi di attraversare all'interno di quel percorso. Puoi solo assegnare punti di partenza e di arrivo in aggiunta al percorso o al segmento che intendi seguire.

## Guida {#guidance}

La *Navigazione per percorso GPX* contiene le stesse [istruzioni vocali](../guidance/voice-navigation.md) della navigazione per rotta. Tuttavia, alcune svolte o rotatorie potrebbero non essere interpretate correttamente perché non ci sono informazioni sugli incroci stradali nel GPX, ad eccezione dei file GPX creati da OsmAnd. Per eliminare questi problemi, dovresti utilizzare la funzione [Aggancia alle strade](#attach-to-the-roads).

Durante la navigazione, puoi utilizzare varie opzioni come ingrandire o rimpicciolire, spostare la mappa o passare a uno stile di mappa diverso. Se devii dal percorso, OsmAnd ricalcolerà automaticamente la rotta per riportarti in carreggiata. Puoi anche regolare la velocità del percorso e impostare avvisi sonori per i punti di avvicinamento o le deviazioni dal percorso.


## Articoli correlati {#related-articles}

- [Parametri del percorso](../routing/osmand-routing.md#routing-types)
- [Preparazione del percorso](./route-navigation.md)
- [Dettagli del percorso](./route-details.md)
- [Navigazione per marcatori](./markers-navigation.md)
- [Impostazioni di navigazione](../guidance/navigation-settings.md)
- [Schermata della mappa durante la navigazione](../guidance/map-during-navigation.md)
- [Istruzioni vocali / Notifiche](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Ultimo aggiornamento: Aprile 2025*