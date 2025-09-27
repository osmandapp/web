---
source-hash: 14cc910311b8184de4592823da11d7e1fc80a1c137f871fb88891d55a65ae840
sidebar_position: 5
title:  Uiterlijk van de track
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

Met de functie **Uiterlijk van de track** kunnen gebruikers aanpassen hoe tracks op de kaart worden weergegeven. Dit omvat het aanpassen van kleur, breedte, richtingaanwijzers en andere visuele elementen. Het aanpassen van het uiterlijk van de track helpt bij het onderscheiden van meerdere tracks, het markeren van specifieke routes en het verbeteren van de leesbaarheid van de kaart.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Overzicht uiterlijk track Android](@site/static/img/map/track-appear-and-1.png)  ![Trackmenu Uiterlijk Android](@site/static/img/map/track_appearence_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Trackmenu Uiterlijk iOS](@site/static/img/map/track_appearence_1_ios.png) ![Trackmenu Uiterlijk iOS](@site/static/img/map/track_appearence_2_ios.png)  

</TabItem>

</Tabs>


## Toegang tot het menu {#access-to-the-menu}

U kunt het uiterlijk van de track op een van de volgende manieren wijzigen:

- **Vanuit Mijn Plaatsen**. Open *Menu → Mijn Plaatsen → Tracks*, selecteer een track, tik op het *Uiterlijk-pictogram* in het [trackcontextmenu](../../map/tracks/track-context-menu.md#overview).
- **Vanaf de kaart**. Tik direct op een track op de kaart en tik vervolgens op het *Uiterlijk-pictogram* in de sectie *Overzicht*.
- **Vanuit trackopname**. Wijzig het uiterlijk van de momenteel opgenomen track via het [contextmenu voor trackopname](../../plugins/trip-recording.md#current-track-recording).  
- **Vanuit het menu Kaart configureren**. Ga naar *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> →* **&#8942;** *→ <Translate android="true" ids="change_appearance"/>* voor de weergegeven tracks.


## Instellingen voor het uiterlijk van de track {#track-appearance-settings}

### Kleur {#color}

:::tip aankopen
Sommige instellingen kunt u alleen gebruiken met *OsmAnd Pro*. <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">Android</a> en <a href="https://osmand.net/docs/user/purchases/ios#free-and-paid-features">iOS</a> Gratis en betaalde functies.
:::

![Uiterlijk](@site/static/img/map/appearance_color_andr.png)

U kunt de kleur van de track handmatig instellen of **kleurgebaseerde datavisualisatie** gebruiken (bijv. snelheid, hoogte, helling). Als een track bepaalde gegevens mist, geeft OsmAnd ontbrekende secties in grijs weer.

**Beschikbare kleuropties:**

- **Gratis instellingen**: *<Translate android="true" ids="track_coloring_solid"/> kleur*, *<Translate android="true" ids="shared_string_speed"/>* (indien opgenomen) en *<Translate android="true" ids="altitude"/>* (indien opgenomen).

    ![Trackmenu Uiterlijk Trackkleur Android](@site/static/img/map/track_appearance_menu_track_color_android.png)  ![Uiterlijk Trackkleur Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png)  

- [Pro-functie](../../purchases/index.md)): *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>*.  

Voor meer details over het aanpassen van het uiterlijk van de routelijn, zie [Kaartscherm tijdens navigatie](../../navigation/guidance/map-during-navigation.md#color) en voor het selecteren en maken van een aangepaste kleur, zie [Kleurenschema's](../../personal/color-palette-schemes.md#routes).


### Breedte {#width}

![Trackmenu Uiterlijk Trackdikte Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)   ![Uiterlijk van de track](@site/static/img/map/track_appearance_width_andr.png)  

U kunt het uiterlijk van de track in verschillende menu's van de applicatie aanpassen:

- [*Track → Uiterlijk*](../../personal/tracks/manage-tracks.md#track-folder).
- [*Navigatie-instellingen → Routelijn aanpassen*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*Mijn Plaatsen → Tabblad Tracks → een willekeurige map → Standaard uiterlijk*](../../personal/tracks/manage-tracks.md#track-folder).

Pas de breedte van de track aan om de zichtbaarheid op de kaart te verbeteren.

- **Vooraf ingestelde opties**: **Dun, Medium** en **Dik**.

- **Aangepaste breedte**: Instelbaar van 1 tot 24 px met een schuifregelaar.

- **Breedte op basis van profiel**: Kan worden ingesteld via *Navigatie-instellingen → [Routelijn aanpassen](../../navigation/guidance/navigation-settings.md#customize-route-line)*.


### Interval splitsen {#split-interval}

![Trackmenu Uiterlijk Interval splitsen](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Interval splitsen](@site/static/img/map/track_appearance_menu_split_interval_ios.png)  

Selecteer of het interval op de track moet worden gesplitst **op afstand of op tijd**.

### Richtingpijlen {#direction-arrows}

![Trackmenu Uiterlijk richtingpijlen Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)  

Voegt **pijlmarkeringen** toe langs de track om de bewegingsrichting aan te geven.

### Start- en finishpictogrammen {#start-and-finish-icons}

![Trackmenu Uiterlijk start- en finishpictogrammen Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)  

Hiermee kunt u selecteren of de **start- en finishpictogrammen** voor tracksegmenten moeten worden weergegeven.

### Gaten samenvoegen {#join-gaps}

Verbindt **tracksegmenten** die werden onderbroken door GPS-verlies of een pauze in de opname. De functie **<Translate android="true" ids="join_segments"/>** (*Android*) of **<Translate ios="true" ids="gpx_join_gaps"/>** (*iOS*) stelt u in staat om deze gaten in de geselecteerde GPX-track met rechte lijnen te verbinden.

### Terugzetten naar origineel {#reset-to-original}

Herstelt alle **instellingen voor het uiterlijk van de track** naar hun standaardwaarden.


## 3D-track {#3d-track}

:::info Betaalde functie
**3D-track** is een betaalde **OsmAnd Pro**-functie voor [iOS](../../purchases/ios.md#pro-features) en [Android](../../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trackmenu Uiterlijk 3D-visualisatie](@site/static/img/map/3d_track_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trackmenu Uiterlijk 3D-visualisatie](@site/static/img/map/3d_track_appearance_ios.png)

</TabItem>

</Tabs>

De functie **3D-track** genereert een driedimensionale visualisatie door hoogtegegevens te integreren in standaard 2D-tracks. Deze functionaliteit creëert een weergave met verbeterde diepte, wat een precieze analyse van de track ten opzichte van het terrein mogelijk maakt. Door hoogtegegevens op te nemen, biedt de 3D-track een uitgebreider beeld van de topografie en geografische context van de route.

### Instellingen 3D-track {#3d-track-settings}

**Muurhoogte**  
U kunt een 3D-track visualiseren op basis van hoogte en andere beschikbare gegevens binnen de track, of op basis van een vaste hoogte.

- **<Translate android="true" ids="visualized_by"/>**: &nbsp;*Hoogte*, &nbsp;*Snelheid*, &nbsp;*Vaste hoogte*. 3D-sensorgegevens: &nbsp;*Hartslag*, &nbsp;*Trapfrequentie fiets*, &nbsp;*Fietsvermogen*, &nbsp;*Temperatuur*, &nbsp;*Fietssnelheid*.

- **<Translate android="true" ids="vertical_exaggeration"/>**. Indien gevisualiseerd op *Hoogte* of *Snelheid*, kunt u 3D-gegevens schalen om een meer prominente visualisatie voor de 3D-track te krijgen in het bereik van *Geen* tot *x3.0*.

- **<Translate android="true" ids="wall_height"/>**. Indien gevisualiseerd op *Vaste hoogte*, stelt u de vaste hoogte voor de 3D-track in door de hoogte op de kaart te definiëren in het bereik van *Geen* tot *2000 m*.

- U kunt dit combineren met [3D-reliëf](../../plugins/topography.md#3d-relief). Als de bron van de 3D-gegevens niet de hoogte is, zal de 3D-weergave een combinatie zijn van de reliëfhoogte en de geselecteerde gegevens, zoals snelheid of hartslag.

**<Translate android="true" ids="wall_color"/>**  
Past de **kleur van de 3D-track** aan met behulp van verlopen of datagebaseerde visualisatie.  
Opties zijn onder andere: *Geen*, &nbsp;*Effen*, &nbsp;*Aflopend verloop*, &nbsp;*Oplopend verloop*, &nbsp;*Hoogte*, &nbsp;*Helling*, &nbsp;*Snelheid*.

**<Translate android="true" ids="track_line"/>**  
Voegt een [gemarkeerde lijn](#color) toe aan de boven- of onderkant van de 3D-track.  
Opties zijn onder andere: *Boven*, &nbsp;*Onder*, &nbsp;*Boven en onder*.

> **OPMERKING**: *De **Android-versie** van de app vereist dat de kaartweergave-engine [Versie 2 (OpenGL)](../../personal/global-settings.md#map-rendering-engine) is ingeschakeld om 3D-trackvisualisatie te gebruiken.*


### Gebruiksscenario's {#use-cases}

De 3D-trackfunctie is zeer nuttig voor activiteiten zoals paragliden, waar het visualiseren van uw vliegroute diepere inzichten kan bieden. Door de track in 3D weer te geven, kunt u functies zoals **Muurhoogte** en **Muurkleur** gebruiken om waardevolle visuele informatie voor analyse te verkrijgen.

1. **Visualiseer op snelheid met 3D**.  
    Een veelvoorkomend gebruiksscenario is het gebruik van 3D-tracks om snelheidsvariaties te visualiseren. Hiermee kunt u specifieke delen van de track aanwijzen waar u vertraagde of versnelde.  

    Met Muurkleur gebaseerd op de Helling, kunt u zien hoe het terrein, met name heuvels en hellingen, uw snelheid beïnvloedde. Deze combinatie van snelheids- en hellingsvisualisatie biedt een gedetailleerd inzicht in de prestaties gedurende de activiteit.

2. **Visualiseer op hartsensor met 3D-reliëf**.  
    Een andere inzichtelijke toepassing is het combineren van hartslagsensorgegevens met 3D-reliëfkaarten. Hiermee kunt u hartslagfluctuaties direct op het terrein in kaart brengen, wat u een uitgebreid beeld geeft van hoe hoogteverschillen uw fysieke inspanning mogelijk hebben beïnvloed.  

    De 3D-reliëffunctie, die de hoogte overdrijft, werkt onafhankelijk van de 3D-trackweergave. Twee verticale overdrijvingsparameters kunnen worden aangepast om de correlatie tussen hartslag en terreinhoogte beter te begrijpen.

3. **Visualiseer trackhoogte en hellingskleurlijn op een platte kaartweergave.**  
    Bij het visualiseren van hoogtegegevens wordt aanbevolen een platte kaartweergave te gebruiken om problemen zoals GPS-fouten te voorkomen, die ertoe kunnen leiden dat delen van de track ondergronds lijken te liggen.  

    In dit scenario kunnen hellingsveranderingen afzonderlijk langs de tracklijn worden gevisualiseerd, terwijl Muurkleur wordt gebruikt om de hoogte weer te geven. Deze methode zorgt ervoor dat u, zelfs met mogelijke onnauwkeurigheden in de gegevens, toch een duidelijke en nauwkeurige visualisatie van helling en hoogte krijgt.

## Uiterlijk voor meerdere tracks wijzigen {#change-appearance-for-multiple-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Uiterlijk Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_1_andr.png)  ![Uiterlijk Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Uiterlijk wijzigen](@site/static/img/map/tracks_change_appear_3_ios.png)  ![Uiterlijk wijzigen](@site/static/img/map/tracks_change_appear_2_ios.png)

</TabItem>

</Tabs>  

Het tabblad [Tracks](../../personal/tracks/manage-tracks.md) geeft automatisch alle tracks weer die ooit zijn opgenomen, gemaakt of geïmporteerd. Ze zijn georganiseerd per map of worden als een lijst daaronder weergegeven.  

Wijzig het uiterlijk van meerdere tracks in *Mijn Plaatsen → Tracks*:

- **Standaard uiterlijk wijzigen** - Past instellingen toe op alle tracks in een [map](../../personal/tracks/manage-tracks.md#track-folder).
- **Terugzetten naar origineel** - Herstelt individuele trackinstellingen.

- [Selectiemodus](../../personal/tracks/manage-tracks.md#selection-mode) - Wijzigt het uiterlijk van specifieke tracks in de geselecteerde map of de hele lijst in het tabblad Tracks.
    - Selecteer het *menu met drie stippen* in de rechterbovenhoek van het tabblad Tracks en tik op *Selecteren*.
    - Tik vervolgens op het *menu met drie stippen* bovenaan het scherm en selecteer *Uiterlijk wijzigen*.  

Opties voor bulkaanpassing van het uiterlijk:

- **Richtingpijlen** - Voegt [bewegingsindicatoren](#direction-arrows) toe.  
    Staten: *Onveranderd*, &nbsp;*Origineel*, &nbsp;*Aan*, &nbsp;*Uit*.

- **Toon start- en finishpictogrammen** - [Toont markeringen](#start-and-finish-icons) voor start- en eindpunten van de track.  
    Staten: *Onveranderd*, &nbsp;*Origineel*, &nbsp;*Aan*, &nbsp;*Uit*.

- **Kleur** – Pas handmatige of datagebaseerde [kleuring](#color) toe.

- **Breedte** – Pas de [breedte van de tracklijn](#width) aan met voorinstellingen of handmatig.

- **Interval splitsen** – [Stel interval in](#split-interval) voor afstands-/tijdmarkeringen.  
    Staten: *Onveranderd*, &nbsp;*Origineel*, &nbsp;*Selecteer*: *Tijd* of *Afstand*.

Origineel en onveranderd:

- **Origineel** - Herstelt de oorspronkelijke parameters uit het trackbestand.

- **Onveranderd** - Behoudt de huidige instellingen tijdens de bewerksessie.


## Trackkleuren in GPX-bestanden {#track-colors-in-gpx-files}

OsmAnd ondersteunt **aangepaste trackkleuren** in GPX-bestanden met behulp van de `<osmand:color>`-tag binnen de `<extensions>`-sectie van een `<trk>`-element. Dit stelt gebruikers in staat om kleuren voor individuele tracks te definiëren, wat de visuele differentiatie verbetert wanneer meerdere tracks op de kaart worden weergegeven.

Gebruik het volgende formaat om een kleur voor een track te specificeren:  

```xml
<trk>
  <name>Voorbeeldtrack</name>
  <extensions>
    <osmand:color>#FF0000</osmand:color>
  </extensions>
</trk>
```

- De `<osmand:color>`-tag accepteert **hexadecimale kleurcodes** (bijv. `#FF0000` voor rood).
- Als er meerdere tracks in een GPX-bestand bestaan, kan elke track zijn eigen `<osmand:color>`-tag hebben.


**Gedrag in OsmAnd:**

1. **Standaard kleurtoewijzing**:  

    - Wanneer een **GPX-track wordt geïmporteerd als een enkele track** (optie ***Importeren als één track***), krijgt de hele track de **standaard GPX-kleur** (rood) toegewezen.  
    - In OsmAnd **4.9.10 en later** is dit probleem opgelost—individuele trackkleuren blijven nu behouden bij het importeren.

2. **Weergave in één kleur voor samengevoegde tracks:**  

    - Als tracks worden **samengevoegd** met ***Segmenten samenvoegen***, wordt de resulterende track behandeld als **één doorlopende track met één segment**.
    - Meerkleurige weergave wordt **niet ondersteund** voor samengevoegde tracks.
    - De samengevoegde track wordt weergegeven met de **hoofdkleur van de GPX** (standaard: rood), zelfs als individuele tracksegmenten oorspronkelijk verschillende kleuren hadden.

3. **Prioriteit van uiterlijkinstellingen:**  

    - OsmAnd ondersteunt momenteel **alleen kleur- en breedte-instellingen voor de hele track**.
    - Deze uiterlijkinstellingen worden opgeslagen in de **GPX-extensies op het hoogste niveau**.
    - Als een kleur of breedte is **ingesteld op het hoogste niveau** (ofwel in het GPX-bestand of handmatig in OsmAnd), heeft deze instelling voorrang op kleuren die aan individuele tracksegmenten zijn toegewezen.

**Tijdelijke oplossing voor meerkleurige tracks:**

- Om **individuele kleuren voor meerdere tracks te behouden**, **importeert u tracks afzonderlijk** in plaats van ze samen te voegen.

- Pas trackkleuren handmatig aan in **Instellingen voor het uiterlijk van de track**:

  - Open de track in OsmAnd.
  - Tik op de track om het **Contextmenu** te openen.
  - Selecteer **Uiterlijk**.
  - Kies de gewenste kleur.

- Dit zorgt ervoor dat elke track zijn **beoogde kleurweergave** behoudt, zelfs als het GPX-bestand oorspronkelijk meerdere segmenten met verschillende kleuren bevatte.


## Gerelateerde artikelen {#related-articles}

- [Kaartcontextmenu](../map-context-menu.md)
- [Kaart configureren](../configure-map-menu.md)
- [Punten op de kaart](../point-layers-on-map.md)
- [Tracks](../tracks/index.md)
- [Trackcontextmenu](../tracks/track-context-menu.md)
- [Reis opnemen](../../plugins/trip-recording.md)