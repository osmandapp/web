---
source-hash: 97e9a342bf78770a793c6914a8b243b2d5b515ca46e61160b3da4e3e167ed8cb
sidebar_position: 3
title:  Astronomy
unlistead: true
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

<InfoAndroidOnly/>

:::info
**Astronomia** jest obecnie w wersji **beta**.
:::

## Overview {#overview}

:::tip Purchase
Wtyczka Astronomia to [funkcja płatna](../purchases/index.md).  
:::

Wtyczka Astronomia wyświetla nakładkę nieba z gwiazdami, gwiazdozbiorami, Słońcem, Księżycem i planetami bezpośrednio na mapie. Używa katalogu niebieskiego offline do obliczania i wyświetlania bieżących oraz przyszłych pozycji obiektów niebieskich. Wtyczka pozwala również użytkownikom na eksplorowanie nocnego nieba, identyfikowanie obiektów oraz planowanie obserwacji poprzez przeglądanie ich ścieżek na niebie.

Wtyczka działa w pełni offline, korzystając z wbudowanych katalogów gwiazd, co umożliwia eksplorację nieba nawet bez połączenia z internetem.


## Required Setup Parameters {#required-setup-parameters}
  
Następujące ustawienia są wymagane do wyświetlania nakładki Astronomii:

