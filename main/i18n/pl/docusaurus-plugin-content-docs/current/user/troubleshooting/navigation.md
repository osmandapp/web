---
source-hash: 848546295eb67d895bd6bd5a48afe6f2f110a62b992de04aa47e91eee03c9082
sidebar_position: 3
title:  Nawigacja
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Obliczanie trasy {#route-calculation}

### Obliczanie trasy jest powolne {#route-calculation-is-slow}

*Android*. OsmAnd używa dwóch różnych **silników routingu offline**: *silnika opartego na Javie* i *silnika natywnego (C++)*.

- *Silnik oparty na Javie* jest używany w [Trybie awaryjnym](../plugins/development.md#overview), ale jest około 10 razy wolniejszy od silnika natywnego. Ma również ścisłe ograniczenia pamięci, co może prowadzić do błędów takich jak *Not enough memory to compute*. Jeśli napotkasz ten problem, przejdź do *Wtyczki → Rozwój OsmAnd → Ustawienia →* [*Tryb awaryjny*](../plugins/development.md#overview) i upewnij się, że ta opcja jest wyłączona.
- *Silnik natywny (C++)* oferuje lepszą wydajność, ale jego efektywność zależy od pamięci i możliwości procesora Twojego urządzenia. Zazwyczaj routing natywny działa dobrze dla tras poniżej 300 km, a czas obliczania trasy waha się od 15 sekund do 4 minut. Jeśli proces trwa dłużej niż 4 minuty, zaleca się jego zatrzymanie, ponieważ aplikacja może ulec awarii.


### Nieprawidłowe lub uszkodzone trasy {#incorrect-or-broken-routes}

Czasami OsmAnd może wyświetlać nieoczekiwane wyniki nawigacji. Zamiast podążać za siecią dróg, trasa może pojawić się jako prosta przerywana linia do niepowiązanego punktu lub nawigacja może całkowicie zawieść. Zazwyczaj wskazuje to, że routing do wybranego miejsca nie jest możliwy przy obecnej konfiguracji. Podobne problemy zgłaszali użytkownicy na [Reddit](https://www.reddit.com/r/OsmAnd/comments/1lu45u2/navigation_problems/) i [więcej](https://www.reddit.com/r/OsmAnd/comments/1l9233e/navigation_bug_in_certain_countries/).

**Przyczyny:**

- Nieaktualne lub zduplikowane mapy. Mapy z różnymi datami aktualizacji lub duplikaty mogą zakłócać łączność (zwłaszcza między regionami/graniami).
- Uszkodzone ustawienia profilu. Niestandardowe/modyfikowane profile (np. Rower) mogą powodować niespójne zachowanie.
- Niezgodność silnika routingu: Różne silniki (HH × Java vs HH × C++) mogą obsługiwać te same mapy w inny sposób.

**Rozwiązania:**

1. Zresetuj swój profil.
- Otwórz *Menu* → *Ustawienia* → *Profil aplikacji (Profil nawigacji)*.
- Wybierz *Resetuj do domyślnych*.

2. Usuń i ponownie zainstaluj mapy.
- Otwórz *Menu* → *Mapy i zasoby* → *Lokalne* i usuń wszystkie mapy dla dotkniętych region(ów).
- Następnie przejdź do *Menu* → *Mapy i zasoby* → *Pobrania* i pobierz mapy ponownie.
- Opcjonalnie sprawdź *Menu* → *Mapy i zasoby* → *Aktualizacje*, aby upewnić się, że wszystkie regiony mają tę samą datę aktualizacji.

3. Przełącz silnik routingu.
- Włącz wtyczkę: *Menu* → *Wtyczki* → *Rozwój OsmAnd*.
- Następnie otwórz *Menu* → *Ustawienia* → *Profil aplikacji* → *Ustawienia nawigacji* → *Parametry trasy* → *Rozwój* → *Typ routingu* i przełącz *HH × C++* ↔ *HH × Java* (możesz też wypróbować A* classic lub A* 2-phase).

4. Jako ostateczność.
- Ponownie zainstaluj aplikację i pobierz mapy (pomaga, gdy ukryte konflikty trwają).


### Jak obliczać trasy dłuższe niż 250km? {#how-to-calculate-routes-longer-than-250km}

1. Jeśli aplikacja nie pokazuje trasy po 7-8 minutach obliczeń, rozważ [umieszczenie punktów pośrednich](../navigation/setup/route-navigation.md#route-recalculation) (wybierz np. miejsca na autostradach). 3-4 punkty pośrednie wystarczą do obliczenia nawet 1000 km tras.

2. W przypadku urządzeń z wyższej półki można zwiększyć pamięć do 512 MB lub 1024 MB - [Pamięć przydzielona urządzeniom](../plugins/development.md#memory-settings).

3. W wersji na Androida można utworzyć profil nawigacji z routingiem online lub routingiem firm trzecich (BRouter). Przeczytaj więcej na ten temat [tutaj](../navigation/routing/brouter.md).

### Obliczanie tras o długości 50 km dla pieszych {#calculation-of-50-km-routes-for-pedestrians}

Jeśli używasz profilu **Pieszy** w OsmAnd, aplikacja może ulec awarii podczas obliczania tras powyżej 50 km. Ten problem występuje w szczególności, gdy w ustawieniach nawigacji wybrano [**Standardowy routing A***](../navigation/guidance/navigation-settings.md#development-settings). Do tego problemu może przyczyniać się kilka czynników:

- Długość trasy przekracza 50 km.
- Liczba bezpośrednich punktów na trasie jest większa niż 1 milion.
- Do obliczenia trasy używasz urządzenia mobilnego, co nie jest zalecane dla tras o tej długości. Rozważ użycie wersji internetowej w celu uzyskania lepszej wydajności.

Aby uniknąć awarii w przypadku tras o podobnych odległościach, możesz przełączyć się na inne typy profili, takie jak **Rower**.


## Obliczona trasa nie wydaje się poprawna {#the-calculated-route-does-not-seem-correct}

Aby zdiagnozować problemy z nieprawidłowymi lub nieoptymalnymi trasami, otwórz nowy post w [dyskusjach na Githubie](https://github.com/osmandapp/OsmAnd/discussions) lub [zgłoszenie na Githubie](https://github.com/osmandapp/Osmand/issues) i podaj jak najdokładniej następujące informacje:

- Jakiej wersji OsmAnd używasz i na jakim urządzeniu?
- Czy używasz map offline oferowanych do pobrania w aplikacji OsmAnd, czy map online (kafelkowych / rastrowych)?
- Jeśli używasz map offline, podaj dokładną nazwę pliku mapy, na której występuje problem z routingiem, oraz datę jej wydania.
- Poinformuj nas, czy korzystałeś z routingu offline w aplikacji OsmAnd, czy z jakiegokolwiek dostawcy routingu online, takiego jak YOURS, OpenRouteService lub OSRM.
- Jaki profil routingu jest wybrany w aplikacji OsmAnd (samochód, rower czy pieszy)?
- Podaj jak najdokładniej punkt początkowy i końcowy trasy. Jeśli to możliwe, podaj nazwę miasta i ulicy dla każdego z nich. Pomocny może być również [Permalink](https://wiki.openstreetmap.org/wiki/Permalink) z openstreetmap.org.
- Poinformuj nas o oczekiwanej trasie i o tym, jak wyznacza ją OsmAnd.

## Informacje o drodze {#road-information}

### OsmAnd pokazuje tylko niektóre fotoradary {#osmand-only-shows-some-speed-cams}

Ze względu na dane geograficzne pobrane z projektu OpenStreetMap istnieją obecnie dwie metody integracji fotoradarów z surowymi danymi OSM:

- Punkt (zwany "węzłem" w terminologii OSM) drogi jest oznaczony tagiem "highway=speed_camera", zobacz wiki OSM pod adresem [highway=speed_camera](https://wiki.openstreetmap.org/wiki/Tag%3Ahighway%3Dspeed_camera)
- Grupa elementów danych OSM jest połączona w tak zwaną "relację", która zawiera więcej elementów niż pojedynczy węzeł, aby opisać kierunek objęty przez fotoradar. Zobacz [Relation:enforcement](https://wiki.openstreetmap.org/wiki/Relation:enforcement).

Obecnie OsmAnd może wykorzystywać tylko elementy składające się z pojedynczego węzła. Analiza relacji zostanie dodana w przyszłej wersji.


## Nawigacja głosowa {#voice-navigation}

### Dlaczego powinienem używać głosu TTS zamiast nagranego głosu? {#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice}

Głosy **Text-to-Speech (TTS)** dynamicznie generują komunikaty głosowe, co pozwala im na wymawianie nazw ulic, nazw miejsc i numerów autostrad. W przeciwieństwie do nich, **głosy nagrane** są ograniczone do wcześniej nagranych fraz i nie mogą wymawiać konkretnych nazw ani numerów.

*Zalety TTS w porównaniu z głosami nagranymi:*

- Wymowa nazw ulic i informacji dynamicznych.
- Regularne aktualizacje o nowe funkcje.
- Większa elastyczność nawigacji.

Aby używać TTS w OsmAnd, na urządzeniu musi być zainstalowany **silnik TTS**. Wiele urządzeń ma fabrycznie zainstalowany silnik TTS, ale w razie potrzeby można ręcznie zainstalować dodatkowe. [Lista obsługiwanych silników TTS i języków dla systemu Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

Szczegółowe instrukcje dotyczące konfigurowania i dostosowywania komunikatów głosowych można znaleźć w: [Przewodnik po konfiguracji nawigacji głosowej](../navigation/guidance/voice-navigation.md).

### TTS nie działa poprawnie? Wykonaj te kroki, aby to naprawić {#tts-does-not-function-properly-follow-these-steps-to-fix-it}

Problemy z **Text-to-Speech (TTS)** są zazwyczaj związane z **ustawieniami systemu Android**, a nie z samą aplikacją OsmAnd.  

1. Upewnij się, że silnik TTS jest zainstalowany.

    - Otwórz *Ustawienia urządzenia → Język i wprowadzanie → Opcje zamiany tekstu na mowę*.
    - Sprawdź, czy **silnik TTS** jest zainstalowany (np. Google TTS, Samsung TTS, Pico).
    - Jeśli żaden silnik nie jest zainstalowany, wybierz *“Zainstaluj więcej…”* i pobierz kompatybilny.
    - [Lista obsługiwanych silników TTS i języków.](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/)

2. Sprawdź ustawienia języka TTS.

    - Wybierz język, którego chcesz używać w *Ustawienia Androida → Opcje zamiany tekstu na mowę*.
    - Stuknij *“Posłuchaj przykładu”*, aby sprawdzić, czy silnik TTS działa.
    - Jeśli nic nie słyszysz, zaktualizuj lub ponownie zainstaluj silnik TTS.

3. Dostosuj ustawienia nawigacji głosowej OsmAnd.

    - Otwórz *OsmAnd → Menu → Konfiguruj profil → Ustawienia nawigacji → Komunikaty głosowe*.
    - Wybierz kompatybilny *Język → TTS*.
    - Przetestuj komunikaty głosowe, przechodząc do *Menu → Wtyczki → Włącz Rozwój OsmAnd → Ustawienia → Testuj komunikaty głosowe*.

#### Dodatkowe kroki {#additional-steps}

- *Zaktualizuj Google TTS*. Otwórz Sklep Google Play, wyszukaj **Google Text-to-Speech** i zaktualizuj go.  
- *Symuluj nawigację*. Stuknij *przycisk Nawigacja → Ustawienia → Symuluj nawigację*, aby sprawdzić, czy odtwarzane są wskazówki głosowe.  
- *Zainstaluj ponownie OsmAnd*:  
   - **Utwórz kopię zapasową ustawień:** *Menu → Ustawienia → Eksportuj do pliku*.  
   - Odinstaluj OsmAnd, a następnie zainstaluj go ponownie ze sklepu z aplikacjami.  
   - Przywróć ustawienia: *Menu → Ustawienia → Importuj plik*.

Aby uzyskać dodatkowe informacje dotyczące rozwiązywania problemów, odwiedź:

- [Przewodnik po nawigacji głosowej](../navigation/guidance/voice-navigation.md)  
- [Import/Eksport ustawień](../personal/import-export.md)  


## Inne {#other}

### Nawigacja zatrzymuje się, gdy ekran jest wyłączony {#navigation-stops-while-screen-is-off}

- [Ten sam problem](../troubleshooting/track-recording-issues.md#overview) z nagrywaniem trasy w tle.