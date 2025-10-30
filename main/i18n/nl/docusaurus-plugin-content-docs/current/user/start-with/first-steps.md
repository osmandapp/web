---
source-hash: 22db732c5f66852486fa2129937bfba2c697d211dccbcef555621bf176facb12
sidebar_position: 1
title:  Eerste Stappen
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Overzicht {#overview}

Welkom bij OsmAnd (OpenStreetMap Automated Navigation Directions)!  

Ontdek hoe u kaarten kunt downloaden, de applicatie kunt configureren, de kaart kunt gebruiken en een route kunt uitstippelen, hoe u de navigatie start en hoe u nuttige plaatsen zoekt. Maak kennis met de belangrijkste punten van het privacybeleid van OsmAnd en de vereiste toestemmingen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline navigatie Android](@site/static/img/settings/google_play_screen1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Offline navigatie iOS](@site/static/img/settings/itunes_screen_ios.png)

</TabItem>

</Tabs>


## OsmAnd installeren {#install-osmand}

OsmAnd is een mobiele applicatie voor kaarten en navigatie, beschikbaar voor **Android** en **iOS**. U kunt het downloaden via de meest populaire app-winkels.

**Android-winkels**: [Google play store](https://play.google.com/store/apps/details?id=net.osmand) en [Huawei AppGallery](https://appgallery.huawei.com/#/app/C101486545).

<AndroidStore/>

**iOS**: [App store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257).

<AppleStore/>

[Lees meer](../purchases/index.md) over OsmAnd-versies en Aankopen.  


## Welkom bij OsmAnd {#welcome-to-osmand}

Ons doel is om een volledig functionele, op kaarten gerichte applicatie te creëren die voor verschillende doeleinden offline en online kan worden gebruikt. De applicatie heeft veel functies, zodat u niet hoeft te wisselen tussen verschillende apps en alles binnen handbereik hebt.

- Bekijk een wereldwijde kaart met veel details, weergegeven in [verschillende kaartstijlen](../map/vector-maps.md).
- Toon, [zoek](../search/search-poi.md) en bewaar verschillende [Nuttige plaatsen](../map/point-layers-on-map.md).
- [Plan een route](../plan-route/create-route.md) met de auto, fiets, te voet en combineer deze tot multimodale routes.
- Start [navigatie met spraakbegeleiding](../navigation/guidance/voice-navigation.md) wanneer u het scherm in- en uitschakelt.
- Maak uw toeristische reis rijker met offline [Wikipedia](../plugins/wikipedia.md) en [Wikivoyage](../plan-route/travel-guides.md).
- Pas volledig aan hoe [de kaart wordt weergegeven](../map/configure-map-menu.md) en welke [widgets](../widgets/index.md) erop worden getoond.
- Navigeer [per route](../navigation/setup/route-navigation.md), [via een gegeven track](../navigation/setup/gpx-navigation.md), [met het openbaar vervoer](../navigation/routing/public-transport-navigation.md) en [off-road](../navigation/setup/markers-navigation.md).
- Alles werkt **Offline**.
- En vergeet niet bij te dragen aan [OpenStreetMap](https://www.openstreetmap.org/) met de [OSM-bewerkingsplugin](../plugins/osm-editing.md).


## Actiegids {#actions-guide}

### Toestemming voor locatietoegang {#permission-to-access-the-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Precieze locatie Android](@site/static/img/steps/first_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Precieze locatie iOS](@site/static/img/steps/first_start_ios.png) ![Precieze locatie iOS](@site/static/img/steps/first_start_ios_1.png)

</TabItem>

</Tabs>

We raden u aan OsmAnd toestemming te geven om informatie over de precieze locatie van uw apparaat te ontvangen. We verzamelen, gebruiken of delen uw privégegevens niet, dus toegang tot precieze geolocatie is nodig voor de correcte offline werking van zoek-, navigatie- en andere OsmAnd-functies.  


### Hoe kaarten te downloaden {#how-to-download-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Toon op de kaart](@site/static/img/steps/start_screen_download_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Toon op de kaart](@site/static/img/steps/start_screen_download_ios.png)

</TabItem>

</Tabs>

De OsmAnd-app werkt met verschillende soorten kaarten, maar kan alleen volledig functioneren met gedownloade offline kaarten, dus na het *<Translate android="true" ids="get_started"/>*-scherm wordt u gevraagd om de [*kaart te downloaden*](../start-with/download-maps.md#initial-setup-screen) van uw regio. U kunt een andere regio kiezen, herstellen vanuit [OsmAnd Cloud](../personal/osmand-cloud.md), of deze stap overslaan en later kaarten downloaden.  
Voor andere beschikbare opties voor het downloaden van kaarten, zie het artikel [Kaarten downloaden](../start-with/download-maps.md).

:::note Beginnen met offline kaarten
OsmAnd kan niet correct werken zonder gedownloade offline kaarten. Hoewel de applicatie [Vector](../map/vector-maps.md)- en [Rasterkaarten](../map/raster-maps.md) ondersteunt, wordt het sterk aanbevolen om te beginnen met vector-offlinekaarten om alle functies zoals [Zoeken](../search/index.md), [Navigatie](../navigation/index.md) en het [Contextmenu](../map/map-context-menu.md) correct te laten werken.
:::


### Hoe kaarten voor de hele wereld te downloaden {#how-download-maps-for-the-whole-world}

Hoewel OsmAnd u toestaat kaarten voor alle beschikbare regio's te downloaden, is er geen enkel pakket om de hele wereld in één keer te downloaden. In plaats daarvan kunt u individuele land- of regiokaarten downloaden op basis van uw behoeften.

***Belangrijkste punten:***

- **OsmAnd Pro** en **Maps+** bieden **onbeperkte kaartdownloads**, maar u moet de kaarten nog steeds regio voor regio downloaden.
- **Opslagbeperkingen.** Zorg ervoor dat uw apparaat voldoende ruimte heeft voordat u meerdere regio's downloadt.
- **Automatische updates.** Eenmaal gedownload, kunnen kaarten worden bijgewerkt via *Menu → Kaarten & Bronnen → Updates.*


### Hoe de app-taal te wijzigen {#how-to-change-app-language}

De optie *Weergavetaal* wordt gebruikt om de taal van de hele app te wijzigen, inclusief pop-upmeldingen, interne tekst, berichten en meer. Tot en met Android 12 kunt u in OsmAnd de weergavetaal rechtstreeks in de app aanpassen aan uw voorkeuren. Vanaf Android 13 en op iOS-apparaten kan de weergavetaal alleen worden gewijzigd in de systeeminstellingen (zie hoe u de taalvoorkeuren per app kunt wijzigen in [Android](https://developer.android.com/guide/topics/resources/app-languages) en [iOS](https://developer.apple.com/news/?id=u2cfuj88)).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *Instellingen → Apps → OsmAnd → Taal*

![Algemene Instellingen Taal Android](@site/static/img/personal/profiles/general_settings_language_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *Instellingen → OsmAnd Kaarten → Taal*

![Algemene Instellingen Taal iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

:::note Geen optie om app-talen in te stellen
Op sommige Android-apparaten (Xiaomi met Muiu 14) is er geen optie om app-talen individueel in te stellen in de systeeminstellingen, dus de taal van OsmAnd kan alleen worden gewijzigd met de taal van het hele systeem. U kunt de discussie op [GitHub-discussie](https://github.com/osmandapp/OsmAnd/issues/16990) bekijken voor aanvullende informatie.
:::


### Hoe uw instellingen te beheren {#how-to-manage-your-settings}

U kunt de applicatie-instellingen beheren als [Algemene instellingen](../personal/global-settings.md) of als [Profielconfiguratie](../personal/profiles.md) via het [Hoofdmenu](../start-with/main-menu.md). De applicatie wordt geleverd met een vooraf gedefinieerde lijst van profielen die later kunnen worden gewijzigd. Elk profiel kan worden beschouwd als een aangepaste kaartapplicatie voor specifieke doeleinden. Standaard dienen profielen alleen als verschillende navigatiemodi.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Profiel beheren Android](@site/static/img/settings/manage_profile_android.png) ![Profiel configureren Android](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiel beheren iOS](@site/static/img/settings/manage_profile_ios.png) ![Profiel configureren iOS](@site/static/img/settings/configure_profile_ios.png)

</TabItem>

</Tabs>

[Lees meer](../personal/global-settings.md) over Algemene instellingen.
[Lees meer](../personal/profiles.md) over Profielinstellingen.


### Hoe plugins te configureren {#how-to-configure-plugins}

[Plugins](../plugins/index.md#configure-plugin) breiden de functionaliteit van de applicatie aanzienlijk uit. Bijna alle plugins hebben hun eigen [Kaartacties](../map/map-context-menu.md), [Kaartlagen](../map/configure-map-menu.md), [Kaartdownloads](../start-with/download-maps.md) en [Instellingen](../plugins/#plugin-settings).  

U kunt plugins in- of uitschakelen via [Hoofdmenu](../start-with/main-menu.md) → [Plugins](../plugins/index.md#configure-plugin).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plugins inschakelen Android](@site/static/img/settings/plugins_enable_android.png) ![Pluginvoorbeeld Android](@site/static/img/settings/plugin_example_android.png)

Om plugins in/uit te schakelen, ga naar:
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Inschakelen

</TabItem>

<TabItem value="ios" label="iOS">

![Plugins inschakelen iOS](@site/static/img/settings/plugins_enable_ios.png) ![Pluginvoorbeeld iOS](@site/static/img/settings/plugin_example_ios.png)

Om plugins in/uit te schakelen, ga naar:
<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;

</TabItem>

</Tabs>

[Lees meer](../plugins/index.md#configure-plugin) over OsmAnd-plugins.


### Hoe een kaart te gebruiken {#how-to-use-a-map}

De kaart is een kernelement van OsmAnd, en het is belangrijk om te weten [hoe u deze moet gebruiken](../map/interact-with-map.md) (gebaren, knoppen, etc.). U kunt de [kaart configureren](../map/configure-map-menu.md) naar uw behoeften: [kaartstijl wijzigen](../map/configure-map-menu.md#map-style-parameters), verschillende [kaartlagen](../map/configure-map-menu.md#map-layers) configureren zoals favorieten, POI's, openbaar vervoer, tracks, contourlijnen, schaduwreliëf en andere.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kaart configureren Android](@site/static/img/settings/configure_map_menu_android.png) ![Kaartconfiguratievoorbeeld Android](@site/static/img/settings/configure_map_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kaart configureren iOS](@site/static/img/settings/configure_map_menu_ios.png) ![Kaartconfiguratievoorbeeld iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

</Tabs>

[Lees meer](../map/configure-map-menu.md) over kaartconfiguratie.


### Hoe het scherm te configureren {#how-to-configure-screen}

[Scherm configureren](../widgets/configure-screen.md) stelt u in staat om [Informatieve](../widgets/info-widgets.md) (hoogte, snelheid, huidige tijd, etc.) & [Navigatie-](../widgets/nav-widgets.md) (bestemming, peiling, aankomsttijd, etc.) widgets, [Snelle actie](../widgets/quick-action.md) en andere elementen die over de kaart worden weergegeven, in te schakelen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Scherm configureren Android](@site/static/img/widgets/configure_screen_android.png) ![Schermconfiguratievoorbeeld Android](@site/static/img/settings/configure_screen_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Scherm configureren iOS](@site/static/img/settings/configure_screen_ios.png) ![Schermconfiguratievoorbeeld iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

</Tabs>

[Lees meer](../widgets/configure-screen.md) over Schermconfiguratie.


### Hoe persoonlijke gegevens aan kaarten toe te voegen {#how-to-add-personal-data-to-maps}

Met OsmAnd kunt u verschillende markeringen op de kaart maken voor uw persoonlijke behoeften. Bijvoorbeeld, [Favoriete punten](../personal/favorites.md) - persoonlijke punten met naam & icoon & categorie, [Markers](../personal/markers.md) - snel toegevoegde punten als doel, [Audio/Video-notities](../plugins/audio-video-notes.md) - media-notities opgenomen op een specifiek punt, [Tracks](../personal/tracks/manage-tracks.md) - opgenomen en geïmporteerde tracks & tochten.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Persoonlijke gegevens toevoegen Android](@site/static/img/settings/personal_data_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Persoonlijke gegevens toevoegen iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

</Tabs>

[Lees meer](../map/point-layers-on-map.md) over punten op de kaart.


### Hoe nuttige plaatsen te doorzoeken & vinden {#how-to-browse--find-point-of-interest}

[Nuttige plaatsen (POI)](../map/point-layers-on-map.md#points-of-interest-pois) zijn voorzieningen die gezocht of gemarkeerd kunnen worden op de kaart. Ze vertegenwoordigen interessante of nuttige plaatsen en worden verspreid als onderdeel van [Vectorkaarten](../map/vector-maps.md). U kunt ze gebruiken om [op de kaart weer te geven](../map/point-layers-on-map.md#points-of-interest-pois), te [navigeren](../navigation/index.md) en de nuttige plaatsen op de kaart te [zoeken](../search/search-poi.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Meerdere POI's selecteren](@site/static/img/map/multiple_selection_android.png) ![Zoek en toon POI Android](@site/static/img/map/search_display_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Meerdere POI's selecteren](@site/static/img/settings/multiple_selection_iOS.png) ![Zoek en toon POI iOS](@site/static/img/settings/search_display_poi_iOS.png)

</TabItem>

</Tabs>

[Lees meer](../search/search-poi.md) over het zoeken naar POI's.


### Hoe een route te plannen {#how-to-plan-a-route}

[Route plannen](../plan-route/create-route.md) is een krachtig hulpmiddel waarmee u een reis kunt maken, een bestaande track kunt bewerken en ter plekke afstanden kunt meten. U kunt snel tussenpunten plaatsen en deze verbinden met verschillende navigatielijnen (fiets, voetganger, rechte lijn, etc.). De resultaten kunnen worden opgeslagen in een GPX-bestand, zodat het later kan worden [gedeeld](../personal/tracks/index.md) of [gebruikt voor navigatie](../navigation/setup/gpx-navigation.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route plannen Android](@site/static/img/settings/plan_route_android.png) ![Routegrafiek Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route plannen iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

[Lees meer](../plan-route/create-route.md) over de functie Route plannen.


### Hoe op adres te zoeken {#how-to-search-by-address}

OsmAnd biedt veel zoekmogelijkheden, waaronder het zoeken op adres. Standaard gebruikt het [OpenStreetMap-data](https://nominatim.openstreetmap.org/ui/search.html) en zou het alle adressen moeten kunnen vinden via de snelle zoekinvoer. U kunt ook [zoeken](../search/search-address.md) op stad, straat, postcode en coördinaten.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Adres zoeken Android](@site/static/img/settings/address_search_android.png) ![Zoekresultaat Android](@site/static/img/settings/address_search_result_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Adres zoeken iOS](@site/static/img/settings/address_search_ios.png) ![Zoekresultaat iOS](@site/static/img/settings/address_search_result_ios.png)

</TabItem>

</Tabs>

:::note
U moet de kaart downloaden voordat u daar een adres kunt zoeken. Als uw huidige locatie te ver van het te zoeken adres is, moet u mogelijk de zoekradius vergroten.
:::

[Lees meer](../search/search-address.md) over het zoeken op adres.


### Hoe navigatie te starten {#how-to-start-navigation}

[Navigatie](../navigation/index.md) biedt u stapsgewijze begeleiding naar uw bestemming door de route weer te geven, afslag-voor-afslag instructies te geven, extra weginformatie over wegdek, gladheid, etc., en optionele spraakbegeleiding.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie starten Android](@site/static/img/settings/start_navigation_android.png) ![Routegrafiek Android](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatie starten iOS](@site/static/img/settings/start_navigation_ios.png) ![Routegrafiek iOS](@site/static/img/settings/route_graph_ios.png)

</TabItem>

</Tabs>

[Lees meer](../navigation/index.md) over navigatie.


### Hoe uw reis op te nemen {#how-to-record-your-trip}

[Reisopname](../plugins/trip-recording.md) is een speciaal hulpmiddel, verpakt als een OsmAnd-plugin, waarmee u alle bewegingen op een track kunt opnemen met behulp van de GPS van het apparaat.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Reisopname Android](@site/static/img/settings/trip_recording_android.png) ![Overzicht reisopname Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Reisopname starten iOS](@site/static/img/settings/trip_recording_start_ios.png) ![Menu reisopname iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

[Lees meer](../plugins/trip-recording.md) over reisopname.


### Hoe kaarten te bewerken {#how-to-edit-maps}

OsmAnd wordt aangedreven door [OpenStreetMap](https://www.openstreetmap.org/)-data. De kaarten worden gemaakt door vrijwillige bijdragers, dus ze kunnen meer of minder details bevatten, afhankelijk van hoeveel werk er is verricht in een bepaald deel van de kaart. Iedereen kan zich registreren als bijdrager en OSM-kaarten toevoegen of bewerken. OsmAnd biedt een bewerkingsplugin die helpt om OpenStreetMap te verbeteren.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OSM-notitie Android](@site/static/img/settings/osm_note_android.png) ![POI aanmaken Android](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OSM-notitie iOS](@site/static/img/settings/osm_note_ios.png) ![POI aanmaken iOS](@site/static/img/settings/create_poi_ios.png)

</TabItem>

</Tabs>

[Lees meer](../plugins/osm-editing.md) over OSM-bewerking.


### Hoe de app te sluiten {#how-to-close-the-app}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Er zijn twee manieren om OsmAnd te sluiten.

1. Sluit een app door deze omhoog van het scherm te vegen. Voor een verticale lijst met apps, veegt u naar links of rechts.  

2. Mogelijk moet u de volgende stappen uitvoeren voordat u dit doet, anders blijft OsmAnd op de achtergrond draaien:
    - [Navigatie afbreken](../navigation/setup/route-navigation.md#start--stop-navigation)
    - [Kaartdownload en -update stoppen](../start-with/download-maps.md)
    - [Reisopname stoppen](../plugins/trip-recording.md#new-track-recording)
    - [Audio-/video-opname stoppen](../plugins/audio-video-notes.md)

3. *Geforceerd stoppen*-functie:
    - Druk lang op *OsmAnd-icoon → **i**-knop → Geforceerd stoppen*.
    - Open de instellingen en tik op *Apps & meldingen → OsmAnd → Geforceerd stoppen*.

</TabItem>

<TabItem value="ios" label="iOS">

Sluit een app door deze omhoog van het scherm te vegen. Voor een verticale lijst met apps, veegt u naar links of rechts.  

Mogelijk moet u de volgende stappen uitvoeren voordat u dit doet, anders blijft OsmAnd op de achtergrond draaien:

- [Navigatie annuleren](../navigation/setup/route-navigation.md)
- [Kaartdownload en -update stoppen](../start-with/download-maps.md)
- [Reisopname stoppen](../plugins/trip-recording.md#new-track-recording)
- [Audio-/video-opname stoppen](../plugins/audio-video-notes.md)

</TabItem>

</Tabs>


## App-snelkoppelingen {#app-shortcuts}

<InfoAndroidOnly/>

[Applicatiesnelkoppelingen](https://support.google.com/android/answer/9450271) zijn beschikbaar voor het OsmAnd-icoon. Druk lang op het OsmAnd-icoon op het scherm van uw apparaat om het menu met applicatiesnelkoppelingen te openen. Hier kunt u kort drukken om de volgende acties te selecteren: *Navigeer naar Huis*, *Navigeer naar Werk*, *Start Opname*, *Zoeken*, *Mijn plaatsen*, *Navigeren naar*. Door lang op een actie te drukken, kunt u een nieuw actie-icoon toevoegen aan uw apparaatscherm.

Tik op een actie-icoon om de applicatie onmiddellijk te starten met de geselecteerde actie.

![Snelkoppelingen](@site/static/img/steps/shortcuts_3_andr.png) ![Snelkoppelingen](@site/static/img/steps/shortcuts_4_andr.png)


## Offline Help {#offline-help}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline help Android schermafbeelding](@site/static/img/steps/offline_help_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kaartenmenu iOS](@site/static/img/steps/offline_help_screen_ios.png)

</TabItem>

</Tabs>

In het *Help-menu* vindt u artikelen van onze site [www.osmand.net/docs](https://osmand.net/docs/intro/). Na de eerste download (internetverbinding vereist) zijn de helpartikelen offline beschikbaar.  
Het eerste subonderwerp, *Offline Help*, bevat de **Meest bekeken** (of populaire) artikelen onder onze gebruikers. Deze artikelen worden weergegeven in de taal die is ingesteld voor de applicatie, als deze taal wordt ondersteund op onze documentatiewebsite. Momenteel ondersteunde talen zijn: *<Translate android="true" ids="lang_en"/>, <Translate android="true" ids="lang_ar"/>, <Translate android="true" ids="lang_de"/>, <Translate android="true" ids="lang_es"/>, <Translate android="true" ids="lang_fr"/>, <Translate android="true" ids="lang_it"/>, <Translate android="true" ids="lang_nl"/>, <Translate android="true" ids="lang_pl"/>, <Translate android="true" ids="lang_pt"/>, <Translate android="true" ids="lang_tr"/>*, en *<Translate android="true" ids="lang_uk"/>*. Als u de applicatietaal wijzigt, start dan OsmAnd opnieuw om de documentatie in de geselecteerde taal te openen. Als een vertaling niet beschikbaar is, wordt automatisch de Engelse versie van de pagina weergegeven. De secties **Gebruikershandleiding** en **Probleemoplossing** hebben dezelfde structuur als op de website.  
In het *Help-menu* vindt u ook nuttige links naar de sociale netwerken van OsmAnd, versie-informatie over uw applicatie, release-opmerkingen en contactgegevens voor ondersteuning. Via Help kunt u ook [logcat- en crashlogs](../troubleshooting/crash-logs.md#crash-and-logcat-logs) verzenden.  

### Menu {#menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline help Android schermafbeelding](@site/static/img/steps/offline_help_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kaartenmenu iOS](@site/static/img/steps/offline_help_menu_ios.png)

</TabItem>

</Tabs>  

- **Crashlog verzenden** (*voor Android*). Stelt gebruikers in staat om rapporten van app-crashes naar ontwikkelaars te sturen, wat helpt bij het identificeren en oplossen van problemen.
- **Logcat-log verzenden** (*voor Android*). Biedt gebruikers de mogelijkheid om gedetailleerde logs van app-crashes naar ontwikkelaars te sturen, wat diepere analyse en probleemoplossing vergemakkelijkt.
- **Log verzenden** (*voor iOS*). Voert een vergelijkbare functie uit als de *Crashlog verzenden*-functie voor Android, waardoor gebruikers op iOS-apparaten app-crashes kunnen rapporteren aan ontwikkelaars voor foutopsporingsdoeleinden.
- **Buildversie kopiëren**. Stelt gebruikers in staat om snel en nauwkeurig de huidige versie van de app aan ontwikkelaars door te geven bij het melden van problemen, wat het diagnose- en oplossingsproces vereenvoudigt.


### Meest bekeken {#most-viewed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline help Android schermafbeelding](@site/static/img/steps/offline_help_most_viewed_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kaartenmenu iOS](@site/static/img/steps/offline_help_most_viewed_ios.png)

</TabItem>

</Tabs>

De meest bekeken artikelen onder onze gebruikers verwijzen naar de artikelen in de app of op de site die de meeste weergaven of gebruikersinteracties hebben gekregen. Deze metriek helpt bij het identificeren van inhoud die bijzonder interessant of nuttig is voor uw gebruikers. Het kan waardevolle inzichten bieden in gebruikersvoorkeuren en -interesses, waardoor ontwikkelaars en contentmakers toekomstige inhoud beter kunnen afstemmen op de behoeften van het publiek. Bovendien kan het markeren van populaire artikelen nieuwe gebruikers helpen waardevolle bronnen binnen de app te vinden.


### Gebruikershandleiding {#user-guide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline help Android schermafbeelding](@site/static/img/steps/guide_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kaartenmenu iOS](@site/static/img/steps/guide_ios.png)

</TabItem>

</Tabs>

De sectie **Gebruikershandleiding** van het Help-menu is een complete handleiding die de structuur van de OsmAnd-website volgt, wat zorgt voor consistentie van informatie en gemakkelijke navigatie over platforms heen. Met behulp van Help kunt u gemakkelijk van de app naar de website navigeren en dezelfde inhoud vinden die op een vertrouwde manier is georganiseerd. Deze consistentie verbetert de bruikbaarheid door een enkele ondersteuningsbron te bieden om snel antwoorden op vragen te vinden en problemen op te lossen.


### Probleemoplossing {#troubleshooting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline help Android schermafbeelding](@site/static/img/steps/offline_help_troubleshooting_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kaartenmenu iOS](@site/static/img/steps/offline_help_troubleshooting_ios.png)

</TabItem>

</Tabs>

Oplossingen en tips voor het oplossen van veelvoorkomende problemen. Als u een specifieke vraag heeft, raadpleeg dan [Probleemoplossing](../troubleshooting/index.md) om een antwoord te krijgen.

- [Installatie](../troubleshooting/setup.md). Bij het instellen van een applicatie zijn dit de problemen die het vaakst voorkomen.
- [Kaarten & data](../troubleshooting/maps-data.md). Problemen met betrekking tot kaarten, zoeken en de rest van de data.
- [Navigatie](../troubleshooting/navigation.md). De meest voorkomende problemen die optreden in de navigatiemodus.
- [Trackopname](../troubleshooting/track-recording-issues.md). Veelvoorkomende problemen met betrekking tot trackopname, zoals ruis, gaten en onnauwkeurigheden.
- [Algemeen](../troubleshooting/general.md). Veelvoorkomende problemen die verband houden met verschillende OsmAnd-functies.
- [Crashlogs](../troubleshooting/crash-logs.md). Hoe u crashlogs naar het OsmAnd-team kunt sturen.
- [Android Auto](../troubleshooting/android_auto.md) (*alleen voor Android*). Problemen met auto-navigatie.

### Contacteer ons {#contact-us}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline help Android schermafbeelding](@site/static/img/steps/offline_help_contact_us_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kaartenmenu iOS](@site/static/img/steps/offline_help_contact_us_ios.png)

</TabItem>

</Tabs>

Hiermee kunt u vragen stellen of suggesties doen.

### Meld problemen {#report-issues}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline help Android schermafbeelding](@site/static/img/steps/offline_help_report_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kaartenmenu iOS](@site/static/img/steps/offline_help_report_ios.png)

</TabItem>

</Tabs>

- **Open een issue op GitHub**. [Android-versie GitHub](https://github.com/osmandapp/OsmAnd-Issues/issues), [iOS-versie GitHub](https://github.com/osmandapp/OsmAnd-iOS/issues): stel vragen, schrijf over bugs en stel functies voor.
- **Crashlog verzenden** (*voor Android*). Bevat alleen informatie over crashes.
- [Logcat-log verzenden](../../user/troubleshooting/crash-logs.md#send-logs-from-osmand-app-android) (*Android*) / [Log verzenden](../../user/troubleshooting/crash-logs.md#send-logs-from-ios-devices) (*iOS*). Gedetailleerd logbestand.

### Over OsmAnd {#about-osmand}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline help Android schermafbeelding](@site/static/img/steps/offline_about_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kaartenmenu iOS](@site/static/img/steps/offline_about_ios.png)

</TabItem>

</Tabs>

U kunt meer te weten komen over ons team, de huidige versie van de app en wat er nieuw is bekijken, en de bètaversie van de app downloaden.


## Privacy {#privacy}

Het is een [open source](https://github.com/osmandapp/osmand), advertentievrije / trackervrije, op privacy gerichte applicatie. Om maximale privacy te waarborgen, biedt OsmAnd in de eerste plaats offline kaarten, zodat er geen interactie of geo-informatie van uw apparaat lekt. We zijn zeer attent op welke gegevens worden verzameld en welke gegevens via het netwerk worden overgedragen. U kunt hier meer over lezen in ons [Privacybeleid](https://osmand.net/help-online/privacy-policy).  


## Toestemmingen {#permissions}

OsmAnd heeft geen vereiste toestemmingen op de iOS / Android-versie.

**Essentieel**:

- **Internet**. Initiële download / update van offline kaarten. Het kan ook nodig zijn om toegang te krijgen tot online functies zoals [Beelden op straatniveau](../map/point-layers-on-map.md#-street-level-imagery), [Online foto's](../map/map-context-menu.md#online-photos) of [Online kaarten](../map/raster-maps.md).
- **GPS** / **GSM-netwerk**. Bepaal uw locatie, volg u in een navigatiemodus en neem uw reis op (optioneel). Deze toestemming wordt gevraagd wanneer u op de [knop 'mijn locatie'](../widgets/map-buttons.md#my-location-and-zoom) klikt of wanneer u [navigatie start](../navigation/setup/route-navigation.md#start--stop-navigation).

**Optioneel**:

- **Camera/spraakopname** (*Android*). Alleen gebruikt door [de Audio/Video-notities](../plugins/audio-video-notes.md). Deze functie is verpakt als een plugin en is standaard uitgeschakeld. Hiermee kunt u snel locatiegerelateerde audio-/videonotities maken tijdens een reis.