---
source-hash: c674aa26de62610f1442ef441eaa008b20c3b4a69dd7617b13ccd27ccf7f2234
sidebar_position: 7
title:  Ulubione
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

**Ulubione** to funkcja OsmAnd, która pozwala tworzyć zakładki (notatki) na mapie. Te ulubione punkty są domyślnie wyświetlane jako żółte gwiazdki, ale można je w pełni dostosować za pomocą różnych kolorów, kształtów i ikon. Ulubione są pogrupowane w dedykowaną warstwę mapy, która staje się widoczna od *6 poziomu powiększenia*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wprowadzenie do ulubionych android](@site/static/img/personal/favorites_intro_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wprowadzenie do ulubionych ios](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>


## Punkt ulubiony {#favorite-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Warstwa ulubionych Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Warstwa ulubionych iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

Ulubione są częścią specjalnej warstwy mapy i można je [pokazać lub ukryć](../map/point-layers-on-map.md#favorites) wraz z ich [nazwami](../map/point-layers-on-map.md#favorite-and-poi-names) na mapie. Dotknięcie ulubionego punktu otwiera [menu kontekstowe](../map/map-context-menu.md#favorites--track-points-from-the-group), umożliwiając przeglądanie szczegółów oraz [edycję lub usunięcie](../map/map-context-menu.md#add--edit-favorite) punktu.


### Tworzenie {#create}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dodaj opis ulubionego Android](@site/static/img/personal/favorite_add_descr_android.png)  ![Grupa ulubionych Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Dodaj opis ulubionego iOS](@site/static/img/personal/favorite_add_descr_ios.png)  ![Grupa ulubionych iOS](@site/static/img/personal/favorite_group_ios.png)

</TabItem>

</Tabs>

Aby dodać ulubiony punkt:

1. Wybierz [POI (UM)](../map/point-layers-on-map.md#points-of-interest-pois) lub strukturę na mapie.
    Krótkie dotknięcie dla POI lub długie dotknięcie dla ogólnego punktu na mapie.
2. Wybierz [Dodaj (☆)](../map/map-context-menu.md#add--edit-favorite) z menu kontekstowego mapy.

Podczas dodawania punktu z danych OSM, odpowiednie informacje o POI są automatycznie dołączane. Możesz również utworzyć ulubiony punkt przez [długie dotknięcie](../map/map-context-menu.md#select-any-point-long-tap) dowolnej lokalizacji na mapie.

***Pola dla punktu ulubionego:***

- **Nazwa** — Unikalna nazwa w obrębie grupy (*Wymagane*).
- **Adres** i **Opis** (*Opcjonalne*).
- **Grupa** — Wybierz z istniejącej [Grupy ulubionych](#manage-favorites) lub utwórz nową.
- **Wizualna personalizacja** — Ikona, kolor, kształt mogą odpowiadać domyślnemu [wyglądowi grupy](#change-group-appearance) lub być dostosowane indywidualnie.


### Edytuj / Zastąp / Usuń {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Edycja ulubionego Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Edycja ulubionego iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

Aby zmodyfikować ulubiony punkt:

1. [Dotknij](../map/map-context-menu.md#select-an-object-single-tap) ulubionego punktu na mapie lub przejdź do [Moje ulubione](#manage-favorites).
2. Wybierz **Edytuj ulubiony** z [*menu kontekstowego mapy*](../map/map-context-menu.md#add--edit-favorite).

***Dostępne opcje:***

- **Edytuj szczegóły** — Nazwa, ikona, grupa, adres i opis.
- **Zastąp lokalizację** — Zastąp inny punkt tym. Przydatne do aktualizacji konkretnego punktu (np. *Mój zaparkowany samochód*) lub tworzenia nowego.
- **Usuń** — Usuń ulubiony punkt za pomocą opcji usuwania, dostępnej przez menu Edytuj lub za pomocą przycisku usuwania w systemie Android.


### Ikony ulubionych {#favorite-icons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Moje miejsca ulubione android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![moje_miejsca_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

W OsmAnd dostępna jest szeroka gama ikon dla POI i punktów trasy. Możesz:

- Wybrać ikonę z listy [kategorii POI](../search/search-poi.md#categories-and-their-filters).
- Znaleźć odpowiednią ikonę za pomocą [opcji wyszukiwania](../search/search-all.md#how-to-use).


### Specjalne ulubione (Osobiste) {#special-favorites-personal}

Folder *Osobiste* zawiera specjalne punkty, takie jak **<Translate android="true" ids="favorite_home_category"/>** i **<Translate android="true" ids="work_button"/>**, często używane w [nawigacji](../navigation/setup/route-navigation.md#select-starting-point). Ten folder nie ma *menu z trzema kropkami*, a jego parametrów nie można zmienić.


## Zarządzaj ulubionymi {#manage-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Moje miejsca ulubione android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![moje_miejsca_ios](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

Sekcja **Moje ulubione** pozwala na:

- [Wyszukiwanie](#order--sorting--search) określonych ulubionych lub grup.
- [Operacje zbiorcze](#bulk-edit--delete) — Zmiana nazwy, przenoszenie lub usuwanie wielu ulubionych naraz.

### Kolejność / Sortowanie / Wyszukiwanie {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Foldery ulubionych android](@site/static/img/personal/favorites_folders_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Foldery ulubionych ios](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

- **Sortowanie** — Foldery i punkty ulubione są sortowane alfabetycznie, z [folderem osobistym](../personal/favorites.md#special-favorites-personal) na górze.
- **Wyszukiwanie** — Użyj [Wyszukiwania globalnego](../search/search-all.md), aby znaleźć ulubione według nazwy. Ulubione są sortowane według odległości od środka mapy.


### Edycja zbiorcza / Usuwanie {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Akcje ulubionych android](@site/static/img/personal/favorites_actions_android.png) ![Akcja usuwania ulubionych android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Akcje ulubionych ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

1. Aby zarządzać wieloma ulubionymi, dotknij ikony **Usuń** (*ikona kosza w systemie Android*) lub przycisku **Edytuj** (*ikona ołówka w systemie iOS*).
2. Wybierz poszczególne ulubione lub całe foldery do operacji zbiorczych.
3. **Dostępne opcje** — *Usuń* dla Androida i iOS, *Przenieś do grupy ulubionych*, *Udostępnij* i *Zmień kolor* dla iOS.

<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- **<Translate android="true" ids="shared_string_add_to_map_markers"/>**  or **<Translate android="true" ids="remove_from_map_markers"/>**.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### Akcje grupy ulubionych {#favorite-group-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *Menu z trzema kropkami → Zmień domyślny wygląd*

![Funkcje folderu ulubionych android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *Długie dotknięcie folderu → Domyślny wygląd*

![Akcje ulubionych ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

Użyj ***Menu z trzema kropkami*** (*Android*) obok każdego folderu i ***długiego dotknięcia*** (*iOS*) folderu, aby zarządzać grupami ulubionych:

- **<Translate android="true" ids="shared_string_rename"/>** — Użyj tej opcji, aby zmienić nazwę wybranego folderu.

- **<Translate android="true" ids="change_default_appearance"/>** — Dostosuj wygląd ulubionych punktów w folderze na mapie, zmieniając ich ikony, kolory lub etykiety.

- **<Translate android="true" ids="shared_string_show_on_map"/>** lub **Ukryj na mapie** — Przełącz tę opcję, aby wyświetlić lub ukryć ulubione punkty z folderu na mapie.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** lub **Usuń ze znaczników mapy** (*tylko Android*) — Dodaj wszystkie ulubione punkty z folderu do *listy znaczników mapy* lub usuń je w razie potrzeby, aby ułatwić sobie odniesienie.

- **<Translate android="true" ids="shared_string_share"/>** — Udostępnij ulubione punkty w folderze, eksportując je jako plik *Favorites.gpx*, co ułatwia transfer lub tworzenie kopii zapasowej danych.

- **<Translate android="true" ids="shared_string_delete"/>** — Trwale usuń wybrany folder ulubionych i wszystkie punkty w nim zawarte.

Więcej szczegółów w artykule [Moje miejsca](../personal/myplaces.md#favorites).



### Zmień wygląd grupy {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funkcje folderu ulubionych android](@site/static/img/personal/favorite_change_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Akcje ulubionych ios](@site/static/img/personal/favorite_add_new_group_3_ios.png)

</TabItem>

</Tabs>

Ustawienia *Zmień wygląd grupy*:

- **Ikona, kolor, kształt** — Ustaw domyślny styl dla wszystkich ulubionych w grupie.
- **Spójność** — Nowe ulubione dodane do grupy automatycznie dziedziczą domyślny wygląd.
- **Dostosowywanie** — Zastąp domyślne ustawienia dla istniejących punktów w folderze, tylko dla nowych ulubionych lub zastosuj do wszystkich.


## Eksport / Import {#export--import}

OsmAnd oferuje kilka metod [tworzenia kopii zapasowych](./import-export.md) i [przywracania](./import-export.md#import) ulubionych:

- **Lokalizacje kopii zapasowych** — Pamięć lokalna, [OsmAnd Cloud](../personal/osmand-cloud.md) (tylko z [subskrypcją OsmAnd Pro lub OsmAnd Start](../purchases/index.md)) lub komunikatory internetowe.

- **Format pliku** — Ulubione są zapisywane jako pliki `.gpx` (favorites.gpx).


### Darmowa kopia zapasowa w chmurze {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Funkcje folderu ulubionych android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Akcje ulubionych ios](@site/static/img/personal/favorites_free_backup_2_ios.png)

</TabItem>

</Tabs>

[Darmowa kopia zapasowa ulubionych](../personal/osmand-cloud.md#osmand-start) to specjalny plan zakupu, który pozwala na tworzenie kopii zapasowych ulubionych punktów (lokalizacji) dla wersji **Android, iOS** lub **Web** w aplikacji OsmAnd i przywracanie ich z OsmAnd Cloud. Ten plan jest dostępny dla użytkowników [OsmAnd Free lub Maps+](../purchases/index.md).

*Darmowa kopia zapasowa ulubionych* oferuje następujące korzyści:

- **Nie jest wymagana żadna płatność**. Korzystaj z funkcji tworzenia kopii zapasowych bez kupowania płatnych subskrypcji.
- **Zapisuj ulubione punkty**. Regularnie zapisuj swoje ulubione punkty w OsmAnd, aby uniknąć ich utraty w przypadku awarii urządzenia lub usunięcia aplikacji.
- **Przenoś ulubione punkty**. Importuj swoje ulubione punkty na nowe urządzenie za pomocą funkcji *Darmowa kopia zapasowa ulubionych*, jeśli używasz OsmAnd na wielu urządzeniach.


### Jak utworzyć kopię zapasową {#how-to-create-a-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Funkcje folderu ulubionych android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Akcje ulubionych ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

Do korzystania z funkcji *Darmowa kopia zapasowa ustawień* potrzebne jest konto OsmAnd Cloud. Jeśli masz konto w *OsmAnd Pro* lub aktywne konto w *OsmAnd Cloud*, nie zobaczysz banera promocyjnego.

- *Baner Darmowa kopia zapasowa ulubionych*. Dotknij tego banera, aby rozpocząć proces tworzenia kopii zapasowej.
- *Ukończ krok rejestracji*, jeśli nie masz konta OsmAnd Cloud, postępując zgodnie z instrukcjami w [przewodniku rejestracji](../personal/osmand-cloud.md#login).
- *Przejdź do menu Zakupy OsmAnd* (*Menu → Ustawienia → Zakupy*).
- *[Pakiet OsmAnd Start](../personal/osmand-cloud.md#osmand-start)*. Wybierz tę opcję, aby uzyskać dostęp do funkcji Darmowa kopia zapasowa ustawień.
- *Utwórz kopię zapasową* swoich ustawień.


### Wszystkie ulubione {#all-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Akcje ulubionych android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Eksport import ulubionych ios](@site/static/img/personal/favorites_export_import_3_ios.png)  

</TabItem>

</Tabs>

Możesz eksportować i importować swoje ulubione za pomocą specjalnych przycisków na dole ekranu Ulubione. [Plik .gpx](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) można wysłać do Dropbox, e-maila, komunikatorów i innych aplikacji zainstalowanych na urządzeniu, które obsługują tę funkcję.

- Przycisk **Importuj** (*Android*) / **Importuj ulubione** (*iOS*). Pozwala na importowanie ulubionych punktów (*favorites.gpx*) jako punktów trasy z pliku *GPX* (powszechny format danych GPS) z pamięci urządzenia.
- Przycisk **Udostępnij** (*Android*) / **Eksportuj ulubione** (*iOS*). Pozwala na eksportowanie (udostępnianie) wszystkich ulubionych jako plik *favorites.gpx*.


### Grupa ulubionych {#favorite-group}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funkcje folderu ulubionych android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Akcje ulubionych ios](@site/static/img/personal/favorites_actions_1_ios.png)   ![Akcje ulubionych ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

- Dotknij **Menu z trzema kropkami** (*Android*) lub przycisku **Edytuj** (*ikona ołówka w iOS*) lub **długo dotknij** folderu (*iOS*) wybranego folderu ulubionych.
- Wybierz przycisk **Udostępnij**, aby wysłać plik *Favorites.gpx* do pamięci urządzenia lub udostępnić go za pośrednictwem komunikatorów.


### Automatyczna kopia zapasowa ulubionych {#automatic-favorites-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *Android → data → net.osmand → files → backup*

![Eksport kopii zapasowej ulubionych Android](@site/static/img/personal/favorites_backup_export_andr.png)  ![Automatyczna kopia zapasowa ulubionych android](@site/static/img/personal/favorites_autobackup_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *Pliki → Na moim iPhonie → OsmAnd Maps → favourites_backup*

![Automatyczna kopia zapasowa ulubionych ios](@site/static/img/personal/favorites_autobackup.png)  

</TabItem>

</Tabs>

OsmAnd tworzy **plik kopii zapasowej** za każdym razem, gdy ulubione są edytowane.

- **Android**: Kopie zapasowe są przechowywane w *Android → data → net.osmand → files → backup*. Użyj menedżera plików innej firmy, aby uzyskać do nich dostęp.

- **iOS**: Pliki znajdują się w *Pliki → Na moim iPhonie → OsmAnd Maps → favourites_backup*.

**Ręczny eksport kopii zapasowej**  

- Przejdź do *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*.
- Eksportuj plik `.osf` do pamięci lokalnej, usług chmurowych lub udostępnij go bezpośrednio.

:::caution
W najnowszych wersjach systemu ***Android*** dostęp do katalogów systemowych jest ograniczony. Jednak po wyodrębnieniu pliku ulubionych z archiwum nadal można go przesłać do komunikatorów, usług chmurowych itp.
:::


### Ulubione w pliku GPX {#favorites-in-gpx-file}

Wszystkie informacje o ulubionym są przechowywane i opisywane za pomocą tagów. Tworząc ulubiony punkt, możesz napisać własny [opis](#favorite-point) lub skorzystać z informacji z danych [użytecznego miejsca (POI)](../map/point-layers-on-map.md#points-of-interest-pois) OSM, z których został utworzony Twój punkt. Ulubione punkty, POI i punkty trasy używają tych samych **tagów** do przechowywania informacji i są zapisywane w **formacie pliku GPX**.


```xml
<gpx version="1.1" creator="OsmAnd" xmlns="http://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net" xmlns:test="https://test.net" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
    <wpt lat="37.5460870" lon="-77.4532843">
        <time>2023-06-07T12:31:35Z</time>
        <name>Test</name>
        <type>SOTM</type>
        <extensions>
            <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
            <osmand:icon>place_town</osmand:icon>
            <osmand:background>circle</osmand:background>
            <osmand:color>#ff4e4eff</osmand:color>
            <test:country>United States</test:country>
            <test:state>Virginia</test:state>
            <test:telephone>(804) 828-0100</test:telephone>
            <test:postcode>23284</test:postcode>
            <test:start_date>Thursday, June 8, 2023</test:start_date>
        </extensions>
    </wpt>
</gpx>
```  


## Powiązane artykuły {#related-articles}

- [Zarządzaj śladami](../personal/tracks/manage-tracks.md#import--export-track)
- [Historia wyszukiwania](../search/search-history.md#export-and-share)
- [Schematy palet kolorów](../personal/color-palette-schemes.md)