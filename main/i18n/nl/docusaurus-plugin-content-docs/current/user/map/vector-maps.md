---
source-hash: 26ecc10e593a10b425e7d1bc880124a223b29d77fca08040a2c47952e03d4203
sidebar_position: 5
title:  Vectorkaarten 
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

Elke kaartstijl kan worden aangepast om specifieke objecten te markeren of te verbergen, en om te schakelen tussen dag- en nachtmodus. Vectorkaartgegevens kunnen worden aangevuld met vectorgegevens en worden weergegeven in de standaard kaartstijl, zoals informatie over *hoogtelijnen*. U kunt *uw eigen OsmAnd-kaartstijl creëren* om de vereiste informatie weer te geven.

Vectorkaarten vertegenwoordigen ruimtelijke gegevens, zoals wegen, gebouwen, punten en polygonen, met behulp van wiskundige geometrie die is opgeslagen in binair formaat. Elk element (knooppunt, lijn of polygoon) wordt gedefinieerd door coördinaten en dynamisch weergegeven volgens het zoomniveau en de kaartstijl.

Omdat vectorgegevens niet zijn opgeslagen als vaste afbeeldingen, kan het uiterlijk, inclusief kleur, lijndikte, transparantie of patroon, eenvoudig worden gewijzigd. Deze aanpak maakt efficiënte weergave mogelijk, laag geheugengebruik en soepele schaling op elk zoomniveau zonder kwaliteitsverlies.

:::info note
Zeer kleine polygonen kunnen worden vereenvoudigd of vervormd tijdens de generatie van kaartgegevens. Objecten met een oppervlakte kleiner dan ongeveer één vierkante meter worden mogelijk niet weergegeven. Voor een correcte visualisatie moeten kleine kenmerken worden gekarteerd als enkele knooppunten in plaats van polygonen.
:::


## Toepassingen {#use-cases}

Aanpasbare kaartstijlen zijn een van de belangrijkste voordelen van OsmAnd. U kunt de kaartweergave aanpassen aan uzelf en uw hobby's, de weergave of het verbergen van bepaalde kaartobjecten aanpassen, de groottes en kleuren van deze objecten, en de schaal van de weergave van bepaalde objecten wijzigen.


## Kaartweergave {#map-rendering}

### Kaartstijlen {#map-styles}

OsmAnd biedt verschillende ingebouwde vectorkaartstijlen die zijn geoptimaliseerd voor verschillende activiteiten. Naast de standaardstijlen kunt u uw eigen aangepaste kaartstijl maken en installeren op basis van weergaveregels.

Voor een gedetailleerde beschrijving van beschikbare stijlen en instructies voor het maken van aangepaste stijlen, zie het artikel [Kaartstijlen](../map/map-styles.md).

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

