---
source-hash: 5be228574247e03992e3e0ddd030d4377aa5bc7c791ba46b7915c2586ebae9b4
sidebar_position: 4
title: Karten & Daten
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Karten {#maps}

### Warum bietet OsmAnd keinen Zugang zu Google Maps? {#why-does-osmand-not-offer-access-to-google-maps}

OsmAnd wurde entwickelt, um OpenStreetMap (OSM) zu unterstützen, und priorisiert diesen Weg so weit wie möglich. Zusätzlich gibt es Lizenzbeschränkungen, die es OsmAnd nicht erlauben, mit Google Maps-Daten vertrieben zu werden.

### Karten laden auf Android 11, 12 langsam (SD-Karte) {#maps-slowly-loading-on-android-11-12-sd-card}

Aufgrund der neuen [Speicherzugriffsregeln, die in Android 11 und 12 eingeführt wurden](https://www.androidauthority.com/android-12-privacy-features-1225859/), können Benutzer eine langsamere Leistung beim Zugriff auf Karten erleben, die auf SD-Karten gespeichert sind. Diese Änderungen können auch Sichtbarkeits- und Zugriffsbeschränkungen für Dateien in SD-Kartenordnern verursachen. Weitere Diskussionen und technische Einblicke finden Sie unter den folgenden Links: [Reddit-Diskussion](https://www.reddit.com/r/androiddev/comments/kpn68k/android_11_very_slow_file_access_performance/), [Github #1](https://github.com/osmandapp/OsmAnd/issues/10453), [Github #2](https://github.com/osmandapp/OsmAnd/issues/12046), [Github #3](https://github.com/osmandapp/OsmAnd/issues/13943).

Derzeit stehen die folgenden Lösungen zur Verfügung:

#### 1. Migrieren Sie den OsmAnd-Datenspeicherordner in den „Internen App-Speicher“ {#1-migrate-the-osmand-data-storage-folder-to-internal-app-memory}

- Sie können den Speicherordner ändern, indem Sie die Option ***Interner App-Speicher*** in *Menü → Einstellungen → OsmAnd-Einstellungen → Datenspeicherordner* auswählen.

- Beachten Sie jedoch, dass der interne Speicher oft begrenzt ist. Als Workaround können Sie wichtige Dateien in den internen Speicher verschieben, während Sie selten verwendete Karten auf der SD-Karte belassen. Verwenden Sie bei Bedarf einen Dateimanager, um diese Dateien manuell zu übertragen.

Das Entwicklungsteam sucht aktiv nach effizienteren Lösungen zur Verbesserung der SD-Kartenleistung unter den neuen Android-Speicherrichtlinien.

#### 2. Verwenden Sie den „Download“-Ordner der SD-Karte {#2-use-the-sd-cards-download-folder}

Sie können versuchen, das Problem des langsamen Kartenladens zu lösen, indem Sie den **Download**-Ordner der SD-Karte für die OsmAnd-Speicherung unter *Menü → Einstellungen → OsmAnd-Einstellungen → Datenspeicherordner → Manuell angegeben* angeben. Die folgenden Pfade sind möglich:

- ***/storage/XXXX-XXXX/Download/osmand***  
   Dieser Pfad kann beim Zugriff auf mehrere Dateien Fehler verursachen. Sie können beispielsweise die Weltübersichtskarte herunterladen, aber andere Regionen werden möglicherweise nicht angezeigt.

- ***/storage/XXXX-XXXX/Download***  
   Dieser Pfad sollte für das Herunterladen von Karten und anderen Daten konsistent funktionieren. Beachten Sie jedoch, dass OsmAnd Dateien, die von anderen Apps oder Programmen (z. B. SasPlanet) in diesen Ordner geschrieben wurden, nicht erkennt. Weitere Details finden Sie in [dieser Anleitung](../../technical/map-creation/create-offline-maps-yourself.md).

"XXXX-XXXX" steht für die eindeutige Identifikationsnummer Ihrer SD-Karte, die manchmal im Ordnerpfad unter den Optionen für *Externer Speicher 2* zu finden ist oder mit anderen Methoden ermittelt werden kann. Weitere Forschung und Details zu dieser Lösung sind [hier](https://github.com/osmandapp/OsmAnd/issues/13254#issuecomment-984467744) verfügbar.

#### 3. Speicheroption "Media" {#3-media-storage-option}

Wenn frühere Lösungen nicht funktionieren oder begrenzt erscheinen, können Sie versuchen, die Speicheroption "Media" zu verwenden, um langsame Kartenladevorgänge oder Probleme beim Speicherzugriff zu lösen. Diese Methode ermöglicht die Auswahl eines Ordners, auf den OsmAnd und andere Apps zugreifen können, was besonders nützlich für externen oder wechselbaren Speicher ist.

### Auswahl eines "Allgemein zugänglichen" OsmAnd-Datenspeicherordners mithilfe des "Media"-Speichers {#picking-a-generally-accessible-osmand-data-storage-folder-using-the-media-storage}

Android ist strenger bei den Speicherberechtigungen geworden und beschränkt oft den Zugriff auf app-spezifische Ordner, insbesondere bei Neuinstallationen oder Systemupgrades. Der Standard-Datenspeicher von OsmAnd kann eingeschränkt sein, wodurch er für andere Apps oder sogar Dateimanager unsichtbar wird. Viele Benutzer möchten Karten und Daten in einem zugänglichen externen Speicher für Sicherungen, Synchronisierung oder manuelle Dateiverwaltung speichern.

OsmAnd verfügt jedoch nicht über die Berechtigung *Alle Dateien zugreifen* (aufgrund von Google-Beschränkungen), was die Auswahl der Ordner einschränkt. Ein Workaround besteht darin, den "Media"-Speicherordner zu verwenden, dem Android normalerweise breitere Lese-/Schreibzugriffsrechte gewährt. Dazu:

- Gehen Sie zu *OsmAnds Einstellungen → OsmAnd-Einstellungen → Datenspeicherordner* und überprüfen Sie die verfügbaren Speicherbereiche. Verwenden Sie die Anzeige des freien Speicherplatzes, um den Zielspeicher zu identifizieren, der oft als *Externer Speicher 2* bezeichnet wird.
- Notieren Sie sich den aktuellen Ordnerpfad, der möglicherweise wie */storage/xxxx-xxxx/Android/data/net.osmand.plus/files* aussieht.
- Wechseln Sie zur Option *Manuell angegeben* und ändern Sie den Pfad zu einem über Medien zugänglichen Ordner. Auf vielen Systemen funktioniert das Ändern von */Android/data/* in */media/* (z. B. ***/storage/xxxx-xxxx/media***). Einige Systeme erfordern möglicherweise andere Pfadänderungen.

Ein korrekter Pfad führt nicht dazu, dass OsmAnd Fehler bei den Schreibberechtigungen anzeigt. Bevor Sie diese Änderungen vornehmen, stellen Sie sicher, dass OsmAnd die entsprechenden Speicherberechtigungen hat, einschließlich der "Media"-Speicherberechtigung, unter den Android-**Apps**-Einstellungen. In neueren Android-Versionen können sich diese Berechtigungen in erweiterten oder versteckten Menüs befinden.

### Löschen von Kartendaten nach dem App-Update (wenn „Multiuser Storage 1“ ausgewählt ist) {#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected}

In der Android-Version von OsmAnd kann die Auswahl von *Multiuser Storage 1* als Speicherort zum Löschen aller [lokalen Karten](../personal/maps-resources.md#local-maps) führen, wenn die App automatisch aktualisiert wird, z. B. von Version 4.1.9 auf 4.1.10, 4.1.11 oder später (**Android 11, 12**). Dieses Problem ist auf [Github](https://github.com/osmandapp/OsmAnd/issues/13404) dokumentiert.

Um den Verlust Ihrer Kartendaten während Updates zu vermeiden, sollten Sie diese Lösungen in Betracht ziehen:

1. *Sichern Sie Ihre Dateien*. Bevor Sie OsmAnd aktualisieren, erstellen Sie eine [Sicherung](../personal/import-export.md) der Karten, die in *..Android/obb/net.osmand* gespeichert sind. Nach der Aktualisierung stellen Sie die Dateien wieder her, bevor Sie die aktualisierte OsmAnd-App starten.

2. *Ändern Sie den Speicherpfad*. Verschieben Sie den OsmAnd-Ordner an einen Ort, auf den alle Apps schreiben können (z. B. Wi-Fi FTP-Server, X-plore oder über ein USB-Kabel zu einem PC). Ändern Sie den Ordnerpfad von:
   - /storage/emulated/0/Android/**obb**/net.osmand
   zu
   - /storage/emulated/0/Android/**media**/net.osmand.


### Keine Kartenanzeige für Google Pixel-Geräte {#no-maps-rendering-for-google-pixel-devices}

Für die OsmAnd 4.2 Android-Versionen kann die [Kartenanzeige fehlschlagen](https://github.com/osmandapp/OsmAnd/issues/15045) auf Google Pixel-Geräten, sodass Benutzer statt einer Karte einen leeren weißen Bildschirm sehen.

Um dieses Problem zu lösen, wechseln Sie zur OpenGL-Anzeige:

- Navigieren Sie zu *OsmAnd-Menü → Einstellungen → OsmAnd-Einstellungen → Kartenanzeige-Engine → Version 2 (OpenGL)*.
- Starten Sie OsmAnd neu, um die Änderungen zu übernehmen.


### Behebung langsamer Kartenanzeige in OsmAnd {#resolving-slow-map-rendering-in-osmand}

<!--
Other header variants:

- Optimizing OsmAnd performance for offline maps
- Improving map redrawing speed in OsmAnd
-->

Um das Problem der langsamen Kartenanzeige zu beheben, insbesondere bei der Verwendung von Offline-Vektorkarten, sollten die folgenden Schritte unternommen werden:

1. **Deaktivieren Sie unnötige Kartenfunktionen.** Deaktivieren Sie 3D-Relief, Höhenlinien, Schummerung und Hangneigungen, die den für die Kartenanzeige benötigten Verarbeitungsaufwand erheblich erhöhen können. Sie können dies in *Menü → Karte konfigurieren* tun.

2. **Vereinfachen Sie Kartendetails.** Blenden Sie weniger wichtige Elemente wie Grenzen, POIs, OSM-Notizen, Wetterebenen, zusätzliche Details (*Menü → Karte konfigurieren → Kartenanzeige*) aus, um die Kartenanzeige zu optimieren und die Geschwindigkeit zu verbessern.

3. **Begrenzen Sie die Anzahl der angezeigten POIs.** Zeigen Sie nur die wichtigsten POIs an oder begrenzen Sie die während der Navigation angezeigten Kategorien, was die Kartenanzeige beschleunigen kann. Greifen Sie auf diese Einstellungen in *Menü → Navigation → Einstellungen* zu.

4. **Passen Sie den Kartenvergrößerer an.** Die Einstellung des Kartenvergrößerers kann ein Schlüsselfaktor für die Verlangsamung der Karte sein. Stellen Sie den Vergrößerer auf 100 %, indem Sie lange auf die Schaltfläche **"+"** oder **"-"** auf dem Kartenbildschirm drücken, um die Anzeige zu optimieren.

5. **Deaktivieren Sie den Auto-Zoom.** Der Auto-Zoom kann während der Navigation zu häufigem Neuzeichnen der Karte führen, was Verzögerungen verursacht. Deaktivieren Sie den Auto-Zoom in *Menü → Einstellungen → Profil → Navigationseinstellungen → [Karte während der Navigation](../navigation/guidance/map-during-navigation.md)*.

6. **Verwenden Sie nur Offline-Karten.** Online-Karten, insbesondere wenn sie nicht im Voraus heruntergeladen wurden, können das Laden der Karten verlangsamen. Wechseln Sie zur Verwendung nur von Offline-Karten für eine reibungslosere Leistung.

Diese Änderungen sollten die Zeit reduzieren, die zum Rendern von Karten benötigt wird, insbesondere während der Navigation. Weitere detaillierte Konfigurationsoptionen finden Sie im [Handbuch zu den Karteneinstellungen](https://osmand.net/docs/user/map/interact-with-map#settings).


## Höhenlinien {#contour-lines}

### Gibt es eine Möglichkeit, Höhenlinien in Fuß statt in Metern anzuzeigen? {#is-there-a-way-to-display-contour-lines-in-feet-instead-of-meters}

Ja, Höhenlinien können in Fuß statt in Metern angezeigt werden. Bevor Sie die Höhenliniendaten herunterladen, wählen Sie zwischen Fuß oder Metern: [Lesen Sie hier mehr darüber](../../user/plugins/topography.md#contour-lines-meters-or-feet).

### Höhenlinien, Höhendaten oder 3D-Relief werden nicht angezeigt {#contour-lines-elevation-data-or-3d-relief-are-not-displayed}

- Überprüfen Sie, ob die Daten für die richtige Region heruntergeladen wurden. Gehen Sie zu ***Menü → Karten & Ressourcen → Downloads → Ihre Region***. [Wie man Karten herunterlädt](../start-with/first-steps.md#how-to-download-maps).
- Überprüfen Sie, ob das [Plugin](../plugins/topography.md#required-setup-parameters) aktiviert und in ***Menü → Plugins → Topographie*** sichtbar ist.
- Überprüfen Sie, ob die Elemente im Bereich Topographie in ***Menü → Karte konfigurieren → Topographie → Höhenlinien / Gelände / 3D-Relief*** aktiviert sind.
- Überprüfen Sie Ihre Käufe: [Android](../purchases/android.md#free-and-paid-features) / [iOS](../purchases/ios.md#free-and-paid-features).
- Aktualisieren Sie die App auf die neueste Version.
- Löschen Sie die erforderlichen Karten und laden Sie sie erneut herunter, um sicherzustellen, dass keine beschädigten Dateien vorhanden sind.
- Starten Sie OsmAnd neu, um Einstellungen und Daten zu aktualisieren.


## Suche {#search}

### Strukturierte (Stadt *→* Straße *→* Haus) Adresssuche findet das Haus nicht {#structured-city--street--house-address-search-doesnt-find-the-house}

Wenn Sie versuchen, einen Ort mithilfe der Struktur *Stadt → Straße → Hausnummer* zu suchen und keine Ergebnisse zurückgegeben werden, beachten Sie die folgenden Tipps und möglichen Ursachen:

> **Tipp**: Versuchen Sie eine Volltextsuche ohne Angabe der Stadt, da die Adresse möglicherweise unter einer anderen Stadt aufgeführt ist.

**Mögliche Probleme:**

- **Haus fehlt**. Das Haus ist möglicherweise nicht auf OpenStreetMap aufgeführt oder es ist vorhanden, aber ohne zugewiesene Nummern. Sie können dies mit einem Beispiel [hier](https://www.openstreetmap.org/#map=19/33.91937/-118.24357) überprüfen.

- **Falscher Straßenname**. Der Straßenname, der dem Haus zugeordnet ist, ist möglicherweise in OpenStreetMap falsch. Überprüfen Sie das Tag `addr:street`, um sicherzustellen, dass der Straßenname genau mit den Tagging-Informationen der Straße übereinstimmt.

- **Problem mit Nominatim**. Das Haus ist möglicherweise in OpenStreetMap vorhanden, wird aber über Nominatim (die von OpenStreetMap verwendete Suchmaschine) nicht gefunden. Sie können hier mehr darüber erfahren, wie Sie adressbezogene Probleme beheben können: [hier](https://wiki.openstreetmap.org/wiki/Addresses).

- **Mögliches Problem in OsmAnd**. Wenn das Haus in Nominatim vorhanden ist, aber immer noch nicht in OsmAnd gefunden wird, liegt das Problem möglicherweise speziell bei OsmAnd. Sie können zur Lösung beitragen, indem Sie weitere Nachforschungen anstellen. Weitere Details finden Sie in diesem [technischen Artikel](../../technical/algorithms/trace-address-search-issues.md).


## Tracks und Punkte {#tracks-and-points}

### Wie markiere ich verschiedene Orte auf der Karte {#how-to-mark-different-places-on-the-map}

Sie können Notizen hinterlassen und Orte auf der Karte in verschiedenen Formen markieren, die jeweils unterschiedlichen Zwecken dienen:

- *[Favoriten](../personal/favorites.md)*. Dies sind permanente Punkte auf der Karte, denen Sie Beschreibungen hinzufügen können. Um einen Favoriten zu erstellen, machen Sie einen *langen Tipp → tippen Sie auf Hinzufügen*. Favoriten eignen sich hervorragend zum Markieren von Orten, die Sie häufig besuchen oder für spätere Referenz speichern möchten.

- *[Marker](../personal/markers.md)*. Marker sind temporäre Punkte, die oft zur Navigation oder Planung verwendet werden. Sie können die Entfernung von Ihrem aktuellen Standort oder einem anderen Punkt anzeigen und können schnell entfernt werden, wenn sie nicht mehr benötigt werden. Um einen Marker hinzuzufügen, machen Sie einen *langen Tipp → tippen Sie auf Marker*.

- *[Wegpunkte](../map/tracks/index.md#types-of-tracks)*. Wegpunkte werden entlang von Routen platziert, die Sie erstellen, und helfen Ihnen, bestimmte Haltestellen oder Orte entlang Ihrer Reise zu markieren. Sie können diesen Punkten auch Beschreibungen hinzufügen. Um einen Wegpunkt hinzuzufügen, machen Sie einen *langen Tipp auf die Karte → Wegbeschreibung → als Zwischenwegpunkt hinzufügen*.

- *[Audio/Video-Notizen](../plugins/audio-video-notes.md)*. Mit diesen Notizen können Sie Audio-, Video- oder Fotodateien an bestimmte Orte auf der Karte anhängen. Um dies zu aktivieren, aktivieren Sie das Audio/Video-Notizen-Plugin im *OsmAnd-Menü → Plugins*. Um eine hinzuzufügen, machen Sie einen *langen Tipp → Aktionen → wählen Sie die erforderliche Datei zum Anhängen*.

- *[OSM-Notizen](../plugins/osm-editing.md#create--modify-osm-note)*. Dies sind Berichte, die Sie erstellen können, um Fehler oder fehlende Informationen auf OpenStreetMap hervorzuheben. Aktivieren Sie das OSM-Bearbeitungs-Plugin im *OsmAnd-Menü → Plugins*. Um eine OSM-Notiz hinzuzufügen, machen Sie einen *langen Tipp → Aktionen → OSM-Notiz hinzufügen*.

- *[POIs (Points of Interest)](../map/point-layers-on-map.md#points-of-interest-pois)*. Dies sind vordefinierte Punkte aus der Datenquelle von OpenStreetMap, wie z. B. Restaurants, Parks oder Sehenswürdigkeiten. Sie können POIs anzeigen, indem Sie die POI-Überlagerung im Menü *Karte konfigurieren* aktivieren oder eine Kategorie auswählen.

- *[Suche](../search/index.md)*. Sie können auch die Suchfunktion verwenden, um Orte auf der Karte zu finden und zu markieren.