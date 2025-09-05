---
source-hash: c714e52890d474392987e42babe6eed754ad1dbbaa5e4c8fe091171e272426fe
sidebar_position: 5
title:  Trackweergave
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

De functie **Trackweergave** stelt gebruikers in staat om aan te passen hoe tracks op de kaart worden weergegeven. Dit omvat het aanpassen van kleur, breedte, richtingaanwijzers en andere visuele elementen. Het aanpassen van de trackweergave helpt bij het onderscheiden van meerdere tracks, het markeren van specifieke routes en het verbeteren van de leesbaarheid van de kaart.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Track Appearance overview Android](@site/static/img/map/track-appear-and-1.png)  ![Track menu Appearance Android](@site/static/img/map/track_appearence_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Appearance iOS](@site/static/img/map/track_appearence_1_ios.png) ![Track menu Appearance iOS](@site/static/img/map/track_appearence_2_ios.png)  

</TabItem>

</Tabs>


## Toegang tot het menu {#access-to-the-menu}

U kunt de trackweergave wijzigen met een van de volgende methoden:

- **Vanuit Mijn Plaatsen**. Open *Menu → Mijn Plaatsen → Tracks*, selecteer een track, tik op het *Weergave-pictogram* in het [trackcontextmenu](../../map/tracks/track-context-menu.md#overview).
- **Vanaf de kaart**. Tik direct op een track op de kaart en tik vervolgens op het *Weergave-pictogram* in het *Overzicht-gedeelte*.
- **Vanuit trackopname**. Wijzig de weergave van de momenteel opgenomen track via het [trackopname-contextmenu](../../plugins/trip-recording.md#сurrent-track-recording).  
- **Vanuit het menu Kaart configureren**. Ga naar *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> →* **&#8942;** *→ <Translate android="true" ids="change_appearance"/>* voor de weergegeven tracks.


## Instellingen voor trackweergave {#track-appearance-settings}

### Kleur {#color}

:::tip purchases
Sommige instellingen kunt u alleen gebruiken met *OsmAnd Pro*. <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">Android</a> en <a href="https://osmand.net/docs/user/purchases/ios#free-and-paid-features">iOS</a> Gratis en betaalde functies.
:::

![Appearance](@site/static/img/map/appearance_color_andr.png)

U kunt de trackkleur handmatig instellen of gebruikmaken van **kleurgebaseerde gegevensvisualisatie** (bijv. snelheid, hoogte, helling). Als een track bepaalde gegevens mist, geeft OsmAnd ontbrekende secties in grijs weer.

**Beschikbare kleuropties:**

- **Gratis instellingen**: *<Translate android="true" ids="track_coloring_solid"/> kleur*, *<Translate android="true" ids="shared_string_speed"/>* (indien opgenomen) en *<Translate android="true" ids="altitude"/>* (indien opgenomen).

    ![Track menu Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_android.png)  ![Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png)  

- [Pro-functie](../../purchases/index.md)): *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>*.  

Voor meer details over het aanpassen van de weergave van de routelijn, zie [Kaartscherm tijdens navigatie](../../navigation/guidance/map-during-navigation.md#color) en over het selecteren en maken van een aangepaste kleur, zie [Kleurenschema's](../../personal/color-palette-schemes.md#routes).


### Breedte {#width}

![Track menu Appearance Track Thickness Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)   ![Track Appearance](@site/static/img/map/track_appearance_width_andr.png)  

U kunt de weergave van de track aanpassen in verschillende menu's van de applicatie:

- [*Track → Weergave*](../../personal/tracks/manage-tracks.md#track-folder).
- [*Navigatie-instellingen → Routelijn aanpassen*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*Mijn Plaatsen → Tracks-tabblad → elke map → Standaardweergave*](../../personal/tracks/manage-tracks.md#track-folder).

Pas de trackbreedte aan om de zichtbaarheid op de kaart te verbeteren.

- **Vooraf ingestelde opties**: **Dun, Gemiddeld,** en **Vet**.

- **Aangepaste breedte**: Instelbaar van 1 tot 24 px met een schuifregelaar.

- **Profielgebaseerde breedte**: Kan worden ingesteld via *Navigatie-instellingen → [Routelijn aanpassen](../../navigation/guidance/navigation-settings.md#customize-route-line)*.


### Splitsingsinterval {#split-interval}

![Track menu Appearance Split interval](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Split interval](@site/static/img/map/track_appearance_menu_split_interval_ios.png)  

Selecteer of het interval op de track moet worden gesplitst **op afstand of op tijd**.

### Richtingspijlen {#direction-arrows}

![Track menu Appearance direction arrows Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)  

Voegt **pijlmarkeringen** toe langs de track om de bewegingsrichting aan te geven.

### Start- en eindpictogrammen {#start-and-finish-icons}

![Track menu Appearance start and finish icons Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)  

Hiermee kunt u selecteren of de **start- en eindpictogrammen** voor tracksegmenten moeten worden weergegeven.

### Gaten samenvoegen {#join-gaps}

Verbindt **tracksegmenten** die werden onderbroken door GPS-verlies of een pauze in de opname. De functie **<Translate android="true" ids="join_segments"/>** (*Android*) of **<Translate ios="true" ids="gpx_join_gaps"/>** (*iOS*) stelt u in staat om deze gaten in de geselecteerde GPX-track te verbinden met rechte lijnen.

### Terugzetten naar origineel {#reset-to-original}

Herstelt alle **trackweergave-instellingen** naar hun standaardwaarden.


## 3D-track {#3d-track}

:::info Betaalde functie
**3D-track** is een **OsmAnd Pro** betaalde functie voor [iOS](../../purchases/ios.md#pro-features) en [Android](../../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_ios.png)

</TabItem>

</Tabs>

De functie **3D-track** genereert een driedimensionale visualisatie door hoogtedata te integreren in standaard 2D-tracks. Deze functionaliteit creëert een diepte-verbeterde weergave, waardoor een precieze analyse van de track met betrekking tot het terrein mogelijk is. Door hoogtedetails op te nemen, biedt de 3D-track een uitgebreider beeld van de topografie en geografische context van de route.

### 3D-trackinstellingen {#3d-track-settings}

**Muurhoogte**  
U kunt een 3D-track visualiseren op basis van hoogte en andere beschikbare gegevens binnen de track, of op basis van een vaste hoogte.

- **<Translate android="true" ids="visualized_by"/>**: &nbsp;*Hoogte*, &nbsp;*Snelheid*, &nbsp;*Vaste hoogte*. 3D-sensorgegevens: &nbsp;*Hartslag*, &nbsp;*Fietscadans*, &nbsp;*Fietsvermogen*, &nbsp;*Temperatuur*, &nbsp;*Fietssnelheid*.

- **<Translate android="true" ids="vertical_exaggeration"/>**. Indien gevisualiseerd op *Hoogte* of *Snelheid*, kunt u 3D-gegevens schalen om een prominentere visualisatie te krijgen voor de 3D-track in het bereik van *Geen* tot *x3.0*.

- **<Translate android="true" ids="wall_height"/>**. Indien gevisualiseerd op *Vaste hoogte*, stelt u de vaste hoogte voor de 3D-track in door de hoogte op de kaart te definiëren in het bereik van *Geen* tot *2000 m*.

- U kunt het combineren met [3D-reliëf](../../plugins/topography.md#3d-relief). Als de bron van de 3D-gegevens geen hoogte is, zal de 3D-weergave een combinatie zijn van reliëfhoogte en de geselecteerde gegevens, zoals snelheid of hartslag.

**<Translate android="true" ids="wall_color"/>**  
Past de **3D-trackkleur** aan met behulp van gradiënten of datagebaseerde visualisatie.  
Opties zijn: *Geen*, &nbsp;*Effen*, &nbsp;*Aflopende gradiënt*, &nbsp;*Oplopende gradiënt*, &nbsp;*Hoogte*, &nbsp;*Helling*, &nbsp;*Snelheid*.

**<Translate android="true" ids="track_line"/>**  
Voegt een [gemarkeerde lijn](#color) toe aan de boven- of onderkant van de 3D-track.  
Opties zijn: *Boven*, &nbsp;*Onder*, &nbsp;*Boven en onder*.

> **OPMERKING**: *De **Android-versie** van de app vereist dat de kaartweergave-engine [Versie 2 (OpenGL)](../../personal/global-settings.md#map-rendering-engine) is ingeschakeld om 3D-trackvisualisatie te gebruiken.*


### Gebruiksscenario's {#use-cases}

De 3D-trackfunctie is zeer nuttig voor activiteiten zoals paragliden, waarbij het visualiseren van uw vliegroute diepere inzichten kan bieden. Door de track in 3D weer te geven, kunt u functies zoals **Muurhoogte** en **Muurkleur** gebruiken om waardevolle visuele informatie voor analyse te extraheren.

1. **Visualiseren op snelheid met 3D**.  
    Een veelvoorkomend gebruiksscenario is het gebruik van 3D-tracks om snelheidsvariaties te visualiseren. Hiermee kunt u specifieke secties van de track aanwijzen waar u langzamer of sneller ging.  

    Met Muurkleur op basis van de Helling kunt u observeren hoe het terrein, met name heuvels en hellingen, uw snelheid beïnvloedde. Deze combinatie van snelheids- en hellingsvisualisatie biedt een gedetailleerd begrip van de prestaties gedurende de activiteit.

2. **Visualiseren op hartsensor met 3D-reliëf**.  
    Een andere inzichtelijke toepassing is het combineren van hartslagsensorgegevens met 3D-reliëfkaarten. Hiermee kunt u hartslagfluctuaties direct op het terrein in kaart brengen, waardoor u een uitgebreid beeld krijgt van hoe hoogteveranderingen uw fysieke inspanning kunnen hebben beïnvloed.  

    De 3D-reliëffunctie, die de hoogte overdrijft, werkt onafhankelijk van de 3D-trackweergave. Twee verticale overdrijvingsparameters kunnen worden aangepast om de correlatie tussen hartslag en terreinhoogte beter te begrijpen.

3. **Visualiseer trackhoogte en hellingskleurlijn op een platte aardweergave.**  
    Bij het visualiseren van hoogtedata wordt aanbevolen een platte aardweergave te gebruiken om problemen zoals GPS-fouten te voorkomen, die ervoor kunnen zorgen dat delen van de track ondergronds verschijnen.  

    In dit scenario kunnen hellingsveranderingen afzonderlijk langs de tracklijn worden gevisualiseerd, terwijl Muurkleur wordt gebruikt om de hoogte weer te geven. Deze methode zorgt ervoor dat u, zelfs met mogelijke data-onvolkomenheden, nog steeds een duidelijke en nauwkeurige visualisatie van helling en hoogte ontvangt.

## Weergave wijzigen voor meerdere tracks {#change-appearance-for-multiple-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Appearance Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_1_andr.png)  ![Appearance Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Change Appearance](@site/static/img/map/tracks_change_appear_3_ios.png)  ![Change Appearance](@site/static/img/map/tracks_change_appear_2_ios.png)

</TabItem>

</Tabs>  

Het tabblad [Tracks](../../personal/tracks/manage-tracks.md) toont automatisch alle ooit opgenomen, gemaakte of geïmporteerde tracks. Ze zijn georganiseerd per map of worden als een lijst daaronder weergegeven.  

Wijzig de weergave van meerdere tracks in *Mijn Plaatsen → Tracks*:

- **Standaardweergave wijzigen** - Past instellingen toe op alle tracks in een [map](../../personal/tracks/manage-tracks.md#track-folder).
- **Terugzetten naar origineel** - Herstelt individuele trackinstellingen.

- [Selectiemodus](../../personal/tracks/manage-tracks.md#selection-mode) - Wijzigt de weergave van specifieke tracks in de geselecteerde map of de hele lijst in het tabblad Tracks.
    - Selecteer het *drie-stippenmenu* in de rechterbovenhoek van het tabblad Tracks en tik op *Selecteren*.
    - Tik vervolgens op het *drie-stippenmenu* bovenaan het scherm en selecteer *Weergave wijzigen*.  

Opties voor bulkweergave-aanpassing:

- **Richtingspijlen** - Voegt [bewegingsindicatoren](#direction-arrows) toe.  
    Statussen: *Ongewijzigd*, &nbsp;*Origineel*, &nbsp;*Aan*, &nbsp;*Uit*.

- **Start- en eindpictogrammen tonen** - [Toont markeringen](#start-and-finish-icons) voor start- en eindpunten van tracks.  
    Statussen: *Ongewijzigd*, &nbsp;*Origineel*, &nbsp;*Aan*, &nbsp;*Uit*.

- **Kleur** – Pas handmatige of datagebaseerde [kleuring](#color) toe.

- **Breedte** – Pas de [tracklijnbreedte](#width) aan met behulp van voorinstellingen of handmatig.

- **Splitsingsinterval** – [Stel interval in](#split-interval) voor afstands- / tijdmarkeringen.  
    Statussen: *Ongewijzigd*, &nbsp;*Origineel*, &nbsp;*Selecteren*: *Tijd* of *Afstand*.

Origineel en ongewijzigd:

- **Origineel** - Herstelt de originele parameters uit het trackbestand.

- **Ongewijzigd** - Behoudt de huidige instellingen tijdens de bewerkingssessie.


## Trackkleuren in GPX-bestanden {#track-colors-in-gpx-files}

OsmAnd ondersteunt **aangepaste trackkleuren** in GPX-bestanden met behulp van de `<osmand:color>`-tag binnen de `<extensions>`-sectie van een `<trk>`-element. Dit stelt gebruikers in staat om kleuren te definiëren voor individuele tracks, waardoor de visuele differentiatie wordt verbeterd wanneer meerdere tracks op de kaart worden weergegeven.

Om een kleur voor een track op te geven, gebruikt u het volgende formaat:  

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

    - Wanneer een **GPX-track wordt geïmporteerd als één track** (optie ***Importeren als één track***), krijgt de hele track de **standaard GPX-kleur** (rood) toegewezen.  
    - In OsmAnd **4.9.10 en later** is dit probleem opgelost – individuele trackkleuren blijven nu behouden bij import.

2. **Enkelkleurige weergave voor samengevoegde tracks:**  

    - Als tracks worden **samengevoegd** met behulp van ***Segmenten samenvoegen***, wordt de resulterende track behandeld als **één doorlopende track met één segment**.
    - Meerkleurige weergave wordt **niet ondersteund** voor samengevoegde tracks.
    - De samengevoegde track wordt weergegeven met de **hoofd-GPX-kleur** (standaard: rood), zelfs als individuele tracksegmenten oorspronkelijk verschillende kleuren hadden.

3. **Prioriteit van weergave-instellingen:**  

    - OsmAnd ondersteunt momenteel **alleen kleur- en breedte-instellingen voor de hele track**.
    - Deze weergave-instellingen worden opgeslagen in de **top-level GPX-extensies**.
    - Als een kleur of breedte **op het hoogste niveau is ingesteld** (hetzij in het GPX-bestand of handmatig in OsmAnd), heeft deze instelling voorrang op kleuren die zijn toegewezen aan individuele tracksegmenten.

**Oplossing voor meerkleurige tracks:**

- Om **individuele kleuren voor meerdere tracks** te behouden, **importeert u tracks afzonderlijk** in plaats van ze samen te voegen.

- Pas trackkleuren handmatig aan in de **Trackweergave-instellingen**:

  - Open de track in OsmAnd.
  - Tik op de track om het **Contextmenu** te openen.
  - Selecteer **Weergave**.
  - Kies de gewenste kleur.

- Dit zorgt ervoor dat elke track zijn **bedoelde kleurweergave** behoudt, zelfs als het GPX-bestand oorspronkelijk meerdere segmenten met verschillende kleuren bevatte.


## Gerelateerde artikelen {#related-articles}

- [Kaartcontextmenu](../map-context-menu.md)
- [Kaart configureren](../configure-map-menu.md)
- [Punten op de kaart](../point-layers-on-map.md)
- [Tracks](../tracks/index.md)
- [Tracks Contextmenu](../tracks/track-context-menu.md)
- [Ritopname](../../plugins/trip-recording.md)

> *Laatst bijgewerkt: februari 2025*