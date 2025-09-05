---
source-hash: afe72063425498b71bb1dd721322f8785efd87d15a05cdd773b5036abe42e09b
sidebar_position: 0
title: Over OsmAnd-routering
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

Offline OsmAnd-routering is gebaseerd op OpenStreetMap-gegevens en biedt een verscheidenheid aan routes voor verschillende doeleinden. Dit is een lijst met vooraf gedefinieerde routeringstypen die kunnen worden uitgebreid. De navigatieregels zijn opgenomen in het bestand [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) en worden gebruikt voor offline routering. Het routetype verandert automatisch wanneer u uw profiel wijzigt.


## Routeringstypen {#routing-types}

De volgende profielen met hun routeringstypen zijn vooraf ingesteld in OsmAnd: *Rijden, Fietsen, Wandelen, Vrachtwagen, Motor, Bromfiets, Openbaar vervoer, Boot, Vliegtuig, Skiën, Trein, Paardrijden*. Daarnaast kunt u uw eigen profielen maken met specifieke routeringsregels of het [OsmAnd-routeringsalgoritme aanpassen](../routing/osmand-routing.md#customize-offline-routing).

:::note

- [**Vrachtwagen, Motor, Bromfiets, Trein, Vliegtuig, Boot en Paardrijden**](./osmand-routing.md) profielen zijn standaard uitgeschakeld. Om deze profielen te gebruiken, moet u ze activeren in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.

- Het navigatietype [**Direct-naar-punt**](./direct-to-point-routing.md) heeft geen eigen profiel en kan met elk ingeschakeld profiel worden gebruikt.

- OsmAnd offline routering kan worden **geconfigureerd door het [.xml-bestand](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) te wijzigen**. Voor meer informatie, zie het artikel [*Offline routering aanpassen*](../routing/osmand-routing.md#customize-offline-routing).

:::

| Categorie | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *OsmAnd offline routering* | Het offline routeringsmechanisme van OsmAnd gebruikt vooraf gedownloade kaarten als gegevensbron voor routeberekening. | Navigatietypen: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md), [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md), [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md), [Bromfiets](./moped-routing.md), [Motor](./car-based-routing.md#route-parameters---motorcycle), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md), [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md), [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md), [Vrachtwagen](car-based-routing#route-parameters---truck), [Trein](./train-routing.md). |
| *Direct naar punt routering* | Gebruikt ook offline kaarten en biedt een rechte lijn routering (of *punt-naar-punt* navigatie). | Navigatietypen: *[Rechte lijn](./straight-line-routing.md)*, *[Direct-naar-punt](./direct-to-point-routing.md)*. |
| [*BRouter* *(offline)*](./brouter.md) | Offline routering geleverd door [BRouter app](https://brouter.de/). | Alleen beschikbaar voor **Android**. De volledige beschrijving leest u [hier](./brouter.md). |
| [*<Translate android="true" ids="shared_string_online"/>* (*Android*)](./online-routing.md) | Online routering bouwt de route van servers online via de internetverbinding. | Alleen beschikbaar voor **Android**. U kunt [online routering](./online-routing.md) configureren om een route te bouwen vanuit verschillende online routeringsengines zoals [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), Generieke GPX. |

- *[Autoroutering (Vrachtwagen, Motor)](./car-based-routing.md)* - OsmAnd biedt rij-instructies voor bestuurders van auto's, vrachtwagens en motoren.
- *[Fietsroutering (MTB)](./bicycle-based-routing.md)* - Fietsroutering biedt navigatieaanwijzingen specifiek voor fietsers en MTB-enthousiastelingen. Het kan ook worden gebruikt door bromfietsers (scooterrijders).
- *[Voetgangersroutering](./pedestrian-routing.md)* - kan niet alleen worden gebruikt voor wandelingen in de stad, maar ook tijdens wandeltochten.
- *[Bromfietsroutering](./moped-routing.md)* - is gebaseerd op de fietsroutering, hoewel het zijn eigen kenmerken heeft.
- *[Openbaar vervoer routering](./public-transport-navigation.md)* - kan u helpen tijdens het reizen door de stad.
- *[Paardrijroutering](./horse-routing.md)* - biedt ruiters de hulpmiddelen die ze nodig hebben om hun paardrijactiviteiten te plannen en ervan te genieten.
- *[Ski-routering](./ski-routing.md)* - stelt gebruikers in staat om skitochten en andere wintersportactiviteiten te plannen en te navigeren met behulp van de OsmAnd mobiele app.
- *[Treinroutering](./train-routing.md)* - biedt de mogelijkheid om de spoorlijnen te gebruiken voor navigatie.
- *[Bootroutering](./boat-navigation.md)* - kan worden gebruikt om een route te bouwen op rivieren, kanalen, kleine meren en op open zee, maar alleen als vaarwegen zijn gemarkeerd in OpenStreetMap.
- *[Rechte lijn routering](./straight-line-routing.md)* - biedt een rechte lijn routering (of "punt-naar-punt" navigatie) die opnieuw wordt berekend wanneer uw locatie verandert.
- *[Direct-naar-punt routering](./direct-to-point-routing.md)* - biedt een rechte lijn routering (of "punt-naar-punt" navigatie) die stabiel blijft voor de gehele navigatie in tegenstelling tot **Rechte lijn** routering (routeherberekening is uitgeschakeld).


## Offline routering aanpassen {#customize-offline-routing}

U kunt ook uw **eigen routing.xml-bestand** maken of de standaard **routing.xml** wijzigen en deze gebruiken voor navigatie (alleen voor gevorderde OsmAnd-gebruikers).

- Kopieer het bestand [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) naar uw apparaat. Lees de [Help-informatie](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25) zorgvuldig door. Bekijk als voorbeeld het [routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU)-bestand van de OsmAnd-gebruiker.
- Na het aanbrengen van de wijzigingen kan het nieuwe *routing.xml*-bestand aan OsmAnd worden toegevoegd door erop te tikken en te selecteren om het te openen in de OsmAnd-app.
- Selecteer het gewijzigde [Navigatietype](../../navigation/guidance/navigation-settings.md#navigation-type) voor uw profiel.

Meer informatie over deze functie is te vinden in de [*Technische documentatie*](../../../technical/osmand-file-formats/osmand-routing-xml.md) en op [*OsmAnd's GitHub-pagina*](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).


## Specifieke wegen vermijden {#avoid-specific-roads}

:::caution
De functie 'Wegen vermijden' is globaal en beïnvloedt alle **[Routeringstypen](#routing-types)** behalve *[Online routering](../routing/online-routing.md)* en *[BRouter](../routing/brouter.md)*.
:::

Er zijn twee mogelijke manieren om te kiezen welke wegen moeten worden vermeden bij het berekenen van een route:

- Selecteer het wegtype in de sectie [Routeparameters](../guidance/navigation-settings.md#route-parameters) van [Navigatie-instellingen](../guidance/navigation-settings.md). De beschrijving van deze instelling wordt gegeven in de artikelen over de instellingen van [Routeringstypen](#routing-types). Zie als voorbeeld de beschrijving van het routeringstype [Auto / Vrachtwagen / Motor](../routing/car-based-routing.md#route-parameters---car).
- U kunt ook specifieke wegen selecteren die niet zullen worden gebruikt voor routering met behulp van de optie *[Wegen vermijden](../../map/map-context-menu.md#avoid-road)* via het *kaartcontextmenu* of met behulp van het *[Wegen vermijden menu](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*).

:::note

- De weg moet op maximale zoom worden gemarkeerd, aangezien OsmAnd de tik verkeerd kan interpreteren en bijvoorbeeld de verkeerde kant van een tweebaansweg of trottoir kan blokkeren.
- De functie 'Specifieke wegen vermijden' werkt niet correct met de optie [Navigatie via spoor](../setup/gpx-navigation.md) en heeft geen invloed op de vereenvoudigde [Markeringen navigatie](../setup/markers-navigation.md#use-markers-in-navigation).

:::

### Wegen vermijden menu {#avoid-roads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *Navigatieknop → Instellingen → Wegen vermijden...*

![Wegen vermijden menu Android](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *Navigatieknop → Instellingen → Wegen vermijden*

![Wegen vermijden menu iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png)

</TabItem>

</Tabs>

In dit menu kunt u de vorige selectie van de te vermijden weg ongedaan maken. Tik hiervoor op een kruis (Android) of een rode **"-"** tegenover de weg die u wilt gebruiken voor routeberekening.

Met de optie *Selecteer op kaart* kunt u doorgaan met het markeren van wegen als ongeldig voor routering op de OsmAnd-kaart.

Wanneer u een weg selecteert om te vermijden via het *kaartcontextmenu* of het *Wegen vermijden menu*, wordt de lijst met wegen boven het kaartscherm weergegeven.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wegen vermijden op de kaartlijst Android](@site/static/img/navigation/routing/action_avoid_roads_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wegen vermijden op de kaartlijst iOS](@site/static/img/navigation/routing/avoid_route_ios_2.png)

</TabItem>

</Tabs>


## Exporteren / Importeren {#export--import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Wegen vermijden op de kaart exporteren Android 1](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![Wegen vermijden op de kaart exporteren Android 2](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Wegen vermijden op de kaart exporteren iOS 1](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![Wegen vermijden op de kaart exporteren iOS 2](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

Afhankelijk van uw apparaatinstellingen en beschikbare applicaties, kan uw hele lijst met te vermijden wegen of slechts één ervan worden [geëxporteerd](../../personal/import-export.md#export) als een `.osf`-bestand naar verschillende locaties. Selecteer de wegen die u wilt exporteren in de voorgestelde lijst.

U kunt wegen [importeren](../../personal/import-export.md#import) om te vermijden tijdens routeberekening vanuit andere bronnen in `.osf`-bestandsformaat. Dit kan ook worden gedaan met behulp van de optie *Importeren* (*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_import"/>*). U kunt ervoor kiezen om alle gegevens te importeren of slechts enkele wegen te vermijden (een weg markeren met een vinkje in de lijst).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wegen vermijden op de kaart importeren Android](@site/static/img/navigation/routing/avoid_roads_import_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wegen vermijden op de kaart importeren iOS](@site/static/img/navigation/routing/avoid_roads_import_ios_1.png)

</TabItem>

</Tabs>

:::note
De meest handige manier om te vermijden wegen tussen uw apparaten te synchroniseren, is door [OsmAnd Cloud](../../personal/osmand-cloud.md) te gebruiken (Pro-abonnement vereist).
:::


## Tijdelijke beperkingen overwegen {#consider-temporary-limitations}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

De optie *Tijdelijke beperkingen overwegen* maakt het mogelijk om rekening te houden met tijdelijke wegbeperkingen bij het berekenen van routes. Dit kunnen zaken zijn zoals wegwerkzaamheden of wegafsluitingen om een bepaalde reden (een ongeluk, wegwerkzaamheden, natuurrampen). Het inschakelen van deze optie kan u helpen onverwachte omleidingen of vertragingen te voorkomen. Houd er rekening mee dat deze informatie soms verouderd kan zijn.
In OpenStreetMap wordt deze informatie meestal gemarkeerd met de tag [`temporary`](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions).


## Ontwikkelingssectie {#development-section}

De **Ontwikkelingssectie** van de instellingen voor *Routeparameters* (*Menu → Instellingen → app-profiel → Navigatie-instellingen → Routeparameters → Ontwikkeling*) is alleen zichtbaar wanneer de [OsmAnd-ontwikkelingsplugin](../../plugins/development.md) is ingeschakeld. Deze omvat instellingen zoals *Routeringstype (Android) / Routeringsalgoritme (iOS), GPX-benadering (alleen Android), Autozoom en OsmAnd Live-gegevens (alleen Android)*. Lees het artikel [Navigatie-instellingen](../../navigation/guidance/navigation-settings.md#development-settings) voor een gedetailleerde beschrijving.


> *Laatst bijgewerkt: juli 2024*