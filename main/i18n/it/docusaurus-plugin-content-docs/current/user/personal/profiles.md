---
source-hash: 3f750dabb5ff34b12f68a43368b7fba39e6cc94ad7d466dc7206b1d8614c5f1b
sidebar_position: 4
title:  Profili (Impostazioni)
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

OsmAnd offre una varietà di profili predefiniti su misura per diverse attività, tra cui guida, ciclismo, camminata e attività più specializzate come sci e nautica. Questi profili sono progettati per migliorare la tua esperienza di navigazione in base all'attività che stai svolgendo. Ogni profilo include opzioni configurabili, che ti consentono di regolare le impostazioni e incorporare plugin aggiuntivi per soddisfare le tue preferenze.

- Alcuni profili, come *Sci* e *Barca*, dispongono di **funzionalità aggiuntive** che diventano disponibili solo quando i plugin corrispondenti sono abilitati.

     - I plugin possono essere attivati navigando su *Menu → Plugin → Visualizzazione mappa sci* o *Visualizzazione mappa nautica*.
     - L'abilitazione dei plugin fornisce ai profili le funzionalità essenziali per soddisfare i requisiti specifici di queste attività.

- È importante notare che alcuni profili, come **Camion**, **Moto**, **Ciclomotore**, **Treno**, **Aereo**, **Barca** e **Equitazione**, non sono attivati per impostazione predefinita.

     - Per accedere e utilizzare questi profili, è necessario abilitarli manualmente in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
     - Questo metodo aiuta a mantenere un elenco di profili organizzato e pertinente, attivando solo quelli necessari per attività specifiche.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile"/>* (Sfoglia mappa o qualsiasi altro profilo)
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Impostazioni Profili Android](@site/static/img/personal/profiles/profile_settings_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Impostazioni Profili iOS](@site/static/img/personal/profiles/profile_settings_ios.png)

</TabItem>

</Tabs>


## Configurazione del profilo {#profile-configuration}

:::caution Applicazione delle impostazioni solo a un profilo specifico
Tutte le impostazioni si applicano esclusivamente al profilo dell'applicazione attualmente selezionato.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni Profili Android](@site/static/img/personal/profiles/profile_settings_menu_1_andr.png)  ![Impostazioni Profili Android](@site/static/img/personal/profiles/profile_settings_menu_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni Profili iOS](@site/static/img/personal/profiles/profile_settings_menu_2_ios.png)

</TabItem>

</Tabs>

Questa sezione contiene tutte le impostazioni relative all'aspetto, alle opzioni di navigazione, alla visualizzazione della mappa, al menu delle impostazioni e alla schermata del profilo.


### Backup gratuito su Cloud {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile"/>*

![Funzioni cartella Preferiti Android](@site/static/img/personal/profile_settings_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Azioni Preferiti iOS](@site/static/img/personal/profile_settings_free_backup_ios.png)

</TabItem>

</Tabs>

