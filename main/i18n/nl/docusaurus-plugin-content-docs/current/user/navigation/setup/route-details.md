---
source-hash: c79e974f36d7aa431b244d904400ae8e4b3fa0f00f5d843333d559e34b86a4b7
sidebar_position: 4
title: Route Details
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Overzicht {#overview}

Met OsmAnd kunt u de beste route vinden en de details ervan verkennen. De app biedt gedetailleerde informatie over de route, zoals afstand, [reistijd](#distance--time--co2), [type wegdek](#road-attributes), [hoogteverschillen](#elevation-info), [CO2-voetafdrukgegevens](#distance--time--co2) en [afslaginfo](#turn-by-turn-information). U kunt de route ook [analyseren](#analyze-on-map) op de kaart, informatie over tracksegmenten opvragen, het routeplan [afdrukken](#print), de route [opslaan](#share--export-actions) en delen met anderen. Met deze functionaliteit kent u altijd de routedetails en kunt u uw reis efficiënter plannen.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route details Android](@site/static/img/navigation/route/route_detail_overview_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route details iOS](@site/static/img/navigation/route/route_detail_overview_4_ios.png)

</TabItem>

</Tabs>


### Hoe te openen {#how-to-access}

Na het berekenen van een route in het [Navigatiemenu](./route-navigation.md#start--stop-navigation), heeft u toegang tot "Details" over die route. Deze informatie is nuttig om te gebruiken voordat u aan een reis begint om de routeplanning te verbeteren of om informatie over de weg vooruit te controleren tijdens het rijden.
Er zijn drie manieren om het *Route Details menu* te openen.

1. Ga naar het hoofd *Menu → Navigatie*, stel de route in en tik op de knop *Details*.
2. Tik op het *Navigatie*-pictogram op het kaartscherm, stel de route in en tik op de knop *Details*.
3. Ga naar het menu *Mijn plaatsen*, tik op een beschikbare track in de lijst *Menu → Mijn plaatsen → Tracks*, selecteer het *Navigatie*-pictogram in het trackcontextmenu in het *Overzicht* en tik op *Details*.

Afhankelijk van de geselecteerde [profielinstellingen](../../personal/profiles.md) en het geselecteerde [routingtype](../../navigation/routing/osmand-routing.md#routing-types), worden sommige routedetails mogelijk niet weergegeven. Bovendien zijn de routedetails sterk afhankelijk van de *OpenStreetMap-gegevensdekking*.


## Afstand / Tijd / CO2 {#distance--time--co2}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route details](@site/static/img/navigation/route/route_details_distance-time-CO2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_distance-time-CO2_2_ios.png)

</TabItem>

</Tabs>

- ***Totale afstand*** wordt berekend tussen alle routesegmenten, inclusief tussenliggende punten in de geselecteerde [eenheden](../../personal/profiles.md#units--formats).

- ***Geschatte reistijd*** wordt berekend als de som van de tijden op elk segment en tijdstraffen op specifieke punten. Elk navigatieprofiel heeft verschillende regels voor het berekenen van de snelheid op een segment en welke straffen moeten worden opgenomen (geconfigureerd in [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md)). Bijvoorbeeld, auto- en fietsprofielen nemen de gemiddelde snelheid per segment uit OpenStreetMap-gegevens, maar voetgangers-, boot- en vliegtuigprofielen gebruiken de *standaard* snelheid uit [Navigatie-instellingen](../guidance/navigation-settings.md#default-speed--road-speeds).

- ***Geschatte aankomsttijd*** wordt berekend als een tijd vanaf nu in de lokale tijd van de oorsprong met behulp van de *Geschatte reistijd*.

- ***CO2-voetafdrukgegevens*** schatten ruwweg hoeveel CO2 zal worden geproduceerd tijdens het volgen van de route. U moet het [Brandstofmotortype](../guidance/navigation-settings.md#fuel-used-by-motor) in Voertuigparameters configureren om een nauwkeurigere benadering te krijgen.


## Hoogte-informatie {#elevation-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route details](@site/static/img/navigation/route/route_details_info-block_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_info-block_ios.png)

</TabItem>

</Tabs>

**Hoogte-informatie** wordt geleverd in alle offline routeprofielen van OsmAnd, behalve voor profielen die gebruikmaken van [Rechte lijn navigatie](../routing/straight-line-routing.md). De hoogtegegevens maken deel uit van de OsmAnd Offline Kaarten en worden berekend op basis van [Openbare SRTM-bronnen](https://en.wikipedia.org/wiki/Shuttle_Radar_Topography_Mission).

- *Hoogtebereik*. Toont de minimale / maximale hoogte op de route.
- *Gemiddelde hoogte*. Toont de gewogen gemiddelde hoogte op de route.
- *Omhoog / omlaag*. Toont de verhouding van het pad tot het horizontale, waarbij nul horizontaliteit aangeeft en het aantal graden een hogere of steilere hellingsgraad aangeeft. De helling toont de maximale weghelling in procenten vanaf uw locatiepunt tot het einde van de zichtbare grafiek, of voor het geselecteerde gedeelte van de route zonder het locatiepunt zichtbaar op het scherm.


***Een licentie voor DEM-gegevens gebruikt door OsmAnd voor terreindetectie***
De hoogtedata op de kaart (tussen 70 graden noorderbreedte en 70 graden zuiderbreedte) zijn verkregen uit metingen die zijn gedaan als onderdeel van de *Shuttle Radar Topography Mission (SRTM)*. Hierbij werd gebruikgemaakt van de *Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*, het primaire beeldvormingsinstrument in *NASA's Earth Observation System*. Voor volledige informatie, zie de [Licentie](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>DEM (DSM) gegevens</summary>
 - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. De originele gegevens die voor dit product zijn gebruikt, zijn geleverd door JAXA's AW3D.<br/>
 - <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
 - <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummens, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
 - <a href="https://sonny.4lima.de">Sonny's LiDAR Digital Terrain Models of Europe</a> (DTM).

</details>


### Hoogtegrafiek {#elevation-graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route details](@site/static/img/navigation/route/route_details_el_graph_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_el_graph_ios.png)

</TabItem>

</Tabs>

De [grafieken](../../map/tracks/track-context-menu.md#altitude--speed-graphs) tonen visueel informatie over de hoogte en helling van uw navigatieroute en uw huidige positie op deze grafiek met de huidige hoogte en helling. De grafiek is uitgezet op twee assen. De X-as is de afstand op uw route. De eerste Y-as is de hoogte boven zeeniveau, waarvan de waarde afhankelijk is van het terrein, en de tweede Y-as is de geschatte [helling](https://en.wikipedia.org/wiki/Grade_(slope)). U kunt de hoogtegrafiek voor de hele route of alleen voor een geselecteerd interval bekijken door de grafiek te schalen.

- ***In-/uitzoomen***. Standaard toont de grafiek de route vanaf de huidige locatie tot uw bestemming. U kunt [bewegingen met twee vingers](../../map/interact-with-map.md#gestures) gebruiken om in en uit te zoomen voor een gedetailleerder beeld. U kunt de grafiek ook naar rechts verplaatsen, vooruit op de route, en terug naar de huidige locatie. *Dergelijke manipulaties hebben ook betrekking op het visuele informatieblok in het [Wegkenmerken](#road-attributes) blok.*

- ***Locatiepin***. Als u de informatie op een bepaald punt verderop op uw route wilt zien, kunt u ergens op de grafiek tikken en verschijnt er een aanwijzer met hoogte en hellingspercentage.


## Analyseren op kaart {#analyze-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route details Android](@site/static/img/navigation/route/navigation_route_analiz_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route details iOS](@site/static/img/navigation/route/navigation_route_analiz_ios.png)

</TabItem>

</Tabs>

De tool **Analyseren op kaart** is vergelijkbaar met de tool voor het bekijken van [trackdetails](../../map/tracks/index.md#analyze-track-on-map) op de kaart. Hiermee kunt u verschillende grafieken bekijken en er visueel mee interageren en het geselecteerde punt op de kaart zien.

Als er gegevens aanwezig zijn, kunt u een van de volgende typen selecteren:

- *Y-as*:
   - [*Hoogte*](../../map/tracks/track-context-menu.md#altitude). Dit is het [proces](https://wiki.openstreetmap.org/wiki/Altitude) van het verkrijgen van hoogte boven een vast niveau.
   - [*Helling*](https://wiki.openstreetmap.org/wiki/Key:incline). De [helling van de landvorm](https://en.wikipedia.org/wiki/Grade_(slope)) betekent de raaklijn van de hellingshoek van het oppervlak tot het horizontale.
   - [*Snelheid*](../../map/tracks/track-context-menu.md#speed). Snelheidswaarden tijdens het rijden op een track.
   - Grafieken met twee soorten gegevens: &nbsp;*Hoogte/Helling*, &nbsp;*Hoogte/Snelheid*, &nbsp;*Helling/Snelheid*, &nbsp;*Geanimeerd zoomen/Snelheid*.
- *X-as*:
   - *Afstand*. U kunt routegegevens bekijken die betrekking hebben op de lengte van de route.
   - *Tijd*. U kunt routegegevens bekijken die betrekking hebben op de berekende tijd voor die route
   - *Tijdstip van de dag*. U kunt routegegevens op bepaalde tijden van de dag bekijken.


### Type interacties {#type-of-interactions}

- *Tikken en schuiven*. Tik op de grafiek om informatie over het trackpunt en de beweging erlangs weer te geven. De grafiek markeert de locatie van het punt op de kaart en toont informatie erover op de liniaal.
- *Schaal*. Schaal de grafiek met [twee vingers gebaar](../../map/interact-with-map.md#gestures).
- *Volg mijn locatie* (*alleen Android*). U kunt op [Mijn locatie](../../map/interact-with-map.md#my-location-and-zoom) tikken om de kaartweergave en grafiek te synchroniseren met uw locatie. Terwijl u beweegt, verschuift de grafiek van links naar rechts, waarbij informatie vooruit op uw pad wordt weergegeven.


## Wegkenmerken {#road-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_details"/>*

![Navigation route Android](@site/static/img/navigation/route/route_details_attributes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_details,shared_string_analysis"/> tab*

![Navigation route iOS](@site/static/img/navigation/route/route_details_attributes_ios.png)

</TabItem>

</Tabs>

Wegkenmerken zijn toegankelijk in de [Route Details](#how-to-access) en tonen segmentgerelateerde informatie van OpenStreetMap en Hoogtegegevens. De kleurindicatie is gerelateerd aan hoe specifieke kenmerken op de kaart worden weergegeven (zie [Kaartlegenda](../../map-legend/osmand.md#surface-smoothness)). De staafdiagrammen zijn ook interactief, en het is mogelijk om informatie op een specifieke locatie te zien door op de grafiek te tikken.

- [**Wegtype**](https://wiki.openstreetmap.org/wiki/Key:highway#Roads). Het type weg wordt bepaald op basis van het functionele doel en de kenmerken, zoals het aantal rijstroken, snelheidslimieten, draagvermogen, de aanwezigheid van voet- en fietspaden, bermen en andere parameters. Verschillende soorten wegen kunnen verschillende beperkingen en verkeersregels hebben.

   Bijvoorbeeld, hoofdsnelwegen ([highways](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)) hebben meestal een hoge snelheidslimiet en kunnen worden verdeeld in rijstroken, en [lokale wegen](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) kunnen een lage snelheidslimiet en één rijstrook in elke richting hebben.

- [**Wegdek**](https://wiki.openstreetmap.org/wiki/Key:surface). Wegdekken zijn de bovenste laag van het wegdek die in contact komt met de wielen van voertuigen. Ze kunnen van verschillende typen zijn, afhankelijk van hun eigenschappen en functionele doel.

   Bijvoorbeeld, [asfalt](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) biedt goede grip en geluidsisolatie, en [beton](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete) is duurzamer en heeft een groter draagvermogen. Andere materialen zoals grind, puin, houten planken en andere kunnen ook worden gebruikt om een wegdek te creëren.

- [**Steilheid**](https://wiki.openstreetmap.org/wiki/Key:incline#Common_&_extreme_inclines). Dit is een meting van de hoek van de helling van de weg, uitgedrukt als een percentage. Het geeft aan hoe steil de weg omhoog of omlaag helt ten opzichte van de horizon, en het wordt berekend door de verticale verandering in de weghoogte te meten door de horizontale afstand en de resulterende waarde met 100% te vermenigvuldigen.

   Als de steilheid van de weg bijvoorbeeld 10% is, betekent dit dat u voor elke 100 meter horizontale afstand langs de weg 10 meter omhoog of omlaag gaat. De steilheid van de weg kan de snelheid van uw voertuig, het remmen, het brandstofverbruik en de rijveiligheid beïnvloeden, vooral op gladde wegen in de winter.

- [**Vastheid van het wegdek**](https://wiki.openstreetmap.org/wiki/Key:tracktype). Het wegdek kan herstellen van vervorming of belasting. Hoe hoger de vastheid van het wegdek, hoe kleiner de kans op schade aan het voertuig en hoe comfortabeler de weg zal zijn. De vastheid van het wegdek kan ook de voertuigsnelheid en het brandstofverbruik beïnvloeden.

- [**Helling**](https://wiki.openstreetmap.org/wiki/Key:incline). Geeft aan welk percentage hellingen er op uw route zijn.

- [**Gladheid**](https://wiki.openstreetmap.org/wiki/Key:smoothness). Van toepassing op alle soorten paden en gebieden, zoals snelwegen, parkeerplaatsen, stranden en paden, en geeft de bruikbaarheid van de route aan. Het geeft u informatie dat u kunt rijden zonder significant risico op schade, zoals aan het onderstel van het voertuig, of letsel, zoals een val.

- [**Winter- en ijswegen**](https://wiki.openstreetmap.org/wiki/Proposed_features/Winter_roads). Toont het kleurenschema van de route volgens de classificatie van [winterwegen](../../map/vector-maps.md#winter-and-ski).

- [**Moeilijkheidsgraad van ruiterpaden**](https://wiki.openstreetmap.org/wiki/Riding). Dit wegkenmerk geeft de moeilijkheidsgraad van de route aan tijdens het paardrijden. Geschikt voor [Paardrijroutes](../../navigation/routing/horse-routing.md).


## Turn-by-Turn informatie {#turn-by-turn-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_turn.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_turn_2_ios.png)

</TabItem>

</Tabs>

Turn-by-turn informatie biedt gedetailleerde [instructies](#instructions) over hoe u een route moet navigeren. Naast het *Details*-menu wordt het ook weergegeven in de widgets [*Route manoeuvres*](../../widgets/nav-widgets.md#route-maneuvers) en [*Rijstroken*](../../widgets/nav-widgets.md#lanes). Deze informatie helpt u om uw route beter te navigeren en stelt u in staat om vooruit te plannen.

Tik op een specifiek gedeelte van de route in de lijst om gedetailleerde informatie te bekijken of wijzigingen aan te brengen indien nodig. De kaart vergroot en er wordt een [Contextmenu](../../map/map-context-menu.md) geopend.


### Instructies {#instructions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_turn_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route Android](@site/static/img/navigation/route/navigation_turn_ios.png)

</TabItem>

</Tabs>

Instructies bevatten informatie over het bewegen langs de route, zoals:

- De [*volgende afslagpijl*](../../widgets/nav-widgets.md#next-turn) en *de richting ervan*.
- *Afstand tot manoeuvre*.
- Een beschrijving van *wat te doen*, inclusief de *naam van de straat of het pad*.
- *Totale afstand* en *tijd van de route*.
- *[Rijstroken](../../widgets/nav-widgets.md#lanes) lay-out* voor de huidige weg.
- [*Wegkantindicator*](#roadside-indicator) (*alleen iOS*).


### Wegkantindicator {#roadside-indicator}

:::caution Alleen iOS
Dit type instructie is momenteel *niet beschikbaar voor de Android*-versie van de OsmAnd-app.
:::

![Side indication](@site/static/img/navigation/route/side_indication.png)

In de instructielijst geeft de **wegkantindicator** aan welke richting vanaf uw huidige locatie en bewegingsrichting naar uw eindpunt uw bestemming is, dit kan links, rechts en rechtdoor zijn.

De hoek tussen uw bestemming (*[Peiling](https://en.wikipedia.org/w/index.php?title=Bearing_(navigation)&oldformat=true) vanaf het laatste punt*) en het laatste segment (*Peiling naar de laatste 2 punten van de route*) wordt gemeten, verdeeld in 3 sectoren van 120 graden, en het resultaat is dat u kunt zien in welke richting uw bestemming is.

- `-60 °`&nbsp; &nbsp; &nbsp; tot &nbsp; &nbsp;`60 °`&nbsp; &nbsp; &nbsp; - gemarkeerd als **rechtdoor**.
- `-180 °`&nbsp; &nbsp; tot &nbsp; &nbsp;`-60 °`&nbsp; &nbsp; - gemarkeerd als **links**.
- `60 °`&nbsp; &nbsp; &nbsp; &nbsp; tot &nbsp; &nbsp;`180 °`&nbsp; &nbsp; - gemarkeerd als **rechts**.


### Afdrukken {#print}

<InfoAndroidOnly/>

![route details](@site/static/img/navigation/route/route_details_print-2.png)

De **Afdrukken**-functie van een turn-by-turn routebeschrijving kan handig zijn als u liever een fysieke kopie van uw routebeschrijving heeft in plaats van elektronische apparaten te gebruiken, of als u geen toegang heeft tot navigatie-apps of GPS-navigators, geen internettoegang, of als u informatie nodig heeft voor andere mensen die met u meereizen.

Een afgedrukte routebeschrijving biedt gedetailleerde *turn-by-turn instructies* over hoe u uw route moet navigeren, inclusief de afstand tot de volgende afslag, rijrichting en straat- of padnamen, evenals informatie over afstand en reistijd.

Deze informatie kan nuttig zijn wanneer u een reis plant en de tijd en afstand tussen verschillende punten op de route wilt schatten en de verwachte aankomsttijd wilt bepalen.

De mogelijkheid om turn-by-turn informatie **af te drukken** of **op te slaan** **in PDF-formaat** is vooral handig bij lange reizen of op onbekende plaatsen, wanneer u een gedetailleerder beeld van de route en de benodigde tijd wilt hebben.


## Delen / Exporteren (Acties) {#share--export-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_share_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_share_ios.png)

</TabItem>

</Tabs>

De navigatiesectie Route Details heeft opties waarmee u bepaalde acties kunt uitvoeren met de route-informatie.

- [**Afdrukken**](#print). Hiermee kunt u turn-by-turn route-informatie afdrukken of opslaan.
- **Exporteren/Opslaan**. Hiermee kunt u de route-informatie **opslaan als een nieuwe track** voor later offline gebruik. De geëxporteerde track bevat alle informatie over wegkenmerken en afslaginstructies. Dus, [navigatie via deze track](./gpx-navigation.md) zou alle functies moeten bieden als navigatie via de route.
- **Delen**. Deelt een geëxporteerde track of een link naar de route die op een ander apparaat met OsmAnd kan worden geopend.


## Gerelateerde artikelen {#related-articles}

- [Routeparameters](../routing/osmand-routing.md#routing-types)
- [Routevoorbereiding](./route-navigation.md)
- [Navigatie via track](./gpx-navigation.md)
- [Navigatie via markeringen](./markers-navigation.md)
- [Navigatie-instellingen](../guidance/navigation-settings.md)
- [Kaartscherm tijdens navigatie](../guidance/map-during-navigation.md)
- [Gesproken aanwijzingen / Meldingen](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Laatst bijgewerkt: november 2024*