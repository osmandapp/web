---
source-hash: d919292bddbc80c1a1efb89edfade660870a675d2742aed4707122301de32aa4
sidebar_position: 4
title:  Navigatiewidgets
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overzicht {#overview}

Navigatiewidgets worden ingeschakeld tijdens de navigatie om informatie weer te geven zoals afstand, aankomst- of resterende tijd, volgende afslagen, peiling, huidige straatnaam, rijstrookinformatie, maximale snelheid, naderingswaarschuwingen, POI's en routepunten.

![Navigational widgets all](@site/static/img/widgets/navigational_widgets_all.png)


## Actieve en Passieve Navigatie {#active-and-passive-navigation}

Navigatiewidgets in OsmAnd zijn ontworpen om zowel de **actieve** als **passieve** navigatiemodi te verbeteren. Deze widgets bieden waardevolle informatie zoals routeaanwijzingen, wegdetails en snelheidslimieten, afhankelijk van het geselecteerde **navigatieprofiel**.  

#### Actieve Navigatie {#active-navigation}

- **Vereisten:**  
  - Stel een **bestemming** in.  
  - Bereken de **route** met de functie *Routebeschrijving*.  
  - **Start** de navigatie (spraakbegeleiding is optioneel).
  - Alleen beschikbaar wanneer u zich langs de route verplaatst.

- **Ondersteunde widgets:**  
  - Alle **navigatiewidgets** zijn beschikbaar.  

- **Belangrijkste Voordelen:**  
  - Biedt **afslag-voor-afslag instructies**, **rijstrookbegeleiding** en **ETA**.  
  - Zorgt voor nauwkeurige en dynamische updates tijdens de reis.  

#### Passieve Navigatie {#passive-navigation}

- **Hoe het werkt:**  
  - Er is geen bestemming nodig.  
  - Werkt automatisch wanneer u een **navigatieprofiel** selecteert (bijv. *Autorijden*, *Fietsen*).  

- **Functionaliteit:**  
  - Probeert de weg die u volgt te bepalen met behulp van GPS-gegevens.  
  - Toont **basis-weginformatie**, zoals [straatnaam](#street-name), [rijstrookinformatie](#lanes), [maximale snelheid](#speed-limit).

- **Beperkingen:**  
  - Sommige geavanceerde functies werken mogelijk niet correct zonder een ingestelde bestemming.  
  - De verstrekte informatie is mogelijk niet altijd **precies**, vooral op complexe wegennetwerken.

> **OPMERKING.** *Houd er rekening mee dat het **Kaart bekijken**-profiel in geen van beide modi navigatiewidgets ondersteunt. Schakel over naar een relevant **navigatieprofiel** om deze functies in te schakelen.*


<!--
Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are unavailable in the **Browse Map** profile.

**Active** navigation requires setting a destination, calculating the route (Directions), and starting navigation (Go), not necessarily with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require a destination point set and works automatically once you switch to any navigational profile, for example, 'Driving'. In that case, the application will try to determine which road you are following and display extra information about it i.e. name, lane info, max speed available. Please note that this approach is unreliable and doesn't support all features.
-->

## Hoogtewidget {#elevation-widget}

<InfoAndroidOnly/>  

:::note
  
<ProFeature/>  Deze widget kunt u alleen gebruiken met de Pro-functie  <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro-abonnees</a>.

:::

De Hoogtewidget toont een grafiek met de hoogte en helling van uw navigatieroute en uw huidige locatie op deze grafiek met de huidige hoogte en helling. De grafiek wordt uitgezet op twee assen. De X-as is de afstand van uw route. De Y-as is de hoogte, de waarde hangt af van het reliëf, en de helling wordt weergegeven als een percentage.  

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Elevation widget](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### Interacties met de Grafiek {#interactions-with-the-graph}

- *In-/uitzoomen*. Standaard toont de grafiek de route vanaf de huidige locatie tot 10 km vooruit. U kunt [beweging met twee vingers](../map/interact-with-map.md#gestures) gebruiken om in en uit te zoomen voor een meer gedetailleerde weergave van hoogteveranderingen op uw route. U kunt de grafiek ook naar rechts verplaatsen, vooruit op de route, en achteruit naar de huidige locatie.  
- *Een punt op de grafiek plaatsen*. Als u de hoogte- en gradenwaarde op een bepaald punt voor u op uw route wilt zien, kunt u overal op de grafiek tikken en er verschijnt een aanwijzer met de waarden.  


#### Wat zit erin {#whats-in}

Wanneer u een route selecteert en op de **Start**-knop drukt, wordt de kaart geopend met uw huidige locatie, de route en de widget onderaan het scherm. Widget heeft de grafiek en informatie over *Stijgen*, *Dalen*, *Helling*, afstand, hoogte en hellingshoek. U kunt de *optimale schaal* selecteren en alle mogelijke obstakels op uw route zien.  

- Alle waarden worden aangegeven voor de hele route of alleen voor het geselecteerde interval door de grafiek te schalen.
- Lees over de [licentie voor de DEM-gegevens](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection) die door OsmAnd worden gebruikt om de hoogte te bepalen.

|  |
|:------------|
| ***Locatiepin*** |
| Uw ***Huidige Locatie*** op de grafiek omvat een locatiepictogram, hoogte en hellingspercentage. De rechterkant van de widget bevat de hoogste hoogte en helling, de gemiddelde waarde daarvan, en de laagste waarde op het geselecteerde deel van de route dat zichtbaar is in de grafiek. |
| ![point](@site/static/img/widgets/sch_1-1.png)|
| ***Aanvullende informatie*** |
| De rechterkant van de widget bevat gegevens over de hoogste hoogte en helling, de gemiddelde waarde voor beide, en de laagste hoogte en helling op het geselecteerde routegedeelte dat zichtbaar is in de grafiek. |
|  ![data](@site/static/img/widgets/sch_1-2.png)|
|De waarden ***Stijgen*** en ***Dalen*** zijn de som van de afstanden vanaf uw locatiepunt tot het einde van de zichtbare grafiek. Als er geen locatiepunt op de grafiek staat, is het de som van de gehele zichtbare grafiek op het scherm (dit kan gebeuren wanneer u de schaal wijzigt en de locatie buiten de grafiek valt).|
| **Stijgen** – toont de som van alle afstanden met toenemende hoogte vanaf uw locatiepunt tot het einde van de zichtbare grafiek of voor het geselecteerde deel van de route zonder het locatiepunt zichtbaar op het scherm. |
| ![uphill scheme](@site/static/img/widgets/sch_uphill_1.png) ![uphill scheme](@site/static/img/widgets/sch_uphill_2.png)|  
| **Dalen** – toont de som van alle afstanden met afnemende hoogte vanaf uw locatiepunt tot het einde van de zichtbare grafiek of voor het geselecteerde deel van de route zonder het locatiepunt zichtbaar op het scherm.|
| ![downhill scheme](@site/static/img/widgets/sch_downhill_1.png) ![downhill scheme](@site/static/img/widgets/sch_downhill_2.png)|  
|***Helling*** is de verhouding van het pad tot de horizontaal, waarbij nul horizontaliteit aangeeft en het aantal graden een hogere of steilere hellingsgraad aangeeft.|
| **Helling** – toont de maximale helling van de weg in procenten vanaf uw locatiepunt tot het einde van de zichtbare grafiek of voor het geselecteerde deel van de route zonder het locatiepunt zichtbaar op het scherm. |
|![grade scheme](@site/static/img/widgets/sch_grade_1.png) ![grade scheme](@site/static/img/widgets/sch_grade_2.png)|


## Peilingwidget   {#bearing-widget}
  
Peiling is de richting naar een doel buiten uw voertuig, zoals een bestemming of een vertrekpunt. Een peiling kan *Relatief* zijn (ten opzichte van uw koers) of *Magnetisch* (ten opzichte van het kompas). Bijvoorbeeld, een magnetische peiling van 180° is de richting naar het zuiden, en een relatieve peiling van 180° is recht achter u. De kardinale punten zijn de vier hoofdrichtingen van het kompas. Dit zijn Noord (*N* - 0° of 360°), Oost (*O* - 90°), Zuid (*Z* - 180°), en West (*W* - 270°).  

![Trip recording widget](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trip recording widget](@site/static/img/widgets/bearing_widget.png) ![Trip recording widget](@site/static/img/widgets/bearing_widget_1.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Trip recording widget](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="shared_string_bearing"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>  → Kies een paneel → Widget toevoegen →  <Translate ios="true" ids="shared_string_bearing"/>* |
| Lang indrukken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |
| Formaat | **Android:** U kunt het weergaveformaat voor hoekeenheden wijzigen: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
|  | **iOS:** U kunt het weergaveformaat voor hoekeenheden wijzigen: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |  


#### Hoe het werkt {#how-it-works}

Om de peiling weer te geven, moet een **doelpunt** worden geselecteerd. Als een **bestemming** (of het **eerste tussenpunt**, indien aanwezig) is geselecteerd voor navigatie, wordt dit als doelpunt gebruikt. Anders wordt de **bovenste geselecteerde markering** gebruikt.  

- [Relatieve peiling](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) is de hoek tussen uw voorwaartse bewegingsrichting en het doelpunt. De **voorwaartse bewegingsrichting** is ofwel de **richting van uw beweging** verkregen van de GPS-sensoren, of als u stilstaat, **waar u uw apparaat op richt** (d.w.z. de oriëntatie van uw apparaat volgens het magnetische kompas). Voorbeeld: Een object met een relatieve peiling van 0° bevindt zich recht voor u en een object met een relatieve peiling van 180° bevindt zich recht achter u. De **relatieve peiling** is de hoek tussen uw voorwaartse richting en het doelpunt.

- [Magnetische peiling](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) is de hoek met de klok mee (horizontaal) tussen het magnetische noorden en het doelpunt, waargenomen vanaf uw locatie. U moet deze magnetische kompaswaarde volgen om uw doel te bereiken. Voorbeeld: Als de **magnetische peiling** wordt weergegeven als 0° M, moet u zich strikt naar het magnetische noorden bewegen om het doelpunt te bereiken.

- [Ware peiling](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages) wordt uitgedrukt als de horizontale hoek tussen de geografische meridiaan en een lijn op aarde. Specifiek is **ware puntpeiling** de hoek gemeten in graden met de klok mee vanaf de Ware Noord-lijn. OsmAnd-software toont u de ware peiling en koers in onze gebruiksvriendelijke interface, waardoor het voor u gemakkelijk is om vroegtijdig de juiste beslissing te nemen.

### Navigatie langs de Loxodroom {#navigation-along-the-rhumb-line}

- **Relatieve peiling**. Als u een relatieve peiling van 0 graden aanhoudt en vooruit beweegt, komt u aan op het bestemmingspunt, maar niet via de kortste route ( [Loxodroom](https://en.wikipedia.org/wiki/Rhumb_line) ).
- **Magnetische peiling**. Als u het kompas op uw boot/voertuig uitlijnt met de waarde van de widget en vooruit vaart, komt u aan op uw bestemming, maar niet via de kortste route ( [Loxodroom](https://en.wikipedia.org/wiki/Rhumb_line) ).

<!--![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- By tapping: Changes between  Relative bearing or Magnetic bearing (with "M") -->


## Navigatiepunten {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

De widgetgroep *Navigatiepunt* toont de resterende afstand tot uw bestemming, het tussenpunt, de aankomsttijd bij het tussenpunt of de reistijd voor de berekende route, en de geschatte aankomsttijd.

### Route-informatie {#route-information}


![Destination widget](@site/static/img/widgets/route_information_widget.png)  

De widget *Route-informatie* biedt realtime gegevens over de lopende navigatieroute en een snelle manier [om een actieve route te beheren](../navigation/setup/route-navigation.md#start--stop-navigation). Het helpt om belangrijke routegegevens bij te houden en stelt u in staat de huidige navigatiesessie met minimale interactie te stoppen of te hervatten.

**Weergegeven informatie:**

- **Geschatte aankomsttijd (ETA)**. Toont de verwachte aankomsttijd op de eindbestemming.
- **Resterende reistijd**. Toont de geschatte resterende tijd om de bestemming te bereiken.
- **Afstand tot bestemming**. Geeft de totale resterende afstand tot de eindbestemming en afstanden tot tussenpunten aan.

**Instellingenmenu**:

- Selecteer een **Standaardweergave** om een van de volgende waarden prioriteit te geven: *Geschatte aankomsttijd*, *Resterende tijd*, *Afstand*.
- Selecteer in **Weergaveprioriteit** tussen *Bestemming eerst (standaard)* of *Tussenpunt eerst* om de meest relevante route-informatie prioriteit te geven.

> OPMERKING: De widget is alleen zichtbaar tijdens navigatie.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget toevoegen →<Translate android="true" ids="map_widget_route_information"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → Widget toevoegen  →Route information* |
| Door te tikken | Tik op de knop met pijl om het [Start/Stop Navigatiepaneel](../navigation/setup/route-navigation.md#start--stop-navigation) te openen |
| Lang indrukken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |
| Formaat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### Afstand tot Bestemming {#distance-to-destination}

![Destination widget](@site/static/img/widgets/destination_widget.png)  

De widget toont de resterende afstand tot het laatste bestemmingspunt bij het volgen van een berekende route.  

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| Door te tikken | Verplaatst de kaart naar het bestemmingspunt. |
| Lang indrukken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |

### Afstand tot Tussenpunt {#distance-to-intermediate}

![Intermediate destination widget](@site/static/img/widgets/intermediate_destination_widget.png)

De widget toont de afstand tot het eerste tussenpunt langs de berekende route. Na het passeren van tussenpunten wordt de ruimte bijgewerkt naar het volgende tussenpunt. Als er geen tussenpunten zijn, wordt de widget niet weergegeven.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| Door te tikken | **Eén tussenpunt** - verplaats de kaart naar het tussenpunt. <br /> **Twee of meer tussenpunten** - opent het menu Bestemmingenlijst. |
| Lang indrukken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |

### Tijd tot Tussenpunt {#time-to-intermediate}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Arrival time Time to go widget](@site/static/img/widgets/arrival_time_widget_android.png)  ![Arrival time Time to go widget](@site/static/img/widgets/time_to_go_widget_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Arrival time Time to go widget](@site/static/img/widgets/arrival_time_widget_ios.png)  ![Arrival time Time to go widget](@site/static/img/widgets/time_to_go_widget_ios.png)  

</TabItem>

</Tabs>  

De widget toont de *Aankomsttijd* of *Resterende tijd* tot het eerste tussenpunt. Tijdens de navigatie wordt de tijd constant bijgewerkt, en zodra een tussenpunt is gepasseerd, wordt de tijd bijgewerkt naar het volgende routepunt. Als u bijvoorbeeld de navigatie stopt, blijft de *Resterende tijd* ongewijzigd en is de *Aankomsttijd* gelijk aan de *Resterende tijd* plus de *Huidige Tijd*.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen →  <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| Door te tikken | Wisselt tussen *Aankomsttijd* en *Resterende tijd* en omgekeerd. |
| Lang indrukken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


### Tijd tot Bestemming {#time-to-destination}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Intermediate Arrival time Time widget](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Intermediate Arrival time Time widget](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

De widget toont de *Aankomsttijd* of *Resterende tijd* tot het laatste bestemmingspunt. De tijd wordt tijdens de navigatie constant bijgewerkt en is gelijk aan de routetijd vanaf uw huidige locatie.  

| | |
|:------------|:------------|
| Inschakelen |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_time_to_destination"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| Door te tikken | Wisselt tussen *Aankomsttijd* en *Resterende tijd* en omgekeerd. |
| Lang indrukken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |  


## Snelheidslimiet {#speed-limit}

![Speed limit widget](@site/static/img/widgets/speed_limit_widget_2.png)

De *Snelheidslimiet*-widget toont de huidige snelheidslimiet op basis van de kaartgegevens voor uw route.

- Gegevens zijn afkomstig van het [OpenStreetMap-project](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- Widget werkt in passieve en actieve navigatiemodi.
- Als er geen snelheidslimietgegevens beschikbaar zijn voor een specifieke weg of gebied, *zal de widget niet verschijnen*.

> OPMERKING: Zorg ervoor dat uw [kaarten up-to-date zijn](../personal/maps-resources.md#updates-menu) en dat u alle benodigde regionale gegevens hebt gedownload om toegang te krijgen tot de meest recente informatie over snelheidslimieten.

| |  |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_max_speed"/>* |
|  |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="map_widget_max_speed"/>* |
| Door te tikken | Geen wijzigingen |
| Lang indrukken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


## Routebegeleiding {#route-guidance}


![Next turns widget](@site/static/img/widgets/next_turns_widget.png)

Biedt realtime routebegeleiding, inclusief afstand tot de volgende afslag, wegnaam, huidige straatnaam en rijstrookinformatie. Widgets zijn actief tijdens de navigatie.

De *Routebegeleiding*-widgets bevatten informatie over:

- [Rijstroken](#lanes) - toont de huidige locatie van rijstroken en markeert degene waarop u moet rijden. (alleen voor _Boven-/Onderpanelen_)
- [Volgende afslag](#next-turn) - de volgende afslag met een grote pijl die de manoeuvre vertegenwoordigt en met gegevens over de afstand ernaartoe.
- [Volgende afslag (klein)](#next-turn) - de volgende afslag met een kleine pijl die de manoeuvre vertegenwoordigt en met afstandsgegevens naast de pijl. (alleen voor _Linker-/Rechterpanelen_)
- [Tweede volgende afslag](#next-turn) is de volgende afslag na de eerste afslag, die wordt geactiveerd als deze binnen naderingsafstand is.

| | |
|:------------|:------------|
| Inschakelen      | **Android:** *Menu → Scherm configureren →  Linker- / Rechter- / Boven- / Onderpaneel → Routebegeleiding → Widget toevoegen → Rijstrook, Volgende afslag, Tweede volgende afslag*  |
|      | **iOS:** *Menu → Scherm configureren →  Linker- / Rechter- / Boven- / Onderpaneel → Routebegeleiding → Widget toevoegen → Rijstrook, Volgende afslag, Tweede volgende afslag*   |
| Door te tikken  | **Volgende afslag**: Als [spraakprompts](../navigation/guidance/voice-navigation.md) zijn ingeschakeld, worden de volgende manoeuvre en de afstand ernaartoe uitgesproken. <br/> **Rijstrook**: Geen wijzigingen. |
| Lang indrukken    | **Volgende afslag**: Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) <br/> **Rijstroken**: Geen wijzigingen. |


### Rijstroken {#lanes}

![Lanes widgets](@site/static/img/widgets/lanes_widget.png)

De **Rijstroken**-widget markeert de huidige rijstrook wanneer de navigatie actief is en toont de rijstrookindeling voor de huidige weg wanneer de navigatie passief is. Een afstandsindicator wordt ook onder het rijstrookschema weergegeven, die aangeeft hoe ver het nog is tot de manoeuvre waarvoor de rijstrookbegeleiding geldt. Deze widget is alleen beschikbaar voor de Boven- en Onderpanelen. De gegevens zijn afkomstig van het [OpenStreetMap-project](https://wiki.openstreetmap.org/wiki/Key:turn).


### Volgende afslag {#next-turn}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![route guidence widget](@site/static/img/widgets/route_guidence_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Approach POIs/Favorites ios](@site/static/img/widgets/route_guidence_widgets_ios.png)

</TabItem>

</Tabs>

De navigatiewidgets **Volgende afslag**, **Volgende afslag (klein)**, **Tweede volgende afslag** kunnen op elk paneel worden geplaatst voor gebruiksgemak. De weergegeven informatie verschilt echter afhankelijk van het widgettype en de plaatsing. 

In Boven-/Onderpanelen kunnen de Volgende afslag- en Tweede volgende afslag-widgets worden weergegeven als Volle breedte (één widget per rij) of Halve breedte (twee widgets per rij). De inhoud hangt af van de lay-out en de geselecteerde widgetgrootte (S / M / L).

Volle breedte toont:
- Eerste regel — Afstand tot de afslag + Uitgang N (indien beschikbaar)
- Tweede regel — Wegenummer met een schild + weg-/straatnaam

Halve breedte toont:
- Eerste regel — Afstand tot de afslag
- Tweede regel — Uitgang N (indien beschikbaar) + wegenummer met een schild + weg-/straatnaam

**Volgende afslag** gebruikt een grote pijl en ondersteunt Volle breedte-/Halve breedte-lay-outs in Boven-/Onderpanelen. **Volgende afslag (klein)** gebruikt een kleine pijl met de afstand naast de pijl en is bedoeld voor de Linker-/Rechterpanelen. **Tweede volgende afslag** toont de manoeuvre na de volgende afslag en wordt actief wanneer de tweede manoeuvre binnen de naderingsafstand ligt.

### Kleuraanwijzingen {#color-prompts}

Deze tabel toont de geschatte tijd totdat de aanwijzingen worden geactiveerd en de bijbehorende kleurindicatie van de pijlen om de manoeuvre uit te voeren. Voor meer informatie, raadpleeg de [technische documentatie](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) of het artikel [Spraakprompts](../navigation/guidance/voice-navigation.md).

| Kleur     | ~ Activeringstijd | Afstand   | Type aanwijzing     |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 Groen  | 5 seconden      | Dichtbij   | Sla nu af        |
| 🟡 Geel | 20 seconden     | Naderend| Sla af over `x` m   |
| ⚪ Grijs   | > 100 seconden  | Ver weg    | Bereid u voor om af te slaan |

Dezelfde kleurdefinitie geldt voor de Rijstroken-widget. De Rijstroken-widget wordt weergegeven volgens de naderingstijdinstellingen, en de kleuren van de rijstroken volgen het stadium van de spraakprompt.

<!--
### Color Prompts for Lanes {#color-prompts-for-lanes}

Displays a widget by approach time settings. Lane's color is associated with [voice prompts](../navigation/guidance/voice-navigation.md) and time remaining to perform the maneuver.

| Color     | ~ Trigger Time | Distance    | Prompt type |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 Green  | 5 seconds      | Close by    | [Turn now](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) |
| 🟡 Yellow | 20 seconds     | Approaching | [Turn in X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) |
-->


## Waarschuwingswidget {#alert-widget}

![Alert information widgets](@site/static/img/widgets/alert_information_widget.png)

De **Waarschuwingswidget** combineert verschillende soorten waarschuwingen die in de linkerbenedenhoek worden weergegeven terwijl u navigeert.  

- U heeft de mogelijkheid om waarschuwingen zoals *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>,* en *<Translate android="true" ids="show_tunnels"/>* in en uit te schakelen. Andere waarschuwingen zijn standaard actief als de widget is ingeschakeld.  

- Voor het waarschuwingstype *Snelheidslimiet* kunt u de waarde <Translate android="true" ids="speed_limit_exceed"/>](../navigation/guidance/voice-navigation.md#speed-limit) aanpassen in de instellingen voor spraakprompts om beter aan te sluiten bij de snelheid van het voertuig en de GPS-snelheid.  

- De meeste waarschuwingen worden 15 seconden op het scherm weergegeven en met een spraakprompt aangekondigd, evenals de activeringstijd voor het passeren van een Routepunt, Favoriet Punt of POI. Lees meer [hier](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| Inschakelen | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
|  | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### Waarschuwingstypes {#alert-types}

Waarschuwingstypes hebben een verschillend visueel ontwerp, dat afhangt van de **<Translate android="true" ids="driving_region"/>**  en kan worden geconfigureerd via  *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>*. OsmAnd streeft er niet naar om 100% identieke verkeersborden weer te geven, maar wijst op enkele overeenkomsten.

| | | |
|:------------|:------------|:------------|
| Naam | Beschrijving | Pictogram |
| *<Translate android="true" ids="show_traffic_warnings"/>* | [Verkeersremmende maatregelen](https://en.wikipedia.org/wiki/Traffic_calming) gebruiken fysiek ontwerp en andere maatregelen om de veiligheid voor automobilisten, voetgangers en fietsers te verbeteren. | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_traffic_calming.png)  ![Alert traffic calming us widgets](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | [Een voetgangersoversteekplaats](https://en.wikipedia.org/wiki/Pedestrian_crossing) (voornamelijk Brits Engels) of zebrapad is een plaats die is aangewezen voor voetgangers om een weg, straat of laan over te steken. OsmAnd toont de waarschuwing voor de onbewaakte voetgangersoversteekplaats.  | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_pedestrian.png)  ![Alert traffic calming us widgets](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | In de meeste landen stellen de [snelheidslimieten op de weg](https://en.wikipedia.org/wiki/Speed_limit) de wettelijke maximum-, midden- of minimumsnelheid vast waarmee wegvoertuigen op een bepaald stuk weg mogen rijden. In OsmAnd wordt de waarschuwing getoond wanneer u de snelheid overschrijdt. U kunt parameters voor snelheidsoverschrijding instellen (0, 5, 10.. km/u). ![Alert ex_speed widgets](@site/static/img/widgets/ex_warning_speed.png)  | ![Alert speed_limit widgets](@site/static/img/widgets/warnings_limit.png) ![Alert speed_limit_ca widgets](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Alert speed_limit_us widgets](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | Een tunnel is een ondergrondse doorgang, die onder een berg, rivier of een druk stedelijk gebied doorgaat. In OsmAnd bevat de waarschuwing *Tunnels* informatie over de lengte van de tunnel. Als u zich in een tunnel bevindt, toont het de afstand tot het einde van de tunnel.   ![Alert ex_tunnel widgets](@site/static/img/widgets/ex_warning_tunnel.png)  | ![Alert warnings_tunnel widgets](@site/static/img/widgets/warnings_tunnel.png)  ![Alert warnings_tunnel_us widgets](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | [Verkeershandhavingscamera's](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) en [snelheidscamera's](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) registreren verkeersovertredingen, waaronder te hard rijden, door rood licht rijden en andere soorten illegaal gedrag. <br />**OPMERKING:** Waarschuwingen voor snelheidscamera's zijn in sommige landen verboden of illegaal. Om snelheidscamera's volledig [te verwijderen](../personal/global-settings.md#legal) uit OsmAnd, ga naar het hoofdmenu *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_speed_camera.png)   |
| *<Translate android="true" ids="traffic_warning_stop"/>* | [Een stopbord](https://en.wikipedia.org/wiki/Stop_sign) is een verkeersbord dat is ontworpen om bestuurders te informeren dat ze volledig moeten stoppen en ervoor moeten zorgen dat de kruising veilig vrij is van voertuigen en voetgangers voordat ze het bord passeren.  | ![Alert stop widgets](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* |Deze waarschuwing betekent dat er een [spoorwegovergang](https://en.wikipedia.org/wiki/Crossbuck) voor u ligt. | ![Alert warnings_railways widgets](@site/static/img/widgets/warnings_railways.png) ![Alert warnings_railways_ca widgets](@site/static/img/widgets/warnings_railways_ca.png)  ![Alert warnings_railways_us widgets](@site/static/img/widgets/warnings_railways_us.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* |Deze waarschuwing geeft aan dat er een grenscontrole voor u ligt.| ![Alert border control widgets](@site/static/img/widgets/warnings_border_control.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | [Gevaarsymbolen of waarschuwingssymbolen](https://en.wikipedia.org/wiki/Hazard_symbol) zijn herkenbare symbolen die zijn ontworpen om te waarschuwen voor gevaarlijke materialen, locaties of objecten, inclusief elektrische stromen, vergiften en radioactiviteit. | ![Alert warnings_hazard widgets](@site/static/img/widgets/warnings_hazard.png)  ![Alert warnings_hazard_us widgets](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | Deze waarschuwing geeft aan dat er een tolhokje voor een tolweg voor u ligt.   ![Alert toll_booth widgets](@site/static/img/widgets/ex_toll_booth.png) | ![Alert speed_limit widgets](@site/static/img/widgets/warnings_limit.png) |


## Straatnaam {#street-name}

De Straatnaam-widget toont **de huidige straatnaam** met een rechte pijl, of **de volgende straatnaam** met de uit te voeren manoeuvre. De straatnaam bestaat meestal uit een wegschild, een [naam](https://wiki.openstreetmap.org/wiki/Key:name), een [ref](https://wiki.openstreetmap.org/wiki/Key:ref), een [internationale ref](https://wiki.openstreetmap.org/wiki/Key:int_ref), en een [bestemming](https://wiki.openstreetmap.org/wiki/Key:destination). 

In de **Instellingen** van de widget kunt u selecteren om altijd **de huidige straatnaam** weer te geven en deze te gebruiken met de [**Volgende afslag**](#next-turn) widget. **Informatie volgende afslag** is standaard UIT. Als u het inschakelt, gebeurt het wisselen tussen de huidige straatnaam en de volgende straatnaam wanneer u de plaats nadert waar u de manoeuvre wilt uitvoeren (~20 seconden), vergelijkbaar met de spraakprompt [Sla af over X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

- Wanneer u langs een straat of snelweg rijdt, toont de widget de naam of aanduiding van de huidige straat (weg) met een blauwe pijl.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

 ![Street name without next turn](@site/static/img/widgets/without_next_turn_and.png) ![Street name with next turn](@site/static/img/widgets/with_next_turn_and.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

 ![Street name without next turn ios](@site/static/img/widgets/without_next_turn_ios.png) ![Street name with next turn ios](@site/static/img/widgets/with_next_turn_ios.png) 

</TabItem>

</Tabs>


| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget toevoegen → <Translate android="true" ids="map_widget_top_text"/>* |
|   | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget toevoegen → <Translate android="true" ids="map_widget_top_text"/>* |
| Instellingen | Selecteer om altijd **de huidige straatnaam** weer te geven of **de volgende straatnaam** weer te geven bij nadering van de manoeuvre |
| Door te tikken | Opent een contextmenu met Instellingen (schakel Informatie volgende afslag IN/UIT) en Verwijderen |


## Naderende POI's / Favorieten {#approach-pois--favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Approach POIs/Favorites android](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Approach POIs/Favorites ios](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

De widget **Naderende POI's/Favorieten/Routepunten** wordt gecombineerd met [Straatnaam](#street-name) en toont naderende en passerende Nuttige Plaatsen, Routepunten van een gevolgde track en Favorieten langs de route.  

Het toont de **naam**, het **pictogram van het punt**, en 2 **afstanden**:

- **Routeafstand** (boven) toont hoeveel afstand er nog moet worden afgelegd volgens de route.
- **Afwijkingsafstand** is een rechte afstand van het dichtstbijzijnde routepunt tot het punt zelf.

**iOS** - Naast de afstand tot het dichtstbijzijnde routepunt wordt ook de kant (links of rechts) van de route waarop het routepunt zich bevindt, weergegeven.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu"/> → Navigatie starten → potloodknop* |
| Door te tikken | Geen wijzigingen |


## Gerelateerde artikelen {#related-articles}

- [Scherm configureren](./configure-screen.md)
- [Kaartknoppen](./map-buttons.md)
- [Informatieve widgets](./info-widgets.md)
- [Navigatiewidgets](./nav-widgets.md)
- [Radiusliniaal en Liniaal](./radius-ruler.md)
- [Markeringswidgets](./markers.md)
- [Snelle actie](./quick-action.md)