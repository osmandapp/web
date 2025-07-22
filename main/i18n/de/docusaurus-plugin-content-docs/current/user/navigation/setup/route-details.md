---
source-hash: 4d94702418502470aad2ca1fbd09659956c170a23f9c5c7ba0cf595f9829be63
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

OsmAnd ermöglicht es Ihnen, die beste Route zu finden und ihre Details zu erkunden. Die App liefert detaillierte Informationen über die Route, wie z. B. Entfernung, [Fahrzeit](#distance--time--co2), [Oberflächenart](#road-attributes), [Höhenunterschiede](#elevation-info), [CO2-Fußabdruckdaten](#distance--time--co2) und [Abbiegeanweisungen](#turn-by-turn-information). Sie können die Route auch auf der Karte [analysieren](#analyze-on-map), Informationen über Streckenabschnitte erhalten, den Routenplan [ausdrucken](#print), die Route [speichern](#share--export-actions) und sie mit anderen teilen. Mit dieser Funktionalität kennen Sie stets die Routendetails und können Ihre Reise effizienter planen.


<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Routendetails Android](@site/static/img/navigation/route/route_detail_overview_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routendetails iOS](@site/static/img/navigation/route/route_detail_overview_4_ios.png)

</TabItem>

</Tabs>


### Zugriff {#how-to-access}

