---
source-hash: c406b4c0fcaa397722ffd39164023525d4248abb42fb6a6add45bac6f360f5b8
sidebar_position: 3
title: Kaartcontextmenu
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

Het kaartcontextmenu geeft informatie over het geselecteerde object op de kaart. U kunt het ook gebruiken om een route naar de geselecteerde locatie te maken. Om het contextmenu te openen, zoekt u eerst de gewenste locatie op de kaart en selecteert u vervolgens het object met een korte tik of een lange tik bij het selecteren van een precies punt op de kaart.


### Een object selecteren (enkele tik) {#select-an-object-single-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contextmenu Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contextmenu iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

Het **contextmenu** verschijnt wanneer u **één keer tikt** op een gemarkeerd object op de kaart. Dit contextmenu toont essentiële informatie over het geselecteerde object, inclusief de *naam, het pictogram* (zoals weergegeven op de kaart), het *adres, de afstand* en de *richting* vanaf uw huidige positie.

U kunt verschillende soorten kaartobjecten selecteren, zoals *POI's*, *favorieten*, *vervoershaltes*, *markeringen*, *bergtoppen* of andere *kaartobjecten*.

:::note
Geselecteerde kaartobjecten komen overeen met OpenStreetMap [**nodes**](https://wiki.openstreetmap.org/wiki/Node) of [**ways**](https://wiki.openstreetmap.org/wiki/Way).
:::

> *De hoogte van bergtoppen wordt weergegeven in meters of voeten, afhankelijk van de [lengte-eenheden](../personal/profiles.md#units--formats) die zijn geselecteerd in de profielinstellingen.*


### Een willekeurig punt selecteren (lange tik) {#select-any-point-long-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contextmenu lange tik Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contextmenu lange tik iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

Wanneer u ergens op de kaart **lang tikt**, verschijnt een **contextmenu** met informatie over de geselecteerde locatie. Dit omvat het adres, de afstand en de richting vanaf uw huidige positie.

> **OPMERKING**. *Lang tikken op een **huisnummer** markeert de omtrek ervan en opent het kaartcontextmenu.*


### Route selecteren {#select-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Context track menu Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Statistieken scherm track iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

Tikken op een [GPX-track](../map/tracks/index.md) op de kaart opent het [trackcontextmenu](../map/tracks/track-context-menu.md), waar u toegang krijgt tot aanvullende trackgerelateerde opties.


### Contextmenu verbergen {#hide-context-menu}

Om het **contextmenu** te sluiten:

- Tik op een *leeg gebied* op de kaart om te voorkomen dat het menu opnieuw wordt geopend.
- Sleep het menu *naar beneden* vanaf de bovenkant.


## Details {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contextmenu Android](@site/static/img/map/context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contextmenu iOS](@site/static/img/map/context_menu_ios.png)

</TabItem>

</Tabs>

Voor meer gedetailleerde informatie over een object, tikt u op de knop **Details** in het contextmenu of veegt u het paneel omhoog om het uit te vouwen.


### Objectinformatie {#object-info}

Het paneel **Objectinformatie** geeft aanvullende details over het geselecteerde object. U kunt op elke vermelding tikken om de informatie naar het klembord te kopiëren.

Beschikbare details zijn onder andere:

- [Alternatieve namen](#alternative-names)
- [Coördinaten](../map/map-context-menu.md#coordinates)
- [POI's in de buurt / Wikipedia](../map/map-context-menu.md#nearby-pois--wikipedia-nearby-pois--wikipedia)
- [Openbaar vervoer routes](../map/map-context-menu.md#public-transport-routes) (voor vervoershaltes)
- [Favorieten / Trackpunten uit dezelfde groep](../map/map-context-menu.md#favorites--track-points-from-the-group)
- [OpenStreetMap-link](../map/map-context-menu.md#openstreetmap-link)
- [Artikelafbeelding / beschrijving](../map/map-context-menu.md#article-description-article-description)
- [Online foto's](../map/map-context-menu.md#online-photos)

Bovendien kan het paneel [OpenStreetMap-details](https://wiki.openstreetmap.org/wiki/Map_features) bevatten, zoals:

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

![Alternatieve namen Android 1](@site/static/img/map/alternative_names_1_ios.png) ![Alternatieve namen Android](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

OsmAnd toont **aanvullende POI-namen** in het *kaartcontextmenu*, waarbij de naam in de *weergavetaal* of de voorkeurstaal van het systeem prioriteit krijgt. Als er meerdere vertalingen beschikbaar zijn, worden deze gegroepeerd in gecategoriseerde tags zoals *naam, merk, operator,* of *POI's in de buurt*.

Kenmerken van de weergave van alternatieve namen:

- Aanvullende vertalingen zijn toegankelijk via een *vervolgkeuzelijst*.

- Namen zijn gecategoriseerd in verschillende groepen, zoals de *lijst met namen in andere talen*, *Regionaal*, *Lokaal*, *Nationaal*, *Internationaal*, *Kort*, *Oud*, *Officieel* en *Alternatieve* namen.

- Andere categorieën zijn onder andere *regiospecifieke vertaling* of *standaardinstellingen*.

- Als een specifieke vertaling *niet beschikbaar* is, valt OsmAnd terug op de **lokale** naam om nauwkeurigheid en consistentie in meertalige regio's te garanderen.


### Polygooninformatie {#polygon-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Polygooninformatie Android](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Polygooninformatie Android](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

De functie **Polygooninformatie** biedt gedetailleerde gegevens over nabijgelegen **polygonen** die op de kaart worden weergegeven. Dit omvat geografische kenmerken, administratieve grenzen en andere in kaart gebrachte gebieden.

**Binnen sectie**:

- Toont een *lijst met omringende polygonen*, gesorteerd *van kleinste naar grootste* op basis van oppervlakte.

- Elke vermelding toont het *polygoontype en de naam*, waardoor regio's en grenzen eenvoudig kunnen worden geïdentificeerd.

**Aanvullende details**:

- Bij het selecteren van een punt op de kaart of een POI, toont het **polygooninformatie**-paneel een lijst van alle polygonen die de geselecteerde locatie bevatten.

- Vermeldingen in de lijst omvatten **administratieve indelingen, landgebieden, natuurlijke kenmerken en andere gecategoriseerde regio's**.

- Het paneel stelt gebruikers in staat om de **naam en details van de polygoon te kopiëren** ter referentie.

- Om deze informatie te bekijken, gaat u naar *Kaartcontextmenu → Details → Binnen*.

Deze functie helpt u uw *huidige locatie* te begrijpen in relatie tot in kaart gebrachte administratieve indelingen, natuurgebieden of andere belangrijke geografische kenmerken.


### Coördinaten {#coordinates}

|Coördinatenformaat| |
|:------|:------|
| <ul><li>DDD.DDDDD (platte decimale graden)</li><li>DDD.DDDDD (N/Z, O/W komma)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[UTM-standaard](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[Zwitsers raster CH1903 en CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[OsmAnd Weblink](https://osmand.net/map)</li><li>[OpenStreetMap Weblink](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![Coördinaten](@site/static/img/map/map_context_menu_Coordinates.png) |

In het contextmenu vindt u [geografische coördinaten](../search/search-coordinates.md#coordinate-format) van een punt in verschillende formaten en ook deelbare OsmAnd- en [OpenStreetMap-links](../map/map-context-menu.md#openstreetmap-link) (de laatste optie is alleen beschikbaar wanneer de [OpenStreetMap-bewerkingsplugin](../plugins/osm-editing.md) is ingeschakeld). Als u de coördinatensectie uitvouwt en lang tikt op een regel uit de lijst, worden de waarden automatisch naar het klembord gekopieerd (**Android**) of wordt de optie *Kopiëren* beschikbaar in het pop-upbericht (**iOS**).

OsmAnd Weblink kan automatisch worden herkend door OsmAnd (voorbeeld: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). Zowel OsmAnd- als [OpenStreetMap-links](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) worden geopend op de corresponderende sites met een pinmarkering naar de interessante plaats.


### POI's in de buurt / Wikipedia {#nearby-pois--wikipedia}

![Wikipedia-artikelen in de buurt](@site/static/img/map/map_context_menu_nearby_wikipedia.png) ![Wikipedia-artikelen in de buurt](@site/static/img/map/map_context_menu_nearby_wikipedia_1.png)

Deze secties tonen nabijgelegen [Wikipedia-artikelen](../plugins/wikipedia.md) of [Points of Interest (POI's)](../map/point-layers-on-map.md#points-of-interest-pois) met *<Translate android="true" ids="shared_string_show_on_map"/>* en *<Translate android="true" ids="search_more"/>* om alle andere POI's en Wikipedia-artikelen weer te geven en te [zoeken](../search/search-poi.md).

Tikken op *POI's in de buurt / Wikipedia-artikelen* opent een lijst met punten (POI's of Wikipedia). Een tik op een van deze punten uit een puntenlijst verplaatst de kaart naar dit punt (POI's of Wikipedia) met het openen van het contextmenu van het punt.

> **OPMERKING**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) verschijnt alleen als u eerder speciale kaarten met [Wikipedia-artikelen voor dit gebied](../plugins/wikipedia.md#download-wikipedia-packages-download-wikipedia-packages) hebt gedownload*.


### Openbaar vervoer routes {#public-transport-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Openbaar vervoer routes Android](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Openbaar vervoer routes iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

Toont informatie over openbaar vervoer routes voor de gekozen halte. Informatie over het contextmenu van het openbaar vervoer en acties ermee, leest u in het [artikel](../map/public-transport.md#transport-routes-context-menu).


### Favorieten / Trackpunten uit de groep {#favorites--track-points-from-the-group}

![Favorietenlijst](@site/static/img/map/favorite_list_android.png) ![Favorietenlijst volledig](@site/static/img/map/favorite_list_full_android.png)

Dit is een lijst van alle punten in één groep voor een Favoriet of Waypoint. Door te tikken wordt de hele lijst met punten van één groep uitgevouwen, bij het tikken op een punt uit de lijst beweegt de kaart naar het geselecteerde punt.


### Lineair object {#linear-object}

![Favorietenlijst](@site/static/img/map/linear_object_andr.png)

Voor **lineaire objecten**, zoals *barrières, trappen, poorten, banken, hellingen, stuwen, bolders of coupures*, toont het contextmenu aanvullende details. Deze omvatten het POI-type en het bijbehorende adres, of het objecttype als er geen naam is toegewezen.


### Klimgebied en Crag Details {#climbing-area-and-crag-details}

![Favorietenlijst](@site/static/img/map/climbing_andr.png)

Bij het selecteren van een [klimgebied of crag](../map/routes.md#climbing-routes), biedt OsmAnd een gedetailleerde samenvatting van de klimlocatie, inclusief: naam en locatie, klimmoeilijkheidsgraad (UIAA, Frans, YDS, enz.), rotssoort, hoogte en routelengte, klimkwaliteit en oppervlaktecondities.


### Skipistes, MTB-routes en Dirtbike-paden {#ski-slopes-mtb-routes-and-dirt-bike-trails}

![Skipistes en MTB-routes](@site/static/img/map/ski_mtb.png) ![Skipistes en MTB-routes](@site/static/img/map/ski_mtb_2.png)

U kunt op kaartelementen zoals **skipistes**, **mountainbikeroutes (MTB)** en **dirtbike-paden** tikken om hun contextmenu met gedetailleerde informatie te openen. Beschikbare informatie omvat: route- of pistenaam (indien beschikbaar in OSM-gegevens), OSM-object-ID of relatie-ID, moeilijkheidsgraad, padlengte, terreintype en meer.

**Ondersteunde tags:** `piste:type=*` (skipistes), `route=mtb`, `route=atv` of `route=dirt_bike` (motorcross-offroadpaden)

:::note
Gebruik de [Winter en Ski](../map/vector-maps.md#winter-and-ski) of [Offroad](../map/vector-maps.md#offroad) kaartstijlen voor betere zichtbaarheid.
:::


### Artikelbeschrijving {#article-description}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Beschrijvingslijst](@site/static/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Beschrijvingslijst](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs>

Dit deel bevat een deel van de beschrijving uit het [Wikipedia-artikel](../plugins/wikipedia.md), [Favoriet](../personal/favorites.md) of Waypoint-beschrijving, door te tikken kunt u de volledige beschrijving openen.


### OpenStreetMap-link {#openstreetmap-link}

![OSM-link](@site/static/img/map/context_menu_osm_link.png) ![OSM-link](@site/static/img/map/context_menu_osm_link_1.png)

OpenStreetMap-link biedt een directe link naar het OpenStreetMap-object waar u volledige informatie over kunt vinden:
[node](https://wiki.openstreetmap.org/wiki/Node) of [way](https://wiki.openstreetmap.org/wiki/Way).


### Online foto's {#online-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Online foto's contextmenu Android](@site/static/img/map/images_nearby_1_andr.png)
![Galerijmenu Android](@site/static/img/map/gallery_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Online foto's contextmenu iOS](@site/static/img/map/online_photo_ios.png)
![Galerijmenu iOS](@site/static/img/map/gallery_menu_2_ios.png)

</TabItem>

</Tabs>

Wanneer u op een populaire plaats op de kaart tikt, toont de sectie **Online foto's** in het *POI-contextmenu* voorbeelden van afbeeldingen afkomstig van [Wikipedia](https://www.wikipedia.org/) en [Wikimedia Commons](https://www.wikimedia.org/).

Tikken op een foto opent de **Galerij**-weergave, waar u:

- Tot 100 afbeeldingen per plaats kunt bekijken
- Afbeeldingsmetadata (*auteur*, *licentie*, *bron*) kunt bekijken
- Acties kunt uitvoeren: **Delen**, **Openen in browser**, **Downloaden**

> *Op iOS opent lang tikken op een afbeelding een contextmenu met snelle acties.*

Voor meer informatie, zie: [Online foto's](https://osmand.net/docs/user/map/popular_places#online-photos) en [Galerijweergave](https://osmand.net/docs/user/map/popular_places#gallery)


### Street-level Imagery {#street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

OsmAnd ondersteunt integratie met [Mapillary](https://www.mapillary.com/), een wereldwijd platform voor crowdsourced street-level imagery. Met deze functie kunt u real-world fotosequenties direct op de kaart bekijken en verkennen.

Mapillary-afbeeldingen verschijnen als directionele foto-pictogrammen, uitgelijnd met de weg of het pad waar ze zijn vastgelegd. Deze kunnen u helpen uw omgeving beter te begrijpen, vooral in onbekende gebieden.

U kunt:

- De knop **Verkennen** gebruiken om de Mapillary-viewer te openen en door nabijgelegen street-level afbeeldingen te bladeren.
- Op de knop **Foto's toevoegen** tikken om uw eigen foto's bij te dragen aan het Mapillary-platform.

> *Lees meer over het activeren en gebruiken van deze functie in de [Mapillary-pluginhandleiding](../plugins/mapillary.md).*


### * Audio/Video Notitie {#-audiovideo-note}

<InfoAndroidOnly />

![Afbeeldingenlijst](@site/static/img/map/image_list_android.png) ![Videolijst](@site/static/img/map/video_list_android.png)

[Audio-/videonotities](../plugins/audio-video-notes.md) informatie zoals datum, coördinaten, voorvertoning en andere zijn beschikbaar in het menu **Details**. U kunt de notities openen in secundaire software door op de knop **Afspelen / Tonen** te tikken in het contextmenu van de notitie.


## Acties {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Acties menu Android](@site/static/img/map/actions_menu_android.png) ![Acties aanvullend menu Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Acties menu iOS](@site/static/img/map/actions_menu_ios.png) ![Acties aanvullend menu iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

Het is een reeks specifieke manipulaties die op een punt of object kunnen worden uitgevoerd. Dit menu is opgesplitst in twee delen: het zichtbare gedeelte bestaat uit maximaal 3 acties en andere acties zijn toegankelijk via de knop *Acties*. U kunt de volgorde van de acties aanpassen (*Android*) in de [Algemene instellingen](#customize).


### Favoriet toevoegen / bewerken {#add--edit-favorite}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoriet toevoegen bewerken actie Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoriet toevoegen bewerken actie iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

In het contextmenu zijn er opties om het geselecteerde punt/object **toe te voegen** of te **bewerken** aan de [favorietenlijst](../personal/myplaces.md).

- Om **toe te voegen**, moet u een punt/object selecteren, op het *Ster*-pictogram (met handtekening Toevoegen) tikken en alle benodigde informatie invoeren.

- Om informatie over een favoriet punt te **bewerken**, moet u *Tonen op de kaart* inschakelen (*Menu → Mijn plaatsen → Favorieten*) en vervolgens erop drukken. In het contextmenu verschijnt dan in plaats van het *Ster*-pictogram een *Potlood*-pictogram (met handtekening Bewerken).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md) - voegt een geselecteerd punt toe aan de favorietenlijst.


### Markering toevoegen / bewerken {#add--edit-marker}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Markering toevoegen bewerken actie Android](@site/static/img/map/add_marker_android.png) ![Markering passeren actie Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Markering toevoegen bewerken actie iOS](@site/static/img/map/add_marker_ios.png) ![Markering herstellen actie Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Het is mogelijk om een punt of een object te markeren om de navigatieplanning te vergemakkelijken. U hoeft alleen maar op het **vlag**-pictogram in het menu (*Android*) te tikken, **pijl** (*iOS*) - toont richting en afstand tot het geselecteerde punt vanaf uw huidige locatie.

Acties:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). Plaatst een nieuwe markering op het geselecteerde punt.
- **Markeer gepasseerd** (*Android*) / *Verwijderen* (*iOS*). Deactiveert markering en plaatst deze in de geschiedenis.
- **Actief maken** (*Android*). Verplaatst markering naar de bovenste positie (op het bovenste paneel).
- **Markering herstellen** (*Android*). Verplaatst markering van geschiedenis naar actieve lijst.

Lees meer over [markeringen hier](../personal/markers.md).


### Delen {#share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Versies tot Android 14 | 14+ Android |
|:------------|:---------------|
| ![Deel actie Android](@site/static/img/map/action_share_1_andr.png) | ![Deel actie Android](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">

![Deel actie iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

De OsmAnd-app stelt u in staat om **<Translate android="true" ids="shared_string_share"/>** *Mijn locatie* of een geselecteerde locatie op de kaart te delen met messenger, e-mails of sociale media.

Beschikbare opties om de locatie te delen:

- ***Verzenden***. Verzendt tekst via apps die beschikbaar zijn op uw apparaat. Bevat alle informatie over de locatie: Mijn locatienaam of de naam van de geselecteerde POI, adres, coördinaten en geolocatie als link.
- ***Kopiëren***. Kopieert alle locatie-informatie (Mijn locatienaam of naam van de geselecteerde POI, adres, coördinaten en geolocatie als link) naar het klembord.
- ***Adres kopiëren***. Kopieert alleen adresinformatie naar het klembord.
- ***POI-naam kopiëren***. Kopieert alleen de POI-naam of het adres (indien geen naam aanwezig) naar het klembord.
- ***Coördinaten kopiëren***. Kopieert alleen coördinateninformatie naar het klembord.
- ***geo***. Opent een lijst met beschikbare applicaties die geolocaties ondersteunen. <!-- (info over [geo urls Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***QR-code*** (*Android*). Genereert een link naar de geselecteerde locatie in een QR-code.

<!--
- ***Afbeelding opslaan*** (*iOS*) - slaat een screenshot met kaart en geselecteerd punt op in de afbeeldingengalerij.
- ***Toewijzen aan contact*** (*iOS*) - maakt een pictogram voor gekozen contact van de kaartscreenshot.
- ***Afdrukken*** (*iOS*) - opent printeropties voor het afdrukken van de kaartscreenshot.
- ***Opslaan in bestanden*** (*iOS*) - slaat de kaartscreenshot op in iCloud Drive of de opslag van uw apparaat. -->


### Route naar / van {#directions-to--from}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routebeschrijving Android](@site/static/img/map/action_directions_android.png)

![Meerdere routebeschrijvingen Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routebeschrijving iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

Om navigatie of routeplanning te starten, moet u eerst de bestemming selecteren met [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). Als u al een bestemmingspunt hebt, stelt het menu voor om het bestemmingspunt te vervangen of als een ander tussen- of startpunt in te voegen.

Het is ook mogelijk om eerst *Van* bestemming te selecteren via het kaartcontextmenu (<Translate android="true" ids="context_menu_item_directions_from"/>).

Lees meer over [navigatie hier](../navigation/setup/route-navigation.md).

:::note Tik op Navigatie starten
Als u op **Navigatie starten** tikt, wordt het *Van*-punt genegeerd omdat de applicatie de navigatiemodus ingaat. Om een route te behouden, tikt u niet op *Navigatie starten* en [**veegt u het menu Routevoorbereiding naar beneden**](#hide-context-menu).
:::


### Zoeken in de buurt {#search-nearby}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zoekactie Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoekactie iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

Met deze contextmenu-actie is het mogelijk om rond een specifieke locatie op de kaart te zoeken.

Lees meer over de [zoekfunctie](../search/index.md).


### Weg vermijden {#avoid-road}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Weg vermijden op de kaart Android](@site/static/img/map/action_avoid_android.png) ![Vermeden weg verwijderen Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Weg vermijden op de kaart iOS](@site/static/img/map/avoid_route_ios_1.png) ![Vermeden weg verwijderen iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

Met behulp van het kaartcontextmenu kunt u een specifieke weg toevoegen aan de lijst met wegen die niet voor routering worden gebruikt. Dit heeft invloed op de [routevoorbereiding](../navigation/setup/route-navigation.md).
Om eerder geselecteerde wegen uit de *[Wegen vermijden-lijst](../navigation/routing/osmand-routing.md#avoid-roads-menu)* te verwijderen, tikt u op een teken, kiest u *Verwijderen* (**Android**) of *Afwijzen* (**iOS**).

:::note
De functie Wegen vermijden is globaal en beïnvloedt alle *[routeringstypen](../navigation/routing/osmand-routing.md#routing-types)* (behalve *[Online routering](../navigation/routing/online-routing.md)*).
:::


### Objectpositie wijzigen {#change-object-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Actie Positie wijzigen Android](@site/static/img/map/action_change_position_android.png)

![Actie Positie wijzigen UI Android](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Actie Positie wijzigen iOS](@site/static/img/map/action_change_position_ios.png)

![Actie Positie wijzigen UI iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>

Bijna elk door de gebruiker gemaakt object is verplaatsbaar, d.w.z. Markering, Favoriet, Gemaakte POI, Audio/Video Notitie of Track Waypoint. Selecteer eerst een object op de kaart en gebruik vervolgens het menu *<Translate android="true" ids="change_markers_position"/>* om het naar een nieuwe locatie te verplaatsen.


### Een route plannen {#plan-a-route}

![Actie Route plannen Android](@site/static/img/map/action_plan_route_android.png)

U kunt een routeplanning starten vanaf een geselecteerd punt via het objectcontextmenu.

Lees meer over de tool [Route plannen](../plan-route/create-route.md).


### Online kaarten bijwerken / downloaden {#update--download-online-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Actie Online kaart downloaden Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Actie Online kaart downloaden iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

Om online kaarten (tegels) op een specifieke locatie bij te werken of te downloaden, kunt u het contextmenu van het object gebruiken:

- **Android**: *<Translate android="true" ids="shared_string_download_map"/>* en voor *Bijwerken*, ga naar: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* en *<Translate ios="true" ids="update_tile"/>*.

Lees de [volledige instructie](../map/raster-maps.md#download--update-tiles).


### Vector kaarten bijwerken / downloaden {#update--download-vector-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Actie Vector kaart downloaden Android](@site/static/img/map/action_download_vector_map_android.png)

![Vector kaart wereldwijd selecteren op Android](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Actie Vector kaart downloaden iOS](@site/static/img/map/action_download_vector_map_ios.png)

![Vector kaart selecteren op iOS](@site/static/img/map/download_map_ios.png)

</TabItem>

</Tabs>

Als er geen offline kaart aanwezig is op de geselecteerde locatie, bijvoorbeeld als het kaartobjectmenu is geopend via Zoeken of via een specifieke Favoriet, dan wordt de kleinst mogelijke offline kaart voorgesteld om te [downloaden](../start-with/download-maps.md#select-on-the-map).

**iOS**. Als u al [OsmAnd-kaarten (vector of terrein) hebt gedownload](../map/map-context-menu.md), is het mogelijk om deze via het contextmenu bij te werken. U moet eerst de regio op de kaart selecteren - tik op een willekeurige locatie op wereldwijde zoom 3-7.

> **OPMERKING**. *Als u het contextmenu voor een kaartregio hebt geopend (regio is gemarkeerd), kunt u er ***<Translate android="true" ids="rendering_category_details"/>*** over zien: type en grootte van een beschikbare kaart, link naar een Wikipedia-pagina, taal, bevolking en andere.*


### * Parkeerpunt toevoegen / verwijderen {#-add--delete-parking-point}

:::note
Om parkeerpunten toe te voegen/verwijderen, schakelt u de OsmAnd [**Parkeerpositie-plugin**](../plugins/parking.md) in.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Actie Parkeren Android](@site/static/img/map/action_parking_android.png)

![Actie Parkeren verwijderen Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Actie Parkeren iOS](@site/static/img/map/action_parking_ios.png)

![Actie Parkeren verwijderen iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Elke geselecteerde locatie op de kaart kan worden gemarkeerd als [een parkeerpositie](../plugins/parking.md). Om een parkeerpositie te verwijderen, kunt u het contextmenu openen dat is gekoppeld aan de parkeerlocatie.


### * Track waypoint toevoegen / bewerken {#-add--edit-track-waypoint}

:::note
Om trackpunten toe te voegen/bewerken, schakelt u de OsmAnd [**Trip recording plugin**](../plugins/trip-recording.md) in.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Actie Waypoint Android](@site/static/img/map/action_waypoint_android.png)

![Track selecteren om Waypoint Android toe te voegen](@site/static/img/map/action_select_track_to_add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Actie Waypoint iOS](@site/static/img/map/action_waypoint_ios.png)

![Track selecteren om Waypoint iOS toe te voegen](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

U kunt waypoints toevoegen aan een opgenomen track of aan de huidige trackopname via het kaartcontextmenu.

- Selecteer een locatie op de kaart met een [lange tik](../map/map-context-menu.md#select-any-point-long-tap).
- Kies in het *kaartcontextmenu* dat verschijnt *Acties → Track waypoint toevoegen*.
- De lijst toont de [tracks](../map/tracks/index.md#display-tracks-on-the-map) die zijn opgenomen en weergegeven op de kaart, evenals de [huidige trackopname](../plugins/trip-recording.md), waaraan u het geselecteerde waypoint kunt toevoegen.
- U kunt waypoints toevoegen aan een track die nog niet actief is voor opname, in welk geval de inactieve track overschakelt van de *Startstatus* naar de *Hervatstatus*.
- [Vul](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) de vereiste gegevens in en sla het waypoint op.
- U kunt de [Snelle acties](../widgets/quick-action.md) configureren door een waypoint toe te voegen aan de *Track waypoint toevoegen*.


### * POI maken / wijzigen {#-create--modify-poi}

:::note
Om POI's te maken/wijzigen, schakelt u de OsmAnd [**OSM Editing plugin**](../plugins/osm-editing.md) in.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Actie POI Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Actie POI iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

Met de OSM Editing plugin kunt u de meeste POI's die op [OpenStreetMap](https://www.openstreetmap.org/) aanwezig zijn, maken en wijzigen.

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [maakt een nieuwe POI](../plugins/osm-editing.md#create--modify-poi) op de geselecteerde locatie.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [wijzigt de geselecteerde POI](../plugins/osm-editing.md#create--modify-poi).


### * OSM-notitie openen {#-open-osm-note}

:::note
Om OSM-notities te openen, schakelt u de OsmAnd [**OSM Editing plugin**](../plugins/osm-editing.md) in.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Actie Notitie Android](@site/static/img/map/action_note_android.png)

![Actie Notitie toevoegen UI Android](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Actie Notitie iOS](@site/static/img/map/action_note_ios.png)

![Actie Notitie toevoegen UI iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

U kunt **kaartdatafouten** op een specifieke locatie rapporteren aan de [OpenStreetMap-gemeenschap](https://wiki.openstreetmap.org/wiki/Join_the_community). Volg de [richtlijnen](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) en voeg de juiste opmerkingen toe aan een probleem.


### * OSM-notitie becommentariëren / sluiten {#-comment--close-osm-note}

:::note
Om OSM-notities te becommentariëren/sluiten, schakelt u de OsmAnd [**OSM Editing plugin**](../plugins/osm-editing.md) in.
:::

![OSM-notitie becommentariëren Android](@site/static/img/map/action_comment_note_android.png) ![OSM-notitie heropenen Android](@site/static/img/map/action_reopen_note_android.png)

U kunt [commentaar geven](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [oplossen](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) en heropenen
OpenStreetMap-notities via het contextmenu van het object.


### * POI / OSM-notitie uploaden {#-upload-poi--osm-note}

:::note
Om POI / OSM-notities te uploaden, schakelt u de OsmAnd [**OSM Editing plugin**](../plugins/osm-editing.md) in.
:::

![POI uploaden Android](@site/static/img/map/action_poi_upload_android.png) ![OSM-notitie uploaden Android](@site/static/img/map/action_note_upload_android.png)

Als u de *Offline-modus* gebruikt om POI's of OSM-notities toe te voegen/bewerken, moet u de wijzigingen uploaden naar OpenStreetMap. Standaard is de *Offline-modus* ingeschakeld om onbedoelde wijzigingen in de openbare database te voorkomen. U kunt wijzigingen uploaden of verwijderen via het contextmenu van het gemaakte object.


### * AV-notitie opnemen {#-record-av-note}

<InfoAndroidOnly />

:::note
Om audio/video-notities op te nemen, schakelt u de OsmAnd [**Audio/Video Notes plugin**](../plugins/audio-video-notes.md) in.
:::

![Actie Audio-Video Android](@site/static/img/map/action_av_note_android.png)

Neemt een medianotitie op of maakt een medianotitie op een geselecteerd punt op de kaart.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - maakt een [audionotitie](../map/point-layers-on-map.md#-audio--video-points-android) op het geselecteerde punt (maakt een nieuw punt op de overlay met een audiopictogram).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - maakt een [videonotitie](../map/point-layers-on-map.md#-audio--video-points-android) op het geselecteerde punt (maakt een nieuw punt op de overlay met een videopictogram).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - maakt een [fotopunt](../map/point-layers-on-map.md#-audio--video-points-android) op de kaart.


## Aanpassen {#customize}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![Kaartcontextmenu Aanpassen](@site/static/img/map/map_context_menu_customize_1.png) <!-- ![Kaartcontextmenu Aanpassen](@site/static/img/map/map_context_menu_customize_2.png) --> ![Kaartcontextmenu Aanpassen](@site/static/img/map/map_context_menu_customize_3.png)

U kunt de volgorde van items in het menu *Acties* in het *kaartcontextmenu* wijzigen of items verbergen. Er worden in totaal 16 acties voorgesteld.

- U kunt de drie meest nuttige acties bovenaan de lijst met *Hoofdacties* plaatsen.
- De rest van het menu kan voor elk profiel afzonderlijk worden aangepast in de secties *Aanvullende acties* en *Verborgen*.

Beschikbare typen acties:

- **<Translate android="true" ids="main_actions"/>**. De sectie heeft slechts 4 knoppen, waarvan er drie kunnen worden aangepast, en Acties, die ongewijzigd blijft.
- **<Translate android="true" ids="additional_actions"/>**. U kunt deze acties openen door op de knop *Acties* te tikken.
- **<Translate android="true" ids="shared_string_hidden"/>**. Het verplaatsen van acties naar deze sectie voorkomt niet dat ze werken. Ze verschijnen gewoon niet in het menu Acties.


## Gerelateerde artikelen {#related-articles}

- [Vector kaarten (Kaartstijlen)](./vector-maps.md)
- [Rasterkaarten (Online / Offline)](./raster-maps.md)
- [Punten op de kaart](./point-layers-on-map.md)
- [Contextmenu tracks](./tracks/track-context-menu.md)
- [Openbaar vervoer](./public-transport.md)
- [Importeren / Exporteren](../personal/import-export.md)
- [Kleurenpaletschema's](../personal/color-palette-schemes.md)

*Laatst bijgewerkt: juni 2025*