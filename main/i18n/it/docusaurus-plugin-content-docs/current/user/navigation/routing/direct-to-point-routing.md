---
source-hash: 7bb36bac225a4637bd0fd319dba2e8fd27253ed4e7e1a35a1b7cda4be6a24614
sidebar_position: 9
title:  Navigazione punto-punto (Barca)
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

La navigazione punto-punto in OsmAnd è una funzione utile che consente di navigare direttamente verso un punto specifico sulla mappa senza dover seguire un percorso predefinito o una rete stradale. Questa funzione può essere utilizzata da skipper di barche, appassionati di attività all'aperto o dai servizi di emergenza durante le operazioni di salvataggio. Nel complesso, la navigazione punto-punto è una funzione flessibile e versatile che può essere utilizzata in una varietà di situazioni in cui i metodi di navigazione tradizionali potrebbero non essere appropriati o efficaci.

![Tipo di navigazione punto-punto Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

Un punto su una linea è un punto virtuale la cui distanza dalla destinazione è la stessa della distanza dalla tua posizione attuale, ma non è una proiezione della tua posizione attuale su una linea. Ciò semplifica la misurazione dei progressi e puoi utilizzare lo strumento di misurazione per ottenere la distanza corretta.


## Parametri di navigazione - Punto-punto {#route-parameters---direct-to-point}

Il tipo di navigazione *Punto-punto* non è collegato ad alcun profilo e può essere utilizzato con profili diversi.
Questo tipo di navigazione non considera ostacoli o barriere che potrebbero essere presenti sul terreno, come montagne, fiumi o foreste dense. Inoltre, non fornisce alcuna informazione sulla qualità del terreno, sul livello di difficoltà del percorso o su altri fattori rilevanti che potrebbero influire sulla sicurezza o sulla fattibilità del percorso (la sezione [Dettagli del percorso](../setup/route-details.md) è vuota).

:::note
Quando si utilizzano i tipi di navigazione Punto-punto e Barca, saranno necessari i [dati delle curve di livello di profondità](../../plugins/nautical-charts.md#nautical-map-style), che possono essere abilitati e impostati in *Configura mappa*.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → qualsiasi profilo → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Impostazioni di navigazione punto-punto](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → qualsiasi profilo → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Impostazioni di navigazione punto-punto iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>


## Altre impostazioni di navigazione {#other-routing-settings}

- Nella sezione [*Ricalcola percorso*](../../navigation/guidance/navigation-settings.md#recalculate-route) dei *Parametri di navigazione*, puoi abilitare e regolare le opzioni di ricalcolo del percorso. Il valore predefinito è 0 metri di deviazione, il che significa che il percorso non viene ricalcolato.

- Nella sezione [*Sviluppo*](../guidance/navigation-settings.md#development-settings) dei *Parametri di navigazione*, puoi provare nuove funzionalità di navigazione che sono attualmente in fase di test. Tieni presente che queste impostazioni sono disponibili solo quando il [plugin di sviluppo OsmAnd](../../plugins/development.md) è abilitato.

- L'impostazione *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* nella versione *iOS* di OsmAnd si trova in *Impostazioni di navigazione → Parametri di navigazione* (per *Android*, in *Parametri del veicolo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Queste impostazioni possono essere impostate anche per la navigazione *Punto-punto*. Vengono utilizzate per calcolare l'ora di arrivo stimata.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La corretta configurazione delle impostazioni ti aiuterà a evitare problemi durante la creazione di un percorso. Puoi selezionare il percorso più appropriato a seconda del tipo di veicolo e delle restrizioni stradali, oltre a calcolare il tempo di percorrenza.

> *Ultimo aggiornamento: Giugno 2024*