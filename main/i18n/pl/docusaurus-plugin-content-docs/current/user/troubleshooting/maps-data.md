---
source-hash: 1f3d617b7cbeec60a46ac2de62365a32fbe7c0b18d256e5efb0c6e968e640f3b
sidebar_position: 4
title:  Mapy i dane
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Mapy {#maps}

### Dlaczego OsmAnd nie oferuje dostępu do Map Google? {#why-does-osmand-not-offer-access-to-google-maps}

OsmAnd jest zaprojektowany do wspierania OpenStreetMap (OSM) i priorytetowo traktuje tę ścieżkę tak bardzo, jak to możliwe. Dodatkowo istnieją ograniczenia licencyjne, które не pozwalają na dystrybucję OsmAnd z danymi Google Maps.

### Mapy ładują się powoli na Androidzie 11, 12 (karta SD) {#maps-slowly-loading-on-android-11-12-sd-card}

Z powodu nowych [zasad dostępu do pamięci wprowadzonych w Androidzie 11 i 12](https://www.androidauthority.com/android-12-privacy-features-1225859/), użytkownicy mogą doświadczać wolniejszego działania podczas uzyskiwania dostępu do map przechowywanych na kartach SD. Zmiany te mogą również powodować ograniczenia widoczności i dostępu do plików w folderach na karcie SD. Więcej dyskusji i informacji technicznych można znaleźć pod następującymi linkami: [dyskusja na Reddit](https://www.reddit.com/r/androiddev/comments/kpn68k/android_11_very_slow_file_access_performance/), [Github #1](https://github.com/osmandapp/OsmAnd/issues/10453), [Github #2](https://github.com/osmandapp/OsmAnd/issues/12046), [Github #3](https://github.com/osmandapp/OsmAnd/issues/13943).

W tej chwili dostępne są następujące rozwiązania:

#### 1. Przenieś folder danych OsmAnd do „Wewnętrznej pamięci aplikacji” {#1-migrate-the-osmand-data-storage-folder-to-internal-app-memory}

- Możesz zmienić folder zapisu danych, wybierając opcję ***Wewnętrzna pamięć aplikacji*** w *Menu → Ustawienia → Ustawienia OsmAnd → Folder zapisu danych*.

- Należy jednak pamiętać, że pamięć wewnętrzna jest często ograniczona. Jako obejście problemu można przenieść ważne pliki do pamięci wewnętrznej, pozostawiając rzadko używane mapy na karcie SD. W razie potrzeby użyj menedżera plików, aby ręcznie przenieść te pliki.

Zespół programistów aktywnie poszukuje bardziej wydajnych rozwiązań w celu poprawy wydajności kart SD w ramach nowych zasad dotyczących pamięci masowej w systemie Android.

#### 2. Użyj folderu „Pobrane” na karcie SD {#2-use-the-sd-cards-download-folder}

Możesz spróbować rozwiązać problem powolnego ładowania map, określając folder **Pobrane** na karcie SD jako miejsce przechowywania danych OsmAnd w *Menu → Ustawienia → Ustawienia OsmAnd → Folder zapisu danych → Ręcznie określony*. Możliwe są następujące ścieżki:

- ***/storage/XXXX-XXXX/Download/osmand***  
   Ta ścieżka może powodować błędy podczas uzyskiwania dostępu do wielu plików. Na przykład, możesz być w stanie pobrać mapę przeglądową świata, ale inne regiony mogą się nie pojawiać.

- ***/storage/XXXX-XXXX/Download***  
   Ta ścieżka powinna działać konsekwentnie przy pobieraniu map i innych danych. Należy jednak pamiętać, że OsmAnd nie rozpozna plików zapisanych w tym folderze przez inne aplikacje lub programy (np. SasPlanet). Więcej szczegółów można znaleźć w [tym przewodniku](../../technical/map-creation/create-offline-maps-yourself.md).

"XXXX-XXXX" reprezentuje unikalny numer identyfikacyjny karty SD, który czasami można znaleźć w ścieżce folderu w opcjach *Pamięć zewnętrzna 2* lub zlokalizować za pomocą innych metod. Więcej badań i szczegółów na temat tego rozwiązania jest dostępnych [tutaj](https://github.com/osmandapp/OsmAnd/issues/13254#issuecomment-984467744).

#### 3. Opcja przechowywania „Multimedia” {#3-media-storage-option}

Jeśli poprzednie rozwiązania nie działają lub wydają się ograniczone, można spróbować użyć opcji przechowywania „Multimedia”, aby rozwiązać problemy z powolnym ładowaniem map lub dostępem do pamięci. Metoda ta pozwala na wybranie folderu, który jest dostępny dla OsmAnd i innych aplikacji, co jest szczególnie przydatne w przypadku pamięci zewnętrznej lub wymiennej.

### Wybór „ogólnie dostępnego” folderu zapisu danych OsmAnd przy użyciu pamięci „Multimedia” {#picking-a-generally-accessible-osmand-data-storage-folder-using-the-media-storage}

Android stał się bardziej rygorystyczny w kwestii uprawnień do przechowywania danych, często ograniczając dostęp do folderów specyficznych dla aplikacji, zwłaszcza w przypadku nowych instalacji lub aktualizacji systemu. Domyślna pamięć masowa OsmAnd może być ograniczona, co czyni ją niewidoczną dla innych aplikacji, a nawet menedżerów plików. Wielu użytkowników chce przechowywać mapy i dane w dostępnej pamięci zewnętrznej w celu tworzenia kopii zapasowych, synchronizacji lub ręcznego zarządzania plikami.

Jednak OsmAnd nie ma uprawnienia *Dostęp do wszystkich plików* (z powodu ograniczeń Google), co ogranicza wybór folderów. Jednym z obejść jest użycie folderu pamięci „Multimedia”, do którego Android zazwyczaj przyznaje szerszy dostęp do odczytu/zapisu. Aby to zrobić:

- Przejdź do *Ustawienia OsmAnd → Ustawienia OsmAnd → Folder zapisu danych* i przejrzyj dostępne obszary pamięci. Użyj wskaźnika wolnego miejsca, aby zidentyfikować docelową pamięć, często oznaczoną jako *Pamięć zewnętrzna 2*.
- Zanotuj bieżącą ścieżkę folderu, która może wyglądać następująco: */storage/xxxx-xxxx/Android/data/net.osmand.plus/files*.
- Przełącz się na opcję *Ręcznie określony* i zmodyfikuj ścieżkę do folderu dostępnego dla multimediów. W wielu systemach zmiana */Android/data/* na */media/* (np. ***/storage/xxxx-xxxx/media***) działa. Niektóre systemy mogą wymagać innych modyfikacji ścieżki.

Prawidłowa ścieżka nie spowoduje wyświetlenia przez OsmAnd żadnych błędów uprawnień do zapisu. Przed wprowadzeniem tych zmian upewnij się, że OsmAnd ma odpowiednie uprawnienia do przechowywania, w tym uprawnienia do przechowywania „Multimediów”, w ustawieniach **Aplikacje** systemu Android. W nowszych wersjach Androida uprawnienia te mogą znajdować się w menu zaawansowanym lub ukrytym.

### Usuwanie danych map po aktualizacji aplikacji (jeśli wybrano „Pamięć dla wielu użytkowników 1”) {#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected}

W wersji OsmAnd na Androida wybranie *Pamięci dla wielu użytkowników 1* jako lokalizacji przechowywania może prowadzić do usunięcia wszystkich [map lokalnych](../personal/maps-resources.md#local) przy każdej automatycznej aktualizacji aplikacji, na przykład z wersji 4.1.9 do 4.1.10, 4.1.11 lub nowszej (**Android 11, 12**). Ten problem jest udokumentowany na [Github](https://github.com/osmandapp/OsmAnd/issues/13404).

Aby uniknąć utraty danych map podczas aktualizacji, rozważ następujące rozwiązania:

1. *Utwórz kopię zapasową plików*. Przed aktualizacją OsmAnd utwórz [kopię zapasową](../personal/import-export.md) map przechowywanych w *..Android/obb/net.osmand*. Po aktualizacji przywróć pliki przed uruchomieniem zaktualizowanej aplikacji OsmAnd.

2. *Zmień ścieżkę przechowywania*. Przenieś folder OsmAnd do lokalizacji, w której mogą zapisywać wszystkie aplikacje (np. serwer FTP Wi-Fi, X-plore lub za pomocą kabla USB do komputera). Zmień ścieżkę folderu z:
   - /storage/emulated/0/Android/**obb**/net.osmand
   na
   - /storage/emulated/0/Android/**media**/net.osmand.


### Brak renderowania map na urządzeniach Google Pixel {#no-maps-rendering-for-google-pixel-devices}

W wersjach OsmAnd 4.2 na Androida [renderowanie mapy może się nie powieść](https://github.com/osmandapp/OsmAnd/issues/15045) na urządzeniach Google Pixel, pozostawiając użytkownikom pusty biały ekran zamiast mapy.

Aby rozwiązać ten problem, przełącz się na renderowanie OpenGL:

- Przejdź do *Menu OsmAnd → Ustawienia → Ustawienia OsmAnd → Silnik renderowania map → Wersja 2 (OpenGL)*.
- Uruchom ponownie OsmAnd, aby zastosować zmiany.


### Rozwiązywanie problemu powolnego renderowania map w OsmAnd {#resolving-slow-map-rendering-in-osmand}

<!--
Other header variants:

- Optimizing OsmAnd performance for offline maps
- Improving map redrawing speed in OsmAnd
-->

Aby rozwiązać problem powolnego renderowania map, zwłaszcza podczas korzystania z wektorowych map offline, należy podjąć następujące kroki:

1. **Wyłącz niepotrzebne funkcje mapy.** Wyłącz relief 3D, linie konturowe, cieniowanie wzgórz i stoki, które mogą znacznie zwiększyć moc obliczeniową potrzebną do renderowania map. Można to zrobić w *Menu → Konfiguruj mapę*.

2. **Uprość szczegóły mapy.** Ukryj mniej istotne elementy, takie jak granice, POI, notatki OSM, warstwy pogodowe, dodatkowe szczegóły (*Menu → Konfiguruj mapę → Renderowanie mapy*), aby usprawnić wyświetlanie mapy i poprawić szybkość.

3. **Ogranicz liczbę wyświetlanych POI.** Wyświetlaj tylko główne POI lub ogranicz kategorie wyświetlane podczas nawigacji, co może pomóc przyspieszyć renderowanie mapy. Dostęp do tych ustawień można uzyskać w *Menu → Nawigacja → Ustawienia*.

4. **Dostosuj lupę mapy.** Ustawienie lupy mapy może być kluczowym czynnikiem spowalniającym mapę. Ustaw lupę na 100%, naciskając długo przycisk **„+”** lub **„-”** na ekranie mapy, aby zoptymalizować wyświetlanie.

5. **Wyłącz automatyczne powiększanie.** Automatyczne powiększanie może powodować częste przerysowywanie mapy podczas nawigacji, powodując opóźnienia. Wyłącz automatyczne powiększanie w *Menu → Ustawienia → Profil → Ustawienia nawigacji → [Mapa podczas nawigacji](../navigation/guidance/map-during-navigation.md)*.

6. **Używaj tylko map offline.** Mapy online, zwłaszcza gdy nie są pobrane z wyprzedzeniem, mogą spowolnić ładowanie mapy. Przełącz się na używanie tylko map offline, aby uzyskać płynniejszą wydajność.

Zmiany te powinny skrócić czas potrzebny na renderowanie map, zwłaszcza podczas nawigacji. Aby uzyskać bardziej szczegółowe opcje konfiguracji, zapoznaj się z [Przewodnikiem po ustawieniach mapy](https://osmand.net/docs/user/map/interact-with-map.md#settings).


## Linie konturowe {#contour-lines}

### Czy istnieje sposób na wyświetlanie linii konturowych w stopach zamiast w metrach? {#is-there-a-way-to-display-contour-lines-in-feet-instead-of-meters}

Tak, linie konturowe mogą być wyświetlane w stopach zamiast w metrach. Przed pobraniem danych linii konturowych wybierz stopy lub metry: [przeczytaj więcej na ten temat tutaj](../../user/plugins/topography.md#contour-lines-meters-or-feet).

### Linie konturowe, dane wysokościowe lub relief 3D nie są wyświetlane {#contour-lines-elevation-data-or-3d-relief-are-not-displayed}

- Sprawdź, czy dane dla właściwego regionu zostały pobrane. Przejdź do ***Menu → Mapy i zasoby → Pobrane → Twój region***. [Jak pobierać mapy](../start-with/first-steps.md#how-to-download-maps).
- Sprawdź, czy [wtyczka](../plugins/topography.md#required-setup-parameters) jest włączona i widoczna w ***Menu → Wtyczki → Topografia***.
- Sprawdź, czy elementy w sekcji Topografia są włączone w ***Menu → Konfiguruj mapę → Topografia → Linie konturowe / Teren / Relief 3D***.
- Sprawdź swoje zakupy: [Android](../purchases/android.md#free-and-paid-features) / [iOS](../purchases/ios.md#free-and-paid-features).
- Zaktualizuj aplikację do najnowszej wersji.
- Usuń i pobierz ponownie wymagane mapy, aby upewnić się, że nie ma uszkodzonych plików.
- Uruchom ponownie OsmAnd, aby odświeżyć ustawienia i dane.


## Wyszukiwanie {#search}

### Wyszukiwanie strukturalne adresu (miasto *→* ulica *→* dom) nie znajduje domu {#structured-city--street--house-address-search-doesnt-find-the-house}

Jeśli próbujesz wyszukać lokalizację przy użyciu struktury *Miasto → Ulica → Numer domu* i nie otrzymujesz żadnych wyników, rozważ następujące wskazówki i potencjalne przyczyny:

> **Wskazówka**: Spróbuj wyszukiwania pełnotekstowego bez określania miasta, ponieważ adres może być przypisany do innego miasta.

**Potencjalne problemy:**

- **Brak domu**. Dom może nie być uwzględniony w OpenStreetMap lub może być obecny, ale bez przypisanych numerów. Możesz to zweryfikować na przykładzie [tutaj](https://www.openstreetmap.org/#map=19/33.91937/-118.24357).

- **Nieprawidłowa nazwa ulicy**. Nazwa ulicy powiązana z domem może być nieprawidłowa w OpenStreetMap. Sprawdź tag `addr:street`, aby upewnić się, że nazwa ulicy dokładnie odpowiada tej w informacjach o tagowaniu ulicy.

- **Problem z Nominatim**. Dom może być obecny w OpenStreetMap, ale nie znaleziony przez Nominatim (wyszukiwarkę używaną przez OpenStreetMap). Możesz dowiedzieć się więcej o tym, jak rozwiązywać problemy związane z adresami [tutaj](https://wiki.openstreetmap.org/wiki/Addresses).

- **Możliwy problem w OsmAnd**. Jeśli dom jest obecny w Nominatim, ale nadal nie jest znajdowany w OsmAnd, problem może być specyficzny dla OsmAnd. Możesz przyczynić się do rozwiązania tego problemu, badając go dalej. Więcej szczegółów można znaleźć w tym [artykule technicznym](../../technical/algorithms/trace-address-search-issues.md).


## Ślady i punkty {#tracks-and-points}

### Jak oznaczać różne miejsca na mapie {#how-to-mark-different-places-on-the-map}

Możesz zostawiać notatki i oznaczać lokalizacje na mapie w różnych formach, z których każda służy innym celom:

- *[Ulubione](../personal/favorites.md)*. Są to stałe punkty na mapie, do których można dodawać opisy. Aby utworzyć Ulubione, wykonaj *długie dotknięcie → dotknij Dodaj*. Ulubione są świetne do oznaczania miejsc, które często odwiedzasz lub chcesz zapisać na przyszłość.

- *[Znaczniki](../personal/markers.md)*. Znaczniki to tymczasowe punkty, często używane do nawigacji lub planowania. Mogą pokazywać odległość od bieżącej lokalizacji lub innego punktu i można je szybko usunąć, gdy nie są już potrzebne. Aby dodać znacznik, wykonaj *długie dotknięcie → dotknij Znacznik*.

- *[Punkty trasy](../map/tracks/index.md#types-of-tracks)*. Punkty trasy są umieszczane wzdłuż tworzonych tras, pomagając oznaczyć określone przystanki lub lokalizacje na trasie. Do tych punktów można również dodawać opisy. Aby dodać punkt trasy, wykonaj *długie dotknięcie na mapie → Wskazówki → dodaj jako punkt pośredni*.

- *[Notatki audio/wideo](../plugins/audio-video-notes.md)*. Notatki te pozwalają na dołączanie plików audio, wideo lub zdjęć do określonych lokalizacji na mapie. Aby włączyć, aktywuj wtyczkę Notatki audio/wideo w *Menu OsmAnd → Wtyczki*. Aby dodać notatkę, wykonaj *długie dotknięcie → Akcje → wybierz wymagany plik do dołączenia*.

- *[Notatki OSM](../plugins/osm-editing.md#create--modify-osm-note)*. Są to raporty, które można tworzyć w celu podkreślenia błędów lub brakujących informacji w OpenStreetMap. Włącz wtyczkę Edycja OSM w *Menu OsmAnd → Wtyczki*. Aby dodać notatkę OSM, wykonaj *długie dotknięcie → Akcje → Dodaj notatkę OSM*.

- *[POI (Użyteczne miejsca)](../map/point-layers-on-map.md#points-of-interest-pois)*. Są to predefiniowane punkty ze źródła danych OpenStreetMap, takie jak restauracje, parki czy zabytki. Możesz wyświetlić POI, włączając nakładkę POI w menu *Konfiguruj mapę* lub wybierając kategorię.

- *[Wyszukiwanie](../search/index.md)*. Możesz również użyć funkcji wyszukiwania, aby znaleźć i oznaczyć miejsca na mapie.