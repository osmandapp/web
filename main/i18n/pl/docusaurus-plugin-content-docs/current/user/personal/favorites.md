---
source-hash: 08c4a707755dc66044356c5dad82616bbd7f7add912ad819bc413a4b0e6a2766
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

**Ulubione** to funkcja OsmAnd, która umożliwia tworzenie zakładek (notatek) na mapie. Te ulubione punkty są domyślnie wyświetlane jako żółte gwiazdki, ale można je w pełni dostosować za pomocą różnych kolorów, kształtów i ikon. Ulubione są pogrupowane w dedykowaną warstwę mapy, która staje się widoczna od *6. poziomu powiększenia*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites introduction android](@site/static/img/personal/favorites_intro_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites introduction ios](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>


## Punkt ulubiony {#favorite-point}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favotires layer Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

Ulubione są częścią specjalnej warstwy mapy i można je [pokazywać lub ukrywać](../map/point-layers-on-map.md#favorites) wraz z ich [nazwami](../map/point-layers-on-map.md#favorite-and-poi-names) na mapie. Dotknięcie ulubionego punktu otwiera [menu kontekstowe](../map/map-context-menu.md#favorites--track-points-from-the-group), umożliwiając przeglądanie szczegółów oraz [edycję lub usunięcie](../map/map-context-menu.md#add--edit-favorite) punktu.


### Tworzenie {#create}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorite add description Android](@site/static/img/personal/favorite_add_descr_android.png) ![Favorite group Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite add description iOS](@site/static/img/personal/favorite_add_descr_ios.png) ![Favorite group iOS](@site/static/img/personal/favorite_group_ios.png)

</TabItem>

</Tabs>

Aby dodać ulubiony punkt:

1. Wybierz [POI](../map/point-layers-on-map.md#points-of-interest-pois) lub strukturę na mapie.
Krótkie dotknięcie dla POI lub długie dotknięcie dla ogólnego punktu na mapie.
2. Wybierz [Dodaj (☆)](../map/map-context-menu.md#add--edit-favorite) z menu kontekstowego mapy.

Podczas dodawania punktu z danych OSM, odpowiednie informacje POI są automatycznie dołączane. Możesz również utworzyć ulubiony punkt poprzez [długie dotknięcie](../map/map-context-menu.md#select-any-point-long-tap) dowolnej lokalizacji na mapie.

***Pola dla ulubionego punktu:***

- **Nazwa** — Unikalna nazwa w grupie (*Wymagane*).
- **Adres** i **Opis** (*Opcjonalne*).
- **Grupa** — Wybierz z istniejącej [grupy ulubionych](#manage-favorites) lub utwórz nową.
- **Dostosowanie wizualne** — Ikona, kolor, kształt mogą pasować do domyślnego [wyglądu grupy](#change-group-appearance) lub być indywidualnie dostosowane.


### Edytuj / Zastąp / Usuń {#edit--replace--delete}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorite edit Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite edit iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

Aby zmodyfikować ulubiony punkt:

1. [Dotknij](../map/map-context-menu.md#select-an-object-single-tap) ulubionego punktu na mapie lub przejdź do [Moje ulubione](#manage-favorites).
2. Wybierz **Edytuj ulubione** z [*menu kontekstowego mapy*](../map/map-context-menu.md#add--edit-favorite).

***Dostępne opcje:***

- **Edytuj szczegóły** — Nazwa, ikona, grupa, adres i opis.
- **Zastąp lokalizację** — Zastąp inny punkt tym. Przydatne do aktualizacji konkretnego punktu (np. *Mój zaparkowany samochód*) lub tworzenia nowego.
- **Usuń** — Usuń ulubiony punkt za pomocą opcji usuwania, dostępnej poprzez menu Edytuj lub za pomocą przycisku usuwania na Androidzie.


### Ikony ulubionych {#favorite-icons}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![My places favorites android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

W OsmAnd dostępny jest szeroki wybór ikon dla POI i punktów trasy. Możesz:

- Wybierz ikonę z listy [kategorii POI](../search/search-poi.md#categories-and-their-filters).
- Znajdź odpowiednią ikonę za pomocą [opcji wyszukiwania](../search/search-all.md#how-to-use).


### Ulubione specjalne (osobiste) {#special-favorites-personal}

Folder *Osobiste* zawiera specjalne punkty, takie jak **<Translate android="true" ids="favorite_home_category"/>** i **<Translate android="true" ids="work_button"/>**, często używane w [nawigacji](../navigation/setup/route-navigation.md#select-starting-point). Ten folder nie posiada *menu z trzema kropkami*, a jego parametry nie mogą być zmieniane.


## Zarządzaj ulubionymi {#manage-favorites}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![My places favorites android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

Sekcja **Moje ulubione** umożliwia:

- [Wyszukiwanie](#order--sorting--search) konkretnych ulubionych lub grup.
- [Operacje zbiorcze](#bulk-edit--delete) — Zmiana nazwy, przenoszenie lub usuwanie wielu ulubionych jednocześnie.

### Kolejność / Sortowanie / Wyszukiwanie {#order--sorting--search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites folders android](@site/static/img/personal/favorites_folders_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Favorites folders ios](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

- **Sortowanie** — Foldery i punkty ulubionych są sortowane alfabetycznie, z [folderem osobistym](../personal/favorites.md#special-favorites-personal) na górze.
- **Wyszukiwanie** — Użyj [wyszukiwania globalnego](../search/search-all.md) do znalezienia ulubionych według nazwy. Ulubione są sortowane według odległości od centrum mapy.


### Edycja/usuwanie zbiorcze {#bulk-edit--delete}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_actions_android.png) ![Favorites action delete android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

1. Aby zarządzać wieloma ulubionymi, dotknij ikony **Usuń** (*ikona kosza na Androidzie*) lub przycisku **Edytuj** (*ikona ołówka na iOS*).
2. Wybierz pojedyncze ulubione lub całe foldery do operacji zbiorczych.
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


### Akcje grup ulubionych {#favorite-group-actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *Menu z trzema kropkami → Zmień domyślny wygląd*

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *Długie dotknięcie folderu → Zmień wygląd*

![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

Użyj ***menu z trzema kropkami*** (*Android*) obok każdego folderu i ***długiego dotknięcia*** (*iOS*) folderu, aby zarządzać grupami ulubionych:

- **<Translate android="true" ids="shared_string_rename"/>** — Użyj tej opcji, aby zmienić nazwę wybranego folderu.

- **<Translate android="true" ids="change_default_appearance"/>** — Dostosuj sposób wyświetlania ulubionych punktów w folderze na mapie, zmieniając ich ikony, kolory lub etykiety.

- **<Translate android="true" ids="shared_string_show_on_map"/>** lub **Ukryj na mapie** — Przełącz tę opcję, aby wyświetlić lub ukryć ulubione punkty z folderu na mapie.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** lub **Usuń z znaczników mapy** (*tylko Android*) — Dodaj wszystkie ulubione punkty z folderu do *listy znaczników mapy* lub usuń je w razie potrzeby, aby ułatwić odniesienie.

- **<Translate android="true" ids="shared_string_share"/>** — Udostępnij ulubione punkty w folderze, eksportując je jako plik *Favorites.gpx*, co ułatwia przesyłanie lub tworzenie kopii zapasowych danych.

- **<Translate android="true" ids="shared_string_delete"/>** — Trwale usuń wybrany folder ulubionych i wszystkie znajdujące się w nim punkty.

Więcej szczegółów w artykule [Moje miejsca](../personal/myplaces.md#favorites).


### Zmień wygląd grupy {#change-group-appearance}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorite_change_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_3_ios.png)

</TabItem>

</Tabs>

Ustawienia *Zmień wygląd grupy*:

- **Ikona, kolor, kształt** — Ustaw domyślny styl dla wszystkich ulubionych w grupie.
- **Spójność** — Nowe ulubione dodane do grupy automatycznie dziedziczą domyślny wygląd.
- **Dostosowanie** — Zastąp domyślne ustawienia dla istniejących punktów w folderze, tylko dla nowych ulubionych lub zastosuj do wszystkich.


## Eksport / Import {#export--import}

OsmAnd udostępnia kilka metod [tworzenia kopii zapasowych](./import-export.md) i [przywracania](./import-export.md#import) ulubionych:

- **Lokalizacje kopii zapasowych** — Pamięć lokalna, [OsmAnd Cloud](../personal/osmand-cloud.md) (tylko z subskrypcją [OsmAnd Pro lub OsmAnd Start](../purchases/index.md)) lub aplikacje do przesyłania wiadomości błyskawicznych.

- **Format pliku** — Ulubione są zapisywane jako pliki `.gpx` (favorites.gpx).


### Darmowa kopia zapasowa w chmurze {#free-cloud-backup}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_2_ios.png)

</TabItem>

</Tabs>

[Darmowa kopia zapasowa ulubionych](../personal/osmand-cloud.md#osmand-start) to specjalny plan zakupu, który umożliwia tworzenie kopii zapasowych ulubionych punktów (lokalizacji) dla wersji **Android, iOS** lub **Web** w aplikacji OsmAnd i przywracanie ich z OsmAnd Cloud. Ten plan jest dostępny dla użytkowników [OsmAnd Free lub Maps+](../purchases/index.md).

*Darmowa kopia zapasowa ulubionych* oferuje następujące korzyści:

- **Płatność nie jest wymagana**. Korzystaj z funkcji tworzenia kopii zapasowych bez konieczności zakupu płatnych subskrypcji.
- **Zapisz ulubione punkty**. Regularnie zapisuj swoje ulubione punkty w OsmAnd, aby uniknąć ich utraty w przypadku awarii urządzenia lub usunięcia aplikacji.
- **Przenieś ulubione punkty**. Importuj swoje ulubione punkty na nowe urządzenie za pomocą funkcji *Darmowa kopia zapasowa ulubionych*, jeśli używasz OsmAnd na wielu urządzeniach.


#### Jak utworzyć kopię zapasową {#how-to-create-a-backup}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

Aby korzystać z funkcji *Darmowa kopia zapasowa ustawień*, potrzebujesz konta OsmAnd Cloud. Jeśli masz konto w *OsmAnd Pro* lub aktywne konto w *OsmAnd Cloud*, baner promocyjny nie będzie widoczny.

- *Baner darmowej kopii zapasowej ulubionych*. Dotknij tego banera, aby rozpocząć proces tworzenia kopii zapasowej.
- *Ukończ krok rejestracji*, jeśli nie masz konta OsmAnd Cloud, postępując zgodnie z instrukcjami w [przewodniku rejestracji](../personal/osmand-cloud.md#login).
- *Przejdź do menu Zakupy OsmAnd* (*Menu → Ustawienia → Zakupy*).
- *[Pakiet OsmAnd Start](../personal/osmand-cloud.md#osmand-start)*. Wybierz tę opcję, aby uzyskać dostęp do funkcji Darmowej kopii zapasowej ustawień.
- *Utwórz kopię zapasową* swoich ustawień.


### Wszystkie ulubione {#all-favorites}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites export import ios](@site/static/img/personal/favorites_export_import_3_ios.png)

</TabItem>

</Tabs>

Możesz eksportować i importować swoje ulubione za pomocą specjalnych przycisków na dole ekranu Ulubione. Plik [.gpx](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) może być wysłany do Dropboxa, poczty e-mail, komunikatorów i innych aplikacji zainstalowanych na Twoim urządzeniu, które obsługują tę funkcję.

- Przycisk **Importuj** (*Android*) / **Importuj ulubione** (*iOS*). Umożliwia importowanie ulubionych punktów (*favorites.gpx*) jako punktów trasy z pliku *GPX* (popularny format danych GPS) z pamięci urządzenia.
- Przycisk **Udostępnij** (*Android*) / **Eksportuj ulubione** (*iOS*). Umożliwia eksportowanie (udostępnianie) wszystkich ulubionych jako pliku *favorites.gpx*.


### Grupa ulubionych {#favorite-group}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_1_ios.png) ![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

- Dotknij **Menu z trzema kropkami** (*Android*) lub przycisku **Edytuj** (*ikona ołówka na iOS*) lub **długo dotknij** folderu (*iOS*) wybranego folderu ulubionych.
- Wybierz przycisk **Udostępnij**, aby wysłać plik *Favorites.gpx* do pamięci urządzenia lub udostępnić go za pośrednictwem aplikacji do przesyłania wiadomości.


### Automatyczna kopia zapasowa ulubionych {#automatic-favorites-backup}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *Android → data → net.osmand → files → backup*

![Favorites backup export Android](@site/static/img/personal/favorites_backup_export_andr.png) ![Favorites autobackup android](@site/static/img/personal/favorites_autobackup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *Pliki → Na moim iPhonie → OsmAnd Maps → favourites_backup*

![Favorites autobackup ios](@site/static/img/personal/favorites_autobackup.png)

</TabItem>

</Tabs>

OsmAnd tworzy **plik kopii zapasowej** za każdym razem, gdy ulubione są edytowane.

- **Android**: Kopie zapasowe są przechowywane w *Android → data → net.osmand → files → backup*. Aby uzyskać do nich dostęp, użyj menedżera plików innej firmy.

- **iOS**: Pliki znajdują się w *Pliki → Na moim iPhonie → OsmAnd Maps → favourites_backup*.

**Ręczny eksport kopii zapasowej**

- Przejdź do *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*.
- Eksportuj plik `.osf` do pamięci lokalnej, usług w chmurze lub udostępnij go bezpośrednio.

:::caution
W najnowszych wersjach ***Androida*** dostęp do katalogów systemowych jest ograniczony. Jednak po wyodrębnieniu pliku ulubionych z archiwum nadal możliwe jest przesłanie go do komunikatorów lub usług w chmurze itp.
:::


### Ulubione w pliku GPX {#favorites-in-gpx-file}

Wszystkie informacje o Ulubionym są przechowywane i opisane za pomocą tagów. Podczas tworzenia Ulubionego punktu możesz napisać własny [opis](#favorite-point) lub użyć informacji z danych OSM [punktu zainteresowania (POI)](../map/point-layers-on-map.md#points-of-interest-pois), z których Twój punkt został utworzony. Ulubione punkty, POI i punkty trasy używają tych samych **tagów** do przechowywania informacji i są zapisywane w **formacie pliku GPX**.

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

- [Zarządzaj trasami](../personal/tracks/manage-tracks.md#import--export-track)
- [Historia wyszukiwania](../search/search-history.md#export-and-share)
- [Schematy palet kolorów](../personal/color-palette-schemes.md)

> *Ostatnia aktualizacja: kwiecień 2025*