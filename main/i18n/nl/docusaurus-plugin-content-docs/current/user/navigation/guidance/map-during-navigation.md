---
source-hash: 5ea4f39511656fdb1c0f82a7a7dd625d84541afc04cd5b239076bb4ba1bdd62c
sidebar_position: 2
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

Dit artikel beschrijft hoe u het uiterlijk van de kaart tijdens de navigatie kunt configureren. Dit omvat functies zoals het weergeven van [POI's langs de route](#show-points-along-the-route), het gebruik van [schermwaarschuwingen](#screen-alerts), het [uiterlijk van de routelijn](#route-line-appearance) inclusief kleur, breedte en afslagpijlen. Deze functies zijn nauw verbonden met de [instellingen voor routenavigatie](../setup/route-navigation.md#settings).


## Kaart tijdens navigatie {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Kaartscherm tijdens navigatie](@site/static/img/navigation/configure_map-during-navigation_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Kaartscherm tijdens navigatie](@site/static/img/navigation/configure_map-during-navigation_ios.png)

</TabItem>

</Tabs>

Tijdens het navigeren is de kaart een visueel hulpmiddel om uw positie te bepalen, uw bestemming te identificeren, uw route te plannen en navigatiebegeleiding te bekijken. U kunt hiervoor inzoomen en de kaart naar wens verslepen en draaien. De kaart kan ook weginformatie, straatnamen, gebouwen en andere objecten weergeven om u te helpen uw route gemakkelijk te bepalen.  

Tijdens de navigatie past het uiterlijk van de kaart zich aan op basis van het geselecteerde navigatieprofiel. Voordat u de navigatie start, moet u ervoor zorgen dat het uiterlijk van de kaart overeenkomt met uw voorkeuren voor hoe deze tijdens het rijden moet functioneren.

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* | De tijd waarvoor de kaartweergave wordt gesynchroniseerd met de huidige positie na verplaatsing. | *Waarde:* <br /> Nooit, 5 sec, 10 sec, 15 sec, 20 sec, 25 sec, 30 sec, 45 sec, 60 sec, 50 sec.|
| *<Translate android="true" ids="auto_zoom_map"/>*  | Schaal de kaart automatisch op basis van uw snelheid, zolang de kaart is gesynchroniseerd met uw huidige positie. | *Waarde:* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - handmatig zoomen. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - zoom is 200 m.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - zoom is 100 m. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - zoom is 5 m. |
| *<Translate android="true" ids="snap_to_road"/>*  | Het pictogram van de huidige positie wordt gekoppeld aan de huidige navigatieroute. | U kunt deze optie uitschakelen, maar alle weggerelateerde opties, zoals rijstrookweergave, zijn dan ook niet zichtbaar tijdens de navigatie. |
| *<Translate android="true" ids="approximate_bearing"/>* | Bepaalt de koers op basis van de navigatieroute die u volgt. | De instelling is alleen zichtbaar als de [OsmAnd ontwikkelingsplugin](../../plugins/development.md) is ingeschakeld. <br /> Deze instellingen moeten worden ingeschakeld als de oriëntatie van de richtingkaart wordt omgedraaid of trilt bij gebruik van [Android Auto](../auto-car.md#common-issues-and-solutions). |


## Punten langs de route tonen {#show-points-along-the-route}

De instelling *Langs de route tonen* stelt u in staat om aanvullende routeparameters te configureren en is vereist voor de werking van widgets zoals de [Straatnaam](../../widgets/nav-widgets#street-name) en de [Waarschuwingswidget](../../widgets/nav-widgets.md#alert-widget). Opties omvatten het weergeven van [**POI's**](#points-of-interest-pois) en [**Mijn Favorieten**](#my-favorites) langs de route of het gebruik ervan als aanvulling op de reeds geconfigureerde voor het profiel, evenals het weergeven van een volledige lijst van [**Verkeerswaarschuwingen**](#traffic-warnings) langs de route.  

- De mogelijkheid om verschillende afstanden in te stellen (tot 5 km, of 3,11 mijl, afhankelijk van de ingestelde [lengte-eenheid](../../personal/profiles.md#units--formats)) vanaf de route tot nabijgelegen punten is handig bij het gebruik van routeringstypes zoals [Rechte lijn](../routing/straight-line-routing.md) of [Direct-naar-punt](../routing/direct-to-point-routing.md).
- Voor de instelling *Langs de route tonen* wordt aanbevolen om [Spraakinstructies](../guidance/voice-navigation.md) voor navigatie te gebruiken.
- *POI's, Favorieten en Verkeerswaarschuwingen* worden niet weergegeven in de lijst voor een route die u al hebt afgelegd.


### Punten bekijken en selecteren {#view-and-select-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,show_along_the_route"/>*

![punten langs de route](@site/static/img/navigation/show-points-along-4-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>* *→ Punten langs de route tonen*

![punten langs de route](@site/static/img/navigation/show-points-along-4-ios.png)  

</TabItem>

</Tabs>

Wanneer u een route maakt, kunt u in de sectie *Navigatie* de typen punten instellen die langs de route moeten worden weergegeven.


### Nuttige Plaatsen (POI's) {#points-of-interest-pois}

![POI-overlay Android](@site/static/img/map/poi_overlay_android.png) ![POI-overlay iOS](@site/static/img/map/poi_overlay_ios.png)

POI-instellingen in [*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-pois) zijn gekoppeld aan de instelling **Langs de route tonen**. Dit is in wezen een extra instelling voor het weergeven van POI's op de kaart, direct gerelateerd aan de gemaakte route.  

Wanneer u de weergave van bepaalde POI's specificeert op de *Kaart configureren*, worden ze allemaal weergegeven op de kaarten die u hebt gedownload, of u nu categorieën hebt geselecteerd of, als het u niet uitmaakt welke categorie, nabijgelegen POI's hebt geselecteerd.  

- Het aantal en de identificatie van POI's is *schaalafhankelijk*.

- De instelling *Langs de route tonen* toont dezelfde categorie als in de *POI-overlay*, maar u ziet de *volledige lijst* van geselecteerde POI's in één keer, beginnend vanaf het punt van de huidige locatie op de ingestelde afstand binnen uw route.  

- U kunt onnodige POI's uit de lijst verwijderen of ze bewerken in het [Contextmenu](../../map/map-context-menu.md) door op een ervan te tikken.

- De lijst bevat de geselecteerde [POI-types](../../map/point-layers-on-map.md#poi-types) en korte informatie over elk van hen, zoals het *type-icoon, naam, afstand van het huidige locatiepunt tot de POI langs de route*, en *indicaties van welke kant van de route in een rechte lijn en hoe ver weg de POI is*.  


### Mijn Favorieten {#my-favorites}

De lijst bevat alle eerder toegevoegde [Favoriete](../../personal/favorites.md#favorite-point) punten in de buurt van de route die u hebt gemaakt. Net als bij POI's kunt u de afstand selecteren waarop deze punten zich bevinden.  

- Als u [de weergave van Favorieten op de kaart uitschakelt](../../map/configure-map-menu.md), verdwijnen ze niet uit de lijst en blijven ze worden weergegeven in de [widget](../../widgets/nav-widgets.md#street-name) en worden ze aangekondigd wanneer u ze nadert.

- U kunt uw *Favoriete punten* niet alleen van tevoren aan de kaart toevoegen, maar ook tijdens het navigeren van een route.

- *Om de lijst bij te werken*, schakelt u Mijn Favorieten uit en vervolgens weer in.

- Elk punt bevat een naam of coördinaten, een groep, de afstand van het huidige locatiepunt tot de *Favoriet* direct op de routelijn, informatie over hoe ver rechts of links het punt van de lijn is, en de richting van de route.


### Verkeerswaarschuwingen {#traffic-warnings}

*Verkeerswaarschuwingen* worden niet direct op de kaart weergegeven zoals *POI's* of *Mijn Favorieten*.

- **Om deze optie in te schakelen** en de waarschuwingen te zien, moet u eerst de [Waarschuwingenwidget](../../widgets/nav-widgets.md#alert-widget) inschakelen en configureren.

- De keuze om *Verkeerswaarschuwingen* langs uw route weer te geven, stelt u in staat om de volledige lijst te zien net voordat u uw route start, wat handig is bij het plannen van uw reis.

- U kunt onnodige waarschuwingen uit de lijst verwijderen, of op de naam van de waarschuwing tikken om [de locatie te bewerken](../../map/map-context-menu.md#avoid-road).


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
| **<Translate android="true" ids="screen_alerts"/>** | Meldingen, zoals verkeerswaarschuwingen of snelheidslimieten, verschijnen op het scherm als een widget. Ze verschijnen linksonder in het scherm terwijl u navigeert. | [Soorten waarschuwingswidgets](../../widgets/nav-widgets.md#alert-widget) |


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

U kunt het uiterlijk van de routelijn selecteren op stijl of handmatig de kleur, breedte en transparantie van de lijn selecteren. Daarnaast kunt u kiezen of u afslagpijlen en richtingpijlen op de lijn wilt weergeven.

**Geavanceerd**: de instelling Routelijn aanpassen stelt u in staat om het uiterlijk van de routelijn aan te passen om hoogteverschillen, aanzienlijke stijgingen of dalingen, ijs op de weg, onverharde wegen, snelwegen en andere mogelijke obstakels weer te geven. U kunt ook aangepaste [kleurenschema's](../../personal/color-palette-schemes.md#routes) selecteren of maken om op de routelijn toe te passen.


:::note
 <ProFeature/> Sommige parameters kunt u alleen gebruiken met een <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro-abonnement</a>.
:::


### Kleur {#color}

De instelling **Kleur** verandert de kleurtinten van de routelijnen. Hun algehele kleur verandert afhankelijk van het geselecteerde type uit de OsmAnd-collectie, en volgens de **Kaartlegenda**. Als alternatief wordt hun kleur de kleur en transparantie die u handmatig instelt.

- ***<Translate android="true" id="map_widget_renderer"/>***. Gebruikt met de standaardkleuren. Voor een volledige beschrijving van de kleuren, ga naar [Standaard kaartstijlen](../../map/vector-maps.md#default-map-styles).  
    ![kaartstijl](@site/static/img/navigation/route/map_st_2.png)

- ***Aangepast***. Hiermee kunt u een lijn selecteren in elke gewenste kleur en transparantie. U kunt verschillende instellingen selecteren voor de dagkaart en afzonderlijk voor de nachtkaart.  
    ![aangepast](@site/static/img/navigation/route/custom.png)   ![aangepast](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. Het toont de hoogte van het routepunt als een **groen-geel-rood** verloop. **Groen** geeft het laagste punt van de route aan, **geel** geeft de gemiddelde hoogte van het punt aan, en **rood** is het hoogste. Als het hoogteverschil van de route < 100 meter is, wordt het verloop gedeeltelijk of niet toegepast, bijvoorbeeld voor een eenvoudige klim van 100 meter naar 150 meter - het verloop zal **groen-geel** zijn. Merk op dat de kleur niet de absolute waarde van de hoogte vertegenwoordigt.  
    ![Hoogte](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. De routelijn is in verschillende kleuren gekleurd, afhankelijk van het hoogteprofiel van de route. Een gedetailleerde beschrijving staat in het artikel *Topografie-plugin*, sectie [Helling](../../plugins/topography.md#hillshade-slope-and-altitude-layers).  
    ![Hoogte](@site/static/img/navigation/route/Slope.png)   ![Hoogte](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. Kleurt een route- of tracklijn volgens de *wegclassificatie*. Een gedetailleerde beschrijving staat in de sectie *Vectorkaarten - [Wegstijl](../../map/vector-maps.md#road-style)*.  
    ![Hoogte](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. Geeft informatie over het fysieke oppervlak van de weg of het pad. Een gedetailleerde beschrijving is te vinden in het artikel *OsmAnd Kaartstijl - [Wegdek](../../map-legend/osmand.md#surface-smoothness)* in de sectie *Kaartlegenda*.  
    ![Hoogte](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. Classificatie van de manoeuvreerbaarheid van wegen of paden voor voertuigen op wielen, met name wat betreft de regelmatigheid en gladheid van het oppervlak. Een gedetailleerde beschrijving is te vinden in het artikel *OsmAnd Kaartstijl - [Gladheid](../../map-legend/osmand.md#surface-smoothness)* in de sectie *Kaartlegenda*.  
    ![Hoogte](@site/static/img/navigation/route/Smoothness.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. Kleurt een route- of tracklijn volgens de *winterwegclassificatie*. Een gedetailleerde beschrijving is te vinden in het artikel *Vectorkaarten*, sectie [Winter- en ijswegen](../../map/vector-maps.md#winter-and-ski).  
    ![Hoogte](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. Kleuring van een route- of padlijn op basis van de samenstelling van het wegdek. Typisch gebruikt wanneer het wegennet grotendeels onverhard is. Een gedetailleerde beschrijving is te vinden in het artikel *OsmAnd Kaartstijl - [Stevigheid van het wegdek](../../map-legend/osmand.md#surface-smoothness)* in de sectie *Kaartlegenda*.  
    ![Hoogte](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;Moeilijkheidsgraad van paardenpaden***. Render paden volgens de moeilijkheidsgraad van paardenpaden.  
    ![Hoogte](@site/static/img/navigation/route/firmness.png)


### Breedte {#width}

U kunt de breedte van de routelijn aanpassen aan de weg of het pad dat op de kaart wordt weergegeven. Voor een duidelijkere visuele identificatie kunt u de lijnbreedte naar wens handmatig vergroten of verkleinen. Voor meer details, zie het artikel *Tracks en Routes — [Uiterlijk](../../map/tracks/appearance.md)*.

- ***<Translate android="true" id="map_widget_renderer"/>***. Het wordt gebruikt met de standaardbreedte ingesteld door OsmAnd. Een volledige beschrijving is te vinden in het artikel *Vectorkaarten*, sectie [Kaartstijl](../../map/vector-maps.md#default-map-styles).  
    ![kaartstijl](@site/static/img/navigation/route/map_st_2.png)

- ***Dunne, Medium en Dikke breedtes***. U kunt de breedte van de lijn selecteren om overeen te komen met de breedte van de weg, of de routelijn sterker benadrukken op de kaart.  
    ![breedte](@site/static/img/navigation/route/width_med.png)

- ***Aangepast***. Hiermee kunt u een lijn weergeven met de breedte die u nodig heeft. Gebruik de schuifbalk om de breedte te selecteren.  
    ![aangepast](@site/static/img/navigation/route/custom_2.png)  


### Afslagpijlen {#turn-arrows}

De instelling Afslagpijlen stelt u in staat om te selecteren of afslagpijlen op de routelijn worden weergegeven.  

- ***Op kaart***  
    ![Hoogte](@site/static/img/navigation/route/turn_arr_on_map_and.png)   ![afslagpijl_ios_kaart](@site/static/img/navigation/route/turn_arr_ios_on_map.png)  

- ***In app***  
    ![Hoogte](@site/static/img/navigation/route/turn_arr.png)   ![afslagpijl_ios](@site/static/img/navigation/route/turn_arr_ios.png)


## Gerelateerde artikelen {#related-articles}

- [Routeparameters](../routing/osmand-routing.md#routing-types)
- [Routevoorbereiding](../setup/route-navigation.md)
- [Navigatie via een track](../setup/gpx-navigation.md)
- [Navigatie via markeringen](../setup/markers-navigation.md)
- [Routedetails](../setup/route-details.md)
- [Navigatie-instellingen](./navigation-settings.md)
- [Spraakinstructies / Meldingen](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)