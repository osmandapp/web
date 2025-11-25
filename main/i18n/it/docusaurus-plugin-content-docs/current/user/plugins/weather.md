---
source-hash: e4e558095bec4b84738b88edc8b62c95c94dec6c02803344bb5fccb2d6f00e34
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

:::info Funzionalità a pagamento
 <ProFeature/> Il plugin Meteo è una [funzionalità a pagamento](../purchases/index.md) dell'app OsmAnd.  
:::

I livelli interattivi della mappa meteo nell'app OsmAnd consentono di monitorare la temperatura, la pressione atmosferica, la copertura nuvolosa, la velocità del vento e le precipitazioni nella propria città o in qualsiasi altro luogo su una mappa globale interattiva. Il plugin Meteo fornisce previsioni meteorologiche orarie per i 7 giorni successivi direttamente sulla mappa di OsmAnd. Le informazioni meteorologiche possono anche essere scaricate per l'uso offline.  

La fonte dei dati per il plugin Meteo è il [Global Forecasting System](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) gestito dal National Weather Service (NWS) degli Stati Uniti e dal Centro europeo per le previsioni meteorologiche a medio termine ([ECMWF](https://www.ecmwf.int/)).  


## Parametri di configurazione richiesti {#required-setup-parameters}

Le seguenti impostazioni sono *richieste* per visualizzare il Meteo sulla mappa di OsmAnd:

**1.** [Acquistare l'**abbonamento OsmAnd Pro**](../purchases/).

**2.** [Abilitare](../plugins/#enable--disable) il plugin Meteo nella sezione *Plugin* del *Menu principale*.

**3.** [Selezionare le **unità di misura**](#weather-settings) per i fenomeni meteorologici.

**4.** [Visualizzare i **livelli Meteo**](#customize-weather-layers) sulla mappa utilizzando la voce di menu Meteo nel menu Configura mappa (ricordarsi di ridurre lo zoom).

**5.** [Visualizzare le **previsioni del tempo**](#weather-forecast-screen) per l'area selezionata (questo menu permette di non ingombrare la schermata principale della mappa di OsmAnd con i livelli meteo).

**6.** [Scaricare](#offline-forecast) le previsioni del tempo se si prevede di utilizzarle offline.

**7.** [Abilitare i **widget Meteo**](#weather-widgets) se si desidera visualizzare quotidianamente informazioni meteorologiche aggiornate.  

:::caution Rendering richiesto
Il plugin Meteo è disponibile solo con il motore di rendering della mappa [Versione 2](../personal/global-settings/#map-rendering-engine) (OpenGL).  
:::


## Visualizzare il Meteo sulla mappa {#display-weather-on-the-map}

### Schermata Previsioni Meteo {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Andare su: *Plugin abilitato → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_new_2.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Andare su: *Plugin abilitato → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_dashbord_ios_new_2.png)

</TabItem>  

</Tabs>

Il menu laterale principale ha una voce di menu dedicata **Meteo** che fornisce un accesso rapido a tutti gli strumenti meteorologici. La *schermata delle previsioni meteo* visualizza informazioni su *temperatura*, *pressione atmosferica*, *velocità del vento*, *copertura nuvolosa* e *precipitazioni*.  

Nella parte inferiore dello schermo si trova la *barra degli strumenti meteo*. È possibile utilizzare i pulsanti dei giorni e il cursore del tempo per impostare l'ora esatta in cui verranno visualizzate le previsioni del tempo.

### Fonte dei dati {#data-source}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

![Data Source Android](@site/static/img/plugins/weather/weather_source_android.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

![Data Source iOS](@site/static/img/plugins/weather/weather_source_ios.png)

</TabItem>  

</Tabs>

È possibile scegliere quale fornitore di previsioni meteorologiche OsmAnd utilizza per visualizzare i dati sulla schermata Meteo:<br />
<Translate android="true" ids="shared_string_menu,shared_string_weather"/> → ⚙️ → *Scegli Fonte dei dati*

Sono supportati due fornitori di previsioni meteorologiche:

[**GFS**](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) **(Global Forecast System)** – la fonte predefinita gestita da NOAA/NWS. Fornisce dati meteorologici completi, inclusi livelli di temperatura, pressione, umidità, vento e nuvole.

[**ECMWF**](https://www.ecmwf.int/) **(European Centre for Medium-Range Weather Forecasts)** – una fonte alternativa di previsioni. Offre dati di alta qualità su temperatura, precipitazioni e pressione, ma non fornisce informazioni su vento o nuvole. Quando si utilizza ECMWF, i parametri non disponibili vengono visualizzati come “–” e i relativi livelli meteo appaiono disabilitati.

Come la Fonte dei dati influisce sulla visualizzazione del Meteo:
- La mappa, i grafici, la timeline e i valori meteo sullo schermo si aggiornano immediatamente dopo aver cambiato la fonte.
- Vengono mostrati solo i parametri disponibili per il fornitore selezionato.
- I widget meteo si aggiornano automaticamente per utilizzare la fonte scelta.
- Se in precedenza è stata scaricata una previsione meteo, OsmAnd utilizza i dati corrispondenti al fornitore selezionato.
- GFS ed ECMWF utilizzano cache separate. Cambiare la fonte carica o aggiorna i relativi tile meteo.


### Personalizzare i livelli Meteo {#customize-weather-layers}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Andare su: *Plugin abilitato → <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_customize_andr.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Andare su: *Plugin abilitato → <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>  

</Tabs>

Per visualizzare i livelli meteo sulla schermata della mappa di OsmAnd, è necessario utilizzare il menu *Configura mappa*. Andare al menu, trovare la voce *Meteo* nell'elenco (disponibile solo quando il plugin è abilitato) e toccarla.  

In questo menu è possibile modificare la **visibilità** e le [impostazioni](#weather-settings) di ogni livello, selezionare il tipo di linee di contorno e scaricare le [previsioni meteo offline a 7 giorni](#offline-forecast) (*disponibile solo per Android qui*).


### Impostazioni Meteo {#weather-settings}

<Tabs groupId="operating-systems" queryString="current-os">

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

È importante decidere in quali unità di misura è più comodo visualizzare i [dati Meteo](#weather-layers) sulla mappa e nella sezione [widget Meteo](#weather-widgets) dello schermo. È possibile scegliere le unità di misura appropriate per ogni parametro o utilizzare i valori predefiniti (*solo iOS*). Nella versione iOS dell'app OsmAnd, è anche possibile abilitare l'opzione di previsione offline per evitare di utilizzare il traffico mobile durante il viaggio.  

:::note
Nella versione iOS di OsmAnd, è possibile modificare le unità di misura e il livello di trasparenza nel menu che si apre dopo un tocco prolungato dell'icona del livello della mappa richiesto.  
:::

### Livelli Meteo {#weather-layers}

Tutti i dati meteorologici sono presentati come livelli di mappa separati. Per vedere i livelli meteo sulla mappa, è necessario ridurre lo zoom, poiché sono disponibili solo su scale di zoom 2-12. I livelli meteo utilizzano [tavolozze di colori per il meteo](../personal/color-palette-schemes.md#weather) per colorare la mappa; queste tavolozze possono essere [modificate](../personal/color-palette-schemes.md#edit-palette-file) se necessario.

| |  
|------------|  
| Il **livello Precipitazioni** visualizza informazioni sugli eventi meteorologici in cui l'acqua in diversi stati di aggregazione cade dal cielo al suolo. Le precipitazioni sono pioggia, neve, nevischio o grandine. La scala delle precipitazioni è graduata in millimetri (o pollici) di acqua che cade su 1 metro quadrato in 24 ore. 1 mm di pioggia corrisponde a 1 litro d'acqua per 1 metro quadrato. |  
|![Precipitation sheme](@site/static/img/plugins/weather/precipitation.png)|  
| La **Temperatura** esprime la percezione quantitativa del caldo e del freddo. Si misura in gradi. In OsmAnd è possibile scegliere tra la scala Celsius e quella Fahrenheit. |  
|![Temperature sheme](@site/static/img/plugins/weather/temperature.png)|  
| Il **Vento** è il movimento dell'aria causato dal riscaldamento non uniforme della Terra da parte del sole e dalla sua stessa rotazione. I venti possono variare da una leggera brezza a disastri naturali come uragani e tornado. In OsmAnd, la velocità del vento può essere visualizzata in metri al secondo (m/s), chilometri all'ora (km/h), miglia all'ora (mph) e nodi (kt). |  
|![Wind sheme](@site/static/img/plugins/weather/wind.png)|  
| La **Copertura nuvolosa** è la frazione media del cielo coperta da nuvole se osservata da una particolare posizione. Si misura in %. |  
|![Clouds sheme](@site/static/img/plugins/weather/clouds.png)|  
| La **Pressione atmosferica** è causata dal peso dell'aria al di sopra del punto di misurazione. Diminuisce con l'aumentare dell'altitudine. La pressione atmosferica può essere visualizzata in ettopascal (hPa), millimetri di mercurio (mmHg) e pollici di mercurio (inHg). |  
| ![Pressure sheme](@site/static/img/plugins/weather/pressure.png) |  
| L'**Animazione del vento** include rappresentazioni dinamiche che mostrano la direzione e la velocità del vento nella regione. |  
| ![Wind annimation](@site/static/img/plugins/weather/wind_annimation.gif) |  


### Combinare le mappe {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_contours.png)  

</TabItem>

</Tabs>

Per ottenere informazioni meteorologiche complete, è possibile utilizzare i livelli della mappa separatamente o combinarli facilmente. Al livello Meteo possono essere aggiunte anche isolinee di un tipo specifico. Basta toccare il pulsante *Livelli* o *Isolinee* sullo schermo.


### Azioni rapide per i livelli {#quick-actions-for-layers}

![QA Weather layers](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

Per attivare o disattivare la visibilità dei livelli meteo, è possibile utilizzare i pulsanti *Azione rapida* sulla schermata della mappa. Le impostazioni generali per mostrare o nascondere i livelli si trovano nella sezione [Meteo](#weather-forecast-screen) separata del *Menu principale*. Nell'articolo [Azione rapida](../widgets/quick-action.md#configure-map) troverete un elenco dei livelli disponibili per la visualizzazione. Se avete bisogno di un accesso rapido a questa configurazione della mappa, utilizzate lo strumento *Pulsante personalizzato*.

- Andare su [Aggiungi azione](../widgets/quick-action.md#custom-buttons): *Menu → Configura schermata → Pulsanti personalizzati → Azione rapida → Aggiungi azione → Configura mappa*.
- Aggiungere uno o più pulsanti di Azione rapida per modificare la visibilità di un particolare livello meteo.


## Previsioni offline {#offline-forecast}

### Cache {#cache}

Quando la scheda Meteo è aperta, se non diversamente specificato, le informazioni meteorologiche richieste vengono scaricate dalla rete. È possibile utilizzare le [previsioni meteo](#download-forecast) precaricate sui propri dispositivi. Le informazioni meteorologiche vengono automaticamente memorizzate nella cache dopo il download e possono essere utilizzate offline fino alla scadenza delle previsioni.  

:::tip
Sui dispositivi Android, è possibile controllare quando i dati meteo sono stati scaricati toccando il *widget Meteo*. Il plugin OsmAnd Development deve essere abilitato.  
![Date of weather cash android](@site/static/img/plugins/weather/weather_cash_andr.png)  
:::

### Scarica previsioni {#download-forecast}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_android.png) ![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>  

Per ogni paese è possibile scaricare le **Previsioni offline** (fino a 7 giorni). Più ci si avvicina alla data attuale, più le previsioni saranno accurate. Se si desidera utilizzare le previsioni del tempo offline, è necessario scaricare i dati meteorologici in anticipo.  

Nel menu di download delle previsioni, è possibile ottenere informazioni e impostare i parametri per mantenere aggiornati i dati meteorologici.  
  
- **Creato** (*Android*) / **Aggiornato** (*iOS*). Mostra quando è stato effettuato l'ultimo aggiornamento.  
- **Prossimo aggiornamento** (*iOS*). Quando sarà disponibile il prossimo aggiornamento.  
- **Dimensione** (*Android*) / **Dimensione aggiornamenti** (*iOS*). Mostra la dimensione di tutti gli aggiornamenti.  
- Pulsante **Aggiorna** (*Android*) / **Aggiorna ora** (*iOS*). Quando è attivo, consente di aggiornare i dati meteorologici manualmente senza attendere l'aggiornamento automatico.  
- **Frequenza di aggiornamento** (*iOS*). Può essere impostata su 12 ore, 24 ore o settimanale.  
- *Aggiorna solo tramite Wi-Fi* (*iOS*). Abilitare questa opzione se non si desidera utilizzare i dati mobili per i download.  
- Pulsante **Rimuovi** *cestino* (*Android*) / **Rimuovi previsioni** (*iOS*). Consente di eliminare tutti i dati delle previsioni per questa regione.
- Pulsante **Modifica** *matita* (*Android*). Consente di rinominare il file meteo.

**Nota:** Alcuni paesi, come gli Stati Uniti e il Canada, utilizzano un unico file di Previsioni offline per l'intero paese. Questo riduce il numero di download e semplifica la gestione dei dati meteorologici.

:::info  
I dati meteorologici vengono aggiornati ogni 6 ore (tutti e 4 gli aggiornamenti da [GFS](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) e 3 da [ECMWF](https://www.ecmwf.int/)) e diventano disponibili in OsmAnd con un breve ritardo, poiché il processo di calcolo richiede diverse ore prima del rilascio (di solito intorno alle 07:00 UTC).  
:::


## Widget Meteo {#weather-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Scegliere un pannello → <Translate android="true" ids="shared_string_weather"/>*

![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Scegliere un pannello → <Translate ios="true" ids="shared_string_weather"/>*

![Weather widgets on iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)  

</TabItem>

</Tabs>

I [widget Meteo](../widgets/info-widgets.md#weather-widgets) come Temperatura, Pressione atmosferica, Vento, Nuvole e Precipitazioni mostrano i dati meteorologici attuali per il **punto centrale della mappa**.

- I widget Meteo vengono visualizzati solo quando la [schermata Meteo](#weather-forecast-screen) è attiva.
- Per attivare i widget meteo, selezionare la voce di menu *Configura schermata*, il pannello su cui posizionarli e i widget richiesti dall'elenco.


## Articoli correlati {#related-articles}

- [Interagire con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)