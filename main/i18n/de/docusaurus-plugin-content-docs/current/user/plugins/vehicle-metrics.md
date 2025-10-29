---
source-hash: 838c0b13bf6e39494baa2e4cf5e8bfdb67c4eda45efa361b82e78a8946dcd35b
sidebar_position: 16
title:  Fahrzeugmetriken
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

:::info Kostenpflichtige Funktion
Das Fahrzeugmetriken-Plugin ist eine [kostenpflichtige Funktion](../purchases/index.md) der OsmAnd-App. Fahrzeuggeschwindigkeit und Motordrehzahl-Informationen sind in der kostenlosen OsmAnd-Version verfügbar.
:::

Das **Fahrzeugmetriken-Plugin** ermöglicht die Überwachung von Fahrzeugdaten in Echtzeit über das [OBD-II-Protokoll](https://en.wikipedia.org/wiki/OBD-II_PIDs). Benutzer können wichtige Messwerte wie Motorleistung, Kraftstoffeffizienz und Geschwindigkeit verfolgen, was eine proaktive Fahrzeugwartung und Fehlerbehebung ermöglicht.  

[OBD-II-Scanner](https://en.wikipedia.org/wiki/ELM327) sind ein wesentlicher Bestandteil der modernen Fahrzeugdiagnose. Durch das Streamen von Echtzeitdaten erhalten Benutzer sofortige Einblicke in die Fahrzeugsysteme, was die vorbeugende Wartung erleichtert und die Reparaturkosten senkt. Diese Werkzeuge sind sowohl für den privaten Gebrauch als auch für professionelle Kfz-Dienstleistungen von entscheidender Bedeutung.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OBD-Einstellungen](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OBD-Einstellungen](@site/static/img/plugins/obd/obd_overview_ios.png)

</TabItem>

</Tabs>


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um Daten von einem OBD-II-Scanner zu verwenden:

1. [Erwerben](../purchases/) Sie ein **OsmAnd Pro-Abonnement**. (*Fahrzeuggeschwindigkeit* und *Motordrehzahl* sind kostenlos.)  
2. [Aktivieren](../plugins/index.md#enable--disable) Sie das Fahrzeugmetriken-Plugin im Abschnitt „Plugins“ des *Hauptmenüs*.
3. **Schalten Sie** Bluetooth auf Ihrem Gerät **ein**.
4. [Verbinden](#pair-odb-ii-scanner) Sie den OBD-II-Scanner mit dem Anschluss Ihres Fahrzeugs.
5. [Konfigurieren](#scanner-settings) Sie die **Scanner-Einstellungen**.
6. [Fügen Sie](#widgets) **Fahrzeugmetriken-Widgets** für die Datenanzeige auf dem Bildschirm hinzu (optional).
7. [Verwenden](#trip-recording) Sie das **Reiseaufzeichnungs-Plugin**, um Fahrzeugdaten aufzuzeichnen.


### ODB-II-Scanner koppeln {#pair-odb-ii-scanner}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|  |  |
|--|--|
|![OBD-Verbindung](@site/static/img/plugins/obd/obd_connect.png)|![OBD-Verbindung](@site/static/img/plugins/obd/obd_connect_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|  |  |
|--|--|
|![OBD-Verbindung](@site/static/img/plugins/obd/obd_connect_ios.png)|![OBD-Verbindung](@site/static/img/plugins/obd/obd_connect_ios_2.png)|

</TabItem>

</Tabs>

Verbinden Sie den Scanner mit dem Anschluss Ihres Fahrzeugs und koppeln Sie ihn über die App:

- Navigieren Sie zu *Menü → Plugins → Fahrzeugmetriken → Einstellungen → Verbinden* oder **+**.
- Wenn sich Fahrzeugmetriken im *Hauptmenü* befindet:  *Menü → Fahrzeugmetriken → Einstellungen → Verbinden* oder **+**.

Wählen Sie Ihr OBD-II-Gerät aus der Liste aus und stellen Sie die Verbindung her.


## Scanner-Einstellungen {#scanner-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Gehen Sie zu: *Menü → Plugins → Fahrzeugmetriken → OBD → Drei-Punkte-Menü*

|  |  |
|--|--|
|![OBD-Einstellungen](@site/static/img/plugins/obd/obd_settings.png)|![OBD-Einstellungen](@site/static/img/plugins/obd/obd_settings_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Gehen Sie zu: *Menü → Plugins → Fahrzeugmetriken → OBD → Drei-Punkte-Menü*

|  |  |
|--|--|
|![OBD-Einstellungen](@site/static/img/plugins/obd/obd_settings_ios.png)|![OBD-Einstellungen](@site/static/img/plugins/obd/obd_settings_ios_1.png)|

</TabItem>

</Tabs>

- **Verbinden / Trennen**. Stellt die Verbindung mit dem OBD-II-Sensor her oder beendet sie.
- **Einstellungen**. Öffnet den Bildschirm für die OBD-II-Einstellungen, der die Verbindungsverwaltung und den Zugriff auf verfügbare Fahrzeugparameter ermöglicht.
- **Umbenennen**. Ermöglicht es Ihnen, dem Sensor zur leichteren Identifizierung einen benutzerdefinierten Namen zuzuweisen.
- **Vergessen**. Entfernt den zuvor gekoppelten OBD-II-Sensor aus der Liste, sodass bei Bedarf eine erneute Kopplung erforderlich ist.


## Metrikenliste {#metrics-list}

Die Metriken sind zur besseren Übersichtlichkeit kategorisiert. Fortschrittliche Diagnosewerkzeuge ermöglichen eine vorbeugende Wartung durch die Interpretation dieser Parameter:

*Temperatur:*

- **Ansaugtemperatur**. Zeigt die Temperatur der in den Ansaugkrümmer eintretenden Luft an.
- **Umgebungstemperatur**. Überwacht die äußeren Bedingungen.
- **Kühlmitteltemperatur**. Verfolgt die Effizienz der Motorkühlung.
- **Motoröltemperatur**. Zeigt den Zustand des Öls während des Betriebs an.

*Motor:*

- **Motordrehzahl**. Überwacht die Umdrehungen des Motors pro Minute (RPM).
- **Motorlaufzeit**. Verfolgt die Betriebsdauer des Motors.
- **Berechnete Motorlast**. Gibt die prozentuale Auslastung des Motors an.

*Kraftstoff:*

- **Kraftstoffdruck**. Zeigt den Druck im Kraftstoffsystem an.
- **Kraftstoffverbrauch**. Berechnet den Kraftstoffverbrauch des Fahrzeugs.
- **Verbleibender Kraftstoff**. Zeigt den Kraftstoffstand im Fahrzeug an.

*Andere:*

- **Batteriestand**. Zeigt den Spannungspegel der Fahrzeugbatterie an.
- **Adapter-Spannung**. Zeigt die dem OBD-II-Adapter zugeführte Spannung an (AT RV-Befehl).
- **Fahrzeuggeschwindigkeit**. Zeigt Daten des Fahrzeuggeschwindigkeitssensors (VSS) an.
- **Drosselklappenstellung**. Bestimmt die Luftzufuhr zum Motor über den Winkel der Drosselklappe.  
  **FIN**. Zeigt die 17-stellige Fahrzeug-Identifizierungsnummer an.


## Reiseaufzeichnung {#trip-recording}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android**. Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![OBD-Aufzeichnung](@site/static/img/plugins/obd/obd_recording.png)| ![OBD-Aufzeichnung](@site/static/img/plugins/obd/obd_recording_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS**. Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,obd_plugin_name"/>*

| | |
|--|--|
|![OBD-Aufzeichnung](@site/static/img/plugins/obd/obd_recording_ios.png)| ![OBD-Aufzeichnung](@site/static/img/plugins/obd/obd_recording_ios_1.png)|

</TabItem>

</Tabs>



Um OBD-II-Daten in eine GPX-Datei aufzunehmen, müssen Sie die gewünschten Parameter für die Aufzeichnung mit dem [Reiseaufzeichnungs-Plugin](../plugins/trip-recording.md#recording-settings) auswählen. Dies ermöglicht es Ihnen, Fahrzeugmetriken zusammen mit Ihren Reisedaten zu analysieren.

### Tags {#tags}

OsmAnd verwendet benutzerdefinierte Tag-Namen für Fahrzeugmetriken in der [GPX-Datei](../plugins/trip-recording.md#recorded-gpx-file). Zum Beispiel:

- `vm_eotemp`: Motoröltemperatur.
- `vm_fpress`: Kraftstoffdruck.
- `vm_espeed`: Motordrehzahl.

Diese Tags erleichtern die Identifizierung und Nutzung spezifischer Fahrzeugdaten bei der Überprüfung der aufgezeichneten GPX-Datei.


## Widgets {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Gehen Sie zu: *Menü → Bildschirm konfigurieren → Widgets → Ein Panel auswählen → Fahrzeugmetriken*

| | |
|--|--|
|![OBD-Einstellungen](@site/static/img/plugins/obd/obd_widget_1.png)| ![OBD-Einstellungen](@site/static/img/plugins/obd/obd_widget.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Gehen Sie zu: *Menü → Bildschirm konfigurieren → Widgets → Ein Panel auswählen → Fahrzeugmetriken*

| | |
|--|--|
|![OBD-Einstellungen](@site/static/img/plugins/obd/obd_widget_ios_1.png)| ![OBD-Einstellungen](@site/static/img/plugins/obd/obd_widget_ios.png)|

</TabItem>

</Tabs>



Die [Fahrzeugmetriken-Widgets](../widgets/info-widgets.md#vehicle-metrics-widgets) werden automatisch hinzugefügt, wenn Sie das Plugin aktivieren. Wenn sie nicht sichtbar sind, können Sie sie manuell über das Menü [Bildschirm konfigurieren](../widgets/configure-screen.md) hinzufügen.

### Widget-Einstellungen {#widget-settings}

Die Widgets zeigen wichtige Daten von Ihrem verbundenen OBD-II-Gerät in Echtzeit an, wie z. B. Geschwindigkeit, Motormetriken und Kraftstoffverbrauch. Stellen Sie sicher, dass sie vor Beginn Ihrer Reise sichtbar sind, um die Metriken nahtlos zu verfolgen.

Einige Widgets bieten Optionen für den Anzeigemodus:

- **Momentan**. Zeigt Echtzeitdaten für die ausgewählte Metrik an.
- **Durchschnitt**. Zeigt Durchschnittswerte über ein konfigurierbares Zeitintervall (15 Sekunden bis 60 Minuten) an.


## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Allgemeine Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)