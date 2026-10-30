---
source-hash: 10cbeafd902c636e09520ab4df9f764d8c01529060c7ee38d4e0bf4ae741b6a2
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

**Zoeken** is een handig hulpmiddel om snel locaties te vinden. U kunt Zoeken gebruiken om een locatie te vinden op adres, coördinaten, nuttige plaatsen (POI) of via eerdere zoekopdrachten. Met [Adres zoeken](#search-address) kunt u het gewenste adres invoeren om een exacte locatie te krijgen. [Coördinaten](#search-coordinates) zoeken werkt met geografische coördinaten zoals lengte- en breedtegraad. Met [POI](#search-poi) zoeken kunt u zoeken naar nabijgelegen plaatsen in specifieke categorieën, zoals cafés, hotels of benzinestations. Het [Verkennen](#search-explore) tabblad benadrukt populaire plaatsen in de buurt en biedt snelle toegang tot recent bezochte locaties. De zoekfunctie maakt het gemakkelijk om reizen te plannen, door onbekend terrein te navigeren en POI's in de buurt te vinden.


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

U kunt de sorteervolgorde van zoekresultaten ook handmatig wijzigen met de sorteerchip bovenaan de lijst met zoekresultaten. De chip toont de geselecteerde optie. Tik erop en kies een van de volgende opties in het menu *Sorteren op*:
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

2. Terwijl u typt, toont de lijst de resultaten die overeenkomen met uw zoekopdracht. De resultaten worden gesorteerd zoals beschreven in de sectie [Zoekresultaten sorteren](#sorting-search-results).

3. Bij het zoeken op naam op Android toont OsmAnd POI-typechips op basis van de typen die in de zoekresultaten voorkomen. Tik op een chip om de resultaten te filteren op het geselecteerde POI-type. U kunt meerdere POI-types selecteren. Een geselecteerde chip verplaatst zich naar de eerste positie in de lijst. Tik nogmaals op een geselecteerde chip om deze te deselecteren en terug te keren naar de volledige zoekresultaten.

4. Als u een [merknaam](../search/search-poi.md#how-to-use) invoert, begint de lijst met resultaten op deze naam, gesorteerd op de dichtstbijzijnde afstand.

5. De zoekresultaten kunnen ook een [reisgidsartikel](../plan-route/travel-guides.md#travel-article) bevatten. Als u erop tikt, wordt het artikel direct geopend in plaats van een locatie op de kaart weer te geven.

:::note Beperkingen van TIGER-data bij het zoeken naar adressen
OsmAnd heeft [**TIGER-data**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) geïntegreerd in de kaarten van de VS om informatie over Amerikaanse adressen te verstrekken. De TIGER-dataset is **bereikgebaseerd** en bevat geen precieze huisnummers, dus sommige adressen kunnen ontbreken of onnauwkeurig zijn.
:::

### Ruimtelijk zoeken {#spatial-search}

<InfoAndroidOnly/>

![Ruimtelijk zoeken](@site/static/img/search/spatial_search.webp)

Ruimtelijk zoeken is een experimentele zoekmachine die rekening houdt met waar objecten zich ten opzichte van elkaar bevinden, en niet alleen met hoe hun namen overeenkomen met uw zoekopdracht. Het helpt OsmAnd om zoekopdrachten die uit meerdere delen bestaan, zoals een plaatsnaam en een POI-categorie, correct te interpreteren.

Ruimtelijk zoeken is standaard uitgeschakeld. Om het in te schakelen, gaat u naar de instellingen van de [OsmAnd Development-plug-in](../plugins/development.md#internal-algorithms) en schakelt u *Ruimtelijke tekstzoekopdracht gebruiken* in. Wanneer het is ingeschakeld, vervangt Ruimtelijk zoeken de standaard zoekmachine voor POI- en adreszoekopdrachten.

Met Ruimtelijk zoeken kunt u:
- Zoeken naar een POI op een specifieke plaats. Voer een categorie en een plaatsnaam in één zoekopdracht in, bijvoorbeeld Hotel Berlijn. De plaatsnaam wordt gebruikt als zoekgebied en de categorie wordt daarbinnen gezocht.
- Zoeken naar plaatsen die aan twee voorwaarden voldoen. Voer twee categorieën of een categorie en een eigenschap in, bijvoorbeeld Brandstof Diesel of Café Vegan, om plaatsen te vinden die aan beide voldoen. Een zoekopdracht zoals Brandstof McDonald's vindt tankstations die zich in de buurt van een McDonald's bevinden. De volgorde van de woorden is belangrijk. Het eerste woord bepaalt wat u zoekt en het tweede bepaalt waar het in de buurt van moet zijn. McDonald’s Brandstof vindt bijvoorbeeld McDonald’s-restaurants die zich in de buurt van tankstations bevinden.
- Zoeken rond een gevonden plaats. Voer een categorie en een plaatsnaam in, bijvoorbeeld *Hotel Berlijn*, en tik vervolgens bovenaan de zoekresultaten op *Hotel bij Berlijn*. De naam van deze plaats wordt toegevoegd aan de chip [Zoeken in de buurt](#search-around).
- Verschillende notaties van straatnamen en vertaalde categorienamen in uw zoekopdrachten gebruiken.
- Sneller resultaten krijgen bij het zoeken op populaire POI-categorieën, zoals apotheek, parkeerplaats of restaurant.

### Zoeken in de buurt {#search-around}

<InfoAndroidOnly/>

![Zoeken in de buurt](@site/static/img/search/search_around_berlin.webp)

Wanneer het kaartcentrum meer dan 50 m van uw locatie verwijderd is en de kaart uw positie niet volgt, wordt er rond het kaartcentrum gezocht en toont het zoekveld *Zoeken N km verderop*. Wanneer het kaartcentrum meer dan 70 km van uw locatie verwijderd is, verschijnt naast de sorteerchip een chip met het zoekgebied. De chip toont de geselecteerde optie. Tik erop en kies een van de volgende opties in het menu *Zoeken in de buurt*:
- **Kaartcentrum** — Zoekt rond het huidige centrum van de kaart. Deze optie is standaard geselecteerd.
- **Mijn locatie** — Zoekt rond uw huidige locatie.
- **Plaatsnaam** — Zoekt rond een plaats die u hebt gevonden met [Ruimtelijk zoeken](#spatial-search). Voer bijvoorbeeld *Hotel Berlijn* in en tik vervolgens bovenaan de zoekresultaten op *Hotel bij Berlijn*. *Berlijn* verschijnt op de chip en hotels rond Berlijn worden getoond. Deze optie is alleen beschikbaar wanneer Ruimtelijk zoeken is ingeschakeld. 

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


## Zoeken verkennen {#search-explore}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Verkennen zoeken](@site/static/img/search/explore_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Geschiedenis zoeken](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Op Android helpt het tabblad **Verkennen** in de Zoektool u snel plaatsen te ontdekken in de buurt van uw huidige locatie en toegang te krijgen tot uw geschiedenis. Op iOS kunt u met het tabblad **Geschiedenis** opnieuw zoeken naar eerder gevonden plaatsen, adressen of vaak bezochte plaatsen zonder de zoekopdracht opnieuw in te voeren. Voor meer informatie, zie het artikel [Zoeken verkennen](./search-history.md).


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
- [Zoeken verkennen](./search-history.md)
- [POI zoeken](./search-poi.md)
- [Coördinaten zoeken](./search-coordinates.md)
- [Populaire plaatsen](../map/popular_places.md)