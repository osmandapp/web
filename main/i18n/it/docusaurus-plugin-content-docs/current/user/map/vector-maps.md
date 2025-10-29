---
source-hash: 146224c5870d93bfcd77b9ac4622910a65040bc55c1e1ed39fa47c96b8650a04
sidebar_position: 5
title:  Mappe Vettoriali (Stili Mappa)
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

Le mappe vettoriali sono pensate per essere utilizzate come fonte di dati predefinita per OsmAnd, quindi **è necessario scaricarle sul proprio dispositivo**. Le mappe vettoriali supportano un gran numero di stili di mappa per diverse attività come ciclismo, escursionismo, guida in auto o motoslitta e altre.  

Ogni stile di mappa può essere personalizzato per evidenziare o nascondere oggetti specifici e per passare dalla modalità diurna a quella notturna. I dati delle mappe vettoriali possono essere arricchiti da dati vettoriali e visualizzati nello stile di mappa predefinito, come le informazioni sulle *Curve di livello*. È possibile *creare il proprio stile di mappa OsmAnd* per visualizzare le informazioni richieste.

Le mappe vettoriali rappresentano dati spaziali, come strade, edifici, punti e poligoni, utilizzando geometria matematica memorizzata in formato binario. Ogni elemento (nodo, linea o poligono) è definito da coordinate e renderizzato dinamicamente in base al livello di zoom e allo stile della mappa.

Poiché i dati vettoriali non sono memorizzati come immagini fisse, il loro aspetto, inclusi colore, larghezza della linea, trasparenza o motivo, può essere facilmente modificato. Questo approccio consente un rendering efficiente, un basso utilizzo della memoria e una scalatura fluida a qualsiasi livello di zoom senza perdita di qualità.

:::info nota
I poligoni molto piccoli potrebbero essere semplificati o distorti durante la generazione dei dati della mappa. Gli oggetti con un'area inferiore a circa un metro quadrato potrebbero non essere visualizzati. Per una visualizzazione corretta, le piccole feature dovrebbero essere mappate come singoli nodi invece che come poligoni.
:::


## Casi d'uso {#use-cases}

Gli stili di mappa personalizzabili sono uno dei principali vantaggi di OsmAnd. È possibile personalizzare la visualizzazione della mappa per adattarla a sé stessi e ai propri hobby, regolare la visualizzazione o l'occultamento di determinati oggetti della mappa, le dimensioni e i colori di questi oggetti e modificare la scala di visualizzazione di determinati oggetti.


## Stili di mappa predefiniti {#default-map-styles}

OsmAnd offre di default molti stili di mappa e livelli di dati. Questa sezione descrive i principali per le modalità diurna e notturna.

1. **Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

2. **iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*


### OsmAnd {#osmand}

![Stile mappa OsmAnd](@site/static/img/map/map-style-osmand-with-routes.png)  

Lo stile di rendering standard della mappa di OsmAnd bilancia dettaglio e semplicità, rendendolo ideale per l'esplorazione urbana ed extraurbana. Dettaglia le caratteristiche della città come strade, edifici e fermate dei trasporti, semplificando al contempo il disordine visivo e rendendo le mappe più chiare.  

I vantaggi principali includono la mappatura dei percorsi, la qualità della superficie, le restrizioni di accesso, la segnaletica stradale, la rappresentazione dei sentieri in scala SAC, gli impianti sportivi e i dettagli topografici come le curve di livello.


### Touring View {#touring-view}

![Stile mappa Touring view](@site/static/img/map/map-style-touring.png)

Stile touring ad alto contrasto e massimo dettaglio. Include tutte le opzioni dello stile predefinito di OsmAnd, visualizzando il maggior numero di dettagli possibile, in particolare strade, sentieri e altri modi di viaggiare. Chiara distinzione dei tipi di strada in un *atlante turistico*. Adatto per l'uso diurno, notturno e all'aperto.

### UniRS e LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

