---
source-hash: 3633198fddb7fe35a05678692319490fc58e0d27eeeb3150a2ae252eba8bd136
sidebar_position: 4
title: Percorso in motorino
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

Il *percorso in motorino* consente ai conducenti di costruire un percorso ottimale (il più veloce), tenendo conto delle specificità della guida di un veicolo come un motorino o uno scooter. Il processo di percorso considera vari fattori per un movimento sicuro, confortevole e legale su strade o piste ciclabili.

:::note
Per impostazione predefinita, il *profilo Motorino* è disattivato. Per utilizzare questo profilo per il percorso, è necessario attivarlo in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

## Parametri del percorso - Motorino {#route-parameters---moped}

Il *percorso in motorino* può essere configurato in base alle proprie esigenze nella sezione [Parametri del percorso](../guidance/navigation-settings.md#route-parameters) delle impostazioni di Navigazione.

Le impostazioni di percorso del motorino sono molto semplici e consistono in poche opzioni.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni percorso motorino Android](@site/static/img/navigation/routing/moped_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni percorso motorino iOS](@site/static/img/navigation/routing/moped_routing_ios.png)

</TabItem>

</Tabs>

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Seleziona le strade che vuoi evitare durante la navigazione. </summary>![Evita strade Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details> | Puoi [selezionare una strada sulla mappa](../../map/map-context-menu/#avoid-road) o scegliere il tipo/i di strada dall'elenco: <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo di trasporto acquatico che trasporta veicoli attraverso corpi idrici)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Le restrizioni di accesso privato verranno ignorate durante il calcolo del percorso. | Il tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* viene utilizzato in OSM per descrivere le restrizioni sull'uso di autostrade e altre vie di trasporto, nonché edifici, ingressi, servizi e strutture ricreative. |

## Altre impostazioni di percorso {#other-routing-settings}

- L'algoritmo di percorso può anche considerare limitazioni temporanee specificate in OpenStreetMap. Questo può essere fatto utilizzando l'opzione *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Si noti che in alcuni casi, le informazioni da OSM possono essere obsolete.

- Nella sezione [*Ricalcola percorso*](../../navigation/guidance/navigation-settings.md#recalculate-route) dei *Parametri del percorso*, è possibile abilitare e regolare le opzioni di ricalcolo del percorso.

- Nella sezione [*Sviluppo*](../guidance/navigation-settings.md#development-settings) dei *Parametri del percorso*, è possibile provare nuove funzionalità di percorso che sono attualmente in fase di test. Si noti che queste impostazioni sono disponibili solo quando il [plugin di sviluppo OsmAnd](../../plugins/development.md) è abilitato.

- L'impostazione *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* nella versione *iOS* di OsmAnd si trova in *Impostazioni di navigazione → Parametri del percorso* (per *Android*, in *Parametri del veicolo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Questa impostazione viene utilizzata su strade sconosciute senza limiti di velocità. Questo è il caso più comune quando si naviga un tracciato o un percorso online. Deve essere impostata in base ai parametri del proprio veicolo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La corretta configurazione delle impostazioni ti aiuterà a evitare problemi durante la creazione di un percorso. Puoi selezionare il percorso più appropriato a seconda del tipo di veicolo e delle restrizioni stradali, oltre a calcolare il tempo di viaggio.

> *Ultimo aggiornamento: Giugno 2024*