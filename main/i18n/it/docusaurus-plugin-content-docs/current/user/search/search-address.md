---
source-hash: 7aa187a96947b5ca65aab12d710ed0867ffb5db9a42f53d9dfb15a99a9107f74
sidebar_position: 2
title:  Cerca indirizzo
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

*OsmAnd Cerca per indirizzo* si basa sui dati di OpenStreetMap e consente di trovare la posizione e le indicazioni per un indirizzo specifico da un elenco già ordinato, nonché di cercare per codice postale o coordinate. Questo strumento consente di trovare gli indirizzi richiesti in pochi tocchi, il che riduce i tempi di ricerca e aiuta nel caso in cui non si ricordi l'indirizzo esatto.

OsmAnd offre diversi modi per accedere allo *strumento di ricerca* dove si trova la sezione **Cerca indirizzo**.

- Il [pulsante Cerca](../widgets/map-buttons.md#search) viene sempre visualizzato sulla mappa e toccandolo si accede alla [schermata generale](#full-text-search) dello strumento, dove è possibile trovare la scheda *Indirizzo*.
- Vai al *Menu* principale di Android *→ Cerca → scheda Indirizzo*.
- Quando ti prepari per iniziare un percorso, tocca *Navigazione → Imposta destinazione → campo Cerca*.


## Ricerca a testo libero {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca iOS](@site/static/img/search/street_search_ios.png)

</TabItem>

</Tabs>

La ricerca per indirizzo semplifica il processo di ricerca e navigazione, garantisce precisione e usabilità e riduce il tempo necessario per trovare l'indirizzo giusto.

- **Per utilizzare la funzione Cerca indirizzo,** devi prima [scaricare una mappa](../start-with/download-maps.md) dell'area richiesta.
- **La ricerca si basa sui dati che si trovano nell'area visibile della mappa** sullo schermo del dispositivo. Se non trovi nulla, OsmAnd offre di aumentare il raggio di ricerca.
- Le informazioni sull'indirizzo in OsmAnd contengono tutte le [chiavi di tag OSM](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).


Elenco delle query di ricerca:

**1.** L'**ordine** degli elementi nell'elenco:

- **Ordinato per nome**. Selezionando *Specifica prima città/paese/località* (Android) o *Seleziona città* (iOS) verrà visualizzato un elenco che inizia con elementi senza nome, se presenti, quindi nomi numerici seguiti dai nomi per lettera.
- **Ordine numerico crescente**. Nel successivo elenco di ricerca, i numeri civici vengono visualizzati in ordine crescente, dopo aver inserito la città e la via.

**2.** Ogni campo nell'elenco Cerca indirizzo contiene **informazioni** come:

- Un'icona che identifica il tipo di località.
- Parte di un indirizzo, numero postale o area di coordinate.
- Distanza dalla tua posizione attuale o dal centro città.
- Informazioni aggiuntive, come il quartiere della città.


#### Ricerca indirizzo negli Stati Uniti e dati TIGER {#us-address-search-and-tiger-data}

OsmAnd supporta la ricerca di indirizzi utilizzando i dati di OpenStreetMap, ma negli Stati Uniti i risultati della ricerca di indirizzi potrebbero essere incompleti a causa dell'uso dei [dati TIGER](https://wiki.openstreetmap.org/wiki/TIGER).

- **I dati TIGER forniscono intervalli di indirizzi, non posizioni esatte**, il che significa che alcuni numeri civici potrebbero non essere riconosciuti.
- **Se un indirizzo non viene trovato**, prova a cercare *per nome della via* invece di un numero civico specifico.
- Utilizza *identificatori di posizione alternativi*, come punti di riferimento vicini o codici postali, per affinare i risultati della ricerca.


### Formati supportati {#supported-formats}

Vedi l'articolo [Cerca tutto](./search-all.md#basic-queries) per un elenco delle query disponibili e dei formati di ricerca supportati.


## Seleziona città {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca via Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca via iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**Città più vicine**
Questo **visualizza un piccolo elenco di città intorno alla tua posizione** o alla località che hai specificato per *Seleziona via* o *Seleziona città*. Ogni campo contiene un'icona corrispondente alla dimensione della città, il nome della città, la distanza da te al suo centro e per Android la direzione della bussola.

Questo modo di cercare rende facile trovare posizioni specifiche all'interno di una località selezionata, fornendo un modo conveniente per trovare indirizzi in modo accurato e rapido. Puoi iniziare a cercare l'indirizzo necessario determinando la località.

- Per fare ciò, tocca **Specifica prima città/paese/località** (Android) o **Seleziona città** (iOS).
- Nell'elenco che si apre, seleziona la località richiesta. [Qui](#full-text-search) descrive l'ordine in cui vengono visualizzate le query di ricerca e quali informazioni sono disponibili su ogni elemento.
- Nella schermata successiva, puoi continuare a perfezionare l'indirizzo o selezionare il pulsante *Mostra sulla mappa* sotto il campo di immissione della ricerca.
- Per specificare la tua ricerca, puoi inserire tutto o solo una parte del nome della città, del paese o del villaggio in cui si trova l'indirizzo che stai cercando. Ciò ti consente di restringere la ricerca e ottenere un elenco più accurato.
- Toccando l'ultimo elemento nell'indirizzo, nel numero civico o nel nome dell'incrocio, si apre il [menu contestuale della mappa](../map/map-context-menu.md#select-an-object-single-tap) dell'oggetto.

**La ricerca per città offre i seguenti vantaggi:**

- *Comodità*. Consente di selezionare rapidamente la città richiesta dall'elenco e specificare una certa via, casa o incrocio nella città selezionata senza dover inserire l'indirizzo completo. Ciò consente di risparmiare tempo e semplifica il processo di ricerca del posto giusto.
- *Precisione.* È possibile selezionare una città e una via tra le opzioni disponibili, evitando errori durante l'inserimento manuale di un indirizzo.
- *Filtro.* La possibilità di selezionare una casa specifica dall'elenco rende più facile navigare con precisione verso la posizione richiesta, soprattutto quando l'indirizzo esatto è sconosciuto.

:::note Chiave e Valore
*Ricerca città / paese / villaggio* per [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)
*Risultato*: visualizzazione di tutti gli oggetti con questo nome.
:::


## Seleziona via {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca via Android](@site/static/img/search/street_search.png) ![Ricerca via Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca via iOS](@site/static/img/search/address_street_search_3_ios.png) ![Ricerca via Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

La ricerca della via viene eseguita nella località in cui ti trovi, o dove hai cercato prima, o che si trova al centro della mappa visibile sullo schermo dell'applicazione.

- Per utilizzare questo tipo di ricerca, tocca **Cerca via** (*Android*) o **Seleziona via** (*iOS*).
- Nel campo di ricerca accanto al nome della città, puoi iniziare a digitare il nome della via e l'elenco si affinerà, fornendoti i risultati più appropriati.
- Negli altri elementi, la ricerca della via è la stessa di [Seleziona città](#select-city).

:::note Chiave e Valore
*Cerca vie* per [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)
*Risultato*: vengono mostrate tutte le vie con questo nome.
:::


## Ricerca per codice postale {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca codice postale Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca codice postale iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**Per utilizzare la *ricerca per codice postale*, devi solo inserire il numero**, che può essere composto anche da una sola cifra, e l'applicazione offre un elenco di codici postali pertinenti disponibili.

- Seleziona il codice richiesto e toccalo.
- Puoi utilizzare la funzione *Mostra *numero codice postale* sulla mappa*. Questo apre un [menu contestuale della mappa](../map/map-context-menu.md#select-an-object-single-tap) con il codice postale selezionato senza alcuna informazione aggiuntiva sulla posizione.
- Puoi affinare la tua ricerca per questo codice selezionando prima la via richiesta dall'elenco e poi il numero.

**La ricerca per codice postale può essere utile nei seguenti casi:**

- *Trova indirizzi*. Quando inserisci un codice postale, OsmAnd identifica l'area corrispondente e suggerisce gli indirizzi in quell'area. Ciò è particolarmente utile se conosci il codice postale ma non conosci l'indirizzo esatto.
- *Precisione della navigazione*. Nei casi in cui l'indirizzo non è certo, o dove il nome della via può essere ripetuto in aree diverse, l'utilizzo di un codice postale può fornire il percorso migliore per un dato indirizzo.
- *Comodità e velocità*. La ricerca per codice postale consente di trovare informazioni rapidamente, soprattutto se conosci il codice postale ma non sei sicuro dell'indirizzo. Invece di inserire l'indirizzo completo, puoi inserire solo il codice e ottenere risultati pertinenti.

:::note
Per maggiori informazioni, leggi i **[dati dei codici postali del Regno Unito](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
:::


## Ricerca coordinate {#coordinates-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca coordinate Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca coordinate iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

La [**Ricerca coordinate**](../search/search-coordinates.md) consente di specificare coordinate geografiche, come latitudine e longitudine, per trovare una posizione specifica. Fornisce posizioni precise su una mappa in diversi [formati di coordinate](../search/search-coordinates.md#coordinates-search) e consente di ottenere informazioni correlate. Questa funzione può essere utile quando non si dispone di un indirizzo o del nome esatto di una posizione e può rendere più facile pianificare viaggi e navigare in luoghi sconosciuti.


## Articoli correlati {#related-articles}

- [Cerca tutto](./search-all.md)
- [Cronologia ricerche](./search-history.md)
- [Cerca POI](./search-poi.md)
- [Cerca coordinate](./search-coordinates.md)

> *Ultimo aggiornamento: luglio 2024*