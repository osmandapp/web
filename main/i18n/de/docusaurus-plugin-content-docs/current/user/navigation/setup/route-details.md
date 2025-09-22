---
source-hash: e31e5212327dba32b41b4f464d67c7ab7f9725a2d4fbd06bb60453040bbfe587
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



## Übersicht {#overview}

Mit OsmAnd können Sie die beste Route finden und deren Details erkunden. Die App bietet detaillierte Informationen über die Route wie Entfernung, [Reisezeit](#distance--time--co2), [Oberflächenart](#road-attributes), [Höhenunterschiede](#elevation-info), [CO2-Fußabdruck-Daten](#distance--time--co2) und [Abbiegehinweise](#turn-by-turn-information). Sie können die Route auch auf der Karte [analysieren](#analyze-on-map), Informationen über Track-Abschnitte herausfinden, den Routenplan [drucken](#print), die Route [speichern](#share--export-actions) und mit anderen teilen. Mit dieser Funktionalität kennen Sie immer die Routendetails und können Ihre Reise effizienter planen.  


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routendetails Android](@site/static/img/navigation/route/route_detail_overview_4_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Routendetails iOS](@site/static/img/navigation/route/route_detail_overview_4_ios.png)

</TabItem>

</Tabs>


### So greifen Sie darauf zu {#how-to-access}

