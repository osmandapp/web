---
source-hash: 1009e397e49c6876a7afb34c8bd224fefa84be12f75b981af08e61dc95164eaf
sidebar_position: 9
title:  Direct-to-point routing (Boot)
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

Direct-naar-punt routering in OsmAnd is een handige functie waarmee u direct naar een specifiek punt op de kaart kunt navigeren zonder een vooraf gedefinieerde route of wegennetwerk te hoeven volgen. Deze functie kan worden gebruikt door schippers,
buitenliefhebbers of door hulpdiensten tijdens reddingsoperaties. Over het algemeen is direct-naar-punt routering een flexibele en veelzijdige functie die kan worden gebruikt in verschillende situaties waarin traditionele routeringsmethoden mogelijk niet geschikt of effectief zijn.

![Direct-naar-punt Navigatietype Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

Een punt op een lijn is een virtueel punt waarvan de afstand tot de bestemming hetzelfde is als de afstand vanaf uw huidige locatie, maar het is geen projectie van uw huidige locatie op een lijn. Dit maakt het gemakkelijk om de voortgang te meten, en u kunt de meettool gebruiken om de juiste afstand te krijgen.


## Routeparameters - Direct-naar-punt {#route-parameters---direct-to-point}

Het routeringstype *Direct-naar-punt* is niet gekoppeld aan een profiel en kan met verschillende profielen worden gebruikt.
Dit type routering houdt geen rekening met obstakels of barrières die in het terrein aanwezig kunnen zijn, zoals bergen, rivieren of dichte bossen. Het geeft ook geen informatie over de kwaliteit van het terrein, de moeilijkheidsgraad van de route of andere relevante factoren die de veiligheid of haalbaarheid van de route kunnen beïnvloeden (de sectie [Routegegevens](../setup/route-details.md) is leeg).

:::note
Bij gebruik van de navigatietypen Direct-naar-punt en Boot heeft u [Dieptecontourengegevens](../../plugins/nautical-charts.md#nautical-map-style) nodig, die kunnen worden ingeschakeld en ingesteld in *Kaart configureren*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → elk profiel → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Direct-naar-punt routeringsinstellingen](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → elk profiel → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Direct-naar-punt routeringsinstellingen iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>


## Overige routeringsinstellingen {#other-routing-settings}

- In de sectie [*Route herberekenen*](../../navigation/guidance/navigation-settings.md#recalculate-route) van de *Routeparameters* kunt u opties voor routeherberekening inschakelen en aanpassen. De standaardwaarde is 0 meter afwijking, wat betekent dat de route niet wordt herberekend.

- In de sectie [*Ontwikkeling*](../guidance/navigation-settings.md#development-settings) van de *Routeparameters* kunt u nieuwe routeringsfuncties uitproberen die momenteel in de testfase zijn. Let op, deze instellingen zijn alleen beschikbaar wanneer de [OsmAnd ontwikkelingsplug-in](../../plugins/development.md) is ingeschakeld.

- De instelling *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in de *iOS*-versie van OsmAnd bevindt zich in *Navigatie-instellingen → Routeparameters* (voor *Android*, in *Voertuigparameters → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Deze instellingen kunnen ook worden ingesteld voor *Direct-naar-punt* routering. Het wordt gebruikt om de geschatte aankomsttijd te berekenen.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Het correct configureren van de instellingen helpt u problemen te voorkomen bij het maken van een route. U kunt de meest geschikte route selecteren, afhankelijk van het type voertuig en wegbeperkingen, en de reistijd berekenen.

> *Laatst bijgewerkt: juni 2024*