---
source-hash: aa3fd23b95c957def9ede8e26af7d7b5f4e4f85fb050e7a8c1cfc60a5f8eeb64
sidebar_position: 4
---

# Navigations-Sprachansagen {#navigation-voice-prompts}


## 1. Einige Grundlagen {#1-some-basics}

* OsmAnd unterstützt sowohl durch Text-to-Speech (TTS) synthetisierte Ansagen als auch voraufgezeichnete Stimmen.
* Die Verwendung einer TTS-Stimme wird bevorzugt, da sie flexibler ist und z. B. auch die Namen von Orten oder Straßen aussprechen kann.
* Voraufgezeichnete Stimmen werden nur als Fallback empfohlen, wenn Ihr Gerät die ausgewählte Sprache überhaupt nicht mit TTS unterstützen kann.
* Um TTS zu verwenden, muss auf Ihrem Gerät eine TTS-Engine installiert sein, die die Sprache unterstützt, die Sie hören möchten. Die meisten Geräte werden mit einer oder zwei bereits vorinstallierten Engines geliefert. Nur für weniger verbreitete Sprachen müssen Sie möglicherweise eine TTS-Engine eines Drittanbieters finden und installieren.
* Für welche Ereignisse Sprachansagen angeboten werden und deren Timing wird durch den OsmAnd-Sprachrouter-Code gesteuert.
* Das Vokabular und die Satzkonstruktion für jede Sprache sind jedoch in einer Konfigurationsdatei _xx-yy_tts.js_ angegeben, wobei xx der ISO 639-1-Sprachcode und yy ein optionaler regionaler oder ähnlicher Spezifikator ist. Nur für aufgezeichnete Stimmen ist ein zusätzlicher Unterordner _voice_ erforderlich, der alle notwendigen aufgezeichneten Ausdrücke als _.ogg_-Dateien enthält.
* Die Ordner-/Dateikonvention auf dem Gerät lautet `voice/xx[-yy]-tts/xx[-yy]_tts.js`.

Die _tts.js_-Konfigurationsdateien sollten einen Header wie folgt enthalten, der festhält, welche spezifischen Funktionen für die betreffende Datei implementiert und verifiziert wurden:

```
// IMPLEMENTIERTE (X) oder FEHLENDE ( ) FUNKTIONEN, (N/A), falls in dieser Sprache nicht benötigt:
//
// (X) Grundlegende Navigationsansagen: Route (neu)berechnet (mit Entfernungs- und Zeitunterstützung), Abbiegungen, Kreisverkehre, Kehrtwenden, geradeaus/folgen, Ankunft
// (X) Ansage von Namen nahegelegener Punkte (Ziel / Zwischenziel / GPX-Wegpunkt / Favoriten / POI)
// (X) Aufmerksamkeitsansagen: SPEED_CAMERA; SPEED_LIMIT; BORDER_CONTROL; RAILWAY; TRAFFIC_CALMING; TOLL_BOOTH; STOP; PEDESTRIAN; MAXIMUM; TUNNEL
// (X) Andere Ansagen: GPS verloren, von der Route abgekommen, zurück zur Route
// (X) Unterstützung von Straßennamen und Präpositionen (auf / an / zu) und Straßenziel (Richtung)
// (X) Unterstützung von Entfernungseinheiten (Meter / Fuß / Yard)
// (N/A) Spezielle Grammatik: (bitte angeben welche)
// (X) Unterstützung der Ansage von Autobahnausfahrten
```

## 2. Sprachansagen und Varianten {#2-voice-languages-and-variants}

* Einige gängige Sprachansagenpakete sind in OsmAnd vorinstalliert, andere erfordern einen einmaligen Download. (Bitte beachten Sie, dass auch die vorinstallierten so erscheinen, als wären sie ein Download.)
* Für einige Sprachen bieten wir verschiedene regionale Varianten an. Ob Sie auch die entsprechende regionale Aussprache hören, hängt von den Fähigkeiten Ihres Geräts ab.
* Für einige Stimmen bieten wir auch zusätzliche Varianten an, z. B. mit kürzeren ('lässigen') Ansagen oder einigen stummgeschalteten Ansagen, um die Geschwätzigkeit zu reduzieren.

## 3. Testen von Sprachansagen {#3-testing-of-voice-prompts}

Sie können das OsmAnd-Entwickler-Plugin vorübergehend aktivieren, dann zu dessen Einstellungen gehen und die Schaltfläche `Sprachansagen testen` verwenden. Es bietet mehrere Ansagebeispiele für jeden Typ von OsmAnd-Ansage, wobei eine große Bandbreite an Zahlen verwendet wird, um die Zeit-/Entfernungsformatierung und Aussprache zu testen. Die Beschriftung der Schaltfläche gibt den grundlegenden Inhalt der Ansage an, der genaue Wortlaut ist in der tts.js-Datei angegeben, die Sie testen.
Es gibt auch eine Testschaltfläche, die Ihre Geräteeinstellungen und Sprachfähigkeiten anzeigt.

Während der Navigation kann die aktuelle Sprachansage jederzeit durch Tippen auf das Abbiegepfeil-Widget ausgelöst werden.

## 4. Erstellen einer neuen TTS-Sprachansage/Variante {#4-creating-a-new-tts-voice-languagevariant}

Einige Hinweise:

- OsmAnd liefert nur den Wortlaut, die Wortreihenfolge, die Grammatik in Bezug auf Deklinationen, Fälle, Singular/Plural usw., während die Aussprache von der TTS-Engine durchgeführt wird, die Sie auf dem Gerät verwenden (es gibt integrierte und solche von Drittanbietern).
- Dies geschieht in einer einzigen Sprachdefinitionsdatei pro Sprache. Auf GitHub befinden sich die Dateien <a href="https://github.com/osmandapp/OsmAnd-resources/tree/master/voice">hier</a>, und bitte beachten Sie oben die Ordner-/Dateikonventionen auf Ihrem Gerät lokal.
- Die Datei ist jetzt in js (von früherem PROLOG migriert, um sie gängiger zu machen).
- Um eine neue Konfigurationsdatei zu erstellen, beginnen Sie bitte mit dem Klonen von _en\_tts.js_, d. h. verwenden Sie diese als Vorlage.
- Es kann dann hilfreich sein, sich bestehende Konfigurationsdateien für grammatisch komplexere Sprachen (z. B. Deutsch, Tschechisch oder Slowakisch) anzusehen, um bestehende Lösungen für spezielle Grammatik, Wortreihenfolge, Zahlenbildung usw. zu finden. Schauen Sie sich insbesondere Sprachen an, die Ihrer ähnlich sind.
- Sie können Ihre eigene tts-Datei (oder Ihre Verbesserungen an bestehenden) lokal selbst testen, bevor Sie einen Pull-Request stellen, platzieren Sie sie einfach auf Ihrem Gerät mit der korrekten Datei-/Ordnerkonvention.