---
source-hash: b135d6ac31fa46429b660eb2f3ae6ef45da09abdde63b630471d719e780dd21e
sidebar_position: 3
title: Kaart Contextmenu
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

Het kaartcontextmenu geeft informatie over het geselecteerde object op de kaart. U kunt het ook gebruiken om een route naar de geselecteerde locatie te maken. Om het contextmenu te openen, zoekt u eerst de gewenste locatie op de kaart en selecteert u vervolgens het object met een korte tik of een lange tik wanneer u een precies punt op de kaart selecteert.


### Een object selecteren (enkele tik) {#select-an-object-single-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Contextmenu Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Contextmenu iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

Het **contextmenu** verschijnt wanneer u **één keer tikt** op een gemarkeerd object op de kaart. Dit contextmenu toont essentiële informatie over het geselecteerde object, inclusief de *naam*, het *icoon* (zoals weergegeven op de kaart), het *adres, de afstand*, de *grenzen* en de *richting* vanaf uw huidige positie.  

U kunt verschillende soorten kaartobjecten selecteren, zoals *POI's*, *favorieten*, *vervoershaltes*, *markeringen*, *bergtoppen* of andere *kaartobjecten*.

:::note
- Geselecteerde kaartobjecten en hun grenzen komen overeen met OpenStreetMap [**nodes**](https://wiki.openstreetmap.org/wiki/Node) of [**ways**](https://wiki.openstreetmap.org/wiki/Way).
- *De hoogte van bergtoppen wordt weergegeven in meters of voeten, afhankelijk van de [lengte-eenheden](../personal/profiles.md#units--formats) die in de profielinstellingen zijn geselecteerd.*
:::



### Een willekeurig punt selecteren (lang tikken) {#select-any-point-long-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contextmenu lang tikken Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Contextmenu lang tikken iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

Wanneer u ergens op de kaart **lang tikt**, verschijnt er een **contextmenu** met informatie over de geselecteerde locatie. Dit omvat het adres, de afstand en de richting vanaf uw huidige positie.


### GPX-route selecteren {#select-gpx-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Context trackmenu Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Statistiekenscherm track iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

Door op een [GPX-track](../map/tracks/index.md) op de kaart te tikken, wordt het [trackcontextmenu](../map/tracks/track-context-menu.md) geopend, waar u toegang hebt tot extra trackgerelateerde opties.



### Routes, skipistes en paden {#routes-and-trails}

![Skipistes en MTB-paden](@site/static/img/map/ski_mtb.png)  ![Skipistes en MTB-paden](@site/static/img/map/ski_mtb_2.png)

U kunt op kaartelementen tikken zoals **skipistes**, **mountainbike (MTB) routes** en **crossmotorpaden** om hun contextmenu met gedetailleerde informatie te openen. Bekijk het [Routes-artikel](../map/routes.md#actions-with-routes) voor meer informatie.



### Contextmenu verbergen {#hide-context-menu}

Om het **contextmenu** te sluiten:

- Tik op een *leeg gebied* op de kaart om te voorkomen dat het menu opnieuw wordt geopend.
- Sleep het menu *naar beneden* vanaf de bovenkant.


## Details {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Contextmenu Android](@site/static/img/map/context_menu_2_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Contextmenu iOS](@site/static/img/map/context_menu_2_ios.png)

</TabItem>

</Tabs>

Voor meer gedetailleerde informatie over een object, tikt u op de knop **Details** in het contextmenu of veegt u het paneel omhoog om het uit te vouwen.


### Objectinfo {#object-info}

Het **Objectinfo**-paneel biedt aanvullende details over het geselecteerde object. U kunt op een item tikken om de informatie naar het klembord te kopiëren.  

Beschikbare details zijn onder andere:

- [Alternatieve namen](#alternative-names)
- [Coördinaten](#coordinates)
- [Binnen gebieden](#polygon-information)
- [Nabije POI's](#nearby-pois)
- [Nabije populaire plaatsen](#nearby-popular-places)
- [Openbaarvervoerroutes voor haltes](#public-transport-routes)
- [Favorieten / Trackpunten uit dezelfde groep](#favorites--track-points-from-the-group)
- [OpenStreetMap-link](#openstreetmap-link)
- [Online foto's](#online-photos)

Daarnaast kan het paneel [OpenStreetMap Details](https://wiki.openstreetmap.org/wiki/Map_features) bevatten, zoals:

- [Website](https://wiki.openstreetmap.org/wiki/Key:website)
- [Telefoonnummer](https://wiki.openstreetmap.org/wiki/Key:contact)
- [Openingstijden](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
- [Kosten](https://wiki.openstreetmap.org/wiki/Key:fee)
- [Toegankelijkheid](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
- [Breedte](https://wiki.openstreetmap.org/wiki/Key:width) / [Hoogte](https://wiki.openstreetmap.org/wiki/Key:height)


### Alternatieve namen {#alternative-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Alternatieve namen Android 1](@site/static/img/map/alternative_names_andr_1.png) ![Alternatieve namen Android](@site/static/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Alternatieve namen iOS 1](@site/static/img/map/alternative_names_1_ios.png) ![Alternatieve namen iOS](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

OsmAnd toont **extra POI-namen** in het *kaartcontextmenu*, waarbij prioriteit wordt gegeven aan de naam in de *weergavetaal* of de voorkeurstaallijst van het systeem. Als er meerdere vertalingen beschikbaar zijn, worden deze gegroepeerd in gecategoriseerde tags zoals *naam, merk, operator* of *nabije POI's*.  

Kenmerken van de weergave van alternatieve namen:

- Extra vertalingen zijn toegankelijk via een *vervolgkeuzelijst*.

- Namen zijn gecategoriseerd in verschillende groepen, zoals de *lijst met namen in andere talen*, *Regionale*, *Lokale*, *Nationale*, *Internationale*, *Korte*, *Oude*, *Officiële* en *Alternatieve* namen.

- Andere categorieën omvatten *regiospecifieke vertaling* of *standaardinstellingen*.

- Als een specifieke vertaling *niet beschikbaar* is, gebruikt OsmAnd standaard de **lokale** naam om nauwkeurigheid en consistentie in meertalige regio's te garanderen.


### Binnen gebied {#polygon-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Polygooninformatie Android](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Polygooninformatie iOS](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

De functie **Binnen gebied** geeft een lijst van de **gebieden** waarbinnen een object zich bevindt. Dit omvat geografische kenmerken, administratieve grenzen, landgebruiksgebieden, natuurlijke kenmerken en andere gecategoriseerde gebieden. Een *lijst van omliggende polygonen*, gesorteerd *van klein naar groot* op basis van oppervlakte.

### Coördinaten {#coordinates}

|Coördinatenformaat| |
|:------|:------|
| <ul><li>DDD.DDDDD (Platte decimale graden)</li><li>DDD.DDDDD (N/S, E/W komma)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[UTM Standaard](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[Zwitsers Grid CH1903 en CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[OsmAnd Weblink](https://osmand.net/map)</li><li>[OpenStreetMap Weblink](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![Coördinaten](@site/static/img/map/map_context_menu_Coordinates.png) |

In het contextmenu kunt u [geografische coördinaten](../search/search-coordinates.md#coordinate-format) van een punt in verschillende formaten vinden en ook deelbare OsmAnd en [OpenStreetMap Links](../map/map-context-menu.md#openstreetmap-link) (de laatste optie is alleen beschikbaar als de [OpenStreetMap bewerkingsplugin](../plugins/osm-editing.md) is ingeschakeld). Als u de coördinatensectie uitvouwt en lang op een regel uit de lijst tikt, worden de waarden automatisch naar het klembord gekopieerd (**Android**) of wordt de optie *Kopiëren* beschikbaar in het pop-upbericht (**iOS**).  

OsmAnd Weblink kan automatisch worden herkend door OsmAnd (voorbeeld: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). Zowel OsmAnd als [OpenStreetMap links](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) worden geopend op de overeenkomstige sites met een speldmarkering op de plaats van interesse.  


### Nabije POI's {#nearby-pois}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Nabije POI Android](@site/static/img/map/nearby_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nabije POI iOS](@site/static/img/map/nearby_poi_ios.png)

</TabItem>

</Tabs>

Deze sectie toont nabijgelegen [Points of Interest](../map/point-layers-on-map.md#points-of-interest-pois) met *<Translate android="true" ids="shared_string_show_on_map"/>* en *<Translate android="true" ids="search_more"/>* om alle andere POI's binnen dezelfde categorie weer te geven en te [zoeken](../search/search-poi.md).

Tik op *Nabije POI's* opent een puntenlijst. Een tik op een van deze punten uit een puntenlijst verplaatst de kaart naar dit punt met het openen van het kaartcontextmenu van het punt.


### Nabije populaire plaatsen {#nearby-popular-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Nabije plaatsen Android](@site/static/img/map/nearby_places_android.png)

Deze sectie benadrukt populaire plaatsen die u helpen interessante bestemmingen en bezienswaardigheden rond uw huidige locatie te ontdekken. Gebruik *<Translate android="true" ids="shared_string_show_on_map"/>* en *<Translate android="true" ids="search_more"/>* om alle populaire plaatsen te doorzoeken en te zoeken. 

Tik op *Nabije [Populaire plaatsen](https://osmand.net/docs/user/map/popular_places)* opent een lijst van nabijgelegen locaties. Het selecteren van een item centreert de kaart op die plaats en opent het contextmenu ervan, waar u een korte beschrijving kunt lezen of op ***Volledig artikel lezen*** kunt tikken om de volledige gids te bekijken.

</TabItem>

<TabItem value="iOS" label="iOS">

![Nabije plaatsen iOS](@site/static/img/map/nearby_places_ios.png)

Deze sectie benadrukt populaire plaatsen die u helpen interessante bestemmingen en bezienswaardigheden rond uw huidige locatie te ontdekken. Gebruik *<Translate android="true" ids="shared_string_show_on_map"/>* en *<Translate android="true" ids="search_more"/>* om alle populaire plaatsen te doorzoeken en te zoeken. 

Tik op *Nabije [Populaire plaatsen](https://osmand.net/docs/user/plugins/wikipedia#wikipedia-article)* opent een lijst van nabijgelegen locaties. Het selecteren van een item centreert de kaart op die plaats en opent het contextmenu ervan, waar u een korte beschrijving kunt lezen of op ***Volledig artikel lezen*** kunt tikken om de volledige gids te bekijken.

> **OPMERKING**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) verschijnt alleen als u eerder speciale kaarten met [Wikipedia-artikelen voor dit gebied](../plugins/wikipedia.md#download-wikipedia-packages) hebt gedownload*.

</TabItem>

</Tabs>


### Openbaarvervoerroutes {#public-transport-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Openbaarvervoerroutes Android](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Openbaarvervoerroutes iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

Toont informatie over openbaarvervoerroutes voor de gekozen vervoershalte. Informatie over het contextmenu van het openbaar vervoer en de acties ermee, leest u in het [artikel](../map/public-transport.md#transport-routes-context-menu).


### Favorieten / Trackpunten uit de groep {#favorites--track-points-from-the-group}

![Favorietenlijst](@site/static/img/map/favorite_list_android.png) ![Volledige favorietenlijst](@site/static/img/map/favorite_list_full_android.png)

Dit is een lijst van alle punten in één groep voor een Favoriet of Waypoint. Door te tikken, wordt de volledige lijst met punten van één groep uitgevouwen. Wanneer u op een punt uit de lijst tikt, wordt de kaart naar het geselecteerde punt verplaatst.




### Artikelbeschrijving {#article-description}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Beschrijvingslijst](@site/static/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Beschrijvingslijst](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs>

Dit deel bevat een deel van de beschrijving uit een [Wikipedia-artikel](../plugins/wikipedia.md), [Favoriet](../personal/favorites.md) of Waypoint-beschrijving. Door te tikken kunt u de volledige beschrijving openen.


### OpenStreetMap-link {#openstreetmap-link}

![OSM-link](@site/static/img/map/context_menu_osm_link.png) ![OSM-link](@site/static/img/map/context_menu_osm_link_1.png)

De OpenStreetMap-link biedt een directe link naar het OpenStreetMap-object waar u volledige informatie erover kunt vinden:  
[node](https://wiki.openstreetmap.org/wiki/Node) of [way](https://wiki.openstreetmap.org/wiki/Way).


### Online foto's {#online-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online foto's contextmenu Android](@site/static/img/map/images_nearby_1_andr.png)
![Online foto's contextmenu Android](@site/static/img/map/gallery_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online foto's contextmenu iOS](@site/static/img/map/online_photo_ios.png)
![Online foto's contextmenu iOS](@site/static/img/map/gallery_menu_2_ios.png)

</TabItem>

</Tabs>

Wanneer u op een Populaire Plaats op de kaart tikt, toont de sectie **Online foto's** in het *POI-contextmenu* voorbeeldafbeeldingen afkomstig van [Wikipedia](https://www.wikipedia.org/) en [Wikimedia Commons](https://www.wikimedia.org/).

Door op een foto te tikken, wordt de **Galerij**-weergave geopend, waar u kunt:

- Bladeren door maximaal 100 afbeeldingen per plaats
- Afbeeldingsmetadata bekijken (*auteur*, *licentie*, *bron*)
- Acties uitvoeren: **Delen**, **Openen in browser**, **Downloaden**

> *Op iOS opent lang tikken op een afbeelding een contextmenu met snelle acties.*

Voor meer informatie, zie: [Online foto's](https://osmand.net/docs/user/map/popular_places#online-photos) en [Galerijweergave](https://osmand.net/docs/user/map/popular_places#gallery)


### Beeldmateriaal op straatniveau {#street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Beeldmateriaal op straatniveau Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Beeldmateriaal op straatniveau iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

OsmAnd ondersteunt integratie met [Mapillary](https://www.mapillary.com/), een wereldwijd platform voor door de gemeenschap verzameld beeldmateriaal op straatniveau. Met deze functie kunt u fotoreeksen uit de echte wereld direct op de kaart bekijken en verkennen.

Mapillary-afbeeldingen verschijnen als directionele foto-iconen, uitgelijnd met de weg of het pad waar ze zijn vastgelegd. Deze kunnen u helpen uw omgeving beter te begrijpen, vooral in onbekende gebieden.

U kunt:

- De knop **Verkennen** gebruiken om de viewer van Mapillary te openen en door nabijgelegen beelden op straatniveau te bladeren.
- Op de knop **Foto's toevoegen** tikken om uw eigen foto's bij te dragen aan het Mapillary-platform.

> *Lees meer over hoe u deze functie kunt activeren en gebruiken in de [Mapillary-plugingids](../plugins/mapillary.md).*


### * Audio-/videonotitie {#-audiovideo-note}

<InfoAndroidOnly />

![Afbeeldingenlijst](@site/static/img/map/image_list_android.png) ![Videolijst](@site/static/img/map/video_list_android.png)

Informatie over [Audio-/videonotities](../plugins/audio-video-notes.md) zoals datum, coördinaten, voorbeeld en andere zijn beschikbaar in het **Details**-menu. U kunt de notities in secundaire software openen door op de knop **Afspelen / Tonen** te tikken in het contextmenu van de notitie.


## Acties {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Actiemenu Android](@site/static/img/map/actions_menu_android.png) ![Extra actiemenu Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Actiemenu iOS](@site/static/img/map/actions_menu_ios.png)  ![Extra actiemenu iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

Dit is een set van specifieke handelingen die kunnen worden uitgevoerd op een punt of object. Dit menu is opgesplitst in twee delen: het zichtbare gedeelte bestaat uit maximaal 3 acties en andere acties zijn toegankelijk via de knop *Acties*. U kunt de volgorde van acties (*Android*) aanpassen in de [Algemene instellingen](#customize).


### Favoriet toevoegen / bewerken {#add--edit-favorite}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Actie favoriet toevoegen/bewerken Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Actie favoriet toevoegen/bewerken iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

In het contextmenu zijn er opties om het geselecteerde punt / object **toe te voegen** of te **bewerken** aan de [favorietenlijst](../personal/myplaces.md).

- Om **toe te voegen**, moet u een punt / object selecteren, op het *Ster*-icoon tikken (met de handtekening Toevoegen) en alle benodigde informatie invoeren.  

- Om informatie over een favoriet punt te **bewerken**, moet u *Toon op de kaart* inschakelen (*Menu → Mijn plaatsen → Favorieten*), er vervolgens op drukken en in het contextmenu verschijnt in plaats van het *Ster*-icoon een *Potlood*-icoon (met de handtekening Bewerken).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md)  - voegt een geselecteerd punt toe aan de favorietenlijst.


### Markering toevoegen / bewerken {#add--edit-marker}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Actie markering toevoegen/bewerken Android](@site/static/img/map/add_marker_android.png) ![Actie markering passeren Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![Actie markering toevoegen/bewerken iOS](@site/static/img/map/add_marker_ios.png)  ![Actie markering herstellen Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Het is mogelijk om een punt of een object te markeren om het plannen van navigatie te vergemakkelijken. U hoeft alleen maar op het **vlag**-icoon in het menu (*Android*) of de **pijl** (*iOS*) te tikken - dit toont de richting en afstand tot het geselecteerde punt vanaf uw huidige locatie.

Acties:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). Plaatst een nieuwe markering op het geselecteerde punt.
- **Gepasseerd markeren** (*Android*) / *Negeren* (*iOS*). Deactiveert de markering en plaatst deze in de Geschiedenis.
- **Actief maken** (*Android*). Verplaatst de markering naar de bovenste positie (op het bovenste paneel).
- **Markering herstellen** (*Android*). Verplaatst de markering van Geschiedenis naar de actieve lijst.

Lees hier meer over [markeringen](../personal/markers.md).


### Delen {#share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

| Versies tot Android 14 | 14+ Android |
|:------------|:---------------|
| ![Actie delen Android](@site/static/img/map/action_share_1_andr.png) | ![Actie delen Android](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">  

![Actie delen iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

De OsmAnd-app stelt u in staat om **<Translate android="true" ids="shared_string_share"/>** *Mijn Locatie* of een geselecteerde locatie op de kaart te delen via messengers, e-mails of sociale media.  

Beschikbare opties om de locatie te delen:

- ***Verzenden***. Verzendt tekst via apps die beschikbaar zijn op uw apparaat. Bevat alle informatie over de locatie: de naam van Mijn locatie of de naam van de geselecteerde POI, adres, coördinaten en geolocatie als een link.
- ***Kopiëren***. Kopieert alle locatie-informatie (naam van Mijn locatie of naam van de geselecteerde POI, adres, coördinaten en geolocatie als een link) naar het klembord.  
- ***Adres kopiëren***. Kopieert alleen adresinformatie naar het klembord.
- ***POI-naam kopiëren***. Kopieert alleen de POI-naam of het adres als er geen naam is naar het klembord.
- ***Coördinaten kopiëren***. Kopieert alleen coördinateninformatie naar het klembord.
- ***geo***. Opent een lijst met beschikbare applicaties die geolocaties ondersteunen. <!-- (info about [geo urls Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***QR-code*** (*Android*). Genereert een link naar de geselecteerde locatie in een QR-code.

<!--
- ***Save Image*** (*iOS*) - saves a screenshot with map and selected point in the image gallery.
- ***Assign to Contact*** (*iOS*) - makes an icon for chosen contact from the map screenshot.
- ***Print*** (*iOS*) - opens Printer Options for printing the map screenshot.
- ***Save to files*** (*iOS*) - saves the map screenshot in iCloud Drive or storage of your device. -->


### Routebeschrijving naar / van {#directions-to--from}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Routebeschrijving Android](@site/static/img/map/action_directions_android.png)

![Meerdere routebeschrijvingen Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Routebeschrijving iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

Om de navigatie of routeplanning te starten, moet u eerst een bestemming selecteren met [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). Als u al een bestemmingspunt heeft, zal het menu voorstellen om het bestemmingspunt te vervangen of om het als een ander tussenliggend of startpunt in te voegen.

Het is ook mogelijk om eerst een *Van*-bestemming te selecteren via het kaartcontextmenu (<Translate android="true" ids="context_menu_item_directions_from"/>).

Lees hier meer over [navigatie](../navigation/setup/route-navigation.md).

:::note Tik op Start navigatie
Als u op **Start navigatie** tikt, wordt het *Van*-punt verworpen omdat de applicatie in de navigatiemodus gaat. Om een route te behouden, tikt u niet op *Start navigatie* en [**veegt u naar beneden**](#hide-context-menu) in het *Routevoorbereiding*-menu.
:::


### Zoek in de buurt {#search-nearby}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Actie zoeken Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Actie zoeken iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

Met deze contextmenu-actie is het mogelijk om rond een specifieke locatie op de kaart te zoeken.  

Lees meer over de [zoekfunctionaliteit](../search/index.md).


### Weg vermijden {#avoid-road}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Weg vermijden op de kaart Android](@site/static/img/map/action_avoid_android.png) ![Vermeden weg negeren Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Weg vermijden op de kaart iOS](@site/static/img/map/avoid_route_ios_1.png) ![Vermeden weg negeren iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

Met het kaartcontextmenu kunt u een specifieke weg toevoegen aan de lijst van niet-gebruikte wegen voor routering. Dat heeft invloed op de [routevoorbereiding](../navigation/setup/route-navigation.md).  
Om eerder geselecteerde wegen uit de *[Lijst met te vermijden wegen](../navigation/routing/osmand-routing.md#avoid-roads-menu)* te verwijderen, tikt u op een teken, kiest u *Verwijderen* (**Android**) of *Negeren* (**iOS**).

:::note
De functie 'wegen vermijden' is globaal en beïnvloedt alle *[routeringstypes](../navigation/routing/osmand-routing.md#routing-types)* (behalve *[Online routering](../navigation/routing/online-routing.md)*).  
:::


### Objectpositie wijzigen {#change-object-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Actie positie wijzigen Android](@site/static/img/map/action_change_position_android.png)

![Actie positie wijzigen UI Android](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Actie positie wijzigen iOS](@site/static/img/map/action_change_position_ios.png)

![Actie positie wijzigen UI iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>  

Bijna elk door de gebruiker gemaakt object is verplaatsbaar, d.w.z. Markering, Favoriet, Gemaakte POI, Audio-/Videonotitie of Track Waypoint. Selecteer eerst een object op de kaart en gebruik vervolgens *<Translate android="true" ids="change_markers_position"/>* in het menu om het naar een nieuwe locatie te verplaatsen.


### Een route plannen {#plan-a-route}

![Actie een route plannen Android](@site/static/img/map/action_plan_route_android.png)

U kunt een routeplanning starten vanaf een geselecteerd punt via het contextmenu van het object.

Lees meer over de tool [Een route plannen](../plan-route/create-route.md).


### Online kaarten bijwerken / downloaden {#update--download-online-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Actie online kaart downloaden Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Actie online kaart downloaden iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

Om online kaarten (tegels) op een specifieke locatie bij te werken of te downloaden, kunt u het contextmenu van het object gebruiken:

- **Android**: *<Translate android="true" ids="shared_string_download_map"/>* en voor *Bijwerken*, ga naar: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.  
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* en *<Translate ios="true" ids="update_tile"/>*.  

Lees de [volledige instructie](../map/raster-maps.md#download--update-tiles).  


### Vectorkaarten bijwerken / downloaden {#update--download-vector-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Actie vectorkaart downloaden Android](@site/static/img/map/action_download_vector_map_android.png)

![Vectorkaart wereldwijd selecteren op Android](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Actie vectorkaart downloaden iOS](@site/static/img/map/action_download_vector_map_ios.png)

![Vectorkaart selecteren op iOS](@site/static/img/map/download_map_ios.png)

</TabItem>

</Tabs>

Als er geen offline kaart aanwezig is op de geselecteerde locatie, bijvoorbeeld als het kaartobjectmenu werd geopend via Zoeken of via een specifieke Favoriet, dan wordt de kleinst mogelijke offline kaart voorgesteld om te [downloaden](../start-with/download-maps.md#select-on-the-map).  

**iOS**. Als u al [gedownloade](../map/map-context-menu.md) OsmAnd-kaarten (vector of terrein) heeft, is het mogelijk om deze bij te werken via het contextmenu. U moet eerst de regio op de kaart selecteren - tik op een willekeurige locatie op wereldwijde zoom 3-7.  

> **OPMERKING**. *Als u het contextmenu voor een kaartregio hebt geopend (de regio is gemarkeerd), kunt u ***<Translate android="true" ids="rendering_category_details"/>*** erover zien: type en grootte van een beschikbare kaart, link naar een Wikipedia-pagina, taal, bevolking en andere.*


### * Parkeerplaats toevoegen / verwijderen {#-add--delete-parking-point}

:::note
Om parkeerplaatsen toe te voegen/verwijderen, schakelt u de OsmAnd [**Parkeerpositie-plugin**](../plugins/parking.md) in.
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Actie parkeren Android](@site/static/img/map/action_parking_android.png)

![Actie parkeren verwijderen Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Actie parkeren iOS](@site/static/img/map/action_parking_ios.png)

![Actie parkeren verwijderen iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Elke geselecteerde locatie op de kaart kan worden gemarkeerd als [een parkeerpositie](../plugins/parking.md). Om de parkeerpositie te verwijderen, kunt u het contextmenu openen dat bij de parkeerlocatie hoort.


### * Trackwaypoint toevoegen / bewerken {#-add--edit-track-waypoint}

:::note
Om trackpunten toe te voegen/bewerken, schakelt u de OsmAnd [**Tripopname-plugin**](../plugins/trip-recording.md) in.
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Selecteer track om waypoint toe te voegen Android](@site/static/img/map/tracks_tab_android.png) ![Trackwaypoint toevoegen Android](@site/static/img/map/add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Actie waypoint iOS](@site/static/img/map/action_waypoint_ios.png)

![Selecteer track om waypoint toe te voegen iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

U kunt waypoints toevoegen aan een opgenomen track of aan de huidige trackopname via het kaartcontextmenu.  

- Selecteer een locatie op de kaart met een [lange tik](../map/map-context-menu.md#select-any-point-long-tap).
- Kies in het *kaartcontextmenu* dat opent *Acties → Trackwaypoint toevoegen*.
- De lijst toont de [tracks](../map/tracks/index.md#display-tracks-on-the-map) die zijn opgenomen en op de kaart worden weergegeven, evenals de [huidige trackopname](../plugins/trip-recording.md), waaraan u het geselecteerde waypoint kunt toevoegen (*op Android* is de lijst gegroepeerd in tabbladen: <Translate android="true" ids="shared_string_on_map"/> / <Translate android="true" ids="rendering_value_all_name"/> / <Translate android="true" ids="shared_string_folders"/>).
- U kunt waypoints toevoegen aan een track die nog niet actief is voor opname, in welk geval de inactieve track overschakelt van de *Start-status* naar de *Hervat-status*.
- [Vul](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) de vereiste gegevens in en sla het waypoint op.
- U kunt de [Snelle Acties](../widgets/quick-action.md) configureren door een waypoint toe te voegen aan de *Trackwaypoint toevoegen*.


### * POI aanmaken / wijzigen {#-create--modify-poi}

:::note
Om POI's aan te maken/wijzigen, schakelt u de OsmAnd [**OSM Bewerkingsplugin**](../plugins/osm-editing.md) in.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Actie POI Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Actie POI iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

Met de OSM Bewerkingsplugin kunt u de meeste POI's die op [OpenStreetMap](https://www.openstreetmap.org/) aanwezig zijn, aanmaken en wijzigen.

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [maakt een nieuwe POI aan](../plugins/osm-editing.md#create--modify-poi) op de geselecteerde locatie.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [wijzigt de geselecteerde POI](../plugins/osm-editing.md#create--modify-poi).


### * OSM-notitie openen {#-open-osm-note}

:::note
Om een OSM-notitie te openen, schakelt u de OsmAnd [**OSM Bewerkingsplugin**](../plugins/osm-editing.md) in.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Actie notitie Android](@site/static/img/map/action_note_android.png)

![Actie notitie toevoegen Android](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Actie notitie iOS](@site/static/img/map/action_note_ios.png)

![Actie notitie toevoegen iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

U kunt kaartgegevensfouten op een specifieke locatie **rapporteren** aan de [OpenStreetMap-gemeenschap](https://wiki.openstreetmap.org/wiki/Join_the_community). Volg de [richtlijnen](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) en voeg de juiste opmerkingen toe aan een probleem.


### * Reageren op / sluiten van OSM-notitie {#-comment--close-osm-note}

:::note
Om te reageren op/sluiten van een OSM-notitie, schakelt u de OsmAnd [**OSM Bewerkingsplugin**](../plugins/osm-editing.md) in.
:::

![Reageren op OSM-notitie Android](@site/static/img/map/action_comment_note_android.png) ![OSM-notitie heropenen Android](@site/static/img/map/action_reopen_note_android.png)

U kunt [reageren](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [oplossen](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) en heropenen
OpenStreetMap-notities via het contextmenu van het object.


### * POI / OSM-notitie uploaden {#-upload-poi--osm-note}

:::note
Om een POI / OSM-notitie te uploaden, schakelt u de OsmAnd [**OSM Bewerkingsplugin**](../plugins/osm-editing.md) in.
:::

![POI uploaden Android](@site/static/img/map/action_poi_upload_android.png) ![OSM-notitie uploaden Android](@site/static/img/map/action_note_upload_android.png)

Als u de *Offline-modus* gebruikt om een POI of OSM-notitie toe te voegen / te bewerken, moet u de wijzigingen uploaden naar OpenStreetMap. Standaard staat de *Offline-modus* aan om onbedoelde wijzigingen in de openbare database te voorkomen. U kunt de wijziging uploaden of verwijderen via het contextmenu van het gemaakte object.


### * AV-notitie opnemen {#-record-av-note}

<InfoAndroidOnly />

:::note
Om audio-/videonotities op te nemen, schakelt u de OsmAnd [**Audio-/Videonotities-plugin**](../plugins/audio-video-notes.md) in.
:::

![Actie audio-video Android](@site/static/img/map/action_av_note_android.png)

Neemt een medianotitie op of maakt er een op een geselecteerd punt op de kaart.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - maakt een [audionotitie](../map/point-layers-on-map.md#-audio--video-points-android) op het geselecteerde punt (maakt een nieuw punt op de overlay met een audio-icoon).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - maakt een [videonotitie](../map/point-layers-on-map.md#-audio--video-points-android) op het geselecteerde punt (maakt een nieuw punt op de overlay met een video-icoon).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - maakt een [fotopunt](../map/point-layers-on-map.md#-audio--video-points-android) op de kaart.


## Aanpassen {#customize}

<InfoAndroidOnly/>  

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![Kaart contextmenu aanpassen](@site/static/img/map/map_context_menu_customize_1.png)  <!-- ![Kaart contextmenu aanpassen](@site/static/img/map/map_context_menu_customize_2.png) -->  ![Kaart contextmenu aanpassen](@site/static/img/map/map_context_menu_customize_3.png)

U kunt de volgorde wijzigen of items verbergen in het menu *Acties* in het *kaartcontextmenu*. Er worden in totaal 16 acties voorgesteld.  

- U kunt de drie meest nuttige acties naar de bovenkant van de lijst *Hoofdacties* verplaatsen.
- De rest van het menu kan voor elk profiel afzonderlijk worden aangepast in de secties *Extra acties* en *Verborgen*.  

Beschikbare soorten acties:

- **<Translate android="true" ids="main_actions"/>**. De sectie heeft slechts 4 knoppen, waarvan er drie kunnen worden aangepast, en Acties, die ongewijzigd blijft.  
- **<Translate android="true" ids="additional_actions"/>**. U kunt deze acties openen door op de knop *Acties* te tikken.  
- **<Translate android="true" ids="shared_string_hidden"/>**. Het verplaatsen van acties naar deze sectie stopt hun werking niet. Ze verschijnen alleen niet in het Acties-menu.  


## Gerelateerde artikelen {#related-articles}

- [Vectorkaarten (kaartstijlen)](./vector-maps.md)
- [Rasterkaarten (online / offline)](./raster-maps.md)
- [Punten op de kaart](./point-layers-on-map.md)
- [Contextmenu voor tracks](./tracks/track-context-menu.md)
- [Openbaar vervoer](./public-transport.md)
- [Importeren / Exporteren](../personal/import-export.md)
- [Kleurenpaletschema's](../personal/color-palette-schemes.md)