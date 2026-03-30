---
source-hash: cc7b11b19f0261ab3f9cc12de149c6d268cdaa50b3a828cc60f5dd3ebe0ce868
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

## Panoramica {#overview}

La *Ricerca per Indirizzo di OsmAnd* si basa sui dati di OpenStreetMap e consente di trovare la posizione e le indicazioni per un indirizzo specifico da un elenco già ordinato, nonché di effettuare ricerche per codice postale o coordinate. Questo strumento permette di trovare gli indirizzi richiesti in pochi tocchi, riducendo i tempi di ricerca e aiutando nel caso in cui non si ricordi l'indirizzo esatto.

La ricerca per indirizzo funziona offline utilizzando le mappe scaricate. Assicurati che la mappa per la regione in cui stai cercando sia installata. I risultati dipendono dai dati di indirizzo disponibili in OpenStreetMap.

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

OsmAnd supporta la ricerca per indirizzo a testo libero. Ciò significa che è possibile digitare un indirizzo direttamente nel campo di ricerca invece di selezionare città → via → numero civico passo dopo passo. Il motore di ricerca tenta di riconoscere i componenti dell'indirizzo come:
- città;
- via;
- numero civico;
- codice postale;
- nome del luogo.

Non è necessario inserirli in un ordine rigoroso. **Esempi di query**:

`221B Baker Street London`  
`Baker Street 221B`  
`London Baker Street 221B`  
`101 Main Street`  
`Main Street 101`

Se l'indirizzo completo non viene trovato, OsmAnd tenta automaticamente query semplificate (ad esempio rimuovendo parole extra) per migliorare le possibilità di trovare la posizione.

**NOTA:** La ricerca per indirizzo funziona solo all'interno delle mappe scaricate. I risultati della ricerca si basano su:
- mappe installate sul dispositivo;
- area della mappa visibile;
- posizione corrente. 

Se non viene trovato nulla, OsmAnd potrebbe suggerire di aumentare il raggio di ricerca.

### Ricerca di indirizzi negli Stati Uniti e dati TIGER {#us-address-search-and-tiger-data}

OsmAnd supporta la ricerca di indirizzi utilizzando i dati di OpenStreetMap, ma negli Stati Uniti i risultati della ricerca di indirizzi possono essere incompleti a causa dell'uso dei [dati TIGER](https://wiki.openstreetmap.org/wiki/TIGER).  

- **I dati TIGER forniscono intervalli di indirizzi, non posizioni esatte**, ciò significa che alcuni numeri civici potrebbero non essere riconosciuti.
- **Se un indirizzo non viene trovato**, provare a cercare *per nome della via* invece che per un numero civico specifico.
- Utilizzare *identificatori di posizione alternativi*, come punti di riferimento vicini o codici postali, per affinare i risultati della ricerca.  

### Formati supportati {#supported-formats}

OsmAnd supporta diversi formati di indirizzo comuni. È possibile inserire gli indirizzi in ordini diversi a seconda di come si conosce l'indirizzo.

| Formato indirizzo | Esempi di query |
|---|---|
| Numero civico + via | 221B Baker Street<br />10 Downing Street |
| Via + numero civico | Baker Street 221B<br />Main Street 101 |
| Città + via + numero civico | London Baker Street 221B<br />Paris Rue de Rivoli 10 |
| Intersezioni di vie | Broadway & Wall Street<br />Main Street and High Street |
| Nome città | Berlin<br />Vienna<br />San Francisco |
| Codice postale + indirizzo | 10001 New York<br />75001 Paris Rue de Rivoli 10 |

### Consigli per la ricerca {#search-tips}

La ricerca per indirizzo in OsmAnd è tollerante a diversi formati di input. È possibile provare:
- cambiando l'ordine delle parole;
- rimuovendo informazioni extra;
- cercando solo per nome della via.

Il motore di ricerca tollera anche variazioni comuni nella formattazione degli indirizzi come diversi ordini di parole, differenze di ortografia, abbreviazioni o formati di numero civico. La tabella seguente mostra variazioni di ricerca tipiche che potrebbero restituire lo stesso indirizzo.