Gli stili UniRS e LightRS sono stili d'autore che rendono le informazioni di base della mappa ma con schemi di colori diversi.  

- **Stile UniRS**. Questo stile è una versione modificata di quello predefinito per migliorare il contrasto dei percorsi pedonali e ciclabili. Mantiene lo schema di colori classico di Mapnik.  

    ![Stile mappa LightRS](@site/static/img/map/map-style-lightrs.png)

- **Stile LightRS**. Si tratta di un semplice stile di guida che presenta una delicata modalità notturna. Evidenzia le strade con un colore arancione a contrasto, attenua gli oggetti secondari della mappa e visualizza elementi topografici come le curve di livello.

    ![Stile mappa UniRS](@site/static/img/map/map-style-unirs.png)

### Nautico {#nautical}

![Stile mappa Nautico](@site/static/img/map/map-style-nautical.png)

Questo è uno stile di navigazione nautica che presenta boe, fari, rotte fluviali, rotte marittime, segnali, porti, segnalamenti marittimi e curve di profondità. Per saperne di più, consultare la sezione [Stile Mappa Nautico](../plugins/nautical-charts.md#nautical-map-style).

### Marine {#marine}

![Stile mappa Marino](@site/static/img/map/map-style-marine.png)

Questo è uno stile mappa nautico avanzato con settori luminosi, caratteristiche complete dei fari e altre feature marittime dettagliate per una navigazione marina realistica e accurata. Per maggiori dettagli leggere la sezione [Stile Mappa Marino](../plugins/nautical-charts.md#marine-map-style).

### Inverno e Sci {#winter-and-ski}

![Stile mappa Inverno & Sci](@site/static/img/map/map-style-winter-ski.png)

Questo è uno stile per gli sport sciistici che descrive le piste, gli impianti di risalita e le piste di fondo, oltre a oscurare gli oggetti secondari della mappa. Lo **stile Inverno e Sci** è progettato per aiutarvi nella navigazione per gli sport invernali.  

È possibile vedere le piste da sci e altri dettagli come la difficoltà delle piste e gli indicatori degli impianti di risalita. I vantaggi principali includono la comoda visualizzazione di piste, impianti di risalita e altre caratteristiche sciistiche. Meno oggetti secondari della mappa che distraggono. Per saperne di più, consultare l'articolo [Mappe Sciistiche](../plugins/ski-maps.md).

### Topo {#topo}

![Stile mappa Topo](@site/static/img/map/map-style-topo.png)

Questo stile è progettato per l'escursionismo, il campeggio e il ciclismo nella natura. Presenta strade ed elementi naturali a contrasto, diversi tipi di sentieri, opzioni estese per le curve di livello e dettagli aggiuntivi. È leggibile all'aperto. L'impostazione *Integrità della superficie* consente di distinguere la qualità della strada.

### OSM-carto {#osm-carto}

![Stile mappa OSM-carto](@site/static/img/map/map-style-osm-carto.png)

Questo stile imita lo [stile web predefinito di OpenStreetMap](https://www.openstreetmap.org/). Il codice sorgente della versione web è disponibile su [Github](https://github.com/gravitystorm/openstreetmap-carto), il codice di OsmAnd è disponibile su [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Deserto {#desert}

![Stile mappa Deserto](@site/static/img/map/map-style-desert.png)

Progettato per i deserti e altre regioni scarsamente popolate, offre informazioni cartografiche più dettagliate.

### Offroad {#offroad}

![Stile mappa Offroad](@site/static/img/map/map-style-offroad.png)

Progettato per la navigazione fuoristrada, questo stile si basa sul layout della mappa [Topo](#topo) e funziona bene con le immagini satellitari come sottofondo. Presenta strade principali più sottili per evidenziare sentieri, piste, percorsi ciclabili e altri tracciati fuoristrada, rendendolo ideale per esplorare percorsi non asfaltati in aree rurali o remote.

### Motoslitta {#snowmobile}

![Stile mappa Motoslitta](@site/static/img/map/map-style-snowmobile.png)

Studiato per la navigazione in motoslitta, questo stile evidenzia percorsi, strade e piste adatte alle motoslitte. Evidenzia percorsi specializzati in regioni innevate, offrendo una navigazione chiara su terreni coperti di neve dove le strade standard potrebbero non essere disponibili. 


## Legenda Mappa {#map-legend}

La legenda della mappa serve come chiave per comprendere i simboli utilizzati nelle mappe di OsmAnd. Spiega il significato dei vari simboli della mappa, inclusi punti, linee e aree. Ad esempio, simboli come linee sinuose blu indicano i fiumi, mentre colori e forme diverse possono rappresentare edifici, sentieri e percorsi.  

La legenda aiuta gli utenti a interpretare ciò che vedono sulla mappa. È possibile accedere alla legenda completa della mappa di OsmAnd [qui](../map-legend/index.md).


## Caratteri Mappa (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*  

![Caratteri mappa versione Android](@site/static/img/map/map_fonts.png) ![Versione caratteri mappa](@site/static/img/map/map_fonts_1.png)

Per le mappe in cinese semplificato/tradizionale, giapponese e coreano, potrebbero apparire caratteri o simboli errati (come quadrati) se il dispositivo non dispone dei caratteri necessari. Questo problema si verifica durante il rendering dei nomi locali e può essere risolto scaricando i caratteri richiesti tramite OsmAnd.  

Alcuni problemi relativi ai caratteri sono stati documentati su GitHub: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## * Curve di livello {#-contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Stile mappa Curve di livello](@site/static/img/map/contour_lines.png)

Le curve di livello in OsmAnd sono visualizzate come linee di elevazione sulle mappe vettoriali. Per utilizzarle, è necessario prima abilitare il [plugin Topografia](../plugins/topography.md), scaricare i dati regionali necessari e configurare la visualizzazione. Questa funzione non è abilitata per impostazione predefinita e richiede un [acquisto](../purchases/index.md).  

Le curve di livello sono compatibili con tutti gli stili di mappa e possono essere personalizzate tramite il [menu Curve di livello](../plugins/topography.md#contour-lines). Per ulteriori dettagli, visitare l'articolo sul [plugin Topografia](../plugins/topography.md).


## * Profondità nautica {#-nautical-depth}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

Le linee di contorno della profondità nautica rappresentano aree di uguale profondità, aiutando a visualizzare i cambiamenti della topografia sottomarina. Questa funzione è disponibile in tutti gli stili e modalità di mappa e può essere regolata con o senza il plugin Vista Mappa Nautica abilitato.  

Per ulteriori dettagli sulla vista della mappa nautica, visitare la [pagina del plugin Mappa Nautica](../plugins/nautical-charts).


## Mostra confini {#show-borders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-andr](@site/static/img/map/show-borders-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

Questa funzione consente di attivare o disattivare la visibilità dei confini delle mappe precedentemente scaricate dall'elenco delle mappe disponibili. Il suo scopo principale è quello di aiutare a ripulire la mappa principale nascondendo i contorni delle mappe scaricate, il che è particolarmente utile se si hanno molte mappe installate.  

Per impostazione predefinita, i confini della mappa appariranno quando si ingrandisce al livello 7 e scompariranno al livello di zoom 3 e inferiori.

:::tip Colore Mostra confini delle mappe scaricate
Quando la funzione *Mostra confini delle mappe scaricate* è abilitata, le mappe scaricate sono colorate di **Verde** sia nella versione Android che iOS di OsmAnd.  

Su Android, le mappe archiviate sono mostrate in **Arancione**. In iOS, anche le mappe che possono essere aggiornate sono contrassegnate in **Arancione**.
:::


## Griglia coordinate {#coordinates-grid}


Vai a: *Menu → Configura mappa → Mostra → Griglia coordinate*  


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Griglia coordinate](@site/static/img/map/coordinates_grid_settings_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Impostazioni menu Griglia coordinate](@site/static/img/map/coordinates_grid_settings_ios.png)

</TabItem>

</Tabs>


La funzione **Griglia coordinate** sovrappone una griglia di riferimento alla mappa, consentendo di visualizzare le linee di latitudine e longitudine basate su diversi sistemi di coordinate. Questa funzione è utile per un riferimento preciso della posizione e per la navigazione geospaziale. 

È possibile configurare le seguenti opzioni:
- **Livelli di zoom:** impostare i livelli di zoom minimo e massimo (2 - 22) in cui la griglia è visibile.
- **Posizione etichette:** scegliere tra *Bordi* (predefinito) o *Centro* per le etichette della griglia.
- **Colore griglia:** disponibile separatamente per la modalità Giorno/Notte. La personalizzazione del colore della griglia è una funzione a pagamento.
- **Formato coordinate:** selezionare da diversi formati disponibili (vedere elenco di seguito).


***Formati di coordinate disponibili:***

- **WGS84** (EPSG:4326) -  **DD°MM′SS″** (Gradi, Minuti, Secondi)
- **WGS84** (EPSG:4326) - **DD.DDDDD°** (Gradi Decimali - formato predefinito WGS84)
- **WGS84** (EPSG:4326) - **DD°MM.MMM′** (Gradi, Minuti Decimali)
- **UTM** (EPSG:6387, Universal Transverse Mercator - sistema a griglia basato su fusi). Il livello minimo di zoom è 9, viene visualizzato un solo fuso UTM alla volta, poiché i fusi sono separati da meridiani ogni 6°
- **MGRS** (Military Grid Reference System)

Per impostazione predefinita, l'app utilizza il formato delle coordinate selezionato in [Impostazioni generali](../personal/profiles.md#units--formats), ma è possibile cambiarlo direttamente in questo menu.

[Azione rapida](../widgets/quick-action.md#overview): È anche possibile aggiungere un interruttore rapido *Mostra/Nascondi Griglia Coordinate* al gruppo [Configura Mappa](../widgets/quick-action.md#configure-map) per un accesso veloce.

## Configura Stile Mappa {#configure-map-style}

### Modalità mappa {#map-mode}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*  

![Modalità Mappa](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Modalità Mappa](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

La mappa può essere visualizzata con un tema chiaro o scuro in base alla modalità selezionata da un elenco di opzioni. Per impostazione predefinita e per tutti i nuovi utenti, lo [stile della mappa](#default-map-styles) si allinea al tema scelto nelle impostazioni di sistema del dispositivo.

- **<Translate android="true" ids="daynight_mode_day"/>**. Visualizza sempre la mappa con un tema chiaro per una visibilità ottimale durante il giorno.

- **<Translate android="true" ids="daynight_mode_night"/>**. Mostra sempre la mappa con un tema scuro, ideale per la notte o in condizioni di scarsa illuminazione.

- **Alba / Tramonto**. Passa automaticamente dal tema diurno a quello notturno in base agli orari locali di alba e tramonto, che sono dettagliati in questa scheda nell'app.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*solo Android*). Utilizza il sensore di luce del dispositivo per passare automaticamente dal tema chiaro a quello scuro in base ai livelli di luce ambientale.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. La visualizzazione della mappa si adatta al tema generale dell'app, mostrando la modalità diurna nel tema chiaro e la modalità notturna nel tema scuro.


### Dettagli {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">

  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*  

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Mostra poligoni, sentieri, punti e segnali sulla mappa a basso zoom. Ciò significa che è possibile vedere più dettagli sulla mappa a basso ingrandimento. Si noti che il rendering sul dispositivo potrebbe non essere veloce.  
    ![Parametro mappa - Più dettagliato](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Mostra il tipo di superficie stradale. Il colore della strada aiuta a capire qual è la superficie stradale, come asfalto, erba o sabbia. Vedere la [Legenda Mappa](../map-legend/index.md).  
    ![Parametro mappa - Superficie stradale](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Indica la qualità della strada. Indica la scorrevolezza (pendenza) della strada. Quanto sono scorrevoli le vostre strade: buone, cattive, forse terribili, ecc. Guardate la [Legenda Mappa](../map-legend/index.md) per determinare la scorrevolezza della vostra strada.  
    ![Parametro mappa - Scabrosità strada](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. Mostra l'accessibilità della strada: privata o consentita, solo per emergenze o a pedaggio. Visualizza la [Legenda Mappa](../map-legend/index.md) per trovare le strade disponibili.  
    ![Parametro mappa - Accesso stradale](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. La funzione [Zone a Bassa Emissione (ZBE)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) visualizza bordi verdi ed etichette "LEZ" sulle mappe per le aree delle città in cui l'accesso è limitato per alcuni veicoli inquinanti. Le ZBE mirano a migliorare la qualità dell'aria limitando l'ingresso ai veicoli che soddisfano specifici standard di emissione. L'uso di questa funzione aiuta gli utenti a evitare sanzioni identificando e navigando intorno a queste zone verdi, garantendo la conformità con le normative ambientali locali durante gli spostamenti nei centri urbani.  

    ![Parametro mappa - Zone a bassa emissione](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Diverse categorie di edifici, come residenziali, industriali e commerciali, sono codificate a colori. Fare riferimento alla [Legenda Mappa](../map-legend/index.md) per i dettagli.  
    ![Parametro mappa - Edifici colorati](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Visualizza strade illuminate e non illuminate, così come percorsi sotterranei e temporaneamente illuminati. Controllare la [Legenda Mappa](../map-legend/index.md) per i dettagli.  
    ![Parametro mappa - Illuminazione stradale](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Progettata per i mappatori, questa funzione mostra riferimenti, osservazioni e commenti di altri utenti sulla mappa.  
    ![Parametro mappa - Assistente mappa](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Mostra le curve di profondità del mare. È necessario installare il [plugin Nautico](../plugins/nautical-charts) e scaricare le mappe nautiche.  
    ![Parametro mappa - Curve di profondità](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Mostra un bordo verde e l'etichetta "NR" per il [Territorio della riserva naturale](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Evidenzia le aree protette con un bordo verde e l'etichetta "NR" per le zone di conservazione della fauna selvatica.  

    &nbsp;&nbsp;&nbsp;![Parametro mappa - Riserva naturale](@site/static/img/map/nature-reserve.png)


<!--
| | | |
|--------|--------|--------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Shows polygons, trails, points, and signs on the map at low zoom. This means that you can see more details on the map at low magnification. Note that rendering on your device may not be fast.| ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Shows the type of road surface. The color of the road helps you understand what the road surface is, such as asphalt, grass, or sand. See the [Map legend](../map-legend/index.md).| ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Indicates the quality of the road. Indicates the smoothness (slope) of the road. How smooth your roads are: good, bad, possibly terrible, etc. Look at the [Map Legend](../map-legend/index.md) to determine the smoothness of your road.| ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  Shows the accessibility of the road: private or permitted, emergency only, or toll road. View the [Map Legend](../map-legend/index.md) to find available roads. | ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | The [Low Emission Zones (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) feature displays green borders and "LEZ" labels on maps for areas in cities where access is restricted for certain polluting vehicles. LEZs aim to improve air quality by limiting entry to vehicles that meet specific emissions standards. Using this feature helps users avoid penalties by identifying and navigating around these green zones, ensuring compliance with local environmental regulations while traveling through city centers.| ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. | Different building categories, such as residential, industrial, and commercial, are color-coded. Refer to the [Map legend](../map-legend/index.md) for details. | ![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. | Displays illuminated and non-illuminated streets, as well as underground and temporarily illuminated ways. Check the [Map legend](../map-legend/index.md) for specifics. | ![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. | Designed for mappers, this feature shows references, remarks, and comments from other users on the map. | ![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. | Shows sea depth contours. You need to install the [Nautical plugin](../plugins/nautical-charts) and download Nautical maps.| ![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. | Showing green board and labels "NR" for [Nature reserve territory](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Highlights protected areas with a green border and "NR" label for wildlife conservation zones.| ![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)|  
-->

### Percorsi {#routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Percorsi mappa - percorsi ciclabili](@site/static/img/map/map-routes-cycle-routes.png)  ![Percorsi mappa - rete escursionistica](@site/static/img/map/map-routes-hiking-network.png)

Un percorso è un tracciato predeterminato che deve essere seguito per raggiungere una destinazione specifica. Un percorso può essere ottimizzato per diversi tipi di viaggio, come ciclismo, escursionismo, corsa, trasporto pubblico e altri. Puoi leggere di più sui percorsi e sui loro tipi nell'articolo [Percorsi](../map/routes.md).


### Trasporti {#transport}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>  

Quando si naviga attraverso le città, è necessaria una visualizzazione più contrastata dei trasporti pubblici e delle fermate. È possibile toccare una fermata del trasporto pubblico e selezionare uno dei percorsi o delle fermate dall'elenco. Anche i percorsi ferroviari sono visualizzati in questa impostazione.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Mostra le fermate del trasporto pubblico.  
    ![Fermate trasporto pubblico mappa](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Mostra i percorsi di autobus, filobus e navette.  
    ![Trasporto pubblico bus mappa](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Mostra i percorsi di tram e treni.  
    ![Trasporto pubblico tram mappa](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Mostra i percorsi della metropolitana.  
    ![Trasporto pubblico metropolitana mappa](@site/static/img/map/map-transport-subway.png)

### Nascondi {#hide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>  

Per migliorare la visibilità della mappa, potrebbe essere necessario nascondere alcuni oggetti. Ad esempio, è possibile nascondere l'acqua quando si utilizzano le [mappe online Satellitari con il livello Sottofondo](../map/raster-maps.md#select-raster-maps).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Nasconde i confini regionali all'interno dei paesi, ma i confini di stato sono visibili.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Nasconde tutti i poligoni di oggetti naturali, funzione speciale per il [livello Sottofondo/Sovrapposizione](../map/raster-maps.md#select-raster-maps).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Nasconde tutti i poligoni degli edifici.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Nasconde tutti i poligoni d'acqua (mari, laghi, bacini, ecc.)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Nasconde i numeri civici sulla mappa.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Nasconde gli oggetti proposti - quegli oggetti la cui costruzione è pianificata ma di cui esiste solo un progetto (strade, incroci, edifici e altro in progetto).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Nasconde le icone dei PDI dalla mappa. Tuttavia, le etichette di questi PDI appariranno ancora sulla mappa.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Nasconde le etichette dei PDI dalla mappa. Tuttavia, le icone dei PDI appariranno ancora sulla mappa.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Nasconde tutti gli oggetti sotterranei, come tunnel, passaggi, piani, ecc. Speciale per ripulire le mappe delle città da oggetti non utili.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Nasconde tutti gli oggetti in superficie. Speciale per vedere solo oggetti sotterranei come tunnel, passaggi, ecc.

### Stile strada {#road-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Impostazioni speciali per le strade, dove è possibile cambiare i colori per abbinarli all'atlante stradale o aggiungere strade ad alto contrasto o contorni spessi per le strade.

- **<Translate android="true" ids="rendering_value_default_name"/>**. Stile predefinito per le autostrade. Guarda la [Legenda Mappa](../map-legend/index.md).  
![Stile strada mappa predefinito](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Stile dell'atlante stradale tedesco.  
![Stile strada mappa tedesco](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Stile dell'atlante stradale americano.  
![Stile strada mappa americano](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. L'alto contrasto delle strade.  
![Stile strada mappa alto contrasto](@site/static/img/map/map-road-style-high-contrast.png)
- **Pallido**. Colori meno contrastanti delle strade.  
![Stile strada mappa pallido](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Contorno spesso per le strade.  
![Stile strada mappa contorno spesso](@site/static/img/map/map-road-style-bold-outline.png)


### Dimensione testo {#text-size}

<Tabs groupId="operating-systems" queryString="current-os">

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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Puoi scegliere questa impostazione con un tocco lungo sul pulsante "+" o "-" sullo schermo o:  
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Puoi scegliere questa impostazione con un tocco lungo sul pulsante "+" o "-" sullo schermo o:  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

Questa impostazione aiuta a cambiare l'ingrandimento della mappa. È applicabile per mappe raster e vettoriali. Per le mappe raster applica un effetto di ingrandimento, quindi le etichette di testo appaiono più grandi o più piccole. Per le mappe vettoriali rende la mappa più o meno dettagliata; se si imposta un valore basso, la mappa apparirà rumorosa/lenta.  

- **75%**  
    ![Lente d'ingrandimento mappa 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**  
    ![Lente d'ingrandimento mappa 200%](@site/static/img/map/map-magnifier-200.png)


### Lingua mappa {#map-language}

L'opzione **Lingua mappa** configura la scrittura dei nomi sulla mappa di OsmAnd per i livelli di zoom da 7 a 20, inclusi. Per i livelli di zoom da 2 a 6, i nomi vengono visualizzati nella lingua impostata per OsmAnd nel menu delle impostazioni di sistema (vedere la sezione *[Come cambiare la lingua dell'applicazione](../start-with/first-steps.md#how-to-change-app-language)*).  

Se i nomi sulla mappa non sono tradotti nella lingua richiesta dalla comunità OSM, è possibile utilizzare i [nomi traslitterati](https://en.wikipedia.org/wiki/Transliteration): selettore *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) o *<Translate ios="true" ids="translit_names"/>* (iOS).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

- **Nomi locali**  
    ![Lingua mappa nomi locali](@site/static/img/map/map-language-local-names_2.png)

- **Lingua preferita** (ucraino)
    ![Lingua mappa ucraino](@site/static/img/map/map-language-urkanian_2.png)

- **Usa nome latino se mancante**  
    ![Lingua mappa traslittera](@site/static/img/map/map-language-transliterate_2.png)


</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

- **Nomi locali**  
    ![Lingua mappa nomi locali](@site/static/img/map/map-language-local-names_2.png)

- **Lingua preferita** (ucraino)
    ![Lingua mappa ucraino](@site/static/img/map/map-language-urkanian_2.png)

- **Mostra nomi locali**  (aggiunge una seconda etichetta se il nome locale è diverso)
    ![Lingua mappa locale](@site/static/img/map/map-language-show-local_2.png)

- **Traslittera nomi**  
    ![Lingua mappa traslittera](@site/static/img/map/map-language-transliterate_2.png)



</TabItem>

</Tabs>  



## Stile Mappa Personalizzato {#custom-map-style}

Se si dispone di uno stile di mappa personalizzato, personale o di terze parti, creato secondo le [Specifiche](../../technical/osmand-file-formats/osmand-rendering-style.md), è possibile installarlo sul proprio dispositivo in questi modi:

- Copiare il file `.render.xml` sul dispositivo e aprirlo con OsmAnd.
- Utilizzare le [finestre di dialogo standard di importazione/esportazione](../personal/import-export.md) per esportare o importare gli stili di rendering. Se si crea un pacchetto `.osf`, questo funziona come un plugin che è possibile condividere con altri.
- Dopo l'installazione, è possibile selezionare lo stile della mappa dal menu.


## Articoli Correlati {#related-articles}

- [Importa / Esporta](../personal/import-export.md)
- [Schemi di tavolozze di colori](../personal/color-palette-schemes.md)