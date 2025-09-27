---
source-hash: c674aa26de62610f1442ef441eaa008b20c3b4a69dd7617b13ccd27ccf7f2234
sidebar_position: 7
title:  Favoriten
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

**Favoriten** ist eine Funktion von OsmAnd, mit der Sie Lesezeichen (Notizen) auf der Karte erstellen können. Diese Favoritenpunkte werden standardmäßig als gelbe Sterne angezeigt, aber Sie können sie vollständig mit verschiedenen Farben, Formen und Symbolen anpassen. Favoriten sind in einer eigenen Kartenebene gruppiert, die ab der *6. Zoomstufe* sichtbar wird.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoriten Einführung Android](@site/static/img/personal/favorites_intro_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoriten Einführung iOS](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>


## Favoritenpunkt {#favorite-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoriten-Ebene Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoriten-Ebene iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

Favoriten sind Teil einer speziellen Kartenebene, und Sie können sie zusammen mit ihren [Namen](../map/point-layers-on-map.md#favorite-and-poi-names) auf der Karte [ein- oder ausblenden](../map/point-layers-on-map.md#favorites). Durch Antippen eines Favoritenpunktes öffnet sich das [Kontextmenü](../map/map-context-menu.md#favorites--track-points-from-the-group), in dem Sie Details anzeigen und den Punkt [bearbeiten oder löschen](../map/map-context-menu.md#add--edit-favorite) können.


### Erstellen {#create}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorit Beschreibung hinzufügen Android](@site/static/img/personal/favorite_add_descr_android.png)  ![Favoritengruppe Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorit Beschreibung hinzufügen iOS](@site/static/img/personal/favorite_add_descr_ios.png)  ![Favoritengruppe iOS](@site/static/img/personal/favorite_group_ios.png)

</TabItem>

</Tabs>

So fügen Sie einen Favoritenpunkt hinzu:

1. Wählen Sie einen [POI (Sonderziel)](../map/point-layers-on-map.md#points-of-interest-pois) oder ein Gebäude auf der Karte aus.
    Kurzes Antippen für einen POI oder langes Antippen für einen allgemeinen Kartenpunkt.
2. Wählen Sie [Hinzufügen (☆)](../map/map-context-menu.md#add--edit-favorite) aus dem Kartenkontextmenü.

Wenn ein Punkt aus OSM-Daten hinzugefügt wird, werden die relevanten POI-Informationen automatisch übernommen. Sie können auch einen Favoriten erstellen, indem Sie eine beliebige Stelle auf der Karte [lange antippen](../map/map-context-menu.md#select-any-point-long-tap).

***Felder für einen Favoritenpunkt:***

- **Name** — Ein eindeutiger Name innerhalb der Gruppe (*Erforderlich*).
- **Adresse** und **Beschreibung** (*Optional*).
- **Gruppe** — Wählen Sie aus einer bestehenden [Favoritengruppe](#manage-favorites) oder erstellen Sie eine neue.
- **Visuelle Anpassung** — Symbol, Farbe und Form können entweder dem standardmäßigen [Erscheinungsbild der Gruppe](#change-group-appearance) entsprechen oder individuell angepasst werden.


### Bearbeiten / Ersetzen / Löschen {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorit bearbeiten Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorit bearbeiten iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

So ändern Sie einen Favoritenpunkt:

1. [Tippen Sie](../map/map-context-menu.md#select-an-object-single-tap) auf den Favoriten auf der Karte oder gehen Sie zu [Meine Favoriten](#manage-favorites).
2. Wählen Sie **Favorit bearbeiten** aus dem [*Kartenkontextmenü*](../map/map-context-menu.md#add--edit-favorite).

***Verfügbare Optionen:***

- **Details bearbeiten** — Name, Symbol, Gruppe, Adresse und Beschreibung.
- **Standort ersetzen** — Ersetzen Sie einen anderen Punkt durch diesen. Nützlich zum Aktualisieren eines bestimmten Punktes (z. B. *Mein geparktes Auto*) oder zum Erstellen eines neuen.
- **Löschen** — Entfernen Sie den Favoriten über die Löschoption, die über das Bearbeiten-Menü oder die Löschtaste auf Android zugänglich ist.


### Favoritensymbole {#favorite-icons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Meine Orte Favoriten Android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![meine_orte_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

In OsmAnd ist eine große Auswahl an Symbolen für POIs und Wegpunkte verfügbar. Sie können:

- Ein Symbol aus der Liste der [POI-Kategorien](../search/search-poi.md#categories-and-their-filters) auswählen.
- Ein passendes Symbol über die [Suchoption](../search/search-all.md#how-to-use) finden.


### Spezielle Favoriten (Persönlich) {#special-favorites-personal}

Der *Persönliche Ordner* enthält spezielle Punkte wie **<Translate android="true" ids="favorite_home_category"/>** und **<Translate android="true" ids="work_button"/>**, die oft in der [Navigation](../navigation/setup/route-navigation.md#select-starting-point) verwendet werden. Dieser Ordner hat kein *Drei-Punkte-Menü*, und seine Parameter können nicht geändert werden.


## Favoriten verwalten {#manage-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Meine Orte Android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![meine_orte_ios](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

Der Bereich **Meine Favoriten** ermöglicht Ihnen:

- Nach bestimmten Favoriten oder Gruppen [suchen](#order--sorting--search).
- [Stapeloperationen](#bulk-edit--delete) — Umbenennen, Verschieben oder Löschen mehrerer Favoriten auf einmal.

### Reihenfolge / Sortierung / Suche {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoritenordner Android](@site/static/img/personal/favorites_folders_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Favoritenordner iOS](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

- **Sortierung** — Favoritenordner und -punkte werden alphabetisch sortiert, wobei der [persönliche Ordner](../personal/favorites.md#special-favorites-personal) ganz oben steht.
- **Suche** — Verwenden Sie die [Globale Suche](../search/search-all.md), um Favoriten nach Namen zu finden. Favoriten werden nach der Entfernung vom Kartenzentrum sortiert.


### Stapelbearbeitung / Löschen {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoritenaktionen Android](@site/static/img/personal/favorites_actions_android.png) ![Favoritenaktion Löschen Android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoritenaktionen iOS](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

1. Um mehrere Favoriten zu verwalten, tippen Sie auf das **Löschen**-Symbol (*Mülleimer-Symbol auf Android*) oder die **Bearbeiten**-Schaltfläche (*Stift-Symbol auf iOS*).
2. Wählen Sie einzelne Favoriten oder ganze Ordner für Stapeloperationen aus.
3. **Verfügbare Optionen** — *Löschen* für Android und iOS, *In eine Favoritengruppe verschieben*, *Teilen* und *Farbe ändern* für iOS.

<!--
### Favoriten zu Kartenmarkierungen hinzufügen {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Funktionen für Favoritenordner Android](@site/static/img/personal/favorites_folder_functions_android.png)

Sie können Ihre Favoriten zur [Liste der Kartenmarkierungen](../personal/markers.md) hinzufügen oder daraus entfernen.
Das Antippen der &#8942;-Schaltfläche (**Android**) öffnet spezielle Funktionen für einen ausgewählten Favoritenordner (Gruppe).

**Funktionen für Favoritenordner:**
- **<Translate android="true" ids="shared_string_add_to_map_markers"/>**  oder **<Translate android="true" ids="remove_from_map_markers"/>**.
- Alle Favoritenpunkte aus einem Ordner zur [Liste der Kartenmarkierungen](../personal/markers.md) hinzufügen oder daraus entfernen.
-->


### Aktionen für Favoritengruppen {#favorite-group-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *Drei-Punkte-Menü → Standard-Erscheinungsbild ändern*

![Funktionen für Favoritenordner Android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *Langes Antippen des Ordners → Standard-Erscheinungsbild*

![Favoritenaktionen iOS](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

Verwenden Sie das ***Drei-Punkte-Menü*** (*Android*) neben jedem Ordner und ***langes Antippen*** (*iOS*) des Ordners, um Favoritengruppen zu verwalten:

- **<Translate android="true" ids="shared_string_rename"/>** — Verwenden Sie diese Option, um den Namen des ausgewählten Ordners zu ändern.

- **<Translate android="true" ids="change_default_appearance"/>** — Passen Sie an, wie die Favoritenpunkte im Ordner auf der Karte erscheinen, indem Sie ihre Symbole, Farben oder Beschriftungen ändern.

- **<Translate android="true" ids="shared_string_show_on_map"/>** oder **Auf Karte ausblenden** — Schalten Sie diese Option um, um die Favoritenpunkte aus dem Ordner auf der Karte anzuzeigen oder auszublenden.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** oder **Von Kartenmarkierungen entfernen** (*nur Android*) — Fügen Sie alle Favoritenpunkte aus dem Ordner zur *Liste der Kartenmarkierungen* hinzu oder entfernen Sie sie bei Bedarf zur einfachen Referenz.

- **<Translate android="true" ids="shared_string_share"/>** — Teilen Sie die Favoritenpunkte im Ordner, indem Sie sie als *Favorites.gpx*-Datei exportieren, was die Übertragung oder Sicherung Ihrer Daten erleichtert.

- **<Translate android="true" ids="shared_string_delete"/>** — Löschen Sie den ausgewählten Favoritenordner und alle darin enthaltenen Punkte dauerhaft.

Weitere Details finden Sie im Artikel [Meine Orte](../personal/myplaces.md#favorites).



### Erscheinungsbild der Gruppe ändern {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funktionen für Favoritenordner Android](@site/static/img/personal/favorite_change_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoritenaktionen iOS](@site/static/img/personal/favorite_add_new_group_3_ios.png)

</TabItem>

</Tabs>

*Erscheinungsbild der Gruppe ändern* Einstellungen:

- **Symbol, Farbe, Form** — Legen Sie einen Standardstil für alle Favoriten in einer Gruppe fest.
- **Konsistenz** — Neue Favoriten, die der Gruppe hinzugefügt werden, übernehmen automatisch das Standard-Erscheinungsbild.
- **Anpassung** — Überschreiben Sie die Standardeinstellungen für bestehende Punkte im Ordner, nur für neue Favoriten oder wenden Sie sie auf alle an.


## Exportieren / Importieren {#export--import}

OsmAnd bietet mehrere Methoden zum [Sichern](./import-export.md) und [Wiederherstellen](./import-export.md#import) von Favoriten:

- **Sicherungsorte** — Lokaler Speicher, [OsmAnd Cloud](../personal/osmand-cloud.md) (nur mit [OsmAnd Pro- oder OsmAnd Start-Abonnement](../purchases/index.md)) oder Instant-Messaging-Apps.

- **Dateiformat** — Favoriten werden als `.gpx`-Dateien (favorites.gpx) gespeichert.


### Kostenloses Cloud-Backup {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Kostenloses Favoriten-Backup Android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Kostenloses Favoriten-Backup iOS](@site/static/img/personal/favorites_free_backup_2_ios.png)

</TabItem>

</Tabs>

Das [kostenlose Favoriten-Backup](../personal/osmand-cloud.md#osmand-start) ist ein spezieller Kaufplan, mit dem Sie Ihre Favoritenpunkte (Standorte) für die **Android-, iOS**- oder **Web**-Versionen in der OsmAnd-Anwendung sichern und aus der OsmAnd Cloud wiederherstellen können. Dieser Plan ist für Benutzer von [OsmAnd Free oder Maps+](../purchases/index.md) verfügbar.

*Kostenloses Favoriten-Backup* bietet diese Vorteile:

- **Keine Zahlung erforderlich**. Nutzen Sie die Backup-Funktion, ohne kostenpflichtige Abonnements zu erwerben.
- **Favoritenpunkte speichern**. Speichern Sie Ihre Favoritenpunkte regelmäßig in OsmAnd, um sie bei einem Geräteabsturz oder dem Löschen der App nicht zu verlieren.
- **Favoritenpunkte übertragen**. Importieren Sie Ihre Favoritenpunkte auf ein neues Gerät mit der Funktion *Kostenloses Favoriten-Backup*, wenn Sie OsmAnd auf mehreren Geräten verwenden.


### Wie man ein Backup erstellt {#how-to-create-a-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Kauf kostenloses Favoriten-Backup Android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Kauf kostenloses Favoriten-Backup iOS](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

Sie benötigen ein OsmAnd Cloud-Konto, um die Funktion *Kostenloses Einstellungs-Backup* zu nutzen. Wenn Sie ein Konto in *OsmAnd Pro* oder ein aktives Konto in *OsmAnd Cloud* haben, wird Ihnen das Werbebanner nicht angezeigt.

- *Banner für kostenloses Favoriten-Backup*. Tippen Sie auf dieses Banner, um den Sicherungsvorgang zu starten.
- *Schließen Sie den Registrierungsschritt ab*, wenn Sie kein OsmAnd Cloud-Konto haben, indem Sie den Anweisungen in der [Registrierungsanleitung](../personal/osmand-cloud.md#login) folgen.
- *Navigieren Sie zum Menü "OsmAnd-Käufe"* (*Menü → Einstellungen → Käufe*).
- *[OsmAnd Start-Paket](../personal/osmand-cloud.md#osmand-start)*. Wählen Sie diese Option, um auf die Funktion "Kostenloses Einstellungs-Backup" zuzugreifen.
- *Erstellen Sie ein Backup* Ihrer Einstellungen.


### Alle Favoriten {#all-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoritenaktionen Android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoriten Export Import iOS](@site/static/img/personal/favorites_export_import_3_ios.png)  

</TabItem>

</Tabs>

Sie können Ihre Favoriten über die speziellen Schaltflächen am unteren Rand des Favoritenbildschirms exportieren und importieren. Eine [.gpx-Datei](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) kann an Dropbox, E-Mail, Messenger und andere auf Ihrem Gerät installierte Anwendungen gesendet werden, die diese Funktion unterstützen.

- **Importieren**-Schaltfläche (*Android*) / **Favorit importieren** (*iOS*). Ermöglicht den Import von Favoritenpunkten (*favorites.gpx*) als Wegpunkte aus einer *GPX*-Datei (ein gängiges GPS-Datenformat) aus dem Speicher Ihres Geräts.
- **Teilen**-Schaltfläche (*Android*) / **Favorit exportieren** (*iOS*). Ermöglicht den Export (Teilen) all Ihrer Favoriten als *favorites.gpx*-Datei.


### Favoritengruppe {#favorite-group}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funktionen für Favoritenordner Android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoritenaktionen iOS](@site/static/img/personal/favorites_actions_1_ios.png)   ![Favoritenaktionen iOS](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

- Tippen Sie auf das **Drei-Punkte-Menü** (*Android*) oder die **Bearbeiten**-Schaltfläche (*Stift-Symbol auf iOS*) oder **tippen Sie lange** auf den Ordner (*iOS*) des ausgewählten Favoritenordners.
- Wählen Sie die **Teilen**-Schaltfläche, um die *Favorites.gpx*-Datei in den Speicher Ihres Geräts zu senden oder sie über Messaging-Apps zu teilen.


### Automatische Favoritensicherung {#automatic-favorites-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *Android → data → net.osmand → files → backup*

![Favoriten-Backup-Export Android](@site/static/img/personal/favorites_backup_export_andr.png)  ![Automatische Favoritensicherung Android](@site/static/img/personal/favorites_autobackup_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *Dateien → Auf meinem iPhone → OsmAnd Maps → favourites_backup*

![Automatische Favoritensicherung iOS](@site/static/img/personal/favorites_autobackup.png)  

</TabItem>

</Tabs>

OsmAnd erstellt bei jeder Bearbeitung von Favoriten eine **Sicherungsdatei**.

- **Android**: Sicherungen werden in *Android → data → net.osmand → files → backup* gespeichert. Verwenden Sie einen Dateimanager eines Drittanbieters, um darauf zuzugreifen.

- **iOS**: Dateien befinden sich in *Dateien → Auf meinem iPhone → OsmAnd Maps → favourites_backup*.

**Manueller Backup-Export**

- Gehen Sie zu *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*.
- Exportieren Sie die `.osf`-Datei in den lokalen Speicher, in Cloud-Dienste oder teilen Sie sie direkt.

:::caution
In den neuesten Versionen von ***Android*** ist der Zugriff auf Systemverzeichnisse eingeschränkt. Nach dem Extrahieren der Favoritendatei aus dem Archiv ist es jedoch weiterhin möglich, sie an Messenger, Cloud-Dienste usw. weiterzuleiten.
:::


### Favoriten in GPX-Datei {#favorites-in-gpx-file}

Alle Informationen über einen Favoriten werden mit Tags gespeichert und beschrieben. Beim Erstellen eines Favoritenpunktes können Sie Ihre eigene [Beschreibung](#favorite-point) verfassen oder Informationen aus den OSM-[Sonderzieldaten (POI)](../map/point-layers-on-map.md#points-of-interest-pois) verwenden, aus denen Ihr Punkt erstellt wurde. Favoritenpunkte, POIs und Wegpunkte verwenden dieselben **Tags** zur Speicherung von Informationen und werden im **GPX-Dateiformat** gespeichert.


```xml
<gpx version="1.1" creator="OsmAnd" xmlns="http://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net" xmlns:test="https://test.net" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
    <wpt lat="37.5460870" lon="-77.4532843">
        <time>2023-06-07T12:31:35Z</time>
        <name>Test</name>
        <type>SOTM</type>
        <extensions>
            <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
            <osmand:icon>place_town</osmand:icon>
            <osmand:background>circle</osmand:background>
            <osmand:color>#ff4e4eff</osmand:color>
            <test:country>United States</test:country>
            <test:state>Virginia</test:state>
            <test:telephone>(804) 828-0100</test:telephone>
            <test:postcode>23284</test:postcode>
            <test:start_date>Thursday, June 8, 2023</test:start_date>
        </extensions>
    </wpt>
</gpx>
```  


## Verwandte Artikel {#related-articles}

- [Tracks verwalten](../personal/tracks/manage-tracks.md#import--export-track)
- [Suchverlauf](../search/search-history.md#export-and-share)
- [Farbpaletten-Schemata](../personal/color-palette-schemes.md)