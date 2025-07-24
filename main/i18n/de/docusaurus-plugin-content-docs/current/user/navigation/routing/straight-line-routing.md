---
source-hash: 100d908b7334f94fa58c6e50f580170815bc0544acdf8e49f048fef77daafbc2
sidebar_position: 10
title: Geradlinige Routenführung (Flugzeug)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


<InfoIncompleteArticle/>


## Übersicht {#overview}

Im Gegensatz zu herkömmlichen Routing-Algorithmen, die Straßen, Wege oder vordefinierte Routen verwenden, berechnet die geradlinige Routenführung die kürzeste Entfernung zwischen zwei Punkten auf der Karte als gerade Linie. Diese Funktion kann für aktive Wanderer nützlich sein, die abseits von Wegen routen oder abgelegene Gebiete erkunden möchten, in denen traditionelle Routen möglicherweise nicht verfügbar sind. Für Piloten von Leichtflugzeugen und Schiffskapitäne kann die Verwendung des *Geradlinigen Routentyps* bei der Navigation sehr nützlich sein.

<!-- ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png) -->

- Die *Geradlinige* Routenführung berücksichtigt keine Hindernisse oder Barrieren, die im Gelände vorhanden sein können, wie Berge, Flüsse oder dichte Wälder.
- Sie liefert keine Informationen über die Qualität des Geländes, den Schwierigkeitsgrad der Route oder andere relevante Faktoren, die die Sicherheit oder Durchführbarkeit der Route beeinflussen könnten (Abschnitt [Routendetails](../setup/route-details.md) ist leer).

![Geradliniger Navigationstyp Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Routenparameter - Geradlinig {#route-parameters---straight-line}

:::note
Die geradlinige Routenführung ist mit dem *Flugzeugprofil* verknüpft. Standardmäßig ist dieses Profil deaktiviert. Um dieses Profil für die Routenführung zu verwenden, müssen Sie es in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.
:::

Die *Geradlinige* Routenführung kann in den [Routenparametern](../guidance/navigation-settings.md#route-parameters) der Navigationseinstellungen an Ihre Bedürfnisse angepasst werden.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Einstellungen für geradlinige Routenführung Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Einstellungen für geradlinige Routenführung iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* | <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/> </summary>![Geradlinige Neuberechnung Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details> | Wenn der Winkel zwischen der berechneten Route und der tatsächlichen Geolokalisierung größer ist als der von Ihnen eingestellte, wird der kürzeste Weg von Ihrer aktuellen Position zur berechneten Route erstellt. Mit anderen Worten, OsmAnd berechnet ein zusätzliches Routensegment zur zuvor berechneten Route. |


## Weitere Routing-Einstellungen {#other-routing-settings}

- Im Abschnitt [*Route neu berechnen*](../../navigation/guidance/navigation-settings.md#recalculate-route) der *Routenparameter* ist die Entfernung, bei der die Route für die *Geradlinige Routenführung* neu berechnet wird, standardmäßig auf 500 Meter eingestellt.

- Im Abschnitt [*Entwicklung*](../guidance/navigation-settings.md#development-settings) der *Routenparameter* können Sie neue Routing-Funktionen ausprobieren, die sich derzeit in der Testphase befinden. Beachten Sie, dass diese Einstellungen nur verfügbar sind, wenn das [OsmAnd Entwicklungs-Plugin](../../plugins/development.md) aktiviert ist.

- Die Einstellung *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in der *iOS*-Version von OsmAnd befindet sich unter *Navigationseinstellungen → Routenparameter* (für *Android* unter *Fahrzeugparameter → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Diese Einstellungen können auch für die *Direkt-zum-Punkt*-Routenführung festgelegt werden. Sie werden zur Berechnung der voraussichtlichen Ankunftszeit verwendet.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Die richtige Konfiguration der Einstellungen hilft Ihnen, Probleme bei der Routenerstellung zu vermeiden. Sie können die am besten geeignete Route je nach Fahrzeugtyp und Straßenbeschränkungen auswählen und die Reisezeit berechnen.

> *Zuletzt aktualisiert: Juni 2024*