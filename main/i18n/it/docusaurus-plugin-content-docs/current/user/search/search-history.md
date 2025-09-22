---
source-hash: b0e4660605b0cdfdfcfc653e1f8929974cb654b66c0c55fbc588b89e37d05091
sidebar_position: 3
title:  Cronologia ricerche
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

*Cronologia ricerche* è una registrazione di tutte le ricerche e le posizioni che hai inserito o cercato nell'app durante il periodo di utilizzo. Questo strumento ti consente di trovare e accedere facilmente alle posizioni cercate in precedenza, il che facilita la navigazione e ti fa risparmiare tempo.

OsmAnd offre diversi modi per visualizzare la cronologia delle ricerche.  

- Il [pulsante Cerca](../widgets/map-buttons.md#search) è sempre visualizzato sulla mappa e toccandolo si accede alla [schermata generale](#how-to-use) dello strumento.
- Vai al *Menu principale di Android → Cerca → scheda Cronologia*.
- Quando ti prepari ad avviare un percorso, tocca *Navigazione → Imposta destinazione → Campo di ricerca*.
- Il blocco informazioni nel menu di navigazione della [preparazione del percorso](../navigation/setup/route-navigation.md#navigation-menu) mostra un elenco di punti di destinazione recenti, che fanno anche parte della cronologia delle ricerche.
- La cronologia delle ricerche è disponibile in [Android Auto](../navigation/auto-car.md#search) e [CarPlay](../navigation/car-play.md#search).


## Come usare {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca cronologia](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca cronologia](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

La cronologia delle ricerche serve a fornire informazioni pertinenti sulle tue azioni precedenti.

- *Ricerca di nuovo*. Puoi utilizzare la cronologia delle ricerche per cercare di nuovo luoghi o indirizzi cercati in precedenza senza dover reinserire la query.  

- *Accesso rapido ai luoghi visitati di frequente*. Se visiti spesso determinati luoghi, come casa, lavoro o luoghi preferiti, la Cronologia ricerche salva tali luoghi, fornendo un accesso rapido ad essi.  

- *Traccia i viaggi precedenti*. La cronologia delle ricerche può essere utile per tracciare viaggi e percorsi precedenti. Puoi tracciare i percorsi che hai fatto prima, o [pianificare il tuo prossimo percorso](../plan-route/create-route.md) basandoti su quelli precedenti.  

- *Cerca luoghi in un determinato periodo di tempo*. Per l'app Android, è necessario utilizzare un tocco lungo, quindi trovare il mese in cui hai effettuato il viaggio, uscire dal menu di eliminazione e impostare il nome nel campo di ricerca. Per l'app iOS, l'elenco della cronologia delle ricerche è già suddiviso in blocchi per mese.

- *Elimina voci*. La Cronologia ricerche offre la possibilità di [eliminare](#delete) le voci precedenti, il che può essere utile per la riservatezza o per mantenere organizzata la cronologia.


## Elementi della cronologia {#history-items}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca cronologia](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca cronologia](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Ogni campo nell'elenco della Cronologia ricerche contiene alcune delle **informazioni** disponibili per l'applicazione.

- Un'icona che identifica il tipo o la categoria dell'oggetto trovato.
- Il nome dell'oggetto, la posizione, l'indirizzo o la query di tipo. Per le tracce, vengono visualizzate informazioni sulla distanza, il numero di waypoint e il tempo.
- Distanza dalla tua posizione attuale al punto e direzione tramite bussola.


### Ordine degli elementi {#order-of-items}

- **Elementi recenti**. Le richieste o le posizioni più recenti vengono visualizzate in cima all'elenco. Ciò consente un accesso rapido agli elementi utilizzati di recente.
- **Ordine cronologico**. Gli elementi nell'elenco della Cronologia ricerche sono disposti in ordine cronologico, partendo dalle voci più vecchie o più antiche e terminando con le più recenti o le ultime. Gli elementi vecchi scendono gradualmente nell'elenco man mano che vengono aggiunte nuove voci, a meno che gli elementi vecchi nella cronologia delle ricerche non siano stati utilizzati, nel qual caso verranno spostati in cima all'elenco.
- In iOS, l'elenco è ordinato per mese.

### Tipo di oggetti {#type-of-objects}

I seguenti **tipi di oggetti** entrano nell'elenco della Cronologia ricerche:

- **Posizioni**. Può trattarsi di un indirizzo, nome di un'attività commerciale, numero di percorso, coordinate, marcatori, punti di interesse, note OSM o luoghi che hai toccato sulla mappa.
- **Tracce e Waypoint**. L'elenco include le tracce che hai creato, registrato o scaricato e che hai utilizzato nei percorsi precedenti, e i waypoint se hai navigato verso di essi separatamente.


## Azioni {#actions}

Nello strumento Cronologia ricerche, puoi [eliminare](#delete) le query non necessarie, tutte in una volta o per singoli elementi. Puoi utilizzare l'opzione di [esportazione](#export-and-share) della cronologia. L'app Android offre un'azione aggiuntiva di [condivisione](#share-android) degli elementi di ricerca come file [GPX](../../technical/osmand-file-formats/osmand-gpx.md).  

Puoi **disabilitare o abilitare** la visualizzazione dell'intera cronologia delle ricerche. In questo caso, le query non vengono eliminate dal dispositivo. In Android, l'interruttore si trova nella schermata principale dello strumento nella [scheda Cronologia](#overview). In iOS, si trova in *Menu → Impostazioni → Impostazioni OsmAnd → Cronologia → Cronologia ricerche*.


### Elimina {#delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Eliminazione cronologia ricerche](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Eliminazione cronologia ricerche](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

Dopo aver utilizzato OsmAnd per molto tempo, l'elenco della *Cronologia ricerche* può diventare troppo lungo, quindi l'eliminazione delle query di ricerca aiuta a ripulire l'elenco. Puoi eliminare le query che non sono più pertinenti o che non intendi più utilizzare in futuro, il che facilita la ricerca nell'elenco, specialmente quando devi trovare rapidamente query di ricerca specifiche.

È necessario **toccare a lungo uno qualsiasi degli elementi della query nell'elenco** per aprire la schermata di eliminazione.

- *Seleziona o deseleziona elementi casuali* - tocca l'elemento desiderato nell'elenco.
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

Ci sono diverse opzioni disponibili per esportare la cronologia delle ricerche. Tutti i file vengono esportati in formato `.osf` (OsmAnd settings File).  

1. *Menu → Impostazioni → Impostazioni OsmAnd → Cronologia → Cronologia ricerche*.  
    L'esportazione è disponibile utilizzando il menu delle impostazioni di OsmAnd. Per Android, seguendo questo percorso si accede alla schermata di eliminazione, dove è disponibile l'opzione [Condividi cronologia](#share-android). Nel caso di iOS, è possibile selezionare singoli elementi o l'intera cronologia sullo schermo e, dopo aver toccato il pulsante *Esporta*, accedere al menu *Backup locale*.

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
- *Analizza ed elabora i dati*. Puoi esportare la cronologia delle ricerche per l'analisi dei dati o utilizzarla in altre applicazioni.
- [Condividi](#share-android) la cronologia delle ricerche con altri utenti di OsmAnd.


### Condividi (Android) {#share-android}

![Impostazioni Cronologia](@site/static/img/search/history_search_share_andr.png)

I passaggi per condividere gli elementi della cronologia delle ricerche sono simili all'[esportazione](#export-and-share), con la differenza che si esporta l'intera cronologia in una volta come file [osf](../../technical/osmand-file-formats/osmand-osf.md), mentre è possibile condividere singoli file selezionati in formato gpx.  

Nella schermata di [eliminazione](#delete), seleziona gli elementi desiderati dall'elenco della Cronologia ricerche. Nell'angolo in alto a destra dello schermo, c'è un'icona che indica la condivisione. Seleziona un'applicazione o un'azione disponibile nell'elenco per condividere.


## Articoli correlati {#related-articles}

- [Cerca tutto](./search-all.md)
- [Cerca indirizzo](./search-address.md)
- [Cerca PDI](./search-poi.md)
- [Cerca coordinate](./search-coordinates.md)