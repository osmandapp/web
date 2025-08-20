---
source-hash: 1c2dbd1648b5f88680eb1ade2c212d6275bae4f84aadcd626344d490380768e5
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

Schematy kolorów są używane jako część płatnych funkcji [Mapy+](../purchases/index.md) i Pro <ProFeature />.

:::

Schematy kolorów są używane w [koloryzacji tras](#routes), [terenie mapy](#terrain) i [mapie pogody](#weather) i są reprezentowane jako osobna część informacji, które można eksportować, importować i edytować, aby zmienić schemat kolorów mapy i wizualizację danych.

Dane palety kolorów są dostępne w menu [*Mapy i zasoby*](../personal/maps-resources.md#local).

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

Pliki terenu (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) definiują 3 [wizualizacje terenu](../plugins/topography.md#hillshade-slope-and-altitude-layers): *Cieniowanie, Nachylenie* i *Wysokość*. Dla każdego typu można mieć wiele palet, na przykład domyślnie dostępna jest *paleta nachylenia lawinowego*.

### Trasy {#routes}

Wizualizacje gradientu linii wykorzystują pliki palet (`route_<type_name>_<palette_name>.txt`) do kolorowania śladów GPX i tras:

- Dla [Tras](../navigation/guidance/map-during-navigation.md#color): *Prędkość, Nachylenie* i *Wysokość (Wzniesienie)*.
- Dla [Śladów GPX](../map/tracks/appearance#track-colors-in-gpx-files): *Prędkość, Nachylenie* i *Wysokość (Wzniesienie) lub informacje z zewnętrznych czujników*.

### Pogoda {#weather}

Pliki palet pogody (`weather_<type_name>.txt`) definiują wizualizację dla [warstw pogodowych](../plugins/weather.md#weather-layers).

### Kolory {#colors}

Paleta kolorów (`user_palette_default.txt`) jest po prostu używana do wstępnie zdefiniowanych kolorów, które można przypisać do [Ulubionych](./favorites.md), [Śladów](./tracks/).


## Legenda palety {#palette-legend}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="kolor"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="kolor"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="kolor"/></td>
    </tr>
</table>


Legenda zapewnia łatwy sposób przeglądania i zrozumienia różnych oznaczeń na mapie. Dodano nowe palety kolorów do wyświetlania [**prędkości** dla śladów](../map/tracks/appearance#track-colors-in-gpx-files), [**typu linii** dla tras](../navigation/guidance/map-during-navigation.md#color), [**wysokości i nachylenia** dla terenu](../plugins/topography.md#default-color-scheme) oraz wszystkich palet kolorów [**warstw pogodowych**](../plugins/weather.md#weather-layers).


## Edytuj plik palety {#edit-palette-file}

Możesz edytować palety, aby spersonalizować wygląd map i tras. Własne pliki palet kolorów można dodawać do OsmAnd za pomocą narzędzia [importu/eksportu](./import-export.md).

- *Trasy*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_elevation_<type_name>.txt`.
- *Teren*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Pogoda*: `weather_<type_name>.txt`.
- *Kolor*: `user_palette_default.txt`.

Każda linia reprezentuje wartość liczbową (dla palety kolorów jest to indeks) i kolor RGB. Na przykład:

```xml
# Plik TXT o nazwie *height_altitude_0-200.txt* {#txt-file-named-heightaltitude0-200txt}
# 0 - 90 stopni RGBA {#0---90-degree-rgba}
0,46,185,0,191
# żółty  {#yellow-}
100,255,222,2,227
# czerwony {#red}
200,255,1,1,255
# fioletowy {#violet}
220,130,1,255,255

```

Po przeniesieniu tego pliku TXT do *..Android/data/net.osmand/files/color-palete/height_altitude_0-200.txt*, w menu Schemat kolorów pojawi się nowa paleta.


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

**Szybka akcja** do zmiany palety dla terenu. Dodano możliwość przełączania między schematami kolorów terenu, podobnie jak przełączanie między warstwami. Można to zrobić za pomocą narzędzia [Szybkie akcje](../widgets/quick-action.md#configure-map).


### Import/Eksport kolorów {#import--export-colors}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*

![Akcje profili Eksport Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png)   ![Kopia zapasowa lokalna Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Akcje profili Eksport iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)    ![Akcje profili Eksport iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)

</TabItem>

</Tabs>

Możesz importować i eksportować wszystkie dostępne domyślne i niestandardowe palety kolorów za pomocą narzędzia do przywracania i tworzenia kopii zapasowych plików OsmAnd.

- Otwórz główne *Menu*, *Ustawienia*, przewiń do sekcji **Import/eksport** (*Android*) lub **Lokalna kopia zapasowa** (*iOS*) i wybierz wymaganą akcję.
- Wybierz jeden lub więcej elementów z listy *Kolor* lub opcję *Zaznacz wszystko*.
- Wszystkie wyeksportowane pliki są zapisywane w formacie `.osf`.
- Jeśli rozmiar wybranych danych jest znaczący, przygotowanie pliku `.osf` przez aplikację zajmie trochę czasu.
- Zobacz artykuł [*Import/Eksport*](../personal/import-export.md), aby uzyskać bardziej szczegółowe informacje.


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style map)](../../user/map/vector-maps.md)

> *Ostatnia aktualizacja: styczeń 2025*