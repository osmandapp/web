---
source-hash: 7e75b5e052216e2fd2c8684ffc936212758b2d1c0efb985a5c0f8ef838440750
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

Plugins breiden de functionaliteit van OsmAnd aanzienlijk uit. Elk is ontworpen om een specifieke taak of gebruikssituatie aan te pakken, zoals het opnemen van een reis, toegang krijgen tot Wikipedia-artikelen offline, het visualiseren van terreingegevens, of het bieden van een weergave op straatniveau.

Plugins kunnen intern zijn, geactiveerd in de OsmAnd-applicatie, of extern, afzonderlijk geïnstalleerde programma's. Plugins van derden werken via de OsmAnd API en hebben toegang tot OsmAnd-gegevens.


## Plugin configureren {#configure-plugin}

Om toegang te krijgen tot de functionaliteit van een plugin, moet deze eerst worden [ingeschakeld](#enable--disable), en sommige plugins vereisen een [aankoop](#purchase) voor gebruik. Vervolgens moet in sommige gevallen een specifieke kaartlaag worden geactiveerd, of moet een gebruikersprofiel worden [geconfigureerd](#plugin-settings).


### Inschakelen / Uitschakelen {#enable--disable}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Inschakelen*

![Plugins inschakelen Android](@site/static/img/settings/plugins_enable_android.png) ![Plugin voorbeeld Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;*

![Plugins inschakelen iOS](@site/static/img/settings/plugins_enable_ios.png) ![Plugin voorbeeld iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

### Aankoop {#purchase}

De meeste plugins zijn gratis beschikbaar, alleen de plugins in de onderstaande lijst vereisen de aankoop van een [OsmAnd+ of OsmAnd Pro](../purchases/index.md) licentie om te gebruiken:  

- [Topografie](../plugins/topography.md)
- [3D Reliëf](../plugins/topography.md#3d-relief) (functie van de Topografie-plugin)
- [Wikipedia](../plugins/wikipedia.md)
- [Nautische kaartweergave](../plugins/nautical-charts.md)
- [Weer](../plugins/weather.md)

Gedetailleerde informatie over de aankoop van de applicatie is te vinden in de sectie [Aankoop](../purchases/).

### Plugin-functies {#plugin-features}

OsmAnd-plugins kunnen deze functiegroepen uitbreiden: **Lagen**, **Widgets**, **Contextmenu-acties**, **Lade-acties**, **Kaartstijl**, **Kaartbron**, **Profiel**.

🤖 *- alleen voor Android-versie van OsmAnd.*

| Plugin naam | Functies |
|:------------|:-------|
| [Wikipedia](#wikipedia) | [Kaartlaag](../plugins/wikipedia.md#download-wikipedia-packages), [Contextmenu](../plugins/wikipedia.md#wikipedia-languages) |
| [Online kaarten](#online-maps) |[Kaartlaag](../plugins/online-map.md#configure-map-source) |
| [Ritregistratie](#trip-recording) | [Widget](../plugins/trip-recording.md#widgets), [Profiel](../plugins/trip-recording.md#profile-settings) |
| [Topografie](#topography) | [Kaartlaag](../plugins/topography.md#hillshade-slope-and-altitude-layers) |
| [3D Reliëf](#topography) 🤖  | [Kaartlaag](../plugins/topography.md#3d-relief) |
| [Weer](../plugins/weather.md) | [Kaartlaag](../plugins/weather.md#display-weather-on-the-map), [Widget](../plugins/weather#weather-widgets), [Scherm](../plugins/weather.md#configure-screen) |
| [Nautische kaartweergave](#nautical-map-view) | [Kaartstijl](../plugins/nautical-charts.md#nautical-map-style), [Profiel](../plugins/nautical-charts.md#nautical-options)  |
| [Ski-kaartweergave](#ski-map-view) | [Kaartstijl](../plugins/ski-maps.md#set-winter-style), [Profiel](../plugins/ski-maps.md#skiing-profile) |
|[Audio/video-notities](#audiovideo-notes) 🤖  | [Kaartlaag](../plugins/audio-video-notes.md#show-all-on-the-map), [Contextmenu](../plugins/audio-video-notes.md#create), [Widget](../plugins/audio-video-notes.md#recording-widget) |
|[OpenStreetMap-bewerking](#openstreetmap-editing)| [Kaartlaag](../plugins/osm-editing.md#how-to-use) |
|[Parkeerpositie](#parking-position) | [Contextmenu](../plugins/parking.md#set-a-point), [Widget](../plugins/parking.md#parking-widget) |
|[Mapillary](#mapillary) | [Kaartlaag](../plugins/mapillary.md#map-layer), [Contextmenu](../plugins/mapillary.md#map-context-menu) , [Widget](../plugins/mapillary.md#mapillary-widget)|
|[Externe sensoren](#external-sensors) 🤖  | [Widget](../plugins/external-sensors.md#widgets) |
|[Toegankelijkheid](#accessibility) 🤖  | [Aangepaste instellingen](../plugins/accessibility.md#plugin-settings) |
| [OsmAnd-ontwikkeling](#osmand-development) | [Aangepaste instellingen](../plugins/development.md#plugin-settings) |
| [OsmAnd Tracker](#osmand-tracker) 🤖  | [Kaartlaag](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map), [Widget](../plugins/osmand-tracker.md#osmand-tracker-widget), [Contextmenu](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map) |
| [AIS-scheepstracker](#ais-vessel-tracker) 🤖  |  [Aangepaste instellingen](../plugins/ais-tracker.md#plugin-settings) |


### Plugin-instellingen {#plugin-settings}

:::caution OPMERKING
Alleen de OsmAnd-ontwikkelingsplugin en de OSM-bewerkingsplugin wijzigen instellingen voor alle profielen. De overige plugins worden voor elk profiel afzonderlijk geconfigureerd.  
:::

De meeste plugins bieden specifieke profiel- of globale instellingen, die toegankelijk zijn via:

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

🤖 *- alleen voor Android-versie van OsmAnd.*

| Plugin naam | Instellingen |
|:------------|:-------|
| [Ritregistratie](#trip-recording) | Configureer de [bedrijfsmodi](../plugins/trip-recording.md#recording-parameters) van de ritregistratie |
| [Weer](#weather) | Configureer maateenheden voor het weergeven van weersgebeurtenissen |
|[Audio/video-notities](#audiovideo-notes) 🤖  | Selecteer [videoformaat, hoe lang opslaan, etc.](../plugins/audio-video-notes.md#plugin-settings) |
|[OpenStreetMap-bewerking](#openstreetmap-editing)| Geef gebruikers[login](../plugins/osm-editing.md#plugin-settings) op  |
|  [Externe sensoren](#external-sensors) 🤖  | Maak verbinding met extern apparaat [Instellingen](../plugins/external-sensors.md#settings) |
|  [Toegankelijkheid](#accessibility) 🤖  | [Instellingen](../plugins/accessibility.md#plugin-settings) stellen u in staat om toegankelijkheids[Android-functies](https://www.android.com/accessibility/) binnen OsmAnd te gebruiken. |
| [OsmAnd-ontwikkeling](#osmand-development) | [Plugin-instellingen](../plugins/development.md#plugin-settings) stellen u in staat om speciale functies voor ontwikkelaars of ervaren gebruikers in te schakelen |
|  [OsmAnd Tracker](#osmand-tracker) 🤖  | Alle instellingen zijn configureerbaar in een aparte app |
| [AIS-scheepstracker](#ais-vessel-tracker) | [Plugin-instellingen](../plugins/ais-tracker.md#plugin-settings) stellen u in staat om speciale instellingen in te schakelen |

### Plugin-acties {#plugin-actions}

**<Translate android="true" ids="reset_plugin_to_default"/>** - *met deze optie kunnen plugin-instellingen worden teruggezet naar de standaardwaarden*.  
**<Translate android="true" ids="copy_from_other_profile"/>** - *plugin-instellingen kunnen worden gekopieerd van een ander profiel*.


## Pluginlijst {#plugins-list}


### [Wikipedia](./wikipedia.md) {#wikipedia}

Wikipedia tijdens uw reis helpt u meer te weten te komen over de plaatsen die u bezoekt. Het is offline beschikbaar en toont Wikipedia-artikelen met betrekking tot de bezienswaardigheden direct op de kaart.

### [Online kaarten](./online-map.md) {#online-maps}

OsmAnd Online kaarten zijn een uitgebreide aanvulling op de OpenStreetMap-database die al in de applicatie aanwezig is. Met deze plugin kunt u lagen aan uw kaart toevoegen met informatie uit verschillende bronnen.  

### [Ritregistratie](./trip-recording.md) {#trip-recording}

Om een verhaal te vertellen over waar u bent geweest, kunnen GPS-gegevens, zoals breedtegraad en lengtegraad van uw locatie, worden opgenomen en opgeslagen in een bestand, en vervolgens opnieuw worden gebruikt, verbeterd, aangevuld met waypoints, gebruikt voor navigatie, gedeeld met vrienden, enz.  

### [Topografie](./topography.md) {#topography}

Topografische informatie, zoals contourlijnen, heuvelschaduw, helling, 3D-reliëf, helpt om een visuele beoordeling te maken van het landschap door hoogte, reliëf, extremen, steilheid, punten van gelijke hoogte, enz. te zien.  

### [Nautische kaartweergave](./nautical-charts.md) {#nautical-map-view}

Nautische kaartweergave biedt een gedetailleerde grafische weergave van oceanen, zeeën, kustgebieden en rivieren om u te helpen navigeren op het water, populaire verkeersroutes, obstakels in de waterweg, havens, ankerplaatsen en andere essentiële referentiepunten te zien.

### [Ski-kaartweergave](./ski-maps.md) {#ski-map-view}

Ski-kaartweergave toont winterkleuren en pistes, zowel downhill als langlauf, evenals kabelbanen, stoeltjesliften, faciliteiten en diensten in de buurt, wat handig is voor het navigeren naar bestemmingen zoals recreatiegebieden, skigebieden en terreinparken.

### [Audio/video-notities](./audio-video-notes.md) {#audiovideo-notes}

Maak audio/video-notities voor toekomstige referentie, bijvoorbeeld om een gebeurtenis, scène of interactie te onthouden. Gemaakte audio/video-notities zijn beschikbaar via *Mijn plaatsen* en op de kaart als een individuele laag van door de gebruiker gemaakte verhalen en gedachten gekoppeld aan een geolocatie. Alleen voor Android.  

### [Parkeerpositie](./parking.md) {#parking-position}

Stel een punt in op de kaart waar uw auto op straat is achtergelaten en meld uw agenda wanneer de parkeertijd afloopt. Dit maakt het gemakkelijker voor u om de tijd en locatie van uw auto bij te houden.

### [OpenStreetMap-bewerking](./osm-editing.md) {#openstreetmap-editing}

De OpenStreetMap-bewerkingsplugin stelt u in staat om bij te dragen aan OpenStreetMap, een wereldwijde gemeenschap die een uitgebreide kaart van de wereld creëert en openbaar beschikbare, actuele, open-source gegevens levert.  

### [Mapillary](./mapillary.md) {#mapillary}

Bekijk straatbeelden van uw routes of interessante plaatsen, geleverd door [Mapillary](https://www.mapillary.com/) (een internetverbinding is vereist).  

### [Toegankelijkheid](./accessibility.md) {#accessibility}

De toegankelijkheidsplugin maakt de toegankelijkheidsfuncties van het apparaat direct beschikbaar in OsmAnd. Alleen voor Android.  

### [Externe sensoren](./external-sensors.md) {#external-sensors}

Sluit externe sensoren aan om hun gegevens in OsmAnd weer te geven en de informatie op te slaan in trackopnames.  

### [Voertuiggegevens](./vehicle-metrics.md) {#vehicle-metrics}

Sluit een OBD-II-scanner aan om voertuiggegevens in OsmAnd weer te geven en de informatie op te slaan in trackopnames.  

### [Weer](./weather.md) {#weather}

Toont de uurlijkse voorspelling voor de huidige dag en voor 7 dagen vooruit.  

### [OsmAnd-ontwikkeling](./development.md) {#osmand-development}

De OsmAnd-ontwikkelingsplugin richt zich op ontwikkelaars en ervaren gebruikers. Het stelt u in staat om navigatieroutes te simuleren, de schermweergaveprestaties te controleren, enz.  

### [OsmAnd Tracker](./osmand-tracker.md) {#osmand-tracker}

OsmAnd Tracker helpt u te zien waar uw contacten zich op de kaart in OsmAnd bevinden. Alleen voor Android.  

### [AIS-scheepstracker](./ais-tracker.md) {#ais-vessel-tracker}

Toon AIS-posities en informatie over omliggende schepen. De AIS-gegevens worden via het netwerk ontvangen van een externe AIS-ontvanger.

## [Een aangepaste plugin maken](./custom.md) {#create-a-custom-plugin}

U kunt uw eigen plugin maken door het artikel *Aangepast pakket* te volgen.


_______

> *Laatst bijgewerkt: maart 2025*