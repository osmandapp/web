---
source-hash: f863a18e2c3b8c34a6bbf837cba45b313219a45379aed3eb8ba136511d1c18a4
sidebar_position: 6
title:  Reit-Routing
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

*Reit-Routing* kann für Reiter nützlich sein, die ihre Ritte auf Wegen und Pfaden planen möchten, die für Pferde sicher und geeignet sind. Mit Hilfe dieser Art von Routing können Sie auch neue Routen entdecken, die sonst nicht bekannt gewesen wären.

*Reit-Routing* kann nach Ihren Bedürfnissen im Abschnitt [Routenparameter](../guidance/navigation-settings.md#route-parameters) der Navigationseinstellungen konfiguriert werden.

![Horseback](@site/static/img/navigation/routing/horseback_routing_overview.png)


## Routenparameter - Pferd {#route-parameters---horse}

:::note
Standardmäßig ist das *Reitprofil* deaktiviert. Um dieses Profil für das Routing zu verwenden, müssen Sie es unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.
:::

Das Reit-Routing ist darauf ausgelegt, Reitern Informationen über pferdefreundliche Wege, Reitwege und Reitpfade zu liefern.

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
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Wählen Sie Straßen aus, die Sie während der Navigation vermeiden möchten. Sie können entweder [eine Straße auf der Karte auswählen](../../map/map-context-menu/#avoid-road) oder Straßentypen aus der Liste wählen.  </summary>  ![Avoid roads Android](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (eine Art Wassertransport, der Fahrzeuge über Gewässer befördert)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Sie können wählen, ob Sie Routen für Pferde bevorzugen möchten oder nicht. </summary> ![Prefer horses routes Android](@site/static/img/navigation/routing/horse_routing_prefer_android.png)  </details>  | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). Ein Weg, der (hauptsächlich) für Reiter und (je nach länderspezifischen Vorschriften) für Fußgänger bestimmt ist. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* |  <Translate android="true" ids="routing_attr_allow_gate_description"/>. | Ein [Tor](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate) ist eine Art [Barriere](https://wiki.openstreetmap.org/wiki/Key:barrier), die die Bewegung blockiert. Normalerweise ist es ein Abschnitt in einer Mauer oder einem Zaun, der geöffnet oder geschlossen werden kann, um den Zugang zu ermöglichen oder zu beschränken. |
|  *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>*  |  <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>.  | In einigen Ländern sind [Pferdekutschen](https://wiki.openstreetmap.org/wiki/Key:carriage) auf Autobahnen nicht erlaubt, sie sind nur auf einer sehr kleinen Anzahl anderer Straßen zugelassen.   |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Private Zugangsbeschränkungen werden bei der Routenberechnung ignoriert.  | Das Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wird in OSM verwendet, um Beschränkungen für die Nutzung von Autobahnen und anderen Verkehrswegen sowie von Gebäuden, Eingängen, Annehmlichkeiten und Freizeiteinrichtungen zu beschreiben.   |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>*   |  <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>.  | Für das Routing werden nur speziell für Pferde ausgewiesene Straßen verwendet.   |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>*   |  <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>.  | Für das Routing werden nur speziell für Pferde ausgewiesene Wege verwendet.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Die voraussichtliche Reisezeit wird den Einfluss der Höhenlage widerspiegeln. </summary> ![Use elevation data Android](@site/static/img/navigation/routing/horse_routing_elevation_android.png)  </details> | Diese Einstellung kann helfen, steile Anstiege zu vermeiden. Ohne Höhendaten wird die schnellste Route wie auf ebenem Gelände berechnet. |