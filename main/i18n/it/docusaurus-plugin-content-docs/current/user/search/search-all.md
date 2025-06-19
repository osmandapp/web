---
source-hash: b39da87cb283fc3373cd7fc8ea9c535845d2da42231bb2b94d76bc577ea35ed4
sidebar_position: 1
title:  Cerca tutto
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

La **Ricerca** è uno strumento utile per trovare rapidamente le posizioni. Puoi usare la Ricerca per trovare una posizione per indirizzo, coordinate, punti di interesse (POI) o ricerche precedenti. La [Ricerca indirizzo](#search-address) ti permette di inserire l'indirizzo per ottenere una posizione esatta. La ricerca [Coordinate](#search-coordinates) funziona con coordinate geografiche come latitudine e longitudine. Con la ricerca [POI](#search-poi) puoi cercare luoghi vicini in categorie specifiche, come caffè, hotel o stazioni di servizio. La [Cronologia di ricerca](#search-history) salva le ricerche passate per un accesso rapido ai luoghi precedentemente trovati. La funzione di ricerca facilita la pianificazione di viaggi, la navigazione in terreni sconosciuti e la ricerca di POI nelle vicinanze.


## Come usare {#how-to-use}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Elenco POI di ricerca Android](@site/static/img/search/poi_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Elenco POI di ricerca iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

Devi seguire uno dei passaggi per avviare la tua ricerca:

- Tocca il [pulsante Cerca](../widgets/map-buttons.md#search) nella schermata dell'applicazione mappa e inserisci la tua query.

- Vai al *Menu principale → Cerca → inserisci la tua query di ricerca*.

- Quando ti prepari ad avviare un percorso, tocca [*Navigazione → Imposta destinazione → Campo di ricerca*](../navigation/setup/route-navigation.md#set-target-point) *→ query di ricerca*.  


Informazioni importanti:

- ***Per cercare con OsmAnd sono richieste mappe vettoriali offline scaricate***.

- Inizialmente, **la ricerca si basa sui dati presenti sulla mappa nell'area visibile dello schermo del dispositivo**, ma se non viene trovato nulla, OsmAnd offre di aumentare il raggio di ricerca.  

### Query di base {#basic-queries}

***Elenco query*:**

- Coordinate in tutti i formati disponibili.
- Indirizzo:
    - Via, Numero civico;
    - Città, Via;
    - Intersezioni stradali;
    - Città;
    - Dati Tiger;
    - Codice postale, Numero civico;
    - Codice postale, Via, Numero civico.
- Ricerca POI per nome e per categoria con filtri aggiuntivi.
- Ricerca percorsi OSM per nome e per categoria con filtri aggiuntivi.
- Ricerca per cime e vulcani più importanti.
- Ricerca per Preferiti e Waypoint.
- Ricerca icone per nomi di sottocategorie POI.
- Ricerca per tracce.
- Ricerca per locali commerciali e nomi di marchi.
- Ricerca online (Nominatim).
- Ricerca URL (Google e OsmAnd).
- Cronologia di ricerca.

<!--
***Formati supportati*:**  

I ***tag*** possono essere utilizzati come query di ricerca. Sono costituiti da ***una chiave e un valore***, ad esempio:
*addr:street=NomeVia*.  
Per evitare confusione, a volte la chiave o il valore sono racchiusi tra virgolette: **chiave="valore" o "chiave"="valore"**. Le virgolette e il segno di uguale non fanno parte del contenuto del tag.
-->

### Ordinamento dei risultati di ricerca {#sorting-search-results}

OsmAnd ordina automaticamente i risultati di ricerca in base a tre criteri principali:

1. **Corrispondenza delle query** — I risultati che contengono corrispondenze esatte o parziali delle parole inserite vengono visualizzati più in alto.

2. **Tipo di oggetto** - Quando si ordina per nome, città e strade hanno la priorità rispetto ai POI nella visualizzazione dei risultati.

3. **Distanza** - Quando i risultati hanno criteri di corrispondenza e tipi di oggetto simili, i risultati più vicini alla posizione corrente dell'utente vengono mostrati per primi.

***Ad esempio***, una query di ricerca *ufficio postale* mostrerà prima gli uffici postali più vicini, anche se ci sono altri elementi con nomi simili a una distanza maggiore.  

***Limitazioni attuali:***

- Non esiste un'impostazione manuale per modificare l'ordine di ordinamento dei risultati di ricerca.
- Il processo di ordinamento è **gestito automaticamente** da OsmAnd, in base ai criteri sopra elencati.
- Nei casi in cui i risultati di ricerca sono troppo ampi, OsmAnd può **limitare i risultati visualizzati** a quelli con la massima precisione di corrispondenza delle parole.


### Ricerca a testo completo {#full-text-search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ricerca preferiti Android](@site/static/img/search/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca preferiti iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

Puoi trovare la posizione richiesta sulla mappa dall'elenco di punti che appaiono mentre inserisci una query.

1. Inizia a digitare il nome o l'indirizzo nella barra di ricerca.

2. Mentre digiti, l'elenco visualizza i punti più vicini alla query, in questo ordine approssimativo:
    - Categorie POI
    - Preferiti, POI, Percorsi e Waypoint
    - Tracce
    - Indirizzi
    - Mappe da scaricare

3. Se inserisci un [nome di marca](../search/search-poi.md#how-to-use), l'elenco inizierà con i risultati per questo nome, ordinati per distanza più vicina.

:::note Limitazioni dei dati TIGER nelle ricerche di indirizzi
OsmAnd ha integrato i [**dati TIGER**](../../technical/algorithms/trace-address-search-issues.md#trace-address-search-issues#us-address-search-and-tiger-data) nelle mappe degli Stati Uniti per fornire informazioni sugli indirizzi degli Stati Uniti. Il set di dati TIGER è **basato su intervalli** e non contiene numeri civici precisi, quindi alcuni indirizzi potrebbero mancare o essere inaccurati.
:::


### Ricerca sulla mappa {#search-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ricerca POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ricerca POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

OsmAnd ti permette di cercare punti visualizzati su una mappa sullo schermo del tuo dispositivo. Per farlo:

- Usa [uno dei modi](#how-to-use) per accedere allo strumento di ricerca.
- Inizia a digitare il nome o l'indirizzo nella casella di ricerca.
- Apparirà una casella con il pulsante *Mostra sulla mappa* sotto il campo di input della ricerca.
- Tocca questo pulsante per andare alla mappa.
- Puoi continuare a digitare la tua query nella parte superiore dello schermo.


### Cerca nelle vicinanze {#search-nearby}

![Ricerca Android](@site/static/img/search/search_all_near_location_andr.png)

Puoi utilizzare la ricerca nelle vicinanze di una posizione specifica. Per farlo, seleziona il punto richiesto [dall'elenco nel menu di ricerca](#full-text-search) o selezionalo direttamente sulla mappa. Nel [menu contestuale della mappa](../map/map-context-menu.md#actions), seleziona *Azioni → Cerca nelle vicinanze*.


## Ricerca indirizzo {#search-address}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ricerca Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

La **Ricerca indirizzo** utilizza i dati di OpenStreetMap. Questo tipo di ricerca ti permette di trovare la posizione e la direzione per un indirizzo specifico da un elenco già ordinato. Leggi di più nell'articolo [Ricerca indirizzo](./search-address.md).


## Cronologia di ricerca {#search-history}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ricerca cronologia](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca cronologia](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Puoi utilizzare la **Cronologia di ricerca** per cercare di nuovo luoghi, indirizzi o luoghi visitati frequentemente senza dover inserire nuovamente la query. Maggiori dettagli si trovano nell'articolo [Cronologia di ricerca](./search-history.md).


## Ricerca POI {#search-poi}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ricerca categorie POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca categorie POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

La **Ricerca POI** è un elenco, ordinato per categoria, con cui puoi trovare facilmente luoghi e servizi vicino alla tua posizione attuale o a un'area selezionata sulla mappa.

- La [ricerca POI personalizzata](./search-poi.md#custom-poi-search) ti permette di combinare diverse categorie di POI per semplificare e personalizzare la tua ricerca.  
Ad esempio, se hai bisogno di trovare diversi tipi di servizi in una certa area o su un certo tratto di percorso.

- OsmAnd fornisce una [ricerca online](./search-poi.md#online-search) che funziona in tempo reale, dandoti accesso rapido ai risultati di ricerca.  
È conveniente da usare quando le mappe della regione non sono disponibili, ma è necessaria una connessione Internet costante e stabile.

- Leggi l'articolo [Ricerca POI](./search-poi.md) per maggiori informazioni.


## Ricerca coordinate {#search-coordinates}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ricerca coordinate Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca coordinate iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

La ricerca per coordinate fornisce una posizione precisa. Puoi inserire coordinate precise ottenute, ad esempio, da altre fonti come una mappa, un dispositivo GPS o servizi online, il che è particolarmente utile quando si tratta di luoghi che non hanno un indirizzo esatto. Per maggiori informazioni, consulta l'articolo [Ricerca coordinate](./search-coordinates.md).


## Articoli correlati {#related-articles}

- [Ricerca indirizzo](./search-address.md)
- [Cronologia di ricerca](./search-history.md)
- [Ricerca POI](./search-poi.md)
- [Ricerca coordinate](./search-coordinates.md)

> *Ultimo aggiornamento: aprile 2025*