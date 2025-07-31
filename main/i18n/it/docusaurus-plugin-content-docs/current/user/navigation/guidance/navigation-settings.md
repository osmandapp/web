---
source-hash: 9dfdc23272c2395a2fe157264de05cb42ea6de2b1b0d9d756c1c1bf66f78f6d3
sidebar_position: 7
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

Per una navigazione di successo, è importante configurare correttamente le impostazioni appropriate in base alle proprie esigenze e al modo in cui si viaggia: in auto, a piedi, a cavallo o con gli sci. Questo articolo descrive i parametri di base del percorso, i [messaggi vocali](#voice-prompts), gli [avvisi sullo schermo](#screen-alerts), il [comportamento della mappa durante la navigazione](#map-during-navigation) e l'[aspetto delle linee del percorso](#customize-route-line). Dettaglia anche le impostazioni del veicolo come la [velocità predefinita](#default-speed) e la [velocità massima/minima](#road-speeds), il [tipo di motore](#fuel-used-by-motor) per il calcolo della CO2, la [capacità del serbatoio del carburante](#fuel-tank-capacity) e le [dimensioni/peso](#size-parameters), che possono influenzare il percorso. La regolazione di queste impostazioni ti aiuterà a ottenere il massimo dall'utilizzo di OsmAnd e a raggiungere il tuo obiettivo senza inutili ritardi.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di navigazione iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### Come aprire {#how-to-open}

Questa sezione presenta le impostazioni di navigazione necessarie per il calcolo e la tracciatura di un percorso, che puoi impostare per il profilo selezionato. Questo menu include le impostazioni per la [preparazione del percorso](../setup/route-navigation.md), la [schermata della mappa durante la navigazione](../guidance/map-during-navigation.md), e ciò che imposti nelle *Impostazioni di navigazione* influisce direttamente sulla visualizzazione dei dati nei [Dettagli del percorso](../setup/route-details.md).

Ci sono tre modi per accedere al menu delle impostazioni di navigazione.

- Vai al *Menu* principale *→ Impostazioni*, seleziona il *Profilo* richiesto e tocca *Impostazioni di navigazione*.

- Tocca l'icona *Navigazione* nella schermata della mappa, quindi seleziona l'*icona Impostazioni → Impostazioni di navigazione*.

- Vai al *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>* principale.

:::info
Il profilo predefinito *Sfoglia mappa* non ha impostazioni di navigazione.
:::


## Tipo di navigazione {#navigation-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png) ![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di navigazione iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>

La navigazione è una parte importante di un viaggio, e scegliere *il tipo giusto* di navigazione può rendere il tuo viaggio molto più facile. Il tipo di navigazione che scegli può dipendere da come viaggi e se hai una connessione Internet.

- **Navigazione online**
Utilizza principalmente un sistema di routing speciale o un sito web che consente all'app OsmAnd di tracciare un percorso basato su informazioni attuali e altri fattori. Puoi leggere sulla scelta del miglior percorso online nell'articolo [Routing online](../routing/online-routing.md). Questo tipo di navigazione è disponibile solo per la *versione Android* dell'app.

- **Navigazione offline**
Non richiede accesso a Internet e offre una selezione più ampia di [tipi di navigazione](../routing/osmand-routing.md#routing-types) che possono essere utilizzati per calcolare un percorso. Tra questi ci sono *bicicletta, barca, auto, a piedi, sci* e *linea retta*. Attualmente ci sono 13 tipi di routing di base, oltre a un tipo di routing esterno [BRouter](../routing/brouter.md) che offre ulteriori opportunità di routing.

Il tipo di navigazione determina quali regole vengono utilizzate per calcolare i percorsi. Se hai bisogno di un tipo specifico di navigazione, puoi **importare il tuo file di routing *XML* modificato**. Maggiori informazioni sulle regole di routing sono disponibili sulla nostra [pagina GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). E c'è un articolo separato sul formato XML e su come usarlo, [Stile di rendering della mappa](../../../technical/osmand-file-formats/osmand-rendering-style.md), che può aiutarti a creare un file di percorso.


## Parametri del percorso {#route-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di navigazione iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>

I **<Translate android="true" ids="route_parameters"/>** sono impostazioni che determinano come l'applicazione calcolerà un percorso per raggiungere una destinazione, considerando fattori come il tipo di trasporto, le priorità di routing, le condizioni del percorso, la complessità del percorso e le preferenze dell'utente.

Per ogni [profilo](../../personal/global-settings.md#default-profile), ad eccezione di *Sfoglia mappa*, OsmAnd seleziona per impostazione predefinita il [tipo di navigazione](#navigation-type) ottimale e i relativi [parametri del percorso](../routing/osmand-routing.md#routing-types). Tuttavia, puoi scegliere qualsiasi tipo ti piaccia e modificare i parametri in base alle tue preferenze e alle condizioni esterne del viaggio imminente.

Tutti i parametri del percorso sono descritti in dettaglio nelle sezioni corrispondenti della documentazione:
*[Routing auto (Camion, Moto)](../routing/car-based-routing.md), [Routing bici (MTB)](../routing/bicycle-based-routing.md), [Routing ciclomotore](../routing/moped-routing.md), [Routing pedonale](../routing/pedestrian-routing.md), [Routing trasporto pubblico](../routing/public-transport-navigation.md), [Routing a cavallo](../routing/horse-routing.md), [Routing sci](../routing/ski-routing.md), [Routing treno](../routing/train-routing.md), [Routing barca](../routing/boat-navigation.md), [Routing diretto al punto](../routing/direct-to-point-routing.md), [Routing linea retta](../routing/straight-line-routing.md), [Routing online](../routing/online-routing.md), [Routing BRouter](../routing/brouter.md)*.


### Ricalcola percorso {#recalculate-route}

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

Il parametro **Calcolo del percorso** modifica automaticamente il percorso calcolato quando si devia da esso o si guida nella direzione opposta. In entrambi i casi, questa impostazione ti aiuta a mantenere la direzione di viaggio e a raggiungere la tua destinazione senza perdere tempo a cercare manualmente un nuovo percorso.

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> in caso di deviazione* | <Translate android="true" ids="recalculate_route_distance_promo"/> | Se i [messaggi vocali](../guidance/voice-navigation.md#voice-settings) sono attivati, OsmAnd annuncia che il percorso viene ricalcolato. |
| *Ricalcola percorso in caso di direzione inversa* | Il tuo percorso verrà ricalcolato se ti muovi verso il punto di partenza. | Con questa impostazione disattivata, il movimento verso il punto di partenza non è considerato una deviazione dal percorso (purché segua il percorso calcolato). |


### Impostazioni di sviluppo {#development-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *Menu → Impostazioni → profilo app → Impostazioni di navigazione → Parametri del percorso → Sviluppo*

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *Menu → Impostazioni → profilo app → Impostazioni di navigazione → Parametri del percorso → Sviluppo*

![Impostazioni di navigazione iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>

I parametri nella sezione **Sviluppo** sono principalmente per utenti avanzati e sono disponibili solo quando il [plugin di sviluppo OsmAnd](../../plugins/development.md) è abilitato.

| Parametro | Descrizione |
|:------------|:---------------|
| *Tipo di routing* (*Android*) / *Algoritmo di routing* (*iOS*) | <ul><li>**A*** 2 fasi (*Android*) / **A*** (*iOS*) aggiunge una fase extra all'algoritmo predefinito per migliorare la qualità del percorso calcolato. Questa opzione può essere utile per trovare percorsi in reti stradali grandi e complesse, ma il calcolo del percorso potrebbe richiedere più tempo.</li><li>**A* classico** (*Android*) / **Gerarchie autostradali** (*iOS*) ottimizza la pianificazione del percorso favorendo le strade principali e le autostrade, minimizzando il numero di svolte e incroci sul percorso. Particolarmente efficace su lunghe distanze.</li><li>**HH (Gerarchie autostradali) x Java** (*solo Android*) si basa sull'implementazione di strutture dati gerarchiche per ottimizzare la ricerca del percorso su una mappa, tenendo conto dei vincoli di runtime e del consumo di risorse del dispositivo, ed è realizzata sulla piattaforma Java.</li><li>**HH (Gerarchie autostradali) x C++** (*solo Android*) è un algoritmo che utilizza il linguaggio di programmazione C++ per elaborare in modo efficiente i dati della rete stradale e costruire percorsi ottimali utilizzando strutture dati gerarchiche. È ottimizzato per l'elaborazione rapida di grandi quantità di dati ed è particolarmente efficace per la navigazione di mappe con molte reti stradali.</li></ul> |
| *Approssimazione GPX* (*solo Android*) | <ul><li>L'approssimazione GPX **basata sul routing** in **C++ e Java** utilizza i dati del percorso per approssimare le tracce GPS con i percorsi stradali esistenti, il che migliora la precisione della traccia e riduce le dimensioni della traccia.</li><li>Le approssimazioni GPX **basate sulla geometria** in **C++ e Java** funzionano in base a principi geometrici per approssimare rapidamente e accuratamente le tracce GPS, consentendo un'elaborazione efficiente di grandi quantità di dati.</li></ul> |
| *Zoom automatico* | <ul><li>**Discreto** consente di ingrandire la mappa a un livello di dettaglio specifico misurato in pochi passaggi discreti.</li><li>**Fluido** fornisce un cambiamento graduale della scala della mappa con effetti di animazione fluidi senza scatti o salti.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*solo Android*) | Utilizza gli [aggiornamenti OsmAnd Live](../../personal/maps-resources.md#osmand-live) durante il routing. Nota che si consiglia di utilizzare questa opzione solo a scopo di test. |

<!--
| Parameter | Description | Note |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>* | Allows using [OsmAnd Live updates](../../personal/maps-resources.md#osmand-live) while routing. Note, that we recommend using this option for testing purposes only. |
| *<Translate android="true" ids="use_two_phase_routing"/>* | Adds an extra phase to the default (A*) algorithm to improve the quality of the calculated route. This option may be useful for finding routes in large and complex road networks, although it may take more time for route calculation. |
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/> |
-->


## Messaggi vocali {#voice-prompts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Impostazioni di navigazione vocale Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> button* *(or <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Choose profile → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Impostazioni di navigazione vocale iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

La prima parte dell'articolo *[Messaggi vocali / Notifiche](./voice-navigation.md)* descrive in dettaglio come impostare i messaggi vocali.

Le istruzioni audio durante la navigazione ti aiutano, come conducente o pedone, a raggiungere la tua destinazione mentre [navighi un percorso selezionato](../setup/route-navigation.md). Contengono informazioni su svolte, direzioni di guida, segnali stradali, distanze dalla tua destinazione e altri fattori che potrebbero influenzare la tua navigazione.

Se selezioni una traccia come punto di destinazione, devi utilizzare l'opzione [Collega alle strade](../setup/gpx-navigation.md#attach-to-the-roads) affinché i messaggi vocali funzionino correttamente.

I *messaggi vocali* ti consentono di concentrarti sulla strada e di non essere distratto dalla mappa o dal dispositivo di navigazione. Migliorano anche la sicurezza di guida, riducono il tempo necessario per navigare in terreni sconosciuti e possono essere utili per diversi [tipi di percorsi](../routing/osmand-routing.md#routing-types).


## Avvisi sullo schermo {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Impostazioni di navigazione](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Impostazioni di navigazione](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>

L'impostazione di navigazione **Avviso schermo** abilita il [**Widget Avvisi**](../../widgets/nav-widgets.md#alert-widget). *Dettagli:*

- Quando ti avvicini a uno degli ostacoli supportati sulla strada, le notifiche appaiono nell'angolo in basso a sinistra della mappa.
- Se configuri i [*messaggi vocali e testuali*](../../navigation/guidance/voice-navigation.md) disponibili nell'app OsmAnd, avrai un viaggio più confortevole e sicuro.
- L'aspetto e la tempistica dei messaggi dipendono dalle impostazioni della tua velocità. Puoi trovarli [nell'articolo](../../../technical/algorithms/voice-prompt-triggering.md).
- Il comportamento degli *Avvisi schermo* è influenzato anche dall'impostazione [Mostra punti lungo il percorso](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route).

Puoi ***selezionare quali avvisi*** vuoi vedere sullo schermo dell'app durante la navigazione:

- **Limite di velocità** ([info OSM Wiki](https://wiki.openstreetmap.org/wiki/Speed_limits)). Nelle impostazioni degli avvisi schermo, il *Limite di velocità* viene visualizzato solo sullo schermo con gli *Avvisi sul traffico* attivati. Se vuoi vedere i limiti di velocità durante la navigazione senza altri avvisi, usa il [widget](../../widgets/nav-widgets.md#speed-limit).
- **Avvisi sul traffico** ([info OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). Ulteriori informazioni sono disponibili nell'articolo [Schermata della mappa durante la navigazione](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings).
- **Attraversamenti pedonali** ([info OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **Autovelox** ([info OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). Per maggiori informazioni sull'impostazione Autovelox in OsmAnd, leggi [Tipi di avviso](../../widgets/nav-widgets.md#alert-types) e l'articolo *Impostazioni globali*, sezione [Legale](../../personal/global-settings.md#legal).
- **Gallerie** ([info OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
I tipi di avvisi hanno un aspetto visivo diverso, che dipende dalla regione di viaggio. OsmAnd non si propone di presentare segnali stradali identici al 100%, ma evidenzia alcune somiglianze.
:::


## Mappa durante la navigazione {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*

</TabItem>

</Tabs>

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

La **mappa viene utilizzata durante la navigazione** per determinare la tua posizione, pianificare il tuo percorso e l'orientamento del terreno. Durante la navigazione, puoi visualizzare la mappa con l'*auto-centratura*, spostarla e *ingrandire e rimpicciolire* per vedere l'area richiesta. La mappa può anche visualizzare indicatori che indicano punti di interesse, percorsi, condizioni meteorologiche, segnali stradali e altri oggetti per aiutarti a navigare. La mappa può essere aggiornata in *tempo reale* e visualizza *informazioni aggiornate* che possono influenzare la pianificazione del percorso.

Puoi scoprire come cambia il comportamento della mappa durante la navigazione nell'articolo [Schermata della mappa durante la navigazione](../guidance/map-during-navigation.md).


## Personalizza la linea del percorso {#customize-route-line}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*

![Impostazioni di navigazione](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Impostazioni di navigazione](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>

Con l'impostazione **Personalizza linea del percorso**, puoi scegliere l'aspetto della linea del percorso che sarà visibile sulla mappa durante la navigazione. Puoi selezionare il *colore*, la *larghezza della linea* e la visualizzazione delle *frecce di svolta* su di essa. Per ogni profilo, puoi scegliere una visualizzazione della linea diversa. Tutti questi parametri sono descritti in dettaglio nell'articolo *Schermata della mappa durante la navigazione* nella sezione [Aspetto della linea del percorso](../../navigation/guidance/map-during-navigation.md#route-line-appearance).


## Parametri del veicolo {#vehicle-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>

Per un calcolo ottimale del percorso in OsmAnd, dovresti considerare i seguenti parametri del veicolo:

1. Imposta la [*Velocità predefinita* o le *Velocità stradali*](#default-speed--road-speeds), come [velocità minima e massima](#road-speeds) del veicolo. Questo aiuterà l'applicazione a determinare il tempo necessario per completare il percorso e le consentirà di scegliere il percorso migliore, considerando i limiti di velocità sui diversi segmenti stradali.
2. Specifica il [*tipo*](#fuel-used-by-motor) di carburante utilizzato dal motore. Questo consentirà all'app di stimare le emissioni di CO2.
3. Inserisci la [*capacità del tuo serbatoio*](#fuel-tank-capacity) per monitorare accuratamente il livello e il consumo del carburante.
4. Definisci [*parametri di dimensioni e peso*](#size-parameters) del tuo veicolo, che possono aiutare l'app a calcolare il percorso ottimale ed evitare ostacoli sulla strada a causa di restrizioni.

L'impostazione corretta dei parametri nell'app OsmAnd ti aiuterà a evitare problemi durante la navigazione di un percorso, a scegliere quello più adatto in base al tipo di veicolo e alle restrizioni stradali e a calcolare il tempo per il tuo viaggio.


### Parametri di dimensione {#size-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

I parametri del veicolo influenzano la navigazione e la costruzione del percorso perché determinano la disponibilità di strade, ponti, traghetti, dighe e altre infrastrutture. Se l'altezza, la larghezza, la lunghezza o il peso di un veicolo superano i valori consentiti per determinate sezioni stradali, il sistema di navigazione OsmAnd troverà un percorso alternativo per evitare ostacoli lungo il percorso.

- Le unità di misura corrisponderanno alle impostazioni selezionate in *Impostazioni generali → [Unità e formati](../../personal/profiles.md#units--formats)*.
- I parametri del veicolo possono essere impostati manualmente.
- Se selezioni manualmente il parametro di misurazione del veicolo, l'applicazione ti offrirà il valore più vicino dall'elenco predefinito. Ciò è necessario per evitare errori e costruire il percorso in modo più corretto.
- Puoi scegliere i parametri del veicolo da un elenco predefinito di dimensioni.
- Non impostare la dimensione, *Nessuno*, il che significa che non verranno applicate restrizioni al parametro selezionato.

#### Limiti {#limits}

**1.** [**<Translate android="true" ids="routing_attr_weight_name"/> limite**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> Il parametro Peso è disponibile solo nei tipi di navigazione come [*Auto, Camion* e *Moto*](../../navigation/routing/car-based-routing.md).

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.** [**<Translate android="true" ids="routing_attr_height_name"/> limite**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> Il parametro Altezza è disponibile solo nei tipi di navigazione come *[Auto, Camion, Moto](../../navigation/routing/car-based-routing.md)* e *[Barca](../../navigation/routing/boat-navigation.md)*.

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)

**3.** [**<Translate android="true" ids="routing_attr_length_name"/> limite**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> Il parametro Lunghezza è disponibile solo nei tipi di navigazione come [*Auto, Camion* e *Moto*](../../navigation/routing/car-based-routing.md).

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**<Translate android="true" ids="routing_attr_width_name"/> limite**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> Il parametro Larghezza è disponibile solo nei tipi di navigazione come *[Auto, Camion, Moto](../../navigation/routing/car-based-routing.md)* e *[Barca](../../navigation/routing/boat-navigation.md)*.

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

I limiti sui parametri del veicolo possono essere importanti per la navigazione e la sicurezza stradale. Alcune di queste restrizioni possono includere:

1. Restrizioni sui veicoli che si muovono in determinate aree urbane.
2. Restrizioni sul movimento dei veicoli su specifiche sezioni stradali, come dove ci sono ponti, gallerie con spazio limitato, cavalcavia a bassa elevazione, curve complesse o altre strutture.
3. Limiti di peso per asse del veicolo possono essere particolarmente importanti per i camion.
4. Restrizioni per i veicoli che si muovono in determinate condizioni, come alte temperature, strade bagnate o innevate, di notte o in condizioni meteorologiche con visibilità limitata.

Queste restrizioni possono essere importanti per la navigazione e dovrebbero essere considerate durante la pianificazione di un percorso. Se un veicolo supera i limiti, ciò può comportare problemi di sicurezza stradale, danni alle infrastrutture, multe per incidenti e altre conseguenze legali. Pertanto, i conducenti dovrebbero esaminare attentamente il percorso e assicurarsi che l'altezza del loro veicolo rispetti i limiti.


### Parametri del carburante {#fuel-parameters}

#### Carburante utilizzato dal motore {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Percorso di navigazione Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorso di navigazione iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

Se selezioni il tipo di motore nei parametri del veicolo, i [***dati sull'impronta di CO2***](../../navigation/setup/route-details.md#elevation-info) verranno visualizzati sopra il grafico in [Dettagli del percorso](../setup/route-details.md).
Sono disponibili sei tipi di carburante: ***Benzina, Diesel, GPL, GNC, Elettrico*** e ***Ibrido***.

**Applicabilità:**

L'impostazione **Carburante utilizzato dal motore** è disponibile solo nella navigazione basata su veicoli come *[Auto, Moto e Camion](../../navigation/routing/car-based-routing.md)*.


#### Capacità del serbatoio del carburante {#fuel-tank-capacity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>

Il parametro **Capacità del serbatoio del carburante** ti consente di monitorare in modo più accurato il livello e il consumo di carburante del tuo veicolo fornendo il volume totale del tuo serbatoio. L'unità di misura per la capacità del carburante è determinata dalle impostazioni configurate in *Menu → Configura profilo → Impostazioni generali → Unità e formati → Unità di volume*. Per una guida dettagliata sull'impostazione di Unità e formati, fai riferimento all'articolo [Profilo (Impostazioni)](https://osmand.net/docs/user/personal/profiles#units--formats).

OsmAnd supporta le seguenti unità per la capacità:

- Galloni - **gal**. Questa abbreviazione viene utilizzata per rappresentare sia i **galloni imperiali** che i **galloni statunitensi**, a seconda delle preferenze di unità selezionate.
- Litri - **l**. L'unità metrica per la capacità.

**Applicabilità:**

L'impostazione **Capacità del serbatoio del carburante** è disponibile solo nella navigazione basata su veicoli. Per i tipi di navigazione come *Bicicletta*, *Equitazione*, *A piedi* e *Sci*, questo parametro non viene visualizzato nei Parametri del veicolo.

Inserendo la capacità esatta del tuo serbatoio del carburante, l'app può fornire un'esperienza più personalizzata, inclusi:

- Monitoraggio preciso del carburante rimanente in base al tuo consumo.
- Pianificazione del percorso migliorata con soste per il carburante ottimizzate in base alle dimensioni del tuo serbatoio.

Per garantire calcoli e suggerimenti di navigazione accurati, verifica che l'unità selezionata corrisponda allo standard di misurazione del tuo serbatoio.


### Velocità predefinita / Velocità stradali {#default-speed--road-speeds}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni di navigazione](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di navigazione](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>

Per tutti i tipi di navigazione, la velocità minima e massima consentita, sia per impostazione predefinita che per strada, può essere diversa, in base a determinati valori ([Limiti di velocità predefiniti](https://wiki.openstreetmap.org/wiki/Default_speed_limits)) e restrizioni per i veicoli. La velocità è anche impostata con determinati incrementi per rendere le impostazioni dell'applicazione massimamente utilizzabili. Per i profili *A piedi*, *A cavallo* e *In bicicletta*, con piccoli incrementi equivalenti a 0,1 km/h ([Unità e formati](https://osmand.net/docs/user/personal/profiles#units--formats)), e per gli altri profili, con incrementi equivalenti a 1 km/h.
Le impostazioni della velocità determinano quando vengono attivati gli [annunci vocali](../guidance/voice-navigation.md).

Questi parametri vengono utilizzati come velocità per stimare il [tempo di arrivo](../../widgets/nav-widgets.md#time-to-intermediate) quando la velocità non può essere determinata dai dati della mappa:

- per il profilo selezionato;
- se le strade utilizzate non hanno limiti di velocità, il che può anche influenzare il routing;
- se sono selezionate tracce generate dall'utente o importate.


#### Velocità predefinita {#default-speed}

La **velocità predefinita** è la velocità di movimento preimpostata. Viene utilizzata per calcolare il tempo di arrivo e determinare il percorso ottimale in base alla velocità di movimento che l'applicazione considera tipica per questa modalità di trasporto. Ad esempio, auto, trasporto pubblico, pedonale o la velocità impostata manualmente.


#### Velocità stradali {#road-speeds}

<InfoAndroidOnly />

![Impostazioni di navigazione](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)


<!--
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds-r_ios.png)

</TabItem>

</Tabs>

:::note
These settings in iOS are available in *Menu → Settings → app profile → Navigation settings → Route parameters → Road speeds*.
:::

-->

- **Velocità minima**
L'impostazione imposta la velocità di guida minima per tutti i tipi di strada sul percorso. Aumenta la priorità per le strade con una velocità consigliata inferiore alla velocità minima.
- **Velocità massima**
L'impostazione imposta la velocità di guida massima e diminuisce la priorità per le strade con una velocità possibile superiore alla massima.


## Guida dettagliata del percorso {#detailed-track-guidance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Collega alle strade 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png) ![Impostazioni di navigazione Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *Guida dettagliata del percorso*

![Impostazioni di navigazione](@site/static/img/navigation/detailed_track_guidance_1_ios.png) ![Impostazioni di navigazione](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

La funzione **Guida dettagliata del percorso** migliora la precisione della navigazione del percorso quando si utilizzano **percorsi basati su traccia**. Quando si seleziona una traccia come destinazione, è possibile abilitare l'impostazione [Collega alle strade](../setup/gpx-navigation.md#attach-to-the-roads) dal menu [Segui traccia](../setup/gpx-navigation.md#follow-track-options). Ciò garantisce che la traccia sia allineata con le strade esistenti per una navigazione più fluida e precisa.

Ci sono due opzioni per l'utilizzo della *Guida dettagliata del percorso*:

- **<Translate android="true" ids="ask_every_time"/>** (*impostazioni predefinite*) – L'opzione *Collega alle strade* apparirà nella sezione [Dettagli del percorso](../setup/route-details.md) ogni volta che viene calcolato un percorso basato su traccia. Ciò ti consente di decidere se applicare l'attaccamento stradale per ogni sessione di navigazione.

- **<Translate android="true" ids="shared_string_always"/>** – Il processo di attaccamento stradale verrà applicato automaticamente per ogni percorso di *navigazione per traccia* senza richiedere la conferma manuale.

Per maggiori informazioni sull'utilizzo della navigazione basata su traccia, visita [Navigazione per traccia](../setup/gpx-navigation.md).


## Articoli correlati {#related-articles}

- [Parametri del percorso](../routing/osmand-routing.md#routing-types)
- [Preparazione del percorso](../setup/route-navigation.md)
- [Navigazione per traccia](../setup/gpx-navigation.md)
- [Navigazione per marcatori](../setup/markers-navigation.md)
- [Dettagli del percorso](../setup/route-details.md)
- [Schermata della mappa durante la navigazione](./map-during-navigation.md)
- [Messaggi vocali / Notifiche](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Ultimo aggiornamento: Aprile 2025*