---
source-hash: e175b4348c1413c15e33f549f53698ae0970ca70deb9fd83602a6d9dbda79e15
sidebar_position: 1
title:  Een route plannen
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

De tool **Een route plannen** (*Menu → Een route plannen*) is een krachtige functie van de OsmAnd-applicatie waarmee u [nieuwe routes kunt aanmaken](#create-new-route) als GPX-tracks, [reeds opgeslagen tracks kunt bewerken en er nieuwe segmenten aan kunt toevoegen](#segments), [afstanden kunt meten](#distance-measurement) op de kaart en [tracksegmenten kunt koppelen](#attach-track-to-roads) aan de dichtstbijzijnde beschikbare weg met behulp van verschillende navigatieprofielen. De functie is ontworpen om in *offline modus* te werken.

Een route bestaat uit een reeks segmenten tussen gespecificeerde punten. De segmenten kunnen rechte lijnen zijn of routes die zijn aangepast aan het geselecteerde profiel. De route kan worden opgeslagen als GPX om later te importeren, te bewerken en voor [navigatie](../navigation/setup/gpx-navigation.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Een route plannen android](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Een route plannen ios](@site/static/img/plan-route/plan_route_overview_ios.png)

</TabItem>

</Tabs>


## Belangrijkste gebruiksscenario's {#main-use-cases}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,plan_a_route"/>*  

![Een route plannen android](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,plan_route"/>*  

![Een route plannen ios](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>

</Tabs>


### Nieuwe route aanmaken {#create-new-route}

Om een nieuwe track in GPX-formaat aan te maken, gebruikt u de hoofdfunctie van de tool *Een route plannen*. Het vooraf aanmaken van een route heeft veel voordelen, in tegenstelling tot het opnemen van de huidige track met de *[Plugin voor ritregistratie](../plugins/trip-recording.md)*. U kunt [zoveel punten als u wilt toevoegen](#adding-points) aan de route, [ze verwijderen en verplaatsen](#point-context-menu), routetypes per [segment](#route-between-points) wijzigen en [gedetailleerde informatie over de route](#graph) krijgen.  

Standaard komt het routeringstype overeen met het eerder geselecteerde profiel. Tik op het routeringspictogram om te selecteren hoe de applicatie het segment moet berekenen om punten te verbinden. Het beschikbare profiel moet [afzonderlijk](../navigation/routing/osmand-routing.md#routing-types) worden geconfigureerd.  

U kunt **in- en uitzoomen** om gemakkelijk punten te plaatsen bij het aanmaken of bewerken van een track. Wanneer u **uitzoomt**, worden de punten op de track onzichtbaar voor een beter zicht op de volledige lengte van de track en de kaart als geheel. Alleen het laatst toegevoegde punt en de aanwijzer voor het toevoegen van het volgende punt blijven zichtbaar.


### Bestaande GPX-track wijzigen {#modify-existing-gpx-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>  

De tool *Een route plannen* maakt het mogelijk om zowel een bestaande GPX-track als een [geïmporteerde track](../personal/tracks/manage-tracks.md#import) te wijzigen. Als u echter een groot aantal punten moet uitsluiten op basis van algemene criteria, is [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) mogelijk een geschikter hulpmiddel.


### Afstand meten {#distance-measurement}

![Een route plannen android](@site/static/img/plan-route/plan_route_lines_andr.png)  

*Een route plannen* is een snelle en eenvoudige manier om de afstand tussen punten te meten.

- Selecteer de methode *Rechte lijn* voor routeplanning. Er wordt een stippellijn getrokken tussen de punten.
- [Voeg](#adding-points) het eerste punt toe op de kaart van waaruit de lijn wordt getrokken.
- Verplaats de kaart om de afstand en het azimut te bepalen. De informatie wordt weergegeven in een veld met een lijst van punten onder de kaart.

:::note
De *Rechte lijn* is nodig en zal worden gebruikt voor gebieden die niet worden gedekt door routeringsgegevens, zoals off-road en off-track gebieden.
:::


### Hoogtegegevens ophalen {#get-elevation-data}

<InfoAndroidOnly />

![Een route plannen android](@site/static/img/plan-route/plan_route_graph_4_andr.png)  

Als [Hoogtegegevens](../map/tracks/track-context-menu.md#calculate-missing-elevation) ontbreken in een bestaande track, is het mogelijk om deze toe te voegen met de volgende tools:

- [Gebruik nabijgelegen wegen](#attach-track-to-roads). Deze modus gebruikt offline kaarten om de dichtstbijzijnde wegen te vinden om een track te bouwen, zodat hoogtegegevens worden opgehaald van de gekoppelde wegen. De geometrie van de track kan worden aangepast.  
- [Gebruik terreinkaarten](../map/tracks/track-context-menu.md#calculate-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) Modus berekent hoogte op basis van terreinkaartgegevens (3D). Het verschil tussen de door uw apparaat geregistreerde hoogtes kan worden gebruikt voor hoogtecorrectie. De geometrie van de track blijft ongewijzigd.


### Track aan wegen koppelen {#attach-track-to-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Een route plannen snap-road-android](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Een route plannen snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>  

De instelling **Aan de wegen koppelen** maakt het mogelijk om een opgenomen of geïmporteerde track te koppelen aan de wegen van OsmAnd offline kaarten om aanvullende informatie te verkrijgen:

- Correcte afslaginformatie voor [Navigeren op track](../navigation/setup/gpx-navigation.md#follow-track-options) (vooral op rotondes).
- Straatnamen en rijstrookinformatie.
- Hoogtegegevens.
- [Wegkenmerken](../navigation/setup/route-details.md#road-attributes).
- Bijgewerkte hoogteprofiel op basis van weggeometrie.
- Mogelijke herberekening van trackgeometrie (vereenvoudigen of aanpassen van punten aan het wegennet).

Wanneer een track aan wegen is gekoppeld, kunnen de volgende parameters veranderen omdat de geometrie en hoogte van de track worden herberekend: *Afstand, Stijging / Daling, Gemiddelde snelheid (en de snelheidsgrafiek), Maximale snelheid, Tijd in beweging*, en *Duur*. Deze waarden kunnen afwijken van de oorspronkelijke GPX-track als de herberekende hoogte of geometrie op basis van wegen aanzienlijk afwijkt van de geregistreerde GPS-gegevens.

U kunt een [drempelwaarde](../navigation/setup/gpx-navigation.md#attach-to-the-roads) selecteren voor de afstand die vereenvoudigde trackpunten mogen hebben ten opzichte van de oorspronkelijke trackpunten.

:::note Niet-gespecificeerd profielpictogram
Als u een track selecteert en het ***niet-gespecificeerde*** profielpictogram ("?") wordt weergegeven naast het pictogram *Instellingen*, tikt u erop om te kiezen of u de track aan wegen wilt koppelen of de punten gewoon met een rechte lijn wilt verbinden en als een opgenomen track wilt behandelen.
:::

<!--
### Add Route Points to Navigation from GPX {#add-route-points-to-navigation-from-gpx}

If you import a GPX file containing a route (with `<rtept>` elements), OsmAnd will display the route on the map but will not automatically convert the route points into a turn-by-turn navigation list.

To generate navigation instructions:

1. Open the GPX file from *My Places → Tracks*.
2. Tap the track to open it.
3. Tap the point menu (⋮) and choose **Add to Navigation**.
4. OsmAnd will convert the route points into a full navigation route with instructions.

> **NOTE:** *You may still use [Attach to roads](#attach-track-to-roads) to adjust geometry before converting to navigation.*
-->


## Punten & Segmenten {#points--segments}

### Punten toevoegen {#adding-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Een route plannen android](@site/static/img/plan-route/plan_route_points_list_andr.png) ![Een route plannen Favorieten android](@site/static/img/plan-route/plan_route_favorites_and.png)

Om een afstand te meten of een reis te plannen, voegt u één voor één punten toe op de locatie van de *Aanwijzer* en tikt u op de knop *Toevoegen*. Via de **puntenlijst** hieronder kunt u punten opnieuw ordenen, verwijderen of een specifiek [contextmenu voor punten](#point-context-menu) openen.

U kunt ook een via-punt direct vanaf de kaart toevoegen door op een POI of Favoriet te tikken om het contextmenu te openen en vervolgens op *PUNT TOEVOEGEN* te tikken. In deze modus worden contextmenu's voor niet-puntobjecten niet weergegeven. Wanneer u een POI/Favoriet toevoegt, wordt de naam behouden als de naam van het routepunt; als u dit punt later op de kaart verplaatst, wordt de naam gereset.

</TabItem>

<TabItem value="ios" label="iOS">

![Een route plannen ios](@site/static/img/plan-route/plan_route_points_list_ios.png)

Om een afstand te meten of een reis te plannen, voegt u één voor één punten toe op de locatie van de *Aanwijzer* en tikt u op de knop *Punt toevoegen*. Via de **puntenlijst** hieronder kunt u punten opnieuw ordenen, verwijderen of een specifiek [contextmenu voor punten](#point-context-menu) openen.

</TabItem>

</Tabs>  

:::note
U kunt ook elke actie die u in de routeplanner hebt uitgevoerd **Ongedaan maken**/**Opnieuw uitvoeren**.
:::
  
### Route tussen punten {#route-between-points}

Toegevoegde punten in de editor kunnen worden verbonden als een rechte lijn of als een route tussen punten van een geselecteerd profiel. *Route tussen punten* is op verschillende manieren toegankelijk:

1. Vanuit het menu *Opties* *→* *Route tussen punten*.
2. Tik op het *profielpictogram* in de linkerbenedenhoek van het kaartscherm. Niet op het bovenste pictogram, dat opent het menu Kaart configureren.
3. In het *[Contextmenu voor punten](#point-context-menu) → Wijzig routetype voor/na*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Een route plannen android](@site/static/img/plan-route/plan_route_between_points_andr.png) ![Een route plannen android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Een route plannen ios](@site/static/img/plan-route/plan_route_between_points_ios.png) ![Een route plannen ios](@site/static/img/plan-route/plan_route_change-route-type_ios.png)

</TabItem>

</Tabs>

U kunt de route wijzigen tussen 2 specifieke punten of tussen meerdere punten:

- *Hele track*. De hele track wordt opnieuw berekend met het geselecteerde profiel.
- *Volgend segment*. Alleen het volgende segment wordt opnieuw berekend met het geselecteerde profiel.  
- *Wijzig het routetype voor/na punt*. In het *contextmenu voor punten* kunt u de manier wijzigen waarop de route wordt berekend voor het gedeelte van dit punt tot het dichtstbijzijnde of tot het eindpunt. De instelling geeft informatie over de afstand van dit punt tot het begin of het einde van de route, of tot het volgende/vorige punt.
- *Routes herberekenen*. U kunt routeherberekening gebruiken zonder het profieltype te wijzigen. Het profielpictogram dat op de geplande route in de tool wordt weergegeven, verandert niet, maar het routetype komt overeen met het geselecteerde. Mogelijk hebt u dit nodig om alternatieve routes te vinden.  

### Segmenten {#segments}

Een tracksegment is een verzameling punten die zonder **onderbrekingen** met elkaar zijn verbonden. In de tool voor het plannen van een route is het mogelijk:

- Segmenten samenvoegen: de optie [Segmenten samenvoegen](#point-context-menu) verwijdert de onderbreking naar eerder gescheiden segmenten.
- Nieuwe, niet-verbonden delen van een track splitsen of aanmaken. Om er een aan te maken, gebruikt u de optie [Nieuw segment starten](#point-context-menu) of selecteert u de functie [Splitsen](#point-context-menu) in het contextmenu voor punten.

### Contextmenu voor punten {#point-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Een route plannen android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Een route plannen ios](@site/static/img/plan-route/plan_route_points_menu_ios.png)

</TabItem>

</Tabs>

Elk punt op uw route heeft een eigen contextmenu. Het toont het *volgnummer* van het punt, de *afstand vanaf het begin van de route*, de functie om het op de kaart te verplaatsen en te verwijderen, en een reeks acties met delen van de route voor en na dit punt. Om te bewerken, tikt u op het gewenste punt in de [lijst met punten](#adding-points) of rechtstreeks op de kaart.

- ***Informatie over het punt***. Het aantal punten in de lijst. De afstand tot het eerste punt is gebaseerd op het ingestelde routeringstype, de afstand kan veranderen bij herberekening naar het nieuwe type als de parameter *Route tussen punten* wordt gewijzigd.  

- ***<Translate ios="true" ids="move_point"/>***. Hiermee kunt u de positie van een punt op de kaart wijzigen. Verplaats de kaart met gebaren om de locatie van het punt te wijzigen. De puntaanduiding bevindt zich in het midden van het zichtbare deel van de kaart.  

- ***<Translate ios="true" ids="add_point_after"/>***. Verplaats de kaart om een punt toe te voegen na het geselecteerde punt. U kunt zoveel punten toevoegen als u nodig hebt totdat u op annuleren of toepassen tikt.  

- ***<Translate ios="true" ids="add_point_before"/>***. Verplaats de kaart om zoveel punten als nodig toe te voegen na het geselecteerde punt op het segment tussen dit punt en het volgende.  

- ***<Translate ios="true" ids="trim_before"/>***. U kunt het hele gedeelte van de route, punten en segmenten inkorten, vanaf het begin tot het geselecteerde punt. De in te korten afstand wordt onder de naam van de optie aangegeven.  

- ***<Translate ios="true" ids="trim_after"/>***. U kunt een route, punten en segmenten inkorten, vanaf het laatst toegevoegde punt tot het geselecteerde punt. De in te korten afstand wordt onder de naam van de optie aangegeven.  

- ***<Translate ios="true" ids="plan_route_split_before"/>***. Hiermee kan de route voor het geselecteerde punt worden gesplitst in afzonderlijke, niet-verbonden segmenten.

- ***<Translate ios="true" ids="plan_route_split_after"/>***. Hiermee kan de route na het geselecteerde punt worden gesplitst in afzonderlijke, niet-verbonden segmenten.  

- ***<Translate ios="true" ids="join_segments"/>***. Het laatste punt op een van de gesplitste segmenten en het volgende in de lijst met punten op het andere segment hebben deze verbindingsinstelling.  

- ***<Translate ios="true" ids="change_route_type_before"/>***. U kunt het routeringstype wijzigen dat is geconfigureerd voor een beschikbaar profiel, tussen punten op het vorige segment, of voor alle segmenten vanaf het begin van de route tot het geselecteerde punt.  

- ***<Translate ios="true" ids="change_route_type_after"/>***. U kunt het routeringstype wijzigen tussen punten op het volgende segment, of voor alle segmenten vanaf het geselecteerde punt tot het laatst toegevoegde punt.  

- ***<Translate ios="true" ids="delete_point"/>***. Verwijder het geselecteerde punt van de route. Vergelijkbaar met het verwijderen van een punt in een lijst.

### Multimodale routes {#multimodal-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Een route plannen android-routeline](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Een route plannen ios-scherm](@site/static/img/plan-route/plan-route-routeline-ios.png)

</TabItem>

</Tabs>

Met de tool *Een route plannen* en de optie [Route tussen punten](#route-between-points) kunt u multimodale routes aanmaken waarbij bijvoorbeeld het eerste deel een *fietsroute* kan zijn, het tweede deel een *rechte lijn* en vervolgens een *voetgangersroute*. Merk op dat navigatie op multimodale routes niet beschikbaar is, dus u moet een van de meest geschikte profielen selecteren om de stapsgewijze instructies te kunnen volgen.


## Editor {#editor}

### Route opslaan {#save-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Een route plannen android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Een route plannen ios](@site/static/img/plan-route/plan_route_save_changes_ios.png)

</TabItem>

</Tabs>  


Nadat u ten minste één punt [hebt toegevoegd](#adding-points) aan de kaart, kunt u de opslagoptie gebruiken. Alle tracks die zijn opgeslagen in *Een route plannen* zijn te vinden in het hoofdmenu *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)*.  

Er zijn vier manieren om op te slaan:

- ***Snel opslaan***. Met de knop ***Klaar*** / ***Opslaan*** (voor bestaande tracks) rechtsboven kunt u snel wijzigingen opslaan en de tool *Een route plannen* verlaten. De naam wordt gegenereerd op basis van de huidige datum.
- ***Wijzigingen opslaan*** in het [Opties menu](#options) stelt u in staat om wijzigingen in een bestand op te slaan en door te gaan met het plannen van de route.
- ***Opslaan als nieuwe track*** in het [Opties menu](#options) opent een dialoogvenster waarin u de naam van de track en de map waarin de route wordt opgeslagen, opgeeft.
- ***Wijzigingen toevoegen aan een track***. Voegt een aangemaakte track als een [apart segment](#segments) toe aan een andere bestaande track. Wijzigingen aan een geselecteerde track *kunnen niet ongedaan worden gemaakt*.

:::note Optie Vereenvoudigde track
Bij het opslaan van een nieuwe track kunt u de optie ***Vereenvoudigde*** track selecteren om de track compatibel te maken met andere applicaties van derden. Technisch gezien wordt de track opgeslagen zonder route-instructies als een puur geometrische track.
:::

### Opties {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Een route plannen android-opties](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Een route plannen ios-opties](@site/static/img/plan-route/plan_route_menu_options_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="route_between_points"/>](#route-between-points). Toont het geselecteerde applicatieprofiel (standaard is een rechte lijn). Tikken op deze actie is hetzelfde als tikken op de knop *Profiel*, die het [profielmenu](../personal/profiles.md) van de applicatie opent.
- **<Translate ios="true" ids="gpx_start_new_segment"/>** (*iOS*) of **<Translate android="true" ids="plan_route_add_new_segment"/>** (*Android*). Tekent nieuwe routesegmenten die niet aansluiten op het vorige segment.
- [<Translate android="true" ids="shared_string_save_changes"/>](#save-route). Als het een nieuwe track is zonder koppeling met de bestaande, wordt het menu *Opslaan als nieuwe track* geopend. Wanneer u nieuwe segmenten toevoegt aan een geopende of geïmporteerde track, verschijnt de melding over het opslaan van het GPS-bestand in de opslag, waarna u verder kunt gaan met het aanmaken van het volgende segment.
- [<Translate android="true" ids="save_as_new_track"/>](#save-route). Slaat uw route op als GPX-track.
- [<Translate android="true" ids="add_to_a_track"/>](#save-route). Voeg uw route toe aan een track uit uw trackmap en sla de nieuwe track op.
- [<Translate android="true" ids="shared_string_navigation"/>](../navigation/setup/gpx-navigation.md). Start de navigatie vanaf uw positie naar het eindpunt met behulp van een getekende route.
- **<Translate android="true" ids="reverse_route"/>**. U wisselt het *Startpunt* van de route en het laatst toegevoegde punt om. De instellingen van het routesegment veranderen niet wanneer Omkeren wordt toegepast.
- [<Translate android="true" ids="attach_to_the_roads"/>](#attach-track-to-roads). Creëert een geschatte route. Elk punt op de track wordt gekoppeld aan de dichtstbijzijnde toegestane weg op de kaart volgens het geselecteerde profiel en de drempelafstand.
- [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) (alleen Android). U kunt routepunten filteren die niet overeenkomen met het geselecteerde routeringstype, onnodige gegevens verwijderen of onnauwkeurige gegevens corrigeren. GPS-filter werkt alleen als het routeringstype is ingesteld op *Rechte lijn*. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- [<Translate android="true" ids="get_altitude_data"/>](#get-elevation-data) (*alleen Android*). Deze optie wordt alleen in het menu weergegeven als er geen hoogtegegevens beschikbaar zijn. Met deze [optie](#get-elevation-data) kunt u de hoogte berekenen met behulp van *Terreinkaartgegevens* of gegevens van gedownloade kaarten gebruiken om de *nabijgelegen wegen* te vinden.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. Het wist volledig al uw acties. Er blijft een "artefact" op de kaart achter - de stippellijnen van de zojuist gewiste route. Het verdwijnt bij de volgende toevoeging van nieuwe punten. U kunt de functie Alles wissen annuleren met de knop Actie terugdraaien. De functie heeft geen invloed op de ongewijzigde delen van de routes die in de tool zijn geopend.

### Grafiek {#graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Een route plannen android](@site/static/img/plan-route/plan_route_graph_5_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Een route plannen snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>

Tijdens het plannen van de route toont de [grafiek](../navigation/setup/route-details.md#elevation-graph) informatie over de hoogte van de route en het hellingspercentage, plus u kunt overal op de grafiek tikken om een aanwijzer met specifieke gegevens weer te geven.  

- Voor **Android** wordt de grafiek weergegeven in het tabblad *Grafiek* bij het aanmaken of openen van een track, en bij [Navigatie](../navigation/setup/gpx-navigation.md) met *Een route plannen*.
- Voor **iOS** is de grafiek alleen beschikbaar via het menu *[Opties](#options) → Navigatie*.

Bij het berekenen van een route voor navigatie in *Een route plannen*, kunt u aanvullende trackinformatie vinden zoals [Hoogte-info](../navigation/setup/route-details.md#elevation-info) en [Wegkenmerken](../navigation/setup/route-details.md#road-attributes), en de tool [Analyseren op kaart](../navigation/setup/route-details.md#analyze-on-map) gebruiken. Tik op de knop *Details* onder de grafiek.  


## Gerelateerde artikelen {#related-articles}

- [Track op kaart tonen](../map/tracks/index.md)
- [Analyseren op kaart](../map/tracks/index.md#analyze-track-on-map)
- [Contextmenu voor tracks](../map/tracks/track-context-menu.md)
- [Navigatie op track](../navigation/setup/gpx-navigation.md)
- [Ritregistratie](../plugins/trip-recording.md)