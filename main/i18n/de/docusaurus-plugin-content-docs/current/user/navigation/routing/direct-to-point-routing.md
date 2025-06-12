---
source-hash: 7bb36bac225a4637bd0fd319dba2e8fd27253ed4e7e1a35a1b7cda4be6a24614
sidebar_position: 9
title:  Direktpunkt-Routing (Boot)
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

Das Direktpunkt-Routing in OsmAnd ist eine nützliche Funktion, mit der Sie direkt zu einem bestimmten Punkt auf der Karte navigieren können, ohne einer vordefinierten Route oder einem Straßennetz folgen zu müssen. Diese Funktion kann von Bootsführern,
Outdoor-Enthusiasten oder von Rettungsdiensten bei Rettungseinsätzen genutzt werden. Insgesamt ist das Direktpunkt-Routing eine flexible und vielseitige Funktion, die in einer Vielzahl von Situationen eingesetzt werden kann, in denen herkömmliche Routing-Methoden möglicherweise nicht geeignet oder effektiv sind.

![Direktpunkt-Navigationstyp Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

Ein Punkt auf einer Linie ist ein virtueller Punkt, dessen Entfernung zum Ziel dieselbe ist wie die Entfernung von Ihrem aktuellen Standort, aber es ist keine Projektion Ihres aktuellen Standorts auf eine Linie. Dies erleichtert die Fortschrittsmessung, und Sie können das Messwerkzeug verwenden, um die korrekte Entfernung zu erhalten.


## Routenparameter - Direktpunkt {#route-parameters---direct-to-point}

Der Routing-Typ *Direktpunkt* ist nicht mit einem Profil verknüpft und kann mit verschiedenen Profilen verwendet werden.
Diese Art des Routings berücksichtigt keine Hindernisse oder Barrieren, die im Gelände vorhanden sein können, wie Berge, Flüsse oder dichte Wälder. Es liefert auch keine Informationen über die Qualität des Geländes, den Schwierigkeitsgrad der Route oder andere relevante Faktoren, die die Sicherheit oder Machbarkeit der Route beeinflussen können (Abschnitt [Routendetails](../setup/route-details.md) ist leer).

:::note
Bei Verwendung der Navigationstypen Direktpunkt und Boot benötigen Sie [Tiefenlinien-Daten](../../plugins/nautical-charts.md#nautical-map-style), die in *Karte konfigurieren* aktiviert und eingestellt werden können.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → beliebiges Profil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Direktpunkt-Routing-Einstellungen](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → beliebiges Profil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Direktpunkt-Routing-Einstellungen iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>


## Weitere Routing-Einstellungen {#other-routing-settings}

- Im Abschnitt [*Route neu berechnen*](../../navigation/guidance/navigation-settings.md#recalculate-route) der *Routenparameter* können Sie die Optionen zur Neuberechnung der Route aktivieren und anpassen. Der Standardwert ist 0 Meter Abweichung, was bedeutet, dass die Route nicht neu berechnet wird.

- Im Abschnitt [*Entwicklungseinstellungen*](../guidance/navigation-settings.md#development-settings) der *Routenparameter* können Sie neue Routing-Funktionen ausprobieren, die sich derzeit in der Testphase befinden. Beachten Sie, dass diese Einstellungen nur verfügbar sind, wenn das [OsmAnd-Entwicklungs-Plugin](../../plugins/development.md) aktiviert ist.

- Die Einstellung *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in der *iOS*-Version von OsmAnd befindet sich unter *Navigationseinstellungen → Routenparameter* (für *Android* unter *Fahrzeugparameter → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Diese Einstellungen können auch für das *Direktpunkt*-Routing festgelegt werden. Sie werden zur Berechnung der voraussichtlichen Ankunftszeit verwendet.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Die richtige Konfiguration der Einstellungen hilft Ihnen, Probleme bei der Routenerstellung zu vermeiden. Sie können die am besten geeignete Route je nach Fahrzeugtyp und Straßenbeschränkungen auswählen sowie die Fahrzeit berechnen.

> *Zuletzt aktualisiert: Juni 2024*