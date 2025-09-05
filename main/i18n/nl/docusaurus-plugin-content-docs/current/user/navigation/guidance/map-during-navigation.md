---
source-hash: 68655a6c7fe1b929b9783bb5b12d4b9eed49a59c076b848011eac29f4e3130f9
sidebar_position: 1
title: Kaartscherm tijdens navigatie
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

Dit artikel beschrijft hoe u het uiterlijk van de kaart tijdens navigatie kunt configureren. Dit omvat functies zoals het weergeven van [POI's langs de route](#show-points-along-the-route), het gebruik van [schermwaarschuwingen](#screen-alerts), [uiterlijk van de routelijn](#route-line-appearance) inclusief kleur, breedte en afslagpijlen. Deze functies zijn nauw verwant aan de [route navigatie-instellingen](../setup/route-navigation.md#settings).


## Kaart tijdens navigatie {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

![Kaartscherm tijdens navigatie](@site/static/img/navigation/configure_map-during-navigation_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Kaartscherm tijdens navigatie](@site/static/img/navigation/configure_map-during-navigation_ios.png)

</TabItem>

</Tabs>

Tijdens het navigeren is de kaart een visueel hulpmiddel om uw positie te bepalen, uw bestemming te identificeren, uw route te plannen en navigatieaanwijzingen te bekijken. U kunt hiervoor inzoomen en de kaart naar behoefte slepen en roteren. De kaart kan ook wegeninformatie, straatnamen, gebouwen en andere objecten weergeven om u te helpen uw route gemakkelijk te bepalen.  

Tijdens de navigatie past het uiterlijk van de kaart zich aan op basis van het geselecteerde navigatieprofiel. Voordat u met navigeren begint, moet u ervoor zorgen dat het uiterlijk van de kaart overeenkomt met uw voorkeuren voor hoe deze moet functioneren tijdens het rijden.

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* | De tijd waarvoor de kaartweergave wordt gesynchroniseerd met de huidige positie na verplaatsing. | *Waarde:* <br /> Nooit, 5 sec, 10 sec, 15 sec, 20 sec, 25 sec, 30 sec, 45 sec, 60 sec, 50 sec.|
| *<Translate android="true" ids="auto_zoom_map"/>* | Schaal de kaart automatisch volgens uw snelheid, zolang de kaart gesynchroniseerd is met uw huidige positie. | *Waarde:* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - handmatig zoomen. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - zoom is 200 m.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - zoom is 100 m. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - zoom is 5 m. |
| *<Translate android="true" ids="snap_to_road"/>* | Het pictogram van de huidige positie wordt gekoppeld aan de huidige navigatieroute. | U kunt deze optie uitschakelen, maar alle weggerelateerde opties, zoals rijstrookweergave, zijn dan ook niet zichtbaar tijdens de navigatie. |
| *<Translate android="true" ids="approximate_bearing"/>* | Bepaalt de koers op basis van de navigatieroute die u volgt. | De instelling is alleen zichtbaar wanneer de [OsmAnd ontwikkelingsplugin](../../plugins/development.md) is ingeschakeld. <br /> Deze instellingen moeten worden ingeschakeld als de oriëntatie van de richtingskaart wordt omgedraaid of schommelt bij gebruik van [Android Auto](../auto-car.md#common-issues-and-solutions). |


## Punten langs de route weergeven {#show-points-along-the-route}

De instelling *Weergeven langs de route* stelt u in staat om aanvullende routeparameters te configureren en is vereist voor de werking van widgets zoals de [Straatnaam](../../widgets/nav-widgets#street-name) en de [Waarschuwingswidget](../../widgets/nav-widgets.md#alert-widget). Opties omvatten het weergeven van [**POI's**](#points-of-interest-pois) en [**Mijn Favorieten**](#my-favorites) langs de route of het gebruiken ervan als aanvulling op de reeds geconfigureerde voor het profiel, evenals het weergeven van een complete lijst met [**Verkeerswaarschuwingen**](#traffic-warnings) langs de route.  

- De mogelijkheid om verschillende afstanden (tot 5 km, afhankelijk van de [lengte-eenheid](../../personal/profiles.md#units--formats) die u instelt) van de route tot nabijgelegen punten in te stellen, is handig bij het gebruik van routeringstypen zoals [Rechte lijn routering](../routing/straight-line-routing.md) of [Direct-naar-punt routering](../routing/direct-to-point-routing.md).
- Voor de instelling *Weergeven langs de route* wordt aanbevolen om [Gesproken aanwijzingen](../guidance/voice-navigation.md) te gebruiken voor navigatie.
- *POI's, Favorieten en Verkeerswaarschuwingen* worden niet weergegeven in de lijst voor een route die u al hebt afgelegd.


### Punten bekijken en selecteren {#view-and-select-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,show_along_the_route"/>*

![punten langs de route](@site/static/img/navigation/show-points-along-4-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>* *→ Weergeven langs de route*

![punten langs de route](@site/static/img/navigation/show-points-along-4-ios.png)  

</TabItem>

</Tabs>

Wanneer u een route maakt, kunt u in de sectie *Navigatie* de typen punten instellen die langs de route moeten worden weergegeven.


### Nuttige plaatsen (POI's) {#points-of-interest-pois}

![POI-overlay Android](@site/static/img/map/poi_overlay_android.png) ![POI-overlay iOS](@site/static/img/map/poi_overlay_ios.png)

POI-instellingen in [*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-pois) zijn gekoppeld aan de instelling **Weergeven langs de route**. Dit is in wezen een aanvullende instelling voor het weergeven van POI's op de kaart, direct gerelateerd aan de gemaakte route.  

Wanneer u de weergave van bepaalde POI's op de *Kaart configureren* opgeeft, worden ze allemaal weergegeven op de kaarten die u hebt gedownload, ongeacht of u categorieën hebt geselecteerd of, als het u niet uitmaakt welke categorie, nabijgelegen POI's hebt geselecteerd.  

- Het aantal en de identificatie van POI's is *schaalafhankelijk*.

- De instelling *Weergeven langs de route* toont dezelfde categorie als in de *POI-overlay*, maar u ziet de *hele lijst* met geselecteerde POI's in één keer, beginnend vanaf het punt van de huidige locatie op de ingestelde afstand binnen uw route.  

- U kunt onnodige POI's uit de lijst verwijderen of bewerken in het [Contextmenu](../../map/map-context-menu.md) door op een ervan te tikken.

- De lijst bevat de geselecteerde [POI-typen](../../map/point-layers-on-map.md#poi-types) en korte informatie over elk ervan, zoals het *type-pictogram, naam, afstand van het huidige locatiepunt tot de POI langs de route*, en *aanduidingen van welke kant van de route in een rechte lijn en hoe ver de POI verwijderd is*.  


### Mijn Favorieten {#my-favorites}

De lijst bevat alle eerder toegevoegde [Favoriete](../../personal/favorites.md#favorite-point) punten in de buurt van de route die u hebt gemaakt. Net als bij POI's kunt u de afstand selecteren waarop deze punten zich bevinden.  

- Als u [de weergave van Favorieten op de kaart uitschakelt](../../map/configure-map-menu.md), verdwijnen ze niet uit de lijst en blijven ze zichtbaar in de [widget](../../widgets/nav-widgets.md#street-name) en worden ze aangekondigd wanneer u ze nadert.

- U kunt uw *Favoriete punten* niet alleen van tevoren aan de kaart toevoegen, maar ook tijdens het navigeren van een route.

- *Om de lijst bij te werken*, schakelt u Mijn Favorieten uit en vervolgens weer in.

- Elk punt bevat een naam of coördinaten, een groep, de afstand van het huidige locatiepunt tot de *Favoriet* direct op de routelijn, informatie over hoe ver naar rechts of links het punt van de lijn is, en de richting van de route.


### Verkeerswaarschuwingen {#traffic-warnings}

*Verkeerswaarschuwingen* worden niet direct op de kaart weergegeven zoals *POI's* of *Mijn Favorieten*.

- **Om deze optie in te schakelen** en de waarschuwingen te zien, moet u eerst de [Waarschuwingswidget](../../widgets/nav-widgets.md#alert-widget) inschakelen en configureren.

- De keuze om *Verkeerswaarschuwingen* langs uw route weer te geven, stelt u in staat om de hele lijst te zien vlak voordat u uw route begint, wat handig is bij het plannen van uw reis.

- U kunt onnodige waarschuwingen uit de lijst verwijderen, of op de naam van de waarschuwing tikken om de [locatie te bewerken](../../map/map-context-menu.md#avoid-road).


## Schermwaarschuwingen {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

</TabItem>

</Tabs>

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="screen_alerts"/>** | Meldingen, zoals verkeerswaarschuwingen of snelheidslimieten, verschijnen op het scherm als een widget. Ze verschijnen in de linkerbenedenhoek terwijl u navigeert. | [Typen waarschuwingswidgets](../../widgets/nav-widgets.md#alert-widget) |


## Uiterlijk van de routelijn {#route-line-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Navigatieroute Android](@site/static/img/navigation/route/route_line_appearance_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Navigatieroute Android](@site/static/img/navigation/route/RLApp_iOS.png)

</TabItem>

</Tabs>  

U kunt het uiterlijk van de routelijn selecteren op stijl of handmatig de kleur, breedte en transparantie van de lijn selecteren. Bovendien kunt u kiezen of u afslagpijlen en richtingpijlen op de lijn wilt weergeven.

**Geavanceerd**: met de instelling Routelijn aanpassen kunt u het uiterlijk van de routelijn aanpassen om hoogteverschillen, aanzienlijke stijgingen of dalingen, ijs op de weg, onverharde wegen, snelwegen en andere mogelijke obstakels weer te geven. U kunt ook aangepaste [kleurenschema's](../../personal/color-palette-schemes.md#routes) selecteren of maken om toe te passen op de routelijn.


:::note
 <ProFeature/> Sommige parameters kunt u alleen gebruiken met een <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro-abonnement</a>.
:::


### Kleur {#color}

De instelling **Kleur** verandert de kleurtinten van de routelijnen. Hun algehele kleur verandert afhankelijk van het geselecteerde type uit de OsmAnd-collectie, en volgens de **Kaartlegenda**. Als alternatief wordt hun kleur de kleur en transparantie die u handmatig instelt.

- ***<Translate android="true" id="map_widget_renderer"/>***. Gebruikt met de standaardkleuren. Voor een volledige beschrijving van de kleuren, ga naar [Standaard kaartstijlen](../../map/vector-maps.md#default-map-styles).  
    ![kaartstijl](@site/static/img/navigation/route/map_st_2.png)

- ***Aangepast***. Hiermee kunt u een lijn selecteren in elke gewenste kleur en transparantie. U kunt verschillende instellingen selecteren voor de dagkaart en afzonderlijk voor de nachtkaart.  
    ![aangepast](@site/static/img/navigation/route/custom.png)   ![aangepast](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. Het toont de hoogte van het routepunt als een **groen-geel-rood** gradiënt. **Groen** geeft het laagste punt van de route aan, **geel** geeft de gemiddelde hoogte van het punt aan, en **rood** is het hoogste. Als het hoogteverschil van de route < 100 meter is, wordt het gradiënt gedeeltelijk toegepast of niet toegepast, bijvoorbeeld voor een eenvoudige klim van 100 meter naar 150 meter - het gradiënt zal **groen-geel** zijn. Merk op dat de kleur niet de absolute waarde van de hoogte vertegenwoordigt.  
    ![Hoogte](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. De routelijn is gekleurd in verschillende kleuren, afhankelijk van het hoogteprofiel van de route. Een gedetailleerde beschrijving vindt u in het artikel over de *Topografie-plugin*, sectie [Helling](../../plugins/topography.md#hillshade-slope-and-altitude-layers).  
    ![Hoogte](@site/static/img/navigation/route/Slope.png)   ![Hoogte](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. Kleurt een route- of spoorlijn volgens de *wegclassificatie*. Een gedetailleerde beschrijving vindt u in het artikel *Vector Maps - [Wegstijl](../../map/vector-maps.md#road-style)*.  
    ![Hoogte](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. Biedt informatie over het fysieke oppervlak van de weg of het pad. Een gedetailleerde beschrijving is te vinden in het artikel *OsmAnd Kaartstijl - [Oppervlak](../../map-legend/osmand.md#surface-smoothness)* in de sectie *Kaartlegenda*.  
    ![Hoogte](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. Classificatie van de manoeuvreerbaarheid van wegen of paden voor voertuigen op wielen, met name met betrekking tot de regelmaat en gladheid van het oppervlak. Een gedetailleerde beschrijving is te vinden in het artikel *OsmAnd Kaartstijl - [Gladheid](../../map-legend/osmand.md#surface-smoothness)* in de sectie *Kaartlegenda*.  
    ![Hoogte](@site/static/img/navigation/route/Smoothness.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. Kleurt een route- of spoorlijn volgens de *winterwegclassificatie*. Een gedetailleerde beschrijving is te vinden in het artikel *Vector Maps*, sectie [Winter- en ijswegen](../../map/vector-maps.md#winter-and-ski).  
    ![Hoogte](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. Kleuring van een route- of padlijn op basis van de samenstelling van het wegdek. Typisch gebruikt wanneer het wegennet grotendeels onverhard is. Een gedetailleerde beschrijving is te vinden in het artikel *OsmAnd Kaartstijl - [Oppervlaktehardheid](../../map-legend/osmand.md#surface-smoothness)* in de sectie *Kaartlegenda*.  
    ![Hoogte](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;Moeilijkheidsgraad van ruiterpaden***. Geef paden weer op basis van de moeilijkheidsgraad van ruiterpaden.  
    ![Hoogte](@site/static/img/navigation/route/firmness.png)


### Breedte {#width}

U kunt de breedte van de routelijn aanpassen aan de weg of het pad dat op de kaart wordt weergegeven. Voor een duidelijkere visuele identificatie kunt u de lijnbreedte handmatig vergroten of verkleinen, indien nodig. Voor meer details, raadpleeg het artikel *Tracks en Routes — [Uiterlijk](../../map/tracks/appearance.md)*.

- ***<Translate android="true" id="map_widget_renderer"/>***. Het wordt gebruikt met de standaardbreedte die door OsmAnd is ingesteld. Een volledige beschrijving is te vinden in het artikel *Vector Maps*, sectie [Kaartstijl](../../map/vector-maps.md#default-map-styles).  
    ![kaartstijl](@site/static/img/navigation/route/map_st_2.png)

- ***Dun, Gemiddeld en Vetgedrukt***. U kunt de breedte van de lijn selecteren om overeen te komen met de breedte van de weg, of de routelijn sterker benadrukken op de kaart.  
    ![breedte](@site/static/img/navigation/route/width_med.png)

- ***Aangepast***. Hiermee kunt u een lijn weergeven met de breedte die u nodig hebt. Gebruik de schuifbalk om de breedte te selecteren.  
    ![aangepast](@site/static/img/navigation/route/custom_2.png)  


### Afslagpijlen {#turn-arrows}

De instelling Afslagpijlen stelt u in staat om te selecteren of afslagpijlen op de routelijn worden weergegeven.  

- ***Op kaart***  
    ![Hoogte](@site/static/img/navigation/route/turn_arr_on_map_and.png)   ![afslagpijlen_ios_kaart](@site/static/img/navigation/route/turn_arr_ios_on_map.png)  

- ***In app***  
    ![Hoogte](@site/static/img/navigation/route/turn_arr.png)   ![afslagpijlen_ios](@site/static/img/navigation/route/turn_arr_ios.png)


## Gerelateerde artikelen {#related-articles}

- [Routeparameters](../routing/osmand-routing.md#routing-types)
- [Routevoorbereiding](../setup/route-navigation.md)
- [Navigatie via spoor](../setup/gpx-navigation.md)
- [Navigatie via markeringen](../setup/markers-navigation.md)
- [Routedetails](../setup/route-details.md)
- [Navigatie-instellingen](./navigation-settings.md)
- [Gesproken aanwijzingen / Meldingen](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Laatst bijgewerkt: december 2024*