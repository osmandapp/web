---
source-hash: 425f511859172593fe5402cce5c44974144e585dac7b77bd26c1c5e68a22a8f0
sidebar_position: 1
title:  Alles Zoeken
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

<!--
<InfoIncompleteArticle/>
-->

## Overzicht {#overview}

**Zoeken** is een handig hulpmiddel om snel locaties te vinden. U kunt Zoeken gebruiken om een locatie te vinden op adres, coördinaten, nuttige plaatsen (POI) of via eerdere zoekopdrachten. Met [Adres zoeken](#search-address) kunt u het gewenste adres invoeren om een exacte locatie te krijgen. [Coördinaten](#search-coordinates) zoeken werkt met geografische coördinaten zoals lengte- en breedtegraad. Met [POI](#search-poi) zoeken kunt u zoeken naar nabijgelegen plaatsen in specifieke categorieën, zoals cafés, hotels of benzinestations. Het [Verkennen](#search-explore) tabblad benadrukt populaire plaatsen in de buurt en biedt snelle toegang tot recent bezochte locaties. Zoek [Geschiedenis](#search-history) slaat eerdere zoekopdrachten op. De zoekfunctie maakt het gemakkelijk om reizen te plannen, door onbekend terrein te navigeren en POI's in de buurt te vinden.


## Hoe te gebruiken {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zoek POI lijst Android](@site/static/img/search/search_online_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoek POI lijst iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

U moet een van de volgende stappen volgen om uw zoekopdracht te starten:

- Tik op de [Zoekknop](../widgets/map-buttons.md#search) op het kaartscherm van de applicatie en voer uw zoekopdracht in.

- Ga naar het hoofdmenu *Menu → Zoeken → voer uw zoekopdracht in*.

- Wanneer u een route voorbereidt, tikt u op [*Navigatie → Bestemming instellen → Zoekveld*](../navigation/setup/route-navigation.md#set-target-point) *→ zoekopdracht*.  


Belangrijke informatie:

- ***Gedownloade offline vectorkaarten zijn vereist om te zoeken met OsmAnd***.

- In eerste instantie is **de zoekopdracht gebaseerd op de gegevens op de kaart in het zichtbare gebied van het apparaatscherm**, maar als daar niets wordt gevonden, biedt OsmAnd aan om de zoekradius te vergroten.  

### Basis zoekopdrachten {#basic-queries}

***Lijst met zoekopdrachten*:**

- Coördinaten in alle beschikbare formaten.
- Adres:
    - Straat, Huisnummer;
    - Stad, Straat;
    - Kruispunten van straten;
    - Stad;
    - Tiger-data;
    - Postcode, Huisnummer;
    - Postcode, Straat, Huisnummer.
- Zoek POI op naam en op categorie met extra filters.
- Zoek OSM-routes op naam en op categorie met extra filters.
- Zoek op de meest prominente bergtoppen en vulkanen.
- Zoek op reisgidsartikelen (vereist dat het bijbehorende reisgidsbestand is gedownload).
- Zoek op Favorieten en Waypoints.
- Zoek iconen op POI-subcategorienamen.
- Zoek op tracks.
- Zoek op bedrijfslocaties en merknamen.
- Online zoeken (Nominatim).
- URL zoeken (Google en OsmAnd). OsmAnd kan veel gedeelde Google Maps-links herkennen, inclusief korte links van `maps.app.goo.gl`.
- Zoekgeschiedenis.

<!--
***Supported formats*:**  

***Tags*** can be used as a search query. They consist of ***a key and a value***, for example:
*addr:street=StreetName*.  
To avoid confusion, sometimes the key or value is surrounded by quotation marks: **key="value" or "key"="value"**. The quotation marks and equal sign are not part of the tag content.
-->

### Zoekresultaten sorteren {#sorting-search-results}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zoek POI lijst Android](@site/static/img/search/search_sort_by.webp)

OsmAnd sorteert zoekresultaten automatisch op verschillende criteria:

1. **Overeenkomende zoekopdrachten** — Resultaten die exacte of gedeeltelijke overeenkomsten bevatten met de woorden die u hebt ingevoerd, worden hoger weergegeven.

2. **Relevantie** — Objecten waarvan de namen nauw aansluiten bij de zoekopdracht worden meestal hoger in de resultaten weergegeven.

3. **Objecttype** — Afhankelijk van de zoekopdracht kunnen resultaten verschillende typen objecten bevatten, zoals steden, straten, adressen of POI's.

4. **Afstand** — Wanneer resultaten vergelijkbare overeenkomstcriteria en objecttypes hebben, worden de resultaten die het dichtst bij de huidige locatie van de gebruiker liggen als eerste getoond.

5. **Belang** — Bekende bezienswaardigheden of vaak genoemde plaatsen kunnen hoger in de resultaten verschijnen wanneer ze nauw aansluiten bij de zoekopdracht.

U kunt de sorteervolgorde van zoekresultaten ook handmatig wijzigen met de chip *Sorteren op* bovenaan de lijst met zoekresultaten. Tik op *Sorteren op* en kies een van de volgende opties:
- **Relevantie** — Sorteert de zoekresultaten op relevantie voor de zoekopdracht.
- **Dichtstbijzijnde** — Sorteert de zoekresultaten op afstand, waarbij de dichtstbijzijnde resultaten als eerste worden getoond.

</TabItem>

<TabItem value="ios" label="iOS">

OsmAnd sorteert zoekresultaten automatisch op verschillende criteria:

1. **Overeenkomende zoekopdrachten** — Resultaten die exacte of gedeeltelijke overeenkomsten bevatten met de woorden die u hebt ingevoerd, worden hoger weergegeven.

2. **Relevantie** — Objecten waarvan de namen nauw aansluiten bij de zoekopdracht worden meestal hoger in de resultaten weergegeven.

3. **Objecttype** — Afhankelijk van de zoekopdracht kunnen resultaten verschillende typen objecten bevatten, zoals steden, straten, adressen of POI's.

4. **Afstand** — Wanneer resultaten vergelijkbare overeenkomstcriteria en objecttypes hebben, worden de resultaten die het dichtst bij de huidige locatie van de gebruiker liggen als eerste getoond.

5. **Belang** — Bekende bezienswaardigheden of vaak genoemde plaatsen kunnen hoger in de resultaten verschijnen wanneer ze nauw aansluiten bij de zoekopdracht.

***Bijvoorbeeld***, een zoekopdracht *postkantoor* zal eerst de dichtstbijzijnde postkantoren tonen, zelfs als er andere items met vergelijkbare namen op grotere afstand zijn.  

***Huidige beperkingen:***

- Er is geen handmatige instelling om de sorteervolgorde van zoekresultaten te wijzigen.
- Het sorteerproces wordt **automatisch beheerd** door OsmAnd, op basis van de hierboven genoemde criteria.
- In gevallen waar zoekresultaten te breed zijn, kan OsmAnd **de weergegeven resultaten beperken** tot die met de hoogste woordovereenkomst.

</TabItem>

</Tabs>


### Volledige tekst zoeken {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorieten zoeken Android](@site/static/img/search/favorite_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorieten zoeken iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

U kunt de vereiste locatie op de kaart vinden in de lijst met punten die verschijnen terwijl u een zoekopdracht invoert.

1. Begin met het typen van de naam of het adres in de zoekbalk.

2. Terwijl u typt, toont de lijst de punten die het dichtst bij de zoekopdracht liggen, in ongeveer deze volgorde:
    - POI-categorieën
    - Favorieten, POI, Routes en Waypoints
    - Tracks
    - Adressen
    - Kaarten om te downloaden

3. Bij het zoeken op naam op Android toont OsmAnd POI-typechips op basis van de typen die in de zoekresultaten voorkomen. Tik op een chip om de resultaten te filteren op het geselecteerde POI-type. U kunt meerdere POI-types selecteren. Een geselecteerde chip verplaatst zich naar de eerste positie in de lijst. Tik nogmaals op een geselecteerde chip om deze te deselecteren en terug te keren naar de volledige zoekresultaten.

4. Als u een [merknaam](../search/search-poi.md#how-to-use) invoert, begint de lijst met resultaten op deze naam, gesorteerd op de dichtstbijzijnde afstand.

5. De zoekresultaten kunnen ook een [reisgidsartikel](../plan-route/travel-guides.md#travel-article) bevatten. Als u erop tikt, wordt het artikel direct geopend in plaats van een locatie op de kaart weer te geven.

:::note Beperkingen van TIGER-data bij het zoeken naar adressen
OsmAnd heeft [**TIGER-data**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) geïntegreerd in de kaarten van de VS om informatie over Amerikaanse adressen te verstrekken. De TIGER-dataset is **bereikgebaseerd** en bevat geen precieze huisnummers, dus sommige adressen kunnen ontbreken of onnauwkeurig zijn.
:::

### Zoeken in de buurt (alleen Android) {#search-around}

![Zoeken in de buurt](@site/static/img/search/search_around.webp)

Wanneer de zoekfunctie aanzienlijk ver van uw huidige locatie wordt geopend, kunt u met de chip *Zoeken in de buurt* het gebied kiezen dat voor de zoekopdracht wordt gebruikt. Tik op de chip en selecteer een van de volgende opties:
- **Kaartcentrum** — Zoekt rond het huidige centrum van de kaart. Deze optie is standaard geselecteerd.
- **Mijn locatie** — Zoekt rond uw huidige locatie. 

### Zoeken op de kaart {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zoek POI Android](@site/static/img/search/poi_overlay_android_new.png) ![Zoek POI Android](@site/static/img/search/poi_overlay_android_new.webp)

</TabItem>

<TabItem value="ios" label="iOS">  

![Zoek POI iOS](@site/static/img/search/poi_overlay_ios_new.png) ![Zoek POI iOS](@site/static/img/search/poi_overlay_ios_new.webp)

</TabItem>

</Tabs>

Met OsmAnd kunt u zoeken naar punten die op een kaart op het scherm van uw apparaat worden weergegeven. Om dit te doen:

- Gebruik [een van de manieren](#how-to-use) om naar de Zoekfunctie te gaan.
- Begin met het typen van de naam of het adres in het zoekvak.
- Onder het zoekveld verschijnt een vak met de knop *Toon op kaart*. Op Android verschijnt de zwevende actieknop (FAB) *Toon op kaart* onderaan het zoekresultatenscherm.
- Tik op deze knop om naar de kaart te gaan.
- U kunt doorgaan met het typen van uw zoekopdracht bovenaan het scherm.


### Zoeken in de buurt {#search-nearby}

![Zoeken Android](@site/static/img/search/search_all_near_location_andr_new.png)

U kunt de zoekfunctie gebruiken in de buurt van een specifieke locatie. Selecteer hiervoor het gewenste punt [uit de lijst in het zoekmenu](#full-text-search) of selecteer het direct op de kaart. Selecteer in het [kaartcontextmenu](../map/map-context-menu.md#actions) *Acties → Zoeken in de buurt*.


## Adres zoeken {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zoeken Android](@site/static/img/search/search_address_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoeken iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

**Adres zoeken** maakt gebruik van OpenStreetMap-data. Met dit type zoekopdracht kunt u de locatie en de richting naar een specifiek adres vinden uit een reeds gesorteerde lijst. Lees meer in het artikel [Adres zoeken](./search-address.md).


## Verkennen zoeken {#search-explore}

<InfoAndroidOnly/>

![Verkennen zoeken](@site/static/img/search/explore_search_android.webp)

Het **Verkennen**-tabblad in de Zoektool helpt u snel plaatsen te ontdekken in de buurt van uw huidige locatie en toegang te krijgen tot recent geopende items. Het bevat twee hoofddelen: [Populaire plaatsen in de buurt](#popular-places-nearby)
 en [Geschiedenis](#history).

### Populaire plaatsen in de buurt {#popular-places-nearby}

De sectie **Populaire plaatsen in de buurt** toont een doorrolbare lijst met bekende bezienswaardigheden en attracties in de buurt van uw locatie. Elk item kan de naam van de plaats, de categorie, afstand en richting en een voorbeeldafbeelding bevatten indien beschikbaar. Tik op *Alles tonen* om de volledige lijst te openen of op *Toon op kaart* om deze plaatsen op de kaart weer te geven.

Voor meer details, zie [hier](../map/popular_places.md#explore-in-search).

### Geschiedenis {#history}

![Geschiedenissectie](@site/static/img/search/history_section_android.webp) ![Geschiedenissectie](@site/static/img/search/history_section_2_android.webp)

De sectie **Geschiedenis** biedt snelle toegang tot uw recente geschiedenisitems. Er worden maximaal 25 meest recente items weergegeven en de sectie kan worden uitgevouwen of samengevouwen. Tik op *Alles bekijken* om het volledige geschiedenisscherm te openen.

Op het volledige geschiedenisscherm kunt u uw geschiedenisitems sorteren en filteren met de volgende opties:

1. **Sorteren op**:
- Recent — toont eerst de meest recent toegevoegde items. Wanneer deze optie is geselecteerd, worden items gegroepeerd op tijd, zoals Vandaag, Vorige week en eerdere periodes.
- Dichtstbijzijnde — sorteert items op hun afstand tot uw huidige locatie.
- Dichtstbijzijnde bij kaartcentrum — sorteert items op hun afstand tot het huidige centrum van de kaart. Wanneer een van de op afstand gebaseerde sorteeropties is geselecteerd, worden de op tijd gebaseerde groepen niet weergegeven.

2. **Type** — filtert geschiedenisitems op:
- Alles — toont alle beschikbare geschiedenisitems.
- Zoeken — toont items uit uw zoekgeschiedenis.
- Navigatie — toont items uit uw navigatiegeschiedenis.

3. **Categoriefilters** — filtert geschiedenisitems op categorie. De beschikbare categoriefilters zijn afhankelijk van de typen items die in uw Geschiedenis beschikbaar zijn. U kunt bijvoorbeeld categorieën zien zoals POI, Track, Locatie, Favoriet of Adres.

4. **Instellingen** — tik op het tandwielpictogram in de rechterbovenhoek om de Geschiedenisinstellingen te openen, waar u Zoekgeschiedenis, Navigatiegeschiedenis en Kaartmarkergeschiedenis kunt in- of uitschakelen, geschiedenis als bestand kunt back-uppen of alle geschiedenis kunt wissen.

## Zoekgeschiedenis {#search-history}

![Geschiedenis zoeken](@site/static/img/search/history_search_ios.png)

Op iOS hebt u toegang tot uw Zoekgeschiedenis via het speciale tabblad **Geschiedenis** in de Zoektool. Hiermee kunt u opnieuw zoeken naar eerder gevonden plaatsen, adressen of vaak bezochte plaatsen zonder de zoekopdracht opnieuw in te voeren. Voor meer informatie, zie de iOS-sectie van het artikel [Zoekgeschiedenis](./search-history.md).


## POI zoeken {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zoek POI Android](@site/static/img/search/search_poi_categoties_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoek POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

De **POI zoeken** is een lijst, gesorteerd op categorie, waarmee u gemakkelijk plaatsen en diensten kunt vinden in de buurt van uw huidige locatie of een geselecteerd gebied op de kaart.

- [Aangepast POI zoeken](./search-poi.md#customize-poi-search) stelt u in staat om verschillende POI-categorieën te combineren om uw zoekopdracht te vereenvoudigen en te personaliseren.  
Bijvoorbeeld, als u meerdere soorten diensten in een bepaald gebied of op een bepaald deel van een route moet vinden.

- OsmAnd biedt een [Online zoekfunctie](./search-poi.md#online-search) die in realtime werkt, waardoor u snel toegang heeft tot zoekresultaten.  
Dit is handig om te gebruiken wanneer kaarten van de regio niet beschikbaar zijn, maar een constante en stabiele internetverbinding is vereist.

- Lees het artikel [POI zoeken](./search-poi.md) voor meer informatie.


## Coördinaten zoeken {#search-coordinates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Coördinaten zoeken Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Coördinaten zoeken iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Coördinaten zoeken biedt een nauwkeurige locatie. U kunt precieze coördinaten invoeren die bijvoorbeeld zijn verkregen van andere bronnen zoals een kaart, GPS-apparaat of online diensten, wat bijzonder handig is als het gaat om plaatsen die geen exact adres hebben. Voor meer informatie, zie het artikel [Coördinaten zoeken](./search-coordinates.md).


## Gerelateerde artikelen {#related-articles}

- [Adres zoeken](./search-address.md)
- [Zoekgeschiedenis](./search-history.md)
- [POI zoeken](./search-poi.md)
- [Coördinaten zoeken](./search-coordinates.md)
- [Populaire plaatsen](../map/popular_places.md)