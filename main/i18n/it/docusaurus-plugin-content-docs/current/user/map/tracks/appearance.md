---
source-hash: 90a0b74b4490473745395b99a2752c49185e30cca6fc93a62ca20659393e7eed
sidebar_position: 5
title:  Aspetto della traccia
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

La funzione **Aspetto della traccia** consente agli utenti di personalizzare la visualizzazione delle tracce sulla mappa. Ciò include la regolazione del colore, della larghezza, degli indicatori di direzione e di altri elementi visivi. La personalizzazione dell'aspetto della traccia aiuta a differenziare più tracce, evidenziare percorsi specifici e migliorare la leggibilità della mappa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track Appearance overview Android](@site/static/img/map/track-appear-and-1.png) ![Track menu Appearance Android](@site/static/img/map/track_appearence_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Appearance iOS](@site/static/img/map/track_appearence_1_ios.png) ![Track menu Appearance iOS](@site/static/img/map/track_appearence_2_ios.png)

</TabItem>

</Tabs>


## Accesso al menu {#access-to-the-menu}

È possibile modificare l'aspetto della traccia utilizzando uno dei seguenti metodi:

- **Da I miei luoghi**. Apri *Menu → I miei luoghi → Tracce*, seleziona una traccia, tocca l'*icona Aspetto* nel [menu contestuale della traccia](../../map/tracks/track-context-menu.md#overview).
- **Dalla mappa**. Tocca una traccia direttamente sulla mappa, quindi tocca l'*icona Aspetto* nella sezione *Panoramica*.
- **Dalla registrazione della traccia**. Modifica l'aspetto della traccia attualmente registrata tramite il [menu contestuale della registrazione della traccia](../../plugins/trip-recording.md#сurrent-track-recording).
- **Dal menu Configura mappa**. Vai a *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> →* **&#8942;** *→ <Translate android="true" ids="change_appearance"/>* per le tracce visualizzate.


## Impostazioni aspetto traccia {#track-appearance-settings}

### Colore {#color}

:::tip purchases
Alcune impostazioni possono essere utilizzate solo con *OsmAnd Pro*. <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">Android</a> e <a href="https://osmand.net/docs/user/purchases/ios#free-and-paid-features">iOS</a> Funzioni gratuite e a pagamento.
:::

![Appearance](@site/static/img/map/appearance_color_andr.png)

È possibile impostare il colore della traccia manualmente o utilizzare la **visualizzazione dei dati basata sul colore** (ad esempio, velocità, altitudine, pendenza). Se una traccia non dispone di determinati dati, OsmAnd visualizza le sezioni mancanti in grigio.

**Opzioni colore disponibili:**

- **Impostazioni gratuite**: *<Translate android="true" ids="track_coloring_solid"/> colore*, *<Translate android="true" ids="shared_string_speed"/>* (se registrato) e *<Translate android="true" ids="altitude"/>* (se registrato).

    ![Track menu Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_android.png) ![Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png)

- [Funzione Pro](../../purchases/index.md)): *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>*.

Per maggiori dettagli sulla personalizzazione dell'aspetto della linea del percorso, consulta [Schermata mappa durante la navigazione](../../navigation/guidance/map-during-navigation.md#color) e sulla selezione e creazione di un colore personalizzato, consulta [Schemi di colore](../../personal/color-palette-schemes.md#routes).


### Larghezza {#width}

![Track menu Appearance Track Thickness Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png) ![Track Appearance](@site/static/img/map/track_appearance_width_andr.png)

È possibile personalizzare l'aspetto della traccia in diversi menu dell'applicazione:

