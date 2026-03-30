---
source-hash: 7d55a7e9844bd79e9d12cfb1aab50fcc8c983eb6d5d946739c9c37b589b2c88e
sidebar_position: 1
title:  Scherm configureren
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

Het menu **Scherm configureren** in OsmAnd stelt u in staat om de kaartinterface aan te passen door widgets, knoppen en snelle acties toe te voegen en te rangschikken over meerdere panelen.

U kunt:

- [Informatieve](../widgets/info-widgets.md), [navigatie-](../widgets/nav-widgets.md) en [marker-gerelateerde](../widgets/markers.md) widgets toevoegen.
- [Snelle acties](../widgets/quick-action.md), [Aangepaste knoppen](../widgets/quick-action.md#custom-buttons) en [Standaardknoppen](../widgets/map-buttons.md) toevoegen of bewerken.
- Widgets organiseren in panelen (boven, onder, links, rechts, midden).
- Meerdere **pagina's** aanmaken binnen zijpanelen, de grootte van widgets kiezen.
- Rijhoogte kiezen en widgetpictogrammen in- of uitschakelen.

Alle widgets zijn [profielafhankelijk](../personal/profiles.md) — elk profiel heeft zijn eigen lay-out, volgorde, zichtbaarheid en instellingen.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menu Scherm configureren](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Menu Scherm configureren](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menu Scherm configureren](@site/static/img/widgets/configure_screen_overview_ios_1.png)  

</TabItem>

</Tabs>


## Widgetpanelen {#widget-panels}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Scherm configureren](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Scherm configureren](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs>

Met OsmAnd kunt u de kaartinterface organiseren met behulp van aanpasbare widgetpanelen.  
U kunt widgets toevoegen, opnieuw ordenen, groeperen en verwijderen in de volgende panelen:

- **Bovenpaneel**
- **Onderpaneel**
- **Linkerpaneel**
- **Rechterpaneel**

Elk paneel ondersteunt verschillende lay-outgedragingen:

- **Boven- en onderpanelen** tonen widgets in rijen. U kunt één of twee widgets per rij plaatsen en indien nodig meerdere rijen toevoegen.
- **Linker- en rechterpanelen** ondersteunen meerdere pagina's. U kunt widgets groeperen in afzonderlijke pagina's en ertussen schakelen.


### Widgetcatalogus {#widgets-catalog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Scherm configureren](@site/static/img/widgets/configure_screen_widgets_panels_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Scherm configureren](@site/static/img/widgets/configure_screen_widgets_panels_ios.png)

</TabItem>

</Tabs>

***Navigatiewidgets:***  

