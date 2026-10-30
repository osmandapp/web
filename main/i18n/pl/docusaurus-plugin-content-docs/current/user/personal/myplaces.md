---
source-hash: 941d8e8096800d75da224d6bdd577697326daf17319375cb9b22749166c80554
sidebar_position: 6
title:  Moje miejsca
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

## Przegląd {#overview}

**Moje miejsca** to centralne miejsce w aplikacji OsmAnd do zarządzania i dostosowywania wszystkich danych osobowych. Możesz użyć tej sekcji do organizowania [punktów ulubionych](#favorites) oznaczonych jako ważne lub często odwiedzane. Zakładka [Trasy](#tracks) pozwala na przeglądanie, importowanie, nagrywanie i tworzenie plików GPX, co pomaga w prowadzeniu szczegółowej historii tras i podróży. Możesz również zarządzać swoimi [edycjami OpenStreetMap](#openstreetmap-edits), co ułatwia wnoszenie wkładu w ulepszanie i aktualizowanie map. Wtyczka [Notatki audio/wideo](#audiovideo-notes) i widżety pozwalają użytkownikom Androida na tworzenie i zapisywanie notatek multimedialnych związanych z konkretnymi lokalizacjami, dodając kontekst do ich podróży. Na iOS Moje miejsca zapewniają również dostęp do zapisanych [Przewodników turystycznych](#travel-guides), umożliwiając organizowanie i szybkie otwieranie zapisanych treści podróżniczych.

## Menu Moje miejsca {#my-places-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>*  

![Moje miejsca Android](@site/static/img/personal/my_places_android_new.png) ![Menu Moje miejsca Android](@site/static/img/personal/my_places_menu_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>*  

![Moje miejsca iOS](@site/static/img/personal/my_places_ios_2.png)  ![Menu Moje miejsca iOS](@site/static/img/personal/my_places_menu_ios.webp)

</TabItem>

</Tabs>

Moje miejsca są zorganizowane według kategorii. Wybierz zakładkę, aby zarządzać odpowiednimi danymi.

**Uwaga:** Wszystkie dane przechowywane w menu *Moje miejsca* można przenosić za pomocą specjalnego formatu `.osf` za pośrednictwem aplikacji na urządzeniu. Proces ten upraszcza zapisywanie i przesyłanie danych między urządzeniami oraz umożliwia udostępnianie ich innym użytkownikom OsmAnd. 

### Ulubione {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Menu Ulubione Android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Menu Ulubione iOS](@site/static/img/personal/favorites_menu_tab_ios.webp)

</TabItem>

</Tabs>

**Ulubione** pozwalają na oznaczanie ważnych lub często odwiedzanych lokalizacji. Te ulubione punkty są zorganizowane w folderach i można je dostosować za pomocą różnych kolorów, kształtów i ikon. Możesz szybko nawigować do dowolnego ulubionego miejsca poprzez menu **Moje miejsca** bez konieczności wielokrotnego wyszukiwania.

Aby uzyskać pełne instrukcje, zapoznaj się z artykułem [Ulubione](../personal/favorites.md).

### Trasy {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![Moje miejsca ze ścieżkami na Androidzie](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Moje miejsca ze ścieżkami na iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.webp)

</TabItem>

</Tabs>

**Trasy** oferują potężne narzędzia do nagrywania, tworzenia i zarządzania trasami w OsmAnd. Mogą być używane do [nawigacji](../navigation/setup/gpx-navigation.md), [nagrywania podróży](../plugins/trip-recording.md) lub [integrowania](../personal/tracks/manage-tracks.md#import) zewnętrznych plików GPX.

Aby uzyskać kompleksowe wskazówki, zobacz artykuł [Zarządzanie trasami](../personal/tracks/manage-tracks.md).

### Edycje OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Udostępnij](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Udostępnij](@site/static/img/plugins/osm-editing/my_places_osm_ios.webp)

</TabItem>

</Tabs>

Funkcja **Edycje OpenStreetMap** w OsmAnd umożliwia wnoszenie wkładu w globalną społeczność mapującą poprzez dodawanie, modyfikowanie lub komentowanie danych mapy.

Zapoznaj się z [wtyczką Edycja OSM](../plugins/osm-editing.md), aby uzyskać instrukcje krok po kroku.

### Notatki audio/wideo {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Wtyczka Audio/wideo, menu Moje miejsca, trzy akcje](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

Wtyczka **Notatki audio/wideo** umożliwia tworzenie notatek multimedialnych powiązanych z określonymi lokalizacjami na mapie. Notatki te są przechowywane w **Moich miejscach** w zakładce **Notatki A/V**. Każda notatka jest również zapisywana jako ulubiony w folderze **media** w zakładce [Ulubione](#favorites).

Aby uzyskać więcej informacji, odwiedź stronę [wtyczki Notatki audio/wideo](../plugins/audio-video-notes.md).

### Przewodniki turystyczne (iOS) {#travel-guides}

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_travel_guides"/>*

![Przewodniki turystyczne iOS](@site/static/img/plan-route/travel_guides_ios.webp)

Sekcja **Podróże** zawiera zapisane przewodniki turystyczne i artykuły zapisane do użytku offline. Możesz szybko otwierać, organizować i zarządzać zapisanymi treściami podróżniczymi z Moich miejsc. Sekcja Podróże jest wyświetlana tylko wtedy, gdy zapisano więcej niż jeden przewodnik turystyczny.

Aby uzyskać szczegółowe informacje, zapoznaj się z artykułem [Przewodniki turystyczne](../plan-route/travel-guides.md).

## Powiązane artykuły {#related-articles}

- [Zarządzanie trasami](../personal/tracks/manage-tracks.md#import--export-track)
- [Ulubione](../personal/favorites.md)
- [Edycja OpenStreetMap](../plugins/osm-editing.md)
- [Notatki audio/wideo](../plugins/audio-video-notes.md)
- [Przewodniki turystyczne](../plan-route/travel-guides.md)
- [Historia wyszukiwania](../search/search-history.md#export-and-share)
- [Schematy palet kolorów](../personal/color-palette-schemes.md)