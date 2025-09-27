---
source-hash: e574b157e1460483991973a8f0aa82032a697bf0c8250d5dbada1a787ff155e0
sidebar_position: 4
title:  Widget di navigazione
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Panoramica {#overview}

I widget di navigazione vengono attivati durante la navigazione per visualizzare informazioni quali distanza, orario di arrivo o tempo rimanente, prossime svolte, rilevamento, nome della via corrente, informazioni sulla corsia, velocità massima, avvisi di avvicinamento, PDI e waypoint.

![Tutti i widget di navigazione](@site/static/img/widgets/navigational_widgets_all.png)


## Navigazione attiva e passiva {#active-and-passive-navigation}

I widget di navigazione in OsmAnd sono progettati per migliorare sia la modalità di navigazione **attiva** che **passiva**. Questi widget forniscono informazioni preziose come le indicazioni del percorso, i dettagli della strada e i limiti di velocità, a seconda del **profilo di navigazione** selezionato.

#### Navigazione attiva {#active-navigation}

- **Requisiti:**
  - Impostare una **destinazione**.
  - Calcolare il **percorso** utilizzando la funzione *Indicazioni*.
  - **Avviare** la navigazione (la guida vocale è opzionale).
  - Disponibile solo quando ci si muove lungo il percorso.

- **Widget supportati:**
  - Tutti i **widget di navigazione** sono disponibili.

- **Vantaggi principali:**
  - Fornisce **istruzioni svolta-dopo-svolta**, **guida di corsia** e **orario di arrivo previsto (ETA)**.
  - Garantisce aggiornamenti precisi e dinamici durante il viaggio.

#### Navigazione passiva {#passive-navigation}

- **Come funziona:**
  - Non è necessaria alcuna destinazione.
  - Funziona automaticamente quando si seleziona un **profilo di navigazione** (ad es. *Guida*, *Ciclismo*).

- **Funzionalità:**
  - Tenta di determinare la strada che si sta percorrendo utilizzando i dati GPS.
  - Visualizza **informazioni stradali di base**, come [nome della via](#street-name), [informazioni sulla corsia](#lanes), [velocità massima](#speed-limit).

- **Limitazioni:**
  - Alcune funzioni avanzate potrebbero non funzionare correttamente senza una destinazione impostata.
  - Le informazioni fornite potrebbero non essere sempre **precise**, specialmente su reti stradali complesse.

> **NOTA.** *Tenere presente che il profilo **Sfoglia mappa** non supporta i widget di navigazione in nessuna delle due modalità. Passare a un **profilo di navigazione** pertinente per abilitare queste funzioni.*


<!--
Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are unavailable in the **Browse Map** profile.

**Active** navigation requires setting a destination, calculating the route (Directions), and starting navigation (Go), not necessarily with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require a destination point set and works automatically once you switch to any navigational profile, for example, 'Driving'. In that case, the application will try to determine which road you are following and display extra information about it i.e. name, lane info, max speed available. Please note that this approach is unreliable and doesn't support all features.
-->

## Widget altitudine {#elevation-widget}

<InfoAndroidOnly/>

:::note

<ProFeature/> Questo widget può essere utilizzato solo con la funzione Pro dagli <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">abbonati a OsmAnd Pro</a>.

:::

Il widget Altitudine mostra un grafico con l'altitudine e la pendenza del percorso di navigazione e la posizione corrente su questo grafico con l'altitudine e la pendenza attuali. Il grafico è tracciato su due assi. L'asse X è la distanza del percorso. L'asse Y è l'altitudine, il cui valore dipende dal rilievo, e la pendenza è visualizzata in percentuale.

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Widget altitudine](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### Interazioni con il grafico {#interactions-with-the-graph}

- *Zoom avanti/indietro*. Per impostazione predefinita, il grafico mostra il percorso dalla posizione corrente fino a 10 km in avanti. È possibile utilizzare il [movimento a due dita](../map/interact-with-map.md#gestures) per ingrandire e ridurre la visualizzazione per una visione più dettagliata dei cambiamenti di altitudine sul percorso. È anche possibile spostare il grafico a destra, in avanti sul percorso, e indietro fino alla posizione corrente.
- *Posizionare un punto sul grafico*. Se si desidera vedere l'altitudine e il valore in gradi in un punto specifico del percorso, è possibile toccare un punto qualsiasi del grafico e apparirà un puntatore con i valori.


#### Contenuto {#whats-in}

Quando si seleziona un percorso e si preme il pulsante **Start**, la mappa si apre con la posizione corrente, il percorso e il widget nella parte inferiore dello schermo. Il widget contiene il grafico e le informazioni su *Salita*, *Discesa*, *Pendenza*, distanza, altitudine e angolo di pendenza. È possibile selezionare la *scala ottimale* e vedere tutti i possibili ostacoli sul percorso.

- Tutti i valori sono indicati per l'intero percorso o solo per l'intervallo selezionato scalando il grafico.
- Leggere la [licenza per i dati DEM](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection) utilizzati da OsmAnd per determinare l'altitudine.

|  |
|:------------|
| ***Punto di localizzazione*** |
| La ***Posizione corrente*** sul grafico include un'icona di posizione, l'altitudine e il valore percentuale della pendenza. Il lato destro del widget contiene l'altitudine e la pendenza massime, il loro valore medio e il valore minimo nella sezione del percorso selezionata visibile sul grafico. |
| ![punto](@site/static/img/widgets/sch_1-1.png)|
| ***Informazioni aggiuntive*** |
| Il lato destro del widget contiene i dati relativi all'altitudine e alla pendenza massime, al valore medio di entrambe e all'altitudine e alla pendenza minime nella sezione del percorso selezionata visibile sul grafico. |
|  ![dati](@site/static/img/widgets/sch_1-2.png)|
|I valori ***Salita*** e ***Discesa*** sono le somme delle distanze dal punto di localizzazione alla fine del grafico visibile. Se non c'è un punto di localizzazione sul grafico, allora è la somma dell'intero grafico visibile sullo schermo (questo può accadere quando si cambia la scala e la posizione esce dal grafico).|
| **Salita** – mostra la somma di tutte le distanze con altitudine crescente dal punto di localizzazione alla fine del grafico visibile o per la sezione selezionata del percorso senza il punto di localizzazione visibile sullo schermo. |
| ![schema salita](@site/static/img/widgets/sch_uphill_1.png) ![schema salita](@site/static/img/widgets/sch_uphill_2.png)|
| **Discesa** – mostra la somma di tutte le distanze con altitudine decrescente dal punto di localizzazione alla fine del grafico visibile o per la sezione selezionata del percorso senza il punto di localizzazione visibile sullo schermo.|
| ![schema discesa](@site/static/img/widgets/sch_downhill_1.png) ![schema discesa](@site/static/img/widgets/sch_downhill_2.png)|
|***Pendenza*** è il rapporto tra il percorso e l'orizzontale, dove zero indica l'orizzontalità e il numero di gradi indica un grado di pendenza maggiore o più ripido.|
| **Pendenza** – mostra la pendenza massima della strada in percentuale dal punto di localizzazione alla fine del grafico visibile o per la sezione selezionata del percorso senza il punto di localizzazione visibile sullo schermo. |
|![schema pendenza](@site/static/img/widgets/sch_grade_1.png) ![schema pendenza](@site/static/img/widgets/sch_grade_2.png)|


## Widget rilevamento {#bearing-widget}

Il rilevamento è la direzione verso un obiettivo esterno al veicolo, come una destinazione o un punto di origine. Un rilevamento può essere *Relativo* (in base alla rotta) o *Magnetico* (in base alla bussola). Ad esempio, un rilevamento magnetico di 180° è la direzione verso sud, e un rilevamento relativo di 180° è direttamente dietro di voi. I punti cardinali sono le quattro direzioni principali della bussola. Sono Nord (*N* - 0° o 360°), Est (*E* - 90°), Sud (*S* - 180°) e Ovest (*O* - 270°).

![Widget registrazione viaggio](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget registrazione viaggio](@site/static/img/widgets/bearing_widget.png) ![Widget registrazione viaggio](@site/static/img/widgets/bearing_widget_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget registrazione viaggio](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="shared_string_bearing"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="shared_string_bearing"/>* |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | **Android:** È possibile modificare il formato di visualizzazione dei dati per le unità angolari: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
|  | **iOS:** È possibile modificare il formato di visualizzazione dei dati per le unità angolari: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |


#### Come funziona {#how-it-works}

Per visualizzare il rilevamento, è necessario selezionare un **punto di destinazione**. Se per la navigazione è stato selezionato un punto di **destinazione** (o il **primo punto intermedio**, se presente), questo verrà utilizzato come punto di destinazione. Altrimenti, verrà utilizzato il **marcatore selezionato più in alto**.

- Il [rilevamento relativo](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) è l'angolo tra la direzione di avanzamento e il punto di destinazione. La **direzione di avanzamento** è la **direzione del movimento** ottenuta dai sensori GPS o, se si è fermi, **dove si è puntato il dispositivo** (cioè l'orientamento del dispositivo secondo la sua bussola magnetica). Esempio: un oggetto con un rilevamento relativo di 0° si trova direttamente di fronte a voi e un oggetto con un rilevamento relativo di 180° si trova direttamente dietro di voi. Il **rilevamento relativo** è l'angolo tra la direzione di avanzamento e il punto di destinazione.

- Il [rilevamento magnetico](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) è l'angolo orario (orizzontale) tra il nord magnetico e il punto di destinazione osservato dalla propria posizione. È necessario seguire questo valore della bussola magnetica per raggiungere la destinazione. Esempio: se il **rilevamento magnetico** è indicato come 0° M, è necessario muoversi rigorosamente verso il nord magnetico per raggiungere il punto di destinazione.

- Il [rilevamento vero](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages) è espresso come l'angolo orizzontale tra il meridiano geografico e una linea sulla Terra. In particolare, il **rilevamento vero del punto** è l'angolo misurato in gradi in senso orario dalla linea del Nord Vero. Il software OsmAnd mostrerà il rilevamento e la rotta veri nella nostra interfaccia intuitiva, rendendo facile prendere la decisione giusta in anticipo.

### Navigazione lungo la linea lossodromica {#navigation-along-the-rhumb-line}

- **Rilevamento relativo**. Se si mantiene un rilevamento relativo di 0 gradi e si procede in avanti, si arriverà al punto di destinazione, ma non con il percorso più breve ( [linea lossodromica](https://en.wikipedia.org/wiki/Rhumb_line) ).
- **Rilevamento magnetico**. Se si allinea la bussola della propria imbarcazione/veicolo con il valore del widget e si procede in avanti, si arriverà a destinazione, ma non con il percorso più breve ( [linea lossodromica](https://en.wikipedia.org/wiki/Rhumb_line) ).

<!--![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- By tapping: Changes between  Relative bearing or Magnetic bearing (with "M") -->


## Punti di navigazione {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

Il gruppo di widget *Punto di navigazione* mostra la distanza rimanente alla destinazione, il punto intermedio, l'orario di arrivo al punto intermedio o il tempo di percorrenza per il percorso calcolato e l'orario di arrivo previsto.

### Informazioni percorso {#route-information}


![Widget destinazione](@site/static/img/widgets/route_information_widget.png)

Il widget *Informazioni percorso* fornisce dati in tempo reale sul percorso di navigazione in corso e un modo rapido per [gestire un percorso attivo](../navigation/setup/route-navigation.md#start--stop-navigation). Aiuta a tenere traccia dei dettagli chiave del percorso e consente di interrompere o riprendere la sessione di navigazione corrente con un'interazione minima.

**Informazioni visualizzate:**

- **Orario di arrivo previsto (ETA)**. Mostra l'orario di arrivo previsto alla destinazione finale.
- **Tempo di viaggio rimanente**. Visualizza il tempo stimato rimanente per raggiungere la destinazione.
- **Distanza dalla destinazione**. Indica la distanza totale rimanente fino alla destinazione finale e le distanze dai punti intermedi.

**Menu impostazioni**:

- Selezionare una **Visualizzazione predefinita** per dare priorità a uno dei seguenti valori: *Orario di arrivo previsto*, *Tempo rimanente*, *Distanza*.
- In **Priorità di visualizzazione**, selezionare tra *Prima la destinazione (predefinito)* o *Prima l'intermedio* per dare priorità alle informazioni sul percorso più pertinenti.

> NOTA: il widget è visibile solo durante la navigazione.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Aggiungi widget →<Translate android="true" ids="map_widget_route_information"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → Aggiungi widget →Informazioni percorso* |
| Con un tocco | Toccare il pulsante con la freccia per aprire il pannello [Avvia/Interrompi navigazione](../navigation/setup/route-navigation.md#start--stop-navigation) |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### Distanza dalla destinazione {#distance-to-destination}

![Widget destinazione](@site/static/img/widgets/destination_widget.png)

Il widget visualizza la distanza rimanente fino all'ultimo punto di destinazione quando si segue un percorso calcolato.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| Con un tocco | Sposta la mappa sul punto di destinazione. |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |

### Distanza dall'intermedio {#distance-to-intermediate}

![Widget destinazione intermedia](@site/static/img/widgets/intermediate_destination_widget.png)

Il widget mostra la distanza dal primo punto intermedio lungo il percorso calcolato. Dopo aver superato i punti intermedi, lo spazio verrà aggiornato al punto intermedio successivo. Se non ci sono punti intermedi, il widget non viene visualizzato.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| Con un tocco | **Un punto intermedio** - sposta la mappa sul punto intermedio. <br /> **Due o più punti intermedi** - apre il menu Elenco destinazioni. |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |

### Tempo all'intermedio {#time-to-intermediate}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget Orario di arrivo Tempo rimanente](@site/static/img/widgets/arrival_time_widget_android.png) ![Widget Orario di arrivo Tempo rimanente](@site/static/img/widgets/time_to_go_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget Orario di arrivo Tempo rimanente](@site/static/img/widgets/arrival_time_widget_ios.png) ![Widget Orario di arrivo Tempo rimanente](@site/static/img/widgets/time_to_go_widget_ios.png)

</TabItem>

</Tabs>

Il widget mostra l'*Orario di arrivo* o il *Tempo rimanente* fino al primo punto intermedio. Durante la navigazione, l'ora viene costantemente aggiornata e, non appena viene superato un punto intermedio, l'ora verrà aggiornata al waypoint successivo. Ad esempio, se si interrompe la navigazione, il *Tempo rimanente* rimarrà invariato e l'*Orario di arrivo* sarà uguale al *Tempo rimanente* più l'*Ora corrente*.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| Con un tocco | Passa da *Orario di arrivo* a *Tempo rimanente* e viceversa. |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


### Tempo alla destinazione {#time-to-destination}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget Orario di arrivo intermedio e tempo](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget Orario di arrivo intermedio e tempo](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

Il widget visualizza l'*Orario di arrivo* o il *Tempo rimanente* fino all'ultimo punto di destinazione. L'ora viene costantemente aggiornata durante la navigazione ed è uguale al tempo del percorso dalla posizione corrente.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_time_to_destination"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| Con un tocco | Passa da *Orario di arrivo* a *Tempo rimanente* e viceversa. |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


## Limite di velocità {#speed-limit}

![Widget limite di velocità](@site/static/img/widgets/speed_limit_widget_2.png)

Il widget *Limite di velocità* visualizza il limite di velocità corrente in base ai dati della mappa per il percorso.

- I dati sono presi dal [progetto OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- Il widget funziona in modalità di navigazione passiva e attiva.
- Se i dati sui limiti di velocità non sono disponibili per una strada o un'area specifica, *il widget non apparirà*.

> NOTA: assicurarsi che le [mappe siano aggiornate](../personal/maps-resources.md#updates) e di aver scaricato tutti i dati regionali necessari per accedere alle informazioni più recenti sui limiti di velocità.

| |  |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_max_speed"/>* |
|  |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_max_speed"/>* |
| Con un tocco | Nessuna modifica |
| Tocco lungo | Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


## Guida al percorso {#route-guidance}


![Widget prossime svolte](@site/static/img/widgets/next_turns_widget.png)

Fornisce una guida al percorso in tempo reale, inclusa la distanza dalla prossima svolta, il nome della strada, il nome della via corrente e le informazioni sulla corsia. I widget sono attivi durante la navigazione.

I widget *Guida al percorso* contengono informazioni su:

- [Corsie](#lanes) - mostra la posizione attuale delle corsie stradali ed evidenzia quelle su cui si dovrebbe guidare. (solo per i _pannelli Superiore / Inferiore_)
- [Prossima svolta](#next-turn) - la prossima svolta con una grande freccia che rappresenta la manovra e con i dati sulla distanza da essa.
- [Prossima svolta (piccola)](#next-turn) - la prossima svolta con una piccola freccia che rappresenta la manovra e con i dati sulla distanza accanto alla freccia. (solo per i _pannelli Sinistro / Destro_)
- [Seconda prossima svolta](#next-turn) è la svolta successiva alla prima, che si attiva se si trova a distanza di avvicinamento.

| | |
|:------------|:------------|
| Abilita      | **Android:** *Menu → Configura schermo → Pannello Sinistro / Destro / Superiore / Inferiore → Guida al percorso → Aggiungi widget → Corsia, Prossima svolta, Seconda prossima svolta*  |
|      | **iOS:** *Menu → Configura schermo → Pannello Sinistro / Destro / Superiore / Inferiore → Guida al percorso → Aggiungi widget → Corsia, Prossima svolta, Seconda prossima svolta*   |
| Con un tocco  | **Prossima svolta**: se le [istruzioni vocali](../navigation/guidance/voice-navigation.md) sono abilitate, vengono pronunciate la manovra successiva e la distanza da essa. <br/> **Corsia**: Nessuna modifica. |
| Tocco lungo    | **Prossima svolta**: Apre il [Menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) <br/> **Corsie**: Nessuna modifica. |


### Prossima svolta {#next-turn}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![widget guida percorso](@site/static/img/widgets/route_guidence_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Avvicinamento PDI/Preferiti iOS](@site/static/img/widgets/route_guidence_widgets_ios.png)

</TabItem>

</Tabs>

- **Prossima svolta** - la prossima svolta con una grande freccia che rappresenta la manovra e con i dati sulla distanza da essa.
- **Prossima svolta (piccola)** - la prossima svolta con una piccola freccia che rappresenta la manovra e con i dati sulla distanza accanto alla freccia. (solo per i _pannelli Sinistro / Destro_)
- **Seconda prossima svolta** - la svolta successiva alla prima, che si attiva se si trova a distanza di avvicinamento.

### Indicazioni colorate per la prossima svolta {#color-prompts-for-next-turn}

Questa tabella mostra il tempo approssimativo fino all'attivazione delle indicazioni e la corrispondente indicazione a colori delle frecce per eseguire la manovra. Per ulteriori informazioni, fare riferimento alla [documentazione tecnica](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) o all'articolo [Istruzioni vocali](../navigation/guidance/voice-navigation.md).

| Colore     | ~ Tempo di attivazione | Distanza   | Tipo di indicazione     |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 Verde  | 5 secondi      | Vicino   | Svolta ora        |
| 🟡 Giallo | 20 secondi     | In avvicinamento| Svolta tra `x` m   |
| ⚪ Grigio   | > 100 secondi  | Lontano    | Prepararsi a svoltare |


### Corsie {#lanes}

![Widget corsie](@site/static/img/widgets/lanes_widget.png)

Il widget **Corsie** evidenzia la corsia corrente quando la navigazione è attiva e visualizza la disposizione delle corsie per la strada effettiva quando la navigazione è passiva. Questo widget è disponibile solo per i pannelli Superiore e Inferiore. I dati sono presi dal [progetto OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:turn).

### Indicazioni colorate per le corsie {#color-prompts-for-lanes}

Visualizza un widget in base alle impostazioni del tempo di avvicinamento. Il colore della corsia è associato alle [istruzioni vocali](../navigation/guidance/voice-navigation.md) e al tempo rimanente per eseguire la manovra.

| Colore     | ~ Tempo di attivazione | Distanza    | Tipo di indicazione |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 Verde  | 5 secondi      | Vicino    | [Svolta ora](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) |
| 🟡 Giallo | 20 secondi     | In avvicinamento | [Svolta tra X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) |



## Widget avvisi {#alert-widget}

![Widget informazioni avvisi](@site/static/img/widgets/alert_information_widget.png)

Il **Widget avvisi** combina diversi tipi di avvisi che vengono visualizzati nell'angolo in basso a sinistra durante la navigazione.

- È possibile attivare e disattivare avvisi come *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>,* e *<Translate android="true" ids="show_tunnels"/>*. Altri avvisi sono attivi per impostazione predefinita se il widget è abilitato.

- Per il tipo di avviso *Limite di velocità*, è possibile regolare il valore <Translate android="true" ids="speed_limit_exceed"/> nelle impostazioni delle istruzioni vocali per adattarlo meglio alla velocità del veicolo e alla velocità GPS.

- La maggior parte degli avvisi viene visualizzata sullo schermo e annunciata tramite istruzione vocale per 15 secondi, così come il tempo di attivazione per il superamento di un Waypoint, un Punto preferito o un PDI. Per saperne di più, leggere [qui](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| Abilita | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
|  | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### Tipi di avviso {#alert-types}

I tipi di avviso hanno un design visivo diverso, che dipende dalla **<Translate android="true" ids="driving_region"/>** e può essere configurato tramite *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>*. OsmAnd non mira a rappresentare segnali stradali identici al 100%, ma ne sottolinea alcune somiglianze.

| | | |
|:------------|:------------|:------------|
| Nome | Descrizione | Icona |
| *<Translate android="true" ids="show_traffic_warnings"/>* | La [moderazione del traffico](https://en.wikipedia.org/wiki/Traffic_calming) utilizza la progettazione fisica e altre misure per migliorare la sicurezza di automobilisti, pedoni e ciclisti. | ![Widget avviso moderazione traffico](@site/static/img/widgets/warnings_traffic_calming.png) ![Widget avviso moderazione traffico USA](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | Un [attraversamento pedonale](https://en.wikipedia.org/wiki/Pedestrian_crossing) (principalmente in inglese britannico) o strisce pedonali è un luogo designato per i pedoni per attraversare una strada, una via o un viale. OsmAnd mostra l'avviso dell'attraversamento pedonale non controllato. | ![Widget avviso moderazione traffico](@site/static/img/widgets/warnings_pedestrian.png) ![Widget avviso moderazione traffico USA](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | Nella maggior parte dei paesi, i [limiti di velocità stradale](https://en.wikipedia.org/wiki/Speed_limit) stabiliscono la velocità massima, media o minima legale alla quale i veicoli stradali possono viaggiare su un determinato tratto di strada. In OsmAnd, l'avviso viene mostrato quando si supera la velocità. È possibile impostare i parametri di superamento della velocità (0, 5, 10.. km/h). ![Widget avviso superamento velocità](@site/static/img/widgets/ex_warning_speed.png) | ![Widget avviso limite velocità](@site/static/img/widgets/warnings_limit.png) ![Widget avviso limite velocità CA](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Widget avviso limite velocità USA](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | Una galleria è un passaggio sotterraneo, che passa sotto una montagna, un fiume o un'area urbana congestionata. In OsmAnd, l'avviso *Gallerie* contiene informazioni sulla lunghezza della galleria. Se ci si trova in una galleria, mostra la distanza fino alla fine della galleria. ![Widget avviso esempio galleria](@site/static/img/widgets/ex_warning_tunnel.png) | ![Widget avviso galleria](@site/static/img/widgets/warnings_tunnel.png) ![Widget avviso galleria USA](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | Le [telecamere per il controllo del traffico](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) e gli [autovelox](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) registrano le infrazioni al codice della strada, tra cui eccesso di velocità, passaggio con il semaforo rosso e altri tipi di comportamento illegale. <br />**NOTA:** gli avvisi sugli autovelox sono vietati o illegali in alcuni paesi. Per [rimuovere completamente gli autovelox](../personal/global-settings.md#legal) da OsmAnd, andare al menu principale *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>* | ![Widget avviso moderazione traffico](@site/static/img/widgets/warnings_speed_camera.png)   |
| *<Translate android="true" ids="traffic_warning_stop"/>* | Un [segnale di stop](https://en.wikipedia.org/wiki/Stop_sign) è un segnale stradale progettato per notificare ai conducenti che devono fermarsi completamente e assicurarsi che l'incrocio sia sgombro da veicoli e pedoni prima di proseguire oltre il segnale. | ![Widget avviso stop](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* |Questo avviso significa che c'è un [passaggio a livello](https://en.wikipedia.org/wiki/Crossbuck) più avanti. | ![Widget avviso ferrovie](@site/static/img/widgets/warnings_railways.png) ![Widget avviso ferrovie CA](@site/static/img/widgets/warnings_railways_ca.png) ![Widget avviso ferrovie USA](@site/static/img/widgets/warnings_railways_us.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* |Questo avviso indica che c'è un controllo di frontiera più avanti.| ![Widget avviso controllo di frontiera](@site/static/img/widgets/warnings_border_control.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | I [simboli di pericolo o di avvertimento](https://en.wikipedia.org/wiki/Hazard_symbol) sono simboli riconoscibili progettati per avvertire di materiali, luoghi o oggetti pericolosi, tra cui correnti elettriche, veleni e radioattività. | ![Widget avviso pericolo](@site/static/img/widgets/warnings_hazard.png) ![Widget avviso pericolo USA](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | Questo avviso indica che più avanti c'è un casello per una strada a pedaggio. ![Widget avviso casello](@site/static/img/widgets/ex_toll_booth.png) | ![Widget avviso limite velocità](@site/static/img/widgets/warnings_limit.png) |


## Nome della via {#street-name}

Il widget Nome della via mostra **il nome della via corrente** con una freccia dritta, o **il nome della via successiva** con la manovra da eseguire. Il nome della via di solito consiste in uno scudo autostradale, un [nome](https://wiki.openstreetmap.org/wiki/Key:name), un [riferimento](https://wiki.openstreetmap.org/wiki/Key:ref), un [riferimento internazionale](https://wiki.openstreetmap.org/wiki/Key:int_ref) e una [destinazione](https://wiki.openstreetmap.org/wiki/Key:destination).

Nelle **Impostazioni** del widget è possibile scegliere di visualizzare sempre **il nome della via corrente** e utilizzarlo con il widget [**Prossima svolta**](#next-turn). Se si abilita **Informazioni sulla prossima svolta**, il passaggio tra il nome della via corrente e il nome della via successiva avviene quando ci si avvicina al punto in cui si desidera eseguire la manovra (~20 secondi), come per l'istruzione vocale [Svolta tra X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

- Quando si guida lungo una strada o un'autostrada, il widget mostra il nome o la designazione della strada corrente con una freccia blu.

  ![Widget nome via 2](@site/static/img/widgets/street_name_widget_2.png)

- Quando si cambia direzione, il widget mostra lo schema della manovra e il nome (designazione) della strada in cui si deve svoltare.

  ![Widget nome via](@site/static/img/widgets/street_name_widget.png)

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Aggiungi widget → <Translate android="true" ids="map_widget_top_text"/>* |
|   | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Aggiungi widget → <Translate android="true" ids="map_widget_top_text"/>* |
| Con un tocco | Nessuna modifica |


## Avvicinamento PDI / Preferiti {#approach-pois--favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Avvicinamento PDI/Preferiti Android](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Avvicinamento PDI/Preferiti iOS](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

Il widget **Avvicinamento PDI/Preferiti/Waypoint** è combinato con [Nome della via](#street-name) e visualizza l'avvicinamento e il superamento di Punti di interesse, Waypoint della traccia seguita e Preferiti lungo il percorso.

Visualizza il **nome**, l'**icona del punto** e 2 **distanze**:

- **Distanza sul percorso** (in alto) mostra quanta distanza deve essere coperta seguendo il percorso.
- **Distanza di deviazione** è la distanza in linea d'aria dal punto più vicino del percorso al punto stesso.

**iOS** - Oltre alla distanza dal waypoint più vicino, viene visualizzato anche il lato (sinistro o destro) del percorso su cui si trova il waypoint.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu"/> → Avvia navigazione → pulsante matita* |
| Con un tocco | Nessuna modifica |


## Articoli correlati {#related-articles}

- [Configura schermo](./configure-screen.md)
- [Pulsanti della mappa](./map-buttons.md)
- [Widget informativi](./info-widgets.md)
- [Widget di navigazione](./nav-widgets.md)
- [Righello-raggio e Righello](./radius-ruler.md)
- [Widget marcatori](./markers.md)
- [Azione rapida](./quick-action.md)