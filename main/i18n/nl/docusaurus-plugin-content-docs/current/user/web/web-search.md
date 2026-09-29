---
source-hash: cd5ee4063d6f696a2707a1c3427de7ad82005454c2015da463bd27c2e760db67
sidebar_position: 10
sidebar_label:  Zoeken
title: Zoeken op de Website
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

Het **Zoekmenu** is toegankelijk via het zijpaneel of via het zoekpictogram 🔍 op de kaart. Het bevat:

- [Zoekbalk](#search-bar). Voer trefwoorden in om te zoeken naar specifieke locaties, punten van interesse, favorieten of tracks. 
- [Categorieënsectie](#categories). Blader door gecategoriseerde opties voor eenvoudigere POI-zoekopdrachten.  
- [Verkennen sectie](#explore). Bekijk populaire POI's voor het huidige kaartcentrum en verken plaatsen met foto's op de kaart.

![Search menu](@site/static/img/web/search.png)

## Zoekopties {#search-options}

### Zoekbalk {#search-bar}

Gebruik de **Zoekbalk** om specifieke plaatsen, punten van interesse, [favorieten](../web/web-favorites.md) en [tracks](../web/web-tracks.md) op naam te vinden. Klik op het zoekpictogram, voer uw query in en selecteer een resultaat uit de lijst. Het selecteren van een POI opent het [POI-contextmenu](#poi-context-menu), terwijl het selecteren van een favoriet of track de bijbehorende details opent, waar u informatie kunt bekijken en snelle acties kunt uitvoeren.

Als u zoekt op een categorienaam, toont het eerste resultaat mogelijk de bijbehorende POI-categorie. Klik op de categorie om het [Categorieën zoeken](#categories)-venster te openen.

![Search Options](@site/static/img/web/search_bar.png)

### Categorieën {#categories}

Gebruik **Categorieën** om POI's op type te doorzoeken en ze op de kaart weer te geven. Het menu toont zes populaire categorieën voor snelle toegang. Als u meer opties nodig hebt, klikt u op Alles weergeven om de volledige lijst met 18 beschikbare categorieën te openen. Het selecteren van een categorie geeft overeenkomende POI's weer op de kaart; het selecteren van een POI opent het [POI-contextmenu](#poi-context-menu).

![Search Options](@site/static/img/web/search_categories.png)

### Verkennen {#explore}

De sectie **Verkennen** toont [populaire plaatsen](https://osmand.net/docs/user/map/popular_places) met foto's direct op de kaart. Het bouwt een lijst van POI's voor het huidige kaartcentrum (gesorteerd op populariteit) en toont dezelfde plaatsen als fotomarkers op de kaart. Preview-afbeeldingen en POI-informatie zijn gebaseerd op Wikidata/Wikimedia en gerelateerde bronnen indien beschikbaar.

Open het zoektabblad om Verkennen te openen — de Verkennen-resultaten worden automatisch op de kaart weergegeven. Gebruik Alles weergeven om de volledige lijst met Verkennen-categorieën te openen. U kunt verfijnen wat in de lijst en op de kaart verschijnt met behulp van Filter, wat het Verkennen-categorieënmenu opent. Het selecteren van een POI uit de lijst of op de kaart opent het [POI-contextmenu](#poi-context-menu).

![Search Options](@site/static/img/web/search_explore.png) ![Search Options](@site/static/img/web/explore_filters.png)

## POI-contextmenu {#poi-context-menu}

Ongeacht welke zoekoptie u gebruikt (Zoekbalk, Categorieën of Verkennen), opent het selecteren van een POI op de kaart of in de resultatenlijst het POI-contextmenu. Het contextmenu is de belangrijkste plek om POI-informatie te bekijken en veelvoorkomende acties uit te voeren. Het combineert POI-details (zoals locatie en gerelateerde gegevens) met snelle acties (bijvoorbeeld opslaan, delen of navigatie starten).

### POI-details {#poi-details}

Het **POI-contextmenu** toont belangrijke informatie over de geselecteerde plaats en biedt koppelingen op basis van de beschikbare OSM- en Wikimedia/Wikidata-gegevens:
- **Naam en pictogram** — toont de POI-naam en het pictogram ervan.
- **Afstand en richting** — toont de afstand en richting naar de POI.
- **Locatie** — toont de coördinaten van de POI.
- **Openingstijden** — toont de geparste openingstijden uit [OSM-gegevens](https://wiki.openstreetmap.org/wiki/Key:opening_hours). De huidige status wordt dynamisch weergegeven afhankelijk van de huidige tijd (bijvoorbeeld *Nu geopend*, *Gesloten* of *Open om 10:00*), en het volledige schema wordt hieronder getoond.
- **Beschrijving** — biedt aanvullende informatie over de POI indien beschikbaar (bijvoorbeeld van Wikipedia).
- **Online foto's** — toont Wikimedia-foto's gerelateerd aan de POI indien beschikbaar. Selecteer Alles weergeven om de Fotogalerij te openen. Selecteer een foto om deze te openen in de galerij (Open fotoweergave).
- **Objectgegevens** — aanvullende POI-informatie, inclusief OSM-tags en andere details zoals contacten, sociale koppelingen, Wikipedia- en Wikivoyage-koppelingen, beschrijvingen en inscripties (indien beschikbaar).
- **OSM ID** — de OpenStreetMap-identifier van de POI.
- **Coördinaten** — selecteer de coördinaten om ze te kopiëren.

![POI Context Menu](@site/static/img/web/poi_context_menu_new.png)

### POI-acties {#poi-actions}

Het **POI-contextmenu** bevat actieknoppen voor veelvoorkomende taken. Gebruik deze snelle acties om een plaats op te slaan, te delen of routeplanning en navigatie te starten:
- **Toevoegen aan Favorieten** — slaat de POI op in uw [Favorieten](../web/web-favorites.md#favorites-actions).
- **Delen** — genereert een deelbare koppeling die de POI direct opent in OsmAnd Web. De koppeling bevat de POI-naam, type en coördinaten (pin).
- **Route vanaf** — stelt de geselecteerde POI in als startpunt en opent het routepaneel zodat u een bestemming en profiel kunt kiezen.
- **Navigatie** — stelt de geselecteerde POI in als bestemmingspunt voor [navigatie](../web/web-navigation.md#start-a-route).

### Fotogalerij {#photo-gallery}

Klik op ***Alles weergeven*** in de sectie **Online foto's** van het POI-contextmenu om de *Fotogalerij* voor de geselecteerde POI te openen. De galerij laat u door alle beschikbare foto's bladeren. Klik op een foto om deze in een grotere weergave te openen (Open fotoweergave). Gebruik Terug om terug te keren naar het POI-contextmenu.

Fotodetails omvatten:
- **Datum**. De datum waarop de foto is genomen of geüpload.  
- **Auteur**. De naam van de auteur van de foto.  
- **Licentie-informatie**. Details over de gebruiksrechten van de foto.  
- **Beschrijving**. Aanvullende informatie over de foto.

![Photo Gallery](@site/static/img/web/poi_photo.png)


## Gerelateerde artikelen {#related-articles}

- [Alles zoeken](../search/search-all.md)
- [POI zoeken](../search/search-poi.md)
- [Kaart](../web/web-map.md)