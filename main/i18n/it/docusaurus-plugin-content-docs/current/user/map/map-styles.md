---
source-hash: 887e37d512e29933bbd3ee7af217024887ffcc5ac636c9ddc52e7480299a8d1b
sidebar_position: 6
title:  Map Styles (Vector Maps)
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

Gli stili di mappa definiscono come i dati della mappa vettoriale vengono visualizzati in OsmAnd. Uno stile controlla l'aspetto visivo degli oggetti della mappa come strade, edifici, uso del suolo, acqua e punti di interesse, inclusi colori, pattern di linee ed etichette.

OsmAnd fornisce diversi stili integrati ottimizzati per diverse attività. È possibile passare tra gli stili nel [menu Configura mappa](./configure-map-menu.md) e regolare i parametri dello stile. Gli stili di mappa vettoriale supportano il passaggio tra modalità giorno e notte.

Oltre agli stili integrati, OsmAnd supporta stili di mappa personalizzati. Gli stili personalizzati sono basati su regole di rendering e possono essere importati, condivisi e modificati per evidenziare le informazioni di cui hai bisogno.


## Stili di Mappa Predefiniti {#default-map-styles}

OsmAnd offre molti stili di mappa e livelli di dati che si adattano per impostazione predefinita. Questa sezione descrive i principali per le modalità giorno e notte.

**Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

**iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*

### OsmAnd {#osmand}

![Stile mappa OsmAnd](@site/static/img/map/map-style-osmand-with-routes.png)  

Lo stile di rendering della mappa standard di OsmAnd bilancia dettaglio e semplicità, rendendolo ideale per l'esplorazione urbana e all'aperto. Dettaglia le caratteristiche della città come strade, edifici e fermate di trasporto mentre semplifica il disordine visivo rendendo le mappe più chiare.  

I principali benefici includono la mappatura dei percorsi, la qualità della superficie, le restrizioni di accesso, la segnaletica stradale, il rendering dei sentieri in scala SAC, le strutture sportive e dettagli topografici come le linee di contorno.

### Touring View {#touring-view}

![Stile mappa Touring view](@site/static/img/map/map-style-touring.png)

Stile Touring con alto contrasto e massimo dettaglio. Include tutte le opzioni dello stile predefinito OsmAnd mentre visualizza il maggior dettaglio possibile, in particolare strade, sentieri e altri modi di viaggiare. Distinzione chiara dei tipi di strade in un *atlante da touring*. Adatto per uso diurno, notturno e all'aperto.

### UniRS e LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

Gli stili UniRS e LightRS sono stili dell'autore che visualizzano le informazioni di base della mappa ma con schemi di colori diversi.  

- **Stile UniRS**. Questo stile è una versione modificata del predefinito per migliorare il contrasto per sentieri pedonali e ciclabili. Mantiene lo schema di colori classico Mapnik.  

    ![Stile mappa LightRS](@site/static/img/map/map-style-lightrs.png)

- **Stile LightRS**. Questo è uno stile di guida semplice che presenta una modalità notturna delicata. Evidenzia le strade in un colore arancione contrastante, attenua gli oggetti secondari della mappa e visualizza caratteristiche topografiche come le linee di contorno.

    ![Stile mappa UniRS](@site/static/img/map/map-style-unirs.png)

### Nautical {#nautical}

![Stile mappa Nautical](@site/static/img/map/map-style-nautical.png)

