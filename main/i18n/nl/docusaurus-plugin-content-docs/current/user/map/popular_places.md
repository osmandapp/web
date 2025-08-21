---
source-hash: 0c3b5e8e7cf6ef6e151b2af4c26f3e274170841399bcaf73871ab607bf13fd43
sidebar_position: 8
title: Populaire Plaatsen
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

De functie **Populaire Plaatsen** in OsmAnd markeert opmerkelijke bezienswaardigheden en attracties met behulp van open gestructureerde gegevens van [Wikidata](https://www.wikidata.org) en [Wikipedia](https://www.wikipedia.org/). Het helpt gebruikers bekende bestemmingen te verkennen met meertalige beschrijvingen en foto's.

Elke plaats die in deze functie is opgenomen, is gekoppeld aan een **Wikidata ID**, waardoor OsmAnd geverifieerde namen, voorbeeldafbeeldingen en links naar Wikipedia-artikelen kan weergeven. Dit hulpmiddel toont **niet** alle OpenStreetMap (OSM) punten. Het is beperkt tot POI's met Wikidata-referenties.

Momenteel omvat de samengestelde database ongeveer **50.000 tot 150.000 best beoordeelde plaatsen** wereldwijd, geselecteerd uit meer dan **1 miljoen** Wikidata + OSM-objecten.

:::note
*Dit is de eerste versie van de functie Populaire Plaatsen. Feedback is welkom op [GitHub](https://github.com/osmandapp/OsmAnd)*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Populaire plaatsen](@site/static/img/map/popular_places/popular_places.png) ![Populaire plaatsen](@site/static/img/map/popular_places/popular_places_1.png)

</TabItem>

</Tabs>


### Gegevensbronnen

**Populaire Plaatsen** zijn gebaseerd op gestructureerde inhoud van [Wikidata](https://www.wikidata.org) en [Wikipedia](https://www.wikipedia.org/).

Alleen POI's met een gekoppelde **Wikidata ID** worden weergegeven. Deze ID's verbinden kaartobjecten met geverifieerde namen, beschrijvingen en afbeeldingen.

U kunt de Wikidata-link direct bekijken in het [Kaart Contextmenu](../map/map-context-menu.md). Door op de Wikidata-tag te tikken, wordt de volledige objectpagina op de Wikidata-website geopend.

Leer hoe u een Wikidata ID kunt vinden: [Wikipedia: Een Wikidata ID vinden](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


## Hoe te gebruiken {#how-to-use}

<InfoAndroidOnly/>

De functie **Populaire Plaatsen** omvat zowel een samengestelde lijst van nabijgelegen bezienswaardigheden als een laag van Wikipedia-gebaseerde POI's op de kaart.

Er zijn twee hoofdwegen om toegang te krijgen tot deze functie:

- **Gratis versie**
  Toegang via [Zoeken](#explore-in-search) om nabijgelegen plaatsen in lijstweergave te verkennen.
  *<Translate android="true" ids="android_button_seq"/>*. Ga naar: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

- **Betaalde versies** *(Maps+ en OsmAnd Pro)*
  Schakel de visuele overlay in via [Kaart configureren](#enable-layer).
  *<Translate android="true" ids="android_button_seq"/>*. Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

  In deze modus verschijnen populaire POI's direct op de kaart met miniatuurvoorbeelden en Wikipedia-inhoud.

  U kunt schakelen tussen **online** en **offline** Wikipedia-bronnen in de overlay-instellingen. Meer informatie in [Laag inschakelen](#enable-layer).


## Verkennen in Zoeken {#explore-in-search}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

![Verkenmodus](@site/static/img/map/popular_places/popular_places_search.png)
![Verkenmodus](@site/static/img/map/popular_places/popular_places_search_2.png)

</TabItem>

</Tabs>

De sectie **<Translate android="true" ids="popular_places_nearby"/>** toont een scrollbare lijst met top-bezienswaardigheden in de buurt van uw huidige locatie. Elk item omvat:

- Naam van de plaats.
- Korte beschrijving.
- POI-categorie-tag.
- Afstand en richting.
- Miniatuurafbeelding (indien beschikbaar).

Tik op **Alles tonen** om de volledige lijst te bekijken, of op **Op kaart tonen** om alle vermelde POI's op de kaart weer te geven.

Door op een plaats te tikken, wordt het [POI-contextmenu](./map-context-menu.md) geopend, waar u foto's kunt bekijken en toegang krijgt tot gerelateerde [Wikipedia-inhoud](../plugins/wikipedia.md).

:::tip
De zoekgebaseerde Verkenningsmodus werkt **alleen online** in de gratis versie.
Om deze **offline** te gebruiken, hebt u een [Maps+ of OsmAnd Pro](../purchases/android.md) abonnement en gedownloade [Wikipedia-kaarten](../plugins/wikipedia.md) nodig.
:::


## Laag inschakelen {#enable-layer}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>**. Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Menu populaire plaatsen](@site/static/img/map/popular_places/popular_places_menu.png)

</TabItem>

</Tabs>

De functie **Populaire Plaatsen (Wikipedia)** is beschikbaar in het menu [Kaart configureren](./configure-map-menu.md). Om populaire plaatsen direct op de kaart weer te geven, schakelt u de POI-laag in met gegevens van Wikipedia met behulp van Wikidata-afbeeldingen.

Voordat u deze functie gebruikt:

- Zorg ervoor dat de [Wikipedia-plugin](../plugins/wikipedia.md) is ingeschakeld.
- Download Wikipedia-gegevens voor uw regio als u deze offline wilt gebruiken.

### Laagopties

Eenmaal ingeschakeld, worden de volgende opties beschikbaar:

- **<Translate android="true" ids="poi_osmwiki"/>** – Schakel Wikipedia POI's op de kaart in/uit.

- **POI-bron** – Schakel tussen:
  - *Offlinemodus* (Wikipedia-artikelen moeten worden gedownload).
  - *Alleen online* modus (gebruikt live gegevens en afbeeldingen).

- **<Translate android="true" ids="shared_string_language"/>** – Selecteer de taal voor Wikipedia-beschrijvingen.

- **<Translate android="true" ids="show_image_previews"/>** – Toon miniatuurafbeeldingen van Wikidata naast POI's.

Door op een POI op de kaart te tikken, wordt het [POI-contextmenu](./map-context-menu.md) geopend, waar u [online foto's](#online-photos) kunt bekijken en toegang krijgt tot gekoppelde [Wikipedia-artikelen](../plugins/wikipedia.md).


## Online Foto's {#online-photos}

*<Translate android="true" ids="help_article_map_map_context_menu_name,online_photos"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Online Foto's contextmenu Android](@site/static/img/map/popular_places/online_photos_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Online Foto's contextmenu iOS](@site/static/img/map/popular_places/online_photos_ios.png)

</TabItem>

</Tabs>

Dit is een sectie binnen het [POI-contextmenu](./map-context-menu.md) die een fotovoorbeeld van de geselecteerde Populaire Plaats (Wikipedia) weergeeft. U kunt horizontaal scrollen om door de beschikbare foto's te bladeren, of op een afbeelding tikken om deze in [volledig scherm](#gallery) te openen.

Meer informatie over aanvullende opties vindt u in de sectie [Acties](#actions) en [Galerij](#gallery).


<!--

When you tap a Popular Place on the map or from the list, the [POI context menu](./map-context-menu.md) includes an **Online Photos** section with a horizontal preview of images.

- Tap any photo to view it in fullscreen.
- Swipe to browse more images.

For more actions like sharing, viewing metadata, or downloading — see [Gallery](#gallery).

-->

### Acties {#actions}

In het Kaart Contextmenu Hoe te openen:

- Tik op de knop **Alles tonen** (Android) / **Alles bekijken** (iOS) om de [galerij](#gallery) in volledig scherm te openen, waar u door alle beschikbare foto's voor de geselecteerde locatie kunt vegen.

- Tik op een foto om deze in [volledig scherm](#gallery) te bekijken en toegang te krijgen tot de beschikbare acties:
  **Delen**, **Details**, **Openen in browser** en **Downloaden**.


### Galerij {#gallery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Galerijmenu – Android](@site/static/img/map/gallery_menu_android.png)
![Galerijmenu – Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Galerijmenu – iOS](@site/static/img/map/gallery_menu_ios.png)
![Galerijmenu – iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


Het **Galerijmenu** kan maximaal **100 afbeeldingen** weergeven die gerelateerd zijn aan het geselecteerde punt van interesse. U kunt door alle beschikbare foto's vegen. Door kort op een foto te tikken, wordt een gedetailleerde weergave geopend met: *Naam*, *Datum toegevoegd*, *Auteur*, *Licentie*

U kunt ook de volgende acties uitvoeren op elke foto:

- **Delen**
  De geselecteerde afbeelding delen met elke compatibele app die op uw apparaat is geïnstalleerd (bijv. berichten, e-mail of sociale media). De gedeelde inhoud omvat de afbeelding en de bronlink (indien beschikbaar).

- **Details**
  Een gedetailleerde weergave openen met metadata over de afbeelding, inclusief: *Naam*, *Datum toegevoegd*, *Auteur*, *Licentie*, *Bron* en *Directe link*

- **Openen in browser**
  De bronpagina van de afbeelding (meestal op [Wikimedia Commons](https://commons.wikimedia.org/)) openen in uw standaardbrowser. Hiermee kunt u de volledige afbeelding, licentie-informatie en gerelateerde inhoud bekijken.

- **Downloaden**
  De afbeelding opslaan op de opslag van uw apparaat. De gedownloade afbeelding is te vinden in de standaardmap Downloads van uw apparaat en is offline toegankelijk.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

De Android-versie bevat geen extra menu voor fotoacties.

</TabItem>

<TabItem value="ios" label="iOS">

![iOS - Contextmenu-opties](@site/static/img/map/gallery_menu_ios_3.png)

Op **iOS** opent een lange druk op een foto een contextmenu met aanvullende acties:

- **Details**
- **Openen in browser**
- **Downloaden**

**Knoppen**:

- Met de knop **Delen** kunt u de geselecteerde afbeelding snel delen.
- Het **drie-puntenmenu** biedt toegang tot extra acties, waaronder het bekijken van details, het openen van de bron in een browser of het downloaden van de afbeelding.

</TabItem>

</Tabs>


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android – Detailsweergave](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS – Detailsweergave](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>

Het scherm **Details** biedt volledige metadata voor de geselecteerde foto, inclusief: *Naam*, *Datum toegevoegd*, *Auteur*, *Licentie*, *Bron* en *Directe link*


## Gerelateerde artikelen

- [Kaart Contextmenu](./map-context-menu.md)
- [Kaart configureren](./configure-map-menu.md)
- [POI zoeken](../search/search-poi.md)
- [Wikipedia-plugin](../plugins/wikipedia.md)


> *Laatst bijgewerkt: juli 2025*


<!--
### Online Foto's 2

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Online Foto's contextmenu Android](@site/static/img/map/images_nearby_1_andr.png) ![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Online Foto's contextmenu iOS](@site/static/img/map/online_photo_ios.png) ![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

#### Acties met foto's

Hoe te openen:

- Tik op de knop **Alles tonen**(Android) / **Alles bekijken**(iOS) om [de galerij](#gallery-menu) in volledig scherm te openen. Daar kunt u door alle afbeeldingen vegen die gerelateerd zijn aan de geselecteerde locatie.

- Tik op een foto om toegang te krijgen tot acties zoals *Delen*, *Details*, *Openen in browser* en *Downloaden*.

- U kunt ook [straatbeelden bekijken](../map/point-layers-on-map.md#-street-level-imagery) op de kaart.

In de sectie **Online foto's** van het kaartcontextmenu hebt u toegang tot foto's van objecten van [Wikimedia](https://www.wikimedia.org/), die mediabestanden aanbiedt die zijn getagd met `image` of `wikimedia` van OpenStreetMap.

#### Galerijmenu 2

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Online Foto's contextmenu Android](@site/static/img/map/gallery_menu_android.png) ![Street-Level Imagery Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Online Foto's contextmenu iOS](@site/static/img/map/gallery_menu_ios.png) ![Street-Level Imagery iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


De galerij kan maximaal 100 items weergeven. U kunt door alle foto's bladeren, en kort tikken op een foto opent deze om aanvullende details (*Naam*, *Datum*, *Auteur*, *Licentie*) te bekijken en verschillende acties uit te voeren (*Delen*, *Details*, *Openen in browser* en *Downloaden*).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">

![Online Foto's contextmenu iOS](@site/static/img/map/gallery_menu_ios_3.png)

</TabItem>

</Tabs>



Op iOS opent een lange druk op een foto een aanvullend menu met acties zoals *Details*, *Openen in browser* en *Downloaden*.

Knoppen:

- Met de knop **Delen** kunt u het geselecteerde item delen.
- De knop **Drie punten** opent een menu met opties zoals *Details*, *Openen in browser* en *Downloaden*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Online Foto's contextmenu Android](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Online Foto's contextmenu iOS](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>


Het Details-scherm biedt informatie zoals de *Naam*, *Toevoegingsdatum*, *Auteur*, *Licentie*, *Bron* en *Link* van het geselecteerde item.

-->