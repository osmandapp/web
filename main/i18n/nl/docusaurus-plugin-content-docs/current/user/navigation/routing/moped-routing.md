---
source-hash: 3633198fddb7fe35a05678692319490fc58e0d27eeeb3150a2ae252eba8bd136
sidebar_position: 4
title: Bromfietsnavigatie
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

*Bromfietsnavigatie* stelt bestuurders in staat om een optimale (snelste) route te bouwen, rekening houdend met de specifieke kenmerken van het rijden met een voertuig zoals een bromfiets of scooter. Het navigatieproces houdt rekening met verschillende factoren voor een veilige, comfortabele en legale verplaatsing op wegen of fietspaden.

:::note
Standaard is het *Bromfietsprofiel* gedeactiveerd. Om dit profiel te gebruiken voor navigatie, moet u het inschakelen in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::


## Routeparameters - Bromfiets {#route-parameters---moped}

*Bromfietsnavigatie* kan worden geconfigureerd volgens uw behoeften in de sectie [Routeparameters](../guidance/navigation-settings.md#route-parameters) van de Navigatie-instellingen.

De navigatie-instellingen voor de bromfiets zijn zeer eenvoudig en bestaan uit slechts enkele opties.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bromfietsnavigatie-instellingen Android](@site/static/img/navigation/routing/moped_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Bromfietsnavigatie-instellingen iOS](@site/static/img/navigation/routing/moped_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Selecteer wegen die u wilt vermijden tijdens de navigatie. </summary>![Wegen vermijden Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details> | U kunt ofwel [een weg op de kaart selecteren](../../map/map-context-menu/#avoid-road) of wegtype(s) uit de lijst kiezen: <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (een type watertransport dat voertuigen over waterlichamen vervoert)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Privétoegangsbeperkingen worden genegeerd bij het berekenen van de route. | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wordt in OSM gebruikt om beperkingen te beschrijven op het gebruik van snelwegen en andere transportroutes, evenals gebouwen, ingangen, voorzieningen en recreatieve entiteiten. |


## Overige navigatie-instellingen {#other-routing-settings}

- Het navigatie-algoritme kan ook rekening houden met tijdelijke beperkingen die zijn gespecificeerd in OpenStreetMap. Dit kan worden gedaan met de optie *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Houd er rekening mee dat in sommige gevallen informatie van OSM verouderd kan zijn.

- In de sectie [*Route herberekenen*](../../navigation/guidance/navigation-settings.md#recalculate-route) van de *Routeparameters* kunt u opties voor het herberekenen van de route inschakelen en aanpassen.

- In de sectie [*Ontwikkeling*](../guidance/navigation-settings.md#development-settings) van de *Routeparameters* kunt u nieuwe navigatiefuncties uitproberen die momenteel in de testfase zijn. Houd er rekening mee dat deze instellingen alleen beschikbaar zijn wanneer de [OsmAnd ontwikkelingsplug-in](../../plugins/development.md) is ingeschakeld.

- De instelling *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in de *iOS*-versie van OsmAnd bevindt zich in *Navigatie-instellingen → Routeparameters* (voor *Android*, in *Voertuigparameters → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Deze instelling wordt gebruikt op onbekende wegen zonder snelheidsbeperkingen. Dit is meestal het geval bij het navigeren van een track of online route. Het moet worden ingesteld volgens de parameters van uw voertuig.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Het correct configureren van de instellingen helpt u problemen te voorkomen bij het maken van een route. U kunt de meest geschikte route selecteren, afhankelijk van het type voertuig en wegbeperkingen, en de reistijd berekenen.

> *Laatst bijgewerkt: juni 2024*