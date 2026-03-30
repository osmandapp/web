---
source-hash: 586e89c491ebdc9f9d39017e43dfe0ba1044c71a6eddcfcdc4d71787f3703bae
sidebar_position: 3
title: Astronomia
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

<InfoIncompleteArticle/>

<InfoAndroidOnly/>

:::info
**Astronomia** jest obecnie w wersji **beta**.
:::

:::tip Zakup
Wtyczka Astronomia to [funkcja płatna](../purchases/index.md).  
:::

## Przegląd {#overview}

Wtyczka Astronomia wyświetla nakładkę nieba z gwiazdami, gwiazdozbiorami, Słońcem, Księżycem i planetami bezpośrednio na mapie. Używa katalogu niebieskiego offline do obliczania i wyświetlania bieżących oraz przyszłych pozycji obiektów niebieskich. Wtyczka pozwala również użytkownikom na eksplorowanie nocnego nieba, identyfikowanie obiektów oraz planowanie obserwacji poprzez przeglądanie ich ścieżek na niebie.

Wtyczka działa w pełni offline, korzystając z wbudowanych katalogów gwiazd, co umożliwia eksplorację nieba nawet bez połączenia z internetem.

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

![Star map screen](@site/static/img/plugins/starwatcher/view_new_1.png)

Dedykowany ekran **Mapy gwiazdowej** pokazuje interaktywną kopułę niebieską z gwiazdami, gwiazdozbiorami, planetami, ścieżkami Słońca i Księżyca. Na dole ekranu możesz uzyskać dostęp do następujących kontrolek: 
- [**Wyszukiwanie**](#search) — otwiera ekran Wyszukiwania, w którym możesz wyszukiwać obiekty niebieskie i przeglądać katalogi nieba oraz kategorie. 
- **Czas i data** — pozwala zmienić datę i czas, aby obserwować niebo w różnych momentach z przeszłości lub przyszłości. Jest to przydatne do planowania obserwacji, śledzenia ruchu obiektów lub nauki, jak niebo zmienia się w czasie. Jeśli ustawisz niestandardową datę/czas, znacznik pokazuje pełną datę i czas, a obok pojawia się przycisk resetu, aby wrócić do aktualnego czasu systemowego.
- **Filtr jasności** — pozwala ograniczyć, które gwiazdy są wyświetlane na podstawie ich jasności. Użyj suwaka, aby ustawić maksymalną wartość jasności. Niższe wartości pokazują tylko najjaśniejsze gwiazdy, podczas gdy wyższe wartości ujawniają słabsze gwiazdy i obiekty głębokiego nieba. Pomaga to zmniejszyć bałagan wizualny lub symulować to, co jest widoczne gołym okiem.
- [**Konfiguruj widok**](#configure-view) — otwiera ustawienia wyświetlania, które kontrolują, jak obiekty, ścieżki i linie odniesienia są pokazywane na Mapie gwiazdowej.

Ekran renderuje pełną półkulę nieba nad twoją lokalizacją, wyrównaną z kierunkiem kompasu. Mapę gwiazdową można obracać ręcznie, przeciągając ekran. Ręczne obracanie Mapy gwiazdowej nie wpływa na orientację mapy Ziemi. Mapa Ziemi zawsze podąża za [trybem orientacji mapy](../map/interact-with-map.md#map-orientation-modes) wybranym w twoich ustawieniach. Dotknij obiektów niebieskich, aby zobaczyć szczegóły, takie jak jasność, czasy wschodu/zachodu lub ścieżki.

Mapa gwiazdowa może również wyrównywać się z orientacją twojego urządzenia, gdy włączony jest tryb kompasu. W tym trybie niebo obraca się zgodnie z czujnikami akcelerometru i kompasu urządzenia, co pozwala na eksplorowanie nieba poprzez fizyczne poruszanie telefonem.

## Menu kontekstowe {#context-menu}

![Context Menu](@site/static/img/plugins/starwatcher/context_menu_view.png)

**Menu kontekstowe** dostarcza szczegółowych informacji o obiektach niebieskich oraz narzędzi do ich obserwacji. Otwiera się po dotknięciu obiektu niebieskiego na Mapie gwiazdowej.

Po wybraniu obiektu jest on podświetlony na Mapie gwiazdowej czerwonym markerem kołowym. Jego dobowy ruch jest również wizualizowany przez pierścień godzinowy (00–23), pokazujący, gdzie obiekt będzie się znajdował na niebie o każdej godzinie lokalnego dnia oraz kierunek jego ruchu.

Menu kontekstowe pojawia się na dole ekranu i zawiera informacje o obiekcie, szybkie akcje oraz zakładki do eksplorowania widoczności obiektu i harmonogramu obserwacji.

### Informacje o obiekcie {#object-information}

![Object Information](@site/static/img/plugins/starwatcher/object_view.png)

Górna sekcja Menu kontekstowego wyświetla nazwę obiektu i jego klasyfikację. Poniżej nazwy pokazany jest typ obiektu oraz jego gwiazdozbiór lub grupa nadrzędna. Na przykład:  
- **Beta Ursae Minoris** — Gwiazda • Mały Wóz
- **Jowisz** — Planeta • Układ słoneczny
- **Andromeda** — Galaktyka • Głębokie niebo

Bloki szybkich informacji wyświetlają kluczowe parametry obserwacyjne:  
- Wschód – czas, kiedy obiekt wschodzi nad horyzont.
- Zachód – czas, kiedy obiekt zachodzi poniżej horyzontu.
- Azymut – kierunek obiektu względem północy (0°–360°).
- Wysokość – wysokość obiektu nad horyzontem.
- Jasność – jasność obiektu widziana z Ziemi. 

Te wartości aktualizują się dynamicznie na podstawie wybranego czasu i lokalizacji użytkownika.

Poniżej bloków szybkich informacji menu może zawierać również dodatkowe informacje i zasoby dotyczące obiektu:  
- Przeczytaj na Wikipedii – otwiera artykuł na Wikipedii o obiekcie. Jeśli dostępne są dane Wikipedii offline, artykuł można otworzyć bez połączenia z internetem; w przeciwnym razie strona otwiera się w przeglądarce.
- Zdjęcia online – wyświetla dostępne zdjęcia związane z wybranym obiektem niebieskim.

### Akcje {#actions}

Poniżej informacji o obiekcie Menu kontekstowe oferuje kilka akcji do interakcji z wybranym obiektem niebieskim:
- **Zapisz** – dodaje obiekt do twojej listy Ulubionych dla szybkiego dostępu.
- **Lokalizuj** – centruje wybrany obiekt na Mapie gwiazdowej.
- **Kierunek** – pokazuje kierunek do obiektu na mapie, pomagając zorientować się podczas obserwacji nieba.
- **Ścieżka** – wyświetla dobową trajektorię obiektu na niebie, pozwalając zobaczyć, jak się porusza w ciągu dnia.

### Wykres widoczności {#actions}

![Visibility Graph](@site/static/img/plugins/starwatcher/visibility.png)

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

Ruchomy wskaźnik pozwala na eksplorowanie pozycji obiektu w różnych czasach. Po przesunięciu wskaźnika aktualizowane są bieżący czas, wysokość i wartości azymutu.

Poniżej wykresu wyświetlane są ważne wydarzenia obserwacyjne: 
- **Wschód** – kiedy obiekt wschodzi nad horyzont.
- **Kulminacja** – kiedy obiekt osiąga swoją najwyższą wysokość.
- **Zachód** – kiedy obiekt zachodzi poniżej horyzontu.

Wykres otwiera się z wskaźnikiem umieszczonym na bieżącym czasie systemowym. Lokalizacja używana do obliczeń jest pokazana poniżej wykresu.

### Harmonogram obserwacji {#actions}

![Observation Schedule](@site/static/img/plugins/starwatcher/schedule.png)

Zakładka **Harmonogram** wyświetla widoczność wybranego obiektu dla bieżącego tygodnia. Każdy wiersz reprezentuje jeden dzień i zawiera:  
- dzień tygodnia
- datę
- czas wschodu
- czas zachodu
- mały wykres widoczności dla tego dnia

Mini wykres pokazuje, kiedy obiekt jest widoczny w ciągu dnia i jak zmienia się jego wysokość. Kolorowy odcinek paska reprezentuje okres, kiedy obiekt jest nad horyzontem.

Możesz nawigować między tygodniami za pomocą przycisków strzałkowych w nagłówku Harmonogramu. Przycisk kalendarza pozwala wrócić do bieżącego tygodnia.

## Znajdowanie gwiazd AR (Tryb aparatu) {#ar-star-finding}

**Przejdź do:** *Włączona wtyczka → Menu → Mapa gwiazdowa → Przycisk aparatu* 

Warstwa **Astronomii** współpracuje z **aparatem urządzenia**, aby umożliwić **obserwowanie gwiazd w rzeczywistości rozszerzonej (AR)**. Skieruj kamerę telefonu na prawdziwe nocne niebo i zobacz gwiazdy, planety, gwiazdozbiory, nakładki Słońca/Księżyca w czasie rzeczywistym.

**Jak działa znajdowanie gwiazd AR:**
- **Widok na żywo z aparatu** pokazuje prawdziwe niebo z przezroczystymi nakładkami astronomicznymi wyrównanymi do horyzontu/kompasu.
- **Poruszaj kamerą**, aby skanować niebo — obiekty są podświetlane, gdy pojawiają się w twoim polu widzenia.
- **Dotknij podświetlonych obiektów**, aby zobaczyć azymut, wysokość, jasność, czasy wschodu/zachodu i link do Wikipedii.
- **Kalibracja kompasu** wymagana do dokładnego wyrównania (machnij telefonem w kształcie ósemki, jeśli potrzeba).

Tryb AR używa czujników urządzenia (żyroskop, akcelerometr i kompas) do wyrównania obiektów niebieskich z prawdziwym niebem.

**Idealne do:**
- Identyfikowania słabych gwiazd/planet niewidocznych gołym okiem.
- Lokalizowania gwiazdozbiorów przez poruszanie telefonem po niebie.
- Nawigacji po niebie w czasie rzeczywistym podczas wędrówek lub kempingu.

## Konfiguruj widok {#configure-view}

![Configure View](@site/static/img/plugins/starwatcher/half_state_new.png) ![Configure View](@site/static/img/plugins/starwatcher/full_state.png)

**Konfiguruj widok** pozwala kontrolować, jak wyświetlana jest Mapa gwiazdowa, poprzez włączanie lub wyłączanie trybów wizualnych, obiektów i pomocy renderowania.

Aby otworzyć Konfiguruj widok, dotknij przycisku Konfiguruj widok w prawym dolnym rogu ekranu Mapy gwiazdowej. Przycisk jest reprezentowany przez ikonę w stylu warstwy (ułożone kształty), wskazującą ustawienia wyświetlania i warstw. Konfiguruj widok otwiera się w stanie *Pół*, pokazując główne opcje wyświetlania. Przesuń panel w górę, aby rozwinąć go do stanu *Pełny* i uzyskać dostęp do wszystkich dostępnych ustawień. Aby zamknąć Konfiguruj widok, przesuń panel w dół raz, aby wrócić do stanu Pół, przesuń w dół ponownie, aby całkowicie go zamknąć, lub dotknij w dowolnym miejscu mapy poza panelem. Możesz również dotknąć przycisku Zamknij (X) w prawym górnym rogu panelu.

### Tryby i akcje {#modes-and-actions}

![Configure View](@site/static/img/plugins/starwatcher/view_with_map_new.png) ![Configure View](@site/static/img/plugins/starwatcher/red_filter_new.png)

Ta sekcja kontroluje główne tryby wyświetlania Mapy gwiazdowej.

- **2D / 3D**. Przełącza między widokiem ścieżki niebieskiej (2D), który pokazuje niebo jako projekcję kopuły z ścieżkami obiektów, a widokiem nieba w stylu globusa (3D) reprezentującym sferę niebieską.
- **Mapa**. Włącza dodatkowy widok mapy Ziemi wyświetlany poniżej Mapy gwiazdowej, pomagając powiązać obiekty niebieskie z twoimi rzeczywistymi otoczeniami geograficznymi.
- **Czerwony filtr**. Nakłada czerwony filtr koloru na cały ekran, aby zmniejszyć zanieczyszczenie światłem i zachować widzenie nocne podczas obserwacji ciemnego nieba.

### Widoczne obiekty {#visible-objects}

![Configure View](@site/static/img/plugins/starwatcher/solar_system.png) ![Configure View](@site/static/img/plugins/starwatcher/constellations.png)

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
| Linia równika | Wyświetla projekcję równika Ziemi na sferę niebieską, pomagając wizualizować rotację Ziemi względem nieba. |
| Linia galaktyczna | Pokazuje płaszczyznę galaktyki Drogi Mlecznej na niebie, wskazując główny kierunek dysku galaktycznego. |

## Wyszukiwanie {#search}

![Search](@site/static/img/plugins/starwatcher/explore_screen.png)

Funkcja **Wyszukiwania** w wtyczce Astronomia pozwala na znajdowanie obiektów niebieskich, eksplorowanie kategorii nieba oraz dostęp do danych obserwacyjnych. Aby otworzyć Wyszukiwanie, dotknij przycisku Wyszukiwania na Mapie gwiazdowej. Otwiera to ekran Wyszukiwania, który oferuje kilka sekcji do odkrywania i organizowania obiektów niebieskich. Ekran Wyszukiwania zawiera następujące sekcje:

**1. Obserwuj teraz**

Sekcja Obserwuj teraz podświetla obiekty niebieskie, które są widoczne teraz lub dzisiejszej nocy. Ta sekcja działa jako narzędzie rekomendacji, pokazując obiekty najlepiej nadające się do obserwacji na podstawie twojej bieżącej lokalizacji i czasu.

**2. Kategorie**

Sekcja Kategorie pozwala na przeglądanie obiektów według typu: Układ słoneczny, Gwiazdozbiory, Gwiazdy, Mgławice, Gromady gwiazd i Głębokie niebo. Każda kategoria otwiera listę obiektów z kluczowymi informacjami: nazwa obiektu, typ lub gwiazdozbiór, jasność (brightness) oraz czas wschodu lub zachodu (jeśli dotyczy).

### Sortowanie i filtry {#sorting-and-filters}

![Sorting](@site/static/img/plugins/starwatcher/sorting.png) ![Filters](@site/static/img/plugins/starwatcher/filters.png)

Dotknij paska wyszukiwania, aby otworzyć pełne interfejs wyszukiwania. Możesz udoskonalić wyniki za pomocą opcji sortowania i filtrowania.

Możesz sortować obiekty według:  
- Nazwy (A–Z lub Z–A)
- Najjaśniejsze najpierw
- Najsłabsze najpierw
- Wschodzi najwcześniej
- Zachodzi najwcześniej

Filtry pomagają zawęzić widoczne obiekty.

**Widoczność**  
- Pokaż wszystkie — wyświetla wszystkie obiekty
- Widoczne teraz — obiekty obecnie nad horyzontem
- Widoczne dzisiejszej nocy — obiekty widoczne między zachodem a wschodem słońca

**Dodatkowe filtry**  
- Widoczne gołym okiem — pokazuje tylko obiekty z jasnością ≤ 6

**Kategorie**  
Możesz filtrować wyniki według typu obiektu. Wybranie konkretnych kategorii automatycznie wyłącza opcję Wszystkie.

### Moje dane {#my-data}

![My Data](@site/static/img/plugins/starwatcher/my_data.png)

Sekcja Moje dane zawiera obiekty, z którymi użytkownik wchodził w interakcję. Ta sekcja obejmuje trzy listy:

- Ulubione — obiekty zapisane z menu kontekstowego.
- Ścieżka dobowa — obiekty, dla których włączona jest ścieżka ruchu dobowego.
- Kierunki — obiekty z aktywnym wskaźnikiem kierunku na Mapie gwiazdowej.

Wybranie elementu otwiera menu kontekstowe obiektu.

### Katalogi {#catalogs}

![Catalogs](@site/static/img/plugins/starwatcher/catalogs.png)

Sekcja Katalogi zapewnia dostęp do katalogów astronomicznych dostępnych w wtyczce Astronomia.

Katalogi zawierają duże kolekcje obiektów niebieskich, takich jak gwiazdy, galaktyki, mgławice i gromady gwiazd. Otwarcie katalogu wyświetla listę obiektów zawartych w tym katalogu.

## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe](../../user/map/vector-maps.md)