---
source-hash: 69c9152b46bd602e4e14ecd9e4b32486e697cb14ccb9d69f550affbb8ed29cd6
sidebar_position: 8
title:  Bootnavigatie
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

Bootnavigatie kan een waardevol hulpmiddel zijn voor iedereen die van varen of zeilen op kanalen, rivieren of vaarwegen houdt. Vanwege het ontbreken van de meeste vaarwegen in OpenStreetMap-gegevens, wordt bootnavigatie *niet aanbevolen* voor **navigatie op open water**. Het wordt aangeraden om in plaats daarvan **[Direct naar punt](#direct-to-point-routing-for-boat)** te gebruiken. Met dieptecontourlijnen ingeschakeld, kan het u helpen veilig op het water te blijven door gevaren zoals ondiep water, rotsen of andere obstakels te vermijden.  
De OsmAnd-bootnavigatie-engine houdt ook rekening met de kenmerken van de waterwegen en de boten zelf.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Scherm bootnavigatie Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Scherm bootnavigatie iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)  

</TabItem>

</Tabs>  

## Routeparameters - Boot {#route-parameters---boat}

:::note
Standaard is het *Bootprofiel* gedeactiveerd. Om dit profiel voor navigatie te gebruiken, moet u het inschakelen in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Bootnavigatie kan naar uw behoeften worden geconfigureerd in de [Routeparameters sectie](../../navigation/guidance/navigation-settings.md#route-parameters) van de Navigatie-instellingen.  

Normaal gesproken wordt *Bootnavigatie* gebruikt met het bootprofiel (de laatste die samen met de [Nautische plug-in](../../plugins/nautical-charts.md) is ingeschakeld). Het is echter ook mogelijk om bootnavigatie met andere profielen te gebruiken, en verschillende [navigatietypes](#other-routing-types-for-boat) kunnen ook in het bootprofiel worden gebruikt.  


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Instellingen bootnavigatie Android](@site/static/img/navigation/routing/boat_route_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Instellingen bootnavigatie iOS](@site/static/img/navigation/routing/boat_route_ios.png)  

</TabItem>

</Tabs>

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Hiermee kunt u beken en afwateringskanalen gebruiken voor bootnavigatie. Het inschakelen van deze optie kan handig zijn voor kleine boten zoals kano's, kajaks, vlotten en roeiboten. |  [Beken](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) zijn natuurlijk gevormde waterwegen die te smal zijn om een rivier te worden genoemd. [Afwateringskanalen](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) zijn kunstmatige waterwegen, meestal bekleed met beton of iets dergelijks, die worden gebruikt om overtollig water zoals regenwater of grijswater af te voeren.|
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* |  Door deze optie in te schakelen, kunt u intermitterende waterwegen gebruiken om per boot te navigeren.   | De tag [Intermittent](https://wiki.openstreetmap.org/wiki/Key:intermittent) wordt gebruikt om aan te geven dat een waterweg niet permanent water bevat.  |
| *Veerboten toestaan* | Hiermee wordt navigatie via veerbootroutes ingeschakeld. | Gebruikt `route=ferry` waar aanwezig in OSM. Er zijn geen nieuwe kaarten vereist. |

:::note Waternavigatie en beperkingen

1. Het bootprofiel is ontworpen voor navigatie langs rivieren, meren en andere waterwegen. Het ondersteunt OSM-tags zoals:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, etc.

2. Het bootprofiel ondersteunt ook **veerbootroutes (`route=ferry`)** wanneer de optie **Veerboten toestaan** is ingeschakeld. Dit betekent dat als veerbootroutes op de kaart aanwezig zijn, ze worden gebruikt bij het berekenen van bootroutes.

3. Als er geen geschikte waterwegen of veerbootroutes zijn gemapt in OSM, kan de navigatie-engine mogelijk geen juiste route construeren. In dat geval kunt u de tool Route plannen gebruiken en waypoints handmatig plaatsen.

:::

## Andere navigatietypes voor de boot {#other-routing-types-for-boat}

Het [Bootnavigatie](#route-parameters---boat)-type is een standaard navigatiealgoritme voor het Bootprofiel. U kunt echter ook een ander navigatietype kiezen dat ook geschikt is voor bootnavigatie:  

 - [Direct-naar-punt navigatie voor de boot](./boat-navigation.md#direct-to-point-routing-for-boat)
 - [Rechte lijn navigatie voor de boot](./boat-navigation.md#straight-line-routing-for-boat)

Het is belangrijk op te merken dat de navigatietypes *Direct-naar-punt* en *Rechte lijn* alleen mogen worden gebruikt in open water waar geen obstakels of gevaren voor de navigatie zijn. Als u navigeert in een waterweg met een specifiek kanaal of route, moet u het bootnavigatietype in OsmAnd gebruiken, dat u door de juiste navigatiekanalen leidt en ondiepe gebieden of andere gevaren vermijdt.  

Deze navigatietypes voor het bootprofiel kunnen worden geactiveerd via het volgende pad: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> of een ander) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.


### Direct-naar-punt navigatie voor de boot {#direct-to-point-routing-for-boat}

:::note
Bij gebruik van de navigatietypes Direct-naar-punt en Boot heeft u [Dieptecontourgegevens](../../plugins/nautical-charts.md#nautical-map-style) nodig, die kunnen worden ingeschakeld en ingesteld in *Kaart configureren*.
:::

Het [Direct-naar-punt navigatietype](./direct-to-point-routing.md) kan worden gebruikt met het bootprofiel wanneer u uw boot in open water wilt navigeren zonder een specifieke route of waterweg te volgen. Met dit navigatietype kunt u een bestemmingspunt instellen en OsmAnd berekent een direct pad naar dat punt vanaf uw huidige locatie. Dit type navigatie houdt geen rekening met de kenmerken van uw boot, zoals minimum- en maximumsnelheden, hoogte en breedte. Uw route wordt niet herberekend in geval van afwijking.

![Direct-naar-punt navigatietype Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)


### Rechte lijn navigatie voor de boot {#straight-line-routing-for-boat}

Het [Rechte lijn navigatietype](./straight-line-routing) kan worden gebruikt met het bootprofiel wanneer u uw boot in open water wilt navigeren, maar liever een rechte lijn volgt dan een gebogen route naar uw bestemmingspunt. Dit kan bijvoorbeeld handig zijn bij het navigeren naar een ver punt dat aan de horizon zichtbaar is.

![Rechte lijn navigatietype Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)