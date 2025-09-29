---
source-hash: 2428f76d4d2b174f4096091771998583d1804e3fbc62cf63cf7e6bf40e95cc8c
sidebar_position: 6
title:  Ski-Routing
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Übersicht {#overview}

:::note
Das Ski-Routing und das Ski-Profil sind nur verfügbar, wenn das [Plugin für die Skikartenansicht](../../plugins/ski-maps.md) aktiviert ist.
:::

*Ski-Routing* kann besonders nützlich für Tourengeher, Skibergsteiger und andere Wintersportler sein, die neue Gebiete erkunden und ihre Touren im Voraus planen möchten. Mit dem *Ski-Routing* können OsmAnd-Benutzer Routen planen und sicher navigieren, während sie die Schönheit der Winterlandschaften genießen.

Das *Ski-Routing* kann nach Ihren Bedürfnissen im Abschnitt [Routenparameter](../guidance/navigation-settings.md#route-parameters) der Navigationseinstellungen konfiguriert werden.

![Kartenrouten - Skipisten](@site/static/img/navigation/routing/ski_routing_overview.png)


## Routenparameter - Ski {#route-parameters---ski}

:::note
Standardmäßig ist das *Ski-Profil* deaktiviert. Um dieses Profil für das Routing zu verwenden, müssen Sie es unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.
:::

Die *Ski-Routing*-Einstellungen ermöglichen es Benutzern, ihre Routen zu planen, indem sie den gewünschten Schwierigkeitsgrad und die Art des Geländes auswählen, das sie erkunden möchten. Es gibt verschiedene Optionen für eine sichere, bequeme und angenehme Fortbewegung auf Pisten oder beim Freeriden.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ski-Routing-Einstellungen Android 1](@site/static/img/navigation/routing/skiing_routing_1_andr.png) ![Ski-Routing-Einstellungen Android 2](@site/static/img/navigation/routing/skiing_routing_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ski-Routing-Einstellungen iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png)

</TabItem>

</Tabs>

| Parameter | Erlaubt die Verwendung für das Routing | Hinweis |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="routing_attr_allow_skating_only_name"/>* | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> |  `https://wiki.openstreetmap.org/wiki/Piste_Maps#Type`  |
|*<Translate android="true" ids="app_mode_ski_touring"/>* |   <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | Ein empfohlener [Skitourenweg](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) oder ein Gebiet, das im Allgemeinen von vielen Skifahrern während einer Saison für einen nordischen Aufstieg und eine Abfahrt im Backcountry genutzt wird. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* |  <Translate android="true" ids="routing_attr_allow_advanced_description"/>  | [Schwierigere Routen](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty) werden für das Routing zugelassen. |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* |   <details><summary> Wählen Sie eine der Optionen für das Freeride-Skifahren.  </summary>![Abseits der Piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> |   |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* |  <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | Die Nutzung von [Skiliften](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts) wird eingeschaltet. |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(Android) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) |   <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>|  |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* |   <Translate android="true" ids="routing_attr_allow_classic_only_description"/>|  |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* |   <Translate android="true" ids="routing_attr_allow_expert_description"/>|  |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* |  <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | [Schlitten](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) sind kleinere Fahrzeuge, die von einem Menschen gezogen oder nur durch die Schwerkraft angetrieben werden. Wenn aktiviert, werden [Rodelbahnen](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) für das Ski-Routing verwendet. |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* |   <Translate android="true" ids="routing_attr_allow_intermediate_description"/>|  |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* |  <details><summary>  <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![Abseits der Piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> |  |