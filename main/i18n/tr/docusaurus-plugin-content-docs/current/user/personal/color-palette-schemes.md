---
source-hash: 3c0537caba10d048fc41eb1aafbf2fad61dfc855cb8b7c403db89f081990b44f
sidebar_position: 5
title: Renk Şemaları
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



## Genel Bakış {#overview}

:::info Ücretli özellik

Renk şemaları, ücretli [Haritalar+](../purchases/index.md) ve Pro <ProFeature /> özelliklerinin bir parçası olarak kullanılır.

:::

Renk şemaları [rota renklendirmesinde](#routes), [harita arazisinde](#terrain) ve [hava durumu haritasında](#weather) kullanılır ve harita renk şemasını ve veri görselleştirmesini değiştirmek için dışa aktarılabilen, içe aktarılabilen ve düzenlenebilen bilginin ayrı bir parçası olarak temsil edilir.

Renk paleti verileri [*Haritalar ve Kaynaklar*](../personal/maps-resources.md#local) menüsünde mevcuttur.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *Menü → Haritalar ve Kaynaklar → Yerel → Renkler*

![Paletler](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *Menü → Haritalar ve Kaynaklar → Yerel → Renkler*

![Renk paleti](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## Şema Türleri {#scheme-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paletler](@site/static/img/personal/color-schemes/palette.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Renk paleti](@site/static/img/personal/color-schemes/color_altitude.png)

</TabItem>

</Tabs>


### Arazi {#terrain}

Arazi dosyaları (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) 3 [arazi görselleştirmesi](../plugins/topography.md#hillshade-slope-and-altitude-layers) tanımlar: *Tepe Gölgesi, Eğim* ve *Rakım*. Her tür için birden fazla paletiniz olabilir, örneğin, *çığ eğimi* varsayılan olarak sağlanır.

### Rotalar {#routes}

Çizgi gradyan görselleştirmeleri, GPX izlerini ve Rotaları renklendirmek için palet dosyalarını (`route_<type_name>_<palette_name>.txt`) kullanır:

- [Rotalar](../navigation/guidance/map-during-navigation.md#color) için: *Hız, Eğim* ve *Yükseklik (Rakım)*.
- [GPX İzleri](../map/tracks/appearance#track-colors-in-gpx-files) için: *Hız, Eğim* ve *Yükseklik (Rakım) veya Harici sensörlerden gelen bilgiler*.

### Hava Durumu {#weather}

Hava durumu palet dosyaları (`weather_<type_name>.txt`), [hava durumu katmanları](../plugins/weather.md#weather-layers) için görselleştirmeyi tanımlar.

### Renkler {#colors}

Renk paleti (`user_palette_default.txt`) basitçe [Favorilere](./favorites.md), [İzlere](./tracks/) atamak için önceden tanımlanmış renkler için kullanılır.


## Palet Açıklaması {#palette-legend}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="color"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="color"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="color"/></td>
    </tr>
</table>


Açıklama, haritadaki farklı işaretleri görüntülemek ve anlamak için kolay bir yol sağlar. [İzler için **hız**](../map/tracks/appearance#track-colors-in-gpx-files), [rotalar için **çizgi türü**](../navigation/guidance/map-during-navigation.md#color), [arazi için **rakım ve eğim**](../plugins/topography.md#default-color-scheme) ve tüm [**hava durumu katmanı**](../plugins/weather.md#weather-layers) renk paletlerini görüntülemek için yeni renk paletleri eklendi.


## Palet dosyasını düzenle {#edit-palette-file}

Haritalar ve rotalar için görünümü kişiselleştirmek üzere paletleri düzenleyebilirsiniz. Kendi renk paleti dosyaları, [içe/dışa aktarma aracı](./import-export.md) kullanılarak OsmAnd'a eklenebilir.

- *Rotalar*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_elevation_<type_name>.txt`.
- *Arazi*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Hava Durumu*: `weather_<type_name>.txt`.
- *Renk*: `user_palette_default.txt`.

Her satır sayısal bir değeri (renk paleti için bir dizin) ve RGB rengini temsil eder. Örneğin:

```xml
# *height_altitude_0-200.txt* adlı TXT dosyası {#txt-file-named-heightaltitude0-200txt}
# 0 - 90 derece RGBA {#0---90-degree-rgba}
0,46,185,0,191
# sarı {#yellow-}
100,255,222,2,227
# kırmızı {#red}
200,255,1,1,255
# mor {#violet}
220,130,1,255,255

```

Bu TXT dosyasını *..Android/data/net.osmand/files/color-palete/height_altitude_0-200.txt* konumuna taşıdıktan sonra, Renk Şeması menüsünde yeni bir palet görünecektir.


## Daha fazla oku {#read-more}

### Hızlı eylemler {#quick-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Eylem ekle → Topografi → Arazi renk şemasını değiştir*

![Renk Şeması](@site/static/img/widgets/color_scheme.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Eylem ekle → Topografi → Arazi renk şemasını değiştir*

![Renk paleti](@site/static/img/personal/color-schemes/color_scheme_qa_ios.png)

</TabItem>

</Tabs>

Arazi için paleti değiştirmek üzere **Hızlı Eylem**. Katmanlar arasında geçiş yapmaya benzer şekilde, arazi renk şemaları arasında geçiş yapma yeteneği eklendi. Bu, [Hızlı Eylemler](../widgets/quick-action.md#configure-map) aracı kullanılarak yapılabilir.


### Renkleri İçe/Dışa Aktar {#import--export-colors}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*

![Profiller Eylemler Dışa Aktar Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Yedekleme yerel Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profiller Eylemler Dışa Aktar iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png) ![Profiller Eylemler Dışa Aktar iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)

</TabItem>

</Tabs>

OsmAnd'ın geri yükleme ve yedekleme dosyaları aracını kullanarak mevcut tüm varsayılan ve özel renk paletlerini içe ve dışa aktarabilirsiniz.

- Ana *Menüyü*, *Ayarları* açın, **İçe/dışa aktar** (*Android*) veya **Yerel Yedekleme** (*iOS*) bölümüne gidin ve gerekli eylemi seçin.
- *Renk* listesinden bir veya daha fazla öğe veya *Tümünü Seç* seçeneğini seçin.
- Dışa aktarılan tüm dosyalar `.osf` biçiminde kaydedilir.
- Seçtiğiniz verilerin boyutu önemliyse, uygulamanın `.osf` dosyasını hazırlaması biraz zaman alacaktır.
- Daha ayrıntılı bilgi için [*İçe/Dışa Aktar*](../personal/import-export.md) makalesine bakın.


## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Genel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritalar (Harita Stilleri)](../../user/map/vector-maps.md)

> *Son güncelleme: Ocak 2025*