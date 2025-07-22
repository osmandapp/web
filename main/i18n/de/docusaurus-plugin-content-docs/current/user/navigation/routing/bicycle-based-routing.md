---
source-hash: 11ccd7dd12c26392daa1886c0a0736ecbb759c2d6277a6807c7a313134cd6080
sidebar_position: 3
title: Fahrrad-Routing (MTB)
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

Das Fahrrad-Routing berücksichtigt Faktoren wie die Verfügbarkeit von Radwegen, Pfaden und Straßen, die für Radfahrer sicher und legal sind. OsmAnd verwendet immer Höhenangaben, um die geschätzte Ankunftszeit (Zeit zum Zurücklegen der Entfernung) gemäß der [Naismith-Regel](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb) zu berechnen. Standardmäßig wird die schnellste Route bereitgestellt.
Das Fahrrad-Routing kann auch für [Mountainbiking](#mtb-routing-particularities) nützlich sein.

Sie können das *Fahrrad-Routing* im Abschnitt [Routenparameter](../guidance/navigation-settings#route-parameters) der Navigationseinstellungen konfigurieren.


## Routenparameter – Fahrrad {#route-parameters---bicycle}

Mit den Fahrrad-Routing-Funktionen von OsmAnd können Radfahrer einen Start- und Endpunkt eingeben und dann eine Route erstellen, die ihre Vorlieben und die lokale Geografie berücksichtigt.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Einstellungen für Fahrrad-Routing](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Einstellungen für Fahrrad-Routing iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>* | Der Routing-Mechanismus wählt direktere und dementsprechend schnellere Straßen. | Trotz der Zunahme der Bewegungsgeschwindigkeit nimmt gleichzeitig auch die zurückgelegte Entfernung zu. Dies führt zu einem erhöhten Muskelaufwand. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Fahrstil* (iOS) | <details><summary> Sie können Ihren Fahrstil für ein besseres Routing wählen. </summary> ![Fahrstil Fahrrad Android](@site/static/img/navigation/routing/style_cycling_andr.png) </details> | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (weniger befahrene Straßen mit den Tags [secondary](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) und [residential](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) werden bevorzugt) </li><li> *[Unbefestigte Straßen](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved) bevorzugen* </li><li> *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (diese Option liegt irgendwo zwischen *Nebenstraßen bevorzugen* und *kürzeste Route*) </li><li> *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (für das Routing werden breitere und normalerweise stärker befahrene Straßen bevorzugt, was zu schnelleren Routen führt) </li></ul> |
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Wählen Sie Straßen, die Sie während der Navigation vermeiden möchten. </summary>![Straßen vermeiden Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details> | Sie können entweder eine [Straße auf der Karte auswählen](../../map/map-context-menu/#avoid-road) oder Straßentyp(en) aus der Liste wählen: <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Vermeiden Sie das Überqueren einer Grenze in ein anderes Land)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (eine Art Wassertransport, der Fahrzeuge über Gewässer befördert)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Kopfsteinpflaster vermeiden](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (Teile einer Straße, über die ein Gewässer fließt) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> Kein Pflasterstein</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Private Zugangsbeschränkungen werden bei der Routenberechnung ignoriert. | Das Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wird in OSM verwendet, um Beschränkungen der Nutzung von Straßen und anderen Verkehrswegen sowie von Gebäuden, Eingängen, Einrichtungen und Freizeiteinrichtungen zu beschreiben. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Bevorzugtes&nbsp;Gelände* (iOS) | <details><summary> Höhendaten werden bei der Routenberechnung verwendet: [Strafen für Straßen](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) mit einem anderen Höhenprofil werden festgelegt. </summary> ![Höhendaten verwenden Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png) </details> | Diese Präferenz kann helfen, steile Hügel zu vermeiden oder umgekehrt, sie zu bevorzugen. Wenn Sie eine *hügelige* Route wählen, werden Hügel und Berge bevorzugt. Wenn Sie eine *flache* Route wählen, werden Flachland bevorzugt und Hügel vermieden. Weniger hügelig ist etwas zwischen diesen beiden Optionen. Ohne Höhendaten wird die schnellste Route wie auf flachem Gelände berechnet. |


## Besonderheiten des MTB-Routings {#mtb-routing-particularities}

Der MTB-Routing-Mechanismus ist derselbe wie das Fahrrad-Routing. Beachten Sie, dass es einige Strafen für die Nutzung von [MTB-Routen](../../map/vector-maps.md#routes) gibt und diese daher für Radfahrten nach Hause oder zur Arbeit weniger wahrscheinlich angeboten werden.


## Andere Routing-Einstellungen {#other-routing-settings}

- Der Routing-Algorithmus kann auch temporäre Einschränkungen berücksichtigen, die in OpenStreetMap angegeben sind. Dies kann mit der Option *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)* erfolgen. Beachten Sie, dass Informationen aus OSM in einigen Fällen veraltet sein können.

- Im Abschnitt [*Route neu berechnen*](../../navigation/guidance/navigation-settings.md#recalculate-route) der *Routenparameter* können Sie Optionen zur Routen-Neuberechnung aktivieren und anpassen.

- Im Abschnitt [*Entwicklungseinstellungen*](../guidance/navigation-settings.md#development-settings) der *Routenparameter* können Sie neue Routing-Funktionen ausprobieren, die sich derzeit in der Testphase befinden. Beachten Sie, dass diese Einstellungen nur verfügbar sind, wenn das [OsmAnd-Entwicklungs-Plugin](../../plugins/development.md) aktiviert ist.

- Die Einstellung *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in der *iOS*-Version von OsmAnd befindet sich unter *Navigationseinstellungen → Routenparameter* (für *Android* unter *Fahrzeugparameter → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Diese Einstellung wird auf unbekannten Straßen ohne Geschwindigkeitsbegrenzungen verwendet. Dies ist am häufigsten der Fall, wenn eine Strecke oder eine Online-Route navigiert wird. Sie muss entsprechend den Parametern Ihres Fahrzeugs eingestellt werden.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Die richtige Konfiguration der Einstellungen hilft Ihnen, Probleme bei der Erstellung einer Route zu vermeiden. Sie können die am besten geeignete Route in Abhängigkeit vom Fahrzeugtyp und den Straßenbeschränkungen auswählen sowie die Fahrzeit berechnen.

> *Zuletzt aktualisiert: Juni 2024*