---
source-hash: 576b2a6ec144f65d9bbd387b7ce25523a8a81f929e1a4c17b8d400a8c97827dd
sidebar_position: 6
sidebar_label: Cerca
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


<InfoIncompleteArticle/>


## Panoramica {#overview}

È possibile accedere al **menu Cerca** dal pannello laterale o dall'**angolo sinistro 🔍** della mappa. Contiene:

- [Barra di ricerca](#search-bar). Inserisci parole chiave per cercare posizioni specifiche o punti di interesse.
- [Sezione Categorie](#categories). Sfoglia le opzioni categorizzate per una ricerca più semplice dei POI.
- [Sezione Esplora](#explore). Scopri luoghi e aree di interesse nelle vicinanze con foto.

![Menu Cerca](@site/static/img/web/search.png)


## Barra di ricerca {#search-bar}

Fai clic sul **pulsante 🔍** per avviare la ricerca. Inserisci una query nella **linea di ricerca** e fai clic sul POI per aprire il [**Menu contestuale POI**](#explore-poi-data), dove puoi visualizzare le informazioni sui tag.

Se cerchi per **nome della categoria**, il primo risultato visualizzerà la categoria di quel POI. Se fai clic su una categoria di POI, si aprirà la finestra [**Ricerca categorie**](#categories).

![Menu contestuale POI](@site/static/img/web/context_menu_poi.png)


Facendo clic sul POI scelto sulla mappa o nell'elenco dei risultati si apre il **Menu contestuale POI**. Questo menu fornisce i seguenti dati e collegamenti:

- **Nome e icona**. Visualizza il nome e l'icona del POI.
- **Pulsante ★ (*Aggiungi ai preferiti*)**. Consente di salvare il POI scelto come [preferito](../web/web-userdata.mdx#add--edit-favorite).
- **Pulsante 🔍**. Sposta la mappa sulla posizione del POI.
- **Distanza e direzione**. Mostra la distanza e la direzione dalla tua posizione al POI scelto.
- **Posizione**. Visualizza le coordinate del POI.
- **Foto online**. Fornisce dati Wikimedia relativi al POI, se disponibili. Fai clic su *Mostra tutto* per aprire la [Galleria fotografica](#photo-gallery).
- **Dati oggetto**. Include dettagli come contatti, collegamenti ai social media, collegamenti a Wikipedia, descrizioni, iscrizioni, ecc.
- **ID OSM**. L'ID OpenStreetMap del POI.
- **Coordinate**. Facendo clic sulle coordinate è possibile copiarle.

![Menu contestuale POI](@site/static/img/web/context_menu_poi_1.png)

## Categorie {#categories}

È possibile scegliere e visualizzare una categoria di POI sulla mappa nel **Menu Categorie**:

- Seleziona tra le **6 categorie più popolari**.
- Oppure fai clic su **Mostra tutto** per aprire l'elenco completo delle categorie di POI.

![Categorie POI](@site/static/img/web/categories_poi.png)

Fai clic sul POI selezionato sulla mappa o nell'elenco dei risultati per aprire il **Menu contestuale POI**. Questo menu fornisce i seguenti dati e collegamenti:

- **Nome e icona**. Visualizza il nome e l'icona del POI.
- **Pulsante ★ (*Aggiungi ai preferiti*)**. Consente di salvare il POI scelto come [preferito](../web/web-userdata.mdx#add--edit-favorite).
- **Pulsante 🔍**. Sposta la mappa sulla posizione del POI.
- **Distanza e direzione**. Mostra la distanza e la direzione dalla tua posizione al POI scelto.
- **Posizione**. Visualizza le coordinate del POI.
- **Foto online**. Fornisce dati Wikimedia relativi al POI, se disponibili. Fai clic su *Mostra tutto* per aprire la [Galleria fotografica](#photo-gallery).
- **Dati oggetto**. Include dettagli come contatti, collegamenti ai social media, collegamenti a Wikipedia, descrizioni, iscrizioni, ecc.
- **ID OSM**. L'ID OpenStreetMap del POI.
- **Coordinate**. Facendo clic sulle coordinate è possibile copiarle.

![Menu contestuale POI](@site/static/img/web/categories_poi_1.png)


## Esplora {#explore}

La sezione **Esplora** nel menu Cerca semplifica la ricerca di luoghi e la visualizzazione di punti di interesse (POI) con le loro foto ([fonte Wikidata](https://www.wikidata.org/)) direttamente sulla mappa.


Per iniziare:

1. Fai clic sull'**icona 🔍** per aprire la scheda di ricerca, che visualizza le categorie di POI più popolari e il menu **Esplora** sottostante.
2. I dati di **Esplora** verranno visualizzati automaticamente sulla mappa.
3. Seleziona **"Mostra tutto"** nella sezione Esplora per aprire l'elenco completo delle categorie con il pulsante ***Filtra*** in alto.

   ![Menu Esplora](@site/static/img/web/explore.png)

4. Premendo il pulsante ***Filtra*** si apre il menu Categorie per "Esplora". Per perfezionare la ricerca, apri il menu Categorie e seleziona gli elementi che ti interessano.

   ![Menu Esplora](@site/static/img/web/explore_cat.png)

### Esplora dati POI {#explore-poi-data}

Facendo clic su un POI immagine si apre un nuovo menu contestuale che include:

- **Nome e tag POI**. Visualizza il nome e il tag generale del POI.
- **Pulsante 🔍**. Sposta la mappa sulla posizione del POI.
- **Distanza e direzione**. Mostra la distanza e la direzione dalla tua posizione al POI scelto.
- **Posizione**. Visualizza le coordinate del POI.
- **Descrizione**. Fornisce informazioni aggiuntive sul POI.
- **Foto online**. Visualizza i dati Wikimedia relativi al POI, se disponibili. Fai clic su *Mostra tutto* per aprire la [Galleria fotografica](#photo-gallery).
- **Dati oggetto**. Include dettagli come contatti, collegamenti ai social media, collegamenti a Wikipedia, ecc.
- **ID OSM**. Visualizza l'ID OpenStreetMap del POI.
- **Coordinate**. Facendo clic sulle coordinate è possibile copiarle.

![Menu Esplora](@site/static/img/web/poi_context.png)

### Galleria fotografica {#photo-gallery}

Se fai clic su ***Mostra tutto*** nella sezione **Foto online** del menu contestuale si apre la *Galleria fotografica* del POI selezionato.
Nella *Galleria fotografica*, puoi scorrere tutte le foto del POI.

Ogni foto contiene:

- **Data**. La data in cui è stata scattata o caricata la foto.
- **Autore**. Il nome dell'autore della foto.
- **Informazioni sulla licenza**. Dettagli sui diritti di utilizzo della foto.
- **Descrizione**. Informazioni aggiuntive sulla foto.

![Galleria fotografica](@site/static/img/web/poi_photo.png)


> *Ultimo aggiornamento: gennaio 2025*