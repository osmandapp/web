---
source-hash: 99f4f132ee5c0b6fd48949f2e16d91c53267fa3ebef0498549f074e425034b5d
sidebar_position: 4
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


# Android 5.4 {#android-54}



## Dołącz do wersji beta {#join-beta}

OsmAnd codziennie udostępnia kilka gotowych do użycia kompilacji, co pozwala śledzić nowe funkcje i uczestniczyć w procesie tłumaczenia OsmAnd. Możesz wziąć udział w testowaniu wersji beta OsmAnd za pomocą Google Play.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>


## Co nowego {#whats-new}

- Ulepszone **[Ulubione](https://osmand.net/docs/user/personal/favorites)** z obsługą załączników multimedialnych (zdjęcia, audio i wideo) oraz ulepszoną integracją notatek audio/wideo.
- Ulepszone **[widżety nawigacyjne](https://osmand.net/docs/user/widgets/nav-widgets)** z bardziej elastycznym rozmiarem i dostosowaniem układu do różnych gęstości i orientacji ekranu.
- Dodano legendę mapy do **[Konfiguruj mapę](https://osmand.net/docs/user/map/configure-map-menu)**, aby lepiej zrozumieć typy tras i elementy mapy.
- Ulepszone filtrowanie tras i kontrola wizualna w **[Konfiguruj mapę](https://osmand.net/docs/user/map/configure-map-menu)**, w tym klasyfikacje tras i priorytety.
- Ulepszona analiza śladów z nowymi typami wykresów i bardziej szczegółowymi danymi, takimi jak nawierzchnia, typ drogi i nachylenie.
- Ulepszone zarządzanie śladami z podglądami i lepszą organizacją w **[Moich miejscach](https://osmand.net/docs/user/personal/myplaces)**.
- Automatyczny backup i bardziej niezawodna synchronizacja danych użytkownika w **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)**, w tym **[Inteligentne foldery](https://osmand.net/docs/user/personal/tracks/smart-folder)**.
- Wstępne ulepszenia nawigacji morskiej z ulepszeniami AIS oraz dodatkowymi parametrami i widżetami nawigacyjnymi.
- Ulepszone doświadczenie **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** dzięki ulepszonemu wyszukiwaniu i elementom sterującym nawigacji.
- Dodano możliwość interakcji z mapą w **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)**, w tym bezpośrednie wybieranie punktów.
- Przeprojektowany **[widżet wysokości](https://osmand.net/docs/user/widgets/nav-widgets#elevation-widget)** z bardziej szczegółowymi informacjami o wysokości trasy.

<!--
- New experimental **[Astronomy plugin](https://osmand.net/docs/user/plugins/astronomy)** with an astronomical overlay showing the paths of the Sun, planets and stars.
- Improved **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** section with clearer backup, version history and automatic backup settings.
- Updated **[Configure map](https://osmand.net/docs/user/map/configure-map-menu)** options with a clearer legend and improved filters for hiking, cycling and MTB routes.
- New and redesigned elevation and navigation widgets with elevation profiles, uphill/downhill metrics and average grade.
- **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** improvements with extended widget support and better OBD II integration.
- More flexible **[widget and map button layout](https://osmand.net/docs/user/widgets/configure-screen#map-screen-layout)**, especially in landscape mode.
- Enhanced Favorites management in **[My Places](https://osmand.net/docs/user/personal/myplaces)**.
- Smarter track organization with Smart Folders and clearer summary statistics.
- Advanced route and track analysis.
- Improved accessibility features, including more flexible audio and haptic navigation feedback.
- Initial groundwork for smartwatch integration for navigation and trip recording data.
-->


## Poprawki błędów {#bug-fixes}

- Naprawiono [problem](https://github.com/osmandapp/OsmAnd/issues/16507), w którym właściwości ulubionych (kolor, ikona, kształt) nie były aktualizowane przy zmianie grupy.
- Naprawiono [nieprawidłowe kierunki zjazdów](https://github.com/osmandapp/OsmAnd/issues/23104) wyświetlane na rondach w Android Auto.
- Poprawiono niedokładne [wartości podjazdów i zjazdów](https://github.com/osmandapp/OsmAnd/issues/20624) w widżetach wysokości.
- Zapobiegnięto [ukrytym ulubionym](https://github.com/osmandapp/OsmAnd/issues/24689) ponownemu pojawianiu się na mapie przy dodawaniu punktów trasy do folderu.
- Rozwiązano [niezgodności między wykresami](https://github.com/osmandapp/OsmAnd/issues/24712) na ekranie Szczegóły.
- Rozwiązano [problem](https://github.com/osmandapp/OsmAnd/issues/24791), w którym odpięte foldery Ulubionych pojawiały się ponownie jako przypięte po ponownym uruchomieniu aplikacji.

<!--
- Improved stability of **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** sync and backup, reducing conflicts and ensuring widgets and settings restore correctly across devices.
- Fixed incorrect uphill/downhill values in elevation widgets and improved accuracy of ascent/descent calculations in route analysis.
- Improved **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** navigation behaviour, including correct exit directions at roundabouts and proper placement of on-screen tools such as the radius ruler.
- Fixed several issues related to **[Accessibility](https://osmand.net/docs/user/plugins/accessibility)** mode, including navigation announcements and interaction with certain map tools.
- General interface and performance fixes across map rendering, widget display and configuration screens.
-->