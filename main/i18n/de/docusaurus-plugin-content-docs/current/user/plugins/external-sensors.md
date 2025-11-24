---
source-hash: 98ef3def7d982e4b280e3c2f1201d4c80b83ec88f33f9ec1799e20750ea2d497
sidebar_position: 5
title:  Externe Sensoren
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
Das Plugin 'Externe Sensoren' ist eine [kostenpflichtige Funktion](../purchases/index.md) der OsmAnd-App.  
:::

Das **Plugin 'Externe Sensoren'** ermöglicht das Lesen und Aufzeichnen von Daten von [drahtlosen externen Sensoren](https://en.wikipedia.org/wiki/Wireless_sensor_network), die mit den Technologien [ANT+](https://en.wikipedia.org/wiki/ANT_(network)) und [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) arbeiten, und die Anzeige dieser Daten mithilfe von [Widgets](#widgets) in der OsmAnd-Anwendung. Dieses verwaltete Netzwerk ist in der Lage, Sensordaten zu sammeln, zu übertragen und zu speichern.

> *HINWEIS: iPhones und iPads unterstützen ANT+ aufgrund von Hardware-Einschränkungen nicht.*

Das **Plugin 'Externe Sensoren'** greift auf externe Sensoren zu und kann Daten wie die folgenden lesen:

- *Herzfrequenz*
- *Fahrradleistung*
- *Trittfrequenz*
- *Fahrradgeschwindigkeit*
- *Fahrraddistanz*
- *Temperatur*

Um das Plugin zu verwenden, stellen Sie sicher, dass Ihr Gerät [kompatibel](#pair-new-sensor) ist, das Plugin [aktiviert](../plugins/#enable--disable) ist und Ihre externen Sensoren über Bluetooth (BLE) verbunden sind.


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um mit der Nutzung von Daten externer Sensoren zu beginnen, führen Sie die folgenden Schritte aus:

1. [Erwerben](../purchases/) Sie ein **OsmAnd Pro-Abonnement**, um das Plugin 'Externe Sensoren' freizuschalten.
2. [Aktivieren](../plugins/#enable--disable) Sie das Plugin unter *Menü → Plugins*.
3. **Schalten Sie Bluetooth** auf Ihrem Gerät ein, um die Verbindung mit **BLE-Sensoren** zu ermöglichen.
4. [Koppeln und konfigurieren](#pair-new-sensor) Sie externe Sensoren über das Plugin-Menü.
5. (Optional) [Fügen Sie](#widgets) **Widgets für externe Sensoren** zu Ihrem Kartenbildschirm hinzu, um Echtzeitdaten wie Herzfrequenz, Trittfrequenz oder Batteriestand anzuzeigen.
6. (Optional) Verwenden Sie das [Plugin für die Reiseaufzeichnung](../plugins/trip-recording.md), um Sensordaten in GPX-Tracks aufzuzeichnen.
7. (Optional, nur Android) Befolgen Sie [diese Tipps](https://www.thisisant.com/consumer/ant-101/ant-in-phones), um ANT+-Sensoren zu verbinden, falls Ihr Gerät diese unterstützt.


### Neuen Sensor koppeln {#pair-new-sensor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| | |
| --- | --- |
| ![Plugin für externe Sensoren](@site/static/img/plugins/sensors/external_sensors_pair_sensors_1.png) | ![Plugin für externe Sensoren](@site/static/img/plugins/sensors/external_sensors_pair_sensors_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| | |
| --- | --- |
| ![Plugin für externe Sensoren](@site/static/img/plugins/sensors/external_sensors_first_start_ios.png) |  ![Plugin für externe Sensoren](@site/static/img/plugins/sensors/external_sensors_bluetooth_turned_off_ios.png) |

</TabItem>

</Tabs>

Um einen neuen Sensor zu koppeln, folgen Sie diesen Schritten:

1. Stellen Sie sicher, dass **Bluetooth auf Ihrem Gerät aktiviert ist**.  
2. Gehen Sie zu *Menü → Plugins → Externe Sensoren → Einstellungen*.  
3. Tippen Sie auf **Neuen Sensor koppeln**.
4. OsmAnd sucht nach verfügbaren **Bluetooth LE**- oder **ANT+**-Sensoren (abhängig von Ihrer Plattform).
5. Tippen Sie auf die **+**-Schaltfläche neben dem Sensor, den Sie koppeln möchten.
6. Sobald die Verbindung hergestellt ist, erscheint der Sensor in der Liste der **Verbundenen Geräte**.

***Hinweise:***

- Unter **iOS** werden aufgrund von Hardware-Einschränkungen nur **Bluetooth Low Energy (BLE)**-Sensoren unterstützt. ANT+-Sensoren sind nicht verfügbar.
- Unter **Android** können je nach Gerät sowohl BLE- als auch ANT+-Sensoren unterstützt werden. Weitere Informationen finden Sie im [ANT+-Kompatibilitätsleitfaden](https://www.thisisant.com/consumer/ant-101/ant-in-phones).
- Eine **Pop-up-Benachrichtigung** wird jedes Mal angezeigt, wenn ein Sensor eine Verbindung herstellt oder trennt.
- **Fahrradleistungssensoren** sind nur auf Android über ANT+ verfügbar.


## Sensoreinstellungen {#sensor-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Verwenden Sie einen der folgenden Pfade, um die Sensoreinstellungen zu öffnen:

- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/> → Verfügbares Gerät → Einstellungen*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/> → Verfügbares Gerät → Einstellungen*

![Plugin für externe Sensoren](@site/static/img/plugins/sensors/external_sensors_sett_sensors_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Verwenden Sie einen der folgenden Pfade, um die Sensoreinstellungen zu öffnen:

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,external_sensors_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,plugins_menu_group,external_sensors_plugin_name"/>*

![Plugin für externe Sensoren](@site/static/img/plugins/sensors/external_sensors_sett_sensors_ios.png)  

</TabItem>

</Tabs>

Jeder in OsmAnd aufgelistete gekoppelte externe Sensor hat seinen eigenen Konfigurationsbildschirm mit den folgenden Optionen:

- **Verbinden / Trennen** – schaltet den Verbindungsstatus um.
- **Umbenennen** – weisen Sie dem Sensor einen benutzerdefinierten Namen zu.
- **Sensor vergessen** – entfernt den Sensor aus der Liste (kann später erneut gekoppelt werden).
- **Einstellungen** – öffnet den Detailbildschirm des Sensors (Sensortyp, Werte, Batteriestand, Einstellung des Radumfangs).

***Hinweise:***

- Unter **iOS** können Sie den **Batteriestand** verbundener BLE-Sensoren direkt in einem Karten-[Widget](#widgets) anzeigen. Um dies zu aktivieren, gehen Sie zu: *Menü → Bildschirm konfigurieren → Panel auswählen → Widget hinzufügen → Externer Sensor → Einstellungen → Anzeigen → Batteriestand*
- Eine Pop-up-Benachrichtigung erscheint, wenn der **Batteriestand eines gekoppelten Sensors unter 15 % fällt**.


## Reiseaufzeichnung {#trip-recording}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*

![Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.png)  ![Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,shared_string_external"/>*

![Plugin für externe Sensoren](@site/static/img/plugins/sensors/external_sensors_pair_sensors_5_ios.png)  ![Plugin für externe Sensoren](@site/static/img/plugins/sensors/external_sensors_pair_sensors_6_ios.png)  

</TabItem>

</Tabs>

Um Sensordaten während Ihrer Reise mit dem [Plugin für die Reiseaufzeichnung](../plugins/trip-recording.md#recording-settings) aufzuzeichnen:

1. Stellen Sie sicher, dass das **Plugin 'Externe Sensoren'** aktiviert ist.
2. Gehen Sie zu *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*.
3. Wählen Sie die Sensortypen aus, die Sie aufzeichnen möchten (z. B. Trittfrequenz, Herzfrequenz, Geschwindigkeit).
4. Starten Sie die Aufzeichnung Ihrer Reise. OsmAnd speichert die ausgewählten Sensordaten im GPX-Track.

***Hinweise:***

- Die Liste der verfügbaren Sensortypen wird auch dann angezeigt, wenn keine Sensoren verbunden sind.
- Wenn noch keine Sensoren gekoppelt sind, verwenden Sie die Schaltfläche [Neuen Sensor koppeln](#pair-new-sensor) in den Plugin-Einstellungen.
- Batteriestandsdaten werden **nicht** in GPX-Dateien aufgezeichnet und sind nicht für die Analyse auf der Karte verfügbar.

:::note Formatkompatibilität
OsmAnd verwendet die [Trackaufzeichnung](../plugins/trip-recording.md#recorded-gpx-file), um Sensordaten in GPX-Dateien einzubetten. Dieses Format ist mit vielen Sport- und Trainings-Apps (z. B. Strava, Runkeeper) kompatibel.
:::


### Datenanalyse {#data-analyze}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_andr.png)  ![Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_ios.png)  ![Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_ios.png)

</TabItem>

</Tabs>

Nachdem Sie Ihre Reise mit dem [Plugin für die Reiseaufzeichnung](../plugins/trip-recording.md#recording-settings) aufgezeichnet haben, können Sie die Sensordaten in der Track-Analyse-Oberfläche überprüfen.

Zur Analyse der Daten:

1. Beenden Sie Ihre Reiseaufzeichnung.
2. Öffnen Sie den aufgezeichneten Track unter *Meine Orte → Tracks* oder tippen Sie auf den Track auf der Karte.
3. Wählen Sie *Optionen → Auf Karte analysieren* aus dem Kontextmenü des Tracks.

Dies zeigt Diagramme für Ihre aufgezeichneten Daten an: *Herzfrequenz*, *Geschwindigkeit*, *Trittfrequenz*, *Fahrradleistung* und *Temperatur*

> *Batteriestand und Distanz sind in der Funktion [Auf Karte analysieren](../map/tracks/index.md#analyze-track-on-map) nicht verfügbar.*


## Widgets {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wählen Sie ein Panel → Widget hinzufügen → <Translate android="true" ids="external_sensor_widgets"/>*

![Widgets für externe Sensoren Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1_andr.png)  ![Widgets für externe Sensoren Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wählen Sie ein Panel → Widget hinzufügen → <Translate ios="true" ids="external_sensors_plugin_name"/>*

![Widgets für externe Sensoren iOS](@site/static/img/plugins/sensors/external_sens_widg_1_ios.png)  ![Widgets für externe Sensoren iOS](@site/static/img/plugins/sensors/external_sens_widg_3_ios.png)  

</TabItem>

</Tabs>

Das [Widget für externe Sensoren](../widgets/info-widgets.md#external-sensors-widgets) ermöglicht es Ihnen, Live-Daten von Ihren verbundenen Sensoren direkt auf dem Kartenbildschirm anzuzeigen.

Bevor Sie Ihre Reise beginnen:

- Stellen Sie sicher, dass das Plugin 'Externe Sensoren' aktiviert ist.
- Öffnen Sie *Bildschirm konfigurieren* und fügen Sie die notwendigen Widgets dem entsprechenden Panel hinzu.

Unterstützte Widget-Typen:

1. **<Translate android="true" ids="map_widget_ant_heart_rate"/>** – zeigt die Echtzeit-Herzfrequenz von einem gekoppelten Monitor an.
2. **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*nur Android*) – zeigt die aktuelle Tretleistung in Watt an.
3. **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>** – zeigt die Anzahl der Pedalumdrehungen pro Minute an.
4. **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>** – aktuelle Fahrradgeschwindigkeit.
5. **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>** – vom Sensor gemessene Gesamtdistanz.
6. **<Translate android="true" ids="external_device_characteristic_temperature"/>** – aktuelle Umgebungstemperatur.
7. **Batteriestand** – verbleibender Batterieprozentsatz eines verbundenen BLE-Sensors, schalten Sie ihn in den **Sensoreinstellungen** um.

**Hinweis:** Wenn ein Sensor vorübergehend die Verbindung verliert, tippen Sie auf sein Widget auf der Karte, um sofort eine erneute Verbindung zu versuchen – Sie müssen das Menü für Externe Sensoren nicht öffnen.


### Widget-Einstellungen {#widget-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wählen Sie ein Panel → Widget hinzufügen → <Translate android="true" ids="external_sensor_widgets"/> → Wählen Sie ein Widget → <Translate android="true" ids="shared_string_settings"/>*

![Einstellungen für Widgets externer Sensoren Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wählen Sie ein Panel → Widget hinzufügen → Externer Sensor → Wählen Sie ein Widget → Einstellungen*

![Einstellungen für Widgets externer Sensoren iOS](@site/static/img/plugins/sensors/external-sensors-widget-settings-ios.png)

</TabItem>

</Tabs>

Standardmäßig zeigt das Widget den ersten aktuell verbundenen Sensor dieses Typs an. Wenn Sie einen bestimmten Sensor verwenden möchten, tippen Sie auf **Datenquelle** und wählen Sie aus der Liste der verbundenen Sensoren.

Unter **iOS** können Sie wählen, welcher Wert im Widget angezeigt werden soll:  

- **Sensordaten** (z. B. Trittfrequenz, Geschwindigkeit).
- **Batteriestand** – Echtzeit-Batterieprozentsatz des ausgewählten Sensors.

> *Dies ist nützlich, wenn Sie die Batterieladung während langer Fahrten überwachen möchten, um Verbindungsabbrüche zu vermeiden.*


## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Allgemeine Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)