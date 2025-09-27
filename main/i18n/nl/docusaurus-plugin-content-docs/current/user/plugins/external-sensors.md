---
source-hash: 5df41c43a87389205811e1c6bcb621fc5c1e5d910a865f87aafd5f36b2c568be
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



## Overzicht {#overview}

:::info Betaalde functie
De Externe Sensoren-plugin is een [betaalde functie](../purchases/index.md) van de OsmAnd-app.  
:::

De **Externe Sensoren-plugin** stelt u in staat om gegevens van [draadloze externe sensoren](https://en.wikipedia.org/wiki/Wireless_sensor_network) die werken op [ANT+](https://en.wikipedia.org/wiki/ANT_(network)) en [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) technologieën te lezen en op te nemen, en deze gegevens weer te geven met behulp van [widgets](#widgets) in de OsmAnd-applicatie. Dit beheerde netwerk is in staat om sensorgegevens te verzamelen, verzenden en op te slaan.

> *OPMERKING: iPhones en iPads ondersteunen geen ANT+ vanwege hardwarebeperkingen.*

De **Externe Sensoren-plugin** heeft toegang tot externe sensoren en kan gegevens lezen zoals:

- *Hartslag*
- *Fietsvermogen*
- *Fietscadans*
- *Fietssnelheid*
- *Fietsafstand*
- *Temperatuur*

Om de plugin te gebruiken, zorg ervoor dat uw apparaat [compatibel](#pair-new-sensor) is, de plugin is [ingeschakeld](../plugins/#enable--disable), en uw externe sensoren zijn verbonden via Bluetooth (BLE).


## Vereiste Instelparameters {#required-setup-parameters}

Volg deze stappen om gegevens van externe sensoren te gaan gebruiken:

1. [Koop](../purchases/) een **OsmAnd Pro-abonnement** om de Externe Sensoren-plugin te ontgrendelen.
2. [Schakel](../plugins/#enable--disable) de plugin in via *Menu → Plugins*.
3. **Schakel Bluetooth in** op uw apparaat om verbinding met **BLE-sensoren** mogelijk te maken.
4. [Koppel en configureer](#pair-new-sensor) externe sensoren via het plugin-menu.
5. (Optioneel) [Voeg](#widgets) **Externe Sensoren-widgets** toe aan uw kaartscherm om realtime gegevens zoals hartslag, cadans of batterijniveau weer te geven.
6. (Optioneel) Gebruik de [Tripopname-plugin](../plugins/trip-recording.md) om sensorgegevens op te nemen in GPX-tracks.
7. (Optioneel, alleen Android) Volg [deze tips](https://www.thisisant.com/consumer/ant-101/ant-in-phones) om ANT+-sensoren te verbinden als uw apparaat ze ondersteunt.


### Nieuwe Sensor Koppelen {#pair-new-sensor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| | |
| --- | --- |
| ![Externe sensoren plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_1.png) | ![Externe sensoren plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| | |
| --- | --- |
| ![Externe sensoren plugin](@site/static/img/plugins/sensors/external_sensors_first_start_ios.png) |  ![Externe sensoren plugin](@site/static/img/plugins/sensors/external_sensors_bluetooth_turned_off_ios.png) |

</TabItem>

</Tabs>

Volg deze stappen om een nieuwe sensor te koppelen:

1. Zorg ervoor dat **Bluetooth is ingeschakeld** op uw apparaat.  
2. Ga naar *Menu → Plugins → Externe Sensoren → Instellingen*.  
3. Tik op **Nieuwe sensor koppelen**.
4. OsmAnd scant naar beschikbare **Bluetooth LE**- of **ANT+**-sensoren (afhankelijk van uw platform).
5. Tik op de **+** knop naast de sensor die u wilt koppelen.
6. Eenmaal verbonden, verschijnt de sensor in de lijst van **Verbonden apparaten**.

***Opmerkingen:***

- Op **iOS** worden alleen **Bluetooth Low Energy (BLE)**-sensoren ondersteund vanwege hardwarebeperkingen. ANT+-sensoren zijn niet beschikbaar.
- Op **Android** kunnen zowel BLE- als ANT+-sensoren worden ondersteund, afhankelijk van uw apparaat. Zie de [ANT+ compatibiliteitsgids](https://www.thisisant.com/consumer/ant-101/ant-in-phones) voor meer details.
- Een **pop-upmelding** verschijnt telkens wanneer een sensor verbinding maakt of verbreekt.
- **Fietsvermogensensoren** zijn alleen beschikbaar op Android via ANT+.


## Sensorinstellingen {#sensor-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gebruik een van de volgende paden om de sensorinstellingen te openen:

- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/> → Beschikbaar apparaat → Instellingen*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/> → Beschikbaar apparaat → Instellingen*

![Externe sensoren plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Gebruik een van de volgende paden om de sensorinstellingen te openen:

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,external_sensors_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,plugins_menu_group,external_sensors_plugin_name"/>*

![Externe sensoren plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_ios.png)  

</TabItem>

</Tabs>

Elke gekoppelde externe sensor in de lijst van OsmAnd heeft zijn eigen configuratiescherm met de volgende opties:

- **Verbinden / Verbinding verbreken** – schakel de verbindingsstatus om.
- **Hernoemen** – wijs een aangepaste naam toe aan de sensor.
- **Sensor vergeten** – verwijder de sensor uit de lijst (kan later opnieuw worden gekoppeld).
- **Instellingen** – open het scherm met sensordetails (sensortype, waarden, batterijniveau, instelling wielomtrek).

***Opmerkingen:***

- Op **iOS** kunt u het **batterijniveau** van verbonden BLE-sensoren direct weergeven in een kaart[widget](#widgets). Om dit in te schakelen, ga naar: *Menu → Scherm configureren → Kies paneel → Widget toevoegen → Externe sensor → Instellingen → Toon → Batterijniveau*
- Er verschijnt een pop-upmelding wanneer het batterij**niveau van een gekoppelde sensor onder de 15% zakt**.


## Tripopname {#trip-recording}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*

![Externe sensoren](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.png)  ![Externe sensoren](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,shared_string_external"/>*

![Externe sensoren plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_5_ios.png)  ![Externe sensoren plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_6_ios.png)  

</TabItem>

</Tabs>

Om sensorgegevens op te nemen met de [Tripopname-plugin](../plugins/trip-recording.md#recording-settings) tijdens uw reis:

1. Zorg ervoor dat de **Externe Sensoren-plugin** is ingeschakeld.
2. Ga naar *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*.
3. Selecteer de sensortypes die u wilt opnemen (bijv. cadans, hartslag, snelheid).
4. Start de opname van uw reis. OsmAnd slaat de geselecteerde sensorgegevens op in de GPX-track.

***Opmerkingen:***

- De lijst met beschikbare sensortypes wordt getoond, zelfs als er geen sensoren zijn verbonden.
- Als er nog geen sensoren zijn gekoppeld, gebruik dan de knop [Nieuwe sensor koppelen](#pair-new-sensor) in de plugin-instellingen.
- Gegevens over het batterijniveau worden **niet** opgenomen in GPX-bestanden en zijn niet beschikbaar voor analyse op de kaart.

:::note Formaatcompatibiliteit
OsmAnd gebruikt [trackopname](../plugins/trip-recording.md#recorded-gpx-file) om sensorgegevens in te sluiten in GPX-bestanden. Dit formaat is compatibel met veel sport- en trainingsapps (bijv. Strava, Runkeeper).
:::


### Gegevens Analyseren {#data-analyze}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Externe sensoren](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_andr.png)  ![Externe sensoren](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Externe sensoren](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_ios.png)  ![Externe sensoren](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_ios.png)

</TabItem>

</Tabs>

Nadat u uw reis hebt opgenomen met de [Tripopname-plugin](../plugins/trip-recording.md#recording-settings), kunt u de sensorgegevens bekijken in de interface voor trackanalyse.

Om gegevens te analyseren:

1. Beëindig de opname van uw reis.
2. Open de opgenomen track via *Mijn Plaatsen → Tracks* of tik op de track op de kaart.
3. Selecteer *Opties → Analyseren op kaart* in het contextmenu van de track.

Dit toont grafieken voor uw opgenomen gegevens: *Hartslag*, *Snelheid*, *Cadans*, *Fietsvermogen* en *Temperatuur*

> *Batterijniveau en Afstand zijn niet beschikbaar in de functie [Analyseren op kaart](../map/tracks/index.md#analyze-track-on-map).*


## Widgets {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="external_sensor_widgets"/>*

![Externe sensoren widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1_andr.png)  ![Externe sensoren widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="external_sensors_plugin_name"/>*

![Externe sensoren widgets iOS](@site/static/img/plugins/sensors/external_sens_widg_1_ios.png)  ![Externe sensoren widgets iOS](@site/static/img/plugins/sensors/external_sens_widg_3_ios.png)  

</TabItem>

</Tabs>

De [Externe Sensoren-widget](../widgets/info-widgets.md#external-sensors-widgets) stelt u in staat om live gegevens van uw verbonden sensoren direct op het kaartscherm weer te geven.

Voordat u uw reis begint:

- Zorg ervoor dat de Externe Sensoren-plugin is ingeschakeld.
- Open *Scherm configureren* en voeg de benodigde widgets toe aan het juiste paneel.

Ondersteunde widgettypes:

1. **<Translate android="true" ids="map_widget_ant_heart_rate"/>** – toont de realtime hartslag van een gekoppelde monitor.
2. **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*Alleen Android*) – toont het huidige trapvermogen in watt.
3. **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>** – toont het aantal pedaalomwentelingen per minuut.
4. **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>** – huidige fietssnelheid.
5. **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>** – totale afstand gemeten door de sensor.
6. **<Translate android="true" ids="external_device_characteristic_temperature"/>** – huidige omgevingstemperatuur.
7. **Batterijniveau** – percentage van de resterende batterij in een verbonden BLE-sensor, schakel dit in bij **Sensorinstellingen**.


### Widgetinstellingen {#widget-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="external_sensor_widgets"/> → Kies een widget → <Translate android="true" ids="shared_string_settings"/>*

![Externe sensoren widgets Instellingen Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Kies een paneel → Widget toevoegen → Externe sensor → Kies een widget → Instellingen*

![Externe sensoren widgets Instellingen Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-ios.png)

</TabItem>

</Tabs>

Standaard toont de widget de eerste momenteel verbonden sensor van dit type. Als u een specifieke sensor wilt gebruiken, tikt u op **Gegevensbron** en kiest u uit de lijst met verbonden sensoren.

Op **iOS** kunt u kiezen welke waarde u in de widget wilt weergeven:  

- **Sensorgegevens** (bijv. cadans, snelheid).
- **Batterijniveau** – realtime batterijpercentage van de geselecteerde sensor.

> *Dit is handig wanneer u de batterijlading wilt controleren tijdens lange reizen om verbrekingen te voorkomen.*


## Gerelateerde Artikelen {#related-articles}

- [Interactie met de Kaart](../../user/map/interact-with-map.md)
- [Algemene Instellingen](../../user/personal/global-settings.md)
- [Vectorkaarten (Kaartstijlen)](../../user/map/vector-maps.md)