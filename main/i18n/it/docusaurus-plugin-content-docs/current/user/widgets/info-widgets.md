---
source-hash: f1188d09955bc3e6f60dd73a49f429e588c513aea0cfc5bf7e9e38efe46e0dc9
sidebar_position: 3
title: Widget informativi
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

I widget informativi forniscono un accesso rapido a dati importanti. Possono essere dati sulla velocità, sul meteo, sulla posizione di parcheggio, dati provenienti da sensori esterni e molto altro. I widget possono essere configurati in base alle tue esigenze specifiche, consentendone la visibilità sullo schermo dell'applicazione o disabilitandoli se necessario.

![Widget informativi](@site/static/img/widgets/informational_widgets_all.png)


## Widget altitudine {#altitude-widgets}

I widget altitudine visualizzano l'altezza sul livello del mare della posizione geografica attuale e l'elevazione del centro della mappa.


### Altitudine: Posizione attuale {#altitude-current-location}

:::note Scarica correzione altitudine mondiale
Su alcuni dispositivi Android, l'altitudine potrebbe essere visualizzata in modo impreciso. Per risolvere questo problema, scarica una mappa con correzione altitudine.

- Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.
- Per maggiori dettagli, visita [Mappe e risorse](../personal/maps-resources.md#downloads).
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget altitudine Android](@site/static/img/widgets/altitude_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget altitudine iOS](@site/static/img/widgets/altitude_widget_ios.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_altitude_current_location"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_altitude_current_location"/>* |
| Toccando | Nessuna modifica |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *Menu → Impostazioni → Profili app → Impostazioni generali → Unità e formati → Unità di lunghezza* |


### Elevazione: Centro mappa {#elevation-map-center}

:::info Funzionalità a pagamento
&nbsp;<ProFeature/> Per accedere all'utilizzo del widget *Elevazione: centro mappa*, abbonati a OsmAnd Pro per [Android](../purchases/android.md#pro-features) o [iOS](../purchases/ios.md#pro-features).
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget elevazione Android](@site/static/img/widgets/elevation_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget elevazione iOS](@site/static/img/widgets/elevation_widget_2_ios.png)

</TabItem>

</Tabs>

Puoi utilizzare il widget per scoprire l'elevazione del centro mappa attuale sul livello del mare. Per visualizzare le informazioni nel **widget Elevazione: centro mappa**, è necessaria una [mappa del terreno (Hillshade e pendenza)](../plugins/topography.md#download-maps) dell'area richiesta.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_altitude_map_center"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_altitude_map_center"/>* |
| Toccando | Nessuna modifica |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *Menu → Impostazioni → Profili app → Impostazioni generali → Unità e formati → Unità di lunghezza* |


## Ora attuale {#current-time}

![Widget ora attuale](@site/static/img/widgets/current_time_widget.png)

Questo widget visualizza l'ora attuale presa dal tuo dispositivo.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_plain_time"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_plain_time"/>* |
| Toccando | Nessuna modifica |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | Le impostazioni del dispositivo configurano Ora e formato. |


## Velocità attuale {#current-speed}

![Widget velocità](@site/static/img/widgets/current_speed_widget.png)

Il widget mostra la velocità attuale rilevata dal sensore GPS.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_current_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_current_speed"/>* |
| Toccando | Nessuna modifica |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,default_speed_system"/>* |


## Velocità media {#average-speed}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget velocità media Android](@site/static/img/widgets/average_speed_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget velocità media iOS](@site/static/img/widgets/average_speed_widget_ios_2.png)

</TabItem>

</Tabs>

Il widget **Velocità media** calcola e visualizza la tua velocità media su un intervallo di tempo selezionato senza richiedere navigazione o registrazione di tracce. È utile per monitorare il rispetto dei limiti di velocità in autostrada o per tenere traccia della velocità media negli ultimi minuti di ciclismo.

