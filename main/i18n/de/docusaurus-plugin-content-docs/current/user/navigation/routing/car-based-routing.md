---
source-hash: 918e5cde7ffddb7a99046ea161570b0112d11c17a7525a60f27a26db3726b779
sidebar_position: 2
title: Routenplanung Auto (LKW, Motorrad)
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

Die Routenplanung für Autos soll Fahrern helfen, sich effizient, sicher und komfortabel auf den Straßen zurechtzufinden, indem sie maßgeschneiderte Anweisungen bietet, die auf die individuellen Bedürfnisse und Vorlieben jedes Fahrers zugeschnitten sind. Die richtigen Routeneinstellungen können Fahrern helfen, Zeit und Kraftstoff zu sparen und Gefahren auf der Straße zu vermeiden. Die schnellste Routenführung wird standardmäßig angeboten.

:::info
Der Routenmechanismus für motorisierte Landfahrzeuge unterscheidet sich nur in wenigen Einstellungen. Die gemeinsamen Parameter werden im Abschnitt [Auto](#route-parameters---car) dieses Artikels beschrieben. [LKW](#route-parameters---truck) und [Motorrad](#route-parameters---motorcycle) haben ihre eigenen Besonderheiten.
:::

Die Routenplanung kann nach Ihren Bedürfnissen im Abschnitt [Routenparameter](../../navigation/guidance/navigation-settings.md#route-parameters) der Navigationseinstellungen des entsprechenden Profils (*Fahren, LKW, Motorrad*) konfiguriert werden.


## Routenparameter - Auto {#route-parameters---car}

Die Routenplanung für Autos soll Fahrern helfen, die effizientesten und direktesten Routen zu ihren Zielen zu finden. Sie berücksichtigt gängige Fahrbeschränkungen wie Einbahnstraßen, Abbiegeverbote, Fußgängerzonen und hilft auch, Straßen zu vermeiden, die für Autos nicht geeignet sind, wie z.B. schmale Straßen oder Straßen mit Gewichtsbeschränkungen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Car routing settings Android](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Car routing settings iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Wählen Sie Straßen aus, die Sie während der Navigation vermeiden möchten. Sie können entweder [eine Straße auf der Karte auswählen](../../map/map-context-menu/#avoid-road) oder Straßentypen aus der Liste wählen. </summary>![Avoid roads Android](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details> | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll).</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface).</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Vermeiden Sie das Überqueren einer Grenze in ein anderes Land).</li><li>Vermeiden Sie [Eisstraßen](https://wiki.openstreetmap.org/wiki/Key:ice_road) (saisonale Straßen in kalten Regionen, die auf gefrorenem Wasser angelegt sind) und [Furten](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (Teile einer Autobahn, über die ein Wasserlauf führt). </li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (eine Art Wassertransport, der Fahrzeuge über Gewässer befördert).</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway).</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone).</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (Autotransportzüge, die zwei Orte verbinden, die auf der Straße nicht leicht zugänglich sind).</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel).</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (nur für Allradfahrzeuge geeignet).</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | Für die Routenplanung von Autos wird angenommen, dass die Oberfläche der Straßen [gepflastert](https://wiki.openstreetmap.org/wiki/Key:surface) ist, sofern nicht anders angegeben. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Private Zugangs Beschränkungen werden bei der Routenberechnung ignoriert. | Der Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wird in OSM verwendet, um Beschränkungen der Nutzung von Autobahnen und anderen Transportwegen sowie von Gebäuden, Eingängen, Annehmlichkeiten und Freizeiteinrichtungen zu beschreiben. |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (nur&nbsp;Auto) | <details><summary> Straßen, die für die Warenlieferung gesperrt sind, werden vermieden. </summary>![Goods delivery Android](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| Diese Option gilt nur für Fahrzeuge, die Güter mit einem Gewicht von nicht mehr als 3,5 Tonnen transportieren. Wenn Ihr Fahrzeuggewicht mehr als 3,5 Tonnen beträgt, sollten Sie das [LKW-Profil](#route-parameters---truck) verwenden. |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | Um eine kraftstoffeffiziente Routenplanung zu berechnen, begrenzt die Engine die Geschwindigkeit intern auf 60 km/h, die geschätzte Ankunftszeit ändert sich jedoch nicht. Im Falle von 2 gleichen Start-End-Routen (Autobahn (120 km/h) und Nebenstraße (60 km/h)) wird die kürzere Route ausgewählt. Für die Servicestraßen mit einer Geschwindigkeitsbegrenzung von &lt;60 km/h wird die schnellere Route ausgewählt. |


## Routenparameter - LKW {#route-parameters---truck}

:::note
Standardmäßig ist das *LKW-Profil* deaktiviert. Um dieses Profil für die Routenplanung zu verwenden, müssen Sie es unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.
:::

Die Routenplanung für LKW ähnelt der Routenplanung für Autos, ist aber speziell für Fahrer großer Nutzfahrzeuge konzipiert. Sie berücksichtigt zusätzliche Faktoren wie Fahrzeug-[Höhen-, Gewichts- und Breitenbeschränkungen](../guidance/navigation-settings.md#size-parameters) und die Möglichkeit, gefährliche Güter zu transportieren (siehe Tabelle unten). Alle anderen Routeneinstellungen sind identisch mit der [Routenplanung für Autos](#route-parameters---car).

<Tabs groupId="operating-systems" queryString="current-os">

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
| *<Translate android="true" ids="transport_hazmat_title"/>* (für **EU-Region**) | <details><summary> Lokale Behörden können den Transport gefährlicher Materialien auf einigen Straßen oder in Tunneln verbieten. </summary> ![Transporting of hazardous materials Android](@site/static/img/navigation/routing/routing_truck_hazmat_andr.png) </details> | Wenn aktiviert, berücksichtigt der LKW-Routenmechanismus den OSM-Tag *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*. Sie können eine der fünf Kategorien (*A, B, C, D, E*) gefährlicher Materialien gemäß den **EU-Beschränkungen** auswählen. |
| *<Translate android="true" ids="dangerous_goods"/>* (nur wenn **USA-Region** ausgewählt ist) | <details><summary> Die Regeln für den Transport gefährlicher Güter in den USA unterscheiden sich von denen in der EU. Wird nur angezeigt, wenn die Fahrregion auf USA eingestellt ist. Sie können mehrere Klassen auswählen. </summary> ![Transporting of hazardous materials Android](@site/static/img/navigation/routing/routing_truck_dangerous_goods_andr.png) </details> | Wählen Sie einen der Typen (von 1 bis 9) gefährlicher Materialien gemäß den [**USA-Beschränkungen**](https://www.iafc.org/topics-and-tools/hazmat/fusion-center/transportation-commodities/dot-hazard-classification-system). Der Transport gefährlicher Materialien ist auf einigen Straßen und in Tunneln verboten. <ul><li>1. *Sprengstoffe* </li><li> 2. *Gase* </li><li> 3. *Entzündliche Flüssigkeiten* </li><li> 4. *Entzündliche Feststoffe* </li><li> 5. *Oxidierende Mittel und organische Peroxide* </li><li> 6. *Toxische und infektiöse Substanzen* </li><li> 7. *Radioaktive Substanzen* </li><li> 8. *Ätzende Substanzen* </li><li> 9. *Verschiedenes* </li></ul> |


## Routenparameter - Motorrad {#route-parameters---motorcycle}

:::note
Standardmäßig ist das *Motorrad-Profil* deaktiviert. Um dieses Profil für die Routenplanung zu verwenden, müssen Sie es unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.
:::

Die Motorrad-Routenplanung ist der Prozess der Erstellung einer speziell für Motorradreisen optimierten Route. Diese Art der Routenplanung berücksichtigt die einzigartigen Bedürfnisse und Vorlieben von Motorradfahrern und bietet die bestmöglichen Fahrbedingungen. Routen werden unter Berücksichtigung einer Reihe von Parametern festgelegt, wie z.B. die Wahl des Straßenbelags (z.B. können schlechte Straßenbedingungen bevorzugt oder vermieden werden), die Vermeidung von Staus, die Zugänglichkeit der Infrastruktur oder die Sicherheit.


## Andere Routeneinstellungen {#other-routing-settings}

- Der Routing-Algorithmus kann auch temporäre Einschränkungen berücksichtigen, die in OpenStreetMap angegeben sind. Dies kann mit der Option *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)* erfolgen. Beachten Sie, dass in einigen Fällen Informationen von OSM veraltet sein können.

- Im Abschnitt [*Route neu berechnen*](../../navigation/guidance/navigation-settings.md#recalculate-route) der *Routenparameter* können Sie Optionen zur Routenneuberechnung aktivieren und anpassen.

- Im Abschnitt [*Entwicklung*](../guidance/navigation-settings.md#development-settings) der *Routenparameter* können Sie neue Routing-Funktionen ausprobieren, die sich derzeit in der Testphase befinden. Beachten Sie, dass diese Einstellungen nur verfügbar sind, wenn das [OsmAnd-Entwicklungs-Plugin](../../plugins/development.md) aktiviert ist.

- Die Einstellung *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in der *iOS*-Version von OsmAnd befindet sich unter *Navigationseinstellungen → Routenparameter* (für *Android* unter *Fahrzeugparameter → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Diese Einstellung wird auf unbekannten Straßen ohne Geschwindigkeitsbegrenzungen verwendet. Dies ist am häufigsten der Fall, wenn eine Strecke oder eine Online-Route navigiert wird. Sie muss entsprechend den Parametern Ihres Fahrzeugs eingestellt werden.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Die richtige Konfiguration der Einstellungen hilft Ihnen, Probleme bei der Erstellung einer Route zu vermeiden. Sie können die am besten geeignete Route je nach Fahrzeugtyp und Straßenbeschränkungen auswählen und die Reisezeit berechnen.

> *Zuletzt aktualisiert: Juli 2024*