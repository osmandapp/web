---
source-hash: b6825dd0d71b930019fbe0d833f4a10a026d26b710ff90aa5a633c3b96d23d66
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

OsmAnd offre una varietà di profili predefiniti personalizzati per diverse attività, tra cui guida, ciclismo, camminata e attività più specializzate come sci e navigazione. Questi profili sono progettati per migliorare la tua esperienza di navigazione in base all'attività in cui sei impegnato. Ogni profilo include opzioni configurabili, che ti consentono di regolare le impostazioni e incorporare plugin aggiuntivi per soddisfare le tue preferenze.

- Alcuni profili, come *Sci* e *Barca*, dispongono di **funzionalità aggiuntive** che diventano disponibili solo quando i plugin corrispondenti sono abilitati.

     - I plugin possono essere attivati navigando in *Menu → Plugin → Vista mappa sci* o *Vista mappa nautica*.
     - L'abilitazione dei plugin fornisce ai profili le funzionalità essenziali per soddisfare i requisiti specifici di queste attività.

- È importante notare che alcuni profili, come **Camion**, **Moto**, **Ciclomotore**, **Treno**, **Aereo**, **Barca** e **Equitazione**, non sono attivati per impostazione predefinita.

     - Per accedere e utilizzare questi profili, devi abilitarli manualmente in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
     - Questo metodo aiuta a mantenere un elenco organizzato e pertinente di profili attivando solo quelli richiesti per attività specifiche.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile"/>* (Sfoglia mappa o qualsiasi altro profilo)
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_ios.png)

</TabItem>

</Tabs>


## Configurazione del profilo {#profile-configuration}

:::caution Applicazione delle impostazioni solo a un profilo specifico
Tutte le impostazioni si applicano esclusivamente al profilo applicativo attualmente selezionato.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_1_andr.png)  ![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_menu_2_ios.png)

</TabItem>

</Tabs>

Questa sezione contiene tutte le impostazioni relative all'aspetto, alle opzioni di navigazione, alla visualizzazione della mappa, al menu delle impostazioni e alla schermata del profilo.


### Backup cloud gratuito {#free-cloud-backup}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile"/>*

![Favorites folder functions android](@site/static/img/personal/profile_settings_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Favorites actions ios](@site/static/img/personal/profile_settings_free_backup_ios.png)

</TabItem>

</Tabs>

