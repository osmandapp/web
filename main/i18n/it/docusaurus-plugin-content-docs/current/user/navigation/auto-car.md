---
source-hash: a7c6f8f7442c4b7f13e5c2dddf666b3c3746573001eeed8e01301d994f46a1d5
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

![Schermata di Android Auto](@site/static/img/navigation/auto-car/android_auto_overview.png)  

[**Android Auto**](https://www.android.com/auto) è un software sviluppato da Google che consente agli utenti di connettere i propri dispositivi Android a sistemi multimediali per veicoli compatibili. *Android Auto* fornisce una versione adattata e ottimizzata dell'app OsmAnd per un uso sicuro durante la guida, rendendo più facile e sicuro l'accesso alle funzioni di navigazione dell'app.  

La funzione **Android Auto** è supportata solo quando si utilizza l'app OsmAnd disponibile nel [Google Play Store](https://play.google.com/store/apps/dev?id=8483587772816822023).

> **NOTA**: *Android Auto non è una replica diretta dell'app mobile OsmAnd. Ha un'interfaccia semplificata, incentrata sulle funzioni di navigazione essenziali per garantire una guida sicura. Alcune funzionalità avanzate non sono supportate a causa delle limitazioni della piattaforma.*


### Schermata di connessione {#connection-screen}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_connect_screen.png)  

Mentre il dispositivo è connesso ad *Android Auto*, la mappa sulla schermata dell'app è bloccata. Si tratta di una funzione di sicurezza intenzionale per garantire che la navigazione sia controllata esclusivamente dal display dell'auto, riducendo al minimo le distrazioni durante la guida. Controlla le [domande comuni](#common-issues-and-solutions) sulla schermata di connessione.


### Schermata iniziale {#landing-screen}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_2.png').default} alt="AA"/></td>
    </tr>
</table>

Quando si apre l'applicazione, viene visualizzato un elenco di categorie. Per facilitare la navigazione, è possibile nasconderlo toccando il pulsante nell'angolo in alto a destra dello schermo.  

- Toccare il pulsante del menu per nascondere l'elenco delle categorie.
- Nell'angolo in alto a destra dello schermo, toccare il pulsante accanto ai pulsanti funzione se si desidera tornare all'elenco.


### Interazione con la mappa {#interaction-with-the-map}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_interaction_2.png)

*Android Auto* visualizza l'interfaccia di OsmAnd adattata allo schermo del sistema multimediale del veicolo. L'interazione con la mappa è limitata a pulsanti come:  

- [Menu OsmAnd](#destination-points). Contiene un elenco di opzioni disponibili per assegnare un punto finale del percorso o una guida libera.
- [Impostazioni](#voice-prompts). Questo pulsante è responsabile di: 1. accesso per attivare/disattivare i *suggerimenti vocali* durante la navigazione del percorso selezionato; 2. mostrare i dettagli del percorso (tempo e distanza) per la fermata successiva.
- [Cerca](#search). Toccando il pulsante si apre una schermata con accesso alle funzioni di ricerca.
- [La mia posizione](../widgets/map-buttons.md#my-location-and-zoom). Sposta la parte visibile della mappa in modo che la posizione corrente si trovi al centro dello schermo.
- [Zoom](../widgets/map-buttons.md#my-location-and-zoom). Consente di ingrandire e ridurre la parte visibile della mappa. Il gesto pinch-to-zoom è disponibile per ridimensionare la mappa. Se non supportato dall'unità principale, la regolazione dello zoom viene eseguita tramite gesto di doppio tocco e scorrimento.
- [Bussola](../widgets/map-buttons.md#compass). Mostra quale delle quattro modalità di orientamento della mappa disponibili sullo schermo del dispositivo è selezionata.


## Parametri di configurazione richiesti {#required-setup-parameters}

### Avvia navigazione {#start-navigation}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_start_navigation.png)

Affinché OsmAnd funzioni in *Android Auto*, è necessario [connettere](#connection-screen) il dispositivo Android al sistema multimediale del veicolo. Il sistema operativo Android deve essere aggiornato alla versione 6.0 o successiva.

- Per sapere come connettere e configurare il dispositivo, visitare i siti web di [**Android Auto**](https://support.google.com/androidauto/answer/6348029?hl=en).  

- Non tutti i veicoli supportano la possibilità di connessione del dispositivo. Controllare l'[elenco per *Android Auto*](https://www.android.com/auto/compatibility/#compatibility-vehicles).  

- È necessario acquistare una **versione a pagamento** dell'app o sottoscrivere un [abbonamento](../purchases/android.md#free-and-paid-features). Controllare l'abbonamento corrente qui *Menu → Impostazioni → Acquisti*.  

- *Android Auto* utilizza il primo [profilo di guida OsmAnd](#profile-first) nell'elenco dei profili per la navigazione. Impostare il profilo preferito come primo, ad eccezione del profilo *Sfoglia mappa*, che non viene letto da *Android Auto*. Per fare ciò, andare su OsmAnd *Menu → Impostazioni → Profili app → Modifica elenco profili* → spostare il profilo [**Guida**](#profile-first) al primo posto o dopo il profilo *Sfoglia mappa*.  

- È importante ricordare che *Android Auto* è un'applicazione che richiede un uso intensivo di dati, compresi i dati mobili, e la qualità del sistema può dipendere dalla qualità della connessione e dalla velocità di accesso a Internet.

### Profilo prioritario {#profile-first}

Non è possibile selezionare un profilo direttamente in *Android Auto* sullo schermo del veicolo.  
Se sul dispositivo è già stato selezionato un profilo corrispondente al tipo di veicolo, come *Guida*, *Camion*, *Auto*, *Moto*, *Ciclomotore*, **l'app attiverà automaticamente** il profilo appropriato quando ci si connette ad Android Auto. Ad esempio, se si è selezionato un profilo *Camion* e il dispositivo si connette ad **Android Auto**, l'app attiverà tale profilo.

Se sul dispositivo non è selezionato alcun profilo *Guida* corrispondente al tipo di veicolo, OsmAnd passerà automaticamente al profilo *Guida*. Questo per fornire una navigazione di base e per prevenire possibili problemi causati dall'uso di un profilo sbagliato per un tipo di veicolo specifico.

**Perché è importante:**

1. **Sicurezza alla guida.** Diversi tipi di trasporto richiedono informazioni e impostazioni diverse durante la guida. Ad esempio, i camionisti possono essere limitati in altezza, peso e larghezza dei loro veicoli, quindi il profilo *Camion* fornisce loro restrizioni e indicazioni appropriate. Mentre ciclisti e motociclisti hanno bisogno di informazioni su piste ciclabili e percorsi, senza dati per i camion.

2. **Utilità ed efficienza.** La navigazione deve essere personalizzata per soddisfare le esigenze di un particolare mezzo di trasporto. Ciò consente agli utenti di ridurre il tempo necessario per trovare i percorsi ottimali ed evitare inutili restrizioni al traffico.

3. **Prevenzione degli errori.** Il passaggio al profilo *Guida* quando non esiste un profilo specifico per il mezzo di trasporto selezionato fornisce un accesso costante alle impostazioni e alle informazioni minime necessarie, evitando così possibili errori e incomprensioni durante la guida.  


## Punti di destinazione {#destination-points}

![Schermata di Android Auto](@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png)

È possibile selezionare [PDI](../map/point-layers-on-map.md#points-of-interest-pois), [Preferiti](../personal/favorites.md) o [Segnalibri](../personal/markers.md) precedentemente preimpostati e aggiunti come punto di destinazione. È anche possibile selezionare una [Traccia](../personal/tracks/manage-tracks.md) registrata o scaricata per il percorso, utilizzare la [Ricerca](../search/index.md), selezionare una destinazione dalla [Cronologia](../search/search-history.md) del percorso o fare una *Guida libera*.

1. Se si desidera una posizione particolare sulla mappa come punto finale, selezionare la categoria di punti appropriata dall'elenco, [PDI](#poi-categories), [Preferiti](#favorites) o [Segnalibri mappa](#map-markers).  
  
    - Tutte le categorie non possono contenere più elementi di quelli previsti dal sistema multimediale del veicolo. Ciò significa che l'elenco in *Android Auto* potrebbe essere incompleto e tutte le altre cartelle sono disponibili solo nell'app OsmAnd sul dispositivo.
    - La cartella [Ultima modifica](#folder-last-modified) contiene un elenco delle destinazioni recenti, ordinate per data di aggiunta o modifica.
    - L'elenco di tutte le altre cartelle è ordinato in base all'aggiornamento più recente; le nuove cartelle si trovano in cima all'elenco. Non è possibile modificare manualmente il loro ordine.
    - L'elenco dei punti all'interno delle cartelle è ordinato in base alla distanza da essi, a partire dal più vicino. Ogni punto ha un nome o delle coordinate, un'icona sagomata (colore e icona impostati di default o scelti dall'utente nell'applicazione OsmAnd) e la distanza dal punto della posizione corrente ad esso.  

2. Selezionare la categoria [Cronologia](#history) per trovare una delle destinazioni recenti memorizzate nella memoria del dispositivo.  

3. Selezionare [Cerca](#search) per inserire una destinazione dalle categorie di ricerca disponibili.  

4. Scegliere **Guida libera** per intraprendere un viaggio senza un punto finale specificato.

:::note
Durante la guida, i punti selezionati possono essere [annunciati](#voice-prompts) quando ci si avvicina o li si supera. Vedere le impostazioni dei [Suggerimenti vocali](../navigation/guidance/voice-navigation.md) nell'articolo appropriato per impostare le notifiche vocali.
:::  


### Cronologia {#history}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_history.png)  

Nella categoria Cronologia, è possibile selezionare una destinazione da un elenco di punti finali. Sono ordinati in base all'uso più recente, a partire dal più nuovo. Questo può essere comodo per un accesso rapido ai percorsi utilizzati di frequente. Per sapere come utilizzare o eliminare una destinazione, leggere l'articolo [Cronologia ricerche](../search/search-history.md).  


### Categorie PDI {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_2.png').default} alt="AA"/></td>
    </tr>
</table>

I PDI (Punti di Interesse) sono un tipo di punti che identificano luoghi o oggetti sulla mappa importanti o di interesse per gli utenti. Sono evidenziati da icone speciali fornite nelle [impostazioni di OsmAnd](../map/point-layers-on-map.md#poi-types) e ordinate in gruppi.  

Per creare un percorso verso un PDI in *Android Auto*, seguire questi passaggi:

1. Selezionare il PDI necessario dall'elenco delle categorie disponibili o inserire il nome del PDI utilizzando la [Ricerca](#search).
2. Toccando una categoria si apre la schermata successiva con un elenco di PDI.
3. Toccando un elemento nell'elenco si apre la navigazione.
4. OsmAnd calcola il percorso e lo visualizza sullo schermo di *Android Auto*. Toccare il pulsante **Avvia** per iniziare la navigazione verso quella posizione.
5. A seconda delle [impostazioni](../navigation/guidance/navigation-settings.md) dell'app OsmAnd e del veicolo, è possibile ricevere [suggerimenti vocali](#voice-prompts) per guidare l'utente verso una destinazione.  


### Preferiti {#favorites}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_4.png').default} alt="AA"/></td>
    </tr>
</table>  

*Preferiti* è una delle funzioni di OsmAnd che consente di creare una sorta di segnalibri (note) sulla mappa. Durante l'utilizzo di *Android Auto*, non è possibile aggiungere o modificare i Preferiti, ma solo utilizzare quelli esistenti. L'elenco dei [Preferiti](../personal/favorites.md#manage-favorites) si trova nell'app OsmAnd *Menu → I miei luoghi → Preferiti*. Se si desidera utilizzarli per la navigazione, aggiungere i luoghi necessari nei preferiti prima di collegare il dispositivo al sistema multimediale del veicolo.  

Per creare un percorso verso un punto preferito in *Android Auto*, seguire i passaggi seguenti:  

1. Toccando una cartella si apre la schermata successiva con un elenco di cartelle dei preferiti.
2. Toccando un elemento nell'elenco si apre la navigazione.


### Segnalibri mappa {#map-markers}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_markers_2.png)

Per definire la destinazione finale come Segnalibro mappa, è necessario creare il numero richiesto di segnalibri nell'app OsmAnd sul dispositivo prima di collegarlo al sistema. I segnalibri devono essere disponibili nell'elenco *Menu → Segnalibro mappa*. Questo è descritto più dettagliatamente nell'articolo [Segnalibri](../personal/markers.md).


### Tracce {#tracks}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_tracks.png)  

Per creare un percorso verso una destinazione, è possibile selezionare una traccia esistente disponibile nell'app OsmAnd. La traccia può essere [scaricata](../personal/tracks/manage-tracks.md#import) in anticipo, utilizzata come [registrata](../plugins/trip-recording.md) o creata in [Pianifica un percorso](../plan-route/create-route.md).  

Dall'elenco delle tracce in *Menu → I miei luoghi → [Tracce](../personal/tracks/manage-tracks.md)*, selezionare quella desiderata prima di connettersi al sistema multimediale del veicolo, e il percorso si costruirà fino all'inizio della traccia o visualizzerà la direzione corrente lungo la traccia.

Le tracce possono anche essere selezionate direttamente sullo schermo del veicolo in *Android Auto*. Sono organizzate in cartelle create dall'utente e, per un accesso facile e rapido alle tracce aperte di recente, c'è una cartella speciale [Ultima modifica](#folder-last-modified).  


### Cerca {#search}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_search.png)

Andare su Cerca offre un accesso rapido a un elenco della [cronologia delle destinazioni](#history) recenti. Analogamente al [menu Navigazione](../navigation/setup/route-navigation.md#navigation-menu), dove sono raccolti tutti i metodi di destinazione di OsmAnd come un indirizzo, PDI o coordinate.

È possibile utilizzare lo strumento Cerca per trovare il luogo richiesto sulla mappa per la pianificazione del percorso da qualsiasi categoria di ricerca disponibile.

- [Indirizzo](../search/search-address.md) - iniziare a digitare l'indirizzo nel campo di ricerca.
- [PDI](../search/search-poi.md) e [PDI personalizzati](../search/search-poi.md) - l'elenco dei nomi simili nelle vicinanze visualizzerà anche i PDI o le loro categorie.
- [Ricerca coordinate](../search/search-address#coordinates-search) - inserire le coordinate per trovare il punto sulla mappa.  


### Cartella Ultima modifica {#folder-last-modified}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_last_modified.png)  


Le categorie Preferiti e Tracce hanno una cartella speciale *Ultima modifica*. Poiché l'elenco in queste categorie può essere molto ampio in quanto contiene tutti i preferiti o le tracce esistenti, questa cartella è necessaria per un accesso facile e rapido alle destinazioni più recenti.


## Funzionalità di navigazione {#navigation-features}

Oltre alle funzionalità di base dell'app OsmAnd in *Android Auto* che forniscono una comoda navigazione nel veicolo, ci sono una serie di funzionalità aggiuntive che migliorano l'esperienza e rendono la navigazione più personalizzata, comoda ed efficiente.  


### Prossima svolta {#next-turn}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_alert_widget.png)

Il widget **Prossima svolta** visualizza la distanza e il tipo della [prossima manovra di svolta](../widgets/nav-widgets.md#next-turn) e il [nome della via](../widgets/nav-widgets.md#street-name).

### Info percorso {#route-info}

Le informazioni sul percorso consistono in:

- [Tempo di viaggio stimato](../widgets/nav-widgets.md#time-to-destination),
- [Orario di arrivo stimato](../widgets/nav-widgets.md#time-to-destination),
- [Distanza di viaggio](../widgets/nav-widgets.md#distance-to-destination).

Quando abilitata, **[l'impostazione del widget](#eta-next-stop)** (Info percorso) mostrerà i dettagli del percorso per la fermata successiva ([il punto intermedio](../navigation/setup/route-navigation.md#intermediate-destinations)).


### Widget di avviso su schermo {#screen-alert-widget}

Questo widget informativo combina tipi di avvisi come **Attraversamenti pedonali** e **Limite di velocità**.

- I tipi di avvisi hanno un aspetto diverso, che dipende dalla **<Translate android="true" ids="driving_region"/>** e possono essere configurati in *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- In *Android Auto* non è possibile impostare la visualizzazione degli avvisi, è necessario configurare il widget nell'applicazione prima di avviare la navigazione e collegare il dispositivo al veicolo.
- Per una descrizione dettagliata dei tipi di avviso, vedere [questo articolo](../widgets/nav-widgets.md#alert-types).
- Per impostare gli avvisi su schermo per i profili disponibili, vedere l'articolo [Impostazioni di navigazione](../navigation/guidance/navigation-settings.md#screen-alerts).  


### Tachimetro {#speedometer}

![Android Auto](@site/static/img/navigation/auto-car/speedometer_3_android.png)

Il widget **Tachimetro** è un elemento di interfaccia integrato che visualizza la *velocità attuale* utilizzando i dati GPS e il *limite di velocità* dal [database OSM](https://wiki.openstreetmap.org/wiki/Key:maxspeed) e dalle [impostazioni di OsmAnd](../navigation/guidance/voice-navigation.md#speed-limit) sullo schermo del sistema multimediale del veicolo.

- Il **widget Tachimetro** è [*dipendente dal profilo*](../personal/profiles.md), quindi se si modificano le impostazioni per un profilo, queste non verranno applicate a un altro.
- Non è possibile personalizzare la visualizzazione del **widget Tachimetro** direttamente in *Android Auto*, è necessario configurarlo nell'app OsmAnd prima di avviare la navigazione e collegare il dispositivo al veicolo.
- Per ulteriori informazioni su come aggiungere e configurare il widget *Tachimetro* sul display, leggere l'articolo [Widget informativi](../widgets/info-widgets.md#speedometer).


### Aspetto mappa (3D) {#map-appearance-3d}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_appearance_3d_2.png)

L'app OsmAnd consente di utilizzare la visualizzazione della mappa 3D sullo schermo di *Android Auto* per visualizzare il percorso e la navigazione.

- Per abilitare questa funzione, è necessario selezionare [Rendering mappa Versione 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).
- Aprire il menu principale *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/>* direttamente nell'app OsmAnd.
- Dopo aver configurato le impostazioni, il pulsante **3D** verrà visualizzato sullo schermo di *Android Auto* quando l'elenco delle categorie per le destinazioni è chiuso.
- È possibile passare tra le modalità mappa 3D / 2D toccando questo pulsante.


## Impostazioni {#settings}

### Suggerimenti vocali {#voice-prompts}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

I suggerimenti vocali sono una delle funzioni più utili di OsmAnd durante la navigazione per *Android Auto*, fornendo una guida in tempo reale e consentendo al conducente di rimanere concentrato sulla strada. I suggerimenti vocali forniscono istruzioni chiare su svolte, direzioni e altre istruzioni di navigazione, garantendo un uso più sicuro e confortevole del sistema di navigazione.  

Per configurare i [suggerimenti vocali](../navigation/guidance/voice-navigation.md) in base al profilo selezionato, è necessario farlo prima di avviare un percorso nell'app OsmAnd sul dispositivo. In *Android Auto*, è disponibile solo l'impostazione per attivare o disattivare contemporaneamente tutti i suggerimenti vocali selezionati (*Pulsante Impostazioni → Suggerimenti vocali (on/off)*).  


### ETA fermata successiva {#eta-next-stop}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

Nell'app OsmAnd, è possibile selezionare uno o più [punti intermedi](../navigation/setup/route-navigation.md#intermediate-destinations) per il percorso di navigazione.

Per abilitare o disabilitare le [**Info percorso** per un punto intermedio (fermata successiva)](#next-turn), andare su *Android Auto (OsmAnd)→ Pulsante Impostazioni → Mostra dettagli percorso per la fermata successiva → On/Off*. Questa opzione visualizza il tempo e la distanza fino alla fermata successiva sul [*widget Info percorso*](#route-info).


### Modalità mappa {#map-mode}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode_2.png').default} alt="AA"/></td>
    </tr>
</table>

*Android Auto* e OsmAnd offrono la possibilità di regolare la mappa in base alle condizioni di illuminazione. In *Modalità mappa diurna*, la combinazione di colori rimane brillante e contrastata, facilitando la lettura anche in piena luce solare. In *Modalità notturna*, le mappe diventano più scure, il che aiuta il conducente a orientarsi meglio al buio.  

OsmAnd ha opzioni di [modalità mappa](../map/vector-maps.md#map-mode), ma quando si utilizza l'app in *Android Auto*, queste opzioni vengono ignorate. Viene invece utilizzata la modalità selezionata nelle impostazioni di sistema di *Android Auto* per le mappe.

- Selezionare la modalità Giorno o la modalità Notte per mantenere invariata la visualizzazione della mappa.
- Se si desidera che la modalità di visualizzazione della mappa cambi a seconda dell'ora del giorno, selezionare la modalità Automatica.  

<!-- ![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_mode.png) -->


### Schermo diviso {#split-screen}

![Schermata di Android Auto](@site/static/img/navigation/auto-car/android_auto_map_split_screen.png)

L'app OsmAnd può essere aperta e utilizzata per la navigazione in *Android Auto* sullo schermo del sistema multimediale del veicolo contemporaneamente con app di musica, messaggi o altre notifiche. Impostazione della visualizzazione a schermo diviso su un telefono collegato ad *Android Auto* o sullo schermo del sistema del veicolo.  

1. Dalla schermata Home, toccare App.
2. Toccare Impostazioni.
3. Trovare Multi finestra e scegliere l'interruttore.
4. Tornare alla schermata iniziale.  

<!--
![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_taskbar.png)-->


Nelle impostazioni di Android Auto, è possibile modificare la posizione della barra delle applicazioni e il layout della schermata iniziale:

- **Posizione della barra delle applicazioni:**  
  Andare su *Impostazioni di Android Auto → Mostra controlli rapidi per le app* e disattivare l'interruttore. Questo sposterà la barra delle applicazioni dal basso al lato dello schermo.

- **Layout della schermata iniziale:**  
  Andare su *Impostazioni di Android Auto → Cambia layout → Cambia posizione del sedile del conducente* per regolare il layout in base alla posizione del sedile del conducente.


## Problemi comuni e soluzioni {#common-issues-and-solutions}

1. [Problema di orientamento della mappa.](../troubleshooting/android_auto.md#map-orientation-issue)
2. [Problema di controllo del volume.](../troubleshooting/android_auto.md#volume-control-issue)
3. [Ritardi di localizzazione (crash ANR).](../troubleshooting/android_auto.md#location-delays-anr-crashes)
4. Domande comuni sulla schermata di connessione:
    - *Perché non posso controllare l'app dal mio telefono quando è connesso ad Android Auto?*  
        Per motivi di sicurezza, la schermata dell'app OsmAnd sul telefono è bloccata mentre è connessa ad Android Auto. È possibile interagire con l'app solo tramite il display dell'auto.
    - *Posso disabilitare la schermata di blocco e utilizzare l'app sul mio telefono?*  
        No, Android Auto impone questa restrizione per evitare distrazioni durante la guida.
    - *Cosa devo fare se il mio telefono e il display dell'auto sembrano scollegati?*  
        Assicurarsi che il dispositivo sia correttamente collegato tramite USB o Bluetooth.  
        Riavviare il sistema di infotainment dell'auto e l'app OsmAnd se la connessione è instabile.