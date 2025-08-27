---
source-hash: 5622b3c06a619b7597895ee507b9910943c93a7d5ec31ddecd00215481e51e29
sidebar_position: 7
title: Treinroutering
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




## Overzicht {#overview}

:::note
Standaard is het *Treinprofiel* gedeactiveerd. Om dit profiel voor routering te gebruiken, moet u het inschakelen in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

*Treinroutering* in OsmAnd biedt gebruikers de mogelijkheid om spoorlijnen te gebruiken voor navigatie alsof ze een trein besturen zoals een auto. Deze optie kan nuttig zijn, bijvoorbeeld voor wandelingen wanneer er geen andere wegen beschikbaar zijn. In andere gevallen is het beter om *[Openbaar vervoer routering](./public-transport-navigation.md)* te gebruiken.

![Kaart transport tram](@site/static/img/navigation/routing/train_routing_overview.png)


## Routeparameters - Trein {#route-parameters---train}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Instellingen treinroutering Android](@site/static/img/navigation/routing/train_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Instellingen treinroutering iOS](@site/static/img/navigation/routing/train_routing_ios.png)

</TabItem>

</Tabs>

*Treinroutering* kan worden geconfigureerd volgens uw behoeften in de sectie [Routeparameters](../guidance/navigation-settings.md#route-parameters) van de Navigatie-instellingen.


## Overige routeringsinstellingen {#other-routing-settings}

- Het routeringsalgoritme kan ook tijdelijke beperkingen in OpenStreetMap in overweging nemen. Dit kan worden gedaan met behulp van de optie *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Houd er rekening mee dat in sommige gevallen informatie van OSM verouderd kan zijn.

- In de sectie [*Route herberekenen*](../../navigation/guidance/navigation-settings.md#recalculate-route) van de *Routeparameters* kunt u opties voor het herberekenen van de route inschakelen en aanpassen.

- In de sectie [*Ontwikkeling*](../guidance/navigation-settings.md#development-settings) van de *Routeparameters* kunt u nieuwe routeringsfuncties uitproberen die momenteel in de testfase zijn. Houd er rekening mee dat deze instellingen alleen beschikbaar zijn wanneer de [OsmAnd ontwikkelingsplug-in](../../plugins/development.md) is ingeschakeld.

- De instelling *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in de *iOS*-versie van OsmAnd bevindt zich in *Navigatie-instellingen → Routeparameters* (voor *Android*, in *Voertuigparameters → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Deze instellingen kunnen ook worden ingesteld voor *Direct-naar-punt* routering. Het wordt gebruikt om de geschatte aankomsttijd te berekenen.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Het correct configureren van de instellingen helpt u problemen bij het maken van een route te voorkomen. U kunt de meest geschikte route selecteren, afhankelijk van het type voertuig en wegbeperkingen, en de reistijd berekenen.

> *Laatst bijgewerkt: juni 2024*