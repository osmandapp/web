---
source-hash: e9993ea8b8d1473bd9bb8cb2710fc4752a83815a48b1a0393ca624a366172fe9
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

<!--
<InfoIncompleteArticle/>
-->

## Panoramica {#overview}

:::tip Acquisto
Luoghi Popolari è una [funzionalità a pagamento](../purchases/index.md).  
:::

La funzione **Luoghi Popolari** di OsmAnd evidenzia punti di riferimento e attrazioni importanti utilizzando dati strutturati aperti da [Wikidata](https://www.wikidata.org) e [Wikipedia](https://www.wikipedia.org/). Aiuta gli utenti a esplorare destinazioni famose con descrizioni multilingue e foto.

Ogni luogo incluso in questa funzione è collegato a un **ID Wikidata**, che consente a OsmAnd di visualizzare nomi verificati, immagini di anteprima e collegamenti ad articoli di Wikipedia. Questo strumento **non** mostra tutti i punti di OpenStreetMap (OSM). È limitato ai POI con riferimenti a Wikidata.

Attualmente, il database curato include circa **50.000 a 150.000 luoghi tra i più votati** a livello globale, selezionati da oltre **1 milione** di oggetti Wikidata + OSM.

:::note
*Questa è la prima versione della funzione Luoghi Popolari. I feedback sono benvenuti su [GitHub](https://github.com/osmandapp/OsmAnd)*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Luoghi popolari](@site/static/img/map/popular_places/popular_places.png) ![Luoghi popolari](@site/static/img/map/popular_places/popular_places_1.png)

</TabItem>

</Tabs>


## Fonti dei dati {#data-sources}

I **Luoghi Popolari** si basano su contenuti strutturati provenienti da [Wikidata](https://www.wikidata.org) e [Wikipedia](https://www.wikipedia.org/).

Vengono visualizzati solo i POI con un **ID Wikidata** collegato. Questi ID collegano gli oggetti della mappa a nomi, descrizioni e immagini verificate.

È possibile visualizzare il link di Wikidata direttamente nel [Menu Contestuale della Mappa](../map/map-context-menu.md). Toccando il tag Wikidata si apre la pagina completa dell'oggetto sul sito web di Wikidata.

Le immagini e altri contenuti basati su Wikidata nei Luoghi Popolari vengono aggiornati secondo una pianificazione e potrebbero non apparire immediatamente dopo le modifiche in Wikidata o Wikimedia Commons. Frequenza di aggiornamento attuale: due volte al mese — il **10** e il **20**.

Scopri come trovare un ID Wikidata: [Wikipedia: Finding a Wikidata ID](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


## Come si usa {#how-to-use}

<InfoAndroidOnly/>

La funzione **Luoghi Popolari** include sia un elenco curato di punti di riferimento nelle vicinanze, sia un livello di POI basati su Wikipedia sulla mappa.

Ci sono due modi principali per accedere a questa funzione:

- **Versione gratuita**  
  Accesso tramite [Ricerca](#explore-in-search) per esplorare i luoghi vicini in una visualizzazione a elenco.  
  *<Translate android="true" ids="android_button_seq"/>*. Vai a: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*
  
  Questa lista Esplora mostra luoghi Wikipedia/Wikidata classificati per popolarità vicino a te e funziona online. Visualizza fino a 50 luoghi. Poiché i risultati Esplora/Wikipedia sono classificati per rating, l'ordinamento in questi risultati potrebbe differire dalla ricerca POI regolare.

- **Versioni a pagamento** *(Maps+ e OsmAnd Pro)*  
  Abilita la sovrapposizione visiva in [Configura Mappa](#enable-layer).  
  *<Translate android="true" ids="android_button_seq"/>*. Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*  

  In questa modalità, i POI popolari appaiono direttamente sulla mappa con anteprime in miniatura e contenuti di Wikipedia.

  È possibile passare da una fonte Wikipedia **online** a una **offline** nelle impostazioni di sovrapposizione. Per saperne di più, consultare la sezione [Abilita Livello](#enable-layer).


## Esplora nella Ricerca {#explore-in-search}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

![Modalità Esplora](@site/static/img/map/popular_places/popular_places_search.png)  
![Modalità Esplora](@site/static/img/map/popular_places/popular_places_search_2.png)

</TabItem>

</Tabs>

La sezione **<Translate android="true" ids="popular_places_nearby"/>** mostra un elenco scorrevole dei punti di riferimento più votati vicino alla tua posizione attuale. Ogni elemento include:

- Nome del luogo.
- Breve descrizione.
- Tag della categoria POI.
- Distanza e direzione.
- Immagine in miniatura (se disponibile).

Tocca **Mostra tutto** per visualizzare l'elenco completo, o **Mostra sulla mappa** per visualizzare tutti i POI elencati sulla mappa.

Toccando un luogo qualsiasi si apre il [menu contestuale del POI](./map-context-menu.md), dove è possibile visualizzare in anteprima le foto e accedere ai relativi [contenuti di Wikipedia](../plugins/wikipedia.md).

:::tip
La modalità Esplora basata sulla ricerca funziona **solo online** nella versione gratuita.  
Per utilizzarla **offline**, è necessario un abbonamento a [Maps+ o OsmAnd Pro](../purchases/android.md) e aver scaricato le [mappe di Wikipedia](../plugins/wikipedia.md).
:::


## Abilita Livello {#enable-layer}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>**. Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Menu luoghi popolari](@site/static/img/map/popular_places/popular_places_menu.png)

</TabItem>

</Tabs>

La funzione **Luoghi Popolari (Wikipedia)** è disponibile nel menu [Configura Mappa](./configure-map-menu.md). Per visualizzare i luoghi popolari direttamente sulla mappa, abilita il livello POI con i dati di Wikipedia utilizzando le immagini di Wikidata.

Prima di utilizzare questa funzione:

- Assicurati che il [Plugin Wikipedia](../plugins/wikipedia.md) sia abilitato.
- Scarica i dati di Wikipedia per la tua regione se vuoi usarli offline.

### Opzioni Livello {#layer-options}

Una volta abilitate, diventano disponibili le seguenti opzioni:

- **<Translate android="true" ids="poi_osmwiki"/>** – Attiva/disattiva i POI di Wikipedia sulla mappa.

- **Fonte POI** – Passa da:
  - Modalità *Solo Offline* — utilizza i dati della mappa Wikipedia scaricati per la tua regione. 
  - Modalità *Solo Online* — carica luoghi e anteprime delle immagini online. I risultati online potrebbero dipendere dalle impostazioni di lingua selezionate.

- **<Translate android="true" ids="shared_string_language"/>** – Seleziona la lingua per le descrizioni di Wikipedia.

- **<Translate android="true" ids="show_image_previews"/>** – Mostra le anteprime delle immagini da Wikidata accanto ai POI. Se le anteprime delle immagini sono disabilitate, i Luoghi Popolari vengono mostrati con icone invece di miniature sulla mappa. Le anteprime delle immagini utilizzano immagini collegate a Wikidata/Wikipedia: in modalità *Solo Offline* le anteprime dipendono dai dati Wikipedia scaricati, mentre in modalità *Solo Online* le anteprime vengono recuperate online.

Toccando un POI sulla mappa si apre il [menu contestuale del POI](./map-context-menu.md), dove è possibile visualizzare [foto online](#online-photos) e accedere agli [articoli di Wikipedia](../plugins/wikipedia.md) collegati.


## Foto online {#online-photos}

*<Translate android="true" ids="help_article_map_map_context_menu_name,online_photos"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu contestuale Foto online Android](@site/static/img/map/popular_places/online_photos_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu contestuale Foto online iOS](@site/static/img/map/popular_places/online_photos_ios.png)

</TabItem>

</Tabs>

Questa è una sezione all'interno del [menu contestuale del POI](./map-context-menu.md) che mostra un'anteprima fotografica del Luogo Popolare (Wikipedia) selezionato. È possibile scorrere orizzontalmente per sfogliare le foto disponibili, o toccare una qualsiasi immagine per aprirla in [modalità a schermo intero](#gallery).

Le immagini visualizzate online vengono memorizzate automaticamente in cache per l'accesso offline. Le foto memorizzate in cache mostrano un piccolo badge offline nell'angolo. La griglia di anteprima si adatta alla dimensione dello schermo su iPadOS e macOS, garantendo un layout confortevole delle immagini su display più grandi. OsmAnd evita anche di attivare richieste di rete ripetute quando la sezione Foto Online viene chiusa e annulla le richieste precedenti quando si passa rapidamente tra diversi POI.

<!-- 
Learn more about additional options in the [Actions](#actions) section and [Gallery](#gallery).


When you tap a Popular Place on the map or from the list, the [POI context menu](./map-context-menu.md) includes an **Online Photos** section with a horizontal preview of images.

- Tap any photo to view it in fullscreen.  
- Swipe to browse more images.

For more actions like sharing, viewing metadata, or downloading — see [Gallery](#gallery).


### Actions {#actions}

In the Map Context menu How to access:

- Tap the **Show All** (Android) / **View All** (iOS) button to open the [gallery](#gallery) in full screen mode, where you can swipe through all available photos for the selected location.

- Tap any photo to view it in [full screen](#gallery) and access the available actions:  
  **Share**, **Details**, **Open in browser**, and **Download**.

-->

### Galleria {#gallery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Galleria – Android](@site/static/img/map/gallery_menu_android.png)
![Menu Galleria – Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Galleria – iOS](@site/static/img/map/gallery_menu_ios.png)
![Menu Galleria – iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>

Il **Menu Galleria** può visualizzare fino a **100 immagini** relative al punto di interesse selezionato. Per visualizzare queste immagini, tocca **Mostra tutto** (Android) / **Visualizza tutto** (iOS). È possibile scorrere tutte le foto disponibili. Toccando brevemente una foto si apre una vista dettagliata che mostra: *Nome*, *Data di aggiunta*, *Autore*, *Licenza*.

Su iOS, iPadOS e macOS, è possibile navigare tra le foto utilizzando i tasti della tastiera (←/→ per spostarsi tra le immagini, Enter/Spazio per aprire).

È inoltre possibile eseguire le seguenti azioni su ogni foto:

- **Condividi**  
  Condividi l'immagine selezionata utilizzando qualsiasi app compatibile installata sul tuo dispositivo (ad es. messaggistica, e-mail o social media). Il contenuto condiviso include l'immagine e il link alla sua fonte (se disponibile).

- **Dettagli**  
  Apre una vista dettagliata che mostra i metadati dell'immagine, tra cui: *Nome*, *Data di aggiunta*, *Autore*, *Licenza*, *Fonte* e *Link diretto*

- **Apri nel browser**  
  Lancia la pagina di origine dell'immagine (solitamente su [Wikimedia Commons](https://commons.wikimedia.org/)) nel tuo browser predefinito. Ciò consente di visualizzare l'immagine completa, le informazioni sulla licenza e i contenuti correlati.

- **Scarica**  
  Salva l'immagine nella memoria del tuo dispositivo. L'immagine scaricata si trova nella cartella Download predefinita del dispositivo e può essere consultata offline.

**Nota:** Il download salva l'immagine nello storage del dispositivo per un uso offline permanente, mentre le foto memorizzate in cache vengono salvate automaticamente e disponibili offline solo all'interno dell'app.

<!--
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

The Android version does not include an additional menu for photo actions.

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS - Context Menu Options](@site/static/img/map/gallery_menu_ios_3.png)

On **iOS**, long-pressing a photo opens a context menu with additional actions:

- **Details**  
- **Open in browser**  
- **Download**

**Buttons**:

- The **Share** button lets you quickly share the selected image.  
- The **three-dot menu** provides access to extra actions, including viewing details, opening the source in a browser, or downloading the image.

</TabItem>

</Tabs>


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Android – Details View](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS – Details View](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>

The **Details** screen provides full metadata for the selected photo, including: *Name*, *Date added*, *Author*, *License*, *Source*, and *Direct link*
-->


## Articoli Correlati {#related-articles}

- [Menu contestuale della mappa](./map-context-menu.md)
- [Configura Mappa](./configure-map-menu.md)
- [Ricerca POI](../search/search-poi.md)
- [Plugin Wikipedia](../plugins/wikipedia.md)





<!--
### Online Photos 2

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/images_nearby_1_andr.png)   ![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/online_photo_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

#### Actions With Photos

How to access:

- Tap the **Show All**(Android) / **View All**(iOS) button to open [the gallery](#gallery-menu) in full screen mode. There you can swipe through all the images related to the selected location.

- Tap a photo to access actions such as *Share*, *Details*, *Open in browser*, and *Download*.

- You can also [browse](../map/point-layers-on-map.md#-street-level-imagery) street-level images on the map.  

In the **Online photos** section of the map context menu, you can access photos of objects from the [Wikimedia](https://www.wikimedia.org/), which offers media files tagged with `image` or `wikimedia` from OpenStreetMap.

#### Gallery Menu 2

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android.png)   ![Street-Level Imagery Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


The gallery can display up to 100 items. You can browse through all the photos, and short tapping on any photo will open it to view additional details (*Name*, *Date*, *Author*, *License*) and perform various actions (*Share*, *Details*, *Open in browser*, and *Download* options).


<Tabs groupId="operating-systems" queryString="current-os">

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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_2.png) 

</TabItem>

</Tabs>


The Details screen provides information such as the *Name*, *Added Date*, *Author*, *License*, *Source*, and *Link* of the selected item.

-->