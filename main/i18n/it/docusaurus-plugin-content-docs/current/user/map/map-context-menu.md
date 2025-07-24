---
source-hash: c406b4c0fcaa397722ffd39164023525d4248abb42fb6a6add45bac6f360f5b8
sidebar_position: 3
title: Menu contestuale della mappa
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

Il menu contestuale della mappa fornisce informazioni sull'oggetto selezionato sulla mappa. È inoltre possibile utilizzarlo per creare un percorso verso la posizione selezionata. Per aprire il menu contestuale, individuare prima la posizione desiderata sulla mappa, quindi selezionare l'oggetto con un tocco breve o un tocco lungo quando si seleziona un punto preciso sulla mappa.


### Selezionare un oggetto (tocco singolo) {#select-an-object-single-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu contestuale Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu contestuale iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

Il **menu contestuale** appare quando si **tocca una volta** un oggetto marcato sulla mappa. Questo menu contestuale mostra informazioni essenziali sull'oggetto selezionato, inclusi il suo *nome, icona* (come rappresentata sulla mappa), *indirizzo, distanza* e *direzione* dalla posizione corrente.  

È possibile selezionare vari tipi di oggetti mappa, come *POI*, *preferiti*, *fermate di trasporto*, *marcatori*, *vette montane* o altri *oggetti mappa*.

