---
source-hash: 27acdc622e2e460a91c82997ca3c6a46ddff094dce1fb89a1f2d05a529a31216
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



## Überblick {#overview}

:::note
Das Ski-Routing und das Ski-Profil sind nur verfügbar, wenn das [Ski-Kartenansicht-Plugin](../../plugins/ski-maps.md) aktiviert ist.
:::

*Ski-Routing* kann besonders nützlich für Tourengeher, Skibergsteiger und andere Wintersportler sein, die neue Gebiete erkunden und ihre Touren im Voraus planen möchten. Mit *Ski-Routing* können OsmAnd-Benutzer Routen planen und sicher navigieren, während sie die Schönheit der Winterlandschaften genießen.

*Ski-Routing* kann in den [Routenparametern](../guidance/navigation-settings.md#route-parameters) der Navigationseinstellungen an Ihre Bedürfnisse angepasst werden.

![Kartenrouten - Skipisten](@site/static/img/navigation/routing/ski_routing_overview.png)


## Routenparameter - Ski {#route-parameters---ski}

:::note
Standardmäßig ist das *Ski-Profil* deaktiviert. Um dieses Profil für das Routing zu verwenden, müssen Sie es in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.
:::

Die *Ski-Routing*-Einstellungen ermöglichen es Benutzern, ihre Routen zu planen, indem sie den gewünschten Schwierigkeitsgrad und die Art des Geländes auswählen, das sie erkunden möchten. Es gibt verschiedene Optionen für eine sichere, komfortable und angenehme Bewegung auf Pisten oder beim Freeriden.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ski-Routing-Einstellungen Android 1](@site/static/img/navigation/routing/skiing_routing_1_andr.png) ![Ski-Routing-Einstellungen Android 2](@site/static/img/navigation/routing/skiing_routing_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ski-Routing-Einstellungen iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png)

</TabItem>

</Tabs>

| Parameter | Ermöglicht die Verwendung für das Routing | Hinweis |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="routing_attr_allow_skating_only_name"/>* | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> | `https://wiki.openstreetmap.org/wiki/Piste_Maps#Type` |
|*<Translate android="true" ids="app_mode_ski_touring"/>* | <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | Ein empfohlener [Skitourenweg](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) oder ein Gebiet, das im Allgemeinen von vielen Skifahrern während einer Saison für den Zweck eines nordischen Aufstiegs und einer Abfahrt im Gelände genutzt wird. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* | <Translate android="true" ids="routing_attr_allow_advanced_description"/> | Anspruchsvollere [Routen](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty) werden für das Routing zugelassen. |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* | <details><summary> Wählen Sie eine der Optionen für das Freeride-Skifahren. </summary>![Abseits der Piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* | <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | Die Nutzung von [Skiliften](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts) wird aktiviert |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(Android) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) | <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* | <Translate android="true" ids="routing_attr_allow_classic_only_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* | <Translate android="true" ids="routing_attr_allow_expert_description"/>| |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* | <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | [Schlitten](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) sind kleinere Fahrzeuge, die von einem Menschen gezogen oder nur durch die Schwerkraft angetrieben werden. Wenn aktiviert, werden [Schlittenpisten](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) für das Ski-Routing verwendet |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* | <Translate android="true" ids="routing_attr_allow_intermediate_description"/>| |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* | <details><summary> <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![Abseits der Piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |


## Weitere Routing-Einstellungen {#other-routing-settings}

- Der Routing-Algorithmus kann auch temporäre Einschränkungen berücksichtigen, die in OpenStreetMap angegeben sind. Dies kann mit der Option *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)* erfolgen. Beachten Sie, dass in einigen Fällen Informationen von OSM veraltet sein können.

- Im Abschnitt [*Route neu berechnen*](../../navigation/guidance/navigation-settings.md#recalculate-route) der *Routenparameter* können Sie Optionen zur Neuberechnung der Route aktivieren und anpassen.

- Im Abschnitt [*Entwicklung*](../guidance/navigation-settings.md#development-settings) der *Routenparameter* können Sie neue Routing-Funktionen ausprobieren, die sich derzeit in der Testphase befinden. Beachten Sie, dass diese Einstellungen nur verfügbar sind, wenn das [OsmAnd-Entwicklungs-Plugin](../../plugins/development.md) aktiviert ist.

- Die Einstellung *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in der *iOS*-Version von OsmAnd befindet sich in *Navigationseinstellungen → Routenparameter* (für *Android* in *Fahrzeugparameter → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Diese Einstellung wird auf unbekannten Straßen ohne Geschwindigkeitsbegrenzungen verwendet. Dies ist meistens der Fall, wenn eine Strecke oder eine Online-Route navigiert wird. Sie muss entsprechend den Parametern Ihres Fahrzeugs eingestellt werden.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Die richtige Konfiguration der Einstellungen hilft Ihnen, Probleme bei der Routenerstellung zu vermeiden. Sie können die am besten geeignete Route je nach Fahrzeugtyp und Straßenbeschränkungen auswählen sowie die Fahrzeit berechnen.

> *Zuletzt aktualisiert: Juni 2024*