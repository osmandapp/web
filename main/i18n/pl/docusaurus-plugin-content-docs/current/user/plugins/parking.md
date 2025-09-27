---
source-hash: c5522cf3c673aa4af3738c22a0afc948910a5af511d7468ae41a34b1784474ea
sidebar_position: 12
title:  Pozycja parkowania
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Przegląd {#overview}

Wtyczka **Pozycja parkowania** pomaga zapisywać i zarządzać lokalizacją, w której zaparkowałeś samochód. Umożliwia umieszczenie znacznika na mapie, śledzenie czasu parkowania i opcjonalnie ustawienie przypomnienia w kalendarzu o zakończeniu czasu parkowania.

Ta wtyczka jest bezpłatna i działa w trybie offline z pobranymi mapami OsmAnd. Możesz szybko zlokalizować zaparkowany pojazd, oszacować odległość do niego pieszo i w razie potrzeby udostępnić lokalizację parkingu.

- Możesz dodać miejsce parkingowe ręcznie za pomocą menu kontekstowego.
- W przypadku ograniczenia czasowego wtyczka rejestruje zarówno czas rozpoczęcia, jak i zakończenia.
- Czas zakończenia może wywołać przypomnienie w kalendarzu urządzenia.
- Szczegóły parkowania można później wyświetlić lub wykorzystać do nawigacji.

Znacznik jest tymczasowy i łatwy do usunięcia, gdy nie jest już potrzebny.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet Parking Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet Parking iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## Wymagane parametry konfiguracyjne {#required-setup-parameters}

Aby korzystać z miejsca parkingowego na mapie, należy dokonać następujących ustawień:

1. Włącz [wtyczkę Pozycja parkowania](../plugins/index.md#enable--disable) z *Menu główne → Wtyczki*.
2. Ustaw [miejsce parkingowe](#set-a-spot) na mapie za pomocą menu kontekstowego.
3. (Opcjonalnie) Dodaj [widżet Parking](#parking-widget) do ekranu, aby mieć do niego szybszy dostęp.


## Miejsce parkingowe na mapie {#parking-spot-on-the-map}

Gdy zaznaczysz miejsce parkingowe, OsmAnd zapisze jego współrzędne geograficzne wraz ze znacznikiem czasu. W razie potrzeby można również dodać limit czasowy i przypomnienie w kalendarzu.


### Ustawianie miejsca {#set-a-spot}

Aby ustawić miejsce parkingowe na mapie, powiększ mapę do wymaganego poziomu, a następnie długo dotknij miejsca na mapie i w otwartym [menu kontekstowym](../map/map-context-menu.md) dokonaj ustawień.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawianie miejsca parkingowego w systemie Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Ustawianie limitów czasowych w systemie Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wybór parkingu w Akcjach w systemie iOS](@site/static/img/plugins/parking/ios_set_p_point2.png)  ![Ustawianie punktu parkingowego w systemie iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Aby umieścić znacznik parkingu, powiększ mapę, naciśnij i przytrzymaj wymaganą lokalizację, a następnie otwórz [menu kontekstowe](../map/map-context-menu.md). Następnie:

1. Dotknij [Akcje](../map/map-context-menu#actions).
2. Wybierz **Oznacz jako miejsce parkingowe** (*Android*) lub **Dodaj miejsce parkingowe** (*iOS*).
3. Wybierz jedną z dostępnych opcji:
   - **Bez limitu czasu** – dodaje podstawowy znacznik bez odliczania.
   - **Parking z limitem czasu** – pozwala ustawić czas zakończenia i opcjonalnie utworzyć przypomnienie w kalendarzu urządzenia.
4. Potwierdź, aby umieścić znacznik. Czas rozpoczęcia jest zapisywany automatycznie.

:::info Czas rozpoczęcia
Czas rozpoczęcia jest zawsze ustawiany automatycznie. Jeśli chcesz zmienić czas zakończenia, musisz usunąć i ponownie utworzyć miejsce parkingowe. Przypomnienia są dodawane do kalendarza tylko wtedy, gdy wybrano tę opcję podczas konfiguracji.
:::


### Bądź na bieżąco {#stay-informed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widżet Parking Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Pozostały czas w systemie Android](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widżet Parking iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![Informacje o parkowaniu w systemie iOS](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

Po zapisaniu miejsca parkingowego OsmAnd pomaga monitorować jego lokalizację i czas za pomocą menu kontekstowego lub opcjonalnego [widżetu Parking](#parking-widget).

Możesz wyświetlić znacznik parkingu, pomniejszając mapę lub dotykając **widżetu Parking**, który wyśrodkowuje mapę na zapisanym miejscu. Widżet pokazuje również odległość od bieżącej pozycji (lub środka mapy) do lokalizacji parkingu.

Dodatkowe szczegóły są wyświetlane po dotknięciu znacznika parkingu:

- **Czas rozpoczęcia** – moment umieszczenia znacznika.
- **Pozostały czas** lub **Czas przekroczony** – jeśli ustawiono limit czasu, pokazuje, ile czasu pozostało lub upłynęło od jego wygaśnięcia.
- Jeśli włączono przypomnienie w kalendarzu, pojawi się ono w aplikacji kalendarza urządzenia.


### Nawigacja do punktu trasy {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kierowanie do punktu parkingowego w systemie Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kierowanie do punktu parkingowego w systemie iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

Możesz użyć miejsca parkingowego jako celu nawigacji, aby łatwo wrócić do pojazdu. OsmAnd oferuje dwa główne sposoby rozpoczęcia nawigacji do zapisanej lokalizacji parkingu:

**Przez menu Nawigacja**:

  1. Dotknij przycisku **Nawigacja**.
  2. Wybierz profil.
  3. Dotknij **Ustaw cel** i wybierz **Parking** z listy zapisanych punktów.

**Przez widżet Parking**:

  1. Dotknij **widżetu Parking**.
  2. Dotknij znacznika miejsca parkingowego.
  3. Wybierz **Nawigacja** i wybierz profil, którego chcesz użyć.


### Usuwanie miejsca {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Akcja Usuń parking w systemie Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png) -->
  
![Akcja Usuń parking w systemie iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Aby usunąć znacznik parkingu:

1. Zlokalizuj miejsce parkingowe na mapie lub dotknij **widżetu Parking**.
2. Dotknij znacznika, aby otworzyć menu kontekstowe.
3. Wybierz **Usuń** lub **Odrzuć**.

Jeśli ustawiono przypomnienie w kalendarzu, zostanie ono również automatycznie usunięte.


## Widżet Parking {#parking-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Wybierz panel → Dodaj widżet → <Translate android="true" ids="map_widget_parking"/>*

![Dodawanie widżetu Parking w systemie Android](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Wybierz panel → Dodaj widżet → <Translate ios="true" ids="parking_place"/>*

![Dodawanie widżetu Parking w systemie iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

[Widżet Parking](../widgets/info-widgets.md#parking-widget) pokazuje odległość od środka ekranu do zapisanej lokalizacji parkingu i pozwala szybko wyśrodkować mapę w tym miejscu.

- Widżet jest widoczny dopiero po ustawieniu pozycji parkowania.
- Jeśli nie ma go jeszcze na ekranie, możesz go dodać za pomocą menu [Konfiguruj ekran](../widgets/configure-screen.md).

Aby dowiedzieć się więcej, zobacz: [Widżety informacyjne – Widżet Parking](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style map)](../../user/map/vector-maps.md)