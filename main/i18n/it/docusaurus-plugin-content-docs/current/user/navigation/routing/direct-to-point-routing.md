---
source-hash: 13fd1af76a8741fd09464e167ec356fac8a95838f37bb43f0fc4715f11186d0d
sidebar_position: 9
title:  Navigazione diretta al punto (Barca)
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

La navigazione diretta al punto in OsmAnd è una funzione utile che consente di navigare direttamente verso un punto specifico sulla mappa senza dover seguire un percorso predefinito o una rete stradale. Questa funzione può essere utilizzata da skipper di imbarcazioni, appassionati di attività all'aperto o dai servizi di emergenza durante le operazioni di soccorso. Nel complesso, la navigazione diretta al punto è una funzione flessibile e versatile che può essere utilizzata in una varietà di situazioni in cui i metodi di navigazione tradizionali potrebbero non essere appropriati o efficaci.

![Tipo di navigazione diretta al punto Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

Un punto su una linea è un punto virtuale la cui distanza dalla destinazione è la stessa della distanza dalla posizione corrente, ma non è una proiezione della posizione corrente su una linea. Questo facilita la misurazione dei progressi ed è possibile utilizzare lo strumento di misurazione per ottenere la distanza corretta.

## Parametri del percorso - Diretto al punto {#route-parameters---direct-to-point}

Il tipo di navigazione *Diretto al punto* non è collegato a nessun profilo e può essere utilizzato con profili diversi.
Questo tipo di navigazione non considera ostacoli o barriere che possono essere presenti sul terreno, come montagne, fiumi o fitte foreste. Inoltre, non fornisce alcuna informazione sulla qualità del terreno, sul livello di difficoltà del percorso o su qualsiasi altro fattore rilevante che possa influire sulla sicurezza o sulla fattibilità del percorso (la sezione [Dettagli del percorso](../setup/route-details.md) è vuota).

:::note
Quando si utilizzano i tipi di navigazione Diretto al punto e Barca, sono necessari i [dati delle isobate](../../plugins/nautical-charts.md#nautical-map-style), che possono essere attivati e impostati in *Configura mappa*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → qualsiasi profilo → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Impostazioni di navigazione diretta al punto](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → qualsiasi profilo → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Impostazioni di navigazione diretta al punto iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>