:::note
Gli oggetti mappa selezionati corrispondono a [**nodi**](https://wiki.openstreetmap.org/wiki/Node) o [**vie**](https://wiki.openstreetmap.org/wiki/Way) di OpenStreetMap.
:::

> *L'altezza delle vette montane è visualizzata in metri o piedi a seconda delle [unità di lunghezza](../personal/profiles.md#units--formats) selezionate nelle impostazioni del profilo.*


### Selezionare un punto qualsiasi (tocco lungo) {#select-any-point-long-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu contestuale tocco lungo Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu contestuale tocco lungo iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

Quando si **tocca a lungo** un punto qualsiasi della mappa, appare un **menu contestuale** che fornisce informazioni sulla posizione selezionata. Questo include l'indirizzo, la distanza e la direzione dalla posizione corrente.

> **NOTA**. *Un tocco lungo su un **numero civico** ne evidenzia il contorno e apre il menu contestuale della mappa.*


### Selezionare percorso {#select-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu contestuale traccia Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Schermata statistiche traccia iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

Toccando una [traccia GPX](../map/tracks/index.md) sulla mappa si apre il [menu contestuale della traccia](../map/tracks/track-context-menu.md), dove è possibile accedere a opzioni aggiuntive relative alla traccia.


### Nascondere il menu contestuale {#hide-context-menu}

Per chiudere il **menu contestuale**:

- Tocca un'area *vuota* sulla mappa per evitare di riaprire il menu.
- Trascina il menu *verso il basso* dalla parte superiore.


## Dettagli {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu contestuale Android](@site/static/img/map/context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu contestuale iOS](@site/static/img/map/context_menu_ios.png)

</TabItem>

</Tabs>

Per informazioni più dettagliate su un oggetto, tocca il pulsante **Dettagli** nel menu contestuale o scorri il pannello verso l'alto per espanderlo.


### Informazioni oggetto {#object-info}

Il pannello **Informazioni oggetto** fornisce dettagli aggiuntivi sull'oggetto selezionato. È possibile toccare qualsiasi voce per copiare le informazioni negli appunti.  

I dettagli disponibili includono:

- [Nomi alternativi](#alternative-names)
- [Coordinate](../map/map-context-menu.md#coordinates)
- [POI vicini / Wikipedia](../map/map-context-menu.md#nearby-pois--wikipedia-nearby-pois--wikipedia)
- [Percorsi di trasporto pubblico](../map/map-context-menu.md#public-transport-routes) (per le fermate di trasporto)
- [Preferiti / Punti traccia dello stesso gruppo](../map/map-context-menu.md#favorites--track-points-from-the-group)
- [Link OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)
- [Immagine / descrizione dell'articolo](../map/map-context-menu.md#article-description-article-description)
- [Foto online](../map/map-context-menu.md#online-photos)

Inoltre, il pannello può includere [Dettagli OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_features), come:

- [Sito web](https://wiki.openstreetmap.org/wiki/Key:website)
- [Numero di telefono](https://wiki.openstreetmap.org/wiki/Key:contact)
- [Orari di apertura](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
- [Costo](https://wiki.openstreetmap.org/wiki/Key:fee)
- [Accessibilità](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
- [Larghezza](https://wiki.openstreetmap.org/wiki/Key:width) / [Altezza](https://wiki.openstreetmap.org/wiki/Key:height)


### Nomi alternativi {#alternative-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Nomi alternativi Android 1](@site/static/img/map/alternative_names_andr_1.png) ![Nomi alternativi Android](@site/static/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nomi alternativi Android 1](@site/static/img/map/alternative_names_1_ios.png) ![Nomi alternativi Android](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

OsmAnd visualizza **nomi POI aggiuntivi** nel *menu contestuale della mappa*, dando priorità al nome nella *lingua di visualizzazione* o nell'elenco delle lingue preferite del sistema. Se sono disponibili più traduzioni, vengono raggruppate in tag categorizzati come *nome, marchio, operatore* o *POI vicini*.  

Caratteristiche della visualizzazione dei nomi alternativi:

- Le traduzioni aggiuntive sono accessibili tramite un *elenco a discesa*.

- I nomi sono categorizzati in diversi gruppi come l'*elenco dei nomi in altre lingue*, *Regionale*, *Locale*, *Nazionale*, *Internazionale*, *Breve*, *Vecchio*, *Ufficiale* e *Nomi alternativi*.

- Altre categorie includono *traduzione specifica per regione* o *impostazioni predefinite*.

- Se una traduzione specifica *non è disponibile*, OsmAnd utilizza per impostazione predefinita il nome **locale** per garantire accuratezza e coerenza nelle regioni multilingue.


### Informazioni sul poligono {#polygon-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Informazioni sul poligono Android](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Informazioni sul poligono Android](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

La funzione **Informazioni sul poligono** fornisce dati dettagliati sui **poligoni** vicini visualizzati sulla mappa. Questo include caratteristiche geografiche, confini amministrativi e altre aree mappate.  

**Sezione "All'interno"**:

- Visualizza un *elenco di poligoni circostanti*, ordinati *dal più piccolo al più grande* in base alla dimensione dell'area.

- Ogni voce mostra il *tipo e il nome del poligono*, consentendo una facile identificazione di regioni e confini.

**Dettagli aggiuntivi**:

- Quando si seleziona un punto sulla mappa o un POI, il pannello **informazioni sul poligono** visualizza un elenco di tutti i poligoni che contengono la posizione selezionata.

- Le voci nell'elenco includono **divisioni amministrative, aree di utilizzo del suolo, caratteristiche naturali e altre regioni categorizzate**.

- Il pannello consente agli utenti di **copiare il nome e i dettagli del poligono** per riferimento.

- Per visualizzare queste informazioni, vai a *Menu contestuale della mappa → Dettagli → All'interno*.

Questa funzione ti aiuta a comprendere la tua *posizione attuale* in relazione a divisioni amministrative mappate, aree naturali o altre importanti caratteristiche geografiche.


### Coordinate {#coordinates}

|Formato coordinate| |
|:------|:------|
| <ul><li>DDD.DDDDD (Gradi decimali semplici)</li><li>DDD.DDDDD (N/S, E/W virgola)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[UTM Standard](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[Swiss Grid CH1903 e CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[Link web OsmAnd](https://osmand.net/map)</li><li>[Link web OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![Coordinate](@site/static/img/map/map_context_menu_Coordinates.png) |

Nel menu contestuale, è possibile trovare le [coordinate geografiche](../search/search-coordinates.md#coordinate-format) di un punto in vari formati e anche i link condivisibili di OsmAnd e [OpenStreetMap](../map/map-context-menu.md#openstreetmap-link) (l'ultima opzione è disponibile solo quando il [plugin di modifica OpenStreetMap](../plugins/osm-editing.md) è abilitato). Se si espande la sezione delle coordinate e si tocca a lungo una riga dall'elenco, i suoi valori verranno automaticamente copiati negli appunti (**Android**) o l'opzione *Copia* diventerà disponibile nel messaggio pop-up (**iOS**).  

Il link web di OsmAnd può essere riconosciuto automaticamente da OsmAnd (esempio: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). Sia i link di OsmAnd che quelli di [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) vengono aperti sui siti corrispondenti con un marcatore nel punto di interesse.  


### POI vicini / Wikipedia {#nearby-pois--wikipedia}

![Articoli Wikipedia vicini](@site/static/img/map/map_context_menu_nearby_wikipedia.png) ![Articoli Wikipedia vicini](@site/static/img/map/map_context_menu_nearby_wikipedia_1.png)

Queste sezioni mostrano [articoli di Wikipedia](../plugins/wikipedia.md) o [Punti di Interesse](../map/point-layers-on-map.md#points-of-interest-pois) vicini con *<Translate android="true" ids="shared_string_show_on_map"/>* e *<Translate android="true" ids="search_more"/>* per visualizzare e [cercare](../search/search-poi.md) tutti gli altri POI e articoli di Wikipedia.

Toccando *POI vicini / Articoli Wikipedia* si apre un elenco di punti (POI o Wikipedia). Un tocco su uno di questi punti da un elenco di punti sposta la mappa su questo punto (POI o Wikipedia) con l'apertura del menu contestuale della mappa del punto.

> **NOTA**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) apparirà solo se hai precedentemente scaricato mappe speciali con [articoli di Wikipedia per quest'area](../plugins/wikipedia.md#download-wikipedia-packages-download-wikipedia-packages)*.


### Percorsi di trasporto pubblico {#public-transport-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Percorsi di trasporto pubblico Android](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorsi di trasporto pubblico iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

Informazioni visualizzate sui percorsi di trasporto pubblico per la fermata di trasporto scelta. Informazioni sul menu contestuale del trasporto pubblico e sulle azioni con esso, leggere nell'[articolo](../map/public-transport.md#transport-routes-context-menu).


### Preferiti / Punti traccia dal gruppo {#favorites--track-points-from-the-group}

![Elenco preferiti](@site/static/img/map/favorite_list_android.png) ![Elenco preferiti completo](@site/static/img/map/favorite_list_full_android.png)

Questo è un elenco di tutti i punti in un gruppo per un Preferito o un Waypoint. Toccando, l'intero elenco di punti di un gruppo si espande, toccando un punto dall'elenco, la mappa si sposta sul punto selezionato.


### Oggetto lineare {#linear-object}

![Elenco preferiti](@site/static/img/map/linear_object_andr.png)

Per gli **oggetti lineari**, come *barriere, gradini, cancelli, panchine, scivoli, sbarramenti, dissuasori o interruzioni*, il menu contestuale visualizza dettagli aggiuntivi. Questi includono il tipo di POI e l'indirizzo ad essi associati, o il tipo di oggetto se non è assegnato alcun nome.


### Dettagli area di arrampicata e falesia {#climbing-area-and-crag-details}

![Elenco preferiti](@site/static/img/map/climbing_andr.png)

Quando si seleziona un'[area di arrampicata o una falesia](../map/routes.md#climbing-routes), OsmAnd fornisce un riepilogo dettagliato della località di arrampicata, inclusi: nome e posizione, valutazione della difficoltà di arrampicata (UIAA, francese, YDS, ecc.), tipo di roccia, altezza e lunghezza del percorso, qualità dell'arrampicata e condizioni della superficie.


### Piste da sci, percorsi MTB e sentieri per moto da cross {#ski-slopes-mtb-routes-and-dirt-bike-trails}

![Piste da sci e sentieri MTB](@site/static/img/map/ski_mtb.png)  ![Piste da sci e sentieri MTB](@site/static/img/map/ski_mtb_2.png)

È possibile toccare elementi della mappa come **piste da sci**, **percorsi per mountain bike (MTB)** e **sentieri per moto da cross** per aprire il loro menu contestuale con informazioni dettagliate. Le informazioni disponibili includono: nome del percorso o della pista (se disponibile nei dati OSM), ID oggetto OSM o ID relazione, livello di difficoltà, lunghezza del sentiero, tipo di terreno e altro ancora.

**Tag supportati:** `piste:type=*` (piste da sci), `route=mtb`, `route=atv` o `route=dirt_bike` (sentieri fuoristrada per moto)

:::note
Utilizza gli stili di mappa [Inverno e sci](../map/vector-maps.md#winter-and-ski) o [Fuoristrada](../map/vector-maps.md#offroad) per una migliore visibilità.
:::


### Descrizione articolo {#article-description}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Elenco descrizioni](@site/static/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Elenco descrizioni](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs>

Questa parte contiene una parte della descrizione dall'[articolo di Wikipedia](../plugins/wikipedia.md), [Preferito](../personal/favorites.md) o descrizione del Waypoint, toccando è possibile aprire la descrizione completa.


### Link OpenStreetMap {#openstreetmap-link}

![Link OSM](@site/static/img/map/context_menu_osm_link.png) ![Link OSM](@site/static/img/map/context_menu_osm_link_1.png)

Il link OpenStreetMap fornisce un collegamento diretto all'oggetto OpenStreetMap dove è possibile trovare informazioni complete su di esso:  
[nodo](https://wiki.openstreetmap.org/wiki/Node) o [via](https://wiki.openstreetmap.org/wiki/Way).


### Foto online {#online-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu contestuale foto online Android](@site/static/img/map/images_nearby_1_andr.png)
![Menu galleria Android](@site/static/img/map/gallery_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu contestuale foto online iOS](@site/static/img/map/online_photo_ios.png)
![Menu galleria iOS](@site/static/img/map/gallery_menu_2_ios.png)

</TabItem>

</Tabs>

Quando si tocca un Luogo Popolare sulla mappa, la sezione **Foto Online** nel *menu contestuale dei POI* visualizza anteprime di immagini provenienti da [Wikipedia](https://www.wikipedia.org/) e [Wikimedia Commons](https://www.wikimedia.org/).

Toccando una foto si apre la vista **Galleria**, dove è possibile:

- Sfogliare fino a 100 immagini per luogo
- Visualizzare i metadati dell'immagine (*autore*, *licenza*, *fonte*)
- Eseguire azioni: **Condividi**, **Apri nel browser**, **Scarica**

> *Su iOS, un tocco lungo su un'immagine apre un menu contestuale con azioni rapide.*

Per maggiori informazioni, vedi: [Foto online](https://osmand.net/docs/user/map/popular_places#online-photos) e [Vista galleria](https://osmand.net/docs/user/map/popular_places#gallery)


### Immagini a livello stradale {#street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Immagini a livello stradale Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Immagini a livello stradale iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

OsmAnd supporta l'integrazione con [Mapillary](https://www.mapillary.com/), una piattaforma globale per immagini a livello stradale crowdsourced. Questa funzione consente di visualizzare ed esplorare sequenze fotografiche del mondo reale direttamente sulla mappa.

Le immagini Mapillary appaiono come icone fotografiche direzionali, allineate con la strada o il percorso in cui sono state catturate. Queste possono aiutarti a comprendere meglio l'ambiente circostante, specialmente in aree sconosciute.

Puoi:

- Utilizzare il pulsante **Esplora** per aprire il visualizzatore di Mapillary e sfogliare le immagini a livello stradale vicine.
- Toccare il pulsante **Aggiungi foto** per contribuire con le tue foto alla piattaforma Mapillary.

> *Scopri di più su come attivare e utilizzare questa funzione nella [guida del plugin Mapillary](../plugins/mapillary.md).*


### * Nota audio/video {#-audiovideo-note}

<InfoAndroidOnly />

![Elenco immagini](@site/static/img/map/image_list_android.png) ![Elenco video](@site/static/img/map/video_list_android.png)

Le informazioni sulle [note audio/video](../plugins/audio-video-notes.md) come data, coordinate, anteprima e altro sono disponibili nel menu **Dettagli**. È possibile aprire le note in un software secondario toccando il pulsante **Riproduci / Mostra** nel menu contestuale della nota.


## Azioni {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu azioni Android](@site/static/img/map/actions_menu_android.png) ![Menu azioni aggiuntive Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu azioni iOS](@site/static/img/map/actions_menu_ios.png)  ![Menu azioni aggiuntive iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

È un insieme di manipolazioni specifiche che possono essere eseguite su un punto o un oggetto. Questo menu è diviso in due parti: la sezione visibile è composta da un massimo di 3 azioni e le altre azioni sono accessibili tramite il pulsante *Azioni*. È possibile personalizzare (*Android*) l'ordine delle azioni in [Impostazioni generali](#customize).


### Aggiungi / Modifica Preferito {#add--edit-favorite}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Azione Aggiungi modifica preferito Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Azione Aggiungi modifica preferito iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

Nel menu contestuale, ci sono opzioni per **aggiungere** o **modificare** il punto / oggetto selezionato all'[elenco dei preferiti](../personal/myplaces.md).

- Per **Aggiungere**, è necessario selezionare un punto / oggetto, toccare l'icona a *Stella* (con la firma Aggiungi) e inserire tutte le informazioni necessarie.  

- Per **Modificare** le informazioni sul punto preferito, è necessario attivare *Mostra sulla mappa* (*Menu → I miei luoghi → Preferiti*) quindi premerci sopra e nel menu contestuale, invece dell'icona a *Stella*, apparirà l'icona a *Matita* (con la firma Modifica).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md)  - aggiunge un punto selezionato all'elenco dei preferiti.


### Aggiungi / Modifica marcatore {#add--edit-marker}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Azione Aggiungi modifica marcatore Android](@site/static/img/map/add_marker_android.png) ![Azione Passa marcatore Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![Azione Aggiungi modifica marcatore iOS](@site/static/img/map/add_marker_ios.png)  ![Azione Ripristina marcatore Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

È possibile marcare un punto o un oggetto per facilitare la pianificazione della navigazione. Basta toccare l'icona a **bandiera** nel menu (*Android*), la **freccia** (*iOS*) - visualizza la direzione e la distanza dal punto selezionato dalla posizione corrente.

Azioni:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). Posiziona un nuovo marcatore sul punto selezionato.
- **Marca passato** (*Android*) / *Ignora* (*iOS*). Disattiva il marcatore e lo sposta nella Cronologia.
- **Rendi attivo** (*Android*). Sposta il marcatore nella posizione superiore (sul pannello superiore).
- **Ripristina marcatore** (*Android*). Sposta il marcatore dalla Cronologia all'elenco attivo.

Leggi di più sui [marcatori qui](../personal/markers.md).


### Condividi {#share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

| Versioni fino ad Android 14 | 14+ Android |
|:------------|:---------------|
| ![Azione Condividi Android](@site/static/img/map/action_share_1_andr.png) | ![Azione Condividi Android](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">  

![Azione Condividi iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

L'app OsmAnd ti consente di **<Translate android="true" ids="shared_string_share"/>** *La mia posizione* o qualsiasi posizione selezionata sulla mappa con messaggistica, e-mail o social media.  

Opzioni disponibili per condividere la posizione:

- ***Invia***. Invia testo tramite le app disponibili sul tuo dispositivo. Include tutte le informazioni sulla posizione: il nome della mia posizione o il nome del POI selezionato, l'indirizzo, le coordinate e la geolocalizzazione come link.
- ***Copia***. Copia tutte le informazioni sulla posizione (il nome della mia posizione o il nome del POI selezionato, l'indirizzo, le coordinate e la geolocalizzazione come link) negli appunti.  
- ***Copia indirizzo***. Copia solo le informazioni sull'indirizzo negli appunti.
- ***Copia nome POI***. Copia solo il nome del POI o l'indirizzo se non c'è un nome negli appunti.
- ***Copia coordinate***. Copia solo le informazioni sulle coordinate negli appunti.
- ***geo***. Apre un elenco di applicazioni disponibili che supportano le geolocalizzazioni. <!-- (info about [geo urls Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***QR-code*** (*Android*). Genera un link alla posizione selezionata in un codice QR.

<!--
- ***Salva immagine*** (*iOS*) - salva uno screenshot con la mappa e il punto selezionato nella galleria immagini.
- ***Assegna a contatto*** (*iOS*) - crea un'icona per il contatto scelto dallo screenshot della mappa.
- ***Stampa*** (*iOS*) - apre le opzioni di stampa per stampare lo screenshot della mappa.
- ***Salva nei file*** (*iOS*) - salva lo screenshot della mappa in iCloud Drive o nella memoria del dispositivo. -->


### Indicazioni per / da {#directions-to--from}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Indicazioni Android](@site/static/img/map/action_directions_android.png)

![Indicazioni multiple Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Indicazioni iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

Per avviare la navigazione o la pianificazione del percorso, è necessario selezionare prima la destinazione con [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). Nel caso in cui si abbia già un punto di destinazione, il menu suggerirà di sostituire il punto di destinazione o di inserirlo come un altro punto intermedio o di partenza.

È anche possibile selezionare prima la destinazione *Da* tramite il menu contestuale della mappa (<Translate android="true" ids="context_menu_item_directions_from"/>).

Leggi di più sulla [navigazione qui](../navigation/setup/route-navigation.md).

:::note Tocca Avvia navigazione
Se tocchi **Avvia navigazione** - il punto *Da* verrà ignorato poiché l'applicazione entra in modalità Navigazione. Per preservare un percorso, non toccare *Avvia navigazione* e [**scorri verso il basso**](#hide-context-menu) il menu *Preparazione percorso*.
:::


### Cerca nelle vicinanze {#search-nearby}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Azione Cerca Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Azione Cerca iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

Con questa azione del menu contestuale, è possibile cercare intorno a una posizione specifica sulla mappa.  

Leggi di più sulla funzionalità di [ricerca](../search/index.md).


### Evita strada {#avoid-road}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Evita strada sulla mappa Android](@site/static/img/map/action_avoid_android.png) ![Ignora strada evitata Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Evita strada sulla mappa iOS](@site/static/img/map/avoid_route_ios_1.png) ![Ignora strada evitata iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

Utilizzando il menu contestuale della mappa, è possibile aggiungere una strada specifica all'elenco delle strade non utilizzate per il routing. Ciò influenzerà la [preparazione del percorso](../navigation/setup/route-navigation.md).  
Per eliminare le strade precedentemente selezionate dall'[elenco delle strade da evitare](../navigation/routing/osmand-routing.md#avoid-roads-menu), toccare un segno, scegliere *Rimuovi* (**Android**) o *Ignora* (**iOS**).

:::note
La funzione Evita strade è globale e influenza tutti i *[tipi di routing](../navigation/routing/osmand-routing.md#routing-types)* (eccetto il *[routing online](../navigation/routing/online-routing.md)*).  
:::


### Cambia posizione oggetto {#change-object-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Azione Cambia posizione Android](@site/static/img/map/action_change_position_android.png)

![Azione Cambia posizione UI Android](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Azione Cambia posizione iOS](@site/static/img/map/action_change_position_ios.png)

![Azione Cambia posizione UI iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>  

Quasi ogni oggetto creato dall'utente è mobile, ad esempio Marcatore, Preferito, POI creato, Nota audio/video o Waypoint traccia. Per prima cosa seleziona un oggetto sulla mappa e poi usa *<Translate android="true" ids="change_markers_position"/>* il menu per spostarlo in una nuova posizione.


### Pianifica un percorso {#plan-a-route}

![Azione Pianifica un percorso Android](@site/static/img/map/action_plan_route_android.png)

È possibile avviare la pianificazione di un percorso da un punto selezionato tramite il menu contestuale dell'oggetto.

Leggi di più sullo strumento [Pianifica un percorso](../plan-route/create-route.md).


### Aggiorna / Scarica mappe online {#update--download-online-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Azione Scarica mappa online Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Azione Scarica mappa online iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

Per aggiornare o scaricare mappe online (tessere) in una posizione specifica, è possibile utilizzare il menu contestuale dell'oggetto:

- **Android**: *<Translate android="true" ids="shared_string_download_map"/>* e per *Aggiorna*, vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.  
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* e *<Translate ios="true" ids="update_tile"/>*.  

Si prega di leggere le [istruzioni complete](../map/raster-maps.md#download--update-tiles).  


### Aggiorna / Scarica mappe vettoriali {#update--download-vector-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Azione Scarica mappa vettoriale Android](@site/static/img/map/action_download_vector_map_android.png)

![Seleziona mappa vettoriale mondiale su Android](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Azione Scarica mappa vettoriale iOS](@site/static/img/map/action_download_vector_map_ios.png)

![Seleziona mappa vettoriale su iOS](@site/static/img/map/download_map_ios.png)

</TabItem>

</Tabs>

Nel caso in cui non sia presente una mappa offline nella posizione selezionata, ad esempio il menu dell'oggetto mappa è stato aperto tramite Ricerca o tramite un Preferito specifico, verrà suggerito di [scaricare](../start-with/download-maps.md#select-on-the-map) la mappa offline più piccola possibile.  

**iOS**. Se hai già [scaricato](../map/map-context-menu.md) mappe OsmAnd (vettoriali o terreno), è possibile aggiornarle tramite il menu contestuale. Dovrai prima selezionare la regione sulla mappa - tocca qualsiasi posizione sullo zoom mondiale 3-7.  

> **NOTA**. *Se hai aperto il menu contestuale per la regione della mappa (la regione è evidenziata), potrai vedere ***<Translate android="true" ids="rendering_category_details"/>*** su di essa: tipo e dimensione di una mappa disponibile, link a una pagina di Wikipedia, lingua, popolazione e altro.*


### * Aggiungi / Elimina punto di parcheggio {#-add--delete-parking-point}

:::note
Per aggiungere/eliminare punti di parcheggio, abilita il [**plugin Posizione parcheggio**](../plugins/parking.md) di OsmAnd.
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Azione Parcheggio Android](@site/static/img/map/action_parking_android.png)

![Azione Elimina Parcheggio Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Azione Parcheggio iOS](@site/static/img/map/action_parking_ios.png)

![Azione Elimina Parcheggio iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Qualsiasi posizione selezionata sulla mappa può essere contrassegnata come [posizione di parcheggio](../plugins/parking.md). Per eliminare la posizione di parcheggio, è possibile aprire il menu contestuale associato alla posizione di parcheggio.


### * Aggiungi / Modifica waypoint traccia {#-add--edit-track-waypoint}

:::note
Per aggiungere/modificare i punti traccia, abilita il [**plugin Registrazione viaggio**](../plugins/trip-recording.md) di OsmAnd.
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Azione Waypoint Android](@site/static/img/map/action_waypoint_android.png)

![Seleziona traccia per aggiungere waypoint Android](@site/static/img/map/action_select_track_to_add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Azione Waypoint iOS](@site/static/img/map/action_waypoint_ios.png)

![Seleziona traccia per aggiungere waypoint iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

È possibile aggiungere waypoint a una traccia registrata o alla registrazione della traccia corrente utilizzando il menu contestuale della mappa.  

- Selezionare una posizione sulla mappa con un [tocco lungo](../map/map-context-menu.md#select-any-point-long-tap).
- Nel *menu contestuale della mappa* che si apre, scegliere *Azioni → Aggiungi waypoint traccia*.
- L'elenco visualizza le [tracce](../map/tracks/index.md#display-tracks-on-the-map) registrate e mostrate sulla mappa, nonché la [registrazione della traccia corrente](../plugins/trip-recording.md), a cui è possibile aggiungere il waypoint selezionato.
- È possibile aggiungere waypoint a una traccia che non è ancora attiva per la registrazione, nel qual caso la traccia inattiva passa dallo *stato di avvio* allo *stato di ripristino*.
- [Compilare](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) i dati richiesti e salvare il waypoint.
- È possibile configurare le [Azioni rapide](../widgets/quick-action.md) aggiungendo un waypoint all'*Aggiungi waypoint traccia*.


### * Crea / Modifica POI {#-create--modify-poi}

:::note
Per creare/modificare POI, abilita il [**plugin di modifica OSM**](../plugins/osm-editing.md) di OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Azione POI Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Azione POI iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

Con il plugin di modifica OSM, puoi creare e modificare la maggior parte dei POI presenti su [OpenStreetMap](https://www.openstreetmap.org/).

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [crea un nuovo POI](../plugins/osm-editing.md#create--modify-poi) nella posizione selezionata.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [modifica il POI selezionato](../plugins/osm-editing.md#create--modify-poi).


### * Apri nota OSM {#-open-osm-note}

:::note
Per aggiungere una nota OSM, abilita il [**plugin di modifica OSM**](../plugins/osm-editing.md) di OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Azione Nota Android](@site/static/img/map/action_note_android.png)

![Azione Aggiungi Nota Android](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Azione Nota iOS](@site/static/img/map/action_note_ios.png)

![Azione Aggiungi Nota iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

Puoi **segnalare** errori nei dati della mappa in una posizione specifica alla [comunità OpenStreetMap](https://wiki.openstreetmap.org/wiki/Join_the_community). Si prega di seguire le [linee guida](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) e aggiungere commenti appropriati a un problema.


### * Commenta / Chiudi nota OSM {#-comment--close-osm-note}

:::note
Per commentare/chiudere una nota OSM, abilita il [**plugin di modifica OSM**](../plugins/osm-editing.md) di OsmAnd.
:::

![Commenta nota OSM Android](@site/static/img/map/action_comment_note_android.png) ![Riapri nota OSM Android](@site/static/img/map/action_reopen_note_android.png)

Puoi [commentare](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [risolvere](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) e riaprire
le note di OpenStreetMap tramite il menu contestuale dell'oggetto.


### * Carica POI / Nota OSM {#-upload-poi--osm-note}

:::note
Per caricare POI / nota OSM, abilita il [**plugin di modifica OSM**](../plugins/osm-editing.md) di OsmAnd.
:::

![Carica POI Android](@site/static/img/map/action_poi_upload_android.png) ![Carica nota OSM Android](@site/static/img/map/action_note_upload_android.png)

Nel caso in cui si utilizzi la *modalità offline* per aggiungere/modificare POI o Note OSM, sarà necessario caricare le modifiche su OpenStreetMap. Per impostazione predefinita, la *modalità offline* è attiva per evitare modifiche accidentali al database pubblico. È possibile caricare o eliminare le modifiche tramite il menu contestuale dell'oggetto creato.


### * Registra nota AV {#-record-av-note}

<InfoAndroidOnly />

:::note
Per registrare note audio/video, abilita il [**plugin Note audio/video**](../plugins/audio-video-notes.md) di OsmAnd.
:::

![Azione Audio-Video Android](@site/static/img/map/action_av_note_android.png)

Registra o acquisisce una nota multimediale in un punto selezionato sulla mappa.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - crea una [nota audio](../map/point-layers-on-map.md#-audio--video-points-android) nel punto selezionato (crea un nuovo punto sulla sovrapposizione con l'icona audio).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - crea una [nota video](../map/point-layers-on-map.md#-audio--video-points-android) nel punto selezionato (crea un nuovo punto sulla sovrapposizione con l'icona video).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - crea un [punto foto](../map/point-layers-on-map.md#-audio--video-points-android) sulla mappa.


## Personalizza {#customize}

<InfoAndroidOnly/>  

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![Menu contestuale mappa Personalizza](@site/static/img/map/map_context_menu_customize_1.png)  <!-- ![Menu contestuale mappa Personalizza](@site/static/img/map/map_context_menu_customize_2.png) -->  ![Menu contestuale mappa Personalizza](@site/static/img/map/map_context_menu_customize_3.png)

È possibile modificare l'ordine o nascondere elementi dal menu *Azioni* nel *menu contestuale della mappa*. Sono suggerite un totale di 16 azioni.  

- È possibile spostare le tre azioni più utili nella parte superiore dell'elenco *Azioni principali*.
- Il resto del menu può essere personalizzato per ogni profilo separatamente nelle sezioni *Azioni aggiuntive* e *Nascoste*.  

Tipi di azioni disponibili:

- **<Translate android="true" ids="main_actions"/>**. La sezione ha solo 4 pulsanti, tre dei quali possono essere personalizzati, e Azioni, che rimane invariato.  
- **<Translate android="true" ids="additional_actions"/>**. È possibile accedere a queste azioni toccando il pulsante *Azioni*.  
- **<Translate android="true" ids="shared_string_hidden"/>**. Spostare le azioni in questa sezione non ne impedisce il funzionamento. Semplicemente non appaiono nel menu Azioni.  


## Articoli correlati {#related-articles}

- [Mappe vettoriali (Stili mappa)](./vector-maps.md)
- [Mappe raster (Online / Offline)](./raster-maps.md)
- [Punti sulla mappa](./point-layers-on-map.md)
- [Menu contestuale delle tracce](./tracks/track-context-menu.md)
- [Trasporto pubblico](./public-transport.md)
- [Importa / Esporta](../personal/import-export.md)
- [Schemi di palette colori](../personal/color-palette-schemes.md)

> *Ultimo aggiornamento: giugno 2025*