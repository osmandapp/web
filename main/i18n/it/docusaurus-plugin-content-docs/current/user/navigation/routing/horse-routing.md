---
source-hash: 7008e200a45abc6dac5f84f04d67cfa4d6839d97740df298ea502bad90aec24d
sidebar_position: 6
title:  Percorso a cavallo
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

Il *percorso a cavallo* può essere utile per gli equestri, che vogliono pianificare le loro passeggiate su sentieri e percorsi sicuri e adatti ai cavalli. Con l'aiuto di questo tipo di percorso puoi anche scoprire nuovi percorsi che altrimenti non sarebbero stati conosciuti.

Il *percorso a cavallo* può essere configurato in base alle tue esigenze nella sezione [Parametri del percorso](../guidance/navigation-settings.md#route-parameters) delle impostazioni di navigazione.

![Horseback](@site/static/img/navigation/routing/horseback_routing_overview.png)


## Parametri del percorso - Cavallo {#route-parameters---horse}

:::note
Per impostazione predefinita, il *profilo Equitazione* è disattivato. Per utilizzare questo profilo per il percorso, è necessario attivarlo in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Il percorso a cavallo è progettato per fornire agli equestri informazioni su sentieri, ippovie e percorsi di equitazione adatti ai cavalli.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Horse routing settings Android 1](@site/static/img/navigation/routing/horse-routing-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Horse routing settings iOS 1](@site/static/img/navigation/routing/horse-routing-ios.png)

</TabItem>

</Tabs>

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Seleziona le strade che vuoi evitare durante la navigazione. Puoi [selezionare una strada sulla mappa](../../map/map-context-menu/#avoid-road) o scegliere i tipi di strada dall'elenco.  </summary>  ![Avoid roads Android](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo di trasporto acquatico, che trasporta veicoli attraverso corpi d'acqua)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Puoi scegliere se preferire percorsi per cavalli o meno. </summary> ![Prefer horses routes Android](@site/static/img/navigation/routing/horse_routing_prefer_android.png)  </details>  | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). Un percorso destinato all'uso da parte di cavalieri (principalmente) e pedoni (a seconda delle normative specifiche del paese). </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* |  <Translate android="true" ids="routing_attr_allow_gate_description"/>. | Un [cancello](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate) è un tipo di [barriera](https://wiki.openstreetmap.org/wiki/Key:barrier), che blocca il movimento. Di solito è una sezione in un muro o recinzione che può essere aperta o chiusa per consentire o limitare l'accesso. |
|  *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>*  |  <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>.  | In alcuni paesi, le [carrozze trainate da cavalli](https://wiki.openstreetmap.org/wiki/Key:carriage) non sono ammesse sulle autostrade, sono consentite solo su un numero molto limitato di altre strade.   |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Le restrizioni di accesso privato verranno ignorate durante il calcolo del percorso.  | Il tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* è utilizzato in OSM per descrivere le restrizioni sull'uso di autostrade e altre vie di trasporto, nonché edifici, ingressi, servizi e strutture ricreative.   |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>*   |  <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>.  | Per il percorso verranno utilizzate solo strade appositamente designate per i cavalli.   |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>*   |  <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>.  | Per il percorso verranno utilizzate solo vie appositamente designate per i cavalli.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Il tempo di viaggio previsto rifletterà l'impatto dell'altitudine. </summary> ![Use elevation data Android](@site/static/img/navigation/routing/horse_routing_elevation_android.png)  </details> | Questa preferenza può aiutare a evitare salite ripide. Senza dati di altitudine verrà calcolato il percorso più veloce come su terreno pianeggiante. |


## Altre impostazioni di percorso {#other-routing-settings}

- L'algoritmo di percorso può anche considerare limitazioni temporanee specificate in OpenStreetMap. Questo può essere fatto utilizzando l'opzione [<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations). Si noti che in alcuni casi, le informazioni da OSM possono essere obsolete.

- Nella sezione [Ricalcola percorso](../../navigation/guidance/navigation-settings.md#recalculate-route) dei *Parametri del percorso*, è possibile abilitare e regolare le opzioni di ricalcolo del percorso.

- Nella sezione [Sviluppo](../guidance/navigation-settings.md#development-settings) dei *Parametri del percorso*, è possibile provare nuove funzionalità di percorso che sono attualmente in fase di test. Si noti che queste impostazioni sono disponibili solo quando il [plugin di sviluppo OsmAnd](../../plugins/development.md) è abilitato.

- L'impostazione [<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds) nella versione *iOS* di OsmAnd si trova in *Impostazioni di navigazione → Parametri del percorso* (per *Android*, in *Parametri del veicolo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Questa impostazione viene utilizzata su strade sconosciute senza limiti di velocità. Questo è il caso più frequente quando si naviga su una traccia o un percorso online. Deve essere impostata in base ai parametri del tuo veicolo.

- [<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters). La corretta configurazione delle impostazioni ti aiuterà a evitare problemi durante la creazione di un percorso. Puoi selezionare il percorso più appropriato a seconda del tipo di veicolo e delle restrizioni stradali, nonché calcolare il tempo di viaggio.

> *Ultimo aggiornamento: Giugno 2024*