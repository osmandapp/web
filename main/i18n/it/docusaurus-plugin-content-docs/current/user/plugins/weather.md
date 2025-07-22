---
source-hash: 2f59b1c67bc9886426af5d0c0cd282853675b77154ff95cd42a65f37a70509cb
sidebar_position: 17
title:  Meteo
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
 <ProFeature/> Il plugin Meteo è una [funzione a pagamento](../purchases/index.md) dell'app OsmAnd.
:::

I livelli interattivi della mappa meteo nell'app OsmAnd ti consentono di monitorare la temperatura, la pressione atmosferica, la copertura nuvolosa, la velocità del vento e le precipitazioni nella tua città o in qualsiasi altra posizione su una mappa globale interattiva. Il plugin Meteo fornisce previsioni meteo orarie per 7 giorni direttamente sulla mappa OsmAnd. Le informazioni meteo possono anche essere scaricate per l'uso offline.

La fonte dati per il plugin Meteo è il [Global Forecasting System](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) gestito dal National Weather Service (NWS) degli Stati Uniti e dal Centro Europeo per le Previsioni Meteorologiche a Medio Termine ([ECMWF](https://www.ecmwf.int/)).


## Parametri di configurazione richiesti {#required-setup-parameters}

Le seguenti impostazioni sono *richieste* per visualizzare il Meteo sulla mappa OsmAnd:

**1.** [Acquista **l'abbonamento OsmAnd Pro**](../purchases/).

**2.** [Abilita](../plugins/#enable--disable) il plugin Meteo nella sezione *Plugin* del *Menu principale*.

**3.** [Seleziona le **unità di misura**](#weather-settings) per gli eventi meteorologici.

**4.** [Visualizza i **livelli Meteo**](#customize-weather-layers) sulla mappa utilizzando la voce di menu Meteo nel menu Configura mappa (ricordati di rimpicciolire).

**5.** [Visualizza le **Previsioni meteo**](#weather-forecast-screen) per l'area selezionata (questo menu consente di non ingombrare la schermata principale della mappa OsmAnd con i livelli meteo).

**6.** [Scarica](#offline-forecast) le previsioni meteo se prevedi di utilizzarle offline.

**7.** [Abilita i **widget Meteo**](#weather-widgets) se desideri visualizzare informazioni meteo aggiornate su base giornaliera.

:::caution Rendering richiesto
Il plugin Meteo è disponibile solo con il motore di rendering delle mappe [Versione 2](../personal/global-settings/#map-rendering-engine) (OpenGL).
:::


## Visualizza il Meteo sulla Mappa {#display-weather-on-the-map}

### Schermata Previsioni meteo {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *Plugin abilitato → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *Plugin abilitato → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_dashbord_ios_2.png)

</TabItem>

</Tabs>

Il menu laterale principale ha una voce di menu dedicata **Meteo** che fornisce un rapido accesso a tutti gli strumenti meteo. La *schermata Previsioni meteo* visualizza informazioni su *temperatura*, *pressione atmosferica*, *velocità del vento*, *copertura nuvolosa* e *precipitazioni*.

Nella parte inferiore dello schermo si trova la *barra degli strumenti meteo*. Puoi utilizzare i pulsanti del giorno e lo slider del tempo per impostare l'ora esatta in cui verranno visualizzate le previsioni meteo.

### Personalizza livelli meteo {#customize-weather-layers}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *Plugin abilitato → <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_customize_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *Plugin abilitato → <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>

</Tabs>

Per visualizzare i livelli meteo sulla schermata della mappa OsmAnd, devi utilizzare il menu *Configura mappa*. Vai al menu, trova la voce *Meteo* nell'elenco (disponibile solo quando il plugin è abilitato) e toccala.

In questo menu, puoi modificare la **visibilità** e le [impostazioni](#weather-settings) per ogni livello, selezionare il tipo di linee di contorno e scaricare le [previsioni meteo offline per 7 giorni](#offline-forecast) (*disponibile solo per Android qui*).


### Impostazioni meteo {#weather-settings}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

- *Menu principale → Plugin → Meteo → Impostazioni*
- *Menu principale → Impostazioni → Profilo → Impostazioni plugin → Meteo*

![Weather Settings Android](@site/static/img/plugins/weather/weather_settings_andr_1.png) ![Weather Settings 2 Android](@site/static/img/plugins/weather/weather_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *Menu principale → Impostazioni → Profilo → Plugin → Meteo*

![Weather Settings iOS](@site/static/img/plugins/weather/weather_settings_ios.png) ![Weather Settings iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.png)

</TabItem>

</Tabs>

È importante decidere in quali unità di misura ti è conveniente visualizzare i [dati meteo](#weather-layers) sulla mappa e nella sezione [widget meteo](#weather-widgets) dello schermo. Puoi scegliere le unità di misura appropriate per ogni parametro o utilizzare i valori predefiniti (*solo iOS*). Nella versione iOS dell'app OsmAnd, puoi anche abilitare l'opzione di previsione offline per evitare di utilizzare il traffico dati mobile durante i viaggi.

:::note
Nella versione iOS di OsmAnd, puoi modificare le unità di misura e il livello di trasparenza nel menu che si apre dopo un tocco prolungato sull'icona del livello della mappa richiesto.
:::

### Livelli meteo {#weather-layers}

Tutti i dati meteo sono presentati come livelli separati della mappa. Per visualizzare i livelli meteo sulla mappa, devi rimpicciolire, sono disponibili solo su scale di zoom 2-12. I livelli meteo utilizzano [tavolozze meteo](../personal/color-palette-schemes.md#weather) per colorare la mappa, queste tavolozze possono essere [modificate](../personal/color-palette-schemes.md#edit-palette-file) se necessario.

| |
|------------|
| **Livello precipitazioni** visualizza informazioni sugli eventi meteorologici in cui l'acqua in diversi stati aggregati cade dal cielo a terra. Le precipitazioni sono pioggia, neve, nevischio o grandine. La scala delle precipitazioni è graduata in millimetri (o pollici) di acqua che cade su 1 metro quadrato in 24 ore. 1 mm di pioggia corrisponde a 1 litro di acqua per 1 metro quadrato. |
|![Precipitation sheme](@site/static/img/plugins/weather/precipitation.png)|
| La **Temperatura** esprime la percezione quantitativa di caldo e freddo. Si misura in gradi. In OsmAnd, puoi scegliere tra la scala Celsius e Fahrenheit. |
|![Temperature sheme](@site/static/img/plugins/weather/temperature.png)|
| Il **Vento** è il movimento dell'aria causato dal riscaldamento non uniforme della Terra da parte del sole e dalla sua rotazione. I venti possono variare da leggere brezze a disastri naturali come uragani e tornado. In OsmAnd, la velocità del vento può essere visualizzata in metri al secondo (m/s), chilometri all'ora (km/h), miglia all'ora (mph) e nodi (kt). |
|![Wind sheme](@site/static/img/plugins/weather/wind.png)|
| La **Copertura nuvolosa** è la frazione media del cielo coperta da nuvole quando osservata da una particolare posizione. Si misura in %. |
|![Clouds sheme](@site/static/img/plugins/weather/clouds.png)|
| La **Pressione atmosferica** è causata dal peso dell'aria sopra il punto di misurazione. Diminuisce con l'aumentare dell'altitudine. La pressione atmosferica può essere visualizzata in ettapascal (hPa), millimetri di mercurio (mmHg) e pollici di mercurio (inHg). |
| ![Pressure sheme](@site/static/img/plugins/weather/pressure.png) |
| L'**Animazione del vento** include rappresentazioni dinamiche che mostrano la direzione e la velocità del vento nella regione. |
| ![Wind annimation](@site/static/img/plugins/weather/wind_annimation.gif) |


### Combina mappe {#combine-maps}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_contours.png)

</TabItem>

</Tabs>

Per ottenere informazioni meteo complete, puoi utilizzare i livelli della mappa separatamente o combinarli facilmente. È possibile aggiungere anche isolinee di un tipo specifico al livello Meteo. Basta toccare il pulsante *Livelli* o *Isolinee* sullo schermo.


### Azioni rapide per i livelli {#quick-actions-for-layers}

![QA Weather layers](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

Per attivare o disattivare la visibilità dei livelli meteo, puoi utilizzare i pulsanti *Azione rapida* sulla schermata della mappa. Le impostazioni generali per mostrare o nascondere i livelli si trovano nella [sezione Meteo](#weather-forecast-screen) separata del *Menu principale*. Nell'articolo [Azione rapida](../widgets/quick-action.md#configure-map), troverai un elenco dei livelli disponibili per la visualizzazione. Se hai bisogno di un accesso rapido a questa configurazione della mappa, utilizza lo strumento *Pulsante personalizzato*.

- Vai a [Aggiungi azione](../widgets/quick-action.md#custom-buttons): *Menu → Configura schermata → Pulsanti personalizzati → Azione rapida → Aggiungi azione → Configura mappa*.
- Aggiungi uno o più pulsanti QA per modificare la visibilità di un particolare livello meteo.


## Previsioni offline {#offline-forecast}

### Cache {#cache}

Quando la scheda Meteo è aperta, salvo diversa indicazione, le informazioni meteo richieste vengono scaricate dalla rete. Puoi utilizzare le [Previsioni meteo](#download-forecast) precaricate sui tuoi dispositivi. Le informazioni meteo vengono automaticamente memorizzate nella cache dopo il download e possono essere utilizzate offline fino alla scadenza delle previsioni.

:::tip
Sui dispositivi Android, puoi controllare quando i dati meteo sono stati scaricati toccando il *widget Meteo*. Il plugin di sviluppo OsmAnd deve essere abilitato.
![Date of weather cash android](@site/static/img/plugins/weather/weather_cash_andr.png)
:::

### Scarica previsioni {#download-forecast}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_android.png) ![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>

Per ogni paese, puoi scaricare le **Previsioni offline** (fino a 7 giorni). Più è vicino alla data corrente, più saranno accurate. Se vuoi utilizzare le previsioni meteo offline, devi scaricare i dati meteo in anticipo.

Nel menu di download delle previsioni, puoi ottenere informazioni e impostare parametri per mantenere aggiornati i dati meteo.

- **Creato** (*Android*) / **Aggiornato** (*iOS*). Mostra quando è stato effettuato l'ultimo aggiornamento.
- **Prossimo aggiornamento** (*iOS*). Quando sarà disponibile il prossimo aggiornamento.
- **Dimensione** (*Android*) / **Dimensione aggiornamenti** (*iOS*). Mostra la dimensione di tutti gli aggiornamenti.
- Pulsante **Aggiorna** (*Android*) / **Aggiorna ora** (*iOS*). Quando attivo, consente di aggiornare manualmente i dati meteo senza attendere un aggiornamento automatico.
- **Frequenza aggiornamenti** (*iOS*). Può essere impostata su 12 ore, 24 ore o settimanale.
- *Aggiorna solo tramite Wi-Fi* (*iOS*). Abilita questa opzione se non vuoi utilizzare i dati mobili per i download.
- Pulsante **Rimuovi** *cestino* (*Android*) / **Rimuovi previsioni** (*iOS*). Consente di eliminare tutti i dati delle previsioni per questa regione.
- Pulsante **Modifica** *matita* (*Android*). Consente di rinominare il file meteo.

:::info
OsmAnd genera una nuova previsione ogni 6 ore.
:::


## Widget meteo {#weather-widgets}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Scegli un pannello → <Translate android="true" ids="shared_string_weather"/>*

![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Scegli un pannello → <Translate ios="true" ids="shared_string_weather"/>*

![Weather widgets on iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)

</TabItem>

</Tabs>

I [widget meteo](../widgets/info-widgets.md#weather-widgets) come Temperatura, Pressione atmosferica, Vento, Nuvole e Precipitazioni mostrano i dati meteo attuali per il **punto centrale sulla mappa**.

- I widget meteo vengono visualizzati solo quando la [schermata Meteo](#weather-forecast-screen) è attiva.
- Per attivare i widget meteo, seleziona la voce di menu principale *Configura schermata*, il pannello su cui posizionarli e i widget richiesti dall'elenco.


## Articoli correlati {#related-articles}

- [Interagisci con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)

> *Ultimo aggiornamento: Novembre 2024*