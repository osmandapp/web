---
source-hash: dde8250578460772829e966968add9c68eaa6a84529c9781ca298152f25ce984
sidebar_position: 3
sidebar_label: Karte
title: Globale Karte auf der Website
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
Die Website *[osmand.net/map](https://osmand.net/map/)* wird derzeit entwickelt und getestet.
**Daher können sich das Layout und die Bedienung einiger Funktionen auf der Website von den in diesem Artikel beschriebenen unterscheiden.**

Wir haben das [Diskussionsthema](https://github.com/osmandapp/OsmAnd/discussions/16567) auf unserem GitHub erstellt, damit Sie dort Feedback hinterlassen können.
:::


## Überblick {#overview}

Die OsmAnd-Webkarte ist eine globale Karte, die auf [OpenStreetMap (OSM)](https://www.openstreetmap.org/) Daten basiert. Sie ermöglicht es Benutzern, ihre eigenen Daten wie Tracks und Favoriten anzuzeigen, Navigationsrouten für jedes Profil zu erstellen und auf zusätzliche Funktionen wie Wetter, öffentliche GPX-Tracks, POIs und Wikimedia-Bilder zuzugreifen. Erkunden und passen Sie Ihre Datenerfahrung direkt in Ihrem Browser an.

![OsmAnd Web all](@site/static/img/web/web_map_all.png)


## Karten Kontextmenü {#map-context-menu}

Zum Öffnen klicken Sie mit der rechten Maustaste auf eine beliebige Stelle auf der Karte. Dieses Menü enthält die folgenden Aktionen:

- **Wo bin ich** – Finden Sie schnell Ihren aktuellen Standort auf der Karte. Diese Funktion zeigt die nächstgelegenen Adressen zum ausgewählten Punkt auf der Karte an.
- **Wetter öffnen** – Greifen Sie auf das [Wettermenü](#weather-on-the-web) zu, um Wetterdetails anzuzeigen.
- **Neue Route erstellen** – Öffnet das Tool [*Route planen*](../web/planner.md#create-track-and-local) mit dem ausgewählten Ort als Start- oder Zielpunkt.
- **Favorit hinzufügen** – Ermöglicht das Erstellen und Speichern eines [Favoriten](../web/web-userdata.mdx#add--edit-favorite) an einem beliebigen Punkt auf der Karte für einfachen Zugriff.
- **Wegbeschreibung von** – Legt den ausgewählten Punkt als [Startort](../web/planner.md#navigation-route) für die Navigation fest.
- **Wegbeschreibung nach** – Legt den ausgewählten Punkt als [Ziel für die Navigation](../web/planner.md#navigation-route) fest.
- **Koordinaten kopieren** – Kopiert die Koordinaten des ausgewählten Punktes zur externen Verwendung.
- **Pin hinzufügen** – Platziert einen Pin, um einen Ort auf der Karte zu markieren. ([Beispiel](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))
- **Regionen anzeigen** – Zeigt die Regionen an, die mit dem ausgewählten Ort verbunden sind.

![Map Context menu](@site/static/img/web/map_context_menu.png)


## Wetter im Web {#weather-on-the-web}

Das OsmAnd Web bietet Wetterinformationen aus zwei Vorhersagequellen:

- **GFS (Standard)**
- **ECMWF**

Um zwischen diesen Vorhersagequellen zu wechseln, klicken Sie im Wettermenü auf die **Schaltfläche mit dem Regenschirm**.

***Funktionen des Wettermenüs:***

- **Aktuelle Wetterdaten**: Zeigt Ihre Koordinaten zusammen mit den folgenden Daten an:

  - Temperatur.
  - Niederschlag.
  - Wind.
  - Luftdruck.
  - Bewölkung.

- **Zeitanpassung**: Ändern Sie Datum und Uhrzeit mit dem **Zeitwerkzeug** im Wettermenü, um das Wetter für einen bestimmten Zeitpunkt anzuzeigen.

***Wetterschichten auf der Karte:***

- Verwenden Sie die **Schaltfläche für Ebenen**, um Wetterschichten wie:

  - Temperatur.
  - Druck.
  - Wind.
  - Bewölkung.
  - Niederschlag.

***Vorhersagen anzeigen:***

- Wettervorhersagen sind für die **7-Tage**-Vorhersage verfügbar.
- Vorhersage-Updates werden in **3-Stunden-Schritten** für detaillierte Einblicke bereitgestellt.

Um auf diese Funktionen zuzugreifen oder sie anzupassen, verwenden Sie die Menüs auf der linken oder rechten Seite der Benutzeroberfläche.

  ![OsmAnd Web Weather](@site/static/img/web/web_weather.png)

***7-Tage-Vorhersage***:

Klicken Sie im Menü auf die Vorhersagedaten, um die **7-Tage-Vorhersage** für Ihren Standort anzuzeigen. Die Vorhersage ist verfügbar in:

- **Grafikformat**
- **Listenformat**

  ![OsmAnd Web Weather](@site/static/img/web/web_7day.png)


## Karte konfigurieren Menü {#configure-map-menu}

Das Menü "Karte konfigurieren" ermöglicht Ihnen die Verwaltung der Anzeigeeinstellungen für Kartendaten wie POI-Ebenen, Favoriten, Tracks und Gelände. Bitte melden Sie sich bei Ihrem OsmAnd-Konto an, um diesen Menübereich zu nutzen.

Um dieses Menü zu öffnen, klicken Sie auf die Schaltfläche in der **oberen linken Ecke** oder greifen Sie über das **Menü** darauf zu.

- [POI-Overlay...](#poi-overlay-section). Ermöglicht die Auswahl und Anzeige der benötigten POI-Kategorien auf der Karte.
- [Favoriten](#favorites-section). Schaltet die Anzeige von Favoriten auf der Karte um.
- [Tracks](#tracks-section). Enthält GPX-Tracks, die auf der Karte sichtbar sind.
- [Gelände](#terrain-section). Aktiviert oder deaktiviert das Geländefarbschema auf der Karte.

![POIs menu](@site/static/img/web/configure_map_web.png)


### POI Overlay Bereich {#poi-overlay-section}

So zeigen Sie POIs auf der Karte an:

*Karte konfigurieren Menü → POI-Overlay...*. Hier können Sie Kategorien auswählen, die auf der Karte angezeigt werden sollen.

Alternativ können Sie den [**Suchbereich**](web-search.md) verwenden, um den gewünschten Ort zu finden.

![POIs menu](@site/static/img/web/poi_menu.png)


### Favoriten Bereich {#favorites-section}

Mit einem Klick können Sie Favoriten auf der Karte ein- oder ausschalten. Es werden jedoch nur Favoriten angezeigt, bei denen [**Auf Karte anzeigen aktiviert**](../web/web-userdata.mdx##favorites-on-the-web) ist.


### Tracks Bereich {#tracks-section}

Dieser Bereich enthält eine Liste Ihrer [**auf der Karte sichtbaren GPX-Tracks**](../web/web-userdata.mdx#visible-on-the-map) und **kürzlich sichtbaren** Tracks.

- Sie können Tracks direkt ein- oder ausschalten.
- Schalten Sie Tracks aus der Liste **Kürzlich sichtbar** ein oder aus.

Jeder Track verfügt über ein **Kontextmenü** (zugänglich über die Schaltfläche ⋮) mit den folgenden Befehlen:

- **Track ausblenden**: Blendet den aktuell sichtbaren Track von der Karte aus.
- **Track sichtbar machen**: Zeigt einen Track aus der Liste "Kürzlich sichtbar" auf der Karte an.
- **Umbenennen**: Ermöglicht das Umbenennen des Tracks zur einfacheren Identifizierung.
- **Duplizieren**: Erstellt eine Kopie des Tracks.
- **Herunterladen**: Speichert den Track auf Ihrem lokalen Gerät.
- **Löschen**: Entfernt den Track dauerhaft aus der Liste.

![Configure map menu Tracks](@site/static/img/web/configure_map_track.png)


### Gelände Bereich {#terrain-section}

Der Bereich **Gelände** ist eine kostenpflichtige Funktion <ProFeature/>. Um diese Funktion nutzen zu können, müssen Sie sich zunächst bei Ihrem OsmAnd Pro-Konto anmelden.

In diesem Bereich können Sie:

- Ein **Farbschema** für das Gelände auswählen:
  - **Schattierung**
  - **Hang**
  - **Höhe**
- Die Sichtbarkeit der ausgewählten Geländeschicht von **0% bis 100%** anpassen.

![Configure map menu Terrain](@site/static/img/web/configure_map_terrain.png)


<!--
## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->


## URL Schemata {#url-schemes}

Für die einfache Nutzung des OsmAnd-Webdienstes (und der Anwendung) können Sie direkte Links nutzen. Dies sind spezielle URLs, die es Ihnen ermöglichen, Standortdaten zu übertragen und Details zu Pins, Tracks, Wetter und mehr einzuschließen.

Diese URLs können kopiert und über jedes von Ihrem Gerät unterstützte Medium geteilt werden und sind sowohl mit den Android- als auch mit den iOS-Versionen von OsmAnd kompatibel.

1. **URL mit einem Pin auf der Karte:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_pin.png)

2. **URL ohne Pin auf der Karte:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_without.png)

3. **URL mit Navigation:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_track.png)

Abhängig von den angegebenen Parametern können URL-Strings enthalten:

- **latitude**: Breitengradwert als Zahl.
- **longitude**: Längengradwert als Zahl.
- **start-finish**: Koordinaten für die Navigation.
- **profile**: Navigationsprofil (z. B. Auto, Fahrrad).
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


> *Zuletzt aktualisiert: Januar 2025*