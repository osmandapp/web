---
source-hash: 7383905bb345c0cfdbf50ed15d18aae91b8bc80311e03ee2f6696d7066e7903f
sidebar_position: 7
title: Azione Rapida (Pulsanti personalizzati)
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

Il widget Azione Rapida è un elemento interattivo dell'interfaccia utente che fornisce un accesso rapido a funzioni o azioni chiave senza aprire impostazioni aggiuntive. Questo widget è posizionato sulla schermata principale della mappa e consente di semplificare e velocizzare l'interazione con l'applicazione, rendendola più comoda ed efficiente.

![Widget Azione Rapida](@site/static/img/widgets/quick_action_widget.png)


## Widget Azione Rapida {#quick-action-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Widget Azione Rapida_android](@site/static/img/widgets/quick_action_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Widget Azione Rapida_ios](@site/static/img/widgets/quick_action_widget_ios.png)

</TabItem>

</Tabs>

Per utilizzare il pulsante Azione Rapida, devi prima abilitare questo widget.

<!--
- To open the Quick action menu, just tap the button.
- By default, the Quick action button will appear on the right corner (above the zoom buttons), but it can be moved to any part of the screen by long tapping it. -->


### Aggiungi ed elimina azioni {#add-and-delete-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/> → Tocca Elimina (icona Cestino nell'angolo in alto a destra) → Seleziona azioni*

