---
source-hash: 393b89f8b1f2e0e68c20954707266d0a590a4377bd6dd4c21ecdbdeb01c7e21b
sidebar_position: 3
---

# Wie man OsmAnd übersetzt - Wir brauchen Ihre Hilfe! {#how-to-translate-osmand---we-need-your-assistance}


Wir wissen Ihre Hilfe bei der Übersetzung von OsmAnd sehr zu schätzen! Die Bereitstellung von Übersetzungen für Anzeigetexte ist nicht sehr kompliziert. Die bevorzugte Methode zur Bereitstellung von Zeichenkettenübersetzungen wird hier beschrieben: [OsmAnd @ Hosted Weblate](https://hosted.weblate.org/projects/osmand/).

* Wenn eine Sprache, in die Sie übersetzen möchten, dort noch nicht aufgeführt ist, eröffnen Sie bitte ein Issue [hier](https://github.com/osmandapp/Osmand/issues) (erfordert einen Github-Account).
* Bestehende Sprachdateien könnten auch durch direkte Bearbeitung der jeweiligen _strings.xml-Datei_ in unserem Code über Github-Mechanismen geändert werden, dies ist jedoch nicht die bevorzugte Methode.
* Nur als Referenz: Die Master-Zeichenketten werden in der [amerikanischen englischen strings.xml-Datei](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/res/values/strings.xml) gespeichert. Die Zeichenkettendaten für den Kartendatenextraktor befinden sich in den Dateien `swing_messages_{language}.properties` im Projekt [DataExtractionOsm](https://github.com/osmandapp/Osmand/tree/master/DataExtractionOSM/src/net/osmand/swing) **(HINWEIS Hardy: Link ist defekt!)**.

Vielen Dank für Ihre Hilfe!

## Einige häufig gestellte Fragen und Antworten: {#some-frequent-questions-and-answers}

#### F1: Welche Zeichenketten soll ich übersetzen? {#q1-which-strings-should-i-translate}
Das Weblate-Tool ist selbsterklärend. Nur wenn Sie versuchen, Dateien direkt zu bearbeiten:
* In `strings.xml` sehen Zeichenketten wie `<string name="shared_string_save_as_gpx">Save as GPX track</string>` aus. Übersetzen Sie nur den Teil `Save route as GPX track`.
* In `swing_messages.properties` sehen Zeichenketten wie `IndexCreator.INDEX_CITIES=Indexing cities...` aus. Übersetzen Sie nur den rechten Teil `Indexing cities...`.

#### F2: Ich möchte nicht in Weblate oder Github erstellen, kann ich Ihnen die Datei einfach schicken? {#q2-i-dont-want-to-create-in-weblate-or-github-can-i-simply-post-you-the-file}
Ja, Sie können die Datei per E-Mail senden, aber bitte versuchen Sie die bevorzugten Methoden, es ist einfach.

#### F3: Wie soll ich überprüfen, was sich in der __englischen strings.xml__ geändert hat? {#q3-how-should-i-check-what-has-changed-in-the-english-stringsxml}
Bitte verwenden Sie Weblate wie oben beschrieben, es zeigt Ihnen alle Änderungen an. Wenn Sie die Quelle manuell mit Ihrer Datei vergleichen möchten: Neue Zeichenketten werden normalerweise am Anfang der Master-Sprachressourcendatei hinzugefügt. Sie können sie herunterladen und ein Dienstprogramm wie pspad oder vim verwenden, um sie zu vergleichen. Sie können auch *[blame](https://github.com/osmandapp/Osmand/blame/master/OsmAnd/res/values/strings.xml)* oder die Dateihistorie auf Github verwenden, um die letzten Änderungen anzuzeigen.

## Welche Sprachen werden in OsmAnd enthalten sein? {#what-languages-will-be-included-in-osmand}

> Liebe Übersetzer,
>
> Vielen Dank für Ihre Bemühungen, unsere Anzeigesprachenübersetzungen zu vervollständigen und OsmAnd auf [Weblate](https://hosted.weblate.org/projects/osmand/) in immer mehr Sprachen zu lokalisieren!
>
> Bitte beachten Sie Folgendes: Ich nehme gerne jede neue Sprache mit einer Übersetzungsrate von >10% in die Anzeigesprachenauswahl von OsmAnd auf (werde sie als "unvollständig" markieren, bis sie ~80% erreicht). Bitte eröffnen Sie ein Issue bei OsmAnd, wenn dies geschehen soll, ich beobachte diese Zahlen auf Weblate nur sporadisch.
>
> Leider scheinen Sprachen mit 3-stelligen ISO 639-2-Codes derzeit Probleme in Android zu haben, siehe z.B.* [https://code.google.com/p/android/issues/detail?id=49120](https://code.google.com/p/android/issues/detail?id=49120)* [https://code.google.com/p/android/issues/detail?id=106574](https://code.google.com/p/android/issues/detail?id=106574)
> Dies bedeutet, dass eine solche Sprache auf Ihrem Gerät möglicherweise nicht in den OsmAnd-Menüs angezeigt wird. (Dieses Problem betrifft nur die in den App-Menüs verwendete Sprache, nicht die auf der Karte, natürlich.)
>
> Danke,
> Dr. Hardy Müller