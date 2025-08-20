---
source-hash: 5622b3c06a619b7597895ee507b9910943c93a7d5ec31ddecd00215481e51e29
sidebar_position: 7
title: Zugrouting
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
Standardmäßig ist das *Zugprofil* deaktiviert. Um dieses Profil für das Routing zu verwenden, müssen Sie es unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.
:::

*Zugrouting* in OsmAnd bietet Nutzern die Möglichkeit, Eisenbahnlinien zur Navigation zu verwenden, als ob sie einen Zug wie ein Auto fahren würden. Diese Option kann beispielsweise beim Wandern nützlich sein, wenn keine anderen Wege verfügbar sind. In anderen Fällen ist es besser, *[Öffentliche Verkehrsmittel-Routing](./public-transport-navigation.md)* zu verwenden.

![Karte Transport Straßenbahn](@site/static/img/navigation/routing/train_routing_overview.png)

## Routenparameter - Zug {#route-parameters---train}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Einstellungen für Zugrouting Android](@site/static/img/navigation/routing/train_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Einstellungen für Zugrouting iOS](@site/static/img/navigation/routing/train_routing_ios.png)

</TabItem>

</Tabs>

*Zugrouting* kann nach Ihren Bedürfnissen im Abschnitt [Routenparameter](../guidance/navigation-settings.md#route-parameters) der Navigationseinstellungen konfiguriert werden.

## Weitere Routing-Einstellungen {#other-routing-settings}

- Der Routing-Algorithmus kann auch temporäre Einschränkungen berücksichtigen, die in OpenStreetMap angegeben sind. Dies kann mit der Option *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)* erfolgen. Beachten Sie, dass Informationen von OSM in einigen Fällen veraltet sein können.

- Im Abschnitt [*Route neu berechnen*](../../navigation/guidance/navigation-settings.md#recalculate-route) der *Routenparameter* können Sie Optionen zur Neuberechnung der Route aktivieren und anpassen.

- Im Abschnitt [*Entwicklung*](../guidance/navigation-settings.md#development-settings) der *Routenparameter* können Sie neue Routing-Funktionen ausprobieren, die sich derzeit in der Testphase befinden. Beachten Sie, dass diese Einstellungen nur verfügbar sind, wenn das [OsmAnd-Entwicklungs-Plugin](../../plugins/development.md) aktiviert ist.

- Die Einstellung *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in der *iOS*-Version von OsmAnd befindet sich unter *Navigationseinstellungen → Routenparameter* (für *Android* unter *Fahrzeugparameter → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Diese Einstellungen können auch für das *Direkt-zum-Punkt*-Routing festgelegt werden. Sie werden zur Berechnung der voraussichtlichen Ankunftszeit verwendet.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Die richtige Konfiguration der Einstellungen hilft Ihnen, Probleme bei der Routenerstellung zu vermeiden. Sie können die am besten geeignete Route je nach Fahrzeugtyp und Straßenbeschränkungen auswählen sowie die Reisezeit berechnen.

> *Zuletzt aktualisiert: Juni 2024*