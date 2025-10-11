---
source-hash: cd4c07ca17073a532727f9088e038002b88141f8fe22166e5d1677766c6e8e03
sidebar_position: 4
title:  Navigations-Widgets
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



## Übersicht {#overview}

Navigations-Widgets werden während der Navigation aktiviert, um Informationen wie Entfernung, Ankunfts- oder verbleibende Zeit, nächste Abbiegungen, Peilung, aktuellen Straßennamen, Fahrspurinformationen, Höchstgeschwindigkeit, Annäherungswarnungen, POIs und Wegpunkte anzuzeigen.

![Alle Navigations-Widgets](@site/static/img/widgets/navigational_widgets_all.png)


## Aktive und passive Navigation {#active-and-passive-navigation}

Navigations-Widgets in OsmAnd sind so konzipiert, dass sie sowohl den **aktiven** als auch den **passiven** Navigationsmodus verbessern. Diese Widgets liefern wertvolle Informationen wie Routenanweisungen, Straßendetails und Geschwindigkeitsbegrenzungen, abhängig vom ausgewählten **Navigationsprofil**.  

#### Aktive Navigation {#active-navigation}

- **Anforderungen:**  
  - Ein **Ziel** festlegen.  
  - Die **Route** mit der Funktion *Route* berechnen.  
  - Navigation **starten** (Sprachführung ist optional).
  - Nur verfügbar, wenn man sich entlang der Route bewegt.

- **Unterstützte Widgets:**  
  - Alle **Navigations-Widgets** sind verfügbar.  

- **Wichtigste Vorteile:**  
  - Bietet **Abbiegehinweise**, **Fahrspurassistent** und **ETA**.  
  - Gewährleistet genaue und dynamische Aktualisierungen während der Fahrt.  

#### Passive Navigation {#passive-navigation}

- **So funktioniert es:**  
  - Es wird kein Ziel benötigt.  
  - Funktioniert automatisch, wenn Sie ein **Navigationsprofil** auswählen (z. B. *Auto*, *Fahrrad*).  

