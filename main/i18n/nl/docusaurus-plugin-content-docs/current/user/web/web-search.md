---
source-hash: 576b2a6ec144f65d9bbd387b7ce25523a8a81f929e1a4c17b8d400a8c97827dd
sidebar_position: 6
sidebar_label: Zoeken
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


<InfoIncompleteArticle/>


## Overzicht {#overview}

Het **Zoekmenu** is toegankelijk via het zijpaneel of de **linkerhoek 🔍** van de kaart. Het bevat:

- [Zoekbalk](#search-bar). Voer trefwoorden in om te zoeken naar specifieke locaties of nuttige plaatsen.
- [Sectie Categorieën](#categories). Blader door gecategoriseerde opties voor eenvoudigere POI-zoekopdrachten.
- [Sectie Verkennen](#explore). Ontdek nabijgelegen plaatsen en interessante gebieden met foto's.

![Zoekmenu](@site/static/img/web/search.png)


## Zoekbalk {#search-bar}

Klik op de **🔍 knop** om het zoeken te starten. Voer een zoekopdracht in de **Zoekregel** in en klik op POI om het [**POI-contextmenu**](#explore-poi-data) te openen, waar u de taginformatie kunt bekijken.

Als u zoekt op **Categorienaam**, wordt het eerste resultaat de categorie van die POI weergegeven. Als u op een POI-categorie klikt, wordt het venster [**Categorieën zoeken**](#categories) geopend.

![Contextmenu POI](@site/static/img/web/context_menu_poi.png)


Als u op de gekozen POI op de kaart of in de resultatenlijst klikt, wordt het **POI-contextmenu** geopend. Dit menu biedt de volgende gegevens en links:

- **Naam en pictogram**. Toont de naam en het pictogram van de POI.
- **★ Knop (*Toevoegen aan favorieten*)**. Hiermee kunt u de gekozen POI opslaan als een [favoriet](../web/web-userdata.mdx#add--edit-favorite).
- **🔍 Knop**. Verplaatst de kaart naar de locatie van de POI.
- **Afstand en richting**. Toont de afstand en richting van uw locatie tot de gekozen POI.
- **Locatie**. Toont de coördinaten van de POI.
- **Online foto's**. Biedt Wikimedia-gegevens met betrekking tot de POI, indien beschikbaar. Klik op *Alles weergeven* om de [Fotogalerij](#photo-gallery) te openen.
- **Objectgegevens**. Bevat details zoals contacten, links naar sociale media, Wikipedia-links, beschrijvingen, inscripties, enz.
- **OSM ID**. Het OpenStreetMap ID van de POI.
- **Coördinaten**. Door op de coördinaten te klikken, kunt u deze kopiëren.

![Contextmenu POI](@site/static/img/web/context_menu_poi_1.png)

## Categorieën {#categories}

U kunt één POI-categorie op de kaart in het **Categorieënmenu** kiezen en weergeven:

- Kies uit de **6 meest populaire categorieën**.
- Of klik op **Alles weergeven** om de volledige lijst met POI-categorieën te openen.

![Categorieën POI](@site/static/img/web/categories_poi.png)

Klik op de geselecteerde POI op de kaart of in de resultatenlijst om het **POI-contextmenu** te openen. Dit menu biedt de volgende gegevens en links:

- **Naam en pictogram**. Toont de naam en het pictogram van de POI.
- **★ Knop (*Toevoegen aan favorieten*)**. Hiermee kunt u de gekozen POI opslaan als een [favoriet](../web/web-userdata.mdx#add--edit-favorite).
- **🔍 Knop**. Verplaatst de kaart naar de locatie van de POI.
- **Afstand en richting**. Toont de afstand en richting van uw locatie tot de gekozen POI.
- **Locatie**. Toont de coördinaten van de POI.
- **Online foto's**. Biedt Wikimedia-gegevens met betrekking tot de POI, indien beschikbaar. Klik op *Alles weergeven* om de [Fotogalerij](#photo-gallery) te openen.
- **Objectgegevens**. Bevat details zoals contacten, links naar sociale media, Wikipedia-links, beschrijvingen, inscripties, enz.
- **OSM ID**. Het OpenStreetMap ID van de POI.
- **Coördinaten**. Door op de coördinaten te klikken, kunt u deze kopiëren.

![Contextmenu POI](@site/static/img/web/categories_poi_1.png)


## Verkennen {#explore}

De sectie **Verkennen** in het Zoekmenu maakt het gemakkelijker om plaatsen te vinden en interessante plaatsen (POI's) met hun foto's ([Wikidata-bron](https://www.wikidata.org/)) direct op de kaart te bekijken.


Om te beginnen:

1. Klik op het **🔍 pictogram** om het zoektabblad te openen, dat populaire POI-categorieën en het **Verkennen**-menu eronder weergeeft.
2. De **Verkennen**-gegevens worden automatisch op de kaart weergegeven.
3. Selecteer **"Alles weergeven"** in de sectie Verkennen om de volledige categorieënlijst te openen met de knop ***Filter*** bovenaan.

   ![Verkennen menu](@site/static/img/web/explore.png)

4. Door op de ***Filter***-knop te drukken, wordt het Categorieënmenu voor "Verkennen" geopend. Om uw zoekopdracht te verfijnen, opent u het Categorieënmenu en selecteert u de items waarin u geïnteresseerd bent.

   ![Verkennen menu](@site/static/img/web/explore_cat.png)

### POI-gegevens verkennen {#explore-poi-data}

Als u op een afbeeldings-POI klikt, wordt een nieuw contextmenu geopend met:

- **Naam en POI-tag**. Toont de naam en algemene tag van de POI.
- **🔍 Knop**. Verplaatst de kaart naar de locatie van de POI.
- **Afstand en richting**. Toont de afstand en richting van uw locatie tot de gekozen POI.
- **Locatie**. Toont de coördinaten van de POI.
- **Beschrijving**. Biedt aanvullende informatie over de POI.
- **Online foto's**. Toont Wikimedia-gegevens met betrekking tot de POI, indien beschikbaar. Klik op *Alles weergeven* om de [Fotogalerij](#photo-gallery) te openen.
- **Objectgegevens**. Bevat details zoals contacten, links naar sociale media, Wikipedia-links, enz.
- **OSM ID**. Toont het OpenStreetMap ID van de POI.
- **Coördinaten**. Door op de coördinaten te klikken, kunt u deze kopiëren.

![Verkennen menu](@site/static/img/web/poi_context.png)

### Fotogalerij {#photo-gallery}

Als u op ***Alles weergeven*** klikt in de sectie **Online foto's** van het contextmenu, wordt de *Fotogalerij* van de geselecteerde POI geopend.
In de *Fotogalerij* kunt u door alle foto's van de POI bladeren.

Elke foto bevat:

- **Datum**. De datum waarop de foto is genomen of geüpload.
- **Auteur**. De naam van de auteur van de foto.
- **Licentie-informatie**. Details over de gebruiksrechten van de foto.
- **Beschrijving**. Aanvullende informatie over de foto.

![Fotogalerij](@site/static/img/web/poi_photo.png)


> *Laatst bijgewerkt: januari 2025*