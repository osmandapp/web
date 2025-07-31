---
source-hash: e0f816c2ee06112779d7dbcf8e23176de7256a523ebca82309dd4e8a0dd894d4
sidebar_position: 8
title: Mapy online
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

Mapy online OsmAnd stanowią obszerne uzupełnienie bazy danych OpenStreetMap, która jest już obecna w aplikacji. Dzięki tej wtyczce możesz dodawać warstwy do swojej mapy z informacjami z innego źródła, zaczynając od widoku satelitarnego lub szlaków turystycznych, a kończąc na bardzo specyficznych danych, takich jak lokalizacja hydrantów przeciwpożarowych. Możesz także zmienić główne źródło mapy z map wektorowych na kafelki online.


## Wymagane parametry konfiguracji {#required-setup-parameters}

Możliwość korzystania z map online jest automatycznie włączona w wersji OsmAnd na iOS. Aby wyświetlić mapy online w systemie Android, należy dokonać następujących ustawień:

1. [Włącz](../plugins/index.md#enable--disable) wtyczkę **Mapy online** w *Menu głównym → Wtyczki → Mapy online*.
2. Dokonaj niezbędnych ustawień w sekcji [Źródło mapy](../map/raster-maps.md#select-raster-maps) w menu Konfiguruj mapę.
3. Ustaw *Źródło mapy*, *Nakładkę* i *Podkład*. Wybierz preferowanego dostawcę map satelitarnych.
4. W razie potrzeby pobierz wybraną [Mapę online](#how-to-prepare-raster-maps).


## Korzystanie z map rastrowych na urządzeniu {#use-raster-maps-on-device}

Szczegółowe informacje na temat wizualizacji i dostosowywania map rastrowych można znaleźć w artykule [Mapy rastrowe](../map/raster-maps.md). Jak używać:

1. [Wybierz](../map/raster-maps.md#select-raster-maps) mapę rastrową jako warstwę *Główną*, *Podkładową* lub *Nakładkową*.
    - [Zmień](../map/raster-maps.md#how-to-use-raster-maps) parametry warstwy (przezroczystość).

2. [Przygotuj / skopiuj](../map/raster-maps.md#prepare--copy-raster-maps-to-device) mapy rastrowe na urządzenie.
    - [Dodaj nowe źródło map rastrowych online](../map/raster-maps.md#add-new-online-raster-map-source)
    - [Dodaj magiczny URL](../map/raster-maps.md#magic-url-to-install-map-source), aby zainstalować źródło mapy.

3. [Zarządzaj](../map/raster-maps.md#manage-raster-maps) mapami rastrowymi.
    - [Pobierz / zaktualizuj kafelki](../map/raster-maps.md#download--update-tiles).
    - [Zmień](../map/raster-maps.md#change-raster-map-parameters) parametry mapy rastrowej.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![Konfiguruj podkład / nakładkę Android](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![Konfiguruj podkład / nakładkę iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>


## Jak przygotować mapy rastrowe {#how-to-prepare-raster-maps}

:::info
Główny artykuł dotyczący przygotowywania map [przeczytaj tutaj](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

Mimo że wtyczka nazywa się *Mapy online*, możesz korzystać z map również bez połączenia z internetem. Wystarczy zapisać fragmenty map (często nazywane kafelkami), aby użyć ich później. Aby to zrobić, pobierz specjalne [narzędzie Map Creator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) opracowane przez zespół OsmAnd.

Wybierz obszar, który chcesz pobrać, kliknij Preload area, a następnie ustaw najmniejszy i największy poziom powiększenia, który chcesz wyświetlić, i pobierz kafelki.
W przypadku **wersji Android** możesz skopiować je do folderu *osmand/tiles/*typ kafelka** w telefonie. Musisz także otworzyć *Konfiguruj mapę -> Mapa nakładkowa* i wybrać kafelki online OsmAnd.

W przypadku **wersji iOS** możesz wybrać plik SQ Lite w telefonie (dowolny komunikator lub dropbox), OsmAnd zasugeruje jego dodanie. Musisz także otworzyć *Mapa → Nakładka / Podkład lub Typ mapy* i wybrać nowe źródło mapy.

Jak dodać plik SQ Lite w wersji OsmAnd na Androida i iOS, możesz przeczytać w projekcie <a href="https://anygis.ru/Web/Html/Osmand_en"><b>Anygis</b></a>.


Kafelki online mogą być pomocne, gdy potrzebujesz tylko małego fragmentu mapy lub jej określonego typu do użycia na ograniczonym obszarze, ale nie chcesz pobierać całego regionu. Mogą się przydać w niezliczonych sytuacjach.

![Mapy online](@site/static/img/plugins/online-maps/map_creator.jpg)

![Mapy online](@site/static/img/plugins/online-maps/map_creator_menu.jpg)


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (style map)](../../user/map/vector-maps.md)

### Typowe problemy i rozwiązania {#common-issues-and-solutions}

1. Mapy online nie pojawiają się w menu Źródło mapy:  
  
    - Sprawdź, czy wtyczka Mapy online jest włączona: *Menu → Wtyczki → Mapy online*.  
    - Upewnij się, że masz aktywne połączenie z internetem, aby uzyskać dostęp do zdjęć satelitarnych.  
    - Sprawdź, czy wybrana mapa online została pobrana lub wymaga [dodatkowych ustawień](../map/raster-maps.md#select-raster-maps).

> *Ostatnia aktualizacja: styczeń 2025*