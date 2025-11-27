---
source-hash: e2fafc2d2918ce6f0758531fadbde46e18997fd1f84eaa0251558562c491b867
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

Renk şemaları, ücretli [Maps+](../purchases/index.md) ve Pro <ProFeature /> özelliklerinin bir parçası olarak kullanılır.  

:::

Renk şemaları [rota renklendirmesinde](#tracks-routes), [harita arazisinde](#terrain) ve [hava durumu haritasında](#weather) kullanılır ve harita renk şemasını ve veri görselleştirmesini değiştirmek için dışa aktarılabilen, içe aktarılabilen ve düzenlenebilen bilgilerin ayrı bir parçası olarak temsil edilir.

Renk paleti verileri [*Haritalar ve Kaynaklar*](../personal/maps-resources.md#local-menu) menüsünde mevcuttur.

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

### Arazi {#terrain}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paletler](@site/static/img/personal/color-schemes/palette_new.png) ![Paletler](@site/static/img/personal/color-schemes/palette_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Renk paleti](@site/static/img/personal/color-schemes/palette_ios.png) ![Renk paleti](@site/static/img/personal/color-schemes/palette_ios_2.png)

</TabItem>

</Tabs>

Arazi dosyaları (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) 3 [arazi görselleştirmesi](../plugins/topography.md#hillshade-slope-and-altitude-layers) tanımlar: *Tepe Gölgesi, Eğim* ve *Rakım*. Her tür için birden fazla paletiniz olabilir, örneğin, *çığ eğimi* varsayılan olarak sağlanır. Daha fazla detay için [Topografya](../plugins/topography.md#default-color-scheme) makalesine bakın.

### İzler ve Rotalar {#tracks-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paletler](@site/static/img/personal/color-schemes/track_palette_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Renk paleti](@site/static/img/personal/color-schemes/track_palette_ios.png) 

</TabItem>

</Tabs>

Çizgi gradyan görselleştirmeleri, GPX izlerini ve Rotaları renklendirmek için palet dosyalarını (`route_<type_name>_<palette_name>.txt`) kullanır:

- [Rotalar](../navigation/guidance/map-during-navigation.md#color) için: *Hız (`route_speed_default.txt`), Eğim (`route_slope_default.txt`)* ve *Yükseklik (Rakım) (`route_elevation_default.txt`)*.
- [GPX İzleri](../map/tracks/appearance#track-colors-in-gpx-files) için: *Hız, Eğim, Maksimum Hız (`route_maxspeed_default.txt`)* ve *Yükseklik (Rakım)* veya *Dış sensörlerden gelen bilgiler*.

### Favoriler ve Yol Noktaları {#favorites-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paletler](@site/static/img/personal/color-schemes/favorites_palette_android.png) ![Paletler](@site/static/img/personal/color-schemes/favorites_palette_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Renk paleti](@site/static/img/personal/color-schemes/favorites_palette_ios.png) 

</TabItem>

</Tabs>

`user_palette_default.txt` paleti, [Favorilere](./favorites.md#edit--replace--delete) ve [Yol Noktalarına](https://osmand.net/docs/user/navigation/setup/gpx-navigation#waypoints) atanan önceden tanımlanmış renkler için kullanılır.

### Hava Durumu {#weather}

Hava durumu palet dosyaları (`weather_cloud.txt`, `weather_precip.txt`, `weather_pressure.txt`, `weather_temperature.txt`, `weather_wind.txt`) [hava durumu katmanları](../plugins/weather.md#weather-layers) için görselleştirmeyi tanımlar.


## Ayarlar {#settings}

### Palet Düzenleme {#palette-modify}

Haritaların ve rotaların görünümünü kişiselleştirmek için paletleri düzenleyebilirsiniz. Kendi renk paleti dosyaları, [içe/dışa aktarma aracı](./import-export.md) kullanılarak OsmAnd'a eklenebilir.

- *İzler ve Rotalar*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_maxspeed_default.txt`, `route_elevation_default.txt`.
- *Arazi*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Hava Durumu*: `weather_<type_name>.txt`.
- *Favoriler ve Yol Noktaları*: `user_palette_default.txt`.

Her satır bir sayısal değeri (renk paleti için bir dizin) ve RGB rengini temsil eder. Örneğin:

```xml
# *height_altitude_0-200.txt* adlı TXT dosyası {#txt-file-named-heightaltitude0-200txt}
# 0 - 90 derece RGBA {#0---90-degree-rgba}
0,46,185,0,191
# sarı  {#yellow-}
100,255,222,2,227
# kırmızı {#red}
200,255,1,1,255
# mor {#violet}
220,130,1,255,255

```

Bu TXT dosyasını *..Android/data/net.osmand/files/color-palette/height_altitude_0-200.txt* konumuna taşıdıktan sonra, Renk Şeması menüsünde yeni bir palet görünecektir.

### İçe / Dışa Aktar {#import--export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Profiller Eylemleri Dışa Aktar Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png)   ![Yedekleme yerel Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profiller Eylemleri Dışa Aktar iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)    ![Profiller Eylemleri Dışa Aktar iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)

</TabItem>

</Tabs>

OsmAnd'ın geri yükleme ve yedekleme dosyaları aracını kullanarak mevcut tüm varsayılan ve özel renk paletlerini içe ve dışa aktarabilirsiniz.

- Ana *Menü*'yü açın, *Ayarlar*'ı açın, aşağı kaydırarak **İçe/dışa aktar** (*Android*) veya **Yerel Yedekleme** (*iOS*) bölümüne gidin ve gerekli eylemi seçin.
- *Renk* listesinden bir veya daha fazla öğe veya *Tümünü Seç* seçeneğini seçin.
- Dışa aktarılan tüm dosyalar `.osf` biçiminde kaydedilir.
- Seçtiğiniz verilerin boyutu önemliyse, uygulamanın `.osf` dosyasını hazırlaması biraz zaman alacaktır.
- Daha ayrıntılı bilgi için [*İçe / Dışa Aktar*](../personal/import-export.md) makalesine bakın.

### Açıklama {#palette}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="renk"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="renk"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="renk"/></td>
    </tr>
</table>


Açıklama, haritadaki farklı işaretleri görüntülemenin ve anlamanın kolay bir yolunu sunar. [İzler için **hız**](../map/tracks/appearance#track-colors-in-gpx-files), [rotalar için **çizgi tipi**](../navigation/guidance/map-during-navigation.md#color), [arazi için **rakım ve eğim**](../plugins/topography.md#default-color-scheme) ve tüm [**hava durumu katmanı**](../plugins/weather.md#weather-layers) renk paletlerini görüntülemek için yeni renk paletleri eklenmiştir.

Açıklama, seçilen palete göre otomatik olarak oluşturulur ve gradyan adımlarını uygun birimler ile gösterir (örneğin, hız için km/s, eğim için %, rakım için metre).

### Hızlı eylemler {#quick-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Eylem ekle → <Translate ios="true" ids="configure_map"/> → Arazi renk şemasını değiştir*

![Renk Şeması](@site/static/img/personal/color-schemes/color_scheme_new.png) ![Renk Şeması](@site/static/img/personal/color-schemes/color_scheme_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> → &nbsp;  "**＋**"  &nbsp; → <Translate ios="true" ids="add_button"/> → Eylem ekle → <Translate ios="true" ids="configure_map"/> → Arazi renk şemasını değiştir*

![Renk paleti](@site/static/img/personal/color-schemes/color_scheme_qa_ios_new.png) ![Renk paleti](@site/static/img/personal/color-schemes/color_scheme_qa_ios_new_2.png)

</TabItem>

</Tabs>

Arazi için paleti değiştirmek için **Hızlı Eylem**. Katmanlar arasında geçiş yapmaya benzer şekilde, arazi renk şemaları arasında geçiş yapma yeteneği eklendi. Bu, [Hızlı Eylemler](../widgets/quick-action.md#configure-map) aracı kullanılarak yapılabilir.  

Bu eylemi yapılandırırken, bir veya birden fazla arazi renk paleti seçebilirsiniz. Birkaç palet seçilirse, butona her dokunuş seçilen paletler arasında döngü yapacaktır. Ayrıca, paletlerin tam listesini göstermek için ara diyaloğu etkinleştirebilir veya devre dışı bırakabilirsiniz ya da önceden tanımlanmış sırada sessizce geçiş yapabilirsiniz.


## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Genel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritaları (Harita Stilleri)](../../user/map/vector-maps.md)