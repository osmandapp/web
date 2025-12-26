---
source-hash: bdb9eac116a28f1d5dfc284cdfe30f108124a7c87fbf05c077f70e32504f6445
sidebar_position: 3
sidebar_label: Karte
title: Globale Karte auf der Webseite
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


:::info
The *[osmand.net/map](https://osmand.net/map/)* site is currently being developed and tested.  
**Therefore, the layout and operation of some functions on the site may be different from those described in this article.**

We created the [Discussion theme](https://github.com/osmandapp/OsmAnd/discussions/16567) on our GitHub so you can leave feedback there.
:::
-->


## Übersicht {#overview}

Die OsmAnd-Webkarte ist eine globale Karte, die auf Daten von [OpenStreetMap (OSM)](https://www.openstreetmap.org/) basiert. Sie ermöglicht es Benutzern, ihre eigenen Daten wie Tracks und Favoriten anzuzeigen, Navigationsrouten für jedes Profil zu erstellen und auf zusätzliche Funktionen wie Wetter, öffentliche GPX-Tracks, POIs und Wikimedia-Bilder zuzugreifen. Erkunden und passen Sie Ihr Datenerlebnis direkt in Ihrem Browser an.

![OsmAnd Web alles](@site/static/img/web/web_map_all.png)


## Kartenkontextmenü {#map-context-menu}

Um es zu öffnen, klicken Sie mit der rechten Maustaste irgendwo auf die Karte. Dieses Menü enthält die folgenden Aktionen:

- **Wo bin ich** – Finden Sie schnell Ihren aktuellen Standort auf der Karte. Diese Funktion zeigt die nächstgelegenen Adressen zum ausgewählten Punkt auf der Karte an.
- **Wetter öffnen** – Greifen Sie auf das [Wettermenü](#weather-on-the-web) zu, um Wetterdetails anzuzeigen.
- **Neue Route erstellen** – Öffnet das Werkzeug [*Route planen*](../web/planner.md#navigation-route) mit dem ausgewählten Ort als Start- oder Zielpunkt.
- **Favorit hinzufügen** – Ermöglicht es Ihnen, einen [Favoriten](../web/web-favorites.md#add--edit-favorite) an einem beliebigen Punkt auf der Karte zu erstellen und zu speichern, um einen einfachen Zugriff zu ermöglichen.
- **Route von hier** – Legt den ausgewählten Punkt als [Startort](../web/planner.md#navigation-route) für die Navigation fest.
- **Route hierher** – Legt den ausgewählten Punkt als [Zielort für die Navigation](../web/planner.md#navigation-route) fest.
- **Koordinaten kopieren** – Kopiert die Koordinaten des ausgewählten Punktes zur externen Verwendung.
- **Regionen anzeigen** – Zeigt die mit dem ausgewählten Ort verbundenen Regionen an.

<!--
- **Add pin** – Places a pin to mark a location on the map. ([Example](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))

![Map Context menu](@site/static/img/web/map_context_menu.png)

Add pin option will be added back once it becomes available again.
-->

![Kartenkontextmenü](@site/static/img/web/map_context_menu_new.png)


## Menü "Karte konfigurieren" {#configure-map-menu}

Das Menü "Karte konfigurieren" ermöglicht es Ihnen, die Anzeigeeinstellungen für Kartendaten wie POI-Ebenen, Favoriten, Tracks und Gelände zu verwalten. Dieses Menü ist verfügbar, nachdem Sie sich bei Ihrem OsmAnd-Konto angemeldet haben. Um es zu öffnen, klicken Sie auf die Schaltfläche in der **oberen linken Ecke** oder greifen Sie über das **Menü** darauf zu.

- [POI-Overlay...](#poi-overlay). Ermöglicht es Ihnen, die benötigten POI-Kategorien auszuwählen und auf der Karte anzuzeigen.
- [Favoriten](#favorites). Schaltet die Anzeige von Favoriten auf der Karte um.
- [Tracks](#tracks). Enthält GPX-Tracks, die auf der Karte sichtbar sind.  
- [Gelände](#terrain). Aktiviert oder deaktiviert das Geländefarbschema auf der Karte.

![POIs-Menü](@site/static/img/web/configure_map_web.png)


### POI-Overlay {#poi-overlay}

Die POI-Overlay-Funktion ermöglicht es Ihnen, Points of Interest (POIs) auf der Karte nach ausgewählten Kategorien anzuzeigen. Dies ist nützlich, wenn Sie Orte direkt auf der Karte durchsuchen möchten.

Um das Overlay zu öffnen: *Menü "Karte konfigurieren" → POI-Overlay*...Die Overlay-Liste enthält 18 Kategorien. Sie können eine Kategorie aktivieren oder mehrere Kategorien in beliebiger Kombination aktivieren. Wenn mindestens eine Kategorie aktiviert ist, bietet das Overlay eine Aktion **Alle abwählen**, um die Auswahl auf einmal zu löschen.

**Hinweis:** Wenn Sie nach einem bestimmten Ort suchen, können Sie auch den [**Suchbereich**](web-search.md) auf der Karte verwenden.

Sobald POIs angezeigt werden, öffnet die Auswahl eines POI-Markers auf der Karte das Detailfenster, das die für dieses Objekt verfügbaren Informationen anzeigt. Je nach POI kann es den Ortsnamen und Typ, Adresse, Kontaktfelder, OSM-bezogene Bezeichner und Koordinaten, Referenzlinks (Wikipedia, Wikidata) enthalten, wenn vorhanden. 

Für POIs mit Online-Fotos zeigt das Detailfenster einen Block **Online-Fotos** mit Vorschaubildern. *Alle anzeigen* öffnet eine Galerieansicht mit der vollständigen Fotoliste. Im Foto-Viewer zeigt OsmAnd Web Foto-Metadaten an, wenn verfügbar, einschließlich: Datum, Autor, Lizenz und Beschreibung.

Im POI-Detailfenster sind Schnellaktionen über die Aktionsschaltflächen verfügbar:
- *Zu Favoriten hinzufügen* — speichert den POI in Ihren Favoriten.
- *Teilen* — erzeugt einen teilbaren Link, der den POI direkt in OsmAnd Web öffnet. Der Link enthält den POI-Namen, Typ und Koordinaten (Pin).
- *Route von hier* — setzt den ausgewählten POI als Startpunkt und öffnet das Routenfenster, damit Sie ein Ziel und Profil wählen können.
- *Navigation* — setzt den ausgewählten POI als Zielpunkt für die Navigation.

![POIs-Menü](@site/static/img/web/poi_categories.png) ![POIs-Menü](@site/static/img/web/poi_photo_new.png)


### Favoriten {#favorites}

Mit einem Klick können Sie Favoriten auf der Karte ein- oder ausblenden. Es werden jedoch nur Favoriten angezeigt, bei denen [**Auf Karte anzeigen aktiviert**](../web/web-favorites.md#manage-favorites) ist.


### Tracks {#tracks}

Dieser Abschnitt enthält eine Liste Ihrer [**auf der Karte sichtbaren GPX-Tracks**](../web/web-tracks.md#visible-on-the-map) und **kürzlich sichtbaren** Tracks.

- Sie können Tracks direkt ein- oder ausschalten.  
- Schalten Sie Tracks aus der Liste **Kürzlich sichtbar** ein oder aus.  

Jeder Track hat ein **Kontextmenü** (zugänglich über die Schaltfläche ⋮) mit den folgenden Befehlen:

- **Track ausblenden**: Blendet den aktuell sichtbaren Track von der Karte aus.  
- **Track sichtbar machen**: Zeigt einen Track aus der Liste "Kürzlich sichtbar" auf der Karte an.  
- **Umbenennen**: Ermöglicht es Ihnen, den Track zur leichteren Identifizierung umzubenennen.  
- **Duplizieren**: Erstellt eine Kopie des Tracks.  
- **Herunterladen**: Speichert den Track auf Ihrem lokalen Gerät.  
- **Löschen**: Entfernt den Track dauerhaft aus der Liste.

![Menü "Karte konfigurieren" Tracks](@site/static/img/web/configure_map_track.png)


### Gelände {#terrain}

Der Abschnitt **Gelände** ist eine kostenpflichtige Funktion <ProFeature/>. Um diese Funktion zu nutzen, müssen Sie sich zuerst bei Ihrem OsmAnd Pro-Konto anmelden.

In diesem Abschnitt können Sie:

- Ein **Farbschema** für das Gelände wählen:
  - **Schattiertes Relief**
  - **Neigung**
  - **Höhe**
- Die Sichtbarkeit der ausgewählten Geländeschicht von **0% bis 100%** anpassen.

![Menü "Karte konfigurieren" Gelände](@site/static/img/web/configure_map_terrain.png)


## Einstellungen {#settings}

Im Web-Planer sind die *Allgemeinen Einstellungen* (Anzeigesprache, Längeneinheiten, Geschwindigkeitseinheit) für alle Benutzer verfügbar, unabhängig davon, ob Sie angemeldet sind oder nicht. Sobald Sie sich mit Ihrem OsmAnd-Konto anmelden, erscheint ein zusätzlicher Abschnitt OsmAnd Cloud im Einstellungsfeld. Sie können mehr über OsmAnd Cloud [hier](./web-cloud.md) lesen.

### Sprache {#language}

Um die Interface-Sprache zu wechseln:

*Gehen Sie zu: Menü → ⚙ Einstellungen → Anzeigesprache*

![Web Sprache](@site/static/img/web/web_language.png)

### Einheiten {#units}

*Gehen Sie zu: Menü → ⚙ Einstellungen → Längeneinheiten*  
*Gehen Sie zu: Menü → ⚙ Einstellungen → Geschwindigkeitseinheit*

Sie können auswählen, welche Einheiten für die Anzeige von Entfernung, Höhenunterschied und Geschwindigkeit auf der Karte, in Routendetails und in Messwerkzeugen verwendet werden. Dies hilft Ihnen, OsmAnd mit Ihren üblichen Gewohnheiten oder regionalen Standards konsistent zu halten.

Die Option **Längeneinheiten** definiert, wie horizontale Entfernung und Höhenunterschied angezeigt werden:
- Kilometer/Meter.
- Meilen/Fuß.
- Meilen/Meter.
- Meilen/Yard.
- Seemeilen/Meter.
- Seemeilen/Fuß. 

Zum Beispiel wird eine Entfernung von 10 km als etwa 6,21 mi angezeigt, wenn Sie eine der Meilen/...-Optionen wählen, oder als etwa 5,40 nmi, wenn Seemeilen/... ausgewählt ist.

Die Option **Geschwindigkeitseinheit** steuert, wie aktuelle Geschwindigkeit und Geschwindigkeitsbegrenzungen angezeigt werden:
- Kilometer pro Stunde.
- Meilen pro Stunde.
- Meter pro Sekunde.
- Minuten pro Meile.
- Minuten pro Kilometer.
- Seemeilen pro Stunde (Knoten). 

Zum Beispiel entspricht eine Geschwindigkeit von 90 km/h 25 m/s oder etwa 55,92 mph.

![Web Einheiten](@site/static/img/web/web_units_len.png) ![Web Einheiten](@site/static/img/web/web_units_spe.png)


<!--
## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->


## URL-Schemata {#url-schemes}

Für eine einfache Nutzung des OsmAnd-Webdienstes (und der Anwendung) können Sie direkte Links nutzen. Dies sind spezielle URLs, die es Ihnen ermöglichen, Standortdaten zu übertragen und Details zu Pins, Tracks, Wetter und mehr zu enthalten.

Diese URLs können kopiert und über jedes von Ihrem Gerät unterstützte Medium geteilt werden und sind sowohl mit der Android- als auch mit der iOS-Version von OsmAnd kompatibel.

1. **URL mit einem Pin auf der Karte:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Track erstellen](@site/static/img/plan-route/web_url_pin.png)

2. **URL ohne Pin auf der Karte:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Track erstellen](@site/static/img/plan-route/web_url_without.png)

3. **URL mit Navigation:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Track erstellen](@site/static/img/plan-route/web_url_track.png)

Abhängig von den angegebenen Parametern können URL-Zeichenfolgen enthalten:

- **latitude**: Breitengradwert als Zahl.  
- **longitude**: Längengradwert als Zahl.  
- **start-finish**: Koordinaten für die Navigation.  
- **profile**: Navigationsprofil (z.B. Auto, Fahrrad).  
- **zoom**: Zoomstufe.

4. **Wetter**&nbsp; – &nbsp;`osmand.net/map/weather`

***Zum Beispiel*** können Sie direkt auf die Wetterseite mit angegebenen Koordinaten zugreifen:  
    [`https://osmand.net/map/weather/#9/52.2394/21.0362`](https://osmand.net/map/weather/#9/52.2394/21.0362)

5. **Konto**&nbsp; – &nbsp;`osmand.net/map/account`

6. **Karte konfigurieren**&nbsp; – &nbsp;`osmand.net/map/configure/`

7. **Tracks**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

8. **Favoriten**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

9. **Einstellungen**&nbsp; – &nbsp;`osmand.net/map/settings`

10. **Route planen**&nbsp; - &nbsp;`osmand.net/map/plan`

11. Direkter Link zur aktuellen [**Erkunden-Seite**](https://osmand.net/docs/user/web/web-search#explore)&nbsp; - &nbsp;`osmand.net/map/search`


## Verwandte Artikel {#related-articles}

- [Kartenkontextmenü](../map/map-context-menu.md)
- [OsmAnd-Konto](./web-cloud.md)
- [Tracks](./web-tracks.md)
- [Favoriten](./web-favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
-->