---
source-hash: fac05f4f13c5bd5f7843d69f6e63dcd842a9f677768496e4a171674d0bf80050
sidebar_position: 8
title: Markeringen
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


## Overzicht {#overview}

Markeringen zijn speciale punten die op de kaart zijn gemarkeerd als vlaggen en die snel kunnen worden aangemaakt met een enkele tik, zonder dat een naam en andere informatie hoeven te worden opgegeven, in tegenstelling tot [Favoriete punten](./favorites.md). Markeringen bieden ook extra functionaliteit met [widgets](../widgets/markers.md), **pijlen** (<Translate android="true" ids="show_arrows_on_the_map"/>) en **afstandsaanduiding** (<Translate android="true" ids="show_direction"/>).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kaartmarkeringen Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kaartmarkeringen iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

## Markeringen {#markers}

### Markeringen toevoegen / bewerken {#add--edit-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Tik kort of lang op de kaart en selecteer de gewenste actie uit het [kaartcontextmenu](../map/map-context-menu.md#add--edit-marker).

![Markering toevoegen bewerken actie Android](@site/static/img/map/add_marker_android.png) ![Markering passeren actie Android](@site/static/img/map/action_pass_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Tik kort of lang op de kaart en kies de gewenste actie in het [kaartcontextmenu](../map/map-context-menu.md#add--edit-marker).

![Markering toevoegen bewerken actie iOS](@site/static/img/map/add_marker_ios.png) ![Markering herstellen actie Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Het is mogelijk om een punt of object te markeren om het plannen van de navigatie te vergemakkelijken. U hoeft alleen maar op het *vlag*-pictogram (*Android*) of *pijl*-pictogram (*iOS*) in het menu te tikken om de richting en afstand tot het geselecteerde punt vanaf uw huidige locatie (of het middelpunt van de kaart / het initiële aanraakpunt van de kaart wanneer Locatie is uitgeschakeld) weer te geven.

***Acties***:

- **<Translate android="true" ids="shared_string_marker"/>** / **<Translate android="true" ids="edit_map_marker"/>**. Plaatst een nieuwe markering op het geselecteerde punt.
- **Gepasseerd markeren** (*Android*) / Verwijderen (iOS). Deactiveert de markering en plaatst deze in de Geschiedenis.
- **Actief maken** (*Android*). Verplaatst de markering naar de bovenste positie (op het bovenste paneel).
- **Markering herstellen** (*Android*). Verplaatst de markering van Geschiedenis naar de actieve lijst.

:::note
U kunt een markering niet direct verwijderen; u moet deze eerst deactiveren (als gepasseerd markeren), zodat deze naar [Geschiedenis](#history) wordt verplaatst en u deze vervolgens permanent uit de geschiedenis kunt verwijderen. Zodra een markering is gedeactiveerd, wordt deze van de kaart en de reislijst verwijderd.
:::


<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/>  or <Translate android="true" ids="remove_from_map_markers"/>.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### Reislijst {#itinerary-list}

De reislijst is een geordende lijst van markeringen, waarbij de bovenste 1e markering wordt gebruikt in widgets voor navigatie. Lees hier meer over in het artikel [Navigeren met markeringen](../navigation/setup/markers-navigation.md#itinerary-list).

### Markeringsgroepen {#marker-groups}

<InfoAndroidOnly />

![Kaartmarkeringen Groepen Android](@site/static/img/personal/markers/map_markers_groups_add_android.png)

Markeringen kunnen als een hele groep worden toegevoegd en verwijderd uit een Favorietengroep of een GPX-bestand met waypoints. Dit maakt het erg handig om te gebruiken in een speciale navigatiemodus - [Navigeren met markeringen](../navigation/setup/markers-navigation.md#add-group-of-favorite).

### Geschiedenis {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kaartmarkeringen Geschiedenis Android](@site/static/img/personal/markers/map_markers_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kaartmarkeringen Geschiedenis iOS](@site/static/img/personal/markers/map_markers_history_ios.png)

</TabItem>

</Tabs>

Geschiedenis is een lijst van alle gedeactiveerde (gepasseerde) markeringen. Vanuit deze lijst is het mogelijk om een markering permanent te verwijderen of terug te zetten.


## Weergave op de kaart {#appearance-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![weergave_op_de_kaart](@site/static/img/widgets/appearence_on_the_map-01.png) ![weergave_op_de_kaart](@site/static/img/widgets/appearence_on_the_map-02.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,map_markers,appearance_on_map"/>*

![Kaartmarkeringen Weergave iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png) ![Kaartmarkeringen Weergave iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

</TabItem>

</Tabs>

Het menu *Weergave op kaart* is een algemene instelling voor het weergeven van markeringen en aanvullende aanwijzers ernaartoe.
In de iOS-versie van OsmAnd is *Weergave op kaart* ook een instelling voor het weergeven van widgets. Er zijn ook aanvullende instellingen voor het [configureren van de widgets met markeringen](../widgets/markers.md#configure-marker-widgets).

- **Actieve markeringen**. Toont informatie over de eerste of twee markeringen in de lijst met kaartmarkeringen.
- **Afstandsaanduiding** *(voor iOS)*. Hiermee kunt u kiezen of widgets wel of niet worden weergegeven en hoe ze worden weergegeven: boven de kaart (Bovenbalk) of aan de rechterkant van het scherm (Widgets).
- **Pijlen op de kaart**. Geeft de richting aan naar de gevolgde markering (één of twee) als een pijl op de kaart. Als de markering in het zichtbare deel van de kaart ligt, wordt er geen pijl weergegeven.
- **Richtinglijn**. Toont de richting, als een stippellijn, van een bepaald punt op de kaart naar de gevolgde markering in een rechte lijn.
- ***Eén tik*** actief (*voor Android*). Met één tik op de gewenste markering op de kaart, verplaatst deze markering naar de bovenkant van de lijst met actieve kaartmarkeringen zonder het contextmenu te openen.
- **Gepasseerde markeringen op de kaart houden** *(voor Android)*. Markeringen die zijn toegevoegd als een groep Favorieten of GPX-waypoints die als Gepasseerd zijn gemarkeerd, blijven op de kaart staan. Als de groep niet actief is, verdwijnen de markeringen van de kaart.


## Route plannen voor markeringen {#plan-route-for-markers}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![Kaartmarkeringen Route plannen punten Android](@site/static/img/personal/markers/map_markers_plan_route_points_android.png) ![Kaartmarkeringen Route plannen opties Android](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

Met de functionaliteit van de tool 'Route plannen' in de lijst met markeringen kunt u *Markeringen* sorteren op *Deur-tot-deur*, ze in omgekeerde volgorde plaatsen of een *Rondreis* maken. Als u op de optie *Navigatie* tikt, worden *Markeringen* gebruikt als [tussenbestemmingen](../navigation/setup/route-navigation.md#intermediate-destinations).


## Acties {#actions}

<InfoAndroidOnly />

![Kaartmarkeringen Meer Android](@site/static/img/personal/markers/map_markers_more_android.png)

- **<Translate android="true" ids="sort_by"/>**. Markeringen kunnen in de lijst worden gesorteerd op naam, nabijheid, toevoegtijd.
- **<Translate android="true" ids="appearance_on_the_map"/>** of **<Translate ios="true" ids="shared_string_appearance"/>**. [Instellingen voor kaartmarkeringen](#appearance-on-the-map).
- **<Translate android="true" ids="coordinate_input"/>**. Voegt markeringen toe via [coördinateninvoer](../plan-route/coordinate-input.md).
- **<Translate android="true" ids="plan_route"/>**. Bouwt een route [voor navigatie](../navigation/setup/markers-navigation.md) met behulp van gekozen markeringen.
- **<Translate android="true" ids="marker_save_as_track"/>**. Slaat actieve markeringen op in een GPX-bestand.
- **<Translate android="true" ids="move_all_to_history"/>**. Deactiveert alle markeringen en verplaatst ze naar [Geschiedenis](#history).


## Gerelateerde artikelen {#related-articles}

- [Navigatie met markeringen](../navigation/setup/markers-navigation.md)
- [Markeringswidgets](../widgets/markers.md)

> *Laatst bijgewerkt: augustus 2024*