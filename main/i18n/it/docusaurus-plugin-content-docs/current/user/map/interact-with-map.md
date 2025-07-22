---
source-hash: ca480d4fada9f677b9e8a4b60267b6ef26adb8611c8539c54da069d6ba39c8d5
sidebar_position: 2
title:  Interagire con la mappa
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Panoramica {#overview}

Questo articolo spiega come personalizzare e interagire con la mappa utilizzando vari pulsanti e gesti. Descrive come ruotare, zoomare, regolare l'angolo di visualizzazione e cambiare l'angolo di visualizzazione della mappa, ruotarla manualmente o automaticamente utilizzando la bussola, o in base alla direzione.


## Gesti {#gestures}

I gesti sono essenziali per navigare sulla mappa in modo facile e intuitivo.

| Azione sulla mappa | Gesto |
|:------------|:-------------|
| **Sposta** | Tocca e tieni premuto sulla mappa con **un** dito, quindi trascina per spostarti. |
| **Scorri** | Scorri la mappa con **un** dito. |
| **Zoom avanti** | Tocca due volte la mappa con **un** dito. <br/> Tocca due volte con **un** dito e scorri verso il basso. <br/> Pizzica con **due** dita per zoomare avanti. |
| **Zoom indietro** | Tocca due volte con **due** dita. <br/> Tocca due volte con **un** dito e scorri verso l'alto. <br/> Pizzica con **due** dita per zoomare indietro. |
| **Ruota** | Tocca la mappa con **due** dita, quindi ruota le dita con un movimento circolare. |
| **Inclina (3D)** | Tocca con **due** dita e spostale verso l'alto o verso il basso. <br/> Disponibile solo con la versione 2 (OpenGL) del [Motore di rendering della mappa](../personal/global-settings.md#map-rendering-engine). |

Le animazioni di scorrimento possono essere disabilitate nelle impostazioni con un'[opzione speciale](#no-animations).


## La mia posizione e zoom {#my-location-and-zoom}

![Menu schermata di configurazione](@site/static/img/widgets/location_zoom_buttons.png)

**La mia posizione**.
Il pulsante *La mia posizione* è un'icona circolare che indica se il centro della mappa è sincronizzato con la geolocalizzazione corrente del tuo dispositivo. Spesso indicato come pulsante "Dove sono?", ti aiuta a trovare rapidamente la tua posizione sulla mappa. Durante la navigazione, la mappa rimane tipicamente sincronizzata con la posizione del dispositivo, quindi il pulsante rimane nascosto. Tuttavia, diventa visibile se la mappa e la tua posizione non sono sincronizzate a causa dell'interazione dell'utente. Toccando il pulsante, la mappa si ricentra sulla tua posizione corrente, e un doppio tocco cambierà la visualizzazione in modalità 3D.

- Il pulsante *La mia posizione* ha i seguenti stati:
  - *Icona blu piena*. La posizione è stata trovata ma non è sincronizzata con la mappa.
  - *Icona bianca*. La posizione è stata trovata ed è sincronizzata con la mappa.
  - *Icona grigia*. La posizione non è stata ancora trovata.
  - *Icona a freccia*. La modalità 3D è attivata.

- **Tocca a lungo** (*Android*) il pulsante *La mia posizione* apre il [menu contestuale della mappa](../map/map-context-menu.md), consentendoti di condividere la tua posizione.

<br/>

**Pulsanti di zoom**.
I *pulsanti di zoom* sono sempre visibili accanto a *La mia posizione* e ti consentono di controllare il livello di zoom della mappa.

- La modifica del livello di zoom non influisce sulla sincronizzazione della mappa con la tua posizione.
- **Tocca a lungo** i *pulsanti di zoom* apre la finestra di dialogo *Lente d'ingrandimento della mappa*, consentendoti di regolare i livelli di dettaglio della mappa.
- Tieni presente che durante la navigazione, lo zoom può essere controllato automaticamente dall'impostazione **Zoom automatico**:
   - *<Translate android="true" ids="android_button_seq"/>:&nbsp; *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>*
   - *<Translate ios="true" ids="ios_button_seq"/>:&nbsp; *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>*

### Aspetto della mia posizione {#my-location-appearance}

Puoi personalizzare le icone del pulsante **La mia posizione** utilizzando le impostazioni di aspetto del profilo. Leggi di più su come farlo [qui](../personal/profiles.md#profile-appearance).


## Lente d'ingrandimento della mappa {#map-magnifier}

La *Lente d'ingrandimento della mappa* è uno strumento che migliora la visibilità della mappa, simile a una lente d'ingrandimento utilizzata con le mappe cartacee. Ti consente di zoomare sulla mappa per visualizzare testo e dettagli più chiaramente o per regolare il livello di dettaglio mantenendo la stessa scala. Per ulteriori informazioni, consulta l'articolo [Mappe vettoriali](../map/vector-maps.md#map-magnifier).


## Modalità di orientamento della mappa {#map-orientation-modes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Widget bussola](@site/static/img/map/map_orientation_mode_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Widget bussola](@site/static/img/map/map_orientation_mode_ios.png)

</TabItem>

</Tabs>

Le *modalità di orientamento della mappa* ti consentono di scegliere come viene visualizzata la mappa sullo schermo del dispositivo. OsmAnd offre modalità come **Ruotata manualmente**, **Direzione del movimento**, **Direzione della bussola** e **Il nord è in alto**. L'attivazione di ciascuna modalità cambia il modo in cui la mappa è orientata in base all'opzione selezionata. Per tutti i dettagli, consulta l'articolo [Pulsanti della mappa](../widgets/map-buttons.md#compass).


## Bussola {#compass}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widget bussola](@site/static/img/widgets/compass_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widget bussola](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs>

Il pulsante della bussola mostra come la [mappa è orientata](#map-orientation-modes). La *freccia rossa* sulle icone, o la direzione della freccia in modalità *Direzione del movimento*, indica il Nord. [L'icona sul pulsante della bussola](../widgets/map-buttons.md#compass) indica la modalità di orientamento corrente della mappa. Il widget del pulsante della bussola offre tre [opzioni di interazione](../widgets/map-buttons.md#compass-tapping-behavior): un *singolo tocco* ruota la mappa verso il Nord, un *doppio tocco* alterna tra tutte le modalità di orientamento della mappa e un *tocco lungo* apre l'elenco delle modalità.


## Ruota la mappa per direzione {#rotate-map-by-bearing}

Nella modalità **ruota la mappa per direzione** ([Direzione del movimento](../widgets/map-buttons.md#compass)), la mappa si allinea automaticamente con la tua direzione di movimento, in modo che l'area davanti a te venga visualizzata nella parte superiore dello schermo. Questa modalità migliora la navigazione spostando leggermente il centro della mappa verso il basso, mostrando una maggiore parte del percorso davanti. Se sei fermo, la mappa rimane fissa.

Puoi attivare questa funzione tramite *Menu → Impostazioni → Profili → Impostazioni generali → Aspetto → Orientamento della mappa* o toccando due volte il [pulsante della bussola](../widgets/map-buttons.md#compass-tapping-behavior). Per maggiori dettagli sulla direzione, consulta [qui](../widgets/nav-widgets.md#bearing-widget).


## Inclinazione e orizzonte della mappa {#map-tilt-and-horizon}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Inclinazione Android 1](@site/static/img/map/tilt_horizon_andr_1.png) ![Inclinazione Android 2](@site/static/img/map/tilt_horizon_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Inclinazione iOS 1](@site/static/img/map/tilt_horizon_ios_1.png) ![Inclinazione iOS 2](@site/static/img/map/tilt_horizon_ios_2.png)
</TabItem>

</Tabs>

Con il nuovo [motore di rendering](../personal/global-settings.md#map-rendering-engine) della mappa puoi cambiare l'[inclinazione della telecamera](../plugins/development.md#camera-tilt) da 90 (nessuna inclinazione) a 10 gradi. Approssimativamente con un'inclinazione della mappa inferiore a 20-22 gradi (questo parametro dipende dal livello di zoom), la linea dell'orizzonte immaginaria diventa visibile. A differenza di quella reale, l'orizzonte del programma è sempre dritto.

Sotto l'orizzonte, puoi vedere la cosiddetta *foschia* o *nebbia*. Quest'area della mappa è riempita di colore grigio, solo pochi dettagli della mappa possono essere osservati.
L'uso della nebbia è necessario poiché la visualizzazione di oggetti remoti sulla mappa richiede notevoli risorse di calcolo e non è sempre giustificata a causa delle [distorsioni](../plugins/development.md#comparison-with-a-satellite-imagery) della mappa a piccoli angoli di visualizzazione. Quindi la distanza visibile sulla mappa di OsmAnd è attualmente limitata a 35 tessere.

:::info
L'inclinazione della mappa può essere modificata con un tocco lungo sullo schermo con due dita e spostandole su/giù. Puoi anche cambiare l'inclinazione toccando l'icona [La mia posizione](#my-location-and-zoom) nell'angolo in basso a destra dello schermo (sono disponibili solo le posizioni a 45 e 90 gradi).
Non puoi cambiare l'inclinazione della telecamera quando è attivo il vecchio [motore di rendering](../personal/global-settings.md#map-rendering-engine) della mappa (versione 1).
:::


## Blocco schermo tattile {#touch-screen-lock}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pulsante azione rapida Blocco schermo tattile Android](@site/static/img/widgets/qa_touch_lock_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pulsante azione rapida Blocco schermo tattile iOS](@site/static/img/widgets/qa_touch_lock_ios.png)

</TabItem>

</Tabs>

Utilizza la funzione **Blocco schermo tattile** per evitare tocchi accidentali durante la navigazione. Questo è particolarmente utile per attività come il ciclismo o l'escursionismo, dove tocchi involontari potrebbero interrompere il tuo percorso.

**Sblocco**.
Tocca il pulsante sullo schermo, o, se il blocco è attivato, tramite un pulsante esterno (ad esempio, Volume giù), premi il pulsante esterno e tocca il pulsante sullo schermo.

**Configurazione**.

- Naviga in *Menu → Configura schermo → Pulsanti personalizzati*.
- Seleziona *+ → Aggiungi azione → Interfaccia → Blocco schermo tattile*.

Messaggi chiari sullo schermo ti guideranno durante il blocco o lo sblocco dello schermo.


## Impostazioni {#settings}

### Impostazioni extra della bussola {#extra-compass-settings}

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> Smussa la rotazione della mappa con un'animazione di rotazione più lenta, anche se ciò introduce un leggero ritardo, non superiore a 1 secondo.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> Smussa la rotazione della mappa con un'animazione di rotazione più lenta, anche se ciò introduce un leggero ritardo, non superiore a 1 secondo.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### Nessuna animazione {#no-animations}

<InfoAndroidOnly/>

Puoi disabilitare tutte le animazioni della mappa durante le interazioni con la mappa, inclusi gesti e pulsanti.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*


### Anima la propria posizione {#animate-own-position}

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*
**iOS**: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,routing_settings_2,animate_my_location"/>*

Crea un effetto di scorrimento fluido della mappa rispetto all'icona *[La mia posizione](../personal/profiles/#profile-appearance)* quando in movimento. L'effetto introduce un leggero ritardo rispetto alla verità sul terreno di circa 1 secondo. È stato segnalato che l'attivazione di questa opzione crea alcuni problemi di lag pronunciati in alcune circostanze, disattivala se si verificano tali problemi.


## Dispositivi di input esterni {#external-input-devices}

I pulsanti dei dispositivi di input esterni forniscono un modo conveniente ed efficiente per interagire con la mappa e l'interfaccia dell'applicazione OsmAnd. Si trovano su dispositivi esterni, come **tastiere Bluetooth o di altro tipo**, **pulsanti specializzati su dispositivi di navigazione per veicoli**, o controller [WunderLINQ](https://blackboxembedded.com/) e [Parrot](https://www.parrot.com/en).

Una delle funzioni principali dei pulsanti sui dispositivi di input esterni è quella di zoomare avanti e indietro sulla mappa. Consentono inoltre di navigare sulla mappa e modificarne l'orientamento senza dover toccare e gesticolare sullo schermo. I pulsanti sui dispositivi di input esterni supportano molte altre funzioni, come l'apertura del *Menu principale*.

:::note
La tastiera rimane funzionale anche quando l'opzione *Dispositivi di input esterni* è disattivata e viene selezionato *Nessuno*.
:::

### Dispositivo di input preconfigurato {#preconfigured-input-device}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![Dispositivi esterni](@site/static/img/map/external_menu_android.png) ![Dispositivi esterni](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![Dispositivi esterni](@site/static/img/map/external_types_ios.png)

</TabItem>

</Tabs>

Per accedere alle impostazioni di un dispositivo di input esterno, è necessario abilitare questa funzione.

- Vai al *Menu* principale *→ Impostazioni →* seleziona il *Profilo → Impostazioni generali → Altro → Dispositivi di input esterni*, e passa a *Abilitato*.

- Seleziona un dispositivo tra quelli supportati da OsmAnd toccando la voce *Tipo* nell'elenco:
    **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*solo Android*), o crea [**il tuo tipo**](#custom-input-device-type) (*solo Android*).

- C'è un'assegnazione diversa di **azione-chiave definita** per ogni tipo di dispositivo di input esterno. Tocca *<Translate android="true" ids="key_assignments"/>* per vedere un elenco di azioni e chiavi. La tabella delle chiavi è mostrata di seguito.

- Puoi leggere di più sulle azioni dei dispositivi di input esterni su GitHub nel pacchetto [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82).

| Chiave | Dispositivo | Azione |
|:---------|:---------------|:---------------|
|**C**| *Tastiera* | Sposta - [Alla mia posizione](#my-location-and-zoom) |
|**D**| *Tastiera* | Cambia - [Orientamento della mappa](#map-orientation-modes) |
|**N**| *Tastiera* | Mostra / Nascondi - Vista navigazione |
|**S**| *Tastiera* | Mostra / Nascondi - [Vista ricerca](../search/index.md) |
|**P**| *Tastiera* | Cambia - Profilo app successivo |
|**O**| *Tastiera* | Cambia - Profilo app precedente |
|**&#8593;**| *Tastiera* | Sposta - Mappa su |
|**&#8595;**| *Tastiera* | Sposta - Mappa giù |
|**&#8592;**| *Tastiera* | Sposta - Mappa a sinistra |
|**&#8594;**| *Tastiera* | Sposta - Mappa a destra |
|**&#43;** **=**| *Tastiera* | Mappa - [Zoom avanti](#my-location-and-zoom) |
|**&#8722;**| *Tastiera* | Mappa - [Zoom indietro](#my-location-and-zoom) |
|**Premi indietro**| *Tastiera* | Naviga – Schermata precedente |
|**&#8595;**| *Wunderlinq* | Mappa - [Zoom indietro](#my-location-and-zoom) |
|**&#8593;**| *Wunderlinq* | Mappa - [Zoom avanti](#my-location-and-zoom) |
| **ESC** | *Wunderlinq* | Apri Datagrid WunderLINQ |
| **M** <br/> (*Android legacy*) | *Tastiera* | Mostra / Nascondi - [Menu laterale](../start-with/main-menu.md#main-menu-side-menu) |
| **Pressione joystick** <br/> (*Android legacy*) | *Tastiera* | Sposta - [Alla mia posizione](#my-location-and-zoom) |
| **Pulsante multimediale** <br/> (*solo Android*)| *Tastiera* | Mostra / Nascondi - [Note AV](../plugins/audio-video-notes.md#manage-a-single-note) |
| **&#8592;** <br/> (*solo Android*)| *Parrot* | Mappa - [Zoom indietro](#my-location-and-zoom) |
| **&#8594;** <br/> (*solo Android*) | *Parrot* | Mappa - [Zoom avanti](#my-location-and-zoom) |


### Tipo di dispositivo di input personalizzato {#custom-input-device-type}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Dispositivi esterni](@site/static/img/map/external_mypilot_android.png) ![Dispositivi esterni](@site/static/img/map/external_mypilot2_android.png)

Se desideri assegnare chiavi per un dispositivo di input esterno (come una tastiera, un joystick o un controller), devi creare un tipo di dispositivo: vai all'impostazione [Dispositivo di input esterno](#external-input-devices), seleziona **Tipo** dall'elenco, tocca "**＋**" e inserisci un nome. Ogni tipo ha un menu con le seguenti opzioni: ***Rinomina, Duplica*** e ***Rimuovi***.

### Aggiungi azione e assegnazioni chiavi {#add-action--key-asssigments}

![Dispositivi esterni](@site/static/img/map/external_custom_4_andr.png) ![Dispositivi esterni](@site/static/img/map/external_custom_3_andr.png)

Dopo aver creato un tipo di input personalizzato, puoi assegnare le azioni richieste alle chiavi. È disponibile un'ampia gamma di [tipi di azione](../widgets/quick-action.md#action-types) dal widget Azione rapida.

- Seleziona un tipo di dispositivo, quindi tocca la voce **Assegnazioni chiavi**.
- Tocca il pulsante ***Aggiungi*** (&nbsp;"**＋**"&nbsp;) nell'angolo in basso a destra dello schermo.
- Seleziona l'azione richiesta, quindi tocca il campo ***Aggiungi chiave*** e tocca il pulsante sul tuo dispositivo per assegnarlo all'azione.

:::note

- Se il pulsante che assegni è già utilizzato per un'altra azione, riceverai una notifica con l'opzione di riassegnare il pulsante o annullare l'assegnazione.
- Successivamente puoi modificare azioni e assegnazioni chiavi o aggiungerne altre per azioni già create, basta selezionare una voce nell'elenco Assegnazioni chiavi.

:::

### Elimina assegnazione chiave {#delete-key-assignment}

![Dispositivi esterni](@site/static/img/map/external_custom_1_andr.png)

Puoi eliminare più azioni non necessarie utilizzando il **pulsante Modifica** (*a forma di matita*) nell'angolo in alto a destra dello schermo contemporaneamente:

- ***Rimuovi un'azione*** per azione, con il pulsante "**−**" nel campo dell'elemento.
- ***Rimuovi tutte le assegnazioni chiavi*** per il tipo selezionato toccando il pulsante nell'angolo in alto a destra dello schermo accanto a *Modifica nome*.


## Articoli correlati {#related-articles}

- [Menu contestuale della mappa](./map-context-menu.md)
- [Configura mappa](./configure-map-menu.md)
- [Mappe vettoriali (Stili mappa)](./vector-maps.md)
- [Mappe raster (Online / Offline)](./raster-maps.md)
- [Punti sulla mappa](./point-layers-on-map.md)
- [Tracce e percorsi](./tracks/index.md)
- [Menu contestuale delle tracce](./tracks/track-context-menu.md)
- [Trasporto pubblico](./public-transport.md)


> *Ultimo aggiornamento: Dicembre 2024*