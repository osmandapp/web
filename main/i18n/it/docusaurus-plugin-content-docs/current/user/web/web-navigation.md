---
source-hash: b7357e6a51f940ace21ac3c4ebf732361180dc9c7f5720e449fa9f0856db537a
sidebar_position: 8
sidebar_label:  Navigation
title: Navigation on the Web
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

Utilizza **Navigation on the Web** per creare un percorso sulla mappa e visualizzare in anteprima la guida con indicazioni turn-by-turn. Calcola un percorso per la modalità di viaggio selezionata, mostra la distanza e il tempo previsti e ti permette di controllare le variazioni di altitudine e le curve imminenti. Puoi affinare il percorso nelle impostazioni di Navigazione (ad esempio, consentendo o evitando determinati tipi di strade o utilizzando parametri del veicolo) e utilizzare più punti di percorso quando necessario.


## Avvia un Percorso {#start-a-route}

Nello stato vuoto, Navigation ti invita ad aggiungere punti di percorso: *Clicca sulla mappa per impostare i punti di Partenza e Destinazione*.

I punti di percorso possono essere forniti dal pannello Route. Quando selezioni **Imposta punto di partenza** o **Imposta destinazione**, il campo mostra suggerimenti come *Posizione attuale* e punti utilizzati in precedenza dalla cronologia. Puoi rimuovere i suggerimenti salvati utilizzando *Cancella cronologia*.

Navigation segue un flusso semplice: il primo punto diventa la Partenza e il punto successivo diventa la Destinazione. Non appena entrambi i punti sono impostati, il percorso viene calcolato e visualizzato sulla mappa.

![Navigazione Web](@site/static/img/web/navigation_start.png)

### Gestisci i Punti di Percorso {#manage-route-points}

Puoi espandere un percorso oltre Partenza → Destinazione aggiungendo punti intermedi. Utilizza il pulsante più (+) accanto all'elenco dei punti per aggiungere un punto intermedio (un nuovo punto viene inserito sopra la Destinazione). I punti intermedi possono essere rimossi utilizzando il pulsante meno (–).

Scambia Partenza e Destinazione — scambia la Partenza e la Destinazione mantenendo i punti intermedi invariati. L'azione è contrassegnata da un'icona che mostra due frecce in direzioni opposte.

![Navigazione Web](@site/static/img/web/navigation_points.png)


## Profilo di Routing {#routing-profile}

In cima al pannello Route, puoi scegliere un profilo di routing per il tuo percorso. Un set di profili comunemente utilizzati è mostrato come quattro icone. Per accedere a più opzioni, apri il menu a tre punti accanto alle icone del profilo. Espande l'elenco completo dei profili disponibili.

Quando cambi il profilo, Navigation aggiorna il percorso per adattarlo alla modalità di viaggio selezionata.

![Navigazione Web](@site/static/img/web/navigation_profile.png)


## Impostazioni di Navigazione {#navigation-settings}

Per regolare come vengono calcolati i percorsi, apri Impostazioni utilizzando l'icona a ingranaggio nel pannello Route. Le impostazioni sono raggruppate in sezioni che puoi espandere/collassare. L'insieme di sezioni e opzioni dipende dal profilo di routing selezionato, quindi vedrai parametri diversi per diverse modalità di viaggio.

Le sezioni tipiche includono:

- **Generale** — opzioni specifiche del profilo (ad esempio, nel profilo auto puoi vedere interruttori come *Percorso a basso consumo* e *Consegna merci*).
- **Consenti** — opzioni che permettono tipi specifici di strade o sentieri durante il routing.
- **Evita** — opzioni che escludono determinati tipi di strade o situazioni dal percorso (ad esempio, evitando autostrade a pedaggio, traghetti, autostrade, tunnel, ecc.).
- **[Parametri del Veicolo](../navigation/guidance/vehicle-parameters.md)** — disponibili per i profili basati su veicolo. Ti permette di specificare vincoli del veicolo (come dimensioni/peso), che possono influenzare il routing su strade ristrette.

![Navigazione Web](@site/static/img/web/navigation_settings.png) ![Navigazione Web](@site/static/img/web/navigation_settings_2.png)


