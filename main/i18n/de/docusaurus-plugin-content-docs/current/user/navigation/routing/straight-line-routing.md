---
source-hash: 7e3135f97cb0856e50ca46f17778ece558a18d14044f072d10d8739db6285192
sidebar_position: 10
title:  Geradlinige Routenführung (Flugzeug)
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


## Überblick {#overview}

Im Gegensatz zu herkömmlichen Routing-Algorithmen, die Straßen, Wanderwege oder vordefinierte Routen verwenden, berechnet die Geradlinige Routenführung die kürzeste Entfernung zwischen zwei Punkten auf der Karte als gerade Linie. Diese Funktion kann für aktive Wanderer nützlich sein, die abseits von Wegen oder in abgelegenen Gebieten, in denen herkömmliche Routen möglicherweise nicht verfügbar sind, routen möchten. Für Piloten von Leichtflugzeugen und Kapitäne von Schiffen kann die Verwendung des Routentyps *Gerade Linie* bei der Navigation sehr nützlich sein.

<!-- ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png)  -->

- Die Routenführung *Gerade Linie* berücksichtigt keine Hindernisse oder Barrieren, die im Gelände vorhanden sein können, wie Berge, Flüsse oder dichte Wälder.
- Sie liefert keine Informationen über die Qualität des Geländes, den Schwierigkeitsgrad der Route oder andere relevante Faktoren, die die Sicherheit oder Durchführbarkeit der Route beeinflussen können (Der Abschnitt [Routendetails](../setup/route-details.md) ist leer).

![Straight-line Navigation type Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Routenparameter - Gerade Linie {#route-parameters---straight-line}

:::note
Die Geradlinige Routenführung ist mit dem *Flugzeugprofil* verknüpft. Standardmäßig ist dieses Profil deaktiviert. Um dieses Profil für die Routenführung zu verwenden, müssen Sie es unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.
:::

Die Routenführung *Gerade Linie* kann in den [Routenparametern](../guidance/navigation-settings.md#route-parameters) der Navigationseinstellungen an Ihre Bedürfnisse angepasst werden.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Straight line routing settings Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Straight line routing settings iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* |  <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/>  </summary>![Straight line recalculation Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details>  | Wenn der Winkel zwischen der berechneten Route und der tatsächlichen Geolokalisierung größer ist als von Ihnen eingestellt, wird der kürzeste Weg von Ihrer aktuellen Position zur berechneten Route erstellt. Mit anderen Worten, OsmAnd berechnet ein zusätzliches Routensegment zur zuvor berechneten Route. |

## Weitere Routing-Einstellungen {#other-routing-settings}

- Im Abschnitt [*Route neu berechnen*](../../navigation/guidance/navigation-settings.md#recalculate-route) der *Routenparameter* ist die Entfernung, bei der die Route für die *Geradlinige Routenführung* neu berechnet wird, standardmäßig auf 500 Meter eingestellt.

- Im Abschnitt [*Entwicklungseinstellungen*](../guidance/navigation-settings.md#development-settings) der *Routenparameter* können Sie neue Routing-Funktionen ausprobieren, die sich derzeit in der Testphase befinden. Beachten Sie, dass diese Einstellungen nur verfügbar sind, wenn das [OsmAnd Entwicklung-Plugin](../../plugins/development.md) aktiviert ist.

- Die Einstellung *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in der *iOS*-Version von OsmAnd befindet sich unter *Navigationseinstellungen → Routenparameter* (für *Android* unter *Fahrzeugparameter → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Diese Einstellungen können auch für das Routing *Direkt zum Punkt* festgelegt werden. Sie werden zur Berechnung der voraussichtlichen Ankunftszeit verwendet.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Die richtige Konfiguration der Einstellungen hilft Ihnen, Probleme bei der Routenerstellung zu vermeiden. Sie können die am besten geeignete Route je nach Fahrzeugtyp und Straßenbeschränkungen auswählen sowie die Fahrzeit berechnen.

> *Zuletzt aktualisiert: Juni 2024*