Questo è uno stile di navigazione nautica che presenta boe, fari, rotte fluviali, corsie marine, segnalazioni, porti e marchi nautici. Ulteriori informazioni nella sezione [Stile Mappa Nautica](../plugins/nautical-charts.md#nautical-map-style).

### Marine {#marine}

![Stile mappa Marine](@site/static/img/map/map-style-marine.png)

Questo è uno stile di mappa nautica avanzato con settori luminosi, caratteristiche complete dei fari e altre caratteristiche marittime dettagliate per una navigazione marina realistica e accurata. Per ulteriori dettagli, leggi la sezione [Stile Mappa Marine](../plugins/nautical-charts.md#marine-map-style).

### Winter e Ski {#winter-and-ski}

![Stile mappa Winter & Ski](@site/static/img/map/map-style-winter-ski.png)

Questo è uno stile per sport invernali che descrive le piste, gli impianti di risalita e i sentieri per lo sci di fondo, oltre a oscurare gli oggetti secondari della mappa. Lo **stile Winter and Ski** è progettato per aiutarti con la navigazione negli sport invernali.  

Puoi vedere le piste da sci e altri dettagli come la difficoltà delle piste e i marcatori degli impianti di risalita. I principali benefici includono la visualizzazione comoda di piste, impianti di risalita e altre caratteristiche sciistiche. Meno oggetti secondari distraenti della mappa. Ulteriori informazioni nell'articolo [Mappe Sci](../plugins/ski-maps.md).

### Topo {#topo}

![Stile mappa Topo](@site/static/img/map/map-style-topo.png)

Questo stile è progettato per escursioni, campeggio e ciclismo in natura. Presenta strade e caratteristiche naturali contrastanti, diversi tipi di sentieri, opzioni estese per le linee di contorno e dettagli aggiuntivi. È leggibile all'aperto. L'impostazione *Integrità della Superficie* ti permette di distinguere la qualità della strada.

### OSM-carto {#osm-carto}

![Stile mappa OSM-carto](@site/static/img/map/map-style-osm-carto.png)

Questo stile imita lo stile web predefinito di [OpenStreetMap](https://www.openstreetmap.org/). Il codice sorgente della versione web è disponibile su [Github](https://github.com/gravitystorm/openstreetmap-carto), il codice OsmAnd è disponibile su [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Desert {#desert}

![Stile mappa Desert](@site/static/img/map/map-style-desert.png)

Progettato per deserti e altre regioni scarsamente popolate, offre informazioni di mappa più dettagliate.

### Offroad {#offroad}

![Stile mappa Offroad](@site/static/img/map/map-style-offroad.png)

Progettato per la navigazione off-road, questo stile è basato sul layout della mappa [Topo](#topo) e funziona bene con immagini satellitari come sottofondo. Presenta strade principali più sottili per evidenziare sentieri, piste, rotte ciclabili e altri sentieri off-road, rendendolo ideale per esplorare rotte non pavimentate in aree rurali o remote.

### Snowmobile {#snowmobile}

![Stile mappa Snowmobile](@site/static/img/map/map-style-snowmobile.png)

Adatto per la navigazione con snowmobile, questo stile evidenzia sentieri, strade e piste adatti ai snowmobile. Evidenzia sentieri specializzati in regioni innevate, offrendo una navigazione chiara attraverso terreni coperti di neve dove le strade standard potrebbero non essere disponibili. 


## Stile Mappa Personalizzato {#custom-map-style}

Se hai uno stile di mappa personalizzato personale o di terze parti creato secondo la [Specifica](../../technical/osmand-file-formats/osmand-rendering-style.md), puoi installarlo sul tuo dispositivo in questi modi:

- Copia il file `.render.xml` sul tuo dispositivo e aprilo con OsmAnd.
- Usa i [dialoghi standard di import/export](../personal/import-export.md) per esportare o importare stili di rendering. Se crei un pacchetto `.osf`, funziona come un plugin che puoi condividere con altri.
- Dopo l'installazione, puoi selezionare lo stile di mappa dal menu.

Puoi anche sfogliare esempi di stili di mappa personalizzati creati da altri utenti. Un elenco di stili della comunità disponibili pubblicamente è fornito [qui](../troubleshooting/resources.md#map-styles).


## Articoli Correlati {#related-articles}

- [Configura Mappa](../map/configure-map-menu.md)
- [Mappe Vettoriali](../map/vector-maps.md)
- [Risorse e Personalizzazioni](../troubleshooting/resources.md)