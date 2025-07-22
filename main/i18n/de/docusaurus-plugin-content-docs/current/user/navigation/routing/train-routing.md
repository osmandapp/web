---
source-hash: f5ae16407762521ec4aa196b206ad374ecb06bfd7b394248db04784c9100bc68
sidebar_position: 7
title: Zug-Routing
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




## Überblick {#overview}

:::note
Standardmäßig ist das Profil *Zug* deaktiviert. Um dieses Profil für die Routenplanung zu verwenden, müssen Sie es unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.
:::

Das *Zug-Routing* in OsmAnd bietet Nutzern die Möglichkeit, Eisenbahnstrecken für die Navigation zu nutzen, als ob sie einen Zug wie ein Auto fahren würden. Diese Option kann beispielsweise beim Wandern nützlich sein, wenn keine anderen Wege zur Verfügung stehen. In anderen Fällen ist es besser, das *[Routing für öffentliche Verkehrsmittel](./public-transport-navigation.md)* zu verwenden.

![Map transport tram](@site/static/img/navigation/routing/train_routing_overview.png)


## Routenparameter - Zug {#route-parameters---train}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Train routing settings Android](@site/static/img/navigation/routing/train_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Train routing settings iOS](@site/static/img/navigation/routing/train_routing_ios.png)

</TabItem>

</Tabs>

Das *Zug-Routing* kann in den [Routenparametern](../guidance/navigation-settings.md#route-parameters) der Navigationseinstellungen an Ihre Bedürfnisse angepasst werden.


## Weitere Routing-Einstellungen {#other-routing-settings}

- Der Routing-Algorithmus kann auch temporäre Einschränkungen berücksichtigen, die in OpenStreetMap angegeben sind. Dies kann mit der Option *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)* erfolgen. Beachten Sie, dass die Informationen aus OSM in einigen Fällen veraltet sein können.

- Im Abschnitt *[Route neu berechnen](../../navigation/guidance/navigation-settings.md#recalculate-route)* der *Routenparameter* können Sie die Optionen zur Neuberechnung der Route aktivieren und anpassen.

- Im Bereich *[Entwicklungseinstellungen](../guidance/navigation-settings.md#development-settings)* der *Routenparameter* können Sie neue Routing-Funktionen ausprobieren, die sich derzeit in der Testphase befinden. Beachten Sie, dass diese Einstellungen nur verfügbar sind, wenn das [OsmAnd-Entwickler-Plugin](../../plugins/development.md) aktiviert ist.

- Die Einstellung *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in der *iOS*-Version von OsmAnd befindet sich unter *Navigationseinstellungen → Routenparameter* (für *Android* unter *Fahrzeugparameter → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Diese Einstellungen können auch für das *Direkt-zum-Punkt*-Routing festgelegt werden. Sie werden zur Berechnung der voraussichtlichen Ankunftszeit verwendet.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Durch die richtige Konfiguration der Einstellungen können Sie Probleme bei der Erstellung einer Route vermeiden. Sie können die am besten geeignete Route je nach Fahrzeugtyp und Straßeneinschränkungen auswählen sowie die Fahrzeit berechnen.

> *Zuletzt aktualisiert: Juni 2024*