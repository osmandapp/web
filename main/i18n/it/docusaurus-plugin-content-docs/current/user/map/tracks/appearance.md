---
source-hash: 03b2d3f6e375b05230f448cf1908a173e0c48d07ed9e09a8337b5c05c7d6208d
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

La funzione **Aspetto della traccia** consente agli utenti di personalizzare la modalità di visualizzazione delle tracce sulla mappa. Ciò include la regolazione del colore, della larghezza, degli indicatori di direzione e di altri elementi visivi. La personalizzazione dell'aspetto della traccia aiuta a differenziare più tracce, a evidenziare percorsi specifici e a migliorare la leggibilità della mappa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Panoramica dell'aspetto della traccia Android](@site/static/img/map/track-appear-and-1.png)  ![Menu traccia Aspetto Android](@site/static/img/map/track_appearence_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Menu traccia Aspetto iOS](@site/static/img/map/track_appearence_1_ios.png) ![Menu traccia Aspetto iOS](@site/static/img/map/track_appearence_2_ios.png)  

</TabItem>

</Tabs>


## Accesso al menu {#access-to-the-menu}

È possibile modificare l'aspetto della traccia utilizzando uno dei seguenti metodi:

- **Da I miei luoghi**. Aprire *Menu → I miei luoghi → Tracce*, selezionare una traccia, toccare l'icona *Aspetto* nel [menu contestuale della traccia](../../map/tracks/track-context-menu.md#overview).
- **Dalla mappa**. Toccare una traccia direttamente sulla mappa, quindi toccare l'icona *Aspetto* nella sezione *Panoramica*.
- **Dalla registrazione della traccia**. Modificare l'aspetto della traccia attualmente registrata tramite il [menu contestuale di registrazione della traccia](../../plugins/trip-recording.md#current-track-recording).  
- **Dal menu Configura mappa**. Andare su *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> →* **&#8942;** *→ <Translate android="true" ids="change_appearance"/>* per le tracce visualizzate.


## Impostazioni dell'aspetto della traccia {#track-appearance-settings}

### Colore {#color}

:::tip acquisti
Alcune impostazioni possono essere utilizzate solo con *OsmAnd Pro*. <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">Android</a> e <a href="https://osmand.net/docs/user/purchases/ios#free-and-paid-features">iOS</a> Funzionalità gratuite e a pagamento.
:::

![Aspetto](@site/static/img/map/appearance_color_andr.png) ![Menu contestuale Colorazione iOS](@site/static/img/map/colorisation_ios.png)

È possibile impostare il colore della traccia manualmente o utilizzare la **visualizzazione dei dati basata sul colore** (ad esempio, velocità, altitudine, pendenza). Se una traccia è priva di alcuni dati, OsmAnd visualizza le sezioni mancanti in grigio.

**Opzioni di colore disponibili:**

- **Impostazioni gratuite**: colore *<Translate android="true" ids="track_coloring_solid"/>*, *<Translate android="true" ids="shared_string_speed"/>* (se registrata) e *<Translate android="true" ids="altitude"/>* (se registrata).   
- [Funzionalità Pro](../../purchases/index.md): *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>*.  

