---
source-hash: 27b32890625cf93a03c736a3e9e5b69340ef24cbdda764258f58f7265e15c755
sidebar_position: 3
title: Informations-Widgets
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

Informations-Widgets bieten Ihnen schnellen Zugriff auf wichtige Daten. Dies können Daten zu Geschwindigkeit, Wetter, Parkposition, Daten von externen Sensoren und vieles mehr sein. Widgets können nach Ihren spezifischen Anforderungen konfiguriert werden, wodurch ihre Sichtbarkeit auf dem Anwendungsbildschirm aktiviert oder bei Bedarf deaktiviert werden kann.

![Informations-Widgets](@site/static/img/widgets/informational_widgets_all.png)


## Höhen-Widgets {#altitude-widgets}

Höhen-Widgets zeigen die Höhe über dem Meeresspiegel des aktuellen Geolokationspunkts und die Höhe des Kartenzentrums an.


### Höhe: Aktueller Standort {#altitude-current-location}

:::note Welt-Höhenkorrektur herunterladen
Auf einigen Android-Geräten kann die Höhenanzeige ungenau sein. Um dieses Problem zu lösen, laden Sie eine Karte mit Höhenkorrektur herunter.

- Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.
- Weitere Details finden Sie unter [Karten & Ressourcen](../personal/maps-resources.md#downloads).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Höhen-Widget Android](@site/static/img/widgets/altitude_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Höhen-Widget iOS](@site/static/img/widgets/altitude_widget_ios.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_altitude_current_location"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="map_widget_altitude_current_location"/>* |
| Durch Tippen | Keine Änderungen |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |
| Format | *Menü → Einstellungen → App-Profile → Allgemeine Einstellungen → Einheiten & Formate → Längeneinheiten* |


### Höhe: Kartenzentrum {#elevation-map-center}

:::info Kostenpflichtige Funktion
&nbsp;<ProFeature/> Um Zugriff auf das Widget *Höhe: Kartenzentrum* zu erhalten, abonnieren Sie OsmAnd Pro für [Android](../purchases/android.md#pro-features) oder [iOS](../purchases/ios.md#pro-features).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Höhen-Widget Android](@site/static/img/widgets/elevation_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Höhen-Widget iOS](@site/static/img/widgets/elevation_widget_2_ios.png)

</TabItem>

</Tabs>

Mit dem Widget können Sie die Höhe des aktuellen Kartenzentrums über dem Meeresspiegel abrufen. Eine [Geländekarte (Schummerung und Neigung)](../plugins/topography.md#download-maps) des benötigten Gebiets ist erforderlich, um Informationen im Widget **Höhe: Kartenzentrum** anzuzeigen.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_altitude_map_center"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="map_widget_altitude_map_center"/>* |
| Durch Tippen | Keine Änderungen |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |
| Format | *Menü → Einstellungen → App-Profile → Allgemeine Einstellungen → Einheiten & Formate → Längeneinheiten* |


## Aktuelle Uhrzeit {#current-time}

![Aktuelle Uhrzeit Widget](@site/static/img/widgets/current_time_widget.png)

Dieses Widget zeigt die aktuelle Uhrzeit an, die von Ihrem Gerät übernommen wird.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_plain_time"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="map_widget_plain_time"/>* |
| Durch Tippen | Keine Änderungen |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |
| Format | Geräteeinstellungen konfigurieren Zeit & Format. |


## Aktuelle Geschwindigkeit {#current-speed}

![Geschwindigkeits-Widget](@site/static/img/widgets/current_speed_widget.png)

Das Widget zeigt die aktuelle Geschwindigkeit an, die vom GPS-Sensor erfasst wird.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_current_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="map_widget_current_speed"/>* |
| Durch Tippen | Keine Änderungen |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,default_speed_system"/>* |


## Durchschnittsgeschwindigkeit {#average-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Durchschnittsgeschwindigkeits-Widget Android](@site/static/img/widgets/average_speed_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Durchschnittsgeschwindigkeits-Widget iOS](@site/static/img/widgets/average_speed_widget_ios_2.png)

</TabItem>

</Tabs>

Das Widget **Durchschnittsgeschwindigkeit** berechnet und zeigt Ihre Durchschnittsgeschwindigkeit über ein ausgewähltes Zeitintervall an, ohne dass Navigation oder Track-Aufzeichnung erforderlich sind. Es ist nützlich, um die Einhaltung der Geschwindigkeit auf Autobahnen zu überwachen oder die Durchschnittsgeschwindigkeit über die letzten Minuten des Radfahrens zu verfolgen.

1. ***Widget konfigurieren.***
   Um die Einstellungen anzupassen, tippen Sie auf die Schaltfläche **Einstellungen** (*Android*) oder das **Widget-Feld** (*iOS*). Verfügbare Optionen sind:

2. ***Zeitintervall.***

   - Die Durchschnittsgeschwindigkeit wird basierend auf dem ausgewählten Zeitintervall berechnet, das zwischen **15 Sekunden und 60 Minuten** liegen kann.

   - Die Berechnung basiert auf GPS-Daten unter Verwendung der Formel:
   `Durchschnittsgeschwindigkeit = MITTELWERT(GPS_LOCATION.speed)`.

3. ***Stopps berücksichtigen.***

   **Aktiviert** — Wenn die aufgezeichnete Geschwindigkeit unter 1 Einheit pro Stunde liegt, wird sie ignoriert, wodurch unnötige Abfälle der Durchschnittsgeschwindigkeit beim Anhalten an Ampeln oder bei kurzen Pausen vermieden werden.

   **Deaktiviert** — Stopps werden in die Berechnung einbezogen, was bedeutet, dass lange Pausen die gesamte Durchschnittsgeschwindigkeit reduzieren.

4. ***Durchschnittsgeschwindigkeit zurücksetzen.***
   Sie können die Berechnung der Durchschnittsgeschwindigkeit auf zwei Arten zurücksetzen:

   - Tippen Sie lange auf das Widget, um das [Kontextmenü](../widgets/configure-screen.md#widget-context-menu) zu öffnen, und wählen Sie *Durchschnittsgeschwindigkeit zurücksetzen*.
   - Öffnen Sie die *Widget-Einstellungen* über das [Bildschirm konfigurieren-Menü](../widgets/configure-screen.md#settings) und wählen Sie die Option zum Zurücksetzen.

Nach dem Zurücksetzen wird die Durchschnittsgeschwindigkeit aus den neuen GPS-Daten neu berechnet. Diese Funktion ist nützlich für die Echtzeit-Geschwindigkeitsüberwachung, z. B. zur Verfolgung der Geschwindigkeit in Bereichen mit **Durchschnittsgeschwindigkeitskameras**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Durchschnittsgeschwindigkeit](@site/static/img/widgets/average_speed_widget_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Durchschnittsgeschwindigkeits-Widgets](@site/static/img/widgets/average_speed_widget_ios_1.png) ![Durchschnittsgeschwindigkeits-Widgets](@site/static/img/widgets/average_speed_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_average_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="map_widget_average_speed"/>* |
| Durch Tippen | Keine Änderungen |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu). <br/> Kann zum Zurücksetzen der Durchschnittsgeschwindigkeit verwendet werden. |


## Gleitverhältnis {#glide-ratio}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|Widgets| Widgets auf dem Bildschirm|
|:--------|:---------|
|![Gleitverhältnis](@site/static/img/widgets/glide_ratio_3.png)|![Gleitverhältnis](@site/blog/2023-12-22-android-4-6/img/glide_ratio_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|Widgets| Widgets auf dem Bildschirm|
|:--------|:---------|
|![Gleitverhältnis](@site/static/img/widgets/glide_ratio_1_widget_ios.png)|![Gleitverhältnis](@site/static/img/widgets/glide_ratio_widget_ios.png)|


</TabItem>

</Tabs>

Das [einfache](../widgets/configure-screen.md#widgets-for-all-panels) *Gleitverhältnis*-Widget liefert wertvolle Informationen zum Gleitverhältnis, um fundierte Entscheidungen bei der Planung von Flugrouten zu treffen. Das *Gleitverhältnis*-Widget in OsmAnd hilft Ihnen, die Effizienz Ihres Sink- oder Steigflugs beim Navigieren zu einem bestimmten Ort ([Marker](../personal/markers.md)-Position auf der Karte) zu bewerten. Es berechnet das Gleitverhältnis als das Verhältnis der Entfernung zum Höhenunterschied zwischen Ihrer aktuellen Position und Ihrem beabsichtigten Ziel. Mehr dazu können Sie [hier](https://en.wikipedia.org/wiki/Lift-to-drag_ratio#Glide_ratio) lesen.


**Widget-Nutzung:**

- *Planung von Segelflügen.* Für Segelflieger wird das Widget *Gleitverhältnis zum Ziel* zu einem unverzichtbaren Werkzeug bei der Planung und Durchführung von Segelflügen. Piloten können abschätzen, wie weit sie unter den aktuellen Bedingungen und dem erforderlichen Gleitverhältnis zu ihrem Ziel fliegen können.
- *Optimierung von Steig- und Sinkflügen.* Das durchschnittliche Gleitverhältnis ermöglicht es Piloten, Steig- und Sinkflüge basierend auf den aktuellen Bedingungen zu optimieren. Piloten können den optimalen Zeitpunkt für Steigflüge wählen, um die Flugzeit zu maximieren, oder für Sinkflüge, um einen Zielpunkt zu erreichen.
- *Reaktion auf sich ändernde Bedingungen.* Das Widget liefert kontinuierliche Aktualisierungen des Gleitverhältnisses, sodass Piloten sofort auf Änderungen der atmosphärischen Bedingungen oder Routen reagieren können. Sie können ihren Flugplan anpassen, um Sicherheit und Effizienz zu gewährleisten.
- *Maximale Nutzung der horizontalen Entfernung.* Das Wissen um das Gleitverhältnis ermöglicht es Piloten, die horizontale Entfernung maximal zu nutzen, um sich zum Ziel zu bewegen, was besonders bei der Planung langer Flüge wichtig ist.
- *Risikoreduzierung*. Das Widget *Gleitverhältnis zum Ziel* hilft Piloten, Situationen zu vermeiden, in denen das Erreichen des Ziels aufgrund eines unzureichenden Gleitverhältnisses unmöglich wird. Dies trägt zur Risikoreduzierung und Verbesserung der Flugsicherheit bei.


**Positive und negative Werte:**

- **Positive Werte** zeigen an, dass Ihr Ziel eine geringere Höhe als Ihre aktuelle Position hat, was einen Abstieg erfordert.
- **Negative Werte** zeigen an, dass Ihr Ziel eine höhere Höhe hat, was einen Aufstieg erfordert. Zum Beispiel bedeutet "-90:1", dass Sie nach einer Strecke von 90 Kilometern um 1 Kilometer aufsteigen müssen, um Ihr Ziel zu erreichen.


**Rundung/Formatierung:**

- Wert **≤ 0,1**:
  - "0,05" wird als "0" angezeigt.
- Wert **> 0,1 und < 100**:
  - zum Beispiel wird "50,7643" als "50,8:1" angezeigt.
- Wert **> 100:**
  - "102,35" wird als "102:1" angezeigt.


### Gleitverhältnis zum Ziel {#glide-ratio-to-target}

- **Gleitverhältnis zum Ziel** zeigt das exakte Gleitverhältnis an, das zum Erreichen des Zielpunkts erforderlich ist.
- **Zielhöhe** zeigt die Höhe des Zielpunkts an. Der [Kartenmarker](../personal/markers.md) sollte als Zielpunkt verwendet werden.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → Gleitverhältnis* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → Gleitverhältnis* |
| Durch Tippen | Ändert *Gleitverhältnis zum Ziel* oder *Zielhöhe* |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


### Durchschnittliches Gleitverhältnis {#average-glide-ratio}

- **Durchschnittliches Gleitverhältnis** zeigt das durchschnittliche Gleitverhältnis für ein bestimmtes Zeitintervall an.
- **Durchschnittliche vertikale Geschwindigkeit** gibt die Rate an, mit der ein Objekt über eine Weile auf- oder absteigt. Nur der erste und letzte Punkt des Zeitintervalls werden zur Auswertung herangezogen. Sie können das Zeitintervall für dieses Widget von 15 Sekunden bis 60 Minuten einstellen. Sie sollten den [Kartenmarker](../personal/markers.md) als Zielpunkt verwenden.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → Gleitverhältnis* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → Gleitverhältnis* |
| Durch Tippen | Ändert *Durchschnittliches Gleitverhältnis* oder *Durchschnittliche vertikale Geschwindigkeit* |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


## Akkustand {#battery-level}

![Akkustand-Widget](@site/static/img/widgets/battery_level_widget.png)

Das Widget **Akkustand** zeigt den Akkustand Ihres Geräts direkt auf dem Kartenbildschirm an und wird mindestens einmal pro Minute automatisch aktualisiert.

- **iOS 17 und höher** — Aufgrund von **Datenschutzbeschränkungen** sind die Akkustandsdaten nur in 5%-Schritten verfügbar (z. B. 35%, 60% oder 85%). Dies ist eine vom Apple-System auferlegte Einschränkung.

- **Android**-Geräte — Das Widget zeigt den genauen Akkustand an, wie er vom System gemeldet wird, ohne Rundung.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_battery"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="map_widget_battery"/>* |
| Durch Tippen | Keine Änderungen |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


## Koordinaten-Widget {#coordinates-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Koordinaten-Widget Android](@site/static/img/widgets/coordinates_widget_1.png) ![Koordinaten-Widget Android](@site/static/img/widgets/coordinates_widget_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Koordinaten-Widget Android](@site/static/img/widgets/coordinates_widget_ios_2.png)

</TabItem>

</Tabs>

OsmAnd bietet zwei Arten von Koordinaten-Widgets:

- **Koordinaten: Kartenzentrum** - zeigt die geografischen Koordinaten des aktuellen Kartenzentrums an.
- **Koordinaten: Aktueller Standort** - zeigt die geografischen Koordinaten des aktuellen Geolokationspunkts an.

Koordinaten-Widgets werden am oberen Bildschirmrand angezeigt. Symbole mit grünem Hintergrund zeigen die Breiten- und Längengrade des Punktes in der Mitte des sichtbaren Kartenausschnitts an, und solche mit blauem Hintergrund zeigen die Koordinaten Ihres aktuellen Standorts an. Informationen zu unterstützten *Koordinatenformaten* finden Sie im Artikel *[Koordinaten suchen](../search/search-coordinates.md#coordinate-format)*.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="coordinates_widget"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → <Translate ios="true" ids="coordinates"/>* |
| Durch Tippen | Kopiert die Koordinaten in die Zwischenablage. |
| Format | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/> (iOS) oder <Translate android="true" ids="configure_profile"/> (Android) → <br/> <Translate ios="true" ids="general_settings_2,units_and_formats,coords_format"/>* |


## GPS-Info {#gps-info}

<InfoAndroidOnly />

![GPS-Info Android Widget](@site/static/img/widgets/gps_info_widget.png)

Das GPS-Informations-Widget (Global Positioning System) zeigt die Anzahl der Satelliten an, die das Gerät derzeit erkennt und verwendet. Sie können es verwenden, um den GPS-Status bei schlechtem Signal zu überprüfen.

Sie können den aktuellen GPS-Cache zurücksetzen über:
*<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>*.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_gps_info"/>* |
| Durch Tippen | Öffnet das GPS-Statusmenü mit Drittanbieter-Tools zur Konfiguration des integrierten GPS-Geräts. |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


## Sonnenposition {#sun-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sonnenuntergangs- und Sonnenaufgangs-Widgets](@site/static/img/widgets/sun_position.png) ![Sonnenuntergangs- und Sonnenaufgangs-Widgets](@site/static/img/widgets/sun_position_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sonnenuntergangs- und Sonnenaufgangs-Widgets](@site/static/img/widgets/sun_position_4_ios.png) ![Sonnenuntergangs- und Sonnenaufgangs-Widgets](@site/static/img/widgets/sun_position_3_ios.png)

</TabItem>

</Tabs>

Sonnenpositions-Widgets zeigen die nächsten Sonnenaufgangs- und Sonnenuntergangszeiten für das Zentrum der Karte an. Beim Antippen zeigen sie die verbleibende Zeit bis zum erwarteten Sonnenuntergang oder Sonnenaufgang an. In beiden Fällen basiert die Zeit auf der konfigurierten Zeit Ihres Geräts.

- **<Translate ios="true" ids="map_widget_sun_position"/>**. <Translate ios="true" ids="map_widget_sun_position_desc"/>
- **<Translate ios="true" ids="map_widget_sunrise"/>**. <Translate ios="true" ids="map_widget_sunrise_desc"/>
- **<Translate ios="true" ids="map_widget_sunset"/>**. <Translate ios="true" ids="map_widget_sunset_desc"/>

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_sun_position"/> → <Translate android="true" ids="map_widget_sun_position"/>, <Translate android="true" ids="shared_string_sunrise"/>, <Translate android="true" ids="shared_string_sunset"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="map_widget_sun_position"/> → <Translate ios="true" ids="map_widget_sun_position"/>, <Translate ios="true" ids="map_widget_sunrise"/>, <Translate ios="true" ids="map_widget_sunset"/>* |
| Durch Tippen | Wechselt zwischen der verbleibenden Zeit und der Zeit des nächsten Sonnenaufgangs/Sonnenuntergangs. |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


## Radius-Lineal {#radius-ruler}

:::note
Eine detailliertere Beschreibung finden Sie hier: **[Radius-Lineal und Lineal](../widgets/radius-ruler)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Radius-Lineal Bildschirm](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Radius-Lineal"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Radius-Lineal"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Radius-Lineal"/></td>
    </tr>
</table>

</TabItem>

</Tabs>

Das Radius-Lineal-Widget zeigt den Abstand zwischen Ihrem Standort und dem Mittelpunkt des Radius-Lineals an. Der Radius des ersten Kreises entspricht dem [Kartenmaßstab](../widgets/radius-ruler.md#ruler).

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="radius_ruler_item"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="map_widget_ruler_control"/>* |
| Durch Tippen | Ändert den Zustand des Widgets zwischen Schwarzskala, Graustufen und unsichtbaren Modi. |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |


## Tachometer {#speedometer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tachometer](@site/static/img/widgets/speedometer_1_andr.png) ![Tachometer](@site/static/img/widgets/speedometer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tachometer](@site/static/img/widgets/speedometer_1_ios.png) ![Tachometer](@site/static/img/widgets/speedometer_2_ios.png)

</TabItem>

</Tabs>

Das **Tachometer-Widget** ist eine grafische Anzeige der aktuellen Fahrzeuggeschwindigkeit basierend auf *vom GPS empfangenen Daten*. Es ermöglicht Ihnen, in Echtzeit die Übereinstimmung zwischen Ihrer Geschwindigkeit und der zulässigen Geschwindigkeitsbegrenzung zu überwachen. Die zulässige Geschwindigkeitsbegrenzung wird durch [OpenStreetMap-Daten](https://wiki.openstreetmap.org/wiki/Key:maxspeed) für einen bestimmten Straßenabschnitt und die OsmAnd-Einstellung [Geschwindigkeitsbegrenzungstoleranz](../navigation/guidance/voice-navigation.md#speed-limit) bereitgestellt.

- In den *Tachometer-Einstellungen* können Sie die Größe (**Höhe**) des Widgets auf dem Anwendungsbildschirm als *Klein*, *Mittel* oder *Groß* auswählen.
- Sie können festlegen, wann eine **Geschwindigkeitsbegrenzungswarnung** ausgegeben werden soll, indem Sie *Immer* oder *Bei Überschreitung* auswählen.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/speedometer_4_andr.png').default} alt="Tachometer"/></td>
        <td><img src={require('@site/static/img/widgets/speedometer_4_ios.png').default} alt="Tachometer"/></td>
    </tr>
</table>

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_other,shared_string_speedometer"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location"/>* *→ Tachometer* |
| Format | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,default_speed_system"/>* |


## Plugin-Widgets {#plugin-widgets}

Diese Widgets werden in Kombination mit ihren entsprechenden Plugins aktiviert und funktionieren.


### Reiseaufzeichnungs-Widgets {#trip-recording-widgets}

:::note
Eine detailliertere Beschreibung finden Sie hier: **[<Translate android="true" ids="record_plugin_name"/> Plugin](../plugins/trip-recording.md)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![trip_recording_widget](@site/static/img/widgets/wid_trip_rec.png)

</TabItem>

<TabItem value="ios" label="iOS">

![trip_recording_widget](@site/static/img/widgets/widget_trip_recording-_rec_ios.png)

</TabItem>

</Tabs>

Reiseaufzeichnungs-Widgets beziehen sich auf das [<Translate android="true" ids="record_plugin_name"/> Plugin](../plugins/trip-recording.md#widgets). Sie können Widgets verwenden, um kurze Informationen zur Track-Aufzeichnung auf dem Bildschirm anzuzeigen. Wie z.B. *Distanz*, *Dauer*, *Bergauf* und *Bergab*.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_monitoring"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_monitoring"/>* |
| Durch Tippen | Startet/Stoppt die Track-Aufzeichnung oder zeigt das Diagramm an. |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


### Externe Sensoren Widgets {#external-sensors-widgets}

:::note
Um Widgets für externe Sensoren zum Kartenbildschirm hinzuzufügen, aktivieren Sie das OsmAnd [Plugin für externe Sensoren](../plugins/external-sensors.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Externe Sensor-Widgets Android](@site/static/img/widgets/external-sensors-widgets_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![trip_recording_widget](@site/static/img/widgets/external-sensors-widgets_ios.png)

</TabItem>

</Tabs>

Widgets beziehen sich auf das [Plugin für externe Sensoren](../plugins/external-sensors.md#widgets). Sie können sie verwenden, um kurze Informationen von Ihren externen Sensoren anzuzeigen, wie z.B.: **<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*nur Android*), **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/>, <Translate android="true" ids="map_widget_ant_bicycle_dist"/>** und **<Translate android="true" ids="external_device_characteristic_temperature"/>**. *Unter iOS* können Sie auch den **Akkustand** verbundener BLE-Sensoren direkt im Widget anzeigen lassen.

- Um das Widget hinzuzufügen — [aktivieren](../plugins/index.md#enable--disable) Sie das OsmAnd Plugin für externe Sensoren.

- Um Sensoren hinzuzufügen, wählen Sie eine der Optionen:
  - Gehen Sie zu *Menü → Plugins → Externe Sensoren → Einstellungen → Neuen Sensor koppeln*.
  - Gehen Sie zu *Menü → Bildschirm konfigurieren → Ein Panel auswählen → Widget hinzufügen → Externe Sensoren → Sensor auswählen → Einstellungen → Neuen Sensor koppeln*.

- Fügen Sie Widgets hinzu, auch wenn kein externer Sensor verbunden ist.

- **Alle hinzugefügten Widgets sind sichtbar**, auch wenn kein externer Sensor verbunden ist.

- Verwenden Sie das [Reiseaufzeichnungs-Plugin](../plugins/trip-recording.md#recording-settings), um Sensordaten aufzuzeichnen.

- Lesen Sie [hier](../plugins/external-sensors.md#widget-settings), wie Sie auswählen, welcher Sensor (vom gleichen Typ) im Widget angezeigt werden soll.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="external_sensor_widgets"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="external_sensors_plugin_name"/>* |
| Durch Tippen | Keine Änderungen (*Android*) / Wechselt den Modus zwischen Sensordaten und Akkustand (*iOS*). |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


### Fahrzeugmetrik-Widgets {#vehicle-metrics-widgets}


:::note
Um Fahrzeugmetrik-Widgets zum Kartenbildschirm hinzuzufügen, aktivieren Sie das OsmAnd [Fahrzeugmetrik-Plugin](../plugins/vehicle-metrics.md).
:::


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Fahrzeugmetrik-Widgets Android](@site/static/img/widgets/vehicle_metrics_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Fahrzeugmetrik-Widgets Android](@site/static/img/widgets/vehicle_metrics_ios.png)

</TabItem>

</Tabs>


Die Widgets gehören zum [Fahrzeugmetrik-Plugin](../plugins/vehicle-metrics.md#widgets). Sie können sie verwenden, um Informationen von einem verbundenen OBD-II-Scanner anzuzeigen, wie z.B. (*13 Metriken*): **Ansauglufttemperatur**, &nbsp; **Umgebungstemperatur**, &nbsp; **Kühlmitteltemperatur**, &nbsp; **Motoröltemperatur**, &nbsp; **Motordrehzahl** (*kostenlos*), &nbsp; **Motorlaufzeit**, &nbsp; **Berechnete Motorlast**, &nbsp; **Kraftstoffdruck**, &nbsp; **Kraftstoffverbrauch**, &nbsp; **Restkraftstoff**, &nbsp; **Batteriestand**, &nbsp; **Fahrzeuggeschwindigkeit** (*kostenlos*) und **Drosselklappenstellung**.

- Um Fahrzeugmetrik-Widgets zum Kartenbildschirm hinzuzufügen, [aktivieren](../plugins/index.md#enable--disable) Sie das **Fahrzeugmetrik-Plugin**.
- Sie können Widgets hinzufügen, auch wenn kein OBD-II-Scanner angeschlossen ist.
- Alle hinzugefügten Widgets sind sichtbar, unabhängig davon, ob ein OBD-II-Scanner angeschlossen ist oder nicht.
- Um ein Widget zu bearbeiten, tippen Sie auf das dem Panel hinzugefügte Widget, tippen Sie dann auf *Einstellungen*, oder tippen Sie direkt auf das *Einstellungen-Symbol* im Widget-Feld.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="obd_widget_group"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="obd_plugin_name"/>* |
| Durch Tippen | Keine Änderungen |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


### Wetter-Widgets {#weather-widgets}

:::note
Um Wetter-Widgets zum Kartenbildschirm hinzuzufügen, aktivieren Sie das OsmAnd [Wetter-Plugin](../plugins/weather.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wetter-Widget Android](@site/static/img/widgets/weather_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wetter-Widget iOS](@site/static/img/widgets/weather_widgets_ios.png)

</TabItem>

</Tabs>

Wetter-Widgets zeigen aktuelle Wetterinformationen für einen zentralen Punkt auf der Karte an. Sie werden automatisch auf dem Bildschirm aktiviert, wenn sie mit dem Plugin (*Menü → Wetter*) angezeigt werden, und Sie können auswählen, welche davon für den täglichen Gebrauch auf dem Startbildschirm platziert werden sollen (*Menü → Bildschirm anpassen*). Mehr dazu können Sie im Artikel [Wetter-Plugin](../plugins/weather.md) lesen.

- **Temperatur**. <Translate android="true" ids="temperature_widget_desc"/>
- **Luftdruck**. <Translate android="true" ids="air_pressure_widget_desc"/>
- **Wind**. <Translate android="true" ids="wind_widget_desc"/>
- **Wolken**. <Translate android="true" ids="clouds_widget_desc"/>
- **Niederschlag**. <Translate android="true" ids="precipitation_widget_desc"/>

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="shared_string_weather"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="shared_string_weather"/>* |
| Durch Tippen | Zeigt in einem Pop-up-Dialogfeld Datum und Uhrzeit an, wann die Wetterinformationen relevant sind. |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |
| Format | *Menü → Plugins → Wetter → Einstellungen* oder *Menü → Einstellungen → App-Profil → Wetter* |


### Park-Widget {#parking-widget}

:::note
Um Park-Widgets zum Kartenbildschirm hinzuzufügen, aktivieren Sie das OsmAnd [Parkposition-Plugin](../plugins/parking.md).
:::

![Park-Widget](@site/static/img/plugins/parking/parking_widget.png)

Das Park-Plugin-Widget zeigt die Entfernung vom Bildschirmzentrum zum Parkplatz an. Um einen Parkplatz auf der Karte festzulegen, zoomen Sie auf die gewünschte Ebene und tippen Sie dann lange auf die Stelle auf der Karte, um das Kontextmenü zu öffnen. Befolgen Sie [diese Einstellungen](../plugins/parking.md#set-a-spot).

**Hinweis:** Das Park-Widget wird nur angezeigt, wenn eine Parkposition zur Karte hinzugefügt wurde. Ohne eine gespeicherte Parkposition ist das Widget nicht sichtbar.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_parking"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="parking_place"/>* |
| Durch Tippen | Verschiebt die Kartenansicht zur Parkposition. |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


### Mapillary-Widget {#mapillary-widget}

:::note
Um das Mapillary-Widget zum Kartenbildschirm hinzuzufügen, aktivieren Sie das OsmAnd [Mapillary-Plugin](../plugins/mapillary.md).
:::

![Mapillary-Widget](@site/static/img/widgets/mapillary_widget.png)

Dies ist ein Mapillary-Plugin-Widget, das schnellen Zugriff auf die Mapillary-Anwendung bietet, mit der Sie [*Street-Level-Bilder*](../plugins/mapillary.md#enable-layer) hinzufügen können. Das Widget wird automatisch zur Karte hinzugefügt, wenn das Plugin aktiviert ist.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="mapillary"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="mapillary"/>* |
| Durch Tippen | Öffnet die [Mapillary](https://www.mapillary.com/)-Anwendung. |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


### Audio-/Video-Notizen-Widget {#audiovideo-notes-widget}

<InfoAndroidOnly />

:::note
Um Audio-/Video-Notizen-Widgets zum Kartenbildschirm hinzuzufügen, aktivieren Sie das OsmAnd [Audio-/Video-Notizen-Plugin](../plugins/audio-video-notes.md).
:::

![Audio-Video-Notizen-Widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

Dies sind Audio-/Video-Notizen-Plugin-Widgets, die schnellen Zugriff zum Starten/Stoppen der Aufnahme von Audio-, Video- oder Fotonotizen bieten.

Sie können konfigurieren, welche Aktion standardmäßig ausgewählt ist:

- *Auf Anfrage*. Standardzustand. Jedes Mal wird der Dialog zur Aktionsauswahl angezeigt.
- *Audio aufnehmen* - nimmt eine Audionotiz auf.
- *Video aufnehmen* - ermöglicht die Aufnahme eines Videos.
- *Foto aufnehmen* - ermöglicht das Aufnehmen eines Fotos.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_av_notes"/>* |
| Durch Tippen | Startet / stoppt die Aufnahme einer Notiz |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


### Tracker-Widget {#tracker-widget}

<InfoAndroidOnly />

:::note
Um das Tracker-Widget zum Kartenbildschirm hinzuzufügen, aktivieren Sie das OsmAnd [Tracker-Plugin](../plugins/osmand-tracker.md).
:::

Damit das Plugin und das Widget funktionieren, müssen Sie [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) von Google Play oder anderen Quellen installieren.

Dieses OsmAnd Tracker-Plugin-Widget wird verwendet, um schnell auf die OsmAnd Tracker-App zuzugreifen und Ihre Standortinformationen mit anderen Benutzern zu teilen. Die App sendet *Live-Standort*-Nachrichten an ausgewählte Chats innerhalb einer bestimmten Zeit, zeigt eine Liste von Kontakten und Gruppen an und überprüft Chats auf Nachrichten mit Ihrem Standort, die dann auf einer Karte in OsmAnd angezeigt werden.

![Tracker-Widget](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="tracker_item"/>* |
| Durch Tippen | Öffnet die OsmAnd Online GPS Tracker-App. |


### Entwickler-Widgets {#developer-widgets}

:::note
Um Entwickler-Widgets zum Kartenbildschirm hinzuzufügen, aktivieren Sie das OsmAnd [OsmAnd-Entwicklungs-Plugin](../plugins/development.md).
:::

**Entwickler-Widgets** liefern Informationen über die Karten-[Rendering-Geschwindigkeit](../plugins/development.md#map-rendering-fps-widget) und Parameter der virtuellen Kameraposition, einschließlich [Zoomstufe](../plugins/development.md#zoom-level), [Entfernung](../plugins/development.md#distance-to-target) zum Kartenzentrum, [Kamerahöhe](../plugins/development.md#camera-elevation) und [Neigungswinkel der Kamera](../plugins/development.md#camera-tilt).

#### Karten-Rendering-FPS {#map-rendering-fps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![FPS-Widget Android](@site/static/img/widgets/fps_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![FPS-Widget iOS](@site/static/img/widgets/fps_widget_ios.png)

</TabItem>

</Tabs>

Das [Karten-Rendering-FPS-Widget](../plugins/development.md#map-rendering-fps-widget) zeigt die Rendering-Geschwindigkeit der Karte und ihrer Elemente an, gemessen in Bildern pro Sekunde (FPS). Ein höherer FPS-Wert bedeutet schnelleres Rendering und eine flüssigere visuelle Darstellung.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="map_widget_rendering_fps"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="developer_widgets,map_widget_rendering_fps"/>* |
| Durch Tippen | Keine Änderungen |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


#### Kamera-Widgets {#camera-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kamerapositions-Widgets](@site/static/img/widgets/camera_position_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kamerapositions-Widgets 2](@site/static/img/widgets/camera_position_widgets_2_ios.png)

</TabItem>

</Tabs>

Die **Kamera-Widgets** ermöglichen es Ihnen, die Ausrichtung zwischen der OsmAnd-Karte und der Erdoberfläche zu überwachen.

- [Kameraneigung](../plugins/development.md#camera-tilt). Zeigt den Neigungswinkel der Kamera im Perspektivmodus an. Der Standardwert ist 90° (keine Neigung).
- [Kamerahöhe](../plugins/development.md#camera-elevation). Zeigt die Höhe der Kamera über der Oberfläche an.
- [Zoomstufe](../plugins/development.md#zoom-level). <Translate android="true" ids="map_widget_zoom_level_desc"/>
- [Entfernung von der Kamera zum Ziel](../plugins/development.md#distance-to-target). Misst die Entfernung zwischen der Kamera und dem Zielort auf der Karte.

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="developer_widgets"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ein Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="developer_widgets"/>* |
| Durch Tippen | Wechselt zwischen den Modi (*Zoomstufe*) / Keine Änderungen (*Andere*) |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


#### Verfügbarer RAM {#available-ram}

<InfoAndroidOnly />

![Durchschnittsgeschwindigkeits-Widgets](@site/static/img/widgets/available_RAM_2_andr.png)

Das Widget **Verfügbarer RAM** ist ein Werkzeug zur Überwachung der Speichernutzung Ihres Geräts in Bezug auf OsmAnd. Es liefert detaillierte Daten, um die Anwendungsleistung zu optimieren.

- **Verfügbarer Anwendungs-RAM.** Zeigt die Menge des für OsmAnd verfügbaren RAM an, ohne Leistungsprobleme zu verursachen.

- **Anwendungs-RAM-Nutzung** — Zeigt den aktuellen RAM-Verbrauch durch OsmAnd an.

- **Gesamter Anwendungs-RAM** — Zeigt den gesamten OsmAnd zugewiesenen Speicher an, einschließlich des verwendeten und des verfügbaren Speichers.

> **HINWEIS**. *Der *gesamte verfügbare RAM* kann je nach Hintergrundprozessen und anderen auf Ihrem Gerät ausgeführten Anwendungen variieren. Diese Werte sind dynamisch und bieten eine Möglichkeit, die Speichernutzung für eine konsistente und effiziente OsmAnd-Leistung zu verfolgen und zu verwalten.*

| | |
|:------------|:------------|
| Aktivieren | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Ein Panel auswählen → Widget hinzufügen → <Translate android="true" ids="developer_widgets"/> → *Verfügbarer RAM* |
| Durch Tippen | Keine Änderungen |
| Langes Tippen | Öffnet das [Kontextmenü des Widgets](../widgets/configure-screen.md#widget-context-menu) |


## Verwandte Artikel {#related-articles}

- [Bildschirm konfigurieren](./configure-screen.md)
- [Karten-Schaltflächen](./map-buttons.md)
- [Navigations-Widgets](./nav-widgets.md)
- [Radius-Lineal und Lineal](./radius-ruler.md)
- [Marker-Widgets](./markers.md)
- [Schnellaktion](./quick-action.md)

> *Zuletzt aktualisiert: April 2025*