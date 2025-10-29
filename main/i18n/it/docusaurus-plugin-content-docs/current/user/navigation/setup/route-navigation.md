---
source-hash: 691bcbb90edd834e73f1ffc6ba4260189199bb0919291ba488372bdec72e2792
sidebar_position: 1
title:  Preparazione del percorso
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

La funzione **Preparazione del percorso** di OsmAnd fornisce una guida alla navigazione passo-passo per vari [tipi di percorso](./../routing/osmand-routing.md#routing-types), tra cui [guida](./../routing/car-based-routing.md), [camminata](./../routing/pedestrian-routing.md), ciclismo, [equitazione](./../routing/horse-routing.md) e [sci](./../routing/ski-routing.md). Gli utenti possono personalizzare le impostazioni di navigazione, aggiungere destinazioni e ottimizzare i percorsi per una maggiore efficienza.

:::tip

- La **navigazione offline** è abilitata per impostazione predefinita. Tuttavia, è anche possibile utilizzare [motori di calcolo percorso online](./../routing/online-routing.md).

- **OsmAnd richiede l'autorizzazione** per accedere alla [posizione precisa](../../start-with/first-steps.md#permission-to-access-the-location) per una navigazione accurata. Se necessario, abilitare questa opzione nelle impostazioni del dispositivo.

:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Schermata di navigazione Android 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png) ![Schermata di navigazione Android 3](@site/static/img/navigation/route/navigation_by_route_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Schermata di navigazione iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png) ![Schermata di navigazione iOS 3](@site/static/img/navigation/route/navigation_by_route_ios_3.png)

</TabItem>

</Tabs>


## Impostare le destinazioni {#set-destinations}

**Passo 1: Scaricare le mappe.**

Prima di utilizzare la navigazione offline, assicurarsi che le [mappe richieste siano state scaricate](../../start-with/download-maps.md). Andare su *Menu → Mappe e risorse → Scarica mappe* per installare le mappe della propria regione.

**Passo 2: Configurare i profili di navigazione.**

[Configurare i profili](../../personal/profiles.md) che si intende utilizzare:

