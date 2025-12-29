---
source-hash: 75f7c0d57899f1fdc282afb4724e5f3f76160e359fd1c402d5453ff85ce761c8
sidebar_position: 4
title:  Navigazione per Ciclomotore
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

La *Navigazione per Ciclomotore* consente ai conducenti di creare un percorso ottimale (il più veloce), tenendo conto delle specificità della guida di un veicolo come un ciclomotore o uno scooter. Il processo di calcolo del percorso considera vari fattori per un movimento sicuro, confortevole e legale su strade o piste ciclabili. Il *Profilo Ciclomotore* evita le strade ad alta velocità: in particolare, non utilizza autostrade e strade in cui il limite di velocità è superiore a 80 km/h durante il calcolo del percorso.

:::note
Per impostazione predefinita, il *Profilo Ciclomotore* è disattivato. Per utilizzare questo profilo per la navigazione, è necessario attivarlo in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::


## Parametri del percorso - Ciclomotore {#route-parameters---moped}

La *Navigazione per Ciclomotore* può essere configurata in base alle proprie esigenze nella sezione [Parametri del percorso](../guidance/navigation-settings.md#route-parameters) delle impostazioni di Navigazione.  

Le impostazioni di navigazione per ciclomotore sono molto semplici e consistono in poche opzioni.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Impostazioni di navigazione per ciclomotore Android](@site/static/img/navigation/routing/moped_routing_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di navigazione per ciclomotore iOS](@site/static/img/navigation/routing/moped_routing_new_ios.png)  

</TabItem>

</Tabs>

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Seleziona le strade che vuoi evitare durante la navigazione.  </summary>![Evita strade Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details>  | Puoi [selezionare una strada sulla mappa](../../map/map-context-menu/#avoid-road) o scegliere uno o più tipi di strada dalla lista:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo di trasporto acquatico che trasporta veicoli attraverso specchi d'acqua)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Le restrizioni di accesso privato verranno ignorate durante il calcolo del percorso.  | Il tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* è usato in OSM per descrivere restrizioni sull'uso di autostrade e altre vie di trasporto, così come edifici, ingressi, servizi ed entità ricreative.   |
| *<Translate android="true" ids="temporary_conditional_routing"/>* |  Tiene conto delle restrizioni temporanee da OpenStreetMap durante il calcolo del percorso (ad esempio, chiusure stagionali o lavori di costruzione).  | I dati OSM potrebbero essere obsoleti, quindi alcune restrizioni temporanee potrebbero non essere più valide al momento della navigazione.   |