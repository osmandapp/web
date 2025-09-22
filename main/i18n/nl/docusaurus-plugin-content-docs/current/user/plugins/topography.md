---
source-hash: 9c31a0e4b56a15ce32014f004b8aa04a2f3dc8f40a876c929c1589350317a6ad
sidebar_position: 14
title: Topografie
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

:::info Betaalde functie
De Topografie-plugin is een [betaalde functie](../purchases/index.md) van de OsmAnd-app.
:::

Topografie is een belangrijk kenmerk van cartografie dat informatie verschaft om het reliëf van het terrein visueel te beoordelen.
Topografische informatie zoals [Hoogtelijnen](#contour-lines), [Terrein](#terrain) (*Schaduwreliëf* en *Helling*), en [3D-reliëf](#3d-relief) helpt om een visuele inschatting te maken van de ligging van het land door hoogte, reliëf, extremen, steilheid of punten van gelijke hoogte te zien.

Elke functie die door deze plugin wordt geleverd, is een onafhankelijke kaartlaag die, wanneer ingeschakeld, boven of onder de hoofdkaartbron kan worden weergegeven, afhankelijk van de [instellingen](../map/raster-maps.md#overlay-layer).

De Topografie-plugin biedt toegang tot de volgende kaarttypes:

- [Hoogtelijnen](#contour-lines). Dit is een [vectorkaart](../map/vector-maps.md) weergegeven in [**meters** of **voeten**](#contour-lines-meters-or-feet). Hoogtelijnen tonen hoogteniveaus en helpen het terrein te visualiseren.
- [Schaduwreliëf](#hillshade-slope-and-altitude-layers). Soorten kaarten met schaduw van heuvels en hellingen maken het reliëf beter zichtbaar en helpen het terrein visueel te interpreteren.
- [Helling](#hillshade-slope-and-altitude-layers). [Raster](../map/raster-maps.md)laag die informatie geeft over de steilheid van hellingen, wat belangrijk kan zijn voor routeplanning en veiligheid.
- [3D-reliëf](#3d-relief). Het is een [vectorkaart](../map/vector-maps.md) die een driedimensionale weergave van het terrein biedt, alleen beschikbaar met een [OsmAnd Pro-abonnement](../purchases/index.md).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Hoogtelijnen | Schaduwreliëf | Helling |
|:---|:---|:---|
| ![Hoogtelijnen_android](@site/static/img/plugins/contour-lines/Contour_lines_android.png) | ![Schaduwreliëf_android](@site/static/img/plugins/contour-lines/Hillshade_android.png) | ![Hellingen_android](@site/static/img/plugins/contour-lines/Slopes_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Hoogtelijnen | Schaduwreliëf | Helling |
|:---|:---|:---|
| ![Hoogtelijnen_ios](@site/static/img/plugins/contour-lines/Contour_lines_ios.png) | ![Schaduwreliëf_ios](@site/static/img/plugins/contour-lines/Hillshades_ios.png) | ![Hellingen_ios](@site/static/img/plugins/contour-lines/Slopes_ios.png) |

</TabItem>

</Tabs>

### Licentie voor DEM-gegevens gebruikt door OsmAnd voor terreindetectie {#license-for-dem-data-used-by-osmand-for-terrain-detection}

De hoogtegegevens op de kaart (tussen 70 graden noorderbreedte en 70 graden zuiderbreedte) zijn verkregen uit metingen die zijn uitgevoerd als onderdeel van de *Shuttle Radar Topography Mission (SRTM)*. Hierbij werd gebruik gemaakt van de *Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*, het primaire beeldvormingsinstrument in *NASA's Earth Observation System*.
Voor volledige informatie, zie de [Licentie](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>DEM (DSM) gegevens</summary>
   - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. De originele gegevens die voor dit product zijn gebruikt, zijn geleverd door JAXA's AW3D.<br/>
	- <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
	- <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummins, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
	- <a href="https://sonny.4lima.de">Sonny's LiDAR Digital Terrain Models of Europe</a> (DTM).

</details>


## Vereiste Instellingen {#required-setup-parameters}

Om **Hoogtelijnen** en **Terrein (Schaduwreliëf, Helling)** gegevens op de kaart weer te geven:

1. **Aankoop**: [OsmAnd+, Maps+ of OsmAnd Pro aankoopplan](../plugins/index.md#purchase)
2. [Inschakelen](../plugins/index.md#enable--disable) van de Topografie-plugin in de sectie Plugins van het *Hoofdmenu*.
3. [Downloaden](#download-maps): Hoogtelijnen, Schaduwreliëf, Helling of Terrein (3D) kaarten.
4. **Inschakelen en aanpassen**: Hoogtelijnen, Schaduwreliëf of Helling voor de kaartweergave.
5. U kunt ook de [YouTube-tutorial](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg) bekijken.

Om [**3D-reliëf**](#3d-relief) weer te geven, moet u het *OsmAnd Pro*-plan aanschaffen, inclusief toegang tot de Topografie-plugin.


## Kaarten Downloaden {#download-maps}

Om met de functionaliteit van de plugin te beginnen, moet u de kaarten downloaden waarin u geïnteresseerd bent. Sommige kaarten, zoals Hoogtelijnen voor bergachtige regio's, kunnen vrij groot zijn, meer dan 2 GB, en worden mogelijk niet ondersteund op verouderde apparaten.

Voor stabiel werk en om bronnen te besparen, kunt u een kaart downloaden van niet het hele land, maar van specifieke regio's, als dergelijke regio's in de applicatie worden aangeboden. Informatie over de grootte van elk kaarttype wordt onder hun naam vermeld.


### 3D-reliëfkaarten {#3d-relief-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*

![Hoogtelijnen downloaden Android](@site/static/img/plugins/contour-lines/downl_pack_andr_5.png)  ![Hoogtelijnen downloaden Android](@site/static/img/plugins/contour-lines/downl_pack_andr_4.png)

</TabItem>  

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*

![Hoogtelijnen downloaden iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_1.png) ![Hoogtelijnen downloaden iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_2.png)

</TabItem>

</Tabs>

U moet **Terreinkaart (3D)** kaarten downloaden om Schaduwreliëf, Helling en 3D-reliëf weer te geven. Na het downloaden van kaarten kunt u **Hoogtelijnen** en **Terrein** weergeven via de sectie [Kaart configureren](../map/configure-map-menu.md) van het *Hoofdmenu*.

Als de kaart die op het scherm wordt weergegeven niet is gedownload, dan wordt in *Menu → Kaart configureren → sectie Topografie → Terrein* onderaan de lijst met functies de sectie *Kaarten downloaden* met voorgestelde extra kaarten weergegeven.


### Hoogtelijnen (Meters of Voeten) {#contour-lines-meters-or-feet}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dialoogvenster downloaden hoogtelijnen Android](@site/static/img/plugins/contour-lines/contour_lines_download_dialogue_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Dialoogvenster downloaden hoogtelijnen iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png)

</TabItem>

</Tabs>  

Voor [**Hoogtelijnen**](#contour-lines) moet u bepalen in welke [eenheden](../personal/profiles.md#units--formats) (meters of voeten) ze op de kaart worden weergegeven en de juiste versie van de kaart naar uw apparaat downloaden.

**De eenheidsopties zijn niet uitwisselbaar**, dus als u moet overschakelen van meters naar voeten of omgekeerd, moet u de vorige versie van de Hoogtelijnenkaart verwijderen om de nieuwe versie te downloaden.


## Hoogtelijnen {#contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,download_srtm_maps"/>*

![Hoogtelijnen menu Android](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → Hoogtelijnen*

![Hoogtelijnen menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_ios.png)

</TabItem>

</Tabs>  

[Hoogtelijnen](../map/vector-maps.md#-contour-lines) zijn een grafische weergave van hoogtes op een kaart en zijn beschikbaar als vectorkaarten. Ze vormen lijnen die overeenkomen met punten met dezelfde hoogte, die contouren vormen waarmee u kunt bepalen in welke richting en hoeveel het oppervlak helt.

Bij gebruik van de [Kaartweergave-engine](../personal/global-settings.md#map-rendering-engine):

- **Versie 2 (OpenGL)**. Hoogtelijnen worden ondersteund in zowel 3D-weergave als 3D-reliëfmodus.
- **Versie 1**. Hoogtelijnen worden niet ondersteund bij gebruik van tegelkaarten afkomstig van het internet.

**Weergave-instellingen**:

- *<Translate android="true" ids="download_srtm_maps"/>*. Schakel hoogtelijnen in of uit.
- *<Translate android="true" ids="show_from_zoom_level"/>*. Definieer de [zoomniveaus](../map/interact-with-map.md#my-location-and-zoom) waarop hoogtelijnen zichtbaar zijn.
- *<Translate android="true" ids="srtm_color_scheme"/>*. Kies de kleur voor het weergeven van hoogtelijnen.
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>*. Pas de breedte van de hoogtelijnen aan.
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>*. Selecteer de dichtheid van de hoogtelijnen (Laag, Gemiddeld, Hoog). Hogere dichtheden kunnen de laadsnelheid beïnvloeden.
- *<Translate android="true" ids="maps_and_resources"/>*. Bekijk en download hoogtelijnkaarten voor de huidige regio en nabijgelegen gebieden.


## Terrein {#terrain}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrein menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_andr.png)  ![Terrein menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrein menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_ios.png)   ![Terrein menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_2_ios.png)

</TabItem>

</Tabs>  

De optie **Terrein** schakelt drie functies in en stelt u in staat deze aan te passen, zoals *Schaduwreliëf*, *Helling* en *Hoogte*.
Specifieke kenmerken:

- Er kan slechts één optie tegelijk worden ingeschakeld, ofwel Schaduwreliëf, Helling of Hoogte.
- Als u geen veranderingen ziet na het downloaden en inschakelen van de betreffende kaart, wordt aanbevolen de applicatie opnieuw te starten.

Het **Terrein**-menu omvat de selectie van een [kleurenschema](#default-color-scheme) met de optie om dit te [wijzigen](#modify-color-scheme) (voor [Pro-abonnees](../../user/purchases/index.md)), de mogelijkheid om de transparantie van de laag op de kaart te veranderen ([zichtbaarheid](#visibility)), en het selecteren van het [zoomniveau](#zoom-levels) voor de weergave ervan, informatie over de grootte van [gecachete gegevens](#cache-size), en een lijst met [kaarten](../../user/personal/maps-resources.md) die nodig zijn om de laag weer te geven.


## Schaduwreliëf-, Helling- en Hoogtelagen {#hillshade-slope-and-altitude-layers}

| Schaduwreliëf | Helling | Hoogte |
| ------ | ------- | ------- |
| ![Schaduwreliëf](../../../blog/2023-08-28-terrain/img/hillshade.png) | ![Helling](../../../blog/2023-08-28-terrain/img/slope.png) | ![Helling](../../../blog/2023-08-28-terrain/img/slope.png) |

**Schaduwreliëf** is gebaseerd op het simuleren van oppervlakteverlichting met behulp van terreingegevens. Deze methode omvat het creëren van schaduwen en hooglichten op basis van de hoek van het oppervlak ten opzichte van de lichtbron. Als gevolg hiervan ziet u natuurlijke heuvels, valleien en andere terreindetails op de kaart.

**Helling** bepaalt de hellingshoek van het oppervlak op basis van de hoogtegegevens van punten op de kaart. Berekeningen van de hellingshoek worden uitgevoerd rekening houdend met hoogteveranderingen en afstanden tussen punten, en deze verandering wordt weergegeven als een hellingshoek.

**Hoogte** vertegenwoordigt de hoogte van punten op de kaart ten opzichte van zeeniveau. Het helpt u te begrijpen hoe het terrein in hoogte verandert. Deze functie is met name handig voor activiteiten zoals wandelen of mountainbiken, waarbij het kennen van de hoogte kan helpen bij het plannen van routes en het beheren van fysieke inspanning. Hoogtegegevens zijn afgeleid van hoogtemodellen en bieden een duidelijk beeld van hoge en lage punten, waardoor het gemakkelijker wordt om de moeilijkheidsgraad van een route te beoordelen of pieken en dalen langs uw reis te identificeren.

**Schaduwreliëf**, **Helling** en **Hoogte** rasterkaarten worden gemaakt op basis van raster terreingegevens zoals Digital Elevation Models (DEM).

**Gebruik:**

- *Navigatie.* Helpt bij het identificeren van steile hellingen, zowel bergafwaarts als bergopwaarts, wat cruciaal kan zijn voor veilige navigatie.
- *Routes plannen.* Helpt bij het kiezen van de meest geschikte routes, rekening houdend met het terrein.
- *Terrein-inschatting.* Het is handig voor het visualiseren van het landschap, vooral als u wandelt of fietst.


### Standaard Kleurenschema {#default-color-scheme}

| Schaduwreliëf | Helling | Hoogte |
| ------ | ------- | ------- |
|![Schaduwreliëf](@site/static/img/plugins/contour-lines/color_scheme_hillshade_menu_2.png)|![Helling](@site/static/img/plugins/contour-lines/color_scheme_slope_menu_2.png)| ![Menu](@site/static/img/plugins/contour-lines/color_scheme_altitude_menu.png) |

- *Schaduwreliëf* gebruikt donkere tinten om hellingen, pieken en laaglanden te tonen. De virtuele zon heeft een vaste azimut (richting) van 315 graden.

- *Helling* gebruikt kleur om de steilheid van het terrein te visualiseren. U kunt er meer over lezen [hier](https://en.wikipedia.org/wiki/Grade_(slope)). Elke kleur komt overeen met een afwijkingshoek van de horizontaal. Een extra *Helling* kleurenschema, ***Lawine***, is beschikbaar in het **Wijzigen** menu.

- *Hoogte*. De hoogtekaart kleurt elke pixel volgens de berekende kaarthoogte met behulp van het verloop van een gedefinieerd kleurenschema. Meestal zijn hoogteschema's sterk afhankelijk van de locatie. In berggebieden geeft u er de voorkeur aan kleuren te verdelen over een breder hoogtebereik en in vlakke gebieden kiest u een kleurenschema met een klein bereik tussen min/max hoogte.

> *Lees het artikel [Kleurenschema](../personal/color-palette-schemes.md) voor meer informatie.*


### Kleurenschema Wijzigen {#modify-color-scheme}

:::info Betaalde functie
*Kleurenschema Wijzigen* is een **OsmAnd Pro** betaalde functie voor [iOS](../purchases/ios.md#pro-features) en [Android](../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kleurenschema Wijzigen](@site/static/img/plugins/contour-lines/modify_color_scheme_1_andr.png)   ![Kleurenschema Wijzigen](@site/static/img/plugins/contour-lines/modify_color_scheme_2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Kleurenschema Wijzigen](@site/static/img/plugins/contour-lines/modify_color_scheme_1_ios.png)   ![Kleurenschema Wijzigen](@site/static/img/plugins/contour-lines/modify_color_scheme_2_ios.png)

</TabItem>

</Tabs>

De functie *Kleurenschema Wijzigen* stelt u in staat een kleurenschema te selecteren:

- Uit een [vooraf gedefinieerde lijst](#default-color-scheme).
- Uit kleurenpaletbestanden die u op uw computer hebt gemaakt. Aangepaste bestanden kunnen aan OsmAnd worden toegevoegd met behulp van de [import/export tool](../personal/import-export.md).

U kunt [deze paletten bewerken](../personal/color-palette-schemes.md#edit-palette-file) om het uiterlijk van kaarten en routes te personaliseren.


### Zichtbaarheid {#visibility}

| Zichtbaarheid 31% | Zichtbaarheid 74% |
| ------ | ------- |
| ![Zichtbaarheid ](../../../blog/2023-08-28-terrain/img/31.png) | ![Zichtbaarheid ](../../../blog/2023-08-28-terrain/img/74.png) |

De functie *Zichtbaarheid* wordt gebruikt om de transparantie van de schaduwen voor Schaduwreliëf en de kleuren die worden gebruikt voor de weergave van de hoek in de Helling-parameter aan te passen.

### Zoomniveaus {#zoom-levels}

![Zoom](../../../blog/2023-08-28-terrain/img/zoom.png)  

De functie *Schaalniveaus* stelt u in staat de minimum- en maximumwaarden van de kaartzoomniveaus in te stellen, variërend van 4 tot 19, waarop de Schaduwreliëf- of Helling-kaartlagen worden weergegeven.

### Cachegrootte {#cache-size}

**Cachegrootte** is een informatieve sectie die de hoeveelheid geheugen op uw apparaat weergeeft die momenteel wordt gebruikt voor *Terrein*-gegevens. Elke keer dat u *Schaduwreliëf*- of *Helling*-informatie op een kaart bekijkt, worden al deze gegevens tijdelijk in de cache opgeslagen voor snelle toegang en later gebruik, waardoor extra belasting van de processor van uw apparaat wordt vermeden.

**Het wissen van de cache** is soms nodig om ruimte op uw apparaat vrij te maken of om mogelijke prestatieproblemen op te lossen. Om de cache te wissen, moet u naar de *Systeeminstellingen* van het apparaat gaan, waarna het pad als volgt kan zijn: *Applicaties → OsmAnd → Opslag → Cache wissen*.


### Rendering Engine (Android) {#rendering-engine-android}

**Schaduwreliëf** en **Helling** worden weergegeven en aangepast in elke geselecteerde [Kaartweergave-engine](../personal/global-settings.md#map-rendering-engine).

1. Als u de **Kaartweergave-engine Versie 1** gebruikt, moet u de normale [download](../start-with/download-maps.md) van Schaduwreliëf- en Helling-rasterkaarten gebruiken.

2. Als u de **Kaartweergave-engine Versie 2 (OpenGL)** gebruikt:
    - U kunt doorgaan met het gebruik van de normale download van Schaduwreliëf- en Helling-rasterkaarten. Hiervoor moet u echter de [OsmAnd ontwikkelingsplugin](../plugins/development.md) activeren en de instelling [Gebruik raster SQLite-formaat voor schaduwreliëf en helling](../plugins/development.md#terrain) inschakelen.

    - Als alternatief kunt u de [Terreinkaart (3D)](../personal/maps-resources.md#paid-features-for-the-selected-location) download gebruiken. Dit bespaart geheugenruimte op uw apparaat, en de Schaduwreliëf-, Helling- en 3D-reliëfeffecten worden hiermee gegenereerd met behulp van uw apparaat.


### Snelle Acties {#quick-actions}

![QA voor Terrein](@site/static/img/plugins/contour-lines/QA_for_terrain.png)

U kunt de *Snelle Actie*-knoppen op het kaartscherm gebruiken om de zichtbaarheid van [Hoogtelijnen](#contour-lines), [Terrein](#terrain)-lagen en [Terrein kleurenschema](#default-color-scheme) te wisselen. Afhankelijk van de laag die is geselecteerd in het menu Kaart configureren, zal het toewijzen van een *Terrein*-actie aan de knop *Schaduwreliëf*, *Helling* of *Hoogte* weergeven.

De hoofdinstellingen voor *Toon of Verberg kaarttypes* bevinden zich in de sectie Topografie van het menu Kaart configureren. In het artikel [Snelle Actie](../widgets/quick-action.md#configure-map) vindt u een lijst met lagen die beschikbaar zijn voor weergave. Als u snelle toegang tot deze kaartconfiguratie nodig heeft, gebruik dan de tool *Aangepaste Knop*.

- Ga naar [Actie toevoegen](../widgets/quick-action.md#custom-buttons): *Menu → Scherm configureren → Aangepaste knoppen → Snelle actie → Actie toevoegen → Kaart configureren*.
- Voeg een of meer QA-knoppen toe om de zichtbaarheid van een bepaalde topografielaag te wijzigen.


## 3D-reliëf {#3d-relief}

:::info Pro-functie
3D-reliëf is een [**OsmAnd Pro**](../purchases/index.md) betaalde functie <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/>*

![3D-reliëf](@site/static/img/plugins/contour-lines/3drelief_switch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/>*

![3D-reliëf](@site/static/img/plugins/contour-lines/3drelief_switch_ios.png)

</TabItem>

</Tabs>  

De 3D-reliëffunctie produceert een verhoogd reliëf en biedt een driedimensionale weergave van het landschap. 3D-reliëf werkt offline en kan worden gebruikt met [OsmAnd-vectorkaarten](../map/vector-maps.md) of elke [rasterkaart](../map/raster-maps.md#select-raster-maps) als [Kaartbron](../map/raster-maps.md#main) of als [Onderlaag/Overlaag](../map/raster-maps.md#overlay-layer).

***Hoe 3D-reliëf op de kaart weer te geven.***

- Koop een **OsmAnd Pro**-abonnement voor [iOS](../purchases/ios.md#pro-features) of [Android](../purchases/android.md#pro-features).

- Ga naar [*<Translate Android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md):
    - **Android**: scroll naar *<Translate android="true" ids="srtm_plugin_name"/> sectie → <Translate android="true" ids="relief_3d"/>*.
    - **iOS**: scroll naar *<Translate ios="true" ids="srtm_plugin_name"/> sectie → <Translate ios="true" ids="shared_string_terrain,shared_string_relief_3d"/>*.

- Download de [Terreinkaart (3D)](#3d-relief-maps) van de regio's, indien nodig.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Vectorkaartlaag | Rasterkaartlaag |
| ------ | ------- |
| ![3D-reliëf](@site/static/img/plugins/contour-lines/3drelief_button_android_1.png) | ![3D-reliëf](@site/static/img/plugins/contour-lines/3drelief_button_android_2.png) |

</TabItem>  

<TabItem value="ios" label="iOS">

| Vectorkaartlaag | Rasterkaartlaag |
| ------ | ------- |
| ![3D-reliëf](@site/static/img/plugins/contour-lines/3drelief_button_ios_1.png)  | ![3D-reliëf](@site/static/img/plugins/contour-lines/3drelief_button_ios_2.png) |

</TabItem>

</Tabs>


### Verticale Overdrijving {#vertical-exaggeration}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/> → Verticale overdrijving*

![Verticale overdrijving Android](@site/static/img/plugins/contour-lines/vertical_exag_and.png)

</TabItem>  

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/> → Verticale overdrijving*

![Verticale overdrijving iOS](@site/static/img/plugins/contour-lines/vertical_exag.png)

</TabItem>

</Tabs>

*Verticale overdrijving* is een speciale coëfficiënt voor *3D-reliëf*. U kunt de schaal (*Verticale overdrijving*) wijzigen van x1 tot x3. Met deze functie kunt u vloeiendere terreincontouren met meer detail bekijken.


### Schaduwreliëf en 3D-reliëf {#hillshade-and-3d-relief}

| Schaduwreliëf | 3D-reliëf |
|--------|---------|
| ![Terreinlagen](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terreinlagen](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

**Schaduwreliëf** is een type kaart dat terrein weergeeft met behulp van schaduwen, waardoor een visuele weergave van de helling en vorm van het aardoppervlak ontstaat.
**3D-reliëf** is een functie die driedimensionale effecten aan de kaart toevoegt.

Als u *Schaduwreliëf* **uitschakelt** en *3D-reliëf* **inschakelt**, zullen reliëfschaduwen nog steeds zichtbaar zijn omdat *Schaduwreliëf* en *3D-reliëf* twee verschillende manieren zijn om een kaart te visualiseren. *Schaduwreliëf* creëert schaduwen op basis van het terrein en voegt deze toe aan de kaart, terwijl *3D-reliëf* 3D-elementen modelleert om de diepte en vorm van het terrein te tonen, en de schaduwen maken deel uit van de visualisatie. Deze functies kunnen parallel werken, en het uitschakelen van *Schaduwreliëf* heeft geen invloed op hoe 3D-effecten worden weergegeven.

Wanneer **Schaduwreliëf** is **ingeschakeld**, lijkt een afbeelding met reliëfschaduwen gedetailleerder, donkerder en meer getrapt dan een *3D-reliëf*-afbeelding. De verklaring is dat *Schaduwreliëf* de gradiënten en contrasten van het terrein benadrukt, waardoor een scherper en gedetailleerder beeld ontstaat. De *3D-reliëf*-functie geeft de kaart een vloeiender en gladder uiterlijk, waardoor het terrein wordt verzacht en de zichtbaarheid van sommige fijnere details mogelijk wordt verminderd.


## Laagtypes Combineren {#combine-layer-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Hoogtelijnen gecombineerd met Schaduwreliëf](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Hoogtelijnen gecombineerd met Helling](@site/static/img/plugins/contour-lines/5_slope_n_contour.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Hoogtelijnen gecombineerd met Schaduwreliëf in iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Hoogtelijnen gecombineerd met Helling in iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>

OsmAnd stelt u in staat om meerdere soorten kaartlagen te combineren voor een meer visuele weergave.

- De combinatie van **Hoogtelijnen** en **Schaduwreliëf** is optimaal voor het visueel en numeriek inschatten van de steilheid van berghellingen.
- De combinatie van **Hoogtelijnen** en **Helling**-lagen is het beste voor het inschatten van de steilheid van hellingen en het vinden van punten met dezelfde hoogte.
- De combinatie van **3D-reliëf** en **Schaduwreliëf**-lagen stelt u in staat een meer realistische en visuele weergave van het terrein, reliëf en landschapsdetails te krijgen. Deze combinatie is vooral geschikt voor bergachtig en heuvelachtig terrein.


## Gerelateerde Artikelen {#related-articles}

- [Interactie met de Kaart](../../user/map/interact-with-map.md)
- [Algemene Instellingen](../../user/personal/global-settings.md)
- [Vectorkaarten (Kaartstijlen)](../../user/map/vector-maps.md)

### Veelvoorkomende Problemen en Oplossingen {#common-issues-and-solutions}

<!-- Troubleshooting Steps-->

1. Hoe de aankoop van de Topografie (voorheen Hoogtelijnen) plugin te herstellen. [(check)](../troubleshooting/purchases_payments.md#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase).
2. Hoogtelijnen, Hoogtegegevens of 3D-reliëf worden niet weergegeven. [(check)](../troubleshooting/maps-data#contour-lines-elevation-data-or-3d-relief-are-not-displayed)
3. De kaart schakelt automatisch over naar 3D-modus tijdens navigatie:
    - Zorg ervoor dat de **3D-modus** knop is uitgeschakeld in **Menu → Scherm configureren → Knoppen → Standaardknoppen**.
    - Controleer of er Terrein-functies zijn ingeschakeld in **Menu → Kaart configureren → Topografie** die een 3D-effect kunnen veroorzaken.