1. ***Configurazione del widget.***
   Per regolare le impostazioni, tocca il pulsante **Impostazioni** (*Android*) o il **campo widget** (*iOS*). Le opzioni disponibili includono:

2. ***Intervallo di tempo.***

   - La velocità media viene calcolata in base all'intervallo di tempo selezionato, che può variare da **15 secondi a 60 minuti**.

   - Il calcolo si basa sui dati GPS utilizzando la formula:
   `Velocità media = MEDIA(GPS_LOCATION.velocità)`.

3. ***Considera le soste.***

   **Abilitato** — Se la velocità registrata è inferiore a 1 unità all'ora, viene ignorata, impedendo cali inutili della velocità media quando ci si ferma ai semafori o si fanno brevi pause.

   **Disabilitato** — Le soste sono incluse nel calcolo, il che significa che lunghe pause ridurranno la velocità media complessiva.

4. ***Reimposta velocità media.***
   Puoi reimpostare il calcolo della velocità media in due modi:

   - Premi a lungo il widget per aprire il [Menu contestuale](../widgets/configure-screen.md#widget-context-menu) e seleziona *Reimposta velocità media*.
   - Apri le *impostazioni del widget* tramite il menu [Configura schermo](../widgets/configure-screen.md#settings) e seleziona l'opzione di reimpostazione.

Dopo il ripristino, la velocità media viene ricalcolata dai nuovi dati GPS. Questa funzione è utile per il monitoraggio della velocità in tempo reale, ad esempio per tenere traccia della velocità in aree con **telecamere di controllo della velocità media**.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Velocità media](@site/static/img/widgets/average_speed_widget_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget velocità media](@site/static/img/widgets/average_speed_widget_ios_1.png) ![Widget velocità media](@site/static/img/widgets/average_speed_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_average_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_average_speed"/>* |
| Toccando | Nessuna modifica |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu). <br/> Può essere utilizzato per reimpostare la velocità media. |


## Rapporto di planata {#glide-ratio}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

|Widget| Widget sullo schermo|
|:--------|:---------|
|![Rapporto di planata](@site/static/img/widgets/glide_ratio_3.png)|![Rapporto di planata](@site/blog/2023-12-22-android-4-6/img/glide_ratio_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|Widget| Widget sullo schermo|
|:--------|:---------|
|![Rapporto di planata](@site/static/img/widgets/glide_ratio_1_widget_ios.png)|![Rapporto di planata](@site/static/img/widgets/glide_ratio_widget_ios.png)|


</TabItem>

</Tabs>

Il [semplice](../widgets/configure-screen.md#widgets-for-all-panels) widget *Rapporto di planata* fornisce preziose informazioni sul rapporto di planata per aiutare a prendere decisioni informate durante la pianificazione delle rotte aeree. Il widget *Rapporto di planata* in OsmAnd ti aiuta a valutare l'efficienza della tua discesa o salita quando navighi verso una posizione specifica (posizione del [marker](../personal/markers.md) sulla mappa). Calcola il rapporto di planata come il rapporto tra la distanza e la differenza di altitudine tra la tua posizione attuale e la destinazione prevista. Puoi leggere di più su questo [qui](https://en.wikipedia.org/wiki/Lift-to-drag_ratio#Glide_ratio).


**Utilizzo dei widget:**

- *Pianificazione di voli a vela.* Per i piloti di volo a vela, il widget *Rapporto di planata verso il bersaglio* diventa uno strumento indispensabile per pianificare ed eseguire voli a vela. I piloti possono stimare quanto lontano possono volare verso il loro bersaglio date le condizioni attuali e il rapporto di planata richiesto.
- *Ottimizzare salite e discese.* Il rapporto di planata medio consente ai piloti di ottimizzare salite e discese in base alle condizioni attuali. I piloti possono scegliere il momento ottimale per le salite per massimizzare il tempo di volo, o per le discese per raggiungere un punto bersaglio.
- *Reagire alle condizioni mutevoli.* Il widget fornisce aggiornamenti continui del rapporto di planata, consentendo ai piloti di reagire istantaneamente ai cambiamenti nelle condizioni atmosferiche o nelle rotte. Possono adattare il loro piano di volo per garantire sicurezza ed efficienza.
- *Massimo utilizzo della distanza orizzontale.* Conoscere il rapporto di planata consente ai piloti di massimizzare l'utilizzo della distanza orizzontale per spostarsi verso il bersaglio, il che è particolarmente importante quando si pianificano voli lunghi.
- *Riduzione del rischio*. Il widget *Rapporto di planata verso il bersaglio* aiuta i piloti a evitare situazioni in cui raggiungere il bersaglio diventa impossibile a causa di un rapporto di planata insufficiente. Questo aiuta a ridurre i rischi e migliorare la sicurezza del volo.


**Valori positivi e negativi:**

- **Valori positivi** indicano che la tua destinazione si trova a un'altitudine inferiore rispetto alla tua posizione attuale, richiedendo una discesa.
- **Valori negativi** indicano che la tua destinazione si trova a un'altitudine superiore, rendendo necessaria una salita. Ad esempio, "-90:1" significa che dopo aver percorso una distanza di 90 chilometri, devi salire di 1 chilometro per raggiungere la tua destinazione.


**Arrotondamento/Formattazione:**

- Valore **≤ 0.1**:
  - "0.05" viene visualizzato come "0".
- Valore **> 0.1 e < 100**:
  - ad esempio, "50.7643" viene visualizzato come "50.8:1".
- Valore **> 100:**
  - "102.35" viene visualizzato come "102:1".


### Rapporto di planata verso il bersaglio {#glide-ratio-to-target}

- Il **rapporto di planata verso il bersaglio** mostra l'esatto rapporto di planata richiesto per raggiungere il punto bersaglio.
- L'**elevazione del bersaglio** mostra l'elevazione del punto bersaglio. Il [marker mappa](../personal/markers.md) deve essere utilizzato come punto bersaglio.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → Rapporto di planata* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → Rapporto di planata* |
| Toccando | Cambia *Rapporto di planata verso il bersaglio* o *Elevazione del bersaglio* |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


### Rapporto di planata medio {#average-glide-ratio}

- Il **rapporto di planata medio** mostra il rapporto di planata medio per un intervallo di tempo specificato.
- La **velocità verticale media** indica la velocità con cui un oggetto sale o scende nel tempo. Per la valutazione vengono considerati solo il primo e l'ultimo punto dell'intervallo di tempo. È possibile impostare l'intervallo di tempo per questo widget da 15 secondi a 60 minuti. È necessario utilizzare il [marker mappa](../personal/markers.md) come punto di destinazione.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → Rapporto di planata* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → Rapporto di planata* |
| Toccando | Cambia *Rapporto di planata medio* o *Velocità verticale media* |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


## Livello batteria {#battery-level}

![Widget livello batteria](@site/static/img/widgets/battery_level_widget.png)

Il widget **Livello batteria** visualizza la percentuale di batteria del tuo dispositivo direttamente sullo schermo della mappa e si aggiorna automaticamente almeno una volta al minuto.

- **iOS 17 e successivi** — A causa delle **restrizioni sulla privacy**, i dati sul livello della batteria sono disponibili solo con incrementi del 5% (ad esempio, 35%, 60% o 85%). Questa è una limitazione di sistema imposta da Apple.

- Dispositivi **Android** — Il widget visualizza la percentuale esatta della batteria come riportato dal sistema, senza arrotondamenti.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_battery"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_battery"/>* |
| Toccando | Nessuna modifica |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


## Widget coordinate {#coordinates-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget coordinate Android](@site/static/img/widgets/coordinates_widget_1.png) ![Widget coordinate Android](@site/static/img/widgets/coordinates_widget_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget coordinate Android](@site/static/img/widgets/coordinates_widget_ios_2.png)

</TabItem>

</Tabs>

OsmAnd offre due tipi di widget coordinate:

- **Coordinate: centro mappa** - mostra le coordinate geografiche del centro mappa attuale.
- **Coordinate: posizione attuale** - mostra le coordinate geografiche della posizione geografica attuale.

I widget coordinate vengono visualizzati nella parte superiore dello schermo. Le icone con sfondo verde mostrano la latitudine e la longitudine del punto al centro della parte visibile della mappa, e quelle con sfondo blu mostrano le coordinate della tua posizione attuale. Le informazioni sui *formati di coordinate* supportati si trovano nell'articolo *[Cerca coordinate](../search/search-coordinates.md#coordinate-format)*.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="coordinates_widget"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → <Translate ios="true" ids="coordinates"/>* |
| Toccando | Copia le coordinate negli appunti. |
| Formato | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/> (iOS) o <Translate android="true" ids="configure_profile"/> (Android) → <br/> <Translate ios="true" ids="general_settings_2,units_and_formats,coords_format"/>* |


## Info GPS {#gps-info}

<InfoAndroidOnly />

![Widget info GPS Android](@site/static/img/widgets/gps_info_widget.png)

Il widget informazioni GPS (Global Positioning System) mostra il numero di satelliti che il dispositivo sta attualmente rilevando e utilizzando. Puoi usarlo per controllare lo stato del GPS in caso di segnale debole.

Puoi reimpostare la cache GPS attuale tramite:
*<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>*.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_gps_info"/>* |
| Toccando | Apre il menu stato GPS con strumenti di terze parti per configurare il dispositivo GPS di bordo. |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


## Posizione del sole {#sun-position}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget tramonto e alba](@site/static/img/widgets/sun_position.png) ![Widget tramonto e alba](@site/static/img/widgets/sun_position_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget tramonto e alba](@site/static/img/widgets/sun_position_4_ios.png) ![Widget tramonto e alba](@site/static/img/widgets/sun_position_3_ios.png)

</TabItem>

</Tabs>

I widget posizione del sole mostrano i prossimi orari di alba e tramonto per il centro della mappa. Quando toccati, visualizzano il tempo rimanente fino all'alba o al tramonto previsto. In entrambi i casi, l'ora si basa sull'ora configurata del tuo dispositivo.

- **<Translate ios="true" ids="map_widget_sun_position"/>**. <Translate ios="true" ids="map_widget_sun_position_desc"/>
- **<Translate ios="true" ids="map_widget_sunrise"/>**. <Translate ios="true" ids="map_widget_sunrise_desc"/>
- **<Translate ios="true" ids="map_widget_sunset"/>**. <Translate ios="true" ids="map_widget_sunset_desc"/>

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_sun_position"/> → <Translate android="true" ids="map_widget_sun_position"/>, <Translate android="true" ids="shared_string_sunrise"/>, <Translate android="true" ids="shared_string_sunset"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_sun_position"/> → <Translate ios="true" ids="map_widget_sun_position"/>, <Translate ios="true" ids="map_widget_sunrise"/>, <Translate ios="true" ids="map_widget_sunset"/>* |
| Toccando | Passa tra il tempo rimanente e l'ora del prossimo alba/tramonto. |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *Menu → Plugin → Meteo → Impostazioni* o *Menu → Impostazioni → Profilo app → Meteo* |


## Righello raggio {#radius-ruler}

:::note
Puoi leggere una descrizione più dettagliata qui: **[Righello raggio e Righello](../widgets/radius-ruler)**.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Schermata righello raggio](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Righello raggio"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Righello raggio"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Righello raggio"/></td>
    </tr>
</table>

</TabItem>

</Tabs>

Il widget Righello raggio mostra la distanza tra la tua posizione e il punto centrale del Righello raggio. Il raggio del primo cerchio è uguale alla [scala della mappa](../widgets/radius-ruler.md#ruler).

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="radius_ruler_item"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_ruler_control"/>* |
| Toccando | Cambia lo stato del widget tra le modalità scala nera, scala di grigi e invisibile. |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |


## Tachimetro {#speedometer}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Tachimetro](@site/static/img/widgets/speedometer_1_andr.png) ![Tachimetro](@site/static/img/widgets/speedometer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tachimetro](@site/static/img/widgets/speedometer_1_ios.png) ![Tachimetro](@site/static/img/widgets/speedometer_2_ios.png)

</TabItem>

</Tabs>

Il **widget Tachimetro** è una visualizzazione grafica della velocità attuale del veicolo basata sui *dati ricevuti dal GPS*. Ti consente di monitorare in tempo reale la conformità tra la tua velocità e il limite di velocità consentito. Il limite di velocità consentito è fornito dai [dati OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed) per un particolare tratto stradale e dall'impostazione [Tolleranza limite di velocità](../navigation/guidance/voice-navigation.md#speed-limit) di OsmAnd.

- Nelle *impostazioni del Tachimetro*, puoi selezionare la dimensione (**Altezza**) del widget sullo schermo dell'applicazione come *Piccola*, *Media* o *Grande*.
- Puoi specificare quando ricevere un **avviso limite di velocità**, selezionando *Sempre* o *Quando superato*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/speedometer_4_andr.png').default} alt="Tachimetro"/></td>
        <td><img src={require('@site/static/img/widgets/speedometer_4_ios.png').default} alt="Tachimetro"/></td>
    </tr>
</table>

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_other,shared_string_speedometer"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location"/>* *→ Tachimetro* |
| Formato | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,default_speed_system"/>* |


## Widget plugin {#plugin-widgets}

Questi widget sono abilitati e funzionano in combinazione con i loro plugin corrispondenti.


### Widget registrazione viaggio {#trip-recording-widgets}

:::note
Puoi leggere una descrizione più dettagliata qui: **[Plugin <Translate android="true" ids="record_plugin_name"/>](../plugins/trip-recording.md)**.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget registrazione viaggio](@site/static/img/widgets/wid_trip_rec.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget registrazione viaggio](@site/static/img/widgets/widget_trip_recording-_rec_ios.png)

</TabItem>

</Tabs>

I widget registrazione viaggio si riferiscono ai [widget del plugin <Translate android="true" ids="record_plugin_name"/>](../plugins/trip-recording.md#widgets). Puoi utilizzare i widget per visualizzare brevi informazioni sulla registrazione della traccia sullo schermo. Come *Distanza*, *Durata*, *In salita* e *In discesa*.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_monitoring"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_monitoring"/>* |
| Toccando | Avvia/Arresta la registrazione della traccia o Visualizza il grafico. |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


### Widget sensori esterni {#external-sensors-widgets}

:::note
Per aggiungere i widget Sensori esterni alla schermata della mappa, abilita il plugin OsmAnd [Sensori esterni](../plugins/external-sensors.md).
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget sensori esterni Android](@site/static/img/widgets/external-sensors-widgets_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget registrazione viaggio](@site/static/img/widgets/external-sensors-widgets_ios.png)

</TabItem>

</Tabs>

I widget si riferiscono al [plugin Sensori esterni](../plugins/external-sensors.md#widgets). Puoi usarli per visualizzare brevi informazioni dai tuoi sensori esterni, come: **<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*solo Android*), **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/>, <Translate android="true" ids="map_widget_ant_bicycle_dist"/>** e **<Translate android="true" ids="external_device_characteristic_temperature"/>**. *Su iOS*, puoi anche selezionare il **livello della batteria** dei sensori BLE collegati da visualizzare direttamente nel widget.

- Per aggiungere il widget — [abilita](../plugins/index.md#enable--disable) il plugin OsmAnd Sensori esterni.

- Per aggiungere sensori, seleziona una delle opzioni:
  - Vai a *Menu → Plugin → Sensori esterni → Impostazioni → Associa nuovo sensore*.
  - Vai a *Menu → Configura schermo → Scegli un pannello → Aggiungi widget → Sensori esterni → Scegli sensore → Impostazioni → Associa nuovo sensore*.

- Aggiungi i widget anche se non è collegato alcun sensore esterno.

- **Tutti i widget aggiunti sono visibili** anche se non è collegato alcun sensore esterno.

- Utilizza il [plugin Registrazione viaggio](../plugins/trip-recording.md#recording-settings) per registrare i dati dei sensori.

- Leggi come scegliere quale sensore (dello stesso tipo) mostrare nel widget [qui](../plugins/external-sensors.md#widget-settings).

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="external_sensor_widgets"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="external_sensors_plugin_name"/>* |
| Toccando | Nessuna modifica (*Android*) / Passa tra la modalità Dati sensore e Livello batteria (*iOS*). |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


### Widget metriche veicolo {#vehicle-metrics-widgets}

<InfoAndroidOnly />

:::note
Per aggiungere i widget metriche veicolo alla schermata della mappa, abilita il plugin OsmAnd [Metriche veicolo](../plugins/vehicle-metrics.md).
:::

![Widget metriche veicolo Android](@site/static/img/widgets/vehicle_metrics_1.png)

I widget appartengono al [plugin Metriche veicolo](../plugins/vehicle-metrics.md#widgets). Puoi usarli per visualizzare informazioni da uno scanner OBD-II collegato, come (*13 metriche*): **Temperatura aspirazione**, &nbsp; **Temperatura ambiente**, &nbsp; **Temperatura liquido raffreddamento**, &nbsp; **Temperatura olio motore**, &nbsp; **Velocità motore** (*gratuito*), &nbsp; **Tempo di funzionamento motore**, &nbsp; **Carico motore calcolato**, &nbsp; **Pressione carburante**, &nbsp; **Consumo carburante**, &nbsp; **Carburante rimanente**, &nbsp; **Livello batteria**, &nbsp; **Velocità veicolo** (*gratuito*), e **Posizione acceleratore**.

- Per aggiungere i widget metriche veicolo alla schermata della mappa, [abilita](../plugins/index.md#enable--disable) il **plugin Metriche veicolo**.
- Puoi aggiungere i widget anche se non è collegato alcuno scanner OBD-II.
- Tutti i widget aggiunti sono visibili indipendentemente dal fatto che uno scanner OBD-II sia collegato o meno.
- Per modificare un widget, tocca il widget aggiunto al pannello, quindi tocca *Impostazioni*, oppure tocca direttamente l'*icona Impostazioni* nel campo del widget.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="obd_widget_group"/>* |
| Toccando | Nessuna modifica |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


### Widget meteo {#weather-widgets}

:::note
Per aggiungere i widget Meteo alla schermata della mappa, abilita il plugin OsmAnd [Meteo](../plugins/weather.md).
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget meteo Android](@site/static/img/widgets/weather_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget meteo iOS](@site/static/img/widgets/weather_widgets_ios.png)

</TabItem>

</Tabs>

I widget meteo visualizzano le informazioni meteorologiche attuali per un punto centrale sulla mappa. Vengono abilitati automaticamente sullo schermo quando visualizzati con il plugin (*Menu → Meteo*), e puoi scegliere quali mettere sulla schermata iniziale per l'uso quotidiano (*Menu → Personalizza schermo*). Puoi leggere di più su questo nell'articolo [Plugin Meteo](../plugins/weather.md).

- **Temperatura**. <Translate android="true" ids="temperature_widget_desc"/>
- **Pressione atmosferica**. <Translate android="true" ids="air_pressure_widget_desc"/>
- **Vento**. <Translate android="true" ids="wind_widget_desc"/>
- **Nuvole**. <Translate android="true" ids="clouds_widget_desc"/>
- **Precipitazioni**. <Translate android="true" ids="precipitation_widget_desc"/>

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="shared_string_weather"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="shared_string_weather"/>* |
| Toccando | Mostra in una finestra di dialogo pop-up la data e l'ora in cui le informazioni meteorologiche sono pertinenti. |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *Menu → Plugin → Meteo → Impostazioni* o *Menu → Impostazioni → Profilo app → Meteo* |


### Widget parcheggio {#parking-widget}

:::note
Per aggiungere i widget Parcheggio alla schermata della mappa, abilita il plugin OsmAnd [Posizione parcheggio](../plugins/parking.md).
:::

![Widget parcheggio](@site/static/img/plugins/parking/parking_widget.png)

Il widget del plugin Parcheggio mostra la distanza dal centro dello schermo alla posizione di parcheggio. Per impostare un posto auto sulla mappa, ingrandisci al livello richiesto, quindi premi a lungo sul punto sulla mappa per aprire il menu contestuale. Segui [queste impostazioni](../plugins/parking.md#set-a-spot).

**Nota:** Il widget Parcheggio apparirà solo se è stata aggiunta una posizione di parcheggio alla mappa. Senza una posizione di parcheggio salvata, il widget non sarà visibile.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_parking"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="parking_place"/>* |
| Toccando | Sposta la visualizzazione della mappa sulla posizione di parcheggio. |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


### Widget Mapillary {#mapillary-widget}

:::note
Per aggiungere il widget Mapillary alla schermata della mappa, abilita il plugin OsmAnd [Mapillary](../plugins/mapillary.md).
:::

![Widget Mapillary](@site/static/img/widgets/mapillary_widget.png)

Questo è un widget del plugin Mapillary che fornisce un accesso rapido all'applicazione Mapillary, che consente di aggiungere [*immagini a livello stradale*](../plugins/mapillary.md#enable-layer). Il widget viene aggiunto automaticamente alla mappa quando il plugin è abilitato.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="mapillary"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="mapillary"/>* |
| Toccando | Apre l'applicazione [Mapillary](https://www.mapillary.com/). |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


### Widget note audio/video {#audiovideo-notes-widget}

<InfoAndroidOnly />

:::note
Per aggiungere i widget Note audio/video alla schermata della mappa, abilita il plugin OsmAnd [Note audio/video](../plugins/audio-video-notes.md).
:::

![Widget note audio-video](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

Questi sono widget del plugin Note audio/video che forniscono un accesso rapido per avviare/interrompere la registrazione di note audio, video o foto.

Puoi configurare quale azione è selezionata per impostazione predefinita:

- *Su richiesta*. Stato predefinito. Ogni volta viene visualizzata la finestra di dialogo di selezione dell'azione.
- *Registra audio* - registra una nota audio.
- *Registra video* - consente di registrare un video.
- *Scatta una foto* - consente di scattare una foto.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_av_notes"/>* |
| Toccando | Avvia / interrompe la registrazione di una nota |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


### Widget Tracker {#tracker-widget}

<InfoAndroidOnly />

:::note
Per aggiungere il widget Tracker alla schermata della mappa, abilita il plugin OsmAnd [Tracker](../plugins/osmand-tracker.md).
:::

Affinché il plugin e il widget funzionino, è necessario installare [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) da Google Play o altre fonti.

Questo widget del plugin OsmAnd Tracker viene utilizzato per accedere rapidamente all'app OsmAnd Tracker e condividere le informazioni sulla tua posizione con altri utenti. L'app invia messaggi di *Posizione live* alle chat selezionate entro un certo tempo, visualizza un elenco di contatti e gruppi e controlla le chat per messaggi con la tua posizione, che vengono quindi visualizzati su una mappa in OsmAnd.

![Widget Tracker](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="tracker_item"/>* |
| Toccando | Apre l'app OsmAnd Online GPS Tracker. |


### Widget sviluppatore {#developer-widgets}

:::note
Per aggiungere i widget Sviluppatore alla schermata della mappa, abilita il plugin OsmAnd [Sviluppo OsmAnd](../plugins/development.md).
:::

I **widget sviluppatore** forniscono informazioni sulla [velocità di rendering della mappa](../plugins/development.md#map-rendering-fps-widget) e sui parametri della posizione della telecamera virtuale, inclusi il [livello di zoom](../plugins/development.md#zoom-level), la [distanza](../plugins/development.md#distance-to-target) dal centro della mappa, l'[elevazione della telecamera](../plugins/development.md#camera-elevation) e l'[angolo di inclinazione](../plugins/development.md#camera-tilt).

#### FPS rendering mappa {#map-rendering-fps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget FPS Android](@site/static/img/widgets/fps_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget FPS iOS](@site/static/img/widgets/fps_widget_ios.png)

</TabItem>

</Tabs>

Il [widget FPS rendering mappa](../plugins/development.md#map-rendering-fps-widget) visualizza la velocità di rendering della mappa e dei suoi elementi, misurata in fotogrammi al secondo (FPS). Un valore FPS più alto indica un rendering più veloce e prestazioni visive più fluide.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_rendering_fps"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="developer_widgets,map_widget_rendering_fps"/>* |
| Toccando | Nessuna modifica |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


#### Widget telecamera {#camera-widgets}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget posizione telecamera](@site/static/img/widgets/camera_position_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget posizione telecamera 2](@site/static/img/widgets/camera_position_widgets_2_ios.png)

</TabItem>

</Tabs>

I **widget telecamera** ti consentono di monitorare l'allineamento tra la mappa OsmAnd e la superficie terrestre.

- [Inclinazione telecamera](../plugins/development.md#camera-tilt). Visualizza l'angolo di inclinazione della telecamera in modalità prospettiva. Il valore predefinito è 90° (nessuna inclinazione).
- [Elevazione telecamera](../plugins/development.md#camera-elevation). Indica l'elevazione della telecamera sopra il livello della superficie.
- [Livello di zoom](../plugins/development.md#zoom-level). <Translate android="true" ids="map_widget_zoom_level_desc"/>
- [Distanza dalla telecamera al bersaglio](../plugins/development.md#distance-to-target). Misura la distanza tra la telecamera e la posizione di destinazione sulla mappa.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="developer_widgets"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="developer_widgets"/>* |
| Toccando | Passa tra le modalità (*Livello di zoom*) / Nessuna modifica (*Altri*) |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


#### RAM disponibile {#available-ram}

<InfoAndroidOnly />

![Widget velocità media](@site/static/img/widgets/available_RAM_2_andr.png)

Il widget **RAM disponibile** è uno strumento per monitorare l'utilizzo della memoria del tuo dispositivo in relazione a OsmAnd. Fornisce dati dettagliati per aiutare a ottimizzare le prestazioni dell'applicazione.

- **RAM disponibile applicazione.** Visualizza la quantità di RAM disponibile per l'utilizzo da parte di OsmAnd senza causare problemi di prestazioni.

- **Utilizzo RAM applicazione** — Mostra il consumo attuale di RAM da parte di OsmAnd.

- **RAM totale applicazione** — Indica la memoria totale allocata a OsmAnd, inclusa la memoria utilizzata e disponibile.

> **NOTA**. *La *RAM totale disponibile* può variare a seconda dei processi in background e di altre applicazioni in esecuzione sul tuo dispositivo. Questi valori sono dinamici e offrono un modo per monitorare e gestire l'utilizzo della memoria per prestazioni di OsmAnd coerenti ed efficienti.*

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="developer_widgets"/> → *RAM disponibile* |
| Toccando | Nessuna modifica |
| Pressione prolungata | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


## Articoli correlati {#related-articles}

- [Configura schermo](./configure-screen.md)
- [Pulsanti mappa](./map-buttons.md)
- [Widget di navigazione](./nav-widgets.md)
- [Righello raggio e Righello](./radius-ruler.md)
- [Widget marker](./markers.md)
- [Azione rapida](./quick-action.md)

> *Ultimo aggiornamento: Aprile 2025*