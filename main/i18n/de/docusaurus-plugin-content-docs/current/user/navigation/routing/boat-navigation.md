---
source-hash: 11f96851fe0f021db695918bd99476a396fc4a1e4d35dc2c02f19b4d9f965751
sidebar_position: 8
title: Bootsnavigation
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

Bootsnavigation kann ein wertvolles Werkzeug für jeden sein, der gerne mit dem Boot oder Segelboot auf Kanälen, Flüssen oder Wasserstraßen unterwegs ist. Aufgrund des Mangels an den meisten Wasserstraßen in OpenStreetMap-Daten wird die Bootsnavigation **nicht für die Navigation auf offenem Wasser empfohlen**. Stattdessen wird die Verwendung von **[Direkt zum Punkt](#direct-to-point-routing-for-boat)** vorgeschlagen. Mit aktivierten Tiefenlinien kann sie Ihnen helfen, sicher auf dem Wasser zu bleiben, indem Sie Gefahren wie Untiefen, Felsen oder andere Hindernisse vermeiden.
Die OsmAnd Bootsnavigation berücksichtigt auch die Eigenschaften der Wasserwege und des Bootes selbst.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bootsnavigation Bildschirm Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Bootsnavigation Bildschirm iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)

</TabItem>

</Tabs>

## Routenparameter - Boot {#route-parameters---boat}

:::note
Standardmäßig ist das *Bootsprofil* deaktiviert. Um dieses Profil für die Routenplanung zu verwenden, müssen Sie es unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.
:::

