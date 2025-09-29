---
source-hash: 479b492a4c86a0646befd8187d85091dd523d1e848bf8bd1a5f10175948ab1bf
sidebar_position: 6
title:  Mijn Plaatsen
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


<InfoIncompleteArticle/>

## Overzicht {#overview}

**Mijn Plaatsen** is de centrale hub in de OsmAnd-app voor het beheren en aanpassen van alle persoonlijke gegevens. U kunt deze sectie gebruiken om [Favoriete punten](#favorites) te organiseren die als belangrijk of vaak bezocht zijn gemarkeerd. Het tabblad [Tracks](#tracks) stelt u in staat GPX-bestanden te bekijken, importeren, opnemen en maken om u te helpen een gedetailleerde geschiedenis van uw routes en reizen bij te houden. U kunt ook uw [OpenStreetMap-bewerkingen](#openstreetmap-edits) beheren, wat het bijdragen aan kaartverbeteringen en -updates eenvoudig maakt. De [Audio-/videonotities](#audiovideo-notes) plugin en widgets stellen Android-gebruikers in staat om multimedianotities te maken en op te slaan die gerelateerd zijn aan specifieke locaties, waardoor context aan hun reizen wordt toegevoegd.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu"/> → Mijn Plaatsen*  

![Mijn Plaatsen android](@site/static/img/personal/my_places_android.png) ![Mijn plaatsen menu Android](@site/static/img/personal/my_places_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate android="true" ids="shared_string_menu"/> → Mijn Plaatsen*  

![Mijn Plaatsen ios](@site/static/img/personal/my_places_ios.png)  ![Mijn plaatsen menu iOS](@site/static/img/personal/my_places_menu_ios.png)

</TabItem>

</Tabs>

- [***Gegevens importeren en exporteren***](../personal/import-export.md):  

    Alle gegevens die zijn opgeslagen in het menu *Mijn Plaatsen* kunnen worden verplaatst met behulp van een speciaal `.osf`-formaat via applicaties op uw apparaat. Dit proces vereenvoudigt het opslaan en overdragen van gegevens tussen apparaten en stelt u in staat deze te delen met andere OsmAnd-gebruikers.  

    **Ga naar** de sectie *<Translate android="true" ids="shared_string_menu,shared_string_settings"/>* en selecteer of u gegevens wilt exporteren of importeren. Als u *exporteren* selecteert, moet u de groep *Mijn Plaatsen* uitvouwen en de vereiste gegevens aanvinken.

- [***Kaarten & Bronnen***](../personal/maps-resources.md):  

    Het *Hoofdmenu*-item *Kaarten & Bronnen* van de OsmAnd-applicatie biedt toegang tot gegevensbeheer vanuit de sectie *Mijn Plaatsen*. Het tabblad [*Lokaal*](../personal/maps-resources.md#local) toont u hoeveel ruimte wordt ingenomen door alle bestaande OsmAnd-gegevens op uw apparaat, en in het bijzonder de sectie *Mijn Plaatsen*. U kunt het gebruiken om gedetailleerde informatie over uw gegevens te krijgen en toegang te krijgen tot het beheer ervan. De sectie kan alleen items bevatten waarvoor gegevens zijn gedownload.  

    **Ga naar** *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Controleer en beheer uw gegevens.


## Favorieten {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorieten menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorieten menu iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

**Favorieten** stellen u in staat om belangrijke of vaak bezochte locaties te markeren. Deze favoriete punten zijn georganiseerd in mappen en kunnen worden aangepast met verschillende kleuren, vormen en pictogrammen. U kunt snel naar elke favoriete plaats navigeren via het menu **Mijn Plaatsen** zonder er herhaaldelijk naar te hoeven zoeken.


1. ***Actieknoppen***. *Actieknoppen* onderaan het scherm Mijn Plaatsen stellen u in staat de lijst met mappen met uw favorieten te beheren:  

    - **Importeren** (*Toevoegen* knop) — Hiermee kunt u *favorite.gpx*-bestanden importeren vanuit de opslag van uw apparaat.

    - **Exporteren** — Sla uw favoriete punten op als een *favorites.gpx*-bestand voor extern gebruik of als back-up.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*Alleen Android*) — U kunt elk favoriet punt of de hele lijst met favoriete punten in een map toevoegen aan de [lijst met kaartmarkeringen](../personal/markers.md).

    - **Verwijderen** (*op iOS bevindt deze optie zich in het menu Bewerken*) — Verwijder favoriete punten één voor één of geselecteerde favoriete mappen en alle punten die ze bevatten.

2. ***Drie-puntenmenu*** (*Android*) en ***lang tikken*** (*iOS*). Gebruik het *drie-puntenmenu* naast elke map of *tik lang* op de map om groepen favorieten te beheren:  

    <Tabs groupId="operating-systems" queryString="current-os">

    <TabItem value="android" label="Android">

    ![Drie-puntenmenu](@site/static/img/personal/favorites_three-dot_menu.png)

    </TabItem>

    <TabItem value="ios" label="iOS">

    ![Favorieten menu iOS](@site/static/img/personal/favorites_long-tap_ios.png)

    </TabItem>

    </Tabs>

    - **<Translate android="true" ids="shared_string_rename"/>** — Gebruik deze optie om de naam van de geselecteerde map te wijzigen.

    - **<Translate android="true" ids="change_default_appearance"/>** — Pas aan hoe de favoriete punten in de map op de kaart verschijnen door hun pictogrammen, kleuren of labels te wijzigen.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** of **Verberg op kaart** — Schakel deze optie in of uit om de favoriete punten uit de map op de kaart weer te geven of te verbergen.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** of **Verwijder van kaartmarkeringen** (*Alleen Android*) — Voeg alle favoriete punten uit de map toe aan de *lijst met kaartmarkeringen* of verwijder ze indien nodig voor gemakkelijke referentie.

    - **<Translate android="true" ids="shared_string_share"/>** — Deel de favoriete punten in de map door ze te exporteren als een *Favorites.gpx*-bestand, waardoor het gemakkelijk is om uw gegevens over te dragen of een back-up te maken.

    - **<Translate android="true" ids="shared_string_delete"/>** — Verwijder permanent de geselecteerde favorietenmap en alle punten daarin.

Voor meer gedetailleerde instructies, raadpleeg het artikel [Favorieten](../personal/favorites.md).


## Tracks {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*

![Mijn Plaatsen met tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Mijn Plaatsen met tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

**Tracks** bieden krachtige hulpmiddelen voor het opnemen, maken en beheren van routes binnen OsmAnd. Ze kunnen worden gebruikt voor [navigatie](../navigation/setup/gpx-navigation.md), [ritregistratie](../plugins/trip-recording.md), of het [integreren](../personal/tracks/manage-tracks.md#import) van externe GPX-bestanden.

- **Tabblad Tracks** — Alle tracks die ooit zijn opgenomen, gemaakt of geïmporteerd, worden automatisch weergegeven in de map *Mijn Plaatsen* op het tabblad *Tracks*. Ze zijn georganiseerd per map of worden weergegeven in een lijst eronder.

- **Een track maken** — Start de opname via het **Tabblad Tracks** of de [Ritregistratie-plugin](../plugins/trip-recording.md).

- **Bekijken en bewerken** — Open de lijst met tracks via *Mijn Plaatsen* en beheer ze met het *drie-puntenmenu* voor [mappen](../personal/tracks/manage-tracks.md#track-folder) of het menu voor een [enkele track](../personal/tracks/manage-tracks.md#search).

- **Beheren** — Gebruik de [Filter](../personal/tracks/smart-folder.md#available-filters) en [Slimme map](../personal/tracks/smart-folder.md#smart-folder) tools om tracks te organiseren op basis van specifieke parameters.

- **Weergave en analyse** — [Pas](../map/tracks/appearance.md) de visuele stijl van tracks aan en [analyseer](../map/tracks/index.md#analyze-track-on-map) ze met OsmAnd's [Plan een Route](../plan-route/create-route.md) tool.

Voor uitgebreide begeleiding, zie het artikel [Tracks beheren](../personal/tracks/manage-tracks.md).


## OpenStreetMap-bewerkingen {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Delen](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Delen](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

</Tabs>

De functie **OpenStreetMap-bewerkingen** van OsmAnd stelt u in staat bij te dragen aan de wereldwijde kaartgemeenschap door kaartgegevens toe te voegen, te wijzigen of er commentaar op te geven.

1. ***Actieknoppen***. U kunt de *actieknoppen* op het scherm Mijn Plaatsen gebruiken om uw lijst met notities te beheren:  

    ![Delen](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **Bestanden uploaden naar OSM** — Stuur uw notities en gegevens naar OpenStreetMap om bij te dragen aan de gemeenschap.

    - **Exporteren** (*Alleen Android*) — Sla uw notities en POI's op als bestanden voor extern gebruik of als back-up, met opties om te exporteren als OSM-notities, POI's of alle gegevens gecombineerd.

    - **Verwijderen** — Verwijder geselecteerde items permanent uit uw lijst.


2. ***Drie-puntenmenu***. U kunt specifieke POI's of notities beheren met het *drie-puntenmenu* naast elke notitie:  

    ![Drie-puntenmenu](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **Bewerking uploaden naar OSM** — Dien uw wijzigingen of bewerkingen in bij OpenStreetMap zodat anderen ze kunnen zien.

    - **Toon op kaart** — Toon de specifieke locatie van de POI of notitie op de kaart.

    - **OSM-wijziging/notitie aanpassen** — Maak verdere bewerkingen aan de POI of notitie die al aan OpenStreetMap zijn toegevoegd.

    - **Verwijderen** — Verwijder de geselecteerde POI of notitie uit uw lijst.

Raadpleeg de [OSM-bewerkingsplugin](../plugins/osm-editing.md) voor stapsgewijze instructies.


## Audio-/videonotities {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin Mijn plaatsen menu Drie acties](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

De **Audio-/videonotities-plugin** stelt u in staat multimedianotities te maken die gekoppeld zijn aan specifieke kaartlocaties. Deze notities worden opgeslagen in **Mijn Plaatsen** onder het **Tabblad A/V-notities**.

1. ***Actieknoppen***. U kunt de *actieknoppen* onderaan het scherm Mijn Plaatsen gebruiken om uw lijst met notities te beheren:  

    ![Delen](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** — Opent een selectie van sorteermethoden, *Op type* of *Op datum*, en sorteert de lijst dienovereenkomstig wanneer geselecteerd.

    - **<Translate android="true" ids="shared_string_share"/>** — Toont een checklist van alle notities, inclusief die welke als waypoints aan GPX-bestanden zijn toegevoegd. Eerst worden de vereiste notities aangevinkt, dan stelt het *Deel*-pictogram in de rechterbovenhoek van het scherm beschikbare deelopties voor, en ten slotte worden deze notities beschikbaar volgens de geselecteerde optie.

    - **Delen met GPX-waypoints** — U kunt de notities die als waypoints zijn geselecteerd in het menu *Mijn Plaatsen* delen door er [GPX-gegevens](../plugins/audio-video-notes.md#share-with-gpx-waypoints) aan toe te voegen met de knop **Delen** onderaan het scherm van het tabblad *A/V-notities*.

    - **<Translate android="true" ids="shared_string_delete"/>** — Toont een checklist van alleen audio-, foto- en videonotities. Vink eerst de onnodige notities aan, tik dan op het *Verwijder*-pictogram in de rechterbovenhoek van het scherm, na bevestiging worden de geselecteerde notities permanent verwijderd.


2. ***Drie-puntenmenu***. U kunt specifieke audio-, video- of fotonotities beheren met het *drie-puntenmenu* naast elke notitie:  

    ![Drie-puntenmenu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — Bekijkt of beluistert de geselecteerde audio-, video- of fotonotitie direct.

    - **<Translate android="true" ids="shared_string_share"/>** — Deelt de notitie met anderen via verschillende apps of platforms.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** — Toont de gerelateerde locatie en het [Contextmenu](../plugins/audio-video-notes#show-on-the-map) van de notitie op de kaart.

    - **<Translate android="true" ids="shared_string_rename"/>** — Wijzig de naam van de notitie in iets meer beschrijvends of relevants.

    - **<Translate android="true" ids="shared_string_delete"/>** — Geselecteerde notities worden permanent uit uw verzameling verwijderd.

Voor meer informatie, bezoek de pagina van de [Audio-/videonotities-plugin](../plugins/audio-video-notes.md).


<!--
### Share with GPX Waypoints {#share-with-gpx-waypoints}

![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

You can share the notes selected as waypoints in the *My Places* menu by adding [GPX data](../plugins/audio-video-notes.md#share-with-gpx-waypoints) to them using the **Share** button at the bottom of the *A/V notes* tab screen.

### Manage Single Note {#manage-single-note}

![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

You can manage specific audio, video, or photo notes using the **three-dot menu** next to each note:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Views or listens to the selected audio, video, or photo note directly.
- **<Translate android="true" ids="shared_string_share"/>**. Shares the note with others through various apps or platforms.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Displays the related location and [Context menu](../plugins/audio-video-notes#actions-in-map-context-menu) of the note on the map.
- **<Translate android="true" ids="shared_string_rename"/>**. Change the name of the note to something more descriptive or relevant.
- **<Translate android="true" ids="shared_string_delete"/>**. Selected notes are permanently deleted from your collection.
-->

## Gerelateerde artikelen {#related-articles}

- [Tracks beheren](../personal/tracks/manage-tracks.md#import--export-track)
- [Zoekgeschiedenis](../search/search-history.md#export-and-share)
- [Kleurenpaletschema's](../personal/color-palette-schemes.md)