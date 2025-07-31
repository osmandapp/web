---
source-hash: 6aec601164666a3a81eb5d95bdecc9963a7c4f7ddbac1cea35f42845786713b8
title: Tracce
sidebar_position: 2
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

OsmAnd ha molte potenti funzionalità per visualizzare vari percorsi sulla mappa. I percorsi possono essere costruiti come parte della Navigazione, creati tramite Pianifica percorso, importati come tracce GPX, registrati tramite il plugin Registrazione viaggio, o sfogliati e selezionati dai dati di OpenStreetMap.


## Tipi di tracce {#types-of-tracks}

[Tracce (GPX)](#display-tracks-on-the-map) - viaggio registrato o pianificato salvato in [formato GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Questo tipo di percorso può essere importato da una fonte esterna, creato nell'applicazione o registrato da te. Il GPX può contenere uno dei 3 diversi tipi di dati, o tutti:

- Traccia come linea (***Geometria***). Il file ha un array di punti ```<trkpt>```, ogni punto ha la posizione e il tempo opzionale, la velocità, l'altitudine e altri attributi. Queste tracce vengono visualizzate sulla mappa come linee continue.
- Traccia come percorso (***Percorso***). Il file ha un array di punti ```<rtept>```, ogni punto descritto come un punto intermedio del percorso. Dipende da come i punti all'interno di un percorso devono essere collegati, sia come piccoli segmenti di percorso che tramite una linea retta. Queste tracce vengono visualizzate sulla mappa come linee tratteggiate.
- Waypoint (***Punti***). Il file ha punti ```<wpt>``` con attributi. I waypoint vengono visualizzati come punti circolari sulla mappa. Puoi toccarli per ottenere informazioni aggiuntive.

OsmAnd può creare tracce con combinazioni 1-3. [Pianifica percorso](../../plan-route/create-route.md) crea una traccia con ***Geometria*** e ***Percorso***, se la salvi come ***Traccia semplificata***, verrà mantenuta solo la ***Geometria***. [Registrazione traccia](../../plugins/trip-recording.md#new-track-recording) crea solo ***Geometria***, ma puoi anche aggiungere ***Punti*** ad essa tramite il menu contestuale.


## Visualizzare le tracce sulla mappa {#display-tracks-on-the-map}

È possibile gestire la visibilità delle tracce scegliendo quali visualizzare o nascondere da diversi menu: il [menu I miei luoghi](#my-places), il [menu Configura mappa](#configure-map) e il [menu contestuale Traccia](#track-context-menu). Questa flessibilità consente di passare rapidamente tra diverse tracce, assicurando che solo le tracce pertinenti siano visibili sulla mappa in qualsiasi momento.

### Configura mappa {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Configura tracce mappa Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)   ![Configura tracce mappa Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Configura tracce mappa iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)  ![Configura tracce mappa iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

L'opzione *Configura mappa* consente di gestire rapidamente la visualizzazione di tutte le tracce visualizzate di recente, consentendo di attivare/disattivare la visibilità per un gruppo di tracce. L'ordinamento delle tracce segue l'ordine configurato nella scheda *I miei luoghi → Tracce*. È possibile accedere al [Menu Traccia](../../personal/tracks/manage-tracks.md#track-menu) toccando a lungo un elemento della traccia. Inoltre, in questo menu, è possibile modificare contemporaneamente l'aspetto di più tracce selezionate.

### I miei luoghi {#my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![I miei luoghi con tracce in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → tocca a lungo la traccia GPX scelta → Mostra sulla mappa*

![Menu contestuale di una traccia in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

Nella scheda [I miei luoghi *→* Tracce](../../personal/tracks/manage-tracks.md#manage-tracks) per visualizzare la traccia sulla mappa, devi:

- *Android* - tocca il *menu a tre punti* nel campo con la traccia richiesta.
- *iOS* - tocca a lungo la traccia richiesta nell'elenco.


### Menu contestuale traccia {#track-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Panoramica del menu contestuale della traccia Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Panoramica del menu contestuale della traccia iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

Quando selezioni una traccia sulla mappa o apri il [menu contestuale della traccia](./track-context-menu.md) dopo aver registrato o importato una traccia, puoi controllare la sua visibilità sulla mappa. Basta usare i pulsanti *Mostra* o *Nascondi* per visualizzare o rimuovere la traccia dalla visualizzazione della mappa.


## Analizza traccia sulla mappa {#analyze-track-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *Tocca la traccia → Scheda Traccia → <Translate android="true" ids="analyze_on_map"/>*  

![Analizza traccia menu Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png)    ![Analizza traccia menu distanza Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *Tocca la traccia → Scheda Traccia → <Translate ios="true" ids="analyze_on_map"/>*  

![Analizza traccia menu iOS](@site/static/img/personal/tracks/track_analyze_ios.png)  ![Analizza traccia menu iOS ](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

Questo strumento fornisce un'analisi dettagliata dei dati della [traccia](../../map/tracks/track-context-menu.md#options) utilizzando grafici e mappe.

- I **dati del grafico (asse Y)** visualizzano: *Altitudine*, *Pendenza*, *Velocità*, [*Dati sensore esterno*](../../plugins/external-sensors.md) e combinazioni di massimo due opzioni se contenute nei dati della traccia.
- La **dimensione del grafico (asse X)** rappresenta: *Distanza*, *Tempo* e *Ora del giorno*.
- **Interazione tocca/scorri**. Tocca un grafico per visualizzare le informazioni su un punto specifico della traccia. Scorrendo sul grafico si evidenzia la posizione appropriata sulla mappa e si mostrano i dettagli nella barra delle informazioni.
- **Scalatura**. Usa una [gesto a due dita](../../map/interact-with-map.md#gestures) per scalare il grafico per una visualizzazione più dettagliata.


### Segui la mia posizione {#follow-my-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Analizza traccia menu 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Analizza traccia menu 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Analizza traccia menu iOS](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png)  ![Analizza traccia menu iOS ](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Tocca il pulsante [La mia posizione](../../map/interact-with-map.md#my-location-and-zoom) per sincronizzare la visualizzazione della mappa e il grafico con la tua posizione.

- La **scala del grafico** rimane la stessa e la **barra delle informazioni** è fissa a 1/4 sul lato sinistro.
- Mentre ti muovi, il **grafico scorrerà** da sinistra a destra, visualizzando le informazioni davanti alla tua traccia.
- Non vengono visualizzati altri widget su questa schermata.
- Questa funzione è utile per l'escursionismo e il ciclismo mentre navighi sulla traccia.  


## Articoli correlati {#related-articles}

- [Aspetto della traccia](./appearance.md)
- [Menu contestuale della traccia](./track-context-menu.md)
- [Naviga per traccia](../../navigation/setup/gpx-navigation.md)
- Articolo del blog [Percorsi sulla mappa](https://docs.osmand.net/blog/routes)
- [Configura mappa](../../map/configure-map-menu.md)  
- [Tracce GPX](../../personal/tracks/index.md)  
- [Pianifica percorso](../../plan-route/index.md)  
- [Registrazione viaggio](../../plugins/trip-recording.md)

> *Ultimo aggiornamento: novembre 2024*