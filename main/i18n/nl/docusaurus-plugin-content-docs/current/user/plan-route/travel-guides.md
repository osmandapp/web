---
source-hash: 4d1fd6f77d3485a33ced776546c65769d6a354be721ca6e2b421c4ef414bb7e8
sidebar_position: 2
title:  Reisgidsen
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

:::info Betaalde functie
De Reisgidsen is een [betaalde functie](../purchases/index.md) van de OsmAnd-app.
:::

Virtuele reisgidsen in OsmAnd bieden gebruikers waardevolle informatie, aanbevelingen en tips. Ze stellen reizigers ook in staat om in de app toegang te krijgen tot uitgebreide navigatie-informatie over bezienswaardigheden.

OsmAnd-reisgidsen zijn gebaseerd op gegevens van [Wikivoyage](https://www.wikivoyage.org/), een gemeenschapsproject vergelijkbaar met Wikipedia, waar vrijwillige auteurs actuele artikelen maken.  
Wikivoyage-informatie omvat de belangrijkste feiten over een plaats, vervoer, bezienswaardigheden, winkelen en meer.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Travel guides view General](@site/static/img/guides/travel_guides_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/personal/maps/travel_guides_overview_ios.png)

</TabItem>

</Tabs>


## Hoe te gebruiken {#how-to-use}

