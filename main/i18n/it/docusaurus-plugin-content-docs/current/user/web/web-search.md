---
source-hash: 78210f205e67c24e3cb486f56f1f503a9a0c755622cff35824943b6150700ad5
sidebar_position: 10
sidebar_label:  Cerca
title: Cerca sul sito web
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

<!--
<InfoIncompleteArticle/>
-->


## Panoramica {#overview}

Il **menu Cerca** è accessibile dal pannello laterale o dall'icona di ricerca 🔍 sulla mappa. Contiene:

- [Barra di ricerca](#search-bar). Inserisci parole chiave per cercare luoghi specifici o punti di interesse.  
- [Sezione Categorie](#categories). Sfoglia le opzioni categorizzate per facilitare la ricerca di PDI.  
- [Sezione Esplora](#explore). Visualizza PDI popolari per il centro della mappa attuale ed esplora luoghi con foto sulla mappa.

![Menu Cerca](@site/static/img/web/search.png)

## Opzioni di ricerca {#search-options}

### Barra di ricerca {#search-bar}

Usa la **Barra di ricerca** per trovare luoghi specifici o punti di interesse per nome. Fai clic sull'icona di ricerca, inserisci la tua query e seleziona un risultato dall'elenco. Selezionando un PDI si apre il [Menu contestuale PDI](#poi-context-menu), dove puoi visualizzare i dettagli e utilizzare azioni rapide.

Se cerchi per nome di categoria, il primo risultato potrebbe mostrare la categoria PDI corrispondente. Fai clic sulla categoria per aprire la vista [Ricerca per categorie](#categories).

![Opzioni di ricerca](@site/static/img/web/search_bar.png)

### Categorie {#categories}

Usa **Categorie** per sfogliare i PDI per tipo e visualizzarli sulla mappa. Il menu mostra sei categorie popolari per un accesso rapido. Se hai bisogno di più opzioni, fai clic su Mostra tutto per aprire l'elenco completo di 18 categorie disponibili. Selezionando una categoria vengono visualizzati i PDI corrispondenti sulla mappa; selezionando un PDI si apre il [Menu contestuale PDI](#poi-context-menu).

![Opzioni di ricerca](@site/static/img/web/search_categories.png)

### Esplora {#explore}

La sezione **Esplora** mostra [luoghi popolari](https://osmand.net/docs/user/map/popular_places) con foto direttamente sulla mappa. Crea un elenco di PDI per il centro della mappa attuale (ordinato per popolarità) e visualizza gli stessi luoghi come marcatori fotografici sulla mappa. Le immagini di anteprima e le informazioni sui PDI sono basate su Wikidata/Wikimedia e fonti correlate quando disponibili.

Apri la scheda di ricerca per accedere a Esplora — i risultati di Esplora vengono visualizzati automaticamente sulla mappa. Usa Mostra tutto per aprire l'elenco completo delle categorie Esplora. Puoi affinare ciò che appare nell'elenco e sulla mappa usando Filtro, che apre il menu delle categorie Esplora. Selezionando un PDI dall'elenco o sulla mappa si apre il [Menu contestuale PDI](#poi-context-menu).

![Opzioni di ricerca](@site/static/img/web/search_explore.png) ![Opzioni di ricerca](@site/static/img/web/explore_filters.png)

## Menu contestuale PDI {#poi-context-menu}

Indipendentemente dall'opzione di ricerca che usi (Barra di ricerca, Categorie o Esplora), selezionando un PDI sulla mappa o nell'elenco dei risultati si apre il Menu contestuale PDI. Il menu contestuale è il luogo principale per visualizzare le informazioni sui PDI ed eseguire azioni comuni. Combina i dettagli sui PDI (come posizione e dati correlati) con azioni rapide (ad esempio, salvare, condividere o avviare la pianificazione del percorso e la navigazione).

### Dettagli PDI {#poi-details}

Il **Menu contestuale PDI** visualizza informazioni chiave sul luogo selezionato e fornisce link basati sui dati OSM e Wikimedia/Wikidata disponibili:
- **Nome e icona** — mostra il nome del PDI e la sua icona.
- **Distanza e direzione** — mostra la distanza e la direzione verso il PDI.
- **Posizione** — visualizza le coordinate del PDI.
- **Descrizione** — fornisce informazioni aggiuntive sul PDI quando disponibili (ad esempio, da Wikipedia).
- **Foto online** — mostra foto Wikimedia relative al PDI quando disponibili. Seleziona Mostra tutto per aprire la Galleria fotografica. Seleziona una foto per aprirla nella galleria (modalità Apri foto).
- **Dati oggetto** — informazioni aggiuntive sul PDI, inclusi tag OSM e altri dettagli come contatti, link social, link a Wikipedia e Wikivoyage, descrizioni e iscrizioni (quando disponibili).
- **ID OSM** — l'identificatore OpenStreetMap del PDI.
- **Coordinate** — seleziona le coordinate per copiarle.

![Menu contestuale PDI](@site/static/img/web/poi_context_menu.png)

### Azioni PDI {#poi-actions}

Il **Menu contestuale PDI** include pulsanti di azione per attività comuni. Usa queste azioni rapide per salvare un luogo, condividerlo o avviare la pianificazione del percorso e la navigazione:
- **Aggiungi ai Preferiti** — salva il PDI nei tuoi [Preferiti](../web/web-favorites.md#add--edit-favorite).
- **Condividi** — genera un link condivisibile che apre il PDI direttamente in OsmAnd Web. Il link include il nome del PDI, il tipo e le coordinate (pin).
- **Indicazioni da** — imposta il PDI selezionato come punto di partenza e apre il pannello del percorso in modo da poter scegliere una destinazione e un profilo.
- **Navigazione** — imposta il PDI selezionato come punto di destinazione per la [navigazione](../web/web-navigation.md#start-a-route).

<!--
Click the **🔍 button** to start the search. Enter a query in the **Search Line** and click on POI to open the [**POI Context Menu**](#explore-poi-data), where you can view the tags information.

If you search by **Category name**, the first result will display the category of that POI.  If you click on a POI category, the [**Categories Search**](#categories) window opens.

![Context Menu POI](@site/static/img/web/context_menu_poi.png)


Click the chosen POI on the map or in the result list opens the **POI Context Menu**. This menu provides the following data and links:

- **Name and Icon**. Displays the name and icon of the POI.  
- **★ Button (*Add to Favorites*)**. Allows you to save the chosen POI as a [favorite](../web/web-favorites.md#add--edit-favorite).  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Online Photos**. Provides Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, descriptions, inscriptions, etc.  
- **OSM ID**. The OpenStreetMap ID of the POI.  
- **Coordinates**. Clicking the coordinates allows you to copy them.

![Context Menu POI](@site/static/img/web/context_menu_poi_1.png)

## Categories {#categories}

You can choose and display one POI category on the map in the **Categories Menu**:

- Select from the **6 most popular categories**.  
- Or click **Show All** to open the full list of POI categories.

![Categories POI](@site/static/img/web/categories_poi.png)

Click the selected  POI on the map or in the results list to open the **POI Context Menu**. This menu provides the following data and links:

- **Name and Icon**. Displays the name and icon of the POI.  
- **★ Button (*Add to Favorites*)**. Allows you to save the chosen POI as a [favorite](../web/web-favorites.md#add--edit-favorite).  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Online Photos**. Provides Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, descriptions, inscriptions, etc.  
- **OSM ID**. The OpenStreetMap ID of the POI.  
- **Coordinates**. Clicking the coordinates allows you to copy them.

![Context Menu POI](@site/static/img/web/categories_poi_1.png)


## Explore {#explore}

The **Explore** section in the Search menu makes it easier to find places and view points of interest (POIs) with their photos ([Wikidata source](https://www.wikidata.org/)) directly on the map.


To get started:

1. Click the **🔍 icon** to open the search tab, which displays popular POI categories and the **Explore** menu below.  
2. The **Explore** data will automatically be displayed on the map.  
3. Select **"Show All"** in the Explore section to open the full categories list with the ***Filter*** button at the top.  

   ![Explore menu](@site/static/img/web/explore.png)

4. Pressing the ***Filter* button** opens the Categories menu for "Explore." To refine your search, open the Categories menu and select the items you are interested in.  

   ![Explore menu](@site/static/img/web/explore_cat.png)

### Explore POI data {#explore-poi-data}

Clicking on an image POI opens a new context menu that includes:

- **Name and POI Tag**. Displays the name and general tag of the POI.  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Description**. Provides additional information about the POI.  
- **Online Photos**. Displays Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).  
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, etc.  
- **OSM ID**. Displays the OpenStreetMap ID of the POI.  
- **Coordinates**. By clicking on the coordinates, you can copy them.

![Explore menu](@site/static/img/web/poi_context.png)
-->

### Galleria fotografica {#photo-gallery}

Fai clic su ***Mostra tutto*** nella sezione **Foto online** del Menu contestuale PDI per aprire la *Galleria fotografica* per il PDI selezionato. La galleria ti permette di sfogliare tutte le foto disponibili. Fai clic su una foto per aprirla in una vista più grande (modalità Apri foto). Usa Indietro per tornare al Menu contestuale PDI.

I dettagli della foto includono:
- **Data**. La data in cui la foto è stata scattata o caricata.  
- **Autore**. Il nome dell'autore della foto.  
- **Informazioni sulla licenza**. Dettagli sui diritti di utilizzo della foto.  
- **Descrizione**. Informazioni aggiuntive sulla foto.

![Galleria fotografica](@site/static/img/web/poi_photo.png)


## Articoli correlati {#related-articles}

- [Cerca tutto](../search/search-all.md)
- [Cerca PDI](../search/search-poi.md)
- [Mappa](../web/web-map.md)