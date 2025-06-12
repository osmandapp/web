---
source-hash: d5b7054e046a16fa52c2baf86bbe3278c548299ab710161c6f4e85a0c2933ff7
sidebar_position: 7
---

# OsmAnd Binäre Karten - .obf {#osmand-binary-maps---obf}

## Einführung {#introduction}
Sprechen Sie über *.travel.obf, *.wiki.obf, *.roads.obf, ..

Viele Fragen beziehen sich auf den Inhalt und Probleme mit Kartendaten in der Anwendung. Dieses Thema enthüllt einige technische Details des internen Datenformats und der Datenverarbeitung. Es kann für Nicht-Entwickler interessant sein, die mit der OSM-Datenstruktur vertraut sind.

OsmAnd Offline-Kartendaten sind in 'obf'-Dateien enthalten. 'obf'-Dateien haben eine komplexe Struktur und können aus vielen Teilen bestehen. Es wird dringend empfohlen, die Dateigrößen unter 2 GB zu halten. Derzeit können obf-Dateien viele Teile enthalten, die aus mehreren POI-Teilen, mehreren Routing-Datenteilen, mehreren Kartenteilen, mehreren Transportteilen und mehreren Adressdatenteilen bestehen. Diese Liste kann in Zukunft erweitert werden. Um Teile aus der obf-Datei zu kombinieren, zu teilen oder zu löschen, verwenden Sie das Konsolenwerkzeug 'binary\_inspector', das mit OsmAndMapCreator geliefert wird.
* POI, Transportteil
* Kartenteil
* Adressteil

