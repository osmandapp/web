---
source-hash: cc7b11b19f0261ab3f9cc12de149c6d268cdaa50b3a828cc60f5dd3ebe0ce868
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

*OsmAnd Adres zoeken* is gebaseerd op OpenStreetMap-gegevens en stelt u in staat om de locatie en routebeschrijving naar een specifiek adres te vinden uit een reeds gesorteerde lijst, evenals te zoeken op postcode of coördinaten. Deze tool stelt u in staat om de vereiste adressen in een paar tikken te vinden, wat de zoektijd verkort en helpt als u het exacte adres niet meer weet.

Adres zoeken werkt offline met gedownloade kaarten. Zorg ervoor dat de kaart voor de regio waarin u zoekt is geïnstalleerd. Resultaten hangen af van de adresgegevens die beschikbaar zijn in OpenStreetMap.

OsmAnd biedt verschillende manieren om naar de *Zoektool* te gaan waar de sectie **Adres zoeken** zich bevindt.

- De [Zoekknop](../widgets/map-buttons.md#search) wordt altijd op de kaart weergegeven, en als u erop tikt, gaat u naar het [algemene scherm](#full-text-search) van de tool, waar u het tabblad *Adres* kunt vinden.
- Ga naar het hoofdmenu van Android *Menu → Zoeken → tabblad Adres*.
- Tik bij het voorbereiden van een route op *Navigatie → Bestemming instellen → Zoekveld*.


## Volledige tekst zoeken {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Adres zoeken Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Adres zoeken iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

OsmAnd ondersteunt volledige tekst adres zoeken. Dit betekent dat u een adres direct in het zoekveld kunt typen in plaats van stad → straat → huisnummer stap voor stap te selecteren. De zoekmachine probeert adrescomponenten te herkennen zoals:
- stad;
- straat;
- huisnummer;
- postcode;
- plaatsnaam.

U hoeft ze niet in een strikte volgorde in te voeren. **Voorbeeldquery's**:

`221B Baker Street London`  
`Baker Street 221B`  
`London Baker Street 221B`  
`101 Main Street`  
`Main Street 101`

Als het volledige adres niet wordt gevonden, probeert OsmAnd automatisch vereenvoudigde query's (bijvoorbeeld door extra woorden te verwijderen) om de kans te vergroten dat de locatie wordt gevonden.

**OPMERKING:** Adres zoeken werkt alleen binnen gedownloade kaarten. Zoekresultaten zijn gebaseerd op:
- kaarten geïnstalleerd op uw apparaat;
- het zichtbare kaartgebied;
- uw huidige locatie. 

Als er niets wordt gevonden, kan OsmAnd voorstellen om de zoekradius te vergroten.

### Adres zoeken in de VS en TIGER-gegevens {#us-address-search-and-tiger-data}

OsmAnd ondersteunt het zoeken naar adressen met behulp van OpenStreetMap-gegevens, maar in de Verenigde Staten kunnen de zoekresultaten voor adressen onvolledig zijn vanwege het gebruik van [TIGER-gegevens](https://wiki.openstreetmap.org/wiki/TIGER).  

- **TIGER-gegevens bieden adresbereiken, geen exacte locaties**, dit betekent dat sommige huisnummers mogelijk niet worden herkend.
- **Als een adres niet wordt gevonden**, probeer dan te zoeken *op straatnaam* in plaats van op een specifiek huisnummer.
- Gebruik *alternatieve locatie-identificatoren*, zoals nabijgelegen oriëntatiepunten of ZIP-codes, om uw zoekresultaten te verfijnen.  

### Ondersteunde formaten {#supported-formats}

OsmAnd ondersteunt verschillende veelvoorkomende adresformaten. U kunt adressen in verschillende volgordes invoeren afhankelijk van hoe u het adres kent.

| Adresformaat | Voorbeeldquery's |
|---|---|
| Huisnummer + straat | 221B Baker Street<br />10 Downing Street |
| Straat + huisnummer | Baker Street 221B<br />Main Street 101 |
| Stad + straat + huisnummer | London Baker Street 221B<br />Paris Rue de Rivoli 10 |
| Straat kruisingen | Broadway & Wall Street<br />Main Street and High Street |
| Stadnaam | Berlin<br />Vienna<br />San Francisco |
| Postcode + adres | 10001 New York<br />75001 Paris Rue de Rivoli 10 |

### Zoektips {#search-tips}

Adres zoeken in OsmAnd is tolerant voor verschillende invoerformaten. U kunt proberen:
- de volgorde van woorden te wijzigen;
- extra informatie te verwijderen;
- alleen op straatnaam te zoeken.

De zoekmachine tolereert ook veelvoorkomende variaties in adresformattering zoals verschillende woordvolgorde, spellingsverschillen, afkortingen of huisnummerformaten. De onderstaande tabel toont typische zoekvariaties die nog steeds hetzelfde adres kunnen retourneren.

| Zoekvariatie | Voorbeeldquery's | Gerelateerde discussie |
|---|---|---|
| Straatnaamvariaties | [Weberstraße](https://osmand.net/map?pin=51.853672,12.042003#13/51.8545/12.0386) <br /> Weberstrasse <br /> Weber-straße <br /> Weber-strasse | [Discussie](https://github.com/osmandapp/OsmAnd/issues/23709) |
| Ruimtes in namen negeren | [Goethe Straße](https://osmand.net/map?pin=51.85358,12.064447#13/51.8545/12.0386) <br /> Goethestraße | [Discussie](https://github.com/osmandapp/OsmAnd/issues/13783) |
| Huisnummers met letterachtervoegsels | [30B Dragonder, Valkenswaard](https://osmand.net/map?pin=51.339645,5.4682517#19/51.3398/5.4681) <br /> 30b Dragonder, Valkenswaard <br /> 30-B Dragonder, Valkenswaard <br /> 30-b Dragonder, Valkenswaard | [Discussie](https://github.com/osmandapp/OsmAnd/issues/23320) |
| Straat afkortingen | [Straelener Straße](https://osmand.net/map?pin=51.443604,6.343231#19/51.4436/6.3432) <br /> Straelener Str. | [Discussie](https://github.com/osmandapp/OsmAnd/issues/4923) |
| Volledig adres vs vereenvoudigd adres | [221B Baker Street London United Kingdom](https://osmand.net/map/poi/?name=221B+Baker+Street&type=Tourist+attraction&pin=51.52339,-0.1582396) <br /> 221B Baker Street <br /> Baker Street 221B | [Discussie](https://github.com/osmandapp/OsmAnd/issues/19004) |
| VS adresformaat | [1500 North Main Avenue, Springfield](https://osmand.net/map?pin=37.226315,-93.296524#11/37.1799/-93.3522) <br /> [4600 Sugar Maple Lane, Nashville](https://osmand.net/map?pin=36.051846,-86.95705#18/36.0516/-86.9561) | [Discussie](https://github.com/osmandapp/OsmAnd/issues/6824) |
| VS staat afkortingen | [Springfield, VA 22150](https://osmand.net/map?pin=36.51995,-86.86385#18/36.5199/-86.8635) <br /> [Manhattan Beach, CA 90266](https://osmand.net/map?pin=33.883938,-118.41048#20/33.8839/-118.4105) | [Discussie](https://github.com/osmandapp/OsmAnd/issues/6824) |


## Stad selecteren {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Stad zoeken Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Stad zoeken iOS](@site/static/img/search/town_search_ios.png)

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

**Zoeken op postcode kan nuttig zijn wanneer:**

- De straatnaam in meerdere steden bestaat.
- U de postcode kent maar niet het exacte adres.

:::note
Lees voor meer informatie de **[Postcodegegevens van het Verenigd Koninkrijk](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
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

[**Coördinaten zoeken**](../search/search-coordinates.md) stelt u in staat om geografische coördinaten, zoals breedte- en lengtegraad, op te geven om een specifieke locatie te vinden. Het biedt nauwkeurige locaties op een kaart in verschillende [coördinaatformaten](../search/search-coordinates.md#coordinate-format) en stelt u in staat om gerelateerde informatie te verkrijgen. Deze functie kan handig zijn wanneer u geen adres of exacte naam van een locatie hebt, en kan het plannen van reizen en navigeren op onbekende plaatsen vergemakkelijken.  


## Gerelateerde artikelen {#related-articles}

- [Alles zoeken](./search-all.md)
- [Zoekgeschiedenis](./search-history.md)
- [POI zoeken](./search-poi.md)
- [Coördinaten zoeken](./search-coordinates.md)