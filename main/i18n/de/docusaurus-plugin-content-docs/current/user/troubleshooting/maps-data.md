---
source-hash: 9b16ea12c0c7101ef5114041d96220299980dab0bb8a9a0697c20ff869c09d8b
sidebar_position: 4
title:  Karten & Daten
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

### Warum bietet OsmAnd keinen Zugriff auf Google Maps? {#why-does-osmand-not-offer-access-to-google-maps}

OsmAnd ist darauf ausgelegt, OpenStreetMap (OSM) zu unterstützen und priorisiert diesen Weg so weit wie möglich. Zusätzlich gibt es Lizenzbeschränkungen, die es OsmAnd nicht erlauben, mit Google Maps-Daten vertrieben zu werden.

### Langsames Laden von Karten auf Android 11, 12 (SD-Karte) {#maps-slowly-loading-on-android-11-12-sd-card}

Aufgrund der neuen [Regeln für den Speicherzugriff, die in Android 11 und 12 eingeführt wurden](https://www.androidauthority.com/android-12-privacy-features-1225859/), können Benutzer eine langsamere Leistung beim Zugriff auf Karten feststellen, die auf SD-Karten gespeichert sind. Diese Änderungen können auch zu Sichtbarkeits- und Zugriffsbeschränkungen für Dateien in SD-Kartenordnern führen. Weitere Diskussionen und technische Einblicke finden Sie unter den folgenden Links: [Reddit-Diskussion](https://www.reddit.com/r/androiddev/comments/kpn68k/android_11_very_slow_file_access_performance/), [Github #1](https://github.com/osmandapp/OsmAnd/issues/10453), [Github #2](https://github.com/osmandapp/OsmAnd/issues/12046), [Github #3](https://github.com/osmandapp/OsmAnd/issues/13943).

Im Moment sind die folgenden Lösungen verfügbar:

#### 1. Migrieren Sie den OsmAnd-Datenspeicherordner in den „Internen App-Speicher“ {#1-migrate-the-osmand-data-storage-folder-to-internal-app-memory}

- Sie können den Speicherordner ändern, indem Sie die Option ***Interner App-Speicher*** unter *Menü → Einstellungen → OsmAnd-Einstellungen → Datenspeicherordner* auswählen.

- Beachten Sie jedoch, dass der interne Speicher oft begrenzt ist. Als Workaround können Sie wichtige Dateien in den internen Speicher verschieben, während selten genutzte Karten auf der SD-Karte verbleiben. Verwenden Sie einen Dateimanager, um diese Dateien bei Bedarf manuell zu übertragen.

Das Entwicklungsteam sucht aktiv nach effizienteren Lösungen, um die Leistung von SD-Karten unter den neuen Android-Speicherrichtlinien zu verbessern.

#### 2. Verwenden Sie den „Download“-Ordner der SD-Karte {#2-use-the-sd-cards-download-folder}

Sie können versuchen, das Problem des langsamen Ladens von Karten zu beheben, indem Sie den **Download**-Ordner der SD-Karte für den OsmAnd-Speicher unter *Menü → Einstellungen → OsmAnd-Einstellungen → Datenspeicherordner → Manuell festgelegt* angeben. Die folgenden Pfade sind möglich:

- ***/storage/XXXX-XXXX/Download/osmand***  
   Dieser Pfad kann Fehler verursachen, wenn auf mehrere Dateien zugegriffen wird. Zum Beispiel können Sie möglicherweise die Weltübersichtskarte herunterladen, aber andere Regionen werden möglicherweise nicht angezeigt.

- ***/storage/XXXX-XXXX/Download***  
   Dieser Pfad sollte konsistent für das Herunterladen von Karten und anderen Daten funktionieren. Beachten Sie jedoch, dass OsmAnd keine Dateien erkennt, die von anderen Apps oder Programmen (z. B. SasPlanet) in diesen Ordner geschrieben wurden. Weitere Details finden Sie in [dieser Anleitung](../../technical/map-creation/create-offline-maps-yourself.md).

"XXXX-XXXX" steht für die eindeutige Identifikationsnummer Ihrer SD-Karte, die manchmal im Ordnerpfad unter den Optionen für *Externer Speicher 2* zu finden ist oder mit anderen Methoden ermittelt werden kann. Weitere Untersuchungen und Details zu dieser Lösung sind [hier](https://github.com/osmandapp/OsmAnd/issues/13254#issuecomment-984467744) verfügbar.

#### 3. Speicheroption „Medien“ {#3-media-storage-option}

Wenn frühere Lösungen nicht funktionieren oder begrenzt erscheinen, können Sie versuchen, die Speicheroption "Medien" zu verwenden, um Probleme mit langsamem Laden von Karten oder Speicherzugriff zu beheben. Diese Methode ermöglicht die Auswahl eines Ordners, der für OsmAnd und andere Apps zugänglich ist, was besonders nützlich für externen oder austauschbaren Speicher ist.

### Auswahl eines „allgemein zugänglichen“ OsmAnd-Datenspeicherordners über den „Medien“-Speicher {#picking-a-generally-accessible-osmand-data-storage-folder-using-the-media-storage}

Android ist strenger mit den Speicherberechtigungen geworden und beschränkt oft den Zugriff auf app-spezifische Ordner, insbesondere bei Neuinstallationen oder System-Upgrades. Der standardmäßige Datenspeicher von OsmAnd kann eingeschränkt sein, sodass er für andere Apps oder sogar Dateimanager unsichtbar ist. Viele Benutzer möchten Karten und Daten in einem zugänglichen externen Speicher ablegen, um Backups zu erstellen, zu synchronisieren oder Dateien manuell zu verwalten.

OsmAnd hat jedoch nicht die Berechtigung *Zugriff auf alle Dateien* (aufgrund von Googles Einschränkungen), was die Auswahl der Ordner einschränkt. Ein Workaround ist die Verwendung des "Medien"-Speicherordners, dem Android normalerweise einen breiteren Lese-/Schreibzugriff gewährt. Um dies zu tun:

- Gehen Sie zu *OsmAnd-Einstellungen → OsmAnd-Einstellungen → Datenspeicherordner* und überprüfen Sie die verfügbaren Speicherbereiche. Verwenden Sie die Anzeige für den freien Speicherplatz, um den Zielspeicher zu identifizieren, der oft als *Externer Speicher 2* bezeichnet wird.
- Notieren Sie sich den aktuellen Ordnerpfad, der etwa so aussehen könnte: */storage/xxxx-xxxx/Android/data/net.osmand.plus/files*.
- Wechseln Sie zur Option *Manuell festgelegt* und ändern Sie den Pfad zu einem für Medien zugänglichen Ordner. Auf vielen Systemen funktioniert die Änderung von */Android/data/* zu */media/* (z. B. ***/storage/xxxx-xxxx/media***). Einige Systeme erfordern möglicherweise andere Pfadänderungen.

Ein korrekter Pfad wird OsmAnd nicht mit Schreibberechtigungsfehlern konfrontieren. Bevor Sie diese Änderungen vornehmen, stellen Sie sicher, dass OsmAnd die entsprechenden Speicherberechtigungen hat, einschließlich der "Medien"-Speicherberechtigung, unter den **Apps**-Einstellungen von Android. In neueren Android-Versionen können sich diese Berechtigungen in erweiterten oder versteckten Menüs befinden.

### Löschen von Kartendaten nach dem App-Update (wenn „Multiuser Storage 1“ ausgewählt ist) {#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected}

In der Android-Version von OsmAnd kann die Auswahl von *Multiuser Storage 1* als Speicherort dazu führen, dass alle [lokalen Karten](../personal/maps-resources.md#local) gelöscht werden, wenn die App automatisch aktualisiert wird, z. B. von Version 4.1.9 auf 4.1.10, 4.1.11 oder später (**Android 11, 12**). Dieses Problem ist auf [Github](https://github.com/osmandapp/OsmAnd/issues/13404) dokumentiert.

Um den Verlust Ihrer Kartendaten bei Updates zu vermeiden, ziehen Sie diese Lösungen in Betracht:

1. *Sichern Sie Ihre Dateien*. Erstellen Sie vor dem Aktualisieren von OsmAnd ein [Backup](../personal/import-export.md) der Karten, die in *..Android/obb/net.osmand* gespeichert sind. Stellen Sie die Dateien nach dem Update wieder her, bevor Sie die aktualisierte OsmAnd-App starten.

2. *Ändern Sie den Speicherpfad*. Verschieben Sie den OsmAnd-Ordner an einen Ort, der von allen Apps beschreibbar ist (z. B. Wi-Fi-FTP-Server, X-plore oder über ein USB-Kabel an einen PC). Ändern Sie den Ordnerpfad von:
   - /storage/emulated/0/Android/**obb**/net.osmand
   zu
   - /storage/emulated/0/Android/**media**/net.osmand.


### Kein Karten-Rendering auf Google Pixel-Geräten {#no-maps-rendering-for-google-pixel-devices}

Bei den OsmAnd 4.2 Android-Versionen kann das [Karten-Rendering auf Google Pixel-Geräten fehlschlagen](https://github.com/osmandapp/OsmAnd/issues/15045), was dazu führt, dass Benutzer anstelle einer Karte einen leeren weißen Bildschirm sehen.

Um dieses Problem zu beheben, wechseln Sie zum OpenGL-Rendering:

- Navigieren Sie zu *OsmAnd-Menü → Einstellungen → OsmAnd-Einstellungen → Karten-Rendering-Engine → Version 2 (OpenGL)*.
- Starten Sie OsmAnd neu, um die Änderungen zu übernehmen.


### Behebung von langsamem Karten-Rendering in OsmAnd {#resolving-slow-map-rendering-in-osmand}

<!--
Other header variants:

- Optimizing OsmAnd performance for offline maps
- Improving map redrawing speed in OsmAnd
-->

Um das Problem des langsamen Karten-Renderings zu beheben, insbesondere bei der Verwendung von Offline-Vektorkarten, sollten die folgenden Schritte unternommen werden:

1. **Deaktivieren Sie unnötige Kartenfunktionen.** Schalten Sie 3D-Relief, Höhenlinien, Schummerung und Hänge aus, da diese die zur Darstellung der Karten erforderliche Rechenleistung erheblich erhöhen können. Sie können dies unter *Menü → Karte konfigurieren* tun.

2. **Vereinfachen Sie die Kartendetails.** Verbergen Sie weniger wichtige Elemente wie Grenzen, POIs, OSM-Notizen, Wetterschichten und zusätzliche Details (*Menü → Karte konfigurieren → Karten-Rendering*), um die Kartenanzeige zu optimieren und die Geschwindigkeit zu verbessern.

3. **Begrenzen Sie die Anzahl der angezeigten POIs.** Zeigen Sie nur die wichtigsten POIs an oder begrenzen Sie die während der Navigation angezeigten Kategorien, was zur Beschleunigung des Karten-Renderings beitragen kann. Greifen Sie auf diese Einstellungen unter *Menü → Navigation → Einstellungen* zu.

4. **Passen Sie die Kartenlupe an.** Die Einstellung der Kartenlupe könnte ein Schlüsselfaktor für die Verlangsamung der Karte sein. Stellen Sie die Lupe auf 100 % ein, indem Sie lange auf die **"+"**- oder **"-"**-Taste auf dem Kartenbildschirm drücken, um die Anzeige zu optimieren.

5. **Deaktivieren Sie den Auto-Zoom.** Der Auto-Zoom kann zu häufigem Neuzeichnen der Karte während der Navigation führen, was zu Verzögerungen führt. Deaktivieren Sie den Auto-Zoom unter *Menü → Einstellungen → Profil → Navigationseinstellungen → [Karte während der Navigation](../navigation/guidance/map-during-navigation.md)*.

6. **Verwenden Sie nur Offline-Karten.** Online-Karten, insbesondere wenn sie nicht im Voraus heruntergeladen wurden, können das Laden der Karte verlangsamen. Wechseln Sie zur Verwendung von nur Offline-Karten für eine reibungslosere Leistung.

Diese Änderungen sollten die Zeit, die zum Rendern von Karten benötigt wird, insbesondere während der Navigation, reduzieren. Weitere detaillierte Konfigurationsoptionen finden Sie im [Leitfaden zu den Karteneinstellungen](https://osmand.net/docs/user/map/interact-with-map.md#settings).


## Höhenlinien {#contour-lines}

### Gibt es eine Möglichkeit, Höhenlinien in Fuß anstelle von Metern anzuzeigen? {#is-there-a-way-to-display-contour-lines-in-feet-instead-of-meters}

Ja, Höhenlinien können in Fuß anstelle von Metern angezeigt werden. Bevor Sie die Höhenliniendaten herunterladen, wählen Sie zwischen Fuß oder Metern: [Lesen Sie hier mehr darüber](../../user/plugins/topography.md#contour-lines-meters-or-feet).

### Höhenlinien, Höhendaten oder 3D-Relief werden nicht angezeigt {#contour-lines-elevation-data-or-3d-relief-are-not-displayed}

- Überprüfen Sie, ob die Daten der richtigen Region heruntergeladen wurden. Gehen Sie zu ***Menü → Karten & Ressourcen → Downloads → Ihre Region***. [Wie man Karten herunterlädt](../start-with/first-steps.md#how-to-download-maps).
- Überprüfen Sie, ob das [Plugin](../plugins/topography.md#required-setup-parameters) aktiviert und unter ***Menü → Plugins → Topografie*** sichtbar ist.
- Überprüfen Sie, ob die Elemente im Abschnitt Topografie unter ***Menü → Karte konfigurieren → Topografie → Höhenlinien / Gelände / 3D-Relief*** aktiviert sind.
- Überprüfen Sie Ihre Käufe: [Android](../purchases/android.md#free-and-paid-features) / [iOS](../purchases/ios.md#free-and-paid-features).
- Aktualisieren Sie die App auf die neueste Version.
- Löschen Sie die erforderlichen Karten und laden Sie sie erneut herunter, um sicherzustellen, dass keine beschädigten Dateien vorhanden sind.
- Starten Sie OsmAnd neu, um Einstellungen und Daten zu aktualisieren.


## Suche {#search}

### Strukturierte Adresssuche (Stadt → Straße → Haus) findet das Haus nicht {#structured-city--street--house-address-search-doesnt-find-the-house}

Wenn Sie versuchen, einen Ort mit der Struktur *Stadt → Straße → Hausnummer* zu suchen und keine Ergebnisse zurückgegeben werden, beachten Sie die folgenden Tipps und möglichen Ursachen:

> **Tipp**: Versuchen Sie eine Volltextsuche ohne Angabe der Stadt, da die Adresse möglicherweise unter einer anderen Stadt aufgeführt ist.

**Mögliche Probleme:**

- **Haus fehlt**. Das Haus ist möglicherweise nicht auf OpenStreetMap aufgeführt, oder es ist vorhanden, aber ohne zugewiesene Nummern. Sie können dies mit einem Beispiel [hier](https://www.openstreetmap.org/#map=19/33.91937/-118.24357) überprüfen.

- **Falscher Straßenname**. Der mit dem Haus verbundene Straßenname könnte in OpenStreetMap falsch sein. Überprüfen Sie das `addr:street`-Tag, um sicherzustellen, dass der Straßenname genau mit dem in den Tagging-Informationen der Straße übereinstimmt.

- **Problem mit Nominatim**. Das Haus ist möglicherweise in OpenStreetMap vorhanden, wird aber über Nominatim (die von OpenStreetMap verwendete Suchmaschine) nicht gefunden. Sie können [hier](https://wiki.openstreetmap.org/wiki/Addresses) mehr darüber erfahren, wie Sie adressbezogene Probleme beheben können.

- **Mögliches Problem in OsmAnd**. Wenn das Haus in Nominatim vorhanden ist, aber in OsmAnd immer noch nicht gefunden wird, könnte das Problem spezifisch für OsmAnd sein. Sie können zur Lösung beitragen, indem Sie weiter nachforschen. Weitere Details finden Sie in diesem [technischen Artikel](../../technical/algorithms/trace-address-search-issues.md).


## Tracks und Punkte {#tracks-and-points}

### Wie man verschiedene Orte auf der Karte markiert {#how-to-mark-different-places-on-the-map}

Sie können Notizen hinterlassen und Orte auf der Karte in verschiedenen Formen markieren, die jeweils unterschiedlichen Zwecken dienen:

- *[Favoriten](../personal/favorites.md)*. Dies sind permanente Punkte auf der Karte, denen Sie Beschreibungen hinzufügen können. Um einen Favoriten zu erstellen, machen Sie ein *langes Tippen → Hinzufügen*. Favoriten eignen sich hervorragend, um Orte zu markieren, die Sie häufig besuchen oder für zukünftige Referenzen speichern möchten.

- *[Marker](../personal/markers.md)*. Marker sind temporäre Punkte, die oft zur Navigation oder Planung verwendet werden. Sie können die Entfernung von Ihrem aktuellen Standort oder einem anderen Punkt anzeigen und schnell entfernt werden, wenn sie nicht mehr benötigt werden. Um einen Marker hinzuzufügen, machen Sie ein *langes Tippen → Marker*.

- *[Wegpunkte](../map/tracks/index.md#types-of-tracks)*. Wegpunkte werden entlang der von Ihnen erstellten Routen platziert und helfen Ihnen, bestimmte Haltepunkte oder Orte auf Ihrer Reise zu markieren. Sie können diesen Punkten auch Beschreibungen hinzufügen. Um einen Wegpunkt hinzuzufügen, machen Sie ein *langes Tippen auf die Karte → Route → als Zwischenziel hinzufügen*.

- *[Audio-/Videonotizen](../plugins/audio-video-notes.md)*. Mit diesen Notizen können Sie Audio-, Video- oder Fotodateien an bestimmten Orten auf der Karte anhängen. Um dies zu aktivieren, aktivieren Sie das Audio-/Videonotizen-Plugin im *OsmAnd-Menü → Plugins*. Um eine hinzuzufügen, machen Sie ein *langes Tippen → Aktionen → gewünschte Datei zum Anhängen auswählen*.

- *[OSM-Notizen](../plugins/osm-editing.md#create--modify-osm-note)*. Dies sind Berichte, die Sie erstellen können, um Fehler oder fehlende Informationen auf OpenStreetMap hervorzuheben. Aktivieren Sie das OSM-Bearbeitungs-Plugin im *OsmAnd-Menü → Plugins*. Um eine OSM-Notiz hinzuzufügen, machen Sie ein *langes Tippen → Aktionen → OSM-Notiz hinzufügen*.

- *[POIs (Points of Interest)](../map/point-layers-on-map.md#points-of-interest-pois)*. Dies sind vordefinierte Punkte aus der Datenquelle von OpenStreetMap, wie z. B. Restaurants, Parks oder Sehenswürdigkeiten. Sie können POIs anzeigen, indem Sie die POI-Überlagerung im Menü *Karte konfigurieren* aktivieren oder eine Kategorie auswählen.

- *[Suche](../search/index.md)*. Sie können auch die Suchfunktion verwenden, um Orte auf der Karte zu finden und zu markieren.