| Variazione di ricerca | Esempi di query | Discussione correlata |
|---|---|---|
| Variazioni nome via | [Weberstraße](https://osmand.net/map?pin=51.853672,12.042003#13/51.8545/12.0386) <br /> Weberstrasse <br /> Weber-straße <br /> Weber-strasse | [Discussione](https://github.com/osmandapp/OsmAnd/issues/23709) |
| Ignorare spazi nei nomi | [Goethe Straße](https://osmand.net/map?pin=51.85358,12.064447#13/51.8545/12.0386) <br /> Goethestraße | [Discussione](https://github.com/osmandapp/OsmAnd/issues/13783) |
| Numeri civici con suffissi letterali | [30B Dragonder, Valkenswaard](https://osmand.net/map?pin=51.339645,5.4682517#19/51.3398/5.4681) <br /> 30b Dragonder, Valkenswaard <br /> 30-B Dragonder, Valkenswaard <br /> 30-b Dragonder, Valkenswaard | [Discussione](https://github.com/osmandapp/OsmAnd/issues/23320) |
| Abbreviazioni vie | [Straelener Straße](https://osmand.net/map?pin=51.443604,6.343231#19/51.4436/6.3432) <br /> Straelener Str. | [Discussione](https://github.com/osmandapp/OsmAnd/issues/4923) |
| Indirizzo completo vs indirizzo semplificato | [221B Baker Street London United Kingdom](https://osmand.net/map/poi/?name=221B+Baker+Street&type=Tourist+attraction&pin=51.52339,-0.1582396) <br /> 221B Baker Street <br /> Baker Street 221B | [Discussione](https://github.com/osmandapp/OsmAnd/issues/19004) |
| Formato indirizzo USA | [1500 North Main Avenue, Springfield](https://osmand.net/map?pin=37.226315,-93.296524#11/37.1799/-93.3522) <br /> [4600 Sugar Maple Lane, Nashville](https://osmand.net/map?pin=36.051846,-86.95705#18/36.0516/-86.9561) | [Discussione](https://github.com/osmandapp/OsmAnd/issues/6824) |
| Abbreviazioni stati USA | [Springfield, VA 22150](https://osmand.net/map?pin=36.51995,-86.86385#18/36.5199/-86.8635) <br /> [Manhattan Beach, CA 90266](https://osmand.net/map?pin=33.883938,-118.41048#20/33.8839/-118.4105) | [Discussione](https://github.com/osmandapp/OsmAnd/issues/6824) |


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
    Questa **visualizza un piccolo elenco di città intorno alla vostra posizione** o alla località specificata per *Seleziona via* o *Seleziona città*. Ogni campo contiene un'icona corrispondente alle dimensioni della città, il nome della città, la distanza da voi al suo centro e, per Android, la direzione della bussola.

Questo modo di cercare facilita la ricerca di luoghi specifici all'interno di una località selezionata, fornendo un modo comodo per trovare indirizzi in modo preciso e veloce. È possibile iniziare la ricerca dell'indirizzo desiderato determinando la località.

- Per fare ciò, toccare **Specifica prima città/paese/località** (Android) o **Seleziona città** (iOS).
- Nell'elenco che si apre, selezionare la località richiesta. [Qui](#full-text-search) viene descritto l'ordine in cui vengono visualizzate le query di ricerca e quali informazioni sono disponibili per ogni elemento.
- Nella schermata successiva, è possibile continuare a perfezionare l'indirizzo o selezionare il pulsante *Mostra sulla mappa* sotto il campo di immissione della ricerca.
- Per specificare la ricerca, è possibile inserire tutto o solo una parte del nome della città, del paese o del villaggio in cui si trova l'indirizzo che si sta cercando. Ciò consente di restringere la ricerca e di ottenere un elenco più preciso.
- Toccando l'ultimo elemento dell'indirizzo, il numero civico o il nome dell'incrocio, si apre il [menu contestuale della mappa](../map/map-context-menu.md#select-an-object-single-tap) dell'oggetto.  

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

**La ricerca per codice postale può essere utile quando:**

- Il nome della via esiste in diverse città.
- Si conosce il codice postale ma non l'indirizzo esatto.

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