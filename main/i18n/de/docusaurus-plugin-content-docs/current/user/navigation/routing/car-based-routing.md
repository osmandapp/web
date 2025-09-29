---
source-hash: c8f39d23c520f3d8eb8713729cf8047052d90c32210529157c5a7347608706bb
sidebar_position: 2
title:  Routenführung für Auto (LKW, Motorrad)
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

Die Routenführung für Autos soll Fahrern helfen, effizient, sicher und bequem auf den Straßen zu navigieren, indem sie angepasste Wegbeschreibungen bereitstellt, die auf die einzigartigen Bedürfnisse und Vorlieben jedes Fahrers zugeschnitten sind. Richtige Routeneinstellungen können Fahrern helfen, Zeit und Kraftstoff zu sparen und Gefahren auf der Straße zu vermeiden. Standardmäßig wird die schnellste Route angeboten.

:::info
Der Routing-Mechanismus für motorisierte Landfahrzeuge unterscheidet sich nur in wenigen Einstellungen. Die gemeinsamen Parameter werden im Abschnitt [Auto](#route-parameters---car) dieses Artikels beschrieben. [LKW](#route-parameters---truck) und [Motorrad](#route-parameters---motorcycle) haben ihre eigenen Besonderheiten.
:::

Die Routenführung kann nach Ihren Bedürfnissen im Abschnitt [Routenparameter](../../navigation/guidance/navigation-settings.md#route-parameters) der Navigationseinstellungen des entsprechenden Profils (*Fahren, LKW, Motorrad*) konfiguriert werden.


## Routenparameter - Auto {#route-parameters---car}

Die Autoroutenführung soll Fahrern helfen, die effizientesten und direktesten Routen zu ihren Zielen zu finden. Sie berücksichtigt gängige Fahrbeschränkungen wie Einbahnstraßen, Abbiegeverbote, Fußgängerzonen und hilft auch, für Autos ungeeignete Straßen wie enge Straßen oder Straßen mit Gewichtsbeschränkungen zu vermeiden.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Autorouting-Einstellungen Android](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Autorouting-Einstellungen iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Wählen Sie Straßen aus, die Sie während der Navigation vermeiden möchten. Sie können entweder [eine Straße auf der Karte auswählen](../../map/map-context-menu/#avoid-road) oder Straßentypen aus der Liste wählen.  </summary>![Zu vermeidende Straßen Android](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details>       | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll).</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface).</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Vermeiden Sie das Überqueren einer Grenze in ein anderes Land).</li><li>Vermeiden Sie [Eisstraßen](https://wiki.openstreetmap.org/wiki/Key:ice_road) (saisonale Straßen in kalten Regionen, die auf gefrorenem Wasser angelegt sind) und [Furten](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (Teile einer Straße, über die ein Wasserlauf führt). </li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (eine Art Wassertransport, der Fahrzeuge über Gewässer befördert).</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway).</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone).</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (Autozüge, die zwei Orte verbinden, die auf der Straße nicht leicht zu erreichen sind).</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel).</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (nur für Fahrzeuge mit Allradantrieb geeignet).</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* |  <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | Für die Autoroutenführung wird angenommen, dass die Straßenoberfläche [asphaltiert](https://wiki.openstreetmap.org/wiki/Key:surface) ist, sofern nicht anders angegeben. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Private Zugangsbeschränkungen werden bei der Routenberechnung ignoriert.  | Der Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wird in OSM verwendet, um Beschränkungen für die Nutzung von Autobahnen und anderen Verkehrswegen sowie von Gebäuden, Eingängen, Einrichtungen und Freizeitobjekten zu beschreiben.   |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (nur&nbsp;Auto) |  <details><summary> Straßen, die für den Lieferverkehr gesperrt sind, werden vermieden. </summary>![Warenlieferung Android](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| Diese Option gilt nur für Fahrzeuge, die Waren mit einem Gewicht von nicht mehr als 3,5 Tonnen transportieren. Wenn Ihr Fahrzeug mehr als 3,5 Tonnen wiegt, sollten Sie das [LKW-Profil](#route-parameters---truck) verwenden.   |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | Um eine kraftstoffsparende Route zu berechnen, begrenzt die Routing-Engine die Geschwindigkeit intern auf 60 km/h, was jedoch die geschätzte Ankunftszeit nicht ändert. Im Falle von 2 gleichen Start-Ziel-Routen: Autobahn (120 km/h) und Nebenstraße (60 km/h) - wird die kürzere Route gewählt. Für Anliegerstraßen mit einer Geschwindigkeitsbegrenzung < 60 km/h wird die schnellere Route gewählt. |


## Routenparameter - LKW {#route-parameters---truck}

:::note
Standardmäßig ist das *LKW-Profil* deaktiviert. Um dieses Profil für die Routenführung zu verwenden, müssen Sie es unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.
:::

Die LKW-Routenführung ähnelt der Autoroutenführung, ist aber speziell für Fahrer großer Nutzfahrzeuge konzipiert. Sie berücksichtigt zusätzliche Faktoren wie [Höhen-, Gewichts- und Breitenbeschränkungen](../guidance/vehicle-parameters.md#size-parameters) des Fahrzeugs und die Möglichkeit, Gefahrgut zu transportieren (siehe Tabelle unten). Alle anderen Routeneinstellungen sind identisch mit der [Autoroutenführung](#route-parameters---car).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![LKW-Routing-Einstellungen Android 2](@site/static/img/navigation/routing/routing_truck_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![LKW-Routing-Einstellungen iOS 2](@site/static/img/navigation/routing/truck_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="transport_hazmat_title"/>* (für **EU-Region**) | <details><summary> Lokale Behörden können den Transport von Gefahrgut auf einigen Straßen oder in Tunneln verbieten. </summary> ![Transport von Gefahrgut Android](@site/static/img/navigation/routing/routing_truck_hazmat_andr.png) </details> | Wenn aktiviert, berücksichtigt der LKW-Routing-Mechanismus den OSM-Tag *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*. Sie können eine der fünf Kategorien (*A, B, C, D, E*) von Gefahrstoffen gemäß den **EU-Beschränkungen** auswählen. |
| *<Translate android="true" ids="dangerous_goods"/>* (nur wenn **USA-Region** ausgewählt ist) | <details><summary> Die Vorschriften für den Transport von Gefahrgut in den USA unterscheiden sich von denen in der EU. Wird nur angezeigt, wenn die Fahrregion auf USA eingestellt ist. Sie können mehrere Klassen auswählen. </summary> ![Transport von Gefahrgut Android](@site/static/img/navigation/routing/routing_truck_dangerous_goods_andr.png) </details> | Wählen Sie eine der Arten (von 1 bis 9) von Gefahrstoffen gemäß den [**USA-Beschränkungen**](https://www.iafc.org/topics-and-tools/hazmat/fusion-center/transportation-commodities/dot-hazard-classification-system). Der Transport von Gefahrgut ist auf einigen Straßen und in Tunneln verboten. <ul><li>1. *Explosivstoffe* </li><li> 2. *Gase* </li><li> 3. *Entzündbare Flüssigkeiten* </li><li> 4. *Entzündbare Feststoffe* </li><li> 5. *Oxidierende Stoffe und organische Peroxide* </li><li> 6. *Giftige und ansteckende Stoffe* </li><li> 7. *Radioaktive Stoffe* </li><li> 8. *Ätzende Stoffe* </li><li> 9. *Verschiedenes* </li></ul> |


## Routenparameter - Motorrad {#route-parameters---motorcycle}

:::note
Standardmäßig ist das *Motorrad-Profil* deaktiviert. Um dieses Profil für die Routenführung zu verwenden, müssen Sie es unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.
:::

Motorrad-Routing ist der Prozess der Erstellung einer speziell für Motorradfahrten optimierten Route. Diese Art der Routenführung berücksichtigt die einzigartigen Bedürfnisse und Vorlieben von Motorradfahrern und bietet die bestmöglichen Fahrbedingungen. Die Routen werden unter Berücksichtigung einer Reihe von Parametern wie der Wahl des Straßenbelags (z. B. können schlechte Straßenverhältnisse bevorzugt oder vermieden werden), der Vermeidung von Staus, der Verfügbarkeit von Infrastruktur oder der Sicherheit angelegt.