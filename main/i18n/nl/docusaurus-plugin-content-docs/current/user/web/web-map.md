---
source-hash: d91382fd90471c35f09518fffca8df6e01494de94a597a6b8006d0c7f62c249d
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


<InfoIncompleteArticle/>

:::info
De site *[osmand.net/map](https://osmand.net/map/)* wordt momenteel ontwikkeld en getest.
**Daarom kunnen de lay-out en de werking van sommige functies op de site afwijken van wat in dit artikel wordt beschreven.**

We hebben het [Discussie-onderwerp](https://github.com/osmandapp/OsmAnd/discussions/16567) op onze GitHub aangemaakt zodat u daar feedback kunt achterlaten.
:::


## Overzicht {#overview}

De OsmAnd-webkaart is een wereldkaart gebaseerd op gegevens van [OpenStreetMap (OSM)](https://www.openstreetmap.org/). Het stelt gebruikers in staat om hun eigen gegevens te bekijken, zoals tracks en favorieten, navigatieroutes voor elk profiel te maken en toegang te krijgen tot extra functies zoals het weer, openbare GPX-tracks, POI's en Wikimedia-afbeeldingen. Verken en pas uw gegevenservaring rechtstreeks in uw browser aan.

![OsmAnd Web alles](@site/static/img/web/web_map_all.png)


## Contextmenu Kaart {#map-context-menu}

Om het te openen, klikt u met de rechtermuisknop ergens op de kaart. Dit menu bevat de volgende acties:

- **Waar ben ik** – Vind snel uw huidige locatie op de kaart. Deze functie toont de dichtstbijzijnde adressen bij het geselecteerde punt op de kaart.
- **Open weer** – Ga naar het [Weermenu](#weather-on-the-web) om weerdetails te bekijken.
- **Nieuwe route maken** – Opent de tool [*Plan een route*](../web/planner.md#navigation-route) met de geselecteerde locatie als start- of eindpunt.
- **Favoriet toevoegen** – Hiermee kunt u een [favoriet](../web/web-userdata.mdx#add--edit-favorite) op elk punt op de kaart maken en opslaan voor gemakkelijke toegang.
- **Route vanaf** – Stelt het geselecteerde punt in als de [startlocatie](../web/planner.md#navigation-route) voor navigatie.
- **Route naar** – Stelt het geselecteerde punt in als de [bestemming voor navigatie](../web/planner.md#navigation-route).
- **Coördinaten kopiëren** – Kopieert de coördinaten van het geselecteerde punt voor extern gebruik.
- **Pin toevoegen** – Plaatst een pin om een locatie op de kaart te markeren. ([Voorbeeld](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))
- **Regio's tonen** – Toont de regio's die bij de geselecteerde locatie horen.

![Contextmenu Kaart](@site/static/img/web/map_context_menu.png)


## Weer op het Web {#weather-on-the-web}

OsmAnd Web biedt weersinformatie uit twee voorspellingsbronnen:

- **GFS (standaard)**
- **ECMWF**

Om tussen deze voorspellingsbronnen te schakelen, klikt u op de **parapluknop** in het Weermenu.

***Functies van het weermenu:***

- **Huidige Weergegevens**: Toont uw coördinaten samen met de volgende gegevens:

  - Temperatuur.
  - Neerslag.
  - Wind.
  - Luchtdruk.
  - Bewolking.

- **Tijdaanpassing**: Wijzig de datum en tijd met de **tijdtool** in het Weermenu om het weer voor een specifiek moment te bekijken.

***Weerlagen op de kaart:***

- Gebruik de **lagenknop** om weerlagen te selecteren en in te schakelen, zoals:

  - Temperatuur.
  - Druk.
  - Wind.
  - Bewolking.
  - Neerslag.

***Voorspellingen bekijken:***

- Weersvoorspellingen zijn beschikbaar voor de **7-daagse** voorspelling.
- Voorspellingsupdates worden geleverd in stappen van **3 uur** voor gedetailleerde inzichten.

Om deze functies te openen of aan te passen, gebruikt u de menu's aan de linker- of rechterkant van de interface.

  ![OsmAnd Web Weer](@site/static/img/web/web_weather.png)

***7-daagse voorspelling***:

Klik op de voorspellingsgegevens in het menu om de **7-daagse voorspelling** voor uw locatie te bekijken. De voorspelling is beschikbaar in:

- **Grafiekformaat**
- **Lijstformaat**

  ![OsmAnd Web Weer](@site/static/img/web/web_7day.png)


## Menu Kaart configureren {#configure-map-menu}

Het menu Kaart configureren stelt u in staat om de weergave-instellingen voor kaartgegevens te beheren, zoals POI-lagen, Favorieten, tracks en terrein. Log in op uw OsmAnd-account om dit menugedeelte te gebruiken.

Om dit menu te openen, klikt u op de knop in de **linkerbovenhoek** of opent u het via het **Menu**.

- [POI-overlay...](#poi-overlay-section). Hiermee kunt u de benodigde POI-categorieën kiezen en op de kaart weergeven.
- [Favorieten](#favorites-section). Schakel de weergave van favorieten op de kaart in of uit.
- [Tracks](#tracks-section). Bevat GPX-tracks die zichtbaar zijn op de kaart.
- [Terrein](#terrain-section). Schakel het terrein-kleurenschema op de kaart in of uit.

![POI's menu](@site/static/img/web/configure_map_web.png)


### Sectie POI-overlay {#poi-overlay-section}

Om POI's op de kaart te tonen:

*Menu Kaart configureren → POI-overlay...*. Hier kunt u categorieën kiezen om op de kaart weer te geven.

Als alternatief kunt u de [**sectie Zoeken**](web-search.md) gebruiken om de gewenste plaats te vinden.

![POI's menu](@site/static/img/web/poi_menu.png)


### Sectie Favorieten {#favorites-section}

Met één klik kunt u favorieten op de kaart in- of uitschakelen. Alleen favorieten met [**Toon op kaart ingeschakeld**](../web/web-userdata.mdx#favorites-on-the-web) worden echter weergegeven.


### Sectie Tracks {#tracks-section}

Deze sectie bevat een lijst van uw [**GPX-tracks die zichtbaar zijn op de kaart**](../web/web-userdata.mdx#visible-on-the-map) en **Recent Zichtbare** tracks.

- U kunt tracks direct in- of uitschakelen.
- Schakel tracks in of uit vanuit de lijst **Recent Zichtbaar**.

Elke track heeft een **Contextmenu** (toegankelijk via de ⋮ knop) met de volgende commando's:

- **Verberg track**: Verbergt de momenteel zichtbare track van de kaart.
- **Maak track zichtbaar**: Toont een track uit de lijst Recent Zichtbaar op de kaart.
- **Hernoemen**: Hiermee kunt u de track hernoemen voor eenvoudigere identificatie.
- **Dupliceren**: Maakt een kopie van de track.
- **Downloaden**: Slaat de track op uw lokale apparaat op.
- **Verwijderen**: Verwijdert de track permanent uit de lijst.

![Menu Kaart configureren Tracks](@site/static/img/web/configure_map_track.png)


### Sectie Terrein {#terrain-section}

De sectie **Terrein** is een betaalde functie <ProFeature/>. Om deze functie te gebruiken, moet u eerst inloggen op uw OsmAnd Pro-account.

In deze sectie kunt u:

- Een **kleurenschema** voor terrein kiezen:
  - **Schaduw helling**
  - **Helling**
  - **Hoogte**
- De zichtbaarheid van de geselecteerde terreinlaag aanpassen van **0% tot 100%**.

![Menu Kaart configureren Terrein](@site/static/img/web/configure_map_terrain.png)


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