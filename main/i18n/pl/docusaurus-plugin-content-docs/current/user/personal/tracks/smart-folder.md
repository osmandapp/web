---
source-hash: bb881e5f5e3ae59000cd2ff1cbc2577904cfc5eb14f2e1c143e6366ecb6952f1
sidebar_position: 3
title: Inteligentny Folder (Filtr)
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

Funkcja **Inteligentny Folder** zapewnia potężne narzędzia do organizowania i zarządzania śladami. Jedną z kluczowych funkcji jest możliwość filtrowania plików w *zakładce Ślady* w menu *Moje Miejsca* na podstawie kryteriów takich jak czas trwania, długość lub prędkość.

Ta funkcja umożliwia szybkie znalezienie konkretnych śladów, które spełniają Twoje wymagania. Przefiltrowane wyniki można zapisać jako **Inteligentny Folder**, oferując wygodny dostęp do dynamicznie aktualizowanych kolekcji śladów.


## Filtr wyszukiwania {#search-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> zakładka*

![Moje miejsca ślady](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> zakładka*

![Moje miejsca ślady](@site/static/img/personal/tracks/my_places_tracks_filter_ios.png)

</TabItem>

</Tabs>

***Jak zastosować filtr:***

- Stuknij ikonę *Szukaj*, a następnie stuknij *Filtr* w wierszu [*Sortuj według*](./manage-tracks.md#sort-by).

- **Wybierz wymagane ustawienia filtra**, aby doprecyzować wyszukiwanie śladów.

- Stuknij **Pokaż** w prawym dolnym rogu, aby zobaczyć przefiltrowane wyniki. Liczba pasujących śladów pojawia się w nawiasach.

- **Aby wyczyścić** wszystkie aktywne filtry, stuknij **Resetuj wszystko**.

- **Aby zapisać** bieżący zestaw filtrów jako nowy **Inteligentny Folder**, stuknij ikonę zapisu w prawym górnym rogu ekranu.


### Dostępne filtry {#available-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Moje miejsca ślady](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Moje miejsca ślady](@site/static/img/personal/tracks/my_places_tracks_filter_2_ios.png)

</TabItem>

</Tabs>

- **Nazwa** — Wyszukaj ślady według tytułu. Wprowadź pełną lub częściową nazwę, aby wyświetlić pasujące ślady.
- **Folder** — Wybierz jeden lub więcej folderów, aby filtrować ślady według ich lokalizacji przechowywania.
- **Czas trwania** — Filtruj ślady według zarejestrowanego czasu trwania, ustawiając zakres w godzinach i minutach.
- **Czas w ruchu** — Określ zakres czasu spędzonego w ruchu podczas nagrywania.
- **Długość** — Ustaw określony zakres w kilometrach lub milach, aby znaleźć ślady o określonej długości.
- **Średnia prędkość** — Filtruj ślady według [średniej prędkości](../../widgets/info-widgets.md#average-speed).
- **Grupa danych z czujników.**
    Zastosuj filtry na podstawie danych z zewnętrznych czujników, w tym:
    - Prędkość czujnika, średnia.
    - Prędkość czujnika, maks.
    - Tętno, średnie.
    - Tętno, maks.
    - Kadencja rowerowa, średnia.
    - Kadencja rowerowa, maks.
    - Moc rowerowa, średnia.
    - Moc rowerowa, maks.
    - Temperatura, średnia.
    - Temperatura, maks.
- **Maksymalna prędkość** — Wybierz ślady z określonymi zakresami maksymalnej prędkości.
- **Pod górę** i **Z górki** — Filtruj ślady na podstawie dodatnich lub ujemnych zmian wysokości.
- **Średnia wysokość** i **Maksymalna wysokość** — Znajdź ślady z określonymi danymi średniej lub maksymalnej wysokości.
- **Data utworzenia** — Filtruj ślady utworzone w określonym zakresie dat.
- **Najbliższe miasta** — Wyświetl ślady przechodzące w pobliżu wybranych miast lub miejscowości.
- **Typ aktywności** — Filtruj ślady na podstawie typu [aktywności](../../map/tracks/track-context-menu.md#track-information-activity) zarejestrowanego w pliku GPX (np. jazda na rowerze, wędrówki).
- **Kraj** — Filtruj ślady według kraju lub regionu, w którym zostały zarejestrowane.
- **Kolor** i **Szerokość** — Wybierz ślady według przypisanego koloru lub szerokości linii.
- **Inne** — Dodatkowe filtry dla specjalnych cech:
    - *Widoczne na mapie*. Pokazuje tylko ślady wyświetlane na mapie.
    - *Z punktami trasy*. Wyświetla ślady zawierające określone punkty trasy.


## Inteligentny Folder {#smart-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Moje miejsca funkcja sortowania śladów Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Moje miejsca ślady](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

</TabItem>

</Tabs>

**Inteligentny Folder** to dynamiczna kolekcja śladów automatycznie aktualizowana na podstawie określonych kryteriów filtrowania. Oferuje zaawansowane narzędzia do efektywnego organizowania, wyszukiwania i zarządzania śladami.

***Korzyści z Inteligentnych Folderów:***

1. **Automatyczna organizacja.**
    Automatycznie zawiera ślady, które pasują do predefiniowanych reguł, takich jak data utworzenia lub zakres czasu trwania.
2. **Filtrowanie i wyszukiwanie.**
    Umożliwia szybkie wyszukiwanie w śladach za pomocą zaawansowanych filtrów i słów kluczowych.
3. **Dynamiczne odświeżanie.**
    Automatycznie odświeża zawartość, aby wyświetlić najnowsze ślady pasujące do kryteriów.
4. **Dostosuj reguły.**
    Twórz spersonalizowane kolekcje śladów, definiując niestandardowe reguły filtrowania.


### Jak utworzyć Inteligentny Folder {#how-to-create-smart-folder}

Aby utworzyć **Inteligentny Folder**, wykonaj następujące kroki:

1. Stuknij ikonę ***menu z trzema kropkami*** w zakładce *Ślady* w menu *Moje Miejsca*.

2. Wybierz **Dodaj inteligentny folder** z menu rozwijanego.

3. Skonfiguruj ustawienia:
   - **Nazwij folder**. Wprowadź nazwę, aby zidentyfikować folder.
   - Określ **parametry filtra śladów**. Zastosuj wymagane filtry, korzystając z dostępnych opcji [Filtra](#available-filters).

4. **Zapisz** ustawienia.
    - Stuknij **Pokaż**, aby wyświetlić podgląd śladów.
    - Wybierz przycisk **Zapisz**, aby sfinalizować *Inteligentny Folder*.

Nowo utworzony **Inteligentny Folder** automatycznie zaktualizuje swoją zawartość o ślady, które pasują do wybranych kryteriów.


### Zarządzanie Inteligentnymi Folderami {#managing-smart-folders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Moje miejsca Zarządzanie Inteligentnymi Folderami Android](@site/static/img/personal/tracks/my_places_smart_folder_2-1_andr.png)

![Moje miejsca Zarządzanie Inteligentnymi Folderami Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Moje miejsca Zarządzanie Inteligentnymi Folderami iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

![Moje miejsca Zarządzanie Inteligentnymi Folderami iOS](@site/static/img/personal/tracks/my_places_smart_folder_2_ios.png)

</TabItem>

</Tabs>

**Inteligentny folder** jest wyświetlany z unikalną ikoną na liście folderów w zakładce Ślady. Aby zarządzać folderem, stuknij *menu z trzema kropkami* obok niego (*Android*) i *przytrzymaj* (*iOS*) lub otwórz folder i użyj ikony w prawym górnym rogu.

***Dostępne działania:***

- **Szczegóły** — Wyświetl pełną listę śladów zawartych w folderze.

- **Pokaż wszystkie ślady na mapie** (*tylko Android*) — Wyświetl wszystkie ślady folderu na mapie.
    *UWAGA: Ładowanie wielu śladów może wpłynąć na wydajność.*

- **Edytuj nazwę** (*Android*) / **Zmień nazwę** (*iOS*) — Zmień nazwę folderu, aby ułatwić identyfikację.

- **Odśwież** — Ręcznie zaktualizuj zawartość folderu, aby upewnić się, że zawiera najnowsze ślady.

- **Zmień domyślny wygląd** (*Android*) — Zmienia wygląd wyświetlania wszystkich śladów w folderze.

- **Edytuj filtr** — Modyfikuj ustawienia filtra śladów dla bieżącego Inteligentnego Folderu. Szczegóły znajdziesz w [Filtrze wyszukiwania](#search-filter).

- **Eksportuj** — Eksportuj wszystkie ślady w Inteligentnym Folderze za pomocą funkcji [Import/Eksport](../../personal/import-export.md). Zostaniesz przekierowany do *Menu → Ustawienia → zakładka Akcje*.

- **Usuń folder** — Usuń Inteligentny Folder bez usuwania jego śladów.
    *OSTRZEŻENIE: Ta akcja jest nieodwracalna i wyświetli komunikat potwierdzający.*

- **Przenieś** (*iOS*) — Umożliwia przeniesienie folderu do innego istniejącego folderu lub utworzenie nowego.

- **Wybierz** — Użyj [Trybu wyboru](./manage-tracks.md#selection-mode) dla określonych działań na śladach w folderze.


## Powiązane artykuły {#related-articles}

- [Pokaż ślad na mapie](../../map/tracks/index.md)
- [Analizuj na mapie](../../map/tracks/index.md#analyze-track-on-map)
- [Menu kontekstowe śladu](../../map/tracks/track-context-menu.md)
- [Nawigacja po śladzie](../../navigation/setup/gpx-navigation.md)
- [Nagrywanie podróży](../../plugins/trip-recording.md)

> *Ostatnia aktualizacja: marzec 2025*