Nach der Berechnung einer Route im [Navigationsmenü](./route-navigation.md#start--stop-navigation) haben Sie Zugriff auf die "Details" zu dieser Route. Diese Informationen sind nützlich, um vor Fahrtantritt die Routenplanung zu verbessern oder um während der Fahrt Informationen über die vor Ihnen liegende Straße zu überprüfen.  
Es gibt drei Möglichkeiten, auf das Menü *Routendetails* zuzugreifen.  

1. Gehen Sie zum Hauptmenü *Menü → Navigation*, legen Sie die Route fest und tippen Sie auf die Schaltfläche *Details*.
2. Tippen Sie auf das *Navigationssymbol* auf dem Kartenbildschirm, legen Sie die Route fest und tippen Sie auf die Schaltfläche *Details*.
3. Gehen Sie zum Menü *Meine Orte*, tippen Sie auf einen verfügbaren Track in der Liste *Menü → Meine Orte → Tracks*, wählen Sie das *Navigationssymbol* im Track-Kontextmenü in der *Übersicht* und tippen Sie auf *Details*.  

Abhängig von den ausgewählten [Profileinstellungen](../../personal/profiles.md) und dem ausgewählten [Routing-Typ](../../navigation/routing/osmand-routing.md#routing-types) werden einige Routendetails möglicherweise nicht angezeigt. Darüber hinaus hängen die Routendetails stark von der *OpenStreetMap-Datenabdeckung* ab.


## Entfernung / Zeit / CO2 {#distance--time--co2}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routendetails](@site/static/img/navigation/route/route_details_distance-time-CO2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsroute iOS](@site/static/img/navigation/route/route_details_distance-time-CO2_2_ios.png)

</TabItem>

</Tabs>

- ***Gesamtentfernung*** wird zwischen allen Routensegmenten berechnet, einschließlich Zwischenpunkten in den ausgewählten [Einheiten](../../personal/profiles.md#units--formats).

- ***Geschätzte Reisezeit*** wird als Summe der Zeiten auf jedem Segment und der Zeitstrafen an bestimmten Punkten berechnet. Jedes Navigationsprofil hat unterschiedliche Regeln für die Berechnung der Geschwindigkeit auf einem Segment und welche Strafen einbezogen werden sollen (konfiguriert in [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md)). Zum Beispiel übernehmen Auto- und Fahrradprofile die Durchschnittsgeschwindigkeit pro Segment aus OpenStreetMap-Daten, aber Fußgänger-, Boots- und Flugzeugprofile verwenden die *Standardgeschwindigkeit* aus den [Navigationseinstellungen](../guidance/vehicle-parameters.md#default-speed).

- ***Geschätzte Ankunftszeit*** wird als Zeit ab jetzt in der Ortszeit des Startpunkts unter Verwendung der *geschätzten Reisezeit* berechnet.

- ***CO2-Fußabdruck-Daten*** schätzen grob, wie viel CO2 während der Fahrt auf der Route produziert wird. Sie müssen den [Treibstoffmotortyp](../guidance/vehicle-parameters.md#fuel-used-by-motor) in den Fahrzeugparametern konfigurieren, um eine genauere Annäherung zu erhalten.


## Höheninformationen {#elevation-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routendetails](@site/static/img/navigation/route/route_details_info-block_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsroute iOS](@site/static/img/navigation/route/route_details_info-block_ios.png)

</TabItem>

</Tabs>

**Höheninformationen** werden in allen Offline-Routenprofilen von OsmAnd bereitgestellt, außer bei Profilen, die die [Luftlinien-Navigation](../routing/straight-line-routing.md) verwenden. Die Höhendaten sind Teil der OsmAnd Offline-Karten und werden auf der Grundlage von [öffentlichen SRTM-Quellen](https://en.wikipedia.org/wiki/Shuttle_Radar_Topography_Mission) berechnet.

- *Höhenbereich*. Zeigt die minimale / maximale Höhe auf der Route an.
- *Durchschnittliche Höhe*. Zeigt die gewichtete Durchschnittshöhe auf der Route an.
- *Bergauf / bergab*. Zeigt das Verhältnis des Weges zur Horizontalen an, wobei Null die Horizontalität anzeigt und die Gradzahl einen höheren oder steileren Neigungsgrad angibt. Die Steigung zeigt die maximale Straßenneigung in Prozent von Ihrem Standort bis zum Ende des sichtbaren Graphen oder für den ausgewählten Abschnitt der Route ohne den auf dem Bildschirm sichtbaren Standort.


***Eine Lizenz für DEM-Daten, die von OsmAnd zur Geländeerkennung verwendet werden***  
Die Höhendaten auf der Karte (zwischen 70 Grad nördlicher Breite und 70 Grad südlicher Breite) wurden aus Messungen gewonnen, die im Rahmen der *Shuttle Radar Topography Mission (SRTM)* durchgeführt wurden. Dabei wurde das *Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)* verwendet, das primäre Bildgebungsinstrument im *Earth Observation System der NASA*. Vollständige Informationen finden Sie in der [Lizenz](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>DEM (DSM) Daten</summary>
 - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Die für dieses Produkt verwendeten Originaldaten wurden von JAXAs AW3D geliefert.<br/>
 - <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
 - <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummens, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
 - <a href="https://sonny.4lima.de">Sonnys LiDAR Digitale Geländemodelle von Europa</a> (DTM).

</details>


### Höhendiagramm {#elevation-graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routendetails](@site/static/img/navigation/route/route_details_el_graph_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsroute iOS](@site/static/img/navigation/route/route_details_el_graph_ios.png)

</TabItem>

</Tabs>

Die [Diagramme](../../map/tracks/track-context-menu.md#altitude--speed-graphs) zeigen visuell Informationen über die Höhe und Neigung Ihrer Navigationsroute sowie Ihre aktuelle Position auf diesem Diagramm mit der aktuellen Höhe und Neigung. Das Diagramm wird auf zwei Achsen dargestellt. Die X-Achse ist die Entfernung auf Ihrer Route. Die erste Y-Achse ist die Höhe über dem Meeresspiegel, deren Wert vom Gelände abhängt, und die zweite Y-Achse ist die angenäherte [Neigung](https://en.wikipedia.org/wiki/Grade_(slope)). Sie können das Höhendiagramm für die gesamte Route oder nur für ein ausgewähltes Intervall durch Skalieren des Diagramms anzeigen.  

- ***Vergrößern/Verkleinern***. Standardmäßig zeigt das Diagramm die Route vom aktuellen Standort zu Ihrem Zielpunkt. Sie können [Zwei-Finger-Gesten](../../map/interact-with-map.md#gestures) verwenden, um für eine detailliertere Ansicht hinein- und herauszuzoomen. Sie können das Diagramm auch nach rechts, auf der Route vorwärts und zum aktuellen Standort zurück bewegen. *Solche Manipulationen beziehen sich auch auf den visuellen Informationsblock im Block [Straßenattribute](#road-attributes).*  

- ***Standort-Pin***. Wenn Sie die Informationen an einem bestimmten Punkt vor Ihnen auf Ihrer Route sehen möchten, können Sie auf eine beliebige Stelle im Diagramm tippen, und ein Zeiger mit Höhe und Neigung in Prozent wird angezeigt.  


## Auf Karte analysieren {#analyze-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routendetails Android](@site/static/img/navigation/route/navigation_route_analiz_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Routendetails iOS](@site/static/img/navigation/route/navigation_route_analiz_ios.png)

</TabItem>

</Tabs>  

Das Werkzeug **Auf Karte analysieren** ähnelt dem Werkzeug zur Anzeige von [Trackdetails](../../map/tracks/index.md#analyze-track-on-map) auf der Karte. Es ermöglicht Ihnen, verschiedene Diagramme anzuzeigen, visuell mit ihnen zu interagieren und den ausgewählten Punkt auf der Karte zu sehen.

Wenn Daten vorhanden sind, können Sie einen der folgenden Typen auswählen:

- *Y-Achse*:
   - [*Höhe*](../../map/tracks/track-context-menu.md#altitude). Dies ist der [Prozess](https://wiki.openstreetmap.org/wiki/Altitude) zur Ermittlung der Höhe über einem festen Niveau.
   - [*Neigung*](https://wiki.openstreetmap.org/wiki/Key:incline). Die [Neigung der Landform](https://en.wikipedia.org/wiki/Grade_(slope)) bedeutet den Tangens des Neigungswinkels der Oberfläche zur Horizontalen.
   - [*Geschwindigkeit*](../../map/tracks/track-context-menu.md#speed). Geschwindigkeitswerte beim Fahren auf einem Track.
   - Diagramme mit zwei Datentypen: &nbsp;*Höhe/Neigung*, &nbsp;*Höhe/Geschwindigkeit*, &nbsp;*Neigung/Geschwindigkeit*, &nbsp;*Animierter Zoom/Geschwindigkeit*.
- *X-Achse*:
   - *Entfernung*. Sie können Routendaten anzeigen, die sich auf die Länge der Route beziehen.
   - *Zeit*. Sie können Routendaten anzeigen, die sich auf die für diese Route berechnete Zeit beziehen.
   - *Tageszeit*. Sie können Routendaten zu bestimmten Tageszeiten anzeigen.


### Arten von Interaktionen {#type-of-interactions}

- *Tippen und Schieben*. Tippen Sie auf das Diagramm, um Informationen über den Trackpunkt und die Bewegung entlang des Tracks anzuzeigen. Das Diagramm hebt die Position des Punktes auf der Karte hervor und zeigt Informationen darüber auf dem Lineal an.
- *Skalieren*. Skalieren Sie das Diagramm mit einer [Zwei-Finger-Geste](../../map/interact-with-map.md#gestures).
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

- [**Straßentyp**](https://wiki.openstreetmap.org/wiki/Key:highway#Roads). Der Straßentyp wird auf der Grundlage seines funktionalen Zwecks und seiner Merkmale bestimmt, wie z. B. der Anzahl der Fahrspuren, Geschwindigkeitsbegrenzungen, Tragfähigkeit, dem Vorhandensein von Fußgänger- und Radwegen, Straßenrändern und anderen Parametern. Verschiedene Straßentypen können unterschiedliche Einschränkungen und Verkehrsregeln haben.  

   Zum Beispiel haben Haupt-[Autobahnen](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway) in der Regel eine hohe Geschwindigkeitsbegrenzung und können in Fahrspuren unterteilt sein, und [lokale Straßen](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) können eine niedrige Geschwindigkeitsbegrenzung und eine Fahrspur in jede Richtung haben.  

- [**Oberfläche**](https://wiki.openstreetmap.org/wiki/Key:surface). Straßenoberflächen sind die oberste Schicht des Belags, die mit den Rädern von Fahrzeugen in Kontakt kommt. Sie können je nach ihren Eigenschaften und ihrem funktionalen Zweck unterschiedliche Typen haben.  

   Zum Beispiel bietet [Asphaltbelag](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) eine gute Haftung und Schalldämmung, und [Betonbelag](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete) ist haltbarer und hat eine größere Tragfähigkeit. Andere Materialien wie Schotter, Schotter, Holzbretter und andere können ebenfalls zur Herstellung einer Straßenoberfläche verwendet werden.  

- [**Steilheit**](https://wiki.openstreetmap.org/wiki/Key:incline#Common_&_extreme_inclines). Dies ist ein Maß für den Neigungswinkel der Straße, ausgedrückt in Prozent. Es gibt an, wie steil die Straße relativ zum Horizont nach oben oder unten geneigt ist, und wird berechnet, indem die vertikale Änderung der Straßenhöhe durch die horizontale Entfernung gemessen und der resultierende Wert mit 100% multipliziert wird.  

   Wenn die Steilheit der Straße beispielsweise 10% beträgt, bedeutet dies, dass Sie für alle 100 Meter horizontaler Entfernung entlang der Straße 10 Meter nach oben oder unten fahren. Die Steilheit der Straße kann die Geschwindigkeit, das Bremsen, den Kraftstoffverbrauch und die Fahrsicherheit Ihres Fahrzeugs beeinflussen, insbesondere auf rutschigen Straßen im Winter.  

- [**Oberflächenfestigkeit**](https://wiki.openstreetmap.org/wiki/Key:tracktype). Die Straßenoberfläche kann sich von Verformungen oder Belastungen erholen. Je höher die Oberflächenfestigkeit, desto geringer ist die Wahrscheinlichkeit von Schäden am Fahrzeug und desto komfortabler wird die Straße sein. Die Oberflächenfestigkeit kann auch die Fahrzeuggeschwindigkeit und den Kraftstoffverbrauch beeinflussen.  

- [**Neigung**](https://wiki.openstreetmap.org/wiki/Key:incline).  Gibt an, wie viel Prozent der Steigungen auf Ihrer Route vorhanden sind.

- [**Glattheit**](https://wiki.openstreetmap.org/wiki/Key:smoothness). Gilt für alle Arten von Wegen und Flächen, wie Autobahnen, Parkplätze, Strände und Wanderwege, und gibt die Nutzbarkeit der Route an. Es gibt Ihnen Informationen, dass Sie ohne erhebliches Risiko von Schäden, wie z. B. am Fahrzeugunterboden, oder Verletzungen, wie z. B. einem Sturz, fahren können.  

- [**Winter- und Eisstraßen**](https://wiki.openstreetmap.org/wiki/Proposed_features/Winter_roads). Zeigt das Farbschema der Route gemäß der Klassifizierung von [Winterstraßen](../../map/vector-maps.md#winter-and-ski).  

- [**Schwierigkeit von Reitwegen**](https://wiki.openstreetmap.org/wiki/Riding). Dieses Straßenattribut gibt die Schwierigkeit der Route beim Reiten an. Geeignet für das [Reit-Routing](../../navigation/routing/horse-routing.md).  


## Abbiegehinweise {#turn-by-turn-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigationsroute Android](@site/static/img/navigation/route/navigation_route_android_turn.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsroute Android](@site/static/img/navigation/route/navigation_route_turn_2_ios.png)

</TabItem>

</Tabs>

Abbiegehinweise bieten detaillierte [Anweisungen](#instructions) zur Navigation einer Route. Zusätzlich zum Menü *Details* werden sie auch in den Widgets [*Routenmanöver*](../../widgets/nav-widgets.md#route-guidance) und [*Fahrspuren*](../../widgets/nav-widgets.md#lanes) angezeigt. Diese Informationen helfen Ihnen, Ihre Route besser zu navigieren und ermöglichen es Ihnen, vorausschauend zu planen.

Tippen Sie auf einen bestimmten Abschnitt der Route in der Liste, um detaillierte Informationen anzuzeigen oder bei Bedarf Änderungen vorzunehmen. Die Karte wird vergrößert und ein [Kontextmenü](../../map/map-context-menu.md) öffnet sich.


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

- Der [*nächste Abbiegepfeil*](../../widgets/nav-widgets.md#next-turn) und *seine Richtung*.
- *Entfernung zum Manöver*.
- Eine Beschreibung dessen, *was zu tun ist*, die den *Namen der Straße oder des Weges* enthält.
- *Gesamtentfernung* und *Zeit der Route*.
- *[Fahrspuren](../../widgets/nav-widgets.md#lanes)-Layout* für die aktuelle Straße.
- [*Straßenseitenanzeige*](#roadside-indicator) (*nur iOS*).


### Straßenseitenanzeige {#roadside-indicator}

:::caution Nur iOS
Diese Art von Anweisung ist derzeit für die Android-Version der OsmAnd-App *nicht verfügbar*.
:::

![Seitenanzeige](@site/static/img/navigation/route/side_indication.png)

In der Anweisungsliste zeigt die **Straßenseitenanzeige**, in welcher Richtung von Ihrem aktuellen Standort und Ihrer Bewegungsrichtung aus Ihr Ziel liegt. Dies kann links, rechts und geradeaus sein.  

Der Winkel zwischen Ihrem Ziel (*[Peilung](https://en.wikipedia.org/w/index.php?title=Bearing_(navigation)&oldformat=true) vom letzten Punkt*) und dem letzten Segment (*Peilung zu den letzten 2 Punkten der Route*) wird gemessen, in 3 Sektoren von 120 Grad unterteilt, und das Ergebnis ist, dass Sie sehen können, in welcher Richtung Ihr Ziel liegt.

- `-60 °`&nbsp; &nbsp; &nbsp; bis &nbsp; &nbsp;`60 °`&nbsp; &nbsp; &nbsp; - als **geradeaus** markiert.
- `-180 °`&nbsp; &nbsp; bis &nbsp; &nbsp;`-60 °`&nbsp; &nbsp; - als **linke** Seite markiert.
- `60 °`&nbsp; &nbsp; &nbsp; &nbsp; bis &nbsp; &nbsp;`180 °`&nbsp; &nbsp; - als **rechte** Seite markiert.


### Drucken {#print}

<InfoAndroidOnly/>

![Routendetails](@site/static/img/navigation/route/route_details_print-2.png)  

Die **Druckfunktion** einer Abbiege-für-Abbiege-Routenbeschreibung kann nützlich sein, wenn Sie eine physische Kopie Ihrer Routenbeschreibung bevorzugen, anstatt elektronische Geräte zu verwenden, oder wenn Sie keinen Zugang zu Navigations-Apps oder GPS-Navigatoren haben, keinen Internetzugang haben oder wenn Sie Informationen für andere Personen benötigen, die mit Ihnen reisen.

Eine gedruckte Routenbeschreibung bietet detaillierte *Abbiege-für-Abbiege-Anweisungen* zur Navigation Ihrer Route, einschließlich der Entfernung zur nächsten Abbiegung, der Fahrtrichtung und der Straßen- oder Wegnamen sowie Informationen zu Entfernung und Reisezeit.  

Diese Informationen können nützlich sein, wenn Sie eine Reise planen und die Zeit und Entfernung zwischen verschiedenen Punkten auf der Route schätzen und die erwartete Ankunftszeit bestimmen möchten.

Die Möglichkeit, Abbiege-für-Abbiege-Informationen **zu drucken** oder **im PDF-Format zu speichern**, ist besonders nützlich, wenn Sie lange Strecken oder an unbekannten Orten reisen und eine detailliertere Vorstellung von der Route und der dafür benötigten Zeit haben müssen.


## Teilen / Exportieren (Aktionen) {#share--export-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigationsroute Android](@site/static/img/navigation/route/navigation_route_share_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsroute iOS](@site/static/img/navigation/route/navigation_route_share_ios.png)

</TabItem>

</Tabs>  

Der Navigationsabschnitt "Routendetails" verfügt über Optionen, mit denen Sie bestimmte Aktionen mit den Routeninformationen durchführen können.  

- [**Drucken**](#print). Ermöglicht das Drucken oder Speichern von Abbiege-für-Abbiege-Routeninformationen.
- **Exportieren/Speichern**. Ermöglicht das Speichern der Routeninformationen **als neuen Track** zur späteren Offline-Verwendung. Der exportierte Track enthält alle Informationen über Straßenattribute und Abbiegehinweise. Daher sollte die [Navigation nach diesem Track](./gpx-navigation.md) alle Funktionen wie die Navigation nach der Route bieten.
- **Teilen**. Teilt einen exportierten Track oder einen Link zur Route, der auf einem anderen Gerät mit OsmAnd geöffnet werden kann.


## Verwandte Artikel {#related-articles}

- [Routenparameter](../routing/osmand-routing.md#routing-types)
- [Routenvorbereitung](./route-navigation.md)
- [Navigation nach Track](./gpx-navigation.md)
- [Navigation nach Markern](./markers-navigation.md)
- [Navigationseinstellungen](../guidance/navigation-settings.md)
- [Kartenbildschirm während der Navigation](../guidance/map-during-navigation.md)
- [Sprachansagen / Benachrichtigungen](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)