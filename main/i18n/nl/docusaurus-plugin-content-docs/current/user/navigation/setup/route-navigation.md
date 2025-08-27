---
source-hash: 5614ff96c05b150dc149ccfc7296cdeb953b69993517dcf326e81979e07d4a0f
sidebar_position: 1
title: Routevoorbereiding
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

De functie **Routevoorbereiding** in OsmAnd biedt stapsgewijze navigatiebegeleiding voor verschillende [routeringstypen](./../routing/osmand-routing.md#routing-types), waaronder [autorijden](./../routing/car-based-routing.md), [wandelen](./../routing/pedestrian-routing.md), fietsen, [paardrijden](./../routing/horse-routing.md) en [skiën](./../routing/ski-routing.md). Gebruikers kunnen navigatie-instellingen aanpassen, bestemmingen toevoegen en routes optimaliseren voor efficiëntie.

:::tip

- **Offline navigatie** is standaard ingeschakeld. U kunt echter ook [online routeringsengines](./../routing/online-routing.md) gebruiken.

- **OsmAnd vereist toestemming** om toegang te krijgen tot [nauwkeurige locatie](../../start-with/first-steps.md#permission-to-access-the-location) voor nauwkeurige navigatie. Schakel dit indien nodig in de apparaatinstellingen in.

:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Navigatiescherm Android 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png) ![Navigatiescherm Android 3](@site/static/img/navigation/route/navigation_by_route_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatiescherm iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png) ![Navigatiescherm iOS 3](@site/static/img/navigation/route/navigation_by_route_ios_3.png)

</TabItem>

</Tabs>


## Bestemmingen instellen {#set-destinations}

**Stap 1: Kaarten downloaden.**

Voordat u offline navigatie gebruikt, moet u ervoor zorgen dat de vereiste [kaarten zijn gedownload](../../start-with/download-maps.md). Ga naar *Menu → Kaarten & Middelen → Kaarten downloaden* om kaarten voor uw regio te installeren.

**Stap 2: Navigatieprofielen configureren.**

[Configureer de profielen](../../personal/profiles.md) die u wilt gebruiken:

- Stel [voertuigparameters in](../guidance/navigation-settings.md#size-parameters) (*belangrijk voor vrachtwagenchauffeurs*), selecteer het [motortype](../guidance/navigation-settings.md#fuel-used-by-motor) (*optioneel*).

- Configureer [uiterlijk van de routelijn](../guidance/map-during-navigation#route-line-appearance) (*optioneel*, beschikbaar voor Pro-gebruikers ([Android](../../purchases/android.md#pro-features-pro-features) / [iOS](../../purchases/ios.md#pro-features-pro-features))).

- Configureer [gesproken aanwijzingen](../guidance/voice-navigation.md).

**Stap 3: Bestemmingen instellen.**

1. Open het [*Navigatiemenu*](#navigation-menu):

    - Geef het [bestemmingspunt op](#set-target-point).
    - Wacht tot de route is berekend. Daarna kunt u aanvullende informatie over uw route verkrijgen in de sectie *[Details](./route-details.md#overview)*.
    - U kunt schakelen tussen verschillende [routeringstypen](./../routing/osmand-routing.md#routing-types) (profielen) om het beste resultaat te krijgen.
    - Voeg [tussenbestemmingen](#intermediate-destinations) toe (optioneel).
    - U kunt ook het vertrekpunt wijzigen van de [huidige locatie](../../map/interact-with-map#my-location-and-zoom) naar de gewenste locatie.

2. Aanvullende [*Navigatie-instellingen*](#settings) kunnen worden gebruikt, afhankelijk van uw doeleinden (u kunt configureren welke wegen u wilt vermijden of verkiezen, brandstof besparen of de snelste route kiezen, enz.).

3. [Start](#start--stop-navigation) navigatie of [simuleer eerst navigatie](#simulated-navigation) (met deze functie kunt u uw route testen voordat u er daadwerkelijk langs reist).

4. Onderweg kunt u de navigatie [*Pauzeren/Hervatten*](#pause--resume-navigation) en [*Stoppen*](#start--stop-navigation).


:::note

**Route kan niet worden opgebouwd wanneer *[Online kaart](../../map/raster-maps.md#select-raster-maps)* is geselecteerd als kaartbron.**

:::


### Navigatiemenu {#navigation-menu}

Er zijn 3 manieren om het navigatiemenu te bereiken:

- De [*Navigatieknop*](../../widgets/map-buttons.md#directions) op het kaartenoverzicht.  
- *Richting naar/van* in een [*kaartcontextmenu*](../../map/map-context-menu.md#directions-to--from).  
- Navigatiesectie in het [*Hoofdmenu*](../../start-with/main-menu.md) *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatiemenu Android 1](@site/static/img/navigation/route/navigation_by_route_menu_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatiemenu iOS 1](@site/static/img/navigation/route/navigation_by_route_menu_ios_2.png)  

</TabItem>

</Tabs>

- **<Translate android="true" ids="shared_string_my_location"/>** – Startlocatie instellen (standaard: [*Mijn huidige locatie*](../../map/interact-with-map.md#my-location-and-zoom)).
- **<Translate android="true" ids="add_destination_point"/>** - Gebruik om [uw bestemmingspunt in te stellen](#set-target-point).
- **Toevoegen** &nbsp;&#43; - Voeg [tussenpunten](../../widgets/nav-widgets.md#distance-to-intermediate) langs de route in.
- **Wisselen** &nbsp;&#8595;&#8593; - Keer de *Start*- en *Eind*-punten om.
- **Geluidsknop** - Dempen van de [gesproken aanwijzingen](../guidance/voice-navigation.md).
- **<Translate android="true" ids="shared_string_settings"/>** – [Pas](#settings) routevoorkeuren en wegbeperkingen aan.

Stel uw bestemming in het *Navigatiemenu* in met behulp van:

- Speciale favoriete punten [Thuis / Werk](#use-home-or-work-points).
- Vorige route of [Geschiedenis](../../personal/global-settings.md#history).
- De knop **Annuleren** leidt terug naar het hoofdscherm.
- [Startknop](#start--stop-navigation) start de navigatie nadat de routeberekening is voltooid.
  
### Startpunt selecteren {#select-starting-point}

Als startpunt kunt u uw huidige locatie kiezen, de locatie van een [Favoriet punt](../../map/point-layers-on-map.md#favorites), een punt op de kaart selecteren of [Zoeken](../../search/index.md) gebruiken. U kunt ook een startpunt instellen in het [kaartcontextmenu](../../map/map-context-menu.md) door de functie [Route vanaf](../../map/map-context-menu.md#directions-to--from) te selecteren.  


### Doelpunt instellen {#set-target-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatiemenu Android 2](@site/static/img/navigation/route/navigation_by_route_menu_andr_2.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Navigatiemenu iOS 2](@site/static/img/navigation/route/navigation_by_route_menu_ios_1.png)

</TabItem>

</Tabs>

Het belangrijkste om navigatie te starten is het bepalen van uw bestemming. Het bestemmingspunt kan worden gevonden met behulp van een [*Zoekfunctie*](../../search/index.md#overview), of eenvoudigweg op een kaart. U kunt ook een doelpunt instellen in het [*Navigatiemenu*](#navigation-menu):  

- **<Translate android="true" ids="search_button"/>** - Opent [het zoekmenu](../../search/index.md).
- **<Translate android="true" ids="shared_string_address"/>** - Opent [adreszoekmenu](../../search/search-address.md).
- **<Translate android="true" ids="shared_string_select_on_map"/>** - Opent de kaart om een bestemmingspunt te kiezen door op de kaart te tikken.
- **<Translate android="true" ids="shared_string_favorites"/>** - Maakt het mogelijk om [Favoriet](../../personal/favorites.md) als bestemming te gebruiken.
- **<Translate android="true" ids="shared_string_markers"/>** - Maakt het mogelijk om een van de [Kaartmarkeringen](../../personal/markers.md) als bestemmingspunt te kiezen.
- **Startpunt en bestemming wisselen** &nbsp;&#8595;&#8593; - Maakt het mogelijk om *Start*- en *Eind*-punten te wisselen.


### Tussenbestemmingen {#intermediate-destinations}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie tussenliggend Android 1](@site/static/img/navigation/route/navigation_interpoints_1_andr.png) ![Navigatie tussenliggend Android 2](@site/static/img/navigation/route/navigation_interpoints_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatie tussenliggend iOS 1](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_1.png) ![Navigatie tussenliggend iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_2.png)

</TabItem>

</Tabs>

- **&nbsp;&#x1F589;** - maakt het mogelijk om de lijst met bestemmingspunten te openen om wijzigingen aan te brengen.
- **&nbsp;&#8592;** - gaat naar het navigatiemenu.
- **&nbsp;&#10005;** - maakt het mogelijk om een bestemmingspunt uit de puntenlijst te verwijderen.
- **&nbsp;&#61;** - maakt het mogelijk om de volgorde van punten in de puntenlijst te wijzigen.
- *&nbsp;&#43; Toevoegen* - opent het contextmenu *Tussenliggend toevoegen*.
- *&nbsp;&#9776; Alles wissen* - maakt het mogelijk om alle tussenliggende punten te wissen.

Als u **Sorteren** (*Android*) of **Opties** (*iOS*) kiest in de lijst met bestemmingen, krijgt u speciale opties om de volgorde van de navigatie naar tussenliggende punten aan te passen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie tussenliggend Android 3](@site/static/img/navigation/route/navigation_interpoints_android_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatie tussenliggend iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_3.png)

</TabItem>

</Tabs>

In dit menu vindt u aanvullende opties voor het beheren van de bestemmingspunten:

- **<Translate android="true" ids="intermediate_items_sort_by_distance"/>** - OsmAnd biedt de kortste route tussen al uw bestemmingen, maar de volgorde van het bezoek kan worden bewerkt. Het startpunt en de eindbestemming worden niet gewijzigd.

- **<Translate android="true" ids="switch_start_finish"/>** - Het startpunt en de eindbestemming worden verwisseld.

- **<Translate android="true" ids="reverse_all_points"/>** (*alleen Android*) - Alle punten worden in omgekeerde richting geplaatst.

- **<Translate android="true" ids="add_intermediate_point"/> / <Translate ios="true" ids="add_waypoint_short"/>**. U kunt tussenbestemmingen toevoegen vanuit dit menu.

- **<Translate android="true" ids="clear_all_intermediates"/>**. Alle tussenbestemmingen worden van de kaart verwijderd.

### Thuis- of werkpunten gebruiken {#use-home-or-work-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Speciale favorieten Android](@site/static/img/navigation/route/special_favorite_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Speciale favorieten iOS](@site/static/img/navigation/route/special_favorite_ios.png)

</TabItem>

</Tabs>

De tabbladen **Thuis** en **Werk** (of [Speciale punten](../../personal/favorites.md#special-favorites-personal) voor Favorieten) kunnen worden gebruikt om snel bestemmingspunten in te stellen in het navigatiemenu. Als u de adressen van de Speciale favorieten niet hebt ingevoerd, blijven deze cellen leeg. Als u op dit veld tikt, wordt u gevraagd deze POI's aan te maken.  


### Geschiedenis van eerdere routes {#history-of-previous-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Vorige route Android](@site/static/img/navigation/route/previous_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Vorige route iOS](@site/static/img/navigation/route/previous_ios.png)  

</TabItem>

</Tabs>

Als de registratie van de [Navigatiegeschiedenis](../../personal/global-settings.md#history) is ingeschakeld, kunt u de vorige routes of bestemmingen uit de geschiedenislijst gebruiken voor navigatie. Deze optie kan handig zijn voor snelle toegang tot veelgebruikte routes. Items in de geschiedenislijst worden gesorteerd op meest recent gebruik, beginnend met de nieuwste.  

:::note

- Wanneer het [loggen van geschiedenisgegevens](../../personal/global-settings.md#history-options) is uitgeschakeld, wordt u niet gevraagd om eerdere routes te gebruiken voor navigatie.
- U kunt sommige of alle geschiedenisrecords over uw eerdere routes verwijderen. Dit kan worden gedaan op het tabblad *[Navigatiegeschiedenis](../../personal/global-settings.md#history-options)* van de optie Geschiedenis (*Menu → Instellingen → OsmAnd-instellingen → Geschiedenis*).

:::


## Navigatie starten / stoppen {#start--stop-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatiescherm start Android](@site/static/img/navigation/route/navigation_start_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatiescherm iOS](@site/static/img/navigation/route/navigation_start_ios.png)

</TabItem>

</Tabs>

Zodra start- en eindpunten zijn geselecteerd, maakt de app een route tussen deze punten met behulp van een actief profiel. [Het app-profiel](../../personal/profiles.md) en de [widgets](../../widgets/index.md) worden pas gewisseld als u op de *Start*-knop van de navigatie tikt.

- **Tik op Start** om de navigatie te starten.
- [Pauzeer](#pause--resume-navigation) de navigatie wanneer u een pauze neemt. (*Alleen Android*)
- **Stop** de navigatie door **Stop** (*Android*) of **Annuleren** (*iOS*) te selecteren.

:::note Routegegevens
Aanvullende informatie over de gemaakte route, zoals hoogte, afslag-voor-afslag instructies, analysehulpmiddel en andere, is te vinden in de sectie [**Details**](../setup/route-details.md).
:::

### Routeherberekening {#route-recalculation}

De route kan automatisch opnieuw worden berekend in geval van afwijking. U kunt de parameters van de herberekening wijzigen in de [Navigatie-instellingen](../guidance/navigation-settings.md#recalculate-route). U kunt ook de melding over routeherberekening uitschakelen in de instellingen van [Gesproken aanwijzingen](../guidance/voice-navigation.md#voice-settings).

### Navigatie pauzeren / hervatten {#pause--resume-navigation}

<InfoAndroidOnly/>

Als u even wilt stoppen voor een pauze en korte tijd van de route wilt afwijken, kunt u de functie *Navigatie pauzeren/hervatten* gebruiken om gesproken aanwijzingen te pauzeren en het herberekenen van de route te stoppen.  
Deze optie is beschikbaar in de Android-versie van de app in de *[Meldingslijst](../guidance/voice-navigation.md#text-notifications)* of via het *[Snelactiemenu](../../widgets/quick-action.md)*.

![Meldingsscherm Android](@site/static/img/navigation/route/navigation_pause_android.png)

Om de navigatie te hervatten:

- Gebruik het bericht van OsmAnd in de notificatiebalk.
- Gebruik het *Snelactiemenu* of het dialoogvenster dat verschijnt wanneer u op de *[Navigatieknop](../../widgets/map-buttons.md#directions)* tikt (zie schermafbeelding).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie hervatten Android](@site/static/img/navigation/route/navigation_menu_start_pause_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatie hervatten iOS](@site/static/img/navigation/route/navigation_menu_start_pause_ios_1.png)

</TabItem>

</Tabs>

:::note
Wanneer u **op de navigatieknop tikt** terwijl u onderweg bent, stopt de navigatie **niet en blijven gesproken aanwijzingen hoorbaar**, hoewel de voorgestelde opties Hervatten of Start verwarrend kunnen zijn.
:::


### Tips voor energiebesparing {#power-saving-tips}

Navigatie maakt gebruik van GPS en achtergrondverwerking, wat de batterij kan leegtrekken. Om het energieverbruik te optimaliseren:

- **Schakel het scherm uit** terwijl u vertrouwt op gesproken aanwijzingen.  
- Schakel [Schermbediening](../guidance/voice-navigation.md#screen-control) (*alleen Android*) in via *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,turn_screen_on"/>*.


## Instellingen {#settings}

![Routevoorbereiding Android](@site/static/img/navigation/route/navigation_menu_settings_andr.png)


### Navigatie-instellingen {#navigation-settings}

Volg een van de onderstaande stappen om toegang te krijgen tot de navigatie-instellingen:

- *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,app_mode_car,routing_settings_2"/>*.  
- *Navigatieknop → <Translate android="true" ids="shared_string_settings,routing_settings_2"/>*.  
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
Er zijn geen navigatie-instellingen in het profiel *Kaart bekijken*.  
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profielen Navigatie-instellingen iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

- &nbsp;**<Translate android="true" ids="nav_type_hint"/>** bepaalt hoe routes worden berekend. Uw fietsprofiel heeft bijvoorbeeld een navigatietype Fietsen, dat de routeringsregels instelt. U kunt deze regels (als routing.xml-bestand) importeren in OsmAnd. Meer over routering kunt u lezen op onze [GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing) pagina.&nbsp;  

- &nbsp;**<Translate android="true" ids="route_parameters"/>** bepaalt welke parameters tijdens de routering worden gebruikt (dit is het proces van het selecteren van een route voor navigatie).

Lees meer over routeparameters voor het corresponderende navigatietype.

Hoe u [routeringstype](../routing/osmand-routing.md#routing-types) en [routeparameters](../guidance/navigation-settings.md#route-parameters) configureert, kunt u lezen in het artikel [Navigatie-instellingen](../guidance/navigation-settings.md) of in artikelen over specifieke routeringstypen in de sectie [Routeparameters](../routing/osmand-routing.md#routing-types).  


### Gesimuleerde navigatie {#simulated-navigation}

De tool **Gesimuleerde navigatie** stelt u in staat om een route te bekijken voordat u gaat reizen. Dit helpt bij het plannen, vertrouwd raken en testen van het navigatiesysteem van OsmAnd.

#### Simulatie starten / stoppen {#start--stop-simulation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Simuleer navigatie Android](@site/static/img/navigation/route/simulate_navigation_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Simuleer navigatie iOS](@site/static/img/navigation/route/simulate_navigation_ios_1.png)

</TabItem>

</Tabs>

Wanneer een navigatieroute is opgebouwd, kunt u de navigatie simuleren met de optie **<Translate android="true" ids="simulate_navigation"/>**.  

- Ga in het [Navigatiemenu](#navigation-menu) naar *<Translate android="true" ids="shared_string_settings,simulate_navigation"/>*.
- Schakel de schakelaar om de optie in te schakelen.
- Tik op de [Start](#start--stop-navigation) navigatieknop om de simulatie te starten.
- Om de navigatiesimulatie te [Stoppen](#start--stop-navigation), tikt u op **Stop** (*Android*) of **Annuleren** (*iOS*).


#### Snelheidsmodus {#speed-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Simuleer navigatie Android](@site/static/img/navigation/route/simulate_navigation_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Simuleer navigatie iOS](@site/static/img/navigation/route/simulate_navigation_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="simulation_preview_mode_title"/>** - Versnelt de simulatie op rechte paden, vertraagt bij kruispunten.

- **<Translate android="true" ids="simulation_constant_mode_title"/>** - Draait met een vaste snelheid.
- **<Translate android="true" ids="simulation_real_mode_title"/>**:
    - **Op rechte weggedeelten** zal de snelheid dicht bij de maximaal toegestane snelheid liggen.
    - **Bij kruispunten** zal de simulator de snelheid verminderen.
    - **Aanvullende straffen** worden toegepast bij verkeerslichten, stopborden en andere soortgelijke obstakels.


## Kaarten ontbreken of niet gesynchroniseerd {#maps-missing-or-not-synchronized}

Om een route te bouwen moeten alle **benodigde kaarten** gedownload zijn en dezelfde releasedatum hebben. Houd er rekening mee dat in sommige situaties de melding van ontbrekende kaarten verborgen kan zijn in het routevoorbereidingsmenu. Als u het navigatiemenu omhoog trekt, ziet u mogelijke redenen waarom uw route niet kon worden berekend.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bericht geen kaarten bij het bouwen van navigatie Android 5](@site/static/img/navigation/route/navigation_by_route_no_maps_5.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Bericht geen kaarten bij het bouwen van navigatie iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_1_ios.png)
</TabItem>

</Tabs>

#### Vereiste kaarten {#required-maps}

In het dialoogvenster met vereiste kaarten ziet u suggesties voor kaarten die moeten worden gedownload of bijgewerkt. De lijst met gebruikte kaarten is mogelijk niet nauwkeurig, omdat deze een zeer eenvoudige route berekent. Om de precieze lijst met kaarten te krijgen, kunt u op **Online berekenen** klikken. Als u **Gedownloade kaarten gebruiken** selecteert, zal de routeberekening proberen reeds gedownloade kaarten te gebruiken en de waarschuwingsmelding overslaan.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bericht geen kaarten bij het bouwen van navigatie Android](@site/static/img/navigation/route/navigation_by_route_no_maps_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Bericht geen kaarten bij het bouwen van navigatie iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_2_ios.png)

</TabItem>

</Tabs>


## Veelvoorkomende problemen en oplossingen {#common-issues-and-solutions}

1. [De mogelijke oorzaken van trage routeberekening.](../../troubleshooting/navigation.md#route-calculation-is-slow)
2. [Wat te doen als de routelengte meer dan 250 kilometer bedraagt.](../../troubleshooting/navigation.md#how-to-calculate-routes-longer-than-250km)
3. [Wat te doen als de voorgestelde route onjuist lijkt.](../../troubleshooting/navigation.md#the-calculated-route-does-not-seem-correct)
4. [Hoe de situatie op te lossen wanneer navigatie niet mogelijk is vanwege het ontbreken van de benodigde kaarten.](#maps-missing-or-not-synchronized)

Voor meer stappen voor probleemoplossing, zie [navigatieproblemen](../../troubleshooting/navigation.md).


## Gerelateerde artikelen {#related-articles}

- [Routeparameters](../routing/osmand-routing.md#routing-types)
- [Routegegevens](./route-details.md)
- [Navigatie via spoor](./gpx-navigation.md)
- [Navigatie via markeringen](./markers-navigation.md)
- [Navigatie-instellingen](../guidance/navigation-settings.md)
- [Kaartscherm tijdens navigatie](../guidance/map-during-navigation.md)
- [Gesproken aanwijzingen / Meldingen](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Laatst bijgewerkt: februari 2025*