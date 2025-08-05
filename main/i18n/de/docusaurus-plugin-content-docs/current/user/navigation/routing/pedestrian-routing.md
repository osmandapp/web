---
source-hash: c9cc4966613ed52d676e5a31b688413d05a80561124ece1be768467357788ff3
sidebar_position: 4
title: Fußgänger-Routing
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

Fußgänger-Routing bezieht sich auf den Prozess, die beste Route für einen Fußgänger von einem Ort zum anderen zu finden, wobei Faktoren wie reine Fußgängerzonen, Gehwege, Zebrastreifen und fußgängerfreundliche Kreuzungen berücksichtigt werden. Es können auch andere Faktoren wie *Treppen* berücksichtigt werden, die für die Rollstuhlzugänglichkeit nützlich sein können. OsmAnd verwendet immer Höhendaten bei der Berechnung der geschätzten Ankunftszeit (Zeit zum Zurücklegen der Strecke) gemäß [Naismith's Regel](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb).

Um das *Fußgänger-Routing* zu konfigurieren, gehen Sie zum Abschnitt [Routenparameter](../guidance/navigation-settings#route-parameters) der Navigationseinstellungen.

### Routenparameter - Gehen {#route-parameters---walking}

Das Fußgänger-Routing kann nicht nur in städtischen Gebieten nützlich sein, wo Fußgänger auf verschiedene Hindernisse stoßen können, wenn sie versuchen, von einem Ort zum anderen zu gelangen. Sie können diese Art des Routings auch beim Joggen, Wandern und Nordic Walking außerhalb der Stadt oder in den Bergen verwenden. Passen Sie die Routing-Parameter einfach an Ihre Bedürfnisse an.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pedestrian routing settings Android 2](@site/static/img/navigation/routing/routing_pedestrian_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pedestrian routing settings iOS 2](@site/static/img/navigation/routing/pedestrian_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Wählen Sie Straßen aus, die Sie während der Navigation vermeiden möchten. Sie können entweder [eine Straße auf der Karte auswählen](../../map/map-context-menu/#avoid-road) oder Straßentypen aus der Liste auswählen. </summary>![Avoid roads Android](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (eine Art Wassertransport, der Fahrzeuge über Gewässer befördert)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Sie können wählen, welche Art von Oberfläche beim Erstellen einer Route bevorzugt werden soll. </summary> ![Elevation pedestrian Android](@site/static/img/navigation/routing/prefer_pedestrian_andr.png) </details> | Sie können zwischen zwei Optionen wählen:<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). Diese Routen finden sich typischerweise in natürlichen Umgebungen wie Wäldern, Bergen und Parks. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). Dieses taktile Bodensystem kann auf Gehwegen, Treppen und öffentlichen Verkehrsplattformen installiert werden, um blinden oder sehbehinderten Fußgängern die Fortbewegung zu erleichtern. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Private Zugangsbeschränkungen werden bei der Routenberechnung ignoriert. | Das Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wird in OSM verwendet, um Beschränkungen für die Nutzung von Autobahnen und anderen Verkehrswegen sowie Gebäuden, Eingängen, Annehmlichkeiten und Freizeiteinrichtungen zu beschreiben. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Höhendaten werden bei der Routenberechnung verwendet: [Strafen](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) werden für Straßen festgelegt, die vom ausgewählten Typ abweichen. </summary> ![Use elevation data Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png) </details> | Diese Präferenz kann helfen, steile Hügel zu vermeiden oder umgekehrt, sie zu bevorzugen. Die Verwendung dieser Option kann beim Fußgänger-Routing sehr hilfreich sein. Ohne Höhendaten wird die schnellste Route wie auf ebenem Gelände berechnet. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| *Klettersteig*-Routen werden für das Routing verwendet, wenn diese Option zusammen mit *Höhendaten verwenden* aktiviert ist. | Ein [Klettersteig](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata) ist eine Bergroute, die mit festen Seilen, Eisenstiften, Leitern und Brücken ausgestattet ist. |


## Weitere Routing-Einstellungen {#other-routing-settings}

- Der Routing-Algorithmus kann auch temporäre Einschränkungen berücksichtigen, die in OpenStreetMap angegeben sind. Dies kann mit der Option *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)* erfolgen. Beachten Sie, dass in einigen Fällen Informationen von OSM veraltet sein können.

- Im Abschnitt [*Route neu berechnen*](../../navigation/guidance/navigation-settings.md#recalculate-route) der *Routenparameter* können Sie Optionen zur Routenneuberechnung aktivieren und anpassen.

- Im Abschnitt [*Entwicklung*](../guidance/navigation-settings.md#development-settings) der *Routenparameter* können Sie neue Routing-Funktionen ausprobieren, die sich derzeit in der Testphase befinden. Beachten Sie, dass diese Einstellungen nur verfügbar sind, wenn das [OsmAnd Entwicklungs-Plugin](../../plugins/development.md) aktiviert ist.

- Die Einstellung *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in der *iOS*-Version von OsmAnd befindet sich unter *Navigationseinstellungen → Routenparameter* (für *Android* unter *Fahrzeugparameter → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Diese Einstellung wird auf unbekannten Straßen ohne Geschwindigkeitsbegrenzungen verwendet. Dies ist meist der Fall bei der Navigation einer Strecke oder Online-Route. Sie muss entsprechend den Parametern Ihres Fahrzeugs eingestellt werden.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Die richtige Konfiguration der Einstellungen hilft Ihnen, Probleme beim Erstellen einer Route zu vermeiden. Sie können die am besten geeignete Route je nach Fahrzeugtyp und Straßenbeschränkungen auswählen sowie die Fahrzeit berechnen.

> *Zuletzt aktualisiert: Juni 2024*