---
source-hash: 40a50d2d81edfe3031807e74cf61d1a5a4ab80acbd6b91f1d0093008b7509eaa
sidebar_position: 2
title:  Kaarten & Bronnen
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

In de sectie **Kaarten en Bronnen** kunt u zowel *Online* als *Offline* kaarten en andere bronnen die in OsmAnd worden gebruikt, beheren. U kunt bijvoorbeeld downloaden, verwijderen, hernoemen, de cache wissen, bijwerken, de grootte controleren en verschillende acties uitvoeren.

OsmAnd werkt met twee soorten kaarten: [Vectorkaarten](../map/vector-maps.md) en [Rasterkaarten](../map/raster-maps.md). Het tabblad [Lokaal](#local) bewaart alle kaarten en bronnen. Beschikbare kaarttypes kunnen worden gedownload via het tabblad [Downloads](#downloads). Op het tabblad [Updates](#updates) kunt u kaarten downloaden die beschikbaar zijn voor updates en [Live updates](#live-updates) gebruiken. U kunt ook de functie [Extra kaart](#extra-maps) gebruiken om uw eigen kaarttypes te maken.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![Kaartenmenu Android](@site/static/img/personal/maps/maps_overview_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Kaartenmenu iOS](@site/static/img/personal/maps/maps_overview_ios.png)

</TabItem>

</Tabs>


## Kaarttypes {#map-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Download kaartmenu Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Regio-brede kaarten Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download kaartmenu iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Regio-brede kaarten Android](@site/static/img/personal/maps/map_type_2_ios.png)

</TabItem>

</Tabs>

Het downloaden van kaarten in de OsmAnd-applicatie is een belangrijke stap die de functionaliteit en efficiëntie van de navigatie bepaalt.

### Gratis kaartinhoud {#free-map-content}

- **Standaardkaart**. Biedt een overzicht van het gebied op basis van de [OpenStreetMap](https://www.openstreetmap.org/)-bron en bevat een kaart, routes, adressen, POI en informatie over openbaar vervoer. Als u hierop tikt, wordt een scherm geopend met een lijst van regio's van het geselecteerde land en informatie over hoeveel ruimte deze kaarten op uw apparaat in beslag zullen nemen.
- **Alleen wegen** (*alleen Android*). De kaart bevat alleen informatie over het wegennet om te focussen op routes en wegeninfrastructuur. Door details zoals gebouwen en nuttige plaatsen te verwijderen, is deze kleiner dan een standaardkaart. Als u hierop tikt, wordt een scherm geopend met een lijst van regio's in het geselecteerde land en informatie over hoeveel ruimte deze kaarten op uw apparaat in beslag zullen nemen.
- **Wereldoverzichtskaart**. Versies van OsmAnd tot 3.8 bieden de mogelijkheid om een wereldkaart te downloaden zodat u deze op planetaire schaal kunt bekijken. In nieuwere versies van OsmAnd is een lichtgewicht *Mini Wereldkaart* gebundeld met de applicatie. De app laat u een grotere overzichtswereldkaart downloaden met meer gedetailleerde informatie.

:::info maandelijkse kaartupdates
Houd er rekening mee dat maandelijkse kaartupdates worden beschouwd als een nieuwe kaartdownload en worden afgetrokken van het beschikbare aantal gratis kaartdownloads.
:::

### Betaalde kaartinhoud {#paid-map-content}

- [Hoogtelijnen](../plugins/topography.md#contour-lines). Een kaart met hoogtelijnen om het terrein te visualiseren.
- [Terreinkaart (Schaduw en Helling)](../plugins/topography.md#hillshade-slope-and-altitude-layers). Kaarten met schaduwen of hellingen bieden aanvullende terreininformatie.
- [Terreinkaart (3D)](../plugins/topography.md#3d-relief). Driedimensionale weergave van het terrein voor een beter begrip van uw omgeving. [Kaartweergave-engine Versie 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) moet zijn ingeschakeld.
- [Wikipedia](../plugins/wikipedia.md). Vectorkaart met geo-gepositioneerde [Wikipedia](https://wikipedia.org/)-artikelen over bezienswaardigheden of aanvullende informatie over plaatsen.
- [Wikivoyage](../plan-route/travel-guides.md). Het biedt vectorkaarten met virtuele reisgidsen, die gebruikers waardevolle informatie, aanbevelingen en tips bieden.
- [Weersvoorspelling](../plugins/weather.md). Weerinformatie op een kaart voor eenvoudige routeplanning.


## Downloadmenu {#downloads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Algemeen downloadkaartmenu Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Algemeen downloadkaartmenu iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

Via het tabblad **Downloaden** kunt u verschillende kaarttypes downloaden van de OsmAnd-servers, wat een actieve internetverbinding vereist.

***Om een kaart te downloaden:***

- **Open het tabblad Downloaden**, zoek de vereiste sectie en tik op de relevante map om de beschikbare kaarten te zien.

- **Beschikbare kaarten** tonen downloadpictogrammen, voor een enkele kaart of voor [meerdere kaarten](#multiple-map-loading).

- **Gedownloade kaarten** tonen een groen pictogram met een menuknop:
    - *Android*: Driepuntenmenu.
    - *iOS*: Info (i)-pictogram.

- **Kaarten die worden geladen** hebben een pictogram dat dit visualiseert. Om het downloaden te annuleren, tikt u op het pictogram. Om de lijst met kaarten in de downloadwachtrij te bekijken en de downloads te annuleren, tikt u op de downloadbalk in het gebied Apparaatgeheugeninfo van de tabbladen Downloads en Updates.

- **In de gratis versie** tonen kaarten die niet beschikbaar zijn voor download een [GET](../purchases/index.md)-pictogram, dat linkt naar de aankooppagina.

***Het downloadtabblad bestaat uit kaartgroepen:***

- **Apparaatgeheugeninfo**. Visualiseer de hoeveelheid bezette en vrije ruimte op uw apparaat.
- **Kaartenteller** (***Gratis versie***). Toont hoeveel kaarten u nog kunt downloaden.
- [Extra kaarten](#extra-maps). Toont de kaartgegevens voor het [Aangepaste pakket](../plugins/custom.md).
- **Regio's**. Lijst per continent en wereldregio: *Afrika, Antarctica, Azië, Australië en Oceanië, Midden-Amerika, Europa, Noord-Amerika, Rusland en Zuid-Amerika.*
- [Wereldkaarten](#world-maps). Een lijst met kaarten van de hele wereld: *Wereldhoogtecorrectie (alleen Android)*, *Wereldoverzichtskaart*, *Hele wereld (Weersvoorspelling)*
- [Nautische kaarten](../plugins/nautical-charts.md) ([*betaalde functie*](../purchases/index.md)). Vectorkaarten met hoogtes als punten of lijnen.
- [Reisgidsen (Wikivoyage)](../plan-route/travel-guides.md) ([*betaalde functie*](../purchases/index.md)). Vectorkaarten met een verzameling artikelen in HTML-formaat en aanvullend GPX-bestanden.
- **Andere kaarten**. Kaarten die niet kunnen worden toegewezen aan de huidige kaarthiërarchie omdat ze niet worden ondersteund of in toekomstige versies beschikbaar zullen zijn.
- [Steminstructies](../navigation/guidance/voice-navigation.md) (*alleen Android*). Stempakketten voor het uitspreken van navigatie-instructies.
- [Kaartlettertypen](../map/vector-maps.md#map-fonts-android) (*alleen Android*). Extra lettertypebestanden om tekst op de kaart weer te geven.
- **Zoek stad of regio** (*alleen Android*). Een snelle zoekfunctie bovenaan het downloadtabblad (vergrootglaspictogram) om de benodigde stad of regio te vinden.

### Wereldkaarten {#world-maps}

In het menu Kaarten downloaden is er een sectie **Wereldkaarten** die toegang biedt tot het downloaden van verschillende wereldkaarten, wat de functionaliteit van de app aanvult.

- **Wereldhoogtecorrectie** (*alleen Android*). Dit bestand bevat hoogtecorrecties om de kromming van de planeet te compenseren.
- **Wereldoverzichtskaart**. Biedt een uitgebreid overzicht van het aardoppervlak, handig voor lange-termijn routeplanning en vrijblijvende verkenning.
- **Hele wereld (Weersvoorspelling)**. Hiermee kunt u een kaart met weersinformatie downloaden.


### Extra kaarten {#extra-maps}

OsmAnd ondersteunt de overdracht van profielspecifieke instellingen en gegevens, inclusief weergavebestanden, lettertypen, routes, kaarten en aangepaste plug-ins. Maak een aangepaste kaartenmap met behulp van een `.osf` plug-inbestand (een gecomprimeerd `.zip`-formaat).

Om een bestand te importeren:

1. Zoek het `.osf`-bestand in de opslag van uw apparaat, messenger of e-mail.
2. Tik erop om het met OsmAnd te openen.
3. De plug-in verschijnt in de sectie **Plug-inlijst**, waar deze kan worden geactiveerd.
4. Een overeenkomstige map verschijnt dan in de sectie **Extra kaarten** van het tabblad [Downloads](#downloads).

Lees meer in het artikel [**Aangepast pakket**](../plugins/custom).


### Meerdere kaarten laden {#multiple-map-loading}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Algemeen downloadkaartmenu Android](@site/static/img/personal/maps/multiple_maps_andr.png) ![Deselecteer menu Android](@site/static/img/personal/maps/multiple_maps_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Algemeen downloadkaartmenu iOS](@site/static/img/personal/maps/multiple_maps_ios.png) ![Deselecteer menu iOS](@site/static/img/personal/maps/multiple_maps_2_ios.png)

</TabItem>

</Tabs>

Voor landen die bestaan uit **meerdere regiokaarten**, kunt u bulksgewijs meerdere kaarten laden. Kaarten die beschikbaar zijn voor dit type download worden weergegeven met een dubbel downloadpijlicoon en een label met het aantal regio's erin (bijv. Hoogtelijnen / Alle regio's: 10). U kunt kiezen hoeveel kaarten u wilt downloaden.


## Lokaal menu {#local-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Tabblad Lokaal Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Tabblad Lokaal Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

Het tabblad Lokaal geeft een overzicht van het opslaggebruik voor alle OsmAnd-gegevens op uw apparaat. De gegevens zijn voor de duidelijkheid verdeeld in drie kleurgecodeerde secties, met items gesorteerd op grootte van groot naar klein. Elke sectie toont alleen items met gedownloade gegevens:

- ***Bronnen*** (*blauw*).
    Bevat kaarten ([Standaard](../map/vector-maps.md), &nbsp;[Nautisch](../plugins/nautical-charts.md), &nbsp;[Topografie](../plugins/topography.md), &nbsp;[Weer](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) en [Reisgidsen](../plan-route/travel-guides.md), &nbsp;[Live updates](../personal/maps-resources.md#live-updates), &nbsp;**Alleen wegen**,  &nbsp;[Kaartbronnen](../map/raster-maps.md), &nbsp;[Weergavestijlen](../map/vector-maps.md#default-map-styles), &nbsp;**Kaartlettertypen, &nbsp;Steminstructies (opgenomen en TTS), &nbsp;Cache**.

- ***Mijn Plaatsen*** (*geel*).
    Bevat [Favorieten](../personal/favorites.md), &nbsp;[Tracks](../personal/tracks/manage-tracks.md), &nbsp;[OSM-notities](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[OSM-bewerkingen](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[A/V-notities](../plugins/audio-video-notes.md), &nbsp;[Kaartmarkeringen](../personal/markers.md), &nbsp;[Geschiedenis](../personal/global-settings.md#history), &nbsp;*Reisplan*.

- ***Instellingen*** (*groen*).
    Bevat [Profielen](../personal/profiles.md), &nbsp;[Kleuren](../personal/color-palette-schemes.md) en **Andere** app-configuraties.

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Lokaal tabbladmenu iOS](@site/static/img/personal/maps/local_tab_ios.png)

Het tabblad Lokaal geeft een overzicht van het opslaggebruik voor kaarten en brongegevens op uw apparaat. De geheugenbalk bovenaan toont drie categorieën:

- ***Groen***. Totaal gebruikte opslag op het apparaat.
- ***Oranje***. Deel van de gebruikte opslag ingenomen door OsmAnd-downloads.
- ***Grijs***. Vrije opslag beschikbaar op het apparaat.

Onder de geheugenbalk wordt een lijst van alle gedownloade OsmAnd-kaarten en -bronnen getoond, inclusief hun type en bestandsgrootte. Online kaarten worden niet meegerekend in de geheugenbalk, omdat ze worden gestreamd en slechts tijdelijk in de cache worden opgeslagen.

</TabItem>

</Tabs>


### Gegevens bekijken {#viewing-data}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Overzicht lokale categorie Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Opties lokale categorie Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Tik op een item in het tabblad **Lokaal** om de gedetailleerde lijst te openen. Bovenaan deze lijst toont een visueel paneel hoeveel ruimte het geselecteerde gegevenstype inneemt ten opzichte van de totale OsmAnd-opslag.

***Beschikbare acties:***

- **Zoeken**. Vind specifieke gegevens op naam binnen de geselecteerde map.
- **Driepuntenmenu**:
    ***Selecteren***. Kies meerdere items voor acties zoals *Verwijderen*, *Deactiveren* of *Activeren*.
    ***Importeren***. Krijg toegang tot de opslag van het apparaat om bestanden te importeren.
- **Sorteeroptie**. Sorteer items op naam, land, datum of grootte (beschikbaarheid hangt af van het gegevenstype).

Elk item in de lijst biedt een *driepuntenmenu* met opties:

- **Info**. Bekijk gedetailleerde informatie over de *[acties](#actions)*.
- **Exporteren**. Sla gegevens op in een bestand via *Instellingen → Exporteren naar bestand*.

***Extra opties voor kaarten:***

- **Deactiveren**. Schakel vectorkaarten uit zonder ze te verwijderen. Ze blijven opgeslagen maar worden niet gebruikt voor navigatie, zoeken of routering. Vermindert de belasting op het apparaat en versnelt OsmAnd.
- **Bijwerken**. Download de nieuwste versie van de kaart.
- **Hernoemen**. Pas de naam van de kaart aan voor betere identificatie.
- **Verwijderen**. Verwijder de kaart van uw apparaat.
- **Bewerken** (voor Online Kaarten). Wijzig de configuratie van de online kaart.

</TabItem>

<TabItem value="ios" label="iOS">

![Gegevens bekijken](@site/static/img/personal/maps/viewing_data_ios.png)

Tik op een offline item in het tabblad **Lokaal** om de gedetailleerde gegevens als volgt te openen:

- **Type**. Het type van het gegevensitem, zoals **Standaardkaart**, **Wikipedia**, **Hoogtelijnen**, enzovoort.
- **Grootte**. De grootte van het item in MB.
- **Aangemaakt op**. De datum waarop het item is toegevoegd.

Voor online kaarten worden alleen het type en de grootte van de gecachte gegevens weergegeven.

</TabItem>

</Tabs>


### Acties {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu-items Kaartbron](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Elk item in de lijst [Kaartbron](../map/raster-maps.md) biedt instellingen voor het beheren van online rasterkaarten die op uw apparaat zijn opgeslagen. Open het *driepuntenmenu* om toegang te krijgen tot de beschikbare acties:

- **Info**. Toont algemene details over de geselecteerde kaartbron, inclusief formaat en laatste updatedatum.
- **Grootte berekenen**. Schat de opslagruimte die wordt ingenomen door de gecachte tegels van deze kaartbron. Als de cache groter is dan *50MB*, kan de grootte worden weergegeven als *≥50MB* in plaats van een exact getal.
- **Alle tegels wissen**. Verwijdert alle gecachte tegels voor de geselecteerde kaartbron, waardoor opslagruimte wordt vrijgemaakt terwijl de kaartbron beschikbaar blijft voor toekomstig gebruik.
- **Exporteren**. Slaat de geselecteerde kaartbronconfiguratie op voor back-up of delen.
- **Verwijderen**. Verwijdert de geselecteerde kaartbron. Deze actie heeft geen invloed op gedownloade offline kaarten, maar wist de bijbehorende cache.

Bij het bekijken van een lokaal gegevensitem ziet u:

- **Type**. Het gegevenstype uit de **Lokaal**-lijst.
- **Aangemaakt**. De datum waarop het item is toegevoegd.
- **Grootte**. De grootte van het item in MB.

Beschikbare **Acties** zijn afhankelijk van het gegevenstype en kunnen **Deactiveren**, **Bijwerken**, **Hernoemen**, **Exporteren** en **Verwijderen** omvatten.

</TabItem>

<TabItem value="ios" label="iOS">

![Acties iOS](@site/static/img/personal/maps/local_actions_ios.png)

Beschikbare **Acties** zijn afhankelijk van het gegevenstype:

- Voor **offline items** is alleen de optie **Verwijderen** beschikbaar.
- Voor **online kaarten** kunnen acties **Cache wissen**, **Bewerken** en **Verwijderen** omvatten.

</TabItem>

</Tabs>

<!--
The Local tab provides an overview of the storage usage for all OsmAnd data on your device. Data is divided into three color-coded sections for clarity, with items sorted by size from largest to smallest. Each section displays only items with downloaded data:

- ***Resources*** (*blue*).  
    Includes maps ([Standard](../map/vector-maps.md), &nbsp;[Nautical](../plugins/nautical-charts.md), &nbsp;[Topography](../plugins/topography.md), &nbsp;[Weather](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) and [Travel guides](../plan-route/travel-guides.md), &nbsp;[Live updates](../personal/maps-resources.md#live-updates), &nbsp;**Road only**,  &nbsp;[Map sources](../map/raster-maps.md), &nbsp;[Rendering styles](../map/vector-maps.md#default-map-styles), &nbsp;**Map fonts, &nbsp;Voice prompts (recorded and TTS), &nbsp;Cache**.  

- ***My Places*** (*yellow*).  
    Includes [Favorites](../personal/favorites.md), &nbsp;[Tracks](../personal/tracks/manage-tracks.md), &nbsp;[OSM Notes](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[OSM Edits](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[A/V Notes](../plugins/audio-video-notes.md), &nbsp;[Map markers](../personal/markers.md), &nbsp;[History](../personal/global-settings.md#history), &nbsp;*Itinerary*.  

- ***Settings*** (*green*).  
    Includes [Profiles](../personal/profiles.md), &nbsp;[Colors](../personal/color-palette-schemes.md) and **Other** app configurations.


#### Viewing Data {#viewing-data}

![Local category overview Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Local category options Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Tap any item in the **Local** tab to open its detailed list. At the top of this list, a visual panel displays how much space the selected data type occupies relative to the total OsmAnd storage.

***Available actions:***

- **Search**. Find specific data by name within the selected folder.
- **Three-dot menu**:  
    ***Select***. Choose multiple items for actions like *Delete*, *Deactivate*, or *Activate*.  
    ***Import***. Access the device's storage to import files.
- [Sorting option](#sorting-options). Sort items by name, country, date, or size (availability depends on the data type).


#### Menu for Items from the List {#menu-for-items-from-the-list}

![Local category item actions 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Local category item actions](@site/static/img/personal/maps/local_menu_items_2_andr.png)  

Each item in the list offers a *three-dot menu* with options:

- **Info**. View detailed information on the *[data item](#local-data-item-overview)*.
- **Export**. Save data to a file via *Settings → Export to File*.

***Additional options for maps:***

- **Deactivate**. Disable vector maps without deleting them. They remain stored but are not used for navigation, search, or routing. Reduces the load on the device and speeds up OsmAnd.
- **Update**. Download the latest version of the map.
- **Rename**. Customize the map’s name for better identification.
- **Remove**. Delete the map from your device.
- **Edit** (for Online Maps). Modify the online map configuration.

#### Map source items menu {#map-source-items-menu}

![Map Source items menu](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Each item in the [Map source](../map/raster-maps.md) list provides settings for managing online raster map stored on your device. Open the *three-dot menu* to access the available actions:

- [Info](#local-data-item-overview). Displays general details about the selected map source, including format and last update date.  
- **Calculate Size**. Estimates the storage occupied by the cached tiles of this map source. If the cache exceeds *50MB*, the size can be displayed as *≥50MB* instead of an exact number.
- **Clear All Tiles**. Deletes all cached tiles for the selected map source, freeing up storage while keeping the map source available for future use.  
- **Export**. Saves the selected map source configuration for backup or sharing.  
- **Remove**. Deletes the selected map source. This action does not affect downloaded offline maps but clears the associated cache.


#### Local Data Item Overview {#local-data-item-overview}

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)  

When viewing a local data item, you see:

- **Type**. The data type from the **Local** list.
- **Created**. The date the item was added.
- **Size**. The item’s size is in MB.

Available **Actions** depend on the data type and may include **Deactivate**, **Update**, **Rename**, **Export**, and **Delete**.

#### Sorting Options {#sorting-options}

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

Use sorting options to organize map data:

- **Name (A - Z / Z - A)**. Locate items alphabetically.
- **Country name (A - Z / Z - A)**. Organize maps geographically.
- **Newest date first** / **Oldest date first**. See updates or older versions.
- **Large size first** / **Small size first**. Identify large maps to free storage space.

-->

## Updatemenu {#updates-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Kaartenmenu Kaarten bijwerken Android](@site/static/img/personal/maps/maps_update_andr.png)

Het tabblad **Updates** stelt u in staat om OsmAnd-kaarten en -bronnen te vernieuwen. Standaard- en 'alleen wegen'-kaarten worden één keer per maand uitgebracht, meestal tussen de 2e en 5e dag, en bevatten OpenStreetMap-gegevens tot de laatste dag van de voorgaande maand (bijvoorbeeld, de oktober-release bevat gegevens tot 30 september). Andere gegevens zoals Wikipedia, terrein- of nautische kaarten kunnen verschillende, niet-regelmatige updateschema's volgen. Weersvoorspellingen hebben hun eigen regelmatige updatecyclus. Voor details, zie [Voorspelling downloaden](../plugins/weather.md#download-forecast).

Gebruik de knop *Alles bijwerken* om alle kaarten tegelijk bij te werken, of werk individuele kaarten naar behoefte bij. Voor uurlijkse updates, controleer de status van uw [Live Updates](#live-updates)-abonnement. Indien ingeschakeld, verschijnt de sectie **Live Updates** bovenaan het tabblad, onder de indicator voor het apparaatgeheugen.

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Kaartenmenu Kaarten bijwerken iOS](@site/static/img/personal/maps/maps_update_ios.png) ![Weersvoorspelling Kaarten bijwerken iOS](@site/static/img/personal/maps/maps_update_2_ios.png)

Het tabblad **Updates** stelt u in staat om OsmAnd-kaarten en -bronnen te vernieuwen. Standaard- en 'alleen wegen'-kaarten worden één keer per maand uitgebracht, meestal tussen de 2e en 5e dag, en bevatten OpenStreetMap-gegevens tot de laatste dag van de voorgaande maand (bijvoorbeeld, de oktober-release bevat gegevens tot 30 september). Andere gegevens zoals Wikipedia, terrein- of nautische kaarten kunnen verschillende, niet-regelmatige updateschema's volgen.

Gebruik de knop *Alles bijwerken* om alle kaarten tegelijk bij te werken, of werk individuele kaarten naar behoefte bij. Voor uurlijkse updates, controleer de status van uw [Live Updates](#live-updates)-abonnement. Indien ingeschakeld, verschijnt de sectie **Live Updates** bovenaan het tabblad, onder de indicator voor het apparaatgeheugen.

Het tabblad **Updates** bevat ook een sectie Weersvoorspelling. Deze is ontworpen om uw offline voorspellingen voor geselecteerde landen te beheren:

- Als er nog geen voorspelling is gedownload, ziet u een prompt om landen te selecteren. Voorspellingsgegevens zijn beschikbaar voor maximaal 7 dagen.
- Zodra een voorspelling is gedownload, toont het scherm ***Offline voorspelling*** de lijst met landen met statusinformatie, inclusief de laatste updatetijd, geldigheidsperiode en totale gegevensgrootte.
- Door op een land te tikken, wordt gedetailleerde informatie geopend, zoals de laatste updatetijd, volgende update, gegevensgrootte en nauwkeurigheid. Opties zijn onder meer ***Nu bijwerken***, het in- of uitschakelen van ***Automatisch bijwerken*** (Weersvoorspellingen hebben hun eigen regelmatige updatecyclus. Voor details, zie [Voorspelling downloaden](../plugins/weather.md#download-forecast).) en ***Voorspelling verwijderen***.


</TabItem>

</Tabs>

## Live Updates {#live-updates}

:::tip Aankoop
Live updates is een betaalde functie.
:::
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*

![Kaartenmenu OsmAnd live Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Kaartenmenu OsmAnd live bewerken Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*

![Kaartenmenu OsmAnd live iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Kaartenmenu OsmAnd live bewerken iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>

**Live Updates** biedt frequente, incrementele kaartupdates via een [abonnement](../purchases/index.md) of is gratis voor [OSM-bijdragers](#free-for-osm-mappers). Updates vinden elke 15 minuten plaats op de OsmAnd-servers en zijn per uur, dagelijks of wekelijks te downloaden. Deze updates verbruiken minimale opslagruimte — ongeveer 2-4% van de volledige kaartgrootte per maand.

<!--
Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.
-->

Belangrijkste kenmerken:

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> Live Updates**. Beheer via een schakelaar in de instellingen.
- **&#8230; &#124;** knop (*Android*) / **&#62;** knop (*iOS*). Open de instellingen voor *Live updates*.
- **Schakelaar**(*Android*) / **&#43;** knop (*iOS*). Voeg kaarten toe voor *live updates*.
- **<Translate android="true" ids="update_frequency"/>**. Selecteer de updatefrequentie van de kaart (per uur, dagelijks of wekelijks).
- **<Translate android="true" ids="update_now"/>**. Start de *live updates* voor de kaart.
- **<Translate android="true" ids="updates_size"/>**(*Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>**(*iOS*). Grootte van *live updates*.
- **Prullenbakknop**(*Android*). Verwijder alle ontvangen *live updates* voor de huidige kaart.
- **<Translate android="true" ids="only_download_over_wifi"/>**. Beheer het downloaden van *live updates* via een Wi-Fi-verbinding.


### Tijdstempels van updates {#update-timestamps}

- **Laatste OSM-update.**
    Geeft de laatst verwerkte OpenStreetMap-wijzigingen aan.
- **Regio bijgewerkt.**
    Toont wanneer de updates van de specifieke regio voor het laatst zijn verwerkt.
- **Volgende update.**
    Toont de geplande tijd voor de volgende updatecontrole.


### Beperkingen van Live Updates {#limitations-of-live-updates}

Adreswijzigingen worden alleen ondersteund via maandelijkse updates.
Bijgewerkte wegen missen hoogtegegevens, wat invloed heeft op hellingsgrafieken.
Verwijderde of gewijzigde routeverwijzingen kunnen nog steeds onjuist worden weergegeven.


### Gratis voor OSM-mappers {#free-for-osm-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live voor mappers](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live voor mappers](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

Bijdragers aan [OpenStreetMap](https://openstreetmap.org/) komen in aanmerking voor gratis onbeperkte kaartdownloads en live updates. Om in aanmerking te komen:
Schakel de [OpenStreetMap Bewerken plug-in](../plugins/osm-editing.md) in.
[Log in](../plugins/osm-editing.md#settings) met uw OSM-gebruikersnaam.
Houd ten minste [**30 bewerkingen**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) aan in de laatste twee maanden.

## Gerelateerde artikelen {#related-articles}

- [Profielen (Instellingen)](./profiles.md)
- [Importeren / Exporteren](../personal/import-export.md)

### Veelvoorkomende problemen en oplossingen {#common-issues-and-solutions}

- Stemnavigatie. [(check)](../troubleshooting/navigation.md#voice-navigation)
- Hoe zoekgeschiedenis te verwijderen. [(check)](../troubleshooting/general.md#how-to-delete-search-history)
- Voor aanvullende probleemoplossing, bezoek: [Kaarten & Gegevens](../troubleshooting/maps-data.md)