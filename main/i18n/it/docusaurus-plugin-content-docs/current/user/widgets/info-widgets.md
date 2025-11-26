---
source-hash: d316c6a306b18280040c2135391d01c55aa7a43411c22e487755810c163d4cb6

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

I widget informativi forniscono un accesso rapido a dati importanti. Può trattarsi di dati sulla velocità, sul meteo, sulla posizione del parcheggio, sui dati dei sensori esterni e molto altro ancora. I widget possono essere configurati in base alle proprie esigenze specifiche, abilitandone la visibilità sulla schermata dell'applicazione o disabilitandoli se necessario.

![Informational widgets](@site/static/img/widgets/informational_widgets_all.png)


## Widget altitudine {#altitude-widgets}

I widget di altitudine visualizzano l'altezza sul livello del mare della geolocalizzazione corrente e l'elevazione del centro della mappa.


### Altitudine: Posizione attuale {#altitude-current-location}
  
:::note  Scarica la correzione dell'altitudine mondiale
Su alcuni dispositivi Android, l'altitudine potrebbe essere visualizzata in modo impreciso. Per risolvere questo problema, scarica una mappa con la correzione dell'altitudine.

- Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.
- Per maggiori dettagli, visita [Maps & Resources](../personal/maps-resources.md#downloads-menu).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget altitudine Android](@site/static/img/widgets/altitude_widget_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Widget altitudine iOS](@site/static/img/widgets/altitude_widget_ios.png)  

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Abilita |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_altitude_current_location"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_altitude_current_location"/>* |
| Con un tocco | Nessuna modifica |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *Menu → Impostazioni → Profili app → Impostazioni generali → Unità e formati → Unità di lunghezza* |  


### Elevazione: Centro mappa {#elevation-map-center}

:::info Funzionalità a pagamento
&nbsp;<ProFeature/> Per accedere all'uso del widget *Elevazione: centro mappa*, abbonati a OsmAnd Pro per [Android](../purchases/android.md#pro-features) o [iOS](../purchases/ios.md#pro-features).  
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget elevazione Android](@site/static/img/widgets/elevation_widget_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Widget elevazione iOS](@site/static/img/widgets/elevation_widget_2_ios.png)

</TabItem>

</Tabs>

È possibile utilizzare il widget per conoscere l'elevazione del centro mappa corrente sul livello del mare. Per visualizzare le informazioni nel widget **Elevazione: centro mappa** è necessaria una [Mappa del terreno (ombreggiatura e pendenza)](../plugins/topography.md#download-maps) dell'area richiesta.  

| | |
|:------------|:------------|
| Abilita |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_altitude_map_center"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_altitude_map_center"/>* |
| Con un tocco | Nessuna modifica |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *Menu → Impostazioni → Profili app → Impostazioni generali → Unità e formati → Unità di lunghezza* |


## Ora corrente {#current-time}

![Widget ora corrente](@site/static/img/widgets/current_time_widget.png)

Questo widget visualizza l'ora corrente presa dal tuo dispositivo.  

| | |
|:------------|:------------|
| Abilita |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_plain_time"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_plain_time"/>* |
| Con un tocco | Nessuna modifica |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | Le impostazioni del dispositivo configurano Ora e Formato. |


## Velocità attuale {#current-speed}

![Widget velocità](@site/static/img/widgets/current_speed_widget.png)  

Il widget mostra la velocità attuale rilevata dal sensore GPS.  

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_current_speed"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_current_speed"/>* |
| Con un tocco  | Nessuna modifica |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,default_speed_system"/>* |


## Velocità media {#average-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget velocità media Android](@site/static/img/widgets/average_speed_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget velocità media iOS](@site/static/img/widgets/average_speed_widget_ios_2.png)

</TabItem>

</Tabs>  

Il widget **Velocità media** calcola e visualizza la velocità media su un intervallo di tempo selezionato senza richiedere la navigazione o la registrazione di una traccia. È utile per monitorare il rispetto dei limiti di velocità in autostrada o per tenere traccia della velocità media negli ultimi minuti di pedalata.

