---
source-hash: f338192d8b8c1dbdc1b08667fb4caff3b45c57bc128f5f53a297f3ace1a6b7fa
sidebar_position: 6
title:  Coördinaten zoeken
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

Met **Coördinaten zoeken in OsmAnd** kunt u een specifieke locatie vinden op basis van breedte- en lengtegraad. Dit type zoekopdracht helpt om een locatie nauwkeurig te identificeren. Het is vooral handig voor gebieden die geen precieze adressen hebben, of voor specifieke geografische taken zoals het creëren van geo-fences of nauwkeurige positionering in open ruimte.

OsmAnd biedt verschillende manieren om naar de *Zoekfunctie → [Tabblad Adres zoeken](../search/search-address.md)* te gaan, waar **Coördinaten zoeken** zich bevindt.

- De [Zoekknop](../widgets/map-buttons.md#search) op het kaartscherm van de applicatie.
- Ga naar het hoofdmenu van Android *Menu → Zoeken → Tabblad Adres → Coördinaten zoeken*.
- Wanneer u zich voorbereidt om een route te starten, tikt u op *Navigatie → Bestemming instellen → Zoekveld → Tabblad Adres → Coördinaten zoeken*.


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

- Om de coördinatenzoekfunctie te gebruiken, kunt u ze afzonderlijk in elk overeenkomstig veld typen, of eerder gekopieerde coördinaten in het zoekveld plakken of invoeren. De applicatie vraagt u om een geschikte locatie te selecteren.
- Coördinaten zoeken converteert automatisch het ene coördinaatformaat naar het andere wanneer het opgegeven formaat wordt gewijzigd in het veld met hun lijst.
- Tik op de voorgestelde locatie en het [contextmenu van de kaart](../map/map-context-menu.md#select-any-point-long-tap) wordt geopend.
- Meer informatie vindt u hier [Geografische coördinaten](https://en.wikipedia.org/wiki/Geographic_coordinate_system).


**Toepassingsgebied van de coördinatenzoekfunctie**:

- *Nauwkeurige locatie*. Coördinaten zoeken biedt een nauwkeurige locatie. U kunt precieze coördinaten invoeren die bijvoorbeeld zijn verkregen van andere bronnen zoals een kaart, GPS-apparaat of online diensten.
- *Plaatsen zonder adres*. Coördinaten zijn bijzonder nuttig als het gaat om plaatsen die geen exact adres hebben, of wanneer het adres onbekend is. Het kan bijvoorbeeld een afgelegen gebied zijn, een punt op zee of een bergtop. Door coördinaten in te voeren, kunt u naar dergelijke locaties zoeken en navigeren zonder het adres te hoeven weten.
- *Locatie delen*. Zoeken op coördinaten biedt een handige manier om informatie in te voeren. U kunt coördinaten handmatig invoeren of kopiëren van andere bronnen. Dit kan handig zijn bij het delen van locaties met anderen of bij het gebruiken van eerder verkregen coördinaten.


## Coördinaatformaat {#coordinate-format}

Er zijn verschillende manieren om coördinaten in te voeren voor de zoekopdracht. Om elk van hen te gebruiken, is het erg belangrijk om de invoerregels te volgen, anders kan de applicatie de locatie niet vinden.

1. **<Translate android="true" ids="navigate_point_format_D"/>**  

    ![Coördinaten zoeken Android](@site/static/img/search/coordinates_search_degrees_andr.png)  

    **Decimale coördinaten (graden)**. In dit formaat worden de breedte- en lengtegraadcoördinaten in decimaal formaat geschreven, bijvoorbeeld 52.37022° breedtegraad en 4.89517° lengtegraad voor Amsterdam. Deze invoermethode is gemakkelijk te gebruiken en is de meest voorkomende. U kunt hier meer lezen over het formaat van decimale coördinaten [hier](https://en.wikipedia.org/wiki/Decimal_degrees).  

    - *Invoerregels*. Breedte- en lengtegraadcoördinaten worden geschreven in decimaal formaat, waarbij de breedtegraad varieert van -90 tot 90 en de lengtegraad van -180 tot 180.
    - *Meest gebruikt*. Decimale coördinaten worden veel gebruikt in navigatietoepassingen, GPS-apparaten, webkaarten en andere geopositieservices.  

2. **<Translate android="true" ids="navigate_point_format_DM"/>**  

    ![Coördinaten zoeken Android](@site/static/img/search/coordinates_search_DM_andr.png)  

    **Graden en Minuten (DM)**. In dit formaat worden de breedte- en lengtegraadcoördinaten vastgelegd met behulp van graden en minuten. Bijvoorbeeld, 37:46.29 breedtegraad en -122:25.10 lengtegraad voor San Francisco. Dit formaat kan minder nauwkeurig zijn en het kan langer duren om in te voeren.
    - *Invoerregels*. Breedte- en lengtegraadcoördinaten worden geschreven in een formaat dat graden (:) en minuten (:) gebruikt.
    - *Meest gebruikt*. Het DM-formaat wordt vaak gevonden in maritieme navigatie, luchtvaart, astronomie en topografische kaarteersystemen.

3. **<Translate android="true" ids="navigate_point_format_DMS"/>**  

    ![Coördinaten zoeken Android](@site/static/img/search/coordinates_search_DMS_andr.png)  

    **Graden, Minuten en Seconden (DMS)**. Het DMS-coördinaatformaat registreert geografische coördinaten waarbij waarden worden gegeven in graden, minuten en seconden. Graden (DDD) kunnen waarden aannemen van 0 tot 180 voor lengtegraad en 0 tot 90 voor breedtegraad. Positieve waarden duiden op oosterlengte en noorderbreedte, en negatieve waarden duiden op westerlengte en zuiderbreedte. Minuten (MM) kunnen waarden aannemen van 0 tot 59. Seconden (SS.S) vertegenwoordigen de decimale fractie van een seconde en kunnen ook variëren van 0 tot 59.9.
    - *Invoerregels*. Breedte- en lengtegraadcoördinaten worden geschreven in een formaat dat graden (:), minuten (:) en seconden (.) gebruikt.
    - *Meest gebruikt*. Het DMS-formaat wordt veel gebruikt in geodesie, navigatietoepassingen, cartografie, astronomie en andere gebieden waar een meer gedetailleerde uitdrukking van locatiecoördinaten vereist is.

4. **<Translate android="true" ids="navigate_point_format_utm"/>**  

    ![Coördinaten zoeken Android](@site/static/img/search/coordinates_search_UTM_andr.png)  

    **UTM (Universal Transversal Mercator System)**. In dit formaat worden coördinaten gespecificeerd met behulp van de UTM-zone, oostelijke en noordelijke richtingen. Voor Amsterdam kunnen de coördinaten bijvoorbeeld ongeveer als volgt zijn: zone 31, oostelijke richting 581000, noordelijke richting 5809000. Het invoeren van coördinaten in UTM-formaat kan enige bekendheid met het systeem vereisen en complexer zijn dan andere formaten, maar het biedt een goede nauwkeurigheid en voldoet aan wereldwijde geopositiestandaarden. U kunt hier meer lezen over het UTM-formaat [hier](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system).
    - *Invoerregels*. Coördinaten worden vastgelegd in een formaat dat de UTM-zone en oostelijke en noordelijke offsets gebruikt.
    - *Meest gebruikt*. Het UTM-formaat wordt vaak gebruikt bij landmeten, kartering en geografische informatiesystemen voor meting en navigatie.

5. **<Translate android="true" ids="navigate_point_format_olc"/>**  ((OLC) - 9F2X4WFJ+7W (Open Location Code vertegenwoordigt een gebied van 9m x 14m))  

    ![Coördinaten zoeken Android](@site/static/img/search/coordinates_search_OLC_andr.png)  

    **Open Location Code (OLC)**, ook bekend als **Plus Code**, is een wereldwijd locatiecoderingssysteem. Het is een combinatie van letters en cijfers om de breedte- en lengtegraad van elke locatie op de planeet aan te duiden. Voorbeeld van een OLC-code voor Amsterdam: 9F3WCVWG+FP. In dit voorbeeld duidt "9F3WCVWG" op een grof raster, en "+FP" specificeert een locatie binnen dat gebied. Lees [hier](https://en.wikipedia.org/wiki/Open_Location_Code) meer.
    - *Invoerregels*.  
        - De OLC-code bestaat uit 4 tot 14 tekens, die letters van "C" tot "Z" (behalve "I" en "O") en cijfers van "2" tot "9" kunnen zijn.
        - De code begint met een globaal voorvoegsel dat een continent of gebied aangeeft.
        - Dit wordt gevolgd door groepen tekens die door punten worden gescheiden. Elke groep vertegenwoordigt een smaller gebied.
        - Om de locatie te verduidelijken, worden letters en cijfers aangevuld met andere tekens in de OLC-code.  
    - *Meest gebruikt*. OLC wordt vaak gebruikt in gebieden waar precieze adressen niet beschikbaar zijn of moeilijk te bepalen zijn, zoals afgelegen gebieden, woestijnen of oceanen. Het wordt ook veel gebruikt in toepassingen en diensten die verband houden met geolocatie, bezorging, nooddiensten en andere gebieden waar een precieze locatie vereist is zonder het gebruik van traditionele adressen.  

6. **<Translate android="true" ids="navigate_point_mgrs"/>**  

    ![Coördinaten zoeken Android](@site/static/img/search/coordinates_search_MGRS_andr.png)  

    **MGRS (Military Grid Reference System)**. Dit is een coördinatensysteem dat vaak wordt gebruikt in militaire toepassingen. Het is gebaseerd op het UTM-systeem en wordt aangevuld met een extra raster van vierkanten. Een voorbeeld van coördinaten in MGRS-formaat voor een locatie in Australië kan als volgt zijn: 55HBE1234567890. In dit voorbeeld staat "55H" voor de MGRS-zone en "BE" voor het vierkant waarin de locatie zich bevindt. "123456" staat voor de oostwaartse verschuiving en "7890" voor de noordwaartse verschuiving binnen dat vierkant. MGRS wordt veel gebruikt in gebieden die een hoge nauwkeurigheid en georeferentie vereisen. Ze zijn met name nuttig in omgevingen waar adressen mogelijk niet duidelijk of beschikbaar zijn, zoals bij militaire operaties of expedities in afgelegen gebieden. U kunt hier meer lezen over het MGRS-formaat [hier](https://en.wikipedia.org/wiki/Military_Grid_Reference_System).  
    - *Invoerregels*. De coördinaten bestaan uit een MGRS-zone, een vierkant en nog twee cijfers die de oostelijke en noordelijke offsets aangeven.
    - *Meest gebruikt*. Het MGRS-formaat wordt veel gebruikt in militaire navigatie en communicatie, en kan ook nuttig zijn voor outdoorliefhebbers en wandelaars.

7. **Swiss Grid** (CH1903) en **Swiss Grid** (CH1903+)  

    ![Coördinaten zoeken Android](@site/static/img/search/coordinates_search_Swiss_andr.png)  

    **Zwitsers coördinatensysteem**. Swiss Grid (CH1903) en Swiss Grid (CH1903+) zijn coördinatensystemen die in Zwitserland veel worden gebruikt voor positionering. Beide formaten zijn gebaseerd op het CH1903-systeem, dat in 1903 werd geïntroduceerd en is gebaseerd op de projectie van het Zwitserse Internationale Raster. Voorbeeldcoördinaten in Swiss Grid (CH1903) formaat — Oostelijk: 600000; Noordelijk: 200000. In Swiss Grid (CH1903+) formaat — Oostelijk: 600300; Noordelijk: 200400. U kunt hier meer lezen over het Swiss Grid geografische coördinatensysteem [hier](https://en.wikipedia.org/wiki/Swiss_coordinate_system).  
    - *Invoerregels*.  
        - Coördinaten in CH1903-formaat bestaan uit twee componenten: Oostelijk en Noordelijk.
        - Oostelijk is in meters vanaf een punt genaamd de Luzern-as (nul Oostelijk).
        - Noordelijk wordt gegeven in meters vanaf de evenaar.
        - Het CH1903+-formaat gebruikt dezelfde invoerregels als CH1903, maar met preciezere waarden.
        - CH1903+ bevat correcties om rekening te houden met verschuivingen in coördinaten veroorzaakt door veranderingen in tektonische bewegingen in Zwitserland.
    - *Meest gebruikt*. De formaten Swiss Grid (CH1903) en Swiss Grid (CH1903+) worden in Zwitserland gebruikt voor geodetische metingen, cartografie, geografische informatiesystemen en bouw- en ingenieurswerken. Deze formaten bieden een lokaal coördinatensysteem dat specifiek is voor Zwitserland.


> Voor elk profiel kunt u afzonderlijk een ander coördinaatformaat instellen. Ga hiervoor naar *Algemene instellingen → [Coördinaatformaat](../personal/profiles.md#units--formats)*.


<!--

## Troubleshooting {#troubleshooting}

https://github.com/osmandapp/OsmAnd/issues/14081  

https://github.com/osmandapp/OsmAnd/issues/16114  

https://github.com/osmandapp/OsmAnd/issues/14081  

-->


## Gerelateerde artikelen {#related-articles}

- [Alles zoeken](./search-all.md)
- [Adres zoeken](./search-address.md)
- [Zoekgeschiedenis](./search-history.md)
- [POI zoeken](./search-poi.md)