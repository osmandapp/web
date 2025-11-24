---
source-hash: 23c4f778402ca496deaebdf1d6a07d760d1d6b0418031a36f35310e5644277da
sidebar_position: 8
title:  Boots-Routing
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

Boots-Routing kann ein wertvolles Werkzeug für jeden sein, der gerne mit dem Boot oder Segelboot auf Kanälen, Flüssen oder Fahrrinnen unterwegs ist. Aufgrund des Fehlens der meisten Fahrrinnen in den OpenStreetMap-Daten wird das Boots-Routing für die **Navigation auf offenem Wasser** *nicht empfohlen*. Es wird stattdessen empfohlen, **[Direkt zum Punkt](#direct-to-point-routing-for-boat)** zu verwenden. Wenn Tiefenlinien aktiviert sind, kann es Ihnen helfen, auf dem Wasser sicher zu bleiben, indem Gefahren wie seichtes Wasser, Felsen oder andere Hindernisse vermieden werden.  
Die OsmAnd Boots-Routing-Engine berücksichtigt auch die Eigenschaften der Wasserstraßen und des Bootes selbst.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bootsnavigationsbildschirm Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Bootsnavigationsbildschirm iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)  

</TabItem>

</Tabs>  

## Routenparameter - Boot {#route-parameters---boat}

:::note
Standardmäßig ist das *Bootsprofil* deaktiviert. Um dieses Profil für das Routing zu verwenden, müssen Sie es unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.
:::

Das Boots-Routing kann nach Ihren Bedürfnissen im Abschnitt [Routenparameter](../../navigation/guidance/navigation-settings.md#route-parameters) der Navigationseinstellungen konfiguriert werden.  

Typischerweise wird das *Boots-Routing* mit dem Bootsprofil verwendet (das zuletzt zusammen mit dem [Nautik-Plugin](../../plugins/nautical-charts.md) aktiviert wurde).  Es ist jedoch auch möglich, das Boots-Routing mit anderen Profilen zu verwenden, und verschiedene [Routing-Typen](#other-routing-types-for-boat) können ebenfalls im Bootsprofil eingesetzt werden.  


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Boots-Routing-Einstellungen Android](@site/static/img/navigation/routing/boat_route_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Boots-Routing-Einstellungen iOS](@site/static/img/navigation/routing/boat_route_ios.png)  

</TabItem>

</Tabs>

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Ermöglicht die Nutzung von Bächen und Abflussgräben für die Bootsnavigation. Die Aktivierung dieser Option kann für kleine Boote wie Kanus, Kajaks, Flöße und Ruderboote nützlich sein. |  [Bäche](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) sind natürlich entstandene Wasserläufe, die zu schmal sind, um als Fluss bezeichnet zu werden. [Abflussgräben](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) sind künstliche Wasserwege, typischerweise mit Beton oder Ähnlichem ausgekleidet, die dazu dienen, überschüssiges Wasser wie Regenwasser oder Grauwasser abzuführen.|
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* |  Das Aktivieren dieser Option ermöglicht es Ihnen, zeitweise wasserführende Wasserwege für die Bootsnavigation zu nutzen.   | Das Tag [Intermittent](https://wiki.openstreetmap.org/wiki/Key:intermittent) wird verwendet, um anzuzeigen, dass ein Wasserweg nicht ständig Wasser führt.  |
| *Fähren erlauben* | Ermöglicht das Routing über Fährrouten. | Verwendet `route=ferry`, wo in OSM vorhanden. Keine neuen Karten erforderlich. |

:::note Wassernavigation und Einschränkungen

1. Das Bootsprofil ist für das Routing auf Flüssen, Seen und anderen Wasserstraßen konzipiert. Es unterstützt OSM-Tags wie:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, etc.

2. Das Bootsprofil unterstützt ebenfalls **Fährrouten (`route=ferry`)**, wenn die Option **Fähren erlauben** aktiviert ist. Das bedeutet, dass Fährrouten, falls sie auf der Karte vorhanden sind, bei der Berechnung von Bootsrouten verwendet werden.

3. Wenn in OSM keine geeigneten Wasserstraßen oder Fährrouten kartiert sind, kann der Routing-Algorithmus möglicherweise keine richtige Route erstellen. In solchen Fällen können Sie das Werkzeug [Route planen](../../plan-route/create-route.md) verwenden und Wegpunkte manuell platzieren.

:::

## Andere Routing-Typen für Boote {#other-routing-types-for-boat}

Der [Boots-Routing](#route-parameters---boat)-Typ ist der Standard-Routing-Algorithmus für das Bootsprofil. Sie können jedoch auch einen anderen Routing-Typ wählen, der ebenfalls für die Bootsnavigation geeignet ist:  

 - [Direkt-zum-Punkt-Routing für Boote](./boat-navigation.md#direct-to-point-routing-for-boat)
 - [Luftlinien-Routing für Boote](./boat-navigation.md#straight-line-routing-for-boat)

Es ist wichtig zu beachten, dass die Routing-Typen *Direkt-zum-Punkt* und *Luftlinie* nur auf offenem Wasser verwendet werden sollten, wo es keine Hindernisse oder Gefahren für die Navigation gibt. Wenn Sie in einem Wasserweg mit einem bestimmten Kanal oder einer bestimmten Route navigieren, sollten Sie den Boots-Routing-Typ in OsmAnd verwenden, der Sie durch die richtigen Navigationskanäle führt und flache Bereiche oder andere Gefahren vermeidet. Einige kartierte Gefahren basierend auf OSM-Tags hazard=* können auf der Karte als Gefahren-POI-Icons oder Textbeschriftungen angezeigt werden.  

Diese Routing-Typen für das Bootsprofil können über folgenden Pfad aktiviert werden: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> oder ein anderes) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.


### Direkt-zum-Punkt-Routing für Boote {#direct-to-point-routing-for-boat}

:::note
Bei Verwendung der Navigationstypen Direkt-zum-Punkt und Boot benötigen Sie [Tiefenkonturdaten](../../plugins/nautical-charts.md#nautical-map-style), die unter *Karte konfigurieren* aktiviert und eingestellt werden können.
:::

Der [Direkt-zum-Punkt-Routing-Typ](./direct-to-point-routing.md) kann mit dem Bootsprofil verwendet werden, wenn Sie Ihr Boot auf offenem Wasser navigieren möchten, ohne einer bestimmten Route oder einem Wasserweg zu folgen. Dieser Routing-Typ ermöglicht es Ihnen, einen Zielpunkt festzulegen, und OsmAnd berechnet einen direkten Weg von Ihrem aktuellen Standort zu diesem Punkt. Diese Art des Routings berücksichtigt nicht die Eigenschaften Ihres Bootes wie Mindest- und Höchstgeschwindigkeiten, Höhe und Breite. Ihre Route wird bei Abweichungen nicht neu berechnet.

![Direkt-zum-Punkt Navigationstyp Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)


### Luftlinien-Routing für Boote {#straight-line-routing-for-boat}

Der [Luftlinien-Routing-Typ](./straight-line-routing) kann mit dem Bootsprofil verwendet werden, wenn Sie Ihr Boot auf offenem Wasser navigieren möchten, aber lieber einer geraden Linie anstelle einer gekrümmten Route zu Ihrem Zielpunkt folgen. Dies kann nützlich sein, wenn Sie zu einem entfernten Punkt navigieren, der beispielsweise am Horizont sichtbar ist.

![Luftlinien-Navigationstyp Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)