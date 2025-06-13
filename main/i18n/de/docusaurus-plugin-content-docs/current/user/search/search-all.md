---
source-hash: b39da87cb283fc3373cd7fc8ea9c535845d2da42231bb2b94d76bc577ea35ed4
sidebar_position: 1
title:  Alle suchen
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



<InfoIncompleteArticle/>


## Überblick {#overview}

Die **Suche** ist ein nützliches Werkzeug, um schnell Orte zu finden. Sie können die Suche verwenden, um einen Ort nach Adresse, Koordinaten, Points of Interest (POI) oder früheren Suchen zu finden. Mit der [Adresssuche](#search-address) können Sie die Adresse eingeben, um einen genauen Standort zu erhalten. Die [Koordinatensuche](#search-coordinates) funktioniert mit geografischen Koordinaten wie Breiten- und Längengrad. Mit der [POI-Suche](#search-poi) können Sie nach Orten in der Nähe in bestimmten Kategorien suchen, z. B. Cafés, Hotels oder Tankstellen. Die [Suchhistorie](#search-history) speichert frühere Suchen für den schnellen Zugriff auf zuvor gefundene Orte. Die Suchfunktion erleichtert die Reiseplanung, die Navigation in unbekanntem Gelände und das Finden von POIs in der Nähe.


## Verwendung {#how-to-use}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![POI-Liste suchen Android](@site/static/img/search/poi_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI-Liste suchen iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

Sie müssen einen der folgenden Schritte ausführen, um Ihre Suche zu starten:

- Tippen Sie auf die [Schaltfläche Suchen](../widgets/map-buttons.md#search) auf dem Bildschirm der Kartenanwendung und geben Sie Ihre Abfrage ein.

- Gehen Sie zum Haupt-*Menü → Suchen → geben Sie Ihre Suchanfrage ein*.

- Wenn Sie sich auf den Start einer Route vorbereiten, tippen Sie auf [*Navigation → Ziel festlegen → Suchfeld*](../navigation/setup/route-navigation.md#set-target-point) *→ Suchanfrage*.  


Wichtige Informationen:

- ***Heruntergeladene Offline-Vektorkarten sind erforderlich, um mit OsmAnd zu suchen***.

- Zunächst **basiert die Suche auf den Daten, die sich auf der Karte im sichtbaren Bereich des Gerätebildschirms befinden**, aber wenn dort nichts gefunden wird, bietet OsmAnd an, den Suchradius zu vergrößern.  

### Grundlegende Abfragen {#basic-queries}

***Abfrageliste*:**

- Koordinaten in allen verfügbaren Formaten.
- Adresse:
    - Straße, Hausnummer;
    - Stadt, Straße;
    - Straßenkreuzungen;
    - Stadt;
    - Tiger Daten;
    - Postleitzahl, Hausnummer;
    - Postleitzahl, Straße, Hausnummer.
- POI-Suche nach Name und Kategorie mit zusätzlichen Filtern.
- OSM-Routensuche nach Name und Kategorie mit zusätzlichen Filtern.
- Suche nach den prominentesten Gipfeln und Vulkanen.
- Suche nach Favoriten und Wegpunkten.
- Suche nach Symbolen nach POI-Unterkategorienamen.
- Suche nach Tracks.
- Suche nach Geschäftsorten und Markennamen.
- Online-Suche (Nominatim).
- URL-Suche (Google und OsmAnd).
- Suchhistorie.

<!--
***Unterstützte Formate*:**  

***Tags*** können als Suchanfrage verwendet werden. Sie bestehen aus ***einem Schlüssel und einem Wert***, zum Beispiel:
*addr:street=StreetName*.  
Um Verwechslungen zu vermeiden, wird der Schlüssel oder Wert manchmal in Anführungszeichen gesetzt: **key="value" oder "key"="value"**. Die Anführungszeichen und das Gleichheitszeichen sind nicht Teil des Tag-Inhalts.
-->

### Sortieren der Suchergebnisse {#sorting-search-results}

OsmAnd sortiert Suchergebnisse automatisch nach drei Hauptkriterien:

1. **Passende Abfragen** — Ergebnisse, die exakte oder teilweise Übereinstimmungen mit den eingegebenen Wörtern enthalten, werden höher angezeigt.

2. **Objekttyp** - Bei der Sortierung nach Namen werden Städte und Straßen bei der Anzeige der Ergebnisse gegenüber POIs priorisiert.

3. **Entfernung** - Wenn Ergebnisse ähnliche Übereinstimmungskriterien und Objekttypen aufweisen, werden die Ergebnisse, die dem aktuellen Standort des Benutzers am nächsten liegen, zuerst angezeigt.

***Zum Beispiel*** zeigt eine Suchanfrage nach *Postamt* zuerst die nächstgelegenen Postämter an, auch wenn es andere Elemente mit ähnlichen Namen in größerer Entfernung gibt.  

***Aktuelle Einschränkungen:***

- Es gibt keine manuelle Einstellung, um die Sortierreihenfolge der Suchergebnisse zu ändern.
- Der Sortiervorgang wird **automatisch von OsmAnd verwaltet**, basierend auf den oben aufgeführten Kriterien.
- In Fällen, in denen die Suchergebnisse zu breit sind, kann OsmAnd **die angezeigten Ergebnisse auf diejenigen mit der höchsten Wortübereinstimmungsgenauigkeit beschränken**.


### Volltextsuche {#full-text-search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favoritensuche Android](@site/static/img/search/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoritensuche iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

Sie können den benötigten Ort auf der Karte aus der Liste der Punkte finden, die beim Eingeben einer Abfrage erscheinen.

1. Beginnen Sie, den Namen oder die Adresse in die Suchleiste einzugeben.

2. Während Sie tippen, zeigt die Liste die Punkte an, die der Abfrage am nächsten liegen, in etwa dieser Reihenfolge:
    - POI-Kategorien
    - Favoriten, POI, Routen und Wegpunkte
    - Tracks
    - Adressen
    - Karten zum Herunterladen

3. Wenn Sie einen [Markennamen](../search/search-poi.md#how-to-use) eingeben, beginnt die Liste mit Ergebnissen nach diesem Namen, sortiert nach der nächstgelegenen Entfernung.

:::note Einschränkungen der TIGER Daten bei Adresssuchen
OsmAnd hat [**TIGER Daten**](../../technical/algorithms/trace-address-search-issues.md#trace-address-search-issues#us-address-search-and-tiger-data) in die US-Karten integriert, um Informationen über US-Adressen bereitzustellen. Der TIGER Datensatz ist **bereichsbasiert** und enthält keine genauen Hausnummern, sodass einige Adressen fehlen oder ungenau sein können.
:::


### Suche auf der Karte {#search-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![POI-Suche Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![POI-Suche iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

OsmAnd ermöglicht Ihnen die Suche nach Punkten, die auf einer Karte auf dem Bildschirm Ihres Geräts angezeigt werden. Dazu:

- Verwenden Sie [eine der Möglichkeiten](#how-to-use), um zum Suchwerkzeug zu gelangen.
- Beginnen Sie, den Namen oder die Adresse in das Suchfeld einzugeben.
- Unter dem Sucheingabefeld erscheint ein Feld mit der Schaltfläche *Auf Karte anzeigen*.
- Tippen Sie auf diese Schaltfläche, um zur Karte zu gelangen.
- Sie können Ihre Abfrage oben auf dem Bildschirm weiter eingeben.


### Suche in der Nähe {#search-nearby}

![Suche Android](@site/static/img/search/search_all_near_location_andr.png)

Sie können die Suche in der Nähe eines bestimmten Ortes verwenden. Wählen Sie dazu den gewünschten Punkt [aus der Liste im Suchmenü](#full-text-search) oder wählen Sie ihn direkt auf der Karte aus. Wählen Sie im [Kartenkontextmenü](../map/map-context-menu.md#actions) *Aktionen → In der Nähe suchen*.


## Adresssuche {#search-address}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Adresssuche Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Straßensuche iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

Die **Adresssuche** verwendet OpenStreetMap Daten. Diese Art der Suche ermöglicht es Ihnen, den Standort und die Richtung zu einer bestimmten Adresse aus einer vorsortierten Liste zu finden. Lesen Sie mehr im Artikel [Adresssuche](./search-address.md).


## Suchhistorie {#search-history}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Suchhistorie](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suchhistorie](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Sie können die **Suchhistorie** verwenden, um zuvor gefundene Orte, Adressen oder häufig besuchte Orte erneut zu suchen, ohne die Abfrage erneut eingeben zu müssen. Weitere Details finden Sie im Artikel [Suchhistorie](./search-history.md).


## POI-Suche {#search-poi}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![POI-Kategorien suchen Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI-Kategorien suchen iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

Die **POI-Suche** ist eine nach Kategorien sortierte Liste, mit der Sie Orte und Dienstleistungen in der Nähe Ihres aktuellen Standorts oder eines ausgewählten Bereichs auf der Karte leicht finden können.

- Mit der [Benutzerdefinierten POI-Suche](./search-poi.md#custom-poi-search) können Sie verschiedene POI-Kategorien kombinieren, um Ihre Suche zu vereinfachen und zu personalisieren.  
Zum Beispiel, wenn Sie mehrere Arten von Dienstleistungen in einem bestimmten Bereich oder auf einem bestimmten Abschnitt einer Route finden müssen.

- OsmAnd bietet eine [Online-Suche](./search-poi.md#online-search), die in Echtzeit funktioniert und Ihnen schnellen Zugriff auf Suchergebnisse ermöglicht.  
Sie ist praktisch, wenn Karten der Region nicht verfügbar sind, aber eine konstante und stabile Internetverbindung erforderlich ist.

- Lesen Sie den Artikel [POI-Suche](./search-poi.md) für weitere Informationen.


## Koordinatensuche {#search-coordinates}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Koordinatensuche Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Koordinatensuche iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Die Koordinatensuche liefert einen genauen Standort. Sie können präzise Koordinaten eingeben, die Sie beispielsweise aus anderen Quellen wie einer Karte, einem GPS-Gerät oder Online-Diensten erhalten haben, was besonders nützlich ist, wenn es um Orte geht, die keine genaue Adresse haben. Weitere Informationen finden Sie im Artikel [Koordinatensuche](./search-coordinates.md).


## Verwandte Artikel {#related-articles}

- [Adresssuche](./search-address.md)
- [Suchhistorie](./search-history.md)
- [POI-Suche](./search-poi.md)
- [Koordinatensuche](./search-coordinates.md)

> *Zuletzt aktualisiert: April 2025*