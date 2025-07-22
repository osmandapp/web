---
source-hash: a299ff4aecadfdc9bf18081279073760b514c798b579cc75e3642a2a8f646195
sidebar_position: 7
title:  Punti sulla mappa
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Panoramica {#overview}

La mappa può visualizzare punti come [Preferiti](#favorites), [Punti di interesse](#points-of-interest-pois), [Segnalini](#markers), [Wikipedia](#-wikipedia--wikipedia), [Risultati di ricerca](#search-results-poi), [Note audio e video](#-audio--video-points-android--audio--video-points-android) e [Modifiche OSM](#-osm-edit-points--osm-edit-points).


## Preferiti {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Livello preferiti Android](@site/static/img/map/favorites_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Livello preferiti iOS](@site/static/img/map/favorites_layer_ios.png)  

</TabItem>

</Tabs>

I [Preferiti](../personal/favorites.md) sono punti speciali contrassegnati dagli utenti. Per impostazione predefinita, appaiono come stelle gialle sulla mappa, sebbene possano essere personalizzati con qualsiasi colore, forma e icona. Diventano visibili sulla mappa a partire dal livello di zoom 6.

:::info
Nella versione Android di OsmAnd, puoi visualizzare solo alcuni gruppi di preferiti sulla mappa e durante la ricerca. Vai a *Menu → I miei luoghi → Preferiti*, tocca &#8942; e scegli *Mostra sulla mappa* o meno.
:::


## Nomi di preferiti e POI {#favorite-and-poi-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Livello etichette preferiti](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Livello etichette preferiti](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

</Tabs>

Per impostazione predefinita, i Preferiti e i punti di interesse (POI) vengono visualizzati senza nomi, per non ingombrare la mappa con il testo. Puoi abilitare i nomi nel menu Configura mappa.  


## Punti di interesse (POI) {#points-of-interest-pois}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*

![Sovrapposizione POI Android](@site/static/img/map/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*

![Sovrapposizione POI iOS](@site/static/img/map/poi_overlay_ios.png)  

</TabItem>

</Tabs>

I [Punti di interesse (POI)](https://wiki.openstreetmap.org/wiki/Points_of_interest) sono posizioni specifiche contrassegnate da un simbolo sulla mappa. Indicano luoghi e oggetti interessanti o utili e fanno parte delle [Mappe vettoriali](../map/vector-maps.md).  

I POI più importanti vengono visualizzati automaticamente sulla mappa. Tuttavia, puoi selezionare un tipo specifico di POI (ad esempio *Ristoranti*) e tutti verranno evidenziati sulla mappa con un **cerchio arancione** (a partire dal livello di zoom 9).  

Informazioni dettagliate su un punto di interesse si trovano nel [Menu contestuale](../map/map-context-menu.md) che appare quando [tocchi](../map/map-context-menu.md#select-an-object-single-tap) il punto.  


### Tipi di POI {#poi-types}

![Selezione singolo POI](@site/static/img/map/single_selection_android.png) ![Selezione multipla POI](@site/static/img/map/multiple_selection_android.png)

Puoi selezionare uno o più tipi di POI standard di OsmAnd, oppure creare il tuo [filtro POI](../search/search-poi.md) e selezionarlo per visualizzare i POI sulla mappa.

**Android**. Tocca il pulsante in basso a sinistra per passare dalla selezione di uno o più punti di interesse.


### POI stile mappa {#map-style-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

![POI sullo stile mappa](@site/static/img/map/poi_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,rendering_category_hide"/>*

![POI sullo stile topo](@site/static/img/map/poi_layer_topo_style.png)  

</TabItem>

</Tabs>

A ogni tipo di POI in OsmAnd è assegnata un'icona e un colore specifici. Il [livello di zoom](../map/vector-maps.md#details) e il design dei POI potrebbero essere diversi in alcuni [stili di mappa](../map/vector-maps.md#default-map-styles).  

[Leggi di più](../map/vector-maps.md#hide).


## Segnalini {#markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,map_markers_item"/>*

![Segnalini mappa Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,map_markers"/>*

![Segnalini mappa iOS](@site/static/img/map/map_markers_ios.png)  

</TabItem>

</Tabs>

I [Segnalini mappa](../personal/markers.md) sono punti temporanei contrassegnati sulla mappa come bandierine. Il loro aspetto può essere personalizzato utilizzando le **frecce** (Frecce sulla mappa) e l'**indicazione della distanza** (Linee direzionali).  

Puoi leggere di più sull'aspetto dei segnalini in questo [articolo](../personal/markers#appearance-on-the-map).


## Punti tappa del percorso {#track-waypoints}

![Percorso sulla mappa](@site/static/img/map/track_point_on_map.png)

I punti del percorso (punti tappa) fanno parte dei file di percorso (GPX). Questi punti vengono visualizzati automaticamente se il percorso è sulla mappa. Hanno un aspetto e possono essere configurati in modo simile ai [Preferiti](#favorites) - icona, nomi, colore, forma. Come creare e aggiungere un punto tappa, leggi nell'[articolo](../map/tracks/track-context-menu.md#add-waypoint-to-a-track).  

[Leggi di più](../map/tracks/index.md) sui percorsi sulla mappa.


## Risultati di ricerca (POI) {#search-results-poi}

![Ricerca POI](@site/static/img/map/poi_search.png) ![Risultato ricerca POI](@site/static/img/map/poi_search_result.png)

I risultati di ricerca possono essere visualizzati sulla mappa come uno speciale livello di POI. Durante la ricerca, tocca una riga speciale (**<Translate android="true" ids="shared_string_show_on_map"/>**) per visualizzare i POI sulla mappa.  

Per disattivare i POI, tocca **X** nell'angolo in alto a destra.  

Leggi di più sulla [ricerca](../search/index.md).


## * Immagini a livello stradale {#-street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Filtro Mapillary](@site/static/img/map/mapillary_filter.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Vista stradale Mapillary](@site/static/img/map/mapillary_street-view.png)

</TabItem>

</Tabs>

Le [Immagini a livello stradale (Mapillary)](../plugins/mapillary.md) vengono visualizzate come punti verdi sulla mappa. A questi punti sono associate foto della vista stradale. Puoi creare un [filtro](../plugins/mapillary.md#data-filtering) e selezionare le foto che desideri visualizzare sulla mappa. Per aprire una foto di vista stradale, tocca il punto verde.  

Richiede il [plugin Mapillary](../plugins/mapillary.md).


## * Punto di parcheggio {#-parking-point}

![Parcheggio limitato](@site/static/img/map/context_menu_limited_parking.png) ![Parcheggio illimitato](@site/static/img/map/context_menu_unlimited_parking.png)

Un [Punto di parcheggio](../plugins/parking.md) è un punto contrassegnato dagli utenti sulla mappa per memorizzare informazioni sulla posizione esatta del veicolo. Può essere diviso in zone di parcheggio illimitate e limitate.  

Richiede il [plugin Posizione parcheggio](../plugins/parking.md).


## * Wikipedia {#-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Wikipedia sulla mappa](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

![Lingua Wikipedia - iOS](@site/static/img/map/map-wikipedia-language-ios.png)

</TabItem>

</Tabs>

OsmAnd ha punti di interesse speciali contrassegnati da un logo "W" e collegati ad articoli di Wikipedia. Questi punti possono essere visualizzati come qualsiasi altro tipo di POI, tramite ricerca o andando su <Translate android="true" ids="configure_map"/> → <Translate android="true" ids="layer_poi"/>. Tuttavia, esiste un modo speciale per filtrare gli articoli di Wikipedia per **lingue disponibili**.  

[Leggi di più](../plugins/wikipedia.md) su come scaricare e utilizzare la funzione Wikipedia in OsmAnd.


## * Punti audio / video (Android) {#-audio--video-points-android}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![POI AV](@site/static/img/map/av_poi.png)

</TabItem>

</Tabs>

Le note audio/video sono punti con dati audio, foto e video sulla mappa creati dagli utenti.  

Richiede il [plugin Note audio/video](../plugins/audio-video-notes.md).


## * Punti di modifica OSM {#-osm-edit-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![POI di modifica OSM](@site/static/img/map/osm_edit_poi.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_edits_title"/>*

![POI di modifica OSM](@site/static/img/map/osm_edit_poi.png)

</TabItem>

</Tabs>

I punti di modifica OSM sono POI creati dagli utenti per essere aggiunti al [progetto OpenStreetMap](https://www.openstreetmap.org/).  

Richiede il [plugin Modifica OSM](../plugins/osm-editing.md).


## * Note OSM {#-osm-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![Note OSM](@site/static/img/map/osm_note.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_notes_online_layer"/>*

![Note OSM](@site/static/img/map/osm_note.png)

</TabItem>

</Tabs>

Le note OSM sono POI creati dagli utenti per segnalare problemi con i dati della mappa in [OpenStreetMap](https://www.openstreetmap.org/). Le nuove note (non ancora caricate su OpenStreetMap) sono contrassegnate in verde con un **+**, le note chiuse sono contrassegnate in verde con una "V" e le note aperte sono contrassegnate in rosso. Puoi personalizzare il livello di zoom per la visualizzazione delle note e scegliere se mostrare o nascondere le note chiuse.  

Richiede il [plugin Modifica OSM](../plugins/osm-editing.md).


## Punti lungo il percorso {#points-along-the-route}

Punti tappa, POI, punti preferiti e note audio/video si riferiscono tutti al concetto di salvataggio di posizioni e percorsi in [GPX (GPS Exchange Format)](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Puoi utilizzare [gli stessi tag](../map/tracks/track-context-menu.md#display-custom-gpx-tags) per descriverli e modificarli.  

I [Punti tappa](#track-waypoints) sono punti individuali su una mappa o un percorso. Possono essere utilizzati per contrassegnare determinati luoghi che potrebbero essere importanti per la navigazione o la registrazione dei tuoi viaggi. Ad esempio, puoi creare un punto tappa sulla mappa per indicare un incrocio importante o un cambio di direzione.  

I [Punti di interesse (POI)](#points-of-interest-pois) sono luoghi di particolare interesse per gli utenti. Questi possono essere punti di riferimento, ristoranti, hotel, stazioni di servizio e altri luoghi di interesse che potresti voler annotare o visitare.  

I [Punti preferiti](#favorites) sono luoghi che gli utenti trovano particolarmente importanti o interessanti e salvano nel loro elenco di luoghi preferiti. I luoghi possono includere qualsiasi posizione che potresti voler trovare e a cui tornare in seguito.

[Note audio/video](#-audio--video-points-android--audio--video-points-android). Nel formato GPX, puoi salvare registrazioni audio e video come punti tappa. Ciò ti consente di associare file multimediali a posizioni specifiche sulla mappa o sul percorso.  

Tutti questi tipi di punti possono essere salvati in formato GPX per fornirti informazioni sulla posizione e aiutarti con la navigazione e la pianificazione del percorso. Servono a scopi diversi, ma l'idea generale è quella di memorizzare e trasmettere informazioni geografiche in modo da poterle utilizzare nelle loro attività di navigazione.


## Articoli correlati {#related-articles}

- [Menu Configura mappa](../map/configure-map-menu.md)
- [Mappe vettoriali (Stili mappa)](./vector-maps.md)
- [Mappe raster (Online / Offline)](./raster-maps.md)

> *Ultimo aggiornamento: Giugno 2025*