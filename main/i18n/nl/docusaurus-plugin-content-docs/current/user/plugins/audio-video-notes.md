---
source-hash: 60b188c51e17690f3a3d5d8e4970eb6bd2391e27d4fafaddb68b30a36313f979
sidebar_position: 3
title: Audio-/videonotities
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


<InfoAndroidOnly />

## Overzicht {#overview}

Uw audio- en video-opnamen kunnen in de toekomst nuttig zijn, bijvoorbeeld als herinneringen aan plaatsen waar u bent geweest. Ze zijn beschikbaar in het menu [Mijn plaatsen](../personal/myplaces.md) en zijn zichtbaar wanneer de plug-in Audio-/videonotities is ingeschakeld.

De plug-in Audio-/videonotities breidt de functionaliteit van OsmAnd uit door u in staat te stellen uw eigen notities in verschillende formaten, zoals foto's, video of audio, te maken en deze te koppelen aan hun geografische locatie of huidige locatie. U kunt alleen opnamen maken wanneer de plug-in is ingeschakeld, met behulp van de [widget Audio-/videonotities](../widgets/info-widgets.md#-audio-video-notes-widget) en/of het [kaartcontextmenu](../map/map-context-menu.md#-audiovideo-note). De ontvangen gegevens worden automatisch opgeslagen in [Mijn plaatsen](../personal/myplaces.md), van waaruit ze gemakkelijk kunnen worden beheerd en gedeeld.

Alle gemaakte audio- en videonotities vormen de opnamelaag. Wanneer deze op de kaart is ingeschakeld, verandert de weergave van de opgenomen gegevens en zijn er meer instellingen om de opnamen te beheren. In de opnamelaag worden audio- en videonotities als POI's op de kaart geplaatst, waardoor een gebruikersverhaal ontstaat dat alleen zichtbaar is voor de eigenaar van het apparaat.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Introductie audio-/videonotities](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>


## Vereiste instellingsparameters {#required-setup-parameters}

De audio-/videonotities worden geleverd met de plug-in Audio-/videonotities en vereisen de volgende instelling:

