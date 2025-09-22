---
source-hash: 677964c6e30a8d9596ffa45395cb1cc593266a07fbfb2b36d1a6384a00432d7d
sidebar_position: 2
title:  Ricerca Indirizzo
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

La *Ricerca per Indirizzo di OsmAnd* si basa sui dati di OpenStreetMap e consente di trovare la posizione e le indicazioni per un indirizzo specifico da un elenco già ordinato, nonché di effettuare ricerche per codice postale o coordinate. Questo strumento permette di trovare gli indirizzi richiesti in pochi tocchi, riducendo i tempi di ricerca e aiutando nel caso in cui non si ricordi l'indirizzo esatto.

OsmAnd offre diversi modi per accedere allo strumento di *Ricerca*, dove si trova la sezione **Ricerca Indirizzo**.

- Il [pulsante Cerca](../widgets/map-buttons.md#search) è sempre visualizzato sulla mappa e toccandolo si accede alla [schermata generale](#full-text-search) dello strumento, dove si trova la scheda *Indirizzo*.
- Andare al *Menu* principale di Android → *Cerca* → scheda *Indirizzo*.
- Quando ci si prepara a iniziare un percorso, toccare *Navigazione* → *Imposta destinazione* → *Campo di ricerca*.


## Ricerca a testo libero {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca iOS](@site/static/img/search/street_search_ios.png)

</TabItem>

</Tabs>

La ricerca per indirizzo semplifica il processo di ricerca e navigazione, garantisce accuratezza e usabilità e riduce il tempo necessario per trovare l'indirizzo giusto.

- **Per utilizzare la funzione Ricerca Indirizzo,** è necessario prima [scaricare una mappa](../start-with/download-maps.md) dell'area richiesta.
- **La ricerca si basa sui dati presenti nell'area visibile della mappa** sullo schermo del dispositivo. Se non si trova nulla, OsmAnd propone di aumentare il raggio di ricerca.
- Le informazioni sull'indirizzo in OsmAnd contengono tutte le [chiavi dei tag OSM](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).


Elenco delle query di ricerca:

**1.** L'**ordine** degli elementi nell'elenco:

- **Ordinati per nome**. Selezionando *Specifica prima città/paese/località* (Android) o *Seleziona città* (iOS) verrà visualizzato un elenco che inizia con gli elementi senza nome, se presenti, poi i nomi numerici seguiti dai nomi in ordine alfabetico.
- **Ordine numerico crescente**. Nell'elenco di ricerca successivo, i numeri civici vengono visualizzati in ordine crescente, dopo aver inserito la città e la via.

**2.** Ogni campo dell'elenco di ricerca degli indirizzi contiene **informazioni** quali:

- Un'icona che identifica il tipo di località.
- Parte di un indirizzo, numero postale o area di coordinate.
- Distanza dalla posizione corrente o dal centro della città.
- Informazioni aggiuntive, come il quartiere della città.


### Ricerca di indirizzi negli Stati Uniti e dati TIGER {#us-address-search-and-tiger-data}

OsmAnd supporta la ricerca di indirizzi utilizzando i dati di OpenStreetMap, ma negli Stati Uniti i risultati della ricerca di indirizzi possono essere incompleti a causa dell'uso dei [dati TIGER](https://wiki.openstreetmap.org/wiki/TIGER).

- **I dati TIGER forniscono intervalli di indirizzi, non posizioni esatte**, ciò significa che alcuni numeri civici potrebbero non essere riconosciuti.
- **Se un indirizzo non viene trovato**, provare a cercare *per nome della via* invece che per un numero civico specifico.
- Utilizzare *identificatori di posizione alternativi*, come punti di riferimento vicini o codici postali, per affinare i risultati della ricerca.


### Formati supportati {#supported-formats}

Consultare l'articolo [Cerca Tutto](./search-all.md#basic-queries) per un elenco delle query disponibili e dei formati di ricerca supportati.


## Seleziona Città {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca Via Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca Via iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**Città più vicine**  
    Questa opzione **visualizza un piccolo elenco di città intorno alla vostra posizione** o alla località specificata per *Seleziona via* o *Seleziona città*. Ogni campo contiene un'icona corrispondente alle dimensioni della città, il nome della città, la distanza da voi al suo centro e, per Android, la direzione della bussola.

Questo modo di cercare facilita la ricerca di luoghi specifici all'interno di una località selezionata, fornendo un modo comodo per trovare indirizzi in modo preciso e veloce. È possibile iniziare la ricerca dell'indirizzo desiderato determinando la località.

- Per fare ciò, toccare **Specifica prima città/paese/località** (Android) o **Seleziona città** (iOS).
- Nell'elenco che si apre, selezionare la località richiesta. [Qui](#full-text-search) viene descritto l'ordine in cui vengono visualizzate le query di ricerca e quali informazioni sono disponibili per ogni elemento.
- Nella schermata successiva, è possibile continuare a perfezionare l'indirizzo o selezionare il pulsante *Mostra sulla mappa* sotto il campo di immissione della ricerca.
- Per specificare la ricerca, è possibile inserire tutto o solo una parte del nome della città, del paese o del villaggio in cui si trova l'indirizzo che si sta cercando. Ciò consente di restringere la ricerca e di ottenere un elenco più preciso.
- Toccando l'ultimo elemento dell'indirizzo, il numero civico o il nome dell'incrocio, si apre il [menu contestuale della mappa](../map/map-context-menu.md#select-an-object-single-tap) dell'oggetto.

**La ricerca per città offre i seguenti vantaggi:**

- *Comodità*. Consente di selezionare rapidamente la città richiesta dall'elenco e di specificare una determinata via, casa o incrocio nella città selezionata senza dover inserire l'indirizzo completo. Ciò consente di risparmiare tempo e semplifica il processo di ricerca del posto giusto.
- *Precisione.* È possibile selezionare una città e una via tra le opzioni disponibili, evitando errori durante l'inserimento manuale di un indirizzo.
- *Filtro.* La possibilità di selezionare una casa specifica dall'elenco facilita la navigazione accurata verso il luogo richiesto, soprattutto quando l'indirizzo esatto è sconosciuto.

:::note Chiave e Valore
*Ricerca Città / Paese / Villaggio* tramite [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Risultato*: visualizzazione di tutti gli oggetti con questo nome.
:::


## Seleziona Via {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca Via Android](@site/static/img/search/street_search.png) ![Ricerca Via Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca Via iOS](@site/static/img/search/address_street_search_3_ios.png) ![Ricerca Via Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

La ricerca della via viene eseguita nella località in cui ci si trova, o in cui si è cercato in precedenza, o che si trova al centro della mappa visibile sullo schermo dell'applicazione.

- Per utilizzare questo tipo di ricerca, toccare **Cerca Via** (*Android*) o **Seleziona Via** (*iOS*).
- Nel campo di ricerca accanto al nome della città, è possibile iniziare a digitare il nome della via e l'elenco si affinerà, fornendo i risultati più appropriati.
- Per gli altri elementi, la ricerca della via è la stessa di [Seleziona Città](#select-city).

:::note Chiave e Valore
*Ricerca vie* tramite [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Risultato*: vengono mostrate tutte le vie con questo nome.
:::


## Ricerca Codice Postale {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca Codice Postale Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca Codice Postale iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**Per utilizzare la *Ricerca Codice Postale*, è sufficiente inserire il numero**, che può essere composto anche da una sola cifra, e l'applicazione offre un elenco di codici postali pertinenti disponibili.

- Selezionare il codice richiesto e toccarlo.
- È possibile utilizzare la funzione *Mostra *numero codice postale* sulla mappa*. Si aprirà un [menu contestuale della mappa](../map/map-context-menu.md#select-an-object-single-tap) con il codice postale selezionato senza alcuna informazione aggiuntiva sulla posizione.
- È possibile affinare la ricerca in base a questo codice selezionando prima la via richiesta dall'elenco e poi il numero.

**La ricerca per codice postale può essere utile nei seguenti casi:**

- *Trovare indirizzi*. Quando si inserisce un codice postale, OsmAnd identifica l'area corrispondente e suggerisce gli indirizzi in quella zona. Ciò è particolarmente utile se si conosce il codice postale ma non l'indirizzo esatto.
- *Precisione della navigazione*. Nei casi in cui l'indirizzo non è certo, o in cui il nome della via può essere ripetuto in aree diverse, l'uso di un codice postale può fornire il percorso migliore per un determinato indirizzo.
- *Comodità e velocità*. La ricerca per codice postale consente di trovare rapidamente le informazioni, soprattutto se si conosce il codice postale ma non si è sicuri dell'indirizzo. Invece di inserire l'indirizzo completo, è possibile inserire solo il codice e ottenere risultati pertinenti.

:::note
Per ulteriori informazioni, leggere i **[dati sui codici postali del Regno Unito](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
:::


## Ricerca Coordinate {#coordinates-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca Coordinate Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca Coordinate iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

La [**Ricerca Coordinate**](../search/search-coordinates.md) consente di specificare le coordinate geografiche, come latitudine e longitudine, per trovare una posizione specifica. Fornisce posizioni precise su una mappa in diversi [formati di coordinate](../search/search-coordinates.md#coordinate-format) e consente di ottenere informazioni correlate. Questa funzione può essere utile quando non si dispone di un indirizzo o del nome esatto di un luogo e può facilitare la pianificazione di viaggi e la navigazione in luoghi sconosciuti.


## Articoli Correlati {#related-articles}

- [Cerca Tutto](./search-all.md)
- [Cronologia Ricerche](./search-history.md)
- [Ricerca PDI](./search-poi.md)
- [Ricerca Coordinate](./search-coordinates.md)