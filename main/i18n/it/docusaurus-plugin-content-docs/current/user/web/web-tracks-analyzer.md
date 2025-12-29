---
source-hash: fe9500be3570d2dbf08995ee5614eb89cd647a44f0360730e48015dced34c738
sidebar_position: 7
sidebar_label: Tracks Analyzer
title: Tracks Analyzer
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

**Tracks Analyzer** è uno strumento web che aiuta ad analizzare i segmenti di traccia ripetuti tra punti selezionati sulla mappa. Scansiona le tue tracce e trova tutti i segmenti che passano attraverso la posizione(i) scelta, permettendoti di confrontare velocità, elevazione, distanza e tempo attraverso più attività.

## Come usare {#how-to-use}

Dopo aver aperto il Tracks Analyzer (mostrato come una chiave inglese), lo strumento si apre con una vista mappa e uno stato vuoto. Da qui, puoi scegliere quali tracce verranno incluse nell'analisi usando il pannello **Seleziona tracce**. L'analizzatore permette di lavorare con tutte le tracce disponibili o di limitare l'analisi a cartelle specifiche.

Per iniziare l'analisi, imposta uno o due punti direttamente sulla mappa. Fai clic destro sulla posizione desiderata e seleziona **Punto A / Punto B** dal menu contestuale. L'analizzatore quindi cerca segmenti di traccia che passano attraverso il punto selezionato o tra i due punti.

![Analizzatore di tracce](@site/static/img/web/web_analyzer_select.png) ![Analizzatore di tracce](@site/static/img/web/web_analyzer_points.png)


## Ordinamento e parametri visibili {#sorting-and-visible-parameters}
Dopo che l'analizzatore trova i segmenti corrispondenti, i risultati vengono mostrati come un elenco. L'elenco può essere riordinato usando l'opzione **Ordina**, che cambia come i segmenti sono elencati. Inoltre, il pulsante **Campi** apre il pannello Parametri visibili, dove puoi controllare quali parametri di analisi sono mostrati per ciascun segmento. Puoi visualizzare tutti i parametri disponibili o selezionare solo quelli rilevanti per la tua analisi.

I parametri disponibili sono raggruppati per tipo:

**Velocità**
- Vel. max.
- Vel. media
- Vel. min.

**Altitudine**
- Alt. max.
- Alt. media
- Alt. min.

**Salita / Discesa**

**Data e ora**
- Data
- Ora di inizio
- Ora di fine
- Intervallo di tempo
- Durata
- Tempo in movimento

**Lunghezza**

![Analizzatore di tracce](@site/static/img/web/web_analyzer_sort.png) ![Analizzatore di tracce](@site/static/img/web/web_analyzer_fields.png)

## Analisi dati {#data-analysis}

Ogni segmento corrispondente è mostrato nell'elenco dei risultati a sinistra. Per ogni segmento, viene visualizzato un set di parametri calcolati, a seconda di quali parametri visibili sono abilitati.

Ogni segmento ha anche un menu a tre punti (⋮) con le seguenti azioni:
- Apri traccia — apre la traccia completa relativa al segmento selezionato.
- Nascondi traccia / Rendi traccia visibile — controlla se la traccia è mostrata sulla mappa.
- Escludi — rimuove il segmento dai risultati dell'analisi corrente.

![Analizzatore di tracce](@site/static/img/web/web_analyzer_menu.png)

### Grafici {#graphs}

Sotto la mappa, l'analizzatore visualizza un grafico che rappresenta i segmenti selezionati. Il grafico rappresenta i dati solo per i segmenti trovati tra i punti selezionati, non per l'intera traccia.

Il grafico supporta il passaggio tra diversi tipi di dati:
- Altitudine.
- Pendenza.
- Velocità.
Solo un tipo di dato è visualizzato alla volta e cambiarlo aggiorna immediatamente il grafico.

Quando sono presenti più segmenti, il grafico mostra i dati per diversi segmenti contemporaneamente. Un selettore sopra il grafico permette di scegliere quanti grafici di segmento visualizzare contemporaneamente e di passare tra loro.

![Analizzatore di tracce](@site/static/img/web/web_analyzer_altitude.png) ![Analizzatore di tracce](@site/static/img/web/web_analyzer_tracks.png)

## Articoli correlati {#related-articles}

- [Tracce](../web/web-tracks.md)
- [Gestisci tracce](../personal/tracks/manage-tracks.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)