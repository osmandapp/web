---
source-hash: 552b7ab98cb47cfebc8836a696e65629cc7df57f4c5ef8f5c2339517189845a0
sidebar_position: 6
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


<InfoIncompleteArticle/>


## Overzicht {#overview}

Het **Zoekmenu** is toegankelijk via het zijpaneel of de **linkerhoek 🔍** van de kaart. Het bevat:

- [Zoekbalk](#search-bar). Voer trefwoorden in om te zoeken naar specifieke locaties of nuttige plaatsen.  
- [Categorieënsectie](#categories). Blader door gecategoriseerde opties voor eenvoudiger zoeken naar POI's.  
- [Verkennen sectie](#explore). Ontdek nabijgelegen plaatsen en interessante gebieden met foto's.

![Zoekmenu](@site/static/img/web/search.png)


## Zoekbalk {#search-bar}

Klik op de **🔍 knop** om de zoekopdracht te starten. Voer een zoekopdracht in de **Zoekregel** in en klik op een POI om het [**POI Contextmenu**](#explore-poi-data) te openen, waar u de tag-informatie kunt bekijken.

Als u zoekt op **Categorienaam**, zal het eerste resultaat de categorie van die POI weergeven. Als u op een POI-categorie klikt, wordt het venster [**Categorieën Zoeken**](#categories) geopend.

![Contextmenu POI](@site/static/img/web/context_menu_poi.png)


Door op de gekozen POI op de kaart of in de resultatenlijst te klikken, wordt het **POI Contextmenu** geopend. Dit menu biedt de volgende gegevens en links:

- **Naam en Icoon**. Toont de naam en het icoon van de POI.  
- **★ Knop (*Toevoegen aan Favorieten*)**. Hiermee kunt u de gekozen POI opslaan als een [favoriet](../web/web-userdata.mdx#add--edit-favorite).  
- **🔍 Knop**. Verplaatst de kaart naar de locatie van de POI.  
- **Afstand en Richting**. Toont de afstand en richting vanaf uw locatie naar de gekozen POI.  
- **Locatie**. Toont de coördinaten van de POI.  
- **Online Foto's**. Biedt Wikimedia-gegevens met betrekking tot de POI, indien beschikbaar. Klik op *Alles Weergeven* om de [Fotogalerij](#photo-gallery) te openen.
- **Objectgegevens**. Bevat details zoals contacten, links naar sociale media, Wikipedia-links, beschrijvingen, inscripties, enz.  
- **OSM ID**. De OpenStreetMap ID van de POI.  
- **Coördinaten**. Door op de coördinaten te klikken, kunt u ze kopiëren.

![Contextmenu POI](@site/static/img/web/context_menu_poi_1.png)

## Categorieën {#categories}

U kunt één POI-categorie kiezen en weergeven op de kaart in het **Categorieënmenu**:

- Selecteer uit de **6 populairste categorieën**.  
- Of klik op **Alles Weergeven** om de volledige lijst met POI-categorieën te openen.

![Categorieën POI](@site/static/img/web/categories_poi.png)

Door op de geselecteerde POI op de kaart of in de resultatenlijst te klikken, wordt het **POI Contextmenu** geopend. Dit menu biedt de volgende gegevens en links:

- **Naam en Icoon**. Toont de naam en het icoon van de POI.  
- **★ Knop (*Toevoegen aan Favorieten*)**. Hiermee kunt u de gekozen POI opslaan als een [favoriet](../web/web-userdata.mdx#add--edit-favorite).  
- **🔍 Knop**. Verplaatst de kaart naar de locatie van de POI.  
- **Afstand en Richting**. Toont de afstand en richting vanaf uw locatie naar de gekozen POI.  
- **Locatie**. Toont de coördinaten van de POI.  
- **Online Foto's**. Biedt Wikimedia-gegevens met betrekking tot de POI, indien beschikbaar. Klik op *Alles Weergeven* om de [Fotogalerij](#photo-gallery) te openen.
- **Objectgegevens**. Bevat details zoals contacten, links naar sociale media, Wikipedia-links, beschrijvingen, inscripties, enz.  
- **OSM ID**. De OpenStreetMap ID van de POI.  
- **Coördinaten**. Door op de coördinaten te klikken, kunt u ze kopiëren.

![Contextmenu POI](@site/static/img/web/categories_poi_1.png)


## Verkennen {#explore}

De sectie **Verkennen** in het zoekmenu maakt het gemakkelijker om plaatsen te vinden en nuttige plaatsen (POI's) met hun foto's ([Wikidata-bron](https://www.wikidata.org/)) direct op de kaart te bekijken.


Om te beginnen:

1. Klik op het **🔍 icoon** om het zoektabblad te openen, dat populaire POI-categorieën en het **Verkennen** menu hieronder weergeeft.  
2. De **Verkennen** gegevens worden automatisch op de kaart weergegeven.  
3. Selecteer **"Alles Weergeven"** in de sectie Verkennen om de volledige lijst met categorieën te openen met de knop ***Filter*** bovenaan.  

   ![Verkennen menu](@site/static/img/web/explore.png)

4. Door op de knop ***Filter*** te drukken, wordt het Categorieënmenu voor "Verkennen" geopend. Om uw zoekopdracht te verfijnen, opent u het Categorieënmenu en selecteert u de items waarin u geïnteresseerd bent.  

   ![Verkennen menu](@site/static/img/web/explore_cat.png)

### POI-gegevens verkennen {#explore-poi-data}

Als u op een POI met een afbeelding klikt, wordt een nieuw contextmenu geopend dat het volgende bevat:

- **Naam en POI-tag**. Toont de naam en de algemene tag van de POI.  
- **🔍 Knop**. Verplaatst de kaart naar de locatie van de POI.  
- **Afstand en Richting**. Toont de afstand en richting vanaf uw locatie naar de gekozen POI.  
- **Locatie**. Toont de coördinaten van de POI.  
- **Beschrijving**. Biedt aanvullende informatie over de POI.  
- **Online Foto's**. Toont Wikimedia-gegevens met betrekking tot de POI, indien beschikbaar. Klik op *Alles Weergeven* om de [Fotogalerij](#photo-gallery) te openen.  
- **Objectgegevens**. Bevat details zoals contacten, links naar sociale media, Wikipedia-links, enz.  
- **OSM ID**. Toont de OpenStreetMap ID van de POI.  
- **Coördinaten**. Door op de coördinaten te klikken, kunt u ze kopiëren.

![Verkennen menu](@site/static/img/web/poi_context.png)

### Fotogalerij {#photo-gallery}

Als u op ***Alles Weergeven*** klikt in de sectie **Online Foto's** van het contextmenu, wordt de *Fotogalerij* van de geselecteerde POI geopend.  
In de *Fotogalerij* kunt u door alle foto's van de POI scrollen.  

Elke foto bevat:

- **Datum**. De datum waarop de foto is genomen of geüpload.  
- **Auteur**. De naam van de auteur van de foto.  
- **Licentie-informatie**. Details over de gebruiksrechten van de foto.  
- **Beschrijving**. Aanvullende informatie over de foto.

![Fotogalerij](@site/static/img/web/poi_photo.png)