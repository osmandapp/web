---
source-hash: 586e89c491ebdc9f9d39017e43dfe0ba1044c71a6eddcfcdc4d71787f3703bae
sidebar_position: 3
title: Astronomia
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
**Astronomia** è attualmente in **beta**.
:::

## Panoramica {#overview}

:::tip Acquisto
Il plugin Astronomia è una [funzionalità a pagamento](../purchases/index.md).  
:::

Il plugin Astronomia visualizza una sovrapposizione del cielo con stelle, costellazioni, il Sole, la Luna e i pianeti direttamente sulla mappa. Utilizza un catalogo celeste offline per calcolare e visualizzare le posizioni attuali e future degli oggetti celesti. Il plugin consente inoltre agli utenti di esplorare il cielo notturno, identificare oggetti e pianificare osservazioni visualizzando i loro percorsi nel cielo.

Il plugin funziona completamente offline utilizzando cataloghi stellari integrati, consentendo l'esplorazione del cielo anche senza connessione internet.

## Parametri di Configurazione Richiesti {#required-setup-parameters}
  
Le seguenti impostazioni sono richieste per visualizzare la sovrapposizione Astronomia:

1. Abilita il plugin [**Astronomia**](../plugins/index.md#enable--disable) dalla sezione *Plugin* del *Menu Principale*
2. Usa **Menu → Mappa stellare** per aprire la schermata dedicata con il cielo stellato, le impostazioni e i controlli del tempo.
3. Seleziona **data e ora** utilizzando i controlli sulla schermata della Mappa stellare.
4. Regola ciò che viene mostrato sulla Mappa stellare utilizzando [**Configura Vista**](#configure-view) — ad esempio, attiva/disattiva oggetti visibili e ausili di rendering.
5. Tocca il pulsante **Chiudi (X)** in alto sulla schermata della Mappa stellare per uscire dalla Mappa stellare e tornare alla mappa terrestre.

Il plugin funziona con entrambi i motori di rendering della mappa, ma offre le migliori prestazioni in modalità OpenGL.

## Schermata Mappa Stellare {#star-map-screen}

**Vai a:** *Plugin abilitato → Menu → Mappa stellare* 

![Schermata mappa stellare](@site/static/img/plugins/starwatcher/view_new_1.png)

La **Schermata Mappa stellare** dedicata mostra una cupola celeste interattiva con stelle, costellazioni, pianeti, percorsi del Sole e della Luna. In fondo alla schermata, puoi accedere ai seguenti controlli: 
- [**Ricerca**](#search) — apre la schermata di Ricerca dove puoi cercare oggetti celesti e sfogliare cataloghi e categorie del cielo. 
- **Data e ora** — ti permette di cambiare data e ora per osservare il cielo in diversi momenti passati o futuri. Questo è utile per pianificare osservazioni, tracciare il movimento degli oggetti o imparare come cambia il cielo nel tempo. Se imposti una data/ora personalizzata, il chip mostra la data e l'ora completa, e accanto appare un pulsante di reset per tornare all'ora di sistema corrente.
- **Filtro di magnitudine** — ti consente di limitare quali stelle vengono visualizzate in base alla loro luminosità. Usa il cursore per impostare il valore massimo di magnitudine. Valori più bassi mostrano solo le stelle più luminose, mentre valori più alti rivelano stelle più deboli e oggetti del cielo profondo. Questo aiuta a ridurre il disordine visivo o a simulare ciò che è visibile a occhio nudo.
- [**Configura Vista**](#configure-view) — apre le impostazioni di visualizzazione che controllano come vengono mostrati oggetti, percorsi e linee di riferimento sulla Mappa stellare.

La schermata rende l'intero emisfero celeste sopra la tua posizione, allineato con la direzione della bussola. La Mappa stellare può essere ruotata manualmente trascinando la schermata. La rotazione manuale della Mappa stellare non influisce sull'orientamento della mappa terrestre. La mappa terrestre segue sempre la [modalità di orientamento della mappa](../map/interact-with-map.md#map-orientation-modes) selezionata nelle tue impostazioni. Tocca gli oggetti celesti per dettagli come magnitudine, orari di levata/tramonto o percorsi.

La Mappa stellare può anche allinearsi con l'orientamento del tuo dispositivo quando la modalità bussola è abilitata. In questa modalità, il cielo ruota in base ai sensori accelerometro e bussola del dispositivo, consentendoti di esplorare il cielo spostando fisicamente il telefono.

## Menu Contestuale {#context-menu}

![Menu Contestuale](@site/static/img/plugins/starwatcher/context_menu_view.png)

Il **Menu Contestuale** fornisce informazioni dettagliate sugli oggetti celesti e strumenti per osservarli. Si apre quando tocchi un oggetto celeste sulla Mappa stellare.

Quando un oggetto è selezionato, viene evidenziato sulla Mappa stellare con un marker circolare rosso. Il suo moto giornaliero è anche visualizzato da un anello orario (00–23), che mostra dove l'oggetto apparirà nel cielo a ogni ora del giorno locale e la direzione del suo movimento.

Il Menu Contestuale appare in fondo alla schermata e contiene informazioni sull'oggetto, azioni rapide e schede per esplorare la visibilità dell'oggetto e l'orario di osservazione.

### Informazioni sull'Oggetto {#object-information}

![Informazioni sull'Oggetto](@site/static/img/plugins/starwatcher/object_view.png)

La sezione superiore del Menu Contestuale visualizza il nome e la classificazione dell'oggetto. Sotto il nome, vengono mostrati il tipo di oggetto e la sua costellazione o gruppo genitore. Ad esempio:  
- **Beta Ursae Minoris** — Stella • Orsa Minore
- **Giove** — Pianeta • Sistema solare
- **Andromeda** — Galassia • Cielo profondo

Blocchi di informazioni rapide visualizzano parametri osservativi chiave:  
- Levata – l'ora in cui l'oggetto sorge sopra l'orizzonte.
- Tramonto – l'ora in cui l'oggetto tramonta sotto l'orizzonte.
- Azimut – la direzione dell'oggetto rispetto al nord (0°–360°).
- Altitudine – l'altezza dell'oggetto sopra l'orizzonte.
- Magnitudine – la luminosità dell'oggetto vista dalla Terra. 

Questi valori si aggiornano dinamicamente in base all'ora selezionata e alla posizione dell'utente.

Sotto i blocchi di informazioni rapide, il menu può includere anche informazioni e risorse aggiuntive sull'oggetto:  
- Leggi su Wikipedia – Apre l'articolo Wikipedia dell'oggetto. Se i dati Wikipedia offline sono disponibili, l'articolo può essere aperto senza connessione internet; altrimenti la pagina si apre nel browser.
- Foto online – Visualizza foto disponibili relative all'oggetto celeste selezionato.

### Azioni {#actions}

Sotto le informazioni sull'oggetto, il Menu Contestuale fornisce diverse azioni per interagire con l'oggetto celeste selezionato:
- **Salva** – Aggiunge l'oggetto alla tua lista dei Preferiti per un accesso rapido.
- **Localizza** – Centra l'oggetto selezionato sulla Mappa stellare.
- **Direzione** – Mostra la direzione verso l'oggetto sulla mappa, aiutandoti a orientarti durante l'osservazione del cielo.
- **Percorso** – Visualizza la traiettoria giornaliera dell'oggetto nel cielo, consentendoti di vedere come si muove durante il giorno.

### Grafico di Visibilità {#actions}

![Grafico di Visibilità](@site/static/img/plugins/starwatcher/visibility.png)

La scheda **Visibilità** mostra come l'oggetto selezionato si muove nel cielo durante un periodo di 24 ore.

Il grafico visualizza l'altitudine dell'oggetto sopra l'orizzonte nel tempo.

- L'asse orizzontale rappresenta il tempo dalle 12:00 alle 12:00 del giorno successivo.
- L'asse verticale rappresenta l'altitudine da −30° a +90°.

La curva colorata mostra l'altitudine dell'oggetto durante il giorno.

Lo sfondo del grafico rappresenta lo stato del cielo e cambia in base alla posizione del Sole. Questo aiuta a identificare quando le osservazioni sono possibili.

I colori rappresentano diverse condizioni del cielo:  
- azzurro chiaro — diurno
- azzurro più scuro — crepuscolo
- azzurro scuro / nero — notturno

Il colore della traiettoria dell'oggetto riflette anche la sua altitudine:  
- giallo – alto nel cielo (migliore visibilità)
- arancione – altitudine media
- rosso – vicino all'orizzonte
- viola – sotto l'orizzonte (non visibile)

Un indicatore mobile ti permette di esplorare la posizione dell'oggetto in diversi momenti. Quando l'indicatore viene spostato, i valori di ora corrente, altitudine e azimut vengono aggiornati.

Sotto il grafico, vengono visualizzati eventi di osservazione importanti: 
- **Levata** – quando l'oggetto sorge sopra l'orizzonte.
- **Culminazione** – quando l'oggetto raggiunge la sua altitudine massima.
- **Tramonto** – quando l'oggetto tramonta sotto l'orizzonte.

Il grafico si apre con l'indicatore posizionato all'ora di sistema corrente. La posizione utilizzata per i calcoli è mostrata sotto il grafico.

### Orario di Osservazione {#actions}

![Orario di Osservazione](@site/static/img/plugins/starwatcher/schedule.png)

La scheda **Orario** visualizza la visibilità dell'oggetto selezionato per la settimana corrente. Ogni riga rappresenta un giorno e include:  
- il giorno della settimana
- la data
- ora di levata
- ora di tramonto
- un piccolo grafico di visibilità per quel giorno

Il mini grafico mostra quando l'oggetto è visibile durante il giorno e come cambia la sua altitudine. La sezione colorata della barra rappresenta il periodo in cui l'oggetto è sopra l'orizzonte.

Puoi navigare tra le settimane utilizzando i pulsanti freccia nell'intestazione dell'Orario. Il pulsante calendario ti permette di tornare alla settimana corrente.

<!--
## Celestial Object Info {#celestial-object-info}

![Object info popup](@site/static/img/plugins/starwatcher/object-info_new.png)

Tap any **star, planet, constellation, or Sun/Moon** on the **Star map screen** or **map overlay** to view detailed information. Selected object  is highlighted on the Star map by a red circle marker, and its daily motion is visualized by an hour ring (00–23) showing where the object will be at each hour local time and the direction of movement.

**Displayed data:**
- **Azimuth**: Direction from North (0°-360°) where the object appears in the sky
- **Altitude**: Height above horizon (0° at horizon, 90° at zenith)
- **Magnitude**: Brightness scale (-26 for Sun to +6 for faint stars; lower = brighter)
- **Rise/Set times**: When the object rises above/sets below horizon
- **Distance** (planets): Average distance from Earth in AU/km

**Wikipedia integration**: Tap **"Wikipedia"** in the info popup to open the object's page in your browser (e.g. Sirius, Orion, Venus). Works offline for cached data, online for full articles.

**Long-press** celestial objects to **pin** them as map markers with live position updates, or **share** coordinates for group stargazing.

This feature helps identify objects in real sky, plan observations, and learn astronomy facts directly from OsmAnd.
-->

## Ricerca Stelle AR (Modalità Fotocamera) {#ar-star-finding}

**Vai a:** *Plugin abilitato → Menu → Mappa stellare → Pulsante Fotocamera* 

Il livello **Astronomia** funziona con la **fotocamera del tuo dispositivo** per abilitare la **Realtà Aumentata (AR) per l'osservazione delle stelle**. Punta la fotocamera del telefono verso il cielo notturno reale e vedi stelle, pianeti, costellazioni, Sole/Luna sovrapposti in tempo reale.

**Come funziona la Ricerca Stelle AR:**
- **Vista fotocamera live** mostra il cielo reale con sovrapposizioni astronomiche trasparenti allineate all'orizzonte/bussola.
- **Muovi la fotocamera** per scansionare il cielo — gli oggetti si evidenziano quando appaiono nel tuo campo visivo.
- **Tocca gli oggetti evidenziati** per vedere azimut, altitudine, magnitudine, orari di levata/tramonto e link Wikipedia.
- **Calibrazione bussola** richiesta per un allineamento accurato (agita il telefono in figura-8 se necessario).

La modalità AR utilizza i sensori del dispositivo (giroscopio, accelerometro e bussola) per allineare gli oggetti celesti con il cielo reale.

**Perfetto per:**
- Identificare stelle/pianeti deboli invisibili a occhio nudo.
- Localizzare costellazioni spostando il telefono nel cielo.
- Navigazione celeste in tempo reale durante escursioni o campeggio.

## Configura Vista {#configure-view}

![Configura Vista](@site/static/img/plugins/starwatcher/half_state_new.png) ![Configura Vista](@site/static/img/plugins/starwatcher/full_state.png)

**Configura Vista** ti permette di controllare come viene visualizzata la Mappa stellare abilitando o disabilitando modalità visive, oggetti e ausili di rendering.

Per aprire Configura Vista, tocca il pulsante Configura Vista nell'angolo inferiore destro della schermata Mappa stellare. Il pulsante è rappresentato da un'icona a strati (forme sovrapposte), che indica impostazioni di visualizzazione e livelli. Configura Vista si apre in uno *stato Parziale*, mostrando le opzioni di visualizzazione principali. Scorri il pannello verso l'alto per espanderlo in *stato Completo* e accedere a tutte le impostazioni disponibili. Per chiudere Configura Vista, scorri il pannello verso il basso una volta per tornare allo stato Parziale, scorri verso il basso di nuovo per chiuderlo completamente, o tocca ovunque sulla mappa fuori dal pannello. Puoi anche toccare il pulsante Chiudi (X) nell'angolo superiore destro del pannello.

### Modalità e Azioni {#modes-and-actions}

![Configura Vista](@site/static/img/plugins/starwatcher/view_with_map_new.png) ![Configura Vista](@site/static/img/plugins/starwatcher/red_filter_new.png)

Questa sezione controlla le modalità di visualizzazione principali della Mappa stellare.

- **2D / 3D**. Passa tra una vista del percorso celeste (2D), che mostra il cielo come una cupola proiettata con percorsi degli oggetti, e una vista del cielo a stile globo (3D) che rappresenta la sfera celeste.
- **Mappa**. Abilita una vista aggiuntiva della mappa terrestre visualizzata sotto la Mappa stellare, consentendoti di correlare gli oggetti celesti ai tuoi dintorni geografici reali.
- **Filtro rosso**. Applica un filtro di colore rosso all'intera schermata per ridurre l'inquinamento luminoso e preservare la visione notturna durante osservazioni in cieli scuri.

### Oggetti Visibili {#visible-objects}

![Configura Vista](@site/static/img/plugins/starwatcher/solar_system.png) ![Configura Vista](@site/static/img/plugins/starwatcher/constellations.png)

Questa sezione ti permette di scegliere quali tipi di oggetti celesti vengono mostrati sulla Mappa stellare.

| Oggetto | Descrizione |
|---------|-------------|
| Sistema solare | Visualizza il Sole, la Luna e i pianeti visibili. |
| Costellazioni | Mostra linee e pattern delle costellazioni formati da stelle. |
| Stelle | Visualizza stelle individuali visibili sulla Mappa stellare. |
| Nebulose | Mostra oggetti nebulari dove disponibili. |
| Ammassi stellari | Visualizza ammassi stellari come oggetti celesti separati. |
| Cielo profondo | Attiva/disattiva oggetti del cielo profondo come galassie, ammassi di galassie e buchi neri. |

### Opzioni di Visualizzazione Personali {#personal-display-options}

Le **opzioni di visualizzazione personali** controllano ausili visivi aggiuntivi relativi al focus dell'utente e all'osservazione.

| Opzione | Descrizione |
|---------|-------------|
| Direzione | Mostra un indicatore direzionale per aiutare a orientare la tua vista. |
| Percorso giornaliero | Visualizza il percorso giornaliero degli oggetti celesti selezionati nel cielo. |
| Preferiti | Evidenzia o visualizza oggetti contrassegnati come preferiti. |

### Ausili di Rendering {#rendering-aids}

Gli **ausili di rendering** aggiungono linee di riferimento e griglie per aiutare a orientare la Mappa stellare.

| Ausilio | Descrizione |
|---------|-------------|
| Griglia azimutale | Aggiunge una griglia basata sull'azimut per l'orientamento orizzontale del cielo. |
| Linea del meridiano | Visualizza la linea del meridiano che attraversa il cielo da nord a sud. |
| Griglia equatoriale | Mostra la griglia di coordinate equatoriali celesti. |
| Linea dell'eclittica | Visualizza la linea dell'eclittica che rappresenta il percorso apparente del Sole. |
| Linea dell'equatore | Visualizza la proiezione equatoriale della Terra sulla sfera celeste, aiutando a visualizzare la rotazione della Terra rispetto al cielo. |
| Linea galattica | Mostra il piano della galassia Via Lattea nel cielo, indicando la direzione principale del disco galattico. |

<!-- 
## Astronomy Settings

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

## Ricerca {#search}

![Ricerca](@site/static/img/plugins/starwatcher/explore_screen.png)

La funzionalità **Ricerca** nel plugin Astronomia ti permette di trovare oggetti celesti, esplorare categorie del cielo e accedere a dati di osservazione. Per aprire la Ricerca, tocca il pulsante Ricerca sulla Mappa stellare. Questo apre la schermata di Ricerca, che fornisce diverse sezioni per scoprire e organizzare oggetti celesti. La schermata di ricerca include le seguenti sezioni:

**1. Osserva ora**

La sezione Osserva ora evidenzia oggetti celesti che sono visibili in questo momento o stasera. Questa sezione funge da strumento di raccomandazione, mostrando oggetti più adatti per l'osservazione in base alla tua posizione e ora corrente.

**2. Categorie**

La sezione Categorie ti permette di sfogliare oggetti per tipo: Sistema solare, Costellazioni, Stelle, Nebulose, Ammassi stellari e Cielo profondo. Ogni categoria apre un elenco di oggetti con informazioni chiave: nome oggetto, tipo o costellazione, magnitudine (luminosità) e ora di levata o tramonto (se applicabile).

### Ordinamento e Filtri {#sorting-and-filters}

![Ordinamento](@site/static/img/plugins/starwatcher/sorting.png) ![Filtri](@site/static/img/plugins/starwatcher/filters.png)

Tocca la barra di ricerca per aprire l'interfaccia di ricerca completa. Puoi affinare i risultati utilizzando opzioni di ordinamento e filtraggio.

Puoi ordinare gli oggetti per:  
- Nome (A–Z o Z–A)
- Più luminosi prima
- Più deboli prima
- Leva prima
- Tramonta prima

I filtri aiutano a restringere gli oggetti visibili.

**Visibilità**  
- Mostra tutto — visualizza tutti gli oggetti
- Visibile ora — oggetti attualmente sopra l'orizzonte
- Visibile stasera — oggetti visibili tra il tramonto e l'alba

**Filtri aggiuntivi**  
- Visibile a occhio nudo — mostra solo oggetti con magnitudine ≤ 6

**Categorie**  
Puoi filtrare i risultati per tipo di oggetto. Selezionando categorie specifiche disabilita automaticamente l'opzione Tutto.

### I Miei Dati {#my-data}

![I Miei Dati](@site/static/img/plugins/starwatcher/my_data.png)

La sezione I Miei Dati contiene oggetti con cui l'utente ha interagito. Questa sezione include tre elenchi:

- Preferiti — oggetti salvati dal menu contestuale.
- Percorso Giornaliero — oggetti per cui il percorso di moto giornaliero è abilitato.
- Direzioni — oggetti con un indicatore di direzione attivo sulla Mappa stellare.

Selezionando un elemento si apre il menu contestuale dell'oggetto.

### Cataloghi {#catalogs}

![Cataloghi](@site/static/img/plugins/starwatcher/catalogs.png)

La sezione Cataloghi fornisce accesso ai cataloghi astronomici disponibili nel plugin Astronomia.

I cataloghi contengono grandi collezioni di oggetti celesti come stelle, galassie, nebulose e ammassi stellari. Aprendo un catalogo viene visualizzato un elenco di oggetti inclusi in quel catalogo.

## Articoli Correlati {#related-articles}

- [Interagisci con la Mappa](../../user/map/interact-with-map.md)
- [Impostazioni Globali](../../user/personal/global-settings.md)
- [Mappe Vettoriali](../../user/map/vector-maps.md)

