---
source-hash: 00c5daf74a16f214549f0a88cc1cb9258c0e4c09765d41d21306b6e11418fa8c
sidebar_position: 2
---

# Erstellen einer konsistenten Benutzererfahrung {#creating-a-consistent-user-experience}

Die Benutzerfreundlichkeit unserer komplexen Funktionen wird durch die Formulierung und gute Übersetzungen sowie durch größtmögliche Konsistenz entscheidend verbessert. Es lohnt sich, über viele Ausdrücke oder Sätze eine Weile nachzudenken. :)

Bitte beachten Sie Folgendes:

## 1. Konsistente Formulierung {#1-consistent-wording}

Verwenden Sie für eine bestimmte Funktion nur **einen Ausdruck**, mischen Sie nicht zwei mögliche Ausdrücke. Beispiele:

* Prüfen Sie auf vorhandene Ausdrücke und verwenden Sie diese in neuen Zeichenketten wieder
* Verwenden Sie durchgängig _"Navigation"_, nicht _"Routing"_.
* Verwenden Sie _"Tracking"_, nicht _"Überwachung"_
* Wir verwenden _"Position"_ für den Ort, an dem Sie sich befinden, während sich _"Standort"_ auf beliebige Punkte bezieht
* Wir verwenden _"Ziel"_, nicht _"Zielort"_
* Wir verwenden _"Geschwindigkeit"_, nicht _"Geschwindigkeit"_
* Kennen Sie den Unterschied zwischen _"Höhe über Grund"_ und _"Höhe über Meer"_
* Es heißt jetzt _"OsmAnd"_, nicht _"Osmand"_ :)

## 2. Textgestaltung {#2-authoring-text}

* Bitte versuchen Sie, so viele vorhandene Zeichenkettenkonstanten wie möglich wiederzuverwenden, das ist gut für Speicher und Leistung.
* Für stark wiederverwendbare Zeichenketten 'XXX' haben wir oft ein `shared_string_XXX`
* Zeichenketten werden oft wiederverwendet! Wenn Sie vorhandene Zeichenketten ändern, überprüfen Sie bitte alle Vorkommen im Code
* Unnötiger Text überfüllt den Bildschirm, ohne viel zu helfen. Bitte seien Sie kurz und präzise, fügen Sie nur Wörter hinzu, die _notwendige_ Informationen vermitteln.
* Überprüfen Sie bitte das Erscheinungsbild der Formulierung in der App, insbesondere auf Geräten mit geringer Dichte. Zu viele Zeilenumbrüche, abgeschnittener Text oder überdimensionierte Menüschaltflächen können einen Bildschirm oder Dialog unbrauchbar machen.
* In einigen Fällen gibt es Konventionen, die es wert sein könnten, überprüft zu werden, anstatt "etwas zu erfinden". Wenn also 99% der kommerziellen Navigationssysteme in Ihrer Sprache "Sie haben Ihr Ziel erreicht" ankündigen, dann ist die Verwendung von "Sie sind dort angekommen, wo Sie hin wollten" vielleicht nicht die beste Wahl... :)
* Kennzeichnen Sie alle Funktionen, die Internetzugang erfordern, eindeutig mit dem Ausdruck "online".
* Die Basissprache für OsmAnd ist amerikanisches Englisch. Es gibt einen Übersetzungsordner für britisches Englisch für alle Ausdrücke und Schreibweisen, die sich unterscheiden.

## 3. Rendering {#3-rendering}

* Ein Hinweis zum Rendering: Das Kartenbild unserer Kartenstile wurde auf Benutzerfreundlichkeit und Sichtbarkeit an einer Vielzahl von Kartenorten, mit vielen Geräten und Bildschirmtechnologien sowie unter verschiedenen Lichtbedingungen getestet. _"Spontane Verbesserungen"_ am Renderer sind fast immer fragwürdig, erfordern möglicherweise zumindest mehr Untersuchung und Tests, als Sie vielleicht denken... :)