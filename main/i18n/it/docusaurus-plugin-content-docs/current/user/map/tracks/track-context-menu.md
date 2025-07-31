---
source-hash: 3010d587c123ef963a233b0b6205168ae7e8d4f377766e5140cb45e5c54f1d00
sidebar_position: 4
title:  Menu contestuale traccia
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

Il *menu contestuale traccia* fornisce informazioni sulla *[Traccia](../../personal/tracks/index.md)* sia in formato testuale che [grafico](#altitude--speed-graphs). Consente di aggiungere informazioni, apportare modifiche, modificare ed eseguire varie altre azioni con la traccia. È possibile accedere al *menu contestuale traccia* semplicemente toccando la traccia desiderata sulla mappa o utilizzando il menu *[I miei luoghi](../../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*). Potrebbe essere necessario aprire la cartella della traccia e selezionare la traccia desiderata toccandola.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Panoramica menu contestuale traccia Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Panoramica menu contestuale traccia iOS](@site/static/img/personal/tracks/track_context_overview_2_ios.png)

</TabItem>

</Tabs>


## Panoramica traccia {#track-overview}

Quando si tocca una traccia, si apre la prima schermata del *Menu contestuale traccia* - *Scheda Panoramica*. In questa scheda, è possibile trovare un riepilogo della traccia scelta (*[Pannello informazioni](#info-panel)*) ed eseguire le azioni più comuni con la traccia utilizzando il *[Menu azioni traccia](#track-actions)*. È possibile visualizzare [descrizione e informazioni di servizio](#description-and-info) sulla traccia se si trascina la scheda Panoramica verso l'alto.

<!--
You can [short tap](../../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map. 
-->

### Pannello informazioni {#info-panel}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Panoramica pannello informazioni Android](@site/static/img/personal/tracks/track_context_info_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Panoramica pannello informazioni iOS](@site/static/img/personal/tracks/track_context_info_panel_ios.png)

</TabItem>

</Tabs>

Nella parte superiore del pannello informazioni, è possibile vedere il nome della traccia e il simbolo utilizzato per contrassegnarla (*solo Android*). Il nome della traccia può essere modificato utilizzando la funzione di rinomina nel [menu Opzioni](#options). Alcune tracce (principalmente le *[Guide di viaggio](../../plan-route/travel-guides.md#manage-as-gpx-track)*) possono avere una breve *[descrizione](#description-and-info)* e (o) un'immagine sotto il *Nome traccia*. Una freccia mostra la *Direzione verso il punto più vicino della traccia* dalla [Mia posizione](../../map/interact-with-map#my-location-and-zoom).  

Il pannello informazioni fornisce anche informazioni su quanto segue:

- *<Translate android="true" ids="distance"/>*. Mostra la lunghezza della traccia.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. Visualizza la somma totale delle salite e delle discese durante il viaggio.
- *<Translate android="true" ids="altitude_range"/>*. Indica l'altitudine minima e massima su una traccia.  

:::note
Nel caso in cui la tua traccia sia stata creata in OsmAnd o in qualsiasi altra app di tracciamento (quindi i suoi punti hanno tag [`time` e `speed`](../../plugins/trip-recording#recorded-gpx-file)), il pannello informativo conterrà anche informazioni su *<Translate android="true" ids="average_speed"/>*, *<Translate android="true" ids="max_speed"/>*, *<Translate android="true" ids="shared_string_time_span"/>* (*Android*) o *<Translate ios="true" ids="total_time"/>* (*iOS*) (la durata tra il punto di inizio e fine della traccia), *<Translate android="true" ids="shared_string_time_moving"/>* (la somma del tempo di guida).
:::  

### Azioni traccia {#track-actions}

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
- **Modifica traccia** (*Android*). Apre la traccia in [Strumento Pianifica un percorso](../../plan-route/create-route.md).
- **Esporta** (*iOS*). Consente di [esportare una traccia](../../personal/tracks/manage-tracks.md#export).
- **Indicazioni**. Apre la traccia in modalità *[Navigazione](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)*.


### Opzioni {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Opzioni menu traccia Android](@site/static/img/personal/tracks/track_menu_options_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Opzioni menu traccia Android](@site/static/img/personal/tracks/track_menu_options_ios.png)  

</TabItem>

</Tabs>

Il menu **Opzioni** consente di gestire e modificare la traccia selezionata con vari strumenti e impostazioni.  

- **<Translate android="true" ids="shared_string_show_on_map"/>** – Controlla la visibilità della traccia sulla mappa.
- **<Translate android="true" ids="shared_string_appearance"/>** – Apre il [menu Aspetto](../tracks/appearance.md) per personalizzare il colore, la larghezza e la trasparenza della traccia.
- **<Translate android="true" ids="follow_track"/>** (*Android*) / **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) – Avvia la [navigazione per traccia](../../navigation/setup/gpx-navigation.md)., allineando il percorso alla traccia selezionata.

<br/>

- **<Translate android="true" ids="join_segments"/>** (*solo Android*) – Unisce i segmenti di traccia per colmare le lacune.
- **<Translate android="true" ids="analyze_on_map"/>**. Apre lo strumento [Analizza sulla mappa](../tracks/index.md#analyze-track-on-map-analyze-track-on-map) per ispezionare l'elevazione, la velocità e la distanza della traccia.
- **<Translate android="true" ids="analyze_by_intervals"/>** (*solo Android*) - Analizza la traccia per [intervalli di tempo o distanza](./track-context-menu.md#split-interval).

<br/>

- **<Translate android="true" ids="shared_string_share"/>** – Esporta la traccia selezionata in formato GPX.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - [Carica](../../plugins/osm-editing.md#upload-gps-track) la traccia selezionata su OpenStreetMap.

<br/>

- **<Translate android="true" ids="edit_track"/>** - Apre lo strumento [Pianifica percorso](../../plan-route/create-route.md) per modificare la traccia.
- **Duplica traccia** (*solo iOS*) – Crea e salva una copia della traccia.
- **<Translate android="true" ids="rename_track"/>** – Consente di modificare il nome della traccia.
- **<Translate android="true" ids="change_folder"/>** – Sposta la traccia in un'altra cartella o ne crea una nuova.

<br/>

- **<Translate android="true" ids="shared_string_gps_filter"/>** (*solo Android*) - Consente di [filtrare i punti della traccia](#gps-filter) per affinare la precisione.
- **<Translate android="true" ids="altitude_correction"/>** (*solo Android*) - Per [ricevere dati di elevazione](#calculate-missing-elevation), [allega la tua traccia alle strade](../../navigation/setup/gpx-navigation.md#attach-to-the-roads) o calcolala offline (sono necessarie le [mappe del terreno](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*solo Android*) - [Simula la tua posizione](../../plugins/development.md#gpx-track-simulation) utilizzando una traccia GPX.

<br/>

- **<Translate android="true" ids="shared_string_delete"/>**. Elimina la traccia.


### Descrizione e informazioni {#description-and-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Descrizione e informazioni Android](@site/static/img/personal/tracks/track_context_overview_1_andr.png)  ![Descrizione e informazioni Android](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Descrizione di una traccia iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)

</TabItem>

</Tabs>

Questa sezione della scheda *Panoramica* visualizza ***dati tag*** e ***tutte le informazioni generali***.

- **Descrizione**. Il pulsante *<Translate android="true" ids="shared_string_edit"/>* (*Android*) / *<Translate ios="true" ids="context_menu_edit_descr"/>* (*iOS*) viene utilizzato per modificare la descrizione della traccia. Tag `desc`.

- **Generale**. Contiene informazioni sulle *dimensioni del file GPX*, sulla *cartella del file* e sulla *data di creazione* con il tag `time`.

- **Info**. Tag: *Parole chiave* - `keywords`, &nbsp;*Link* - `link`, &nbsp;*Attività* - `activities`.

- **Autore**. Tag: *Autore* - `author`, &nbsp;*Nome* - `name`, &nbsp;*Indirizzo e-mail* - `email`, &nbsp;*Link* - `link`.

- **Copyright**. Tag: *Copyright* - `copyright`, &nbsp;*Autore* - `author`, &nbsp;*Anno* - `year`, &nbsp;*Licenza* - `license`.

- **Aggiuntivo**. Tutti i tag della sezione ***estensioni***:&nbsp; `address`,&nbsp; `icon`,&nbsp; `background`,&nbsp; `color`,&nbsp; `country`,&nbsp; `state`,&nbsp; `telephone`,&nbsp; `postcode`,&nbsp; `start_date`,&nbsp; `desc`.
  

<details>

<summary>Esempio di codice XML del file GPX</summary>

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


### Attività di informazione traccia {#track-information-activity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Attività di informazione traccia](@site/static/img/personal/tracks/track_info_activity_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Attività di informazione traccia](@site/static/img/personal/tracks/track_info_activity_ios.png)

</TabItem>

</Tabs>


La funzione *Attività* in OsmAnd consente di taggare le tracce GPX registrate con attività specifiche per ulteriori analisi e organizzazione in cartelle.

- [Tag attività per tracce GPX](../../plugins/trip-recording.md#recording-settings). Durante la registrazione di una traccia GPX, è possibile assegnare un tipo di attività. Questa etichettatura dell'attività aiuta a classificare inizialmente le tracce.
- [Filtro attività](../../personal/tracks/smart-folder.md#search-filter). È possibile filtrare le tracce GPX registrate per attività, il che consente di concentrarsi sulla ricerca di tipi specifici di registrazioni, come tutte le tracce di ciclismo o escursionismo.
- [Gestisci tipi di attività](../../personal/tracks/manage-tracks.md#selection-mode). È possibile modificare il tipo di attività per le cartelle o le tracce selezionate utilizzando la modalità di selezione nella scheda Tracce del menu I miei luoghi.
- **Elenco attività**. Le categorie e i gruppi di attività sono definiti nelle risorse di OsmAnd. Per sviluppatori e collaboratori, l'elenco delle attività è mantenuto in un formato strutturato su [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json), che descrive in dettaglio i gruppi e i tipi di attività disponibili.


## Grafici altitudine / velocità {#altitude--speed-graphs}

Nella scheda *<Translate android="true" ids="shared_string_gpx_track"/>*, è possibile trovare informazioni sulla traccia in forma grafica. Utilizzando l'interruttore, è possibile scegliere quali dati visualizzare sul grafico: dati separati su *[<Translate android="true" ids="altitude"/>](#altitude)*, sulla *[Velocità](#speed)* (questa opzione è disponibile solo per le tracce registrate) o visualizzare tutto insieme (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

Interazione con il grafico:

- ***Posizionare un punto sul grafico***. Se si desidera visualizzare le informazioni in un punto particolare di una traccia, è possibile toccare un punto qualsiasi del grafico e apparirà un puntatore con i valori. Allo stesso tempo, sulla mappa apparirà un marcatore blu, che indicherà quella posizione sulla traccia.
- ***Zoom avanti/indietro***. È possibile utilizzare i [movimenti a due dita](../../map/interact-with-map.md#gestures) per ingrandire e rimpicciolire per una visualizzazione più dettagliata. Dopo aver ingrandito, è possibile spostare il grafico a destra e a sinistra, corrispondente allo spostamento in avanti e indietro lungo il percorso.
- ***Informazioni aggiuntive***. Il lato destro del grafico contiene dati sull'altitudine più bassa, più alta e media, sulla pendenza e sulla velocità. Nella parte inferiore del grafico, è possibile vedere i segni di distanza.


### Informazioni generali {#overview-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu contestuale traccia Grafici Android](@site/static/img/personal/tracks/track_menu_graph_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu contestuale traccia Grafici iOS](@site/static/img/personal/tracks/track_menu_graph_2_ios.png)

</TabItem>

</Tabs>

Nella scheda **Panoramica**, è possibile visualizzare parametri quali:

- *<Translate android="true" ids="distance"/>*. La somma della distanza totale percorsa sulla traccia, o la lunghezza della traccia stessa.
- *<Translate android="true" ids="shared_string_time_span"/>*. L'intervallo di tempo tra il punto di inizio e fine della traccia.
- *<Translate android="true" ids="shared_string_start_time"/>* L'ora esatta in cui inizia la registrazione della traccia.
- *<Translate android="true" ids="shared_string_end_time"/>*. L'ora di fine della registrazione della traccia.

I **pulsanti** attivi consentono di accedere ad azioni quali:

- Il pulsante **<Translate android="true" ids="analyze_on_map"/>** apre il [menu Analizza traccia](../tracks/index.md#analyze-track-on-map) per la traccia.
- Il pulsante **<Translate android="true" ids="shared_string_options"/>** apre un menu con:

  - *Modifica* apre la traccia nello [strumento Pianifica percorso](../../plan-route/index.md).
  - *Elimina* consente di rimuovere l'elemento traccia selezionato.
  - *Dividi intervallo* apre la [funzione Dividi intervallo](#split-interval) per la traccia.


### Velocità {#speed}

:::note Solo tracce registrate
Questa scheda può essere visibile solo su tracce registrate. I punti su questo tipo di traccia hanno tag **[`speed`](../../plugins/trip-recording#recorded-gpx-file)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Grafico traccia Velocità Android](@site/static/img/personal/tracks/track_graph_speed_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Grafico traccia Velocità iOS](@site/static/img/personal/tracks/track_graph_speed_3_ios.png)

</TabItem>

</Tabs>

Il grafico **Velocità** visualizza metriche quali:

- *<Translate android="true" ids="average_speed"/>*. Indica la velocità media durante il viaggio.
- *<Translate android="true" ids="max_speed"/>*. Mostra la velocità massima durante il viaggio.
- *<Translate android="true" ids="moving_time"/>*. Mostra il tempo totale durante il viaggio solo in movimento.
- *<Translate android="true" ids="distance_moving"/>*. Indica la distanza regolata del viaggio.


### Altitudine {#altitude}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Grafico traccia altitudine Android](@site/static/img/personal/tracks/track_graph_altitude_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Grafico traccia altitudine iOS](@site/static/img/personal/tracks/track_graph_altitude_2_ios.png)

</TabItem>

</Tabs>

Il grafico **Altitudine** visualizza metriche quali:

- *<Translate android="true" ids="average_altitude"/>*. Indica l'altitudine media sul livello del mare lungo il percorso.
- *<Translate android="true" ids="altitude_range"/>*. L'altitudine più alta e più bassa registrata sul percorso.
- *<Translate android="true" ids="altitude_ascent"/>*. Il guadagno cumulativo di altitudine sul livello del mare lungo il percorso.
- *<Translate android="true" ids="altitude_descent"/>*. La perdita cumulativa di altitudine lungo il percorso.

**Ottieni dati di elevazione.**  
Se non ci sono *informazioni di elevazione* sul percorso, puoi aggiungerle nei seguenti modi:

- *Pulsante Calcola elevazione → [Usa strade vicine](../../plan-route/create-route.md#get-elevation-data)*. Utilizza una mappa offline per trovare strade vicine e dati di elevazione. Consente di personalizzare la geometria della traccia.
- [Usa mappe del terreno](#calculate-missing-elevation). Utilizza le mappe del terreno per ottenere i dati di elevazione. La geometria della traccia rimane invariata.


### Calcola elevazione mancante {#calculate-missing-elevation}

:::note Abbonamento OsmAnd Pro
La funzione di calcolo dell'elevazione offline è disponibile solo per gli [**abbonati a OsmAnd Pro**](../../purchases/android.md#pro-features) <ProFeature />.
:::

<InfoAndroidOnly />

Questa funzione consente di calcolare il profilo di elevazione per la traccia GPX offline per qualsiasi terreno tra 70 gradi di latitudine nord e 70 gradi di latitudine sud, in base ai [dati delle mappe del terreno](../../plugins/topography.md#download-maps). *Le mappe del terreno (3D) devono essere state scaricate in precedenza*.

1. Scarica le [mappe del terreno (3D)](../../plugins/topography.md#download-maps) per la regione richiesta.
2. Se la traccia non contiene dati di altitudine, vai al menu contestuale della traccia (*Menu contestuale traccia → <Translate android="true" ids="shared_string_gpx_track,altitude,calculate_altitude"/>*), seleziona *Usa mappe del terreno*, e dopo il calcolo otterrai un grafico della traccia basato sui dati del terreno.  

    ![Grafico traccia altitudine Android](@site/static/img/personal/tracks/calculate_elevation_2.png)   ![Grafico traccia altitudine Android](@site/static/img/personal/tracks/calculate_elevation_10.png)   <!--![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_4.png)  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->  

3. Se stai creando un percorso con lo strumento [Pianifica un percorso](../../plan-route/create-route.md#graph) utilizzando il metodo *Linea retta* e non ci sono dati di elevazione sul grafico, devi:
    - Tocca *Ottieni dati di elevazione*, quindi seleziona *Usa mappe del terreno*.
    - Dopo il calcolo, otterrai il grafico completo di Altitudine/Pendenza del tuo percorso basato sui dati del terreno.  

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

- [Mostra dati punti traccia](#display-custom-gpx-tags) e modifica i tuoi punti traccia (waypoints e punti percorso), [eliminali e aggiungi](#points--waypoints) waypoint a una traccia.
- Crea e modifica [Gruppo (cartella) di punti](#waypoint-groups).


### Aggiungi waypoint a una traccia {#add-waypoint-to-a-track}

I waypoint possono essere aggiunti alla traccia attualmente registrata o a qualsiasi traccia da [*I miei luoghi → Elenco tracce*](../../personal/tracks/manage-tracks.md):

- Utilizza il [menu contestuale della mappa](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint).
  - I waypoint vengono visualizzati automaticamente se la traccia selezionata è abilitata sulla mappa.
  - [Tocca a lungo](../../map/map-context-menu.md#select-any-point-long-tap) la mappa in qualsiasi posizione scelta per creare un waypoint.
  - Puoi impostare le informazioni sul waypoint nel [menu contestuale della mappa](../../map/map-context-menu.md#-add--edit-track-waypoint) che si apre.

- Utilizza il pulsante [Aggiungi waypoint](#points--waypoints) del menu contestuale della traccia.

- Aggiungi un waypoint come pulsante [Azione rapida](../../widgets/quick-action.md#my-places).

#### Crea waypoint {#create-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aggiungi waypoint](@site/static/img/personal/tracks/add_waypoint_1_andr.png)  ![Aggiungi waypoint](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aggiungi waypoint](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png)  ![Aggiungi waypoint](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

Tocca il pulsante *Aggiungi waypoint* per aprire la schermata di creazione del waypoint (questa schermata è familiare con il [menu contestuale dei preferiti](../../personal/favorites.md#create)).

1. **Aggiungi** *Nome* del waypoint, *Indirizzo* della posizione selezionata e *Descrizione* (opzionale).
2. **Seleziona** Gruppo.

    - Seleziona categorie di gruppi create in precedenza o creane una nuova.
    - Crea un nome e un aspetto per il nuovo gruppo di waypoint. Questa è anche chiamata *nuova categoria* nell'applicazione.
    - L'**icona**, il **colore dell'icona** e la **forma** verranno utilizzati per tutti i nuovi waypoint aggiunti al gruppo.

3. Impostazione **aspetto**:

    - Seleziona un'[**icona**](../../personal/favorites.md#favorite-icons) dall'elenco di tutte le icone delle categorie POI.
    - Seleziona il **colore** dell'icona.
    - Quindi seleziona la **forma** dell'icona: *Cerchio, Ottagono, Quadrato*.

4. **Sostituisci** un altro punto con questo, se necessario.  


### Azioni con i gruppi {#actions-with-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu gruppo traccia Android](@site/static/img/personal/tracks/track_menu_group_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu gruppo traccia iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

Il *menu a tre punti* ( &#8285; ) apre il *menu Gruppo* waypoint.

**Azioni:**

- **<Translate android="true" ids="shared_string_show_on_map"/>** - Consente di visualizzare o meno i waypoint del gruppo sulla mappa. Oppure è possibile utilizzare [il pulsante sullo schermo](#points--waypoints) per visualizzare o omettere i waypoint del gruppo sulla mappa.
- **<Translate android="true" ids="shared_string_rename"/>** - Modifica il nome del gruppo.
- **<Translate android="true" ids="change_default_appearance"/>** - Modifica le opzioni di visualizzazione per un gruppo di waypoint.
- **<Translate android="true" ids="add_group_to_markers"/>** o **Rimuovi** (*solo Android*) - Sposta i waypoint del gruppo nell'elenco [Marcatori mappa](../../personal/markers.md).
- **<Translate android="true" ids="copy_to_map_favorites"/>** (*solo Android*) - Sposta i waypoint del gruppo nei [Preferiti](../../personal/favorites.md).
- **<Translate android="true" ids="add_to_navigation"/>** (*solo Android*) - Crea un percorso tra i waypoint. Il primo e l'ultimo punto diventano l'inizio e la fine del percorso, e gli altri vengono convertiti in punti intermedi.
- **<Translate android="true" ids="shared_string_delete"/>** - Elimina un gruppo di waypoint.


### Gruppi di waypoint {#waypoint-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mappa gruppo menu traccia Android](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![Mappa gruppo menu traccia Android](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mappa gruppo menu traccia iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![Mappa gruppo menu traccia iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>

Gestisci la visibilità dei gruppi sulla mappa: se nascondi una traccia, l'intero gruppo verrà nascosto.  

È possibile attivare o disattivare i waypoint del gruppo sulla mappa utilizzando il pulsante nell'angolo in alto a destra del menu contestuale della traccia sulla mappa. Toccalo e seleziona l'azione richiesta.

### Visualizza tag GPX personalizzati {#display-custom-gpx-tags}

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

<summary>Esempio di codice XML dei tag del punto di percorso</summary>

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
| `lat` | La **latitudine** è una delle coordinate geografiche con cui è possibile determinare una posizione. |
| `lon` | La **longitudine** è un'altra delle coordinate geografiche con cui è possibile determinare una posizione. |
| `time` | **Timestamp** è la data e l'ora in cui il punto è stato registrato. |
| `name` | **Nome** è il nome del punto. Sono consentiti tutti i caratteri.  |
| `desc` | La **descrizione** contiene informazioni aggiuntive sul punto. |
| `type` | **Seleziona gruppo** è il nome della cartella OsmAnd in cui è salvato questo waypoint. |
| `cmt` | **Commento** è un breve commento su un punto. |
| `link` | **Link** è un link a qualsiasi fonte. |
| `ele` | **Elevazione** è un'elevazione del punto. |


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
| `osmand:start_date` | **Data di inizio** sono i dati di pianificazione di un punto.  |

I waypoint vengono registrati con la traccia nel [file GPX](../../../technical/osmand-file-formats/osmand-gpx.md). Ciascuno di questi waypoint ha il proprio set di tag per la descrizione. Tutti i tag direttamente correlati alla descrizione dei waypoint che possono essere modificati direttamente nell'applicazione OsmAnd sono elencati in questa sezione.  
Per modificare la descrizione del waypoint, puoi seguire uno dei seguenti modi:
  
1. Trova la traccia richiesta nell'elenco della *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.
2. Tocca la traccia sulla mappa, se è inclusa nell'[elenco delle visibili](../tracks/index.md#display-tracks-on-the-map).
3. Tocca il waypoint richiesto se è [visibile](../../personal/tracks/manage-tracks.md#track-menu) sulla mappa.  

    Quindi nel [menu contestuale delle tracce](./track-context-menu.md) tocca *punti*, il campo della cartella richiesta con i waypoint disponibili e il waypoint che stai cercando. Seleziona il menu *Azioni →* **Modifica waypoint GPX** e apporta le modifiche. Non puoi modificare la data di creazione di un punto, *timestamp*, nell'applicazione.  

I **tag di servizio** che descrivono informazioni aggiuntive, come orari di apertura o numero di telefono, specifici per il POI, prendono tali informazioni dai dati di OpenStreetMap o dai dati inseriti durante la creazione del POI. È possibile modificare tali tag e [tag personalizzati](#display-custom-gpx-tags) solo nel codice del file GPX, che è possibile aprire con qualsiasi editor di testo sul dispositivo.


## Dividi intervallo {#split-interval}

<InfoAndroidOnly />

È possibile dividere la traccia in intervalli, come distanza e tempo, e analizzarla.  

Dividi la traccia per distanza o intervallo di tempo.  
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>*  

![Schermata intervallo diviso traccia Android](@site/static/img/personal/tracks/track_split_interval_android.png) ![Schermata intervallo diviso traccia tempo Android](@site/static/img/personal/tracks/track_split_interval_time_android.png)  


## Filtro GPS {#gps-filter}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![Schermata filtro GPS Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

Questo filtro consente di migliorare le statistiche della traccia escludendo dati non necessari o errati. È possibile filtrare i punti della traccia che non rientrano nei parametri della traccia e, di conseguenza, ottenere un grafico e una linea visiva del percorso più precisi senza distorsioni o rumore di registrazione. È possibile apportare modifiche con filtri come *Smoothing*, *Velocità*, *Altitudine* e *Precisione GPS*, che nascondono i punti filtrati dalla traccia corrente. Inoltre, nel menu *Statistiche*, è possibile verificare come le modifiche vengono visualizzate sul grafico prima di salvarle. È anche possibile *Ripristinare l'originale* e *Salvare come copia* della traccia in questo filtro senza salvare quella originale.  

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location-and-zoom), [my location button](../../map/interact-with-map.md#my-location-and-zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

La pagina dell'app Filtro GPS Android include quanto segue:  

- Una mappa con una traccia salvata e un pulsante aggiuntivo, *La mia posizione traccia* (allinea una traccia al centro di una mappa).
- Pulsanti *Aggiorna* e *Menu* in alto (*Menu* apre il campo *Azione* nella parte inferiore della pagina).
- Blocchi *Filtro*, *Statistiche*, *Azione*.  


### Menu filtro {#filter-menu}

In questo menu, puoi modificare alcuni parametri della tua traccia come *Smoothing*, *Velocità*, *Altitudine* o *Precisione GPS* utilizzando i filtri. Il menu è diviso in una *parte Punti* e una *parte Azioni*.

| ***Punti*** |
|:------------|
|Questa parte mostra il numero di punti dopo il filtraggio e il numero totale di punti sulla traccia selezionata prima che i filtri fossero utilizzati.|
|![Numeri punti schermata filtro GPS Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***Azioni*** |
|*Smoothing*. Imposta la distanza di soglia tra i punti. I punti della traccia che si trovano a una distanza almeno pari a questa dall'ultimo punto visibile vengono nascosti. Tutti i punti sulla traccia, che si trovano a una distanza tra loro inferiore alla distanza selezionata dal filtro, verranno nascosti. I punti della traccia vengono contati dall'ultimo punto visibile. Si noti che soglie elevate possono semplificare eccessivamente la geometria della traccia.|
|![Numeri smoothing filtro GPS Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Velocità*. Solo i punti della traccia corrispondenti all'intervallo di velocità selezionato vengono visualizzati sul grafico e sulla mappa, gli altri vengono nascosti.|
|![Numeri velocità filtro GPS Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*Altitudine*. Solo i punti della traccia corrispondenti all'intervallo di altitudine selezionato vengono visualizzati sul grafico e sulla mappa, gli altri vengono nascosti.|
|![Numeri altitudine filtro GPS Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*Precisione GPS*. Imposta il valore massimo consentito per HDOP. I punti con un valore più alto vengono nascosti.|
|![Numeri precisione filtro GPS Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) |  


### Statistiche {#statistics}

![Grafico filtro GPS Android](@site/static/img/personal/tracks/gps_filter_graph_statistics_andr.png)

La scheda Statistiche visualizza informazioni sulla traccia **modificata**, ovvero la traccia senza valori filtrati. Viene visualizzata nei blocchi delle statistiche e nei dati del grafico.
  
- La parte *Dati* mostra statistiche simili al [menu Filtro](#filter-menu).  
- La parte *Grafico* visualizza tre tipi di grafici per parametri: Panoramica, Altitudine e Velocità. Questa funzionalità è una copia del [Grafico traccia](#altitude--speed-graphs).

### Azioni {#actions}

![Azione filtro GPS Android](@site/static/img/personal/tracks/gps_filter_action_android.png)

L'elenco delle azioni è disponibile nella parte inferiore della scheda **Filtro** o **Statistiche**. OsmAnd applica tutte le modifiche apportate alla traccia senza aggiornare il file, ma è possibile salvare le modifiche manualmente.

- *<Translate android="true" ids="reset_to_original"/>*. Consente di riportare i parametri allo stato originale.  
- *<Translate android="true" ids="save_as_copy"/>*. Consente di salvare la traccia come nuova.
- *<Translate android="true" ids="save_changes_into_file"/>*. Consente di riscrivere la traccia con i nuovi parametri.  


## Articoli correlati {#related-articles}

- [Tracce GPX](../../personal/tracks/manage-tracks.md)
- [Tracce sulla mappa](./track-context-menu.md)
- [Navigazione per traccia](../../navigation/setup/gpx-navigation.md)
- [Pianifica percorso](../../plan-route/index.md)
- [Plugin Registrazione viaggio](../../plugins/trip-recording.md)
- [Analizza sulla mappa](../index.md#analyze-track-on-map)

> *Ultimo aggiornamento: Novembre 2024*