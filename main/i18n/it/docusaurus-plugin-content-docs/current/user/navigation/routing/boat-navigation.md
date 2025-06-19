---
source-hash: 11f96851fe0f021db695918bd99476a396fc4a1e4d35dc2c02f19b4d9f965751
sidebar_position: 8
title:  Navigazione in barca
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

La navigazione in barca può essere uno strumento prezioso per chiunque ami andare in barca o navigare attraverso canali, fiumi o vie navigabili. A causa della mancanza della maggior parte delle vie navigabili nei dati di OpenStreetMap, la navigazione in barca *non è consigliata* per la **navigazione in acque libere**, si suggerisce invece di utilizzare la **[navigazione diretta al punto](#direct-to-point-routing-for-boat)**. Con le linee di contorno di profondità abilitate, può aiutarti a rimanere al sicuro sull'acqua evitando pericoli come acque poco profonde, rocce o altri ostacoli.
Il motore di navigazione in barca di OsmAnd tiene anche conto delle caratteristiche delle vie navigabili e delle barche stesse.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Schermata di navigazione in barca Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Schermata di navigazione in barca iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)

</TabItem>

</Tabs>

## Parametri di rotta - Barca {#route-parameters---boat}

:::note
Per impostazione predefinita, il *profilo Barca* è disattivato. Per utilizzare questo profilo per la navigazione, è necessario attivarlo in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

