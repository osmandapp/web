---
source-hash: 1b7a37b9ddc3c512478528544917a389184c03cf7b063a7673001b8c00840fca
sidebar_position: 2
title:  Kaartknoppen
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

Kaartknoppen, waaronder *Zoom*, *Zoeken*, *Route*, *Kompas*, *Mijn Locatie*, *3D-modus* en *Menu*, zijn de belangrijkste bedieningselementen voor interactie met de kaart. Elke knop biedt specifieke functionaliteiten om uw navigatie- en kaartgebruikservaring te verbeteren.


## Mijn Locatie en Zoom {#my-location-and-zoom}

![Configureer schermmenu](@site/static/img/widgets/location_zoom_buttons.png)

Gebruik deze knoppen om te bepalen hoe de kaart op het scherm van uw apparaat wordt weergegeven:

- **Mijn Locatie**. Toont of het midden van de kaart is gesynchroniseerd met de huidige geolocatie van uw apparaat.
- **Zoom**. Hiermee kunt u het zoomniveau van de kaart aanpassen om meer of minder details weer te geven.
Als u meer informatie wilt over het gebruik van deze knoppen, kunt u het artikel [Interactie met de kaart](../map/interact-with-map.md#my-location-and-zoom) raadplegen.


## Route {#directions}

![Routeknop opties](@site/static/img/widgets/directions_button_allows.png)

De **Route**-knop is essentieel voor routeplanning en navigatie:

- [Een route samenstellen](../navigation/index.md). Gebruik deze knop om een route te maken.
- [Navigatie starten](../navigation/index.md). Start stapsgewijze navigatie.
- In de navigatiemodus is de *Route*-knop standaard niet zichtbaar, maar verschijnt na een korte tik op de kaart.

Indicatieve statussen van de *Route*-knop:

- Het *grijze standaardpictogram* geeft aan dat de route nog niet is gemaakt. Tikken op dit pictogram opent de functionaliteit voor [route-instellingen](../navigation/setup/route-navigation.md).
- Het *blauwe standaardpictogram* geeft aan dat de route is samengesteld, maar de navigatie nog niet is gestart. Tikken op dit pictogram opent de functionaliteit voor [route-instellingen](../navigation/setup/route-navigation.md#start--stop-navigation).
- Het *blauwe pijlpictogram* geeft aan dat de navigatie actief is. Tikken op dit pictogram opent de [details van de huidige route](../navigation/setup/route-details.md).


## Kaart Configureren {#configure-map}

![Kaart Configureren](@site/static/img/widgets/configure_map.png)

De knop **Kaart configureren** geeft toegang tot het menu [Kaart configureren](../map/configure-map-menu.md). Het pictogram weerspiegelt ook het [Huidige app-profiel](../personal/profiles.md), zodat u verschillende profielen kunt identificeren en ertussen kunt schakelen.


## Hoofdmenu {#main-menu}

![Hoofdmenuknop](@site/static/img/widgets/main_menu_button.png)

De knop [**Hoofdmenu**](../start-with/main-menu.md) opent het algemene menu en geeft toegang tot [alle applicatiefuncties](../start-with/main-menu.md). In de navigatiemodus is deze knop standaard verborgen en wordt hij zichtbaar na een korte tik op de kaart.


## Zoeken {#search}

![Zoekknop](@site/static/img/widgets/search_button.png)

De Zoekknop biedt snelle toegang tot de [zoekmogelijkheden](../search/index.md), zodat u locaties, nuttige plaatsen en andere informatie rechtstreeks vanaf de kaart kunt vinden.


## Kompas {#compass}

De Kompasknop geeft de oriëntatie van de kaart op het scherm van uw apparaat aan. Raadpleeg voor meer informatie het artikel [Interactie met de kaart](../map/interact-with-map.md#map-orientation-modes).


### Kaartoriëntatiemodi {#map-orientation-modes}

- ![Kompas](@site/static/img/widgets/map_butt_manually_ios.png)  
**Handmatig gedraaid**. In deze modus kunt u de kaart handmatig draaien met een [tweevingergebaar (aanraken en draaien met twee vingers)](../map/interact-with-map.md#gestures) naar uw voorkeur. De oriëntatie van de kaart is niet afhankelijk van de rijrichting of het kompas van het apparaat, maar wordt door u bepaald. De handmatige rotatiemodus is standaard ingesteld.

- ![Kompas](@site/static/img/widgets/map_butt_movem_dir_ios.png)  
**Bewegingsrichting**. In deze modus wordt de kaart georiënteerd volgens de richting van uw beweging, bekend van GPS-gegevens. Als u bijvoorbeeld naar rechts draait, draait de kaart ook zodat de rechterkant van het scherm overeenkomt met de bewegingsrichting. Ga voor details naar [Kaart roteren op peiling](../map/interact-with-map.md#rotate-map-by-bearing).

- ![Kompas](@site/static/img/widgets/map_butt_compas_dir_ios.png)  
**Kompasrichting**. Het pictogram op de knop wijst naar het werkelijke noorden en de kaart beweegt mee met de kompasoriëntatie van uw apparaat. Op deze manier komt het noorden van de kaart overeen met het echte noorden en kunt u de oriëntatie van de kaart zien ten opzichte van het omliggende terrein. Uw apparaat moet zo horizontaal mogelijk worden gehouden. Als uw apparaat geen kompassensor heeft, blijft de oriëntatie van de kaart ongewijzigd.

- ![Kompas](@site/static/img/widgets/map_butt_north_up_ios.png)  
**Noorden boven**. In deze modus is de kaart vastgezet (met een harde vergrendeling) in de noordelijke richting, wat de bovenrand van uw apparaat is. Ongeacht de richting waarin het apparaat beweegt, blijft de kaart statisch en kunt u uw positie zien ten opzichte van uw omgeving. De kaart heeft geen automatische of handmatige rotatie.

### Tikgedrag van het Kompas {#compass-tapping-behavior}

De kompasknop biedt meerdere acties om de kaartoriëntatie te regelen:

- **Eén keer tikken**. Een *enkele tik* op de [Kompasknop](../widgets/map-buttons.md#compass) (in de linkerbovenhoek van het scherm wanneer [zichtbaar](../widgets/map-buttons.md#display-options)) heroriënteert de kaartoriëntatie onmiddellijk *naar het noorden* in alle kaartoriëntatiemodi. Zelfs als de kaart in de modus *Kompasrichting* staat, draait hij nog steeds even en keert dan terug naar de dynamische oriëntatie van die modus.

- **Twee keer tikken**. Om snel te schakelen tussen kaartoriëntatiemodi, zoals het volgen van de GPS-richting of het roteren met het apparaat, *tikt u twee keer* op de [Kompasknop](../widgets/map-buttons.md#compass) (wanneer [zichtbaar](../widgets/map-buttons.md#display-options)).

- **Lang tikken**. Met een *lange tik* op de [Kompasknop](../widgets/map-buttons.md#compass) (wanneer [zichtbaar](../widgets/map-buttons.md#display-options)) kunt u een lijst van alle kaartoriëntatiemodi openen en de gewenste selecteren. Deze lijst kan ook worden geopend in de [Profielinstellingen](../personal/profiles.md#appearance).


### Weergaveopties {#display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Kompaswidget](@site/static/img/widgets/map_butt_compass_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Kompaswidget](@site/static/img/widgets/map_butt_compass_widg_ios.png)

</TabItem>

</Tabs>

Het kompaspictogram op de knop wijst altijd naar het noorden. U kunt selecteren hoe de kompasknop op het scherm wordt weergegeven.

- **Altijd zichtbaar**. De knop verdwijnt niet van het scherm.
- **Altijd verborgen**. In dit geval kunt u de kaartoriëntatie niet snel wijzigen, maar de knop neemt geen ruimte in op het scherm.
- **Zichtbaar als de kaart is gedraaid**. De knop is niet zichtbaar zolang het kompas naar het noorden wijst aan de bovenrand van uw apparaat.  


## 3D-modus {#3d-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*  

![3D-modus](@site/static/img/widgets/map_butt_3D_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*  

![3D-modus](@site/static/img/widgets/map_butt_3D_mode_ios.png)

</TabItem>

</Tabs>  

- *<Translate android="true" ids="shared_string_hidden"/>*. Als deze modus is geselecteerd voor een knop, moet u een gebaar gebruiken om de kaartweergave te wijzigen. Tik met twee vingers op de kaart en beweeg ze op en neer om de kanteling van de kaart aan te passen.  
- *<Translate android="true" ids="shared_string_visible"/>*. De knop wordt altijd weergegeven op het kaartscherm.
- *<Translate android="true" ids="visible_in_3d_mode"/>*. De knop wordt weergegeven op het kaartscherm wanneer u de kaartweergave wijzigt met een [*tweevinger-en-beweeg*](../map/interact-with-map.md#gestures)-gebaar.  

### Aanvullende instellingen {#additional-settings}

1. **De knop weergeven**. (*Voor Android*) De instelling voor de *3D-modus*-knop verschijnt alleen in de lijst Scherm configureren als de kaartweergave-engine [Versie 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) is geselecteerd.

2. **Slaat de hoek op**. Na het overschakelen naar de 3D-modus en het handmatig wijzigen van de hoek met een gebaar, wordt de hoek opgeslagen en de volgende keer dat de 3D-modus wordt geactiveerd, gebruikt. Deze optie wordt alleen opgeslagen voor het op dat moment geselecteerde profiel.

3. **Verplaatsen**. U kunt de knop overal op het scherm van uw apparaat plaatsen. Houd hiervoor de knop ingedrukt en sleep hem, zonder uw vinger van het scherm te halen, naar de gewenste plek.

4. **Knop positie**. De positie van de knop op de kaart op het applicatiescherm wordt voor elk profiel afzonderlijk opgeslagen.

5. **Aanbeveling**. Het wordt aanbevolen om de [Schaduwreliëfkaart](../plugins/topography.md#hillshade-slope-and-altitude-layers) voor de geselecteerde regio te downloaden en in te schakelen.


## Aangepaste knoppen {#custom-buttons}

De [widget Snelle actie](./quick-action.md) is een configureerbare knop waaraan verschillende actietypes kunnen worden toegewezen. Het is ook mogelijk om meerdere [Aangepaste knoppen](./quick-action.md#custom-buttons) te hebben.


## Uiterlijk van kaartknoppen {#map-button-appearance}

<InfoAndroidOnly/>

| Standaardknoppen | Aangepaste knoppen |
| :--- | :--- |
| ![Uiterlijk van kaartknoppen](@site/static/img/widgets/map_butt_appearance_default_andr.png) | ![Uiterlijk van kaartknoppen](@site/static/img/widgets/map_butt_appearance_custom_andr.png) |

Instellingen voor het uiterlijk van de kaartknoppen zijn beschikbaar via de volgende menu's:

- *Menu → Scherm configureren → Knoppen → Standaardknoppen*
- *Menu → Scherm configureren → Aangepaste knoppen → Snelle actie → menu met drie stippen → Uiterlijk*

Het aanpassen van het uiterlijk van knoppen stelt u in staat om de grootte, vorm, het pictogram en de achtergronddekking aan te passen voor zowel [Snelle Actie (Aangepaste knoppen)](../widgets/quick-action.md#button-appearance) als [Standaardknoppen](../widgets/configure-screen.md#button-appearance). Deze flexibiliteit stelt u in staat de interface te personaliseren naar uw voorkeuren en de bruikbaarheid te verbeteren.


## Gerelateerde artikelen {#related-articles}

- [Scherm configureren](./configure-screen.md)
- [Informatieve widgets](./info-widgets.md)
- [Navigatiewidgets](./nav-widgets.md)
- [Radiusliniaal en Liniaal](./radius-ruler.md)
- [Markeringswidgets](./markers.md)
- [Snelle actie](./quick-action.md)