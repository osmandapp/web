---
source-hash: 4db0114e42759ddaed0f65e43eed0a9d1c7cdaa964a48ca19d502843f4cd2bf1
sidebar_position: 1
title:  Ułatwienia dostępu
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
Wtyczka Ułatwienia dostępu jest dostępna tylko w wersji OsmAnd na **Androida**. [Wersja na iOS](#how-to-use-ios) opiera się na domyślnych ustawieniach ułatwień dostępu systemu.
:::

## Przegląd {#overview}

Ułatwienia dostępu poprawiają użyteczność dla użytkowników niewidomych i niedowidzących dzięki integracji z narzędziami [Ułatwienia dostępu Androida](https://www.android.com/accessibility/). Wtyczka oferuje **zamianę tekstu na mowę, sterowanie gestami, automatyczne komunikaty** i **sygnały haptyczne**, aby nawigacja była bardziej dostępna. W systemie iOS OsmAnd wykorzystuje wbudowane funkcje ułatwień dostępu firmy Apple, takie jak VoiceOver.


### Jak używać (Android) {#how-to-use-android}

![Ułatwienia dostępu](@site/static/img/plugins/Accessibility/access_turned_off.png)

***Włącz wtyczkę Ułatwienia dostępu:***  

1. **Aktywuj wtyczkę**: *Menu → Wtyczki → Ułatwienia dostępu → Włącz*.

2. **Włącz tryb ułatwień dostępu**:  
   - Przejdź do *Ustawienia systemowe → Ułatwienia dostępu* na swoim urządzeniu z Androidem.
   - Włącz TalkBack lub inny czytnik ekranu.

3. **Dostosuj ustawienia wtyczki**:  
   - Otwórz [Ustawienia ułatwień dostępu](#plugin-settings) w aplikacji OsmAnd.
   - Skonfiguruj funkcje, takie jak szybkość mowy, automatyczne komunikaty i sygnały haptyczne.

<br/>

***Cechy i funkcjonalność:***

- **Sterowanie gestami**:
   - Obsługuje wszystkie standardowe [gesty OsmAnd](../map/interact-with-map.md#gestures).
   - Dostosowuje gesty do instrukcji **TalkBack** systemu Android.

- **Integracja z TalkBack**:
   - Czytnik ekranu TalkBack oferuje wskazówki dźwiękowe dotyczące nawigacji i interakcji z menu.
   - Dowiedz się więcej o gestach TalkBack [tutaj](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- **Działanie w tle**. Sygnały dźwiękowe i haptyczne działają nawet wtedy, gdy ekran jest wyłączony lub zablokowany.

- **Działania przycisku Kompas**:

| Gest | Akcja | Odpowiednik w TalkBack |
|-----|-----|-----|
| **Pojedyncze dotknięcie** | Obraca mapę na **Północ** | **Podwójne dotknięcie** |
| **Długie dotknięcie** | Otwiera listę [orientacji mapy](../map/interact-with-map.md#map-orientation-modes) | **Podwójne dotknięcie i przytrzymanie** |
| **Podwójne dotknięcie** | *Niedostępne w trybie ułatwień dostępu* | *Nieobsługiwane* |


### Jak używać (iOS) {#how-to-use-ios}

Wersja OsmAnd na iOS wykorzystuje **wbudowane w system narzędzia ułatwień dostępu**.

1. **Włącz VoiceOver**:
   - Przejdź do *Ustawienia → Dostępność → VoiceOver*.
   - Skonfiguruj **gesty VoiceOver** do użytku z OsmAnd.

2. **Obsługiwane funkcje**:
   - **Obsługa czytnika ekranu** dla interakcji z mapą.
   - **Konfigurowalne gesty** poprzez ustawienia iOS.
   - Dostępne są wszystkie standardowe [gesty OsmAnd](../map/interact-with-map.md#gestures).

3. **Dowiedz się więcej**:
   - Przeczytaj o funkcjach ułatwień dostępu dla wzroku w iOS [tutaj](https://www.apple.com/accessibility/vision/).
   - Poznaj gesty VoiceOver dla iPhone'a [tutaj](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios).


## Wymagane parametry konfiguracyjne {#required-setup-parameters}

Aby aktywować funkcje ułatwień dostępu urządzenia w OsmAnd, należy wprowadzić następujące ustawienia:

1. **Włącz** [wtyczkę Ułatwienia dostępu](../plugins/index.md#enable--disable): *Menu → Wtyczki → Ułatwienia dostępu → Włącz*.  
2. **Włącz tryb ułatwień dostępu** na swoim urządzeniu.
3. Skonfiguruj [ustawienia](#plugin-settings) wtyczki Ułatwienia dostępu.


## Ustawienia wtyczki {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Ułatwienia dostępu](@site/static/img/plugins/Accessibility/access_.png)  

Wtyczka Ułatwienia dostępu oferuje różne ustawienia personalizacji nawigacji i interakcji dla użytkowników z niepełnosprawnościami. Ustawienia te są stosowane dla każdego [profilu](../personal/profiles.md) w OsmAnd.

| Ustawienie                   | Opis |  
|---------------------------|-------------|  
| **Tryb ułatwień dostępu**    | Włącza *wbudowane funkcje OsmAnd* lub używa **ustawień systemowych**. |  
| **Szybkość mowy**           | Kontroluje *szybkość zamiany tekstu na mowę* w zakresie od **50% do 200%**. |  
| [Inteligentne automatyczne komunikaty](#smart-autoannounce-and-clockwise-directions)    | Zapewnia *wskazówki głosowe* w przypadku zboczenia z trasy. |  
| **Okres automatycznych komunikatów**   | Ustawia minimalny czas między komunikatami, od **5 sekund do 5 minut**. |  
| **Styl kierunku**       | Wybierz pomiędzy *Na boki (8 kierunków)* lub [Zegarowe](#smart-autoannounce-and-clockwise-directions) (12 kierunków)*. |  
| **Kierunki dźwiękowe**      | Odtwarza *wskazówki dźwiękowe* wskazujące kierunek. |  
| **Kierunki haptyczne**     | Zapewnia *informacje zwrotne w postaci wibracji* przy skrętach i odchyleniach od trasy.|  

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

***Wskazówki dotyczące zoptymalizowanych ułatwień dostępu:***

- **Czytnik ekranu** - Użyj TalkBack (*Android*) lub VoiceOver (*iOS*) dla lepszej interakcji z mapą.
- **Nawigacja dźwiękowa** - Włącz automatyczne komunikaty, aby otrzymywać wskazówki głosowe, gdy ekran jest wyłączony.
- **Sygnały haptyczne** - Idealne w warunkach słabej widoczności lub gdy wskazówki dźwiękowe są niepraktyczne.


### Inteligentne automatyczne komunikaty i kierunki zegarowe {#smart-autoannounce-and-clockwise-directions}

Funkcja **Inteligentne automatyczne komunikaty** zapewnia *powiadomienia dźwiękowe*, gdy zboczysz z zaplanowanej trasy, podczas gdy **Styl kierunku zegarowego** oferuje *wskazówki nawigacyjne oparte na tarczy zegara*. Funkcje te mają na celu wspieranie użytkowników niedowidzących, którzy polegają na *wskazówkach głosowych*.  

- Jeśli **TalkBack nie jest włączony**, zarówno *Inteligentne automatyczne komunikaty*, jak i *Kierunki zegarowe* będą wyświetlać tylko *powiadomienia tekstowe* na ekranie.  

- **Powiadomienia głosowe** są aktywowane tylko wtedy, gdy *TalkBack* jest włączony w **ustawieniach systemowych urządzenia**.  

- Ustaw **Okres automatycznych komunikatów** (np. *10 sekund*), aby kontrolować częstotliwość komunikatów.


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style mapy)](../../user/map/vector-maps.md)