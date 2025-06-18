---
source-hash: d5b7054e046a16fa52c2baf86bbe3278c548299ab710161c6f4e85a0c2933ff7
sidebar_position: 7
---

# OsmAnd Binär-Karten - .obf {#osmand-binary-maps---obf}

## Einführung {#introduction}
Sprechen Sie über *.travel.obf, *.wiki.obf, *.roads.obf, ..

Viele Fragen betreffen den Inhalt und Probleme mit Kartendaten in der Anwendung. Dieses Thema enthüllt einige technische Details des internen Datenformats und der Datenverarbeitung. Es kann für Nicht-Entwickler interessant sein, die mit der OSM-Datenstruktur vertraut sind.

OsmAnd Offline-Kartendaten sind in 'obf'-Dateien enthalten. 'obf'-Dateien haben eine komplexe Struktur und können aus vielen Teilen bestehen. Es wird dringend empfohlen, die Dateigrößen unter 2 GB zu halten. Derzeit können obf-Dateien viele Teile haben, die aus mehreren POI-Teilen, mehreren Routing-Datenteilen, mehreren Kartenteilen, mehreren Transportteilen und mehreren Adressdatenteilen bestehen. Diese Liste kann in Zukunft erweitert werden. Um Teile aus der obf-Datei zu kombinieren, zu teilen oder zu löschen, verwenden Sie das Konsolentool 'binary\_inspector', das mit OsmAndMapCreator geliefert wird.
* POI, Transportteil
* Kartenteil
* Adressteil

