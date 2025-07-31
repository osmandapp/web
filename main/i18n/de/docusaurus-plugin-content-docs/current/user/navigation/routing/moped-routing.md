---
source-hash: 3633198fddb7fe35a05678692319490fc58e0d27eeeb3150a2ae252eba8bd136
sidebar_position: 4
title: Moped-Routing
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

*Moped-Routing* ermöglicht es Fahrern, eine optimale (schnellste) Route zu erstellen, die die Besonderheiten des Fahrens eines Fahrzeugs wie eines Mopeds oder Rollers berücksichtigt. Der Routing-Prozess berücksichtigt verschiedene Faktoren für eine sichere, komfortable und legale Fortbewegung auf Straßen oder Radwegen.

:::note
Standardmäßig ist das *Moped-Profil* deaktiviert. Um dieses Profil für das Routing zu verwenden, müssen Sie es unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.
:::


## Routenparameter - Moped {#route-parameters---moped}

Das *Moped-Routing* kann entsprechend Ihren Anforderungen im Abschnitt [Routenparameter](../guidance/navigation-settings.md#route-parameters) der Navigationseinstellungen konfiguriert werden.

Die Routing-Einstellungen für Mopeds sind sehr einfach und bestehen aus nur wenigen Optionen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Moped-Routing-Einstellungen Android](@site/static/img/navigation/routing/moped_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Moped-Routing-Einstellungen iOS](@site/static/img/navigation/routing/moped_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Wählen Sie Straßen aus, die Sie während der Navigation vermeiden möchten. </summary>![Straßen vermeiden Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details> | Sie können entweder [eine Straße auf der Karte auswählen](../../map/map-context-menu/#avoid-road) oder Straßentypen aus der Liste auswählen: <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (eine Art Wassertransport, der Fahrzeuge über Gewässer befördert)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Private Zugangsbeschränkungen werden bei der Routenberechnung ignoriert. | Das Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wird in OSM verwendet, um Beschränkungen der Nutzung von Autobahnen und anderen Verkehrswegen sowie Gebäuden, Eingängen, Annehmlichkeiten und Freizeiteinrichtungen zu beschreiben. |


## Weitere Routing-Einstellungen {#other-routing-settings}

- Der Routing-Algorithmus kann auch temporäre Einschränkungen berücksichtigen, die in OpenStreetMap angegeben sind. Dies kann mit der Option *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)* erfolgen. Beachten Sie, dass Informationen aus OSM in einigen Fällen veraltet sein können.

- Im Abschnitt [*Route neu berechnen*](../../navigation/guidance/navigation-settings.md#recalculate-route) der *Routenparameter* können Sie Optionen zur Routenneuberechnung aktivieren und anpassen.

- Im Abschnitt [*Entwicklung*](../guidance/navigation-settings.md#development-settings) der *Routenparameter* können Sie neue Routing-Funktionen ausprobieren, die sich derzeit in der Testphase befinden. Beachten Sie, dass diese Einstellungen nur verfügbar sind, wenn das [OsmAnd-Entwicklungs-Plugin](../../plugins/development.md) aktiviert ist.

- Die Einstellung *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in der *iOS*-Version von OsmAnd befindet sich unter *Navigationseinstellungen → Routenparameter* (für *Android* unter *Fahrzeugparameter → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Diese Einstellung wird auf unbekannten Straßen ohne Geschwindigkeitsbegrenzungen verwendet. Dies ist am häufigsten der Fall, wenn eine Strecke oder Online-Route navigiert wird. Sie muss entsprechend den Parametern Ihres Fahrzeugs eingestellt werden.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Die richtige Konfiguration der Einstellungen hilft Ihnen, Probleme bei der Routenerstellung zu vermeiden. Sie können die am besten geeignete Route je nach Fahrzeugtyp und Straßenbeschränkungen auswählen sowie die Reisezeit berechnen.

> *Zuletzt aktualisiert: Juni 2024*