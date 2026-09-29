---
source-hash: d5de9c3084442f355b9b6536f2e73e330ece35ee360363e944195eaf5ddfe9fb
sidebar_position: 6
title:  I miei luoghi
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

**I miei luoghi** è l'hub centrale dell'app OsmAnd per la gestione e la personalizzazione di tutti i dati personali. È possibile utilizzare questa sezione per organizzare [Punti preferiti](#favorites) contrassegnati come importanti o visitati di frequente. La scheda [Tracce](#tracks) consente di visualizzare, importare, registrare e creare file GPX per tenere una cronologia dettagliata dei propri percorsi e viaggi. È inoltre possibile gestire le [Modifiche OpenStreetMap](#openstreetmap-edits), facilitando il contributo ai miglioramenti e agli aggiornamenti delle mappe. Il plugin [Note audio/video](#audiovideo-notes) e i widget consentono agli utenti Android di creare e salvare note multimediali relative a luoghi specifici, aggiungendo contesto ai loro viaggi. Su iOS, I miei luoghi fornisce anche l'accesso alle [Guide di viaggio](#travel-guides) salvate nei segnalibri, consentendo di organizzare e aprire rapidamente i contenuti di viaggio salvati.

## Menu I miei luoghi {#my-places-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>*  

![My Places android](@site/static/img/personal/my_places_android_new.png) ![My places menu Android](@site/static/img/personal/my_places_menu_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>*  

![My Places ios](@site/static/img/personal/my_places_ios_2.png)  ![My places menu iOS](@site/static/img/personal/my_places_menu_ios.webp)

</TabItem>

</Tabs>

I miei luoghi è organizzato per categorie. Seleziona una scheda per gestire i dati corrispondenti.

**Nota:** Tutti i dati memorizzati nel menu *I miei luoghi* possono essere spostati utilizzando un formato speciale `.osf` attraverso le applicazioni del dispositivo. Questo processo semplifica il salvataggio e il trasferimento dei dati tra i dispositivi e consente di condividerli con altri utenti di OsmAnd. 

### Preferiti {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Favorites menu iOS](@site/static/img/personal/favorites_menu_tab_ios.webp)

</TabItem>

</Tabs>

I **Preferiti** consentono di aggiungere ai segnalibri luoghi importanti o visitati di frequente. Questi punti preferiti sono organizzati in cartelle e possono essere personalizzati con colori, forme e icone diverse. È possibile navigare rapidamente verso qualsiasi luogo preferito attraverso il menu **I miei luoghi** senza doverlo cercare ripetutamente.

Per istruzioni complete, consultare l'articolo [Preferiti](../personal/favorites.md).

### Tracce {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.webp)

</TabItem>

</Tabs>

Le **Tracce** offrono potenti strumenti per registrare, creare e gestire percorsi all'interno di OsmAnd. Possono essere utilizzate per la [navigazione](../navigation/setup/gpx-navigation.md), la [registrazione di viaggi](../plugins/trip-recording.md) o l'[integrazione](../personal/tracks/manage-tracks.md#import) di file GPX esterni.

Per una guida completa, consultare l'articolo [Gestisci Tracce](../personal/tracks/manage-tracks.md).

### Modifiche OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm_ios.webp)

</TabItem>

</Tabs>

La funzione **Modifiche OpenStreetMap** di OsmAnd consente di contribuire alla comunità cartografica globale aggiungendo, modificando o commentando i dati della mappa.

Consultare il [plugin Modifica OSM](../plugins/osm-editing.md) per istruzioni passo-passo.

### Note Audio/Video {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

Il **plugin Note Audio/Video** consente di creare note multimediali collegate a posizioni specifiche della mappa. Queste note sono memorizzate in **I miei luoghi** nella **Scheda Note A/V**.

Per ulteriori informazioni, visitare la pagina del [plugin Note Audio/Video](../plugins/audio-video-notes.md).

### Guide di viaggio (iOS) {#travel-guides}

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_travel_guides"/>*

![Travel Guides iOS](@site/static/img/plan-route/travel_guides_ios.webp)

La sezione **Viaggi** contiene le guide di viaggio e gli articoli salvati nei segnalibri per l'accesso offline. È possibile aprire, organizzare e gestire rapidamente i contenuti di viaggio salvati da I miei luoghi. La sezione Viaggi viene visualizzata solo quando è stato salvato nei segnalibri più di una guida di viaggio.

Per informazioni dettagliate, consultare l'articolo [Guide di viaggio](../plan-route/travel-guides.md).

## Articoli correlati {#related-articles}

- [Gestisci Tracce](../personal/tracks/manage-tracks.md#import--export-track)
- [Preferiti](../personal/favorites.md)
- [Modifica OpenStreetMap](../plugins/osm-editing.md)
- [Note Audio/Video](../plugins/audio-video-notes.md)
- [Guide di viaggio](../plan-route/travel-guides.md)
- [Cronologia di ricerca](../search/search-history.md#export-and-share)
- [Schemi di tavolozze di colori](../personal/color-palette-schemes.md)