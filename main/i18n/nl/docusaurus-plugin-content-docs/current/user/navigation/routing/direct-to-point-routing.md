---
source-hash: 13fd1af76a8741fd09464e167ec356fac8a95838f37bb43f0fc4715f11186d0d
sidebar_position: 9
title:  Direct-naar-punt routering (Boot)
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

Direct-naar-punt routering in OsmAnd is een handige functie waarmee u rechtstreeks naar een specifiek punt op de kaart kunt navigeren zonder een vooraf gedefinieerde route of wegennet te hoeven volgen. Deze functie kan worden gebruikt door schippers, buitenliefhebbers of door hulpdiensten tijdens reddingsoperaties. Over het algemeen is direct-naar-punt routering een flexibele en veelzijdige functie die kan worden gebruikt in verschillende situaties waarin traditionele routeringsmethoden mogelijk niet geschikt of effectief zijn.

![Direct-naar-punt navigatietype Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

Een punt op een lijn is een virtueel punt waarvan de afstand tot de bestemming gelijk is aan de afstand vanaf uw huidige locatie, maar het is geen projectie van uw huidige locatie op een lijn. Dit maakt het gemakkelijk om de voortgang te meten, en u kunt de meettool gebruiken om de juiste afstand te krijgen.

## Routeparameters - Direct-naar-punt {#route-parameters---direct-to-point}

Het routeringstype *Direct-naar-punt* is niet gekoppeld aan een profiel en kan met verschillende profielen worden gebruikt.
Dit type routering houdt geen rekening met obstakels of barrières die in het terrein aanwezig kunnen zijn, zoals bergen, rivieren of dichte bossen. Het geeft ook geen informatie over de kwaliteit van het terrein, de moeilijkheidsgraad van de route of andere relevante factoren die de veiligheid of haalbaarheid van de route kunnen beïnvloeden (de sectie [Routedetails](../setup/route-details.md) is leeg).

:::note
Bij gebruik van de navigatietypes Direct-naar-punt en Boot heeft u [Dieptecontourgegevens](../../plugins/nautical-charts.md#nautical-map-style) nodig, die kunnen worden ingeschakeld en ingesteld in *Kaart configureren*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → elk profiel → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Instellingen voor direct-naar-punt routering](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → elk profiel → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Instellingen voor direct-naar-punt routering iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>