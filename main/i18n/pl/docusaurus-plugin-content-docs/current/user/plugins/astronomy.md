---
source-hash: e740340761094d6b6645a876a3fb4bee04f0d077021e1d3c5e6be972b43094f0
sidebar_position: 3
title: Astronomia
unlisted: true
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

<InfoIncompleteArticle/>

<InfoAndroidOnly/>

:::info
**Astronomia** jest obecnie w wersji **beta**.
:::

## Przegląd {#overview}

Wtyczka Astronomia wyświetla nakładkę nieba gwiazdowego na mapie z gwiazdami, gwiazdozbiorami, Słońcem, Księżycem i planetami. Pozycje i ścieżki Słońca, Księżyca, planet oraz głównych gwiazd są wyświetlane na mapie.

## Wymagane parametry konfiguracji {#required-setup-parameters}
  
Następujące ustawienia są wymagane do wyświetlania nakładki Astronomii:

1. Włącz wtyczkę [**Astronomia**](../plugins/index.md#enable--disable) w sekcji *Wtyczki* w *Menu głównym*
2. Użyj **Menu → Mapa gwiazdowa**, aby otworzyć dedykowany ekran z niebem gwiazdowym, ustawieniami i kontrolami czasu.
3. Wybierz **czas i datę** za pomocą kontrolek na ekranie Mapy gwiazdowej.
4. Dostosuj, co jest wyświetlane na Mapie gwiazdowej, używając [**Konfiguruj widok**](#configure-view) — na przykład, przełącz widoczne obiekty i pomoce renderowania.
5. Dotknij przycisku **Zamknij (X)** u góry ekranu Mapy gwiazdowej, aby wyjść z Mapy gwiazdowej i wrócić do mapy Ziemi.

Wtyczka działa z obiema silnikami renderowania map, ale najlepiej sprawdza się w trybie OpenGL.

## Ekran Mapy gwiazdowej {#star-map-screen}

**Przejdź do:** *Włączona wtyczka → Menu → Mapa gwiazdowa* 

![Ekran mapy gwiazdowej](@site/static/img/plugins/starwatcher/view_new.png)

Dedykowany ekran **Mapy gwiazdowej** pokazuje interaktywną kopułę niebieską z gwiazdami, gwiazdozbiorami, planetami, ścieżkami Słońca i Księżyca. Na dole ekranu możesz uzyskać dostęp do następujących kontrolek: 
- **Wyszukiwanie** — otwiera panel wyszukiwania z polem wejściowym, w którym możesz wpisać nazwę obiektu. Poniżej pola znajduje się lista sugerowanych obiektów w kolejności alfabetycznej. Możesz przełączać sortowanie między A–Z a Z–A. 
- **Czas i data** — pozwala zmienić datę i czas, aby obserwować niebo w różnych momentach z przeszłości lub przyszłości. Jest to przydatne do planowania obserwacji, śledzenia ruchu obiektów lub nauki, jak niebo zmienia się w czasie. Jeśli ustawisz niestandardową datę/czas, znacznik pokazuje pełną datę i czas, a obok pojawia się przycisk resetu, aby wrócić do aktualnego czasu systemowego.
- [**Konfiguruj widok**](#configure-view).

Ekran renderuje pełną półkulę nieba nad twoją lokalizacją, wyrównaną z kierunkiem kompasu. Mapę gwiazdową można obracać ręcznie. Ręczne obracanie Mapy gwiazdowej nie wpływa na orientację mapy Ziemi. Mapa Ziemi zawsze podąża za [trybem orientacji mapy](../map/interact-with-map.md#map-orientation-modes) wybranym w twoich ustawieniach. Dotknij obiektów niebieskich, aby zobaczyć szczegóły, takie jak jasność, czasy wschodu/zachodu lub ścieżki.

## Informacje o obiekcie niebieskim {#celestial-object-info}

![Wyskakujące okno z informacjami o obiekcie](@site/static/img/plugins/starwatcher/object-info_new.png)

Dotknij dowolnej **gwiazdy, planety, gwiazdozbioru lub Słońca/Księżyca** na ekranie **Mapy gwiazdowej** lub **nakładce mapy**, aby zobaczyć szczegółowe informacje. Wybrany obiekt jest podświetlony na Mapie gwiazdowej czerwonym markerem kołowym, a jego dobowy ruch jest wizualizowany przez pierścień godzinowy (00–23) pokazujący, gdzie obiekt będzie się znajdował o każdej godzinie czasu lokalnego i kierunek ruchu.

**Wyświetlane dane:**
- **Azymut**: Kierunek od Północy (0°-360°), w którym obiekt pojawia się na niebie
- **Wysokość**: Wysokość nad horyzontem (0° na horyzoncie, 90° w zenicie)
- **Jasność**: Skala jasności (-26 dla Słońca do +6 dla słabych gwiazd; niższa = jaśniejsza)
- **Czasy wschodu/zachodu**: Kiedy obiekt wschodzi nad/zachodzi poniżej horyzontu
- **Odległość** (planety): Średnia odległość od Ziemi w AU/km

**Integracja z Wikipedią**: Dotknij **„Wikipedia”** w oknie informacyjnym, aby otworzyć stronę obiektu w przeglądarce (np. Syriusz, Orion, Wenus). Działa offline dla danych w pamięci podręcznej, online dla pełnych artykułów.

**Długie naciśnięcie** obiektów niebieskich, aby **przypiąć** je jako markery mapy z aktualizacjami pozycji na żywo lub **udostępnić** współrzędne do grupowego obserwowania gwiazd.

Ta funkcja pomaga identyfikować obiekty na prawdziwym niebie, planować obserwacje i uczyć się faktów astronomicznych bezpośrednio z OsmAnd.

## Znajdowanie gwiazd AR (Tryb aparatu) {#ar-star-finding}

**Przejdź do:** *Włączona wtyczka → Menu → Mapa gwiazdowa → Przycisk aparatu* 

Warstwa **Astronomii** współpracuje z **aparatem urządzenia**, aby umożliwić **obserwowanie gwiazd w rzeczywistości rozszerzonej (AR)**. Skieruj kamerę telefonu na prawdziwe nocne niebo i zobacz gwiazdy, planety, gwiazdozbiory, nakładki Słońca/Księżyca w czasie rzeczywistym.

**Jak działa znajdowanie gwiazd AR:**
- **Widok na żywo z aparatu** pokazuje prawdziwe niebo z przezroczystymi nakładkami astronomicznymi wyrównanymi do horyzontu/kompasu
- **Poruszaj kamerą**, aby skanować niebo — obiekty są podświetlane, gdy pojawiają się w twoim polu widzenia
- **Dotknij podświetlonych obiektów**, aby zobaczyć azymut, wysokość, jasność, czasy wschodu/zachodu i link do Wikipedii
- **Kalibracja kompasu** wymagana do dokładnego wyrównania (machnij telefonem w kształcie ósemki, jeśli potrzeba)

**Idealne do:**
- Identyfikowania słabych gwiazd/planet niewidocznych gołym okiem
- Lokalizowania gwiazdozbiorów przez poruszanie telefonem po niebie
- Nawigacji po niebie w czasie rzeczywistym podczas wędrówek lub kempingu

## Konfiguruj widok {#configure-view}

![Konfiguruj widok](@site/static/img/plugins/starwatcher/half_state.png) ![Konfiguruj widok](@site/static/img/plugins/starwatcher/full_state.png)

**Konfiguruj widok** pozwala kontrolować, jak wyświetlana jest Mapa gwiazdowa, poprzez włączanie lub wyłączanie trybów wizualnych, obiektów i pomocy renderowania.

Aby otworzyć Konfiguruj widok, dotknij przycisku Konfiguruj widok w prawym dolnym rogu ekranu Mapy gwiazdowej. Przycisk jest reprezentowany przez ikonę w stylu warstwy (ułożone kształty), wskazującą ustawienia wyświetlania i warstw. Konfiguruj widok otwiera się w stanie *Pół*, pokazując główne opcje wyświetlania. Przesuń panel w górę, aby rozwinąć go do stanu *Pełny* i uzyskać dostęp do wszystkich dostępnych ustawień. Aby zamknąć Konfiguruj widok, przesuń panel w dół raz, aby wrócić do stanu Pół, przesuń w dół ponownie, aby całkowicie go zamknąć, lub dotknij przycisku Zamknij (X) w prawym górnym rogu panelu.

### Tryby i akcje {#modes-and-actions}

![Konfiguruj widok](@site/static/img/plugins/starwatcher/view_with_map.png) ![Konfiguruj widok](@site/static/img/plugins/starwatcher/red_filter.png)

Ta sekcja kontroluje główne tryby wyświetlania Mapy gwiazdowej.

- **2D / 3D**. Przełącza Mapę gwiazdową między płaskim widokiem (2D) a kulistym (3D).
- **Mapa**. Włącza dodatkowy widok mapy Ziemi wyświetlany poniżej Mapy gwiazdowej, pomagający powiązać obiekty niebieskie z twoją lokalizacją geograficzną.
- **Czerwony filtr**. Nakłada czerwony filtr koloru na cały ekran, aby zmniejszyć zanieczyszczenie światłem i zachować widzenie nocne podczas obserwacji ciemnego nieba.

### Widoczne obiekty {#visible-objects}

![Konfiguruj widok](@site/static/img/plugins/starwatcher/solar_system.png) ![Konfiguruj widok](@site/static/img/plugins/starwatcher/constellations.png)

Ta sekcja pozwala wybrać, które typy obiektów niebieskich są wyświetlane na Mapie gwiazdowej.

| Obiekt | Opis |
|--------|------|
| Układ słoneczny | Wyświetla Słońce, Księżyc i widoczne planety. |
| Gwiazdozbiory | Pokazuje linie i wzory gwiazdozbiorów utworzone przez gwiazdy. |
| Gwiazdy | Wyświetla pojedyncze gwiazdy widoczne na Mapie gwiazdowej. |
| Mgławice | Pokazuje obiekty mgławicowe, gdzie dostępne. |
| Gromady gwiazd | Wyświetla gromady gwiazd jako oddzielne obiekty niebieskie. |
| Głębokie niebo | Przełącza obiekty głębokiego nieba, takie jak galaktyki, gromady galaktyk i czarne dziury. |

### Opcje wyświetlania osobistego {#personal-display-options}

**Opcje wyświetlania osobistego** kontrolują dodatkowe pomoce wizualne związane z fokusem użytkownika i obserwacją.

| Opcja | Opis |
|-------|------|
| Kierunek | Pokazuje wskaźnik kierunkowy, aby pomóc zorientować widok. |
| Ścieżka dobowa | Wyświetla dobową ścieżkę wybranych obiektów niebieskich po niebie. |
| Ulubione | Podświetla lub wyświetla obiekty oznaczone jako ulubione. |

### Pomocy renderowania {#rendering-aids}

**Pomocy renderowania** dodają linie odniesienia i siatki, aby pomóc zorientować Mapę gwiazdową.

| Pomoc | Opis |
|-------|------|
| Siatka azymutalna | Dodaje siatkę opartą na azymucie do orientacji poziomej nieba. |
| Linia południkowa | Wyświetla linię południkową przecinającą niebo z północy na południe. |
| Siatka równikowa | Pokazuje siatkę współrzędnych równikowych niebieskich. |
| Linia ekliptyki | Wyświetla linię ekliptyki reprezentującą pozorną ścieżkę Słońca. |
| Równik galaktyczny | Pokazuje płaszczyznę równikową galaktyki Drogi Mlecznej. |

<!-- 
## Astronomy Settings

*Main Menu → Plugins → Star map → ⚙️ button*

Choose visible layers and objects

### Star Layers

All astronomical data appears as map overlays, visible at zoom scales 5-15. Layers project the celestial sphere onto the flat map.

| Layer | Description |
|-------|-------------|
| Stars | Bright stars (up to magnitude 4-6) with labels and constellation lines |
| Constellations | Connects stars into familiar patterns like Orion or Big Dipper |
| Planets | Positions and daily paths for Mercury-Venus-Mars-Jupiter-Saturn (colored icons) |
| Sun & Moon | Arcs showing rise/set times and illumination phase |
| Horizon | Line separating visible sky from ground, with cardinal directions |

-->


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe](../../user/map/vector-maps.md)