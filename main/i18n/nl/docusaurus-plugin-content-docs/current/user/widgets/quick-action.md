---
source-hash: 2577f77348fb868d63648ae2d8c21c5f6d95f6b42bc9152283acbe92a24fd938
sidebar_position: 7
title:  Snelle Actie (Aangepaste knoppen)
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

De Snelle Actie widget is een interactief gebruikersinterface-element dat snelle toegang biedt tot belangrijke functies of acties zonder extra instellingen te hoeven openen. Deze widget wordt op het hoofdkaartscherm geplaatst en stelt u in staat de interactie met de applicatie te vereenvoudigen en te versnellen, waardoor deze handiger en efficiënter wordt.  

![Snelle actie widget](@site/static/img/widgets/quick_action_widget.png)


## Snelle Actie Widget {#quick-action-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Snelle actie widget_android](@site/static/img/widgets/quick_action_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Snelle actie widget_ios](@site/static/img/widgets/quick_action_widget_ios.png)

</TabItem>

</Tabs>

Om de Snelle Actie knop te gebruiken, moet u eerst deze widget inschakelen.  

<!--
- To open the Quick action menu, just tap the button.
- By default, the Quick action button will appear on the right corner (above the zoom buttons), but it can be moved to any part of the screen by long tapping it. -->


### Acties Toevoegen en Verwijderen {#add-and-delete-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/> → Tik op Verwijderen (Prullenbakicoon in de rechterbovenhoek) → Selecteer acties*

