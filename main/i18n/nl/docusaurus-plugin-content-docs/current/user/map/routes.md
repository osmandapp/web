---
source-hash: 24073bbbba8108ac4befa02adbada3ce95bc6b6c5197b214d7ffa297c6ee56c5
sidebar_position: 10
title: Routes
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

OsmAnd heeft veel krachtige functies voor het weergeven van verschillende [routes](#type-of-routes) op de kaart. Standaard maken deze routes deel uit van [vectorkaarten](./vector-maps.md#routes) (OpenStreetMap-gegevens), maar vergelijkbare functionaliteit wordt geboden door [tracks](./tracks/index.md) die kunnen worden gemaakt met [Route plannen](../plan-route/create-route.md), geïmporteerd als [GPX-tracks](#save-as-a-track), opgenomen met de [Reisopname-plugin](../plugins/trip-recording.md).

## Type routes {#type-of-routes}

Routes vertegenwoordigen verschillende buitenactiviteiten met behulp van gegevens van [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Door op **het schildpictogram met een routenummer of routevlag** op de kaart te tikken, wordt een contextmenu geopend dat aanvullende informatie over de route biedt en het mogelijk maakt deze als onderdeel van de navigatie te gebruiken.

U kunt het filteren van sommige routetypen configureren in het menu [Kaart configureren](../map/configure-map-menu.md).

### Fietsroutes {#cycle-routes}

[Fietsroutes](https://wiki.openstreetmap.org/wiki/Cycle_routes) zijn aanwezig in drie typen: *lokaal* (`lcn`), *regionaal* (`rcn`), *nationaal* (`ncn`), *internationaal* (`icn`). Ook kunnen fietsroutes deel uitmaken van [Knooppuntnetwerken](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). U kunt kiezen hoe u kleur toewijst aan de routesegmenten:

- ***<Translate android="true" ids="layer_route"/>***.
![Kaartroutes - fietsroutes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.
![Kaartroutes - fiets-knooppunt-netwerken](@site/static/img/map/map-routes-cycle-node-networks.png)

Meer informatie vindt u in het artikel [Kaartlegenda](../map-legend/index.md).

### Mountainbikeroutes {#mountain-bike-routes}

MTB-routes hebben een specifieke kartering in [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) en kunnen afzonderlijk van fietsroutes worden geselecteerd.

<!--
| | | |
|------------|------------|------------|
| ***<Translate android="true" ids="mtb_scale"/>*** | Toont paden volgens de MTB-schaal. Meer informatie vindt u in het artikel [Kaartlegenda](../map-legend/index.md). | ![Kaartroutes - MTB-paden](@site/static/img/map/map-routes-mtb-trails.png) |
| ***<Translate android="true" ids="mtb_imba"/>*** | Toon MTB-paden volgens de International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Meer informatie vindt u in het artikel [Kaartlegenda](../map-legend/index.md). | ![Kaartroutes - MTB-paden](@site/static/img/map/map-routes-mtb_imba-trails.png) |
-->

- ***<Translate android="true" ids="mtb_scale"/>***. Toont paden volgens de MTB-schaal. Meer informatie vindt u in het artikel [Kaartlegenda](../map-legend/index.md).
![Kaartroutes - MTB-paden](@site/static/img/map/map-routes-mtb-trails.png)

- ***<Translate android="true" ids="mtb_imba"/>***. Toont MTB-paden volgens de International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Meer informatie vindt u in het artikel [Kaartlegenda](../map-legend/index.md).
![Kaartroutes - MTB-paden](@site/static/img/map/map-routes-mtb_imba-trails.png)

### Wandelroutes {#hiking--walking-routes}

[Wandelroutes](https://wiki.openstreetmap.org/wiki/Walking_Routes) zijn aanwezig in drie typen: *lokaal* (`lwn`), *regionaal* (`rwn`), *nationaal* (`nwn`), *internationaal* (`iwn`). Ook kunnen wandelroutes deel uitmaken van [Knooppuntnetwerken](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd scheidt wandel- en trekroutes niet en combineert ze in 1 groep. U kunt kiezen hoe u kleur toewijst aan de routesegmenten:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***. Kleurt routes volgens hun individuele [lokale kleur](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (indien beschikbaar in OpenStreetMap) en het toeristische schildsymbool.
![Kaartroutes - wandelen osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***. Kleurt op [netwerktoewijzing](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).
![Kaartroutes - wandelnetwerk](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***. Kleurt routes volgens het type [knooppuntnetwerk](https://wiki.openstreetmap.org/wiki/Node_Networks) (internationaal, regionaal of lokaal).
![Kaartroutes - wandelknooppuntnetwerken](@site/static/img/map/map-routes-hiking-node-networks.png)

### Dirtbike-paden {#dirt-bike-trails}

![Kaartroutes - Dirtbike-paden](@site/static/img/map/map-routes-dirt-bike-trails.png)

De functie **Dirtbike-paden** stelt u in staat om dirtbike-specifieke routes op de kaart weer te geven op basis van de `dirtbike:scale`-tag. Deze schaal markeert paden die geschikt zijn voor dirtbiken, met een gekleurde overlay die moeilijkheidsgraden toont.

U kunt deze functie activeren in *Menu → Kaart configureren → Routes → Dirtbike-routes*. Het systeem werkt vergelijkbaar met de MTB-schaal en biedt een visuele weergave van routes die zijn afgestemd op dirtbiken — meer over de [`dirtbike`-tag vindt u hier](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).

### Klimroutes {#climbing-routes}

![Kaartroutes - Klimroutes](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd ondersteunt *klimgebieden* (`climbing=area`) en *klimrotsen* (`climbing=crag`), zodat u [rotsklimlocaties](https://wiki.openstreetmap.org/wiki/Climbing) direct op de kaart kunt vinden.

- **Klimgebieden** vertegenwoordigen **grotere zones** waar meerdere klimroutes bestaan.

- **Klimrotsen** verwijzen naar **specifieke rotsformaties** of muren die geschikt zijn om te klimmen.

- Deze locaties bevatten **gedetailleerde attributen** zoals:

    - *Klimniveau* (bijv. UIAA, Frans, YDS).
    - *Rotssoort* (bijv. kalksteen, graniet).
    - *Routelengte* (in meters).
    - *Klimkwaliteit* (solide, los, gemengd).
    - *Beschikbaarheid van topboek*.

Om klimlocaties op de kaart in te schakelen, gaat u naar: *Menu → Kaart configureren → Routes → Klimroutes*.

### Moeilijkheidsgraad wandelpaden {#hiking-trails-difficulty-grade}

![Kaartroutes - alpine wandelen](@site/static/img/map/map-routes-alpine-hiking.png)

Sommige wegsegmenten kunnen deel uitmaken van vele routes, maar ze kunnen individueel worden gekleurd om de moeilijkheidsgraad van het segment in bergachtige gebieden weer te geven. Momenteel ondersteunt OsmAnd Italiaanse en Zwitserse classificaties, en elk heeft een specifieke lijst met uitrustingsvereisten om toegang te krijgen tot dit segment.

1. [SAC-schaal](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [CAI-schaal](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)

### Skiroutes {#ski-routes}

![Kaartroutes - skipistes](@site/static/img/map/map-routes-ski-slopes.png)

Skiroutes zijn een specifieke groep [routes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) in OpenStreetMap. Typisch kunnen deze routes worden gebruikt met de [Winter- en Ski](../map/vector-maps.md#winter-and-ski) kaartstijl met alle zichtbare [Pistes](https://wiki.openstreetmap.org/wiki/Pistes).

### Ruiterroutes {#horse-routes}

![Kaartroutes - ruiterroutes](@site/static/img/map/map-routes-horse.png)

[Ruiterroutes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) worden weergegeven als gekleurde routes met symbolen voor paardrijden.

### Wildwatersporten {#whitewater-sports}

![Kaartroutes - wildwatersport](@site/static/img/map/map-routes-whitewater-sport.png)

[Wildwaterroutes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) worden getoond samen met toegangspictogrammen, gevarenzones voor [wildwatertoerisme](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map).

### Hardlooproutes {#running-routes}

![Fitnessroutes](@site/static/img/map/fitness_1.png)

[Hardlooproutes](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) in OpenStreetMap worden gebruikt voor benoemde, genummerde of anderszins gemarkeerde hardlooproutes, voornamelijk voor atletiek.

### Fitnesspaden {#fitness-trails}

![Fitnessroutes](@site/static/img/map/fitness_route.png)

Een [fitnesspad](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) is een pad of parcours uitgerust met obstakels of stations langs de lengte om het menselijk lichaam te trainen ter verbetering van de gezondheid.

### Reisroutes {#travel-routes}

<InfoAndroidOnly />

![Reisroutes](@site/static/img/map/travel_route_2.png) ![Reisroutes](@site/static/img/map/travel_routes.png)

Reisroutes maken deel uit van aangepaste [Reisboek](../plan-route/travel-guides.md) (`travel.obf`) bestanden, die kunnen worden gegenereerd uit de [routes van de gebruiker](https://osmand.net/blog/routes#generated-travel-routes) of deel kunnen uitmaken van aanvullende [plugins](../plugins/index.md).

U kunt de weergave van bepaalde ***Reisboeken*** en typen ***tracks*** aanpassen, tracks weergeven als punten, of ***Puntgroepen*** (bijvoorbeeld voor Wikivoyage-reisboeken). Meer informatie over [Reisgidsen vindt u hier](../plan-route/travel-guides.md).

## Routes op de kaart weergeven {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Kaartroutes configureren sectie](@site/static/img/map/configure_map_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Trackmenu iOS](@site/static/img/map/configure_map_routes_ios.png)

</TabItem>

</Tabs>

- Om de gewenste routes op de kaart weer te geven, schakelt u ze in de *Routeslijst* van het menu [Kaart configureren](../map/configure-map-menu.md) in.
- OsmAnd kan [routes die aanwezig zijn op OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route) markeren. Ze kunnen worden geselecteerd door op [het symbool op de route](#save-as-a-track) te tikken, en als de zichtbare set routes correct is geconfigureerd, kunt u de kleur en pictogrammen volgen.
- U kunt een track bovenop de routes maken met behulp van de tool [Route plannen](../plan-route/create-route.md).

![Kaartroutes - wandelen osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Kaartroutes - fiets-knooppunt-netwerken](@site/static/img/map/map-routes-cycle-node-networks.png)

## Acties met routes {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route-info](@site/static/img/map/routes_osm.png) ![Route-info](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route-info](@site/static/img/map/routes_osm_ios.png) ![Route-info](@site/static/img/map/routes_osm_ios_1.png)

</TabItem>

</Tabs>

Op de kaart kunt u routes selecteren voor [wandelen, fietsen, reizen en meer](#type-of-routes), die waar van toepassing zijn gemarkeerd met [OSMC-symbolen](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol).

Wanneer u op een **routesymbool** op de kaart tikt:

- Een **lijst met de nabijgelegen routes** op die locatie wordt weergegeven.
- Na het selecteren van een route uit de lijst, wordt een [contextmenu](../map/tracks/track-context-menu.md) voor die route geopend, met gedetailleerde informatie en beschikbare acties.

In het **contextmenu** kunt u:

- [Aanvullende informatie](#route-info-and-elevation) over de geselecteerde route bekijken.
- De route [opslaan](#save-as-a-track) als een **GPX-track**.
- [Navigatie starten](#start-navigation) langs de route.

### Route-info en hoogte {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route-info](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route-info](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>

De volgende informatie is zichtbaar in het contextmenu:

- **Route-info**: Routenaam, OSM-link (OSM Editing-plugin vereist), Type, Beschrijving, Afstand, Richting, Stijging/Daling, Hoogtebereik, Netwerk, Operator, Staat, Kleur, Rondreis, Start-/Eindpunten en meer.
- **Algemeen**: Grootte, Locatie, Gemaakt op.
- **Aanvullende info**. Toont type activiteit.
- Actieknoppen: [Opslaan als](#save-as-a-track) en [Navigatie starten](#start-navigation).
- [Hoogte-info](../navigation/setup/route-details.md#elevation-info). Toont informatie over de hoogtegegevens op de route.
- [Track op kaart analyseren](../map/tracks/index.md#analyze-track-on-map). Toont gedetailleerde analyse van trackgegevens met behulp van grafieken en kaarten.

Om een grafiek van de hoogte, helling of hoogtedetails voor een geselecteerde route te bekijken, tikt u eenvoudig op een van de volgende waarden in het contextmenu: **Afstand**, **Omhoog**, **Omlaag** of **Hoogte**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes op de grond](@site/static/img/map/routes_osm_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes op de grond](@site/static/img/map/routes_osm_ios_2.png)

</TabItem>

</Tabs>

### Opslaan als een track {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes op de grond](@site/static/img/map/routes-4.png) ![Routes op de grond](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes op de grond](@site/static/img/map/hiking.png) ![Routes op de grond](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>

Om de route op te slaan als een *GPX-bestand*, tikt u op de knop **Opslaan (Downloaden)** onder het [Infopaneel](../map/tracks/track-context-menu.md#info-panel). Hiermee opent u het paneel met [Snelle acties](../map/tracks/track-context-menu.md#track-actions) waar u toegang hebt tot trackacties zoals het wijzigen van [Uiterlijk](./tracks/appearance.md), [Navigatie](../navigation/setup/route-navigation.md) of het bewerken van [Route plannen](../plan-route/create-route.md).

### Navigatie starten {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes op de grond](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes op de grond](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>

Om de navigatie langs de geselecteerde OSM-route te starten, tikt u op de knop **Navigatie starten** in het [**Infopaneel**](../map/tracks/track-context-menu.md#info-panel).

Hiermee wordt de modus [**Navigatie per track**](../navigation/setup/gpx-navigation.md) gestart, zodat u de route kunt volgen met gesproken aanwijzingen en navigatiefuncties.

### Snelle acties {#quick-actions}

U kunt aanpassen of routes worden in- of uitgeschakeld met behulp van de widget [Snelle actie](../widgets/quick-action.md#configure-map).

## Routes zoeken {#routes-search}

Zoek routes met behulp van de [Zoekfunctie](../search/index.md) op naam of door "Routes" te selecteren in de sectie [Categorieën](../search/search-poi.md#).

Om te zoeken, gaat u naar het menu *<Translate android="true" ids="search_button"/>* of *<Translate android="true" ids="search_button,search_categories"/>* en voert u uw activiteit in.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes op de grond](@site/static/img/map/route_search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes op de grond](@site/static/img/map/route_search_ios.png)

</TabItem>

</Tabs>

Navigeer naar *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* om de gewenste routes te vinden. Routes omvatten naam, activiteitstype, lengte, locatie en afstand tot het dichtstbijzijnde punt.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes op de grond](@site/static/img/map/route_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes op de grond](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

Gebruik de filterknop (rechtsboven) om alleen de gewenste routes weer te geven.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes op de grond](@site/static/img/map/route_search_2.png) ![Routes op de grond](@site/static/img/map/route_search_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes op de grond](@site/static/img/map/route_search_2_ios.png) ![Routes op de grond](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>

## Gerelateerde artikelen {#related-articles}

- [Kaartcontextmenu](./map-context-menu.md)
- [Kaart configureren](./configure-map-menu.md)
- [Tracks](./tracks/index.md)
- [Tracks contextmenu](./tracks/track-context-menu.md)
- [Openbaar vervoer](./public-transport.md)
- [Uiterlijk van navigatieroute](../navigation/guidance/map-during-navigation.md#route-line-appearance)

> *Laatst bijgewerkt: mei 2025*