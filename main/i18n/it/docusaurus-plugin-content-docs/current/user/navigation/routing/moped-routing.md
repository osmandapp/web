---
source-hash: f3ae7502efc866393db44fa06909a99ed7ca0f9aec1864d654e84235132cb2f5
sidebar_position: 4
title:  Percorso per ciclomotori
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Panoramica {#overview}

Il *percorso per ciclomotori* consente ai conducenti di costruire un percorso ottimale (il più veloce), tenendo conto delle specificità della guida di un veicolo come un ciclomotore o uno scooter. Il processo di instradamento considera vari fattori per un movimento sicuro, confortevole e legale su strade o piste ciclabili.

:::note
Per impostazione predefinita, il *profilo ciclomotore* è disattivato. Per utilizzare questo profilo per l'instradamento, è necessario attivarlo in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::


## Parametri di percorso - Ciclomotore {#route-parameters---moped}

Il *percorso per ciclomotori* può essere configurato in base alle tue esigenze nella [sezione Parametri di percorso](../guidance/navigation-settings.md#route-parameters) delle impostazioni di navigazione.

Le impostazioni di instradamento del ciclomotore sono molto semplici e consistono in poche opzioni.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Impostazioni di instradamento per ciclomotori Android](@site/static/img/navigation/routing/moped_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di instradamento per ciclomotori iOS](@site/static/img/navigation/routing/moped_routing_ios.png)

</TabItem>

</Tabs>

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Seleziona le strade che vuoi evitare durante la navigazione. </summary>![Evita strade Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details> | Puoi [selezionare una strada sulla mappa](../../map/map-context-menu/#avoid-road) o scegliere il tipo/i di strada dall'elenco: <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo di trasporto acquatico, che trasporta veicoli attraverso corpi idrici)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Le restrizioni di accesso privato verranno ignorate durante il calcolo del percorso. | Il tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* è utilizzato in OSM per descrivere le restrizioni sull'uso di autostrade e altre vie di trasporto, nonché edifici, ingressi, servizi e strutture ricreative. |


## Altre impostazioni di instradamento {#other-routing-settings}

- L'algoritmo di instradamento può anche considerare le limitazioni temporanee specificate in OpenStreetMap. Ciò può essere fatto utilizzando l'opzione *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Si noti che in alcuni casi, le informazioni da OSM possono essere obsolete.

- Nella [*sezione Ricalcola percorso*](../../navigation/guidance/navigation-settings.md#recalculate-route) dei *Parametri di percorso*, è possibile abilitare e regolare le opzioni di ricalcolo del percorso.

- Nella [*sezione Sviluppo*](../guidance/navigation-settings.md#development-settings) dei *Parametri di percorso*, è possibile provare nuove funzionalità di instradamento che sono attualmente in fase di test. Si noti che queste impostazioni sono disponibili solo quando è abilitato il [plugin di sviluppo OsmAnd](../../plugins/development.md).

- L'impostazione *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* nella versione *iOS* di OsmAnd si trova in *Impostazioni di navigazione → Parametri di percorso* (per *Android*, in *Parametri veicolo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Questa impostazione viene utilizzata su strade sconosciute senza limiti di velocità. Questo è il caso più frequente quando si naviga su una traccia o su un percorso online. Deve essere impostata in base ai parametri del proprio veicolo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La corretta configurazione delle impostazioni ti aiuterà a evitare problemi durante la creazione di un percorso. Puoi selezionare il percorso più appropriato a seconda del tipo di veicolo e delle restrizioni stradali, oltre a calcolare il tempo di percorrenza.

> *Ultimo aggiornamento: giugno 2024*