> F: Wie generiert MapCreator seine Liste aller Orte, die später in OsmAnds Offline-Adresssuche erscheinen? Welche Objekte werden dafür im Detail verwendet? Welche Knoten mit einem Orts-Tag sind enthalten und welche ausgeschlossen?
>
> A: Alle Orte, die in OsmAnd als Städte sichtbar sind, stammen von Knoten, die das Tag "place" haben [https://wiki.openstreetmap.org/wiki/Place](https://wiki.openstreetmap.org/wiki/Place "https://wiki.openstreetmap.org/wiki/Place"). Derzeit werden city, town, suburb, village, hamlet verwendet.
>
> F: Wie behandelt MapCreator ein Flächenpolygon, das über eine Relation mit boundary=administrative gegeben ist? Wie ordnen Sie einen als Knoten gegebenen Ort seiner Grenze zu, wenn diese in den OSM-Daten vorhanden ist?
>
> A: Einfach gesagt: Es funktioniert derzeit nach Namen. MapCreator versucht, alle Grenzen zu besuchen und eine geschlossene (!) Grenze aus der Relation oder aus getrennten Wegen zu erstellen und sie nur einem Namen zuzuordnen. Danach versucht es, \*place\* mit \*boundary name\* mithilfe des \*contains of\* Algorithmus abzugleichen. Es gibt auch eine zusätzliche Überprüfung, ob diese Grenze den Ort enthält. Wenn es viele Grenzen unterschiedlicher admin\_level mit demselben Namen gibt (die sich gegenseitig enthalten, wie z. B. Bezirk/Stadt/Region mit demselben Namen), wird die höchste admin\_level mit exakter Übereinstimmung ausgewählt. TODO Hier sollten weitere Details stehen (über Stadtteile ...) ...
>
> F: Wo gibt es Dokumentation, die beschreibt, welcher admin level richtig ist, um eine Zuordnung zu einem bestimmten Ortsknoten herzustellen? Welche Länder bevorzugen welchen admin level?
>
> A: Derzeit wird die Zuordnung zwischen admin\_level Relation und admin\_centre nicht verwendet. Weil nur wenige Relationen diese Information liefern.
>
> F: Woher weiß MapCreator, welche Straße zu welchem Ort gehört? Gibt es unterschiedliche Fälle, wenn ein Grenzpolygon gegeben ist und wenn keines vorhanden ist?
>
> A: Es gibt viele Strategien zur Überprüfung, und sie werden in der folgenden Reihenfolge priorisiert:
> - Am wichtigsten sind Orte und ihre Grenzen. Damit der Straßenverwaltungsalgorithmus korrekt funktioniert, sollten die Orte, die Grenzen zugeordnet sind, korrekt sein. Wenn die Straße zu vielen Grenzen gehört, wird sie in allen entsprechenden Orten registriert.
> - is\_in Tag (es ist veraltet). Wenn eine Straße also das is\_in Tag hat, wird es geparst und durch Komma getrennt, und die Straße wird allen relevanten Städten (durch exakte Namensübereinstimmung) zugeordnet. (ZU ÜBERPRÜFEN: grundlegende Überprüfung, ob die Straße im Radius der Stadt liegt?)
> - Wenn die Straße zu keiner Grenze gehört (nicht richtig geschlossene Grenzen könnten hier ein Problem sein), versucht sie, die nächstgelegene/größte Stadt zu finden und die Straße in dieser Stadt zu registrieren (manchmal registriert sie in einer Stadt in 1 km Entfernung und verpasst den nächstgelegenen Weiler in nur 100 m Entfernung).
>
> Der letzte Teil ist sehr ungenau. Deshalb werden viele Straßen einer Nachbarstadt zugeordnet.
>
> In den Einstellungen von MapCreator haben Sie fünf weitere Einstellungen für Straßensuffixe, Zoom, Glätte und Rendering ... welche detaillierten Effekte können Sie mit jeder davon erzielen? Werden diese Einstellungen tatsächlich verwendet?
>
> Werkzeuge
>
> -   OsmAndMapCreator kann anzeigen, welche Straßen welcher Stadt zugeordnet sind (Kontextmenü -> Adresse anzeigen). Lokale obf-Dateien sollten vorhanden und in den Einstellungen konfiguriert sein.
> -   Das Binary Inspector Tool kann eine Liste der Straßen für jede Stadt anzeigen. Führen Sie das Tool ohne Parameter aus, um die möglichen Parameter anzuzeigen.
> -   Derzeit enthalten alle Indexdateien gen.log. Wenn Sie die Protokolldatei anzeigen, können Sie Fehler im Kartenerstellungsprozess finden, und das könnte eine Antwort darauf geben, warum einige Straßen nicht im richtigen Adressindexort sind.
>
> Adressteil - Workflow
>
> Es gibt diese Relationen:
>
> Stadt -> 0..1 Grenze
>
> Grenze -> 0..\*\* Stadt (wird verwendet, um Vorort einer Stadt zu definieren)
>
> alle Osm-KNOTEN durchlaufen und als Städte registrieren, wenn das Tag = PLACE vorhanden ist:
>
> -   Städte extrahieren (TOWN, CITY).
> -   Dörfer extrahieren (alles andere).
>
> alle RELATIONEN und WEGE mit type=boundary durchlaufen und alle Grenzen registrieren:
>
> -   Grenze wird als Entität (Weg oder Relation) mit dem Tag 'boundary=administrative' oder mit dem Tag 'place=...' bezeichnet.
> -   Grenze sollte admin\_level > 4 haben oder keinen admin\_level haben.
> -   Grenze ist nicht immer einer Stadt (oder einem Bundesland, ...) zugeordnet.
> -   Grenze kann 'admin\_center', 'label' Member haben, die auf einen Stadtknoten zeigen.
> -   Grenze stimmt genau nach Namen mit dem Stadtknoten überein und der Stadtknoten liegt innerhalb der Grenze.
> -   Grenze stimmt nach Anfang, Ende oder Teilstring nach Namen mit dem Stadtknoten überein und der Stadtknoten liegt innerhalb der Grenze.
>
> Viele Grenzen können einer Stadt zugeordnet werden. Hier ist die Reihenfolge, wie die wichtigste Grenze genommen und der Stadt zugeordnet wird:
>
> -   Grenze wird genau nach Namen abgeglichen und hat das Tag place.
> -   Grenze wird genau nach Namen abgeglichen und hat admin\_level 8 > 7 > 6 > 9 > 10 > 5... oder nichts.
> -   Grenze hat übereinstimmende admin\_id.
> -   Alle anderen Fälle einschließlich Sortierung nach admin\_level.
>
> Wenn die Stadt keine zugewiesene Grenze hat, werden alle Grenzen, die keine Stadtzentren haben und diese Stadt enthalten, überprüft, und die Grenze mit admin\_level >=7 wird zugewiesen.
>
> für jede Grenze eine Liste der Städte erstellen, die sich darin befinden.
>
> alle RELATIONEN durchlaufen und Adressen finden ([Postal\_Addresses](https://wiki.openstreetmap.org/wiki/Relations/Proposed/Postal_Addresses)):
>
> Relation mit "address" Tag-Typ und ist "house" oder "a6" address\_type.
>
> nach zugehöriger Straßenrelation und Haus-Membern suchen.
>
> versuchen, die Stadt für die Straße und die Stadt für die Hausadresse zu finden.
>
> Städte nachschlagen (wir müssen sie bereits in den vorherigen Schritten gefunden haben!).
>
> wenn wir Stadt und Straße haben, in der Datenbank registrieren:
>
> für Straßenregistrierung, siehe: Straße für eine Stadt registrieren
>
> wenn Straße registriert ist und wir Straße verarbeiten:
>
> alle Relations-Member durchlaufen:
>
> -   Straße finden -> die Knoten der Straße in die Datenbank schreiben
> -   Haus finden -> das Haus der Straße zuordnen
>
> wenn Straße registriert ist und wir Haus verarbeiten:
>
> -   Hausnummer finden
> -   Hausgrenze finden: wenn gefunden, speichern: Gebäude für die Straße
>
> Straße registrieren (Straße, Lage der Straße (los), Städte):
>
> **Hinweis:** Wir können eine Straße mehreren Städten zuordnen = das bedeutet, die Straße kann in verschachtelten Gebieten, Vororten, Städten, Weilern usw. liegen... Für jedes Gebiet möchten wir die Straße registrieren, in der sie sich befindet.
>
> für jede Stadt:
>
> bestehende Straßenregistrierung innerhalb der Stadt finden:
>
> wenn Straße existiert:
>
> -   wenn Stadtteil unbekannt ist -> den Stadtteil der bestehenden Straße aktualisieren
> -   versuchen, Stadtteil für unsere Straße zu finden und die Straße erneut nachzuschlagen
>
> wenn Straße nicht existiert: (kann sich nach dem Nachschlagen ändern)
>
> -   die Straße für Stadt, Stadtteil, Lage und Straßennamen registrieren
>
> Straße finden oder registrieren
>
> -   nahe gelegene Städte zur Straße finden
> -   wenn die Straße in der Grenze der Stadt liegt, die Stadt zur Suche hinzufügen
> -   wenn keine Stadt gefunden wurde, mithilfe der Grenze, die nächstgelegene Stadt für die Straße finden
> -   Straße registrieren: für die gefundenen Städte
>
> alle KNOTEN, dann WEGE, dann RELATIONEN durchlaufen (Hauptentität durchlaufen)
>
> Wege finden - Interpolationen:
>
> -   für jede Interpolation eine Straße mit der Lage der Interpolation finden oder registrieren
> -   für jeweils zwei Knoten ein Gebäude erstellen, das die Interpolation darstellt
>
> für jede Entität addr:housenumber und addr:street Tag finden (kann auch wieder die Interpolation von Knoten sein!!!):
>
> -   überspringen, wenn Gebäude für diese Entität bereits existiert!
> -   Straßen für die Straße finden oder registrieren
> -   die Hausnummer finden
> -   wenn Hausnummer '-' enthält, versuchen, interpolierte Hausnummer zu erstellen (latlon2 fehlt?)
> -   wenn Hausnummer '/' enthält, versuchen, zweite Straße nachzuschlagen addr:street2 --> scheint nur für [RU osm](https://wiki.openstreetmap.org/wiki/RU:Key:addr) zu sein:
> -   es gibt weitere Variationen dafür: adr:housenumber2, addr2:street, addr2:housenumber etc...
> -   für jede Straße das vorhandene Haus speichern
>
> für Weg mit Tag - name & Tag - highway, aber ohne addr:housenumber und addr:street:
>
> -   **Hinweis**: dies können Wege für Autos sein, mit Namen (highway, oder so)
> -   überspringen, wenn solche Straße bereits existiert
> -   die Straße für die Stadt finden oder registrieren
> -   die Knoten für jede gefundene Straße in jeder Stadt schreiben
>
> Jede Relation mit "postal\_code" zur späteren Verwendung speichern.
>
> **Hinweis**: dies beinhaltet nicht address:type = pc und addr:postalcode
>
> Postleitzahlen verarbeiten:
>
> -   für jede gespeicherte postal\_code Relation
> -   für jedes Gebäude-Member die postal\_code aktualisieren
>
> den Index schreiben:
>
> Städte aufteilen in: Städte+Orte, Vororte (Vorort mit is\_in Tag), Dörfer (nicht Stadt oder Ort)
>
> Städte+Orte unter Verwendung von Vororten schreiben
>
> Straße aus Städten+Orten + entsprechenden Vororten für jeden Ort lesen
>
> -   hier kann es mehr Straßen mit demselben Namen für eine Stadt geben, in diesem Fall versuchen wir, einen Stadtteil für die Straße (Vorort) zu finden, in dem sich die Straße befindet. Es sollten nicht mehr Straßen mit demselben Namen innerhalb eines Stadtteils sein!
>
> für jede Straße
>
> -   für jedes Gebäude Postleitzahl registrieren/erstellen/finden, Straße registrieren
>
> Dörfer schreiben
>
> -   wie bei Städten...
>
> extrahierte Postleitzahlen und ihre Straßen schreiben
