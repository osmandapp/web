---
source-hash: 848546295eb67d895bd6bd5a48afe6f2f110a62b992de04aa47e91eee03c9082
sidebar_position: 3
title:  Navigation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Routenberechnung {#route-calculation}

### Routenberechnung ist langsam {#route-calculation-is-slow}

*Android*. OsmAnd verwendet zwei verschiedene **Offline-Routing-Engines**: eine *Java-basierte Engine* und eine *Native (C++) Engine*.

- Die *Java-basierte Engine* wird im [Sicheren Modus](../plugins/development.md#overview) verwendet, ist aber etwa 10-mal langsamer als die native Engine. Sie hat auch strenge Speicherbeschränkungen, was zu Fehlern wie *Nicht genügend Speicher für die Berechnung* führen kann. Wenn dieses Problem auftritt, navigieren Sie zu *Plugins → OsmAnd-Entwicklung → Einstellungen →* [*Sicherer Modus*](../plugins/development.md#overview) und stellen Sie sicher, dass diese Option deaktiviert ist.
- Die *Native (C++) Engine* bietet eine bessere Leistung, aber ihre Effizienz hängt von den Speicher- und Prozessorkapazitäten Ihres Geräts ab. Im Allgemeinen funktioniert das native Routing gut für Routen unter 300 km, mit Berechnungszeiten von 15 Sekunden bis 4 Minuten. Wenn der Vorgang länger als 4 Minuten dauert, ist es ratsam, ihn zu stoppen, da die Anwendung abstürzen könnte.


### Falsche oder unterbrochene Routen {#incorrect-or-broken-routes}

Manchmal zeigt OsmAnd unerwartete Navigationsergebnisse an. Anstatt dem Straßennetz zu folgen, kann die Route als gerade gepunktete Linie zu einem unzusammenhängenden Punkt erscheinen oder die Navigation kann vollständig fehlschlagen. Dies deutet in der Regel darauf hin, dass eine Routenberechnung zum ausgewählten Ort mit der aktuellen Konfiguration nicht möglich ist. Ähnliche Probleme wurden von Nutzern auf [Reddit](https://www.reddit.com/r/OsmAnd/comments/1lu45u2/navigation_problems/) und [weitere](https://www.reddit.com/r/OsmAnd/comments/1l9233e/navigation_bug_in_certain_countries/) gemeldet.

**Ursachen:**

- Veraltete oder duplizierte Karten. Karten mit unterschiedlichen Aktualisierungsdaten oder Duplikate können die Konnektivität unterbrechen (insbesondere über Regionen/Grenzen hinweg).
- Beschädigte Profileeinstellungen. Benutzerdefinierte/angepasste Profile (z. B. Fahrrad) können inkonsistentes Verhalten verursachen.
- Routing-Engine-Mismatch: Verschiedene Engines (HH × Java vs. HH × C++) können dieselben Karten unterschiedlich handhaben.

**Lösungen:**

1. Setzen Sie Ihr Profil zurück.
- Öffnen Sie *Menü* → *Einstellungen* → *App-Profil (Navigationsprofil)*.
- Wählen Sie *Auf Standard zurücksetzen*.

2. Entfernen und neu installieren Sie Karten.
- Öffnen Sie *Menü* → *Karten & Ressourcen* → *Lokal* und löschen Sie alle Karten für die betroffenen Region(en).
- Gehen Sie dann zu *Menü* → *Karten & Ressourcen* → *Downloads* und laden Sie die Karten erneut herunter.
- Optional überprüfen Sie *Menü* → *Karten & Ressourcen* → *Updates*, um sicherzustellen, dass alle Regionen dasselbe Aktualisierungsdatum haben.

3. Wechseln Sie die Routing-Engine.
- Aktivieren Sie das Plugin: *Menü* → *Plugins* → *OsmAnd-Entwicklung*.
- Öffnen Sie dann *Menü* → *Einstellungen* → *App-Profil* → *Navigations-Einstellungen* → *Routenparameter* → *Entwicklung* → *Routing-Typ* und wechseln Sie *HH × C++* ↔ *HH × Java* (Sie können auch A* classic oder A* 2-Phasen ausprobieren).

4. Als letztes Mittel.
- Installieren Sie die App neu und laden Sie die Karten erneut herunter (hilft, wenn versteckte Konflikte bestehen bleiben).


### Wie berechnet man Routen, die länger als 250 km sind? {#how-to-calculate-routes-longer-than-250km}

1. Wenn die App nach 7-8 Minuten Berechnungszeit keine Route anzeigt, sollten Sie [Wegpunkte setzen](../navigation/setup/route-navigation.md#route-recalculation) (wählen Sie z.B. Orte auf Autobahnen). 3-4 Wegpunkte reichen aus, um sogar 1000 km lange Routen zu berechnen.

2. Bei High-End-Geräten können Sie den Speicher auf 512 MB oder 1024 MB erhöhen - [Zugewiesener Speicher für Geräte](../plugins/development.md#memory-settings).

3. Für die Android-Version können Sie ein Navigationsprofil mit Online- oder Drittanbieter-Routing (BRouter) erstellen. Lesen Sie mehr darüber [hier](../navigation/routing/brouter.md).

### Berechnung von 50-km-Routen für Fußgänger {#calculation-of-50-km-routes-for-pedestrians}

Wenn Sie das **Fußgänger**-Profil in OsmAnd verwenden, kann die Anwendung bei der Berechnung von Routen über 50 km abstürzen. Dieses Problem tritt speziell auf, wenn das [**Standard-Routing A***](../navigation/guidance/navigation-settings.md#development-settings) in den Navigationseinstellungen ausgewählt ist. Mehrere Faktoren können zu diesem Problem beitragen:

- Die Routenlänge überschreitet 50 km.
- Die Anzahl der direkten Punkte auf der Route ist größer als 1 Million.
- Sie verwenden ein mobiles Gerät zur Berechnung der Route, was für Routen dieser Länge nicht empfohlen wird. Erwägen Sie die Verwendung der Webversion für eine bessere Leistung.

Um Abstürze bei Routen ähnlicher Distanzen zu vermeiden, sollten Sie zu anderen Profiltypen wie **Fahrrad** wechseln.


## Die berechnete Route scheint nicht korrekt zu sein {#the-calculated-route-does-not-seem-correct}

Um Probleme mit falschen oder suboptimalen Routen zu verfolgen, eröffnen Sie bitte einen neuen Beitrag in den [Github-Diskussionen](https://github.com/osmandapp/OsmAnd/discussions) oder ein [Github-Issue](https://github.com/osmandapp/Osmand/issues) und geben Sie so detailliert wie möglich die folgenden Informationen an:

- Welche Version von OsmAnd verwenden Sie auf welchem Gerät?
- Verwenden Sie die Offline-Karten, die in der OsmAnd-App zum Download angeboten werden, oder Online- (Kachel-/Raster-) Karten?
- Wenn Sie Offline-Karten verwenden, teilen Sie uns den genauen Namen der Kartendatei mit, in der das Routing-Problem auftritt, und das Datum ihrer Ausgabe.
- Teilen Sie uns mit, ob Sie das In-App-Offline-Routing von OsmAnd oder einen Online-Routing-Anbieter wie YOURS, OpenRouteService oder OSRM verwendet haben.
- Welches Routing-Profil ist in der OsmAnd-App ausgewählt (Auto, Fahrrad oder Fußgänger)?
- Bitte geben Sie so genau wie möglich den Start- und Endpunkt Ihrer Route an. Wenn möglich, nennen Sie für jeden Punkt den Stadtnamen und den Straßennamen. Auch ein [Permalink](https://wiki.openstreetmap.org/wiki/Permalink) von openstreetmap.org kann hilfreich sein.
- Teilen Sie uns Ihre erwartete Route mit und wie OsmAnd routet.

## Straßeninformationen {#road-information}

### OsmAnd zeigt nur einige Blitzer an {#osmand-only-shows-some-speed-cams}

Aufgrund der Geodaten aus dem OpenStreetMap-Projekt gibt es derzeit zwei Methoden, wie Blitzer in die OSM-Rohdaten integriert werden:

- Ein Punkt (in der OSM-Terminologie "Knotenpunkt" genannt) eines Weges wird mit "highway=speed_camera" getaggt, siehe OSM-Wiki unter [highway=speed_camera](https://wiki.openstreetmap.org/wiki/Tag%3Ahighway%3Dspeed_camera)
- Eine Gruppe von OSM-Datenelementen wird in einer sogenannten "Relation" zusammengefasst, die mehr Elemente als ein einzelner Knotenpunkt enthält, um die Richtung zu beschreiben, die von der Radarfalle abgedeckt wird. Siehe [Relation:enforcement](https://wiki.openstreetmap.org/wiki/Relation:enforcement).

Derzeit kann OsmAnd nur die Elemente verwenden, die aus einem einzelnen Knotenpunkt bestehen. Die Analyse von Relationen wird in einer zukünftigen Version folgen.


## Sprachnavigation {#voice-navigation}

### Warum sollte ich eine TTS-Stimme anstelle einer aufgezeichneten Stimme verwenden? {#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice}

**Text-zu-Sprache (TTS)**-Stimmen erzeugen gesprochene Anweisungen dynamisch, sodass sie Straßennamen, Ortsnamen und Autobahnnummern aussprechen können. Im Gegensatz dazu sind **aufgezeichnete Stimmen** auf voraufgezeichnete Phrasen beschränkt und können keine spezifischen Namen oder Nummern aussprechen.

*Vorteile von TTS gegenüber aufgezeichneten Stimmen:*

- Spricht Straßennamen und dynamische Informationen aus.
- Wird regelmäßig mit neuen Funktionen aktualisiert.
- Bietet eine bessere Flexibilität für die Navigation.

Um TTS in OsmAnd zu verwenden, muss auf Ihrem Gerät eine **TTS-Engine** installiert sein. Viele Geräte werden mit einer vorinstallierten TTS-Engine geliefert, aber bei Bedarf können zusätzliche manuell installiert werden. [Liste der unterstützten TTS-Engines und Sprachen für Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

Detaillierte Anweisungen zur Einrichtung und Anpassung von Sprachansagen finden Sie unter: [Anleitung zur Einrichtung der Sprachnavigation](../navigation/guidance/voice-navigation.md).

### TTS funktioniert nicht richtig? Befolgen Sie diese Schritte, um das Problem zu beheben {#tts-does-not-function-properly-follow-these-steps-to-fix-it}

Probleme mit **Text-zu-Sprache (TTS)** hängen in der Regel mit den **Android-Systemeinstellungen** zusammen, nicht mit der OsmAnd-App selbst.  

1. Stellen Sie sicher, dass eine TTS-Engine installiert ist.

    - Öffnen Sie *Geräteeinstellungen → Sprache & Eingabe → Text-zu-Sprache-Optionen*.
    - Überprüfen Sie, ob eine **TTS-Engine** installiert ist (z. B. Google TTS, Samsung TTS, Pico).
    - Wenn keine Engine installiert ist, wählen Sie *„Weitere installieren…“* und laden Sie eine kompatible herunter.
    - [Liste der unterstützten TTS-Engines und Sprachen.](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/)

2. Überprüfen Sie die TTS-Spracheinstellungen.

    - Wählen Sie die gewünschte Sprache in *Android-Einstellungen → Text-zu-Sprache-Optionen*.
    - Tippen Sie auf *„Ein Beispiel anhören“*, um zu testen, ob die TTS-Engine funktioniert.
    - Wenn Sie nichts hören, aktualisieren oder installieren Sie die TTS-Engine neu.

3. Passen Sie die OsmAnd-Sprachnavigationseinstellungen an.

    - Öffnen Sie *OsmAnd → Menü → Profil konfigurieren → Navigationseinstellungen → Sprachansagen*.
    - Wählen Sie eine kompatible *Sprache → TTS*.
    - Testen Sie die Sprachansagen, indem Sie zu *Menü → Plugins → OsmAnd-Entwicklung aktivieren → Einstellungen → Sprachansagen testen* navigieren.

#### Zusätzliche Schritte {#additional-steps}

- *Google TTS aktualisieren*. Öffnen Sie den Google Play Store, suchen Sie nach **Google Text-to-Speech** und aktualisieren Sie es.  
- *Navigation simulieren*. Tippen Sie auf *Navigations-Button → Einstellungen → Navigation simulieren*, um zu überprüfen, ob die Sprachführung abgespielt wird.  
- *OsmAnd neu installieren*:  
   - **Einstellungen sichern:** *Menü → Einstellungen → In Datei exportieren*.  
   - Deinstallieren Sie OsmAnd und installieren Sie es dann erneut aus dem App Store.  
   - Einstellungen wiederherstellen: *Menü → Einstellungen → Datei importieren*.

Für weitere Fehlerbehebungen besuchen Sie:

- [Anleitung zur Sprachnavigation](../navigation/guidance/voice-navigation.md)  
- [Einstellungen importieren/exportieren](../personal/import-export.md)  


## Sonstiges {#other}

### Navigation stoppt bei ausgeschaltetem Bildschirm {#navigation-stops-while-screen-is-off}

- [Das gleiche Problem](../troubleshooting/track-recording-issues.md#overview) bei der Track-Aufzeichnung im Hintergrund.