---
source-hash: aa3fd23b95c957def9ede8e26af7d7b5f4e4f85fb050e7a8c1cfc60a5f8eeb64
sidebar_position: 4
---

# Navigations-Sprachansagen {#navigation-voice-prompts}

## 1. Grundlagen {#1-some-basics}

* OsmAnd unterstützt sowohl Text-to-Speech (TTS) synthetisierte Ansagen als auch voraufgezeichnete Stimmen.
* Die Verwendung einer TTS-Stimme wird bevorzugt, da sie flexibler ist und z. B. auch die Namen von Orten oder Straßen aussprechen kann.
* Voraufgezeichnete Stimmen werden nur als Fallback empfohlen, wenn Ihr Gerät die ausgewählte Sprache überhaupt nicht mit TTS unterstützen kann.
* Um TTS zu verwenden, muss auf Ihrem Gerät eine TTS-Engine installiert sein, die die Sprache unterstützt, die Sie hören möchten. Die meisten Geräte sind bereits mit einer oder zwei Engines vorinstalliert. Nur für weniger gebräuchliche Sprachen müssen Sie möglicherweise eine TTS-Engine eines Drittanbieters finden und installieren.
* Für welche Ereignisse Sprachansagen angeboten werden und deren Zeitpunkt wird durch den OsmAnd-Sprachrouter-Code gesteuert.
* Das Vokabular und die Satzkonstruktion für jede Sprache sind jedoch in einer Konfigurationsdatei _xx-yy_tts.js_ angegeben, wobei xx der ISO 639-1 Sprachcode und yy ein optionaler regionaler oder ähnlicher Spezifikator ist. Nur für aufgezeichnete Stimmen ist ein zusätzlicher Unterordner _voice_ erforderlich, der alle notwendigen aufgezeichneten Ausdrücke als _.ogg_-Dateien enthält.
* Die Ordner-/Dateikonvention auf dem Gerät ist `voice/xx[-yy]-tts/xx[-yy]_tts.js`.

Die _tts.js_-Konfigurationsdateien sollten einen Header wie folgt enthalten, der verfolgt, welche bestimmten Funktionen für die betreffende Datei implementiert und verifiziert wurden:

```
// IMPLEMENTED (X) or MISSING ( ) FEATURES, (N/A) if not needed in this language:
//
// (X) Basic navigation prompts: route (re)calculated (with distance and time support), turns, roundabouts, u-turns, straight/follow, arrival
// (X) Announce nearby point names (destination / intermediate / GPX waypoint / favorites / POI)
// (X) Attention prompts: SPEED_CAMERA; SPEED_LIMIT; BORDER_CONTROL; RAILWAY; TRAFFIC_CALMING; TOLL_BOOTH; STOP; PEDESTRIAN; MAXIMUM; TUNNEL
// (X) Other prompts: gps lost, off route, back to route
// (X) Street name and prepositions (onto / on / to) and street destination (toward) support
// (X) Distance unit support (meters / feet / yard)
// (N/A) Special grammar: (please specify which)
// (X) Support announcing highway exits
```

## 2. Sprachansagen und Varianten {#2-voice-languages-and-variants}

* Einige gängige Sprachansagenpakete sind in OsmAnd vorinstalliert, andere erfordern einen einmaligen Download. (Bitte beachten Sie, dass auch die vorinstallierten so erscheinen, als wären sie ein Download.)
* Für einige Sprachen bieten wir verschiedene regionale Varianten an. Das Hören der entsprechenden regionalen Aussprache hängt von den Fähigkeiten Ihres Geräts ab.
* Für einige Stimmen bieten wir auch zusätzliche Varianten an, z. B. mit kürzeren ('casual') Ansagen oder einigen stummgeschalteten Ansagen, um die Geschwätzigkeit zu reduzieren.

## 3. Testen von Sprachansagen {#3-testing-of-voice-prompts}

Sie können das OsmAnd-Entwickler-Plugin vorübergehend aktivieren, dann zu dessen Einstellungen gehen und die Schaltfläche `Sprachansagen testen` verwenden. Es bietet mehrere Ansagebeispiele für jeden Typ von OsmAnd-Ansage, wobei eine große Bandbreite von Zahlen verwendet wird, um die Formatierung und Aussprache von Zeit/Entfernung zu testen. Die Beschriftung der Schaltfläche gibt den grundlegenden Inhalt der Ansage an, der genaue Wortlaut ist in der tts.js-Datei angegeben, die Sie testen.
Es gibt auch eine Testschaltfläche, die Ihre Geräteeinstellungen und Sprachfähigkeiten anzeigt.

Während der Navigation kann die aktuelle Sprachansage jederzeit durch Tippen auf das Abbiegepfeil-Widget ausgelöst werden.

## 4. Erstellen einer neuen TTS-Sprachansage/Variante {#4-creating-a-new-tts-voice-languagevariant}

Einige Hinweise:

- OsmAnd liefert nur den Wortlaut, die Wortreihenfolge, die Grammatik in Bezug auf Deklinationen, Fälle, Singular/Plural usw., während die Aussprache von der TTS-Engine ausgeführt wird, die Sie auf dem Gerät verwenden (es gibt integrierte und von Drittanbietern)
- Dies geschieht in einer einzigen Sprachdefinitionsdatei pro Sprache. Auf Github befinden sich die Dateien <a href="https://github.com/osmandapp/OsmAnd-resources/tree/master/voice">hier</a>, und bitte siehe oben für die Ordner-/Dateikonventionen auf Ihrem Gerät lokal.
- Die Datei ist nun in js (von früherem PROLOG migriert, um sie Mainstream-tauglicher zu machen).
- Um eine neue Konfigurationsdatei zu erstellen, beginnen Sie bitte mit dem Klonen von _en\_tts.js_, d. h. verwenden Sie diese als Vorlage.
- Es kann dann hilfreich sein, sich vorhandene Konfigurationsdateien für grammatisch komplexere Sprachen (z. B. Deutsch, Tschechisch oder Slowakisch) anzusehen, um nach bestehenden Lösungen für spezielle Grammatik, Wortreihenfolge, Zahlenbildung usw. zu suchen. Schauen Sie sich insbesondere Sprachen an, die Ihrer ähnlich sind.
- Sie können Ihre eigene tts-Datei (oder Ihre Verbesserungen an bestehenden) lokal selbst testen, bevor Sie einen Pull-Request einreichen. Platzieren Sie sie einfach auf Ihrem Gerät mit der korrekten Datei-/Ordnerkonvention.