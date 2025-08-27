---
source-hash: 27b32890625cf93a03c736a3e9e5b69340ef24cbdda764258f58f7265e15c755
sidebar_position: 3
title: Informatieve Widgets
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

Informatieve widgets bieden u snelle toegang tot belangrijke gegevens. Dit kunnen gegevens zijn over snelheid, weer, parkeerpositie, gegevens van externe sensoren en nog veel meer. Widgets kunnen worden geconfigureerd volgens uw specifieke vereisten, waardoor ze zichtbaar zijn op het toepassingsscherm of indien nodig worden uitgeschakeld.

![Informatieve widgets](@site/static/img/widgets/informational_widgets_all.png)


## Hoogtewidgets {#altitude-widgets}

Hoogtewidgets tonen de hoogte boven zeeniveau van de huidige geolocatie en de hoogte van het kaartcentrum.


### Hoogte: Huidige locatie {#altitude-current-location}

:::note Download Wereldhoogtecorrectie
Op sommige Android-apparaten kan de hoogte onnauwkeurig worden weergegeven. Om dit probleem op te lossen, downloadt u een kaart met hoogtecorrectie.

- Ga naar: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.
- Voor meer details, bezoek [Kaarten & Bronnen](../personal/maps-resources.md#downloads).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Hoogtewidget Android](@site/static/img/widgets/altitude_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Hoogtewidget iOS](@site/static/img/widgets/altitude_widget_ios.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_altitude_current_location"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="map_widget_altitude_current_location"/>* |
| Door te tikken | Geen wijzigingen |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |
| Formaat | *Menu → Instellingen → App-profielen → Algemene instellingen → Eenheden & formaten → Lengte-eenheden* |


### Hoogte: Kaartcentrum {#elevation-map-center}

:::info Betaalde functie
&nbsp;<ProFeature/> Om toegang te krijgen tot de *Hoogte: kaartcentrum* widget, abonneer u op OsmAnd Pro voor [Android](../purchases/android.md#pro-features) of [iOS](../purchases/ios.md#pro-features).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Hoogtewidget Android](@site/static/img/widgets/elevation_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Hoogtewidget iOS](@site/static/img/widgets/elevation_widget_2_ios.png)

</TabItem>

</Tabs>

U kunt de widget gebruiken om de hoogte van het huidige kaartcentrum boven zeeniveau te achterhalen. Een [Terreinkaart (Heuvelschaduw en Helling)](../plugins/topography.md#download-maps) van het benodigde gebied is vereist om informatie weer te geven in de **Hoogte: kaartcentrum widget**.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_altitude_map_center"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="map_widget_altitude_map_center"/>* |
| Door te tikken | Geen wijzigingen |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |
| Formaat | *Menu → Instellingen → App-profielen → Algemene instellingen → Eenheden & formaten → Lengte-eenheden* |


## Huidige tijd {#current-time}

![Huidige tijd widget](@site/static/img/widgets/current_time_widget.png)

Deze widget toont de huidige tijd, afkomstig van uw apparaat.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_plain_time"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="map_widget_plain_time"/>* |
| Door te tikken | Geen wijzigingen |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |
| Formaat | Apparaatinstellingen configureren Tijd & Formaat. |


## Huidige snelheid {#current-speed}

![Snelheidswidget](@site/static/img/widgets/current_speed_widget.png)

De widget toont de huidige snelheid die door de GPS-sensor wordt gedetecteerd.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_current_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="map_widget_current_speed"/>* |
| Door te tikken | Geen wijzigingen |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |
| Formaat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,default_speed_system"/>* |


## Gemiddelde snelheid {#average-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Gemiddelde snelheid widget Android](@site/static/img/widgets/average_speed_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Gemiddelde snelheid widget iOS](@site/static/img/widgets/average_speed_widget_ios_2.png)

</TabItem>

</Tabs>

De **Gemiddelde snelheid** widget berekent en toont uw gemiddelde snelheid over een geselecteerd tijdsinterval zonder dat navigatie of trackopname vereist is. Het is handig voor het bewaken van de snelheidsnaleving op snelwegen of het bijhouden van de gemiddelde snelheid over de laatste paar minuten fietsen.

1. ***De widget configureren.***
   Om instellingen aan te passen, tikt u op de knop **Instellingen** (*Android*) of het **widgetveld** (*iOS*). Beschikbare opties zijn onder andere:

2. ***Tijdsinterval.***

   - De gemiddelde snelheid wordt berekend op basis van het geselecteerde tijdsinterval, dat kan variëren van **15 seconden tot 60 minuten**.

   - De berekening is gebaseerd op GPS-gegevens met behulp van de formule:
   `Gemiddelde snelheid = GEMIDDELDE(GPS_LOCATIE.snelheid)`.

3. ***Stops meenemen in de berekening.***

   **Ingeschakeld** — Als de geregistreerde snelheid lager is dan 1 eenheid per uur, wordt deze genegeerd, waardoor onnodige dalingen in de gemiddelde snelheid bij stoppen voor verkeerslichten of korte pauzes worden voorkomen.

   **Uitgeschakeld** — Stops worden meegenomen in de berekening, wat betekent dat lange pauzes de totale gemiddelde snelheid zullen verlagen.

4. ***Gemiddelde snelheid resetten.***
   U kunt de berekening van de gemiddelde snelheid op twee manieren resetten:

   - Lang tikken op de widget om het [Contextmenu](../widgets/configure-screen.md#widget-context-menu) te openen, en selecteer *Gemiddelde snelheid resetten*.
   - Open de *widgetinstellingen* via het [Scherm configureren menu](../widgets/configure-screen.md#settings) en selecteer de resetoptie.

Na het resetten wordt de gemiddelde snelheid opnieuw berekend op basis van de nieuwe GPS-gegevens. Deze functie is handig voor real-time snelheidsbewaking, zoals het bijhouden van de snelheid in gebieden met **trajectcontroles**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Gemiddelde snelheid](@site/static/img/widgets/average_speed_widget_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Gemiddelde snelheid widgets](@site/static/img/widgets/average_speed_widget_ios_1.png) ![Gemiddelde snelheid widgets](@site/static/img/widgets/average_speed_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_average_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="map_widget_average_speed"/>* |
| Door te tikken | Geen wijzigingen |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu). <br/> Kan worden gebruikt om de gemiddelde snelheid te resetten. |


## Glijverhouding {#glide-ratio}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|Widgets| Widgets op het scherm|
|:--------|:---------|
|![Glijverhouding](@site/static/img/widgets/glide_ratio_3.png)|![Glijverhouding](@site/blog/2023-12-22-android-4-6/img/glide_ratio_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|Widgets| Widgets op het scherm|
|:--------|:---------|
|![Glijverhouding](@site/static/img/widgets/glide_ratio_1_widget_ios.png)|![Glijverhouding](@site/static/img/widgets/glide_ratio_widget_ios.png)|


</TabItem>

</Tabs>

De [eenvoudige](../widgets/configure-screen.md#widgets-for-all-panels) *Glijverhouding* widgets bieden waardevolle informatie over de glijverhouding om weloverwogen beslissingen te nemen bij het plannen van vliegroutes. De *Glijverhouding* widget in OsmAnd helpt u de efficiëntie van uw daling of stijging te evalueren bij het navigeren naar een specifieke locatie ([marker](../personal/markers.md) positie op de kaart). Het berekent de glijverhouding als de verhouding van de afstand tot het hoogteverschil tussen uw huidige positie en uw beoogde bestemming. U kunt hier meer over lezen [hier](https://en.wikipedia.org/wiki/Lift-to-drag_ratio#Glide_ratio).


**Gebruik van widgets:**

- *Zweefvluchten plannen.* Voor zweefvliegers wordt de *Glijverhouding naar doel* widget een onmisbaar hulpmiddel bij het plannen en uitvoeren van zweefvluchten. Piloten kunnen inschatten hoe ver ze naar hun doel kunnen vliegen, gegeven de huidige omstandigheden en de vereiste glijverhouding.
- *Klimmen en dalen optimaliseren.* De gemiddelde glijverhouding stelt piloten in staat om klimmen en dalen te optimaliseren op basis van de huidige omstandigheden. Piloten kunnen de optimale timing kiezen voor klimmen om de vliegtijd te maximaliseren, of voor dalen om een doel te bereiken.
- *Reageren op veranderende omstandigheden.* De widget biedt continue updates van de glijverhouding, waardoor piloten direct kunnen reageren op veranderingen in atmosferische omstandigheden of routes. Ze kunnen hun vluchtplan aanpassen om veiligheid en efficiëntie te garanderen.
- *Maximaal gebruik van horizontale afstand.* Het kennen van de glijverhouding stelt piloten in staat om de horizontale afstand maximaal te benutten om naar het doel te bewegen, wat vooral belangrijk is bij het plannen van lange vluchten.
- *Risicovermindering*. De *Glijverhouding naar doel* widget helpt piloten situaties te vermijden waarin het bereiken van het doel onmogelijk wordt door onvoldoende glijverhouding. Dit helpt risico's te verminderen en de vliegveiligheid te verbeteren.


**Positieve en negatieve waarden:**

- **Positieve waarden** geven aan dat uw bestemming zich op een lagere hoogte bevindt dan uw huidige positie, wat een daling vereist.
- **Negatieve waarden** geven aan dat uw bestemming zich op een hogere hoogte bevindt, wat een stijging noodzakelijk maakt. Bijvoorbeeld, "-90:1" betekent dat u na het afleggen van een afstand van 90 kilometer 1 kilometer moet stijgen om uw bestemming te bereiken.


**Afronding/Opmaak:**

- Waarde **≤ 0.1**:
  - "0.05" wordt weergegeven als "0".
- Waarde **> 0.1 en < 100**:
  - bijvoorbeeld, "50.7643" wordt weergegeven als "50.8:1".
- Waarde **> 100:**
  - "102.35" wordt weergegeven als "102:1."


### Glijverhouding naar doel {#glide-ratio-to-target}

- **Glijverhouding naar doel** toont de exacte glijverhouding die nodig is om het doel te bereiken.
- **Doelhoogte** toont de hoogte van het doel. De [Kaartmarkering](../personal/markers.md) moet als doel worden gebruikt.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → Glijverhouding* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → Glijverhouding* |
| Door te tikken | Wijzigt *Glijverhouding naar doel* of *Doelhoogte* |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


### Gemiddelde glijverhouding {#average-glide-ratio}

- **Gemiddelde glijverhouding** toont de gemiddelde glijverhouding voor een opgegeven tijdsinterval.
- **Gemiddelde verticale snelheid** geeft de snelheid aan waarmee een object stijgt of daalt over een bepaalde periode. Alleen de eerste en laatste punten van het tijdsinterval worden in aanmerking genomen voor evaluatie. U kunt het tijdsinterval voor deze widget instellen van 15 seconden tot 60 minuten. U moet de [Kaartmarkering](../personal/markers.md) als doel gebruiken.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → Glijverhouding* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → Glijverhouding* |
| Door te tikken | Wijzigt *Gemiddelde glijverhouding* of *Gemiddelde verticale snelheid* |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


## Batterijniveau {#battery-level}

![Batterijniveau widget](@site/static/img/widgets/battery_level_widget.png)

De **Batterijniveau** widget toont het batterijpercentage van uw apparaat direct op het kaartscherm en wordt automatisch minstens één keer per minuut bijgewerkt.

- **iOS 17 en later** — Vanwege **privacybeperkingen** zijn batterijniveaugegevens alleen beschikbaar in stappen van 5% (bijv. 35%, 60% of 85%). Dit is een systeembeperking opgelegd door Apple.

- **Android** apparaten — De widget toont het exacte batterijpercentage zoals gerapporteerd door het systeem, zonder afronding.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_battery"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="map_widget_battery"/>* |
| Door te tikken | Geen wijzigingen |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


## Coördinatenwidget {#coordinates-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Coördinatenwidget Android](@site/static/img/widgets/coordinates_widget_1.png) ![Coördinatenwidget Android](@site/static/img/widgets/coordinates_widget_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Coördinatenwidget Android](@site/static/img/widgets/coordinates_widget_ios_2.png)

</TabItem>

</Tabs>

OsmAnd biedt twee soorten coördinatenwidgets:

- **Coördinaten: kaartcentrum** - toont de geografische coördinaten van het huidige kaartcentrum.
- **Coördinaten: huidige locatie** - toont de geografische coördinaten van de huidige geolocatie.

Coördinatenwidgets worden bovenaan het scherm weergegeven. Pictogrammen met een groene achtergrond tonen de breedte- en lengtegraad van het punt in het midden van het zichtbare deel van de kaart, en die met een blauwe achtergrond tonen de coördinaten van uw huidige locatie. Informatie over ondersteunde *Coördinatenformaten* vindt u in het artikel *[Zoekcoördinaten](../search/search-coordinates.md#coordinate-format)*.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="coordinates_widget"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → <Translate ios="true" ids="coordinates"/>* |
| Door te tikken | Kopieert de coördinaten naar het klembord. |
| Formaat | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/> (iOS) of <Translate android="true" ids="configure_profile"/> (Android) → <br/> <Translate ios="true" ids="general_settings_2,units_and_formats,coords_format"/>* |


## GPS-info {#gps-info}

<InfoAndroidOnly />

![GPS Info Android widget](@site/static/img/widgets/gps_info_widget.png)

De GPS (Global Positioning System) informatiewidget toont het aantal satellieten dat het apparaat momenteel detecteert en gebruikt. U kunt het gebruiken om de GPS-status te controleren in geval van een slecht signaal.

U kunt de huidige GPS-cache resetten via:
*<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>*.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_gps_info"/>* |
| Door te tikken | Opent het GPS-statusmenu met tools van derden om het ingebouwde GPS-apparaat te configureren. |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


## Zonpositie {#sun-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zonsondergang en zonsopgang widgets](@site/static/img/widgets/sun_position.png) ![Zonsondergang en zonsopgang widgets](@site/static/img/widgets/sun_position_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zonsondergang en zonsopgang widgets](@site/static/img/widgets/sun_position_4_ios.png) ![Zonsondergang en zonsopgang widgets](@site/static/img/widgets/sun_position_3_ios.png)

</TabItem>

</Tabs>

Zonpositiewidgets tonen de volgende zonsopgang- en zonsondergangtijden voor het midden van de kaart. Wanneer erop getikt wordt, tonen ze de resterende tijd tot de verwachte zonsondergang of zonsopgang. In beide gevallen is de tijd gebaseerd op de geconfigureerde tijd van uw apparaat.

- **<Translate ios="true" ids="map_widget_sun_position"/>**. <Translate ios="true" ids="map_widget_sun_position_desc"/>
- **<Translate ios="true" ids="map_widget_sunrise"/>**. <Translate ios="true" ids="map_widget_sunrise_desc"/>
- **<Translate ios="true" ids="map_widget_sunset"/>**. <Translate ios="true" ids="map_widget_sunset_desc"/>

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_sun_position"/> → <Translate android="true" ids="map_widget_sun_position"/>, <Translate android="true" ids="shared_string_sunrise"/>, <Translate android="true" ids="shared_string_sunset"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="map_widget_sun_position"/> → <Translate ios="true" ids="map_widget_sun_position"/>, <Translate ios="true" ids="map_widget_sunrise"/>, <Translate ios="true" ids="map_widget_sunset"/>* |
| Door te tikken | Schakelen tussen de resterende tijd en de tijd van de volgende zonsopgang/zonsondergang. |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


## Straalmeter {#radius-ruler}

:::note
U kunt hier een meer gedetailleerde beschrijving lezen: **[Straalmeter en Liniaal](../widgets/radius-ruler)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Straalmeter scherm](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Straalmeter"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Straalmeter"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Straalmeter"/></td>
    </tr>
</table>

</TabItem>

</Tabs>

De Straalmeter-widget toont de afstand tussen uw locatie en het middelpunt van de Straalmeter. De straal van de eerste cirkel is gelijk aan [de kaartschaal](../widgets/radius-ruler.md#ruler).

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="radius_ruler_item"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="map_widget_ruler_control"/>* |
| Door te tikken | Wijzigt de status van de widget tussen zwarte schaal, grijstinten en onzichtbare modi. |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |
| Formaat | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |


## Snelheidsmeter {#speedometer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Snelheidsmeter](@site/static/img/widgets/speedometer_1_andr.png) ![Snelheidsmeter](@site/static/img/widgets/speedometer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Snelheidsmeter](@site/static/img/widgets/speedometer_1_ios.png) ![Snelheidsmeter](@site/static/img/widgets/speedometer_2_ios.png)

</TabItem>

</Tabs>

**Snelheidsmeter-widget** is een grafische weergave van de huidige voertuigsnelheid op basis van *gegevens ontvangen van de GPS*. Het stelt u in staat om in real-time de overeenstemming tussen uw snelheid en de toegestane snelheidslimiet te controleren. De toegestane snelheidslimiet wordt geleverd door [OpenStreetMap-gegevens](https://wiki.openstreetmap.org/wiki/Key:maxspeed) voor een bepaald weggedeelte en de OsmAnd [Snelheidslimiet Tolerantie](../navigation/guidance/voice-navigation.md#speed-limit) instelling.

- In de *Snelheidsmeterinstellingen* kunt u de grootte (**Hoogte**) van de widget op het toepassingsscherm selecteren als *Klein*, *Gemiddeld* of *Groot*.
- U kunt opgeven wanneer u een **Snelheidslimietwaarschuwing** wilt ontvangen, door *Altijd* of *Wanneer overschreden* te selecteren.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/speedometer_4_andr.png').default} alt="Snelheidsmeter"/></td>
        <td><img src={require('@site/static/img/widgets/speedometer_4_ios.png').default} alt="Snelheidsmeter"/></td>
    </tr>
</table>

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_other,shared_string_speedometer"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location"/>* *→ Snelheidsmeter* |
| Formaat | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,default_speed_system"/>* |


## Plugin-widgets {#plugin-widgets}

Deze widgets zijn ingeschakeld en werken in combinatie met hun corresponderende plugins.


### Reisopnamewidgets {#trip-recording-widgets}

:::note
U kunt hier een meer gedetailleerde beschrijving lezen: **[<Translate android="true" ids="record_plugin_name"/> plugin](../plugins/trip-recording.md)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![reisopnamewidget](@site/static/img/widgets/wid_trip_rec.png)

</TabItem>

<TabItem value="ios" label="iOS">

![reisopnamewidget](@site/static/img/widgets/widget_trip_recording-_rec_ios.png)

</TabItem>

</Tabs>

Reisopnamewidgets verwijzen naar [<Translate android="true" ids="record_plugin_name"/> plugin](../plugins/trip-recording.md#widgets). U kunt widgets gebruiken om korte informatie over de trackopname op het scherm te bekijken. Zoals *Afstand*, *Duur*, *Omhoog* en *Omlaag*.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_monitoring"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_monitoring"/>* |
| Door te tikken | Start/Stop trackopname of Bekijk de grafiek. |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


### Externe sensoren widgets {#external-sensors-widgets}

:::note
Om externe sensoren widgets toe te voegen aan het kaartscherm, schakelt u de OsmAnd [Externe sensoren plugin](../plugins/external-sensors.md) in.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Externe sensor widgets Android](@site/static/img/widgets/external-sensors-widgets_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![reisopnamewidget](@site/static/img/widgets/external-sensors-widgets_ios.png)

</TabItem>

</Tabs>

Widgets verwijzen naar [Externe sensoren plugin](../plugins/external-sensors.md#widgets). U kunt ze gebruiken om korte informatie van uw externe sensoren te bekijken, zoals: **<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*alleen Android*), **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/>, <Translate android="true" ids="map_widget_ant_bicycle_dist"/>** en **<Translate android="true" ids="external_device_characteristic_temperature"/>**. *Op iOS* kunt u ook het **batterijniveau** van verbonden BLE-sensoren selecteren om direct in de widget te worden weergegeven.

- Om widget toe te voegen — [schakel](../plugins/index.md#enable--disable) OsmAnd Externe sensoren plugin in.

- Om sensoren toe te voegen, selecteert u een van de opties:
  - Ga naar *Menu → Plugins → Externe sensoren → Instellingen → Nieuwe sensor koppelen*.
  - Ga naar *Menu → Scherm configureren → Kies een paneel → Widget toevoegen → Externe sensoren → Kies sensor → Instellingen → Nieuwe sensor koppelen*.

- Voeg widgets toe, zelfs als er geen externe sensor is aangesloten.

- **Alle toegevoegde widgets zijn zichtbaar**, zelfs als er geen externe sensor is aangesloten.

- Gebruik de [Reisopname plugin](../plugins/trip-recording.md#recording-settings) om sensorgegevens op te nemen.

- Lees hier hoe u kiest welke sensor (van hetzelfde type) in de widget moet worden weergegeven [hier](../plugins/external-sensors.md#widget-settings).

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="external_sensor_widgets"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="external_sensors_plugin_name"/>* |
| Door te tikken | Geen wijzigingen (*Android*) / Schakelt de modus tussen Sensorgegevens en Batterijniveau (*iOS*). |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


### Voertuigmetriekwidgets {#vehicle-metrics-widgets}


:::note
Om voertuigmetriekwidgets toe te voegen aan het kaartscherm, schakelt u de OsmAnd [Voertuigmetriekplugin](../plugins/vehicle-metrics.md) in.
:::


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Voertuigmetriekwidgets Android](@site/static/img/widgets/vehicle_metrics_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Voertuigmetriekwidgets Android](@site/static/img/widgets/vehicle_metrics_ios.png)

</TabItem>

</Tabs>


De widgets behoren tot de [Voertuigmetriekplugin](../plugins/vehicle-metrics.md#widgets). U kunt ze gebruiken om informatie van een aangesloten OBD-II-scanner te bekijken, zoals (*13 metrieken*): **Inlaattemperatuur**,&nbsp; **Omgevingstemperatuur**,&nbsp; **Koelvloeistoftemperatuur**,&nbsp; **Motorolietemperatuur**,&nbsp; **Motortoerental** (*gratis*),&nbsp; **Motorlooptijd**,&nbsp; **Berekende motorbelasting**,&nbsp; **Brandstofdruk**,&nbsp; **Brandstofverbruik**,&nbsp; **Resterende brandstof**,&nbsp; **Batterijniveau**,&nbsp; **Voertuigsnelheid** (*gratis*), en **Gasklepstand**.

- Om voertuigmetriekwidgets toe te voegen aan het kaartscherm, [schakel](../plugins/index.md#enable--disable) de **Voertuigmetriekplugin** in.
- U kunt widgets toevoegen, zelfs als er geen OBD-II-scanner is aangesloten.
- Alle toegevoegde widgets zijn zichtbaar, ongeacht of een OBD-II-scanner is aangesloten.
- Om een widget te bewerken, tikt u op de widget die aan het paneel is toegevoegd, tikt u vervolgens op *Instellingen*, of tikt u direct op het *Instellingenpictogram* in het widgetveld.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="obd_widget_group"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="obd_plugin_name"/>* |
| Door te tikken | Geen wijzigingen |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


### Weerwidgets {#weather-widgets}

:::note
Om weerwidgets toe te voegen aan het kaartscherm, schakelt u de OsmAnd [Weerplugin](../plugins/weather.md) in.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Weerwidget Android](@site/static/img/widgets/weather_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Weerwidget iOS](@site/static/img/widgets/weather_widgets_ios.png)

</TabItem>

</Tabs>

Weerwidgets tonen actuele weersinformatie voor een centraal punt op de kaart. Ze worden automatisch ingeschakeld op het scherm wanneer ze met de plugin worden bekeken (*Menu → Weer*), en u kunt kiezen welke u op het startscherm wilt plaatsen voor dagelijks gebruik (*Menu → Scherm aanpassen*). U kunt hier meer over lezen in het artikel [Weerplugin](../plugins/weather.md).

- **Temperatuur**. <Translate android="true" ids="temperature_widget_desc"/>
- **Luchtdruk**. <Translate android="true" ids="air_pressure_widget_desc"/>
- **Wind**. <Translate android="true" ids="wind_widget_desc"/>
- **Wolken**. <Translate android="true" ids="clouds_widget_desc"/>
- **Neerslag**. <Translate android="true" ids="precipitation_widget_desc"/>

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="shared_string_weather"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="shared_string_weather"/>* |
| Door te tikken | Toont in een pop-up dialoogvenster de datum en tijd waarop de weersinformatie relevant is. |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |
| Formaat | *Menu → Plugins → Weer → Instellingen* of *Menu → Instellingen → App-profiel → Weer* |


### Parkeerwidget {#parking-widget}

:::note
Om parkeerwidgets toe te voegen aan het kaartscherm, schakelt u de OsmAnd [Parkeerpositieplugin](../plugins/parking.md) in.
:::

![Parkeerwidget](@site/static/img/plugins/parking/parking_widget.png)

De Parkeerplugin-widget toont de afstand van het midden van het scherm tot de parkeerlocatie. Om een parkeerplek op de kaart in te stellen, zoomt u in tot het gewenste niveau en tikt u lang op de plek op de kaart om het contextmenu te openen. Volg [deze instellingen](../plugins/parking.md#set-a-spot).

**Opmerking:** De Parkeerwidget verschijnt alleen als er een parkeerpositie aan de kaart is toegevoegd. Zonder een opgeslagen parkeerpositie is de widget niet zichtbaar.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_parking"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="parking_place"/>* |
| Door te tikken | Verplaatst de kaartweergave naar de parkeerpositie. |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |
| Formaat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


### Mapillary Widget {#mapillary-widget}

:::note
Om de Mapillary-widget aan het kaartscherm toe te voegen, schakelt u de OsmAnd [Mapillary-plugin](../plugins/mapillary.md) in.
:::

![Mapillary widget](@site/static/img/widgets/mapillary_widget.png)

Dit is een Mapillary plugin-widget die snelle toegang biedt tot de Mapillary-applicatie, waarmee u [*street-level imagery*](../plugins/mapillary.md#enable-layer) kunt toevoegen. De widget wordt automatisch aan de kaart toegevoegd wanneer de plugin is ingeschakeld.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="mapillary"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="mapillary"/>* |
| Door te tikken | Opent de [Mapillary](https://www.mapillary.com/) applicatie. |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


### Audio/Video Notities Widget {#audiovideo-notes-widget}

<InfoAndroidOnly />

:::note
Om Audio/Video Notities widgets toe te voegen aan het kaartscherm, schakelt u de OsmAnd [Audio/Video Notities plugin](../plugins/audio-video-notes.md) in.
:::

![Audio-video notities widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

Dit zijn Audio/video notities plugin-widgets die snelle toegang bieden om audio-, video- of fotonotities te starten/stoppen.

U kunt configureren welke actie standaard is geselecteerd:

- *Op aanvraag*. Standaardstatus. Elke keer wordt het dialoogvenster voor actieselectie weergegeven.
- *Audio opnemen* - neemt een audionotitie op.
- *Video opnemen* - stelt u in staat een video op te nemen.
- *Foto maken* - stelt u in staat een foto te maken.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_av_notes"/>* |
| Door te tikken | Start / stopt het maken van een notitie |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


### Tracker Widget {#tracker-widget}

<InfoAndroidOnly />

:::note
Om de Tracker-widget aan het kaartscherm toe te voegen, schakelt u de OsmAnd [Tracker-plugin](../plugins/osmand-tracker.md) in.
:::

Om de plugin en widget te laten werken, moet u [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) installeren via Google Play of andere bronnen.

Deze OsmAnd Tracker plugin-widget wordt gebruikt om snel toegang te krijgen tot de OsmAnd Tracker-app en uw locatie-informatie te delen met andere gebruikers. De app stuurt *Live Locatie*-berichten naar geselecteerde chats binnen een bepaalde tijd, toont een lijst met contacten en groepen, en controleert chats op berichten met uw locatie, die vervolgens op een kaart in OsmAnd worden weergegeven.

![Tracker widget](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="tracker_item"/>* |
| Door te tikken | Opent de OsmAnd Online GPS Tracker-app. |


### Ontwikkelaarswidgets {#developer-widgets}

:::note
Om ontwikkelaarswidgets toe te voegen aan het kaartscherm, schakelt u de OsmAnd [OsmAnd ontwikkelingsplugin](../plugins/development.md) in.
:::

**Ontwikkelaarswidgets** bieden informatie over de [rendersnelheid van de kaart](../plugins/development.md#map-rendering-fps-widget) en virtuele camerapositieparameters, inclusief [zoomniveau](../plugins/development.md#zoom-level), [afstand](../plugins/development.md#distance-to-target) tot het kaartcentrum, [camera-elevatie](../plugins/development.md#camera-elevation) en [kantelhoek van de camera](../plugins/development.md#camera-tilt).

#### Kaartweergave FPS {#map-rendering-fps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![FPS widget Android](@site/static/img/widgets/fps_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![FPS widget iOS](@site/static/img/widgets/fps_widget_ios.png)

</TabItem>

</Tabs>

De [Kaartweergave FPS-widget](../plugins/development.md#map-rendering-fps-widget) toont de weergavesnelheid van de kaart en de elementen ervan, gemeten in frames per seconde (FPS). Een hogere FPS-waarde duidt op snellere weergave en vloeiendere visuele prestaties.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_rendering_fps"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="developer_widgets,map_widget_rendering_fps"/>* |
| Door te tikken | Geen wijzigingen |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


#### Camera-widgets {#camera-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Camerapositie widgets](@site/static/img/widgets/camera_position_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camerapositie Widgets 2](@site/static/img/widgets/camera_position_widgets_2_ios.png)

</TabItem>

</Tabs>

De **Camera-widgets** stellen u in staat om de uitlijning tussen de OsmAnd-kaart en het aardoppervlak te controleren.

- [Camerakanteling](../plugins/development.md#camera-tilt). Toont de kantelhoek van de camera in perspectiefmodus. De standaardwaarde is 90° (geen kanteling).
- [Camera-elevatie](../plugins/development.md#camera-elevation). Geeft de elevatie van de camera boven het oppervlakteniveau aan.
- [Zoomniveau](../plugins/development.md#zoom-level). <Translate android="true" ids="map_widget_zoom_level_desc"/>
- [Afstand van camera tot doel](../plugins/development.md#distance-to-target). Meet de afstand tussen de camera en de doellocatie op de kaart.

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="developer_widgets"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="developer_widgets"/>* |
| Door te tikken | Schakelen tussen modi (*Zoomniveau*) / Geen wijzigingen (*Overige*) |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


#### Beschikbaar RAM {#available-ram}

<InfoAndroidOnly />

![Gemiddelde snelheid widgets](@site/static/img/widgets/available_RAM_2_andr.png)

De **Beschikbaar RAM** widget is een hulpmiddel voor het monitoren van het geheugengebruik van uw apparaat in relatie tot OsmAnd. Het biedt gedetailleerde gegevens om de applicatieprestaties te helpen optimaliseren.

- **Applicatie RAM Beschikbaar.** Toont de hoeveelheid RAM die beschikbaar is voor OsmAnd om te gebruiken zonder prestatieproblemen te veroorzaken.

- **Applicatie RAM Gebruik** — Toont het huidige RAM-verbruik door OsmAnd.

- **Totaal Applicatie RAM** — Geeft het totale geheugen aan dat aan OsmAnd is toegewezen, inclusief zowel gebruikt als beschikbaar geheugen.

> **OPMERKING**. *Het *totaal beschikbare RAM* kan variëren afhankelijk van achtergrondprocessen en andere applicaties die op uw apparaat draaien. Deze waarden zijn dynamisch en bieden een manier om het geheugengebruik te volgen en te beheren voor consistente en efficiënte OsmAnd-prestaties.*

| | |
|:------------|:------------|
| Inschakelen | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="developer_widgets"/> → *Beschikbaar RAM* |
| Door te tikken | Geen wijzigingen |
| Lang tikken | Opent het [Contextmenu van de widget](../widgets/configure-screen.md#widget-context-menu) |


## Gerelateerde artikelen {#related-articles}

- [Scherm configureren](./configure-screen.md)
- [Kaartknoppen](./map-buttons.md)
- [Navigatiewidgets](./nav-widgets.md)
- [Straalmeter en Liniaal](./radius-ruler.md)
- [Markeringswidgets](./markers.md)
- [Snelle actie](./quick-action.md)

> *Laatst bijgewerkt: april 2025*