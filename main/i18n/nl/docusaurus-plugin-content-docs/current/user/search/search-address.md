---
source-hash: 677964c6e30a8d9596ffa45395cb1cc593266a07fbfb2b36d1a6384a00432d7d
sidebar_position: 2
title:  Adres zoeken
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

*OsmAnd Adres zoeken* is gebaseerd op OpenStreetMap-gegevens en stelt u in staat om de locatie en routebeschrijving naar een specifiek adres te vinden uit een reeds gesorteerde lijst, evenals te zoeken op postcode of coördinaten. Met deze tool kunt u de vereiste adressen in een paar tikken vinden, wat de zoektijd verkort en helpt als u het exacte adres niet meer weet.

OsmAnd biedt verschillende manieren om naar de *Zoektool* te gaan waar de sectie **Adres zoeken** zich bevindt.

- De [Zoekknop](../widgets/map-buttons.md#search) wordt altijd op de kaart weergegeven, en als u erop tikt, gaat u naar het [algemene scherm](#full-text-search) van de tool, waar u het tabblad *Adres* kunt vinden.
- Ga naar het hoofdmenu van Android *Menu → Zoeken → tabblad Adres*.
- Tik bij het voorbereiden van een route op *Navigatie → Bestemming instellen → Zoekveld*.


## Zoeken in volledige tekst {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zoeken Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoeken iOS](@site/static/img/search/street_search_ios.png)

</TabItem>

</Tabs>

Zoeken op adres vereenvoudigt het zoek- en navigatieproces, zorgt voor nauwkeurigheid en bruikbaarheid, en verkort de tijd die nodig is om het juiste adres te vinden.

- **Om de functie Adres zoeken te gebruiken,** moet u eerst [een kaart downloaden](../start-with/download-maps.md) van het vereiste gebied.
- **De zoekopdracht is gebaseerd op de gegevens in het zichtbare gebied van de kaart** op het scherm van het apparaat. Als u niets vindt, stelt OsmAnd voor om de zoekradius te vergroten.
- De adresinformatie in OsmAnd bevat alle [OSM tag-sleutels](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).


Lijst met zoekopdrachten:

**1.** De **volgorde** van items in de lijst:

- **Gesorteerd op naam**. Als u *Eerst stad/plaats/localiteit opgeven* (Android) of *Stad selecteren* (iOS) selecteert, wordt een lijst weergegeven die begint met naamloze items, indien aanwezig, gevolgd door numerieke namen en vervolgens de namen op letter.
- **Oplopende numerieke volgorde**. In de volgende zoeklijst worden de huisnummers in oplopende volgorde weergegeven, na het invoeren van de stad en straat.

**2.** Elk veld in de lijst Adres zoeken bevat **informatie** zoals:

- Een pictogram dat het type plaats aangeeft.
- Deel van een adres, postnummer of coördinatengebied.
- Afstand vanaf uw huidige locatie of vanaf het stadscentrum.
- Aanvullende informatie, zoals het stadsdeel.


### Adres zoeken in de VS en TIGER-gegevens {#us-address-search-and-tiger-data}

OsmAnd ondersteunt het zoeken naar adressen met behulp van OpenStreetMap-gegevens, maar in de Verenigde Staten kunnen de zoekresultaten voor adressen onvolledig zijn vanwege het gebruik van [TIGER-gegevens](https://wiki.openstreetmap.org/wiki/TIGER).

- **TIGER-gegevens bieden adresbereiken, geen exacte locaties**, dit betekent dat sommige huisnummers mogelijk niet worden herkend.
- **Als een adres niet wordt gevonden**, probeer dan te zoeken *op straatnaam* in plaats van op een specifiek huisnummer.
- Gebruik *alternatieve locatie-identificatoren*, zoals nabijgelegen oriëntatiepunten of postcodes, om uw zoekresultaten te verfijnen.


### Ondersteunde formaten {#supported-formats}

Zie het artikel [Alles zoeken](./search-all.md#basic-queries) voor een lijst met beschikbare zoekopdrachten en ondersteunde zoekformaten.


## Stad selecteren {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Straat zoeken Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Straat zoeken iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**Dichtstbijzijnde steden**  
    Dit **toont een kleine lijst van steden rond uw locatie** of de plaats die u hebt opgegeven voor *Straat selecteren* of *Stad selecteren*. Elk veld bevat een pictogram dat overeenkomt met de grootte van de stad, de naam van de stad, de afstand van u tot het centrum, en voor Android de kompasrichting.

Deze manier van zoeken maakt het gemakkelijk om specifieke locaties binnen een geselecteerde plaats te vinden, wat een handige manier is om adressen nauwkeurig en snel te vinden. U kunt beginnen met het zoeken naar het benodigde adres door de plaats te bepalen.

- Tik hiervoor op **Eerst stad/plaats/localiteit opgeven** (Android) of **Stad selecteren** (iOS).
- Selecteer in de lijst die wordt geopend de gewenste plaats. [Hier](#full-text-search) wordt de volgorde beschreven waarin zoekopdrachten worden weergegeven en welke informatie over elk item beschikbaar is.
- Op het volgende scherm kunt u het adres verder verfijnen of de knop *Toon op de kaart* onder het zoekinvoerveld selecteren.
- Om uw zoekopdracht te specificeren, kunt u de volledige of slechts een deel van de naam van de stad, het dorp of de gemeente invoeren waar het adres dat u zoekt zich bevindt. Hiermee kunt u uw zoekopdracht verfijnen en een nauwkeurigere lijst krijgen.
- Als u op het laatste item in het adres, huisnummer of de naam van de kruising tikt, wordt het [contextmenu van de kaart](../map/map-context-menu.md#select-an-object-single-tap) van het object geopend.

**Zoeken op stad biedt de volgende voordelen:**

- *Gemak*. Hiermee kunt u snel de gewenste stad uit de lijst selecteren en een bepaalde straat, huis of kruising in de geselecteerde stad specificeren zonder het volledige adres in te hoeven voeren. Dit bespaart tijd en vereenvoudigt het proces van het vinden van de juiste plaats.
- *Precisie.* U kunt een stad en straat selecteren uit de beschikbare opties, waardoor fouten bij het handmatig invoeren van een adres worden vermeden.
- *Filteren.* De mogelijkheid om een specifiek huis uit de lijst te selecteren, maakt het gemakkelijker om nauwkeurig naar de vereiste locatie te navigeren, vooral wanneer het exacte adres onbekend is.

:::note Sleutel & Waarde
*Zoeken op stad / dorp / gehucht* via [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Resultaat*: weergave van alle objecten met deze naam.
:::


## Straat selecteren {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Straat zoeken Android](@site/static/img/search/street_search.png) ![Straat zoeken Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Straat zoeken iOS](@site/static/img/search/address_street_search_3_ios.png) ![Straat zoeken Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

Het zoeken naar straten wordt uitgevoerd in de plaats waar u zich bevindt, of waar u eerder hebt gezocht, of die zich in het midden van de zichtbare kaart op het applicatiescherm bevindt.

- Om dit type zoekopdracht te gebruiken, tikt u op **Straat zoeken** (*Android*) of **Straat selecteren** (*iOS*).
- In het zoekveld naast de stadsnaam kunt u beginnen met het typen van de straatnaam en de lijst zal zich verfijnen, waardoor u de meest geschikte resultaten krijgt.
- Bij andere items is het zoeken naar straten hetzelfde als in [Stad selecteren](#select-city).

:::note Sleutel & Waarde
*Straten zoeken* via [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Resultaat*: alle straten met deze naam worden getoond.
:::


## Zoeken op postcode {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Postcode zoeken Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Postcode zoeken iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**Om de *Postcode zoeken* te gebruiken, hoeft u alleen maar het nummer in te voeren**, dat zelfs uit een enkel cijfer kan bestaan, en de applicatie biedt een lijst met beschikbare relevante postcodes.

- Selecteer de gewenste code en tik erop.
- U kunt de functie *Toon *postcodenummer* op de kaart* gebruiken. Dit opent een [contextmenu van de kaart](../map/map-context-menu.md#select-an-object-single-tap) met de geselecteerde postcode zonder enige aanvullende informatie over de locatie.
- U kunt uw zoekopdracht verfijnen op basis van deze code door eerst de gewenste straat uit de lijst te selecteren en vervolgens het nummer.

**Zoeken op postcode kan in de volgende gevallen nuttig zijn:**

- *Adressen vinden*. Wanneer u een postcode invoert, identificeert OsmAnd het overeenkomstige gebied en stelt adressen in dat gebied voor. Dit is vooral handig als u de postcode kent, maar niet het exacte adres.
- *Navigatieprecisie*. In gevallen waarin het adres niet zeker is, of waar de straatnaam in verschillende gebieden kan worden herhaald, kan het gebruik van een postcode de beste route naar een bepaald adres bieden.
- *Gemak en snelheid*. Zoeken op postcode stelt u in staat om snel informatie te vinden, vooral als u de postcode kent maar niet zeker bent van het adres. In plaats van het volledige adres in te voeren, kunt u gewoon de code invoeren en relevante resultaten krijgen.

:::note
Lees voor meer informatie de **[Postcodegegevens van het Verenigd Koninkrijk](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
:::


## Zoeken op coördinaten {#coordinates-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Coördinaten zoeken Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Coördinaten zoeken iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

[**Zoeken op coördinaten**](../search/search-coordinates.md) stelt u in staat om geografische coördinaten, zoals breedte- en lengtegraad, op te geven om een specifieke locatie te vinden. Het biedt nauwkeurige locaties op een kaart in verschillende [coördinaatformaten](../search/search-coordinates.md#coordinate-format) en stelt u in staat om gerelateerde informatie te verkrijgen. Deze functie kan handig zijn wanneer u geen adres of exacte naam van een locatie hebt, en kan het plannen van reizen en navigeren op onbekende plaatsen vergemakkelijken.


## Gerelateerde artikelen {#related-articles}

- [Alles zoeken](./search-all.md)
- [Zoekgeschiedenis](./search-history.md)
- [POI zoeken](./search-poi.md)
- [Coördinaten zoeken](./search-coordinates.md)