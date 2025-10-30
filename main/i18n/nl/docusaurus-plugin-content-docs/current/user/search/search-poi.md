---
source-hash: db2ded33609f0ef8017b5258a1878156ee95899ee472c17da54d70d37f1b5789
sidebar_position: 4
title:  POI zoeken
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

<InfoIncompleteArticle/>


## Overzicht {#overview}

[OsmAnd Point of Interest](https://wiki.openstreetmap.org/wiki/Points_of_interest) (POI) functionaliteit in OsmAnd biedt nauwkeurigheid, zichtbaarheid en gemak bij het vinden van interessante plaatsen, routes en diensten in de buurt van uw huidige locatie of een geselecteerd gebied op de kaart.

In de zoekbalk kunt u trefwoorden invoeren die verband houden met de plaatsen waarin u geïnteresseerd bent. De POI-zoekfunctie presenteert ook een handige lijst gesorteerd op [categorie](#poi-search-by-categories) om u te helpen snel te vinden wat u zoekt, en met het [filter](#save-new-custom-filters) kunt u specifieke POI-kenmerken selecteren om alleen relevante resultaten weer te geven.

[Aangepast zoeken](#customize-poi-search) verbetert de zoekfunctionaliteit door meerdere categorie- en subcategoriekeuzes toe te staan. U kunt gemaakte filters opslaan voor toekomstig gebruik, waardoor het gemakkelijker wordt om snel POI's te vinden die aan specifieke criteria of voorkeuren voldoen. Raadpleeg voor meer details de sectie over het opslaan van aangepaste filters [hier](#save-new-custom-filters).

OsmAnd biedt verschillende manieren om naar de zoekfunctie te gaan waar de sectie **Zoeken op categorieën** zich bevindt.

- De [Zoekknop](../widgets/map-buttons.md#search) wordt altijd op de kaart weergegeven en als u erop tikt, gaat u naar het [algemene scherm](#how-to-use) van de tool, waar u het tabblad *Categorieën* kunt vinden.
- Ga naar het hoofdmenu *Menu → Zoeken → Categorieën tabblad*.
- Wanneer u een route voorbereidt, tikt u op [*Navigatie → Bestemming instellen → Zoekveld → Categorieën tabblad*](../navigation/setup/route-navigation.md#set-target-point).
- Ga naar het hoofdmenu [*Menu → Kaart configureren → POI-overlay → Zoeken*](../map/point-layers-on-map.md#points-of-interest-pois).


## Hoe te gebruiken {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI zoeken Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![POI zoeken iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

*Alle POI-types in OsmAnd kunt u hier vinden:* [github-link](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).

- **Point of Interest (POI) zoeken op type en naam**:
    - Hiermee kunt u zoeken:
       - Naar nabijgelegen points of interest (POI) of specifieke categorieën van POI.
       - Naar [OSM-routes](../map/routes.md) op naam en op referentienummer.
       - Naar [Populaire plaatsen (Wikipedia)](../map/map-context-menu.md#details).
    - Filters en het sorteren van resultaten op categorie, afstand of beoordeling zijn mogelijk.
    
- **POI's zoeken op de kaart** - Toon op kaart:
    1. U kunt de vereiste categorieën selecteren uit de [**lijst**](../map/point-layers-on-map.md#points-of-interest-pois) in *Kaart configureren → Toon POI-overlay...* en zoeken op pictogrammen op de verwachte locatie.
    2. U kunt eerst een zoekopdracht invoeren of beginnen met het zoeken naar POI's in *Menu → Zoeken → Categorieën* en vervolgens op **Toon op kaart** klikken.

- **Merk zoeken**:
    - Het zoeken naar een bedrijfslocatie op merknaam (zoals Audi, Starbucks of Aldi) is zeer vergelijkbaar met het zoeken naar verschillende POI's op type. Het belangrijkste verschil is dat de merkenlijst in de kaart wordt aangeboden en bij elke update kan veranderen.
    - Merk wordt gedefinieerd door de OSM-tag [***brand*** *name*](https://wiki.openstreetmap.org/wiki/Key:brand) en OsmAnd verzamelt een beperkt aantal merken per kaart met een maximum van 1000 merken per kaart, maar zorgt er wel voor dat de lijst met merken is afgestemd op de naburige kaarten.

![POI zoeken Android](@site/static/img/search/brand_search_andr.png)


:::note
Om sommige van deze taken uit te voeren (adressen, POI's lokaliseren) heeft u het offline vectorkaartbestand nodig. In eerste instantie is de zoekopdracht gebaseerd op gegevens die zich op de kaart in het zichtbare gebied van het apparaatscherm bevinden. Als u niets vindt, stelt OsmAnd voor om de zoekradius te vergroten.
:::  


## POI zoeken op categorieën {#poi-search-by-categories}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI zoeken Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI zoeken iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

Met de tool **Zoeken op categorieën** kunt u snel objecten, plaatsen en routes vinden die in verschillende categorieën zijn ingedeeld. Elke categorie heeft een unieke set kenmerken, en deze tool heeft filters waarmee u de zoekresultaten kunt verfijnen door verschillende waarden voor extra kenmerken te selecteren.

Hoe het werkt:

- *Categorie selectie* - U selecteert de categorie waarin u geïnteresseerd bent, zoals restaurants, hotels, winkels, OSM-routes, populaire Wikipedia-plaatsen en andere, uit een voorgestelde lijst met categorieën.
- *Kenmerkfilters* - Na het selecteren van een categorie toont de applicatie extra kenmerken die kunnen worden gebruikt om de zoekopdracht te verfijnen. Voor de categorie Restaurants kunt u bijvoorbeeld filters selecteren zoals type keuken (Italiaans, Chinees, enz.), prijsklasse, beoordeling en beschikbaarheid van parkeergelegenheid.
- *Filters toepassen* - U selecteert de vereiste waarden in de filters, en vervolgens past de applicatie deze filters toe op de zoekresultaten om alleen die eigenschappen te tonen die overeenkomen met de opgegeven kenmerken.
- *Resultaten weergeven* - Na het toepassen van filters toont OsmAnd een lijst met beknopte informatie die overeenkomt met de ingestelde categorie en kenmerken.

Voordelen:

- *Gebruikersaanpassing* - Met functiefilters kunt u zoekopdrachten aanpassen aan uw specifieke behoeften en voorkeuren.
- *Verfijnde resultaten* - Filters helpen de zoekresultaten te verfijnen, waardoor ze relevanter en nauwkeuriger worden.
- *Meerdere categorieën* - De OpenStreetMap-database heeft een uitgebreide set POI-categorieën, waarmee u sites van verschillende typen en categorieën kunt vinden.

<!--
POI category search allows you to quickly find and select places of interest based on your needs. It is a handy tool for traveling, finding nearby services or places of interest, and planning routes based on selected POI categories.  

OsmAnd starts to find names and categories of POI by entered words. First results will be categories, second resolts will be POI with additional info, full name, categorie name, direction and distance to POI, work time. Pressing to needed categorie opens POI list of this categorie. 

Tapping to chosen POI in the list opens [Map Context menu](../map/map-context-menu.md#select-an-object-single-tap) of POI.   
-->

### Soorten filters {#types-of-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI zoeken Android](@site/static/img/search/search_poi_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI zoeken iOS](@site/static/img/search/search_poi_filter_ios.png)

</TabItem>

</Tabs>

Met de **Filter**-functie kunt u de nodige kenmerken selecteren en als resultaat een lijst krijgen met alleen relevante objecten. Om het filter te gebruiken:

- Selecteer de categorie waarin u geïnteresseerd bent uit de categorielijst.
- Op het scherm dat wordt geopend, tikt u op het pictogram dat het filter weergeeft. Het bevindt zich onder het invoerveld, naast *Toon op de kaart*.
- Selecteer in het filter het type kenmerken.

![POI zoeken Android](@site/static/img/search/search_poi_filter_icon_andr.png)  

Een filter kan uit een groot aantal items bestaan, waarvan de aanwezigheid afhangt van de geselecteerde categorie. Elke categorie heeft een aantal specifieke filters, georganiseerd in mappen per type. Er zijn in totaal *22 standaardcategorieën*. Enkele daarvan worden hier vermeld:

 1. **<Translate android="true" ids="poi_filter_accomodation"/>**. [Accommodatie](https://wiki.openstreetmap.org/wiki/Key:building#Accommodation) omvat faciliteiten die tijdelijke huisvesting bieden, zoals hotels, motels, hostels, pensions en campings. Deze plaatsen bieden voorzieningen en diensten voor een comfortabel verblijf tijdens het reizen.
        Bevat *9* soorten filters: **Koelkast** (heeft *2* waarden), **Verwarming** (heeft *7* waarden), **Type internettoegang** (heeft *3* waarden), **Matras** (heeft *2* waarden), **Betaalmethode** (meer dan *10* waarden), **Douche** (heeft *1* waarde), **Roken** (heeft *6* waarden), **Sterrenclassificatie** (heeft *10* waarden), **Rolstoeltoegankelijkheid** (heeft *4* waarden), Nu open / 24/7 open.

 2. **Café en restaurant**. [Café](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcafe) en [restaurants](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant) vertegenwoordigen eetgelegenheden.
        Bevat *16* soorten filters: **Verschoningstafel** (heeft *3* waarden), **Koffie** (heeft *2* waarden), **Keuken** (meer dan *10* waarden), **Bezorging** (heeft *1* waarde), **Dieet** (heeft *8* waarden), **Gerecht** (meer dan *10* waarden), **Drinkwater bijvullen** (heeft *1* waarde), **Drive-in** (heeft *1* waarden), **Type internettoegang** (heeft *3* waarden), **Microbrouwerij** (heeft *1* waarde), **Biologische producten** (heeft *2* waarden), **Buitenzitplaatsen** (heeft *1* waarde), **Betaalmethode** (meer dan *10* waarden), **Roken** (heeft *6* waarden), **Afhalen** (heeft *1* waarde), **Rolstoeltoegankelijkheid** (heeft *4* waarden), Nu open / 24/7 open.

 3. **Laadstation**. Een [laadstation](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcharging_station) is een infrastructuurfaciliteit waar eigenaren van elektrische voertuigen hun auto's, motorfietsen of andere elektrische voertuigen kunnen opladen. Deze punten bieden laders en geschikte aansluitingen om energie te leveren aan de accu's van voertuigen.
        Bevat *35* soorten filters: **Toegang voor fietsen** (heeft *1* waarde), **Toegang voor bussen** (heeft *1* waarde), **Toegang voor vrachtwagens** (heeft *5* waarden), **Toegang voor auto's** (heeft *1* waarde), **Toegang voor scooters** (heeft *1* waarde), **Authenticatie via app** (heeft *1* waarde), **Authenticatie via chipkaart** (heeft *1* waarde), **Contactloze authenticatie** (heeft *1* waarde), **Authenticatie via sleutel** (heeft *1* waarde), **Authenticatie vereist** (heeft *1* waarde), **Authenticatie via telefoongesprek** (heeft *1* waarde), **Authenticatie via sms** (heeft *1* waarde), **Kosten** (heeft *2* waarden), **Type internettoegang** (heeft *3* waarden), **Type internettoegang** (heeft *3* waarden), **Rolstoeltoegankelijkheid** (heeft *4* waarden), Nu open / 24/7 open, en andere.

 4. **Buurtwinkel en supermarkt**. [Buurtwinkel](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dconvenience) en [supermarkt](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dsupermarket) vertegenwoordigen detailhandelsfaciliteiten.
        Bevat *13* soorten filters: **Bulkaankoop** (heeft *2* waarden), **Geldopname** (heeft *5* waarden), **Verschoningstafel** (heeft *3* waarden), **Koffie** (heeft *2* waarden), **Bezorging** (heeft *1* waarde), **Dieet** (heeft *8* waarden), **IJs** (heeft *1* waarde), **Biologische producten** (heeft *2* waarden), **Betaalmethode** (meer dan *10* waarden), **Tweedehandsfilter** (heeft *2* waarden), **Zelfscankassa** (heeft *2* waarden), **Rolstoeltoegankelijkheid** (heeft *4* waarden), Nu open / 24/7 open.

 5. **<Translate android="true" ids="poi_filter_emergency"/>**. [Noodgeval](https://wiki.openstreetmap.org/wiki/Key:emergency) omvat faciliteiten en locaties die verband houden met nooddiensten zoals ziekenhuizen, politiebureaus, brandweerkazernes en medische eerstehulpcentra.
        Bevat geen filters.

 6. **Tankstation**. Een [tankstation](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfuel), ook bekend als een benzinestation, tankstation, benzinepomp en garage. Het is een detailhandelsfaciliteit waar motorvoertuigen kunnen worden bijgetankt.
        Bevat *13* soorten filters: **Autowasstraat** (heeft *2* waarden), **Geldopname** (heeft *5* waarden), **Perslucht** (heeft *1* waarden), **Brandstoftype (luchtvaart)** (heeft meer dan *20* waarden), **Tankpassen** (heeft *5* waarden), **Betaalmethode** (heeft meer dan *20* waarden), **Zelfscankassa** (heeft *2* waarden), **Toegang voor sneeuwscooters** (heeft *3* waarden), **Rustruimte** (meer dan *1* waarden), **Stofzuiger** (heeft *1* waarden), **Automatische brandstofpomp** (heeft *1* waarden), **Rolstoeltoegankelijkheid** (heeft *4* waarden), Nu open / 24/7 open.

 7. **Financiën**. [Financiën](https://wiki.openstreetmap.org/wiki/Tag:office%3Dfinancial) wordt gebruikt voor kantoren van bedrijven in de financiële sector.
        Bevat *5* soorten filters.

 8. **Eten**. [Eten](https://wiki.openstreetmap.org/wiki/Category:Food_and_beverages) omvat alle plaatsen die eten en drinken leveren.
        Bevat *24* soorten filters.

 9. **Gezondheidszorg**. [Gezondheidszorg](https://wiki.openstreetmap.org/wiki/Healthcare) omvat diensten die worden verleend door verschillende professionals in verschillende soorten faciliteiten.
        Bevat *13* soorten filters.

 10. **Vrije tijd**. [Vrije tijd](https://wiki.openstreetmap.org/wiki/Category:Leisure) omvat verschillende soorten plaatsen en faciliteiten voor entertainment.
        Bevat *15* soorten filters.

 11. **Nautisch**. Omvat POI's gerelateerd aan nautische types.
        Bevat geen filters.

 12. **<Translate android="true" ids="poi_filter_closest_poi"/>**. Omvat POI's die dicht bij u in de buurt zijn.
        Bevat *216* soorten filters.

 13. **<Translate android="true" ids="poi_filter_parking"/>**. [Parkeren](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking) omvat faciliteiten die door het publiek, klanten of andere geautoriseerde gebruikers worden gebruikt om voertuigen zoals auto's en vrachtwagens te parkeren, algemeen bekend als een parkeerplaats (Brits Engels) of parkeerplaats (Amerikaans Engels).
        Bevat *34* soorten filters.

 14. **Persoonlijk vervoer**. Alle [soorten voertuigen](https://wiki.openstreetmap.org/wiki/Pl:Key:amenity#Transport) kunnen in uw bezit zijn.
        Bevat *38* soorten filters.

 15. **Populaire plaatsen (Wikipedia)**. Om in deze categorie te zoeken, moet u de [Wikipedia-kaart](../plugins/wikipedia.md#overview) van de regio waarin u geïnteresseerd bent downloaden.
        Bevat geen filters.

 16. **Privétoegang**.
        Bevat *6* soorten filters.

 17. **<Translate android="true" ids="poi_filter_public_transport"/>**. Het is een transportsysteem dat is ontworpen om mensen voor openbare doeleinden te vervoeren, toegankelijk voor alle inwoners en bezoekers van een stad of regio.
        Bevat *9* soorten filters.

 18. **Routes**. Omvat [OSM-routes](../map/routes.md) voor verschillende soorten activiteiten.
        Bevat *14* soorten filters: **Controlepunt**, **Fietsknooppunt**, **Wandelknooppunt**, **Routenetwerk (fietsen)**, **Routenetwerk (wandelen)**, **Routepuntcategorie**, **Luchtsporten**, **Fietsen**, **Autorijden**, **Te voet**, **Motorrijden**, **Andere routes**, **Watersporten**, **Wintersporten**.

 19. **Bezienswaardigheden**. Het is een activiteit waarbij mensen interessante plaatsen of locaties bezoeken om er vertrouwd mee te raken en te genieten van hun schoonheid, geschiedenis of betekenis.
        Bevat *8* soorten filters.

 20. **Sport**. Omvat gebieden voor sportactiviteiten.
        Bevat *11* soorten filters.

 21. **Winkel**. [Winkel](https://wiki.openstreetmap.org/wiki/Key:shop) verwijst naar een verscheidenheid aan etablissementen en bedrijven die verschillende goederen of diensten te koop aanbieden, zoals supermarkten, kledingwinkels, elektronicawinkels en andere.
        Bevat *36* soorten filters.

 22. **Toerisme**. [Toerisme](https://wiki.openstreetmap.org/wiki/Key:tourism) omvat plaatsen en dingen die van specifiek belang zijn voor toeristen, inclusief plaatsen om te zien, plaatsen om te verblijven, en dingen en plaatsen die informatie en ondersteuning bieden aan toeristen.
        Bevat *32* soorten filters.

 23. **Water**. Bronnen van [drinkwater](https://wiki.openstreetmap.org/wiki/Key:drinking_water) die door de mens zijn gecreëerd of aangelegd.
        Bevat geen filters.


### Categorieën herschikken {#rearrange-categories}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI zoeken Android](@site/static/img/search/search_poi_rearrange_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI zoeken iOS](@site/static/img/search/search_poi_rearrange_ios.png)

</TabItem>

</Tabs>

Met de functie Categorieën herschikken kunt u alleen de categorieën weergeven die u nodig heeft en ze rangschikken in de volgorde die voor u het meest comfortabel is om te gebruiken.

Beschrijving en hoe te gebruiken:

- In eerste instantie wordt *de lijst alfabetisch gesorteerd.* Gemaakte categorieën worden ook in alfabetische volgorde toegevoegd.
- Wijzigingen in de lijst met categorieën worden voor elk profiel afzonderlijk gemaakt.
- Verplaats categorieën door ze naar de juiste positie in de lijst te slepen.
- *Om* onnodige categorieën *te verbergen*, tikt u op het **min**-pictogram.
- **Beschikbaar**. Eerder *Verborgen* categorieën kunnen worden teruggezet naar de weergegeven lijst door op het **plus**-pictogram te tikken.
- Gebruik de knop **Resetten** naar standaard om de lijst terug te zetten naar de vooraf ingestelde staat.
- Categorieën die zijn gemaakt met [Aangepast zoeken](#customize-poi-search) of [Filters](#save-new-custom-filters) kunnen worden verwijderd met het **Verwijder**-pictogram.

![POI zoeken Android](@site/static/img/search/search_poi_rearrange_del_andr.png)  


### Online zoeken {#online-search}

<InfoAndroidOnly />

![POI zoeken Android](@site/static/img/search/search_online_2_andr.png)  

**Online zoeken** maakt het mogelijk om locaties, adressen en points of interest in realtime te vinden. OsmAnd gebruikt [Nominatim](https://nominatim.openstreetmap.org/ui/search.html), een online geocoder ontwikkeld door OpenStreetMap die tekstquery's van gebruikers vertaalt naar geografische coördinaten en terug.

Online zoeken omvat de volgende functies:

1. **Zoeken op locatie** - U kunt de naam van een stad, straat, wijk of andere locatie invoeren en OsmAnd zal resultaten geven die overeenkomen met de zoekopdracht.
2. **Geocodering** - Online zoeken zet uw tekstquery's om in geografische coördinaten, wat een precieze locatiebepaling mogelijk maakt.
3. **Omgekeerde geocodering** - U kunt geografische coördinaten invoeren en de zoekfunctie zal de overeenkomstige locatie retourneren als een stadsnaam, straatnaam of plaats op de kaart.
4. **Zoeken op Points of Interest** - Hiermee kunt u zoeken naar verschillende punten op naam of categorie.

Gebruik van Online zoeken:

- Online zoeken zorgt ervoor dat gegevens up-to-date zijn en updates beschikbaar zijn, aangezien de service voortdurend wordt bijgewerkt en open databronnen gebruikt.
- Het biedt een brede dekking van plaatsen en objecten, waardoor u interessante plaatsen in verschillende regio's van de wereld kunt vinden.
- Online zoekopdrachten zijn in realtime, wat snelle toegang tot zoekresultaten biedt.
- Handig in steden en op snelwegen met een goede internetdekking.
- Online zoeken is handig om te gebruiken als er geen kaarten van de regio zijn en als het onmogelijk is om ze te downloaden.
- *Vereist een constante en stabiele internetverbinding.*

![POI zoeken Android](@site/static/img/search/search_poi_online_increase2_andr.png)  

Om de resultaten te verbeteren, zoomt u in op de kaart voordat u de zoekfunctie gebruikt om dichter bij de plaats te komen waar u een specifieke locatie moet vinden. En tijdens het zoeken kunt u **de zoekradius vergroten** om plaatsen te vinden die verder van uw locatie verwijderd zijn. Bij offline zoeken, als de vereiste resultaten niet beschikbaar zijn, stelt OsmAnd voor om de online zoekfunctie te gebruiken.

U kunt informatie over Online Navigatie vinden in het artikel [Online routering](../navigation/routing/online-routing.md).



## POI-zoekopdracht aanpassen {#customize-poi-search}

Aanpassing van POI-zoekopdrachten is een geavanceerde zoekfunctie waarmee u POI's uit verschillende categorieën kunt vinden en combineren voor een nauwkeurigere en persoonlijkere zoekopdracht. In tegenstelling tot de standaard POI-zoekopdracht, die beperkt is tot enkele vooraf gedefinieerde categorieën, biedt de aangepaste POI-zoekopdracht de flexibiliteit om verschillende soorten POI's te selecteren en te combineren.

U kunt bijvoorbeeld tegelijkertijd naar restaurants en apotheken zoeken om de dichtstbijzijnde eetgelegenheid te vinden en vervolgens uw medicijnen te halen. Of zoek naar het dichtstbijzijnde tankstation en autoservice als u een probleem met uw auto heeft.

Deze functionaliteit is vooral handig in verschillende gevallen:

- *Reizen*. Tijdens het reizen kunt u met aangepast zoeken snel verschillende interessante plaatsen vinden en deze combineren om een optimale route te creëren.
- *Noodgevallen*. Als u snel meerdere soorten diensten moet vinden, kunt u een aangepaste POI-zoekopdracht gebruiken om alle benodigde informatie te krijgen.
- *Zoeken naar nabijgelegen diensten*. Met Aangepast zoeken kunt u verschillende POI-categorieën combineren voor een eenvoudige zoekopdracht als u meerdere soorten diensten in een bepaalde buurt of op een bepaald deel van de route moet vinden.

### Aangepast POI-filter {#custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aangepast zoeken Android](@site/static/img/search/search_custom_filter_andr.png)   ![Aangepast zoeken Android](@site/static/img/search/search_custom_filter_second_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!--
![Custom POI iOS](@site/static/img/search/custom_poi_ios.png)   ![Custom POI types iOS](@site/static/img/search/custom_poi_types_ios.png)
-->

![Aangepaste POI iOS](@site/static/img/search/custom_poi_filter_1_ios.png)   ![Aangepaste POI-types iOS](@site/static/img/search/custom_poi_filter_2_ios.png)

</TabItem>

</Tabs>  

*Aangepast POI-filter* omvat sets van voorzieningencategorieën die bestaan uit relevante waarden. Met OsmAnd kunt u de vereiste POI-types uit een of meer voorgestelde categorieën verzamelen en combineren.

Om aangepaste filters te maken voor het vinden van plaatsen op de kaart, selecteert u relevante categorieën en subcategorieën die u interesseren. U kunt deze filters [opslaan](#save-new-custom-filters) voor later gebruik of ze indien nodig [bewerken](#edit-an-existing-filter). Als alternatief kunt u de gefilterde gegevens bekijken zonder op te slaan door op de knop *Toon* te tikken. Houd er echter rekening mee dat als u de filters niet opslaat, alle selecties worden geannuleerd zodra u van zoekopdracht wisselt of de zoekfunctie verlaat.

- Elke voorzieningencategorie bevat een lijst met beschikbare generieke waarden voor POI-types.
- U heeft de mogelijkheid om ze afzonderlijk te selecteren of deselecteren door op het veld van het type waarin u geïnteresseerd bent te tikken.
- *Alles selecteren* - Selecteer hiervoor de schakelknop.
- Verfijn de lijst door onnodige items uit te sluiten - Begin met het typen van de voorgestelde naam in het veld *Zoeken naar POI-types*.

### Categorieën en hun filters {#categories-and-their-filters}

1. **<Translate android="true" ids="amenity_type_administrative"/>**. Bevat 25 types: *Volkstuinen, Atol, Stadsdeel, Stad, Stadsblok, Land, Gerechtsgebouw, Douane, Diplomatiek kantoor, Boerderij, Overheid, Gehucht, Eiland, Eilandje, Geïsoleerde woning, Plaats, Wijk, Politie, Gevangenis, Kwartier, Woonwijk, Voorstad, Stad, Stadhuis, Dorp*.

2. **Kerstmis**. Bevat 5 soorten filters:
    *Kerstevenement, Kerstmarkt, Kerstpiramide, Kerstwinkel, Kerstboom*.

3. **<Translate android="true" ids="amenity_type_education"/>**. Bevat 16 types: *Volkstuinen, Atol, Stadsdeel, Stad, Stadsblok, Land, Gerechtsgebouw, Douane, Diplomatiek kantoor, Boerderij, Overheid, Gehucht, Eiland, Eilandje, Geïsoleerde woning, Plaats, Wijk, Politie, Gevangenis, Kwartier, Woonwijk, Voorstad, Stad, Stadhuis, Dorp*.

4. **<Translate android="true" ids="amenity_type_emergency"/>**. Bevat 14 soorten filters.

5. **Noodinfrastructuur**. Bevat 12 soorten filters.

6. **<Translate android="true" ids="amenity_type_finance"/>**. Bevat 12 soorten filters.

7. **Eten**. Bevat 12 soorten filters.

8. **Gevaar**. Bevat 5 types: *Lawinegevaar, Erosiegevaar, Overstromingsgevaar, Nucleair gevaar, Gladde weg*.

9. **<Translate android="true" ids="amenity_type_healthcare"/>**. Bevat 31 soorten filters.

10. **<Translate android="true" ids="amenity_type_leisure"/>**. Bevat 148 soorten filters.

11. **<Translate android="true" ids="amenity_type_man_made"/>**. Bevat 121 soorten filters.

12. **<Translate android="true" ids="amenity_type_military"/>**. Bevat 7 types: *Gevarenzone, Militaire bunker, Militaire marinebasis, Militair kantoor, Militair oefenterrein, Militaire zone, Locatie van nucleaire explosie*.

13. **<Translate android="true" ids="amenity_type_natural"/>**. Bevat 50 soorten filters.

14. **Nautisch**. Bevat 41 soorten filters.

15. **<Translate android="true" ids="amenity_type_office"/>**. Bevat 39 soorten filters.

16. **Populaire plaatsen (Wikipedia)**. Bevat 1 type: *Wikipedia*.

17. **Privétoegang**. Bevat geen filters.

18. **Routes**. Bevat 15 soorten filters.

19. **Service**. Bevat 111 soorten filters.

20. **<Translate android="true" ids="amenity_type_sport"/>**. Bevat 119 soorten filters.

21. **Winkel**. Bevat 156 soorten filters.

22. **<Translate android="true" ids="amenity_type_tourism"/>**. Bevat 103 soorten filters.

23. **Vervoer**. Bevat 97 soorten filters.

24. **Door gebruiker gedefinieerd**. Bevat 1 type: *Door gebruiker gedefinieerde andere postcode*.

<!--
:::note since OsmAnd 5.0 for Android
Available for search:

- Religious POIs based on the `amenity=place_of_worship` tag are divided into religious-specific locations such as churches, mosques, or synagogues.
- Minor amenities such as “bench”, "youth bench" (`amenity=bench`) are available in the category list.
:::
-->

### Nieuwe aangepaste filters opslaan {#save-new-custom-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Aangepaste POI opslaan Android](@site/static/img/search/custom_poi_save_android.png) ![Aangepaste POI opslaan Android](@site/static/img/search/custom_poi_save_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aangepaste POI opslaan iOS](@site/static/img/search/custom_poi_save_2_ios.png)

</TabItem>

</Tabs>

Om een aangepast filter **op te slaan**, selecteert u filtertypes en vervolgens:

- Tik op de knop *Toon* en selecteer de knop *Opslaan* voor iOS of de knop met het *pictogram dat de opslagactie aangeeft* voor Android.
- Voer een naam in voor de nieuwe categorie.
- Uw filter verschijnt in de lijst van het *tabblad Categorieën* in de zoekfunctie.

Een andere manier om **op te slaan**:

- Selecteer *[categorie](#poi-search-by-categories) → [filterpictogram](#types-of-filters) →* selecteer *types* kenmerken *→ driepuntsmenu → Filter opslaan*.


### Een bestaand filter bewerken {#edit-an-existing-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aangepaste POI verwijderen Android](@site/static/img/search/custom_poi_delete_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aangepaste POI verwijderen iOS](@site/static/img/search/custom_poi_delete_4_ios.png)

</TabItem>

</Tabs>

Vanaf het hoofdscherm:

- Tik op de knop *Vergrootglas* in de linkerbovenhoek van het apparaatscherm om het *Zoekmenu* te openen.
- Selecteer het tabblad *Categorieën*.
- Selecteer een opgeslagen aangepaste categorie en het scherm met zoekresultaten verschijnt.
- Tik op het *Filter*-pictogram naast *Toon op kaart* om het *Filters*-scherm te openen.
- Tik op het *driepuntsmenu*.
- Selecteer in het vervolgkeuzemenu **Filter bewerken**.
- Om een aangepaste POI-zoekopdracht na het bewerken op te slaan:
    - Selecteer POI-categorieën en filtertypes ervoor *→* tik op *Toon → driepuntsmenu → Opslaan als →* voer een nieuwe filternaam in of *sla* wijzigingen op in de huidige.


### Aangepast POI-filter verwijderen {#delete-custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aangepaste POI verwijderen Android](@site/static/img/search/custom_poi_delete_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aangepaste POI verwijderen iOS](@site/static/img/search/custom_poi_delete_2_ios.png)

</TabItem>

</Tabs>

U kunt alleen categorieën verwijderen die zijn gemaakt met filters of aangepast zoeken.

- Ga naar het tabblad [Categorieën](#poi-search-by-categories) en selecteer de gewenste categorie.
- Tik in het veld naast *Toon op kaart* op het pictogram dat het *filter* voorstelt.
- Tik in het *Filters*-menu op het *driepuntsmenu* ( &#8285; ) in de rechterbovenhoek van het scherm.
- Selecteer **Filter verwijderen**.
- ***U kunt het verwijderen niet ongedaan maken.***


### Aangepaste categorieën verwijderen (iOS) {#delete-custom-categories-ios}

![Aangepaste POI verwijderen iOS](@site/static/img/search/custom_poi_delete_3_ios.png)  

Een extra optie alleen voor de iOS-app is **Aangepaste categorieën verwijderen**.

- Dit item staat aan het einde van de lijst van het tabblad *Categorieën*.
- Selecteer de onnodige categorieën één voor één of *Selecteer alles*.
- Tik op de knop **Verwijderen**.


## Gerelateerde artikelen {#related-articles}

- [Alles zoeken](./search-all.md)
- [Adres zoeken](./search-address.md)
- [Zoekgeschiedenis](./search-history.md)
- [Coördinaten zoeken](./search-coordinates.md)