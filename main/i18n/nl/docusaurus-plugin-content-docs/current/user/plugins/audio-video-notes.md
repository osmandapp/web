---
source-hash: 494c0f42fb3a14331085fa79522a6bbb96cda5013289fdce88b34a3330403762
sidebar_position: 3
title:  Audio / Videonotities
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

Uw audio- en video-opnames kunnen in de toekomst nuttig zijn, bijvoorbeeld als herinneringen aan waar u bent geweest. Ze zijn beschikbaar in het menu [Mijn Plaatsen](../personal/myplaces.md) en zijn zichtbaar wanneer de Audio-/Videonotities-plugin is ingeschakeld.

De Audio-/Videonotities-plugin breidt de functionaliteit van OsmAnd uit door u in staat te stellen uw eigen notities te maken in verschillende formaten, zoals foto's, video of audio, en deze te koppelen aan hun geografische locatie of huidige locatie. U kunt alleen opnames maken wanneer de plugin is ingeschakeld, met behulp van de [Audio-/Videonotities-widget](../widgets/info-widgets.md#audiovideo-notes-widget) en/of het [contextmenu van de kaart](../map/map-context-menu.md#-audiovideo-note). De ontvangen gegevens worden automatisch opgeslagen in [Mijn Plaatsen](../personal/myplaces.md), van waaruit ze gemakkelijk kunnen worden beheerd en gedeeld.  

Alle gemaakte audio- en videonotities vormen de Opnamelaag. Wanneer deze op de kaart is ingeschakeld, verandert de weergave van de opgenomen gegevens en zijn er meer instellingen om de opnames te beheren. In de Opnamelaag worden audio- en videonotities als POI's op de kaart geplaatst, waardoor een gebruikersverhaal ontstaat dat alleen zichtbaar is voor de eigenaar van het apparaat.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Introductie audio-videonotities](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>


## Vereiste Configuratieparameters {#required-setup-parameters}

De audio-/videonotities worden geleverd met de Audio-/videonotities-plugin en vereisen de volgende configuratie:

