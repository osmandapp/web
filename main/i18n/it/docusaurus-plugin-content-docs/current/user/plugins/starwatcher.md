---
source-hash: 58426179267520e49fd40594a65a229ede4b84aecbc82387219ff0e5c619428f
sidebar_position: 14
title:  Star Watcher
unlistead: true
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

<InfoIncompleteArticle/>

<InfoAndroidOnly/>

:::info
**Star Watcher** è attualmente in **beta**.
:::

## Panoramica {#overview}

Il plugin Star Watcher mostra la sovrapposizione del cielo stellato sulla mappa con stelle, costellazioni, Sole, Luna e pianeti. Le posizione e i percorsi del Sole, Luna, pianeti e stelle principali sono mostrati sulla mappa.


## Parametri di Configurazione Richiesti {#required-setup-parameters}
  
Le seguenti impostazioni sono richieste per visualizzare la sovrapposizione Star Watcher:

1. Abilita il plugin [**Star Watcher**](../plugins/index.md#enable--disable) dalla sezione *Plugin* del *Menu Principale*
2. Usa **Menu → Mappa stellare** per aprire lo schermo dedicato con cielo stellato, impostazioni e controlli del tempo.
3. Seleziona **data e ora** usando i controlli sullo schermo Mappa stellare.
4. Regola ciò che viene mostrato sulla Mappa stellare usando [**Configura Vista**](#configure-view) — ad esempio, attiva/disattiva oggetti visibili e ausili di rendering.
5. Tocca il pulsante **Chiudi (X)** in alto sullo schermo Mappa stellare per uscire dalla mappa stellare e tornare alla mappa terrestre.

Il plugin funziona con entrambi i motori di rendering della mappa ma performa al meglio in modalità OpenGL.

## Schermo Mappa Stellare {#star-map-screen}

**Vai a:** *Plugin abilitato → Menu → Mappa stellare* 

![Schermo mappa stellare](@site/static/img/plugins/starwatcher/view_new.png)

Lo schermo dedicato **Mappa stellare** mostra una cupola celeste interattiva con stelle, costellazioni, percorsi di pianeti, Sole e Luna. In basso sullo schermo, puoi accedere ai seguenti controlli: 
- **Ricerca** — apre un pannello di ricerca con un campo di input in cui puoi digitare il nome di un oggetto. Sotto il campo, c'è un elenco di oggetti suggeriti in ordine alfabetico. Puoi passare l'ordinamento tra A–Z e Z–A. 
- **Data e ora** — ti permette di cambiare data e ora per osservare il cielo in diversi momenti nel passato o nel futuro. Questo è utile per pianificare osservazioni, tracciare il movimento degli oggetti o imparare come cambia il cielo nel tempo. Se imposti una data/ora personalizzata, il chip mostra la data e l'ora complete, e accanto appare un pulsante di reset per tornare all'ora di sistema corrente.
- [**Configura Vista**](#configure-view).

Lo schermo rende l'intero emisfero celeste sopra la tua posizione, allineato con la direzione della bussola. La Mappa stellare può essere ruotata manualmente. La rotazione manuale della Mappa stellare non influisce sull'orientamento della mappa terrestre. La mappa terrestre segue sempre la [modalità di orientamento mappa](../map/interact-with-map.md#map-orientation-modes) selezionata nelle tue impostazioni. Tocca oggetti celesti per dettagli come magnitudine, tempi di alba/tramonto o percorsi.


## Informazioni Oggetto Celeste {#celestial-object-info}

![Popup info oggetto](@site/static/img/plugins/starwatcher/object-info_new.png)

Tocca qualsiasi **stella, pianeta, costellazione, o Sole/Luna** sullo **schermo Mappa stellare** o **sovrapposizione mappa** per visualizzare informazioni dettagliate. L'oggetto selezionato è evidenziato sulla Mappa stellare da un marker circolare rosso, e il suo moto giornaliero è visualizzato da un anello orario (00–23) che mostra dove si troverà l'oggetto a ogni ora locale e la direzione del movimento.

**Dati visualizzati:**
- **Azimut**: Direzione dal Nord (0°-360°) dove l'oggetto appare nel cielo
- **Altitudine**: Altezza sopra l'orizzonte (0° all'orizzonte, 90° allo zenit)
- **Magnitudine**: Scala di luminosità (-26 per il Sole a +6 per stelle deboli; più basso = più luminoso)
- **Tempi di alba/tramonto**: Quando l'oggetto sorge sopra/scende sotto l'orizzonte
- **Distanza** (pianeti): Distanza media dalla Terra in UA/km

**Integrazione Wikipedia**: Tocca **"Wikipedia"** nel popup info per aprire la pagina dell'oggetto nel tuo browser (es. Sirius, Orione, Venere). Funziona offline per dati cachati, online per articoli completi.

**Pressione prolungata** sugli oggetti celesti per **fissarli** come marker sulla mappa con aggiornamenti posizione live, o **condividere** coordinate per osservazione stellare di gruppo.

Questa funzione aiuta a identificare oggetti nel cielo reale, pianificare osservazioni e imparare fatti di astronomia direttamente da OsmAnd.


## Ricerca Stelle AR (Modalità Fotocamera) {#ar-star-finding}

**Vai a:** *Plugin abilitato → Menu → Mappa stellare → Pulsante fotocamera* 

Il layer **Star Watcher** lavora con la **fotocamera del dispositivo** per abilitare **osservazione stelle in Realtà Aumentata (AR)**. Punta la fotocamera del telefono al cielo notturno reale e vedi stelle, pianeti, costellazioni, Sole/Luna sovrapposti in tempo reale.

**Come funziona la Ricerca Stelle AR:**
- Vista **fotocamera live** mostra cielo reale con sovrapposizioni astronomiche trasparenti allineate a orizzonte/bussola
- **Muovi la fotocamera** per scansionare il cielo — oggetti evidenziati quando appaiono nel tuo campo visivo
- **Tocca oggetti evidenziati** per vedere azimut, altitudine, magnitudine, tempi alba/tramonto e link Wikipedia
- **Calibrazione bussola** richiesta per allineamento accurato (agita il telefono in figura-8 se necessario)

**Perfetto per:**
- Identificare stelle/pianeti deboli invisibili a occhio nudo
- Localizzare costellazioni muovendo il telefono attraverso il cielo
- Navigazione cielo in tempo reale durante escursioni o campeggio


## Configura Vista {#configure-view}

![Configura Vista](@site/static/img/plugins/starwatcher/half_state.png) ![Configura Vista](@site/static/img/plugins/starwatcher/full_state.png)

**Configura Vista** ti permette di controllare come viene visualizzata la Mappa stellare attivando o disattivando modalità visive, oggetti e ausili di rendering.

Per aprire Configura Vista, tocca il pulsante Configura Vista nell'angolo inferiore destro dello schermo Mappa stellare. Il pulsante è rappresentato da un'icona a stile layer (forme sovrapposte), che indica impostazioni di visualizzazione e layer. Configura Vista si apre in uno *stato Parziale*, mostrando le opzioni di visualizzazione principali. Scorri il pannello verso l'alto per espanderlo in *stato Pieno* e accedere a tutte le impostazioni disponibili. Per chiudere Configura Vista, scorri il pannello verso il basso una volta per tornare allo stato Parziale, scorri verso il basso di nuovo per chiuderlo completamente, o tocca il pulsante Chiudi (X) nell'angolo superiore destro del pannello.

### Modalità e Azioni {#modes-and-actions}

![Configura Vista](@site/static/img/plugins/starwatcher/view_with_map.png) ![Configura Vista](@site/static/img/plugins/starwatcher/red_filter.png)

Questa sezione controlla le modalità di visualizzazione principali della Mappa stellare.

- **2D / 3D**. Passa la Mappa stellare tra una vista piatta (2D) e una vista simile a una globo (3D).
- **Mappa**. Abilita una vista mappa terrestre aggiuntiva visualizzata sotto la Mappa stellare, aiutandoti a correlare oggetti celesti alla tua posizione geografica.
- **Filtro rosso**. Applica un filtro di colore rosso all'intero schermo per ridurre l'inquinamento luminoso e preservare la visione notturna durante osservazioni in cieli scuri.

### Oggetti Visibili {#visible-objects}

![Configura Vista](@site/static/img/plugins/starwatcher/solar_system.png) ![Configura Vista](@site/static/img/plugins/starwatcher/constellations.png)

Questa sezione ti permette di scegliere quali tipi di oggetti celesti vengono mostrati sulla Mappa stellare.

| Oggetto | Descrizione |
|---------|-------------|
| Sistema solare | Visualizza il Sole, la Luna e i pianeti visibili. |
| Costellazioni | Mostra linee e pattern di costellazioni formati da stelle. |
| Stelle | Visualizza stelle individuali visibili sulla Mappa stellare. |
| Nebulose | Mostra oggetti nebulari dove disponibili. |
| Ammassi stellari | Visualizza ammassi stellari come oggetti celesti separati. |
| Cielo profondo | Attiva oggetti del cielo profondo come galassie, ammassi di galassie e buchi neri. |

### Opzioni di Visualizzazione Personali {#personal-display-options}

Le **opzioni di visualizzazione personali** controllano ausili visivi aggiuntivi relativi al focus dell'utente e all'osservazione.

| Opzione | Descrizione |
|---------|-------------|
| Direzione | Mostra un indicatore direzionale per aiutare a orientare la tua vista. |
| Percorso giornaliero | Visualizza il percorso giornaliero degli oggetti celesti selezionati attraverso il cielo. |
| Preferiti | Evidenzia o visualizza oggetti contrassegnati come preferiti. |

### Ausili di Rendering {#rendering-aids}

Gli **ausili di rendering** aggiungono linee di riferimento e griglie per aiutare a orientare la Mappa stellare.

| Ausilio | Descrizione |
|---------|-------------|
| Griglia azimutale | Aggiunge una griglia basata sull'azimut per l'orientamento orizzontale del cielo. |
| Linea meridiana | Visualizza la linea meridiana che attraversa il cielo da nord a sud. |
| Griglia equatoriale | Mostra la griglia di coordinate equatoriali celesti. |
| Linea eclittica | Visualizza la linea eclittica che rappresenta il percorso apparente del Sole. |
| Equatore galattico | Mostra il piano equatoriale della galassia Via Lattea. |


<!-- 
## Star Watcher Settings

*Main Menu → Plugins → Star map → ⚙️ button*

Choose visible layers and objects

### Star Layers

All astronomical data appears as map overlays, visible at zoom scales 5-15. Layers project the celestial sphere onto the flat map.

| Layer | Description |
|-------|-------------|
| Stars | Bright stars (up to magnitude 4-6) with labels and constellation lines |
| Constellations | Connects stars into familiar patterns like Orion or Big Dipper |
| Planets | Positions and daily paths for Mercury-Venus-Mars-Jupiter-Saturn (colored icons) |
| Sun & Moon | Arcs showing rise/set times and illumination phase |
| Horizon | Line separating visible sky from ground, with cardinal directions |

-->


## Articoli Correlati {#related-articles}

- [Interagire con la Mappa](../../user/map/interact-with-map.md)
- [Impostazioni Globali](../../user/personal/global-settings.md)
- [Mappe Vettoriali](../../user/map/vector-maps.md)