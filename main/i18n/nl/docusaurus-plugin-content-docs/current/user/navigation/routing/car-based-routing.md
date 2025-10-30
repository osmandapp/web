---
source-hash: 74a5b610d6f4eeafabe0fe3369b3c7c103d064d346a88aacce7696290df5bb64
sidebar_position: 2
title:  Autoroutering (Vrachtwagen, Motorfiets)
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

Routering voor auto's is ontworpen om bestuurders te helpen efficiënt, veilig en comfortabel over de wegen te navigeren, door aangepaste aanwijzingen te geven die zijn afgestemd op de unieke behoeften en voorkeuren van elke bestuurder. De juiste routeringsinstellingen kunnen bestuurders helpen tijd en brandstof te besparen en gevaren op de weg te vermijden. Standaard wordt de snelste route aangeboden.

:::info
Het routeringsmechanisme voor gemotoriseerde grondvoertuigen verschilt slechts in enkele instellingen. De gemeenschappelijke parameters worden beschreven in de sectie [Auto](#route-parameters---car) van dit artikel. [Vrachtwagen](#route-parameters---truck) en [Motorfiets](#route-parameters---motorcycle) hebben hun eigen bijzonderheden.  
:::

Routering kan naar wens worden geconfigureerd in de sectie [Routeparameters](../../navigation/guidance/navigation-settings.md#route-parameters) van de Navigatie-instellingen van het betreffende profiel (*Rijden, Vrachtwagen, Motorfiets*).  


## Routeparameters - Auto {#route-parameters---car}

Autoroutering is ontworpen om bestuurders te helpen de meest efficiënte en directe routes naar hun bestemming te vinden. Het houdt rekening met veelvoorkomende rijbeperkingen, zoals eenrichtingsstraten, afslagverboden, voetgangerszones, en helpt ook wegen te vermijden die niet geschikt zijn voor auto's, zoals smalle wegen of wegen met gewichtsbeperkingen.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Auto routeringsinstellingen Android](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Auto routeringsinstellingen iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Selecteer wegen die u wilt vermijden tijdens de navigatie. U kunt ofwel [een weg op de kaart selecteren](../../map/map-context-menu/#avoid-road) of wegtypes uit de lijst kiezen.  </summary>![Wegen vermijden Android](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details>       | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll).</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface).</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Vermijd het oversteken van een grens naar een ander land).</li><li>Vermijd [ijswegen](https://wiki.openstreetmap.org/wiki/Key:ice_road) (seizoensgebonden wegen in koude regio's die op bevroren water worden aangelegd) en [doorwaadbare plaatsen](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (delen van een snelweg waar een waterweg overheen loopt). </li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (een type watertransport dat voertuigen over watermassa's vervoert).</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway).</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone).</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (autodragende treinen die twee plaatsen met elkaar verbinden die over de weg niet gemakkelijk bereikbaar zijn).</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel).</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (alleen geschikt voor 4WD-voertuigen).</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* |  <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | Voor autoroutering wordt aangenomen dat het wegdek [verhard](https://wiki.openstreetmap.org/wiki/Key:surface) is, tenzij anders aangegeven. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Beperkingen voor privétoegang worden genegeerd bij het berekenen van de route.  | De tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wordt in OSM gebruikt om beperkingen te beschrijven op het gebruik van snelwegen en andere transportroutes, evenals gebouwen, ingangen, voorzieningen en vrijetijdsentiteiten.   |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (alleen&nbsp;auto) |  <details><summary> Wegen die gesloten zijn voor goederenlevering worden vermeden. </summary>![Goederenlevering Android](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| Deze optie is alleen van toepassing op voertuigen die goederen vervoeren met een gewicht van maximaal 3,5 ton. Als uw voertuig meer dan 3,5 ton weegt, dient u het [Vrachtwagenprofiel](#route-parameters---truck) te gebruiken.   |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | Om een brandstofefficiënte route te berekenen, beperkt de routeringsengine de snelheid intern tot 60 km/u, maar dit verandert de geschatte aankomsttijd niet. Dus in het geval van 2 identieke start-eindroutes: snelweg (120 km/u) en secundaire weg (60 km/u) - wordt de kortere route geselecteerd. Voor de dienstwegen met een snelheidslimiet < 60 km/u wordt de snellere route geselecteerd. |


## Routeparameters - Vrachtwagen {#route-parameters---truck}

:::note
Standaard is het *Vrachtwagenprofiel* gedeactiveerd. Om dit profiel voor routering te gebruiken, moet u het inschakelen in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Vrachtwagenroutering is vergelijkbaar met autoroutering, maar is specifiek ontworpen voor bestuurders van grote commerciële voertuigen. Het houdt rekening met extra factoren zoals voertuig[beperkingen voor hoogte, breedte, gewicht, max aslast en max gewicht bij volledig beladen beperkingen](../guidance/vehicle-parameters.md#size-parameters) en de mogelijkheid om gevaarlijke stoffen te vervoeren (zie onderstaande tabel). Alle andere routeringsinstellingen zijn identiek aan [autoroutering](#route-parameters---car).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Vrachtwagen routeringsinstellingen Android 2](@site/static/img/navigation/routing/routing_truck_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Vrachtwagen routeringsinstellingen iOS 2](@site/static/img/navigation/routing/truck_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="transport_hazmat_title"/>* (voor **EU-regio**) | <details><summary> Lokale autoriteiten kunnen het vervoer van gevaarlijke stoffen op sommige wegen of in tunnels verbieden. </summary> ![Vervoer van gevaarlijke stoffen Android](@site/static/img/navigation/routing/routing_truck_hazmat_andr.png) </details> | Indien ingeschakeld, houdt het vrachtwagenrouteringsmechanisme rekening met de OSM-tag *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*. U kunt een van de vijf categorieën (*A, B, C, D, E*) van gevaarlijke stoffen kiezen volgens de **EU-beperkingen**. |
| *<Translate android="true" ids="dangerous_goods"/>* (alleen als **VS-regio** is geselecteerd) | <details><summary> De regels voor het vervoer van gevaarlijke stoffen in de VS verschillen van die in de EU. Wordt alleen weergegeven als de Rijregio is ingesteld op VS. U kunt meerdere klassen selecteren. </summary> ![Vervoer van gevaarlijke stoffen Android](@site/static/img/navigation/routing/routing_truck_dangerous_goods_andr.png) </details> | Selecteer een van de types (van 1 tot 9) van gevaarlijke stoffen volgens de [**VS-beperkingen**](https://www.iafc.org/topics-and-tools/hazmat/fusion-center/transportation-commodities/dot-hazard-classification-system). Het vervoer van gevaarlijke stoffen is op sommige wegen en in tunnels verboden. <ul><li>1. *Explosieven* </li><li> 2. *Gassen* </li><li> 3. *Ontvlambare vloeistoffen* </li><li> 4. *Ontvlambare vaste stoffen* </li><li> 5. *Oxiderende stoffen en organische peroxiden* </li><li> 6. *Giftige en infectueuze stoffen* </li><li> 7. *Radioactieve stoffen* </li><li> 8. *Bijtende stoffen* </li><li> 9. *Diversen* </li></ul> |


## Routeparameters - Motorfiets {#route-parameters---motorcycle}

:::note
Standaard is het *Motorfietsprofiel* gedeactiveerd. Om dit profiel voor routering te gebruiken, moet u het inschakelen in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Motorfietsroutering is het proces van het creëren van een route die specifiek is geoptimaliseerd voor motorreizen. Dit type routering houdt rekening met de unieke behoeften en voorkeuren van motorrijders en biedt de best mogelijke rijomstandigheden. Routes worden uitgestippeld rekening houdend met een aantal parameters zoals de keuze van het wegdek (bijvoorbeeld, slechte wegomstandigheden kunnen worden geprefereerd of vermeden), het vermijden van files, de toegankelijkheid van infrastructuur of veiligheid.