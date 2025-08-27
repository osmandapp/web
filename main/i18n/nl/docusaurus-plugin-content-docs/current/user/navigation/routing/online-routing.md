---
source-hash: 4f96a8e9fe2039b52000ce52f1a94177338192fe1d90ceb5161a41d19e94cfea
sidebar_position: 11
title: Online routering
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

<InfoAndroidOnly />

Online routering is een krachtig hulpmiddel dat gebruikers kan helpen tijd te besparen en efficiënter te navigeren. Het is echter belangrijk op te merken dat online routering afhankelijk is van internetconnectiviteit en mogelijk niet beschikbaar is in gebieden met slechte netwerkdekking. Bovendien moeten gebruikers altijd voorzichtig zijn en hun oordeel gebruiken bij het volgen van een route die wordt voorgesteld door een online routeringsdienst.

![Online routering Android](@site/static/img/navigation/routing/online_routing_andr.png)


## Routeparameters - Online routering {#route-parameters---online-routing}

*Online routering* kan worden ingeschakeld in de sectie [Navigatietype](../guidance/navigation-settings.md#overview) van de Navigatie-instellingen van het geselecteerde *Profiel*. In OsmAnd zijn er twee vooraf gedefinieerde *online routeringsengines* ([ZLZK](https://zlzk.biz/) en [OSM DE](https://routing.openstreetmap.de)), die drie *Online routeringstypen* bieden: *Fiets, Auto en Te voet*.

:::note
Online routeringstypen zijn ontworpen voor *Rijden, Fietsen en Wandelen* profielen, hoewel ze ook kunnen worden gebruikt met andere OsmAnd profielen (Vrachtwagen, Motor, Skiën, Paardrijden). Ze worden "as is" geleverd, dus u kunt ze niet aanpassen aan uw behoeften met behulp van verschillende navigatieopties.
:::

### Aangepaste online routering {#custom-online-routing}

Naast de vooraf ingestelde online routeringstypen kunt u andere online routeringsmechanismen configureren.
Tik op de knop **+ Online routeringsengine toevoegen** en kies een van de voorgestelde online routeringstypen ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Openrouteservice](https://openrouteservice.org)). Selecteer het juiste voertuig en tik op *routering testen* voordat u uw wijzigingen opslaat.

![Aangepaste online routering Android](@site/static/img/navigation/routing/custom_online_routing_andr_1.png) ![Aangepaste online routering Android](@site/static/img/navigation/routing/custom_online_routing_andr_2.png)

:::info
U kunt meer lezen over de verschillen tussen online routeringsengines in [OSMwiki](https://wiki.openstreetmap.org/wiki/Routing/online_routers).
:::

### Aangepaste online GPX-routering {#custom-online-gpx-routing}

De online server bouwt een route met behulp van uw startpunt en bestemming. Na ontvangst van de track van de server, maakt OsmAnd een route met behulp van de functie *[Aan wegen koppelen](../setup/gpx-navigation.md#attach-to-the-roads)*. Alle benodigde routeringsinformatie wordt dus uit onze offline kaarten gehaald en er wordt een nauwkeurigere begeleiding langs de route geboden.

![Aangepaste GPX-routering Android 1](@site/static/img/navigation/routing/online_routing_gpx_1.png) ![Aangepaste GPX-routering Android 1](@site/static/img/navigation/routing/online_routing_gpx_2.png)


## Online routeringsinstelling {#online-routing-setting}

Wanneer online routering is geselecteerd voor navigatie, verschijnt er een extra optie in de instellingen.

![Instellingen Online routering Android](@site/static/img/navigation/routing/settings_online_routing_1.png)

- *<Translate android="true" ids="calculate_osmand_route_without_internet"/>* - Hiermee kunt u OsmAnd offline routering gebruiken, wanneer online routering is geselecteerd in de navigatie-instellingen. Deze optie kan helpen als een route al online is opgebouwd, maar er vervolgens een afwijking van de route was en tegelijkertijd de internetverbinding verloren ging. In dit geval wordt offline routering gebruikt om terug te keren naar de route, die eerder online is berekend.

> *Laatst bijgewerkt: juni 2024*