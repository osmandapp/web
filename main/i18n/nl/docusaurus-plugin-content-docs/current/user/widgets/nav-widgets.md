---
source-hash: cf00228b0959bc2aae53ebe181345d3b69c04b3d0d42a49a8ed5ebc376ca2673
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

Navigatiewidgets worden tijdens de navigatie ingeschakeld om informatie weer te geven zoals afstand, aankomst- of resterende tijd, volgende afslagen, peiling, huidige straatnaam, rijstrookinformatie, maximale snelheid, naderende waarschuwingen, POI's en waypoints.

![Navigatiewidgets allemaal](@site/static/img/widgets/navigational_widgets_all.png)


## Actieve en passieve navigatie {#active-and-passive-navigation}

Navigatiewidgets in OsmAnd zijn ontworpen om zowel **actieve** als **passieve** navigatiemodi te verbeteren. Deze widgets bieden waardevolle informatie zoals routebeschrijvingen, weginformatie en snelheidslimieten, afhankelijk van het geselecteerde **navigatieprofiel**.

#### Actieve navigatie {#active-navigation}

- **Vereisten:**
  - Stel een **bestemming** in.
  - Bereken de **route** met de functie *Routebeschrijving*.
  - **Start** navigatie (stembegeleiding is optioneel).
  - Alleen beschikbaar bij het volgen van de route.

- **Ondersteunde widgets:**
  - Alle **navigatiewidgets** zijn beschikbaar.

- **Belangrijkste voordelen:**
  - Biedt **stap-voor-stap instructies**, **rijstrookbegeleiding** en **ETA**.
  - Zorgt voor nauwkeurige en dynamische updates tijdens de reis.

#### Passieve navigatie {#passive-navigation}

- **Hoe het werkt:**
  - Geen bestemming nodig.
  - Werkt automatisch wanneer u een **navigatieprofiel** selecteert (bijv. *Rijden*, *Fietsen*).

