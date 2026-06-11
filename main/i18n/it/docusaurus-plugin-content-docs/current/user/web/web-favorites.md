---
source-hash: 6e85a9c0cfb7a2e0e5b6f8f90f9b17a7da6b19a01478b0e05bd7a83438517602
sidebar_position: 6
sidebar_label: Favorites
title: Favorites
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

I Preferiti nel Pianificatore Web ti permettono di salvare e gestire luoghi importanti direttamente sulla mappa. Possono essere utilizzati per contrassegnare posizioni a cui desideri accedere rapidamente, organizzarli in cartelle e riutilizzarli per la navigazione o la pianificazione del percorso. L'interfaccia web fornisce strumenti convenienti per visualizzare, modificare e lavorare con i preferiti mentre esplori la mappa, con tutti gli aggiornamenti sincronizzati senza soluzione di continuità attraverso il tuo [OsmAnd Cloud](../personal/osmand-cloud.md).


## Gestire i Preferiti {#manage-favorites}

![Modifica Preferiti cloud Web OsmAnd](@site/static/img/web/favorites_1_new.png)

Dopo aver registrato un [**OsmAnd Pro**](../personal/osmand-cloud.md#login) e per [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), i tuoi Preferiti nel Pianificatore Web sono organizzati in cartelle. Ogni cartella raggruppa i luoghi salvati e fornisce un set di azioni disponibili dal menu Preferiti. 
Le seguenti azioni sono disponibili:

- *Mostra sulla mappa* - mostra i punti preferiti dalla cartella scelta sulla mappa.
- *Fissa cartella* - fissa una cartella in cima all'elenco dei Preferiti per un accesso rapido. Le cartelle fissate sono separate dalle altre cartelle. Per rimuovere una cartella dalla sezione superiore, seleziona *Annulla fissaggio cartella*. La cartella Personale è fissata per impostazione predefinita.
- *Rinomina* - nome e descrizione della cartella preferiti.
- *Condividi* - apre le opzioni di condivisione. Puoi scegliere chi può accedere a questa cartella.
- *Scarica* - scarica la cartella preferiti scelta.
- *Elimina* - elimina la cartella preferiti scelta.

### Condividi {#share}

Selezionando **Condividi** si apre la schermata di condivisione, dove è possibile configurare l'accesso a una cartella Preferiti. È possibile selezionare una delle seguenti modalità di accesso:
- *Privato*. Solo tu puoi visualizzare la cartella. Passare a Privato revoca l'accesso per tutti gli utenti approvati in precedenza. Viene mostrato un dialogo di conferma prima che il cambiamento venga applicato.
- *Solo richiesta*. Chiunque abbia il link può richiedere l'accesso. Le richieste appaiono nell'elenco In sospeso, dove possono essere approvate, negate o bloccate.
- *Chiunque*. Chiunque abbia il link può visualizzare la cartella immediatamente, senza approvazione.  
A seconda della modalità di accesso selezionata, il pulsante **Copia link** diventa disponibile. Il link può essere condiviso per consentire la visualizzazione o per richiedere l'accesso.

La schermata di condivisione include tre elenchi di utenti:
- Approvati — utenti che attualmente hanno accesso alla cartella.
- In sospeso — utenti che hanno richiesto l'accesso e stanno attendendo l'approvazione o il rifiuto.
- Bloccati — utenti che non sono autorizzati ad accedere o richiedere l'accesso.  
Ogni voce utente include un menu che permette di cambiare il loro stato o rimuovere l'accesso.

Durante la configurazione dell'accesso, potrebbero apparire i seguenti dialoghi:
- *Cambia accesso*. Visualizzato quando si passa la cartella a Privato. Il dialogo avverte che tutto l'accesso utente esistente verrà revocato prima di confermare il cambiamento.
- *Richieste di accesso*. Visualizzato quando si gestiscono gli utenti nell'elenco In sospeso, permettendo di approvare o negare le richieste di accesso.

![Modifica Preferiti cloud Web OsmAnd](@site/static/img/web/favorites_share.png) ![Modifica Preferiti cloud Web OsmAnd](@site/static/img/web/favorites_share_2.png)


## Dettagli Preferiti {#favorites-details} 

Selezionando un preferito si apre il pannello **Dettagli**. Questo pannello appare quando fai clic su un preferito direttamente sulla mappa o lo selezioni da una cartella preferiti.

La vista Dettagli fornisce le informazioni associate al luogo selezionato e dipende dai dati disponibili per quel preferito specifico. Al minimo, include la posizione sulla mappa e le sue coordinate geografiche. Per i luoghi collegati a oggetti OpenStreetMap o fonti arricchite, potrebbero essere mostrate metadati aggiuntive, come nomi, categorie, identificatori o link di riferimento (ad esempio, Wikipedia o link Wikidata). 

![Dettagli Preferiti Web](@site/static/img/web/favorites_details.png)


## Azioni Preferiti {#favorites-actions}

[Per aggiungere](../personal/favorites.md#manage-favorites) un nuovo punto preferito, fai clic destro sullo schermo. 

Per modificare un preferito esistente, fai clic sul punto preferito direttamente sulla mappa o selezionalo da una cartella preferiti. Questo apre il pannello Dettagli, dove è disponibile l'azione Modifica. La modifica può anche essere avviata dal menu a tre punti (⋮) accanto al preferito nell'elenco Preferiti.

Il pannello di modifica del preferito consente di modificare le proprietà principali di un preferito, inclusi nome, indirizzo, descrizione, cartella, icona, colore e forma. L'aspetto selezionato viene visualizzato in anteprima sia nel pannello di modifica che direttamente sulla mappa.

### Modifica Preferiti {#edit-favorites}

Il campo **Indirizzo** supporta il rilevamento automatico dell'indirizzo in base alla posizione selezionata sulla mappa. Il campo può apparire in diversi stati:

- Ricerca in corso... — visualizzato mentre l'indirizzo viene determinato automaticamente.
- Campo vuoto — visualizzato dopo aver cancellato l'indirizzo. In questo stato, il pulsante della posizione può essere utilizzato per rilevare nuovamente l'indirizzo automaticamente.
- Campo compilato — visualizza l'indirizzo rilevato automaticamente o il testo inserito manualmente.

Il campo indirizzo include anche azioni rapide per cancellare o ripristinare l'indirizzo rilevato.

La sezione **Descrizione** consente di aggiungere note o informazioni aggiuntive al preferito. Selezionando Aggiungi note si apre l'editor della descrizione in un pannello secondario. Se è già stata aggiunta una descrizione, viene visualizzata un'anteprima breve nel pannello principale, limitata a due righe di testo. L'editor della descrizione supporta la formattazione del testo avanzata e conserva automaticamente le modifiche al ritorno al pannello precedente.

I preferiti possono essere organizzati in cartelle per una gestione più semplice e un accesso rapido. Selezionando la voce **Cartella** si apre un pannello secondario in cui è possibile selezionare le cartelle disponibili. Per impostazione predefinita viene selezionata automaticamente la cartella utilizzata in precedenza. Ogni cartella mostra anche il numero di punti preferiti al suo interno.

È possibile creare nuove cartelle direttamente dal pannello di selezione delle cartelle. Selezionando il pulsante Aggiungi cartella si apre una finestra di dialogo in cui è possibile inserire il nome della cartella e scegliere la sua posizione nell'elenco Preferiti.

La finestra di dialogo include anche una sezione Avanzate, in cui è possibile configurare le impostazioni di aspetto predefinite per la cartella. Queste impostazioni includono il colore, l'icona e la forma predefiniti che verranno applicati automaticamente ai punti preferiti aggiunti a questa cartella.

![Modifica cartella Web](@site/static/img/web/edit_folder.png)

### Aspetto {#appearance}

La sezione **Aspetto** consente di personalizzare la visualizzazione del preferito sulla mappa. Sono disponibili le seguenti proprietà: icona, colore, forma e icona. 

Selezionando **Icona** si apre un pannello secondario con gruppi di icone categorizzati.

- Le icone sono raggruppate per categorie.
- Le icone utilizzate di recente vengono visualizzate per prime.
- L'icona attualmente selezionata è evidenziata.
- L'anteprima utilizza la forma e il colore selezionati.

Selezionando **Colore** si apre il pannello della tavolozza dei colori.

- La tavolozza contiene colori predefiniti e definiti dall'utente.
- È possibile aggiungere colori personalizzati utilizzando il selettore dei colori.
- I colori possono essere modificati, duplicati o rimossi tramite il menu contestuale.
- I colori appena aggiunti vengono salvati nella tavolozza dell'utente e rimangono disponibili in seguito.

L'opzione **Forma** definisce la forma di sfondo utilizzata per il marcatore del preferito.  Sono disponibili le seguenti forme: cerchio, quadrato e ottagono.

L'anteprima dell'aspetto si aggiorna immediatamente sia nel pannello di modifica che sulla mappa quando si modifica l'icona, il colore o la forma.

![Modifica aspetto Web](@site/static/img/web/edit_icon.png)

### Altre Azioni {#other-actions}

Oltre alla modifica, ogni preferito fornisce diverse altre azioni che possono essere accedute dal pannello Dettagli o dal menu a tre punti (⋮) nell'elenco Preferiti:
- *Elimina* - rimuove il preferito selezionato in modo permanente. Questa azione è disponibile sia dal pannello Dettagli che dal menu a tre punti. L'eliminazione influisce sul preferito su tutti i dispositivi dopo la sincronizzazione.
- *Condividi* - questa azione ti permette di condividere un link diretto al luogo.
- *Indicazioni da* - imposta il preferito selezionato come punto di partenza per la pianificazione del percorso. Il pannello Percorso si apre automaticamente, permettendoti di scegliere una destinazione e un profilo di navigazione.
- *Navigazione* - imposta il preferito selezionato come punto di destinazione. 


## Articoli Correlati {#related-articles}

- [Preferiti](../personal/favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Menu Contestuale Mappa](../map/map-context-menu.md)
- [Wikipedia](../plugins/wikipedia.md)