- Impostare i [parametri del veicolo](../guidance/vehicle-parameters.md#size-parameters) (*importante per i camionisti*), selezionare il [tipo di motore](../guidance/vehicle-parameters.md#fuel-used-by-motor) (*opzionale*).

- Configurare l'[aspetto della linea del percorso](../guidance/map-during-navigation#route-line-appearance) (*opzionale*, disponibile per gli utenti Pro ([Android](../../purchases/android.md#pro-features) / [iOS](../../purchases/ios.md#pro-features))).

- Configurare le [istruzioni vocali](../guidance/voice-navigation.md).

**Passo 3: Impostare le destinazioni.**

1. Aprire il [*Menu di navigazione*](#navigation-menu):

    - Specificare il [punto di destinazione](#set-target-point).
    - Attendere il calcolo del percorso. Successivamente, sarà possibile ottenere informazioni aggiuntive sul percorso nella sezione *[Dettagli](./route-details.md#overview)*.
    - È possibile passare da un [tipo di percorso](./../routing/osmand-routing.md#routing-types) (profilo) all'altro per ottenere il risultato migliore.
    - Aggiungere [destinazioni intermedie](#intermediate-destinations) (opzionale).
    - È anche possibile cambiare il punto di partenza dalla [posizione corrente](../../map/interact-with-map.md#my-location-and-zoom) a quella desiderata.

2. A seconda delle proprie esigenze, è possibile utilizzare [*Impostazioni di navigazione*](#settings) aggiuntive (è possibile configurare quali strade evitare o preferire, risparmiare carburante o scegliere il percorso più veloce, ecc.).

3. [Avviare](#start--stop-navigation) la navigazione o prima [simulare la navigazione](#simulated-navigation) (con questa funzione è possibile testare il percorso prima di percorrerlo effettivamente).

4. Durante il percorso è possibile [*Mettere in pausa/Riprendere*](#pause--resume-navigation) la navigazione e [*Interromperla*](#start--stop-navigation).


:::note

**Il percorso non può essere costruito quando *[Mappa online](../../map/raster-maps.md#select-raster-maps)* è selezionata come fonte della mappa.**

:::


### Menu di navigazione {#navigation-menu}

Ci sono 3 modi per raggiungere il menu di navigazione:

- Il [*pulsante Navigazione*](../../widgets/map-buttons.md#directions) sulla schermata della mappa.  
- *Direzione da/a* in un [*menu contestuale della mappa*](../../map/map-context-menu.md#directions-to--from).  
- Sezione Navigazione nel [*Menu principale*](../../start-with/main-menu.md)  *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu di navigazione Android 1](@site/static/img/navigation/route/navigation_by_route_menu_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu di navigazione iOS 1](@site/static/img/navigation/route/navigation_by_route_menu_ios_2.png)  

</TabItem>

</Tabs>

- **<Translate android="true" ids="shared_string_my_location"/>** – Imposta la posizione di partenza (predefinita: [*La mia posizione attuale*](../../map/interact-with-map.md#my-location-and-zoom)).
- **<Translate android="true" ids="add_destination_point"/>** - Utilizzare per [impostare il punto di destinazione](#set-target-point).
- **Aggiungi** &nbsp;&#43; - Inserisce [punti intermedi](../../widgets/nav-widgets.md#distance-to-intermediate) lungo il percorso.
- **Scambia** &nbsp;&#8595;&#8593; - Inverte i punti di *Partenza* e *Arrivo*.
- **Pulsante Suono** - Disattiva le [istruzioni vocali](../guidance/voice-navigation.md).
- **<Translate android="true" ids="shared_string_settings"/>** – [Regola](#settings) le preferenze del percorso e le restrizioni stradali.

Impostare la destinazione nel *Menu di navigazione* utilizzando:

- Punti preferiti speciali [Casa / Lavoro](#use-home-or-work-points).
- Percorso precedente o [Cronologia](../../personal/global-settings.md#history).
- Il pulsante **Annulla** riporta alla schermata principale.
- Il [pulsante Avvia](#start--stop-navigation) avvia la navigazione al termine del calcolo del percorso.
  
### Selezionare il punto di partenza {#select-start-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Seleziona sulla mappa](@site/static/img/navigation/route/select_on_map.png)

Per quanto riguarda il punto di partenza, è possibile scegliere la posizione corrente, la posizione di un [punto Preferito](../../map/point-layers-on-map.md#favorites), selezionare un punto sulla mappa o utilizzare la [Ricerca](../../search/index.md). Quando si seleziona un punto sulla mappa, si apre una finestra di dialogo. La mappa è centrata con un indicatore, vengono visualizzate le coordinate del centro della mappa e si sposta la mappa sotto l'indicatore invece di toccare direttamente un punto. Per confermare, premere il pulsante *Seleziona*. È anche possibile impostare un punto di partenza nel [menu contestuale della mappa](../../map/map-context-menu.md) selezionando la funzione [Indicazioni da](../../map/map-context-menu.md#directions-to--from).  
</TabItem>

<TabItem value="ios" label="iOS">

![Seleziona sulla mappa iOS](@site/static/img/navigation/route/select_on_map_ios.png)

Per quanto riguarda il punto di partenza, è possibile scegliere la posizione corrente, la posizione di un [punto Preferito](../../map/point-layers-on-map.md#favorites), selezionare un punto sulla mappa o utilizzare la [Ricerca](../../search/index.md). Quando si seleziona un punto sulla mappa, è possibile spostare e ingrandire liberamente la mappa, quindi toccare la posizione desiderata. Una bandierina appare nel punto scelto. È anche possibile impostare un punto di partenza nel [menu contestuale della mappa](../../map/map-context-menu.md) selezionando la funzione [Indicazioni da](../../map/map-context-menu.md#directions-to--from). 
</TabItem>

</Tabs>

### Impostare il punto di destinazione {#set-target-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu di navigazione Android 2](@site/static/img/navigation/route/navigation_by_route_menu_andr_2.png)

La cosa più importante per avviare la navigazione è determinare la destinazione. Il punto di destinazione può essere trovato utilizzando la funzione [*Ricerca*](../../search/index.md#overview) o semplicemente su una mappa. È anche possibile impostare il punto di destinazione nel [*Menu di navigazione*](#navigation-menu):  

- **<Translate android="true" ids="search_button"/>** - Apre [il menu di ricerca](../../search/index.md).
- **<Translate android="true" ids="shared_string_address"/>** - Apre [il menu di ricerca indirizzi](../../search/search-address.md).
- **<Translate android="true" ids="shared_string_select_on_map"/>** - Apre una finestra di dialogo in cui la mappa è centrata con un indicatore. Vengono mostrate le coordinate del centro della mappa, si sposta la mappa sotto l'indicatore e si conferma la scelta premendo *Seleziona*.
- **<Translate android="true" ids="shared_string_favorites"/>** - Permette di usare un [Preferito](../../personal/favorites.md) come destinazione.
- **<Translate android="true" ids="shared_string_markers"/>** - Permette di scegliere uno dei [Segnalibri mappa](../../personal/markers.md) come punto di destinazione.
- **Scambia punto di partenza e destinazione** &nbsp;&#8595;&#8593; - Permette di scambiare i punti di *Partenza* e *Arrivo*.
</TabItem>

<TabItem value="ios" label="iOS">

![Menu di navigazione iOS 2](@site/static/img/navigation/route/navigation_by_route_menu_ios_1.png)

La cosa più importante per avviare la navigazione è determinare la destinazione. Il punto di destinazione può essere trovato utilizzando la funzione [*Ricerca*](../../search/index.md#overview) o semplicemente su una mappa. È anche possibile impostare il punto di destinazione nel [*Menu di navigazione*](#navigation-menu):  

- **<Translate android="true" ids="search_button"/>** - Apre [il menu di ricerca](../../search/index.md).
- **<Translate android="true" ids="shared_string_address"/>** - Apre [il menu di ricerca indirizzi](../../search/search-address.md).
- **<Translate android="true" ids="shared_string_select_on_map"/>** - Permette di spostare e ingrandire la mappa, quindi di toccare la posizione desiderata. Una bandierina appare nel punto scelto e segna la destinazione.
- **<Translate android="true" ids="shared_string_favorites"/>** - Permette di usare un [Preferito](../../personal/favorites.md) come destinazione.
- **<Translate android="true" ids="shared_string_markers"/>** - Permette di scegliere uno dei [Segnalibri mappa](../../personal/markers.md) come punto di destinazione.
- **Scambia punto di partenza e destinazione** &nbsp;&#8595;&#8593; - Permette di scambiare i punti di *Partenza* e *Arrivo*.
</TabItem>

</Tabs>


### Destinazioni intermedie {#intermediate-destinations}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigazione intermedia Android 1](@site/static/img/navigation/route/navigation_interpoints_1_andr.png) ![Navigazione intermedia Android 2](@site/static/img/navigation/route/navigation_interpoints_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigazione intermedia iOS 1](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_1.png) ![Navigazione intermedia iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_2.png)

</TabItem>

</Tabs>

- **&nbsp;&#x1F589;** - permette di aprire l'elenco dei punti di destinazione per apportare modifiche.
- **&nbsp;&#8592;** - passa alla schermata del menu di navigazione.
- **&nbsp;&#10005;** - permette di eliminare un punto di destinazione dall'elenco dei punti.
- **&nbsp;&#61;** - permette di modificare l'ordine dei punti nell'elenco.
- *&nbsp;&#43; Aggiungi* - apre il menu contestuale *Aggiungi intermedio*.
- *&nbsp;&#9776; Cancella tutto* - permette di cancellare tutti i punti intermedi.

Se si sceglie **Ordina** (*Android*) o **Opzioni** (*iOS*) nell'elenco delle destinazioni, si accede a opzioni speciali per regolare l'ordine di navigazione verso i punti intermedi.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigazione intermedia Android 3](@site/static/img/navigation/route/navigation_interpoints_android_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigazione intermedia iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_3.png)

</TabItem>

</Tabs>

In questo menu è possibile trovare opzioni aggiuntive per la gestione dei punti di destinazione:

- **<Translate android="true" ids="intermediate_items_sort_by_distance"/>** - OsmAnd offrirà il percorso più breve tra tutte le destinazioni, tuttavia l'ordine della visita può essere modificato. Il punto di partenza e la destinazione finale non verranno modificati.

- **<Translate android="true" ids="switch_start_finish"/>** - Il punto di partenza e la destinazione finale verranno scambiati.

- **<Translate android="true" ids="reverse_all_points"/>** (*Solo Android*) - Tutti i punti saranno inseriti in ordine inverso.

- **<Translate android="true" ids="add_intermediate_point"/> / <Translate ios="true" ids="add_waypoint_short"/>**. Da questo menu è possibile aggiungere destinazioni intermedie. Il processo di selezione di una destinazione intermedia sulla mappa è lo stesso per i punti di partenza e destinazione.

- **<Translate android="true" ids="clear_all_intermediates"/>**. Tutte le destinazioni intermedie verranno rimosse dalla mappa.

### Utilizzare i punti Casa o Lavoro {#use-home-or-work-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Preferiti speciali Android](@site/static/img/navigation/route/special_favorite_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Preferiti speciali iOS](@site/static/img/navigation/route/special_favorite_ios.png)

</TabItem>

</Tabs>

Le schede **Casa** e **Lavoro** (o [Punti speciali](../../personal/favorites.md#special-favorites-personal) per i Preferiti) possono essere utilizzate per impostare rapidamente i punti di destinazione nel menu di navigazione. Se non sono stati inseriti gli indirizzi dei Preferiti speciali, queste celle rimarranno vuote. Toccando questo campo, verrà richiesto di creare questi PDI.  


### Cronologia dei percorsi precedenti {#history-of-previous-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Percorso precedente Android](@site/static/img/navigation/route/previous_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Percorso precedente iOS](@site/static/img/navigation/route/previous_ios.png)  

</TabItem>

</Tabs>

Se la registrazione della [Cronologia di navigazione](../../personal/global-settings.md#history) è abilitata, è possibile utilizzare i percorsi o le destinazioni precedenti dall'elenco della cronologia per la navigazione. Questa opzione può essere utile per un accesso rapido ai percorsi utilizzati di frequente. Gli elementi nell'elenco della cronologia sono ordinati in base all'utilizzo più recente, a partire dal più nuovo.  

:::note

- Quando la [registrazione dei dati della Cronologia](../../personal/global-settings.md#history) è disabilitata, non verrà richiesto di utilizzare i percorsi precedenti per la navigazione.
- È possibile eliminare alcuni o tutti i record della cronologia relativi ai percorsi precedenti. Questo può essere fatto nella scheda *[Cronologia di navigazione](../../personal/global-settings.md#history)* dell'opzione Cronologia (*Menu → Impostazioni → Impostazioni OsmAnd → Cronologia*).

:::


## Avviare / Interrompere la navigazione {#start--stop-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Schermata di avvio navigazione Android](@site/static/img/navigation/route/navigation_start_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Schermata di navigazione iOS](@site/static/img/navigation/route/navigation_start_ios.png)

</TabItem>

</Tabs>

Una volta selezionati i punti di partenza e di arrivo, l'app creerà un percorso tra di essi utilizzando un profilo attivo. Il [profilo dell'app](../../personal/profiles.md) e il set di [widget](../../widgets/index.md) cambieranno solo dopo aver toccato il pulsante *Avvia* della navigazione.

- **Toccare Avvia** per iniziare la navigazione.
- [Mettere in pausa](#pause--resume-navigation) la navigazione quando si fa una pausa. (*Solo Android*)
- **Interrompere** la navigazione selezionando **Interrompi** (*Android*) o **Annulla** (*iOS*).

:::note Dettagli del percorso
Informazioni aggiuntive sul percorso creato, come altitudine, istruzioni passo-passo, strumento di analisi e altro, si trovano nella sezione [**Dettagli**](../setup/route-details.md).
:::

### Ricalcolo del percorso {#route-recalculation}

Il percorso può essere ricalcolato automaticamente in caso di deviazione da esso. È possibile modificare i parametri del ricalcolo nelle [Impostazioni di navigazione](../guidance/navigation-settings.md#recalculate-route). È anche possibile disabilitare la notifica sul ricalcolo del percorso nelle impostazioni delle [Istruzioni vocali](../guidance/voice-navigation.md#voice-settings).

### Pausa / Riprendi navigazione {#pause--resume-navigation}

<InfoAndroidOnly/>

Se si desidera fermarsi per una pausa e deviare dal percorso per un breve periodo, è possibile utilizzare la funzione *Pausa/Riprendi* navigazione per mettere in pausa le istruzioni vocali e interrompere il ricalcolo del percorso.  
Questa opzione è disponibile nella versione Android dell'app nell'*[elenco delle notifiche](../guidance/voice-navigation.md#text-notifications)* o dal menu *[Azioni rapide](../../widgets/quick-action.md)*.

![Schermata di notifica Android](@site/static/img/navigation/route/navigation_pause_android.png)

Per riprendere la navigazione:

- Utilizzare il messaggio di OsmAnd nella barra delle notifiche.
- Utilizzare il menu *Azioni rapide* o la finestra di dialogo che appare quando si tocca il *[pulsante Navigazione](../../widgets/map-buttons.md#directions)* (vedi screenshot).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Riprendi navigazione Android](@site/static/img/navigation/route/navigation_menu_start_pause_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Riprendi navigazione iOS](@site/static/img/navigation/route/navigation_menu_start_pause_ios_1.png)

</TabItem>

</Tabs>

:::note
Quando si **tocca il pulsante Navigazione** durante il percorso, la navigazione **non si interrompe e le istruzioni vocali continuano ad essere emesse**, sebbene le opzioni proposte Riprendi o Avvia possano creare confusione.
:::


### Consigli per il risparmio energetico {#power-saving-tips}

La navigazione utilizza il GPS e l'elaborazione in background, che possono consumare la batteria. Per ottimizzare l'uso dell'energia:

- **Spegnere lo schermo** affidandosi alle istruzioni vocali.  
- Abilitare il [Controllo schermo](../guidance/voice-navigation.md#screen-control) (*Solo Android*) in *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,turn_screen_on"/>*.


## Impostazioni {#settings}

![Preparazione del percorso Android](@site/static/img/navigation/route/navigation_menu_settings_andr.png)


### Impostazioni di navigazione {#navigation-settings}

Per accedere alle impostazioni di navigazione, seguire uno dei passaggi seguenti:

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

- &nbsp;**<Translate android="true" ids="nav_type_hint"/>** determina come vengono calcolati i percorsi. Ad esempio, il profilo bicicletta ha un tipo di navigazione Ciclismo, che imposta le regole di percorso. È possibile importare queste regole (come file routing.xml) in OsmAnd. Maggiori informazioni sul calcolo del percorso si possono trovare sulla nostra pagina [GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing).&nbsp;  

- &nbsp;**<Translate android="true" ids="route_parameters"/>** controlla quali parametri verranno utilizzati durante il calcolo del percorso (questo è il processo di selezione di un percorso per la navigazione).

Si prega di leggere i parametri del percorso per il tipo di navigazione corrispondente.

Come configurare il [tipo di percorso](../routing/osmand-routing.md#routing-types) e i [parametri del percorso](../guidance/navigation-settings.md#route-parameters) si può leggere nell'[articolo Impostazioni di navigazione](../guidance/navigation-settings.md) o negli articoli sui tipi specifici di calcolo del percorso nella sezione [Parametri del percorso](../routing/osmand-routing.md#routing-types).  


## Navigazione simulata {#simulated-navigation}

Lo strumento **Navigazione simulata** consente di visualizzare in anteprima un percorso prima di mettersi in viaggio. Questo aiuta nella pianificazione, nella familiarizzazione e nel test del sistema di navigazione di OsmAnd.

### Avviare / Interrompere la simulazione {#start--stop-simulation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Simula navigazione Android](@site/static/img/navigation/route/simulate_navigation_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Simula navigazione iOS](@site/static/img/navigation/route/simulate_navigation_ios_1.png)

</TabItem>

</Tabs>

Quando un percorso di navigazione è stato costruito, è possibile avviare la simulazione della navigazione utilizzando l'opzione **<Translate android="true" ids="simulate_navigation"/>**.  

- Nel [Menu di navigazione](#navigation-menu) andare su *<Translate android="true" ids="shared_string_settings,simulate_navigation"/>*.
- Attivare l'interruttore per abilitare l'opzione.
- Toccare il pulsante di navigazione [Avvia](#start--stop-navigation) per avviare la simulazione.
- Per [Interrompere](#start--stop-navigation) la simulazione della navigazione, toccare **Interrompi** (*Android*) o **Annulla** (*iOS*).


### Modalità velocità {#speed-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Simula navigazione Android](@site/static/img/navigation/route/simulate_navigation_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Simula navigazione iOS](@site/static/img/navigation/route/simulate_navigation_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="simulation_preview_mode_title"/>** - Accelera la simulazione sui tratti rettilinei, rallentando agli incroci.

- **<Translate android="true" ids="simulation_constant_mode_title"/>** - Funziona a una velocità fissa.
- **<Translate android="true" ids="simulation_real_mode_title"/>**:
    - **Sui tratti rettilinei** della strada, la velocità sarà vicina alla velocità massima consentita.
    - **Agli incroci**, il simulatore ridurrà la velocità.
    - **Penalità aggiuntive** verranno applicate ai semafori, ai segnali di stop e ad altri ostacoli simili.


## Mappe mancanti o non sincronizzate {#maps-missing-or-not-synchronized}

Per costruire un percorso, tutte le **mappe necessarie** devono essere scaricate e avere la stessa data di rilascio. Si noti che in alcune situazioni il messaggio di mappe mancanti potrebbe essere nascosto nel menu di preparazione del percorso. Se si trascina verso l'alto il menu di navigazione, si vedranno le possibili ragioni per cui il percorso non ha potuto essere calcolato.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Messaggio nessuna mappa durante la costruzione della navigazione Android 5](@site/static/img/navigation/route/navigation_by_route_no_maps_5.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Messaggio nessuna mappa durante la costruzione della navigazione iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_1_ios.png)
</TabItem>

</Tabs>

### Mappe richieste {#required-maps}

Nella finestra di dialogo delle mappe richieste vedrai suggerimenti di mappe da scaricare o aggiornare. L'elenco delle mappe utilizzate potrebbe non essere preciso in quanto calcola un percorso molto basilare; per ottenere l'elenco preciso delle mappe è possibile fare clic su **Calcola online**. Se si seleziona **Usa mappe scaricate**, il calcolo del percorso cercherà di utilizzare le mappe già scaricate e salterà il messaggio di avviso.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Messaggio nessuna mappa durante la costruzione della navigazione Android](@site/static/img/navigation/route/navigation_by_route_no_maps_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Messaggio nessuna mappa durante la costruzione della navigazione iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_2_ios.png)

</TabItem>

</Tabs>


## Problemi comuni e soluzioni {#common-issues-and-solutions}

1. [Le possibili cause del calcolo lento del percorso.](../../troubleshooting/navigation.md#route-calculation-is-slow)
2. [Cosa fare se la lunghezza del percorso supera i 250 chilometri.](../../troubleshooting/navigation.md#how-to-calculate-routes-longer-than-250km)
3. [Cosa fare se il percorso suggerito sembra errato.](../../troubleshooting/navigation.md#the-calculated-route-does-not-seem-correct)
4. [Come risolvere la situazione in cui la navigazione non è possibile a causa della mancanza delle mappe necessarie.](#maps-missing-or-not-synchronized)

Per ulteriori passaggi di risoluzione dei problemi, vedere [problemi di navigazione](../../troubleshooting/navigation.md).


## Articoli correlati {#related-articles}

- [Parametri del percorso](../routing/osmand-routing.md#routing-types)
- [Dettagli del percorso](./route-details.md)
- [Navigazione tramite traccia](./gpx-navigation.md)
- [Navigazione tramite segnalibri](./markers-navigation.md)
- [Impostazioni di navigazione](../guidance/navigation-settings.md)
- [Schermata della mappa durante la navigazione](../guidance/map-during-navigation.md)
- [Istruzioni vocali / Notifiche](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)