---
source-hash: f80d7d2ec2e1df970dcaad604965df0d177218ef2e96f439521a590197b70506
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

Vectorkaarten zijn bedoeld om te worden gebruikt als de standaard databron voor kaarten in OsmAnd, dus **u moet ze downloaden naar uw apparaat**. Vectorkaarten ondersteunen een groot aantal kaartstijlen voor verschillende activiteiten zoals fietsen, wandelen, autorijden of sneeuwscooteren, en andere.

Elke kaartstijl kan worden aangepast om specifieke objecten te markeren of te verbergen, en om te schakelen tussen dag- en nachtmodus. Vectorkaartgegevens kunnen worden aangevuld met vectorgegevens en worden weergegeven in de standaard kaartstijl, zoals informatie over *Hoogtelijnen*. U kunt *uw eigen OsmAnd-kaartstijl creëren* om de vereiste informatie weer te geven.


## Toepassingen {#use-cases}

Aanpasbare kaartstijlen zijn een van de belangrijkste voordelen van OsmAnd. U kunt de kaartweergave aanpassen aan uzelf en uw hobby's, de weergave of het verbergen van bepaalde kaartobjecten aanpassen, de groottes en kleuren van deze objecten, en de schaal van de weergave van bepaalde objecten wijzigen.


## Standaard Kaartstijlen {#default-map-styles}

OsmAnd biedt u standaard vele kaartstijlen en datalagen. Deze sectie beschrijft de belangrijkste voor de dag- en nachtmodus.

1. **Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

2. **iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*


### OsmAnd {#osmand}

![OsmAnd kaartstijl](@site/static/img/map/map-style-osmand-with-routes.png)  

De standaard kaartweergavestijl van OsmAnd balanceert detail en eenvoud, waardoor het ideaal is voor stedelijke en buitenverkenning. Het geeft details van stedelijke kenmerken zoals straten, gebouwen en vervoershaltes weer, terwijl het visuele rommel vereenvoudigt door kaarten duidelijker te maken.  

Belangrijke voordelen zijn routekaarten, wegdekwaliteit, toegangsbeperkingen, verkeersborden, SAC-schaal padweergaven, sportfaciliteiten en topografische details zoals hoogtelijnen.


### Touringweergave {#touring-view}

![Touringweergave kaartstijl](@site/static/img/map/map-style-touring.png)

Touringstijl met hoog contrast en maximale details. Bevat alle opties van de standaard OsmAnd-stijl, terwijl zoveel mogelijk details worden weergegeven, met name wegen, paden en andere manieren van reizen. Duidelijk onderscheid van wegtypen in een *touringatlas*. Geschikt voor dag-, nacht- en buitengebruik.

### UniRS en LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

UniRS en LightRS zijn stijlen van auteurs die de basiskaartinformatie weergeven, maar in verschillende kleurenschema's.  

- **UniRS-stijl**. Deze stijl is een aangepaste versie van de standaardstijl om het contrast voor voetgangers- en fietspaden te verbeteren. Het behoudt het klassieke Mapnik-kleurenschema.  

    ![LightRS kaartstijl](@site/static/img/map/map-style-lightrs.png)

- **LightRS-stijl**. Dit is een eenvoudige rijstijl met een zachte nachtmodus. Het markeert wegen in een contrasterende oranje kleur, dimt secundaire kaartobjecten en toont topografische kenmerken zoals hoogtelijnen.

    ![UniRS kaartstijl](@site/static/img/map/map-style-unirs.png)

### Nautisch {#nautical}

![Nautische kaartstijl](@site/static/img/map/map-style-nautical.png)

Dit is een stijl voor nautische navigatie met boeien, vuurtorens, rivierroutes, zeewegen, markeringen, havens, nautische markeringen en dieptecontouren. Lees meer in het artikel [Nautische Kaartweergave](../plugins/nautical-charts.md).

### Winter en Ski {#winter-and-ski}

![Winter & Ski kaartstijl](@site/static/img/map/map-style-winter-ski.png)

Dit is een stijl voor skisporten die de pistes, liften en langlaufloipes beschrijft, en secundaire kaartobjecten verbergt. De **Winter en Ski-stijl** is ontworpen om u te helpen bij de navigatie tijdens wintersport.  

