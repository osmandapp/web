---
source-hash: 72e0583c731b9fa6013d0075ece872e622be90160d3358a8216e374293cf5f00
sidebar_position: 12
title: Pozycja parkowania
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

## Przegląd {#overview}

Wtyczka **Pozycja parkowania** pomaga zapisać i zarządzać lokalizacją, w której zaparkowałeś samochód. Umożliwia umieszczenie znacznika na mapie, śledzenie czasu parkowania i opcjonalne ustawienie przypomnienia w kalendarzu o zakończeniu czasu parkowania.

Ta wtyczka jest darmowa i działa offline z pobranymi mapami OsmAnd. Możesz szybko zlokalizować zaparkowany pojazd, oszacować odległość do niego i w razie potrzeby udostępnić lokalizację parkowania.

- Miejsce parkingowe można dodać ręcznie za pomocą menu kontekstowego.
- Jeśli czas jest ograniczony, wtyczka rejestruje zarówno czas rozpoczęcia, jak i zakończenia.
- Czas zakończenia może wywołać przypomnienie w kalendarzu urządzenia.
- Szczegóły parkowania można później wyświetlić lub wykorzystać do nawigacji.

Znacznik jest tymczasowy i łatwy do usunięcia, gdy nie jest już potrzebny.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Widżet parkowania Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet parkowania iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>

## Wymagane parametry konfiguracji {#required-setup-parameters}

Aby skorzystać z miejsca parkingowego na mapie, należy dokonać następujących ustawień:

1. Włącz [wtyczkę Pozycja parkowania](../plugins/index.md#enable--disable) z *Menu głównego → Wtyczki*.
2. Ustaw [miejsce parkingowe](#set-a-spot) na mapie za pomocą menu kontekstowego.
3. (Opcjonalnie) Dodaj [widżet parkowania](#parking-widget) do ekranu, aby uzyskać szybszy dostęp.

## Miejsce parkingowe na mapie {#parking-spot-on-the-map}

Po zaznaczeniu miejsca parkingowego OsmAnd zapisuje jego współrzędne geograficzne wraz ze znacznikiem czasu. W razie potrzeby można również dodać limit czasu i przypomnienie w kalendarzu.

### Ustawianie miejsca {#set-a-spot}

Aby ustawić miejsce parkingowe na mapie, powiększ do wymaganego poziomu, a następnie długo naciśnij miejsce na mapie i w otwartym [menu kontekstowym](../map/map-context-menu.md) dokonaj ustawień.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Ustawianie miejsca parkingowego w Androidzie](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Ustawianie limitów czasu w Androidzie](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wybieranie parkowania w Akcjach w iOS](@site/static/img/plugins/parking/ios_set_p_point2.png) ![Ustawianie punktu parkowania w iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Aby umieścić znacznik parkowania, powiększ mapę, długo naciśnij wybraną lokalizację i otwórz [menu kontekstowe](../map/map-context-menu.md). Następnie:

1. Naciśnij [Akcje](../map/map-context-menu#actions).
2. Wybierz **Zaznacz jako lokalizację parkowania** (*Android*) lub **Dodaj lokalizację parkowania** (*iOS*).
3. Wybierz jedną z dostępnych opcji:
   - **Bez limitu czasu** – dodaje podstawowy znacznik bez odliczania.
   - **Parkowanie z limitem czasu** – pozwala ustawić czas zakończenia i opcjonalnie utworzyć przypomnienie w kalendarzu urządzenia.
4. Potwierdź, aby umieścić znacznik. Czas rozpoczęcia jest zapisywany automatycznie.

:::info Czas rozpoczęcia
Czas rozpoczęcia jest zawsze ustawiany automatycznie. Jeśli chcesz zmienić czas zakończenia, musisz usunąć i ponownie utworzyć miejsce parkingowe. Przypomnienia są dodawane do kalendarza tylko wtedy, gdy wybrano tę opcję podczas konfiguracji.
:::

### Bądź na bieżąco {#stay-informed}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Widżet parkowania Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Pozostały czas w Androidzie](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet parkowania iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![Informacje o parkowaniu w iOS](@site/static/img/plugins/parking/ios_parking_info.png)

</TabItem>

</Tabs>

Po zapisaniu miejsca parkingowego OsmAnd pomaga monitorować jego lokalizację i czas za pomocą menu kontekstowego lub opcjonalnego [widżetu parkowania](#parking-widget).

Znacznik parkowania można wyświetlić, oddalając mapę lub naciskając **widżet parkowania**, który wyśrodkowuje mapę na zapisanym miejscu. Widżet pokazuje również odległość od bieżącej pozycji (lub środka mapy) do miejsca parkowania.

Dodatkowe szczegóły są wyświetlane po naciśnięciu znacznika parkowania:

- **Czas rozpoczęcia** – moment umieszczenia znacznika.
- **Pozostały czas** lub **Czas po terminie** – jeśli ustawiono limit czasu, pokazuje, ile czasu pozostało lub ile czasu upłynęło od wygaśnięcia.
- Jeśli włączono przypomnienie w kalendarzu, pojawi się ono w aplikacji kalendarza urządzenia.

### Nawigacja do punktu trasy {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Kierowanie do punktu parkowania w Androidzie](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kierowanie do punktu parkowania w iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

Możesz użyć miejsca parkingowego jako celu nawigacji, aby łatwo wrócić do swojego pojazdu. OsmAnd oferuje dwa główne sposoby rozpoczęcia nawigacji do zapisanego miejsca parkingowego:

**Poprzez menu nawigacji**:

1. Naciśnij przycisk **Nawigacja**.
2. Wybierz profil.
3. Naciśnij **Ustaw cel** i wybierz **Parking** z listy zapisanych punktów.

**Poprzez widżet parkowania**:

1. Naciśnij **widżet parkowania**.
2. Naciśnij znacznik miejsca parkingowego.
3. Wybierz **Nawigacja** i wybierz profil, którego chcesz użyć.

### Usuwanie miejsca {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Akcja Usuń parkowanie w Androidzie](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Akcja Usuń parkowanie w Androidzie](@site/static/img/map/context_menu_limited_parking.png) -->

![Akcja Usuń parkowanie w iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Aby usunąć znacznik parkowania:

1. Zlokalizuj miejsce parkingowe na mapie lub naciśnij **widżet parkowania**.
2. Naciśnij znacznik, aby otworzyć menu kontekstowe.
3. Wybierz **Usuń** lub **Odrzuć**.

Jeśli ustawiono przypomnienie w kalendarzu, zostanie ono również automatycznie usunięte.

## Widżet parkowania {#parking-widget}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_parking"/>*

![Dodawanie widżetu parkowania w Androidzie](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="parking_place"/>*

![Dodawanie widżetu parkowania w iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

[Widżet parkowania](../widgets/info-widgets.md#parking-widget) pokazuje odległość od środka ekranu do zapisanego miejsca parkingowego i pozwala szybko wyśrodkować mapę na tym miejscu.

- Widżet jest widoczny tylko po ustawieniu pozycji parkowania.
- Jeśli nie ma go jeszcze na ekranie, można go dodać za pomocą menu [Konfiguruj ekran](../widgets/configure-screen.md).

Aby dowiedzieć się więcej, zobacz: [Widżety informacyjne – Widżet parkowania](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)

## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (style map)](../../user/map/vector-maps.md)

> *Ostatnia aktualizacja: maj 2025*