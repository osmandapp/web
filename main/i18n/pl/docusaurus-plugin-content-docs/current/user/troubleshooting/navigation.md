---
source-hash: 4279e8b0f36e69d2e860ec2e48cb3a48d0b171f309dc5569b62b8e5d94ae87fa
sidebar_position: 3
title: Nawigacja
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

### Obliczanie trasy jest wolne {#route-calculation-is-slow}

*Android*. OsmAnd używa dwóch różnych **silników routingu offline**: *silnika opartego na Javie* i *silnika natywnego (C++)*.

- *Silnik oparty na Javie* jest używany w [Trybie Bezpiecznym](../plugins/development.md#safe), ale jest około 10 razy wolniejszy niż silnik natywny. Ma również ścisłe ograniczenia pamięci, co może prowadzić do błędów, takich jak *Za mało pamięci do obliczeń*. Jeśli napotkasz ten problem, przejdź do *Wtyczki → Rozwój OsmAnd → Ustawienia →* [*Tryb Bezpieczny*](../plugins/development.md#safe) i upewnij się, że ta opcja jest wyłączona.
- *Natywny silnik (C++)* oferuje lepszą wydajność, ale jego efektywność zależy od pamięci i możliwości procesora urządzenia. Ogólnie rzecz biorąc, routing natywny działa dobrze dla tras poniżej 300 km, z czasami obliczania trasy od 15 sekund do 4 minut. Jeśli proces trwa dłużej niż 4 minuty, zaleca się zatrzymanie, ponieważ aplikacja może się zawiesić.


### Jak obliczyć trasy dłuższe niż 250 km? {#how-to-calculate-routes-longer-than-250km}

1. Jeśli aplikacja nie pokazuje trasy po 7-8 minutach obliczeń, rozważ [umieszczenie punktów pośrednich](../navigation/setup/route-navigation.md#route-recalculation) (wybierz np. miejsca na autostradach). 3-4 punkty pośrednie wystarczą do obliczenia nawet 1000 km tras.

2. W przypadku urządzeń z wyższej półki można zwiększyć pamięć do 512 MB lub 1024 MB - [Pamięć przydzielona urządzeniom](../plugins/development.md#memory-allocated-for-routing).

3. W wersji na Androida można utworzyć profil nawigacyjny z routingiem online lub zewnętrznym (BRouter). Więcej na ten temat można przeczytać [tutaj](../navigation/routing/brouter.md).

### Obliczanie tras o długości 50 km dla pieszych {#calculation-of-50-km-routes-for-pedestrians}

Jeśli używasz profilu **Pieszy** w OsmAnd, aplikacja może się zawiesić podczas obliczania tras o długości ponad 50 km. Ten problem występuje szczególnie, gdy w ustawieniach nawigacji wybrano opcję [**Standardowy Routing A***](../navigation/guidance/navigation-settings.md#development-settings). Na ten problem może wpływać kilka czynników:

- Długość trasy przekracza 50 km.
- Liczba bezpośrednich punktów na trasie jest większa niż 1 milion.
- Do obliczania trasy używasz urządzenia mobilnego, co nie jest zalecane dla tras o tej długości. Rozważ użycie wersji internetowej w celu uzyskania lepszej wydajności.

Aby uniknąć awarii na trasach o podobnych odległościach, możesz przełączyć się na inne typy profili, takie jak **Rower**.


## Obliczona trasa nie wydaje się prawidłowa {#the-calculated-route-does-not-seem-correct}

Aby rozwiązać problemy z błędnymi lub nieoptymalnymi trasami, otwórz nowy post w [dyskusjach Github](https://github.com/osmandapp/OsmAnd/discussions) lub [zgłoszeniu Github](https://github.com/osmandapp/Osmand/issues) i podaj jak najwięcej szczegółowych informacji:

- Jakiej wersji OsmAnd używasz, na jakim urządzeniu?
- Czy używasz map offline oferowanych w aplikacji OsmAnd do pobrania, czy map online (kafelkowych / rastrowych)?
- Jeśli używasz map offline, podaj dokładną nazwę pliku mapy, w którym występuje problem z routingiem, oraz datę jego wydania.
- Powiedz nam, czy używałeś routingu offline w aplikacji OsmAnd, czy jakiegokolwiek dostawcy routingu online, takiego jak YOURS, OpenRouteService lub OSRM.
- Jaki profil routingu jest wybrany w aplikacji OsmAnd (samochód, rower czy pieszy)?
- Podaj jak najdokładniej punkt początkowy i końcowy trasy. Jeśli to możliwe, podaj nazwę miasta i nazwę ulicy dla każdego z nich. Pomocny może być również [Permalink](https://wiki.openstreetmap.org/wiki/Permalink) z openstreetmap.org.
- Powiedz nam, jaki jest Twój oczekiwany routing i jak OsmAnd wyznacza trasę.

## Informacje o drodze {#road-information}

### OsmAnd pokazuje tylko niektóre fotoradary {#osmand-only-shows-some-speed-cams}

Ze względu na geodane pobrane z projektu OpenStreetMap istnieją obecnie dwie metody integracji fotoradarów w surowych danych OSM:

- Punkt (nazywany „węzłem” w terminologii OSM) drogi jest oznaczony tagiem „highway=speed_camera”, zobacz wiki OSM pod adresem [highway=speed_camera](https://wiki.openstreetmap.org/wiki/Tag%3Ahighway%3Dspeed_camera)
- Grupa elementów danych OSM jest połączona w tak zwaną „relację”, która zawiera więcej elementów niż pojedynczy węzeł, aby opisać kierunek objęty fotoradarem. Zobacz [Relation:enforcement](https://wiki.openstreetmap.org/wiki/Relation:enforcement).

Obecnie OsmAnd może korzystać tylko z elementów składających się z pojedynczego węzła. Analiza relacji ma nastąpić w przyszłej wersji.


## Nawigacja głosowa {#voice-navigation}

### Dlaczego powinienem używać głosu TTS zamiast głosu nagranego? {#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice}

Głosy **Text-to-Speech (TTS)** generują dynamicznie komunikaty głosowe, umożliwiając im wymawianie nazw ulic, nazw miejsc i numerów autostrad. Natomiast **głosy nagrane** są ograniczone do wcześniej nagranych fraz i nie mogą wymawiać konkretnych nazw ani numerów.

*Zalety TTS nad głosami nagranymi:*

- Wymawia nazwy ulic i dynamiczne informacje.
- Regularnie aktualizowany o nowe funkcje.
- Oferuje większą elastyczność w nawigacji.

Aby używać TTS w OsmAnd, Twoje urządzenie musi mieć zainstalowany **silnik TTS**. Wiele urządzeń jest dostarczanych z preinstalowanym silnikiem TTS, ale w razie potrzeby można ręcznie zainstalować dodatkowe. [Lista obsługiwanych silników TTS i języków dla Androida](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

Szczegółowe instrukcje dotyczące konfiguracji i dostosowywania komunikatów głosowych można znaleźć w: [Przewodnik konfiguracji nawigacji głosowej](../navigation/guidance/voice-navigation.md).

### TTS nie działa prawidłowo? Wykonaj te kroki, aby to naprawić {#tts-does-not-function-properly-follow-these-steps-to-fix-it}

Problemy z **Text-to-Speech (TTS)** są zazwyczaj związane z **ustawieniami systemu Android**, a nie z samą aplikacją OsmAnd.

1. Upewnij się, że silnik TTS jest zainstalowany.

    - Otwórz *Ustawienia urządzenia → Język i wprowadzanie → Opcje zamiany tekstu na mowę*.
    - Sprawdź, czy zainstalowany jest **silnik TTS** (np. Google TTS, Samsung TTS, Pico).
    - Jeśli nie ma zainstalowanego silnika, wybierz *„Zainstaluj więcej…”* i pobierz zgodny.
    - [Lista obsługiwanych silników TTS i języków.](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/)

2. Zweryfikuj ustawienia języka TTS.

    - Wybierz język, którego chcesz używać w *Ustawieniach Androida → Opcje zamiany tekstu na mowę*.
    - Dotknij *„Posłuchaj przykładu”*, aby sprawdzić, czy silnik TTS działa.
    - Jeśli nic nie słyszysz, zaktualizuj lub ponownie zainstaluj silnik TTS.

3. Dostosuj ustawienia nawigacji głosowej OsmAnd.

    - Otwórz *OsmAnd → Menu → Konfiguruj profil → Ustawienia nawigacji → Komunikaty głosowe*.
    - Wybierz zgodny *Język → TTS*.
    - Przetestuj komunikaty głosowe, przechodząc do *Menu → Wtyczki → Włącz rozwój OsmAnd → Ustawienia → Testuj komunikaty głosowe*.

#### Dodatkowe kroki {#additional-steps}

- *Zaktualizuj Google TTS*. Otwórz Sklep Google Play, wyszukaj **Google Text-to-Speech** i zaktualizuj go.
- *Symuluj nawigację*. Dotknij *przycisk Nawigacja → Ustawienia → Symuluj nawigację*, aby sprawdzić, czy odtwarzane są wskazówki głosowe.
- *Zainstaluj ponownie OsmAnd*:
   - **Utwórz kopię zapasową ustawień:** *Menu → Ustawienia → Eksportuj do pliku*.
   - Odinstaluj OsmAnd, a następnie zainstaluj go ponownie ze sklepu z aplikacjami.
   - Przywróć ustawienia: *Menu → Ustawienia → Importuj plik*.

Aby uzyskać dodatkowe informacje dotyczące rozwiązywania problemów, odwiedź:

- [Przewodnik po nawigacji głosowej](../navigation/guidance/voice-navigation.md)
- [Import/Eksport ustawień](../personal/import-export.md)


## Inne {#other}

### Nawigacja zatrzymuje się, gdy ekran jest wyłączony {#navigation-stops-while-screen-is-off}

- [Ten sam problem](../troubleshooting/track-recording-issues.md#the-system-may-kill-background-apps-to-save-power) z nagrywaniem śladu w tle.