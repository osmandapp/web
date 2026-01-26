---
source-hash: 78210f205e67c24e3cb486f56f1f503a9a0c755622cff35824943b6150700ad5
sidebar_position: 10
sidebar_label:  Suche
title: Suche auf der Webseite
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


## Übersicht {#overview}

Das **Suchmenü** kann über das Seitenpanel oder das **Suchsymbol 🔍** auf der Karte aufgerufen werden. Es enthält:

- [Suchleiste](#search-bar). Geben Sie Schlüsselwörter ein, um nach bestimmten Orten oder Points of Interest zu suchen.  
- [Kategorienbereich](#categories). Durchsuchen Sie kategorisierte Optionen für eine einfachere POI-Suche.  
- [Erkunden-Bereich](#explore). Anzeigen Sie beliebte POI für das aktuelle Kartenzentrum und erkunden Sie Orte mit Fotos auf der Karte.

![Suchmenü](@site/static/img/web/search.png)

## Suchoptionen {#search-options}

### Suchleiste {#search-bar}

Verwenden Sie die **Suchleiste**, um spezifische Orte oder Points of Interest nach Namen zu finden. Klicken Sie auf das Suchsymbol, geben Sie Ihre Abfrage ein und wählen Sie ein Ergebnis aus der Liste aus. Das Auswählen eines POI öffnet das [POI-Kontextmenü](#poi-context-menu), in dem Sie Details anzeigen und Schnellaktionen verwenden können.

Wenn Sie nach einem Kategoriennamen suchen, zeigt das erste Ergebnis möglicherweise die entsprechende POI-Kategorie an. Klicken Sie auf die Kategorie, um die Ansicht [Kategoriensuche](#categories) zu öffnen.

![Suchoptionen](@site/static/img/web/search_bar.png)

### Kategorien {#categories}

Verwenden Sie **Kategorien**, um POI nach Typ zu durchsuchen und sie auf der Karte anzuzeigen. Das Menü zeigt sechs beliebte Kategorien für schnellen Zugriff. Wenn Sie mehr Optionen benötigen, klicken Sie auf Alle anzeigen, um die vollständige Liste von 18 verfügbaren Kategorien zu öffnen. Das Auswählen einer Kategorie zeigt passende POI auf der Karte an; das Auswählen eines POI öffnet das [POI-Kontextmenü](#poi-context-menu).

![Suchoptionen](@site/static/img/web/search_categories.png)

### Erkunden {#explore}

Der **Erkunden**-Bereich zeigt [beliebte Orte](https://osmand.net/docs/user/map/popular_places) mit Fotos direkt auf der Karte an. Er erstellt eine Liste von POI für das aktuelle Kartenzentrum (sortiert nach Beliebtheit) und zeigt dieselben Orte als Fotomarker auf der Karte an. Vorschau-Bilder und POI-Informationen basieren auf Wikidata/Wikimedia und verwandten Quellen, falls verfügbar.

Öffnen Sie den Such-Tab, um auf Erkunden zuzugreifen — die Erkunden-Ergebnisse werden automatisch auf der Karte angezeigt. Verwenden Sie Alle anzeigen, um die vollständige Liste der Erkunden-Kategorien zu öffnen. Sie können verfeinern, was in der Liste und auf der Karte erscheint, mit Filter, das das Erkunden-Kategorienmenü öffnet. Das Auswählen eines POI aus der Liste oder auf der Karte öffnet das [POI-Kontextmenü](#poi-context-menu).

![Suchoptionen](@site/static/img/web/search_explore.png) ![Suchoptionen](@site/static/img/web/explore_filters.png)

## POI-Kontextmenü {#poi-context-menu}

Egal welche Suchoption Sie verwenden (Suchleiste, Kategorien oder Erkunden), das Auswählen eines POI auf der Karte oder in der Ergebnisliste öffnet das POI-Kontextmenü. Das Kontextmenü ist der Hauptort, um POI-Informationen anzuzeigen und gängige Aktionen auszuführen. Es kombiniert POI-Details (wie Standort und verwandte Daten) mit Schnellaktionen (z. B. Speichern, Teilen oder Starten der Routenplanung und Navigation).

### POI-Details {#poi-details}

Das **POI-Kontextmenü** zeigt wichtige Informationen über den ausgewählten Ort an und stellt Links basierend auf den verfügbaren OSM- und Wikimedia/Wikidata-Daten bereit:
- **Name und Symbol** — zeigt den POI-Namen und sein Symbol an.
- **Entfernung und Richtung** — zeigt die Entfernung und Richtung zum POI an.
- **Standort** — zeigt die POI-Koordinaten an.
- **Beschreibung** — bietet zusätzliche Informationen über den POI, falls verfügbar (z. B. aus Wikipedia).
- **Online-Fotos** — zeigt Wikimedia-Fotos im Zusammenhang mit dem POI an, falls verfügbar. Wählen Sie Alle anzeigen aus, um die Fotogalerie zu öffnen. Wählen Sie ein Foto aus, um es in der Galerie zu öffnen (Foto-Öffnungsmodus).
- **Objektdaten** — zusätzliche POI-Informationen, einschließlich OSM-Tags und anderer Details wie Kontakte, Social-Links, Wikipedia- und Wikivoyage-Links, Beschreibungen und Inschriften (falls verfügbar).
- **OSM-ID** — der OpenStreetMap-Identifikator des POI.
- **Koordinaten** — wählen Sie die Koordinaten aus, um sie zu kopieren.

![POI-Kontextmenü](@site/static/img/web/poi_context_menu.png)

### POI-Aktionen {#poi-actions}

Das **POI-Kontextmenü** enthält Aktionsschaltflächen für gängige Aufgaben. Verwenden Sie diese Schnellaktionen, um einen Ort zu speichern, ihn zu teilen oder die Routenplanung und Navigation zu starten:
- **Zu Favoriten hinzufügen** — speichert den POI in Ihren [Favoriten](../web/web-favorites.md#add--edit-favorite).
- **Teilen** — erzeugt einen teilbaren Link, der den POI direkt in OsmAnd Web öffnet. Der Link enthält den POI-Namen, Typ und Koordinaten (Pin).
- **Richtungen von** — setzt den ausgewählten POI als Startpunkt und öffnet das Routenpanel, damit Sie ein Ziel und Profil wählen können.
- **Navigation** — setzt den ausgewählten POI als Zielpunkt für die [Navigation](../web/web-navigation.md#start-a-route).

<!--
Click the **🔍 button** to start the search. Enter a query in the **Search Line** and click on POI to open the [**POI Context Menu**](#explore-poi-data), where you can view the tags information.

If you search by **Category name**, the first result will display the category of that POI.  If you click on a POI category, the [**Categories Search**](#categories) window opens.

![Context Menu POI](@site/static/img/web/context_menu_poi.png)


Click the chosen POI on the map or in the result list opens the **POI Context Menu**. This menu provides the following data and links:

- **Name and Icon**. Displays the name and icon of the POI.  
- **★ Button (*Add to Favorites*)**. Allows you to save the chosen POI as a [favorite](../web/web-favorites.md#add--edit-favorite).  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Online Photos**. Provides Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, descriptions, inscriptions, etc.  
- **OSM ID**. The OpenStreetMap ID of the POI.  
- **Coordinates**. Clicking the coordinates allows you to copy them.

![Context Menu POI](@site/static/img/web/context_menu_poi_1.png)

## Categories {#categories}

You can choose and display one POI category on the map in the **Categories Menu**:

- Select from the **6 most popular categories**.  
- Or click **Show All** to open the full list of POI categories.

![Categories POI](@site/static/img/web/categories_poi.png)

Click the selected  POI on the map or in the results list to open the **POI Context Menu**. This menu provides the following data and links:

- **Name and Icon**. Displays the name and icon of the POI.  
- **★ Button (*Add to Favorites*)**. Allows you to save the chosen POI as a [favorite](../web/web-favorites.md#add--edit-favorite).  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Online Photos**. Provides Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, descriptions, inscriptions, etc.  
- **OSM ID**. The OpenStreetMap ID of the POI.  
- **Coordinates**. Clicking the coordinates allows you to copy them.

![Context Menu POI](@site/static/img/web/categories_poi_1.png)


## Explore {#explore}

The **Explore** section in the Search menu makes it easier to find places and view points of interest (POIs) with their photos ([Wikidata source](https://www.wikidata.org/)) directly on the map.


To get started:

1. Click the **🔍 icon** to open the search tab, which displays popular POI categories and the **Explore** menu below.  
2. The **Explore** data will automatically be displayed on the map.  
3. Select **"Show All"** in the Explore section to open the full categories list with the ***Filter*** button at the top.  

   ![Explore menu](@site/static/img/web/explore.png)

4. Pressing the ***Filter* button** opens the Categories menu for "Explore." To refine your search, open the Categories menu and select the items you are interested in.  

   ![Explore menu](@site/static/img/web/explore_cat.png)

### Explore POI data {#explore-poi-data}

Clicking on an image POI opens a new context menu that includes:

- **Name and POI Tag**. Displays the name and general tag of the POI.  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Description**. Provides additional information about the POI.  
- **Online Photos**. Displays Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).  
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, etc.  
- **OSM ID**. Displays the OpenStreetMap ID of the POI.  
- **Coordinates**. By clicking on the coordinates, you can copy them.

![Explore menu](@site/static/img/web/poi_context.png)
-->

### Fotogalerie {#photo-gallery}

Klicken Sie auf ***Alle anzeigen*** im Abschnitt **Online-Fotos** des POI-Kontextmenüs, um die *Fotogalerie* für den ausgewählten POI zu öffnen. Die Galerie ermöglicht es Ihnen, alle verfügbaren Fotos zu durchsuchen. Klicken Sie auf ein Foto, um es in einer größeren Ansicht zu öffnen (Foto-Öffnungsmodus). Verwenden Sie Zurück, um zum POI-Kontextmenü zurückzukehren.

Fotodetails umfassen:
- **Datum**. Das Datum, an dem das Foto aufgenommen oder hochgeladen wurde.  
- **Autor**. Der Name des Autors des Fotos.  
- **Lizenzinformationen**. Details zu den Nutzungsrechten des Fotos.  
- **Beschreibung**. Zusätzliche Informationen zum Foto.

![Fotogalerie](@site/static/img/web/poi_photo.png)


## Verwandte Artikel {#related-articles}

- [Alles durchsuchen](../search/search-all.md)
- [POI durchsuchen](../search/search-poi.md)
- [Karte](../web/web-map.md)