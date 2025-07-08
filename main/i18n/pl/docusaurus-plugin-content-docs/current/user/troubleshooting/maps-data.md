---
source-hash: 5be228574247e03992e3e0ddd030d4377aa5bc7c791ba46b7915c2586ebae9b4
sidebar_position: 4
title: Mapy i dane
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

OsmAnd jest zaprojektowany do obsługi OpenStreetMap (OSM) i priorytetowo traktuje tę ścieżkę w jak największym stopniu. Dodatkowo istnieją ograniczenia licencyjne, które nie pozwalają na dystrybucję OsmAnd z danymi Map Google.

### Mapy wolno ładują się na Androidzie 11, 12 (karta SD) {#maps-slowly-loading-on-android-11-12-sd-card}

Ze względu na nowe [zasady dostępu do pamięci wprowadzone w Androidzie 11 i 12](https://www.androidauthority.com/android-12-privacy-features-1225859/), użytkownicy mogą doświadczyć wolniejszego działania podczas uzyskiwania dostępu do map przechowywanych na kartach SD. Zmiany te mogą również powodować ograniczenia widoczności i dostępu do plików w folderach kart SD. Więcej dyskusji i technicznych spostrzeżeń można znaleźć pod następującymi linkami: [Dyskusja na Reddit](https://www.reddit.com/r/androiddev/comments/kpn68k/android_11_very_slow_file_access_performance/), [Github #1](https://github.com/osmandapp/OsmAnd/issues/10453), [Github #2](https://github.com/osmandapp/OsmAnd/issues/12046), [Github #3](https://github.com/osmandapp/OsmAnd/issues/13943).

W tej chwili dostępne są następujące rozwiązania:

#### 1. Przenieś folder przechowywania danych OsmAnd do „Wewnętrznej pamięci aplikacji” {#1-migrate-the-osmand-data-storage-folder-to-internal-app-memory}

- Możesz zmienić folder przechowywania, wybierając opcję ***Wewnętrzna pamięć aplikacji*** w *Menu → Ustawienia → Ustawienia OsmAnd → Folder przechowywania danych*.

- Pamiętaj jednak, że pamięć wewnętrzna jest często ograniczona. Jako obejście, możesz przenieść ważne pliki do pamięci wewnętrznej, jednocześnie trzymając rzadko używane mapy na karcie SD. Użyj menedżera plików, aby ręcznie przenieść te pliki, gdy będzie to konieczne.

Zespół deweloperski aktywnie poszukuje bardziej efektywnych rozwiązań w celu poprawy wydajności kart SD w ramach nowych zasad przechowywania danych Androida.

#### 2. Użyj folderu „Pobrane” na karcie SD {#2-use-the-sd-cards-download-folder}

Możesz spróbować rozwiązać problem wolnego ładowania map, określając folder **Pobrane** na karcie SD dla przechowywania OsmAnd w *Menu → Ustawienia → Ustawienia OsmAnd → Folder przechowywania danych → Ręcznie określony*. Możliwe są następujące ścieżki:

- ***/storage/XXXX-XXXX/Download/osmand***  
   Ta ścieżka może powodować błędy podczas uzyskiwania dostępu do wielu plików. Na przykład, możesz być w stanie pobrać mapę Przegląd Świata, ale inne regiony mogą się nie pojawić.

- ***/storage/XXXX-XXXX/Download***  
   Ta ścieżka powinna działać konsekwentnie dla pobierania map i innych danych. Należy jednak pamiętać, że OsmAnd nie rozpozna plików zapisanych w tym folderze przez inne aplikacje lub programy (np. SasPlanet). Więcej szczegółów można znaleźć w [tym przewodniku](../../technical/map-creation/create-offline-maps-yourself.md).

"XXXX-XXXX" reprezentuje unikalny numer identyfikacyjny Twojej karty SD, który czasami można znaleźć w ścieżce folderu w opcjach *Pamięć zewnętrzna 2* lub zlokalizować za pomocą innych metod. Więcej badań i szczegółów na temat tego rozwiązania jest dostępnych [tutaj](https://github.com/osmandapp/OsmAnd/issues/13254#issuecomment-984467744).

#### 3. Opcja przechowywania „Media” {#3-media-storage-option}

Jeśli poprzednie rozwiązania nie działają lub wydają się ograniczone, możesz spróbować użyć opcji przechowywania „Media”, aby rozwiązać problemy z wolnym ładowaniem map lub dostępem do pamięci. Ta metoda pozwala na wybranie folderu, który jest dostępny dla OsmAnd i innych aplikacji, szczególnie przydatne dla pamięci zewnętrznej lub wymiennej.

### Wybór „Ogólnie dostępnego” folderu przechowywania danych OsmAnd za pomocą pamięci „Media” {#picking-a-generally-accessible-osmand-data-storage-folder-using-the-media-storage}

Android stał się bardziej restrykcyjny w kwestii uprawnień do pamięci, często ograniczając dostęp do folderów specyficznych dla aplikacji, zwłaszcza w przypadku nowych instalacji lub aktualizacji systemu. Domyślne przechowywanie danych OsmAnd może być ograniczone, co sprawia, że jest ono niewidoczne dla innych aplikacji, a nawet menedżerów plików. Wielu użytkowników chce przechowywać mapy i dane w dostępnej pamięci zewnętrznej w celu tworzenia kopii zapasowych, synchronizacji lub ręcznego zarządzania plikami.

Jednak OsmAnd nie ma uprawnień *Dostęp do wszystkich plików* (ze względu na ograniczenia Google), co ogranicza wybór folderów. Jednym z obejść jest użycie folderu przechowywania „Media”, któremu Android zazwyczaj przyznaje szerszy dostęp do odczytu/zapisu. Aby to zrobić:

- Przejdź do *Ustawień OsmAnd → Ustawienia OsmAnd → Folder przechowywania danych* i przejrzyj dostępne obszary przechowywania. Użyj wskaźnika wolnego miejsca, aby zidentyfikować docelową pamięć, często oznaczoną jako *Pamięć zewnętrzna 2*.
- Zanotuj bieżącą ścieżkę folderu, która może wyglądać tak: */storage/xxxx-xxxx/Android/data/net.osmand.plus/files*.
- Przełącz na opcję *Ręcznie określony* i zmodyfikuj ścieżkę do folderu dostępnego dla mediów. Na wielu systemach działa zmiana */Android/data/* na */media/* (np. ***/storage/xxxx-xxxx/media***). Niektóre systemy mogą wymagać innych modyfikacji ścieżek.

Poprawna ścieżka nie spowoduje wyświetlenia przez OsmAnd żadnych błędów uprawnień do zapisu. Przed wprowadzeniem tych zmian upewnij się, że OsmAnd ma odpowiednie uprawnienia do pamięci, w tym uprawnienia do pamięci „Media”, w ustawieniach **Aplikacji** Androida. W nowszych wersjach Androida te uprawnienia mogą znajdować się w zaawansowanych lub ukrytych menu.

### Usuwanie danych map po aktualizacji aplikacji (jeśli wybrano „Pamięć wieloużytkownikową 1”) {#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected}

W wersji OsmAnd na Androida, wybranie *Pamięci wieloużytkownikowej 1* jako lokalizacji przechowywania może prowadzić do usunięcia wszystkich [lokalnych map](../personal/maps-resources.md#local-maps) za każdym razem, gdy aplikacja jest automatycznie aktualizowana, np. z wersji 4.1.9 do 4.1.10, 4.1.11 lub nowszych (**Android 11, 12**). Ten problem jest udokumentowany na [Githubie](https://github.com/osmandapp/OsmAnd/issues/13404).

Aby uniknąć utraty danych map podczas aktualizacji, rozważ następujące rozwiązania:

1. *Tworzenie kopii zapasowych plików*. Przed aktualizacją OsmAnd wykonaj [kopię zapasową](../personal/import-export.md) map przechowywanych w *..Android/obb/net.osmand*. Po aktualizacji przywróć pliki przed uruchomieniem zaktualizowanej aplikacji OsmAnd.

2. *Zmień ścieżkę przechowywania*. Przenieś folder OsmAnd do lokalizacji, do której wszystkie aplikacje mogą zapisywać (np. serwer Wi-Fi FTP, X-plore lub za pomocą kabla USB do komputera). Zmień ścieżkę folderu z:
   - /storage/emulated/0/Android/**obb**/net.osmand
   na
   - /storage/emulated/0/Android/**media**/net.osmand.


### Brak renderowania map dla urządzeń Google Pixel {#no-maps-rendering-for-google-pixel-devices}

W przypadku wersji OsmAnd 4.2 na Androida, [renderowanie map może się nie powieść](https://github.com/osmandapp/OsmAnd/issues/15045) na urządzeniach Google Pixel, pozostawiając użytkownikom pusty biały ekran zamiast mapy.

Aby rozwiązać ten problem, przełącz się na renderowanie OpenGL:

- Przejdź do *Menu OsmAnd → Ustawienia → Ustawienia OsmAnd → Silnik renderowania map → Wersja 2 (OpenGL)*.
- Uruchom ponownie OsmAnd, aby zastosować zmiany.


### Rozwiązywanie problemu wolnego renderowania map w OsmAnd {#resolving-slow-map-rendering-in-osmand}

<!--
Other header variants:

- Optimizing OsmAnd performance for offline maps
- Improving map redrawing speed in OsmAnd
-->

Aby rozwiązać problem wolnego renderowania map, zwłaszcza podczas korzystania z map wektorowych offline, należy wykonać następujące kroki:

1. **Wyłącz niepotrzebne funkcje mapy.** Wyłącz rzeźbę 3D, warstwice, cieniowanie wzgórz i stoki, co może znacznie zwiększyć moc obliczeniową potrzebną do renderowania map. Możesz to zrobić w *Menu → Konfiguruj mapę*.

2. **Uprość szczegóły mapy.** Ukryj mniej krytyczne elementy, takie jak granice, POI, notatki OSM, warstwy pogodowe, dodatkowe szczegóły (*Menu → Konfiguruj mapę → Renderowanie mapy*), aby usprawnić wyświetlanie mapy i poprawić szybkość.

3. **Ogranicz liczbę wyświetlanych POI.** Wyświetlaj tylko główne POI lub ogranicz kategorie wyświetlane podczas nawigacji, co może pomóc przyspieszyć renderowanie mapy. Dostęp do tych ustawień uzyskasz w *Menu → Nawigacja → Ustawienia*.

4. **Dostosuj powiększenie mapy.** Ustawienie powiększenia mapy może być kluczowym czynnikiem spowalniającym mapę. Ustaw powiększenie na 100%, długo naciskając przycisk **„+”** lub **„-”** na ekranie mapy, aby zoptymalizować wyświetlanie.

5. **Wyłącz automatyczne powiększanie.** Automatyczne powiększanie może powodować częste ponowne rysowanie mapy podczas nawigacji, co powoduje opóźnienia. Wyłącz automatyczne powiększanie w *Menu → Ustawienia → Profil → Ustawienia nawigacji → [Mapa podczas nawigacji](../navigation/guidance/map-during-navigation.md)*.

6. **Używaj tylko map offline.** Mapy online, zwłaszcza jeśli nie zostały wcześniej pobrane, mogą spowalniać ładowanie mapy. Przełącz się na używanie tylko map offline, aby uzyskać płynniejszą wydajność.

Te zmiany powinny skrócić czas potrzebny na renderowanie map, zwłaszcza podczas nawigacji. Aby uzyskać bardziej szczegółowe opcje konfiguracji, zapoznaj się z [Przewodnikiem po ustawieniach mapy](https://osmand.net/docs/user/map/interact-with-map#settings).


## Warstwice {#contour-lines}

### Czy istnieje sposób na wyświetlanie warstwic w stopach zamiast w metrach? {#is-there-a-way-to-display-contour-lines-in-feet-instead-of-meters}

Tak, warstwice mogą być wyświetlane w stopach zamiast w metrach. Przed pobraniem danych warstwic, wybierz między stopami a metrami: [przeczytaj więcej na ten temat tutaj](../../user/plugins/topography.md#contour-lines-meters-or-feet).

### Warstwice, dane wysokościowe lub rzeźba 3D nie są wyświetlane {#contour-lines-elevation-data-or-3d-relief-are-not-displayed}

- Sprawdź, czy dane dla właściwego regionu zostały pobrane. Przejdź do ***Menu → Mapy i zasoby → Pobrane → Twój region***. [Jak pobrać mapy](../start-with/first-steps.md#how-to-download-maps).
- Sprawdź, czy [wtyczka](../plugins/topography.md#required-setup-parameters) jest włączona i widoczna w ***Menu → Wtyczki → Topografia***.
- Sprawdź, czy elementy w sekcji Topografia są włączone w ***Menu → Konfiguruj mapę → Topografia → Warstwice / Teren / Rzeźba 3D***.
- Sprawdź swoje zakupy: [Android](../purchases/android.md#free-and-paid-features) / [iOS](../purchases/ios.md#free-and-paid-features).
- Zaktualizuj aplikację do najnowszej wersji.
- Usuń i pobierz ponownie wymagane mapy, aby upewnić się, że nie ma uszkodzonych plików.
- Uruchom ponownie OsmAnd, aby odświeżyć ustawienia i dane.


## Szukaj {#search}

### Wyszukiwanie adresów strukturalnych (miasto *→* ulica *→* dom) nie znajduje domu {#structured-city--street--house-address-search-doesnt-find-the-house}

Jeśli próbujesz wyszukać lokalizację, używając struktury *Miasto → Ulica → Numer domu*, a nie ma żadnych wyników, rozważ następujące wskazówki i potencjalne przyczyny:

> **Wskazówka**: Spróbuj wyszukiwania pełnotekstowego bez określania miasta, ponieważ adres może być wymieniony pod innym miastem.

**Potencjalne problemy:**

- **Brak domu**. Dom może nie być wymieniony na OpenStreetMap, lub może być obecny, ale bez przypisanych numerów. Możesz to zweryfikować na przykładzie [tutaj](https://www.openstreetmap.org/#map=19/33.91937/-118.24357).

- **Nieprawidłowa nazwa ulicy**. Nazwa ulicy związana z domem może być nieprawidłowa w OpenStreetMap. Sprawdź tag `addr:street`, aby upewnić się, że nazwa ulicy dokładnie odpowiada tej w informacjach o tagowaniu ulicy.

- **Problem z Nominatim**. Dom może być obecny w OpenStreetMap, ale nie znaleziony za pośrednictwem Nominatim (silnika wyszukiwania używanego przez OpenStreetMap). Możesz dowiedzieć się więcej o tym, jak naprawić problemy związane z adresami [tutaj](https://wiki.openstreetmap.org/wiki/Addresses).

- **Możliwy problem w OsmAnd**. Jeśli dom jest obecny w Nominatim, ale nadal nie znaleziony w OsmAnd, problem może być specyficzny dla OsmAnd. Możesz przyczynić się do rozwiązania tego problemu, badając go dalej. Więcej szczegółów można znaleźć w tym [artykule technicznym](../../technical/algorithms/trace-address-search-issues.md).


## Ślady i punkty {#tracks-and-points}

### Jak zaznaczyć różne miejsca na mapie {#how-to-mark-different-places-on-the-map}

Możesz zostawiać notatki i zaznaczać lokalizacje na mapie w różnych formach, z których każda służy innym celom:

- *[Ulubione](../personal/favorites.md)*. Są to stałe punkty na mapie, do których możesz dodawać opisy. Aby utworzyć Ulubione, wykonaj *długie dotknięcie → dotknij Dodaj*. Ulubione są świetne do oznaczania miejsc, które często odwiedzasz lub chcesz zapisać na przyszłość.

- *[Markery](../personal/markers.md)*. Markery to tymczasowe punkty, często używane do nawigacji lub planowania. Mogą pokazywać odległość od Twojej bieżącej lokalizacji lub innego punktu i mogą być szybko usunięte, gdy nie są już potrzebne. Aby dodać Marker, wykonaj *długie dotknięcie → dotknij Marker*.

- *[Punkty trasy](../map/tracks/index.md#types-of-tracks)*. Punkty trasy są umieszczane wzdłuż tworzonych tras, pomagając zaznaczyć konkretne przystanki lub lokalizacje wzdłuż podróży. Do tych punktów można również dodawać opisy. Aby dodać punkt trasy, wykonaj *długie dotknięcie na mapie → Wskazówki → dodaj jako punkt pośredni*.

- *[Notatki audio/wideo](../plugins/audio-video-notes.md)*. Te notatki pozwalają na dołączanie plików audio, wideo lub zdjęć do konkretnych lokalizacji na mapie. Aby włączyć, aktywuj wtyczkę Notatki audio/wideo w *Menu OsmAnd → Wtyczki*. Aby dodać, wykonaj *długie dotknięcie → Akcje → wybierz wymagany plik do załączenia*.

- *[Notatki OSM](../plugins/osm-editing.md#create--modify-osm-note)*. Są to raporty, które możesz tworzyć, aby wyróżnić błędy lub brakujące informacje na OpenStreetMap. Włącz wtyczkę edycji OSM w *Menu OsmAnd → Wtyczki*. Aby dodać Notatkę OSM, wykonaj *długie dotknięcie → Akcje → Dodaj notatkę OSM*.

- *[POI (Punkty zainteresowania)](../map/point-layers-on-map.md#points-of-interest-pois)*. Są to predefiniowane punkty z danych OpenStreetMap, takie jak restauracje, parki lub punkty orientacyjne. Możesz wyświetlać POI, włączając nakładkę POI w menu *Konfiguruj mapę* lub wybierając kategorię.

- *[Wyszukiwanie](../search/index.md)*. Możesz również użyć funkcji wyszukiwania, aby znaleźć i zaznaczyć miejsca na mapie.