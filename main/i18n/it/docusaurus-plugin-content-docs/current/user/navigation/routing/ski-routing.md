---
source-hash: 27acdc622e2e460a91c82997ca3c6a46ddff094dce1fb89a1f2d05a529a31216
sidebar_position: 6
title: Percorso sciistico
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
Il percorso sciistico e il profilo sciistico sono disponibili solo quando il [plugin Mappa sciistica](../../plugins/ski-maps.md) è attivato.
:::

Il *percorso sciistico* può essere particolarmente utile per gli sciatori di backcountry, gli sci alpinisti e altri appassionati di sport invernali che desiderano esplorare nuove aree e pianificare i loro viaggi in anticipo. Con il *percorso sciistico* gli utenti di OsmAnd possono pianificare percorsi e navigare in sicurezza godendosi la bellezza dei paesaggi invernali.

Il *percorso sciistico* può essere configurato in base alle tue esigenze nella sezione [Parametri del percorso](../guidance/navigation-settings.md#route-parameters) delle impostazioni di navigazione.

![Mappe dei percorsi - piste da sci](@site/static/img/navigation/routing/ski_routing_overview.png)


## Parametri del percorso - Sci {#route-parameters---ski}

:::note
Per impostazione predefinita, il *profilo Sci* è disattivato. Per utilizzare questo profilo per il percorso, è necessario attivarlo in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Le impostazioni del *percorso sciistico* consentono agli utenti di pianificare i loro percorsi selezionando il livello di difficoltà desiderato e il tipo di terreno che desiderano esplorare. Esistono varie opzioni per un movimento sicuro, confortevole e piacevole sulle piste o durante un freeride.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni percorso sciistico Android 1](@site/static/img/navigation/routing/skiing_routing_1_andr.png) ![Impostazioni percorso sciistico Android 2](@site/static/img/navigation/routing/skiing_routing_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni percorso sciistico iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png)

</TabItem>

</Tabs>

| Parametro | Consente di utilizzare per il percorso | Nota |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="routing_attr_allow_skating_only_name"/>* | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> | `https://wiki.openstreetmap.org/wiki/Piste_Maps#Type` |
|*<Translate android="true" ids="app_mode_ski_touring"/>* | <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | Un [percorso sciistico](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) o un'area consigliata che viene generalmente utilizzata da molti sciatori durante una stagione allo scopo di una salita nordica e una discesa in backcountry. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* | <Translate android="true" ids="routing_attr_allow_advanced_description"/> | Saranno consentiti per il percorso [percorsi più difficili](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty). |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* | <details><summary> Scegli una delle opzioni per lo sci freeride. </summary>![Fuoripista Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* | <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | L'utilizzo degli [impianti di risalita](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts) sarà attivato |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(Android) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) | <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* | <Translate android="true" ids="routing_attr_allow_classic_only_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* | <Translate android="true" ids="routing_attr_allow_expert_description"/>| |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* | <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | Le [slitte](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) sono veicoli più piccoli che vengono trainati da un essere umano o spinti solo dalla gravità. Quando abilitate, le [piste per slittino](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) verranno utilizzate per il percorso sciistico |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* | <Translate android="true" ids="routing_attr_allow_intermediate_description"/>| |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* | <details><summary> <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![Fuoripista Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |


## Altre impostazioni di percorso {#other-routing-settings}

- L'algoritmo di percorso può anche considerare limitazioni temporanee specificate in OpenStreetMap. Questo può essere fatto utilizzando l'opzione *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Si noti che in alcuni casi, le informazioni da OSM possono essere obsolete.

- Nella sezione *[Ricalcola percorso](../../navigation/guidance/navigation-settings.md#recalculate-route)* dei *Parametri del percorso*, è possibile abilitare e regolare le opzioni di ricalcolo del percorso.

- Nella sezione *[Sviluppo](../guidance/navigation-settings.md#development-settings)* dei *Parametri del percorso*, è possibile provare nuove funzionalità di percorso che sono attualmente in fase di test. Si noti che queste impostazioni sono disponibili solo quando il [plugin di sviluppo OsmAnd](../../plugins/development.md) è abilitato.

- L'impostazione *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* nella versione *iOS* di OsmAnd si trova in *Impostazioni di navigazione → Parametri del percorso* (per *Android*, in *Parametri del veicolo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Questa impostazione viene utilizzata su strade sconosciute senza limiti di velocità. Questo è il caso più comune quando si naviga su una traccia o un percorso online. Deve essere impostata in base ai parametri del proprio veicolo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La corretta configurazione delle impostazioni ti aiuterà a evitare problemi durante la creazione di un percorso. Puoi selezionare il percorso più appropriato a seconda del tipo di veicolo e delle restrizioni stradali, oltre a calcolare il tempo di viaggio.

> *Ultimo aggiornamento: giugno 2024*