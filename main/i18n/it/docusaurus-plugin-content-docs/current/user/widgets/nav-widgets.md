---
source-hash: 2a2825755522d1d674eca0e28ae419a075ecef2a2e6c4f86faef75b3b7e8dd3f
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

I widget di navigazione sono abilitati durante la navigazione per visualizzare informazioni come distanza, orario di arrivo o di partenza, svolte successive, rilevamento, nome della strada attuale, informazioni sulla corsia, velocità massima, avvisi di avvicinamento, POI e waypoint.

![Navigational widgets all](@site/static/img/widgets/navigational_widgets_all.png)


## Navigazione attiva e passiva {#active-and-passive-navigation}

I widget di navigazione in OsmAnd sono progettati per migliorare entrambe le modalità di navigazione **attiva** e **passiva**. Questi widget forniscono informazioni preziose come indicazioni sul percorso, dettagli sulla strada e limiti di velocità, a seconda del **profilo di navigazione** selezionato.

#### Navigazione attiva {#active-navigation}

- **Requisiti:**
  - Imposta una **destinazione**.
  - Calcola il **percorso** utilizzando la funzione *Indicazioni*.
  - **Avvia** la navigazione (la guida vocale è opzionale).
  - Disponibile solo quando ci si sposta lungo il percorso.

- **Widget supportati:**
  - Tutti i **widget di navigazione** sono disponibili.

- **Vantaggi principali:**
  - Fornisce **istruzioni svolta per svolta**, **guida alle corsie** e **ETA**.
  - Garantisce aggiornamenti accurati e dinamici durante il viaggio.

#### Navigazione passiva {#passive-navigation}

- **Come funziona:**
  - Non è necessaria alcuna destinazione.
  - Funziona automaticamente quando si seleziona un **profilo di navigazione** (ad esempio, *Guida*, *Ciclismo*).

