---
source-hash: 97e9a342bf78770a793c6914a8b243b2d5b515ca46e61160b3da4e3e167ed8cb
sidebar_position: 3
title: Astronomy
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

<InfoAndroidOnly/>

:::info
**Astronomy** è attualmente in **beta**.
:::

## Panoramica {#overview}

:::tip Acquisto
Il plugin Astronomy è una [funzione a pagamento](../purchases/index.md).  
:::

Il plugin Astronomy visualizza un overlay del cielo con stelle, costellazioni, il Sole, la Luna e i pianeti direttamente sulla mappa. Utilizza un catalogo celeste offline per calcolare e mostrare le posizioni attuali e future degli oggetti celesti. Il plugin consente inoltre agli utenti di esplorare il cielo notturno, identificare gli oggetti e pianificare le osservazioni visualizzandone i percorsi nel cielo.

Il plugin funziona completamente offline utilizzando i cataloghi stellari integrati, consentendo l'esplorazione del cielo anche senza connessione Internet.


## Parametri di configurazione richiesti {#required-setup-parameters}
  
Le seguenti impostazioni sono necessarie per visualizzare l'overlay di Astronomy:

1. Abilita il plugin [**Astronomy**](../plugins/index.md#enable--disable) dalla sezione *Plugin* del *Menu principale*
2. Usa **Menu → Mappa stellare** per aprire la schermata dedicata con il cielo stellato, le impostazioni e i controlli temporali.
3. Seleziona **ora e data** utilizzando i controlli nella schermata Mappa stellare.
4. Regola ciò che viene mostrato sulla Mappa stellare usando [**Configura vista**](#configure-view) — ad esempio, attiva/disattiva gli oggetti visibili e gli ausili di rendering.
5. Tocca il pulsante **Chiudi (X)** in alto nella schermata Mappa stellare per uscire dalla Mappa stellare e tornare alla mappa terrestre.

Il plugin funziona con entrambi i motori di rendering della mappa, ma offre le migliori prestazioni in modalità OpenGL.

## Schermata Mappa stellare {#star-map-screen}

**Vai a:** *Plugin abilitato → <Translate android="true" ids="shared_string_menu,star_map"/>* 

![Schermata mappa stellare](@site/static/img/plugins/starwatcher/view_new_1.png)

La **schermata Mappa stellare** dedicata mostra una cupola celeste interattiva con stelle, costellazioni, pianeti, percorsi del Sole e della Luna. Nella parte inferiore della schermata è possibile accedere ai seguenti controlli: 
- [**Cerca**](#search) — apre la schermata di ricerca in cui è possibile cercare oggetti celesti e sfogliare cataloghi e categorie del cielo. 
- **Ora e data** — consente di modificare la data e l'ora per osservare il cielo in diversi momenti del passato o del futuro. Utile per pianificare osservazioni, tracciare il movimento degli oggetti o imparare come cambia il cielo nel tempo. Se si imposta una data/ora personalizzata, il chip mostra la data e l'ora complete e appare un pulsante di ripristino accanto per tornare all'ora di sistema corrente.
- **<Translate android="true" ids="magnitude_filter"/>** — consente di limitare le stelle visualizzate in base alla loro luminosità. Usa il cursore per impostare il valore massimo della magnitudine. Valori inferiori mostrano solo le stelle più luminose, mentre valori superiori rivelano stelle più deboli e oggetti del cielo profondo. Questo aiuta a ridurre l'affollamento visivo o a simulare ciò che è visibile a occhio nudo.
- [**<Translate android="true" ids="astro_configure_view"/>**](#configure-view) — apre le impostazioni di visualizzazione che controllano come vengono mostrati sulla Mappa stellare oggetti, percorsi e linee di riferimento.

La schermata visualizza l'intero emisfero celeste sopra la tua posizione, allineato con la direzione della bussola. La Mappa stellare può essere ruotata manualmente trascinando la schermata. La rotazione manuale della Mappa stellare non influisce sull'orientamento della mappa terrestre. La mappa terrestre segue sempre la [modalità di orientamento della mappa](../map/interact-with-map.md#map-orientation-modes) selezionata nelle impostazioni. Tocca gli oggetti celesti per dettagli come magnitudine, orari di alba/tramonto o percorsi.

La Mappa stellare può anche allinearsi con l'orientamento del dispositivo quando la modalità bussola è abilitata. In questa modalità, il cielo ruota in base ai sensori di accelerometro e bussola del dispositivo, consentendo di esplorare il cielo muovendo fisicamente il telefono.


## Menu contestuale {#context-menu}

![Menu contestuale](@site/static/img/plugins/starwatcher/context_menu_view.png)

Il **Menu contestuale** fornisce informazioni dettagliate sugli oggetti celesti e strumenti per osservarli. Si apre toccando un oggetto celeste sulla Mappa stellare.

Quando viene selezionato un oggetto, questo viene evidenziato sulla Mappa stellare con un marcatore a cerchio rosso. Il suo movimento giornaliero viene anche visualizzato da un anello orario (00–23), che mostra dove l'oggetto apparirà nel cielo a ogni ora del giorno locale e la direzione del suo movimento.

Il Menu contestuale appare nella parte inferiore della schermata e contiene le informazioni sull'oggetto, le azioni rapide e le schede per esplorare la visibilità dell'oggetto e il programma di osservazione.

### Informazioni sull'oggetto {#object-information}

![Informazioni sull'oggetto](@site/static/img/plugins/starwatcher/object_view_new.png) ![Informazioni sull'oggetto](@site/static/img/plugins/starwatcher/object_view_2.png)

La sezione superiore del Menu contestuale mostra il nome e la classificazione dell'oggetto. Sotto il nome vengono indicati il tipo di oggetto e la sua costellazione o gruppo di appartenenza. Ad esempio:
- **Beta Ursae Minoris** — Stella • Orsa Minore
- **<Translate android="true" ids="astro_name_moon"/>** — Satellite • Terra
- **<Translate android="true" ids="astro_name_jupiter"/>** — Pianeta • Sistema solare

I blocchi di informazioni rapide mostrano i parametri osservativi chiave:  
- <Translate android="true" ids="astro_rise"/> – l'ora in cui l'oggetto sorge sopra l'orizzonte.
- <Translate android="true" ids="astro_set"/> – l'ora in cui l'oggetto tramonta sotto l'orizzonte.
- <Translate android="true" ids="shared_string_azimuth"/> – la direzione dell'oggetto rispetto al nord (0°–360°).
- <Translate android="true" ids="altitude"/> – l'altezza dell'oggetto sopra l'orizzonte.
- <Translate android="true" ids="shared_string_magnitude"/> – la luminosità dell'oggetto vista dalla Terra. 

Questi valori si aggiornano dinamicamente in base all'ora selezionata e alla posizione dell'utente.

Sotto i blocchi di informazioni rapide, il menu può includere anche informazioni e risorse aggiuntive sull'oggetto:
- <Translate android="true" ids="astro_offline_knowledge_base_title"/> – Consente di scaricare un database esteso con articoli di Wikipedia e cataloghi del cielo profondo per uso offline. Dopo il download, le informazioni dettagliate sugli oggetti celesti possono essere visualizzate direttamente nell'app senza connessione Internet.
- <Translate android="true" ids="read_on_wiki"/> – Apre l'articolo di Wikipedia dell'oggetto nel browser.
- <Translate android="true" ids="astro_designations"/> – Mostra nomi alternativi e identificatori di catalogo per l'oggetto (ad esempio, HD, HIP, NGC). Questa sezione è disponibile per gli oggetti che hanno voci di catalogo, come stelle e oggetti del cielo profondo. Se l'oggetto non ha un nome comune, viene utilizzata come nome principale una di queste designazioni.
- <Translate android="true" ids="online_photos"/> – Visualizza le foto disponibili relative all'oggetto celeste selezionato.

### Azioni {#actions}

Sotto le informazioni sull'oggetto, il Menu contestuale fornisce diverse azioni per interagire con l'oggetto celeste selezionato:
- **<Translate android="true" ids="shared_string_save"/>** – Aggiunge l'oggetto all'elenco dei Preferiti per un accesso rapido.
- **<Translate android="true" ids="astro_locate"/>** – Centra l'oggetto selezionato sulla Mappa stellare.
- **<Translate android="true" ids="astro_direction"/>** – Mostra la direzione verso l'oggetto sulla mappa, aiutando a orientarsi durante l'osservazione del cielo.
- **<Translate android="true" ids="astro_path"/>** – Visualizza la traiettoria giornaliera dell'oggetto nel cielo, permettendo di vedere come si muove durante il giorno.

### Grafico di visibilità {#visibility-graph}

![Grafico di visibilità](@site/static/img/plugins/starwatcher/visibility_new.png)

La scheda **Visibilità** mostra come l'oggetto selezionato si muove nel cielo durante un periodo di 24 ore.

Il grafico visualizza l'altitudine dell'oggetto sopra l'orizzonte nel tempo.

- L'asse orizzontale rappresenta il tempo dalle 12:00 alle 12:00 del giorno successivo.
- L'asse verticale rappresenta l'altitudine da −30° a +90°.

La curva colorata mostra l'altitudine dell'oggetto durante il giorno.

Lo sfondo del grafico rappresenta lo stato del cielo e cambia in base alla posizione del Sole. Questo aiuta a identificare quando le osservazioni sono possibili.

I colori rappresentano diverse condizioni del cielo:  
- azzurro chiaro — giorno
- blu più scuro — crepuscolo
- blu scuro / nero — notte

Il colore della traiettoria dell'oggetto riflette anche la sua altitudine:  
- giallo – alto nel cielo (visibilità migliore)
- arancione – altitudine media
- rosso – vicino all'orizzonte
- viola – sotto l'orizzonte (non visibile)

Un indicatore mobile consente di esplorare la posizione dell'oggetto in momenti diversi. Quando l'indicatore viene spostato, vengono aggiornati i valori di ora corrente, altitudine e azimuth. Il valore dell'azimuth include anche la direzione della bussola corrispondente (ad esempio, 354° Az (N)).

Sotto il grafico vengono visualizzati gli eventi di osservazione importanti: 
- **<Translate android="true" ids="astro_rise"/>** – quando l'oggetto sorge sopra l'orizzonte.
- **<Translate android="true" ids="astro_culmination"/>** – quando l'oggetto raggiunge la sua altitudine massima.
- **<Translate android="true" ids="astro_set"/>** – quando l'oggetto tramonta sotto l'orizzonte. Se l'oggetto non sorge o non tramonta mai, i valori corrispondenti vengono nascosti.

Il grafico si apre con l'indicatore posizionato all'ora di sistema corrente. La posizione utilizzata per i calcoli viene mostrata sotto il grafico. La posizione è visualizzata come nome di città.

### Programma di osservazione {#observation-schedule}

![Programma di osservazione](@site/static/img/plugins/starwatcher/schedule_new.png)

La scheda **Programma** mostra la visibilità dell'oggetto selezionato per la settimana corrente. Ogni riga rappresenta un giorno e include:  
- il giorno della settimana
- la data
- ora di alba
- ora di tramonto. Se l'ora di tramonto cade nel giorno successivo, viene contrassegnata con ⁺¹
- un piccolo grafico di visibilità per quel giorno

Il mini grafico mostra quando l'oggetto è visibile durante il giorno e come cambia la sua altitudine. La sezione colorata della barra rappresenta il periodo in cui l'oggetto è sopra l'orizzonte. Il mini grafico rappresenta l'intervallo di tempo dalle 00:00 alle 23:59 del giorno selezionato.

È possibile navigare tra le settimane utilizzando i pulsanti freccia nell'intestazione del Programma. Il pulsante del calendario consente di tornare alla settimana corrente.

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

## Ricerca stelle in AR (Modalità fotocamera) {#ar-star-finding}

**Vai a:** *Plugin abilitato → <Translate android="true" ids="shared_string_menu,star_map"/> → Pulsante fotocamera* 

Il livello **Astronomy** funziona con la **fotocamera del dispositivo** per abilitare l'**osservazione delle stelle in Realtà Aumentata (AR)**. Punta la fotocamera del telefono verso il cielo notturno reale e visualizza in tempo reale stelle, pianeti, costellazioni, Sole/Luna sovrapposti.

**Come funziona la Ricerca stelle in AR:**
- La **vista live della fotocamera** mostra il cielo reale con sovrapposizioni astronomiche trasparenti allineate all'orizzonte/bussola.
- **Muovi la fotocamera** per scandagliare il cielo — gli oggetti vengono evidenziati quando appaiono nel tuo campo visivo.
- **Tocca gli oggetti evidenziati** per vedere azimuth, altitudine, magnitudine, orari di alba/tramonto e link a Wikipedia.
- **Calibrazione della bussola** necessaria per un allineamento preciso (muovi il telefono a forma di 8 se necessario).

La modalità AR utilizza i sensori del dispositivo (giroscopio, accelerometro e bussola) per allineare gli oggetti celesti con il cielo reale.

**Perfetto per:**
- Identificare stelle/pianeti deboli invisibili a occhio nudo.
- Localizzare costellazioni muovendo il telefono nel cielo.
- Navigazione del cielo in tempo reale durante escursioni o campeggi.


## Configura vista {#configure-view}

![Configura vista](@site/static/img/plugins/starwatcher/half_state_new.png) ![Configura vista](@site/static/img/plugins/starwatcher/full_state.png)

**<Translate android="true" ids="astro_configure_view"/>** consente di controllare come viene visualizzata la Mappa stellare abilitando o disabilitando modalità visive, oggetti e ausili di rendering.

Per aprire Configura vista, tocca il pulsante Configura vista nell'angolo in basso a destra della schermata Mappa stellare. Il pulsante è rappresentato da un'icona a strati (forme sovrapposte), che indica le impostazioni di visualizzazione e livello. Configura vista si apre in uno *stato ridotto*, mostrando le opzioni di visualizzazione principali. Scorri il pannello verso l'alto per espanderlo in *stato completo* e accedere a tutte le impostazioni disponibili. Per chiudere Configura vista, scorri il pannello verso il basso una volta per tornare allo stato ridotto, scorri verso il basso di nuovo per chiuderlo completamente, oppure tocca in qualsiasi punto della mappa al di fuori del pannello. Puoi anche toccare il pulsante Chiudi (X) nell'angolo in alto a destra del pannello.

### Modalità e azioni {#modes-and-actions}

![Configura vista](@site/static/img/plugins/starwatcher/view_with_map_new.png) ![Configura vista](@site/static/img/plugins/starwatcher/red_filter_new.png)

Questa sezione controlla le principali modalità di visualizzazione della Mappa stellare.

- **<Translate android="true" ids="map_2d"/> / <Translate android="true" ids="map_3d"/>**. Passa tra una vista del percorso celeste (2D), che mostra il cielo come una cupola proiettata con i percorsi degli oggetti, e una vista del cielo in stile globo (3D) che rappresenta la sfera celeste.
- **<Translate android="true" ids="shared_string_map"/>**. Abilita una vista aggiuntiva della mappa terrestre visualizzata sotto la Mappa stellare, permettendo di correlare gli oggetti celesti con l'ambiente geografico reale.
- **<Translate android="true" ids="red_filter"/>**. Applica un filtro colore rosso all'intera schermata per ridurre l'inquinamento luminoso e preservare la visione notturna durante le osservazioni del cielo buio.

### Oggetti visibili {#visible-objects}

![Configura vista](@site/static/img/plugins/starwatcher/solar_system.png) ![Configura vista](@site/static/img/plugins/starwatcher/constellations.png)

Questa sezione consente di scegliere quali tipi di oggetti celesti vengono mostrati sulla Mappa stellare.

| Oggetto | Descrizione |
|-------|-------------|
| <Translate android="true" ids="astro_solar_system"/> | Visualizza il Sole, la Luna e i pianeti visibili. |
| <Translate android="true" ids="astro_constellations"/> | Mostra le linee e i pattern delle costellazioni formati dalle stelle. |
| <Translate android="true" ids="astro_stars"/> | Visualizza le singole stelle visibili sulla Mappa stellare. |
| <Translate android="true" ids="astro_nebulas"/> | Mostra gli oggetti nebulosi dove disponibili. |
| <Translate android="true" ids="astro_star_clusters"/> | Visualizza gli ammassi stellari come oggetti celesti separati. |
| <Translate android="true" ids="astro_deep_sky"/> | Attiva/disattiva gli oggetti del cielo profondo come galassie, ammassi di galassie e buchi neri. |

### Opzioni di visualizzazione personali {#personal-display-options}

Le **opzioni di visualizzazione personali** controllano ausili visivi aggiuntivi relativi al focus dell'utente e all'osservazione.

| Opzione | Descrizione |
|-------|-------------|
| <Translate android="true" ids="astro_direction"/> | Mostra un indicatore direzionale per aiutare a orientare la visuale. |
| <Translate android="true" ids="astro_daily_path"/> | Visualizza il percorso giornaliero degli oggetti celesti selezionati nel cielo. |
| <Translate android="true" ids="shared_string_favorites"/> | Evidenzia o visualizza gli oggetti contrassegnati come preferiti. |

### Ausili di rendering {#rendering-aids}

Gli **ausili di rendering** aggiungono linee e griglie di riferimento per aiutare a orientare la Mappa stellare.

| Ausilio | Descrizione |
|-------|-------------|
| <Translate android="true" ids="azimuthal_grid"/> | Aggiunge una griglia basata sull'azimuth per l'orientamento orizzontale del cielo. |
| <Translate android="true" ids="meridian_line"/> | Visualizza la linea del meridiano che attraversa il cielo da nord a sud. |
| <Translate android="true" ids="equatorial_grid"/> | Mostra la griglia di coordinate equatoriali celesti. |
| <Translate android="true" ids="ecliptic_line"/> | Visualizza la linea dell'eclittica che rappresenta il percorso apparente del Sole. |
| <Translate android="true" ids="equator_line"/> | Visualizza la proiezione equatoriale terrestre sulla sfera celeste, aiutando a visualizzare la rotazione terrestre rispetto al cielo. |
| <Translate android="true" ids="galactic_line"/> | Mostra il piano della Via Lattea nel cielo, indicando la direzione principale del disco galattico. |

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

## Cerca {#search}

![Cerca](@site/static/img/plugins/starwatcher/explore_screen.png)

La funzione **Cerca** nel plugin Astronomy consente di trovare oggetti celesti, esplorare le categorie del cielo e accedere ai dati di osservazione. Per aprire Cerca, tocca il pulsante Cerca sulla Mappa stellare. Si apre la schermata di ricerca, che fornisce diverse sezioni per scoprire e organizzare gli oggetti celesti. La schermata di ricerca include le seguenti sezioni:

**1. Osserva ora**

La sezione Osserva ora evidenzia gli oggetti celesti visibili in questo momento o stanotte. Questa sezione funge da strumento di raccomandazione, mostrando gli oggetti più adatti all'osservazione in base alla posizione e all'ora correnti.

**2. Categorie**

La sezione Categorie consente di sfogliare gli oggetti per tipo: Sistema solare, Costellazioni, Stelle, Nebulose, Ammassi stellari e Cielo profondo. Ogni categoria apre un elenco di oggetti con informazioni chiave: nome dell'oggetto, tipo o costellazione, magnitudine (luminosità) e ora di alba o tramonto (se applicabile).

### Ordinamento e filtri {#sorting-and-filters}

![Ordinamento](@site/static/img/plugins/starwatcher/sorting.png) ![Filtri](@site/static/img/plugins/starwatcher/filters.png)

Tocca la barra di ricerca per aprire l'interfaccia di ricerca completa. Puoi perfezionare i risultati utilizzando le opzioni di ordinamento e filtro.

Puoi ordinare gli oggetti per:  
- Nome (A–Z o Z–A)
- <Translate android="true" ids="astro_sort_brightest_first"/>
- <Translate android="true" ids="astro_sort_faintest_first"/>
- <Translate android="true" ids="astro_sort_rises_soonest"/>
- <Translate android="true" ids="astro_sort_sets_soonest"/>

I filtri aiutano a restringere gli oggetti visibili.

**Visibilità**  
- <Translate android="true" ids="astro_filter_show_all"/> — visualizza tutti gli oggetti
- <Translate android="true" ids="astro_filter_visible_now"/> — oggetti attualmente sopra l'orizzonte
- <Translate android="true" ids="astro_filter_visible_tonight"/> — oggetti visibili tra il tramonto e l'alba

**Filtri aggiuntivi**  
- <Translate android="true" ids="astro_filter_naked_eye"/> — mostra solo gli oggetti con magnitudine ≤ 6

**Categorie**  
Puoi filtrare i risultati per tipo di oggetto. Selezionando categorie specifiche si disattiva automaticamente l'opzione Tutti.

### I miei dati {#my-data}

![I miei dati](@site/static/img/plugins/starwatcher/my_data_new.png)

La sezione I miei dati contiene gli oggetti con cui l'utente ha interagito. Questa sezione include tre elenchi:

- <Translate android="true" ids="shared_string_favorites"/> — oggetti salvati dal menu contestuale.
- <Translate android="true" ids="astro_daily_path"/> — oggetti per i quali è abilitato il percorso del movimento giornaliero.
- <Translate android="true" ids="astro_directions"/> — oggetti con un indicatore di direzione attivo sulla Mappa stellare.

Selezionando un elemento si apre il menu contestuale dell'oggetto.

### Cataloghi {#catalogs}

![Cataloghi](@site/static/img/plugins/starwatcher/catalogs_new.png)

La sezione Cataloghi fornisce l'accesso ai cataloghi astronomici disponibili nel plugin Astronomy.

I cataloghi contengono grandi collezioni di oggetti celesti come stelle, galassie, nebulose e ammassi stellari. Aprendo un catalogo viene visualizzato un elenco degli oggetti inclusi in quel catalogo.

## Articoli correlati {#related-articles}

- [Interagisci con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali](../../user/map/vector-maps.md)