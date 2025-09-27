---
source-hash: ad9c1155352c7c8fc6705861acfb7f006ba101d59528a256c0205ba34b62fd80
sidebar_position: 11
title:  Online routebepaling
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

Online routebepaling is een krachtig hulpmiddel dat gebruikers kan helpen tijd te besparen en efficiënter te navigeren. Het is echter belangrijk op te merken dat online routebepaling afhankelijk is van een internetverbinding en mogelijk niet beschikbaar is in gebieden met een slechte netwerkdekking. Bovendien moeten gebruikers altijd voorzichtig zijn en hun eigen oordeel gebruiken bij het volgen van een route die door een online routebepalingsdienst wordt voorgesteld.

![Online routebepaling Android](@site/static/img/navigation/routing/online_routing_andr.png)

## Routeparameters - Online routebepaling {#route-parameters---online-routing}

*Online routebepaling* kan worden ingeschakeld in de sectie [Navigatietype](../guidance/navigation-settings.md#overview) van de Navigatie-instellingen van het geselecteerde *Profiel*. In OsmAnd zijn er twee vooraf gedefinieerde *online routebepalingsengines* ([ZLZK](https://zlzk.biz/) en [OSM DE](https://routing.openstreetmap.de)), die drie *Online routebepalingstypes* bieden: *Fiets, Auto en Te voet*.

:::note
Online routebepalingstypes zijn ontworpen voor de profielen *Rijden, Fietsen en Wandelen*, hoewel ze ook kunnen worden gebruikt met andere OsmAnd-profielen (Vrachtwagen, Motor, Skiën, Paardrijden). Ze worden geleverd "zoals ze zijn", dus u kunt ze niet aanpassen aan uw behoeften met behulp van verschillende navigatieopties.
:::

### Aangepaste online routebepaling {#custom-online-routing}

Naast de vooraf ingestelde online routebepalingstypes, kunt u andere online routebepalingsmechanismen configureren.
Tik op de knop **+ Online routebepalingsengine toevoegen** en kies een van de voorgestelde online routebepalingstypes ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Openrouteservice](https://openrouteservice.org)). Selecteer het juiste voertuig en tik op *test routebepaling* voordat u uw wijzigingen opslaat.

![Aangepaste online routebepaling Android](@site/static/img/navigation/routing/custom_online_routing_andr_1.png) ![Aangepaste online routebepaling Android](@site/static/img/navigation/routing/custom_online_routing_andr_2.png)

:::info
U kunt meer lezen over de verschillen tussen online routebepalingsengines op [OSMwiki](https://wiki.openstreetmap.org/wiki/Routing/online_routers).
:::

### Aangepaste online GPX-routebepaling {#custom-online-gpx-routing}

Een online server bouwt een route op basis van uw startpunt en bestemming. Na het ontvangen van de track van de server, creëert OsmAnd een route met behulp van de functie *[Aan de wegen koppelen](../setup/gpx-navigation.md#attach-to-the-roads)*. Alle benodigde route-informatie wordt dus uit onze offline kaarten gehaald en er wordt een nauwkeurigere begeleiding langs de route geboden.

![Aangepaste GPX-routebepaling Android 1](@site/static/img/navigation/routing/online_routing_gpx_1.png) ![Aangepaste GPX-routebepaling Android 1](@site/static/img/navigation/routing/online_routing_gpx_2.png)

## Instelling online routebepaling {#online-routing-setting}

Wanneer online routebepaling is geselecteerd voor navigatie, verschijnt er een extra optie in de instellingen.

![Instellingen Online routebepaling Android](@site/static/img/navigation/routing/settings_online_routing_1.png)

- *<Translate android="true" ids="calculate_osmand_route_without_internet"/>* - Maakt het mogelijk om offline routebepaling van OsmAnd te gebruiken wanneer online routebepaling is geselecteerd in de navigatie-instellingen. Deze optie kan helpen als een route al online is berekend, maar er vervolgens een afwijking van de route was en tegelijkertijd de internetverbinding werd verbroken. In dit geval wordt offline routebepaling gebruikt om terug te keren naar de route die eerder online is berekend.