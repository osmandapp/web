---
source-hash: b135d6ac31fa46429b660eb2f3ae6ef45da09abdde63b630471d719e780dd21e
sidebar_position: 3
title: Menu Contestuale Mappa
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

Il menu contestuale della mappa fornisce informazioni sull'oggetto selezionato sulla mappa. È anche possibile utilizzarlo per creare un percorso verso la posizione selezionata. Per aprire il menu contestuale, individuare prima la posizione desiderata sulla mappa, quindi selezionare l'oggetto con un tocco breve o un tocco lungo quando si seleziona un punto preciso sulla mappa.


### Selezionare un oggetto (Tocco singolo) {#select-an-object-single-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu contestuale Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu contestuale iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

Il **menu contestuale** appare quando si **tocca una volta** un oggetto contrassegnato sulla mappa. Questo menu contestuale mostra le informazioni essenziali sull'oggetto selezionato, tra cui il *nome*, l'*icona* (come rappresentata sulla mappa), l'*indirizzo, la distanza*, i *confini* e la *direzione* dalla posizione corrente.  

È possibile selezionare vari tipi di oggetti della mappa, come *POI*, *preferiti*, *fermate dei trasporti*, *indicatori*, *cime di montagne* o altri *oggetti della mappa*.

:::note
- Gli oggetti della mappa selezionati e i loro confini corrispondono a [**nodi**](https://wiki.openstreetmap.org/wiki/Node) o [**vie**](https://wiki.openstreetmap.org/wiki/Way) di OpenStreetMap.
- *L'altezza delle cime delle montagne è visualizzata in metri o piedi a seconda delle [unità di lunghezza](../personal/profiles.md#units--formats) selezionate nelle impostazioni del profilo.*
:::



### Selezionare un punto qualsiasi (Tocco lungo) {#select-any-point-long-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu contestuale tocco lungo Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu contestuale tocco lungo iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

Quando si effettua un **tocco lungo** in un punto qualsiasi della mappa, appare un **menu contestuale** che fornisce informazioni sulla posizione selezionata. Questo include l'indirizzo, la distanza e la direzione dalla posizione corrente.


### Selezionare un percorso GPX {#select-gpx-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu contestuale traccia Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Schermata statistiche traccia iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

Toccando una [traccia GPX](../map/tracks/index.md) sulla mappa si apre il [menu contestuale della traccia](../map/tracks/track-context-menu.md), dove è possibile accedere a opzioni aggiuntive relative alla traccia.



### Percorsi, piste da sci e sentieri {#routes-and-trails}

![Piste da sci e percorsi MTB](@site/static/img/map/ski_mtb.png)  ![Piste da sci e percorsi MTB](@site/static/img/map/ski_mtb_2.png)

È possibile toccare elementi della mappa come **piste da sci**, **percorsi per mountain bike (MTB)** e **sentieri per moto da cross** per aprire il loro menu contestuale con informazioni dettagliate. Per maggiori informazioni, consultare l'articolo [Percorsi](../map/routes.md#actions-with-routes).



### Nascondere il menu contestuale {#hide-context-menu}

Per chiudere il **menu contestuale**:

- Toccare un'*area vuota* qualsiasi della mappa per evitare di riaprire il menu.
- Trascinare il menu *verso il basso* dalla parte superiore.


## Dettagli {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu contestuale Android](@site/static/img/map/context_menu_2_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu contestuale iOS](@site/static/img/map/context_menu_2_ios.png)

</TabItem>

</Tabs>

Per informazioni più dettagliate su un oggetto, toccare il pulsante **Dettagli** nel menu contestuale o scorrere il pannello verso l'alto per espanderlo.


### Informazioni sull'oggetto {#object-info}

Il pannello **Informazioni sull'oggetto** fornisce dettagli aggiuntivi sull'oggetto selezionato. È possibile toccare una qualsiasi voce per copiare le informazioni negli appunti.  

I dettagli disponibili includono:

- [Nomi alternativi](#alternative-names)
- [Coordinate](#coordinates)
- [All'interno delle aree](#polygon-information)
- [POI nelle vicinanze](#nearby-pois)
- [Luoghi popolari nelle vicinanze](#nearby-popular-places)
- [Percorsi del trasporto pubblico per le fermate](#public-transport-routes)
- [Preferiti / Punti traccia dello stesso gruppo](#favorites--track-points-from-the-group)
- [Link OpenStreetMap](#openstreetmap-link)
- [Foto online](#online-photos)

Inoltre, il pannello può includere [Dettagli OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_features), come ad esempio:

- [Sito web](https://wiki.openstreetmap.org/wiki/Key:website)
- [Numero di telefono](https://wiki.openstreetmap.org/wiki/Key:contact)
- [Orari di apertura](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
- [Tariffa](https://wiki.openstreetmap.org/wiki/Key:fee)
- [Accessibilità](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
- [Larghezza](https://wiki.openstreetmap.org/wiki/Key:width) / [Altezza](https://wiki.openstreetmap.org/wiki/Key:height)


### Nomi alternativi {#alternative-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Nomi alternativi Android 1](@site/static/img/map/alternative_names_andr_1.png) ![Nomi alternativi Android](@site/static/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nomi alternativi iOS 1](@site/static/img/map/alternative_names_1_ios.png) ![Nomi alternativi iOS 2](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

OsmAnd visualizza i **nomi aggiuntivi dei POI** nel *menu contestuale della mappa*, dando priorità al nome nella *lingua di visualizzazione* o nell'elenco delle lingue preferite del sistema. Se sono disponibili più traduzioni, queste vengono raggruppate in tag categorizzati come *nome, marchio, operatore* o *POI vicini*.  

Caratteristiche della visualizzazione dei nomi alternativi:

- È possibile accedere a traduzioni aggiuntive tramite un *elenco a discesa*.

- I nomi sono suddivisi in diversi gruppi, come l'*elenco dei nomi in altre lingue*, i nomi *regionali*, *locali*, *nazionali*, *internazionali*, *brevi*, *vecchi*, *ufficiali* e *alternativi*.

- Altre categorie includono la *traduzione specifica per regione* o le *impostazioni predefinite*.

- Se una traduzione specifica *non è disponibile*, OsmAnd utilizza per impostazione predefinita il nome **locale** per garantire l'accuratezza e la coerenza nelle regioni multilingue.


### All'interno dell'area {#polygon-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Informazioni poligono Android](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Informazioni poligono iOS](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

La funzione **All'interno dell'area** elenca le **aree** in cui si trova un oggetto. Ciò include caratteristiche geografiche, confini amministrativi, aree di uso del suolo, caratteristiche naturali e altre aree categorizzate. Un *elenco di poligoni circostanti*, ordinati *dal più piccolo al più grande* in base alla dimensione dell'area.

### Coordinate {#coordinates}

|Formato coordinate| |
|:------|:------|
| <ul><li>DDD.DDDDD (Gradi decimali semplici)</li><li>DDD.DDDDD (N/S, E/O virgola)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[UTM Standard](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[Rete svizzera CH1903 e CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[Link Web OsmAnd](https://osmand.net/map)</li><li>[Link Web OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![Coordinate](@site/static/img/map/map_context_menu_Coordinates.png) |

Nel menu contestuale è possibile trovare le [coordinate geografiche](../search/search-coordinates.md#coordinate-format) di un punto in vari formati e anche i link condivisibili di OsmAnd e [OpenStreetMap](../map/map-context-menu.md#openstreetmap-link) (quest'ultima opzione è disponibile solo quando il [plugin di modifica OpenStreetMap](../plugins/osm-editing.md) è abilitato). Se si espande la sezione delle coordinate e si tocca a lungo una qualsiasi riga dell'elenco, i suoi valori verranno automaticamente copiati negli appunti (**Android**) o l'opzione *Copia* diventerà disponibile nel messaggio a comparsa (**iOS**).  

Il link web di OsmAnd può essere riconosciuto automaticamente da OsmAnd (esempio: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). Sia i link di OsmAnd che quelli di [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) vengono aperti sui siti corrispondenti con un segnaposto sul luogo di interesse.  


### POI nelle vicinanze {#nearby-pois}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![POI vicini Android](@site/static/img/map/nearby_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI vicini iOS](@site/static/img/map/nearby_poi_ios.png)

</TabItem>

</Tabs>

Questa sezione mostra i [Punti di Interesse](../map/point-layers-on-map.md#points-of-interest-pois) vicini con *<Translate android="true" ids="shared_string_show_on_map"/>* e *<Translate android="true" ids="search_more"/>* per visualizzare e [cercare](../search/search-poi.md) tutti gli altri POI della stessa categoria.

Toccando *POI nelle vicinanze* si apre un elenco di punti. Un tocco su uno di questi punti da un elenco di punti sposta la mappa su questo punto con l'apertura del menu contestuale del punto sulla mappa.


### Luoghi popolari nelle vicinanze {#nearby-popular-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Luoghi vicini Android](@site/static/img/map/nearby_places_android.png)

Questa sezione evidenzia luoghi popolari che ti aiutano a scoprire destinazioni interessanti e punti di riferimento intorno alla tua posizione corrente. Usa *<Translate android="true" ids="shared_string_show_on_map"/>* e *<Translate android="true" ids="search_more"/>* per sfogliare e cercare tutti i luoghi popolari. 

Toccando *Luoghi popolari nelle vicinanze [Popular Places](https://osmand.net/docs/user/map/popular_places)* si apre un elenco di luoghi vicini. Selezionando qualsiasi elemento centra la mappa su quel luogo e apre il suo menu contestuale, dove è possibile leggere una descrizione breve o toccare ***Leggi articolo completo*** per visualizzare la guida completa.

</TabItem>

<TabItem value="ios" label="iOS">

![Luoghi vicini iOS](@site/static/img/map/nearby_places_ios.png)

Questa sezione evidenzia luoghi popolari che ti aiutano a scoprire destinazioni interessanti e punti di riferimento intorno alla tua posizione corrente. Usa *<Translate android="true" ids="shared_string_show_on_map"/>* e *<Translate android="true" ids="search_more"/>* per sfogliare e cercare tutti i luoghi popolari. 

Toccando *Luoghi popolari nelle vicinanze [Popular Places](https://osmand.net/docs/user/plugins/wikipedia#wikipedia-article)* si apre un elenco di luoghi vicini. Selezionando qualsiasi elemento centra la mappa su quel luogo e apre il suo menu contestuale, dove è possibile leggere una descrizione breve o toccare ***Leggi articolo completo*** per visualizzare la guida completa.

> **NOTA**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) apparirà solo se sono state scaricate in precedenza mappe speciali con [articoli di Wikipedia per quest'area](../plugins/wikipedia.md#download-wikipedia-packages)*.

</TabItem>

</Tabs>


### Percorsi del trasporto pubblico {#public-transport-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Percorsi trasporto pubblico Android](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorsi trasporto pubblico iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

Mostra informazioni sui percorsi del trasporto pubblico per la fermata scelta. Per informazioni sul menu contestuale del trasporto pubblico e sulle relative azioni, leggere l'[articolo](../map/public-transport.md#transport-routes-context-menu).


### Preferiti / Punti traccia del gruppo {#favorites--track-points-from-the-group}

![Elenco preferiti](@site/static/img/map/favorite_list_android.png) ![Elenco preferiti completo](@site/static/img/map/favorite_list_full_android.png)

Questo è un elenco di tutti i punti di un gruppo per un Preferito o un Waypoint. Toccando, l'intero elenco di punti di un gruppo si espande; quando si tocca un punto dell'elenco, la mappa si sposta sul punto selezionato.




### Descrizione dell'articolo {#article-description}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Elenco descrizioni](@site/static/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Elenco descrizioni](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs>

Questa parte contiene una parte della descrizione dell'[articolo di Wikipedia](../plugins/wikipedia.md), del [Preferito](../personal/favorites.md) o del Waypoint; toccando è possibile aprire la descrizione completa.


### Link OpenStreetMap {#openstreetmap-link}

![Link OSM](@site/static/img/map/context_menu_osm_link.png) ![Link OSM](@site/static/img/map/context_menu_osm_link_1.png)

Il link OpenStreetMap fornisce un collegamento diretto all'oggetto OpenStreetMap dove è possibile trovare informazioni complete su di esso: [nodo](https://wiki.openstreetmap.org/wiki/Node) o [via](https://wiki.openstreetmap.org/wiki/Way).


### Foto online {#online-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu contestuale Foto online Android](@site/static/img/map/images_nearby_1_andr.png)
![Menu contestuale Foto online Android](@site/static/img/map/gallery_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu contestuale Foto online iOS](@site/static/img/map/online_photo_ios.png)
![Menu contestuale Foto online iOS](@site/static/img/map/gallery_menu_2_ios.png)

</TabItem>

</Tabs>

Quando si tocca un Luogo Popolare sulla mappa, la sezione **Foto online** nel *menu contestuale dei POI* mostra le anteprime delle immagini provenienti da [Wikipedia](https://www.wikipedia.org/) e [Wikimedia Commons](https://www.wikimedia.org/).

Toccando una foto si apre la vista **Galleria**, dove è possibile:

- Sfogliare fino a 100 immagini per luogo
- Visualizzare i metadati dell'immagine (*autore*, *licenza*, *fonte*)
- Eseguire azioni: **Condividi**, **Apri nel browser**, **Scarica**

> *Su iOS, un tocco lungo su un'immagine apre un menu contestuale con azioni rapide.*

Per saperne di più, vedere: [Foto online](https://osmand.net/docs/user/map/popular_places#online-photos) e [Vista Galleria](https://osmand.net/docs/user/map/popular_places#gallery)


### Immagini a livello stradale {#street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Immagini a livello stradale Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Immagini a livello stradale iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

OsmAnd supporta l'integrazione con [Mapillary](https://www.mapillary.com/), una piattaforma globale per immagini a livello stradale raccolte tramite crowdsourcing. Questa funzione consente di visualizzare ed esplorare sequenze di foto del mondo reale direttamente sulla mappa.

Le immagini di Mapillary appaiono come icone fotografiche direzionali, allineate con la strada o il sentiero in cui sono state scattate. Queste possono aiutare a comprendere meglio l'ambiente circostante, soprattutto in aree non familiari.

È possibile:

- Usare il pulsante **Esplora** per aprire il visualizzatore di Mapillary e sfogliare le immagini a livello stradale vicine.
- Toccare il pulsante **Aggiungi foto** per contribuire con le proprie foto alla piattaforma Mapillary.

> *Per saperne di più su come attivare e utilizzare questa funzione, consultare la [guida al plugin Mapillary](../plugins/mapillary.md).*


### * Nota audio/video {#-audiovideo-note}

<InfoAndroidOnly />

![Elenco immagini](@site/static/img/map/image_list_android.png) ![Elenco video](@site/static/img/map/video_list_android.png)

Le informazioni delle [note audio/video](../plugins/audio-video-notes.md) come data, coordinate, anteprima e altro sono disponibili nel menu **Dettagli**. È possibile aprire le note in un software secondario toccando il pulsante **Riproduci / Mostra** nel menu contestuale della nota.


## Azioni {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Azioni Android](@site/static/img/map/actions_menu_android.png) ![Menu aggiuntivo Azioni Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Azioni iOS](@site/static/img/map/actions_menu_ios.png)  ![Menu aggiuntivo Azioni iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

Si tratta di un insieme di manipolazioni specifiche che possono essere eseguite su un punto o un oggetto. Questo menu è diviso in due parti: la sezione visibile è composta da un massimo di 3 azioni e le altre azioni sono accessibili tramite il pulsante *Azioni*. È possibile personalizzare (*Android*) l'ordine delle azioni nelle [Impostazioni generali](#customize).


### Aggiungi / Modifica Preferito {#add--edit-favorite}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Azione Aggiungi/Modifica preferito Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Azione Aggiungi/Modifica preferito iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

Nel menu contestuale sono presenti le opzioni per **aggiungere** o **modificare** il punto/oggetto selezionato all'[elenco dei preferiti](../personal/myplaces.md).

- Per **Aggiungere**, è necessario selezionare un punto/oggetto, toccare l'icona a forma di *Stella* (con la dicitura Aggiungi) e inserire tutte le informazioni necessarie.  

- Per **Modificare** le informazioni su un punto preferito, è necessario attivare *Mostra sulla mappa* (*Menu → I miei luoghi → Preferiti*), quindi premerci sopra e nel menu contestuale, al posto dell'icona a forma di *Stella*, apparirà l'icona a forma di *Matita* (con la dicitura Modifica).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md) - aggiunge un punto selezionato all'elenco dei preferiti.


### Aggiungi / Modifica Indicatore {#add--edit-marker}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Azione Aggiungi/Modifica indicatore Android](@site/static/img/map/add_marker_android.png) ![Azione Passa indicatore Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![Azione Aggiungi/Modifica indicatore iOS](@site/static/img/map/add_marker_ios.png)  ![Azione Ripristina indicatore Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

È possibile contrassegnare un punto o un oggetto per facilitare la pianificazione della navigazione. È sufficiente toccare l'icona a forma di **bandiera** nel menu (*Android*), **freccia** (*iOS*) - visualizza la direzione e la distanza dal punto selezionato rispetto alla posizione corrente.

Azioni:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). Inserisce un nuovo indicatore nel punto selezionato.
- **Segna come superato** (*Android*) / *Ignora* (*iOS*). Disattiva l'indicatore e lo inserisce nella Cronologia.
- **Rendi attivo** (*Android*). Sposta l'indicatore nella posizione superiore (sul pannello superiore).
- **Ripristina indicatore** (*Android*). Sposta l'indicatore dalla Cronologia all'elenco attivo.

Per saperne di più sugli [indicatori, clicca qui](../personal/markers.md).


### Condividi {#share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

| Versioni fino ad Android 14 | Android 14+ |
|:------------|:---------------|
| ![Azione Condividi Android](@site/static/img/map/action_share_1_andr.png) | ![Azione Condividi Android](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">  

![Azione Condividi iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

L'app OsmAnd consente di **<Translate android="true" ids="shared_string_share"/>** *La mia posizione* o qualsiasi posizione selezionata sulla mappa con messenger, e-mail o social media.  

Opzioni disponibili per condividere la posizione:

- ***Invia***. Invia testo tramite le app disponibili sul dispositivo. Include tutte le informazioni sulla posizione: il nome della mia posizione o il nome del POI selezionato, l'indirizzo, le coordinate e la geolocalizzazione come link.
- ***Copia***. Copia tutte le informazioni sulla posizione (nome della mia posizione o nome del POI selezionato, indirizzo, coordinate e geolocalizzazione come link) negli appunti.  
- ***Copia indirizzo***. Copia solo le informazioni sull'indirizzo negli appunti.
- ***Copia nome POI***. Copia solo il nome del POI o l'indirizzo se non c'è un nome negli appunti.
- ***Copia coordinate***. Copia solo le informazioni sulle coordinate negli appunti.
- ***geo***. Apre un elenco di applicazioni disponibili che supportano le geolocalizzazioni. <!-- (info about [geo urls Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***Codice QR*** (*Android*). Genera un link alla posizione selezionata in un codice QR.

<!--
- ***Save Image*** (*iOS*) - saves a screenshot with map and selected point in the image gallery.
- ***Assign to Contact*** (*iOS*) - makes an icon for chosen contact from the map screenshot.
- ***Print*** (*iOS*) - opens Printer Options for printing the map screenshot.
- ***Save to files*** (*iOS*) - saves the map screenshot in iCloud Drive or storage of your device. -->


### Indicazioni Da / A {#directions-to--from}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Indicazioni Android](@site/static/img/map/action_directions_android.png)

![Indicazioni multiple Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Indicazioni iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

Per avviare la navigazione o la pianificazione del percorso, è necessario selezionare prima la destinazione con [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). Nel caso in cui si disponga già di un punto di destinazione, il menu suggerirà di sostituire il punto di destinazione o di inserirlo come un altro punto intermedio o di partenza.

È anche possibile selezionare prima la destinazione *Da* tramite il menu contestuale della mappa (<Translate android="true" ids="context_menu_item_directions_from"/>).

Per saperne di più sulla [navigazione, clicca qui](../navigation/setup/route-navigation.md).

:::note Tocca Avvia navigazione
Se si tocca **Avvia navigazione** - il punto *Da* verrà scartato poiché l'applicazione entra in modalità Navigazione. Per conservare un percorso, non toccare *Avvia navigazione* e [**scorri verso il basso**](#hide-context-menu) il menu *Preparazione percorso*.
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

Per saperne di più sulla funzionalità di [ricerca](../search/index.md).


### Evita Strada {#avoid-road}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Evita strada sulla mappa Android](@site/static/img/map/action_avoid_android.png) ![Ignora strada evitata Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Evita strada sulla mappa iOS](@site/static/img/map/avoid_route_ios_1.png) ![Ignora strada evitata iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

Utilizzando il menu contestuale della mappa, è possibile aggiungere una strada specifica all'elenco delle strade non utilizzate per il calcolo del percorso. Ciò influenzerà la [preparazione del percorso](../navigation/setup/route-navigation.md).  
Per eliminare le strade precedentemente selezionate dall'*[Elenco strade da evitare](../navigation/routing/osmand-routing.md#avoid-roads-menu)*, toccare un segnale, scegliere *Rimuovi* (**Android**) o *Ignora* (**iOS**).

:::note
La funzione Evita strade è globale e influisce su tutti i *[tipi di percorso](../navigation/routing/osmand-routing.md#routing-types)* (eccetto il *[calcolo del percorso online](../navigation/routing/online-routing.md)*).  
:::


### Cambia Posizione Oggetto {#change-object-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Azione Cambia posizione Android](@site/static/img/map/action_change_position_android.png)

![UI Azione Cambia posizione Android](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Azione Cambia posizione iOS](@site/static/img/map/action_change_position_ios.png)

![UI Azione Cambia posizione iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>  

Quasi ogni oggetto creato dall'utente è spostabile, ad esempio Indicatore, Preferito, POI creato, Nota audio/video o Waypoint di traccia. Selezionare prima un oggetto sulla mappa e poi usare il menu *<Translate android="true" ids="change_markers_position"/>* per spostarlo in una nuova posizione.


### Pianifica un percorso {#plan-a-route}

![Azione Pianifica un percorso Android](@site/static/img/map/action_plan_route_android.png)

È possibile avviare la pianificazione di un percorso da un punto selezionato tramite il menu contestuale dell'oggetto.

Per saperne di più sullo strumento [Pianifica un percorso](../plan-route/create-route.md).


### Aggiorna / Scarica Mappe Online {#update--download-online-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Azione Scarica mappa online Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Azione Scarica mappa online iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

Per aggiornare o scaricare mappe online (tasselli) in una posizione specifica, è possibile utilizzare il menu contestuale dell'oggetto:

- **Android**: *<Translate android="true" ids="shared_string_download_map"/>* e per *Aggiorna*, andare su: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.  
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* e *<Translate ios="true" ids="update_tile"/>*.  

Si prega di leggere le [istruzioni complete](../map/raster-maps.md#download--update-tiles).  


### Aggiorna / Scarica Mappe Vettoriali {#update--download-vector-maps}

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

**iOS**. Se si dispone già di mappe OsmAnd [scaricate](../map/map-context-menu.md) (vettoriali o del terreno), è possibile aggiornarle tramite il menu contestuale. Sarà necessario selezionare prima la regione sulla mappa - toccare una qualsiasi posizione con uno zoom mondiale 3-7.  

> **NOTA**. *Se si è aperto il menu contestuale per la regione della mappa (la regione è evidenziata), sarà possibile vedere ***<Translate android="true" ids="rendering_category_details"/>*** su di essa: tipo e dimensione di una mappa disponibile, link a una pagina di Wikipedia, lingua, popolazione e altro.*


### * Aggiungi / Elimina punto di parcheggio {#-add--delete-parking-point}

:::note
Per aggiungere/eliminare punti di parcheggio, abilitare il [**plugin Posizione parcheggio**](../plugins/parking.md) di OsmAnd.
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
Per aggiungere/modificare punti di traccia, abilitare il [**plugin Registrazione viaggio**](../plugins/trip-recording.md) di OsmAnd.
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Seleziona Traccia per aggiungere Waypoint Android](@site/static/img/map/tracks_tab_android.png) ![Aggiungi Waypoint Traccia Android](@site/static/img/map/add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Azione Waypoint iOS](@site/static/img/map/action_waypoint_ios.png)

![Seleziona Traccia per aggiungere Waypoint iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

È possibile aggiungere waypoint a una traccia registrata o alla registrazione della traccia corrente utilizzando il menu contestuale della mappa.  

- Selezionare una posizione sulla mappa con un [tocco lungo](../map/map-context-menu.md#select-any-point-long-tap).
- Nel *menu contestuale della mappa* che si apre, scegliere *Azioni → Aggiungi waypoint traccia*.
- L'elenco mostra le [tracce](../map/tracks/index.md#display-tracks-on-the-map) registrate e visualizzate sulla mappa, così come la [registrazione della traccia corrente](../plugins/trip-recording.md), a cui è possibile aggiungere il waypoint selezionato (*su Android*, l'elenco è raggruppato in schede: <Translate android="true" ids="shared_string_on_map"/> / <Translate android="true" ids="rendering_value_all_name"/> / <Translate android="true" ids="shared_string_folders"/>).
- È possibile aggiungere waypoint a una traccia che non è ancora attiva per la registrazione, nel qual caso la traccia inattiva passa dallo stato *Avvia* allo stato *Riprendi*.
- [Compilare](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) i dati richiesti e salvare il waypoint.
- È possibile configurare le [Azioni rapide](../widgets/quick-action.md) aggiungendo un waypoint ad *Aggiungi waypoint traccia*.


### * Crea / Modifica POI {#-create--modify-poi}

:::note
Per creare/modificare POI, abilitare il [**plugin di modifica OSM**](../plugins/osm-editing.md) di OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Azione POI Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Azione POI iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

Con il plugin di modifica OSM, è possibile creare e modificare la maggior parte dei POI presenti su [OpenStreetMap](https://www.openstreetmap.org/).

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [crea un nuovo POI](../plugins/osm-editing.md#create--modify-poi) nella posizione selezionata.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [modifica il POI selezionato](../plugins/osm-editing.md#create--modify-poi).


### * Apri Nota OSM {#-open-osm-note}

:::note
Per aprire una nota OSM, abilitare il [**plugin di modifica OSM**](../plugins/osm-editing.md) di OsmAnd.
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

È possibile **segnalare** errori nei dati della mappa in una posizione specifica alla [comunità di OpenStreetMap](https://wiki.openstreetmap.org/wiki/Join_the_community). Si prega di seguire le [linee guida](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) e di aggiungere commenti appropriati a un problema.


### * Commenta / Chiudi Nota OSM {#-comment--close-osm-note}

:::note
Per commentare/chiudere una nota OSM, abilitare il [**plugin di modifica OSM**](../plugins/osm-editing.md) di OsmAnd.
:::

![Commenta Nota OSM Android](@site/static/img/map/action_comment_note_android.png) ![Riapri Nota OSM Android](@site/static/img/map/action_reopen_note_android.png)

È possibile [commentare](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [risolvere](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) e riaprire le Note di OpenStreetMap tramite il menu contestuale dell'oggetto.


### * Carica POI / Nota OSM {#-upload-poi--osm-note}

:::note
Per caricare POI / Note OSM, abilitare il [**plugin di modifica OSM**](../plugins/osm-editing.md) di OsmAnd.
:::

![Carica POI Android](@site/static/img/map/action_poi_upload_android.png) ![Carica Nota OSM Android](@site/static/img/map/action_note_upload_android.png)

Nel caso in cui si utilizzi la *Modalità offline* per aggiungere/modificare POI o Note OSM, sarà necessario caricare le modifiche su OpenStreetMap. Per impostazione predefinita, la *Modalità offline* è attiva per evitare modifiche accidentali al database pubblico. È possibile caricare o eliminare le modifiche tramite il menu contestuale dell'oggetto creato.


### * Registra Nota A/V {#-record-av-note}

<InfoAndroidOnly />

:::note
Per registrare note audio/video, abilitare il [**plugin Note audio/video**](../plugins/audio-video-notes.md) di OsmAnd.
:::

![Azione Audio-Video Android](@site/static/img/map/action_av_note_android.png)

Registra o scatta una nota multimediale in un punto selezionato sulla mappa.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - crea una [nota audio](../map/point-layers-on-map.md#-audio--video-points-android) nel punto selezionato (crea un nuovo punto sulla sovrapposizione con l'icona audio).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - crea una [nota video](../map/point-layers-on-map.md#-audio--video-points-android) nel punto selezionato (crea un nuovo punto sulla sovrapposizione con l'icona video).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - crea un [punto foto](../map/point-layers-on-map.md#-audio--video-points-android) sulla mappa.


## Personalizza {#customize}

<InfoAndroidOnly/>  

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![Personalizza menu contestuale mappa](@site/static/img/map/map_context_menu_customize_1.png)  <!-- ![Personalizza menu contestuale mappa](@site/static/img/map/map_context_menu_customize_2.png) -->  ![Personalizza menu contestuale mappa](@site/static/img/map/map_context_menu_customize_3.png)

È possibile modificare l'ordine o nascondere le voci dal menu *Azioni* nel *menu contestuale della mappa*. Vengono suggerite un totale di 16 azioni.  

- È possibile spostare le tre azioni più utili in cima all'elenco *Azioni principali*.
- Il resto del menu può essere personalizzato per ogni profilo separatamente nelle sezioni *Azioni aggiuntive* e *Nascoste*.  

Tipi di azioni disponibili:

- **<Translate android="true" ids="main_actions"/>**. La sezione ha solo 4 pulsanti, tre dei quali possono essere personalizzati, e Azioni, che rimane invariato.  
- **<Translate android="true" ids="additional_actions"/>**. È possibile accedere a queste azioni toccando il pulsante *Azioni*.  
- **<Translate android="true" ids="shared_string_hidden"/>**. Spostare le azioni in questa sezione non ne impedisce il funzionamento. Semplicemente non appaiono nel menu Azioni.  


## Articoli correlati {#related-articles}

- [Mappe vettoriali (Stili mappa)](./vector-maps.md)
- [Mappe raster (Online / Offline)](./raster-maps.md)
- [Punti sulla mappa](./point-layers-on-map.md)
- [Menu contestuale tracce](./tracks/track-context-menu.md)
- [Trasporto pubblico](./public-transport.md)
- [Importa / Esporta](../personal/import-export.md)
- [Schemi di tavolozze di colori](../personal/color-palette-schemes.md)