U kunt de skipistes en andere details zien, zoals de moeilijkheidsgraad van de pistes en liftmarkeringen. Belangrijke voordelen zijn de handige weergave van pistes, liften en andere skifuncties. Minder afleidende secundaire objecten op de kaart. Lees meer in het artikel [Skikaarten](../plugins/ski-maps.md).

### Topo {#topo}

![Topo kaartstijl](@site/static/img/map/map-style-topo.png)

Deze stijl is ontworpen voor wandelen, kamperen en fietsen in de natuur. Het beschikt over contrasterende wegen en natuurlijke kenmerken, verschillende soorten paden, uitgebreide opties voor hoogtelijnen en extra details. Het is goed leesbaar in de buitenlucht. De instelling *Wegdekintegriteit* stelt u in staat om de kwaliteit van de weg te onderscheiden.

### OSM-carto {#osm-carto}

![OSM-carto kaartstijl](@site/static/img/map/map-style-osm-carto.png)

Deze stijl imiteert de standaard [OpenStreetMap webstijl](https://www.openstreetmap.org/). De broncode van de webversie is beschikbaar op [Github](https://github.com/gravitystorm/openstreetmap-carto), de OsmAnd-code is beschikbaar op [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Woestijn {#desert}

![Woestijn kaartstijl](@site/static/img/map/map-style-desert.png)

Ontworpen voor woestijnen en andere dunbevolkte gebieden, met meer gedetailleerde kaartinformatie.

### Offroad {#offroad}

![Offroad kaartstijl](@site/static/img/map/map-style-offroad.png)

Ontworpen voor off-road navigatie, is deze stijl gebaseerd op de [Topo](#topo) kaartlay-out en werkt goed met satellietbeelden als onderlaag. Het heeft dunnere hoofdwegen om paden, sporen, fietsroutes en andere off-road paden te benadrukken, waardoor het ideaal is voor het verkennen van onverharde routes in landelijke of afgelegen gebieden.

### Sneeuwscooter {#snowmobile}

![Sneeuwscooter kaartstijl](@site/static/img/map/map-style-snowmobile.png)

Deze stijl is op maat gemaakt voor sneeuwscooternavigatie en markeert sneeuwscootervriendelijke paden, wegen en sporen. Het benadrukt gespecialiseerde paden in besneeuwde regio's en biedt duidelijke navigatie over met sneeuw bedekte terreinen waar standaardwegen mogelijk niet beschikbaar zijn.


## Kaartlegenda {#map-legend}

De kaartlegenda dient als sleutel tot het begrijpen van de symbolen die op OsmAnd-kaarten worden gebruikt. Het legt de betekenis uit achter verschillende kaartsymbolen, inclusief punten, lijnen en gebieden. Bijvoorbeeld, symbolen zoals blauwe kronkelende lijnen duiden op rivieren, terwijl verschillende kleuren en vormen gebouwen, paden en routes kunnen vertegenwoordigen.  

De legenda helpt gebruikers te interpreteren wat ze op de kaart zien. U kunt de volledige OsmAnd-kaartlegenda [hier](../map-legend/index.md) openen.


## Kaartlettertypen (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*  

![Kaartlettertypen Android-versie](@site/static/img/map/map_fonts.png) ![Kaartlettertypen versie](@site/static/img/map/map_fonts_1.png)

Voor kaarten in vereenvoudigd/traditioneel Chinees, Japans en Koreaans kunnen onjuiste tekens of symbolen (zoals vierkanten) verschijnen als uw apparaat niet over de benodigde lettertypen beschikt. Dit probleem treedt op bij het weergeven van lokale namen en kan worden opgelost door de vereiste lettertypen via OsmAnd te downloaden.  

Enkele gerelateerde lettertypeproblemen zijn gedocumenteerd op GitHub: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## * Hoogtelijnen {#-contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Hoogtelijnen kaartstijl](@site/static/img/map/contour_lines.png)

Hoogtelijnen in OsmAnd worden weergegeven als hoogtelijnen op vectorkaarten. Om ze te gebruiken, moet u eerst de [Topografie-plugin](../plugins/topography.md) inschakelen, de benodigde regionale gegevens downloaden en de weergave configureren. Deze functie is niet standaard ingeschakeld en vereist een [aankoop](../purchases/index.md).  

Hoogtelijnen zijn compatibel met alle kaartstijlen en kunnen worden aangepast via het [Hoogtelijnen-menu](../plugins/topography.md#contour-lines). Voor meer details, bezoek het artikel over de [Topografie-plugin](../plugins/topography.md).


## * Nautische diepte {#-nautical-depth}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

Nautische dieptecontouren vertegenwoordigen gebieden met gelijke diepte en helpen bij het visualiseren van veranderingen in de onderwatertopografie. Deze functie is beschikbaar in alle kaartstijlen en -modi en kan worden aangepast met of zonder de Nautische kaartweergave-plugin ingeschakeld.  

Voor meer details over de Nautische kaartweergave, bezoek de [Nautische Kaart-plugin pagina](../plugins/nautical-charts).


## Grenzen tonen {#show-borders}

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

Met deze functie kunt u de zichtbaarheid van de grenzen van eerder gedownloade kaarten uit de lijst met beschikbare kaarten in- of uitschakelen. Het hoofddoel is om de hoofdkaart overzichtelijker te maken door de contouren van gedownloade kaarten te verbergen, wat vooral handig is als u veel kaarten hebt geïnstalleerd.  

Standaard verschijnen de kaartgrenzen wanneer u inzoomt tot niveau 7 en verdwijnen ze bij zoomniveau 3 en lager.

:::tip Kleur Grenzen van gedownloade kaarten tonen
Wanneer de functie *Grenzen van gedownloade kaarten tonen* is ingeschakeld, worden gedownloade kaarten **Groen** gekleurd in zowel de Android- als iOS-versies van OsmAnd.  

Op Android worden gearchiveerde kaarten in **Oranje** weergegeven. In iOS worden kaarten die kunnen worden bijgewerkt ook in **Oranje** gemarkeerd.
:::


## Coördinatenraster {#coordinates-grid}


Ga naar: *Menu → Kaart configureren → Tonen → Coördinatenraster*  


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Coördinatenraster menu](@site/static/img/map/coordinates_grid_settings_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![show-borders-ios](@site/static/img/map/coordinates_grid_settings_ios.png)

</TabItem>

</Tabs>


De functie **Coördinatenraster** legt een referentieraster over de kaart, waardoor u breedte- en lengtegraadlijnen kunt visualiseren op basis van verschillende coördinatensystemen. Deze functie is handig voor nauwkeurige locatiereferentie en geospatiale navigatie. U kunt ***Zoomniveau-instellingen:*** selecteren om weer te geven tussen 2 - 22, ***Labelpositie*** - **Randen**/**Midden** en ***Rasterkleur*** afzonderlijk voor Dag/Nacht-modus.


***Beschikbare coördinaatformaten:***

- **WGS84** (EPSG:4326) -  **DD°MM′SS″** (Graden, Minuten, Seconden)
- **WGS84** (EPSG:4326) - **DD.DDDDD°** (Decimale Graden - WGS84 standaardformaat)
- **WGS84** (EPSG:4326) - **DD°MM.MMM′** (Graden, Decimale Minuten)
- **UTM** (EPSG:6387, Universele Transversale Mercator - zone-gebaseerd rastersysteem). Het minimale zoomniveau is 9, er wordt slechts één UTM-zone tegelijk weergegeven, aangezien zones elke 6° door meridianen worden gescheiden
- **MGRS** (Militair Raster Referentie Systeem)

Standaard gebruikt de app het coördinaatformaat dat is geselecteerd in [Algemene instellingen](../personal/profiles.md#units--formats).

## Kaartstijl configureren {#configure-map-style}

### Kaartmodus {#map-mode}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*  

![Kaartmodus](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Kaartmodus](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

De kaart kan worden weergegeven in een licht of donker thema op basis van de modus die is geselecteerd uit een lijst met opties. Standaard en voor alle nieuwe gebruikers komt de [kaartstijl](#default-map-styles) overeen met het thema dat is gekozen in de systeeminstellingen van uw apparaat.

- **<Translate android="true" ids="daynight_mode_day"/>**. Toont de kaart altijd in een licht thema voor optimale zichtbaarheid overdag.

- **<Translate android="true" ids="daynight_mode_night"/>**. Toont de kaart altijd in een donker thema, ideaal voor 's nachts of bij weinig licht.

- **Zonsopgang / Zonsondergang**. Schakelt automatisch tussen dag- en nachtthema's op basis van de lokale zonsopgang- en zonsondergangtijden, die in dit tabblad in de app worden gedetailleerd.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*Alleen Android*). Gebruikt de lichtsensor van het apparaat om automatisch te schakelen tussen lichte en donkere thema's op basis van het omgevingslicht.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. De kaartweergave past zich aan het algemene thema van de app aan, waarbij de dagmodus wordt weergegeven in het lichte thema en de nachtmodus in het donkere thema.


### Details {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">

  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*  

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Toont polygonen, paden, punten en borden op de kaart bij lage zoom. Dit betekent dat u meer details op de kaart kunt zien bij lage vergroting. Merk op dat de weergave op uw apparaat mogelijk niet snel is.  
    ![Kaartparameter - Gedetailleerder](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Toont het type wegdek. De kleur van de weg helpt u te begrijpen wat het wegdek is, zoals asfalt, gras of zand. Zie de [Kaartlegenda](../map-legend/index.md).  
    ![Kaartparameter - Wegdek](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Geeft de kwaliteit van de weg aan. Geeft de gladheid (helling) van de weg aan. Hoe glad uw wegen zijn: goed, slecht, mogelijk verschrikkelijk, enz. Kijk in de [Kaartlegenda](../map-legend/index.md) om de gladheid van uw weg te bepalen.  
    ![Kaartparameter - Weggladheid](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. Toont de toegankelijkheid van de weg: privé of toegestaan, alleen voor noodgevallen, of tolweg. Bekijk de [Kaartlegenda](../map-legend/index.md) om beschikbare wegen te vinden.  
    ![Kaartparameter - Toegang tot de weg](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. De functie [Lage-emissiezones (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) toont groene randen en "LEZ"-labels op kaarten voor gebieden in steden waar de toegang voor bepaalde vervuilende voertuigen beperkt is. LEZ's zijn bedoeld om de luchtkwaliteit te verbeteren door de toegang te beperken tot voertuigen die aan specifieke emissienormen voldoen. Het gebruik van deze functie helpt gebruikers boetes te vermijden door deze groene zones te identificeren en eromheen te navigeren, waardoor de naleving van lokale milieuregelgeving tijdens het reizen door stadscentra wordt gewaarborgd.  

    ![Kaartparameter - Lage-emissiezones](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Verschillende gebouwcategorieën, zoals residentieel, industrieel en commercieel, zijn kleurgecodeerd. Raadpleeg de [Kaartlegenda](../map-legend/index.md) voor details.  
    ![Kaartparameter - Gekleurde gebouwen](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Toont verlichte en niet-verlichte straten, evenals ondergrondse en tijdelijk verlichte wegen. Controleer de [Kaartlegenda](../map-legend/index.md) voor specifieke details.  
    ![Kaartparameter - Straatverlichting](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Ontworpen voor mappers, toont deze functie verwijzingen, opmerkingen en commentaar van andere gebruikers op de kaart.  
    ![Kaartparameter - Kaartassistent](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Toont dieptecontouren van de zee. U moet de [Nautische plugin](../plugins/nautical-charts) installeren en Nautische kaarten downloaden.  
    ![Kaartparameter - Dieptecontouren](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Toont groene randen en labels "NR" voor [Natuurreservaatgebied](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Markeert beschermde gebieden met een groene rand en "NR"-label voor natuurbehoudszones.  

    &nbsp;&nbsp;&nbsp;![Kaartparameter - Natuurreservaat](@site/static/img/map/nature-reserve.png)


<!--
| | | |
|--------|--------|--------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Shows polygons, trails, points, and signs on the map at low zoom. This means that you can see more details on the map at low magnification. Note that rendering on your device may not be fast.| ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Shows the type of road surface. The color of the road helps you understand what the road surface is, such as asphalt, grass, or sand. See the [Map legend](../map-legend/index.md).| ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Indicates the quality of the road. Indicates the smoothness (slope) of the road. How smooth your roads are: good, bad, possibly terrible, etc. Look at the [Map Legend](../map-legend/index.md) to determine the smoothness of your road.| ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  Shows the accessibility of the road: private or permitted, emergency only, or toll road. View the [Map Legend](../map-legend/index.md) to find available roads. | ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | The [Low Emission Zones (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) feature displays green borders and "LEZ" labels on maps for areas in cities where access is restricted for certain polluting vehicles. LEZs aim to improve air quality by limiting entry to vehicles that meet specific emissions standards. Using this feature helps users avoid penalties by identifying and navigating around these green zones, ensuring compliance with local environmental regulations while traveling through city centers.| ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)|
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

![Kaartroutes - fietsroutes](@site/static/img/map/map-routes-cycle-routes.png)  ![Kaartroutes - wandelnetwerk](@site/static/img/map/map-routes-hiking-network.png)

Een route is een pad dat vooraf is bepaald en gevolgd moet worden om een specifieke bestemming te bereiken. Een route kan worden geoptimaliseerd voor verschillende soorten reizen, zoals fietsen, wandelen, hardlopen, openbaar vervoer en andere. U kunt meer lezen over routes en hun types in het [Routes artikel](../map/routes.md).


### Transport {#transport}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>  

Bij het navigeren door steden heeft u een meer contrasterende weergave van openbaar vervoer en haltes nodig. U kunt op een halte van het openbaar vervoer tikken en een van de routes of haltes uit de lijst selecteren. Treinroutes worden ook in deze instelling weergegeven.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Toont haltes van het openbaar vervoer.  
    ![Kaart transport haltes](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Toont bus-, trolleybus- en shuttlebusroutes.  
    ![Kaart transport bus](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Toont tram- en treinroutes.  
    ![Kaart transport tram](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Toont metroroutes.  
    ![Kaart transport metro](@site/static/img/map/map-transport-subway.png)

### Verbergen {#hide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>  

Om de zichtbaarheid van de kaart te verbeteren, moet u mogelijk bepaalde objecten verbergen. U kunt bijvoorbeeld water verbergen bij het gebruik van de [Satelliet online kaarten met de Onderlaag](../map/raster-maps.md#select-raster-maps).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Verberg regionale grenzen binnen landen, maar staatsgrenzen zijn zichtbaar.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Verberg alle polygonen van natuurlijke objecten, speciale functie voor [Onderlaag/Bovenlaag](../map/raster-maps.md#select-raster-maps).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Verberg alle polygonen van gebouwen.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Verberg alle polygonen van water (zeeën, meren, reservoirs, enz.)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Verberg huisnummers op de kaart.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Verberg voorgestelde objecten - objecten die gepland zijn voor de bouw maar alleen een project hebben (geprojecteerde wegen, kruispunten, gebouwen en andere).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Verberg de POI-pictogrammen van de kaart. De labels van deze POI's zullen echter nog steeds op de kaart verschijnen.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Verberg de POI-labels van de kaart. De POI-pictogrammen zullen echter nog steeds op de kaart verschijnen.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Verberg alle ondergrondse objecten, zoals tunnels, doorgangen, verdiepingen, enz. Speciaal voor het opruimen van kaarten in steden van niet-nuttige objecten.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Verberg alle bovengrondse objecten. Speciaal om alleen ondergrondse objecten zoals tunnels, doorgangen, enz. te zien.

### Wegstijl {#road-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Speciale instellingen voor wegen, waar u de kleuren kunt wijzigen om overeen te komen met de wegenatlas of wegen met hoog contrast of dikke contouren voor wegen kunt toevoegen.

- **<Translate android="true" ids="rendering_value_default_name"/>**. Standaardstijl voor snelwegen. Kijk naar [Kaartlegenda](../map-legend/index.md).  
![Kaart wegstijl standaard](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Stijl van de Duitse wegenatlas.  
![Kaart wegstijl Duits](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Stijl van de Amerikaanse wegenatlas.  
![Kaart wegstijl Amerikaans](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. Het hoge contrast van wegen.  
![Kaart wegstijl hoog contrast](@site/static/img/map/map-road-style-high-contrast.png)
- **Bleek**. Minder contrasterende kleuren van wegen.  
![Kaart wegstijl dikke omtrek](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Dikke omtrek voor wegen.  
![Kaart wegstijl dikke omtrek](@site/static/img/map/map-road-style-bold-outline.png)


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
    ![Kaart tekstgrootte 100%](@site/static/img/map/map-text-size-100.png)

- **200%**  
    ![Kaart tekstgrootte 200%](@site/static/img/map/map-text-size-200.png)


### Kaartvergroter {#map-magnifier}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

U kunt deze instelling kiezen door lang op de "+" of "-" knop op het scherm te drukken of:  
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

U kunt deze instelling kiezen door lang op de "+" of "-" knop op het scherm te drukken of:  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

Deze instelling helpt om de vergroting van de kaart te wijzigen. Het is van toepassing op raster- en vectorkaarten. Voor rasterkaarten past het een vergrotingseffect toe, zodat tekstlabels groter of kleiner lijken. Voor vectorkaarten maakt het de kaart meer of minder gedetailleerd, als u het op een lage waarde instelt, zal de kaart er rommelig/traag uitzien.  

- **75%**  
    ![Kaartvergroter 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**  
    ![Kaartvergroter 200%](@site/static/img/map/map-magnifier-200.png)


### Kaarttaal {#map-language}

De optie **Kaarttaal** configureert de spelling van namen op de OsmAnd-kaart voor zoomniveaus 7-20, inclusief. Voor zoomniveaus 2-6 worden de namen weergegeven in de taal die is ingesteld voor OsmAnd in het systeeminstellingenmenu (zie sectie *[Hoe de toepassingstaal te wijzigen](../start-with/first-steps.md#how-to-change-app-language)*).  

Als de namen op de kaart niet in de vereiste taal zijn vertaald door de OSM-gemeenschap, kunt u [getranslitereerde namen](https://en.wikipedia.org/wiki/Transliteration) gebruiken: *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) of *<Translate ios="true" ids="translit_names"/>* (iOS) schakelaar.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

- **Lokale namen**  
    ![Kaarttaal lokale namen](@site/static/img/map/map-language-local-names_2.png)

- **Voorkeurstaal** (Oekraïens)
    ![Kaarttaal Oekraïens](@site/static/img/map/map-language-urkanian_2.png)

- **Gebruik Latijnse naam indien ontbrekend**  
    ![Kaarttaal transliteratie](@site/static/img/map/map-language-transliterate_2.png)


</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

- **Lokale namen**  
    ![Kaarttaal lokale namen](@site/static/img/map/map-language-local-names_2.png)

- **Voorkeurstaal** (Oekraïens)
    ![Kaarttaal Oekraïens](@site/static/img/map/map-language-urkanian_2.png)

- **Toon lokale namen** (voegt een 2e label toe als de lokale naam anders is)
    ![Kaarttaal lokaal](@site/static/img/map/map-language-show-local_2.png)

- **Translitereer namen**  
    ![Kaarttaal transliteratie](@site/static/img/map/map-language-transliterate_2.png)



</TabItem>

</Tabs>  



## Aangepaste Kaartstijl {#custom-map-style}

Als u een persoonlijke of door derden gemaakte aangepaste kaartstijl heeft die is gemaakt volgens de [Specificatie](../../technical/osmand-file-formats/osmand-rendering-style.md), kunt u deze op de volgende manieren op uw apparaat installeren:

- Kopieer het `.render.xml` bestand naar uw apparaat en open het met OsmAnd.
- Gebruik de [standaard import/export dialogen](../personal/import-export.md) om weergavestijlen te exporteren of importeren. Als u een `.osf` pakket maakt, werkt het als een plugin die u met anderen kunt delen.
- Na installatie kunt u de kaartstijl selecteren in het menu.


## Gerelateerde Artikelen {#related-articles}

- [Importeren / Exporteren](../personal/import-export.md)
- [Kleurenpaletschema's](../personal/color-palette-schemes.md)