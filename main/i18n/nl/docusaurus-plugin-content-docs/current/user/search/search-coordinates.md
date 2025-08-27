---
source-hash: 72c443553f19a954e1e225c0a8053d174db652de6cd02e9719c8c87174e281ad
sidebar_position: 6
title: Coördinaten zoeken
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

Met de **OsmAnd Coördinatenzoekfunctie** kunt u een specifieke locatie vinden op basis van breedtegraad en lengtegraad. Dit type zoekopdracht helpt om een locatie nauwkeurig te identificeren. Het is vooral handig voor gebieden die geen precieze adressen hebben, of voor specifieke geografische taken zoals het maken van geo-fences of precieze positionering in de open ruimte.

OsmAnd biedt verschillende manieren om naar de *Zoekfunctie → [Adreszoektabblad](../search/search-address.md)* te gaan, waar de **Coördinatenzoekfunctie** zich bevindt.

- De [Zoekknop](../widgets/map-buttons.md#search) op het scherm van de kaartapplicatie.
- Ga naar het hoofd Android *Menu → Zoeken → Adres tabblad → Coördinaten zoeken*.
- Wanneer u zich voorbereidt om een route te starten, tikt u op *Navigatie → Bestemming instellen → Zoekveld → Adres tabblad → Coördinaten zoeken*.


## Hoe te gebruiken {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Coördinaten zoeken Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Coördinaten zoeken iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Coördinaten kunnen in elk beschikbaar formaat worden ingevoerd, maar de gevonden locatie wordt weergegeven in het formaat dat is opgegeven in *Profiel configureren → Algemene instellingen → Eenheden & formaten*.

- Om de coördinatenzoekfunctie te gebruiken, kunt u ze afzonderlijk in elk corresponderend veld typen, of eerder gekopieerde coördinaten in het zoekveld plakken of erin invoeren. De applicatie vraagt u om een geschikte locatie te selecteren.
- Coördinaten zoeken converteert automatisch het ene coördinatenformaat naar het andere wanneer het opgegeven formaat wordt gewijzigd in het veld met hun lijst.
- Tik op de voorgestelde locatie en het [kaartcontextmenu](../map/map-context-menu.md#select-any-point-long-tap) wordt geopend.
- Meer informatie vindt u hier [Geografische coördinaten](https://nl.wikipedia.org/wiki/Geografische_co%C3%B6rdinaten).


**Bereik van de coördinatenzoekfunctie**:

- *Precieze locatie*. Coördinaten zoeken biedt een nauwkeurige locatie. U kunt precieze coördinaten invoeren die bijvoorbeeld zijn verkregen uit andere bronnen zoals een kaart, GPS-apparaat of online services.
- *Plaatsen zonder adres*. Coördinaten zijn bijzonder nuttig als het gaat om plaatsen die geen exact adres hebben, of wanneer het adres onbekend is. Het kan bijvoorbeeld een afgelegen gebied zijn, een punt op zee, of een bergtop. Door coördinaten in te voeren, kunt u dergelijke locaties vinden en ernaartoe navigeren zonder het adres te hoeven weten.
- *Locatie delen*. Zoeken op coördinaten biedt een handige manier om informatie in te voeren. U kunt coördinaten handmatig invoeren of kopiëren uit andere bronnen. Dit kan handig zijn bij het delen van locaties met anderen of het gebruiken van eerder verkregen coördinaten.


## Coördinaatformaat {#coordinate-format}

Er zijn verschillende manieren om coördinaten in te voeren voor de zoekopdracht. Om elk van deze te gebruiken, is het erg belangrijk om de invoerregels te volgen, anders kan de applicatie de locatie niet vinden.

1. **<Translate android="true" ids="navigate_point_format_D"/>**

    ![Coördinaten zoeken Android](@site/static/img/search/coordinates_search_degrees_andr.png)

    **Decimale coördinaten (graden)**. In dit formaat worden breedtegraad- en lengtegraadcoördinaten in decimaal formaat geschreven, bijvoorbeeld 52.37022° breedtegraad en 4.89517° lengtegraad voor Amsterdam. Deze invoermethode is eenvoudig te gebruiken en is de meest voorkomende. U kunt meer lezen over het decimale coördinatenformaat [hier](https://nl.wikipedia.org/wiki/Decimale_graden).

    - *Invoerregels*. Breedtegraad- en lengtegraadcoördinaten worden in decimaal formaat geschreven, waarbij de breedtegraad varieert van -90 tot 90 en de lengtegraad van -180 tot 180.
    - *Meest gebruikt*. Decimale coördinaten worden veel gebruikt in navigatietoepassingen, GPS-apparaten, webkaarten en andere geo-positioneringsdiensten.

2. **<Translate android="true" ids="navigate_point_format_DM"/>**

    ![Coördinaten zoeken Android](@site/static/img/search/coordinates_search_DM_andr.png)

    **Graden en Minuten (DM)**. In dit formaat worden breedtegraad- en lengtegraadcoördinaten vastgelegd met behulp van graden en minuten. Bijvoorbeeld 37:46.29 breedtegraad en -122:25.10 lengtegraad voor San Francisco. Dit formaat kan minder nauwkeurig zijn en kan langer duren om in te voeren.
    - *Invoerregels*. Breedtegraad- en lengtegraadcoördinaten worden geschreven in een formaat dat graden (:) en minuten (:) gebruikt.
    - *Meest gebruikt*. Het DM-formaat wordt vaak gevonden in maritieme navigatie, luchtvaart, astronomie en topografische karteringssystemen.

3. **<Translate android="true" ids="navigate_point_format_DMS"/>**

    ![Coördinaten zoeken Android](@site/static/img/search/coordinates_search_DMS_andr.png)

    **Graden, Minuten en Seconden (DMS)**. Het DMS-coördinaatformaat registreert geografische coördinaten waarbij waarden worden gegeven in graden, minuten en seconden. Graden (DDD) kunnen waarden aannemen van 0 tot 180 voor lengtegraad en 0 tot 90 voor breedtegraad. Positieve waarden geven oostelijke lengtegraad en noordelijke breedtegraad aan, en negatieve waarden geven westelijke lengtegraad en zuidelijke breedtegraad aan. Minuten (MM) kunnen waarden aannemen van 0 tot 59. Seconden (SS.S) vertegenwoordigen de decimale fractie van een seconde en kunnen ook variëren van 0 tot 59.9.
    - *Invoerregels*. Breedtegraad- en lengtegraadcoördinaten worden geschreven in een formaat dat graden (:), minuten (:) en seconden (.) gebruikt.
    - *Meest gebruikt*. Het DMS-formaat wordt veel gebruikt in geodesie, navigatietoepassingen, cartografie, astronomie en andere gebieden waar een meer gedetailleerde uitdrukking van locatiecoördinaten vereist is.

4. **<Translate android="true" ids="navigate_point_format_utm"/>**

    ![Coördinaten zoeken Android](@site/static/img/search/coordinates_search_UTM_andr.png)

    **UTM (Universeel Transversaal Mercator Systeem)**. In dit formaat worden coördinaten gespecificeerd met behulp van de UTM-zone, Oost- en Noordrichtingen. Voor Amsterdam kunnen de coördinaten bijvoorbeeld ongeveer als volgt zijn: zone 31, Oostrichting 581000, Noordrichting 5809000. Het invoeren van coördinaten in UTM-formaat kan enige bekendheid met het systeem vereisen en complexer zijn dan andere formaten, maar het biedt een goede nauwkeurigheid en voldoet aan wereldwijde geo-positioneringsstandaarden. U kunt meer lezen over het UTM-formaat [hier](https://nl.wikipedia.org/wiki/Universele_Transversale_Mercatorprojectie).
    - *Invoerregels*. Coördinaten worden vastgelegd in een formaat dat de UTM-zone en Oost- en Noord-offsets gebruikt.
    - *Meest gebruikt*. Het UTM-formaat wordt vaak gebruikt in landmeten, kartering en geografische informatiesystemen voor meting en navigatie.

5. **<Translate android="true" ids="navigate_point_format_olc"/>** ((OLC) - 9F2X4WFJ+7W (Open Locatiecode vertegenwoordigt gebied 9m x 14m))

    ![Coördinaten zoeken Android](@site/static/img/search/coordinates_search_OLC_andr.png)

    **Open Locatiecode (OLC)**, ook bekend als **Plus Code**, is een wereldwijd locatiecoderingssysteem. Het is een combinatie van letters en cijfers om de breedtegraad en lengtegraad van elke locatie op de planeet aan te geven. Voorbeeld van een OLC-code voor Amsterdam: 9F3WCVWG+FP. In dit voorbeeld geeft "9F3WCVWG" een grof raster aan, en "+FP" specificeert een locatie binnen dat gebied. Lees meer [hier](https://nl.wikipedia.org/wiki/Open_Location_Code).
    - *Invoerregels*.
        - De OLC-code bestaat uit 4 tot 14 tekens, dit kunnen letters zijn van "C" tot "Z" (behalve "I" en "O") en cijfers van "2" tot "9".
        - De code begint met een globaal voorvoegsel dat een continent of gebied aangeeft.
        - Dit wordt gevolgd door groepen tekens die gescheiden zijn door punten. Elke groep vertegenwoordigt een smaller gebied.
        - Om de locatie te verduidelijken, worden letters en cijfers aangevuld met andere tekens in de OLC-code.
    - *Meest gebruikt*. OLC wordt vaak gebruikt in gebieden waar precieze adressen niet beschikbaar zijn of moeilijk te bepalen zijn, zoals afgelegen gebieden, woestijnen of oceanen. Het wordt ook veel gebruikt in toepassingen en diensten met betrekking tot geo-positionering, levering, hulpdiensten en andere gebieden waar een precieze locatie vereist is zonder het gebruik van traditionele adressen.

6. **<Translate android="true" ids="navigate_point_mgrs"/>**

    ![Coördinaten zoeken Android](@site/static/img/search/coordinates_search_MGRS_andr.png)

    **MGRS (Militair Raster Referentiesysteem)**. Dit is een coördinatensysteem dat vaak wordt gebruikt in militaire toepassingen. Het is gebaseerd op het UTM-systeem en wordt aangevuld met een extra raster van vierkanten. Een voorbeeld van coördinaten in MGRS-formaat voor een locatie in Australië kan als volgt zijn: 55HBE1234567890. In dit voorbeeld staat "55H" voor de MGRS-zone en "BE" voor het vierkant waarin de locatie zich bevindt. "123456" staat voor de oostelijke offset en "7890" voor de noordelijke offset binnen dat vierkant. MGRS wordt veel gebruikt in gebieden die een hoge nauwkeurigheid en geo-referencing vereisen. Ze zijn bijzonder nuttig in omgevingen waar adressen mogelijk niet duidelijk of beschikbaar zijn, zoals militaire operaties of expedities in afgelegen gebieden. U kunt meer lezen over het MGRS-formaat [hier](https://nl.wikipedia.org/wiki/Military_Grid_Reference_System).
    - *Invoerregels*. De coördinaten bestaan uit een MGRS-zone, een vierkant en nog twee cijfers die de oostelijke en noordelijke offsets aangeven.
    - *Meest gebruikt*. Het MGRS-formaat wordt veel gebruikt in militaire navigatie en communicatie, en kan ook nuttig zijn voor outdoorliefhebbers en wandelaars.

7. **Zwitsers Raster** (CH1903) en **Zwitsers Raster** (CH1903+)

    ![Coördinaten zoeken Android](@site/static/img/search/coordinates_search_Swiss_andr.png)

    **Zwitsers coördinatensysteem**. Zwitsers Raster (CH1903) en Zwitsers Raster (CH1903+) zijn coördinatensystemen die veel worden gebruikt in Zwitserland voor positionering. Beide formaten zijn gebaseerd op het CH1903-systeem, dat in 1903 werd geïntroduceerd en gebaseerd is op de projectie van het Zwitserse Internationale Raster. Voorbeeldcoördinaten in Zwitsers Raster (CH1903) formaat — Oost: 600000; Noord: 200000. In Zwitsers Raster (CH1903+) formaat — Oost: 600300; Noord: 200400. U kunt meer lezen over het Zwitserse Raster geografische coördinatensysteem [hier](https://nl.wikipedia.org/wiki/Zwitsers_co%C3%B6rdinatensysteem).
    - *Invoerregels*.
        - Coördinaten in CH1903-formaat bestaan uit twee componenten: Oost en Noord.
        - Oost is in meters vanaf een punt genaamd de Luzern-as (nul Oost).
        - Noord wordt gegeven in meters vanaf de evenaar.
        - Het CH1903+-formaat gebruikt dezelfde invoerregels als CH1903, maar met preciezere waarden.
        - CH1903+ bevat correcties om rekening te houden met verschuivingen in coördinaten veroorzaakt door veranderingen in tektonische bewegingen in Zwitserland.
    - *Meest gebruikt*. Het Zwitserse Raster (CH1903) en Zwitserse Raster (CH1903+) formaten worden in Zwitserland gebruikt voor geodetische metingen, cartografie, geografische informatiesystemen en bouw en engineering. Deze formaten bieden een lokaal coördinatensysteem dat specifiek is voor Zwitserland.


> Voor elk profiel afzonderlijk kunt u een ander coördinaatformaat instellen. Ga hiervoor naar *Algemene instellingen → [Coördinaatformaat](../personal/profiles.md#units--formats)*.


<!--

## Probleemoplossing {#troubleshooting}

https://github.com/osmandapp/OsmAnd/issues/14081

https://github.com/osmandapp/OsmAnd/issues/16114

https://github.com/osmandapp/OsmAnd/issues/14081

-->


## Gerelateerde artikelen {#related-articles}

- [Alles zoeken](./search-all.md)
- [Adres zoeken](./search-address.md)
- [Zoekgeschiedenis](./search-history.md)
- [POI zoeken](./search-poi.md)


> *Laatst bijgewerkt: juli 2024*