---
source-hash: 5614ff96c05b150dc149ccfc7296cdeb953b69993517dcf326e81979e07d4a0f
sidebar_position: 1
title: Preparazione del percorso
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

La funzione **Preparazione del percorso** in OsmAnd fornisce una guida di navigazione passo-passo per vari [tipi di percorso](./../routing/osmand-routing.md#routing-types), inclusi [guida](./../routing/car-based-routing.md), [camminata](./../routing/pedestrian-routing.md), ciclismo, [equitazione](./../routing/horse-routing.md) e [sci](./../routing/ski-routing.md). Gli utenti possono personalizzare le impostazioni di navigazione, aggiungere destinazioni e ottimizzare i percorsi per l'efficienza.

:::tip

- La **navigazione offline** è abilitata per impostazione predefinita. Tuttavia, è possibile utilizzare anche [motori di routing online](./../routing/online-routing.md).

- **OsmAnd richiede l'autorizzazione** per accedere alla [posizione precisa](../../start-with/first-steps.md#permission-to-access-the-location) per una navigazione accurata. Abilitare questa opzione nelle impostazioni del dispositivo, se necessario.

:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Schermata di navigazione Android 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png) ![Schermata di navigazione Android 3](@site/static/img/navigation/route/navigation_by_route_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Schermata di navigazione iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png) ![Schermata di navigazione iOS 3](@site/static/img/navigation/route/navigation_by_route_ios_3.png)

</TabItem>

</Tabs>


## Imposta destinazioni {#set-destinations}

**Passaggio 1: Scarica le mappe.**

Prima di utilizzare la navigazione offline, assicurati che le [mappe richieste siano scaricate](../../start-with/download-maps.md). Vai su *Menu → Mappe e risorse → Scarica mappe* per installare le mappe per la tua regione.

**Passaggio 2: Configura i profili di navigazione.**

[Configura i profili](../../personal/profiles.md) che intendi utilizzare:

