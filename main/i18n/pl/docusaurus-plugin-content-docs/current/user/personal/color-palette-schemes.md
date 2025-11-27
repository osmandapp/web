---
source-hash: e2fafc2d2918ce6f0758531fadbde46e18997fd1f84eaa0251558562c491b867
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

Schematy kolorów są używane w [kolorowaniu tras i śladów](#tracks-routes), [terenie mapy](#terrain) i [mapie pogody](#weather), i są reprezentowane jako oddzielna część informacji, które można eksportować, importować i edytować w celu zmiany schematu kolorów mapy i wizualizacji danych.

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

### Teren {#terrain}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Palety](@site/static/img/personal/color-schemes/palette_new.png) ![Palety](@site/static/img/personal/color-schemes/palette_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paleta kolorów](@site/static/img/personal/color-schemes/palette_ios.png) ![Paleta kolorów](@site/static/img/personal/color-schemes/palette_ios_2.png)

</TabItem>

</Tabs>

Pliki terenu (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) definiują 3 [wizualizacje terenu](../plugins/topography.md#hillshade-slope-and-altitude-layers): *Cieniowanie wzgórz, Nachylenie* i *Wysokość*. Dla każdego typu można mieć wiele palet, na przykład domyślnie dostępna jest paleta *nachylenia lawinowego*. Zobacz artykuł [Topografia](../plugins/topography.md#default-color-scheme) po więcej szczegółów.

### Ślady i trasy {#tracks-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Palety](@site/static/img/personal/color-schemes/track_palette_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Paleta kolorów](@site/static/img/personal/color-schemes/track_palette_ios.png) 

</TabItem>

</Tabs>

Wizualizacje gradientu linii wykorzystują pliki palet (`route_<type_name>_<palette_name>.txt`) do kolorowania śladów GPX i tras:

- Dla [tras](../navigation/guidance/map-during-navigation.md#color): *Prędkość (`route_speed_default.txt`), Nachylenie (`route_slope_default.txt`)* i *Wysokość (wysokości) (`route_elevation_default.txt`)*.
- Dla [śladów GPX](../map/tracks/appearance#track-colors-in-gpx-files): *Prędkość, Nachylenie, Maks. prędkość (`route_maxspeed_default.txt`)* i *Wysokość (wysokości)* lub informacje z *czujników zewnętrznych*.

### Ulubione i punkty trasy {#favorites-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Palety](@site/static/img/personal/color-schemes/favorites_palette_android.png) ![Palety](@site/static/img/personal/color-schemes/favorites_palette_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paleta kolorów](@site/static/img/personal/color-schemes/favorites_palette_ios.png) 

</TabItem>

</Tabs>

Paleta `user_palette_default.txt` jest używana do wstępnie zdefiniowanych kolorów przypisywanych do [Ulubionych](./favorites.md#edit--replace--delete) i [Punktów trasy](https://osmand.net/docs/user/navigation/setup/gpx-navigation#waypoints).

### Pogoda {#weather}

Pliki palet pogody (`weather_cloud.txt`, `weather_precip.txt`, `weather_pressure.txt`, `weather_temperature.txt`, `weather_wind.txt`) definiują wizualizację dla [warstw pogodowych](../plugins/weather.md#weather-layers).


## Ustawienia {#settings}

### Modyfikacja palety {#palette-modify}

Możesz edytować palety, aby spersonalizować wygląd map i tras. Własne pliki palet kolorów można dodać do OsmAnd za pomocą narzędzia [importu/eksportu](./import-export.md).

- *Ślady i trasy*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_maxspeed_default.txt`, `route_elevation_default.txt`.
- *Teren*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Pogoda*: `weather_<type_name>.txt`.
- *Ulubione i punkty trasy*: `user_palette_default.txt`.

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

Po przeniesieniu tego pliku TXT do *..Android/data/net.osmand/files/color-palette/height_altitude_0-200.txt*, nowa paleta pojawi się w menu Schemat kolorów.

### Import / Eksport {#import--export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Eksport akcji profilu Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png)   ![Kopia zapasowa lokalna Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

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

### Legenda {#palette}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="kolor"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="kolor"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="kolor"/></td>
    </tr>
</table>


Legenda zapewnia łatwy sposób przeglądania i zrozumienia różnych oznaczeń na mapie. Dodano nowe palety kolorów do wyświetlania [**prędkości** dla śladów](../map/tracks/appearance#track-colors-in-gpx-files), [**typu linii** dla tras](../navigation/guidance/map-during-navigation.md#color), [**wysokości i nachylenia** dla terenu](../plugins/topography.md#default-color-scheme) oraz wszystkich palet kolorów [**warstw pogodowych**](../plugins/weather.md#weather-layers).

Legenda jest generowana automatycznie na podstawie wybranej palety i pokazuje kroki gradientu z odpowiednimi jednostkami (na przykład, km/h dla prędkości, % dla nachylenia lub metry dla wysokości).

### Szybkie akcje {#quick-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Dodaj akcję → <Translate ios="true" ids="configure_map"/> → Zmień schemat kolorów terenu*

![Schemat kolorów](@site/static/img/personal/color-schemes/color_scheme_new.png) ![Schemat kolorów](@site/static/img/personal/color-schemes/color_scheme_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> → &nbsp;  "**＋**"  &nbsp; → <Translate ios="true" ids="add_button"/> → Dodaj akcję → <Translate ios="true" ids="configure_map"/> → Zmień schemat kolorów terenu*

![Paleta kolorów](@site/static/img/personal/color-schemes/color_scheme_qa_ios_new.png) ![Paleta kolorów](@site/static/img/personal/color-schemes/color_scheme_qa_ios_new_2.png)

</TabItem>

</Tabs>

**Szybka akcja** do zmiany palety dla terenu. Dodano możliwość przełączania się między schematami kolorów terenu, podobnie jak przełączanie się między warstwami. Można to zrobić za pomocą narzędzia [Szybkie akcje](../widgets/quick-action.md#configure-map).  

Podczas konfigurowania tej akcji możesz wybrać jedną lub wiele palet kolorów terenu. Jeśli wybrano kilka palet, każde naciśnięcie przycisku będzie przełączać między wybranymi paletami. Możesz również włączyć lub wyłączyć pośredni dialog, aby pokazać pełną listę palet lub przełączać się między nimi cicho w predefiniowanej kolejności.


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style mapy)](../../user/map/vector-maps.md)