---
source-hash: 1089ba9ce4a9f9d1985bccd4ba5ebfe5e0e35eb8437bb1a83fe1c4859bf5a769
sidebar_position: 10
title: Transport publiczny
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Przegląd {#overview}

Transport publiczny to dodatkowa warstwa, która umożliwia wyświetlanie tras i przystanków transportu na mapie, sprawdzanie szczegółowych informacji o nich oraz nawigację.

## Przystanki transportu (warstwa) {#transport-stops-layer}

Włącz/wyłącz warstwę transportu publicznego:

**<Translate android="true" ids="android_button_seq"/>:** *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

**<Translate ios="true" ids="ios_button_seq"/>:** *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

![Warstwa transportu publicznego Android](@site/static/img/map/pt_layer_android.png) ![Warstwa transportu publicznego iOS](@site/static/img/map/pt_layer_ios.png)

Wybierz 1 lub więcej kategorii transportu do wyświetlania:

- <Translate android="true" ids="rendering_attr_transportStops_name"/>
- <Translate android="true" ids="rendering_attr_publicTransportMode_name"/>
- <Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>
- <Translate android="true" ids="rendering_attr_subwayMode_name"/>

[Przeczytaj więcej](../map/vector-maps.md#transport) o tym, jak transport jest wyświetlany na mapie.


## Trasy transportu (menu kontekstowe) {#transport-routes-context-menu}

![Menu tras transportu publicznego Android](@site/static/img/map/pt_routemenu_android.png) ![Menu tras transportu publicznego iOS](@site/static/img/map/pt_routemenu_ios.png)

Aby otworzyć menu transportu, możesz dotknąć ikony transportu. Wyświetla ono:

- Kolorowe tarcze transportu publicznego (**kliknięcie**)
- [Listę tras](#routes) zatrzymujących się na tym przystanku lub w pobliżu (w promieniu 150 m)
- Nazwę przystanku i inne [szczegóły](#transport-stop-details)

### Szczegóły przystanku transportu {#transport-stop-details}

![Szczegóły menu tras transportu publicznego Android](@site/static/img/map/pt_routemenu_details_android.png) ![Szczegóły menu tras transportu publicznego iOS](@site/static/img/map/pt_routemenu_details_ios.png)

Przystanek transportu publicznego dostarcza dodatkowych szczegółów w porównaniu do standardowego menu obiektu OpenStreetMap [menu](../map/map-context-menu.md#details):

- Obecność ławki
- Obecność zadaszenia
- Dostępność dla wózków inwalidzkich
- Nazwa operatora

**Uwaga**: możesz filtrować przystanki według określonych kryteriów. Na przykład, rozwiń i dotknij "Ławka" / "Tak", a zobaczysz listę przystanków z ławkami. Mogą one również być [pokazane na mapie](../map/point-layers-on-map.md#points-of-interest-pois).


### Trasy {#routes}

![Trasy transportu publicznego Android](@site/static/img/map/pt_routes_android.png) ![Trasy transportu publicznego iOS](@site/static/img/map/pt_routes_ios.png)

Trasy transportu to wszystkie trasy transportu publicznego, które zbliżają się do wybranego przystanku oraz trasy w pobliżu (w promieniu 150 m). Informacje o trasach pochodzą z [danych OpenStreetMap](https://wiki.openstreetmap.org/wiki/Public_transport), takich jak ref, nazwa, kolor i typ.

**Kolor tarczy**:

- Metro - własna linia kolorów
- Kolej - brązowy
- Autobus i inne - czerwony
- Tramwaj - niebieski
- Trolejbus - fioletowy

### Przeglądaj trasę {#browse-route}

![Lista tras transportu publicznego Android](@site/static/img/map/pt_route_list_android.png) ![Lista tras transportu publicznego Android](@site/static/img/map/pt_route_list_ios.png)

Możesz wejść do menu Przeglądaj trasę, **klikając na tarczę** lub **wybierając trasę** z listy tras. Następnie możesz przeglądać przystanki, klikając '<Translate android="true" ids="shared_string_previous"/>' i '<Translate android="true" ids="shared_string_next"/>'. Informacje o przystanku zostaną zaktualizowane w menu, a przystanek zostanie zlokalizowany na mapie.

Pełną listę przystanków możesz zobaczyć, klikając <Translate android="true" ids="rendering_category_details"/>. Aktualnie wybrany przystanek jest oznaczony ikoną „lokalizacji” na liście tras.

> **UWAGA**: *Jeśli dotkniesz przycisku <Translate android="true" ids="get_directions"/>, uzyskasz trasę z Twojej bieżącej lokalizacji do wybranej stacji transportu publicznego.*


## Powiązane artykuły {#related-articles}

- [Mapy wektorowe](../map/vector-maps.md)
- [Nawigacja transportem publicznym](../navigation/routing/public-transport-navigation.md)

> *Ostatnia aktualizacja: sierpień 2022*