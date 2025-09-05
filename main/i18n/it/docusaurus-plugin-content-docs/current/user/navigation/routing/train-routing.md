---
source-hash: 5622b3c06a619b7597895ee507b9910943c93a7d5ec31ddecd00215481e51e29
sidebar_position: 7
title:  Percorso ferroviario
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

:::note
Per impostazione predefinita, il *profilo Treno* è disattivato. Per utilizzare questo profilo per il routing, è necessario attivarlo in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Il *percorso ferroviario* in OsmAnd offre agli utenti la possibilità di utilizzare le linee ferroviarie per la navigazione come se stessero guidando un treno come un'auto. Questa opzione può essere utile, ad esempio, per l'escursionismo quando non sono disponibili altre strade. In altri casi è meglio utilizzare il *[percorso con i mezzi pubblici](./public-transport-navigation.md)*.

![Mappa trasporto tram](@site/static/img/navigation/routing/train_routing_overview.png)


## Parametri del percorso - Treno {#route-parameters---train}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni percorso ferroviario Android](@site/static/img/navigation/routing/train_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni percorso ferroviario iOS](@site/static/img/navigation/routing/train_routing_ios.png)

</TabItem>

</Tabs>

Il *percorso ferroviario* può essere configurato in base alle proprie esigenze nella sezione [Parametri del percorso](../guidance/navigation-settings.md#route-parameters) delle impostazioni di navigazione.


## Altre impostazioni di percorso {#other-routing-settings}

- L'algoritmo di routing può anche considerare le limitazioni temporanee specificate in OpenStreetMap. Ciò può essere fatto utilizzando l'opzione *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Si noti che in alcuni casi, le informazioni da OSM possono essere obsolete.

- Nella sezione [*Ricalcola percorso*](../../navigation/guidance/navigation-settings.md#recalculate-route) dei *Parametri del percorso*, è possibile abilitare e regolare le opzioni di ricalcolo del percorso.

- Nella sezione [*Sviluppo*](../guidance/navigation-settings.md#development-settings) dei *Parametri del percorso*, è possibile provare nuove funzionalità di routing che sono attualmente in fase di test. Si noti che queste impostazioni sono disponibili solo quando il [plugin di sviluppo di OsmAnd](../../plugins/development.md) è abilitato.

- L'impostazione *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* nella versione *iOS* di OsmAnd si trova in *Impostazioni di navigazione → Parametri del percorso* (per *Android*, in *Parametri del veicolo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Queste impostazioni possono essere impostate anche per il routing *Diretto al punto*. Viene utilizzato per calcolare il tempo stimato di arrivo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La corretta configurazione delle impostazioni ti aiuterà a evitare problemi durante la creazione di un percorso. Puoi selezionare il percorso più appropriato a seconda del tipo di veicolo e delle restrizioni stradali, oltre a calcolare il tempo di percorrenza.

> *Ultimo aggiornamento: giugno 2024*