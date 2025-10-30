---
source-hash: 0012b0b27dc9467a3efde4bc95e7f8d8af48788d2a65da16e21d49538ebd149b
sidebar_position: 10
title:  OsmAnd Ontwikkeling
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

Testfuncties van de app zijn verzameld in de OsmAnd ontwikkelingsplugin. Gebruik ze op eigen risico.

De OsmAnd ontwikkelingsplugin stelt u in staat om nieuwe functies van de app uit te proberen of om OsmAnd te configureren voor testdoeleinden: navigatieroutes simuleren, de prestaties van de schermweergave controleren, enz. De plugin is ontworpen voor *ontwikkelaars en ervaren gebruikers* en is niet vereist voor dagelijks gebruik van de applicatie.


## Vereiste Instelparameters {#required-setup-parameters}

Om speciale functies voor ontwikkelaars en testers te activeren:

1. [Schakel](../plugins/index.md#enable--disable) de OsmAnd ontwikkelingsplugin in de sectie Plugins van het *Hoofdmenu* in.
2. Maak de nodige instellingen in het [Instellingenmenu](#plugin-settings) van de plugin.
3. Schakel indien nodig **ontwikkelaarswidgets** in.


## Plugin-instellingen {#plugin-settings}

:::info info
De instellingen van de OsmAnd ontwikkelingsplugin zijn globaal en van toepassing op alle profielen.
:::

Gebruik een van de volgende paden om de plugin-instellingen te openen:

- *Hoofdmenu → Plugins → OsmAnd ontwikkeling → Instellingen*.
- *Hoofdmenu → [Algemene instellingen](../personal/global-settings.md) → Profiel → Instellingen OsmAnd ontwikkelingsplugin*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Development Settings Android](@site/static/img/plugins/development/development_settings_1_andr.png) ![Development Settings 2 Android](@site/static/img/plugins/development/development_settings_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Development Settings iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>


### Terrein {#terrain}

- **Gebruik raster [SQLite-formaat](../../technical/osmand-file-formats/osmand-sqlite) voor hillshade en helling** (*Android*). Bij gebruik van de V2-weergavemotor, gebruik in plaats van het berekenen van hillshading of hellingen vanuit de 3D Terrein-kaart, de oude formaat rasterkaarten voor dit doel. Kan de weergave aanzienlijk versnellen.


### Probleemoplossing {#troubleshooting}

- **Simuleer uw positie** (*Android* / *iOS*). [Simuleer](#gpx-track-simulation) de locatie en beweging met behulp van een GPX-track.
- **Batterijbesparingsmodus** (*Android* / *iOS*). Deze instelling verlaagt [de verversingssnelheid van het scherm](#map-rendering-fps-widget) met 20 frames per seconde om de batterij te sparen tijdens het gebruik van applicaties.
- **Gebruik 3D-locatiepositiepictogrammen** (*iOS*). Hiermee kunt u een 3D-pictogram selecteren voor het [Mijn Locatie-pictogram](../personal/profiles.md#my-location-appearance).
- **Simuleer obd-gegevens** (*Android*). Maakt simulatie van het gebruik van een [OBD-scanner](./vehicle-metrics.md) mogelijk.
- **Prestatie-debug-info** (*Android*). Toont weergave- en navigatieprestaties.
- **Kaartlagen uitschakelen** (*Android*). Schakelt alle kaartlagen over de vectorkaart uit (herstart vereist).
- **Logcat-buffer** (*Android*). Controleer en deel gedetailleerde logboeken van de app.
- **Toon toast over ingedrukte toets** (*Android*). Toon een bericht over de toets.
- **<Translate android="true" ids="write_bearing"/>** (*Android*). <Translate android="true" ids="write_bearing_description"/>. Peiling is de kompasrichting van uw huidige positie naar uw beoogde bestemming. Beïnvloedt *[trackopname](../plugins/trip-recording.md)*.
- **<Translate android="true" ids="write_heading"/>** (*Android*). <Translate android="true" ids="write_heading_description"/>. Koers is de kompasrichting van uw huidige positie naar het ware noorden. Deze optie is standaard ingeschakeld. Beïnvloedt *[trackopname](../plugins/trip-recording.md)*.


### Applicatietesten {#application-testing}

:::caution Alleen Android
:::

- **Simuleer eerste app-start**. Stelt de vlag in die de eerste app-start aangeeft, en laat alle andere instellingen ongewijzigd.
- **Test gesproken aanwijzingen**. Selecteer een stem en test door aankondigingen af te spelen.
- **Transparante statusbalk**. De kaart wordt zichtbaar onder de statusbalk.
- **Toon banner gratis versie**. Toon de banner van de gratis versie, zelfs in de betaalde versie.
- **Toon debug-informatie**. Toon grafische informatie over de plaatsing van elke tekst op de kaart.
- **Sta weergave bovenaan toe**. Staat toe dat kaartteksten over elkaar heen worden weergegeven.


### Interne Algoritmen {#internal-algorithms}

:::caution Alleen Android
:::

- **Veilige modus**. Voer de app uit in de (langzamere) veilige modus.


### Geheugeninstellingen {#memory-settings}

:::caution Alleen Android
:::

- De optie **Geheugen toegewezen voor routering** stelt u in staat om de hoeveelheid geheugen te bepalen die wordt toegewezen voor het berekenen van lange routes. U kunt deze optie gebruiken als de [Standaard routering A*](../navigation/guidance/navigation-settings.md#development-settings) is geselecteerd in de *Navigatie-instellingen*.

***Berekening van extra lange routes:***

- Een hogere geheugentoewijzing kan de prestaties van andere apps beïnvloeden.
- [Berekening van 50 km routes voor voetgangers](../troubleshooting/navigation.md#calculation-of-50-km-routes-for-pedestrians)


### Info en Statistieken {#info-and-statistics}

:::caution Alleen Android
:::

- **Toegewezen geheugen**. Toont het toegewezen systeemgeheugen voor de OsmAnd-applicatie.
- **Totaal native geheugen**. Toont de totale hoeveelheid native geheugen die aan de applicatie is toegewezen, inclusief proportioneel geheugen.
- **A-GPS-info**. Geeft aan wanneer A-GPS-gegevens voor het laatst zijn gedownload.
- **Dag/nacht-info**. Geeft de tijden van zonsopgang en zonsondergang van vandaag aan.
- **Energiestatistieken (gemiddeld 1 / 5 / 15 minuten)**. Toont het batterijniveau per minuut (%) en het gemiddelde energieverbruik (mAh) over intervallen van 1, 5 en 15 minuten.
- **Weergavestatistieken (gemiddeld 1 / 5 / 15 minuten)**. Toont weergavestatistieken, inclusief FPS over de laatste 1k frames, CPU (tegels), CPU (inactieve tijd) en CPU (stand-by) gemiddelden over intervallen van 1, 5 en 15 minuten.

**Knop:**

- **Plugin-instellingen naar standaard resetten**. Reset alle plugin-instellingen naar hun standaardwaarden.

    ![Development Settings Android](@site/static/img/plugins/development/devplugin_stat_and.png)


## Kaartweergave FPS-widget {#map-rendering-fps-widget}

:::info Belangrijk
OsmAnd ontwikkelaarswidgets kunnen alleen aan het scherm worden toegevoegd als de OsmAnd ontwikkelingsplugin is ingeschakeld.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Development widget fps 1](@site/static/img/plugins/development/dev_widgets_fps_1.png) ![Development widget fps 2](@site/static/img/plugins/development/dev_widgets_fps_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Development widget iOS 2](@site/static/img/plugins/development/dev_widgets_ios_fps_2.png)

</TabItem>

</Tabs>

De [FPS-widget](../widgets/info-widgets.md#map-rendering-fps) toont hoe snel de kaart en kaartelementen worden weergegeven en vernieuwd. De numerieke waarde wordt aangegeven in frames per seconde (FPS).


## Camerapositie-widgets {#camera-position-widgets}

:::info Belangrijk
OsmAnd ontwikkelaarswidgets kunnen alleen aan het scherm worden toegevoegd als de OsmAnd ontwikkelingsplugin is ingeschakeld.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets"/>*

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets"/>*

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera_ios.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2_ios.png)

</TabItem>

</Tabs>

U kunt [Camerapositie-widgets](../widgets/info-widgets.md#camera-widgets) gebruiken om de OsmAnd-kaart een realistisch uiterlijk te geven en overeen te laten komen met foto's van de aarde die zowel van bovenaf als vanuit de ruimte zijn genomen.


### Camerakanteling {#camera-tilt}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Camera tilt widget Android 1](@site/static/img/plugins/development/developer_widg_cam_tilt_1.png) ![Camera tilt widget Android 2](@site/static/img/plugins/development/developer_widg_cam_tilt_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camera tilt widget ios 1](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_1.png) ![Camera tilt widget ios 2](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_2.png)

</TabItem>

</Tabs>

De Camerakanteling-widget geeft de helling weer tussen de centrale kijkvector van de camera (kijker) en een denkbeeldige vlakke ondergrond van de aarde. De standaardwaarde is 90 graden (geen kanteling).

:::note
De camerakanteling wordt gewijzigd door de camera (kijker) te bewegen terwijl het middelpunt op de kaart (waar we naar kijken) hetzelfde blijft. De afstand ernaartoe (in feite, zoom) verandert niet.
Tegelijkertijd verandert door de denkbeeldige beweging van de kijker de afstand van de camera tot het oppervlak.
:::


### Camerahoogte {#camera-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Camera elevation widget Android 1](@site/static/img/plugins/development/developer_widg_cam_elevation_1.png) ![Camera elevation widget Android 2](@site/static/img/plugins/development/developer_widg_cam_elevation_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camera elevation widget ios 1](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_1.png) ![Camera elevation widget ios 2](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_2.png)

</TabItem>

</Tabs>

De Camerahoogte-widget toont de hoogte van de camera boven het oppervlakteniveau. De camerahoogte wordt aangegeven in meters / kilometers.


### Zoomniveau {#zoom-level}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zoom level widget Android 1](@site/static/img/plugins/development/developer_widget_zoom_2_andr.png) ![Zoom level widget Android 2](@site/static/img/plugins/development/developer_widg_zoom_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoom level widget ios 1](@site/static/img/plugins/development/developer_widget_zoom_ios_1_ios.png) ![Zoom level widget ios 2](@site/static/img/plugins/development/developer_widget_zoom_ios_2_ios.png)

</TabItem>

</Tabs>

De widget heeft twee weergaven die worden omgeschakeld door erop te tikken:

- **<Translate android="true" ids="map_widget_zoom_level"/>**. Toont het huidige zoomniveau van de kaart.
- **<Translate android="true" ids="map_widget_map_scale"/>**. Toont de huidige verhouding tussen een afstand op een kaart en de overeenkomstige afstand op aarde. Voorbeelden: "1 : 3 000", "1 : 3,3 M" "1: 340 K".

:::note

- Het initiële zoomniveau (0) is het niveau waarop het gehele aardoppervlak (de volledige kaart) op het scherm wordt weergegeven, en de grootte ervan is 256 bij 256 pixels.
- Elk volgend zoomniveau verkleint de denkbeeldige afstand tot de grond met ongeveer 2 keer.

:::

### Afstand tot doel {#distance-to-target}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Distance to target widget 1 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_1.png) ![Distance to target widget 2 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Distance to target widget 1 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_1.png) ![Distance to target widget 2 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_2.png)
</TabItem>

</Tabs>

De widget Afstand van camera tot doel toont de afstand tussen de camera (kijker) en het midden van de kaart. Deze afstand wordt weergegeven in meters / kilometers.


### Vergelijking met een satellietbeeld {#comparison-with-a-satellite-imagery}

![Comparison](@site/static/img/plugins/development/comparison.png)

Een vergelijking van de OsmAnd-kaart en het aardoppervlak onthult de volgende patronen:

- Maximale vervorming wordt waargenomen bij grote zooms (6-7 zoom voor camerakanteling 90 graden).
- Naarmate de camerakanteling afneemt (van 90 tot 10 graden), neemt de vervorming van de kaart toe.
- Vervormingen beginnen eerder te worden waargenomen op hoge breedtegraden.

De onderstaande tabel bevat informatie over de kanteling van de camera en de afstand tot het doel en het zoomniveau waarop de vervormingen van de OsmAnd-kaart zichtbaar worden. Als de camera verder van het doel af beweegt, zal de waargenomen vervorming van de OsmAnd-kaart toenemen.

|Kanteling (90) |Breedtegraad |Max Zoom |Hoogte, km |Vervorming|
|-----|-----|-----|-----|-----|
|90|26|6|5500|5%|
|90|50|6|2500|5%|
|90|66|7|1300|5%|
|**Kanteling (60)** |**Breedtegraad** |**Max Zoom** |**Hoogte, km** |**Vervorming**|
|65|26|8|1100|6.5%|
|65|50|8|800|6.5%|
|65|66|9|630|6.5%|
|**Kanteling (45)** |**Breedtegraad** |**Max Zoom** |**Hoogte, km** |**Vervorming**|
|45|26|9|350|7.5%|
|45|50|9|320|7.5%|
|45|66|8|210|7.5%|
|**Kanteling (20)** |**Breedtegraad** |**Max Zoom** |**Hoogte, km** |**Vervorming**|
|20| 26|12|30|10%|
|20| 50|11|30|10%|
|20| 66|11|30|10%|


## Beschikbaar RAM-widget {#available-ram-widget}

Deze widget is speciaal voor u ontworpen bij het gebruik van OsmAnd om een handigere en informatievere interactie met het beschikbare RAM op uw apparaat te bieden. Het stelt u in staat om gemakkelijk en snel het beschikbare RAM te controleren, wat vooral handig is bij het gebruik van OsmAnd voor navigatie. Lees meer over de widget in het artikel [Informatiewidgets](../widgets/info-widgets.md#available-ram).


## GPX-Track Simulatie {#gpx-track-simulation}

OsmAnd biedt de mogelijkheid om de locatie en beweging van uw apparaat te simuleren met behulp van een GPX-track. Gebruik hiervoor de optie *<Translate android="true" ids="simulate_location_by_gpx"/>* in de [instellingen](#plugin-settings) van de OsmAnd ontwikkelingsplugin:

- Tik op *<Translate android="true" ids="simulate_location_by_gpx"/>*.
- Selecteer een track om de locatie en beweging van het apparaat te simuleren.
- Selecteer de snelheid van de bewegingssimulatie.
- Tik op de Start-knop.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_1.png) ![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png) ![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png)

</TabItem>

</Tabs>

Nadat u de simulatie hebt gestart, ziet u op het hoofdscherm van de app dat de navigatiemarkering beweegt volgens de GPX-track. Tik op de [mijn locatie-knop](../map/interact-with-map.md#my-location-and-zoom) om *Mijn Locatie* (gesimuleerde geolocatie van het apparaat) te synchroniseren met het midden van de kaart.
Om de simulatie van de beweging van uw apparaat te stoppen, gaat u terug naar de [instellingen](#plugin-settings) van de OsmAnd ontwikkelingsplugin en tikt u op **stop** in de optie **simuleer uw positie**.

- *<Translate android="true" ids="simulate_location_by_gpx"/>* is ook toegankelijk via het **[Snelle actie-menu](../widgets/quick-action.md#navigation)**.
- De snelheid van de locatiebeweging tijdens de simulatie kan gelijk worden gesteld aan de opgenomen snelheid (1), of sneller (x2, x3, x4).
- U kunt ook beweging langs een GPX-track simuleren vanuit het [navigatiemenu](../navigation/setup/route-navigation.md#simulated-navigation) zonder de OsmAnd ontwikkelingsplugin in te schakelen. In dat geval wordt uw locatie niet gesynchroniseerd met de track.


## Gerelateerde Artikelen {#related-articles}

- [Interactie met de kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vectorkaarten (Kaartstijlen)](../../user/map/vector-maps.md)