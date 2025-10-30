---
source-hash: a712a44f73377cd525fd51b44694dfb5b3a2ded809dfa1224660e6d06215701e
sidebar_position: 2
title:  Navigeren op een track
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


## Overzicht {#overview}

De optie *Navigeren op een track* (GPX) stelt u in staat om een vooraf gedefinieerde route of track op een kaart te volgen. Dit kan met name handig zijn voor buitenactiviteiten zoals wandelen, fietsen of off-road rijden, waar een geplande route de veiligheid en efficiëntie verbetert. Als u in een georganiseerde groep reist, helpt deze functie u en elk lid van de groep om dezelfde route-informatie te hebben als de anderen.  

De optie *Navigeren op een track* kan ook in het dagelijks leven worden gebruikt. U kunt een eerder [opgenomen track](../../plugins/trip-recording.md) gebruiken of [een track aanmaken](../../personal/tracks/manage-tracks.md#create-a-track) en deze delen met uw familie of vrienden in plaats van hen de route uit te leggen. U kunt ook de [routes op de OsmAnd-kaart](../../../../blog/routes/) gebruiken voor navigatie. Hoe u ze op de kaart markeert en wat hun kleuren betekenen, wordt beschreven in de sectie [Routes](../../map/vector-maps.md#routes) van het artikel *Vectorkaarten*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Navigatiescherm op track Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatiescherm op track iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Selecteer de track {#select-the-track}

Voordat u de optie *Navigeren op een track* gebruikt, moet u [de track op de kaart weergeven](../../map/tracks/index.md#display-tracks-on-the-map). OsmAnd ondersteunt een track als een lijn (**Geometrie**) en een track als een route (**Route**) of een combinatie daarvan (**OsmAnd** via [Route plannen](../../plan-route/create-route.md)). Als u een track heeft als een verzameling **Waypoints**, kunt u [Navigatie op basis van markeringen](./markers-navigation.md) gebruiken.


- Een **Geometrie**-track heeft standaard zeer eenvoudige navigatie en geeft geen nauwkeurige afslagen, straatnamen en rijstroken. Om ontbrekende informatie te verkrijgen, moet u de tool [Aan de weg koppelen](#attach-to-the-roads) gebruiken.

- Een **Route**-track berekent de route tussen routepunten op basis van het geselecteerde profiel. In principe worden alle routepunten beschouwd als tussenliggende punten. Als uw route uit meer dan 50 punten bestaat, is het zeer waarschijnlijk dat het een verkeerd geconfigureerde **Geometrie**-track is.

- Een **OsmAnd**-track bestaat uit zowel geometrie- als route-onderdelen en is geschikt om exact dezelfde begeleiding te bieden als de standaardnavigatie. Deze tracks worden geproduceerd door [Route plannen](../../plan-route/create-route.md) of de [Webversie](../../web/index.md). Het is mogelijk om deze track opnieuw op te slaan als een **Geometrie**-track via [**Vereenvoudigd**](../../plan-route/create-route.md#save-route) om te gebruiken in programma's van derden.


### GPX-navigatie starten {#start-gpx-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Selecteer track om te navigeren Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Selecteer track om te navigeren Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Selecteer track om te navigeren iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Selecteer track om te navigeren iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

Navigatie op een track kan worden gestart met de snelle actieknop in het [contextmenu van de track](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) (geopend door een van de [gemarkeerde tracks](./route-navigation.md#history-of-previous-routes) op de kaart te selecteren, of door op een trackbestand te tikken in de sectie [Mijn Plaatsen](../../personal/myplaces.md) van het *Hoofdmenu*) of vanuit het navigatiemenu, dat wordt geopend door te tikken op:

- *[Navigatieknop](../../widgets/map-buttons.md#directions)* op het kaartscherm.  
- *Navigatiesectie* in het *Hoofdmenu* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- Ga in het [*Navigatiemenu*](./route-navigation.md#navigation-menu) naar *<Translate android="true" ids="shared_string_settings,follow_track"/>*.  

### Segmenten kiezen {#choose-segments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Segmenten Android](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segmenten iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

Voor navigatie kunt u, als de geselecteerde track uit meerdere segmenten of tracks bestaat, een specifiek segment of het volledige GPX-trackbestand selecteren. Bij het **[importeren](../../personal/tracks/manage-tracks.md#import)** kunt u kiezen of u het in één bestand of in meerdere bestanden wilt opslaan.


### Opties voor track volgen {#follow-track-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![Navigatiescherm op track Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![Navigatiescherm op track iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **Bewerken** (*potloodicoon* naast de tracknaam) — Opent de track in de tool [*Route plannen*](../../plan-route/create-route.md).
- **<Translate android="true" ids="select_another_track"/>** — Selecteer een ander GPX-bestand voor navigatie.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — Als deze instelling is ingeschakeld, wordt de bewegingsrichting langs de track omgekeerd.
- **<Translate android="true" ids="attach_to_the_roads"/>** — Configureert het [koppelen van een track aan de wegen](#attach-to-the-roads).
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — U kunt selecteren hoe u van mijn locatie naar de track wilt navigeren:
naar het *<Translate android="true" ids="start_of_the_track"/>* of naar het *<Translate android="true" ids="nearest_point"/>* op de track.
- Kies **Navigatietype** voor het eerste en laatste segment: bouw een [*rechte lijn*](../routing/straight-line-routing.md) of gebruik het [*routeringstype*](../routing/osmand-routing.md#routing-types) van het huidige profiel.


### Trackrichting omkeren {#reverse-track-direction}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Omgekeerde modus](@site/static/img/navigation/gpx/reverse_mode_android.png) ![Navigeren naar](@site/static/img/navigation/gpx/navigate_to_android.png)

De optie **Trackrichting omkeren** stelt u in staat om een opgeslagen GPX-track in de tegenovergestelde richting te navigeren — van het eindpunt terug naar het startpunt. Wanneer deze instelling is ingeschakeld, keert het navigatie-algoritme de GPX-geometrie automatisch om en herberekent het de richtingen dienovereenkomstig. Zodra het is ingeschakeld, wordt de parameter **Omgekeerde modus** beschikbaar:

- **Route berekenen**. Aanbevolen voor auto- en fietsprofielen. Er wordt een nieuwe, geoptimaliseerde route herberekend langs de omgekeerde GPX-track volgens het geselecteerde navigatieprofiel. Verkeersregels zoals eenrichtingsstraten en bochtenbeperkingen worden in acht genomen om veilige navigatie te garanderen.
- **Originele track**. De GPX-lijn wordt strikt in omgekeerde volgorde gevolgd zonder de route te herberekenen. Deze modus is nuttig voor wandelen, hiken of off-road navigatie waar verkeersregels niet van toepassing zijn.

Wanneer de omgekeerde richting is ingeschakeld, worden het start- en eindpunt van de track automatisch omgewisseld, en wordt de navigatie opgebouwd vanaf de huidige of dichtstbijzijnde positie op de omgekeerde track. De optie *Punt van de track om naar te navigeren = Dichtstbijzijnde punt* verwijst naar het dichtstbijzijnde punt op de omgekeerde GPX-lijn, en zowel de spraakbegeleiding als de functie Aan de weg koppelen werken op dezelfde manier als tijdens de voorwaartse navigatie.

</TabItem>

<TabItem value="ios" label="iOS">

![Navigeren naar iOS](@site/static/img/navigation/gpx/navigate_to_ios.png)

De optie **Trackrichting omkeren** stelt u in staat om een opgeslagen GPX-track in de tegenovergestelde richting te navigeren — van het eindpunt terug naar het startpunt. Wanneer deze instelling is ingeschakeld, wordt de trackgeometrie automatisch omgekeerd en wordt de route herberekend volgens het geselecteerde navigatieprofiel.

Het start- en eindpunt van de track worden omgewisseld, en de navigatie wordt opgebouwd vanaf de huidige of dichtstbijzijnde positie op de omgekeerde lijn. De optie *Navigeren naar = Dichtstbijzijnde punt* verwijst naar het dichtstbijzijnde punt op de omgekeerde GPX-track.

Er wordt een nieuwe, geoptimaliseerde route herberekend langs de omgekeerde track met volledige rekening houdend met verkeersregels zoals eenrichtingsstraten en bochtenbeperkingen. Spraakbegeleiding, visuele instructies en de functie Aan de weg koppelen werken zoals bij standaard voorwaartse navigatie, wat nauwkeurige en veilige routering garandeert.

</TabItem>

</Tabs>


### Aan de weg koppelen {#attach-to-the-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Aan de weg koppelen 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aan de weg koppelen 1 iOS](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

De functie **Aan de weg koppelen** lijnt uw track uit met de dichtstbijzijnde weg voor een nauwkeurigere navigatie-ervaring. Deze functie, beschikbaar in het menu [Track volgen](#follow-track-options), zorgt ervoor dat uw route het juiste wegennet volgt op basis van het geselecteerde *navigatieprofiel* en de **drempelafstand**. Dit verbetert zowel de [routedetails](../setup/route-details.md) als de [spraakinstructies](#guidance) tijdens de navigatie.

***Hoe het werkt:***

- OsmAnd koppelt elk trackpunt aan de **dichtstbijzijnde weg** binnen de ingestelde **drempelafstand** (standaard: **50 meter**).  
- De **drempelafstand** definieert de maximaal toegestane afstand tussen een GPS-trackpunt en een weg voor koppeling.
- **Automatische herkoppeling** — Bij het wisselen van **navigatieprofielen** koppelt OsmAnd de track automatisch opnieuw aan wegen die geschikt zijn voor het nieuwe profiel.
- Voor grote tracks met veel punten kan het koppelingsproces iets langer duren. U ziet een **voortgangsindicator** (*oranje statusbalk*) die de koppelingsstatus toont.
- Nadat de koppeling is voltooid, tikt u op **Toepassen** om de gewijzigde track voor navigatie te gebruiken.

### Automatisch aan de weg koppelen {#automatic-attachment-to-the-roads}

OsmAnd koppelt routes automatisch aan wegen bij gebruik van de tool **Route plannen**:

- **Waypoints** worden automatisch uitgelijnd met de dichtstbijzijnde beschikbare weg (*behalve voor [Rechte lijn routering](../../navigation/routing/straight-line-routing.md) en [Direct-naar-punt routering](../../navigation/routing/direct-to-point-routing.md)*).
- Als er geen wegen worden gedetecteerd (bijv. in off-road omgevingen), volgt de route **rechte lijnsegmenten**.
- U kunt de route **handmatig aanpassen** door waypoints naar andere locaties te slepen.

Standaard wordt de functie **Aan de weg koppelen** **automatisch** uitgevoerd wanneer een track wordt geselecteerd voor navigatie. U kunt deze instelling naar wens wijzigen. Raadpleeg voor meer details [Gedetailleerde trackbegeleiding](../guidance/navigation-settings.md#detailed-track-guidance) in het artikel *Navigatie-instellingen*.


## Punten {#points}

### Start- / eindpunt {#start--finish-point}

U kunt een ander start- en eindpunt voor een route specificeren dan het start-/eindpunt dat in het GPX-bestand is opgegeven. Wijzig dit op dezelfde manier als u doet voor [Navigatie](../setup/route-navigation.md#select-start-point).

In het menu [Track volgen](#follow-track-options) kunt u kiezen of u wilt navigeren vanaf uw huidige locatie naar het startpunt van de track of naar het dichtstbijzijnde punt op de GPX-track. U kunt ook het [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types) kiezen dat wordt gebruikt voor het begin- en eindsegment van uw route.  

### Waypoints {#waypoints}

Als de track waypoints heeft, kunt u [Langs de route tonen](../guidance/map-during-navigation.md#show-points-along-the-route) en [Spraakbegeleiding](../guidance/voice-navigation.md#voice-settings) gebruiken om meldingen te ontvangen over Nuttige Plaatsen. U kunt **Waypoints** toevoegen aan een bestaande track via het [Contextmenu](../../map/map-context-menu.md#-add--edit-track-waypoint), de track moet zichtbaar zijn op de kaart.

### Tussenliggende punten {#intermediate-points}

Bij het voorbereiden of navigeren van een GPX-track kunt u geen tussenliggende plaatsen toevoegen die u van plan bent te passeren binnen die track. U kunt alleen start- en eindpunten toewijzen naast de track of het segment dat u van plan bent te volgen.

## Begeleiding {#guidance}

*Navigatie op GPX-track* bevat dezelfde [spraakinstructies](../guidance/voice-navigation.md) als routenavigatie. Sommige afslagen of rotondes worden echter mogelijk niet correct geïnterpreteerd omdat er geen informatie over kruispunten in GPX staat, behalve voor GPX-bestanden die door OsmAnd zijn gemaakt. Om deze problemen te elimineren, moet u de functie [Aan de weg koppelen](#attach-to-the-roads) gebruiken.  

Tijdens de navigatie kunt u verschillende opties gebruiken, zoals in- of uitzoomen, de kaart verschuiven of overschakelen naar een andere kaartstijl. Als u van de track afwijkt, zal OsmAnd de route automatisch herberekenen om u weer op de track te brengen. U kunt ook de snelheid van de track aanpassen en hoorbare waarschuwingen instellen voor naderende punten of afwijkingen van de route.  


## Gerelateerde artikelen {#related-articles}

- [Routeparameters](../routing/osmand-routing.md#routing-types)
- [Routevoorbereiding](./route-navigation.md)
- [Routedetails](./route-details.md)
- [Navigatie op basis van markeringen](./markers-navigation.md)
- [Navigatie-instellingen](../guidance/navigation-settings.md)
- [Kaartscherm tijdens navigatie](../guidance/map-during-navigation.md)
- [Spraakinstructies / Meldingen](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)