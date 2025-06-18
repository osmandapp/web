---
source-hash: 393b89f8b1f2e0e68c20954707266d0a590a4377bd6dd4c21ecdbdeb01c7e21b
sidebar_position: 3
---

# Wie man OsmAnd übersetzt - Wir brauchen Ihre Hilfe! {#how-to-translate-osmand---we-need-your-assistance}


Wir freuen uns sehr über Ihre Hilfe bei der Übersetzung von OsmAnd! Die Bereitstellung von Übersetzungen des Anzeigetextes ist nicht sehr kompliziert. Der bevorzugte Weg zur Bereitstellung von Zeichenketten-Übersetzungen wird hier beschrieben: [OsmAnd @ Hosted Weblate](https://hosted.weblate.org/projects/osmand/).

* Wenn eine Sprache, in die Sie übersetzen möchten, dort noch nicht aufgeführt ist, eröffnen Sie bitte ein Issue [hier](https://github.com/osmandapp/Osmand/issues) (erfordert einen Github-Account).
* Bestehende Sprachdateien könnten auch durch direkte Bearbeitung der jeweiligen _strings.xml-Datei_ in unserem Code über Github-Mechanismen geändert werden, dies ist aber nicht der bevorzugte Weg.
* Nur als Referenz: Master-Strings werden in der [amerikanisch-englischen strings.xml-Datei](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/res/values/strings.xml) gespeichert. Die String-Daten für den Kartendatenextraktor befinden sich in den `swing_messages_{language}.properties`-Dateien im Projekt [DataExtractionOsm](https://github.com/osmandapp/Osmand/tree/master/DataExtractionOSM/src/net/osmand/swing) **(HINWEIS Hardy: Link ist kaputt!)**.

Vielen Dank für Ihre Hilfe!

## Einige häufig gestellte Fragen und Antworten: {#some-frequent-questions-and-answers}

#### F1: Welche Zeichenketten soll ich übersetzen? {#q1-which-strings-should-i-translate}
Das Weblate-Tool ist selbsterklärend. Nur wenn Sie versuchen, Dateien direkt zu bearbeiten:
* In `strings.xml` sehen Zeichenketten wie `<string name="shared_string_save_as_gpx">Save as GPX track</string>` aus. Übersetzen Sie nur den Teil `Save route as GPX track`.
* In `swing_messages.properties` sehen Zeichenketten wie `IndexCreator.INDEX_CITIES=Indexing cities...` aus. Übersetzen Sie nur den rechten Teil `Indexing cities...`.

#### F2: Ich möchte nicht in Weblate oder Github erstellen, kann ich Ihnen die Datei einfach schicken? {#q2-i-dont-want-to-create-in-weblate-or-github-can-i-simply-post-you-the-file}
Ja, Sie können die Datei per E-Mail senden, aber versuchen Sie bitte die bevorzugten Wege, es ist einfach.

#### F3: Wie soll ich überprüfen, was sich in der __englischen strings.xml__ geändert hat? {#q3-how-should-i-check-what-has-changed-in-the-english-stringsxml}
Bitte verwenden Sie Weblate wie oben beschrieben, es zeigt Ihnen alle Änderungen an. Wenn Sie die Quelle manuell mit Ihrer Datei vergleichen möchten: Neue Zeichenketten werden normalerweise am Anfang der Master-Sprachressourcendatei hinzugefügt. Sie können sie herunterladen und ein Dienstprogramm wie pspad oder vim verwenden, um sie zu vergleichen. Sie können auch *[blame](https://github.com/osmandapp/Osmand/blame/master/OsmAnd/res/values/strings.xml)* oder den Dateiverlauf auf Github verwenden, um die letzten Änderungen anzuzeigen.

## Welche Sprachen werden in OsmAnd enthalten sein? {#what-languages-will-be-included-in-osmand}

> Liebe Übersetzer,
>
> Vielen Dank für Ihre Bemühungen, unsere Anzeigesprachen-Übersetzungen zu vervollständigen und OsmAnd auf [Weblate](https://hosted.weblate.org/projects/osmand/) in immer mehr Sprachen zu lokalisieren!
>
> Bitte beachten Sie Folgendes: Ich nehme gerne jede neue Sprache mit einer Übersetzungsrate von >10% in das Anzeigesprachen-Auswahlmenü von OsmAnd auf (markiere sie als "unvollständig", bis sie ~80% erreicht). Bitte erstellen Sie ein Issue bei OsmAnd, wenn dies geschehen soll, da ich diese Zahlen auf Weblate nur sporadisch beobachte.
>
> Leider scheinen Sprachen mit 3-stelligen ISO 639-2-Codes derzeit Probleme in Android zu haben, siehe z.B. * [https://code.google.com/p/android/issues/detail?id=49120](https://code.google.com/p/android/issues/detail?id=49120)* [https://code.google.com/p/android/issues/detail?id=106574](https://code.google.com/p/android/issues/detail?id=106574)
> Dies bedeutet, dass eine solche Sprache leider möglicherweise nicht in den OsmAnd-Menüs auf Ihrem Gerät angezeigt wird. (Dieses Problem betrifft nur die in den App-Menüs verwendete Sprache, nicht auf der Karte, versteht sich.)
>
> Danke,
> Dr. Hardy Müller