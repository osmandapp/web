---
source-hash: 210874cd215f873716ff02e4a6ce9879fc7e3299b5e0bb94a5f569c0274b575a
sidebar_position: 2
title:  Interactie met de kaart
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

Dit artikel legt uit hoe u de kaart kunt aanpassen en ermee kunt interageren met behulp van verschillende knoppen en gebaren. Het behandelt hoe u de kaart kunt draaien, zoomen, de kijkhoek kunt aanpassen, en de kijkhoek van de kaart kunt wijzigen, handmatig of automatisch met het kompas, of volgens de peiling.


## Gebaren {#gestures}

Gebaren zijn essentieel om gemakkelijk en intuïtief op de kaart te navigeren.

| Kaartactie  | Gebaar  |
|:------------|:-------------|
| **Verplaatsen**    | Tik en houd de kaart vast met **één** vinger, en sleep vervolgens om te bewegen. |
| **Glijden**   | Veeg over de kaart met **één** vinger. |
| **Inzoomen** | Dubbeltik op de kaart met **één** vinger. <br/> Dubbeltik met **één** vinger en veeg naar beneden. <br/> Knijp met **twee** vingers om in te zoomen. |
| **Uitzoomen**| Dubbeltik met **twee** vingers. <br/> Dubbeltik met **één** vinger en veeg omhoog. <br/> Knijp met **twee** vingers om uit te zoomen. |
| **Draaien**  | Tik op de kaart met **twee** vingers en draai uw vingers in een cirkelvormige beweging. |
| **Kantelen (3D)** | Tik met **twee** vingers en beweeg ze omhoog of omlaag. <br/> Alleen beschikbaar met [Kaartweergave-engine](../personal/global-settings.md#map-rendering-engine) versie 2 (OpenGL). |

Glij-animaties kunnen worden uitgeschakeld in de instellingen met een [speciale optie](#remove-animations).


## Mijn locatie en zoom {#my-location-and-zoom}

![Schermmenu configureren](@site/static/img/widgets/location_zoom_buttons.png)

**Mijn locatie**.  
De knop *Mijn locatie* is een cirkelvormig pictogram dat aangeeft of het midden van de kaart gesynchroniseerd is met de huidige geolocatie van uw apparaat. Vaak de "Waar ben ik?"-knop genoemd, helpt het u snel uw locatie op de kaart te vinden. Tijdens het navigeren blijft de kaart doorgaans gesynchroniseerd met de locatie van het apparaat, dus de knop blijft verborgen. Hij wordt echter zichtbaar als de kaart en uw locatie niet meer synchroon lopen door interactie van de gebruiker. Door op de knop te tikken, wordt de kaart opnieuw gecentreerd op uw huidige locatie, en een dubbele tik schakelt over naar de 3D-modus.

- De knop *Mijn locatie* heeft de volgende statussen:
  - *Volledig blauw pictogram*. De locatie is gevonden maar niet gesynchroniseerd met de kaart.
  - *Wit pictogram*. De locatie is gevonden en gesynchroniseerd met de kaart.
  - *Grijs pictogram*. De locatie is nog niet gevonden.
  - *Pijlpictogram*. 3D-modus is geactiveerd.

- **Lang tikken** (*Android*) op de knop *Mijn locatie* opent het [contextmenu van de kaart](../map/map-context-menu.md), waarmee u uw locatie kunt delen.

<br/>

**Zoomknoppen**.  
*Zoomknoppen* zijn altijd zichtbaar naast *Mijn locatie* en stellen u in staat het zoomniveau van de kaart te regelen.

- Het wijzigen van het zoomniveau heeft geen invloed op de synchronisatie van de kaart met uw locatie.
- **Lang tikken** op de *Zoomknoppen* opent het dialoogvenster *Kaartvergrootglas*,waarmee u de detailniveaus van de kaart kunt aanpassen.
- Houd er rekening mee dat tijdens het navigeren de zoom automatisch kan worden geregeld door de instelling **Automatisch zoomen**:
   - *<Translate android="true" ids="android_button_seq"/>:*&nbsp; *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>*  
   - *<Translate ios="true" ids="ios_button_seq"/>:*&nbsp; *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>*  

### Uiterlijk van Mijn Locatie {#my-location-appearance}

U kunt de pictogrammen van de knop **Mijn locatie** aanpassen via de instellingen voor het uiterlijk van het profiel. Lees [hier](../personal/profiles.md#profile-appearance) meer over hoe u dit kunt doen.


## Kaartvergrootglas {#map-magnifier}

Het *Kaartvergrootglas* is een hulpmiddel dat de zichtbaarheid van de kaart verbetert, vergelijkbaar met een vergrootglas dat bij papieren kaarten wordt gebruikt. Hiermee kunt u inzoomen op de kaart om tekst en details duidelijker te zien of om het detailniveau aan te passen terwijl dezelfde schaal behouden blijft. Ga voor meer informatie naar het artikel [Vectorkaarten](../map/vector-maps.md#map-magnifier).


## Kaartoriëntatiemodi {#map-orientation-modes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Kompaswidget](@site/static/img/map/map_orientation_mode_2_andr.png)  
  
</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Kompaswidget](@site/static/img/map/map_orientation_mode_ios.png)  

</TabItem>

</Tabs>  

*Kaartoriëntatiemodi* stellen u in staat te kiezen hoe de kaart op het scherm van het apparaat wordt weergegeven. OsmAnd biedt modi zoals **Handmatig gedraaid**, **Bewegingsrichting**, **Kompasrichting** en **Noorden boven**. Het inschakelen van elke modus verandert de manier waarop de kaart wordt georiënteerd volgens de geselecteerde optie. Voor volledige details, zie het artikel [Kaartknoppen](../widgets/map-buttons.md#compass).


## Kompas {#compass}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Kompaswidget](@site/static/img/widgets/compass_widget.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Kompaswidget](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs>

De kompasknop toont hoe de [kaart is georiënteerd](#map-orientation-modes). De *rode pijl* op de pictogrammen, of de richting van de pijl in de modus *Bewegingsrichting*, geeft het noorden aan. [Het pictogram op de kompasknop](../widgets/map-buttons.md#compass) geeft de huidige kaartoriëntatiemodus aan. De kompasknopwidget biedt drie [interactieopties](../widgets/map-buttons.md#compass-tapping-behavior): *Enkele tik* draait de kaart naar het noorden, *Dubbele tik* wisselt tussen alle kaartoriëntatiemodi, en *Lange tik* opent de lijst met modi.


## Kaart draaien op basis van peiling {#rotate-map-by-bearing}

In de modus **kaart draaien op basis van peiling** ([Bewegingsrichting](../widgets/map-buttons.md#compass)), lijnt de kaart zich automatisch uit met uw bewegingsrichting, zodat het gebied voor u bovenaan het scherm wordt weergegeven. Deze modus verbetert de navigatie door het kaartcentrum iets naar beneden te verschuiven, waardoor meer van de route voor u zichtbaar wordt. Als u stilstaat, blijft de kaart vast.  

U kunt deze functie activeren via *Menu → Instellingen → Profielen → Algemene instellingen → Uiterlijk → Kaartoriëntatie* of door te dubbeltikken op de [Kompasknop](../widgets/map-buttons.md#compass-tapping-behavior). Voor meer details over peiling, zie [hier](../widgets/nav-widgets.md#bearing-widget).


## Kaart kantelen en horizon {#map-tilt-and-horizon}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kantelen android 1](@site/static/img/map/tilt_horizon_andr_1.png)  ![Kantelen android 2](@site/static/img/map/tilt_horizon_andr_2.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

![Kantelen ios 1](@site/static/img/map/tilt_horizon_ios_1.png) ![Kantelen ios 2](@site/static/img/map/tilt_horizon_ios_2.png)  
</TabItem>

</Tabs>  

Met de nieuwe [kaartweergave-engine](../personal/global-settings.md#map-rendering-engine) kunt u de [camerakanteling](../plugins/development.md#camera-tilt) wijzigen van 90 (geen kanteling) tot 10 graden. Ongeveer bij een kaartkanteling van minder dan 20-22 graden (deze parameter hangt af van het zoomniveau), wordt de denkbeeldige horizonlijn zichtbaar. In tegenstelling tot de echte horizon is de horizon van het programma altijd recht.  

Onder de horizon kunt u zogenaamde *nevel* of *mist* zien. Dit gebied van de kaart is gevuld met een grijze kleur, slechts enkele kaartdetails zijn waarneembaar.  
Het gebruik van mist is noodzakelijk omdat de weergave van verafgelegen objecten op de kaart aanzienlijke rekenkracht vereist en niet altijd gerechtvaardigd is vanwege [kaartvervormingen](../plugins/development.md#comparison-with-a-satellite-imagery) bij kleine kijkhoeken. De zichtbare afstand op de OsmAnd-kaart is momenteel beperkt tot 35 tegels.  

:::info
De kaartkanteling kan worden gewijzigd door lang met twee vingers op het scherm te tikken en ze omhoog/omlaag te bewegen. U kunt de kanteling ook wijzigen door op het pictogram [Mijn locatie](#my-location-and-zoom) in de rechterbenedenhoek van het scherm te tikken (alleen posities van 45 en 90 graden zijn beschikbaar).  
U kunt de camerakanteling niet wijzigen wanneer de oude [kaartweergave-engine](../personal/global-settings.md#map-rendering-engine) (versie 1) is ingeschakeld.
:::


## Aanraakschermvergrendeling {#touch-screen-lock}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Snelle actieknop Aanraakschermvergrendeling Android](@site/static/img/widgets/qa_touch_lock_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Snelle actieknop Aanraakschermvergrendeling iOS](@site/static/img/widgets/qa_touch_lock_ios.png)

</TabItem>

</Tabs>

Gebruik de functie **Aanraakschermvergrendeling** om onbedoelde tikken tijdens het navigeren te voorkomen. Dit is vooral handig bij activiteiten zoals fietsen of wandelen, waarbij onbedoelde aanrakingen uw route kunnen verstoren.

**Ontgrendelen**.  
Tik op de knop op het scherm, of, als de vergrendeling is geactiveerd via een externe knop (bijv. Volume Omlaag), druk op de externe knop en tik op de knop op het scherm.  

**Instellen**.

- Navigeer naar *Menu → Scherm configureren → Aangepaste knoppen*.
- Selecteer *+ → Actie toevoegen → Interface → Aanraakschermvergrendeling*.

Duidelijke berichten op het scherm zullen u begeleiden bij het vergrendelen of ontgrendelen van het scherm.


## Instellingen {#settings}

### Extra kompasinstellingen {#extra-compass-settings}

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> Vlakt de rotatie van de kaart af met een langzamere rotatieanimatie, hoewel dit een lichte vertraging introduceert, niet meer dan 1 seconde.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> Vlakt de rotatie van de kaart af met een langzamere rotatieanimatie, hoewel dit een lichte vertraging introduceert, niet meer dan 1 seconde.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### Animaties verwijderen {#remove-animations}

<InfoAndroidOnly/>  

U kunt alle kaartanimaties tijdens kaartinteracties, inclusief gebaren en knoppen, uitschakelen.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*


### Eigen positie animeren {#animate-own-position}

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  
**iOS**: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,routing_settings_2,animate_my_location"/>*  

Creëert een vloeiend kaart-pan-effect ten opzichte van het pictogram *[Mijn Positie](../personal/profiles/#profile-appearance)* wanneer u in beweging bent. Het effect introduceert een lichte vertraging ten opzichte van de werkelijke positie van ongeveer 1 seconde. Het inschakelen hiervan kan onder bepaalde omstandigheden merkbare vertragingsproblemen veroorzaken; schakel het uit als dergelijke problemen zich voordoen.


## Externe invoerapparaten {#external-input-devices}

Knoppen op externe invoerapparaten bieden een handige en efficiënte manier om te interageren met de kaart en de OsmAnd-applicatie-interface. Ze bevinden zich op externe apparaten, zoals **Bluetooth- of andere soorten toetsenborden**, **gespecialiseerde knoppen op navigatieapparaten voor voertuigen**, of [WunderLINQ](https://blackboxembedded.com/) en [Parrot](https://www.parrot.com/en) (*alleen Android*) controllers.  

Een van de hoofdfuncties van knoppen op externe invoerapparaten is het in- en uitzoomen van de kaart. Ze stellen u ook in staat om op de kaart te navigeren en de oriëntatie ervan te wijzigen zonder op het scherm te hoeven tikken en gebaren te maken. Knoppen op externe invoerapparaten ondersteunen vele andere functies, zoals het openen van het *Hoofdmenu* en het activeren van *Snelle acties*. Gebruikers kunnen ook knoptoewijzingen aanpassen voor ondersteunde apparaten (Toetsenbord, WunderLINQ en aangepaste externe controllers).

:::note
Het toetsenbord blijft functioneel, zelfs wanneer de optie *Externe invoerapparaten* is uitgeschakeld en *Geen* is geselecteerd. Aangepaste toetsentoewijzingen werken echter alleen wanneer *Externe invoerapparaten* zijn ingeschakeld.
:::

### Voorgeconfigureerd invoerapparaat {#preconfigured-input-device}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![Externe apparaten](@site/static/img/map/external_menu_android.png) ![Externe apparaten](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![Externe apparaten](@site/static/img/map/external_types_2_ios.png)

</TabItem>

</Tabs>  

Om toegang te krijgen tot de instellingen van een extern invoerapparaat, moet u deze functie inschakelen.

- Ga naar het hoofd-*Menu → Instellingen →* selecteer het *Profiel → Algemene instellingen → Overig → Externe invoerapparaten*, en schakel over naar *Ingeschakeld*.

- Selecteer een apparaat uit de door OsmAnd ondersteunde apparaten door op het item *Type* in de lijst te tikken:  
    **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*alleen Android*), of maak [**uw eigen type**](#custom-input-device-type).

- Er is een verschillende **gedefinieerde actie-toetsenbundel**-toewijzing voor elk type extern invoerapparaat. De sectie *<Translate android="true" ids="key_assignments"/>* toont de lijst met acties en hun toegewezen toetsen. De tabel met toetsen wordt hieronder weergegeven. Dit zijn standaardtoewijzingen – ze kunnen worden gewijzigd of uitgebreid volgens gebruikersvoorkeuren.

- U kunt meer lezen over acties van externe invoerapparaten op GitHub in het [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82) pakket.

| Toets | Apparaat | Actie |
|:---------|:---------------|:---------------|
|**C**| *Toetsenbord*   | Verplaatsen - [Naar Mijn locatie](#my-location-and-zoom) |
|**D**| *Toetsenbord*   | Wijzigen - [Kaartoriëntatie](#map-orientation-modes) |
|**N**| *Toetsenbord*   | Tonen / Verbergen - Navigatieweergave |
|**S**| *Toetsenbord*   | Tonen / Verbergen - [Zoekweergave](../search/index.md) |
|**P**| *Toetsenbord*   | Wijzigen - App-profiel naar volgende |
|**O**| *Toetsenbord*   | Wijzigen - App-profiel naar vorige |
|**&#8593;**| *Toetsenbord*   | Verplaatsen - Kaart omhoog  |
|**&#8595;**| *Toetsenbord*   | Verplaatsen - Kaart omlaag  |
|**&#8592;**| *Toetsenbord*   | Verplaatsen - Kaart naar links  |
|**&#8594;**| *Toetsenbord*   | Verplaatsen - Kaart naar rechts  |
|**&#43;** **=**| *Toetsenbord*  | Kaart - [Inzoomen](#my-location-and-zoom) |
|**&#8722;**| *Toetsenbord*  | Kaart - [Uitzoomen](#my-location-and-zoom) |
|**Press back**| *Toetsenbord*   | Navigeren – Vorig scherm  |
|**&#8595;**| *Wunderlinq*  | Kaart - [Uitzoomen](#my-location-and-zoom) |
|**&#8593;**| *Wunderlinq*  | Kaart - [Inzoomen](#my-location-and-zoom) |
| **ESC** | *Wunderlinq*  | WunderLINQ Datagrid openen |
| **M** | *Toetsenbord*  | Tonen / Verbergen - [Zijmenu](../start-with/main-menu.md#main-menu-side-menu) |
| **Joystick press** <br/> (*legacy Android*) | *Toetsenbord*  | Verplaatsen - [Naar Mijn locatie](#my-location-and-zoom) |
| **Media button** <br/> (*alleen Android*)| *Toetsenbord*  | Tonen / Verbergen - [AV-notities](../plugins/audio-video-notes.md#manage-a-single-note) |
| **&#8592;** <br/> (*alleen Android*)| *Parrot*  | Kaart - [Uitzoomen](#my-location-and-zoom) |
| **&#8594;** <br/> (*alleen Android*) | *Parrot*  | Kaart - [Inzoomen](#my-location-and-zoom) |


### Aangepast type invoerapparaat {#custom-input-device-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Externe apparaten](@site/static/img/map/external_mypilot_android.png)  ![Externe apparaten](@site/static/img/map/external_mypilot2_android.png)

Als u toetsen wilt toewijzen voor een extern invoerapparaat (zoals een toetsenbord, joystick of controller), moet u een apparaattype aanmaken: ga naar de instelling [Extern invoerapparaat](#external-input-devices), selecteer **Type** uit de lijst, tik op de&nbsp; "**＋**" &nbsp; en voer een naam in. Elk type heeft een menu met de volgende opties: ***Hernoemen, Dupliceren*** en ***Verwijderen***.

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/> → Device → Add*

![Externe apparaten](@site/static/img/map/external_mypilot_ios.png)  ![Externe apparaten](@site/static/img/map/external_mypilot2_ios.png)

Als u toetsen wilt toewijzen voor een extern invoerapparaat (zoals een toetsenbord, joystick of controller), moet u een apparaattype aanmaken: ga naar de instelling [Extern invoerapparaat](#external-input-devices), selecteer **Device** uit de lijst, tik op de&nbsp; "**Add**" &nbsp;en voer een naam in. Elk type heeft een menu met de volgende opties: ***Hernoemen, Dupliceren*** en ***Verwijderen***.

</TabItem>

</Tabs>  

### Actie & toetsentoewijzingen toevoegen {#add-action--key-asssigments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Externe apparaten](@site/static/img/map/external_custom_4_andr.png)  ![Externe apparaten](@site/static/img/map/external_custom_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Externe apparaten](@site/static/img/map/external_custom_4_ios.png)  ![Externe apparaten](@site/static/img/map/external_custom_3_ios.png) 

</TabItem>

</Tabs>  

Nadat u een aangepast invoertype hebt gemaakt, kunt u de vereiste acties aan de toetsen toewijzen. Een breed scala aan [actietypes](../widgets/quick-action.md#action-types) van de Snelle Actie-widget is beschikbaar.

- Selecteer een apparaattype en tik vervolgens op het item **Toetsentoewijzingen**.
- Tik op de knop ***Toevoegen*** (&nbsp;"**＋**"&nbsp;).
- Selecteer de vereiste actie, tik vervolgens op het veld ***Toets toevoegen*** en tik op de knop op uw apparaat om deze aan de actie toe te wijzen.  

:::note

- Meerdere toetsen kunnen aan één actie worden toegewezen.
- Als de knop die u toewijst al wordt gebruikt voor een andere actie, ontvangt u een melding met de optie om de knop opnieuw toe te wijzen of de toewijzing te annuleren.
- Later kunt u acties en toetsentoewijzingen wijzigen of andere toevoegen voor reeds gemaakte acties, selecteer gewoon een item in de lijst Toetsentoewijzingen.

:::

### Toetsentoewijzing verwijderen {#delete-key-assignment}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Externe apparaten](@site/static/img/map/external_custom_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Externe apparaten](@site/static/img/map/external_custom_1_ios.png)

</TabItem>

</Tabs> 

U kunt meerdere onnodige acties tegelijk verwijderen met de knop **Bewerken** (*potloodvormig* op Android):

- ***Eén actie verwijderen*** per actie, met de&nbsp; "**−**" &nbsp;knop in het itemveld. Toetsentoewijzing kan ook worden verwijderd via het contextmenu (lang indrukken op het item) door op **Verwijderen** te tikken.
- ***Alle toetsentoewijzingen verwijderen*** voor het geselecteerde type door op de knop in de rechterbovenhoek van het scherm naast de *Naam bewerken* op Android te tikken; door op de knop **Alles wissen** op iOS te tikken.


## Gerelateerde artikelen {#related-articles}

- [Contextmenu van de kaart](./map-context-menu.md)
- [Kaart configureren](./configure-map-menu.md)
- [Vectorkaarten (Kaartstijlen)](./vector-maps.md)
- [Rasterkaarten (Online / Offline)](./raster-maps.md)
- [Punten op de kaart](./point-layers-on-map.md)
- [Sporen en routes](./tracks/index.md)
- [Contextmenu van sporen](./tracks/track-context-menu.md)
- [Openbaar vervoer](./public-transport.md)