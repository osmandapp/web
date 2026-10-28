---
source-hash: 10cbeafd902c636e09520ab4df9f764d8c01529060c7ee38d4e0bf4ae741b6a2
sidebar_position: 1
title:  Alles durchsuchen
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<!--
<InfoIncompleteArticle/>
-->

## Übersicht {#overview}

Die **Suche** ist ein nützliches Werkzeug, um Orte schnell zu finden. Sie können die Suche verwenden, um einen Ort nach Adresse, Koordinaten, Points of Interest (POI) oder früheren Suchen zu finden. Die [Adresssuche](#search-address) ermöglicht es Ihnen, die gewünschte Adresse einzugeben, um einen genauen Standort zu erhalten. Die [Koordinatensuche](#search-coordinates) funktioniert mit geografischen Koordinaten wie Breiten- und Längengrad. Mit der [POI-Suche](#search-poi) können Sie nach Orten in der Nähe in bestimmten Kategorien suchen, wie z. B. Cafés, Hotels oder Tankstellen. Der Reiter [Erkunden](#search-explore) hebt beliebte Orte in der Nähe hervor und bietet schnellen Zugriff auf kürzlich besuchte Standorte. Die Suchfunktion erleichtert die Planung von Reisen, die Navigation in unbekanntem Gelände und das Finden von POIs in der Nähe.


## Wie zu verwenden {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI-Suchliste Android](@site/static/img/search/search_online_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI-Suchliste iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

Sie müssen einen der folgenden Schritte ausführen, um Ihre Suche zu starten:

- Tippen Sie auf die [Suchen-Schaltfläche](../widgets/map-buttons.md#search) auf dem Bildschirm der Kartenanwendung und geben Sie Ihre Anfrage ein.

- Gehen Sie zum Hauptmenü *Menü → Suchen → geben Sie Ihre Suchanfrage ein*.

- Wenn Sie eine Route vorbereiten, tippen Sie auf [*Navigation → Ziel festlegen → Suchfeld*](../navigation/setup/route-navigation.md#set-target-point) *→ Suchanfrage*.  


Wichtige Informationen:

- ***Heruntergeladene Offline-Vektorkarten sind für die Suche mit OsmAnd erforderlich***.

- Zunächst **basiert die Suche auf den Daten, die sich auf der Karte im sichtbaren Bereich des Gerätebildschirms befinden**, aber wenn dort nichts gefunden wird, bietet OsmAnd an, den Suchradius zu vergrößern.  

### Grundlegende Abfragen {#basic-queries}

***Liste der Abfragen***:

- Koordinaten in allen verfügbaren Formaten.
- Adresse:
    - Straße, Hausnummer;
    - Stadt, Straße;
    - Straßenkreuzungen;
    - Stadt;
    - TIGER-Daten;
    - Postleitzahl, Hausnummer;
    - Postleitzahl, Straße, Hausnummer.
- Suche nach POI nach Name und Kategorie mit zusätzlichen Filtern.
- Suche nach OSM-Routen nach Name und Kategorie mit zusätzlichen Filtern.
- Suche nach den markantesten Gipfeln und Vulkanen.
- Suche nach Artikeln im Reiseführer (erfordert das Herunterladen der entsprechenden Reiseführer-Datei).
- Suche nach Favoriten und Wegpunkten.
- Suche nach Symbolen anhand von POI-Unterkategorienamen.
- Suche nach Tracks.
- Suche nach Geschäftsstandorten und Markennamen.
- Online-Suche (Nominatim).
- URL-Suche (Google und OsmAnd). OsmAnd kann viele geteilte Google Maps-Links erkennen, einschließlich kurzer Links von `maps.app.goo.gl`.
- Suchverlauf.

<!--
***Supported formats*:**  

***Tags*** can be used as a search query. They consist of ***a key and a value***, for example:
*addr:street=StreetName*.  
To avoid confusion, sometimes the key or value is surrounded by quotation marks: **key="value" or "key"="value"**. The quotation marks and equal sign are not part of the tag content.
-->

### Sortieren der Suchergebnisse {#sorting-search-results}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI-Suchliste Android](@site/static/img/search/search_sort_by.webp)

OsmAnd sortiert die Suchergebnisse automatisch nach mehreren Kriterien:

1. **Übereinstimmende Abfragen** — Ergebnisse, die exakte oder teilweise Übereinstimmungen mit den von Ihnen eingegebenen Wörtern enthalten, werden höher angezeigt.

2. **Relevanz** — Objekte, deren Namen eng mit der Suchanfrage übereinstimmen, werden in der Regel höher in den Ergebnissen angezeigt.

3. **Objekttyp** — Je nach Abfrage können die Ergebnisse verschiedene Objekttypen wie Städte, Straßen, Adressen oder POIs umfassen.

4. **Entfernung** — Wenn Ergebnisse ähnliche Übereinstimmungskriterien und Objekttypen aufweisen, werden die Ergebnisse, die dem aktuellen Standort des Benutzers am nächsten liegen, zuerst angezeigt.

5. **Wichtigkeit** — Bekannte Wahrzeichen oder häufig referenzierte Orte können in den Ergebnissen höher erscheinen, wenn sie eng mit der Suchanfrage übereinstimmen.

Sie können die Sortierreihenfolge der Suchergebnisse auch manuell über den Chip *Sortieren nach* oben in der Liste der Suchergebnisse ändern. Tippen Sie auf *Sortieren nach* und wählen Sie eine der folgenden Optionen:
- **Relevanz** — Sortiert die Suchergebnisse nach Relevanz für die Suchanfrage.
- **Nächste** — Sortiert die Suchergebnisse nach Entfernung, wobei die nächstgelegenen Ergebnisse zuerst angezeigt werden.

</TabItem>

<TabItem value="ios" label="iOS">

OsmAnd sortiert die Suchergebnisse automatisch nach mehreren Kriterien:

1. **Übereinstimmende Abfragen** — Ergebnisse, die exakte oder teilweise Übereinstimmungen mit den von Ihnen eingegebenen Wörtern enthalten, werden höher angezeigt.

2. **Relevanz** — Objekte, deren Namen eng mit der Suchanfrage übereinstimmen, werden in der Regel höher in den Ergebnissen angezeigt.

3. **Objekttyp** — Je nach Abfrage können die Ergebnisse verschiedene Objekttypen wie Städte, Straßen, Adressen oder POIs umfassen.

4. **Entfernung** — Wenn Ergebnisse ähnliche Übereinstimmungskriterien und Objekttypen aufweisen, werden die Ergebnisse, die dem aktuellen Standort des Benutzers am nächsten liegen, zuerst angezeigt.

5. **Wichtigkeit** — Bekannte Wahrzeichen oder häufig referenzierte Orte können in den Ergebnissen höher erscheinen, wenn sie eng mit der Suchanfrage übereinstimmen.

***Zum Beispiel*** wird eine Suchanfrage *Postamt* zuerst die nächstgelegenen Postämter anzeigen, auch wenn es andere Elemente mit ähnlichen Namen in größerer Entfernung gibt.  

***Aktuelle Einschränkungen:***

- Es gibt keine manuelle Einstellung, um die Sortierreihenfolge der Suchergebnisse zu ändern.
- Der Sortierprozess wird von OsmAnd **automatisch verwaltet**, basierend auf den oben aufgeführten Kriterien.
- In Fällen, in denen die Suchergebnisse zu breit gefächert sind, kann OsmAnd **die angezeigten Ergebnisse auf diejenigen mit der höchsten Wortübereinstimmungsgenauigkeit beschränken**.

</TabItem>

</Tabs>


### Volltextsuche {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoritensuche Android](@site/static/img/search/favorite_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoritensuche iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

Sie können den gewünschten Ort auf der Karte aus der Liste der Punkte finden, die während der Eingabe einer Anfrage erscheinen.

1. Beginnen Sie, den Namen oder die Adresse in die Suchleiste einzugeben.

2. Während Sie tippen, zeigt die Liste die Ergebnisse an, die mit Ihrer Anfrage übereinstimmen. Die Ergebnisse werden wie im Abschnitt [Sortieren der Suchergebnisse](#sorting-search-results) beschrieben sortiert.

3. Bei der Suche nach Namen auf Android zeigt OsmAnd Chips für POI-Typen basierend auf den in den Suchergebnissen vertretenen Typen an. Tippen Sie auf einen Chip, um die Ergebnisse nach dem ausgewählten POI-Typ zu filtern. Sie können mehrere POI-Typen auswählen. Sobald ein Chip ausgewählt ist, wird er an die erste Position in der Liste verschoben. Tippen Sie erneut auf einen ausgewählten Chip, um die Auswahl aufzuheben und zu den vollständigen Suchergebnissen zurückzukehren.

4. Wenn Sie einen [Markennamen](../search/search-poi.md#how-to-use) eingeben, beginnt die Liste mit Ergebnissen unter diesem Namen, sortiert nach der geringsten Entfernung.

5. Die Suchergebnisse können auch einen [Reiseführer-Artikel](../plan-route/travel-guides.md#travel-article) enthalten. Durch Tippen darauf wird der Artikel direkt geöffnet, anstatt einen Standort auf der Karte anzuzeigen.

:::note Einschränkungen der TIGER-Daten bei der Adresssuche
OsmAnd hat [**TIGER-Daten**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) in die US-Karten integriert, um Informationen über US-Adressen bereitzustellen. Der TIGER-Datensatz ist **bereichsbasiert** und enthält keine genauen Hausnummern, sodass einige Adressen fehlen oder ungenau sein können.
:::

### Räumliche Suche {#spatial-search}

<InfoAndroidOnly/>

![Räumliche Suche](@site/static/img/search/spatial_search.webp)

Die räumliche Suche ist eine experimentelle Suchmaschine, die berücksichtigt, wo sich Objekte relativ zueinander befinden, und nicht nur, wie ihre Namen mit Ihrer Anfrage übereinstimmen. Sie hilft OsmAnd, Abfragen, die aus mehreren Teilen bestehen, wie z. B. einem Ortsnamen und einer POI-Kategorie, korrekt zu interpretieren.

Die räumliche Suche ist standardmäßig deaktiviert. Um sie zu aktivieren, gehen Sie zu den Einstellungen des [OsmAnd-Entwicklungs-Plugins](../plugins/development.md#internal-algorithms) und aktivieren Sie *Räumliche Textsuche verwenden*. Wenn aktiviert, ersetzt die räumliche Suche die Standardsuchmaschine für POI- und Adressabfragen.

Mit der räumlichen Suche können Sie:
- Nach einem POI an einem bestimmten Ort suchen. Geben Sie eine Kategorie und einen Ortsnamen in einer Abfrage ein, z. B. Hotel Berlin. Der Ortsname wird als Suchbereich verwendet, und die Kategorie wird darin gesucht.
- Nach Orten suchen, die zwei Bedingungen erfüllen. Geben Sie zwei Kategorien oder eine Kategorie und eine Eigenschaft ein, z. B. Kraftstoff Diesel oder Café Vegan, um Orte zu finden, die beide Bedingungen erfüllen. Eine Abfrage wie Kraftstoff McDonald's findet Tankstellen in der Nähe eines McDonald's. Die Reihenfolge der Wörter ist wichtig. Das erste Wort legt fest, was Sie suchen, und das zweite, was in der Nähe sein soll. Zum Beispiel findet McDonald’s Kraftstoff McDonald’s-Restaurants in der Nähe von Tankstellen.
- Um einen gefundenen Ort herum suchen. Geben Sie eine Kategorie und einen Ortsnamen ein, z. B. *Hotel Berlin*, und tippen Sie dann oben in den Suchergebnissen auf *Hotel in der Nähe von Berlin*. Der Name dieses Ortes wird zum Chip [Umgebungssuche](#search-around) hinzugefügt.
- Verwenden Sie verschiedene Formate von Straßennamen und übersetzte Kategorienamen in Ihren Abfragen.
- Erhalten Sie schnellere Ergebnisse bei der Suche nach beliebten POI-Kategorien wie Apotheke, Parkplatz oder Restaurant.

### Umgebungssuche {#search-around}

<InfoAndroidOnly/>

![Umgebungssuche](@site/static/img/search/search_around_berlin.webp)

Wenn die Kartenmitte mehr als 50 m von Ihrem Standort entfernt ist und die Karte Ihrer Position nicht folgt, wird die Suche um die Kartenmitte durchgeführt, und das Suchfeld zeigt *Suche N km entfernt*. Wenn die Kartenmitte mehr als 70 km von Ihrem Standort entfernt ist, erscheint neben dem Sortier-Chip ein Chip mit dem Suchbereich. Der Chip zeigt die ausgewählte Option an. Tippen Sie darauf und wählen Sie eine der folgenden Optionen im Menü *Umgebungssuche*:
- **Kartenmitte** — Sucht um die aktuelle Mitte der Karte. Diese Option ist standardmäßig ausgewählt.
- **Mein Standort** — Sucht um Ihren aktuellen Standort.
- **Ortsname** — Sucht um einen Ort, den Sie mit der [räumlichen Suche](#spatial-search) gefunden haben. Geben Sie z. B. *Hotel Berlin* ein und tippen Sie dann oben in den Suchergebnissen auf *Hotel in der Nähe von Berlin*. *Berlin* erscheint auf dem Chip, und Hotels um Berlin werden angezeigt. Diese Option ist nur verfügbar, wenn die räumliche Suche aktiviert ist.

### Auf der Karte suchen {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI-Suche Android](@site/static/img/search/poi_overlay_android_new.png) ![POI-Suche Android](@site/static/img/search/poi_overlay_android_new.webp)

</TabItem>

<TabItem value="ios" label="iOS">  

![POI-Suche iOS](@site/static/img/search/poi_overlay_ios_new.png) ![POI-Suche iOS](@site/static/img/search/poi_overlay_ios_new.webp)

</TabItem>

</Tabs>

OsmAnd ermöglicht es Ihnen, nach Punkten zu suchen, die auf einer Karte auf dem Bildschirm Ihres Geräts angezeigt werden. Um dies zu tun:

- Nutzen Sie [einen der Wege](#how-to-use), um zum Suchwerkzeug zu gelangen.
- Beginnen Sie, den Namen oder die Adresse in das Suchfeld einzugeben.
- Unter dem Sucheingabefeld erscheint ein Feld mit der Schaltfläche *Auf Karte anzeigen*. Auf Android erscheint die schwebende Aktionsschaltfläche (FAB) *Auf Karte anzeigen* unten auf dem Bildschirm mit den Suchergebnissen.
- Tippen Sie auf diese Schaltfläche, um zur Karte zu gelangen.
- Sie können Ihre Anfrage weiterhin oben auf dem Bildschirm eingeben.


### In der Nähe suchen {#search-nearby}

![Suche Android](@site/static/img/search/search_all_near_location_andr_new.png)

Sie können die Suche in der Nähe eines bestimmten Ortes verwenden. Wählen Sie dazu den gewünschten Punkt [aus der Liste im Suchmenü](#full-text-search) oder wählen Sie ihn direkt auf der Karte aus. Wählen Sie im [Kartenkontextmenü](../map/map-context-menu.md#actions) *Aktionen → In der Nähe suchen*.


## Adresssuche {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Suche Android](@site/static/img/search/search_address_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suche iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

Die **Adresssuche** verwendet OpenStreetMap-Daten. Diese Art der Suche ermöglicht es Ihnen, den Standort und die Richtung zu einer bestimmten Adresse aus einer bereits sortierten Liste zu finden. Lesen Sie mehr im Artikel [Adresssuche](./search-address.md).


## Erkunden-Suche {#search-explore}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Erkunden-Suche](@site/static/img/search/explore_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Verlaufssuche](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Auf Android hilft Ihnen der Reiter **Erkunden** im Suchwerkzeug, Orte in der Nähe Ihres aktuellen Standorts schnell zu entdecken und auf Ihren Verlauf zuzugreifen. Auf iOS ermöglicht Ihnen der Reiter **Verlauf**, erneut nach zuvor gefundenen Orten, Adressen oder häufig besuchten Orten zu suchen, ohne die Anfrage erneut einzugeben. Weitere Informationen finden Sie im Artikel [Erkunden-Suche](./search-history.md).


## POI-Suche {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI-Suche Android](@site/static/img/search/search_poi_categoties_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI-Suche iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

Die **POI-Suche** ist eine nach Kategorien sortierte Liste, mit der Sie leicht Orte und Dienstleistungen in der Nähe Ihres aktuellen Standorts oder eines ausgewählten Bereichs auf der Karte finden können.

- Die [Benutzerdefinierte POI-Suche](./search-poi.md#customize-poi-search) ermöglicht es Ihnen, verschiedene POI-Kategorien zu kombinieren, um Ihre Suche zu vereinfachen und zu personalisieren.  
Zum Beispiel, wenn Sie mehrere Arten von Dienstleistungen in einem bestimmten Gebiet oder auf einem bestimmten Abschnitt einer Route finden müssen.

- OsmAnd bietet eine [Online-Suche](./search-poi.md#online-search), die in Echtzeit funktioniert und Ihnen schnellen Zugriff auf Suchergebnisse ermöglicht.  
Sie ist praktisch, wenn keine Karten der Region verfügbar sind, aber eine konstante und stabile Internetverbindung erforderlich ist.

- Lesen Sie den Artikel [POI-Suche](./search-poi.md) für weitere Informationen.


## Koordinatensuche {#search-coordinates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Koordinatensuche Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Koordinatensuche iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Die Koordinatensuche liefert einen genauen Standort. Sie können präzise Koordinaten eingeben, die beispielsweise aus anderen Quellen wie einer Karte, einem GPS-Gerät oder Online-Diensten stammen, was besonders nützlich ist, wenn es um Orte geht, die keine genaue Adresse haben. Weitere Informationen finden Sie im Artikel [Koordinatensuche](./search-coordinates.md).


## Verwandte Artikel {#related-articles}

- [Adresssuche](./search-address.md)
- [Erkunden-Suche](./search-history.md)
- [POI-Suche](./search-poi.md)
- [Koordinatensuche](./search-coordinates.md)
- [Beliebte Orte](../map/popular_places.md)