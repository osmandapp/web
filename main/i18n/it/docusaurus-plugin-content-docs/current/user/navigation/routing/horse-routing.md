---
source-hash: f863a18e2c3b8c34a6bbf837cba45b313219a45379aed3eb8ba136511d1c18a4
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

Il *percorso a cavallo* può essere utile per i fantini che desiderano pianificare le loro cavalcate su sentieri e percorsi sicuri e adatti ai cavalli. Con l'aiuto di questo tipo di percorso è anche possibile scoprire nuovi itinerari che altrimenti non si sarebbero conosciuti.

Il *percorso a cavallo* può essere configurato in base alle proprie esigenze nella sezione [Parametri del percorso](../guidance/navigation-settings.md#route-parameters) delle impostazioni di Navigazione.

![Cavallo](@site/static/img/navigation/routing/horseback_routing_overview.png)

## Parametri del percorso - Cavallo {#route-parameters---horse}

:::note
Per impostazione predefinita, il *profilo Equitazione* è disattivato. Per utilizzare questo profilo per il calcolo del percorso, è necessario attivarlo in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Il percorso a cavallo è progettato per fornire ai fantini informazioni su sentieri, ippovie e percorsi adatti ai cavalli.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni percorso a cavallo Android 1](@site/static/img/navigation/routing/horse-routing-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni percorso a cavallo iOS 1](@site/static/img/navigation/routing/horse-routing-ios.png)

</TabItem>

</Tabs>

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Selezionare le strade da evitare durante la navigazione. È possibile [selezionare una strada sulla mappa](../../map/map-context-menu/#avoid-road) o scegliere i tipi di strada dall'elenco. </summary> ![Evita strade Android](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo di trasporto via acqua, che trasporta veicoli attraverso specchi d'acqua)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> È possibile scegliere se preferire o meno i percorsi per cavalli. </summary> ![Preferisci percorsi per cavalli Android](@site/static/img/navigation/routing/horse_routing_prefer_android.png) </details> | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). Un percorso destinato all'uso da parte di cavalieri (principalmente) e pedoni (a seconda delle normative specifiche del paese). </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* | <Translate android="true" ids="routing_attr_allow_gate_description"/>. | Un [cancello](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate) è un tipo di [barriera](https://wiki.openstreetmap.org/wiki/Key:barrier), che blocca il movimento. Di solito si tratta di una sezione di un muro o di una recinzione che può essere aperta o chiusa per consentire o limitare l'accesso. |
| *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>* | <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>. | In alcuni paesi, le [carrozze trainate da cavalli](https://wiki.openstreetmap.org/wiki/Key:carriage) non sono ammesse sulle autostrade, ma solo su un numero molto limitato di altre strade. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Le restrizioni di accesso privato verranno ignorate durante il calcolo del percorso. | Il tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* viene utilizzato in OSM per descrivere le restrizioni sull'uso di autostrade e altre vie di trasporto, nonché di edifici, ingressi, servizi ed entità ricreative. |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>. | Per il calcolo del percorso verranno utilizzate solo le strade appositamente designate per i cavalli. |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>. | Per il calcolo del percorso verranno utilizzati solo i percorsi appositamente designati per i cavalli. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Il tempo di percorrenza previsto rifletterà l'impatto dell'altitudine. </summary> ![Usa dati di elevazione Android](@site/static/img/navigation/routing/horse_routing_elevation_android.png) </details> | Questa preferenza può aiutare a evitare le salite ripide. Senza i dati di elevazione, verrà calcolato il percorso più veloce come su un terreno pianeggiante. |