La navigazione in barca può essere configurata in base alle tue esigenze nella [sezione Parametri di rotta](../../navigation/guidance/navigation-settings.md#route-parameters) delle Impostazioni di navigazione.

Tipicamente, la *navigazione in barca* viene utilizzata con il profilo barca (l'ultimo abilitato insieme al [plugin Nautico](../../plugins/nautical-charts.md)). Tuttavia, è possibile utilizzare la navigazione in barca anche con altri profili, e diversi [tipi di navigazione](#other-routing-types-for-boat) possono essere impiegati anche nel profilo barca.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">


![Impostazioni di navigazione in barca Android](@site/static/img/navigation/routing/boat_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di navigazione in barca iOS](@site/static/img/navigation/routing/boat_routing_ios.png)

</TabItem>

</Tabs>

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Consente di utilizzare corsi d'acqua e canali di scolo per la navigazione in barca. L'abilitazione di questa opzione può essere utile per piccole imbarcazioni come canoe, kayak, gommoni, barche a remi. | [Corsi d'acqua](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) sono corsi d'acqua naturali troppo stretti per essere chiamati fiumi. [Canali di scolo](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) sono corsi d'acqua artificiali, tipicamente rivestiti di cemento o simili, utilizzati per trasportare acqua superflua come acqua piovana o scarichi grigi.|
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* | L'attivazione di questa opzione consente di utilizzare corsi d'acqua intermittenti per navigare in barca. | Il tag [Intermittente](https://wiki.openstreetmap.org/wiki/Key:intermittent) viene utilizzato per indicare che un corso d'acqua non contiene acqua in modo permanente. |


:::note Navigazione e limitazioni in acqua

1. Il profilo Barca è progettato per la navigazione lungo fiumi, laghi e altre vie navigabili. Supporta i tag OSM come:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, ecc.

2. Il profilo Barca **non supporta le rotte dei traghetti (`route=ferry`)**. Ciò significa che le rotte dei traghetti, anche se presenti sulla mappa, **non verranno utilizzate** durante il calcolo delle rotte delle barche.

3. Per seguire manualmente una linea di traghetto:

    - Utilizza lo strumento [Pianifica una rotta](../../plan-route/create-route.md) e posiziona i waypoint manualmente.
    - Utilizza il profilo Auto, che supporta le rotte dei traghetti

:::

## Altri tipi di navigazione per barca {#other-routing-types-for-boat}

Il tipo di [navigazione in barca](#route-parameters---boat) è l'algoritmo di navigazione predefinito per il profilo Barca. Sebbene tu possa scegliere un altro tipo di navigazione, che è anche adatto per la navigazione in barca:

 - [Navigazione diretta al punto per barca](./boat-navigation.md#direct-to-point-routing-for-boat)
 - [Navigazione in linea retta per barca](./boat-navigation.md#straight-line-routing-for-boat)

È importante notare che i tipi di navigazione *Diretta al punto* e *In linea retta* dovrebbero essere utilizzati solo in acque libere dove non ci sono ostacoli o pericoli per la navigazione. Se stai navigando in una via navigabile con un canale o una rotta specifica, dovresti utilizzare il tipo di navigazione in barca in OsmAnd, che ti guiderà attraverso i canali di navigazione corretti ed eviterà aree poco profonde o altri pericoli.

Questi tipi di navigazione per il profilo barca possono essere attivati utilizzando il seguente percorso: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> o un altro) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.


### Navigazione diretta al punto per barca {#direct-to-point-routing-for-boat}

:::note
Quando si utilizzano i tipi di navigazione Diretta al punto e Barca, sarà necessario [dati di contorni di profondità](../../plugins/nautical-charts.md#nautical-map-style), che possono essere abilitati e impostati in *Configura mappa*.
:::

Il [tipo di navigazione Diretta al punto](./direct-to-point-routing.md) può essere utilizzato con il profilo barca quando si desidera navigare con la propria imbarcazione in acque libere senza seguire alcuna rotta o via navigabile specifica. Questo tipo di navigazione consente di impostare un punto di destinazione e OsmAnd calcolerà un percorso diretto verso quel punto dalla posizione corrente. Questo tipo di navigazione non considera le caratteristiche della tua imbarcazione come velocità minima e massima, altezza e larghezza. La tua rotta non verrà ricalcolata in caso di deviazione.

![Tipo di navigazione diretta al punto Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)


### Navigazione in linea retta per barca {#straight-line-routing-for-boat}

Il [tipo di navigazione in linea retta](./straight-line-routing) può essere utilizzato con il profilo barca quando si desidera navigare con la propria imbarcazione in acque libere ma si preferisce seguire una linea retta piuttosto che una rotta curva verso il punto di destinazione. Ciò può essere utile quando si naviga verso un punto distante, visibile all'orizzonte, ad esempio.

![Tipo di navigazione in linea retta Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)


## Altre impostazioni di navigazione {#other-routing-settings}

- L'algoritmo di navigazione può anche considerare le limitazioni temporanee specificate in OpenStreetMap. Questo può essere fatto utilizzando l'opzione *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Si noti che in alcuni casi, le informazioni da OSM possono essere obsolete.

- Nella [*sezione Ricalcola rotta*](../../navigation/guidance/navigation-settings.md#recalculate-route) dei *Parametri di rotta*, è possibile abilitare e regolare le opzioni di ricalcolo della rotta.

- Nella [*sezione Sviluppo*](../guidance/navigation-settings.md#development-settings) dei *Parametri di rotta*, è possibile provare nuove funzionalità di navigazione che sono attualmente in fase di test. Si noti che queste impostazioni sono disponibili solo quando il [plugin di sviluppo di OsmAnd](../../plugins/development.md) è abilitato.

- L'impostazione *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* nella versione *iOS* di OsmAnd si trova in *Impostazioni di navigazione → Parametri di rotta* (per *Android*, in *Parametri del veicolo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Questa impostazione viene utilizzata su strade sconosciute senza limiti di velocità. Questo è il caso più frequente quando si naviga su una traccia o una rotta online. Deve essere impostata in base ai parametri del proprio veicolo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Configurare correttamente le impostazioni ti aiuterà a evitare problemi durante la creazione di una rotta. Puoi selezionare la rotta più appropriata a seconda del tipo di veicolo e delle restrizioni stradali, nonché calcolare il tempo di percorrenza.

> *Ultimo aggiornamento: Maggio 2025*