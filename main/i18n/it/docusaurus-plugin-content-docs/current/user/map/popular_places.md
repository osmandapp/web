---
source-hash: bf7cd90ca8366333a9c3f68cad51bd9bd86dd6ed8b14a48fdd6c58dac62dff86
sidebar_position: 8
title: Luoghi Popolari
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


<InfoIncompleteArticle/>


## Panoramica {#overview}

La funzione **Luoghi Popolari** in OsmAnd evidenzia punti di riferimento e attrazioni notevoli utilizzando dati strutturati aperti da [Wikidata](https://www.wikidata.org) e [Wikipedia](https://www.wikipedia.org/). Aiuta gli utenti a esplorare destinazioni famose con descrizioni multilingue e foto.

Ogni luogo incluso in questa funzione è collegato a un **ID Wikidata**, che consente a OsmAnd di visualizzare nomi verificati, immagini di anteprima e collegamenti ad articoli di Wikipedia. Questo strumento **non** mostra tutti i punti OpenStreetMap (OSM). È limitato ai POI con riferimenti Wikidata.

Attualmente, il database curato include circa **50.000-150.000 luoghi più apprezzati** a livello globale, selezionati da oltre **1 milione** di oggetti Wikidata + OSM.

:::note
*Questa è la prima versione della funzione Luoghi Popolari. I feedback sono benvenuti su [GitHub](https://github.com)*.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Luoghi popolari](@site/static/img/map/popular_places/popular_places.png) ![Luoghi popolari](@site/static/img/map/popular_places/popular_places_1.png)

</TabItem>

</Tabs>


### Fonti di dati

I **Luoghi Popolari** si basano su contenuti strutturati da [Wikidata](https://www.wikidata.org) e [Wikipedia](https://www.wikipedia.org/).

Vengono visualizzati solo i POI con un **ID Wikidata** collegato. Questi ID collegano gli oggetti della mappa a nomi, descrizioni e immagini verificati.

È possibile visualizzare il collegamento Wikidata direttamente nel [Menu contestuale della mappa](../map/map-context-menu.md). Toccando il tag Wikidata si apre la pagina completa dell'oggetto sul sito web di Wikidata.

Scopri come trovare un ID Wikidata: [Wikipedia: Trovare un ID Wikidata](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


## Come usare {#how-to-use}

<InfoAndroidOnly/>

La funzione **Luoghi Popolari** include sia un elenco curato di punti di riferimento nelle vicinanze sia un livello di POI basati su Wikipedia sulla mappa.

Ci sono due modi principali per accedere a questa funzione:

- **Versione gratuita**
  Accedi tramite [Ricerca](#explore-in-search) per esplorare i luoghi vicini in visualizzazione elenco.
  *<Translate android="true" ids="android_button_seq"/>*. Vai a: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

- **Versioni a pagamento** *(Maps+ e OsmAnd Pro)*
  Abilita la sovrapposizione visiva in [Configura mappa](#enable-layer).
  *<Translate android="true" ids="android_button_seq"/>*. Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

  In questa modalità, i POI popolari appaiono direttamente sulla mappa con anteprime in miniatura e contenuti di Wikipedia.

È possibile passare da fonti Wikipedia **online** a **offline** nelle impostazioni della sovrapposizione. Ulteriori informazioni in [Abilita livello](#enable-layer).


## Esplora in Ricerca {#explore-in-search}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

![Modalità Esplora](@site/static/img/map/popular_places/popular_places_search.png)
![Modalità Esplora](@site/static/img/map/popular_places/popular_places_search_2.png)

</TabItem>

</Tabs>

La sezione **<Translate android="true" ids="popular_places_nearby"/>** visualizza un elenco scorrevole dei punti di riferimento più apprezzati vicino alla tua posizione attuale. Ogni elemento include:

- Nome del luogo.
- Breve descrizione.
- Tag della categoria POI.
- Distanza e direzione.
- Immagine in miniatura (se disponibile).

Tocca **Mostra tutto** per visualizzare l'elenco completo, o **Mostra sulla mappa** per visualizzare tutti i POI elencati sulla mappa.

Toccando un luogo si apre il [menu contestuale POI](./map-context-menu.md), dove puoi visualizzare le foto in anteprima e accedere ai [contenuti di Wikipedia](../plugins/wikipedia.md) correlati.

:::tip
La modalità Esplora basata sulla ricerca funziona **solo online** nella versione gratuita.
Per usarla **offline**, è necessario un abbonamento [Maps+ o OsmAnd Pro](../purchases/android.md) e le [mappe di Wikipedia](../plugins/wikipedia.md) scaricate.
:::


## Abilita livello {#enable-layer}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>**. Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Menu Luoghi popolari](@site/static/img/map/popular_places/popular_places_menu.png)

</TabItem>

</Tabs>

La funzione **Luoghi Popolari (Wikipedia)** è disponibile nel menu [Configura mappa](./configure-map-menu.md). Per visualizzare i luoghi popolari direttamente sulla mappa, abilita il livello POI con dati da Wikipedia utilizzando immagini Wikidata.

Prima di utilizzare questa funzione:

- Assicurati che il [Plugin Wikipedia](../plugins/wikipedia.md) sia abilitato.
- Scarica i dati di Wikipedia per la tua regione se desideri utilizzarli offline.

### Opzioni livello

Una volta abilitate, diventano disponibili le seguenti opzioni:

- **<Translate android="true" ids="poi_osmwiki"/>** – Attiva/disattiva i POI di Wikipedia sulla mappa.

- **Fonte POI** – Passa tra:
  - *Modalità offline* (gli articoli di Wikipedia devono essere scaricati).
  - *Modalità solo online* (utilizza dati e immagini in tempo reale).

- **<Translate android="true" ids="shared_string_language"/>** – Seleziona la lingua per le descrizioni di Wikipedia.

- **<Translate android="true" ids="show_image_previews"/>** – Mostra le miniature delle immagini da Wikidata accanto ai POI.

Toccando un POI sulla mappa si apre il [menu contestuale POI](./map-context-menu.md), dove puoi visualizzare le [foto online](#online-photos) e accedere agli [articoli di Wikipedia](../plugins/wikipedia.md) collegati.


## Foto online {#online-photos}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu contestuale Foto online Android](@site/static/img/map/popular_places/online_photos_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu contestuale Foto online iOS](@site/static/img/map/popular_places/online_photos_ios.png)

</TabItem>

</Tabs>

*<Translate android="true" ids="help_article_map_map_context_menu_name,online_photos"/>*

Questa è una sezione all'interno del [menu contestuale POI](./map-context-menu.md) che visualizza un'anteprima fotografica del Luogo Popolare (Wikipedia) selezionato. Puoi scorrere orizzontalmente per sfogliare le foto disponibili, o toccare un'immagine qualsiasi per aprirla in [modalità a schermo intero](#gallery).

Scopri di più sulle opzioni aggiuntive nelle sezioni [Azioni](#actions) e [Galleria](#gallery).


<!--

When you tap a Popular Place on the map or from the list, the [POI context menu](./map-context-menu.md) includes an **Online Photos** section with a horizontal preview of images.

- Tap any photo to view it in fullscreen.
- Swipe to browse more images.

For more actions like sharing, viewing metadata, or downloading — see [Gallery](#gallery).

-->

### Azioni {#actions}

Nel menu contestuale della mappa Come accedere:

- Tocca il pulsante **Mostra tutto** (Android) / **Visualizza tutto** (iOS) per aprire la [galleria](#gallery) in modalità a schermo intero, dove puoi scorrere tutte le foto disponibili per la posizione selezionata.

- Tocca una foto qualsiasi per visualizzarla a [schermo intero](#gallery) e accedere alle azioni disponibili:
  **Condividi**, **Dettagli**, **Apri nel browser** e **Scarica**.


### Galleria {#gallery}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu Galleria – Android](@site/static/img/map/gallery_menu_android.png)
![Menu Galleria – Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Galleria – iOS](@site/static/img/map/gallery_menu_ios.png)
![Menu Galleria – iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


Il **Menu Galleria** può visualizzare fino a **100 immagini** relative al punto di interesse selezionato. Puoi scorrere tutte le foto disponibili. Toccando una foto si apre brevemente una visualizzazione dettagliata che mostra: *Nome*, *Data aggiunta*, *Autore*, *Licenza*

Puoi anche eseguire le seguenti azioni su ogni foto:

- **Condividi**
  Condividi l'immagine selezionata utilizzando qualsiasi app compatibile installata sul tuo dispositivo (ad esempio, messaggistica, e-mail o social media). Il contenuto condiviso include l'immagine e il suo link di origine (se disponibile).

- **Dettagli**
  Apri una visualizzazione dettagliata che mostra i metadati dell'immagine, tra cui: *Nome*, *Data aggiunta*, *Autore*, *Licenza*, *Fonte* e *Link diretto*

- **Apri nel browser**
  Avvia la pagina di origine dell'immagine (solitamente su [Wikimedia Commons](https://commons.wikimedia.org/)) nel tuo browser predefinito. Ciò ti consente di visualizzare l'immagine completa, le informazioni sulla licenza e i contenuti correlati.

- **Scarica**
  Salva l'immagine nella memoria del tuo dispositivo. L'immagine scaricata si trova nella cartella Download predefinita del tuo dispositivo ed è accessibile offline.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

La versione Android non include un menu aggiuntivo per le azioni sulle foto.

</TabItem>

<TabItem value="ios" label="iOS">

![iOS - Opzioni menu contestuale](@site/static/img/map/gallery_menu_ios_3.png)

Su **iOS**, una pressione prolungata su una foto apre un menu contestuale con azioni aggiuntive:

- **Dettagli**
- **Apri nel browser**
- **Scarica**

**Pulsanti**:

- Il pulsante **Condividi** ti consente di condividere rapidamente l'immagine selezionata.
- Il **menu a tre puntini** fornisce accesso ad azioni extra, tra cui la visualizzazione dei dettagli, l'apertura della sorgente in un browser o il download dell'immagine.

</TabItem>

</Tabs>


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Android – Visualizzazione dettagli](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS – Visualizzazione dettagli](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>

La schermata **Dettagli** fornisce metadati completi per la foto selezionata, tra cui: *Nome*, *Data aggiunta*, *Autore*, *Licenza*, *Fonte* e *Link diretto*


## Articoli correlati

- [Menu contestuale della mappa](./map-context-menu.md)
- [Configura mappa](./configure-map-menu.md)
- [Cerca POI](../search/search-poi.md)
- [Plugin Wikipedia](../plugins/wikipedia.md)


> *Ultimo aggiornamento: Giugno 2025*


<!--
### Online Photos 2

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Online Photos context menu Android](@site/static/img/map/images_nearby_1_andr.png) ![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Online Photos context menu iOS](@site/static/img/map/online_photo_ios.png) ![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

#### Actions With Photos

How to access:

- Tap the **Show All**(Android) / **View All**(iOS) button to open [the gallery](#gallery-menu) in full screen mode. There you can swipe through all the images related to the selected location.

- Tap a photo to access actions such as *Share*, *Details*, *Open in browser*, and *Download*.

- You can also [browse](../map/point-layers-on-map.md#-street-level-imagery) street-level images on the map.

In the **Online photos** section of the map context menu, you can access photos of objects from the [Wikimedia](https://www.wikimedia.org/), which offers media files tagged with `image` or `wikimedia` from OpenStreetMap.

#### Gallery Menu 2

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android.png) ![Street-Level Imagery Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios.png) ![Street-Level Imagery iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


The gallery can display up to 100 items. You can browse through all the photos, and short tapping on any photo will open it to view additional details (*Name*, *Date*, *Author*, *License*) and perform various actions (*Share*, *Details*, *Open in browser*, and *Download* options).


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_3.png)

</TabItem>

</Tabs>



On iOS, long tapping on any photo opens an additional menu with actions such as *Details*, *Open in browser*, and *Download*.

Buttons:

- The **Share** button allows you to share the selected item.
- The **Three dots** button opens a menu with options like *Details*, *Open in browser*, and *Download*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>


The Details screen provides information such as the *Name*, *Added Date*, *Author*, *License*, *Source*, and *Link* of the selected item.

-->