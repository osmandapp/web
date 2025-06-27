---
source-hash: 7e3135f97cb0856e50ca46f17778ece558a18d14044f072d10d8739db6285192
sidebar_position: 10
title:  Percorso in linea retta (Aereo)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


<InfoIncompleteArticle/>


## Panoramica {#overview}

A differenza dei tradizionali algoritmi di routing che utilizzano strade, sentieri o percorsi predefiniti, il routing in linea retta calcola la distanza più breve tra due punti sulla mappa come una linea retta. Questa funzione può essere utile per gli escursionisti attivi che vogliono percorrere sentieri o esplorare aree remote dove i percorsi tradizionali potrebbero non essere disponibili. Per i piloti di aerei leggeri e i capitani di navi, l'utilizzo del *tipo di routing in linea retta* può essere molto utile nella navigazione.

<!-- ![Esempio di navigazione in linea retta Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Esempio di navigazione in linea retta Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png) -->

- Il routing *in linea retta* non considera ostacoli o barriere che potrebbero essere presenti sul terreno, come montagne, fiumi o foreste dense.
- Non fornisce alcuna informazione sulla qualità del terreno, sul livello di difficoltà del percorso o su altri fattori rilevanti che potrebbero influire sulla sicurezza o sulla fattibilità del percorso (la sezione [Dettagli del percorso](../setup/route-details.md) è vuota).

![Tipo di navigazione in linea retta Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Parametri del percorso - Linea retta {#route-parameters---straight-line}

:::note
Il routing in linea retta è collegato al *profilo Aereo*. Per impostazione predefinita, questo profilo è disattivato. Per utilizzare questo profilo per il routing, è necessario attivarlo in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Il routing *in linea retta* può essere configurato in base alle tue esigenze nella sezione [Parametri del percorso](../guidance/navigation-settings.md#route-parameters) delle impostazioni di navigazione.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Impostazioni di routing in linea retta Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di routing in linea retta iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* |  <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/>  </summary>![Ricalcolo in linea retta Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details>  | Quando l'angolo tra il percorso calcolato e la geolocalizzazione effettiva è superiore a quello impostato, verrà costruito il percorso più breve dalla tua posizione attuale al percorso calcolato. In altre parole, OsmAnd calcolerà un segmento di percorso aggiuntivo al percorso precedentemente calcolato. |


## Altre impostazioni di routing {#other-routing-settings}

- Nella sezione [*Ricalcola percorso*](../../navigation/guidance/navigation-settings.md#recalculate-route) dei *Parametri del percorso*, la distanza alla quale il percorso verrà ricalcolato per il *routing in linea retta* è impostata per impostazione predefinita a 500 metri.

- Nella sezione [*Sviluppo*](../guidance/navigation-settings.md#development-settings) dei *Parametri del percorso*, puoi provare nuove funzionalità di routing che sono attualmente in fase di test. Nota che queste impostazioni sono disponibili solo quando il [plugin di sviluppo OsmAnd](../../plugins/development.md) è abilitato.

- L'impostazione *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* nella versione *iOS* di OsmAnd si trova in *Impostazioni di navigazione → Parametri del percorso* (per *Android*, in *Parametri del veicolo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Queste impostazioni possono essere impostate anche per il routing *Diretto al punto*. Viene utilizzato per calcolare l'ora di arrivo stimata.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configurazione corretta delle impostazioni ti aiuterà a evitare problemi durante la creazione di un percorso. Puoi selezionare il percorso più appropriato a seconda del tipo di veicolo e delle restrizioni stradali, nonché calcolare il tempo di percorrenza.

> *Ultimo aggiornamento: giugno 2024*