Die Bootsnavigation kann in den [Routenparametern](../../navigation/guidance/navigation-settings.md#route-parameters) der Navigationseinstellungen an Ihre Bedürfnisse angepasst werden.

Typischerweise wird die *Bootsnavigation* mit dem Bootsprofil verwendet (das letzte, das zusammen mit dem [Nautik-Plugin](../../plugins/nautical-charts.md) aktiviert wurde). Es ist jedoch möglich, die Bootsnavigation auch mit anderen Profilen zu verwenden, und verschiedene [Routing-Typen](#other-routing-types-for-boat) können auch im Bootsprofil eingesetzt werden.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Bootsnavigation Einstellungen Android](@site/static/img/navigation/routing/boat_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Bootsnavigation Einstellungen iOS](@site/static/img/navigation/routing/boat_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Ermöglicht die Verwendung von Bächen und Entwässerungsgräben für die Bootsnavigation. Die Aktivierung dieser Option kann für kleine Boote wie Kanus, Kajaks, Flöße, Ruderboote nützlich sein. |  [Bäche](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) sind natürlich entstandene Wasserläufe, die zu schmal sind, um als Fluss bezeichnet zu werden. [Entwässerungsgräben](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) sind künstliche Wasserläufe, typischerweise mit Beton oder ähnlichem ausgekleidet, die zur Ableitung von überschüssigem Wasser wie Regenwasser oder Grauwasser verwendet werden. |
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* |  Wenn Sie diese Option aktivieren, können Sie intermittierende Wasserwege für die Bootsnavigation verwenden.   | Das Tag [Intermittent](https://wiki.openstreetmap.org/wiki/Key:intermittent) wird verwendet, um anzuzeigen, dass ein Wasserweg nicht dauerhaft Wasser enthält.  |


:::note Wasser Navigation und Einschränkungen

1. Das Bootsprofil ist für die Routenplanung entlang von Flüssen, Seen und anderen Wasserwegen konzipiert. Es unterstützt OSM-Tags wie:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, etc.

2. Das Bootsprofil **unterstützt keine Fährrouten (`route=ferry`)**. Das bedeutet, dass Fährrouten, auch wenn sie auf der Karte vorhanden sind, bei der Berechnung von Bootsrouten **nicht verwendet werden**.

3. Um einer Fährlinie manuell zu folgen:

    - Verwenden Sie das Werkzeug [Route planen](../../plan-route/create-route.md) und setzen Sie Wegpunkte manuell.
    - Verwenden Sie das Autoprofil, das Fährrouten unterstützt

:::

## Andere Routing-Typen für Boot {#other-routing-types-for-boat}

Der [Bootsnavigationstyp](#route-parameters---boat) ist der Standard-Routing-Algorithmus für das Bootsprofil. Sie können jedoch auch einen anderen Routing-Typ wählen, der ebenfalls für die Bootsnavigation geeignet ist:

 - [Direkt zum Punkt-Routing für Boot](./boat-navigation.md#direct-to-point-routing-for-boat)
 - [Geradliniges Routing für Boot](./boat-navigation.md#straight-line-routing-for-boat)

Es ist wichtig zu beachten, dass die Routing-Typen *Direkt zum Punkt* und *Gerade Linie* nur auf offenem Wasser verwendet werden sollten, wo es keine Hindernisse oder Gefahren für die Navigation gibt. Wenn Sie in einem Wasserweg mit einem bestimmten Kanal oder einer bestimmten Route navigieren, sollten Sie den Bootsnavigationstyp in OsmAnd verwenden, der Sie durch die richtigen Navigationskanäle führt und flache Bereiche oder andere Gefahren vermeidet.

Diese Routing-Typen für das Bootsprofil können über den folgenden Pfad aktiviert werden: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> oder ein anderes) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.


### Direkt zum Punkt-Routing für Boot {#direct-to-point-routing-for-boat}

:::note
Bei der Verwendung der Navigationstypen Direkt zum Punkt und Boot benötigen Sie [Tiefenlinienkarten](../../plugins/nautical-charts.md#nautical-map-style), die unter *Karte konfigurieren* aktiviert und eingestellt werden können.
:::

Der [Direkt zum Punkt-Routing-Typ](./direct-to-point-routing.md) kann mit dem Bootsprofil verwendet werden, wenn Sie Ihr Boot auf offenem Wasser navigieren möchten, ohne einer bestimmten Route oder einem Wasserweg zu folgen. Mit diesem Routing-Typ können Sie einen Zielpunkt festlegen, und OsmAnd berechnet einen direkten Weg von Ihrem aktuellen Standort zu diesem Punkt. Dieser Routing-Typ berücksichtigt nicht die Eigenschaften Ihres Bootes wie Mindest- und Höchstgeschwindigkeit, Höhe und Breite. Ihre Route wird im Falle einer Abweichung nicht neu berechnet.

![Direkt zum Punkt Navigationstyp Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)


### Geradliniges Routing für Boot {#straight-line-routing-for-boat}

Der [Geradlinige Routing-Typ](./straight-line-routing) kann mit dem Bootsprofil verwendet werden, wenn Sie Ihr Boot auf offenem Wasser navigieren möchten, aber lieber einer geraden Linie als einer gekrümmten Route zu Ihrem Zielpunkt folgen möchten. Dies kann nützlich sein, wenn Sie zu einem entfernten Punkt navigieren, der am Horizont sichtbar ist, zum Beispiel.

![Geradliniger Navigationstyp Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)


## Weitere Routing-Einstellungen {#other-routing-settings}

- Der Routing-Algorithmus kann auch temporäre Einschränkungen berücksichtigen, die in OpenStreetMap angegeben sind. Dies kann mit der Option *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)* erfolgen. Beachten Sie, dass die Informationen von OSM in einigen Fällen veraltet sein können.

- Im Abschnitt [*Route neu berechnen*](../../navigation/guidance/navigation-settings.md#recalculate-route) der *Routenparameter* können Sie die Optionen zur Routen Neuberechnung aktivieren und anpassen.

- Im Abschnitt [*Entwicklung*](../guidance/navigation-settings.md#development-settings) der *Routenparameter* können Sie neue Routing-Funktionen ausprobieren, die sich derzeit in der Testphase befinden. Beachten Sie, dass diese Einstellungen nur verfügbar sind, wenn das [OsmAnd-Entwicklungs-Plugin](../../plugins/development.md) aktiviert ist.

- Die Einstellung *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in der *iOS*-Version von OsmAnd befindet sich unter *Navigationseinstellungen → Routenparameter* (für *Android* unter *Fahrzeugparameter → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Diese Einstellung wird auf unbekannten Straßen ohne Geschwindigkeitsbegrenzungen verwendet. Dies ist am häufigsten der Fall, wenn Sie eine Strecke oder eine Online-Route navigieren. Sie muss entsprechend den Parametern Ihres Fahrzeugs eingestellt werden.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Die richtige Konfiguration der Einstellungen hilft Ihnen, Probleme bei der Erstellung einer Route zu vermeiden. Sie können je nach Fahrzeugtyp und Straßenbeschränkungen die am besten geeignete Route auswählen und die Fahrzeit berechnen.

> *Zuletzt aktualisiert: Mai 2025*