---
source-hash: 8451603f460c01b41bc40f56cd232e1cc6efc049123d01d861d14574636fb31b
title:  Tracks
sidebar_position: 2
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
OsmAnd heeft veel krachtige functies om verschillende routes op de kaart weer te geven. Routes kunnen worden gebouwd als onderdeel van Navigatie, aangemaakt via Route plannen, geïmporteerd als GPX-tracks, opgenomen via de Reisopname-plugin, of doorzocht en geselecteerd uit OpenStreetMap-gegevens.


## Soorten Tracks {#types-of-tracks}

[Tracks (GPX)](#display-tracks-on-the-map) - opgenomen of geplande reis opgeslagen in [GPX-formaat](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Dit soort route kan worden geïmporteerd uit een externe bron, aangemaakt in de applicatie, of door u worden opgenomen. GPX kan één van de 3 verschillende soorten gegevens bevatten, of allemaal:

- Track als een lijn (***Geometrie***). Het bestand heeft een ```<trkpt>``` punten-array, elk punt heeft de locatie en optionele tijd, snelheid, hoogte en andere attributen. Deze tracks worden op de kaart weergegeven als ononderbroken lijnen.
- Track als een route (***Route***). Het bestand heeft een ```<rtept>``` punten-array, waarbij elk punt wordt beschreven als een tussenpunt van de route. Het hangt ervan af hoe punten binnen een route moeten worden verbonden, hetzij als kleine routesegmenten of via een rechte lijn. Deze tracks worden op de kaart weergegeven als stippellijnen.
- Waypoints (***Punten***). Het bestand heeft ```<wpt>``` punten met attributen. Waypoints worden weergegeven als ronde punten op de kaart. U kunt erop tikken voor extra informatie.

OsmAnd kan tracks maken met 1–3 combinaties. [Route plannen](../../plan-route/create-route.md) maakt een track met ***Geometrie*** en ***Route***. Als u het opslaat als ***Vereenvoudigde Track***, wordt alleen de ***Geometrie*** bewaard. [Track opnemen](../../plugins/trip-recording.md#new-track-recording) maakt alleen ***Geometrie***, maar u kunt er ook ***Punten*** aan toevoegen via het contextmenu.


## Tracks op de Kaart Weergeven {#display-tracks-on-the-map}

U kunt de zichtbaarheid van tracks beheren door te kiezen welke u wilt weergeven of verbergen vanuit verschillende menu's: het [Mijn Plaatsen-menu](#my-places), het [Kaart configureren-menu](#configure-map) en het [Track Contextmenu](#track-context-menu). Deze flexibiliteit stelt u in staat om snel te wisselen tussen verschillende tracks, zodat alleen de relevante tracks op uw kaart op elk gegeven moment zichtbaar zijn.

### Kaart configureren {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Configure map tracks Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)   ![Configure map tracks Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Configure map tracks iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)  ![Configure map tracks iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

De optie *Kaart configureren* stelt u in staat om snel de weergave van alle recent weergegeven tracks te beheren, zodat u de zichtbaarheid voor een groep tracks kunt in- of uitschakelen. De sortering van de tracks volgt de volgorde die is geconfigureerd in het tabblad *Mijn Plaatsen → Tracks*. U kunt het [Trackmenu](../../personal/tracks/manage-tracks.md#track-menu) openen door lang op een track-item te tikken. Bovendien kunt u in dit menu het uiterlijk van meerdere geselecteerde tracks tegelijk wijzigen.

### Mijn Plaatsen {#my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![My Places with tracks in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → tik lang op de gekozen GPX-track → Toon op kaart*

![Context menu of a track in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

In [Mijn Plaatsen *→* tabblad Tracks](../../personal/tracks/manage-tracks.md#manage-tracks) moet u het volgende doen om de track op de kaart weer te geven:

- *Android* - tik op het *drie-puntenmenu* in het veld met de gewenste track.
- *iOS* - tik lang op de gewenste track in de lijst.


### Track Contextmenu {#track-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track context menu overview Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track context menu overview iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

Wanneer u een track op de kaart selecteert of het [track contextmenu](./track-context-menu.md) opent na het opnemen of importeren van een track, kunt u de zichtbaarheid ervan op de kaart regelen. Gebruik eenvoudigweg de knoppen *Toon* of *Verberg* om de track in de kaartweergave weer te geven of te verwijderen.


## Track Analyseren op Kaart {#analyze-track-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *Tik op de track → Tabblad Track → <Translate android="true" ids="analyze_on_map"/>*  

![Track menu analyze on map Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png)    ![Track menu analyze on the map distance Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *Tik op de track → Tabblad Track → <Translate ios="true" ids="analyze_on_map"/>*  

![Track menu analyze on map](@site/static/img/personal/tracks/track_analyze_ios.png)  ![Track menu analyze on map ](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

Deze tool biedt een gedetailleerde analyse van [trackgegevens](../../map/tracks/track-context-menu.md#options) met behulp van grafieken en kaarten.

- **Grafiekgegevens (Y-as)** toont: *Hoogte*, *Helling*, *Snelheid*, [*Externe sensorgegevens*](../../plugins/external-sensors.md), en combinaties van maximaal twee opties indien aanwezig in de trackgegevens.
- **Grafiekdimensie (X-as)** vertegenwoordigt: *Afstand*, *Tijd*, en *Tijdstip van de dag*.
- **Tik/schuif-interactie**. Tik op een grafiek om informatie over een specifiek punt op de track weer te geven. Schuiven op de grafiek markeert de juiste locatie op de kaart en toont details in de informatiebalk.
- **Afstandslabel**. Wanneer u tikt of schuift langs de grafiek, toont de tooltip ook de exacte afstand langs de track. De waarde volgt de huidige profiel eenheidsinstellingen (<Translate android="true" ids="km"/> of <Translate android="true" ids="mile"/>). Gebruik het om snel in te schatten hoe ver een punt van de start van de track is, of om de afstand tussen twee posities te berekenen door hun waarden te vergelijken.
- **Schalen**. Gebruik een [tweevingergebaar](../../map/interact-with-map.md#gestures) om de grafiek te schalen voor een meer gedetailleerde weergave.


### Volg Mijn Locatie {#follow-my-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track menu analyze on map 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Track menu analyze on map 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu analyze on map](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png)  ![Track menu analyze on map ](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Tik op de knop [Mijn Locatie](../../map/interact-with-map.md#my-location-and-zoom) om de kaartweergave en de grafiek te synchroniseren met uw locatie.

- De **schaal van de grafiek** blijft hetzelfde en de **informatiebalk** staat vast op 1/4 aan de linkerkant.
- Terwijl u beweegt, **schuift de grafiek** van links naar rechts en toont informatie vooruit op uw track.
- Er worden geen andere widgets op dit scherm weergegeven.
- Deze functie is handig voor wandelen en fietsen terwijl u de track navigeert.  


## Gerelateerde Artikelen {#related-articles}

- [Uiterlijk van de track](./appearance.md)
- [Track Contextmenu](./track-context-menu.md)
- [Navigeren op basis van een track](../../navigation/setup/gpx-navigation.md)
- [Routes op de kaart](https://docs.osmand.net/blog/routes) blogartikel
- [Kaart configureren](../../map/configure-map-menu.md)  
- [GPX-tracks](../../personal/tracks/index.md)  
- [Route plannen](../../plan-route/index.md)  
- [Reisopname](../../plugins/trip-recording.md)