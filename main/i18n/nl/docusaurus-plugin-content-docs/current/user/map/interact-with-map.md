---
source-hash: e01063d9fc36bf4b74ae42e7ffe9e8041b28514fb02d5f5070fe0dae8604ff4b
sidebar_position: 2
title:  Interact with Map
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

Dit artikel legt uit hoe je de kaart kunt aanpassen en ermee kunt interageren met behulp van verschillende knoppen en gebaren. Het behandelt hoe je kunt roteren, zoomen, de kijkhoek aanpassen, en de kijkhoek van de kaart wijzigen, handmatig of automatisch roteren met behulp van het kompas, of volgens de koers.


## Gebaren {#gestures}

Gebaren zijn essentieel voor het gemakkelijk en intuïtief navigeren op de kaart.

| Kaartactie | Gebaar |
|:------------|:-------------|
| **Verplaatsen** | Tik en houd de kaart vast met **één** vinger, sleep vervolgens om te bewegen. |
| **Schuiven** | Veeg over de kaart met **één** vinger. |
| **Inzoomen** | Dubbeltik op de kaart met **één** vinger. <br/> Dubbeltik met **één** vinger en veeg naar beneden. <br/> Knijp met **twee** vingers om in te zoomen. |
| **Uitzoomen**| Dubbeltik met **twee** vingers. <br/> Dubbeltik met **één** vinger en veeg naar boven. <br/> Knijp met **twee** vingers om uit te zoomen. |
| **Roteren** | Tik op de kaart met **twee** vingers, roteer vervolgens je vingers in een cirkelvormige beweging. |
| **Kantelen (3D)** | Tik met **twee** vingers en beweeg ze omhoog of omlaag. <br/> Alleen beschikbaar met [Kaartweergave-engine](../personal/global-settings.md#map-rendering-engine) versie 2 (OpenGL). |

Schuifanimaties kunnen worden uitgeschakeld in de instellingen met een [speciale optie](#no-animations).


## Mijn locatie en zoom {#my-location-and-zoom}

![Configure screen menu](@site/static/img/widgets/location_zoom_buttons.png)

**Mijn locatie**.
De *Mijn locatie*-knop is een cirkelvormig pictogram dat aangeeft of het midden van de kaart is gesynchroniseerd met de huidige geolocatie van uw apparaat. Vaak aangeduid als de "Waar ben ik?"-knop, helpt het u snel uw locatie op de kaart te vinden. Tijdens navigatie blijft de kaart doorgaans gesynchroniseerd met de locatie van het apparaat, zodat de knop verborgen blijft. Deze wordt echter zichtbaar als de kaart en uw locatie door gebruikersinteractie niet meer gesynchroniseerd zijn. Door op de knop te tikken, wordt de kaart opnieuw gecentreerd op uw huidige locatie, en een dubbele tik schakelt de weergave over naar de 3D-modus.

- De *Mijn locatie*-knop heeft de volgende statussen:
  - *Volledig blauw pictogram*. De locatie is gevonden, maar niet gesynchroniseerd met de kaart.
  - *Wit pictogram*. De locatie is gevonden en gesynchroniseerd met de kaart.
  - *Grijs pictogram*. De locatie is nog niet gevonden.
  - *Pijlpictogram*. 3D-modus is geactiveerd.

- **Lang tikken** (*Android*) op de *Mijn locatie*-knop opent het [kaartcontextmenu](../map/map-context-menu.md), zodat u uw locatie kunt delen.

<br/>

**Zoomknoppen**.
*Zoomknoppen* zijn altijd zichtbaar naast *Mijn locatie* en stellen u in staat het zoomniveau van de kaart te regelen.

- Het wijzigen van het zoomniveau heeft geen invloed op de synchronisatie van de kaart met uw locatie.
- **Lang tikken** op de *Zoomknoppen* opent het dialoogvenster *Kaartvergroter*, waarmee u de detailniveaus van de kaart kunt aanpassen.
- Houd er rekening mee dat tijdens navigatie de zoom automatisch kan worden geregeld door de instelling **Auto zoom**:
   - *<Translate android="true" ids="android_button_seq"/>:*&nbsp; *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>*
   - *<Translate ios="true" ids="ios_button_seq"/>:*&nbsp; *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>*

### Uiterlijk van Mijn locatie {#my-location-appearance}

U kunt de pictogrammen van de knop **Mijn locatie** aanpassen met behulp van de instellingen voor het uiterlijk van het profiel. Lees hier meer over hoe u dit doet [hier](../personal/profiles.md#profile-appearance).


## Kaartvergroter {#map-magnifier}

De *Kaartvergroter* is een hulpmiddel dat de zichtbaarheid van de kaart verbetert, vergelijkbaar met een vergrootglas dat wordt gebruikt bij papieren kaarten. Hiermee kunt u inzoomen op de kaart om tekst en details duidelijker te bekijken of om het detailniveau aan te passen terwijl dezelfde schaal behouden blijft. Voor meer informatie, ga naar het artikel [Vector Maps](../map/vector-maps.md#map-magnifier).


## Kaartoriëntatiemodi {#map-orientation-modes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_mode_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_mode_ios.png)

</TabItem>

</Tabs>

*Kaartoriëntatiemodi* stellen u in staat te kiezen hoe de kaart op het scherm van het apparaat wordt weergegeven. OsmAnd biedt modi zoals **Handmatig geroteerd**, **Bewegingsrichting**, **Kompasrichting** en **Noord is boven**. Het inschakelen van elke modus verandert de manier waarop de kaart wordt georiënteerd volgens de geselecteerde optie. Voor volledige details, zie het artikel [Kaartknoppen](../widgets/map-buttons.md#compass).


## Kompas {#compass}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/compass_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs>

De kompas knop toont hoe de [kaart is georiënteerd](#map-orientation-modes). De *rode pijl* op pictogrammen, of de richting van de pijl in de modus *Bewegingsrichting*, geeft het Noorden aan. [Het pictogram op de kompas knop](../widgets/map-buttons.md#compass) geeft de huidige kaartoriëntatiemodus aan. De kompas knop widget biedt drie [interactieopties](../widgets/map-buttons.md#compass-tapping-behavior): *Enkele tik* roteert de kaart naar het Noorden, *Dubbele tik* wisselt tussen alle kaartoriëntatiemodi, en *Lange tik* opent de lijst met modi.


## Kaart roteren op koers {#rotate-map-by-bearing}

In de modus **kaart roteren op koers** ([Bewegingsrichting](../widgets/map-buttons.md#compass)) wordt de kaart automatisch uitgelijnd met uw bewegingsrichting, zodat het gebied voor u bovenaan het scherm wordt weergegeven. Deze modus verbetert de navigatie door het kaartcentrum iets naar beneden te verschuiven, waardoor meer van de route vooruit wordt getoond. Als u stilstaat, blijft de kaart vast.

U kunt deze functie activeren via *Menu → Instellingen → Profielen → Algemene instellingen → Uiterlijk → Kaartoriëntatie* of door dubbel te tikken op de [Kompas knop](../widgets/map-buttons.md#compass-tapping-behavior). Voor meer details over koers, zie [hier](../widgets/nav-widgets.md#bearing-widget).


## Kaartkanteling en horizon {#map-tilt-and-horizon}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tilt android 1](@site/static/img/map/tilt_horizon_andr_1.png) ![Tilt android 2](@site/static/img/map/tilt_horizon_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tilt ios 1](@site/static/img/map/tilt_horizon_ios_1.png) ![Tilt ios 2](@site/static/img/map/tilt_horizon_ios_2.png)
</TabItem>

</Tabs>

Met de nieuwe kaart [rendering engine](../personal/global-settings.md#map-rendering-engine) kunt u de [camerakanteling](../plugins/development.md#camera-tilt) wijzigen van 90 (geen kanteling) naar 10 graden. Bij een kaartkanteling van minder dan ongeveer 20-22 graden (deze parameter is afhankelijk van het zoomniveau) wordt de denkbeeldige horizonlijn zichtbaar. In tegenstelling tot de echte horizon is de programmahorizon altijd recht.

Onder de horizon ziet u zogenaamde *waas* of *mist*. Dit gebied van de kaart is gevuld met grijze kleur, slechts enkele kaartdetails kunnen worden waargenomen.
Het gebruik van mist is noodzakelijk omdat de weergave van objecten op afstand op de kaart aanzienlijke computerbronnen vereist en niet altijd gerechtvaardigd is vanwege kaart [vervormingen](../plugins/development.md#comparison-with-a-satellite-imagery) bij kleine kijkhoeken. De zichtbare afstand op de OsmAnd-kaart is momenteel beperkt tot 35 tegels.

:::info
De kaartkanteling kan worden gewijzigd door lang op het scherm te tikken met twee vingers en deze omhoog/omlaag te bewegen. U kunt de kanteling ook wijzigen door op het pictogram [Mijn locatie](#my-location-and-zoom) in de rechterbenedenhoek van het scherm te tikken (alleen posities van 45 en 90 graden zijn beschikbaar).
U kunt de camerakanteling niet wijzigen wanneer de oude [kaartweergave-engine](../personal/global-settings.md#map-rendering-engine) (versie 1) is ingeschakeld.
:::


## Aanraakschermvergrendeling {#touch-screen-lock}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Quick action button Touch Screen Lock Android](@site/static/img/widgets/qa_touch_lock_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Quick action button Touch Screen Lock iOS](@site/static/img/widgets/qa_touch_lock_ios.png)

</TabItem>

</Tabs>

Gebruik de functie **Aanraakschermvergrendeling** om onbedoelde tikken tijdens navigatie te voorkomen. Dit is vooral handig voor activiteiten zoals fietsen of wandelen, waarbij onbedoelde aanrakingen uw route kunnen verstoren.

**Ontgrendelen**.
Tik op de knop op het scherm, of, als de vergrendeling is geactiveerd, via een externe knop (bijv. Volume omlaag), druk op de externe knop en tik op de knop op het scherm.

**Instellen**.

- Navigeer naar *Menu → Scherm configureren → Aangepaste knoppen*.
- Selecteer *+ → Actie toevoegen → Interface → Aanraakschermvergrendeling*.

Duidelijke schermberichten begeleiden u bij het vergrendelen of ontgrendelen van het scherm.


## Instellingen {#settings}

### Extra kompasinstellingen {#extra-compass-settings}

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> Vloeiender maken van de rotatie van de kaart met een langzamere rotatieanimatie, hoewel dit een lichte vertraging introduceert, niet meer dan 1 seconde.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> Vloeiender maken van de rotatie van de kaart met een langzamere rotatieanimatie, hoewel dit een lichte vertraging introduceert, niet meer dan 1 seconde.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### Geen animaties {#no-animations}

<InfoAndroidOnly/>

U kunt alle kaartanimaties uitschakelen tijdens kaartinteracties, inclusief gebaren en knoppen.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*


### Eigen positie animeren {#animate-own-position}

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*
**iOS**: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,routing_settings_2,animate_my_location"/>*

Creëert een vloeiend kaartverschuivingseffect ten opzichte van het pictogram *[Mijn positie](../personal/profiles/#profile-appearance)* wanneer in beweging. Het effect introduceert een lichte vertraging ten opzichte van de werkelijkheid van ongeveer 1 seconde. Het inschakelen hiervan heeft naar verluidt onder bepaalde omstandigheden uitgesproken vertragingsproblemen veroorzaakt; schakel het uit als dergelijke problemen zich voordoen.


## Externe invoerapparaten {#external-input-devices}

Knoppen voor externe invoerapparaten bieden een handige en efficiënte manier om te interageren met de kaart en de OsmAnd-applicatie-interface. Ze bevinden zich op externe apparaten, zoals **Bluetooth of andere soorten toetsenborden**, **gespecialiseerde knoppen op navigatiesystemen in voertuigen**, of [WunderLINQ](https://blackboxembedded.com/) en [Parrot](https://www.parrot.com/en) controllers.

Een van de hoofdfuncties van knoppen op externe invoerapparaten is het in- en uitzoomen op de kaart. Ze stellen u ook in staat om de kaart te navigeren en de oriëntatie ervan te wijzigen zonder dat u op het scherm hoeft te tikken en te gebaren. Knoppen op externe invoerapparaten ondersteunen vele andere functies, zoals het openen van het *Hoofdmenu*.

:::note
Het toetsenbord blijft functioneel, zelfs wanneer de optie *Externe invoerapparaten* is uitgeschakeld en *Geen* is geselecteerd.
:::

### Vooraf geconfigureerd invoerapparaat {#preconfigured-input-device}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![External devices](@site/static/img/map/external_menu_android.png) ![External devices](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![External devices](@site/static/img/map/external_types_ios.png)

</TabItem>

</Tabs>

Om toegang te krijgen tot de instellingen van een extern invoerapparaat, moet u deze functie inschakelen.

- Ga naar het hoofd *Menu → Instellingen →* selecteer het *Profiel → Algemene instellingen → Overig → Externe invoerapparaten*, en schakel over naar *Ingeschakeld*.

- Selecteer een apparaat uit de door OsmAnd ondersteunde apparaten door op het item *Type* in de lijst te tikken:
    **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*alleen Android*), of maak [**uw eigen type**](#custom-input-device-type) (*alleen Android*).

- Er is een andere **gedefinieerde actie-toetsenbundel** toewijzing voor elk type extern invoerapparaat. Tik op de *<Translate android="true" ids="key_assignments"/>* om een lijst met acties en toetsen te zien. De tabel met toetsen wordt hieronder weergegeven.

- U kunt meer lezen over acties van externe invoerapparaten op GitHub in het pakket [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82).

| Toets | Apparaat | Actie |
|:---------|:---------------|:---------------|
|**C**| *Toetsenbord* | Verplaatsen - [Naar Mijn locatie](#my-location-and-zoom) |
|**D**| *Toetsenbord* | Wijzigen - [Kaartoriëntatie](#map-orientation-modes) |
|**N**| *Toetsenbord* | Tonen / Verbergen - Navigatieweergave |
|**S**| *Toetsenbord* | Tonen / Verbergen - [Zoekweergave](../search/index.md) |
|**P**| *Toetsenbord* | Wijzigen - App-profiel naar volgende |
|**O**| *Toetsenbord* | Wijzigen - App-profiel naar vorige |
|**&#8593;**| *Toetsenbord* | Verplaatsen - Kaart omhoog |
|**&#8595;**| *Toetsenbord* | Verplaatsen - Kaart omlaag |
|**&#8592;**| *Toetsenbord* | Verplaatsen - Kaart naar links |
|**&#8594;**| *Toetsenbord* | Verplaatsen - Kaart naar rechts |
|**&#43;** **=**| *Toetsenbord* | Kaart - [Inzoomen](#my-location-and-zoom) |
|**&#8722;**| *Toetsenbord* | Kaart - [Uitzoomen](#my-location-and-zoom) |
|**Druk terug**| *Toetsenbord* | Navigeren – Vorig scherm |
|**&#8595;**| *Wunderlinq* | Kaart - [Uitzoomen](#my-location-and-zoom) |
|**&#8593;**| *Wunderlinq* | Kaart - [Inzoomen](#my-location-and-zoom) |
| **ESC** | *Wunderlinq* | WunderLINQ Datagrid openen |
| **M** <br/> (*oud Android*) | *Toetsenbord* | Tonen / Verbergen - [Zijmenu](../start-with/main-menu.md#main-menu-side-menu) |
| **Joystick indrukken** <br/> (*oud Android*) | *Toetsenbord* | Verplaatsen - [Naar Mijn locatie](#my-location-and-zoom) |
| **Mediatoets** <br/> (*alleen Android*)| *Toetsenbord* | Tonen / Verbergen - [AV-notities](../plugins/audio-video-notes.md#manage-a-single-note) |
| **&#8592;** <br/> (*alleen Android*)| *Parrot* | Kaart - [Uitzoomen](#my-location-and-zoom) |
| **&#8594;** <br/> (*alleen Android*) | *Parrot* | Kaart - [Inzoomen](#my-location-and-zoom) |


### Aangepast invoerapparaattype {#custom-input-device-type}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![External devices](@site/static/img/map/external_mypilot_android.png) ![External devices](@site/static/img/map/external_mypilot2_android.png)

Als u toetsen wilt toewijzen voor een extern invoerapparaat (zoals een toetsenbord, joystick of controller), moet u een apparaattype maken: ga naar de instelling [Externe invoerapparaat](#external-input-devices), selecteer **Type** uit de lijst, tik op de &nbsp;"**＋**"&nbsp; en voer een naam in. Elk type heeft een menu met de volgende opties: ***Hernoemen, Dupliceren*** en ***Verwijderen***.

### Actie en toets toewijzingen toevoegen {#add-action--key-asssigments}

![External devices](@site/static/img/map/external_custom_4_andr.png) ![External devices](@site/static/img/map/external_custom_3_andr.png)

Nadat u een aangepast invoertype hebt gemaakt, kunt u de vereiste acties aan de toetsen toewijzen. Een breed scala aan [actietypen](../widgets/quick-action.md#action-types) van de Quick Action-widget is beschikbaar.

- Selecteer een apparaattype en tik vervolgens op het item **Toets toewijzingen**.
- Tik op de knop ***Toevoegen*** (&nbsp;"**＋**"&nbsp;) in de rechterbenedenhoek van het scherm.
- Selecteer de gewenste actie en tik vervolgens op het veld ***Toets toevoegen*** en tik op de knop op uw apparaat om deze aan de actie toe te wijzen.

:::note

- Als de knop die u toewijst al wordt gebruikt voor een andere actie, ontvangt u een melding met de optie om de knop opnieuw toe te wijzen of de toewijzing te annuleren.
- Later kunt u acties en toets toewijzingen wijzigen of andere toevoegen voor reeds gemaakte acties, selecteer gewoon een item in de lijst met toets toewijzingen.

:::

### Toets toewijzing verwijderen {#delete-key-assignment}

![External devices](@site/static/img/map/external_custom_1_andr.png)

U kunt meerdere onnodige acties tegelijk verwijderen met de **Bewerkknop** (*potloodvormig*) in de rechterbovenhoek van het scherm:

- ***Eén actie verwijderen*** per actie, met de &nbsp;"**−**"&nbsp; knop in het itemveld.
- ***Alle toets toewijzingen verwijderen*** voor het geselecteerde type door op de knop in de rechterbovenhoek van het scherm naast *Naam bewerken* te tikken.


## Gerelateerde artikelen {#related-articles}

- [Kaartcontextmenu](./map-context-menu.md)
- [Kaart configureren](./configure-map-menu.md)
- [Vectorkaarten (Kaartstijlen)](./vector-maps.md)
- [Rasterkaarten (Online / Offline)](./raster-maps.md)
- [Punten op de kaart](./point-layers-on-map.md)
- [Routes en sporen](./tracks/index.md)
- [Sporencontextmenu](./tracks/track-context-menu.md)
- [Openbaar vervoer](./public-transport.md)


> *Laatst bijgewerkt: december 2024*