---
source-hash: c542cbb5952fb2ff6a44defcd1d4f1428cda6f2f08e20fdd5c2611ae081556a3
sidebar_position: 10
title:  Routes
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

OsmAnd heeft veel krachtige functies voor het weergeven van verschillende [routes](#type-of-routes) op de kaart. Standaard maken deze routes deel uit van [vectorkaarten](./vector-maps.md#routes) (OpenStreetMap-gegevens), maar vergelijkbare functionaliteit wordt geboden door [tracks](./tracks/index.md) die kunnen worden gemaakt met [Route plannen](../plan-route/create-route.md), geïmporteerd als [GPX-tracks](#save-as-a-track), of opgenomen met de [Tripopname-plugin](../plugins/trip-recording.md). De kaartlegenda voor routes vindt u [hier](../map-legend/osmand.md#routes).


## Soorten routes {#type-of-routes}

Routes vertegenwoordigen verschillende buitenactiviteiten met behulp van gegevens van [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Door op **het schildpictogram met een routenummer of routevlag** op de kaart te tikken, wordt een contextmenu geopend dat aanvullende informatie over de route geeft en het mogelijk maakt om deze te gebruiken als onderdeel van de navigatie.

U kunt het filteren van sommige routetypes configureren in het menu [Kaart configureren](../map/configure-map-menu.md).

### Fietsroutes {#cycle-routes}

[Fietsroutes](https://wiki.openstreetmap.org/wiki/Cycle_routes) zijn er in drie soorten: *lokaal* (`lcn`), *regionaal* (`rcn`), *nationaal* (`ncn`), *internationaal* (`icn`). Fietsroutes kunnen ook deel uitmaken van [knooppuntnetwerken](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). U kunt kiezen hoe u kleur toewijst aan de routesegmenten:

- ***<Translate android="true" ids="layer_route"/>***.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

Meer informatie vindt u in het artikel [Kaartlegenda](../map-legend/index.md).


### Mountainbikeroutes {#mountain-bike-routes}

MTB-routes hebben een specifieke mapping in [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) en kunnen afzonderlijk van fietsroutes worden geselecteerd.

<!--
| | | |
|------------|------------|------------|
| ***<Translate android="true" ids="mtb_scale"/>*** | Shows trails according to the MTB scale. More information is in the [Map Legend](../map-legend/index.md) article. | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png) |
| ***<Translate android="true" ids="mtb_imba"/>*** | Show MTB trails according to the International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). More information is in the article [Map legend](../map-legend/index.md). | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png) |
-->

