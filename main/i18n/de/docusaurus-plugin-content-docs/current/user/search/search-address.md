---
source-hash: cf4241ee60d46e0a3cc994e68bbced57d6c99c4266b32eabce60286e84fb0b90
sidebar_position: 2
title: Adresse suchen
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


<InfoIncompleteArticle/>

## Überblick {#overview}

Die *OsmAnd Adresssuche* basiert auf OpenStreetMap-Daten und ermöglicht es Ihnen, einen Ort und eine Wegbeschreibung zu einer bestimmten Adresse aus einer fertig sortierten Liste zu finden, sowie nach Postleitzahl oder Koordinaten zu suchen. Dieses Tool ermöglicht es Ihnen, die benötigten Adressen mit wenigen Fingertipps zu finden, was die Suchzeit verkürzt und hilft, falls Sie sich nicht an die genaue Adresse erinnern.

OsmAnd bietet mehrere Möglichkeiten, zum *Suchwerkzeug* zu gelangen, wo sich der Abschnitt **Adresse suchen** befindet.

- Die [Suchschaltfläche](../widgets/map-buttons.md#search) wird immer auf der Karte angezeigt, und ein Tippen darauf führt Sie zum [allgemeinen Bildschirm](#full-text-search) des Werkzeugs, wo Sie die Registerkarte *Adresse* finden können.
- Gehen Sie zum Haupt-Android-*Menü → Suchen → Registerkarte Adresse*.
- Wenn Sie eine Route starten möchten, tippen Sie auf *Navigation → Ziel festlegen → Suchfeld*.

## Volltextsuche {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Suche Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suche iOS](@site/static/img/search/street_search_ios.png)

</TabItem>

</Tabs>

Die Adresssuche vereinfacht den Such- und Navigationsprozess, gewährleistet Genauigkeit und Benutzerfreundlichkeit und verkürzt die Zeit, die zum Auffinden der richtigen Adresse benötigt wird.

- **Um die Adresssuchfunktion zu nutzen,** müssen Sie zuerst eine [Karte des benötigten Gebiets herunterladen](../start-with/download-maps.md).
- **Die Suche basiert auf den Daten, die im sichtbaren Bereich der Karte** auf dem Gerätebildschirm liegen. Wenn Sie nichts finden, bietet OsmAnd an, den Suchradius zu vergrößern.
- Die Adressinformationen in OsmAnd enthalten alle [OSM-Tag-Schlüssel](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).

Suchanfragenliste:

**1.** Die **Reihenfolge** der Elemente in der Liste:

- **Nach Name geordnet**. Die Auswahl von *Zuerst Stadt/Ort/Gemeinde angeben* (Android) oder *Stadt auswählen* (iOS) zeigt eine Liste an, die mit unbenannten Elementen beginnt, falls vorhanden, dann numerische Namen, gefolgt von den Namen nach Buchstaben.
- **Aufsteigende numerische Reihenfolge**. In der nächsten Suchliste werden die Hausnummern in aufsteigender Reihenfolge angezeigt, nachdem Stadt und Straße eingegeben wurden.

**2.** Jedes Feld in der Adresssuchliste enthält **Informationen** wie:

- Ein Symbol, das den Typ des Ortes identifiziert.
- Teil einer Adresse, Postleitzahl oder Koordinatenbereich.
- Entfernung von Ihrem aktuellen Standort oder vom Stadtzentrum.
- Zusätzliche Informationen, wie der Stadtteil.

#### US-Adresssuche und TIGER-Daten {#us-address-search-and-tiger-data}

OsmAnd unterstützt Adresssuchen mit OpenStreetMap-Daten, aber in den Vereinigten Staaten können die Ergebnisse der Adresssuche aufgrund der Verwendung von [TIGER-Daten](https://wiki.openstreetmap.org/wiki/TIGER) unvollständig sein.

- **TIGER-Daten liefern Adressbereiche, keine genauen Standorte**, was bedeutet, dass einige Hausnummern möglicherweise nicht erkannt werden.
- **Wenn eine Adresse nicht gefunden wird**, versuchen Sie, *nach Straßennamen* statt nach einer bestimmten Hausnummer zu suchen.
- Verwenden Sie *alternative Standortkennungen*, wie nahegelegene Orientierungspunkte oder Postleitzahlen, um Ihre Suchergebnisse zu verfeinern.

### Unterstützte Formate {#supported-formats}

Eine Liste der verfügbaren Abfragen und unterstützten Suchformate finden Sie im Artikel [Alle suchen](./search-all.md#basic-queries).

## Stadt auswählen {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Straße suchen Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Straße suchen iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**Nächste Städte**
Dies **zeigt eine kleine Liste von Städten in Ihrer Nähe** oder dem Ort, den Sie für *Straße auswählen* oder *Stadt auswählen* angegeben haben. Jedes Feld enthält ein Symbol, das der Größe der Stadt entspricht, den Namen der Stadt, die Entfernung von Ihnen zu ihrem Zentrum und für Android die Kompassrichtung.

Diese Art der Suche erleichtert das Auffinden spezifischer Orte innerhalb eines ausgewählten Ortes und bietet eine bequeme Möglichkeit, Adressen genau und schnell zu finden. Sie können die Suche nach der benötigten Adresse beginnen, indem Sie den Ort bestimmen.

- Tippen Sie dazu auf **Zuerst Stadt/Ort/Gemeinde angeben** (Android) oder **Stadt auswählen** (iOS).
- Wählen Sie in der sich öffnenden Liste den gewünschten Ort aus. [Hier](#full-text-search) wird die Reihenfolge beschrieben, in der Suchanfragen angezeigt werden und welche Informationen zu jedem Element verfügbar sind.
- Auf dem nächsten Bildschirm können Sie die Adresse weiter verfeinern oder die Schaltfläche *Auf Karte anzeigen* unter dem Sucheingabefeld auswählen.
- Um Ihre Suche zu präzisieren, können Sie den vollständigen oder nur einen Teil des Namens der Stadt, des Ortes oder des Dorfes eingeben, in dem sich die gesuchte Adresse befindet. Dadurch können Sie Ihre Suche eingrenzen und eine genauere Liste erhalten.
- Durch Tippen auf das letzte Element in der Adresse, Hausnummer oder Kreuzungsnamen öffnet sich das [Kartenkontextmenü](../map/map-context-menu.md#select-an-object-single-tap) des Objekts.

**Die Suche nach Stadt bietet folgende Vorteile:**

- *Bequemlichkeit*. Ermöglicht Ihnen, schnell die gewünschte Stadt aus der Liste auszuwählen und eine bestimmte Straße, ein Haus oder eine Kreuzung in der ausgewählten Stadt anzugeben, ohne die vollständige Adresse eingeben zu müssen. Dies spart Zeit und vereinfacht den Prozess, den richtigen Ort zu finden.
- *Präzision.* Sie können eine Stadt und Straße aus den verfügbaren Optionen auswählen, wodurch Fehler bei der manuellen Eingabe einer Adresse vermieden werden.
- *Filterung.* Die Möglichkeit, ein bestimmtes Haus aus der Liste auszuwählen, erleichtert die genaue Navigation zum gewünschten Ort, insbesondere wenn die genaue Adresse unbekannt ist.

:::note Schlüssel & Wert
*Stadt / Ort / Dorfsuche* nach [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)
*Ergebnis*: Anzeige aller Objekte mit diesem Namen.
:::

## Straße auswählen {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Straße suchen Android](@site/static/img/search/street_search.png) ![Straße suchen Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Straße suchen iOS](@site/static/img/search/address_street_search_3_ios.png) ![Straße suchen Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

Die Straßensuche wird in dem Ort durchgeführt, in dem Sie sich befinden, oder in dem Sie zuvor gesucht haben, oder der sich im Zentrum der sichtbaren Karte auf dem Anwendungsbildschirm befindet.

- Um diese Art der Suche zu verwenden, tippen Sie auf **Straße suchen** (*Android*) oder **Straße auswählen** (*iOS*).
- Im Suchfeld neben dem Stadtnamen können Sie den Straßennamen eingeben, und die Liste wird verfeinert, um Ihnen die passendsten Ergebnisse zu liefern.
- In anderen Punkten ist die Straßensuche die gleiche wie bei [Stadt auswählen](#select-city).

:::note Schlüssel & Wert
*Straßen suchen* nach [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)
*Ergebnis*: Alle Straßen mit diesem Namen werden angezeigt.
:::

## Postleitzahlensuche {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Postleitzahl suchen Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Postleitzahl suchen iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**Um die *Postleitzahlensuche* zu nutzen, müssen Sie lediglich die Nummer eingeben**, die sogar aus einer einzigen Ziffer bestehen kann, und die Anwendung bietet eine Liste der verfügbaren relevanten Postleitzahlen an.

- Wählen Sie den gewünschten Code aus und tippen Sie darauf.
- Sie können die Funktion *Postleitzahl auf der Karte anzeigen* verwenden. Dies öffnet ein [Kartenkontextmenü](../map/map-context-menu.md#select-an-object-single-tap) mit der ausgewählten Postleitzahl ohne zusätzliche Informationen zum Standort.
- Sie können Ihre Suche nach diesem Code verfeinern, indem Sie zuerst die gewünschte Straße aus der Liste und dann die Nummer auswählen.

**Die Suche nach Postleitzahl kann in folgenden Fällen nützlich sein:**

- *Adressen finden*. Wenn Sie eine Postleitzahl eingeben, identifiziert OsmAnd den entsprechenden Bereich und schlägt Adressen in diesem Bereich vor. Dies ist besonders nützlich, wenn Sie die Postleitzahl kennen, aber die genaue Adresse nicht wissen.
- *Navigationspräzision*. In Fällen, in denen die Adresse nicht sicher ist oder der Straßenname in verschiedenen Gebieten wiederholt werden kann, kann die Verwendung einer Postleitzahl die beste Route zu einer bestimmten Adresse liefern.
- *Bequemlichkeit und Geschwindigkeit*. Die Suche nach Postleitzahl ermöglicht es Ihnen, Informationen schnell zu finden, insbesondere wenn Sie die Postleitzahl kennen, aber unsicher bezüglich der Adresse sind. Anstatt die vollständige Adresse einzugeben, können Sie nur den Code eingeben und relevante Ergebnisse erhalten.

:::note
Weitere Informationen finden Sie unter **[United Kingdom Postcode data](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
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

Die [**Koordinatensuche**](../search/search-coordinates.md) ermöglicht es Ihnen, geografische Koordinaten wie Breiten- und Längengrad anzugeben, um einen bestimmten Ort zu finden. Sie liefert genaue Standorte auf einer Karte in verschiedenen [Koordinatenformaten](../search/search-coordinates.md#coordinates-search) und ermöglicht es Ihnen, verwandte Informationen zu erhalten. Diese Funktion kann nützlich sein, wenn Sie keine Adresse oder keinen genauen Namen eines Ortes haben, und kann die Reiseplanung und Navigation an unbekannten Orten erleichtern.

## Verwandte Artikel {#related-articles}

- [Alle suchen](./search-all.md)
- [Suchverlauf](./search-history.md)
- [POI suchen](./search-poi.md)
- [Koordinaten suchen](./search-coordinates.md)

> *Zuletzt aktualisiert: Juli 2024*