---
source-hash: 97cbadd50fbc4e3456c25be84373804b63617bf768394b167c130bfa44b414f0
sidebar_position: 12
title: Soorten routes
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

Routes vertegenwoordigen verschillende buitenactiviteiten met behulp van gegevens van [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Tikken op **het schildpictogram met een routenummer of routevlag** op de kaart opent een contextmenu dat aanvullende informatie over de route biedt en het gebruik ervan als onderdeel van navigatie mogelijk maakt.

U kunt de filtering van sommige routetypes configureren in het menu [Kaart configureren](../../map/configure-map-menu.md).

## Fiets {#cycle}

[Fietsroutes](https://wiki.openstreetmap.org/wiki/Cycle_routes) zijn aanwezig in drie typen: *lokaal* (`lcn`), *regionaal* (`rcn`), *nationaal* (`ncn`), *internationaal* (`icn`). Fietsroutes kunnen ook deel uitmaken van [Knooppuntnetwerken](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). U kunt kiezen hoe kleur aan de routesegmenten wordt toegekend:

- ***<Translate android="true" ids="layer_route"/>***.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

Meer informatie vindt u in het artikel [Kaartlegenda](../../map-legend/index.md).

## Mountainbike {#mountain-bike}

MTB-routes hebben een specifieke mapping in [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) en kunnen apart van fietsroutes worden geselecteerd.

- ***<Translate android="true" ids="mtb_scale"/>***. Toont paden volgens de MTB-schaal. Meer informatie is te vinden in het artikel [Kaartlegenda](../../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***. Toont MTB-paden volgens de International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Meer informatie is te vinden in het artikel [Kaartlegenda](../../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

## Wandelen / Hiken {#hiking--walking}

[Wandelroutes](https://wiki.openstreetmap.org/wiki/Walking_Routes) zijn aanwezig in drie typen: *lokaal* (`lwn`), *regionaal* (`rwn`), *nationaal* (`nwn`), *internationaal* (`iwn`). Wandelroutes kunnen ook deel uitmaken van [Knooppuntnetwerken](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd maakt geen onderscheid tussen wandel- en hike-routes en combineert ze in 1 groep. U kunt kiezen hoe kleur aan de routesegmenten wordt toegekend:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***. Kleurt routes volgens hun individuele [lokale kleur](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (indien beschikbaar in OpenStreetMap) en het toeristische schildsymbool.  
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***. Kleurt op basis van [netwerkaffiliatie](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***. Kleurt routes volgens het type [knooppuntnetwerk](https://wiki.openstreetmap.org/wiki/Node_Networks) (internationaal, regionaal of lokaal).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)

## Dirtbikeroutes {#dirt-bike-trails}

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)

De functie **Dirtbikeroutes** maakt het mogelijk om dirtbike-specifieke routes op de kaart weer te geven op basis van de tag `dirtbike:scale`. Deze schaal markeert paden die geschikt zijn voor dirt biking, met een gekleurde overlay die moeilijkheidsgraden aangeeft ([Kaartlegenda](../../map-legend/osmand.md#routes)).  

U kunt deze functie activeren via *Menu → Kaart configureren → Routes → Dirtbikeroutes*. Het systeem werkt vergelijkbaar met de MTB-schaal en biedt een visuele weergave van routes die zijn afgestemd op dirt biking — meer informatie over de tag [`dirtbike`](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale) vindt u hier.

## Klimroutes {#climbing-routes}

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd ondersteunt *klimgebieden* (`climbing=area`) en *klimrotsen* (`climbing=crag`), zodat u [rotsklimlocaties](https://wiki.openstreetmap.org/wiki/Climbing) rechtstreeks op de kaart kunt vinden.

- **Klimgebieden** vertegenwoordigen **grotere zones** waar meerdere klimroutes aanwezig zijn.

- **Klimrotsen** verwijzen naar **specifieke rotsformaties** of wanden die geschikt zijn voor klimmen.

- Deze locaties bevatten **gedetailleerde kenmerken** zoals:

    - *Klimmoeilijkheidsgraad* (bijv. UIAA, Frans, YDS).
    - *Rotssoort* (bijv. kalksteen, graniet).
    - *Routelengte* (in meters).
    - *Klimkwaliteit* (vast, los, gemengd).
    - *Beschikbaarheid van topboek*.

Om klimlocaties op de kaart in te schakelen, gaat u naar: *Menu → Kaart configureren → Routes → Klimroutes*.

## Moeilijkheidsgraad wandelpaden {#hiking-trails-difficulty-grade}

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

Sommige wegsegmenten kunnen deel uitmaken van meerdere routes, maar kunnen individueel worden gekleurd om de moeilijkheidsgraad van het segment in bergachtige gebieden weer te geven. Momenteel ondersteunt OsmAnd Italiaanse en Zwitserse classificaties, elk met een specifieke lijst van uitrustingsvereisten om toegang te krijgen tot dit segment.  

1. [SAC-schaal](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [CAI-schaal](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)

## Skipistes en -routes {#ski-slopes-and-routes}

- _Skipistes en -routes_ in de kaartstijl _Winter en ski_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

- _Skipistes en -routes_ in de standaardkaartstijl van _OsmAnd_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes_1.png)

Skipistes en -routes vormen een specifieke groep [routes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) in OpenStreetMap. Deze routes kunnen doorgaans worden gebruikt met de kaartstijl [Winter en ski](../../map/map-styles.md#winter-and-ski) waarbij alle zichtbare [Pistes](https://wiki.openstreetmap.org/wiki/Pistes) worden weergegeven. Als een andere kaartstijl actief is, wordt een banner getoond met de suggestie om over te schakelen naar [Winter en ski](../../map/map-styles.md#winter-and-ski) (*alleen Android*) en worden alleen pistes weergegeven. Tik op ***Overschakelen*** om de kaartstijl te wijzigen zonder het huidige scherm te verlaten, of op ***Later*** om de banner te verbergen.

## Sneeuwscooterpaden {#snowmobile-trails}

![Map routes - snowmobile](@site/static/img/map/snowmobile_trail_new.png)

Sneeuwscooterpaden worden in [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dsnowmobile) gemapt als `route=snowmobile`. Ze worden gebruikt voor winterrecreatie en om afgelegen gebieden tijdens het sneeuwseizoen te verbinden. In OsmAnd zijn sneeuwscooterpaden aanklikbaar, zie de sectie [Acties met routes](./index.md#actions-with-routes).

## Paardrijroutes {#horse-routes}

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

[Paardrijroutes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) worden weergegeven als met kleur aangegeven routes met symbolen voor paardrijden.

## Wildwatervaart {#whitewater-sports}

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

[Wildwaterroutes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) worden samen met toegangspictogrammen, gevarenzones en nabijgelegen stroomversnellingen weergegeven voor [wildwatertoerisme](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map). Zie [Wildwaterfuncties](../../map-legend/osmand.md#whitewater-features) in de Kaartlegenda voor moeilijkheidsgraden van stroomversnellingen, riviersecties en gerelateerde symbolen.

## Hardlopen {#running}

![Fitness routes](@site/static/img/map/fitness_1.png)

[Hardlooproutes](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) in OpenStreetMap worden gebruikt voor benoemde, genummerde of anderszins gemarkeerde hardlooproutes, voornamelijk voor atletiek.

## Fitnesstrails {#fitness-trails}

![Fitness routes](@site/static/img/map/fitness_route.png)

Een [fitnesstrail](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) is een pad of route uitgerust met obstakels of stations langs de lengte om het menselijk lichaam te trainen en de gezondheid te verbeteren.

## Reizen {#travel}

<InfoAndroidOnly />

![Travel routes](@site/static/img/map/travel_route_2.png)  ![Travel routes](@site/static/img/map/travel_routes.png)

Reisroutes maken deel uit van aangepaste [Reisgids](../../plan-route/travel-guides.md)-bestanden (`travel.obf`), die kunnen worden gegenereerd uit de [gebruikersroutes](https://osmand.net/blog/routes#generated-travel-routes) of deel kunnen uitmaken van aanvullende [plug-ins](../../plugins/index.md).  

U kunt de weergave van bepaalde ***Reisboeken*** en typen ***tracks*** aanpassen, tracks als punten weergeven of ***Puntgroepen*** (bijvoorbeeld voor Wikivoyage-reisboeken). Meer informatie over [Reisgidsen](../../plan-route/travel-guides.md).

## Gerelateerde artikelen {#related-articles}

- [Kaart configureren](../../map/configure-map-menu.md)
- [Kaartlegenda](../../map-legend/osmand.md)
- [Routes](./index.md)