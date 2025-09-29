---
source-hash: f338192d8b8c1dbdc1b08667fb4caff3b45c57bc128f5f53a297f3ace1a6b7fa
sidebar_position: 6
title:  Koordinatensuche
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

Die **OsmAnd-Koordinatensuche** ermöglicht es Ihnen, einen bestimmten Ort anhand von Breiten- und Längengraden zu finden. Diese Art der Suche hilft, einen Ort genau zu identifizieren. Sie ist besonders nützlich für Gebiete, die keine genauen Adressen haben, oder für spezielle geografische Aufgaben wie das Erstellen von Geo-Fences oder die präzise Positionierung im freien Raum.

OsmAnd bietet mehrere Wege, um zum *Suchwerkzeug → [Registerkarte Adresssuche](../search/search-address.md)* zu gelangen, wo sich die **Koordinatensuche** befindet.

- Die [Schaltfläche Suchen](../widgets/map-buttons.md#search) auf dem Kartenbildschirm der Anwendung.
- Gehen Sie zum Hauptmenü von Android *Menü → Suchen → Registerkarte Adresse → Koordinatensuche*.
- Wenn Sie eine Route vorbereiten, tippen Sie auf *Navigation → Ziel festlegen → Suchfeld → Registerkarte Adresse → Koordinatensuche*.


## Wie man sie benutzt {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Koordinatensuche Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Koordinatensuche iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Koordinaten können in jedem verfügbaren Format eingegeben werden, aber der gefundene Ort wird in dem Format angezeigt, das unter *Profil konfigurieren → Allgemeine Einstellungen → Einheiten & Formate* festgelegt ist.

- Um die Koordinatensuche zu verwenden, können Sie die Koordinaten einzeln in jedes entsprechende Feld eingeben, zuvor kopierte Koordinaten in das Suchfeld einfügen oder sie dort eingeben. Die Anwendung fordert Sie auf, einen passenden Ort auszuwählen.
- Die Koordinatensuche konvertiert automatisch ein Koordinatenformat in ein anderes, wenn das angegebene Format im Feld mit der Liste geändert wird.
- Tippen Sie auf den vorgeschlagenen Ort und das [Kartenkontextmenü](../map/map-context-menu.md#select-any-point-long-tap) öffnet sich.
- Weitere Informationen finden Sie hier: [Geografische Koordinaten](https://en.wikipedia.org/wiki/Geographic_coordinate_system).


**Umfang der Koordinatensuchfunktion**:

- *Präziser Standort*. Die Koordinatensuche liefert einen genauen Standort. Sie können präzise Koordinaten eingeben, die beispielsweise aus anderen Quellen wie einer Karte, einem GPS-Gerät oder Online-Diensten stammen.
- *Orte ohne Adresse*. Koordinaten sind besonders nützlich, wenn es um Orte geht, die keine genaue Adresse haben oder deren Adresse unbekannt ist. Dies kann beispielsweise ein abgelegenes Gebiet, ein Punkt auf dem Meer oder ein Berggipfel sein. Durch die Eingabe von Koordinaten können Sie solche Orte finden und dorthin navigieren, ohne die Adresse kennen zu müssen.
- *Standortfreigabe*. Die Suche nach Koordinaten bietet eine bequeme Möglichkeit, Informationen einzugeben. Sie können Koordinaten manuell eingeben oder aus anderen Quellen kopieren. Dies kann nützlich sein, wenn Sie Standorte mit anderen teilen oder zuvor erhaltene Koordinaten verwenden.


## Koordinatenformat {#coordinate-format}

Es gibt mehrere Möglichkeiten, Koordinaten für die Suche einzugeben. Um jede davon zu nutzen, ist es sehr wichtig, die Eingaberegeln zu befolgen, da die Anwendung sonst den Ort nicht finden kann.

1. **<Translate android="true" ids="navigate_point_format_D"/>**  

    ![Koordinatensuche Android](@site/static/img/search/coordinates_search_degrees_andr.png)  

    **Dezimalkoordinaten (Grad)**. In diesem Format werden Breiten- und Längengradkoordinaten im Dezimalformat geschrieben, zum Beispiel 52,37022° Breite und 4,89517° Länge für Amsterdam. Diese Eingabemethode ist einfach zu verwenden und die gebräuchlichste. Mehr über das Dezimalkoordinatenformat können Sie [hier](https://en.wikipedia.org/wiki/Decimal_degrees) lesen.  

    - *Eingaberegeln*. Breiten- und Längengradkoordinaten werden im Dezimalformat geschrieben, wobei die Breite von -90 bis 90 und die Länge von -180 bis 180 reicht.
    - *Am häufigsten verwendet*. Dezimalkoordinaten werden in Navigationsanwendungen, GPS-Geräten, Webkarten und anderen Geopositionierungsdiensten weit verbreitet verwendet.  

2. **<Translate android="true" ids="navigate_point_format_DM"/>**  

    ![Koordinatensuche Android](@site/static/img/search/coordinates_search_DM_andr.png)  

    **Grad und Minuten (DM)**. In diesem Format werden Breiten- und Längengradkoordinaten unter Verwendung von Grad und Minuten aufgezeichnet. Zum Beispiel 37:46.29 Breite und -122:25.10 Länge für San Francisco. Dieses Format kann weniger genau sein und die Eingabe kann länger dauern.
    - *Eingaberegeln*. Breiten- und Längengradkoordinaten werden in einem Format geschrieben, das Grad (:) und Minuten (:) verwendet.
    - *Am häufigsten verwendet*. Das DM-Format findet sich oft in der Seefahrt, Luftfahrt, Astronomie und in topografischen Kartensystemen.

3. **<Translate android="true" ids="navigate_point_format_DMS"/>**  

    ![Koordinatensuche Android](@site/static/img/search/coordinates_search_DMS_andr.png)  

    **Grad, Minuten und Sekunden (DMS)**. Das DMS-Koordinatenformat zeichnet geografische Koordinaten auf, bei denen die Werte in Grad, Minuten und Sekunden angegeben werden. Grad (DDD) können Werte von 0 bis 180 für die Länge und 0 bis 90 für die Breite annehmen. Positive Werte geben die östliche Länge und die nördliche Breite an, negative Werte die westliche Länge und die südliche Breite. Minuten (MM) können Werte von 0 bis 59 annehmen. Sekunden (SS.S) stellen den Dezimalbruchteil einer Sekunde dar und können ebenfalls von 0 bis 59,9 reichen.
    - *Eingaberegeln*. Breiten- und Längengradkoordinaten werden in einem Format geschrieben, das Grad (:), Minuten (:) und Sekunden (.) verwendet.
    - *Am häufigsten verwendet*. Das DMS-Format wird in der Geodäsie, in Navigationsanwendungen, in der Kartografie, in der Astronomie und in anderen Bereichen, in denen eine detailliertere Angabe von Ortskoordinaten erforderlich ist, weit verbreitet verwendet.

4. **<Translate android="true" ids="navigate_point_format_utm"/>**  

    ![Koordinatensuche Android](@site/static/img/search/coordinates_search_UTM_andr.png)  

    **UTM (Universale Transversale Mercator-Projektion)**. In diesem Format werden Koordinaten unter Verwendung der UTM-Zone, der Ost- und Nordrichtung angegeben. Für Amsterdam könnten die Koordinaten beispielsweise ungefähr wie folgt lauten: Zone 31, Ostrichtung 581000, Nordrichtung 5809000. Die Eingabe von Koordinaten im UTM-Format erfordert möglicherweise eine gewisse Vertrautheit mit dem System und ist komplexer als andere Formate, bietet aber eine gute Genauigkeit und entspricht den globalen Geopositionierungsstandards. Mehr über das UTM-Format können Sie [hier](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) lesen.
    - *Eingaberegeln*. Die Koordinaten werden in einem Format aufgezeichnet, das die UTM-Zone sowie Ost- und Nord-Versätze verwendet.
    - *Am häufigsten verwendet*. Das UTM-Format wird häufig in der Vermessung, Kartierung und in geografischen Informationssystemen zur Messung und Navigation verwendet.

5. **<Translate android="true" ids="navigate_point_format_olc"/>**  ((OLC) - 9F2X4WFJ+7W (Open Location Code repräsentiert eine Fläche von 9m x 14m))  

    ![Koordinatensuche Android](@site/static/img/search/coordinates_search_OLC_andr.png)  

    **Open Location Code (OLC)**, auch bekannt als **Plus Code**, ist ein globales Standortkodierungssystem. Es ist eine Kombination aus Buchstaben und Zahlen, um den Breiten- und Längengrad eines beliebigen Ortes auf dem Planeten anzugeben. Beispiel für einen OLC-Code für Amsterdam: 9F3WCVWG+FP. In diesem Beispiel gibt "9F3WCVWG" ein grobes Gitter an, und "+FP" spezifiziert einen Ort innerhalb dieses Bereichs. Lesen Sie mehr [hier](https://en.wikipedia.org/wiki/Open_Location_Code).
    - *Eingaberegeln*.  
        - Der OLC-Code besteht aus 4 bis 14 Zeichen, die Buchstaben von "C" bis "Z" (außer "I" und "O") und Zahlen von "2" bis "9" sein können.
        - Der Code beginnt mit einem globalen Präfix, das einen Kontinent oder ein Gebiet angibt.
        - Darauf folgen Gruppen von Zeichen, die durch Punkte getrennt sind. Jede Gruppe repräsentiert ein engeres Gebiet.
        - Zur Verdeutlichung des Standorts werden Buchstaben und Ziffern durch weitere Zeichen im OLC-Code ergänzt.  
    - *Am häufigsten verwendet*. OLC wird häufig in Gebieten verwendet, in denen genaue Adressen nicht verfügbar oder schwer zu bestimmen sind, wie z. B. in abgelegenen Gebieten, Wüsten oder Ozeanen. Es wird auch in Anwendungen und Diensten im Zusammenhang mit Geopositionierung, Lieferung, Notfalldiensten und anderen Bereichen, in denen eine genaue Standortbestimmung ohne die Verwendung traditioneller Adressen erforderlich ist, weit verbreitet verwendet.  

6. **<Translate android="true" ids="navigate_point_mgrs"/>**  

    ![Koordinatensuche Android](@site/static/img/search/coordinates_search_MGRS_andr.png)  

    **MGRS (Militärisches Meldegitterreferenzsystem)**. Dies ist ein Koordinatensystem, das häufig in militärischen Anwendungen verwendet wird. Es basiert auf dem UTM-System und wird durch ein zusätzliches Gitter von Quadraten ergänzt. Ein Beispiel für Koordinaten im MGRS-Format für einen Ort in Australien kann wie folgt aussehen: 55HBE1234567890. In diesem Beispiel steht "55H" für die MGRS-Zone und "BE" für das Quadrat, in dem sich der Ort befindet. "123456" steht für den Ost-Versatz und "7890" für den Nord-Versatz innerhalb dieses Quadrats. MGRS werden in Bereichen eingesetzt, die eine hohe Genauigkeit und Georeferenzierung erfordern. Sie sind besonders nützlich in Umgebungen, in denen Adressen möglicherweise nicht eindeutig oder verfügbar sind, wie z. B. bei Militäroperationen oder Expeditionen in abgelegenen Gebieten. Mehr über das MGRS-Format können Sie [hier](https://en.wikipedia.org/wiki/Military_Grid_Reference_System) lesen.  
    - *Eingaberegeln*. Die Koordinaten bestehen aus einer MGRS-Zone, einem Quadrat und zwei weiteren Ziffern, die den Ost- und Nord-Versatz angeben.
    - *Am häufigsten verwendet*. Das MGRS-Format wird in der militärischen Navigation und Kommunikation weit verbreitet verwendet und kann auch für Outdoor-Enthusiasten und Wanderer nützlich sein.

7. **Schweizer Gitter** (CH1903) und **Schweizer Gitter** (CH1903+)  

    ![Koordinatensuche Android](@site/static/img/search/coordinates_search_Swiss_andr.png)  

    **Schweizer Koordinatensystem**. Das Schweizer Gitter (CH1903) und das Schweizer Gitter (CH1903+) sind Koordinatensysteme, die in der Schweiz zur Positionierung weit verbreitet sind. Beide Formate basieren auf dem CH1903-System, das 1903 eingeführt wurde und auf der Projektion des Schweizer Internationalen Gitters basiert. Beispielkoordinaten im Schweizer Gitter (CH1903)-Format — Östlich: 600000; Nördlich: 200000. Im Schweizer Gitter (CH1903+)-Format — Östlich: 600300; Nördlich: 200400. Mehr über das geografische Koordinatensystem Schweizer Gitter können Sie [hier](https://en.wikipedia.org/wiki/Swiss_coordinate_system) lesen.  
    - *Eingaberegeln*.  
        - Koordinaten im CH1903-Format bestehen aus zwei Komponenten: Östlich und Nördlich.
        - Östlich wird in Metern von einem Punkt namens Luzerner Achse (Null Östlich) angegeben.
        - Nördlich wird in Metern vom Äquator angegeben.
        - Das CH1903+-Format verwendet die gleichen Eingaberegeln wie CH1903, jedoch mit präziseren Werten.
        - CH1903+ enthält Korrekturen, um Verschiebungen der Koordinaten zu berücksichtigen, die durch Veränderungen der tektonischen Bewegungen in der Schweiz verursacht werden.
    - *Am häufigsten verwendet*. Die Formate Schweizer Gitter (CH1903) und Schweizer Gitter (CH1903+) werden in der Schweiz für geodätische Messungen, Kartografie, geografische Informationssysteme sowie im Bau- und Ingenieurwesen verwendet. Diese Formate bieten ein lokales Koordinatensystem, das spezifisch für die Schweiz ist.


> Für jedes Profil können Sie separat ein anderes Koordinatenformat einstellen. Gehen Sie dazu zu *Allgemeine Einstellungen → [Koordinatenformat](../personal/profiles.md#units--formats)*.


<!--

## Troubleshooting {#troubleshooting}

https://github.com/osmandapp/OsmAnd/issues/14081  

https://github.com/osmandapp/OsmAnd/issues/16114  

https://github.com/osmandapp/OsmAnd/issues/14081  

-->


## Verwandte Artikel {#related-articles}

- [Alles durchsuchen](./search-all.md)
- [Adresse suchen](./search-address.md)
- [Suchverlauf](./search-history.md)
- [POI suchen](./search-poi.md)