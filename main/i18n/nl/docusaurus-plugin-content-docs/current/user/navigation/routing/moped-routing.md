---
source-hash: 75f7c0d57899f1fdc282afb4724e5f3f76160e359fd1c402d5453ff85ce761c8
sidebar_position: 4
title:  Bromfiets routering
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

*Bromfiets routering* stelt bestuurders in staat een optimale (snelste) route te bouwen, rekening houdend met de specifieke kenmerken van het besturen van een voertuig zoals een bromfiets of scooter. Het routeringsproces houdt rekening met verschillende factoren voor een veilige, comfortabele en legale verplaatsing op wegen of fietspaden. Het Bromfietsprofiel vermijdt snelwegen: in het bijzonder gebruikt het geen autosnelwegen en wegen waar de snelheidslimiet hoger is dan 80 km/u bij het berekenen van een route.

:::note
Standaard is het *Bromfietsprofiel* gedeactiveerd. Om dit profiel te gebruiken voor routering, moet u het inschakelen in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

## Routeparameters - Bromfiets {#route-parameters---moped}

*Bromfiets routering* kan worden geconfigureerd volgens uw behoeften in de [Routeparameters sectie](../guidance/navigation-settings.md#route-parameters) van de Navigatie-instellingen.  

De routeringsinstellingen van de bromfiets zijn zeer eenvoudig en bestaan uit slechts enkele opties.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Moped routing settings Android](@site/static/img/navigation/routing/moped_routing_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Moped routing settings iOS](@site/static/img/navigation/routing/moped_routing_new_ios.png)  

</TabItem>

</Tabs>

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Selecteer wegen die u wilt vermijden tijdens de navigatie.  </summary>![Avoid roads Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details>  | U kunt ofwel [een weg selecteren op de kaart](../../map/map-context-menu/#avoid-road) of wegtype(s) kiezen uit de lijst:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (een type watertransport dat voertuigen over waterlichamen vervoert)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Beperkingen voor privétoegang worden genegeerd bij het berekenen van de route.  | De tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wordt in OSM gebruikt om beperkingen te beschrijven op het gebruik van snelwegen en andere transportroutes, evenals gebouwen, ingangen, voorzieningen en vrijetijdsentiteiten.   |
| *<Translate android="true" ids="temporary_conditional_routing"/>* |  Neemt tijdelijke beperkingen van OpenStreetMap in acht bij het berekenen van de route (bijvoorbeeld seizoenssluitingen of werkzaamheden).  | OSM-gegevens kunnen verouderd zijn, dus sommige tijdelijke beperkingen kunnen op het moment van navigatie niet meer geldig zijn.   |