---
source-hash: 4cb7c9084c7789ea96d9afde0dedc4fd456fd2ec20405b46d983a36f733ea01e
sidebar_position: 8
title:  Mapy online
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Przegląd {#overview}

Mapy online OsmAnd to obszerne rozszerzenie bazy danych OpenStreetMap już obecnej w aplikacji. Dzięki tej wtyczce możesz dodawać do mapy warstwy z informacjami z innego źródła, począwszy od widoku satelitarnego lub szlaków turystycznych, a skończywszy na bardzo specyficznych danych, takich jak lokalizacja hydrantów przeciwpożarowych. Możesz również zmienić główne źródło mapy z map wektorowych na kafelki online.


## Wymagane parametry konfiguracyjne {#required-setup-parameters}

Możliwość korzystania z map online jest automatycznie włączona w wersji OsmAnd na iOS. Aby wyświetlić mapy online na Androidzie, należy dokonać następujących ustawień:

1. [Włącz](../plugins/index.md#enable--disable) wtyczkę **Mapy online** w *Menu główne → Wtyczki → Mapy online*.
2. Dokonaj niezbędnych ustawień w sekcji [Źródło mapy](../map/raster-maps.md#select-raster-maps) w menu Konfiguruj mapę.
3. Ustaw mapę *Źródło mapy*, *Nakładka* i *Podkład*. Wybierz preferowanego dostawcę map satelitarnych.
4. W razie potrzeby pobierz wybraną [Mapę online](#how-to-prepare-raster-maps).


## Używanie map rastrowych na urządzeniu {#use-raster-maps-on-device}

Szczegółowe informacje na temat wizualizacji i dostosowywania map rastrowych można znaleźć w artykule [Mapy rastrowe](../map/raster-maps.md). Jak używać:

1. [Wybierz](../map/raster-maps.md#select-raster-maps) mapę rastrową jako warstwę *Główną*, *Podkład* lub *Nakładkę*.
    - [Zmień](../map/raster-maps.md#how-to-use-raster-maps) parametry warstwy (przezroczystość).

2. [Przygotuj / skopiuj](../map/raster-maps.md#preparecopy-raster-maps-to-device) mapy rastrowe na urządzenie.
    - [Dodaj nowe źródło mapy rastrowej online](../map/raster-maps.md#add-new-online-raster-map-source)
    - [Dodaj Magiczny URL](../map/raster-maps.md#magic-url-to-install-map-source), aby zainstalować źródło mapy.

3. [Zarządzaj](../map/raster-maps.md#manage-raster-maps) mapami rastrowymi.
    - [Pobierz / zaktualizuj kafelki](../map/raster-maps.md#download--update-tiles).
    - [Zmień](../map/raster-maps.md#change-raster-map-parameters) parametry mapy rastrowej.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![Konfiguracja podkładu / nakładki Android](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![Konfiguracja podkładu / nakładki iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>


## Jak przygotować mapy rastrowe {#how-to-prepare-raster-maps}

:::info
Główny artykuł na temat przygotowywania map [przeczytaj tutaj](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

Mimo że wtyczka nazywa się *Mapy online*, można z nich korzystać również bez połączenia z internetem. Wystarczy zapisać fragmenty map (często nazywane kafelkami), aby użyć ich później. Aby to zrobić, pobierz specjalne narzędzie [Map Creator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) opracowane przez zespół OsmAnd.

Wybierz obszar, który chcesz pobrać, kliknij Preload area, a następnie ustaw najmniejszy i największy poziom powiększenia, który chcesz wyświetlić, i pobierz kafelki.
W przypadku <b>wersji na Androida</b> możesz skopiować je do folderu <i>osmand/tiles/*typ_kafelka*</i> w telefonie. Będziesz także musiał otworzyć <i>Konfiguruj mapę → Nakładka mapy</i> i wybrać kafelki online OsmAnd.

W przypadku <b>wersji na iOS</b> możesz wybrać plik SQ Lite w telefonie (z dowolnego komunikatora lub Dropboxa), a OsmAnd zaproponuje jego dodanie. Będziesz także musiał otworzyć <i>Mapa → Nakładka / Podkład lub Typ mapy</i> i wybrać nowe źródło mapy.

Jak dodać plik SQ Lite w wersji OsmAnd na Androida i iOS, można przeczytać w projekcie <a href="https://anygis.ru/Web/Html/Osmand_en"><b>Anygis</b></a>.


Kafelki online mogą być pomocne, gdy potrzebujesz tylko niewielkiego fragmentu mapy lub jej określonego typu do wykorzystania na ograniczonym obszarze, ale nie chcesz pobierać całego regionu. Mogą się przydać w niezliczonych sytuacjach.

![Mapy online](@site/static/img/plugins/online-maps/map_creator.jpg)

![Mapy online](@site/static/img/plugins/online-maps/map_creator_menu.jpg)


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style map)](../../user/map/vector-maps.md)

### Częste problemy i rozwiązania {#common-issues-and-solutions}

1. Mapy online nie pojawiają się w menu Źródło mapy:  
  
    - Sprawdź, czy wtyczka Mapy online jest włączona: *Menu → Wtyczki → Mapy online*.  
    - Upewnij się, że masz aktywne połączenie z internetem, aby uzyskać dostęp do zdjęć satelitarnych.  
    - Sprawdź, czy wybrana mapa online jest pobrana lub wymaga [dodatkowych ustawień](../map/raster-maps.md#select-raster-maps).