---
source-hash: cbfcf0aa9a07f3ab40e670385d79d1a04431696bcbef518decc18f41ef282921
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

Met het menu **Scherm configureren** in OsmAnd kunt u de kaartinterface aanpassen door widgets, knoppen en snelle acties toe te voegen en te rangschikken over meerdere panelen.

U kunt:

- [Informatieve](../widgets/info-widgets.md), [navigatie-](../widgets/nav-widgets.md) en [markeringsgerelateerde](../widgets/markers.md) widgets toevoegen.
- [Snelle acties](../widgets/quick-action.md), [Aangepaste knoppen](../widgets/quick-action.md#custom-buttons) en [Standaardknoppen](../widgets/map-buttons.md) toevoegen of bewerken.
- Widgets organiseren in panelen (boven, onder, links, rechts, midden).
- Meerdere **pagina's** maken binnen zijpanelen, de grootte van widgets kiezen.
- Rijhoogte kiezen en widgetpictogrammen in- of uitschakelen.

Alle widgets zijn [profielafhankelijk](../personal/profiles.md) — elk profiel heeft zijn eigen lay-out, volgorde, zichtbaarheid en instellingen.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_1.png)  

</TabItem>

</Tabs>


## Widgetpanelen {#widget-panels}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configure screen](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configure screen](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs>

OsmAnd stelt u in staat de kaartinterface te organiseren met aanpasbare widgetpanelen.  
U kunt widgets toevoegen, opnieuw rangschikken, groeperen en verwijderen in de volgende panelen:

- **Bovenpaneel**
- **Onderpaneel**
- **Linkerpaneel**
- **Rechterpaneel**

Elk paneel ondersteunt verschillende lay-outgedragingen:

- **Boven- en onderpanelen** tonen widgets in rijen. U kunt één of twee widgets per rij plaatsen en indien nodig meerdere rijen toevoegen.
- **Links- en rechterpanelen** ondersteunen meerdere pagina's. U kunt widgets groeperen in afzonderlijke pagina's en ertussen schakelen.


### Widgetcatalogus {#widgets-catalog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_panels_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_panels_ios.png)

</TabItem>

</Tabs>

***Navigatiewidgets:***  

