---
source-hash: 9d1531d9555eb2840386ca7a59c86b6aaea01e503c8115d6bb52a5af5ac3dfed
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

:::info Bezahlte Funktion
Das Plugin Externe Sensoren ist eine [bezahlte Funktion](../purchases/index.md) der OsmAnd-App.
:::

Das **Plugin Externe Sensoren** ermöglicht es Ihnen, Daten von [drahtlosen externen Sensoren](https://en.wikipedia.org/wiki/Wireless_sensor_network) mit [ANT+](https://en.wikipedia.org/wiki/ANT_(network)) und [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy)-Technologien zu lesen und aufzuzeichnen und diese Daten mithilfe von [Widgets](#widgets) in der OsmAnd-Anwendung anzuzeigen. Dieses verwaltete Netzwerk ist in der Lage, Sensordaten zu sammeln, zu übertragen und zu speichern.

> *HINWEIS: iPhones und iPads unterstützen ANT+ aufgrund von Hardwarebeschränkungen nicht.*

Das **Plugin Externe Sensoren** greift auf externe Sensoren zu und kann Daten lesen wie:

- *Herzfrequenz*
- *Fahrradleistung*
- *Fahrradtrittfrequenz*
- *Fahrradgeschwindigkeit*
- *Fahrradstrecke*
- *Temperatur*

Um das Plugin zu verwenden, stellen Sie sicher, dass Ihr Gerät [kompatibel](#pair-new-sensor) ist, das Plugin [aktiviert](../plugins/#enable--disable) ist und Ihre externen Sensoren über Bluetooth (BLE) verbunden sind.


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um Daten von externen Sensoren nutzen zu können, befolgen Sie diese Schritte:

1. [Kaufen Sie](../purchases/) ein **OsmAnd Pro-Abonnement**, um das Plugin Externe Sensoren freizuschalten.
2. [Aktivieren Sie](../plugins/#enable--disable) das Plugin unter *Menü → Plugins*.
3. **Schalten Sie Bluetooth ein** auf Ihrem Gerät, um die Verbindung mit **BLE-Sensoren** zu ermöglichen.
4. [Koppeln und konfigurieren Sie](#pair-new-sensor) externe Sensoren über das Plugin-Menü.
5. (Optional) [Fügen Sie](#widgets) **Widgets für externe Sensoren** zu Ihrer Kartenansicht hinzu, um Echtzeitdaten wie Herzfrequenz, Trittfrequenz oder Batteriestand anzuzeigen.
6. (Optional) Verwenden Sie das [Plugin Tourenaufzeichnung](../plugins/trip-recording.md), um Sensordaten in GPX-Tracks aufzuzeichnen.
7. (Optional, nur Android) Befolgen Sie [diese Tipps](https://www.thisisant.com/consumer/ant-101/ant-in-phones), um ANT+-Sensoren zu verbinden, wenn Ihr Gerät diese unterstützt.


### Neuen Sensor koppeln {#pair-new-sensor}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

| | |
| --- | --- |
| ![Plugin Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_pair_sensors_1.png) | ![Plugin Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_pair_sensors_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| | |
| --- | --- |
| ![Plugin Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_first_start_ios.png) |  ![Plugin Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_bluetooth_turned_off_ios.png) |

</TabItem>

</Tabs>

Um einen neuen Sensor zu koppeln, gehen Sie wie folgt vor:

1. Stellen Sie sicher, dass **Bluetooth** auf Ihrem Gerät **aktiviert** ist.
2. Gehen Sie zu *Menü → Plugins → Externe Sensoren → Einstellungen*.
3. Tippen Sie auf **Neuen Sensor koppeln**.
4. OsmAnd sucht nach verfügbaren **Bluetooth LE** oder **ANT+** Sensoren (abhängig von Ihrer Plattform).
5. Tippen Sie auf die **+** Schaltfläche neben dem Sensor, den Sie koppeln möchten.
6. Nach der Verbindung erscheint der Sensor in der Liste der **verbundenen Geräte**.

***Hinweise:***

- Auf **iOS** werden aufgrund von Hardwarebeschränkungen nur **Bluetooth Low Energy (BLE)** Sensoren unterstützt. ANT+-Sensoren sind nicht verfügbar.
- Auf **Android** können je nach Gerät sowohl BLE- als auch ANT+-Sensoren unterstützt werden. Weitere Details finden Sie im [ANT+-Kompatibilitätsleitfaden](https://www.thisisant.com/consumer/ant-101/ant-in-phones).
- Eine **Pop-up-Benachrichtigung** wird jedes Mal angezeigt, wenn ein Sensor verbunden oder getrennt wird.
- **Fahrradleistungssensoren** sind auf Android nur über ANT+ verfügbar.


## Sensoreinstellungen {#sensor-settings}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Verwenden Sie einen der folgenden Pfade, um die Sensoreinstellungen zu öffnen:

- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/> → Verfügbares Gerät → Einstellungen*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/> → Verfügbares Gerät → Einstellungen*

![Plugin Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_sett_sensors_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Verwenden Sie einen der folgenden Pfade, um die Sensoreinstellungen zu öffnen:

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,external_sensors_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,plugins_menu_group,external_sensors_plugin_name"/>*

![Plugin Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_sett_sensors_ios.png)

</TabItem>

</Tabs>

Jeder in OsmAnd aufgelistete gekoppelte externe Sensor verfügt über einen eigenen Konfigurationsbildschirm mit den folgenden Optionen:

- **Verbinden / Trennen** – schalten Sie den Verbindungsstatus um.
- **Umbenennen** – weisen Sie dem Sensor einen benutzerdefinierten Namen zu.
- **Sensor vergessen** – entfernen Sie den Sensor aus der Liste (kann später erneut gekoppelt werden).
- **Einstellungen** – öffnen Sie den Bildschirm mit den Sensordetails (Sensortyp, Werte, Batteriestand, Einstellung des Radumfangs).

***Hinweise:***

- Auf **iOS** können Sie den **Batteriestand** verbundener BLE-Sensoren direkt in einem Karten-[Widget](#widgets) anzeigen. Um dies zu aktivieren, gehen Sie zu: *Menü → Bildschirm konfigurieren → Panel auswählen → Widget hinzufügen → Externer Sensor → Einstellungen → Anzeigen → Batteriestand*
- Eine Pop-up-Benachrichtigung wird angezeigt, wenn der Batteriestand eines gekoppelten Sensors **unter 15 % fällt**.


## Tourenaufzeichnung {#trip-recording}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*

![Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.png)  ![Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,shared_string_external"/>*

![Plugin Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_pair_sensors_5_ios.png)  ![Plugin Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_pair_sensors_6_ios.png)

</TabItem>

</Tabs>

Um Sensordaten während Ihrer Tour mit dem [Plugin Tourenaufzeichnung](../plugins/trip-recording.md#recording-settings) aufzuzeichnen:

1. Stellen Sie sicher, dass das **Plugin Externe Sensoren** aktiviert ist.
2. Gehen Sie zu *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*.
3. Wählen Sie die Sensortypen aus, die Sie aufzeichnen möchten (z. B. Trittfrequenz, Herzfrequenz, Geschwindigkeit).
4. Beginnen Sie mit der Aufzeichnung Ihrer Tour. OsmAnd speichert die ausgewählten Sensordaten im GPX-Track.

***Hinweise:***

- Die Liste der verfügbaren Sensortypen wird angezeigt, auch wenn keine Sensoren verbunden sind.
- Wenn noch keine Sensoren gekoppelt sind, verwenden Sie die Schaltfläche [Neuen Sensor koppeln](#pair-new-sensor) in den Plugin-Einstellungen.
- Batteriestandsdaten werden **nicht** in GPX-Dateien aufgezeichnet und sind für die Analyse auf der Karte nicht verfügbar.

:::note Formatkompatibilität
OsmAnd verwendet die [Trackaufzeichnung](../plugins/trip-recording.md#recorded-gpx-file), um Sensordaten in GPX-Dateien einzubetten. Dieses Format ist mit vielen Sport- und Trainings-Apps (z. B. Strava, Runkeeper) kompatibel.
:::


### Datenanalyse {#data-analyze}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_andr.png)  ![Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plugin Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_ios.png)  ![Plugin Externe Sensoren](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_ios.png)

</TabItem>

</Tabs>

Nachdem Sie Ihre Tour mit dem [Plugin Tourenaufzeichnung](../plugins/trip-recording.md#recording-settings) aufgezeichnet haben, können Sie die Sensordaten in der Trackanalyse-Oberfläche überprüfen.

Um Daten zu analysieren:

1. Beenden Sie Ihre Tourenaufzeichnung.
2. Öffnen Sie den aufgezeichneten Track unter *Meine Orte → Tracks* oder tippen Sie auf den Track auf der Karte.
3. Wählen Sie im Kontextmenü des Tracks *Optionen → Auf Karte analysieren*.

Dies zeigt Diagramme für Ihre aufgezeichneten Daten an: *Herzfrequenz*, *Geschwindigkeit*, *Trittfrequenz*, *Fahrradleistung* und *Temperatur*

> *Batteriestand und Strecke sind in der Funktion [Auf Karte analysieren](../map/tracks/index.md#analyze-track-on-map) nicht verfügbar.*


## Widgets {#widgets}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Panel auswählen → Widget hinzufügen → <Translate android="true" ids="external_sensor_widgets"/>*

![Widgets Externe Sensoren Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1_andr.png)  ![Widgets Externe Sensoren Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Panel auswählen → Widget hinzufügen → <Translate ios="true" ids="external_sensors_plugin_name"/>*

![Widgets Externe Sensoren iOS](@site/static/img/plugins/sensors/external_sens_widg_1_ios.png)  ![Widgets Externe Sensoren iOS](@site/static/img/plugins/sensors/external_sens_widg_3_ios.png)

</TabItem>

</Tabs>

Das [Widget Externe Sensoren](../widgets/info-widgets.md#external-sensors-widgets) ermöglicht es Ihnen, Live-Daten von Ihren verbundenen Sensoren direkt auf dem Kartenbildschirm anzuzeigen.

Bevor Sie Ihre Tour beginnen:

- Stellen Sie sicher, dass das Plugin Externe Sensoren aktiviert ist.
- Öffnen Sie *Bildschirm konfigurieren* und fügen Sie die notwendigen Widgets zum entsprechenden Panel hinzu.

Unterstützte Widget-Typen:

1. **<Translate android="true" ids="map_widget_ant_heart_rate"/>** – zeigt die Echtzeit-Herzfrequenz von einem gekoppelten Monitor an.
2. **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*nur Android*) – zeigt die aktuelle Tretleistung in Watt an.
3. **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>** – zeigt die Anzahl der Pedalumdrehungen pro Minute an.
4. **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>** – aktuelle Fahrgeschwindigkeit.
5. **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>** – vom Sensor gemessene Gesamtstrecke.
6. **<Translate android="true" ids="external_device_characteristic_temperature"/>** – aktuelle Umgebungstemperatur.
7. **Batteriestand** (*nur iOS*) – prozentualer Batteriestand eines angeschlossenen BLE-Sensors.


### Widget-Einstellungen {#widget-settings}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Panel auswählen → Widget hinzufügen → <Translate android="true" ids="external_sensor_widgets"/> → Widget auswählen → <Translate android="true" ids="shared_string_settings"/>*

![Einstellungen Widgets Externe Sensoren Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Panel auswählen → Widget hinzufügen → Externer Sensor → Widget auswählen → Einstellungen*

![Einstellungen Widgets Externe Sensoren Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-ios.png)

</TabItem>

</Tabs>

Standardmäßig zeigt das Widget den ersten aktuell verbundenen Sensor dieses Typs an. Wenn Sie einen bestimmten Sensor verwenden möchten, tippen Sie auf **Datenquelle** und wählen Sie aus der Liste der verbundenen Sensoren.

Auf **iOS** können Sie auswählen, welcher Wert im Widget angezeigt werden soll:

- **Sensordaten** (z. B. Trittfrequenz, Geschwindigkeit).
- **Batteriestand** – Echtzeit-Batterieprozentsatz des ausgewählten Sensors.

> *Dies ist nützlich, wenn Sie den Ladezustand der Batterie während langer Fahrten überwachen möchten, um Unterbrechungen zu vermeiden.*


## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

> *Zuletzt aktualisiert: Mai 2025*