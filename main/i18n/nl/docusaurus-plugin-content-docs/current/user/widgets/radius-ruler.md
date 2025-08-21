---
source-hash: 338468efc137a0618ed472d99c99d808cd6f3df5d30650e5054eabd75c599d06
sidebar_position: 5
title:  Straalmeter en Liniaal
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

De **liniaalhulpmiddelen** in OsmAnd zijn ontworpen om u te helpen afstanden te meten en de [kaartschaal](https://en.wikipedia.org/wiki/Scale_(map)) met precisie te begrijpen.

- Het hulpmiddel **Liniaal** geeft een dynamische kaartschaal weer in eenheden zoals meters of voeten, waardoor u visueel de afstanden tussen objecten op het scherm kunt inschatten.
- Met de **Straalmeter** kunt u een straal instellen vanaf elk punt op de kaart, waarbij concentrische cirkels worden weergegeven die afstandsintervallen vertegenwoordigen.
- Met het hulpmiddel **Afstand per tik** kunt u afstanden meten door op de kaart te tikken — ofwel vanaf uw huidige locatie of tussen twee willekeurige locaties.

Deze hulpmiddelen zijn nuttig voor het plannen van routes, het schatten van de nabijheid van oriëntatiepunten en het analyseren van gebieden — zowel voor buitenactiviteiten als voor precieze navigatie.

![Straalmeter scherm](@site/static/img/widgets/radius_ruler_screen.png)


## Liniaal {#ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Liniaalhulpmiddel](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Liniaalhulpmiddel](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

De **Liniaal** geeft de huidige kaartschaal weer als een lijnsegment met de werkelijke lengte (bijv. 100 m of 500 ft), onderaan het scherm. Kenmerken:

- De schaal past zich dynamisch aan wanneer u in- of uitzoomt.
- Het geeft een visuele referentie voor het schatten van werkelijke afstanden tussen objecten op de kaart.
- De segmentlengte wordt afgerond op handige eenheden (bijv. 100 m), ruwweg overeenkomend met de breedte van een duim voor intuïtief gebruik.

Dit hulpmiddel is handig wanneer u snel inzicht wilt krijgen in objectgroottes of afstanden zonder markeringen of routes te plaatsen.

| | |
|------------|------------|
| Formaat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Straalmeter Widget {#radius-ruler-widget}

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

De [Straalmeter Widget](../widgets/info-widgets.md#radius-ruler) toont de afstand tussen uw huidige locatie (*Mijn Locatie*) en het midden van de kaart. U kunt de kaart ook verplaatsen om een willekeurig aangepast middelpunt in te stellen. Kenmerken:

- Geef concentrische cirkels weer, gecentreerd op het geselecteerde punt.
- De eerste cirkel geeft de huidige [kaartschaal](#ruler) weer voor snelle visuele referentie.
- Past zich automatisch aan bij het zoomen om nauwkeurige straalwaarden te behouden.

Gebruik deze widget om de nabijheid van interessante plaatsen te schatten of om een gedefinieerd gebied te plannen.

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


## Kompas voor Straalmeter {#compass-for-radius-ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kompasliniaal](@site/static/img/widgets/compass_ruler_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kompasliniaal](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

Wanneer de **Straalmeter** actief is, toont de kaart een kompasoverlay om u te helpen uzelf in de ruimte te oriënteren. De overlay toont hoe de kaart is uitgelijnd ten opzichte van het ware Noorden, en kan een blauwe driehoek bevatten die de huidige richting van het apparaat aangeeft.

- De kompasring toont de kaartoriëntatie — of het Noorden boven is of gedraaid.
- Een **blauwe driehoek** geeft de richting aan waarin uw apparaat wijst.
- Om deze functie te gebruiken, moet het apparaat een **kompassensor** (GPS-kompas, magnetometer) ondersteunen en inschakelen.
- Het horizontaal houden van het apparaat verbetert de nauwkeurigheid en visualisatie.
- Als de **blauwe driehoek** en de **rode pijl** (Noorden) beide naar boven wijzen, is het apparaat uitgelijnd op het ware Noorden.

Deze overlay is handig voor buitennavigatie, zodat u de [kaartoriëntatie](../map/interact-with-map.md#map-orientation--compass) kunt afstemmen op de werkelijke omgeving.

| | |
|------------|------------|
| Inschakelen | **Android**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="radius_ruler_item"/>* |
| Formaat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |


## Midden / Onderste Positie {#center--bottom-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,display_position"/>*

![Weergavepositie Android](@site/static/img/widgets/radius_ruler_display_position_2_andr.png) ![Straalmeter naar beneden](@site/static/img/widgets/radius_ruler_view_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Overig → Locatiepositie op scherm*

![Weergavepositie Android](@site/static/img/widgets/radius_ruler_display_position_3_ios.png) ![Straalmeter naar beneden](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

Om de zichtbare straal rond uw locatie te vergroten, kunt u de positie van de Straalmeter wijzigen door de optie *Midden* of *Onder* te selecteren.

Voor meer informatie over *de positie op het scherm*, zie het artikel [Scherm configureren](../widgets/configure-screen.md#display-position-location-position-on-screen).


## 3D-weergave {#3d-view}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Straalmeter 3D-formaat](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Straalmeter 3D-formaat](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

U kunt overschakelen naar de **3D-weergave** om afstanden en het omringende terrein beter te visualiseren bij gebruik van de Straalmeter. Deze weergave kantelt de kaart en biedt een perspectiefeffect dat de zichtbare straal vergroot.

- Tik op [de locatieknop](../map/interact-with-map.md#my-location-and-zoom) om op uw positie te focussen.
- Gebruik een [veegbeweging met twee vingers omhoog](../map/interact-with-map.md#gestures) om de kaart in 3D-modus te kantelen.

De straalcirkels verschijnen met diepte, wat bijzonder nuttig is voor routeplanning in heuvelachtige gebieden of stedelijke omgevingen waar verticale context belangrijk is.


## Afstand per tik {#distance-by-tap}

![Afstand tussen twee willekeurige punten op de kaart](@site/static/img/widgets/distance_between_two_random_points.png)

Met het hulpmiddel **Afstand per tik** kunt u afstanden tussen punten op de kaart meten zonder de Straalmeter te gebruiken of een route te maken.

Er zijn twee gebruiksscenario's:

- **Afstand van uw locatie tot een punt**
  Tik ergens op de kaart en er verschijnt een rechte lijn van uw huidige locatie naar het getikte punt, samen met een afstandslabel. De lijn blijft op het scherm, zelfs als u ergens anders tikt.

- **Afstand tussen twee willekeurige punten**
  Tik tegelijkertijd op twee punten op de kaart (multi-touch). Een lijn verbindt de twee punten en de gemeten afstand wordt weergegeven.

| | |
|------------|------------|
| Inschakelen |  **Android:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap"/>* |
|   |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location,map_widget_distance_by_tap"/>* |
| Tekstgrootte (Android) | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap,text_size"/>* |
| Eenheden Formaat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Videogidsen {#video-guides}

Bekijk deze korte tutorials om te leren hoe u de Straalmeter en gerelateerde hulpmiddelen in OsmAnd gebruikt:

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
- [Informatiewidgets](./info-widgets.md)
- [Navigatiewidgets](./nav-widgets.md)
- [Snelle actie](./quick-action.md)
- [Markeringswidgets](./markers.md)

> *Laatst bijgewerkt: mei 2025*