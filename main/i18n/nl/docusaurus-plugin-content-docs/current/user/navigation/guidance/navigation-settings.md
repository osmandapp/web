---
source-hash: a8559f43cff19c4a14831feb61c4c3facdea6dab64c9c232c37b5ba47e810958
sidebar_position: 1
title:  Navigatie-instellingen
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

Voor een succesvolle navigatie is het belangrijk om de juiste instellingen te configureren op basis van uw behoeften en hoe u reist - met de auto, te voet, te paard of op ski's. Dit artikel beschrijft de basisrouteparameters, [Spraakinstructies](#voice-prompts), [Schermwaarschuwingen](#screen-alerts), [Kaartgedrag tijdens navigatie](#map-during-navigation), en het [Uiterlijk van routelijnen](#customize-route-line). Het beschrijft ook [Voertuiginstellingen](#vehicle-parameters) zoals standaardsnelheid, motortype voor CO2-berekening, brandstoftankcapaciteit en afmetings-/gewichtsbeperkingen. Het aanpassen van deze instellingen helpt u om het meeste uit OsmAnd te halen en uw doel zonder onnodige vertraging te bereiken.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatie-instellingen iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### Hoe te openen {#how-to-open}

Deze sectie presenteert de navigatie-instellingen die nodig zijn voor het berekenen en uitzetten van een route, die u kunt instellen voor het geselecteerde profiel. Dit menu bevat instellingen voor [Routevoorbereiding](../setup/route-navigation.md), het [Kaartscherm tijdens navigatie](../guidance/map-during-navigation.md), en wat u instelt in de *Navigatie-instellingen* heeft direct invloed op de weergave van gegevens in de [Routedetails](../setup/route-details.md).

Er zijn drie manieren om het menu Navigatie-instellingen te openen.

- Ga naar het hoofdmenu *Menu → Instellingen*, selecteer het gewenste *Profiel* en tik op *Navigatie-instellingen*.

- Tik op het *Navigatie*-icoon op het kaartscherm, selecteer vervolgens het *Instellingen-icoon → Navigatie-instellingen*.

- Ga naar het hoofdmenu *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.  

:::info
Het standaardprofiel *Kaart bekijken* heeft geen navigatie-instellingen.  
:::


## Navigatietype {#navigation-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png)   ![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatie-instellingen iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>  

Navigatie is een belangrijk onderdeel van een reis, en het kiezen van *het juiste type* navigatie kan uw reis veel gemakkelijker maken. Het type navigatie dat u kiest, kan afhangen van hoe u reist en of u een internetverbinding heeft.  

- **Online navigatie**
    Het maakt voornamelijk gebruik van een speciaal routeringssysteem of website waarmee de OsmAnd-app een route kan uitzetten op basis van actuele informatie en andere factoren. U kunt meer lezen over het kiezen van de beste online route in het artikel [Online routering](../routing/online-routing.md). Dit navigatietype is alleen beschikbaar voor de *Android-versie* van de app.  

