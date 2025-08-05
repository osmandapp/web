---
source-hash: e35d8bb8c463024a373522c4e8114cf2ea9c85d3dca5ea142e9e2507d2330c58
sidebar_position: 3
title: Menu główne
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

## Przegląd {#overview}

**Menu główne** to podstawowa lista opcji dostępnych w aplikacji. Zapewnia szybki dostęp do konfiguracji profilu, ustawień globalnych, wyszukiwania, danych osobowych, nawigacji i innych funkcji.

Ikona [Menu głównego](../widgets/map-buttons.md#main-menu) „&#8801;” znajduje się w lewym dolnym rogu ekranu mapy. W trybie nawigacji ten przycisk nie jest domyślnie widoczny. Pojawia się po krótkim dotknięciu mapy.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu główne Android](@site/static/img/menu/main_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu główne iOS](@site/static/img/menu/main_menu_ios.png)

</TabItem>

</Tabs>

## Menu główne (menu boczne) {#main-menu-side-menu}

### Funkcje {#features}

- [Znaczniki mapy](../personal/markers.md) to narzędzie, które pozwala zaznaczyć miejsce na mapie.
- [Moje miejsca](../personal/myplaces.md) to menu, które domyślnie zawiera Ulubione i ślady, a dodatkowo może zawierać [notatki A/V](../plugins/audio-video-notes.md) i [edycje OSM](../plugins/osm-editing.md) (jeśli takie wtyczki są włączone).
- [Szukaj](../search/index.md) (Android) to narzędzie, które pozwala znaleźć miejsce lub obiekt istniejący na mapie.
- Przycisk [Wskazówki dojazdu](../widgets/map-buttons.md#directions) pozwala utworzyć trasę i rozpocząć nawigację.
- [Konfiguruj mapę](../map/configure-map-menu.md) to menu, które pozwala skonfigurować widok mapy.
- [Pobierz mapy](../start-with/download-maps.md) to menu, które zawiera wszystkie pliki, które można pobrać.
- [Przewodniki turystyczne (Beta)](../plan-route/travel-guides.md) (*Android*) to narzędzie, które pozwala korzystać z przewodnika Wikivoyage podczas podróży.
- [Planuj trasę](../plan-route/create-route.md) to narzędzie, które pozwala mierzyć odległości na mapie, tworzyć ślady GPX lub dodawać nowe segmenty do istniejących.
- [* Nagrywanie podróży](../plugins/trip-recording.md) (*Android*) to narzędzie, które pozwala nagrywać wszystkie ruchy w śladzie za pomocą GPS telefonu.

### Ustawienia {#settings}

- [Konfiguruj ekran](../widgets/configure-screen.md) to menu, które pozwala skonfigurować wyświetlanie widżetów na mapie.
- [Wtyczki](../plugins/index.md#configure-plugin) to lista dodatkowych funkcji i zaawansowanych ustawień.
- [Ustawienia](../personal/global-settings.md) to menu, które pozwala skonfigurować główne parametry aplikacji.
- [Pomoc](./first-steps.md#offline-help) zapewnia szybki dostęp do przewodnika, informacji o wersji aplikacji i pozwala szybko skontaktować się z zespołem programistów.

### Aktywny profil (Android) {#active-profile-android}

*Menu główne* zapewnia szybki dostęp do przełączania i [dostosowywania profilu](../personal/profiles.md). Głównym celem profili jest posiadanie innego wyglądu i działania aplikacji dla nawigacji. Można jednak użyć go do dostosowania ekranu i widżetów oraz przełączania profili dla różnych celów widoku. Wszystkie [ustawienia](../personal/profiles.md) są konfigurowane oddzielnie dla każdego profilu.

![menu_profilu](@site/static/img/menu/profile_menu.png)

W tym menu można **przełączyć** aktywny profil, **skonfigurować** (zmienić ustawienia) dla aktywnego profilu lub **zarządzać** wszystkimi profilami aplikacji.

### Dostosuj (zaawansowane użycie Androida) {#customize-advanced-use-of-android}

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,shared_string_drawer"/> → &#65049; → Włącz*.

![Elementy menu szuflady ](@site/static/img/settings/drawer_menu_correct.png)

- To menu pozwala zmieniać kolejność, ukrywać lub pokazywać elementy z [Szuflady](../personal/profiles.md#drawer), kopiować listę elementów z innego profilu i resetować ustawienia domyślne.

- Przycisk *Minus* usuwa element z *Menu głównego* w szufladzie i przenosi go do sekcji *Ukryte*. Przycisk *Przenieś* zmienia pozycję wybranego elementu na liście.

- Elementy przeniesione do sekcji *Ukryte* nie są wyświetlane w menu Szuflady, ale wszystkie opcje, ustawienia lub wtyczki z tej listy nadal działają. Możesz przywrócić elementy, dotykając zielonego przycisku po lewej stronie ich nazw.
  ![Ukryte elementy menu szuflady ](@site/static/img/settings/drawer_menu_hidden_items.png)

> *Ostatnia aktualizacja: lipiec 2022*