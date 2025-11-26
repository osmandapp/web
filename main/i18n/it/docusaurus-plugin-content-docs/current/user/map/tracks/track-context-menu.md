---
source-hash: c3e5ac67f7089096f5b71e7e0201440bab4f393bc16c357be3085327287a1bd3
sidebar_position: 4
title:  Menu Contestuale Traccia
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

Il *Menu contestuale della traccia* fornisce informazioni sulla *[Traccia](../../personal/tracks/index.md)* sia in forma testuale che [grafica](#altitude--speed-graphs). Consente di aggiungere informazioni, apportare modifiche, modificare ed eseguire varie altre azioni con la traccia. È possibile accedere al *menu contestuale della traccia* semplicemente toccando la traccia desiderata sulla mappa o utilizzando il menu *[I miei luoghi](../../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*). Potrebbe essere necessario aprire la cartella della traccia e selezionare la traccia desiderata toccandola.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Panoramica menu contestuale traccia Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Panoramica menu contestuale traccia iOS](@site/static/img/personal/tracks/track_context_overview_2_ios.png)

</TabItem>

</Tabs>


## Panoramica Traccia {#track-overview}

Quando si tocca una traccia, si apre la prima schermata del *Menu contestuale della traccia* - la scheda *Panoramica*. In questa scheda è possibile trovare un riepilogo della traccia scelta (*[Pannello informazioni](#info-panel)*) ed eseguire le azioni più comuni con la traccia utilizzando il *[Menu azioni traccia](#track-actions)*. È possibile visualizzare la [descrizione e le informazioni di servizio](#description-and-info) sulla traccia tirando verso l'alto la scheda Panoramica.

<!--
You can [short tap](../../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map. 
-->

### Pannello Informazioni {#info-panel}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pannello informazioni panoramica Android](@site/static/img/personal/tracks/track_context_info_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pannello informazioni panoramica iOS](@site/static/img/personal/tracks/track_context_info_panel_ios.png)

</TabItem>

</Tabs>

Nella parte superiore del pannello informativo, è possibile visualizzare il nome della traccia e il simbolo utilizzato per contrassegnarla (*solo Android*). Il nome della traccia può essere modificato utilizzando la funzione di ridenominazione nel [menu Opzioni](#options). Alcune tracce (principalmente le *[Guide di viaggio](../../plan-route/travel-guides.md#manage-as-gpx-track)*) possono avere una breve *[descrizione](#description-and-info)* e/o un'immagine sotto il *Nome della traccia*. Una freccia mostra la *Direzione verso il punto più vicino della traccia* dalla [Mia posizione](../../map/interact-with-map.md#my-location-and-zoom).  

Il pannello informativo fornisce anche informazioni su quanto segue:

- *<Translate android="true" ids="distance"/>*. Mostra la lunghezza della traccia.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. Visualizza la somma totale delle salite e delle discese durante il viaggio.
- *<Translate android="true" ids="altitude_range"/>*. Indica l'altitudine minima e massima di una traccia.  

Nel caso in cui la traccia sia stata creata in OsmAnd o in qualsiasi altra app di tracciamento (quindi i suoi punti hanno i tag [`time` e `speed`](../../plugins/trip-recording#recorded-gpx-file)), il pannello informativo conterrà anche informazioni su *<Translate android="true" ids="average_speed"/>*, *<Translate android="true" ids="max_speed"/>*, *<Translate android="true" ids="map_widget_trip_recording_duration"/>* (l'intervallo di tempo tra il punto iniziale e finale della traccia) e *<Translate android="true" ids="shared_string_time_moving"/>* (la somma del tempo durante la guida).

**Nota:** Per le tracce registrate, la Durata mostra il tempo di viaggio effettivo basato sui timestamp. Per le tracce pianificate, la Durata mostra il tempo stimato calcolato dalla lunghezza del percorso e dalla velocità media del profilo di navigazione selezionato, se l'intero percorso utilizza un profilo e non contiene segmenti in linea retta.


### Azioni Traccia {#track-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Panoramica menu contestuale traccia Android 3](@site/static/img/personal/tracks/track_context_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Panoramica menu contestuale traccia iOS 3](@site/static/img/personal/tracks/track_context_actions_ios.png)

</TabItem>

</Tabs>

- Pulsanti **Mostra / nascondi**. Modifica la visibilità della traccia sulla mappa.
- [Aspetto](./appearance.md). Personalizza l'aspetto della tua traccia.
- **Modifica traccia** (*Android*). Apre la traccia nello strumento [Pianifica un percorso](../../plan-route/create-route.md).
- **Esporta** (*iOS*). Consente di [esportare una traccia](../../personal/tracks/manage-tracks.md#export).
- **Indicazioni**. Apre la traccia in modalità *[Navigazione](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)*.


### Opzioni {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Opzioni menu traccia Android](@site/static/img/personal/tracks/track_menu_options_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Opzioni menu traccia iOS](@site/static/img/personal/tracks/track_menu_options_ios.png)  

</TabItem>

</Tabs>

Il menu **Opzioni** consente di gestire e modificare la traccia selezionata con vari strumenti e impostazioni.  

- **<Translate android="true" ids="shared_string_show_on_map"/>** – Controlla la visibilità della traccia sulla mappa.
- **<Translate android="true" ids="shared_string_appearance"/>** – Apre il [menu Aspetto](../tracks/appearance.md) per personalizzare il colore, la larghezza e la trasparenza della traccia.
- **<Translate android="true" ids="follow_track"/>** (*Android*) / **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) – Avvia la [navigazione per traccia](../../navigation/setup/gpx-navigation.md), allineando il percorso con la traccia selezionata.

<br/>

- **<Translate android="true" ids="join_segments"/>** (*Solo Android*) – Unisce i segmenti di traccia per riempire le lacune.
- **<Translate android="true" ids="analyze_on_map"/>**. Apre lo strumento [Analizza sulla mappa](../tracks/index.md#analyze-track-on-map) per ispezionare l'altitudine, la velocità e la distanza della traccia.
- **<Translate android="true" ids="analyze_by_intervals"/>** (*Solo Android*) - Analizza la traccia per [intervalli](./track-context-menu.md#analyze-by-intervals) di tempo o distanza.

<br/>

- **<Translate android="true" ids="shared_string_share"/>** – Esporta la traccia selezionata in formato GPX tramite il menu Condividi del sistema.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - [Carica](../../plugins/osm-editing.md#upload-gps-track) la traccia selezionata su OpenStreetMap.

<br/>

- **<Translate android="true" ids="edit_track"/>** - Apre lo strumento [Pianifica percorso](../../plan-route/create-route.md) per modificare la traccia.
- **Duplica traccia** (*Solo iOS*) – Crea e salva una copia della traccia.
- **<Translate android="true" ids="rename_track"/>** – Consente di modificare il nome della traccia.
- **<Translate android="true" ids="change_folder"/>** – Sposta la traccia in un'altra cartella o ne crea una nuova.

<br/>

- **<Translate android="true" ids="shared_string_gps_filter"/>** (*Solo Android*) - Consente di [filtrare i punti della traccia](#gps-filter) per affinare la precisione.
- **<Translate android="true" ids="altitude_correction"/>** (*Solo Android*) - Per [ricevere i dati di altitudine](#calculate-missing-elevation), [collegare la traccia alle strade](../../navigation/setup/gpx-navigation.md#attach-to-the-roads) o calcolarla offline (sono necessarie le [Mappe del terreno](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*Solo Android*) - [Simula la tua posizione](../../plugins/development.md#gpx-track-simulation) utilizzando una traccia GPX.

<br/>

- **<Translate android="true" ids="shared_string_delete"/>**. Elimina la traccia.


### Descrizione e Informazioni {#description-and-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Descrizione e Informazioni Android](@site/static/img/personal/tracks/track_context_overview_1_andr.png)  ![Descrizione e Informazioni Android](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Descrizione di una traccia iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)

</TabItem>

</Tabs>

Questa sezione della scheda *Panoramica* visualizza i ***dati dei tag*** e ***tutte le informazioni generali***.

- **Descrizione**. Il pulsante *<Translate android="true" ids="shared_string_edit"/>* (*Android*) / *<Translate ios="true" ids="context_menu_edit_descr"/>* (*iOS*) viene utilizzato per modificare la descrizione della traccia. Tag `desc`.

- **Generale**. Contiene informazioni sulla *dimensione del file GPX*, sulla *cartella del file* e sulla *data di creazione* con il tag `time`.

- **Info**. Tag: *Parole chiave* - `keywords`, &nbsp;*Link* - `link`, &nbsp;*Attività* - `activities`.

- **Autore**. Tag: *Autore* - `author`, &nbsp;*Nome* - `name`, &nbsp;*Indirizzo e-mail* - `email`, &nbsp;*Link* - `link`.

- **Copyright**. Tag: *Copyright* - `copyright`, &nbsp;*Autore* - `author`, &nbsp;*Anno* - `year`, &nbsp;*Licenza* - `license`.

- **Aggiuntivo**. Tutti i tag della sezione ***estensioni***:&nbsp; `address`,&nbsp; `icon`,&nbsp; `background`,&nbsp; `color`,&nbsp; `country`,&nbsp; `state`,&nbsp; `telephone`,&nbsp; `postcode`,&nbsp; `start_date`,&nbsp; `desc`.
  

<details>

<summary>Esempio di codice XML di un file GPX</summary>

```xml
 <metadata>
    <name>GPX File Example</name>
    <desc>Example GPX file with various tags</desc>
    <author>
      <name>Author Name</name>
      <email id="your" domain="email.com" />
      <link href="https://yourwebsite.com" />
    </author>
    <copyright author="OsmAnd B.V">
      <year>2023</year>
      <license>https://github.com/osmandapp/OsmAnd/blob/master/LICENSE</license>
    </copyright>
    <link href="http://docs.osmand.net" />
    <time>2023-12-13T12:00:00Z</time>
    <keywords>gpx, osmand, hiking</keywords>
    <extensions>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:icon>place_town</osmand:icon>
      <osmand:background>circle</osmand:background>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:country>United States</osmand:country>
      <osmand:state>Virginia</osmand:state>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      <osmand:desc>Boardwalks are walkways that cross over water or marshy ground. They are typically made of wood or other smooth materials and are accessible to wheelchairs. Please check with your park to see if there are accessible trails available. Boardwalks are often near parking lots, so expect large crowds.</osmand:desc>
    </extensions>
  </metadata>

```

</details>


### Tipo di Attività della Traccia {#ttrack-activity-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tipo di Attività della Traccia](@site/static/img/personal/tracks/track_info_activity_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tipo di Attività della Traccia](@site/static/img/personal/tracks/track_info_activity_ios.png)

</TabItem>

</Tabs>


La funzione *Attività* in OsmAnd consente di etichettare le tracce GPX registrate con attività specifiche per ulteriori analisi e organizzazione in cartelle.

- [Tag di attività per tracce GPX](../../plugins/trip-recording.md#recording-settings). Le tracce registrate ricevono automaticamente un tipo di attività in base al profilo selezionato, il che aiuta a categorizzarle e filtrarle in seguito. È possibile modificare l'attività manualmente se necessario.
- [Filtro attività](../../personal/tracks/smart-folder.md#search-filter). È possibile filtrare le tracce GPX registrate per attività, il che consente di concentrarsi sulla ricerca di tipi specifici di registrazioni, come tutte le tracce di ciclismo o escursionismo.
- [Gestisci tipi di attività](../../personal/tracks/manage-tracks.md#selection-mode). È possibile modificare il tipo di attività per cartelle o tracce selezionate utilizzando la modalità di selezione nella scheda Tracce del menu I miei luoghi.
- **Elenco attività**. Le categorie e i gruppi di attività sono definiti nelle risorse di OsmAnd. Per sviluppatori e contributori, l'elenco delle attività è mantenuto in un formato strutturato su [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json), che dettagli i gruppi e i tipi di attività disponibili.


## Grafici Altitudine / Velocità {#altitude--speed-graphs}

Nella scheda *<Translate android="true" ids="shared_string_gpx_track"/>*, è possibile trovare informazioni sulla traccia in forma grafica. Utilizzando l'interruttore, è possibile scegliere quali dati visualizzare sul grafico: dati separati su *[<Translate android="true" ids="altitude"/>](#altitude)*, sulla *[Velocità](#speed)* (questa opzione è disponibile solo per le tracce registrate) o visualizzarli tutti insieme (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

Interazione con il grafico:

- ***Posizionare un punto sul grafico***. Se si desidera visualizzare le informazioni in un punto particolare di una traccia, è possibile toccare un punto qualsiasi del grafico e apparirà un puntatore con i valori. Allo stesso tempo, sulla mappa apparirà un indicatore blu che punta a quella posizione sulla traccia.
- ***Zoom avanti/indietro***. È possibile utilizzare i [movimenti a due dita](../../map/interact-with-map.md#gestures) per ingrandire e ridurre per una visualizzazione più dettagliata. Dopo aver ingrandito, è possibile spostare il grafico a destra e a sinistra, corrispondente allo spostamento in avanti e indietro lungo il percorso.
- ***Informazioni aggiuntive***. Il lato destro del grafico contiene dati sull'altitudine più bassa, più alta e media, sulla pendenza e sulla velocità. Nella parte inferiore del grafico, è possibile vedere i segni della distanza.


### Informazioni di Panoramica {#overview-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Grafici menu contestuale traccia Android](@site/static/img/personal/tracks/track_menu_graph_1_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Grafici menu contestuale traccia iOS](@site/static/img/personal/tracks/track_menu_graph_2_new_ios.png)

</TabItem>

</Tabs>

Nella scheda **Panoramica**, è possibile vedere parametri come:

- *<Translate android="true" ids="distance"/>*. La somma della distanza totale percorsa sulla traccia, o la lunghezza della traccia stessa.
- *<Translate android="true" ids="map_widget_trip_recording_duration"/>*. L'intervallo di tempo tra il punto iniziale e finale della traccia.
- *<Translate android="true" ids="shared_string_start_time"/>* L'ora esatta in cui inizia la registrazione della traccia.
- *<Translate android="true" ids="shared_string_end_time"/>*. L'ora di fine della registrazione della traccia.

I **pulsanti** attivi danno accesso ad azioni come:

- Il pulsante **<Translate android="true" ids="analyze_on_map"/>** apre il [menu Analizza traccia](../tracks/index.md#analyze-track-on-map) per la traccia.
- Il pulsante **<Translate android="true" ids="shared_string_options"/>** apre un menu con:

  - *Modifica* apre la traccia nello strumento [Pianifica percorso](../../plan-route/index.md).
  - *Elimina* consente di rimuovere l'elemento della traccia selezionato.
  - *Dividi intervallo* apre la [funzione Dividi intervallo](#analyze-by-intervals) per la traccia.


### Velocità {#speed}

:::note Solo tracce registrate
Questa scheda può essere visibile solo sulle tracce registrate. I punti su questo tipo di traccia hanno i tag **[`speed`](../../plugins/trip-recording#recorded-gpx-file)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Grafico traccia Velocità Android](@site/static/img/personal/tracks/track_graph_speed_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Grafico traccia Velocità iOS](@site/static/img/personal/tracks/track_graph_speed_3_ios.png)

</TabItem>

</Tabs>

Il grafico **Velocità** visualizza metriche come:

- *<Translate android="true" ids="average_speed"/>*. Indica la velocità media durante il viaggio.
- *<Translate android="true" ids="max_speed"/>*. Mostra la velocità massima durante il viaggio.
- *<Translate android="true" ids="moving_time"/>*. Mostra il tempo totale durante il viaggio solo in movimento.
- *<Translate android="true" ids="distance_moving"/>*. Indica la distanza corretta del viaggio.


### Altitudine {#altitude}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Grafico traccia altitudine Android](@site/static/img/personal/tracks/track_graph_altitude_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Grafico traccia altitudine iOS](@site/static/img/personal/tracks/track_graph_altitude_2_ios.png)

</TabItem>

</Tabs>

Il grafico **Altitudine** visualizza metriche come:

- *<Translate android="true" ids="average_altitude"/>*. Indica l'altitudine media sul livello del mare lungo il percorso.
- *<Translate android="true" ids="altitude_range"/>*. L'altitudine più alta e più bassa registrata sul percorso.
- *<Translate android="true" ids="altitude_ascent"/>*. Il guadagno cumulativo di altitudine sul livello del mare lungo il percorso.
- *<Translate android="true" ids="altitude_descent"/>*. La perdita cumulativa di altitudine lungo il percorso.

**Ottieni dati di altitudine.**  
Se non ci sono *informazioni sull'altitudine* sul percorso, è possibile aggiungerle nei seguenti modi:

- *Pulsante Calcola altitudine → [Usa strade vicine](../../plan-route/create-route.md#get-elevation-data)*. Utilizza una mappa offline per trovare strade vicine e dati di altitudine. Consente di personalizzare la geometria della traccia.
- [Usa mappe del terreno](#calculate-missing-elevation). Utilizza le mappe del terreno per ottenere i dati di altitudine. La geometria della traccia rimane invariata.


### Calcola Altitudine Mancante {#calculate-missing-elevation}

:::note Abbonamento OsmAnd Pro
La funzione di calcolo dell'altitudine offline è disponibile solo per gli [**abbonati a OsmAnd Pro**](../../purchases/android.md#pro-features) <ProFeature />.
:::

<InfoAndroidOnly />

Questa funzione consente di calcolare il profilo altimetrico per una traccia GPX offline per qualsiasi terreno tra 70 gradi di latitudine nord e 70 gradi di latitudine sud, basandosi sui [dati delle mappe del terreno](../../plugins/topography.md#download-maps). *Le mappe del terreno (3D) devono essere state scaricate in precedenza*.

1. Scarica le [Mappe del terreno (3D)](../../plugins/topography.md#download-maps) per la regione richiesta.
2. Se la traccia non contiene dati di altitudine, vai al menu contestuale della traccia (*Menu contestuale traccia → <Translate android="true" ids="shared_string_gpx_track,altitude,calculate_altitude"/>*), seleziona *Usa mappe del terreno* e, dopo il calcolo, otterrai un grafico della traccia basato sui dati del terreno.  

    ![Grafico traccia altitudine Android](@site/static/img/personal/tracks/calculate_elevation_2.png)   ![Grafico traccia altitudine Android](@site/static/img/personal/tracks/calculate_elevation_10.png)   <!--![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_4.png)  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->  

3. Se stai creando un percorso con lo strumento [Pianifica un percorso](../../plan-route/create-route.md#graph) utilizzando il metodo *Linea retta* e non ci sono dati di altitudine sul grafico, devi:
    - Tocca *Ottieni dati di altitudine*, quindi seleziona *Usa mappe del terreno*.
    - Dopo il calcolo, otterrai il grafico completo Altitudine/Pendenza del tuo percorso basato sui dati del terreno.  

  ![Grafico traccia altitudine Android](@site/static/img/personal/tracks/calculate_elevation_9.png)   ![Grafico traccia altitudine Android](@site/static/img/personal/tracks/calculate_elevation_5.png)  


## Punti / Waypoint {#points--waypoints}

I waypoint sono uno dei tipi di punti disponibili sulla mappa. In generale, possono essere punti di traccia che fanno parte di file GPX. Una descrizione dettagliata è disponibile nell'articolo [punti sulla mappa](../../map/point-layers-on-map.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu contestuale traccia Punti Android](@site/static/img/personal/tracks/track_context_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu contestuale traccia Punti iOS](@site/static/img/personal/tracks/track_context_points_ios.png)

</TabItem>

</Tabs>

In questa scheda *Punti*:

- [Mostra i dati dei punti della traccia](#display-custom-gpx-tags) e modifica i punti della traccia (waypoint e punti del percorso), [eliminali e aggiungi](#points--waypoints) waypoint a una traccia.
- Crea e modifica [Gruppo (cartella) di punti](#waypoint-groups).


### Aggiungi Waypoint a una Traccia {#add-waypoint-to-a-track}

I waypoint possono essere aggiunti alla traccia attualmente in registrazione o a qualsiasi traccia da [*I miei luoghi → Elenco tracce*](../../personal/tracks/manage-tracks.md):

- Usa il [menu contestuale della mappa](../../map/map-context-menu.md#-add--edit-track-waypoint).
  - I waypoint vengono visualizzati automaticamente se la traccia selezionata è abilitata sulla mappa.
  - [Tocca a lungo](../../map/map-context-menu.md#select-any-point-long-tap) la mappa in una posizione scelta per creare un waypoint.
  - È possibile impostare le informazioni sul waypoint nel [menu contestuale della mappa](../../map/map-context-menu.md#-add--edit-track-waypoint) che si apre.

- Usa il pulsante [Aggiungi Waypoint](#points--waypoints) del menu contestuale della traccia.

- Aggiungi un waypoint come pulsante di [Azione rapida](../../widgets/quick-action.md#my-places).

### Crea Waypoint {#create-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aggiungi waypoint](@site/static/img/personal/tracks/add_waypoint_1_andr.png)  ![Aggiungi waypoint](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aggiungi waypoint](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png)  ![Aggiungi waypoint](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

Tocca il pulsante *Aggiungi Waypoint* per aprire la schermata di creazione del waypoint (questa schermata è simile al [Menu contestuale Preferiti](../../personal/favorites.md#create)).

1. **Aggiungi** il *Nome* del waypoint, l'*Indirizzo* della posizione selezionata e una *Descrizione* (opzionale).
2. **Seleziona** Gruppo.

    - Seleziona categorie di gruppi create in precedenza o creane una nuova.
    - Crea un nome e un aspetto per il nuovo gruppo di waypoint. Questa è anche chiamata *nuova categoria* nell'applicazione.
    - L'**icona**, il **colore dell'icona** e la **forma** verranno utilizzati per tutti i nuovi waypoint aggiunti al gruppo.

3. Impostazione **Aspetto**:

    - Seleziona un'[**icona**](../../personal/favorites.md#favorite-icons) dall'elenco di tutte le icone delle categorie di PDI.
    - Seleziona il **Colore** dell'icona.
    - Quindi seleziona la **Forma** dell'icona: *Cerchio, Ottagono, Quadrato*.

4. **Sostituisci** un altro punto con questo, se necessario.  


### Azioni con i Gruppi {#actions-with-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu gruppo menu traccia Android](@site/static/img/personal/tracks/track_menu_group_menu_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu gruppo menu traccia iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

Il *menu a tre punti* ( &#8285; ) apre il *Menu del gruppo* di waypoint.

**Azioni:**

- **<Translate android="true" ids="shared_string_show_on_map"/>** - Consente di visualizzare o meno i waypoint del gruppo sulla mappa. Oppure è possibile utilizzare [il pulsante sullo schermo](#points--waypoints) per visualizzare o omettere i waypoint del gruppo sulla mappa.
- **<Translate android="true" ids="shared_string_rename"/>** - Cambia il nome del gruppo.
- **<Translate android="true" ids="change_default_appearance"/>** - Cambia le opzioni di visualizzazione per un gruppo di waypoint.
- **<Translate android="true" ids="add_group_to_markers"/>** o **Rimuovi** (*Solo Android*) - Sposta i waypoint del gruppo nell'elenco dei [Segnalibri mappa](../../personal/markers.md).
- **<Translate android="true" ids="add_to_favorites"/>** (*Solo Android*) - Consente di copiare il gruppo di Waypoint selezionato nei [Preferiti](../../personal/favorites.md). È possibile scegliere una delle due opzioni: ***<Translate android="true" ids="copy_as_new_folder"/>*** o ***<Translate android="true" ids="add_to_a_folder"/>***.
- **<Translate android="true" ids="add_to_navigation"/>**  (*Solo Android*) - Crea un percorso tra i waypoint. Il primo e l'ultimo punto diventano l'inizio e la fine del percorso, e gli altri vengono convertiti in punti intermedi.
- **<Translate android="true" ids="shared_string_delete"/>** - Elimina un gruppo di waypoint.


### Gruppi di Waypoint {#waypoint-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mappa gruppo menu traccia Android](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![Mappa gruppo menu traccia Android](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mappa gruppo menu traccia iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![Mappa gruppo menu traccia iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>

Gestisci la visibilità dei gruppi sulla mappa: se nascondi una traccia, anche l'intero gruppo verrà nascosto.  

È possibile attivare o disattivare i waypoint di gruppo sulla mappa utilizzando il pulsante nell'angolo in alto a destra del menu contestuale della traccia sulla mappa. Toccalo e seleziona l'azione richiesta.

### Visualizza Tag GPX Personalizzati {#display-custom-gpx-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Punti](@site/static/img/personal/tracks/waypoints_tag_info_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Punti](@site/static/img/personal/tracks/waypoints_tag_info_ios.png)

</TabItem>

</Tabs>
  

<details>

<summary>Esempio di codice XML dei tag Waypoint</summary>

```xml
  <wpt lat="40.123456" lon="-73.987654">
    <ele>100</ele>
    <time>2024-04-04T13:12:11Z</time>
    <name>Waypoint 1</name>
    <desc>Long description</desc>
    <link href="http://docs.osmand.net" />
    <type></type>
    <cmt>Short comment for the waypoint.</cmt>
    <extensions>
      <osmand:country>United States</osmand:country>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:background>circle</osmand:background>
      <osmand:icon>place_town</osmand:icon>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:state>Virginia</osmand:state>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
    </extensions>
  </wpt>
```

</details>

<details>

<summary>Esempio di codice XML dei tag dei punti del percorso</summary>

```xml
  <rte>
    <name>Route 1</name>
    <desc>A sample route</desc>
    <rtept lat="40.123456" lon="-73.987654">
      <ele>110</ele>
      <name>Route Point 1</name>
      <desc>Point 1 of the route</desc>
      <extensions>
        <osmand:country>United States</osmand:country>
        <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
        <osmand:color>#ff4e4eff</osmand:color>
        <osmand:background>circle</osmand:background>
        <osmand:icon>place_town</osmand:icon>
        <osmand:postcode>23284</osmand:postcode>
        <osmand:telephone>(804) 828-0100</osmand:telephone>
        <osmand:state>Virginia</osmand:state>
        <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      </extensions>
    </rtept>
  </rte>
```

</details>

**Tag:**  

| Parametro | Descrizione |
| --- | --- |
| `lat` | La **Latitudine** è una delle coordinate geografiche con cui è possibile determinare una posizione. |
| `lon` | La **Longitudine** è un'altra delle coordinate geografiche con cui è possibile determinare una posizione. |
| `time` | **Timestamp** è la data e l'ora in cui il punto è stato registrato. |
| `name` | **Nome** è il nome del punto. Sono ammessi tutti i caratteri.  |
| `desc` | **Descrizione** contiene informazioni aggiuntive sul punto. |
| `type` | **Seleziona gruppo** è il nome della cartella OsmAnd in cui è salvato questo waypoint. |
| `cmt` | **Commento** è un breve commento su un punto. |
| `link` | **Link** è un collegamento a qualsiasi fonte. |
| `ele` | **Altitudine** è l'altitudine di un punto. |


**Estensioni:**  

| Estensione | Descrizione |
| --- | --- |
| `osmand:icon` | **Icona** è il nome dell'icona selezionata. |
| `osmand:color` | **Colore** è il colore in formato HEX.  |
| `osmand:background` | **Sfondo** è la forma dell'icona, come un cerchio, un ottagono o un quadrato. |
| `osmand:country` | **Paese** è il nome del paese.  |
| `osmand:address` | **Indirizzo** è l'indirizzo.  |
| `osmand:postcode` | **Codice postale** è il codice postale.  |
| `osmand:telephone` | **Telefono** è il numero di telefono.  |
| `osmand:state` | **Stato** è il nome dello stato.  |
| `osmand:start_date` | **Data di inizio** sono i dati di programmazione di un punto.  |

I waypoint vengono registrati con la traccia nel [file GPX](../../../technical/osmand-file-formats/osmand-gpx.md). Ognuno di questi waypoint ha il proprio set di tag per la descrizione. Tutti i tag direttamente correlati alla descrizione dei waypoint che possono essere modificati direttamente nell'applicazione OsmAnd sono elencati in questa sezione.  
Per modificare la descrizione del Waypoint, è possibile procedere in uno dei seguenti modi:
  
1. Trova la traccia richiesta nell'elenco della scheda *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.
2. Tocca la traccia sulla mappa, se è inclusa nell'[elenco delle tracce visibili](../tracks/index.md#display-tracks-on-the-map).
3. Tocca il waypoint richiesto se è [visibile](../../personal/tracks/manage-tracks.md#track-menu) sulla mappa.  

    Quindi nel [Menu contestuale Tracce](./track-context-menu.md) tocca *punti*, il campo della cartella richiesta con i waypoint disponibili e il Waypoint che stai cercando. Seleziona il menu *Azioni →* **Modifica waypoint GPX** e apporta le modifiche. Non è possibile modificare la data di creazione di un punto, *timestamp*, nell'applicazione.  

I **tag Amenity** che descrivono informazioni aggiuntive, come orari di apertura o numero di telefono, specifici per il PDI, prendono tali informazioni dai dati di OpenStreetMap o dai dati inseriti durante la creazione del PDI. È possibile modificare tali tag e i [tag personalizzati](#display-custom-gpx-tags) solo nel codice del file GPX, che può essere aperto con qualsiasi editor di testo sul dispositivo.


## Analizza per Intervalli {#analyze-by-intervals}

<InfoAndroidOnly />

![Divisione traccia per Android](@site/static/img/personal/tracks/split_by_1.png) 

L'opzione **Analizza per Intervalli** consente di dividere una traccia in sezioni e visualizzare statistiche dettagliate per ogni parte del percorso. Le tracce possono essere divise in base a parametri come ***distanza***, ***tempo*** o ***salita/discesa***. 

Per aprire questa opzione:  
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>* → scegli la modalità di divisione desiderata 


### Dividi per Distanza {#split-by-distance}

![Scheda divisione traccia per distanza](@site/static/img/personal/tracks/split_by_2_new_tab.png) ![Mappa divisione traccia per distanza](@site/static/img/personal/tracks/split_by_2_map.png)  

Questa opzione consente di dividere una traccia in intervalli di distanza fissi e analizzare statistiche dettagliate per ogni segmento. Gli intervalli di distanza disponibili sono ***20 m***, ***50 m***, ***100 m***, ***200 m***, ***500 m***, ***1 km***, ***2 km***, ***5 km*** e ***10 km***. Dopo aver scelto un intervallo di distanza, la traccia viene visualizzata come un elenco di segmenti. 

Per ogni segmento, è possibile visualizzare:
- distanza percorsa.
- durata.
- altitudine media, minima e massima.
- salita e discesa.
- tempo in movimento.
- velocità media e massima.

Quando si tocca qualsiasi segmento nell'elenco, la vista della mappa mostra la traccia completa con i suoi intervalli e apre il menu contestuale per la traccia in fondo allo schermo.


### Dividi per Tempo {#split-by-time}

![Scheda divisione traccia per tempo](@site/static/img/personal/tracks/split_by_3_new_tab.png) ![Mappa divisione traccia per tempo](@site/static/img/personal/tracks/split_by_3_map.png) 

L'opzione **Dividi per Tempo** divide una traccia in intervalli di durata uguale. È possibile scegliere tra ***1 min***, ***2 min***, ***2,5 min***, ***5 min***, ***10 min***, ***15 min***, ***30 min*** e ***60 min***. Il modo in cui gli intervalli vengono visualizzati, le statistiche fornite per ogni segmento e il modo in cui appaiono sulla mappa sono gli stessi della sezione [Dividi per Distanza](#split-by-distance).


### Dividi per Salita/Discesa {#split-by-uphill-downhill}

![Scheda divisione traccia per salita/discesa](@site/static/img/personal/tracks/split_by_4_new_tab.png) ![Mappa divisione traccia per salita/discesa](@site/static/img/personal/tracks/split_by_4_map.png) 

Questa opzione divide una traccia in segmenti in base alle variazioni di altitudine. Ogni intervallo è classificato come ***salita***, ***discesa*** o ***piano***. Il modo in cui gli intervalli vengono visualizzati, le statistiche fornite per ogni segmento e il modo in cui appaiono sulla mappa sono gli stessi della sezione [Dividi per Distanza](#split-by-distance).


### Metriche Frequenza Cardiaca {#heart-rate-metrics}

![Metriche Frequenza Cardiaca](@site/static/img/personal/tracks/heart_rate.png)

Questa opzione consente di visualizzare i valori medi, minimi e massimi della frequenza cardiaca (battiti al minuto, bpm) per ogni intervallo della tua traccia. I dati sulla frequenza cardiaca sono presi dal file GPX della traccia o registrati direttamente da un [sensore di frequenza cardiaca esterno collegato](https://osmand.net/docs/user/plugins/external-sensors) (BLE). Se non sono disponibili dati sulla frequenza cardiaca, questa riga viene nascosta nella tabella degli intervalli.

**Nota:** È possibile collegare un monitor di frequenza cardiaca BLE tramite *<Translate android="true" ids="shared_string_plugin,external_sensors_plugin_name"/>* per registrare i dati HR direttamente in OsmAnd.


## Filtro GPS {#gps-filter}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![Schermata filtro GPS Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

Questo filtro consente di migliorare le statistiche della traccia escludendo dati non necessari o errati. È possibile filtrare i punti della traccia che non corrispondono ai parametri della traccia e, di conseguenza, ottenere un grafico più preciso e una linea del percorso visiva senza distorsioni o rumore di registrazione. È possibile apportare modifiche con filtri come *Smussatura*, *Velocità*, *Altitudine* e *Precisione GPS*, che nascondono i punti filtrati dalla traccia corrente. Inoltre, nel menu *Statistiche*, è possibile verificare come le modifiche vengono visualizzate sul grafico prima di salvarle. È anche possibile *Ripristinare l'originale* e *Salvare come copia* della traccia in questo filtro senza salvare quella originale.  

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location-and-zoom), [my location button](../../map/interact-with-map.md#my-location-and-zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

La pagina dell'app Filtro GPS di Android include quanto segue:  

- Una mappa con una traccia salvata e un pulsante aggiuntivo, *Posizione della mia traccia* (allinea una traccia al centro di una mappa).
- Pulsanti *Aggiorna* e *Menu* in alto (*Menu* apre il campo *Azione* in fondo alla pagina).
- Blocchi *Filtro*, *Statistiche*, *Azione*.  


### Menu Filtro {#filter-menu}

In questo menu, è possibile modificare alcuni parametri della traccia come *Smussatura*, *Velocità*, *Altitudine* o *Precisione GPS* utilizzando i filtri. Il menu è diviso in una *parte Punti* e una *parte Azioni*.

| ***Punti*** |
|:------------|
|Questa parte mostra il numero di punti dopo il filtraggio e il numero totale di punti sulla traccia selezionata prima dell'uso dei filtri.|
|![Numeri punti filtro GPS Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***Azioni*** |
|*Smussatura*. Imposta la distanza di soglia tra i punti. I punti della traccia che si trovano almeno a questa distanza dall'ultimo punto visibile vengono nascosti. Tutti i punti della traccia che si trovano a una distanza reciproca inferiore a quella selezionata dal filtro verranno nascosti. I punti della traccia vengono contati dall'ultimo punto visibile. Si noti che soglie elevate possono semplificare eccessivamente la geometria della traccia.|
|![Numeri smussatura filtro GPS Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Velocità*. Sul grafico e sulla mappa vengono visualizzati solo i punti della traccia corrispondenti all'intervallo di velocità selezionato, gli altri vengono nascosti.|
|![Numeri velocità filtro GPS Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*Altitudine*. Sul grafico e sulla mappa vengono visualizzati solo i punti della traccia corrispondenti all'intervallo di altitudine selezionato, gli altri vengono nascosti.|
|![Numeri altitudine filtro GPS Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*Precisione GPS*. Imposta il valore massimo consentito per HDOP. I punti con un valore superiore vengono nascosti.|
|![Numeri precisione filtro GPS Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) |  


### Statistiche {#statistics}

![Grafico filtro GPS Android](@site/static/img/personal/tracks/gps_filter_graph_statistics_new_andr.png)

La scheda Statistiche visualizza informazioni sulla traccia **modificata**, ovvero la traccia senza i valori filtrati. Viene visualizzata nei blocchi delle statistiche e nei dati del grafico.
  
- La parte *Dati* mostra statistiche simili al [menu Filtro](#filter-menu).  
- La parte *Grafico* visualizza tre tipi di grafici per parametri: Panoramica, Altitudine e Velocità. Questa funzionalità è una copia del [Grafico della traccia](#altitude--speed-graphs).

### Azioni {#actions}

![Azione filtro GPS Android](@site/static/img/personal/tracks/gps_filter_action_android.png)

L'elenco delle azioni è disponibile in fondo alla scheda **Filtro** o **Statistiche**. OsmAnd applica tutte le modifiche apportate alla traccia senza aggiornare il file, ma è possibile salvare le modifiche manualmente.

- *<Translate android="true" ids="reset_to_original"/>*. Consente di ripristinare i parametri allo stato originale.  
- *<Translate android="true" ids="save_as_copy"/>*. Consente di salvare la traccia come una nuova.
- *<Translate android="true" ids="save_changes_into_file"/>*. Consente di sovrascrivere la traccia con i nuovi parametri.  


## Articoli Correlati {#related-articles}

- [Tracce GPX](../../personal/tracks/manage-tracks.md)
- [Tracce sulla mappa](./track-context-menu.md)
- [Navigazione per traccia](../../navigation/setup/gpx-navigation.md)
- [Pianifica percorso](../../plan-route/index.md)
- [Plugin Registrazione viaggio](../../plugins/trip-recording.md)
- [Analizza sulla mappa](../tracks/index.md#analyze-track-on-map)