> F: Wie generiert mapcreator seine Liste aller Orte, die später in OsmAnds Offline-Adresssuche erscheinen? Welche Objekte werden dafür im Detail verwendet? Welche Knoten mit einem Orts-Tag sind enthalten und welche sind ausgeschlossen?
>
> A: Alle Orte, die in OsmAnd als Städte sichtbar sind, stammen von Knoten, die den Tag "place" haben [https://wiki.openstreetmap.org/wiki/Place](https://wiki.openstreetmap.org/wiki/Place "https://wiki.openstreetmap.org/wiki/Place"). Derzeit werden city, town, suburb, village, hamlet verwendet.
>
> F: Wie behandelt mapcreator ein Gebiets-Polygon, das über eine Relation mit boundary=administrative gegeben ist? Wie ordnen Sie einen als Knoten gegebenen Ort seiner Grenze zu, wenn diese in den OSM-Daten vorhanden ist?
>
> A: Einfach ausgedrückt: Es funktioniert derzeit nach Name. Mapcreator versucht, alle Grenzen zu besuchen und eine geschlossene (!) Grenze aus der Relation oder aus getrennten Wegen zu erstellen und diese nur einem Namen zuzuordnen. Danach versucht es, \*place\* mit \*boundary name\* mithilfe des \*contains of\* Algorithmus abzugleichen. Es gibt auch eine zusätzliche Überprüfung, ob diese Grenze den Ort enthält. Wenn es viele Grenzen verschiedener admin\_level mit demselben Namen gibt (die sich gegenseitig enthalten, wie Stadtteil/Stadt/Region mit demselben Namen), wird die höchste admin\_level mit exakter Übereinstimmung ausgewählt. TODO Hier sollten weitere Details stehen (über Stadtteile der Stadt ...) ...
>
> F: Wo gibt es Dokumentation, die beschreibt, welche admin level richtig ist, um eine Zuordnung zu einem bestimmten Ortsknoten herzustellen? Welche Länder bevorzugen welchen admin level?
>
> A: Derzeit wird die Zuordnung zwischen admin\_level Relation und admin\_centre nicht verwendet. Weil nur wenige Relationen diese Information liefern.
>
> F: Woher weiß MapCreator, welche Straße zu welchem Ort gehört? Gibt es verschiedene Fälle, wenn ein Grenzpolygon gegeben ist und wenn keines vorhanden ist?
>
> A: Es gibt viele Strategien zur Überprüfung, und sie werden in der folgenden Reihenfolge priorisiert:
> - Am wichtigsten sind Orte und ihre Grenzen. Damit der Straßenverwaltungsalgorithmus korrekt funktioniert, sollten die Orte, die Grenzen zugeordnet sind, korrekt sein. Wenn die Straße zu vielen Grenzen gehört, wird sie in allen entsprechenden Orten registriert.
> - is\_in Tag (es ist veraltet). Wenn eine Straße also den is\_in Tag hat, wird er geparst und durch Komma getrennt, und die Straße wird allen relevanten Städten (durch exakte Namensübereinstimmung) zugeordnet. (ZU ÜBERPRÜFEN: grundlegende Überprüfung, ob die Straße im Stadt-Radius liegt?)
> - Wenn die Straße zu keiner Grenze gehört (nicht richtig geschlossene Grenzen könnten hier ein Problem sein), versucht sie, die nächstgelegene/größte Stadt zu finden und die Straße in dieser Stadt zu registrieren (manchmal registriert sie in einer Stadt in 1 km Entfernung und verfehlt den nächstgelegenen Weiler in nur 100 m Entfernung).
>
> Der letzte Teil ist sehr ungenau. Deshalb werden viele Straßen einer Nachbarstadt zugeordnet.
>
> In den Einstellungen von MapCreator haben Sie fünf weitere Einstellungen für Straßensuffixe, Zoom, Glätte und Rendering ... welche detaillierten Effekte können Sie damit erzielen? Werden diese Einstellungen tatsächlich verwendet?
>
> Tools
>
> - OsmAndMapCreator kann anzeigen, welche Straßen welcher Stadt zugeordnet sind (Kontextmenü -> Adresse anzeigen). Lokale obf-Dateien sollten vorhanden und in den Einstellungen konfiguriert sein.
> - Das Binary Inspector Tool kann eine Liste der Straßen für jede Stadt anzeigen. Führen Sie das Tool ohne Parameter aus, um die möglichen Parameter zu sehen.
> - Derzeit enthalten alle Indexdateien gen.log. Wenn Sie die Logdatei ansehen, können Sie Fehler im Kartenerstellungsprozess finden, und das könnte eine Antwort darauf geben, warum einige Straßen nicht im richtigen Adressindexort sind.
>
> Adressteil - Workflow
>
> Es gibt diese Relationen:
>
> Stadt -> 0..1 Grenze
>
> Grenze -> 0..\*\* Stadt (wird verwendet, um Vorort einer Stadt zu definieren)
>
> alle Osm NODEs durchlaufen und als Städte registrieren, wenn das Tag = PLACE vorhanden ist:
>
> - Städte extrahieren (STADT, ORT).
> - Dörfer extrahieren (alles andere).
>
> alle RELATIONs und WAYs mit type=boundary durchlaufen und alle Grenzen registrieren:
>
> - Grenze wird Entität (Weg oder Relation) mit Tag 'boundary=administrative' oder mit Tag 'place=...' genannt.
> - Grenze sollte admin\_level > 4 haben oder keinen admin\_level haben.
> - Grenze ist nicht immer mit einer Stadt (oder einem Staat, ...) verbunden.
> - Grenze kann 'admin\_center', 'label' Mitglied haben, das auf einen Stadtknoten zeigt.
> - Grenze stimmt genau nach Name mit Stadtknoten überein und der Stadtknoten fällt in die Grenze.
> - Grenze stimmt nach Start, Ende oder Teilzeichenkette nach Name mit Stadtknoten überein und Stadtknoten fällt in die Grenze.
>
> Viele Grenzen können mit einer Stadt verbunden sein. Hier ist die Reihenfolge, wie die wichtigste Grenze genommen und der Stadt zugeordnet wird:
>
> - Grenze wird genau nach Name abgeglichen und hat das Tag place.
> - Grenze wird genau nach Name abgeglichen und hat admin\_level 8 > 7 > 6 > 9 > 10 > 5... oder nichts.
> - Grenze hat übereinstimmende admin\_id.
> - Alle anderen Fälle einschließlich der Sortierung von admin\_level.
>
> Wenn die Stadt keine zugewiesene Grenze hat, werden alle Grenzen, die keine Stadtzentren haben und diese Stadt enthalten, überprüft, und die Grenze mit admin\_level >=7 wird zugewiesen.
>
> für jede Grenze eine Liste der Städte erstellen, die darin enthalten sind.
>
> alle RELATIONS durchlaufen und Adressen finden ([Postal\_Addresses](https://wiki.openstreetmap.org/wiki/Relations/Proposed/Postal_Addresses)):
>
> Relation mit "address" Tag-Typ und ist "house" oder "a6" address\_type.
>
> nach zugehöriger Straßenrelation und Hausmitgliedern suchen.
>
> versuchen, die Stadt für die Straße und die Stadt für die Hausadresse zu finden.
>
> Städte nachschlagen (wir müssen sie in den vorherigen Schritten bereits gefunden haben!).
>
> wenn wir Stadt und Straße haben, in Datenbank registrieren:
>
> für Straßenregistrierung, siehe: Straße für eine Stadt registrieren
>
> wenn Straße registriert ist und wir Straße verarbeiten:
>
> alle Relationsmitglieder durchlaufen:
>
> - Straße finden -> Knoten der Straße in DB schreiben
> - Haus finden -> Haus zur Straße schreiben
>
> wenn Straße registriert ist und wir Haus verarbeiten:
>
> - Hausnummer finden
> - Hausgrenze finden: wenn gefunden, speichern: Gebäude für die Straße
>
> Straße registrieren (Straße, Standort der Straße (los), Städte):
>
> **Hinweis:** Wir könnten eine Straße in mehreren Städten registrieren = das bedeutet, die Straße kann in verschachtelten Gebieten, Vororten, Städten, Weilern usw. liegen... Für jedes Gebiet möchten wir die Straße, in der sie sich befindet, registrieren.
>
> für jede Stadt:
>
> bestehende Straßenregistrierung innerhalb der Stadt finden:
>
> wenn Straße existiert:
>
> - wenn Stadtteil unbekannt ist -> den Stadtteil der bestehenden Straße aktualisieren
> - versuchen, Stadtteil für unsere Straße zu finden und die Straße erneut nachzuschlagen
>
> wenn Straße nicht existiert: (könnte sich nach dem Nachschlagen ändern)
>
> - die Straße für Stadt, Stadtteil, Standort und Straßennamen registrieren
>
> Straße finden oder registrieren
>
> - nahe Städte zur Straße finden
> - wenn die Straße in der Grenze der Stadt liegt, die Stadt zur Suche hinzufügen
> - wenn keine Stadt gefunden wurde, mithilfe der Grenze, die nächstgelegene Stadt für die Straße finden
> - Straße registrieren: für die gefundenen Städte
>
> alle NODES, dann WAYS, dann RELATIONS durchlaufen (Hauptentität durchlaufen)
>
> Wege finden - Interpolationen:
>
> - für jede Interpolation eine Straße mit dem Standort der Interpolation finden oder registrieren
> - für je zwei Knoten ein Gebäude erstellen, das die Interpolation darstellt
>
> für jede Entität addr:housenumber und addr:street Tag finden (kann auch wieder die Interpolation von Knoten sein!!!):
>
> - überspringen, wenn Gebäude für diese Entität bereits existiert!
> - Straßen für die Straße finden oder registrieren
> - die Hausnummer finden
> - wenn Hausnummer '-' enthält, versuchen, interpolierte Hausnummer zu erstellen (latlon2 fehlt?)
> - wenn Hausnummer '/' enthält, versuchen, zweite Straße addr:street2 nachzuschlagen --> scheint nur für [RU osm](https://wiki.openstreetmap.org/wiki/RU:Key:addr) zu sein:
> - es gibt weitere Variationen dafür: adr:housenumber2, addr2:street, addr2:housenumber usw...
> - für jede Straße das vorhandene Haus speichern
>
> für Weg mit Tag - name & Tag - highway, aber ohne addr:housenumber und addr:street:
>
> - **Hinweis**: Dies könnten Wege für Autos sein, mit Namen (Highway oder so)
> - überspringen, wenn solche Straße bereits existiert
> - die Straße für die Stadt finden oder registrieren
> - die Knoten für jede gefundene Straße in jeder Stadt schreiben
>
> Jede Relation mit "postal\_code", zur späteren Verwendung speichern.
>
> **Hinweis**: Dies beinhaltet nicht address:type = pc und addr:postalcode
>
> Postleitzahlen verarbeiten:
>
> - für jede gespeicherte postal\_code Relation
> - für jedes Gebäudemitglied die postal\_code aktualisieren
>
> den Index schreiben:
>
> Städte aufteilen in: Städte+Orte, Vororte (Vorort mit is\_in Tag), Dörfer (nicht Stadt oder Ort)
>
> Städte+Orte unter Verwendung von Vororten schreiben
>
> Straße aus Städten+Orten + entsprechenden Vororten für jeden Ort lesen
>
> - hier könnten mehrere Straßen mit demselben Namen für eine Stadt vorhanden sein. In diesem Fall versuchen wir, einen Stadtteil für die Straße (Vorort) zu finden, in dem sich die Straße befindet. Es sollten nicht mehr Straßen mit demselben Namen innerhalb eines Stadtteils vorhanden sein!
>
> für jede Straße
>
> - für jedes Gebäude Postleitzahl registrieren/erstellen/finden, die Straße registrieren
>
> Dörfer schreiben
>
> - wie Städte...
>
> extrahierte Postleitzahlen und ihre Straßen schreiben
