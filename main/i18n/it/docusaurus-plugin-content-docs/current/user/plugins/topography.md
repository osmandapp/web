---
source-hash: cc730e8a24496682e893555771005dbb35c6dfe9f5ce92b2e7fd526bcba461b1
sidebar_position: 14
title: Topografia
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
Il plugin Topografia è una [funzione a pagamento](../purchases/index.md) dell'app OsmAnd.
:::

La topografia è una caratteristica importante della cartografia che fornisce informazioni per valutare visivamente il rilievo del terreno.
Le informazioni topografiche come le [Curve di livello](#contour-lines), il [Terreno](#terrain) (*Ombreggiatura* e *Pendenza*) e il [Rilievo 3D](#3d-relief) aiutano a effettuare una valutazione visiva della conformazione del terreno, visualizzando l'altitudine, il rilievo, gli estremi, la ripidità o i punti di uguale altezza.

Ogni funzione fornita da questo plugin è un livello di mappa indipendente che, quando abilitato, può essere visualizzato sopra o sotto la sorgente della mappa principale a seconda delle [impostazioni](../map/raster-maps.md#overlay-layer).

Il plugin Topografia fornisce l'accesso ai seguenti tipi di mappe:

- [Curve di livello](#contour-lines). Si tratta di una [mappa vettoriale](../map/vector-maps.md) rappresentata in [**metri** o **piedi**](#contour-lines-meters-or-feet). Le curve di livello mostrano i livelli di altitudine e aiutano a visualizzare il terreno.
- [Ombreggiatura](#hillshade-slope-and-altitude-layers). Tipi di mappe con ombreggiatura di colline e pendii rendono il rilievo più visibile e aiutano a interpretare visivamente il terreno.
- [Pendenza](#hillshade-slope-and-altitude-layers). Livello [raster](../map/raster-maps.md) che fornisce informazioni sulla ripidità dei pendii, che possono essere importanti per la pianificazione del percorso e la sicurezza.
- [Rilievo 3D](#3d-relief). È una [mappa vettoriale](../map/vector-maps.md) che fornisce una rappresentazione tridimensionale del terreno, disponibile solo con l'[abbonamento OsmAnd Pro](../purchases/index.md).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Curve di livello | Ombreggiatura | Pendenza |
|:---|:---|:---|
| ![Contour_lines_android](@site/static/img/plugins/contour-lines/Contour_lines_android.png) | ![Hillshade_android](@site/static/img/plugins/contour-lines/Hillshade_android.png) | ![Slopes_android](@site/static/img/plugins/contour-lines/Slopes_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Curve di livello | Ombreggiatura | Pendenza |
|:---|:---|:---|
| ![Contour_lines_ios](@site/static/img/plugins/contour-lines/Contour_lines_ios.png) | ![Hillshades_ios](@site/static/img/plugins/contour-lines/Hillshades_ios.png) | ![Slopes_ios](@site/static/img/plugins/contour-lines/Slopes_ios.png) |

</TabItem>

</Tabs>

#### Licenza per i dati DEM utilizzati da OsmAnd per il rilevamento del terreno {#license-for-dem-data-used-by-osmand-for-terrain-detection}

I dati di altitudine sulla mappa (tra 70 gradi di latitudine nord e 70 gradi di latitudine sud) sono stati ottenuti da misurazioni effettuate nell'ambito della *Shuttle Radar Topography Mission (SRTM)*. Essa ha utilizzato l'*Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*, il principale strumento di imaging nel *sistema di osservazione della Terra della NASA*.
Per informazioni complete, consultare la [Licenza](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>Dati DEM (DSM)</summary>
   - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. I dati originali utilizzati per questo prodotto sono stati forniti da AW3D di JAXA.<br/>
	- <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
	- <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummins, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
	- <a href="https://sonny.4lima.de">Modelli digitali del terreno (DTM) LiDAR di Sonny dell'Europa</a>.

</details>


## Parametri di configurazione richiesti {#required-setup-parameters}

Per visualizzare i dati di **Curve di livello** e **Terreno (Ombreggiatura, Pendenza)** sulla mappa:

1. **Acquisto**: [Piano di acquisto OsmAnd+, OsmAnd Maps+ o OsmAnd Pro](../plugins/index.md#purchase)
2. [Abilitare](../plugins/index.md#enable--disable) il plugin Topografia nella sezione Plugin del *Menu principale*.
3. [Scaricare](#download-maps): Mappe di curve di livello, ombreggiatura, pendenza o terreno (3D).
4. **Abilitare e regolare**: Curve di livello, Ombreggiatura o Pendenza per la visualizzazione della mappa.
5. Puoi anche guardare il [tutorial su YouTube](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg).

Per visualizzare il [**Rilievo 3D**](#3d-relief) è necessario acquistare il piano *OsmAnd Pro*, che include l'accesso al plugin Topografia.


## Scarica mappe {#download-maps}

Per iniziare a lavorare con la funzionalità del plugin, è necessario scaricare le mappe di interesse. Alcune mappe, come le curve di livello per le regioni montuose, possono essere piuttosto grandi, superando i 2 GB, e potrebbero non essere supportate su dispositivi obsoleti.

Per un lavoro stabile e per risparmiare risorse, è possibile scaricare una mappa non dell'intero paese, ma di sue regioni specifiche, se tali regioni sono offerte nell'applicazione. Le informazioni sulla dimensione di ogni tipo di mappa sono elencate sotto il loro nome.


### Mappe Rilievo 3D {#3d-relief-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*

![Download curve di livello Android](@site/static/img/plugins/contour-lines/downl_pack_andr_5.png)  ![Download curve di livello Android](@site/static/img/plugins/contour-lines/downl_pack_andr_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*

![Download curve di livello iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_1.png) ![Download curve di livello iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_2.png)

</TabItem>

</Tabs>

È necessario scaricare le mappe **Mappa terreno (3D)** per visualizzare Ombreggiatura, Pendenza e Rilievo 3D. Dopo aver scaricato le mappe, è possibile visualizzare le **Curve di livello** e il **Terreno** utilizzando la sezione [Configura mappa](../map/configure-map-menu.md) del *Menu principale*.

Se la mappa visualizzata sullo schermo non è scaricata, allora in *Menu → Configura mappa → Sezione Topografia → Terreno* in fondo all'elenco delle funzioni verrà visualizzata la sezione *Scarica mappe* con le mappe aggiuntive suggerite.


### Curve di livello (metri o piedi) {#contour-lines-meters-or-feet}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Finestra di dialogo download curve di livello Android](@site/static/img/plugins/contour-lines/contour_lines_download_dialogue_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Finestra di dialogo download curve di livello iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png)

</TabItem>

</Tabs>

Per le [**Curve di livello**](#contour-lines), è necessario determinare in quali [unità](../personal/profiles.md#units--formats) (metri o piedi) verranno visualizzate sulla mappa e scaricare la versione appropriata della mappa sul dispositivo.

**Le opzioni di unità non sono intercambiabili**, quindi se è necessario passare da metri a piedi o viceversa, è necessario disinstallare la versione precedente della mappa delle curve di livello per scaricare la nuova versione.


## Curve di livello {#contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,download_srtm_maps"/>*

![Menu curve di livello Android](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → Curve di livello*

![Menu curve di livello iOS](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_ios.png)

</TabItem>

</Tabs>

Le [curve di livello](../map/vector-maps.md#-contour-lines) sono una rappresentazione grafica delle elevazioni su una mappa e sono disponibili come mappe vettoriali. Formano linee corrispondenti a punti con la stessa altitudine, che formano contorni che consentono di determinare in quale direzione e quanto pende la superficie.

Quando si utilizza il [motore di rendering della mappa](../personal/global-settings.md#map-rendering-engine):

- **Versione 2 (OpenGL)**. Le curve di livello sono supportate sia nella visualizzazione 3D che nella modalità rilievo 3D.
- **Versione 1**. Le curve di livello non sono supportate quando si utilizzano mappe a tessere provenienti da Internet.

**Impostazioni aspetto**:

- *<Translate android="true" ids="download_srtm_maps"/>*. Attiva o disattiva le curve di livello.
- *<Translate android="true" ids="show_from_zoom_level"/>*. Definisci i [livelli di zoom](../map/interact-with-map.md#my-location-and-zoom) a cui le curve di livello sono visibili.
- *<Translate android="true" ids="srtm_color_scheme"/>*. Scegli il colore per la visualizzazione delle curve di livello.
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>*. Regola la larghezza delle curve di livello.
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>*. Seleziona la densità delle curve di livello (Bassa, Media, Alta). Densitá più elevate potrebbero influire sulla velocità di caricamento.
- *<Translate android="true" ids="maps_and_resources"/>*. Visualizza e scarica le mappe delle curve di livello per la regione corrente e le aree vicine.


## Terreno {#terrain}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Menu terreno Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_andr.png)  ![Menu terreno Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Menu terreno iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_ios.png)   ![Menu terreno iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_2_ios.png)

</TabItem>

</Tabs>

L'opzione **Terreno** abilita e consente di personalizzare tre funzioni come *Ombreggiatura*, *Pendenza* e *Altitudine*.
Funzioni specifiche:

- Solo un'opzione può essere abilitata contemporaneamente, Ombreggiatura, Pendenza o Altitudine.
- Se non vedi alcuna modifica dopo aver scaricato e abilitato la mappa corrispondente, si consiglia di riavviare l'applicazione.

Il menu **Terreno** include la selezione dello [schema di colori](#default-color-scheme) con l'opzione di [modificarlo](#modify-color-scheme) (per gli [abbonati Pro](../../user/purchases/index.md)), la possibilità di cambiare la trasparenza del livello sulla mappa ([visibilità](#visibility)) e selezionare il [livello di zoom](#zoom-levels) per la sua visualizzazione, informazioni sulla dimensione dei [dati memorizzati nella cache](#cache-size) e un elenco delle [mappe](../../user/personal/maps-resources.md) necessarie per visualizzare il livello.


## Livelli Ombreggiatura, Pendenza e Altitudine {#hillshade-slope-and-altitude-layers}

| Ombreggiatura | Pendenza | Altitudine |
| ------ | ------- | ------- |
| ![Ombreggiatura](../../../blog/2023-08-28-terrain/img/hillshade.png) | ![Pendenza](../../../blog/2023-08-28-terrain/img/slope.png) | ![Pendenza](../../../blog/2023-08-28-terrain/img/slope.png) |

L'**Ombreggiatura** si basa sulla simulazione dell'illuminazione della superficie utilizzando i dati del terreno. Questo metodo prevede la creazione di ombre e luci in base all'angolo della superficie rispetto alla sorgente luminosa. Di conseguenza, sulla mappa si vedono colline, valli e altri dettagli naturali del terreno.

La **Pendenza** determina l'angolo di pendenza della superficie in base ai dati di elevazione dei punti sulla mappa. I calcoli dell'angolo di pendenza vengono eseguiti considerando le variazioni di elevazione e le distanze tra i punti, e rappresentando questa variazione come un angolo di pendenza.

L'**Altitudine** rappresenta l'elevazione dei punti sulla mappa rispetto al livello del mare. Aiuta a capire come cambia il terreno in altezza. Questa funzione è particolarmente utile per attività come l'escursionismo o la mountain bike, dove conoscere l'altitudine può aiutare a pianificare i percorsi e gestire lo sforzo fisico. I dati di altitudine sono derivati da modelli di elevazione e forniscono una chiara visione dei punti alti e bassi, rendendo più facile valutare la difficoltà di un percorso o identificare picchi e valli lungo il viaggio.

Le mappe raster **Ombreggiatura**, **Pendenza** e **Altitudine** sono create in base a dati raster del terreno come i Modelli Digitali di Elevazione (DEM).

**Utilizzo:**

- *Navigazione.* Aiuta a identificare pendii ripidi, sia in discesa che in salita, il che può essere cruciale per una navigazione sicura.
- *Pianificare percorsi.* Aiuta a scegliere i percorsi più adatti, considerando il terreno.
- *Stima del terreno.* È conveniente per visualizzare il paesaggio, soprattutto se si cammina o si va in bicicletta.


### Schema di colori predefinito {#default-color-scheme}

| Ombreggiatura | Pendenza | Altitudine |
| ------ | ------- | ------- |
|![Ombreggiatura](@site/static/img/plugins/contour-lines/color_scheme_hillshade_menu_2.png)|![Pendenza](@site/static/img/plugins/contour-lines/color_scheme_slope_menu_2.png)| ![Menu](@site/static/img/plugins/contour-lines/color_scheme_altitude_menu.png) |

- L'*Ombreggiatura* utilizza tonalità scure per mostrare pendii, cime e pianure. Il Sole virtuale ha un azimut (direzione) fisso di 315 gradi.

- La *Pendenza* utilizza il colore per visualizzare la ripidità del terreno. Puoi leggere di più [qui](https://en.wikipedia.org/wiki/Grade_(slope)). Ogni colore corrisponde a un angolo di deviazione dall'orizzontale. Uno schema di colori *Pendenza* aggiuntivo, ***Valanga***, è disponibile nel menu **Modifica**.

- *Altitudine*. La mappa di altitudine colora ogni pixel in base all'altezza calcolata della mappa utilizzando il gradiente di uno schema di colori definito. Di solito, gli schemi di altitudine dipendono molto dalla posizione. Nelle aree montuose si preferirebbe distribuire i colori su un intervallo di altitudine più ampio e nelle aree pianeggianti si selezionerebbe uno schema di colori con un piccolo intervallo tra altitudine minima/massima.

> *Si prega di leggere l'articolo [Schema di colori](../personal/color-palette-schemes.md) per maggiori informazioni.*


### Modifica schema di colori {#modify-color-scheme}

:::info Funzione a pagamento
*Modifica schema di colori* è una funzione a pagamento di **OsmAnd Pro** per [iOS](../purchases/ios.md#pro-features) e [Android](../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Modifica schema di colori](@site/static/img/plugins/contour-lines/modify_color_scheme_1_andr.png)   ![Modifica schema di colori](@site/static/img/plugins/contour-lines/modify_color_scheme_2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Modifica schema di colori](@site/static/img/plugins/contour-lines/modify_color_scheme_1_ios.png)   ![Modifica schema di colori](@site/static/img/plugins/contour-lines/modify_color_scheme_2_ios.png)

</TabItem>

</Tabs>

La funzione *Modifica schema di colori* consente di selezionare uno schema di colori:

- Da un elenco [predefinito](#default-color-scheme).
- Da file di tavolozze di colori che hai creato sul tuo computer. I file personalizzati possono essere aggiunti a OsmAnd utilizzando lo [strumento di importazione/esportazione](../personal/import-export.md).

Puoi [modificare queste tavolozze](../personal/color-palette-schemes.md#edit-palette-file) per personalizzare l'aspetto di mappe e percorsi.


### Visibilità {#visibility}

| Visibilità 31% | Visibilità 74% |
| ------ | ------- |
| ![Visibilità ](../../../blog/2023-08-28-terrain/img/31.png) | ![Visibilità ](../../../blog/2023-08-28-terrain/img/74.png) |

La funzione *Visibilità* viene utilizzata per regolare la trasparenza delle ombre per l'Ombreggiatura e i colori utilizzati per rappresentare l'angolo nel parametro Pendenza.

### Livelli di zoom {#zoom-levels}

![Zoom](../../../blog/2023-08-28-terrain/img/zoom.png)

La funzione *Livelli di scala* consente di impostare i valori minimo e massimo dei livelli di zoom della mappa, che vanno da 4 a 19, ai quali verranno visualizzati i livelli della mappa Ombreggiatura o Pendenza.

### Dimensione cache {#cache-size}

La **dimensione della cache** è una sezione informativa che mostra la quantità di memoria sul dispositivo attualmente utilizzata per i dati *Terreno*. Ogni volta che si visualizzano informazioni *Ombreggiatura* o *Pendenza* su una mappa, tutti questi dati vengono temporaneamente archiviati nella cache per un accesso rapido e un uso successivo, evitando un carico aggiuntivo sul processore del dispositivo.

La **pulizia della cache** è talvolta necessaria per liberare spazio sul dispositivo o per risolvere potenziali problemi di prestazioni. Per svuotare la cache è necessario accedere alle *Impostazioni di sistema* del dispositivo, quindi il percorso può essere il seguente: *Applicazioni → OsmAnd → Archiviazione → Cancella cache*.


### Motore di rendering (Android) {#rendering-engine-android}

L'**Ombreggiatura** e la **Pendenza** vengono visualizzate e regolate in qualsiasi [motore di rendering della mappa](../personal/global-settings.md#map-rendering-engine) selezionato.

1. Se si utilizza il **motore di rendering della mappa Versione 1**, è necessario utilizzare il normale [download](../start-with/download-maps.md) delle mappe raster Ombreggiatura e Pendenza.

2. Se si utilizza il **motore di rendering della mappa Versione 2 (OpenGL)**:
    - È possibile continuare a utilizzare il normale tipo di download delle mappe raster Ombreggiatura e Pendenza. Tuttavia, per farlo, sarà necessario attivare il [plugin di sviluppo OsmAnd](../plugins/development.md) e abilitare l'impostazione [Usa formato raster SQLite per ombreggiatura e pendenza](../plugins/development.md#terrain).

    - In alternativa, è possibile utilizzare il download [Mappa terreno (3D)](../personal/maps-resources.md#paid-features-for-the-selected-location). Ciò consente di risparmiare spazio di memoria sul dispositivo e gli effetti Ombreggiatura, Pendenza e Rilievo 3D verranno generati da essi utilizzando il dispositivo.


### Azioni rapide {#quick-actions}

![QA per Terreno](@site/static/img/plugins/contour-lines/QA_for_terrain.png)

È possibile utilizzare i pulsanti *Azione rapida* sullo schermo della mappa per attivare la visibilità delle [Curve di livello](#contour-lines), dei livelli [Terreno](#terrain) e dello [schema di colori del Terreno](#default-color-scheme). A seconda del livello selezionato nel menu Configura mappa, l'assegnazione di un'azione *Terreno* al pulsante visualizzerà *Ombreggiatura*, *Pendenza* o *Altitudine*.

Le impostazioni principali per *Mostra o Nascondi tipi di mappa* si trovano nella sezione Topografia del menu Configura mappa. Nell'articolo [Azione rapida](../widgets/quick-action.md#configure-map), puoi trovare un elenco di livelli disponibili per la visualizzazione. Se hai bisogno di un accesso rapido a questa configurazione della mappa, utilizza lo strumento *Pulsante personalizzato*.

- Vai a [Aggiungi azione](../widgets/quick-action.md#custom-buttons): *Menu → Configura schermo → Pulsanti personalizzati → Azione rapida → Aggiungi azione → Configura mappa*.
- Aggiungi uno o più pulsanti QA per cambiare la visibilità di un particolare livello topografico.


## Rilievo 3D {#3d-relief}

:::info Funzione Pro
Rilievo 3D è una funzione a pagamento [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/>*

![Rilievo 3D](@site/static/img/plugins/contour-lines/3drelief_switch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/>*

![Rilievo 3D](@site/static/img/plugins/contour-lines/3drelief_switch_ios.png)

</TabItem>

</Tabs>

La funzione Rilievo 3D produce un rilievo in rilievo e fornisce una rappresentazione tridimensionale del paesaggio. Il Rilievo 3D funziona offline e può essere utilizzato con le [mappe vettoriali OsmAnd](../map/vector-maps.md) o con qualsiasi [mappa raster](../map/raster-maps.md#select-raster-maps) come [Sorgente mappa](../map/raster-maps.md#main) o come [Sottostrato/Sovrastrato](../map/raster-maps.md#overlay-layer).

***Come visualizzare il Rilievo 3D sulla mappa.***

- Acquista l'abbonamento **OsmAnd Pro** per [iOS](../purchases/ios.md#pro-features) o [Android](../purchases/android.md#pro-features).

- Vai a [*<Translate Android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md):
    - **Android**: scorri fino alla sezione *<Translate android="true" ids="srtm_plugin_name"/> → <Translate android="true" ids="relief_3d"/>*.
    - **iOS**: scorri fino alla sezione *<Translate ios="true" ids="srtm_plugin_name"/> → <Translate ios="true" ids="shared_string_terrain,shared_string_relief_3d"/>*.

- Scarica la [mappa del terreno (3D)](#3d-relief-maps) delle regioni, se necessario.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Livello mappa vettoriale | Livello mappa raster |
| ------ | ------- |
| ![Rilievo 3D](@site/static/img/plugins/contour-lines/3drelief_button_android_1.png) | ![Rilievo 3D](@site/static/img/plugins/contour-lines/3drelief_button_android_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Livello mappa vettoriale | Livello mappa raster |
| ------ | ------- |
| ![Rilievo 3D](@site/static/img/plugins/contour-lines/3drelief_button_ios_1.png)  | ![Rilievo 3D](@site/static/img/plugins/contour-lines/3drelief_button_ios_2.png) |

</TabItem>

</Tabs>


### Esagerazione verticale {#vertical-exaggeration}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/> → Esagerazione verticale*

![Esagerazione verticale Android](@site/static/img/plugins/contour-lines/vertical_exag_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/> → Esagerazione verticale*

![Esagerazione verticale iOS](@site/static/img/plugins/contour-lines/vertical_exag.png)

</TabItem>

</Tabs>

L'*esagerazione verticale* è un coefficiente speciale per il *rilievo 3D*. È possibile modificare la scala (*Esagerazione verticale*) da x1 a x3. Questa funzione consente di visualizzare contorni del terreno più fluidi con maggiori dettagli.


### Ombreggiatura e Rilievo 3D {#hillshade-and-3d-relief}

| Ombreggiatura | Rilievo 3D |
|--------|---------|
| ![Livelli terreno](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Livelli terreno](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

L'**Ombreggiatura** è un tipo di mappa che visualizza il terreno utilizzando le ombre, creando una rappresentazione visiva della pendenza e della forma della superficie terrestre.
Il **Rilievo 3D** è una funzione che aggiunge effetti tridimensionali alla mappa.

Se **disabiliti** l'*Ombreggiatura* e **abiliti** il *Rilievo 3D*, le ombre del rilievo saranno comunque visibili perché l'*Ombreggiatura* e il *Rilievo 3D* sono due modi diversi di visualizzare una mappa. L'*Ombreggiatura* crea ombre basate sul terreno e le aggiunge alla mappa, mentre il *Rilievo 3D* modella elementi 3D per mostrare la profondità e la forma del terreno, e le ombre fanno parte della visualizzazione. Queste funzioni possono lavorare in parallelo e disabilitare l'*Ombreggiatura* non influisce su come vengono visualizzati gli effetti 3D.

Quando l'**Ombreggiatura** è **abilitata**, un'immagine con ombre del rilievo appare più dettagliata, scura e a gradini rispetto a un'immagine *Rilievo 3D*. La spiegazione è che l'*Ombreggiatura* enfatizza i gradienti e i contrasti del terreno, creando un'immagine più nitida e dettagliata. La funzione *Rilievo 3D* conferisce alla mappa un aspetto più fluido e levigato, ammorbidendo il terreno e potenzialmente riducendo la visibilità di alcuni dettagli più fini.


## Combinare tipi di livelli {#combine-layer-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Curve di livello combinate con Ombreggiatura](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Curve di livello combinate con Pendenza](@site/static/img/plugins/contour-lines/5_slope_n_contour.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Curve di livello combinate con Ombreggiatura in iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Curve di livello combinate con Pendenza in iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>

OsmAnd consente di combinare più tipi di livelli di mappa per una visualizzazione più chiara.

- La combinazione di **Curve di livello** e **Ombreggiatura** è ottimale per stimare visivamente e numericamente la ripidità dei pendii montani.
- La combinazione di **Curve di livello** e livelli di **Pendenza** è la migliore per stimare la ripidità dei pendii e trovare punti con la stessa altezza.
- La combinazione dei livelli **Rilievo 3D** e **Ombreggiatura** consente di ottenere una rappresentazione più realistica e visiva del terreno, del rilievo e dei dettagli del paesaggio. Questa combinazione è particolarmente adatta per terreni montuosi e collinari.


## Articoli correlati {#related-articles}

- [Interagire con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)

### Problemi comuni e soluzioni {#common-issues-and-solutions}

<!-- Troubleshooting Steps-->

1. Come ripristinare l'acquisto del plugin Topografia (ex Curve di livello). [(verifica)](../troubleshooting/purchases_payments.md#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase).
2. Curve di livello, dati di elevazione o Rilievo 3D non vengono visualizzati. [(verifica)](../troubleshooting/setup.md#contour-lines-elevation-data-or-3d-relief-are-not-displayed)
3. La mappa passa automaticamente alla modalità 3D durante la navigazione:
    - Assicurati che il pulsante **Modalità 3D** sia disabilitato in **Menu → Configura schermo → Pulsanti → Pulsanti predefiniti**.
    - Controlla se sono abilitate funzioni del Terreno in **Menu → Configura mappa → Topografia** che potrebbero attivare un effetto 3D.

> *Ultimo aggiornamento: Gennaio 2025*