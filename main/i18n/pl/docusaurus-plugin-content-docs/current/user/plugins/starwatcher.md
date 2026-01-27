---
source-hash: 8fd560586badacfe8252875585749d24294632dc3ef28a49749d309541421b7a
sidebar_position: 14
title:  Star Watcher
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
**Star Watcher** jest obecnie w wersji **beta**.
:::

## Przegląd {#overview}

Wtyczka Star Watcher wyświetla nakładkę nieba gwiazdowego na mapie z gwiazdami, gwiazdozbiorami, Słońcem, Księżycem i planetami. Pozycje i ścieżki Słońca, Księżyca, planet oraz głównych gwiazd są wyświetlane na mapie.


## Wymagane parametry konfiguracji {#required-setup-parameters}
  
Następujące ustawienia są wymagane do wyświetlania nakładki Star Watcher:

1. Włącz wtyczkę [**Star Watcher**](../plugins/index.md#enable--disable) w sekcji *Wtyczki* w *Menu głównym*
2. Użyj **Menu → Mapa gwiazd** aby otworzyć dedykowany ekran z niebem gwiazdowym, ustawieniami i kontrolami czasu
3. Wybierz **czas i datę** za pomocą suwaków lub przycisków na ekranie Mapy gwiazd
4. Dostosuj **widoczność i przezroczystość** w ustawieniach menu „Mapa gwiazd”.

Wtyczka działa z obydwoma silnikami renderowania map, ale najlepiej sprawdza się w trybie OpenGL.

## Ekran Mapy Gwiazd

**Przejdź do:** *Włączona wtyczka → Menu → Mapa gwiazd* 

![Ekran mapy gwiazd](@site/static/img/plugins/starwatcher/view.png)

Dedykowany ekran **Mapy gwiazd** pokazuje interaktywną kopułę niebieską z gwiazdami, gwiazdozbiorami, planetami, ścieżkami Słońca i Księżyca. Na dole znajduje się **pasek narzędzi** z suwakami czasu/data, przyciskami dni i szybkimi przełącznikami dla warstw, takich jak linia horyzontu lub etykiety.


- Ekran renderuje pełną półkulę nieba nad Twoją lokalizacją, wyrównaną do kierunku kompasu
- Dotknij obiektów niebieskich, aby zobaczyć szczegóły, takie jak jasność, czasy wschodu/zachodu lub ścieżki



## Informacje o obiekcie niebieskim

Dotknij dowolnej **gwiazdy, planety, gwiazdozbioru lub Słońca/Księżyca** na ekranie **Mapy gwiazd** lub **nakładce mapy**, aby wyświetlić szczegółowe informacje.

![Okienko informacji o obiekcie](@site/static/img/plugins/starwatcher/object-info.png)

**Wyświetlane dane:**
- **Azymut**: Kierunek od północy (0°-360°), w którym obiekt pojawia się na niebie
- **Wysokość**: Wysokość nad horyzontem (0° na horyzoncie, 90° w zenicie)
- **Jasność**: Skala jasności (-26 dla Słońca do +6 dla słabych gwiazd; niższa = jaśniejsza)
- **Czasy wschodu/zachodu**: Kiedy obiekt wschodzi nad/zachodzi poniżej horyzontu
- **Odległość** (planety): Średnia odległość od Ziemi w AU/km

**Integracja z Wikipedią**: Dotknij **„Wikipedia”** w okienku informacji, aby otworzyć stronę obiektu w przeglądarce (np. Syriusz, Orion, Wenus). Działa offline dla danych w pamięci podręcznej, online dla pełnych artykułów.

**Długie naciśnięcie** obiektów niebieskich, aby **przypiąć** je jako znaczniki na mapie z aktualizacjami pozycji na żywo lub **udostępnić** współrzędne do grupowego obserwowania gwiazd.

Ta funkcja pomaga identyfikować obiekty na prawdziwym niebie, planować obserwacje i uczyć się faktów astronomicznych bezpośrednio z OsmAnd.


## Znajdowanie gwiazd w AR (Tryb aparatu)

**Przejdź do:** *Włączona wtyczka → Menu → Mapa gwiazd → Przycisk aparatu* 

Warstwa **Star Watcher** współpracuje z **aparatem urządzenia**, aby umożliwić **obserwacje gwiazd w rzeczywistości rozszerzonej (AR)**. Skieruj kamerę telefonu na prawdziwe nocne niebo i zobacz gwiazdy, planety, gwiazdozbiory, nakładki Słońca/Księżyca w czasie rzeczywistym.


**Jak działa znajdowanie gwiazd w AR:**
- **Widok na żywo z aparatu** pokazuje prawdziwe niebo z przezroczystymi nakładkami astronomicznymi wyrównanymi do horyzontu/kompasu
- **Poruszaj kamerą**, aby skanować niebo — obiekty są podświetlane, gdy pojawiają się w Twoim polu widzenia
- **Dotknij podświetlonych obiektów**, aby zobaczyć azymut, wysokość, jasność, czasy wschodu/zachodu oraz link do Wikipedii
- **Kalibracja kompasu** wymagana dla dokładnego wyrównania (machnij telefonem w kształcie ósemki, jeśli potrzeba)

**Idealne do:**
- Identyfikacji słabych gwiazd/planet niewidocznych gołym okiem
- Lokalizowania gwiazdozbiorów przez poruszanie telefonem po niebie
- Nawigacji po niebie w czasie rzeczywistym podczas wędrówek lub kempingu


## Ustawienia Star Watcher

*Menu główne → Wtyczki → Mapa gwiazd → Przycisk ⚙️*

Wybierz widoczne warstwy i obiekty

### Warstwy gwiazd

Wszystkie dane astronomiczne pojawiają się jako nakładki mapy, widoczne w skalach powiększenia 5-15. Warstwy projektują sferę niebieską na płaską mapę.

| Warstwa | Opis |
|---------|------|
| Gwiazdy | Jasne gwiazdy (do jasności 4-6) z etykietami i liniami gwiazdozbiorów |
| Gwiazdozbiory | Łączy gwiazdy w znajome wzory, takie jak Orion lub Wielka Niedźwiedzica |
| Planety | Pozycje i dzienne ścieżki dla Merkurego-Wenus-Marsa-Jowisza-Saturna (kolorowe ikony) |
| Słońce i Księżyc | Łuki pokazujące czasy wschodu/zachodu i fazę oświetlenia |
| Horyzont | Linia oddzielająca widoczne niebo od ziemi, z kierunkami kardynalnymi |


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style map)](../../user/map/vector-maps.md)