- ***<Translate android="true" ids="mtb_scale"/>***. Toont paden volgens de MTB-schaal. Meer informatie vindt u in het artikel [Kaartlegenda](../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***. Toon MTB-paden volgens de International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Meer informatie vindt u in het artikel [Kaartlegenda](../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

### Wandelroutes {#hiking--walking-routes}

[Wandelroutes](https://wiki.openstreetmap.org/wiki/Walking_Routes) zijn er in drie soorten: *lokaal* (`lwn`), *regionaal* (`rwn`), *nationaal* (`nwn`), *internationaal* (`iwn`). Wandelroutes kunnen ook deel uitmaken van [knooppuntnetwerken](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd maakt geen onderscheid tussen wandel- en trektochtroutes en combineert ze in 1 groep. U kunt kiezen hoe u kleur toewijst aan de routesegmenten:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***. Kleurt routes volgens hun individuele [lokale kleur](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (indien beschikbaar in OpenStreetMap) en het toeristische schildsymbool.  
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***. Kleurt op basis van [netwerkaffiliatie](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***. Kleurt routes volgens het type [knooppuntnetwerk](https://wiki.openstreetmap.org/wiki/Node_Networks) (internationaal, regionaal of lokaal).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)


### Dirt Bike-paden {#dirt-bike-trails}

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)

De functie **Dirt Bike-paden** stelt u in staat om specifieke routes voor dirt bikes op de kaart weer te geven op basis van de `dirtbike:scale`-tag. Deze schaal markeert paden die geschikt zijn voor dirt biking, met een gekleurde overlay die de moeilijkheidsgraden toont ([Kaartlegenda](../map-legend/osmand.md#routes)).  

U kunt deze functie activeren in *Menu → Kaart configureren → Routes → Dirt bike-routes*. Het systeem werkt op dezelfde manier als de MTB-schaal en biedt een visuele weergave van routes die zijn afgestemd op dirt biking — [meer over de `dirtbike`-tag vindt u hier](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


### Klimroutes {#climbing-routes}

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd ondersteunt *klimgebieden* (`climbing=area`) en *klimrotsen* (`climbing=crag`), waardoor u [rotsklimlocaties](https://wiki.openstreetmap.org/wiki/Climbing) direct op de kaart kunt vinden.

- **Klimgebieden** vertegenwoordigen **grotere zones** waar meerdere klimroutes bestaan.

- **Klimrotsen** verwijzen naar **specifieke rotsformaties** of wanden die geschikt zijn om te klimmen.

- Deze locaties bevatten **gedetailleerde attributen** zoals:

    - *Klimgrens* (bijv. UIAA, Frans, YDS).
    - *Rotssoort* (bijv. kalksteen, graniet).
    - *Routelengte* (in meters).
    - *Klimkwaliteit* (solide, los, gemengd).
    - *Beschikbaarheid van topboek*.

Om klimlocaties op de kaart in te schakelen, gaat u naar: *Menu → Kaart configureren → Routes → Klimroutes*.


### Moeilijkheidsgraad van wandelpaden {#hiking-trails-difficulty-grade}

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

Sommige wegsegmenten kunnen deel uitmaken van vele routes, maar ze kunnen individueel gekleurd zijn om de moeilijkheidsgraad van het segment in bergachtige gebieden weer te geven. Momenteel ondersteunt OsmAnd Italiaanse en Zwitserse classificaties, en elk heeft een specifieke lijst van uitrustingseisen om toegang te krijgen tot dit segment.  

1. [SAC-schaal](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [CAI-schaal](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


### Skipistes en -routes {#ski-slopes-and-routes}

- _Skipistes en -routes_ in _Winter en Ski_ kaartstijl.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

- _Skipistes en -routes_ in _OsmAnd standaard_ kaartstijl.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes_1.png)

Skipistes en -routes zijn een specifieke groep [routes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) in OpenStreetMap. Typisch kunnen deze routes worden gebruikt met de kaartstijl [Winter en Ski](../map/vector-maps.md#winter-and-ski) met alle zichtbare [Pistes](https://wiki.openstreetmap.org/wiki/Pistes). Als een andere kaartstijl actief is, wordt een banner weergegeven die suggereert om over te schakelen naar [Winter en Ski](../map/vector-maps.md#winter-and-ski) (*Alleen Android*) en worden alleen de pistes weergegeven. Tik op ***Omschakelen*** om de kaartstijl te wijzigen zonder het huidige scherm te verlaten, of ***Later*** om de banner te verbergen.


### Sneeuwscooterpaden {#snowmobile-trails}

![Map routes - snowmobile](@site/static/img/map/snowmobile_trail.png)

Sneeuwscooterpaden zijn gemapt in [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dsnowmobile) als `route=snowmobile`. Ze worden gebruikt voor winterrecreatie en om afgelegen gebieden tijdens het sneeuwseizoen te verbinden. In OsmAnd zijn sneeuwscooterpaden klikbaar, zie de sectie [Acties met routes](#actions-with-routes).


### Ruiterpaden {#horse-routes}

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

[Ruiterpaden](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) worden weergegeven als gekleurde routes met symbolen voor paardrijden.  


### Wildwatersporten {#whitewater-sports}

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

[Wildwaterroutes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) worden getoond samen met toegangspictogrammen en gevarenzones voor [wildwatertoerisme](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map).  


### Hardlooproutes {#running-routes}

![Fitness routes](@site/static/img/map/fitness_1.png)

[Hardlooproutes](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) in OpenStreetMap worden gebruikt voor benoemde, genummerde of anderszins gemarkeerde hardlooproutes, voornamelijk voor atletiek.


### Fitnesstrails {#fitness-trails}

![Fitness routes](@site/static/img/map/fitness_route.png)

Een [fitnesstrail](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) is een pad of parcours uitgerust met obstakels of stations langs de lengte om het menselijk lichaam te oefenen ter verbetering van de gezondheid.  


### Reisroutes {#travel-routes}

<InfoAndroidOnly />

![Travel routes](@site/static/img/map/travel_route_2.png)  ![Travel routes](@site/static/img/map/travel_routes.png)

Reisroutes maken deel uit van aangepaste [reisboeken](../plan-route/travel-guides.md) (`travel.obf`) bestanden, die kunnen worden gegenereerd uit de [routes van de gebruiker](https://osmand.net/blog/routes#generated-travel-routes) of deel uitmaken van aanvullende [plugins](../plugins/index.md).  

U kunt de weergave van bepaalde ***Reisboeken*** en soorten ***tracks*** aanpassen, tracks weergeven als punten, of ***Puntgroepen*** (bijvoorbeeld voor Wikivoyage-reisboeken). Leer [hier meer over reisgidsen](../plan-route/travel-guides.md).


## Routes op de kaart weergeven {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png) ![Routes Classes](@site/static/img/map/routes_classes_android.png)

- Om de gewenste routes op de kaart weer te geven, schakelt u ze in de *Lijst met routes* van het menu [Kaart configureren](../map/configure-map-menu.md) in.
- OsmAnd kan [routes op OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route) markeren. Ze kunnen worden geselecteerd door op [het symbool op de route](#save-as-a-track) te tikken, en als de zichtbare set routes correct is geconfigureerd, kunt u de kleur en pictogrammen volgen.
- De belangrijkste routetypes kunnen ook worden gefilterd op klassen en subklassen, waardoor u alleen specifieke groepen binnen elk type kunt weergeven. Bijvoorbeeld, u kunt wandelroutes weergeven op basis van **OSMC-symbolen** als klassen, en op basis van *internationale, nationale, regionale* of *lokale netwerken* als subklassen.
- U kunt een track bovenop de routes maken met behulp van het hulpmiddel [Route plannen](../plan-route/create-route.md). 
- Wanneer meerdere routes langs dezelfde weg lopen, wordt elke route weergegeven als een aparte semi-transparante lijn die boven de anderen is geplaatst. 
- Wanneer u tikt op een locatie waar meerdere routes overlappen, wordt een contextmenu weergegeven met alle routes die door dit punt lopen. 
- Bijgewerkte vectorkaarten zijn vereist om alle elementen van het nieuwe routesrenderingschema weer te geven. 

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png)

- Om de gewenste routes op de kaart weer te geven, schakelt u ze in de *Lijst met routes* van het menu [Kaart configureren](../map/configure-map-menu.md) in.
- OsmAnd kan [routes op OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route) markeren. Ze kunnen worden geselecteerd door op [het symbool op de route](#save-as-a-track) te tikken, en als de zichtbare set routes correct is geconfigureerd, kunt u de kleur en pictogrammen volgen.
- U kunt een track bovenop de routes maken met behulp van het hulpmiddel [Route plannen](../plan-route/create-route.md). 
- Wanneer meerdere routes langs dezelfde weg lopen, wordt elke route weergegeven als een aparte semi-transparante lijn die boven de anderen is geplaatst.   

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

</Tabs>


## Details van klimgebied en rotswand {#climbing-area-and-crag-details}

![Climbing details](@site/static/img/map/climbing_andr.png)

Bij het selecteren van een [klimgebied of -rotswand](../map/routes.md#climbing-routes), biedt OsmAnd een gedetailleerd overzicht van de klimlocatie, inclusief: naam en locatie, moeilijkheidsgraad van het klimmen (UIAA, Frans, YDS, etc.), rotstype, hoogte en routelengte, klimkwaliteit en oppervlaktecondities.


## Acties met routes {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/routes_osm.png) ![Route info](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/routes_osm_ios_new.png) ![Route info](@site/static/img/map/routes_osm_ios_new_2.png)

</TabItem>

</Tabs>

Op de kaart kunt u routes selecteren voor [wandelen, fietsen, ski, MTB, dirt bike, reizen en meer](#type-of-routes). Waar beschikbaar, tonen wandelroutes hun wegmarkeringen met behulp van [OSMC-symbolen](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol); andere routetypes gebruiken hun eigen markeringen.

Wanneer u op een **routesymbool** op de kaart tikt:

- Een **lijst van de nabijgelegen routes** op die locatie wordt weergegeven.
- Na het selecteren van een route uit de lijst, wordt een [contextmenu](../map/tracks/track-context-menu.md) voor die route geopend, met gedetailleerde informatie en beschikbare acties.

In het **contextmenu** kunt u:

- [Aanvullende informatie](#route-info-and-elevation) over de geselecteerde route bekijken.
- [De route opslaan](#save-as-a-track) als een **GPX-track**.
- [Navigatie starten](#start-navigation) langs de route.


### Route-info en hoogte {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>

De volgende informatie is zichtbaar in het contextmenu:

- **Route-info**: Routenaam, OSM-link (OSM-bewerkingsplugin vereist), Type, Beschrijving, Afstand, Richting, Stijging/Daling, Hoogtebereik, Netwerk, Operator, Staat, Kleur, Rondrit, Start-/Eindpunten, en meer.
- **Algemeen**: Grootte, Locatie, Gemaakt op.
- **Aanvullende info**. Toont het type activiteit.
- actieknoppen: [Opslaan als](#save-as-a-track) en [Navigatie starten](#start-navigation).
- [Hoogte-informatie](../navigation/setup/route-details.md#elevation-info). Toont informatie over de hoogtegegevens op de route.
- [Track analyseren op kaart](../map/tracks/index.md#analyze-track-on-map). Toont een gedetailleerde analyse van trackgegevens met behulp van grafieken en kaarten.

Om de grafiek van de hoogte, helling of hoogtedetails voor een geselecteerde route te bekijken, tikt u eenvoudig op een van de volgende waarden in het contextmenu: **Afstand**, **Stijging**, **Daling** of **Hoogte**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_2.png)

</TabItem>

</Tabs>  

### Opslaan als track {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  


Om de route op te slaan als een *GPX-bestand*, tikt u op de knop **Opslaan (Downloaden)** onder het [Infopaneel](../map/tracks/track-context-menu.md#info-panel). Dit opent het knoppenpaneel [Snelle acties](../map/tracks/track-context-menu.md#track-actions) waar u toegang heeft tot trackacties zoals het wijzigen van [Uiterlijk](./tracks/appearance.md), [Navigatie](../navigation/setup/route-navigation.md), of het bewerken van [Route plannen](../plan-route/create-route.md).


### Navigatie starten {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>  

Om de navigatie langs de geselecteerde OSM-route te starten, tikt u op de knop **Navigatie starten** in het [**Infopaneel**](../map/tracks/track-context-menu.md#info-panel).

Dit start de modus [**Navigatie op basis van track**](../navigation/setup/gpx-navigation.md), waardoor u de route kunt volgen met gesproken aanwijzingen en navigatiefuncties.



### Snelle acties {#quick-actions}

U kunt aanpassen of routes in- of uitgeschakeld zijn met de widget [Snelle actie](../widgets/quick-action.md#configure-map).


## Routes zoeken {#routes-search}

Vind routes met de [Zoekfunctie](../search/index.md) op naam of door "Routes" te selecteren in de [sectie Categorieën](../search/search-poi.md#).

Om te zoeken, ga naar het menu *<Translate android="true" ids="search_button"/>* of *<Translate android="true" ids="search_button,search_categories"/>* en voer uw activiteit in.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_ios.png)

</TabItem>

</Tabs>  

Navigeer naar *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* om de gewenste routes te vinden. Routes bevatten naam, activiteitstype, lengte, locatie en afstand tot het dichtstbijzijnde punt. Op Android worden ook hoogtemetrics zoals stijging en daling weergegeven waar beschikbaar. Kleine hoogteveranderingen (minder dan 10 m) worden verborgen om de lijst overzichtelijk te houden. Alle waarden respecteren de geselecteerde afstands- en hoogte-eenheden van de app.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_1_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

Gebruik de filterknop (rechterbovenhoek) om alleen de gewenste routes weer te geven.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_2_new.png) ![Routes on the ground](@site/static/img/map/route_search_3_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_2_ios.png) ![Routes on the ground](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>


## Gerelateerde artikelen {#related-articles}

- [Kaartcontextmenu](./map-context-menu.md)
- [Kaart configureren](./configure-map-menu.md)
- [Tracks](./tracks/index.md)
- [Contextmenu voor tracks](./tracks/track-context-menu.md)
- [Openbaar vervoer](./public-transport.md)
- [Uiterlijk van de navigatieroutelijn](../navigation/guidance/map-during-navigation.md#route-line-appearance)