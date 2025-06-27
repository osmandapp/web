---
source-hash: 3be3e0b1234aafa204632357b26d98724820bfbfafe67f7237cda7aae4d48299
sidebar_position: 9
title:  Android Auto
ios: false
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

![Schermata Android Auto](@site/static/img/navigation/auto-car/android_auto_overview.png)  

[**Android Auto**](https://www.android.com/auto) è un software sviluppato da Google che consente agli utenti di connettere i propri dispositivi Android a sistemi multimediali compatibili con i veicoli. *Android Auto* fornisce una versione adattata e ottimizzata dell'app OsmAnd per un uso sicuro durante la guida, rendendo più facile e sicuro l'accesso alle funzioni di navigazione dell'app.  

La funzione **Android Auto** è supportata solo quando si utilizza l'app OsmAnd disponibile nel [Google Play Store](https://play.google.com/store/apps/dev?id=8483587772816822023).

> **NOTA**: *Android Auto non è una replica diretta dell'app mobile OsmAnd. Ha un'interfaccia semplificata, che si concentra sulle funzioni di navigazione essenziali per garantire una guida sicura. Alcune funzioni avanzate non sono supportate a causa delle limitazioni della piattaforma.*


### Schermata di connessione {#connection-screen}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_connect_screen.png)  

Mentre il dispositivo è connesso ad *Android Auto*, la mappa sulla schermata dell'app è bloccata. Questa è una funzione di sicurezza intenzionale per garantire che la navigazione sia controllata esclusivamente dal display dell'auto, riducendo al minimo le distrazioni durante la guida. Controlla le [domande comuni](#common-issues-and-solutions) sulla schermata di connessione.


### Schermata di avvio {#landing-screen}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_2.png').default} alt="AA"/></td>
    </tr>
</table>

Quando apri l'applicazione, viene visualizzato un elenco di categorie. Per una facile navigazione, puoi nasconderlo toccando il pulsante nell'angolo in alto a destra dello schermo.  

- Tocca il pulsante menu per nascondere l'elenco delle categorie.
- Nell'angolo in alto a destra dello schermo, tocca il pulsante accanto ai pulsanti funzione se vuoi tornare all'elenco.


### Interazione con la mappa {#interaction-with-the-map}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_interaction_2.png)

*Android Auto* visualizza l'interfaccia OsmAnd adattata allo schermo del sistema multimediale del veicolo. L'interazione con la mappa è limitata a pulsanti come:  

- [Menu OsmAnd](#destination-points). Contiene un elenco delle opzioni disponibili per assegnare un punto finale del percorso o una corsa libera.
- [Impostazioni](#voice-prompts). Questo pulsante è responsabile di: 1. accesso per attivare/disattivare le *indicazioni vocali* quando si naviga sul percorso selezionato; 2. mostrare i dettagli del percorso (tempo e distanza) per la prossima fermata.
- [Cerca](#search). Toccando il pulsante si apre una schermata con accesso alle funzioni di ricerca.
- [La mia posizione](../widgets/map-buttons.md#my-location-and-zoom). Sposta la parte visibile della mappa in modo che la tua posizione attuale sia al centro dello schermo.
- [Zoom](../widgets/map-buttons.md#my-location-and-zoom). Consente di ingrandire e rimpicciolire la parte visibile della mappa.
- [Bussola](../widgets/map-buttons.md#compass). Mostra quale delle quattro modalità di orientamento della mappa disponibili sullo schermo del dispositivo è selezionata.


## Parametri di configurazione richiesti {#required-setup-parameters}

### Avvia navigazione {#start-navigation}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_start_navigation.png)

Affinché OsmAnd funzioni in *Android Auto*, devi [connettere](#connection-screen) il tuo dispositivo Android al sistema multimediale del tuo veicolo. Il sistema operativo Android deve essere aggiornato alla versione 6.0 o superiore.

- Per scoprire come connettere e configurare il tuo dispositivo, visita i siti web di [**Android Auto**](https://support.google.com/androidauto/answer/6348029?hl=en).  

- Non tutti i veicoli supportano la capacità di connessione del dispositivo. Controlla l'[elenco per *Android Auto*](https://www.android.com/auto/compatibility/#compatibility-vehicles).  

- Devi acquistare una **versione a pagamento** dell'app o sottoscrivere un [abbonamento](../purchases/android.md#free-and-paid-features). Controlla il tuo abbonamento attuale qui *Menu → Impostazioni → Acquisti*.  

- *Android Auto* utilizza il primo [profilo di guida OsmAnd](#profile-first) nell'elenco dei profili per la navigazione. Imposta il profilo preferito come primo, eccetto il profilo *Sfoglia mappa*, non viene letto da *Android Auto*. Per fare ciò, vai su OsmAnd *Menu → Impostazioni → Profili app → Modifica elenco profili* → sposta il tuo profilo [**Guida**](#profile-first) al primo posto o dopo il profilo *Sfoglia mappa*.  

- È importante ricordare che *Android Auto* è un'applicazione che richiede molti dati, inclusi i dati mobili, e la qualità del sistema può dipendere dalla qualità della tua connessione e dalla velocità del tuo accesso a Internet.

### Profilo Primo {#profile-first}

Non puoi selezionare un profilo direttamente in *Android Auto* sullo schermo del veicolo.  
Se hai già un profilo selezionato sul tuo dispositivo che corrisponde al tipo di veicolo, come *Guida*, *Camion*, *Auto*, *Moto*, *Ciclomotore*, **l'app attiverà automaticamente** il profilo appropriato quando ti connetti ad Android Auto. Ad esempio, se hai un profilo *Camion* selezionato e il tuo dispositivo si connette ad **Android Auto**, l'app attiverà quel profilo.

Se non hai selezionato alcun profilo *Guida* sul tuo dispositivo che corrisponda al tipo di veicolo, OsmAnd passerà automaticamente al profilo *Guida*. Questo viene fatto per fornire la navigazione di base e per prevenire possibili problemi causati dall'utilizzo del profilo sbagliato per un tipo di veicolo specifico.

**Perché è importante:**

1. **Sicurezza di guida.** Diversi tipi di trasporto richiedono informazioni e impostazioni diverse durante la guida. Ad esempio, i camionisti possono essere limitati in altezza, peso e larghezza dei loro veicoli, quindi il profilo *Camion* fornisce loro restrizioni e linee guida appropriate. Mentre ciclisti e motociclisti hanno bisogno di informazioni su piste ciclabili e percorsi, senza dati per i camion.

2. **Utilità ed efficienza.** La navigazione dovrebbe essere personalizzata per soddisfare le esigenze di un particolare mezzo di trasporto. Ciò consente agli utenti di ridurre il tempo necessario per trovare percorsi ottimali ed evitare restrizioni di traffico non necessarie.

3. **Evitare errori.** Il passaggio al profilo *Guida* quando non esiste un profilo specifico per il mezzo di trasporto selezionato ti fornisce un accesso costante alle impostazioni e alle informazioni minime necessarie, evitando così possibili errori e incomprensioni durante la guida.  


## Punti di destinazione {#destination-points}

![Schermata Android Auto](@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png)

Puoi selezionare [POI](../map/point-layers-on-map.md#points-of-interest-pois), [Preferiti](../personal/favorites.md) o [Segnalibri](../personal/markers.md) precedentemente impostati e aggiunti come punto di destinazione. È anche possibile selezionare una [Traccia](../personal/tracks/manage-tracks.md) registrata o scaricata per il percorso, utilizzare la [Ricerca](../search/index.md) o selezionare una destinazione dalla [Cronologia](../search/search-history.md) del percorso o fare una *Corsa libera*.

1. Se desideri una posizione particolare sulla mappa come punto finale, seleziona la categoria appropriata di punti dall'elenco, [POI](#poi-categories), [Preferiti](#favorites) o [Segnalibri mappa](#map-markers).  
  
    - Tutte le categorie possono contenere non più elementi dell'elenco di quelli forniti dal sistema multimediale del tuo veicolo. Ciò significa che l'elenco in *Android Auto* potrebbe essere incompleto e tutte le altre cartelle sono disponibili solo nell'app OsmAnd sul tuo dispositivo.
    - La cartella [Ultima modifica](#folder-last-modified) contiene un elenco delle destinazioni recenti, ordinate per data di aggiunta o modifica.
    - L'elenco di tutte le altre cartelle è ordinato per l'aggiornamento più recente, le nuove cartelle sono in cima all'elenco. Non è possibile modificarne l'ordine manualmente.
    - L'elenco dei punti all'interno delle cartelle è ordinato per distanza da essi, a partire dal più vicino. Ogni punto ha un nome o coordinate, un'icona sagomata (colore e icona impostati per impostazione predefinita o scelti da te nell'applicazione OsmAnd) e la distanza dal punto della posizione corrente ad esso.  

2. Seleziona la categoria [Cronologia](#history) per trovare una delle destinazioni recenti che sono memorizzate nella memoria del dispositivo.  

3. Seleziona [Cerca](#search) per inserire una destinazione dalle categorie di ricerca disponibili.  

4. Scegli **Corsa libera** per fare un viaggio senza un punto finale specificato.

:::note
Durante la guida, i punti selezionati possono essere [annunciati](#voice-prompts) quando ti avvicini o li superi. Consulta le impostazioni [Indicazioni vocali](../navigation/guidance/voice-navigation.md) nell'articolo appropriato per impostare le notifiche vocali.
:::  


### Cronologia {#history}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_history.png)  

Nella categoria Cronologia, puoi selezionare una destinazione da un elenco di punti finali. Sono ordinati per utilizzo più recente, a partire dal più nuovo. Questo può essere conveniente per un accesso rapido ai percorsi utilizzati di frequente. Per sapere come utilizzare o eliminare una destinazione, leggi l'articolo [Cronologia ricerche](../search/search-history.md).  


### Categorie POI {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_2.png').default} alt="AA"/></td>
    </tr>
</table>

I POI (Punti di interesse) sono un tipo di punti che identificano luoghi o oggetti sulla mappa che sono importanti o di interesse per gli utenti. Sono evidenziati da icone speciali fornite nelle [impostazioni OsmAnd](../map/point-layers-on-map.md#poi-types) e ordinate in gruppi.  

Per costruire un percorso verso un POI in *Android Auto*, segui questi passaggi:

1. Seleziona il POI necessario dall'elenco delle categorie disponibili o inserisci il nome del POI utilizzando [Cerca](#search).
2. Toccando una categoria si apre la schermata successiva con un elenco di POI.
3. Toccando un elemento nell'elenco si apre la navigazione.
4. OsmAnd calcola il percorso e lo visualizza sullo schermo di *Android Auto*. Tocca il pulsante **Avvia** per iniziare a navigare verso quella posizione.
5. A seconda delle [impostazioni](../navigation/guidance/navigation-settings.md) dell'app OsmAnd e del tuo veicolo, potresti ricevere [indicazioni vocali](#voice-prompts) per guidarti verso una destinazione.  


### Preferiti {#favorites}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_4.png').default} alt="AA"/></td>
    </tr>
</table>  

*Preferiti* è una delle funzioni di OsmAnd che ti consente di creare una sorta di segnalibri (note) sulla mappa. Mentre utilizzi *Android Auto*, non puoi aggiungere o modificare i Preferiti, solo utilizzare quelli esistenti. L'elenco dei [Preferiti](../personal/favorites.md#manage-favorites) si trova nell'app OsmAnd *Menu → I miei luoghi → Preferiti*. Se vuoi usarli per la navigazione, aggiungi i luoghi necessari nei preferiti prima di connettere il dispositivo al sistema multimediale del tuo veicolo.  

Per creare un percorso verso un punto preferito in *Android Auto*, segui i passaggi seguenti:  

1. Toccando una cartella si apre la schermata successiva con un elenco di cartelle preferite.
2. Toccando un elemento nell'elenco si apre la navigazione.


### Segnalibri mappa {#map-markers}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_markers_2.png)

Per definire la tua destinazione finale come Segnalibro mappa, devi prima creare il numero richiesto di segnalibri nell'app OsmAnd sul tuo dispositivo prima di connetterlo al sistema. I segnalibri devono essere disponibili nell'elenco *Menu → Segnalibri mappa*. Questo è descritto in modo più dettagliato nell'articolo [Segnalibri](../personal/markers.md).


### Tracce {#tracks}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_tracks.png)  

Per costruire un percorso verso una destinazione, puoi selezionare una traccia esistente disponibile nell'app OsmAnd. La traccia può essere [scaricata](../personal/tracks/manage-tracks.md#import) in anticipo, utilizzata come [registrata](../plugins/trip-recording.md) o creata in [Pianifica un percorso](../plan-route/create-route.md).  

Dall'elenco delle tracce in *Menu → I miei luoghi → [Tracce](../personal/tracks/manage-tracks.md)*, seleziona quella richiesta prima di connetterti al sistema multimediale del veicolo, e il percorso si costruirà fino all'inizio della traccia o visualizzerà la direzione corrente lungo la traccia.

Le tracce possono anche essere selezionate direttamente sullo schermo del veicolo in *Android Auto*. Sono organizzate in cartelle che hai creato, e per un accesso facile e veloce alle tracce aperte di recente, c'è una cartella speciale [Ultima modifica](#folder-last-modified).  


### Cerca {#search}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_search.png)

Andando su Cerca si ottiene un accesso rapido a un elenco della [cronologia delle destinazioni](#history) recenti. Analogamente al [menu di navigazione](../navigation/setup/route-navigation.md#navigation-menu), dove sono raccolti tutti i metodi di destinazione di OsmAnd come un indirizzo, POI o coordinate.

Puoi utilizzare lo strumento Cerca per trovare il luogo richiesto sulla mappa per la pianificazione del percorso da qualsiasi categoria di ricerca disponibile.

- [Indirizzo](../search/search-address.md) - inizia a digitare l'indirizzo nel campo di ricerca.
- [POI](../search/search-poi.md) e [POI personalizzati](../search/search-poi.md) - l'elenco dei nomi simili nelle vicinanze visualizzerà anche POI o le loro categorie.
- [Ricerca coordinate](../search/search-address#coordinates-search) - inserisci le coordinate per trovare il punto sulla mappa.  


### Cartella Ultima modifica {#folder-last-modified}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_last_modified.png)  


Le categorie Preferiti e Tracce hanno una cartella speciale *Ultima modifica*. Poiché l'elenco in queste categorie può essere molto ampio in quanto contiene tutti i tuoi preferiti o tracce esistenti, questa cartella è necessaria per un accesso facile e veloce alle tue destinazioni più recenti.


## Funzioni di navigazione {#navigation-features}

Oltre alle funzioni di base dell'app OsmAnd in *Android Auto* che forniscono una navigazione conveniente nel tuo veicolo, ci sono una serie di funzioni aggiuntive che migliorano la tua esperienza e rendono la navigazione più personalizzata, confortevole ed efficiente.  


### Prossima svolta e informazioni sul percorso {#next-turn--route-info}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_alert_widget.png)

Il widget **Prossima svolta** visualizza la distanza e il tipo della [manovra di svolta successiva](../widgets/nav-widgets.md#next-turn) e il [nome della strada](../widgets/nav-widgets.md#street-name).

Le informazioni sul percorso consistono in:

- [tempo di percorrenza stimato](../widgets/nav-widgets.md#time-to-destination),
- [ora di arrivo stimata](../widgets/nav-widgets.md#time-to-destination),
- [distanza di percorrenza](../widgets/nav-widgets.md#distance-to-destination).

Quando abilitata, [l'impostazione del widget](#eta-next-stop) (Informazioni sul percorso) mostrerà i dettagli del percorso per la prossima fermata ([il punto intermedio](../navigation/setup/route-navigation.md#intermediate-destinations)).


### Widget di avviso schermo {#screen-alert-widget}

Questo widget informativo combina tipi di avviso come **Attraversamenti pedonali** e **Limite di velocità**.

- I tipi di avviso hanno un aspetto diverso, che dipende dalla **<Translate android="true" ids="driving_region"/>** e può essere configurato in *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- In *Android Auto* non è possibile impostare la visualizzazione degli avvisi, è necessario configurare il widget nell'applicazione prima di avviare la navigazione e connettere il dispositivo al veicolo.
- Per una descrizione dettagliata dei tipi di avviso, consulta [questo articolo](../widgets/nav-widgets.md#alert-types).
- Per impostare gli avvisi schermo per i profili disponibili, consulta l'articolo [Impostazioni di navigazione](../navigation/guidance/navigation-settings.md#screen-alerts).  


### Tachimetro {#speedometer}

![Android Auto](@site/static/img/navigation/auto-car/speedometer_3_android.png)

Il widget **Tachimetro** è un elemento dell'interfaccia integrato che visualizza la *velocità attuale* utilizzando i dati GPS e il *limite di velocità* dal [database OSM](https://wiki.openstreetmap.org/wiki/Key:maxspeed) e dalle [impostazioni OsmAnd](../navigation/guidance/voice-navigation.md#speed-limit) sullo schermo del sistema multimediale del veicolo.

- Il **widget Tachimetro** è [*dipendente dal profilo*](../personal/profiles.md), quindi se modifichi le impostazioni per un profilo, non verranno applicate a un altro.
- Non è possibile personalizzare la visualizzazione del **widget Tachimetro** direttamente in *Android Auto*, è necessario configurarlo nell'app OsmAnd prima di avviare la navigazione e connettere il dispositivo al veicolo.
- Per ulteriori informazioni su come aggiungere e configurare il widget *Tachimetro* al display, leggi l'articolo [Widget informativi](../widgets/info-widgets.md#speedometer).


### Aspetto mappa (3D) {#map-appearance-3d}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_appearance_3d_2.png)

L'app OsmAnd ti consente di utilizzare la visualizzazione mappa 3D sullo schermo di *Android Auto* per visualizzare il tuo percorso e la navigazione.

- Per abilitare questa funzione, devi selezionare [Versione rendering mappa 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).
- Apri il principale *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/>* direttamente nell'app OsmAnd.
- Dopo aver configurato le impostazioni, il **pulsante 3D** verrà visualizzato sullo schermo di *Android Auto* quando l'elenco delle categorie per le destinazioni è chiuso.
- Puoi passare tra le modalità mappa 3D / 2D toccando questo pulsante.


### Indicazioni vocali {#voice-prompts}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

Le indicazioni vocali sono una delle funzioni più utili di OsmAnd durante la navigazione per *Android Auto*, fornendo indicazioni in tempo reale e consentendo al conducente di rimanere concentrato sulla strada. Le indicazioni vocali forniscono istruzioni chiare su svolte, direzioni e altre istruzioni di navigazione, fornendo un uso più sicuro e confortevole del sistema di navigazione.  

Per configurare le [indicazioni vocali](../navigation/guidance/voice-navigation.md) in base al profilo selezionato, devi farlo prima di iniziare un percorso nell'app OsmAnd sul tuo dispositivo. In *Android Auto*, è disponibile solo l'impostazione per disattivare o attivare contemporaneamente tutte le indicazioni vocali selezionate (*Pulsante Impostazioni → Indicazioni vocali (on/off)*).  


### ETA Prossima fermata {#eta-next-stop}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

Nell'app OsmAnd, puoi selezionare uno o più [punti intermedi](../navigation/setup/route-navigation.md#intermediate-destinations) per il percorso di navigazione.

Per abilitare o disabilitare le [**Informazioni sul percorso** per un punto intermedio (prossima fermata)](#next-turn--route-info), vai su *Android Auto (OsmAnd)→ Pulsante Impostazioni → Mostra dettagli percorso per la prossima fermata → On/Off*. Questa opzione visualizza l'ora e la distanza dalla prossima fermata sul widget [*Informazioni sul percorso*](#next-turn--route-info).


### Modalità mappa {#map-mode}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode_2.png').default} alt="AA"/></td>
    </tr>
</table>

*Android Auto* e OsmAnd offrono la possibilità di regolare la mappa in base alle condizioni di illuminazione. In *Modalità mappa giorno*, la combinazione di colori rimane luminosa e contrastante, rendendo più facile la lettura anche in pieno sole. In *Modalità notte*, le mappe diventano più scure, il che aiuta il conducente a navigare meglio al buio.  

OsmAnd ha opzioni per la [modalità mappa](../map/vector-maps.md#map-mode), ma quando utilizzi l'app in *Android Auto*, queste opzioni vengono ignorate. Viene invece utilizzata la modalità selezionata nelle impostazioni di sistema di *Android Auto* per le mappe.

- Seleziona Modalità giorno o Modalità notte per mantenere invariata la visualizzazione della mappa.
- Se desideri che la modalità di visualizzazione della mappa cambi in base all'ora del giorno, seleziona la modalità Automatica.  

<!-- ![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_mode.png) -->


### Schermo diviso {#split-screen}

![Schermata Android Auto](@site/static/img/navigation/auto-car/android_auto_map_split_screen.png)

L'app OsmAnd può essere aperta e utilizzata per navigare in *Android Auto* sullo schermo del sistema multimediale del veicolo contemporaneamente ad app di musica, messaggi o altre notifiche. Configurazione della visualizzazione a schermo diviso su un telefono connesso ad *Android Auto* o sullo schermo del sistema del veicolo.  

1. Dalla schermata Home, tocca App.
2. Tocca Impostazioni.
3. Trova Finestra multipla e scegli l'interruttore.
4. Torna alla schermata Home.  

<!--
![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_taskbar.png)-->


Nelle impostazioni di Android Auto, puoi modificare la posizione della barra delle applicazioni e il layout della schermata Home:

- **Posizione barra delle applicazioni:**  
  Vai su *Impostazioni Android Auto → Mostra controlli rapidi per le app* e disattiva l'interruttore. Questo sposterà la barra delle applicazioni dal basso al lato dello schermo.

- **Layout schermata Home:**  
  Vai su *Impostazioni Android Auto → Cambia layout → Cambia posizione sedile conducente* per regolare il layout in base alla posizione del sedile del conducente.


## Problemi comuni e soluzioni {#common-issues-and-solutions}

1. [Problema di orientamento della mappa.](../troubleshooting/android_auto.md#map-orientation-issue)
2. [Problema di controllo del volume.](../troubleshooting/android_auto.md#volume-control-issue)
3. [Ritardi di posizione (crash ANR).](../troubleshooting/android_auto.md#location-delays-anr-crashes)
4. Domande comuni sulla schermata di connessione:
    - *Perché non posso controllare l'app dal mio telefono quando sono connesso ad Android Auto?*  
        Per motivi di sicurezza, la schermata dell'app OsmAnd sul tuo telefono è bloccata mentre sei connesso ad Android Auto. Puoi interagire con l'app solo tramite il display dell'auto.
    - *Posso disabilitare la schermata bloccata e utilizzare l'app sul mio telefono?*  
        No, Android Auto impone questa restrizione per prevenire distrazioni durante la guida.
    - *Cosa devo fare se il mio telefono e il display dell'auto sembrano disconnessi?*  
        Assicurati che il tuo dispositivo sia correttamente connesso tramite USB o Bluetooth.  
        Riavvia il sistema di infotainment della tua auto e l'app OsmAnd se la connessione è instabile.


> *Ultimo aggiornamento: marzo 2025*