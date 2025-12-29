---
source-hash: 4d9f5039ab11085fb01ba9a87295b0709bf9134ac4123b410ba74a735353f314
sidebar_position: 5
title:  Routering openbaar vervoer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Overzicht {#overview}

Navigatie met het openbaar vervoer in de OsmAnd-app stelt u in staat om routes uit te stippelen met het openbaar vervoer, wat u zeker zal helpen om sneller door de "betonnen jungle" te navigeren.

Gegevens over routes van het openbaar vervoer zijn afkomstig van het [OpenStreetMap](http://openstreetmap.org/) project. OsmAnd gebruikt het [PTv2-schema](https://wiki.openstreetmap.org/wiki/Public_transport) voor navigatie. OsmAnd ondersteunt het volgen van OpenStreetMap-routes voor navigatie met *bus*, *trolleybus*, *deeltaxi*, *kabelspoorweg*, *metro*, *lightrail*, *monorail*, *trein*, *tram*, *veerboot*. De standaardsnelheid voor elk type voertuig is geconfigureerd in [Routing xml](../../../technical/build-osmand/routing.md) en wordt gebruikt om de snelste routes te vinden.

:::note
Routering met het openbaar vervoer bevindt zich in de testfase. Voorlopig kunt u uw route uitstippelen en bekijken zonder de volledige navigatiefunctie.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie openbaar vervoer Android](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigatie openbaar vervoer iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## Hoe te gebruiken {#how-to-use}

Om te beginnen met navigeren door de stad met het openbaar vervoer, gebruikt u [de navigatieknop](../../widgets/map-buttons.md#directions) op het kaartscherm of selecteert u de navigatieoptie in het *Hoofdmenu*.  

**1.** U moet het *navigatieprofiel Openbaar vervoer*, het startpunt en de bestemming kiezen.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie openbaar vervoer routes Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigatie openbaar vervoer routes iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** OsmAnd biedt routeopties met wandeltijden en routes met het openbaar vervoer met route-informatie: tijd, afstand, overstappen en openbare routes. U moet door het navigatiescherm scrollen om de gewenste optie te selecteren.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie openbaar vervoer route Android](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigatie openbaar vervoer route iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** U kunt alle mogelijke routesuggesties op de kaart bekijken met de knop *Toon op kaart*. Veeg door de schermen om de volgende routeoptie te bekijken.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie openbaar vervoer Details Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigatie openbaar vervoer Details iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** Tik op de knop "Details" om een beschrijving van de geselecteerde route met alle haltes en overstappen te openen.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie openbaar vervoer haltes lijst Android](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigatie openbaar vervoer haltes lijst iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>

## Typen openbaar vervoer {#public-transport-types}

U kunt goed samengestelde routes voor het openbaar vervoer doorzoeken volgens uw voorkeuren en kiezen om:

- Bussen (en trolleybussen) te vermijden
- Metro's te vermijden
- Treinen te vermijden
- Trams te vermijden
- Veerboten te vermijden
- Deeltaxi's te vermijden

Standaard zoekt OsmAnd naar routes die alle ondersteunde typen openbaar vervoer omvatten.

## Alternatieve routes {#alternative-routes}

Alternatieve routes zijn secties van een route die worden bediend door verschillende vervoersdiensten en dezelfde weg en haltes delen.

Verschillende vervoersdiensten kunnen verschillende routenummers (refs) gebruiken of zelfs verschillende typen vervoer.

De gebruikersinterface toont alternatieve routes als gekleurde badges met hun refs.

## Prestaties en resultaten {#performance-and-results}

**Openbaar vervoer profiel -> Instellingen -> Navigatie-instellingen -> Routeparameters**

1. **Maximum aantal vervoerswisselingen**.

De prestaties en het geheugengebruik van de router voor openbaar vervoer hangen af van de zoekdiepte.

De belangrijkste parameter die deze diepte beïnvloedt, is het **Maximum aantal vervoerswisselingen**.

We gebruiken **2** als standaardwaarde, wat optimaal lijkt voor moderne netwerken voor openbaar vervoer.

Als u te maken krijgt met lage prestaties of geheugenfouten, probeer dan deze waarde te verlagen.

Als u in een kleine stad bent of korte routes aflegt, kan een waarde van **1** beter werken.
<!--
There are two more parameters that help you choose the best routes.

2. **Display N best routes** (specify the number of best routes to display)

By default, OsmAnd displays the **10** best routes (including alternative routes).

You can decrease or increase this limit, or even display all routes.

Note: displaying unlimited routes might slow down your device.

Possible values: 0 (show all), 5, 10 (default), 15, 100
-->

## Gegevens en richtlijnen {#data-and-guideline}

OsmAnd gebruikt een nieuw schema voor openbaar vervoer, ook wel Public Transport Version 2 (PTv2) genoemd, voor het OsmAnd-navigatiealgoritme voor openbaar vervoer.

- U kunt uw openbaar vervoer [hier](http://tools.geofabrik.de/osmi/) controleren.
- Een gids voor het bouwen of aanpassen van routes voor het openbaar vervoer is beschikbaar op onze [blog](https://osmand.net/blog/guideline-pt).
- De presentatie [2019: Public Transport Navigation using OpenStreetMap by OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).