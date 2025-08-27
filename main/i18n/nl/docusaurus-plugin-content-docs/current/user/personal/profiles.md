---
source-hash: fc459398704a8d2bfa0f43cc8e873a69dba20960f781c8cd3153d34ffdf7234f
sidebar_position: 4
title:  Profielen (Instellingen)
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

OsmAnd biedt een verscheidenheid aan standaardprofielen die zijn afgestemd op verschillende activiteiten, waaronder autorijden, fietsen, wandelen en meer gespecialiseerde activiteiten zoals skiën en varen. Deze profielen zijn ontworpen om uw navigatie-ervaring te verbeteren, afhankelijk van de activiteit die u uitvoert. Elk profiel bevat configureerbare opties, zodat u instellingen kunt aanpassen en extra plug-ins kunt toevoegen om aan uw voorkeuren te voldoen.

- Bepaalde profielen, zoals *Skiën* en *Boot*, hebben **extra functies** die alleen beschikbaar komen wanneer de bijbehorende plug-ins zijn ingeschakeld.

     - Plug-ins kunnen worden geactiveerd door te navigeren naar *Menu → Plug-ins → Skikaartweergave* of *Nautische kaartweergave*.
     - Het inschakelen van de plug-ins voorziet de profielen van de essentiële functies om aan de specifieke eisen van deze activiteiten te voldoen.

- Het is belangrijk op te merken dat sommige profielen, zoals **Vrachtwagen**, **Motorfiets**, **Bromfiets**, **Trein**, **Vliegtuig**, **Boot** en **Paardrijden**, niet standaard zijn geactiveerd.

     - Om deze profielen te openen en te gebruiken, moet u ze handmatig inschakelen in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
     - Deze methode helpt een georganiseerde en relevante lijst met profielen te behouden door alleen die te activeren die nodig zijn voor specifieke activiteiten.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile"/>* (Kaart bekijken of een ander profiel)
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Profielinstellingen Android](@site/static/img/personal/profiles/profile_settings_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Profielinstellingen iOS](@site/static/img/personal/profiles/profile_settings_ios.png)

</TabItem>

</Tabs>


## Profielconfiguratie {#profile-configuration}

:::caution Instellingen alleen toepassen op een specifiek profiel
Alle instellingen zijn uitsluitend van toepassing op het momenteel geselecteerde applicatieprofiel.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Profielinstellingen Android](@site/static/img/personal/profiles/profile_settings_menu_1_andr.png)  ![Profielinstellingen Android](@site/static/img/personal/profiles/profile_settings_menu_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profielinstellingen iOS](@site/static/img/personal/profiles/profile_settings_menu_2_ios.png)

</TabItem>

</Tabs>

Deze sectie bevat alle instellingen met betrekking tot uiterlijk, navigatieopties, kaartweergave, instellingenmenu en profielscherm.


### Gratis cloudback-up {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_profile"/>*

![Functies favorietenmap Android](@site/static/img/personal/profile_settings_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Favorietenacties iOS](@site/static/img/personal/profile_settings_free_backup_ios.png)

</TabItem>

</Tabs>