1. Włącz wtyczkę [**Astronomia**](../plugins/index.md#enable--disable) w sekcji *Wtyczki* w *Menu głównym*
2. Użyj **Menu → Mapa gwiazdowa**, aby otworzyć dedykowany ekran z niebem gwiazdowym, ustawieniami i kontrolami czasu.
3. Wybierz **czas i datę** za pomocą kontrolek na ekranie Mapy gwiazdowej.
4. Dostosuj, co jest wyświetlane na Mapie gwiazdowej, używając [**Konfiguruj widok**](#configure-view) — na przykład, przełącz widoczne obiekty i pomoce renderowania.
5. Dotknij przycisku **Zamknij (X)** u góry ekranu Mapy gwiazdowej, aby wyjść z Mapy gwiazdowej i wrócić do mapy Ziemi.

Wtyczka działa z obiema silnikami renderowania map, ale najlepiej sprawdza się w trybie OpenGL.

## Star Map Screen {#star-map-screen}

**Go to:** *Enabled plugin → <Translate android="true" ids="shared_string_menu,star_map"/>* 

![Star map screen](@site/static/img/plugins/starwatcher/view_new_1.png)

Dedykowany ekran **Mapy gwiazdowej** pokazuje interaktywną kopułę niebieską z gwiazdami, gwiazdozbiorami, planetami, ścieżkami Słońca i Księżyca. Na dole ekranu możesz uzyskać dostęp do następujących kontrolek: 
- [**Wyszukiwanie**](#search) — otwiera ekran Wyszukiwania, w którym możesz wyszukiwać obiekty niebieskie i przeglądać katalogi nieba oraz kategorie. 
- **Czas i data** — pozwala zmienić datę i czas, aby obserwować niebo w różnych momentach z przeszłości lub przyszłości. Jest to przydatne do planowania obserwacji, śledzenia ruchu obiektów lub nauki, jak niebo zmienia się w czasie. Jeśli ustawisz niestandardową datę/czas, znacznik pokazuje pełną datę i czas, a obok pojawia się przycisk resetu, aby wrócić do aktualnego czasu systemowego.
- **<Translate android="true" ids="magnitude_filter"/>** — pozwala ograniczyć, które gwiazdy są wyświetlane na podstawie ich jasności. Użyj suwaka, aby ustawić maksymalną wartość jasności. Niższe wartości pokazują tylko najjaśniejsze gwiazdy, podczas gdy wyższe wartości ujawniają słabsze gwiazdy i obiekty głębokiego nieba. Pomaga to zmniejszyć bałagan wizualny lub symulować to, co jest widoczne gołym okiem.
- [**<Translate android="true" ids="astro_configure_view"/>**](#configure-view) — otwiera ustawienia wyświetlania, które kontrolują, jak obiekty, ścieżki i linie odniesienia są pokazywane na Mapie gwiazdowej.

Ekran renderuje pełną półkulę nieba nad twoją lokalizacją, wyrównaną z kierunkiem kompasu. Mapę gwiazdową można obracać ręcznie, przeciągając ekran. Ręczne obracanie Mapy gwiazdowej nie wpływa na orientację mapy Ziemi. Mapa Ziemi zawsze podąża za [trybem orientacji mapy](../map/interact-with-map.md#map-orientation-modes) wybranym w twoich ustawieniach. Dotknij obiektów niebieskich, aby zobaczyć szczegóły, takie jak jasność, czasy wschodu/zachodu lub ścieżki.

Mapa gwiazdowa może również wyrównywać się z orientacją twojego urządzenia, gdy włączony jest tryb kompasu. W tym trybie niebo obraca się zgodnie z czujnikami akcelerometru i kompasu urządzenia, co pozwala na eksplorowanie nieba poprzez fizyczne poruszanie telefonem.


## Context Menu {#context-menu}

![Context Menu](@site/static/img/plugins/starwatcher/context_menu_view.png)

**Menu kontekstowe** dostarcza szczegółowych informacji o obiektach niebieskich oraz narzędzi do ich obserwacji. Otwiera się po dotknięciu obiektu niebieskiego na Mapie gwiazdowej.

Po wybraniu obiektu jest on podświetlony na Mapie gwiazdowej czerwonym markerem kołowym. Jego dobowy ruch jest również wizualizowany przez pierścień godzinowy (00–23), pokazujący, gdzie obiekt będzie się znajdował na niebie o każdej godzinie lokalnego dnia oraz kierunek jego ruchu.

Menu kontekstowe pojawia się na dole ekranu i zawiera informacje o obiekcie, szybkie akcje oraz zakładki do eksplorowania widoczności obiektu i harmonogramu obserwacji.

### Object Information {#object-information}

![Object Information](@site/static/img/plugins/starwatcher/object_view_new.png) ![Object Information](@site/static/img/plugins/starwatcher/object_view_2.png)

Górna sekcja Menu kontekstowego wyświetla nazwę obiektu i jego klasyfikację. Poniżej nazwy pokazany jest typ obiektu oraz jego gwiazdozbiór lub grupa nadrzędna. Na przykład:
- **Beta Ursae Minoris** — Star • Ursa Minor
- **<Translate android="true" ids="astro_name_moon"/>** — Satelita • Ziemia
- **<Translate android="true" ids="astro_name_jupiter"/>** — Planeta • Układ słoneczny

Bloki szybkich informacji wyświetlają kluczowe parametry obserwacyjne:  
- <Translate android="true" ids="astro_rise"/> – czas, kiedy obiekt wschodzi nad horyzont.
- <Translate android="true" ids="astro_set"/> – czas, kiedy obiekt zachodzi poniżej horyzontu.
- <Translate android="true" ids="shared_string_azimuth"/> – kierunek obiektu względem północy (0°–360°).
- <Translate android="true" ids="altitude"/> – wysokość obiektu nad horyzontem.
- <Translate android="true" ids="shared_string_magnitude"/> – jasność obiektu widziana z Ziemi. 

Te wartości aktualizują się dynamicznie na podstawie wybranego czasu i lokalizacji użytkownika.

Poniżej bloków szybkich informacji menu może zawierać również dodatkowe informacje i zasoby dotyczące obiektu:
- <Translate android="true" ids="astro_offline_knowledge_base_title"/> – Umożliwia pobranie rozszerzonej bazy danych z artykułami Wikipedii i katalogami głębokiego nieba do użytku offline. Po pobraniu szczegółowe informacje o obiektach niebieskich można przeglądać bezpośrednio w aplikacji bez połączenia z internetem.
- <Translate android="true" ids="read_on_wiki"/> – Otwiera artykuł na Wikipedii o obiekcie w przeglądarce.
- <Translate android="true" ids="astro_designations"/> – Pokazuje alternatywne nazwy i identyfikatory katalogowe dla obiektu (na przykład, HD, HIP, NGC). Ta sekcja jest dostępna dla obiektów, które mają wpisy w katalogach, takich jak gwiazdy i obiekty głębokiego nieba. Jeśli obiekt nie ma wspólnej nazwy, jeden z tych identyfikatorów jest używany jako nazwa podstawowa.
- <Translate android="true" ids="online_photos"/> – Wyświetla dostępne zdjęcia związane z wybranym obiektem niebieskim.

### Actions {#actions}

Poniżej informacji o obiekcie Menu kontekstowe oferuje kilka akcji do interakcji z wybranym obiektem niebieskim:
- **<Translate android="true" ids="shared_string_save"/>** – dodaje obiekt do twojej listy Ulubionych dla szybkiego dostępu.
- **<Translate android="true" ids="astro_locate"/>** – centruje wybrany obiekt na Mapie gwiazdowej.
- **<Translate android="true" ids="astro_direction"/>** – pokazuje kierunek do obiektu na mapie, pomagając zorientować się podczas obserwacji nieba.
- **<Translate android="true" ids="astro_path"/>** – wyświetla dobową trajektorię obiektu na niebie, pozwalając zobaczyć, jak się porusza w ciągu dnia.

### Visibility Graph {#visibility-graph}

![Visibility Graph](@site/static/img/plugins/starwatcher/visibility_new.png)

Zakładka **Widoczność** pokazuje, jak wybrany obiekt porusza się po niebie w ciągu 24-godzinnego okresu.

Wykres wyświetla wysokość obiektu nad horyzontem w czasie.

- Oś pozioma reprezentuje czas od 12:00 do 12:00 następnego dnia.
- Oś pionowa reprezentuje wysokość od −30° do +90°.

Kolorowa krzywa pokazuje wysokość obiektu przez cały dzień.

Tło wykresu reprezentuje stan nieba i zmienia się w zależności od pozycji Słońca. Pomaga to zidentyfikować, kiedy obserwacje są możliwe.

Kolory reprezentują różne warunki nieba:  
- jasnoniebieski — dzień
- ciemniejszy niebieski — zmierzch
- ciemnoniebieski / czarny — noc

Kolor trajektorii obiektu odzwierciedla również jego wysokość:  
- żółty – wysoko na niebie (najlepsza widoczność)
- pomarańczowy – średnia wysokość
- czerwony – blisko horyzontu
- fioletowy – poniżej horyzontu (niewidoczny)

Ruchomy wskaźnik pozwala na eksplorowanie pozycji obiektu w różnych czasach. Po przesunięciu wskaźnika aktualizowane są bieżący czas, wysokość i wartości azymutu. Wartość azymutu zawiera również odpowiadający jej kierunek kompasu (na przykład, 354° Az (N)).

Poniżej wykresu wyświetlane są ważne wydarzenia obserwacyjne: 
- **<Translate android="true" ids="astro_rise"/>** – kiedy obiekt wschodzi nad horyzont.
- **<Translate android="true" ids="astro_culmination"/>** – kiedy obiekt osiąga swoją najwyższą wysokość.
- **<Translate android="true" ids="astro_set"/>** – kiedy obiekt zachodzi poniżej horyzontu. Jeśli obiekt nigdy nie wschodzi lub nigdy nie zachodzi, odpowiednie wartości są ukryte.

Wykres otwiera się z wskaźnikiem umieszczonym na bieżącym czasie systemowym. Lokalizacja używana do obliczeń jest pokazana poniżej wykresu. Lokalizacja jest wyświetlana jako nazwa miasta.

### Observation Schedule {#observation-schedule}

![Observation Schedule](@site/static/img/plugins/starwatcher/schedule_new.png)

Zakładka **Harmonogram** wyświetla widoczność wybranego obiektu dla bieżącego tygodnia. Każdy wiersz reprezentuje jeden dzień i zawiera:  
- dzień tygodnia
- datę
- czas wschodu
- czas zachodu. Jeśli czas zachodu występuje następnego dnia, jest oznaczony ⁺¹
- mały wykres widoczności dla tego dnia

Mini wykres pokazuje, kiedy obiekt jest widoczny w ciągu dnia i jak zmienia się jego wysokość. Kolorowy odcinek paska reprezentuje okres, kiedy obiekt jest nad horyzontem. Mini wykres reprezentuje zakres czasu od 00:00 do 23:59 dla wybranego dnia.

Możesz nawigować między tygodniami za pomocą przycisków strzałkowych w nagłówku Harmonogramu. Przycisk kalendarza pozwala wrócić do bieżącego tygodnia.

<!--
## Celestial Object Info {#celestial-object-info}

![Object info popup](@site/static/img/plugins/starwatcher/object-info_new.png)

Tap any **star, planet, constellation, or Sun/Moon** on the **Star map screen** or **map overlay** to view detailed information. Selected object  is highlighted on the Star map by a red circle marker, and its daily motion is visualized by an hour ring (00–23) showing where the object will be at each hour local time and the direction of movement.

**Displayed data:**
- **Azimuth**: Direction from North (0°-360°) where the object appears in the sky
- **Altitude**: Height above horizon (0° at horizon, 90° at zenith)
- **Magnitude**: Brightness scale (-26 for Sun to +6 for faint stars; lower = brighter)
- **Rise/Set times**: When the object rises above/sets below horizon
- **Distance** (planets): Average distance from Earth in AU/km

**Wikipedia integration**: Tap **"Wikipedia"** in the info popup to open the object's page in your browser (e.g. Sirius, Orion, Venus). Works offline for cached data, online for full articles.

**Long-press** celestial objects to **pin** them as map markers with live position updates, or **share** coordinates for group stargazing.

This feature helps identify objects in real sky, plan observations, and learn astronomy facts directly from OsmAnd.
-->

## AR Star Finding (Camera Mode) {#ar-star-finding}

**Go to:** *Enabled plugin → <Translate android="true" ids="shared_string_menu,star_map"/> → Camera button* 

Warstwa **Astronomii** współpracuje z **aparatem urządzenia**, aby umożliwić **obserwowanie gwiazd w rzeczywistości rozszerzonej (AR)**. Skieruj kamerę telefonu na prawdziwe nocne niebo i zobacz gwiazdy, planety, gwiazdozbiory, nakładki Słońca/Księżyca w czasie rzeczywistym.

**How AR Star Finding works:**
- **Widok na żywo z aparatu** pokazuje prawdziwe niebo z przezroczystymi nakładkami astronomicznymi wyrównanymi do horyzontu/kompasu.
- **Poruszaj kamerą**, aby skanować niebo — obiekty są podświetlane, gdy pojawiają się w twoim polu widzenia.
- **Dotknij podświetlonych obiektów**, aby zobaczyć azymut, wysokość, jasność, czasy wschodu/zachodu i link do Wikipedii.
- **Kalibracja kompasu** wymagana do dokładnego wyrównania (machnij telefonem w kształcie ósemki, jeśli potrzeba).

Tryb AR używa czujników urządzenia (żyroskop, akcelerometr i kompas) do wyrównania obiektów niebieskich z prawdziwym niebem.

**Idealne do:**
- Identyfikowania słabych gwiazd/planet niewidocznych gołym okiem.
- Lokalizowania gwiazdozbiorów przez poruszanie telefonem po niebie.
- Nawigacji po niebie w czasie rzeczywistym podczas wędrówek lub kempingu.


## Configure View {#configure-view}

![Configure View](@site/static/img/plugins/starwatcher/half_state_new.png) ![Configure View](@site/static/img/plugins/starwatcher/full_state.png)

**<Translate android="true" ids="astro_configure_view"/>** pozwala kontrolować, jak wyświetlana jest Mapa gwiazdowa, poprzez włączanie lub wyłączanie trybów wizualnych, obiektów i pomocy renderowania.

Aby otworzyć Konfiguruj widok, dotknij przycisku Konfiguruj widok w prawym dolnym rogu ekranu Mapy gwiazdowej. Przycisk jest reprezentowany przez ikonę w stylu warstwy (ułożone kształty), wskazującą ustawienia wyświetlania i warstw. Konfiguruj widok otwiera się w stanie *Pół*, pokazując główne opcje wyświetlania. Przesuń panel w górę, aby rozwinąć go do stanu *Pełny* i uzyskać dostęp do wszystkich dostępnych ustawień. Aby zamknąć Konfiguruj widok, przesuń panel w dół raz, aby wrócić do stanu Pół, przesuń w dół ponownie, aby całkowicie go zamknąć, lub dotknij w dowolnym miejscu mapy poza panelem. Możesz również dotknąć przycisku Zamknij (X) w prawym górnym rogu panelu.

### Modes and Actions {#modes-and-actions}

![Configure View](@site/static/img/plugins/starwatcher/view_with_map_new.png) ![Configure View](@site/static/img/plugins/starwatcher/red_filter_new.png)

Ta sekcja kontroluje główne tryby wyświetlania Mapy gwiazdowej.

- **<Translate android="true" ids="map_2d"/> / <Translate android="true" ids="map_3d"/>**. Przełącza między widokiem ścieżki niebieskiej (2D), który pokazuje niebo jako projekcję kopuły z ścieżkami obiektów, a widokiem nieba w stylu globusa (3D) reprezentującym sferę niebieską.
- **<Translate android="true" ids="shared_string_map"/>**. Włącza dodatkowy widok mapy Ziemi wyświetlany poniżej Mapy gwiazdowej, pomagając powiązać obiekty niebieskie z twoimi rzeczywistymi otoczeniami geograficznymi.
- **<Translate android="true" ids="red_filter"/>**. Nakłada czerwony filtr koloru na cały ekran, aby zmniejszyć zanieczyszczenie światłem i zachować widzenie nocne podczas obserwacji ciemnego nieba.

### Visible Objects {#visible-objects}

![Configure View](@site/static/img/plugins/starwatcher/solar_system.png) ![Configure View](@site/static/img/plugins/starwatcher/constellations.png)

Ta sekcja pozwala wybrać, które typy obiektów niebieskich są wyświetlane na Mapie gwiazdowej.

| Object | Description |
|-------|-------------|
| <Translate android="true" ids="astro_solar_system"/> | Wyświetla Słońce, Księżyc i widoczne planety. |
| <Translate android="true" ids="astro_constellations"/> | Pokazuje linie i wzory gwiazdozbiorów utworzone przez gwiazdy. |
| <Translate android="true" ids="astro_stars"/> | Wyświetla pojedyncze gwiazdy widoczne na Mapie gwiazdowej. |
| <Translate android="true" ids="astro_nebulas"/> | Pokazuje obiekty mgławicowe, gdzie dostępne. |
| <Translate android="true" ids="astro_star_clusters"/> | Wyświetla gromady gwiazd jako oddzielne obiekty niebieskie. |
| <Translate android="true" ids="astro_deep_sky"/> | Przełącza obiekty głębokiego nieba, takie jak galaktyki, gromady galaktyk i czarne dziury. |

### Personal Display Options {#personal-display-options}

**Personal display options** control additional visual aids related to user focus and observation.

| Option | Description |
|-------|-------------|
| <Translate android="true" ids="astro_direction"/> | Pokazuje wskaźnik kierunkowy, aby pomóc zorientować widok. |
| <Translate android="true" ids="astro_daily_path"/> | Wyświetla dobową ścieżkę wybranych obiektów niebieskich po niebie. |
| <Translate android="true" ids="shared_string_favorites"/> | Podświetla lub wyświetla obiekty oznaczone jako ulubione. |

### Rendering Aids {#rendering-aids}

**Rendering aids** add reference lines and grids to help orient the Star map.

| Aid | Description |
|-------|-------------|
| <Translate android="true" ids="azimuthal_grid"/> | Dodaje siatkę opartą na azymucie do orientacji poziomej nieba. |
| <Translate android="true" ids="meridian_line"/> | Wyświetla linię południkową przecinającą niebo z północy na południe. |
| <Translate android="true" ids="equatorial_grid"/> | Pokazuje siatkę współrzędnych równikowych niebieskich. |
| <Translate android="true" ids="ecliptic_line"/> | Wyświetla linię ekliptyki reprezentującą pozorną ścieżkę Słońca. |
| <Translate android="true" ids="equator_line"/> | Wyświetla projekcję równika Ziemi na sferę niebieską, pomagając wizualizować rotację Ziemi względem nieba. |
| <Translate android="true" ids="galactic_line"/> | Pokazuje płaszczyznę galaktyki Drogi Mlecznej na niebie, wskazując główny kierunek dysku galaktycznego. |

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

## Search {#search}

![Search](@site/static/img/plugins/starwatcher/explore_screen.png)

Funkcja **Wyszukiwania** w wtyczce Astronomia pozwala na znajdowanie obiektów niebieskich, eksplorowanie kategorii nieba oraz dostęp do danych obserwacyjnych. Aby otworzyć Wyszukiwanie, dotknij przycisku Wyszukiwania na Mapie gwiazdowej. Otwiera to ekran Wyszukiwania, który oferuje kilka sekcji do odkrywania i organizowania obiektów niebieskich. Ekran Wyszukiwania zawiera następujące sekcje:

**1. Watch now**

Sekcja Obserwuj teraz podświetla obiekty niebieskie, które są widoczne teraz lub dzisiejszej nocy. Ta sekcja działa jako narzędzie rekomendacji, pokazując obiekty najlepiej nadające się do obserwacji na podstawie twojej bieżącej lokalizacji i czasu.

**2. Categories**

Sekcja Kategorie pozwala na przeglądanie obiektów według typu: Układ słoneczny, Gwiazdozbiory, Gwiazdy, Mgławice, Gromady gwiazd i Głębokie niebo. Każda kategoria otwiera listę obiektów z kluczowymi informacjami: nazwa obiektu, typ lub gwiazdozbiór, jasność (brightness) oraz czas wschodu lub zachodu (jeśli dotyczy).

### Sorting and Filters {#sorting-and-filters}

![Sorting](@site/static/img/plugins/starwatcher/sorting.png) ![Filters](@site/static/img/plugins/starwatcher/filters.png)

Dotknij paska wyszukiwania, aby otworzyć pełne interfejs wyszukiwania. Możesz udoskonalić wyniki za pomocą opcji sortowania i filtrowania.

Możesz sortować obiekty według:  
- Nazwy (A–Z lub Z–A)
- <Translate android="true" ids="astro_sort_brightest_first"/>
- <Translate android="true" ids="astro_sort_faintest_first"/>
- <Translate android="true" ids="astro_sort_rises_soonest"/>
- <Translate android="true" ids="astro_sort_sets_soonest"/>

Filtry pomagają zawęzić widoczne obiekty.

**Visibility**  
- <Translate android="true" ids="astro_filter_show_all"/> — wyświetla wszystkie obiekty
- <Translate android="true" ids="astro_filter_visible_now"/> — obiekty obecnie nad horyzontem
- <Translate android="true" ids="astro_filter_visible_tonight"/> — obiekty widoczne między zachodem a wschodem słońca

**Additional filters**  
- <Translate android="true" ids="astro_filter_naked_eye"/> — pokazuje tylko obiekty z jasnością ≤ 6

**Categories**  
Możesz filtrować wyniki według typu obiektu. Wybranie konkretnych kategorii automatycznie wyłącza opcję Wszystkie.

### My Data {#my-data}

![My Data](@site/static/img/plugins/starwatcher/my_data_new.png)

Sekcja Moje dane zawiera obiekty, z którymi użytkownik wchodził w interakcję. Ta sekcja obejmuje trzy listy:

- <Translate android="true" ids="shared_string_favorites"/> — obiekty zapisane z menu kontekstowego.
- <Translate android="true" ids="astro_daily_path"/> — obiekty, dla których włączona jest ścieżka ruchu dobowego.
- <Translate android="true" ids="astro_directions"/> — obiekty z aktywnym wskaźnikiem kierunku na Mapie gwiazdowej.

Wybranie elementu otwiera menu kontekstowe obiektu.

### Catalogs {#catalogs}

![Catalogs](@site/static/img/plugins/starwatcher/catalogs_new.png)

Sekcja Katalogi zapewnia dostęp do katalogów astronomicznych dostępnych w wtyczce Astronomia.

Katalogi zawierają duże kolekcje obiektów niebieskich, takich jak gwiazdy, galaktyki, mgławice i gromady gwiazd. Otwarcie katalogu wyświetla listę obiektów zawartych w tym katalogu.

## Related Articles {#related-articles}

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps](../../user/map/vector-maps.md)