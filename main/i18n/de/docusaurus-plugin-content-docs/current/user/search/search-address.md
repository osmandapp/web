---
source-hash: e36caad58f36cfd88f8d8bd575e69fdf2d3e8f63a1d4a934dba6e473f1b95388
sidebar_position: 2
title:  Adresssuche
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Übersicht {#overview}

*OsmAnd Adresssuche* basiert auf OpenStreetMap-Daten und ermöglicht es Ihnen, den Standort und die Wegbeschreibung zu einer bestimmten Adresse aus einer bereits sortierten Liste zu finden, sowie nach Postleitzahl oder Koordinaten zu suchen. Dieses Werkzeug ermöglicht es Ihnen, die gewünschten Adressen mit wenigen Fingertipps zu finden, was die Suchzeit verkürzt und hilft, falls Sie sich nicht an die genaue Adresse erinnern.

Die Adresssuche funktioniert offline mit heruntergeladenen Karten. Stellen Sie sicher, dass die Karte für die Region, in der Sie suchen, installiert ist. Die Ergebnisse hängen von den in OpenStreetMap verfügbaren Adressdaten ab.

OsmAnd sortiert Suchergebnisse automatisch, sodass nahegelegene und relevantere Ergebnisse höher in der Liste erscheinen. Auf Android können Sie die Reihenfolge mit dem Sortierchip oben in der Ergebnisliste ändern. Der Chip zeigt die ausgewählte Option an. Tippen Sie darauf und wählen Sie im Menü *Sortieren nach* eine der folgenden Optionen:
- *Relevanz* — Sortiert die Ergebnisse danach, wie gut sie mit Ihrer Abfrage übereinstimmen.
- *Nächste* — Sortiert die Ergebnisse nach Entfernung, wobei die nächstgelegenen Ergebnisse zuerst angezeigt werden.

Auch auf Android erscheinen Chips mit Objekttypen wie *Ort*, *Stadt*, *Straße* oder *Postleitzahl* über den Ergebnissen. Tippen Sie auf einen Chip, um nur Ergebnisse dieses Typs anzuzeigen. Weitere Informationen finden Sie unter [Suchergebnisse sortieren](./search-all.md#sorting-search-results).

Auf Android wird die Suche um das Kartenzentrum durchgeführt, wenn das Kartenzentrum mehr als 50 m von Ihrem Standort entfernt ist und die Karte Ihrer Position nicht folgt, und das Suchfeld zeigt *Suche N km entfernt* an. Wenn das Kartenzentrum mehr als 70 km von Ihrem Standort entfernt ist, erscheint neben dem Sortierchip ein Chip mit dem Suchbereich *Kartenmitte* oder *Mein Standort*. Tippen Sie darauf, um auszuwählen, wo gesucht werden soll. Weitere Informationen finden Sie unter [Suche um](./search-all.md#search-around).

OsmAnd bietet mehrere Möglichkeiten, zum *Suchwerkzeug* zu gelangen, wo sich der Abschnitt **Adresssuche** befindet.

- Die [Schaltfläche Suchen](../widgets/map-buttons.md#search) wird immer auf der Karte angezeigt. Ein Tippen darauf führt Sie zum [allgemeinen Bildschirm](#full-text-search) des Werkzeugs, wo Sie den Reiter *Adresse* finden.
- Gehen Sie zum Android-Hauptmenü *Menü → Suchen → Reiter Adresse*.
- Wenn Sie eine Route vorbereiten, tippen Sie auf *Navigation → Ziel festlegen → Suchfeld*.  


## Adressreiter {#address-tab}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Suche Android](@site/static/img/search/search_address_2_andr.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Suche iOS](@site/static/img/search/street_search_ios.webp)  

</TabItem>

</Tabs>

Der Reiter *Adresse* enthält Schaltflächen für verschiedene Arten der Adresssuche. Jede Schaltfläche öffnet eine Liste mit vorgeschlagenen Optionen zur Auswahl:

- [**Straße in &lt;Stadt&gt; suchen**](#select-street) (*Android*) / **Straße in &lt;Stadt&gt; auswählen** (*iOS*) — Erscheint, wenn Sie zuvor nach einer Stadt gesucht haben. Die zuletzt gesuchte Stadt ist bereits eingestellt, sodass Sie nur den Straßennamen eingeben und aus den vorgeschlagenen Straßen auswählen müssen.
- [**Zuerst Stadt/Ort/Lokalität angeben**](#select-city) (*Android*) / **Stadt auswählen** (*iOS*) — Immer verfügbar. Öffnet sofort eine Liste von Städten, Orten und Dörfern, sortiert nach Namen. Die Liste wird beim Tippen enger.
- [**Postleitzahlsuche**](#postcode-search) — Immer verfügbar. Wechselt das Suchfeld zur Postleitzahleingabe. Die Liste bleibt leer, bis Sie mindestens ein Zeichen eingeben, dann erscheinen passende Ergebnisse.
- [**Koordinatensuche**](#coordinates-search) — Immer verfügbar. Öffnet den Bildschirm zur Koordinateneingabe.

Die Liste **Nächstgelegene Städte** wird unter den Schaltflächen angezeigt und zeigt bis zu 15 Städte und Orte um den Suchort, Ihren Standort oder das Kartenzentrum herum an. Jedes Element zeigt den Namen, seinen Typ *Stadt* oder *Ort* sowie die Entfernung und Richtung vom Suchort an. Auf Android wird auch die Region angezeigt.

## Volltextsuche {#full-text-search}

OsmAnd unterstützt Volltext-Adresssuche. Das bedeutet, Sie können eine Adresse direkt im Suchfeld eingeben, anstatt Schritt für Schritt Stadt → Straße → Hausnummer auszuwählen. Die Suchmaschine versucht, Adresskomponenten wie folgt zu erkennen:
- Stadt;
- Straße;
- Hausnummer;
- Postleitzahl;
- Ortsname.

Sie müssen sie nicht in einer strengen Reihenfolge eingeben. **Beispielabfragen**:

`221B Baker Street London`  
`Baker Street 221B`  
`London Baker Street 221B`  
`101 Main Street`  
`Main Street 101`

Wenn die vollständige Adresse nicht gefunden wird, versucht OsmAnd automatisch vereinfachte Abfragen (z. B. durch Entfernen zusätzlicher Wörter), um die Chancen zu verbessern, den Standort zu finden.

Wenn eine Abfrage sowohl eine Adresse als auch einen POI betreffen kann, priorisiert OsmAnd automatisch die relevanteste Interpretation basierend auf Kontext, Entfernung und Objektwichtigkeit.

**HINWEIS:** Die Adresssuche funktioniert nur innerhalb heruntergeladener Karten. Suchergebnisse basieren auf:
- auf dem Gerät installierten Karten;
- [dem sichtbaren Kartenbereich](./search-all.md#how-to-use);
- Ihrem aktuellen Standort. 

### US-Adresssuche und TIGER-Daten {#us-address-search-and-tiger-data}

OsmAnd unterstützt die Adresssuche mit OpenStreetMap-Daten, aber in den Vereinigten Staaten können die Ergebnisse der Adresssuche aufgrund der Verwendung von [TIGER-Daten](https://wiki.openstreetmap.org/wiki/TIGER) unvollständig sein.  

- **TIGER-Daten liefern Adressbereiche, keine exakten Standorte**, das bedeutet, dass einige Hausnummern möglicherweise nicht erkannt werden.
- **Wenn eine Adresse nicht gefunden wird**, versuchen Sie, *nach dem Straßennamen* anstelle einer bestimmten Hausnummer zu suchen.
- Verwenden Sie *alternative Standortkennungen*, wie z. B. nahegelegene Sehenswürdigkeiten oder Postleitzahlen, um Ihre Suchergebnisse zu verfeinern.  

### Unterstützte Formate {#supported-formats}

OsmAnd unterstützt mehrere gängige Adressformate. Sie können Adressen in unterschiedlichen Reihenfolgen eingeben, je nachdem, wie Sie die Adresse kennen.

| Adressformat | Beispielabfragen |
|---|---|
| Hausnummer + Straße | 221B Baker Street<br />10 Downing Street |
| Doppelte Hausnummer + Straße | 243/11 Husova |
| Straße + Hausnummer | Baker Street 221B<br />Main Street 101 |
| Stadt + Straße + Hausnummer | London Baker Street 221B<br />Paris Rue de Rivoli 10 |
| Straßenschnittstellen | Broadway & Wall Street<br />Main Street and High Street |
| Stadtname | Berlin<br />Wien<br />San Francisco |
| Postleitzahl + Adresse | 10001 New York<br />75001 Paris Rue de Rivoli 10 |

### Suchtipps {#search-tips}

Die Adresssuche in OsmAnd ist tolerant gegenüber unterschiedlichen Eingabeformaten. Sie können versuchen:
- die Reihenfolge der Wörter zu ändern;
- zusätzliche Informationen zu entfernen;
- nur nach Straßennamen zu suchen.

Sehr kurze oder allgemeine Abfragen (z. B. „Apple“) können jedoch eine Mischung aus Adressen und POIs zurückgeben, einschließlich einer Marke, eines Straßennamens oder einer Ortschaft mit demselben Namen. Um die Genauigkeit zu verbessern, versuchen Sie, mehr Details wie Stadtname, Straße oder POI-Name hinzuzufügen.

Die Suchmaschine toleriert auch gängige Variationen in der Adressformatierung, wie unterschiedliche Wortreihenfolge, Schreibunterschiede, Abkürzungen oder Hausnummerformate. Die folgende Tabelle zeigt typische Suchvariationen, die möglicherweise dieselbe Adresse zurückgeben.

| Suchvariation | Beispielabfragen | Verwandte Diskussion |
|---|---|---|
| Straßennamenvariationen | [Weberstraße](https://osmand.net/map?pin=51.853672,12.042003#13/51.8545/12.0386) <br /> Weberstrasse <br /> Weber-straße <br /> Weber-strasse | [Diskussion](https://github.com/osmandapp/OsmAnd/issues/23709) |
| Ignorieren von Leerzeichen in Namen | [Goethe Straße](https://osmand.net/map?pin=51.85358,12.064447#13/51.8545/12.0386) <br /> Goethestraße | [Diskussion](https://github.com/osmandapp/OsmAnd/issues/13783) |
| Hausnummern mit Buchstabensuffixen | [30B Dragonder, Valkenswaard](https://osmand.net/map?pin=51.339645,5.4682517#19/51.3398/5.4681) <br /> 30b Dragonder, Valkenswaard <br /> 30-B Dragonder, Valkenswaard <br /> 30-b Dragonder, Valkenswaard | [Diskussion](https://github.com/osmandapp/OsmAnd/issues/23320) |
| Straßensabkürzungen | [Straelener Straße](https://osmand.net/map?pin=51.443604,6.343231#19/51.4436/6.3432) <br /> Straelener Str. | [Diskussion](https://github.com/osmandapp/OsmAnd/issues/4923) |
| Volle Adresse vs. vereinfachte Adresse | [221B Baker Street London United Kingdom](https://osmand.net/map/poi/?name=221B+Baker+Street&type=Tourist+attraction&pin=51.52339,-0.1582396) <br /> 221B Baker Street <br /> Baker Street 221B | [Diskussion](https://github.com/osmandapp/OsmAnd/issues/19004) |
| US-Adressformat | [1500 North Main Avenue, Springfield](https://osmand.net/map?pin=37.226315,-93.296524#11/37.1799/-93.3522) <br /> [4600 Sugar Maple Lane, Nashville](https://osmand.net/map?pin=36.051846,-86.95705#18/36.0516/-86.9561) | [Diskussion](https://github.com/osmandapp/OsmAnd/issues/6824) |
| US-Bundesstaatsabkürzungen | [Springfield, VA 22150](https://osmand.net/map?pin=36.51995,-86.86385#18/36.5199/-86.8635) <br /> [Manhattan Beach, CA 90266](https://osmand.net/map?pin=33.883938,-118.41048#20/33.8839/-118.4105) | [Diskussion](https://github.com/osmandapp/OsmAnd/issues/6824) |


## Stadt auswählen {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Stadtsuche Android](@site/static/img/search/town_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Stadtsuche iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

Diese Art der Suche erleichtert das Auffinden bestimmter Orte innerhalb einer ausgewählten Örtlichkeit und bietet eine bequeme Möglichkeit, Adressen genau und schnell zu finden. Sie können mit der Suche nach der benötigten Adresse beginnen, indem Sie die Örtlichkeit bestimmen.

- Tippen Sie dazu auf **Zuerst Stadt/Ort/Lokalität angeben** (Android) oder **Stadt auswählen** (iOS).
- Wählen Sie in der sich öffnenden Liste die gewünschte Örtlichkeit aus. [Hier](#full-text-search) wird die Reihenfolge beschrieben, in der die Suchanfragen angezeigt werden und welche Informationen zu jedem Element verfügbar sind.
- Auf Android tippen Sie auf den Sortierchip, um *Relevanz* oder *Nächste* auszuwählen. Wenn das Kartenzentrum mehr als 70 km von Ihrem Standort entfernt ist, verwenden Sie den Suchbereichs-Chip, um zwischen *Kartenmitte* und *Mein Standort* zu wählen. Chips mit in den Ergebnissen gefundenen Örtlichkeitstypen wie *Stadt*, *Ort* oder *Dorf* erscheinen über der Liste. Tippen Sie auf einen Chip, um nur Ergebnisse dieses Typs anzuzeigen.
- Auf dem nächsten Bildschirm können Sie entweder die Adresse weiter verfeinern oder den Ort auf der Karte anzeigen. Tippen Sie auf iOS auf *Auf der Karte anzeigen* unter dem Sucheingabefeld. Tippen Sie auf Android auf die Schaltfläche *Auf der Karte anzeigen*, die schwebende Schaltfläche in der unteren rechten Ecke.
- Um Ihre Suche zu spezifizieren, können Sie den ganzen oder nur einen Teil des Namens der Stadt, des Ortes oder des Dorfes eingeben, in dem sich die gesuchte Adresse befindet. Dies ermöglicht es Ihnen, Ihre Suche einzugrenzen und eine genauere Liste zu erhalten.
- Ein Tippen auf das letzte Element in der Adresse, die Hausnummer oder den Namen der Kreuzung, öffnet das [Kartenkontextmenü](../map/map-context-menu.md#select-an-object-single-tap) des Objekts.  

:::note Schlüssel & Wert
*Stadt- / Orts- / Dorfsuche* nach [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Ergebnis*: Anzeige aller Objekte mit diesem Namen.
:::


## Straße auswählen {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Straßensuche Android](@site/static/img/search/street_search.webp) ![Straßensuche Android](@site/static/img/search/street_search_1.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Straßensuche iOS](@site/static/img/search/address_street_search_3_ios.png) ![Straßensuche Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

Die Straßensuche wird in der zuletzt gesuchten Stadt durchgeführt. Ihr Name wird auf der Schaltfläche angezeigt, sodass Sie direkt mit der Straße beginnen können.

- Um diese Art der Suche zu verwenden, tippen Sie auf **Straße in &lt;Stadt&gt; suchen** (*Android*) oder **Straße in &lt;Stadt&gt; auswählen** (*iOS*).
- Der Stadtname ist bereits im Suchfeld eingetragen, und die Liste der Straßen der Stadt öffnet sich sofort. Im Suchfeld neben dem Stadtnamen können Sie mit der Eingabe des Straßennamens beginnen und die Liste wird verfeinert, um Ihnen die am besten passenden Ergebnisse zu liefern.
- Auf Android tippen Sie auf den Sortierchip, um *Relevanz* oder *Nächste* auszuwählen. Wenn das Kartenzentrum mehr als 70 km von Ihrem Standort entfernt ist, verwenden Sie den Suchbereichs-Chip, um zwischen *Kartenmitte* und *Mein Standort* zu wählen. Chips mit in den Ergebnissen gefundenen Objekttypen wie *Straße* oder *Gebäude* erscheinen über der Liste. Tippen Sie auf einen Chip, um nur Ergebnisse dieses Typs anzuzeigen.
- Wählen Sie eine Straße aus, um die Liste ihrer Gebäude zu öffnen. Wählen Sie die gewünschte Hausnummer aus, um das [Kartenkontextmenü](../map/map-context-menu.md#select-an-object-single-tap) der Adresse zu öffnen.
- In anderen Punkten ist die Straßensuche die gleiche wie bei [Stadt auswählen](#select-city).

:::note Schlüssel & Wert
*Straßensuche* nach [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Ergebnis*: alle Straßen mit diesem Namen werden angezeigt.
:::


## Postleitzahlsuche {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Postleitzahlsuche Android](@site/static/img/search/postcode_android.webp)

Tippen Sie auf der Registerkarte *Adresse* auf **Postleitzahlsuche**. Die Liste bleibt leer, bis Sie mit der Eingabe beginnen. Geben Sie die Postleitzahl ein, auch nur eine einzelne Ziffer, und die App bietet eine Liste passender Postleitzahlen an.

- Tippen Sie auf den Sortierchip, um *Relevanz* oder *Nächste* auszuwählen. Wenn das Kartenzentrum mehr als 70 km von Ihrem Standort entfernt ist, verwenden Sie den Suchbereichs-Chip, um zwischen *Kartenmitte* und *Mein Standort* zu wählen. Tippen Sie auf den Chip *Postleitzahl*, um nur Postleitzahlen in der Liste anzuzeigen.
- Wählen Sie die gewünschte Postleitzahl aus. Die Liste der Straßen mit dieser Postleitzahl öffnet sich, und die Postleitzahl bleibt im Suchfeld.
- Um die Adresse zu verfeinern, wählen Sie eine Straße und dann die Hausnummer aus. Dadurch wird das [Kartenkontextmenü](../map/map-context-menu.md#select-an-object-single-tap) der Adresse geöffnet.
- Um die Postleitzahl selbst auf der Karte anzuzeigen, tippen Sie auf die Schaltfläche *Auf der Karte anzeigen*, die schwebende Schaltfläche in der unteren rechten Ecke. Die Karte öffnet sich mit dem [Kontextmenü](../map/map-context-menu.md#select-an-object-single-tap) der Postleitzahl.

</TabItem>

<TabItem value="ios" label="iOS">

![Postleitzahlsuche iOS](@site/static/img/search/postcode_ios.png)

**Um die *Postleitzahlsuche* zu verwenden, müssen Sie nur die Nummer eingeben**, die sogar aus einer einzigen Ziffer bestehen kann, und die Anwendung bietet eine Liste der verfügbaren relevanten Postleitzahlen an.

- Wählen Sie den gewünschten Code aus und tippen Sie darauf.
- Sie können die Funktion *Postleitzahl *Nummer* auf der Karte anzeigen* verwenden. Dies öffnet ein [Kartenkontextmenü](../map/map-context-menu.md#select-an-object-single-tap) mit der ausgewählten Postleitzahl ohne zusätzliche Informationen über den Standort.
- Sie können Ihre Suche nach diesem Code verfeinern, indem Sie zuerst die gewünschte Straße aus der Liste und dann die Nummer auswählen.

</TabItem>

</Tabs>

**Die Suche nach Postleitzahl kann in den folgenden Fällen nützlich sein:**

- Der Straßennamen existiert in mehreren Städten.
- Sie kennen die Postleitzahl, aber nicht die genaue Adresse.

:::note
Weitere Informationen finden Sie unter **[Postleitzahldaten des Vereinigten Königreichs](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
:::


## Koordinatensuche {#coordinates-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Koordinatensuche Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Koordinatensuche iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

[**Koordinatensuche**](../search/search-coordinates.md) ermöglicht es Ihnen, geografische Koordinaten wie Breiten- und Längengrad anzugeben, um einen bestimmten Ort zu finden. Sie liefert genaue Standorte auf einer Karte in verschiedenen [Koordinatenformaten](../search/search-coordinates.md#coordinate-format) und ermöglicht es Ihnen, zugehörige Informationen zu erhalten. Diese Funktion kann nützlich sein, wenn Sie keine Adresse oder keinen genauen Namen eines Ortes haben, und kann die Planung von Reisen und die Navigation an unbekannten Orten erleichtern.  


## Verwandte Artikel {#related-articles}

- [Alle durchsuchen](./search-all.md)
- [Suchverlauf](./search-history.md)
- [POI suchen](./search-poi.md)
- [Koordinaten suchen](./search-coordinates.md)