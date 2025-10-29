---
source-hash: db2ded33609f0ef8017b5258a1878156ee95899ee472c17da54d70d37f1b5789
sidebar_position: 4
title:  POI-Suche
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


## Übersicht {#overview}

[OsmAnd Points of Interest](https://wiki.openstreetmap.org/wiki/Points_of_interest) (POI) Funktionalität in OsmAnd bietet Genauigkeit, Sichtbarkeit und Komfort bei der Suche nach interessanten Orten, Routen und Dienstleistungen in der Nähe Ihres aktuellen Standorts oder eines ausgewählten Bereichs auf der Karte.

Die Suchleiste ermöglicht es Ihnen, Schlüsselwörter einzugeben, die sich auf die Orte beziehen, an denen Sie interessiert sind. Die POI-Suche präsentiert auch eine praktische, nach [Kategorie](#poi-search-by-categories) sortierte Liste, die Ihnen hilft, schnell zu finden, was Sie suchen, und der [Filter](#save-new-custom-filters) ermöglicht es Ihnen, spezifische POI-Eigenschaften auszuwählen, um nur relevante Ergebnisse anzuzeigen.

[Benutzerdefinierte Suche](#customize-poi-search) erweitert die Suchfunktionalität, indem sie die Auswahl mehrerer Kategorien und Unterkategorien ermöglicht. Sie können erstellte Filter für die zukünftige Verwendung speichern, was es einfacher macht, POIs, die bestimmten Kriterien oder Vorlieben entsprechen, schnell zu finden. Weitere Details finden Sie im Abschnitt zum Speichern benutzerdefinierter Filter [hier](#save-new-custom-filters).

OsmAnd bietet mehrere Wege, um zum Suchwerkzeug zu gelangen, wo sich der Abschnitt **Kategoriensuche** befindet.

- Die [Schaltfläche Suchen](../widgets/map-buttons.md#search) wird immer auf der Karte angezeigt. Ein Tippen darauf führt Sie zum [allgemeinen Bildschirm](#how-to-use) des Werkzeugs, wo Sie den Reiter *Kategorien* finden.
- Gehen Sie zum Hauptmenü *Menü → Suchen → Reiter Kategorien*.
- Wenn Sie eine Route vorbereiten, tippen Sie auf [*Navigation → Ziel festlegen → Suchfeld → Reiter Kategorien*](../navigation/setup/route-navigation.md#set-target-point).
- Gehen Sie zum Hauptmenü [*Menü → Karte konfigurieren → POI-Overlay → Suchen*](../map/point-layers-on-map.md#points-of-interest-pois).


## Wie man es benutzt {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI-Suche Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![POI-Suche iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

*Alle POI-Typen in OsmAnd finden Sie hier:* [github link](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).

- **Suche nach Points of Interest (POI) nach Typ und Name**:
    - Ermöglicht die Suche:
       - Nach nahegelegenen Points of Interest (POI) oder spezifischen POI-Kategorien.
       - Nach [OSM-Routen](../map/routes.md) nach Name und Referenznummer.
       - Nach [Beliebten Orten (Wikipedia)](../map/map-context-menu.md#details).
    - Filtern und Sortieren der Ergebnisse nach Kategorie, Entfernung oder Bewertung ist möglich.
    
- **POIs auf der Karte suchen** - Auf der Karte anzeigen:
    1. Sie können die erforderlichen Kategorien aus der [**Liste**](../map/point-layers-on-map.md#points-of-interest-pois) in *Karte konfigurieren → POI-Overlay anzeigen...* auswählen und nach Symbolen am erwarteten Ort suchen.
    2. Sie können zuerst eine Suchanfrage eingeben oder die Suche nach POIs in *Menü → Suchen → Kategorien* starten und dann auf **Auf der Karte anzeigen** klicken.

- **Markensuche**:
    - Die Suche nach einem Geschäftsort nach Markennamen (wie Audi, Starbucks oder Aldi) ist der Suche nach verschiedenen POIs nach Typ sehr ähnlich. Der Hauptunterschied besteht darin, dass die Markenliste innerhalb der Karte bereitgestellt wird und sich bei jedem Update ändern kann.
    - Eine Marke wird durch das OSM-Tag [***brand*** *name*](https://wiki.openstreetmap.org/wiki/Key:brand) definiert und OsmAnd sammelt eine begrenzte Anzahl von Markentypen pro Karte mit maximal 1000 Marken pro Karte, stellt jedoch sicher, dass die Liste der Marken über benachbarte Karten hinweg abgestimmt ist.

![POI-Suche Android](@site/static/img/search/brand_search_andr.png)


:::note
Um einige dieser Aufgaben zu erledigen (Adressen, POIs finden), benötigen Sie die Offline-Vektorkartendatei. Zunächst basiert die Suche auf Daten, die sich auf der Karte im sichtbaren Bereich des Gerätebildschirms befinden. Wenn Sie nichts finden, schlägt OsmAnd vor, den Suchradius zu vergrößern.
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

Das Werkzeug **Suche nach Kategorien** ermöglicht es Ihnen, schnell Objekte, Orte und Routen zu finden, die in verschiedene Kategorien eingeteilt sind. Jede Kategorie hat einen einzigartigen Satz von Merkmalen, und dieses Werkzeug verfügt über Filter, mit denen Sie die Suchergebnisse verfeinern können, indem Sie verschiedene Werte für zusätzliche Merkmale auswählen.

So funktioniert es:

- *Kategorieauswahl* - Sie wählen die gewünschte Kategorie aus einer vorgeschlagenen Liste von Kategorien aus, wie z.B. Restaurants, Hotels, Geschäfte, OSM-Routen, beliebte Wikipedia-Orte und andere.
- *Merkmalsfilter* - Nach der Auswahl einer Kategorie zeigt die Anwendung zusätzliche Merkmale an, die zur Verfeinerung der Suche verwendet werden können. Zum Beispiel können Sie für die Kategorie Restaurants Filter wie Küchentyp (italienisch, chinesisch usw.), Preisspanne, Bewertung und Parkmöglichkeiten auswählen.
- *Filter anwenden* - Sie wählen die erforderlichen Werte in den Filtern aus, und die Anwendung wendet diese Filter dann auf die Suchergebnisse an, um nur die Eigenschaften anzuzeigen, die den angegebenen Merkmalen entsprechen.
- *Ergebnisse anzeigen* - Nach dem Anwenden der Filter zeigt OsmAnd eine Liste mit kurzen Informationen an, die der eingestellten Kategorie und den Merkmalen entsprechen.

Vorteile:

- *Benutzeranpassung* - Funktionsfilter ermöglichen es Ihnen, Suchen an Ihre spezifischen Bedürfnisse und Vorlieben anzupassen.
- *Verfeinerte Ergebnisse* - Filter helfen, die Suchergebnisse zu verfeinern, wodurch sie relevanter und genauer werden.
- *Mehrere Kategorien* - Die OpenStreetMap-Datenbank verfügt über einen umfangreichen Satz von POI-Kategorien, mit denen Sie Orte verschiedener Typen und Kategorien finden können.

<!--
POI category search allows you to quickly find and select places of interest based on your needs. It is a handy tool for traveling, finding nearby services or places of interest, and planning routes based on selected POI categories.  

OsmAnd starts to find names and categories of POI by entered words. First results will be categories, second resolts will be POI with additional info, full name, categorie name, direction and distance to POI, work time. Pressing to needed categorie opens POI list of this categorie. 

Tapping to chosen POI in the list opens [Map Context menu](../map/map-context-menu.md#select-an-object-single-tap) of POI.   
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

Mit der **Filter**-Funktion können Sie die notwendigen Merkmale auswählen und erhalten als Ergebnis eine Liste, die nur relevante Objekte enthält. Um den Filter zu verwenden:

- Wählen Sie die gewünschte Kategorie aus der Kategorienliste aus.
- Tippen Sie auf dem sich öffnenden Bildschirm auf das Symbol, das den Filter anzeigt. Es befindet sich unter dem Eingabefeld, neben *Auf der Karte anzeigen*.
- Wählen Sie im Filter die Art der Merkmale aus.

![POI-Suche Android](@site/static/img/search/search_poi_filter_icon_andr.png)  

Ein Filter kann aus einer ganzen Reihe von Elementen bestehen, deren Vorhandensein von der ausgewählten Kategorie abhängt. Jede Kategorie hat eine Reihe von spezifischen Filtern, die in Ordnern nach Typ geordnet sind. Es gibt insgesamt *22 Standardkategorien*. Einige davon sind hier aufgeführt:

 1. **<Translate android="true" ids="poi_filter_accomodation"/>**. [Unterkunft](https://wiki.openstreetmap.org/wiki/Key:building#Accommodation) umfasst Einrichtungen, die eine vorübergehende Unterkunft bieten, wie Hotels, Motels, Hostels, Pensionen und Campingplätze. Diese Orte bieten Annehmlichkeiten und Dienstleistungen für einen komfortablen Aufenthalt auf Reisen.  
        Enthält *9* Filtertypen: **Kühlschrank** (hat *2* Werte), **Heizung** (hat *7* Werte), **Internetzugangstyp** (hat *3* Werte), **Matratze** (hat *2* Werte), **Zahlungsart** (mehr als *10* Werte), **Dusche** (hat *1* Wert), **Rauchen** (hat *6* Werte), **Sternebewertung** (hat *10* Werte), **Rollstuhlgerechtigkeit** (hat *4* Werte), Jetzt geöffnet / 24/7 geöffnet.

 2. **Café und Restaurant**. [Café](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcafe) und [Restaurants](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant) repräsentieren Orte der Gastronomie.  
        Enthält *16* Filtertypen: **Wickeltisch** (hat *3* Werte), **Kaffee** (hat *2* Werte), **Küche** (mehr als *10* Werte), **Lieferung** (hat *1* Wert), **Diät** (hat *8* Werte), **Gericht** (mehr als *10* Werte), **Trinkwasser nachfüllen** (hat *1* Wert), **Drive-in** (hat *1* Werte), **Internetzugangstyp** (hat *3* Werte), **Hausbrauerei** (hat *1* Wert), **Bio-Produkte** (hat *2* Werte), **Außenbestuhlung** (hat *1* Wert), **Zahlungsart** (mehr als *10* Werte), **Rauchen** (hat *6* Werte), **Zum Mitnehmen** (hat *1* Wert), **Rollstuhlgerechtigkeit** (hat *4* Werte), Jetzt geöffnet / 24/7 geöffnet.

 3. **Ladestation**. Eine [Ladestation](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcharging_station) ist eine Infrastruktureinrichtung, an der Besitzer von Elektrofahrzeugen ihre Autos, Motorräder oder andere Elektrofahrzeuge aufladen können. Diese Punkte bieten Ladegeräte und entsprechende Anschlüsse, um die Fahrzeugbatterien mit Energie zu versorgen.
        Enthält *35* Filtertypen: **Fahrradzugang** (hat *1* Wert), **Buszugang** (hat *1* Wert), **LKW-Zugang** (hat *5* Werte), **PKW-Zugang** (hat *1* Wert), **Rollerzugang** (hat *1* Wert), **Authentifizierung per App** (hat *1* Wert), **Authentifizierung per Chipkarte** (hat *1* Wert), **Kontaktlose Authentifizierung** (hat *1* Wert), **Authentifizierung per Schlüssel** (hat *1* Wert), **Authentifizierung erforderlich** (hat *1* Wert), **Authentifizierung per Telefonanruf** (hat *1* Wert) **Authentifizierung per Kurznachricht** (hat *1* Wert), **Gebühr** (hat *2* Werte), **Internetzugangstyp** (hat *3* Werte), **Internetzugangstyp** (hat *3* Werte), **Rollstuhlgerechtigkeit** (hat *4* Werte), Jetzt geöffnet / 24/7 geöffnet und andere.  

 4. **Gemischtwarenladen und Supermarkt**. [Gemischtwarenladen](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dconvenience) und [Supermarkt](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dsupermarket) repräsentieren Einzelhandelseinrichtungen.
        Enthält *13* Filtertypen: **Großeinkauf** (hat *2* Werte), **Bargeldabhebung** (hat *5* Werte), **Wickeltisch** (hat *3* Werte), **Kaffee** (hat *2* Werte), **Lieferung** (hat *1* Wert), **Diät** (hat *8* Werte), **Eiscreme** (hat *1* Wert), **Bio-Produkte** (hat *2* Werte), **Zahlungsart** (mehr als *10* Werte), **Second-Hand-Filter** (hat *2* Werte), **Selbstbedienungskasse** (hat *2* Werte), **Rollstuhlgerechtigkeit** (hat *4* Werte), Jetzt geöffnet / 24/7 geöffnet.

 5. **<Translate android="true" ids="poi_filter_emergency"/>**. [Notfall](https://wiki.openstreetmap.org/wiki/Key:emergency) umfasst Einrichtungen und Orte, die mit Notdiensten wie Krankenhäusern, Polizeistationen, Feuerwachen und Erste-Hilfe-Zentren verbunden sind.  
        Enthält keine Filter.

 6. **Tankstelle**. Eine [Tankstelle](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfuel), auch bekannt als Tankstelle, Benzinstation, Tankstelle und Tankgarage. Es ist die Einzelhandelseinrichtung, in der Kraftfahrzeuge betankt werden können.  
        Enthält *13* Filtertypen: **Autowaschanlage** (hat *2* Werte), **Bargeldabhebung** (hat *5* Werte), **Druckluft** (hat *1* Werte), **Kraftstoffart (Luftfahrt)** (hat mehr als *20* Werte), **Tankkarten** (hat *5* Werte), **Zahlungsart** (hat mehr als *20* Werte), **Selbstbedienungskasse** (hat *2* Werte), **Schneemobilzugang** (hat *3* Werte), **Toilette** (mehr als *1* Werte), **Staubsauger** (hat *1* Werte), **Automatische Zapfsäule** (hat *1* Werte), **Rollstuhlgerechtigkeit** (hat *4* Werte), Jetzt geöffnet / 24/7 geöffnet.  

 7. **Finanzen**. [Finanzen](https://wiki.openstreetmap.org/wiki/Tag:office%3Dfinancial) wird für Büros von Unternehmen im Finanzsektor verwendet.  
        Enthält *5* Filtertypen.  

 8. **Essen**. [Essen](https://wiki.openstreetmap.org/wiki/Category:Food_and_beverages) umfasst alle Orte, die Speisen und Getränke liefern.  
        Enthält *24* Filtertypen.

 9. **Gesundheitswesen**. [Gesundheitswesen](https://wiki.openstreetmap.org/wiki/Healthcare) umfassen Dienstleistungen, die von verschiedenen Fachleuten in verschiedenen Arten von Einrichtungen erbracht werden.  
        Enthält *13* Filtertypen.

 10. **Freizeit**. [Freizeit](https://wiki.openstreetmap.org/wiki/Category:Leisure) umfasst verschiedene Arten von Orten und Einrichtungen zur Unterhaltung.  
        Enthält *15* Filtertypen.

 11. **Nautisch**. Umfasst POIs, die sich auf nautische Typen beziehen.  
        Enthält keine Filter.

 12. **<Translate android="true" ids="poi_filter_closest_poi"/>**. Umfasst POIs, die in Ihrer Nähe sind.  
        Enthält *216* Filtertypen.

 13. **<Translate android="true" ids="poi_filter_parking"/>**. [Parken](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking) umfasst Einrichtungen, die von der Öffentlichkeit, Kunden oder anderen autorisierten Benutzern zum Parken von Fahrzeugen wie Autos und Lastwagen genutzt werden, allgemein bekannt als Parkplatz (britisches Englisch) oder Parkplatz (amerikanisches Englisch).  
        Enthält *34* Filtertypen.

 14. **Personentransport**. Alle [Fahrzeugtypen](https://wiki.openstreetmap.org/wiki/Pl:Key:amenity#Transport) können in Ihrem Besitz sein.  
        Enthält *38* Filtertypen.

 15. **Beliebte Orte (Wikipedia)**. Um in dieser Kategorie zu suchen, müssen Sie die [Wikipedia-Karte](../plugins/wikipedia.md#overview) der Region herunterladen, an der Sie interessiert sind.  
        Enthält keine Filter.

 16. **Privater Zugang**.  
        Enthält *6* Filtertypen.

 17. **<Translate android="true" ids="poi_filter_public_transport"/>**. Es ist ein Transportsystem, das dazu dient, Menschen für öffentliche Zwecke zu befördern und für alle Einwohner und Besucher einer Stadt oder Region zugänglich ist.  
        Enthält *9* Filtertypen.

 18. **Routen**. Umfasst [OSM-Routen](../map/routes.md) für verschiedene Arten von Aktivitäten.  
        Enthält *14* Filtertypen: **Kontrollpunkt**, **Radwegenetz-Knotenpunkt**, **Wanderwegenetz-Knotenpunkt**, **Routennetz (Radfahren)**, **Routennetz (Wandern)**, **Routenpunkt-Kategorie**, **Luftsport**, **Radfahren**, **Autofahren**, **Zu Fuß**, **Motorradfahren**, **Andere Routen**, **Wassersport**, **Wintersport**.

 19. **Sehenswürdigkeiten**. Es ist eine Aktivität, bei der Menschen interessante Orte oder Stätten besuchen, um sich mit ihnen vertraut zu machen und ihre Schönheit, Geschichte oder Bedeutung zu genießen.  
        Enthält *8* Filtertypen.

 20. **Sport**. Umfasst Bereiche für sportliche Aktivitäten.  
        Enthält *11* Filtertypen.

 21. **Geschäft**. [Geschäft](https://wiki.openstreetmap.org/wiki/Key:shop) bezieht sich auf eine Vielzahl von Einrichtungen und Unternehmen, die verschiedene Waren oder Dienstleistungen zum Verkauf anbieten, wie Lebensmittelgeschäfte, Bekleidungsgeschäfte, Elektronikgeschäfte und andere.  
        Enthält *36* Filtertypen.

 22. **Tourismus**. [Tourismus](https://wiki.openstreetmap.org/wiki/Key:tourism) umfasst Orte und Dinge von besonderem Interesse für Touristen, einschließlich Sehenswürdigkeiten, Unterkünfte sowie Dinge und Orte, die Informationen und Unterstützung für Touristen bieten.  
        Enthält *32* Filtertypen.

 23. **Wasser**. Quellen von [Trinkwasser](https://wiki.openstreetmap.org/wiki/Key:drinking_water), die vom Menschen geschaffen oder angelegt wurden.  
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

Die Funktion "Kategorien neu anordnen" ermöglicht es Ihnen, nur die benötigten Kategorien aufzulisten und sie in der Reihenfolge anzuordnen, die für Sie am bequemsten ist.

Beschreibung und Verwendung:

- Zunächst ist *die Liste alphabetisch sortiert.* Erstellte Kategorien werden ebenfalls in alphabetischer Reihenfolge hinzugefügt.
- Änderungen in der Liste der Kategorien werden für jedes Profil separat vorgenommen.
- Verschieben Sie Kategorien durch Ziehen und Ablegen an die richtige Position in der Liste.
- Um unnötige Kategorien *auszublenden*, tippen Sie auf das **Minus**-Symbol.
- **Verfügbar**. Zuvor *ausgeblendete* Kategorien können durch Tippen auf das **Plus**-Symbol wieder in die angezeigte Liste aufgenommen werden.
- Verwenden Sie die Schaltfläche **Zurücksetzen**, um die Liste in den voreingestellten Zustand zurückzusetzen.
- Kategorien, die mit [Benutzerdefinierter Suche](#customize-poi-search) oder [Filtern](#save-new-custom-filters) erstellt wurden, können mit dem **Löschen**-Symbol entfernt werden.  

![POI-Suche Android](@site/static/img/search/search_poi_rearrange_del_andr.png)  


### Online-Suche {#online-search}

<InfoAndroidOnly />

![POI-Suche Android](@site/static/img/search/search_online_2_andr.png)  

**Online-Suche** ermöglicht das Finden von Orten, Adressen und Points of Interest in Echtzeit. OsmAnd verwendet [Nominatim](https://nominatim.openstreetmap.org/ui/search.html), einen von OpenStreetMap entwickelten Online-Geocodierer, der die Textanfragen der Benutzer in geografische Koordinaten umwandelt und umgekehrt.  

Die Online-Suche umfasst die folgenden Funktionen:

1. **Suche nach Ort** - Sie können den Namen einer Stadt, Straße, eines Viertels oder eines anderen Ortes eingeben, und OsmAnd liefert Ergebnisse, die der Anfrage entsprechen.
2. **Geocodierung** - Die Online-Suche wandelt Ihre Textanfragen in geografische Koordinaten um und ermöglicht eine präzise Standortbestimmung.
3. **Reverse Geocoding** - Sie können geografische Koordinaten eingeben, und die Suche gibt den entsprechenden Ort als Stadtnamen, Straßennamen oder Ort auf der Karte zurück.
4. **Suche nach Points of Interest** - Ermöglicht die Suche nach verschiedenen Punkten nach Name oder Kategorie.

Nutzung der Online-Suche:

- Die Online-Suche stellt sicher, dass die Daten aktuell sind und Updates verfügbar sind, da der Dienst ständig aktualisiert wird und offene Datenquellen verwendet.
- Sie bietet eine breite Abdeckung von Orten und Objekten, sodass Sie interessante Orte in verschiedenen Regionen der Welt finden können.
- Online-Suchen erfolgen in Echtzeit und bieten schnellen Zugriff auf Suchergebnisse.
- Nützlich in Städten und auf Autobahnen mit guter Internetabdeckung.
- Die Online-Suche ist praktisch, wenn keine Karten der Region vorhanden sind und es nicht möglich ist, sie herunterzuladen.
- *Erfordert eine konstante und stabile Internetverbindung.*  

![POI-Suche Android](@site/static/img/search/search_poi_online_increase2_andr.png)  

Um die Ergebnisse zu verbessern, zoomen Sie vor der Verwendung des Suchwerkzeugs auf der Karte näher an den Ort heran, an dem Sie einen bestimmten Standort finden müssen. Während der Suche können Sie den **Suchradius vergrößern**, um Orte zu finden, die weiter von Ihrem Standort entfernt sind. Bei der Offline-Suche schlägt OsmAnd vor, die Online-Suche zu verwenden, wenn die erforderlichen Ergebnisse nicht verfügbar sind.  

Informationen zur Online-Navigation finden Sie im Artikel [Online-Routing](../navigation/routing/online-routing.md).



## POI-Suche anpassen {#customize-poi-search}

Die Anpassung der POI-Suche ist eine erweiterte Suchfunktion, mit der Sie POIs aus verschiedenen Kategorien finden und für eine genauere und personalisierte Suche kombinieren können. Im Gegensatz zur Standard-POI-Suche, die auf einige vordefinierte Kategorien beschränkt ist, bietet die benutzerdefinierte POI-Suche die Flexibilität, verschiedene Arten von POIs auszuwählen und zu kombinieren.  

Zum Beispiel können Sie gleichzeitig nach Restaurants und Apotheken suchen, um den nächstgelegenen Ort zum Essen zu finden und dann Ihre Medikamente zu nehmen. Oder suchen Sie nach der nächsten Tankstelle und Autowerkstatt, wenn Sie ein Problem mit Ihrem Auto haben.  

Diese Funktionalität ist in verschiedenen Fällen besonders nützlich:  

- *Reisen*. Auf Reisen können Sie mit der benutzerdefinierten Suche schnell verschiedene interessante Orte finden und sie kombinieren, um eine optimale Route zu erstellen.
- *Notfälle*. Wenn Sie schnell mehrere Arten von Dienstleistungen finden müssen, können Sie eine benutzerdefinierte POI-Suche verwenden, um alle benötigten Informationen zu erhalten.
- *Suche nach nahegelegenen Dienstleistungen*. Die benutzerdefinierte Suche ermöglicht es Ihnen, verschiedene POI-Kategorien für eine einfache Suche zu kombinieren, wenn Sie mehrere Arten von Dienstleistungen in einer bestimmten Nachbarschaft oder auf einem bestimmten Abschnitt der Route finden müssen.

### Benutzerdefinierter POI-Filter {#custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Benutzerdefinierte Suche Android](@site/static/img/search/search_custom_filter_andr.png)   ![Benutzerdefinierte Suche Android](@site/static/img/search/search_custom_filter_second_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!--
![Custom POI iOS](@site/static/img/search/custom_poi_ios.png)   ![Custom POI types iOS](@site/static/img/search/custom_poi_types_ios.png)
-->

![Benutzerdefinierter POI iOS](@site/static/img/search/custom_poi_filter_1_ios.png)   ![Benutzerdefinierte POI-Typen iOS](@site/static/img/search/custom_poi_filter_2_ios.png)

</TabItem>

</Tabs>  

*Benutzerdefinierter POI-Filter* umfasst Sätze von Ausstattungskategorien, die aus relevanten Werten bestehen. OsmAnd ermöglicht es Ihnen, die erforderlichen POI-Typen aus einer oder mehreren vorgeschlagenen Kategorien zu sammeln und zu kombinieren.  

Um benutzerdefinierte Filter für die Suche nach Orten auf der Karte zu erstellen, wählen Sie relevante Kategorien und Unterkategorien von Interesse aus. Sie können diese Filter für eine spätere Verwendung [speichern](#save-new-custom-filters) oder bei Bedarf [bearbeiten](#edit-an-existing-filter). Alternativ können Sie die gefilterten Daten anzeigen, ohne sie zu speichern, indem Sie auf die Schaltfläche *Anzeigen* tippen. Beachten Sie jedoch, dass alle Auswahlen verworfen werden, wenn Sie die Filter nicht speichern und die Suche wechseln oder das Suchwerkzeug verlassen.

- Jede Ausstattungskategorie enthält eine Liste verfügbarer allgemeiner Werte für POI-Typen.
- Sie haben die Möglichkeit, sie einzeln auszuwählen oder abzuwählen, indem Sie auf das Feld des gewünschten Typs tippen.
- *Alle auswählen* - Wählen Sie dazu die Umschalt-Schaltfläche.
- Verfeinern Sie die Liste, indem Sie unnötige ausschließen - Beginnen Sie, den vorgeschlagenen Namen in das Feld *Nach POI-Typen suchen* einzugeben.  

### Kategorien und ihre Filter {#categories-and-their-filters}

1. **<Translate android="true" ids="amenity_type_administrative"/>**. Enthält 25 Typen: *Kleingärten, Atoll, Stadtbezirk, Stadt, Stadtblock, Land, Gerichtsgebäude, Zoll, Diplomatische Vertretung, Bauernhof, Regierung, Weiler, Insel, Eiland, Einzelgehöft, Ort, Nachbarschaft, Polizei, Gefängnis, Viertel, Wohngebiet, Vorort, Kleinstadt, Rathaus, Dorf*.  

2. **Weihnachten**. Enthält 5 Filtertypen:  
    *Weihnachtsveranstaltung, Weihnachtsmarkt, Weihnachtspyramide, Weihnachtsgeschäft, Weihnachtsbaum*.

3. **<Translate android="true" ids="amenity_type_education"/>**. Enthält 16 Typen: *Kleingärten, Atoll, Stadtbezirk, Stadt, Stadtblock, Land, Gerichtsgebäude, Zoll, Diplomatische Vertretung, Bauernhof, Regierung, Weiler, Insel, Eiland, Einzelgehöft, Ort, Nachbarschaft, Polizei, Gefängnis, Viertel, Wohngebiet, Vorort, Kleinstadt, Rathaus, Dorf*.  

4. **<Translate android="true" ids="amenity_type_emergency"/>**. Enthält 14 Filtertypen.  

5. **Notfallinfrastruktur**. Enthält 12 Filtertypen.  

6. **<Translate android="true" ids="amenity_type_finance"/>**. Enthält 12 Filtertypen.

7. **Essen**. Enthält 12 Filtertypen.  

8. **Gefahr**. Enthält 5 Typen: *Lawinengefahr, Erosionsgefahr, Hochwassergefahr, Nukleare Gefahr, Rutschige Straße*.  

9. **<Translate android="true" ids="amenity_type_healthcare"/>**. Enthält 31 Filtertypen.

10. **<Translate android="true" ids="amenity_type_leisure"/>**. Enthält 148 Filtertypen.  

11. **<Translate android="true" ids="amenity_type_man_made"/>**. Enthält 121 Filtertypen.  

12. **<Translate android="true" ids="amenity_type_military"/>**. Enthält 7 Typen: *Gefahrenbereich, Militärbunker, Militär-Marinebasis, Militärbüro, Militärübungsplatz, Militärzone, Ort einer nuklearen Explosion*.  

13. **<Translate android="true" ids="amenity_type_natural"/>**. Enthält 50 Filtertypen.  

14. **Nautisch**. Enthält 41 Filtertypen.  

15. **<Translate android="true" ids="amenity_type_office"/>**. Enthält 39 Filtertypen.

16. **Beliebte Orte (Wikipedia)**. Enthält 1 Typ: *Wikipedia*.

17. **Privater Zugang**. Enthält keine Filter.

18. **Routen**. Enthält 15 Filtertypen.  

19. **Dienstleistung**. Enthält 111 Filtertypen.

20. **<Translate android="true" ids="amenity_type_sport"/>**. Enthält 119 Filtertypen.  

21. **Geschäft**. Enthält 156 Filtertypen.  

22. **<Translate android="true" ids="amenity_type_tourism"/>**. Enthält 103 Filtertypen.

23. **Transport**. Enthält 97 Filtertypen.  

24. **Benutzerdefiniert**. Enthält 1 Typ: *Benutzerdefinierte andere Postleitzahl*.

<!--
:::note since OsmAnd 5.0 for Android
Available for search:

- Religious POIs based on the `amenity=place_of_worship` tag are divided into religious-specific locations such as churches, mosques, or synagogues.
- Minor amenities such as “bench”, "youth bench" (`amenity=bench`) are available in the category list.
:::
-->

### Neue benutzerdefinierte Filter speichern {#save-new-custom-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Benutzerdefinierten POI speichern Android](@site/static/img/search/custom_poi_save_android.png) ![Benutzerdefinierten POI speichern Android](@site/static/img/search/custom_poi_save_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Benutzerdefinierten POI speichern iOS](@site/static/img/search/custom_poi_save_2_ios.png)

</TabItem>

</Tabs>

Um einen benutzerdefinierten Filter zu **speichern**, wählen Sie Filtertypen aus und dann:

- Tippen Sie auf die Schaltfläche *Anzeigen* und wählen Sie die Schaltfläche *Speichern* für iOS oder die Schaltfläche mit dem *Symbol, das die Speicheraktion anzeigt* für Android.
- Geben Sie einen Namen für die neue Kategorie ein.
- Ihr Filter wird in der Liste des *Kategorien-Reiters* im Suchwerkzeug angezeigt.  

Eine andere Möglichkeit zum **Speichern**:

- Wählen Sie *[Kategorie](#poi-search-by-categories) → [Filtersymbol](#types-of-filters) →* wählen Sie *Typen* von Merkmalen *→ Drei-Punkte-Menü → Filter speichern*.


### Einen vorhandenen Filter bearbeiten {#edit-an-existing-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Benutzerdefinierten POI löschen Android](@site/static/img/search/custom_poi_delete_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Benutzerdefinierten POI löschen iOS](@site/static/img/search/custom_poi_delete_4_ios.png)

</TabItem>

</Tabs>

Vom Hauptbildschirm aus:

- Tippen Sie auf die Schaltfläche *Lupe* in der oberen linken Ecke des Gerätebildschirms, um das *Suchen*-Menü zu öffnen.
- Wählen Sie den Reiter *Kategorien*.
- Wählen Sie eine gespeicherte benutzerdefinierte Kategorie aus, und der Bildschirm mit den Suchergebnissen wird angezeigt.
- Tippen Sie auf das *Filter*-Symbol neben *Auf der Karte anzeigen*, um den *Filter*-Bildschirm zu öffnen.
- Tippen Sie auf das *Drei-Punkte-Menü*.
- Wählen Sie im Dropdown-Menü **Filter bearbeiten**.
- Um eine benutzerdefinierte POI-Suche nach der Bearbeitung zu speichern:  
    - Wählen Sie POI-Kategorien und Filtertypen dafür aus *→* tippen Sie auf *Anzeigen → Drei-Punkte-Menü → Speichern unter →* geben Sie einen neuen Filternamen ein oder *speichern* Sie die Änderungen am aktuellen.


### Benutzerdefinierten POI-Filter löschen {#delete-custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Benutzerdefinierten POI löschen Android](@site/static/img/search/custom_poi_delete_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Benutzerdefinierten POI löschen iOS](@site/static/img/search/custom_poi_delete_2_ios.png)

</TabItem>

</Tabs>

Sie können nur Kategorien löschen, die mit Filtern oder benutzerdefinierter Suche erstellt wurden.

- Gehen Sie zum Reiter [Kategorien](#poi-search-by-categories) und wählen Sie die gewünschte aus.
- Tippen Sie im Feld neben *Auf der Karte anzeigen* auf das Symbol, das den *Filter* darstellt.
- Tippen Sie im *Filter*-Menü auf das *Drei-Punkte-Menü* ( &#8285; ), das sich in der oberen rechten Ecke des Bildschirms befindet.
- Wählen Sie **Filter löschen**.
- ***Sie können das Löschen nicht rückgängig machen.***


### Benutzerdefinierte Kategorien löschen (iOS) {#delete-custom-categories-ios}

![Benutzerdefinierten POI löschen iOS](@site/static/img/search/custom_poi_delete_3_ios.png)  

Eine zusätzliche Option nur für die iOS-App ist **Benutzerdefinierte Kategorien löschen**.

- Dieser Punkt befindet sich am Ende der Liste des *Kategorien*-Reiters.
- Wählen Sie die nicht benötigten Kategorien einzeln oder *Alle auswählen*.
- Tippen Sie auf die Schaltfläche **Löschen**.  


## Verwandte Artikel {#related-articles}

- [Alles durchsuchen](./search-all.md)
- [Adresssuche](./search-address.md)
- [Suchverlauf](./search-history.md)
- [Koordinatensuche](./search-coordinates.md)