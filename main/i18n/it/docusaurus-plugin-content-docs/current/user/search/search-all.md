---
source-hash: 425f511859172593fe5402cce5c44974144e585dac7b77bd26c1c5e68a22a8f0
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
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<!--
<InfoIncompleteArticle/>
-->

## Panoramica {#overview}

**La Ricerca** è uno strumento utile per trovare rapidamente luoghi. È possibile utilizzare la Ricerca per trovare una località tramite indirizzo, coordinate, punti di interesse (PDI), o ricerche precedenti. La [Ricerca Indirizzo](#search-address) consente di inserire l'indirizzo desiderato per ottenere una posizione esatta. La ricerca tramite [Coordinate](#search-coordinates) funziona con coordinate geografiche come latitudine e longitudine. Con la ricerca [PDI](#search-poi) è possibile cercare luoghi vicini in categorie specifiche, come caffè, hotel o stazioni di servizio. La scheda [Esplora](#search-explore) evidenzia luoghi popolari nelle vicinanze e fornisce un rapido accesso alle località visitate di recente. La [Cronologia](#search-history) salva le ricerche passate. La funzione di ricerca facilita la pianificazione di viaggi, la navigazione in terreni sconosciuti e la ricerca di PDI nelle vicinanze.


## Come si usa {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Elenco PDI ricerca Android](@site/static/img/search/search_online_2_andr_new.png)

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
- Ricerca per articoli della guida di viaggio (richiede il download del file corrispondente delle guide di viaggio).
- Ricerca per Preferiti e Waypoint.
- Ricerca icone per nomi di sottocategorie di PDI.
- Ricerca per tracce.
- Ricerca per locali commerciali e marchi.
- Ricerca online (Nominatim).
- Ricerca URL (Google e OsmAnd). OsmAnd può riconoscere molti link condivisi di Google Maps, inclusi i link brevi da `maps.app.goo.gl`.
- Cronologia Ricerche.

<!--
***Supported formats*:**  

***Tags*** can be used as a search query. They consist of ***a key and a value***, for example:
*addr:street=StreetName*.  
To avoid confusion, sometimes the key or value is surrounded by quotation marks: **key="value" or "key"="value"**. The quotation marks and equal sign are not part of the tag content.
-->

### Ordinamento dei risultati di ricerca {#sorting-search-results}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Elenco PDI ricerca Android](@site/static/img/search/search_sort_by.webp)

OsmAnd ordina automaticamente i risultati della ricerca in base a diversi criteri:

1. **Corrispondenza con le query** — I risultati che contengono corrispondenze esatte o parziali con le parole inserite vengono visualizzati più in alto.

2. **Rilevanza** — Gli oggetti il cui nome corrisponde strettamente alla query di ricerca vengono solitamente mostrati più in alto nei risultati.

3. **Tipo di oggetto** — A seconda della query, i risultati possono includere diversi tipi di oggetti come città, strade, indirizzi o PDI.

4. **Distanza** — Quando i risultati hanno criteri di corrispondenza e tipi di oggetto simili, vengono mostrati per primi i risultati più vicini alla posizione attuale dell'utente.

5. **Importanza** — Luoghi noti o frequentemente citati possono apparire più in alto nei risultati quando corrispondono strettamente alla query di ricerca.

È inoltre possibile modificare manualmente l'ordine di ordinamento dei risultati di ricerca utilizzando il chip *Ordina per* nella parte superiore dell'elenco dei risultati di ricerca. Toccare *Ordina per* e selezionare una delle seguenti opzioni:
- **Rilevanza** — Ordina i risultati di ricerca in base alla rilevanza rispetto alla query di ricerca.
- **Più vicini** — Ordina i risultati di ricerca in base alla distanza, mostrando prima i risultati più vicini.

</TabItem>

<TabItem value="ios" label="iOS">

OsmAnd ordina automaticamente i risultati della ricerca in base a diversi criteri:

1. **Corrispondenza con le query** — I risultati che contengono corrispondenze esatte o parziali con le parole inserite vengono visualizzati più in alto.

2. **Rilevanza** — Gli oggetti il cui nome corrisponde strettamente alla query di ricerca vengono solitamente mostrati più in alto nei risultati.

3. **Tipo di oggetto** — A seconda della query, i risultati possono includere diversi tipi di oggetti come città, strade, indirizzi o PDI.

4. **Distanza** — Quando i risultati hanno criteri di corrispondenza e tipi di oggetto simili, vengono mostrati per primi i risultati più vicini alla posizione attuale dell'utente.

5. **Importanza** — Luoghi noti o frequentemente citati possono apparire più in alto nei risultati quando corrispondono strettamente alla query di ricerca.

***Ad esempio***, una query di ricerca *ufficio postale* mostrerà prima gli uffici postali più vicini, anche se ci sono altri elementi con nomi simili a una distanza maggiore.  

***Limitazioni attuali:***

- Non esiste un'impostazione manuale per modificare l'ordine di ordinamento dei risultati della ricerca.
- Il processo di ordinamento è **gestito automaticamente** da OsmAnd, in base ai criteri elencati sopra.
- Nei casi in cui i risultati della ricerca sono troppo ampi, OsmAnd può **limitare i risultati visualizzati** a quelli con la maggiore accuratezza di corrispondenza delle parole.


</TabItem>

</Tabs>


### Ricerca full-text {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca preferiti Android](@site/static/img/search/favorite_search_android.webp)

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

3. Durante la ricerca per nome su Android, OsmAnd visualizza i chip dei tipi di PDI in base ai tipi presenti nei risultati di ricerca. Toccare un chip per filtrare i risultati in base al tipo di PDI selezionato. È possibile selezionare più tipi di PDI. Una volta selezionato, un chip si sposta nella prima posizione dell'elenco. Toccare nuovamente un chip selezionato per deselezionarlo e tornare ai risultati di ricerca completi.

4. Se si inserisce un [nome di marchio](../search/search-poi.md#how-to-use), l'elenco inizierà con i risultati con questo nome, ordinati per distanza più vicina.

5. I risultati di ricerca possono includere anche un [articolo della guida di viaggio](../plan-route/travel-guides.md#travel-article). Toccandolo si apre direttamente l'articolo, anziché mostrare una posizione sulla mappa.

:::note Limitazioni dei dati TIGER nella ricerca di indirizzi
OsmAnd ha integrato i [**dati TIGER**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) nelle mappe degli Stati Uniti per fornire informazioni sugli indirizzi statunitensi. Il set di dati TIGER è **basato su intervalli** e non contiene numeri civici precisi, quindi alcuni indirizzi potrebbero essere mancanti o imprecisi.
:::

### Cerca intorno (solo Android) {#search-around}

![Cerca intorno](@site/static/img/search/search_around.webp)

Quando la ricerca viene aperta in una posizione significativamente diversa da quella attuale, il chip *Cerca intorno* consente di scegliere l'area da utilizzare per la ricerca. Toccare il chip e selezionare una delle seguenti opzioni:
- **Centro mappa** — Esegue la ricerca intorno al centro attuale della mappa. Questa opzione è selezionata per impostazione predefinita.
- **Mia posizione** — Esegue la ricerca intorno alla posizione attuale. 

### Cerca sulla mappa {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca PDI Android](@site/static/img/search/poi_overlay_android_new.png) ![Ricerca PDI Android](@site/static/img/search/poi_overlay_android_new.webp)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ricerca PDI iOS](@site/static/img/search/poi_overlay_ios_new.png) ![Ricerca PDI iOS](@site/static/img/search/poi_overlay_ios_new.webp)

</TabItem>

</Tabs>

OsmAnd consente di cercare i punti visualizzati su una mappa sullo schermo del dispositivo. Per fare ciò:

- Utilizzare [uno dei modi](#how-to-use) per accedere allo strumento di ricerca.
- Iniziare a digitare il nome o l'indirizzo nella casella di ricerca.
- Sotto il campo di immissione della ricerca apparirà una casella con il pulsante *Mostra sulla mappa*. Su Android, il pulsante di azione mobile (FAB) *Mostra sulla mappa* appare nella parte inferiore della schermata dei risultati di ricerca.
- Toccare questo pulsante per andare alla mappa.
- È possibile continuare a digitare la query nella parte superiore dello schermo.


### Cerca nelle vicinanze {#search-nearby}

![Ricerca Android](@site/static/img/search/search_all_near_location_andr_new.png)

È possibile utilizzare la ricerca nelle vicinanze di una posizione specifica. Per fare ciò, selezionare il punto richiesto [dall'elenco nel menu di ricerca](#full-text-search) o selezionarlo direttamente sulla mappa. Nel [menu contestuale della mappa](../map/map-context-menu.md#actions), selezionare *Azioni → Cerca nelle vicinanze*.


## Ricerca Indirizzo {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca Android](@site/static/img/search/search_address_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

**Ricerca Indirizzo** utilizza i dati di OpenStreetMap. Questo tipo di ricerca consente di trovare la posizione e la direzione verso un indirizzo specifico da un elenco già ordinato. Per saperne di più, consultare l'articolo [Ricerca Indirizzo](./search-address.md).


## Ricerca Esplora {#search-explore}

<InfoAndroidOnly/>

![Ricerca Esplora](@site/static/img/search/explore_search_android.webp)

La scheda **Esplora** nello strumento di Ricerca aiuta a scoprire rapidamente luoghi vicino alla posizione attuale e ad accedere agli elementi aperti di recente. Contiene due sezioni principali: [Luoghi popolari nelle vicinanze](#popular-places-nearby)
 e [Cronologia](#history).

### Luoghi popolari nelle vicinanze {#popular-places-nearby}

La sezione **Luoghi popolari nelle vicinanze** visualizza un elenco scorrevole di punti di riferimento e attrazioni noti vicino alla posizione. Ogni elemento può includere il nome del luogo, la sua categoria, distanza e direzione, e un'immagine di anteprima se disponibile. Toccare *Mostra tutto* per aprire l'elenco completo o *Mostra sulla mappa* per visualizzare questi luoghi sulla mappa.

Per maggiori dettagli, vedere [qui](../map/popular_places.md#explore-in-search).

### Cronologia {#history}

![Sezione cronologia](@site/static/img/search/history_section_android.webp) ![Sezione cronologia](@site/static/img/search/history_section_2_android.webp)

La sezione **Cronologia** fornisce un accesso rapido agli elementi della cronologia recente. Visualizza fino a 25 elementi più recenti e può essere espansa o compressa. Toccare *Visualizza tutto* per aprire la schermata completa della Cronologia.

Nella schermata completa della Cronologia, è possibile ordinare e filtrare gli elementi della cronologia utilizzando le seguenti opzioni:

1. **Ordina per**:
- Recenti — visualizza prima gli elementi aggiunti più di recente. Quando questa opzione è selezionata, gli elementi sono raggruppati per tempo, ad esempio Oggi, La scorsa settimana e periodi precedenti.
- Più vicini — ordina gli elementi in base alla distanza dalla posizione attuale.
- Più vicini al centro della mappa — ordina gli elementi in base alla distanza dal centro attuale della mappa. Quando viene selezionata una delle opzioni di ordinamento basate sulla distanza, i gruppi basati sul tempo non vengono visualizzati.

2. **Tipo** — filtra gli elementi della cronologia in base a:
- Tutti — visualizza tutti gli elementi della cronologia disponibili.
- Ricerca — visualizza gli elementi dalla cronologia delle ricerche.
- Navigazione — visualizza gli elementi dalla cronologia della navigazione.

3. **Filtri per categoria** — filtra gli elementi della cronologia per categoria. I filtri per categoria disponibili dipendono dai tipi di elementi disponibili nella Cronologia. Ad esempio, è possibile visualizzare categorie come PDI, Traccia, Posizione, Preferito o Indirizzo.

4. **Impostazioni** — toccare l'icona dell'ingranaggio nell'angolo in alto a destra per aprire le impostazioni della Cronologia, dove è possibile abilitare o disabilitare la cronologia delle ricerche, la cronologia della navigazione e la cronologia dei marcatori sulla mappa, eseguire il backup della cronologia come file o cancellare tutta la cronologia.

## Cronologia Ricerca {#search-history}

![Ricerca cronologia](@site/static/img/search/history_search_ios.png)

Su iOS, è possibile accedere alla Cronologia delle ricerche dalla scheda **Cronologia** dedicata nello strumento di Ricerca. Consente di cercare di nuovo luoghi, indirizzi o luoghi visitati di frequente trovati in precedenza senza dover inserire nuovamente la query. Per ulteriori informazioni, consultare la sezione iOS dell'articolo [Cronologia Ricerca](./search-history.md).


## Ricerca PDI {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca PDI Android](@site/static/img/search/search_poi_categoties_andr_new.png)

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
- [Cronologia Ricerca](./search-history.md)
- [Ricerca PDI](./search-poi.md)
- [Ricerca Coordinate](./search-coordinates.md)
- [Luoghi Popolari](../map/popular_places.md)