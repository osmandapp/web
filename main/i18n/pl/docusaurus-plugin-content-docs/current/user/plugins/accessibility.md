---
source-hash: f88b26c81cd85ceae10dd091bfd8f3587782fc1e066bd79fe00de8a7ce769b72
sidebar_position: 1
title: Dostępność
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


:::caution Uwaga
Wtyczka Dostępność jest dostępna tylko w **wersji OsmAnd na Androida**. [Wersja na iOS](#how-to-use-ios) opiera się na domyślnych ustawieniach dostępności systemu.
:::

## Przegląd {#overview}

Dostępność poprawia użyteczność dla niewidomych i niedowidzących użytkowników poprzez integrację z narzędziami [Android Accessibility](https://www.android.com/accessibility/). Wtyczka oferuje **zamianę tekstu na mowę, sterowanie gestami, automatyczne ogłoszenia** i **haptyczne sprzężenie zwrotne**, aby nawigacja była bardziej dostępna. Na iOS, OsmAnd wykorzystuje wbudowane funkcje dostępności Apple, takie jak VoiceOver.


### Jak używać (Android) {#how-to-use-android}

![Dostępność](@site/static/img/plugins/Accessibility/access_turned_off.png)

***Włącz wtyczkę Dostępność:***

1. **Aktywuj wtyczkę**: *Menu → Wtyczki → Dostępność → Włącz*.

2. **Włącz tryb dostępności**:
   - Przejdź do *Ustawień systemowych → Dostępność* na swoim urządzeniu z Androidem.
   - Włącz TalkBack lub inny czytnik ekranu.

3. **Dostosuj ustawienia wtyczki**:
   - Otwórz [Ustawienia dostępności](#plugin-settings) w aplikacji OsmAnd.
   - Skonfiguruj funkcje, takie jak szybkość mowy, automatyczne ogłaszanie i haptyczne sprzężenie zwrotne.

<br/>

***Funkcje i funkcjonalność:***

- **Sterowanie gestami**:
   - Obsługuje wszystkie standardowe [gesty OsmAnd](../map/interact-with-map#gestures).
   - Dostosowuje gesty do instrukcji **TalkBack** Androida.

- **Integracja z TalkBack**:
   - Czytnik ekranu TalkBack oferuje wskazówki dźwiękowe do nawigacji i interakcji z menu.
   - Dowiedz się więcej o gestach TalkBack [tutaj](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- **Operacje w tle**. Dźwięk i haptyczne sprzężenie zwrotne działają nawet, gdy ekran jest wyłączony lub zablokowany.

- **Działania przycisku kompasu**:

| Gest | Akcja | Odpowiednik TalkBack |
|-----|-----|-----|
| **Pojedyncze dotknięcie** | Obraca mapę na **Północ** | **Podwójne dotknięcie** |
| **Długie dotknięcie** | Otwiera listę [orientacji mapy](../map/interact-with-map.md#map-orientation-modes) | **Podwójne dotknięcie i przytrzymanie** |
| **Podwójne dotknięcie** | *Niedostępne w trybie Dostępności* | *Nieobsługiwane* |


### Jak używać (iOS) {#how-to-use-ios}

Wersja OsmAnd na iOS wykorzystuje **wbudowane narzędzia dostępności** systemu.

1. **Włącz VoiceOver**:
   - Przejdź do *Ustawień → Dostępność → VoiceOver*.
   - Skonfiguruj **gesty VoiceOver** do użytku z OsmAnd.

2. **Obsługiwane funkcje**:
   - **Obsługa czytnika ekranu** dla interakcji z mapą.
   - **Konfigurowalne gesty** poprzez ustawienia iOS.
   - Dostępne są wszystkie standardowe [gesty OsmAnd](../map/interact-with-map#gestures).

3. **Dowiedz się więcej**:
   - Przeczytaj o funkcjach dostępności wzrokowej iOS [tutaj](https://www.apple.com/accessibility/vision/).
   - Przeglądaj gesty VoiceOver dla iPhone'a [tutaj](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios).


## Wymagane parametry konfiguracji {#required-setup-parameters}

Aby aktywować funkcje dostępności urządzenia w OsmAnd, należy dokonać następujących ustawień:

1. **Włącz** [wtyczkę Dostępność](../plugins/index.md#enable--disable): *Menu → Wtyczki → Dostępność → Włącz*.
2. **Włącz tryb dostępności** na swoim urządzeniu.
3. Skonfiguruj [ustawienia](#plugin-settings) wtyczki Dostępność.


## Ustawienia wtyczki {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Dostępność](@site/static/img/plugins/Accessibility/access_.png)

Wtyczka Dostępność oferuje różne ustawienia, aby spersonalizować nawigację i interakcję dla użytkowników z niepełnosprawnościami. Ustawienia te są stosowane dla każdego [profilu](../personal/profiles.md) w OsmAnd.

| Ustawienie | Opis |
|---------------------------|-------------|
| **Tryb dostępności** | Włącza *wbudowane funkcje OsmAnd* lub używa **ustawień systemowych**. |
| **Szybkość mowy** | Kontroluje *szybkość zamiany tekstu na mowę*, w zakresie od **50% do 200%**. |
| [Inteligentne automatyczne ogłaszanie](#smart-autoannounce-and-clockwise-directions) | Zapewnia *wskazówki głosowe* w przypadku odchylenia od trasy. |
| **Okres automatycznego ogłaszania** | Ustawia minimalny czas między ogłoszeniami, od **5 sekund do 5 minut**. |
| **Styl kierunku** | Wybierz między *Bocznym (8 kierunków)* lub [Zgodnie z ruchem wskazówek zegara](#smart-autoannounce-and-clockwise-directions) (12 kierunków)*. |
| **Wskazówki dźwiękowe** | Odtwarza *wskazówki dźwiękowe* wskazujące kierunek. |
| **Wskazówki haptyczne** | Zapewnia *wibracyjne sprzężenie zwrotne* dla zakrętów i odchyleń. |

<!--
- **Accessibility Mode**. Enable special tools that help people with disabilities interact with the OsmAnd app. There are three modes: *On* - turns on the built-in OsmAnd features, *Off* - turns off all plugin features, and *According to the Android system settings* - turns on Android system settings.

- **Speech rate**. Adjust the speech rate of the text-to-speech, ranging from 50%  to 200%.

- **Smart autoannounce**. If enabled, you will receive voice announcements when you deviate from the set track.

- **Autoannounce period**. This is an automatic announcement of the direction and distance to your destination. You can select a minimal time between announcements, ranging from 5 seconds to 5 minutes.

- **Direction style**. Choose how the OsmAnd app will notify you about directions. *Sidewise* - indicates the direction to the sides of the world (8 directions), *Clockwise* - indicates directions oriented to the clock face (12 directions).

- **Audio directions**. Provides feedback when navigating by indicating the direction to the target point with sound.

- **Haptic directions**. This setting provides haptic feedback when navigating. The vibration indicates the direction to the target point and deviations from the path.
-->

<br/>

***Wskazówki dotyczące zoptymalizowanej dostępności:***

- **Czytnik ekranu** - Użyj TalkBack (*Android*) lub VoiceOver (*iOS*) dla ulepszonej interakcji z mapą.
- **Nawigacja dźwiękowa** - Włącz automatyczne ogłaszanie, aby otrzymywać wskazówki głosowe, gdy ekran jest wyłączony.
- **Sprzężenie zwrotne haptyczne** - Idealne w warunkach słabej widoczności lub gdy wskazówki dźwiękowe są niepraktyczne.


#### Inteligentne automatyczne ogłaszanie i kierunki zgodne z ruchem wskazówek zegara {#smart-autoannounce-and-clockwise-directions}

Funkcja **Inteligentne automatyczne ogłaszanie** zapewnia *powiadomienia dźwiękowe*, gdy odchylisz się od zaplanowanej trasy, podczas gdy **Styl kierunku zgodny z ruchem wskazówek zegara** oferuje *wskazówki nawigacyjne oparte na tarczy zegara*. Funkcje te zostały zaprojektowane, aby wspierać użytkowników niedowidzących, którzy polegają na *wskazówkach głosowych*.

- Jeśli **TalkBack nie jest włączony**, zarówno *Inteligentne automatyczne ogłaszanie*, jak i *Kierunki zgodne z ruchem wskazówek zegara* będą wyświetlać tylko *powiadomienia tekstowe* na ekranie.

- **Powiadomienia głosowe** są aktywowane tylko, gdy *TalkBack* jest włączony w **ustawieniach systemowych urządzenia**.

- Ustaw **Okres automatycznego ogłaszania** (np. *10 sekund*), aby kontrolować częstotliwość ogłoszeń.


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (style map)](../../user/map/vector-maps.md)

> *Ostatnia aktualizacja: luty 2025*