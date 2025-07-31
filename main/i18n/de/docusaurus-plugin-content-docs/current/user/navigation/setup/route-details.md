---
source-hash: c79e974f36d7aa431b244d904400ae8e4b3fa0f00f5d843333d559e34b86a4b7
sidebar_position: 4
title:  Routendetails
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Überblick {#overview}

OsmAnd ermöglicht es Ihnen, die beste Route zu finden und ihre Details zu erkunden. Die App bietet detaillierte Informationen über die Route, wie z.B. Entfernung, [Fahrzeit](#distance--time--co2), [Oberflächentyp](#road-attributes), [Höhenunterschiede](#elevation-info), [CO2-Fußabdruckdaten](#distance--time--co2) und [Abbiegeinformationen](#turn-by-turn-information). Sie können die Route auch auf der Karte [analysieren](#analyze-on-map), Informationen über Streckenabschnitte abrufen, den Routenplan [ausdrucken](#print), die Route [speichern](#share--export-actions) und mit anderen teilen. Mit dieser Funktionalität kennen Sie immer die Routendetails und können Ihre Reise effizienter planen.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routendetails Android](@site/static/img/navigation/route/route_detail_overview_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routendetails iOS](@site/static/img/navigation/route/route_detail_overview_4_ios.png)

</TabItem>

</Tabs>


### Zugriff {#how-to-access}

Nach der Berechnung einer Route im [Navigationsmenü](./route-navigation.md#start--stop-navigation) haben Sie Zugriff auf die "Details" dieser Route. Diese Informationen sind nützlich, um die Routenplanung vor Reisebeginn zu verbessern oder um während der Fahrt Informationen über die bevorstehende Straße zu überprüfen.
Es gibt drei Möglichkeiten, auf das *Routendetails-Menü* zuzugreifen.

1. Gehen Sie zum Haupt-*Menü → Navigation*, legen Sie die Route fest und tippen Sie auf die Schaltfläche *Details*.
2. Tippen Sie auf das *Navigationssymbol* auf dem Kartenbildschirm, legen Sie die Route fest und tippen Sie auf die Schaltfläche *Details*.
3. Gehen Sie zum Menü *Meine Orte*, tippen Sie auf eine verfügbare Strecke in der Liste *Menü → Meine Orte → Strecken*, wählen Sie das *Navigationssymbol* im Strecken-Kontextmenü in der *Übersicht* und tippen Sie auf *Details*.

Je nach den ausgewählten [Profileinstellungen](../../personal/profiles.md) und dem ausgewählten [Routing-Typ](../../navigation/routing/osmand-routing.md#routing-types) werden einige Routendetails möglicherweise nicht angezeigt. Darüber hinaus hängen die Routendetails stark von der *OpenStreetMap-Datenabdeckung* ab.


## Entfernung / Zeit / CO2 {#distance--time--co2}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routendetails](@site/static/img/navigation/route/route_details_distance-time-CO2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsroute iOS](@site/static/img/navigation/route/route_details_distance-time-CO2_2_ios.png)

</TabItem>

</Tabs>

- ***Gesamtdistanz*** wird zwischen allen Routensegmenten berechnet, einschließlich Zwischenpunkten in den ausgewählten [Einheiten](../../personal/profiles.md#units--formats).

- ***Geschätzte Fahrzeit*** wird als Summe der Zeiten auf jedem Segment und Zeitstrafen an bestimmten Punkten berechnet. Jedes Navigationsprofil hat unterschiedliche Regeln für die Berechnung der Geschwindigkeit auf einem Segment und welche Strafen einbezogen werden sollen (konfiguriert in [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md)). Zum Beispiel nehmen Auto- und Fahrradprofile die Durchschnittsgeschwindigkeit pro Segment aus OpenStreetMap-Daten, aber Fußgänger-, Boots- und Flugzeugprofile verwenden die *Standardgeschwindigkeit* aus den [Navigationseinstellungen](../guidance/navigation-settings.md#default-speed--road-speeds).

- ***Geschätzte Ankunftszeit*** wird als Zeit ab jetzt in der Ortszeit des Ursprungs unter Verwendung der *Geschätzten Fahrzeit* berechnet.

- ***CO2-Fußabdruckdaten*** schätzen grob, wie viel CO2 bei der Befolgung der Route produziert wird. Sie müssen den [Kraftstoffmotortyp](../guidance/navigation-settings.md#fuel-used-by-motor) in den Fahrzeugparametern konfigurieren, um eine genauere Annäherung zu erhalten.


## Höheninformationen {#elevation-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routendetails](@site/static/img/navigation/route/route_details_info-block_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsroute iOS](@site/static/img/navigation/route/route_details_info-block_ios.png)

</TabItem>

</Tabs>

**Höheninformationen** werden in allen OsmAnd Offline-Routenprofilen bereitgestellt, außer für Profile, die die [Geradlinige Navigation](../routing/straight-line-routing.md) verwenden. Die Höhendaten sind Teil der OsmAnd Offline-Karten und werden basierend auf [öffentlichen SRTM-Quellen](https://en.wikipedia.org/wiki/Shuttle_Radar_Topography_Mission) berechnet.

- *Höhenbereich*. Zeigt die minimale / maximale Höhe auf der Route an.
- *Durchschnittliche Höhe*. Zeigt die gewichtete durchschnittliche Höhe auf der Route an.
- *Bergauf / Bergab*. Zeigt das Verhältnis des Weges zur Horizontalen an, wobei Null die Horizontalität und die Gradzahl eine höhere oder steilere Neigung angibt. Die Steigung zeigt die maximale Straßenneigung in Prozent von Ihrem Standort bis zum Ende des sichtbaren Diagramms oder für den ausgewählten Abschnitt der Route ohne den auf dem Bildschirm sichtbaren Standort.


***Eine Lizenz für DEM-Daten, die von OsmAnd zur Geländeerkennung verwendet werden***
Die Höhendaten auf der Karte (zwischen 70 Grad nördlicher Breite und 70 Grad südlicher Breite) wurden aus Messungen im Rahmen der *Shuttle Radar Topography Mission (SRTM)* gewonnen. Dabei wurde das *Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*, das primäre Bildgebungsinstrument im *NASA Earth Observation System*, verwendet. Vollständige Informationen finden Sie in der [Lizenz](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>DEM (DSM) Daten</summary>
 - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Die für dieses Produkt verwendeten Originaldaten wurden von JAXA’s AW3D bereitgestellt.<br/>
 - <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
 - <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummens, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
 - <a href="https://sonny.4lima.de">Sonnys LiDAR Digital Terrain Models of Europe</a> (DTM).

</details>


### Höhenprofil {#elevation-graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routendetails](@site/static/img/navigation/route/route_details_el_graph_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsroute iOS](@site/static/img/navigation/route/route_details_el_graph_ios.png)

</TabItem>

</Tabs>

Die [Diagramme](../../map/tracks/track-context-menu.md#altitude--speed-graphs) zeigen visuell Informationen über die Höhe und Steigung Ihrer Navigationsroute und Ihre aktuelle Position in diesem Diagramm mit der aktuellen Höhe und Steigung an. Das Diagramm wird auf zwei Achsen gezeichnet. Die X-Achse ist die Entfernung auf Ihrer Route. Die erste Y-Achse ist die Höhe über dem Meeresspiegel, deren Wert vom Gelände abhängt, und die zweite Y-Achse ist die angenäherte [Steigung](https://en.wikipedia.org/wiki/Grade_(slope)). Sie können das Höhenprofil für die gesamte Route oder nur für ein ausgewähltes Intervall anzeigen, indem Sie das Diagramm skalieren.

- ***Vergrößern/Verkleinern***. Standardmäßig zeigt das Diagramm die Route vom aktuellen Standort bis zu Ihrem Zielpunkt. Sie können [Zwei-Finger-Bewegungen](../../map/interact-with-map.md#gestures) verwenden, um für eine detailliertere Ansicht zu vergrößern und zu verkleinern. Sie können das Diagramm auch nach rechts, vorwärts auf der Route und rückwärts zum aktuellen Standort verschieben. *Solche Manipulationen beziehen sich auch auf den visuellen Informationsblock im Block [Straßenattribute](#road-attributes).*

- ***Standortnadel***. Wenn Sie die Informationen an einem bestimmten Punkt auf Ihrer Route sehen möchten, können Sie an einer beliebigen Stelle auf das Diagramm tippen, und ein Zeiger mit Höhe und Steigung in Prozent wird angezeigt.


## Auf Karte analysieren {#analyze-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routendetails Android](@site/static/img/navigation/route/navigation_route_analiz_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routendetails iOS](@site/static/img/navigation/route/navigation_route_analiz_ios.png)

</TabItem>

</Tabs>

Das Werkzeug **Auf Karte analysieren** ähnelt dem Werkzeug zur Anzeige von [Streckendetails](../../map/tracks/index.md#analyze-track-on-map) auf der Karte. Es ermöglicht Ihnen, verschiedene Diagramme anzuzeigen und visuell mit ihnen zu interagieren und den ausgewählten Punkt auf der Karte zu sehen.

Wenn Daten vorhanden sind, können Sie einen der folgenden Typen auswählen:

- *Y-Achse*:
   - [*Höhe*](../../map/tracks/track-context-menu.md#altitude). Dies ist der [Prozess](https://wiki.openstreetmap.org/wiki/Altitude) zur Ermittlung der Höhe über einem festen Niveau.
   - [*Steigung*](https://wiki.openstreetmap.org/wiki/Key:incline). Die [Steigung der Geländeform](https://en.wikipedia.org/wiki/Grade_(slope)) bedeutet den Tangens des Neigungswinkels der Oberfläche zur Horizontalen.
   - [*Geschwindigkeit*](../../map/tracks/track-context-menu.md#speed). Geschwindigkeitswerte beim Fahren auf einer Strecke.
   - Diagramme mit zwei Datentypen: &nbsp;*Höhe/Steigung*, &nbsp;*Höhe/Geschwindigkeit*, &nbsp;*Steigung/Geschwindigkeit*, &nbsp;*Animierter Zoom/Geschwindigkeit*.
- *X-Achse*:
   - *Entfernung*. Sie können Routendaten anzeigen, die sich auf die Länge der Route beziehen.
   - *Zeit*. Sie können Routendaten anzeigen, die sich auf die für diese Route berechnete Zeit beziehen.
   - *Tageszeit*. Sie können Routendaten zu bestimmten Tageszeiten anzeigen.


### Arten von Interaktionen {#type-of-interactions}

- *Tippen und Schieben*. Tippen Sie auf das Diagramm, um Informationen über den Streckenpunkt und die Bewegung entlang dessen anzuzeigen. Das Diagramm hebt die Position des Punktes auf der Karte hervor und zeigt Informationen dazu auf dem Lineal an.
- *Skalieren*. Skalieren Sie das Diagramm mit [Zwei-Finger-Gesten](../../map/interact-with-map.md#gestures).
- *Meinem Standort folgen* (*nur Android*). Sie können auf [Mein Standort](../../map/interact-with-map.md#my-location-and-zoom) tippen, um die Kartenansicht und das Diagramm mit Ihrem Standort zu synchronisieren. Während Sie sich bewegen, verschiebt sich das Diagramm von links nach rechts und zeigt Informationen vor Ihrem Weg an.


## Straßenattribute {#road-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_details"/>*

![Navigationsroute Android](@site/static/img/navigation/route/route_details_attributes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_details,shared_string_analysis"/> tab*

![Navigationsroute iOS](@site/static/img/navigation/route/route_details_attributes_ios.png)

</TabItem>

</Tabs>

Straßenattribute sind in den [Routendetails](#how-to-access) zugänglich und zeigen segmentbezogene Informationen aus OpenStreetMap und Höhendaten an. Die Farbanzeige bezieht sich darauf, wie bestimmte Attribute auf der Karte dargestellt werden (siehe [Kartenlegende](../../map-legend/osmand.md#surface-smoothness)). Die Balkendiagramme sind ebenfalls interaktiv, und es ist möglich, Informationen an einem bestimmten Ort durch Tippen auf das Diagramm anzuzeigen.

- [**Straßentyp**](https://wiki.openstreetmap.org/wiki/Key:highway#Roads). Der Straßentyp wird anhand seines funktionalen Zwecks und seiner Merkmale bestimmt, wie z.B. Anzahl der Fahrspuren, Geschwindigkeitsbegrenzungen, Tragfähigkeit, Vorhandensein von Fuß- und Radwegen, Fahrbahnrändern und anderen Parametern. Verschiedene Straßentypen können unterschiedliche Einschränkungen und Verkehrsregeln haben.

   Zum Beispiel haben Haupt-[Autobahnen](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway) in der Regel eine hohe Geschwindigkeitsbegrenzung und können in Fahrspuren unterteilt sein, und [Ortsstraßen](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) können eine niedrige Geschwindigkeitsbegrenzung und eine Fahrspur in jede Richtung haben.

- [**Oberfläche**](https://wiki.openstreetmap.org/wiki/Key:surface). Straßenoberflächen sind die oberste Schicht des Belags, die mit den Rädern von Fahrzeugen in Kontakt kommt. Sie können je nach ihren Eigenschaften und ihrem funktionalen Zweck unterschiedliche Typen aufweisen.

   Zum Beispiel bietet [Asphalt](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) eine gute Traktion und Geräuschdämmung, und [Beton](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete) ist haltbarer und hat eine höhere Tragfähigkeit. Andere Materialien wie Kies, Schotter, Holzbretter und andere können ebenfalls zur Schaffung einer Straßenoberfläche verwendet werden.

- [**Steilheit**](https://wiki.openstreetmap.org/wiki/Key:incline#Common_&_extreme_inclines). Dies ist ein Maß für den Neigungswinkel der Straße, ausgedrückt in Prozent. Es gibt an, wie steil die Straße im Verhältnis zum Horizont nach oben oder unten geneigt ist, und wird berechnet, indem die vertikale Änderung der Straßenhöhe durch die horizontale Entfernung gemessen und der resultierende Wert mit 100% multipliziert wird.

   Wenn die Steilheit der Straße beispielsweise 10% beträgt, bedeutet das, dass Sie für alle 100 Meter horizontaler Entfernung entlang der Straße 10 Meter nach oben oder unten fahren. Die Steilheit der Straße kann die Geschwindigkeit, das Bremsen, den Kraftstoffverbrauch und die Fahrsicherheit Ihres Fahrzeugs beeinflussen, insbesondere auf rutschigen Straßen im Winter.

- [**Oberflächenfestigkeit**](https://wiki.openstreetmap.org/wiki/Key:tracktype). Die Straßenoberfläche kann sich von Verformungen oder Belastungen erholen. Je höher die Oberflächenfestigkeit, desto geringer ist die Wahrscheinlichkeit von Schäden am Fahrzeug und desto komfortabler wird die Straße sein. Die Oberflächenfestigkeit kann auch die Fahrzeuggeschwindigkeit und den Kraftstoffverbrauch beeinflussen.

- [**Steigung**](https://wiki.openstreetmap.org/wiki/Key:incline). Zeigt an, wie viel Prozent der Steigungen auf Ihrer Route vorhanden sind.

- [**Glätte**](https://wiki.openstreetmap.org/wiki/Key:smoothness). Anwendbar für alle Arten von Wegen und Gebieten, wie Autobahnen, Parkplätze, Strände und Wanderwege, und gibt die Nutzbarkeit der Route an. Es gibt Ihnen Informationen, dass Sie ohne nennenswertes Beschädigungsrisiko, wie z.B. am Fahrzeugunterboden, oder Verletzungsrisiko, wie z.B. einen Sturz, fahren können.

- [**Winter- und Eisstraßen**](https://wiki.openstreetmap.org/wiki/Proposed_features/Winter_roads). Zeigt das Farbschema der Route gemäß der Klassifizierung der [Winterstraßen](../../map/vector-maps.md#winter-and-ski) an.

- [**Schwierigkeitsgrad von Reitwegen**](https://wiki.openstreetmap.org/wiki/Riding). Dieses Straßenattribut gibt den Schwierigkeitsgrad der Route beim Reiten an. Geeignet für [Reitrouten](../../navigation/routing/horse-routing.md).


## Abbiegeinformationen {#turn-by-turn-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigationsroute Android](@site/static/img/navigation/route/navigation_route_android_turn.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsroute Android](@site/static/img/navigation/route/navigation_route_turn_2_ios.png)

</TabItem>

</Tabs>

Abbiegeinformationen bieten detaillierte [Anweisungen](#instructions) zur Navigation einer Route. Zusätzlich zum *Details*-Menü werden sie auch in den Widgets [*Routenmanöver*](../../widgets/nav-widgets.md#route-maneuvers) und [*Fahrspuren*](../../widgets/nav-widgets.md#lanes) angezeigt. Diese Informationen helfen Ihnen, Ihre Route besser zu navigieren und ermöglichen Ihnen eine vorausschauende Planung.

Tippen Sie auf einen bestimmten Abschnitt der Route in der Liste, um detaillierte Informationen anzuzeigen oder bei Bedarf Änderungen vorzunehmen. Die Karte wird vergrößert und ein [Kontextmenü](../../map/map-context-menu.md) wird geöffnet.


### Anweisungen {#instructions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigationsroute Android](@site/static/img/navigation/route/navigation_turn_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsroute Android](@site/static/img/navigation/route/navigation_turn_ios.png)

</TabItem>

</Tabs>

Anweisungen enthalten Informationen zur Bewegung entlang der Route, wie zum Beispiel:

- Der [*Pfeil für die nächste Abbiegung*](../../widgets/nav-widgets.md#next-turn) und *seine Richtung*.
- *Entfernung zum Manöver*.
- Eine Beschreibung *was zu tun ist*, die den *Namen der Straße oder des Weges* enthält.
- *Gesamtdistanz* und *Zeit der Route*.
- *[Fahrspuren](../../widgets/nav-widgets.md#lanes) Layout* für die aktuelle Straße.
- [*Straßenrandanzeige*](#roadside-indicator) (*nur iOS*).


### Straßenrandanzeige {#roadside-indicator}

:::caution Nur iOS
Diese Art von Anweisung ist derzeit *nicht für die Android*-Version der OsmAnd-App verfügbar.
:::

![Seitenanzeige](@site/static/img/navigation/route/side_indication.png)

In der Anweisungsliste zeigt die **Straßenrandanzeige** an, in welcher Richtung von Ihrem aktuellen Standort und Ihrer Bewegungsrichtung zu Ihrem Endpunkt Ihr Ziel liegt, dies kann links, rechts und geradeaus sein.

Der Winkel zwischen Ihrem Ziel (*[Peilung](https://en.wikipedia.org/w/index.php?title=Bearing_(navigation)&oldformat=true) vom letzten Punkt*) und dem letzten Segment (*Peilung zu den letzten 2 Punkten der Route*) wird gemessen, in 3 Sektoren von 120 Grad unterteilt, und das Ergebnis ist, dass Sie sehen können, in welche Richtung Ihr Ziel liegt.

- `-60 °`&nbsp; &nbsp; &nbsp; bis &nbsp; &nbsp;`60 °`&nbsp; &nbsp; &nbsp; - markiert als **geradeaus**.
- `-180 °`&nbsp; &nbsp; bis &nbsp; &nbsp;`-60 °`&nbsp; &nbsp; - markiert als **linke** Seite.
- `60 °`&nbsp; &nbsp; &nbsp; &nbsp; bis &nbsp; &nbsp;`180 °`&nbsp; &nbsp; - markiert als **rechte** Seite.


### Drucken {#print}

<InfoAndroidOnly/>

![Routendetails](@site/static/img/navigation/route/route_details_print-2.png)

Die **Druckfunktion** einer Abbiegeanweisung kann nützlich sein, wenn Sie eine physische Kopie Ihrer Routenbeschreibung bevorzugen, anstatt elektronische Geräte zu verwenden, oder wenn Sie keinen Zugang zu Navigations-Apps oder GPS-Navigatoren haben, keinen Internetzugang, oder wenn Sie Informationen für andere Personen benötigen, die mit Ihnen reisen.

Eine gedruckte Routenbeschreibung bietet detaillierte *Abbiegeanweisungen* zur Navigation Ihrer Route, einschließlich der Entfernung zur nächsten Abbiegung, der Fahrtrichtung und der Straßen- oder Wegnamen, sowie Informationen zu Entfernung und Fahrzeit.

Diese Informationen können nützlich sein, wenn Sie eine Reise planen und die Zeit und Entfernung zwischen verschiedenen Punkten auf der Route abschätzen und die voraussichtliche Ankunftszeit bestimmen möchten.

Die Möglichkeit, Abbiegeinformationen **auszudrucken** oder **im PDF-Format zu speichern**, ist besonders nützlich bei langen Reisen oder an unbekannten Orten, wenn Sie eine detailliertere Vorstellung von der Route und der benötigten Zeit haben müssen.


## Teilen / Exportieren (Aktionen) {#share--export-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigationsroute Android](@site/static/img/navigation/route/navigation_route_share_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsroute iOS](@site/static/img/navigation/route/navigation_route_share_ios.png)

</TabItem>

</Tabs>

Der Navigationsbereich Routendetails bietet Optionen, mit denen Sie bestimmte Aktionen mit den Routeninformationen ausführen können.

- [**Drucken**](#print). Ermöglicht das Drucken oder Speichern von Abbiegeanweisungen.
- **Exportieren/Speichern**. Ermöglicht das Speichern der Routeninformationen **als neue Strecke** zur späteren Offline-Nutzung. Die exportierte Strecke enthält alle Informationen zu Straßenattributen und Abbiegeanweisungen. Daher sollte die [Navigation nach dieser Strecke](./gpx-navigation.md) alle Funktionen wie die Navigation nach der Route bieten.
- **Teilen**. Teilt eine exportierte Strecke oder einen Link zur Route, der auf einem anderen Gerät mit OsmAnd geöffnet werden kann.


## Verwandte Artikel {#related-articles}

- [Routenparameter](../routing/osmand-routing.md#routing-types)
- [Routenvorbereitung](./route-navigation.md)
- [Navigation nach Strecke](./gpx-navigation.md)
- [Navigation nach Markierungen](./markers-navigation.md)
- [Navigationseinstellungen](../guidance/navigation-settings.md)
- [Kartenbildschirm während der Navigation](../guidance/map-during-navigation.md)
- [Sprachansagen / Benachrichtigungen](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Zuletzt aktualisiert: November 2024*