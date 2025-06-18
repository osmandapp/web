---
source-hash: e0173be6fa81b710afb1b4b52c4268f63865918a50d504364df4f0d772bf2d39
title: Erstellen eines Länderpolygons
versions: '*'
---
**_Dieser Artikel muss überarbeitet werden_**

Dieser Artikel beschreibt, wie man ein Poly(gon) für ein fehlendes Land auf geofabrik.de erstellt und wie man dieses Poly zum Kartengenerierungsserver von OsmAnd hinzufügt

## Einführung {#introduction}

OsmAnd wird mit einer Menge Karten für eine Menge Länder geliefert. Die meisten Karten werden aus "Rohdaten"-Karten erstellt, die von [geofabrik.de](http://download.geofabrik.de) heruntergeladen wurden. Geofabrik stellt diese Rohdatenkarten jedem kostenlos zur Verfügung und liefert (kommerzielle) Dienstleistungen und Produkte basierend auf diesen Karten.

Geofabrik.de verfolgt die Strategie, Karten für die Länder zu liefern, die von einer größeren Anzahl von Benutzern oder von ihren Kunden angefragt werden. Das bedeutet, dass einige Karten es nie auf geofabrik schaffen, da es einfach nicht genügend Anfragen (oder gar keine) gibt, wie z.B. einige exotische Länder wie die Seychellen oder Burundi, etc.

## Serverprozess {#server-process}
Aufgrund dieser strategischen Entscheidung von geofabrik hat OsmAnd eine Option, Karten für diese Länder zu generieren, und die Tools [OsmAndMapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-development.zip) und [osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert) werden dafür verwendet. Für OsmAndMapCreator ist dies ein dreistufiger Prozess:
- OsmAndMapCreator benötigt ein Polygon, das die äußere Grenze des Landes umschließt.
- OsmAndMapCreator benötigt die "Rohdatenkarte" der nächsthöheren Ebene, die dieses Land enthält. Für Burundi bedeutet das, dass OsmAndMapCreator die Afrikakarte benötigt. Für Nordrhein-Westfalen bedeutet das, dass OsmAndMapCreator die Deutschlandkarte benötigt.
- [Osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert) erstellt eine "Rohdaten"-Karte aus dem Poly, indem es die Kartendaten aus der "Eltern"-Karte extrahiert.
- OsmAndMapCreator erstellt eine OsmAnd obf-Karte basierend auf der Zwischen-"Rohdaten"-Karte, die von osmconvert generiert wurde.

## Notwendige Aktionen {#necessary-actions}
Je nach Komplexität des (generierten) Polygons kann diese komplette Kette von Aktionen insgesamt zwischen 10 Minuten und 2 Stunden dauern.

### 1. Holen Sie sich die OpenStreetMap-Relation von Nominatim {#1-get-the-openstreetmap-relation-from-nominatim}
- Gehen Sie zu [nominatim.openstreetmap.org](https://nominatim.openstreetmap.org/)
- Geben Sie Ihren Ländernamen ein
- Sobald gefunden, klicken Sie auf den Link "(Details)"
- Scrollen Sie in den Details nach unten zu "OSM: relation " und notieren oder kopieren Sie die Relations-ID-Nummer.

### 2. Generieren Sie das Polygon {#2-generate-the-polygon}
- Gehen Sie zu [polygons.openstreetmap.fr](http://polygons.openstreetmap.fr/)
- Geben Sie die "OSM: relation "-ID-Nummer, die Sie von Nominatim für Ihr gewünschtes Land erhalten haben, in das Feld "Id of relation" ein (oder fügen Sie sie ein).
- Dies erstellt ein Standard-Polygon, das aus 250 bis 3500 Knoten (NPoints) besteht. Das Poly selbst finden Sie in der Spalte "poly".
- Bei mehr als 350 Knoten müssen Sie das Polygon vereinfachen. Je einfacher das Polygon, desto schneller kann die Länderkarte erstellt werden (natürlich abhängig vom Inhalt).

### 3. Vereinfachen Sie das Polygon {#3-simplify-the-polygon}
Die Anzahl der Knotenpunkte (NPoints) muss so gering wie möglich sein, um die Karte von OsmAndMapCreator so schnell wie möglich zu erstellen. Wie erwähnt: Bei mehr als 350 Knotenpunkten versuchen Sie, diese durch Vereinfachen des Polygons zu reduzieren.
- Bei mehr als 350 Knotenpunkten versuchen Sie, diese durch "Spielen" mit der X-Variable zu reduzieren (meiner Erfahrung nach spielen die anderen keine Rolle).
- Manchmal erzielen Sie großartige Ergebnisse (90 NPoints, 200 NPoints, 270 NPoints) und sind dann mit diesem Schritt fertig. Manchmal kommen Sie einfach nicht unter 450 NPoints oder so. Dann müssen Sie weitere manuelle Schritte anwenden.
- Speichern Sie Ihr endgültiges Polygon in einer Datei. Verwenden Sie den korrekten Standardnamen dafür, z.B. france.poly. Verwenden Sie Kleinbuchstaben.

### 4. Weitere Modifikation und Vereinfachung des Polygons {#4-further-modification-and-simplification-of-the-polygon}
- Öffnen Sie JOSM (falls nötig herunterladen) und öffnen Sie die von Ihnen erstellte Polygon-Datei (haben Sie eine Kopie/Sicherung des ursprünglichen Polygons, das Sie gespeichert haben, erstellt?).
- Fügen Sie einen Hintergrund aus dem Menü "Bilder" hinzu und wählen Sie den Standardhintergrund "OpenStreetMap (Mapnik)".
- Entfernen Sie manuell Knotenpunkte, wo möglich. \*Hinweis:\* Halten Sie das Polygon so nah wie möglich an der Grenze. Sie benötigen eine gewisse Überlappung, aber versuchen Sie, diese unter 2-5 Kilometern zu halten. Überlappungen in Ländern werden für jedes Land zweimal generiert. Weniger Überlappung bedeutet weniger Renderzeit und Renderfehler. An Küstenlinien und um Inseln herum versuchen Sie, mehr Abstand zu halten (20 Kilometer). Dies ist weitgehend akzeptiert und das Meer ist ohnehin "leer".
- Wenn Sie Ihr Bestes gegeben haben, können Sie das aktualisierte, korrigierte Poly speichern. Wie gesagt: Versuchen Sie, so wenig Knotenpunkte wie möglich zu erhalten, aber manchmal ist eine Ländergrenze so kompliziert, dass Sie einfach mehr Knotenpunkte benötigen, um sie zu beschreiben und das Polygon so nah wie möglich an der Grenze zu halten: so sei es.
- **Laden Sie das Polygon nicht auf OSM hoch**. JOSM wird Sie bitten, Ihre Arbeit auf OpenStreetMap hochzuladen. Tun Sie dies nicht für diese Polygone, es sei denn, Sie wissen genau, was Sie tun. Fast jedes Land der Welt ist bereits perfekt in OpenStreetMap abgedeckt (andernfalls könnte nominatim Ihnen keine Details über das Land geben, und polygons.openstreetmap.fr könnte das Polygon nicht basierend auf der OSM-Relations-ID generieren).

### 5. Hinzufügen des Poly(gons) zum OsmAnd-Server {#5-adding-the-polygon-to-the-osmand-server}

Um dies tun zu können, müssen Sie sich als Benutzer registrieren.

Um die Kartengenerierung zu ermöglichen, sind zwei Schritte erforderlich:
- Hinzufügen des Polygons zum Kartendatenbereich
- Hinzufügen des Landes zur Datendatei, die zur Generierung der OsmAnd obf-Karten verwendet wird.

Hinzufügen des Polygons zum Kartendatenbereich
- Gehen Sie zur Webadresse des OsmAnd-Entwicklungsservers unter [https://github.com/osmandapp/](https://github.com/osmandapp/ "https://github.com/osmandapp/")
- Wählen Sie den Abschnitt OsmAnd-misc.
- Wählen Sie "fork", um Ihr eigenes persönliches Repository zu erstellen.
- Erstellen Sie eine neue Datei und kopieren Sie Ihre Poly-Daten hinein. Speichern Sie die Datei.
- Erstellen Sie einen Pull-Request.

Hinzufügen der Kartenerstellung zur Batch-Liste
- Gehen Sie zur Webadresse des OsmAnd-Entwicklungsservers unter [github.com/osmandapp](https://github.com/osmandapp/)
- Wählen Sie den Abschnitt OsmAnd-tools.
- Wählen Sie "fork", um Ihr eigenes persönliches Repository zu erstellen.
- In Ihrem persönlichen Repository gehen Sie zum Ordner obf-generation/regions.
- Wählen Sie die Datei indexes.xml und klicken Sie auf Bearbeiten.
- Fügen Sie Ihr Land an der relevanten Stelle hinzu und speichern Sie die Datei.
- Erstellen Sie einen Pull-Request.

## Erstellen Ihrer eigenen persönlichen Karten aus einem Poly {#creating-your-own-personal-maps-from-a-poly}

Sie können zum Beispiel Polygone von Ländern, Landkreisen/Provinzen/Bundesstaaten, Regionen und Städten erstellen.

Angenommen, Ihre Tochter fährt für ein paar Tage mit einer Freundin nach Paris. Sie ist nicht an Navigation, Wandern oder Radfahren interessiert (es sei denn, es ist unbedingt notwendig), aber sie möchte wissen, wo sie ist, wohin sie gehen soll und wo sie die interessanten Orte (POIs) finden kann. Außerdem hat sie ein kleines Telefon (Low-End-CPU, wenig Speicher) und eine kleine SD-Karte (voll mit Musik). Daher muss die Karte so klein wie möglich sein: sowohl für die Speicherung als auch für die Leistung. Sie können natürlich die Karte für france\_ile-de-france.obf, die Paris enthält, herunterladen, aber Sie können auch eine "maßgeschneiderte" Paris-Karte generieren.
- Lassen Sie Ihre Tochter OsmAnd herunterladen, oder noch besser: lassen Sie sie OsmAnd+ kaufen
- Holen Sie sich die OSM-Relations-ID für Paris von Nominatim.
- Holen Sie sich das (vereinfachte) Poly für die Paris-ID von polygons.openstreetmap.fr
- Laden Sie [osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert) herunter oder kompilieren Sie es
- Laden Sie die "Rohdaten"-Karte von Ile-de-France von geofabrik.de herunter
- Erstellen Sie eine Rohdatenkarte von Paris aus der Ile-de-France-Karte und dem Paris-Poly wie folgt:
<pre>
$ osmconvert ile-de-france.osm.pbf -B=paris.poly --out-pbf > Paris.osm.pbf
</pre>
- Laden Sie die OsmAndMapCreator-Anwendung von [download.osmand.net/latest-night-build/](http://download.osmand.net/latest-night-build/ "https://download.osmand.net/latest-night-build/") herunter
- Erstellen Sie Ihre OsmAnd obf-Karte aus der Paris.osm.pbf-Datenkarte mit OsmAndMapCreator.