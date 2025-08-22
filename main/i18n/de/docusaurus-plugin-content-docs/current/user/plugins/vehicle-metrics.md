---
source-hash: 7cce24b2cd87bfae38687f74d452a20648b7bb08c58e4e9a6b8489cb8398e2a2
sidebar_position: 16
title: Fahrzeug-Metriken
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


<InfoIncompleteArticle/>


## Überblick {#overview}

:::info Kostenpflichtige Funktion
Das Fahrzeug-Metriken-Plugin ist eine [kostenpflichtige Funktion](../purchases/index.md) der OsmAnd-App. Fahrzeuggeschwindigkeit und Motordrehzahl sind für OsmAnd Free verfügbar.
:::

Das **Fahrzeug-Metriken-Plugin** ermöglicht die Echtzeitüberwachung von Fahrzeugdaten über das [OBD-II-Protokoll](https://en.wikipedia.org/wiki/OBD-II_PIDs). Benutzer können wichtige Metriken wie Motorleistung, Kraftstoffeffizienz und Geschwindigkeit verfolgen, was eine proaktive Fahrzeugwartung und Fehlerbehebung ermöglicht.

[OBD-II-Scanner](https://en.wikipedia.org/wiki/ELM327) sind ein wesentlicher Bestandteil der modernen Automobildiagnostik. Mit Echtzeit-Datenstreaming erhalten Benutzer sofortige Einblicke in Fahrzeugsysteme, was präventive Wartung erleichtert und Reparaturkosten senkt. Diese Tools sind sowohl für den persönlichen Gebrauch als auch für professionelle Automobildienste unerlässlich.

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

1. [Kaufen Sie](../purchases/) ein **OsmAnd Pro-Abonnement**. (Fahrzeuggeschwindigkeit und Motordrehzahl sind kostenlos.)
2. [Aktivieren Sie](../plugins/index.md#enable--disable) das Fahrzeug-Metriken-Plugin im Bereich Plugins des *Hauptmenüs*.
3. **Schalten Sie** Bluetooth auf Ihrem Gerät **ein**.
4. [Verbinden Sie](#pair-odb-ii-scanner) den OBD-II-Scanner mit dem Anschluss Ihres Fahrzeugs.
5. [Konfigurieren Sie](#scanner-settings) die **Scanner-Einstellungen**.
6. [Fügen Sie](#widgets) **Fahrzeug-Metriken-Widgets** für die Anzeige von Daten auf dem Bildschirm hinzu (optional).
7. [Verwenden Sie](#trip-recording) das **Aufzeichnungs-Plugin**, um Fahrzeugdaten aufzuzeichnen.


### OBD-II-Scanner koppeln {#pair-odb-ii-scanner}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| | |
|--|--|
|![OBD-Verbindung](@site/static/img/plugins/obd/obd_connect.png)|![OBD-Verbindung](@site/static/img/plugins/obd/obd_connect_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

| | |
|--|--|
|![OBD-Verbindung](@site/static/img/plugins/obd/obd_connect_ios.png)|![OBD-Verbindung](@site/static/img/plugins/obd/obd_connect_ios_2.png)|

</TabItem>

</Tabs>

Verbinden Sie den Scanner mit dem Anschluss Ihres Fahrzeugs und koppeln Sie ihn über die App:

- Navigieren Sie zu *Menü → Plugins → Fahrzeug-Metriken → Einstellungen → Verbinden* oder **+**.
- Wenn Fahrzeug-Metriken im *Hauptmenü* ist: *Menü → Fahrzeug-Metriken → Einstellungen → Verbinden* oder **+**.

Wählen Sie Ihr OBD-II-Gerät aus der Liste und stellen Sie die Verbindung her.


## Scanner-Einstellungen {#scanner-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Gehen Sie zu: *Menü → Plugins → Fahrzeug-Metriken → OBD → Drei-Punkte-Menü*

| | |
|--|--|
|![OBD-Einstellungen](@site/static/img/plugins/obd/obd_settings.png)|![OBD-Einstellungen](@site/static/img/plugins/obd/obd_settings_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Gehen Sie zu: *Menü → Plugins → Fahrzeug-Metriken → OBD → Drei-Punkte-Menü*

| | |
|--|--|
|![OBD-Einstellungen](@site/static/img/plugins/obd/obd_settings_ios.png)|![OBD-Einstellungen](@site/static/img/plugins/obd/obd_settings_ios_1.png)|

</TabItem>

</Tabs>

- **Verbinden / Trennen**. Stellt die Verbindung mit dem OBD-II-Sensor her oder beendet sie.
- **Einstellungen**. Öffnet den OBD-II-Einstellungsbildschirm, der die Verbindungsverwaltung und den Zugriff auf verfügbare Fahrzeugparameter ermöglicht.
- **Umbenennen**. Ermöglicht es Ihnen, dem Sensor einen benutzerdefinierten Namen zur einfacheren Identifizierung zuzuweisen.
- **Vergessen**. Entfernt den zuvor gekoppelten OBD-II-Sensor aus der Liste, wodurch bei Bedarf eine erneute Kopplung erforderlich wird.


## Metriken-Liste {#metrics-list}

Metriken sind zur besseren Übersichtlichkeit kategorisiert. Fortschrittliche Diagnosewerkzeuge ermöglichen präventive Wartung durch die Interpretation dieser Parameter:

*Temperatur:*

- **Ansauglufttemperatur**. Zeigt die Temperatur der Luft an, die in den Ansaugkrümmer gelangt.
- **Umgebungstemperatur**. Überwacht die externen Bedingungen.
- **Kühlmitteltemperatur**. Verfolgt die Effizienz der Motorkühlung.
- **Motoröltemperatur**. Zeigt den Ölzustand während des Betriebs an.

*Motor:*

- **Motordrehzahl**. Überwacht die Motordrehzahl pro Minute (U/min).
- **Motorlaufzeit**. Verfolgt die Betriebszeit des Motors.
- **Berechnete Motorlast**. Zeigt den prozentualen Arbeitsaufwand des Motors an.

*Kraftstoff:*

- **Kraftstoffdruck**. Zeigt den Druck des Kraftstoffsystems an.
- **Kraftstoffverbrauch**. Berechnet den Kraftstoffverbrauch des Fahrzeugs.
- **Restkraftstoff**. Zeigt den Kraftstoffstand im Fahrzeug an.

*Sonstiges:*

- **Batteriestand**. Zeigt den Spannungspegel der Fahrzeugbatterie an.
- **Fahrzeuggeschwindigkeit**. Zeigt Daten des Fahrzeuggeschwindigkeitssensors (VSS) an.
- **Drosselklappenstellung**. Bestimmt die Motorluftzufuhr über den Drosselklappenwinkel.
  **VIN**. Zeigt die 17-stellige Fahrzeugidentifikationsnummer an.


## Fahrtenaufzeichnung {#trip-recording}


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



Um OBD-II-Daten in eine GPX-Datei aufzunehmen, müssen Sie die gewünschten Parameter für die Aufzeichnung mit dem [Aufzeichnungs-Plugin](../plugins/trip-recording.md#recording-settings) auswählen. Dies ermöglicht Ihnen, Fahrzeugmetriken zusammen mit Ihren Fahrtdaten zu analysieren.

#### Tags {#tags}

OsmAnd wendet benutzerdefinierte Tag-Namen für Fahrzeugmetriken in der [GPX-Datei](../plugins/trip-recording.md#recorded-gpx-file) an. Zum Beispiel:

- `vm_eotemp`: Motoröltemperatur.
- `vm_fpress`: Kraftstoffdruck.
- `vm_espeed`: Motordrehzahl.

Diese Tags erleichtern die Identifizierung und Nutzung spezifischer Fahrzeugdaten beim Überprüfen der aufgezeichneten GPX-Datei.


## Widgets {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Gehen Sie zu: *Menü → Bildschirm konfigurieren → Widgets → Panel auswählen → Fahrzeug-Metriken*

| | |
|--|--|
|![OBD-Einstellungen](@site/static/img/plugins/obd/obd_widget_1.png)| ![OBD-Einstellungen](@site/static/img/plugins/obd/obd_widget.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Gehen Sie zu: *Menü → Bildschirm konfigurieren → Widgets → Panel auswählen → Fahrzeug-Metriken*

| | |
|--|--|
|![OBD-Einstellungen](@site/static/img/plugins/obd/obd_widget_ios_1.png)| ![OBD-Einstellungen](@site/static/img/plugins/obd/obd_widget_ios.png)|

</TabItem>

</Tabs>



Die [Fahrzeug-Metriken-Widgets](../widgets/info-widgets.md#vehicle-metrics-widgets) werden automatisch hinzugefügt, wenn Sie das Plugin aktivieren. Wenn sie nicht sichtbar sind, können Sie sie manuell über das Menü [Bildschirm konfigurieren](../widgets/configure-screen.md) hinzufügen.

### Widget-Einstellungen {#widget-settings}

Die Widgets zeigen wichtige Daten Ihres verbundenen OBD-II-Geräts in Echtzeit an, wie Geschwindigkeit, Motormetriken und Kraftstoffverbrauch. Stellen Sie sicher, dass sie sichtbar sind, bevor Sie Ihre Fahrt beginnen, um Metriken nahtlos zu verfolgen.

Einige Widgets bieten Optionen für den Anzeigemodus:

- **Sofort**. Zeigt Echtzeitdaten für die ausgewählte Metrik an.
- **Durchschnitt**. Zeigt Durchschnittswerte über ein konfigurierbares Zeitintervall (15 Sekunden bis 60 Minuten) an.


## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

> *Zuletzt aktualisiert: August 2025*