- **Funktionalität:**  
  - Versucht, die Straße, der Sie folgen, anhand von GPS-Daten zu bestimmen.  
  - Zeigt **grundlegende Straßeninformationen** an, wie [Straßenname](#street-name), [Fahrspurinformationen](#lanes), [Höchstgeschwindigkeit](#speed-limit).

- **Einschränkungen:**  
  - Einige erweiterte Funktionen funktionieren möglicherweise ohne ein festgelegtes Ziel nicht korrekt.  
  - Die bereitgestellten Informationen sind möglicherweise nicht immer **präzise**, insbesondere in komplexen Straßennetzen.

> **HINWEIS.** *Beachten Sie, dass das Profil **Karte durchsuchen** in keinem der beiden Modi Navigations-Widgets unterstützt. Wechseln Sie zu einem relevanten **Navigationsprofil**, um diese Funktionen zu aktivieren.*


<!--
Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are unavailable in the **Browse Map** profile.

**Active** navigation requires setting a destination, calculating the route (Directions), and starting navigation (Go), not necessarily with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require a destination point set and works automatically once you switch to any navigational profile, for example, 'Driving'. In that case, the application will try to determine which road you are following and display extra information about it i.e. name, lane info, max speed available. Please note that this approach is unreliable and doesn't support all features.
-->

## Höhenprofil-Widget {#elevation-widget}

<InfoAndroidOnly/>  

:::note
  
<ProFeature/> Dieses Widget können Sie nur mit der Pro-Funktion <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro-Abonnenten</a> nutzen.

:::

Das Höhenprofil-Widget zeigt ein Diagramm mit der Höhe und der Steigung Ihrer Navigationsroute sowie Ihre aktuelle Position auf diesem Diagramm mit aktueller Höhe und Steigung. Das Diagramm wird auf zwei Achsen dargestellt. Die X-Achse ist die Entfernung Ihrer Route. Die Y-Achse ist die Höhe, der Wert hängt vom Relief ab, und die Steigung wird in Prozent angezeigt.  

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Höhenprofil-Widget](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### Interaktionen mit dem Diagramm {#interactions-with-the-graph}

- *Vergrößern/Verkleinern*. Standardmäßig zeigt das Diagramm die Route vom aktuellen Standort bis zu 10 km voraus. Sie können mit einer [Zwei-Finger-Bewegung](../map/interact-with-map.md#gestures) hinein- und herauszoomen, um eine detailliertere Ansicht der Höhenänderungen auf Ihrer Route zu erhalten. Sie können das Diagramm auch nach rechts, auf der Route vorwärts und zurück zum aktuellen Standort verschieben.  
- *Einen Punkt auf dem Diagramm platzieren*. Wenn Sie die Höhe und den Gradwert an einem bestimmten Punkt vor Ihnen auf Ihrer Route sehen möchten, können Sie auf eine beliebige Stelle im Diagramm tippen, und ein Zeiger mit den Werten wird angezeigt.  


#### Inhalte {#whats-in}

Wenn Sie eine Route auswählen und die **Start**-Schaltfläche drücken, öffnet sich die Karte mit Ihrem aktuellen Standort, der Route und dem Widget am unteren Bildschirmrand. Das Widget enthält das Diagramm und Informationen über *Anstieg*, *Gefälle*, *Steigung*, Entfernung, Höhe und Neigungswinkel. Sie können den *optimalen Maßstab* auswählen und alle möglichen Hindernisse auf Ihrer Route sehen.  

- Alle Werte werden entweder für die gesamte Route oder nur für das durch Skalierung des Diagramms ausgewählte Intervall angegeben.
- Lesen Sie mehr über die [Lizenz für die DEM-Daten](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection), die von OsmAnd zur Höhenbestimmung verwendet werden.

|  |
|:------------|
| ***Standort-Pin*** |
| Ihr ***aktueller Standort*** auf dem Diagramm enthält ein Standortsymbol, die Höhe und den prozentualen Steigungswert. Die rechte Seite des Widgets enthält die höchste Höhe und Steigung, den Durchschnittswert für beide und den niedrigsten Wert auf dem ausgewählten, im Diagramm sichtbaren Routenabschnitt. |
| ![Punkt](@site/static/img/widgets/sch_1-1.png)|
| ***Zusätzliche Informationen*** |
| Die rechte Seite des Widgets enthält Daten über die höchste Höhe und Steigung, den Durchschnittswert für beide und die niedrigste Höhe und Steigung auf dem ausgewählten, im Diagramm sichtbaren Routenabschnitt. |
|  ![Daten](@site/static/img/widgets/sch_1-2.png)|
|Die Werte für ***Anstieg*** und ***Gefälle*** sind die Summen der Entfernungen von Ihrem Standortpunkt bis zum Ende des sichtbaren Diagramms. Wenn kein Standortpunkt auf dem Diagramm vorhanden ist, ist es die Summe des gesamten sichtbaren Diagramms auf dem Bildschirm (dies kann passieren, wenn Sie den Maßstab ändern und der Standort außerhalb des Diagramms liegt).|
| **Anstieg** – zeigt die Summe aller Entfernungen mit zunehmender Höhe von Ihrem Standortpunkt bis zum Ende des sichtbaren Diagramms oder für den ausgewählten Routenabschnitt ohne den auf dem Bildschirm sichtbaren Standortpunkt. |
| ![Anstiegsschema](@site/static/img/widgets/sch_uphill_1.png) ![Anstiegsschema](@site/static/img/widgets/sch_uphill_2.png)|  
| **Gefälle** – zeigt die Summe aller Entfernungen mit abnehmender Höhe von Ihrem Standortpunkt bis zum Ende des sichtbaren Diagramms oder für den ausgewählten Routenabschnitt ohne den auf dem Bildschirm sichtbaren Standortpunkt.|
| ![Gefälleschema](@site/static/img/widgets/sch_downhill_1.png) ![Gefälleschema](@site/static/img/widgets/sch_downhill_2.png)|  
|***Steigung*** ist das Verhältnis des Weges zur Horizontalen, wobei Null Horizontalität anzeigt und die Gradzahl einen höheren oder steileren Neigungsgrad angibt.|
| **Steigung** – zeigt die maximale Straßenneigung in Prozent von Ihrem Standortpunkt bis zum Ende des sichtbaren Diagramms oder für den ausgewählten Routenabschnitt ohne den auf dem Bildschirm sichtbaren Standortpunkt. |
|![Steigungsschema](@site/static/img/widgets/sch_grade_1.png) ![Steigungsschema](@site/static/img/widgets/sch_grade_2.png)|


## Peilungs-Widget   {#bearing-widget}
  
Peilung ist die Richtung zu einem Ziel außerhalb Ihres Fahrzeugs, wie z. B. einem Ziel- oder Ausgangspunkt. Eine Peilung kann *relativ* (entsprechend Ihrem Kurs) oder *magnetisch* (entsprechend dem Kompass) sein. Zum Beispiel ist eine magnetische Peilung von 180° die Richtung nach Süden, und eine relative Peilung von 180° ist direkt hinter Ihnen. Die Himmelsrichtungen sind die vier Hauptrichtungen des Kompasses. Sie sind Nord (*N* - 0° oder 360°), Ost (*O* - 90°), Süd (*S* - 180°) und West (*W* - 270°).  

![Widget für Routenaufzeichnung](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget für Routenaufzeichnung](@site/static/img/widgets/bearing_widget.png) ![Widget für Routenaufzeichnung](@site/static/img/widgets/bearing_widget_1.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget für Routenaufzeichnung](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Eine Leiste auswählen → Widget hinzufügen → <Translate android="true" ids="shared_string_bearing"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>  → Eine Leiste auswählen → Widget hinzufügen →  <Translate ios="true" ids="shared_string_bearing"/>* |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |
| Format | **Android:** Sie können das Anzeigeformat für Winkeleinheiten ändern: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
|  | **iOS:** Sie können das Anzeigeformat für Winkeleinheiten ändern: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |  


#### Funktionsweise {#how-it-works}

Um die Peilung anzuzeigen, muss ein **Zielpunkt** ausgewählt werden. Wenn ein **Zielpunkt** (oder der **erste Zwischenpunkt**, falls vorhanden) für die Navigation ausgewählt ist, wird dieser als Zielpunkt verwendet. Andernfalls wird der **oberste ausgewählte Marker** verwendet.  

- [Relative Peilung](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) ist der Winkel zwischen Ihrer Vorwärtsbewegungsrichtung und dem Zielpunkt. Die **Vorwärtsbewegungsrichtung** ist entweder die **Richtung Ihrer Bewegung**, die von den GPS-Sensoren erfasst wird, oder, wenn Sie stehen, **wohin Sie Ihr Gerät gerichtet haben** (d. h. die Ausrichtung Ihres Geräts gemäß seinem Magnetkompass). Beispiel: Ein Objekt mit einer relativen Peilung von 0° befindet sich direkt vor Ihnen und ein Objekt mit einer relativen Peilung von 180° befindet sich direkt hinter Ihnen. Die **relative Peilung** ist der Winkel zwischen Ihrer Vorwärtsrichtung und dem Zielpunkt.

- [Magnetische Peilung](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) ist der im Uhrzeigersinn (horizontal) gemessene Winkel zwischen dem magnetischen Norden und dem von Ihrem Standort aus beobachteten Zielpunkt. Sie müssen diesem Magnetkompasswert folgen, um Ihr Ziel zu erreichen. Beispiel: Wenn die **magnetische Peilung** als 0° M angezeigt wird, müssen Sie sich strikt nach magnetisch Nord bewegen, um den Zielpunkt zu erreichen.

- [Rechtweisende Peilung](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages) wird als horizontaler Winkel zwischen dem geografischen Meridian und einer Linie auf der Erde ausgedrückt. Insbesondere ist die **rechtweisende Punktpeilung** der im Uhrzeigersinn in Grad gemessene Winkel von der rechtweisenden Nordlinie. Die OsmAnd-Software zeigt Ihnen die rechtweisende Peilung und den Kurs in unserer benutzerfreundlichen Oberfläche an, sodass Sie frühzeitig die richtige Entscheidung treffen können.

### Navigation entlang der Loxodrome {#navigation-along-the-rhumb-line}

- **Relative Peilung**. Wenn Sie sich an eine relative Peilung von 0 Grad halten und sich vorwärts bewegen, erreichen Sie den Zielpunkt, aber nicht auf dem kürzesten Weg ( [Loxodrome](https://en.wikipedia.org/wiki/Rhumb_line) ).
- **Magnetische Peilung**. Wenn Sie den Kompass auf Ihrem Boot/Fahrzeug mit dem Widget-Wert ausrichten und vorwärts fahren, erreichen Sie Ihr Ziel, aber nicht auf dem kürzesten Weg ( [Loxodrome](https://en.wikipedia.org/wiki/Rhumb_line) ).

<!--![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- By tapping: Changes between  Relative bearing or Magnetic bearing (with "M") -->


## Navigationspunkte {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

Die Widget-Gruppe *Navigationspunkt* zeigt die verbleibende Entfernung zu Ihrem Ziel, dem Zwischenpunkt, die Ankunftszeit am Zwischenpunkt oder die Fahrzeit für die berechnete Route und die voraussichtliche Ankunftszeit an.

### Routeninformationen {#route-information}


![Ziel-Widget](@site/static/img/widgets/route_information_widget.png)  

Das Widget *Routeninformationen* liefert Echtzeitdaten über die laufende Navigationsroute und eine schnelle Möglichkeit, [eine aktive Route zu verwalten](../navigation/setup/route-navigation.md#start--stop-navigation). Es hilft, wichtige Routendetails im Auge zu behalten und ermöglicht es Ihnen, die aktuelle Navigationssitzung mit minimaler Interaktion zu stoppen oder fortzusetzen.

**Angezeigte Informationen:**

- **Voraussichtliche Ankunftszeit (ETA)**. Zeigt die erwartete Ankunftszeit am Endziel an.
- **Verbleibende Fahrzeit**. Zeigt die geschätzte verbleibende Zeit bis zum Erreichen des Ziels an.
- **Entfernung zum Ziel**. Gibt die gesamte verbleibende Entfernung zum Endziel und die Entfernungen zu den Zwischenpunkten an.

**Einstellungsmenü**:

- Wählen Sie eine **Standardansicht**, um einen der folgenden Werte zu priorisieren: *Voraussichtliche Ankunftszeit*, *Verbleibende Zeit*, *Entfernung*.
- Wählen Sie unter **Anzeigepriorität** zwischen *Ziel zuerst (Standard)* oder *Zwischenziel zuerst*, um die relevantesten Routeninformationen zu priorisieren.

> HINWEIS: Das Widget ist nur während der Navigation sichtbar.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget hinzufügen →<Translate android="true" ids="map_widget_route_information"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → Widget hinzufügen  →Routeninformationen* |
| Durch Tippen | Tippen Sie auf die Schaltfläche mit dem Pfeil, um das [Start/Stopp-Navigationspanel](../navigation/setup/route-navigation.md#start--stop-navigation) zu öffnen |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### Entfernung zum Ziel {#distance-to-destination}

![Ziel-Widget](@site/static/img/widgets/destination_widget.png)  

Das Widget zeigt die verbleibende Entfernung zum letzten Zielpunkt an, wenn einer berechneten Route gefolgt wird.  

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Eine Leiste auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Eine Leiste auswählen → Widget hinzufügen → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| Durch Tippen | Verschiebt die Karte zum Zielpunkt. |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |

### Entfernung zum Zwischenziel {#distance-to-intermediate}

![Zwischenziel-Widget](@site/static/img/widgets/intermediate_destination_widget.png)

Das Widget zeigt die Entfernung zum ersten Zwischenziel entlang der berechneten Route. Nach dem Passieren von Zwischenzielen wird der Platz für das nächste Zwischenziel aktualisiert. Wenn keine Zwischenziele vorhanden sind, wird das Widget nicht angezeigt.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Eine Leiste auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Eine Leiste auswählen → Widget hinzufügen → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| Durch Tippen | **Ein Zwischenziel** - verschiebt die Karte zum Zwischenziel. <br /> **Zwei oder mehr Zwischenziele** - öffnet das Menü der Zielliste. |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |

### Zeit bis zum Zwischenziel {#time-to-intermediate}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ankunftszeit/Verbleibende Zeit Widget](@site/static/img/widgets/arrival_time_widget_android.png)  ![Ankunftszeit/Verbleibende Zeit Widget](@site/static/img/widgets/time_to_go_widget_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Ankunftszeit/Verbleibende Zeit Widget](@site/static/img/widgets/arrival_time_widget_ios.png)  ![Ankunftszeit/Verbleibende Zeit Widget](@site/static/img/widgets/time_to_go_widget_ios.png)  

</TabItem>

</Tabs>  

Das Widget zeigt die *Ankunftszeit* oder die *verbleibende Zeit* bis zum ersten Zwischenziel an. Während der Navigation wird die Zeit ständig aktualisiert, und sobald ein Zwischenziel passiert wird, wird die Zeit für den nächsten Wegpunkt aktualisiert. Wenn Sie beispielsweise die Navigation anhalten, bleibt die *verbleibende Zeit* unverändert und die *Ankunftszeit* entspricht der *verbleibenden Zeit* plus der *aktuellen Zeit*.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Eine Leiste auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Eine Leiste auswählen → Widget hinzufügen →  <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| Durch Tippen | Wechselt zwischen *Ankunftszeit* und *Verbleibende Zeit* und umgekehrt. |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


### Zeit bis zum Ziel {#time-to-destination}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Zwischenziel Ankunftszeit/Zeit Widget](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Zwischenziel Ankunftszeit/Zeit Widget](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

Das Widget zeigt die *Ankunftszeit* oder die *verbleibende Zeit* bis zum letzten Zielpunkt an. Die Zeit wird während der Navigation ständig aktualisiert und entspricht der Routenzeit von Ihrem aktuellen Standort.  

| | |
|:------------|:------------|
| Aktivieren |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Eine Leiste auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_time_to_destination"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Eine Leiste auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| Durch Tippen | Wechselt zwischen *Ankunftszeit* und *Verbleibende Zeit* und umgekehrt. |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |  


## Geschwindigkeitsbegrenzung {#speed-limit}

![Widget für Geschwindigkeitsbegrenzung](@site/static/img/widgets/speed_limit_widget_2.png)

Das Widget *Geschwindigkeitsbegrenzung* zeigt die aktuelle Geschwindigkeitsbegrenzung basierend auf den Kartendaten für Ihre Route an.

- Die Daten stammen aus dem [OpenStreetMap-Projekt](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- Das Widget funktioniert im passiven und aktiven Navigationsmodus.
- Wenn für eine bestimmte Straße oder ein bestimmtes Gebiet keine Daten zur Geschwindigkeitsbegrenzung verfügbar sind, *wird das Widget nicht angezeigt*.

> HINWEIS: Stellen Sie sicher, dass Ihre [Karten auf dem neuesten Stand sind](../personal/maps-resources.md#updates-menu) und dass Sie alle erforderlichen regionalen Daten heruntergeladen haben, um auf die neuesten Informationen zu Geschwindigkeitsbegrenzungen zugreifen zu können.

| |  |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Eine Leiste auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_max_speed"/>* |
|  |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Eine Leiste auswählen → Widget hinzufügen → <Translate ios="true" ids="map_widget_max_speed"/>* |
| Durch Tippen | Keine Änderungen |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


## Routenführung {#route-guidance}


![Widget für nächste Abbiegungen](@site/static/img/widgets/next_turns_widget.png)

Bietet Echtzeit-Routenführung, einschließlich der Entfernung zur nächsten Abbiegung, des Straßennamens, des aktuellen Straßennamens und der Fahrspurinformationen. Widgets sind während der Navigation aktiv.

Die *Routenführungs*-Widgets enthalten Informationen über:

- [Fahrspuren](#lanes) - zeigt die aktuelle Position der Fahrspuren an und hebt diejenigen hervor, auf denen Sie fahren sollten. (nur für _Obere / Untere Leisten_)
- [Nächste Abbiegung](#next-turn) - die nächste Abbiegung mit einem großen Pfeil, der das Manöver darstellt, und mit Daten zur Entfernung dorthin.
- [Nächste Abbiegung (klein)](#next-turn) - die nächste Abbiegung mit einem kleinen Pfeil, der das Manöver darstellt, und mit Entfernungsdaten neben dem Pfeil. (nur für _Linke / Rechte Leisten_)
- [Zweite nächste Abbiegung](#next-turn) ist die nächste Abbiegung nach der ersten Abbiegung, die aktiviert wird, wenn sie sich in Annäherungsdistanz befindet.

| | |
|:------------|:------------|
| Aktivieren      | **Android:** *Menü → Bildschirm konfigurieren →  Linke / Rechte / Obere / Untere Leiste → Routenführung → Widget hinzufügen → Fahrspur, Nächste Abbiegung, Zweite nächste Abbiegung*  |
|      | **iOS:** *Menü → Bildschirm konfigurieren →  Linke / Rechte / Obere / Untere Leiste → Routenführung → Widget hinzufügen → Fahrspur, Nächste Abbiegung, Zweite nächste Abbiegung*   |
| Durch Tippen  | **Nächste Abbiegung**: Wenn [Sprachansagen](../navigation/guidance/voice-navigation.md) aktiviert sind, werden das nächste Manöver und die Entfernung dorthin angesagt. <br/> **Fahrspur**: Keine Änderungen. |
| Langes Tippen    | **Nächste Abbiegung**: Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) <br/> **Fahrspuren**: Keine Änderungen. |


### Nächste Abbiegung {#next-turn}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Routenführungs-Widget](@site/static/img/widgets/route_guidence_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Annäherung an POIs/Favoriten iOS](@site/static/img/widgets/route_guidence_widgets_ios.png)

</TabItem>

</Tabs>

Die Navigations-Widgets **Nächste Abbiegung**, **Nächste Abbiegung (klein)**, **Zweite nächste Abbiegung** können auf jeder Leiste für die Benutzerfreundlichkeit platziert werden. Allerdings unterscheidet sich die angezeigte Information je nach Widget-Typ und Platzierung. Die folgende Tabelle fasst das Verhalten zusammen:

|   Widget/Leiste   | Linke Leiste    | Rechte Leiste   | Obere Leiste              | Untere Leiste           |
| :--------------- | :------------ | :------------ | :--------------------- | :--------------------- |
| **Nächste Abbiegung**        | Nur Entfernung | Nur Entfernung | Straßenname + Entfernung | Straßenname + Entfernung |
| **Nächste Abbiegung (klein)**| Nur Entfernung | Nur Entfernung | Nicht verfügbar          | Nicht verfügbar          |
| **Zweite nächste Abbiegung** | Nur Entfernung | Nur Entfernung | Straßenname + Entfernung | Straßenname + Entfernung |


### Farbhinweise für die nächste Abbiegung {#color-prompts-for-next-turn}

Diese Tabelle zeigt die ungefähre Zeit bis zur Aktivierung der Ansagen und die entsprechende Farbanzeige der Pfeile zur Durchführung des Manövers. Weitere Informationen finden Sie in der [technischen Dokumentation](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) oder im Artikel [Sprachansagen](../navigation/guidance/voice-navigation.md).

| Farbe     | ~ Auslösezeit | Entfernung   | Ansagetyp     |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 Grün  | 5 Sekunden      | In der Nähe   | Jetzt abbiegen        |
| 🟡 Gelb | 20 Sekunden     | Annäherung| In `x` m abbiegen   |
| ⚪ Grau   | > 100 Sekunden  | Entfernt    | Zum Abbiegen vorbereiten |


### Fahrspuren {#lanes}

![Fahrspur-Widgets](@site/static/img/widgets/lanes_widget.png)

Das **Fahrspur**-Widget hebt die aktuelle Fahrspur bei aktiver Navigation hervor und zeigt das Fahrspurlayout für die tatsächliche Straße bei passiver Navigation an. Ein Entfernungsindikator wird auch unter dem Fahrspurdiagramm angezeigt, der angibt, wie weit es noch bis zum Manöver ist, auf das sich die Fahrspurführung bezieht. Dieses Widget ist nur für die oberen und unteren Leisten verfügbar. Die Daten stammen aus dem [OpenStreetMap-Projekt](https://wiki.openstreetmap.org/wiki/Key:turn).

### Farbhinweise für Fahrspuren {#color-prompts-for-lanes}

Zeigt ein Widget gemäß den Annäherungszeiteinstellungen an. Die Farbe der Fahrspur ist mit den [Sprachansagen](../navigation/guidance/voice-navigation.md) und der verbleibenden Zeit zur Durchführung des Manövers verknüpft.

| Farbe     | ~ Auslösezeit | Entfernung    | Ansagetyp |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 Grün  | 5 Sekunden      | In der Nähe    | [Jetzt abbiegen](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) |
| 🟡 Gelb | 20 Sekunden     | Annäherung | [In X m abbiegen](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) |



## Warnungs-Widget {#alert-widget}

![Warnungsinformations-Widgets](@site/static/img/widgets/alert_information_widget.png)

Das **Warnungs-Widget** kombiniert verschiedene Arten von Warnungen, die während der Navigation in der unteren linken Ecke angezeigt werden.  

- Sie haben die Möglichkeit, Warnungen wie *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>,* und *<Translate android="true" ids="show_tunnels"/>* ein- und auszuschalten. Andere Warnungen sind standardmäßig aktiv, wenn das Widget aktiviert ist.  

- Für den Warnungstyp *Geschwindigkeitsbegrenzung* können Sie den Wert <Translate android="true" ids="speed_limit_exceed"/> in den Einstellungen für Sprachansagen anpassen, um die Fahrzeuggeschwindigkeit und die GPS-Geschwindigkeit besser abzugleichen.  

- Die meisten Warnungen werden 15 Sekunden lang auf dem Bildschirm angezeigt und per Sprachansage angekündigt, ebenso wie die Auslösezeit für das Passieren eines Wegpunkts, Favoritenpunkts oder POIs. Lesen Sie mehr [hier](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| Aktivieren | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
|  | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### Warnungstypen {#alert-types}

Warnungstypen haben ein unterschiedliches visuelles Design, das von der **<Translate android="true" ids="driving_region"/>** abhängt und über *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>* konfiguriert werden kann. OsmAnd zielt nicht darauf ab, 100% identische Verkehrszeichen darzustellen, weist aber auf einige Ähnlichkeiten hin.

| | | |
|:------------|:------------|:------------|
| Name | Beschreibung | Symbol |
| *<Translate android="true" ids="show_traffic_warnings"/>* | [Verkehrsberuhigung](https://en.wikipedia.org/wiki/Traffic_calming) nutzt bauliche Gestaltung und andere Maßnahmen, um die Sicherheit für Autofahrer, Fußgänger und Radfahrer zu verbessern. | ![Warnungs-Widgets Verkehrsberuhigung](@site/static/img/widgets/warnings_traffic_calming.png)  ![Warnungs-Widgets Verkehrsberuhigung US](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | [Ein Fußgängerüberweg](https://en.wikipedia.org/wiki/Pedestrian_crossing) (vor allem im britischen Englisch) oder Zebrastreifen ist ein für Fußgänger vorgesehener Ort zum Überqueren einer Straße, Gasse oder Allee. OsmAnd zeigt die Warnung vor ungesicherten Fußgängerüberwegen an.  | ![Warnungs-Widgets Verkehrsberuhigung](@site/static/img/widgets/warnings_pedestrian.png)  ![Warnungs-Widgets Verkehrsberuhigung US](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | In den meisten Ländern legen die [Straßengeschwindigkeitsbegrenzungen](https://en.wikipedia.org/wiki/Speed_limit) die gesetzliche Höchst-, Mittel- oder Mindestgeschwindigkeit fest, mit der Straßenfahrzeuge auf einem bestimmten Straßenabschnitt fahren dürfen. In OsmAnd wird die Warnung angezeigt, wenn Sie die Geschwindigkeit überschreiten. Sie können die Parameter der Geschwindigkeitsüberschreitung (0, 5, 10.. km/h) einstellen. ![Warnungs-Widgets Geschwindigkeitsüberschreitung](@site/static/img/widgets/ex_warning_speed.png)  | ![Warnungs-Widgets Geschwindigkeitsbegrenzung](@site/static/img/widgets/warnings_limit.png) ![Warnungs-Widgets Geschwindigkeitsbegrenzung CA](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Warnungs-Widgets Geschwindigkeitsbegrenzung US](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | Ein Tunnel ist ein unterirdischer Durchgang, der unter einem Berg, einem Fluss oder einem verkehrsreichen Stadtgebiet verläuft. In OsmAnd enthält die Warnung *Tunnel* Informationen über die Tunnellänge. Wenn Sie sich in einem Tunnel befinden, wird die Entfernung bis zum Ende des Tunnels angezeigt.   ![Warnungs-Widgets Tunnel Beispiel](@site/static/img/widgets/ex_warning_tunnel.png)  | ![Warnungs-Widgets Tunnel](@site/static/img/widgets/warnings_tunnel.png)  ![Warnungs-Widgets Tunnel US](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | [Verkehrsüberwachungskameras](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) und [Radarkameras](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) zeichnen Verkehrsverstöße auf, einschließlich Geschwindigkeitsüberschreitungen, Rotlichtverstöße und andere Arten von illegalem Verhalten. <br />**HINWEIS:** Warnungen vor Radarkameras sind in einigen Ländern verboten oder illegal. Um Radarkameras vollständig aus OsmAnd zu [entfernen](../personal/global-settings.md#legal), gehen Sie zum Hauptmenü *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  | ![Warnungs-Widgets Verkehrsberuhigung](@site/static/img/widgets/warnings_speed_camera.png)   |
| *<Translate android="true" ids="traffic_warning_stop"/>* | [Ein Stoppschild](https://en.wikipedia.org/wiki/Stop_sign) ist ein Verkehrszeichen, das Fahrer darauf hinweist, dass sie vollständig anhalten und sicherstellen müssen, dass die Kreuzung frei von Fahrzeugen und Fußgängern ist, bevor sie das Schild passieren.  | ![Warnungs-Widgets Stopp](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* |Diese Warnung bedeutet, dass sich vor Ihnen ein [Bahnübergang](https://en.wikipedia.org/wiki/Crossbuck) befindet. | ![Warnungs-Widgets Bahnübergang](@site/static/img/widgets/warnings_railways.png) ![Warnungs-Widgets Bahnübergang CA](@site/static/img/widgets/warnings_railways_ca.png)  ![Warnungs-Widgets Bahnübergang US](@site/static/img/widgets/warnings_railways_us.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* |Diese Warnung zeigt an, dass sich eine Grenzkontrolle vor Ihnen befindet.| ![Warnungs-Widgets Grenzkontrolle](@site/static/img/widgets/warnings_border_control.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | [Gefahrensymbole oder Warnsymbole](https://en.wikipedia.org/wiki/Hazard_symbol) sind erkennbare Symbole, die vor gefährlichen Materialien, Orten oder Objekten warnen, einschließlich elektrischer Ströme, Gifte und Radioaktivität. | ![Warnungs-Widgets Gefahr](@site/static/img/widgets/warnings_hazard.png)  ![Warnungs-Widgets Gefahr US](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | Diese Warnung zeigt an, dass sich eine Mautstelle für eine mautpflichtige Straße vor Ihnen befindet.   ![Warnungs-Widgets Mautstelle](@site/static/img/widgets/ex_toll_booth.png) | ![Warnungs-Widgets Geschwindigkeitsbegrenzung](@site/static/img/widgets/warnings_limit.png) |


## Straßenname {#street-name}

Das Straßenname-Widget zeigt **den aktuellen Straßennamen** mit einem geraden Pfeil oder **den nächsten Straßennamen** mit dem auszuführenden Manöver an. Der Straßenname besteht normalerweise aus einem Straßenschild, einem [Namen](https://wiki.openstreetmap.org/wiki/Key:name), einer [Referenz](https://wiki.openstreetmap.org/wiki/Key:ref), einer [internationalen Referenz](https://wiki.openstreetmap.org/wiki/Key:int_ref) und einem [Ziel](https://wiki.openstreetmap.org/wiki/Key:destination). 

In den **Einstellungen** des Widgets können Sie auswählen, dass immer **der aktuelle Straßenname** angezeigt wird und es mit dem Widget [**Nächste Abbiegung**](#next-turn) verwenden. **Informationen zur nächsten Abbiegung** ist standardmäßig AUS. Wenn Sie es aktivieren, erfolgt der Wechsel zwischen dem aktuellen und dem nächsten Straßennamen, wenn Sie sich dem Ort nähern, an dem Sie das Manöver ausführen möchten (~20 Sekunden), analog zur Sprachansage [In X m abbiegen](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

- Wenn Sie auf einer Straße oder Autobahn fahren, zeigt das Widget den Namen oder die Bezeichnung der aktuellen Straße (Straße) mit einem blauen Pfeil an.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

 ![Straßenname ohne nächste Abbiegung](@site/static/img/widgets/without_next_turn_and.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

 ![Straßenname ohne nächste Abbiegung iOS](@site/static/img/widgets/without_next_turn_ios.png) 

</TabItem>

</Tabs>

- Wenn Sie die Richtung ändern, zeigt das Widget das Schema des Manövers und den Namen (Bezeichnung) der Straße (Straße), in die Sie abbiegen müssen, mit einem gelben Pfeil (Informationen zur nächsten Abbiegung = EIN).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

 ![Straßenname mit nächste Abbiegung](@site/static/img/widgets/with_next_turn_and.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

 ![Straßenname mit nächste Abbiegung iOS](@site/static/img/widgets/with_next_turn_ios.png) 

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget hinzufügen → <Translate android="true" ids="map_widget_top_text"/>* |
|   | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget hinzufügen → <Translate android="true" ids="map_widget_top_text"/>* |
| Durch Tippen | Öffnet ein Kontextmenü mit Einstellungen (Umschalten von Informationen zur nächsten Abbiegung EIN/AUS) und Löschen |


## Annäherung an POIs / Favoriten {#approach-pois--favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Annäherung an POIs/Favoriten Android](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Annäherung an POIs/Favoriten iOS](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

Das Widget **Annäherung an POIs/Favoriten/Wegpunkte** wird mit dem [Straßennamen](#street-name) kombiniert und zeigt die Annäherung an und das Passieren von Points of Interest, Wegpunkten eines verfolgten Tracks und Favoriten entlang der Route an.  

Es zeigt den **Namen**, das **Symbol des Punktes** und 2 **Entfernungen** an:

- **Routenentfernung** (oben) zeigt an, wie viel Strecke noch auf der folgenden Route zurückgelegt werden muss.
- **Abweichungsentfernung** ist die direkte Entfernung vom nächstgelegenen Routenpunkt zum Punkt selbst.

**iOS** - Zusätzlich zur Entfernung zum nächsten Wegpunkt wird auch die Seite (links oder rechts) der Route angezeigt, auf der sich der Wegpunkt befindet.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu"/> → Navigation starten → Bleistift-Schaltfläche* |
| Durch Tippen | Keine Änderungen |


## Verwandte Artikel {#related-articles}

- [Bildschirm konfigurieren](./configure-screen.md)
- [Karten-Schaltflächen](./map-buttons.md)
- [Informations-Widgets](./info-widgets.md)
- [Navigations-Widgets](./nav-widgets.md)
- [Radius-Lineal und Lineal](./radius-ruler.md)
- [Marker-Widgets](./markers.md)
- [Schnellaktion](./quick-action.md)