- [Peiling](../widgets/nav-widgets.md#bearing-widget).  
    Deze set toont de absolute of relatieve peiling naar een doel in hoekeenheden.  
    3 widgets zijn inbegrepen: *Relatieve peiling*, *Magnetische peiling*, *Ware peiling*.

- [Hoogteprofiel](../widgets/nav-widgets#elevation-widget) (*Alleen boven/onder*, *Alleen Android*).  
    Toont de hoogte en helling van de route.

- [Rijstroken](../widgets/nav-widgets#lanes) (*Alleen boven/onder*).  
    Visuele rijstrookbegeleiding.

- [Balk met kaartmarkeringen](../widgets/markers.md#configure-marker-widgets) (*Alleen boven/onder*).  
    Toont afstand/richting naar opgeslagen markeringen.  
    Configurabel voor 1 of 2 markeringen.

- [Navigatiepunt](../widgets/nav-widgets.md#navigation-points).  
    De set toont de resterende afstand naar een bestemming, tussenpunt, aankomsttijd bij een tussenpunt of reistijd voor een berekende route.  
    4 widgets zijn inbegrepen: [Afstand tot bestemming](../widgets/nav-widgets.md#distance-to-destination), [Afstand tot tussenpunt](../widgets/nav-widgets.md#distance-to-intermediate), [Tijd tot tussenpunt](../widgets/nav-widgets.md#time-to-intermediate), [Tijd tot bestemming](../widgets/nav-widgets.md#time-to-destination).

- [Routemanoeuvres](../widgets/nav-widgets.md#next-turn) (*Alleen linker/rechterpaneel*).  
    Deze set wordt geactiveerd tijdens navigatie en toont de afstand en pijl naar het volgende manoeuvre.  
    3 widgets zijn inbegrepen: *Volgende bocht*, *Volgende bocht (klein)*, *Tweede volgende bocht*.

- [Snelheidslimiet](../widgets/nav-widgets.md#speed-limit).  
    Toont de huidige snelheidslimiet voor de weg.

- [Snelheidsmeter](../widgets/info-widgets.md#speedometer).  
    Toont de huidige snelheid op basis van GPS-gegevens en de begrensde snelheid op basis van [OpenStreetMap-gegevens](https://wiki.openstreetmap.org/wiki/Key:maxspeed).

- [Straatnaam](../widgets/nav-widgets#street-name) (*Alleen boven/onder*).  
    Toont de huidige of aankomende straat.

<br/>

***Informatiewidgets:***

- [Hoogte](../widgets/info-widgets.md#altitude-widgets).  
    De set toont de hoogte boven zeeniveau voor de huidige locatie of voor het huidige kaartcentrum.  
    2 widgets zijn inbegrepen: *Hoogte: huidige locatie*, *Hoogte: kaartcentrum*.

- [Gemiddelde snelheid](../widgets/info-widgets.md#average-speed).  
    Toont de gemiddelde snelheid van de huidige reis.

- [Batterijniveau](../widgets/info-widgets.md#battery-level).  
    Toont het batterijniveau van het apparaat.

- [Coördinatenwidgets](../widgets/info-widgets#coordinates-widget) (*Alleen boven/onder*).  
    Deze set toont de geografische coördinaten van de huidige geolocatie.  
    2 widgets zijn inbegrepen: *Coördinaten: kaartcentrum*, *Coördinaten: huidige locatie*.

- [Huidige snelheid](../widgets/info-widgets.md#current-speed).  
    Toont de snelheid van de GPS-sensor.

- [Huidige tijd](../widgets/info-widgets.md#current-time).  
    Toont de huidige systeemtijd.

- [Glijverhouding](../widgets/info-widgets.md#glide-ratio).  
    De widgets tonen de glijverhouding naar het doel en de gemiddelde glijverhouding voor de huidige vlucht.  
    2 widgets zijn inbegrepen: *Glijverhouding naar doel*, *Gemiddelde glijverhouding*.

- [GPS-info](../widgets/info-widgets.md#gps-info) (*Alleen Android*).  
    Toont het aantal gedetecteerde satellieten.

- [Kaartmarkeringen](../widgets/markers.md).  
    De set toont de afstand of geschatte aankomsttijd (ETA) voor de eerste twee markeringen in [de lijst](https://osmand.net/docs/user/personal/markers#itinerary-list).  
    2 widgets zijn inbegrepen: *Eerste markering*, *Tweede markering*.

- [Straal-liniaal](../widgets/info-widgets.md#radius-ruler).  
    Toont de afstand tussen uw locatie en een punt op de kaart, omcirkeld door het [Straal-liniaalgereedschap](../widgets/radius-ruler.md).

- [Zonsopgang, zonsondergang](../widgets/info-widgets.md#sun-position).  
    Toont de tijd van de volgende zonsopgang of zonsondergang voor het centrum van de kaart.  
    2 widgets zijn inbegrepen: *Zonsopgang*, *Zonsondergang*.

<br/>

***Widget op basis van plug-ins:***  

- [Audio/video-notities](../widgets/info-widgets.md#audiovideo-notes-widget).  
    Snelle toegang tot het vastleggen van media.  
    4 widgets zijn inbegrepen: *Op verzoek*, *Audio opnemen*, *Video opnemen*, *Foto maken*.

- [Ontwikkelaarswidgets](../widgets/info-widgets.md#developer-widgets).  
    Toont optionele informatie.  
    5 widgets zijn inbegrepen: *Kaartweergave FPS*, *Camera helling*, *Camera hoogte*, *Zoomniveau*, *Afstand van camera tot doel*, *Beschikbaar RAM*.  

- [Widgets voor externe sensoren](../widgets/info-widgets.md#external-sensors-widgets).  
    De set helpt bij het bijhouden van gegevens van BLE/ANT+ sensoren in real time.  
    6 widgets zijn inbegrepen: *Hartslag*, *Fietsvermogen* (*Alleen Android*), *Fiets cadans*, *Fiets snelheid*, *Fiets afstand*, *Temperatuur*.

- [Mapillary](../widgets/info-widgets.md#mapillary-widget).  
    Opent de Mapillary-app voor straatniveaubeelden.

- [OsmAnd Tracker-status](../widgets/info-widgets.md#tracker-widget).  
    Snelle toegang tot de [OsmAnd Tracker-applicatie](https://play.google.com/store/apps/details?id=net.osmand.telegram).

- [Parkeerwidget](../widgets/info-widgets.md#parking-widget).  
    Afstand van het centrum van het scherm tot de opgeslagen parkeerlocatie.

- [Reisopname](../widgets/info-widgets.md#trip-recording-widgets).  
    Start en stopt de opname van tracks, en toont gegevens van de trackopname.  
    4 widgets zijn inbegrepen: *Afstand*, *Duur*, *Omhoog*, *Omlaag*.

- [Weer](../widgets/info-widgets.md#weather-widgets).  
    Toont gedetailleerde weergegevens.  
    5 widgets zijn inbegrepen: *Temperatuur*, *Luchtdruk*, *Wind*, *Wolken*, *Neerslag*.

:::note Paneelafhankelijke widgets

- Alleen beschikbaar in de **boven- en onderpanelen** en moeten in afzonderlijke rijen worden geplaatst: *Coördinatenwidgets, Hoogteprofielwidget, Rijstrokenwidget, Balk met kaartmarkeringen, Straatnaamwidget*.
- Alleen beschikbaar in de **linker- en rechterpanelen**: *Routemanoeuvres*.

:::


### Rijen {#rows}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Scherm configureren](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png)  ![Menu Scherm configureren](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Scherm configureren](@site/static/img/widgets/configure_screen_widgets_rows_1_ios.png)  ![Menu Scherm configureren](@site/static/img/widgets/configure_screen_widgets_rows_ios.png) 

</TabItem>

</Tabs>



De functie **Rijmodus** stelt u in staat om zoveel rijen als nodig toe te voegen aan de boven- en onderpanelen. U kunt meerdere widgets per rij weergeven, waardoor de hoeveelheid zichtbare informatie wordt vergroot.

***Hoe rijen configureren:***

- **Widgets toevoegen**: Tik op de knop *Plus* (Android) of *Widget toevoegen* (iOS), en selecteer vervolgens uit de lijst met beschikbare widgets.
- **Widgets opnieuw ordenen**: Tik op de knop *Potlood* (Android) of *Bewerken* (iOS) om de widgets te herschikken.
- **Rijen toevoegen**: Tik op de knop *Rij toevoegen* om nieuwe rijen voor uw widgets te maken.
- **Widgets verplaatsen**: Sleep widgets tussen verschillende rijen.
- **Widgetinstellingen openen**: Tik op het pictogram *"i"* (Android) of de pijl *">"* (iOS) om de widgetinstellingen te openen.
- **Wijzigingen opslaan**: Tik op *Toepassen* (Android) of *Klaar* (iOS) om de lay-out op te slaan.


#### Widgettypen en beperkingen {#widget-types-and-restrictions}

De modus stelt u in staat om **meer dan één widget in een enkele rij** toe te voegen aan de boven- en onderpanelen om zoveel informatie als nodig weer te geven.  

- **Complexe widgets**. Slechts één complexe widget kan per rij worden toegevoegd. Deze omvatten:
    - [Balk met kaartmarkeringen (*Alleen Android*)](../widgets/markers.md#configure-marker-widgets)
    - [Straatnaam](../widgets/nav-widgets#street-name)
    - [Coördinatenwidgets](../widgets/info-widgets#coordinates-widget)
    - [Rijstroken](../widgets/nav-widgets#lanes)
    - [Hoogteprofiel (*Alleen Android*)](../widgets/nav-widgets#elevation-widget)
    - [Routemanoeuvres](../widgets/nav-widgets.md#next-turn)

- **Eenvoudige widgets**. Meerdere eenvoudige widgets kunnen aan een enkele rij worden toegevoegd. Deze widgets kunnen *Naam*, *Eenheden van meting*, *Waarde* en *Pictogram* weergeven. 

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widget rand Android](@site/static/img/widgets/simple_widgets_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget rand iOS](@site/static/img/widgets/simple_widgets_ios.png) 

</TabItem>

</Tabs>


### Pagina's {#pages}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> → Bewerken → Pagina toevoegen*  

![Widgetpagina](@site/static/img/widgets/widget_page_1_andr.png) ![Widgetpagina](@site/static/img/widgets/widget_page_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> → Bewerken → Pagina toevoegen*

![Widgetpagina](@site/static/img/widgets/widget_page_1_ios.png) ![Widgetpagina](@site/static/img/widgets/widget_page_2_ios.png)  

</TabItem>

</Tabs>

Widgets in de rechter- en linkerpanelen kunnen worden gegroepeerd in **Pagina's**. De functie **Paginas modus** stelt u in staat om 5 pagina's toe te voegen aan de linker- en rechterpanelen.

***Hoe pagina's configureren:***

- **Een pagina toevoegen**. Navigeer naar de instellingen van het Linker/Rechterpaneel en tik op *Bewerken → Pagina toevoegen*.
- **Widgets per pagina organiseren**. Deze functie is handig wanneer verschillende sets widgets nodig zijn voor verschillende taken, zoals navigeren versus de kaart bekijken.
- Pagina's stellen u in staat om **widgetsets** te maken voor specifieke scenario's, waardoor de workflow wordt verbeterd en rommel wordt verminderd.


## Widgetinstellingen {#widget-settings}

![Menu Scherm configureren](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![Menu Scherm configureren](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **Widgetgrootte-opties** (*voor alle panelen*):  
    U kunt de grootte van **Eenvoudige widgets** aanpassen in de **Boven-, Onder-, Linker- en Rechterpanelen**:

    - **Klein**. Ideaal voor compacte weergaven, waardoor meer schermruimte voor kaarten wordt bespaard.
    - **Middel** (*standaard widgetgrootte*). Balanseert zichtbaarheid en ruimtegebruik.
    - **Groot**. Biedt grotere, zichtbaardere widgetinformatie.  

2. **Widgetpictogrammen verbergen** (*voor boven- en onderpanelen*):

    - Verbetert de duidelijkheid en maximaliseert de ruimte voor belangrijke gegevens.
    - Vooral nuttig wanneer veel widgets op dezelfde **rij** worden weergegeven.

3. **Zichtbaarheid van widgettekstlabels**

    - De zichtbaarheid van tekstlabels hangt af van de widgetgrootte en paneellocatie. In Middel- en Grote groottes worden labels altijd weergegeven.
    - In Kleine grootte worden labels niet getoond op de Linker- en Rechterpanelen. Op de Boven- en Onderpanelen kan het label automatisch worden verborgen (wanneer het aan de rechterkant is gepositioneerd) om numerieke waarden volledig zichtbaar te houden.
    - Er is geen aparte optie om tekstlabels aan of uit te schakelen.

<!--
3. **Widgettekstlabels verbergen**:

    - Verbergt tekstlabels automatisch om numerieke informatie volledig zichtbaar te houden in compacte lay-outs.
    - Helpt bij het behouden van een schone en leesbare widgetindeling wanneer de ruimte beperkt is.  
--> 

4. **Individuele grootte voor verschillende rijen** (*voor alle panelen*):

    - Widgets kunnen individueel worden groot gemaakt door de rij- en kolomgrootte aan te passen.
    - **OPMERKING:** Het wijzigen van de grootte van één widget in een rij/kolom zal alle widgets in die rij/kolom opnieuw groot maken.

5. **Om de widgetgrootte en pictogramzichtbaarheid te wijzigen:**

    - Selecteer een widget die u al aan het paneel hebt toegevoegd.  
    - Tik op het *Instellingen*-pictogram aan de rechterkant van het widgetveld.
    - Tik op de instelling *Grootte* en selecteer een van de beschikbare groottes.
    - Schakel naar de Uit-positie in het veld *Pictogram tonen*.


## Aanpassing van panelen {#panels-customization}

### Widgetcontextmenu {#widget-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widgetcontextmenu](@site/static/img/widgets/widget_context_menu_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Widgetcontextmenu](@site/static/img/widgets/widget_context_menu_ios_new.png)

</TabItem>

</Tabs>

Het **widgetcontextmenu** biedt een snelle manier om widgets direct vanaf het kaartscherm te beheren en te configureren. U kunt het openen door ***lang op een widget te tikken*** om de lay-out van widgets aan te passen zonder de kaart te verlaten.


- **Widget toevoegen aan Rechts/Links** (alleen voor *Boven- en Onderpanelen*)
    - Selecteer een positie voor de nieuwe widget ten opzichte van de huidige.
    - Kies de widget uit de lijst [Beschikbare widgets](#widgets-catalog).

- **Widget toevoegen Boven/Onder** (alleen voor *Linker- en Rechterpanelen*)
    - Selecteer of de nieuwe widget boven of onder de huidige widget moet worden gepositioneerd.
    - Tik op de gewenste widget in de lijst om deze aan de opgegeven positie toe te voegen.

- **Instellingen**
    - Open de instellingen van de widget (indien beschikbaar) om het uiterlijk of gedrag aan te passen.

- **Verwijderen**
    - Verwijder de widget uit het paneel.
    - Een bevestigingsaanvraag zorgt ervoor dat de actie opzettelijk is.

- **Track op kaart tonen** 
    - Beschikbaar voor de [Reisopname](../plugins/trip-recording.md) widgets.
    - Toont uw momenteel opgenomen track op de kaart.

- **Gemiddelde snelheid resetten** (voorbeeld van *Widgetspecifieke acties*)
    - Beschikbaar voor de [Gemiddelde snelheid](../widgets/info-widgets.md#average-speed) widget.
    - Lang tikken om de snelheidswaarde direct tijdens een reis te resetten.


### Kopieën van widgets {#copies-of-widgets}

*OsmAnd-menu → Scherm configureren → Widgets → Paneel*  

![Widget dupliceren](@site/static/img/widgets/widget_dublicate.png)  

OsmAnd stelt u in staat om meerdere instanties van dezelfde widget toe te voegen aan verschillende panelen of pagina's. Deze functie is bijzonder nuttig wanneer u consistente informatie nodig hebt over verschillende weergaven of profielen.  

***Hoe widgets dupliceren:***

- **De widget toevoegen**. Navigeer naar: *OsmAnd-menu → Scherm configureren → Widgets → Paneel →* **Toevoegen** *widget*.
- **Dupliceren met het contextmenu**. Tik op de widget en selecteer **Dupliceren** uit de lijst met acties.
- **Alternatieve methode**. Selecteer dezelfde widget uit de lijst *Beschikbare widgets* en tik op *Toevoegen*.


### Verplaatsen of verwijderen {#move-or-delete}

*OsmAnd-menu → Scherm configureren → Widgets → Paneel*  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Scherm configureren](@site/static/img/widgets/configure_screen_remove_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Scherm configureren](@site/static/img/widgets/configure_screen_remove_ios.png) 

</TabItem>

</Tabs>

U kunt widgets van het applicationscherm herschikken of verwijderen met behulp van de **Bewerken**-modus.  

***Hoe een widget verplaatsen:***

- Ga naar: *OsmAnd-menu → Scherm configureren → Widgets → Paneel → Bewerk-knop*.
- Lang tikken op het **pictogram aan de rechterkant** van de widget.
- Sleep het naar de gewenste positie in de widgetlijst.

***Hoe een widget verwijderen:***  

- Volg dezelfde stappen als hierboven.
- Tik op het **min-pictogram** links van de widgetnaam.
- Bevestig de verwijdering wanneer daarom wordt gevraagd.


## Kaartschermlay-out {#map-screen-layout}

<InfoAndroidOnly/>

![Kaartschermlay-out](@site/static/img/widgets/map_screen_layout_1.png) ![Kaartschermlay-out](@site/static/img/widgets/map_screen_layout_2.png)

De instelling **Kaartschermlay-out** stelt u in staat om te beheren hoe widgetpanelen op het kaartscherm zijn gerangschikt. Het helpt te voorkomen dat widgets en knoppen overlappen en verbetert het gebruik van schermruimte, vooral bij het wisselen tussen staande en liggende oriëntaties.

U kunt de Kaartschermlay-out-instellingen openen vanuit het Scherm configureren-menu, direct vanuit de schermacties of via het driepuntmenu.

### Enkele & aparte lay-outs {#single-and-separate-layouts}

![Kaartschermlay-out](@site/static/img/widgets/screen_layout_single.png) ![Kaartschermlay-out](@site/static/img/widgets/screen_layout_separate.png)

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → ⋮ → Kaartschermlay-out*

OsmAnd ondersteunt twee lay-outmodi voor het kaartscherm:
- **Enkele lay-out** – gebruikt dezelfde widgetlay-out voor alle schermoriëntaties. Deze optie is standaard geselecteerd.
- **Aparte lay-outs** – stelt u in staat om verschillende widgetlay-outs te configureren voor Staande en Liggende oriëntaties.

Wanneer Aparte lay-outs is ingeschakeld, hebben wijzigingen in één oriëntatie geen invloed op de andere. Dit is nuttig als u het kaartscherm anders wilt optimaliseren voor staand en liggend gebruik.

### Staande & liggende tabbladen {#portrait-and-landscape-tabs}

![Kaartschermlay-out](@site/static/img/widgets/screen_layout_tabs.png)

Wanneer Aparte lay-outs is ingeschakeld, worden twee tabbladen beschikbaar in het Scherm configureren: **Staand** en **Liggend**. Elk tabblad vertegenwoordigt een onafhankelijke lay-out voor de bijbehorende schermoriëntatie. U kunt tussen tabbladen schakelen door erop te tikken.

U kunt de lay-out tussen oriëntaties kopiëren. Om toegang te krijgen tot deze acties, tikt u op het driepuntmenu voor het widgetpaneel:
- **Kopiëren van Staand** – kopieert de widgetlijst van de Staande lay-out naar de Liggende lay-out.
- **Kopiëren van Liggend** – kopieert de widgetlijst van de Liggende lay-out naar de Staande lay-out.

Alleen de widgetlijst wordt gekopieerd, en de bewerking geldt binnen hetzelfde profiel.

![Kaartschermlay-out](@site/static/img/widgets/screen_layout_portrait.png) ![Kaartschermlay-out](@site/static/img/widgets/screen_layout_landscape.png)

### Paneellay-out {#panels-layout}

![Kaartschermlay-out](@site/static/img/widgets/screen_layout_wide.png) ![Kaartschermlay-out](@site/static/img/widgets/screen_layout_compact.png)

De instelling **Paneellay-out** beheert hoe de boven- en onderwidgetpanelen worden weergegeven. 

**Opmerking:** Deze optie is alleen beschikbaar wanneer [Aparte lay-outs](#single-and-separate-layouts) is ingeschakeld.

U kunt kiezen tussen twee modi:
- **Breed** – de boven- en onderpanelen beslaan de volledige breedte van het scherm.
- **Compact** – de boven- en onderpanelen passen tussen de zijpanelen en kaartknoppen.

Paneellay-out kan onafhankelijk worden geconfigureerd voor Staande en Liggende oriëntaties, waardoor betere aanpassing aan verschillende schermformaten en oriëntaties mogelijk is.


## Knoppen {#buttons}

### Aangepaste knoppen {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widgetpagina](@site/static/img/widgets/conf_screen_buttons_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widgetpagina](@site/static/img/widgets/conf_screen_buttons_2_ios.png)

</TabItem>

</Tabs>

**Snelle actie (Aangepaste knoppen)** stelt u in staat om een lijst met enkele acties toe te voegen uit alle beschikbare [Snelle acties](../widgets/quick-action.md#custom-buttons). Deze acties kunnen worden toegewezen aan een of meer widgetknoppen op het kaartscherm. Aangepaste knoppen bieden snelle toegang tot veelgebruikte acties.

### Standaardknoppen {#default-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widgetpagina](@site/static/img/widgets/conf_screen_buttons_3_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widgetpagina](@site/static/img/widgets/conf_screen_buttons_3_ios.png)

</TabItem>

</Tabs>

**Standaardknoppen** stellen u in staat om aan te passen welke vooraf ingestelde kaartknoppen zichtbaar zijn op het kaartscherm. Elke knop in de lijst heeft een Aan/Uit-schakelaar ernaast. U kunt ervoor kiezen om de volgende knoppen te verbergen of te tonen:

    - [3D-modus](../widgets/map-buttons.md#3d-mode). Voor iOS is de knop altijd beschikbaar. Voor Android verschijnt deze in de lijst en is beschikbaar voor instellen als de kaartweergavemotor [Versie 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) is geselecteerd.

    - [Kompas](../widgets/map-buttons.md#display-options). Geeft aan hoe de kaart op het apparaat is georiënteerd.  
    3 weergaven: *Altijd zichtbaar*, *Altijd verborgen*, *Zichtbaar als kaart is gedraaid*.

    - [Kaart configureren](../map/configure-map-menu.md). Toegang tot opties om de stijl, lagen en aanvullende instellingen van de kaart te wijzigen.

    - [Menu](../widgets/map-buttons.md#main-menu). Opent het hoofdapplicatiemenu voor toegang tot alle functies.

    - [Mijn locatie](../widgets/map-buttons.md#my-position-and-zoom). Centreert de kaart op uw huidige positie.

    - [Navigatie](../widgets/map-buttons.md#navigation). Essentieel voor routeplanning en het starten van navigatie.

    - [Zoeken](../widgets/map-buttons.md#search). Opent het zoekgereedschap om locaties te vinden.

    - [Inzoomen / uitzoomen](../widgets/map-buttons.md#my-position-and-zoom). Past het zoomniveau van de kaart aan om meer of minder detail te tonen.

Het **driepuntmenu** op het Standaardknoppen-scherm bevat acties zoals:

    - *Resetten naar standaard*. Stelt u in staat om de knopinstellingen terug te brengen naar hun oorspronkelijke uiterlijk.
    - *Kopiëren van ander profiel*. Selecteer een profiel uit de lijst om knopzichtbaarheid en -uiterlijkinstellingen te kopiëren.
    - *Uiterlijk (Alleen Android)*. Biedt een verscheidenheid aan aanpassingsopties voor dit type knoppen. Om het uiterlijk van een knop te wijzigen, tikt u op de gewenste knop uit de lijst en selecteert u de optie [Uiterlijk](#button-appearance).


### Knopuiterlijk {#button-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Knopuiterlijk](@site/static/img/widgets/button_appearance_settings_andr.png)

**Ga naar** (voor Aangepaste knoppen): *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,quick_action_item"/>* → driepuntmenu → *<Translate android="true" ids="shared_string_appearance"/>*  
**Ga naar** (voor alle Standaardknoppen): *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons"/>* → driepuntmenu → *<Translate android="true" ids="shared_string_appearance"/>*  
**Ga naar** (voor een specifieke Standaardknop): *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons"/>* → selecteer een knop → *<Translate android="true" ids="shared_string_appearance"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

![Knopuiterlijk](@site/static/img/widgets/button_appearance_settings_ios.png)

**Ga naar** (voor Aangepaste knoppen): *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,shared_string_quick_actions"/>* → driepuntmenu → *<Translate ios="true" ids="shared_string_appearance"/>*
**Ga naar** (voor een specifieke Standaardknop): *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons"/>* → selecteer een knop → *<Translate ios="true" ids="shared_string_appearance"/>*

</TabItem>

</Tabs>

De functie *Knopuiterlijk* stelt u in staat om het uiterlijk van knoppen op uw kaartinterface volledig aan te passen. Deze aanpassingsopties zijn beschikbaar voor zowel *Snelle actie (Aangepaste knoppen)* als *Standaardknoppen*, en bieden uitgebreide controle over het uiterlijk van de kaartinterface en nauwkeurige aanpassingen aan het knopontwerp.

***Aanpassingsopties***:

- **Pictogram**. Selecteer uit een lijst met pictogrammen die acties vertegenwoordigen die u al hebt toegevoegd, waardoor het gemakkelijk is om functies in één oogopslag te identificeren.
- **Hoekstraal**. Pas deze instelling aan om de vorm van de knop te wijzigen, variërend van scherpe, vierkante hoeken tot gladde, afgeronde randen.
- **Grootte**. Kies de knopgrootte die het beste past bij uw scherm en opvalt zoals nodig. 
- **Achtergrondondoorzichtheid** (Android) / **Achtergrond** (iOS) . Beheer de zichtbaarheid van de achtergrond van de knop. U kunt deze instellen op volledig zichtbaar of gedeeltelijk transparant, of alleen de frameschaduw en het pictogram weergeven.


## Overig {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other"/>*

![Widgetpagina](@site/static/img/widgets/conf_screen_other_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Overig*

![Widgetpagina](@site/static/img/widgets/conf_screen_other_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="display_position"/> / <Translate ios="true" ids="position_on_map"/>](#display-position-location-position-on-screen). [⬇](#display-position-location-position-on-screen)
- [Afstand op tik](../widgets/radius-ruler.md#distance-by-tap). Geeft de mogelijkheid om de afstand van uw positie tot het geselecteerde punt te meten.
- [Snelheidsmeter](../widgets/info-widgets.md#speedometer). Toont de huidige snelheid op basis van GPS-gegevens en de begrensde snelheid op basis van [OpenStreetMap-gegevens](https://wiki.openstreetmap.org/wiki/Key:maxspeed). De weergegeven gegevens hangen ook af van de instelling [Snelheidslimiet tolerantie](../navigation/guidance/voice-navigation.md#speed-limit) van OsmAnd.


### Positie weergeven (Locatiepositie op scherm) {#display-position-location-position-on-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widgetpagina](@site/static/img/widgets/conf_screen_display_position_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Widgetpagina](@site/static/img/widgets/conf_screen_display_position_ios.png)

</TabItem>

</Tabs>

> *Locatiepositie op scherm* is de naam van deze instelling in de iOS-versie van OsmAnd.  

Stelt u in staat om de plaatsing van de cursor in te stellen op *[Mijn locatie](../map/interact-with-map.md#my-position-and-zoom)* op de OsmAnd-kaart. Er zijn drie beschikbare opties:  

- **<Translate android="true" ids="position_on_map_center"/>**. De cursor is altijd gepositioneerd in het centrum van het scherm.
- **<Translate android="true" ids="position_on_map_bottom"/>**. *Mijn locatie* wordt iets onder het centrum van het scherm geplaatst. Deze modus stelt u in staat om meer kaartinformatie vooruit uw beweging te zien, wat nuttig is tijdens navigatie.
- **<Translate android="true" ids="shared_string_automatic"/>**. Plaats *Mijn locatie* afhankelijk van *[Kaartoriëntatie](../map/interact-with-map.md#map-orientation-modes)* (*Onder* - voor bewegingsrichting, *Centrum* - voor alle anderen).


## Acties {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*  

![Widgetpagina](@site/static/img/widgets/widget_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elk paneel*

![Widgetpagina](@site/static/img/widgets/widget_actions_ios.png)  

</TabItem>

</Tabs>

Toegang tot aanvullende acties in het Scherm configureren zijn:

- *Android*. Gelegen in het Scherm configureren aan de onderkant van het scherm in de sectie *Acties*: *Menu → Scherm configureren → Acties*.
- *Android / iOS*. Gelegen op de schermen van elk Paneel in het *driepuntmenu* in de rechterbovenhoek van het scherm.

Beschikbare acties:

- **Resetten naar standaard**. Deze functie stelt u in staat om alle instellingen terug te zetten naar standaardwaarden als u opnieuw wilt beginnen, of alleen de vooraf ingestelde gebruikt wanneer u OsmAnd start.
- **Kopiëren van ander profiel**. Deze functie stelt u in staat om snel instellingen van een ander profiel te importeren, selecteer de gewenste uit de lijst en kopieer.


## Profiel wisselen {#switch-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Scherm configureren](@site/static/img/widgets/configure_screen_switch_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Scherm configureren](@site/static/img/widgets/configure_screen_switch_ios.png)

</TabItem>

</Tabs>

- Voor **Android**-apparaten kunt u profielen wijzigen bovenaan het startscherm van Scherm configureren met behulp van de beschikbare profielpictogrammen.  
- Als u een **iOS**-apparaat gebruikt, tikt u op het profielpictogram in de bovenhoek van het startscherm van Scherm configureren en selecteer het gewenste profiel uit de lijst om het te activeren.  

**Let op**: De optie *Profiel wisselen* toont niet alle bestaande profielen, maar alleen die welke zijn *ingeschakeld* in het Instellingen-menu.


## Gerelateerde artikelen {#related-articles}

- [Kaartknoppen](./map-buttons.md)
- [Informatiewidgets](./info-widgets.md)
- [Navigatiewidgets](./nav-widgets.md)
- [Straal-liniaal en Liniaal](./radius-ruler.md)
- [Markerwidgets](./markers.md)
- [Snelle actie](./quick-action.md)

