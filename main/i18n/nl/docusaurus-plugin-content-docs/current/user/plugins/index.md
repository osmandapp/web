---
source-hash: cf566fbf4725e593ede70401c18b9dd79befb8e6c4e2a8f1fb000487ef2f0277
sidebar_position: 18
title:  Plugins
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Overzicht {#overview}

Plugins breiden de functionaliteit van OsmAnd aanzienlijk uit. Elk is ontworpen voor een specifieke taak of gebruikssituatie, zoals het opnemen van een rit, het offline raadplegen van Wikipedia-artikelen, het visualiseren van terreingegevens of het bieden van een straatbeeld.

Plugins kunnen intern zijn, geactiveerd in de OsmAnd-applicatie, of externe, afzonderlijk geïnstalleerde programma's. Plugins van derden werken via de OsmAnd API en hebben toegang tot OsmAnd-gegevens.


## Plugin configureren {#configure-plugin}

Om toegang te krijgen tot de functionaliteit van een plugin, moet deze eerst worden [ingeschakeld](#enable--disable), en voor sommige plugins is een [aankoop](#purchase) vereist voor gebruik. Vervolgens moet in sommige gevallen een specifieke kaartlaag worden geactiveerd, of moet een gebruikersprofiel worden [geconfigureerd](#plugin-settings).


### Inschakelen / Uitschakelen {#enable--disable}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Inschakelen*

![Plugins inschakelen Android](@site/static/img/settings/plugins_enable_android.png) ![Plugin-voorbeeld Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;*

![Plugins inschakelen iOS](@site/static/img/settings/plugins_enable_ios.png) ![Plugin-voorbeeld iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

### Aankoop {#purchase}

De meeste plugins zijn gratis beschikbaar, alleen de plugins in de onderstaande lijst vereisen de aankoop van een [OsmAnd+ of OsmAnd Pro](../purchases/index.md) licentie om te gebruiken:  

- [Topografie](../plugins/topography.md)
- [3D-reliëf](../plugins/topography.md#3d-relief) (functie van de Topografie-plugin)
- [Wikipedia](../plugins/wikipedia.md)
- [Nautische kaartweergave](../plugins/nautical-charts.md)
- [Weer](../plugins/weather.md)

Gedetailleerde informatie over de aankoop van de applicatie is te vinden in de sectie [Aankopen](../purchases/).

### Plugin-functies {#plugin-features}

OsmAnd Plugins kunnen deze functiegroepen uitbreiden: **Lagen**, **Widgets**, **Acties in contextmenu**, **Acties in lade**, **Kaartstijl**, **Kaartbron**, **Profiel**.

🤖 *- alleen voor de Android-versie van OsmAnd.*

| Pluginnaam | Functies |
|:------------|:-------|
| [Wikipedia](#wikipedia) | [Kaartlaag](../plugins/wikipedia.md#download-wikipedia-packages), [Contextmenu](../plugins/wikipedia.md#wikipedia-settings) |
| [Online kaarten](#online-maps) |[Kaartlaag](../plugins/online-map.md#how-to-prepare-raster-maps) |
| [Ritregistratie](#trip-recording) | [Widget](../plugins/trip-recording.md#widgets), [Profiel](../plugins/trip-recording.md#recording-settings) |
| [Topografie](#topography) | [Kaartlaag](../plugins/topography.md#hillshade-slope-and-altitude-layers) |
| [3D-reliëf](#topography) 🤖  | [Kaartlaag](../plugins/topography.md#3d-relief) |
| [Weer](../plugins/weather.md) | [Kaartlaag](../plugins/weather.md#display-weather-on-the-map), [Widget](../plugins/weather#weather-widgets), [Scherm](../plugins/weather.md#weather-forecast-screen) |
| [Nautische kaartweergave](#nautical-map-view) | [Kaartstijl](../plugins/nautical-charts.md#nautical-map-style), [Profiel](../plugins/nautical-charts.md#nautical-profile)  |
| [Skikaartweergave](#ski-map-view) | [Kaartstijl](../plugins/ski-maps.md#set-winter-and-ski-map-style), [Profiel](../plugins/ski-maps.md#skiing-profile) |
|[Audio-/videonotities](#audiovideo-notes) 🤖  | [Kaartlaag](../plugins/audio-video-notes.md#show-all-on-the-map), [Contextmenu](../plugins/audio-video-notes.md#create-a-single-note), [Widget](../plugins/audio-video-notes.md#recording-widget) |
|[OpenStreetMap bewerken](#openstreetmap-editing)| [Kaartlaag](../plugins/osm-editing.md#authorization) |
|[Parkeerpositie](#parking-position) | [Contextmenu](../plugins/parking.md#set-a-spot), [Widget](../plugins/parking.md#parking-widget) |
|[Mapillary](#mapillary) | [Kaartlaag](../plugins/mapillary.md#map-layer), [Contextmenu](../plugins/mapillary.md#map-context-menu) , [Widget](../plugins/mapillary.md#mapillary-widget)|
|[Externe sensoren](#external-sensors) 🤖  | [Widget](../plugins/external-sensors.md#widgets) |
|[Toegankelijkheid](#accessibility) 🤖  | [Aangepaste instellingen](../plugins/accessibility.md#plugin-settings) |
| [OsmAnd ontwikkeling](#osmand-development) | [Aangepaste instellingen](../plugins/development.md#plugin-settings) |
| [OsmAnd Tracker](#osmand-tracker) 🤖  | [Kaartlaag](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map), [Widget](../plugins/osmand-tracker.md#tracker-widget), [Contextmenu](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map) |
| [AIS vaartuigtracker](#ais-vessel-tracker) 🤖  |  [Aangepaste instellingen](../plugins/ais-tracker.md#plugin-settings) |


### Plugin-instellingen {#plugin-settings}

:::caution OPMERKING
Alleen de OsmAnd development plugin en de OSM editing plugin wijzigen de instellingen voor alle profielen. De overige plugins worden voor elk profiel afzonderlijk geconfigureerd.  
:::

De meeste plugins bieden specifieke profiel- of algemene instellingen, die toegankelijk zijn via:

- *Hoofdmenu → Plugins → Pluginnaam → Instellingen (&#x2699 voor iOS)* of  
- *Hoofdmenu → Instellingen → Profiel → [Plugin-instellingen](../personal/profiles.md#plugin-settings)*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Instellingen plugin Android 1](@site/static/img/plugins/development/access_plugin_settings_andr_2.png) ![Instellingen plugin Android 2](@site/static/img/plugins/development/access_plugin_settings_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Instellingen plugin iOS 1](@site/static/img/plugins/development/access_plugin_settings_ios_2.png) ![Instellingen plugin iOS 2](@site/static/img/plugins/development/access_plugin_settings_ios_1.png)

</TabItem>

</Tabs>

De volgende plugins bieden hun eigen instellingen:

🤖 *- alleen voor de Android-versie van OsmAnd.*

| Pluginnaam | Instellingen |
|:------------|:-------|
| [Ritregistratie](#trip-recording) | Configureer de ritregistratie [bedrijfsmodi](../plugins/trip-recording.md#required-setup-parameters) |
| [Weer](#weather) | Configureer meeteenheden voor het weergeven van weersgebeurtenissen |
|[Audio-/videonotities](#audiovideo-notes) 🤖  | Selecteer [videoformaat, hoe lang op te slaan, etc.](../plugins/audio-video-notes.md#plugin-settings) |
|[OpenStreetMap bewerken](#openstreetmap-editing)| Specificeer gebruikers[login](../plugins/osm-editing.md#settings)  |
|  [Externe sensoren](#external-sensors) 🤖  | Verbind met extern apparaat [Instellingen](../plugins/external-sensors.md#required-setup-parameters) |
|  [Toegankelijkheid](#accessibility) 🤖  | [Instellingen](../plugins/accessibility.md#plugin-settings) stellen u in staat om Toegankelijkheid [Android-functies](https://www.android.com/accessibility/) binnen OsmAnd te gebruiken. |
| [OsmAnd ontwikkeling](#osmand-development) | [Plugin-instellingen](../plugins/development.md#plugin-settings) stellen u in staat om speciale functies voor ontwikkelaars of ervaren gebruikers in te schakelen |
|  [OsmAnd Tracker](#osmand-tracker) 🤖  | Alle instellingen zijn configureerbaar in een aparte app |
| [AIS vaartuigtracker](#ais-vessel-tracker) | [Plugin-instellingen](../plugins/ais-tracker.md#plugin-settings) stellen u in staat om speciale instellingen in te schakelen |

### Plugin-acties {#plugin-actions}

**<Translate android="true" ids="reset_plugin_to_default"/>** - *met deze optie kunnen de plugin-instellingen worden teruggezet naar de standaardwaarden*.  
**<Translate android="true" ids="copy_from_other_profile"/>** - *plugin-instellingen kunnen worden gekopieerd van een ander profiel*.


## Lijst met plugins {#plugins-list}


### [Wikipedia](./wikipedia.md) {#wikipedia}

Met Wikipedia tijdens uw reis leert u meer over de plaatsen die u bezoekt. Het is offline beschikbaar en toont Wikipedia-artikelen met betrekking tot de bezienswaardigheden direct op de kaart.

### [Online kaarten](./online-map.md) {#online-maps}

OsmAnd Online kaarten zijn een uitgebreide aanvulling op de OpenStreetMap-database die al in de applicatie aanwezig is. Met deze plugin kunt u lagen aan uw kaart toevoegen met informatie uit verschillende bronnen.  

### [Ritregistratie](./trip-recording.md) {#trip-recording}

Om een verhaal te vertellen over waar u bent geweest, kunnen GPS-gegevens, zoals de breedte- en lengtegraad van uw locatie, worden opgenomen en opgeslagen in een bestand, en vervolgens opnieuw worden gebruikt, verbeterd, aangevuld met waypoints, gebruikt voor navigatie, gedeeld met vrienden, enz.  

### [Topografie](./topography.md) {#topography}

Topografische informatie, zoals contourlijnen, schaduwreliëf, helling, 3D-reliëf, helpt bij het visueel beoordelen van het landschap door het zien van hoogte, reliëf, extremen, steilheid, punten van gelijke hoogte, enz.  

### [Nautische kaartweergave](./nautical-charts.md) {#nautical-map-view}

Nautische kaartweergave biedt een gedetailleerde grafische weergave van oceanen, zeeën, kustgebieden en rivieren om u te helpen navigeren op het water, populaire vaarroutes, obstakels in de waterweg, havens, ankerplaatsen en andere essentiële referenties te zien.

### [Skikaartweergave](./ski-maps.md) {#ski-map-view}

Skikaartweergave toont winterkleuren en pistes voor afdalingen of langlaufen, evenals kabelbanen, stoeltjesliften, faciliteiten en diensten in de buurt, wat handig is voor het navigeren naar bestemmingen zoals recreatiegebieden, skigebieden en terreinparken.

### [Audio-/videonotities](./audio-video-notes.md) {#audiovideo-notes}

Maak audio-/videonotities voor toekomstig gebruik, bijvoorbeeld om een gebeurtenis, scène of interactie te onthouden. Gemaakte audio-/videonotities zijn beschikbaar via *Mijn plaatsen* en op de kaart als een individuele laag van door de gebruiker gemaakte verhalen en gedachten die aan een geolocatie zijn gekoppeld. Alleen voor Android.  

### [Parkeerpositie](./parking.md) {#parking-position}

Stel een punt in op de kaart waar uw auto op straat is achtergelaten en laat uw agenda u informeren wanneer de parkeertijd afloopt. Dit maakt het voor u gemakkelijker om de tijd en locatie van uw auto bij te houden.

### [OpenStreetMap bewerken](./osm-editing.md) {#openstreetmap-editing}

De OpenStreetMap bewerkingsplugin stelt u in staat bij te dragen aan OpenStreetMap, een wereldwijde gemeenschap die een uitgebreide kaart van de wereld creëert en openbaar beschikbare, actuele, open-source gegevens levert.  

### [Mapillary](./mapillary.md) {#mapillary}

Bekijk straatbeelden van uw routes of interessante plaatsen, geleverd door [Mapillary](https://www.mapillary.com/) (een internetverbinding is vereist).  

### [Toegankelijkheid](./accessibility.md) {#accessibility}

De Toegankelijkheidsplugin maakt de toegankelijkheidsfuncties van het apparaat direct beschikbaar in OsmAnd. Alleen voor Android.  

### [Externe sensoren](./external-sensors.md) {#external-sensors}

Verbind externe sensoren om hun gegevens in OsmAnd weer te geven en de informatie op te slaan in ritregistraties.  

### [Voertuigstatistieken](./vehicle-metrics.md) {#vehicle-metrics}

Verbind een OBD-II-scanner om voertuiggegevens in OsmAnd weer te geven en de informatie op te slaan in ritregistraties.  

### [Weer](./weather.md) {#weather}

Toont de weersvoorspelling per uur voor de huidige dag en voor 7 dagen vooruit.  

### [OsmAnd ontwikkeling](./development.md) {#osmand-development}

De OsmAnd development plugin is gericht op ontwikkelaars en ervaren gebruikers. Het stelt u in staat om navigatieroutes te simuleren, de prestaties van schermweergave te controleren, enz.  

### [OsmAnd Tracker](./osmand-tracker.md) {#osmand-tracker}

OsmAnd Tracker helpt u te zien waar uw contacten zich op de kaart in OsmAnd bevinden. Alleen voor Android.  

### [AIS vaartuigtracker](./ais-tracker.md) {#ais-vessel-tracker}

Toon AIS-posities en informatie over omliggende vaartuigen. De AIS-gegevens worden via het netwerk ontvangen van een externe AIS-ontvanger.

## [Een aangepaste plugin maken](./custom.md) {#create-a-custom-plugin}

U kunt uw eigen plugin maken door het artikel *Aangepast pakket* te volgen.


_______