---
source-hash: a2c574750d2fad3f5b86fe34399e253d3561dee9bc81b7ec97490f6574b7c609
title:  Tracce
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

[Tracce (GPX)](#display-tracks-on-the-map) - viaggio registrato o pianificato salvato in [formato GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Questo tipo di percorso può essere importato da una fonte esterna, creato nell'applicazione o registrato da te. Un GPX può contenere uno dei 3 diversi tipi di dati, o tutti:

- Traccia come linea (***Geometria***). Il file ha un array di punti ```<trkpt>```, ogni punto ha la posizione e opzionalmente tempo, velocità, altitudine e altri attributi. Queste tracce sono visualizzate sulla mappa come linee continue.
- Traccia come percorso (***Percorso***). Il file ha un array di punti ```<rtept>```, ogni punto descritto come un punto intermedio del percorso. Dipende da come i punti all'interno di un percorso dovrebbero essere collegati, sia come piccoli segmenti di percorso o tramite una linea retta. Queste tracce sono visualizzate sulla mappa come linee tratteggiate.
- Waypoint (***Punti***). Il file ha punti ```<wpt>``` con attributi. I waypoint sono visualizzati come punti circolari sulla mappa. Puoi toccarli per ottenere informazioni aggiuntive.

OsmAnd può creare tracce con 1–3 combinazioni. [Pianifica percorso](../../plan-route/create-route.md) crea una traccia con ***Geometria*** e ***Percorso***; se la salvi come ***Traccia semplificata***, verrà mantenuta solo la ***Geometria***. La [registrazione di una traccia](../../plugins/trip-recording.md#new-track-recording) crea solo la ***Geometria***, ma puoi anche aggiungervi dei ***Punti*** tramite il menu contestuale.


## Visualizzare le tracce sulla mappa {#display-tracks-on-the-map}

È possibile gestire la visibilità delle tracce scegliendo quali visualizzare o nascondere da diversi menu: il [menu I miei luoghi](#my-places), il [menu Configura mappa](#configure-map) e il [menu contestuale della traccia](#track-context-menu). Questa flessibilità consente di passare rapidamente da una traccia all'altra, assicurando che solo le tracce pertinenti siano visibili sulla mappa in un dato momento.

### Configura mappa {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Configura mappa tracce Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)   ![Configura mappa tracce Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Configura mappa tracce iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)  ![Configura mappa tracce iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

L'opzione *Configura mappa* consente di gestire rapidamente la visualizzazione di tutte le tracce visualizzate di recente, permettendo di attivare o disattivare la visibilità per un gruppo di tracce. L'ordinamento delle tracce segue l'ordine configurato nella scheda *I miei luoghi → Tracce*. È possibile accedere al [Menu Traccia](../../personal/tracks/manage-tracks.md#track-menu) con un tocco lungo su un elemento della traccia. Inoltre, in questo menu, è possibile modificare l'aspetto di più tracce selezionate contemporaneamente.

### I miei luoghi {#my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![I miei luoghi con tracce in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → tocco lungo sulla traccia GPX scelta → Mostra sulla mappa*

![Menu contestuale di una traccia in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

Nella scheda [I miei luoghi *→* Tracce](../../personal/tracks/manage-tracks.md#manage-tracks) per visualizzare la traccia sulla mappa, è necessario:

- *Android* - toccare il *menu a tre punti* nel campo con la traccia richiesta.
- *iOS* - toccare a lungo la traccia richiesta nell'elenco.


### Menu contestuale della traccia {#track-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Panoramica del menu contestuale della traccia Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Panoramica del menu contestuale della traccia iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

Quando si seleziona una traccia sulla mappa o si apre il [menu contestuale della traccia](./track-context-menu.md) dopo aver registrato o importato una traccia, è possibile controllarne la visibilità sulla mappa. È sufficiente utilizzare i pulsanti *Mostra* o *Nascondi* per visualizzare o rimuovere la traccia dalla vista della mappa.


## Analizza traccia sulla mappa {#analyze-track-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *Tocca la traccia → Scheda Traccia → <Translate android="true" ids="analyze_on_map"/>*  

![Menu traccia analizza sulla mappa Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png)    ![Menu traccia analizza sulla mappa distanza Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *Tocca la traccia → Scheda Traccia → <Translate ios="true" ids="analyze_on_map"/>*  

![Menu traccia analizza sulla mappa](@site/static/img/personal/tracks/track_analyze_ios.png)  ![Menu traccia analizza sulla mappa ](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

Questo strumento fornisce un'analisi dettagliata dei dati della [traccia](../../map/tracks/track-context-menu.md#options) utilizzando grafici e mappe.

- **Dati del grafico (asse Y)** visualizza: *Altitudine*, *Pendenza*, *Velocità*, [*Dati sensore esterno*](../../plugins/external-sensors.md), e combinazioni di fino a due opzioni se contenute nei dati della traccia.
- **Dimensione del grafico (asse X)** rappresenta: *Distanza*, *Tempo* e *Ora del giorno*.
- **Interazione tocco/scorrimento**. Tocca un grafico per visualizzare le informazioni su un punto specifico della traccia. Scorrendo sul grafico si evidenzia la posizione appropriata sulla mappa e si mostrano i dettagli nella barra delle informazioni.
- **Scalatura**. Utilizza un [gesto a due dita](../../map/interact-with-map.md#gestures) per scalare il grafico per una visualizzazione più dettagliata.


### Segui la mia posizione {#follow-my-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu traccia analizza sulla mappa 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Menu traccia analizza sulla mappa 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu traccia analizza sulla mappa](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png)  ![Menu traccia analizza sulla mappa ](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Tocca il pulsante [La mia posizione](../../map/interact-with-map.md#my-location-and-zoom) per sincronizzare la vista della mappa e il grafico con la tua posizione.

- La **scala del grafico** rimane la stessa e le **informazioni della barra** sono fissate a 1/4 sul lato sinistro.
- Man mano che ti muovi, il **grafico scorrerà** da sinistra a destra, visualizzando le informazioni davanti alla tua traccia.
- Nessun altro widget viene visualizzato su questa schermata.
- Questa funzione è utile per l'escursionismo e il ciclismo mentre si naviga lungo la traccia.  


## Articoli correlati {#related-articles}

- [Aspetto della traccia](./appearance.md)
- [Menu contestuale della traccia](./track-context-menu.md)
- [Naviga per traccia](../../navigation/setup/gpx-navigation.md)
- [Articolo del blog Routes on the map (Percorsi sulla mappa)](https://docs.osmand.net/blog/routes)
- [Configura mappa](../../map/configure-map-menu.md)  
- [Tracce GPX](../../personal/tracks/index.md)  
- [Pianifica percorso](../../plan-route/index.md)  
- [Registrazione viaggio](../../plugins/trip-recording.md)