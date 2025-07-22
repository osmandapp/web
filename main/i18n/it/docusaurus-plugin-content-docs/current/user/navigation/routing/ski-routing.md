---
source-hash: 7f81c110562bd27c6dfc6fe07b890ebf5cb1758a6fee93796173d681f752db77
sidebar_position: 6
title:  Percorso sci
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

:::note
Il percorso sci e il profilo sci sono disponibili solo quando il [plugin Mappa sci](../../plugins/ski-maps.md) è attivato.
:::

Il *percorso sci* può essere particolarmente utile per gli sciatori di backcountry, gli scialpinisti e altri appassionati di sport invernali che desiderano esplorare nuove aree e pianificare i loro viaggi in anticipo. Con il *percorso sci* gli utenti di OsmAnd possono pianificare percorsi e navigare in sicurezza godendosi la bellezza dei paesaggi invernali.

Il *percorso sci* può essere configurato in base alle proprie esigenze nella sezione [Parametri percorso](../guidance/navigation-settings.md#route-parameters) delle impostazioni di navigazione.

![Mappa percorsi - piste da sci](@site/static/img/navigation/routing/ski_routing_overview.png)


## Parametri percorso - Sci {#route-parameters---ski}

:::note
Per impostazione predefinita, il *profilo Sci* è disattivato. Per utilizzare questo profilo per il percorso, è necessario attivarlo in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Le impostazioni del *percorso sci* consentono agli utenti di pianificare i propri percorsi selezionando il livello di difficoltà desiderato e il tipo di terreno che desiderano esplorare. Esistono varie opzioni per un movimento sicuro, confortevole e piacevole sulle piste o durante un freeride.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Impostazioni percorso sci Android 1](@site/static/img/navigation/routing/skiing_routing_1_andr.png) ![Impostazioni percorso sci Android 2](@site/static/img/navigation/routing/skiing_routing_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni percorso sci iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png)

</TabItem>

</Tabs>

| Parametro | Consente di utilizzare per il percorso | Nota |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="routing_attr_allow_skating_only_name"/>* | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> | `https://wiki.openstreetmap.org/wiki/Piste_Maps#Type` |
|*<Translate android="true" ids="app_mode_ski_touring"/>* | <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | Un [percorso sciistico](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) o un'area consigliata che viene generalmente utilizzata da molti sciatori durante una stagione allo scopo di una salita nordica e una discesa in backcountry. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* | <Translate android="true" ids="routing_attr_allow_advanced_description"/> | Saranno consentiti percorsi più [difficili](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty). |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* | <details><summary> Scegli una delle opzioni per lo sci freeride. </summary>![Fuoripista Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* | <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | L'utilizzo degli [impianti di risalita](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts) sarà attivato |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(Android) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) | <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* | <Translate android="true" ids="routing_attr_allow_classic_only_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* | <Translate android="true" ids="routing_attr_allow_expert_description"/>| |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* | <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | Le [slitte](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) sono veicoli più piccoli che vengono trainati da un essere umano o spinti solo dalla gravità. Quando abilitato, le [piste da slittino](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) verranno utilizzate per il percorso sciistico |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* | <Translate android="true" ids="routing_attr_allow_intermediate_description"/>| |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* | <details><summary> <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![Fuoripista Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |


## Altre impostazioni di percorso {#other-routing-settings}

- L'algoritmo di percorso può anche considerare le limitazioni temporanee specificate in OpenStreetMap. Questo può essere fatto utilizzando l'opzione *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Si noti che in alcuni casi, le informazioni da OSM possono essere obsolete.

- Nella sezione [*Ricalcola percorso*](../../navigation/guidance/navigation-settings.md#recalculate-route) dei *Parametri percorso*, è possibile abilitare e regolare le opzioni di ricalcolo del percorso.

- Nella sezione [*Sviluppo*](../guidance/navigation-settings.md#development-settings) dei *Parametri percorso*, è possibile provare nuove funzionalità di percorso che sono attualmente in fase di test. Si noti che queste impostazioni sono disponibili solo quando il [plugin di sviluppo OsmAnd](../../plugins/development.md) è abilitato.

- L'impostazione *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* nella versione *iOS* di OsmAnd si trova in *Impostazioni navigazione → Parametri percorso* (per *Android*, in *Parametri veicolo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Questa impostazione viene utilizzata su strade sconosciute senza limiti di velocità. Questo è il caso più frequente quando si naviga su una traccia o un percorso online. Deve essere impostata in base ai parametri del proprio veicolo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La corretta configurazione delle impostazioni ti aiuterà a evitare problemi durante la creazione di un percorso. Puoi selezionare il percorso più appropriato a seconda del tipo di veicolo e delle restrizioni stradali, nonché calcolare il tempo di percorrenza.

> *Ultimo aggiornamento: Giugno 2024*