- [Peiling](../widgets/nav-widgets.md#bearing).  
    Deze set toont de absolute of relatieve peiling naar een doel in hoekeenheden.  
    3 widgets zijn inbegrepen: *Relatieve peiling*, *Magnetische peiling*, *Ware peiling*.

- [Hoogteprofiel](../widgets/nav-widgets#elevation-widget) (*Alleen boven/onder*, *Alleen Android*).  
    Toont routehoogte en helling.

- [Rijstroken](../widgets/nav-widgets#lanes) (*Alleen boven/onder*).  
    Visuele rijstrookbegeleiding.

- [Kaartmarkeringsbalk](../widgets/markers.md#configure-marker-widgets-android) (*Alleen boven/onder*).  
    Toont afstand/richting tot opgeslagen markeringen.  
    Configureerbaar voor 1 of 2 markeringen.

- [Navigatiepunt](../widgets/nav-widgets.md#navigation-points).  
    De set toont de resterende afstand tot een bestemming, tussenpunt, aankomsttijd bij een tussenpunt, of reistijd voor een berekende route.  
    4 widgets zijn inbegrepen: [Afstand tot bestemming](../widgets/nav-widgets.md#distance-to-destination), [Afstand tot tussenpunt](../widgets/nav-widgets.md#distance-to-intermediate), [Tijd tot tussenpunt](../widgets/nav-widgets.md#time-to-intermediate), [Tijd tot bestemming](../widgets/nav-widgets.md#time-to-destination).

- [Routemanouvres](../widgets/nav-widgets.md#next-turn) (*Alleen linker-/rechterpaneel*).  
    Deze set wordt geactiveerd tijdens navigatie en toont de afstand en pijl naar de volgende manoeuvre.  
    3 widgets zijn inbegrepen: *Volgende afslag*, *Volgende afslag (klein)*, *Tweede volgende afslag*.

- [Snelheidslimiet](../widgets/nav-widgets.md#speed-limit).  
    Toon de huidige snelheidslimiet voor de weg.

- [Snelheidsmeter](../widgets/info-widgets.md#speedometer).  
    Toont de huidige snelheid op basis van GPS-gegevens en de beperkte snelheid op basis van [OpenStreetMap-gegevens](https://wiki.openstreetmap.org/wiki/Key:maxspeed).

- [Straatnaam](../widgets/nav-widgets#street-name) (*Alleen boven/onder*).  
    Toont de huidige of aankomende straat.

<br/>

***Informatieve widgets:***

- [Hoogte](../widgets/info-widgets.md#altitude-widgets).  
    De set toont de hoogte boven zeeniveau voor de huidige locatie of voor het huidige kaartcentrum.  
    2 widgets zijn inbegrepen: *Hoogte: huidige locatie*, *Hoogte: kaartcentrum*.

- [Gemiddelde snelheid](../widgets/info-widgets.md#average-speed-widget).  
    Toont de gemiddelde snelheid van de huidige reis.

- [Batterijniveau](../widgets/info-widgets.md#battery-level).  
    Toont het batterijniveau van het apparaat.

- [Coördinatenwidgets](../widgets/info-widgets#coordinates-widget) (*Alleen boven/onder*).  
    Deze set toont de geografische coördinaten van de huidige geolocatie.  
    2 widgets zijn inbegrepen: *Coördinaten: kaartcentrum*, *Coördinaten: huidige locatie*.

- [Huidige snelheid](../widgets/info-widgets.md#speed).  
    Toont snelheid van de GPS-sensor.

- [Huidige tijd](../widgets/info-widgets.md#current-time).  
    Toont de huidige systeemtijd.

- [Glijgetal](../widgets/info-widgets.md#glide-ratio).  
    De widgets tonen het glijgetal naar het doel en het gemiddelde glijgetal voor de huidige vlucht.  
    2 widgets zijn inbegrepen: *Glijgetal naar doel*, *Gemiddeld glijgetal*.

- [GPS-info](../widgets/info-widgets.md#gps-info) (*Alleen Android*).  
    Toont het aantal gedetecteerde satellieten.

- [Kaartmarkeringen](../widgets/markers.md).  
    De set toont de afstand of geschatte aankomsttijd (ETA) voor de eerste twee markeringen in [de lijst](https://osmand.net/docs/user/personal/markers#itinerary-list).  
    2 widgets zijn inbegrepen: *Eerste markering*, *Tweede markering*.

- [Radiusliniaal](../widgets/info-widgets.md#radius-ruler).  
    Toont de afstand tussen uw locatie en een punt op de kaart, omcirkeld door de [Radiusliniaaltool](../widgets/radius-ruler.md).

- [Zonsopgang, zonsondergang](../widgets/info-widgets.md#sunset-and-sunrise).  
    Toont de tijd van de volgende zonsopgang of zonsondergang voor het midden van de kaart.  
    2 widgets zijn inbegrepen: *Zonsopgang*, *Zonsondergang*.

<br/>

***Plugin-gebaseerde widgets:***  

- [Audio/video-notities](../widgets/info-widgets.md#audiovideo-notes-widget).  
    Snelle toegang tot het vastleggen van media.  
    4 widgets zijn inbegrepen: *Op aanvraag*, *Audio opnemen*, *Video opnemen*, *Foto maken*.

- [Ontwikkelaarswidgets](../widgets/info-widgets.md#developer-widgets).  
    Toont optionele informatie.  
    5 widgets zijn inbegrepen: *Kaartweergave FPS*, *Camerakanteling*, *Camerahoogte*, *Zoomniveau*, *Afstand van camera tot doel*, *Beschikbaar RAM*.  

- [Externe sensoren-widgets](../widgets/info-widgets.md#external-sensors-widgets).  
    De set helpt gegevens van BLE/ANT+-sensoren in realtime te volgen.  
    6 widgets zijn inbegrepen: *Hartslag*, *Fietsvermogen* (*Alleen Android*), *Fietscadans*, *Fietssnelheid*, *Fietsafstand*, *Temperatuur*.

- [Mapillary](../widgets/info-widgets.md#mapillary-widget).  
    Opent de Mapillary-app voor straatbeeldmateriaal.

- [OsmAnd Tracker-status](../widgets/info-widgets.md#tracker-widget).  
    Snelle toegang tot de [OsmAnd Tracker-applicatie](https://play.google.com/store/apps/details?id=net.osmand.telegram).

- [Parkeerwidget](../widgets/info-widgets.md#parking-widget).  
    Afstand van het midden van het scherm tot de opgeslagen parkeerlocatie.

- [Ritregistratie](../widgets/info-widgets.md#trip-recording-widgets).  
    Start en stopt het opnemen van tracks en toont trackopnamegegevens.  
    4 widgets zijn inbegrepen: *Afstand*, *Duur*, *Omhoog*, *Omlaag*.

- [Weer](../widgets/info-widgets.md#weather-widgets).  
    Toont gedetailleerde weersinformatie.  
    5 widgets zijn inbegrepen: *Temperatuur*, *Luchtdruk*, *Wind*, *Wolken*, *Neerslag*.

:::note Paneelafhankelijke widgets

- Alleen beschikbaar in de **boven- en onderpanelen** en moeten in afzonderlijke rijen worden geplaatst: *Coördinatenwidgets, Hoogteprofielwidget, Rijstrokenwidget, Kaartmarkeringsbalk, Straatnaamwidget*.
- Alleen beschikbaar in de **linker- en rechterpanelen**: *Routemanouvres*.

:::


### Rijen {#rows}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_1_ios.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_ios.png) 

</TabItem>

</Tabs>



De functie **Rijmodus** stelt u in staat om zoveel rijen als nodig toe te voegen aan de boven- en onderpanelen. U kunt meerdere widgets per rij weergeven, waardoor de hoeveelheid zichtbare informatie wordt vergroot.

***Hoe rijen te configureren:***

- **Widgets toevoegen**: Tik op de *Plus*-knop (Android) of *Widget toevoegen* (iOS) en selecteer vervolgens uit de lijst met beschikbare widgets.
- **Widgets opnieuw rangschikken**: Tik op de *Potlood*-knop (Android) of *Bewerken* (iOS) om de widgets te herschikken.
- **Rijen toevoegen**: Tik op de knop *Rij toevoegen* om nieuwe rijen voor uw widgets te maken.
- **Widgets verplaatsen**: Sleep widgets tussen verschillende rijen.
- **Widgetinstellingen openen**: Tik op het *"i"*-pictogram (Android) of de *">"*-pijl (iOS) om de widgetinstellingen te openen.
- **Wijzigingen opslaan**: Tik op *Toepassen* (Android) of *Gereed* (iOS) om de lay-out op te slaan.


#### Widgettypen en beperkingen {#widget-types-and-restrictions}

De modus stelt u in staat om **meer dan één widget in een enkele rij** toe te voegen aan de boven- en onderpanelen om zoveel mogelijk informatie weer te geven.  

- **Complexe widgets**. Slechts één complexe widget kan per rij worden toegevoegd. Deze omvatten:
    - [Kaartmarkeringsbalk (*Alleen Android*)](../widgets/markers.md#configure-marker-widgets-android)
    - [Straatnaam](../widgets/nav-widgets#street-name)
    - [Coördinatenwidgets](../widgets/info-widgets#coordinates-widget)
    - [Rijstroken](../widgets/nav-widgets#lanes)
    - [Hoogteprofiel (*Alleen Android*)](../widgets/nav-widgets#elevation-widget)
    - [Routemanouvres](../widgets/nav-widgets.md#next-turn)

- **Eenvoudige widgets**. Meerdere eenvoudige widgets kunnen aan een enkele rij worden toegevoegd. Deze widgets kunnen *Naam*, *Meeteenheden*, *Waarde* en *Pictogram* weergeven.


### Pagina's {#pages}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> → Bewerken → Pagina toevoegen*  

![Widget page](@site/static/img/widgets/widget_page_1_andr.png) ![Widget page](@site/static/img/widgets/widget_page_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> → Bewerken → Pagina toevoegen*

![Widget page](@site/static/img/widgets/widget_page_1_ios.png) ![Widget page](@site/static/img/widgets/widget_page_2_ios.png)  

</TabItem>

</Tabs>

Widgets in de rechter- en linkerpanelen kunnen worden gegroepeerd in **Pagina's**. De functie **Paginamodus** stelt u in staat om 5 pagina's toe te voegen aan de linker- en rechterpanelen.

***Hoe rijen te configureren:***

- **Een pagina toevoegen**. Navigeer naar de instellingen van het linker-/rechterpaneel en tik op *Bewerken → Pagina toevoegen*.
- **Widgets per pagina organiseren**. Deze functie is handig wanneer verschillende sets widgets nodig zijn voor verschillende taken, zoals navigeren versus bladeren door de kaart.
- Pagina's stellen u in staat om **widgetsets** te maken voor specifieke scenario's, waardoor de workflow wordt verbeterd en rommel wordt verminderd.


## Widgetinstellingen {#widget-settings}

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **Widgetgrootte-opties** (*voor alle panelen*):  
    U kunt de grootte van **Eenvoudige widgets** aanpassen in de **Boven-, Onder-, Links- en Rechterpanelen**:

    - **Klein**. Ideaal voor compacte schermen, waardoor meer schermruimte wordt bespaard voor kaarten.
    - **Gemiddeld** (*standaard widgetgrootte*). Balanceert zichtbaarheid en ruimtegebruik.
    - **Groot**. Biedt grotere, beter zichtbare widgetinformatie.  

2. **Widgetpictogrammen verbergen** (*voor boven- en onderpanelen*):

    - Verbetert de duidelijkheid en maximaliseert de ruimte voor belangrijke gegevens.
    - Vooral handig bij het weergeven van veel widgets op dezelfde **rij**.

3. **Individuele grootte voor verschillende rijen** (*voor alle panelen*):

    - Widgets kunnen individueel worden aangepast door de rij- en kolomgrootte aan te passen.
    - **OPMERKING:** Het wijzigen van de grootte van één widget in een rij/kolom zal alle widgets in die rij/kolom opnieuw schalen.

4. **Om de widgetgrootte en pictogramzichtbaarheid te wijzigen:**

    - Selecteer een widget die u al aan het paneel hebt toegevoegd.  
    - Tik op het *Instellingen*-pictogram aan de rechterkant van het widgetveld.
    - Tik op de instelling *Grootte* en selecteer een van de beschikbare groottes.
    - Schakel naar de uit-stand, in het veld *Pictogram tonen*.


## Panelaanpassing {#panels-customization}

### Widgetcontextmenu {#widget-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widget dublicate](@site/static/img/widgets/widget_context_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget dublicate](@site/static/img/widgets/widget_context_menu_ios.png)

</TabItem>

</Tabs>

Het **widgetcontextmenu** biedt een snelle manier om widgets rechtstreeks vanaf het kaartscherm te beheren en te configureren. U kunt het openen door ***lang te tikken*** op een willekeurige widget om de lay-out van widgets aan te passen zonder de kaart te verlaten.

**Voor boven- en onderpanelen**  

- *Widget toevoegen aan rechts/links:*

    - Selecteer een positie voor de nieuwe widget ten opzichte van de huidige.
    - Kies de widget uit de lijst [Beschikbare widgets](#widgets-for-all-panels).

**Voor linker- en rechterpanelen**  

- *Widget toevoegen boven/onder:*

    - Selecteer of de nieuwe widget boven of onder de huidige widget moet worden geplaatst.
    - Tik op de vereiste widget in de lijst om deze op de opgegeven positie toe te voegen.

**Algemene acties voor alle panelen**  

- *Instellingen*.
    - Open de instellingen van de widget (indien beschikbaar) om het uiterlijk of gedrag aan te passen.

- *Gemiddelde snelheid resetten*.
    - Beschikbaar voor de widget [Gemiddelde snelheid](../widgets/info-widgets.md#average-speed).
    - Lang tikken om de snelheidsweergave tijdens een rit direct te resetten.

- *Verwijderen*.
    - Verwijder de widget uit het paneel.
    - Een bevestigingsprompt zorgt ervoor dat de actie opzettelijk is.

### Kopieën van widgets {#copies-of-widgets}

*OsmAnd-menu → Scherm configureren → Widgets → Paneel*  

![Widget dublicate](@site/static/img/widgets/widget_dublicate.png)  

OsmAnd stelt u in staat om meerdere instanties van dezelfde widget toe te voegen aan verschillende panelen of pagina's. Deze functie is bijzonder handig wanneer u consistente informatie nodig hebt over verschillende weergaven of profielen.  

***Widgets dupliceren:***

- **Voeg de widget toe**. Navigeer naar: *OsmAnd-menu → Scherm configureren → Widgets → Paneel →* **Widget toevoegen**.
- **Dupliceren via het contextmenu**. Tik op de widget en selecteer **Dupliceren** uit de lijst met acties.
- **Alternatieve methode**. Selecteer dezelfde widget uit de lijst *Beschikbare widgets* en tik op *Toevoegen*.


### Verplaatsen of verwijderen {#move-or-delete}

*OsmAnd-menu → Scherm configureren → Widgets → Paneel*  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_remove_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_remove_ios.png) 

</TabItem>

</Tabs>



U kunt widgets op het toepassingsscherm herschikken of verwijderen met behulp van de modus **Bewerken**.  

***Een widget verplaatsen:***

- Ga naar: *OsmAnd-menu → Scherm configureren → Widgets → Paneel → Bewerkknop*.
- Lang tikken op het **pictogram aan de rechterkant** van de widget.
- Sleep het naar de gewenste positie in de widgetlijst.

***Een widget verwijderen:***  

- Volg dezelfde stappen als hierboven.
- Tik op het **min-pictogram** links van de widgetnaam.
- Bevestig de verwijdering wanneer daarom wordt gevraagd.


## Knoppen {#buttons}

### Aangepaste knoppen {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_2_ios.png)

</TabItem>

</Tabs>

**Snelle actie (Aangepaste knoppen)** stelt u in staat om een lijst met enkele acties toe te voegen uit alle beschikbare [Snelle acties](../widgets/quick-action.md#custom-buttons). Deze acties kunnen worden toegewezen aan een of meer widgetknoppen op het kaartscherm. Aangepaste knoppen bieden snelle toegang tot veelgebruikte acties.

### Standaardknoppen {#default-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_3_ios.png)

</TabItem>

</Tabs>

1. Met **standaardknoppen** kunt u aanpassen welke vooraf ingestelde kaartknoppen zichtbaar zijn op het kaartscherm. U kunt ervoor kiezen om de volgende knoppen te verbergen of weer te geven:

    - [3D-modus](../widgets/map-buttons.md#3d-mode). Voor iOS is de knop altijd beschikbaar. Voor Android verschijnt deze in de lijst en is beschikbaar voor instelling als de kaartweergave-engine [Versie 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) is geselecteerd.

    - [Kompas](../widgets/map-buttons.md#display-options). Geeft aan hoe de kaart op het apparaat is georiënteerd.  
    3 weergaven: *Altijd zichtbaar*, *Altijd verborgen*, *Zichtbaar als kaart is gedraaid*.

    - [Kaart configureren](../map/configure-map-menu.md). Toegang tot opties om de stijl, lagen en aanvullende instellingen van de kaart te wijzigen.

    - [Menu](../widgets/map-buttons.md#main-menu). Opent het hoofdmenu van de applicatie voor toegang tot alle functies.

    - [Mijn locatie](../widgets/map-buttons.md#my-location-and-zoom). Centreert de kaart op uw huidige positie.

    - [Navigatie](../widgets/map-buttons.md#directions). Essentieel voor routeplanning en het starten van navigatie.

    - [Zoeken](../widgets/map-buttons.md#search). Opent de zoektool voor het vinden van locaties.

    - [In-/uitzoomen](../widgets/map-buttons.md#my-location-and-zoom). Past het zoomniveau van de kaart aan om meer of minder details weer te geven.

2. Het **drie-stippenmenu** op het scherm Standaardknoppen bevat acties zoals:

    - *Terugzetten naar standaard*. Hiermee kunt u alle instellingen terugzetten naar hun oorspronkelijke uiterlijk.
    - *Kopiëren van een ander profiel*. Selecteer uit welk profiel uit de aangeboden lijst u de knopinstellingen wilt kopiëren.

3. **Het standaard knopuiterlijk** (*Alleen Android*) biedt een verscheidenheid aan aanpassingsopties voor dit type knoppen. Om het uiterlijk van een knop te wijzigen, tikt u op de gewenste knop in de lijst en selecteert u de optie [Uiterlijk](#button-appearance).


### Knopweergave {#button-appearance}

<InfoAndroidOnly/>

![Button Appearance](@site/static/img/widgets/button_appearance_settings_andr.png)

De functie *Knopweergave* stelt u in staat om het uiterlijk van knoppen op uw kaartinterface volledig aan te passen. Deze aanpassingsopties zijn beschikbaar voor zowel *Snelle actie (Aangepaste knoppen)* als *Standaardknoppen*, wat uitgebreide controle biedt over het uiterlijk van de kaartinterface en nauwkeurige aanpassingen aan het knopontwerp mogelijk maakt.

***Aanpassingsopties***:

- **Pictogram**. Selecteer uit een lijst met pictogrammen die acties vertegenwoordigen die u al hebt toegevoegd, waardoor functies in één oogopslag gemakkelijk te identificeren zijn.
- **Hoekradius**. Pas deze instelling aan om de vorm van de knop te wijzigen, variëcerend van scherpe, vierkante hoeken tot vloeiende, afgeronde randen.
- **Grootte**. Kies de knopgrootte die het beste bij uw scherm past en zo nodig opvalt. Voor *Standaardknoppen* zijn de groottes vooraf ingesteld en kunnen ze niet worden aangepast.
- **Achtergronddekking**. Beheer de zichtbaarheid van de achtergrond van de knop. U kunt deze volledig zichtbaar of gedeeltelijk transparant instellen, of alleen de kader schaduw en het pictogram weergeven.


## Overig {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other"/>*

![Widget page](@site/static/img/widgets/conf_screen_other_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Overig*

![Widget page](@site/static/img/widgets/conf_screen_other_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="display_position"/> / <Translate ios="true" ids="position_on_map"/>](#display-position-location-position-on-screen). [⬇](#display-position-location-position-on-screen)
- [Afstand per tik](../widgets/radius-ruler.md#distance-by-tap). Biedt de mogelijkheid om de afstand van uw positie tot het geselecteerde punt te meten.
- [Snelheidsmeter](../widgets/info-widgets.md#speedometer). Toont de huidige snelheid op basis van GPS-gegevens en de beperkte snelheid op basis van [OpenStreetMap-gegevens](https://wiki.openstreetmap.org/wiki/Key:maxspeed). De weergegeven gegevens zijn ook afhankelijk van de instelling [Snelheidslimiettolerantie](../navigation/guidance/voice-navigation.md#speed-limit) van OsmAnd.


### Weergavepositie (Locatiepositie op scherm) {#display-position-location-position-on-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widget page](@site/static/img/widgets/conf_screen_display_position_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget page](@site/static/img/widgets/conf_screen_display_position_ios.png)

</TabItem>

</Tabs>

> *Locatiepositie op scherm* is de naam van deze instelling in de iOS-versie van OsmAnd.  

Hiermee kunt u de plaatsing van de cursor instellen op *[Mijn locatie](../map/interact-with-map.md#my-location-and-zoom)* op de OsmAnd-kaart. Er zijn drie opties beschikbaar:  

- **<Translate android="true" ids="position_on_map_center"/>**. De cursor is altijd in het midden van het scherm gepositioneerd.
- **<Translate android="true" ids="position_on_map_bottom"/>**. *Mijn locatie* wordt iets onder het midden van het scherm geplaatst. Deze modus stelt u in staat om meer kaartinformatie vooruit te zien, wat handig is tijdens navigatie.
- **<Translate android="true" ids="shared_string_automatic"/>**. Plaatst *Mijn locatie* afhankelijk van de *[Kaartoriëntatiemodi](../map/interact-with-map.md#map-orientation-modes)* (*Onder* - voor bewegingsrichting, *Midden* - voor alle andere).


## Acties {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*  

![Widget page](@site/static/img/widgets/widget_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elk paneel*

![Widget page](@site/static/img/widgets/widget_actions_ios.png)  

</TabItem>

</Tabs>

Toegang tot aanvullende acties in het scherm Configureren zijn:

- *Android*. Bevindt zich in het scherm Configureren onderaan het scherm in de sectie *Acties*: *Menu → Scherm configureren → Acties*.
- *Android / iOS*. Bevindt zich op de schermen van elk paneel in het *drie-stippenmenu* in de rechterbovenhoek van het scherm.

Beschikbare acties:

- **Terugzetten naar standaard**. Met deze functie kunt u alle instellingen terugzetten naar de standaardwaarden als u opnieuw wilt beginnen, of alleen de vooraf ingestelde waarden gebruiken bij het starten van OsmAnd.
- **Kopiëren van een ander profiel**. Met deze functie kunt u snel instellingen van een ander profiel importeren, de gewenste selecteren uit de lijst en kopiëren.


## Profiel wisselen {#switch-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_switch_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_switch_ios.png)

</TabItem>

</Tabs>

- Voor **Android**-apparaten kunt u profielen wijzigen bovenaan het startscherm van Scherm configureren met behulp van de beschikbare profielpictogrammen.  
- Als u een **iOS**-apparaat gebruikt, tikt u op het profielpictogram in de bovenhoek van het startscherm van Scherm configureren en selecteert u het gewenste profiel uit de lijst om het te activeren.  

**Let op**. De optie *Profiel wisselen* toont niet alle bestaande profielen, maar alleen die die zijn *ingeschakeld* in het menu Instellingen.


## Gerelateerde artikelen {#related-articles}

- [Kaartknoppen](./map-buttons.md)
- [Informatieve widgets](./info-widgets.md)
- [Navigatiewidgets](./nav-widgets.md)
- [Radiusliniaal en liniaal](./radius-ruler.md)
- [Markeringswidgets](./markers.md)
- [Snelle actie](./quick-action.md)

> *Laatst bijgewerkt: juli 2025*