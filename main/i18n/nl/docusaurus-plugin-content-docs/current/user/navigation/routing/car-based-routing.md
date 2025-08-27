---
source-hash: 918e5cde7ffddb7a99046ea161570b0112d11c17a7525a60f27a26db3726b779
sidebar_position: 2
title:  Autonavigatie (Vrachtwagen, Motorfiets)
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

Autonavigatie is ontworpen om bestuurders te helpen efficiënt, veilig en comfortabel over de weg te navigeren, door aangepaste aanwijzingen te bieden die zijn afgestemd op de unieke behoeften en voorkeuren van elke bestuurder. De juiste navigatie-instellingen kunnen bestuurders helpen tijd en brandstof te besparen en gevaren op de weg te vermijden. De snelste route wordt standaard aangeboden.

:::info
Het navigatiemechanisme voor gemotoriseerde voertuigen verschilt slechts in enkele instellingen. De gemeenschappelijke parameters worden beschreven in het gedeelte [Auto](#route-parameters---car) van dit artikel. [Vrachtwagen](#route-parameters---truck) en [Motorfiets](#route-parameters---motorcycle) hebben hun eigen bijzonderheden.
:::

Navigatie kan worden geconfigureerd volgens uw behoeften in het gedeelte [Routeparameters](../../navigation/guidance/navigation-settings.md#route-parameters) van de Navigatie-instellingen van het corresponderende profiel (*Rijden, Vrachtwagen, Motorfiets*).


## Routeparameters - Auto {#route-parameters---car}

Autonavigatie is ontworpen om bestuurders te helpen de meest efficiënte en directe routes naar hun bestemming te vinden. Het houdt rekening met veelvoorkomende rijbeperkingen, zoals eenrichtingsstraten, verboden om te keren, voetgangerszones, en helpt ook wegen te vermijden die niet geschikt zijn voor auto's, zoals smalle wegen of wegen met gewichtsbeperkingen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Autonavigatie-instellingen Android](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Autonavigatie-instellingen iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschrijving | Opmerking                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:------------|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Selecteer wegen die u wilt vermijden tijdens de navigatie. U kunt een [weg op de kaart selecteren](../../map/map-context-menu/#avoid-road) of wegtypen uit de lijst kiezen.  </summary>![Wegen vermijden Android](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details>       | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll).</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface).</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Vermijd het oversteken van een grens naar een ander land).</li><li>Vermijd [ijswegen](https://wiki.openstreetmap.org/wiki/Key:ice_road) (seizoenswegen in koude gebieden die over bevroren water liggen) en [doorwaadbare plaatsen](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (delen van een snelweg waar een waterweg overheen loopt). </li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (een type watertransport, dat voertuigen over waterlichamen vervoert).</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway).</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone).</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (autovervoerende treinen, die twee plaatsen met elkaar verbinden die niet gemakkelijk over de weg bereikbaar zijn).</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel).</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (alleen geschikt voor 4WD-voertuigen).</li></ul> |
| *<Translate android="true" ids="prefer_in_routing_title"/>* |  <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | Voor autonavigatie wordt aangenomen dat het wegdek [verhard](https://wiki.openstreetmap.org/wiki/Key:surface) is, tenzij anders aangegeven.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Privétoegangsbeperkingen worden genegeerd bij het berekenen van de route.  | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wordt in OSM gebruikt om beperkingen te beschrijven op het gebruik van snelwegen en andere transportroutes, evenals gebouwen, ingangen, voorzieningen en recreatieve entiteiten.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (alleen&nbsp;auto) |  <details><summary> Wegen die gesloten zijn voor goederenlevering, worden vermeden. </summary>![Goederenlevering Android](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| Deze optie is alleen van toepassing op voertuigen die goederen vervoeren met een gewicht van maximaal 3,5 ton. Als uw voertuig meer dan 3,5 ton weegt, moet u het [Vrachtwagenprofiel](#route-parameters---truck) gebruiken.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | Om brandstofefficiënte routes te berekenen, beperkt de navigatie-engine de snelheid intern tot 60 km/u, maar dit verandert de geschatte aankomsttijd niet. Dus in het geval van 2 dezelfde start-eindroutes (snelweg (120 km/u) en secundaire weg (60 km/u)) wordt de kortere route geselecteerd. Voor servicepaden met een snelheidslimiet van &lt;60 km/u wordt de snellere route geselecteerd.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |


## Routeparameters - Vrachtwagen {#route-parameters---truck}

:::note
Standaard is het *Vrachtwagenprofiel* gedeactiveerd. Om dit profiel voor navigatie te gebruiken, moet u het inschakelen in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Vrachtwagenroutes zijn vergelijkbaar met autoroutes, maar zijn specifiek ontworpen voor bestuurders van grote bedrijfsvoertuigen. Er wordt rekening gehouden met aanvullende factoren zoals voertuig [hoogte-, gewichts- en breedtebeperkingen](../guidance/navigation-settings.md#size-parameters) en de mogelijkheid om gevaarlijke materialen te vervoeren (zie onderstaande tabel). Alle andere navigatie-instellingen zijn identiek aan [autonavigatie](#route-parameters---car).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Vrachtwagen navigatie-instellingen Android 2](@site/static/img/navigation/routing/routing_truck_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Vrachtwagen navigatie-instellingen iOS 2](@site/static/img/navigation/routing/truck_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="transport_hazmat_title"/>* (voor **EU-regio**) | <details><summary> Lokale autoriteiten kunnen het vervoer van gevaarlijke materialen op sommige wegen of in tunnels verbieden. </summary> ![Vervoer van gevaarlijke materialen Android](@site/static/img/navigation/routing/routing_truck_hazmat_andr.png) </details> | Indien ingeschakeld, houdt het vrachtwagennavigatiemechanisme rekening met de OSM-tag *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*. U kunt een van de vijf categorieën (*A, B, C, D, E*) gevaarlijke materialen kiezen volgens de **EU-beperkingen**. |
| *<Translate android="true" ids="dangerous_goods"/>* (alleen als **VS-regio** is geselecteerd) | <details><summary> Regels voor het vervoer van gevaarlijke goederen in de VS verschillen van die in de EU. Wordt alleen weergegeven als de rijregio is ingesteld op VS. U kunt meerdere klassen selecteren. </summary> ![Vervoer van gevaarlijke materialen Android](@site/static/img/navigation/routing/routing_truck_dangerous_goods_andr.png) </details> | Selecteer een van de typen (van 1 tot 9) gevaarlijke materialen volgens de [**VS-beperkingen**](https://www.iafc.org/topics-and-tools/hazmat/fusion-center/transportation-commodities/dot-hazard-classification-system). Vervoer van gevaarlijke materialen is verboden op sommige wegen en in tunnels. <ul><li>1. *Explosieven* </li><li> 2. *Gassen* </li><li> 3. *Brandbare vloeistoffen* </li><li> 4. *Brandbare vaste stoffen* </li><li> 5. *Oxiderende middelen en organische peroxiden* </li><li> 6. *Giftige en infectieuze stoffen* </li><li> 7. *Radioactieve stoffen* </li><li> 8. *Corrosieve stoffen* </li><li> 9. *Diversen* </li></ul> |


## Routeparameters - Motorfiets {#route-parameters---motorcycle}

:::note
Standaard is het *Motorfiets profiel* gedeactiveerd. Om dit profiel voor navigatie te gebruiken, moet u het inschakelen in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Motorfietsnavigatie is het proces van het creëren van een route die specifiek is geoptimaliseerd voor motorreizen. Dit type navigatie houdt rekening met de unieke behoeften en voorkeuren van motorrijders en biedt de best mogelijke rijomstandigheden. Routes worden uitgezet rekening houdend met een aantal parameters, zoals de keuze van het wegdek (bijvoorbeeld slechte wegomstandigheden kunnen de voorkeur hebben of vermeden worden), het vermijden van files, de toegankelijkheid van infrastructuur of veiligheid.


## Overige navigatie-instellingen {#other-routing-settings}

- Het navigatie-algoritme kan ook rekening houden met tijdelijke beperkingen die in OpenStreetMap zijn gespecificeerd. Dit kan worden gedaan met de optie *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Houd er rekening mee dat in sommige gevallen informatie van OSM verouderd kan zijn.

- In het gedeelte [*Route herberekenen*](../../navigation/guidance/navigation-settings.md#recalculate-route) van de *Routeparameters* kunt u opties voor het herberekenen van routes inschakelen en aanpassen.

- In het gedeelte [*Ontwikkeling*](../guidance/navigation-settings.md#development-settings) van de *Routeparameters* kunt u nieuwe navigatiefuncties uitproberen die momenteel in de testfase zijn. Houd er rekening mee dat deze instellingen alleen beschikbaar zijn wanneer de [OsmAnd ontwikkelingsplug-in](../../plugins/development.md) is ingeschakeld.

- De instelling *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in de *iOS*-versie van OsmAnd bevindt zich in *Navigatie-instellingen → Routeparameters* (voor *Android*, in *Voertuigparameters → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Deze instelling wordt gebruikt op onbekende wegen zonder snelheidsbeperkingen. Dit is meestal het geval bij het navigeren over een route of online route. Het moet worden ingesteld volgens de parameters van uw voertuig.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Het correct configureren van de instellingen helpt u problemen bij het maken van een route te voorkomen. U kunt de meest geschikte route selecteren, afhankelijk van het type voertuig en de wegbeperkingen, en de reistijd berekenen.

> *Laatst bijgewerkt: juli 2024*