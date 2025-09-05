---
source-hash: 9dfdc23272c2395a2fe157264de05cb42ea6de2b1b0d9d756c1c1bf66f78f6d3
sidebar_position: 7
title: Navigatie-instellingen
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

## Overzicht {#overview}

Voor succesvolle navigatie is het belangrijk om de juiste instellingen correct te configureren, afhankelijk van uw behoeften en hoe u reist - met de auto, te voet, te paard of op ski's. Dit artikel beschrijft de basisrouteparameters, [gesproken aanwijzingen](#voice-prompts), [schermwaarschuwingen](#screen-alerts), [kaartgedrag tijdens navigatie](#map-during-navigation) en de [weergave van routelijnen](#customize-route-line). Het beschrijft ook voertuiginstellingen zoals [standaardsnelheid](#default-speed) en [maximum-/minimumsnelheid](#road-speeds), [motortype](#fuel-used-by-motor) voor CO2-berekening, [brandstoftankcapaciteit](#fuel-tank-capacity) en [grootte/gewicht](#size-parameters), die de route kunnen beïnvloeden. Het aanpassen van deze instellingen helpt u het meeste uit OsmAnd te halen en uw doel zonder onnodige vertraging te bereiken.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatie-instellingen iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### Hoe te openen {#how-to-open}

Deze sectie presenteert de navigatie-instellingen die nodig zijn voor het berekenen en uitzetten van een route, die u kunt instellen voor het geselecteerde profiel. Dit menu bevat instellingen voor [Routevoorbereiding](../setup/route-navigation.md), het [Kaartscherm tijdens navigatie](../guidance/map-during-navigation.md), en wat u instelt in de *Navigatie-instellingen* heeft direct invloed op de weergave van gegevens in de [Routegegevens](../setup/route-details.md).

Er zijn drie manieren om toegang te krijgen tot het menu Navigatie-instellingen.

- Ga naar het hoofd *Menu → Instellingen*, selecteer het gewenste *Profiel* en tik op *Navigatie-instellingen*.

- Tik op het *Navigatie*-pictogram op het kaartscherm en selecteer vervolgens het *Instellingen-pictogram → Navigatie-instellingen*.

- Ga naar het hoofd *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
Het standaard *Kaart bekijken*-profiel heeft geen navigatie-instellingen.
:::

## Navigatietype {#navigation-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png) ![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatie-instellingen iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>

Navigatie is een belangrijk onderdeel van een reis, en het kiezen van *het juiste type* navigatie kan uw reis veel gemakkelijker maken. Het type navigatie dat u kiest, kan afhangen van hoe u reist en of u een internetverbinding heeft.

- **Online navigatie**
Het maakt voornamelijk gebruik van een speciaal routesysteem of website waarmee de OsmAnd-app een route kan uitzetten op basis van actuele informatie en andere factoren. U kunt meer lezen over het kiezen van de beste route online in het artikel [Online routering](../routing/online-routing.md). Dit navigatietype is alleen beschikbaar voor de *Android-versie* van de app.