- [*Traccia → Aspetto*](../../personal/tracks/manage-tracks.md#track-folder).
- [*Impostazioni di navigazione → Personalizza linea percorso*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*I miei luoghi → Scheda Tracce → qualsiasi cartella → Aspetto predefinito*](../../personal/tracks/manage-tracks.md#track-folder).

Regola la larghezza della traccia per migliorare la visibilità sulla mappa.

- **Opzioni predefinite**: **Sottile, Medio** e **Grassetto**.

- **Larghezza personalizzata**: Regolabile da 1 a 24 px tramite un cursore.

- **Larghezza basata sul profilo**: Può essere impostata tramite *Impostazioni di navigazione → [Personalizza linea percorso](../../navigation/guidance/navigation-settings.md#customize-route-line)*.


### Intervallo di divisione {#split-interval}

![Track menu Appearance Split interval](@site/static/img/map/track_appearance_menu_split_interval_android.png) ![Split interval](@site/static/img/map/track_appearance_menu_split_interval_ios.png)

Seleziona se dividere l'intervallo sulla traccia **per distanza o per tempo**.

### Frecce di direzione {#direction-arrows}

![Track menu Appearance direction arrows Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)

Aggiunge **indicatori a freccia** lungo la traccia per indicare la direzione del movimento.

### Icone di inizio e fine {#start-and-finish-icons}

![Track menu Appearance start and finish icons Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)

Consente di selezionare se mostrare le **icone di inizio e fine** per i segmenti della traccia.

### Unisci interruzioni {#join-gaps}

Collega i **segmenti di traccia** che sono stati interrotti a causa della perdita del GPS o di una pausa nella registrazione. La funzione **<Translate android="true" ids="join_segments"/>** (*Android*) o **<Translate ios="true" ids="gpx_join_gaps"/>** (*iOS*) consente di collegare queste interruzioni nella traccia GPX selezionata utilizzando linee rette.

### Ripristina originale {#reset-to-original}

Ripristina tutte le **impostazioni dell'aspetto della traccia** ai valori predefiniti.


## Traccia 3D {#3d-track}

:::info Paid feature
**Traccia 3D** è una funzione a pagamento di **OsmAnd Pro** per [iOS](../../purchases/ios.md#pro-features) e [Android](../../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_ios.png)

</TabItem>

</Tabs>

La funzione **Traccia 3D** genera una visualizzazione tridimensionale integrando i dati di elevazione nelle tracce 2D standard. Questa funzionalità crea una rappresentazione con profondità migliorata, consentendo un'analisi precisa della traccia rispetto al terreno. Incorporando i dettagli di elevazione, la traccia 3D offre una visione più completa della topografia e del contesto geografico del percorso.

### Impostazioni traccia 3D {#3d-track-settings}

**Altezza parete**
È possibile visualizzare una traccia 3D per altitudine e altri dati disponibili all'interno della traccia, o per altitudine fissa.

- **<Translate android="true" ids="visualized_by"/>**: &nbsp;*Altitudine*, &nbsp;*Velocità*, &nbsp;*Altezza fissa*. Dati sensore 3D: &nbsp;*Frequenza cardiaca*, &nbsp;*Cadenza bicicletta*, &nbsp;*Potenza bicicletta*, &nbsp;*Temperatura*, &nbsp;*Velocità bicicletta*.

- **<Translate android="true" ids="vertical_exaggeration"/>**. Se visualizzato per *Altitudine* o *Velocità*, è possibile scalare i dati 3D per ottenere una visualizzazione più prominente per la traccia 3D nell'intervallo da *Nessuno* a *x3.0*.

- **<Translate android="true" ids="wall_height"/>**. Se visualizzato per *Altezza fissa*, imposta l'altezza fissa per la traccia 3D definendo la sua elevazione sulla mappa nell'intervallo da *Nessuno* a *2000 m*.

- È possibile combinarlo con [Rilievo 3D](../../plugins/topography.md#3d-relief). Se la sorgente dei dati 3D non è l'altitudine, la rappresentazione 3D sarà una combinazione dell'altitudine del rilievo e dei dati selezionati, come velocità o frequenza cardiaca.

**<Translate android="true" ids="wall_color"/>**
Personalizza il **colore della traccia 3D** utilizzando gradienti o visualizzazione basata sui dati.
Le opzioni includono: *Nessuno*, &nbsp;*Solido*, &nbsp;*Gradiente verso il basso*, &nbsp;*Gradiente verso l'alto*, &nbsp;*Altitudine*, &nbsp;*Pendenza*, &nbsp;*Velocità*.

**<Translate android="true" ids="track_line"/>**
Aggiunge una [linea evidenziata](#color) in alto o in basso sulla traccia 3D.
Le opzioni includono: *Alto*, &nbsp;*Basso*, &nbsp;*Alto e basso*.

> **NOTA**: *La **versione Android** dell'app richiede che il motore di rendering della mappa [Versione 2 (OpenGL)](../../personal/global-settings.md#map-rendering-engine) sia abilitato per utilizzare la visualizzazione della traccia 3D.*


### Casi d'uso {#use-cases}

La funzione traccia 3D è molto utile per attività come il parapendio, dove la visualizzazione del percorso di volo può offrire approfondimenti più dettagliati. Rendendo la traccia in 3D, è possibile sfruttare funzioni come **Altezza parete** e **Colore parete** per estrarre preziose informazioni visive per l'analisi.

1. **Visualizza per velocità con 3D**.
    Un caso d'uso comune è l'utilizzo delle tracce 3D per visualizzare le variazioni di velocità. Ciò consente di individuare sezioni specifiche della traccia in cui si è rallentato o accelerato.

    Con Colore parete basato sulla pendenza, è possibile osservare come il terreno, in particolare colline e pendenze, abbia influito sulla velocità. Questa combinazione di visualizzazione di velocità e pendenza fornisce una comprensione dettagliata delle prestazioni durante l'attività.

2. **Visualizza per sensore cardiaco con rilievo 3D**.
    Un'altra applicazione interessante è la combinazione dei dati del sensore di frequenza cardiaca con le mappe di rilievo 3D. Ciò consente di mappare le fluttuazioni della frequenza cardiaca direttamente sul terreno, offrendo una visione completa di come i cambiamenti di altitudine possano aver influenzato lo sforzo fisico.

    La funzione di rilievo 3D, che esagera l'altitudine, funziona indipendentemente dalla vista traccia 3D. È possibile regolare due parametri di esagerazione verticale per comprendere meglio la correlazione tra frequenza cardiaca ed elevazione del terreno.

3. **Visualizza altezza traccia e linea colore pendenza su una vista terra piatta.**
    Quando si visualizzano dati di altitudine, si consiglia di utilizzare una vista terra piatta per evitare problemi come errori GPS, che potrebbero causare la visualizzazione di sezioni della traccia sotto terra.

    In questo scenario, i cambiamenti di pendenza possono essere visualizzati separatamente lungo la linea della traccia, mentre il Colore parete viene utilizzato per rappresentare l'altitudine. Questo metodo garantisce che, anche con potenziali imprecisioni dei dati, si riceva comunque una visualizzazione chiara e accurata di pendenza ed elevazione.

## Modifica aspetto per più tracce {#change-appearance-for-multiple-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Appearance Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_1_andr.png) ![Appearance Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Change Appearance](@site/static/img/map/tracks_change_appear_3_ios.png) ![Change Appearance](@site/static/img/map/tracks_change_appear_2_ios.png)

</TabItem>

</Tabs>

La scheda [Tracce](../../personal/tracks/manage-tracks.md) visualizza automaticamente tutte le tracce mai registrate, create o importate. Sono organizzate per cartella o visualizzate come un elenco sotto di esse.

Modifica l'aspetto di più tracce in *I miei luoghi → Tracce*:

- **Modifica aspetto predefinito** - Applica le impostazioni a tutte le tracce in una [cartella](../../personal/tracks/manage-tracks.md#track-folder).
- **Ripristina originale** - Ripristina le impostazioni della singola traccia.

- [Modalità di selezione](../../personal/tracks/manage-tracks.md#selection-mode) - Modifica l'aspetto di tracce specifiche nella cartella selezionata o nell'intero elenco nella scheda Tracce.
    - Seleziona il *menu a tre puntini* nell'angolo in alto a destra della scheda Tracce e tocca *Seleziona*.
    - Quindi tocca il *menu a tre puntini* nella parte superiore dello schermo e seleziona *Modifica aspetto*.

Opzioni di personalizzazione dell'aspetto in blocco:

- **Frecce di direzione** - Aggiunge [indicatori di movimento](#direction-arrows).
    Stati: *Invariato*, &nbsp;*Originale*, &nbsp;*Attivo*, &nbsp;*Disattivo*.

- **Mostra icone di inizio e fine** - [Visualizza indicatori](#start-and-finish-icons) per i punti di inizio e fine della traccia.
    Stati: *Invariato*, &nbsp;*Originale*, &nbsp;*Attivo*, &nbsp;*Disattivo*.

- **Colore** – Applica [colorazione](#color) manuale o basata sui dati.

- **Larghezza** – Regola la [larghezza della linea della traccia](#width) utilizzando preset o manualmente.

- **Intervallo di divisione** – [Imposta intervallo](#split-interval) per indicatori di distanza / tempo.
    Stati: *Invariato*, &nbsp;*Originale*, &nbsp;*Seleziona*: *Tempo* o *Distanza*.

Originale e invariato:

- **Originale** - Ripristina i parametri originali dal file della traccia.

- **Invariato** - Mantiene le impostazioni correnti durante la sessione di modifica.


## Colori traccia nei file GPX {#track-colors-in-gpx-files}

OsmAnd supporta i **colori personalizzati della traccia** nei file GPX utilizzando il tag `<osmand:color>` all'interno della sezione `<extensions>` di un elemento `<trk>`. Ciò consente agli utenti di definire i colori per le singole tracce, migliorando la differenziazione visiva quando più tracce vengono visualizzate sulla mappa.

Per specificare un colore per una traccia, utilizzare il seguente formato:

```xml
<trk>
  <name>Traccia di esempio</name>
  <extensions>
    <osmand:color>#FF0000</osmand:color>
  </extensions>
</trk>
```

- Il tag `<osmand:color>` accetta **codici colore esadecimali** (ad esempio, `#FF0000` per il rosso).
- Se esistono più tracce in un file GPX, ogni traccia può avere il proprio tag `<osmand:color>`.


**Comportamento in OsmAnd:**

1. **Assegnazione del colore predefinito**:

    - Quando una **traccia GPX viene importata come singola traccia** (opzione ***Importa come un'unica traccia***), all'intera traccia viene assegnato il **colore GPX predefinito** (rosso).
    - In OsmAnd **4.9.10 e versioni successive**, questo problema è stato risolto: i colori delle singole tracce vengono ora conservati dopo l'importazione.

2. **Visualizzazione a colore singolo per tracce unite:**

    - Se le tracce vengono **unite** utilizzando ***Unisci segmenti***, la traccia risultante viene trattata come **un'unica traccia continua con un singolo segmento**.
    - La rappresentazione multicolore **non è supportata** per le tracce unite.
    - La traccia unita verrà visualizzata utilizzando il **colore GPX principale** (predefinito: rosso), anche se i singoli segmenti della traccia avevano originariamente colori diversi.

3. **Priorità delle impostazioni di aspetto:**

    - OsmAnd attualmente supporta le **impostazioni di colore e larghezza solo per l'intera traccia**.
    - Queste impostazioni di aspetto sono memorizzate nelle **estensioni GPX di primo livello**.
    - Se un colore o una larghezza è **impostato a livello superiore** (nel file GPX o manualmente in OsmAnd), questa impostazione avrà la precedenza sui colori assegnati ai singoli segmenti della traccia.

**Soluzione alternativa per tracce multicolore:**

- Per conservare i **colori individuali per più tracce**, **importa le tracce separatamente** invece di unirle.

- Regola manualmente i colori della traccia nelle **Impostazioni aspetto traccia**:

  - Apri la traccia in OsmAnd.
  - Tocca la traccia per aprire il **Menu contestuale**.
  - Seleziona **Aspetto**.
  - Scegli il colore preferito.

- Ciò garantisce che ogni traccia mantenga la sua **rappresentazione cromatica prevista**, anche se il file GPX conteneva originariamente più segmenti con colori diversi.


## Articoli correlati {#related-articles}

- [Menu contestuale della mappa](../map-context-menu.md)
- [Configura mappa](../configure-map-menu.md)
- [Punti sulla mappa](../point-layers-on-map.md)
- [Tracce](../tracks/index.md)
- [Menu contestuale delle tracce](../tracks/track-context-menu.md)
- [Registrazione viaggio](../../plugins/trip-recording.md)

> *Ultimo aggiornamento: Febbraio 2025*