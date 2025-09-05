---
source-hash: dde8250578460772829e966968add9c68eaa6a84529c9781ca298152f25ce984
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
**Daarom kunnen de lay-out en de werking van sommige functies op de site afwijken van de beschrijving in dit artikel.**

We hebben het [Discussiethema](https://github.com/osmandapp/OsmAnd/discussions/16567) op onze GitHub aangemaakt, zodat u daar feedback kunt achterlaten.
:::


## Overzicht {#overview}

De OsmAnd webkaart is een wereldkaart gebaseerd op [OpenStreetMap (OSM)](https://www.openstreetmap.org/) gegevens. Het stelt gebruikers in staat om hun eigen gegevens, zoals tracks en favorieten, te bekijken, navigatieroutes voor elk profiel aan te maken, en toegang te krijgen tot aanvullende functies zoals weer, openbare GPX-tracks, POI's en Wikimedia-afbeeldingen. Verken en pas uw gegevenservaring direct in uw browser aan.

![OsmAnd Web all](@site/static/img/web/web_map_all.png)


## Kaartcontextmenu {#map-context-menu}

Om het te openen, klikt u met de rechtermuisknop ergens op de kaart. Dit menu bevat de volgende acties:

- **Waar ben ik** – Vind snel uw huidige locatie op de kaart. Deze functie toont de dichtstbijzijnde adressen bij het geselecteerde punt op de kaart.
- **Open weer** – Open het [Weermenu](#weather-on-the-web) om weersdetails te bekijken.
- **Nieuwe route maken** – Opent de tool [*Route plannen*](../web/planner.md#create-track-and-local) met de geselecteerde locatie als start- of bestemmingspunt.
- **Favoriet toevoegen** – Hiermee kunt u een [favoriet](../web/web-userdata.mdx#add--edit-favorite) aanmaken en opslaan op elk punt op de kaart voor gemakkelijke toegang.
- **Route vanaf** – Stelt het geselecteerde punt in als de [startlocatie](../web/planner.md#navigation-route) voor navigatie.
- **Route naar** – Stelt het geselecteerde punt in als de [bestemming voor navigatie](../web/planner.md#navigation-route).
- **Coördinaten kopiëren** – Kopieert de coördinaten van het geselecteerde punt voor extern gebruik.
- **Speld toevoegen** – Plaatst een speld om een locatie op de kaart te markeren. ([Voorbeeld](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))
- **Regio's tonen** – Toont de regio's die bij de geselecteerde locatie horen.

![Map Context menu](@site/static/img/web/map_context_menu.png)


## Weer op het web {#weather-on-the-web}

De OsmAnd Web biedt weersinformatie van twee voorspellingsbronnen:

- **GFS (standaard)**
- **ECMWF**

Om tussen deze voorspellingsbronnen te schakelen, klikt u op de **parapluknop** in het Weermenu.

***Functies van het weermenu:***

- **Huidige weergegevens**: Toont uw coördinaten samen met de volgende gegevens:

  - Temperatuur.
  - Neerslag.
  - Wind.
  - Luchtdruk.
  - Bewolking.

- **Tijdaanpassing**: Wijzig de datum en tijd met behulp van de **tijdtool** in het Weermenu om het weer voor een specifiek moment te bekijken.

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

  ![OsmAnd Web Weather](@site/static/img/web/web_weather.png)

***7-daagse voorspelling***:

Klik op de voorspellingsgegevens in het menu om de **7-daagse voorspelling** voor uw locatie te bekijken. De voorspelling is beschikbaar in:

- **Grafiekformaat**
- **Lijstformaat**

  ![OsmAnd Web Weather](@site/static/img/web/web_7day.png)


## Kaartmenu configureren {#configure-map-menu}

Met het menu Kaart configureren kunt u de weergave-instellingen voor kaartgegevens beheren, zoals POI-lagen, Favorieten, tracks en terrein. Log in op uw OsmAnd-account om dit menugedeelte te gebruiken.

Om dit menu te openen, klikt u op de knop in de **linkerbovenhoek** of opent u het via het **Menu**.

- [POI-overlay...](#poi-overlay-section). Hiermee kunt u de gewenste POI-categorieën op de kaart kiezen en weergeven.
- [Favorieten](#favorites-section). Schakel de weergave van favorieten op de kaart in of uit.
- [Tracks](#tracks-section). Bevat GPX-tracks die zichtbaar zijn op de kaart.
- [Terrein](#terrain-section). Schakel het terreinkleurenschema op de kaart in of uit.

![POIs menu](@site/static/img/web/configure_map_web.png)


### POI-overlay sectie {#poi-overlay-section}

Om POI's op de kaart te tonen:

*Kaartmenu configureren → POI-overlay...*. Hier kunt u categorieën kiezen om op de kaart weer te geven.

Als alternatief kunt u de [**Zoeksectie**](web-search.md) gebruiken om de gewenste plaats te vinden.

![POIs menu](@site/static/img/web/poi_menu.png)


### Favorieten sectie {#favorites-section}

Met één klik kunt u favorieten op de kaart in- of uitschakelen. Echter, alleen favorieten met [**Toon op kaart ingeschakeld**](../web/web-userdata.mdx##favorites-on-the-web) worden weergegeven.


### Tracks sectie {#tracks-section}

Deze sectie bevat een lijst van uw [**GPX-tracks zichtbaar op de kaart**](../web/web-userdata.mdx#visible-on-the-map) en **Recent zichtbare** tracks.

- U kunt tracks direct in- of uitschakelen.
- Schakel tracks in of uit vanuit de lijst **Recent zichtbaar**.

Elke track heeft een **Contextmenu** (toegankelijk via de ⋮-knop) met de volgende opdrachten:

- **Track verbergen**: Verbergt de momenteel zichtbare track van de kaart.
- **Track zichtbaar maken**: Toont een track uit de lijst Recent zichtbaar op de kaart.
- **Naam wijzigen**: Hiermee kunt u de track een andere naam geven voor gemakkelijkere identificatie.
- **Dupliceren**: Maakt een kopie van de track.
- **Downloaden**: Slaat de track op uw lokale apparaat op.
- **Verwijderen**: Verwijdert de track permanent uit de lijst.

![Configure map menu Tracks](@site/static/img/web/configure_map_track.png)


### Terrein sectie {#terrain-section}

De sectie **Terrein** is een betaalde functie <ProFeature/>. Om deze functie te gebruiken, moet u eerst inloggen op uw OsmAnd Pro-account.

In deze sectie kunt u:

- Een **kleurenschema** voor terrein kiezen:
  - **Schaduw**
  - **Helling**
  - **Hoogte**
- De zichtbaarheid van de geselecteerde terreinlaag aanpassen van **0% tot 100%**.

![Configure map menu Terrain](@site/static/img/web/configure_map_terrain.png)


<!--
## Kaartstijl {#map-style}

In dit gedeelte van het menu kunt u de kaartstijl wijzigen. U kunt meer lezen over hoe u dit doet in het artikel [Vector Maps (Map Styles)](../map/vector-maps.md) voor de OsmAnd-app. De instellingen in de webversie verschillen niet.
**Enkele voorbeelden:**

- Nautische kaartstijl

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo kaartstijl

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->


## URL-schema's {#url-schemes}

Voor eenvoudig gebruik van de OsmAnd-webservice (en applicatie) kunt u gebruikmaken van directe links. Dit zijn speciale URL's waarmee u locatiegegevens kunt overdragen en details over pins, tracks, weer en meer kunt opnemen.

Deze URL's kunnen worden gekopieerd en gedeeld via elk medium dat door uw apparaat wordt ondersteund en zijn compatibel met zowel de Android- als de iOS-versie van OsmAnd.

1. **URL met een pin op de kaart:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_pin.png)

2. **URL zonder een pin op de kaart:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_without.png)

3. **URL met navigatie:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_track.png)

Afhankelijk van de opgegeven parameters kunnen URL-strings het volgende bevatten:

- **latitude**: breedtegraadwaarde als een getal.
- **longitude**: lengtegraadwaarde als een getal.
- **start-finish**: coördinaten voor navigatie.
- **profile**: navigatieprofiel (bijv. auto, fiets).
- **zoom**: zoomniveau.

4. **Weer**&nbsp; – &nbsp;`osmand.net/map/weather`

***Bijvoorbeeld***, u kunt direct de weerpagina openen met opgegeven coördinaten:
    [`https://osmand.net/map/weather/#9/52.2394/21.0362`](https://osmand.net/map/weather/#9/52.2394/21.0362)

5. **Account**&nbsp; – &nbsp;`osmand.net/map/account`

6. **Kaart configureren**&nbsp; – &nbsp;`osmand.net/map/configure/`

7. **Tracks**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

8. **Favorieten**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

9. **Instellingen**&nbsp; – &nbsp;`osmand.net/map/settings`

10. **Route plannen**&nbsp; - &nbsp;`osmand.net/map/plan`

11. Directe link naar de huidige [**Verkenpagina**](https://osmand.net/docs/user/web/web-search#explore)&nbsp; - &nbsp;`osmand.net/map/search`


> *Laatst bijgewerkt: januari 2025*