---
source-hash: f302135b5464569dccff1ff6830993eddf7ac34c3c389eaa1f26348d90713c54
sidebar_position: 1
title:  Cerca Tutto
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


<InfoIncompleteArticle/>


## Panoramica {#overview}

**La Ricerca** è uno strumento utile per trovare rapidamente luoghi. È possibile utilizzare la Ricerca per trovare una località tramite indirizzo, coordinate, punti di interesse (PDI) o ricerche precedenti. La [Ricerca Indirizzo](#search-address) consente di inserire l'indirizzo desiderato per ottenere una posizione esatta. La ricerca tramite [Coordinate](#search-coordinates) funziona con coordinate geografiche come latitudine e longitudine. Con la ricerca [PDI](#search-poi) è possibile cercare luoghi vicini in categorie specifiche, come caffè, hotel o stazioni di servizio. La [Cronologia Ricerche](#search-history) salva le ricerche passate per un rapido accesso ai luoghi trovati in precedenza. La funzione di ricerca facilita la pianificazione di viaggi, la navigazione in terreni sconosciuti e la ricerca di PDI nelle vicinanze.


## Come si usa {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Elenco PDI ricerca Android](@site/static/img/search/poi_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Elenco PDI ricerca iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

Per avviare la ricerca è necessario seguire uno dei seguenti passaggi:

- Toccare il [pulsante Cerca](../widgets/map-buttons.md#search) sulla schermata dell'applicazione della mappa e inserire la propria richiesta.

- Andare al *Menu principale → Cerca → inserire la richiesta di ricerca*.

- Durante la preparazione per avviare un percorso, toccare [*Navigazione → Imposta destinazione → Campo di ricerca*](../navigation/setup/route-navigation.md#set-target-point) *→ richiesta di ricerca*.  


Informazioni importanti:

- ***Per effettuare una ricerca con OsmAnd sono necessarie le mappe vettoriali offline scaricate***.

- Inizialmente, **la ricerca si basa sui dati presenti sulla mappa nell'area visibile dello schermo del dispositivo**, ma se non viene trovato nulla, OsmAnd propone di aumentare il raggio di ricerca.  

### Query di base {#basic-queries}

***Elenco delle query***:

- Coordinate in tutti i formati disponibili.
- Indirizzo:
    - Via, Numero civico;
    - Città, Via;
    - Incroci stradali;
    - Città;
    - Dati Tiger;
    - Codice postale, Numero civico;
    - Codice postale, Via, Numero civico.
- Ricerca PDI per nome e per categoria con filtri aggiuntivi.
- Ricerca percorsi OSM per nome e per categoria con filtri aggiuntivi.
- Ricerca delle cime e dei vulcani più importanti.
- Ricerca per Preferiti e Waypoint.
- Ricerca icone per nomi di sottocategorie di PDI.
- Ricerca per tracce.
- Ricerca per locali commerciali e marchi.
- Ricerca online (Nominatim).
- Ricerca URL (Google e OsmAnd).
- Cronologia Ricerche.

<!--
***Supported formats*:**  

***Tags*** can be used as a search query. They consist of ***a key and a value***, for example:
*addr:street=StreetName*.  
To avoid confusion, sometimes the key or value is surrounded by quotation marks: **key="value" or "key"="value"**. The quotation marks and equal sign are not part of the tag content.
-->

### Ordinamento dei risultati di ricerca {#sorting-search-results}

OsmAnd ordina automaticamente i risultati della ricerca in base a tre criteri principali:

1. **Corrispondenza con le query** — I risultati che contengono corrispondenze esatte o parziali con le parole inserite vengono visualizzati più in alto.

2. **Tipo di oggetto** - Quando si ordina per nome, le città e le strade hanno la priorità sui PDI nella visualizzazione dei risultati.

3. **Distanza** - Quando i risultati hanno criteri di corrispondenza e tipi di oggetto simili, vengono mostrati per primi i risultati più vicini alla posizione attuale dell'utente.

***Ad esempio***, una query di ricerca *ufficio postale* mostrerà prima gli uffici postali più vicini, anche se ci sono altri elementi con nomi simili a una distanza maggiore.  

***Limitazioni attuali:***

- Non esiste un'impostazione manuale per modificare l'ordine di ordinamento dei risultati della ricerca.
- Il processo di ordinamento è **gestito automaticamente** da OsmAnd, in base ai criteri sopra elencati.
- Nei casi in cui i risultati della ricerca sono troppo ampi, OsmAnd può **limitare i risultati visualizzati** a quelli con la maggiore accuratezza di corrispondenza delle parole.


### Ricerca full-text {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca preferiti Android](@site/static/img/search/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca preferiti iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

È possibile trovare la posizione richiesta sulla mappa dall'elenco di punti che appaiono mentre si inserisce una query.

1. Iniziare a digitare il nome o l'indirizzo nella barra di ricerca.

2. Durante la digitazione, l'elenco mostra i punti più vicini alla query, approssimativamente in questo ordine:
    - Categorie di PDI
    - Preferiti, PDI, Percorsi e Waypoint
    - Tracce
    - Indirizzi
    - Mappe da scaricare

3. Se si inserisce un [nome di marchio](../search/search-poi.md#how-to-use), l'elenco inizierà con i risultati con questo nome, ordinati per distanza più vicina.

:::note Limitazioni dei dati TIGER nella ricerca di indirizzi
OsmAnd ha integrato i [**dati TIGER**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) nelle mappe degli Stati Uniti per fornire informazioni sugli indirizzi statunitensi. Il set di dati TIGER è **basato su intervalli** e non contiene numeri civici precisi, quindi alcuni indirizzi potrebbero essere mancanti o imprecisi.
:::


### Cerca sulla mappa {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca PDI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ricerca PDI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

OsmAnd consente di cercare i punti visualizzati su una mappa sullo schermo del dispositivo. Per fare ciò:

- Utilizzare [uno dei modi](#how-to-use) per accedere allo strumento di ricerca.
- Iniziare a digitare il nome o l'indirizzo nella casella di ricerca.
- Sotto il campo di immissione della ricerca apparirà una casella con il pulsante *Mostra sulla mappa*.
- Toccare questo pulsante per andare alla mappa.
- È possibile continuare a digitare la query nella parte superiore dello schermo.


### Cerca nelle vicinanze {#search-nearby}

![Ricerca Android](@site/static/img/search/search_all_near_location_andr.png)

È possibile utilizzare la ricerca nelle vicinanze di una posizione specifica. Per fare ciò, selezionare il punto richiesto [dall'elenco nel menu di ricerca](#full-text-search) o selezionarlo direttamente sulla mappa. Nel [menu contestuale della mappa](../map/map-context-menu.md#actions), selezionare *Azioni → Cerca nelle vicinanze*.


## Ricerca Indirizzo {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

**Ricerca Indirizzo** utilizza i dati di OpenStreetMap. Questo tipo di ricerca consente di trovare la posizione e la direzione verso un indirizzo specifico da un elenco già ordinato. Per saperne di più, consultare l'articolo [Ricerca Indirizzo](./search-address.md).


## Cronologia Ricerche {#search-history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cronologia ricerche](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cronologia ricerche](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

È possibile utilizzare la **Cronologia Ricerche** per cercare di nuovo luoghi, indirizzi o luoghi visitati di frequente trovati in precedenza senza dover inserire nuovamente la query. Maggiori dettagli si possono trovare nell'articolo [Cronologia Ricerche](./search-history.md).


## Ricerca PDI {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca PDI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca PDI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

La **Ricerca PDI** è un elenco, ordinato per categoria, con cui è possibile trovare facilmente luoghi e servizi vicino alla propria posizione attuale o a un'area selezionata sulla mappa.

- La [Ricerca PDI personalizzata](./search-poi.md#customize-poi-search) consente di combinare diverse categorie di PDI per semplificare e personalizzare la ricerca.  
Ad esempio, se è necessario trovare diversi tipi di servizi in una determinata area o in una determinata sezione di un percorso.

- OsmAnd fornisce una [Ricerca online](./search-poi.md#online-search) che funziona in tempo reale, offrendo un accesso rapido ai risultati della ricerca.  
È comoda da usare quando le mappe della regione non sono disponibili, ma è necessaria una connessione Internet costante e stabile.

- Leggere l'articolo [Ricerca PDI](./search-poi.md) per ulteriori informazioni.


## Ricerca Coordinate {#search-coordinates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca Coordinate Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca Coordinate iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

La ricerca per coordinate fornisce una posizione precisa. È possibile inserire coordinate precise ottenute, ad esempio, da altre fonti come una mappa, un dispositivo GPS o servizi online, il che è particolarmente utile quando si tratta di luoghi che non hanno un indirizzo esatto. Per ulteriori informazioni, consultare l'articolo [Ricerca Coordinate](./search-coordinates.md).


## Articoli correlati {#related-articles}

- [Ricerca Indirizzo](./search-address.md)
- [Cronologia Ricerche](./search-history.md)
- [Ricerca PDI](./search-poi.md)
- [Ricerca Coordinate](./search-coordinates.md)