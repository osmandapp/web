---
source-hash: cd5ee4063d6f696a2707a1c3427de7ad82005454c2015da463bd27c2e760db67
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


## Übersicht {#overview}

Das **Suchmenü** kann über das Seitenpanel oder das **Suchsymbol 🔍** auf der Karte aufgerufen werden. Es enthält:

- [Suchleiste](#search-bar). Geben Sie Schlüsselwörter ein, um nach bestimmten Orten, POI, Favoriten oder Tracks zu suchen.  
- [Kategorienbereich](#categories). Durchsuchen Sie kategorisierte Optionen für eine einfachere POI-Suche.  
- [Erkunden-Bereich](#explore). Anzeigen Sie beliebte POI für das aktuelle Kartenzentrum und erkunden Sie Orte mit Fotos auf der Karte.

![Suchmenü](@site/static/img/web/search.png)

## Suchoptionen {#search-options}

### Suchleiste {#search-bar}

Verwenden Sie die **Suchleiste**, um bestimmte Orte, POI, [Favoriten](../web/web-favorites.md) und [Tracks](../web/web-tracks.md) nach Namen zu finden. Klicken Sie auf das Suchsymbol, geben Sie Ihre Abfrage ein und wählen Sie ein Ergebnis aus der Liste aus. Das Auswählen eines POI öffnet das [POI-Kontextmenü](#poi-context-menu), während das Auswählen eines Favoriten oder Tracks dessen Details öffnet, in denen Sie Informationen anzeigen und Schnellaktionen verwenden können.

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

Egal welche Suchoption Sie verwenden (Suchleiste, Kategorien oder Erkunden), das Auswählen eines POI auf der Karte oder in der Ergebnisliste öffnet das POI-Kontextmenü. Das Kontextmenü ist der Hauptort, um POI-Informationen anzuzeigen und gängige Aktionen auszuführen. Es kombiniert POI-Details (wie Standort und verwandte Daten) mit Schnellaktionen (z. B. Speichern, Teilen oder Starten der Navigation).

### POI-Details {#poi-details}

Das **POI-Kontextmenü** zeigt wichtige Informationen über den ausgewählten Ort an und stellt Links basierend auf den verfügbaren OSM- und Wikimedia/Wikidata-Daten bereit:
- **Name und Symbol** — zeigt den POI-Namen und sein Symbol an.
- **Entfernung und Richtung** — zeigt die Entfernung und Richtung zum POI an.
- **Standort** — zeigt die POI-Koordinaten an.
- **Öffnungszeiten** — zeigt die geparsten Öffnungszeiten aus [OSM-Daten](https://wiki.openstreetmap.org/wiki/Key:opening_hours). Der aktuelle Status wird dynamisch je nach aktueller Zeit angezeigt (z. B. *Jetzt geöffnet*, *Geschlossen* oder *Öffnet um 10:00*), und der vollständige Zeitplan wird darunter angezeigt.
- **Beschreibung** — bietet zusätzliche Informationen über den POI, falls verfügbar (z. B. aus Wikipedia).
- **Online-Fotos** — zeigt Wikimedia-Fotos im Zusammenhang mit dem POI an, falls verfügbar. Wählen Sie Alle anzeigen aus, um die Fotogalerie zu öffnen. Wählen Sie ein Foto aus, um es in der Galerie zu öffnen (Foto-Öffnungsmodus).
- **Objektdaten** — zusätzliche POI-Informationen, einschließlich OSM-Tags und anderer Details wie Kontakte, Social-Links, Wikipedia- und Wikivoyage-Links, Beschreibungen und Inschriften (falls verfügbar).
- **OSM-ID** — der OpenStreetMap-Identifikator des POI.
- **Koordinaten** — wählen Sie die Koordinaten aus, um sie zu kopieren.

![POI-Kontextmenü](@site/static/img/web/poi_context_menu_new.png)

### POI-Aktionen {#poi-actions}

Das **POI-Kontextmenü** enthält Aktionsschaltflächen für gängige Aufgaben. Verwenden Sie diese Schnellaktionen, um einen Ort zu speichern, ihn zu teilen oder die Routenplanung und Navigation zu starten:
- **Zu Favoriten hinzufügen** — speichert den POI in Ihren [Favoriten](../web/web-favorites.md#favorites-actions).
- **Teilen** — erzeugt einen teilbaren Link, der den POI direkt in OsmAnd Web öffnet. Der Link enthält den POI-Namen, Typ und Koordinaten (Pin).
- **Richtungen von** — setzt den ausgewählten POI als Startpunkt und öffnet das Routenpanel, damit Sie ein Ziel und Profil wählen können.
- **Navigation** — setzt den ausgewählten POI als Zielpunkt für die [Navigation](../web/web-navigation.md#start-a-route).

### Fotogalerie {#photo-gallery}

Klicken Sie auf ***Alle anzeigen*** im Abschnitt **Online-Fotos** des POI-Kontextmenüs, um die *Fotogalerie* für den ausgewählten POI zu öffnen. Die Galerie ermöglicht es Ihnen, alle verfügbaren Fotos zu durchsuchen. Klicken Sie auf ein Foto aus, um es in einer größeren Ansicht zu öffnen (Foto-Öffnungsmodus). Verwenden Sie Zurück, um zum POI-Kontextmenü zurückzukehren.

Fotodetails umfassen:
- **Datum**. Das Datum, an dem das Foto aufgenommen oder hochgeladen wurde.  
- **Autor**. Der Name des Autors des Fotos.  
- **Lizenzinformationen**. Details zu den Nutzungsrechten des Foto.  
- **Beschreibung**. Zusätzliche Informationen zum Foto.

![Fotogalerie](@site/static/img/web/poi_photo.png)


## Verwandte Artikel {#related-articles}

- [Alles durchsuchen](../search/search-all.md)
- [POI durchsuchen](../search/search-poi.md)
- [Karte](../web/web-map.md)