---
source-hash: 13f229400445a81db544afbadce1fb85746267eecddcd8299384d384de2a58b5
sidebar_position: 3
title: Zoekgeschiedenis
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Overzicht {#overview}

*Zoekgeschiedenis* is een overzicht van alle zoekopdrachten en locaties die u in de app hebt ingevoerd of gezocht gedurende de gebruiksperiode. Met deze tool kunt u eenvoudig eerder gezochte locaties vinden en openen, wat de navigatie vergemakkelijkt en u tijd bespaart.

OsmAnd biedt verschillende manieren om uw zoekgeschiedenis te bekijken.

- De [Zoekknop](../widgets/map-buttons.md#search) wordt altijd op de kaart weergegeven en door erop te tikken, gaat u naar het [algemene scherm](#how-to-use) van de tool.
- Ga naar het hoofdmenu van Android *Menu → Zoeken → Geschiedenis tabblad*.
- Wanneer u zich voorbereidt om een route te starten, tikt u op *Navigatie → Bestemming instellen → Zoekveld*.
- Het informatieblok in het navigatiemenu van de [routevoorbereiding](../navigation/setup/route-navigation.md#navigation-menu) toont een lijst met recente bestemmingspunten, die ook deel uitmaken van de zoekgeschiedenis.
- Zoekgeschiedenis is beschikbaar in [Android Auto](../navigation/auto-car.md#search) en [CarPlay](../navigation/car-play.md#search).


## Hoe te gebruiken {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Geschiedenis zoeken](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Geschiedenis zoeken](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

De zoekgeschiedenis dient om relevante informatie te geven over uw eerdere acties.

- *Opnieuw zoeken*. U kunt de zoekgeschiedenis gebruiken om opnieuw te zoeken naar eerder gezochte plaatsen of adressen zonder de zoekopdracht opnieuw te hoeven invoeren.

- *Snelle toegang tot veelbezochte plaatsen*. Als u bepaalde plaatsen vaak bezoekt, zoals uw huis, werk of favoriete plaatsen, slaat Zoekgeschiedenis die plaatsen op, waardoor u er snel toegang toe hebt.

- *Eerdere reizen bijhouden*. De zoekgeschiedenis kan nuttig zijn voor het bijhouden van eerdere reizen en routes. U kunt routes volgen die u eerder hebt afgelegd, of [uw volgende route plannen](../plan-route/create-route.md) op basis van eerdere routes.

- *Zoeken naar plaatsen over een bepaalde periode*. Voor de Android-app moet u lang tikken, dan de maand vinden waarin u de reis hebt gemaakt, het verwijderingsmenu verlaten en de naam in het zoekveld instellen. Voor de iOS-app is de zoekgeschiedenislijst al per maand in blokken verdeeld.

- *Items verwijderen*. Zoekgeschiedenis biedt de mogelijkheid om [eerdere items te verwijderen](#delete), wat nuttig kan zijn voor vertrouwelijkheid of om uw geschiedenis georganiseerd te houden.


## Geschiedenisitems {#history-items}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Geschiedenis zoeken](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Geschiedenis zoeken](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Elk veld in de zoekgeschiedenislijst bevat een deel van de **informatie** die beschikbaar is voor de toepassing.

- Een pictogram dat het type of de categorie van het gevonden object identificeert.
- De objectnaam, locatie, adres of type zoekopdracht. Voor tracks wordt informatie over de afstand, het aantal waypoints en de tijd weergegeven.
- Afstand van uw huidige locatie tot het punt en richting met het kompas.


### Volgorde van items {#order-of-items}

- **Recente items**. De meest recente verzoeken of locaties worden bovenaan de lijst weergegeven. Dit maakt snelle toegang tot recent gebruikte items mogelijk.
- **Chronologische volgorde**. Items in de zoekgeschiedenislijst zijn gerangschikt in chronologische volgorde, beginnend met de oudste of vroegste items en eindigend met de meest recente of laatste. Oude items zakken geleidelijk in de lijst naarmate nieuwe items worden toegevoegd, tenzij oude items in de zoekgeschiedenis zijn gebruikt, in welk geval ze naar de bovenkant van de lijst worden verplaatst.
- In iOS wordt de lijst gesorteerd op maand.

### Type objecten {#type-of-objects}

De volgende **typen objecten** komen in de zoekgeschiedenislijst:

- **Locaties**. Dit kan een adres, bedrijfsnaam, routenummer, coördinaten, markeringen, nuttige plaatsen, OSM-notities of plaatsen zijn waarop u op de kaart hebt getikt.
- **Tracks en Waypoints**. De lijst bevat tracks die u hebt gemaakt, opgenomen of gedownload en die u in eerdere routes hebt gebruikt, en waypoints als u er afzonderlijk naartoe hebt genavigeerd.


## Acties {#actions}

In de Zoekgeschiedenis-tool kunt u onnodige zoekopdrachten [verwijderen](#delete), allemaal tegelijk of per afzonderlijk item. U kunt de geschiedenis [exporteren](#export-and-share). De Android-app biedt een aanvullende actie om zoekitems te [delen](#share-android) als een [GPX](../../technical/osmand-file-formats/osmand-gpx.md)-bestand.

U kunt de weergave van de gehele zoekgeschiedenis **uitschakelen of inschakelen**. In dit geval worden de zoekopdrachten niet van het apparaat verwijderd. In Android bevindt de schakelaar zich op het hoofdscherm van de tool op het tabblad [Geschiedenis](#overview). In iOS bevindt deze zich in *Menu → Instellingen → OsmAnd-instellingen → Geschiedenis → Zoekgeschiedenis*.


### Verwijderen {#delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Geschiedenis zoeken](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Geschiedenis zoeken](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

Na langdurig gebruik van OsmAnd kan de lijst *Zoekgeschiedenis* te lang worden, dus het verwijderen van zoekopdrachten helpt de lijst op te schonen. U kunt zoekopdrachten verwijderen die niet langer relevant zijn of die u in de toekomst niet meer wilt gebruiken, wat het zoeken door de lijst vergemakkelijkt, vooral wanneer u snel specifieke zoekopdrachten moet vinden.

U moet **lang tikken op een van de zoekitems in de lijst** om het verwijderscherm te openen.

- *Willekeurige items selecteren of deselecteren* - tik op het gewenste item in de lijst.
- *De periode selecteren die beschikbaar is voor verwijdering*, zoals dag, laatste 7 dagen of maand - vink het vakje met de subtitel in de lijst aan.
- *U kunt de hele geschiedenis in één keer verwijderen* door op de knop *Alles selecteren* onderaan het scherm te tikken.
- *Menu → Instellingen → OsmAnd-instellingen → Geschiedenis → Acties*. Dit gedeelte bevat de knop **Alle geschiedenis verwijderen**.


### Exporteren en delen {#export-and-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Algemene instellingen geschiedenis Android](@site/static/img/personal/profiles/general_settings_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Algemene instellingen geschiedenis iOS](@site/static/img/personal/profiles/history_settings_ios.png)

</TabItem>

</Tabs>

Er zijn verschillende opties beschikbaar om de zoekgeschiedenis te exporteren. Alle bestanden worden geëxporteerd in `.osf` (OsmAnd settings File) formaat.

1. *Menu → Instellingen → OsmAnd-instellingen → Geschiedenis → Zoekgeschiedenis*.
    Exporteren is mogelijk via het OsmAnd-instellingenmenu. Voor Android brengt dit pad u naar het verwijderscherm, waar [Geschiedenis delen](#share-android) beschikbaar is. In het geval van iOS kunt u afzonderlijke items of de hele geschiedenis op het scherm selecteren, en na het tikken op de knop *Exporteren* gaat u naar het menu *Lokale back-up*.

2. *Menu → Instellingen → OsmAnd-instellingen → Geschiedenis → Acties → Back-up maken als bestand* (Android).
    *Menu → Instellingen → OsmAnd-instellingen → Geschiedenis → Acties → Exporteren* (iOS).
    Door op deze items te tikken, gaat u naar het menu *Importeren/Exporteren* (Android) of *Lokale back-up* (iOS). Vouw de lijst *Mijn plaatsen* uit en zoek *Zoekgeschiedenis*. Alle zoekopdrachten worden in één keer in één bestand geëxporteerd.

3. *Menu → Instellingen → Importeren/Exporteren → Exporteren naar bestand* (Android).
    *Menu → Instellingen → Lokale back-up → Back-up maken als bestand* (iOS).
    Meer details kunt u lezen in het artikel [Importeren/Exporteren](../personal/import-export.md#export).

4. [OsmAnd Cloud](../personal/osmand-cloud.md#select-data-to-back-up)
    U kunt de Cloud gebruiken om een back-up van uw zoekgeschiedenis te maken. In het menu *Lokale wijzigingen* of *Instellingen → Back-up maken van gegevens → Mijn plaatsen → Zoekgeschiedenis*.

![Instellingen geschiedenis](@site/static/img/search/history_search_share_andr.png)

Het exporteren van items of de gehele zoekgeschiedenis kan nuttig zijn in de volgende gevallen:

- *Back-up*. U kunt een back-up maken van uw zoekgeschiedenis om de informatie op te slaan voordat u deze verwijdert en indien nodig te herstellen.
- *Overzetten naar een ander apparaat*. Wanneer u van apparaat wisselt, kunt u de exportfunctie of de Cloud gebruiken om uw zoekgeschiedenis naar een nieuw apparaat over te zetten zonder opnieuw te hoeven zoeken en gegevens in te voeren.
- *Gegevens analyseren en verwerken*. U kunt uw zoekgeschiedenis exporteren voor gegevensanalyse of deze gebruiken in andere toepassingen.
- [Zoekgeschiedenis delen](#share-android) met andere OsmAnd-gebruikers.


#### Delen (Android) {#share-android}

![Instellingen geschiedenis](@site/static/img/search/history_search_share_andr.png)

De stappen om zoekgeschiedenisitems te delen zijn vergelijkbaar met [exporteren](#export-and-share), met het verschil dat u de hele geschiedenis in één keer exporteert als een [osf](../../technical/osmand-file-formats/osmand-osf.md)-bestand, terwijl u afzonderlijk geselecteerde bestanden in gpx-formaat kunt delen.

Selecteer op het [verwijderscherm](#delete) de gewenste items uit de zoekgeschiedenislijst. In de rechterbovenhoek van het scherm bevindt zich een pictogram dat delen aangeeft. Selecteer een beschikbare toepassing of actie in de lijst om te delen.


## Gerelateerde artikelen {#related-articles}

- [Alles zoeken](./search-all.md)
- [Adres zoeken](./search-address.md)
- [POI zoeken](./search-poi.md)
- [Coördinaten zoeken](./search-coordinates.md)


> *Laatst bijgewerkt: juli 2024*