Su iOS la **lista di Colorazione** si apre come un menu contestuale. Gli elementi possono apparire in tre stati: 
1. <Translate ios="true" ids="shared_string_enabled"/>. Può essere applicata alla traccia corrente.
2. <Translate ios="true" ids="weather_update_disabled"/>. La traccia manca dei dati richiesti.
3. PRO. Disponibile per la traccia corrente ma richiede un abbonamento; toccando si apre la schermata [<Translate ios="true" ids="purchase_dialog_title"/>](https://osmand.net/docs/user/purchases/ios).

Per maggiori dettagli sulla personalizzazione dell'aspetto della linea del percorso, vedere [Schermata della mappa durante la navigazione](../../navigation/guidance/map-during-navigation.md#color) e sulla selezione e creazione di un colore personalizzato, vedere [Schemi di colori](../../personal/color-palette-schemes.md#routes).


### Larghezza {#width}

![Menu traccia Aspetto Spessore traccia Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)   ![Aspetto della traccia](@site/static/img/map/track_appearance_width_andr.png)  

È possibile personalizzare l'aspetto della traccia in diversi menu dell'applicazione:

- [*Traccia → Aspetto*](../../personal/tracks/manage-tracks.md#track-folder).
- [*Impostazioni di navigazione → Personalizza linea del percorso*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*I miei luoghi → Scheda Tracce → qualsiasi cartella → Aspetto predefinito*](../../personal/tracks/manage-tracks.md#track-folder).

Regolare la larghezza della traccia per migliorare la visibilità sulla mappa.

- **Opzioni preimpostate**: **Sottile, Media** e **Grassetto**.

- **Larghezza personalizzata**: regolabile da 1 a 24 px tramite un cursore.

- **Larghezza basata sul profilo**: può essere impostata tramite *Impostazioni di navigazione → [Personalizza linea del percorso](../../navigation/guidance/navigation-settings.md#customize-route-line)*.


### Intervallo di divisione {#split-interval}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu traccia Aspetto Intervallo di divisione Android](@site/static/img/map/split_interval_android.png)  ![Intervallo di divisione Android](@site/static/img/map/split_interval_2_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Menu traccia Aspetto Intervallo di divisione](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Intervallo di divisione](@site/static/img/map/track_appearance_menu_split_interval_ios.png)

</TabItem>

</Tabs>

Selezionare se dividere la traccia in intervalli per **distanza**, **tempo** o **salita/discesa** (Android), o per **distanza** o **tempo** (iOS). Per visualizzare statistiche dettagliate per intervallo, vedere [Analizza per intervalli](../../map/tracks/track-context-menu.md#analyze-by-intervals) (solo Android).


### Frecce di direzione {#direction-arrows}

![Menu traccia Aspetto frecce di direzione Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)  

Aggiunge **indicatori a freccia** lungo la traccia per indicare la direzione del movimento.

### Icone di inizio e fine {#start-and-finish-icons}

![Menu traccia Aspetto icone di inizio e fine Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)  

Consente di selezionare se mostrare le **icone di inizio e fine** per i segmenti di traccia.

### Unisci interruzioni {#join-gaps}

Collega i **segmenti di traccia** che sono stati interrotti a causa della perdita del segnale GPS o di una pausa nella registrazione. La funzione **<Translate android="true" ids="join_segments"/>** (*Android*) o **<Translate ios="true" ids="gpx_join_gaps"/>** (*iOS*) consente di collegare queste interruzioni nella traccia GPX selezionata utilizzando linee rette.

### Ripristina originale {#reset-to-original}

Ripristina tutte le **impostazioni dell'aspetto della traccia** ai loro valori predefiniti.


## Traccia 3D {#3d-track}

:::info Funzionalità a pagamento
**Traccia 3D** è una funzionalità a pagamento di **OsmAnd Pro** per [iOS](../../purchases/ios.md#pro-features) e [Android](../../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu traccia Aspetto Visualizzazione 3D](@site/static/img/map/3d_track_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu traccia Aspetto Visualizzazione 3D](@site/static/img/map/3d_track_appearance_ios.png)

</TabItem>

</Tabs>

La funzione **Traccia 3D** genera una visualizzazione tridimensionale integrando i dati di elevazione nelle tracce 2D standard. Questa funzionalità crea una rappresentazione con maggiore profondità, consentendo un'analisi precisa della traccia rispetto al terreno. Incorporando i dettagli dell'elevazione, la traccia 3D offre una visione più completa della topografia e del contesto geografico del percorso.

### Impostazioni traccia 3D {#3d-track-settings}

**Altezza parete**  
È possibile visualizzare una traccia 3D in base all'altitudine e ad altri dati disponibili all'interno della traccia, o in base a un'altitudine fissa.

- **<Translate android="true" ids="visualized_by"/>**: &nbsp;*Altitudine*, &nbsp;*Velocità*, &nbsp;*Altezza fissa*. Dati del sensore 3D: &nbsp;*Frequenza cardiaca*, &nbsp;*Cadenza bicicletta*, &nbsp;*Potenza bicicletta*, &nbsp;*Temperatura*, &nbsp;*Velocità bicicletta*.

- **<Translate android="true" ids="vertical_exaggeration"/>**. Se visualizzato per *Altitudine* o *Velocità*, è possibile scalare i dati 3D per ottenere una visualizzazione più evidente per la traccia 3D nell'intervallo da *Nessuna* a *x3.0*.

- **<Translate android="true" ids="wall_height"/>**. Se visualizzato per *Altezza fissa*, impostare l'altezza fissa per la traccia 3D definendo la sua elevazione sulla mappa nell'intervallo da *Nessuna* a *2000 m*.

- È possibile combinarlo con [Rilievo 3D](../../plugins/topography.md#3d-relief). Se la fonte dei dati 3D non è l'altitudine, la rappresentazione 3D sarà una combinazione dell'altitudine del rilievo e dei dati selezionati, come la velocità o la frequenza cardiaca.

**<Translate android="true" ids="wall_color"/>**  
Personalizza il **colore della traccia 3D** utilizzando gradienti o visualizzazioni basate sui dati.  
Le opzioni includono: *Nessuna*, &nbsp;*Tinta unita*, &nbsp;*Gradiente verso il basso*, &nbsp;*Gradiente verso l'alto*, &nbsp;*Altitudine*, &nbsp;*Pendenza*, &nbsp;*Velocità*.

**<Translate android="true" ids="track_line"/>**  
Aggiunge una [linea evidenziata](#color) alla parte superiore o inferiore della traccia 3D.  
Le opzioni includono: *Superiore*, &nbsp;*Inferiore*, &nbsp;*Superiore e inferiore*.

> **NOTA**: *La versione **Android** dell'app richiede che il motore di rendering della mappa [Versione 2 (OpenGL)](../../personal/global-settings.md#map-rendering-engine) sia abilitato per utilizzare la visualizzazione della traccia 3D.*


### Casi d'uso {#use-cases}

La funzione di traccia 3D è molto utile per attività come il parapendio, dove la visualizzazione della traiettoria di volo può offrire approfondimenti maggiori. Rendendo la traccia in 3D, è possibile sfruttare funzionalità come **Altezza parete** e **Colore parete** per estrarre preziose informazioni visive per l'analisi.

1. **Visualizza per Velocità con 3D**.  
    Un caso d'uso comune è l'utilizzo di tracce 3D per visualizzare le variazioni di velocità. Ciò consente di individuare sezioni specifiche della traccia in cui si è rallentato o accelerato.  

    Con il Colore parete basato sulla Pendenza, è possibile osservare come il terreno, in particolare colline e pendenze, abbia influito sulla velocità. Questa combinazione di visualizzazione della velocità e della pendenza fornisce una comprensione dettagliata delle prestazioni durante l'attività.

2. **Visualizza per sensore cardiaco con Rilievo 3D**.  
    Un'altra applicazione interessante è la combinazione dei dati del sensore di frequenza cardiaca con le mappe a rilievo 3D. Ciò consente di mappare le fluttuazioni della frequenza cardiaca direttamente sul terreno, offrendo una visione completa di come i cambiamenti di altitudine possano aver influenzato lo sforzo fisico.  

    La funzione di rilievo 3D, che esagera l'altitudine, funziona indipendentemente dalla visualizzazione della traccia 3D. È possibile regolare due parametri di esagerazione verticale per comprendere meglio la correlazione tra frequenza cardiaca ed elevazione del terreno.

3. **Visualizza l'altezza della traccia e la linea di colore della pendenza su una vista piana della terra.**  
    Quando si visualizzano i dati di altitudine, si consiglia di utilizzare una vista piana della terra per evitare problemi come errori GPS, che potrebbero far apparire sezioni della traccia sottoterra.  

    In questo scenario, le variazioni di pendenza possono essere visualizzate separatamente lungo la linea della traccia, mentre il Colore parete viene utilizzato per rappresentare l'altitudine. Questo metodo garantisce che, anche con potenziali imprecisioni dei dati, si riceva comunque una visualizzazione chiara e accurata della pendenza e dell'elevazione.

## Modifica dell'aspetto di più tracce {#change-appearance-for-multiple-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aspetto Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_1_andr.png)  ![Aspetto Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Modifica aspetto](@site/static/img/map/tracks_change_appear_3_ios.png)  ![Modifica aspetto](@site/static/img/map/tracks_change_appear_2_ios.png)

</TabItem>

</Tabs>  

La scheda [Tracce](../../personal/tracks/manage-tracks.md) visualizza automaticamente tutte le tracce mai registrate, create o importate. Sono organizzate per cartella o visualizzate come un elenco sottostante.  

Modifica l'aspetto di più tracce in *I miei luoghi → Tracce*:

- **Cambia aspetto predefinito** (solo Android) - Consente di configurare le impostazioni predefinite che verranno applicate una volta che la traccia è aggiunta alla [cartella](../../personal/tracks/manage-tracks.md#track-folder).
- **Ripristina originale** - Ripristina le impostazioni individuali della traccia.

- [Modalità di selezione](../../personal/tracks/manage-tracks.md#selection-mode) - Cambia l'aspetto di tracce specifiche nella cartella selezionata o dell'intero elenco nella scheda Tracce.
    - Selezionare il *menu a tre punti* nell'angolo in alto a destra della scheda Tracce e toccare *Seleziona*.
    - Quindi toccare il *menu a tre punti* nella parte superiore dello schermo e selezionare *Modifica aspetto*.  

Opzioni di personalizzazione dell'aspetto in blocco:

- **Frecce di direzione** - Aggiunge [indicatori di movimento](#direction-arrows).  
    Stati: *Invariato*, &nbsp;*Originale*, &nbsp;*Attivo*, &nbsp;*Disattivo*.

- **Mostra icone di inizio e fine** - [Visualizza indicatori](#start-and-finish-icons) per i punti di inizio e fine della traccia.  
    Stati: *Invariato*, &nbsp;*Originale*, &nbsp;*Attivo*, &nbsp;*Disattivo*.

- **Colore** – Applica [colorazione](#color) manuale o basata sui dati.

- **Larghezza** – Regola la [larghezza della linea della traccia](#width) utilizzando preimpostazioni o manualmente.

- **Intervallo di divisione** – [Imposta intervallo](#split-interval) per indicatori di distanza/tempo.  
    Stati: *Invariato*, &nbsp;*Originale*, &nbsp;*Seleziona*: *Tempo* o *Distanza*.

Originale e invariato:

- **Originale** - Ripristina i parametri originali dal file della traccia.

- **Invariato** - Mantiene le impostazioni correnti durante la sessione di modifica.


## Colori delle tracce nei file GPX {#track-colors-in-gpx-files}

OsmAnd supporta **colori di traccia personalizzati** nei file GPX utilizzando il tag `<osmand:color>` all'interno della sezione `<extensions>` di un elemento `<trk>`. Ciò consente agli utenti di definire i colori per le singole tracce, migliorando la differenziazione visiva quando più tracce vengono visualizzate sulla mappa.

Per specificare un colore per una traccia, utilizzare il seguente formato:  

```xml
<trk>
  <name>Example Track</name>
  <extensions>
    <osmand:color>#FF0000</osmand:color>
  </extensions>
</trk>
```

- Il tag `<osmand:color>` accetta **codici colore esadecimali** (ad esempio, `#FF0000` per il rosso).
- Se in un file GPX esistono più tracce, ogni traccia può avere il proprio tag `<osmand:color>`.


**Comportamento in OsmAnd:**

1. **Assegnazione del colore predefinito**:  

    - Quando una **traccia GPX viene importata come traccia singola** (opzione ***Importa come una traccia***), all'intera traccia viene assegnato il **colore GPX predefinito** (rosso).  
    - In OsmAnd **4.9.10 e versioni successive**, questo problema è stato risolto: i colori delle singole tracce vengono ora conservati durante l'importazione.

2. **Visualizzazione a colore singolo per le tracce unite:**  

    - Se le tracce vengono **unite** utilizzando ***Unisci segmenti***, la traccia risultante viene trattata come **una traccia continua con un unico segmento**.
    - La rappresentazione multicolore **non è supportata** per le tracce unite.
    - La traccia unita verrà visualizzata utilizzando il **colore GPX principale** (predefinito: rosso), anche se i singoli segmenti di traccia avevano originariamente colori diversi.

3. **Priorità delle impostazioni di aspetto:**  

    - OsmAnd attualmente supporta **impostazioni di colore e larghezza solo per l'intera traccia**.
    - Queste impostazioni di aspetto sono memorizzate nelle **estensioni GPX di primo livello**.
    - Se un colore o una larghezza sono **impostati al livello superiore** (nel file GPX o manualmente in OsmAnd), questa impostazione avrà la precedenza sui colori assegnati ai singoli segmenti di traccia.

**Soluzione alternativa per le tracce multicolore:**

- Per preservare i **colori individuali per più tracce**, **importare le tracce separatamente** invece di unirle.

- Regolare manualmente i colori della traccia in **Impostazioni aspetto traccia**:

  - Aprire la traccia in OsmAnd.
  - Toccare la traccia per aprire il **Menu contestuale**.
  - Selezionare **Aspetto**.
  - Scegliere il colore preferito.

- Ciò garantisce che ogni traccia mantenga la sua **rappresentazione cromatica prevista**, anche se il file GPX conteneva originariamente più segmenti con colori diversi.


## Articoli correlati {#related-articles}

- [Menu contestuale della mappa](../map-context-menu.md)
- [Configura mappa](../configure-map-menu.md)
- [Punti sulla mappa](../point-layers-on-map.md)
- [Tracce](../tracks/index.md)
- [Menu contestuale delle tracce](../tracks/track-context-menu.md)
- [Registrazione del viaggio](../../plugins/trip-recording.md)