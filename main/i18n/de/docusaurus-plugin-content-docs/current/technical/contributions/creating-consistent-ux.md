---
source-hash: 00c5daf74a16f214549f0a88cc1cb9258c0e4c09765d41d21306b6e11418fa8c
sidebar_position: 2
---

# Schaffung einer konsistenten Benutzererfahrung {#creating-a-consistent-user-experience}

Die Benutzerfreundlichkeit unserer komplexen Funktionen wird durch die Formulierung und gute Übersetzungen sowie durch möglichst viel Konsistenz entscheidend verbessert. Es lohnt sich, über viele Ausdrücke oder Sätze eine Weile nachzudenken. :)

Bitte beachten Sie Folgendes:

## 1. Konsistente Formulierung {#1-consistent-wording}

Verwenden Sie nur **einen Ausdruck** für eine bestimmte Funktion, mischen Sie nicht zwei mögliche Ausdrücke. Beispiele:

* Prüfen Sie auf vorhandene Ausdrücke und verwenden Sie diese in neuen Zeichenketten wieder
* Verwenden Sie durchgängig _"Navigation"_, nicht _"Routing"_.
* Verwenden Sie _"Tracking"_, nicht _"Überwachung"_
* Wir verwenden _"Position"_ für den Ort, an dem Sie sich befinden, während sich _"Standort"_ auf beliebige Punkte bezieht
* Wir verwenden _"Ziel"_, nicht _"Zielort"_
* Wir verwenden _"Geschwindigkeit"_, nicht _"Tempo"_
* Kennen Sie den Unterschied zwischen _"Höhe über Grund"_ und _"Höhe über Meeresspiegel"_
* Es heißt jetzt _"OsmAnd"_, nicht _"Osmand"_ :)

## 2. Textgestaltung {#2-authoring-text}

* Bitte versuchen Sie, vorhandene Zeichenkettenkonstanten so weit wie möglich wiederzuverwenden, das ist gut für den Speicher und die Leistung.
* Für sehr häufig wiederverwendbare Zeichenketten 'XXX' haben wir oft eine `shared_string_XXX`
* Zeichenketten werden oft wiederverwendet! Wenn Sie vorhandene Zeichenketten ändern, überprüfen Sie bitte _alle_ ihre Vorkommen im Code
* Unnötiger Text überfüllt Bildschirme, ohne viel zu helfen. Bitte seien Sie kurz und präzise, fügen Sie nur Wörter hinzu, die _notwendige_ Informationen vermitteln.
* Bitte überprüfen Sie das Erscheinungsbild der Formulierung in der App, insbesondere auf Geräten mit geringer Dichte. Zu viele Zeilenumbrüche, abgeschnittener Text oder aufgeblasene Menüschaltflächen können einen Bildschirm oder Dialog unbrauchbar machen.
* In einigen Fällen gibt es Konventionen, die es wert sein könnten, überprüft zu werden, anstatt "etwas zu erfinden". Wenn also 99% der kommerziellen Navigationssysteme in Ihrer Sprache "Sie haben Ihr Ziel erreicht" ansagen, dann ist die Verwendung von "Sie sind dort angekommen, wo Sie hinwollten" vielleicht nicht die beste Wahl... :)
* Kennzeichnen Sie alle Funktionen, die Internetzugang erfordern, deutlich mit dem Ausdruck "online".
* Die Basissprache für OsmAnd ist amerikanisches Englisch. Es gibt einen Übersetzungsordner für britisches Englisch für alle Ausdrücke und Schreibweisen, die sich unterscheiden.

## 3. Rendering {#3-rendering}

* Ein Hinweis zum Rendering: Das Kartenbild unserer Kartenstile wurde auf Benutzerfreundlichkeit und Sichtbarkeit an einer Vielzahl von Kartenstandorten, mit vielen Geräten und Bildschirmtechnologien sowie unter verschiedenen Lichtbedingungen getestet. _"Spontane Verbesserungen"_ am Renderer sind fast immer fragwürdig, erfordern möglicherweise zumindest mehr Untersuchung und Tests, als Sie vielleicht denken... :)