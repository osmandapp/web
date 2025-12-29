---
source-hash: ef13b994168cf04dcf98784cf4ef75aea6eb57a3e4db536a0fa48e3617173008
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

![Modifica Preferiti cloud Web OsmAnd](@site/static/img/web/favorites_new.png)

Dopo aver registrato un [**OsmAnd Pro**](../personal/osmand-cloud.md#login) e per [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), i tuoi Preferiti nel Pianificatore Web sono organizzati in cartelle. Ogni cartella raggruppa i luoghi salvati e fornisce un set di azioni disponibili dal menu Preferiti. 
Le seguenti azioni sono disponibili:

- *Mostra sulla mappa* - mostra i punti preferiti dalla cartella scelta sulla mappa.
- *Rinomina* - nome e descrizione della cartella preferiti.
- *Condividi* - apre le opzioni di condivisione. Puoi scegliere chi può accedere a questa cartella:
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

La vista Dettagli fornisce le informazioni associate al luogo selezionato e dipende dai dati disponibili per quel preferito specifico. Al minimo, include la posizione sulla mappa e le sue coordinate geografiche. Per i luoghi collegati a oggetti OpenStreetMap o fonti arricchite, potrebbero essere mostrate metadati aggiuntive, come nomi, categorie, identificatori o link di riferimento (ad esempio, [Wikipedia](../plugins/wikipedia.md) o link Wikidata). 

![Dettagli Preferiti Web](@site/static/img/web/favorites_details.png)


## Azioni Preferiti {#favorites-actions}

### Aggiungi / Modifica Preferito {#add--edit-favorite}

[Per aggiungere](../personal/favorites.md#manage-favorites) un nuovo punto preferito, fai clic destro sullo schermo. 

Per modificare un preferito esistente, fai clic sul punto preferito direttamente sulla mappa o selezionalo da una cartella preferiti. Questo apre il pannello Dettagli, dove è disponibile l'azione Modifica. La modifica può anche essere avviata dal menu a tre punti (⋮) accanto al preferito nell'elenco Preferiti.

L'interfaccia di modifica ti permette di modificare le proprietà principali del preferito, come il suo nome, icona, colore e descrizione. Il layout e i campi disponibili sono coerenti con l'esperienza di modifica nell'[app mobile OsmAnd](../personal/favorites.md#create), fornendo un flusso di lavoro familiare tra le piattaforme.

![Aggiungi Preferiti Web OsmAnd](@site/static/img/web/web_favorites_add.png)


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