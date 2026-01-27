---
source-hash: 822817a60d43552808de6f3ba701ff373fc32cdd07367b0d49b825e58a1bdb4e
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

## Overzicht {#overview}

**Mijn Plaatsen** is de centrale hub in de OsmAnd-app voor het beheren en aanpassen van alle persoonlijke gegevens. U kunt deze sectie gebruiken om [Favoriete punten](#favorites) te organiseren die als belangrijk of vaak bezocht zijn gemarkeerd. Het tabblad [Tracks](#tracks) stelt u in staat GPX-bestanden te bekijken, importeren, opnemen en maken om u te helpen een gedetailleerde geschiedenis van uw routes en reizen bij te houden. U kunt ook uw [OpenStreetMap-bewerkingen](#openstreetmap-edits) beheren, wat het bijdragen aan kaartverbeteringen en -updates eenvoudig maakt. De [Audio-/videonotities](#audiovideo-notes) plugin en widgets stellen Android-gebruikers in staat om multimedianotities te maken en op te slaan die gerelateerd zijn aan specifieke locaties, waardoor context aan hun reizen wordt toegevoegd.

## Mijn Plaatsen Menu {#my-places-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu"/> → Mijn Plaatsen*  

![Mijn Plaatsen android](@site/static/img/personal/my_places_android_new.png) ![Mijn plaatsen menu Android](@site/static/img/personal/my_places_menu_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate android="true" ids="shared_string_menu"/> → Mijn Plaatsen*  

![Mijn Plaatsen ios](@site/static/img/personal/my_places_ios_new.png)  ![Mijn plaatsen menu iOS](@site/static/img/personal/my_places_menu_ios_new.png)

</TabItem>

</Tabs>

Mijn Plaatsen is georganiseerd per categorieën. Selecteer een tabblad om de bijbehorende gegevens te beheren.

**Opmerking:** Alle gegevens die zijn opgeslagen in het menu *Mijn Plaatsen* kunnen worden verplaatst met behulp van een speciaal `.osf`-formaat via applicaties op uw apparaat. Dit proces vereenvoudigt het opslaan en overdragen van gegevens tussen apparaten en stelt u in staat deze te delen met andere OsmAnd-gebruikers. 

### Favorieten {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorieten menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorieten menu iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

**Favorieten** stellen u in staat om belangrijke of vaak bezochte locaties te markeren. Deze favoriete punten zijn georganiseerd in mappen en kunnen worden aangepast met verschillende kleuren, vormen en pictogrammen. U kunt snel naar elke favoriete plaats navigeren via het menu **Mijn Plaatsen** zonder er herhaaldelijk naar te hoeven zoeken.

Voor volledige instructies, raadpleeg het artikel [Favorieten](../personal/favorites.md).

### Tracks {#tracks}

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

Voor uitgebreide begeleiding, zie het artikel [Tracks beheren](../personal/tracks/manage-tracks.md).

### OpenStreetMap-bewerkingen {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Delen](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Delen](@site/static/img/plugins/osm-editing/my_places_osm_ios.png)

</TabItem>

</Tabs>

De functie **OpenStreetMap-bewerkingen** van OsmAnd stelt u in staat bij te dragen aan de wereldwijde kaartgemeenschap door kaartgegevens toe te voegen, te wijzigen of er commentaar op te geven.

Raadpleeg de [OSM-bewerkingsplugin](../plugins/osm-editing.md) voor stapsgewijze instructies.

### Audio-/videonotities {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin Mijn plaatsen menu Drie acties](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

De **Audio-/videonotities-plugin** stelt u in staat multimedianotities te maken die gekoppeld zijn aan specifieke kaartlocaties. Deze notities worden opgeslagen in **Mijn Plaatsen** onder het **Tabblad A/V-notities**.

Voor meer informatie, bezoek de pagina van de [Audio-/videonotities-plugin](../plugins/audio-video-notes.md).

## Gerelateerde artikelen {#related-articles}

- [Tracks beheren](../personal/tracks/manage-tracks.md#import--export-track)
- [Favorieten](../personal/favorites.md)
- [OpenStreetMap-bewerking](../plugins/osm-editing.md)
- [Audio-/videonotities](../plugins/audio-video-notes.md)
- [Zoekgeschiedenis](../search/search-history.md#export-and-share)
- [Kleurenpaletschema's](../personal/color-palette-schemes.md)