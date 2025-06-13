---
source-hash: 4127321256305d47dce48682c4990b76cec1e4db868aa211746d1c49c5418eb3
sidebar_position: 3
---

# Probleme bei der Adresssuche {#trace-address-search-issues}

## Adresse in der falschen Stadt gefunden {#address-found-in-the-wrong-city}

In einigen Fällen kann eine Adresssuche in OsmAnd Ergebnisse für eine andere Stadt als erwartet liefern. Diese Probleme entstehen durch die Art und Weise, wie Stadtgrenzen in OpenStreetMap (OSM) definiert und verarbeitet werden. Wenn ein Benutzer nach einem **Straßennamen** oder einer **Straße mit Hausnummer** sucht, ohne eine Stadt anzugeben, kann der **Volltextsuchalgorithmus** eine Übereinstimmung aus einer anderen Stadt zurückgeben.

### Verwandte Probleme {#related-issues}

Fälle von falschen Stadtzuweisungen wurden in den folgenden GitHub Problemen gemeldet:
[10679](https://github.com/osmandapp/OsmAnd/issues/10679), [10677](https://github.com/osmandapp/OsmAnd/issues/10677), [10699](https://github.com/osmandapp/OsmAnd/issues/10699), [10921](https://github.com/osmandapp/OsmAnd/issues/10921).


## Wie OsmAnd Stadtgrenzen identifiziert {#how-osmand-identifies-city-boundaries}

OsmAnd bestimmt die Grenze einer Stadt anhand ihrer **administrativen Relation** in OpenStreetMap. Damit eine Grenze als gültig betrachtet wird, muss sie die folgenden Kriterien erfüllen:

- Die **Grenzrelation** muss die Tags enthalten:
  - **boundary** = *administrative* oder *postal_code*
  - **place** = *[city, town, village, hamlet, etc.]*

- Die Grenzrelation muss ein **Relationselement** enthalten:
  - **label**
  - **admin_centre** oder **admin_center**
  
- Der **Name der Grenzrelation** muss exakt mit dem **Namen des Ortsknotens** übereinstimmen.

- Wenn diese Bedingungen nicht erfüllt sind, wird die Grenzrelation nicht als Stadtgrenze erkannt.

- Unter überlappenden Grenzen wählt OsmAnd die **größte Grenze** aus.

- Die **Relationswege** definieren die Grenze. OsmAnd unterstützt sowohl **innere** als auch **äußere** Wege.


## Exakte Namensübereinstimmung {#exact-name-matching}

Für eine genaue Adressverarbeitung müssen **Straßennamen exakt übereinstimmen**, einschließlich:

- Unterschiede bei **diakritischen Zeichen** (z. B. *Rue André Chenier* vs. *Rue André Chénier*).
- Variationen bei **Präfixen und Abkürzungen**.

Wenn eine Nichtübereinstimmung auftritt, kann eines der folgenden Probleme auftreten:

- Das Haus wird der **falschen Straße zugewiesen**.
- Die **gleiche Straße erscheint mehrmals** in verschiedenen Stadtgrenzen.  

Siehe GitHub Problem [10036](https://github.com/osmandapp/OsmAnd/issues/10036) für ein Beispiel.


## Mögliche Ursachen für falsche Stadtzuweisungen {#possible-causes-of-incorrect-city-assignments}

### Probleme in OpenStreetMap {#issues-in-openstreetmap}

1. **Kaputte oder fehlende Stadtgrenzen.**

   - Wenn Stadtgrenzen unvollständig, falsch oder fehlend sind, können Adresszuweisungen unzuverlässig sein.  
   - **Lösung:** Befolgen Sie die [OSM-Anleitung zur Behebung von Grenzen](https://help.openstreetmap.org/questions/1053/how-do-i-fix-inconsistent-boundaries).  
   - Beispiel: [10699](https://github.com/osmandapp/OsmAnd/issues/10699).

2. **Stadtgrenzen überlappen sich nicht korrekt.**

   - Wenn eine Straße zu zwei Städten gehört, aber falsch kartiert ist, erkennt OsmAnd die Überlappung möglicherweise nicht.  
   - **Lösung:** Passen Sie die Stadtgrenzen in OpenStreetMap an, um sicherzustellen, dass sie gemeinsame Straßen korrekt umfassen.

3. **Fehlende erforderliche Tags in der Grenzrelation.**

   - Wenn einer Relation wesentliche Tags wie **boundary=administrative** oder **place=city** fehlen, wird sie nicht verwendet.  
   - Beispiele:  
     - Problem [10921](https://github.com/osmandapp/OsmAnd/issues/10921) (fehlende Tags).  
     - Problem [12548](https://github.com/osmandapp/OsmAnd/issues/12548) (Problem mit der Grenze von *Erfstadt*).

### Probleme in OsmAnd {#issues-in-osmand}

**Adressen, die benachbarten Städten zugewiesen sind.**

- Städte, Gemeinden, Dörfer oder Vororte in der Nähe können aufgrund von Grenzüberlappungen oder fehlenden Grenzen **fälschlicherweise Adressen erben**.
- Dies ist häufig der Fall, wenn Städte in Verwaltungsgebiete unterteilt sind, aber keine klar definierten OSM-Relationen haben.  
- Siehe verwandte Berichte: [10559](https://github.com/osmandapp/OsmAnd/issues/10559), [10679](https://github.com/osmandapp/OsmAnd/issues/10679), [10730](https://github.com/osmandapp/OsmAnd/issues/10730).


## Verifizierungsmethoden {#verification-methods}

Um Probleme mit Stadtgrenzen zu überprüfen und zu beheben, vergleichen Sie die Ergebnisse verschiedener Kartentools.

### Verwendung von OpenStreetMap {#using-openstreetmap}

**Beispiel:** Gesuchte Adresse: *Wolności 223, Zabrze*  

1. Öffnen Sie OpenStreetMap (OSM).
2. Suchen Sie nach **Zabrze** und wählen Sie das Ergebnis aus, das mit einer **administrativen Grenze** verbunden ist.  
3. Zeigen Sie die Stadtgrenze an, um zu bestätigen, ob die Adresse korrekt zugewiesen ist.

### Verwendung von Nominatim {#using-nominatim}

**Beispiel:** Gesuchte Adresse: *Wolności 223, Zabrze*  

1. Suchen Sie nach der **Straße und Hausnummer**, ohne die Stadt anzugeben.  
2. Wenn das Suchergebnis die Adresse in einer anderen Stadt platziert, notieren Sie den vorgeschlagenen Stadtnamen.  
3. Geben Sie den **gefundenen Stadtnamen** in Nominatim ein.  
4. Überprüfen Sie den Wert für den **Adressrang**:
   - Beispiel: *Wolności, Maciejów*
   - Wenn Maciejów als *Vorort/Weiler (Rang 20)* aufgeführt ist, handelt es sich um eine kleinere Verwaltungseinheit einer anderen Stadt.

**Wichtig:** Seien Sie vorsichtig bei der Auswahl von Suchergebnissen, da Städte mit ähnlichen Namen in verschiedenen Regionen oder Ländern existieren können.


## US-Adresssuche und TIGER-Daten {#us-address-search-and-tiger-data}

OsmAnd verwendet OpenStreetMap-Daten für die Adresssuche, mit zusätzlichen Datenquellen wie **TIGER (Topologically Integrated Geographic Encoding and Referencing System)** vom U.S. Census Bureau. Dieser Datensatz ist bereichsbasiert und enthält keine präzisen Hausnummern. Einige Adressen können fehlen oder ungenau sein.  

Lösung von Problemen mit US-Adressen:

1. Die eingegebene Adresse wird in **Komponenten aufgeteilt**: `[Hausnummer] [Straßenname]`, `[Stadt]`, `[Bundesstaat]`, `[Postleitzahl]`

2. Das System **prüft zuerst OSM** auf eine exakte Übereinstimmung mit Hausnummern und Straßen.

3. Wenn **keine Übereinstimmung** in OSM gefunden wird, sucht das System in TIGER-Daten, die Folgendes enthalten:
    - Straßennamen und Klassifizierungen.
    - Interpolierte Hausnummernbereiche.
    - Administrative Grenzen.

4. Wenn eine **Hausnummer fehlt**, schätzt OsmAnd ihren Standort anhand der Daten in der Nähe.

5. **Rückgabe der Ergebnisse**:
    - Wenn die Adresse in OSM existiert, wird eine exakte Übereinstimmung angezeigt.
    - Wenn nur TIGER-Daten verfügbar sind, wird ein ungefähres Ergebnis bereitgestellt.
    - Wenn keine der beiden Quellen die Adresse enthält, schlägt die Suche fehl.


#### Arten von Adressdaten in TIGER {#types-of-address-data-in-tiger}

| TIGER-Datentyp            | Verwendung in OsmAnd    |
|----------------------------|--------------------|
| **Straßennamen**           | Wird für namensbasierte Suchen verwendet. |
| **Hausnummernbereiche**    | Bietet ungefähre Adressstandorte. |
| **Postleitzahlen**              | Hilft, Adressen den richtigen Postgebieten zuzuordnen. |
| **Administrative Grenzen** | Bestimmt die Standorte von Städten und Bundesstaaten. |

<br/>

#### Wann eine Adresse gefunden wird vs. nicht gefunden wird {#when-an-address-is-found-vs-not-found}

| Suchszenario     | Ergebnis in OsmAnd     |
|---------------------|----------------------|
| Adresse existiert in OSM mit Hausnummer und Straße | ✅ Exakte Übereinstimmung |
| Adresse existiert in TIGER, aber es fehlen Hausnummern | ⚠️ Ungefähre Übereinstimmung durch Interpolation |
| Adresse existiert in TIGER, enthält aber falsche Daten | ⚠️ Teilweise Übereinstimmung mit Fehlern |
| Adresse fehlt sowohl in OSM als auch in TIGER | ❌ Kein Ergebnis |


#### Einschränkungen der TIGER-Daten in OsmAnd {#limitations-of-tiger-data-in-osmand}

Mehrere Faktoren beeinflussen die Genauigkeit der Adresssuche im TIGER-basierten System:

- **Fehlende Hausnummern**. Viele Adressen in TIGER basieren auf **Interpolation**, was zu ungefähren Standorten führt.
  
- **Veraltete Straßennamen**. Straßennamen in TIGER spiegeln möglicherweise nicht die aktuellen Namenskonventionen in OSM wider.

- **Postleitzahlen-Nichtübereinstimmungen**. Grenzen in TIGER können falsch sein, was zu falschen Postleitzahlenzuweisungen führt.