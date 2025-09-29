---
source-hash: 1ca5ebf392132069b1b5beabb8bfe492c629807a3258b756d15d406a2613de59
sidebar_position: 10
title:  Navigazione in linea retta (Aereo)
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

A differenza dei tradizionali algoritmi di calcolo del percorso che utilizzano strade, sentieri o percorsi predefiniti, il calcolo del percorso in linea retta calcola la distanza più breve tra due punti sulla mappa come una linea retta. Questa funzione può essere utile per gli escursionisti attivi che desiderano allontanarsi dai sentieri o esplorare aree remote dove i percorsi tradizionali potrebbero non essere disponibili. Per i piloti di aerei leggeri e i comandanti di navi, l'uso del *tipo di percorso in linea retta* può essere molto utile per la navigazione.

<!-- ![Straight line Navigation example Android 1](@site/static/img/navigation/auto-car/android_auto_landing_screen_2.png) ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png)  -->

- Il calcolo del percorso in *Linea retta* non considera ostacoli o barriere che possono essere presenti sul terreno, come montagne, fiumi o fitte foreste.
- Non fornisce alcuna informazione sulla qualità del terreno, sul livello di difficoltà del percorso o su qualsiasi altro fattore rilevante che possa influire sulla sicurezza o sulla fattibilità del percorso (la sezione [Dettagli percorso](../setup/route-details.md) è vuota).

![Tipo di navigazione in linea retta Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Parametri percorso - Linea retta {#route-parameters---straight-line}

:::note
La navigazione in linea retta è collegata al *profilo Aereo*. Per impostazione predefinita, questo profilo è disattivato. Per utilizzare questo profilo per la navigazione, è necessario attivarlo in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

La navigazione in *Linea retta* può essere configurata in base alle proprie esigenze nella sezione [Parametri percorso](../guidance/navigation-settings.md#route-parameters) delle impostazioni di Navigazione.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni di navigazione in linea retta Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di navigazione in linea retta iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* |  <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/>  </summary>![Ricalcolo linea retta Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details>  | Quando l'angolo tra il percorso calcolato e la geolocalizzazione effettiva è superiore a quello impostato, verrà costruito il percorso più breve dalla posizione corrente al percorso calcolato. In altre parole, OsmAnd calcolerà un segmento di percorso aggiuntivo rispetto al percorso calcolato in precedenza. |