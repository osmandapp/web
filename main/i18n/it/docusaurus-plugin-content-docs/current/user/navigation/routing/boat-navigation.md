---
source-hash: 1cb08bcd8ee7ef526cb41a67a59668e7c8cf614ee888f222e7e39337a0e136c1
sidebar_position: 8
title:  Navigazione per barca
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Panoramica {#overview}

La navigazione per barca può essere uno strumento prezioso per chiunque ami navigare in barca o a vela attraverso canali, fiumi o rotte navigabili. A causa della mancanza della maggior parte delle rotte navigabili nei dati di OpenStreetMap, la navigazione per barca *non è raccomandata* per la **navigazione in acque aperte**, si suggerisce invece di utilizzare la **[navigazione verso un punto](#direct-to-point-routing-for-boat)**. Con le linee di contorno di profondità abilitate, può aiutare a rimanere al sicuro in acqua evitando pericoli come acque poco profonde, rocce o altri ostacoli.
Il motore di navigazione per barca di OsmAnd tiene anche conto delle caratteristiche dei corsi d'acqua e delle imbarcazioni stesse.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Schermata di navigazione in barca Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Schermata di navigazione in barca iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)  

</TabItem>

</Tabs>  

## Parametri del percorso - Barca {#route-parameters---boat}

:::note
Per impostazione predefinita, il profilo *Barca* è disattivato. Per utilizzare questo profilo per la navigazione, è necessario attivarlo in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

La navigazione per barca può essere configurata in base alle proprie esigenze nella sezione [Parametri del percorso](../../navigation/guidance/navigation-settings.md#route-parameters) delle impostazioni di Navigazione.

Tipicamente, la *Navigazione per barca* viene utilizzata con il profilo barca (l'ultimo abilitato insieme al [plugin Nautico](../../plugins/nautical-charts.md)). Tuttavia, è possibile utilizzare la navigazione per barca anche con altri profili, e diversi [tipi di navigazione](#other-routing-types-for-boat) possono essere impiegati anche nel profilo barca.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Impostazioni di navigazione per barca Android](@site/static/img/navigation/routing/boat_routing_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di navigazione per barca iOS](@site/static/img/navigation/routing/boat_routing_ios.png)  

</TabItem>

</Tabs>

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Consente di utilizzare corsi d'acqua e canali di scolo per la navigazione in barca. L'attivazione di questa opzione può essere utile per piccole imbarcazioni come canoe, kayak, zattere, barche a remi. | I [corsi d'acqua (Streams)](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) sono corsi d'acqua naturali troppo stretti per essere definiti fiumi. I [canali di scolo (Drains)](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) sono corsi d'acqua artificiali, tipicamente rivestiti di cemento o materiale simile, utilizzati per trasportare l'acqua in eccesso, come l'acqua piovana o di scarico. |
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* | L'attivazione di questa opzione consente di utilizzare corsi d'acqua intermittenti per la navigazione in barca. | Il tag [Intermittent](https://wiki.openstreetmap.org/wiki/Key:intermittent) viene utilizzato per indicare che un corso d'acqua non contiene acqua in modo permanente. |


:::note Navigazione in acqua e limitazioni

1. Il profilo Barca è progettato per la navigazione lungo fiumi, laghi e altri corsi d'acqua. Supporta tag OSM come:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, ecc.

2. Il profilo Barca **non supporta le rotte dei traghetti (`route=ferry`)**. Ciò significa che le rotte dei traghetti, anche se presenti sulla mappa, **non verranno utilizzate** durante il calcolo dei percorsi in barca.

3. Per seguire manualmente una linea di traghetto:

    - Utilizzare lo strumento [Pianifica un percorso](../../plan-route/create-route.md) e posizionare manualmente i punti intermedi.
    - Utilizzare il profilo Auto, che supporta le rotte dei traghetti.

:::

## Altri tipi di navigazione per barca {#other-routing-types-for-boat}

Il tipo di [Navigazione per barca](#route-parameters---boat) è l'algoritmo di navigazione predefinito per il profilo Barca. Tuttavia, è possibile scegliere un altro tipo di navigazione, anch'esso adatto alla navigazione in barca:

 - [Navigazione diretta al punto per barca](./boat-navigation.md#direct-to-point-routing-for-boat)
 - [Navigazione in linea retta per barca](./boat-navigation.md#straight-line-routing-for-boat)

È importante notare che i tipi di navigazione *Diretta al punto* e *In linea retta* dovrebbero essere utilizzati solo in acque aperte dove non ci sono ostacoli o pericoli per la navigazione. Se si naviga in un corso d'acqua con un canale o un percorso specifico, si dovrebbe utilizzare il tipo di navigazione per barca in OsmAnd, che guiderà attraverso i canali di navigazione corretti ed eviterà aree poco profonde o altri pericoli.

Questi tipi di navigazione per il profilo barca possono essere attivati tramite il seguente percorso: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> o un altro) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.


### Navigazione diretta al punto per barca {#direct-to-point-routing-for-boat}

:::note
Quando si utilizzano i tipi di navigazione Diretta al punto e Barca, saranno necessari i [dati delle curve di profondità](../../plugins/nautical-charts.md#nautical-map-style), che possono essere abilitati e impostati in *Configura mappa*.
:::

Il [tipo di navigazione diretta al punto](./direct-to-point-routing.md) può essere utilizzato con il profilo barca quando si desidera navigare in acque aperte senza seguire alcun percorso o corso d'acqua specifico. Questo tipo di navigazione consente di impostare un punto di destinazione e OsmAnd calcolerà un percorso diretto a quel punto dalla posizione corrente. Questo tipo di navigazione non considera le caratteristiche della propria barca come velocità minima e massima, altezza e larghezza. Il percorso non verrà ricalcolato in caso di deviazione.

![Tipo di navigazione diretta al punto Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)


### Navigazione in linea retta per barca {#straight-line-routing-for-boat}

Il [tipo di navigazione in linea retta](./straight-line-routing) può essere utilizzato con il profilo barca quando si desidera navigare in acque aperte ma si preferisce seguire una linea retta piuttosto che un percorso curvo verso il punto di destinazione. Questo può essere utile quando si naviga verso un punto distante, visibile all'orizzonte, per esempio.

![Tipo di navigazione in linea retta Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)