- **Offline navigatie**
Het vereist geen internettoegang en biedt een bredere selectie van [navigatietypes](../routing/osmand-routing.md#routing-types) die kunnen worden gebruikt om een route te berekenen. Onder hen zijn *fiets, boot, auto, te voet, ski*, en *rechte lijn*. Er zijn momenteel 13 basistypes van routering, evenals een extern [BRouter](../routing/brouter.md) routeringstype dat extra routeringsmogelijkheden biedt.  

Het navigatietype bepaalt welke regels worden gebruikt om routes te berekenen. Als u een specifiek type navigatie nodig heeft, kunt u **uw eigen aangepaste *XML*-routeringsbestand importeren**. Lees meer over routeringsregels op onze [GitHub-pagina](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). En er is een apart artikel over het XML-formaat en hoe u het kunt gebruiken, [Kaartweergavestijl](../../../technical/osmand-file-formats/osmand-rendering-style.md), dat u kan helpen bij het maken van een routebestand.  


## Routeparameters {#route-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatie-instellingen iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>  

**<Translate android="true" ids="route_parameters"/>** zijn instellingen die bepalen hoe de applicatie een route naar een bestemming berekent, rekening houdend met factoren zoals transporttype, routeringsprioriteiten, routecondities, routecomplexiteit en gebruikersvoorkeuren.  

Voor elk [profiel](../../personal/global-settings.md#default-profile), behalve *Kaart bekijken*, selecteert OsmAnd standaard het optimale [Navigatietype](#navigation-type) en de relevante [routeparameters](../routing/osmand-routing.md#routing-types). U kunt echter elk type kiezen dat u wilt en de parameters wijzigen afhankelijk van uw voorkeuren en de externe omstandigheden van de aanstaande reis.  

Alle routeparameters worden gedetailleerd beschreven in de overeenkomstige secties van de documentatie:  
*[Autoroutering (Vrachtwagen, Motor)](../routing/car-based-routing.md), [Fietsroutering (MTB)](../routing/bicycle-based-routing.md), [Bromfietsroutering](../routing/moped-routing.md), [Voetgangersroutering](../routing/pedestrian-routing.md), [Openbaar vervoer routering](../routing/public-transport-navigation.md), [Paardrijroutering](../routing/horse-routing.md), [Skiroutering](../routing/ski-routing.md), [Treinroutering](../routing/train-routing.md), [Bootroutering](../routing/boat-navigation.md), [Direct-naar-punt routering](../routing/direct-to-point-routing.md), [Rechte lijn routering](../routing/straight-line-routing.md), [Online routering](../routing/online-routing.md), [BRouter routering](../routing/brouter.md)*.  


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

De parameter **Routeberekening** wijzigt automatisch de berekende route wanneer u ervan afwijkt of in de tegenovergestelde richting rijdt. In beide gevallen helpt deze instelling u om uw rijrichting te behouden en uw bestemming te bereiken zonder tijd te verspillen met het handmatig zoeken naar een nieuwe route.  

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> bij afwijking*  | <Translate android="true" ids="recalculate_route_distance_promo"/>  | Als [Spraakinstructies](../guidance/voice-navigation.md#voice-settings) zijn ingeschakeld, meldt OsmAnd dat de route wordt herberekend. |
|  *Route herberekenen bij omgekeerde richting*  | Uw route wordt herberekend als u naar het startpunt beweegt.  |  Als deze instelling is uitgeschakeld, wordt beweging naar het startpunt niet als een afwijking van het pad beschouwd (zolang het de berekende route volgt).  |


### Ontwikkelaarsinstellingen {#development-settings}

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
| *Routeringstype* (*Android*) / *Routeringsalgoritme* (*iOS*) | <ul><li>**A*** 2-fase (*Android*) / **A*** (*iOS*) voegt een extra fase toe aan het standaardalgoritme om de kwaliteit van de berekende route te verbeteren. Deze optie kan nuttig zijn voor het vinden van routes in grote en complexe wegennetwerken, maar de routeberekening kan langer duren.</li><li>**A* klassiek** (*Android*) / **Snelweghiërarchieën** (*iOS*) optimaliseert de routeplanning door hoofdwegen en snelwegen te bevoordelen, waardoor het aantal bochten en kruispunten op de route wordt geminimaliseerd. Bijzonder effectief over lange afstanden.</li><li>**HH (Snelweghiërarchieën) x Java** (*Alleen Android*) is gebaseerd op de implementatie van hiërarchische datastructuren om het vinden van paden op een kaart te optimaliseren, rekening houdend met runtimebeperkingen en het verbruik van apparaatbronnen, en wordt gerealiseerd op het Java-platform.</li><li>**HH (Snelweghiërarchieën) x C++** (*Alleen Android*) is een algoritme dat de C++ programmeertaal gebruikt om efficiënt wegennetwerkgegevens te verwerken en optimale routes te bouwen met behulp van hiërarchische datastructuren. Het is geoptimaliseerd voor snelle verwerking van grote hoeveelheden gegevens en is bijzonder effectief voor het navigeren op kaarten met veel wegennetwerken.</li></ul> |  
| *GPX-benadering* (*Alleen Android*)  | <ul><li>**Routeringsgebaseerde** GPX-benadering in **C++ en Java** gebruikt routegegevens om GPS-tracks te benaderen met bestaande wegroutes, wat de nauwkeurigheid van de track verbetert en de trackgrootte verkleint.</li><li>**Geometriegebaseerde** GPX-benaderingen in **C++ en Java** werken op basis van geometrische principes om snel en nauwkeurig GPS-tracks te benaderen, waardoor een efficiënte verwerking van grote hoeveelheden gegevens mogelijk is.</li></ul> |
| *Automatische zoom* | <ul><li>**Discreet** stelt u in staat om in te zoomen op de kaart tot een specifiek detailniveau, gemeten in een paar discrete stappen.</li><li>**Vloeiend** zorgt voor een geleidelijke verandering van de kaartschaal met vloeiende animatie-effecten zonder schokken of sprongen.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*Alleen Android*)  | Gebruik [Live updates](../../personal/maps-resources.md#live-updates) tijdens het routeren. Let op, we raden aan deze optie alleen voor testdoeleinden te gebruiken.  |

<!--
| Parameter | Description | Note |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>*  | Allows using [Live updates](../../personal/maps-resources.md#live-updates) while routing. Note, that we recommend using this option for testing purposes only. |   
| *<Translate android="true" ids="use_two_phase_routing"/>*  | Adds an extra phase to the default (A*) algorithm to improve the quality of the calculated route. This option may be useful for finding routes in large and complex road networks, although it may take more time for route calculation. |  
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/>  |   
-->


## Spraakinstructies {#voice-prompts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Instellingen spraaknavigatie Android](@site/static/img/navigation/voice/voice_promt_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> knop* *(of <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Kies profiel → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Instellingen spraaknavigatie iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

Het eerste deel van het artikel *[Spraakinstructies / Meldingen](./voice-navigation.md)* beschrijft in detail hoe u spraakinstructies kunt instellen.  

Audio-instructies tijdens de navigatie helpen u als bestuurder of voetganger om uw bestemming te bereiken tijdens het [navigeren van een geselecteerde route](../setup/route-navigation.md). Ze bevatten informatie over bochten, rijrichtingen, verkeersborden, afstanden tot uw bestemming en andere factoren die uw navigatie kunnen beïnvloeden.  

Als u een track als bestemmingspunt selecteert, moet u de optie [Aan de wegen koppelen](../setup/gpx-navigation.md#attach-to-the-roads) gebruiken om de spraakinstructies correct te laten werken.

*Spraakinstructies* stellen u in staat om u op de weg te concentreren en niet afgeleid te worden door de kaart of het navigatieapparaat. Ze verbeteren ook de rijveiligheid, verkorten de tijd die nodig is om op onbekend terrein te navigeren en kunnen nuttig zijn voor verschillende [soorten routes](../routing/osmand-routing.md#routing-types).

In de sectie **Aankondigen** kunt u kiezen welke soorten meldingen moeten worden afgespeeld of weergegeven tijdens de navigatie:

- **Stap-voor-stap aanwijzingen** (alleen Android) – stelt u in staat om standaard navigatie-instructies zoals *“Sla linksaf”*, *“Sla rechtsaf”* of *“Over 200 meter…”* in- of uit te schakelen. Wanneer de optie is uitgeschakeld, worden er geen aankondigingen gegeven voor bochten en straatnamen, terwijl meldingen voor wegpunten, gebruikerspunten en routegebeurtenissen actief blijven. Deze modus is bedoeld voor activiteiten zoals raften, wandelen of fietsen langs vooropgenomen tracks, wanneer alleen waarschuwingen voor handmatig toegevoegde wegpunten nodig zijn.
- **Straatnamen(TTS)** – kondigt de namen van straten langs uw route aan.
- **Uitritnummer** – kondigt het uitritnummer aan bij het rijden op autosnelwegen.
- **Verkeerswaarschuwingen** – geeft waarschuwingen over belangrijke weggebeurtenissen zoals files of beperkingen.
- **Voetgangersoversteekplaatsen** – waarschuwt u wanneer u voetgangersoversteekplaatsen nadert.
- **[Flitspalen](https://osmand.net/docs/user/navigation/guidance/voice-navigation#speed-cameras)**  – waarschuwt voor locaties van flitspalen (waar wettelijk toegestaan).
- **Tunnels** – informeert u wanneer u een tunnel binnengaat.


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

De navigatie-instelling **Schermwaarschuwing** activeert de [**Waarschuwingen Widget**](../../widgets/nav-widgets.md#alert-widget). *Details:*

- Wanneer u een van de ondersteunde obstakels op de weg nadert, verschijnen er meldingen in de linkerbenedenhoek van de kaart.
- Als u de [*spraak- en tekstinstructies*](../../navigation/guidance/voice-navigation.md) configureert die beschikbaar zijn in de OsmAnd-app, zult u een comfortabelere en veiligere reis hebben.
- Het uiterlijk en de timing van de aanwijzingen zijn afhankelijk van uw snelheidsinstellingen. U kunt deze vinden [in het artikel](../../../technical/algorithms/voice-prompt-triggering.md).  
- Het gedrag van *Schermwaarschuwingen* wordt ook beïnvloed door de instelling [Toon punten langs de route](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route).

U kunt ***selecteren welke waarschuwingen*** u op het app-scherm wilt zien tijdens het navigeren:

- **Snelheidslimiet** ([OSM Wiki info](https://wiki.openstreetmap.org/wiki/Speed_limits)). In de instelling Schermwaarschuwingen wordt de *Snelheidslimiet* alleen op het scherm weergegeven als *Verkeerswaarschuwingen* is ingeschakeld. Als u snelheidslimieten wilt zien tijdens de navigatie zonder andere waarschuwingen, gebruik dan de [widget](../../widgets/nav-widgets.md#speed-limit).
- **Verkeerswaarschuwingen** ([OSM Wiki info](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). Aanvullende informatie is te vinden in het artikel [Kaartscherm tijdens navigatie](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings).
- **Voetgangersoversteekplaatsen** ([OSM Wiki info](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **Flitspalen** ([OSM Wiki info](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). Voor meer informatie over de instelling Flitspalen in OsmAnd, lees [Waarschuwingstypes](../../widgets/nav-widgets.md#alert-types) en het artikel *Algemene instellingen*, sectie [Juridisch](../../personal/global-settings.md#legal).
- **Tunnels** ([OSM Wiki info](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
De soorten waarschuwingen hebben een verschillend visueel uiterlijk, dat afhangt van de reisregio. OsmAnd streeft er niet naar om 100% identieke verkeersborden te presenteren, maar wijst op enkele overeenkomsten.  
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

De **kaart wordt tijdens de navigatie gebruikt** om uw locatie te bepalen, uw route te plannen en oriëntatie op het terrein. Tijdens de navigatie kunt u de kaart bekijken met *automatisch centreren*, deze verplaatsen en *in- en uitzoomen* om het vereiste gebied te zien. De kaart kan ook markeringen weergeven die nuttige punten, routes, weersomstandigheden, verkeersborden en andere objecten aangeven om u te helpen navigeren. De kaart kan in *real-time* worden bijgewerkt en toont *actuele informatie* die de routeplanning kan beïnvloeden.

U kunt leren hoe het gedrag van de kaart verandert tijdens de navigatie in het artikel [Kaartscherm tijdens navigatie](../guidance/map-during-navigation.md).  

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

Met de instelling **Routelijn aanpassen** kunt u het uiterlijk van de routelijn kiezen die tijdens de navigatie op de kaart zichtbaar zal zijn. U kunt de *kleur*, de *breedte van de lijn* en de weergave van de *afslagpijlen* erop selecteren. Voor elk profiel kunt u een andere lijnweergave kiezen. Al deze parameters worden gedetailleerd beschreven in het artikel *Kaartscherm tijdens navigatie* in de sectie [Uiterlijk routelijn](../../navigation/guidance/map-during-navigation.md#route-line-appearance).


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

Om ervoor te zorgen dat OsmAnd de meest optimale route berekent, is het cruciaal om de parameters van uw voertuig te configureren - inclusief de snelheid, afmetingen, gewicht en brandstoftype - waardoor de app de reistijd nauwkeurig kan inschatten, wegbeperkingen kan vermijden en het brandstofverbruik kan bijhouden, zoals uitgelegd in onze volledige gids over [Voertuigparameters](./vehicle-parameters.md).


## Gedetailleerde trackbegeleiding {#detailed-track-guidance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Aan de wegen koppelen 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png)    ![Navigatie-instellingen Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *Gedetailleerde trackbegeleiding*

![Navigatie-instellingen](@site/static/img/navigation/detailed_track_guidance_1_ios.png)   ![Navigatie-instellingen](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

De functie **Gedetailleerde trackbegeleiding** verbetert de nauwkeurigheid van de routenavigatie bij het gebruik van **op tracks gebaseerde routes**. Wanneer u een track als bestemming selecteert, kunt u de instelling [Aan de wegen koppelen](../setup/gpx-navigation.md#attach-to-the-roads) inschakelen vanuit het menu [Track volgen](../setup/gpx-navigation.md#follow-track-options). Dit zorgt ervoor dat de track wordt uitgelijnd met bestaande wegen, zodat de navigatie precieze instructies geeft op rotondes, bochten, snelheidslimieten, rijstroken en straatnamen voor de wegen.

Er zijn twee opties voor het gebruik van *Gedetailleerde trackbegeleiding*:

- **<Translate android="true" ids="ask_every_time"/>** (*standaardinstellingen*) – De optie *Aan de wegen koppelen* verschijnt in de sectie [Routedetails](../setup/route-details.md) telkens wanneer een op een track gebaseerde route wordt berekend. Hiermee kunt u beslissen of u wegkoppeling wilt toepassen voor elke navigatiesessie.

- **<Translate android="true" ids="shared_string_always"/>** – Het proces van wegkoppeling wordt automatisch toegepast voor elke *navigatie per spoor*-route zonder handmatige bevestiging.

Voor meer informatie over het gebruik van op tracks gebaseerde navigatie, bezoek [Navigatie per spoor](../setup/gpx-navigation.md).


## Gerelateerde artikelen {#related-articles}

- [Routeparameters](../routing/osmand-routing.md#routing-types)
- [Routevoorbereiding](../setup/route-navigation.md)
- [Navigatie per spoor](../setup/gpx-navigation.md)
- [Navigatie op basis van markeringen](../setup/markers-navigation.md)
- [Routedetails](../setup/route-details.md)
- [Kaartscherm tijdens navigatie](./map-during-navigation.md)
- [Spraakinstructies / Meldingen](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)