- **Offline navigatie**
Het vereist geen internettoegang en biedt een bredere selectie van [navigatietypen](../routing/osmand-routing.md#routing-types) die kunnen worden gebruikt om een route te berekenen. Daartoe behoren *fiets, boot, auto, te voet, ski* en *rechte lijn*. Er zijn momenteel 13 basistypen routering, evenals een extern [BRouter](../routing/brouter.md) routeringstype dat extra routeringsmogelijkheden biedt.

Het navigatietype bepaalt welke regels worden gebruikt om routes te berekenen. Als u een specifiek type navigatie nodig heeft, kunt u **uw eigen gewijzigde *XML*-routeringsbestand importeren**. Lees meer over routeringsregels op onze [GitHub-pagina](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). En er is een apart artikel over XML-formaat en hoe het te gebruiken, [Kaartweergavestijl](../../../technical/osmand-file-formats/osmand-rendering-style.md), dat u kan helpen bij het maken van een routebestand.

## Routeparameters {#route-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatie-instellingen iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>

**<Translate android="true" ids="route_parameters"/>** zijn instellingen die bepalen hoe de applicatie een route berekent om een bestemming te bereiken, rekening houdend met factoren zoals transporttype, routeringsprioriteiten, routecondities, routecomplexiteit en gebruikersvoorkeuren.

Voor elk [profiel](../../personal/global-settings.md#default-profile), behalve voor *Kaart bekijken*, selecteert OsmAnd standaard het optimale [Navigatietype](#navigation-type) en de relevante [routeparameters](../routing/osmand-routing.md#routing-types). U kunt echter elk type kiezen dat u wilt en de parameters wijzigen, afhankelijk van uw voorkeuren en de externe omstandigheden van de komende reis.

Alle routeparameters worden gedetailleerd beschreven in de overeenkomstige secties van de documentatie:
*[Autoroutering (Vrachtwagen, Motorfiets)](../routing/car-based-routing.md), [Fietsroutering (MTB)](../routing/bicycle-based-routing.md), [Bromfietsroutering](../routing/moped-routing.md), [Voetgangersroutering](../routing/pedestrian-routing.md), [Openbaar vervoer routering](../routing/public-transport-navigation.md), [Paardrijroutering](../routing/horse-routing.md), [Ski-routering](../routing/ski-routing.md), [Treinroutering](../routing/train-routing.md), [Bootroutering](../routing/boat-navigation.md), [Direct-naar-punt routering](../routing/direct-to-point-routing.md), [Rechte lijn routering](../routing/straight-line-routing.md), [Online routering](../routing/online-routing.md), [BRouter routering](../routing/brouter.md)*.

### Route herberekenen {#recalculate-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_route-recalculation1_andr.png)
![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_route-recalculation2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatie-instellingen iOS](@site/static/img/navigation/navigation_settings_route-recalculation1_ios.png)
![Navigatie-instellingen iOS](@site/static/img/navigation/navigation_settings_route-recalculation2_ios.png)

</TabItem>

</Tabs>

De parameter **Routeberekening** wijzigt automatisch de berekende route wanneer u ervan afwijkt of in de tegenovergestelde richting rijdt. In beide gevallen helpt deze instelling u uw rijrichting te behouden en uw bestemming te bereiken zonder tijd te verspillen aan het handmatig zoeken naar een nieuwe route.

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> bij afwijking* | <Translate android="true" ids="recalculate_route_distance_promo"/> | Als [Gesproken aanwijzingen](../guidance/voice-navigation.md#voice-settings) zijn ingeschakeld, kondigt OsmAnd aan dat de route opnieuw wordt berekend. |
| *Route herberekenen bij omgekeerde richting* | Uw route wordt opnieuw berekend als u naar het startpunt beweegt. | Met deze instelling uitgeschakeld, wordt beweging naar het startpunt niet beschouwd als een afwijking van het pad (zolang het de berekende route volgt). |

### Ontwikkelingsinstellingen {#development-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *Menu → Instellingen → app-profiel → Navigatie-instellingen → Routeparameters → Ontwikkeling*

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *Menu → Instellingen → app-profiel → Navigatie-instellingen → Routeparameters → Ontwikkeling*

![Navigatie-instellingen iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>

De parameters in de sectie **Ontwikkeling** zijn voornamelijk voor gevorderde gebruikers en zijn alleen beschikbaar wanneer de [OsmAnd ontwikkelingsplugin](../../plugins/development.md) is ingeschakeld.

| Parameter | Beschrijving |
|:------------|:---------------|
| *Routeringstype* (*Android*) / *Routeringsalgoritme* (*iOS*) | <ul><li>**A*** 2-fasen (*Android*) / **A*** (*iOS*) voegt een extra fase toe aan het standaardalgoritme om de kwaliteit van de berekende route te verbeteren. Deze optie kan nuttig zijn voor het vinden van routes in grote en complexe wegennetwerken, maar de routeberekening kan langer duren.</li><li>**A* classic** (*Android*) / **Highway hierarchies** (*iOS*) optimaliseren routeplanning door hoofd- en snelwegen te bevoordelen, waardoor het aantal bochten en kruispunten op de route wordt geminimaliseerd. Bijzonder effectief over lange afstanden.</li><li>**HH (Highway Hierarchies) x Java** (*alleen Android*) is gebaseerd op de implementatie van hiërarchische datastructuren om padvinding op een kaart te optimaliseren, rekening houdend met runtimebeperkingen en apparaatresourceverbruik, en is gerealiseerd op het Java-platform.</li><li>**HH (Highway Hierarchies) x C++** (*alleen Android*) is een algoritme dat de C++-programmeertaal gebruikt om efficiënt wegennetwerkgegevens te verwerken en optimale routes te bouwen met behulp van hiërarchische datastructuren. Het is geoptimaliseerd voor snelle verwerking van grote hoeveelheden gegevens en is bijzonder effectief voor het navigeren op kaarten met veel wegennetwerken.</li></ul> |
| *GPX-benadering* (*alleen Android*) | <ul><li>**Routeringsgebaseerde** GPX-benadering in **C++ en Java** gebruikt routegegevens om GPS-tracks te benaderen met bestaande wegroutes, wat de nauwkeurigheid van de track verbetert en de trackgrootte vermindert.</li><li>**Geometriegebaseerde** GPX-benaderingen in **C++ en Java** werken op basis van geometrische principes om GPS-tracks snel en nauwkeurig te benaderen, waardoor efficiënte verwerking van grote hoeveelheden gegevens mogelijk is.</li></ul> |
| *Autozoom* | <ul><li>**Discreet** stelt u in staat om in te zoomen op de kaart tot een specifiek detailniveau, gemeten in enkele discrete stappen.</li><li>**Vloeiend** zorgt voor een geleidelijke verandering in de kaartschaal met vloeiende animatie-effecten zonder schokken of sprongen.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*alleen Android*) | Gebruik [OsmAnd Live updates](../../personal/maps-resources.md#osmand-live) tijdens het routeren. Let op, we raden aan deze optie alleen te gebruiken voor testdoeleinden. |

<!--
| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>* | Maakt het mogelijk om [OsmAnd Live updates](../../personal/maps-resources.md#osmand-live) te gebruiken tijdens het routeren. Let op, we raden aan deze optie alleen te gebruiken voor testdoeleinden. |
| *<Translate android="true" ids="use_two_phase_routing"/>* | Voegt een extra fase toe aan het standaard (A*) algoritme om de kwaliteit van de berekende route te verbeteren. Deze optie kan nuttig zijn voor het vinden van routes in grote en complexe wegennetwerken, hoewel het meer tijd kan kosten voor routeberekening. |
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/> |
-->

## Gesproken aanwijzingen {#voice-prompts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Instellingen gesproken navigatie Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> knop* *(of <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Kies profiel → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Instellingen gesproken navigatie iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

Het eerste deel van het artikel *[Gesproken aanwijzingen / Meldingen](./voice-navigation.md)* beschrijft gedetailleerd hoe u gesproken aanwijzingen instelt.

Audio-instructies tijdens navigatie helpen u als bestuurder of voetganger uw bestemming te bereiken terwijl u [een geselecteerde route navigeert](../setup/route-navigation.md). Ze bevatten informatie over bochten, rijrichtingen, verkeersborden, afstanden tot uw bestemming en andere factoren die uw navigatie kunnen beïnvloeden.

Als u een track als uw bestemming selecteert, moet u de optie [Aan wegen koppelen](../setup/gpx-navigation.md#attach-to-the-roads) gebruiken om de gesproken aanwijzingen correct te laten werken.

*Gesproken aanwijzingen* stellen u in staat om u op de weg te concentreren en niet afgeleid te worden door de kaart of het navigatieapparaat. Ze verbeteren ook de rijveiligheid, verminderen de tijd die nodig is om onbekend terrein te navigeren en kunnen nuttig zijn voor verschillende [typen routes](../routing/osmand-routing.md#routing-types).

## Schermwaarschuwingen {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigatie-instellingen](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Navigatie-instellingen](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>

De navigatie-instelling **Schermwaarschuwing** schakelt de [**Waarschuwingswidget**](../../widgets/nav-widgets.md#alert-widget) in. *Details:*

- Wanneer u een van de ondersteunde obstakels op de weg nadert, verschijnen er meldingen in de linkerbenedenhoek van de kaart.
- Als u de [*gesproken en tekstaanwijzingen*](../../navigation/guidance/voice-navigation.md) configureert die beschikbaar zijn in de OsmAnd-app, krijgt u een comfortabelere en veiligere reis.
- Het uiterlijk en de timing van de aanwijzingen zijn afhankelijk van uw snelheidsinstellingen. U vindt ze [in het artikel](../../../technical/algorithms/voice-prompt-triggering.md).
- Het gedrag van *Schermwaarschuwingen* wordt ook beïnvloed door de instelling [Punten langs de route weergeven](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route).

U kunt ***selecteren welke waarschuwingen*** u op het app-scherm wilt zien tijdens het navigeren:

- **Snelheidslimiet** ([OSM Wiki info](https://wiki.openstreetmap.org/wiki/Speed_limits)). In de instelling Schermwaarschuwingen wordt de *Snelheidslimiet* alleen op het scherm weergegeven met *Verkeerswaarschuwingen* ingeschakeld. Als u snelheidslimieten tijdens navigatie wilt zien zonder andere waarschuwingen, gebruikt u de [widget](../../widgets/nav-widgets.md#speed-limit).
- **Verkeerswaarschuwingen** ([OSM Wiki info](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). Aanvullende informatie is te vinden in het artikel [Kaartscherm tijdens navigatie](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings).
- **Voetgangersoversteekplaatsen** ([OSM Wiki info](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **Snelheidscamera's** ([OSM Wiki info](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). Voor meer informatie over de instelling Snelheidscamera in OsmAnd, lees [Waarschuwingstypen](../../widgets/nav-widgets.md#alert-types) en het artikel *Algemene instellingen*, sectie [Juridisch](../../personal/global-settings.md#legal).
- **Tunnels** ([OSM Wiki info](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
De typen waarschuwingen hebben een verschillend visueel uiterlijk, afhankelijk van de reisregio. OsmAnd streeft er niet naar om 100% identieke verkeersborden te presenteren, maar wijst op enkele overeenkomsten.
:::

## Kaart tijdens navigatie {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*

</TabItem>

</Tabs>

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

De **kaart wordt gebruikt tijdens navigatie** om uw locatie te bepalen, uw route te plannen en de oriëntatie van het land. Tijdens navigatie kunt u de kaart bekijken met *auto-center*, deze verplaatsen en *in- en uitzoomen* om het gewenste gebied te zien. De kaart kan ook markeringen weergeven die interessante plaatsen, routes, weersomstandigheden, verkeersborden en andere objecten aangeven om u te helpen navigeren. De kaart kan in *realtime* worden bijgewerkt en toont *actuele informatie* die van invloed kan zijn op de routeplanning.

U kunt leren hoe het gedrag van de kaart verandert tijdens navigatie in het artikel [Kaartscherm tijdens navigatie](../guidance/map-during-navigation.md).

## Routelijn aanpassen {#customize-route-line}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*

![Navigatie-instellingen](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Navigatie-instellingen](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>

Met de instelling **Routelijn aanpassen** kunt u het uiterlijk van de routelijn kiezen die tijdens navigatie op de kaart zichtbaar zal zijn. U kunt de *kleur*, de *breedte van de lijn* en de weergave van de *richtingspijlen* erop selecteren. Voor elk profiel kunt u een andere lijnweergave kiezen. Al deze parameters worden gedetailleerd beschreven in het artikel *Kaartscherm tijdens navigatie* in de sectie [Uiterlijk van de routelijn](../../navigation/guidance/map-during-navigation.md#route-line-appearance).

## Voertuigparameters {#vehicle-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>

Voor een optimale routeberekening in OsmAnd moet u rekening houden met de volgende voertuigparameters:

1. Stel de [*standaardsnelheid* of *wegsnelheden*](#default-speed--road-speeds) in, als de [minimum- en maximumsnelheid](#road-speeds) van het voertuig. Dit helpt de applicatie de benodigde tijd voor de route te bepalen en stelt deze in staat de beste route te kiezen, rekening houdend met de snelheidslimieten op verschillende wegsegmenten.
2. Specificeer het [*type*](#fuel-used-by-motor) brandstof dat door de motor wordt gebruikt. Dit stelt de app in staat om de CO2-uitstoot te schatten.
3. Voer de [*capaciteit van uw tank*](#fuel-tank-capacity) in om uw brandstofniveau en verbruik nauwkeurig bij te houden.
4. Definieer [*grootte- en gewichtsparameters*](#size-parameters) van uw voertuig, wat de app kan helpen de optimale route te berekenen en obstakels op de weg te vermijden als gevolg van beperkingen.

Het correct instellen van de parameters in de OsmAnd-app helpt u problemen te voorkomen bij het navigeren van een route, de meest geschikte te kiezen op basis van het type voertuig en wegbeperkingen, en de tijd voor uw reis te berekenen.

### Grootteparameters {#size-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

Voertuigparameters beïnvloeden navigatie en routeconstructie omdat ze de beschikbaarheid van wegen, bruggen, veerboten, dammen en andere infrastructuur bepalen. Als de hoogte, breedte, lengte of het gewicht van een voertuig de toegestane waarden voor bepaalde wegvakken overschrijdt, zal het OsmAnd-navigatiesysteem een alternatieve route vinden om obstakels onderweg te vermijden.

- De meeteenheden komen overeen met de instellingen die zijn geselecteerd in *Algemene instellingen → [Eenheden & formaten](../../personal/profiles.md#units--formats)*.
- De voertuigparameters kunnen handmatig worden ingesteld.
- Als u handmatig de voertuigmeetparameter selecteert, biedt de applicatie u de dichtstbijzijnde waarde uit de kant-en-klare lijst. Dit is nodig om fouten te voorkomen en de route correcter op te bouwen.
- U kunt voertuigparameters kiezen uit een kant-en-klare lijst met afmetingen.
- Stel de grootte niet in op *Geen*, wat betekent dat er geen beperkingen op de geselecteerde parameter worden toegepast.

#### Limieten {#limits}

**1.** [**<Translate android="true" ids="routing_attr_weight_name"/> limiet**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> De gewichtsparameter is alleen beschikbaar in navigatietypen zoals [*Auto, Vrachtwagen* en *Motorfiets*](../../navigation/routing/car-based-routing.md).

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.** [**<Translate android="true" ids="routing_attr_height_name"/> limiet**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> De hoogteparameter is alleen beschikbaar in navigatietypen zoals *[Auto, Vrachtwagen, Motorfiets](../../navigation/routing/car-based-routing.md)* en *[Boot](../../navigation/routing/boat-navigation.md)*.

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)

**3.** [**<Translate android="true" ids="routing_attr_length_name"/> limiet**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> De lengteparameter is alleen beschikbaar in navigatietypen zoals [*Auto, Vrachtwagen* en *Motorfiets*](../../navigation/routing/car-based-routing.md).

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**<Translate android="true" ids="routing_attr_width_name"/> limiet**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> De breedteparameter is alleen beschikbaar in navigatietypen zoals *[Auto, Vrachtwagen, Motorfiets](../../navigation/routing/car-based-routing.md)* en *[Boot](../../navigation/routing/boat-navigation.md)*.

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

Beperkingen op voertuigparameters kunnen belangrijk zijn voor navigatie en verkeersveiligheid. Enkele van deze beperkingen kunnen zijn:

1. Beperkingen op voertuigen die in bepaalde stedelijke gebieden rijden.
2. Beperkingen op voertuigbewegingen op specifieke wegvakken, zoals waar bruggen, tunnels met beperkte ruimte, lage viaducten, complexe bochten of andere constructies zijn.
3. Gewichtslimieten per voertuigas kunnen vooral belangrijk zijn voor vrachtwagens.
4. Beperkingen voor voertuigen die onder bepaalde omstandigheden rijden, zoals hoge temperaturen, natte of besneeuwde wegen, 's nachts of bij weersomstandigheden met beperkt zicht.

Deze beperkingen kunnen belangrijk zijn voor navigatie en moeten in overweging worden genomen bij het plannen van een route. Als een voertuig de limieten overschrijdt, kan dit leiden tot verkeersveiligheid, schade aan infrastructuur, boetes bij ongevallen en andere juridische gevolgen. Daarom moeten bestuurders de route zorgvuldig onderzoeken en ervoor zorgen dat de hoogte van hun voertuig voldoet aan de limieten.

### Brandstofparameters {#fuel-parameters}

#### Brandstof gebruikt door motor {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatieroute Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatieroute iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

Als u het motortype selecteert in de voertuigparameters, worden de [***CO2-voetafdrukgegevens***](../../navigation/setup/route-details.md#elevation-info) boven de grafiek weergegeven in [Routegegevens](../setup/route-details.md).
Er zijn zes brandstoftypen beschikbaar: ***Benzine, Diesel, LPG, CNG, Elektrisch*** en ***Hybride***.

**Toepasbaarheid:**

De instelling **Brandstof gebruikt door motor** is alleen beschikbaar in voertuiggebaseerde navigatie, zoals *[Auto, Motorfiets en Vrachtwagen](../../navigation/routing/car-based-routing.md)*.

#### Brandstoftankcapaciteit {#fuel-tank-capacity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>

De parameter **Brandstoftankcapaciteit** stelt u in staat om het brandstofniveau en -verbruik van uw voertuig nauwkeuriger bij te houden door het totale volume van uw tank op te geven. De meeteenheid voor brandstofcapaciteit wordt bepaald door de instellingen die zijn geconfigureerd in *Menu → Profiel configureren → Algemene instellingen → Eenheden & formaten → Eenheid van volume*. Voor gedetailleerde instructies over het instellen van Eenheden & formaten, raadpleeg het artikel [Profiel (Instellingen)](https://osmand.net/docs/user/personal/profiles#units--formats).

OsmAnd ondersteunt de volgende eenheden voor capaciteit:

- Gallons - **gal**. Deze afkorting wordt gebruikt om zowel **Imperial gallons** als **US gallons** weer te geven, afhankelijk van uw geselecteerde eenheidsvoorkeuren.
- Liters - **l**. De metrische eenheid voor capaciteit.

**Toepasbaarheid:**

De instelling **Brandstoftankcapaciteit** is alleen beschikbaar in voertuiggebaseerde navigatie. Voor navigatietypen zoals *Fiets*, *Paardrijden*, *Te voet* en *Ski* wordt deze parameter niet weergegeven in de Voertuigparameters.

Door de exacte capaciteit van uw brandstoftank in te voeren, kan de app een meer op maat gemaakte ervaring bieden, waaronder:

- Nauwkeurige tracking van resterende brandstof op basis van uw verbruik.
- Verbeterde routeplanning met brandstofstops geoptimaliseerd op basis van uw tankgrootte.

Om nauwkeurige berekeningen en navigatiesuggesties te garanderen, controleert u of uw geselecteerde eenheid overeenkomt met de meetstandaard van uw tank.

### Standaardsnelheid / Wegen snelheden {#default-speed--road-speeds}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie-instellingen](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatie-instellingen](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>

Voor alle soorten navigatie kunnen de minimale en maximale toegestane snelheid, zowel standaard als per weg, verschillen, volgens bepaalde waarden ([Standaard snelheidslimieten](https://wiki.openstreetmap.org/wiki/Default_speed_limits)) en beperkingen voor voertuigen. De snelheid wordt ook in bepaalde stappen ingesteld om de applicatie-instellingen maximaal bruikbaar te maken. Voor de profielen *Wandelen*, *Paardrijden* en *Fietsen*, in kleine stappen gelijk aan 0,1 km/u ([Eenheden & formaten](https://osmand.net/docs/user/personal/profiles#units--formats)), en voor de andere profielen, in stappen gelijk aan 1 km/u.
Snelheidsinstellingen bepalen wanneer [gesproken aankondigingen](../guidance/voice-navigation.md) worden geactiveerd.

Deze parameters worden gebruikt als snelheid om de [aankomsttijd](../../widgets/nav-widgets.md#time-to-intermediate) te schatten wanneer de snelheid niet kan worden bepaald uit kaartgegevens:

- voor het geselecteerde profiel;
- als de gebruikte wegen geen snelheidslimieten hebben, wat ook van invloed kan zijn op de routering;
- als door de gebruiker gegenereerde of geïmporteerde tracks zijn geselecteerd.

#### Standaardsnelheid {#default-speed}

De **standaardsnelheid** is de vooraf ingestelde bewegingssnelheid. Deze wordt gebruikt om de aankomsttijd te berekenen en de optimale route te bepalen op basis van de bewegingssnelheid die de applicatie als typisch beschouwt voor deze transportmodus. Bijvoorbeeld auto, openbaar vervoer, voetganger, of de snelheid die u handmatig instelt.

#### Wegen snelheden {#road-speeds}

<InfoAndroidOnly />

![Navigatie-instellingen](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

<!--
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie-instellingen](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatie-instellingen](@site/static/img/navigation/navigation_settings_speeds-r_ios.png)

</TabItem>

</Tabs>

:::note
Deze instellingen in iOS zijn beschikbaar in *Menu → Instellingen → app-profiel → Navigatie-instellingen → Routeparameters → Wegen snelheden*.
:::
-->

- **Minimale snelheid**
De instelling stelt de minimale rijsnelheid in voor alle wegtypen op de route. Het verhoogt de prioriteit voor wegen met een aanbevolen snelheid die lager is dan de minimale snelheid.
- **Maximale snelheid**
De instelling stelt de maximale rijsnelheid in en verlaagt de prioriteit voor wegen met een mogelijke snelheid die hoger is dan het maximum.

## Gedetailleerde trackbegeleiding {#detailed-track-guidance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Aan wegen koppelen 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png) ![Navigatie-instellingen Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *Gedetailleerde trackbegeleiding*

![Navigatie-instellingen](@site/static/img/navigation/detailed_track_guidance_1_ios.png) ![Navigatie-instellingen](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

De functie **Gedetailleerde trackbegeleiding** verbetert de nauwkeurigheid van routenavigatie bij het gebruik van **track-gebaseerde routes**. Wanneer u een track als bestemming selecteert, kunt u de instelling [Aan wegen koppelen](../setup/gpx-navigation.md#attach-to-the-roads) inschakelen vanuit het menu [Track volgen](../setup/gpx-navigation.md#follow-track-options). Dit zorgt ervoor dat de track wordt uitgelijnd met bestaande wegen voor een soepelere, nauwkeurigere navigatie.

Er zijn twee opties voor het gebruik van *Gedetailleerde trackbegeleiding*:

- **<Translate android="true" ids="ask_every_time"/>** (*standaardinstellingen*) – De optie *Aan wegen koppelen* verschijnt in de sectie [Routegegevens](../setup/route-details.md) elke keer dat een track-gebaseerde route wordt berekend. Hierdoor kunt u beslissen of u wegaansluiting wilt toepassen voor elke navigatiesessie.

- **<Translate android="true" ids="shared_string_always"/>** – Het wegaansluitingsproces wordt automatisch toegepast voor elke *navigatie per track*-route zonder handmatige bevestiging te vereisen.

Voor meer informatie over het gebruik van track-gebaseerde navigatie, bezoek [Navigatie per track](../setup/gpx-navigation.md).

## Gerelateerde artikelen {#related-articles}

- [Routeparameters](../routing/osmand-routing.md#routing-types)
- [Routevoorbereiding](../setup/route-navigation.md)
- [Navigatie per track](../setup/gpx-navigation.md)
- [Navigatie per markeringen](../setup/markers-navigation.md)
- [Routegegevens](../setup/route-details.md)
- [Kaartscherm tijdens navigatie](./map-during-navigation.md)
- [Gesproken aanwijzingen / Meldingen](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Laatst bijgewerkt: april 2025*