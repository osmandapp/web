---
source-hash: 13fd1af76a8741fd09464e167ec356fac8a95838f37bb43f0fc4715f11186d0d
sidebar_position: 9
title:  Direkt-zum-Punkt-Routing (Boot)
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

Das Direkt-zum-Punkt-Routing in OsmAnd ist eine nützliche Funktion, die es Ihnen ermöglicht, direkt zu einem bestimmten Punkt auf der Karte zu navigieren, ohne einer vordefinierten Route oder einem Straßennetz folgen zu müssen. Diese Funktion kann von Bootsführern, Outdoor-Enthusiasten oder von Rettungsdiensten bei Rettungseinsätzen genutzt werden. Insgesamt ist das Direkt-zum-Punkt-Routing eine flexible und vielseitige Funktion, die in einer Vielzahl von Situationen eingesetzt werden kann, in denen herkömmliche Routing-Methoden möglicherweise nicht geeignet oder effektiv sind.

![Direkt-zum-Punkt-Navigationstyp Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

Ein Punkt auf einer Linie ist ein virtueller Punkt, dessen Entfernung zum Ziel dieselbe ist wie die Entfernung von Ihrem aktuellen Standort, aber es ist keine Projektion Ihres aktuellen Standorts auf eine Linie. Dies erleichtert die Messung des Fortschritts, und Sie können das Messwerkzeug verwenden, um die korrekte Entfernung zu ermitteln.

## Routenparameter - Direkt zum Punkt {#route-parameters---direct-to-point}

Der Routing-Typ *Direkt zum Punkt* ist nicht mit einem Profil verknüpft und kann mit verschiedenen Profilen verwendet werden.
Diese Art des Routings berücksichtigt keine Hindernisse oder Barrieren, die im Gelände vorhanden sein können, wie z. B. Berge, Flüsse oder dichte Wälder. Es liefert auch keine Informationen über die Qualität des Geländes, den Schwierigkeitsgrad der Route oder andere relevante Faktoren, die die Sicherheit oder Durchführbarkeit der Route beeinträchtigen könnten (der Abschnitt [Routendetails](../setup/route-details.md) ist leer).

:::note
Bei der Verwendung der Navigationstypen "Direkt zum Punkt" und "Boot" benötigen Sie [Tiefenlinien-Daten](../../plugins/nautical-charts.md#nautical-map-style), die in *Karte konfigurieren* aktiviert und eingestellt werden können.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → beliebiges Profil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Direkt-zum-Punkt-Routing-Einstellungen](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → beliebiges Profil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Direkt-zum-Punkt-Routing-Einstellungen iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>