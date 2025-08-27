---
source-hash: 6aec601164666a3a81eb5d95bdecc9963a7c4f7ddbac1cea35f42845786713b8
title: Tracks
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

OsmAnd heeft veel krachtige functies om verschillende routes op de kaart weer te geven. Routes kunnen worden opgebouwd als onderdeel van Navigatie, gemaakt via Route plannen, geïmporteerd als GPX-tracks, opgenomen via de plug-in Ritregistratie, of doorzocht en geselecteerd uit OpenStreetMap-gegevens.


## Soorten tracks {#types-of-tracks}

[Tracks (GPX)](#display-tracks-on-the-map) - opgenomen of geplande reis opgeslagen in [GPX-formaat](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Dit soort route kan worden geïmporteerd uit een externe bron, gemaakt in de applicatie, of door u opgenomen. GPX kan een van de 3 verschillende soorten gegevens bevatten, of allemaal:

- Track als een lijn (***Geometrie***). Het bestand heeft een ```<trkpt>``` puntenarray, elk punt heeft de locatie en optionele tijd, snelheid, hoogte en andere attributen. Deze tracks worden op de kaart weergegeven als ononderbroken lijnen.
- Track als een route (***Route***). Het bestand heeft een ```<rtept>``` puntenarray, elk punt beschreven als een tussenpunt van de route. Het hangt ervan af hoe punten binnen een route moeten worden verbonden, hetzij als kleine routesegmenten of via een rechte lijn. Deze tracks worden op de kaart weergegeven als stippellijnen.
- Waypoints (***Punten***). Het bestand heeft ```<wpt>``` punten met attributen. Waypoints worden weergegeven als cirkelvormige punten op de kaart. U kunt erop tikken om aanvullende informatie te krijgen.

OsmAnd kan tracks maken met 1-3 combinaties. [Route plannen](../../plan-route/create-route.md) maakt een track met ***Geometrie*** en ***Route***, als u deze opslaat als ***Vereenvoudigde track***, wordt alleen de ***Geometrie*** behouden. [Track opnemen](../../plugins/trip-recording.md#new-track-recording) maakt alleen ***Geometrie***, maar u kunt er ook ***Punten*** aan toevoegen via het contextmenu.


## Tracks op de kaart weergeven {#display-tracks-on-the-map}

U kunt de zichtbaarheid van tracks beheren door te kiezen welke u wilt weergeven of verbergen vanuit verschillende menu's: het menu [Mijn plaatsen](#my-places), het menu [Kaart configureren](#configure-map) en het [Trackcontextmenu](#track-context-menu). Deze flexibiliteit stelt u in staat om snel te schakelen tussen verschillende tracks, zodat alleen de relevante tracks op elk moment zichtbaar zijn op uw kaart.

### Kaart configureren {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Kaarttracks configureren Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png) ![Kaarttracks configureren Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Kaarttracks configureren iOS](@site/static/img/personal/tracks/follow_track_1_ios.png) ![Kaarttracks configureren iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

De optie *Kaart configureren* stelt u in staat om snel de weergave van alle recent weergegeven tracks te beheren, zodat u de zichtbaarheid voor een groep tracks kunt in- of uitschakelen. De sortering van de tracks volgt de volgorde die is geconfigureerd in het tabblad *Mijn plaatsen → Tracks*. U kunt het [Trackmenu](../../personal/tracks/manage-tracks.md#track-menu) openen door lang op een trackitem te tikken. Bovendien kunt u in dit menu de weergave van meerdere geselecteerde tracks tegelijkertijd wijzigen.

### Mijn plaatsen {#my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![Mijn plaatsen met tracks in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → lang tikken op de gekozen GPX-track → Weergeven op kaart*

![Contextmenu van een track in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

In [Mijn plaatsen *→* tabblad Tracks](../../personal/tracks/manage-tracks.md#manage-tracks) om de track op de kaart weer te geven, moet u:

- *Android* - tik op het *drie-stippenmenu* in het veld met de vereiste track.
- *iOS* - lang tikken op de vereiste track in de lijst.


### Trackcontextmenu {#track-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Overzicht trackcontextmenu Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Overzicht trackcontextmenu iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

Wanneer u een track op de kaart selecteert of het [trackcontextmenu](./track-context-menu.md) opent na het opnemen of importeren van een track, kunt u de zichtbaarheid ervan op de kaart regelen. Gebruik eenvoudig de knoppen *Weergeven* of *Verbergen* om de track weer te geven of te verwijderen uit de kaartweergave.


## Track op kaart analyseren {#analyze-track-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *Tik op de track → Tabblad Track → <Translate android="true" ids="analyze_on_map"/>*

![Trackmenu analyseren op kaart Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png) ![Trackmenu analyseren op kaart afstand Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *Tik op de track → Tabblad Track → <Translate ios="true" ids="analyze_on_map"/>*

![Trackmenu analyseren op kaart](@site/static/img/personal/tracks/track_analyze_ios.png) ![Trackmenu analyseren op kaart ](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

Deze tool biedt een gedetailleerde analyse van [track](../../map/tracks/track-context-menu.md#options) gegevens met behulp van grafieken en kaarten.

- **Grafiekgegevens (Y-as)** toont: *Hoogte*, *Helling*, *Snelheid*, [*Externe sensorgegevens*](../../plugins/external-sensors.md), en combinaties van maximaal twee opties indien opgenomen in de trackgegevens.
- **Grafiekdimensie (X-as)** vertegenwoordigt: *Afstand*, *Tijd*, en *Tijd van de dag*.
- **Tik-/schuifinteractie**. Tik op een grafiek om informatie over een specifiek punt op de track weer te geven. Schuiven op de grafiek markeert de juiste locatie op de kaart en toont details in de informatiebalk.
- **Schalen**. Gebruik een [tweevingergebaar](../../map/interact-with-map.md#gestures) om de grafiek te schalen voor een gedetailleerdere weergave.


### Mijn locatie volgen {#follow-my-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trackmenu analyseren op kaart 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Trackmenu analyseren op kaart 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trackmenu analyseren op kaart](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png) ![Trackmenu analyseren op kaart ](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Tik op de knop [Mijn locatie](../../map/interact-with-map.md#my-location-and-zoom) om de kaartweergave en grafiek te synchroniseren met uw locatie.

- De **schaal van de grafiek** blijft hetzelfde, en de **balkinformatie** is vast 1/4 aan de linkerkant.
- Terwijl u beweegt, zal de **grafiek schuiven** van links naar rechts, waarbij informatie voor uw track wordt weergegeven.
- Er worden geen andere widgets op dit scherm weergegeven.
- Deze functie is handig voor wandelen en fietsen terwijl u de track navigeert.


## Gerelateerde artikelen {#related-articles}

- [Trackweergave](./appearance.md)
- [Trackcontextmenu](./track-context-menu.md)
- [Navigeren via track](../../navigation/setup/gpx-navigation.md)
- [Routes op de kaart](https://docs.osmand.net/blog/routes) blogartikel
- [Kaart configureren](../../map/configure-map-menu.md)
- [GPX-tracks](../../personal/tracks/index.md)
- [Route plannen](../../plan-route/index.md)
- [Ritregistratie](../../plugins/trip-recording.md)

> *Laatst bijgewerkt: november 2024*