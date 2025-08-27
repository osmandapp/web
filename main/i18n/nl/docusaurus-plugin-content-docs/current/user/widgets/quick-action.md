---
source-hash: 7383905bb345c0cfdbf50ed15d18aae91b8bc80311e03ee2f6696d7066e7903f
sidebar_position: 7
title:  Snelle actie (Aangepaste knoppen)
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

De Snelle actie-widget is een interactief gebruikersinterface-element dat snelle toegang biedt tot belangrijke functies of acties zonder extra instellingen te openen. Deze widget wordt op het hoofdscherm van de kaart geplaatst en stelt u in staat om de interactie met de applicatie te vereenvoudigen en te versnellen, waardoor deze handiger en efficiënter wordt.

![Snelle actie-widget](@site/static/img/widgets/quick_action_widget.png)


## Snelle actie-widget {#quick-action-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Snelle actie-widget_android](@site/static/img/widgets/quick_action_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Snelle actie-widget_ios](@site/static/img/widgets/quick_action_widget_ios.png)

</TabItem>

</Tabs>

Om de Snelle actie-knop te gebruiken, moet u deze widget eerst inschakelen.

<!--
- To open the Quick action menu, just tap the button.
- By default, the Quick action button will appear on the right corner (above the zoom buttons), but it can be moved to any part of the screen by long tapping it. -->


### Acties toevoegen en verwijderen {#add-and-delete-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/> → Tik op Verwijderen (Prullenbakpictogram rechtsboven) → Selecteer acties*