OsmAnd ti permette di [eseguire il backup](../personal/osmand-cloud.md#osmand-start) delle impostazioni del tuo profilo applicazione su OsmAnd Cloud, garantendo che le tue configurazioni siano archiviate in modo sicuro e facilmente ripristinabili su versioni Android, iOS e Web. Questa funzione di backup protegge le tue impostazioni in caso di guasto del dispositivo o reinstallazione dell'app. Puoi beneficiare di questo piano speciale utilizzando [OsmAnd Start](../personal/osmand-cloud.md#osmand-start).  

Devi avere un account [OsmAnd Cloud](../personal/osmand-cloud.md#login) per utilizzare il *Backup gratuito delle impostazioni*. Se hai un abbonamento *OsmAnd Pro* o un account *OsmAnd Cloud* attivo, il banner promozionale non verrà visualizzato.


## Impostazioni generali {#general-settings}

Questa sezione contiene le impostazioni per il tema dell'applicazione e il pulsante della bussola, le unità e i formati dei dati della mappa e del profilo, i dispositivi di input esterni e molte altre impostazioni per creare la configurazione ottimale per il profilo scelto.

### Aspetto {#appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_appearance"/>*

![Impostazioni Generali Profili Aspetto Android](@site/static/img/personal/profiles/profiles_appearance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_appearance"/>*

![Impostazioni Generali Profili Aspetto iOS](@site/static/img/personal/profiles/profiles_appearance_3_ios.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="choose_osmand_theme"/>**. Consente di impostare un tema diurno e notturno per l'app, che può essere applicato a un profilo o a tutti contemporaneamente. Questa opzione non modifica le impostazioni della [modalità mappa](../map/vector-maps.md#map-mode).
  - *Tema <Translate android="true" ids="dark_theme"/>*
  - *Tema <Translate android="true" ids="light_theme"/>*
  - *<Translate android="true" ids="system_default_theme"/>*  
      Applica il tema di sistema. Per impostazione predefinita e per tutti i nuovi utenti, lo stile della mappa corrisponde al tema chiaro o scuro selezionato nelle impostazioni di sistema del dispositivo.
- **<Translate android="true" ids="rotate_map_to"/>**. Consente di scegliere [la modalità di orientamento della mappa](../map/interact-with-map.md#map-orientation-modes) per il profilo selezionato.
  - *<Translate android="true" ids="rotate_map_manual_opt"/>*
  - *<Translate android="true" ids="rotate_map_bearing_opt"/>*
  - *<Translate android="true" ids="rotate_map_compass_opt"/>*
  - *<Translate android="true" ids="rotate_map_north_opt"/>*

- **<Translate android="true" ids="map_screen_orientation"/>**. Imposta e blocca la posizione dello schermo nell'applicazione OsmAnd. Questa funzione non è supportata su iPad.
  - *<Translate android="true" ids="map_orientation_portrait"/>*
  - *<Translate android="true" ids="map_orientation_landscape"/>*
  - *<Translate android="true" ids="map_orientation_default"/>*  

- **[<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)** (*solo Android*). Apre il menu di controllo dello schermo, dove è possibile selezionare le opzioni per lo schermo del dispositivo durante la navigazione per risparmiare il consumo della batteria del dispositivo.  


### Unità e formati {#units--formats}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni Generali Profili Unità e formati Android](@site/static/img/personal/profiles/profiles_units_formats_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni Generali Profili Unità e formati iOS](@site/static/img/personal/profiles/profile_unitsformats_3_ios.png)

</TabItem>

</Tabs>

Nella sezione **Unità e formati**, è possibile regolare le unità di misura e i formati per allinearli alle proprie preferenze personali e agli standard regionali, garantendo che tutti i dati vengano visualizzati in modo comodo e familiare.


<!--

<table>
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Format</th>
            <th>Note</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4 align="left">**<Translate android="true" ids="driving_region"/>**</td>
            <td rowspan=2 align="left"><Translate android="true" ids="shared_string_automatic"/></td>
            <td align="left">According to the device location.</td>
        </tr>
        <tr>
            <td rowspan=2 align="left"><Translate android="true" ids="driving_region_europe_asia"/></td>
            <td align="left"><Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_km_m"/></td>
        </tr>
        <tr>
            <td align="left"><Translate android="true" ids="driving_region_us"/></td>
            <td align="left"><Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_mi_feet"/></td>
        </tr>
    </tbody>
</table>

-->

|  |  |  |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="driving_region"/>** | <Translate android="true" ids="shared_string_automatic"/> | <ul><li>In base alla posizione del dispositivo</li></ul> |
|            | <Translate android="true" ids="driving_region_europe_asia"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_us"/>   |  <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_mi_feet"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_canada"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_uk"/>  |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_mi_meters"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_japan"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_india"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_australia"/>   |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|  |  |  |
| **<Translate android="true" ids="unit_of_length"/>** | <Translate android="true" ids="si_km_m"/> | 1 km / 1000 m |
|          | <Translate android="true" ids="si_mi_feet"/> | 0.62 ml / 3281 ft (1000 m) |
|          | <Translate android="true" ids="si_mi_meters"/> | 0.62 ml / 1000 m |
|          | <Translate android="true" ids="si_mi_yard"/> | 1094 ya / 0.62 ml (1000 m) |
|          | <Translate android="true" ids="si_nm_ft"/>, <Translate android="true" ids="si_nm_mt"/> | 0.54 nmi / 3280.84 ft / 1000 m |
|  |  |  |
| **<Translate android="true" ids="coordinates_format"/>** | <Translate android="true" ids="dd_mm_mmmm_format"/> | Esempio: 50.12333° 19.93233° (Lat Long) |
|          | <Translate android="true" ids="dd_mm_mmm_format"/> | Esempio: 50°7.393′ 19°55.941′ (Lat Long)  |
|          | <Translate android="true" ids="dd_mm_ss_format"/> | Esempio: 50°7′23.6″ 19°55′56.4″ (Lat Long) 23°27′30″ |
|          | <Translate android="true" ids="navigate_point_format_utm"/> | 34N 5552876 423678 (Zona Nord Est) . [<Translate android="true" ids="utm_format_descr"/>](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) |
|          | <Translate android="true" ids="navigate_point_format_mgrs"/> | Esempio: 34U DA 23678 52873 . [<Translate android="true" ids="mgrs_format_descr"/>](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)  |
|          | <Translate android="true" ids="navigate_point_format_olc"/> | Esempio:  9F2X4WFJ+7W ([Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code) rappresenta un'area di 9m x 14m)  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid"/> (solo versione Android) | Esempio: 2 215 227.87, 830 915.9 ([Sistema di coordinate svizzero](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).)))  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid_plus"/> (solo versione Android) | Esempio: 4 215 227.87, 1 830 915.9 ([Sistema di coordinate svizzero](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).))) |
|  |  |  |
| **<Translate android="true" ids="angular_measeurement"/>** (*Android*) / **<Translate ios="true" ids="angular_units"/>** (iOS)| Gradi 180° | Tutti i valori angolari hanno letture da 0° a 180° e da 0° a -180°.  |
|          | Gradi 360° | Tutti i valori angolari hanno letture da 0° a 360°.  |
|          | <Translate android="true" ids="shared_string_milliradians"/> | Tutti i valori angolari hanno [valore in milliradianti](https://en.wikipedia.org/wiki/Milliradian).  |
|  |  |  |
| **<Translate android="true" ids="default_speed_system"/>** (*Android*) / **<Translate ios="true" ids="units_of_speed"/>** (iOS)| <Translate android="true" ids="si_kmh"/> | 90 km/h  |
|          | <Translate android="true" ids="si_mph"/> | 55.92 mph  |
|          | <Translate android="true" ids="si_m_s"/> | 30 m/s |
|          | <Translate android="true" ids="si_min_m"/> | 1.073 min/m |
|          | <Translate android="true" ids="si_min_km"/> | 0.667 min/km |
|          | <Translate android="true" ids="si_nm_h"/> | 48.59 kn |
|  |  |  |
| **<Translate android="true" ids="unit_of_volume"/>** | <Translate android="true" ids="litres"/> | Europa, Asia, America Latina, Canada, Giappone, India, Australia |
|  | <Translate android="true" ids="imperial_gallons"/> | Regno Unito e simili |
|  | <Translate android="true" ids="us_gallons"/> | Stati Uniti |
|  |  |  |
| **<Translate android="true" ids="shared_string_temperature"/>**| <Translate android="true" ids="system_default_theme"/> |  |
|  | <Translate android="true" ids="weather_temperature_celsius"/> |  |
|  | <Translate android="true" ids="weather_temperature_fahrenheit"/> |  |
|  |  |  |
| **<Translate android="true" ids="distance_during_navigation"/>** | <Translate android="true" ids="precise"/> | *Per misurazioni precise*, scegli come vengono visualizzate le informazioni sulla distanza nei widget di navigazione, come la distanza da un punto, la prossima svolta o una corsia specifica. |
|          | <Translate android="true" ids="round_up"/> | *Per una migliore leggibilità*, i numeri visualizzati nei widget di navigazione (distanza da un punto, prossima svolta o corsia) verranno arrotondati per avere meno cifre. <br/> Ad esempio: 3672 m *→* 3.6 km,&nbsp; 462 m *→* 400 m,&nbsp; 184 m *→* 150 m,&nbsp; 47 m *→* 40 m,&nbsp; 18 m *→* 15 m. |


### Altro {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_other"/>*

![Impostazioni Generali Profili Altro Android](@site/static/img/personal/profiles/profile_general_settings_other_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_others"/>*

![Impostazioni Generali Profili Altro iOS](@site/static/img/personal/profiles/profile_general_settings_other_ios.png)  

</TabItem>

</Tabs>

La sezione **Altro** fornisce impostazioni di profilo aggiuntive per personalizzare l'interfaccia e i controlli di input di OsmAnd. Queste impostazioni consentono di configurare dispositivi esterni, regolare le preferenze di animazione e attivare la modalità a schermo intero.

- [<Translate android="true" ids="external_input_device"/>](../map/interact-with-map.md#external-input-devices) – Collega controller esterni come *<Translate ios="true" ids="sett_wunderlinq_ext_input"/>*, *<Translate ios="true" ids="sett_generic_ext_input"/>*, o *<Translate android="true" ids="sett_parrot_ext_input"/>* per operare OsmAnd utilizzando pulsanti fisici.

- **<Translate android="true" ids="position_animation"/>** / **Animare la propria posizione** – L'icona della [posizione](../map/interact-with-map.md#my-location-and-zoom) si anima con ogni punto GPS ricevuto (una volta al secondo). Potrebbe essere evidente un leggero ritardo nel suo movimento, specialmente durante movimenti veloci o fluttuazioni del segnale GPS. È possibile regolare questo effetto utilizzando l'impostazione *Tempo di previsione* (solo Android): valori più alti aumentano la fluidità ma aggiungono ritardo, valori più bassi riducono il ritardo ma possono rendere il movimento meno fluido.

- **<Translate android="true" ids="use_volume_buttons_as_zoom"/>** (*solo Android*) – Abilita o disabilita la possibilità di utilizzare i pulsanti del volume del tuo dispositivo per [ingrandire](../map/interact-with-map.md#my-location-and-zoom) e rimpicciolire la mappa.

- [<Translate android="true" ids="use_kalman_filter_compass"/>](../map/interact-with-map.md#extra-compass-settings) (*solo Android*) – Smussa la rotazione della mappa con un [movimento graduale](https://en.wikipedia.org/wiki/Kalman_filter), riducendo gli spostamenti improvvisi di posizione. Questo introduce un piccolo ritardo (*meno di 1 secondo*).

- [<Translate android="true" ids="use_magnetic_sensor"/>](../map/interact-with-map.md#extra-compass-settings) (*solo Android*) – Utilizza il [sensore magnetico](https://en.wikipedia.org/wiki/Kalman_filter) del tuo dispositivo per stabilizzare la rotazione della mappa, riducendo i cambiamenti improvvisi. Anche questo introduce un leggero ritardo.

- **<Translate android="true" ids="tap_on_map_to_hide_interface"/>** (*solo Android*) – Tocca uno spazio vuoto sulla mappa per nascondere i pulsanti di controllo e i widget, massimizzando la visibilità della mappa.

- [<Translate android="true" ids="do_not_use_animations"/>](../map/interact-with-map.md#no-animations) (*solo Android*) – Disabilita le animazioni in modalità navigazione per transizioni dello schermo più veloci.



## Impostazioni di navigazione {#navigation-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Impostazioni di Navigazione Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Impostazioni di Navigazione iOS](@site/static/img/navigation/navigation_settings_overview_2_ios.png)

</TabItem>

</Tabs>

Per una panoramica dettagliata delle opzioni di navigazione, fare riferimento all'articolo [Impostazioni di navigazione](../navigation/guidance/navigation-settings.md), che spiega come configurare OsmAnd per un'esperienza di navigazione ottimale.

- [Tipo di navigazione](../navigation/guidance/navigation-settings.md#navigation-type) - Scegli la modalità di navigazione appropriata in base al tuo metodo di viaggio e alla disponibilità di internet.

- [Parametri del percorso](../navigation/guidance/navigation-settings.md#route-parameters) - Definisci come OsmAnd calcola i percorsi, incluse le preferenze per evitare determinate strade o selezionare tipi di percorso.

- [Avvisi a schermo](../navigation/guidance/navigation-settings.md#screen-alerts) - Abilita il *Widget Avvisi* per visualizzare notifiche in tempo reale per limiti di velocità, svolte e altre importanti condizioni stradali.

- [Istruzioni vocali](../navigation/guidance/navigation-settings.md#voice-prompts) - Abilita la guida audio per ricevere istruzioni di navigazione vocali durante la guida o la camminata lungo un percorso selezionato.

- [Parametri del veicolo](../navigation/guidance/navigation-settings.md#vehicle-parameters) – Configura impostazioni specifiche del veicolo come la velocità massima e l'altezza del veicolo per garantire un percorso accurato ed evitare strade con restrizioni.

- [Personalizza linea del percorso](../navigation/guidance/navigation-settings.md#customize-route-line) – Regola il colore, la larghezza e lo stile della linea del percorso visualizzata sulla mappa per una migliore visibilità durante la navigazione.

- [Mappa durante la navigazione](../navigation/guidance/navigation-settings.md#map-during-navigation) – Visualizza il posizionamento in tempo reale sulla mappa, traccia i progressi lungo il percorso e migliora l'orientamento utilizzando i punti di riferimento.

- [Guida dettagliata della traccia](../navigation/guidance/navigation-settings.md) – Migliora la navigazione passo-passo allineando il tuo percorso con le strade mappate. Impostazioni disponibili: *Chiedi ogni volta* o *Sempre*.

:::info
Non ci sono impostazioni di navigazione nel profilo *Sfoglia mappa*.  
:::


## Configura mappa {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,configure_map"/>*  
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* *→ Configura mappa*

![Profili Impostazioni Configura mappa Android](@site/static/img/personal/profiles/profile_configure_map_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,configure_map"/>*  

![Profili Impostazioni Configura mappa iOS](@site/static/img/personal/profiles/profile_configure_map_ios.png)

</TabItem>

</Tabs>

Il menu [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) ti permette di personalizzare le impostazioni di visualizzazione della mappa per il profilo selezionato, consentendo una migliore visualizzazione degli elementi chiave della mappa.  

Con questo menu, puoi:

- **Evidenziare elementi importanti della mappa**, inclusi [Punti Preferiti](../personal/favorites.md), [Indicatori di navigazione](../personal/markers.md), o speciali [Punti di Interesse](../map/point-layers-on-map.md#points-of-interest-pois) sulla mappa.

- **Visualizzare percorsi specifici e file GPX**, inclusi tracciati di terze parti per la navigazione o l'analisi.

- **Sovrapporre livelli mappa aggiuntivi**, come [informazioni sul terreno](../plugins/topography.md), **immagini satellitari**, o altre [mappe raster](../map/raster-maps.md) disponibili.

- **Abilitare la visualizzazione del trasporto pubblico**, mostrando [percorsi e fermate](../map/public-transport.md) per una migliore pianificazione del viaggio.

- **Regolare l'aspetto della mappa** selezionando uno [stile mappa](../map/vector-maps.md#default-map-styles) diverso per soddisfare le tue esigenze.


## Configura schermo {#configure-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  
- Vai a: *Menu → Impostazioni → Profilo App → Configura schermo*

![Menu Configura schermo](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Menu Configura schermo](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menu Configura schermo](@site/static/img/widgets/configure_screen_overview_ios_1.png)  ![Menu Configura schermo](@site/static/img/widgets/configure_screen_overview_ios_2.png)

</TabItem>

</Tabs>

Il [<Translate android="true" ids="map_widget_config"/>](../widgets/configure-screen.md) è un menu che ti permette di configurare i widget per il profilo selezionato da visualizzare sulla mappa. In questa schermata, puoi abilitare e configurare widget [Informativi](../widgets/info-widgets.md) e [di Navigazione](../widgets/nav-widgets.md), così come altri elementi.


## Aspetto del profilo {#profile-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![Aspetto Profili](@site/static/img/personal/profiles/profile_appearance_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![Aspetto Profili](@site/static/img/personal/profiles/profile_appearance_1_ios.png)

</TabItem>

</Tabs>

Le impostazioni di **Aspetto del profilo** ti consentono di personalizzare il nome e la rappresentazione visiva del tuo profilo. Puoi anche modificare l'aspetto di [La mia posizione](#my-location-appearance) qui. Mentre il *nome del profilo* deve essere unico, le *icone* e i *colori* possono essere gli stessi per profili diversi. Queste modifiche verranno applicate in varie parti dell'applicazione, come il menu di [Preparazione del percorso](../navigation/setup/route-navigation.md).


## Aspetto La mia posizione {#my-location-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![Aspetto La mia posizione](@site/static/img/personal/profiles/location_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![Aspetto La mia posizione](@site/static/img/personal/profiles/location_appearance_2_ios.png)

</TabItem>

</Tabs>

Le impostazioni di **Aspetto La mia posizione** ti consentono di personalizzare come la tua posizione viene visualizzata sulla mappa, sia quando sei fermo che in movimento. Il movimento viene rilevato dal sistema operativo quando la velocità del dispositivo è **maggiore di zero**.

### Angolo di visuale e Raggio di posizione {#view-angle-and-location-radius}

È possibile personalizzare gli elementi visivi relativi alla propria posizione e applicarli separatamente o insieme per le posizioni di **Riposo** e **Navigazione**. Sia in modalità 2D che 3D, l'*Angolo di visuale* e il *Raggio di posizione* vengono visualizzati con lo stesso colore selezionato per il [profilo di navigazione](#profile-appearance), direttamente sotto l'icona [La mia posizione](../map/interact-with-map.md#my-location-and-zoom).

- **<Translate android="true" ids="view_angle"/>** – Visualizza un'area a **forma di cono** che indica la direzione in cui si sta guardando.  
- **<Translate android="true" ids="location_radius"/>** – Mostra un'area **circolare** attorno alla tua icona, che rappresenta la precisione della tua posizione attuale.


### Icone 3D personalizzate {#custom-3d-icons}

Per un'esperienza più personalizzata, puoi creare e aggiungere **icone 3D personalizzate** a OsmAnd.  

***Come aggiungere un'icona di posizione 3D personalizzata:***

1. **Crea un modello 3D**. Progetta la tua icona nei formati [MTL e OBJ](https://en.wikipedia.org/wiki/Wavefront_.obj_file).

2. **Integra il modello in OsmAnd:**  
   - Sviluppa un [plugin personalizzato](../plugins/custom.md) utilizzando l'[esempio di plugin](https://osmand.net/uploads/plugins/model.plugin/1/model.plugin-1.osf) fornito.  
   - Posiziona i file della tua icona 3D nei seguenti percorsi:  

     `..osmand/models/icon_folder_name/custom_3d_file.mtl`  
     `..osmand/models/icon_folder_name/custom_3d_file.obj`

   - In alternativa, copia i file **MTL e OBJ** direttamente nella cartella OsmAnd utilizzando la stessa struttura di directory.  

### Modalità di orientamento della mappa {#map-orientation-modes-my-location}

Puoi controllare come si comporta l'icona **La mia posizione** utilizzando diverse [modalità di orientamento della mappa](../widgets/map-buttons.md#compass).  

- Se l'icona della posizione **oscilla o ruota** da fermo, passa dalla **Modalità Direzione di movimento** ([Ruota mappa per rilevamento](../map/interact-with-map.md#rotate-map-by-bearing)) a un'altra modalità.  
- Regola le impostazioni aggiuntive in *Menu → Impostazioni → Profili App → Aspetto del profilo → Opzioni*.
- Scopri di più sul rilevamento e il tracciamento della direzione nella sezione [Widget Rilevamento](../widgets/nav-widgets#bearing-widget).  


## Personalizzazione UI {#ui-customization}

<InfoAndroidOnly />

:::note Per i plugin non utilizzati
Per nascondere tutti i parametri di controllo dei [plugin](../plugins/index.md#configure-plugin) non utilizzati, disabilitali.
:::

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,ui_customization"/>*

![Personalizzazione UI Profilo Android](@site/static/img/personal/profiles/profile_ui_customization_android.png)  

Con la funzione di personalizzazione dell'interfaccia utente, è possibile regolare il numero di elementi in azioni come [<Translate android="true" ids="shared_string_drawer"/>](../start-with/main-menu.md#customize-advanced-use-of-android), [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) e [<Translate android="true" ids="context_menu_actions"/>](../map/map-context-menu.md). Le informazioni sul numero di elementi aggiunti rispetto a tutti quelli possibili si trovano sotto il titolo di ciascuna funzione.


### Cassetto {#drawer}

![Cassetto Profilo Android](@site/static/img/personal/profiles/profile_drawer_moving_android.png)  ![Ripristino Profilo Android](@site/static/img/personal/profiles/profile_drawer_reset_item_android.png)  

- **Elementi principali visibili** - Nella sezione *Personalizza UI*, puoi *riordinare, nascondere e ripristinare* gli elementi dal [Cassetto](../start-with/main-menu.md#customize-advanced-use-of-android) per adattarli alle tue preferenze.

- **<Translate android="true" ids="reset_to_default"/>** - Ripristina l'*elenco originale degli elementi* nel cassetto, annullando istantaneamente qualsiasi personalizzazione.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Consente di copiare il *layout del cassetto* da un altro profilo OsmAnd per mantenere una configurazione coerente tra i profili.

### Configurazione della mappa {#configuring-the-map}

![Menu Configura mappa Profilo Android](@site/static/img/personal/profiles/profile_configure_map_visible_andr.png) ![Menu Configura mappa Profilo Android](@site/static/img/personal/profiles/profile_configure_map_show_andr.png)

- **Menu Configura mappa** - Nella sezione *Personalizza UI*, puoi *riordinare o nascondere elementi* dal menu [Configura mappa](../map/configure-map-menu.md), consentendo un accesso rapido alle impostazioni utilizzate di frequente.

- **<Translate android="true" ids="reset_to_default"/>** - Ripristina l'*elenco originale degli elementi* nel menu Configura mappa, rimuovendo qualsiasi modifica.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Copia il *layout del menu Configura mappa* da un altro profilo OsmAnd.


### Azioni del menu contestuale {#context-menu-actions}

![Menu contestuale Profilo Android](@site/static/img/personal/profiles/profile_context_menu_visible_andr.png)  ![Ripristino menu Configura mappa Profilo Android](@site/static/img/personal/profiles/profile_context_menu_hidden_2_andr.png)

- **Menu contestuale della mappa** - Nella sezione Personalizza UI, puoi riordinare o nascondere elementi nel [menu contestuale della mappa](../map/map-context-menu.md) per ottimizzare l'accesso alle funzioni utilizzate di frequente.

- **<Translate android="true" ids="reset_to_default"/>** – Ripristina l'*elenco predefinito degli elementi* nel menu contestuale della mappa, annullando istantaneamente qualsiasi modifica.

- **<Translate android="true" ids="copy_from_other_profile"/>** – Copia la *disposizione del menu contestuale* da un altro profilo OsmAnd per mantenere la coerenza tra i diversi profili.


## Impostazioni plugin {#plugin-settings}

:::caution Accesso alle impostazioni del plugin
Per accedere alle impostazioni del plugin, è necessario prima [**abilitare il plugin**](../plugins/index.md#enable--disable) nella *sezione Plugin del menu principale*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugin_settings"/>*  

![Impostazioni Profilo Plugin Android](@site/static/img/personal/profiles/profile_plugins_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group"/>*

![Impostazioni Profilo Plugin iOS](@site/static/img/personal/profiles/profile_plugins_1_ios.png)

</TabItem>

</Tabs>

I plugin sbloccano funzionalità aggiuntive dell'applicazione e possono essere [a pagamento o gratuiti](../plugins/index.md#purchase). Alcuni plugin hanno le proprie [impostazioni](../plugins/index.md#plugin-settings), altri no. OsmAnd ti dà la possibilità di configurare i plugin per ogni profilo separatamente.


- **Registrazione viaggio**. Questo elemento apre le [impostazioni di registrazione del viaggio](../plugins/trip-recording.md#recording-settings) per il profilo selezionato, dove è possibile scegliere qualsiasi parametro per la registrazione dei tuoi viaggi.

- **Meteo**. I livelli interattivi della mappa [Meteo](../plugins/weather.md#weather-settings) ti consentono di monitorare la temperatura, la pressione dell'aria, la copertura nuvolosa, la velocità del vento e le precipitazioni nella tua città o in qualsiasi altra località su una mappa globale.

- **Note Audio / Video** (*solo Android*). Questo elemento apre le [impostazioni del plugin audio-video](../plugins/audio-video-notes.md#plugin-settings) per il profilo selezionato. Il plugin *Note Audio/Video* estende le funzionalità di OsmAnd consentendoti di creare le tue note in vari formati come foto, video o audio e associarle a una posizione geografica o alla posizione corrente.  

- **Modifica OpenStreetMap**. Questo elemento apre le [impostazioni del plugin di modifica OpenStreetMap](../plugins/osm-editing.md#settings) per il profilo selezionato. Con OsmAnd e il plugin di modifica OSM, puoi contribuire a OpenStreetMap.org creando o modificando PDI, aggiungendo o commentando note e caricando tracce GPX registrate.

- **Sensori esterni**. Quando tocchi un elemento nella sezione *Impostazioni plugin*, si aprono le [impostazioni dei sensori esterni](../plugins/external-sensors.md#sensor-settings) per il profilo selezionato. Il plugin Sensori esterni ti consente di leggere e registrare dati da sensori esterni wireless e visualizzarli utilizzando i widget nell'applicazione OsmAnd.

- **Accessibilità** (*solo Android*). Questo elemento apre le [impostazioni del plugin Accessibilità](../plugins/accessibility.md#plugin-settings) per il profilo selezionato. Le impostazioni del plugin Accessibilità ti consentono di personalizzare l'applicazione in base alle tue esigenze. Tutte le impostazioni si riferiscono al processo di navigazione e sono impostate individualmente per ogni profilo.

- **Sviluppo OsmAnd**. Questo menu apre le [impostazioni del plugin di sviluppo OsmAnd](../plugins/development.md#plugin-settings), dove è possibile configurare l'applicazione OsmAnd per scopi di test o esplorare le funzionalità future. Queste impostazioni sono destinate agli sviluppatori e non sono necessarie per l'uso normale dell'applicazione.  

  > ***La modifica delle impostazioni del plugin di sviluppo OsmAnd influisce su tutti i profili.***

- **Wikipedia** (solo iOS). Questo menu apre le *[impostazioni del plugin Wikipedia](../plugins/wikipedia.md#wikipedia-settings)*. Puoi selezionare la lingua in cui verranno visualizzati gli articoli e scegliere se scaricare le immagini da Wikipedia. Avere Wikipedia durante il tuo viaggio migliora la tua esperienza fornendo informazioni sui luoghi che visiti. Funziona offline e visualizza articoli di Wikipedia pertinenti direttamente sulla mappa relativi ai punti di interesse.

- **Metriche del veicolo**. Questo menu apre le *[impostazioni del plugin Metriche del veicolo](../plugins/vehicle-metrics.md#scanner-settings)*. Ti permette di collegare lo scanner OBD-II a OsmAnd.

- **Tracciatore di navi AIS** (solo Android). Questo menu apre le *[impostazioni del plugin Tracciatore di navi AIS](../plugins/ais-tracker.md#plugin-settings)*. Questo plugin ti permette di collegare il tracciatore AIS a OsmAnd.



## Azioni {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni Azioni Profili Android](@site/static/img/personal/profiles/profile_actions_settings_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni Azioni Profili iOS](@site/static/img/personal/profiles/profile_actions_settings_ios.png)  

</TabItem>

</Tabs>

Azioni con il profilo selezionato:  

- [Esporta profilo](https://osmand.net/docs/user/personal/import-export#export) - Esporta tutte le impostazioni del profilo selezionato in formato OSF.

- **Copia da un altro profilo** - Copia tutte le impostazioni da un altro profilo esistente nella tua applicazione OsmAnd.

- **Ripristina predefinito** - Riporta tutte le impostazioni allo stato iniziale.

- **Elimina profilo**:
    - Questa azione è disponibile solo per *Android* e solo per un *profilo personalizzato*.
    - I profili predefiniti non possono essere eliminati.
    - Per aggiungere un profilo, vai su *Menu → Impostazioni → Profili app → + Nuovo profilo*.


## Articoli correlati {#related-articles}

- [Gestisci Tracce](../personal/tracks/manage-tracks.md#import--export-track)
- [Cronologia Ricerche](../search/search-history.md#export-and-share)
- [Schemi di tavolozze di colori](../personal/color-palette-schemes.md)