![Widget Azione Rapida_android_add](@site/static/img/widgets/quick_action_widget_andr.png) ![Pulsante personalizzato Android](@site/static/img/widgets/add_action_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/> → Tocca Modifica (icona Matita nell'angolo in alto a destra) → Seleziona azioni*

![Widget Azione Rapida_ios_add](@site/static/img/widgets/quick_action_widget_2_ios.png) ![Pulsante personalizzato Android](@site/static/img/widgets/add_action_screen_ios.png)

</TabItem>

</Tabs>

Tutte le azioni sono organizzate nel menu **Aggiungi azione** e raggruppate per tipo. Un elenco completo delle azioni e delle loro descrizioni si trova nella sezione [Tipi di azione](#action-types).

È possibile assegnare una o più [azioni](#action-types) al pulsante di azione rapida. Esistono due modi per aggiungere azioni.

- **Nella schermata Configura**. Seleziona un pulsante dall'elenco e tocca il pulsante "**＋**". Devi prima selezionare il [tipo di azione](#action-types), quindi cambiarne il nome e i [parametri](#actions-in-loop).
- **Nel pannello del pulsante di azione rapida**. Tocca il *pulsante Azione Rapida* nella schermata della mappa. Alla fine dell'elenco, nell'ultima schermata del pannello, si trova la casella "**＋**" *Aggiungi azione*. Toccala e seleziona un'azione dall'[elenco dei tipi](#action-types).


:::note

- Ogni azione deve avere un nome univoco.
- Le schermate, etichettate numericamente come Schermata 1, Schermata 2, ecc., vengono create automaticamente quando il numero di azioni nell'elenco aumenta a 6 elementi.

:::


### Parametri di azione {#action-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget Azione Rapida_android_order](@site/static/img/widgets/quick_action_widget_android_order.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget Azione Rapida_ios_order](@site/static/img/widgets/quick_action_widget_ios_order.png)

</TabItem>

</Tabs>

Le azioni assegnate a un pulsante di azione rapida sono raggruppate in schermate. Questi gruppi di azioni vengono aperti quando si tocca quel pulsante sulla mappa. Nuove schermate vengono create automaticamente quando l'elenco delle azioni supera i *6 elementi*. È possibile riorganizzare le azioni in base alle proprie preferenze seguendo questi passaggi:

**Per Android**.

1. Tramite la schermata di configurazione:

    - Vai a *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*.
    - Usa *Tieni premuto e trascina* sull'icona delle due linee verticali per riorganizzare le azioni.

2. Tramite il menu di azione rapida:

    - Apri il menu di azione rapida, quindi tocca a lungo *Aggiungi azione*.
    - Usa *Tieni premuto e trascina* sull'icona delle due linee verticali per riorganizzare le azioni.

**Per iOS**.

- Naviga a *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>*.
- Tocca *Modifica* (icona a matita), quindi *Tieni premuto e trascina* sull'icona delle tre linee verticali per riorganizzare le azioni.

#### Azioni in loop {#actions-in-loop}

![Pulsante personalizzato Android](@site/static/img/widgets/actions_in_loop_andr.png)

Per alcune azioni, è possibile assegnare un elenco di livelli che cambieranno in un ciclo ad ogni tocco: *Sorgente mappa*, *Stile mappa*, *Sovrapposizione*, *Sottostrato*, *Schema colori terreno*, *Aggiungi profilo*.

Il pulsante consente di assegnare un singolo livello o un elenco di livelli che cambiano circolarmente quando toccati o con una finestra di dialogo intermedia.

- **Mostra una finestra di dialogo intermedia**. Visualizza una finestra di dialogo con un elenco di mappe.
- **Non mostrare una finestra di dialogo intermedia**. Le sorgenti della mappa cambiano in un ordine definito.


### Cambia posizione sulla mappa {#change-position-on-the-map}

Il widget *Azione Rapida* appare nell'angolo inferiore della schermata della mappa quando lo abiliti per la prima volta. Puoi spostare il widget in qualsiasi parte dello schermo tenendolo premuto e trascinandolo. Per un posizionamento preciso e accurato dei pulsanti sulla schermata della mappa, essi vengono automaticamente allineati alla posizione della griglia invisibile più vicina quando trascinati.

- **Aspetto iniziale**. Per impostazione predefinita, il widget di azione rapida è posizionato nell'angolo in basso a destra dell'interfaccia della mappa.

    ![Vista widget Azione Rapida](@site/static/img/widgets/quick_action_widget_view.png)

- **Sposta il widget**. Tenendo premuto a lungo e trascinando il widget, puoi riposizionarlo sullo schermo, con allineamento automatico di colonne e righe.

    ![Tocca widget Azione Rapida](@site/static/img/widgets/quick_action_widget_tap.png)

- **Nuovo posizionamento**. Una volta spostato, il widget rimarrà nella sua nuova posizione sulla schermata della mappa fino a quando non verrà nuovamente regolato manualmente.

    ![Sposta widget Azione Rapida](@site/static/img/widgets/quick_action_widget_move.png)

- **Più [Pulsanti personalizzati](#custom-buttons)**. È possibile aggiungere più pulsanti di azione rapida alla schermata della mappa. Questi pulsanti possono anche essere personalizzati e riposizionati individualmente utilizzando lo stesso metodo di trascinamento.

    ![Sposta widget Azione Rapida](@site/static/img/widgets/quick_action_widget_multi.png)


### Pulsanti personalizzati {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate android="true" ids="add_button"/>*

![Pulsante personalizzato Android](@site/static/img/widgets/custom_button_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*

![Pulsante personalizzato Android](@site/static/img/widgets/custom_button_ios.png)

</TabItem>

</Tabs>

I **pulsanti personalizzati** sono pulsanti aggiuntivi sulla mappa che agiscono allo stesso modo del pulsante *Azione rapida*. È possibile creare un pulsante con una o più azioni e visualizzarlo sulla schermata della mappa. I pulsanti personalizzati si trovano nell'elenco *Configura schermata → Pulsanti → Pulsanti personalizzati*. Ogni pulsante ha un elenco di azioni indipendente dal profilo e dovrebbe avere un ***Nome*** univoco, tuttavia, un pulsante può essere attivato/disattivato individualmente per ogni **profilo**.

Tutte le [azioni](#action-types) disponibili sono identiche a quelle che possono essere applicate all'azione rapida predefinita. I pulsanti personalizzati possono essere configurati come pulsanti ***Azione singola***, che applicano l'azione selezionata immediatamente dopo essere stati toccati, senza la necessità di navigare attraverso un menu aggiuntivo.


### Aspetto del pulsante Azione Rapida {#quick-action-button-appearance}

<InfoAndroidOnly/>

![Aspetto del pulsante Azione Rapida](@site/static/img/widgets/qa_button_appearance_andr.png)

È possibile modificare l'aspetto dei pulsanti Azione Rapida tramite: *Menu → Configura schermata → Pulsanti personalizzati → Azione rapida → menu a tre punti → Aspetto*. Questa impostazione offre opzioni per personalizzare le dimensioni, la forma, l'icona e l'opacità dello sfondo del pulsante, offrendo un maggiore controllo su come i pulsanti appaiono sullo schermo.

Per le impostazioni di personalizzazione dettagliate, fare riferimento all'articolo [Configura schermata](../widgets/configure-screen.md#button-appearance), dove è possibile imparare come ottimizzare l'aspetto di ogni pulsante per soddisfare le proprie preferenze.


## Tipi di azione {#action-types}

### Configura mappa {#configure-map}

| Azione | Descrizione |
|:-------------|:-------------|
| Mostra / Nascondi <br/> [**Percorsi**](../map/vector-maps.md#routes) | Puoi selezionare i tipi di percorso per abilitare o disabilitare la loro visualizzazione. <br/> Alcuni percorsi hanno impostazioni aggiuntive. Per impostazione predefinita, se non hai selezionato nulla nel menu [Configura mappa](../map/configure-map-menu.md), verrà assegnato il primo tipo di percorso dall'elenco, altrimenti verrà assegnato un tipo a tua scelta. Puoi leggere di più nell'articolo [Percorsi](../map/routes.md). <br/> - ***Percorsi ciclabili*** &nbsp;(*Percorso*, *Reti di nodi*) <br/> - ***Percorsi mountain bike*** &nbsp;(*Scala MTB*, *IMBA*) <br/> - ***Percorsi escursionistici*** &nbsp;(*OSMC*, *Affiliazione alla rete*, *Reti di nodi*) <br/> - ***Difficoltà dei sentieri escursionistici*** &nbsp;(*Scala SAC*, *Scala CAI*) <br/> - ***Piste da sci*** <br/> - ***Percorsi a cavallo*** <br/> - ***Sport acquatici*** <br/> - ***Percorsi di corsa*** <br/> - ***Percorsi fitness*** <br/> - ***Percorsi di viaggio*** &nbsp;(*Tracce*, *Libri di viaggio*, *Punti*) <br/> |
| Mostra / Nascondi <br/> [**Livelli topografici**](../plugins/topography.md#overview) | Tutti i dati topografici sono presentati come livelli di mappa separati. Puoi cambiare rapidamente la visibilità di questi livelli con Azione Rapida. <br/> - ***Linee di contorno*** <br/> - ***Terreno*** &nbsp;(*A seconda del livello selezionato nel menu [Configura mappa](../map/configure-map-menu.md)*, *Ombreggiatura*, *Pendenza*, o *Altitudine* *verranno visualizzati.*) |
| Cambia <br/> [**Schema colori terreno**](../plugins/topography.md#modify-color-scheme) | Consente di selezionare una o più palette da un elenco di quelle esistenti, che cambieranno quando si tocca il pulsante. |
| Mostra / Nascondi <br/> [**Livelli meteo**](../plugins/weather.md#weather-layers) | Tutti i dati meteorologici sono presentati come livelli di mappa separati. Con Azione Rapida, puoi accedere rapidamente per cambiare la visibilità di questi livelli sulla mappa. <br/> - ***Livello precipitazioni*** <br/> - ***Livello nuvole*** <br/> - ***Livello pressione*** <br/> - ***Livello vento*** <br/> - ***Livello temperatura*** |
| Apri <br/> [**Schermata meteo**](../plugins/weather.md) <br /> *Solo Android* | Apre la [*schermata delle previsioni meteo*](../plugins/weather.md#weather-forecast-screen) con le informazioni dettagliate. |
| Mostra / Nascondi <br/> [**Preferiti**](../personal/favorites.md#view-on-the-map) | Mostra o nascondi i punti preferiti sulla mappa. |
| Mostra / Nascondi <br/> [**Tracce**](../personal/tracks/manage-tracks.md#track-menu) | Mostra o nascondi le ultime tracce visibili sulla mappa. |
| Mostra / Nascondi <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Abilita o disabilita la visualizzazione dei livelli POI con le categorie selezionate sulla mappa.<br/>È possibile selezionare più categorie POI. L'azione sostituisce le categorie POI dalla Configurazione Mappa selezionate senza utilizzare le Azioni Rapide. |
| Cambia <br/> [**Modalità mappa**](../map/vector-maps.md#map-mode) | Accesso rapido per passare dalla modalità giorno alla modalità notte. |
| Cambia <br/> [**<Translate ios="true" ids="quick_action_map_source_title"/>**](../map/raster-maps.md) | Il pulsante consente di assegnare una singola sorgente mappa o un elenco di sorgenti che cambiano circolarmente quando toccate o con una finestra di dialogo intermedia. <br/> - *Mostra una finestra di dialogo intermedia*. Visualizza una finestra di dialogo con un elenco di mappe. <br/> - *Non mostrare una finestra di dialogo intermedia*. Le sorgenti della mappa cambiano in un ordine definito. <br/> - *Nome visualizzato* - *Sorgente mappa* >. ">" dopo il nome della mappa indica quale sorgente mappa è attualmente selezionata. <br/> - *Nome visualizzato* - > *Prossima sorgente mappa*. ">" prima del nome della mappa indica quale sarà la prossima sorgente mappa selezionata se l'azione viene eseguita. <br/> - *Nota*. Per cambiare le sorgenti della mappa in OsmAnd, puoi impostare una singola azione rapida che ti consente di passare tra più sorgenti mappa, oppure creare diverse azioni rapide separate, ognuna per una specifica sorgente mappa. |
| Mostra / Nascondi <br /> [**Trasporto pubblico**](../map/vector-maps.md#transport) | Abilita o disabilita il livello della mappa del trasporto pubblico <br /> - *Tipo di trasporto*. Al primo tocco, puoi selezionare uno o più tipi di trasporto, inclusi *Fermate di trasporto*, *Percorsi di autobus, filobus e navette*, *Percorsi di tram e treni*, *Percorsi di metropolitana*. |
| Cambia <br/> [**<Translate ios="true" ids="map_settings_over"/>**](../map/raster-maps.md) | Crea un elenco di sorgenti mappa come sovrapposizione mappa e scorri tra di esse. <br /> - *Nota*. Per cambiare le sovrapposizioni mappa in OsmAnd, puoi impostare una singola azione rapida che ti consente di passare tra più sovrapposizioni mappa, oppure creare diverse azioni rapide separate, ognuna per una specifica sovrapposizione mappa. |
| Cambia <br/> [**<Translate ios="true" ids="map_settings_under"/>**](../map/raster-maps.md) | Crea un elenco di sorgenti mappa come sottostrato mappa e scorri tra di esse. <br /> - *Nota*. Per cambiare le sovrapposizioni mappa in OsmAnd, puoi impostare una singola azione rapida che ti consente di passare tra più sottostrati mappa, oppure creare diverse azioni rapide separate, ognuna per uno specifico sottostrato mappa. |
| Cambia <br/> [**<Translate android="true" ids="quick_action_map_style"/>**](../map/vector-maps.md#default-map-styles) | Crea un elenco di stili di mappa per le mappe vettoriali e scorri tra di essi. <br /> - *Nota*. Per cambiare gli stili di mappa in OsmAnd, puoi impostare una singola azione rapida che ti consente di passare tra più sovrapposizioni mappa, oppure creare diverse azioni rapide separate, ognuna per uno specifico stile di mappa. |
| Mostra / Nascondi <br/> [**Livello Mapillary**](../plugins/mapillary.md) | Consente di visualizzare i livelli della mappa con immagini a livello stradale fornite da Mapillary. |
| Mostra / Nascondi <br/> [**<Translate android="true" ids="osm_notes"/>**](../plugins/osm-editing.md) | Puoi selezionare di visualizzare o nascondere tutte le note OSM sulla mappa con un singolo tocco del pulsante. |


### Interfaccia {#interface}

| Azione | Descrizione |
|:-------------|:-------------|
| Naviga <br/> **Schermata precedente** | Un interruttore per navigare alla schermata precedente. |
| Mostra / Nascondi <br/> [**Vista navigazione**](../navigation/setup/route-navigation.md) | Attiva/disattiva la visibilità della schermata di navigazione. |
| Mostra / Nascondi <br/> [**Vista ricerca**](../search/search-all.md) | Apre o chiude la vista di ricerca. |
| Mostra / Nascondi <br/> [**Menu laterale**](../start-with/main-menu.md) | Attiva/disattiva la visibilità del menu laterale principale per accedere alle funzionalità principali. |
| Attiva / Disattiva <br/> [**Blocco schermo tattile**](../map/interact-with-map.md#touch-screen-lock) | Attiva o disattiva il blocco dello schermo tattile per evitare interazioni involontarie con lo schermo. |


### Interazioni con la mappa {#map-interactions}

| Azione | Descrizione |
|:-------------|:-------------|
| Mappa <br/> [**Zoom avanti**](../map/interact-with-map.md) | Ingrandimento della mappa con contemporaneo aumento della quantità di dati visualizzati. |
| Mappa <br/> [**Zoom indietro**](../map/interact-with-map.md) | Ridimensionamento della mappa. È comodo da usare con [Widget sviluppatore - Livello di zoom](../widgets/info-widgets.md#developer-widgets). |
| Sposta <br/> [**Mappa in basso**](../map/interact-with-map.md) | Puoi usare il pulsante di azione rapida per spostare la mappa in basso. |
| Sposta <br/> [**Mappa in alto**](../map/interact-with-map.md) | Quando toccata, la schermata della mappa si sposta in alto. |
| Sposta <br/> [**Mappa a sinistra**](../map/interact-with-map.md) | Quando tocchi il pulsante, la schermata della mappa si sposta a sinistra. |
| Sposta <br/> [**Mappa a destra**](../map/interact-with-map.md) | Con un pulsante di azione rapida, puoi spostare la mappa a destra. |
| Sposta <br/> [**Alla mia posizione**](../map/interact-with-map.md#my-location-and-zoom) | Sposta la mappa alla posizione *La mia posizione*. |


### I miei luoghi {#my-places}

| Azione | Descrizione |
|:-------------|:-------------|
| Avvia / Pausa <br/> [**Registrazione viaggio**](../plugins/trip-recording.md#new-track-recording) | Avvia una sessione di registrazione della traccia corrente o metti in pausa per fermarti temporaneamente senza completare il viaggio. |
| Avvia <br/> [**Nuovo segmento di viaggio**](../plugins/trip-recording.md#overview-screen) | Avvia un nuovo segmento del viaggio senza interrompere la registrazione complessiva. |
| Salva <br/> [**Viaggio registrato e continua**](../plugins/trip-recording.md#current-track-recording) | Salva la registrazione del viaggio corrente e continua a registrare senza interruzioni. |
| Termina <br/> [**Registrazione viaggio**](../plugins/trip-recording.md#current-track-recording) | Termina la sessione di registrazione del viaggio corrente. |
| Aggiungi <br/> [**Preferito**](../map/configure-map-menu.md#map-layers) | Aggiunge un preferito alla posizione selezionata (centrale) della mappa. <br /> - *Mostra una finestra di dialogo intermedia*. Visualizza una finestra di dialogo di conferma. <br /> - *Gruppo*. Aggiunge un preferito al gruppo selezionato. <br /> - *Colore*. Aggiunge un preferito con un colore preselezionato <br /> - *Nome*. Aggiunge un preferito con il prefisso del nome specificato. |
| Aggiungi <br/> [**Waypoint traccia**](../map/point-layers-on-map.md#track-waypoints) | Aggiunge un nuovo waypoint traccia alla [traccia attualmente in registrazione](../plugins/trip-recording.md) o a [qualsiasi traccia in I miei luoghi](../personal/tracks/manage-tracks.md). <br /> - *Mostra una finestra di dialogo intermedia*. Visualizza una finestra di dialogo di conferma. <br /> - *Gruppo*. Aggiunge un preferito al gruppo selezionato. <br /> - *Colore*. Aggiunge un preferito con un colore preselezionato <br /> - *Nome*. Aggiunge un preferito con il prefisso del nome specificato. |
| Aggiungi <br/> [**Indicatore mappa**](../map/configure-map-menu.md#map-layers) | Aggiunge un indicatore a una posizione selezionata (centrale) della mappa. |
| Aggiungi <br/> [**Parcheggio**](../plugins/parking.md) | Aggiunge un parcheggio a una posizione selezionata (centrale) della mappa. La vecchia posizione del parcheggio viene eliminata. |
| Aggiungi <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Aggiunge POI a una posizione selezionata (centrale) della mappa (come l'azione del menu contestuale). <br /> - *Mostra una finestra di dialogo intermedia*. Visualizza una finestra di dialogo di conferma. <br /> - *Tipo POI* (opzionale). Preseleziona il tipo POI OSM. <br /> - *Tag/Valore* (multiplo). Aggiunge tag/valori [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_Features) |
| Aggiungi <br/> [**Nota OSM**](../plugins/osm-editing.md#create--modify-osm-note) | Aggiunge una [nota OSM](https://wiki.openstreetmap.org/wiki/Notes) <br /> - *Mostra una finestra di dialogo intermedia*. Visualizza una finestra di dialogo di conferma. <br /> - *Messaggio*. Aggiunge un messaggio predefinito alla nota. |
| Aggiungi <br/> [**Note multimediali**](../plugins/audio-video-notes.md) | Avvia la registrazione di note audio/foto/video per una posizione selezionata (centrale) della mappa. |
| Crea <br/> [**Nuovo percorso**](../plan-route/create-route.md) <br /> *Solo Android* | Apre lo strumento [Pianifica un percorso](../plan-route/create-route.md) e crea un percorso per la posizione selezionata (centrale) sulla mappa. |


### Navigazione {#navigation}

| Azione | Descrizione |
|:-------------|:-------------|
| Aggiungi <br/> [**<Translate android="true" ids="quick_action_first_intermediate"/>**](../navigation/setup/route-navigation.md#intermediate-destinations) | Puoi selezionare il centro della schermata della mappa come primo punto intermedio. La destinazione precedente rimane la stessa. |
| Attiva / Disattiva <br/> [**Indicazioni vocali**](../navigation/guidance/voice-navigation.md) | Disattiva o riattiva le indicazioni vocali durante la navigazione. |
| Imposta <br/> [**Punto di partenza**](../navigation/setup/route-navigation.md#set-destinations) | Contrassegna una posizione selezionata (centrale) della mappa come punto di partenza. |
| Imposta <br/> [**Destinazione**](../navigation/setup/route-navigation.md#set-destinations) | Aggiungi la posizione selezionata (centrale) sulla mappa come destinazione. La destinazione precedente diventa l'ultimo punto intermedio. |
| Sostituisci <br/> [**Destinazione**](../navigation/setup/route-navigation.md#intermediate-destinations) | Imposta / Sostituisci una posizione selezionata (centrale) della mappa come destinazione. La destinazione precedente viene eliminata. |
| Attiva / Disattiva <br/> [**Mappa con zoom automatico**](../map/interact-with-map.md) | Abilita o disabilita lo zoom automatico della mappa durante la navigazione. |
| Avvia/arresta <br/> [**Navigazione**](../navigation/setup/route-navigation.md#start--stop-navigation) | Avvia la navigazione (se è presente un punto di destinazione) o arresta la navigazione. |
| Pausa / Riprendi <br/> [**Navigazione**](../navigation/setup/route-navigation.md#pause--resume-navigation) | Metti in pausa / Riprendi la navigazione. |
| Rimuovi <br/> [**Prossimo punto di destinazione**](../navigation/setup/route-navigation.md#intermediate-destinations) | Rimuove il prossimo punto intermedio, se presente, altrimenti rimuove la destinazione e visualizza la finestra di dialogo di fine navigazione. L'azione è inattiva se non hai alcuna destinazione. |
| Simula <br/> [**Posizione tramite GPX**](../plugins/development.md#gpx-track-simulation) | Simula la posizione e il movimento del tuo dispositivo utilizzando una traccia GPX. |


### Impostazioni {#settings}

| Azione | Descrizione |
|:-------------|:-------------|
| Cambia <br/> [**Profilo app**](../personal/profiles.md) | Crea un elenco di profili applicazione e scorri tra di essi. <br /> - *Mostra una finestra di dialogo intermedia*. Visualizza una finestra di dialogo con un elenco di profili. <br /> - *Non mostrare una finestra di dialogo intermedia*. I profili cambiano in un ordine definito. <br /> - *Nota*. Puoi personalizzare una singola azione che ti consente di passare tra più profili, oppure creare diverse azioni separate, ognuna per un profilo specifico. |
| Cambia <br/> [**Profilo app al successivo**](../personal/profiles.md) | Passa al profilo successivo nell'elenco. |
| Cambia <br/> [**Profilo app al precedente**](../personal/profiles.md) | Passa al profilo precedente nell'elenco. |
| Cambia <br/> [**<Translate android="true" ids="quick_action_display_position_in_center"/>**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> *Solo Android* | Consente di impostare il posizionamento del cursore *La mia posizione* sulla mappa. Abilita o disabilita il cursore per essere sempre al centro dello schermo. |
| Cambia <br/> [**Posizione sulla schermata**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> *Solo iOS* | Consente di abilitare o disabilitare la visualizzazione della posizione del cursore La mia posizione precedentemente selezionata sulla mappa. |


## Usa la tastiera per le azioni {#use-keyboard-for-actions}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Dispositivi esterni](@site/static/img/map/external_custom_2_andr.png)

Utilizzando la funzionalità dello strumento Azione Rapida, puoi assegnare le azioni richieste ai tasti del tuo dispositivo di input esterno. Una descrizione può essere trovata nell'articolo [Interagisci con la mappa](../map/interact-with-map.md#custom-input-device-type).


## Articoli correlati {#related-articles}

- [Configura schermata](./configure-screen.md)
- [Pulsanti mappa](./map-buttons.md)
- [Widget informativi](./info-widgets.md)
- [Widget di navigazione](./nav-widgets.md)
- [Righello radiale e righello](./radius-ruler.md)
- [Widget indicatore](./markers.md)

> *Ultimo aggiornamento: Aprile 2025*