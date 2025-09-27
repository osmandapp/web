---
source-hash: 2428f76d4d2b174f4096091771998583d1804e3fbc62cf63cf7e6bf40e95cc8c
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

Il *percorso sci* può essere particolarmente utile per gli sciatori di backcountry, gli scialpinisti e altri appassionati di sport invernali che desiderano esplorare nuove aree e pianificare i propri viaggi in anticipo. Con il *percorso sci*, gli utenti di OsmAnd possono pianificare percorsi e navigare in sicurezza godendosi la bellezza dei paesaggi invernali.

Il *percorso sci* può essere configurato in base alle proprie esigenze nella sezione [Parametri del percorso](../guidance/navigation-settings.md#route-parameters) delle impostazioni di Navigazione.

![Percorsi mappa - piste da sci](@site/static/img/navigation/routing/ski_routing_overview.png)


## Parametri del percorso - Sci {#route-parameters---ski}

:::note
Per impostazione predefinita, il *Profilo sci* è disattivato. Per utilizzare questo profilo per il calcolo del percorso, è necessario attivarlo in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Le impostazioni del *percorso sci* consentono agli utenti di pianificare i propri percorsi selezionando il livello di difficoltà desiderato e il tipo di terreno che desiderano esplorare. Esistono varie opzioni per un movimento sicuro, confortevole e piacevole sulle piste o durante un freeride.

<Tabs groupId="operating-systems" queryString="current-os">

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
|*<Translate android="true" ids="app_mode_ski_touring"/>* | <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | Un [percorso di scialpinismo](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) consigliato o un'area generalmente utilizzata da molti sciatori durante una stagione per una salita nordica e una discesa in backcountry. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* | <Translate android="true" ids="routing_attr_allow_advanced_description"/> | Per il percorso saranno consentiti [tracciati più difficili](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty). |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* | <details><summary> Scegli una delle opzioni per lo sci freeride. </summary>![Fuoripista Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* | <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | L'uso degli [impianti di risalita](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts) sarà attivato |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(Android) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) | <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* | <Translate android="true" ids="routing_attr_allow_classic_only_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* | <Translate android="true" ids="routing_attr_allow_expert_description"/>| |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* | <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | Le [slitte](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) sono veicoli più piccoli trainati da una persona o spinti solo dalla gravità. Se abilitato, le [piste per slittino](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) verranno utilizzate per il percorso sci |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* | <Translate android="true" ids="routing_attr_allow_intermediate_description"/>| |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* | <details><summary> <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![Fuoripista Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |