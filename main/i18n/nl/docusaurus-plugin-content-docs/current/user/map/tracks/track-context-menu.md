---
source-hash: 3010d587c123ef963a233b0b6205168ae7e8d4f377766e5140cb45e5c54f1d00
sidebar_position: 4
title:  Track Context Menu
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

Het *Track contextmenu* biedt informatie over de *[Track](../../personal/tracks/index.md)* in zowel tekst- als [grafische](#altitude--speed-graphs) vorm. Hiermee kunt u informatie toevoegen, wijzigingen aanbrengen, bewerken en diverse andere acties uitvoeren met de track. U kunt het *track contextmenu* openen door simpelweg op de gewenste track op de kaart te tikken of via het menu *[Mijn plaatsen](../../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*). Mogelijk moet u de trackmap openen en de gewenste track selecteren door erop te tikken.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Overzicht track contextmenu Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Overzicht track contextmenu iOS](@site/static/img/personal/tracks/track_context_overview_2_ios.png)

</TabItem>

</Tabs>


## Trackoverzicht {#track-overview}

Wanneer u op een track tikt, opent het eerste scherm van het *Track contextmenu* - *Overzichtstabblad*. Op dit tabblad vindt u een samenvatting van de gekozen track (*[Infopaneel](#info-panel)*) en kunt u de meest voorkomende acties met de track uitvoeren via het *[Trackactiesmenu](#track-actions)*. U kunt [beschrijving en service-informatie](#description-and-info) over uw track zien als u het Overzichtstabblad omhoog trekt.

<!--
You can [short tap](../../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map.
-->

### Infopaneel {#info-panel}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Infopaneel overzicht Android](@site/static/img/personal/tracks/track_context_info_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Infopaneel overzicht iOS](@site/static/img/personal/tracks/track_context_info_panel_ios.png)

</TabItem>

</Tabs>

Bovenaan het informatiepaneel ziet u de naam van de track en het symbool dat wordt gebruikt om deze te markeren (*alleen Android*). De tracknaam kan worden gewijzigd met de hernoemfunctie in het [Optiesmenu](#options). Sommige tracks (meestal de *[Reisgidsen](../../plan-route/travel-guides.md#manage-as-gpx-track)*) kunnen een korte *[beschrijving](#description-and-info)* en (of) een afbeelding onder de *Tracknaam* hebben. Een pijl toont de *Richting naar het dichtstbijzijnde punt van de track* vanaf [Mijn locatie](../../map/interact-with-map#my-location-and-zoom).

Het infopaneel geeft ook informatie over het volgende:

- *<Translate android="true" ids="distance"/>*. Toont de tracklengte.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. Geeft de totale som van stijgingen en dalingen tijdens de reis weer.
- *<Translate android="true" ids="altitude_range"/>*. Geeft de minimale en maximale hoogte op een track aan.

:::note
Als uw track is gemaakt in OsmAnd of een andere tracking-app (zodat de punten [`tijd` en `snelheid`](../../plugins/trip-recording#recorded-gpx-file) tags hebben), bevat het informatiepaneel ook informatie over *<Translate android="true" ids="average_speed"/>*, *<Translate android="true" ids="max_speed"/>*, *<Translate android="true" ids="shared_string_time_span"/>* (*Android*) of *<Translate ios="true" ids="total_time"/>* (*iOS*) (de tijdsduur tussen het begin- en eindpunt van de track), *<Translate android="true" ids="shared_string_time_moving"/>* (de som van de tijd tijdens het rijden).
:::

### Trackacties {#track-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track contextmenu overzicht Android 3](@site/static/img/personal/tracks/track_context_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track contextmenu overzicht iOS 3](@site/static/img/personal/tracks/track_context_actions_ios.png)

</TabItem>

</Tabs>

- **Tonen / verbergen** knoppen. Wijzigt de zichtbaarheid van de track op de kaart.
- [Uiterlijk](./appearance.md). Pas het uiterlijk van uw track aan.
- **Track bewerken** (*Android*). Opent de track in de [Routeplanner](../../plan-route/create-route.md).
- **Exporteren** (*iOS*). Hiermee kunt u [een track exporteren](../../personal/tracks/manage-tracks.md#export).
- **Routebeschrijving**. Opent de track in de *[Navigatie](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)* modus.


### Opties {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trackmenu opties Android](@site/static/img/personal/tracks/track_menu_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trackmenu opties Android](@site/static/img/personal/tracks/track_menu_options_ios.png)

</TabItem>

</Tabs>

Het menu **Opties** stelt u in staat om de geselecteerde track te beheren en te wijzigen met verschillende tools en instellingen.

- **<Translate android="true" ids="shared_string_show_on_map"/>** – Regelt de zichtbaarheid van de track op de kaart.
- **<Translate android="true" ids="shared_string_appearance"/>** – Opent het [Uiterlijk menu](../tracks/appearance.md) om de kleur, breedte en transparantie van de track aan te passen.
- **<Translate android="true" ids="follow_track"/>** (*Android*) / **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) – Start [navigatie via track](../../navigation/setup/gpx-navigation.md)., waarbij uw route wordt uitgelijnd met de geselecteerde track.

<br/>

- **<Translate android="true" ids="join_segments"/>** (*Alleen Android*) – Voegt tracksegmenten samen om gaten op te vullen.
- **<Translate android="true" ids="analyze_on_map"/>**. Opent de [Analyseer op kaart](../tracks/index.md#analyze-track-on-map-analyze-track-on-map) tool om de hoogte, snelheid en afstand van de track te inspecteren.
- **<Translate android="true" ids="analyze_by_intervals"/>** (*Alleen Android*) - Analyseert de track per tijd- of afstands[intervallen](./track-context-menu.md#split-interval).

<br/>

- **<Translate android="true" ids="shared_string_share"/>** – Exporteert de geselecteerde track in GPX-formaat.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - [Uploadt](../../plugins/osm-editing.md#upload-gps-track) de geselecteerde track naar OpenStreetMap.

<br/>

- **<Translate android="true" ids="edit_track"/>** - Opent de [Routeplanner](../../plan-route/create-route.md) tool voor het wijzigen van de track.
- **Track dupliceren** (*Alleen iOS*) – Maakt en slaat een kopie van de track op.
- **<Translate android="true" ids="rename_track"/>** – Maakt het mogelijk de tracknaam te wijzigen.
- **<Translate android="true" ids="change_folder"/>** – Verplaatst de track naar een andere map of maakt een nieuwe aan.

<br/>

- **<Translate android="true" ids="shared_string_gps_filter"/>** (*Alleen Android*) - Maakt het mogelijk [punten van de track te filteren](#gps-filter) om de nauwkeurigheid te verfijnen.
- **<Translate android="true" ids="altitude_correction"/>** (*Alleen Android*) - Om [hoogtegegevens te ontvangen](#calculate-missing-elevation), [uw track aan de wegen te koppelen](../../navigation/setup/gpx-navigation.md#attach-to-the-roads) of deze offline te berekenen (benodigde [Terreinkaarten](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*Alleen Android*) - [Simuleert uw positie](../../plugins/development.md#gpx-track-simulation) met behulp van een GPX-track.

<br/>

- **<Translate android="true" ids="shared_string_delete"/>**. Verwijdert de track.


### Beschrijving en info {#description-and-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Beschrijving en info Android](@site/static/img/personal/tracks/track_context_overview_1_andr.png) ![Beschrijving en info Android](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Beschrijving van een track iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)

</TabItem>

</Tabs>

Dit gedeelte van het tabblad *Overzicht* toont ***taggegevens*** en ***alle algemene informatie***.

- **Beschrijving**. *<Translate android="true" ids="shared_string_edit"/>* (*Android*) / *<Translate ios="true" ids="context_menu_edit_descr"/>* (*iOS*) knop wordt gebruikt om de trackbeschrijving te bewerken. Tag `desc`.

- **Algemeen**. Bevat informatie over de *GPX-bestandsgrootte*, *bestandsmap* en *aanmaakdatum* met de `time` tag.

- **Info**. Tags: *Trefwoorden* - `keywords`, &nbsp;*Link* - `link`, &nbsp;*Activiteit* - `activities`.

- **Auteur**. Tags: *Auteur* - `author`, &nbsp;*Naam* - `name`, &nbsp;*E-mailadres* - `email`, &nbsp;*Link* - `link`.

- **Auteursrecht**. Tags: *Auteursrecht* - `copyright`, &nbsp;*Auteur* - `author`, &nbsp;*Jaar* - `year`, &nbsp;*Licentie* - `license`.

- **Aanvullend**. Alle tags uit de ***extensies*** sectie:&nbsp; `address`,&nbsp; `icon`,&nbsp; `background`,&nbsp; `color`,&nbsp; `country`,&nbsp; `state`,&nbsp; `telephone`,&nbsp; `postcode`,&nbsp; `start_date`,&nbsp; `desc`.


<details>

<summary>Voorbeeld XML-code van GPX-bestand</summary>

```xml
 <metadata>
    <name>GPX File Example</name>
    <desc>Example GPX file with various tags</desc>
    <author>
      <name>Author Name</name>
      <email id="your" domain="email.com" />
      <link href="https://yourwebsite.com" />
    </author>
    <copyright author="OsmAnd B.V">
      <year>2023</year>
      <license>https://github.com/osmandapp/OsmAnd/blob/master/LICENSE</license>
    </copyright>
    <link href="http://docs.osmand.net" />
    <time>2023-12-13T12:00:00Z</time>
    <keywords>gpx, osmand, hiking</keywords>
    <extensions>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:icon>place_town</osmand:icon>
      <osmand:background>circle</osmand:background>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:country>United States</osmand:country>
      <osmand:state>Virginia</osmand:state>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      <osmand:desc>Boardwalks are walkways that cross over water or marshy ground. They are typically made of wood or other smooth materials and are accessible to wheelchairs. Please check with your park to see if there are accessible trails available. Boardwalks are often near parking lots, so expect large crowds.</osmand:desc>
    </extensions>
  </metadata>

```

</details>


### Trackinformatie Activiteit {#track-information-activity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trackinformatie Activiteit](@site/static/img/personal/tracks/track_info_activity_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trackinformatie Activiteit](@site/static/img/personal/tracks/track_info_activity_ios.png)

</TabItem>

</Tabs>


De functie *Activiteit* in OsmAnd stelt u in staat om opgenomen GPX-tracks te taggen met specifieke activiteiten voor verdere analyse en organisatie in mappen.

- [Activiteitstags voor GPX-tracks](../../plugins/trip-recording.md#recording-settings). Bij het opnemen van een GPX-track kunt u een activiteitstype toewijzen. Deze activiteitstagging helpt u om tracks initieel te categoriseren.
- [Activiteitsfilter](../../personal/tracks/smart-folder.md#search-filter). U kunt de opgenomen GPX-tracks filteren op activiteit, waardoor u zich kunt richten op het vinden van specifieke soorten opnames, zoals alle fiets- of wandeltracks.
- [Activiteitstypen beheren](../../personal/tracks/manage-tracks.md#selection-mode). U kunt het activiteitstype voor geselecteerde mappen of tracks wijzigen met behulp van de selectiemodus in het tabblad Tracks van het menu Mijn plaatsen.
- **Activiteitenlijst**. De activiteitscategorieën en -groepen zijn gedefinieerd in de bronnen van OsmAnd. Voor ontwikkelaars en bijdragers wordt de activiteitenlijst in een gestructureerd formaat bijgehouden op [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json), waarin de beschikbare activiteitsgroepen en -typen worden beschreven.


## Hoogte- / Snelheidsgrafieken {#altitude--speed-graphs}

Op het tabblad *<Translate android="true" ids="shared_string_gpx_track"/>* vindt u informatie over de track in grafische vorm. Met de schakelaar kunt u kiezen welke gegevens op de grafiek worden weergegeven: afzonderlijke gegevens over *[<Translate android="true" ids="altitude"/>](#altitude)*, over de *[Snelheid](#speed)* (deze optie is alleen beschikbaar voor opgenomen tracks) of alles samen weergeven (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

Interactie met de grafiek:

- ***Plaats een punt op de grafiek***. Als u de informatie op een bepaald punt van een track wilt zien, kunt u ergens op de grafiek tikken en verschijnt er een aanwijzer met de waarden. Tegelijkertijd verschijnt er een blauwe markering op de kaart, die naar die locatie op de track wijst.
- ***In-/uitzoomen***. U kunt [tweevingerbewegingen](../../map/interact-with-map.md#gestures) gebruiken om in en uit te zoomen voor een gedetailleerder beeld. Na het inzoomen kunt u de grafiek naar rechts en links verplaatsen, wat overeenkomt met vooruit en achteruit bewegen langs de route.
- ***Aanvullende informatie***. De rechterkant van de grafiek bevat gegevens over de laagste, hoogste en gemiddelde hoogte, helling en snelheid. Onderaan de grafiek ziet u de afstandsmarkeringen.


### Overzichtsinformatie {#overview-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Context trackmenu Grafieken Android](@site/static/img/personal/tracks/track_menu_graph_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context trackmenu Grafieken iOS](@site/static/img/personal/tracks/track_menu_graph_2_ios.png)

</TabItem>

</Tabs>

Op het tabblad **Overzicht** ziet u parameters zoals:

- *<Translate android="true" ids="distance"/>*. De som van de totale afgelegde afstand op de track, of de lengte van de track zelf.
- *<Translate android="true" ids="shared_string_time_span"/>*. Het tijdsinterval tussen het begin- en eindpunt van de track.
- *<Translate android="true" ids="shared_string_start_time"/>* De exacte tijd waarop de opname van de track begint.
- *<Translate android="true" ids="shared_string_end_time"/>*. De eindtijd van de trackopname.

De actieve **knoppen** geven toegang tot acties zoals:

- De knop **<Translate android="true" ids="analyze_on_map"/>** opent het [Trackanalysemenu](../tracks/index.md#analyze-track-on-map) voor de track.
- De knop **<Translate android="true" ids="shared_string_options"/>** opent een menu met:

  - *Bewerken* opent de track in de [Routeplanner](../../plan-route/index.md).
  - *Verwijderen* stelt u in staat het geselecteerde trackelement te verwijderen.
  - *Interval splitsen* opent de [Interval splitsen functie](#split-interval) voor de track.


### Snelheid {#speed}

:::note Alleen opgenomen tracks
Dit tabblad is alleen zichtbaar op opgenomen tracks. Punten op dit type track hebben **[`speed`](../../plugins/trip-recording#recorded-gpx-file)** tags.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trackgrafiek Snelheid Android](@site/static/img/personal/tracks/track_graph_speed_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trackgrafiek Snelheid iOS](@site/static/img/personal/tracks/track_graph_speed_3_ios.png)

</TabItem>

</Tabs>

De **Snelheid** grafiek toont metrische gegevens zoals:

- *<Translate android="true" ids="average_speed"/>*. Geeft de gemiddelde snelheid tijdens de reis aan.
- *<Translate android="true" ids="max_speed"/>*. Toont de maximale snelheid tijdens de reis.
- *<Translate android="true" ids="moving_time"/>*. Toont de totale tijd tijdens de reis alleen in beweging.
- *<Translate android="true" ids="distance_moving"/>*. Geeft de aangepaste afstand van de reis aan.


### Hoogte {#altitude}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trackgrafiek hoogte Android](@site/static/img/personal/tracks/track_graph_altitude_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trackgrafiek hoogte iOS](@site/static/img/personal/tracks/track_graph_altitude_2_ios.png)

</TabItem>

</Tabs>

De **Hoogte** grafiek toont metrische gegevens zoals:

- *<Translate android="true" ids="average_altitude"/>*. Geeft de gemiddelde hoogte boven zeeniveau op de route aan.
- *<Translate android="true" ids="altitude_range"/>*. De hoogste en laagste hoogte geregistreerd op de route.
- *<Translate android="true" ids="altitude_ascent"/>*. De cumulatieve hoogtewinst boven zeeniveau langs de route.
- *<Translate android="true" ids="altitude_descent"/>*. Het cumulatieve hoogteverlies langs de route.

**Hoogtegegevens ophalen.**
Als er *geen hoogte-informatie* op de route is, kunt u deze op de volgende manieren toevoegen:

- *Knop Hoogte berekenen → [Gebruik nabijgelegen wegen](../../plan-route/create-route.md#get-elevation-data)*. Maakt gebruik van een offline kaart om nabijgelegen wegen en hoogtegegevens te vinden. Hiermee kunt u de geometrie van de track aanpassen.
- [Gebruik terreinkaarten](#calculate-missing-elevation). Maakt gebruik van terreinkaarten om hoogtegegevens te verkrijgen. De trackgeometrie blijft ongewijzigd.


### Ontbrekende hoogte berekenen {#calculate-missing-elevation}

:::note OsmAnd Pro-abonnement
De offline functie voor het berekenen van hoogte is alleen beschikbaar voor [**OsmAnd Pro-abonnees**](../../purchases/android.md#pro-features) <ProFeature />.
:::

<InfoAndroidOnly />

Deze functie stelt u in staat om het hoogteprofiel voor GPX-tracks offline te berekenen voor elk terrein tussen 70 graden noorderbreedte en 70 graden zuiderbreedte, gebaseerd op [Terreinkaartgegevens](../../plugins/topography.md#download-maps). *Terreinkaarten (3D) moeten eerder zijn gedownload*.

1. Download [Terreinkaarten (3D)](../../plugins/topography.md#download-maps) voor de gewenste regio.
2. Als de track geen hoogtegegevens bevat, ga dan naar het trackcontextmenu (*Trackcontextmenu → <Translate android="true" ids="shared_string_gpx_track,altitude,calculate_altitude"/>*), selecteer *Terreinkaarten gebruiken*, en na de berekening krijgt u een trackgrafiek op basis van de terreingegevens.

    ![Trackgrafiek hoogte Android](@site/static/img/personal/tracks/calculate_elevation_2.png) ![Trackgrafiek hoogte Android](@site/static/img/personal/tracks/calculate_elevation_10.png) <!--![Trackgrafiek hoogte Android](@site/static/img/personal/tracks/calculate_elevation_4.png) ![Trackgrafiek hoogte Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->

3. Als u een route maakt met de [Routeplanner](../../plan-route/create-route.md#graph) tool met behulp van de *Rechte lijn* methode en er geen hoogtegegevens op de grafiek zijn, moet u:
    - Tik op *Hoogtegegevens ophalen* en selecteer vervolgens *Terreinkaarten gebruiken*.
    - Na de berekening krijgt u de complete Hoogte-/Hellinggrafiek van uw route op basis van terreingegevens.

  ![Trackgrafiek hoogte Android](@site/static/img/personal/tracks/calculate_elevation_9.png) ![Trackgrafiek hoogte Android](@site/static/img/personal/tracks/calculate_elevation_5.png)


## Punten / Waypoints {#points--waypoints}

Waypoints zijn een van de typen punten die beschikbaar zijn op de kaart. Over het algemeen kunnen het trackpunten zijn die deel uitmaken van GPX-bestanden. Een gedetailleerde beschrijving is beschikbaar in het artikel [punten op de kaart](../../map/point-layers-on-map.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Context trackmenu Punten Android](@site/static/img/personal/tracks/track_context_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context trackmenu Punten iOS](@site/static/img/personal/tracks/track_context_points_ios.png)

</TabItem>

</Tabs>

In dit tabblad *Punten*:

- [Toon trackpuntgegevens](#display-custom-gpx-tags) en wijzig uw trackpunten (waypoints en routepunten), [verwijder ze en voeg](#points--waypoints) waypoints toe aan een track.
- Maak en wijzig [Groep (map) van punten](#waypoint-groups).


### Waypoint toevoegen aan een track {#add-waypoint-to-a-track}

Waypoints kunnen worden toegevoegd aan de momenteel opgenomen track of aan elke track uit de lijst [*Mijn plaatsen → Tracks*](../../personal/tracks/manage-tracks.md):

- Gebruik het [kaartcontextmenu](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint).
  - Waypoints worden automatisch weergegeven als de geselecteerde track op de kaart is ingeschakeld.
  - [Lang tikken](../../map/map-context-menu.md#select-any-point-long-tap) op de kaart op een willekeurige gekozen locatie om een waypoint te maken.
  - U kunt informatie over het waypoint instellen in het geopende [kaartcontextmenu](../../map/map-context-menu.md#-add--edit-track-waypoint).

- Gebruik de knop [Waypoint toevoegen](#points--waypoints) van het trackcontextmenu.

- Voeg een waypoint toe als een [Snelle actie](../../widgets/quick-action.md#my-places) knop.

#### Waypoint maken {#create-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Waypoint toevoegen](@site/static/img/personal/tracks/add_waypoint_1_andr.png) ![Waypoint toevoegen](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Waypoint toevoegen](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png) ![Waypoint toevoegen](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

Tik op de knop *Waypoint toevoegen* om het scherm voor het maken van waypoints te openen (dit scherm is bekend van het [Favorieten Contextmenu](../../personal/favorites.md#create)).

1. **Voeg** *Naam* van het waypoint, *Adres* van de geselecteerde locatie en *Beschrijving* hiervoor toe (optioneel).
2. **Selecteer** Groep.

    - Selecteer eerder gemaakte groepscategorieën of maak een nieuwe aan.
    - Maak een naam en uiterlijk voor de nieuwe waypointgroep. Dit wordt in de applicatie ook wel *nieuwe categorie* genoemd.
    - Het **pictogram**, de **pictogramkleur** en de **vorm** worden gebruikt voor alle nieuwe waypoints die aan de groep worden toegevoegd.

3. **Uiterlijk** instelling:

    - Selecteer een [**pictogram**](../../personal/favorites.md#favorite-icons) uit de lijst met alle POI-categoriepictogrammen.
    - Selecteer **Kleur** van het pictogram.
    - Selecteer vervolgens de **Vorm** van het pictogram: *Cirkel, Achthoek, Vierkant*.

4. **Vervang** een ander punt hiermee, indien nodig.


### Acties met groepen {#actions-with-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trackmenu Groepsmenu Android](@site/static/img/personal/tracks/track_menu_group_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trackmenu Groepsmenu iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

Het *drie-puntenmenu* ( &#8285; ) opent het waypoint *Groepsmenu*.

**Acties:**

- **<Translate android="true" ids="shared_string_show_on_map"/>** - Hiermee kunt u groepswaypoints op de kaart weergeven of niet weergeven. Of u kunt de [schermknop](#points--waypoints) gebruiken om groepswaypoints op de kaart weer te geven of weg te laten.
- **<Translate android="true" ids="shared_string_rename"/>** - Wijzig de naam van de groep.
- **<Translate android="true" ids="change_default_appearance"/>** - Wijzig de weergaveopties voor een groep waypoints.
- **<Translate android="true" ids="add_group_to_markers"/>** of **Verwijderen** (*Alleen Android*) - Verplaats groepswaypoints naar de lijst [Kaartmarkeringen](../../personal/markers.md).
- **<Translate android="true" ids="copy_to_map_favorites"/>** (*Alleen Android*) - Verplaats groepswaypoints naar [Favorieten](../../personal/favorites.md).
- **<Translate android="true" ids="add_to_navigation"/>** (*Alleen Android*) - Creëert een route tussen waypoints. Het eerste en laatste punt worden het begin en einde van de route, en de rest wordt omgezet in tussenpunten.
- **<Translate android="true" ids="shared_string_delete"/>** - Verwijder een groep waypoints.


### Waypointgroepen {#waypoint-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trackmenu Groepskaart Android](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![Trackmenu Groepskaart Android](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trackmenu Groepskaart iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![Trackmenu Groepskaart iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>

Beheer de zichtbaarheid van groepen op de kaart: als u één track verbergt, wordt de hele groep ook verborgen.

U kunt groepswaypoints op de kaart in- of uitschakelen met de knop in de rechterbovenhoek van het contextmenu van de track op de kaart. Tik erop en selecteer de gewenste actie.

### Aangepaste GPX-tags weergeven {#display-custom-gpx-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Punten](@site/static/img/personal/tracks/waypoints_tag_info_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Punten](@site/static/img/personal/tracks/waypoints_tag_info_ios.png)

</TabItem>

</Tabs>


<details>

<summary>Voorbeeld XML-code van Waypoint-tags</summary>

```xml
  <wpt lat="40.123456" lon="-73.987654">
    <ele>100</ele>
    <time>2024-04-04T13:12:11Z</time>
    <name>Waypoint 1</name>
    <desc>Long description</desc>
    <link href="http://docs.osmand.net" />
    <type></type>
    <cmt>Short comment for the waypoint.</cmt>
    <extensions>
      <osmand:country>United States</osmand:country>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:background>circle</osmand:background>
      <osmand:icon>place_town</osmand:icon>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:state>Virginia</osmand:state>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
    </extensions>
  </wpt>
```

</details>

<details>

<summary>Voorbeeld XML-code van Routepunt-tags</summary>

```xml
  <rte>
    <name>Route 1</name>
    <desc>A sample route</desc>
    <rtept lat="40.123456" lon="-73.987654">
      <ele>110</ele>
      <name>Route Point 1</name>
      <desc>Point 1 of the route</desc>
      <extensions>
        <osmand:country>United States</osmand:country>
        <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
        <osmand:color>#ff4e4eff</osmand:color>
        <osmand:background>circle</osmand:background>
        <osmand:icon>place_town</osmand:icon>
        <osmand:postcode>23284</osmand:postcode>
        <osmand:telephone>(804) 828-0100</osmand:telephone>
        <osmand:state>Virginia</osmand:state>
        <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      </extensions>
    </rtept>
  </rte>
```

</details>

**Tags:**

| Parameter | Beschrijving |
| --- | --- |
| `lat` | **Breedtegraad** is een van de geografische coördinaten waarmee u een locatie kunt bepalen. |
| `lon` | **Lengtegraad** is een andere van de geografische coördinaten waarmee u een locatie kunt bepalen. |
| `time` | **Tijdstempel** is de datum en tijd waarop het punt is vastgelegd. |
| `name` | **Naam** is de naam van het punt. Alle tekens zijn toegestaan. |
| `desc` | **Beschrijving** bevat aanvullende informatie over het punt. |
| `type` | **Selecteer groep** is de naam van de OsmAnd-map waarin dit waypoint is opgeslagen. |
| `cmt` | **Opmerking** is een korte opmerking bij een punt. |
| `link` | **Link** is een link naar eventuele bronnen. |
| `ele` | **Hoogte** is een punthoogte. |


**Extensies:**

| Extensie | Beschrijving |
| --- | --- |
| `osmand:icon` | **Pictogram** is de naam van het pictogram dat u hebt geselecteerd. |
| `osmand:color` | **Kleur** is de kleur in HEX-formaat. |
| `osmand:background` | **Achtergrond** is de vorm van het pictogram, zoals een cirkel, achthoek of vierkant. |
| `osmand:country` | **Land** is de naam van het land. |
| `osmand:address` | **Adres** is het adres. |
| `osmand:postcode` | **Postcode** is de postcode. |
| `osmand:telephone` | **Telefoon** is het telefoonnummer. |
| `osmand:state` | **Staat** is de naam van de staat. |
| `osmand:start_date` | **Startdatum** is de planningsdatum van een punt. |

Waypoints worden samen met de track opgeslagen in het [GPX-bestand](../../../technical/osmand-file-formats/osmand-gpx.md). Elk van deze waypoints heeft zijn eigen set tags voor beschrijving. Alle tags die direct verband houden met de beschrijving van waypoints en die direct in de OsmAnd-applicatie kunnen worden bewerkt, staan in dit gedeelte vermeld.
Om de Waypoint-beschrijving te wijzigen, kunt u een van de volgende manieren volgen:

1. Zoek de gewenste track in de lijst van het tabblad *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.
2. Tik op de track op de kaart, als deze is opgenomen in de [lijst met zichtbare](../tracks/index.md#display-tracks-on-the-map).
3. Tik op het gewenste waypoint als het [zichtbaar](../../personal/tracks/manage-tracks.md#track-menu) is op de kaart.

    Vervolgens in het [Tracks Contextmenu](./track-context-menu.md) tikt u op *punten*, het veld van de gewenste map met beschikbare waypoints en het Waypoint dat u zoekt. Selecteer menu *Acties →* **GPX-waypoint bewerken** en breng wijzigingen aan. U kunt de aanmaakdatum van een punt, *tijdstempel*, niet wijzigen in de applicatie.

**Voorzieningstags** die aanvullende informatie beschrijven, zoals openingstijden of telefoonnummer, specifiek voor de POI, halen die informatie uit OpenStreetMap-gegevens of gegevens die u hebt ingevoerd bij het maken van de POI. U kunt dergelijke tags en [aangepaste tags](#display-custom-gpx-tags) alleen bewerken in de code van het GPX-bestand, die u kunt openen met elke teksteditor op uw apparaat.


## Interval splitsen {#split-interval}

<InfoAndroidOnly />

U kunt de track in intervallen verdelen, zoals afstand en tijd, en deze analyseren.

Splits de track op afstand of tijdsinterval.
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>*

![Track splits interval scherm Android](@site/static/img/personal/tracks/track_split_interval_android.png) ![Track splits interval scherm tijd Android](@site/static/img/personal/tracks/track_split_interval_time_android.png)


## GPS-filter {#gps-filter}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![GPS-filterscherm Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

Dit filter stelt u in staat om uw trackstatistieken te verbeteren door onnodige of onjuiste gegevens uit te sluiten. U kunt trackpunten filteren die niet passen bij uw trackparameters, en als gevolg daarvan een nauwkeurigere grafiek en visuele routelijn krijgen zonder vervorming of opnameruis. U kunt wijzigingen aanbrengen met filters zoals *Vloeiend maken*, *Snelheid*, *Hoogte* en *GPS-precisie*, die gefilterde punten van de huidige track verbergen. Bovendien kunt u in het menu *Statistieken* controleren hoe uw wijzigingen op de grafiek worden weergegeven voordat u ze opslaat. U kunt ook *Terugzetten naar origineel* en *Opslaan als kopie* van uw track in dit filter zonder de originele op te slaan.

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location-and-zoom), [my location button](../../map/interact-with-map.md#my-location-and-zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

De Android GPS Filter app-pagina bevat het volgende:

- Een kaart met een opgeslagen track en een extra knop, *Mijn tracklocatie* (deze lijnt een track uit naar het midden van een kaart).
- Knoppen *Vernieuwen* en *Menu* bovenaan (*Menu* opent het veld *Actie* onderaan de pagina).
- Blokken *Filter*, *Statistieken*, *Actie*.


### Filtermenu {#filter-menu}

In dit menu kunt u enkele parameters van uw track wijzigen, zoals *Vloeiend maken*, *Snelheid*, *Hoogte* of *GPS-precisie* met behulp van filters. Het menu is verdeeld in een *Punten-gedeelte* en een *Acties-gedeelte*.

| ***Punten*** |
|:------------|
|Dit gedeelte toont het aantal punten na filtering en het totale aantal punten op de geselecteerde track voordat filters werden gebruikt.|
|![GPS-filterscherm puntennummers Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***Acties*** |
|*Vloeiend maken*. Stelt de drempelafstand tussen punten in. Trackpunten die ten minste deze afstand van het laatst zichtbare punt verwijderd zijn, worden verborgen. Alle punten op de track die op een afstand van elkaar liggen die kleiner is dan de door het filter geselecteerde afstand, worden verborgen. Trackpunten worden geteld vanaf het laatst zichtbare punt. Let op, hoge drempels kunnen de trackgeometrie te veel vereenvoudigen.|
|![GPS-filter vloeiend maken nummers Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Snelheid*. Alleen de trackpunten die overeenkomen met het geselecteerde snelheidsinterval worden weergegeven op de grafiek en de kaart, de andere worden verborgen.|
|![GPS-filter snelheidsnummers Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*Hoogte*. Alleen de trackpunten die overeenkomen met het geselecteerde hoogte-interval worden weergegeven op de grafiek en de kaart, de andere worden verborgen.|
|![GPS-filter hoogtenummers Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*GPS-precisie*. Stelt de maximaal toegestane waarde voor HDOP in. Punten met een hogere waarde worden verborgen.|
|![GPS-filter precisienummers Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) |


### Statistieken {#statistics}

![GPS-filtergrafiek Android](@site/static/img/personal/tracks/gps_filter_graph_statistics_andr.png)

Het tabblad Statistieken toont informatie over de **gewijzigde** track, wat betekent de track zonder gefilterde waarden. Deze wordt weergegeven in de statistiekblokken en grafiekgegevens.

- Het *Gegevens*-gedeelte toont statistieken die vergelijkbaar zijn met het [Filtermenu](#filter-menu).
- Het *Grafiek*-gedeelte toont drie soorten grafieken per parameter: Overzicht, Hoogte en Snelheid. Deze functionaliteit is een kopie van de [trackgrafiek](#altitude--speed-graphs).

### Acties {#actions}

![GPS-filteractie Android](@site/static/img/personal/tracks/gps_filter_action_android.png)

De lijst met acties is beschikbaar onderaan het tabblad **Filter** of **Statistieken**. OsmAnd past alle wijzigingen die aan de track zijn aangebracht toe zonder het bestand bij te werken, maar u kunt de wijzigingen handmatig opslaan.

- *<Translate android="true" ids="reset_to_original"/>*. Hiermee kunt u de parameters terugzetten naar hun oorspronkelijke staat.
- *<Translate android="true" ids="save_as_copy"/>*. Hiermee kunt u de track als een nieuwe opslaan.
- *<Translate android="true" ids="save_changes_into_file"/>*. Hiermee kunt u de track overschrijven met de nieuwe parameters.


## Gerelateerde artikelen {#related-articles}

- [GPX-tracks](../../personal/tracks/manage-tracks.md)
- [Tracks op de kaart](./track-context-menu.md)
- [Navigatie via track](../../navigation/setup/gpx-navigation.md)
- [Route plannen](../../plan-route/index.md)
- [Trip Recording plugin](../../plugins/trip-recording.md)
- [Analyseren op kaart](../index.md#analyze-track-on-map)

> *Laatst bijgewerkt: november 2024*