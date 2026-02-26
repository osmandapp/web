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


## Przegląd {#overview}

Style map określają, jak dane wektorowe mapy są renderowane w OsmAnd. Styl kontroluje wygląd wizualny obiektów mapy, takich jak drogi, budynki, użytkowanie terenu, woda i punkty orientacyjne, w tym kolory, wzory linii i etykiety.

OsmAnd oferuje kilka wbudowanych stylów zoptymalizowanych pod różne aktywności. Możesz przełączać style w menu [Konfiguruj mapę](./configure-map-menu.md) i dostosowywać parametry stylu. Style map wektorowych obsługują przełączanie między trybami dziennym i nocnym.

Oprócz wbudowanych stylów OsmAnd obsługuje niestandardowe style map. Niestandardowe style oparte są na regułach renderowania i mogą być importowane, udostępniane oraz modyfikowane, aby podkreślić potrzebne informacje.


## Domyślne style map {#default-map-styles}

OsmAnd oferuje wiele stylów map i warstw danych, które pasują domyślnie. Ten rozdział opisuje główne z nich dla trybów dziennego i nocnego.

**Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

**iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*

### OsmAnd {#osmand}

![Styl mapy OsmAnd](@site/static/img/map/map-style-osmand-with-routes.png)  

Standardowy styl renderowania mapy OsmAnd równoważy szczegółowość i prostotę, co czyni go idealnym do eksploracji miejskiej i na świeżym powietrzu. Szczegółowo przedstawia cechy miasta, takie jak ulice, budynki i przystanki transportu, jednocześnie upraszczając bałagan wizualny, aby mapy były czytelniejsze.  

Kluczowe korzyści obejmują mapowanie tras, jakość nawierzchni, ograniczenia dostępu, oznakowanie dróg, renderowanie ścieżek w skali SAC, obiekty sportowe oraz szczegóły topograficzne, takie jak linie poziomic.

### Widok turystyczny {#touring-view}

![Styl mapy Widok turystyczny](@site/static/img/map/map-style-touring.png)

Styl turystyczny z wysokim kontrastem i maksymalną szczegółowością. Obejmuje wszystkie opcje domyślnego stylu OsmAnd, jednocześnie wyświetlając jak najwięcej szczegółów, w szczególności drogi, ścieżki i inne sposoby podróżowania. Wyraźne rozróżnienie typów dróg w *atlasie turystycznym*. Nadaje się do użytku dziennego, nocnego i na zewnątrz.

### UniRS i LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

Style UniRS i LightRS to style autorskie, które renderują podstawowe informacje mapy, ale w różnych schematach kolorów.  

- **Styl UniRS**. Jest to zmodyfikowana wersja domyślnego stylu, która zwiększa kontrast dla ścieżek pieszych i rowerowych. Zachowuje klasyczny schemat kolorów Mapnik.  

    ![Styl mapy LightRS](@site/static/img/map/map-style-lightrs.png)

- **Styl LightRS**. Jest to prosty styl jazdy, który charakteryzuje się łagodnym trybem nocnym. Podkreśla drogi kontrastowym kolorem pomarańczowym, przyciemnia drugorzędne obiekty mapy i wyświetla cechy topograficzne, takie jak linie poziomic.

    ![Styl mapy UniRS](@site/static/img/map/map-style-unirs.png)

### Nautyczny {#nautical}

![Styl mapy nautyczny](@site/static/img/map/map-style-nautical.png)

