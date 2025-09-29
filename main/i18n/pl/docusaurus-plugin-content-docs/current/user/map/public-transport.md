---
source-hash: c08c6419ce4eb37eaeeedc1186f95e9b81ac6219dcfadc6455d0a16f81b7bdd4
sidebar_position: 10
title:  Transport publiczny
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Przegląd {#overview}

Transport publiczny to dodatkowa warstwa, która pozwala wyświetlać na mapie trasy i przystanki transportu publicznego, sprawdzać szczegółowe informacje na ich temat oraz nawigować.

## Przystanki transportu publicznego (warstwa) {#transport-stops-layer}

Włącz/Wyłącz warstwę transportu publicznego:

**<Translate android="true" ids="android_button_seq"/>:** *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

**<Translate ios="true" ids="ios_button_seq"/>:** *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

![Warstwa transportu publicznego Android](@site/static/img/map/pt_layer_android.png) ![Warstwa transportu publicznego iOS](@site/static/img/map/pt_layer_ios.png)

Wybierz jedną lub więcej kategorii transportu do wyświetlenia:

- <Translate android="true" ids="rendering_attr_transportStops_name"/>
- <Translate android="true" ids="rendering_attr_publicTransportMode_name"/>
- <Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>
- <Translate android="true" ids="rendering_attr_subwayMode_name"/>

[Czytaj więcej](../map/vector-maps.md#transport) o tym, jak transport jest wyświetlany na mapie.


## Trasy transportu publicznego (menu kontekstowe) {#transport-routes-context-menu}

![Menu trasy transportu publicznego Android](@site/static/img/map/pt_routemenu_android.png) ![Menu trasy transportu publicznego iOS](@site/static/img/map/pt_routemenu_ios.png)

Aby otworzyć menu Transport, możesz dotknąć ikony transportu. Wyświetla ono:

- Kolorowe tarcze transportu publicznego (**klikalne**)
- [Lista tras](#routes) zatrzymujących się na tym przystanku lub w pobliżu (w promieniu 150 m)
- Nazwa przystanku i inne [szczegóły](#transport-stop-details)

### Szczegóły przystanku {#transport-stop-details}

![Szczegóły menu trasy transportu publicznego Android](@site/static/img/map/pt_routemenu_details_android.png) ![Szczegóły menu trasy transportu publicznego iOS](@site/static/img/map/pt_routemenu_details_ios.png)

Przystanek transportu publicznego dostarcza dodatkowych szczegółów w porównaniu ze standardowym [menu](../map/map-context-menu.md#details) obiektu OpenStreetMap:

- Obecność ławki
- Obecność zadaszenia
- Dostępność dla wózków inwalidzkich
- Nazwa operatora

**Uwaga**: możesz filtrować przystanki według określonych kryteriów. Na przykład rozwiń i dotknij "Ławka" / "Tak", a zobaczysz listę przystanków z ławkami. Mogą być one również [pokazane na mapie](../map/point-layers-on-map.md#points-of-interest-pois).


### Trasy {#routes}

![Trasy transportu publicznego Android](@site/static/img/map/pt_routes_android.png) ![Trasy transportu publicznego iOS](@site/static/img/map/pt_routes_ios.png)

Trasy transportu publicznego to wszystkie trasy transportu publicznego, które dojeżdżają przez wybrany przystanek oraz trasy w pobliżu (w promieniu 150 m). Informacje o trasach pochodzą z [danych OpenStreetMap](https://wiki.openstreetmap.org/wiki/Public_transport), takie jak numer, nazwa, kolor i typ.

**Kolor tarczy**:

- Metro - własny kolor linii
- Kolej - brązowy
- Autobus i inne - czerwony
- Tramwaj - niebieski
- Trolejbus - fioletowy

### Przeglądaj trasę {#browse-route}

![Lista tras transportu publicznego Android](@site/static/img/map/pt_route_list_android.png)  ![Lista tras transportu publicznego iOS](@site/static/img/map/pt_route_list_ios.png)

Możesz wejść do menu Przeglądaj trasę, **klikając tarczę** lub **wybierając trasę** z listy tras. Następnie możesz przeglądać przystanki, klikając „<Translate android="true" ids="shared_string_previous"/>” i „<Translate android="true" ids="shared_string_next"/>”. Informacje o przystanku zostaną zaktualizowane w menu, a przystanek zostanie zlokalizowany na mapie.

Możesz zobaczyć pełną listę przystanków, klikając <Translate android="true" ids="rendering_category_details"/>. Aktualnie wybrany przystanek jest oznaczony ikoną „lokalizacji” na liście tras.

> **UWAGA**: *Jeśli dotkniesz przycisku <Translate android="true" ids="get_directions"/>, otrzymasz trasę z bieżącej lokalizacji do wybranego przystanku transportu publicznego.*


## Powiązane artykuły {#related-articles}

- [Mapy wektorowe](../map/vector-maps.md)
- [Nawigacja transportem publicznym](../navigation/routing/public-transport-navigation.md)