1. ***Configurazione del widget.***  
   Per regolare le impostazioni, tocca il pulsante **Impostazioni** (*Android*) o il **campo del widget** (*iOS*). Le opzioni disponibili includono:

2. ***Intervallo di tempo.***

   - La velocità media viene calcolata in base all'intervallo di tempo selezionato, che può variare da **15 secondi a 60 minuti**.  

   - Il calcolo si basa sui dati GPS utilizzando la formula:  
   `Average Speed = AVERAGE(GPS_LOCATION.speed)`.

3. ***Tieni conto delle soste.***

   **Abilitato** — Se la velocità registrata è inferiore a 1 unità all'ora, viene ignorata, evitando cali inutili della velocità media quando ci si ferma ai semafori o si fanno brevi pause.  

   **Disabilitato** — Le soste sono incluse nel calcolo, il che significa che le pause lunghe ridurranno la velocità media complessiva.

4. ***Ripristina velocità media.***
   È possibile ripristinare il calcolo della velocità media in due modi:

   - Tocca a lungo il widget per aprire il [Menu contestuale](../widgets/configure-screen.md#widget-context-menu) e seleziona *Ripristina velocità media*.
   - Apri le *impostazioni del widget* tramite il [menu Configura schermata](../widgets/configure-screen.md#widget-settings) e seleziona l'opzione di ripristino.

Dopo il ripristino, la velocità media viene ricalcolata a partire dai nuovi dati GPS. Questa funzione è utile per il monitoraggio della velocità in tempo reale, ad esempio per controllare la velocità in aree con **telecamere per il controllo della velocità media**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Velocità media](@site/static/img/widgets/average_speed_widget_4.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Widget velocità media](@site/static/img/widgets/average_speed_widget_ios_1.png)  ![Widget velocità media](@site/static/img/widgets/average_speed_widget_ios_3.png)

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Abilita |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_average_speed"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_average_speed"/>* |
| Con un tocco | Nessuna modifica |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu). <br/> Può essere usato per ripristinare la velocità media. |


