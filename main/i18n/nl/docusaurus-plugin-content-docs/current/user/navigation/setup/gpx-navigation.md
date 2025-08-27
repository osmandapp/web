---
source-hash: ae9687e6f1f23d70428677a5ebd5a73f6a67a71286137aec6ff175aad5589758
sidebar_position: 2
title: Navigeren via een route
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

De optie *Navigeren via een route* (GPX) stelt u in staat om een vooraf gedefinieerde route of track op een kaart te volgen. Dit kan bijzonder nuttig zijn voor buitenactiviteiten zoals wandelen, fietsen of off-road rijden, waarbij een geplande route de veiligheid en efficiëntie verbetert. Als u in een georganiseerde groep reist, helpt deze functie u en elk lid van de groep dezelfde route-informatie te hebben als de anderen.

De optie *Navigeren via een route* kan ook in het dagelijks leven worden gebruikt. U kunt een eerder [opgenomen route](../../plugins/trip-recording.md) gebruiken of [een route maken](../../personal/tracks/manage-tracks.md#create-a-track) en deze delen met uw familie of vrienden in plaats van hen de route uit te leggen. U kunt ook de [routes op de OsmAnd-kaart](../../../../blog/routes/) gebruiken voor navigatie. Hoe u deze op de kaart markeert en wat hun kleuren betekenen, wordt beschreven in de [Routes-sectie](../../map/vector-maps.md#routes) van het artikel *Vector kaarten*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie via route scherm Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatie via route scherm iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Selecteer de route {#select-the-track}

Voordat u de optie *Navigeren via een route* gebruikt, moet u de [route op de kaart weergeven](../../map/tracks/index.md#display-tracks-on-the-map). OsmAnd ondersteunt routes als een lijn (**Geometrie**) en routes als een route (**Route**) of een combinatie daarvan (**OsmAnd** via [Route plannen](../../plan-route/create-route.md)). Als u een route heeft als een verzameling **Waypoints**, kunt u [Navigatie via markeringen](./markers-navigation.md) gebruiken.


- **Geometrie**-routes hebben standaard een zeer eenvoudige navigatie en bieden geen nauwkeurige afslagen, straatnamen en rijstroken. Om ontbrekende informatie te verkrijgen, moet u de tool [Aan wegen koppelen](#attach-to-the-roads) gebruiken.

- **Route**-routes berekenen de route tussen routepunten op basis van het geselecteerde profiel. In principe worden alle routepunten beschouwd als tussenpunten. Als uw route meer dan 50 punten bevat, is het zeer waarschijnlijk dat het een verkeerd geconfigureerde **Geometrie**-route is.

- **OsmAnd**-routes bestaan uit zowel geometrie- als routedelen, en zijn geschikt om precies dezelfde begeleiding te bieden als standaard navigatie. Deze routes worden geproduceerd door [Route plannen](../../plan-route/create-route.md) of de [Webversie](../../web/index.md). Het is mogelijk om deze route opnieuw op te slaan als een **Geometrie**-only route als [**Vereenvoudigd**](../../plan-route/create-route.md#save-route) om te gebruiken in programma's van derden.


### Start GPX-navigatie {#start-gpx-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Selecteer route om te navigeren Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Selecteer route om te navigeren Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Selecteer route om te navigeren iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Selecteer route om te navigeren iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

Navigatie op een route kan worden gestart met de sneltoets in het [route-contextmenu](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) (geopend door een van de [gemarkeerde routes](./route-navigation.md#history-of-previous-routes) op de kaart te selecteren, of door op een routebestand te tikken in de sectie [Mijn plaatsen](../../personal/myplaces.md) van het *Hoofdmenu*) of vanuit het navigatiemenu, dat wordt geopend door te tikken op:

- [*Navigatieknop*](../../widgets/map-buttons.md#directions) op het kaartscherm.
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

Voor navigatie, als de geselecteerde route uit meerdere segmenten of routes bestaat, kunt u een specifiek segment of het gehele GPX-routebestand selecteren. Bij het **[importeren](../../personal/tracks/manage-tracks.md#import)** kunt u kiezen of u het in één bestand of in meerdere bestanden wilt opslaan.


### Route-opties volgen {#follow-track-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![Navigatie via route scherm Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![Navigatie via route scherm iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **Bewerken** (*potloodpictogram* naast de routenaam) — Opent de route in de tool [*Route plannen*](../../plan-route/create-route.md).
- **<Translate android="true" ids="select_another_track"/>** — Selecteer een ander GPX-bestand voor navigatie.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — Als deze instelling is ingeschakeld, wordt de bewegingsrichting langs de route omgekeerd.
- **<Translate android="true" ids="attach_to_the_roads"/>** — Configureert [een route aan wegen koppelen](#attach-to-the-roads).
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — U kunt kiezen hoe u navigeert van mijn locatie naar de route:
naar het *<Translate android="true" ids="start_of_the_track"/>* of naar het *<Translate android="true" ids="nearest_point"/>* op de route.
- Kies **Navigatietype** voor het eerste en laatste segment: bouw een [*rechte lijn*](../routing/straight-line-routing.md) of gebruik het [*routingtype*](../routing/osmand-routing.md#routing-types) van het huidige profiel.


### Aan wegen koppelen {#attach-to-the-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aan wegen koppelen 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aan wegen koppelen 1 ios](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

De functie **Aan wegen koppelen** lijnt uw route uit met de dichtstbijzijnde weg voor een nauwkeurigere navigatie-ervaring. Deze functie, beschikbaar in het menu [Route volgen](#follow-track-options), zorgt ervoor dat uw route het juiste wegennet volgt op basis van het geselecteerde *navigatieprofiel* en de **drempelafstand**. Dit verbetert zowel de [routedetails](../setup/route-details.md) als de [gesproken instructies](#guidance) tijdens de navigatie.

***Hoe het werkt:***

- OsmAnd koppelt elk routepunt aan de **dichtstbijzijnde weg** binnen de ingestelde **drempelafstand** (standaard: **50 meter**).
- De **drempelafstand** definieert de maximaal toegestane afstand tussen een GPS-routepunt en een weg voor koppeling.
- **Automatische herkoppeling** — Bij het wisselen van **navigatieprofielen** koppelt OsmAnd de route automatisch opnieuw aan wegen die geschikt zijn voor het nieuwe profiel.
- Voor grote routes met veel punten kan het koppelingsproces iets langer duren. U ziet een **voortgangsindicator** (*oranje statusbalk*) die de koppelingsstatus aangeeft.
- Nadat de koppeling is voltooid, tikt u op **Toepassen** om de gewijzigde route te gebruiken voor navigatie.

#### Automatische koppeling aan wegen {#automatic-attachment-to-the-roads}

OsmAnd koppelt routes automatisch aan wegen bij gebruik van de tool **Route plannen**:

- **Waypoints** worden automatisch uitgelijnd met de dichtstbijzijnde beschikbare weg (*behalve voor [Rechte lijn routering](../../navigation/routing/straight-line-routing.md) en [Direct-naar-punt routering](../../navigation/routing/direct-to-point-routing.md)*).
- Als er geen wegen worden gedetecteerd (bijv. in off-road omgevingen), volgt de route **rechte lijnsegmenten**.
- U kunt de route **handmatig aanpassen** door waypoints naar verschillende locaties te slepen.

Standaard wordt de functie **Aan wegen koppelen** **automatisch** uitgevoerd wanneer een route wordt geselecteerd voor navigatie. U kunt deze instelling naar behoefte wijzigen. Voor meer details, zie [Gedetailleerde routebegeleiding](../guidance/navigation-settings.md#detailed-track-guidance) in het artikel *Navigatie-instellingen*.


## Punten {#points}

### Start-/eindpunt {#start--finish-point}

U kunt een start- en eindpunt voor een route opgeven dat afwijkt van het start-/eindpunt dat in het GPX-bestand is opgegeven. Wijzig dit net zoals u dat doet voor [Navigatie](../setup/route-navigation.md#select-starting-point).

In het menu [Route volgen](#follow-track-options) kunt u kiezen of u vanaf uw huidige locatie naar het startpunt van de route wilt navigeren of naar het dichtstbijzijnde punt op de GPX-route. Ook kunt u [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types) kiezen dat wordt gebruikt voor het start- en eindsegment van uw route.

### Waypoints {#waypoints}

Als de route waypoints heeft, kunt u [Toon langs de route](../guidance/map-during-navigation.md#show-points-along-the-route) en [Gesproken begeleiding](../guidance/voice-navigation.md#voice-settings) gebruiken om meldingen te ontvangen over nuttige plaatsen. U kunt **Waypoints** toevoegen aan een bestaande route via [Contextmenu](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint), de route moet zichtbaar zijn op de kaart.

### Tussenpunten {#intermediate-points}

Bij het voorbereiden of navigeren van een GPX-route kunt u geen tussenliggende plaatsen toevoegen waar u doorheen wilt rijden binnen die route. U kunt alleen start- en eindpunten toewijzen naast de route of het segment dat u van plan bent te volgen.

## Begeleiding {#guidance}

*Navigatie via GPX-route* bevat dezelfde [gesproken instructies](../guidance/voice-navigation.md) als routenavigatie. Sommige afslagen of rotondes worden echter mogelijk niet correct geïnterpreteerd omdat er geen informatie over wegkruisingen in GPX is, behalve voor GPX-bestanden die door OsmAnd zijn gemaakt. Om deze problemen te elimineren, moet u de functie [Aan wegen koppelen](#attach-to-the-roads) gebruiken.

Tijdens de navigatie kunt u verschillende opties gebruiken, zoals in- of uitzoomen, de kaart verschuiven of overschakelen naar een andere kaartstijl. Als u van de route afwijkt, berekent OsmAnd de route automatisch opnieuw om u weer op de route te brengen. U kunt ook de snelheid van de route aanpassen en hoorbare waarschuwingen instellen voor naderende punten of afwijkingen van de route.


## Gerelateerde artikelen {#related-articles}

- [Routeparameters](../routing/osmand-routing.md#routing-types)
- [Routevoorbereiding](./route-navigation.md)
- [Routedetails](./route-details.md)
- [Navigatie via markeringen](./markers-navigation.md)
- [Navigatie-instellingen](../guidance/navigation-settings.md)
- [Kaartscherm tijdens navigatie](../guidance/map-during-navigation.md)
- [Gesproken aanwijzingen / Meldingen](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Laatst bijgewerkt: april 2025*