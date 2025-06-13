---
source-hash: 576b2a6ec144f65d9bbd387b7ce25523a8a81f929e1a4c17b8d400a8c97827dd
sidebar_position: 6
sidebar_label: Suchen
title: Suchen auf der Website
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


## Überblick {#overview}

Das **Suchmenü** kann über das Seitenpanel oder die **linke Ecke 🔍** der Karte aufgerufen werden. Es enthält:

- [Suchleiste](#search-bar). Geben Sie Schlüsselwörter ein, um nach bestimmten Orten oder Points of Interest (POIs) zu suchen.
- [Kategorienbereich](#categories). Durchsuchen Sie kategorisierte Optionen für eine einfachere POI-Suche.
- [Erkunden Bereich](#explore). Entdecken Sie Orte und interessante Gebiete in der Nähe mit Fotos.

![Suchmenü](@site/static/img/web/search.png)


## Suchleiste {#search-bar}

Klicken Sie auf die **🔍 Schaltfläche**, um die Suche zu starten. Geben Sie eine Abfrage in die **Suchzeile** ein und klicken Sie auf einen POI, um das [**POI Kontextmenü**](#explore-poi-data) zu öffnen, in dem Sie die Tag-Informationen anzeigen können.

Wenn Sie nach einem **Kategoriennamen** suchen, zeigt das erste Ergebnis die Kategorie dieses POI an. Wenn Sie auf eine POI-Kategorie klicken, öffnet sich das Fenster [**Kategoriensuche**](#categories).

![Kontextmenü POI](@site/static/img/web/context_menu_poi.png)


Durch Klicken auf den ausgewählten POI auf der Karte oder in der Ergebnisliste wird das **POI Kontextmenü** geöffnet. Dieses Menü bietet die folgenden Daten und Links:

- **Name und Symbol**. Zeigt den Namen und das Symbol des POI an.
- **★ Schaltfläche (*Zu Favoriten hinzufügen*)**. Ermöglicht Ihnen, den ausgewählten POI als [Favoriten](../web/web-userdata.mdx#add--edit-favorite) zu speichern.
- **🔍 Schaltfläche**. Verschiebt die Karte zum Standort des POI.
- **Entfernung und Richtung**. Zeigt die Entfernung und Richtung von Ihrem Standort zum ausgewählten POI an.
- **Standort**. Zeigt die Koordinaten des POI an.
- **Online-Fotos**. Bietet Wikimedia Daten zum POI, falls verfügbar. Klicken Sie auf *Alle anzeigen*, um die [Fotogalerie](#photo-gallery) zu öffnen.
- **Objektdaten**. Enthält Details wie Kontakte, Social-Media-Links, Wikipedia-Links, Beschreibungen, Inschriften usw.
- **OSM-ID**. Die OpenStreetMap-ID des POI.
- **Koordinaten**. Durch Klicken auf die Koordinaten können Sie diese kopieren.

![Kontextmenü POI](@site/static/img/web/context_menu_poi_1.png)

## Kategorien {#categories}

Im **Kategorienmenü** können Sie eine POI-Kategorie auswählen und auf der Karte anzeigen lassen:

- Wählen Sie aus den **6 beliebtesten Kategorien**.
- Oder klicken Sie auf **Alle anzeigen**, um die vollständige Liste der POI-Kategorien zu öffnen.

![Kategorien POI](@site/static/img/web/categories_poi.png)

Klicken Sie auf den ausgewählten POI auf der Karte oder in der Ergebnisliste, um das **POI Kontextmenü** zu öffnen. Dieses Menü bietet die folgenden Daten und Links:

- **Name und Symbol**. Zeigt den Namen und das Symbol des POI an.
- **★ Schaltfläche (*Zu Favoriten hinzufügen*)**. Ermöglicht Ihnen, den ausgewählten POI als [Favoriten](../web/web-userdata.mdx#add--edit-favorite) zu speichern.
- **🔍 Schaltfläche**. Verschiebt die Karte zum Standort des POI.
- **Entfernung und Richtung**. Zeigt die Entfernung und Richtung von Ihrem Standort zum ausgewählten POI an.
- **Online-Fotos**. Bietet Wikimedia Daten zum POI, falls verfügbar. Klicken Sie auf *Alle anzeigen*, um die [Fotogalerie](#photo-gallery) zu öffnen.
- **Objektdaten**. Enthält Details wie Kontakte, Social-Media-Links, Wikipedia-Links, Beschreibungen, Inschriften usw.
- **OSM-ID**. Die OpenStreetMap-ID des POI.
- **Koordinaten**. Durch Klicken auf die Koordinaten können Sie diese kopieren.

![Kontextmenü POI](@site/static/img/web/categories_poi_1.png)


## Erkunden {#explore}

Der Bereich **Erkunden** im Suchmenü erleichtert das Finden von Orten und das Anzeigen von Points of Interest (POIs) mit ihren Fotos ([Wikidata-Quelle](https://www.wikidata.org/)) direkt auf der Karte.


So starten Sie:

1. Klicken Sie auf das **🔍 Symbol**, um die Suchregisterkarte zu öffnen, die beliebte POI-Kategorien und das **Erkunden** Menü darunter anzeigt.
2. Die **Erkunden** Daten werden automatisch auf der Karte angezeigt.
3. Wählen Sie im Bereich Erkunden **"Alle anzeigen"**, um die vollständige Kategorienliste mit der Schaltfläche ***Filter*** oben zu öffnen.

   ![Erkunden Menü](@site/static/img/web/explore.png)

4. Durch Drücken der Schaltfläche ***Filter*** wird das Kategorienmenü für "Erkunden" geöffnet. Um Ihre Suche zu verfeinern, öffnen Sie das Kategorienmenü und wählen Sie die gewünschten Elemente aus.

   ![Erkunden Menü](@site/static/img/web/explore_cat.png)

### POI Daten erkunden {#explore-poi-data}

Durch Klicken auf einen Bild-POI wird ein neues Kontextmenü geöffnet, das Folgendes enthält:

- **Name und POI-Tag**. Zeigt den Namen und den allgemeinen Tag des POI an.
- **🔍 Schaltfläche**. Verschiebt die Karte zum Standort des POI.
- **Entfernung und Richtung**. Zeigt die Entfernung und Richtung von Ihrem Standort zum ausgewählten POI an.
- **Standort**. Zeigt die Koordinaten des POI an.
- **Beschreibung**. Bietet zusätzliche Informationen zum POI.
- **Online-Fotos**. Zeigt Wikimedia Daten zum POI an, falls verfügbar. Klicken Sie auf *Alle anzeigen*, um die [Fotogalerie](#photo-gallery) zu öffnen.
- **Objektdaten**. Enthält Details wie Kontakte, Social-Media-Links, Wikipedia-Links usw.
- **OSM-ID**. Zeigt die OpenStreetMap-ID des POI an.
- **Koordinaten**. Durch Klicken auf die Koordinaten können Sie diese kopieren.

![Erkunden Menü](@site/static/img/web/poi_context.png)

### Fotogalerie {#photo-gallery}

Wenn Sie im Abschnitt **Online-Fotos** des Kontextmenüs auf ***Alle anzeigen*** klicken, wird die *Fotogalerie* des ausgewählten POI geöffnet.
In der *Fotogalerie* können Sie durch alle Fotos des POI scrollen.

Jedes Foto enthält:

- **Datum**. Das Datum, an dem das Foto aufgenommen oder hochgeladen wurde.
- **Autor**. Der Name des Autors des Fotos.
- **Lizenzinformationen**. Details zu den Nutzungsrechten des Fotos.
- **Beschreibung**. Zusätzliche Informationen zum Foto.

![Fotogalerie](@site/static/img/web/poi_photo.png)


> *Zuletzt aktualisiert: Januar 2025*