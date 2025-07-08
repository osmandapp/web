---
source-hash: 3c0537caba10d048fc41eb1aafbf2fad61dfc855cb8b7c403db89f081990b44f
sidebar_position: 5
title: Schematy kolorów
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

:::info Funkcja płatna

Schematy kolorów są używane w ramach płatnych funkcji [Mapy+](../purchases/index.md) i Pro <ProFeature />.

:::

Schematy kolorów są używane w [koloryzacji tras](#routes), [terenie mapy](#terrain) i [mapie pogody](#weather) i są reprezentowane jako oddzielna część informacji, które można eksportować, importować i edytować w celu zmiany schematu kolorów mapy i wizualizacji danych.

Dane palety kolorów są dostępne w menu [*Mapy i zasoby*](../personal/maps-resources.md#local).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *Menu → Mapy i zasoby → Lokalnie → Kolory*

![Palety](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *Menu → Mapy i zasoby → Lokalnie → Kolory*

![Paleta kolorów](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## Typy schematów {#scheme-types}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Palety](@site/static/img/personal/color-schemes/palette.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paleta kolorów](@site/static/img/personal/color-schemes/color_altitude.png)

</TabItem>

</Tabs>


### Teren {#terrain}

Pliki terenu (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) definiują 3 [wizualizacje terenu](../plugins/topography.md#hillshade-slope-and-altitude-layers): *Cieniowanie, Nachylenie* i *Wysokość*. Dla każdego typu można mieć wiele palet, na przykład *nachylenie lawinowe* jest dostępne domyślnie.

### Trasy {#routes}

Wizualizacje gradientu linii wykorzystują pliki palet (`route_<type_name>_<palette_name>.txt`) do kolorowania śladów GPX i tras:

- Dla [tras](../navigation/guidance/map-during-navigation.md#color): *Prędkość, Nachylenie* i *Wysokość*.
- Dla [śladów GPX](../map/tracks/appearance#track-colors-in-gpx-files): *Prędkość, Nachylenie* i *Wysokość* lub informacje z *zewnętrznych czujników*.

### Pogoda {#weather}

Pliki palet pogody (`weather_<type_name>.txt`) definiują wizualizację dla [warstw pogodowych](../plugins/weather.md#weather-layers).

### Kolory {#colors}

Paleta kolorów (`user_palette_default.txt`) jest po prostu używana do predefiniowanych kolorów do przypisywania do [Ulubionych](./favorites.md), [Śladów](./tracks/).


## Legenda palety {#palette-legend}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="kolor"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="kolor"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="kolor"/></td>
    </tr>
</table>


Legenda zapewnia łatwy sposób przeglądania i rozumienia różnych oznaczeń na mapie. Dodano nowe palety kolorów do wyświetlania [**prędkości** dla śladów](../map/tracks/appearance#track-colors-in-gpx-files), [**typu linii** dla tras](../navigation/guidance/map-during-navigation.md#color), [**wysokości i nachylenia** dla terenu](../plugins/topography.md#default-color-scheme) oraz wszystkich palet kolorów [**warstw pogodowych**](../plugins/weather.md#weather-layers).


## Edytuj plik palety {#edit-palette-file}

Możesz edytować palety, aby spersonalizować wygląd map i tras. Własne pliki palet kolorów można dodać do OsmAnd za pomocą narzędzia [import/eksport](./import-export.md).

- *Trasy*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_elevation_<type_name>.txt`.
- *Teren*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Pogoda*: `weather_<type_name>.txt`.
- *Kolor*: `user_palette_default.txt`.

Każda linia reprezentuje wartość liczbową (dla palety kolorów jest to indeks) i kolor RGB. Na przykład:

```xml
# Plik TXT o nazwie *height_altitude_0-200.txt* {#txt-file-named-heightaltitude0-200txt}
# 0 - 90 stopni RGBA {#0---90-degree-rgba}
0,46,185,0,191
# żółty {#yellow-}
100,255,222,2,227
# czerwony {#red}
200,255,1,1,255
# fioletowy {#violet}
220,130,1,255,255

```

Po przeniesieniu tego pliku TXT do *..Android/data/net.osmand/files/color-palete/height_altitude_0-200.txt* w menu Schemat kolorów pojawi się nowa paleta.


## Czytaj więcej {#read-more}

### Szybkie akcje {#quick-actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp; "**＋**" &nbsp;*→ <Translate ios="true" ids="add_button"/>* *→ Dodaj akcję → Topografia → Zmień schemat kolorów terenu*

![Schemat kolorów](@site/static/img/widgets/color_scheme.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp; "**＋**" &nbsp;*→ <Translate ios="true" ids="add_button"/>* *→ Dodaj akcję → Topografia → Zmień schemat kolorów terenu*

![Paleta kolorów](@site/static/img/personal/color-schemes/color_scheme_qa_ios.png)

</TabItem>

</Tabs>

**Szybka akcja** do zmiany palety dla terenu. Dodano możliwość przełączania między schematami kolorów terenu, podobnie jak przełączanie między warstwami. Można to zrobić za pomocą narzędzia [Szybkie akcje](../widgets/quick-action.md#configure-map).

### Import/Eksport kolorów {#import--export-colors}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*

![Eksport akcji profili Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Lokalna kopia zapasowa Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Eksport akcji profili iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png) ![Eksport akcji profili iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)

</TabItem>

</Tabs>

Możesz importować i eksportować wszystkie dostępne domyślne i niestandardowe palety kolorów za pomocą narzędzia do przywracania i tworzenia kopii zapasowych plików OsmAnd.

- Otwórz główne *Menu*, *Ustawienia*, przewiń w dół do sekcji **Import/eksport** (*Android*) lub **Lokalna kopia zapasowa** (*iOS*) i wybierz wymaganą akcję.
- Wybierz jeden lub więcej elementów z listy *Kolor* lub opcję *Zaznacz wszystko*.
- Wszystkie wyeksportowane pliki są zapisywane w formacie `.osf`.
- Jeśli rozmiar wybranych danych jest znaczny, przygotowanie pliku `.osf` przez aplikację zajmie trochę czasu.
- Zobacz artykuł [*Import/Eksport*](../personal/import-export.md) w celu uzyskania bardziej szczegółowych informacji.


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style mapy)](../../user/map/vector-maps.md)

> *Ostatnia aktualizacja: styczeń 2025*