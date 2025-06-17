---
source-hash: 08c4a707755dc66044356c5dad82616bbd7f7add912ad819bc413a4b0e6a2766
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



## Überblick {#overview}

**Favoriten** OsmAnds Funktion ermöglicht es Ihnen, Lesezeichen (Notizen) auf der Karte zu erstellen. Diese Favoritenpunkte werden standardmäßig als gelbe Sterne angezeigt, aber Sie können sie vollständig mit verschiedenen Farben, Formen und Symbolen anpassen. Favoriten werden in einer speziellen Kartenebene gruppiert, die ab der *6. Zoomstufe* sichtbar wird.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites introduction android](@site/static/img/personal/favorites_intro_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites introduction ios](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>


## Favoritenpunkt {#favorite-point}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favotires layer Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

Favoriten sind Teil einer speziellen Kartenebene, und Sie können sie zusammen mit ihren [Namen](../map/point-layers-on-map.md#favorite-and-poi-names) auf der Karte [anzeigen oder ausblenden](../map/point-layers-on-map.md#favorites). Durch Tippen auf einen Favoritenpunkt wird das [Kontextmenü](../map/map-context-menu.md#favorites--track-points-from-the-group) geöffnet, in dem Sie Details anzeigen und den Punkt [bearbeiten oder löschen](../map/map-context-menu.md#add--edit-favorite) können.


### Erstellen {#create}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorite add description Android](@site/static/img/personal/favorite_add_descr_android.png)  ![Favorite group Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite add description iOS](@site/static/img/personal/favorite_add_descr_ios.png)  ![Favorite group iOS](@site/static/img/personal/favorite_group_ios.png)

</TabItem>

</Tabs>

So fügen Sie einen Favoritenpunkt hinzu:

1. Wählen Sie einen [POI](../map/point-layers-on-map.md#points-of-interest-pois) oder eine Struktur auf der Karte aus.
   Kurzes Tippen für einen POI oder langes Tippen für einen allgemeinen Kartenpunkt.
2. Wählen Sie im Kartenkontextmenü [Hinzufügen (☆)](../map/map-context-menu.md#add--edit-favorite).

Beim Hinzufügen eines Punktes aus OSM-Daten werden die relevanten POI-Informationen automatisch übernommen. Sie können einen Favoriten auch durch [langes Tippen](../map/map-context-menu.md#select-any-point-long-tap) auf einen beliebigen Kartenstandort erstellen.

***Felder für einen Favoritenpunkt:***

- **Name** — Ein einzigartiger Name innerhalb der Gruppe (*Erforderlich*).
- **Adresse** und **Beschreibung** (*Optional*).
- **Gruppe** — Wählen Sie aus einer bestehenden [Favoritengruppe](#manage-favorites) oder erstellen Sie eine neue.
- **Visuelle Anpassung** — Symbol, Farbe, Form können entweder dem standardmäßigen [Gruppenerscheinungsbild](#change-group-appearance) entsprechen oder individuell angepasst werden.


### Bearbeiten / Ersetzen / Löschen {#edit--replace--delete}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorite edit Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite edit iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

So ändern Sie einen Favoritenpunkt:

1. [Tippen](../map/map-context-menu.md#select-an-object-single-tap) Sie auf den Favoriten auf der Karte oder gehen Sie zu [Meine Favoriten](#manage-favorites).
2. Wählen Sie im [*Kartenkontextmenü*](../map/map-context-menu.md#add--edit-favorite) **Favorit bearbeiten**.

***Verfügbare Optionen:***

- **Details bearbeiten** — Name, Symbol, Gruppe, Adresse und Beschreibung.
- **Standort ersetzen** — Ersetzen Sie einen anderen Punkt durch diesen. Nützlich, um einen bestimmten Punkt zu aktualisieren (z. B. *Mein geparktes Auto*) oder einen neuen zu erstellen.
- **Löschen** — Entfernen Sie den Favoriten über die Löschoption, die über das Menü Bearbeiten oder über die Löschtaste unter Android zugänglich ist.


### Favoritensymbole {#favorite-icons}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![My places favorites android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

In OsmAnd ist eine große Auswahl an Symbolen für POIs und Wegpunkte verfügbar. Sie können:

- Wählen Sie ein Symbol aus der Liste der [POI-Kategorien](../search/search-poi.md#categories-and-their-filters).
- Finden Sie ein passendes Symbol über die [Suchfunktion](../search/search-all.md#how-to-use).


### Besondere Favoriten (Persönlich) {#special-favorites-personal}

Der *Persönliche Ordner* enthält besondere Punkte wie **<Translate android="true" ids="favorite_home_category"/>** und **<Translate android="true" ids="work_button"/>**, die oft in der [Navigation](../navigation/setup/route-navigation.md#select-starting-point) verwendet werden. Dieser Ordner hat kein *Drei-Punkte-Menü*, und seine Parameter können nicht geändert werden.


## Favoriten verwalten {#manage-favorites}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![My places favorites android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

Der Abschnitt **Meine Favoriten** ermöglicht Ihnen:

- [Suche](#order--sorting--search) nach bestimmten Favoriten oder Gruppen.
- [Massenoperationen](#bulk-edit--delete) — Mehrere Favoriten gleichzeitig umbenennen, verschieben oder löschen.

### Reihenfolge / Sortierung / Suche {#order--sorting--search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites folders android](@site/static/img/personal/favorites_folders_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Favorites folders ios](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

- **Sortierung** — Favoritenordner und -punkte werden alphabetisch sortiert, wobei der [persönliche Ordner](../personal/favorites.md#special-favorites-personal) ganz oben steht.
- **Suche** — Verwenden Sie die [Globale Suche](../search/search-all.md), um Favoriten nach Namen zu finden. Favoriten werden nach Entfernung vom Kartenzentrum sortiert.


### Massenbearbeitung / Löschen {#bulk-edit--delete}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_actions_android.png) ![Favorites action delete android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

1. Um mehrere Favoriten zu verwalten, tippen Sie auf das **Löschen**-Symbol (*Mülleimer-Symbol unter Android*) oder die **Bearbeiten**-Schaltfläche (*Bleistift-Symbol unter iOS*).
2. Wählen Sie einzelne Favoriten oder ganze Ordner für Massenoperationen aus.
3. **Verfügbare Optionen** — *Löschen* für Android und iOS, *In eine Favoritengruppe verschieben*, *Teilen* und *Farbe ändern* für iOS.

<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- **<Translate android="true" ids="shared_string_add_to_map_markers"/>**  or **<Translate android="true" ids="remove_from_map_markers"/>**.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### Favoritengruppen-Aktionen {#favorite-group-actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *Drei-Punkte-Menü → Standarderscheinungsbild ändern*

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *Langes Tippen auf Ordner → Erscheinungsbild ändern*

![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

Verwenden Sie das ***Drei-Punkte-Menü*** (*Android*) neben jedem Ordner und das ***lange Tippen*** (*iOS*) auf den Ordner, um Favoritengruppen zu verwalten:

- **<Translate android="true" ids="shared_string_rename"/>** — Verwenden Sie diese Option, um den Namen des ausgewählten Ordners zu ändern.

- **<Translate android="true" ids="change_default_appearance"/>** — Passen Sie an, wie die Favoritenpunkte im Ordner auf der Karte erscheinen, indem Sie ihre Symbole, Farben oder Beschriftungen ändern.

- **<Translate android="true" ids="shared_string_show_on_map"/>** oder **Auf Karte ausblenden** — Schalten Sie diese Option um, um die Favoritenpunkte aus dem Ordner auf der Karte anzuzeigen oder auszublenden.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** oder **Aus Kartenmarkierungen entfernen** (*nur Android*) — Fügen Sie alle Favoritenpunkte aus dem Ordner zur *Kartenmarkierungsliste* hinzu oder entfernen Sie sie nach Bedarf, um sie einfach nachzuschlagen.

- **<Translate android="true" ids="shared_string_share"/>** — Teilen Sie die Favoritenpunkte im Ordner, indem Sie sie als *Favorites.gpx*-Datei exportieren. So können Sie Ihre Daten einfach übertragen oder sichern.

- **<Translate android="true" ids="shared_string_delete"/>** — Löschen Sie den ausgewählten Favoritenordner und alle darin enthaltenen Punkte endgültig.

Weitere Details finden Sie im Artikel [Meine Orte](../personal/myplaces.md#favorites).



### Gruppenerscheinungsbild ändern {#change-group-appearance}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorite_change_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_3_ios.png)

</TabItem>

</Tabs>

Einstellungen für *Gruppenerscheinungsbild ändern*:

- **Symbol, Farbe, Form** — Legen Sie einen Standardstil für alle Favoriten in einer Gruppe fest.
- **Konsistenz** — Neue Favoriten, die der Gruppe hinzugefügt werden, übernehmen automatisch das Standarderscheinungsbild.
- **Anpassung** — Überschreiben Sie die Standardeinstellungen für bestehende Punkte im Ordner, nur für neue Favoriten oder wenden Sie sie auf alle an.


## Exportieren / Importieren {#export--import}

OsmAnd bietet verschiedene Methoden zum [Sichern](./import-export.md) und [Wiederherstellen](./import-export.md#import) von Favoriten:

- **Sicherungsorte** — Lokaler Speicher, [OsmAnd Cloud](../personal/osmand-cloud.md) (nur mit [OsmAnd Pro oder OsmAnd Start Abonnement](../purchases/index.md)) oder Instant-Messaging-Apps.

- **Dateiformat** — Favoriten werden als `.gpx`-Dateien (favorites.gpx) gespeichert.


### Kostenlose Cloud-Sicherung {#free-cloud-backup}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_2_ios.png)

</TabItem>

</Tabs>

Die [Kostenlose Favoriten-Sicherung](../personal/osmand-cloud.md#osmand-start) ist ein spezieller Kaufplan, der es Ihnen ermöglicht, Ihre Favoritenpunkte (Standorte) für die **Android-, iOS-** oder **Web-** Versionen in der OsmAnd-Anwendung zu sichern und aus der OsmAnd Cloud wiederherzustellen. Dieser Plan ist für Benutzer von [OsmAnd Free oder Maps+](../purchases/index.md) verfügbar.

Die *Kostenlose Favoriten-Sicherung* bietet folgende Vorteile:

- **Keine Zahlung erforderlich**. Nutzen Sie die Sicherungsfunktion ohne kostenpflichtige Abonnements zu erwerben.
- **Favoritenpunkte speichern**. Speichern Sie regelmäßig Ihre Favoritenpunkte in OsmAnd, um sie nicht zu verlieren, wenn Ihr Gerät abstürzt oder die App gelöscht wird.
- **Favoritenpunkte übertragen**. Importieren Sie Ihre Favoritenpunkte auf ein neues Gerät mit der Funktion *Kostenlose Favoriten-Sicherung*, wenn Sie OsmAnd auf mehreren Geräten verwenden.


#### So erstellen Sie eine Sicherung {#how-to-create-a-backup}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

Sie benötigen ein OsmAnd Cloud-Konto, um die Funktion *Kostenlose Einstellungen-Sicherung* nutzen zu können. Wenn Sie ein Konto in *OsmAnd Pro* oder ein aktives Konto in *OsmAnd Cloud* haben, wird das Werbebanner nicht angezeigt.

- *Banner für kostenlose Favoriten-Sicherung*. Tippen Sie auf dieses Banner, um den Sicherungsvorgang zu starten.
- *Schließen Sie den Registrierungsschritt ab*, wenn Sie kein OsmAnd Cloud-Konto haben, indem Sie die Anweisungen im [Registrierungsleitfaden](../personal/osmand-cloud.md#login) befolgen.
- *Navigieren Sie zum Menü OsmAnd-Käufe* (*Menü → Einstellungen → Käufe*).
- *[OsmAnd Start-Paket](../personal/osmand-cloud.md#osmand-start)*. Wählen Sie diese Option, um auf die Funktion Kostenlose Einstellungen-Sicherung zuzugreifen.
- *Erstellen Sie eine Sicherung* Ihrer Einstellungen.


### Alle Favoriten {#all-favorites}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites export import ios](@site/static/img/personal/favorites_export_import_3_ios.png)

</TabItem>

</Tabs>

Sie können Ihre Favoriten über die speziellen Schaltflächen am unteren Rand des Favoritenbildschirms exportieren und importieren. Eine [.gpx-Datei](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) kann an Dropbox, E-Mail, Messenger und andere auf Ihrem Gerät installierte Anwendungen gesendet werden, die diese Funktion unterstützen.

- Schaltfläche **Importieren** (*Android*) / **Favoriten importieren** (*iOS*). Ermöglicht das Importieren von Favoritenpunkten (*favorites.gpx*) als Wegpunkte aus einer *GPX*-Datei (einem gängigen GPS-Datenformat) aus dem Speicher Ihres Geräts.
- Schaltfläche **Teilen** (*Android*) / **Favoriten exportieren** (*iOS*). Ermöglicht das Exportieren (Teilen) aller Ihrer Favoriten als *favorites.gpx*-Datei.


### Favoritengruppe {#favorite-group}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_1_ios.png)   ![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

- Tippen Sie auf das **Drei-Punkte-Menü** (*Android*) oder die Schaltfläche **Bearbeiten** (*Bleistift-Symbol unter iOS*) oder tippen Sie lange auf den Ordner (*iOS*) des ausgewählten Favoritenordners.
- Wählen Sie die Schaltfläche **Teilen**, um die Datei *Favorites.gpx* an den Speicher Ihres Geräts zu senden oder sie über Messaging-Apps zu teilen.


### Automatische Favoriten-Sicherung {#automatic-favorites-backup}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *Android → data → net.osmand → files → backup*

![Favorites backup export Android](@site/static/img/personal/favorites_backup_export_andr.png)  ![Favorites autobackup android](@site/static/img/personal/favorites_autobackup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *Files → On my iPhone → OsmAnd Maps → favourites_backup*

![Favorites autobackup ios](@site/static/img/personal/favorites_autobackup.png)

</TabItem>

</Tabs>

OsmAnd erstellt bei jeder Bearbeitung von Favoriten eine **Sicherungsdatei**.

- **Android**: Sicherungen werden in *Android → data → net.osmand → files → backup* gespeichert. Verwenden Sie einen Dateimanager eines Drittanbieters, um darauf zuzugreifen.

- **iOS**: Dateien befinden sich in *Files → On my iPhone → OsmAnd Maps → favourites_backup*.

**Manueller Sicherungsexport**

- Gehen Sie zu *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*.
- Exportieren Sie die `.osf`-Datei in den lokalen Speicher, Cloud-Dienste oder teilen Sie sie direkt.

:::caution
In den neuesten Versionen von ***Android*** ist der Zugriff auf Systemverzeichnisse eingeschränkt. Es ist jedoch nach dem Extrahieren der Favoritendatei aus dem Archiv weiterhin möglich, sie an Messenger oder Cloud-Dienste usw. weiterzuleiten.
:::


### Favoriten in GPX-Datei {#favorites-in-gpx-file}

Alle Informationen über einen Favoriten werden mithilfe von Tags gespeichert und beschrieben. Beim Erstellen eines Favoritenpunkts können Sie Ihre eigene [Beschreibung](#favorite-point) schreiben oder Informationen aus den OSM-[Interessenspunkt (POI)](../map/point-layers-on-map.md#points-of-interest-pois)-Daten verwenden, aus denen Ihr Punkt erstellt wurde. Favoritenpunkte, POIs und Wegpunkte verwenden dieselben **Tags**, um Informationen zu speichern, und werden im **GPX-Dateiformat** gespeichert.


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

> *Zuletzt aktualisiert: April 2025*