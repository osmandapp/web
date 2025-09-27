---
source-hash: 61b0680b73157560322c9e1f518e6754f7621729463a0d13adc86d23430d9851
sidebar_position: 3
title:  Fahrrad-Routing (MTB)
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



## Übersicht {#overview}

Beim Fahrrad-Routing werden Faktoren wie die Verfügbarkeit von Radwegen, Pfaden und Straßen berücksichtigt, die für Radfahrer sicher und legal sind. OsmAnd verwendet bei der Berechnung der voraussichtlichen Ankunftszeit (Zeit zur Überwindung der Strecke) immer Höhendaten gemäß der [Naismith-Regel](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb). Standardmäßig wird die schnellste Route angeboten.
Das Fahrrad-Routing kann auch für das [Mountainbiken](#mtb-routing-particularities) nützlich sein.

Sie können das *Fahrrad-Routing* im Abschnitt [Routenparameter](../guidance/navigation-settings#route-parameters) der Navigationseinstellungen konfigurieren.


## Routenparameter - Fahrrad {#route-parameters---bicycle}

Die Fahrrad-Routing-Funktionen von OsmAnd ermöglichen es Radfahrern, einen Start- und Endpunkt einzugeben und dann eine Route zu erstellen, die ihre Vorlieben und die lokale Geografie berücksichtigt.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Fahrrad-Routing-Einstellungen](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Fahrrad-Routing-Einstellungen iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)  

</TabItem>

</Tabs>

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>*  |  Der Routing-Mechanismus wählt direktere und dementsprechend schnellere Straßen.  | Trotz der Erhöhung der Bewegungsgeschwindigkeit nimmt gleichzeitig auch die zurückgelegte Strecke zu. Dies führt zu einer Erhöhung des Kraftaufwands. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Fahrstil* (iOS) | <details><summary> Sie können Ihren Fahrstil für ein besseres Routing wählen. </summary> ![Fahrstil Fahrrad Android](@site/static/img/navigation/routing/style_cycling_andr.png)  </details>  | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (bevorzugt werden weniger befahrene Straßen mit den Tags [secondary](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) und [residential](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential)) </li><li> *[Unbefestigte Straßen](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved) bevorzugen* </li><li>  *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (diese Option liegt zwischen *Nebenstraßen bevorzugen* und *kürzeste Route*) </li><li>  *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (für das Routing werden breitere und meist befahrene Straßen bevorzugt, die schnellere Routen ermöglichen) </li></ul>  |
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Wählen Sie Straßen aus, die Sie während der Navigation vermeiden möchten.  </summary>![Straßen vermeiden Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details>  | Sie können entweder [eine Straße auf der Karte auswählen](../../map/map-context-menu/#avoid-road) oder Straßentyp(en) aus der Liste auswählen:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Grenzübergang in ein anderes Land vermeiden)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (eine Art Wassertransport, der Fahrzeuge über Gewässer befördert)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Kopfsteinpflaster vermeiden](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (Teile einer Straße, über die ein Wasserweg verläuft) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [Kein Pflasterstein](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Private Zugangsbeschränkungen werden bei der Routenberechnung ignoriert.  | Das Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wird in OSM verwendet, um Beschränkungen für die Nutzung von Autobahnen und anderen Verkehrswegen sowie von Gebäuden, Eingängen, Einrichtungen und Freizeitobjekten zu beschreiben.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Bevorzugtes&nbsp;Gelände* (iOS) | <details><summary> Höhendaten werden bei der Routenberechnung verwendet: Für Straßen mit einem anderen Höhenprofil werden [Strafen für Straßen](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) festgelegt. </summary> ![Höhendaten verwenden Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | Diese Einstellung kann helfen, steile Hügel zu vermeiden oder umgekehrt, sie zu bevorzugen. Wenn Sie eine *hügelige* Route wählen, werden Hügel und Berge bevorzugt. Wenn *flach* - werden Ebenen bevorzugt und Hügel vermieden. Die Option "weniger hügelig" liegt zwischen diesen beiden Optionen. Ohne Höhendaten wird die schnellste Route wie auf ebenem Gelände berechnet. |


## Besonderheiten des MTB-Routings {#mtb-routing-particularities}

Der MTB-Routing-Mechanismus (Mountainbike) ist derselbe wie beim Fahrrad-Routing. Beachten Sie, dass es einige Nachteile bei der Verwendung von [MTB-Routen](../../map/vector-maps.md#routes) gibt und diese daher seltener für die Fahrt nach Hause oder zur Arbeit angeboten werden.