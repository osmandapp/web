---
source-hash: 87d73ff443e95ab1dcaaecf7746b579887fa93a633560d2d381fc2a5a0c16094
sidebar_position: 5
title:  Radiusliniaal en Liniaal
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

De **Liniaal-tools** in OsmAnd zijn ontworpen om u te helpen afstanden te meten en de [kaartschaal](https://en.wikipedia.org/wiki/Scale_(map)) met precisie te begrijpen.

- De **Liniaal**-tool toont een dynamische kaartschaal in eenheden zoals meters of voeten, wat u helpt om visueel afstanden tussen objecten op het scherm in te schatten.
- De **Radiusliniaal** stelt u in staat om een radius in te stellen vanaf elk punt op de kaart, waarbij concentrische cirkels worden getoond die afstandsintervallen vertegenwoordigen.
- De **Afstand door te tikken**-tool laat u afstanden meten door op de kaart te tikken — ofwel vanaf uw huidige locatie of tussen twee willekeurige locaties.

Deze tools zijn handig voor het plannen van routes, het inschatten van de nabijheid van oriëntatiepunten en het analyseren van gebieden — zowel voor buitenactiviteiten als voor nauwkeurige navigatie.

![Radiusliniaal scherm](@site/static/img/widgets/radius_ruler_screen.png)


## Liniaal {#ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Liniaal tool](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Liniaal tool](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

De **Liniaal** toont de huidige kaartschaal als een lijnsegment met de lengte in de echte wereld (bijv. 100 m of 500 ft) onderaan het scherm. Kenmerken:

- De schaal past zich dynamisch aan wanneer u in- of uitzoomt.
- Het geeft een visuele referentie voor het inschatten van afstanden in de echte wereld tussen objecten op de kaart.
- De lengte van het segment wordt afgerond op handige eenheden (bijv. 100 m), wat ongeveer overeenkomt met de breedte van een duim voor intuïtief gebruik.

Deze tool is handig wanneer u snel inzicht wilt krijgen in de grootte van objecten of afstanden zonder markeringen of routes te plaatsen.

| | |
|------------|------------|
| Formaat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Radiusliniaal Widget {#radius-ruler-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="radius_ruler_item"/>*

![Weergavepositie Android](@site/static/img/widgets/radius_ruler_widget_new_andr.png)
</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="radius_ruler_item"/>*

![Weergavepositie Android](@site/static/img/widgets/radius_ruler_widget_new_ios.png)

</TabItem>

</Tabs>

De [Radiusliniaal Widget](../widgets/info-widgets.md#radius-ruler) toont de afstand tussen uw huidige locatie (*Mijn Locatie*) en het midden van de kaart. U kunt ook de kaart verplaatsen om een willekeurig middelpunt in te stellen. Kenmerken:

- Toon concentrische cirkels gecentreerd op het geselecteerde punt.
- De eerste cirkel weerspiegelt de huidige [kaartschaal](#ruler) voor een snelle visuele referentie.
- Past zich automatisch aan bij het zoomen om nauwkeurige radiuswaarden te behouden.

Gebruik deze widget om de nabijheid van interessante punten in te schatten of om te plannen rond een bepaald gebied.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Radiusliniaal scherm](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Radiusliniaal"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Radiusliniaal"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Radiusliniaal"/></td>
    </tr>
</table>

</TabItem>

</Tabs>


## Kompas voor Radiusliniaal {#compass-for-radius-ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kompasliniaal](@site/static/img/widgets/compass_ruler_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kompasliniaal](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

Wanneer de **Radiusliniaal** actief is, toont de kaart een kompas-overlay om u te helpen zich in de ruimte te oriënteren. De overlay laat zien hoe de kaart is uitgelijnd ten opzichte van het ware noorden, en kan een blauwe driehoek bevatten die de huidige richting van het apparaat aangeeft.

- De kompasring toont de kaartoriëntatie — of het noorden naar boven is of gedraaid.
- Een **blauwe driehoek** geeft de richting aan waarin uw apparaat wijst.
- Om deze functie te gebruiken, moet het apparaat een **kompassensor** (GPS-kompas, magnetometer) ondersteunen en inschakelen.
- Het horizontaal houden van het apparaat verbetert de nauwkeurigheid en visualisatie.
- Als de **blauwe driehoek** en de **rode pijl** (Noord) beide naar boven wijzen, is het apparaat uitgelijnd op het ware noorden.

Deze overlay is handig voor buitennavigatie, waardoor u de [kaartoriëntatie](../map/interact-with-map.md#map-orientation-modes) kunt afstemmen op de echte omgeving.

| | |
|------------|------------|
| Inschakelen | **Android**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="radius_ruler_item"/>* |
| Formaat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |


## Midden / Onder Positie {#center--bottom-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,display_position"/>*

![Weergavepositie Android](@site/static/img/widgets/radius_ruler_display_position_2_andr.png) ![Radiusliniaal naar beneden](@site/static/img/widgets/radius_ruler_view_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Overig → Locatiepositie op scherm*

![Weergavepositie Android](@site/static/img/widgets/radius_ruler_display_position_3_ios.png) ![Radiusliniaal naar beneden](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

Om de zichtbare radius rond uw locatie te vergroten, kunt u de positie van de Radiusliniaal wijzigen door de optie *Midden* of *Onder* te selecteren.

Voor meer informatie over *de positie op het scherm*, zie het artikel [Scherm configureren](../widgets/configure-screen.md#display-position-location-position-on-screen).


## 3D-weergave {#3d-view}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Radiusliniaal 3D-formaat](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Radiusliniaal 3D-formaat](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

U kunt overschakelen naar de **3D-weergave** om afstanden en het omliggende terrein beter te visualiseren wanneer u de Radiusliniaal gebruikt. Deze weergave kantelt de kaart en zorgt voor een perspectiefeffect dat de zichtbare radius vergroot.

- Tik op [de locatieknop](../map/interact-with-map.md#my-location-and-zoom) om op uw positie te focussen.
- Gebruik een [veegbeweging met twee vingers omhoog](../map/interact-with-map.md#gestures) om de kaart in de 3D-modus te kantelen.

De radiuscirkels verschijnen met diepte, wat bijzonder nuttig is voor routeplanning in heuvelachtige gebieden of stedelijke omgevingen waar verticale context van belang is.


## Afstand door te tikken {#distance-by-tap}

![Afstand tussen twee willekeurige punten op de kaart](@site/static/img/widgets/distance_between_two_random_points.png)

De **Afstand door te tikken**-tool stelt u in staat om afstanden tussen punten op de kaart te meten zonder de Radiusliniaal te gebruiken of een route te maken.

Er zijn twee gebruiksscenario's:

- **Afstand van uw locatie tot een punt**  
  Tik ergens op de kaart en er verschijnt een rechte lijn van uw huidige locatie naar het aangetikte punt, samen met een afstandlabel. De lijn blijft op het scherm, zelfs als u ergens anders tikt.

- **Afstand tussen twee willekeurige punten**  
  Tik tegelijkertijd op twee punten op de kaart (multi-touch). Een lijn verbindt de twee punten en de gemeten afstand wordt weergegeven.

| | |
|------------|------------|
| Inschakelen |  **Android:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap"/>* |
|   |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location,map_widget_distance_by_tap"/>* |
| Tekstgrootte (Android) | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap,text_size"/>* |
| Eenheden Formaat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Videogidsen {#video-guides}

Bekijk deze korte tutorials om te leren hoe u de Radiusliniaal en gerelateerde tools in OsmAnd kunt gebruiken:

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/MWT20dVtkDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

<TabItem value="ios" label="iOS">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/C9QLQ52ndiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

</Tabs>


## Gerelateerde artikelen {#related-articles}

- [Scherm configureren](./configure-screen.md)
- [Kaartknoppen](./map-buttons.md)
- [Informatieve widgets](./info-widgets.md)
- [Navigatiewidgets](./nav-widgets.md)
- [Snelle actie](./quick-action.md)
- [Markeringswidgets](./markers.md)