OsmAnd stelt u in staat [een back-up te maken](../personal/osmand-cloud.md#osmand-start) van uw applicatieprofielinstellingen naar OsmAnd Cloud, zodat uw configuraties veilig worden opgeslagen en eenvoudig kunnen worden hersteld op Android-, iOS- en webversies. Deze back-upfunctie beschermt uw instellingen in geval van apparaatstoring of herinstallatie van de app. U kunt profiteren van dit speciale plan met [OsmAnd Start](../personal/osmand-cloud.md#osmand-start).  

U moet een [OsmAnd Cloud](../personal/osmand-cloud.md#login) account hebben om de *Gratis instellingenback-up* te gebruiken. Als u een *OsmAnd Pro* abonnement of een actief *OsmAnd Cloud* account heeft, wordt de promotiebanner niet weergegeven.


## Algemene instellingen {#general-settings}

Deze sectie bevat instellingen voor het applicatiethema en de kompasbutton, kaart- en profieldata-eenheden en -formaten, externe invoerapparaten en vele andere instellingen om de optimale configuratie voor uw gekozen profiel te creëren.

### Uiterlijk {#appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_appearance"/>*

![Profielen Algemene instellingen Uiterlijk Android](@site/static/img/personal/profiles/profiles_appearance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_appearance"/>*

![Profielen Algemene instellingen Uiterlijk iOS](@site/static/img/personal/profiles/profiles_appearance_3_ios.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="choose_osmand_theme"/>**. Hiermee kunt u een dag- en nachtthema voor de app instellen, dat op één profiel of op alle profielen tegelijk kan worden toegepast. Deze optie wijzigt de instellingen van de [kaartmodus](../map/vector-maps.md#map-mode) niet.
  - *<Translate android="true" ids="dark_theme"/> thema*
  - *<Translate android="true" ids="light_theme"/> thema*
  - *<Translate android="true" ids="system_default_theme"/>*  
      Past het systeemthema toe. Standaard, en voor alle nieuwe gebruikers, komt de kaartstijl overeen met het lichte of donkere thema dat is geselecteerd in de systeeminstellingen van uw apparaat.
- **<Translate android="true" ids="rotate_map_to"/>**. Hiermee kunt u de [kaartoriëntatiemodus](../map/interact-with-map.md#map-orientation-modes) voor het geselecteerde profiel kiezen.
  - *<Translate android="true" ids="rotate_map_manual_opt"/>*
  - *<Translate android="true" ids="rotate_map_bearing_opt"/>*
  - *<Translate android="true" ids="rotate_map_compass_opt"/>*
  - *<Translate android="true" ids="rotate_map_north_opt"/>*

- **<Translate android="true" ids="map_screen_orientation"/>**. Stelt de schermpositie in de OsmAnd-applicatie in en vergrendelt deze. Deze functie wordt niet ondersteund op iPad.
  - *<Translate android="true" ids="map_orientation_portrait"/>*
  - *<Translate android="true" ids="map_orientation_landscape"/>*
  - *<Translate android="true" ids="map_orientation_default"/>*  

- **[<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)** (*Alleen Android*). Opent het schermbedieningsmenu, waar u opties kunt selecteren voor het apparaatscherm tijdens navigatie om het batterijverbruik van het apparaat te besparen.  


### Eenheden & formaten {#units--formats}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Profielen Algemene instellingen Eenheden & formaten Android](@site/static/img/personal/profiles/profiles_units_formats_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profielen Algemene instellingen Eenheden & formaten iOS](@site/static/img/personal/profiles/profile_unitsformats_3_ios.png)

</TabItem>

</Tabs>

In de sectie **Eenheden en formaten** kunt u meeteenheden en formaten aanpassen aan uw persoonlijke voorkeuren en regionale standaarden, zodat alle gegevens gemakkelijk en vertrouwd worden weergegeven.


<!--

<table>
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Format</th>
            <th>Note</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4 align="left">**<Translate android="true" ids="driving_region"/>**</td>
            <td rowspan=2 align="left"><Translate android="true" ids="shared_string_automatic"/></td>
            <td align="left">According to the device location.</td>
        </tr>
        <tr>
            <td rowspan=2 align="left"><Translate android="true" ids="driving_region_europe_asia"/></td>
            <td align="left"><Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_km_m"/></td>
        </tr>
        <tr>
            <td align="left"><Translate android="true" ids="driving_region_us"/></td>
            <td align="left"><Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_mi_feet"/></td>
        </tr>
    </tbody>
</table>

-->

|  |  |  |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="driving_region"/>** | <Translate android="true" ids="shared_string_automatic"/> | <ul><li>Volgens de apparaatlocatie</li></ul> |
|            | <Translate android="true" ids="driving_region_europe_asia"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_us"/>   |  <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_mi_feet"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_canada"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_uk"/>  |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_mi_meters"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_japan"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_india"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_australia"/>   |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|  |  |  |
| **<Translate android="true" ids="unit_of_length"/>** | <Translate android="true" ids="si_km_m"/> | 1 km / 1000 m |
|          | <Translate android="true" ids="si_mi_feet"/> | 0,62 mijl / 3281 ft (1000 m) |
|          | <Translate android="true" ids="si_mi_meters"/> | 0,62 mijl / 1000 m |
|          | <Translate android="true" ids="si_mi_yard"/> | 1094 yd / 0,62 mijl (1000 m) |
|          | <Translate android="true" ids="si_nm_ft"/>, <Translate android="true" ids="si_nm_mt"/> | 0,54 zeemijl / 3280,84 ft / 1000 m |
|  |  |  |
| **<Translate android="true" ids="coordinates_format"/>** | <Translate android="true" ids="dd_mm_mmmm_format"/> | Voorbeeld: 50.12333° 19.93233° (Breedtegraad Lengtegraad) |
|          | <Translate android="true" ids="dd_mm_mmm_format"/> | Voorbeeld: 50°7.393′ 19°55.941′ (Breedtegraad Lengtegraad)  |
|          | <Translate android="true" ids="dd_mm_ss_format"/> | Voorbeeld: 50°7′23.6″ 19°55′56.4″ (Breedtegraad Lengtegraad) 23°27′30″ |
|          | <Translate android="true" ids="navigate_point_format_utm"/> | 34N 5552876 423678 (Zone Noord Oost) . [<Translate android="true" ids="utm_format_descr"/>](https://nl.wikipedia.org/wiki/Universele_Transversale_Mercatorco%C3%B6rdinaten) |
|          | <Translate android="true" ids="navigate_point_format_mgrs"/> | Voorbeeld: 34U DA 23678 52873 . [<Translate android="true" ids="mgrs_format_descr"/>](https://nl.wikipedia.org/wiki/Military_Grid_Reference_System)  |
|          | <Translate android="true" ids="navigate_point_format_olc"/> | Voorbeeld:  9F2X4WFJ+7W ([Open Location Code](https://nl.wikipedia.org/wiki/Open_Location_Code) vertegenwoordigt gebied 9m x 14m)  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid"/> (Alleen Android-versie) | Voorbeeld: 2 215 227.87, 830 915.9 ([Zwitsers coördinatensysteem](https://nl.wikipedia.org/wiki/Zwitsers_co%C3%B6rdinatensysteem#:~:text=Het%20Zwitserse%20co%C3%B6rdinatensysteem%20(of,Office%20of%20Topography%20(Swisstopo).)))  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid_plus"/> (Alleen Android-versie) | Voorbeeld: 4 215 227.87, 1 830 915.9 ([Zwitsers coördinatensysteem](https://nl.wikipedia.org/wiki/Zwitsers_co%C3%B6rdinatensysteem#:~:text=Het%20Zwitserse%20co%C3%B6rdinatensysteem%20(of,Office%20of%20Topography%20(Swisstopo).))) |
|  |  |  |
| **<Translate android="true" ids="angular_measeurement"/>** (*Android*) / **<Translate ios="true" ids="angular_units"/>** (iOS)| Graden 180° | Alle hoekwaarden hebben aflezingen van 0° tot 180° en van 0° tot -180°.  |
|          | Graden 360° | Alle hoekwaarden hebben aflezingen van 0° tot 360°.  |
|          | <Translate android="true" ids="shared_string_milliradians"/> | Alle hoekwaarden hebben een [milliradiaanwaarde](https://nl.wikipedia.org/wiki/Milliradiaal).  |
|  |  |  |
| **<Translate android="true" ids="default_speed_system"/>** (*Android*) / **<Translate ios="true" ids="units_of_speed"/>** (iOS)| <Translate android="true" ids="si_kmh"/> | 90 km/u  |
|          | <Translate android="true" ids="si_mph"/> | 55,92 mph  |
|          | <Translate android="true" ids="si_m_s"/> | 30 m/s |
|          | <Translate android="true" ids="si_min_m"/> | 1,073 min/m |
|          | <Translate android="true" ids="si_min_km"/> | 0,667 min/km |
|          | <Translate android="true" ids="si_nm_h"/> | 48,59 kn |
|  |  |  |
| **<Translate android="true" ids="unit_of_volume"/>** | <Translate android="true" ids="litres"/> | Europa, Azië, Latijns-Amerika, Canada, Japan, India, Australië |
|  | <Translate android="true" ids="imperial_gallons"/> | VK en vergelijkbaar |
|  | <Translate android="true" ids="us_gallons"/> | Verenigde Staten |
|  |  |  |
| **<Translate android="true" ids="shared_string_temperature"/>** (*Alleen Android*)| <Translate android="true" ids="system_default_theme"/> |  |
|  | <Translate android="true" ids="weather_temperature_celsius"/> |  |
|  | <Translate android="true" ids="weather_temperature_fahrenheit"/> |  |
|  |  |  |
| **<Translate android="true" ids="distance_during_navigation"/>** | <Translate android="true" ids="precise"/> | *Voor precieze metingen*, kies hoe afstandsinformatie wordt weergegeven in de navigatiewidgets, zoals de afstand tot een punt, de volgende afslag of een specifieke rijstrook. |
|          | <Translate android="true" ids="round_up"/> | *Voor betere leesbaarheid* worden de getallen die in de navigatiewidgets worden weergegeven (afstand tot een punt, volgende afslag of rijstrook) naar beneden afgerond om minder cijfers te hebben. <br/> Bijvoorbeeld: 3672 m *→* 3,6 km,&nbsp; 462 m *→* 400 m,&nbsp; 184 m *→* 150 m,&nbsp; 47 m *→* 40 m,&nbsp; 18 m *→* 15 m. |


### Overig {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_other"/>*

![Profielen Algemene instellingen Overig Android](@site/static/img/personal/profiles/profile_general_settings_other_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_others"/>*

![Profielen Algemene instellingen Overig iOS](@site/static/img/personal/profiles/profile_general_settings_other_ios.png)  

</TabItem>

</Tabs>

De sectie **Overig** biedt aanvullende profielinstellingen om de interface en invoerbediening van OsmAnd aan te passen. Met deze instellingen kunt u externe apparaten configureren, animatievoorkeuren aanpassen en de volledigschermmodus in- of uitschakelen.

- [<Translate android="true" ids="external_input_device"/>](../map/interact-with-map.md#external-input-devices) – Sluit externe controllers aan zoals *<Translate ios="true" ids="sett_wunderlinq_ext_input"/>*, *<Translate ios="true" ids="sett_generic_ext_input"/>*, of *<Translate android="true" ids="sett_parrot_ext_input"/>* om OsmAnd te bedienen met fysieke knoppen.

- **<Translate android="true" ids="use_volume_buttons_as_zoom"/>** (*Alleen Android*) – Schakel de mogelijkheid in of uit om de volumeknoppen van uw apparaat te gebruiken voor het [in- en uitzoomen](../map/interact-with-map.md#my-location-and-zoom) op de kaart.

- [<Translate android="true" ids="use_kalman_filter_compass"/>](../map/interact-with-map.md#extra-compass-settings) (*Alleen Android*) – Vloeiende kaartrotatie met [geleidelijke beweging](https://nl.wikipedia.org/wiki/Kalmanfilter), waardoor plotselinge positieverschuivingen worden verminderd. Dit introduceert een kleine vertraging (*minder dan 1 seconde*).

- [<Translate android="true" ids="use_magnetic_sensor"/>](../map/interact-with-map.md#extra-compass-settings) (*Alleen Android*) – Gebruikt de [magnetische sensor](https://nl.wikipedia.org/wiki/Kalmanfilter) van uw apparaat om de kaartrotatie te stabiliseren, waardoor abrupte veranderingen worden verminderd. Dit introduceert ook een lichte vertraging.

- **<Translate android="true" ids="tap_on_map_to_hide_interface"/>** (*Alleen Android*) – Tik op een lege plek op de kaart om bedieningsknoppen en widgets te verbergen, waardoor de zichtbaarheid van de kaart wordt gemaximaliseerd.

- [<Translate android="true" ids="do_not_use_animations"/>](../map/interact-with-map.md#no-animations) (*Alleen Android*) – Schakel animaties in de navigatiemodus uit voor snellere schermovergangen.

- **<Translate android="true" ids="position_animation"/>** (*Alleen Android*) – Het [positie](../map/interact-with-map.md#my-location-and-zoom) pictogram animeert met elk ontvangen GPS-punt (één keer per seconde). Een lichte vertraging in de beweging kan merkbaar zijn, vooral tijdens snelle bewegingen of GPS-signaalfluctuaties. U kunt dit effect aanpassen met de instelling *Voorspellingstijd*: hogere waarden verhogen de vloeiendheid maar voegen vertraging toe, lagere waarden verminderen de vertraging maar kunnen de beweging minder vloeiend maken.


## Navigatie-instellingen {#navigation-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigatie-instellingen iOS](@site/static/img/navigation/navigation_settings_overview_2_ios.png)

</TabItem>

</Tabs>

Voor een gedetailleerd overzicht van navigatieopties, raadpleeg het artikel [Navigatie-instellingen](../navigation/guidance/navigation-settings.md), waarin wordt uitgelegd hoe u OsmAnd configureert voor een optimale navigatie-ervaring.

- [Navigatietype](../navigation/guidance/navigation-settings.md#navigation-type) - Kies de juiste navigatiemodus op basis van uw reismethode en internetbeschikbaarheid.

- [Routeparameters](../navigation/guidance/navigation-settings.md#route-parameters) - Definieer hoe OsmAnd routes berekent, inclusief voorkeuren voor het vermijden van bepaalde wegen of het selecteren van routetypes.

- [Schermwaarschuwingen](../navigation/guidance/navigation-settings.md#screen-alerts) - Schakel de *Waarschuwingenwidget* in om realtime meldingen weer te geven voor snelheidslimieten, afslagen en andere belangrijke wegomstandigheden.

- [Gesproken aanwijzingen](../navigation/guidance/navigation-settings.md#voice-prompts) - Schakel audiogeleiding in om gesproken navigatie-instructies te ontvangen tijdens het rijden of wandelen langs een geselecteerde route.

- [Voertuigparameters](../navigation/guidance/navigation-settings.md#vehicle-parameters) – Configureer voertuigspecifieke instellingen zoals maximale snelheid en voertuighoogte om nauwkeurige routering te garanderen en beperkte wegen te vermijden.

- [Route lijn aanpassen](../navigation/guidance/navigation-settings.md#customize-route-line) – Pas de kleur, breedte en stijl van de routelijn op de kaart aan voor betere zichtbaarheid tijdens navigatie.

- [Kaart tijdens navigatie](../navigation/guidance/navigation-settings.md#map-during-navigation) – Bekijk realtime positionering op de kaart, volg de voortgang langs de route en verbeter de oriëntatie met behulp van herkenningspunten.

- [Gedetailleerde trackbegeleiding](../navigation/guidance/navigation-settings.md) – Verbeter turn-by-turn navigatie door uw route af te stemmen op de in kaart gebrachte wegen. Beschikbare instellingen: *Elke keer vragen* of *Altijd*.

:::info
Er zijn geen navigatie-instellingen in het profiel *Kaart bekijken*.  
:::


## Kaart configureren {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,configure_map"/>*  
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* *→ Kaart configureren*

![Profielen Kaartinstellingen configureren Android](@site/static/img/personal/profiles/profile_configure_map_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,configure_map"/>*  

![Profielen Kaartinstellingen configureren iOS](@site/static/img/personal/profiles/profile_configure_map_ios.png)

</TabItem>

</Tabs>

Het menu [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) stelt u in staat om de weergave-instellingen van de kaart voor het geselecteerde profiel aan te passen, waardoor een betere visualisatie van belangrijke kaartelementen mogelijk wordt.  

Met dit menu kunt u:

- **Belangrijke kaartelementen markeren**, inclusief [Favoriete punten](../personal/favorites.md), [Navigatiemarkeringen](../personal/markers.md), of speciale [Interessante plaatsen (POI's)](../map/point-layers-on-map.md#points-of-interest-pois) op de kaart.

- **Specifieke routes en GPX-bestanden weergeven**, inclusief tracks van derden voor navigatie of analyse.

- **Aanvullende kaartlagen overlayen**, zoals [terreininfo](../plugins/topography.md), **satellietbeelden**, of andere beschikbare [rasterkaarten](../map/raster-maps.md).

- **Visualisatie van openbaar vervoer inschakelen**, met [routes en haltes](../map/public-transport.md) voor een betere reisplanning.

- **Kaartweergave aanpassen** door een andere [kaartstijl](../map/vector-maps.md#default-map-styles) te selecteren die aan uw behoeften voldoet.


## Scherm configureren {#configure-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  
- Ga naar: *Menu → Instellingen → App-profiel → Scherm configureren*

![Schermmenu configureren](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Schermmenu configureren](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Schermmenu configureren](@site/static/img/widgets/configure_screen_overview_ios_1.png)  ![Schermmenu configureren](@site/static/img/widgets/configure_screen_overview_ios_2.png)

</TabItem>

</Tabs>

De [<Translate android="true" ids="map_widget_config"/>](../widgets/configure-screen.md) is een menu waarmee u de widgets voor het geselecteerde profiel kunt configureren die op de kaart moeten worden weergegeven. Op dit scherm kunt u [Informatieve](../widgets/info-widgets.md) en [Navigatie](../widgets/nav-widgets.md) widgets, evenals andere items, inschakelen en configureren.


## Profieluiterlijk {#profile-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![Profieluiterlijk](@site/static/img/personal/profiles/profile_appearance_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![Profieluiterlijk](@site/static/img/personal/profiles/profile_appearance_1_ios.png)

</TabItem>

</Tabs>

De instellingen voor **Profieluiterlijk** stellen u in staat om de naam en visuele weergave van uw profiel aan te passen. U kunt hier ook het uiterlijk van [Mijn locatie](#my-location-appearance) wijzigen. Hoewel de *profielnaam* uniek moet zijn, kunnen *pictogrammen* en *kleuren* hetzelfde zijn voor verschillende profielen. Deze wijzigingen worden toegepast in verschillende delen van de applicatie, zoals het menu [Routevoorbereiding](../navigation/setup/route-navigation.md).


### Uiterlijk van mijn locatie {#my-location-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![Uiterlijk van mijn locatie](@site/static/img/personal/profiles/location_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![Uiterlijk van mijn locatie](@site/static/img/personal/profiles/location_appearance_2_ios.png)

</TabItem>

</Tabs>

De instellingen voor **Uiterlijk van mijn locatie** stellen u in staat om aan te passen hoe uw locatie op de kaart wordt weergegeven, zowel wanneer u stilstaat als wanneer u in beweging bent. Beweging wordt door het besturingssysteem gedetecteerd wanneer de apparaatsnelheid **groter is dan nul**.

#### 1. Kijkhoek en locatiebereik {#1-view-angle-and-location-radius}

U kunt de visuele elementen met betrekking tot uw locatie aanpassen en deze afzonderlijk of samen toepassen voor **Rustende** en **Navigatie** posities. Voor zowel 2D- als 3D-modi worden *Kijkhoek* en *Locatiebereik* weergegeven in dezelfde kleur die is geselecteerd voor het [navigatieprofiel](#profile-appearance), direct onder het pictogram [Mijn locatie](../map/interact-with-map.md#my-location-and-zoom).

- **<Translate android="true" ids="view_angle"/>** – Geeft een **kegelvormig** gebied weer dat de richting aangeeft waarin u momenteel kijkt.  
- **<Translate android="true" ids="location_radius"/>** – Toont een **cirkelvormig gebied** rond uw pictogram, dat de nauwkeurigheid van uw huidige locatie weergeeft.


#### 2. Aangepaste 3D-pictogrammen {#2-custom-3d-icons}

Voor een meer gepersonaliseerde ervaring kunt u **aangepaste 3D-pictogrammen** maken en toevoegen aan OsmAnd.  

***Hoe een aangepast 3D-locatiepictogram toe te voegen:***

1. **Maak een 3D-model**. Ontwerp uw pictogram in [MTL- en OBJ-formaten](https://nl.wikipedia.org/wiki/Wavefront_.obj_file).

2. **Integreer het model in OsmAnd:**  
   - Ontwikkel een [aangepaste plug-in](../plugins/custom.md) met behulp van het meegeleverde [plug-in voorbeeld](https://osmand.net/uploads/plugins/model.plugin/1/model.plugin-1.osf).  
   - Plaats uw 3D-pictogrambestanden in de volgende paden:  

     `..osmand/models/icon_folder_name/custom_3d_file.mtl`  
     `..osmand/models/icon_folder_name/custom_3d_file.obj`

   - U kunt ook de **MTL- en OBJ-bestanden** rechtstreeks naar de OsmAnd-map kopiëren met dezelfde mapstructuur.  

#### 3. Kaartoriëntatiemodi {#3-map-orientation-modes}

U kunt bepalen hoe het pictogram **Mijn locatie** zich gedraagt met behulp van verschillende [kaartoriëntatiemodi](../widgets/map-buttons.md#compass).  

- Als het locatiepictogram **schommelt of roteert** terwijl het stilstaat, schakelt u over van **Bewegingsrichtingmodus** ([Kaart roteren op koers](../map/interact-with-map.md#rotate-map-by-bearing)) naar een andere modus.  
- Pas aanvullende instellingen aan in *Menu → Instellingen → App-profielen → Profieluiterlijk → Opties*.
- Meer informatie over koers- en richtingsvolging vindt u in de sectie [Koerswidget](../widgets/nav-widgets#bearing-widget).  


## UI-aanpassing {#ui-customization}

<InfoAndroidOnly />

:::note Voor ongebruikte plug-ins
Om alle controleparameters van ongebruikte [plug-ins](../plugins/index.md#configure-plugin) te verbergen, schakelt u deze uit.
:::

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,ui_customization"/>*

![Profiel UI-aanpassing Android](@site/static/img/personal/profiles/profile_ui_customization_android.png)  

Met de UI-aanpassingsfunctie kunt u het aantal items in acties zoals [<Translate android="true" ids="shared_string_drawer"/>](../start-with/main-menu.md#customize-advanced-use-of-android), [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) en [<Translate android="true" ids="context_menu_actions"/>](../map/map-context-menu.md) aanpassen. Informatie over het aantal toegevoegde items van alle mogelijke items vindt u onder de titel van elke functie.


### Lade {#drawer}

![Profiel Lade Android](@site/static/img/personal/profiles/profile_drawer_moving_android.png)  ![Profiel Reset Android](@site/static/img/personal/profiles/profile_drawer_reset_item_android.png)  

- **Hoofd zichtbare items** - In de sectie *UI aanpassen* kunt u items uit de [Lade](../start-with/main-menu.md#customize-advanced-use-of-android) *herschikken, verbergen en herstellen* om aan uw voorkeuren te voldoen.

- **<Translate android="true" ids="reset_to_default"/>** - Herstelt de *oorspronkelijke lijst met items* in de lade, waardoor eventuele aanpassingen onmiddellijk ongedaan worden gemaakt.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Hiermee kunt u de *lade-indeling* van een ander OsmAnd-profiel kopiëren om een consistente instelling over profielen heen te behouden.

### De kaart configureren {#configuring-the-map}

![Profiel Kaartmenu configureren Android](@site/static/img/personal/profiles/profile_configure_map_visible_andr.png) ![Profiel Kaartmenu configureren Android](@site/static/img/personal/profiles/profile_configure_map_show_andr.png)

- **Kaartmenu configureren** - In de sectie *UI aanpassen* kunt u items uit het menu [Kaart configureren](../map/configure-map-menu.md) *herschikken of verbergen*, waardoor u snel toegang krijgt tot veelgebruikte instellingen.

- **<Translate android="true" ids="reset_to_default"/>** - Herstelt de *oorspronkelijke itemlijst* in het menu Kaart configureren, waardoor eventuele wijzigingen worden verwijderd.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Kopieert de *indeling van het menu Kaart configureren* van een ander OsmAnd-profiel.


### Contextmenu-acties {#context-menu-actions}

![Profiel Contextmenu Android](@site/static/img/personal/profiles/profile_context_menu_visible_andr.png)  ![Profiel Kaartmenu configureren Reset Android](@site/static/img/personal/profiles/profile_context_menu_hidden_2_andr.png)

- **Kaartcontextmenu** - In de sectie UI aanpassen kunt u items in het [kaartcontextmenu](../map/map-context-menu.md) herschikken of verbergen om de toegang tot veelgebruikte functies te optimaliseren.

- **<Translate android="true" ids="reset_to_default"/>** – Herstelt de *standaard itemlijst* in het kaartcontextmenu, waardoor eventuele wijzigingen onmiddellijk ongedaan worden gemaakt.

- **<Translate android="true" ids="copy_from_other_profile"/>** – Kopieert de *contextmenu-indeling* van een ander OsmAnd-profiel om consistentie tussen verschillende profielen te behouden.


## Plug-ininstellingen {#plugin-settings}

:::caution Toegang tot plug-ininstellingen
Om toegang te krijgen tot de instellingen van de plug-in, moet u eerst de [**plug-in inschakelen**](../plugins/index.md#enable--disable) in de *Plug-insectie van het hoofdmenu*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugin_settings"/>*  

![Profielinstellingen Plug-ins Android](@site/static/img/personal/profiles/profile_plugins_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group"/>*

![Profielinstellingen Plug-ins iOS](@site/static/img/personal/profiles/profile_plugins_1_ios.png)

</TabItem>

</Tabs>

Plug-ins ontgrendelen extra functies van de applicatie en kunnen [betaald of gratis](../plugins/index.md#purchase) zijn. Sommige plug-ins hebben hun eigen [instellingen](../plugins/index.md#plugin-settings), andere niet. OsmAnd geeft u de mogelijkheid om plug-ins voor elk profiel afzonderlijk te configureren.


- **Ritregistratie**. Dit item opent de [ritregistratie-instellingen](../plugins/trip-recording.md#recording-settings) voor het geselecteerde profiel, waar u alle parameters voor het opnemen van uw reizen kunt kiezen.

- **Weer**. Interactieve [Weer](../plugins/weather.md#weather-settings) kaartlagen stellen u in staat om de temperatuur, luchtdruk, bewolking, windsnelheid en neerslag in uw stad of een andere locatie op een wereldkaart te monitoren.

- **Audio / Video Notities** (*Alleen Android*). Dit item opent de [audio-video plug-in instellingen](../plugins/audio-video-notes.md#plugin-settings) voor het geselecteerde profiel. De *Audio/Video Notities* plug-in breidt de functionaliteit van OsmAnd uit door u in staat te stellen uw notities in verschillende formaten zoals foto, video of audio te maken en deze te koppelen aan een geografische locatie of de huidige locatie.  

- **OpenStreetMap Bewerken**. Dit item opent de [OpenStreetMap bewerkingsplug-ininstellingen](../plugins/osm-editing.md#settings) voor het geselecteerde profiel. Met OsmAnd en de OSM bewerkingsplug-in kunt u bijdragen aan OpenStreetMap.org door POI's te maken of te wijzigen, notities toe te voegen of te becommentariëren, en opgenomen GPX-tracks te uploaden.

- **Externe sensoren**. Wanneer u op een item in de sectie *Plug-ininstellingen* tikt, worden de [instellingen van externe sensoren](../plugins/external-sensors.md#sensors-settings) voor het geselecteerde profiel geopend. De plug-in Externe sensoren stelt u in staat om gegevens van draadloze externe sensoren te lezen en op te nemen en deze weer te geven met behulp van widgets in de OsmAnd-applicatie.

- **Toegankelijkheid** (*Alleen Android*). Dit item opent de [Toegankelijkheidsplug-ininstellingen](../plugins/accessibility.md#plugin-settings) voor het geselecteerde profiel. Met de Toegankelijkheidsplug-ininstellingen kunt u de applicatie aanpassen aan uw behoeften. Alle instellingen hebben betrekking op het navigatieproces en worden individueel voor elk profiel ingesteld.

- **OsmAnd Ontwikkeling**. Dit menu opent de [OsmAnd ontwikkelingsplug-ininstellingen](../plugins/development.md#plugin-settings), waar u de OsmAnd-applicatie kunt configureren voor testdoeleinden of aankomende functies kunt verkennen. Deze instellingen zijn bedoeld voor ontwikkelaars en zijn niet vereist voor normaal gebruik van de applicatie.  

  > ***Het wijzigen van de instellingen van de OsmAnd ontwikkelingsplug-in beïnvloedt alle profielen.***

- **Wikipedia** (alleen iOS). Dit menu opent *[Wikipedia plug-in instellingen](../plugins/wikipedia.md#wikipedia-settings)*. U kunt de taal selecteren waarin artikelen worden weergegeven en kiezen of afbeeldingen van Wikipedia moeten worden gedownload. Wikipedia op uw reis verbetert uw ervaring door informatie te bieden over de plaatsen die u bezoekt. Het werkt offline en toont relevante Wikipedia-artikelen direct op de kaart met betrekking tot interessante plaatsen.

- **Voertuigstatistieken**. Dit menu opent *[Voertuigstatistieken plug-in instellingen](../plugins/vehicle-metrics.md#scanner-settings)*. Hiermee kunt u een OBD-II scanner verbinden met OsmAnd.

- **AIS vaartuigtracker** (alleen Android). Dit menu opent *[AIS vaartuigtracker plug-in instellingen](../plugins/ais-tracker.md#plugin-settings)*. Deze plug-in stelt u in staat om een AIS tracker te verbinden met OsmAnd.



## Acties {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Profielen Acties Instellingen Android](@site/static/img/personal/profiles/profile_actions_settings_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Profielen Acties Instellingen iOS](@site/static/img/personal/profiles/profile_actions_settings_ios.png)  

</TabItem>

</Tabs>

Acties met geselecteerd profiel:  

- [Profiel exporteren](https://osmand.net/docs/user/personal/import-export#export) - Exporteer alle instellingen van het geselecteerde profiel in OSF-formaat.

- **Kopiëren van een ander profiel** - Kopieert alle instellingen van een ander bestaand profiel in uw OsmAnd-applicatie.

- **Terugzetten naar standaard** - Zet alle instellingen terug naar de oorspronkelijke staat.

- **Profiel verwijderen**:
    - Deze actie is alleen beschikbaar voor *Android* en alleen voor een *Aangepast profiel*.
    - Standaardprofielen kunnen niet worden verwijderd.
    - Om een profiel toe te voegen, gaat u naar *Menu → Instellingen → App-profielen → + Nieuw profiel*.


## Gerelateerde artikelen {#related-articles}

- [Tracks beheren](../personal/tracks/manage-tracks.md#import--export-track)
- [Zoekgeschiedenis](../search/search-history.md#export-and-share)
- [Kleurenpaletschema's](../personal/color-palette-schemes.md)

> *Laatst bijgewerkt: februari 2025*