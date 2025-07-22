---
source-hash: 11f96851fe0f021db695918bd99476a396fc4a1e4d35dc2c02f19b4d9f965751
sidebar_position: 8
title: Wyznaczanie trasy dla łodzi
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Przegląd {#overview}

Wyznaczanie trasy dla łodzi może być cennym narzędziem dla każdego, kto lubi pływać łodzią lub żeglować po kanałach, rzekach lub szlakach wodnych. Ze względu na brak większości szlaków wodnych w danych OpenStreetMap, wyznaczanie trasy dla łodzi *nie jest zalecane* do **nawigacji na otwartych wodach**, zamiast tego sugeruje się użycie **[Bezpośrednio do punktu](#direct-to-point-routing-for-boat)**. Z włączonymi izobatami, może to pomóc w bezpiecznym poruszaniu się po wodzie, unikając zagrożeń, takich jak płytkie wody, skały lub inne przeszkody. Silnik wyznaczania trasy dla łodzi OsmAnd uwzględnia również charakterystykę dróg wodnych i samych łodzi.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ekran nawigacji łodzi Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ekran nawigacji łodzi iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)

</TabItem>

</Tabs>

## Parametry trasy - Łódź {#route-parameters---boat}

:::note
Domyślnie *Profil łodzi* jest wyłączony. Aby użyć tego profilu do wyznaczania trasy, musisz go włączyć w *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Wyznaczanie trasy dla łodzi można skonfigurować zgodnie z własnymi potrzebami w sekcji [Parametry trasy](../../navigation/guidance/navigation-settings.md#route-parameters) w ustawieniach nawigacji.

Zazwyczaj *wyznaczanie trasy dla łodzi* jest używane z profilem łodzi (ostatni włączony wraz z [wtyczką morską](../../plugins/nautical-charts.md)). Możliwe jest jednak użycie wyznaczania trasy dla łodzi również z innymi profilami, a różne [typy wyznaczania trasy](#other-routing-types-for-boat) mogą być również używane w profilu łodzi.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia wyznaczania trasy dla łodzi Android](@site/static/img/navigation/routing/boat_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia wyznaczania trasy dla łodzi iOS](@site/static/img/navigation/routing/boat_routing_ios.png)

</TabItem>

</Tabs>

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Umożliwia korzystanie ze strumieni i rowów melioracyjnych do nawigacji łodzią. Włączenie tej opcji może być przydatne dla małych łodzi, takich jak kajaki, tratwy, łodzie wiosłowe. | [Strumienie](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) to naturalnie uformowane cieki wodne, które są zbyt wąskie, aby nazwać je rzeką. [Rowy melioracyjne](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) to sztuczne cieki wodne, zazwyczaj wyłożone betonem lub podobnym materiałem, używane do odprowadzania nadmiaru wody, takiej jak woda burzowa lub ścieki szare. |
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* | Włączenie tej opcji umożliwia korzystanie z okresowych cieków wodnych do nawigacji łodzią. | Tag [Okresowy](https://wiki.openstreetmap.org/wiki/Key:intermittent) jest używany do wskazania, że ciek wodny nie zawiera wody na stałe. |

:::note Nawigacja wodna i ograniczenia

1. Profil łodzi jest przeznaczony do wyznaczania tras wzdłuż rzek, jezior i innych dróg wodnych. Obsługuje tagi OSM, takie jak:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, itd.

2. Profil łodzi **nie obsługuje tras promowych (`route=ferry`)**. Oznacza to, że trasy promowe, nawet jeśli są obecne na mapie, **nie będą używane** podczas obliczania tras dla łodzi.

3. Aby ręcznie podążać linią promu:

    - Użyj narzędzia [Planuj trasę](../../plan-route/create-route.md) i ręcznie umieść punkty trasy.
    - Użyj profilu Samochód, który obsługuje trasy promowe

:::

## Inne typy wyznaczania trasy dla łodzi {#other-routing-types-for-boat}

Typ [wyznaczania trasy dla łodzi](#route-parameters---boat) jest domyślnym algorytmem wyznaczania trasy dla profilu łodzi. Chociaż możesz wybrać inny typ wyznaczania trasy, który również nadaje się do nawigacji łodzią:

- [Wyznaczanie trasy bezpośrednio do punktu dla łodzi](./boat-navigation.md#direct-to-point-routing-for-boat)
- [Wyznaczanie trasy po linii prostej dla łodzi](./boat-navigation.md#straight-line-routing-for-boat)

Ważne jest, aby pamiętać, że typy wyznaczania trasy *bezpośrednio do punktu* i *po linii prostej* powinny być używane tylko na otwartych wodach, gdzie nie ma przeszkód ani zagrożeń dla nawigacji. Jeśli nawigujesz w cieku wodnym z określonym kanałem lub trasą, powinieneś użyć typu wyznaczania trasy dla łodzi w OsmAnd, który poprowadzi Cię przez prawidłowe kanały nawigacyjne i pozwoli uniknąć płytkich obszarów lub innych zagrożeń.

Te typy wyznaczania trasy dla profilu łodzi można aktywować, korzystając z następującej ścieżki: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> lub inny) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.

### Wyznaczanie trasy bezpośrednio do punktu dla łodzi {#direct-to-point-routing-for-boat}

:::note
Podczas korzystania z typów nawigacji Bezpośrednio do punktu i Łódź, będziesz potrzebować [danych izobat](../../plugins/nautical-charts.md#nautical-map-style), które można włączyć i ustawić w *Konfiguruj mapę*.
:::

Typ [wyznaczania trasy bezpośrednio do punktu](./direct-to-point-routing.md) może być używany z profilem łodzi, gdy chcesz nawigować łodzią na otwartych wodach bez podążania za żadną konkretną trasą lub ciekiem wodnym. Ten typ wyznaczania trasy pozwala ustawić punkt docelowy, a OsmAnd obliczy bezpośrednią ścieżkę do tego punktu z Twojej bieżącej lokalizacji. Ten typ wyznaczania trasy nie uwzględnia charakterystyki Twojej łodzi, takiej jak minimalne i maksymalne prędkości, wysokość i szerokość. Twoja trasa nie zostanie przeliczona w przypadku odchylenia.

![Typ nawigacji bezpośrednio do punktu Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

### Wyznaczanie trasy po linii prostej dla łodzi {#straight-line-routing-for-boat}

Typ [wyznaczania trasy po linii prostej](./straight-line-routing) może być używany z profilem łodzi, gdy chcesz nawigować łodzią na otwartych wodach, ale wolisz podążać linią prostą, a nie zakrzywioną trasą do punktu docelowego. Może to być przydatne podczas nawigacji do odległego punktu, który jest widoczny na horyzoncie, na przykład.

![Typ nawigacji po linii prostej Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)

## Inne ustawienia wyznaczania trasy {#other-routing-settings}

- Algorytm wyznaczania trasy może również uwzględniać tymczasowe ograniczenia określone w OpenStreetMap. Można to zrobić za pomocą opcji *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Należy pamiętać, że w niektórych przypadkach informacje z OSM mogą być nieaktualne.

- W sekcji [*Przelicz trasę*](../../navigation/guidance/navigation-settings.md#recalculate-route) w *Parametrach trasy* można włączyć i dostosować opcje przeliczania trasy.

- W sekcji [*Rozwój*](../guidance/navigation-settings.md#development-settings) w *Parametrach trasy* można wypróbować nowe funkcje wyznaczania trasy, które są obecnie w fazie testów. Należy pamiętać, że te ustawienia są dostępne tylko wtedy, gdy włączona jest [wtyczka deweloperska OsmAnd](../../plugins/development.md).

- Ustawienie *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* w wersji *iOS* OsmAnd znajduje się w *Ustawienia nawigacji → Parametry trasy* (dla *Androida*, w *Parametry pojazdu → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). To ustawienie jest używane na nieznanych drogach bez ograniczeń prędkości. Najczęściej ma to miejsce podczas nawigacji po ścieżce lub trasie online. Musi być ustawione zgodnie z parametrami Twojego pojazdu.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Prawidłowe skonfigurowanie ustawień pomoże uniknąć problemów podczas tworzenia trasy. Możesz wybrać najbardziej odpowiednią trasę w zależności od typu pojazdu i ograniczeń drogowych, a także obliczyć czas podróży.

> *Ostatnia aktualizacja: maj 2025*