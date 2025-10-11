---
source-hash: f302135b5464569dccff1ff6830993eddf7ac34c3c389eaa1f26348d90713c54
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



<InfoIncompleteArticle/>


## Übersicht {#overview}

**Suche** ist ein nützliches Werkzeug, um Orte schnell zu finden. Sie können die Suche verwenden, um einen Ort nach Adresse, Koordinaten, Points of Interest (POI) oder früheren Suchen zu finden. Die [Adresssuche](#search-address) ermöglicht es Ihnen, die gewünschte Adresse einzugeben, um einen genauen Standort zu erhalten. Die [Koordinatensuche](#search-coordinates) funktioniert mit geografischen Koordinaten wie Breiten- und Längengrad. Mit der [POI-Suche](#search-poi) können Sie nach Orten in der Nähe in bestimmten Kategorien suchen, wie z. B. Cafés, Hotels oder Tankstellen. Der [Suchverlauf](#search-history) speichert vergangene Suchen für einen schnellen Zugriff auf zuvor gefundene Orte. Die Suchfunktion erleichtert die Planung von Reisen, die Navigation in unbekanntem Gelände und das Finden von POIs in der Nähe.


## Wie zu verwenden {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Suche POI-Liste Android](@site/static/img/search/poi_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suche POI-Liste iOS](@site/static/img/search/poi_list_1_ios.png)  

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
- Suche nach Favoriten und Wegpunkten.
- Suche nach Symbolen anhand von POI-Unterkategorienamen.
- Suche nach Tracks.
- Suche nach Geschäftsstandorten und Markennamen.
- Online-Suche (Nominatim).
- URL-Suche (Google und OsmAnd).
- Suchverlauf.

<!--
***Supported formats*:**  

***Tags*** can be used as a search query. They consist of ***a key and a value***, for example:
*addr:street=StreetName*.  
To avoid confusion, sometimes the key or value is surrounded by quotation marks: **key="value" or "key"="value"**. The quotation marks and equal sign are not part of the tag content.
-->

### Sortieren der Suchergebnisse {#sorting-search-results}

OsmAnd sortiert die Suchergebnisse automatisch nach drei Hauptkriterien:

1. **Übereinstimmende Abfragen** — Ergebnisse, die exakte oder teilweise Übereinstimmungen mit den von Ihnen eingegebenen Wörtern enthalten, werden höher angezeigt.

2. **Objekttyp** - Bei der Sortierung nach Namen werden Städte und Straßen bei der Anzeige der Ergebnisse gegenüber POIs bevorzugt.

3. **Entfernung** - Wenn Ergebnisse ähnliche Übereinstimmungskriterien und Objekttypen aufweisen, werden die Ergebnisse, die dem aktuellen Standort des Benutzers am nächsten liegen, zuerst angezeigt.

***Zum Beispiel*** wird eine Suchanfrage *Postamt* zuerst die nächstgelegenen Postämter anzeigen, auch wenn es andere Elemente mit ähnlichen Namen in größerer Entfernung gibt.  

***Aktuelle Einschränkungen:***

- Es gibt keine manuelle Einstellung, um die Sortierreihenfolge der Suchergebnisse zu ändern.
- Der Sortierprozess wird von OsmAnd **automatisch verwaltet**, basierend auf den oben aufgeführten Kriterien.
- In Fällen, in denen die Suchergebnisse zu breit gefächert sind, kann OsmAnd **die angezeigten Ergebnisse auf diejenigen mit der höchsten Wortübereinstimmungsgenauigkeit beschränken**.


### Volltextsuche {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoritensuche Android](@site/static/img/search/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoritensuche iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

Sie können den gewünschten Ort auf der Karte aus der Liste der Punkte finden, die während der Eingabe einer Anfrage erscheinen.

1. Beginnen Sie, den Namen oder die Adresse in die Suchleiste einzugeben.

2. Während Sie tippen, zeigt die Liste die Punkte an, die der Anfrage am nächsten kommen, in etwa dieser Reihenfolge:
    - POI-Kategorien
    - Favoriten, POI, Routen und Wegpunkte
    - Tracks
    - Adressen
    - Karten zum Herunterladen

3. Wenn Sie einen [Markennamen](../search/search-poi.md#how-to-use) eingeben, beginnt die Liste mit Ergebnissen unter diesem Namen, sortiert nach der geringsten Entfernung.

:::note Einschränkungen der TIGER-Daten bei der Adresssuche
OsmAnd hat [**TIGER-Daten**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) in die US-Karten integriert, um Informationen über US-Adressen bereitzustellen. Der TIGER-Datensatz ist **bereichsbasiert** und enthält keine genauen Hausnummern, sodass einige Adressen fehlen oder ungenau sein können.
:::


### Auf der Karte suchen {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Suche POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Suche POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

OsmAnd ermöglicht es Ihnen, nach Punkten zu suchen, die auf einer Karte auf dem Bildschirm Ihres Geräts angezeigt werden. Um dies zu tun:

- Nutzen Sie [einen der Wege](#how-to-use), um zum Suchwerkzeug zu gelangen.
- Beginnen Sie, den Namen oder die Adresse in das Suchfeld einzugeben.
- Unter dem Sucheingabefeld erscheint ein Feld mit der Schaltfläche *Auf Karte anzeigen*.
- Tippen Sie auf diese Schaltfläche, um zur Karte zu gelangen.
- Sie können Ihre Anfrage weiterhin oben auf dem Bildschirm eingeben.


### In der Nähe suchen {#search-nearby}

![Suche Android](@site/static/img/search/search_all_near_location_andr.png)

Sie können die Suche in der Nähe eines bestimmten Ortes verwenden. Wählen Sie dazu den gewünschten Punkt [aus der Liste im Suchmenü](#full-text-search) oder wählen Sie ihn direkt auf der Karte aus. Wählen Sie im [Kartenkontextmenü](../map/map-context-menu.md#actions) *Aktionen → In der Nähe suchen*.


## Adresssuche {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Suche Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suche iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

**Adresssuche** verwendet OpenStreetMap-Daten. Diese Art der Suche ermöglicht es Ihnen, den Standort und die Richtung zu einer bestimmten Adresse aus einer bereits sortierten Liste zu finden. Lesen Sie mehr im Artikel [Adresssuche](./search-address.md).


## Suchverlauf {#search-history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Verlaufssuche](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Verlaufssuche](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Sie können den **Suchverlauf** verwenden, um erneut nach zuvor gefundenen Orten, Adressen oder häufig besuchten Orten zu suchen, ohne die Anfrage erneut eingeben zu müssen. Weitere Details finden Sie im Artikel [Suchverlauf](./search-history.md).


## POI-Suche {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Suche POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suche POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

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
- [Suchverlauf](./search-history.md)
- [POI-Suche](./search-poi.md)
- [Koordinatensuche](./search-coordinates.md)