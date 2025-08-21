---
source-hash: a88db727a56929097a8c07ddebe3d67c7ae6791b63a8d75e38c832528fdae92e
sidebar_position: 5
title:  Vectorkaarten (Kaartstijlen)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Overzicht {#overview}

Vectorkaarten zijn bedoeld om te worden gebruikt als de standaard kaartgegevensbron voor OsmAnd, dus **u moet ze downloaden naar uw apparaat**. Vectorkaarten ondersteunen een groot aantal kaartstijlen voor verschillende activiteiten, zoals fietsen, wandelen, autorijden of sneeuwscooteren, en andere.

Elke kaartstijl kan worden aangepast om specifieke objecten te markeren of te verbergen, en om te schakelen tussen dag- en nachtmodi. Vectorkaartgegevens kunnen worden aangevuld met vectorgegevens en worden weergegeven in de standaard kaartstijl, zoals *hoogtelijn*-informatie. U kunt *uw eigen OsmAnd-kaartstijl creëren* om de vereiste informatie te demonstreren.


## Gebruiksscenario's {#use-cases}

Aanpasbare kaartstijlen zijn een van de belangrijkste voordelen van OsmAnd. U kunt de kaartweergave aanpassen aan uzelf en uw hobby's, de weergave of het verbergen van bepaalde kaartobjecten, de groottes en kleuren van deze objecten aanpassen, en de schaal van de weergave van bepaalde objecten wijzigen.


## Standaard Kaartstijlen {#default-map-styles}

OsmAnd biedt u veel kaartstijlen en gegevenslagen die standaard passen. Dit gedeelte beschrijft de belangrijkste voor dag- en nachtmodi.

1. **Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

2. **iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*


### OsmAnd {#osmand}

![OsmAnd map style](@site/static/img/map/map-style-osmand-with-routes.png)

De standaard kaartweergavestijl van OsmAnd balanceert detail en eenvoud, waardoor het ideaal is voor stedelijke en buitenverkenning. Het detailleert stedelijke kenmerken zoals straten, gebouwen en transportstops, terwijl visuele rommel wordt vereenvoudigd door kaarten duidelijker te maken.

Belangrijke voordelen zijn routekaarten, oppervlaktekwaliteit, toegangsbeperkingen, verkeersborden, SAC-schaalpadweergaven, sportfaciliteiten en topografische details zoals hoogtelijnen.


### Touringweergave {#touring-view}

![Touring view map style](@site/static/img/map/map-style-touring.png)

Touringstijl met hoog contrast en maximale detail. Omvat alle opties van de standaard OsmAnd-stijl, terwijl zoveel mogelijk detail wordt weergegeven, met name wegen, paden en andere reisroutes. Duidelijk onderscheid van wegtypen in een *touringatlas*. Geschikt voor dag-, nacht- en buitengebruik.

### UniRS en LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

UniRS- en LightRS-stijlen zijn auteursstijlen die de basiskaartinformatie weergeven, maar in verschillende kleurenschema's.

- **UniRS-stijl**. Deze stijl is een aangepaste versie van de standaardstijl om het contrast voor voetgangers- en fietspaden te verbeteren. Het behoudt het klassieke Mapnik-kleurenschema.

    ![LightRS map style](@site/static/img/map/map-style-lightrs.png)

- **LightRS-stijl**. Dit is een eenvoudige rijstijl met een zachte nachtmodus. Het markeert wegen in een contrasterende oranje kleur, dimt secundaire kaartobjecten en toont topografische kenmerken zoals hoogtelijnen.

    ![UniRS map style](@site/static/img/map/map-style-unirs.png)

### Nautisch {#nautical}

![Nautical map style](@site/static/img/map/map-style-nautical.png)

Dit is een stijl voor nautische navigatie met boeien, vuurtorens, rivierroutes, zeewegen, markeringen, havens, nautische markeringen en dieptecontouren. Lees meer in het artikel [Nautische Kaartweergave](../plugins/nautical-charts.md).

### Winter en Ski {#winter-and-ski}

![Winter & Ski map style](@site/static/img/map/map-style-winter-ski.png)

Dit is een stijl voor skisporten die de pistes, liften en langlaufroutes beschrijft, evenals het verbergen van secundaire kaartobjecten. **Winter- en Skistijl** is ontworpen om u te helpen bij wintersportersnavigatie.

U kunt de skipistes en andere details zien, zoals de moeilijkheidsgraad van de pistes en liftmarkeringen. Belangrijke voordelen zijn de handige weergave van pistes, liften en andere skifuncties. Minder afleidende secundaire objecten van de kaart. Lees meer in het artikel [Skikaarten](../plugins/ski-maps.md).

### Topo {#topo}

![Topo map style](@site/static/img/map/map-style-topo.png)

Deze stijl is ontworpen voor wandelen, kamperen en fietsen in de natuur. Het kenmerkt contrasterende wegen en natuurlijke kenmerken, verschillende soorten paden, uitgebreide hoogtelijnopties en aanvullende details. Het is leesbaar in de buitenlucht. De instelling *Oppervlakte-integriteit* stelt u in staat de kwaliteit van de weg te onderscheiden.

### OSM-carto {#osm-carto}

![OSM-carto map style](@site/static/img/map/map-style-osm-carto.png)

Deze stijl imiteert de standaard [OpenStreetMap webstijl](https://www.openstreetmap.org/). De broncode van de webversie is beschikbaar op [Github](https://github.com/gravitystorm/openstreetmap-carto), OsmAnd-code is beschikbaar op [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Woestijn {#desert}

![Desert map style](@site/static/img/map/map-style-desert.png)

Ontworpen voor woestijnen en andere dunbevolkte gebieden, met meer gedetailleerde kaartinformatie.

### Offroad {#offroad}

![Offroad map style](@site/static/img/map/map-style-offroad.png)

Ontworpen voor offroad-navigatie, is deze stijl gebaseerd op de [Topo](#topo) kaartlay-out en werkt goed met satellietbeelden als onderlaag. Het kenmerkt dunnere hoofdwegen om paden, sporen, fietsroutes en andere offroad-paden te markeren, waardoor het ideaal is voor het verkennen van onverharde routes in landelijke of afgelegen gebieden.

### Sneeuwscooter {#snowmobile}

![Snowmobile map style](@site/static/img/map/map-style-snowmobile.png)

Op maat gemaakt voor sneeuwscooternavigatie, deze stijl markeert sneeuwscootervriendelijke paden, wegen en sporen. Het markeert gespecialiseerde paden in besneeuwde gebieden, en biedt duidelijke navigatie over sneeuwbedekte terreinen waar standaardwegen mogelijk niet beschikbaar zijn.


## Kaartlegenda {#map-legend}

De kaartlegenda dient als een sleutel tot het begrijpen van de symbolen die in OsmAnd-kaarten worden gebruikt. Het verklaart de betekenis achter verschillende kaartsymbolen, inclusief punten, lijnen en gebieden. Symbolen zoals blauwe kronkelige lijnen duiden bijvoorbeeld op rivieren, terwijl verschillende kleuren en vormen gebouwen, paden en routes kunnen voorstellen.

De legenda helpt gebruikers te interpreteren wat ze op de kaart zien. U kunt de volledige OsmAnd-kaartlegenda [hier](../map-legend/index.md) raadplegen.


## Kaartlettertypen (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*

![Map fonts Android version](@site/static/img/map/map_fonts.png) ![Map fonts version](@site/static/img/map/map_fonts_1.png)

Voor kaarten in vereenvoudigd/traditioneel Chinees, Japans en Koreaans kunnen onjuiste tekens of symbolen (zoals vierkanten) verschijnen als uw apparaat de benodigde lettertypen mist. Dit probleem treedt op bij het weergeven van lokale namen en kan worden opgelost door de vereiste lettertypen via OsmAnd te downloaden.

Sommige gerelateerde lettertypeproblemen zijn gedocumenteerd op GitHub: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## * Hoogtelijnen {#-contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Contour lines map style](@site/static/img/map/contour_lines.png)

Hoogtelijnen in OsmAnd worden weergegeven als hoogtelijnen op vectorkaarten. Om ze te gebruiken, moet u eerst de [Topografie-plug-in](../plugins/topography.md) inschakelen, de benodigde regionale gegevens downloaden en de weergave configureren. Deze functie is niet standaard ingeschakeld en vereist een [aankoop](../purchases/index.md).

Hoogtelijnen zijn compatibel met alle kaartstijlen en kunnen worden aangepast via het menu [Hoogtelijnen](../plugins/topography.md#contour-lines). Voor meer details, bezoek het artikel [Topografie-plug-in](../plugins/topography.md).


## * Nautische Diepte {#-nautical-depth}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

Nautische dieptecontouren vertegenwoordigen gebieden met gelijke diepte, wat helpt bij het visualiseren van onderwater topografische veranderingen. Deze functie is beschikbaar in alle kaartstijlen en -modi en kan worden aangepast met of zonder de Nautische kaartweergave-plug-in ingeschakeld.

Voor meer details over de Nautische kaartweergave, bezoek de [Nautische Kaart plug-in pagina](../plugins/nautical-charts).


## Grenzen weergeven {#show-borders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-andr](@site/static/img/map/show-borders-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

Met deze functie kunt u de zichtbaarheid van grenzen voor eerder gedownloade kaarten uit de lijst met beschikbare kaarten in- of uitschakelen. Het belangrijkste doel is om de hoofdkaart overzichtelijker te maken door de contouren van gedownloade kaarten te verbergen, wat vooral handig is als u veel kaarten hebt geïnstalleerd.

Standaard verschijnen kaartgrenzen wanneer u inzoomt tot niveau 7 en verdwijnen ze bij zoomniveau 3 en lager.

:::tip Kleur Toon grenzen van gedownloade kaarten
Wanneer de functie *Toon grenzen van gedownloade kaarten* is ingeschakeld, worden gedownloade kaarten **Groen** gekleurd in zowel de Android- als iOS-versies van OsmAnd.

Op Android worden gearchiveerde kaarten in **Oranje** weergegeven. In iOS worden kaarten die kunnen worden bijgewerkt ook in **Oranje** gemarkeerd.
:::


## Coördinatenraster {#coordinates-grid}


Ga naar: *Menu → Kaart configureren → Weergeven → Coördinatenraster*


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Coordinates grid menu](@site/static/img/map/coordinates_grid_settings_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![show-borders-ios](@site/static/img/map/coordinates_grid_settings_ios.png)

</TabItem>

</Tabs>


De functie **Coördinatenraster** legt een referentieraster over de kaart, zodat u breedte- en lengtegraden kunt visualiseren op basis van verschillende coördinatensystemen. Deze functie is handig voor nauwkeurige locatiebepaling en geospatiale navigatie.

***1. Beschikbare coördinatenformaten:***

- **DD°MM′SS″** (Graden, Minuten, Seconden)
- **DD.DDDDD°** (Decimale Graden - WGS84 standaardformaat)
- **DD°MM.MMM′** (Graden, Decimale Minuten)
- **MGRS** (Military Grid Reference System)
- **UTM** (Universal Transverse Mercator - zonegebaseerd rastersysteem)

:::note

1. *UTM-rasterbeperkingen:*
    - Het minimale zoomniveau voor het weergeven van het UTM-raster is 9.
    - Er wordt slechts één UTM-zone tegelijk weergegeven, aangezien zones worden gescheiden door meridianen elke 6°.

2. *WGS84-raster ondersteunt drie verschillende modi:* decimale graden, graden+minuten en graden+minuten+seconden.

:::

***Ondersteunde coördinatensystemen:***

OsmAnd ondersteunt meerdere **basisprojecties** voor het weergeven van geografische rasterlijnen:

| **Projectie** | **EPSG-code** | **Beschrijving** |
|---|---|---|
| **WGS84** | EPSG:4326 | Standaard breedte-/lengtegraad referentiesysteem, wereldwijd gebruikt. |
| **Mercator** | EPSG:3857 | Gebruikt voor webgebaseerde kaarten (Google Maps, OpenStreetMap, etc.). |
| **UTM** | EPSG:6387 | Verdeelt de wereld in **60 zones** voor nauwkeurige lokale positionering. |
| **MGRS** | - | Military Grid Reference System (uitbreiding van UTM). |



***2. Zoomniveau-instellingen:***

- De rasterlijnen verschijnen op basis van het zoomniveau, tussen **2 – 22**.
- De lijnen passen de coördinatenverdelingen dynamisch aan op basis van het zoomniveau.

**Standaard gebruikt de app het coördinatenformaat dat is geselecteerd in** [Algemene instellingen](../personal/profiles.md#units--formats).


***3. Positie labels:***
- Randen
- Centrum

***4. Rasterkleur:***
- Kies uw rasterkleur voor Dag-/Nachtmodus.

## Kaartstijl configureren {#configure-map-style}

### Kaartmodus {#map-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*

![Map Mode](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Map Mode](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

De kaart kan worden weergegeven in een licht of donker thema, afhankelijk van de geselecteerde modus uit een lijst met opties. Standaard en voor alle nieuwe gebruikers sluit de [kaartstijl](#default-map-styles) aan bij het thema dat is gekozen in de systeeminstellingen van uw apparaat.

- **<Translate android="true" ids="daynight_mode_day"/>**. Toont de kaart altijd in een licht thema voor optimale zichtbaarheid overdag.

- **<Translate android="true" ids="daynight_mode_night"/>**. Toont de kaart altijd in een donker thema, ideaal voor 's nachts of bij weinig licht.

- **Zonsopgang / Zonsondergang**. Schakelt automatisch tussen dag- en nachtthema's volgens de lokale zonsopgang- en zonsondergangtijden, die in dit tabblad in de app worden gedetailleerd.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*Alleen Android*). Gebruikt de lichtsensor van het apparaat om automatisch te schakelen tussen lichte en donkere thema's volgens de omgevingslichtniveaus.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. De kaartweergave past zich aan het algehele thema van de app aan, waarbij de dagmodus wordt weergegeven in het lichte thema en de nachtmodus in het donkere thema.


### Details {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">


*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Toont polygonen, paden, punten en borden op de kaart bij lage zoom. Dit betekent dat u meer details op de kaart kunt zien bij lage vergroting. Houd er rekening mee dat de weergave op uw apparaat mogelijk niet snel is.
    ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Toont het type wegdek. De kleur van de weg helpt u te begrijpen wat het wegdek is, zoals asfalt, gras of zand. Zie de [Kaartlegenda](../map-legend/index.md).
    ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Geeft de kwaliteit van de weg aan. Geeft de gladheid (helling) van de weg aan. Hoe glad uw wegen zijn: goed, slecht, mogelijk verschrikkelijk, enz. Raadpleeg de [Kaartlegenda](../map-legend/index.md) om de gladheid van uw weg te bepalen.
    ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. Toont de toegankelijkheid van de weg: privé of toegestaan, alleen voor noodgevallen, of tolweg. Raadpleeg de [Kaartlegenda](../map-legend/index.md) om beschikbare wegen te vinden.
    ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. De functie [Lage Emissie Zones (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) toont groene grenzen en "LEZ"-labels op kaarten voor gebieden in steden waar toegang beperkt is voor bepaalde vervuilende voertuigen. LEZ's zijn bedoeld om de luchtkwaliteit te verbeteren door de toegang te beperken tot voertuigen die voldoen aan specifieke emissienormen. Het gebruik van deze functie helpt gebruikers boetes te voorkomen door deze groene zones te identificeren en eromheen te navigeren, waardoor naleving van lokale milieuregelgeving wordt gewaarborgd tijdens het reizen door stadscentra.

    ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Verschillende gebouwcategorieën, zoals residentieel, industrieel en commercieel, zijn kleurgecodeerd. Raadpleeg de [Kaartlegenda](../map-legend/index.md) voor details.
    ![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Toont verlichte en niet-verlichte straten, evenals ondergrondse en tijdelijk verlichte wegen. Controleer de [Kaartlegenda](../map-legend/index.md) voor specifieke details.
    ![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Ontworpen voor mappers, deze functie toont referenties, opmerkingen en commentaren van andere gebruikers op de kaart.
    ![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Toont zeedieptecontouren. U moet de [Nautische plug-in](../plugins/nautical-charts) installeren en Nautische kaarten downloaden.
    ![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Toont groene borden en labels "NR" voor [Natuurreservaatgebied](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Markeringen van beschermde gebieden met een groene rand en "NR"-label voor wildreservaten.

    &nbsp;&nbsp;&nbsp;![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)


<!--
| | | |
|--------|--------|--------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Shows polygons, trails, points, and signs on the map at low zoom. This means that you can see more details on the map at low magnification. Note that rendering on your device may not be fast.| ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Shows the type of road surface. The color of the road helps you understand what the road surface is, such as asphalt, grass, or sand. See the [Map legend](../map-legend/index.md).| ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Indicates the quality of the road. Indicates the smoothness (slope) of the road. How smooth your roads are: good, bad, possibly terrible, etc. Look at the [Map Legend](../map-legend/index.md) to determine the smoothness of your road.| ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  Shows the accessibility of the road: private or permitted, emergency only, or toll road. View the [Map Legend](../map-legend/index.md) to find available roads. | ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | The [Low Emission Zones (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) feature displays green borders and "LEZ" labels on maps for areas in cities where access is restricted for certain polluting vehicles. LEZ's aim to improve air quality by limiting entry to vehicles that meet specific emissions standards. Using this feature helps users avoid penalties by identifying and navigating around these green zones, ensuring compliance with local environmental regulations while traveling through city centers.| ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. | Different building categories, such as residential, industrial, and commercial, are color-coded. Refer to the [Map legend](../map-legend/index.md) for details. | ![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. | Displays illuminated and non-illuminated streets, as well as underground and temporarily illuminated ways. Check the [Map legend](../map-legend/index.md) for specifics. | ![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. | Designed for mappers, this feature shows references, remarks, and comments from other users on the map. | ![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. | Shows sea depth contours. You need to install the [Nautical plugin](../plugins/nautical-charts) and download Nautical maps.| ![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. | Showing green board and labels "NR" for [Nature reserve territory](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Highlights protected areas with a green border and "NR" label for wildlife conservation zones.| ![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)|
-->

### Routes {#routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png) ![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

Een route is een vooraf bepaald pad dat gevolgd moet worden om een specifieke bestemming te bereiken. Een route kan geoptimaliseerd zijn voor verschillende soorten reizen, zoals fietsen, wandelen, hardlopen, openbaar vervoer en andere. U kunt meer lezen over routes en hun typen in het artikel [Routes](../map/routes.md).


### Vervoer {#transport}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>

Bij het navigeren door steden heeft u een meer contrasterende weergave van openbaar vervoer en haltes nodig. U kunt op een halte van het openbaar vervoer tikken en een van de routes of haltes uit de lijst selecteren. Treinroutes worden ook weergegeven in deze instelling.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Toont haltes van het openbaar vervoer.
    ![Map transport stops](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Toont bus-, trolleybus- en shuttle routes.
    ![Map transport bus](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Toont tram- en treinroutes.
    ![Map transport tram](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Toont ondergrondse routes.
    ![Map transport subway](@site/static/img/map/map-transport-subway.png)

### Verbergen {#hide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>

Om de kaartzichtbaarheid te verbeteren, moet u mogelijk bepaalde objecten verbergen. U kunt bijvoorbeeld water verbergen bij het gebruik van de [Satelliet online kaarten met de Onderlaaglaag](../map/raster-maps.md#select-raster-maps).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Verberg regionale grenzen binnen landen, maar staatsgrenzen zijn zichtbaar.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Verberg alle polygonen van natuurlijke objecten, speciale functie voor [Onderlaag/Overlaaglaag](../map/raster-maps.md#select-raster-maps).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Verberg alle polygonen van gebouwen.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Verberg alle polygonen van water (zeeën, meren, reservoirs, enz.)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Verberg huisnummers op de kaart.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Verberg voorgestelde objecten - die objecten die gepland zijn voor bouw, maar alleen een project hebben (geprojecteerde wegen, kruispunten, gebouwen en andere).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Verberg de POI-pictogrammen van de kaart. De labels van deze POI's zullen echter nog steeds op de kaart verschijnen.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Verberg de POI-labels van de kaart. De POI-pictogrammen zullen echter nog steeds op de kaart verschijnen.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Verberg alle ondergrondse objecten, zoals tunnels, doorgangen, verdiepingen, enz. Speciaal voor het opschonen van kaarten in steden van onnodige objecten.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Verberg alle bovengrondse objecten. Speciaal voor het zien van alleen ondergrondse objecten zoals tunnels, doorgangen, enz.

### Wegstijl {#road-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Speciale instellingen voor wegen, waar u de kleuren kunt wijzigen om overeen te komen met de wegenatlas of wegen met hoog contrast of vetgedrukte contouren voor wegen kunt toevoegen.

- **<Translate android="true" ids="rendering_value_default_name"/>**. Standaardstijl voor snelwegen. Zie [Kaartlegenda](../map-legend/index.md).
![Map road style default](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Stijl van Duitse wegenatlas.
![Map road style german](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Stijl van Amerikaanse wegenatlas.
![Map road style american](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. Het hoge contrast van wegen.
![Map road style high contrast](@site/static/img/map/map-road-style-high-contrast.png)
- **Bleek**. Minder contrasterende kleuren van wegen.
![Map road style bold outline](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Vetgedrukte contour voor wegen.
![Map road style bold outline](@site/static/img/map/map-road-style-bold-outline.png)


### Tekstgrootte {#text-size}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>

- **100%**
    ![Map text size 100%](@site/static/img/map/map-text-size-100.png)

- **200%**
    ![Map text size 200%](@site/static/img/map/map-text-size-200.png)


### Kaartvergroter {#map-magnifier}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

U kunt deze instelling kiezen door lang op de knop "+" of "-" op het scherm te tikken of:
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*

</TabItem>

<TabItem value="ios" label="iOS">

U kunt deze instelling kiezen door lang op de knop "+" of "-" op het scherm te tikken of:
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

Deze instelling helpt de vergroting van de kaart te wijzigen. Het is van toepassing op raster- en vectorkaarten. Voor rasterkaarten past het een vergrotingseffect toe, zodat tekstlabels groter of kleiner lijken. Voor vectorkaarten zorgt het ervoor dat de kaart meer of minder gedetailleerd lijkt; als u het op een lage waarde instelt, zal de kaart er ruisig/traag uitzien.

- **75%**
    ![Map magnifier 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**
    ![Map magnifier 200%](@site/static/img/map/map-magnifier-200.png)


### Kaarttaal {#map-language}

De optie **Kaarttaal** configureert de spelling van namen op de OsmAnd-kaart voor zoomniveaus 7-20, inclusief. Voor zoomniveaus 2-6 worden de namen weergegeven in de taal die is ingesteld voor OsmAnd in het systeeminstellingenmenu (zie sectie *[Hoe de applicatietaal te wijzigen](../start-with/first-steps.md#how-to-change-app-language)*).

Als de namen op de kaart niet in de gewenste taal zijn vertaald door de OSM-gemeenschap, kunt u [getranslitereerde namen](https://en.wikipedia.org/wiki/Transliteration) gebruiken: *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) of *<Translate ios="true" ids="translit_names"/>* (iOS) schakelaar.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

- **Lokale namen**
    ![Map language local names](@site/static/img/map/map-language-local-names_2.png)

- **Voorkeurstaal** (Oekraïens)
    ![Map language ukrainian](@site/static/img/map/map-language-urkanian_2.png)

- **Gebruik Latijnse naam indien ontbreekt**
    ![Map language transliterate](@site/static/img/map/map-language-transliterate_2.png)


</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

- **Lokale namen**
    ![Map language local names](@site/static/img/map/map-language-local-names_2.png)

- **Voorkeurstaal** (Oekraïens)
    ![Map language ukrainian](@site/static/img/map/map-language-urkanian_2.png)

- **Toon lokale namen** (voegt 2e label toe als lokale naam anders is)
    ![Map language local](@site/static/img/map/map-language-show-local_2.png)

- **Translitereer namen**
    ![Map language transliterate](@site/static/img/map/map-language-transliterate_2.png)


</TabItem>

</Tabs>


## Aangepaste Kaartstijl {#custom-map-style}

Als u een persoonlijke of externe aangepaste kaartstijl hebt gemaakt volgens de [Specificatie](../../technical/osmand-file-formats/osmand-rendering-style.md), kunt u deze op uw apparaat installeren op de volgende manieren:

- Kopieer het `.render.xml`-bestand naar uw apparaat en open het met OsmAnd.
- Gebruik de [standaard import-/exportdialogen](../personal/import-export.md) om renderingstijlen te exporteren of importeren. Als u een `.osf`-pakket maakt, werkt het als een plug-in die u met anderen kunt delen.
- Na installatie kunt u de kaartstijl selecteren in het menu.


## Gerelateerde artikelen {#related-articles}

- [Import / Export](../personal/import-export.md)
- [Kleurenpaletschema's](../personal/color-palette-schemes.md)

> *Laatst bijgewerkt: maart 2025*