Jest to styl nawigacji nautycznej z bojami, latarniami morskimi, trasami rzecznymi, szlakami morskimi, znakami, portami i znakami nautycznymi. Więcej informacji w sekcji [Styl mapy nautycznej](../plugins/nautical-charts.md#nautical-map-style).

### Morski {#marine}

![Styl mapy morski](@site/static/img/map/map-style-marine.png)

Jest to zaawansowany styl mapy nautycznej z sektorami świateł, pełnymi charakterystykami latarni morskich oraz innymi szczegółowymi cechami morskimi dla realistycznej i dokładnej nawigacji morskiej. Więcej szczegółów w sekcji [Styl mapy morskiej](../plugins/nautical-charts.md#marine-map-style).

### Zimowy i narciarski {#winter-and-ski}

![Styl mapy Zimowy i narciarski](@site/static/img/map/map-style-winter-ski.png)

Jest to styl dla sportów narciarskich, który opisuje trasy zjazdowe, wyciągi i szlaki biegowe, a także zaciemnia drugorzędne obiekty mapy. **Styl Zimowy i narciarski** został zaprojektowany, aby pomóc w nawigacji podczas sportów zimowych.  

Możesz zobaczyć stoki narciarskie i inne szczegóły, takie jak trudność stoków i oznaczenia wyciągów. Kluczowe korzyści obejmują wygodne wyświetlanie stoków, wyciągów i innych cech narciarskich. Mniej rozpraszających drugorzędnych obiektów mapy. Więcej informacji w artykule [Mapy narciarskie](../plugins/ski-maps.md).

### Topograficzny {#topo}

![Styl mapy topograficzny](@site/static/img/map/map-style-topo.png)

Ten styl jest zaprojektowany do wędrówek, kempingu i jazdy na rowerze w naturze. Charakteryzuje się kontrastowymi drogami i cechami naturalnymi, różnymi typami szlaków, rozszerzonymi opcjami linii poziomic oraz dodatkowymi szczegółami. Jest czytelny na zewnątrz. Ustawienie *Integralność nawierzchni* pozwala odróżnić jakość drogi.

### OSM-carto {#osm-carto}

![Styl mapy OSM-carto](@site/static/img/map/map-style-osm-carto.png)

Ten styl naśladuje domyślny [styl sieciowy OpenStreetMap](https://www.openstreetmap.org/). Kod źródłowy wersji sieciowej jest dostępny na [Github](https://github.com/gravitystorm/openstreetmap-carto), kod OsmAnd jest dostępny na [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Pustynny {#desert}

![Styl mapy pustynny](@site/static/img/map/map-style-desert.png)

Zaprojektowany dla pustyń i innych słabo zaludnionych regionów, oferujący bardziej szczegółowe informacje mapy.

### Offroad {#offroad}

![Styl mapy offroad](@site/static/img/map/map-style-offroad.png)

Zaprojektowany do nawigacji off-road, ten styl opiera się na układzie mapy [Topo](#topo) i dobrze współpracuje z obrazami satelitarnymi jako podkładem. Charakteryzuje się cieńszymi głównymi drogami, aby podkreślić ścieżki, drogi, trasy rowerowe i inne szlaki off-road, co czyni go idealnym do eksploracji nieutwardzonych tras na obszarach wiejskich lub odległych.

### Śnieżny skuter {#snowmobile}

![Styl mapy śnieżny skuter](@site/static/img/map/map-style-snowmobile.png)

Dostosowany do nawigacji skuterem śnieżnym, ten styl podkreśla przyjazne dla skuterów śnieżnych ścieżki, drogi i tory. Podkreśla specjalistyczne ścieżki w regionach śnieżnych, oferując jasną nawigację po terenach pokrytych śniegiem, gdzie standardowe drogi mogą nie być dostępne. 


## Niestandardowy styl mapy {#custom-map-style}

Jeśli masz osobisty lub zewnętrzny niestandardowy styl mapy utworzony zgodnie ze [Specyfikacją](../../technical/osmand-file-formats/osmand-rendering-style.md), możesz zainstalować go na urządzeniu w następujący sposób:

- Skopiuj plik `.render.xml` na urządzenie i otwórz go w OsmAnd.
- Użyj [standardowych dialogów importu/eksportu](../personal/import-export.md), aby eksportować lub importować style renderowania. Jeśli utworzysz pakiet `.osf`, działa on jak wtyczka, którą możesz udostępnić innym.
- Po instalacji możesz wybrać styl mapy z menu.

Możesz również przeglądać przykłady niestandardowych stylów map utworzonych przez innych użytkowników. Lista publicznie dostępnych stylów społecznościowych jest podana [tutaj](../troubleshooting/resources.md#map-styles).


## Powiązane artykuły {#related-articles}

- [Konfiguruj mapę](../map/configure-map-menu.md)
- [Mapy wektorowe](../map/vector-maps.md)
- [Zasoby i dostosowania](../troubleshooting/resources.md)