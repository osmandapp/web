---
source-hash: 7371416328fd739b31ec178647a97d46782b548fb574f29facc0559cdd279011
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

De zoekbalk stelt u in staat om trefwoorden in te voeren die gerelateerd zijn aan de plaatsen waarin u geïnteresseerd bent. De POI-zoekfunctie presenteert ook een handige lijst gesorteerd op [categorie](#poi-search-by-categories) om u snel te helpen vinden wat u zoekt, en het [filter](#save-new-custom-filters) stelt u in staat om specifieke POI-kenmerken te selecteren om alleen relevante resultaten weer te geven.

[Aangepast zoeken](#custom-poi-search) verbetert de zoekfunctionaliteit door meerdere categorie- en subcategoriekeuzes toe te staan. U kunt gemaakte filters opslaan voor toekomstig gebruik, waardoor het gemakkelijker wordt om snel POI's te vinden die voldoen aan specifieke criteria of voorkeuren. Voor meer details, raadpleeg de sectie over het opslaan van aangepaste filters [hier](#save-new-custom-filters).

OsmAnd biedt verschillende manieren om naar de zoekfunctie te gaan waar de sectie **Categorieën zoeken** zich bevindt.

- De [Zoekknop](../widgets/map-buttons.md#search) wordt altijd op de kaart weergegeven, en door erop te tikken komt u op het [algemene scherm](#how-to-use) van de tool, waar u het tabblad *Categorieën* kunt vinden.
- Ga naar het hoofd *Menu → Zoeken → tabblad Categorieën*.
- Wanneer u zich voorbereidt om een route te starten, tikt u op [*Navigatie → Bestemming instellen → Zoekveld → tabblad Categorieën*](../navigation/setup/route-navigation.md#set-target-point).
- Ga naar het hoofd [*Menu → Kaart configureren → POI-overlay → Zoeken*](../map/point-layers-on-map.md#points-of-interest-pois).


## Hoe te gebruiken {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI zoeken Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI zoeken iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

*Alle POI-typen in OsmAnd vindt u hier:* [gitHub link](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).

- **Point of Interest (POI) zoeken:**
    - Hiermee kunt u zoeken:
       - naar nabijgelegen of specifieke categorieën van interessante plaatsen (POI).
       - naar [OSM-routes](../map/routes.md).
       - naar [Populaire plaatsen (Wikipedia)](../map/map-context-menu.md#details).

    - Filteren en sorteren van resultaten op categorie, afstand of beoordeling is mogelijk.

    - Zoekresultaten tonen de locatie van de POI, contactinformatie, beoordelingen en recensies.

- **POI's zoeken op categorie direct op de kaart**:
    - U moet de vereiste categorieën selecteren uit de [**lijst**](../map/point-layers-on-map.md#points-of-interest-pois) in *Kaart configureren → POI-overlay weergeven...* en zoeken op pictogrammen op de verwachte locatie.

    - *Android*: U kunt beginnen met zoeken naar POI's in *Menu → Zoeken → Categorieën*.

- **Merk zoeken:**
    - Bij het invoeren van een bedrijfsnaam of merknaam (zoals Audi, Starbucks of Aldi), wordt de lijst met zoekresultaten met prioriteit gesorteerd op POI-naam en vervolgens op afstand van de corresponderende locatie.

    - De naam van de plaats wordt naast elk zoekresultaat weergegeven om u te helpen de juiste locatie te identificeren tussen andere op een vergelijkbare afstand van u.

    - Dit type zoekopdracht is handig om te gebruiken als een verkooppunt gespecialiseerd is in het verkopen van goederen of diensten van één merk of als het merk zelf bekender en herkenbaarder is dan de naam of categorie van de POI.

    - Om een zoekopdracht uit te voeren, moeten de tag `brand` en merknamen worden toegevoegd aan de POI-beschrijving.

    - Voorbeeld van een autowinkel: *POI-type* - Autodealer, *naam* - Octo Automobile, [***merk*** *naam*](https://wiki.openstreetmap.org/wiki/Key:brand) - Audi, BMW, Fiat, Jaguar, Land Rover.

    ![POI zoeken Android](@site/static/img/search/brand_search_andr.png)


:::note
Om sommige van deze taken (adressen, POI's lokaliseren) uit te voeren, hebt u het offline vectorkaartbestand nodig. Aanvankelijk is de zoekopdracht gebaseerd op gegevens die zich op de kaart bevinden in het zichtbare gebied van het apparaatscherm. Als u niets vindt, stelt OsmAnd voor om de zoekradius te vergroten.
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

De tool **Zoeken op categorieën** stelt u in staat om snel objecten, plaatsen en routes te vinden die in verschillende categorieën zijn ingedeeld. Elke categorie heeft een unieke set kenmerken, en deze tool heeft filters waarmee u de zoekresultaten kunt verfijnen door verschillende waarden voor aanvullende kenmerken te selecteren.

Hoe het werkt:

- *Categorietype* - U selecteert de categorie waarin u geïnteresseerd bent, zoals restaurants, hotels, winkels, OSM-routes, populaire Wikipedia-plaatsen en andere, uit een voorgestelde lijst met categorieën.
- *Kenmerkfilters* - Na het selecteren van een categorie toont de applicatie aanvullende kenmerken die kunnen worden gebruikt om de zoekopdracht te verfijnen. Voor de categorie Restaurants kunt u bijvoorbeeld filters selecteren zoals type keuken (Italiaans, Chinees, enz.), prijsklasse, beoordeling en beschikbaarheid van parkeergelegenheid.
- *Filters toepassen* - U selecteert de vereiste waarden in de filters, en vervolgens past de applicatie deze filters toe op de zoekresultaten om alleen die eigenschappen te tonen die overeenkomen met de opgegeven kenmerken.
- *Resultaten weergeven* - Na het toepassen van filters toont OsmAnd een lijst met korte informatie die overeenkomt met de ingestelde categorie en kenmerken.

Voordelen:

- *Gebruikersaanpassing* - Functiefilters stellen u in staat om zoekopdrachten aan te passen aan hun specifieke behoeften en voorkeuren.
- *Verfijnde resultaten* - Filters helpen zoekresultaten te verfijnen, waardoor ze relevanter en nauwkeuriger worden.
- *Meerdere categorieën* - De OpenStreetMap-database heeft een uitgebreide set POI-categorieën, waardoor u sites van verschillende typen en categorieën kunt vinden.

<!--
POI-categorie zoeken stelt u in staat om snel interessante plaatsen te vinden en te selecteren op basis van uw behoeften. Het is een handig hulpmiddel voor reizen, het vinden van nabijgelegen diensten of interessante plaatsen, en het plannen van routes op basis van geselecteerde POI-categorieën.

OsmAnd begint namen en categorieën van POI te vinden op basis van ingevoerde woorden. Eerste resultaten zijn categorieën, tweede resultaten zijn POI met aanvullende informatie, volledige naam, categorienaam, richting en afstand tot POI, werktijd. Door op de gewenste categorie te drukken, wordt de POI-lijst van deze categorie geopend.

Door op de gekozen POI in de lijst te tikken, wordt het [Kaartcontextmenu](../map/map-context-menu.md#select-an-object-single-tap) van de POI geopend.
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

Met de functie **Filter** kunt u de nodige kenmerken selecteren en als resultaat een lijst krijgen die alleen relevante objecten bevat. Om het filter te gebruiken:

- Selecteer de categorie waarin u geïnteresseerd bent uit de categorielijst.
- Tik op het scherm dat opent op het pictogram dat het filter weergeeft. Het bevindt zich onder het invoerveld, naast *Toon op de kaart*.
- Selecteer in het filter het type kenmerken.

![POI zoeken Android](@site/static/img/search/search_poi_filter_icon_andr.png)

Een filter kan uit een groot aantal items bestaan, waarvan de aanwezigheid afhankelijk is van de geselecteerde categorie. Elke categorie heeft een aantal specifieke filters, georganiseerd in mappen per type. Er zijn in totaal *22 standaardcategorieën*. Enkele daarvan worden hier vermeld:

 1. **<Translate android="true" ids="poi_filter_accomodation"/>**. [Accommodatie](https://wiki.openstreetmap.org/wiki/Key:building#Accommodation) omvat faciliteiten die tijdelijke huisvesting bieden, zoals hotels, motels, hostels, pensions en campings. Deze plaatsen bieden voorzieningen en diensten voor een comfortabel verblijf tijdens het reizen.
        Bevat *9* soorten filters: **Koelkast** (heeft *2* waarden), **Verwarming** (heeft *7* waarden), **Type internettoegang** (heeft *3* waarden), **Matras** (heeft *2* waarden), **Betaalmethode** (meer dan *10* waarden), **Douche** (heeft *1* waarde), **Roken** (heeft *6* waarden), **Sterrenclassificatie** (heeft *10* waarden), **Toegankelijkheid voor rolstoelen** (heeft *4* waarden), Nu open / 24/7 open.

 2. **Café en restaurant**. [Café](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcafe) en [restaurants](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant) vertegenwoordigen plaatsen voor voedselvoorziening.
        Bevat *16* soorten filters: **Verschoontafel** (heeft *3* waarden), **Koffie** (heeft *2* waarden), **Keuken** (meer dan *10* waarden), **Bezorging** (heeft *1* waarde), **Dieet** (heeft *8* waarden), **Gerecht** (meer dan *10* waarden), **Drinkwater bijvullen** (heeft *1* waarde), **Drive-in** (heeft *1* waarde), **Type internettoegang** (heeft *3* waarden), **Microbrouwerij** (heeft *1* waarde), **Biologische producten** (heeft *2* waarden), **Buiten zitplaatsen** (heeft *1* waarde), **Betaalmethode** (meer dan *10* waarden), **Roken** (heeft *6* waarden), **Afhaalmaaltijden** (heeft *1* waarde), **Toegankelijkheid voor rolstoelen** (heeft *4* waarden), Nu open / 24/7 open.

 3. **Laadstation**. Een [laadstation](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcharging_station) is een infrastructuurfaciliteit waar eigenaren van elektrische voertuigen hun auto's, motoren of andere elektrische voertuigen kunnen opladen. Deze punten bieden laders en geschikte aansluitingen om energie te leveren aan voertuigaccu's.
        Bevat *35* soorten filters: **Toegang voor fietsen** (heeft *1* waarde), **Toegang voor bussen** (heeft *1* waarde), **Toegang voor vrachtwagens** (heeft *5* waarden), **Toegang voor auto's** (heeft *1* waarde), **Toegang voor scooters** (heeft *1* waarde), **Authenticatie via app** (heeft *1* waarde), **Authenticatie via chipkaart** (heeft *1* waarde), **Contactloze authenticatie** (heeft *1* waarde), **Authenticatie via sleutel** (heeft *1* waarde), **Authenticatie vereist** (heeft *1* waarde), **Authenticatie via telefoongesprek** (heeft *1* waarde) **Authenticatie via sms** (heeft *1* waarde), **Kosten** (heeft *2* waarden), **Type internettoegang** (heeft *3* waarden), **Type internettoegang** (heeft *3* waarden), **Toegankelijkheid voor rolstoelen** (heeft *4* waarden), Nu open / 24/7 open, en andere.

 4. **Gemakswinkel en supermarkt**. [Gemakswinkel](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dconvenience) en [supermarkt](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dsupermarket) vertegenwoordigen detailhandelsfaciliteiten.
        Bevat *13* soorten filters: **Bulk aankoop** (heeft *2* waarden), **Geldopname** (heeft *5* waarden), **Verschoontafel** (heeft *3* waarden), **Koffie** (heeft *2* waarden), **Bezorging** (heeft *1* waarde), **Dieet** (heeft *8* waarden), **IJs** (heeft *1* waarde), **Biologische producten** (heeft *2* waarden), **Betaalmethode** (meer dan *10* waarden), **Tweedehands filter** (heeft *2* waarden), **Zelfbedieningskassa** (heeft *2* waarden), **Toegankelijkheid voor rolstoelen** (heeft *4* waarden), Nu open / 24/7 open.

 5. **<Translate android="true" ids="poi_filter_emergency"/>**. [Noodgeval](https://wiki.openstreetmap.org/wiki/Key:emergency) omvat faciliteiten en locaties die verband houden met hulpdiensten, zoals ziekenhuizen, politiebureaus, brandweerkazernes en medische centra voor eerste hulp.
        Bevat geen filters.

 6. **Tankstation**. Een [tankstation](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfuel), ook bekend als een vulstation, benzinestation, gasstation en benzinegarage. Het is de detailhandelsfaciliteit waar motorvoertuigen kunnen worden getankt.
        Bevat *13* soorten filters: **Autowasstraat** (heeft *2* waarden), **Geldopname** (heeft *5* waarden), **Perslucht** (heeft *1* waarde), **Brandstoftype (avia)** (heeft meer dan *20* waarden), **Brandstofkaarten** (heeft *5* waarden), **Betaalmethode** (heeft meer dan *20* waarden), **Zelfbedieningskassa** (heeft *2* waarden), **Toegang voor sneeuwscooters** (heeft *3* waarden), **Rustruimte** (meer dan *1* waarde), **Stofzuiger** (heeft *1* waarde), **Automatische brandstofdispenser** (heeft *1* waarde), **Toegankelijkheid voor rolstoelen** (heeft *4* waarden), Nu open / 24/7 open.

 7. **Financiën**. [Financiën](https://wiki.openstreetmap.org/wiki/Tag:office%3Dfinancial) gebruikt voor kantoren van bedrijven in de financiële sector.
        Bevat *5* soorten filters.

 8. **Voedsel**. [Voedsel](https://wiki.openstreetmap.org/wiki/Category:Food_and_beverages) omvat alle plaatsen die eten en drinken leveren.
        Bevat *24* soorten filters.

 9. **Gezondheidszorg**. [Gezondheidszorg](https://wiki.openstreetmap.org/wiki/Healthcare) omvat diensten die worden geleverd door verschillende professionals in verschillende soorten faciliteiten.
        Bevat *13* soorten filters.

 10. **Vrije tijd**. [Vrije tijd](https://wiki.openstreetmap.org/wiki/Category:Leisure) omvat verschillende soorten plaatsen en faciliteiten voor entertainment.
        Bevat *15* soorten filters.

 11. **Nautisch**. Bevat POI's gerelateerd aan nautische typen.
        Bevat geen filters.

 12. **<Translate android="true" ids="poi_filter_closest_poi"/>**. Bevat POI's die dicht bij u in de buurt zijn.
        Bevat *216* soorten filters.

 13. **<Translate android="true" ids="poi_filter_parking"/>**. [Parkeren](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking) omvat faciliteiten die worden gebruikt door het publiek, klanten of andere geautoriseerde gebruikers om voertuigen zoals auto's en vrachtwagens te parkeren, algemeen bekend als een parkeerplaats (Brits Engels) of parking lot (Amerikaans Engels).
        Bevat *34* soorten filters.

 14. **Persoonlijk vervoer**. Alle [typen voertuigen](https://wiki.openstreetmap.org/wiki/Pl:Key:amenity#Transport) kunnen in uw bezit zijn.
        Bevat *38* soorten filters.

 15. **Populaire plaatsen (Wikipedia)**. Om in deze categorie te zoeken, moet u de [Wikipedia-kaart](../plugins/wikipedia.md#overview) van de regio waarin u geïnteresseerd bent downloaden.
        Bevat geen filters.

 16. **Privétoegang**.
        Bevat *6* soorten filters.

 17. **<Translate android="true" ids="poi_filter_public_transport"/>**. Het is een transportsysteem dat is ontworpen om mensen voor openbare doeleinden te vervoeren, toegankelijk voor alle inwoners en bezoekers van een stad of regio.
        Bevat *9* soorten filters.

 18. **Routes**. Bevat [OSM-routes](../map/routes.md) voor verschillende soorten activiteiten.
        Bevat *14* soorten filters: **Controlepunt**, **Fietsnetwerkknooppunt**, **Wandelnetwerkknooppunt**, **Routenetwerk (fietsen)**, **Routenetwerk (wandelen)**, **Routepuntcategorie**, **Luchtsporten**, **Fietsen**, **Rijden**, **Voet**, **Motorrijden**, **Andere routes**, **Watersporten**, **Wintersporten**.

 19. **Bezienswaardigheden**. Het is een activiteit waarbij mensen interessante plaatsen of locaties bezoeken om zich ermee vertrouwd te maken en te genieten van hun schoonheid, geschiedenis of betekenis.
        Bevat *8* soorten filters.

 20. **Sport**. Bevat gebieden voor sportactiviteiten.
        Bevat *11* soorten filters.

 21. **Winkel**. [Winkel](https://wiki.openstreetmap.org/wiki/Key:shop) verwijst naar een verscheidenheid aan etablissementen en bedrijven die verschillende goederen of diensten te koop aanbieden, zoals supermarkten, kledingwinkels, elektronicawinkels en andere.
        Bevat *36* soorten filters.

 22. **Toerisme**. [Toerisme](https://wiki.openstreetmap.org/wiki/Key:tourism) omvat plaatsen en zaken van specifiek belang voor toeristen, waaronder plaatsen om te zien, plaatsen om te verblijven, en zaken en plaatsen die informatie en ondersteuning bieden aan toeristen.
        Bevat *32* soorten filters.

 23. **Water**. Bronnen van [drinkwater](https://wiki.openstreetmap.org/wiki/Key:drinking_water) gemaakt of aangelegd door de mens.
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

De functie Categorieën herschikken stelt u in staat om alleen de categorieën weer te geven die u nodig hebt en deze in de volgorde te plaatsen die u het prettigst vindt.

Beschrijving en hoe te gebruiken:

- Aanvankelijk is *de lijst alfabetisch gesorteerd.* Gemaakte categorieën worden ook in alfabetische volgorde toegevoegd.
- Wijzigingen in de lijst met categorieën worden voor elk profiel afzonderlijk aangebracht.
- Verplaats categorieën door ze naar de juiste positie in de lijst te slepen.
- *Om onnodige categorieën te verbergen*, tikt u op het **min**-pictogram.
- **Beschikbaar**. Eerder *verborgen* categorieën kunnen worden teruggezet naar de weergegeven lijst door op het **plus**-pictogram te tikken.
- Gebruik de knop **Terugzetten** naar standaard om de lijst terug te zetten naar de vooraf ingestelde staat.
- Categorieën die zijn gemaakt met [Aangepast zoeken](#custom-poi-search) of [Filters](#save-new-custom-filters) kunnen worden verwijderd met het **Verwijder**-pictogram.

![POI zoeken Android](@site/static/img/search/search_poi_rearrange_del_andr.png)


### Online zoeken {#online-search}

<InfoAndroidOnly />

![POI zoeken Android](@site/static/img/search/search_online_2_andr.png)

**Online zoeken** maakt het mogelijk om locaties, adressen en interessante plaatsen in realtime te vinden. OsmAnd gebruikt [Nominatim](https://nominatim.openstreetmap.org/ui/search.html), een online geocoder ontwikkeld door OpenStreetMap die tekstuele zoekopdrachten van gebruikers vertaalt naar geografische coördinaten en vice versa ([*voorbeeld*](#example-of-online-search-query)).

Online zoeken omvat de volgende functies:

1. **Zoeken op locatie** - U kunt de naam van een stad, straat, wijk of andere locatie invoeren en OsmAnd zal resultaten leveren die overeenkomen met de zoekopdracht.
2. **Geocodering** - Online zoeken converteert uw tekstuele zoekopdrachten naar geografische coördinaten, waardoor een precieze locatie mogelijk is.
3. **Reverse geocodering** - U kunt geografische coördinaten invoeren en Zoeken zal de corresponderende locatie teruggeven als een stadsnaam, straatnaam of plaats op de kaart.
4. **Zoeken op interessante plaatsen** - Hiermee kunt u verschillende punten zoeken op naam of categorie.

Gebruik van online zoeken:

- Online zoeken zorgt ervoor dat gegevens up-to-date zijn en updates beschikbaar zijn, aangezien de service constant wordt bijgewerkt en open databronnen gebruikt.
- Het biedt een brede dekking van plaatsen en objecten, waardoor u interessante plaatsen in verschillende regio's van de wereld kunt vinden.
- Online zoekopdrachten zijn realtime en bieden snelle toegang tot zoekresultaten.
- Handig in steden en op snelwegen met goede internetdekking.
- Online zoeken is handig om te gebruiken als er geen kaarten van de regio zijn en als het onmogelijk is om deze te downloaden.
- *Vereist een constante en stabiele internetverbinding.*

![POI zoeken Android](@site/static/img/search/search_poi_online_increase2_andr.png)

Om de resultaten te verbeteren, zoomt u, voordat u de zoekfunctie gebruikt, in op de kaart om dichter bij de locatie te komen waar u een specifieke plaats moet vinden. En tijdens het zoeken kunt u **de zoekradius vergroten** om plaatsen te vinden die verder van uw locatie verwijderd zijn. Bij offline zoeken, als de vereiste resultaten niet beschikbaar zijn, stelt OsmAnd voor om de online zoekfunctie te gebruiken.

U kunt informatie over online navigatie vinden in het artikel [Online routering](../navigation/routing/online-routing.md).

#### Voorbeeld van online zoekopdracht {#example-of-online-search-query}

*Nominatim* in OsmAnd wordt gebruikt als zoekmachine voor OpenStreetMap-gegevens, waarmee u op naam kunt zoeken (zoeken op adres is momenteel uitgeschakeld). Elk resultaat heeft een link naar een detailpagina om te zien welke gegevens over het object in de database zijn opgeslagen.

**Voorbeeld XML-bestand.** Dit XML-bestand bevat geen stijlsinformatie die eraan is gekoppeld. De documentboom wordt weergegeven in de [link](https://nominatim.openstreetmap.org/search?format=xml&addressdetails=0&accept-language=en&q=%D0%9C%D1%96%D0%BD%D1%81%D0%BA+%D0%BD%D0%B5%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%B0%D1%81%D1%86%D1%96+72+&addressdetails=1&limit=300).


## Aangepast POI zoeken {#custom-poi-search}

Aangepast POI zoeken is een geavanceerde zoekfunctie waarmee u POI's uit verschillende categorieën kunt vinden en combineren voor een nauwkeurigere en gepersonaliseerde zoekopdracht. In tegenstelling tot de standaard POI-zoekfunctie, die beperkt is tot enkele vooraf gedefinieerde categorieën, biedt de aangepaste POI-zoekfunctie de flexibiliteit om verschillende typen POI's te selecteren en te combineren.

U kunt bijvoorbeeld tegelijkertijd restaurants en apotheken zoeken om de dichtstbijzijnde plek te vinden om te dineren en vervolgens uw medicijnen op te halen. Of zoek naar het dichtstbijzijnde tankstation en autogarage wanneer u een probleem heeft met uw auto.

Deze functionaliteit is vooral handig in verschillende gevallen:

- *Reizen*. Tijdens het reizen kunt u met aangepast zoeken snel verschillende interessante plaatsen vinden en deze combineren om een optimale route te creëren.
- *Noodgevallen*. Als u snel verschillende soorten diensten moet vinden, kunt u een aangepaste POI-zoekopdracht gebruiken om alle benodigde informatie te krijgen.
- *Zoeken naar nabijgelegen diensten*. Met aangepast zoeken kunt u verschillende POI-categorieën combineren voor een eenvoudige zoekopdracht als u verschillende soorten diensten in een bepaalde buurt of op een bepaald deel van de route moet vinden.

### Aangepast POI-filter {#custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aangepast zoeken Android](@site/static/img/search/search_custom_filter_andr.png) ![Aangepast zoeken Android](@site/static/img/search/search_custom_filter_second_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!--
![Aangepast POI iOS](@site/static/img/search/custom_poi_ios.png) ![Aangepaste POI-typen iOS](@site/static/img/search/custom_poi_types_ios.png)
-->

![Aangepast POI iOS](@site/static/img/search/custom_poi_filter_1_ios.png) ![Aangepaste POI-typen iOS](@site/static/img/search/custom_poi_filter_2_ios.png)

</TabItem>

</Tabs>

*Aangepast POI-filter* omvat sets van voorzieningencategorieën die bestaan uit relevante waarden. OsmAnd stelt u in staat om de vereiste POI-typen uit een of meer voorgestelde categorieën te verzamelen en te combineren.

Om aangepaste filters te maken voor het vinden van plaatsen op de kaart, selecteert u relevante categorieën en subcategorieën van interesse. U kunt deze filters [opslaan](#save-new-custom-filters) voor later gebruik of ze [bewerken](#edit-an-existing-filter) indien nodig. U kunt de gefilterde gegevens ook bekijken zonder op te slaan door op de knop *Tonen* te tikken. Houd er echter rekening mee dat als u de filters niet opslaat, alle selecties worden geannuleerd zodra u van zoekopdracht wisselt of de zoekfunctie verlaat.

- Elke voorzieningencategorie bevat een lijst met beschikbare generieke waarden voor POI-typen.
- U hebt de mogelijkheid om ze afzonderlijk te selecteren of te deselecteren door op het veld van het type waarin u geïnteresseerd bent te tikken.
- *Alles selecteren* - Om dit te doen, selecteert u de schakelknop.
- Verfijn de lijst door onnodige items uit te sluiten - Begin de voorgestelde naam te typen in het veld *Zoeken naar POI-typen*.

#### Categorieën en hun filters {#categories-and-their-filters}

1. **<Translate android="true" ids="amenity_type_administrative"/>**. Bevat 25 typen: *Volkstuinen, Atol, Stadsdeel, Stad, Stadsblok, Land, Gerechtsgebouw, Douane, Diplomatiek kantoor, Boerderij, Overheid, Gehucht, Eiland, Eilandje, Geïsoleerde woning, Plaats, Buurt, Politie, Gevangenis, Wijk, Woonwijk, Voorstad, Stad, Stadhuis, Dorp*.

2. **Kerstmis**. Bevat 5 typen filters:
    *Kerstevenement, Kerstmarkt, Kerstpiramide, Kerstwinkel, Kerstboom*.

3. **<Translate android="true" ids="amenity_type_education"/>**. Bevat 16 typen: *Volkstuinen, Atol, Stadsdeel, Stad, Stadsblok, Land, Gerechtsgebouw, Douane, Diplomatiek kantoor, Boerderij, Overheid, Gehucht, Eiland, Eilandje, Geïsoleerde woning, Plaats, Buurt, Politie, Gevangenis, Wijk, Woonwijk, Voorstad, Stad, Stadhuis, Dorp*.

4. **<Translate android="true" ids="amenity_type_emergency"/>**. Bevat 14 typen filters.

5. **Noodinfrastructuur**. Bevat 12 typen filters.

6. **<Translate android="true" ids="amenity_type_finance"/>**. Bevat 12 typen filters.

7. **Voedsel**. Bevat 12 typen filters.

8. **Gevaar**. Bevat 5 typen: *Lawinegevaar, Erosiegevaar, Overstromingsgevaar, Kerngevaar, Gladde weg*.

9. **<Translate android="true" ids="amenity_type_healthcare"/>**. Bevat 31 typen filters.

10. **<Translate android="true" ids="amenity_type_leisure"/>**. Bevat 148 typen filters.

11. **<Translate android="true" ids="amenity_type_man_made"/>**. Bevat 121 typen filters.

12. **<Translate android="true" ids="amenity_type_military"/>**. Bevat 7 typen: *Gevarenzone, Militaire bunker, Militaire marinebasis, Militair kantoor, Militair oefenterrein, Militaire zone, Nucleaire explosieplaats*.

13. **<Translate android="true" ids="amenity_type_natural"/>**. Bevat 50 typen filters.

14. **Nautisch**. Bevat 41 typen filters.

15. **<Translate android="true" ids="amenity_type_office"/>**. Bevat 39 typen filters.

16. **Populaire plaatsen (Wikipedia)**. Bevat 1 type: *Wikipedia*.

17. **Privétoegang**. Bevat geen filters.

18. **Routes**. Bevat 15 typen filters.

19. **Dienst**. Bevat 111 typen filters.

20. **<Translate android="true" ids="amenity_type_sport"/>**. Bevat 119 typen filters.

21. **Winkel**. Bevat 156 typen filters.

22. **<Translate android="true" ids="amenity_type_tourism"/>**. Bevat 103 typen filters.

23. **Vervoer**. Bevat 97 typen filters.

24. **Gebruiker gedefinieerd**. Bevat 1 type: *Gebruiker gedefinieerd andere postcode*.

<!--
:::note since OsmAnd 5.0 for Android
Beschikbaar voor zoeken:

- Religieuze POI's op basis van de tag `amenity=place_of_worship` zijn onderverdeeld in religiespecifieke locaties zoals kerken, moskeeën of synagogen.
- Kleine voorzieningen zoals "bank", "jeugdbank" (`amenity=bench`) zijn beschikbaar in de categorielijst.
:::
-->

### Nieuwe aangepaste filters opslaan {#save-new-custom-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Aangepast POI opslaan Android](@site/static/img/search/custom_poi_save_android.png) ![Aangepast POI opslaan Android](@site/static/img/search/custom_poi_save_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aangepast POI opslaan iOS](@site/static/img/search/custom_poi_save_2_ios.png)

</TabItem>

</Tabs>

Om een aangepast filter **op te slaan**, selecteert u filtertypen en vervolgens:

- Tik op de knop *Tonen* en selecteer de knop *Opslaan* voor iOS of de knop met het *pictogram dat de opslagactie aangeeft* voor Android.
- Voer een naam in voor de nieuwe categorie.
- Uw filter verschijnt in de lijst van het tabblad *Categorieën* in de zoekfunctie.

Een andere manier om **op te slaan**:

- Selecteer *[categorie](#poi-search-by-categories) → [filterpictogram](#types-of-filters) →* selecteer *typen* kenmerken *→ menu met drie stippen → Filter opslaan*.


### Een bestaand filter bewerken {#edit-an-existing-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aangepast POI verwijderen Android](@site/static/img/search/custom_poi_delete_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aangepast POI verwijderen iOS](@site/static/img/search/custom_poi_delete_4_ios.png)

</TabItem>

</Tabs>

Vanaf het hoofdscherm:

- Tik op de knop *Vergrootglas* in de linkerbovenhoek van het apparaatscherm om het *Zoek*-menu te openen.
- Selecteer het tabblad *Categorieën*.
- Selecteer een opgeslagen aangepaste categorie en het zoekresultatenscherm verschijnt.
- Tik op het *Filter*-pictogram naast *Toon op kaart* om het *Filters*-scherm te openen.
- Tik op het *menu met drie stippen*.
- Selecteer in het vervolgkeuzemenu **Filter bewerken**.
- Om een aangepaste POI-zoekopdracht na bewerking op te slaan:
    - Selecteer POI-categorieën en filtertypen hiervoor *→* tik op *Tonen → menu met drie stippen → Opslaan als →* voer een nieuwe filternaam in of *sla* wijzigingen op in de huidige.


### Aangepast POI-filter verwijderen {#delete-custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aangepast POI verwijderen Android](@site/static/img/search/custom_poi_delete_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aangepast POI verwijderen iOS](@site/static/img/search/custom_poi_delete_2_ios.png)

</TabItem>

</Tabs>

U kunt alleen categorieën verwijderen die zijn gemaakt met filters of aangepast zoeken.

- Ga naar het tabblad [Categorieën](#poi-search-by-categories) en selecteer de gewenste categorie.
- Tik in het veld naast *Toon op kaart* op het pictogram dat het *filter* voorstelt.
- Tik in het *Filters*-menu op het *menu met drie stippen* ( &#8285; ) in de rechterbovenhoek van het scherm.
- Selecteer **Filter verwijderen**.
- ***U kunt het verwijderen niet ongedaan maken.***


#### Aangepaste categorieën verwijderen (iOS) {#delete-custom-categories-ios}

![Aangepast POI verwijderen iOS](@site/static/img/search/custom_poi_delete_3_ios.png)

Een extra optie alleen voor de iOS-app is **Aangepaste categorieën verwijderen**.

- Dit item staat aan het einde van de lijst van het tabblad *Categorieën*.
- Selecteer de onnodige categorieën één voor één of *Alles selecteren*.
- Tik op de knop **Verwijderen**.


## Gerelateerde artikelen {#related-articles}

- [Alles zoeken](./search-all.md)
- [Adres zoeken](./search-address.md)
- [Zoekgeschiedenis](./search-history.md)
- [Coördinaten zoeken](./search-coordinates.md)


> *Laatst bijgewerkt: mei 2025*