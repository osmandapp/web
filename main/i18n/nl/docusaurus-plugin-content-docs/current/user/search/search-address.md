---
source-hash: cf4241ee60d46e0a3cc994e68bbced57d6c99c4266b32eabce60286e84fb0b90
sidebar_position: 2
title: Adres zoeken
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

*OsmAnd Zoeken op adres* is gebaseerd op OpenStreetMap-gegevens en stelt u in staat om de locatie en routebeschrijving naar een specifiek adres te vinden vanuit een reeds gesorteerde lijst, evenals te zoeken op postcode of coördinaten. Deze tool stelt u in staat om de vereiste adressen in een paar tikken te vinden, wat de zoektijd verkort en helpt in het geval u het exacte adres niet meer weet.

OsmAnd biedt verschillende manieren om naar de *Zoektool* te gaan, waar de sectie **Adres zoeken** zich bevindt.

- De [Zoekknop](../widgets/map-buttons.md#search) wordt altijd op de kaart weergegeven, en door erop te tikken komt u op het [algemene scherm](#full-text-search) van de tool, waar u het tabblad *Adres* kunt vinden.
- Ga naar het hoofdmenu van Android *Menu → Zoeken → tabblad Adres*.
- Wanneer u zich voorbereidt om een route te starten, tikt u op *Navigatie → Bestemming instellen → Zoekveld*.

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

- **Om de functie Adres zoeken te gebruiken,** moet u eerst een [kaart downloaden](../start-with/download-maps.md) van het vereiste gebied.
- **De zoekopdracht is gebaseerd op de gegevens die zich bevinden in het zichtbare gebied van de kaart** op het apparaatscherm. Als u niets vindt, biedt OsmAnd aan om de zoekradius te vergroten.
- De adresinformatie in OsmAnd bevat alle [OSM-tag sleutels](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).

Zoekopdrachtlijst:

**1.** De **volgorde** van items in de lijst:

- **Gesorteerd op naam**. Door *Eerst stad/plaats/locatie opgeven* (Android) of *Stad selecteren* (iOS) te selecteren, wordt een lijst weergegeven die begint met onbenoemde items, indien aanwezig, gevolgd door numerieke namen en vervolgens de namen op letters.
- **Oplopende numerieke volgorde**. In de volgende zoeklijst worden de huisnummers in oplopende volgorde weergegeven, na het invoeren van de stad en straat.

**2.** Elk veld in de Adreszoeklijst bevat **informatie** zoals:

- Een pictogram dat het type plaats identificeert.
- Deel van een adres, postnummer of coördinaatgebied.
- Afstand vanaf uw huidige locatie of vanaf het stadscentrum.
- Aanvullende informatie, zoals het stadsdeel.

#### Zoeken naar Amerikaanse adressen en TIGER-gegevens {#us-address-search-and-tiger-data}

OsmAnd ondersteunt adreszoekopdrachten met behulp van OpenStreetMap-gegevens, maar in de Verenigde Staten kunnen de resultaten van adreszoekopdrachten onvolledig zijn vanwege het gebruik van [TIGER-gegevens](https://wiki.openstreetmap.org/wiki/TIGER).

- **TIGER-gegevens bieden adresbereiken, geen exacte locaties**, dit betekent dat sommige huisnummers mogelijk niet worden herkend.
- **Als een adres niet wordt gevonden**, probeer dan te zoeken *op straatnaam* in plaats van een specifiek huisnummer.
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
Dit **toont een kleine lijst met steden rond uw locatie** of de plaats die u hebt opgegeven voor *Straat selecteren* of *Stad selecteren*. Elk veld bevat een pictogram dat overeenkomt met de grootte van de stad, de naam van de stad, de afstand van u tot het centrum, en voor Android de kompasrichting.

Deze manier van zoeken maakt het gemakkelijk om specifieke locaties binnen een geselecteerde plaats te vinden, wat een handige manier biedt om adressen nauwkeurig en snel te vinden. U kunt beginnen met het zoeken naar het benodigde adres door de plaats te bepalen.

- Tik hiervoor op **Eerst stad/plaats/locatie opgeven** (Android) of **Stad selecteren** (iOS).
- Selecteer in de lijst die wordt geopend de gewenste plaats. [Hier](#full-text-search) wordt beschreven in welke volgorde zoekopdrachten worden weergegeven en welke informatie over elk item beschikbaar is.
- Op het volgende scherm kunt u de adresgegevens verder verfijnen of de knop *Toon op kaart* onder het zoekveld selecteren.
- Om uw zoekopdracht te specificeren, kunt u de volledige naam of slechts een deel van de naam van de stad, plaats of dorp invoeren waar het adres dat u zoekt zich bevindt. Hiermee kunt u uw zoekopdracht verfijnen en een nauwkeurigere lijst krijgen.
- Door op het laatste item in het adres, huisnummer of kruispuntnaam te tikken, wordt het [kaartcontextmenu](../map/map-context-menu.md#select-an-object-single-tap) van het object geopend.

**Zoeken op stad biedt de volgende voordelen:**

- *Gemak*. Hiermee kunt u snel de gewenste stad uit de lijst selecteren en een bepaalde straat, huis of kruispunt in de geselecteerde stad opgeven zonder het volledige adres te hoeven invoeren. Dit bespaart tijd en vereenvoudigt het proces van het vinden van de juiste plaats.
- *Precisie.* U kunt een stad en straat selecteren uit de beschikbare opties, waardoor fouten bij het handmatig invoeren van een adres worden voorkomen.
- *Filteren.* De mogelijkheid om een specifiek huis uit de lijst te selecteren, maakt het gemakkelijker om nauwkeurig naar de gewenste locatie te navigeren, vooral wanneer het exacte adres onbekend is.

:::note Sleutel & Waarde
*Zoeken naar stad / plaats / dorp* op [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)
*Resultaat*: alle objecten met deze naam worden weergegeven.
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

Straat zoeken wordt uitgevoerd in de plaats waar u zich bevindt, of waar u eerder hebt gezocht, of die zich in het midden van de zichtbare kaart op het applicatiescherm bevindt.

- Om dit type zoekopdracht te gebruiken, tikt u op **Straat zoeken** (*Android*) of **Straat selecteren** (*iOS*).
- In het zoekveld naast de stadsnaam kunt u de straatnaam beginnen te typen en de lijst zal verfijnen, waardoor u de meest geschikte resultaten krijgt.
- In andere items is het zoeken naar straten hetzelfde als in [Stad selecteren](#select-city).

:::note Sleutel & Waarde
*Straten zoeken* op [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)
*Resultaat*: alle straten met deze naam worden getoond.
:::

## Postcode zoeken {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Postcode zoeken Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Postcode zoeken iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**Om de *Postcode zoekfunctie* te gebruiken, hoeft u alleen het nummer in te voeren**, dat zelfs uit één cijfer kan bestaan, en de applicatie biedt een lijst met beschikbare relevante postcodes.

- Selecteer de gewenste code en tik erop.
- U kunt de functie *Toon *postcodenummer* op de kaart* gebruiken. Dit opent een [kaartcontextmenu](../map/map-context-menu.md#select-an-object-single-tap) met de geselecteerde postcode zonder aanvullende informatie over de locatie.
- U kunt uw zoekopdracht verfijnen met deze code door eerst de gewenste straat uit de lijst te selecteren en vervolgens het nummer.

**Zoeken op postcode kan nuttig zijn in de volgende gevallen:**

- *Adressen vinden*. Wanneer u een postcode invoert, identificeert OsmAnd het corresponderende gebied en stelt adressen in dat gebied voor. Dit is vooral handig als u de postcode weet, maar het exacte adres niet.
- *Navigatieprecisie*. In gevallen waarin het adres niet zeker is, of waar de straatnaam in verschillende gebieden kan worden herhaald, kan het gebruik van een postcode de beste route naar een bepaald adres bieden.
- *Gemak en snelheid*. Zoeken op postcode stelt u in staat om snel informatie te vinden, vooral als u de postcode weet, maar niet zeker bent van het adres. In plaats van het volledige adres in te voeren, kunt u alleen de code invoeren en relevante resultaten krijgen.

:::note
Voor meer informatie, lees de **[Gegevens van de postcode van het Verenigd Koninkrijk](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
:::

## Coördinaten zoeken {#coordinates-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Coördinaten zoeken Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Coördinaten zoeken iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

[**Coördinaten zoeken**](../search/search-coordinates.md) stelt u in staat om geografische coördinaten, zoals breedtegraad en lengtegraad, op te geven om een specifieke locatie te vinden. Het biedt nauwkeurige locaties op een kaart in verschillende [coördinaatformaten](../search/search-coordinates.md#coordinates-search) en stelt u in staat om gerelateerde informatie te verkrijgen. Deze functie kan nuttig zijn wanneer u geen adres of exacte naam van een locatie hebt, en kan het plannen van reizen en navigeren op onbekende plaatsen vergemakkelijken.

## Gerelateerde artikelen {#related-articles}

- [Alles zoeken](./search-all.md)
- [Zoekgeschiedenis](./search-history.md)
- [POI zoeken](./search-poi.md)
- [Coördinaten zoeken](./search-coordinates.md)

> *Laatst bijgewerkt: juli 2024*