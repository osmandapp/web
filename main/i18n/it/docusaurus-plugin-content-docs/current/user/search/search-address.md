---
source-hash: cf4241ee60d46e0a3cc994e68bbced57d6c99c4266b32eabce60286e84fb0b90
sidebar_position: 2
title: Cerca Indirizzo
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

*La ricerca per indirizzo di OsmAnd* si basa sui dati di OpenStreetMap e consente di trovare la posizione e le indicazioni per un indirizzo specifico da un elenco già ordinato, nonché di cercare per codice postale o coordinate. Questo strumento consente di trovare gli indirizzi richiesti in pochi tocchi, il che riduce il tempo di ricerca e aiuta nel caso in cui non si ricordi l'indirizzo esatto.

OsmAnd offre diversi modi per accedere allo *strumento di ricerca* dove si trova la sezione **Cerca indirizzo**.

- Il [pulsante di ricerca](../widgets/map-buttons.md#search) è sempre visualizzato sulla mappa e toccandolo si accede alla [schermata generale](#full-text-search) dello strumento, dove è possibile trovare la scheda *Indirizzo*.
- Vai al *Menu* principale di Android *→ Cerca → Scheda Indirizzo*.
- Durante la preparazione di un percorso, tocca *Navigazione → Imposta destinazione → Campo di ricerca*.


## Ricerca a testo completo {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cerca Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cerca iOS](@site/static/img/search/street_search_ios.png)

</TabItem>

</Tabs>

La ricerca per indirizzo semplifica il processo di ricerca e navigazione, garantisce precisione e usabilità e riduce il tempo necessario per trovare l'indirizzo giusto.

- **Per utilizzare la funzione Cerca indirizzo,** è necessario [scaricare prima una mappa](../start-with/download-maps.md) dell'area richiesta.
- **La ricerca si basa sui dati che si trovano nell'area visibile della mappa** sullo schermo del dispositivo. Se non trovi nulla, OsmAnd offre di aumentare il raggio di ricerca.
- Le informazioni sull'indirizzo in OsmAnd contengono tutte le [chiavi di tag OSM](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).


Elenco delle query di ricerca:

**1.** L'**ordine** degli elementi nell'elenco:

- **Ordinato per nome**. Selezionando *Specifica prima città/paese/località* (Android) o *Seleziona città* (iOS) verrà visualizzato un elenco che inizia con elementi senza nome, se presenti, quindi nomi numerici seguiti dai nomi per lettere.
- **Ordine numerico crescente**. Nel successivo elenco di ricerca, i numeri civici vengono visualizzati in ordine crescente, dopo aver inserito la città e la via.

**2.** Ogni campo nell'elenco di ricerca indirizzi contiene **informazioni** quali:

- Un'icona che identifica il tipo di località.
- Parte di un indirizzo, numero postale o area di coordinate.
- Distanza dalla posizione corrente o dal centro città.
- Informazioni aggiuntive, come il distretto della città.


#### Ricerca indirizzi negli Stati Uniti e dati TIGER {#us-address-search-and-tiger-data}

OsmAnd supporta la ricerca di indirizzi utilizzando i dati di OpenStreetMap, ma negli Stati Uniti, i risultati della ricerca di indirizzi potrebbero essere incompleti a causa dell'uso dei [dati TIGER](https://wiki.openstreetmap.org/wiki/TIGER).

- **I dati TIGER forniscono intervalli di indirizzi, non posizioni esatte**, ciò significa che alcuni numeri civici potrebbero non essere riconosciuti.
- **Se un indirizzo non viene trovato**, prova a cercare *per nome della via* invece di un numero civico specifico.
- Utilizza *identificatori di posizione alternativi*, come punti di riferimento vicini o codici postali, per affinare i risultati della ricerca.


### Formati supportati {#supported-formats}

Vedi l'articolo [Cerca tutto](./search-all.md#basic-queries) per un elenco delle query disponibili e dei formati di ricerca supportati.


## Seleziona città {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cerca via Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cerca via iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**Città più vicine**
    Questo **visualizza un piccolo elenco di città intorno alla tua posizione** o alla località che hai specificato per *Seleziona via* o *Seleziona città*. Ogni campo contiene un'icona corrispondente alla dimensione della città, il nome della città, la distanza da te al suo centro e per Android la direzione della bussola.

Questo modo di ricerca facilita la ricerca di posizioni specifiche all'interno di una località selezionata, fornendo un modo conveniente per trovare indirizzi in modo accurato e rapido. Puoi iniziare a cercare l'indirizzo necessario determinando la località.

- Per fare ciò, tocca **Specifica prima città/paese/località** (Android) o **Seleziona città** (iOS).
- Nell'elenco che si apre, seleziona la località richiesta. [Qui](#full-text-search) viene descritto l'ordine in cui vengono visualizzate le query di ricerca e quali informazioni sono disponibili per ogni elemento.
- Nella schermata successiva, puoi continuare a perfezionare l'indirizzo o selezionare il pulsante *Mostra sulla mappa* sotto il campo di immissione della ricerca.
- Per specificare la tua ricerca, puoi inserire tutto o solo parte del nome della città, del paese o del villaggio in cui si trova l'indirizzo che stai cercando. Ciò ti consente di restringere la ricerca e ottenere un elenco più accurato.
- Toccando l'ultimo elemento nell'indirizzo, il numero civico o il nome dell'incrocio, si apre il [menu contestuale della mappa](../map/map-context-menu.md#select-an-object-single-tap) dell'oggetto.

**La ricerca per città offre i seguenti vantaggi:**

- *Comodità*. Ti consente di selezionare rapidamente la città richiesta dall'elenco e di specificare una determinata via, casa o incrocio nella città selezionata senza dover inserire l'indirizzo completo. Ciò consente di risparmiare tempo e semplifica il processo di ricerca del luogo giusto.
- *Precisione.* Puoi selezionare una città e una via tra le opzioni disponibili, evitando errori durante l'inserimento manuale di un indirizzo.
- *Filtro.* La possibilità di selezionare una casa specifica dall'elenco facilita la navigazione precisa verso la posizione richiesta, soprattutto quando l'indirizzo esatto non è noto.

:::note Chiave & Valore
*Ricerca città / paese / villaggio* per [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)
*Risultato*: visualizzazione di tutti gli oggetti con questo nome.
:::


## Seleziona via {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cerca via Android](@site/static/img/search/street_search.png) ![Cerca via Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cerca via iOS](@site/static/img/search/address_street_search_3_ios.png) ![Cerca via Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

La ricerca di vie viene eseguita nella località in cui ti trovi, o dove hai cercato in precedenza, o che si trova al centro della mappa visibile sullo schermo dell'applicazione.

- Per utilizzare questo tipo di ricerca, tocca **Cerca via** (*Android*) o **Seleziona via** (*iOS*).
- Nel campo di ricerca accanto al nome della città, puoi iniziare a digitare il nome della via e l'elenco si affinerà, fornendoti i risultati più appropriati.
- Negli altri elementi, la ricerca di vie è la stessa di [Seleziona città](#select-city).

:::note Chiave & Valore
*Cerca vie* per [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)
*Risultato*: vengono mostrate tutte le vie con questo nome.
:::


## Ricerca codice postale {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cerca codice postale Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cerca codice postale iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**Per utilizzare la *ricerca per codice postale*, è sufficiente inserire il numero**, che può essere anche una singola cifra, e l'applicazione offre un elenco di codici postali pertinenti disponibili.

- Seleziona il codice richiesto e toccalo.
- Puoi utilizzare la funzione *Mostra *numero codice postale* sulla mappa*. Questa apre un [menu contestuale della mappa](../map/map-context-menu.md#select-an-object-single-tap) con il codice postale selezionato senza alcuna informazione aggiuntiva sulla posizione.
- Puoi affinare la tua ricerca per questo codice selezionando prima la via richiesta dall'elenco e poi il numero.

**La ricerca per codice postale può essere utile nei seguenti casi:**

- *Trova indirizzi*. Quando inserisci un codice postale, OsmAnd identifica l'area corrispondente e suggerisce indirizzi in quell'area. Questo è particolarmente utile se conosci il codice postale ma non conosci l'indirizzo esatto.
- *Precisione di navigazione*. Nei casi in cui l'indirizzo non è certo, o dove il nome della via può essere ripetuto in diverse aree, l'utilizzo di un codice postale può fornire il percorso migliore per un dato indirizzo.
- *Comodità e velocità*. La ricerca per codice postale ti consente di trovare rapidamente informazioni, soprattutto se conosci il codice postale ma non sei sicuro dell'indirizzo. Invece di inserire l'indirizzo completo, puoi inserire solo il codice e ottenere risultati pertinenti.

:::note
Per maggiori informazioni, leggi i **[dati del codice postale del Regno Unito](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
:::


## Ricerca coordinate {#coordinates-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cerca coordinate Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cerca coordinate iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

[**Ricerca coordinate**](../search/search-coordinates.md) consente di specificare coordinate geografiche, come latitudine e longitudine, per trovare una posizione specifica. Fornisce posizioni accurate su una mappa in diversi [formati di coordinate](../search/search-coordinates.md#coordinates-search) e consente di ottenere informazioni correlate. Questa funzione può essere utile quando non si dispone di un indirizzo o di un nome esatto di una posizione, e può facilitare la pianificazione del viaggio e la navigazione in luoghi sconosciuti.


## Articoli correlati {#related-articles}

- [Cerca tutto](./search-all.md)
- [Cronologia ricerche](./search-history.md)
- [Cerca POI](./search-poi.md)
- [Cerca coordinate](./search-coordinates.md)

> *Ultimo aggiornamento: luglio 2024*