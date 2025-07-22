---
source-hash: 128d77aba82249d6c7c6f4680929168a77c9a1b7b68d147ef9ee216321970557
sidebar_position: 4
title: Navigations-Widgets
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Überblick {#overview}

Navigations-Widgets werden während der Navigation aktiviert, um Informationen wie Entfernung, Ankunfts- oder Restzeit, nächste Abbiegungen, Peilung, aktueller Straßenname, Fahrspurinformationen, Höchstgeschwindigkeit, Annäherungswarnungen, POIs und Wegpunkte anzuzeigen.

![Navigational widgets all](@site/static/img/widgets/navigational_widgets_all.png)


## Aktive und passive Navigation {#active-and-passive-navigation}

Navigations-Widgets in OsmAnd wurden entwickelt, um sowohl den **aktiven** als auch den **passiven** Navigationsmodus zu verbessern. Diese Widgets liefern wertvolle Informationen wie Routenanweisungen, Straßendetails und Geschwindigkeitsbegrenzungen, abhängig vom ausgewählten **Navigationsprofil**.

#### Aktive Navigation {#active-navigation}

- **Anforderungen:**
  - Ein **Ziel** festlegen.
  - Die **Route** mit der Funktion *Routenplanung* berechnen.
  - Die Navigation **starten** (Sprachführung ist optional).
  - Nur verfügbar, wenn man sich entlang der Route bewegt.

- **Unterstützte Widgets:**
  - Alle **Navigations-Widgets** sind verfügbar.

- **Wichtigste Vorteile:**
  - Bietet **Abbiegeanweisungen**, **Spurführung** und **voraussichtliche Ankunftszeit (ETA)**.
  - Gewährleistet genaue und dynamische Aktualisierungen während der Fahrt.

#### Passive Navigation {#passive-navigation}

- **Funktionsweise:**
  - Es ist kein Ziel erforderlich.
  - Funktioniert automatisch, wenn Sie ein **Navigationsprofil** auswählen (z. B. *Fahren*, *Radfahren*).

- **Funktionalität:**
  - Versucht, die Straße, der Sie folgen, anhand von GPS-Daten zu bestimmen.
  - Zeigt **grundlegende Straßeninformationen** an, wie z. B. [Straßenname](#street-name), [Spurinformationen](#lanes), [Höchstgeschwindigkeit](#speed-limit).

- **Einschränkungen:**
  - Einige erweiterte Funktionen funktionieren möglicherweise ohne festgelegtes Ziel nicht korrekt.
  - Die bereitgestellten Informationen sind möglicherweise nicht immer **präzise**, insbesondere in komplexen Straßennetzen.

> **HINWEIS.** *Beachten Sie, dass das Profil **Karte durchsuchen** Navigations-Widgets in keinem Modus unterstützt. Wechseln Sie zu einem relevanten **Navigationsprofil**, um diese Funktionen zu aktivieren.*


<!--
Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are unavailable in the **Browse Map** profile.

**Active** navigation requires setting a destination, calculating the route (Directions), and starting navigation (Go), not necessarily with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require a destination point set and works automatically once you switch to any navigational profile, for example, 'Driving'. In that case, the application will try to determine which road you are following and display extra information about it i.e. name, lane info, max speed available. Please note that this approach is unreliable and doesn't support all features.
-->

## Höhen-Widget {#elevation-widget}

<InfoAndroidOnly/>

:::note

<ProFeature/> Dieses Widget können Sie nur mit der Pro-Funktion <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro Abonnenten</a> nutzen.

:::

Das Höhen-Widget zeigt ein Diagramm mit der Höhe und Steigung Ihrer Navigationsroute und Ihren aktuellen Standort auf diesem Diagramm mit aktueller Höhe und Steigung. Das Diagramm ist auf zwei Achsen dargestellt. Die X-Achse ist die Entfernung Ihrer Route. Die Y-Achse ist die Höhe, der Wert hängt vom Relief ab, und die Steigung wird in Prozent angezeigt.

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Elevation widget](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### Interaktionen mit dem Diagramm {#interactions-with-the-graph}

- *Vergrößern/Verkleinern*. Standardmäßig zeigt das Diagramm die Route vom aktuellen Standort bis zu 10 km voraus. Sie können die [Zwei-Finger-Geste](../map/interact-with-map#gestures) verwenden, um für eine detailliertere Ansicht der Höhenänderungen auf Ihrer Route zu vergrößern und zu verkleinern. Sie können das Diagramm auch nach rechts, vorwärts auf der Route und rückwärts zum aktuellen Standort verschieben.
- *Einen Punkt auf dem Diagramm platzieren*. Wenn Sie den Höhen- und Steigungswert an einem bestimmten Punkt auf Ihrer Route sehen möchten, können Sie an einer beliebigen Stelle auf das Diagramm tippen, und ein Zeiger mit den Werten wird angezeigt.


#### Inhalt {#whats-in}

Wenn Sie eine Route auswählen und die Schaltfläche **Start** drücken, öffnet sich die Karte mit Ihrem aktuellen Standort, der Route und dem Widget am unteren Bildschirmrand. Das Widget enthält das Diagramm und Informationen zu *Aufstieg*, *Abstieg*, *Steigung*, Entfernung, Höhe und Steigungswinkel. Sie können den *optimalen Maßstab* auswählen und alle möglichen Hindernisse auf Ihrer Route sehen.

- Alle Werte werden entweder für die gesamte Route oder nur für das ausgewählte Intervall durch Skalierung des Diagramms angegeben.
- Lesen Sie über die [Lizenz für die DEM-Daten](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection), die von OsmAnd zur Geländedetektion verwendet werden.

| |
|:------------|
| ***Standortnadel*** |
| Ihr ***aktueller Standort*** auf dem Diagramm enthält ein Standortsymbol, die Höhe und den Steigungswert in Prozent. Die rechte Seite des Widgets enthält die höchste Höhe und Steigung, den Durchschnittswert für diese und den niedrigsten Wert auf dem ausgewählten Abschnitt der Route, der im Diagramm sichtbar ist. |
| ![point](@site/static/img/widgets/sch_1-1.png)|
| ***Zusätzliche Informationen*** |
| Die rechte Seite des Widgets enthält Daten über die höchste Höhe und Steigung, den Durchschnittswert für beide und die niedrigste Höhe und Steigung auf dem ausgewählten Routenabschnitt, der im Diagramm sichtbar ist. |
| ![data](@site/static/img/widgets/sch_1-2.png)|
|Die Werte für ***Aufstieg*** und ***Abstieg*** sind die Summen der Entfernungen von Ihrem Standortpunkt bis zum Ende des sichtbaren Diagramms. Wenn kein Standortpunkt auf dem Diagramm vorhanden ist, ist es die Summe des gesamten sichtbaren Diagramms auf dem Bildschirm (dies kann passieren, wenn Sie den Maßstab ändern und der Standort außerhalb des Diagramms liegt).|
| **Aufstieg** – zeigt die Summe aller Entfernungen mit zunehmender Höhe von Ihrem Standortpunkt bis zum Ende des sichtbaren Diagramms oder für den ausgewählten Abschnitt der Route ohne den auf dem Bildschirm sichtbaren Standortpunkt. |
| ![uphill scheme](@site/static/img/widgets/sch_uphill_1.png) ![uphill scheme](@site/static/img/widgets/sch_uphill_2.png)|
| **Abstieg** – zeigt die Summe aller Entfernungen mit abnehmender Höhe von Ihrem Standortpunkt bis zum Ende des sichtbaren Diagramms oder für den ausgewählten Abschnitt der Route ohne den auf dem Bildschirm sichtbaren Standortpunkt.|
| ![downhill scheme](@site/static/img/widgets/sch_downhill_1.png) ![downhill scheme](@site/static/img/widgets/sch_downhill_2.png)|
|***Steigung*** ist das Verhältnis des Weges zur Horizontalen, wobei Null die Horizontale anzeigt und die Gradzahl einen höheren oder steileren Steigungsgrad anzeigt.|
| **Steigung** – zeigt die maximale Straßensteigung in Prozent von Ihrem Standortpunkt bis zum Ende des sichtbaren Diagramms oder für den ausgewählten Abschnitt der Route ohne den auf dem Bildschirm sichtbaren Standortpunkt. |
|![grade scheme](@site/static/img/widgets/sch_grade_1.png) ![grade scheme](@site/static/img/widgets/sch_grade_2.png)|


## Peilungs-Widget {#bearing-widget}

Peilung ist die Richtung zu einem Ziel außerhalb Ihres Fahrzeugs, wie einem Zielort oder einem Ausgangspunkt. Eine Peilung kann *relativ* (entsprechend Ihrem Kurs) oder *magnetisch* (entsprechend dem Kompass) sein. Zum Beispiel ist eine magnetische Peilung von 180° die Richtung nach Süden, und eine relative Peilung von 180° ist direkt hinter Ihnen. Die Himmelsrichtungen sind die vier Hauptrichtungen des Kompasses. Sie sind Nord (*N* - 0° oder 360°), Ost (*O* - 90°), Süd (*S* - 180°) und West (*W* - 270°).

![Trip recording widget](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trip recording widget](@site/static/img/widgets/bearing_widget.png) ![Trip recording widget](@site/static/img/widgets/bearing_widget_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trip recording widget](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Panel auswählen → Widget hinzufügen → <Translate android="true" ids="shared_string_bearing"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="shared_string_bearing"/>* |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |
| Format | **Android:** Sie können das Datenanzeigeformat für Winkeleinheiten ändern: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
| | **iOS:** Sie können das Datenanzeigeformat für Winkeleinheiten ändern: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |


#### Funktionsweise {#how-it-works}

Um die Peilung anzuzeigen, muss ein **Zielpunkt** ausgewählt werden. Wenn ein **Zielpunkt** (oder der **erste Zwischenpunkt**, falls vorhanden) für die Navigation ausgewählt ist, wird dieser als Zielpunkt verwendet. Andernfalls wird der **oberste ausgewählte Marker** verwendet.

- [Relative Peilung](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) ist der Winkel zwischen Ihrer Vorwärtsbewegungsrichtung und dem Zielpunkt. Die **Vorwärtsbewegungsrichtung** ist entweder die **Richtung Ihrer Bewegung**, die von den GPS-Sensoren erfasst wird, oder, wenn Sie stehen, **wo Sie Ihr Gerät ausgerichtet haben** (d.h. die Ausrichtung Ihres Geräts gemäß seinem Magnetkompass). Beispiel: Ein Objekt mit einer relativen Peilung von 0° befindet sich direkt vor Ihnen und ein Objekt mit einer relativen Peilung von 180° befindet sich direkt hinter Ihnen. Die **relative Peilung** ist der Winkel zwischen Ihrer Vorwärtsrichtung und dem Zielpunkt.

- [Magnetische Peilung](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) ist der im Uhrzeigersinn (horizontal) gemessene Winkel zwischen dem magnetischen Norden und dem von Ihrem Standort aus beobachteten Zielpunkt. Sie müssen diesem magnetischen Kompasswert folgen, um Ihr Ziel zu erreichen. Beispiel: Wenn die **magnetische Peilung** als 0° M angezeigt wird, müssen Sie sich strikt in Richtung des magnetischen Nordens bewegen, um den Zielpunkt zu erreichen.

- [Wahre Peilung](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages) wird als horizontaler Winkel zwischen dem geografischen Meridian und einer Linie auf der Erde ausgedrückt. Insbesondere ist die **wahre Punktpeilung** der Winkel, der in Grad im Uhrzeigersinn von der wahren Nordlinie gemessen wird. Die OsmAnd-Software zeigt Ihnen die wahre Peilung und Richtung in unserer benutzerfreundlichen Oberfläche an, sodass Sie frühzeitig die richtige Entscheidung treffen können.

### Navigation entlang der Rhumb-Linie {#navigation-along-the-rhumb-line}

- **Relative Peilung**. Wenn Sie eine relative Peilung von 0 Grad beibehalten und sich vorwärts bewegen, erreichen Sie den Zielpunkt, aber nicht auf dem kürzesten Weg ( [Rhumb-Linie](https://en.wikipedia.org/wiki/Rhumb_line) ).
- **Magnetische Peilung**. Wenn Sie den Kompass auf Ihrem Boot/Fahrzeug mit dem Widget-Wert ausrichten und sich vorwärts bewegen, erreichen Sie Ihr Ziel, aber nicht auf dem kürzesten Weg ( [Rhumb-Linie](https://en.wikipedia.org/wiki/Rhumb_line) ).

<!--![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- By tapping: Changes between  Relative bearing or Magnetic bearing (with "M") -->


## Navigationspunkte {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

Die Widget-Gruppe *Navigationspunkte* zeigt die verbleibende Entfernung zu Ihrem Ziel, den Zwischenpunkt, die Ankunftszeit am Zwischenpunkt oder die Reisezeit für die berechnete Route und die geschätzte Ankunftszeit an.

### Routeninformationen {#route-information}


![Destination widget](@site/static/img/widgets/route_information_widget.png)

Das Widget *Routeninformationen* liefert Echtzeitdaten über die aktuelle Navigationsroute und eine schnelle Möglichkeit, [eine aktive Route zu verwalten](../navigation/setup/route-navigation.md#start--stop-navigation). Es hilft, wichtige Routendetails im Auge zu behalten und ermöglicht es Ihnen, die aktuelle Navigationssitzung mit minimaler Interaktion zu beenden oder fortzusetzen.

**Angezeigte Informationen:**

- **Geschätzte Ankunftszeit (ETA)**. Zeigt die voraussichtliche Ankunftszeit am Endziel an.
- **Verbleibende Reisezeit**. Zeigt die geschätzte verbleibende Zeit bis zum Erreichen des Ziels an.
- **Entfernung zum Ziel**. Zeigt die gesamte verbleibende Entfernung zum Endziel und die Entfernungen zu Zwischenpunkten an.

**Einstellungsmenü**:

- Wählen Sie eine **Standardansicht**, um einen der folgenden Werte zu priorisieren: *Geschätzte Ankunftszeit*, *Verbleibende Zeit*, *Entfernung*.
- Wählen Sie unter **Anzeigepriorität** zwischen *Ziel zuerst (Standard)* oder *Zwischenpunkt zuerst*, um die relevantesten Routeninformationen zu priorisieren.

> HINWEIS: Das Widget ist nur während der Navigation sichtbar.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget hinzufügen →<Translate android="true" ids="map_widget_route_information"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → Widget hinzufügen → Routeninformationen* |
| Durch Tippen | Tippen Sie auf die Schaltfläche mit dem Pfeil, um das [Start/Stop Navigation Panel](../navigation/setup/route-navigation.md#start--stop-navigation) zu öffnen |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### Entfernung zum Ziel {#distance-to-destination}

![Destination widget](@site/static/img/widgets/destination_widget.png)

Das Widget zeigt die verbleibende Entfernung zum letzten Zielpunkt an, wenn einer berechneten Route gefolgt wird.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| Durch Tippen | Verschiebt die Karte zum Zielpunkt. |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |

### Entfernung zum Zwischenziel {#distance-to-intermediate}

![Intermediate destination widget](@site/static/img/widgets/intermediate_destination_widget.png)

Das Widget zeigt die Entfernung zum ersten Zwischenpunkt entlang der berechneten Route an. Nach dem Passieren von Zwischenpunkten wird der Raum zum nächsten Zwischenpunkt aktualisiert. Wenn keine Zwischenpunkte vorhanden sind, wird das Widget nicht angezeigt.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| Durch Tippen | **Ein Zwischenpunkt** - Karte zum Zwischenpunkt verschieben. <br /> **Zwei oder mehr Zwischenpunkte** - Öffnet das Menü der Zielliste. |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |

### Zeit bis zum Zwischenziel {#time-to-intermediate}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Arrival time Time to go widget](@site/static/img/widgets/arrival_time_widget_android.png) ![Arrival time Time to go widget](@site/static/img/widgets/time_to_go_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Arrival time Time to go widget](@site/static/img/widgets/arrival_time_widget_ios.png) ![Arrival time Time to go widget](@site/static/img/widgets/time_to_go_widget_ios.png)

</TabItem>

</Tabs>

Das Widget zeigt die *Ankunftszeit* oder *verbleibende Zeit* bis zum ersten Zwischenpunkt an. Während der Navigation wird die Zeit ständig aktualisiert, und sobald ein Zwischenpunkt passiert wurde, wird die Zeit zum nächsten Wegpunkt aktualisiert. Wenn Sie beispielsweise die Navigation anhalten, bleibt die *verbleibende Zeit* unverändert und die *Ankunftszeit* entspricht der *verbleibenden Zeit* plus der *aktuellen Zeit*.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| Durch Tippen | Wechselt zwischen *Ankunftszeit* und *verbleibender Zeit* und umgekehrt. |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


### Zeit bis zum Ziel {#time-to-destination}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Intermediate Arrival time Time widget](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Intermediate Arrival time Time widget](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

Das Widget zeigt die *Ankunftszeit* oder *verbleibende Zeit* bis zum letzten Zielpunkt an. Die Zeit wird während der Navigation ständig aktualisiert und entspricht der Routenzeit von Ihrem aktuellen Standort.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| Durch Tippen | Wechselt zwischen *Ankunftszeit* und *verbleibender Zeit* und umgekehrt. |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


## Geschwindigkeitsbegrenzung {#speed-limit}

![Speed limit widget](@site/static/img/widgets/speed_limit_widget_2.png)

Das Widget *Geschwindigkeitsbegrenzung* zeigt die aktuelle Geschwindigkeitsbegrenzung basierend auf den Kartendaten für Ihre Route an.

- Daten stammen aus dem [OpenStreetMap-Projekt](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- Das Widget funktioniert im passiven und aktiven Navigationsmodus.
- Wenn für eine bestimmte Straße oder ein Gebiet keine Geschwindigkeitsbegrenzungsdaten verfügbar sind, *wird das Widget nicht angezeigt*.

> HINWEIS: Stellen Sie sicher, dass Ihre [Karten aktuell sind](../personal/maps-resources.md#updates) und dass Sie alle erforderlichen regionalen Daten heruntergeladen haben, um auf die neuesten Informationen zur Geschwindigkeitsbegrenzung zugreifen zu können.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_max_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="map_widget_max_speed"/>* |
| Durch Tippen | Keine Änderungen |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


## Routenmanöver {#route-maneuvers}

![Next turns widget](@site/static/img/widgets/next_turns_widget.png)

Diese Navigations-Widgets werden während der Navigation aktiviert und zeigen Informationen über die Entfernung zum nächsten Manöver an.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *Menü → Bildschirm konfigurieren → Linkes / Rechtes Panel → Widget hinzufügen → Routenmanöver → Nächste Abbiegung, Nächste Abbiegung (klein), Zweitnächste Abbiegung* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Linkes / Rechtes Panel → Widget hinzufügen → Routenmanöver → Nächste Abbiegung, Nächste Abbiegung (klein), Zweitnächste Abbiegung* |
| Durch Tippen | Wenn [Sprachansagen](../navigation/guidance/voice-navigation.md) aktiviert sind, werden das nächste Manöver und die Entfernung dazu angesagt. |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


### Nächste Abbiegung {#next-turn}

![Next turns widget](@site/static/img/widgets/next_turns_widgets_andr.png)

Die Widgets *Routenmanöver* enthalten Informationen über:

- **Nächste Abbiegung** - die nächste Abbiegung mit einem großen Pfeil, der das Manöver darstellt, und mit Daten über die Entfernung dazu.
- **Nächste Abbiegung (klein)** - die nächste Abbiegung mit einem kleinen Pfeil, der das Manöver darstellt, und mit Entfernungsdaten neben dem Pfeil.
- **Zweitnächste Abbiegung** - die nächste Abbiegung nach der ersten Abbiegung, die aktiviert wird, wenn sie sich innerhalb der Annäherungsdistanz befindet.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *Menü → Bildschirm konfigurieren → Linkes / Rechtes Panel → Widget hinzufügen → Nächste Abbiegung, Nächste Abbiegung (klein), Zweitnächste Abbiegung* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Linkes / Rechtes Panel → Widget hinzufügen → Nächste Abbiegung, Nächste Abbiegung (klein), Zweitnächste Abbiegung* |
| Durch Tippen | Wenn [Sprachansagen](../navigation/guidance/voice-navigation.md) aktiviert sind, werden das nächste Manöver und die Entfernung dazu angesagt. |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


### Farbanzeigen für die nächste Abbiegung {#color-prompts-for-next-turn}

Diese Tabelle zeigt die ungefähre Zeit bis zur Aktivierung der Ansagen und die entsprechende Farbanzeige der Pfeile zur Durchführung des Manövers. Weitere Informationen finden Sie in der [technischen Dokumentation](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) oder im Artikel [Sprachansagen](../navigation/guidance/voice-navigation.md).

| Farbe | ~ Auslösezeit | Entfernung | Ansagetyp |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 Grün | 5 Sekunden | Nah dran | Jetzt abbiegen |
| 🟡 Gelb | 20 Sekunden | Annähernd | Abbiegen in `x` m |
| ⚪ Grau | > 100 Sekunden | Entfernt | Abbiegung vorbereiten |


## Fahrspuren {#lanes}

![Lanes widgets](@site/static/img/widgets/lanes_widget.png)

Das Widget **Fahrspuren** hebt die aktuelle Fahrspur hervor, wenn die Navigation aktiv ist, und zeigt die Fahrspuranordnung für die tatsächliche Straße an, wenn die Navigation passiv ist. Die Daten stammen aus dem [OpenStreetMap-Projekt](https://wiki.openstreetmap.org/wiki/Key:turn).

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="route_guidance"/> → Widget hinzufügen → <Translate android="true" ids="show_lanes"/>* |
| | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget hinzufügen → <Translate android="true" ids="show_lanes"/>* |
| Durch Tippen | Keine Änderungen |

### Farbanzeigen für Fahrspuren {#color-prompts-for-lanes}

Zeigt ein Widget nach den Einstellungen für die Annäherungszeit an. Die Farbe der Fahrspur ist mit den [Sprachansagen](../navigation/guidance/voice-navigation.md) und der verbleibenden Zeit zur Durchführung des Manövers verknüpft.

| Farbe | ~ Auslösezeit | Entfernung | Ansagetyp |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 Grün | 5 Sekunden | Nah dran | [Jetzt abbiegen](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |
| 🟡 Gelb | 20 Sekunden | Annähernd | [Abbiegen in X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |


## Routenführung {#route-guidance}

<InfoAndroidOnly />

![route guidence widget](@site/static/img/widgets/route_guidence_widgets_andr.png)

Bietet Echtzeit-Routenführung, einschließlich Entfernung zur nächsten Abbiegung, Straßenname, aktuellem Straßennamen und Fahrspurinformationen. Widgets sind während der Navigation aktiv.

Die Widgets zur *Routenführung* enthalten Informationen über:

- [Fahrspuren](#lanes) - zeigt die aktuelle Position der Fahrspuren an und hebt die hervor, auf denen Sie fahren sollten.
- **Nächste Abbiegung** - die nächste Abbiegung mit einem großen Pfeil, der das Manöver darstellt, und mit Daten über die Entfernung dazu.
- **Zweitnächste Abbiegung** ist die nächste Abbiegung nach der ersten Abbiegung, die aktiviert wird, wenn sie sich innerhalb der Annäherungsdistanz befindet.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *Menü → Bildschirm konfigurieren → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget hinzufügen → Fahrspur, Nächste Abbiegung, Zweitnächste Abbiegung* |
| Durch Tippen | **Nächste Abbiegung**: Wenn [Sprachansagen](../navigation/guidance/voice-navigation.md) aktiviert sind, werden das nächste Manöver und die Entfernung dazu angesagt. <br/> **Fahrspur**: Keine Änderungen. |
| Langes Tippen | **Nächste Abbiegung**: Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) <br/> **Fahrspur**: Keine Änderungen. |


## Warn-Widget {#alert-widget}

![Alert information widgets](@site/static/img/widgets/alert_information_widget.png)

Das **Warn-Widget** kombiniert verschiedene Arten von Warnungen, die während der Navigation in der unteren linken Ecke angezeigt werden.

- Sie können Warnungen wie *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>,* und *<Translate android="true" ids="show_tunnels"/>* ein- und ausschalten. Andere Warnungen sind standardmäßig aktiv, wenn das Widget aktiviert ist.

- Für den Warnungstyp *Geschwindigkeitsbegrenzung* können Sie den Wert <Translate android="true" ids="speed_limit_exceed"/>](../navigation/guidance/voice-navigation.md#speed-limit) in den Sprachansageeinstellungen anpassen, um die Fahrzeuggeschwindigkeit und die GPS-Geschwindigkeit besser abzugleichen.

- Die meisten Warnungen werden auf dem Bildschirm angezeigt und 15 Sekunden lang per Sprachansage ausgegeben, ebenso wie die Auslösezeit für das Passieren eines Wegpunkts, eines Favoritenpunkts oder eines POI. Lesen Sie mehr [hier](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| Aktivieren | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
| | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### Warnungstypen {#alert-types}

Warnungstypen haben ein unterschiedliches visuelles Design, das von der **<Translate android="true" ids="driving_region"/>** abhängt und über *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>* konfiguriert werden kann. OsmAnd zielt nicht darauf ab, 100% identische Verkehrszeichen darzustellen, sondern weist auf einige Ähnlichkeiten hin.

| | | |
|:------------|:------------|:------------|
| Name | Beschreibung | Symbol |
| *<Translate android="true" ids="show_traffic_warnings"/>* | [Verkehrsberuhigung](https://en.wikipedia.org/wiki/Traffic_calming) verwendet physische Gestaltung und andere Maßnahmen, um die Sicherheit für Autofahrer, Fußgänger und Radfahrer zu verbessern. | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_traffic_calming.png) ![Alert traffic calming us widgets](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | Ein [Fußgängerüberweg](https://en.wikipedia.org/wiki/Pedestrian_crossing) (hauptsächlich britisches Englisch) oder Zebrastreifen ist ein Ort, der für Fußgänger zum Überqueren einer Straße, Gasse oder Allee vorgesehen ist. OsmAnd zeigt die Warnung vor dem unkontrollierten Fußgängerüberweg an. | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_pedestrian.png) ![Alert traffic calming us widgets](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | In den meisten Ländern legen die [Geschwindigkeitsbegrenzungen](https://en.wikipedia.org/wiki/Speed_limit) die gesetzliche Höchst-, Mittel- oder Mindestgeschwindigkeit fest, mit der Straßenfahrzeuge auf einem bestimmten Straßenabschnitt fahren dürfen. In OsmAnd wird die Warnung angezeigt, wenn Sie die Geschwindigkeit überschreiten. Sie können Parameter für die Geschwindigkeitsüberschreitung (0, 5, 10.. km/h) einstellen. ![Alert ex_speed widgets](@site/static/img/widgets/ex_warning_speed.png) | ![Alert speed_limit widgets](@site/static/img/widgets/warnings_limit.png) ![Alert speed_limit_ca widgets](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Alert speed_limit_us widgets](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | Ein Tunnel ist ein unterirdischer Durchgang, der unter einem Berg, Fluss oder einem dicht besiedelten Stadtgebiet hindurchführt. In OsmAnd enthält die Warnung *Tunnel* Informationen über die Tunnellänge. Wenn Sie sich in einem Tunnel befinden, zeigt sie die Entfernung zum Ende des Tunnels an. ![Alert ex_tunnel widgets](@site/static/img/widgets/ex_warning_tunnel.png) | ![Alert warnings_tunnel widgets](@site/static/img/widgets/warnings_tunnel.png) ![Alert warnings_tunnel_us widgets](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | [Verkehrsüberwachungskameras](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) und [Blitzer](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) erfassen Verkehrsverstöße, einschließlich Geschwindigkeitsüberschreitungen, Rotlichtverstößen und anderen Arten illegalen Verhaltens. <br />**HINWEIS:** Blitzerwarnungen sind in einigen Ländern verboten oder illegal. Um Blitzer vollständig aus OsmAnd zu [entfernen](../personal/global-settings.md#legal), gehen Sie zum Hauptmenü *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>* | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_speed_camera.png) |
| *<Translate android="true" ids="traffic_warning_stop"/>* | Ein [Stoppschild](https://en.wikipedia.org/wiki/Stop_sign) ist ein Verkehrszeichen, das Fahrer darauf hinweisen soll, dass sie vollständig anhalten und sicherstellen müssen, dass die Kreuzung frei von Fahrzeugen und Fußgängern ist, bevor sie das Schild passieren. | ![Alert stop widgets](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* |Diese Warnung bedeutet, dass ein [Bahnübergang](https://en.wikipedia.org/wiki/Crossbuck) bevorsteht. | ![Alert warnings_railways widgets](@site/static/img/widgets/warnings_railways.png) ![Alert warnings_railways_ca widgets](@site/static/img/widgets/warnings_railways_ca.png) ![Alert warnings_railways_us widgets](@site/static/img/widgets/warnings_railways_us.png) |
| *<Translate android="true" ids="traffic_warning_border_control"/>* |Diese Warnung zeigt an, dass eine Grenzkontrolle bevorsteht.| ![Alert border control widgets](@site/static/img/widgets/warnings_border_control.png) |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | [Gefahrensymbole oder Warnsymbole](https://en.wikipedia.org/wiki/Hazard_symbol) sind erkennbare Symbole, die vor gefährlichen Materialien, Orten oder Objekten warnen sollen, einschließlich elektrischer Ströme, Gifte und Radioaktivität. | ![Alert warnings_hazard widgets](@site/static/img/widgets/warnings_hazard.png) ![Alert warnings_hazard_us widgets](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | Diese Warnung zeigt an, dass eine Mautstelle für eine Mautstraße bevorsteht. ![Alert toll_booth widgets](@site/static/img/widgets/ex_toll_booth.png) | ![Alert speed_limit widgets](@site/static/img/widgets/warnings_limit.png) |


## Straßenname {#street-name}

Das Widget "Straßenname" zeigt **den aktuellen Straßennamen** mit einem geraden Pfeil oder **den nächsten Straßennamen** mit dem auszuführenden Manöver an. Der Straßenname besteht in der Regel aus einem Autobahnschild, einem [Namen](https://wiki.openstreetmap.org/wiki/Key:name), einer [Referenz](https://wiki.openstreetmap.org/wiki/Key:ref), einer [internationalen Referenz](https://wiki.openstreetmap.org/wiki/Key:int_ref) und einem [Ziel](https://wiki.openstreetmap.org/wiki/Key:destination). Der Wechsel zwischen dem aktuellen Straßennamen und dem nächsten Straßennamen erfolgt, wenn Sie sich dem Ort nähern, an dem Sie das Manöver ausführen möchten (~20 Sekunden), ähnlich der Sprachansage [Abbiegen in X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

- Beim Fahren auf einer Straße oder Autobahn zeigt das Widget den Namen oder die Bezeichnung der aktuellen Straße (Fahrbahn) mit einem blauen Pfeil an.

  ![Street name POIs widget_2](@site/static/img/widgets/street_name_widget_2.png)

- Wenn Sie die Richtung ändern, zeigt das Widget das Manöverschema und den Namen (Bezeichnung) der Straße (Fahrbahn) an, in die Sie abbiegen müssen.

  ![Street name POIs widget](@site/static/img/widgets/street_name_widget.png)

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget hinzufügen → <Translate android="true" ids="map_widget_top_text"/>* |
| | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget hinzufügen → <Translate android="true" ids="map_widget_top_text"/>* |
| Durch Tippen | Keine Änderungen |


## POIs / Favoriten annähern {#approach-pois--favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Approach POIs/Favorites android](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Approach POIs/Favorites ios](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

Das Widget **POIs/Favoriten/Wegpunkte annähern** ist mit [Straßenname](#street-name) kombiniert und zeigt das Annähern und Passieren von Points of Interest, Wegpunkten der gefolgten Strecke und Favoriten entlang der Route an.

Es zeigt den **Namen**, das **Symbol des Punktes** und 2 **Entfernungen** an:

- **Routenentfernung** (oben) zeigt an, wie viel Strecke entlang der Route zurückgelegt werden muss.
- **Abweichungsentfernung** ist eine gerade Entfernung vom nächsten Routenpunkt zum Punkt selbst.

**iOS** - Zusätzlich zur Entfernung zum nächsten Wegpunkt wird auch die Seite (links oder rechts) der Route angezeigt, auf der sich der Wegpunkt befindet.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu"/> → Navigation starten → Bleistiftsymbol* |
| Durch Tippen | Keine Änderungen |


## Verwandte Artikel {#related-articles}

- [Bildschirm konfigurieren](./configure-screen.md)
- [Karten-Schaltflächen](./map-buttons.md)
- [Informations-Widgets](./info-widgets.md)
- [Navigations-Widgets](./nav-widgets.md)
- [Radius-Lineal und Lineal](./radius-ruler.md)
- [Marker-Widgets](./markers.md)
- [Schnellaktion](./quick-action.md)

> *Zuletzt aktualisiert: April 2025*