1. Schakel de [plug-in Audio-/videonotities](../plugins/index.md#enable--disable) in het gedeelte Plug-ins van het *Hoofdmenu* in.
2. Voeg een [widget](../widgets/info-widgets.md#-audio-video-notes-widget) toe aan het kaartscherm voor het meest gemakkelijke gebruik.
3. Pas de [opname-instellingen](#plugin-settings) voor elk profiel aan, indien nodig.


## Plug-ininstellingen {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*

![Instellingen audio-/videoplug-in Foto Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

Voor elk profiel kunt u de *audio- en video-opnameopties* configureren.

| Parameter | Beschrijving |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>** | U kunt kiezen of u de systeemapp of de OsmAnd-camera wilt gebruiken om <Translate android="true" ids="photo_notes"/> te maken. |
| **<Translate android="true" ids="av_camera_pic_size"/>** | Stelt de grootte in van de te maken foto's. De cameramogelijkheden van het apparaat bepalen het aantal beschikbare opties. Als er geen optie is geselecteerd, gebruikt de app de grootte uit de systeeminstellingen van de camera van het apparaat. |
| **<Translate android="true" ids="av_camera_focus"/>** | Bepaalt de methode waarop de camerafocus wordt ingesteld. Het aantal beschikbare opties wordt bepaald door de mogelijkheden van de camera van het apparaat. In principe zijn er de volgende drie opties: *<Translate android="true" ids="av_camera_focus_auto"/>*; *<Translate android="true" ids="av_camera_focus_continuous"/>*; en *<Translate android="true" ids="av_camera_focus_infinity"/>*. **Autofocus** is de meest populaire en stelt de automatische modus voor de camera in; **continu** zorgt ervoor dat de camera bewegingen detecteert en dienovereenkomstig opnieuw scherpstelt; en de **oneindigheid**-optie zorgt ervoor dat de lens op een afstand scherpstelt en zo objecten scherp houdt, ongeacht hoe ver ze zijn. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | Indien ingeschakeld, wordt er een geluid geproduceerd wanneer de camera een opname maakt. Houd er rekening mee dat, zoals vereist door de privacywetgeving, **in sommige landen apparaten geen mute-schakelaar voor de camerasluiter hebben**. Als u de systeemapp gebruikt, moet het geluid in de camera-app worden uitgeschakeld. |
| **<Translate android="true" ids="av_audio_format"/>** | Biedt een keuze aan formaten voor een audiobestand. Het aantal beschikbare opties en welke standaard wordt gebruikt, wordt bepaald door de parameters van een specifiek apparaat. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | Deze optie biedt een keuze aan bitrate-opties voor een te maken audiobestand. De beschikbare bitrate-opties variëren van 16 kbps tot 128 kbps, of de standaardoptie. De standaardparameter wordt bepaald door de "standaard" microfooninstellingen van uw apparaat. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | Indien ingeschakeld, gebruikt OsmAnd de systeemtoepassing om video op te nemen in <Translate android="true" ids="video_notes"/>. |
| **<Translate android="true" ids="av_video_quality"/>** | Dit biedt een keuze aan opties die het formaat van de uitvoerafbeelding bepalen. Het bereik van beschikbare opties wordt bepaald door de parameters van een specifiek apparaat. De standaardoptie is de optie *Hoogste kwaliteit*. |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | Indien ingeschakeld, worden oude video-opnamen automatisch overschreven en vervangen door nieuwe video-opnamen als de opslaggrootte de limiet bereikt. |
| **<Translate android="true" ids="rec_split_clip_length"/>** | Dit bepaalt de bovengrens voor de duur van opgenomen videoclips. Er zijn opties met een bereik van 1 minuut tot 30 minuten. |
| **<Translate android="true" ids="rec_split_storage_size"/>** | Dit stelt de grootte in van de opslag die bedoeld is voor opgenomen video. Er zijn opties met een bereik van 1024 MB tot 62 GB. Een specifiek bereik van opties en de standaardoptie wordt bepaald door de parameters van een specifiek apparaat. Een systeemmelding herinnert u eraan dat de opslaggrootte de ingestelde limiet bereikt. |
| **<Translate android="true" ids="notes"/>** | Deze optie leidt u door naar de [Audio-/videonotities in Mijn plaatsen](../personal/myplaces.md) - centrale opslag van alle audio-/videonotities die ooit in de app zijn gemaakt. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | U kunt de standaardwaarden voor alle A/V-notitie-instellingen instellen. |
| **<Translate android="true" ids="copy_from_other_profile"/>** | Opent een dialoogvenster om een profiel te selecteren waaruit de configuratie voor audio-/video-opnamen kan worden gekopieerd en deze in te stellen voor het huidige profiel. |


## Een enkele notitie beheren {#manage-a-single-note}

U kunt uw informatie, gedachten, ideeën, enz. gekoppeld aan een geografische plaats als volgt beheren:

- Een notitie maken.
- Alle notities bekijken als een lijst in [Mijn plaatsen](../personal/myplaces.md).
- De specifieke notitie op de kaart weergeven.
- Een notitie in Mijn plaatsen hernoemen.
- Alle notities [op de kaart weergeven](../map/configure-map-menu.md#map-data-layers).
- De notitie afspelen.
- Waypoints maken in een [track](../plugins/trip-recording.md#gpx-file-details).
- Exporteren naar [JOSM](https://josm.openstreetmap.de/).


### Maken {#create}

U kunt een foto-, video- en audionotitie op een van de volgende manieren maken:

- Met de [Widget](../widgets/info-widgets.md#-audio-video-notes-widget-android). Als de notitie moet worden gekoppeld aan uw huidige geografische positie.
- Met het [Contextmenu](../map/map-context-menu.md#-record-av-note-android) van een punt op de kaart. Als de notitie moet worden gekoppeld aan het geselecteerde punt op de kaart.


#### 1. Maken en koppelen aan uw huidige positie {#1-create-and-tie-to-your-current-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget audio-/videoplug-in Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

De <Translate android="true" ids="map_widget_av_notes"/> widget wordt gebruikt om een notitie te maken die gekoppeld is aan uw huidige positie, en zo te voorkomen dat u op zoek moet naar een geschikt punt voor een notitie op de kaart. Tik gewoon op de widget en maak de notitie.

De functies die de <Translate android="true" ids="map_widget_av_notes"/> widget biedt, zijn afhankelijk van hoe deze is geconfigureerd in het menu [Scherm configureren](../widgets/info-widgets.md#-audio-video-notes-widget-android). De widget opent ofwel direct de camera om een notitie te maken, volgens de ingestelde instellingen, of vraagt eerst in welk formaat een notitie moet worden gemaakt en opent vervolgens het betreffende opnamedialoogvenster.


#### 2. Maken en koppelen aan geselecteerde geolocatie {#2-create-and-tie-to-selected-geolocation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plug-in audio-/video Contextmenu notitie maken](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

Om een notitie te maken die gekoppeld is aan een geselecteerd punt op de kaart, gebruikt u het [Contextmenu](../map/map-context-menu.md#-record-av-note-android) van het punt:

1. Tik lang op een punt op de kaart en het [Contextmenu](../map/map-context-menu.md) wordt geopend.
2. Tik op **Acties** en selecteer een van de beschikbare opties uit de lijst:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - om een audionotitie te maken en deze te koppelen aan het geselecteerde punt op de kaart;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - om een videonotitie te maken en deze te koppelen aan het geselecteerde punt op de kaart;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - om een fotonotitie te maken en deze te koppelen aan het geselecteerde punt op de kaart.

3. Afhankelijk van het geselecteerde formaat van de notitie, wordt het betreffende opnamedialoogvenster geopend.


#### Opnamedialoogvenster {#recorder-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Videonotitie-recorder](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

</TabItem>

</Tabs>

Voor *audio- en videonotities* wordt respectievelijk de audiorecorder of videorecorder weergegeven. U kunt:

- De opname stoppen met het *Stop*-pictogram.
- De duur van de opname bekijken.
- Het videoscherm tonen of verbergen.

Het is mogelijk om de opname te stoppen met een tik op de <Translate android="true" ids="map_widget_av_notes"/> widget, ongeacht of het contextmenu of de widget de opname heeft gestart. Voor *een fotonotitie* verschijnt de camerafunctionaliteit en kunt u een foto maken, het resultaat bekijken, accepteren en opslaan, of een nieuwe foto maken.

:::info Opmerking
Automatisch worden alle foto-, audio- en video-opnamen opgeslagen in: <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/> tabblad.
:::


### Bekijken in Mijn plaatsen {#view-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Menu audio-/videoplug-in Mijn plaatsen](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

</TabItem>

</Tabs>

[Mijn plaatsen](../personal/myplaces.md) is een centrale opslagplaats voor al uw notities. Het stelt u in staat om al uw notities in een gesorteerde lijst te bekijken, een specifieke notitie op een kaart weer te geven en uw hele lijst met notities te beheren.


### Weergeven op de kaart {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu audio-/videoplug-in Mijn plaatsen Context](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

</TabItem>

</Tabs>

Om een specifieke notitie op de kaart weer te geven, gebruikt u de lijst met notities in Mijn plaatsen, zoekt u de gewenste notitie en tikt u erop. Als gevolg hiervan verschijnt de kaart, wordt de locatie van de notitie gemarkeerd en wordt het [Contextmenu](../plugins/audio-video-notes.md#actions-in-map-context-menu) geopend. Het is mogelijk om met de notitie te werken door de opties in het contextmenu te selecteren.


### Afspelen {#play}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plug-in audio-/video Contextmenu](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png)
![Plug-in audio-/video Menu Mijn plaatsen acties](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Om een notitie af te spelen, gebruikt u de betreffende optie in het [Contextmenu](../map/map-context-menu#-audiovideo-note-android) dat voor de notitie is geopend:

- op de kaart;
- in Mijn plaatsen.

Het gedeelte [Details](../map/map-context-menu#-audiovideo-note-android) biedt meer gegevens over de notities, zoals breedtegraad en lengtegraad, de datum en tijd van de notitie en foto's.


### Hernoemen, verwijderen, delen {#rename-delete-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plug-in audio-/video Menu Mijn plaatsen acties](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Om een notitie in Mijn plaatsen te beheren, tikt u op de verticale driepunten van de notitie in de lijst, en de beschikbare opties verschijnen, als volgt:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Open en bekijk de geselecteerde video of speel de audionotitie af.
- **<Translate android="true" ids="shared_string_share"/>**. Deel de geselecteerde notitie eenvoudig met anderen via verschillende platforms.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Toont de exacte locatie en het [Contextmenu](../plugins/audio-video-notes#actions-in-map-context-menu) van de notitie op de kaart.
- **<Translate android="true" ids="shared_string_rename"/>**. Wijzig de naam van de notitie voor eenvoudigere identificatie.
- **<Translate android="true" ids="shared_string_delete"/>**. Verwijdert notities permanent uit de toepassing.


## Opnamewidget {#recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![De widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

</TabItem>

</Tabs>

De [Audio-/videonotities-widget](../widgets/info-widgets.md#audiovideo-notes-widget) maakt notities, foto's, audio- en videobestanden en koppelt deze aan uw huidige positie. De widget heeft verschillende opties die kunnen worden ingesteld als de standaardactie die door de widget wordt uitgevoerd wanneer het scherm wordt aangeraakt.

Het toevoegen van een widget aan het scherm is noodzakelijk als u liever geen geolocatie op de kaart zoekt en notities koppelt aan uw huidige standaardlocatie. Volg de onderstaande stappen om een widget toe te voegen of aan te passen:

1. Ga naar:
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. Selecteer **<Translate android="true" ids="map_widget_left"/>** of **<Translate android="true" ids="map_widget_right"/>**.

3. Tik op **<Translate android="true" ids="map_widget_av_notes"/>**, en het contextmenu van de widget wordt geopend.

4. Selecteer de optie die u standaard wilt gebruiken door op de widget te tikken:

    - **<Translate android="true" ids="av_def_action_choose"/>** - open een selectie van opties.

    - **<Translate android="true" ids="av_def_action_audio"/>** - begin met het opnemen van een audiobericht.

    - **<Translate android="true" ids="av_def_action_video"/>** - begin met het opnemen van video.

    - **<Translate android="true" ids="av_def_action_picture"/>** - begin met het maken van foto's.

    ![De widget](@site/static/img/plugins/audio-video-notes/widget.png)


## Meerdere notities beheren {#manage-multiple-notes}

### Beheren in Mijn plaatsen {#manage-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plug-in audio-/video Menu Mijn plaatsen Drie acties](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

</TabItem>

</Tabs>

De opties op de onderste balk kunnen worden gebruikt om de lijst met notities in het menu [Mijn plaatsen](../personal/myplaces.md#audiovideo-notes) te beheren.


### Delen met GPX-waypoints {#share-with-gpx-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Delen](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

</TabItem>

</Tabs>

U kunt alle notities delen, inclusief [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes) met geselecteerde notities als waypoints op het scherm [Mijn plaatsen](../personal/myplaces.md#audiovideo-notes) door op de deelknop in het onderste menu te klikken. Er verschijnt een selectievakje naast elke notitie om specifieke notities te selecteren. Er zijn twee selectievakjes boven de notities: *A/V-notities op datum* om alle notities te selecteren en het selectievakje *Locaties*. Met het selectievakje *Locaties* kunt u een apart GPX-bestand met coördinaten en gegevens toevoegen.

Elke notitie bevat de aanmaaktijd, de hoeveelheid gegevens, en als het een opname is, de opnametijd en locatiegegevens, kunt u GPX-gegevens toevoegen.
Ondersteunde bestandsformaten: audio - **3gp**, video - **mp4**, foto -**jpg**.


### Alles weergeven op de kaart {#show-all-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![Notities op de kaart weergeven](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

Weergegeven notities op de kaart kunnen uw verhaal vertellen, waar u borden hebt gezien, welke deur u moest openen, waar de uitgang is, het optimale pad, en meer. U kunt notities [één voor één weergeven](#show-on-the-map) of allemaal tegelijk.

Gebruik de [Opname](../map/point-layers-on-map#-audio--video-points-android) kaartlaag om alle notities weer te geven of te verbergen. Als u deze inschakelt in het menu [Kaart configureren](../map/configure-map-menu), toont de Opnamelaag alle notities op de kaart.

![Geen notities op de kaart](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Notities staan op de kaart](@site/static/img/plugins/audio-video-notes/notes_on_map.png)


## Waypoints gemaakt van notities {#waypoints-created-from-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Notities en waypoints op de kaart](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)
![Waypoints op de track](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

Een waypoint wordt gemaakt wanneer een audio-, video- of fotonotitie aan een track wordt toegevoegd. Waypoints bestaan binnen een track. Als een track zichtbaar is, zijn de waypoints ook zichtbaar. Deze notities kunnen dus allemaal tegelijk op de kaart zichtbaar zijn of alleen op een specifieke zichtbare track. In het laatste geval worden de notities weergegeven als waypoints van de track.

:::note
Als een track wordt geëxporteerd, kunnen de waypoints niet worden bekeken of afgespeeld, omdat audio-/video-/fotonotities alleen op het apparaat worden opgeslagen en alleen beschikbaar zijn voor u van dat apparaat.
:::


### Waypoints maken {#create-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Handmatig een waypoint toevoegen aan track](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

Er zijn twee manieren om een waypoint te maken: automatisch en handmatig.

1. **Automatisch** wordt een waypoint gemaakt, in het geval u een audio-/video-/fotonotitie maakt terwijl de [Trip-opname](../plugins/trip-recording) bezig is, ongeacht de geolocatie of deze is gekoppeld aan de huidige positie of een willekeurige plaats, en dus, ongeacht de gebruikte middelen daarvoor: of het de [Widget](../widgets/info-widgets#-audio-video-notes-widget-android) is, of het [Contextmenu](../map/map-context-menu#-audiovideo-note-android).

    Alle automatisch toegevoegde waypoints krijgen een automatisch toegewezen naam. De naam wordt gemaakt volgens het onderstaande formaat voor een audio-/video-/fotobestand en heeft een [shortlink](https://wiki.openstreetmap.org/wiki/Shortlink). Het voorbeeld van de waypoints in de bovenstaande afbeelding toont automatisch en handmatig gemaakte waypoints, waarbij de eerste vier automatisch zijn gemaakt en de laatste handmatig.

2. **Handmatig** wordt een waypoint gemaakt via het [Contextmenu](../map/map-context-menu#-audiovideo-note-android), als volgt:

    - Selecteer de gewenste audio-/video-/fotonotitie op de kaart.
    - Tik op **Acties** en tik vervolgens op **Track toevoegen**.
    - Selecteer de track waaraan u een waypoint wilt toevoegen.
    - Het dialoogvenster *<Translate android="true" ids="quick_action_add_gpx"/>* wordt geopend en stelt u in staat om enkele eigenschappen in te stellen, zoals de naam van het waypoint, een pictogram, kleur en andere. Tik na afloop op **Opslaan**.

:::info Opmerking
U kunt namen opgeven voor elk handmatig gemaakt waypoint.
:::


### Waypoints bekijken {#view-waypoints}

- Een waypoint is beschikbaar voor weergave als een waypoint op de kaart en in de lijst met [waypoints van een specifieke track](../map/tracks/track-context-menu.md#points--waypoints). Het verwijderen van het waypoint verwijdert de betreffende audio-/video-/fotonotitie niet.

- Een audio-, video- of fotonotitie is beschikbaar voor weergave op de kaart en in de lijst met A/V-notities in [Mijn plaatsen](../plugins/audio-video-notes#view-in-my-places). Het verwijderen van de audio-, video- of fotonotitie verwijdert het betreffende waypoint niet.

- Op de kaart kan een waypoint en een audio-, video- of fotonotitie al dan niet zichtbaar zijn op de kaart. Dit wordt bepaald door welke laag momenteel is ingeschakeld voor het profiel.

- Wanneer noch de Tracks- noch de Opnamelaag is ingeschakeld, kunnen zowel waypoints als notities worden weergegeven door erop te tikken in Mijn plaatsen. In dit geval toont de kaart de locaties van de getikte notitie, of respectievelijk de locaties van alle waypoints van de getikte track.

| Zichtbaar | Laag ingeschakeld |
| --- | --- |
| Alleen waypoints | Tracks-laag |
| Waypoints en notities | Tracks- en Opnamelaag |
| Alleen notities | Opnamelaag |
| Geen | Noch Tracks, noch Opnamelaag. |


### GPX-bestand met waypoints {#gpx-file-with-waypoints}

![Waypoint in een GPX-bestand](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)

Als u het GPX-bestand van de track bekijkt die is toegevoegd met een waypoint van een audio-/video-/fotonotitie, zal het waypoint eruitzien zoals in het onderstaande voorbeeld, met de coördinaten, de tijdstempel, de naam van de betreffende notitie en de shortlink.


## Diversen {#miscellaneous}

### Bestandsnaamdetails {#file-name-details}

De <Translate android="true" ids="audionotes_plugin_name"/> plug-in genereert audio-/video-/fotobestanden in het volgende formaat:

    `{SHORTLINK_LOCATION}_Description.{avi,mp3,jpg}`

waarbij `SHORTLINK_LOCATION` de breedtegraad en lengtegraad van de locatie aangeeft waaraan het bestand is gekoppeld. De `SHORTLINK_LOCATION` is gecodeerd, volgens de specificatie van de [Shortlink](https://wiki.openstreetmap.org/wiki/Shortlink).


### Exporteren naar JOSM {#export-to-josm}

![Audio-/videonotities in JOSM](@site/static/img/plugins/audio-video-notes/josm-track-points.png)

Om alles later te bekijken, kunt u de track samen met alle mediabestanden exporteren en deze bekijken in de [JOSM-editor](https://josm.openstreetmap.de/). Houd er rekening mee dat de mediabestanden in de juiste map moeten worden geplaatst. U kunt erachter komen welke door op de video te klikken. Er verschijnt een melding dat er geen bestand beschikbaar is, plaats het juiste bestand in de opgegeven map.


## Gerelateerde artikelen {#related-articles}

- [Interactie met kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vector kaarten (kaartstijlen)](../../user/map/vector-maps.md)

> *Laatst bijgewerkt: mei 2023*