## Allegare Traccia {#attaching-track}

Il blocco **Attach to roads** ti permette di utilizzare una traccia GPX esistente come base per la navigazione. OsmAnd Web abbina la traccia alle strade vicine per fornire indicazioni turn-by-turn.

Quando clicchi Seleziona traccia, il browser apre un selettore di file dove puoi scegliere un file .gpx dal tuo computer. Dopo aver selezionato una traccia:
- La traccia viene visualizzata sulla mappa e utilizzata per calcolare il percorso.
- Il riassunto del percorso (distanza e tempo) è mostrato nel pannello Route.
- Il file selezionato appare sotto Traccia selezionata (con il nome del file della traccia).
- Puoi rimuovere la traccia allegata utilizzando il pulsante meno (–) accanto a Traccia selezionata.


## Dettagli del Percorso {#route-details}

![Navigazione Web](@site/static/img/web/navigation_info.png) ![Navigazione Web](@site/static/img/web/navigation_turns.png)

Quando un percorso viene calcolato, il pannello mostra un riassunto di base (distanza, tempo, salita/discesa) e un pulsante **Dettagli**. Utilizza Dettagli per aprire la vista del percorso con due schede: Info e Curve.

Info riassume il percorso e i dati di altitudine:
- **Punti** — il numero di punti di percorso utilizzati per costruire il percorso.
- **Percorso** — distanza e tempo.
- **Salita/Discesa** — ascesa e discesa totali.
- **Altitudine (min/media/max)** — statistiche di altitudine per il percorso.
- **Altitudine (Satellite)** — Ricalcola per ricostruire l'altitudine utilizzando dati satellitari (se disponibili).

Sotto il riassunto, il grafico di altitudine ti aiuta a ispezionare il profilo del percorso. Puoi attivare/disattivare Altitudine e Pendenza e utilizzare il cursore sotto il grafico per concentrarti su una parte specifica del percorso.

Utilizza Curve per la guida turn-by-turn. Il percorso è anche contrassegnato con cerchi arancioni lungo la linea. Clicca su un cerchio per aprire un pop-up con l'istruzione di navigazione corrispondente. Il pop-up può anche includere:
- Evita — evita quel segmento specifico.
- Way ID — un link al way OSM sottostante per quella parte del percorso.

Puoi affinare il percorso direttamente sulla mappa trascinando i marker del percorso in un altro punto. Quando clicchi e trascini un marker su un'altra strada (o in una posizione vicina) e poi lo rilasci:
- OsmAnd Web ricalcola il percorso per passare attraverso la nuova posizione.
- Il marker spostato viene convertito in un nuovo punto intermedio.
- Il nuovo punto intermedio appare nel pannello Route come un punto aggiuntivo inserito sopra la Destinazione e il riassunto del percorso si aggiorna di conseguenza.
- Puoi gestire il punto via aggiunto allo stesso modo degli altri [punti intermedi](#manage-route-points).

![Navigazione Web](@site/static/img/web/navigation_on_map.png)

### Scarica e Salva {#download-and-save}

Utilizza *Download* per esportare il percorso come traccia. La finestra di download offre due opzioni:
Dati traccia completa — include dati completi, incluse le istruzioni di navigazione.
Traccia semplificata — una versione più leggera più adatta per l'uso con altre app.

Puoi salvare il percorso come traccia utilizzando *Salva su Cloud / Carica su OsmAnd Cloud*. Questo apre una finestra di dialogo dove puoi confermare il salvataggio nelle tracce cloud, modificare il Nome, opzionalmente scegliere una Cartella, quindi Salva o Annulla.

### Condividi un Percorso {#share-a-route}

Per condividere il percorso, copia l'URL. Esempio: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)


## Articoli Correlati {#related-articles}

- [Preparazione del Percorso](../navigation/setup/route-navigation.md)
- [Impostazioni di Navigazione](../navigation/guidance/navigation-settings.md)
- [Parametri del Veicolo](../navigation/guidance/vehicle-parameters.md)
- [Pianifica Percorso](../web/planner.md)