- **Funzionalità:**
  - Tenta di determinare la strada che si sta seguendo utilizzando i dati GPS.
  - Visualizza **informazioni stradali di base**, come [nome della strada](#street-name), [informazioni sulla corsia](#lanes), [velocità massima](#speed-limit).

- **Limitazioni:**
  - Alcune funzionalità avanzate potrebbero non funzionare correttamente senza una destinazione impostata.
  - Le informazioni fornite potrebbero non essere sempre **precise**, specialmente su reti stradali complesse.

> **NOTA.** *Tieni presente che il profilo **Sfoglia mappa** non supporta i widget di navigazione in nessuna delle due modalità. Passa a un **profilo di navigazione** pertinente per abilitare queste funzionalità.*


<!--
Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are unavailable in the **Browse Map** profile.

**Active** navigation requires setting a destination, calculating the route (Directions), and starting navigation (Go), not necessarily with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require a destination point set and works automatically once you switch to any navigational profile, for example, 'Driving'. In that case, the application will try to determine which road you are following and display extra information about it i.e. name, lane info, max speed available. Please note that this approach is unreliable and doesn't support all features.
-->

## Widget altitudine {#elevation-widget}

<InfoAndroidOnly/>

:::note

<ProFeature/> Questo widget può essere utilizzato solo con la funzionalità Pro <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">Abbonati a OsmAnd Pro</a>.

:::

Il widget Altitudine mostra un grafico con l'altitudine e la pendenza del percorso di navigazione e la posizione corrente su questo grafico con altitudine e pendenza attuali. Il grafico è tracciato su due assi. L'asse X è la distanza del percorso. L'asse Y è l'altitudine, il valore dipende dal rilievo, e la pendenza è visualizzata come percentuale.

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Elevation widget](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### Interazioni con il grafico {#interactions-with-the-graph}

- *Zoom avanti/indietro*. Per impostazione predefinita, il grafico mostra il percorso dalla posizione corrente fino a 10 km in avanti. È possibile utilizzare il [movimento a due dita](../map/interact-with-map#gestures) per ingrandire e rimpicciolire per una visualizzazione più dettagliata dei cambiamenti di altitudine sul percorso. È anche possibile spostare il grafico a destra, in avanti sul percorso e indietro alla posizione corrente.
- *Posizionare un punto sul grafico*. Se si desidera visualizzare il valore di altitudine e grado in un punto particolare più avanti sul percorso, è possibile toccare un punto qualsiasi del grafico e apparirà un puntatore con i valori.


#### Cosa c'è dentro {#whats-in}

Quando si seleziona un percorso e si preme il pulsante **Avvia**, la mappa si apre con la posizione corrente, il percorso e il widget nella parte inferiore dello schermo. Il widget presenta il grafico e le informazioni su *Salita*, *Discesa*, *Pendenza*, distanza, altitudine e angolo di pendenza. È possibile selezionare la *scala ottimale* e vedere tutti i possibili ostacoli sul percorso.

- Tutti i valori sono indicati per l'intero percorso o solo per l'intervallo selezionato scalando il grafico.
- Leggi la [licenza per i dati DEM](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection) utilizzati da OsmAnd per la rilevazione del terreno.

|  |
|:------------|
| ***Indicatore di posizione*** |
| La tua ***posizione attuale*** sul grafico include un'icona di posizione, l'altitudine e il valore percentuale della pendenza. Il lato destro del widget contiene l'altitudine e la pendenza più alte, il valore medio per esse e il valore più basso sulla sezione selezionata del percorso visibile sul grafico. |
| ![point](@site/static/img/widgets/sch_1-1.png)|
| ***Informazioni aggiuntive*** |
| Il lato destro del widget contiene dati sull'altitudine e la pendenza più alte, il valore medio per entrambe e l'altitudine e la pendenza più basse sulla sezione di percorso selezionata visibile sul grafico. |
|  ![data](@site/static/img/widgets/sch_1-2.png)|
|I valori di ***Salita*** e ***Discesa*** sono le somme delle distanze dal punto di posizione alla fine del grafico visibile. Se non c'è un punto di posizione sul grafico, allora è la somma dell'intero grafico visibile sullo schermo (questo può accadere quando si cambia la scala e la posizione esce dal grafico).|
| **Salita** – mostra la somma di tutte le distanze con altitudine crescente dal punto di posizione alla fine del grafico visibile o per la sezione selezionata del percorso senza il punto di posizione visibile sullo schermo. |
| ![uphill scheme](@site/static/img/widgets/sch_uphill_1.png) ![uphill scheme](@site/static/img/widgets/sch_uphill_2.png)|
| **Discesa** – mostra la somma di tutte le distanze con altitudine decrescente dal punto di posizione alla fine del grafico visibile o per la sezione selezionata del percorso senza il punto di posizione visibile sullo schermo.|
| ![downhill scheme](@site/static/img/widgets/sch_downhill_1.png) ![downhill scheme](@site/static/img/widgets/sch_downhill_2.png)|
|***Pendenza*** è il rapporto tra il percorso e l'orizzontale, dove zero indica l'orizzontalità e il numero di gradi indica un grado di pendenza maggiore o più ripido.|
| **Pendenza** – mostra la pendenza massima della strada in percentuale dal punto di posizione alla fine del grafico visibile o per la sezione selezionata del percorso senza il punto di posizione visibile sullo schermo. |
|![grade scheme](@site/static/img/widgets/sch_grade_1.png) ![grade scheme](@site/static/img/widgets/sch_grade_2.png)|


## Widget rilevamento {#bearing-widget}

Il rilevamento è la direzione verso un obiettivo al di fuori del veicolo, come una destinazione o un punto di origine. Un rilevamento può essere *relativo* (in base alla rotta) o *magnetico* (in base alla bussola). Ad esempio, un rilevamento magnetico di 180° è la direzione verso sud, e un rilevamento relativo di 180° è direttamente dietro di te. I punti cardinali sono le quattro direzioni principali della bussola. Sono Nord (*N* - 0° o 360°), Est (*E* - 90°), Sud (*S* - 180°) e Ovest (*W* - 270°).

![Trip recording widget](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Trip recording widget](@site/static/img/widgets/bearing_widget.png) ![Trip recording widget](@site/static/img/widgets/bearing_widget_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trip recording widget](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="shared_string_bearing"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>  → Scegli un pannello → Aggiungi widget →  <Translate ios="true" ids="shared_string_bearing"/>* |
| Tocco lungo | Apre il [menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | **Android:** È possibile modificare il formato di visualizzazione dei dati per le unità angolari: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
|  | **iOS:** È possibile modificare il formato di visualizzazione dei dati per le unità angolari: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |


#### Come funziona {#how-it-works}

Per visualizzare il rilevamento, è necessario selezionare un **punto di destinazione**. Se per la navigazione è selezionato un punto di **destinazione** (o il **primo punto intermedio**, se presente), verrà utilizzato come punto di destinazione. Altrimenti, verrà utilizzato il **segnaposto selezionato più in alto**.

- Il [rilevamento relativo](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) è l'angolo tra la direzione del movimento in avanti e il punto di destinazione. La **direzione del movimento in avanti** è la **direzione del movimento** ottenuta dai sensori GPS oppure, se si è fermi, **dove si è puntato il dispositivo** (cioè l'orientamento del dispositivo secondo la sua bussola magnetica). Esempio: un oggetto con un rilevamento relativo di 0° è direttamente di fronte a te e un oggetto con un rilevamento relativo di 180° è direttamente dietro di te. Il **rilevamento relativo** è l'angolo tra la direzione in avanti e il punto di destinazione.

- Il [rilevamento magnetico](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) è l'angolo orario (orizzontale) tra il nord magnetico e il punto di destinazione osservato dalla tua posizione. Devi seguire questo valore della bussola magnetica per raggiungere il tuo obiettivo. Esempio: se il **rilevamento magnetico** è mostrato come 0° M, devi muoverti rigorosamente verso il nord magnetico per raggiungere il punto di destinazione.

- Il [rilevamento vero](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages) è espresso come l'angolo orizzontale tra il meridiano geografico e una linea sulla Terra. In particolare, il **rilevamento vero di un punto** è l'angolo misurato in gradi in senso orario dalla linea del Nord vero. Il software OsmAnd ti mostrerà il rilevamento vero e la direzione nella nostra interfaccia user-friendly, rendendoti facile prendere la decisione giusta in anticipo.

### Navigazione lungo la linea di rotta {#navigation-along-the-rhumb-line}

- **Rilevamento relativo**. Se ti attieni a un rilevamento relativo di 0 gradi e ti muovi in avanti, arriverai al punto di destinazione, ma non per la rotta più breve ( [linea di rotta](https://en.wikipedia.org/wiki/Rhumb_line) ).
- **Rilevamento magnetico**. Se allinei la bussola sulla tua barca/veicolo con il valore del widget e ti dirigi in avanti, arriverai alla tua destinazione, ma non per la rotta più breve ( [linea di rotta](https://en.wikipedia.org/wiki/Rhumb_line) ).

<!--![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- By tapping: Changes between  Relative bearing or Magnetic bearing (with "M") -->


## Punti di navigazione {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

Il gruppo di widget *Punto di navigazione* mostra la distanza rimanente dalla destinazione, il punto intermedio, l'ora di arrivo al punto intermedio o il tempo di viaggio per il percorso calcolato e l'ora di arrivo stimata.

### Informazioni sul percorso {#route-information}

<InfoAndroidOnly />

![Destination widget](@site/static/img/widgets/route_information_widget.png)

Il widget *Informazioni sul percorso* fornisce dati in tempo reale sul percorso di navigazione in corso e un modo rapido [per gestire un percorso attivo](../navigation/setup/route-navigation.md#start--stop-navigation). Aiuta a tenere traccia dei dettagli chiave del percorso e consente di interrompere o riprendere la sessione di navigazione corrente con un'interazione minima.

**Informazioni visualizzate:**

- **Ora di arrivo stimata (ETA)**. Mostra l'ora di arrivo prevista alla destinazione finale.
- **Tempo di viaggio rimanente**. Visualizza il tempo stimato rimanente per raggiungere la destinazione.
- **Distanza dalla destinazione**. Indica la distanza totale rimanente dalla destinazione finale e le distanze dai punti intermedi.

**Menu impostazioni**:

- Seleziona una **Vista predefinita** per dare priorità a uno dei seguenti valori: *Ora di arrivo stimata*, *Tempo rimanente*, *Distanza*.
- In **Priorità di visualizzazione**, seleziona tra *Destinazione prima (predefinito)* o *Intermedio prima* per dare priorità alle informazioni sul percorso più rilevanti.

> NOTA: Il widget è visibile solo durante la navigazione.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Aggiungi widget →<Translate android="true" ids="map_widget_distance_to_destination"/>* |
| Toccando | Tocca il pulsante con la freccia per aprire il [pannello Avvia/Interrompi navigazione](../navigation/setup/route-navigation.md#start--stop-navigation) |
| Tocco lungo | Apre il [menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### Distanza dalla destinazione {#distance-to-destination}

![Destination widget](@site/static/img/widgets/destination_widget.png)

Il widget visualizza la distanza rimanente dall'ultimo punto di destinazione quando si segue un percorso calcolato.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| Toccando | Sposta la mappa sul punto di destinazione. |
| Tocco lungo | Apre il [menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |

### Distanza dall'intermedio {#distance-to-intermediate}

![Intermediate destination widget](@site/static/img/widgets/intermediate_destination_widget.png)

Il widget mostra la distanza dal primo punto intermedio lungo il percorso calcolato. Dopo aver superato i punti intermedi, lo spazio verrà aggiornato al punto intermedio successivo. Se non ci sono punti intermedi, il widget non viene visualizzato.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| Toccando | **Un punto intermedio** - sposta la mappa sul punto intermedio. <br /> **Due o più punti intermedi** - apre il menu Elenco destinazioni. |
| Tocco lungo | Apre il [menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |

### Tempo all'intermedio {#time-to-intermediate}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Arrival time Time to go widget](@site/static/img/widgets/arrival_time_widget_android.png)  ![Arrival time Time to go widget](@site/static/img/widgets/time_to_go_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Arrival time Time to go widget](@site/static/img/widgets/arrival_time_widget_ios.png)  ![Arrival time Time to go widget](@site/static/img/widgets/time_to_go_widget_ios.png)

</TabItem>

</Tabs>

Il widget mostra l'*Ora di arrivo* o il *Tempo rimanente* al primo punto intermedio. Durante la navigazione, l'ora viene costantemente aggiornata e, non appena un punto intermedio viene superato, l'ora verrà aggiornata al waypoint successivo. Ad esempio, se si interrompe la navigazione, il *Tempo rimanente* rimarrà invariato e l'*Ora di arrivo* sarà uguale al *Tempo rimanente* più l'*Ora corrente*.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget →  <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| Toccando | Cambia tra *Ora di arrivo* e *Tempo rimanente* e viceversa. |
| Tocco lungo | Apre il [menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


### Tempo alla destinazione {#time-to-destination}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Intermediate Arrival time Time widget](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Intermediate Arrival time Time widget](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

Il widget visualizza l'*Ora di arrivo* o il *Tempo rimanente* all'ultimo punto di destinazione. L'ora viene costantemente aggiornata durante la navigazione ed è uguale al tempo di percorso dalla posizione corrente.

| | |
|:------------|:------------|
| Abilita |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_time_to_destination"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| Toccando | Cambia tra *Ora di arrivo* e *Tempo rimanente* e viceversa. |
| Tocco lungo | Apre il [menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


## Limite di velocità {#speed-limit}

![Speed limit widget](@site/static/img/widgets/speed_limit_widget_2.png)

Il widget *Limite di velocità* visualizza il limite di velocità corrente in base ai dati della mappa per il tuo percorso.

- I dati sono tratti dal [progetto OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- Il widget funziona in modalità di navigazione passiva e attiva.
- Se i dati sul limite di velocità non sono disponibili per una strada o un'area specifica, *il widget non verrà visualizzato*.

> NOTA: Assicurati che le tue [mappe siano aggiornate](../personal/maps-resources.md#updates) e di aver scaricato tutti i dati regionali necessari per accedere alle informazioni più recenti sui limiti di velocità.

| |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_max_speed"/>* |
|  |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="map_widget_max_speed"/>* |
| Toccando | Nessun cambiamento |
| Tocco lungo | Apre il [menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


## Manovre del percorso {#route-maneuvers}

![Next turns widget](@site/static/img/widgets/next_turns_widget.png)

Questo set di widget di navigazione viene attivato durante la navigazione e visualizza informazioni sulla distanza dalla manovra successiva.

| | |
|:------------|:------------|
| Abilita | **Android:** *Menu → Configura schermo → Pannello sinistro / destro → Aggiungi widget → Manovre del percorso → Prossima svolta, Prossima svolta (piccola), Seconda prossima svolta*  |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Pannello sinistro / destro → Aggiungi widget → Manovre del percorso → Prossima svolta, Prossima svolta (piccola), Seconda prossima svolta* |
| Toccando | Se i [comandi vocali](../navigation/guidance/voice-navigation.md) sono abilitati, vengono pronunciati la manovra successiva e la distanza da essa. |
| Tocco lungo | Apre il [menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


### Prossima svolta {#next-turn}

![Next turns widget](@site/static/img/widgets/next_turns_widgets_andr.png)

I widget *Manovre del percorso* contengono informazioni su:

- **Prossima svolta** - la prossima svolta con una grande freccia che rappresenta la manovra e con dati sulla distanza da essa.
- **Prossima svolta (piccola)** - la prossima svolta con una piccola freccia che rappresenta la manovra e con dati sulla distanza accanto alla freccia.
- **Seconda prossima svolta** - la prossima svolta dopo la prima svolta, che si attiva se si trova entro la distanza di avvicinamento.

| | |
|:------------|:------------|
| Abilita      | **Android:** *Menu → Configura schermo → Pannello sinistro / destro → Aggiungi widget → Prossima svolta, Prossima svolta (piccola), Seconda prossima svolta*  |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Pannello sinistro / destro → Aggiungi widget → Prossima svolta, Prossima svolta (piccola), Seconda prossima svolta* |
| Toccando  | Se i [comandi vocali](../navigation/guidance/voice-navigation.md) sono abilitati, vengono pronunciati la manovra successiva e la distanza da essa. |
| Tocco lungo    | Apre il [menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) |


### Indicazioni a colori per la prossima svolta {#color-prompts-for-next-turn}

Questa tabella mostra il tempo approssimativo fino all'attivazione dei comandi e la corrispondente indicazione a colori delle frecce per eseguire la manovra. Per maggiori informazioni, fare riferimento alla [documentazione tecnica](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) o all'articolo [Comandi vocali](../navigation/guidance/voice-navigation.md).

| Colore     | ~ Tempo di attivazione | Distanza   | Tipo di comando     |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 Verde  | 5 secondi      | Vicino   | Svolta ora        |
| 🟡 Giallo | 20 secondi     | In avvicinamento| Svolta tra `x` m   |
| ⚪ Grigio   | > 100 secondi  | Distante    | Preparati a svoltare |


## Corsie {#lanes}

![Lanes widgets](@site/static/img/widgets/lanes_widget.png)

Il widget **Corsie** evidenzia la corsia attuale quando la navigazione è attiva e visualizza la disposizione delle corsie per la strada attuale quando la navigazione è passiva. I dati sono tratti dal [progetto OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:turn).

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="route_guidance"/> → Aggiungi widget → <Translate android="true" ids="show_lanes"/>* |
|   | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Aggiungi widget → <Translate android="true" ids="show_lanes"/>* |
| Toccando | Nessun cambiamento |

### Indicazioni a colori per le corsie {#color-prompts-for-lanes}

Visualizza un widget in base alle impostazioni del tempo di avvicinamento. Il colore della corsia è associato ai [comandi vocali](../navigation/guidance/voice-navigation.md) e al tempo rimanente per eseguire la manovra.

| Colore     | ~ Tempo di attivazione | Distanza    | Tipo di comando |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 Verde  | 5 secondi      | Vicino    | [Svolta ora](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |
| 🟡 Giallo | 20 secondi     | In avvicinamento | [Svolta tra X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |


## Guida al percorso {#route-guidance}

<InfoAndroidOnly />

![route guidence widget](@site/static/img/widgets/route_guidence_widgets_andr.png)

Fornisce indicazioni sul percorso in tempo reale, inclusa la distanza dalla prossima svolta, il nome della strada, il nome della strada attuale e le informazioni sulla corsia. I widget sono attivi durante la navigazione.

I widget *Guida al percorso* contengono informazioni su:

- [Corsie](#lanes) - mostra la posizione attuale delle corsie stradali ed evidenzia quelle su cui dovresti guidare.
- **Prossima svolta** - la prossima svolta con una grande freccia che rappresenta la manovra e con dati sulla distanza da essa.
- **Seconda prossima svolta** è la prossima svolta dopo la prima svolta, che si attiva se si trova entro la distanza di avvicinamento.

| | |
|:------------|:------------|
| Abilita      | **Android:** *Menu → Configura schermo → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Aggiungi widget → Corsia, Prossima svolta, Seconda prossima svolta*  |
| Toccando  | **Prossima svolta**: Se i [comandi vocali](../navigation/guidance/voice-navigation.md) sono abilitati, vengono pronunciati la manovra successiva e la distanza da essa. <br/> **Corsia**: Nessun cambiamento. |
| Tocco lungo    | **Prossima svolta**: Apre il [menu contestuale del widget](../widgets/configure-screen.md#widget-context-menu) <br/> **Corsia**: Nessun cambiamento. |


## Widget avvisi {#alert-widget}

![Alert information widgets](@site/static/img/widgets/alert_information_widget.png)

Il **widget Avvisi** combina diversi tipi di avvisi che vengono visualizzati nell'angolo inferiore sinistro durante la navigazione.

- Hai la possibilità di attivare e disattivare avvisi come *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>,* e *<Translate android="true" ids="show_tunnels"/>*. Altri avvisi sono attivi per impostazione predefinita se il widget è abilitato.

- Per il tipo di avviso *Limite di velocità*, puoi regolare il valore <Translate android="true" ids="speed_limit_exceed"/>](../navigation/guidance/voice-navigation.md#speed-limit) nelle impostazioni dei comandi vocali per adattarlo meglio alla velocità del veicolo e alla velocità GPS.

- La maggior parte degli avvisi viene visualizzata sullo schermo e annunciata tramite comando vocale per 15 secondi, così come il tempo di attivazione per il passaggio di un Waypoint, un Punto preferito o un POI. Leggi di più [qui](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| Abilita | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
|  | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### Tipi di avvisi {#alert-types}

I tipi di avvisi hanno un design visivo diverso, che dipende dalla **<Translate android="true" ids="driving_region"/>** e può essere configurato tramite *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>*. OsmAnd non mira a rappresentare segnali stradali identici al 100%, ma evidenzia alcune somiglianze.

| | | |
|:------------|:------------|:------------|
| Nome | Descrizione | Icona |
| *<Translate android="true" ids="show_traffic_warnings"/>* | La [moderazione del traffico](https://en.wikipedia.org/wiki/Traffic_calming) utilizza la progettazione fisica e altre misure per migliorare la sicurezza di automobilisti, pedoni e ciclisti. | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_traffic_calming.png)  ![Alert traffic calming us widgets](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | Un [attraversamento pedonale](https://en.wikipedia.org/wiki/Pedestrian_crossing) (principalmente inglese britannico) o strisce pedonali è un luogo designato per i pedoni per attraversare una strada, una via o un viale. OsmAnd mostra l'avviso dell'attraversamento pedonale non controllato.  | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_pedestrian.png)  ![Alert traffic calming us widgets](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | Nella maggior parte dei paesi, i [limiti di velocità stradali](https://en.wikipedia.org/wiki/Speed_limit) stabiliscono la velocità massima, media o minima legale a cui i veicoli stradali possono viaggiare su un determinato tratto di strada. In OsmAnd, l'avviso viene mostrato quando si supera la velocità. È possibile impostare i parametri di superamento della velocità (0, 5, 10.. km/h). ![Alert ex_speed widgets](@site/static/img/widgets/ex_warning_speed.png)  | ![Alert speed_limit widgets](@site/static/img/widgets/warnings_limit.png) ![Alert speed_limit_ca widgets](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Alert speed_limit_us widgets](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | Un tunnel è un passaggio sotterraneo, che passa sotto una montagna, un fiume o un'area urbana congestionata. In OsmAnd, l'avviso *Tunnel* contiene informazioni sulla lunghezza del tunnel. Se ti trovi in un tunnel, mostra la distanza dalla fine del tunnel.   ![Alert ex_tunnel widgets](@site/static/img/widgets/ex_warning_tunnel.png)  | ![Alert warnings_tunnel widgets](@site/static/img/widgets/warnings_tunnel.png)  ![Alert warnings_tunnel_us widgets](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | Le [telecamere per il controllo del traffico](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) e le [autovelox](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) registrano le infrazioni al codice della strada, tra cui eccesso di velocità, passaggio con il semaforo rosso e altri tipi di comportamenti illegali. <br />**NOTA:** Gli avvisi sugli autovelox sono proibiti o illegali in alcuni paesi. Per [rimuovere completamente gli autovelox](../personal/global-settings.md#legal) da OsmAnd, vai al menu principale *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_speed_camera.png)   |
| *<Translate android="true" ids="traffic_warning_stop"/>* | Un [segnale di stop](https://en.wikipedia.org/wiki/Stop_sign) è un segnale stradale progettato per avvisare i conducenti che devono fermarsi completamente e assicurarsi che l'incrocio sia sicuro e libero da veicoli e pedoni prima di proseguire oltre il segnale.  | ![Alert stop widgets](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* |Questo avviso significa che c'è un [passaggio a livello](https://en.wikipedia.org/wiki/Crossbuck) più avanti. | ![Alert warnings_railways widgets](@site/static/img/widgets/warnings_railways.png) ![Alert warnings_railways_ca widgets](@site/static/img/widgets/warnings_railways_ca.png)  ![Alert warnings_railways_us widgets](@site/static/img/widgets/warnings_railways_us.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* |Questo avviso indica che il controllo di frontiera è più avanti.| ![Alert border control widgets](@site/static/img/widgets/warnings_border_control.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | I [simboli di pericolo o simboli di avviso](https://en.wikipedia.org/wiki/Hazard_symbol) sono simboli riconoscibili progettati per avvisare di materiali, luoghi o oggetti pericolosi, incluse correnti elettriche, veleni e radioattività. | ![Alert warnings_hazard widgets](@site/static/img/widgets/warnings_hazard.png)  ![Alert warnings_hazard_us widgets](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | Questo avviso indica che un casello per una strada a pedaggio è più avanti.   ![Alert toll_booth widgets](@site/static/img/widgets/ex_toll_booth.png) | ![Alert speed_limit widgets](@site/static/img/widgets/warnings_limit.png) |


## Nome della strada {#street-name}

Il widget Nome della strada mostra **il nome della strada attuale** con una freccia dritta, oppure **il nome della strada successiva** con la manovra da eseguire. Il nome della strada di solito consiste in uno scudo autostradale, un [nome](https://wiki.openstreetmap.org/wiki/Key:name), un [riferimento](https://wiki.openstreetmap.org/wiki/Key:ref), un [riferimento internazionale](https://wiki.openstreetmap.org/wiki/Key:int_ref) e una [destinazione](https://wiki.openstreetmap.org/wiki/Key:destination). Il passaggio tra il nome della strada attuale e il nome della strada successiva avviene quando ci si avvicina al luogo in cui si desidera eseguire la manovra (~20 secondi), simile al comando vocale [Svolta tra X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

- Quando si percorre una strada o un'autostrada, il widget mostra il nome o la designazione della strada (o della strada) attuale con una freccia blu.

  ![Street name POIs widget_2](@site/static/img/widgets/street_name_widget_2.png)

- Quando si cambia direzione, il widget mostra lo schema della manovra e il nome (designazione) della strada (o della strada) su cui è necessario svoltare.

  ![Street name POIs widget](@site/static/img/widgets/street_name_widget.png)

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Aggiungi widget → <Translate android="true" ids="map_widget_top_text"/>* |
|   | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Aggiungi widget → <Translate android="true" ids="map_widget_top_text"/>* |
| Toccando | Nessun cambiamento |


## Avvicinamento a POI / Preferiti {#approach-pois--favorites}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Approach POIs/Favorites android](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Approach POIs/Favorites ios](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

Il widget **Avvicinamento a POI/Preferiti/Waypoint** è combinato con [Nome della strada](#street-name) e visualizza l'avvicinamento e il passaggio di Punti di interesse, Waypoint del percorso seguito e Preferiti lungo il percorso.

Visualizza il **nome**, l'**icona del punto** e 2 **distanze**:

- **Distanza del percorso** (in alto) visualizza quanta distanza deve essere coperta seguendo il percorso.
- **Distanza di deviazione** è la distanza in linea retta dal punto del percorso più vicino al punto stesso.

**iOS** - Oltre alla distanza dal waypoint più vicino, viene visualizzato anche il lato (sinistro o destro) del percorso su cui si trova il waypoint.

| | |
|:------------|:------------|
| Abilita | **Android:** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu"/> → Avvia navigazione → pulsante matita* |
| Toccando | Nessun cambiamento |


## Articoli correlati {#related-articles}

- [Configura schermo](./configure-screen.md)
- [Pulsanti mappa](./map-buttons.md)
- [Widget informativi](./info-widgets.md)
- [Widget di navigazione](./nav-widgets.md)
- [Righello raggio e Righello](./radius-ruler.md)
- [Widget marcatori](./markers.md)
- [Azione rapida](./quick-action.md)

> *Ultimo aggiornamento: Aprile 2025*