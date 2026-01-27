---
source-hash: efbd8cb409a1e8ef85e36e19d96eeb7a90fa212c810385f1ad6562e2e09d6d40
sidebar_position: 9
sidebar_label:  Route Plannen
title: Route Plannen op de Website
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
-->


## Overzicht {#overview}

Met de OsmAnd Web Route Planner kunt u navigatieroutes aanmaken, tracks plannen en lokale bestanden rechtstreeks vanuit uw browser beheren. Deze webtool is handig voor het maken van gedetailleerde reisroutes die u kunt synchroniseren met uw app of kunt delen met anderen.


<!--
## Navigation Route {#navigation-route}

To create a navigation route, follow these steps:

- **Right-click** on the map to add waypoints:

  - *Navigate from*. Set the starting point.
  - *Navigate to*. Set the destination.
  - *Navigate via*. Add intermediate points if needed.

- After setting the start and end points, the route will be displayed on the map.

- In the **Route** block:

  - Move the start and end points if needed.
  - Edit the waypoints and choose the desired route type (e.g., car, bicycle, walking).

  ![OsmAnd Web Create Route](@site/static/img/web/navigation.png)

- Select the appropriate **Route Profile** for different navigation options.

  ![OsmAnd Web Create Route](@site/static/img/web/profile_type.png)

- Click on the orange circles along the route to view detailed navigation instructions.

  ![OsmAnd Web Create Route](@site/static/img/web/nav_instr.png)

- To share the route, copy the URL. Example: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)

-->


## Nieuwe Route Aanmaken {#create-new-route}

Er zijn twee manieren om een nieuwe route te starten in Route plannen. De eerste optie is direct vanaf de kaart: rechtermuisklik ergens op de kaart en selecteer **Nieuwe route aanmaken**. De tweede optie is vanaf het linker paneel: klik op de knop **Track aanmaken**.

Zodra de route is aangemaakt, voeg punten direct toe op de kaart. Elke klik plaatst het volgende punt, en de planner bouwt de route tussen de punten.

![OsmAnd Web Create New Route](@site/static/img/web/create_new_route.png)

### Track Importeren {#import-track}

Als u al een trackbestand hebt, kunt u het importeren in Route plannen en doorgaan met werken eraan in de Web Planner. Klik op de knop **Track importeren** en selecteer een GPX-bestand van uw computer. Na de upload verschijnt de track in uw lokale lijst en opent deze in de planner, zodat u deze op de kaart kunt bekijken en doorgaan met bewerken en beheren in de trackpanelen.

### Lokale Bestanden {#local-files}

Alle routes en tracks die u aanmaakt of importeert in Route plannen worden toegevoegd aan de Lokale lijst in het linker paneel. Dit maakt het eenvoudiger om meerdere GPX-bestanden op één plaats te bewaren en tussen hen te schakelen tijdens het plannen.

Elk item in de lijst heeft een schakelaar waarmee u de track snel op de kaart kunt tonen of verbergen. Selecteer een track uit de lijst om deze te openen in de planner en doorgaan met werken eraan. 

![OsmAnd Web Create New Route](@site/static/img/web/local_files.png)


## Track Beheren {#manage-track}

Wanneer u een route aanmaakt of importeert in Route plannen, opent een verticaal trackpaneel. Gebruik dit paneel om het routeringsprofiel te wijzigen en de route te beheren. Klik op de profielbesturing om het dialoogvenster **Profiel wijzigen** te openen, selecteer het profiel dat u nodig hebt (bijvoorbeeld Auto, Fiets of Voetganger), en kies hoe u het wilt toepassen: *Volgende segmenten* past het profiel alleen toe op nieuwe delen die vanaf dit punt worden toegevoegd, terwijl *Alle segmenten* de gehele route herberekent met het geselecteerde profiel.

Vanuit het trackpaneel kunt u ook veelvoorkomende bestandsacties uitvoeren. U kunt **Opslaan in Cloud** om de route voor later gebruik te bewaren, **GPX downloaden** om het als bestand te exporteren, **Track sluiten** om het bewerken te stoppen, of **Track verwijderen** om het uit uw lokale lijst te verwijderen. Deze acties zijn ook beschikbaar vanuit de bijbehorende besturingselementen in het [Info-paneel](#info-panel).

![OsmAnd Web Manage Track](@site/static/img/web/manage_track_new.png) ![OsmAnd Web Manage Track](@site/static/img/web/change_profile.png)


## Trackdetails Panelen {#track-details-panels}

Het lokale trackmenu bevat drie panelen: **Info**, **Track** en **Routepunten**. Gebruik ze om trackinformatie te bekijken en routepunten en waypoints te beheren.

### Info-paneel {#info-panel}

Het Info-paneel vat de geselecteerde track samen en toont belangrijke route- en hoogtegegevens. Het bevat een snel overzicht van de routestatistieken, plus grafieken en aanvullende trackanalyse op basis van beschikbare kaarengegevens.

Het samenvattingsgedeelte toont:

- Punten — het aantal routepunten dat is gebruikt om de route op te bouwen.
- Afstand — de totale routelengte.
- Stijging / daling — totale stijging en totale daling langs de route.
- Hoogte (min/gem/max) — hoogte-statistieken voor de route.
- Als hoogtegegevens ontbreken of moeten worden bijgewerkt, gebruik Hoogte (Satelliet) → herberekenen om de hoogte te herbouwen met behulp van satellietgegevens (indien beschikbaar).

Onder de samenvatting biedt het paneel grafieken:

- Hoogte — een hoogteprofiel van de route.
- Helling — een hellingsgrafiek die gradiëntveranderingen langs de track toont.

Voor aanvullende trackdetails, open de analysesecties:

- Oppervlak — toont oppervlaktypes langs de route op basis van OSM-gegevens.
- Gladheid — toont segmentgladheid op basis van OSM-tags.

Veelvoorkomende trackacties zoals opslaan, downloaden, sluiten en verwijderen zijn ook beschikbaar in dit paneel.

![OsmAnd Web Info Panel](@site/static/img/web/info_panel.png) ![OsmAnd Web Manage Track](@site/static/img/web/info_panel_2.png)

### Track-paneel {#track-panel}

Het Track-paneel toont de lijst van routepunten die zijn gebruikt om de track op te bouwen. Gebruik het om de routestructuur te beoordelen en te bewerken: sleep punten om ze te herordenen, verwijder punten met behulp van het verwijderpictogram, of gebruik Punten wissen om alle punten te verwijderen en opnieuw te beginnen.

![OsmAnd Web Track Panel](@site/static/img/web/track_panel.png)

### Routepunten-paneel {#waypoints-panel}

Het Routepunten-paneel wordt gebruikt om waypoints voor de geselecteerde track te bekijken en te beheren. Waypoints kunnen worden toegevoegd vanuit het contextmenu van de kaart — rechtermuisklik op de kaart en kies de optie om **Waypoint toevoegen**, vul vervolgens de waypointdetails in (zoals naam, pictogram en kleur) en sla het op.

In de Routepunten-lijst kunt u beheren of waypoints op de kaart worden weergegeven en individuele waypoints verwijderen indien nodig. Om alle waypoints van de track tegelijk te verwijderen, gebruik *Alle waypoints wissen*.

![OsmAnd Web Waypoints Panel](@site/static/img/web/waypoints_panel.png)


## Gerelateerde Artikelen {#related-articles}

- [Een Route Plannen](../plan-route/create-route.md)
- [Reisgidsen](../plan-route/travel-guides.md)
- [Navigatie](../web/web-navigation.md)