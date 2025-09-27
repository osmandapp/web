---
source-hash: 18d9873a363946b476ae9c98d895b7afc2dcac45571f524bfe437e0a7bba8153
sidebar_position: 3
title:  Navigeren met markeringen
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

[Kaartmarkeringen](../../personal/markers.md) zijn punten op de kaart die met vlaggetjes zijn gemarkeerd. Ze kunnen voor verschillende doeleinden worden gebruikt, zoals het aangeven van een locatie die u wilt bezoeken, een interessant punt dat u wilt onthouden, of om een aangepaste route te maken.

Ze kunnen met name handig zijn voor wandelaars, fietsers of iedereen die een nieuw gebied verkent en interessante locaties of referentiepunten op de kaart wil markeren. Het belangrijkste verschil met [Favoriete punten](../../personal/favorites.md) is dat markeringen sneller te maken zijn omdat ze geen naam vereisen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatiemarkering Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatiemarkering iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>


## Markeringen gebruiken bij navigatie {#use-markers-in-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

 ![Verschil markeringsnavigatie Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Verschil markeringsnavigatie Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Verschil markeringsnavigatie iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Verschil markeringsnavigatie iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

*Kaartmarkeringen* kunnen dienen als [bestemmingen](./route-navigation#set-destinations) bij het samenstellen van een route. Ze zijn vooral handig wanneer u een route met tussenpunten moet instellen.

*Kaartmarkeringen* bieden echter ook verschillende functionaliteiten zoals [widgets](../../widgets/markers.md), bewegingsrichting, lijnen op de kaart, zodat u deze hulpmiddelen kunt gebruiken voor navigatie zonder een routelijn te maken en volledige spraakgestuurde navigatie te starten.

Als u een eenvoudige punt-naar-punt navigatie nodig heeft die wordt weergegeven als rechte lijnen, kunt u een ***Reisplanlijst*** samenstellen en sorteren die bestaat uit markeringen als tussenpunten en widgets gebruiken voor eenvoudige navigatie.


### Aanbevelingen {#recommendations}

Hier zijn eenvoudige aanbevelingen om te *Navigeren met markeringen*:

1. Maak markeringen aan. Zoek het gewenste object (of objecten) op de kaart, tik erop en kies de *[Markeringsknop](../../personal/markers.md#add--edit-markers)* in het *[kaartcontextmenu](../../map/map-context-menu.md#add--edit-marker)*. U kunt ook markeringen maken van [favorieten](#add-group-of-favorite) of [GPX-tracks](#add-group-of-track-waypoints).
2. [*Sorteer markeringen*](#sort-markers) in de volgorde waarin u ze wilt passeren.
3. Pas de *Weergave van kaartmarkeringen* aan als u markeringen wilt gebruiken zonder de navigatie te starten. Schakel de opties **Pijlen op de kaart** en **Richtingslijn** in in de sectie *[Uiterlijk](../../personal/markers.md#appearance-on-the-map)* van het *[menu Kaartmarkeringen](../../personal/markers.md#actions)*.
4. Voeg *[Markeringswidgets](../../personal/markers.md#markers)* toe in het *[menu Scherm configureren](../../widgets/configure-screen.md)* (optioneel).
5. [*Markeer als gepasseerd*](#pass-markers) reeds bezochte markeringen of herstel ze uit de geschiedenis als u ze opnieuw wilt passeren.

:::note
Wanneer de opties **Pijlen op de kaart** en **Richtingslijn** zijn ingeschakeld in de sectie *Uiterlijk* van het [menu Kaartmarkeringen](../../personal/markers.md#appearance-on-the-map), ziet u een pijl of een stippellijn op de kaart. De pijl toont de richting naar de actieve markering wanneer deze zich buiten het huidige kaartscherm bevindt. De richtingslijn wordt getekend wanneer uw geolocatie en de markering beide op hetzelfde scherm staan.
:::


## Reisplanlijst {#itinerary-list}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lijst met markeringen Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Lijst met markeringen iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


De reisplanlijst is een geordende lijst van *passeerbare* markeringen die zichtbaar zijn op de kaart. U kunt punten één voor één toevoegen en verwijderen of dit in bulk doen met een vooraf voorbereid [GPX-bestand](#add-group-of-track-waypoints) of een [Favorietengroep](#add-group-of-favorite). Voor lokale wedstrijden of avontuur kan het handig zijn om een lijst met punten te maken op basis van coördinaten met behulp van de [tool Coördinaten invoeren](../../plan-route/coordinate-input.md).


### Afzonderlijke markeringen toevoegen {#add-single-markers}

*Markeringen* kunnen aan de kaart worden toegevoegd of ervan worden verwijderd door een enkele tik op het scherm op de gewenste locatie. Vervolgens moet u de instructies uit het artikel *[kaartcontextmenu](../../map/map-context-menu.md#add--edit-marker)* volgen.


### Groep favorieten toevoegen {#add-group-of-favorite}

<InfoAndroidOnly />

![Favorieten naar markeringen 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Favorieten naar markeringen 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

U kunt *Kaartmarkeringen* maken van *[Favorieten](../../personal/favorites.md)* met behulp van:

- *[Menu Favorietengroepen](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Mijn Favorieten)*.
- &#128681; icoon in het Favorieten in-page menu *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Mijn Favorieten→&#128681;)*.
- **'+'** (toevoegen) optie in *[tabblad Groepen](../../personal/markers.md#marker-groups)* in het menu Kaartmarkeringen *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.


### Groep routepunten van een track toevoegen {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX naar markeringen 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

GPX-tracks met routepunten kunnen worden gebruikt als *Kaartmarkeringen* en snel worden uitgeschakeld:

- Gebruik de **'+'** (toevoegen) optie in het *[tabblad Groepen](../../personal/markers.md#marker-groups)* in het menu Kaartmarkeringen *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Zet de schakelaar aan bij de track in het *[tabblad Groepen](../../personal/markers.md#marker-groups)* in het menu Kaartmarkeringen *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
Alleen tracks met routepunten kunnen worden toegevoegd aan de *lijst met kaartmarkeringen*. De track die u wilt toevoegen, moet ook zichtbaar (actief) zijn op de kaart.
:::

![GPX naar markeringen 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX naar markeringen 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- U kunt ook *Markeringen* maken van een track met routepunten via het *[trackcontextmenu](../../map/tracks/track-context-menu.md#points--waypoints)*: *Tik op een zichtbare track op de kaart → kies in het trackcontextmenu Punten → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*


## Markeringen sorteren {#sort-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Markeringen sorteren in een lijst Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Markeringen sorteren in een lijst iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

Door op de linkerhoek (*Android*) of rechterhoek (*iOS*) van een *Kaartmarkering*-tabblad in de *[Lijst met kaartmarkeringen](../../personal/markers.md#itinerary-list)* te drukken en deze omhoog of omlaag te verplaatsen, kunt u de volgorde in de *Navigatielijst* wijzigen (tijdens het verplaatsen van een markeringskaart ziet u een lijn die aangeeft waar de markering wordt geplaatst).

In de Android-versie van de OsmAnd-app zijn er andere sorteeropties voor *Kaartmarkeringen* (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *Sorteer op* of *Plan een route*).


### Sorteren op kenmerken {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Alternatieve sortering van markeringen Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Alternatieve sortering van markeringen Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

U kunt *Markeringen* sorteren op:

- **Naam** (*alfabetisch*) — Als markeringen beschrijvende namen hebben, kan dit een handige manier zijn om snel de markering te vinden die u zoekt.
- **Afstand** (*dichtstbijzijnde of verste eerst*) - Deze optie sorteert de markeringen op hun afstand tot uw huidige locatie.
- **Datum** (*recent of lang geleden*) - Dit sorteert de markeringen op de datum waarop ze zijn toegevoegd. Als u in de loop van de tijd veel markeringen hebt toegevoegd, kan dit een handige manier zijn om te zien welke de meest recente zijn.


### Volgorde wijzigen met de tool 'Route plannen' {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Alternatieve sortering van markeringen Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Alternatieve sortering van markeringen Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

Met de functionaliteit van de tool 'Route plannen' in de lijst met markeringen kunt u *Markeringen* *van deur tot deur* sorteren, ze in omgekeerde volgorde plaatsen of een *Rondrit* maken. Als u op de optie *Navigatie* tikt, worden *Markeringen* gebruikt als [tussenliggende bestemmingen](../setup/route-navigation.md#intermediate-destinations).


## Markeringen passeren {#pass-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Markering passeren Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Markering passeren Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Markering passeren iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Markering passeren iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

Een *Markering* kan worden gemarkeerd als gepasseerd (*Android*) of genegeerd (*iOS*).

- Via het *[kaartcontextmenu](../../map/map-context-menu.md#add--edit-marker)*.
- Wanneer u een *Markering* nadert tot een afstand van minder dan 40 meter (*Android*) of 50 meter (*iOS*), wordt een schakelaar in de *[Markeringswidgets](../../widgets/markers.md#top-bar-widget)*-balk actief.

Na het passeren van een *Markering* wordt deze verplaatst naar de map [Geschiedenis](../../personal/markers.md#history), van waaruit deze indien nodig kan worden hersteld. De volgende markering in de [lijst](#itinerary-list) wordt actief. Afhankelijk van uw [instellingen](#use-markers-in-navigation) wordt u er mogelijk naartoe geleid met een pijl of een stippellijn.


## Gerelateerde artikelen {#related-articles}

- [Over kaartmarkeringen](../../personal/markers.md).
- [Markeringswidget](../../widgets/markers.md).
__
- [Routeparameters](../routing/osmand-routing.md#routing-types)
- [Routevoorbereiding](./route-navigation.md)
- [Routedetails](./route-details.md)
- [Navigatie op basis van een track](./gpx-navigation.md)
- [Navigatie-instellingen](../guidance/navigation-settings.md)
- [Kaartscherm tijdens navigatie](../guidance/map-during-navigation.md)
- [Spraakaanwijzingen / Meldingen](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)