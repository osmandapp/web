---
source-hash: 27acdc622e2e460a91c82997ca3c6a46ddff094dce1fb89a1f2d05a529a31216
sidebar_position: 6
title:  Skiroutering
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
De skiroutering en het skiprofiel zijn alleen beschikbaar als de [Ski kaartweergave plug-in](../../plugins/ski-maps.md) is geactiveerd.
:::

*Skiroutering* kan bijzonder nuttig zijn voor backcountry skiërs, skitoeristen en andere wintersportliefhebbers die nieuwe gebieden willen verkennen en hun tochten van tevoren willen plannen. Met *skiroutering* kunnen OsmAnd-gebruikers routes plannen en veilig navigeren terwijl ze genieten van de schoonheid van winterlandschappen.

*Skiroutering* kan worden geconfigureerd volgens uw behoeften in de sectie [Routeparameters](../guidance/navigation-settings.md#route-parameters) van de Navigatie-instellingen.

![Kaartroutes - skipistes](@site/static/img/navigation/routing/ski_routing_overview.png)


## Routeparameters - Ski {#route-parameters---ski}

:::note
Standaard is het *Skiprofiel* gedeactiveerd. Om dit profiel te gebruiken voor routering, moet u het inschakelen in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

*Skiroutering* instellingen stellen gebruikers in staat om hun routes te plannen door het gewenste moeilijkheidsniveau en het type terrein dat ze willen verkennen te selecteren. Er zijn verschillende opties voor veilige, comfortabele en plezierige beweging op pistes of tijdens een freeride.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Skiroutering instellingen Android 1](@site/static/img/navigation/routing/skiing_routing_1_andr.png) ![Skiroutering instellingen Android 2](@site/static/img/navigation/routing/skiing_routing_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Skiroutering instellingen iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png)

</TabItem>

</Tabs>

| Parameter | Maakt gebruik voor routering mogelijk | Opmerking |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="routing_attr_allow_skating_only_name"/>* | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> | `https://wiki.openstreetmap.org/wiki/Piste_Maps#Type` |
|*<Translate android="true" ids="app_mode_ski_touring"/>* | <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | Een aanbevolen [skitoeroute](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) of gebied dat over het algemeen door veel skiërs gedurende een seizoen wordt gebruikt voor een Noordse beklimming en een afdaling in de backcountry. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* | <Translate android="true" ids="routing_attr_allow_advanced_description"/> | Moeilijkere [routes](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty) worden toegestaan voor routering. |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* | <details><summary> Kies een van de opties voor freeride skiën. </summary>![Off-piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* | <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | Gebruik van [skiliften](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts) wordt ingeschakeld |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(Android) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) | <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* | <Translate android="true" ids="routing_attr_allow_classic_only_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* | <Translate android="true" ids="routing_attr_allow_expert_description"/>| |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* | <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | [Sleeën](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) zijn kleinere voertuigen die door een mens worden getrokken of alleen door de zwaartekracht worden voortbewogen. Indien ingeschakeld, worden [slee-pistes](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) gebruikt voor skiroutering |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* | <Translate android="true" ids="routing_attr_allow_intermediate_description"/>| |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* | <details><summary> <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![Off-piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |


## Overige routeringsinstellingen {#other-routing-settings}

- Het routeringsalgoritme kan ook rekening houden met tijdelijke beperkingen die zijn gespecificeerd in OpenStreetMap. Dit kan worden gedaan met behulp van de optie *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Houd er rekening mee dat in sommige gevallen informatie van OSM verouderd kan zijn.

- In de sectie [*Route herberekenen*](../../navigation/guidance/navigation-settings.md#recalculate-route) van de *Routeparameters* kunt u opties voor routeherberekening inschakelen en aanpassen.

- In de sectie [*Ontwikkeling*](../guidance/navigation-settings.md#development-settings) van de *Routeparameters* kunt u nieuwe routeringsfuncties uitproberen die momenteel in de testfase zijn. Houd er rekening mee dat deze instellingen alleen beschikbaar zijn wanneer de [OsmAnd ontwikkelingsplug-in](../../plugins/development.md) is ingeschakeld.

- De instelling *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in de *iOS*-versie van OsmAnd bevindt zich in *Navigatie-instellingen → Routeparameters* (voor *Android*, in *Voertuigparameters → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Deze instelling wordt gebruikt op onbekende wegen zonder snelheidsbeperkingen. Dit is meestal het geval bij het navigeren over een spoor of online route. Het moet worden ingesteld volgens de parameters van uw voertuig.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Het correct configureren van de instellingen helpt u problemen bij het maken van een route te voorkomen. U kunt de meest geschikte route selecteren, afhankelijk van het type voertuig en wegbeperkingen, en de reistijd berekenen.

> *Laatst bijgewerkt: juni 2024*