De kaart kan worden weergegeven in een licht of donker thema op basis van de modus die is geselecteerd uit een lijst met opties. Standaard en voor alle nieuwe gebruikers komt de [kaartstijl](#map-styles) overeen met het thema dat is gekozen in de systeeminstellingen van uw apparaat.

- **<Translate android="true" ids="daynight_mode_day"/>**. Toont de kaart altijd in een licht thema voor optimale zichtbaarheid overdag.

- **<Translate android="true" ids="daynight_mode_night"/>**. Toont de kaart altijd in een donker thema, ideaal voor 's nachts of bij weinig licht.

- **Zonsopgang / Zonsondergang**. Schakelt automatisch tussen dag- en nachtthema's op basis van de lokale zonsopgang- en zonsondergangtijden, die in dit tabblad in de app worden gedetailleerd.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*Alleen Android*). Gebruikt de lichtsensor van het apparaat om automatisch te schakelen tussen lichte en donkere thema's op basis van het omgevingslicht.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. De kaartweergave past zich aan het algemene thema van de app aan, waarbij de dagmodus wordt weergegeven in het lichte thema en de nachtmodus in het donkere thema. 

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
![Kaart wegstijl bleek](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Dikke omtrek voor wegen.  
![Kaart wegstijl dikke omtrek](@site/static/img/map/map-road-style-bold-outline.png)

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

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**.  Toont de toegankelijkheid van de weg: privé of toegestaan, alleen voor noodgevallen, of tolweg. Bekijk de [Kaartlegenda](../map-legend/index.md) om beschikbare wegen te vinden.  
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

### Verbergen {#hide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>  

Om de zichtbaarheid van de kaart te verbeteren, moet u mogelijk bepaalde objecten verbergen. U kunt bijvoorbeeld water verbergen bij het gebruik van de [Satelliet online kaarten met de Onderlaag](../map/raster-maps.md#layers).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Verberg regionale grenzen binnen landen, maar staatsgrenzen zijn zichtbaar.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Verberg alle polygonen van natuurlijke objecten, speciale functie voor [Onderlaag/Bovenlaag](../map/raster-maps.md#layers).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Verberg alle polygonen van gebouwen.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Verberg alle polygonen van water (zeeën, meren, reservoirs, enz.)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Verberg huisnummers op de kaart.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Verberg voorgestelde objecten - objecten die gepland zijn voor de bouw maar alleen een project hebben (geprojecteerde wegen, kruispunten, gebouwen en andere).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Verberg de POI-pictogrammen van de kaart. De labels van deze POI's zullen echter nog steeds op de kaart verschijnen.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Verberg de POI-labels van de kaart. De POI-pictogrammen zullen echter nog steeds op de kaart verschijnen.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Verberg alle ondergrondse objecten, zoals tunnels, doorgangen, verdiepingen, enz. Speciaal voor het opruimen van kaarten in steden van niet-nuttige objecten.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Verberg alle bovengrondse objecten. Speciaal om alleen ondergrondse objecten zoals tunnels, doorgangen, enz. te zien.

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

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Toont ondergrondse routes.  
    ![Kaart transport metro](@site/static/img/map/map-transport-subway.png)


## Tekstweergave {#text-rendering}

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

### Kaarttaal {#map-language}

De optie **Kaarttaal** configureert de spelling van namen op de OsmAnd-kaart voor zoomniveaus 7-20, inclusief. Voor zoomniveaus 2-6 worden de namen weergegeven in de taal die is ingesteld voor OsmAnd in het systeeminstellingenmenu (zie sectie *[Hoe de toepassingstaal te wijzigen](../start-with/first-steps.md#how-to-change-app-language)*).  

Als de namen op de kaart niet in de vereiste taal zijn vertaald door de OSM-gemeenschap, kunt u [getranslitereerde namen](https://en.wikipedia.org/wiki/Transliteration) gebruiken: *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) of *<Translate ios="true" ids="translit_names"/>* (iOS) schakelaar.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

- **Lokale namen**   
    ![Kaarttaal lokale namen](@site/static/img/map/map-language-local-names_2.png)

- **Voorkeurstaal** (oekraïens)   
    ![Kaarttaal oekraïens](@site/static/img/map/map-language-urkanian_2.png)

- **Gebruik Latijnse naam indien ontbrekend**   
    ![Kaarttaal transliteratie](@site/static/img/map/map-language-transliterate_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

- **Lokale namen**    
    ![Kaarttaal lokale namen](@site/static/img/map/map-language-local-names_2.png)

- **Voorkeurstaal** (oekraïens)  
    ![Kaarttaal oekraïens](@site/static/img/map/map-language-urkanian_2.png)

- **Toon lokale namen**  (voegt een 2e label toe als de lokale naam anders is)  
    ![Kaarttaal lokaal](@site/static/img/map/map-language-show-local_2.png)

- **Translitereer namen**    
    ![Kaarttaal transliteratie](@site/static/img/map/map-language-transliterate_2.png)

</TabItem>

</Tabs>  

### Kaartlettertypen (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*  

![Kaartlettertypen Android-versie](@site/static/img/map/map_fonts.png) ![Kaartlettertypen versie](@site/static/img/map/map_fonts_1.png)

Voor kaarten in vereenvoudigd/traditioneel Chinees, Japans en Koreaans kunnen onjuiste tekens of symbolen (zoals vierkanten) verschijnen als uw apparaat niet over de benodigde lettertypen beschikt. Dit probleem treedt op bij het weergeven van lokale namen en kan worden opgelost door de vereiste lettertypen via OsmAnd te downloaden.  

Enkele gerelateerde lettertypeproblemen zijn gedocumenteerd op GitHub: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## Topografische Weergave {#topography-rendering}

### * Hoogtelijnen {#-contour-lines}

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

Hoogtelijnen zijn compatibel met alle kaartstijlen en kunnen worden aangepast via het [Hoogtelijnen-menu](../plugins/topography.md#contour-lines). Voor meer details, bezoek het [Topografie-plugin](../plugins/topography.md) artikel.

### * Nautische diepte {#-nautical-depth}

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

### 3D Gebouwen {#3d-buildings}

<InfoAndroidOnly/> 

![3D Gebouwen](@site/static/img/map/3d_buildings_1_new.png) ![3D Gebouwen](@site/static/img/map/3d_buildings_2.png) 

De functie **3D Gebouwen** geeft gebouwen weer als volumetrische 3D-modellen in plaats van platte vormen. Gebouwen worden gegenereerd uit [OpenStreetMap-gegevens](https://wiki.openstreetmap.org/wiki/Simple_3D_Buildings), met gebruik van hoogte-informatie uit tags zoals `height` en `building:levels` wanneer beschikbaar. 3D-gebouwen worden alleen weergegeven bij hogere zoomniveaus (stad/straatweergave), waar individuele gebouwen kunnen worden weergegeven.  
Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → 3D gebouwen*  
Gebruik de hoofdschakelaar om 3D-weergave van gebouwen in- of uit te schakelen. Om gebouwen in 3D te bekijken, kantel de kaart door twee vingers op het scherm te plaatsen en omhoog te vegen.

Momenteel is deze optie alleen beschikbaar wanneer de [OsmAnd-ontwikkelingsplugin](../plugins/development.md) is ingeschakeld.  
Ga naar: *<Translate android="true" ids="shared_string_menu,plugin_settings,debugging_and_development"/>*

De instellingen voor 3D-gebouwen zijn verdeeld in twee groepen: **Uiterlijk** en **Prestaties**.

**Uiterlijk: Kleur**. Dit stuurt de kleur van 3D-gebouwen aan. Wanneer u op Kleur tikt, opent OsmAnd een apart voorbeeldscherm waarin u de kaart kunt zien terwijl u de instelling aanpast.
- **Kaartstijl** — gebruikt de standaard gebouwkleur uit de momenteel geselecteerde kaartstijl.
- **Aangepast** — laat u een aangepaste gebouwkleur instellen voor Dag / Nacht-modus.

:::tip Aankoop
KleurAanpassing van 3D Gebouwen is een [betaalde functie](../purchases/index.md).  
:::

Als aangepaste kleuren niet zijn gekocht, ziet u een lege toestand met een korte beschrijving en een Knop Ophalen. Als Aangepast beschikbaar is, kunt u schakelen tussen Dag en Nacht, een kleur kiezen uit het palet (of Alle kleuren openen), en vervolgens Toepassen tikken.

**Uiterlijk: Zichtbaarheid**. Dit stuurt de dekking (transparantie) van 3D-gebouwen aan. Gebruik de schuifregelaar om de zichtbaarheid als percentage in te stellen. Lagere waarden maken gebouwen transparanter en helpen wegen/labels leesbaar te houden. Hogere waarden maken gebouwen solider en visueel dominant. Tikken op Zichtbaarheid opent ook een apart voorbeeldscherm met de schuifregelaar.

Op de voorbeeldschermen (Kleur / Zichtbaarheid) kunt u Reset naar standaard gebruiken vanuit de app-balk om de standaardwaarde te herstellen.

**Prestaties: Detailniveau**. Dit stuurt aan hoe gedetailleerd de 3D-gebouwgeometrie is:
- Laag (standaard) — eenvoudigere geometrie.
- Hoog — meer gedetailleerde geometrie.

**Prestaties: Bezichtigingsafstand**. Dit stuurt aan hoe ver van de camera 3D-gebouwen worden weergegeven:
- Dichtbij (standaard) — geeft gebouwen dichterbij weer.
- Ver — geeft gebouwen vanaf een grotere afstand weer.

Beide prestatie-opties gebruiken een tweepositieschakelaar direct op het 3D-gebouweninstelscherm.


## Aanvullende Instellingen {#additional-settings}

### Grenzen tonen {#show-borders}

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

### Coördinatenraster {#coordinates-grid}

:::tip Aankoop
KleurAanpassing van Coördinatenraster is een [betaalde functie](../purchases/index.md).  
:::

Ga naar: *Menu → Kaart configureren → Tonen → Coördinatenraster*  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Coördinatenraster menu](@site/static/img/map/coordinates_grid_settings_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![show-borders-ios](@site/static/img/map/coordinates_grid_settings_ios.png)

</TabItem>

</Tabs>

De functie **Coördinatenraster** legt een referentieraster over de kaart, waardoor u breedte- en lengtegraadlijnen kunt visualiseren op basis van verschillende coördinatensystemen. Deze functie is handig voor nauwkeurige locatiereferentie en geospatiale navigatie. 

U kunt de volgende opties configureren:
- **Zoomniveaus:** stel het minimale en maximale zoomniveau in (2 - 22) waarop het raster zichtbaar is.
- **Labelpositie:** kies tussen *Randen* (standaard) of *Midden* voor rasterlabels.
- **Rasterkleur:** beschikbaar afzonderlijk voor Dag/Nacht-modus. 
- **Coördinaatformaat:** selecteer uit verschillende beschikbare formaten (zie lijst hieronder).


***Beschikbare coördinaatformaten:***

- **WGS84** (EPSG:4326) -  **DD°MM′SS″** (Graden, Minuten, Seconden)
- **WGS84** (EPSG:4326) - **DD.DDDDD°** (Decimale Graden - WGS84 standaardformaat)
- **WGS84** (EPSG:4326) - **DD°MM.MMM′** (Graden, Decimale Minuten)
- **UTM** (EPSG:6387, Universele Transversale Mercator - zone-gebaseerd rastersysteem). Het minimale zoomniveau is 9, er wordt slechts één UTM-zone tegelijk weergegeven, aangezien zones elke 6° door meridianen worden gescheiden
- **MGRS** (Militair Raster Referentie Systeem)

Standaard gebruikt de app het coördinaatformaat dat is geselecteerd in [Algemene instellingen](../personal/profiles.md#units--formats), maar u kunt het direct in dit menu wijzigen.

[Snelle actie](../widgets/quick-action.md#overview): U kunt ook een snelle schakelaar *Coördinatenraster tonen/verbergen* toevoegen aan de groep [Kaart configureren](../widgets/quick-action.md#configure-map) voor snelle toegang.

## Routes {#routes}

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


## Gerelateerde Artikelen {#related-articles}

- [Omgaan met Kaart](../map/interact-with-map.md)
- [Kaart configureren](../map/configure-map-menu.md)
- [Kaartstijlen](../map/map-styles.md)
- [Routes](../map/routes.md)
- [Importeren / Exporteren](../personal/import-export.md)
- [Kleurenpaletschema's](../personal/color-palette-schemes.md)