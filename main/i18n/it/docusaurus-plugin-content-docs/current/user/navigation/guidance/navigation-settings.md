---
source-hash: a8559f43cff19c4a14831feb61c4c3facdea6dab64c9c232c37b5ba47e810958
sidebar_position: 1
title:  Impostazioni di navigazione
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

Per una navigazione di successo, è importante configurare correttamente le impostazioni appropriate in base alle proprie esigenze e al modo in cui si viaggia: in auto, a piedi, a cavallo o con gli sci. Questo articolo descrive i parametri di base del percorso, le [Istruzioni vocali](#voice-prompts), gli [Avvisi sullo schermo](#screen-alerts), il [Comportamento della mappa durante la navigazione](#map-during-navigation) e l'[Aspetto delle linee del percorso](#customize-route-line). Descrive inoltre in dettaglio le [Impostazioni del veicolo](#vehicle-parameters), come la velocità predefinita, il tipo di motore per il calcolo della CO2, la capacità del serbatoio del carburante e le limitazioni di dimensioni/peso. Regolando queste impostazioni, potrete trarre il massimo dall'uso di OsmAnd e raggiungere la vostra destinazione senza ritardi inutili.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di navigazione iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### Come aprire {#how-to-open}

Questa sezione presenta le impostazioni di navigazione necessarie per il calcolo e la tracciatura di un percorso, che è possibile impostare per il profilo selezionato. Questo menu include le impostazioni per la [Preparazione del percorso](../setup/route-navigation.md), la [Schermata della mappa durante la navigazione](../guidance/map-during-navigation.md), e ciò che si imposta nelle *Impostazioni di navigazione* influisce direttamente sulla visualizzazione dei dati nei [Dettagli del percorso](../setup/route-details.md).

Esistono tre modi per accedere al menu delle impostazioni di navigazione.

- Andare al *Menu principale → Impostazioni*, selezionare il *Profilo* desiderato e toccare *Impostazioni di navigazione*.

- Toccare l'icona *Navigazione* sulla schermata della mappa, quindi selezionare l'*icona Impostazioni → Impostazioni di navigazione*.

- Andare al menu principale *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.  

:::info
Il profilo predefinito *Sfoglia mappa* non ha impostazioni di navigazione.  
:::


## Tipo di navigazione {#navigation-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png)   ![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di navigazione iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>  

La navigazione è una parte importante di un viaggio e la scelta del *tipo giusto* di navigazione può rendere il viaggio molto più semplice. Il tipo di navigazione scelto può dipendere dal modo in cui si viaggia e dalla disponibilità di una connessione a Internet.  

- **Navigazione online**
    Utilizza principalmente un sistema di routing speciale o un sito web che consente all'app OsmAnd di tracciare un percorso basato su informazioni attuali e altri fattori. Potete leggere come scegliere il percorso migliore online nell'articolo [Routing online](../routing/online-routing.md). Questo tipo di navigazione è disponibile solo per la versione *Android* dell'app.  

- **Navigazione offline**
Non richiede l'accesso a Internet e offre una più ampia selezione di [tipi di navigazione](../routing/osmand-routing.md#routing-types) che possono essere utilizzati per calcolare un percorso. Tra questi vi sono *bicicletta, barca, auto, a piedi, sci* e *linea retta*. Attualmente esistono 13 tipi di routing di base, oltre a un tipo di routing esterno [BRouter](../routing/brouter.md) che offre ulteriori opportunità di routing.  

Il tipo di navigazione determina le regole utilizzate per calcolare i percorsi. Se si necessita di un tipo specifico di navigazione, è possibile **importare il proprio file di routing *XML* modificato**. Per saperne di più sulle regole di routing, consultare la nostra [pagina GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). Esiste anche un articolo separato sul formato XML e su come utilizzarlo, [Stile di rendering della mappa](../../../technical/osmand-file-formats/osmand-rendering-style.md), che può aiutarvi a creare un file di percorso.  


## Parametri del percorso {#route-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di navigazione iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>  

**<Translate android="true" ids="route_parameters"/>** sono impostazioni che determinano il modo in cui l'applicazione calcolerà un percorso per raggiungere una destinazione, considerando fattori quali il tipo di trasporto, le priorità di percorso, le condizioni del percorso, la complessità del percorso e le preferenze dell'utente.  

Per ogni [profilo](../../personal/global-settings.md#default-profile), ad eccezione di *Sfoglia mappa*, OsmAnd seleziona per impostazione predefinita il [Tipo di navigazione](#navigation-type) ottimale e i relativi [parametri di percorso](../routing/osmand-routing.md#routing-types). Tuttavia, è possibile scegliere il tipo che si preferisce e modificare i parametri a seconda delle proprie preferenze e delle condizioni esterne del viaggio imminente.  

Tutti i parametri del percorso sono descritti in dettaglio nelle sezioni corrispondenti della documentazione:  
*[Routing per auto (Camion, Moto)](../routing/car-based-routing.md), [Routing per bicicletta (MTB)](../routing/bicycle-based-routing.md), [Routing per ciclomotore](../routing/moped-routing.md), [Routing pedonale](../routing/pedestrian-routing.md), [Routing con trasporto pubblico](../routing/public-transport-navigation.md), [Routing a cavallo](../routing/horse-routing.md), [Routing con gli sci](../routing/ski-routing.md), [Routing con il treno](../routing/train-routing.md), [Routing in barca](../routing/boat-navigation.md), [Routing diretto al punto](../routing/direct-to-point-routing.md), [Routing in linea retta](../routing/straight-line-routing.md), [Routing online](../routing/online-routing.md), [Routing con BRouter](../routing/brouter.md)*.  


### Ricalcolo del percorso {#recalculate-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_route-recalculation1_andr.png)
![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_route-recalculation2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di navigazione iOS](@site/static/img/navigation/navigation_settings_route-recalculation1_ios.png)
![Impostazioni di navigazione iOS](@site/static/img/navigation/navigation_settings_route-recalculation2_ios.png)

</TabItem>

</Tabs>  

Il parametro **Calcolo del percorso** modifica automaticamente il percorso calcolato quando si devia da esso o si guida nella direzione opposta. In entrambi i casi, questa impostazione aiuta a mantenere la direzione di marcia e a raggiungere la destinazione senza perdere tempo a cercare manualmente un nuovo percorso.  

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> in caso di deviazione*  | <Translate android="true" ids="recalculate_route_distance_promo"/>  | Se le [Istruzioni vocali](../guidance/voice-navigation.md#voice-settings) sono attive, OsmAnd annuncia che il percorso è in fase di ricalcolo. |
|  *Ricalcola il percorso in caso di direzione inversa*  | Il percorso verrà ricalcolato se ci si sposta verso il punto di partenza.  |  Con questa impostazione disattivata, lo spostamento verso il punto di partenza non è considerato una deviazione dal percorso (purché segua il percorso calcolato).  |


### Impostazioni di sviluppo {#development-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *Menu → Impostazioni → profilo app → Impostazioni di navigazione → Parametri del percorso → Sviluppo*

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *Menu → Impostazioni → profilo app → Impostazioni di navigazione → Parametri del percorso → Sviluppo*

![Impostazioni di navigazione iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>  

I parametri della sezione **Sviluppo** sono destinati principalmente agli utenti esperti e sono disponibili solo quando il [plugin di sviluppo OsmAnd](../../plugins/development.md) è abilitato.  

| Parametro | Descrizione |
|:------------|:---------------|
| *Tipo di routing* (*Android*) / *Algoritmo di routing* (*iOS*) | <ul><li>**A*** a 2 fasi (*Android*) / **A*** (*iOS*) aggiunge una fase supplementare all'algoritmo predefinito per migliorare la qualità del percorso calcolato. Questa opzione può essere utile per trovare percorsi in reti stradali ampie e complesse, ma il calcolo del percorso può richiedere più tempo.</li><li>**A* classico** (*Android*) / **Gerarchie autostradali** (*iOS*) ottimizza la pianificazione del percorso privilegiando le strade principali e le autostrade, riducendo al minimo il numero di svolte e incroci sul percorso. Particolarmente efficace sulle lunghe distanze.</li><li>**HH (Highway Hierarchies) x Java** (*solo Android*) si basa sull'implementazione di strutture di dati gerarchiche per ottimizzare la ricerca di percorsi su una mappa, tenendo conto dei vincoli di esecuzione e del consumo di risorse del dispositivo, ed è realizzato sulla piattaforma Java.</li><li>**HH (Highway Hierarchies) x C++** (*solo Android*) è un algoritmo che utilizza il linguaggio di programmazione C++ per elaborare in modo efficiente i dati della rete stradale e costruire percorsi ottimali utilizzando strutture di dati gerarchiche. È ottimizzato per l'elaborazione rapida di grandi quantità di dati ed è particolarmente efficace per la navigazione di mappe con molte reti stradali.</li></ul> |  
| *Approssimazione GPX* (*solo Android*)  | <ul><li>L'approssimazione GPX **basata sul routing** in **C++ e Java** utilizza i dati del percorso per approssimare le tracce GPS con i percorsi stradali esistenti, migliorando la precisione della traccia e riducendone le dimensioni.</li><li>Le approssimazioni GPX **basate sulla geometria** in **C++ e Java** funzionano in base a principi geometrici per approssimare in modo rapido e preciso le tracce GPS, consentendo un'elaborazione efficiente di grandi quantità di dati.</li></ul> |
| *Zoom automatico* | <ul><li>**Discreto** consente di ingrandire la mappa a un livello di dettaglio specifico, misurato in pochi passi discreti.</li><li>**Fluido** consente di modificare gradualmente la scala della mappa con effetti di animazione fluidi, senza scatti o salti.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*solo Android*)  | Utilizzare gli [Aggiornamenti Live](../../personal/maps-resources.md#live-updates) durante il routing. Si noti che si consiglia di utilizzare questa opzione solo a scopo di test.  |

<!--
| Parameter | Description | Note |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>*  | Consente di utilizzare gli [Aggiornamenti Live](../../personal/maps-resources.md#live-updates) durante il routing. Si noti che si consiglia di utilizzare questa opzione solo a scopo di test. |   
| *<Translate android="true" ids="use_two_phase_routing"/>*  | Aggiunge una fase supplementare all'algoritmo predefinito (A*) per migliorare la qualità del percorso calcolato. Questa opzione può essere utile per trovare percorsi in reti stradali ampie e complesse, anche se può richiedere più tempo per il calcolo del percorso. |  
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/>  |   
-->


## Istruzioni vocali {#voice-prompts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Impostazioni di navigazione vocale Android](@site/static/img/navigation/voice/voice_promt_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *Pulsante <Translate ios="true" ids="routing_settings"/>* *(o <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Scegli profilo → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Impostazioni di navigazione vocale iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

La prima parte dell'articolo *[Istruzioni vocali / Notifiche](./voice-navigation.md)* descrive in dettaglio come impostare le istruzioni vocali.  

Le istruzioni audio durante la navigazione aiutano il conducente o il pedone a raggiungere la destinazione durante la [navigazione di un percorso selezionato](../setup/route-navigation.md). Contengono informazioni su svolte, indicazioni di guida, segnali stradali, distanze dalla destinazione e altri fattori che possono influenzare la navigazione.  

Se si seleziona una traccia come punto di destinazione, è necessario utilizzare l'opzione [Associa alle strade](../setup/gpx-navigation.md#attach-to-the-roads) affinché le istruzioni vocali funzionino correttamente.

Le *Istruzioni vocali* consentono di concentrarsi sulla strada e di non essere distratti dalla mappa o dal dispositivo di navigazione. Inoltre, migliorano la sicurezza di guida, riducono il tempo necessario per navigare su terreni sconosciuti e possono essere utili per diversi [tipi di percorsi](../routing/osmand-routing.md#routing-types).

Nella sezione **Annuncia**, è possibile scegliere quali tipi di notifiche devono essere riprodotte o visualizzate durante la navigazione:

- **Indicazioni passo-passo** (*solo Android*) – consente di abilitare o disabilitare le istruzioni di navigazione standard come *“Gira a sinistra”*, *“Gira a destra”* o *“Tra 200 metri…”*. Quando l'opzione è disabilitata, non vengono fornite le indicazioni di svolta e i nomi delle strade, mentre le notifiche per i waypoint, i punti utente e gli eventi del percorso rimangono attive. Questa modalità è destinata ad attività come il rafting, l'escursionismo o il ciclismo lungo tracce preregistrate, quando sono richieste solo le notifiche per i waypoint aggiunti manualmente.
- **Nomi delle strade (TTS)** – annuncia i nomi delle strade lungo il percorso.
- **Numero di uscita** – annuncia il numero di uscita durante la guida sulle autostrade.
- **Avvisi sul traffico** – fornisce notifiche su eventi stradali importanti come ingorghi o restrizioni.
- **Attraversamenti pedonali** – avvisa quando ci si avvicina a un attraversamento pedonale.
- **[Autovelox](https://osmand.net/docs/user/navigation/guidance/voice-navigation#speed-cameras)**  – avvisa sulle posizione degli autovelox (dove consentito legalmente).
- **Gallerie** – informa quando si entra in una galleria.


## Avvisi sullo schermo {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Impostazioni di navigazione](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Impostazioni di navigazione](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>  

L'impostazione di navigazione **Avviso sullo schermo** abilita il [**Widget Avvisi**](../../widgets/nav-widgets.md#alert-widget). *Dettagli:*

- Quando ci si avvicina a uno degli ostacoli supportati sulla strada, le notifiche appaiono nell'angolo in basso a sinistra della mappa.
- Se si configurano le [*istruzioni vocali e testuali*](../../navigation/guidance/voice-navigation.md) disponibili nell'app OsmAnd, il viaggio sarà più comodo e sicuro.
- L'aspetto e la tempistica delle istruzioni dipendono dalle impostazioni della velocità. Potete trovarle [nell'articolo](../../../technical/algorithms/voice-prompt-triggering.md).  
- Il comportamento degli *Avvisi sullo schermo* è influenzato anche dall'impostazione [Mostra punti lungo il percorso](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route).

È possibile ***selezionare quali avvisi*** si desidera visualizzare sulla schermata dell'app durante la navigazione:

- **Limite di velocità** ([info OSM Wiki](https://wiki.openstreetmap.org/wiki/Speed_limits)). Nell'impostazione Avvisi sullo schermo, il *Limite di velocità* viene visualizzato solo con l'opzione *Avvisi sul traffico* attivata. Se si desidera visualizzare i limiti di velocità durante la navigazione senza altri avvisi, utilizzare il [widget](../../widgets/nav-widgets.md#speed-limit).
- **Avvisi sul traffico** ([info OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). Ulteriori informazioni sono disponibili nell'articolo [Schermata della mappa durante la navigazione](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings).
- **Attraversamenti pedonali** ([info OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **Autovelox** ([info OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). Per ulteriori informazioni sull'impostazione Autovelox in OsmAnd, leggere [Tipi di avvisi](../../widgets/nav-widgets.md#alert-types) e l'articolo *Impostazioni globali*, sezione [Legale](../../personal/global-settings.md#legal).
- **Gallerie** ([info OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
I tipi di avvisi hanno un aspetto visivo diverso, che dipende dalla regione di viaggio. OsmAnd non si propone di presentare segnali stradali identici al 100%, ma ne evidenzia alcune somiglianze.  
:::


## Mappa durante la navigazione {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

</TabItem>

</Tabs>

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

La **mappa viene utilizzata durante la navigazione** per determinare la propria posizione, pianificare il percorso e orientarsi sul territorio. Durante la navigazione, è possibile visualizzare la mappa con *centratura automatica*, spostarla e *ingrandirla e rimpicciolirla* per vedere l'area richiesta. La mappa può anche visualizzare indicatori che segnalano punti di interesse, percorsi, condizioni meteorologiche, segnali stradali e altri oggetti che aiutano a navigare. La mappa può essere aggiornata in *tempo reale* e visualizza *informazioni aggiornate* che possono influenzare la pianificazione del percorso.

È possibile scoprire come cambia il comportamento della mappa durante la navigazione nell'articolo [Schermata della mappa durante la navigazione](../guidance/map-during-navigation.md).  

## Personalizza linea del percorso {#customize-route-line}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Impostazioni di navigazione](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Andare su: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Impostazioni di navigazione](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>  

Con l'impostazione **Personalizza linea del percorso**, è possibile scegliere l'aspetto della linea del percorso che sarà visibile sulla mappa durante la navigazione. È possibile selezionare il *colore*, la *larghezza della linea* e la visualizzazione delle *frecce di svolta* su di essa. Per ogni profilo è possibile scegliere una visualizzazione diversa della linea. Tutti questi parametri sono descritti in dettaglio nell'articolo *Schermata della mappa durante la navigazione* nella sezione [Aspetto della linea del percorso](../../navigation/guidance/map-during-navigation.md#route-line-appearance).


## Parametri del veicolo {#vehicle-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Impostazioni di navigazione iOS](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

Per garantire che OsmAnd calcoli il percorso più ottimale, è fondamentale configurare i parametri del veicolo, tra cui velocità, dimensioni, peso e tipo di carburante, che consentono all'app di stimare con precisione i tempi di percorrenza, evitare le restrizioni stradali e monitorare il consumo di carburante, come spiegato nella nostra guida completa sui [Parametri del veicolo](./vehicle-parameters.md).


## Guida dettagliata della traccia {#detailed-track-guidance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Associa alle strade 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png)    ![Impostazioni di navigazione Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *Guida dettagliata della traccia*

![Impostazioni di navigazione](@site/static/img/navigation/detailed_track_guidance_1_ios.png)   ![Impostazioni di navigazione](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

La funzione **Guida dettagliata della traccia** migliora la precisione della navigazione del percorso quando si utilizzano **percorsi basati su tracce**. Quando si seleziona una traccia come destinazione, è possibile attivare l'impostazione [Associa alle strade](../setup/gpx-navigation.md#attach-to-the-roads) dal menu [Segui traccia](../setup/gpx-navigation.md#follow-track-options). In questo modo si garantisce che la traccia sia allineata alle strade esistenti, in modo che la navigazione fornisca istruzioni precise su rotatorie, svolte, limiti di velocità, corsie di svolta e nomi delle strade per le strade.

Esistono due opzioni per l'utilizzo della *Guida dettagliata della traccia*:

- **<Translate android="true" ids="ask_every_time"/>** (*impostazioni predefinite*) – L'opzione *Associa alle strade* apparirà nella sezione [Dettagli del percorso](../setup/route-details.md) ogni volta che viene calcolato un percorso basato su una traccia. Ciò consente di decidere se applicare l'associazione alla strada per ogni sessione di navigazione.

- **<Translate android="true" ids="shared_string_always"/>** – Il processo di associazione alla strada verrà applicato automaticamente per ogni percorso di *navigazione per traccia* senza richiedere una conferma manuale.

Per ulteriori informazioni sull'uso della navigazione basata su tracce, visitare [Navigazione per traccia](../setup/gpx-navigation.md).


## Articoli correlati {#related-articles}

- [Parametri del percorso](../routing/osmand-routing.md#routing-types)
- [Preparazione del percorso](../setup/route-navigation.md)
- [Navigazione per traccia](../setup/gpx-navigation.md)
- [Navigazione per indicatori](../setup/markers-navigation.md)
- [Dettagli del percorso](../setup/route-details.md)
- [Schermata della mappa durante la navigazione](./map-during-navigation.md)
- [Istruzioni vocali / Notifiche](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)