![Snelle actie-widget_android_add](@site/static/img/widgets/quick_action_widget_andr.png) ![Aangepaste knop Android](@site/static/img/widgets/add_action_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/> → Tik op Bewerken (Potloodpictogram rechtsboven) → Selecteer acties*

![Snelle actie-widget_ios_add](@site/static/img/widgets/quick_action_widget_2_ios.png) ![Aangepaste knop Android](@site/static/img/widgets/add_action_screen_ios.png)

</TabItem>

</Tabs>

Alle acties zijn georganiseerd in het menu **Actie toevoegen** en gegroepeerd op type. Een complete lijst van acties en hun beschrijvingen is te vinden in de sectie [Actietypen](#action-types).

U kunt een of meer [acties](#action-types) toewijzen aan de snelle actieknop. Er zijn twee manieren om acties toe te voegen.

- **In het configuratiescherm**. Selecteer een knop uit de lijst en tik op de "**＋**" knop. U moet eerst het [actietype](#action-types) selecteren en vervolgens de naam en [parameters](#actions-in-loop) wijzigen.
- **In het snelle actieknop-paneel**. Tik op de *Snelle actieknop* op het kaartscherm. Aan het einde van de lijst, op het laatste scherm in het paneel, bevindt zich het "**＋**" *Actie toevoegen*-vak. Tik erop en selecteer een actie uit de [lijst met typen](#action-types).


:::note

- Elke actie moet een unieke naam hebben.
- De schermen, numeriek gelabeld als Scherm 1, Scherm 2, enz., worden automatisch aangemaakt wanneer het aantal acties in de lijst toeneemt tot 6 items.

:::


### Actieparameters {#action-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Snelle actie-widget_android_order](@site/static/img/widgets/quick_action_widget_android_order.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Snelle actie-widget_ios_order](@site/static/img/widgets/quick_action_widget_ios_order.png)

</TabItem>

</Tabs>

De acties die aan een snelle actieknop zijn toegewezen, zijn gegroepeerd in schermen. Deze groepen acties worden geopend wanneer u op die knop op de kaart tikt. Nieuwe schermen worden automatisch aangemaakt wanneer de lijst met acties meer dan *6 items* bevat. U kunt acties herschikken naar uw voorkeuren door de volgende stappen te volgen:

**Voor Android**.

1. Via het configuratiescherm:

    - Ga naar *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*.
    - Gebruik *Vasthouden & Slepen* op het pictogram met de twee verticale lijnen om acties te herschikken.

2. Via het snelle actiemenu:

    - Open het snelle actiemenu en tik lang op *Actie toevoegen*.
    - Gebruik *Vasthouden & Slepen* op het pictogram met de twee verticale lijnen om acties te herschikken.

**Voor iOS**.

- Navigeer naar *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>*.
- Tik op *Bewerken* (potloodpictogram), en vervolgens op *Vasthouden & Slepen* op het pictogram met de drie verticale lijnen om acties te herschikken.

#### Acties in lus {#actions-in-loop}

![Aangepaste knop Android](@site/static/img/widgets/actions_in_loop_andr.png)

Voor sommige acties kunt u een lijst met lagen toewijzen die bij elke tik in een cirkel zullen veranderen: *Kaartbron*, *Kaartstijl*, *Overlay*, *Underlay*, *Terreinkleurenschema*, *Profiel toevoegen*.

De knop stelt u in staat om een enkele laag of een lijst met lagen toe te wijzen die circulair veranderen wanneer erop getikt wordt of met een tussentijds dialoogvenster.

- **Toon een tussentijds dialoogvenster**. Toont een dialoogvenster met een lijst met kaarten.
- **Toon geen tussentijds dialoogvenster**. De kaartbronnen veranderen in een gedefinieerde volgorde.


### Positie op de kaart wijzigen {#change-position-on-the-map}

De *Snelle actie*-widget verschijnt in de rechterbenedenhoek van het kaartscherm wanneer u deze voor het eerst inschakelt. U kunt de widget naar elk deel van het scherm verplaatsen door vast te houden en te slepen. Voor een precieze en nauwkeurige plaatsing van knoppen op het kaartscherm worden ze automatisch uitgelijnd op de dichtstbijzijnde onzichtbare rasterpositie wanneer ze worden gesleept.

- **Initiële weergave**. Standaard wordt de snelle actie-widget in de rechterbenedenhoek van de kaartinterface geplaatst.

    ![Snelle actie-widget_weergave](@site/static/img/widgets/quick_action_widget_view.png)

- **Verplaats de widget**. Door de widget lang ingedrukt te houden en te slepen, kunt u deze op het scherm verplaatsen, met automatische kolom- en rijuitlijning.

    ![Snelle actie-widget_tikken](@site/static/img/widgets/quick_action_widget_tap.png)

- **Nieuwe plaatsing**. Eenmaal verplaatst, blijft de widget op zijn nieuwe positie op het kaartscherm totdat deze handmatig opnieuw wordt aangepast.

    ![Snelle actie-widget_verplaatsen](@site/static/img/widgets/quick_action_widget_move.png)

- **Meerdere [Aangepaste knoppen](#custom-buttons)**. U kunt meerdere snelle actieknoppen toevoegen aan het kaartscherm. Deze knoppen kunnen ook individueel worden aangepast en verplaatst met dezelfde slepen-en-neerzetten-methode.

    ![Snelle actie-widget_verplaatsen](@site/static/img/widgets/quick_action_widget_multi.png)


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

**Aangepaste knoppen** zijn extra knoppen op de kaart die hetzelfde werken als de *Snelle actie*-knop. U kunt een knop maken met een of meer acties en deze op het kaartscherm weergeven. Aangepaste knoppen bevinden zich in de lijst *Configureer scherm → Knoppen → Aangepaste knoppen*. Elke knop heeft een profielonafhankelijke actielijst en moet een unieke ***Naam*** hebben, maar een knop kan individueel voor elk **profiel** worden in- of uitgeschakeld.

Alle beschikbare [acties](#action-types) zijn identiek aan die welke kunnen worden toegepast op de standaard snelle actie. Aangepaste knoppen kunnen worden geconfigureerd als ***Enkele actie***-knoppen, die de geselecteerde actie onmiddellijk toepassen wanneer erop wordt getikt, zonder dat u door een extra menu hoeft te navigeren.


### Uiterlijk van de snelle actieknop {#quick-action-button-appearance}

<InfoAndroidOnly/>

![Uiterlijk van de snelle actieknop](@site/static/img/widgets/qa_button_appearance_andr.png)

U kunt het uiterlijk van de snelle actieknoppen wijzigen via: *Menu → Configureer scherm → Aangepaste knoppen → Snelle actie → menu met drie stippen → Uiterlijk*. Deze instelling biedt opties om de grootte, vorm, pictogram en achtergronddekking van de knop aan te passen, waardoor u meer controle krijgt over hoe de knoppen op uw scherm eruitzien.

Voor gedetailleerde aanpassingsinstellingen, raadpleeg het artikel [Configureer scherm](../widgets/configure-screen.md#button-appearance), waar u kunt leren hoe u het uiterlijk van elke knop kunt verfijnen om aan uw voorkeuren te voldoen.


## Actietypen {#action-types}

### Kaart configureren {#configure-map}

| Actie | Beschrijving |
|:-------------|:-------------|
| Tonen / Verbergen <br/> [**Routes**](../map/vector-maps.md#routes) | U kunt routetypen selecteren om hun weergave in of uit te schakelen. <br/> Sommige routes hebben aanvullende instellingen. Standaard, als u niets hebt geselecteerd in het menu [Kaart configureren](../map/configure-map-menu.md), wordt het eerste routetype uit de lijst toegewezen, anders wordt een type naar keuze toegewezen. U kunt meer lezen in het artikel [Routes](../map/routes.md). <br/> - ***Fietsroutes*** &nbsp;(*Route*, *Knooppuntnetwerken*) <br/> - ***Mountainbikeroutes*** &nbsp;(*MTB-schaal*, *IMBA*) <br/> - ***Wandelroutes*** &nbsp;(*OSMC*, *Netwerkverbinding*, *Knooppuntnetwerken*) <br/> - ***Moeilijkheidsgraad wandelpaden*** &nbsp;(*SAC-schaal*, *CAI-schaal*) <br/> - ***Skipistes*** <br/> - ***Paardrijroutes*** <br/> - ***Wildwatersporten*** <br/> - ***Hardlooproutes*** <br/> - ***Fitnessparcoursen*** <br/> - ***Reisroutes*** &nbsp;(*Tracks*, *Reisboeken*, *Punten*) <br/> |
| Tonen / Verbergen <br/> [**Topografielagen**](../plugins/topography.md#overview) | Alle topografische gegevens worden gepresenteerd als afzonderlijke kaartlagen. U kunt snel de zichtbaarheid van deze lagen schakelen met Snelle actie. <br/> - ***Contourlijnen*** <br/> - ***Terrein*** &nbsp;(*Afhankelijk van de geselecteerde laag in het menu [Kaart configureren](../map/configure-map-menu.md)*, *Schaduwkaart*, *Helling*, of *Hoogte* *wordt weergegeven.*) |
| Wijzigen <br/> [**Terreinkleurenschema**](../plugins/topography.md#modify-color-scheme) | Hiermee kunt u een of meer paletten selecteren uit een lijst met bestaande paletten, die veranderen wanneer u op de knop tikt. |
| Tonen / Verbergen <br/> [**Weerlagen**](../plugins/weather.md#weather-layers) | Alle weergegevens worden gepresenteerd als afzonderlijke kaartlagen. Met Snelle actie krijgt u snel toegang om de zichtbaarheid van deze lagen op de kaart te schakelen. <br/> - ***Neerslaglaag*** <br/> - ***Wolkenlaag*** <br/> - ***Druklaag*** <br/> - ***Windlaag*** <br/> - ***Temperatuurlaag*** |
| Openen <br/> [**Weerscherm**](../plugins/weather.md) <br /> *Alleen Android* | Opent het [*Weer*voorspellingsscherm](../plugins/weather.md#weather-forecast-screen) met de gedetailleerde informatie. |
| Tonen / Verbergen <br/> [**Favorieten**](../personal/favorites.md#view-on-the-map) | Toon of verberg de favoriete punten op de kaart. |
| Tonen / Verbergen <br/> [**Tracks**](../personal/tracks/manage-tracks.md#track-menu) | Toon of verberg de laatst zichtbare tracks op de kaart. |
| Tonen / Verbergen <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Schakel de weergave van POI-lagen met geselecteerde categorieën op de kaart in of uit.<br/>U kunt meerdere POI-categorieën selecteren. De actie vervangt de POI-categorieën die zijn geselecteerd in Kaart configureren zonder Snelle acties te gebruiken. |
| Wijzigen <br/> [**Kaartmodus**](../map/vector-maps.md#map-mode) | Snelle toegang om te schakelen tussen dag- en nachtmodus. |
| Wijzigen <br/> [**<Translate ios="true" ids="quick_action_map_source_title"/>**](../map/raster-maps.md) | De knop stelt u in staat om een enkele kaartbron of een lijst met bronnen toe te wijzen die circulair veranderen wanneer erop getikt wordt of met een tussentijds dialoogvenster. <br/> - *Toon een tussentijds dialoogvenster*. Toont een dialoogvenster met een lijst met kaarten. <br/> - *Toon geen tussentijds dialoogvenster*. De kaartbronnen veranderen in een gedefinieerde volgorde. <br/> - *Weergegeven naam* - *Kaartbron* >. ">" na de kaartnaam geeft aan welke kaartbron momenteel is geselecteerd. <br/> - *Weergegeven naam* - > *Volgende kaartbron*. ">" voor de kaartnaam geeft aan wat de volgende geselecteerde kaartbron zal zijn als de actie wordt uitgevoerd. <br/> - *Opmerking*. Om kaartbronnen in OsmAnd te wijzigen, kunt u ofwel een enkele snelle actie instellen waarmee u kunt schakelen tussen meerdere kaartbronnen, of meerdere afzonderlijke snelle acties maken, elk voor een specifieke kaartbron. |
| Tonen / Verbergen <br /> [**Openbaar vervoer**](../map/vector-maps.md#transport) | Schakel de kaartlaag voor openbaar vervoer in of uit <br /> - *Vervoerstype*. Bij de eerste tik kunt u een of meerdere vervoerstypen selecteren, waaronder *Vervoershaltes*, *Bus-, trolleybus- en shuttle routes*, *Tram- en treinroutes*, *Metro routes*. |
| Wijzigen <br/> [**<Translate ios="true" ids="map_settings_over"/>**](../map/raster-maps.md) | Maak een lijst met kaartbronnen als een kaartoverlay en blader erdoorheen. <br /> - *Opmerking*. Om kaartoverlays in OsmAnd te wijzigen, kunt u ofwel een enkele snelle actie instellen waarmee u kunt schakelen tussen meerdere kaartoverlays, of meerdere afzonderlijke snelle acties maken, elk voor een specifieke kaartoverlay. |
| Wijzigen <br/> [**<Translate ios="true" ids="map_settings_under"/>**](../map/raster-maps.md) | Maak een lijst met kaartbronnen als een kaartonderlaag en blader erdoorheen. <br /> - *Opmerking*. Om kaartoverlays in OsmAnd te wijzigen, kunt u ofwel een enkele snelle actie instellen waarmee u kunt schakelen tussen meerdere kaartonderlagen, of meerdere afzonderlijke snelle acties maken, elk voor een specifieke kaartonderlaag. |
| Wijzigen <br/> [**<Translate android="true" ids="quick_action_map_style"/>**](../map/vector-maps.md#default-map-styles) | Maak een lijst met kaartstijlen voor vectorkaarten en blader erdoorheen. <br /> - *Opmerking*. Om kaartstijlen in OsmAnd te wijzigen, kunt u ofwel een enkele snelle actie instellen waarmee u kunt schakelen tussen meerdere kaartoverlays, of meerdere afzonderlijke snelle acties maken, elk voor een specifieke kaartstijl. |
| Tonen / Verbergen <br/> [**Mapillary-laag**](../plugins/mapillary.md) | Hiermee kunt u kaartlagen bekijken met straatbeeldmateriaal van Mapillary. |
| Tonen / Verbergen <br/> [**<Translate android="true" ids="osm_notes"/>**](../plugins/osm-editing.md) | U kunt ervoor kiezen om alle OSM-notities op de kaart weer te geven of te verbergen met een enkele tik op de knop. |


### Interface {#interface}

| Actie | Beschrijving |
|:-------------|:-------------|
| Navigeren <br/> **Vorig scherm** | Een schakelaar om naar het vorige scherm te navigeren. |
| Tonen / Verbergen <br/> [**Navigatieweergave**](../navigation/setup/route-navigation.md) | Schakelt de zichtbaarheid van de navigatieschermweergave. |
| Tonen / Verbergen <br/> [**Zoekweergave**](../search/search-all.md) | Opent of sluit de zoekweergave. |
| Tonen / Verbergen <br/> [**Zijmenu**](../start-with/main-menu.md) | Schakelt de zichtbaarheid van het hoofd zijmenu voor toegang tot kernfuncties. |
| In- / Uitschakelen <br/> [**Touchscreenvergrendeling**](../map/interact-with-map.md#touch-screen-lock) | Activeert of deactiveert de touchscreenvergrendeling om onbedoelde scherminteracties te voorkomen. |


### Kaartinteracties {#map-interactions}

| Actie | Beschrijving |
|:-------------|:-------------|
| Kaart <br/> [**Inzoomen**](../map/interact-with-map.md) | Inzoomen op de kaart met gelijktijdige toename van de weergegeven gegevens. |
| Kaart <br/> [**Uitzoomen**](../map/interact-with-map.md) | De kaart verkleinen. Handig in combinatie met [Ontwikkelaarswidget - Zoomniveau](../widgets/info-widgets.md#developer-widgets). |
| Verplaatsen <br/> [**Kaart omlaag**](../map/interact-with-map.md) | U kunt de snelle actieknop gebruiken om de kaart omlaag te verplaatsen. |
| Verplaatsen <br/> [**Kaart omhoog**](../map/interact-with-map.md) | Wanneer u op de knop tikt, beweegt het kaartscherm omhoog. |
| Verplaatsen <br/> [**Kaart naar links**](../map/interact-with-map.md) | Wanneer u op de knop tikt, beweegt het kaartscherm naar links. |
| Verplaatsen <br/> [**Kaart naar rechts**](../map/interact-with-map.md) | Met een snelle actieknop kunt u de kaart naar rechts verplaatsen. |
| Verplaatsen <br/> [**Naar mijn locatie**](../map/interact-with-map.md#my-location-and-zoom) | Verplaatst de kaart naar de positie *Mijn locatie*. |


### Mijn plaatsen {#my-places}

| Actie | Beschrijving |
|:-------------|:-------------|
| Starten / Pauzeren <br/> [**Ritopname**](../plugins/trip-recording.md#new-track-recording) | Start een opnamesessie van de huidige track of pauzeer om tijdelijk te stoppen zonder de rit te voltooien. |
| Starten <br/> [**Nieuw ritsegment**](../plugins/trip-recording.md#overview-screen) | Start een nieuw segment van de rit zonder de algehele opname te stoppen. |
| Opslaan <br/> [**Opgenomen rit & Doorgaan**](../plugins/trip-recording.md#current-track-recording) | Sla de huidige ritopname op en ga door met opnemen zonder onderbreking. |
| Voltooien <br/> [**Ritopname**](../plugins/trip-recording.md#current-track-recording) | Beëindig de huidige ritopnamesessie. |
| Toevoegen <br/> [**Favoriet**](../map/configure-map-menu.md#map-layers) | Voegt een favoriet toe aan de geselecteerde (centrale) kaartlocatie. <br /> - *Toon een tussentijds dialoogvenster*. Toont een bevestigingsdialoogvenster. <br /> - *Groep*. Voegt een favoriet toe aan de geselecteerde groep. <br /> - *Kleur*. Voegt een favoriet toe met een vooraf geselecteerde kleur <br /> - *Naam*. Voegt een favoriet toe met het opgegeven naamvoorvoegsel. |
| Toevoegen <br/> [**Track waypoint**](../map/point-layers-on-map.md#track-waypoints) | Voegt een nieuw Track waypoint toe aan de [momenteel opgenomen track](../plugins/trip-recording.md) of [elke track in Mijn plaatsen](../personal/tracks/manage-tracks.md). <br /> - *Toon een tussentijds dialoogvenster*. Toont een bevestigingsdialoogvenster. <br /> - *Groep*. Voegt een favoriet toe aan de geselecteerde groep. <br /> - *Kleur*. Voegt een favoriet toe met een vooraf geselecteerde kleur <br /> - *Naam*. Voegt een favoriet toe met het opgegeven naamvoorvoegsel. |
| Toevoegen <br/> [**Kaartmarkering**](../map/configure-map-menu.md#map-layers) | Voegt een markering toe aan een geselecteerde (centrale) kaartlocatie. |
| Toevoegen <br/> [**Parkeerplaats**](../plugins/parking.md) | Voegt parkeerplaats toe aan een geselecteerde (centrale) kaartlocatie. De oude parkeerpositie wordt verwijderd. |
| Toevoegen <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Voegt POI toe aan een geselecteerde (centrale) kaartlocatie (hetzelfde als de contextmenu-actie). <br /> - *Toon een tussentijds dialoogvenster*. Toont een bevestigingsdialoogvenster. <br /> - *POI-type* (optioneel). Selecteert vooraf het OSM POI-type. <br /> - *Tag/Waarde* (meerdere). Voegt [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_Features) tags / waarden toe |
| Toevoegen <br/> [**OSM-notitie**](../plugins/osm-editing.md#create--modify-osm-note) | Voegt een [OSM-notitie](https://wiki.openstreetmap.org/wiki/Notes) toe <br /> - *Toon een tussentijds dialoogvenster*. Toont een bevestigingsdialoogvenster. <br /> - *Bericht*. Voegt een standaardbericht toe aan de notitie. |
| Toevoegen <br/> [**Medianotities**](../plugins/audio-video-notes.md) | Start audio-/foto-/video-opname voor een geselecteerde (centrale) kaartlocatie. |
| Maken <br/> [**Nieuwe route**](../plan-route/create-route.md) <br /> *Alleen Android* | Opent de tool [Plan een route](../plan-route/create-route.md) en maakt een route voor de geselecteerde (centrale) locatie op de kaart. |


### Navigatie {#navigation}

| Actie | Beschrijving |
|:-------------|:-------------|
| Toevoegen <br/> [**<Translate android="true" ids="quick_action_first_intermediate"/>**](../navigation/setup/route-navigation.md#intermediate-destinations) | U kunt het midden van het kaartscherm selecteren als het eerste tussenpunt. De vorige bestemming blijft hetzelfde. |
| In- / Uitschakelen <br/> [**Spraakinstructies**](../navigation/guidance/voice-navigation.md) | Dempen of dempen opheffen van spraakbegeleiding tijdens navigatie. |
| Instellen <br/> [**Startpunt**](../navigation/setup/route-navigation.md#set-destinations) | Markeer een geselecteerde (centrale) kaartlocatie als vertrekpunt. |
| Instellen <br/> [**Bestemming**](../navigation/setup/route-navigation.md#set-destinations) | Voeg de geselecteerde (centrale) locatie op de kaart toe als bestemming. De vorige bestemming wordt het laatste tussenpunt. |
| Vervangen <br/> [**Bestemming**](../navigation/setup/route-navigation.md#intermediate-destinations) | Stel een geselecteerde (centrale) kaartlocatie in/vervang deze als bestemming. De vorige bestemming wordt verwijderd. |
| In- / Uitschakelen <br/> [**Automatisch inzoomen op kaart**](../map/interact-with-map.md) | Schakel automatisch inzoomen op de kaart tijdens navigatie in of uit. |
| Starten/stoppen <br/> [**Navigatie**](../navigation/setup/route-navigation.md#start--stop-navigation) | Start navigatie (indien er een bestemming aanwezig is) of stop navigatie. |
| Pauzeren / Hervatten <br/> [**Navigatie**](../navigation/setup/route-navigation.md#pause--resume-navigation) | Pauzeer / Hervat navigatie. |
| Verwijderen <br/> [**Volgende bestemming**](../navigation/setup/route-navigation.md#intermediate-destinations) | Verwijdert het volgende tussenpunt, indien aanwezig, anders verwijdert het de bestemming en toont het dialoogvenster voor het beëindigen van de navigatie. De actie is inactief als u geen bestemming heeft. |
| Simuleren <br/> [**Locatie via GPX**](../plugins/development.md#gpx-track-simulation) | Simuleert de locatie en beweging van uw apparaat met behulp van een GPX-track. |


### Instellingen {#settings}

| Actie | Beschrijving |
|:-------------|:-------------|
| Wijzigen <br/> [**App-profiel**](../personal/profiles.md) | Maak een lijst met applicatieprofielen en blader erdoorheen. <br /> - *Toon een tussentijds dialoogvenster*. Toont een dialoogvenster met een lijst met profielen. <br /> - *Toon geen tussentijds dialoogvenster*. De profielen veranderen in een gedefinieerde volgorde. <br /> - *Opmerking*. U kunt een enkele actie aanpassen waarmee u kunt schakelen tussen meerdere profielen, of meerdere afzonderlijke acties maken, elk voor een specifiek profiel. |
| Wijzigen <br/> [**App-profiel naar volgende**](../personal/profiles.md) | Schakelt naar het volgende profiel in de lijst. |
| Wijzigen <br/> [**App-profiel naar vorige**](../personal/profiles.md) | Schakelt naar het vorige profiel in de lijst. |
| Wijzigen <br/> [**<Translate android="true" ids="quick_action_display_position_in_center"/>**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> *Alleen Android* | Hiermee kunt u de plaatsing van de *Mijn locatie*-cursor op de kaart instellen. Schakelt de cursor in of uit om altijd in het midden van het scherm te staan. |
| Wijzigen <br/> [**Locatiepositie op scherm**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> *Alleen iOS* | Hiermee kunt u de weergave van de eerder geselecteerde Mijn locatie-cursorpositie op de kaart in- of uitschakelen. |


## Toetsenbord gebruiken voor acties {#use-keyboard-for-actions}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Externe apparaten](@site/static/img/map/external_custom_2_andr.png)

Met de functionaliteit van de Snelle actie-tool kunt u de vereiste acties toewijzen aan de toetsen van uw externe invoerapparaat. Een beschrijving is te vinden in het artikel [Interactie met kaart](../map/interact-with-map.md#custom-input-device-type).


## Gerelateerde artikelen {#related-articles}

- [Scherm configureren](./configure-screen.md)
- [Kaartknoppen](./map-buttons.md)
- [Informatiewidgets](./info-widgets.md)
- [Navigatiewidgets](./nav-widgets.md)
- [Radiusliniaal en Liniaal](./radius-ruler.md)
- [Markeringswidgets](./markers.md)

> *Laatst bijgewerkt: april 2025*