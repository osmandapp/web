---
source-hash: 82311f61fc7e617e22d754968f02e6ec8009c51ecb4943a18c23ef0a9d897cfd
sidebar_position: 5
title: Externe sensoren
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
De plug-in Externe sensoren is een [betaalde functie](../purchases/index.md) van de OsmAnd-app.
:::

De **plug-in Externe sensoren** stelt je in staat om gegevens van [draadloze externe sensoren](https://en.wikipedia.org/wiki/Wireless_sensor_network) die werken op [ANT+](https://en.wikipedia.org/wiki/ANT_(network)) en [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) technologieën te lezen en op te nemen, en deze gegevens weer te geven met behulp van [widgets](#widgets) in de OsmAnd-applicatie. Dit beheerde netwerk is in staat om sensorgegevens te verzamelen, te verzenden en op te slaan.

> *OPMERKING: iPhones en iPads ondersteunen geen ANT+ vanwege hardwarebeperkingen.*

De **plug-in Externe sensoren** heeft toegang tot externe sensoren en kan gegevens lezen zoals:

- *Hartslag*
- *Fietsvermogen*
- *Fietscadans*
- *Fietssnelheid*
- *Fietsafstand*
- *Temperatuur*

Om de plug-in te gebruiken, zorg ervoor dat je apparaat [compatibel](#pair-new-sensor) is, de plug-in is [ingeschakeld](../plugins/#enable--disable), en je externe sensoren zijn verbonden via Bluetooth (BLE).


## Vereiste instellingsparameters {#required-setup-parameters}

Volg deze stappen om gegevens van externe sensoren te gebruiken:

1. [Koop](../purchases/) een **OsmAnd Pro-abonnement** om de plug-in Externe sensoren te ontgrendelen.
2. [Schakel](../plugins/#enable--disable) de plug-in in via *Menu → Plug-ins*.
3. **Schakel Bluetooth in** op je apparaat om verbinding met **BLE-sensoren** toe te staan.
4. [Koppel en configureer](#pair-new-sensor) externe sensoren via het plug-inmenu.
5. (Optioneel) [Voeg](#widgets) **widgets voor externe sensoren** toe aan je kaartscherm om realtime gegevens weer te geven, zoals hartslag, cadans of batterijniveau.
6. (Optioneel) Gebruik de [plug-in Ritregistratie](../plugins/trip-recording.md) om sensorgegevens op te nemen in GPX-tracks.
7. (Optioneel, alleen Android) Volg [deze tips](https://www.thisisant.com/consumer/ant-101/ant-in-phones) om ANT+-sensoren te verbinden als je apparaat deze ondersteunt.


### Nieuwe sensor koppelen {#pair-new-sensor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| | |
| --- | --- |
| ![Plug-in Externe sensoren](@site/static/img/plugins/sensors/external_sensors_pair_sensors_1.png) | ![Plug-in Externe sensoren](@site/static/img/plugins/sensors/external_sensors_pair_sensors_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| | |
| --- | --- |
| ![Plug-in Externe sensoren](@site/static/img/plugins/sensors/external_sensors_first_start_ios.png) | ![Plug-in Externe sensoren](@site/static/img/plugins/sensors/external_sensors_bluetooth_turned_off_ios.png) |

</TabItem>

</Tabs>

Volg deze stappen om een nieuwe sensor te koppelen:

1. Zorg ervoor dat **Bluetooth is ingeschakeld** op je apparaat.
2. Ga naar *Menu → Plug-ins → Externe sensoren → Instellingen*.
3. Tik op **Nieuwe sensor koppelen**.
4. OsmAnd scant naar beschikbare **Bluetooth LE**- of **ANT+**-sensoren (afhankelijk van je platform).
5. Tik op de **+**-knop naast de sensor die je wilt koppelen.
6. Eenmaal verbonden, verschijnt de sensor in de lijst met **Verbonden apparaten**.

***Opmerkingen:***

- Op **iOS** worden alleen **Bluetooth Low Energy (BLE)**-sensoren ondersteund vanwege hardwarebeperkingen. ANT+-sensoren zijn niet beschikbaar.
- Op **Android** kunnen zowel BLE- als ANT+-sensoren worden ondersteund, afhankelijk van je apparaat. Zie de [ANT+-compatibiliteitsgids](https://www.thisisant.com/consumer/ant-101/ant-in-phones) voor meer details.
- Er verschijnt een **pop-upmelding** telkens wanneer een sensor verbinding maakt of verbreekt.
- **Fietsvermogenssensoren** zijn alleen beschikbaar op Android via ANT+.


## Sensorinstellingen {#sensor-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gebruik een van de volgende paden om de sensorinstellingen te openen:

- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/> → Beschikbaar apparaat → Instellingen*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/> → Beschikbaar apparaat → Instellingen*

![Plug-in Externe sensoren](@site/static/img/plugins/sensors/external_sensors_sett_sensors_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gebruik een van de volgende paden om de sensorinstellingen te openen:

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,external_sensors_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,plugins_menu_group,external_sensors_plugin_name"/>*

![Plug-in Externe sensoren](@site/static/img/plugins/sensors/external_sensors_sett_sensors_ios.png)

</TabItem>

</Tabs>

Elke gekoppelde externe sensor die in OsmAnd wordt vermeld, heeft een eigen configuratiescherm met de volgende opties:

- **Verbinden / Verbinding verbreken** – schakel de verbindingsstatus.
- **Naam wijzigen** – wijs een aangepaste naam toe aan de sensor.
- **Sensor vergeten** – verwijder de sensor uit de lijst (kan later opnieuw worden gekoppeld).
- **Instellingen** – open het scherm met sensordetails (sensortype, waarden, batterijniveau, instelling wielomtrek).

***Opmerkingen:***

- Op **iOS** kun je het **batterijniveau** van verbonden BLE-sensoren direct in een kaart-[widget](#widgets) weergeven. Om dit in te schakelen, ga je naar: *Menu → Scherm configureren → Kies paneel → Widget toevoegen → Externe sensor → Instellingen → Tonen → Batterijniveau*
- Er verschijnt een pop-upmelding wanneer het batterijniveau van een gekoppelde sensor **onder de 15% daalt**.


## Ritregistratie {#trip-recording}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*

![Externe sensoren](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.png) ![Externe sensoren](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,shared_string_external"/>*

![Plug-in Externe sensoren](@site/static/img/plugins/sensors/external_sensors_pair_sensors_5_ios.png) ![Plug-in Externe sensoren](@site/static/img/plugins/sensors/external_sensors_pair_sensors_6_ios.png)

</TabItem>

</Tabs>

Om sensorgegevens op te nemen met de [plug-in Ritregistratie](../plugins/trip-recording.md#recording-settings) tijdens je rit:

1. Zorg ervoor dat de **plug-in Externe sensoren** is ingeschakeld.
2. Ga naar *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*.
3. Selecteer de sensortypen die je wilt opnemen (bijv. cadans, hartslag, snelheid).
4. Start de opname van je rit. OsmAnd slaat de geselecteerde sensorgegevens op in de GPX-track.

***Opmerkingen:***

- De lijst met beschikbare sensortypen wordt weergegeven, zelfs als er geen sensoren zijn verbonden.
- Als er nog geen sensoren zijn gekoppeld, gebruik dan de knop [Nieuwe sensor koppelen](#pair-new-sensor) in de plug-ininstellingen.
- Batterijniveaugegevens worden **niet** opgenomen in GPX-bestanden en zijn niet beschikbaar voor analyse op de kaart.

:::note Formaatcompatibiliteit
OsmAnd gebruikt [trackregistratie](../plugins/trip-recording.md#recorded-gpx-file) om sensorgegevens in GPX-bestanden in te sluiten. Dit formaat is compatibel met veel sport- en trainingsapps (bijv. Strava, Runkeeper).
:::


### Gegevensanalyse {#data-analyze}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Externe sensoren](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_andr.png) ![Externe sensoren](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Externe sensoren](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_ios.png) ![Externe sensoren](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_ios.png)

</TabItem>

</Tabs>

Nadat je je rit hebt opgenomen met de [plug-in Ritregistratie](../plugins/trip-recording.md#recording-settings), kun je de sensorgegevens bekijken in de trackanalyse-interface.

Om gegevens te analyseren:

1. Beëindig je ritregistratie.
2. Open de opgenomen track via *Mijn plaatsen → Tracks* of tik op de track op de kaart.
3. Selecteer *Opties → Analyseren op kaart* uit het contextmenu van de track.

Dit toont grafieken voor je opgenomen gegevens: *Hartslag*, *Snelheid*, *Cadans*, *Fietsvermogen* en *Temperatuur*

> *Batterijniveau en Afstand zijn niet beschikbaar in de functie [Analyseren op kaart](../map/tracks/index.md#analyze-track-on-map).*


## Widgets {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="external_sensor_widgets"/>*

![Widgets voor externe sensoren Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1_andr.png) ![Widgets voor externe sensoren Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="external_sensors_plugin_name"/>*

![Widgets voor externe sensoren iOS](@site/static/img/plugins/sensors/external_sens_widg_1_ios.png) ![Widgets voor externe sensoren iOS](@site/static/img/plugins/sensors/external_sens_widg_3_ios.png)

</TabItem>

</Tabs>

De [widget Externe sensoren](../widgets/info-widgets.md#external-sensors-widgets) stelt je in staat om live gegevens van je verbonden sensoren direct op het kaartscherm weer te geven.

Voordat je je reis begint:

- Zorg ervoor dat de plug-in Externe sensoren is ingeschakeld.
- Open *Scherm configureren* en voeg de benodigde widgets toe aan het juiste paneel.

Ondersteunde widgettypen:

1. **<Translate android="true" ids="map_widget_ant_heart_rate"/>** – geeft de realtime hartslag weer van een gekoppelde monitor.
2. **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*Alleen Android*) – toont het huidige trapvermogen in watt.
3. **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>** – toont het aantal pedaalomwentelingen per minuut.
4. **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>** – huidige fietssnelheid.
5. **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>** – totale afstand gemeten door de sensor.
6. **<Translate android="true" ids="external_device_characteristic_temperature"/>** – huidige omgevingstemperatuur.
7. **Batterijniveau** (*Alleen iOS*) – percentage resterende batterij in een verbonden BLE-sensor.


### Widgetinstellingen {#widget-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="external_sensor_widgets"/> → Kies een widget → <Translate android="true" ids="shared_string_settings"/>*

![Instellingen widgets externe sensoren Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Kies een paneel → Widget toevoegen → Externe sensor → Kies een widget → Instellingen*

![Instellingen widgets externe sensoren Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-ios.png)

</TabItem>

</Tabs>

Standaard toont de widget de eerste momenteel verbonden sensor van dit type. Als je een specifieke sensor wilt gebruiken, tik je op **Gegevensbron** en kies je uit de lijst met verbonden sensoren.

Op **iOS** kun je kiezen welke waarde in de widget moet worden weergegeven:

- **Sensorgegevens** (bijv. cadans, snelheid).
- **Batterijniveau** – realtime batterijpercentage van de geselecteerde sensor.

> *Dit is handig als je de batterijlading tijdens lange ritten wilt controleren om onderbrekingen te voorkomen.*


## Gerelateerde artikelen {#related-articles}

- [Interactie met kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vector kaarten (kaartstijlen)](../../user/map/vector-maps.md)

> *Laatst bijgewerkt: mei 2025*