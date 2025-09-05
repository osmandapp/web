---
source-hash: 13f229400445a81db544afbadce1fb85746267eecddcd8299384d384de2a58b5
sidebar_position: 3
title: Cronologia Ricerche
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

La *Cronologia Ricerche* è un registro di tutte le ricerche e le posizioni che hai inserito o cercato nell'app durante il periodo di utilizzo. Questo strumento ti consente di trovare e accedere facilmente a posizioni cercate in precedenza, il che semplifica la navigazione e ti fa risparmiare tempo.

OsmAnd offre diversi modi per visualizzare la cronologia delle ricerche.

- Il [pulsante Cerca](../widgets/map-buttons.md#search) è sempre visualizzato sulla mappa e toccandolo ti porterà alla [schermata generale](#how-to-use) dello strumento.
- Vai al *Menu* principale di Android *→ Cerca → Scheda Cronologia*.
- Quando ti prepari ad avviare un percorso, tocca *Navigazione → Imposta destinazione → Campo di ricerca*.
- Il blocco informazioni nel menu di navigazione della [preparazione del percorso](../navigation/setup/route-navigation.md#navigation-menu) visualizza un elenco di punti di destinazione recenti, che fanno anch'essi parte della cronologia delle ricerche.
- La cronologia delle ricerche è disponibile in [Android Auto](../navigation/auto-car.md#search) e [CarPlay](../navigation/car-play.md#search).


## Come usare {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cronologia ricerche](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cronologia ricerche](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

La cronologia delle ricerche serve a fornire informazioni pertinenti sulle tue azioni precedenti.

- *Ricerca ripetuta*. Puoi utilizzare la cronologia delle ricerche per cercare nuovamente luoghi o indirizzi cercati in precedenza senza dover reinserire la query.

- *Accesso rapido ai luoghi visitati di frequente*. Se visiti spesso determinati luoghi, come la tua casa, il lavoro o i luoghi preferiti, la Cronologia Ricerche salva tali luoghi, fornendo un accesso rapido ad essi.

- *Traccia i viaggi precedenti*. La cronologia delle ricerche può essere utile per tracciare i viaggi e i percorsi precedenti. Puoi tracciare i percorsi che hai già fatto o [pianificare il tuo prossimo percorso](../plan-route/create-route.md) in base a quelli precedenti.

- *Cerca luoghi in un certo periodo di tempo*. Per l'app Android, devi usare un tocco lungo, quindi trovare il mese in cui hai fatto il viaggio, uscire dal menu di eliminazione e impostare il nome nel campo di ricerca. Per l'app iOS, l'elenco della cronologia delle ricerche è già diviso in blocchi per mese.

- *Elimina voci*. La Cronologia Ricerche offre la possibilità di [eliminare](#delete) le voci precedenti, il che può essere utile per la riservatezza o per mantenere organizzata la cronologia.


## Elementi della cronologia {#history-items}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cronologia ricerche](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cronologia ricerche](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Ogni campo nell'elenco della Cronologia Ricerche contiene alcune delle **informazioni** disponibili per l'applicazione.

- Un'icona che identifica il tipo o la categoria dell'oggetto trovato.
- Il nome dell'oggetto, la posizione, l'indirizzo o la query di tipo. Per le tracce, vengono visualizzate informazioni sulla distanza, il numero di waypoint e il tempo.
- Distanza dalla posizione corrente al punto e direzione tramite bussola.


### Ordine degli elementi {#order-of-items}

- **Elementi recenti**. Le richieste o le posizioni più recenti vengono visualizzate nella parte superiore dell'elenco. Ciò consente un accesso rapido agli elementi utilizzati di recente.
- **Ordine cronologico**. Gli elementi nell'elenco della Cronologia Ricerche sono disposti in ordine cronologico, a partire dalle voci più vecchie o precedenti e terminando con le più recenti o ultime. Gli elementi vecchi si spostano gradualmente verso il basso nell'elenco man mano che vengono aggiunte nuove voci, a meno che gli elementi vecchi nella cronologia delle ricerche non siano stati utilizzati, nel qual caso verranno spostati nella parte superiore dell'elenco.
- In iOS, l'elenco è ordinato per mese.

### Tipo di oggetti {#type-of-objects}

I seguenti **tipi di oggetti** entrano nell'elenco della Cronologia Ricerche:

- **Posizioni**. Può essere un indirizzo, un nome commerciale, un numero di percorso, coordinate, marcatori, punti di interesse, note OSM o luoghi toccati sulla mappa.
- **Tracce e Waypoint**. L'elenco include tracce create, registrate o scaricate che hai utilizzato in percorsi precedenti, e waypoint se hai navigato verso di essi separatamente.


## Azioni {#actions}

Nello strumento Cronologia Ricerche, puoi [eliminare](#delete) le query non necessarie, tutte in una volta o per singoli elementi. Puoi utilizzare la Cronologia [esportazione](#export-and-share). L'app Android fornisce un'azione aggiuntiva di [condivisione](#share-android) degli elementi di ricerca come file [GPX](../../technical/osmand-file-formats/osmand-gpx.md).

Puoi **disabilitare o abilitare** la visualizzazione dell'intera cronologia delle ricerche. In questo caso, le query non vengono eliminate dal dispositivo. In Android, l'interruttore si trova nella schermata principale dello strumento nella [scheda Cronologia](#overview). In iOS, si trova in *Menu → Impostazioni → Impostazioni OsmAnd → Cronologia → Cronologia ricerche*.


### Elimina {#delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cronologia ricerche](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cronologia ricerche](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

Dopo aver usato OsmAnd per molto tempo, l'elenco della *Cronologia Ricerche* può diventare troppo lungo, quindi l'eliminazione delle query di ricerca aiuta a svuotare l'elenco. Puoi eliminare le query che non sono più pertinenti o che non intendi più utilizzare in futuro, il che facilita la ricerca nell'elenco, soprattutto quando devi trovare rapidamente query di ricerca specifiche.

È necessario **premere a lungo su uno qualsiasi degli elementi della query nell'elenco** per aprire la schermata Elimina.

- *Seleziona o deseleziona elementi casuali* - tocca l'elemento richiesto nell'elenco.
- *Seleziona il periodo disponibile per l'eliminazione*, come giorno, ultimi 7 giorni o mese - seleziona la casella con il sottotitolo nell'elenco.
- *Puoi eliminare l'intera cronologia* in una volta toccando il pulsante *Seleziona tutto* nella parte inferiore dello schermo.
- *Menu → Impostazioni → Impostazioni OsmAnd → Cronologia → Azioni*. Questa sezione contiene il pulsante **Elimina tutta la cronologia**.


### Esporta e Condividi {#export-and-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Impostazioni generali Cronologia Android](@site/static/img/personal/profiles/general_settings_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Impostazioni generali Cronologia iOS](@site/static/img/personal/profiles/history_settings_ios.png)

</TabItem>

</Tabs>

Sono disponibili diverse opzioni per esportare la cronologia delle ricerche. Tutti i file vengono esportati nel formato `.osf` (OsmAnd settings File).

1. *Menu → Impostazioni → Impostazioni OsmAnd → Cronologia → Cronologia ricerche*.
    L'esportazione è disponibile tramite il menu delle impostazioni di OsmAnd. Per Android, seguendo questo percorso si accede alla schermata di eliminazione, dove è disponibile [Condividi cronologia](#share-android). Nel caso di iOS, è possibile selezionare singoli elementi o l'intera cronologia nella schermata, e dopo aver toccato il pulsante *Esporta*, andare al menu *Backup locale*.

2. *Menu → Impostazioni → Impostazioni OsmAnd → Cronologia → Azioni → Backup come file* (Android).
    *Menu → Impostazioni → Impostazioni OsmAnd → Cronologia → Azioni → Esporta* (iOS).
    Toccando questi elementi si accede al menu *Importa/Esporta* (Android) o *Backup locale* (iOS). Espandi l'elenco *I miei luoghi* e trova *Cronologia ricerche*. Tutte le query vengono esportate in un unico file contemporaneamente.

3. *Menu → Impostazioni → Importa/Esporta → Esporta su file* (Android).
    *Menu → Impostazioni → Backup locale → Backup come file* (iOS).
    Puoi leggere maggiori dettagli nell'articolo [Importa/Esporta](../personal/import-export.md#export).

4. [OsmAnd Cloud](../personal/osmand-cloud.md#select-data-to-back-up)
    Puoi utilizzare il Cloud per eseguire il backup della cronologia delle ricerche. Nel menu *Modifiche locali* o *Impostazioni → Backup dati → I miei luoghi → Cronologia ricerche*.

![Impostazioni Cronologia](@site/static/img/search/history_search_share_andr.png)

L'esportazione di elementi o dell'intera cronologia delle ricerche può essere utile nei seguenti casi:

- *Backup*. Puoi eseguire il backup della cronologia delle ricerche per salvare le informazioni prima di eliminarle e ripristinarle se necessario.
- *Trasferimento su un altro dispositivo*. Quando cambi dispositivo, puoi utilizzare la funzione di esportazione o il Cloud per trasferire la cronologia delle ricerche su un nuovo dispositivo senza dover cercare e inserire nuovamente i dati.
- *Analizzare ed elaborare i dati*. Puoi esportare la cronologia delle ricerche per l'analisi dei dati o utilizzarla in altre applicazioni.
- [Condividi](#share-android) la cronologia delle ricerche con altri utenti OsmAnd.


#### Condividi (Android) {#share-android}

![Impostazioni Cronologia](@site/static/img/search/history_search_share_andr.png)

I passaggi per condividere gli elementi della cronologia delle ricerche sono simili a [esporta](#export-and-share), con la differenza che esporti l'intera cronologia in una volta come file [osf](../../technical/osmand-file-formats/osmand-osf.md), mentre puoi condividere singoli file selezionati in formato gpx.

Nella schermata [elimina](#delete), seleziona gli elementi richiesti dall'elenco della Cronologia Ricerche. Nell'angolo in alto a destra dello schermo, c'è un'icona che indica la condivisione. Seleziona un'applicazione o un'azione disponibile nell'elenco da condividere.


## Articoli correlati {#related-articles}

- [Cerca tutto](./search-all.md)
- [Cerca indirizzo](./search-address.md)
- [Cerca POI](./search-poi.md)
- [Cerca coordinate](./search-coordinates.md)


> *Ultimo aggiornamento: luglio 2024*