![Snelle actie widget_android_toevoegen](@site/static/img/widgets/quick_action_widget_andr.png)  ![Aangepaste knop Android](@site/static/img/widgets/add_action_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>  → Tik op Bewerken (Potloodicoon in de rechterbovenhoek) → Selecteer acties*

![Snelle actie widget_ios_toevoegen](@site/static/img/widgets/quick_action_widget_2_ios.png) ![Aangepaste knop Android](@site/static/img/widgets/add_action_screen_ios.png)

</TabItem>

</Tabs>

Alle acties zijn georganiseerd in het **Actie Toevoegen** menu en gegroepeerd per type. Een volledige lijst van acties en hun beschrijvingen is te vinden in de sectie [Actietypes](#action-types).

U kunt een of meer [acties](#action-types) toewijzen aan de snelle actie knop. Er zijn twee manieren om acties toe te voegen.

- **In het Configureer scherm**. Selecteer een knop uit de lijst en tik op de&nbsp;  "**＋**"  &nbsp;knop. U moet eerst het [actietype](#action-types) selecteren en vervolgens de naam en [parameters](#action-parameters) wijzigen.
- **In het paneel van de snelle actie knop**. Tik op de *Snelle Actie knop* op het kaartscherm. Aan het einde van de lijst, op het laatste scherm in het paneel, bevindt zich het "**＋**"  &nbsp;*Actie Toevoegen* vak. Tik erop en selecteer een actie uit de [lijst met types](#action-types).


:::note

- Elke actie moet een unieke naam hebben.
- De schermen, genummerd als Scherm 1, Scherm 2, enz., worden automatisch aangemaakt wanneer het aantal acties in de lijst toeneemt tot 6 items.

:::


### Actieparameters {#action-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Snelle actie widget_android_volgorde](@site/static/img/widgets/quick_action_widget_android_order.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Snelle actie widget_ios_volgorde](@site/static/img/widgets/quick_action_widget_ios_order.png)

</TabItem>

</Tabs>

De acties die aan een snelle actie knop zijn toegewezen, zijn gegroepeerd in schermen. Deze groepen acties worden geopend wanneer u op die knop op de kaart tikt. Nieuwe schermen worden automatisch aangemaakt wanneer de lijst met acties meer dan *6 items* bevat. U kunt acties herschikken naar uw voorkeur door deze stappen te volgen:  

**Voor Android**.

1. Via het configureer scherm:

    - Ga naar *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*.
    - Gebruik *Ingedrukt houden en slepen* op het icoon met de twee verticale lijnen om acties te herschikken.

2. Via het snelle actie menu:

    - Open het snelle actie menu, tik dan lang op *Actie Toevoegen*.
    - Gebruik *Ingedrukt houden en slepen* op het icoon met de twee verticale lijnen om acties te herschikken.  

**Voor iOS**.

- Navigeer naar *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>*.
- Tik op *Bewerken* (potloodicoon), en gebruik dan *Ingedrukt houden en slepen* op het icoon met de drie verticale lijnen om acties te herschikken.

:::info note
Sommige acties zoals *Kaartbron*, *Kaartstijl*, *Overlay*, *Underlay*, *Terrein kleurenschema* en *Profiel toevoegen* kunnen als een lus worden toegewezen. Elke tik op de knop doorloopt de geselecteerde lagen. Een tussentijds dialoogvenster kan worden weergegeven om handmatig uit de lijst te selecteren, of verborgen om in de gedefinieerde volgorde te schakelen.
:::


## Knoppen op het Scherm {#buttons-on-the-screen}

### Aangepaste knoppen {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate android="true" ids="add_button"/>*  

![Aangepaste knop Android](@site/static/img/widgets/custom_button_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  

![Aangepaste knop Android](@site/static/img/widgets/custom_button_ios.png)  

</TabItem>

</Tabs>

**Aangepaste knoppen** zijn extra knoppen op de kaart die op dezelfde manier werken als de *Snelle Actie* knop. U kunt een knop maken met een of meer acties en deze op het kaartscherm weergeven.  Aangepaste knoppen bevinden zich in de lijst *Configureer scherm → Knoppen → Aangepaste knoppen*. Elke knop heeft een profielonafhankelijke actielijst en moet een unieke ***Naam*** hebben, maar een knop kan voor elk **profiel** afzonderlijk worden in- of uitgeschakeld.

Alle beschikbare [acties](#action-types) zijn identiek aan die welke kunnen worden toegepast op de standaard snelle actie. Aangepaste knoppen kunnen worden geconfigureerd als ***knoppen voor één actie***, die de geselecteerde actie onmiddellijk toepassen wanneer erop wordt getikt, zonder dat er door een extra menu hoeft te worden genavigeerd.

### Uiterlijk van de Knop {#button-appearance}

<InfoAndroidOnly/>

![Uiterlijk snelle actie knop](@site/static/img/widgets/qa_button_appearance_andr.png)

U kunt het uiterlijk van Snelle Actie knoppen aanpassen via: *Menu → Configureer scherm → Aangepaste knoppen → Snelle actie → drie-puntjes menu → Uiterlijk*. Deze instelling biedt opties om de grootte, vorm, het icoon en de achtergronddekking van de knop te personaliseren, wat meer controle geeft over hoe de knoppen op uw scherm eruitzien.  

Voor gedetailleerde aanpassingsinstellingen, raadpleeg het artikel [Configureer Scherm](../widgets/configure-screen.md#button-appearance), waar u kunt leren hoe u het uiterlijk van elke knop kunt afstemmen op uw voorkeuren.

### Knoppositie Wijzigen {#change-button-position}

De *Snelle Actie* widget verschijnt in de onderste hoek van het kaartscherm wanneer u deze voor het eerst inschakelt. U kunt de widget naar elk deel van het scherm verplaatsen door deze ingedrukt te houden en te slepen. Voor een precieze en nauwkeurige plaatsing van knoppen op het kaartscherm, worden ze automatisch uitgelijnd op de dichtstbijzijnde onzichtbare rasterpositie wanneer ze worden versleept.

- **Initieel uiterlijk**. Standaard wordt de snelle actie widget in de rechteronderhoek van de kaartinterface geplaatst.

    ![Snelle actie widget_weergave](@site/static/img/widgets/quick_action_widget_view.png)

- **Verplaats de widget**. Door de widget lang in te drukken en te slepen, kunt u deze op het scherm herpositioneren, met automatische uitlijning van kolommen en rijen.  

    ![Snelle actie widget_tik](@site/static/img/widgets/quick_action_widget_tap.png)

- **Nieuwe plaatsing**. Eenmaal verplaatst, blijft de widget op zijn nieuwe positie op het kaartscherm staan totdat deze weer handmatig wordt aangepast.

    ![Snelle actie widget_verplaatsen](@site/static/img/widgets/quick_action_widget_move.png)

- **Meerdere [Aangepaste knoppen](#custom-buttons)**. U kunt meerdere snelle actie knoppen toevoegen aan het kaartscherm. Deze knoppen kunnen ook individueel worden aangepast en verplaatst met dezelfde sleepmethode.

    ![Snelle actie widget_verplaatsen](@site/static/img/widgets/quick_action_widget_multi.png)

### Rasterindeling voor Knoppen {#grid-layout-for-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Raster voor knoppen_v_android](@site/static/img/widgets/grid_buttons_v_and.png) 

![Raster voor knoppen_h_android](@site/static/img/widgets/grid_buttons_h_1_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Raster voor knoppen_v_ios](@site/static/img/widgets/grid_buttons_v_ios.png) 

![Raster voor knoppen_h_ios](@site/static/img/widgets/grid_buttons_h_1_ios.png)

</TabItem>

</Tabs>

[Kaartknoppen](../widgets/map-buttons.md#overview) worden automatisch gerangschikt met behulp van een rasterindeling. Elke knop wordt toegewezen aan een van de vier hoeken van het scherm (*boven-links*, *boven-rechts*, *onder-links*, *onder-rechts*). Als er niet genoeg ruimte is in de toegewezen hoek, worden de knoppen horizontaal of verticaal uitgelijnd, afhankelijk van de schermoriëntatie.

Deze indeling helpt om knoppen visueel consistent te houden en overlappen te voorkomen. Bijvoorbeeld, op een ligscherm zullen knoppen in de rechterhoek horizontaal onderaan het scherm worden uitgelijnd, terwijl op een staandscherm ze verticaal omhoog of omlaag worden uitgebreid indien nodig.

Het raster past zich aan aan de omliggende interface en herpositioneert knoppen wanneer nodig, waardoor ze zichtbaar blijven en niet interfereren met andere on-scherm elementen. Wanneer widgets of panelen worden toegevoegd, verwijderd of herschikt, wordt de indeling dienovereenkomstig bijgewerkt zodat de knopvolgorde consistent blijft en geen element verborgen raakt.

[Profielen geïmporteerd](https://osmand.net/docs/user/personal/import-export#export) van een ander apparaat worden aangepast aan de rasterindeling, waardoor knopposities correct blijven over verschillende schermgroottes en platforms.


## Actietypes {#action-types}

### Kaart Configureren {#configure-map}

| Actie | Beschrijving |
|:-------------|:-------------|
| Tonen / Verbergen <br/> [**Routes**](../map/vector-maps.md#routes) | U kunt routetypes selecteren om hun weergave in of uit te schakelen. <br/> Sommige routes hebben extra instellingen. Standaard, als u niets hebt geselecteerd in het [Kaart configureren](../map/configure-map-menu.md) menu, wordt het eerste routetype uit de lijst toegewezen, anders wordt een type naar keuze toegewezen. U kunt meer lezen in het [Routes](../map/routes.md) artikel. <br/> - ***Fietsroutes***  &nbsp;(*Route*, *Knooppuntennetwerken*) <br/> - ***Mountainbikeroutes***  &nbsp;(*MTB-schaal*, *IMBA*) <br/> - ***Wandelroutes***  &nbsp;(*OSMC*, *Netwerkaansluiting*, *Knooppuntennetwerken*) <br/> - ***Moeilijkheidsgraad wandelpaden***  &nbsp;(*SAC-schaal*, *CAI-schaal*) <br/> - ***Skipistes*** <br/> - ***Paardrijroutes*** <br/> - ***Wildwatersporten*** <br/> - ***Hardlooproutes*** <br/> - ***Fitnesstrails*** <br/> - ***Reisroutes***  &nbsp;(*Tracks*, *Reisboeken*, *Punten*) <br/> |
| Tonen / Verbergen <br/> [**Topografielagen**](../plugins/topography.md#overview) | Alle topografische gegevens worden gepresenteerd als afzonderlijke kaartlagen. U kunt de zichtbaarheid van deze lagen snel wisselen met Snelle Actie. <br/> - ***Contourlijnen*** <br/> - ***Terrein***  &nbsp;(*Afhankelijk van de geselecteerde laag in het [Kaart configureren](../map/configure-map-menu.md) menu, wordt *Schaduwreliëf*, *Helling* of *Hoogte* *weergegeven.*) |
| Wijzigen <br/> [**Terrein kleurenschema**](../plugins/topography.md#modify-color-scheme) | Hiermee kunt u een of meer paletten selecteren uit een lijst van bestaande, die veranderen wanneer u op de knop tikt. |
| Tonen / Verbergen <br/> [**Weerlagen**](../plugins/weather.md#weather-layers) | Alle weergegevens worden gepresenteerd als afzonderlijke kaartlagen. Met Snelle Actie krijgt u snelle toegang om de zichtbaarheid van deze lagen op de kaart te wisselen. <br/> - ***Neerslaglaag*** <br/> - ***Wolkenlaag*** <br/> - ***Druklaag*** <br/> - ***Windlaag*** <br/> - ***Windanimatielaag*** *(Alleen Android)* <br/> - ***Temperatuurlaag*** <br/> Op Android is er ook **Weerlagen** — een hoofdschakelaar voor alle actieve weerlagen. Schakelt alle momenteel ingeschakelde weerlagen tegelijk uit. Wanneer weer ingeschakeld, herstelt het exact dezelfde set lagen die actief waren ervoor. |
| Openen <br/> [**Weerscherm**](../plugins/weather.md) | Opent het [*Weer* voorspellingsscherm](../plugins/weather.md#weather-forecast-screen) met gedetailleerde informatie. |
| Tonen / Verbergen <br/> [**Favorieten**](../map/point-layers-on-map.md#favorites) | Toon of verberg de favoriete punten op de kaart. |
| Tonen / Verbergen <br/> [**Tracks**](../personal/tracks/manage-tracks.md#track-menu) | Toon of verberg de laatst zichtbare tracks op de kaart. |
| Tonen / Verbergen <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Schakel de weergave van POI-lagen met geselecteerde categorieën op de kaart in of uit.<br/>U kunt meerdere POI-categorieën selecteren. De actie vervangt de POI-categorieën die zijn geselecteerd in Kaart configureren zonder Snelle Acties te gebruiken.  |
| Wijzigen <br/> [**Kaartmodus**](../map/vector-maps.md#map-mode) | Snelle toegang om te wisselen tussen dag- en nachtmodus. |
| Wijzigen <br/> [**<Translate ios="true" ids="quick_action_map_source_title"/>**](../map/raster-maps.md) | De knop stelt u in staat om een enkele kaartbron of een lijst met bronnen toe te wijzen die circulair veranderen wanneer erop wordt getikt of met een tussentijds dialoogvenster. <br/> - *Toon een tussentijds dialoogvenster*. Toont een dialoogvenster met een lijst van kaarten. <br/> - *Toon geen tussentijds dialoogvenster*. De kaartbronnen veranderen in een gedefinieerde volgorde. <br/> - *Weergegeven Naam* - *Kaartbron* >. ">" na de kaartnaam geeft aan welke kaartbron momenteel is geselecteerd. <br/> - *Weergegeven Naam* - > *Volgende kaartbron*. ">" voor de kaartnaam geeft aan wat de volgende geselecteerde kaartbron zal zijn als de actie wordt uitgevoerd. <br/> - *Opmerking*. Om kaartbronnen in OsmAnd te wijzigen, kunt u ofwel één snelle actie instellen waarmee u tussen meerdere kaartbronnen kunt wisselen, ofwel meerdere afzonderlijke snelle acties maken, elk voor een specifieke kaartbron. |
| Tonen / Verbergen <br /> [**Openbaar vervoer**](../map/vector-maps.md#transport) | Schakel de kaartlaag voor openbaar vervoer in of uit <br /> - *Vervoerstype*. Bij de eerste tik kunt u een of meerdere vervoerstypes selecteren, waaronder *Vervoershaltes*, *Bus-, trolleybus- en shuttle-routes*, *Tram- en treinroutes*, *Metroroutes*. |
| Wijzigen <br/> [**<Translate ios="true" ids="map_settings_over"/>**](../map/raster-maps.md) | Maak een lijst van kaartbronnen als een kaartoverlay en doorloop ze. <br /> - *Opmerking*. Om kaartoverlays in OsmAnd te wijzigen, kunt u ofwel één snelle actie instellen waarmee u tussen meerdere kaartoverlays kunt wisselen, ofwel meerdere afzonderlijke snelle acties maken, elk voor een specifieke kaartoverlay. |
| Wijzigen <br/> [**<Translate ios="true" ids="map_settings_under"/>**](../map/raster-maps.md) | Maak een lijst van kaartbronnen als een kaartonderlaag en doorloop ze. <br /> - *Opmerking*. Om kaartonderlagen in OsmAnd te wijzigen, kunt u ofwel één snelle actie instellen waarmee u tussen meerdere kaartonderlagen kunt wisselen, ofwel meerdere afzonderlijke snelle acties maken, elk voor een specifieke kaartonderlaag.  |
| Wijzigen <br/> [**<Translate android="true" ids="quick_action_map_style"/>**](../map/vector-maps.md#default-map-styles) | Maak een lijst van kaartstijlen voor vectorkaarten en doorloop ze. <br /> - *Opmerking*. Om kaartstijlen in OsmAnd te wijzigen, kunt u ofwel één snelle actie instellen waarmee u tussen meerdere kaartstijlen kunt wisselen, ofwel meerdere afzonderlijke snelle acties maken, elk voor een specifieke kaartstijl. |
| Tonen / Verbergen <br/> [**Mapillary-laag**](../plugins/mapillary.md) | Hiermee kunt u kaartlagen bekijken met straatbeelden geleverd door Mapillary. |
| Tonen / Verbergen <br/> [**<Translate android="true" ids="osm_notes"/>**](../plugins/osm-editing.md) | U kunt ervoor kiezen om alle OSM-notities op de kaart te tonen of te verbergen met een enkele tik op de knop. |


### Interface {#interface}

| Actie | Beschrijving |
|:-------------|:-------------|
| Navigeer <br/> **Vorig scherm** | Een schakelaar om naar het vorige scherm te navigeren. |
| Tonen / Verbergen <br/> [**Navigatieweergave**](../navigation/setup/route-navigation.md) | Schakelt de zichtbaarheid van de navigatieschermweergave. |
| Tonen / Verbergen <br/> [**Zoekweergave**](../search/search-all.md) | Opent of sluit de zoekweergave. |
| Tonen / Verbergen <br/> [**Zijmenu**](../start-with/main-menu.md) | Schakelt de zichtbaarheid van het hoofdmenu aan de zijkant voor toegang tot kernfuncties. |
| Aan / Uit <br/> [**Aanraakschermvergrendeling**](../map/interact-with-map.md#touch-screen-lock) | Activeert of deactiveert de aanraakschermvergrendeling om onbedoelde scherminteracties te voorkomen. |
| Openen <br/> **WunderLINQ Datagrid** | Opent de WunderLINQ-gegevensinterface voor het bekijken van informatie van verbonden apparaten; leidt door naar de App Store als de vereiste WunderLINQ-app niet is geïnstalleerd. |


### Kaartinteracties {#map-interactions}

| Actie | Beschrijving |
|:-------------|:-------------|
| Kaart <br/> [**Inzoomen**](../map/interact-with-map.md) | Inzoomen op de kaart met gelijktijdige toename van de hoeveelheid weergegeven gegevens. |
| Kaart <br/> [**Uitzoomen**](../map/interact-with-map.md) | De kaart verkleinen. Handig om te gebruiken met [Ontwikkelaarswidget - Zoomniveau](../widgets/info-widgets.md#developer-widgets). |
| Verplaats <br/> [**Kaart omlaag**](../map/interact-with-map.md) | U kunt de snelle actie knop gebruiken om de kaart omlaag te verplaatsen.  |
| Verplaats <br/> [**Kaart omhoog**](../map/interact-with-map.md) | Wanneer erop wordt getikt, beweegt het kaartscherm omhoog. |
| Verplaats <br/> [**Kaart naar links**](../map/interact-with-map.md) | Wanneer u op de knop tikt, beweegt het kaartscherm naar links. |
| Verplaats <br/> [**Kaart naar rechts**](../map/interact-with-map.md) | Met een snelle actie knop kunt u de kaart naar rechts verplaatsen. |
| Verplaats <br/> [**Naar Mijn locatie**](../map/interact-with-map.md#my-location-and-zoom) | Verplaatst de kaart naar de positie *Mijn locatie*. |


### Mijn Plaatsen {#my-places}

| Actie | Beschrijving |
|:-------------|:-------------|
| Start / Pauzeer <br/> [**Ritopname**](../plugins/trip-recording.md#new-track-recording) | Begin een opnamesessie van de huidige track of pauzeer om tijdelijk te stoppen zonder de rit te voltooien. |
| Start  <br/> [**Nieuw ritsegment**](../plugins/trip-recording.md#overview-screen) | Start een nieuw segment van de rit zonder de algehele opname te stoppen. |
| Opslaan <br/> [**Opgenomen Rit & Doorgaan**](../plugins/trip-recording.md#current-track-recording) | Sla de huidige ritopname op en ga door met opnemen zonder onderbreking. |
| Voltooi <br/> [**Ritopname**](../plugins/trip-recording.md#current-track-recording) | Beëindig de huidige ritopnamesessie. |
| Toevoegen <br/> [**Favoriet**](../map/configure-map-menu.md#map-layers) | Voegt een favoriet toe aan de geselecteerde (centrale) kaartlocatie. <br /> - *Toon een tussentijds dialoogvenster*. Toont een bevestigingsdialoog. <br /> - *Groep*. Voegt een favoriet toe aan de geselecteerde groep. <br /> - *Kleur*. Voegt een favoriet toe met een vooraf geselecteerde kleur <br /> - *Naam*. Voegt een favoriet toe met het opgegeven naamvoorvoegsel.  |
| Toevoegen <br/> [**Track waypoint**](../map/point-layers-on-map.md#track-waypoints) | Voegt een nieuw Track waypoint toe aan de [huidig opgenomen track](../plugins/trip-recording.md) of [elke track in Mijn Plaatsen](../personal/tracks/manage-tracks.md). <br /> - *Toon een tussentijds dialoogvenster*. Toont een bevestigingsdialoog. <br /> - *Groep*. Voegt een favoriet toe aan de geselecteerde groep. <br /> - *Kleur*. Voegt een favoriet toe met een vooraf geselecteerde kleur <br /> - *Naam*. Voegt een favoriet toe met het opgegeven naamvoorvoegsel.  |
| Toevoegen <br/> [**Kaartmarkering**](../map/configure-map-menu.md#map-layers) | Voegt een markering toe aan een geselecteerde (centrale) kaartlocatie. |
| Toevoegen <br/> [**Parkeerplaats**](../plugins/parking.md) | Voegt een parkeerplaats toe aan een geselecteerde (centrale) kaartlocatie. De oude parkeerpositie wordt verwijderd. |
| Toevoegen <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Voegt POI toe aan een geselecteerde (centrale) kaartlocatie (zelfde als contextmenu-actie). <br /> - *Toon een tussentijds dialoogvenster*. Toont een bevestigingsdialoog. <br /> - *POI Type* (optioneel). Selecteert vooraf het OSM POI-type. <br /> - *Tag/Waarde* (meerdere). Voegt [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_Features) tags / waarden toe |
| Toevoegen <br/> [**OSM Notitie**](../plugins/osm-editing.md#create--modify-osm-note) | Voegt een [OSM notitie](https://wiki.openstreetmap.org/wiki/Notes) toe <br /> - *Toon een tussentijds dialoogvenster*. Toont een bevestigingsdialoog. <br /> - *Bericht*. Voegt een standaardbericht toe aan de notitie. |
| Toevoegen <br/> [**Media notities**](../plugins/audio-video-notes.md) | Start audio / foto / video notitie-opname voor een geselecteerde (centrale) kaartlocatie; een herhaalde druk stopt de opname. |
| Creëer <br/> [**Nieuwe route**](../plan-route/create-route.md) <br /> *Alleen Android* | Opent de [Plan een route](../plan-route/create-route.md) tool en creëert een route voor de geselecteerde (centrale) locatie op de kaart. |


### Navigatie {#navigation}

| Actie | Beschrijving |
|:-------------|:-------------|
| Toevoegen <br/> [**<Translate android="true" ids="quick_action_first_intermediate"/>**](../navigation/setup/route-navigation.md#intermediate-destinations) | U kunt het midden van het kaartscherm selecteren als het eerste tussenpunt. De vorige bestemming blijft hetzelfde. |
| Aan / Uit <br/> [**Spraakinstructies**](../navigation/guidance/voice-navigation.md) | Demp of activeer spraakbegeleiding tijdens navigatie. |
| Instellen <br/> [**Startpunt**](../navigation/setup/route-navigation.md#set-destinations) | Markeer een geselecteerde (centrale) kaartlocatie als vertrekpunt. |
| Instellen <br/> [**Bestemming**](../navigation/setup/route-navigation.md#set-destinations) | Voeg de geselecteerde (centrale) locatie op de kaart toe als bestemming. De vorige bestemming wordt het laatste tussenpunt.  |
| Vervang <br/> [**Bestemming**](../navigation/setup/route-navigation.md#intermediate-destinations) | Stel / Vervang een geselecteerde (centrale) kaartlocatie in als bestemming. De vorige bestemming wordt verwijderd. |
| Aan / Uit <br/> [**Auto-zoom kaart**](../map/interact-with-map.md) | Schakel automatisch inzoomen van de kaart tijdens navigatie in of uit. |
| Start/stop <br/> [**Navigatie**](../navigation/setup/route-navigation.md#start--stop-navigation) | Start navigatie (als er een bestemming aanwezig is) of stop navigatie. |
| Pauzeer / Hervat <br/> [**Navigatie**](../navigation/setup/route-navigation.md#pause--resume-navigation) | Pauzeer / Hervat navigatie. |
| Verwijder <br/> [**Volgend bestemmingspunt**](../navigation/setup/route-navigation.md#intermediate-destinations) | Verwijdert het volgende tussenpunt, indien aanwezig, anders wordt de bestemming verwijderd en wordt het dialoogvenster voor het beëindigen van de navigatie weergegeven. De actie is inactief als u geen bestemming heeft. |
| Simuleer <br/> [**Locatie via GPX**](../plugins/development.md#gpx-track-simulation) | Simuleert de locatie en beweging van uw apparaat met behulp van een GPX-track. |


### Instellingen {#settings}

| Actie | Beschrijving |
|:-------------|:-------------|
| Wijzig <br/> [**App profiel**](../personal/profiles.md) | Maak een lijst van applicatieprofielen en doorloop ze.  <br /> - *Toon een tussentijds dialoogvenster*. Toont een dialoogvenster met een lijst van profielen. <br /> - *Toon geen tussentijds dialoogvenster*. De profielen veranderen in een gedefinieerde volgorde. <br /> - *Opmerking*. U kunt een enkele actie aanpassen waarmee u tussen meerdere profielen kunt wisselen, of meerdere afzonderlijke acties maken, elk voor een specifiek profiel. |
| Wijzig <br/> [**App profiel naar volgende**](../personal/profiles.md) | Schakelt over naar het volgende profiel in de lijst. |
| Wijzig <br/> [**App profiel naar vorige**](../personal/profiles.md) | Schakelt over naar het vorige profiel in de lijst. |
| Wijzig <br/> [**<Translate android="true" ids="quick_action_display_position_in_center"/>**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> (iOS **Locatiepositie op scherm**)  | Hiermee kunt u de plaatsing van de *Mijn Locatie* cursor op de kaart instellen. Schakelt in of uit dat de cursor altijd in het midden van het scherm staat. |
| Wijzig <br/> [**Kaartoriëntatie**](../map/interact-with-map#map-orientation-modes) | Hiermee kunt u de rotatiemodus van de kaart wijzigen en schakelen tussen geselecteerde oriëntatietypes. U kunt kiezen welke modi in de cyclus worden opgenomen. |


## Toetsenbord Gebruiken voor Acties {#use-keyboard-for-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Externe apparaten](@site/static/img/map/external_custom_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/> → Device → Add*

![Externe apparaten](@site/static/img/map/external_custom_2_ios.png)

</TabItem>

</Tabs> 

Met de functionaliteit van de Snelle Actie tool kunt u de vereiste acties toewijzen aan de toetsen van uw externe invoerapparaat. Een beschrijving is te vinden in het artikel [Interactie met de Kaart](../map/interact-with-map.md#custom-input-device-type).


## Gerelateerde Artikelen {#related-articles}

- [Configureer Scherm](./configure-screen.md)
- [Kaartknoppen](./map-buttons.md)
- [Informatieve widgets](./info-widgets.md)
- [Navigatiewidgets](./nav-widgets.md)
- [Radiusliniaal en Liniaal](./radius-ruler.md)
- [Markeringswidgets](./markers.md)