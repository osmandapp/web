---
source-hash: cd7a6be8622eb21754f0737fc6e482333633f7712490b8d2d401bc90d556be56
sidebar_position: 2
title:  Autonavigation (LKW, Motorrad)
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

Die Autonavigation wurde entwickelt, um Fahrern zu helfen, die Straßen effizient, sicher und komfortabel zu befahren, indem sie individuelle Wegbeschreibungen liefert, die auf die individuellen Bedürfnisse und Vorlieben jedes Fahrers zugeschnitten sind. Die richtigen Navigationseinstellungen können Fahrern helfen, Zeit und Kraftstoff zu sparen und Gefahren auf der Straße zu vermeiden. Die schnellste Route wird standardmäßig angeboten.

:::info
Der Navigationsmechanismus für motorisierte Landfahrzeuge unterscheidet sich nur in wenigen Einstellungen. Die gemeinsamen Parameter werden im Abschnitt [Auto](#route-parameters---car) dieses Artikels beschrieben. [LKW](#route-parameters---truck) und [Motorrad](#route-parameters---motorcycle) haben ihre eigenen Besonderheiten.
:::

Die Navigation kann in den [Routenparametern](../../navigation/guidance/navigation-settings.md#route-parameters) der Navigationseinstellungen des entsprechenden Profils (*Fahren, LKW, Motorrad*) nach Ihren Bedürfnissen konfiguriert werden.


## Routenparameter - Auto {#route-parameters---car}

Die Autonavigation wurde entwickelt, um Fahrern zu helfen, die effizientesten und direktesten Routen zu ihren Zielen zu finden. Sie berücksichtigt gängige Fahrbeschränkungen wie Einbahnstraßen, Abbiegeverbote, Fußgängerzonen und hilft auch, Straßen zu vermeiden, die für Autos nicht geeignet sind, wie z. B. enge Straßen oder Straßen mit Gewichtsbeschränkungen.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Car routing settings Android](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Car routing settings iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschreibung | Hinweis                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|:------------|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Wählen Sie Straßen aus, die Sie während der Navigation vermeiden möchten. Sie können entweder [eine Straße auf der Karte auswählen](../../map/map-context-menu/#avoid-road) oder Straßentypen aus der Liste auswählen.  </summary>![Avoid roads Android](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details>       | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll).</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface).</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Vermeiden Sie das Überqueren einer Grenze in ein anderes Land).</li><li>Vermeiden Sie [Eisstraßen](https://wiki.openstreetmap.org/wiki/Key:ice_road) (saisonale Straßen in kalten Regionen, die auf gefrorenem Wasser angelegt sind) und [Furten](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (Teile einer Straße, über die ein Wasserlauf führt). </li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (eine Art Wassertransport, der Fahrzeuge über Gewässer befördert).</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway).</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone).</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (Autotransportzüge, die zwei Orte verbinden, die auf der Straße nicht leicht zugänglich sind).</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel).</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (nur für Allradfahrzeuge geeignet).</li></ul> |
| *<Translate android="true" ids="prefer_in_routing_title"/>* |  <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | Bei der Autonavigation wird davon ausgegangen, dass die Straßenoberfläche [gepflastert](https://wiki.openstreetmap.org/wiki/Key:surface) ist, sofern nicht anders angegeben.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Private Zugangsbeschränkungen werden bei der Routenberechnung ignoriert.  | Das Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wird in OSM verwendet, um Beschränkungen der Nutzung von Straßen und anderen Verkehrswegen sowie Gebäuden, Eingängen, Annehmlichkeiten und Freizeiteinrichtungen zu beschreiben.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (nur&nbsp;Auto) |  <details><summary> Straßen, die für die Warenlieferung gesperrt sind, werden vermieden. </summary>![Goods delivery Android](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| Diese Option gilt nur für Fahrzeuge, die Waren mit einem Gewicht von nicht mehr als 3,5 Tonnen transportieren. Wenn Ihr Fahrzeuggewicht mehr als 3,5 Tonnen beträgt, sollten Sie das [LKW-Profil](#route-parameters---truck) verwenden.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | Um eine kraftstoffsparende Route zu berechnen, begrenzt die Navigations-Engine die Geschwindigkeit intern auf 60 km/h, die geschätzte Ankunftszeit ändert sich jedoch nicht. Bei zwei Routen mit gleichem Start- und Endpunkt (Autobahn (120 km/h) und Nebenstraße (60 km/h)) wird die kürzere Route ausgewählt. Bei Nebenstraßen mit einer Geschwindigkeitsbegrenzung von &lt;60 km/h wird die schnellere Route ausgewählt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |


## Routenparameter - LKW {#route-parameters---truck}

:::note
Standardmäßig ist das *LKW-Profil* deaktiviert. Um dieses Profil für die Navigation zu verwenden, müssen Sie es unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.
:::

Die LKW-Navigation ähnelt der Autonavigation, ist aber speziell für Fahrer großer Nutzfahrzeuge konzipiert. Sie berücksichtigt zusätzliche Faktoren wie [Höhen-, Gewichts- und Breitenbeschränkungen](../guidance/navigation-settings.md#size-parameters) des Fahrzeugs und die Möglichkeit, Gefahrgut zu transportieren (siehe Tabelle unten). Alle anderen Navigationseinstellungen sind identisch mit der [Autonavigation](#route-parameters---car).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Truck routing settings Android 2](@site/static/img/navigation/routing/routing_truck_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Truck routing settings iOS 2](@site/static/img/navigation/routing/truck_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="transport_hazmat_title"/>* (für **EU-Region**) | <details><summary> Lokale Behörden können den Transport von Gefahrgut auf einigen Straßen oder in Tunneln verbieten. </summary> ![Transporting of hazardous materials Android](@site/static/img/navigation/routing/routing_truck_hazmat_andr.png) </details> | Wenn aktiviert, berücksichtigt der LKW-Navigationsmechanismus das OSM-Tag *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*. Sie können eine der fünf Kategorien (*A, B, C, D, E*) gefährlicher Stoffe gemäß den **EU-Beschränkungen** auswählen. |
| *<Translate android="true" ids="dangerous_goods"/>* (nur wenn **USA-Region** ausgewählt ist) | <details><summary> Die Regeln für den Transport gefährlicher Güter in den USA unterscheiden sich von denen in der EU. Wird nur angezeigt, wenn die Fahrregion auf USA eingestellt ist. Sie können mehrere Klassen auswählen. </summary> ![Transporting of hazardous materials Android](@site/static/img/navigation/routing/routing_truck_dangerous_goods_andr.png) </details> | Wählen Sie einen der Typen (von 1 bis 9) gefährlicher Stoffe gemäß den [**USA-Beschränkungen**](https://www.iafc.org/topics-and-tools/hazmat/fusion-center/transportation-commodities/dot-hazard-classification-system). Der Transport gefährlicher Stoffe ist auf einigen Straßen und in Tunneln verboten. <ul><li>1. *Explosivstoffe* </li><li> 2. *Gase* </li><li> 3. *Entzündbare Flüssigkeiten* </li><li> 4. *Entzündbare Feststoffe* </li><li> 5. *Oxidierende Stoffe und organische Peroxide* </li><li> 6. *Giftige und infektiöse Stoffe* </li><li> 7. *Radioaktive Stoffe* </li><li> 8. *Ätzende Stoffe* </li><li> 9. *Sonstiges* </li></ul> |


## Routenparameter - Motorrad {#route-parameters---motorcycle}

:::note
Standardmäßig ist das *Motorrad-Profil* deaktiviert. Um dieses Profil für die Navigation zu verwenden, müssen Sie es unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.
:::

Motorrad-Navigation ist der Prozess der Erstellung einer Route, die speziell für Motorradfahrten optimiert ist. Diese Art der Navigation berücksichtigt die einzigartigen Bedürfnisse und Vorlieben von Motorradfahrern und bietet die bestmöglichen Fahrbedingungen. Routen werden unter Berücksichtigung einer Reihe von Parametern wie der Wahl des Straßenbelags (z. B. können schlechte Straßenbedingungen bevorzugt oder vermieden werden), der Vermeidung von Staus, der Zugänglichkeit der Infrastruktur oder der Sicherheit festgelegt.


## Weitere Navigationseinstellungen {#other-routing-settings}

- Der Navigationsalgorithmus kann auch temporäre Einschränkungen berücksichtigen, die in OpenStreetMap angegeben sind. Dies kann mit der Option *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)* erfolgen. Beachten Sie, dass die Informationen aus OSM in einigen Fällen veraltet sein können.

- Im Abschnitt [*Route neu berechnen*](../../navigation/guidance/navigation-settings.md#recalculate-route) der *Routenparameter* können Sie Optionen zur Neuberechnung der Route aktivieren und anpassen.

- Im Abschnitt [*Entwicklung*](../guidance/navigation-settings.md#development-settings) der *Routenparameter* können Sie neue Navigationsfunktionen ausprobieren, die sich derzeit in der Testphase befinden. Beachten Sie, dass diese Einstellungen nur verfügbar sind, wenn das [OsmAnd-Entwicklungs-Plugin](../../plugins/development.md) aktiviert ist.

- Die Einstellung *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in der *iOS*-Version von OsmAnd befindet sich unter *Navigationseinstellungen → Routenparameter* (für *Android* unter *Fahrzeugparameter → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Diese Einstellung wird auf unbekannten Straßen ohne Geschwindigkeitsbegrenzungen verwendet. Dies ist am häufigsten der Fall, wenn Sie eine Strecke oder eine Online-Route navigieren. Sie muss entsprechend den Parametern Ihres Fahrzeugs eingestellt werden.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Die richtige Konfiguration der Einstellungen hilft Ihnen, Probleme bei der Erstellung einer Route zu vermeiden. Sie können die am besten geeignete Route je nach Fahrzeugtyp und Straßenbeschränkungen auswählen sowie die Fahrzeit berechnen.

> *Zuletzt aktualisiert: Juli 2024*