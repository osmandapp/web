---
source-hash: 3e1eba0c128d1ad05a1bdb817c7e495e0e8772c3818a05fe0583ef8e6277b1c5
sidebar_position: 5
title:  Schematy kolorów
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


## Przegląd {#overview}

:::info Płatna funkcja

Schematy kolorów są używane jako część płatnych funkcji [Maps+](../purchases/index.md) i Pro <ProFeature />.

:::

Schematy kolorów są używane w [kolorowaniu tras](#routes), [terenie mapy](#terrain) i [mapie pogody](#weather) i są reprezentowane jako oddzielna część informacji, które można eksportować, importować i edytować w celu zmiany schematu kolorów mapy i wizualizacji danych.

Dane palety kolorów są dostępne w menu [*Mapy i zasoby*](../personal/maps-resources.md#local-menu).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *Menu → Mapy i zasoby → Lokalne → Kolory*

![Palety](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *Menu → Mapy i zasoby → Lokalne → Kolory*

![Paleta kolorów](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## Typy schematów {#scheme-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Palety](@site/static/img/personal/color-schemes/palette.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paleta kolorów](@site/static/img/personal/color-schemes/color_altitude.png)

</TabItem>

</Tabs>


### Teren {#terrain}

Pliki terenu (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) definiują 3 [wizualizacje terenu](../plugins/topography.md#hillshade-slope-and-altitude-layers): *Cieniowanie wzgórz, Nachylenie* i *Wysokość*. Dla każdego typu można mieć wiele palet, na przykład domyślnie dostępna jest paleta *nachylenia lawinowego*.

### Trasy {#routes}

Wizualizacje gradientu linii wykorzystują pliki palet (`route_<type_name>_<palette_name>.txt`) do kolorowania śladów GPX i tras:

- Dla [tras](../navigation/guidance/map-during-navigation.md#color): *Prędkość, Nachylenie* i *Wysokość (wysokości)*.
- Dla [śladów GPX](../map/tracks/appearance#track-colors-in-gpx-files): *Prędkość, Nachylenie* i *Wysokość (wysokości) lub informacje z czujników zewnętrznych*.

### Pogoda {#weather}

Pliki palet pogody (`weather_<type_name>.txt`) definiują wizualizację dla [warstw pogodowych](../plugins/weather.md#weather-layers).

### Kolory {#colors}

Paleta kolorów (`user_palette_default.txt`) jest używana do wstępnie zdefiniowanych kolorów przypisywanych do [Ulubionych](./favorites.md) i [Śladów](./tracks/).


## Legenda palety {#palette-legend}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="kolor"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="kolor"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="kolor"/></td>
    </tr>
</table>


Legenda zapewnia łatwy sposób przeglądania i zrozumienia różnych oznaczeń na mapie. Dodano nowe palety kolorów do wyświetlania [**prędkości** dla śladów](../map/tracks/appearance#track-colors-in-gpx-files), [**typu linii** dla tras](../navigation/guidance/map-during-navigation.md#color), [**wysokości i nachylenia** dla terenu](../plugins/topography.md#default-color-scheme) oraz wszystkich palet kolorów [**warstw pogodowych**](../plugins/weather.md#weather-layers).


## Edycja pliku palety {#edit-palette-file}

Możesz edytować palety, aby spersonalizować wygląd map i tras. Własne pliki palet kolorów można dodać do OsmAnd za pomocą narzędzia [importu/eksportu](./import-export.md).

- *Trasy*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_elevation_<type_name>.txt`.
- *Teren*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Pogoda*: `weather_<type_name>.txt`.
- *Kolor*: `user_palette_default.txt`.

Każda linia reprezentuje wartość liczbową (dla palety kolorów jest to indeks) i kolor RGB. Na przykład:

```xml
# TXT file named *height_altitude_0-200.txt* {#txt-file-named-heightaltitude0-200txt}
# 0 - 90 degree RGBA {#0---90-degree-rgba}
0,46,185,0,191
# yellow  {#yellow-}
100,255,222,2,227
# red {#red}
200,255,1,1,255
# violet {#violet}
220,130,1,255,255

```

Po przeniesieniu tego pliku TXT do *..Android/data/net.osmand/files/color-palete/height_altitude_0-200.txt*, nowa paleta pojawi się w menu Schemat kolorów.


## Czytaj więcej {#read-more}

### Szybkie akcje {#quick-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Dodaj akcję → Topografia → Zmień schemat kolorów terenu*

![Schemat kolorów](@site/static/img/widgets/color_scheme.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Dodaj akcję → Topografia → Zmień schemat kolorów terenu*

![Paleta kolorów](@site/static/img/personal/color-schemes/color_scheme_qa_ios.png)

</TabItem>

</Tabs>

**Szybka akcja** do zmiany palety dla terenu. Dodano możliwość przełączania się między schematami kolorów terenu, podobnie jak przełączanie się między warstwami. Można to zrobić za pomocą narzędzia [Szybkie akcje](../widgets/quick-action.md#configure-map).


### Import / Eksport kolorów {#import--export-colors}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Eksport akcji profilu Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png)   ![Lokalna kopia zapasowa Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Eksport akcji profilu iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)    ![Eksport akcji profilu iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)

</TabItem>

</Tabs>

Możesz importować i eksportować wszystkie dostępne domyślne i niestandardowe palety kolorów za pomocą narzędzia do przywracania i tworzenia kopii zapasowych OsmAnd.

- Otwórz główne *Menu*, *Ustawienia*, przewiń w dół do sekcji **Import/eksport** (*Android*) lub **Lokalna kopia zapasowa** (*iOS*) i wybierz wymaganą akcję.
- Wybierz jeden lub więcej elementów z listy *Kolor* lub opcję *Zaznacz wszystko*.
- Wszystkie wyeksportowane pliki są zapisywane w formacie `.osf`.
- Jeśli rozmiar wybranych danych jest znaczny, przygotowanie pliku `.osf` przez aplikację zajmie trochę czasu.
- Zobacz artykuł [*Import / Eksport*](../personal/import-export.md), aby uzyskać bardziej szczegółowe informacje.


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style mapy)](../../user/map/vector-maps.md)