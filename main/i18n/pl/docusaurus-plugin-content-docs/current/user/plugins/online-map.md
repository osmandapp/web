---
source-hash: 1b9d749ebb8730c64d4b1fceddc86003dfc6c14c7f5e556129e21a75f245cdc3
sidebar_position: 8
title: Mapy Online
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

Mapy Online OsmAnd to obszerne uzupełnienie bazy danych OpenStreetMap, już obecnej w aplikacji. Dzięki tej wtyczce możesz dodawać warstwy do swojej mapy z informacjami z innego źródła, począwszy od widoku satelitarnego lub szlaków turystycznych, a skończywszy na bardzo specyficznych danych, takich jak lokalizacja hydrantów przeciwpożarowych. Możesz również zmienić główne źródło mapy z map wektorowych na kafelki online.


## Wymagane parametry konfiguracji {#required-setup-parameters}

Możliwość korzystania z Map Online jest automatycznie włączona w wersji OsmAnd na iOS. Aby wyświetlić Mapy Online w systemie Android, należy dokonać następujących ustawień:

1. [Włącz](../plugins/index.md#enable--disable) wtyczkę **Mapy Online** w *Menu głównym → Wtyczki → Mapy Online*.
2. Dokonaj niezbędnych ustawień w sekcji [Źródło mapy](../map/raster-maps.md#select-raster-maps) menu Konfiguruj mapę.
3. Ustaw *Źródło mapy*, *Nakładkę* i *Podkład* mapy. Wybierz preferowanego dostawcę map satelitarnych.
4. Pobierz wybraną [Mapę Online](#how-to-prepare-raster-maps), jeśli to konieczne.


## Używaj map rastrowych na urządzeniu {#use-raster-maps-on-device}

Szczegółowe informacje na temat wizualizacji i dostosowywania map rastrowych można znaleźć w artykule [Mapy rastrowe](../map/raster-maps.md). Jak używać:

1. [Wybierz](../map/raster-maps.md#select-raster-maps) mapę rastrową jako warstwę *Główną*, *Podkładową* lub *Nakładkową*.
    - [Zmień](../map/raster-maps.md#how-to-use-raster-maps) parametry warstwy (przezroczystość).

2. [Przygotuj / skopiuj](../map/raster-maps.md#prepare--copy-raster-maps-to-device) mapy rastrowe na urządzenie.
    - [Dodaj nowe źródło mapy rastrowej online](../map/raster-maps.md#add-new-online-raster-map-source)
    - [Dodaj Magic URL](../map/raster-maps.md#magic-url-to-install-map-source), aby zainstalować źródło mapy.

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
Główny artykuł do przygotowania map [przeczytaj tutaj](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

Mimo że wtyczka nazywa się *Mapy Online*, możesz używać map również bez połączenia z internetem. Wystarczy zapisać części map (często nazywane kafelkami), aby użyć ich później. Aby to zrobić, pobierz specjalne [narzędzie Map Creator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) opracowane przez zespół OsmAnd.

Wybierz obszar, który chcesz pobrać, kliknij Preload area, a następnie ustaw najmniejszy i największy poziom powiększenia, który chcesz wyświetlić, i pobierz kafelki.
W przypadku <b>wersji Android</b> możesz skopiować je do folderu <i>osmand/tiles/*typ kafelka*</i> w telefonie. Musisz również otworzyć <i>Konfiguruj mapę -> Mapa nakładkowa</i> i wybrać kafelki online OsmAnd.

W przypadku <b>wersji iOS</b> możesz wybrać plik SQ Lite w telefonie (dowolny komunikator lub Dropbox), OsmAnd zasugeruje jego dodanie. Musisz również otworzyć <i>Mapa → Nakładka / Podkład lub Typ mapy</i> i wybrać nowe źródło mapy.

Jak dodać plik SQ Lite w wersji OsmAnd na Androida i iOS, możesz przeczytać w [<b>projekcie Anygis</b>](https://anygis.ru/Web/Html/Osmand_en).


Kafelki online mogą być pomocne, gdy potrzebujesz tylko małej sekcji mapy lub jej określonego typu do użycia na ograniczonym obszarze, ale nie chcesz pobierać całego regionu. Mogą się przydać w niezliczonych sytuacjach.

![Mapy Online](@site/static/img/plugins/online-maps/map_creator.jpg)

![Mapy Online](@site/static/img/plugins/online-maps/map_creator_menu.jpg)


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (style map)](../../user/map/vector-maps.md)

### Typowe problemy i rozwiązania {#common-issues-and-solutions}

1. Mapy Online nie pojawiają się w menu Źródło mapy:  
  
    - Sprawdź, czy wtyczka Mapy Online jest włączona: *Menu → Wtyczki → Mapy Online*.  
    - Upewnij się, że masz aktywne połączenie internetowe, aby uzyskać dostęp do zdjęć satelitarnych.  
    - Sprawdź, czy wybrana Mapa Online jest pobrana lub wymaga [dodatkowych ustawień](../map/raster-maps.md#select-raster-maps).

> *Ostatnia aktualizacja: styczeń 2025*