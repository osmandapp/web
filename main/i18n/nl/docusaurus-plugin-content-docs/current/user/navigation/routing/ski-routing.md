---
source-hash: 2428f76d4d2b174f4096091771998583d1804e3fbc62cf63cf7e6bf40e95cc8c
sidebar_position: 6
title:  Ski-routering
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Overzicht {#overview}

:::note
De ski-routering en het skiprofiel zijn alleen beschikbaar wanneer de [Plugin Skikaartweergave](../../plugins/ski-maps.md) is geactiveerd.
:::

*Ski-routering* kan met name handig zijn voor backcountry-skiërs, skibergbeklimmers en andere wintersporters die nieuwe gebieden willen verkennen en hun tochten van tevoren willen plannen. Met *ski-routering* kunnen OsmAnd-gebruikers routes plannen en veilig navigeren terwijl ze genieten van de schoonheid van winterlandschappen.

*Ski-routering* kan naar wens worden geconfigureerd in de sectie [Routeparameters](../guidance/navigation-settings.md#route-parameters) van de Navigatie-instellingen.

![Kaartroutes - skipistes](@site/static/img/navigation/routing/ski_routing_overview.png)


## Routeparameters - Ski {#route-parameters---ski}

:::note
Standaard is het *Skiprofiel* gedeactiveerd. Om dit profiel voor routering te gebruiken, moet u het inschakelen in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Met de instellingen voor ski-routering kunnen gebruikers hun routes plannen door de gewenste moeilijkheidsgraad en het type terrein te selecteren dat ze willen verkennen. Er zijn verschillende opties voor veilige, comfortabele en plezierige verplaatsing op pistes of tijdens een freeride.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Instellingen ski-routering Android 1](@site/static/img/navigation/routing/skiing_routing_1_andr.png) ![Instellingen ski-routering Android 2](@site/static/img/navigation/routing/skiing_routing_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Instellingen ski-routering iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png)

</TabItem>

</Tabs>

| Parameter | Toestaan voor routering | Opmerking |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="routing_attr_allow_skating_only_name"/>* | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> |  `https://wiki.openstreetmap.org/wiki/Piste_Maps#Type`  |
|*<Translate android="true" ids="app_mode_ski_touring"/>* |   <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | Een aanbevolen [skitourroute](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) of gebied dat over het algemeen door veel skiërs gedurende een seizoen wordt gebruikt voor een Noordse beklimming en een afdaling in het achterland. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* |  <Translate android="true" ids="routing_attr_allow_advanced_description"/>  | Meer [moeilijke routes](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty) worden toegestaan voor routering. |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* |   <details><summary> Kies een van de opties voor freeride skiën.  </summary>![Off piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> |   |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* |  <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | Het gebruik van [skiliften](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts) wordt ingeschakeld |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(Android) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) |   <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>|  |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* |   <Translate android="true" ids="routing_attr_allow_classic_only_description"/>|  |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* |   <Translate android="true" ids="routing_attr_allow_expert_description"/>|  |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* |  <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | [Sledes](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) zijn kleinere voertuigen die door een mens worden getrokken of alleen door de zwaartekracht worden voortbewogen. Indien ingeschakeld, worden [slee-pistes](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) gebruikt voor ski-routering |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* |   <Translate android="true" ids="routing_attr_allow_intermediate_description"/>|  |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* |  <details><summary>  <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![Off piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> |  |