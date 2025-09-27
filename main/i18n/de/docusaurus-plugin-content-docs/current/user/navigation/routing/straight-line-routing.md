---
source-hash: 1ca5ebf392132069b1b5beabb8bfe492c629807a3258b756d15d406a2613de59
sidebar_position: 10
title:  Luftlinien-Routing (Flugzeug)
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

Im Gegensatz zu herkömmlichen Routing-Algorithmen, die Straßen, Wege oder vordefinierte Routen verwenden, berechnet das Luftlinien-Routing die kürzeste Entfernung zwischen zwei Punkten auf der Karte als gerade Linie. Diese Funktion kann für aktive Wanderer nützlich sein, die abseits von Wegen routen oder abgelegene Gebiete erkunden möchten, in denen herkömmliche Routen möglicherweise nicht verfügbar sind. Für Piloten von Leichtflugzeugen und Schiffskapitäne kann die Verwendung des *Luftlinien-Routentyps* bei der Navigation sehr nützlich sein.

<!-- ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png)  -->

- Das *Luftlinien*-Routing berücksichtigt keine Hindernisse oder Barrieren, die im Gelände vorhanden sein können, wie Berge, Flüsse oder dichte Wälder.
- Es liefert keine Informationen über die Beschaffenheit des Geländes, den Schwierigkeitsgrad der Route oder andere relevante Faktoren, die die Sicherheit oder Durchführbarkeit der Route beeinträchtigen könnten (der Abschnitt [Routendetails](../setup/route-details.md) ist leer).

![Luftlinien-Navigationstyp Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Routenparameter - Luftlinie {#route-parameters---straight-line}

:::note
Das Luftlinien-Routing ist mit dem *Flugzeugprofil* verknüpft. Standardmäßig ist dieses Profil deaktiviert. Um dieses Profil für das Routing zu verwenden, müssen Sie es unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.
:::

Das *Luftlinien*-Routing kann entsprechend Ihren Bedürfnissen im Abschnitt [Routenparameter](../guidance/navigation-settings.md#route-parameters) der Navigationseinstellungen konfiguriert werden.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Luftlinien-Routing-Einstellungen Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Luftlinien-Routing-Einstellungen iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* |  <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/>  </summary>![Luftlinien-Neuberechnung Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details>  | Wenn der Winkel zwischen der berechneten Route und der tatsächlichen Geolokalisierung größer ist als der von Ihnen eingestellte, wird der kürzeste Weg von Ihrer aktuellen Position zur berechneten Route erstellt. Mit anderen Worten, OsmAnd berechnet ein zusätzliches Routensegment zur zuvor berechneten Route. |