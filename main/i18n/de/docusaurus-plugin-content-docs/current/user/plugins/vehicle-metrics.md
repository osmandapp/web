---
source-hash: 3285f0c719a8255c35a044a6bccdc05206d01216a9c0d4f8c30f58b3a9122f36
sidebar_position: 16
title: Fahrzeugmetriken
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

<InfoAndroidOnly/>

## Übersicht {#overview}

:::info Bezahlte Funktion
Das Plugin Fahrzeugmetriken ist eine [kostenpflichtige Funktion](../purchases/index.md) der OsmAnd-App.
:::

Das Plugin **Fahrzeugmetriken** ermöglicht die Echtzeit-Überwachung von Fahrzeugdaten über das OBD-II-Protokoll. Benutzer können wichtige Metriken wie Motorleistung, Kraftstoffeffizienz und Geschwindigkeit verfolgen, was eine proaktive Fahrzeugwartung und Fehlerbehebung ermöglicht.

OBD-II-Scanner sind ein integraler Bestandteil der modernen Fahrzeugdiagnostik. Mit Echtzeit-Datenstreaming erhalten Benutzer sofortige Einblicke in Fahrzeugsysteme, was präventive Wartung erleichtert und Reparaturkosten reduziert. Diese Werkzeuge sind sowohl für den persönlichen Gebrauch als auch für professionelle Fahrzeugdienste unerlässlich.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OBD settings](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

</Tabs>


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um Daten von einem OBD-II-Scanner zu verwenden:

1. [Kaufen Sie](../purchases/) ein **OsmAnd Pro-Abonnement**. (*Fahrzeuggeschwindigkeit* und *Motordrehzahl* sind kostenlos.)
2. [Aktivieren Sie](../plugins/index.md#enable--disable) das Plugin Fahrzeugmetriken im Abschnitt Plugins des *Hauptmenüs*.
3. **Schalten Sie** Bluetooth auf Ihrem Gerät **ein**.
4. [Verbinden Sie](#pair-odb-ii-scanner) den OBD-II-Scanner mit dem Anschluss Ihres Fahrzeugs.
5. [Konfigurieren Sie](#scanner-settings) die **Scanner-Einstellungen**.
6. [Fügen Sie](#widgets) **Fahrzeugmetriken-Widgets** hinzu, um Daten auf dem Bildschirm anzuzeigen (optional).
7. [Verwenden Sie](#trip-recording) das Plugin **Aufnahme der Fahrt**, um Fahrzeugdaten aufzuzeichnen.


### ODB-II-Scanner koppeln {#pair-odb-ii-scanner}

|  |  |
|--|--|
|![OBD connection](@site/static/img/plugins/obd/obd_connect.png)|![OBD connection](@site/static/img/plugins/obd/obd_connect_2.png)|

Verbinden Sie den Scanner mit dem Anschluss Ihres Fahrzeugs und koppeln Sie ihn über die App:

- Navigieren Sie zu *Menü → Plugins → Fahrzeugmetriken → Einstellungen → Verbinden* oder **+**.
- Wenn Fahrzeugmetriken im *Hauptmenü* ist: *Menü → Fahrzeugmetriken → Einstellungen → Verbinden* oder **+**.

Wählen Sie Ihr OBD-II-Gerät aus der Liste und stellen Sie die Verbindung her.


## Scanner-Einstellungen {#scanner-settings}

**Android.** Gehen Sie zu: *Menü → Plugins → Fahrzeugmetriken → OBD → Drei-Punkte-Menü*

|  |  |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_settings.png)|![OBD settings](@site/static/img/plugins/obd/obd_settings_1.png)|

- **Verbinden / Trennen**. Stellt die Verbindung mit dem OBD-II-Sensor her oder beendet sie.
- **Einstellungen**. Öffnet den OBD-II-Einstellungsbildschirm, der die Verbindungsverwaltung und den Zugriff auf verfügbare Fahrzeugparameter ermöglicht.
- **Umbenennen**. Ermöglicht die Zuweisung eines benutzerdefinierten Namens zum Sensor zur einfacheren Identifizierung.
- **Vergessen**. Entfernt den zuvor gekoppelten OBD-II-Sensor aus der Liste, sodass er bei Bedarf später erneut gekoppelt werden muss.


## Metrikliste {#metrics-list}

Metriken sind zur besseren Übersichtlichkeit kategorisiert. Fortschrittliche Diagnosewerkzeuge ermöglichen präventive Wartung durch die Interpretation dieser Parameter:

*Temperatur:*

- **Einlasstemperatur**. Zeigt die Temperatur der Luft an, die in den Ansaugkrümmer gelangt.
- **Umgebungstemperatur**. Überwacht externe Bedingungen.
- **Kühlmitteltemperatur**. Verfolgt die Effizienz der Motorkühlung.
- **Motoröltemperatur**. Zeigt den Ölzustand während des Betriebs an.

*Motor:*

- **Motordrehzahl**. Überwacht die Umdrehungen pro Minute (U/min) des Motors.
- **Motorlaufzeit**. Verfolgt die Betriebszeit des Motors.
- **Berechnete Motorlast**. Zeigt den prozentualen Arbeitsaufwand des Motors an.

*Kraftstoff:*

- **Kraftstoffdruck**. Zeigt den Druck im Kraftstoffsystem an.
- **Kraftstoffverbrauch**. Berechnet den Kraftstoffverbrauch des Fahrzeugs.
- **Restkraftstoff**. Zeigt den Kraftstoffstand im Fahrzeug an.

*Sonstiges:*

- **Batteriestand**. Zeigt den Spannungspegel der Fahrzeugbatterie an.
- **Fahrzeuggeschwindigkeit**. Zeigt Daten des Fahrzeuggeschwindigkeitssensors (VSS) an.
- **Drosselklappenstellung**. Bestimmt die Motorluftaufnahme über den Drosselklappenwinkel.
  **VIN**. Zeigt die 17-stellige Fahrzeugidentifikationsnummer an.


## Aufzeichnung der Fahrt {#trip-recording}

**Android**. Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![OBD recording](@site/static/img/plugins/obd/obd_recording.png)| ![OBD recording](@site/static/img/plugins/obd/obd_recording_1.png)|

Um OBD-II-Daten in eine GPX-Datei aufzunehmen, müssen Sie die gewünschten Parameter für die Aufzeichnung mit dem [Plugin Aufzeichnung der Fahrt](../plugins/trip-recording.md#recording-settings) auswählen. Dies ermöglicht Ihnen, Fahrzeugmetriken zusammen mit Ihren Fahrtdaten zu analysieren.

#### Tags {#tags}

OsmAnd verwendet benutzerdefinierte Tag-Namen für Fahrzeugmetriken in der [GPX-Datei](../plugins/trip-recording.md#recorded-gpx-file). Zum Beispiel:

- `vm_eotemp`: Motoröltemperatur.
- `vm_fpress`: Kraftstoffdruck.
- `vm_espeed`: Motordrehzahl.

Diese Tags erleichtern das Identifizieren und Nutzen spezifischer Fahrzeugdaten beim Überprüfen der aufgezeichneten GPX-Datei.


## Widgets {#widgets}

**Android.** Gehen Sie zu: *Menü → Bildschirm konfigurieren → Widgets → Ein Panel auswählen → Fahrzeugmetriken*

| | |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_widget_1.png)| ![OBD settings](@site/static/img/plugins/obd/obd_widget.png)|

Die [Fahrzeugmetriken-Widgets](../widgets/info-widgets.md#vehicle-metrics-widgets) werden automatisch hinzugefügt, wenn Sie das Plugin aktivieren. Wenn sie nicht sichtbar sind, können Sie sie manuell über das Menü [Bildschirm konfigurieren](../widgets/configure-screen.md) hinzufügen.

### Widget-Einstellungen {#widget-settings}

Die Widgets zeigen wichtige Daten von Ihrem verbundenen OBD-II-Gerät in Echtzeit an, wie z. B. Geschwindigkeit, Motormetriken und Kraftstoffverbrauch. Stellen Sie sicher, dass sie sichtbar sind, bevor Sie Ihre Fahrt beginnen, um die Metriken nahtlos zu verfolgen.

Einige Widgets bieten Optionen für den Anzeigemodus:

- **Sofort**. Zeigt Echtzeitdaten für die ausgewählte Metrik an.
- **Durchschnitt**. Zeigt Durchschnittswerte über ein konfigurierbares Zeitintervall an (15 Sekunden bis 60 Minuten).


## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

> *Zuletzt aktualisiert: Dezember 2024*