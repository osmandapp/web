---
source-hash: 9d1531d9555eb2840386ca7a59c86b6aaea01e503c8115d6bb52a5af5ac3dfed
sidebar_position: 5
title:  Sensori esterni
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



## Panoramica {#overview}

:::info Funzione a pagamento
Il plugin Sensori esterni è una [funzione a pagamento](../purchases/index.md) dell'app OsmAnd.
:::

Il **plugin Sensori esterni** ti consente di leggere e registrare dati da [sensori esterni wireless](https://en.wikipedia.org/wiki/Wireless_sensor_network) che utilizzano le tecnologie [ANT+](https://en.wikipedia.org/wiki/ANT_(network)) e [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) e di visualizzare questi dati utilizzando i [widget](#widgets) nell'applicazione OsmAnd. Questa rete gestita è in grado di raccogliere, trasmettere e memorizzare i dati dei sensori.

> *NOTA: iPhone e iPad non supportano ANT+ a causa di limitazioni hardware.*

Il **plugin Sensori esterni** accede ai sensori esterni e può leggere dati come:

- *Frequenza cardiaca*
- *Potenza bicicletta*
- *Cadenza bicicletta*
- *Velocità bicicletta*
- *Distanza bicicletta*
- *Temperatura*

Per utilizzare il plugin, assicurati che il tuo dispositivo sia [compatibile](#pair-new-sensor), che il plugin sia [abilitato](../plugins/#enable--disable) e che i tuoi sensori esterni siano collegati tramite Bluetooth (BLE).


## Parametri di configurazione richiesti {#required-setup-parameters}

Per iniziare a utilizzare i dati dei sensori esterni, segui questi passaggi:

1. [Acquista](../purchases/) un **abbonamento OsmAnd Pro** per sbloccare il plugin Sensori esterni.
2. [Abilita](../plugins/#enable--disable) il plugin in *Menu → Plugin*.
3. **Attiva il Bluetooth** sul tuo dispositivo per consentire la connessione con i **sensori BLE**.
4. [Accoppia e configura](#pair-new-sensor) i sensori esterni tramite il menu del plugin.
5. (Opzionale) [Aggiungi](#widgets) i **widget Sensori esterni** alla schermata della mappa per visualizzare dati in tempo reale come frequenza cardiaca, cadenza o livello della batteria.
6. (Opzionale) Utilizza il [plugin Registrazione viaggio](../plugins/trip-recording.md) per registrare i dati dei sensori in tracce GPX.
7. (Opzionale, solo Android) Segui [questi suggerimenti](https://www.thisisant.com/consumer/ant-101/ant-in-phones) per collegare i sensori ANT+ se il tuo dispositivo li supporta.


### Accoppia nuovo sensore {#pair-new-sensor}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

| | |
| --- | --- |
| ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_1.png) | ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| | |
| --- | --- |
| ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_first_start_ios.png) |  ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_bluetooth_turned_off_ios.png) |

</TabItem>

</Tabs>

Per accoppiare un nuovo sensore, segui questi passaggi:

1. Assicurati che il **Bluetooth sia abilitato** sul tuo dispositivo.
2. Vai a *Menu → Plugin → Sensori esterni → Impostazioni*.
3. Tocca **Accoppia nuovo sensore**.
4. OsmAnd cercherà i sensori **Bluetooth LE** o **ANT+** disponibili (a seconda della tua piattaforma).
5. Tocca il pulsante **+** accanto al sensore che desideri accoppiare.
6. Una volta collegato, il sensore apparirà nell'elenco dei **Dispositivi collegati**.

***Note:***

- Su **iOS**, sono supportati solo i sensori **Bluetooth Low Energy (BLE)** a causa di limitazioni hardware. I sensori ANT+ non sono disponibili.
- Su **Android**, sia i sensori BLE che ANT+ potrebbero essere supportati a seconda del tuo dispositivo. Consulta la [guida alla compatibilità ANT+](https://www.thisisant.com/consumer/ant-101/ant-in-phones) per maggiori dettagli.
- Apparirà una **notifica pop-up** ogni volta che un sensore si connette o si disconnette.
- I **sensori di potenza per bicicletta** sono disponibili solo su Android tramite ANT+.


## Impostazioni sensore {#sensor-settings}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Utilizza uno dei seguenti percorsi per aprire le impostazioni del sensore:

- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/> → Dispositivo disponibile → Impostazioni*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/> → Dispositivo disponibile → Impostazioni*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Utilizza uno dei seguenti percorsi per aprire le impostazioni del sensore:

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,external_sensors_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,plugins_menu_group,external_sensors_plugin_name"/>*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_ios.png)

</TabItem>

</Tabs>

Ogni sensore esterno accoppiato elencato in OsmAnd ha la sua schermata di configurazione con le seguenti opzioni:

- **Connetti / Disconnetti** – attiva/disattiva lo stato della connessione.
- **Rinomina** – assegna un nome personalizzato al sensore.
- **Dimentica sensore** – rimuove il sensore dall'elenco (può essere riaccoppiato in seguito).
- **Impostazioni** – apre la schermata dei dettagli del sensore (tipo di sensore, valori, livello della batteria, impostazione della circonferenza della ruota).

***Note:***

- Su **iOS**, puoi visualizzare il **livello della batteria** dei sensori BLE collegati direttamente in un [widget](#widgets) della mappa. Per abilitarlo, vai a: *Menu → Configura schermo → Scegli pannello → Aggiungi widget → Sensore esterno → Impostazioni → Mostra → Livello batteria*
- Appare una notifica pop-up quando il livello della batteria di un sensore accoppiato scende al di sotto del **15%**.


## Registrazione viaggio {#trip-recording}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*

![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,shared_string_external"/>*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_5_ios.png)  ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_6_ios.png)

</TabItem>

</Tabs>

Per registrare i dati dei sensori utilizzando il [plugin Registrazione viaggio](../plugins/trip-recording.md#recording-settings) durante il tuo viaggio:

1. Assicurati che il **plugin Sensori esterni** sia abilitato.
2. Vai a *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*.
3. Seleziona i tipi di sensore che desideri registrare (ad esempio cadenza, frequenza cardiaca, velocità).
4. Inizia a registrare il tuo viaggio. OsmAnd salverà i dati dei sensori selezionati nella traccia GPX.

***Note:***

- L'elenco dei tipi di sensore disponibili viene mostrato anche se non sono collegati sensori.
- Se non sono ancora stati accoppiati sensori, utilizza il pulsante [Accoppia nuovo sensore](#pair-new-sensor) nelle impostazioni dei plugin.
- I dati del livello della batteria **non** vengono registrati nei file GPX e non sono disponibili per l'analisi sulla mappa.

:::note Compatibilità formato
OsmAnd utilizza la [registrazione della traccia](../plugins/trip-recording.md#recorded-gpx-file) per incorporare i dati dei sensori nei file GPX. Questo formato è compatibile con molte app sportive e di allenamento (ad esempio Strava, Runkeeper).
:::


### Analisi dati {#data-analyze}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_andr.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_ios.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_ios.png)

</TabItem>

</Tabs>

Dopo aver registrato il tuo viaggio utilizzando il [plugin Registrazione viaggio](../plugins/trip-recording.md#recording-settings), puoi rivedere i dati dei sensori nell'interfaccia di analisi della traccia.

Per analizzare i dati:

1. Termina la registrazione del tuo viaggio.
2. Apri la traccia registrata da *I miei luoghi → Tracce* o tocca la traccia sulla mappa.
3. Seleziona *Opzioni → Analizza sulla mappa* dal menu contestuale della traccia.

Questo visualizzerà i grafici per i dati registrati: *Frequenza cardiaca*, *Velocità*, *Cadenza*, *Potenza bicicletta* e *Temperatura*.

> *Il livello della batteria e la distanza non sono disponibili nella funzione [Analizza traccia sulla mappa](../map/tracks/index.md#analyze-track-on-map).*


## Widget {#widgets}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="external_sensor_widgets"/>*

![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1_andr.png)  ![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="external_sensors_plugin_name"/>*

![External sensors widgets iOS](@site/static/img/plugins/sensors/external_sens_widg_1_ios.png)  ![External sensors widgets iOS](@site/static/img/plugins/sensors/external_sens_widg_3_ios.png)

</TabItem>

</Tabs>

Il [widget Sensori esterni](../widgets/info-widgets.md#external-sensors-widgets) ti consente di visualizzare i dati in tempo reale dai tuoi sensori collegati direttamente sulla schermata della mappa.

Prima di iniziare il tuo viaggio:

- Assicurati che il plugin Sensori esterni sia abilitato.
- Apri *Configura schermo* e aggiungi i widget necessari al pannello appropriato.

Tipi di widget supportati:

1. **<Translate android="true" ids="map_widget_ant_heart_rate"/>** – visualizza la frequenza cardiaca in tempo reale da un monitor accoppiato.
2. **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*solo Android*) – mostra la potenza di pedalata attuale in watt.
3. **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>** – mostra il numero di rivoluzioni del pedale al minuto.
4. **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>** – velocità attuale in bicicletta.
5. **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>** – distanza totale misurata dal sensore.
6. **<Translate android="true" ids="external_device_characteristic_temperature"/>** – temperatura ambiente attuale.
7. **Livello batteria** (*solo iOS*) – percentuale di batteria rimanente in un sensore BLE collegato.


### Impostazioni widget {#widget-settings}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="external_sensor_widgets"/> → Scegli un widget → <Translate android="true" ids="shared_string_settings"/>*

![External sensors widgets Settings Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Scegli un pannello → Aggiungi widget → Sensore esterno → Scegli un widget → Impostazioni*

![External sensors widgets Settings Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-ios.png)

</TabItem>

</Tabs>

Per impostazione predefinita, il widget mostra il primo sensore attualmente collegato di questo tipo. Se desideri utilizzare un sensore specifico, tocca **Origine dati** e scegli dall'elenco dei sensori collegati.

Su **iOS**, puoi scegliere quale valore visualizzare nel widget:

- **Dati sensore** (ad esempio cadenza, velocità).
- **Livello batteria** – percentuale di batteria in tempo reale del sensore selezionato.

> *Questo è utile quando si desidera monitorare la carica della batteria durante lunghi viaggi per evitare disconnessioni.*


## Articoli correlati {#related-articles}

- [Interagire con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)

> *Ultimo aggiornamento: Maggio 2025*