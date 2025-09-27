---
source-hash: 7c8272dbf6899f4214dddc8dd2957ce245f83752b109660a6880724a955deb10
sidebar_position: 0
title:  Over OsmAnd-routering
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

Offline OsmAnd-routering is gebaseerd op OpenStreetMap-gegevens en biedt een verscheidenheid aan routes voor verschillende doeleinden. Dit is een lijst met vooraf gedefinieerde routeringstypes die kan worden uitgebreid. De navigatieregels zijn opgenomen in het bestand [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) en worden gebruikt voor offline routering. Het routetype verandert automatisch wanneer u uw profiel wijzigt.


## Routeringstypes {#routing-types}

De volgende profielen met hun routeringstypes zijn vooraf ingesteld in OsmAnd: *Auto, Fiets, Wandelen, Vrachtwagen, Motor, Bromfiets, Openbaar vervoer, Boot, Vliegtuig, Skiën, Trein, Paardrijden*. Daarnaast kunt u uw eigen profielen aanmaken met specifieke routeringsregels of [het OsmAnd-routeringsalgoritme aanpassen](../routing/osmand-routing.md#customize-offline-routing).

:::note

- De profielen [**Vrachtwagen, Motor, Bromfiets, Trein, Vliegtuig, Boot en Paardrijden**](./osmand-routing.md) zijn standaard uitgeschakeld. Om deze profielen te gebruiken, moet u ze activeren in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.

- Het navigatietype [**Direct-naar-punt**](./direct-to-point-routing.md) heeft geen eigen profiel en kan met elk ingeschakeld profiel worden gebruikt.

- Offline routering van OsmAnd kan worden **geconfigureerd door het [.xml-bestand](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) aan te passen**. Voor meer informatie, zie het artikel [*Offline routering aanpassen*](../routing/osmand-routing.md#customize-offline-routing).

:::

| Categorie | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *OsmAnd offline routering* | Het offline routeringsmechanisme van OsmAnd gebruikt vooraf gedownloade kaarten als gegevensbron voor routeberekening. | Navigatietypes: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md), [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md), [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md), [Bromfiets](./moped-routing.md), [Motor](./car-based-routing.md#route-parameters---motorcycle), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md), [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md), [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md), [Vrachtwagen](car-based-routing#route-parameters---truck), [Trein](./train-routing.md). |
| *Direct-naar-punt routering* | Gebruikt ook offline kaarten en biedt een rechte lijn routering (of *punt-naar-punt* navigatie). | Navigatietypes: *[Rechte lijn](./straight-line-routing.md)*, *[Direct-naar-punt](./direct-to-point-routing.md)*. |
| [*BRouter* *(offline)*](./brouter.md) | Offline routering geleverd door de [BRouter-app](https://brouter.de/). | Alleen beschikbaar voor **Android**. Lees de volledige beschrijving [hier](./brouter.md). |
| [*<Translate android="true" ids="shared_string_online"/>* (*Android*)](./online-routing.md) | Online routering bouwt de route op met behulp van de bronnen van servers via een internetverbinding. | Alleen beschikbaar voor **Android**. U kunt [online routering](./online-routing.md) configureren om een route te bouwen met verschillende online routeringsengines zoals [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), Generieke GPX. |

- *[Auto routering (Vrachtwagen, Motor)](./car-based-routing.md)* - OsmAnd biedt rij-instructies voor bestuurders van auto's, vrachtwagens en motoren.
- *[Fietsroutering (MTB)](./bicycle-based-routing.md)* - Fietsroutering biedt navigatie-aanwijzingen specifiek voor fietsers en MTB-liefhebbers. Het kan ook worden gebruikt door bestuurders van bromfietsen (scooters).
- *[Voetgangersroutering](./pedestrian-routing.md)* - kan niet alleen worden gebruikt voor wandelingen in de stad, maar ook tijdens wandeltochten.
- *[Bromfietsroutering](./moped-routing.md)* - is gebaseerd op de fietsroutering, maar heeft zijn eigen kenmerken.
- *[Routering Openbaar Vervoer](./public-transport-navigation.md)* - kan u helpen tijdens het reizen in de stad.
- *[Paardrijroutering](./horse-routing.md)* - biedt ruiters de hulpmiddelen die ze nodig hebben om hun paardrijactiviteiten te plannen en ervan te genieten.
- *[Ski-routering](./ski-routing.md)* - stelt gebruikers in staat om skitochten en andere wintersportactiviteiten te plannen en te navigeren met de mobiele OsmAnd-app.
- *[Treinroutering](./train-routing.md)* - biedt de mogelijkheid om de spoorlijnen te gebruiken voor navigatie.
- *[Bootroutering](./boat-navigation.md)* - kan worden gebruikt om een route te bouwen op rivieren, kanalen, kleine meren en op open zee, maar alleen wanneer vaarwegen zijn gemarkeerd in OpenStreetMap.
- *[Rechte lijn routering](./straight-line-routing.md)* - biedt een rechte lijn routering (of "punt-naar-punt" navigatie) die opnieuw wordt berekend wanneer uw locatie verandert.
- *[Direct-naar-punt routering](./direct-to-point-routing.md)* - biedt een rechte lijn routering (of "punt-naar-punt" navigatie) die stabiel blijft gedurende de hele navigatie, in tegenstelling tot **Rechte lijn** routering (routeherberekening is uitgeschakeld).


## Offline routering aanpassen {#customize-offline-routing}

U kunt ook uw **eigen routing.xml-bestand** maken of het standaard **routing.xml** aanpassen en gebruiken voor navigatie (alleen voor gevorderde OsmAnd-gebruikers).

- Kopieer het [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) bestand naar uw apparaat. Lees de [Helpinformatie](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25) zorgvuldig. Bekijk als voorbeeld het [routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) bestand van de OsmAnd-gebruiker.
- Nadat u de wijzigingen heeft aangebracht, kan het nieuwe *routing.xml*-bestand aan OsmAnd worden toegevoegd door erop te tikken en te selecteren om het in de OsmAnd-app te openen.
- Selecteer het aangepaste [Navigatietype](../../navigation/guidance/navigation-settings.md#navigation-type) voor uw profiel.

Meer informatie over deze functie is te vinden in de [*Technische documentatie*](../../../technical/osmand-file-formats/osmand-routing-xml.md) en op [*OsmAnd's GitHub-pagina*](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).


## Specifieke wegen vermijden {#avoid-specific-roads}

:::caution
De functie 'wegen vermijden' is globaal en beïnvloedt alle **[Routeringstypes](#routing-types)** behalve *[Online routering](../routing/online-routing.md)* en *[BRouter](../routing/brouter.md)*.
:::

Er zijn twee mogelijke manieren om te kiezen welke wegen te vermijden bij het berekenen van een route:

- Selecteer het wegtype in de sectie [Routeparameters](../guidance/navigation-settings.md#route-parameters) van [Navigatie-instellingen](../guidance/navigation-settings.md). De beschrijving van deze instelling wordt gegeven in de artikelen over de instellingen van [Routeringstypes](#routing-types). Zie als voorbeeld de beschrijving van het routeringstype [Auto / Vrachtwagen / Motor](../routing/car-based-routing.md#route-parameters---car).
- U kunt ook specifieke wegen selecteren die niet worden gebruikt voor routering met de optie *[Weg vermijden](../../map/map-context-menu.md#avoid-road)* via het *kaartcontextmenu* of met het *[Menu Wegen vermijden](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*).

:::note

- De weg moet op maximale zoom worden gemarkeerd, omdat OsmAnd de tik verkeerd kan interpreteren en bijvoorbeeld de verkeerde kant van een weg met twee rijbanen of een trottoir kan blokkeren.
- De functie 'Specifieke wegen vermijden' werkt niet correct met de optie [Navigeren op track](../setup/gpx-navigation.md) en heeft geen invloed op de vereenvoudigde [Markernavigatie](../setup/markers-navigation.md#use-markers-in-navigation).

:::

### Menu Wegen vermijden {#avoid-roads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *Navigatieknop → Instellingen → Wegen vermijden...*

![Menu Weg vermijden Android](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *Navigatieknop → Instellingen → Wegen vermijden*

![Menu Weg vermijden iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png)

</TabItem>

</Tabs>

In dit menu kunt u de eerdere selectie van de te vermijden weg annuleren. Tik hiervoor op een kruisje (Android) of een rode **"-"** tegenover de weg die u wilt gebruiken voor de routeberekening.

Met de optie *Selecteer op kaart* kunt u doorgaan met het markeren van wegen als ongeldig voor routering op de OsmAnd-kaart.

Wanneer u een te vermijden weg selecteert via het *kaartcontextmenu* of het *Menu Wegen vermijden*, wordt de lijst met wegen boven het kaartscherm weergegeven.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lijst met te vermijden wegen op de kaart Android](@site/static/img/navigation/routing/action_avoid_roads_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Lijst met te vermijden wegen op de kaart iOS](@site/static/img/navigation/routing/avoid_route_ios_2.png)

</TabItem>

</Tabs>


## Exporteren / Importeren {#export--import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Weg vermijden op de kaart exporteren Android 1](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![Weg vermijden op de kaart exporteren Android 2](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Weg vermijden op de kaart exporteren iOS 1](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![Weg vermijden op de kaart exporteren iOS 2](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

Afhankelijk van uw apparaatinstellingen en beschikbare applicaties, kan uw volledige lijst van te vermijden wegen of slechts één ervan worden [geëxporteerd](../../personal/import-export.md#export) als een `.osf`-bestand naar verschillende locaties. Selecteer de wegen die u wilt exporteren in de voorgestelde lijst.

U kunt te vermijden wegen voor routeberekening [importeren](../../personal/import-export.md#import) uit andere bronnen in `.osf`-bestandsformaat. Dit kan ook worden gedaan met de *Importeeroptie* (*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_import"/>*). U kunt ervoor kiezen om alle gegevens te importeren of slechts enkele te vermijden wegen (door een weg aan te vinken in de lijst).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Weg vermijden op de kaart importeren Android](@site/static/img/navigation/routing/avoid_roads_import_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Weg vermijden op de kaart importeren iOS](@site/static/img/navigation/routing/avoid_roads_import_ios_1.png)

</TabItem>

</Tabs>

:::note
De handigste manier om te vermijden wegen tussen uw apparaten te synchroniseren is door [OsmAnd Cloud](../../personal/osmand-cloud.md) te gebruiken (Pro-abonnement vereist).
:::


## Houd rekening met tijdelijke beperkingen {#consider-temporary-limitations}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

De optie *Houd rekening met tijdelijke beperkingen* maakt het mogelijk om rekening te houden met tijdelijke wegbeperkingen bij het berekenen van routes. Dit kunnen zaken zijn als wegwerkzaamheden of wegafsluitingen om een bepaalde reden (een ongeval, wegreparaties, natuurrampen). Het inschakelen van deze optie kan u helpen onverwachte omleidingen of vertragingen te voorkomen. Houd er rekening mee dat deze informatie soms verouderd kan zijn.
In OpenStreetMap wordt deze informatie meestal gemarkeerd met de tag [`temporary`](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions).


## Ontwikkelingssectie {#development-section}

De **Ontwikkelingssectie** van de *Routeparameters*-instellingen (*Menu → Instellingen → app-profiel → Navigatie-instellingen → Routeparameters → Ontwikkeling*) is alleen zichtbaar wanneer de [OsmAnd ontwikkelingsplugin](../../plugins/development.md) is ingeschakeld. Het bevat instellingen zoals *Routeringstype (Android) / Routeringsalgoritme (iOS), GPX-benadering (alleen Android), Autozoom en Live updates-gegevens (alleen Android)*. Lees het artikel [Navigatie-instellingen](../../navigation/guidance/navigation-settings.md#development-settings) voor een gedetailleerde beschrijving.