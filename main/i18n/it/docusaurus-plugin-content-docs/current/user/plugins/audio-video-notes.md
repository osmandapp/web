---
source-hash: 494c0f42fb3a14331085fa79522a6bbb96cda5013289fdce88b34a3330403762
sidebar_position: 3
title:  Note audio/video
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

<InfoAndroidOnly />

## Panoramica {#overview}

Le tue registrazioni audio e video possono essere utili in futuro, come ricordi dei luoghi in cui sei stato. Sono disponibili nel menu [I miei luoghi](../personal/myplaces.md) e sono visibili quando il plugin Note audio/video è abilitato.

Il plugin Note audio/video estende le funzionalità di OsmAnd consentendo di creare le proprie note in vari formati, come foto, video o audio, e di associarle alla loro posizione geografica o alla posizione corrente. È possibile effettuare registrazioni solo quando il plugin è attivo, utilizzando il [widget Note audio/video](../widgets/info-widgets.md#audiovideo-notes-widget) e/o il [menu contestuale della mappa](../map/map-context-menu.md#-audiovideo-note). I dati ricevuti vengono salvati automaticamente in [I miei luoghi](../personal/myplaces.md), da dove possono essere comodamente gestiti e condivisi.  

Tutte le note audio e video create compongono il livello Registrazione. Quando abilitato sulla mappa, cambia la visualizzazione dei dati registrati e ci sono più impostazioni per gestire le registrazioni. Nel livello Registrazione, le note audio e video sono posizionate come PDI sulla mappa, creando così una narrazione utente visibile solo al proprietario del dispositivo.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Introduzione alle note audio video](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>


## Parametri di configurazione richiesti {#required-setup-parameters}

Le note audio/video sono fornite con il plugin Note audio/video e richiedono la seguente configurazione:

1. Abilitare il [plugin Note audio/video](../plugins/index.md#enable--disable) nella sezione Plugin del *Menu principale*.  
2. Aggiungere un [widget](../widgets/info-widgets.md#audiovideo-notes-widget) alla schermata della mappa per un uso più comodo.
3. Personalizzare le [impostazioni di registrazione](#plugin-settings) per ogni profilo, se necessario.  


## Impostazioni del plugin {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*  

![Impostazioni plugin audio video Foto Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

Per ogni profilo, è possibile configurare le *opzioni di registrazione audio e video*.  

| Parametro | Descrizione |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>**  | È possibile scegliere se utilizzare l'app di sistema o la fotocamera di OsmAnd per scattare <Translate android="true" ids="photo_notes"/>. |
| **<Translate android="true" ids="av_camera_pic_size"/>** | Imposta la dimensione delle foto da scattare. Le capacità della fotocamera del dispositivo determinano il numero di opzioni disponibili. Se non viene selezionata alcuna opzione, l'app utilizza la dimensione dalle impostazioni di sistema della fotocamera del dispositivo. |
| **<Translate android="true" ids="av_camera_focus"/>** | Stabilisce il metodo con cui viene impostata la messa a fuoco della fotocamera. Il numero di opzioni disponibili è determinato dalle capacità della fotocamera del dispositivo. Fondamentalmente, ci sono le tre seguenti opzioni: *<Translate android="true" ids="av_camera_focus_auto"/>*; *<Translate android="true" ids="av_camera_focus_continuous"/>*; e *<Translate android="true" ids="av_camera_focus_infinity"/>*. **Autofocus** è la più popolare e imposta la modalità automatica per la fotocamera; **continuo** fa sì che la fotocamera rilevi i movimenti e si rimetta a fuoco di conseguenza; e l'opzione **infinito** fa sì che l'obiettivo metta a fuoco a una certa distanza, mantenendo così gli oggetti a fuoco indipendentemente dalla loro lontananza. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | Se abilitato, viene prodotto un suono quando la fotocamera scatta una foto. Si prega di notare che, come richiesto dalla legge sulla privacy, **in alcuni paesi i dispositivi non avranno un interruttore per silenziare l'otturatore della fotocamera**. Se si utilizza l'app di sistema, il suono deve essere disabilitato nell'app della fotocamera. |
| **<Translate android="true" ids="av_audio_format"/>** | Fornisce una scelta di formati per un file audio. Il numero di opzioni disponibili e quale viene utilizzata per impostazione predefinita è determinato dai parametri di un dispositivo specifico. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | Questa opzione fornisce una scelta di opzioni di bitrate per un file audio da creare. Le opzioni di bitrate disponibili vanno da 16kbps a 128 kbps, o l'opzione Predefinita. Il parametro Predefinito è determinato dalle impostazioni "predefinite" del microfono del dispositivo. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | Se abilitato, OsmAnd utilizza l'applicazione di sistema per registrare video in <Translate android="true" ids="video_notes"/>. |
| **<Translate android="true" ids="av_video_quality"/>** | Fornisce una scelta di opzioni che determinano il formato dell'immagine di output. La gamma di opzioni disponibili è determinata dai parametri di un dispositivo specifico. L'opzione predefinita è l'opzione *Qualità massima*.  |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | Se abilitato, le vecchie registrazioni video verranno automaticamente sovrascritte e sostituite con nuove registrazioni video se la dimensione dello spazio di archiviazione raggiunge il limite.  |
| **<Translate android="true" ids="rec_split_clip_length"/>** | Determina il limite di tempo superiore per i video clip registrati. Ci sono opzioni con un intervallo da 1 minuto a 30 minuti. |
| **<Translate android="true" ids="rec_split_storage_size"/>** | Stabilisce la dimensione dello spazio di archiviazione destinato ai video registrati. Ci sono opzioni con un intervallo da 1024 MB a 62 GB. Un intervallo specifico di opzioni e l'opzione predefinita sono determinati dai parametri di un dispositivo specifico. Un messaggio di sistema ti ricorderà quando la dimensione dello spazio di archiviazione raggiungerà il limite stabilito. |
| **<Translate android="true" ids="notes"/>** | Questa opzione ti reindirizza a [Note audio/video in I miei luoghi](../personal/myplaces.md) - l'archivio centrale di tutte le note audio/video mai create nell'app. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | È possibile stabilire i valori predefiniti per tutte le impostazioni delle note A/V.  |
| **<Translate android="true" ids="copy_from_other_profile"/>** | Apre una finestra di dialogo per selezionare un profilo da cui copiare la configurazione di registrazione delle note audio/video e impostarla per il profilo corrente. |


## Creare una singola nota {#create-a-single-note}

È possibile creare una nota fotografica, video e audio in uno dei seguenti modi:

- Con il [Widget](../widgets/info-widgets.md#audiovideo-notes-widget). Se la nota deve essere legata alla tua posizione geografica attuale.
- Con il [Menu contestuale](../map/map-context-menu.md#overview) di un punto sulla mappa. Se la nota deve essere legata al punto selezionato sulla mappa.


### Creare e fissare la posizione corrente {#create-&-pin-current-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget plugin audio video Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

Il widget <Translate android="true" ids="map_widget_av_notes"/> viene utilizzato per creare una nota legata alla tua posizione attuale, evitando così qualsiasi ricerca di un punto adatto per una nota sulla mappa. Basta toccare il widget e creare la nota.  

Le funzioni fornite dal widget <Translate android="true" ids="map_widget_av_notes"/> dipendono da come è configurato nel menu [Configura schermata](../widgets/info-widgets.md#audiovideo-notes-widget). Il widget apre immediatamente la fotocamera per creare una nota, secondo le impostazioni stabilite, oppure chiede prima in quale formato creare una nota e poi apre la rispettiva finestra di dialogo del registratore.


### Creare e fissare la posizione selezionata {#create-&-pin-selected-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plugin audio video Menu contestuale crea una nota](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

Per creare una nota legata a un punto selezionato sulla mappa, utilizzare il [menu contestuale](../map/map-context-menu.md#-record-av-note) del punto:

1. Tocca a lungo un punto sulla mappa e si aprirà il [menu contestuale](../map/map-context-menu.md).
2. Tocca **Azioni** e seleziona una delle opzioni disponibili dall'elenco:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - per creare una nota audio e legarla al punto selezionato sulla mappa;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - per creare una nota video e legarla al punto selezionato sulla mappa;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - per creare una nota fotografica e legarla al punto selezionato sulla mappa.

3. A seconda del formato selezionato della nota, si apre la rispettiva finestra di dialogo del registratore.


### Finestra di dialogo del registratore {#recorder-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Registratore di note video](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

</TabItem>

</Tabs>

Per le *note audio e video*, viene visualizzato rispettivamente il registratore audio o video. È possibile:

- Interrompere la registrazione con l'icona *Stop*.
- Visualizzare la durata della registrazione.
- Mostrare o nascondere la schermata video.

È possibile interrompere la registrazione con un tocco del widget <Translate android="true" ids="map_widget_av_notes"/>, indipendentemente dal fatto che la registrazione sia stata avviata dal menu contestuale o dal widget. Per *una nota fotografica*, viene visualizzata la funzionalità della fotocamera e puoi scattare una foto, visualizzare il risultato, accettarlo e salvarlo, oppure scattare una nuova foto.

:::info nota
Automaticamente, tutte le registrazioni fotografiche, audio e video vengono salvate nella scheda: <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>.
:::


## Gestire una singola nota {#manage-a-single-note}

Puoi gestire le tue informazioni, pensieri, idee, ecc. legati a un luogo geografico, come segue:

- Visualizzare tutte le note come un elenco in [I miei luoghi](../personal/myplaces.md).
- Mostrare la nota specifica sulla mappa.
- Rinominare una nota in I miei luoghi.
- Mostrare tutte le note [sulla mappa](../map/configure-map-menu.md#map-data-layers).
- Riprodurre la nota.
- Creare waypoint in una [traccia](../plugins/trip-recording.md#new-track-recording).
- Esportare in [JOSM](https://josm.openstreetmap.de/).


### Visualizzare in I miei luoghi {#view-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Plugin audio video menu I miei luoghi](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

</TabItem>

</Tabs>

[I miei luoghi](../personal/myplaces.md) è un archivio centrale per tutte le tue note. Ti permette di visualizzare tutte le tue note in un elenco ordinato, mostrare una nota specifica su una mappa e gestire l'intero elenco di note.


### Mostrare sulla mappa {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plugin audio video menu I miei luoghi Contesto](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

</TabItem>

</Tabs>

Per mostrare una nota specifica sulla mappa, utilizza l'elenco delle note in I miei luoghi, trova quella desiderata e toccala. Di conseguenza, la mappa si apre, evidenzia la posizione della nota e apre il menu contestuale. È possibile lavorare con la nota selezionando le opzioni nel menu contestuale.


### Riproduci {#play}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plugin audio video Menu contestuale](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png)  
![Plugin audio video menu I miei luoghi azioni](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Per riprodurre una nota, utilizzare l'opzione corrispondente nel [menu contestuale](../map/map-context-menu#overview) aperto per la nota:

- sulla mappa;
- in I miei luoghi.

La sezione [Dettagli](../map/map-context-menu#details) fornisce maggiori dati sulle note, come latitudine e longitudine, data e ora della nota e foto.


### Rinomina, Elimina, Condividi {#rename-delete-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plugin audio video menu I miei luoghi azioni](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Per gestire una nota in I miei luoghi, tocca i tre punti verticali della nota nell'elenco e verranno visualizzate le opzioni disponibili, come segue:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Apri e visualizza il video selezionato o riproduci la nota audio.
- **<Translate android="true" ids="shared_string_share"/>**. Condividi facilmente la nota selezionata con altri tramite varie piattaforme.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Mostra la posizione esatta e il menu contestuale della nota sulla mappa.
- **<Translate android="true" ids="shared_string_rename"/>**. Cambia il nome della nota per una più facile identificazione.
- **<Translate android="true" ids="shared_string_delete"/>**. Rimuove permanentemente le note dall'applicazione.


## Widget di registrazione {#recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Il widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)  

</TabItem>

</Tabs>

Il [widget Note audio/video](../widgets/info-widgets.md#audiovideo-notes-widget) crea note, foto, file audio e video e li collega alla tua posizione attuale. Il widget ha diverse opzioni che possono essere impostate come azione predefinita eseguita dal widget quando si tocca lo schermo.  

Aggiungere un widget allo schermo è necessario se si preferisce evitare di cercare la geolocalizzazione sulla mappa e collegare le note alla propria posizione predefinita attuale. Per aggiungere o personalizzare un widget, seguire i passaggi seguenti:  

1. Andare su:  
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. Selezionare  **<Translate android="true" ids="map_widget_left"/>** o **<Translate android="true" ids="map_widget_right"/>**.

3. Toccare **<Translate android="true" ids="map_widget_av_notes"/>** e si aprirà il menu contestuale del widget.

4. Selezionare l'opzione che si preferisce utilizzare per impostazione predefinita toccando il widget:

    - **<Translate android="true" ids="av_def_action_choose"/>** - apre una selezione di opzioni.

    - **<Translate android="true" ids="av_def_action_audio"/>** - avvia la registrazione di un messaggio audio.

    - **<Translate android="true" ids="av_def_action_video"/>** - avvia la registrazione di un video.

    - **<Translate android="true" ids="av_def_action_picture"/>** - inizia a scattare foto.

    ![Il widget](@site/static/img/plugins/audio-video-notes/widget.png)  

**Utilizzo di dispositivi di input esterni (*Android*)**. Se utilizzi un [dispositivo di input esterno](https://osmand.net/docs/user/map/interact-with-map#external-input-devices), puoi avviare e interrompere le Note audio/video senza toccare lo schermo. Per farlo, assegna l'azione “Aggiungi nota audio” o “Aggiungi nota video” a un tasto:<br/>
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

Una volta assegnato, il tasto funziona come un interruttore:
- La prima pressione avvia la registrazione di una nota audio o video (a seconda dell'azione selezionata).
- La seconda pressione dello stesso tasto interrompe la registrazione.

Quando una registrazione viene interrotta tramite un dispositivo di input esterno, il menu contestuale non viene mostrato, il che rende più facile utilizzare OsmAnd in scenari completamente hands-free (ad esempio, durante la guida di una moto o di un'auto).


## Gestire più note {#manage-multiple-notes}

### Gestire in I miei luoghi {#manage-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plugin audio video menu I miei luoghi Tre azioni](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

</TabItem>

</Tabs>

Le opzioni nella barra inferiore possono essere utilizzate per gestire l'elenco delle note nel menu [I miei luoghi](../personal/myplaces.md#audiovideo-notes).


### Condividere con waypoint GPX {#share-with-gpx-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Condividi](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

</TabItem>

</Tabs>

È possibile condividere tutte le note, incluso il [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes) che ha le note selezionate come waypoint, nella schermata [I miei luoghi](../personal/myplaces.md#audiovideo-notes) facendo clic sul pulsante di condivisione nel menu inferiore. Accanto a ogni nota apparirà una casella di controllo per selezionare note specifiche. Ci sono due caselle di controllo sopra le note: *Note A/V per data* per selezionare tutte le note e la casella di controllo *Posizioni*. La casella di controllo *Posizioni* consente di aggiungere un file GPX separato con coordinate e dati.  

Ogni nota contiene l'ora in cui è stata creata, la quantità di dati e, se si tratta di una registrazione, l'ora della registrazione e i dati di posizione; è possibile aggiungere dati GPX.  
Formati di file supportati: audio - **3gp**, video - **mp4**, foto -**jpg**.


### Mostrare tutto sulla mappa {#show-all-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![Mostra note sulla mappa](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

Le note visualizzate sulla mappa possono raccontare la tua storia, dove hai visto dei segnali, quale porta dovevi aprire, dov'è l'uscita, il percorso ottimale e altro ancora. Puoi mostrare le note [una alla volta](#show-on-the-map) o tutte insieme.

Utilizza il livello mappa [Registrazione](../map/point-layers-on-map#-audio--video-points-android) per mostrare o nascondere tutte le note. Se lo attivi nel menu [Configura mappa](../map/configure-map-menu), il livello Registrazione mostra tutte le note sulla mappa.

![Nessuna nota sulla mappa](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Le note sono sulla mappa](@site/static/img/plugins/audio-video-notes/notes_on_map.png)


## Waypoint creati da note {#waypoints-created-from-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Note e waypoint sulla mappa](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)  
![Waypoint sulla traccia](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

Un waypoint viene creato quando una nota audio, video o fotografica viene aggiunta a una traccia. I waypoint esistono all'interno di una traccia. Se una traccia è visibile, anche i suoi waypoint sono visibili. Pertanto, queste note possono essere visibili sulla mappa tutte insieme o solo su una specifica traccia visibile. In quest'ultimo caso, le note vengono visualizzate come waypoint della traccia.

:::note
Se una traccia viene esportata, i waypoint non possono essere visualizzati o riprodotti, perché le note audio/video/foto sono memorizzate solo sul dispositivo e disponibili solo per te su quel dispositivo.
:::


### Creare waypoint {#create-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aggiunta manuale di un waypoint alla traccia](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

Ci sono due modi per creare un waypoint: automaticamente e manualmente.

1. **Automaticamente**, un waypoint viene creato nel caso in cui si prenda una nota audio/video/foto mentre la [Registrazione viaggio](../plugins/trip-recording) è in corso, indipendentemente dalla geolocalizzazione se è legata alla posizione corrente o a qualsiasi altro luogo, e quindi, indipendentemente dal mezzo utilizzato per farlo: che sia il [Widget](../widgets/info-widgets#audiovideo-notes-widget) o il [menu contestuale](../map/map-context-menu#-audiovideo-note).

    Tutti i waypoint aggiunti automaticamente ricevono un nome assegnato automaticamente. Il nome viene creato secondo il formato specificato di seguito per un file audio/video/foto e ha un [shortlink](https://wiki.openstreetmap.org/wiki/Shortlink). L'esempio dei waypoint nella figura sopra mostra waypoint creati automaticamente e manualmente, dove i primi quattro sono stati creati automaticamente e l'ultimo manualmente.

2. **Manualmente**, un waypoint viene creato tramite il [menu contestuale](../map/map-context-menu#-audiovideo-note), come segue:

    - Seleziona la nota audio/video/foto richiesta sulla mappa.
    - Tocca **Azioni**, quindi tocca **Aggiungi traccia**.
    - Seleziona la traccia a cui intendi aggiungere un waypoint.
    - Si apre la finestra di dialogo *<Translate android="true" ids="quick_action_add_gpx"/>* , che consente di impostare alcune proprietà, come il nome del waypoint, un'icona, il colore e altro. Una volta terminato, tocca **Salva**.

:::info nota
È possibile specificare nomi per ogni waypoint creato manualmente.
:::


### Visualizzare i waypoint {#view-waypoints}

- Un waypoint è disponibile per la visualizzazione come waypoint sulla mappa e nell'elenco dei [waypoint di una traccia specifica](../map/tracks/track-context-menu.md#points--waypoints). L'eliminazione del waypoint non elimina la rispettiva nota audio/video/foto.

- Una nota audio, video o fotografica è disponibile per la visualizzazione sulla mappa e nell'elenco delle note A/V in [I miei luoghi](../plugins/audio-video-notes#view-in-my-places). L'eliminazione della nota audio, video o fotografica non elimina il rispettivo waypoint.

- Sulla mappa, un waypoint e una nota audio, video o fotografica possono essere visibili o meno. Ciò è determinato da quale livello è attualmente attivato per il profilo.

- Quando né il livello Tracce né il livello Registrazione sono attivati, sia i waypoint che le note possono essere mostrati toccandoli in I miei luoghi. In questo caso, la mappa mostra le posizione della nota toccata o, rispettivamente, le posizioni di tutti i waypoint della traccia toccata.

| Visibile | Livello attivato |
| --- | --- |
| Solo waypoint | Livello Tracce |
| Waypoint e note | Livello Tracce e Registrazione |
| Solo note | Livello Registrazione |
| Nessuno | Né il livello Tracce, né il livello Registrazione. |


### File GPX con waypoint {#gpx-file-with-waypoints}

![Waypoint in un file GPX](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)  

Se si visualizza il file GPX della traccia aggiunta con un waypoint da una nota audio/video/foto, il waypoint sarà come nell'esempio seguente, con le coordinate, il timestamp, il nome della rispettiva nota e il link breve.


## Varie {#miscellaneous}

### Dettagli sul nome del file {#file-name-details}

Il plugin <Translate android="true" ids="audionotes_plugin_name"/> genera file audio/video/foto nel seguente formato:

    `{SHORTLINK_LOCATION}_Descrizione.{avi,mp3,jpg}`

dove `SHORTLINK_LOCATION` specifica la latitudine e la longitudine della posizione a cui il file è associato. `SHORTLINK_LOCATION` è codificato secondo le specifiche dello [Shortlink](https://wiki.openstreetmap.org/wiki/Shortlink).


### Esportare in JOSM {#export-to-josm}

![Note audio video in Josm](@site/static/img/plugins/audio-video-notes/josm-track-points.png)  

Per visualizzare tutto in seguito, è possibile esportare la traccia insieme a tutti i file multimediali e visualizzarli nell'editor [JOSM](https://josm.openstreetmap.de/). Si noti che i file multimediali devono essere inseriti nella cartella appropriata. È possibile scoprire quale cliccando sul video. Apparirà una notifica che indica che non è disponibile alcun file, inserire il file corretto nella cartella specificata.  


## Articoli correlati {#related-articles}

- [Interagire con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)