---
source-hash: 7371416328fd739b31ec178647a97d46782b548fb574f29facc0559cdd279011
sidebar_position: 4
title: POI-Suche
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


<InfoIncompleteArticle/>


## Überblick {#overview}

Die [OsmAnd Point of Interest](https://wiki.openstreetmap.org/wiki/Points_of_interest) (POI)-Funktionalität in OsmAnd bietet Genauigkeit, Sichtbarkeit und Komfort beim Auffinden interessanter Orte, Routen und Dienste in der Nähe Ihres aktuellen Standorts oder eines ausgewählten Bereichs auf der Karte.

Die Suchleiste ermöglicht die Eingabe von Schlüsselwörtern, die sich auf die gewünschten Orte beziehen. Die POI-Suche bietet auch eine praktische, nach [Kategorie](#poi-search-by-categories) sortierte Liste, um schnell zu finden, was Sie suchen, und der [Filter](#save-new-custom-filters) ermöglicht die Auswahl spezifischer POI-Eigenschaften, um nur relevante Ergebnisse anzuzeigen.

Die [Benutzerdefinierte Suche](#custom-poi-search) erweitert die Suchfunktionalität, indem sie mehrere Kategorie- und Unterkategorieauswahlen ermöglicht. Sie können erstellte Filter zur späteren Verwendung speichern, was das schnelle Auffinden von POIs, die spezifische Kriterien oder Präferenzen erfüllen, erleichtert. Weitere Details finden Sie im Abschnitt zum Speichern benutzerdefinierter Filter [hier](#save-new-custom-filters).

OsmAnd bietet mehrere Möglichkeiten, zum Suchwerkzeug zu gelangen, wo sich der Abschnitt **Kategoriensuche** befindet.

- Die [Suchschaltfläche](../widgets/map-buttons.md#search) wird immer auf der Karte angezeigt, und ein Tippen darauf führt Sie zum [allgemeinen Bildschirm](#how-to-use) des Werkzeugs, wo Sie die Registerkarte *Kategorien* finden.
- Gehen Sie zum Haupt-*Menü → Suche → Registerkarte Kategorien*.
- Wenn Sie eine Route vorbereiten, tippen Sie auf [*Navigation → Ziel festlegen → Suchfeld → Registerkarte Kategorien*](../navigation/setup/route-navigation.md#set-target-point).
- Gehen Sie zum Haupt-*Menü → Karte konfigurieren → POI-Overlay → Suche*](../map/point-layers-on-map.md#points-of-interest-pois).


## Verwendung {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI-Suche Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI-Suche iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

*Alle POI-Typen in OsmAnd finden Sie hier:* [gitHub-Link](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).

- **Point of Interest (POI)-Suche:**
    - Ermöglicht die Suche:
       - nach nahegelegenen oder spezifischen Kategorien von Points of Interest (POI).
       - nach [OSM-Routen](../map/routes.md).
       - nach [Beliebten Orten (Wikipedia)](../map/map-context-menu.md#details).

    - Filter und Sortierung der Ergebnisse nach Kategorie, Entfernung oder Bewertung sind möglich.

    - Suchergebnisse zeigen den Standort des POI, seine Kontaktinformationen, Bewertungen und Rezensionen.

- **POIs nach Kategorie direkt auf der Karte suchen**:
    - Sie müssen die erforderlichen Kategorien aus der [**Liste**](../map/point-layers-on-map.md#points-of-interest-pois) unter *Karte konfigurieren → POI-Overlay anzeigen...* auswählen und nach Symbolen am erwarteten Ort suchen.

    - *Android*: Sie können die Suche nach POIs unter *Menü → Suche → Kategorien* starten.

- **Markensuche:**
    - Bei der Eingabe eines Geschäfts- oder Markennamens (wie Audi, Starbucks oder Aldi) wird die Liste der Suchergebnisse nach POI-Namen priorisiert und nach Entfernung vom entsprechenden Standort sortiert.

    - Der Name des Ortes wird neben jedem Suchergebnis angezeigt, um Ihnen zu helfen, den richtigen Standort unter anderen in ähnlicher Entfernung zu identifizieren.

    - Diese Art der Suche ist praktisch, wenn ein Einzelhandelsgeschäft auf den Verkauf von Waren oder Dienstleistungen einer Marke spezialisiert ist oder wenn die Marke selbst bekannter und wiedererkennbarer ist als der Name oder die Kategorie des POI.

    - Um eine Suche durchzuführen, müssen der Tag `brand` und Markennamen zur POI-Beschreibung hinzugefügt werden.

    - Beispiel eines Autohauses: *POI-Typ* - Autohändler, *Name* - Octo Automobile, [***Markenname***](https://wiki.openstreetmap.org/wiki/Key:brand) - Audi, BMW, Fiat, Jaguar, Land Rover.

    ![POI-Suche Android](@site/static/img/search/brand_search_andr.png)


:::note
Um einige dieser Aufgaben (Adressen, POI finden) zu erledigen, benötigen Sie die Offline-Vektorkartendatei. Zunächst basiert die Suche auf Daten, die auf der Karte im sichtbaren Bereich des Gerätebildschirms liegen. Wenn Sie nichts finden, schlägt OsmAnd vor, den Suchradius zu erhöhen.
:::


## POI-Suche nach Kategorien {#poi-search-by-categories}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI-Suche Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI-Suche iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

Das Werkzeug **Suche nach Kategorien** ermöglicht es Ihnen, Objekte, Orte und Routen, die in verschiedene Kategorien eingeteilt sind, schnell zu finden. Jede Kategorie hat einen einzigartigen Satz von Merkmalen, und dieses Werkzeug verfügt über Filter, mit denen Sie die Suchergebnisse durch Auswahl verschiedener Werte für zusätzliche Merkmale verfeinern können.

Wie es funktioniert:

- *Kategorieauswahl* - Sie wählen die gewünschte Kategorie, wie Restaurants, Hotels, Geschäfte, OSM-Routen, beliebte Wikipedia-Orte und andere, aus einer vorgeschlagenen Liste von Kategorien aus.
- *Merkmalsfilter* - Nach Auswahl einer Kategorie zeigt die Anwendung zusätzliche Merkmale an, die zur Verfeinerung der Suche verwendet werden können. Zum Beispiel können für die Kategorie Restaurants Filter wie Küche (Italienisch, Chinesisch usw.), Preisspanne, Bewertung und Parkmöglichkeiten ausgewählt werden.
- *Anwenden von Filtern* - Sie wählen die erforderlichen Werte in den Filtern aus, und dann wendet die Anwendung diese Filter auf die Suchergebnisse an, um nur die Eigenschaften anzuzeigen, die den angegebenen Merkmalen entsprechen.
- *Anzeigen der Ergebnisse* - Nach dem Anwenden der Filter zeigt OsmAnd eine Liste mit kurzen Informationen an, die der Kategorie und den festgelegten Merkmalen entsprechen.

Vorteile:

- *Benutzeranpassung* - Merkmalfilter ermöglichen es Ihnen, Suchen an ihre spezifischen Bedürfnisse und Vorlieben anzupassen.
- *Verfeinerte Ergebnisse* - Filter helfen, Suchergebnisse zu verfeinern, wodurch sie relevanter und genauer werden.
- *Mehrere Kategorien* - Die OpenStreetMap-Datenbank verfügt über einen umfangreichen Satz von POI-Kategorien, die es Ihnen ermöglichen, Standorte verschiedener Typen und Kategorien zu finden.

<!--
Die POI-Kategoriensuche ermöglicht es Ihnen, interessante Orte schnell zu finden und auszuwählen, basierend auf Ihren Bedürfnissen. Es ist ein praktisches Werkzeug für Reisen, das Finden von Dienstleistungen oder interessanten Orten in der Nähe und die Planung von Routen basierend auf ausgewählten POI-Kategorien.

OsmAnd beginnt, Namen und Kategorien von POIs nach eingegebenen Wörtern zu finden. Erste Ergebnisse sind Kategorien, zweite Ergebnisse sind POIs mit zusätzlichen Informationen, vollständigem Namen, Kategorienamen, Richtung und Entfernung zum POI, Arbeitszeit. Ein Tippen auf die benötigte Kategorie öffnet die POI-Liste dieser Kategorie.

Ein Tippen auf den ausgewählten POI in der Liste öffnet das [Kartenkontextmenü](../map/map-context-menu.md#select-an-object-single-tap) des POI.
-->

### Filtertypen {#types-of-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI-Suche Android](@site/static/img/search/search_poi_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI-Suche iOS](@site/static/img/search/search_poi_filter_ios.png)

</TabItem>

</Tabs>

Mit der Funktion **Filter** können Sie die notwendigen Merkmale auswählen und erhalten als Ergebnis eine Liste, die nur relevante Objekte enthält. Um den Filter zu verwenden:

- Wählen Sie die gewünschte Kategorie aus der Kategorieliste aus.
- Tippen Sie auf dem sich öffnenden Bildschirm auf das Symbol, das den Filter anzeigt. Es befindet sich unter dem Eingabefeld, neben *Auf der Karte anzeigen*.
- Wählen Sie im Filter den Typ der Merkmale aus.

![POI-Suche Android](@site/static/img/search/search_poi_filter_icon_andr.png)

Ein Filter kann aus einer ganzen Reihe von Elementen bestehen, deren Vorhandensein von der ausgewählten Kategorie abhängt. Jede Kategorie hat eine Reihe von spezifischen Filtern, die in Ordnern nach Typ organisiert sind. Es gibt insgesamt *22 Standardkategorien*. Einige davon sind hier aufgeführt:

1. **<Translate android="true" ids="poi_filter_accomodation"/>**. [Unterkünfte](https://wiki.openstreetmap.org/wiki/Key:building#Accommodation) umfassen Einrichtungen, die temporäre Unterkünfte wie Hotels, Motels, Hostels, Pensionen und Campingplätze anbieten. Diese Orte bieten Annehmlichkeiten und Dienstleistungen für einen komfortablen Aufenthalt auf Reisen.
        Umfasst *9* Filtertypen: **Kühlschrank** (hat *2* Werte), **Heizung** (hat *7* Werte), **Internetzugangstyp** (hat *3* Werte), **Matratze** (hat *2* Werte), **Zahlungsart** (mehr als *10* Werte), **Dusche** (hat *1* Wert), **Rauchen** (hat *6* Werte), **Sternebewertung** (hat *10* Werte), **Rollstuhlgerechtigkeit** (hat *4* Werte), Jetzt geöffnet / 24/7 geöffnet.

2. **Café und Restaurant**. [Cafés](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcafe) und [Restaurants](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant) stellen gastronomische Einrichtungen dar.
        Umfasst *16* Filtertypen: **Wickeltisch** (hat *3* Werte), **Kaffee** (hat *2* Werte), **Küche** (mehr als *10* Werte), **Lieferung** (hat *1* Wert), **Diät** (hat *8* Werte), **Gericht** (mehr als *10* Werte), **Trinkwasser-Nachfüllung** (hat *1* Wert), **Drive-in** (hat *1* Wert), **Internetzugangstyp** (hat *3* Werte), **Mikrobrauerei** (hat *1* Wert), **Bio-Produkte** (hat *2* Werte), **Außensitzplätze** (hat *1* Wert), **Zahlungsart** (mehr als *10* Werte), **Rauchen** (hat *6* Werte), **Mitnahme** (hat *1* Wert), **Rollstuhlgerechtigkeit** (hat *4* Werte), Jetzt geöffnet / 24/7 geöffnet.

3. **Ladestation**. Eine [Ladestation](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcharging_station) ist eine Infrastruktureinrichtung, an der Besitzer von Elektrofahrzeugen ihre Autos, Motorräder oder andere Elektrofahrzeuge aufladen können. Diese Punkte bieten Ladegeräte und entsprechende Anschlüsse zur Energieversorgung der Fahrzeugbatterien.
        Umfasst *35* Filtertypen: **Fahrradzugang** (hat *1* Wert), **Buszugang** (hat *1* Wert), **LKW-Zugang** (hat *5* Werte), **Autozugang** (hat *1* Wert), **Rollerzugang** (hat *1* Wert), **Authentifizierung per App** (hat *1* Wert), **Authentifizierung per Chipkarte** (hat *1* Wert), **Kontaktlose Authentifizierung** (hat *1* Wert), **Authentifizierung per Schlüssel** (hat *1* Wert), **Authentifizierung erforderlich** (hat *1* Wert), **Authentifizierung per Telefonanruf** (hat *1* Wert), **Authentifizierung per Kurznachricht** (hat *1* Wert), **Gebühr** (hat *2* Werte), **Internetzugangstyp** (hat *3* Werte), **Internetzugangstyp** (hat *3* Werte), **Rollstuhlgerechtigkeit** (hat *4* Werte), Jetzt geöffnet / 24/7 geöffnet und andere.

4. **Kiosk und Supermarkt**. [Kiosk](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dconvenience) und [Supermarkt](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dsupermarket) stellen Einzelhandelseinrichtungen dar.
        Umfasst *13* Filtertypen: **Großeinkauf** (hat *2* Werte), **Bargeldabhebung** (hat *5* Werte), **Wickeltisch** (hat *3* Werte), **Kaffee** (hat *2* Werte), **Lieferung** (hat *1* Wert), **Diät** (hat *8* Werte), **Eis** (hat *1* Wert), **Bio-Produkte** (hat *2* Werte), **Zahlungsart** (mehr als *10* Werte), **Second Hand Filter** (hat *2* Werte), **Selbstbedienungskasse** (hat *2* Werte), **Rollstuhlgerechtigkeit** (hat *4* Werte), Jetzt geöffnet / 24/7 geöffnet.

5. **<Translate android="true" ids="poi_filter_emergency"/>**. [Notfall](https://wiki.openstreetmap.org/wiki/Key:emergency) umfasst Einrichtungen und Orte, die mit Notdiensten wie Krankenhäusern, Polizeistationen, Feuerwehren und Erste-Hilfe-Zentren verbunden sind.
        Enthält keine Filter.

6. **Tankstelle**. Eine [Tankstelle](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfuel), auch bekannt als Füllstation, Benzin- oder Gasstation. Es ist eine Einzelhandelseinrichtung, an der Kraftfahrzeuge betankt werden können.
        Umfasst *13* Filtertypen: **Waschanlage** (hat *2* Werte), **Bargeldabhebung** (hat *5* Werte), **Druckluft** (hat *1* Wert), **Kraftstoffart (Flug)** (hat mehr als *20* Werte), **Tankkarten** (hat *5* Werte), **Zahlungsart** (hat mehr als *20* Werte), **Selbstbedienungskasse** (hat *2* Werte), **Schneemobilzugang** (hat *3* Werte), **Ruheraum** (mehr als *1* Wert), **Staubsauger** (hat *1* Wert), **Automatischer Zapfsäule** (hat *1* Wert), **Rollstuhlgerechtigkeit** (hat *4* Werte), Jetzt geöffnet / 24/7 geöffnet.

7. **Finanzen**. [Finanzen](https://wiki.openstreetmap.org/wiki/Tag:office%3Dfinancial) werden für Büros von Unternehmen im Finanzsektor verwendet.
        Umfasst *5* Filtertypen.

8. **Essen**. [Essen](https://wiki.openstreetmap.org/wiki/Category:Food_and_beverages) umfasst alle Orte, die Speisen und Getränke liefern.
        Umfasst *24* Filtertypen.

9. **Gesundheitswesen**. [Gesundheitswesen](https://wiki.openstreetmap.org/wiki/Healthcare) umfasst Dienstleistungen, die von verschiedenen Fachleuten in verschiedenen Arten von Einrichtungen erbracht werden.
        Umfasst *13* Filtertypen.

10. **Freizeit**. [Freizeit](https://wiki.openstreetmap.org/wiki/Category:Leisure) umfasst verschiedene Arten von Orten und Einrichtungen zur Unterhaltung.
        Umfasst *15* Filtertypen.

11. **Nautisch**. Umfasst POIs, die sich auf nautische Typen beziehen.
        Enthält keine Filter.

12. **<Translate android="true" ids="poi_filter_closest_poi"/>**. Umfasst POIs, die sich in Ihrer Nähe befinden.
        Umfasst *216* Filtertypen.

13. **<Translate android="true" ids="poi_filter_parking"/>**. [Parken](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking) umfasst Einrichtungen, die von der Öffentlichkeit, Kunden oder anderen autorisierten Benutzern zum Parken von Fahrzeugen wie Autos und Lastwagen genutzt werden, allgemein bekannt als Parkplatz (britisches Englisch) oder Parkfläche (amerikanisches Englisch).
        Umfasst *34* Filtertypen.

14. **Persönlicher Transport**. Alle [Fahrzeugtypen](https://wiki.openstreetmap.org/wiki/Pl:Key:amenity#Transport) können in Ihrem Besitz sein.
        Umfasst *38* Filtertypen.

15. **Beliebte Orte (Wikipedia)**. Um in dieser Kategorie zu suchen, müssen Sie die [Wikipedia-Karte](../plugins/wikipedia.md#overview) der Region herunterladen, an der Sie interessiert sind.
        Enthält keine Filter.

16. **Privater Zugang**.
        Umfasst *6* Filtertypen.

17. **<Translate android="true" ids="poi_filter_public_transport"/>**. Es ist ein Transportsystem, das dazu dient, Menschen für öffentliche Zwecke zu befördern und allen Einwohnern und Besuchern einer Stadt oder Region zugänglich ist.
        Umfasst *9* Filtertypen.

18. **Routen**. Umfasst [OSM-Routen](../map/routes.md) für verschiedene Arten von Aktivitäten.
        Umfasst *14* Filtertypen: **Kontrollpunkt**, **Radwegenetz-Knotenpunkt**, **Wanderwegenetz-Knotenpunkt**, **Routennetz (Radfahren)**, **Routennetz (Wandern)**, **Routenpunkt-Kategorie**, **Luftsport**, **Radfahren**, **Fahren**, **Fuß**, **Motorradfahren**, **Andere Routen**, **Wassersport**, **Wintersport**.

19. **Sehenswürdigkeiten**. Es ist eine Aktivität, bei der Menschen interessante Orte oder Stätten besuchen, um sich mit ihnen vertraut zu machen und ihre Schönheit, Geschichte oder Bedeutung zu genießen.
        Umfasst *8* Filtertypen.

20. **Sport**. Umfasst Bereiche für sportliche Aktivitäten.
        Umfasst *11* Filtertypen.

21. **Geschäft**. [Geschäft](https://wiki.openstreetmap.org/wiki/Key:shop) bezieht sich auf eine Vielzahl von Einrichtungen und Unternehmen, die verschiedene Waren oder Dienstleistungen zum Verkauf anbieten, wie Lebensmittelgeschäfte, Bekleidungsgeschäfte, Elektronikgeschäfte und andere.
        Umfasst *36* Filtertypen.

22. **Tourismus**. [Tourismus](https://wiki.openstreetmap.org/wiki/Key:tourism) umfasst Orte und Dinge von besonderem Interesse für Touristen, einschließlich Sehenswürdigkeiten, Unterkünfte sowie Dinge und Orte, die Touristen Informationen und Unterstützung bieten.
        Umfasst *32* Filtertypen.

23. **Wasser**. Quellen für [Trinkwasser](https://wiki.openstreetmap.org/wiki/Key:drinking_water), die vom Menschen geschaffen oder angelegt wurden.
        Enthält keine Filter.


### Kategorien neu anordnen {#rearrange-categories}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI-Suche Android](@site/static/img/search/search_poi_rearrange_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI-Suche iOS](@site/static/img/search/search_poi_rearrange_ios.png)

</TabItem>

</Tabs>

Die Funktion "Kategorien neu anordnen" ermöglicht es Ihnen, nur die benötigten Kategorien aufzulisten und sie in der Reihenfolge anzuordnen, in der Sie sie am bequemsten verwenden.

Beschreibung und Verwendung:

- Zunächst ist *die Liste alphabetisch sortiert.* Erstellte Kategorien werden ebenfalls alphabetisch hinzugefügt.
- Änderungen in der Kategorienliste werden für jedes Profil separat vorgenommen.
- Verschieben Sie Kategorien, indem Sie sie per Drag & Drop an die richtige Position in der Liste ziehen.
- Um unnötige Kategorien *auszublenden*, tippen Sie auf das **Minus**-Symbol.
- **Verfügbar**. Zuvor *ausgeblendete* Kategorien können durch Tippen auf das **Plus**-Symbol wieder in die angezeigte Liste aufgenommen werden.
- Verwenden Sie die Schaltfläche **Auf Standard zurücksetzen**, um die Liste in den voreingestellten Zustand zurückzusetzen.
- Mit [Benutzerdefinierter Suche](#custom-poi-search) oder [Filtern](#save-new-custom-filters) erstellte Kategorien können mit dem **Löschen**-Symbol gelöscht werden.

![POI-Suche Android](@site/static/img/search/search_poi_rearrange_del_andr.png)


### Online-Suche {#online-search}

<InfoAndroidOnly />

![POI-Suche Android](@site/static/img/search/search_online_2_andr.png)

**Online-Suche** ermöglicht das Auffinden von Orten, Adressen und Points of Interest in Echtzeit. OsmAnd verwendet [Nominatim](https://nominatim.openstreetmap.org/ui/search.html), einen von OpenStreetMap entwickelten Online-Geokodierer, der Textanfragen von Benutzern in geografische Koordinaten und umgekehrt übersetzt ([*Beispiel*](#example-of-online-search-query)).

Die Online-Suche umfasst folgende Funktionen:

1. **Suche nach Ort** - Sie können den Namen einer Stadt, Straße, eines Viertels oder eines anderen Ortes eingeben, und OsmAnd liefert Ergebnisse, die der Abfrage entsprechen.
2. **Geokodierung** - Die Online-Suche wandelt Ihre Textanfragen in geografische Koordinaten um, was eine präzise Lokalisierung ermöglicht.
3. **Reverse Geokodierung** - Sie können geografische Koordinaten eingeben, und die Suche gibt den entsprechenden Ort als Stadtnamen, Straßennamen oder Ort auf der Karte zurück.
4. **Suche nach Points of Interest** - Ermöglicht die Suche nach verschiedenen Punkten nach Namen oder Kategorie.

Verwendung der Online-Suche:

- Die Online-Suche gewährleistet, dass die Daten aktuell sind und Updates verfügbar sind, da der Dienst ständig aktualisiert wird und offene Datenquellen verwendet.
- Sie bietet eine breite Abdeckung von Orten und Objekten, sodass Sie interessante Orte in verschiedenen Regionen der Welt finden können.
- Online-Suchen erfolgen in Echtzeit und bieten schnellen Zugriff auf Suchergebnisse.
- Nützlich in Städten und auf Autobahnen mit guter Internetabdeckung.
- Die Online-Suche ist bequem zu verwenden, wenn keine Karten der Region vorhanden sind und diese nicht heruntergeladen werden können.
- *Erfordert eine konstante und stabile Internetverbindung.*

![POI-Suche Android](@site/static/img/search/search_poi_online_increase2_andr.png)

Um die Ergebnisse zu verbessern, zoomen Sie vor der Verwendung des Suchwerkzeugs auf der Karte näher an den Ort heran, an dem Sie einen bestimmten Ort finden müssen. Und während der Suche können Sie den **Suchradius erhöhen**, um Orte zu finden, die weiter von Ihrem Standort entfernt sind. Wenn bei der Offline-Suche die erforderlichen Ergebnisse nicht verfügbar sind, schlägt OsmAnd die Verwendung der Online-Suche vor.

Informationen zur Online-Navigation finden Sie im Artikel [Online-Routing](../navigation/routing/online-routing.md).

#### Beispiel einer Online-Suchanfrage {#example-of-online-search-query}

*Nominatim* in OsmAnd wird als Suchmaschine für OpenStreetMap-Daten verwendet, mit der Sie nach Namen suchen können (die Adresssuche ist derzeit deaktiviert). Jedes Ergebnis hat einen Link zu einer Detailseite, um zu sehen, welche Daten über das Objekt in der Datenbank gespeichert sind.

**Beispiel-XML-Datei.** Diese XML-Datei enthält keine Stilinformationen. Der Dokumentbaum ist im [Link](https://nominatim.openstreetmap.org/search?format=xml&addressdetails=0&accept-language=en&q=%D0%9C%D1%96%D0%BD%D1%81%D0%BA+%D0%BD%D0%B5%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%B0%D1%81%D1%86%D1%96+72+&addressdetails=1&limit=300) dargestellt.


## Benutzerdefinierte POI-Suche {#custom-poi-search}

Die benutzerdefinierte POI-Suche ist eine erweiterte Suchfunktion, die es Ihnen ermöglicht, POIs aus verschiedenen Kategorien zu finden und diese für eine genauere und personalisierte Suche zu kombinieren. Im Gegensatz zur Standard-POI-Suche, die auf einige vordefinierte Kategorien beschränkt ist, bietet die benutzerdefinierte POI-Suche die Flexibilität, verschiedene Arten von POIs auszuwählen und zu kombinieren.

Sie können beispielsweise gleichzeitig nach Restaurants und Apotheken suchen, um den nächsten Ort zum Essen und dann zur Medikamenteneinnahme zu finden. Oder suchen Sie die nächste Tankstelle und Autowerkstatt, wenn Sie ein Problem mit Ihrem Auto haben.

Diese Funktionalität ist in verschiedenen Fällen besonders nützlich:

- *Reisen*. Auf Reisen können Sie mit der benutzerdefinierten Suche schnell verschiedene interessante Orte finden und diese kombinieren, um eine optimale Route zu erstellen.
- *Notfälle*. Wenn Sie schnell mehrere Arten von Diensten finden müssen, können Sie eine benutzerdefinierte POI-Suche verwenden, um alle benötigten Informationen zu erhalten.
- *Suche nach nahegelegenen Diensten*. Die benutzerdefinierte Suche ermöglicht es Ihnen, verschiedene POI-Kategorien für eine einfache Suche zu kombinieren, wenn Sie mehrere Arten von Diensten in einem bestimmten Viertel oder auf einem bestimmten Abschnitt der Route finden müssen.

### Benutzerdefinierter POI-Filter {#custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Benutzerdefinierte Suche Android](@site/static/img/search/search_custom_filter_andr.png) ![Benutzerdefinierte Suche Android](@site/static/img/search/search_custom_filter_second_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!--
![Benutzerdefinierte POI iOS](@site/static/img/search/custom_poi_ios.png) ![Benutzerdefinierte POI-Typen iOS](@site/static/img/search/custom_poi_types_ios.png)
-->

![Benutzerdefinierte POI iOS](@site/static/img/search/custom_poi_filter_1_ios.png) ![Benutzerdefinierte POI-Typen iOS](@site/static/img/search/custom_poi_filter_2_ios.png)

</TabItem>

</Tabs>

Der *benutzerdefinierte POI-Filter* enthält Sätze von Annehmlichkeitskategorien, die aus relevanten Werten bestehen. OsmAnd ermöglicht es Ihnen, die benötigten POI-Typen aus einer oder mehreren vorgeschlagenen Kategorien zu sammeln und zu kombinieren.

Um benutzerdefinierte Filter zum Auffinden von Orten auf der Karte zu erstellen, wählen Sie relevante Kategorien und Unterkategorien von Interesse aus. Sie können diese Filter zur späteren Verwendung [speichern](#save-new-custom-filters) oder bei Bedarf [bearbeiten](#edit-an-existing-filter). Alternativ können Sie die gefilterten Daten ohne Speichern anzeigen, indem Sie auf die Schaltfläche *Anzeigen* tippen. Beachten Sie jedoch, dass, wenn Sie die Filter nicht speichern, alle Auswahlen abgebrochen werden, sobald Sie die Suche wechseln oder das Suchwerkzeug verlassen.

- Jede Annehmlichkeitskategorie enthält eine Liste verfügbarer generischer Werte für POI-Typen.
- Sie haben die Möglichkeit, diese einzeln auszuwählen oder abzuwählen, indem Sie auf das Feld des gewünschten Typs tippen.
- *Alle auswählen* - Wählen Sie dazu den Umschalter aus.
- Verfeinern Sie die Liste, indem Sie unnötige ausschließen - Beginnen Sie, den vorgeschlagenen Namen in das Feld *Nach POI-Typen suchen* einzugeben.

#### Kategorien und ihre Filter {#categories-and-their-filters}

1. **<Translate android="true" ids="amenity_type_administrative"/>**. Umfasst 25 Typen: *Kleingärten, Atoll, Stadtbezirk, Stadt, Stadtblock, Land, Gerichtsgebäude, Zoll, Diplomatische Vertretung, Bauernhof, Regierung, Weiler, Insel, Inselchen, Einzelgehöft, Ortschaft, Nachbarschaft, Polizei, Gefängnis, Viertel, Wohngebiet, Vorort, Stadt, Rathaus, Dorf*.

2. **Weihnachten**. Umfasst 5 Filtertypen:
    *Weihnachtsveranstaltung, Weihnachtsmarkt, Weihnachtspyramide, Weihnachtsgeschäft, Weihnachtsbaum*.

3. **<Translate android="true" ids="amenity_type_education"/>**. Umfasst 16 Typen: *Kleingärten, Atoll, Stadtbezirk, Stadt, Stadtblock, Land, Gerichtsgebäude, Zoll, Diplomatische Vertretung, Bauernhof, Regierung, Weiler, Insel, Inselchen, Einzelgehöft, Ortschaft, Nachbarschaft, Polizei, Gefängnis, Viertel, Wohngebiet, Vorort, Stadt, Rathaus, Dorf*.

4. **<Translate android="true" ids="amenity_type_emergency"/>**. Umfasst 14 Filtertypen.

5. **Notfallinfrastruktur**. Umfasst 12 Filtertypen.

6. **<Translate android="true" ids="amenity_type_finance"/>**. Umfasst 12 Filtertypen.

7. **Essen**. Umfasst 12 Filtertypen.

8. **Gefahr**. Umfasst 5 Typen: *Lawinengefahr, Erosionsgefahr, Hochwassergefahr, Nukleare Gefahr, Rutschige Straße*.

9. **<Translate android="true" ids="amenity_type_healthcare"/>**. Umfasst 31 Filtertypen.

10. **<Translate android="true" ids="amenity_type_leisure"/>**. Umfasst 148 Filtertypen.

11. **<Translate android="true" ids="amenity_type_man_made"/>**. Umfasst 121 Filtertypen.

12. **<Translate android="true" ids="amenity_type_military"/>**. Umfasst 7 Typen: *Gefahrengebiet, Militärbunker, Militär-Marinestützpunkt, Militärbüro, Militärgelände, Militärzone, Nukleare Explosionsstelle*.

13. **<Translate android="true" ids="amenity_type_natural"/>**. Umfasst 50 Filtertypen.

14. **Nautisch**. Umfasst 41 Filtertypen.

15. **<Translate android="true" ids="amenity_type_office"/>**. Umfasst 39 Filtertypen.

16. **Beliebte Orte (Wikipedia)**. Umfasst 1 Typ: *Wikipedia*.

17. **Privater Zugang**. Enthält keine Filter.

18. **Routen**. Umfasst 15 Filtertypen.

19. **Service**. Umfasst 111 Filtertypen.

20. **<Translate android="true" ids="amenity_type_sport"/>**. Umfasst 119 Filtertypen.

21. **Geschäft**. Umfasst 156 Filtertypen.

22. **<Translate android="true" ids="amenity_type_tourism"/>**. Umfasst 103 Filtertypen.

23. **Transport**. Umfasst 97 Filtertypen.

24. **Benutzerdefiniert**. Umfasst 1 Typ: *Benutzerdefinierte andere Postleitzahl*.

<!--
:::note since OsmAnd 5.0 for Android
Verfügbar für die Suche:

- Religiöse POIs, basierend auf dem Tag `amenity=place_of_worship`, sind in religionsspezifische Orte wie Kirchen, Moscheen oder Synagogen unterteilt.
- Kleinere Annehmlichkeiten wie „Bank“, „Jugendbank“ (`amenity=bench`) sind in der Kategorieliste verfügbar.
:::
-->

### Neue benutzerdefinierte Filter speichern {#save-new-custom-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Benutzerdefinierte POI speichern Android](@site/static/img/search/custom_poi_save_android.png) ![Benutzerdefinierte POI speichern Android](@site/static/img/search/custom_poi_save_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Benutzerdefinierte POI speichern iOS](@site/static/img/search/custom_poi_save_2_ios.png)

</TabItem>

</Tabs>

Um einen benutzerdefinierten Filter zu **speichern**, wählen Sie Filtertypen aus und dann:

- Tippen Sie auf die Schaltfläche *Anzeigen* und wählen Sie die Schaltfläche *Speichern* für iOS oder die Schaltfläche mit dem *Symbol für die Speicheraktion* für Android.
- Geben Sie einen Namen für die neue Kategorie ein.
- Ihr Filter wird in der Liste der *Kategorien* im Suchwerkzeug angezeigt.

Eine weitere Möglichkeit zum **Speichern**:

- Wählen Sie *[Kategorie](#poi-search-by-categories) → [Filtersymbol](#types-of-filters) →* wählen Sie *Typen* von Merkmalen *→ Drei-Punkte-Menü → Filter speichern*.


### Bestehenden Filter bearbeiten {#edit-an-existing-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Benutzerdefinierte POI löschen Android](@site/static/img/search/custom_poi_delete_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Benutzerdefinierte POI löschen iOS](@site/static/img/search/custom_poi_delete_4_ios.png)

</TabItem>

</Tabs>

Vom Hauptbildschirm aus:

- Tippen Sie auf die Schaltfläche *Lupe* in der oberen linken Ecke des Gerätebildschirms, um das *Suchmenü* zu öffnen.
- Wählen Sie die Registerkarte *Kategorien*.
- Wählen Sie eine gespeicherte benutzerdefinierte Kategorie aus, und der Suchergebnisbildschirm wird angezeigt.
- Tippen Sie auf das *Filter*-Symbol neben *Auf Karte anzeigen*, um den *Filter*-Bildschirm zu öffnen.
- Tippen Sie auf das *Drei-Punkte-Menü*.
- Wählen Sie im Dropdown-Menü **Filter bearbeiten**.
- Um eine benutzerdefinierte POI-Suche nach der Bearbeitung zu speichern:
    - Wählen Sie POI-Kategorien und Filtertypen dafür aus *→* tippen Sie auf *Anzeigen → Drei-Punkte-Menü → Speichern unter →* geben Sie einen neuen Filternamen ein oder *speichern* Sie die Änderungen am aktuellen Filter.


### Benutzerdefinierten POI-Filter löschen {#delete-custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Benutzerdefinierte POI löschen Android](@site/static/img/search/custom_poi_delete_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Benutzerdefinierte POI löschen iOS](@site/static/img/search/custom_poi_delete_2_ios.png)

</TabItem>

</Tabs>

Sie können nur Kategorien löschen, die mit Filtern oder benutzerdefinierter Suche erstellt wurden.

- Gehen Sie zur Registerkarte [Kategorien](#poi-search-by-categories) und wählen Sie die gewünschte aus.
- Im Feld neben *Auf Karte anzeigen* tippen Sie auf das Symbol, das den *Filter* darstellt.
- Im Menü *Filter* tippen Sie auf das *Drei-Punkte-Menü* ( &#8285; ), das sich in der oberen rechten Ecke des Bildschirms befindet.
- Wählen Sie **Filter löschen**.
- ***Sie können das Löschen nicht rückgängig machen.***


#### Benutzerdefinierte Kategorien löschen (iOS) {#delete-custom-categories-ios}

![Benutzerdefinierte POI löschen iOS](@site/static/img/search/custom_poi_delete_3_ios.png)

Eine zusätzliche Option nur für die iOS-App ist **Benutzerdefinierte Kategorien löschen**.

- Dieser Punkt befindet sich am Ende der Liste der Registerkarte *Kategorien*.
- Wählen Sie die nicht benötigten Kategorien einzeln oder *Alle auswählen*.
- Tippen Sie auf die Schaltfläche **Löschen**.


## Verwandte Artikel {#related-articles}

- [Alle suchen](./search-all.md)
- [Adresse suchen](./search-address.md)
- [Suchverlauf](./search-history.md)
- [Koordinaten suchen](./search-coordinates.md)


> *Zuletzt aktualisiert: Mai 2025*