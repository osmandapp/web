---
source-hash: 887e37d512e29933bbd3ee7af217024887ffcc5ac636c9ddc52e7480299a8d1b
sidebar_position: 6
title:  Kaartstijlen (Vector Kaarten)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overzicht {#overview}

Kaartstijlen definiëren hoe vector kaartgegevens worden weergegeven in OsmAnd. Een stijl beheert het visuele uiterlijk van kaartobjecten zoals wegen, gebouwen, landgebruik, water en punten van belang, inclusief kleuren, lijnpatronen en labels.

OsmAnd biedt verschillende ingebouwde stijlen die zijn geoptimaliseerd voor verschillende activiteiten. U kunt stijlen wisselen in het [Configureer kaartmenu](./configure-map-menu.md) en stijlparameters aanpassen. Vector kaartstijlen ondersteunen het wisselen tussen dag- en nachtmodus.

Naast ingebouwde stijlen ondersteunt OsmAnd aangepaste kaartstijlen. Aangepaste stijlen zijn gebaseerd op weergaveregels en kunnen worden geïmporteerd, gedeeld en gewijzigd om de informatie die u nodig hebt te benadrukken.


## Standaard Kaartstijlen {#default-map-styles}

OsmAnd biedt u veel kaartstijlen en datalagen die standaard passen. Dit gedeelte beschrijft de belangrijkste voor dag- en nachtmodi.

**Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

**iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*

### OsmAnd {#osmand}

![OsmAnd kaartstijl](@site/static/img/map/map-style-osmand-with-routes.png)  

De standaard kaartweergavestijl van OsmAnd balanceert detail en eenvoud, waardoor het ideaal is voor stedelijke en buitenverkenning. Het detailleert stedelijke kenmerken zoals straten, gebouwen en vervoersstops terwijl het visuele rommel vereenvoudigt door kaarten duidelijker te maken.  

Belangrijkste voordelen omvatten routekartering, oppervlaktekwaliteit, toegangsbeperkingen, wegmarkeringen, SAC-schaal padweergaven, sportfaciliteiten en topografische details zoals hoogtelijnen.

### Touring View {#touring-view}

![Touring view kaartstijl](@site/static/img/map/map-style-touring.png)

Touring stijl met hoog contrast en maximaal detail. Bevat alle opties van de standaard OsmAnd stijl terwijl het zoveel mogelijk detail weergeeft, in het bijzonder wegen, paden en andere manieren van reizen. Duidelijk onderscheid van wegtypen in een *touring atlas*. Geschikt voor dag, nacht en buitengebruik.

### UniRS en LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

UniRS en LightRS stijlen zijn auteursstijlen die de basis kaartinformatie weergeven maar in verschillende kleurschema's.  

- **UniRS stijl**. Deze stijl is een gewijzigde versie van de standaard om het contrast te verbeteren voor voetgangers- en fietspaden. Het behoudt het klassieke Mapnik kleurschema.  

    ![LightRS kaartstijl](@site/static/img/map/map-style-lightrs.png)

- **LightRS stijl**. Dit is een eenvoudige rijstijl met een zachte nachtmodus. Het benadrukt wegen in een contrasterende oranje kleur, dimt secundaire kaartobjecten en toont topografische kenmerken zoals hoogtelijnen.

    ![UniRS kaartstijl](@site/static/img/map/map-style-unirs.png)

### Nautisch {#nautical}

![Nautische kaartstijl](@site/static/img/map/map-style-nautical.png)

Dit is een stijl voor nautische navigatie met boeien, vuurtorens, rivierroutes, zeelijnen, markeringen, havens en nautische markeringen. Lees meer in de sectie [Nautische Kaartstijl](../plugins/nautical-charts.md#nautical-map-style).

### Marine {#marine}

![Marine kaartstijl](@site/static/img/map/map-style-marine.png)

Dit is een geavanceerde nautische kaartstijl met lichtsectoren, volledige vuurtorenkenmerken en andere gedetailleerde maritieme kenmerken voor realistische en nauwkeurige mariene navigatie. Voor meer details lees sectie [Marine Kaartstijl](../plugins/nautical-charts.md#marine-map-style).

### Winter en Ski {#winter-and-ski}

![Winter & Ski kaartstijl](@site/static/img/map/map-style-winter-ski.png)

Dit is een stijl voor skisporten die de pistes, liften en langlaufpaden beschrijft, evenals het verbergen van secundaire kaartobjecten. **Winter en Ski stijl** is ontworpen om u te helpen met wintersportnavigatie.  

U kunt de skipistes en andere details zien zoals de moeilijkheidsgraad van de pistes en liftmarkeringen. Belangrijkste voordelen omvatten de handige weergave van pistes, liften en andere ski kenmerken. Minder van de afleidende secundaire objecten van de kaart. Lees meer in het artikel [Ski Kaarten](../plugins/ski-maps.md).

### Topo {#topo}

![Topo kaartstijl](@site/static/img/map/map-style-topo.png)

Deze stijl is ontworpen voor wandelen, kamperen en fietsen in de natuur. Het bevat contrasterende wegen en natuurlijke kenmerken, verschillende typen paden, uitgebreide opties voor hoogtelijnen en aanvullende details. Het is leesbaar in de buitenlucht. De *Surface Integrity* instelling stelt u in staat om de kwaliteit van de weg te onderscheiden.

### OSM-carto {#osm-carto}

![OSM-carto kaartstijl](@site/static/img/map/map-style-osm-carto.png)

Deze stijl imiteert de standaard [OpenStreetMap web stijl](https://www.openstreetmap.org/). De broncode van de webversie is beschikbaar op [Github](https://github.com/gravitystorm/openstreetmap-carto), OsmAnd code is beschikbaar op [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Woestijn {#desert}

![Woestijn kaartstijl](@site/static/img/map/map-style-desert.png)

Ontworpen voor woestijnen en andere dunbevolkte gebieden, biedt het meer gedetailleerde kaartinformatie.

### Offroad {#offroad}

![Offroad kaartstijl](@site/static/img/map/map-style-offroad.png)

Ontworpen voor off-road navigatie, deze stijl is gebaseerd op de [Topo](#topo) kaartindeling en werkt goed met satellietbeelden als onderlaag. Het bevat dunnere hoofdwegen om paden, tracks, fietsroutes en andere off-road paden te benadrukken, waardoor het ideaal is voor het verkennen van onverharde routes in landelijke of afgelegen gebieden.

### Sneeuwscooter {#snowmobile}

![Sneeuwscooter kaartstijl](@site/static/img/map/map-style-snowmobile.png)

Aangepast voor sneeuwscooter navigatie, deze stijl benadrukt sneeuwscooter-vriendelijke paden, wegen en tracks. Het benadrukt gespecialiseerde paden in besneeuwde gebieden, biedt duidelijke navigatie over besneeuwde terreinen waar standaardwegen mogelijk niet beschikbaar zijn. 


## Aangepaste Kaartstijl {#custom-map-style}

Als u een persoonlijke of derde partij aangepaste kaartstijl hebt gemaakt volgens de [Specificatie](../../technical/osmand-file-formats/osmand-rendering-style.md), kunt u deze op uw apparaat installeren op deze manieren:

- Kopieer het `.render.xml` bestand naar uw apparaat en open het met OsmAnd.
- Gebruik de [standaard import/export dialogen](../personal/import-export.md) om weergavestijlen te exporteren of importeren. Als u een `.osf` pakket maakt, werkt het als een plugin die u met anderen kunt delen.
- Na installatie kunt u de kaartstijl selecteren vanuit het menu.

U kunt ook voorbeelden van aangepaste kaartstijlen bladeren die door andere gebruikers zijn gemaakt. Een lijst van openbaar beschikbare community stijlen is voorzien [hier](../troubleshooting/resources.md#map-styles).


## Gerelateerde Artikelen {#related-articles}

- [Kaart configureren](../map/configure-map-menu.md)
- [Vector Kaarten](../map/vector-maps.md)
- [Resources en Aanpassingen](../troubleshooting/resources.md)