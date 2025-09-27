---
source-hash: d55b5a0fc81682b066b7df15d53ce4c417c7dc366dac8b7d40d13d50c6f094e7
sidebar_position: 4
title:  Contextmenu Spoor
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

Het *Contextmenu Spoor* geeft informatie over het *[Spoor](../../personal/tracks/index.md)* in zowel tekst- als [grafische](#altitude--speed-graphs) vorm. Het stelt u in staat om informatie toe te voegen, wijzigingen aan te brengen, te bewerken en diverse andere acties met het spoor uit te voeren. U kunt het *contextmenu van het spoor* openen door simpelweg op het gewenste spoor op de kaart te tikken of via het menu *[Mijn plaatsen](../../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*). Mogelijk moet u de sporenmap openen en het gewenste spoor selecteren door erop te tikken.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Overzicht contextmenu spoor Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Overzicht contextmenu spoor iOS](@site/static/img/personal/tracks/track_context_overview_2_ios.png)

</TabItem>

</Tabs>


## Spooroverzicht {#track-overview}

Wanneer u op een spoor tikt, opent het eerste scherm van het *Contextmenu Spoor* - het tabblad *Overzicht*. Op dit tabblad vindt u een samenvatting van het gekozen spoor (*[Infopaneel](#info-panel)*) en kunt u de meest voorkomende acties met het spoor uitvoeren via het *[Spooracties menu](#track-actions)*. U kunt de [beschrijving en service-informatie](#description-and-info) over uw spoor zien als u het tabblad Overzicht omhoog trekt.

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

Bovenaan het informatiepaneel ziet u de naam van het spoor en het symbool dat wordt gebruikt om het te markeren (*alleen Android*). De naam van het spoor kan worden gewijzigd met de hernoemfunctie in het [Opties menu](#options). Sommige sporen (meestal de *[Reisgidsen](../../plan-route/travel-guides.md#manage-as-gpx-track)*) kunnen een korte *[beschrijving](#description-and-info)* en/of een afbeelding onder de *Spoornaam* hebben. Een pijl toont de *Richting naar het dichtstbijzijnde punt van het spoor* vanaf [Mijn locatie](../../map/interact-with-map.md#my-location-and-zoom).

Het infopaneel geeft ook informatie over het volgende:

- *<Translate android="true" ids="distance"/>*. Toont de lengte van het spoor.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. Toont de totale som van stijgingen en dalingen tijdens de rit.
- *<Translate android="true" ids="altitude_range"/>*. Geeft de minimale en maximale hoogte op een spoor aan.

:::note
Als uw spoor is gemaakt in OsmAnd of een andere tracking-app (dus de punten hebben [`time`- en `speed`-tags](../../plugins/trip-recording#recorded-gpx-file)), zal het informatiepaneel ook informatie bevatten over *<Translate android="true" ids="average_speed"/>*, *<Translate android="true" ids="max_speed"/>*, *<Translate android="true" ids="shared_string_time_span"/>* (*Android*) of *<Translate ios="true" ids="total_time"/>* (*iOS*) (de tijdsduur tussen het begin- en eindpunt van het spoor), *<Translate android="true" ids="shared_string_time_moving"/>* (de som van de tijd tijdens het rijden).
:::

### Spooracties {#track-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contextmenu spoor overzicht Android 3](@site/static/img/personal/tracks/track_context_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contextmenu spoor overzicht iOS 3](@site/static/img/personal/tracks/track_context_actions_ios.png)

</TabItem>

</Tabs>

- **Toon / verberg** knoppen. Wijzigt de zichtbaarheid van het spoor op de kaart.
- [Uiterlijk](./appearance.md). Pas het uiterlijk van uw spoor aan.
- **Spoor bewerken** (*Android*). Opent het spoor in de [Route plannen tool](../../plan-route/create-route.md).
- **Exporteren** (*iOS*). Hiermee kunt u [een spoor exporteren](../../personal/tracks/manage-tracks.md#export).
- **Routebeschrijving**. Opent het spoor in de *[Navigatie](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)* modus.


### Opties {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu-opties spoor Android](@site/static/img/personal/tracks/track_menu_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu-opties spoor iOS](@site/static/img/personal/tracks/track_menu_options_ios.png)

</TabItem>

</Tabs>

Het menu **Opties** stelt u in staat om het geselecteerde spoor te beheren en aan te passen met verschillende tools en instellingen.

- **<Translate android="true" ids="shared_string_show_on_map"/>** – Regelt de zichtbaarheid van het spoor op de kaart.
- **<Translate android="true" ids="shared_string_appearance"/>** – Opent het [Uiterlijk menu](../tracks/appearance.md) om de kleur, breedte en transparantie van het spoor aan te passen.
- **<Translate android="true" ids="follow_track"/>** (*Android*) / **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) – Start [navigatie per spoor](../../navigation/setup/gpx-navigation.md)., waarbij uw route wordt uitgelijnd met het geselecteerde spoor.

<br/>

- **<Translate android="true" ids="join_segments"/>** (*Alleen Android*) – Voegt spoorsegmenten samen om gaten op te vullen.
- **<Translate android="true" ids="analyze_on_map"/>**. Opent de [Analyseer op kaart](../tracks/index.md#analyze-track-on-map) tool om de hoogte, snelheid en afstand van het spoor te inspecteren.
- **<Translate android="true" ids="analyze_by_intervals"/>** (*Alleen Android*) - Analyseert het spoor op tijd- of afstands[intervallen](./track-context-menu.md#split-interval).

<br/>

- **<Translate android="true" ids="shared_string_share"/>** – Exporteert het geselecteerde spoor in een GPX-formaat.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - [Uploadt](../../plugins/osm-editing.md#upload-gps-track) het geselecteerde spoor naar OpenStreetMap.

<br/>

- **<Translate android="true" ids="edit_track"/>** - Opent de [Route plannen](../../plan-route/create-route.md) tool voor het wijzigen van het spoor.
- **Spoor dupliceren** (*Alleen iOS*) – Maakt en slaat een kopie van het spoor op.
- **<Translate android="true" ids="rename_track"/>** – Hiermee kunt u de naam van het spoor wijzigen.
- **<Translate android="true" ids="change_folder"/>** – Verplaatst het spoor naar een andere map of maakt een nieuwe aan.

<br/>

- **<Translate android="true" ids="shared_string_gps_filter"/>** (*Alleen Android*) - Hiermee kunt u [punten van het spoor filteren](#gps-filter) om de nauwkeurigheid te verfijnen.
- **<Translate android="true" ids="altitude_correction"/>** (*Alleen Android*) - Om [hoogtegegevens te ontvangen](#calculate-missing-elevation), [uw spoor aan de wegen te koppelen](../../navigation/setup/gpx-navigation.md#attach-to-the-roads) of offline te berekenen (vereist [Terreinkaarten](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*Alleen Android*) - [Simuleert uw positie](../../plugins/development.md#gpx-track-simulation) met behulp van een GPX-spoor.

<br/>

- **<Translate android="true" ids="shared_string_delete"/>**. Verwijdert het spoor.


### Beschrijving en Info {#description-and-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Beschrijving en Info Android](@site/static/img/personal/tracks/track_context_overview_1_andr.png)  ![Beschrijving en Info Android](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Beschrijving van een spoor iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)

</TabItem>

</Tabs>

Dit gedeelte van het tabblad *Overzicht* toont ***taggegevens*** en ***alle algemene informatie***.

- **Beschrijving**. De knop *<Translate android="true" ids="shared_string_edit"/>* (*Android*) / *<Translate ios="true" ids="context_menu_edit_descr"/>* (*iOS*) wordt gebruikt om de spoorbeschrijving te bewerken. Tag `desc`.

- **Algemeen**. Bevat informatie over de *GPX-bestandsgrootte*, *bestandsmap* en *aanmaakdatum* met de `time`-tag.

- **Info**. Tags: *Trefwoorden* - `keywords`, &nbsp;*Link* - `link`, &nbsp;*Activiteit* - `activities`.

- **Auteur**. Tags: *Auteur* - `author`, &nbsp;*Naam* - `name`, &nbsp;*E-mailadres* - `email`, &nbsp;*Link* - `link`.

- **Copyright**. Tags: *Copyright* - `copyright`, &nbsp;*Auteur* - `author`, &nbsp;*Jaar* - `year`, &nbsp;*Licentie* - `license`.

- **Aanvullend**. Alle tags uit de sectie ***extensions***:&nbsp; `address`,&nbsp; `icon`,&nbsp; `background`,&nbsp; `color`,&nbsp; `country`,&nbsp; `state`,&nbsp; `telephone`,&nbsp; `postcode`,&nbsp; `start_date`,&nbsp; `desc`.


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


### Type Spooractiviteit {#ttrack-activity-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Type Spooractiviteit](@site/static/img/personal/tracks/track_info_activity_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Type Spooractiviteit](@site/static/img/personal/tracks/track_info_activity_ios.png)

</TabItem>

</Tabs>


De functie *Activiteit* in OsmAnd stelt u in staat om opgenomen GPX-sporen te taggen met specifieke activiteiten voor verdere analyse en organisatie in mappen.

- [Activiteitstags voor GPX-sporen](../../plugins/trip-recording.md#recording-settings). Bij het opnemen van een GPX-spoor kunt u een activiteitstype toewijzen. Deze activiteitstagging helpt u bij het initieel categoriseren van sporen.
- [Activiteitenfilter](../../personal/tracks/smart-folder.md#search-filter). U kunt de opgenomen GPX-sporen filteren op activiteit, waardoor u zich kunt concentreren op het vinden van specifieke soorten opnames, zoals alle fiets- of wandelsporen.
- [Activiteitstypes beheren](../../personal/tracks/manage-tracks.md#selection-mode). U kunt het activiteitstype voor geselecteerde mappen of sporen wijzigen met de selectiemodus in het tabblad Sporen van het menu Mijn Plaatsen.
- **Activiteitenlijst**. De activiteitscategorieën en -groepen zijn gedefinieerd in de bronnen van OsmAnd. Voor ontwikkelaars en bijdragers wordt de activiteitenlijst bijgehouden in een gestructureerd formaat op [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json), waarin de beschikbare activiteitengroepen en -types worden gedetailleerd.


## Hoogte- / Snelheidsgrafieken {#altitude--speed-graphs}

Op het tabblad *<Translate android="true" ids="shared_string_gpx_track"/>* vindt u informatie over het spoor in grafische vorm. Met de schakelaar kunt u kiezen welke gegevens op de grafiek worden weergegeven: afzonderlijke gegevens over *[<Translate android="true" ids="altitude"/>](#altitude)*, over de *[Snelheid](#speed)* (deze optie is alleen beschikbaar voor opgenomen sporen) of alles samen weergeven (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

Interactie met de grafiek:

- ***Plaats een punt op de grafiek***. Als u de informatie op een bepaald punt van een spoor wilt zien, kunt u overal op de grafiek tikken en er verschijnt een aanwijzer met de waarden. Tegelijkertijd verschijnt er een blauwe markering op de kaart, die naar die locatie op het spoor wijst.
- ***In-/uitzoomen***. U kunt [tweevingerbewegingen](../../map/interact-with-map.md#gestures) gebruiken om in en uit te zoomen voor een meer gedetailleerde weergave. Na het inzoomen kunt u de grafiek naar rechts en links verplaatsen, wat overeenkomt met vooruit en achteruit bewegen langs de route.
- ***Aanvullende informatie***. De rechterkant van de grafiek bevat gegevens over de laagste, hoogste en gemiddelde hoogte, helling en snelheid. Onderaan de grafiek ziet u de afstandsmarkeringen.


### Overzichtsinformatie {#overview-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contextmenu spoor Grafieken Android](@site/static/img/personal/tracks/track_menu_graph_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contextmenu spoor Grafieken iOS](@site/static/img/personal/tracks/track_menu_graph_2_ios.png)

</TabItem>

</Tabs>

Op het tabblad **Overzicht** kunt u parameters zien zoals:

- *<Translate android="true" ids="distance"/>*. De som van de totale afgelegde afstand op het spoor, of de lengte van het spoor zelf.
- *<Translate android="true" ids="shared_string_time_span"/>*. Het tijdsinterval tussen het begin- en eindpunt van het spoor.
- *<Translate android="true" ids="shared_string_start_time"/>* De exacte tijd waarop de opname van het spoor begint.
- *<Translate android="true" ids="shared_string_end_time"/>*. De eindtijd van de spooropname.

De actieve **knoppen** geven toegang tot acties zoals:

- **<Translate android="true" ids="analyze_on_map"/>** knop opent [Analyseer spoor menu](../tracks/index.md#analyze-track-on-map) voor het spoor.
- **<Translate android="true" ids="shared_string_options"/>** knop opent een menu met:

  - *Bewerken* opent het spoor in de [Route plannen tool](../../plan-route/index.md).
  - *Verwijderen* stelt u in staat om het geselecteerde spoorelement te verwijderen.
  - *Interval splitsen* opent de [Interval splitsen functie](#split-interval) voor het spoor.


### Snelheid {#speed}

:::note Alleen opgenomen sporen
Dit tabblad is alleen zichtbaar op opgenomen sporen. Punten op dit type spoor hebben **[`speed`](../../plugins/trip-recording#recorded-gpx-file)**-tags.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Spoorgrafiek Snelheid Android](@site/static/img/personal/tracks/track_graph_speed_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Spoorgrafiek Snelheid iOS](@site/static/img/personal/tracks/track_graph_speed_3_ios.png)

</TabItem>

</Tabs>

De **Snelheid** grafiek toont statistieken zoals:

- *<Translate android="true" ids="average_speed"/>*. Geeft de gemiddelde snelheid tijdens de rit aan.
- *<Translate android="true" ids="max_speed"/>*. Toont de maximale snelheid tijdens de rit.
- *<Translate android="true" ids="moving_time"/>*. Toont de totale tijd tijdens de rit, alleen in beweging.
- *<Translate android="true" ids="distance_moving"/>*. Geeft de aangepaste afstand van de rit aan.


### Hoogte {#altitude}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Spoorgrafiek hoogte Android](@site/static/img/personal/tracks/track_graph_altitude_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Spoorgrafiek hoogte iOS](@site/static/img/personal/tracks/track_graph_altitude_2_ios.png)

</TabItem>

</Tabs>

De **Hoogte** grafiek toont statistieken zoals:

- *<Translate android="true" ids="average_altitude"/>*. Geeft de gemiddelde hoogte boven zeeniveau op de route aan.
- *<Translate android="true" ids="altitude_range"/>*. De hoogste en laagste hoogte geregistreerd op de route.
- *<Translate android="true" ids="altitude_ascent"/>*. De cumulatieve winst in hoogte boven zeeniveau langs de route.
- *<Translate android="true" ids="altitude_descent"/>*. Het cumulatieve verlies van hoogte langs de route.

**Hoogtegegevens ophalen.**
Als er *geen hoogte-informatie* op de route is, kunt u deze op de volgende manieren toevoegen:

- *Knop Hoogte berekenen → [Gebruik nabijgelegen wegen](../../plan-route/create-route.md#get-elevation-data)*. Gebruikt een offline kaart om nabijgelegen wegen en hoogtegegevens te vinden. Hiermee kunt u de geometrie van het spoor aanpassen.
- [Gebruik Terreinkaarten](#calculate-missing-elevation). Gebruikt terreinkaarten om hoogtegegevens te verkrijgen. De geometrie van het spoor blijft ongewijzigd.


### Bereken Ontbrekende Hoogte {#calculate-missing-elevation}

:::note OsmAnd Pro abonnement
De functie voor het offline berekenen van hoogte is alleen beschikbaar voor [**OsmAnd Pro abonnees**](../../purchases/android.md#pro-features) <ProFeature />.
:::

<InfoAndroidOnly />

Deze functie stelt u in staat om het hoogteprofiel voor een GPX-spoor offline te berekenen voor elk terrein tussen 70 graden noorderbreedte en 70 graden zuiderbreedte, gebaseerd op [Terreinkaartgegevens](../../plugins/topography.md#download-maps). *Terreinkaarten (3D) moeten vooraf gedownload zijn*.

1. Download [Terreinkaarten (3D)](../../plugins/topography.md#download-maps) voor de vereiste regio.
2. Als het spoor geen hoogtegegevens bevat, ga dan naar het contextmenu van het spoor (*Contextmenu Spoor → <Translate android="true" ids="shared_string_gpx_track,altitude,calculate_altitude"/>*), selecteer *Gebruik Terreinkaarten*, en na de berekening krijgt u een spoorgrafiek gebaseerd op de terreingegevens.

    ![Spoorgrafiek hoogte Android](@site/static/img/personal/tracks/calculate_elevation_2.png)   ![Spoorgrafiek hoogte Android](@site/static/img/personal/tracks/calculate_elevation_10.png)   <!--![Spoorgrafiek hoogte Android](@site/static/img/personal/tracks/calculate_elevation_4.png)  ![Spoorgrafiek hoogte Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->

3. Als u een route aanmaakt met de [Route plannen](../../plan-route/create-route.md#graph) tool met de methode *Rechte lijn* en er geen hoogtegegevens op de grafiek staan, moet u:
    - Tik op *Hoogtegegevens ophalen* en selecteer vervolgens *Gebruik Terreinkaarten*.
    - Na de berekening krijgt u de volledige Hoogte/Helling-grafiek van uw route, gebaseerd op terreingegevens.

  ![Spoorgrafiek hoogte Android](@site/static/img/personal/tracks/calculate_elevation_9.png)   ![Spoorgrafiek hoogte Android](@site/static/img/personal/tracks/calculate_elevation_5.png)


## Punten / Waypoints {#points--waypoints}

Waypoints zijn een van de soorten punten die beschikbaar zijn op de kaart. Over het algemeen kunnen dit spoorpunten zijn die deel uitmaken van GPX-bestanden. Een gedetailleerde beschrijving is beschikbaar in het artikel [punten op de kaart](../../map/point-layers-on-map.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contextmenu spoor Punten Android](@site/static/img/personal/tracks/track_context_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contextmenu spoor Punten iOS](@site/static/img/personal/tracks/track_context_points_ios.png)

</TabItem>

</Tabs>

In dit *Punten* tabblad:

- [Toon spoorpuntgegevens](#display-custom-gpx-tags) en wijzig uw spoorpunten (waypoints en routepunten), [verwijder ze en voeg](#points--waypoints) waypoints toe aan een spoor.
- Maak en wijzig [Groep (map) van punten](#waypoint-groups).


### Waypoint toevoegen aan een spoor {#add-waypoint-to-a-track}

Waypoints kunnen worden toegevoegd aan het momenteel opgenomen spoor of aan elk spoor uit [*Mijn Plaatsen → Sporenlijst*](../../personal/tracks/manage-tracks.md):

- Gebruik het [kaartcontextmenu](../../map/map-context-menu.md#-add--edit-track-waypoint).
  - Waypoints worden automatisch weergegeven als het geselecteerde spoor op de kaart is ingeschakeld.
  - [Lang tikken](../../map/map-context-menu.md#select-any-point-long-tap) op de kaart op een gekozen locatie om een waypoint te maken.
  - U kunt informatie over het waypoint instellen in het geopende [kaartcontextmenu](../../map/map-context-menu.md#-add--edit-track-waypoint).

- Gebruik de knop [Waypoint toevoegen](#points--waypoints) van het contextmenu van het spoor.

- Voeg een waypoint toe als een [Snelle actie](../../widgets/quick-action.md#my-places) knop.

### Waypoint aanmaken {#create-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Waypoint toevoegen](@site/static/img/personal/tracks/add_waypoint_1_andr.png)  ![Waypoint toevoegen](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Waypoint toevoegen](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png)  ![Waypoint toevoegen](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

Tik op de knop *Waypoint toevoegen* om het scherm voor het aanmaken van waypoints te openen (dit scherm is vergelijkbaar met het [Contextmenu Favorieten](../../personal/favorites.md#create)).

1. **Voeg** *Naam* van het waypoint, *Adres* van de geselecteerde locatie en *Beschrijving* ervoor toe (optioneel).
2. **Selecteer** Groep.

    - Selecteer eerder gemaakte groepscategorieën of maak een nieuwe aan.
    - Maak een naam en uiterlijk voor de nieuwe waypointgroep. Dit wordt ook wel *nieuwe categorie* genoemd in de applicatie.
    - Het **icoon**, de **icoonkleur** en de **vorm** worden gebruikt voor alle nieuwe waypoints die aan de groep worden toegevoegd.

3. **Uiterlijk** instelling:

    - Selecteer een [**icoon**](../../personal/favorites.md#favorite-icons) uit de lijst van alle POI-categorie-iconen.
    - Selecteer de **Kleur** van het icoon.
    - Selecteer vervolgens de **Vorm** van het icoon: *Cirkel, Octagon, Vierkant*.

4. **Vervang** een ander punt hiermee, indien nodig.


### Acties met Groepen {#actions-with-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Spoormenu Groepsmenu Android](@site/static/img/personal/tracks/track_menu_group_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Spoormenu Groepsmenu iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

Het *drie-punten-menu* ( &#8285; ) opent het waypoint *Groepsmenu*.

**Acties:**

- **<Translate android="true" ids="shared_string_show_on_map"/>** - Hiermee kunt u groepswaypoints op de kaart weergeven of niet. Of u kunt [de schermknop](#points--waypoints) gebruiken om groepswaypoints op de kaart weer te geven of weg te laten.
- **<Translate android="true" ids="shared_string_rename"/>** - Wijzig de naam van de groep.
- **<Translate android="true" ids="change_default_appearance"/>** - Wijzig de weergaveopties voor een groep waypoints.
- **<Translate android="true" ids="add_group_to_markers"/>** of **Verwijderen** (*Alleen Android*) - Verplaats groepswaypoints naar de [Kaartmarkeringen](../../personal/markers.md) lijst.
- **<Translate android="true" ids="copy_to_map_favorites"/>** (*Alleen Android*) - Verplaats groepswaypoints naar [Favorieten](../../personal/favorites.md).
- **<Translate android="true" ids="add_to_navigation"/>** (*Alleen Android*) - Creëert een route tussen waypoints. Het eerste en laatste punt worden het begin en einde van de route, en de rest wordt omgezet in tussenliggende punten.
- **<Translate android="true" ids="shared_string_delete"/>** - Verwijder een groep waypoints.


### Waypoint Groepen {#waypoint-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Spoormenu Groepskaart Android](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![Spoormenu Groepskaart Android](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Spoormenu Groepskaart iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![Spoormenu Groepskaart iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>

Beheer de zichtbaarheid van groepen op de kaart: als u één spoor verbergt, wordt de hele groep ook verborgen.

U kunt groepswaypoints op de kaart in- of uitschakelen met de knop in de rechterbovenhoek van het contextmenu van het spoor op de kaart. Tik erop en selecteer de gewenste actie.

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
| `time` | **Tijdstempel** is de datum en tijd waarop het punt is opgenomen. |
| `name` | **Naam** is de naam van het punt. Alle tekens zijn toegestaan. |
| `desc` | **Beschrijving** bevat aanvullende informatie over het punt. |
| `type` | **Selecteer groep** is de naam van de OsmAnd-map waarin dit waypoint is opgeslagen. |
| `cmt` | **Commentaar** is een kort commentaar op een punt. |
| `link` | **Link** is een link naar willekeurige bronnen. |
| `ele` | **Hoogte** is de hoogte van een punt. |


**Extensies:**

| Extensie | Beschrijving |
| --- | --- |
| `osmand:icon` | **Icoon** is de naam van het icoon dat u hebt geselecteerd. |
| `osmand:color` | **Kleur** is de kleur in HEX-formaat. |
| `osmand:background` | **Achtergrond** is de vorm van het icoon, zoals een cirkel, achthoek of vierkant. |
| `osmand:country` | **Land** is de naam van het land. |
| `osmand:address` | **Adres** is het adres. |
| `osmand:postcode` | **Postcode** is de postcode. |
| `osmand:telephone` | **Telefoon** is het telefoonnummer. |
| `osmand:state` | **Staat** is de naam van de staat. |
| `osmand:start_date` | **Startdatum** zijn de planningsgegevens van een punt. |

Waypoints worden samen met het spoor opgenomen in het [GPX-bestand](../../../technical/osmand-file-formats/osmand-gpx.md). Elk van deze waypoints heeft zijn eigen set tags voor beschrijving. Alle tags die direct verband houden met de beschrijving van waypoints en die direct in de OsmAnd-applicatie kunnen worden bewerkt, worden in deze sectie vermeld.
Om de beschrijving van een Waypoint te wijzigen, kunt u een van de volgende manieren volgen:

1. Zoek het vereiste spoor in de lijst van het tabblad *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.
2. Tik op het spoor op de kaart, als het is opgenomen in de [lijst van zichtbare](../tracks/index.md#display-tracks-on-the-map).
3. Tik op het vereiste waypoint als het [zichtbaar](../../personal/tracks/manage-tracks.md#track-menu) is op de kaart.

    Tik vervolgens in het [Contextmenu Sporen](./track-context-menu.md) op *punten*, het veld van de vereiste map met beschikbare waypoints en het Waypoint dat u zoekt. Selecteer menu *Acties →* **GPX-waypoint bewerken** en breng wijzigingen aan. U kunt de aanmaakdatum van een punt, *tijdstempel*, niet in de applicatie wijzigen.

**Voorzieningstags** die aanvullende informatie beschrijven, zoals openingstijden of telefoonnummer, specifiek voor de POI, halen die informatie uit OpenStreetMap-gegevens of gegevens die u hebt ingevoerd bij het aanmaken van de POI. U kunt dergelijke tags en [aangepaste tags](#display-custom-gpx-tags) alleen bewerken in de code van het GPX-bestand, dat u met elke teksteditor op uw apparaat kunt openen.


## Interval splitsen {#split-interval}

<InfoAndroidOnly />

U kunt het spoor verdelen in intervallen, zoals afstand en tijd, en het analyseren.

Splits het spoor op afstand of tijdsinterval.
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>*

![Scherm spoor splitsen interval Android](@site/static/img/personal/tracks/track_split_interval_android.png) ![Scherm spoor splitsen interval tijd Android](@site/static/img/personal/tracks/track_split_interval_time_android.png)


## GPS-filter {#gps-filter}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![GPS-filterscherm Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

Dit filter stelt u in staat om uw spoorstatistieken te verbeteren door onnodige of onjuiste gegevens uit te sluiten. U kunt spoorpunten filteren die niet passen bij uw spoorparameters, en als resultaat een nauwkeurigere grafiek en visuele routelijn krijgen zonder vervorming of opnameruis. U kunt wijzigingen aanbrengen met filters zoals *Afvlakking*, *Snelheid*, *Hoogte* en *GPS-precisie*, die gefilterde punten uit het huidige spoor verbergen. Bovendien kunt u in het *Statistieken*-menu controleren hoe uw wijzigingen op de grafiek worden weergegeven voordat u ze opslaat. U kunt ook *Terugzetten naar origineel* en *Opslaan als kopie* van uw spoor in dit filter zonder het origineel op te slaan.

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location-and-zoom), [my location button](../../map/interact-with-map.md#my-location-and-zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

De Android GPS Filter app-pagina bevat het volgende:

- Een kaart met een opgeslagen spoor en een extra knop, *Mijn spoorlocatie* (deze lijnt een spoor uit naar het midden van een kaart).
- Knoppen *Vernieuwen* en *Menu* bovenaan (*Menu* opent het *Actie*-veld onderaan de pagina).
- Blokken *Filter*, *Statistieken*, *Actie*.


### Filtermenu {#filter-menu}

In dit menu kunt u enkele parameters van uw spoor wijzigen, zoals *Afvlakking*, *Snelheid*, *Hoogte* of *GPS-precisie* met behulp van filters. Het menu is verdeeld in een *Punten-deel* en een *Acties-deel*.

| ***Punten*** |
|:------------|
|Dit deel toont het aantal punten na filtering en het totale aantal punten op het geselecteerde spoor voordat filters werden gebruikt.|
|![GPS-filter scherm puntenaantallen Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***Acties*** |
|*Afvlakking*. Stelt de drempelafstand tussen punten in. Spoorpunten die minstens deze afstand van het laatst zichtbare punt verwijderd zijn, worden verborgen. Alle punten op het spoor die op een afstand van elkaar liggen die kleiner is dan de door het filter geselecteerde afstand, worden verborgen. Spoorpunten worden geteld vanaf het laatst zichtbare punt. Let op, hoge drempels kunnen de geometrie van het spoor te veel vereenvoudigen.|
|![GPS-filter afvlakkingsgetallen Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Snelheid*. Alleen de spoorpunten die overeenkomen met het geselecteerde snelheidsinterval worden weergegeven op de grafiek en de kaart, de andere worden verborgen.|
|![GPS-filter snelheidsgetallen Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*Hoogte*. Alleen de spoorpunten die overeenkomen met het geselecteerde hoogte-interval worden weergegeven op de grafiek en de kaart, de andere worden verborgen.|
|![GPS-filter hoogtegetallen Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*GPS-precisie*. Stelt de maximaal toelaatbare waarde voor HDOP in. Punten met een hogere waarde worden verborgen.|
|![GPS-filter precisiegetallen Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) |


### Statistieken {#statistics}

![GPS-filter grafiek Android](@site/static/img/personal/tracks/gps_filter_graph_statistics_andr.png)

Het tabblad Statistieken toont informatie over het **gewijzigde** spoor, wat betekent dat het spoor zonder de gefilterde waarden wordt weergegeven. Dit wordt getoond in de statistiekenblokken en grafiekgegevens.

- Het *Gegevens*-deel toont statistieken vergelijkbaar met het [Filtermenu](#filter-menu).
- Het *Grafiek*-deel toont drie soorten grafieken op basis van parameters: Overzicht, Hoogte en Snelheid. Deze functionaliteit is een kopie van de [spoorgrafiek](#altitude--speed-graphs).

### Acties {#actions}

![GPS-filter actie Android](@site/static/img/personal/tracks/gps_filter_action_android.png)

De lijst met acties is beschikbaar onderaan het tabblad **Filter** of **Statistieken**. OsmAnd past alle wijzigingen op het spoor toe zonder het bestand bij te werken, maar u kunt de wijzigingen handmatig opslaan.

- *<Translate android="true" ids="reset_to_original"/>*. Hiermee kunt u de parameters terugzetten naar hun oorspronkelijke staat.
- *<Translate android="true" ids="save_as_copy"/>*. Hiermee kunt u het spoor als een nieuw spoor opslaan.
- *<Translate android="true" ids="save_changes_into_file"/>*. Hiermee kunt u het spoor overschrijven met de nieuwe parameters.


## Gerelateerde artikelen {#related-articles}

- [GPX-sporen](../../personal/tracks/manage-tracks.md)
- [Sporen op de kaart](./track-context-menu.md)
- [Navigatie per spoor](../../navigation/setup/gpx-navigation.md)
- [Route plannen](../../plan-route/index.md)
- [Tripopname-plugin](../../plugins/trip-recording.md)
- [Analyseer op kaart](../tracks/index.md#analyze-track-on-map)