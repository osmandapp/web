---
source-hash: a37206b0786e0c2a77928c36df15a5b99385e8522ae259e744dfd7222696eb76
sidebar_position: 1
title: Alles zoeken
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



<InfoIncompleteArticle/>


## Overzicht {#overview}

**Zoeken** is een handig hulpmiddel om snel locaties te vinden. U kunt Zoeken gebruiken om een locatie te vinden op adres, coördinaten, nuttige plaatsen (POI) of eerdere zoekopdrachten. Met Zoeken [Adres](#search-address) kunt u het adres invoeren om een exacte locatie te krijgen. Zoeken [Coördinaten](#search-coordinates) werkt met geografische coördinaten zoals breedtegraad en lengtegraad. Met Zoeken [POI](#search-poi) kunt u zoeken naar plaatsen in de buurt in specifieke categorieën, zoals cafés, hotels of tankstations. Zoek [Geschiedenis](#search-history) slaat eerdere zoekopdrachten op voor snelle toegang tot eerder gevonden plaatsen. De zoekfunctie maakt het gemakkelijk om reizen te plannen, onbekend terrein te navigeren en POI's in de buurt te vinden.


## Hoe te gebruiken {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zoek POI-lijst Android](@site/static/img/search/poi_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoek POI-lijst iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

U moet een van de volgende stappen volgen om uw zoekopdracht te starten:

- Tik op de [Zoekknop](../widgets/map-buttons.md#search) op het scherm van de kaartapplicatie en voer uw zoekopdracht in.

- Ga naar het hoofd *Menu → Zoeken → voer uw zoekopdracht in*.

- Wanneer u zich voorbereidt om een route te starten, tikt u op [*Navigatie → Bestemming instellen → Zoekveld*](../navigation/setup/route-navigation.md#set-target-point) *→ zoekopdracht*.  


Belangrijke informatie:

- ***Gedownloade offline vectorkaarten zijn vereist om te zoeken met OsmAnd***.

- In eerste instantie **is de zoekopdracht gebaseerd op de gegevens op de kaart in het zichtbare gebied van het apparaatscherm**, maar als daar niets wordt gevonden, biedt OsmAnd aan om de zoekradius te vergroten.  

### Basiszoekopdrachten {#basic-queries}

***Lijst met zoekopdrachten*:**

- Coördinaten alle beschikbare formaten.
- Adres:
    - Straat, Huisnummer;
    - Stad, Straat;
    - Straatkruisingen;
    - Stad;
    - Tiger-gegevens;
    - Postcode, Huisnummer;
    - Postcode, Straat, Huisnummer.
- Zoek POI op naam en op categorie met aanvullende filters.
- Zoek OSM-routes op naam en op categorie met aanvullende filters.
- Zoek op de meest prominente toppen en vulkanen.
- Zoek op Favorieten en Waypoints.
- Zoek pictogrammen op POI-subcategorienamen.
- Zoek op tracks.
- Zoek op bedrijfslocaties en merknamen.
- Online zoeken (Nominatim).
- URL-zoeken (Google en OsmAnd).
- Zoekgeschiedenis.

<!--
***Ondersteunde formaten*:**  

***Tags*** kunnen worden gebruikt als zoekopdracht. Ze bestaan uit ***een sleutel en een waarde***, bijvoorbeeld:
*addr:street=StreetName*.  
Om verwarring te voorkomen, wordt de sleutel of waarde soms tussen aanhalingstekens geplaatst: **key="value" of "key"="value"**. De aanhalingstekens en het gelijkteken maken geen deel uit van de taginhoud.
-->

### Zoekresultaten sorteren {#sorting-search-results}

OsmAnd sorteert zoekresultaten automatisch op drie hoofdcriteria:

1. **Overeenkomende zoekopdrachten** — Resultaten die exacte of gedeeltelijke overeenkomsten bevatten met de woorden die u hebt ingevoerd, worden hoger weergegeven.

2. **Objecttype** - Bij het sorteren op naam krijgen steden en straten voorrang boven POI's bij het weergeven van resultaten.

3. **Afstand** - Wanneer resultaten vergelijkbare overeenkomstcriteria en objecttypen hebben, worden de resultaten die het dichtst bij de huidige locatie van de gebruiker liggen, het eerst weergegeven.

***Bijvoorbeeld***, een zoekopdracht *postkantoor* toont eerst de dichtstbijzijnde postkantoren, zelfs als er andere items met vergelijkbare namen op grotere afstand zijn.  

***Huidige beperkingen:***

- Er is geen handmatige instelling om de sorteervolgorde van zoekresultaten te wijzigen.
- Het sorteerproces wordt **automatisch beheerd** door OsmAnd, op basis van de hierboven genoemde criteria.
- In gevallen waarin zoekresultaten te breed zijn, kan OsmAnd **de weergegeven resultaten beperken** tot die met de hoogste woordovereenkomstnauwkeurigheid.


### Volledige tekst zoeken {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoriete zoekopdracht Android](@site/static/img/search/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoriete zoekopdracht iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

U kunt de gewenste locatie op de kaart vinden uit de lijst met punten die verschijnen terwijl u een zoekopdracht invoert.

1. Begin met het typen van de naam of het adres in de zoekbalk.

2. Terwijl u typt, toont de lijst de punten die het dichtst bij de zoekopdracht liggen, ongeveer in deze volgorde:
    - POI-categorieën
    - Favorieten, POI, Routes en Waypoints
    - Tracks
    - Adressen
    - Kaarten om te downloaden

3. Als u een [merknaam](../search/search-poi.md#how-to-use) invoert, begint de lijst met resultaten op deze naam, gesorteerd op de kortste afstand.

:::note TIGER-gegevensbeperkingen bij adreszoekopdrachten
OsmAnd heeft [**TIGER-gegevens**](../../technical/algorithms/trace-address-search-issues.md#trace-address-search-issues#us-address-search-and-tiger-data) geïntegreerd in de Amerikaanse kaarten om informatie over Amerikaanse adressen te verstrekken. De TIGER-dataset is **bereikgebaseerd** en bevat geen precieze huisnummers, dus sommige adressen kunnen ontbreken of onnauwkeurig zijn.
:::


### Zoeken op de kaart {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zoek POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Zoek POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

OsmAnd stelt u in staat om te zoeken naar punten die worden weergegeven op een kaart op het scherm van uw apparaat. Om dit te doen:

- Gebruik [een van de manieren](#how-to-use) om naar de zoekfunctie te gaan.
- Begin met het typen van de naam of het adres in het zoekvak.
- Een vak met de knop *Toon op kaart* verschijnt onder het zoekinvoerveld.
- Tik op deze knop om naar de kaart te gaan.
- U kunt uw zoekopdracht bovenaan het scherm blijven typen.


### Zoeken in de buurt {#search-nearby}

![Zoeken Android](@site/static/img/search/search_all_near_location_andr.png)

U kunt de zoekfunctie gebruiken in de nabijheid van een specifieke locatie. Selecteer hiervoor het gewenste punt [uit de lijst in het zoekmenu](#full-text-search) of selecteer het direct op de kaart. Selecteer in het [kaartcontextmenu](../map/map-context-menu.md#actions) *Acties → Zoeken in de buurt*.


## Adres zoeken {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zoeken Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoeken iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

**Adres zoeken** maakt gebruik van OpenStreetMap-gegevens. Dit type zoekopdracht stelt u in staat om de locatie en route naar een specifiek adres te vinden vanuit een reeds gesorteerde lijst. Lees meer in het artikel [Adres zoeken](./search-address.md).


## Zoekgeschiedenis {#search-history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Geschiedenis zoeken](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Geschiedenis zoeken](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

U kunt de **Zoekgeschiedenis** gebruiken om eerder gevonden plaatsen, adressen of veelbezochte plaatsen opnieuw te zoeken zonder de zoekopdracht opnieuw in te voeren. Meer details vindt u in het artikel [Zoekgeschiedenis](./search-history.md).


## POI zoeken {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zoek POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoek POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

De **POI zoeken** is een lijst, gesorteerd op categorie, waarmee u gemakkelijk plaatsen en diensten in de buurt van uw huidige locatie of een geselecteerd gebied op de kaart kunt vinden.

- [Aangepaste POI-zoekopdracht](./search-poi.md#custom-poi-search) stelt u in staat om verschillende POI-categorieën te combineren om uw zoekopdracht te vereenvoudigen en te personaliseren.  
Bijvoorbeeld, als u verschillende soorten diensten in een bepaald gebied of op een bepaald deel van een route moet vinden.

- OsmAnd biedt een [Online zoekopdracht](./search-poi.md#online-search) die in realtime werkt, waardoor u snel toegang krijgt tot zoekresultaten.  
Het is handig om te gebruiken wanneer kaarten van de regio niet beschikbaar zijn, maar een constante en stabiele internetverbinding is vereist.

- Lees het artikel [POI zoeken](./search-poi.md) voor meer informatie.


## Coördinaten zoeken {#search-coordinates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zoek coördinaten Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoek coördinaten iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Coördinaten zoeken biedt een nauwkeurige locatie. U kunt precieze coördinaten invoeren die bijvoorbeeld zijn verkregen uit andere bronnen zoals een kaart, GPS-apparaat of online diensten, wat bijzonder handig is als het gaat om plaatsen die geen exact adres hebben. Voor meer informatie, zie het artikel [Coördinaten zoeken](./search-coordinates.md).


## Gerelateerde artikelen {#related-articles}

- [Adres zoeken](./search-address.md)
- [Zoekgeschiedenis](./search-history.md)
- [POI zoeken](./search-poi.md)
- [Coördinaten zoeken](./search-coordinates.md)

> *Laatst bijgewerkt: april 2025*