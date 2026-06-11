---
source-hash: f16263db8d987d5d802140c2f60261308cc6e1eb3b436559f0926217fa039b11
title: Routes
sidebar_position: 11
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

OsmAnd heeft veel krachtige functies voor het weergeven van verschillende [routes](./types-of-routes.md) op de kaart. Standaard maken deze routes deel uit van [vector-kaarten](../../map/vector-maps.md#routes) (OpenStreetMap-gegevens), maar vergelijkbare functionaliteit wordt geboden door [tracks](../../map/tracks/index.md) die kunnen worden gemaakt met [Plan een route](../../plan-route/create-route.md), geïmporteerd als [GPX-tracks](#save-as-a-track) of opgenomen met de [Ritopname-plug-in](../../plugins/trip-recording.md). Routes Map Legend is [hier](../../map-legend/osmand.md#routes).

## Routes op de kaart weergeven {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png) ![Routes Classes](@site/static/img/map/routes_classes_android.png)

- Om de gewenste routes op de kaart weer te geven, schakelt u ze in in de *Routes-lijst* van het menu [Kaart configureren](../../map/configure-map-menu.md).
- OsmAnd kan [routes die aanwezig zijn op OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route) markeren. Ze kunnen worden geselecteerd door op [het symbool op de route](#save-as-a-track) te tikken, en als de zichtbare set routes correct is geconfigureerd, kunt u de kleur en pictogrammen volgen.
- De belangrijkste routetypen kunnen ook worden gefilterd op klassen en subklassen, zodat u alleen specifieke groepen binnen elk type kunt weergeven. U kunt bijvoorbeeld wandelroutes weergeven op **OSMC-symbolen** als klassen en op *internationale, nationale, regionale* of *lokale netwerken* als subklassen, die momenteel beschikbaar zijn wanneer de plug-in [OsmAnd Development](../../plugins/development.md) is ingeschakeld.
- U kunt een track boven op de routes maken met de tool [Plan een route](../../plan-route/create-route.md).
- Wanneer meerdere routes over dezelfde weg lopen, wordt elke route weergegeven als een afzonderlijke semi-transparante lijn die boven de andere ligt.
- Wanneer u op een locatie tikt waar meerdere routes elkaar overlappen, wordt een contextmenu met alle routes die door dit punt lopen weergegeven.
- Bijgewerkte vectorkaarten zijn vereist om alle elementen van het nieuwe routeschema weer te geven.

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png)

- Om de gewenste routes op de kaart weer te geven, schakelt u ze in in de *Routes-lijst* van het menu [Kaart configureren](../../map/configure-map-menu.md).
- OsmAnd kan [routes die aanwezig zijn op OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route) markeren. Ze kunnen worden geselecteerd door op [het symbool op de route](#save-as-a-track) te tikken, en als de zichtbare set routes correct is geconfigureerd, kunt u de kleur en pictogrammen volgen.
- U kunt een track boven op de routes maken met de tool [Plan een route](../../plan-route/create-route.md).
- Wanneer meerdere routes over dezelfde weg lopen, wordt elke route weergegeven als een afzonderlijke semi-transparante lijn die boven de andere ligt.

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

</Tabs>

## Acties met routes {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/routes_osm.png) ![Route info](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/routes_osm_ios_new.png) ![Route info](@site/static/img/map/routes_osm_ios_new_2.png)

</TabItem>

</Tabs>

Op de kaart kunt u routes selecteren voor [wandelen, fietsen, skiën, MTB, dirt bike, reizen en meer](./types-of-routes.md). Waar beschikbaar, tonen wandelroutes hun wegmarkeringen met [OSMC-symbolen](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol); andere routetypen gebruiken hun eigen markeringen.

Wanneer u op een **routesymbool** op de kaart tikt:

- Een **lijst met nabijgelegen routes** op die locatie wordt weergegeven.
- Na het selecteren van een route uit de lijst, opent een [contextmenu](../../map/tracks/track-context-menu.md) voor die route met gedetailleerde informatie en beschikbare acties.
- De geselecteerde route wordt geopend in een trackweergave, zodat u er op dezelfde manier mee kunt werken als met een GPX-track.

In het **contextmenu** kunt u:

- [Extra informatie](#route-info-and-elevation) bekijken over de geselecteerde route.
- De route [opslaan](#save-as-a-track) als een **GPX-track**.
- [Navigatie starten](#start-navigation) langs de route.

### Klimgebied- en rotsdetails {#climbing-area-and-crag-details}

![Climbing details](@site/static/img/map/climbing_andr.png)

Bij het selecteren van een [klimgebied of rots](./types-of-routes.md#climbing-routes) biedt OsmAnd een gedetailleerd overzicht van de klimlocatie, inclusief: naam en locatie, moeilijkheidsgraad (UIAA, Frans, YDS, etc.), gesteente, hoogte en routelengte, klimkwaliteit en oppervlakteomstandigheden.

### Route-info en hoogteprofiel {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/route_info_1_andr_new.png) ![Route info](@site/static/img/map/route_info_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/route_info_1_ios_new.png) ![Route info](@site/static/img/map/route_info_2_ios_new.png)

</TabItem>

</Tabs>

De volgende informatie is zichtbaar in het contextmenu:

- **Route-info**: Routenaam, OSM-link (OSM Editing-plug-in vereist), Type, Beschrijving, Afstand, Richting, Stijging/daling, Hoogtebereik, Netwerk, Exploitant, Staat, Kleur, Ronde rit, Start-/eindpunten en meer.
- **Algemeen**: Grootte, Locatie, Gemaakt op.
- **Extra info**. Toont type activiteit.
- Actieknoppen: [Opslaan als](#save-as-a-track) en [Navigatie starten](#start-navigation).
- [Hoogte-info](../../navigation/setup/route-details.md#elevation-info). Geeft informatie over de hoogtegegevens op de route.
- [Track analyseren op kaart](../../map/tracks/index.md#analyze-track-on-map). Geeft een gedetailleerde analyse van trackgegevens met grafieken en kaarten.

Tik op een van de volgende waarden in het contextmenu om de grafiek van het hoogteprofiel, de helling of de hoogtegegevens van een geselecteerde route te bekijken: **Afstand**, **Stijging**, **Daling** of **Hoogte**.

U kunt ook het *Track-tabblad* openen en overschakelen naar de *Hoogteweergave* om de volledige hoogtegrafiek van de route te zien.

**Opmerking:** Hoogtegegevens worden automatisch gegenereerd en kunnen enigszins verschillen afhankelijk van de beschikbare gegevens.

### Opslaan als track {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>

Tik op de knop **Opslaan (Downloaden)** onder [Infopaneel](../../map/tracks/track-context-menu.md#info-panel) om de route op te slaan als een *GPX-bestand*. Hiermee wordt het paneel met [Snelle acties](../../map/tracks/track-context-menu.md#track-actions) geopend, waar u toegang hebt tot trackacties zoals het wijzigen van [Uiterlijk](../../map/tracks/appearance.md), [Navigatie](../../navigation/setup/route-navigation.md) of het bewerken van [Plan een route](../../plan-route/create-route.md). Opgeslagen routes gedragen zich hetzelfde als andere tracks en zijn beschikbaar in uw trackverzameling.

### Navigatie starten {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>

Tik op de knop **Navigatie starten** in het [**Infopaneel**](../../map/tracks/track-context-menu.md#info-panel) om navigatie langs de geselecteerde OSM-route te starten.

Hiermee wordt de modus [**Navigatie per track**](../../navigation/setup/gpx-navigation.md) gestart, zodat u de route kunt volgen met spraakbegeleiding en navigatiefuncties.

### Snelle acties {#quick-actions}

U kunt aanpassen of routes worden in- of uitgeschakeld met de widget [Snelle actie](../../widgets/quick-action.md#configure-map).

## Routes zoeken {#routes-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search.png) ![Routes on the ground](@site/static/img/map/route_search_1_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_ios.png) ![Routes on the ground](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

Zoek routes met de [Zoekfunctie](../../search/index.md) op naam of door "Routes" te selecteren in de [Categorieën-sectie](../../search/search-poi.md#).

Ga naar het menu *<Translate android="true" ids="search_button"/>* of *<Translate android="true" ids="search_button,search_categories"/>* en voer uw activiteit in om te zoeken.

Navigeer naar *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* om de gewenste routes te vinden. De zoekresultaten voor routes tonen de routenaam, activiteitstype, lengte, locatie, stijging/daling (op Android) en afstand tot het dichtstbijzijnde punt.

### Routes-filters {#routes-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_2_new.png) ![Routes on the ground](@site/static/img/map/route_search_3_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_2_ios.png) ![Routes on the ground](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>

Tik in de zoekresultaten voor routes op de knop **Filters** rechtsboven om de lijst te beperken. Het Filterscherm bevat een veld **Filteren op naam**, een blok **Type** met *Bureau*, *Postfiliaal* en *Postpartner*, en **extra criteria** die afhankelijk zijn van de geselecteerde routecategorie of activiteit, aangezien elke categorie zijn eigen kenmerken en filterwaarden kan weergeven.

U kunt filters in- of uitschakelen met de schakelaars, en sommige secties bevatten *Alles weergeven* om extra waarden te tonen.

## Gerelateerde artikelen {#related-articles}

- [Kaartcontextmenu](../../map/map-context-menu.md)
- [Kaart configureren](../../map/configure-map-menu.md)
- [Tracks](../../map/tracks/index.md)
- [Trackcontextmenu](../../map/tracks/track-context-menu.md)
- [Openbaar vervoer](../public-transport.md)
- [Uiterlijk van navigatieroute](../../navigation/guidance/map-during-navigation.md#route-line-appearance)
- [POI zoeken](../../search/search-poi.md#)
- [Soorten routes](./types-of-routes.md)