---
source-hash: ab1bf0f074bc95cb4e2f827ac1233fdf86d268b226686d37920e9eac0ea746ec
sidebar_position: 10
title: CarPlay
android: false
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



## Panoramica {#overview}

Guidare un veicolo e utilizzare contemporaneamente il telefono o il tablet è solitamente vietato dalla legge per motivi di sicurezza. [***CarPlay***](https://www.apple.com/ios/carplay/) è un software che fornisce una versione adattata e ottimizzata dell'app OsmAnd per un uso sicuro durante la guida, rendendo più facile e sicuro l'accesso alle funzioni di navigazione dell'app.

Per utilizzare *CarPlay* sullo schermo del veicolo, segui questi passaggi:

1. *CarPlay* non è disponibile in tutti i paesi. Assicurati che sia supportato nel tuo [paese o regione](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay) e che *CarPlay* sia supportato nel modello del tuo [veicolo](https://www.apple.com/ios/carplay/available-models/).
2. [Collega il tuo dispositivo](https://support.apple.com/en-gb/HT203412) al sistema multimediale del tuo veicolo utilizzando una porta USB o in modalità wireless con Wi-Fi o Bluetooth. Quando ti connetti per la prima volta, potresti aver bisogno dell'autorizzazione per utilizzare *CarPlay* sul tuo dispositivo.
3. Una volta connesso, l'*interfaccia CarPlay* apparirà automaticamente sullo schermo del tuo veicolo con tutte le app disponibili. Se la *schermata iniziale di CarPlay* non appare, seleziona il *logo CarPlay* sul display del veicolo.

#### Interfaccia CarPlay {#carplay-interface}

*CarPlay* **non è una replica diretta** dell'app mobile OsmAnd. Ha un'interfaccia semplificata, focalizzata sulle funzioni di navigazione essenziali per garantire una guida sicura. Alcune funzionalità avanzate non sono supportate a causa delle limitazioni della piattaforma.

### Schermata di connessione {#connection-screen}

![CarPlay](@site/static/img/navigation/auto-car/car_play_connect_screen.png)

Mentre il tuo dispositivo è connesso a *CarPlay*, la mappa sullo schermo dell'app è bloccata. Questa è una funzione di sicurezza intenzionale per garantire che la navigazione sia controllata esclusivamente dal display dell'auto, riducendo al minimo le distrazioni durante la guida. Controlla le [domande comuni](#common-issues-and-solutions) sulla schermata di connessione.


### Posizione della posizione in CarPlay {#location-position-in-carplay}

L'app OsmAnd per *CarPlay* ti consente di regolare la posizione dell'indicatore della posizione corrente sullo schermo per evitare che si sovrapponga al percorso e ad altri dettagli importanti della mappa.

**Come cambiare la posizione dell'indicatore:**

- Vai su *Menu → Configura schermo → Altro → [Posizione della posizione sullo schermo](../widgets/configure-screen.md#display-position-location-position-on-screen)*.
- Seleziona la posizione preferita:
    - **Automatico (predefinito)**. L'applicazione sposta automaticamente la posizione dell'indicatore per la modalità di navigazione o il movimento libero.
    - **Centro**. L'indicatore è posizionato al centro dello schermo, adatto per la navigazione standard.
    - **In basso**. L'indicatore è posizionato più vicino al bordo inferiore dello schermo, rendendo più facile osservare gli oggetti circostanti e gli incroci complessi.

### Interazione con la mappa {#interaction-with-the-map}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car-play-Interaction(1).png)

*CarPlay* visualizza l'interfaccia OsmAnd adattata allo schermo del sistema multimediale del veicolo. L'interazione con la mappa è limitata a:

- [La mia posizione](../widgets/map-buttons.md#my-location-and-zoom). Sposta la parte visibile della mappa in modo che la tua posizione corrente sia al centro dello schermo.
- [Zoom](../widgets/map-buttons.md#my-location-and-zoom). Ti consente di ingrandire e rimpicciolire la parte visibile della mappa.


## Parametri di configurazione richiesti {#required-setup-parameters}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car-play-select-point-1.png)

- Per prima cosa, devi selezionare e configurare il profilo da utilizzare quando ti connetti a *CarPlay*. Puoi leggere come configurare un profilo nell'articolo [Profili (Impostazioni)](../personal/profiles).
    - Un profilo conveniente per l'utilizzo di *CarPlay* può essere *Guida*, e il tipo di routing può essere [Routing auto](../navigation/routing/car-based-routing.md).
    - OsmAnd ha una voce separata [Profilo CarPlay](#carplay-profile) per un rapido accesso all'elenco dei profili disponibili per la connessione a *CarPlay*.
- Affinché OsmAnd funzioni, [collega il tuo dispositivo iOS](#overview) al sistema multimediale del veicolo. Per saperne di più su come connettere e configurare il tuo dispositivo, puoi visitare il sito web [**CarPlay**](https://support.apple.com/en-us/HT205634).
- Devi avere una delle [versioni a pagamento o in abbonamento di OsmAnd](../purchases/ios#free-and-paid-features). Controlla qui *Menu → Impostazioni → Acquisti*.
- Una volta connesso, puoi impostare una destinazione e avviare la navigazione OsmAnd in *CarPlay*.

:::note
Potrebbe essere necessaria una connessione Internet per utilizzare OsmAnd in *CarPlay*. Se il tuo dispositivo ha un accesso Internet limitato, puoi [*precaricare o creare percorsi*](../personal/tracks/manage-tracks.md) e utilizzarli senza Internet.
:::


### Avvia navigazione {#start-navigation}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car-play-start(1).png)

Per utilizzare la versione iOS dell'app OsmAnd in *CarPlay*, devi acquistare una [versione a pagamento dell'app o abbonarti](../purchases/ios#free-and-paid-features).

1. Per creare un percorso, devi scegliere il [punto finale del percorso](#select-a-route-endpoint) sulla *schermata CarPlay* o nell'[app OsmAnd](../navigation/setup/route-navigation.md).
2. Puoi utilizzare i [suggerimenti vocali](#voice-prompts) per ascoltare le indicazioni o i messaggi sui problemi sulla strada.
3. Dopo aver selezionato una posizione, premi **Avvia** per seguire il percorso.
4. Mentre guidi, lo schermo del veicolo visualizzerà le informazioni di OsmAnd sulla tua posizione corrente sulla mappa, le indicazioni stradali, la distanza alla svolta successiva, le linee, l'ora di arrivo e la distanza dalla tua destinazione.
    ![Schermata CarPlay](@site/static/img/navigation/auto-car/car_play_navmode.png)
5. Se desideri cambiare il tuo percorso o selezionare una posizione diversa, puoi premere il pulsante appropriato sullo schermo.
6. Una volta completato il percorso, puoi disattivare *CarPlay* scollegando il dispositivo dal sistema multimediale del tuo veicolo.

:::note
Tutte le categorie per la selezione del **punto finale del percorso**, *[Cronologia](#history), [POI](#poi-categories), [Segnalibri](#map-markers), [Cerca](#search), [Preferiti](#favorites) e [Tracce](#tracks)* possono contenere un numero di elementi inferiore a quello fornito dal sistema multimediale del tuo veicolo. In genere, nella maggior parte dei veicoli, gli elenchi sono limitati dinamicamente a 12 o 24 elementi. Ciò significa che l'elenco in *CarPlay* potrebbe non essere completo. Il numero totale di elementi e il numero effettivo di elementi visualizzati sono indicati sotto il nome della cartella.
:::


### Profilo CarPlay {#carplay-profile}

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*
![Impostazioni generali Profilo predefinito Android](@site/static/img/personal/profiles/CarPlay_ios.png)

Il **profilo CarPlay** è un profilo specifico nell'app OsmAnd per un uso conveniente del sistema audio e video della tua auto per la successiva visualizzazione di questi dati sul tuo telefono.

Questo profilo viene utilizzato finché il tuo dispositivo è connesso a *CarPlay*. Tocca il campo *Profilo CarPlay* nel menu *Impostazioni OsmAnd* e dall'elenco dei [profili abilitati all'uso](../personal/profiles.md) seleziona il profilo con cui verrà attivato *CarPlay*.

Non puoi selezionare un profilo direttamente in *CarPlay* dallo schermo del veicolo. Per prima cosa, seleziona il profilo richiesto sul tuo dispositivo e associa il *profilo CarPlay* ad esso. Dovresti selezionare un profilo che corrisponda al tipo di veicolo, come *Guida*, *Camion*, *Auto*, *Moto* o *Ciclomotore*. **L'app si attiverà automaticamente** il *profilo CarPlay* quando connessa a un veicolo.

**Perché è importante selezionare il profilo appropriato per il tuo tipo di veicolo.**

- **Sicurezza di guida.** Diversi tipi di trasporto richiedono informazioni e impostazioni diverse durante la guida. Ad esempio, i camionisti possono essere limitati in altezza, peso e larghezza dei loro veicoli, quindi il profilo *Camion* fornisce loro restrizioni e linee guida appropriate. Mentre ciclisti e motociclisti hanno bisogno di informazioni su piste ciclabili e percorsi, senza dati per i camion.
- **Utilità ed efficienza.** La navigazione dovrebbe essere personalizzata per soddisfare le esigenze di un particolare mezzo di trasporto. Ciò consente agli utenti di ridurre il tempo necessario per trovare percorsi ottimali ed evitare restrizioni di traffico non necessarie.


## Seleziona un punto finale del percorso {#select-a-route-endpoint}

Puoi selezionare [POI](../map/point-layers-on-map.md#points-of-interest-pois) precedentemente impostati e aggiunti, o [Preferiti](../personal/favorites.md), o [Segnalibri](../personal/markers.md) come punto di destinazione. È anche possibile selezionare una [Traccia](../personal/tracks/index.md) registrata o scaricata per il percorso, utilizzare la [Ricerca](../search/index.md) o selezionare una destinazione dalla [Cronologia](../search/search-history.md) del percorso.

1. Se desideri una posizione particolare sulla mappa come punto finale, seleziona la categoria appropriata di punti dall'elenco, [POI](#poi-categories), [Preferiti](#favorites) o [Segnalibri mappa](#map-markers).

    - Tutte le categorie possono contenere un numero di elementi inferiore a quello fornito dal sistema multimediale del tuo veicolo. Ciò significa che l'elenco in *CarPlay* potrebbe essere incompleto e tutte le altre cartelle sono disponibili solo nell'app OsmAnd sul tuo dispositivo.
    - La cartella [Ultima modifica](#folder-last-modified) contiene un elenco delle destinazioni recenti, ordinate per data di aggiunta o modifica.
    - L'elenco di tutte le altre cartelle è ordinato per l'aggiornamento più recente, le nuove cartelle sono in cima all'elenco. Non è possibile modificarne l'ordine manualmente.
    - L'elenco dei punti all'interno delle cartelle è ordinato per distanza da essi, a partire dal più vicino. Ogni punto ha un nome o coordinate, un'icona sagomata (colore e icona impostati per impostazione predefinita o scelti da te nell'applicazione OsmAnd) e la distanza dal punto della posizione corrente ad esso.
2. Seleziona la categoria [Cronologia](#history) per trovare una delle destinazioni recenti che sono memorizzate nella memoria del dispositivo.
3. Seleziona [Cerca](#search) per inserire una destinazione dalle categorie di ricerca disponibili.

:::note
Durante la guida, i punti selezionati possono essere [annunciati](#voice-prompts) quando ti avvicini o li superi. Consulta le impostazioni dei [suggerimenti vocali](../navigation/guidance/voice-navigation.md) nell'articolo appropriato per impostare le notifiche vocali.
:::


### Cronologia {#history}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car_play_history.png)

Nella **categoria Cronologia**, puoi selezionare una destinazione da un elenco di punti finali.

- Sono ordinati per utilizzo più recente, a partire dai più nuovi.
- Questo può essere conveniente per un rapido accesso ai percorsi utilizzati frequentemente.
- Per sapere come utilizzare o eliminare una destinazione, leggi l'articolo [Cronologia ricerche](../search/search-history.md).


### Categorie POI {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi_1.png').default} alt="CP"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi.png').default} alt="CP"/></td>
    </tr>
</table>

I *POI (Punti di interesse)* sono un tipo di punti che identificano luoghi o oggetti sulla mappa importanti o di interesse per gli utenti. Sono evidenziati da icone speciali fornite nelle [impostazioni di OsmAnd](../map/point-layers-on-map.md#poi-types) e ordinati in gruppi.

Per costruire un percorso verso un *POI* in *CarPlay*, segui questi passaggi:

1. Seleziona il *POI* necessario dall'elenco delle categorie disponibili, o inserisci il nome del POI utilizzando la [Ricerca](#search).
2. OsmAnd calcola il percorso e lo visualizza sulla *schermata CarPlay*. Tocca il pulsante **Avvia** per iniziare la navigazione verso quella posizione.
3. A seconda delle impostazioni dell'app OsmAnd e del tuo veicolo, potresti ricevere [suggerimenti vocali](#voice-prompts) per guidarti verso la tua destinazione.
4. Quando arrivi alla posizione, l'app ti avviserà che hai raggiunto il *POI*.


### Preferiti {#favorites}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car-play-favorites(1).png)

**Preferiti** è una delle funzionalità di OsmAnd che ti consente di creare una sorta di note sulla mappa.

- Durante l'utilizzo di **CarPlay**, non puoi aggiungere o modificare i *Preferiti*, solo utilizzare quelli esistenti.
- L'elenco dei [Preferiti](../personal/favorites.md#manage-favorites) si trova nell'app OsmAnd *Menu → I miei luoghi → Preferiti*.
- Se desideri utilizzarli per la navigazione, configura tutto ciò di cui hai bisogno prima di collegare il dispositivo al sistema multimediale del tuo veicolo.


### Segnalibri mappa {#map-markers}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car-play-markers(1).png)

- Per definire la tua destinazione finale come *Segnalibro mappa*, devi prima creare il numero richiesto di segnalibri nell'app OsmAnd sul tuo dispositivo prima di collegarlo al sistema multimediale del veicolo.
- I *Segnalibri* devono essere disponibili nell'elenco *Menu → Segnalibro mappa*.
- Questo è descritto in modo più dettagliato nell'articolo [Segnalibri](../personal/markers.md).


### Tracce {#tracks}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car-play-tracks(1).png)

Per costruire un percorso verso una destinazione, puoi selezionare una traccia esistente disponibile nell'app OsmAnd. La traccia può essere [scaricata](../personal/tracks/manage-tracks.md#import) in anticipo, utilizzata come [registrata](../plugins/trip-recording.md) o creata in [Pianifica un percorso](../plan-route/create-route.md).

Dall'elenco delle tracce in *Menu → I miei luoghi → [Tracce](../personal/tracks/manage-tracks.md)*, seleziona quella richiesta prima di collegarti al sistema multimediale del veicolo, e il percorso si costruirà fino all'inizio della traccia o visualizzerà la direzione corrente lungo la traccia.

Le tracce possono anche essere selezionate direttamente sullo schermo del veicolo in *CarPlay*. Sono organizzate in cartelle che hai creato, e per un accesso facile e veloce alle tracce aperte di recente, c'è una cartella speciale [Ultima modifica](#folder-last-modified).


### Cerca {#search}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car-play-search(1).png)

Andando su **Cerca** ottieni un rapido accesso a un elenco della [cronologia delle destinazioni](#history) recenti. Allo stesso modo con il [menu Navigazione](../navigation/setup/route-navigation.md#navigation-menu), dove sono raccolti tutti i metodi di destinazione di OsmAnd come un indirizzo, POI o coordinate.

Puoi utilizzare lo *strumento di ricerca* per trovare il luogo richiesto sulla mappa per la pianificazione del percorso da qualsiasi categoria di ricerca disponibile.

- [Indirizzo](../search/search-address.md). Inizia a digitare l'indirizzo nel campo di ricerca.
- [POI](../search/search-poi.md) e [POI personalizzati](../search/search-poi.md). L'elenco dei nomi simili nelle vicinanze visualizzerà anche i POI o le loro categorie.
- [Ricerca coordinate](../search/search-address#coordinates-search). Inserisci le coordinate per trovare il punto sulla mappa.

#### Priorità di ricerca indirizzo {#address-search-priorities}

La funzione di ricerca di CarPlay dà priorità a strade e numeri civici quando **si cercano indirizzi**.

- Strade e numeri civici vengono visualizzati per primi quando si cerca un indirizzo. Ciò garantisce che le informazioni rilevanti sull'indirizzo vengano visualizzate prima di altre posizioni come strade o stazioni.
- Quando si cerca una città, le strade all'interno della città vengono visualizzate per prime, seguite dai numeri civici su quelle strade.


### Cartella Ultima modifica {#folder-last-modified}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car_play_last_modified.png)

Le categorie *Preferiti* e *Tracce* hanno una cartella speciale **Ultima modifica**. Poiché l'elenco in queste categorie può essere molto ampio in quanto contiene tutti i tuoi preferiti o tracce esistenti, questa cartella è necessaria per un accesso facile e veloce alle tue destinazioni più recenti.


## Funzionalità aggiuntive {#additional-features}

Oltre alle funzionalità di base dell'app OsmAnd in *CarPlay* che forniscono una navigazione conveniente nel tuo veicolo, ci sono una serie di funzionalità aggiuntive che migliorano la tua esperienza e rendono la navigazione più personalizzata, confortevole ed efficiente.


### Suggerimenti vocali {#voice-prompts}

La guida vocale per *CarPlay* è una delle funzionalità di navigazione più utili di OsmAnd, che fornisce indicazioni in tempo reale e consente al conducente di rimanere concentrato sulla strada. I suggerimenti vocali indicano chiaramente svolte, direzioni e altre istruzioni di navigazione, garantendo un utilizzo più sicuro e confortevole del sistema di navigazione.

Per configurare i suggerimenti vocali in base al profilo selezionato, devi farlo prima di avviare un percorso nell'app OsmAnd sul tuo dispositivo. Per vedere le impostazioni consigliate per *CarPlay*, vai all'articolo [Suggerimenti vocali / Notifiche](../navigation/guidance/voice-navigation.md).


### Annuncia messaggi di testo in arrivo {#announce-incoming-text-messages}

Puoi modificare le impostazioni di notifica per l'app OsmAnd nelle impostazioni di sistema del tuo dispositivo. Tocca *CarPlay*, quindi seleziona una delle seguenti voci:

- *Annuncia nuovi messaggi*
- *Silenzia nuovi messaggi*
- *Ricorda impostazione precedente*

Puoi anche abilitare o disabilitare l'annuncio dei messaggi direttamente in *CarPlay*. Leggi come è implementata la gestione delle notifiche su [iOS](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.) e [CarPlay](https://support.apple.com/en-gb/guide/iphone/iph9c8438165/ios).


### Widget di avviso schermo {#screen-alert-widget}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car-play-screen-alert(1).png)

Questo widget informativo combina tipi di avviso come **Attraversamenti pedonali** e **Limite di velocità**.

- I tipi di avviso hanno un aspetto diverso, che dipende dalla **<Translate android="true" ids="driving_region"/>** e può essere configurato in *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- In *Car Play* non è possibile impostare la visualizzazione degli avvisi, è necessario configurare il widget nell'applicazione prima di avviare la navigazione e collegare il dispositivo al veicolo.
- Per una descrizione dettagliata dei tipi di avviso, consulta [questo articolo](../widgets/nav-widgets.md#alert-types).
- Per impostare gli avvisi schermo per i profili disponibili, consulta l'articolo [Impostazioni di navigazione](../navigation/guidance/navigation-settings.md#screen-alerts).


### Tachimetro {#speedometer}

![Schermata CarPlay](@site/static/img/navigation/auto-car/speedometer_carplay_2_ios.png)

Il widget **Tachimetro** è un elemento dell'interfaccia integrato che visualizza la *velocità corrente* utilizzando i dati GPS e il *limite di velocità* dal [database OSM](https://wiki.openstreetmap.org/wiki/Key:maxspeed) e dalle [impostazioni di OsmAnd](../navigation/guidance/voice-navigation.md#speed-limit) sullo schermo del sistema multimediale del veicolo.

- Il **widget Tachimetro** è [*dipendente dal profilo*](../personal/profiles.md), quindi se modifichi le impostazioni per un profilo, non verranno applicate a un altro.
- Non è possibile impostare la visualizzazione del *Tachimetro* direttamente in *CarPlay*. È necessario configurarlo per il [profilo di navigazione](#carplay-profile) selezionato nell'applicazione OsmAnd prima di avviare la navigazione e collegare il dispositivo al veicolo.
- Per ulteriori informazioni su come aggiungere e configurare il widget *Tachimetro* al display, leggi l'articolo [Widget informativi](../widgets/info-widgets.md#speedometer).


### Aspetto mappa (3D) {#map-appearance-3d}

![Car Play](@site/static/img/navigation/auto-car/car_play_3.png)

L'app OsmAnd ti consente di utilizzare la visualizzazione mappa 3D sullo *schermo CarPlay* per visualizzare il tuo percorso e la navigazione.

- Il **pulsante 3D / 2D** viene visualizzato sullo *schermo CarPlay*.
- Puoi passare tra le modalità mappa 3D / 2D toccando questo pulsante.


### Dashboard multifunzione {#multifunction-dashboard}

![Car Play](@site/static/img/navigation/auto-car/car_play_4.png)

L'app OsmAnd può essere aperta e utilizzata per navigare in *CarPlay* sullo schermo del sistema multimediale del veicolo contemporaneamente con app musicali, di messaggistica o altre app di notifica.

- Configurazione della dashboard multifunzione su un telefono connesso a *CarPlay* o sullo schermo del sistema del tuo veicolo.
- Trova il pulsante Multi window e attivalo.


## Problema di controllo del volume {#volume-control-issue}

A volte *CarPlay* non si connette, o semplicemente non riesci a sentire nulla anche se è connesso. Altre volte, l'app OsmAnd non si apre correttamente in *CarPlay*. Possibili soluzioni:

1. Nella maggior parte dei casi, tutti i **segnali** rimangono a volume pieno costante, separatamente dalle impostazioni di riproduzione audio contemporaneamente. Per modificare il volume dei suggerimenti di navigazione di OsmAnd durante l'utilizzo di *CarPlay*, vai su *Impostazioni → Voce → Volume voce* sullo schermo del sistema multimediale del veicolo.
2. Riavvia il dispositivo.
3. Assicurati che *CarPlay* sia abilitato sul tuo iPhone. Per fare ciò:
   - Vai alle impostazioni del tuo telefono e quindi a *Generali*.
   - Vai a *CarPlay* nelle Impostazioni generali e seleziona *Le mie auto*. Qui puoi personalizzare la tua auto dimenticandola o riconnettendoti ad essa.
4. Assicurati che il tuo Bluetooth sia connesso.
5. Controlla il cavo USB.
6. Aggiorna regolarmente il tuo sistema operativo.
7. Controlla che *CarPlay* sia supportato nella tua [regione](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay).
8. Se utilizzi una VPN sul tuo iPhone, potrebbe impedire il funzionamento di *CarPlay*. Prova a disabilitare la VPN e verifica se questo aiuta *CarPlay* a funzionare.


## Articoli correlati {#related-articles}

- [Profili (Impostazioni)](../personal/profiles.md)
- [Importa / Esporta](../personal/import-export.md)

### Problemi comuni e soluzioni {#common-issues-and-solutions}

1. Domande comuni sulla schermata di connessione:
    - *Perché non riesco a controllare l'app dal mio telefono quando sono connesso a CarPlay?*
        Per motivi di sicurezza, lo schermo dell'app OsmAnd sul tuo telefono è bloccato mentre sei connesso a CarPlay. Puoi interagire con l'app solo tramite il display dell'auto.
    - *Posso disabilitare lo schermo bloccato e utilizzare l'app sul mio telefono?*
        No, CarPlay impone questa restrizione per prevenire distrazioni durante la guida.
    - *Cosa devo fare se il mio telefono e il display dell'auto sembrano disconnessi?*
        Assicurati che il tuo dispositivo sia collegato correttamente tramite USB o Bluetooth.
        Riavvia il sistema di infotainment della tua auto e l'app OsmAnd se la connessione è instabile.

> *Ultimo aggiornamento: Gennaio 2025*