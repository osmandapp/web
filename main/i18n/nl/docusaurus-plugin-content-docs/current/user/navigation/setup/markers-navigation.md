---
source-hash: f1b6ce88c16188825c1c750fdab6393efc13e796dac9b76318385c1908db3134
sidebar_position: 3
title: Navigeren met markeringen
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

[Kaartmarkeringen](../../personal/markers.md) zijn punten op de kaart die zijn gemarkeerd met vlaggen. Ze kunnen voor verschillende doeleinden worden gebruikt, zoals het aangeven van een locatie die u wilt bezoeken, een interessant punt dat u wilt onthouden, of om een aangepaste route te maken.

Ze kunnen bijzonder nuttig zijn voor wandelaars, fietsers of iedereen die een nieuw gebied verkent en interessante locaties of referentiepunten op de kaart wil markeren. Het belangrijkste verschil met [Favoriete punten](../../personal/favorites.md) is dat markeringen sneller te maken zijn, omdat ze geen naam vereisen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatiemarkering Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatiemarkering iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>


## Markeringen gebruiken in navigatie {#use-markers-in-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Verschil markering navigatie Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Verschil markering navigatie Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Verschil markering navigatie iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Verschil markering navigatie iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

*Kaartmarkeringen* kunnen dienen als [bestemmingen](./route-navigation#set-destinations) bij het opbouwen van een route. Ze zijn vooral handig wanneer u een route met tussenpunten moet instellen.

Echter, *Kaartmarkeringen* bieden ook verschillende functionaliteiten, zoals [widgets](../../widgets/markers.md), bewegingsrichting, lijnen op de kaart, zodat u deze hulpmiddelen kunt gebruiken voor navigatie zonder een routelijn op te bouwen en volledige gesproken navigatie in te voeren.

Als u een eenvoudige punt-naar-punt navigatie nodig heeft die als rechte lijnen wordt weergegeven, kunt u een ***Reisplanlijst*** opbouwen en sorteren die bestaat uit markeringen als tussenpunten en widgets gebruiken voor eenvoudige navigatie.


#### Aanbevelingen {#recommendations}

Hier zijn eenvoudige aanbevelingsstappen om te *Navigeren met markeringen*:

1. Maak markeringen. Zoek het gewenste object(en) op de kaart, tik erop en kies de *[Markeringsknop](../../personal/markers.md#add--edit-markers)* in het *[kaartcontextmenu](../../map/map-context-menu.md#add--edit-marker)*. U kunt ook markeringen maken van [favorieten](#add-group-of-favorite) of [GPX-tracks](#add-group-of-track-waypoints).
2. [*Sorteer markeringen*](#sort-markers) op de gewenste manier waarop u ze wilt passeren
3. Pas de *Kaartmarkeringsweergave* aan als u markeringen wilt gebruiken zonder navigatie te starten. Schakel de opties **Pijlen op de kaart** en **Richtinglijn** in het gedeelte *[Uiterlijk](../../personal/markers.md#appearance-on-the-map)* van het *[Kaartmarkeringsmenu](../../personal/markers.md#actions)* in.
4. Voeg *[Markeringswidgets](../../personal/markers.md#markers)* toe in het *[Schermconfiguratiemenu](../../widgets/configure-screen.md)* (optioneel).
5. [*Markeer als gepasseerd*](#pass-markers) reeds bezochte markeringen of herstel ze uit de geschiedenis als u ze opnieuw wilt passeren.

:::note
Wanneer de opties **Pijlen op de kaart** en **Richtinglijn** zijn ingeschakeld in het gedeelte *Uiterlijk* van het [Kaartmarkeringsmenu](../../personal/markers.md#appearance-on-the-map), ziet u een pijl of stippellijn op de kaart. De pijl toont de richting naar de actieve markering wanneer deze buiten het huidige kaartscherm valt. De richtinglijn wordt getekend wanneer uw geolocatie en markering beide op hetzelfde scherm zijn.
:::


## Reisplanlijst {#itinerary-list}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Markeringenlijst Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Markeringenlijst iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


De reisplanlijst is een geordende lijst van *passeerbare* markeringen die zichtbaar zijn op de kaart. U kunt punten één voor één toevoegen en verwijderen, of dit in batch doen met behulp van een vooraf voorbereid [GPX-bestand](#add-group-of-track-waypoints) of een [Favorietengroep](#add-group-of-favorite). Voor lokale wedstrijden of avonturen kan het nuttig zijn om een lijst met punten te maken op basis van coördinaten met behulp van de [Coördinateninvoertool](../../plan-route/coordinate-input.md).


### Enkele markeringen toevoegen {#add-single-markers}

*Markeringen* kunnen aan de kaart worden toegevoegd of verwijderd door één keer op de gewenste locatie op het scherm te tikken. Volg daarna de instructies in het artikel over het *[kaartcontextmenu](../../map/map-context-menu.md#add--edit-marker)*.


### Groep favorieten toevoegen {#add-group-of-favorite}

<InfoAndroidOnly />

![Favorieten naar markeringen 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Favorieten naar markeringen 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

U kunt *Kaartmarkeringen* maken van *[Favorieten](../../personal/favorites.md)* met behulp van:

- *[Favorietengroepenmenu](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Mijn favorieten)*.
- &#128681; pictogram in het Favorieten in-pagina menu *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Mijn favorieten→&#128681;)*.
- **'+'** (toevoegen) optie in het *[Groepen tabblad](../../personal/markers.md#marker-groups)* in het Kaartmarkeringenmenu *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.


### Groep track-waypoints toevoegen {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX naar markeringen 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

GPX-tracks met waypoints kunnen worden gebruikt als *Kaartmarkeringen* en snel worden uitgeschakeld:

- Gebruik de **'+'** (toevoegen) optie in het *[Groepen tabblad](../../personal/markers.md#marker-groups)* in het Kaartmarkeringenmenu *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Schakel de schakelaar naast de track in het *[Groepen tabblad](../../personal/markers.md#marker-groups)* in het Kaartmarkeringenmenu in *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
Alleen tracks met waypoints kunnen worden toegevoegd aan de *Kaartmarkeringenlijst*. De track die u wilt toevoegen, moet ook zichtbaar (actief) zijn op de kaart.
:::

![GPX naar markeringen 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX naar markeringen 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- U kunt ook *Markeringen* maken van een track met waypoints met behulp van het *[trackcontextmenu](../../map/tracks/track-context-menu.md#points--waypoints)*: *Tik op een zichtbare track op de kaart → kies in het trackcontextmenu Punten → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*


## Markeringen sorteren {#sort-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Markeringen sorteren in een lijst Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Markeringen sorteren in een lijst iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

Door op de linkerhoek (*Android*) of rechterhoek (*iOS*) van een *Kaartmarkerings*-tabblad in de *[Kaartmarkeringslijst](../../personal/markers.md#itinerary-list)* te drukken en deze omhoog of omlaag te bewegen, kunt u de volgorde ervan in de *Navigatielijst* wijzigen (tijdens het verplaatsen van een markeringskaart ziet u een lijn die aangeeft waar de markering zal worden geplaatst).

In de Android-versie van de OsmAnd-app zijn er andere sorteeropties voor *Kaartmarkeringen* (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *Sorteren op* of *Route plannen*).


### Sorteren op attributen {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Alternatieve markeringen sorteren Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Alternatieve markeringen sorteren Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

U kunt *Markeringen* sorteren op:

- **Naam** (*alfabetisch*) — Als markeringen beschrijvende namen hebben, kan dit een nuttige manier zijn om snel de markering te vinden die u zoekt.
- **Afstand** (*dichtstbijzijnde of verste eerst*) - Deze optie sorteert de markeringen op hun afstand tot uw huidige locatie.
- **Datum** (*recent of lang geleden*) - Dit sorteert de markeringen op de datum waarop ze zijn toegevoegd. Als u in de loop der tijd veel markeringen hebt toegevoegd, kan dit een nuttige manier zijn om te zien welke de meest recente zijn.


### Opnieuw ordenen met de routeplanningstool {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Alternatieve markeringen sorteren Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Alternatieve markeringen sorteren Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

Met de functionaliteit van de routeplanningstool in de markeringenlijst kunt u *Markeringen* sorteren van *Deur-tot-deur*, ze in omgekeerde volgorde plaatsen of een *Rondreis* maken. Als u de optie *Navigatie* tikt, worden *Markeringen* gebruikt als [tussenbestemmingen](../setup/route-navigation.md#intermediate-destinations).


## Markeringen passeren {#pass-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Markering passeren Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Markering passeren Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Markering passeren iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Markering passeren iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

Een *Markering* kan als gepasseerd (*Android*) of genegeerd (*iOS*) worden gemarkeerd.

- Via het *[kaartcontextmenu](../../map/map-context-menu.md#add--edit-marker)*.
- Wanneer u een *Markering* nadert op een afstand van minder dan 40 meter (*Android*) of 50 meter (*iOS*), wordt een schakelaar in de balk van de *[Markeringswidgets](../../widgets/markers.md#top-bar-widget)* actief.

Na het passeren van een *Markering* verplaatst deze zich naar de map [Geschiedenis](../../personal/markers.md#history), van waaruit deze indien nodig kan worden hersteld. De volgende markering in de [lijst](#itinerary-list) wordt actief. Afhankelijk van uw [instellingen](#use-markers-in-navigation) kunt u er met een pijl of stippellijn naartoe worden geleid.


## Gerelateerde artikelen {#related-articles}

- [Over kaartmarkeringen](../../personal/markers.md).
- [Markeringswidget](../../widgets/markers.md).
__
- [Routeparameters](../routing/osmand-routing.md#routing-types)
- [Routevoorbereiding](./route-navigation.md)
- [Routedetails](./route-details.md)
- [Navigatie via track](./gpx-navigation.md)
- [Navigatie-instellingen](../guidance/navigation-settings.md)
- [Kaartscherm tijdens navigatie](../guidance/map-during-navigation.md)
- [Gesproken aanwijzingen / Meldingen](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Laatst bijgewerkt: juni 2025*