Nachdem Sie eine Route im [Navigationsmenü](./route-navigation.md#start--stop-navigation) berechnet haben, haben Sie Zugriff auf "Details" zu dieser Route. Diese Informationen sind nützlich, um die Routenplanung vor Reiseantritt zu verbessern oder während der Fahrt Informationen über die vor Ihnen liegende Straße zu überprüfen.
Es gibt drei Möglichkeiten, auf das Menü *Routendetails* zuzugreifen.

1. Gehen Sie zum Hauptmenü *Menü → Navigation*, legen Sie die Route fest und tippen Sie auf die Schaltfläche *Details*.
2. Tippen Sie auf das *Navigationssymbol* auf dem Kartenbildschirm, legen Sie die Route fest und tippen Sie auf die Schaltfläche *Details*.
3. Gehen Sie zum Menü *Meine Orte*, tippen Sie auf eine beliebige verfügbare Strecke in der Liste *Menü → Meine Orte → Strecken*, wählen Sie das *Navigationssymbol* im Strecken-Kontextmenü unter *Übersicht* und tippen Sie auf *Details*.

Abhängig von den ausgewählten [Profileinstellungen](../../personal/profiles.md) und dem ausgewählten [Routentyp](../../navigation/routing/osmand-routing.md#routing-types) werden möglicherweise einige Routendetails nicht angezeigt. Darüber hinaus hängen die Routendetails stark von der *OpenStreetMap-Datenabdeckung* ab.


## Entfernung / Zeit / CO2 {#distance--time--co2}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Routendetails](@site/static/img/navigation/route/route_details_distance-time-CO2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsroute iOS](@site/static/img/navigation/route/route_details_distance-time-CO2_2_ios.png)

</TabItem>

</Tabs>

- ***Gesamtdistanz*** wird zwischen allen Routenabschnitten berechnet, einschließlich Zwischenpunkten in den ausgewählten [Einheiten](../../personal/profiles.md#units--formats).

- ***Geschätzte Fahrzeit*** wird als Summe der Zeiten auf jedem Segment und Zeitstrafen an bestimmten Punkten berechnet. Jedes Navigationsprofil hat unterschiedliche Regeln für die Berechnung der Geschwindigkeit auf einem Segment und welche Strafen berücksichtigt werden sollen (konfiguriert in [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md)). Zum Beispiel verwenden Auto- und Fahrradprofile die Durchschnittsgeschwindigkeit pro Segment aus OpenStreetMap-Daten, aber Fußgänger-, Boots- und Flugzeugprofile verwenden die *Standardgeschwindigkeit* aus den [Navigationseinstellungen](../guidance/navigation-settings.md#default-speed--road-speeds).

- ***Geschätzte Ankunftszeit*** wird als Zeit ab jetzt in der Ortszeit des Ursprungs unter Verwendung der *Geschätzten Fahrzeit* berechnet.

- ***CO2-Fußabdruckdaten*** schätzen grob, wie viel CO2 beim Befolgen der Route produziert wird. Sie müssen den [Kraftstoffmotortyp](../guidance/navigation-settings.md#fuel-used-by-motor) in den Fahrzeugparametern konfigurieren, um eine genauere Annäherung zu erhalten.


## Höheninformationen {#elevation-info}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Routendetails](@site/static/img/navigation/route/route_details_info-block_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsroute iOS](@site/static/img/navigation/route/route_details_info-block_ios.png)

</TabItem>

</Tabs>

**Höheninformationen** werden in allen OsmAnd Offline-Routenprofilen bereitgestellt, mit Ausnahme von Profilen, die [Geradlinige Navigation](../routing/straight-line-routing.md) verwenden. Die Höhendaten sind Teil der OsmAnd Offline-Karten und werden basierend auf [Öffentlichen SRTM-Quellen](https://en.wikipedia.org/wiki/Shuttle_Radar_Topography_Mission) berechnet.

- *Höhenbereich*. Zeigt die minimale/maximale Höhe auf der Route an.
- *Durchschnittliche Höhe*. Zeigt die gewichtete Durchschnittshöhe auf der Route an.
- *Aufstieg/Abstieg*. Zeigt das Verhältnis des Pfades zur Horizontalen an, wobei Null die Horizontalität angibt und die Gradzahl einen höheren oder steileren Neigungsgrad angibt. Die Steigung zeigt die maximale Straßenneigung in Prozent von Ihrem Standort bis zum Ende des sichtbaren Graphen oder für den ausgewählten Abschnitt der Route ohne den auf dem Bildschirm sichtbaren Standortpunkt.


***Eine Lizenz für DEM-Daten, die von OsmAnd zur Geländeerkennung verwendet werden***
Die Höhendaten auf der Karte (zwischen 70 Grad nördlicher Breite und 70 Grad südlicher Breite) wurden aus Messungen im Rahmen der *Shuttle Radar Topography Mission (SRTM)* gewonnen. Dabei wurde das *Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)* verwendet, das primäre Bildgebungswerkzeug im *NASA's Earth Observation System*. Vollständige Informationen finden Sie in der [Lizenz](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>DEM (DSM) Daten</summary>
 - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Die für dieses Produkt verwendeten Originaldaten wurden von JAXA's AW3D geliefert.<br/>
 - <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
 - <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummens, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
 - <a href="https://sonny.4lima.de">Sonny's LiDAR Digital Terrain Models of Europe</a> (DTM).

</details>


### Höhenprofil {#elevation-graph}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Routendetails](@site/static/img/navigation/route/route_details_el_graph_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsroute iOS](@site/static/img/navigation/route/route_details_el_graph_ios.png)

</TabItem>

</Tabs>

Die [Graphen](../../map/tracks/track-context-menu.md#altitude--speed-graphs) zeigen visuell Informationen über die Höhe und Steigung Ihrer Navigationsroute sowie Ihre aktuelle Position auf diesem Graphen mit der aktuellen Höhe und Steigung an. Der Graph wird auf zwei Achsen gezeichnet. Die X-Achse ist die Entfernung auf Ihrer Route. Die erste Y-Achse ist die Höhe über dem Meeresspiegel, deren Wert vom Gelände abhängt, und die zweite Y-Achse ist die angenäherte [Steigung](https://en.wikipedia.org/wiki/Grade_(slope)). Sie können das Höhenprofil für die gesamte Route oder nur für ein ausgewähltes Intervall anzeigen, indem Sie den Graphen skalieren.

- ***Vergrößern/Verkleinern***. Standardmäßig zeigt der Graph die Route vom aktuellen Standort bis zu Ihrem Zielpunkt. Sie können [Zweifingerbewegungen](../../map/interact-with-map.md#gestures) verwenden, um für eine detailliertere Ansicht zu vergrößern und zu verkleinern. Sie können den Graphen auch nach rechts, vorwärts auf der Route und rückwärts zum aktuellen Standort verschieben. *Solche Manipulationen beziehen sich auch auf den visuellen Informationsblock im Block [Straßenattribute](#road-attributes).*

- ***Standortnadel***. Wenn Sie die Informationen an einem bestimmten Punkt auf Ihrer Route sehen möchten, können Sie an einer beliebigen Stelle auf den Graphen tippen, und ein Zeiger mit Höhen- und Steigungsprozent wird angezeigt.


## Auf Karte analysieren {#analyze-on-map}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Routendetails Android](@site/static/img/navigation/route/navigation_route_analiz_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routendetails iOS](@site/static/img/navigation/route/navigation_route_analiz_ios.png)

</TabItem>

</Tabs>

Das Werkzeug **Auf Karte analysieren** ähnelt dem Werkzeug zum Anzeigen von [Streckendetails](../../map/tracks/index.md#analyze-track-on-map) auf der Karte. Es ermöglicht Ihnen, verschiedene Graphen anzuzeigen und visuell mit ihnen zu interagieren und den ausgewählten Punkt auf der Karte zu sehen.

Wenn Daten vorhanden sind, können Sie einen der folgenden Typen auswählen:

- *Y-Achse*:
   - [*Höhe*](../../map/tracks/track-context-menu.md#altitude). Dies ist der [Prozess](https://wiki.openstreetmap.org/wiki/Altitude) zur Ermittlung der Höhe über einem festen Niveau.
   - [*Steigung*](https://wiki.openstreetmap.org/wiki/Key:incline). Die [Steigung der Landform](https://en.wikipedia.org/wiki/Grade_(slope)) bezeichnet den Tangens des Neigungswinkels der Oberfläche zur Horizontalen.
   - [*Geschwindigkeit*](../../map/tracks/track-context-menu.md#speed). Geschwindigkeitswerte während der Fahrt auf einer Strecke.
   - Graphen mit zwei Datentypen: &nbsp;*Höhe/Steigung*, &nbsp;*Höhe/Geschwindigkeit*, &nbsp;*Steigung/Geschwindigkeit*, &nbsp;*Animierter Zoom/Geschwindigkeit*.
- *X-Achse*:
   - *Entfernung*. Sie können Routendaten anzeigen, die sich auf die Länge der Route beziehen.
   - *Zeit*. Sie können Routendaten anzeigen, die sich auf die für diese Route berechnete Zeit beziehen.
   - *Tageszeit*. Sie können Routendaten zu bestimmten Tageszeiten anzeigen.


### Arten von Interaktionen {#type-of-interactions}

- *Tippen und schieben*. Tippen Sie auf den Graphen, um Informationen über den Streckenpunkt und die Bewegung entlang der Strecke anzuzeigen. Der Graph hebt die Position des Punktes auf der Karte hervor und zeigt Informationen dazu auf dem Lineal an.
- *Skalieren*. Skalieren Sie den Graphen mit einer [Zweifingergeste](../../map/interact-with-map.md#gestures).
- *Meinem Standort folgen* (*nur Android*). Sie können auf [Mein Standort](../../map/interact-with-map.md#my-location-and-zoom) tippen, um die Kartenansicht und den Graphen mit Ihrem Standort zu synchronisieren. Während Sie sich bewegen, verschiebt sich der Graph von links nach rechts und zeigt Informationen vor Ihrem Weg an.


## Straßenattribute {#road-attributes}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_details"/>*

![Navigationsroute Android](@site/static/img/navigation/route/route_details_attributes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_details,shared_string_analysis"/> tab*

![Navigationsroute iOS](@site/static/img/navigation/route/route_details_attributes_ios.png)

</TabItem>

</Tabs>

Straßenattribute sind in den [Routendetails](#how-to-access) zugänglich und zeigen segmentbezogene Informationen aus OpenStreetMap und Höhendaten an. Die Farbanzeige bezieht sich darauf, wie bestimmte Attribute auf der Karte dargestellt werden (siehe [Kartenlegende](../../map-legend/osmand.md#surface-smoothness)). Die Balkendiagramme sind ebenfalls interaktiv, und es ist möglich, Informationen an einem bestimmten Ort anzuzeigen, indem Sie auf das Diagramm tippen.

- [**Straßentyp**](https://wiki.openstreetmap.org/wiki/Key:highway#Roads). Der Straßentyp wird anhand seines funktionalen Zwecks und seiner Merkmale bestimmt, wie z. B. Anzahl der Spuren, Geschwindigkeitsbegrenzungen, Tragfähigkeit, Vorhandensein von Fuß- und Radwegen, Seitenstreifen und andere Parameter. Verschiedene Straßentypen können unterschiedliche Einschränkungen und Verkehrsregeln haben.

   Zum Beispiel haben Haupt-[Autobahnen](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway) normalerweise eine hohe Geschwindigkeitsbegrenzung und können in Spuren unterteilt sein, und [Ortsstraßen](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) können eine niedrige Geschwindigkeitsbegrenzung und eine Spur in jede Richtung haben.

- [**Oberfläche**](https://wiki.openstreetmap.org/wiki/Key:surface). Straßenoberflächen sind die oberste Fahrbahnschicht, die mit den Rädern von Fahrzeugen in Kontakt kommt. Sie können je nach ihren Eigenschaften und ihrem funktionalen Zweck unterschiedlicher Art sein.

   Zum Beispiel bietet [Asphalt](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) eine gute Traktion und Geräuschdämmung, und [Beton](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete) ist haltbarer und hat eine größere Tragfähigkeit. Andere Materialien wie Kies, Schotter, Holzbohlen und andere können ebenfalls zur Schaffung einer Straßenoberfläche verwendet werden.

- [**Steilheit**](https://wiki.openstreetmap.org/wiki/Key:incline#Common_&_extreme_inclines). Dies ist ein Maß für den Winkel der Steigung der Straße, ausgedrückt in Prozent. Es zeigt an, wie steil die Straße im Verhältnis zum Horizont nach oben oder unten geneigt ist, und wird berechnet, indem die vertikale Änderung der Straßenhöhe durch die horizontale Entfernung gemessen und der resultierende Wert mit 100% multipliziert wird.

   Wenn die Steilheit der Straße beispielsweise 10% beträgt, bedeutet dies, dass Sie für jede 100 Meter horizontale Entfernung entlang der Straße 10 Meter nach oben oder unten fahren. Die Steilheit der Straße kann die Geschwindigkeit, das Bremsen, den Kraftstoffverbrauch und die Fahrsicherheit Ihres Fahrzeugs beeinflussen, insbesondere auf rutschigen Straßen im Winter.

- [**Oberflächenfestigkeit**](https://wiki.openstreetmap.org/wiki/Key:tracktype). Die Straßenoberfläche kann sich von Verformungen oder Belastungen erholen. Je höher die Oberflächenfestigkeit, desto geringer ist die Wahrscheinlichkeit von Schäden am Fahrzeug und desto komfortabler wird die Straße sein. Die Oberflächenfestigkeit kann auch die Fahrzeuggeschwindigkeit und den Kraftstoffverbrauch beeinflussen.

- [**Steigung**](https://wiki.openstreetmap.org/wiki/Key:incline). Zeigt an, wie viel Prozent der Steigungen auf Ihrer Route vorhanden sind.

- [**Ebenheit**](https://wiki.openstreetmap.org/wiki/Key:smoothness). Anwendbar für alle Arten von Wegen und Gebieten, wie Autobahnen, Parkplätze, Strände und Wanderwege, und zeigt die Nutzbarkeit der Route an. Es gibt Ihnen Informationen, dass Sie ohne signifikantes Risiko von Schäden, wie z. B. am Fahrzeugunterboden, oder Verletzungen, wie z. B. einem Sturz, fahren können.

- [**Winter- und Eisstraßen**](https://wiki.openstreetmap.org/wiki/Proposed_features/Winter_roads). Zeigt das Farbschema der Route entsprechend der Klassifizierung der [Winterstraßen](../../map/vector-maps.md#winter-and-ski).

- [**Schwierigkeit von Reitwegen**](https://wiki.openstreetmap.org/wiki/Riding). Dieses Straßenattribut gibt die Schwierigkeit der Route beim Reiten an. Geeignet für [Reitroutenplanung](../../navigation/routing/horse-routing.md).


## Abbiegeanweisungen {#turn-by-turn-information}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navigationsroute Android](@site/static/img/navigation/route/navigation_route_android_turn.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsroute Android](@site/static/img/navigation/route/navigation_route_turn_2_ios.png)

</TabItem>

</Tabs>

Abbiegeanweisungen liefern detaillierte [Anweisungen](#instructions) zur Navigation auf einer Route. Zusätzlich zum Menü *Details* werden sie auch in den Widgets [*Routenmanöver*](../../widgets/nav-widgets.md#route-maneuvers) und [*Fahrspuren*](../../widgets/nav-widgets.md#lanes) angezeigt. Diese Informationen helfen Ihnen, Ihre Route besser zu navigieren und vorausschauend zu planen.

Tippen Sie in der Liste auf einen bestimmten Abschnitt der Route, um detaillierte Informationen anzuzeigen oder bei Bedarf Änderungen vorzunehmen. Die Karte vergrößert sich und ein [Kontextmenü](../../map/map-context-menu.md) wird geöffnet.


### Anweisungen {#instructions}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navigationsroute Android](@site/static/img/navigation/route/navigation_turn_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsroute Android](@site/static/img/navigation/route/navigation_turn_ios.png)

</TabItem>

</Tabs>

Anweisungen enthalten Informationen zur Bewegung entlang der Route, wie z. B.:

- Den [*Pfeil für die nächste Abbiegung*](../../widgets/nav-widgets.md#next-turn) und *seine Richtung*.
- *Entfernung zum Manöver*.
- Eine Beschreibung *was zu tun ist*, einschließlich des *Namens der Straße oder des Weges*.
- *Gesamtdistanz* und *Zeit der Route*.
- [*Fahrspuranordnung*](../../widgets/nav-widgets.md#lanes) für die aktuelle Straße.
- [*Straßenseitenanzeige*](#roadside-indicator) (*nur iOS*).


### Straßenseitenanzeige {#roadside-indicator}

:::caution Nur iOS
Diese Art der Anweisung ist derzeit *nicht für die Android*-Version der OsmAnd-App verfügbar.
:::

![Seitenanzeige](@site/static/img/navigation/route/side_indication.png)

In der Anweisungsliste zeigt die **Straßenseitenanzeige** an, in welcher Richtung von Ihrem aktuellen Standort und Ihrer Fahrtrichtung zu Ihrem Ziel Ihr Ziel liegt. Dies kann links, rechts und geradeaus sein.

Der Winkel zwischen Ihrem Ziel (*[Peilung](https://en.wikipedia.org/w/index.php?title=Bearing_(navigation)&oldformat=true) vom letzten Punkt*) und dem letzten Segment (*Peilung zu den letzten 2 Punkten der Route*) wird gemessen, in 3 Sektoren von 120 Grad unterteilt, und das Ergebnis ist, dass Sie sehen können, in welcher Richtung sich Ihr Ziel befindet.

- `-60 °` &nbsp; &nbsp; &nbsp; bis &nbsp; &nbsp;`60 °` &nbsp; &nbsp; &nbsp; - als **geradeaus** markiert.
- `-180 °` &nbsp; &nbsp; bis &nbsp; &nbsp;`-60 °` &nbsp; &nbsp; - als **linke** Seite markiert.
- `60 °` &nbsp; &nbsp; &nbsp; &nbsp; bis &nbsp; &nbsp;`180 °` &nbsp; &nbsp; - als **rechte** Seite markiert.


### Drucken {#print}

<InfoAndroidOnly/>

![Routendetails](@site/static/img/navigation/route/route_details_print-2.png)

Die Funktion **Drucken** einer Abbiege-Routenbeschreibung kann nützlich sein, wenn Sie eine physische Kopie Ihrer Routenbeschreibung bevorzugen, anstatt elektronische Geräte zu verwenden, oder wenn Sie keinen Zugriff auf Navigations-Apps oder GPS-Navigatoren haben, keinen Internetzugang haben oder wenn Sie Informationen für andere Personen benötigen, die mit Ihnen reisen.

Eine gedruckte Routenbeschreibung liefert detaillierte *Abbiege-Anweisungen* zur Navigation auf Ihrer Route, einschließlich der Entfernung bis zur nächsten Abbiegung, der Fahrtrichtung und der Namen von Straßen oder Wegen sowie Informationen zu Entfernung und Fahrzeit.

Diese Informationen können nützlich sein, wenn Sie eine Reise planen und die Zeit und Entfernung zwischen verschiedenen Punkten auf der Route schätzen und die voraussichtliche Ankunftszeit bestimmen möchten.

Die Möglichkeit, Abbiege-Informationen **auszudrucken** oder **im PDF-Format zu speichern**, ist besonders nützlich bei langen Fahrten oder an unbekannten Orten, wenn Sie eine detailliertere Vorstellung von der Route und der benötigten Zeit haben müssen.


## Teilen / Exportieren (Aktionen) {#share--export-actions}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navigationsroute Android](@site/static/img/navigation/route/navigation_route_share_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsroute iOS](@site/static/img/navigation/route/navigation_route_share_ios.png)

</TabItem>

</Tabs>

Der Abschnitt Routendetails Navigation enthält Optionen, mit denen Sie bestimmte Aktionen mit den Routeninformationen ausführen können.

- [**Drucken**](#print). Ermöglicht das Drucken oder Speichern von Abbiege-Routeninformationen.
- **Exportieren/Speichern**. Ermöglicht das Speichern der Routeninformationen **als neue Strecke** zur späteren Offline-Nutzung. Die exportierte Strecke enthält alle Informationen über Straßenattribute und Abbiegeanweisungen. So sollte die [Navigation anhand dieser Strecke](./gpx-navigation.md) alle Funktionen wie die Navigation anhand der Route bieten.
- **Teilen**. Teilt eine exportierte Strecke oder einen Link zur Route, der auf einem anderen Gerät mit OsmAnd geöffnet werden kann.


## Verwandte Artikel {#related-articles}

- [Routenparameter](../routing/osmand-routing.md#routing-types)
- [Routenvorbereitung](./route-navigation.md)
- [Navigation anhand einer Strecke](./gpx-navigation.md)
- [Navigation anhand von Markierungen](./markers-navigation.md)
- [Navigationseinstellungen](../guidance/navigation-settings.md)
- [Kartenbildschirm während der Navigation](../guidance/map-during-navigation.md)
- [Sprachansagen / Benachrichtigungen](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Zuletzt aktualisiert: November 2024*