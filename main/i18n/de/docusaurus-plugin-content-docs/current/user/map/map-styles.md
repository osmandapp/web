---
source-hash: 887e37d512e29933bbd3ee7af217024887ffcc5ac636c9ddc52e7480299a8d1b
sidebar_position: 6
title:  Map Styles (Vector Maps)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Überblick {#overview}

Kartenstile definieren, wie Vektorkarten-Daten in OsmAnd gerendert werden. Ein Stil steuert das visuelle Erscheinungsbild von Kartenobjekten wie Straßen, Gebäuden, Landnutzung, Gewässern und Sehenswürdigkeiten, einschließlich Farben, Linienmustern und Beschriftungen.

OsmAnd bietet mehrere integrierte Stile, die für verschiedene Aktivitäten optimiert sind. Sie können Stile im [Kartenkonfigurationsmenü](./configure-map-menu.md) wechseln und Stilparameter anpassen. Vektorkartenstile unterstützen den Wechsel zwischen Tag- und Nachtmodus.

Zusätzlich zu den integrierten Stilen unterstützt OsmAnd benutzerdefinierte Kartenstile. Benutzerdefinierte Stile basieren auf Rendering-Regeln und können importiert, geteilt und modifiziert werden, um die benötigten Informationen hervorzuheben.


## Standard-Kartenstile {#default-map-styles}

OsmAnd bietet Ihnen viele Kartenstile und Datenschichten, die standardmäßig passen. Dieser Abschnitt beschreibt die wichtigsten für Tag- und Nachtmodus.

**Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

**iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*

### OsmAnd {#osmand}

![OsmAnd-Kartenstil](@site/static/img/map/map-style-osmand-with-routes.png)  

Der Standard-Kartenrendering-Stil von OsmAnd balanciert Detailtreue und Einfachheit und eignet sich ideal für städtische und outdoor Erkundungen. Er detailliert städtische Merkmale wie Straßen, Gebäude und Verkehrshaltstellen, während er visuelle Unordnung vereinfacht, indem die Karten klarer gemacht werden.  

Wichtige Vorteile umfassen Routenmapping, Oberflächenqualität, Zufahrtsbeschränkungen, Verkehrsschilder, SAC-Scale-Pfad-Darstellungen, Sportanlagen und topografische Details wie Höhenlinien.

### Touring View {#touring-view}

![Touring-View-Kartenstil](@site/static/img/map/map-style-touring.png)

Touring-Stil mit hohem Kontrast und maximalem Detailgrad. Enthält alle Optionen des Standard-OsmAnd-Stils, während er so viele Details wie möglich anzeigt, insbesondere Straßen, Pfade und andere Reisemöglichkeiten. Klare Unterscheidung von Straßentypen in einem *Touring-Atlas*. Geeignet für Tag, Nacht und Outdoor-Nutzung.

### UniRS und LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

Die UniRS- und LightRS-Stile sind Autorenstile, die die grundlegenden Karteninformationen rendern, aber in unterschiedlichen Farbschemata.  

- **UniRS-Stil**. Dieser Stil ist eine modifizierte Version des Standards, um den Kontrast für Fuß- und Fahrradwege zu verbessern. Er behält das klassische Mapnik-Farbschema bei.  

    ![LightRS-Kartenstil](@site/static/img/map/map-style-lightrs.png)

- **LightRS-Stil**. Dies ist ein einfacher Fahrstil mit einem sanften Nachtmodus. Er hebt Straßen in einem kontrastreichen Orange hervor, dimmt sekundäre Kartenobjekte und zeigt topografische Merkmale wie Höhenlinien an.

    ![UniRS-Kartenstil](@site/static/img/map/map-style-unirs.png)

### Nautical {#nautical}

![Nautical-Kartenstil](@site/static/img/map/map-style-nautical.png)

Dies ist ein Stil für die nautische Navigation mit Bojen, Leuchttürmen, Flussrouten, Seewegen, Markierungen, Häfen und nautischen Zeichen. Lesen Sie mehr im Abschnitt [Nautical Map Style](../plugins/nautical-charts.md#nautical-map-style).

### Marine {#marine}

![Marine-Kartenstil](@site/static/img/map/map-style-marine.png)

Dies ist ein fortschrittlicher nautischer Kartenstil mit Lichtsektoren, vollständigen Leuchtturmcharakteristiken und anderen detaillierten maritimen Merkmalen für realistische und genaue Schifffahrt. Für weitere Details lesen Sie den Abschnitt [Marine Map Style](../plugins/nautical-charts.md#marine-map-style).

### Winter and Ski {#winter-and-ski}

![Winter & Ski-Kartenstil](@site/static/img/map/map-style-winter-ski.png)

Dies ist ein Stil für Skisportarten, der Pisten, Lifte und Langlaufloipen beschreibt sowie sekundäre Kartenobjekte verdeckt. Der **Winter- und Ski-Stil** ist darauf ausgelegt, Ihnen bei der Navigation im Wintersport zu helfen.  

Sie können die Skipisten und andere Details wie die Schwierigkeit der Pisten und Liftmarkierungen sehen. Wichtige Vorteile umfassen die bequeme Anzeige von Pisten, Liften und anderen Skimerkmalen. Weniger ablenkende sekundäre Objekte der Karte. Lesen Sie mehr im Artikel [Ski Maps](../plugins/ski-maps.md).

### Topo {#topo}

![Topo-Kartenstil](@site/static/img/map/map-style-topo.png)

Dieser Stil ist für Wandern, Campen und Radfahren in der Natur konzipiert. Er weist kontrastreiche Straßen und natürliche Merkmale, verschiedene Pfadtypen, erweiterte Höhenlinioptionen und zusätzliche Details auf. Er ist im Freien lesbar. Die Einstellung *Oberflächenintegrität* ermöglicht es Ihnen, die Qualität der Straße zu unterscheiden.

### OSM-carto {#osm-carto}

![OSM-carto-Kartenstil](@site/static/img/map/map-style-osm-carto.png)

Dieser Stil imitiert den Standard-[OpenStreetMap-Webstil](https://www.openstreetmap.org/). Der Quellcode der Webversion ist auf [Github](https://github.com/gravitystorm/openstreetmap-carto) verfügbar, der OsmAnd-Code ist auf [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml) verfügbar.

### Desert {#desert}

![Desert-Kartenstil](@site/static/img/map/map-style-desert.png)

Entwickelt für Wüsten und andere dünn besiedelte Regionen, bietet er detailliertere Karteninformationen.

### Offroad {#offroad}

![Offroad-Kartenstil](@site/static/img/map/map-style-offroad.png)

Entwickelt für Offroad-Navigation, basiert dieser Stil auf dem [Topo](#topo)-Kartenlayout und funktioniert gut mit Satellitenbildern als Unterlage. Er weist dünnere Hauptstraßen auf, um Pfade, Wege, Fahrradrouten und andere Offroad-Pfade hervorzuheben, was ihn ideal für die Erkundung unbefestigter Routen in ländlichen oder abgelegenen Gebieten macht.

### Snowmobile {#snowmobile}

![Snowmobile-Kartenstil](@site/static/img/map/map-style-snowmobile.png)

Maßgeschneidert für die Schneemobil-Navigation hebt dieser Stil schneemobilfreundliche Pfade, Straßen und Wege hervor. Er hebt spezialisierte Pfade in schneebedeckten Regionen hervor und bietet klare Navigation über schneebedeckte Gelände, wo Standardstraßen möglicherweise nicht verfügbar sind. 


## Benutzerdefinierter Kartenstil {#custom-map-style}

Wenn Sie einen persönlichen oder Drittanbieter-benutzerdefinierten Kartenstil haben, der gemäß der [Spezifikation](../../technical/osmand-file-formats/osmand-rendering-style.md) erstellt wurde, können Sie ihn auf Ihr Gerät auf diese Weise installieren:

- Kopieren Sie die `.render.xml`-Datei auf Ihr Gerät und öffnen Sie sie mit OsmAnd.
- Verwenden Sie die [standardmäßigen Import-/Export-Dialoge](../personal/import-export.md), um Rendering-Stile zu exportieren oder zu importieren. Wenn Sie ein `.osf`-Paket erstellen, funktioniert es als Plugin, das Sie mit anderen teilen können.
- Nach der Installation können Sie den Kartenstil aus dem Menü auswählen.

Sie können auch Beispiele für benutzerdefinierte Kartenstile durchsuchen, die von anderen Benutzern erstellt wurden. Eine Liste öffentlich verfügbarer Community-Stile wird [hier](../troubleshooting/resources.md#map-styles) bereitgestellt.


## Verwandte Artikel {#related-articles}

- [Karten konfigurieren](../map/configure-map-menu.md)
- [Vektorkarten](../map/vector-maps.md)
- [Ressourcen und Anpassungen](../troubleshooting/resources.md)