- [Download](#download-articles) *Reisgidsen*.
- Blader door [artikelen](#browse-articles) over een land, regio, stad, bezienswaardigheid.
    - Of [toon reisgidsartikelen en/of punten op de kaart](#travel-routes) via het menu Kaart configureren.
    - Blader door bezienswaardigheden op de kaart, voeg ze toe aan *[Kaartmarkeringen](../personal/markers.md#add--edit-markers)* of *[Favorieten](../personal/favorites.md#favorite-group-actions)*.
    - Gebruik de knop *[Volledig lezen](#manage-as-gpx-track)* om naar het *[artikel](#travel-article) in *Reisgidsen* te gaan.
- [Bladwijzer](#explore-and-bookmark) artikelen om ze later te lezen.
- Kies [punten](#points) uit artikelen om te bezoeken en voeg ze toe aan de OsmAnd-kaart.
- Krijg meer informatie over te bezoeken plaatsen uit offline [Wikipedia-artikelen](#combine-with-wikipedia).
- [Bouw een route](../navigation/setup/route-navigation.md#set-destinations) naar gekozen toeristische attracties of een vrije wandeling tussen punten.

:::note
*Reisgidsen*-artikelen worden in OsmAnd opgeslagen als GPX-tracks met Waypoints. Nadat u deze tracks aan de kaart hebt toegevoegd (zie de secties *[Punten](#points)* of *[Reisroutes](#travel-routes)* van dit artikel), kunt u ze beheren via het menu *[Mijn plaatsen](../personal/myplaces.md)*.
:::

### Artikelen downloaden {#download-articles}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*

![Travel guides download menu](@site/static/img/guides/travel_guides_download.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,travel_guides_beta"/>*

![Maps menu iOS](@site/static/img/guides/travel_guides_download_1_ios.png)

</TabItem>

</Tabs>

Voordat u reisgidsen kunt gebruiken, moet u ze downloaden via het menu [Kaarten downloaden](../start-with/download-maps.md#maps-and-resources) (*<Translate android="true" ids="shared_string_menu,maps_and_resources,shared_string_travel_guides"/>*). De artikelen zijn gegroepeerd per regio: *Afrika, Azië, Australië en Oceanië, Centraal-Amerika, Europa, Noord-Amerika, Rusland en Zuid-Amerika*, zodat u geen reisboeken voor een afzonderlijke stad of land hoeft te downloaden.  
Door de vereiste regio's op uw apparaat op te slaan, kunt u de artikelen met OsmAnd doorbladeren, zelfs als u in het buitenland bent of buiten het bereik van uw mobiele netwerk.

:::note
Naast gidsen voor landen, regio's of steden, kunt u gidsen vinden voor plaatsen uit films, boeken, computerspellen, herdenkingsplaatsen van grote persoonlijkheden, enzovoort.
Er zijn ook gespecialiseerde gidsen, zoals de lijst van het UNESCO Global Geoparks Network of 's werelds grootste en meest complexe internationale luchthavens.
:::

## Artikelen doorbladeren {#browse-articles}

Het scherm *Reisgidsen* bestaat uit twee algemene delen: een [*zoekveld*](#search) en een lijst met *reisgidsen* met twee tabbladen: *[<Translate android="true" ids="shared_string_explore"/> en <Translate android="true" ids="saved_articles"/>](#explore-and-bookmark)*. U kunt tussen deze tabbladen wisselen met een enkele tik.
Wanneer u *Reisgidsen* opent (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*), toont OsmAnd u artikelen over interessante plaatsen in de buurt van de geografische coördinaten van het huidige kaartcentrum. Wanneer u op het item in de lijst tikt, wordt het [Reisgidsartikel](#travel-article) geopend. Onderaan het scherm is een schakelaar naar het tabblad *Bladwijzers*.  

### Verkennen en bladwijzers maken {#explore-and-bookmark}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Travel guides main screen](@site/static/img/guides/travel_guides_main_screen_1.png) ![Travel guides main screen 2](@site/static/img/guides/travel_guides_main_screen_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides main screen](@site/static/img/guides/travel_guides_main_screen_1_ios.png) ![Travel guides main screen 2](@site/static/img/guides/travel_guides_main_screen_2_ios.png)

</TabItem>

</Tabs>

Op het tabblad **Verkennen** of **<Translate android="true" ids="popular_destinations"/>** worden de top 30 artikelen over bestemmingen naast het midden van het scherm (buiten de locatie) weergegeven. Door op een item uit de lijst met een titel en een korte beschrijving van het artikel te tikken, kunt u de volledige tekst van dat artikel bekijken.  
Als u op de *Bladwijzerknop* tikt, wordt het artikel opgeslagen om later te lezen en is het beschikbaar op het tabblad Bladwijzers. Op het tabblad *Artikelen met bladwijzer* worden artikelen gerangschikt zoals ze zijn opgeslagen, met de nieuwste artikelen bovenaan.

- &nbsp;**<Translate android="true" ids="shared_string_read"/>**. Opent [Reisgidsartikel](#travel-article).
- &nbsp;**<Translate android="true" ids="shared_string_bookmark"/>**. Verplaatst het geselecteerde artikel naar <Translate android="true" ids="saved_articles"/>.
- &nbsp;**<Translate android="true" ids="shared_string_remove"/>**. Verwijdert het geselecteerde artikel uit <Translate android="true" ids="saved_articles"/>.

### Zoeken {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Travel guides search menu](@site/static/img/guides/travel_guides_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_search_1_ios.png)

</TabItem>

</Tabs>

Het zoekveld bevindt zich bovenaan het scherm <Translate android="true" ids="shared_string_travel_guides"/>. Als u de eerste letters van een land, stad of beroemde plaats begint te typen, verschijnt er een lijst met artikelen onder het zoekveld. Door op de gewenste te tikken, kunt u beginnen met lezen.  
Naast elk zoekresultaat staan de eerste 3 meest gebruikte talen waarin het geselecteerde artikel kan worden gelezen. Populaire artikelen zijn echter beschikbaar in meer talen dan de 3 vermelde.

**Extra functies:**  

- U kunt zoeken naar speciale culturele attracties, zoals *Harry Potter-toerisme*, *Spooksteden*, *Monarchieën* en andere.
- Om de zoekgeschiedenis te verwijderen, moet u de knop [<Translate android="true" ids="shared_string_options"/>](#options) gebruiken.

<!-- 
- Search is complete only when you hit &#128269; or space at the end of the word. - doesn't work as it should be
-->

### Opties {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Travel guides options menu](@site/static/img/guides/travel_guides_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_options_ios.png)

</TabItem>

</Tabs>

In dit menu kunt u de weergave van artikelen aanpassen wanneer u offline werkt. LET OP, dat *[gedownloade](#download-articles)* reisgidsen geen afbeeldingen bevatten. Ze verschijnen alleen wanneer u artikelen bekijkt met een actieve internetverbinding.  
In het menu Opties kunt u kiezen of u afbeeldingen in de bekeken artikelen wilt opslaan om ze te gebruiken wanneer u offline bent. U kunt ook de bestaande afbeeldingencache wissen of de zoekgeschiedenis verwijderen (werkt alleen bij het zoeken in *Reisgidsen*).

- &nbsp;**<Translate android="true" ids="wikivoyage_download_pics"/>**. Afbeeldingen in artikelen kunnen worden gedownload voor offline gebruik.  
- &nbsp;**<Translate android="true" ids="images_cache"/>**. Wist de afbeeldingencache om geheugen vrij te maken.
- &nbsp;**<Translate android="true" ids="delete_search_history"/>**. Wist [zoekgeschiedenis](#search).

## Reisgidsartikel {#travel-article}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Travel guides article](@site/static/img/guides/travel_guides_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_article_ios.png)

</TabItem>

</Tabs>

U kunt een artikel openen vanuit de voorgestelde opties op het *[tabblad Verkennen](#explore-and-bookmark)* of via de optie *[Zoeken](#search)*. Wanneer u toeristische attracties, genaamd *[Punten](#points)*, uit een *Reisgidsartikel* toevoegt aan de OsmAnd-kaart, kunt u het artikel ook openen met de knop *Volledig lezen* in de [beschrijvingssectie](../map/tracks/track-context-menu.md#description-and-info) van het waypoint.

De volgende bedieningselementen bevinden zich bovenaan het scherm:

- Schakelaar om de taal van het artikel te wijzigen. De taal kan worden gekozen uit de beschikbare opties. De systeemtaal wordt standaard gebruikt.
- Met de knop &#8942; kunt u het artikel delen met uw vrienden. De link opent in de OsmAnd-app, het juiste reisgidsbestand moet worden gedownload op het apparaat van de ontvanger of de [Wikivoyage](https://www.wikivoyage.org/)-site, als de ontvanger de OsmAnd-app niet heeft of voor iOS-apparaten.
- Door op de navigatiebalk te tikken, opent u het *[Navigatiemenu van de reisgidsen](#navigation-menu)*.

Onderaan het scherm bevinden zich knoppen zoals:

- [Inhoud](#table-of-contents). Opent de inhoudsopgave van het artikel.
- [Punten](#points). Toont toeristische attracties die verband houden met het artikel op een kaart.
- [Bladwijzer](#explore-and-bookmark). Hiermee kunt u een artikel aan bladwijzers toevoegen om het later te lezen.  


### Navigatiemenu {#navigation-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Travel guides contents menu](@site/static/img/guides/travel_guides_navigation_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_navigation_menu_ios.png)

</TabItem>

</Tabs>

Om van het ene artikel naar het andere te gaan in de *Reisgidsartikelen*, gebruikt u het **Navigatiemenu**. U kunt het openen door op het adresveld boven de afbeelding te tikken. LET OP, dat de artikelen in de Reisgidsen als volgt zijn gegroepeerd: *Continent → Regio → Land → Provincie (regio) → Stad*.
Als u op de pijl in de linkerbovenhoek van het scherm tikt, gaat u rechtstreeks naar het tabblad *Verkennen* of *Artikelen met bladwijzer* (afhankelijk van welk tabblad u eerder hebt geopend).


### Inhoudsopgave {#table-of-contents}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Travel guides contents menu](@site/static/img/guides/travel_guides_contents_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_contents_menu_ios.png)

</TabItem>

</Tabs>

De meeste *Reisgidsartikelen* hebben dezelfde inhoudsstructuur: *inleiding* (afbeeldingen en beschrijving van de toeristische locatie) en *daaropvolgende hoofdstukken*.

- &nbsp;*Begrijpen*. Details over de lokale cultuur en gewoonten.
- &nbsp;*Er geraken*. Details over hoe u op sommige plaatsen kunt komen en hoeveel deze route kost.
- &nbsp;*Zien*. Een lijst met attracties (musea, historische locaties, enzovoort) met volledige beschrijvingen: ticketprijzen, openingstijden, nuttige links en telefoonnummers.
- &nbsp;*Doen*. Plaatsen om tijd door te brengen.
- &nbsp;*Kopen*. Plaatsen om te winkelen.
- &nbsp;*Eten*. Horecagelegenheden (ingedeeld naar budget: budget, middenklasse, luxe).
- &nbsp;*Drinken*. Bars en cafés.
- &nbsp;*Slapen*. Accommodaties zijn ingedeeld naar budget (budget, middenklasse, luxe).
- &nbsp;*Volgende bestemming*. Dichtstbijzijnde plaatsen uit Wikivoyage.

### Punten {#points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Travel guides points  menu](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![Travel guides points menu](@site/static/img/guides/travel_guides_articles_three_dots_point.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_points_on_the_map_1_ios.png) ![Travel guides search menu](@site/static/img/guides/travel_guides_points_on_the_map_2_ios.png)

</TabItem>

</Tabs>

*Reisgidsartikelen* bevatten vaak toeristische attracties die per onderwerp zijn gegroepeerd. Door eenmaal op de knop *Punten* onderaan het *[Artikel](#travel-article)* te tikken, worden alle attracties die verband houden met het onderwerp (eetgelegenheden, accommodaties, luchthavens, winkels, historische monumenten, enzovoort) aan de kaart toegevoegd en kunnen ze worden *[beheerd als een Track](#manage-as-gpx-track)*.  

Standaard zijn attractiegroepen gemarkeerd met bepaalde pictogrammen: de categorieën *Eten en Drinken* met een mes en vork in een rode cirkel, *Doen en Zien* met een camera in een groene cirkel, en andere. U kunt groepen punten beheren met &#8942; zoals een *[Waypoint-map](../map/tracks/track-context-menu.md#points--waypoints)*.  

:::note
Punten in *Reisgidsartikelen* verwijzen naar waypoints op een GPX-track.  
U kunt ook *[punten aan de kaart toevoegen](#travel-routes)* in het menu *Kaart configureren*. U kunt ze allemaal weergeven of een specifieke categorie selecteren.  
:::


## Reisroutes {#travel-routes}

*<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>*

Een alternatieve manier om *Reisgidsen* te doorbladeren is door ze op de kaart weer te geven via het menu *Kaart configureren*. Deze functie is niet van toepassing op de mogelijkheid die OsmAnd biedt om Wikivoyage te gebruiken, het is alleen van toepassing op tracks. U kunt meer lezen in onze [blog](https://osmand.net/blog/routes#generated-travel-routes).

![Travel guides points menu](@site/static/img/guides/travel_guides_travel_routes_path.png) ![Travel guides points menu](@site/static/img/guides/travel_guides_travel_routes_view.png)


### Reisroutes en artikelen op de kaart {#travel-routes-and-articles-on-the-map}

![Travel guides points  menu](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![Travel guides points  menu](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)  

Nadat u de weergave *Reisroutes* in het menu *Kaart configureren* hebt ingeschakeld, verschijnen er cirkels van verschillende kleuren op de kaart. De oranje cirkels vertegenwoordigen routetracks, routeartikelen en enkele waypoints. Tik op een specifieke route, artikel of punt en tik vervolgens op de knop *Downloaden* (&#9047;), en u kunt ze [beheren als een track](#manage-as-gpx-track).

### Aangepaste Reisgidsen {#custom-travel-guides}

We raden u aan nieuwe artikelen of bewerkingen toe te voegen aan [Wikivoyage](https://en.wikivoyage.org/). We werken de Reisgidsen ongeveer elke 6 maanden bij, en u kunt dan nieuwe artikelen downloaden. U kunt ook uw eigen *Reisboek* maken. Hoe u dit doet, wordt beschreven in de technische documentatie (zie het artikel *[Aangepaste Reisgids maken](../../technical/map-creation/create_travel_guide.md)*).

<!--
### Collections of tracks {#collections-of-tracks}

https://osmand.net/blog/routes/#generated-travel-routes
-->


## Beheren als GPX-track {#manage-as-gpx-track}

![Travel guides points menu 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![Travel guides points menu 2](@site/static/img/guides/travel_guides_articles_my_places.png)  

Nadat u *Reisgidsen* aan de kaart hebt toegevoegd, kunnen *Reisgidsartikelen* worden opgeslagen als een GPX-track en worden beheerd via het menu *[Mijn plaatsen](../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>*). Ze kunnen op de kaart worden weergegeven, gedeeld, hernoemd, in een andere map geplaatst, geëxporteerd of verwijderd worden.  

- &nbsp;In *[Overzicht](../map/tracks/track-context-menu.md#overview)* kunt u een korte beschrijving lezen of het [Reisgidsartikel](#travel-article) openen door op de knop *Volledig lezen* te tikken. *Bewerken* stelt u in staat het artikel te corrigeren.
- &nbsp;Er is geen informatie in de sectie *[Track](../map/tracks/track-context-menu.md#altitude--speed-graphs)*, de GPX-bestanden van *Reisgidsen* bevatten alleen waypoints.  
- &nbsp;Onder *[Punten](../map/tracks/track-context-menu.md#points--waypoints)* ziet u mappen met punten gegroepeerd op naam (Kopen, Doen, Drinken, enzovoort).
- &nbsp;De knop *[Opties](../map/tracks/track-context-menu.md#options)* voert dezelfde functies uit als bij een gewone track.

:::info
*Punten* worden opgeslagen in een [GPX-bestand](../../technical/osmand-file-formats/osmand-gpx.md) (een veelgebruikt formaat voor tracks) als [Waypoints](../map/point-layers-on-map.md#track-waypoints). Het aantal punten (waypoints) dat de track bevat, wordt aangegeven naast het pictogram &#128681; in het trackveld.  
In het *[trackcontextmenu](../map/tracks/track-context-menu.md)* van het GPX-bestand vindt u algemene informatie over het artikel waartoe deze track behoort.  
:::

## Combineren met Wikipedia {#combine-with-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Travel guides combine with Wikipedia 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![Travel guides combine with Wikipedia 2](@site/static/img/guides/travel_guides_wikipedia_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_wikipedia_1_ios.png)  ![Travel guides search menu](@site/static/img/guides/travel_guides_wikipedia_2_ios.png)

</TabItem>

</Tabs>

In de *Reisgidsartikelen* vindt u nuttige informatie over toeristische attracties (contactgegevens, weblinks, prijzen, enzovoort). Veel artikelen hebben een *Wikipedia*-knop waarmee u een *[Wikipedia-artikel](../plugins/wikipedia.md)* (online of offline) over de bezienswaardigheid kunt openen.  

In sommige gevallen zal het *[tabblad Bladwijzers](#explore-and-bookmark)* van OsmAnd u vragen om de [Wikipedia-kaartlaag](../plugins/wikipedia.md#download-wikipedia-packages) te downloaden om gerelateerde artikelen offline te kunnen bekijken.

![Travel guides download Wikipedia](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info OPMERKING
De [Wikipedia-plugin](../plugins/wikipedia.md) is een [betaalde functie](../purchases/index.md) van de OsmAnd-app.
:::

## Gerelateerde artikelen {#related-articles}

- [Interactie met de kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vectorkaarten (Kaartstijlen)](../../user/map/vector-maps.md)