- **Functionaliteit:**
  - Probeert de weg die u volgt te bepalen met behulp van GPS-gegevens.
  - Toont **basisweginformatie**, zoals [straatnaam](#street-name), [rijstrookinformatie](#lanes), [maximale snelheid](#speed-limit).

- **Beperkingen:**
  - Sommige geavanceerde functies werken mogelijk niet correct zonder een ingestelde bestemming.
  - De verstrekte informatie is mogelijk niet altijd **precies**, vooral op complexe wegennetwerken.

> **OPMERKING.** *Houd er rekening mee dat het profiel **Kaart bladeren** geen navigatiewidgets ondersteunt in beide modi. Schakel over naar een relevant **navigatieprofiel** om deze functies in te schakelen.*


<!--
Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are unavailable in the **Browse Map** profile.

**Active** navigation requires setting a destination, calculating the route (Directions), and starting navigation (Go), not necessarily with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require a destination point set and works automatically once you switch to any navigational profile, for example, 'Driving'. In that case, the application will try to determine which road you are following and display extra information about it i.e. name, lane info, max speed available. Please note that this approach is unreliable and doesn't support all features.
-->

## Hoogtewidget {#elevation-widget}

<InfoAndroidOnly/>

:::note

<ProFeature/> Deze widget kunt u alleen gebruiken met de Pro-functie <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro-abonnees</a>.

:::

De Hoogtewidget toont een grafiek met de hoogte en helling van uw navigatieroute en uw huidige locatie op deze grafiek met de huidige hoogte en helling. De grafiek is uitgezet op twee assen. De X-as is de afstand van uw route. De Y-as is de hoogte, de waarde is afhankelijk van het reliëf, en de helling wordt weergegeven als een percentage.

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Hoogtewidget](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### Interacties met de grafiek {#interactions-with-the-graph}

- *In-/uitzoomen*. Standaard toont de grafiek de route vanaf de huidige locatie tot 10 km vooruit. U kunt [tweevingerbewegingen](../map/interact-with-map#gestures) gebruiken om in en uit te zoomen voor een gedetailleerder beeld van hoogteverschillen op uw route. U kunt de grafiek ook naar rechts verplaatsen, vooruit op de route, en terug naar de huidige locatie.
- *Plaats een punt op de grafiek*. Als u de hoogte- en gradenwaarde op een bepaald punt vooruit op uw route wilt zien, kunt u ergens op de grafiek tikken en verschijnt er een aanwijzer met de waarden.


#### Wat zit erin {#whats-in}

Wanneer u een route selecteert en op de knop **Start** drukt, opent de kaart met uw huidige locatie, de route en de widget onderaan het scherm. De widget heeft de grafiek en informatie over *Omhoog*, *Omlaag*, *Helling*, afstand, hoogte en hellingshoek. U kunt de *optimale schaal* selecteren en alle mogelijke obstakels op uw route zien.

- Alle waarden worden aangegeven voor de hele route of alleen voor het geselecteerde interval door de grafiek te schalen.
- Lees over de [licentie voor de DEM-gegevens](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection) die door OsmAnd worden gebruikt voor terreindetectie.

| |
|:------------|
| ***Locatiepin*** |
| Uw ***Huidige locatie*** op de grafiek omvat een locatiepictogram, hoogte en hellingspercentage. De rechterkant van de widget bevat de hoogste hoogte en helling, de gemiddelde waarde daarvoor, en de laagste waarde op het geselecteerde gedeelte van de route dat zichtbaar is op de grafiek. |
| ![punt](@site/static/img/widgets/sch_1-1.png)|
| ***Aanvullende informatie*** |
| De rechterkant van de widget bevat gegevens over de hoogste hoogte en helling, de gemiddelde waarde voor beide, en de laagste hoogte en helling op het geselecteerde routegedeelte dat zichtbaar is op de grafiek. |
| ![gegevens](@site/static/img/widgets/sch_1-2.png)|
|De waarden ***Omhoog*** en ***Omlaag*** zijn de sommen van de afstanden vanaf uw locatiepunt tot het einde van de zichtbare grafiek. Als er geen locatiepunt op de grafiek is, dan is het de som van de gehele zichtbare grafiek op het scherm (dit kan gebeuren wanneer u de schaal wijzigt en de locatie buiten de grafiek valt).|
| **Omhoog** – toont de som van alle afstanden met toenemende hoogte vanaf uw locatiepunt tot het einde van de zichtbare grafiek of voor het geselecteerde gedeelte van de route zonder het locatiepunt zichtbaar op het scherm. |
| ![omhoog schema](@site/static/img/widgets/sch_uphill_1.png) ![omhoog schema](@site/static/img/widgets/sch_uphill_2.png)|
| **Omlaag** – toont de som van alle afstanden met afnemende hoogte vanaf uw locatiepunt tot het einde van de zichtbare grafiek of voor het geselecteerde gedeelte van de route zonder het locatiepunt zichtbaar op het scherm.|
| ![omlaag schema](@site/static/img/widgets/sch_downhill_1.png) ![omlaag schema](@site/static/img/widgets/sch_downhill_2.png)|
|***Helling*** is de verhouding van het pad tot de horizontaal, waarbij nul horizontaal aangeeft en het aantal graden een hogere of steilere hellingsgraad aangeeft.|
| **Helling** – toont de maximale weghelling in procenten vanaf uw locatiepunt tot het einde van de zichtbare grafiek of voor het geselecteerde gedeelte van de route zonder het locatiepunt zichtbaar op het scherm. |
|![helling schema](@site/static/img/widgets/sch_grade_1.png) ![helling schema](@site/static/img/widgets/sch_grade_2.png)|


## Peilingwidget {#bearing-widget}

Peiling is de richting naar een doel buiten uw voertuig, zoals een bestemming of vertrekpunt. Een peiling kan *Relatief* zijn (volgens uw koers) of *Magnetisch* (volgens het kompas). Een magnetische peiling van 180° is bijvoorbeeld de richting naar het zuiden, en een relatieve peiling van 180° is recht achter u. De windstreken zijn de vier hoofdrichtingen van het kompas. Dit zijn Noord (*N* - 0° of 360°), Oost (*E* - 90°), Zuid (*Z* - 180°) en West (*W* - 270°).

![Reisopnamewidget](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Reisopnamewidget](@site/static/img/widgets/bearing_widget.png) ![Reisopnamewidget](@site/static/img/widgets/bearing_widget_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Reisopnamewidget](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="shared_string_bearing"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="shared_string_bearing"/>* |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |
| Formaat | **Android:** U kunt het weergaveformaat van de gegevens voor hoekeenheden wijzigen: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
| | **iOS:** U kunt het weergaveformaat van de gegevens voor hoekeenheden wijzigen: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |


#### Hoe het werkt {#how-it-works}

Om de peiling weer te geven, moet een **doelpunt** worden geselecteerd. Als een **bestemmingspunt** (of het **eerste tussenpunt**, indien aanwezig) is geselecteerd voor navigatie, wordt dit gebruikt als het doelpunt. Anders wordt de **bovenste geselecteerde markering** gebruikt.

- [Relatieve peiling](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) is de hoek tussen uw voorwaartse bewegingsrichting en het doelpunt. De **voorwaartse bewegingsrichting** is ofwel de **richting van uw beweging** verkregen van de GPS-sensoren, of als u stilstaat **waar u uw apparaat hebt gericht** (d.w.z. de oriëntatie van uw apparaat volgens het magnetische kompas). Voorbeeld: Een object met een relatieve peiling van 0° bevindt zich recht voor u en een object met een relatieve peiling van 180° bevindt zich recht achter u. De **relatieve peiling** is de hoek tussen uw voorwaartse richting en het doelpunt.

- [Magnetische peiling](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) is de hoek met de klok mee (horizontaal) tussen het magnetische noorden en het doelpunt waargenomen vanaf uw locatie. U moet deze magnetische kompaswaarde volgen om uw doel te bereiken. Voorbeeld: Als de **magnetische peiling** wordt weergegeven als 0° M, moet u strikt naar het magnetische noorden bewegen om het doelpunt te bereiken.

- [Ware peiling](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages) wordt uitgedrukt als de horizontale hoek tussen de geografische meridiaan en een lijn op aarde. Specifiek is **ware puntpeiling** de hoek gemeten in graden met de klok mee vanaf de ware noordlijn. OsmAnd-software toont u de ware peiling en koers in onze gebruiksvriendelijke interface, waardoor u vroegtijdig de juiste beslissing kunt nemen.

### Navigatie langs de loxodroom {#navigation-along-the-rhumb-line}

- **Relatieve peiling**. Als u zich aan een relatieve peiling van 0 graden houdt en vooruit beweegt, komt u op het bestemmingspunt aan, maar niet via de kortste route ([Loxodroom](https://en.wikipedia.org/wiki/Rhumb_line)).
- **Magnetische peiling**. Als u het kompas op uw boot/voertuig uitlijnt met de widgetwaarde en vooruit rijdt, komt u op uw bestemming aan, maar niet via de kortste route ([Loxodroom](https://en.wikipedia.org/wiki/Rhumb_line)).

<!--![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- By tapping: Changes between  Relative bearing or Magnetic bearing (with "M") -->


## Navigatiepunten {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

De widgetgroep *Navigatiepunt* toont de resterende afstand tot uw bestemming, het tussenpunt, de aankomsttijd bij het tussenpunt of de reistijd voor de berekende route, en de geschatte aankomsttijd.

### Route-informatie {#route-information}


![Bestemmingswidget](@site/static/img/widgets/route_information_widget.png)

De widget *Route-informatie* biedt realtime gegevens over de lopende navigatieroute en een snelle manier om [een actieve route te beheren](../navigation/setup/route-navigation.md#start--stop-navigation). Het helpt om belangrijke routedetails bij te houden en stelt u in staat om de huidige navigatiesessie met minimale interactie te stoppen of te hervatten.

**Weergegeven informatie:**

- **Geschatte aankomsttijd (ETA)**. Toont de verwachte aankomsttijd op de eindbestemming.
- **Resterende reistijd**. Geeft de geschatte resterende tijd weer om de bestemming te bereiken.
- **Afstand tot bestemming**. Geeft de totale resterende afstand tot de eindbestemming en afstanden tot tussenpunten aan.

**Instellingenmenu**:

- Selecteer een **Standaardweergave** om een van de volgende waarden te prioriteren: *Geschatte aankomsttijd*, *Tijd te gaan*, *Afstand*.
- Selecteer in **Weergaveprioriteit** tussen *Bestemming eerst (standaard)* of *Tussenpunt eerst* om de meest relevante route-informatie te prioriteren.

> OPMERKING: De widget is alleen zichtbaar tijdens navigatie.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget toevoegen →<Translate android="true" ids="map_widget_route_information"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → Widget toevoegen →Route-informatie* |
| Door te tikken | Tik op de knop met de pijl om het [Start/Stop Navigatiepaneel](../navigation/setup/route-navigation.md#start--stop-navigation) te openen |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |
| Formaat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### Afstand tot bestemming {#distance-to-destination}

![Bestemmingswidget](@site/static/img/widgets/destination_widget.png)

De widget toont de resterende afstand tot het laatste bestemmingspunt bij het volgen van een berekende route.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| Door te tikken | Verplaatst de kaart naar het bestemmingspunt. |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |

### Afstand tot tussenpunt {#distance-to-intermediate}

![Tussenbestemmingswidget](@site/static/img/widgets/intermediate_destination_widget.png)

De widget toont de afstand tot het eerste tussenpunt langs de berekende route. Na het passeren van tussenpunten wordt de ruimte bijgewerkt naar het volgende tussenpunt. Als er geen tussenpunten zijn, wordt de widget niet weergegeven.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| Door te tikken | **Eén tussenpunt** - verplaats de kaart naar het tussenpunt. <br /> **Twee of meer tussenpunten** - opent het menu Bestemmingenlijst. |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |

### Tijd tot tussenpunt {#time-to-intermediate}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aankomsttijd Tijd te gaan widget](@site/static/img/widgets/arrival_time_widget_android.png) ![Aankomsttijd Tijd te gaan widget](@site/static/img/widgets/time_to_go_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aankomsttijd Tijd te gaan widget](@site/static/img/widgets/arrival_time_widget_ios.png) ![Aankomsttijd Tijd te gaan widget](@site/static/img/widgets/time_to_go_widget_ios.png)

</TabItem>

</Tabs>

De widget toont de *Aankomsttijd* of *Tijd te gaan* naar het eerste tussenpunt. Tijdens de navigatie wordt de tijd constant bijgewerkt, en zodra een tussenpunt is gepasseerd, wordt de tijd bijgewerkt naar het volgende waypoint. Als u bijvoorbeeld de navigatie stopt, blijft de *Tijd te gaan* ongewijzigd en is de *Aankomsttijd* gelijk aan de *Tijd te gaan* plus de *Huidige tijd*.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| Door te tikken | Wisselt tussen *Aankomsttijd* en *Tijd te gaan* en omgekeerd. |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


### Tijd tot bestemming {#time-to-destination}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tussenliggende aankomsttijd Tijdwidget](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tussenliggende aankomsttijd Tijdwidget](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

De widget toont de *Aankomsttijd* of *Tijd te gaan* naar het laatste bestemmingspunt. De tijd wordt constant bijgewerkt tijdens de navigatie en is gelijk aan de routetijd vanaf uw huidige locatie.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| Door te tikken | Wisselt tussen *Aankomsttijd* en *Tijd te gaan* en omgekeerd. |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


## Snelheidslimiet {#speed-limit}

![Snelheidslimietwidget](@site/static/img/widgets/speed_limit_widget_2.png)

De widget *Snelheidslimiet* toont de huidige snelheidslimiet op basis van de kaartgegevens voor uw route.

- Gegevens zijn afkomstig van [OpenStreetMap project](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- Widget werkt in passieve en actieve navigatiemodi.
- Als snelheidslimietgegevens niet beschikbaar zijn voor een specifieke weg of gebied, *verschijnt de widget niet*.

> OPMERKING: Zorg ervoor dat uw [kaarten up-to-date zijn](../personal/maps-resources.md#updates) en dat u alle benodigde regionale gegevens hebt gedownload om toegang te krijgen tot de nieuwste snelheidslimietinformatie.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_max_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="map_widget_max_speed"/>* |
| Door te tikken | Geen wijzigingen |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


## Routemanouvres {#route-maneuvers}

![Volgende afslagen widget](@site/static/img/widgets/next_turns_widget.png)

Deze set navigatiewidgets wordt geactiveerd tijdens de navigatie en toont informatie over de afstand tot de volgende manoeuvre.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *Menu → Scherm configureren → Links / Rechts paneel → Widget toevoegen → Routemanouvres → Volgende afslag, Volgende afslag (klein), Tweede volgende afslag* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Links / Rechts paneel → Widget toevoegen → Routemanouvres → Volgende afslag, Volgende afslag (klein), Tweede volgende afslag* |
| Door te tikken | Als [gesproken aanwijzingen](../navigation/guidance/voice-navigation.md) zijn ingeschakeld, worden de volgende manoeuvre en de afstand ernaartoe uitgesproken. |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


### Volgende afslag {#next-turn}

![Volgende afslagen widget](@site/static/img/widgets/next_turns_widgets_andr.png)

De widgets *Routemanouvres* bevatten informatie over:

- **Volgende afslag** - de volgende afslag met een grote pijl die de manoeuvre voorstelt en met gegevens over de afstand ernaartoe.
- **Volgende afslag (klein)** - de volgende afslag met een kleine pijl die de manoeuvre voorstelt en met afstandsgegevens naast de pijl.
- **Tweede volgende afslag** - de volgende afslag na de eerste afslag, die wordt geactiveerd als deze binnen de naderingsafstand ligt.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *Menu → Scherm configureren → Links / Rechts paneel → Widget toevoegen → Volgende afslag, Volgende afslag (klein), Tweede volgende afslag* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Links / Rechts paneel → Widget toevoegen → Volgende afslag, Volgende afslag (klein), Tweede volgende afslag* |
| Door te tikken | Als [gesproken aanwijzingen](../navigation/guidance/voice-navigation.md) zijn ingeschakeld, worden de volgende manoeuvre en de afstand ernaartoe uitgesproken. |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


### Kleurprompts voor volgende afslag {#color-prompts-for-next-turn}

Deze tabel toont de geschatte tijd totdat de prompts worden geactiveerd en de bijbehorende kleurindicatie van de pijlen om de manoeuvre uit te voeren. Voor meer informatie, raadpleeg de [technische documentatie](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) of het artikel [Gesproken aanwijzingen](../navigation/guidance/voice-navigation.md).

| Kleur | ~ Trigger Tijd | Afstand | Prompt type |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 Groen | 5 seconden | Dichtbij | Nu afslaan |
| 🟡 Geel | 20 seconden | Nadert | Afslaan over `x` m |
| ⚪ Grijs | > 100 seconden | Ver weg | Voorbereiden op afslaan |


## Rijstroken {#lanes}

![Rijstroken widgets](@site/static/img/widgets/lanes_widget.png)

De widget **Rijstroken** markeert de huidige rijstrook wanneer navigatie actief is en toont de rijstrookindeling voor de daadwerkelijke weg wanneer navigatie passief is. De gegevens zijn afkomstig van [OpenStreetMap project](https://wiki.openstreetmap.org/wiki/Key:turn).

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="route_guidance"/> → Widget toevoegen → <Translate android="true" ids="show_lanes"/>* |
| | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget toevoegen → <Translate android="true" ids="show_lanes"/>* |
| Door te tikken | Geen wijzigingen |

### Kleurprompts voor rijstroken {#color-prompts-for-lanes}

Toont een widget op basis van de instellingen voor de naderingstijd. De kleur van de rijstrook is gekoppeld aan [gesproken aanwijzingen](../navigation/guidance/voice-navigation.md) en de resterende tijd om de manoeuvre uit te voeren.

| Kleur | ~ Trigger Tijd | Afstand | Prompt type |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 Groen | 5 seconden | Dichtbij | [Nu afslaan](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |
| 🟡 Geel | 20 seconden | Nadert | [Afslaan over X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |


## Routebegeleiding {#route-guidance}

<InfoAndroidOnly />

![routebegeleiding widget](@site/static/img/widgets/route_guidence_widgets_andr.png)

Biedt realtime routebegeleiding, inclusief afstand tot de volgende afslag, wegnaam, huidige straatnaam en rijstrookinformatie. Widgets zijn actief tijdens navigatie.

De widgets *Routebegeleiding* bevatten informatie over:

- [Rijstroken](#lanes) - toont de huidige locatie van de rijstroken en markeert de rijstroken waarop u moet rijden.
- **Volgende afslag** - de volgende afslag met een grote pijl die de manoeuvre voorstelt en met gegevens over de afstand ernaartoe.
- **Tweede volgende afslag** is de volgende afslag na de eerste afslag, die wordt geactiveerd als deze binnen de naderingsafstand ligt.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *Menu → Scherm configureren → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget toevoegen → Rijstrook, Volgende afslag, Tweede volgende afslag* |
| Door te tikken | **Volgende afslag**: Als [gesproken aanwijzingen](../navigation/guidance/voice-navigation.md) zijn ingeschakeld, worden de volgende manoeuvre en de afstand ernaartoe uitgesproken. <br/> **Rijstrook**: Geen wijzigingen. |
| Lang tikken | **Volgende afslag**: Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) <br/> **Rijstrook**: Geen wijzigingen. |


## Waarschuwingswidget {#alert-widget}

![Waarschuwingsinformatiewidgets](@site/static/img/widgets/alert_information_widget.png)

De **Waarschuwingswidget** combineert verschillende soorten waarschuwingen die in de linkerbenedenhoek worden weergegeven terwijl u navigeert.

- U kunt waarschuwingen zoals *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>,* en *<Translate android="true" ids="show_tunnels"/>* in- en uitschakelen. Andere waarschuwingen zijn standaard actief als de widget is ingeschakeld.

- Voor het waarschuwingstype *Snelheidslimiet* kunt u de <Translate android="true" ids="speed_limit_exceed"/>-waarde [overschrijden](../navigation/guidance/voice-navigation.md#speed-limit) aanpassen in de instellingen voor gesproken aanwijzingen om beter aan te sluiten bij de voertuigsnelheid en GPS-snelheid.

- De meeste waarschuwingen worden op het scherm weergegeven en gedurende 15 seconden via gesproken aanwijzingen aangekondigd, evenals de triggertijd voor het passeren van een Waypoint, Favoriet punt of POI. Lees meer [hier](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| Inschakelen | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
| | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### Waarschuwingstypen {#alert-types}

Waarschuwingstypen hebben een ander visueel ontwerp, dat afhankelijk is van de **<Translate android="true" ids="driving_region"/>** en kan worden geconfigureerd via *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>*. OsmAnd streeft er niet naar om 100% identieke verkeersborden weer te geven, maar wijst op enkele overeenkomsten.

| | | |
|:------------|:------------|:------------|
| Naam | Beschrijving | Pictogram |
| *<Translate android="true" ids="show_traffic_warnings"/>* | [Verkeersremmende maatregelen](https://en.wikipedia.org/wiki/Traffic_calming) maken gebruik van fysiek ontwerp en andere maatregelen om de veiligheid voor automobilisten, voetgangers en fietsers te verbeteren. | ![Waarschuwing verkeersremmende widgets](@site/static/img/widgets/warnings_traffic_calming.png) ![Waarschuwing verkeersremmende widgets VS](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | Een [voetgangersoversteekplaats](https://en.wikipedia.org/wiki/Pedestrian_crossing) (voornamelijk Brits Engels) of zebrapad is een plaats die is aangewezen voor voetgangers om een weg, straat of laan over te steken. OsmAnd toont de waarschuwing voor de ongeregelde voetgangersoversteekplaats. | ![Waarschuwing verkeersremmende widgets](@site/static/img/widgets/warnings_pedestrian.png) ![Waarschuwing verkeersremmende widgets VS](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | In de meeste landen stellen de [snelheidslimieten](https://en.wikipedia.org/wiki/Speed_limit) de wettelijke maximale, gemiddelde of minimale snelheid vast waarmee wegvoertuigen op een bepaald weggedeelte mogen rijden. In OsmAnd wordt de waarschuwing weergegeven wanneer u de snelheid overschrijdt. U kunt parameters voor snelheidsoverschrijding instellen (0, 5, 10.. km/u). ![Waarschuwing ex_speed widgets](@site/static/img/widgets/ex_warning_speed.png) | ![Waarschuwing snelheidslimiet widgets](@site/static/img/widgets/warnings_limit.png) ![Waarschuwing snelheidslimiet CA widgets](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Waarschuwing snelheidslimiet VS widgets](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | Een tunnel is een ondergrondse doorgang, die onder een berg, rivier of een dichtbevolkt stedelijk gebied doorloopt. In OsmAnd heeft de waarschuwing *Tunnels* informatie over de tunnellengte. Als u zich in een tunnel bevindt, toont deze de afstand tot het einde van de tunnel. ![Waarschuwing ex_tunnel widgets](@site/static/img/widgets/ex_warning_tunnel.png) | ![Waarschuwingen tunnel widgets](@site/static/img/widgets/warnings_tunnel.png) ![Waarschuwingen tunnel VS widgets](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | [Verkeershandhavingscamera's](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) en [flitspalen](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) registreren verkeersovertredingen, waaronder te hard rijden, door rood licht rijden en andere soorten illegaal gedrag. <br />**OPMERKING:** Flitspaalwaarschuwingen zijn in sommige landen verboden of illegaal. Om flitspalen volledig [te verwijderen](../personal/global-settings.md#legal) uit OsmAnd, gaat u naar het hoofdmenu *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>* | ![Waarschuwing verkeersremmende widgets](@site/static/img/widgets/warnings_speed_camera.png) |
| *<Translate android="true" ids="traffic_warning_stop"/>* | Een [stopbord](https://en.wikipedia.org/wiki/Stop_sign) is een verkeersbord dat is ontworpen om bestuurders te waarschuwen dat ze volledig tot stilstand moeten komen en ervoor moeten zorgen dat de kruising veilig vrij is van voertuigen en voetgangers voordat ze verder rijden. | ![Waarschuwing stop widgets](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* |Deze waarschuwing betekent dat er een [spoorwegovergang](https://en.wikipedia.org/wiki/Crossbuck) voor u ligt. | ![Waarschuwingen spoorwegen widgets](@site/static/img/widgets/warnings_railways.png) ![Waarschuwingen spoorwegen CA widgets](@site/static/img/widgets/warnings_railways_ca.png) ![Waarschuwingen spoorwegen VS widgets](@site/static/img/widgets/warnings_railways_us.png) |
| *<Translate android="true" ids="traffic_warning_border_control"/>* |Deze waarschuwing geeft aan dat er een grensovergang voor u ligt.| ![Waarschuwing grensovergang widgets](@site/static/img/widgets/warnings_border_control.png) |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | [Gevarensymbolen of waarschuwingssymbolen](https://en.wikipedia.org/wiki/Hazard_symbol) zijn herkenbare symbolen die zijn ontworpen om te waarschuwen voor gevaarlijke materialen, locaties of objecten, waaronder elektrische stromen, gifstoffen en radioactiviteit. | ![Waarschuwingen gevaar widgets](@site/static/img/widgets/warnings_hazard.png) ![Waarschuwingen gevaar VS widgets](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | Deze waarschuwing geeft aan dat er een tolhuisje voor een tolweg voor u ligt. ![Waarschuwing tolhuisje widgets](@site/static/img/widgets/ex_toll_booth.png) | ![Waarschuwing snelheidslimiet widgets](@site/static/img/widgets/warnings_limit.png) |


## Straatnaam {#street-name}

De widget Straatnaam toont **de huidige straatnaam** met een rechte pijl, of **de volgende straatnaam** met de uit te voeren manoeuvre. De straatnaam bestaat meestal uit een snelwegschild, een [naam](https://wiki.openstreetmap.org/wiki/Key:name), een [ref](https://wiki.openstreetmap.org/wiki/Key:ref), een [internationale ref](https://wiki.openstreetmap.org/wiki/Key:int_ref), en een [bestemming](https://wiki.openstreetmap.org/wiki/Key:destination). Het wisselen tussen de huidige straatnaam en de volgende straatnaam gebeurt wanneer u de plaats nadert waar u de manoeuvre wilt uitvoeren (~20 seconden), vergelijkbaar met de gesproken aanwijzing [Afslaan over X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

- Wanneer u over een straat of snelweg rijdt, toont de widget de naam of aanduiding van de huidige straat (weg) met een blauwe pijl.

  ![Straatnaam POI's widget_2](@site/static/img/widgets/street_name_widget_2.png)

- Wanneer u van richting verandert, toont de widget het schema van de manoeuvre en de naam (aanduiding) van de straat (weg) waarnaar u moet afslaan.

  ![Straatnaam POI's widget](@site/static/img/widgets/street_name_widget.png)

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget toevoegen → <Translate android="true" ids="map_widget_top_text"/>* |
| | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Widget toevoegen → <Translate android="true" ids="map_widget_top_text"/>* |
| Door te tikken | Geen wijzigingen |


## POI's / Favorieten naderen {#approach-pois--favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI's/Favorieten Android naderen](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI's/Favorieten iOS naderen](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

De widget **POI's/Favorieten/Waypoints naderen** is gecombineerd met [Straatnaam](#street-name) en toont naderende en passerende Nuttige Plaatsen, Waypoints van gevolgde routes en Favorieten langs de route.

Het toont de **naam**, het **pictogram van het punt**, en 2 **afstanden**:

- **Routeafstand** (boven) toont hoeveel afstand moet worden afgelegd door de volgende route.
- **Afwijkingsafstand** is een rechte afstand van het dichtstbijzijnde routepunt tot het punt zelf.

**iOS** - Naast de afstand tot het dichtstbijzijnde waypoint wordt ook de zijde (links of rechts) van de route waarop het waypoint zich bevindt, weergegeven.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu"/> → Navigatie starten → potloodknop* |
| Door te tikken | Geen wijzigingen |


## Gerelateerde artikelen {#related-articles}

- [Scherm configureren](./configure-screen.md)
- [Kaartknoppen](./map-buttons.md)
- [Informatiewidgets](./info-widgets.md)
- [Navigatiewidgets](./nav-widgets.md)
- [Radiusliniaal en Liniaal](./radius-ruler.md)
- [Markeringswidgets](./markers.md)
- [Snelle actie](./quick-action.md)

> *Laatst bijgewerkt: april 2025*