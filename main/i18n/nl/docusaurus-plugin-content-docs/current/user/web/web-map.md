---
source-hash: bdb9eac116a28f1d5dfc284cdfe30f108124a7c87fbf05c077f70e32504f6445
sidebar_position: 3
sidebar_label: Kaart
title: Wereldkaart op de Website
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

<!--
<InfoIncompleteArticle/>


:::info
The *[osmand.net/map](https://osmand.net/map/)* site is currently being developed and tested.  
**Therefore, the layout and operation of some functions on the site may be different from those described in this article.**

We created the [Discussion theme](https://github.com/osmandapp/OsmAnd/discussions/16567) on our GitHub so you can leave feedback there.
:::
-->


## Overzicht {#overview}

De OsmAnd-webkaart is een wereldkaart gebaseerd op gegevens van [OpenStreetMap (OSM)](https://www.openstreetmap.org/). Het stelt gebruikers in staat om hun eigen gegevens te bekijken, zoals tracks en favorieten, navigatieroutes voor elk profiel te maken en toegang te krijgen tot extra functies zoals het weer, openbare GPX-tracks, POI's en Wikimedia-afbeeldingen. Verken en pas uw gegevenservaring rechtstreeks in uw browser aan.

![OsmAnd Web alles](@site/static/img/web/web_map_all.png)


## Contextmenu Kaart {#map-context-menu}

Om het te openen, klikt u met de rechtermuisknop ergens op de kaart. Dit menu bevat de volgende acties:

- **Waar ben ik** – Vind snel uw huidige locatie op de kaart. Deze functie toont de dichtstbijzijnde adressen bij het geselecteerde punt op de kaart.
- **Weer openen** – Ga naar het [Weermenu](#weather-on-the-web) om weergegevens te bekijken.
- **Nieuwe route maken** – Opent de tool [*Plan een route*](../web/planner.md#navigation-route) met de geselecteerde locatie als start- of eindpunt.
- **Favoriet toevoegen** – Hiermee kunt u een [favoriet](../web/web-favorites.md#add--edit-favorite) op elk punt op de kaart maken en opslaan voor eenvoudige toegang.
- **Route vanaf** – Stelt het geselecteerde punt in als de [startlocatie](../web/planner.md#navigation-route) voor navigatie.
- **Route naar** – Stelt het geselecteerde punt in als de [bestemming voor navigatie](../web/planner.md#navigation-route).
- **Coördinaten kopiëren** – Kopieert de coördinaten van het geselecteerde punt voor extern gebruik.
- **Regio's tonen** – Toont de regio's die bij de geselecteerde locatie horen.

<!--
- **Add pin** – Places a pin to mark a location on the map. ([Example](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))

![Map Context menu](@site/static/img/web/map_context_menu.png)

Add pin option will be added back once it becomes available again.
-->

![Contextmenu Kaart](@site/static/img/web/map_context_menu_new.png)


## Menu Kaart configureren {#configure-map-menu}

Het menu Kaart configureren stelt u in staat om de weergave-instellingen voor kaartgegevens te beheren, zoals POI-lagen, favorieten, tracks en terrein. Dit menu is beschikbaar nadat u bent ingelogd op uw OsmAnd-account. Om het te openen, klikt u op de knop in de **linkerbovenhoek** of opent u het via het **Menu**.

- [POI-overlay...](#poi-overlay). Hiermee kunt u de benodigde POI-categorieën kiezen en op de kaart weergeven.
- [Favorieten](#favorites). Schakel de weergave van favorieten op de kaart in of uit.
- [Tracks](#tracks). Bevat GPX-tracks die zichtbaar zijn op de kaart.  
- [Terrein](#terrain). Schakel het terrein-kleurenschema op de kaart in of uit.

![POI's menu](@site/static/img/web/configure_map_web.png)


### POI-overlay {#poi-overlay}

De functie POI-overlay stelt u in staat om Points of Interest (POI's) op de kaart weer te geven op basis van geselecteerde categorieën. Dit is handig wanneer u plaatsen direct op de kaart wilt doorbladeren.

Om de overlay te openen: *Menu Kaart configureren → POI-overlay*...De overlaylijst bevat 18 categorieën. U kunt één categorie inschakelen of meerdere categorieën in elke combinatie inschakelen. Wanneer ten minste één categorie is ingeschakeld, biedt de overlay een actie **Alles deselecteren** om de selectie in één keer te wissen.

**Opmerking:** Als u op zoek bent naar een specifieke plaats, kunt u ook de [**Zoeksectie**](web-search.md) op de kaart gebruiken.

Zodra POI's worden weergegeven, opent het selecteren van een POI-marker op de kaart het detailpaneel dat de beschikbare informatie voor dat object toont. Afhankelijk van de POI kan het bevatten: plaatsnaam en type, adres, contactvelden, OSM-gerelateerde identificatiegegevens en coördinaten, referentielinks (Wikipedia, Wikidata), indien aanwezig. 

Voor POI's die online foto's hebben, toont het detailpaneel een blok Online foto's met miniaturen. Toon alles opent een galerijweergave met de volledige fotolijst. In de fotoviewer toont OsmAnd Web fotometagegevens indien beschikbaar, inclusief: datum, auteur, licentie en beschrijving.

In het POI-detailpaneel zijn snelle acties beschikbaar via de actieknoppen:
- *Aan favorieten toevoegen* — slaat de POI op in uw Favorieten.
- *Delen* — genereert een deelbare link die de POI direct opent in OsmAnd Web. De link bevat de POI-naam, type en coördinaten (pin).
- *Route vanaf* — stelt de geselecteerde POI in als startpunt en opent het Routepaneel zodat u een bestemming en profiel kunt kiezen.
- *Navigatie* — stelt de geselecteerde POI in als bestemmingspunt voor navigatie.

![POI's menu](@site/static/img/web/poi_categories.png) ![POI's menu](@site/static/img/web/poi_photo_new.png)


### Favorieten {#favorites}

Met één klik kunt u favorieten op de kaart in- of uitschakelen. Echter, alleen favorieten met [**Toon op kaart ingeschakeld**](../web/web-favorites.md#manage-favorites) worden weergegeven.


### Tracks {#tracks}

Deze sectie bevat een lijst van uw [**GPX-tracks die zichtbaar zijn op de kaart**](../web/web-tracks.md#visible-on-the-map) en **Recent Zichtbare** tracks.

- U kunt tracks direct in- of uitschakelen.  
- Schakel tracks in of uit vanuit de lijst **Recent Zichtbaar**.  

Elke track heeft een **Contextmenu** (toegankelijk via de ⋮ knop) met de volgende commando's:

- **Track verbergen**: Verbergt de momenteel zichtbare track van de kaart.  
- **Track zichtbaar maken**: Toont een track uit de lijst Recent Zichtbaar op de kaart.  
- **Hernoemen**: Hiermee kunt u de track hernoemen voor eenvoudigere identificatie.  
- **Dupliceren**: Maakt een kopie van de track.  
- **Downloaden**: Slaat de track op uw lokale apparaat op.  
- **Verwijderen**: Verwijdert de track permanent uit de lijst.

![Menu Kaart configureren Tracks](@site/static/img/web/configure_map_track.png)


### Terrein {#terrain}

De sectie **Terrein** is een betaalde functie <ProFeature/>. Om deze functie te gebruiken, moet u eerst inloggen op uw OsmAnd Pro-account.

In deze sectie kunt u:

- Een **kleurenschema** voor terrein kiezen:
  - **Schaduw helling**
  - **Helling**
  - **Hoogte**
- De zichtbaarheid van de geselecteerde terreinlaag aanpassen van **0% tot 100%**.

![Menu Kaart configureren Terrein](@site/static/img/web/configure_map_terrain.png)


## Instellingen {#settings}

In de Web Planner zijn de *Algemene instellingen* (Weergavetaal, Lengte-eenheden, Snelheidseenheid) beschikbaar voor alle gebruikers, ongeacht of u bent ingelogd of niet. Zodra u inlogt met uw OsmAnd-account, verschijnt er een extra sectie OsmAnd Cloud in het Instellingspaneel. U kunt meer lezen over OsmAnd Cloud [hier](./web-cloud.md).

### Taal {#language}

Om de interfacetaal te wijzigen:

*Ga naar: Menu → ⚙ Instellingen → Weergavetaal*

![Web Taal](@site/static/img/web/web_language.png)

### Eenheden {#units}

*Ga naar: Menu → ⚙ Instellingen → Lengte-eenheden*  
*Ga naar: Menu → ⚙ Instellingen → Snelheidseenheid*

U kunt kiezen welke eenheden worden gebruikt om afstand, hoogte en snelheid weer te geven op de kaart, in routedetails en in meetgereedschappen. Dit helpt u om OsmAnd consistent te houden met uw gewone gewoonten of regionale standaarden.

De optie **Lengte-eenheden** definieert hoe horizontale afstand en hoogte worden weergegeven:
- Kilometers/meters.
- Miles/feet.
- Miles/meters.
- Miles/yards.
- Nautical miles/meters.
- Nautical miles/feet. 

Bijvoorbeeld, een afstand van 10 km wordt weergegeven als ongeveer 6,21 mi als u een van de Miles/... opties kiest, of als ongeveer 5,40 nmi wanneer Nautical miles/... is geselecteerd.

De optie **Snelheidseenheid** bepaalt hoe de huidige snelheid en snelheidslimieten worden weergegeven:
- Kilometers per hour.
- Miles per hour.
- Meters per second.
- Minutes per mile.
- Minutes per kilometer.
- Nautical miles per hour (knots). 

Bijvoorbeeld, een snelheid van 90 km/u komt overeen met 25 m/s of ongeveer 55,92 mph.

![Web Eenheden](@site/static/img/web/web_units_len.png) ![Web Eenheden](@site/static/img/web/web_units_spe.png)


<!--
## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->


## URL-schema's {#url-schemes}

Voor eenvoudig gebruik van de OsmAnd-webservice (en applicatie) kunt u gebruikmaken van directe links. Dit zijn speciale URL's waarmee u locatiegegevens kunt overdragen en details kunt opnemen over pinnen, tracks, weer en meer.

Deze URL's kunnen worden gekopieerd en gedeeld via elk medium dat door uw apparaat wordt ondersteund en zijn compatibel met zowel de Android- als de iOS-versie van OsmAnd.

1. **URL met een pin op de kaart:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Track maken](@site/static/img/plan-route/web_url_pin.png)

2. **URL zonder pin op de kaart:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Track maken](@site/static/img/plan-route/web_url_without.png)

3. **URL met navigatie:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Track maken](@site/static/img/plan-route/web_url_track.png)

Afhankelijk van de opgegeven parameters kunnen URL-strings het volgende bevatten:

- **latitude**: breedtegraadwaarde als een getal.  
- **longitude**: lengtegraadwaarde als een getal.  
- **start-finish**: coördinaten voor navigatie.  
- **profile**: navigatieprofiel (bijv. auto, fiets).  
- **zoom**: zoomniveau.

4. **Weer**&nbsp; – &nbsp;`osmand.net/map/weather`

***Bijvoorbeeld***, u kunt direct naar de weerpagina gaan met opgegeven coördinaten:  
    [`https://osmand.net/map/weather/#9/52.2394/21.0362`](https://osmand.net/map/weather/#9/52.2394/21.0362)

5. **Account**&nbsp; – &nbsp;`osmand.net/map/account`

6. **Kaart configureren**&nbsp; – &nbsp;`osmand.net/map/configure/`

7. **Tracks**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

8. **Favorieten**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

9. **Instellingen**&nbsp; – &nbsp;`osmand.net/map/settings`

10. **Plan een route**&nbsp; - &nbsp;`osmand.net/map/plan`

11. Directe link naar de huidige [**Verken-pagina**](https://osmand.net/docs/user/web/web-search#explore)&nbsp; - &nbsp;`osmand.net/map/search`


## Gerelateerde artikelen {#related-articles}

- [Contextmenu Kaart](../map/map-context-menu.md)
- [OsmAnd-account](./web-cloud.md)
- [Tracks](./web-tracks.md)
- [Favorieten](./web-favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)