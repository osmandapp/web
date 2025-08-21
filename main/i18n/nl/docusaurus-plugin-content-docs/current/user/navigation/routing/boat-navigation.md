---
source-hash: 89f0bd9a9dfbfdb2158d837c90031efd8ceeca297a50647bb295c32585e91830
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

Bootnavigatie kan een waardevol hulpmiddel zijn voor iedereen die graag vaart of zeilt via kanalen, rivieren of vaarwegen. Vanwege het gebrek aan de meeste vaarwegen in OpenStreetMap-gegevens, wordt bootnavigatie *niet aanbevolen* voor **navigatie op open water**. In plaats daarvan wordt aangeraden om **[Direct naar punt](#direct-naar-punt-navigatie-voor-boot)** te gebruiken. Met ingeschakelde dieptecontourlijnen kan het u helpen veilig op het water te blijven door gevaren zoals ondiep water, rotsen of andere obstakels te vermijden.
De OsmAnd bootnavigatie-engine houdt ook rekening met de kenmerken van de waterwegen en de boot zelf.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bootnavigatiescherm Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Bootnavigatiescherm iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)

</TabItem>

</Tabs>

## Routeparameters - Boot {#route-parameters---boat}

:::note
Standaard is het *Bootprofiel* gedeactiveerd. Om dit profiel voor navigatie te gebruiken, moet u het inschakelen in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Bootnavigatie kan worden geconfigureerd volgens uw behoeften in het [Routeparameters-gedeelte](../../navigation/guidance/navigation-settings.md#route-parameters) van de Navigatie-instellingen.

Doorgaans wordt *Bootnavigatie* gebruikt met het bootprofiel (de laatste die is ingeschakeld samen met de [Nautische plug-in](../../plugins/nautical-charts.md)). Het is echter ook mogelijk om bootnavigatie met andere profielen te gebruiken, en verschillende [navigatietypen](#andere-navigatietypen-voor-boot) kunnen ook in het bootprofiel worden gebruikt.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Bootnavigatie-instellingen Android](@site/static/img/navigation/routing/boat_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Bootnavigatie-instellingen iOS](@site/static/img/navigation/routing/boat_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Hiermee kunt u beken en afvoeren gebruiken voor bootnavigatie. Het inschakelen van deze optie kan nuttig zijn voor kleine boten zoals kano's, kajaks, vlotten, roeiboten. | [Beken](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) zijn natuurlijk gevormde waterwegen die te smal zijn om een rivier te worden genoemd. [Afvoeren](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) zijn kunstmatige waterwegen, meestal bekleed met beton of iets dergelijks, gebruikt om overtollig water zoals regenwater of grijs water af te voeren. |
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* | Het inschakelen van deze optie stelt u in staat om intermitterende waterwegen te gebruiken om met de boot te navigeren. | Tag [Intermittent](https://wiki.openstreetmap.org/wiki/Key:intermittent) wordt gebruikt om aan te geven dat een waterweg niet permanent water bevat. |


:::note Waternavigatie en beperking

1. Het bootprofiel is ontworpen voor navigatie langs rivieren, meren en andere waterwegen. Het ondersteunt OSM-tags zoals:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, enz.

2. Het bootprofiel **ondersteunt geen veerbootroutes (`route=ferry`)**. Dit betekent dat veerbootroutes, zelfs als ze op de kaart aanwezig zijn, **niet worden gebruikt** bij het berekenen van bootroutes.

3. Om handmatig een veerbootlijn te volgen:

    - Gebruik de tool [Route plannen](../../plan-route/create-route.md) en plaats handmatig waypoints.
    - Gebruik het Autoprofiel, dat veerbootroutes ondersteunt.

:::

## Andere navigatietypen voor boot {#andere-navigatietypen-voor-boot}

Het [bootnavigatie](#route-parameters---boat) type is een standaard navigatiealgoritme voor het bootprofiel. Hoewel u een ander navigatietype kunt kiezen, dat ook geschikt is voor bootnavigatie:

 - [Direct-naar-punt navigatie voor boot](./boat-navigation.md#direct-naar-punt-navigatie-voor-boot)
 - [Rechte lijn navigatie voor boot](./boat-navigation.md#rechte-lijn-navigatie-voor-boot)

Het is belangrijk op te merken dat de navigatietypen *Direct-naar-punt* en *Rechte lijn* alleen moeten worden gebruikt in open water waar geen obstakels of gevaren voor de navigatie zijn. Als u navigeert in een waterweg met een specifiek kanaal of een specifieke route, moet u het bootnavigatietype in OsmAnd gebruiken, dat u door de juiste navigatiekanalen leidt en ondiepe gebieden of andere gevaren vermijdt.

Deze navigatietypen voor het bootprofiel kunnen worden geactiveerd via het volgende pad: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> of een andere) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.


### Direct-naar-punt navigatie voor boot {#direct-naar-punt-navigatie-voor-boot}

:::note
Bij gebruik van Direct-naar-punt en Bootnavigatietypen heeft u [Dieptecontourgegevens](../../plugins/nautical-charts.md#nautical-map-style) nodig, die kunnen worden ingeschakeld en ingesteld in *Kaart configureren*.
:::

Het [Direct-naar-punt navigatietype](./direct-to-point-routing.md) kan worden gebruikt met het bootprofiel wanneer u uw boot in open water wilt navigeren zonder een specifieke route of waterweg te volgen. Dit navigatietype stelt u in staat om een bestemmingspunt in te stellen en OsmAnd berekent een direct pad naar dat punt vanaf uw huidige locatie. Dit type navigatie houdt geen rekening met de kenmerken van uw boot, zoals minimale en maximale snelheden, hoogte en breedte. Uw route wordt niet opnieuw berekend in geval van afwijking.

![Direct-naar-punt navigatietype Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)


### Rechte lijn navigatie voor boot {#rechte-lijn-navigatie-voor-boot}

Het [Rechte lijn navigatietype](./straight-line-routing) kan worden gebruikt met het bootprofiel wanneer u uw boot in open water wilt navigeren, maar de voorkeur geeft aan een rechte lijn in plaats van een gebogen route naar uw bestemmingspunt. Dit kan handig zijn bij het navigeren naar een ver punt dat aan de horizon zichtbaar is, bijvoorbeeld.

![Rechte lijn navigatietype Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)


## Overige navigatie-instellingen {#other-routing-settings}

- Het navigatiealgoritme kan ook rekening houden met tijdelijke beperkingen die in OpenStreetMap zijn gespecificeerd. Dit kan worden gedaan met de optie *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Houd er rekening mee dat in sommige gevallen informatie van OSM verouderd kan zijn.

- In het [*Route herberekenen gedeelte*](../../navigation/guidance/navigation-settings.md#recalculate-route) van de *Routeparameters* kunt u opties voor routeherberekening inschakelen en aanpassen.

- In het [*Ontwikkelingsgedeelte*](../guidance/navigation-settings.md#development-settings) van de *Routeparameters* kunt u nieuwe navigatiefuncties uitproberen die momenteel in de testfase zijn. Houd er rekening mee dat deze instellingen alleen beschikbaar zijn wanneer de [OsmAnd ontwikkelingsplug-in](../../plugins/development.md) is ingeschakeld.

- De instelling *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in de *iOS*-versie van OsmAnd bevindt zich in *Navigatie-instellingen → Routeparameters* (voor *Android*, in *Voertuigparameters → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Deze instelling wordt gebruikt op onbekende wegen zonder snelheidsbeperkingen. Dit is meestal het geval bij het navigeren van een track of online route. Het moet worden ingesteld volgens de parameters van uw voertuig.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Het correct configureren van de instellingen helpt u problemen bij het maken van een route te voorkomen. U kunt de meest geschikte route selecteren, afhankelijk van het type voertuig en wegbeperkingen, en de reistijd berekenen.

> *Laatst bijgewerkt: mei 2025*