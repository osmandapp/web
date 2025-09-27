---
source-hash: 627c2c21830d1233dba44cacd666d91b7c9653f1681b66a17ad59c7b8df6029b
sidebar_position: 4
title:  Fußgänger-Routing
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

Fußgänger-Routing bezeichnet den Prozess, die beste Route für einen Fußgänger von einem Ort zum anderen zu finden, unter Berücksichtigung von Faktoren wie Fußgängerzonen, Gehwegen, Zebrastreifen und fußgängerfreundlichen Kreuzungen. Es können auch andere Faktoren wie *Treppen* berücksichtigt werden, was für die Zugänglichkeit mit Rollstühlen nützlich sein kann. OsmAnd verwendet immer Höhendaten bei der Berechnung der geschätzten Ankunftszeit (Zeit, um die Strecke zurückzulegen) gemäß der [Naismith-Regel](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb).

Um das *Fußgänger-Routing* zu konfigurieren, gehen Sie zum Abschnitt [Routenparameter](../guidance/navigation-settings#route-parameters) der Navigationseinstellungen.
  
### Routenparameter - Gehen {#route-parameters---walking}

Das Fußgänger-Routing kann nicht nur in städtischen Gebieten nützlich sein, wo Fußgänger auf verschiedene Hindernisse stoßen können, wenn sie von einem Ort zum anderen gelangen wollen. Sie können diesen Routing-Typ auch beim Joggen, Wandern und Nordic Walking außerhalb der Stadt oder in den Bergen verwenden. Passen Sie einfach die Routing-Parameter Ihren Bedürfnissen an.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Fußgänger-Routing-Einstellungen Android 2](@site/static/img/navigation/routing/routing_pedestrian_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Fußgänger-Routing-Einstellungen iOS 2](@site/static/img/navigation/routing/pedestrian_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Wählen Sie Straßen aus, die Sie während der Navigation vermeiden möchten. Sie können entweder [eine Straße auf der Karte auswählen](../../map/map-context-menu/#avoid-road) oder Straßentypen aus der Liste wählen.  </summary>![Zu vermeidende Straßen Android](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details>       | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (eine Art Wassertransport, der Fahrzeuge über Gewässer befördert)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Sie können wählen, welche Art von Oberfläche beim Erstellen einer Route bevorzugt werden soll. </summary> ![Höhendaten Fußgänger Android](@site/static/img/navigation/routing/prefer_pedestrian_andr.png)  </details>  | Sie können zwischen zwei Optionen wählen:<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). Diese Routen befinden sich typischerweise in natürlichen Umgebungen wie Wäldern, Bergen und Parks. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). Dieses texturierte Bodenleitsystem kann auf Gehwegen, Treppen und Bahnsteigen öffentlicher Verkehrsmittel installiert werden, um blinden oder sehbehinderten Fußgängern die Fortbewegung zu erleichtern. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Private Zugangsbeschränkungen werden bei der Routenberechnung ignoriert.  | Das Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wird in OSM verwendet, um Beschränkungen für die Nutzung von Straßen und anderen Verkehrswegen sowie von Gebäuden, Eingängen, Einrichtungen und Freizeitobjekten zu beschreiben.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Höhendaten werden bei der Routenberechnung verwendet: [Strafen](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) werden für Straßen festgelegt, die vom ausgewählten Typ abweichen. </summary> ![Höhendaten verwenden Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | Diese Einstellung kann helfen, steile Hügel zu vermeiden oder sie umgekehrt zu bevorzugen. Die Verwendung dieser Option kann beim Fußgänger-Routing sehr hilfreich sein. Ohne Höhendaten wird die schnellste Route wie auf ebenem Gelände berechnet. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| *Via ferrata*-Routen (Klettersteige) werden für das Routing verwendet, wenn diese Option zusammen mit *Höhendaten verwenden* aktiviert ist.  | [Via ferrata](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata) ist eine Bergroute, die mit festen Seilen, Klammern, Leitern und Brücken ausgestattet ist. |