- Imposta i [parametri del veicolo](../guidance/navigation-settings.md#size-parameters) (*importante per i camionisti*), seleziona il [tipo di motore](../guidance/navigation-settings.md#fuel-used-by-motor) (*opzionale*).

- Configura l'[aspetto della linea del percorso](../guidance/map-during-navigation#route-line-appearance) (*opzionale*, disponibile per gli utenti Pro ([Android](../../purchases/android.md#pro-features-pro-features) / [iOS](../../purchases/ios.md#pro-features-pro-features))).

- Configura i [messaggi vocali](../guidance/voice-navigation.md).

**Passaggio 3: Imposta le destinazioni.**

1. Apri il [*menu di navigazione*](#navigation-menu):

    - Specifica il [punto di destinazione](#set-target-point).
    - Attendi che il percorso sia calcolato. Dopodiché, potrai ottenere informazioni aggiuntive sul tuo percorso nella sezione *[Dettagli](./route-details.md#overview)*.
    - Puoi passare tra diversi [tipi di routing](./../routing/osmand-routing.md#routing-types) (profili) per ottenere il miglior risultato.
    - Aggiungi [destinazioni intermedie](#intermediate-destinations) (opzionale).
    - Puoi anche cambiare il punto di partenza dalla [posizione corrente](../../map/interact-with-map#my-location-and-zoom) a quella richiesta.

2. Ulteriori [*impostazioni di navigazione*](#settings) possono essere utilizzate a seconda dei tuoi scopi (puoi configurare quali strade evitare o preferire, risparmiare carburante o scegliere il percorso più veloce, ecc.).

3. [Avvia](#start--stop-navigation) la navigazione o prima [simula la navigazione](#simulated-navigation) (con questa funzione puoi testare il tuo percorso prima di percorrerlo effettivamente).

4. Durante il percorso puoi [*Mettere in pausa/Riprendere*](#pause--resume-navigation) la navigazione e [*Interromperla*](#start--stop-navigation).


:::note

**Il percorso non può essere costruito quando la *[Mappa online](../../map/raster-maps.md#select-raster-maps)* è selezionata come sorgente della mappa.**

:::


### Menu di navigazione {#navigation-menu}

Ci sono 3 modi per raggiungere il menu di navigazione:

- Il [*pulsante di navigazione*](../../widgets/map-buttons.md#directions) sulla schermata della mappa.
- *Direzione da/a* in un [*menu contestuale della mappa*](../../map/map-context-menu.md#directions-to--from).
- Sezione Navigazione nel [*Menu principale*](../../start-with/main-menu.md) *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu di navigazione Android 1](@site/static/img/navigation/route/navigation_by_route_menu_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu di navigazione iOS 1](@site/static/img/navigation/route/navigation_by_route_menu_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="shared_string_my_location"/>** – Imposta la posizione di partenza (predefinita: [*La mia posizione attuale*](../../map/interact-with-map.md#my-location-and-zoom)).
- **<Translate android="true" ids="add_destination_point"/>** - Utilizza per [impostare il punto di destinazione](#set-target-point).
- **Aggiungi** &nbsp;&#43; - Inserisci [punti intermedi](../../widgets/nav-widgets.md#distance-to-intermediate) lungo il percorso.
- **Scambia** &nbsp;&#8595;&#8593; - Inverti i punti di *Partenza* e *Arrivo*.
- **Pulsante audio** - Disattiva i [messaggi vocali](../guidance/voice-navigation.md).
- **<Translate android="true" ids="shared_string_settings"/>** – [Regola](#settings) le preferenze del percorso e le restrizioni stradali.

Imposta la tua destinazione nel *menu Navigazione* usando:

- Punti preferiti speciali [Casa / Lavoro](#use-home-or-work-points).
- Percorso precedente o [Cronologia](../../personal/global-settings.md#history).
- Il pulsante **Annulla** riporta alla schermata principale.
- Il [pulsante Avvia](#start--stop-navigation) avvia la navigazione dopo che il calcolo del percorso è terminato.

### Seleziona il punto di partenza {#select-starting-point}

Per quanto riguarda il punto di partenza, puoi scegliere la tua posizione attuale, la posizione di un [punto preferito](../../map/point-layers-on-map.md#favorites), selezionare un punto sulla mappa o utilizzare la [Ricerca](../../search/index.md). Puoi anche impostare un punto di partenza nel [menu contestuale della mappa](../../map/map-context-menu.md) selezionando la funzione [Indicazioni da](../../map/map-context-menu.md#directions-to--from).

### Imposta il punto di destinazione {#set-target-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu di navigazione Android 2](@site/static/img/navigation/route/navigation_by_route_menu_andr_2.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Menu di navigazione iOS 2](@site/static/img/navigation/route/navigation_by_route_menu_ios_1.png)

</TabItem>

</Tabs>

La cosa più importante per avviare la navigazione è determinare la tua destinazione. Il punto di destinazione può essere trovato utilizzando una funzione di [*Ricerca*](../../search/index.md#overview), o semplicemente su una mappa. Puoi anche impostare il punto di destinazione nel [*menu di navigazione*](#navigation-menu):

- **<Translate android="true" ids="search_button"/>** - Apre il [menu di ricerca](../../search/index.md).
- **<Translate android="true" ids="shared_string_address"/>** - Apre il [menu di ricerca indirizzi](../../search/search-address.md).
- **<Translate android="true" ids="shared_string_select_on_map"/>** - Apre la mappa per scegliere un punto di destinazione toccando sulla mappa.
- **<Translate android="true" ids="shared_string_favorites"/>** - Permette di usare i [Preferiti](../../personal/favorites.md) come destinazione.
- **<Translate android="true" ids="shared_string_markers"/>** - Permette di scegliere uno dei [Segnaposto della mappa](../../personal/markers.md) come punto di destinazione.
- **Scambia punto di partenza e destinazione** &nbsp;&#8595;&#8593; - Permette di scambiare i punti di *Partenza* e *Arrivo*.


### Destinazioni intermedie {#intermediate-destinations}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigazione intermedia Android 1](@site/static/img/navigation/route/navigation_interpoints_1_andr.png) ![Navigazione intermedia Android 2](@site/static/img/navigation/route/navigation_interpoints_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigazione intermedia iOS 1](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_1.png) ![Navigazione intermedia iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_2.png)

</TabItem>

</Tabs>

- **&nbsp;&#x1F589;** - consente di aprire l'elenco dei punti di destinazione per apportare modifiche.
- **&nbsp;&#8592;** - torna alla schermata del menu di navigazione.
- **&nbsp;&#10005;** - consente di eliminare il punto di destinazione dall'elenco dei punti.
- **&nbsp;&#61;** - consente di modificare l'ordine dei punti nell'elenco dei punti.
- *&nbsp;&#43; Aggiungi* - apre il menu contestuale *Aggiungi intermedio*.
- *&nbsp;&#9776; Cancella tutto* - consente di cancellare tutti i punti intermedi.

Se scegli **Ordina** (*Android*) o **Opzioni** (*iOS*) nell'elenco delle destinazioni, raggiungerai opzioni speciali per regolare l'ordine di visita dei punti intermedi.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigazione intermedia Android 3](@site/static/img/navigation/route/navigation_interpoints_android_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigazione intermedia iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_3.png)

</TabItem>

</Tabs>

In questo menu puoi trovare opzioni aggiuntive per la gestione dei punti di destinazione:

- **<Translate android="true" ids="intermediate_items_sort_by_distance"/>** - OsmAnd offrirà il percorso più breve tra tutte le tue destinazioni, tuttavia, l'ordine di visita può essere modificato. Il punto di partenza e la destinazione finale non verranno modificati.

- **<Translate android="true" ids="switch_start_finish"/>** - Il punto di partenza e la destinazione finale verranno scambiati.

- **<Translate android="true" ids="reverse_all_points"/>** (*Solo Android*) - Tutti i punti verranno invertiti.

- **<Translate android="true" ids="add_intermediate_point"/> / <Translate ios="true" ids="add_waypoint_short"/>**. Puoi aggiungere destinazioni intermedie da questo menu.

- **<Translate android="true" ids="clear_all_intermediates"/>**. Tutte le destinazioni intermedie verranno rimosse dalla mappa.

### Usa i punti Casa o Lavoro {#use-home-or-work-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Preferiti speciali Android](@site/static/img/navigation/route/special_favorite_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Preferiti speciali iOS](@site/static/img/navigation/route/special_favorite_ios.png)

</TabItem>

</Tabs>

Le schede **Casa** e **Lavoro** (o [Punti speciali](../../personal/favorites.md#special-favorites-personal) per i Preferiti) possono essere utilizzate per impostare rapidamente i punti di destinazione nel menu di navigazione. Se non hai inserito gli indirizzi dei Preferiti speciali, queste celle rimarranno vuote. Se tocchi questo campo, ti verrà chiesto di creare questi POI.

### Cronologia dei percorsi precedenti {#history-of-previous-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Percorso precedente Android](@site/static/img/navigation/route/previous_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorso precedente iOS](@site/static/img/navigation/route/previous_ios.png)

</TabItem>

</Tabs>

Se la registrazione della [Cronologia di navigazione](../../personal/global-settings.md#history) è abilitata, è possibile utilizzare i percorsi o le destinazioni precedenti dall'elenco della cronologia per la navigazione. Questa opzione può essere utile per un accesso rapido ai percorsi usati frequentemente. Gli elementi nell'elenco della cronologia sono ordinati per utilizzo più recente, a partire dal più nuovo.

:::note

- Quando la [registrazione dei dati della Cronologia](../../personal/global-settings.md#history-options) è disabilitata, non ti verrà chiesto di utilizzare i percorsi precedenti per la navigazione.
- Puoi eliminare alcuni o tutti i record della cronologia relativi ai tuoi percorsi precedenti. Questo può essere fatto nella scheda *[Cronologia di navigazione](../../personal/global-settings.md#history-options)* dell'opzione Cronologia (*Menu → Impostazioni → Impostazioni OsmAnd → Cronologia*).

:::


## Avvia / Ferma la navigazione {#start--stop-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Avvio schermata di navigazione Android](@site/static/img/navigation/route/navigation_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Schermata di navigazione iOS](@site/static/img/navigation/route/navigation_start_ios.png)

</TabItem>

</Tabs>

Una volta selezionati i punti di inizio e fine, l'app creerà un percorso tra di essi utilizzando un profilo attivo. Il [profilo dell'app](../../personal/profiles.md) e il set di [widget](../../widgets/index.md) cambieranno solo una volta che si tocca il pulsante *Avvia* della navigazione.

- **Tocca Avvia** per iniziare la navigazione.
- [Metti in pausa](#pause--resume-navigation) la navigazione quando fai una pausa. (*Solo Android*)
- **Ferma** la navigazione selezionando **Ferma** (*Android*) o **Annulla** (*iOS*).

:::note Dettagli del percorso
Informazioni aggiuntive sul percorso creato, come altitudine, istruzioni passo-passo, strumento di analisi e altro, possono essere trovate nella sezione [**Dettagli**](../setup/route-details.md).
:::

### Ricalcolo del percorso {#route-recalculation}

Il percorso può essere ricalcolato automaticamente in caso di deviazione da esso. È possibile modificare i parametri del ricalcolo nelle [Impostazioni di navigazione](../guidance/navigation-settings.md#recalculate-route). È inoltre possibile disabilitare la notifica sul ricalcolo del percorso nelle impostazioni dei [Messaggi vocali](../guidance/voice-navigation.md#voice-settings).

### Metti in pausa / Riprendi la navigazione {#pause--resume-navigation}

<InfoAndroidOnly/>

Se vuoi fermarti per una pausa e deviare dal percorso per un breve periodo, puoi utilizzare la funzione *Metti in pausa/Riprendi* la navigazione per mettere in pausa i messaggi vocali e interrompere il ricalcolo del percorso.
Questa opzione è disponibile nella versione Android dell'app nell'*[Elenco notifiche](../guidance/voice-navigation.md#text-notifications)* o dal *[Menu azioni rapide](../../widgets/quick-action.md)*.

![Schermata di notifica Android](@site/static/img/navigation/route/navigation_pause_android.png)

Per riprendere la navigazione:

- Usa il messaggio di OsmAnd nella barra delle notifiche.
- Usa il *Menu azioni rapide* o la finestra di dialogo che appare quando tocchi il *[pulsante Navigazione](../../widgets/map-buttons.md#directions)* (vedi screenshot).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Riprendi navigazione Android](@site/static/img/navigation/route/navigation_menu_start_pause_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Riprendi navigazione iOS](@site/static/img/navigation/route/navigation_menu_start_pause_ios_1.png)

</TabItem>

</Tabs>

:::note
Quando **tocchi il pulsante Navigazione** mentre sei sul tuo percorso, la navigazione **non si ferma e i messaggi vocali continuano a essere riprodotti**, anche se le opzioni proposte Riprendi o Avvia potrebbero essere fuorvianti.
:::


### Suggerimenti per il risparmio energetico {#power-saving-tips}

La navigazione utilizza il GPS e l'elaborazione in background, il che può scaricare la batteria. Per ottimizzare l'utilizzo dell'energia:

- **Spegni lo schermo** affidandoti ai messaggi vocali.
- Abilita il [Controllo schermo](../guidance/voice-navigation.md#screen-control) (*solo Android*) in *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,turn_screen_on"/>*.


## Impostazioni {#settings}

![Preparazione del percorso Android](@site/static/img/navigation/route/navigation_menu_settings_andr.png)


### Impostazioni di navigazione {#navigation-settings}

Per accedere alle impostazioni di navigazione, segui uno dei passaggi seguenti:

- *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,app_mode_car,routing_settings_2"/>*.
- *Pulsante Navigazione → <Translate android="true" ids="shared_string_settings,routing_settings_2"/>*.
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
Non ci sono impostazioni di navigazione nel profilo *Sfoglia mappa*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di navigazione dei profili iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

- &nbsp;**<Translate android="true" ids="nav_type_hint"/>** determina come vengono calcolati i percorsi. Ad esempio, il tuo profilo bici ha un tipo di navigazione Ciclismo, che imposta le regole di routing. Puoi importare queste regole (come file routing.xml) in OsmAnd. Maggiori informazioni sul routing puoi leggere sulla nostra pagina [GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing).&nbsp;

- &nbsp;**<Translate android="true" ids="route_parameters"/>** controlla quali parametri verranno utilizzati durante il routing (questo è il processo di selezione di un percorso per la navigazione).

Si prega di leggere i parametri del percorso per il tipo di navigazione corrispondente.

Come configurare il [tipo di routing](../routing/osmand-routing.md#routing-types) e i [parametri del percorso](../guidance/navigation-settings.md#route-parameters) puoi leggere nell'[articolo sulle impostazioni di navigazione](../guidance/navigation-settings.md) o negli articoli sui tipi specifici di routing nella [sezione Parametri del percorso](../routing/osmand-routing.md#routing-types).

### Navigazione simulata {#simulated-navigation}

Lo strumento **Navigazione simulata** ti consente di visualizzare in anteprima un percorso prima di percorrerlo. Questo aiuta nella pianificazione, nella familiarizzazione e nel test del sistema di navigazione di OsmAnd.

#### Avvia / Ferma la simulazione {#start--stop-simulation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Simula navigazione Android](@site/static/img/navigation/route/simulate_navigation_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Simula navigazione iOS](@site/static/img/navigation/route/simulate_navigation_ios_1.png)

</TabItem>

</Tabs>

Quando viene costruito un percorso di navigazione, puoi iniziare a simulare la navigazione utilizzando l'opzione **<Translate android="true" ids="simulate_navigation"/>**.

- Nel [menu Navigazione](#navigation-menu) vai su *<Translate android="true" ids="shared_string_settings,simulate_navigation"/>*.
- Attiva l'interruttore per abilitare l'opzione.
- Tocca il pulsante [Avvia](#start--stop-navigation) navigazione per iniziare la simulazione.
- Per [Interrompere](#start--stop-navigation) la simulazione di navigazione, tocca **Interrompi** (*Android*) o **Annulla** (*iOS*).


#### Modalità velocità {#speed-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/> →* &#x2699

![Simula navigazione Android](@site/static/img/navigation/route/simulate_navigation_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/> →* &#x2699

![Simula navigazione iOS](@site/static/img/navigation/route/simulate_navigation_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="simulation_preview_mode_title"/>** - Accelera la simulazione su percorsi rettilinei, rallentando agli incroci.

- **<Translate android="true" ids="simulation_constant_mode_title"/>** - Funziona a velocità fissa.
- **<Translate android="true" ids="simulation_real_mode_title"/>**:
    - **Sui tratti rettilinei** della strada, la velocità sarà vicina alla velocità massima consentita.
    - **Agli incroci**, il simulatore ridurrà la velocità.
    - **Ulteriori penalità** verranno applicate a semafori, segnali di stop e altri ostacoli simili.


## Mappe mancanti o non sincronizzate {#maps-missing-or-not-synchronized}

Per costruire un percorso, tutte le **mappe necessarie** devono essere scaricate e avere la stessa data di rilascio. Si prega di notare che in alcune situazioni il messaggio di mappe mancanti potrebbe essere nascosto nel menu di preparazione del percorso. Se si trascina il menu di navigazione verso l'alto, si vedranno i possibili motivi per cui il percorso non è stato calcolato.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Messaggio nessuna mappa durante la costruzione della navigazione Android 5](@site/static/img/navigation/route/navigation_by_route_no_maps_5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Messaggio nessuna mappa durante la costruzione della navigazione iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_1_ios.png)
</TabItem>

</Tabs>

#### Mappe richieste {#required-maps}

Nella finestra di dialogo delle mappe richieste vedrai suggerimenti di mappe da scaricare o aggiornare. L'elenco delle mappe utilizzate potrebbe non essere preciso in quanto calcola un percorso molto basilare; per ottenere l'elenco preciso delle mappe puoi fare clic su **Calcola online**. Se selezioni **Usa mappe scaricate**, il calcolo del percorso tenterà di utilizzare le mappe già scaricate e salterà il messaggio di avviso.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Messaggio nessuna mappa durante la costruzione della navigazione Android](@site/static/img/navigation/route/navigation_by_route_no_maps_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Messaggio nessuna mappa durante la costruzione della navigazione iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_2_ios.png)

</TabItem>

</Tabs>


## Problemi e soluzioni comuni {#common-issues-and-solutions}

1. [Le possibili cause di un calcolo del percorso lento.](../../troubleshooting/navigation.md#route-calculation-is-slow)
2. [Cosa fare se la lunghezza del percorso supera i 250 chilometri.](../../troubleshooting/navigation.md#how-to-calculate-routes-longer-than-250km)
3. [Cosa fare se il percorso suggerito sembra errato.](../../troubleshooting/navigation.md#the-calculated-route-does-not-seem-correct)
4. [Come risolvere la situazione in cui la navigazione non è possibile a causa della mancanza delle mappe necessarie.](#maps-missing-or-not-synchronized)

Per ulteriori passaggi di risoluzione dei problemi, vedere [problemi di navigazione](../../troubleshooting/navigation.md).


## Articoli correlati {#related-articles}

- [Parametri del percorso](../routing/osmand-routing.md#routing-types)
- [Dettagli del percorso](./route-details.md)
- [Navigazione per traccia](./gpx-navigation.md)
- [Navigazione per marcatori](./markers-navigation.md)
- [Impostazioni di navigazione](../guidance/navigation-settings.md)
- [Schermata della mappa durante la navigazione](../guidance/map-during-navigation.md)
- [Messaggi vocali / Notifiche](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Ultimo aggiornamento: Febbraio 2025*