---
source-hash: aa3c29fb6cbe9138714a34b48b5eaee74f61c4713d9c46b72e2d28a1d615ca35
sidebar_position: 4
sidebar_label:  Weather
title: Weather on the Web
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Przegląd {#overview}

Funkcja Pogody na mapie OsmAnd Web wyświetla aktualne warunki pogodowe i dane prognozowane bezpośrednio na mapie. Zapewnia dostęp do informacji pogodowych z wielu źródeł prognoz, obsługuje regulację czasu i pozwala na przeglądanie warstw pogodowych, takich jak temperatura, wiatr, ciśnienie, zachmurzenie i opady.

Dane pogodowe są dostępne bez logowania. Widok Pogody można otworzyć bezpośrednio z interfejsu mapy, klikając ikonę parasola w panelu menu lub klikając prawym przyciskiem myszy na mapie i wybierając Otwórz pogodę z menu kontekstowego.


## Źródło danych {#data-source}

OsmAnd Web dostarcza informacje pogodowe z dwóch źródeł prognoz:

- [**GFS**](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) **(System Prognozy Globalnej)** – domyślne źródło obsługiwane przez NOAA/NWS. Zapewnia pełne dane pogodowe, w tym warstwy temperatury, ciśnienia, wilgotności, wiatru i chmur.  
- [**ECMWF**](https://www.ecmwf.int/) **(Europejskie Centrum Prognoz Średnioterminowych)** – alternatywne źródło prognoz. Oferuje wysokiej jakości dane temperatury, opadów i ciśnienia, ale nie dostarcza informacji o wietrze ani chmurach.  

Aby przełączać się między nimi, kliknij przycisk **parasola** w menu Pogody.

![Pogoda w OsmAnd Web](@site/static/img/web/weather_source.png)


## Menu Pogody {#weather-menu}

Menu **Pogody** wyświetla aktualne warunki pogodowe i dane prognozowane dla wybranego miejsca na mapie. Łączy widok podsumowujący, kontrolki czasu i warstwy pogodowe w jednym panelu.

U góry menu wyświetlana jest nazwa bieżącej lokalizacji, data, godzina i temperatura powietrza. Poniżej znajduje się selektor dnia, który pozwala na przełączanie między dniami prognozy w dostępnym zakresie.

Udostępniono suwak czasu do regulacji czasu prognozy w wybranym dniu. Przesuwanie suwaka aktualizuje wszystkie wyświetlane wartości pogodowe i warstwy mapy, aby odzwierciedlały wybrany moment.

Menu pokazuje następujące parametry pogodowe dla wybranego miejsca:
- *Temperatura*.
- *Opady*.
- *Wiatr*.
- *Ciśnienie powietrza*.
- *Chmury*.  

Każda wartość aktualizuje się dynamicznie podczas zmiany czasu lub daty prognozy.

Na dole panelu wyświetlana jest informacja o czasie generowania danych pogodowych, wskazująca, kiedy dane prognozy zostały ostatnio zaktualizowane.

![Pogoda w OsmAnd Web](@site/static/img/web/weather_menu.png)


## Warstwy pogodowe {#weather-layers}

Warstwy pogodowe pozwalają na wizualizację danych prognozowanych bezpośrednio na mapie jako nakładka. Pomagają szybko ocenić warunki pogodowe na szerszym obszarze zamiast przeglądać wartości tylko dla jednego punktu.

Aby otworzyć panel Warstw pogodowych, kliknij ikonę warstw w menu Pogody. Otworzy się lista dostępnych nakładek pogodowych, które można włączać lub wyłączać niezależnie.

Dostępne są następujące warstwy pogodowe:
- *Temperatura* — wyświetla rozkład temperatury powietrza na mapie za pomocą gradientu kolorów.
- *Opady* — pokazuje intensywność opadów na wybranym obszarze.
- *Wiatr* — wizualizuje prędkość i kierunek wiatru.
- *Ciśnienie powietrza* — wyświetla wzorce ciśnienia atmosferycznego.
- *Chmury* — pokazuje pokrycie chmurami.

Wszystkie warstwy pogodowe są zsynchronizowane z wybraną datą i czasem w menu Pogody. Zmiana dnia prognozy lub regulacja suwaka czasu natychmiast aktualizuje nakładki mapy, aby odzwierciedlały wybrany moment.

![Pogoda w OsmAnd Web](@site/static/img/web/weather_layers.png)


## Widok prognozy {#forecast-view}

Prognozy pogody są dostępne na maksymalnie 7 dni do przodu. Wartości prognozowane są obliczane w 3-godzinnych interwałach, co pozwala na badanie krótkoterminowych zmian w ciągu każdego dnia.

7-dniowa prognoza jest wyświetlana za pomocą dwóch komplementarnych formatów:
- **Widok graficzny**. Pokazuje trendy prognoz w czasie dla wybranego parametru pogodowego. 
- **Widok listy**. Wyświetla dzienne wartości prognoz w strukturyzowanym formacie listy. 

Możesz przełączać się między różnymi parametrami pogodowymi za pomocą ikon u góry panelu prognozy. 

![Pogoda w OsmAnd Web](@site/static/img/web/weather_forecast.png)


## Powiązany artykuł {#related-article}

- [Pogoda](../plugins/weather.md)
- [Wstęp](../web/web-overview.md)
- [Mapa](../web/web-map.md)