---
source-hash: 2e2bedc5911717de92c663881adf7da2b32d2027a6c8127a8c9d02651753f230
sidebar_position: 10
title:  CarPlay
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

Per utilizzare *CarPlay* sullo schermo del veicolo, seguire questi passaggi:

1. *CarPlay* non è disponibile in tutti i paesi. Assicurarsi che sia supportato nel proprio [paese o regione](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay) e che *CarPlay* sia supportato nel proprio [modello di veicolo](https://www.apple.com/ios/carplay/available-models/).
2. [Collegare il dispositivo](https://support.apple.com/en-gb/HT203412) al sistema multimediale del veicolo tramite una porta USB o in modalità wireless con Wi-Fi o Bluetooth. Quando ci si connette per la prima volta, potrebbe essere necessaria l'autorizzazione per utilizzare *CarPlay* sul dispositivo.
3. Una volta connesso, l'*interfaccia di CarPlay* apparirà automaticamente sullo schermo del veicolo con tutte le app disponibili. Se la *schermata iniziale di CarPlay* non appare, selezionare il *logo di CarPlay* sul display del veicolo.  

### Interfaccia CarPlay {#carplay-interface}

*CarPlay* **non è una replica diretta** dell'app mobile OsmAnd. Ha un'interfaccia semplificata, incentrata sulle funzioni di navigazione essenziali per garantire una guida sicura. Alcune funzioni avanzate non sono supportate a causa di limitazioni della piattaforma.

### Schermata di connessione {#connection-screen}

![CarPlay](@site/static/img/navigation/auto-car/car_play_connect_screen.png)

Mentre il dispositivo è connesso a *CarPlay*, la mappa sulla schermata dell'app è bloccata. Si tratta di una funzione di sicurezza intenzionale per garantire che la navigazione sia controllata esclusivamente dal display dell'auto, riducendo al minimo le distrazioni durante la guida. Controllare le [domande comuni](#common-issues-and-solutions) sulla schermata di connessione.


### Interazione con la mappa {#interaction-with-the-map}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car-play-Interaction(1).png)

*CarPlay* visualizza l'interfaccia di OsmAnd adattata allo schermo del sistema multimediale del veicolo. L'interazione con la mappa è limitata a:  

- [La mia posizione](../widgets/map-buttons.md#my-location-and-zoom). Sposta la parte visibile della mappa in modo che la posizione corrente si trovi al centro dello schermo.
- [Zoom](../widgets/map-buttons.md#my-location-and-zoom). Consente di ingrandire e ridurre la parte visibile della mappa.


## Parametri di configurazione richiesti {#required-setup-parameters}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car-play-select-point-1.png)

- Innanzitutto, è necessario selezionare e configurare il profilo da utilizzare per la connessione a *CarPlay*. Per sapere come configurare un profilo, consultare l'articolo [Profili (Impostazioni)](../personal/profiles).  
    - Un profilo comodo per l'utilizzo di *CarPlay* può essere *Guida*, e il tipo di percorso può essere [Percorso in auto](../navigation/routing/car-based-routing.md).
    - OsmAnd ha una voce separata [Profilo CarPlay](#carplay-profile) per un accesso rapido all'elenco dei profili disponibili per la connessione a *CarPlay*.
- Per il funzionamento di OsmAnd, [collegare il dispositivo iOS](#overview) al sistema multimediale del veicolo. Per saperne di più su come collegare e configurare il dispositivo, è possibile visitare il sito web di [**CarPlay**](https://support.apple.com/en-us/HT205634).
- È necessario disporre di una delle [versioni a pagamento o in abbonamento di OsmAnd](../purchases/ios#free-and-paid-features). Controllare qui *Menu → Impostazioni → Acquisti*.
- Una volta connessi, è possibile impostare una destinazione e avviare la navigazione OsmAnd in *CarPlay*.  

:::note
Potrebbe essere necessaria una connessione a Internet per utilizzare OsmAnd in *CarPlay*. Se il dispositivo ha un accesso limitato a Internet, è possibile [*precaricare o creare percorsi*](../personal/tracks/manage-tracks.md) e utilizzarli senza Internet.
:::


### Avviare la navigazione {#start-navigation}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car-play-start(1).png)  

Per utilizzare la versione iOS dell'app OsmAnd in *CarPlay*, è necessario acquistare una [versione a pagamento dell'app o sottoscrivere un abbonamento](../purchases/ios#free-and-paid-features).  

1. Per creare un percorso, è necessario scegliere il [punto finale del percorso](#select-a-route-endpoint) sulla *schermata di CarPlay* o nell'[app OsmAnd](../navigation/setup/route-navigation.md).
2. È possibile utilizzare le [istruzioni vocali](#voice-prompts) per ascoltare le indicazioni o i messaggi sui problemi della strada.  
3. Dopo aver selezionato una località, premere **Avvia** per seguire il percorso.
4. Durante la guida, lo schermo del veicolo visualizzerà le informazioni di OsmAnd sulla posizione corrente sulla mappa, le indicazioni di guida, la distanza dalla svolta successiva, le corsie, l'ora di arrivo e la distanza dalla destinazione.
    ![Schermata CarPlay](@site/static/img/navigation/auto-car/car_play_navmode.png)  
5. Se si desidera modificare il percorso o selezionare una località diversa, è possibile premere il pulsante appropriato sullo schermo.
6. Una volta completato il percorso, è possibile disattivare *CarPlay* scollegando il dispositivo dal sistema multimediale del veicolo.

:::note
Tutte le categorie per la selezione del **punto finale del percorso**, *[Cronologia](#history), [POI](#poi-categories), [Indicatori](#map-markers), [Ricerca](#search), [Preferiti](#favorites) e [Tracce](#tracks)*, non possono contenere più elementi di quelli previsti dal sistema multimediale del veicolo. In genere, nella maggior parte dei veicoli, gli elenchi sono limitati dinamicamente a 12 o 24 elementi. Ciò significa che l'elenco in *CarPlay* potrebbe non essere completo. Il numero totale di elementi e il numero effettivo di elementi visualizzati sono indicati sotto il nome della cartella.
:::  


### Profilo CarPlay {#carplay-profile}

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*  
![Impostazioni generali Profilo predefinito Android](@site/static/img/personal/profiles/CarPlay_ios.png)

Il **profilo CarPlay** è un profilo specifico dell'app OsmAnd per un uso comodo del sistema audio e video dell'auto per la successiva visualizzazione di questi dati sul telefono.  

Questo profilo viene utilizzato finché il dispositivo è connesso a *CarPlay*. Toccare il campo *Profilo CarPlay* nel menu *Impostazioni OsmAnd* e dall'elenco dei [profili abilitati all'uso](../personal/profiles.md) selezionare il profilo con cui verrà attivato *CarPlay*.  

Non è possibile selezionare un profilo direttamente in *CarPlay* dalla schermata del veicolo. Innanzitutto, selezionare il profilo richiesto sul dispositivo e collegarvi il *profilo CarPlay*. È necessario selezionare un profilo che corrisponda al tipo di veicolo, come *Guida*, *Camion*, *Auto*, *Moto* o *Ciclomotore*. **L'app attiverà automaticamente** il *profilo CarPlay* quando viene collegata a un veicolo.

**Perché è importante selezionare il profilo appropriato per il proprio tipo di veicolo.**

- **Sicurezza di guida.** I diversi tipi di trasporto richiedono informazioni e impostazioni diverse durante la guida. Ad esempio, i camionisti possono essere limitati in altezza, peso e larghezza dei loro veicoli, quindi il profilo *Camion* fornisce loro restrizioni e linee guida appropriate. Mentre i ciclisti e i motociclisti hanno bisogno di informazioni sulle piste ciclabili e sui percorsi, senza dati per i camion.
- **Utilità ed efficienza.** La navigazione deve essere personalizzata per soddisfare le esigenze di un particolare mezzo di trasporto. Ciò consente agli utenti di ridurre il tempo necessario per trovare i percorsi ottimali e di evitare inutili restrizioni al traffico.


## Selezionare un punto finale del percorso {#select-a-route-endpoint}

È possibile selezionare [POI](../map/point-layers-on-map.md#points-of-interest-pois), [Preferiti](../personal/favorites.md) o [Indicatori](../personal/markers.md) precedentemente preimpostati e aggiunti come punto di destinazione. È anche possibile selezionare una [Traccia](../personal/tracks/index.md) registrata o scaricata per il percorso, utilizzare la [Ricerca](../search/index.md) o selezionare una destinazione dalla [Cronologia](../search/search-history.md) del percorso.

1. Se si desidera una particolare località sulla mappa come punto finale, selezionare la categoria di punti appropriata dall'elenco, [POI](#poi-categories), [Preferiti](#favorites) o [Indicatori mappa](#map-markers).  
  
    - Tutte le categorie non possono contenere più elementi di quelli previsti dal sistema multimediale del veicolo. Ciò significa che l'elenco in *CarPlay* potrebbe essere incompleto e tutte le altre cartelle sono disponibili solo nell'app OsmAnd sul dispositivo.
    - La cartella [Ultima modifica](#folder-last-modified) contiene un elenco delle destinazioni recenti, ordinate per data di aggiunta o modifica.
    - L'elenco di tutte le altre cartelle è ordinato in base all'aggiornamento più recente; le nuove cartelle si trovano in cima all'elenco. Non è possibile modificare manualmente il loro ordine.
    - L'elenco dei punti all'interno delle cartelle è ordinato in base alla distanza da essi, a partire dal più vicino. Ogni punto ha un nome o delle coordinate, un'icona sagomata (colore e icona impostati per default o scelti dall'utente nell'applicazione OsmAnd) e la distanza dal punto della posizione corrente ad esso.
2. Selezionare la categoria [Cronologia](#history) per trovare una delle destinazioni recenti memorizzate nella memoria del dispositivo.
3. Selezionare [Ricerca](#search) per inserire una destinazione dalle categorie di ricerca disponibili.

:::note
Durante la guida, i punti selezionati possono essere [annunciati](#voice-prompts) quando ci si avvicina o li si supera. Per impostare le notifiche vocali, consultare le impostazioni delle [Istruzioni vocali](../navigation/guidance/voice-navigation.md) nell'articolo appropriato.
:::


### Cronologia {#history}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car_play_history.png)  

Nella **categoria Cronologia**, è possibile selezionare una destinazione da un elenco di punti finali.

- Sono ordinati in base all'utilizzo più recente, a partire dai più nuovi.
- Questo può essere comodo per un accesso rapido ai percorsi utilizzati di frequente.
- Per sapere come utilizzare o eliminare una destinazione, leggere l'articolo [Cronologia delle ricerche](../search/search-history.md).


### Categorie di POI {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi_1.png').default} alt="CP"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi.png').default} alt="CP"/></td>
    </tr>
</table>

I *POI (Punti di Interesse)* sono un tipo di punti che identificano sulla mappa luoghi o oggetti importanti o di interesse per gli utenti. Sono evidenziati da icone speciali previste nelle [impostazioni di OsmAnd](../map/point-layers-on-map.md#poi-types) e ordinate in gruppi.  

Per creare un percorso verso un *POI* in *CarPlay*, seguire questi passaggi:

1. Selezionare il *POI* desiderato dall'elenco delle categorie disponibili o inserire il nome del POI utilizzando la [Ricerca](#search).
2. OsmAnd calcola il percorso e lo visualizza sulla *schermata di CarPlay*. Toccare il pulsante **Avvia** per avviare la navigazione verso quella località.
3. A seconda delle impostazioni dell'app OsmAnd e del veicolo, è possibile ricevere [istruzioni vocali](#voice-prompts) per guidare l'utente a destinazione.
4. Quando si arriva alla località, l'app notificherà che si è raggiunto il *POI*.


### Preferiti {#favorites}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car-play-favorites(1).png)  

**Preferiti** è una delle funzioni di OsmAnd che consente di creare una sorta di note sulla mappa.

- Durante l'utilizzo di **CarPlay**, non è possibile aggiungere o modificare i *Preferiti*, ma solo utilizzare quelli esistenti.
- L'elenco dei [Preferiti](../personal/favorites.md#manage-favorites) si trova nell'app OsmAnd *Menu → I miei luoghi → Preferiti*.
- Se si desidera utilizzarli per la navigazione, configurare tutto il necessario prima di collegare il dispositivo al sistema multimediale del veicolo.  


### Indicatori mappa {#map-markers}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car-play-markers(1).png)  

- Per definire la destinazione finale come *Indicatore mappa*, è necessario creare il numero di indicatori richiesto nell'app OsmAnd sul dispositivo prima di collegarlo al sistema multimediale del veicolo.
- Gli *Indicatori* devono essere disponibili nell'elenco *Menu → Indicatore mappa*.
- Questo è descritto in modo più dettagliato nell'articolo [Indicatori](../personal/markers.md).  


### Tracce {#tracks}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car-play-tracks(1).png)  

Per creare un percorso verso una destinazione, è possibile selezionare una traccia esistente disponibile nell'app OsmAnd. La traccia può essere [scaricata](../personal/tracks/manage-tracks.md#import) in anticipo, utilizzata come [registrata](../plugins/trip-recording.md) o creata in [Pianifica un percorso](../plan-route/create-route.md).  

Dall'elenco delle tracce in *Menu → I miei luoghi → [Tracce](../personal/tracks/manage-tracks.md)*, selezionare quella desiderata prima di connettersi al sistema multimediale del veicolo, e il percorso si svilupperà fino all'inizio della traccia o visualizzerà la direzione corrente lungo la traccia.  

Le tracce possono anche essere selezionate direttamente sullo schermo del veicolo in *CarPlay*. Sono organizzate in cartelle create dall'utente e, per un accesso facile e rapido alle tracce aperte di recente, esiste una cartella speciale [Ultima modifica](#folder-last-modified).


### Ricerca {#search}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car-play-search(1).png)  

Andando su **Ricerca** si accede rapidamente a un elenco della [cronologia delle destinazioni](#history) recenti. Analogamente al [menu Navigazione](../navigation/setup/route-navigation.md#navigation-menu), dove sono raccolti tutti i metodi di destinazione di OsmAnd, come indirizzo, POI o coordinate.  

È possibile utilizzare lo *strumento di ricerca* per trovare il luogo richiesto sulla mappa per la pianificazione del percorso da qualsiasi categoria di ricerca disponibile.

- [Indirizzo](../search/search-address.md). Iniziare a digitare l'indirizzo nel campo di ricerca.
- [POI](../search/search-poi.md) e [POI personalizzati](../search/search-poi.md). L'elenco dei nomi simili nelle vicinanze visualizzerà anche i POI o le loro categorie.
- [Ricerca per coordinate](../search/search-address#coordinates-search). Inserire le coordinate per trovare il punto sulla mappa.

:::note
È possibile selezionare un edificio specifico cercando il nome di una via e selezionandolo nella casella di ricerca in *CarPlay*. Tenere presente che l'elenco dei risultati è limitato a 25 elementi. Quindi, se l'edificio previsto non è presente, è necessario digitare il numero civico.
:::


### Priorità di ricerca degli indirizzi {#address-search-priorities}

La funzione di ricerca di CarPlay dà la priorità a vie e numeri civici quando si **cercano indirizzi**.

- Le vie e i numeri civici vengono visualizzati per primi quando si cerca un indirizzo. Ciò garantisce che le informazioni pertinenti sull'indirizzo vengano visualizzate prima di altri luoghi come strade o stazioni.
- Quando si cerca una città, vengono visualizzate prima le vie all'interno della città, seguite dai numeri civici di quelle vie.


### Cartella Ultima modifica {#folder-last-modified}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car_play_last_modified.png)

Le categorie *Preferiti* e *Tracce* hanno una cartella speciale **Ultima modifica**. Poiché l'elenco in queste categorie può essere molto ampio, in quanto contiene tutti i preferiti o le tracce esistenti, questa cartella è necessaria per un accesso facile e rapido alle destinazioni più recenti.


## Funzionalità aggiuntive {#additional-features}

Oltre alle funzioni di base dell'app OsmAnd in *CarPlay* che forniscono una comoda navigazione nel veicolo, esistono una serie di funzioni aggiuntive che migliorano l'esperienza e rendono la navigazione più personalizzata, comoda ed efficiente.  


### Istruzioni vocali {#voice-prompts}

La guida vocale per *CarPlay* è una delle funzioni di navigazione più utili di OsmAnd, che fornisce una guida in tempo reale e consente al conducente di rimanere concentrato sulla strada. Le istruzioni vocali indicano chiaramente le svolte, le direzioni e altre istruzioni di navigazione, garantendo un uso più sicuro e confortevole del sistema di navigazione.  

Per configurare le istruzioni vocali in base al profilo selezionato, è necessario farlo prima di avviare un percorso nell'app OsmAnd sul dispositivo. Per visualizzare le impostazioni consigliate per *CarPlay*, consultare l'articolo [Istruzioni vocali / Notifiche](../navigation/guidance/voice-navigation.md).  



### Widget di avviso su schermo {#screen-alert-widget}

![Schermata CarPlay](@site/static/img/navigation/auto-car/car-play-screen-alert(1).png)  

Questo widget informativo combina tipi di avvisi come **Attraversamenti pedonali** e **Limite di velocità**.

- I tipi di avvisi hanno un aspetto diverso, che dipende dalla **<Translate android="true" ids="driving_region"/>** e possono essere configurati in *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- In *Car Play* non è possibile impostare la visualizzazione degli avvisi, è necessario configurare il widget nell'applicazione prima di avviare la navigazione e collegare il dispositivo al veicolo.
- Per una descrizione dettagliata dei tipi di avviso, vedere [questo articolo](../widgets/nav-widgets.md#alert-types).
- Per impostare gli avvisi su schermo per i profili disponibili, vedere l'articolo [Impostazioni di navigazione](../navigation/guidance/navigation-settings.md#screen-alerts).


### Tachimetro {#speedometer}

![Schermata CarPlay](@site/static/img/navigation/auto-car/speedometer_carplay_2_ios.png)

Il widget **Tachimetro** è un elemento di interfaccia integrato che visualizza la *velocità attuale* utilizzando i dati GPS e il *limite di velocità* dal [database OSM](https://wiki.openstreetmap.org/wiki/Key:maxspeed) e dalle [impostazioni di OsmAnd](../navigation/guidance/voice-navigation.md#speed-limit) sullo schermo del sistema multimediale del veicolo.

- Il **widget Tachimetro** è [*dipendente dal profilo*](../personal/profiles.md), quindi se si modificano le impostazioni per un profilo, queste non verranno applicate a un altro.
- Non è possibile impostare la visualizzazione del *Tachimetro* direttamente in *CarPlay*. È necessario configurarlo per il [profilo di navigazione](#carplay-profile) selezionato nell'applicazione OsmAnd prima di avviare la navigazione e collegare il dispositivo al veicolo.
- Per ulteriori informazioni su come aggiungere e configurare il widget *Tachimetro* sul display, leggere l'articolo [Widget informativi](../widgets/info-widgets.md#speedometer).


### Aspetto della mappa (3D) {#map-appearance-3d}

![Car Play](@site/static/img/navigation/auto-car/car_play_3.png)

L'app OsmAnd consente di utilizzare la visualizzazione della mappa 3D sulla *schermata di CarPlay* per visualizzare il percorso e la navigazione.

- Il **pulsante 3D / 2D** viene visualizzato sulla *schermata di CarPlay*.
- È possibile passare dalla modalità mappa 3D a quella 2D toccando questo pulsante.


### Cruscotto multifunzione {#multifunction-dashboard}

![Car Play](@site/static/img/navigation/auto-car/car_play_4.png)

L'app OsmAnd può essere aperta e utilizzata per navigare in *CarPlay* sullo schermo del sistema multimediale del veicolo contemporaneamente alle app di musica, messaggi o altre notifiche.

- Impostazione del cruscotto multifunzione su un telefono collegato a *CarPlay* o sullo schermo del sistema del veicolo.
- Trovare il pulsante Multi finestra e attivarlo.

## Impostazioni {#settings}

### Annunciare i messaggi di testo in arrivo {#announce-incoming-text-messages}

È possibile modificare le impostazioni di notifica per l'app OsmAnd nelle impostazioni di sistema del dispositivo. Toccare *CarPlay*, quindi selezionare una delle seguenti voci:

- *Annuncia nuovi messaggi*
- *Silenzia nuovi messaggi*
- *Ricorda impostazione precedente*

È anche possibile abilitare o disabilitare l'annuncio dei messaggi direttamente in *CarPlay*. Leggere come viene implementata la gestione delle notifiche su [iOS](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.) e [CarPlay](https://support.apple.com/en-gb/guide/iphone/iph9c8438165/ios).

### Posizione in CarPlay {#location-position-in-carplay}

L'app OsmAnd per *CarPlay* consente di regolare la posizione dell'indicatore della posizione corrente sullo schermo per evitare di sovrapporre il percorso e altri dettagli importanti della mappa.

**Come modificare la posizione dell'indicatore:**

- Andare su *Menu → Configura schermo → Altro → [Posizione sullo schermo](../widgets/configure-screen.md#display-position-location-position-on-screen)*.
- Selezionare il posizionamento preferito:
    - **Automatico (predefinito)**. L'applicazione sposta automaticamente la posizione dell'indicatore per la modalità di navigazione o il movimento libero.
    - **Centro**. L'indicatore è posizionato al centro dello schermo, adatto per la navigazione standard.
    - **In basso**. L'indicatore è posizionato più vicino alla parte inferiore dello schermo, rendendo più facile osservare gli oggetti circostanti e gli incroci complessi.


### Problema di controllo del volume {#volume-control-issue}

A volte *CarPlay* non si connette, o semplicemente non si sente nulla anche se è connesso. Altre volte, l'app OsmAnd non si apre correttamente in *CarPlay*. Possibili soluzioni:  

1. Nella maggior parte dei casi, tutti i **segnali** rimangono a volume pieno costante, separatamente dalle impostazioni di riproduzione audio allo stesso tempo. Per modificare il volume delle istruzioni di navigazione di OsmAnd quando si utilizza *CarPlay*, andare su *Configurazione → Voce → Volume voce* sullo schermo del sistema multimediale del veicolo.  
2. Riavviare il dispositivo.
3. Assicurarsi che *CarPlay* sia abilitato sull'iPhone. Per fare ciò:
   - Andare alle impostazioni del telefono e poi su *Generali*.
   - Andare su *CarPlay* nelle Impostazioni generali e selezionare *Le mie auto*. Qui è possibile personalizzare l'auto dimenticandola o ricollegandola.
4. Assicurarsi che il Bluetooth sia connesso.
5. Controllare il cavo USB.
6. Aggiornare regolarmente il sistema operativo.
7. Verificare che *CarPlay* sia supportato nella propria [regione](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay).
8. Se si utilizza una VPN sull'iPhone, potrebbe impedire il funzionamento di *CarPlay*. Provare a disabilitare la VPN e vedere se questo aiuta *CarPlay* a funzionare.


## Articoli correlati {#related-articles}

- [Profili (Impostazioni)](../personal/profiles.md)
- [Importa / Esporta](../personal/import-export.md)

### Problemi comuni e soluzioni {#common-issues-and-solutions}

1. Domande comuni sulla schermata di connessione:
    - *Perché non posso controllare l'app dal mio telefono quando sono connesso a CarPlay?*  
        Per motivi di sicurezza, la schermata dell'app OsmAnd sul telefono è bloccata mentre si è connessi a CarPlay. È possibile interagire con l'app solo attraverso il display dell'auto.
    - *Posso disabilitare la schermata di blocco e utilizzare l'app sul mio telefono?*  
        No, CarPlay impone questa restrizione per evitare distrazioni durante la guida.
    - *Cosa devo fare se il mio telefono e il display dell'auto sembrano scollegati?*  
        Assicurarsi che il dispositivo sia correttamente collegato tramite USB o Bluetooth.  
        Riavviare il sistema di infotainment dell'auto e l'app OsmAnd se la connessione è instabile.