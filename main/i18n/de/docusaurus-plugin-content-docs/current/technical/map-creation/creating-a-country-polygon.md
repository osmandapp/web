---
source-hash: e0173be6fa81b710afb1b4b52c4268f63865918a50d504364df4f0d772bf2d39
title: Erstellen eines Länderpolygons
versions: '*'
---
**_Dieser Artikel muss überarbeitet werden_**

Dieser Artikel beschreibt, wie man ein Poly(gon) für ein fehlendes Land in geofabrik.de erstellt und wie man dieses Poly zum Kartengenerierungsserver von OsmAnd hinzufügt.

## Einführung {#introduction}

OsmAnd wird mit vielen Karten für viele Länder geliefert. Die meisten Karten werden aus "Rohdaten"-Karten erstellt, die von [geofabrik.de](http://download.geofabrik.de) heruntergeladen wurden. Geofabrik stellt diese Rohdaten-Karten kostenlos zur Verfügung und bietet (kommerzielle) Dienstleistungen und Produkte auf Basis dieser Karten an.

Geofabrik.de verfolgt die Strategie, Karten für die Länder zu liefern, die von einer größeren Anzahl von Benutzern oder von ihren Kunden angefragt werden. Das bedeutet, dass einige Karten es nie auf geofabrik schaffen, da es einfach nicht genügend Anfragen gibt (oder gar keine), wie z.B. für einige exotische Länder wie die Seychellen oder Burundi, etc.

## Serverprozess {#server-process}
Aufgrund dieser strategischen Entscheidung von geofabrik hat OsmAnd die Möglichkeit, Karten für diese Länder zu generieren, und die Tools [OsmAndMapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-development.zip) und [osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert) werden dafür verwendet. Für OsmAndMapCreator ist dies ein dreistufiger Prozess:
- OsmAndMapCreator benötigt ein Polygon, das die äußere Grenze des Landes umgibt.
- OsmAndMapCreator benötigt die "Rohdatenkarte" der nächsthöheren Ebene, die dieses Land einschließt. Für Burundi bedeutet dies, dass OsmAndMapCreator die Afrikakarte benötigt. Für Nordrhein-Westfalen bedeutet dies, dass OsmAndMapCreator die Deutschlandkarte benötigt.
- [Osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert) erstellt eine "Rohdaten"-Karte aus dem Poly, indem es die Kartendaten aus der "Eltern"-Karte extrahiert.
- OsmAndMapCreator erstellt eine OsmAnd obf-Karte basierend auf der von osmconvert generierten Zwischen-"Rohdaten"-Karte.

## Notwendige Aktionen {#necessary-actions}
Je nach Komplexität des (generierten) Polygons kann diese gesamte Kette von Aktionen insgesamt zwischen 10 Minuten und 2 Stunden dauern.

### 1. OpenStreetMap-Relation von Nominatim abrufen {#1-get-the-openstreetmap-relation-from-nominatim}
- Gehen Sie zu [nominatim.openstreetmap.org](https://nominatim.openstreetmap.org/)
- Geben Sie den Namen Ihres Landes ein.
- Sobald gefunden, klicken Sie auf den Link "(details)".
- Scrollen Sie in den Details nach unten zu "OSM: relation " und notieren oder kopieren Sie die Relations-ID-Nummer.

### 2. Polygon generieren {#2-generate-the-polygon}
- Gehen Sie zu [polygons.openstreetmap.fr](http://polygons.openstreetmap.fr/)
- Geben Sie die "OSM: relation "-ID-Nummer, die Sie von Nominatim für Ihr gewünschtes Land erhalten haben, in das Feld "Id of relation" ein (oder fügen Sie sie ein).
- Dadurch wird ein Standard-Polygon erstellt, das aus 250 bis 3500 Knoten (NPoints) besteht. Das Poly selbst finden Sie in der Spalte "poly".
- Bei mehr als 350 Knoten müssen Sie das Polygon vereinfachen. Je einfacher das Polygon, desto schneller kann die Länderkarte erstellt werden (natürlich abhängig vom Inhalt).

### 3. Polygon vereinfachen {#3-simplify-the-polygon}
Die Anzahl der Knotenpunkte (NPoints) muss so gering wie möglich sein, um die Karte von OsmAndMapCreator so schnell wie möglich erstellen zu lassen. Wie erwähnt: Bei mehr als 350 Knotenpunkten versuchen Sie, diese durch Vereinfachen des Polygons zu reduzieren.
- Bei mehr als 350 Knoten versuchen Sie, diese durch "Spielen" mit der Variablen X zu reduzieren (meiner Erfahrung nach spielen die anderen keine Rolle).
- Manchmal erzielen Sie großartige Ergebnisse (90 NPoints, 200 NPoints, 270 NPoints) und sind dann mit diesem Schritt fertig. Manchmal kommen Sie einfach nicht unter 450 NPoints oder so. Dann müssen Sie weitere manuelle Schritte anwenden.
- Speichern Sie Ihr endgültiges Polygon in einer Datei. Verwenden Sie den korrekten Standardnamen dafür, z.B. france.poly. Halten Sie sich an Kleinbuchstaben.

### 4. Weitere Modifikation und Vereinfachung des Polygons {#4-further-modification-and-simplification-of-the-polygon}
- Öffnen Sie JOSM (falls erforderlich herunterladen) und öffnen Sie die von Ihnen erstellte Polygon-Datei (haben Sie eine Kopie/Sicherung des ursprünglichen Polygons erstellt, das Sie gespeichert haben?).
- Fügen Sie einen Hintergrund aus dem Menü "Bilder" hinzu und wählen Sie den Standardhintergrund "OpenStreetMap (Mapnik)".
- Entfernen Sie manuell Knotenpunkte, wo möglich. \*Hinweis:\* Halten Sie das Polygon so nah wie möglich an der Grenze. Sie benötigen eine gewisse Überlappung, aber versuchen Sie, diese unter 2-5 Kilometern zu halten. Überlappungen in Ländern werden für jedes Land zweimal generiert. Weniger Überlappung bedeutet weniger Renderzeit und Rendering-Fehler. An Küstenlinien und um Inseln herum versuchen Sie, mehr Abstand zu halten (20 Kilometer). Dies ist weitgehend akzeptiert und das Meer ist ohnehin "leer".
- Wenn Sie Ihr Bestes gegeben haben, können Sie das aktualisierte, korrigierte Poly speichern. Wie gesagt: Versuchen Sie, so wenig Knotenpunkte wie möglich zu erhalten, aber manchmal ist eine Landesgrenze so kompliziert, dass Sie einfach mehr Knotenpunkte benötigen, um sie zu beschreiben und das Polygon so nah wie möglich an der Grenze zu halten: so sei es.
- **Laden Sie das Polygon nicht auf OSM hoch**. JOSM wird Sie bitten, Ihre Arbeit auf OpenStreetMap hochzuladen. Tun Sie dies nicht für diese Polygone, es sei denn, Sie wissen genau, was Sie tun. Fast jedes Land der Welt ist bereits perfekt in OpenStreetMap abgedeckt (andernfalls könnte nominatim Ihnen keine Details über das Land geben, und polygons.openstreetmap.fr könnte das Polygon nicht basierend auf der OSM-Relations-ID generieren).

### 5. Hinzufügen des Poly(gons) zum OsmAnd-Server {#5-adding-the-polygon-to-the-osmand-server}

Um dies tun zu können, müssen Sie sich als Benutzer registrieren.

Um die Kartengenerierung zu ermöglichen, sind zwei Schritte erforderlich:
- Hinzufügen des Polygons zum Kartendatenbereich
- Hinzufügen des Landes zur Datendatei, die zur Generierung der OsmAnd obf-Karten verwendet wird.

Hinzufügen des Polygons zum Kartendatenbereich
- Gehen Sie zur Webadresse des OsmAnd-Entwicklungsservers unter [https://github.com/osmandapp/](https://github.com/osmandapp/ "https://github.com/osmandapp/")
- Wählen Sie den Bereich OsmAnd-misc.
- Wählen Sie "fork", um Ihr eigenes persönliches Repository zu erstellen.
- Erstellen Sie eine neue Datei und kopieren Sie Ihre Poly-Daten hinein. Speichern Sie die Datei.
- Erstellen Sie einen Pull-Request.

Kartenerstellung zur Batch-Liste hinzufügen
- Gehen Sie zur Webadresse des OsmAnd-Entwicklungsservers unter [github.com/osmandapp](https://github.com/osmandapp/)
- Wählen Sie den Bereich OsmAnd-tools.
- Wählen Sie "fork", um Ihr eigenes persönliches Repository zu erstellen.
- Gehen Sie in Ihrem persönlichen Repository zum Ordner obf-generation/regions.
- Wählen Sie die Datei indexes.xml aus und klicken Sie auf Bearbeiten.
- Fügen Sie Ihr Land an der entsprechenden Stelle hinzu und speichern Sie die Datei.
- Erstellen Sie einen Pull-Request.

## Erstellen eigener persönlicher Karten aus einem Poly {#creating-your-own-personal-maps-from-a-poly}

Sie können zum Beispiel Polygone von Ländern, Landkreisen/Provinzen/Bundesstaaten, Regionen und Städten erstellen.

Angenommen, Ihre Tochter fährt für ein paar Tage mit einer Freundin nach Paris. Sie ist nicht an Navigation, Wandern oder Radfahren interessiert (es sei denn, es ist absolut notwendig), aber sie möchte wissen, wo sie ist, wohin sie gehen soll und wo sie die interessanten Orte (POIs) findet. Außerdem hat sie ein kleines Telefon (Low-End-CPU, wenig Speicher) und eine kleine SD-Karte (voll mit Musik). Die Karte muss also so klein wie möglich sein: sowohl für den Speicher als auch für die Leistung. Sie können natürlich die Karte für france\_ile-de-france.obf mit Paris herunterladen, aber Sie können auch eine "maßgeschneiderte" Paris-Karte generieren.
- Lassen Sie Ihre Tochter OsmAnd herunterladen, oder noch besser: lassen Sie sie OsmAnd+ kaufen.
- Holen Sie sich die OSM-Relations-ID für Paris von Nominatim.
- Holen Sie sich das (vereinfachte) Poly für die Paris-ID von polygons.openstreetmap.fr.
- Laden Sie [osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert) herunter oder kompilieren Sie es.
- Laden Sie die "Rohdaten"-Karte von Ile-de-France von geofabrik.de herunter.
- Erstellen Sie eine Rohdatenkarte von Paris aus der Ile-de-France-Karte und dem Paris-Poly wie folgt:
<pre>
$ osmconvert ile-de-france.osm.pbf -B=paris.poly --out-pbf > Paris.osm.pbf
</pre>
- Laden Sie die Anwendung OsmAndMapCreator von [download.osmand.net/latest-night-build/](http://download.osmand.net/latest-night-build/ "https://download.osmand.net/latest-night-build/") herunter.
- Erstellen Sie Ihre OsmAnd obf-Karte aus den Paris.osm.pbf-Daten mit OsmAndMapCreator.