1. Schakel de [Audio-/videonotities-plugin](../plugins/index.md#enable--disable) in in de sectie Plugins van het *Hoofdmenu*.  
2. Voeg een [widget](../widgets/info-widgets.md#audiovideo-notes-widget) toe aan het kaartscherm voor het meest handige gebruik.
3. Pas indien nodig de [opname-instellingen](#plugin-settings) voor elk profiel aan.  


## Plugin-instellingen {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*  

![Instellingen audio-videoplugin Foto Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

Voor elk profiel kunt u de *audio- en video-opnameopties* configureren.  

| Parameter | Beschrijving |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>**  | U kunt kiezen of u de systeemapp of de OsmAnd-camera wilt gebruiken om <Translate android="true" ids="photo_notes"/> te maken.|
| **<Translate android="true" ids="av_camera_pic_size"/>** | Stelt de grootte in van de te maken foto's. De cameramogelijkheden van het apparaat bepalen het aantal beschikbare opties. Als er geen optie is geselecteerd, gebruikt de app de grootte uit de systeeminstellingen van de camera van het apparaat. |
| **<Translate android="true" ids="av_camera_focus"/>** | Stelt de methode in voor hoe de camera scherpstelt. Het aantal beschikbare opties wordt bepaald door de mogelijkheden van de apparaatcamera. In principe zijn er de volgende drie opties: *<Translate android="true" ids="av_camera_focus_auto"/>*; *<Translate android="true" ids="av_camera_focus_continuous"/>*; en *<Translate android="true" ids="av_camera_focus_infinity"/>*. **Autofocus** is de meest populaire en stelt de automatische modus voor de camera in; **continu** zorgt ervoor dat de camera bewegingen detecteert en dienovereenkomstig opnieuw scherpstelt; en de **oneindig**-optie zorgt ervoor dat de lens op een afstand scherpstelt en objecten dus scherp houdt, ongeacht hoe ver ze zijn. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | Indien ingeschakeld, wordt er een geluid geproduceerd wanneer de camera een foto maakt. Let op, zoals vereist door de privacywetgeving, **zullen apparaten in sommige landen geen schakelaar hebben om het sluitergeluid van de camera uit te zetten**. Als u de systeemapp gebruikt, moet het geluid in de camera-app worden uitgeschakeld. |
| **<Translate android="true" ids="av_audio_format"/>** | Biedt een keuze aan formaten voor een audiobestand. Het aantal beschikbare opties, en welke standaard wordt gebruikt, wordt bepaald door de parameters van een specifiek apparaat. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | Deze optie biedt een keuze aan bitrate-opties voor een te maken audiobestand. De beschikbare bitrate-opties variëren van 16kbps tot 128 kbps, of de Standaard-optie. De Standaard-parameter wordt bepaald door de "standaard" microfooninstellingen van uw apparaat. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | Indien ingeschakeld, gebruikt OsmAnd de systeemapplicatie om video op te nemen in <Translate android="true" ids="video_notes"/>. |
| **<Translate android="true" ids="av_video_quality"/>** | Dit biedt een keuze aan opties die het formaat van het uitvoerbeeld bepalen. Het bereik van beschikbare opties wordt bepaald door de parameters van een specifiek apparaat. De standaardoptie is de *Hoogste kwaliteit*-optie.  |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | Indien ingeschakeld, worden oude video-opnames automatisch overschreven en vervangen door nieuwe video-opnames als de opslaggrootte de limiet bereikt.  |
| **<Translate android="true" ids="rec_split_clip_length"/>** | Dit bepaalt de maximale tijdslimiet voor opgenomen videoclips. Er zijn opties met een bereik van 1 minuut tot 30 minuten.|
| **<Translate android="true" ids="rec_split_storage_size"/>** | Dit stelt de grootte in van de opslag die bedoeld is voor opgenomen video. Er zijn opties met een bereik van 1024 MB tot 62 GB. Een specifiek bereik van opties, en de standaardoptie, wordt bepaald door de parameters van een specifiek apparaat. Een systeembericht zal u eraan herinneren dat de opslaggrootte de ingestelde limiet bereikt. |
| **<Translate android="true" ids="notes"/>** | Deze optie leidt u door naar de [Audio-/videonotities in Mijn Plaatsen](../personal/myplaces.md) - de centrale opslag van alle Audio-/videonotities die ooit in de app zijn gemaakt. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | U kunt de standaardwaarden instellen voor alle instellingen van de A/V-notities.  |
| **<Translate android="true" ids="copy_from_other_profile"/>** | Opent een dialoogvenster om een profiel te selecteren waarvan de opnameconfiguratie voor Audio-/videonotities wordt gekopieerd en ingesteld voor het huidige profiel. |


## Een Enkele Notitie Maken {#create-a-single-note}

U kunt een foto-, video- en audionotitie maken op een van de volgende manieren:

- Met de [Widget](../widgets/info-widgets.md#audiovideo-notes-widget). Als de notitie gekoppeld moet worden aan uw huidige geografische positie.
- Met het [Contextmenu](../map/map-context-menu.md#overview) van een punt op de kaart. Als de notitie gekoppeld moet worden aan het geselecteerde punt op de kaart.


### Maken & Huidige Positie Vastpinnen {#create-&-pin-current-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio-videoplugin widget Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

De <Translate android="true" ids="map_widget_av_notes"/> widget wordt gebruikt om een notitie te maken die gekoppeld is aan uw huidige positie, en zo te voorkomen dat u op de kaart naar een geschikt punt voor een notitie moet zoeken. Tik gewoon op de widget en maak de notitie.  

De functies die de <Translate android="true" ids="map_widget_av_notes"/> widget biedt, hangen af van hoe deze is geconfigureerd in het menu [Configureer scherm](../widgets/info-widgets.md#audiovideo-notes-widget). De widget opent ofwel onmiddellijk de camera om een notitie te maken, volgens de ingestelde instellingen, of vraagt eerst in welk formaat een notitie moet worden gemaakt en opent dan het respectievelijke opnamedialoogvenster.


### Maken & Geselecteerde Locatie Vastpinnen {#create-&-pin-selected-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contextmenu audio-videoplugin notitie maken](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

Om een notitie te maken die gekoppeld is aan een geselecteerd punt op de kaart, gebruikt u het [Contextmenu](../map/map-context-menu.md#-record-av-note) van het punt:

1. Tik lang op een punt op de kaart en het [Contextmenu](../map/map-context-menu.md) wordt geopend.
2. Tik op **Acties** en selecteer een van de beschikbare opties uit de lijst:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - om een audionotitie te maken en deze te koppelen aan het geselecteerde punt op de kaart;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - om een videonotitie te maken en deze te koppelen aan het geselecteerde punt op de kaart;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - om een fotonotitie te maken en deze te koppelen aan het geselecteerde punt op de kaart.

3. Afhankelijk van het geselecteerde formaat van de notitie, wordt het respectievelijke opnamedialoogvenster geopend.


### Opnamedialoogvenster {#recorder-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Videonotitie-recorder](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

</TabItem>

</Tabs>

Voor *audio- en videonotities* wordt respectievelijk de audio- of videorecorder weergegeven. U kunt:

- De opname stoppen met het *Stop*-icoon.
- De duur van de opname bekijken.
- Het videoscherm tonen of verbergen.

Het is mogelijk om de opname te stoppen door op de <Translate android="true" ids="map_widget_av_notes"/> widget te tikken, ongeacht of het Contextmenu of de widget de opname heeft gestart. Voor *een fotonotitie* verschijnt de camerafunctionaliteit, en u kunt een foto maken, het resultaat bekijken, accepteren en opslaan, of een nieuwe foto maken.

:::info note
Automatisch worden alle foto-, audio- en video-opnames opgeslagen in: <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/> tabblad.
:::


## Een Enkele Notitie Beheren {#manage-a-single-note}

U kunt uw informatie, gedachten, ideeën, etc. die aan een geografische plaats zijn gekoppeld, als volgt beheren:

- Bekijk alle notities als een lijst in [Mijn Plaatsen](../personal/myplaces.md).
- Toon de specifieke notitie op de kaart.
- Hernoem een notitie in Mijn Plaatsen.
- Toon alle notities [op de kaart](../map/configure-map-menu.md#map-data-layers).
- Speel de notitie af.
- Maak waypoints in een [track](../plugins/trip-recording.md#new-track-recording).
- Exporteer naar [JOSM](https://josm.openstreetmap.de/).


### Bekijken in Mijn Plaatsen {#view-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Menu Mijn Plaatsen audio-videoplugin](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

</TabItem>

</Tabs>

[Mijn Plaatsen](../personal/myplaces.md) is een centrale opslagplaats voor al uw notities. Het stelt u in staat om al uw notities in een gesorteerde lijst te bekijken, een specifieke notitie op een kaart weer te geven en uw volledige lijst met notities te beheren.


### Tonen op de Kaart {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contextmenu Mijn Plaatsen audio-videoplugin](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

</TabItem>

</Tabs>

Om een specifieke notitie op de kaart te tonen, gebruikt u de lijst met notities in Mijn Plaatsen, zoekt u de benodigde notitie en tikt u erop. Als gevolg hiervan verschijnt de kaart, wordt de locatie van de notitie gemarkeerd en wordt het Contextmenu geopend. Het is mogelijk om met de notitie te werken door de opties in het contextmenu te selecteren.


### Afspelen {#play}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contextmenu audio-videoplugin](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png)  
![Acties menu Mijn Plaatsen audio-videoplugin](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Om een notitie af te spelen, gebruikt u de respectievelijke optie in het [Contextmenu](../map/map-context-menu#overview) dat voor de notitie is geopend:

- op de kaart;
- in Mijn Plaatsen.

De sectie [Details](../map/map-context-menu#details) biedt meer gegevens over de notities, zoals breedte- en lengtegraad, de datum en tijd van de notitie, en foto's.


### Hernoemen, Verwijderen, Delen {#rename-delete-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Acties menu Mijn Plaatsen audio-videoplugin](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Om een notitie in Mijn Plaatsen te beheren, tikt u op de verticale drie puntjes van de notitie in de lijst, en de beschikbare opties verschijnen, als volgt:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Open en bekijk de geselecteerde video of speel de audionotitie af.
- **<Translate android="true" ids="shared_string_share"/>**. Deel de geselecteerde notitie eenvoudig met anderen via verschillende platforms.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Toont de exacte locatie en het Contextmenu van de notitie op de kaart.
- **<Translate android="true" ids="shared_string_rename"/>**. Wijzig de naam van de notitie voor eenvoudigere identificatie.
- **<Translate android="true" ids="shared_string_delete"/>**. Verwijdert notities permanent uit de applicatie.


## Opname-widget {#recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![De widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)  

</TabItem>

</Tabs>

De [Audio-/Videonotities-widget](../widgets/info-widgets.md#audiovideo-notes-widget) maakt notities, foto's, audio- en videobestanden en koppelt ze aan uw huidige positie. De widget heeft verschillende opties die kunnen worden ingesteld als de standaardactie die door de widget wordt uitgevoerd wanneer het scherm wordt aangeraakt.  

Het toevoegen van een widget aan het scherm is nodig als u liever niet naar geolocatie op de kaart zoekt en notities koppelt aan uw huidige standaardlocatie. Volg de onderstaande stappen om een widget toe te voegen of aan te passen:  

1. Ga naar:  
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. Selecteer  **<Translate android="true" ids="map_widget_left"/>** of **<Translate android="true" ids="map_widget_right"/>**.

3. Tik op **<Translate android="true" ids="map_widget_av_notes"/>**, en het contextmenu van de widget wordt geopend.

4. Selecteer de optie die u standaard wilt gebruiken door op de widget te tikken:

    - **<Translate android="true" ids="av_def_action_choose"/>** - open een selectie van opties.

    - **<Translate android="true" ids="av_def_action_audio"/>** - start de opname van een audiobericht.

    - **<Translate android="true" ids="av_def_action_video"/>** - start de opname van video.

    - **<Translate android="true" ids="av_def_action_picture"/>** - begin met het maken van foto's.

    ![De widget](@site/static/img/plugins/audio-video-notes/widget.png)  

**Externe invoerapparaten gebruiken (*Android*)**. Als u een [extern invoerapparaat](https://osmand.net/docs/user/map/interact-with-map#external-input-devices) gebruikt, kunt u Audio-/Videonotities starten en stoppen zonder het scherm aan te raken. Om dit te doen, wijs de actie “Audiobestand toevoegen” of “Videobestand toevoegen” toe aan een toets:<br/>
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

Zodra toegewezen, fungeert de toets als een schakelaar:
- De eerste druk start de opname van een audio- of videonotitie (afhankelijk van de geselecteerde actie).
- De tweede druk op dezelfde toets stopt de opname.

Wanneer een opname wordt gestopt via een extern invoerapparaat, wordt het Contextmenu niet weergegeven, wat het gebruik van OsmAnd in volledig handsfree-scenario's vergemakkelijkt (bijvoorbeeld tijdens het rijden op een motorfiets of autorijden).


## Meerdere Notities Beheren {#manage-multiple-notes}

### Beheren in Mijn Plaatsen {#manage-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu Mijn Plaatsen audio-videoplugin Drie acties](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

</TabItem>

</Tabs>

De opties op de onderste balk kunnen worden gebruikt om de lijst met notities in het menu [Mijn Plaatsen](../personal/myplaces.md#audiovideo-notes) te beheren.


### Delen met GPX-waypoints {#share-with-gpx-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Delen](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

</TabItem>

</Tabs>

U kunt alle Notities delen, inclusief [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes) dat geselecteerde notities als waypoints heeft, op het scherm [Mijn Plaatsen](../personal/myplaces.md#audiovideo-notes) door op de deelknop in het onderste menu te klikken. Er verschijnt een selectievakje naast elke notitie om specifieke notities te selecteren. Er zijn twee selectievakjes boven de notities: *A/V-notities op datum* om alle notities te selecteren en het selectievakje *Locaties*. Met het selectievakje *Locaties* kunt u een apart GPX-bestand met coördinaten en gegevens toevoegen.  

Elke notitie bevat de tijd waarop deze is gemaakt, de hoeveelheid gegevens, en als het een opname is, de opnametijd en locatiegegevens, kunt u GPX-gegevens toevoegen.  
Ondersteunde bestandsformaten: audio - **3gp**, video - **mp4**, foto -**jpg**.


### Alles Tonen op de Kaart {#show-all-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![Toon notities op de kaart](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

Weergegeven notities op de kaart kunnen uw verhaal vertellen, waar u borden zag, welke deur u moest openen, waar de uitgang is, het optimale pad, en meer. U kunt notities [één voor één](#show-on-the-map) of allemaal tegelijk tonen.

Gebruik de kaartlaag [Opname](../map/point-layers-on-map#-audio--video-points-android) om alle notities te tonen of te verbergen. Als u deze inschakelt in het menu [Configureer kaart](../map/configure-map-menu), toont de Opnamelaag alle notities op de kaart.

![Geen notities op de kaart](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Notities staan op de kaart](@site/static/img/plugins/audio-video-notes/notes_on_map.png)


## Waypoints Gemaakt van Notities {#waypoints-created-from-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Notities en waypoints op de kaart](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)  
![Waypoints op de track](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

Een waypoint wordt gemaakt wanneer een audio-, video- of fotonotitie aan een track wordt toegevoegd. Waypoints bestaan binnen een track. Als een track zichtbaar is, zijn de waypoints ervan ook zichtbaar. Zo kunnen deze notities allemaal tegelijk op de kaart zichtbaar zijn of alleen op een specifieke zichtbare track. In het laatste geval worden de notities weergegeven als waypoints van de track.

:::note
Als een track wordt geëxporteerd, kunnen de waypoints niet worden bekeken of afgespeeld, omdat audio-/video-/fotonotities alleen op het apparaat worden opgeslagen en alleen voor u op dat apparaat beschikbaar zijn.
:::


### Waypoints Maken {#create-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Handmatig een waypoint aan een track toevoegen](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

Er zijn twee manieren om een waypoint te maken: automatisch en handmatig.

1. **Automatisch** wordt een waypoint gemaakt, in het geval u een audio-/video-/fotonotitie maakt terwijl de [Trip opnemen](../plugins/trip-recording) bezig is, ongeacht de geolocatie als deze is gekoppeld aan de huidige positie of een andere plaats, en dus, ongeacht de middelen die daarvoor worden gebruikt: of het nu de [Widget](../widgets/info-widgets#audiovideo-notes-widget) is, of het [Contextmenu](../map/map-context-menu#-audiovideo-note).

    Alle automatisch toegevoegde waypoints krijgen een automatisch toegewezen naam. De naam wordt gemaakt volgens het hieronder gespecificeerde formaat voor een audio-/video-/fotobestand, en heeft een [shortlink](https://wiki.openstreetmap.org/wiki/Shortlink). Het voorbeeld van de waypoints in de bovenstaande figuur toont automatisch en handmatig gemaakte waypoints, waarbij de eerste vier automatisch zijn gemaakt, en de laatste - handmatig.

2. **Handmatig** wordt een waypoint gemaakt via het [Contextmenu](../map/map-context-menu#-audiovideo-note), als volgt:

    - Selecteer de vereiste audio-/video-/fotonotitie op de kaart.
    - Tik op **Acties**, en tik vervolgens op **Track toevoegen**.
    - Selecteer de track waaraan u een waypoint wilt toevoegen.
    - Het dialoogvenster *<Translate android="true" ids="quick_action_add_gpx"/>* wordt geopend en stelt u in staat om enkele eigenschappen in te stellen, zoals de naam van het waypoint, een icoon, kleur en andere. Als u klaar bent, tikt u op **Opslaan**.

:::info note
U kunt namen specificeren voor elk handmatig gemaakt waypoint.
:::


### Waypoints Bekijken {#view-waypoints}

- Een waypoint is beschikbaar voor weergave als een waypoint op de kaart en in de lijst van [waypoints van een specifieke track](../map/tracks/track-context-menu.md#points--waypoints). Het verwijderen van het waypoint verwijdert niet de respectievelijke audio-/video-/fotonotitie.

- Een audio-, video- of fotonotitie is beschikbaar voor weergave op de kaart en in de lijst van A/V-notities in [Mijn Plaatsen](../plugins/audio-video-notes#view-in-my-places). Het verwijderen van de audio-, video- of fotonotitie verwijdert niet het respectievelijke waypoint.

- Op de kaart kunnen een waypoint en een audio-, video- of fotonotitie al dan niet zichtbaar zijn. Dit wordt bepaald door welke laag momenteel is ingeschakeld voor het profiel.

- Wanneer noch de Tracks- noch de Opnamelaag is ingeschakeld, kunnen zowel waypoints als notities worden getoond door erop te tikken in Mijn Plaatsen. In dit geval toont de kaart de locaties van de aangetikte notitie, of respectievelijk, de locaties van alle waypoints van de aangetikte track.

| Zichtbaar | Laag ingeschakeld |
| --- | --- |
| Alleen waypoints | Tracks-laag |
| Waypoints en notities | Tracks- en Opnamelaag |
| Alleen notities | Opnamelaag |
| Geen | Noch Tracks-, noch Opnamelaag. |


### GPX-bestand met Waypoints {#gpx-file-with-waypoints}

![Waypoint in een GPX-bestand](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)  

Als u het GPX-bestand van de track bekijkt dat is toegevoegd met een waypoint van een audio-/video-/fotonotitie, zal het waypoint eruitzien als in het onderstaande voorbeeld, met de coördinaten, de tijdstempel, de naam van de respectievelijke notitie en de shortlink.


## Diversen {#miscellaneous}

### Details Bestandsnaam {#file-name-details}

De <Translate android="true" ids="audionotes_plugin_name"/> plugin genereert audio-/video-/fotobestanden in het volgende formaat:

    `{SHORTLINK_LOCATIE}_Beschrijving.{avi,mp3,jpg}`

waarbij `SHORTLINK_LOCATIE` de breedte- en lengtegraad specificeert van de locatie waaraan het bestand is gekoppeld. De `SHORTLINK_LOCATIE` is gecodeerd volgens de specificatie van de [Shortlink](https://wiki.openstreetmap.org/wiki/Shortlink).


### Exporteren naar JOSM {#export-to-josm}

![Audio-videonotities in JOSM](@site/static/img/plugins/audio-video-notes/josm-track-points.png)  

Om alles later te bekijken, kunt u de track samen met alle mediabestanden exporteren en ze bekijken in de [JOSM-editor](https://josm.openstreetmap.de/). Merk op dat de mediabestanden in de juiste map moeten worden geplaatst. U kunt erachter komen welke dat is door op de video te klikken. Er verschijnt een melding die aangeeft dat er geen bestand beschikbaar is, plaats het juiste bestand in de opgegeven map.  


## Gerelateerde Artikelen {#related-articles}

- [Interactie met de Kaart](../../user/map/interact-with-map.md)
- [Algemene Instellingen](../../user/personal/global-settings.md)
- [Vectorkaarten (Kaartstijlen)](../../user/map/vector-maps.md)