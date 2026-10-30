---
source-hash: b9d29f72bcf2d43d5cc26838609d63efd31b5183a4de6ef652bd49117b2c1149
sidebar_position: 7
sidebar_label: Analizzatore percorsi
title: Analizzatore percorsi
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

**Analizzatore percorsi** è uno strumento web che aiuta ad analizzare i segmenti di traccia ripetuti tra punti selezionati sulla mappa. Ad esempio, puoi usarlo per confrontare le tue uscite sulla stessa salita o i tuoi spostamenti quotidiani. Per utilizzare questa funzionalità con i tuoi dati, è necessario un account OsmAnd Pro con tracce sincronizzate su OsmAnd Cloud — altrimenti, le tue tracce non saranno disponibili sul Web Planner. Scansiona le tue tracce e trova tutti i segmenti che passano attraverso la posizione(i) scelta, permettendoti di confrontare velocità, elevazione, distanza e tempo attraverso più attività.

## Come usare {#how-to-use}

1. [Accedi](./web-cloud.md#login) al tuo account OsmAnd Pro sul Portale Mappe Web. Le tue tracce devono essere sincronizzate con [OsmAnd Cloud](./web-cloud.md#cloud-sync).
2. Apri *Menu → Analizzatore percorsi* (l'icona della chiave inglese).
3. Nel pannello **Seleziona tracce**, scegli **Tutte le tracce** oppure solo le cartelle che ti servono.
4. Fai clic destro sulla mappa e seleziona **Punto A**. Per analizzare un segmento tra due punti, imposta anche il **Punto B**.
5. Esamina l'elenco dei segmenti trovati, [ordinalo e scegli quali parametri visualizzare](#sorting-and-visible-parameters).

Con un solo punto, l'analizzatore trova i segmenti di traccia che passano attraverso la posizione selezionata. Con due punti, trova e analizza i segmenti tra Punto A e Punto B.

![Analizzatore percorsi](@site/static/img/web/web_analyzer_select.png) ![Analizzatore percorsi](@site/static/img/web/web_analyzer_points_new.png)


## Ordinamento e parametri visibili {#sorting-and-visible-parameters}
Dopo che l'analizzatore trova i segmenti corrispondenti, i risultati vengono mostrati come un elenco. L'elenco può essere riordinato usando l'opzione **Ordina**, che cambia come i segmenti sono elencati. Inoltre, il pulsante **Campi** apre il pannello Parametri visibili, dove puoi controllare quali parametri di analisi sono mostrati per ciascun segmento. Puoi visualizzare tutti i parametri disponibili o selezionare solo quelli rilevanti per la tua analisi.

I parametri disponibili includono:

- Vel. max., Vel. media e Vel. min.
- Alt. max., Alt. media e Alt. min.
- Salita e Discesa.
- Data.
- Intervallo di tempo, Ora di inizio, Ora di fine, Durata e Tempo in movimento.
- Lunghezza.

![Analizzatore percorsi](@site/static/img/web/web_analyzer_sort.png) ![Analizzatore percorsi](@site/static/img/web/web_analyzer_fields.png)

## Analisi dati {#data-analysis}

Ogni segmento corrispondente è mostrato nell'elenco dei risultati a sinistra. Per ogni segmento, viene visualizzato un set di parametri calcolati, a seconda di quali parametri visibili sono abilitati.

Ogni segmento ha anche un menu a tre punti (⋮) con le seguenti azioni:
- Apri traccia — apre la traccia completa relativa al segmento selezionato.
- Nascondi traccia / Rendi traccia visibile — controlla se la traccia è mostrata sulla mappa.
- Escludi — rimuove il segmento dai risultati dell'analisi corrente.

![Analizzatore percorsi](@site/static/img/web/web_analyzer_menu.png)

### Grafici {#graphs}

Sotto la mappa, l'analizzatore visualizza un grafico che rappresenta i segmenti selezionati. Il grafico rappresenta i dati solo per i segmenti trovati tra i punti selezionati, non per l'intera traccia.

Il grafico supporta il passaggio tra diversi tipi di dati:
- Altitudine.
- Pendenza.
- Velocità.
Solo un tipo di dato è visualizzato alla volta e cambiarlo aggiorna immediatamente il grafico.

Quando sono presenti più segmenti, il grafico mostra i dati per diversi segmenti contemporaneamente. Un selettore sopra il grafico permette di scegliere quanti grafici di segmento visualizzare contemporaneamente e di passare tra loro.

![Analizzatore percorsi](@site/static/img/web/web_analyzer_altitude.png) ![Analizzatore percorsi](@site/static/img/web/web_analyzer_tracks.png)

## Articoli correlati {#related-articles}

- [Tracce](../web/web-tracks.md)
- [Gestisci tracce](../personal/tracks/manage-tracks.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)