## Rapporto di planata {#glide-ratio}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|Widgets| Widgets on the screen|
|:--------|:---------|
|![Rapporto di planata](@site/static/img/widgets/glide_ratio_3.png)|![Rapporto di planata](@site/blog/2023-12-22-android-4-6/img/glide_ratio_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|Widgets| Widgets on the screen|
|:--------|:---------|
|![Rapporto di planata](@site/static/img/widgets/glide_ratio_1_widget_ios.png)|![Rapporto di planata](@site/static/img/widgets/glide_ratio_widget_ios.png)|


</TabItem>

</Tabs>  

I widget [semplici](../widgets/configure-screen.md#widget-panels) *Rapporto di planata* forniscono preziose informazioni sul rapporto di planata per aiutare a prendere decisioni informate durante la pianificazione delle rotte aeree. Il widget *Rapporto di planata* in OsmAnd ti aiuta a valutare l'efficienza della tua discesa o salita durante la navigazione verso una posizione specifica (posizione di un [marcatore](../personal/markers.md) sulla mappa). Calcola il rapporto di planata come il rapporto tra la distanza e la differenza di altitudine tra la tua posizione attuale e la destinazione prevista. Puoi leggere di più su questo [qui](https://en.wikipedia.org/wiki/Lift-to-drag_ratio#Glide_ratio).


**Uso dei widget:**

- *Pianificazione di voli veleggiati.* Per i piloti di volo a vela, il widget *Rapporto di planata verso l'obiettivo* diventa uno strumento indispensabile per la pianificazione e l'esecuzione dei voli veleggiati. I piloti possono stimare la distanza che possono percorrere fino al loro obiettivo, date le condizioni attuali e il rapporto di planata richiesto.
- *Ottimizzare salite e discese.* Il rapporto di planata medio consente ai piloti di ottimizzare le salite e le discese in base alle condizioni attuali. I piloti possono scegliere la tempistica ottimale per le salite per massimizzare il tempo di volo, o per le discese per raggiungere un punto di destinazione.
- *Reagire a condizioni mutevoli.* Il widget fornisce aggiornamenti continui del rapporto di planata, consentendo ai piloti di reagire istantaneamente ai cambiamenti delle condizioni atmosferiche o delle rotte. Possono regolare il loro piano di volo per garantire sicurezza ed efficienza.
- *Massimo utilizzo della distanza orizzontale.* Conoscere il rapporto di planata consente ai piloti di massimizzare l'uso della distanza orizzontale per spostarsi verso l'obiettivo, il che è particolarmente importante quando si pianificano voli lunghi.
- *Riduzione del rischio*. Il widget *Rapporto di planata verso l'obiettivo* aiuta i piloti a evitare situazioni in cui il raggiungimento dell'obiettivo diventa impossibile a causa di un rapporto di planata insufficiente. Ciò contribuisce a ridurre i rischi e a migliorare la sicurezza del volo.


**Valori positivi e negativi:**

- **I valori positivi** indicano che la destinazione si trova a un'altitudine inferiore rispetto alla posizione attuale, richiedendo una discesa.
- **I valori negativi** indicano che la destinazione si trova a un'altitudine superiore, rendendo necessaria una salita. Ad esempio, "-90:1" significa che dopo aver percorso una distanza di 90 chilometri, è necessario salire di 1 chilometro per raggiungere la destinazione.


**Arrotondamento/Formattazione:**

- Valore **≤ 0.1**:  
  - "0.05" viene visualizzato come "0".
- Valore **> 0.1 e < 100**:  
  - ad esempio, "50.7643" viene visualizzato come "50.8:1".
- Valore **> 100:**  
  - "102.35" viene visualizzato come "102:1."


### Rapporto di planata verso l'obiettivo {#glide-ratio-to-target}

- **Rapporto di planata verso l'obiettivo** mostra l'esatto rapporto di planata richiesto per raggiungere il punto di destinazione.
- **Elevazione obiettivo** mostra l'elevazione del punto di destinazione. Il [Marcatore mappa](../personal/markers.md) dovrebbe essere usato come punto di destinazione.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → Glide ratio* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → Glide ratio* |
| Con un tocco | Cambia *Rapporto di planata verso l'obiettivo* o *Elevazione obiettivo*  |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


### Rapporto di planata medio {#average-glide-ratio}

- **Rapporto di planata medio** mostra il rapporto di planata medio per un intervallo di tempo specificato.
- **Velocità verticale media** indica la velocità con cui un oggetto sale o scende in un certo periodo. Per la valutazione vengono considerati solo il primo e l'ultimo punto dell'intervallo di tempo. È possibile impostare l'intervallo di tempo per questo widget da 15 secondi a 60 minuti. È necessario utilizzare il [Marcatore mappa](../personal/markers.md) come punto di destinazione.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → Glide ratio* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → Glide ratio* |
| Con un tocco | Cambia *Rapporto di planata medio* o *Velocità verticale media*  |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


## Livello batteria {#battery-level}

![Widget livello batteria](@site/static/img/widgets/battery_level_widget.png)  

Il widget **Livello batteria** visualizza la percentuale della batteria del dispositivo direttamente sulla schermata della mappa e si aggiorna automaticamente almeno una volta al minuto.

- **iOS 17 e successivi** — A causa di **restrizioni sulla privacy**, i dati sul livello della batteria sono disponibili solo con incrementi del 5% (ad es. 35%, 60% o 85%). Si tratta di una limitazione di sistema imposta da Apple.

- Dispositivi **Android** — Il widget visualizza la percentuale esatta della batteria come riportato dal sistema, senza arrotondamenti.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_battery"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_battery"/>* |
| Con un tocco | Nessuna modifica |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


## Widget coordinate {#coordinates-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget coordinate Android](@site/static/img/widgets/coordinates_widget_1.png) ![Widget coordinate Android](@site/static/img/widgets/coordinates_widget_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Widget coordinate iOS](@site/static/img/widgets/coordinates_widget_ios_2.png)  

</TabItem>

</Tabs>

OsmAnd offre due tipi di widget per le coordinate:

- **Coordinate: centro mappa** - mostra le coordinate geografiche del centro mappa corrente.
- **Coordinate: posizione attuale** - mostra le coordinate geografiche della geolocalizzazione corrente.

I widget delle coordinate vengono visualizzati nella parte superiore dello schermo. Le icone con sfondo verde mostrano la latitudine e la longitudine del punto al centro della parte visibile della mappa, mentre quelle con sfondo blu mostrano le coordinate della posizione corrente. Le informazioni sui *formati delle coordinate* supportati sono disponibili nell'articolo *[Ricerca coordinate](../search/search-coordinates.md#coordinate-format)*.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="coordinates_widget"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → <Translate ios="true" ids="coordinates"/>* |
| Con un tocco | Copia le coordinate negli appunti. |
| Formato | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/> (iOS) or <Translate android="true" ids="configure_profile"/> (Android) → <br/> <Translate ios="true" ids="general_settings_2,units_and_formats,coords_format"/>* |


## Info GPS {#gps-info}

<InfoAndroidOnly />

![Widget Info GPS Android](@site/static/img/widgets/gps_info_widget.png)

Il widget informativo GPS (Global Positioning System) mostra il numero di satelliti che il dispositivo sta rilevando e utilizzando. È possibile utilizzarlo per controllare lo stato del GPS in caso di segnale debole.  

È possibile reimpostare la cache GPS corrente tramite:
*<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>*.  

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_gps_info"/>* |  
| Con un tocco | Apre il menu di stato del GPS con strumenti di terze parti per configurare il dispositivo GPS di bordo. |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


## Posizione del sole {#sun-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget alba e tramonto](@site/static/img/widgets/sun_position.png) ![Widget alba e tramonto](@site/static/img/widgets/sun_position_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget alba e tramonto](@site/static/img/widgets/sun_position_4_ios.png) ![Widget alba e tramonto](@site/static/img/widgets/sun_position_3_ios.png)

</TabItem>

</Tabs>  

I widget della posizione del sole mostrano gli orari della prossima alba e del prossimo tramonto per il centro della mappa. Se toccati, visualizzano il tempo rimanente fino al tramonto o all'alba previsti. In entrambi i casi, l'ora si basa sull'ora configurata del dispositivo.

- **<Translate ios="true" ids="map_widget_sun_position"/>**. <Translate ios="true" ids="map_widget_sun_position_desc"/>
- **<Translate ios="true" ids="map_widget_sunrise"/>**. <Translate ios="true" ids="map_widget_sunrise_desc"/>
- **<Translate ios="true" ids="map_widget_sunset"/>**. <Translate ios="true" ids="map_widget_sunset_desc"/>

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_sun_position"/> → <Translate android="true" ids="map_widget_sun_position"/>, <Translate android="true" ids="shared_string_sunrise"/>, <Translate android="true" ids="shared_string_sunset"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_sun_position"/> → <Translate ios="true" ids="map_widget_sun_position"/>, <Translate ios="true" ids="map_widget_sunrise"/>, <Translate ios="true" ids="map_widget_sunset"/>* |
| Con un tocco | Passa dal tempo rimanente all'ora della prossima alba/tramonto. |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


## Righello radiale {#radius-ruler}

:::note  
Una descrizione più dettagliata è disponibile qui: **[Righello radiale e Righello](../widgets/radius-ruler)**.  
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Schermata righello radiale](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Righello radiale"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Righello radiale"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Righello radiale"/></td>
    </tr>
</table>

</TabItem>

</Tabs>

Il widget Righello radiale mostra la distanza tra la propria posizione e il punto centrale del Righello radiale. Il raggio del primo cerchio è uguale alla [scala della mappa](../widgets/radius-ruler.md#ruler).

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_ruler_control"/>* |
| Con un tocco | Cambia lo stato del widget tra le modalità scala nera, scala di grigi e invisibile. |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |


## Tachimetro {#speedometer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tachimetro](@site/static/img/widgets/speedometer_1_andr.png)   ![Tachimetro](@site/static/img/widgets/speedometer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tachimetro](@site/static/img/widgets/speedometer_1_ios.png)   ![Tachimetro](@site/static/img/widgets/speedometer_2_ios.png)

</TabItem>

</Tabs>

Il **widget Tachimetro** è una visualizzazione grafica della velocità attuale del veicolo basata sui *dati ricevuti dal GPS*. Permette di monitorare in tempo reale la conformità tra la propria velocità e il limite di velocità consentito. Il limite di velocità consentito è fornito dai [dati di OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed) per un particolare tratto di strada e dall'impostazione [Tolleranza limite di velocità](../navigation/guidance/voice-navigation.md#speed-limit) di OsmAnd.  

- Nelle *Impostazioni del tachimetro*, è possibile selezionare la dimensione (**Altezza**) del widget sulla schermata dell'applicazione come *Piccola*, *Media* o *Grande*.
- È possibile specificare quando ricevere un **Avviso limite di velocità**, selezionando *Sempre* o *Quando superato*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/speedometer_4_andr.png').default} alt="Tachimetro"/></td>
        <td><img src={require('@site/static/img/widgets/speedometer_4_ios.png').default} alt="Tachimetro"/></td>
    </tr>
</table>

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_other,shared_string_speedometer"/>* |
|        | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location"/>* *→ Speedometer* |
| Formato | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,default_speed_system"/>*  |


## Widget dei plugin {#plugin-widgets}

Questi widget sono abilitati e funzionano in combinazione con i rispettivi plugin.


### Widget Registrazione percorso {#trip-recording-widgets}

:::note  
Una descrizione più dettagliata è disponibile qui: **[<Translate android="true" ids="record_plugin_name"/> plugin](../plugins/trip-recording.md)**.  
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![trip_recording_widget](@site/static/img/widgets/wid_trip_rec.png)

</TabItem>

<TabItem value="ios" label="iOS">

![trip_recording_widget](@site/static/img/widgets/widget_trip_recording-_rec_ios.png)

</TabItem>

</Tabs>

I widget di registrazione del percorso si riferiscono al [plugin <Translate android="true" ids="record_plugin_name"/>](../plugins/trip-recording.md#widgets). È possibile utilizzare i widget per visualizzare brevi informazioni sulla registrazione della traccia sullo schermo. Come *Distanza*, *Durata*, *Salita*, *Discesa*, *Velocità massima* e *Pendenza media* (gli ultimi due sono disponibili solo su Android).

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_monitoring"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_monitoring"/>* |
| Con un tocco | Avvia/Interrompe la registrazione della traccia o Visualizza il grafico. |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


### Widget Sensori esterni {#external-sensors-widgets}

:::note
Per aggiungere i widget dei Sensori esterni alla schermata della mappa, abilita il [plugin Sensori esterni](../plugins/external-sensors.md) di OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widget sensori esterni Android](@site/static/img/widgets/external-sensors-widgets_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![trip_recording_widget](@site/static/img/widgets/external-sensors-widgets_ios.png)

</TabItem>

</Tabs>

I widget si riferiscono al [plugin Sensori esterni](../plugins/external-sensors.md#widgets). È possibile utilizzarli per visualizzare brevi informazioni dai sensori esterni, come: **<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*solo Android*), **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/>, <Translate android="true" ids="map_widget_ant_bicycle_dist"/>** e **<Translate android="true" ids="external_device_characteristic_temperature"/>**. È anche possibile selezionare il **livello della batteria** dei sensori BLE collegati da visualizzare direttamente nel widget.  

- Per aggiungere il widget — [abilita](../plugins/index.md#enable--disable) il plugin Sensori esterni di OsmAnd.

- Per aggiungere sensori, seleziona una delle opzioni:
  - Vai a *Menu → Plugin → Sensori esterni → Impostazioni → Associa nuovo sensore*.
  - Vai a *Menu → Configura schermata → Scegli un pannello → Aggiungi widget → Sensori esterni → Scegli sensore → Impostazioni → Associa nuovo sensore*.

- Aggiungi widget anche se non c'è nessun sensore esterno collegato.

- **Tutti i widget aggiunti sono visibili** anche se non è collegato alcun sensore esterno.

- Usa il [plugin Registrazione percorso](../plugins/trip-recording.md#recording-settings) per registrare i dati dei sensori.

- Leggi come scegliere quale sensore (dello stesso tipo) mostrare nel widget [qui](../plugins/external-sensors.md#widget-settings).

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="external_sensor_widgets"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="external_sensors_plugin_name"/>* |
| Con un tocco | Nessuna modifica (*Android*) / Cambia la modalità tra Dati sensore e Livello batteria (*iOS*). |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


### Widget Metriche veicolo {#vehicle-metrics-widgets}


:::note
Per aggiungere i widget Metriche veicolo alla schermata della mappa, abilita il [plugin Metriche veicolo](../plugins/vehicle-metrics.md) di OsmAnd.
:::


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widget metriche veicolo Android](@site/static/img/widgets/vehicle_metrics_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget metriche veicolo Android](@site/static/img/widgets/vehicle_metrics_ios.png)

</TabItem>

</Tabs>


I widget appartengono al [plugin Metriche veicolo](../plugins/vehicle-metrics.md#widgets). È possibile utilizzarli per visualizzare le informazioni di uno scanner OBD-II collegato, come (*14 metriche*): **Temperatura di aspirazione**,&nbsp; **Temperatura ambiente**,&nbsp; **Temperatura del liquido di raffreddamento**,&nbsp; **Temperatura dell'olio motore**,&nbsp; **Velocità del motore** (*gratuito*),&nbsp; **Tempo di funzionamento del motore**,&nbsp; **Carico motore calcolato**,&nbsp; **Pressione del carburante**,&nbsp; **Consumo di carburante**,&nbsp; **Carburante rimanente**,&nbsp; **Livello della batteria**,&nbsp; **Tensione adattatore**,&nbsp; **Velocità del veicolo** (*gratuito*) e **Posizione dell'acceleratore**.  

- Per aggiungere i widget delle metriche del veicolo alla schermata della mappa, [abilita](../plugins/index.md#enable--disable) il **plugin Metriche veicolo**.
- È possibile aggiungere widget anche se non è collegato alcuno scanner OBD-II.
- Tutti i widget aggiunti sono visibili sia che uno scanner OBD-II sia collegato o meno.
- Per modificare un widget, tocca il widget aggiunto al pannello, quindi tocca *Impostazioni*, oppure tocca direttamente l'icona *Impostazioni* nel campo del widget.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget →  <Translate android="true" ids="obd_widget_group"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget →  <Translate ios="true" ids="obd_plugin_name"/>* |
| Con un tocco | Nessuna modifica |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


### Widget Meteo {#weather-widgets}

:::note
Per aggiungere i widget Meteo alla schermata della mappa, abilita il [plugin Meteo](../plugins/weather.md) di OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget meteo Android](@site/static/img/widgets/weather_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget meteo iOS](@site/static/img/widgets/weather_widgets_ios.png)

</TabItem>

</Tabs>  

I widget Meteo visualizzano le informazioni meteorologiche attuali per un punto centrale della mappa. Vengono abilitati automaticamente sullo schermo quando vengono visualizzati con il plugin (*Menu → Meteo*), e si può scegliere quali mettere sulla schermata iniziale per l'uso quotidiano (*Menu → Personalizza schermata*). Per saperne di più, consultare l'articolo [Plugin Meteo](../plugins/weather.md).

- **Temperatura**. <Translate android="true" ids="temperature_widget_desc"/>
- **Pressione atmosferica**. <Translate android="true" ids="air_pressure_widget_desc"/>
- **Vento**. <Translate android="true" ids="wind_widget_desc"/>
- **Nuvole**. <Translate android="true" ids="clouds_widget_desc"/>
- **Precipitazioni**. <Translate android="true" ids="precipitation_widget_desc"/>

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="shared_string_weather"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="shared_string_weather"/>* |  
| Con un tocco | Mostra in una finestra di dialogo a comparsa la data e l'ora in cui le informazioni meteorologiche sono pertinenti. |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *Menu → Plugin → Meteo → Impostazioni* or *Menu → Impostazioni → Profilo app → Meteo* |  


### Widget Parcheggio {#parking-widget}

:::note
Per aggiungere i widget Parcheggio alla schermata della mappa, abilita il [plugin Posizione parcheggio](../plugins/parking.md) di OsmAnd.
:::  

![Widget parcheggio](@site/static/img/plugins/parking/parking_widget.png)  

Il widget del plugin Parcheggio mostra la distanza dal centro dello schermo alla posizione del parcheggio. Per impostare un posto auto sulla mappa, ingrandire fino al livello richiesto, quindi toccare a lungo il punto sulla mappa per aprire il menu contestuale. Seguire [queste impostazioni](../plugins/parking.md#set-a-spot).  

**Nota:** il widget Parcheggio apparirà solo se è stata aggiunta una posizione di parcheggio alla mappa. Senza una posizione di parcheggio salvata, il widget non sarà visibile.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_parking"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="parking_place"/>* |
| Con un tocco | Sposta la visualizzazione della mappa sulla posizione del parcheggio. |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


### Widget Mapillary {#mapillary-widget}

:::note  
Per aggiungere il widget Mapillary alla schermata della mappa, abilita il [plugin Mapillary](../plugins/mapillary.md) di OsmAnd.  
:::  

![Widget Mapillary](@site/static/img/widgets/mapillary_widget.png)

Questo è un widget del plugin Mapillary che fornisce un accesso rapido all'applicazione Mapillary, che consente di aggiungere [*immagini a livello stradale*](../plugins/mapillary.md#enable-layer). Il widget viene aggiunto automaticamente alla mappa quando il plugin è abilitato.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="mapillary"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="mapillary"/>* |
| Con un tocco | Apre l'applicazione [Mapillary](https://www.mapillary.com/). |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


### Widget Note audio/video {#audiovideo-notes-widget}

<InfoAndroidOnly />

:::note
Per aggiungere i widget Note audio/video alla schermata della mappa, abilita il [plugin Note audio/video](../plugins/audio-video-notes.md) di OsmAnd.
:::

![Widget note audio-video](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)  

Questi sono i widget del plugin Note audio/video che forniscono un accesso rapido per avviare/interrompere la registrazione di note audio, video o foto.  

È possibile configurare quale azione è selezionata per impostazione predefinita:

- *Su richiesta*. Stato predefinito. Ogni volta viene visualizzata la finestra di dialogo per la selezione dell'azione.
- *Registra audio* - registra una nota audio.
- *Registra video* - consente di registrare un video.
- *Scatta una foto* - consente di scattare una foto.  

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_av_notes"/>*  |
| Con un tocco | Avvia / interrompe la registrazione di una nota  |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


### Widget Tracker {#tracker-widget}

<InfoAndroidOnly />

:::note
Per aggiungere il widget Tracker alla schermata della mappa, abilita il [plugin Tracker](../plugins/osmand-tracker.md) di OsmAnd.
:::  

Per il funzionamento del plugin e del widget, è necessario installare [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) da Google Play o da altre fonti.  

Questo widget del plugin OsmAnd Tracker viene utilizzato per accedere rapidamente all'app OsmAnd Tracker e condividere le informazioni sulla propria posizione con altri utenti. L'app invia messaggi di *Posizione in tempo reale* alle chat selezionate entro un certo tempo, visualizza un elenco di contatti e gruppi e controlla le chat per i messaggi con la propria posizione, che vengono poi visualizzati su una mappa in OsmAnd.  

![Widget Tracker](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="tracker_item"/>* |
| Con un tocco | Apre l'app OsmAnd Online GPS Tracker. |


### Widget sviluppatore {#developer-widgets}

:::note
Per aggiungere i widget Sviluppatore alla schermata della mappa, abilita il [plugin Sviluppo OsmAnd](../plugins/development.md) di OsmAnd.
:::

I **widget Sviluppatore** forniscono informazioni sulla [velocità di rendering](../plugins/development.md#map-rendering-fps-widget) della mappa e sui parametri di posizione della telecamera virtuale, tra cui il [livello di zoom](../plugins/development.md#zoom-level), la [distanza](../plugins/development.md#distance-to-target) dal centro della mappa, l'[elevazione della telecamera](../plugins/development.md#camera-elevation) e l'[angolo di inclinazione](../plugins/development.md#camera-tilt).  

#### FPS rendering mappa {#map-rendering-fps}

<Tabs groupId="operating-systems" queryString="current-os">

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
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="developer_widgets,map_widget_rendering_fps"/>* |
| Con un tocco | Nessuna modifica |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


#### Widget telecamera {#camera-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget posizione telecamera](@site/static/img/widgets/camera_position_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget posizione telecamera 2](@site/static/img/widgets/camera_position_widgets_2_ios.png)

</TabItem>

</Tabs>

I **widget Telecamera** consentono di monitorare l'allineamento tra la mappa di OsmAnd e la superficie terrestre.

- [Inclinazione telecamera](../plugins/development.md#camera-tilt). Visualizza l'angolo di inclinazione della telecamera in modalità prospettiva. Il valore predefinito è 90° (nessuna inclinazione).
- [Elevazione telecamera](../plugins/development.md#camera-elevation). Indica l'elevazione della telecamera rispetto al livello della superficie.
- [Livello di zoom](../plugins/development.md#zoom-level). <Translate android="true" ids="map_widget_zoom_level_desc"/>
- [Distanza dalla telecamera all'obiettivo](../plugins/development.md#distance-to-target). Misura la distanza tra la telecamera e la posizione di destinazione sulla mappa.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="developer_widgets"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="developer_widgets"/>* |
| Con un tocco | Passa da una modalità all'altra (*Livello di zoom*) / Nessuna modifica (*Altri*) |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


#### RAM disponibile {#available-ram}

<InfoAndroidOnly />

![Widget velocità media](@site/static/img/widgets/available_RAM_2_andr.png)

Il widget **RAM disponibile** è uno strumento per monitorare l'utilizzo della memoria del dispositivo in relazione a OsmAnd. Fornisce dati dettagliati per aiutare a ottimizzare le prestazioni dell'applicazione.

- **RAM applicazione disponibile.** Visualizza la quantità di RAM disponibile per l'uso da parte di OsmAnd senza causare problemi di prestazioni.

- **Utilizzo RAM applicazione** — Mostra il consumo attuale di RAM da parte di OsmAnd.

- **RAM totale applicazione** — Indica la memoria totale allocata a OsmAnd, inclusa la memoria utilizzata e quella disponibile.

> **NOTA**. *La *RAM totale disponibile* può variare a seconda dei processi in background e delle altre applicazioni in esecuzione sul dispositivo. Questi valori sono dinamici e offrono un modo per tracciare e gestire l'utilizzo della memoria per prestazioni di OsmAnd costanti ed efficienti.*

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="developer_widgets"/> → *Available RAM* |
| Con un tocco | Nessuna modifica |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


## Articoli correlati {#related-articles}

- [Configura schermata](./configure-screen.md)
- [Pulsanti mappa](./map-buttons.md)
- [Widget di navigazione](./nav-widgets.md)
- [Righello radiale e Righello](./radius-ruler.md)
- [Widget marcatore](./markers.md)
- [Azione rapida](./quick-action.md)