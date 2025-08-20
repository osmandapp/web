---
source-hash: 0c3b5e8e7cf6ef6e151b2af4c26f3e274170841399bcaf73871ab607bf13fd43
sidebar_position: 8
title: Beliebte Orte
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


<InfoIncompleteArticle/>


## Überblick {#overview}

Die Funktion **Beliebte Orte** in OsmAnd hebt bemerkenswerte Sehenswürdigkeiten und Attraktionen hervor, indem sie offene strukturierte Daten von [Wikidata](https://www.wikidata.org) und [Wikipedia](https://www.wikipedia.org/) verwendet. Sie hilft Benutzern, bekannte Reiseziele mit mehrsprachigen Beschreibungen und Fotos zu erkunden.

Jeder in dieser Funktion enthaltene Ort ist mit einer **Wikidata-ID** verknüpft, die es OsmAnd ermöglicht, verifizierte Namen, Vorschaubilder und Links zu Wikipedia-Artikeln anzuzeigen. Dieses Tool zeigt **nicht** alle OpenStreetMap (OSM)-Punkte an. Es ist auf POIs mit Wikidata-Referenzen beschränkt.

Derzeit umfasst die kuratierte Datenbank weltweit etwa **50.000 bis 150.000 am besten bewertete Orte**, ausgewählt aus über **1 Million** Wikidata + OSM-Objekten.

:::note
*Dies ist die erste Version der Funktion "Beliebte Orte". Feedback ist auf [GitHub](https://github.com/osmandapp/OsmAnd) willkommen*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Beliebte Orte](@site/static/img/map/popular_places/popular_places.png) ![Beliebte Orte](@site/static/img/map/popular_places/popular_places_1.png)

</TabItem>

</Tabs>


### Datenquellen

**Beliebte Orte** basieren auf strukturierten Inhalten von [Wikidata](https://www.wikidata.org) und [Wikipedia](https://www.wikipedia.org/).

Es werden nur POIs mit einer verknüpften **Wikidata-ID** angezeigt. Diese IDs verbinden Kartenobjekte mit verifizierten Namen, Beschreibungen und Bildern.

Den Wikidata-Link können Sie direkt im [Karten-Kontextmenü](../map/map-context-menu.md) einsehen. Durch Antippen des Wikidata-Tags wird die vollständige Objektseite auf der Wikidata-Website geöffnet.

Erfahren Sie, wie Sie eine Wikidata-ID finden: [Wikipedia: Eine Wikidata-ID finden](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


## Verwendung {#how-to-use}

<InfoAndroidOnly/>

Die Funktion **Beliebte Orte** umfasst sowohl eine kuratierte Liste von Sehenswürdigkeiten in der Nähe als auch eine Ebene von Wikipedia-basierten POIs auf der Karte.

Es gibt zwei Hauptmöglichkeiten, auf diese Funktion zuzugreifen:

- **Kostenlose Version**  
  Zugriff über die [Suche](#explore-in-search), um Orte in der Nähe in der Listenansicht zu erkunden.  
  *<Translate android="true" ids="android_button_seq"/>*. Gehe zu: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

- **Bezahlte Versionen** *(Maps+ und OsmAnd Pro)*  
  Aktivieren Sie die visuelle Überlagerung in den [Karte konfigurieren](#enable-layer).  
  *<Translate android="true" ids="android_button_seq"/>*. Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*  

  In diesem Modus erscheinen beliebte POIs direkt auf der Karte mit Miniaturansichten und Wikipedia-Inhalten.

  Sie können in den Überlagerungseinstellungen zwischen **Online-** und **Offline-** Wikipedia-Quellen wechseln. Weitere Informationen finden Sie unter [Ebene aktivieren](#enable-layer).


## Erkunden in der Suche {#explore-in-search}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

![Erkundungsmodus](@site/static/img/map/popular_places/popular_places_search.png)  
![Erkundungsmodus](@site/static/img/map/popular_places/popular_places_search_2.png)

</TabItem>

</Tabs>

Der Abschnitt **<Translate android="true" ids="popular_places_nearby"/>** zeigt eine scrollbare Liste der am besten bewerteten Sehenswürdigkeiten in der Nähe Ihres aktuellen Standorts an. Jeder Eintrag enthält:

- Name des Ortes.
- Kurze Beschreibung.
- POI-Kategorie-Tag.
- Entfernung und Richtung.
- Miniaturbild (falls verfügbar).

Tippen Sie auf **Alle anzeigen**, um die vollständige Liste anzuzeigen, oder auf **Auf Karte anzeigen**, um alle aufgelisteten POIs auf der Karte anzuzeigen.

Durch Antippen eines Ortes wird das [POI-Kontextmenü](./map-context-menu.md) geöffnet, in dem Sie Fotos in der Vorschau anzeigen und auf verwandte [Wikipedia-Inhalte](../plugins/wikipedia.md) zugreifen können.

:::tip
Der suchbasierte Erkundungsmodus funktioniert in der kostenlosen Version **nur online**.  
Um ihn **offline** zu nutzen, benötigen Sie ein [Maps+- oder OsmAnd Pro-Abonnement](../purchases/android.md) und heruntergeladene [Wikipedia-Karten](../plugins/wikipedia.md).
:::


## Ebene aktivieren {#enable-layer}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>**. Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Menü „Beliebte Orte“](@site/static/img/map/popular_places/popular_places_menu.png)

</TabItem>

</Tabs>

Die Funktion **Beliebte Orte (Wikipedia)** ist im Menü [Karte konfigurieren](./configure-map-menu.md) verfügbar. Um beliebte Orte direkt auf der Karte anzuzeigen, aktivieren Sie die POI-Ebene mit Daten aus Wikipedia unter Verwendung von Wikidata-Bildern.

Bevor Sie diese Funktion verwenden:

- Stellen Sie sicher, dass das [Wikipedia-Plugin](../plugins/wikipedia.md) aktiviert ist.
- Laden Sie Wikipedia-Daten für Ihre Region herunter, wenn Sie diese offline verwenden möchten.

### Ebenenoptionen

Nach der Aktivierung stehen folgende Optionen zur Verfügung:

- **<Translate android="true" ids="poi_osmwiki"/>** – Wikipedia-POIs auf der Karte ein-/ausschalten.

- **POI-Quelle** – Wechseln zwischen:
  - *Offline-Modus* (Wikipedia-Artikel müssen heruntergeladen werden).
  - *Nur Online-Modus* (verwendet Live-Daten und Bilder).

- **<Translate android="true" ids="shared_string_language"/>** – Wählen Sie die Sprache für Wikipedia-Beschreibungen.

- **<Translate android="true" ids="show_image_previews"/>** – Bildminiaturen von Wikidata neben POIs anzeigen.

Durch Antippen eines POI auf der Karte wird das [POI-Kontextmenü](./map-context-menu.md) geöffnet, in dem Sie [Online-Fotos](#online-photos) anzeigen und auf verknüpfte [Wikipedia-Artikel](../plugins/wikipedia.md) zugreifen können.


## Online-Fotos {#online-photos}

*<Translate android="true" ids="help_article_map_map_context_menu_name,online_photos"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online-Fotos Kontextmenü Android](@site/static/img/map/popular_places/online_photos_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online-Fotos Kontextmenü iOS](@site/static/img/map/popular_places/online_photos_ios.png)

</TabItem>

</Tabs>

Dies ist ein Abschnitt innerhalb des [POI-Kontextmenüs](./map-context-menu.md), der eine Fotovorschau des ausgewählten beliebten Ortes (Wikipedia) anzeigt. Sie können horizontal scrollen, um die verfügbaren Fotos zu durchsuchen, oder auf ein beliebiges Bild tippen, um es im [Vollbildmodus](#gallery) zu öffnen.

Erfahren Sie mehr über zusätzliche Optionen in den Abschnitten [Aktionen](#actions) und [Galerie](#gallery).


<!-- 

When you tap a Popular Place on the map or from the list, the [POI context menu](./map-context-menu.md) includes an **Online Photos** section with a horizontal preview of images.

- Tap any photo to view it in fullscreen.  
- Swipe to browse more images.

For more actions like sharing, viewing metadata, or downloading — see [Gallery](#gallery).

-->

### Aktionen {#actions}

Im Karten-Kontextmenü So greifen Sie zu:

- Tippen Sie auf die Schaltfläche **Alle anzeigen** (Android) / **Alle ansehen** (iOS), um die [Galerie](#gallery) im Vollbildmodus zu öffnen, wo Sie durch alle verfügbaren Fotos für den ausgewählten Ort wischen können.

- Tippen Sie auf ein beliebiges Foto, um es im [Vollbildmodus](#gallery) anzuzeigen und auf die verfügbaren Aktionen zuzugreifen:  
  **Teilen**, **Details**, **Im Browser öffnen** und **Herunterladen**.


### Galerie {#gallery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Galerie-Menü – Android](@site/static/img/map/gallery_menu_android.png)
![Galerie-Menü – Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Galerie-Menü – iOS](@site/static/img/map/gallery_menu_ios.png)
![Galerie-Menü – iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


Das **Galerie-Menü** kann bis zu **100 Bilder** anzeigen, die sich auf den ausgewählten Point of Interest beziehen. Sie können durch alle verfügbaren Fotos wischen. Ein kurzes Antippen eines Fotos öffnet eine detaillierte Ansicht, die Folgendes anzeigt: *Name*, *Hinzugefügt am*, *Autor*, *Lizenz*  

Sie können auch die folgenden Aktionen für jedes Foto ausführen:

- **Teilen**  
  Teilen Sie das ausgewählte Bild mit jeder kompatiblen App, die auf Ihrem Gerät installiert ist (z. B. Messaging, E-Mail oder soziale Medien). Der geteilte Inhalt umfasst das Bild und seinen Quelllink (falls verfügbar).

- **Details**  
  Öffnen Sie eine detaillierte Ansicht mit Metadaten zum Bild, einschließlich: *Name*, *Hinzugefügt am*, *Autor*, *Lizenz*, *Quelle* und *Direktlink*

- **Im Browser öffnen**  
  Starten Sie die Quellseite des Bildes (normalerweise auf [Wikimedia Commons](https://commons.wikimedia.org/)) in Ihrem Standardbrowser. Dies ermöglicht Ihnen, das vollständige Bild, Lizenzinformationen und verwandte Inhalte anzuzeigen.

- **Herunterladen**  
  Speichern Sie das Bild im Speicher Ihres Geräts. Das heruntergeladene Bild finden Sie im Standard-Downloads-Ordner Ihres Geräts und können offline darauf zugreifen.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Die Android-Version enthält kein zusätzliches Menü für Fotoaktionen.

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS – Kontextmenü-Optionen](@site/static/img/map/gallery_menu_ios_3.png)

Auf **iOS** öffnet ein langes Drücken auf ein Foto ein Kontextmenü mit zusätzlichen Aktionen:

- **Details**  
- **Im Browser öffnen**  
- **Herunterladen**

**Schaltflächen**:

- Die Schaltfläche **Teilen** ermöglicht es Ihnen, das ausgewählte Bild schnell zu teilen.  
- Das **Drei-Punkte-Menü** bietet Zugriff auf zusätzliche Aktionen, einschließlich des Anzeigens von Details, des Öffnens der Quelle in einem Browser oder des Herunterladens des Bildes.

</TabItem>

</Tabs>


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Android – Detailansicht](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS – Detailansicht](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>

Der Bildschirm **Details** bietet vollständige Metadaten für das ausgewählte Foto, einschließlich: *Name*, *Hinzugefügt am*, *Autor*, *Lizenz*, *Quelle* und *Direktlink*


## Verwandte Artikel

- [Karten-Kontextmenü](./map-context-menu.md)
- [Karte konfigurieren](./configure-map-menu.md)
- [POI suchen](../search/search-poi.md)
- [Wikipedia-Plugin](../plugins/wikipedia.md)


> *Zuletzt aktualisiert: Juli 2025*


<!--
### Online Photos 2

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/images_nearby_1_andr.png)   ![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/online_photo_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

#### Actions With Photos

How to access:

- Tap the **Show All**(Android) / **View All**(iOS) button to open [the gallery](#gallery-menu) in full screen mode. There you can swipe through all the images related to the selected location.

- Tap a photo to access actions such as *Share*, *Details*, *Open in browser*, and *Download*.

- You can also [browse](../map/point-layers-on-map.md#-street-level-imagery) street-level images on the map.  

In the **Online photos** section of the map context menu, you can access photos of objects from the [Wikimedia](https://www.wikimedia.org/), which offers media files tagged with `image` or `wikimedia` from OpenStreetMap.

#### Gallery Menu 2

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android.png)   ![Street-Level Imagery Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


The gallery can display up to 100 items. You can browse through all the photos, and short tapping on any photo will open it to view additional details (*Name*, *Date*, *Author*, *License*) and perform various actions (*Share*, *Details*, *Open in browser*, and *Download* options).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_3.png) 

</TabItem>

</Tabs>



On iOS, long tapping on any photo opens an additional menu with actions such as *Details*, *Open in browser*, and *Download*.

Buttons:

- The **Share** button allows you to share the selected item.  
- The **Three dots** button opens a menu with options like *Details*, *Open in browser*, and *Download*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_2.png) 

</TabItem>

</Tabs>


The Details screen provides information such as the *Name*, *Added Date*, *Author*, *License*, *Source*, and *Link* of the selected item.

-->