OsmAnd ti consente di [eseguire il backup](../personal/osmand-cloud.md#osmand-start) delle impostazioni del profilo applicativo su OsmAnd Cloud, garantendo che le tue configurazioni siano archiviate in modo sicuro e facilmente ripristinabili tra le versioni Android, iOS e Web. Questa funzione di backup protegge le tue impostazioni in caso di guasto del dispositivo o reinstallazione dell'app. Puoi beneficiare di questo piano speciale utilizzando [OsmAnd Start](../personal/osmand-cloud.md#osmand-start).  

Devi avere un account [OsmAnd Cloud](../personal/osmand-cloud.md#login) per utilizzare il *Backup impostazioni gratuito*. Se hai un abbonamento *OsmAnd Pro* o un account *OsmAnd Cloud* attivo, il banner promozionale non verrà visualizzato.


## Impostazioni generali {#general-settings}

Questa sezione contiene le impostazioni per il tema dell'applicazione e il pulsante della bussola, le unità e i formati dei dati della mappa e del profilo, i dispositivi di input esterni e molte altre impostazioni per creare la configurazione ottimale per il profilo scelto.

### Aspetto {#appearance}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Appearance Android](@site/static/img/personal/profiles/profiles_appearance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Apperance iOS](@site/static/img/personal/profiles/profiles_appearance_3_ios.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="choose_osmand_theme"/>**. Ti consente di impostare un tema diurno e notturno per l'app, che può essere applicato a un profilo o a tutti contemporaneamente. Questa opzione non modifica le impostazioni della [modalità mappa](../map/vector-maps.md#map-mode).
  - *Tema <Translate android="true" ids="dark_theme"/>*
  - *Tema <Translate android="true" ids="light_theme"/>*
  - *<Translate android="true" ids="system_default_theme"/>*  
      Applica il tema di sistema. Per impostazione predefinita e per tutti i nuovi utenti, lo stile della mappa corrisponde al tema chiaro o scuro selezionato nelle impostazioni di sistema del dispositivo.
- **<Translate android="true" ids="rotate_map_to"/>**. Ti consente di scegliere [la modalità di orientamento della mappa](../map/interact-with-map.md#map-orientation-modes) per il profilo selezionato.
  - *<Translate android="true" ids="rotate_map_manual_opt"/>*
  - *<Translate android="true" ids="rotate_map_bearing_opt"/>*
  - *<Translate android="true" ids="rotate_map_compass_opt"/>*
  - *<Translate android="true" ids="rotate_map_north_opt"/>*

- **<Translate android="true" ids="map_screen_orientation"/>**. Imposta e blocca la posizione dello schermo nell'applicazione OsmAnd. Questa funzione non è supportata su iPad.
  - *<Translate android="true" ids="map_orientation_portrait"/>*
  - *<Translate android="true" ids="map_orientation_landscape"/>*
  - *<Translate android="true" ids="map_orientation_default"/>*  

- **[<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)** (*Solo Android*). Apre il menu di controllo dello schermo, dove puoi selezionare le opzioni per lo schermo del dispositivo durante la navigazione per risparmiare il consumo della batteria del dispositivo.  


### Unità e formati {#units--formats}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Profiles General Settings Units & formats Android](@site/static/img/personal/profiles/profiles_units_formats_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles General Settings Units & formats iOS](@site/static/img/personal/profiles/profile_unitsformats_3_ios.png)

</TabItem>

</Tabs>

Nella sezione **Unità e formati**, puoi regolare le unità di misura e i formati per allinearli alle tue preferenze personali e agli standard regionali, garantendo che tutti i dati vengano visualizzati in modo conveniente e familiare.


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
|          | <Translate android="true" ids="si_mi_feet"/> | 0,62 ml / 3281 ft (1000 m) |
|          | <Translate android="true" ids="si_mi_meters"/> | 0,62 ml / 1000 m |
|          | <Translate android="true" ids="si_mi_yard"/> | 1094 ya / 0,62 ml (1000 m) |
|          | <Translate android="true" ids="si_nm_ft"/>, <Translate android="true" ids="si_nm_mt"/> | 0,54 nmi / 3280,84 ft / 1000 m |
|  |  |  |
| **<Translate android="true" ids="coordinates_format"/>** | <Translate android="true" ids="dd_mm_mmmm_format"/> | Esempio: 50,12333° 19,93233° (Latitudine Longitudine) |
|          | <Translate android="true" ids="dd_mm_mmm_format"/> | Esempio: 50°7.393′ 19°55.941′ (Latitudine Longitudine)  |
|          | <Translate android="true" ids="dd_mm_ss_format"/> | Esempio: 50°7′23.6″ 19°55′56.4″ (Latitudine Longitudine) 23°27′30″ |
|          | <Translate android="true" ids="navigate_point_format_utm"/> | 34N 5552876 423678 (Zona Nord Est) . [<Translate android="true" ids="utm_format_descr"/>](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) |
|          | <Translate android="true" ids="navigate_point_format_mgrs"/> | Esempio: 34U DA 23678 52873 . [<Translate android="true" ids="mgrs_format_descr"/>](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)  |
|          | <Translate android="true" ids="navigate_point_format_olc"/> | Esempio:  9F2X4WFJ+7W ([Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code) rappresenta un'area di 9m x 14m)  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid"/> (Solo versione Android) | Esempio: 2 215 227.87, 830 915.9 ([Sistema di coordinate svizzero](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).)))  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid_plus"/> (Solo versione Android) | Esempio: 4 215 227.87, 1 830 915.9 ([Sistema di coordinate svizzero](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).))) |
|  |  |  |
| **<Translate android="true" ids="angular_measeurement"/>** (*Android*) / **<Translate ios="true" ids="angular_units"/>** (iOS)| Gradi 180° | Tutti i valori angolari hanno letture da 0° a 180° e da 0° a -180°.  |
|          | Gradi 360° | Tutti i valori angolari hanno letture da 0° a 360°.  |
|          | <Translate android="true" ids="shared_string_milliradians"/> | Tutti i valori angolari hanno [valore in milliradianti](https://en.wikipedia.org/wiki/Milliradian).  |
|  |  |  |
| **<Translate android="true" ids="default_speed_system"/>** (*Android*) / **<Translate ios="true" ids="units_of_speed"/>** (iOS)| <Translate android="true" ids="si_kmh"/> | 90 km/h  |
|          | <Translate android="true" ids="si_mph"/> | 55,92 mph  |
|          | <Translate android="true" ids="si_m_s"/> | 30 m/s |
|          | <Translate android="true" ids="si_min_m"/> | 1,073 min/m |
|          | <Translate android="true" ids="si_min_km"/> | 0,667 min/km |
|          | <Translate android="true" ids="si_nm_h"/> | 48,59 kn |
|  |  |  |
| **<Translate android="true" ids="unit_of_volume"/>** (*Solo Android*) | <Translate android="true" ids="litres"/> | Europa, Asia, America Latina, Canada, Giappone, India, Australia |
|  | <Translate android="true" ids="imperial_gallons"/> | Regno Unito e simili |
|  | <Translate android="true" ids="us_gallons"/> | Stati Uniti |
| **<Translate android="true" ids="distance_during_navigation"/>** | <Translate android="true" ids="precise"/> | *Per misurazioni precise*, scegli come vengono visualizzate le informazioni sulla distanza nei widget di navigazione, come la distanza da un punto, la svolta successiva o una corsia specifica. |
|          | <Translate android="true" ids="round_up"/> | *Per una migliore leggibilità*, i numeri visualizzati nei widget di navigazione (distanza da un punto, svolta successiva o corsia) verranno arrotondati per avere meno cifre. <br/> Ad esempio: 3672 m *→* 3,6 km,&nbsp; 462 m *→* 400 m,&nbsp; 184 m *→* 150 m,&nbsp; 47 m *→* 40 m,&nbsp; 18 m *→* 15 m. |


### Altro {#other}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_other"/>*

![Profiles General Settings Other Android](@site/static/img/personal/profiles/profile_general_settings_other_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_others"/>*

![Profiles General Settings Other iOS](@site/static/img/personal/profiles/profile_general_settings_other_ios.png)  

</TabItem>

</Tabs>

La sezione **Altro** fornisce impostazioni aggiuntive del profilo per personalizzare l'interfaccia e i controlli di input di OsmAnd. Queste impostazioni ti consentono di configurare dispositivi esterni, regolare le preferenze di animazione e attivare/disattivare la modalità a schermo intero.

- [<Translate android="true" ids="external_input_device"/>](../map/interact-with-map.md#external-input-devices) – Collega controller esterni come *<Translate ios="true" ids="sett_wunderlinq_ext_input"/>*, *<Translate ios="true" ids="sett_generic_ext_input"/>* o *<Translate android="true" ids="sett_parrot_ext_input"/>* per utilizzare OsmAnd tramite pulsanti fisici.

- **<Translate android="true" ids="use_volume_buttons_as_zoom"/>** (*Solo Android*) – Abilita o disabilita la possibilità di utilizzare i pulsanti del volume del dispositivo per [ingrandire e rimpicciolire](../map/interact-with-map.md#my-location-and-zoom) la mappa.

- [<Translate android="true" ids="use_kalman_filter_compass"/>](../map/interact-with-map.md#extra-compass-settings) (*Solo Android*) – Rende più fluida la rotazione della mappa con un [movimento graduale](https://en.wikipedia.org/wiki/Kalman_filter), riducendo gli spostamenti improvvisi della posizione. Ciò introduce un piccolo ritardo (*meno di 1 secondo*).

- [<Translate android="true" ids="use_magnetic_sensor"/>](../map/interact-with-map.md#extra-compass-settings) (*Solo Android*) – Utilizza il [sensore magnetico](https://en.wikipedia.org/wiki/Kalman_filter) del dispositivo per stabilizzare la rotazione della mappa, riducendo i cambiamenti bruschi. Anche questo introduce un leggero ritardo.

- **<Translate android="true" ids="tap_on_map_to_hide_interface"/>** (*Solo Android*) – Tocca uno spazio vuoto sulla mappa per nascondere i pulsanti di controllo e i widget, massimizzando la visibilità della mappa.

- [<Translate android="true" ids="do_not_use_animations"/>](../map/interact-with-map.md#no-animations) (*Solo Android*) – Disabilita le animazioni in modalità navigazione per transizioni dello schermo più veloci.

- **<Translate android="true" ids="position_animation"/>** (*Solo Android*) – L'icona della [posizione](../map/interact-with-map.md#my-location-and-zoom) si anima con ogni punto GPS ricevuto (una volta al secondo). Potrebbe essere notato un leggero ritardo nel suo movimento, specialmente durante movimenti veloci o fluttuazioni del segnale GPS. Puoi regolare questo effetto utilizzando l'impostazione *Tempo di previsione*: valori più alti aumentano la fluidità ma aggiungono ritardo, valori più bassi riducono il ritardo ma possono rendere il movimento meno fluido.


## Impostazioni di navigazione {#navigation-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_overview_2_ios.png)

</TabItem>

</Tabs>

Per una panoramica dettagliata delle opzioni di navigazione, consulta l'articolo [Impostazioni di navigazione](../navigation/guidance/navigation-settings.md), che spiega come configurare OsmAnd per un'esperienza di navigazione ottimale.

- [Tipo di navigazione](../navigation/guidance/navigation-settings.md#navigation-type) - Scegli la modalità di navigazione appropriata in base al tuo metodo di viaggio e alla disponibilità di Internet.

- [Parametri del percorso](../navigation/guidance/navigation-settings.md#route-parameters) - Definisci come OsmAnd calcola i percorsi, incluse le preferenze per evitare determinate strade o selezionare tipi di percorso.

- [Avvisi sullo schermo](../navigation/guidance/navigation-settings.md#screen-alerts) - Abilita il *Widget Avvisi* per visualizzare notifiche in tempo reale per limiti di velocità, svolte e altre importanti condizioni stradali.

- [Indicazioni vocali](../navigation/guidance/navigation-settings.md#voice-prompts) - Abilita la guida audio per ricevere istruzioni di navigazione vocali durante la guida o la camminata lungo un percorso selezionato.

- [Parametri del veicolo](../navigation/guidance/navigation-settings.md#vehicle-parameters) – Configura le impostazioni specifiche del veicolo come la velocità massima e l'altezza del veicolo per garantire un percorso accurato ed evitare strade con restrizioni.

- [Personalizza linea del percorso](../navigation/guidance/navigation-settings.md#customize-route-line) – Regola il colore, la larghezza e lo stile della linea del percorso visualizzata sulla mappa per una migliore visibilità durante la navigazione.

- [Mappa durante la navigazione](../navigation/guidance/navigation-settings.md#map-during-navigation) – Visualizza il posizionamento in tempo reale sulla mappa, monitora i progressi lungo il percorso e migliora l'orientamento utilizzando punti di riferimento.

- [Guida dettagliata del percorso](../navigation/guidance/navigation-settings.md) – Migliora la navigazione passo-passo allineando il tuo percorso con le strade mappate. Impostazioni disponibili: *Chiedi ogni volta* o *Sempre*.

:::info
Non ci sono impostazioni di navigazione nel profilo *Sfoglia mappa*.  
:::


## Configura mappa {#configure-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,configure_map"/>*  
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* *→ Configura mappa*

![Profiles Configure map Settings Android](@site/static/img/personal/profiles/profile_configure_map_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,configure_map"/>*  

![Profiles Configure map Settings iOS](@site/static/img/personal/profiles/profile_configure_map_ios.png)

</TabItem>

</Tabs>

Il menu [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) ti consente di personalizzare le impostazioni di visualizzazione della mappa per il profilo selezionato, consentendo una migliore visualizzazione degli elementi chiave della mappa.  

Con questo menu, puoi:

- **Evidenziare importanti elementi della mappa**, inclusi [Punti preferiti](../personal/favorites.md), [Segnalibri di navigazione](../personal/markers.md) o speciali [Punti di interesse](../map/point-layers-on-map.md#points-of-interest-pois) sulla mappa.

- **Visualizzare percorsi e file GPX specifici**, inclusi percorsi di terze parti per la navigazione o l'analisi.

- **Sovrapporre livelli aggiuntivi della mappa**, come [informazioni sul terreno](../plugins/topography.md), **immagini satellitari** o altre [mappe raster](../map/raster-maps.md) disponibili.

- **Abilitare la visualizzazione del trasporto pubblico**, mostrando [percorsi e fermate](../map/public-transport.md) per una migliore pianificazione del viaggio.

- **Regolare l'aspetto della mappa** selezionando uno [stile di mappa](../map/vector-maps.md#default-map-styles) diverso per soddisfare le tue esigenze.


## Configura schermo {#configure-screen}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

- Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  
- Vai a: *Menu → Impostazioni → Profilo app → Configura schermo*

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_1.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_2.png)

</TabItem>

</Tabs>

Il [<Translate android="true" ids="map_widget_config"/>](../widgets/configure-screen.md) è un menu che ti consente di configurare i widget per il profilo selezionato da visualizzare sulla mappa. In questa schermata, puoi abilitare e configurare i widget [Informativi](../widgets/info-widgets.md) e [Di navigazione](../widgets/nav-widgets.md), oltre ad altri elementi.


## Aspetto del profilo {#profile-appearance}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![Profiles Appearance](@site/static/img/personal/profiles/profile_appearance_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![Profiles Appearance](@site/static/img/personal/profiles/profile_appearance_1_ios.png)

</TabItem>

</Tabs>

Le impostazioni **Aspetto del profilo** ti consentono di personalizzare il nome e la rappresentazione visiva del tuo profilo. Puoi anche modificare l'aspetto di [La mia posizione](#my-location-appearance) qui. Mentre il *nome del profilo* deve essere univoco, *icone* e *colori* possono essere gli stessi tra diversi profili. Queste modifiche verranno applicate in varie parti dell'applicazione, come il menu [Preparazione del percorso](../navigation/setup/route-navigation.md).


### Aspetto della mia posizione {#my-location-appearance}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![My location Appearance](@site/static/img/personal/profiles/location_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![My location Appearance](@site/static/img/personal/profiles/location_appearance_2_ios.png)

</TabItem>

</Tabs>

Le impostazioni **Aspetto della mia posizione** ti consentono di personalizzare come viene visualizzata la tua posizione sulla mappa, sia quando sei fermo che in movimento. Il movimento viene rilevato dal sistema operativo quando la velocità del dispositivo è **maggiore di zero**.

#### 1. Angolo di visuale e raggio della posizione {#1-view-angle-and-location-radius}

Puoi personalizzare gli elementi visivi relativi alla tua posizione e applicarli separatamente o insieme per le posizioni **A riposo** e **In navigazione**. Per entrambe le modalità 2D e 3D, *Angolo di visuale* e *Raggio della posizione* vengono visualizzati nello stesso colore selezionato per il [profilo di navigazione](#profile-appearance), direttamente sotto l'icona [La mia posizione](../map/interact-with-map.md#my-location-and-zoom).

- **<Translate android="true" ids="view_angle"/>** – Visualizza un'area a **forma di cono** che indica la direzione in cui sei attualmente rivolto.  
- **<Translate android="true" ids="location_radius"/>** – Mostra un'area **circolare** intorno alla tua icona, che rappresenta la precisione della tua posizione attuale.


#### 2. Icone 3D personalizzate {#2-custom-3d-icons}

Per un'esperienza più personalizzata, puoi creare e aggiungere **icone 3D personalizzate** a OsmAnd.  

***Come aggiungere un'icona di posizione 3D personalizzata:***

1. **Crea un modello 3D**. Progetta la tua icona nei [formati MTL e OBJ](https://en.wikipedia.org/wiki/Wavefront_.obj_file).

2. **Integra il modello in OsmAnd:**  
   - Sviluppa un [plugin personalizzato](../plugins/custom.md) utilizzando l'[esempio di plugin](https://osmand.net/uploads/plugins/model.plugin/1/model.plugin-1.osf) fornito.  
   - Posiziona i file dell'icona 3D nei seguenti percorsi:  

     `..osmand/models/nome_cartella_icona/file_3d_personalizzato.mtl`  
     `..osmand/models/nome_cartella_icona/file_3d_personalizzato.obj`

   - In alternativa, copia i **file MTL e OBJ** direttamente nella cartella OsmAnd utilizzando la stessa struttura di directory.  

#### 3. Modalità di orientamento della mappa {#3-map-orientation-modes}

Puoi controllare il comportamento dell'icona **La mia posizione** utilizzando diverse [modalità di orientamento della mappa](../widgets/map-buttons.md#compass).  

- Se l'icona della posizione **oscilla o ruota** mentre è ferma, passa dalla **Modalità direzione movimento** ([Ruota mappa per rilevamento](../map/interact-with-map.md#rotate-map-by-bearing)) a un'altra modalità.  
- Regola le impostazioni aggiuntive in *Menu → Impostazioni → Profili app → Aspetto del profilo → Opzioni*.
- Scopri di più sul rilevamento del rilevamento e della direzione nella sezione [Widget rilevamento](../widgets/nav-widgets#bearing-widget).  


## Personalizzazione dell'interfaccia utente {#ui-customization}

<InfoAndroidOnly />

:::note Per i plugin non utilizzati
Per nascondere tutti i parametri di controllo dei [plugin](../plugins/index.md#configure-plugin) non utilizzati, disabilitali.
:::

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,ui_customization"/>*

![Profile UI Customization Android](@site/static/img/personal/profiles/profile_ui_customization_android.png)  

Con la funzione di personalizzazione dell'interfaccia utente, puoi regolare il numero di elementi in azioni come [<Translate android="true" ids="shared_string_drawer"/>](../start-with/main-menu.md#customize-advanced-use-of-android), [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) e [<Translate android="true" ids="context_menu_actions"/>](../map/map-context-menu.md). Le informazioni sul numero di elementi aggiunti rispetto a tutti gli elementi possibili si trovano sotto il titolo di ogni funzione.


### Cassetto {#drawer}

![Profile Drawer Android](@site/static/img/personal/profiles/profile_drawer_moving_android.png)  ![Profile Reset Android](@site/static/img/personal/profiles/profile_drawer_reset_item_android.png)  

- **Elementi principali visibili** - Nella sezione *Personalizza interfaccia utente*, puoi *riordinare, nascondere e ripristinare* gli elementi dal [Cassetto](../start-with/main-menu.md#customize-advanced-use-of-android) per soddisfare le tue preferenze.

- **<Translate android="true" ids="reset_to_default"/>** - Ripristina l'*elenco originale degli elementi* nel cassetto, annullando istantaneamente qualsiasi personalizzazione.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Ti consente di copiare il *layout del cassetto* da un altro profilo OsmAnd per mantenere una configurazione coerente tra i profili.

### Configurazione della mappa {#configuring-the-map}

![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_visible_andr.png) ![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_show_andr.png)

- **Menu Configura mappa** - Nella sezione *Personalizza interfaccia utente*, puoi *riordinare o nascondere gli elementi* dal menu [Configura mappa](../map/configure-map-menu.md), consentendo un rapido accesso alle impostazioni utilizzate frequentemente.

- **<Translate android="true" ids="reset_to_default"/>** - Ripristina l'*elenco originale degli elementi* nel menu Configura mappa, rimuovendo qualsiasi modifica.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Copia il *layout del menu Configura mappa* da un altro profilo OsmAnd.


### Azioni del menu contestuale {#context-menu-actions}

![Profile Context menu Android](@site/static/img/personal/profiles/profile_context_menu_visible_andr.png)  ![Profile Configure map menu Reset Android](@site/static/img/personal/profiles/profile_context_menu_hidden_2_andr.png)

- **Menu contestuale della mappa** - Nella sezione Personalizza interfaccia utente, puoi riordinare o nascondere gli elementi nel [menu contestuale della mappa](../map/map-context-menu.md) per ottimizzare l'accesso alle funzionalità utilizzate frequentemente.

- **<Translate android="true" ids="reset_to_default"/>** – Ripristina l'*elenco predefinito degli elementi* nel menu contestuale della mappa, annullando istantaneamente qualsiasi modifica.

- **<Translate android="true" ids="copy_from_other_profile"/>** – Copia la *disposizione del menu contestuale* da un altro profilo OsmAnd per mantenere la coerenza tra i diversi profili.


## Impostazioni plugin {#plugin-settings}

:::caution Accesso alle impostazioni del plugin
Per accedere alle impostazioni del plugin, devi prima [**abilitare il plugin**](../plugins/index.md#enable--disable) nella *sezione Plugin del menu principale*.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugin_settings"/>*  

![Profile Settings Plugins Android](@site/static/img/personal/profiles/profile_plugins_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group"/>*

![Profile Settings Plugins iOS](@site/static/img/personal/profiles/profile_plugins_1_ios.png)

</TabItem>

</Tabs>

I plugin sbloccano funzionalità aggiuntive dell'applicazione e possono essere [a pagamento o gratuiti](../plugins/index.md#purchase). Alcuni plugin hanno le proprie [impostazioni](../plugins/index.md#plugin-settings), altri no. OsmAnd ti offre la possibilità di configurare i plugin per ogni profilo separatamente.


- **Registrazione del viaggio**. Questo elemento apre le [impostazioni di registrazione del viaggio](../plugins/trip-recording.md#recording-settings) per il profilo selezionato, dove puoi scegliere qualsiasi parametro per registrare i tuoi viaggi.

- **Meteo**. I livelli interattivi della mappa [Meteo](../plugins/weather.md#weather-settings) ti consentono di monitorare la temperatura, la pressione atmosferica, la copertura nuvolosa, la velocità del vento e le precipitazioni nella tua città o in qualsiasi altra posizione su una mappa globale.

- **Note audio/video** (*Solo Android*). Questo elemento apre le [impostazioni del plugin audio-video](../plugins/audio-video-notes.md#plugin-settings) per il profilo selezionato. Il plugin *Note audio/video* estende la funzionalità di OsmAnd consentendoti di creare le tue note in vari formati come foto, video o audio e associarle a una posizione geografica o alla posizione corrente.  

- **Modifica OpenStreetMap**. Questo elemento apre le [impostazioni del plugin di modifica OpenStreetMap](../plugins/osm-editing.md#settings) per il profilo selezionato. Con OsmAnd e il plugin di modifica OSM, puoi contribuire a OpenStreetMap.org creando o modificando POI, aggiungendo o commentando note e caricando tracce GPX registrate.

- **Sensori esterni**. Quando tocchi un elemento nella sezione *Impostazioni plugin*, si aprono le [impostazioni dei sensori esterni](../plugins/external-sensors.md#sensors-settings) per il profilo selezionato. Il plugin Sensori esterni ti consente di leggere e registrare dati da sensori esterni wireless e visualizzarli utilizzando widget nell'applicazione OsmAnd.

- **Accessibilità** (*Solo Android*). Questo elemento apre le [impostazioni del plugin Accessibilità](../plugins/accessibility.md#plugin-settings) per il profilo selezionato. Le impostazioni del plugin Accessibilità ti consentono di personalizzare l'applicazione in base alle tue esigenze. Tutte le impostazioni si riferiscono al processo di navigazione e sono impostate individualmente per ogni profilo.

- **Sviluppo OsmAnd**. Questo menu apre le [impostazioni del plugin di sviluppo OsmAnd](../plugins/development.md#plugin-settings), dove puoi configurare l'applicazione OsmAnd per scopi di test o esplorare le funzionalità future. Queste impostazioni sono destinate agli sviluppatori e non sono richieste per l'uso normale dell'applicazione.  

  > ***La modifica delle impostazioni del plugin di sviluppo OsmAnd influisce su tutti i profili.***

- **Wikipedia**. Questo menu apre le *[impostazioni del plugin Wikipedia](../plugins/wikipedia.md#wikipedia-settings)*. Puoi selezionare la lingua in cui verranno visualizzati gli articoli e scegliere se scaricare le immagini da Wikipedia. Avere Wikipedia durante il tuo viaggio migliora la tua esperienza fornendo informazioni sui luoghi che visiti. Funziona offline e visualizza articoli di Wikipedia pertinenti direttamente sulla mappa relativi ai punti di interesse.


## Azioni {#actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Profiles Actions Settings Android](@site/static/img/personal/profiles/profile_actions_settings_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Actions Settings iOS](@site/static/img/personal/profiles/profile_actions_settings_ios.png)  

</TabItem>

</Tabs>

Azioni con il profilo selezionato:  

- [Esporta profilo](https://osmand.net/docs/user/personal/import-export#export) - Esporta tutte le impostazioni del profilo selezionato in formato OSF.

- **Copia da un altro profilo** - Copia tutte le impostazioni da un altro profilo esistente nella tua applicazione OsmAnd.

- **Ripristina impostazioni predefinite** - Riporta tutte le impostazioni allo stato iniziale.

- **Elimina profilo**:
    - Questa azione è disponibile solo per *Android* e solo per un *profilo personalizzato*.
    - I profili predefiniti non possono essere eliminati.
    - Per aggiungere un profilo, vai a *Menu → Impostazioni → Profili app → + Nuovo profilo*.


## Articoli correlati {#related-articles}

- [Gestisci tracce](../personal/tracks/manage-tracks.md#import--export-track)
- [Cronologia ricerche](../search/search-history.md#export-and-share)
- [Schemi tavolozza colori](../personal/color-palette-schemes.md)

> *Ultimo aggiornamento: Febbraio 2025*