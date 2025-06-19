---
source-hash: 27a4297a5019f248c9db5c74a4569bcd2b0de8e623b0c0ff1053a5740868f8b2
sidebar_position: 5
title:  Mappe vettoriali (Stili mappa)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Panoramica {#overview}

Le mappe vettoriali sono destinate a essere utilizzate come fonte di dati predefinita per OsmAnd, quindi **è necessario scaricarle sul dispositivo**. Le mappe vettoriali supportano un numero enorme di stili di mappa per diverse attività come ciclismo, escursionismo, guida in auto o motoslitta e altre.

I singoli stili di mappa possono essere personalizzati per evidenziare o nascondere oggetti specifici e per passare dalla modalità diurna a quella notturna. I dati delle mappe vettoriali possono essere aumentati da dati vettoriali e visualizzati nello stile di mappa predefinito, come le informazioni sulle *linee di contorno*. È possibile *creare il proprio stile di mappa OsmAnd* per visualizzare le informazioni richieste.


## Casi d'uso {#use-cases}

Gli stili di mappa personalizzabili sono uno dei principali vantaggi di OsmAnd. È possibile personalizzare la visualizzazione della mappa in base alle proprie esigenze e ai propri hobby, regolare la visualizzazione o la nascosta di determinati oggetti della mappa, le dimensioni e i colori di questi oggetti e modificare la scala di visualizzazione di determinati oggetti.


## Stili di mappa predefiniti {#default-map-styles}

OsmAnd offre molti stili di mappa e livelli di dati che si adattano per impostazione predefinita. Questa sezione descrive i principali per le modalità diurna e notturna.

1. **Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

2. **iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*


### OsmAnd {#osmand}

![Stile di mappa OsmAnd](@site/static/img/map/map-style-osmand-with-routes.png)

Lo stile di rendering standard delle mappe di OsmAnd bilancia dettaglio e semplicità, rendendolo ideale per l'esplorazione urbana e all'aperto. Dettaglia le caratteristiche della città come strade, edifici e fermate dei trasporti, semplificando al contempo l'ingombro visivo rendendo le mappe più chiare.

I principali vantaggi includono la mappatura dei percorsi, la qualità della superficie, le restrizioni di accesso, la segnaletica stradale, il rendering dei sentieri in scala SAC, le strutture sportive e i dettagli topografici come le linee di contorno.


### Vista Touring {#touring-view}

![Stile di mappa Touring view](@site/static/img/map/map-style-touring.png)

Stile Touring con alto contrasto e massimo dettaglio. Include tutte le opzioni dello stile OsmAnd predefinito, visualizzando il maggior numero possibile di dettagli, in particolare strade, sentieri e altri modi di viaggiare. Chiara distinzione dei tipi di strada in un *atlante turistico*. Adatto per l'uso diurno, notturno e all'aperto.

### UniRS e LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

Gli stili UniRS e LightRS sono stili d'autore che rendono le informazioni di base della mappa ma con schemi di colore diversi.

- **Stile UniRS**. Questo stile è una versione modificata di quello predefinito per migliorare il contrasto per i percorsi pedonali e ciclabili. Mantiene la classica combinazione di colori di Mapnik.

    ![Stile di mappa LightRS](@site/static/img/map/map-style-lightrs.png)

- **Stile LightRS**. Questo è uno stile di guida semplice che presenta una modalità notturna delicata. Evidenzia le strade con un colore arancione contrastante, attenua gli oggetti secondari della mappa e visualizza le caratteristiche topografiche come le linee di contorno.

    ![Stile di mappa UniRS](@site/static/img/map/map-style-unirs.png)

### Nautico {#nautical}

![Stile di mappa Nautico](@site/static/img/map/map-style-nautical.png)

Questo è uno stile di navigazione nautica che presenta boe, fari, rotte fluviali, rotte marittime, segnali, porti, segnali nautici e curve di livello di profondità. Maggiori informazioni nell'articolo [Vista mappa nautica](../plugins/nautical-charts.md).

### Inverno e Sci {#winter-and-ski}

![Stile di mappa Inverno e Sci](@site/static/img/map/map-style-winter-ski.png)

Questo è uno stile per gli sport sciistici che descrive le piste, gli impianti di risalita e le piste da sci di fondo, oltre a nascondere gli oggetti secondari della mappa. Lo **stile Inverno e Sci** è progettato per aiutarti nella navigazione durante gli sport invernali.

Puoi vedere le piste da sci e altri dettagli come la difficoltà delle piste e i segnali degli impianti di risalita. I principali vantaggi includono la comoda visualizzazione di piste, impianti di risalita e altre caratteristiche sciistiche. Meno oggetti secondari distraenti della mappa. Maggiori informazioni nell'articolo [Mappe sciistiche](../plugins/ski-maps.md).

### Topo {#topo}

![Stile di mappa Topo](@site/static/img/map/map-style-topo.png)

Questo stile è progettato per escursioni, campeggio e ciclismo nella natura. Presenta strade e caratteristiche naturali contrastanti, diversi tipi di sentieri, opzioni estese per le linee di contorno e dettagli aggiuntivi. È leggibile all'aperto. L'impostazione *Integrità superficie* consente di distinguere la qualità della strada.

### OSM-carto {#osm-carto}

![Stile di mappa OSM-carto](@site/static/img/map/map-style-osm-carto.png)

Questo stile imita lo [stile web predefinito di OpenStreetMap](https://www.openstreetmap.org/). Il codice sorgente della versione web è disponibile su [Github](https://github.com/gravitystorm/openstreetmap-carto), il codice OsmAnd è disponibile su [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Deserto {#desert}

![Stile di mappa Deserto](@site/static/img/map/map-style-desert.png)

Progettato per deserti e altre regioni scarsamente popolate, offre informazioni cartografiche più dettagliate.

### Fuoristrada {#offroad}

![Stile di mappa Fuoristrada](@site/static/img/map/map-style-offroad.png)

Progettato per la navigazione fuoristrada, questo stile si basa sul layout della mappa [Topo](#topo) e funziona bene con le immagini satellitari come sottofondo. Presenta strade principali più sottili per evidenziare sentieri, piste, percorsi ciclabili e altri percorsi fuoristrada, rendendolo ideale per esplorare percorsi non asfaltati in aree rurali o remote.

### Motoslitta {#snowmobile}

![Stile di mappa Motoslitta](@site/static/img/map/map-style-snowmobile.png)

Adattato per la navigazione in motoslitta, questo stile evidenzia sentieri, strade e piste adatti alle motoslitte. Evidenzia i percorsi specializzati nelle regioni innevate, offrendo una navigazione chiara su terreni coperti di neve dove le strade standard potrebbero non essere disponibili.


## Legenda della mappa {#map-legend}

La legenda della mappa funge da chiave per comprendere i simboli utilizzati nelle mappe OsmAnd. Spiega il significato dei vari simboli della mappa, inclusi punti, linee e aree. Ad esempio, simboli come linee blu sinuose indicano fiumi, mentre colori e forme diverse possono rappresentare edifici, sentieri e percorsi.

La legenda aiuta gli utenti a interpretare ciò che vedono sulla mappa. È possibile accedere alla legenda completa della mappa OsmAnd [qui](../map-legend/index.md).


## Caratteri mappa (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*

![Caratteri mappa versione Android](@site/static/img/map/map_fonts.png) ![Caratteri mappa versione](@site/static/img/map/map_fonts_1.png)

Per le mappe in cinese semplificato/tradizionale, giapponese e coreano, potrebbero apparire caratteri o simboli errati (come quadrati) se il dispositivo non dispone dei caratteri necessari. Questo problema si verifica durante il rendering dei nomi locali e può essere risolto scaricando i caratteri richiesti tramite OsmAnd.

Alcuni problemi relativi ai caratteri sono stati documentati su GitHub: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## * Linee di contorno {#-contour-lines}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Stile di mappa Linee di contorno](@site/static/img/map/contour_lines.png)

Le linee di contorno in OsmAnd vengono visualizzate come linee di elevazione sulle mappe vettoriali. Per utilizzarle, è necessario prima abilitare il [plugin Topografia](../plugins/topography.md), scaricare i dati regionali necessari e configurare la visualizzazione. Questa funzionalità non è abilitata per impostazione predefinita e richiede un [acquisto](../purchases/index.md).

Le linee di contorno sono compatibili con tutti gli stili di mappa e possono essere personalizzate tramite il [menu Linee di contorno](../plugins/topography.md#contour-lines). Per ulteriori dettagli, visita l'articolo [plugin Topografia](../plugins/topography.md).


## * Profondità nautica {#-nautical-depth}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

Le linee di contorno di profondità nautica rappresentano aree di uguale profondità, aiutando a visualizzare i cambiamenti della topografia subacquea. Questa funzionalità è disponibile in tutti gli stili e modalità di mappa e può essere regolata con o senza il plugin Vista mappa nautica abilitato.

Per ulteriori dettagli sulla vista mappa nautica, visita la pagina del [plugin Mappa nautica](../plugins/nautical-charts).


## Mostra confini {#show-borders}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![mostra-confini-andr](@site/static/img/map/show-borders-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![mostra-confini-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

Questa funzione consente di attivare/disattivare la visibilità dei confini per le mappe precedentemente scaricate dall'elenco delle mappe disponibili. Il suo scopo principale è aiutare a liberare la mappa principale nascondendo i contorni delle mappe scaricate, il che è particolarmente utile se si hanno molte mappe installate.

Per impostazione predefinita, i confini delle mappe appariranno quando si ingrandisce al livello 7 e scompariranno al livello di zoom 3 e inferiore.

:::tip Colore Mostra confini delle mappe scaricate
Quando la funzione *Mostra confini delle mappe scaricate* è abilitata, le mappe scaricate sono colorate di **Verde** sia nella versione Android che iOS di OsmAnd.

Su Android, le mappe archiviate sono mostrate in **Arancione**. In iOS, le mappe che possono essere aggiornate sono anche contrassegnate in **Arancione**.
:::


## Griglia coordinate {#coordinates-grid}

<InfoAndroidOnly />

Vai a: *Menu → Configura mappa → Mostra → Griglia coordinate*

![Menu Griglia coordinate](@site/static/img/map/coordinates_grid_settings_andr.png)

La funzione **Griglia coordinate** sovrappone una griglia di riferimento sulla mappa, consentendo di visualizzare le linee di latitudine e longitudine in base a diversi sistemi di coordinate. Questa funzione è utile per un riferimento preciso della posizione e per la navigazione geospaziale.

***Formati di coordinate disponibili:***

- **DD°MM′SS″** (Gradi, Minuti, Secondi)
- **DD.DDDDD°** (Gradi decimali - formato predefinito WGS84)
- **DD°MM.MMM′** (Gradi, Minuti decimali)
- **MGRS** (Sistema di riferimento della griglia militare)
- **UTM** (Trasverso di Mercatore universale - sistema di griglia basato su zone)

:::note

1. *Limitazioni della griglia UTM:*
    - Il livello di zoom minimo per visualizzare la griglia UTM è 9.
    - Viene visualizzata solo una zona UTM alla volta, poiché le zone sono separate da meridiani ogni 6°.

2. *La griglia WGS84 supporta tre diverse modalità:* gradi decimali, gradi+minuti e gradi+minuti+secondi.

:::

***Sistemi di coordinate supportati:***

OsmAnd supporta più **proiezioni di base** per la visualizzazione delle linee di griglia geografica:

| **Proiezione** | **Codice EPSG** | **Descrizione** |
|----------------|-------------|----------------|
| **WGS84**      | EPSG:4326   | Sistema di riferimento predefinito per latitudine/longitudine, utilizzato a livello globale. |
| **Mercatore**   | EPSG:3857   | Utilizzato per la mappatura basata sul web (Google Maps, OpenStreetMap, ecc.). |
| **UTM**        | EPSG:6387   | Divide il mondo in **60 zone** per un posizionamento locale accurato. |
| **MGRS**       | -           | Sistema di riferimento della griglia militare (estensione di UTM). |



***Impostazioni livello di zoom:***

- Le linee della griglia appaiono in base al livello di zoom, tra **2 e 22**.
- Le linee regolano dinamicamente le divisioni delle coordinate in base al livello di zoom.

**Per impostazione predefinita, l'app utilizza il formato di coordinate selezionato in** [Impostazioni generali](../personal/profiles.md#units--formats).


## Configura stile mappa {#configure-map-style}

### Modalità mappa {#map-mode}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*

![Modalità mappa](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Modalità mappa](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

La mappa può essere visualizzata con un tema chiaro o scuro in base alla modalità selezionata da un elenco di opzioni. Per impostazione predefinita e per tutti i nuovi utenti, lo [stile della mappa](#default-map-styles) si allinea al tema scelto nelle impostazioni di sistema del dispositivo.

- **<Translate android="true" ids="daynight_mode_day"/>**. Visualizza sempre la mappa con un tema chiaro per una visibilità ottimale di giorno.

- **<Translate android="true" ids="daynight_mode_night"/>**. Mostra sempre la mappa con un tema scuro, ideale per la notte o condizioni di scarsa illuminazione.

- **Alba / Tramonto**. Passa automaticamente tra temi diurni e notturni in base agli orari locali di alba e tramonto, che sono dettagliati in questa scheda nell'app.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*solo Android*). Utilizza il sensore di luce del dispositivo per passare automaticamente tra temi chiari e scuri in base ai livelli di luce ambientale.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. La visualizzazione della mappa si adatta al tema generale dell'app, mostrando la modalità diurna nel tema chiaro e la modalità notturna nel tema scuro.


### Dettagli {#details}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">


*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Mostra poligoni, sentieri, punti e segnali sulla mappa a basso zoom. Ciò significa che puoi vedere più dettagli sulla mappa a bassa ingrandimento. Nota che il rendering sul tuo dispositivo potrebbe non essere veloce.
    ![Parametro mappa - Più dettagliato](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Mostra il tipo di superficie stradale. Il colore della strada ti aiuta a capire qual è la superficie stradale, come asfalto, erba o sabbia. Consulta la [Legenda della mappa](../map-legend/index.md).
    ![Parametro mappa - Superficie stradale](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Indica la qualità della strada. Indica la scorrevolezza (pendenza) della strada. Quanto sono scorrevoli le tue strade: buone, cattive, forse terribili, ecc. Guarda la [Legenda della mappa](../map-legend/index.md) per determinare la scorrevolezza della tua strada.
    ![Parametro mappa - Scorrevolezza stradale](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. Mostra l'accessibilità della strada: privata o consentita, solo per emergenza o strada a pedaggio. Visualizza la [Legenda della mappa](../map-legend/index.md) per trovare le strade disponibili.
    ![Parametro mappa - Accesso stradale](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. La funzione [Zone a basse emissioni (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) visualizza bordi verdi ed etichette "LEZ" sulle mappe per le aree nelle città dove l'accesso è limitato per alcuni veicoli inquinanti. Le LEZ mirano a migliorare la qualità dell'aria limitando l'ingresso ai veicoli che soddisfano specifici standard di emissione. L'utilizzo di questa funzione aiuta gli utenti a evitare sanzioni identificando e navigando intorno a queste zone verdi, garantendo la conformità alle normative ambientali locali durante gli spostamenti nei centri urbani.

    ![Parametro mappa - Zone a basse emissioni](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Diverse categorie di edifici, come residenziali, industriali e commerciali, sono codificate per colore. Fare riferimento alla [Legenda della mappa](../map-legend/index.md) per i dettagli.
    ![Parametro mappa - Edifici colorati](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Visualizza strade illuminate e non illuminate, nonché percorsi sotterranei e temporaneamente illuminati. Controlla la [Legenda della mappa](../map-legend/index.md) per i dettagli.
    ![Parametro mappa - Illuminazione stradale](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Progettata per i mappatori, questa funzione mostra riferimenti, osservazioni e commenti di altri utenti sulla mappa.
    ![Parametro mappa - Assistente mappa](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Mostra le curve di livello di profondità marina. È necessario installare il [plugin Nautico](../plugins/nautical-charts) e scaricare le mappe nautiche.
    ![Parametro mappa - Curve di livello di profondità](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Mostra bordo verde ed etichette "NR" per [Territorio riserva naturale](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Evidenzia le aree protette con un bordo verde e l'etichetta "NR" per le zone di conservazione della fauna selvatica.

    &nbsp;&nbsp;&nbsp;![Parametro mappa - Riserva naturale](@site/static/img/map/nature-reserve.png)


<!--
| | | |
|--------|--------|--------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Mostra poligoni, sentieri, punti e segnali sulla mappa a basso zoom. Ciò significa che puoi vedere più dettagli sulla mappa a bassa ingrandimento. Nota che il rendering sul tuo dispositivo potrebbe non essere veloce.| ![Parametro mappa - Più dettagliato](@site/static/img/map/map-parameter-more-details.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Mostra il tipo di superficie stradale. Il colore della strada ti aiuta a capire qual è la superficie stradale, come asfalto, erba o sabbia. Consulta la [Legenda della mappa](../map-legend/index.md).| ![Parametro mappa - Superficie stradale](@site/static/img/map/map-parameter-road-surface.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Indica la qualità della strada. Indica la scorrevolezza (pendenza) della strada. Quanto sono scorrevoli le tue strade: buone, cattive, forse terribili, ecc. Guarda la [Legenda della mappa](../map-legend/index.md) per determinare la scorrevolezza della tua strada.| ![Parametro mappa - Scorrevolezza stradale](@site/static/img/map/map-parameter-road-smoothness.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  Mostra l'accessibilità della strada: privata o consentita, solo per emergenza o strada a pedaggio. Visualizza la [Legenda della mappa](../map-legend/index.md) per trovare le strade disponibili. | ![Parametro mappa - Accesso stradale](@site/static/img/map/map-parameter-road-access.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | La funzione [Zone a basse emissioni (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) visualizza bordi verdi ed etichette "LEZ" sulle mappe per le aree nelle città dove l'accesso è limitato per alcuni veicoli inquinanti. Le LEZ mirano a migliorare la qualità dell'aria limitando l'ingresso ai veicoli che soddisfano specifici standard di emissione. L'utilizzo di questa funzione aiuta gli utenti a evitare sanzioni identificando e navigando intorno a queste zone verdi, garantendo la conformità alle normative ambientali locali durante gli spostamenti nei centri urbani.| ![Parametro mappa - Zone a basse emissioni](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. | Diverse categorie di edifici, come residenziali, industriali e commerciali, sono codificate per colore. Fare riferimento alla [Legenda della mappa](../map-legend/index.md) per i dettagli. | ![Parametro mappa - Edifici colorati](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. | Visualizza strade illuminate e non illuminate, nonché percorsi sotterranei e temporaneamente illuminati. Controlla la [Legenda della mappa](../map-legend/index.md) per i dettagli. | ![Parametro mappa - Illuminazione stradale](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. | Progettata per i mappatori, questa funzione mostra riferimenti, osservazioni e commenti di altri utenti sulla mappa. | ![Parametro mappa - Assistente mappa](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. | Mostra le curve di livello di profondità marina. È necessario installare il [plugin Nautico](../plugins/nautical-charts) e scaricare le mappe nautiche.| ![Parametro mappa - Curve di livello di profondità](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. | Mostra bordo verde ed etichette "NR" per [Territorio riserva naturale](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Evidenzia le aree protette con un bordo verde e l'etichetta "NR" per le zone di conservazione della fauna selvatica.| ![Parametro mappa - Riserva naturale](@site/static/img/map/nature-reserve.png)|
-->

### Percorsi {#routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Percorsi mappa - percorsi ciclabili](@site/static/img/map/map-routes-cycle-routes.png) ![Percorsi mappa - rete escursionistica](@site/static/img/map/map-routes-hiking-network.png)

Un percorso è un tracciato predeterminato che deve essere seguito per raggiungere una destinazione specifica. Un percorso può essere ottimizzato per diversi tipi di viaggio, come ciclismo, escursionismo, corsa, trasporto pubblico e altri. Puoi leggere di più sui percorsi e i loro tipi nell'articolo [Percorsi](../map/routes.md).


### Trasporti {#transport}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>

Quando si naviga nelle città, è necessaria una visualizzazione più contrastante dei trasporti pubblici e delle fermate. È possibile toccare una fermata del trasporto pubblico e selezionare uno dei percorsi o delle fermate dall'elenco. In questa impostazione vengono visualizzate anche le rotte dei treni.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Mostra le fermate dei trasporti pubblici.
    ![Fermate trasporti mappa](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Mostra le rotte di autobus, filobus e navette.
    ![Autobus trasporti mappa](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Mostra le rotte di tram e treni.
    ![Tram trasporti mappa](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Mostra le rotte della metropolitana.
    ![Metropolitana trasporti mappa](@site/static/img/map/map-transport-subway.png)

### Nascondi {#hide}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>

Per migliorare la visibilità della mappa, potrebbe essere necessario nascondere alcuni oggetti. Ad esempio, puoi nascondere l'acqua quando utilizzi le [mappe online satellitari con il livello Sottostante](../map/raster-maps.md#select-raster-maps).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Nascondi i confini regionali all'interno dei paesi, ma i confini di stato sono visibili.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Nascondi tutti i poligoni di oggetti naturali, funzione speciale per [Livello Sottostante/Sovrapposto](../map/raster-maps.md#select-raster-maps).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Nascondi tutti i poligoni degli edifici.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Nascondi tutti i poligoni d'acqua (mari, laghi, bacini, ecc.)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Nascondi i numeri civici sulla mappa.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Nascondi gli oggetti proposti - quegli oggetti che sono pianificati per la costruzione ma hanno solo un progetto (strade, incroci, edifici e altri progettati).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Nascondi le icone dei POI dalla mappa. Tuttavia, le etichette di questi POI appariranno comunque sulla mappa.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Nascondi le etichette dei POI dalla mappa. Tuttavia, le icone dei POI appariranno comunque sulla mappa.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Nascondi tutti gli oggetti sotterranei, come tunnel, passaggi, piani, ecc. Speciale per liberare le mappe nelle città da oggetti non utili.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Nascondi tutti gli oggetti sopraelevati. Speciale per vedere solo oggetti sotterranei come tunnel, passaggi, ecc.

### Stile stradale {#road-style}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Impostazioni speciali per le strade, dove è possibile cambiare i colori per abbinarli all'atlante stradale o aggiungere strade ad alto contrasto o contorni audaci per le strade.

- **<Translate android="true" ids="rendering_value_default_name"/>**. Stile predefinito per le autostrade. Guarda la [Legenda della mappa](../map-legend/index.md).
![Stile stradale mappa predefinito](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Stile dell'atlante stradale tedesco.
![Stile stradale mappa tedesco](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Stile dell'atlante stradale americano.
![Stile stradale mappa americano](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. Alto contrasto delle strade.
![Stile stradale mappa alto contrasto](@site/static/img/map/map-road-style-high-contrast.png)
- **Pallido**. Colori meno contrastanti delle strade.
![Stile stradale mappa contorno audace](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Contorno audace per le strade.
![Stile stradale mappa contorno audace](@site/static/img/map/map-road-style-bold-outline.png)


### Dimensione testo {#text-size}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>

- **100%**
    ![Dimensione testo mappa 100%](@site/static/img/map/map-text-size-100.png)

- **200%**
    ![Dimensione testo mappa 200%](@site/static/img/map/map-text-size-200.png)


### Lente d'ingrandimento mappa {#map-magnifier}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Puoi scegliere questa impostazione tenendo premuto a lungo il pulsante "+" o "-" sullo schermo oppure:
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Puoi scegliere questa impostazione tenendo premuto a lungo il pulsante "+" o "-" sullo schermo oppure:
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

Questa impostazione aiuta a cambiare l'ingrandimento della mappa. È applicabile per mappe raster e vettoriali. Per le mappe raster applica un effetto di ingrandimento, quindi le etichette di testo appaiono più grandi o più piccole. Per le mappe vettoriali rende la mappa più o meno dettagliata; se la si imposta su un valore basso, la mappa apparirà rumorosa/lenta.

- **75%**
    ![Lente d'ingrandimento mappa 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**
    ![Lente d'ingrandimento mappa 200%](@site/static/img/map/map-magnifier-200.png)


### Lingua mappa {#map-language}

L'opzione **Lingua mappa** configura l'ortografia dei nomi sulla mappa OsmAnd per i livelli di zoom da 7 a 20, inclusi. Per i livelli di zoom da 2 a 6, i nomi vengono visualizzati nella lingua impostata per OsmAnd nel menu delle impostazioni di sistema (vedi sezione *[Come cambiare la lingua dell'applicazione](../start-with/first-steps.md#how-to-change-app-language)*).

Se i nomi sulla mappa non sono tradotti nella lingua richiesta dalla comunità OSM, è possibile utilizzare i [nomi traslitterati](https://en.wikipedia.org/wiki/Transliteration): *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) o *<Translate ios="true" ids="translit_names"/>* (iOS).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

</TabItem>

</Tabs>

- **Nomi locali**
    ![Lingua mappa nomi locali](@site/static/img/map/map-language-local-names_2.png)

- **Nomi ucraini**
    ![Lingua mappa ucraino](@site/static/img/map/map-language-urkanian_2.png)

- **Mostra nomi locali**
    ![Lingua mappa locale](@site/static/img/map/map-language-show-local_2.png)

- **Traslittera nomi**
    ![Lingua mappa traslittera](@site/static/img/map/map-language-transliterate_2.png)


## Stile mappa personalizzato {#custom-map-style}

Se disponi di uno stile di mappa personalizzato personale o di terze parti creato secondo la [Specificazione](../../technical/osmand-file-formats/osmand-rendering-style.md), puoi installarlo sul tuo dispositivo in questi modi:

- Copia il file `.render.xml` sul tuo dispositivo e aprilo con OsmAnd.
- Utilizza le [finestre di dialogo standard di importazione/esportazione](../personal/import-export.md) per esportare o importare stili di rendering. Se crei un pacchetto `.osf`, funziona come un plugin che puoi condividere con altri.
- Dopo l'installazione, puoi selezionare lo stile della mappa dal menu.


## Articoli correlati {#related-articles}

- [Importa / Esporta](../personal/import-export.md)
- [Schemi tavolozza colori](../personal/color-palette-schemes.md)

> *Ultimo aggiornamento: marzo 2025*