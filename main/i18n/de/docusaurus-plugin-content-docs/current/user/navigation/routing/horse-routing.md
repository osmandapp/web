---
source-hash: 7008e200a45abc6dac5f84f04d67cfa4d6839d97740df298ea502bad90aec24d
sidebar_position: 6
title:  Pferderoutenplanung
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

Die *Pferderoutenplanung* kann für Reiter nützlich sein, die ihre Ritte auf Wegen und Pfaden planen möchten, die sicher und für Pferde geeignet sind. Mithilfe dieser Art der Routenplanung können Sie auch neue Routen entdecken, die Ihnen sonst nicht bekannt gewesen wären.

Die *Pferderoutenplanung* kann im Abschnitt [Routenparameter](../guidance/navigation-settings.md#route-parameters) der Navigationseinstellungen an Ihre Bedürfnisse angepasst werden.

![Horseback](@site/static/img/navigation/routing/horseback_routing_overview.png)


## Routenparameter - Pferd {#route-parameters---horse}

:::note
Standardmäßig ist das *Pferdereitprofil* deaktiviert. Um dieses Profil für die Routenplanung zu verwenden, müssen Sie es unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.
:::

Die Pferderoutenplanung wurde entwickelt, um Reitern Informationen über pferdefreundliche Wege, Reitwege und Reitpfade zu liefern.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Horse routing settings Android 1](@site/static/img/navigation/routing/horse-routing-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Horse routing settings iOS 1](@site/static/img/navigation/routing/horse-routing-ios.png)

</TabItem>

</Tabs>

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Wählen Sie Straßen aus, die Sie während der Navigation vermeiden möchten. Sie können entweder [eine Straße auf der Karte auswählen](../../map/map-context-menu/#avoid-road) oder Straßentypen aus der Liste auswählen.  </summary>  ![Avoid roads Android](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (eine Art Wassertransport, der Fahrzeuge über Gewässer bringt)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Sie können wählen, ob Sie Routen für Pferde bevorzugen möchten oder nicht. </summary> ![Prefer horses routes Android](@site/static/img/navigation/routing/horse_routing_prefer_android.png)  </details>  | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). Ein Weg, der (hauptsächlich) für Reiter und Fußgänger (abhängig von länderspezifischen Vorschriften) gedacht ist. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* |  <Translate android="true" ids="routing_attr_allow_gate_description"/>. | Ein [Tor](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate) ist eine Art [Barriere](https://wiki.openstreetmap.org/wiki/Key:barrier), die die Bewegung blockiert. Normalerweise ist es ein Abschnitt in einer Mauer oder einem Zaun, der geöffnet oder geschlossen werden kann, um Zugang zu gewähren oder zu beschränken. |
|  *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>*  |  <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>.  | In einigen Ländern sind [Pferdekutschen](https://wiki.openstreetmap.org/wiki/Key:carriage) auf Autobahnen nicht erlaubt, sie sind nur auf einer sehr kleinen Anzahl anderer Straßen zugelassen.   |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Private Zugangsbeschränkungen werden bei der Routenberechnung ignoriert.  | Das Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wird in OSM verwendet, um Beschränkungen der Nutzung von Autobahnen und anderen Verkehrswegen sowie Gebäuden, Eingängen, Annehmlichkeiten und Freizeiteinrichtungen zu beschreiben.   |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>*   |  <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>.  | Für die Routenplanung werden nur Straßen verwendet, die speziell für Pferde ausgewiesen sind.   |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>*   |  <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>.  | Für die Routenplanung werden nur Wege verwendet, die speziell für Pferde ausgewiesen sind.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Die voraussichtliche Reisezeit wird den Einfluss der Höhe widerspiegeln. </summary> ![Use elevation data Android](@site/static/img/navigation/routing/horse_routing_elevation_android.png)  </details> | Diese Einstellung kann helfen, steile Anstiege zu vermeiden. Ohne Höhendaten wird die schnellste Route wie auf ebenem Gelände berechnet. |


## Andere Routeneinstellungen {#other-routing-settings}

- Der Routing-Algorithmus kann auch temporäre Einschränkungen berücksichtigen, die in OpenStreetMap angegeben sind. Dies kann mit der Option [<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations) erfolgen. Beachten Sie, dass die Informationen aus OSM in einigen Fällen veraltet sein können.

- Im Abschnitt [Route neu berechnen](../../navigation/guidance/navigation-settings.md#recalculate-route) der *Routenparameter* können Sie Optionen zur Routenneuberechnung aktivieren und anpassen.

- Im Abschnitt [Entwicklung](../guidance/navigation-settings.md#development-settings) der *Routenparameter* können Sie neue Routing-Funktionen ausprobieren, die sich derzeit in der Testphase befinden. Beachten Sie, dass diese Einstellungen nur verfügbar sind, wenn das [OsmAnd-Entwicklungs-Plugin](../../plugins/development.md) aktiviert ist.

- Die Einstellung [<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds) in der *iOS*-Version von OsmAnd befindet sich unter *Navigationseinstellungen → Routenparameter* (für *Android* unter *Fahrzeugparameter → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Diese Einstellung wird auf unbekannten Straßen ohne Geschwindigkeitsbegrenzungen verwendet. Dies ist am häufigsten der Fall, wenn Sie eine Route oder Online-Route navigieren. Sie muss entsprechend den Parametern Ihres Fahrzeugs eingestellt werden.

- [<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters). Durch die richtige Konfiguration der Einstellungen können Sie Probleme bei der Erstellung einer Route vermeiden. Sie können je nach Fahrzeugtyp und Straßenbeschränkungen die am besten geeignete Route auswählen sowie die Fahrzeit berechnen.

> *Zuletzt aktualisiert: Juni 2024*