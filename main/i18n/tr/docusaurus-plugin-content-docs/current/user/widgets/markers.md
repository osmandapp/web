---
source-hash: d3abf03ba6407956088e1ed644ced36e7ab7236b5ccbcd41e305f4fac26a3b36
sidebar_position: 6
title:  İşaretleyici Widget'ları
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Genel Bakış {#overview}

İşaretleyiciler, harita üzerinde bayrak şeklinde belirtilen geçici noktalardır. Widget'lar işaretleyiciye olan *Yönü*, *Mesafeyi*, *Adresi* ve *Tahmini varış süresini* gösterir. İşaretleyicileri harita üzerinde hızlıca bulmanızı ve konumlarını değiştirmenizi sağlarlar. İşaretleyiciler hakkında daha fazla bilgiyi bu [makalede](../personal/markers) okuyabilirsiniz.


## Üst Çubuk Widget'ı {#top-bar-widget}

**Harita işaretleyicileri çubuğu** (Android) widget'ı / **Mesafe göstergesi - Üst çubuk** (iOS) widget'ı şunları görüntüler:

- Mevcut konumunuzdan (veya Konum kapalıyken harita merkez noktasından / ilk harita dokunma noktasından) harita üzerindeki İşaretleyici ile belirtilen seçili noktaya olan mesafe ([Uzunluk birimleri](../personal/profiles/#general-settings) Profil ayarlarında seçilebilir).
- İşaretleyici ile aynı renkte bir ok, mevcut konumdan (veya Konum kapalıyken harita merkez noktasından / ilk harita dokunma noktasından) işaretleyiciye doğru cihazınızın uzaydaki yönünü (başlık) gösterir.
- Konum Adresi.
- [Harita işaretleyici listesine](../personal/markers/#map-markers-menu) giden menü simgesi.

Ayrıca bir veya iki işaretleyici görüntülemeyi de seçebilirsiniz. Widget ayarları hakkında daha fazla bilgiyi bu [makalede](https://osmand.net/docs/user/personal/markers#map-markers-widgets) okuyun.
:::info
*İşaretleyiciye olan mesafe*, konumunuz (veya harita merkez noktası / Konum kapalıyken ilk harita dokunma noktası) ile işaretleyici arasındaki düz çizginin uzunluğudur.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Üst çubuk widget'ındaki harita işaretleyicileri](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| Etkinleştir | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Bir panel seçin → <Translate android="true" ids="map_markers_bar"/>* |
| Dokunarak | Haritanın görünür kısmı işaretleyici konumuna kayar. |
| Uzun dokunma + taşıma | Harita üzerindeki belirli bir noktadan izlenen işaretleyiciye olan mesafeyi ölçmek ve yönü görmek için, uzun dokunmanız ve hemen harita konumunu hafifçe hareket ettirmeniz gerekir (bağlam menüsü görünmemelidir). |
| İşaretleyiciye yaklaş | Konumunuz harita işaretleyicisinin küçük bir yarıçapı içindeyse (**< 50 m**), widget alanında harita işaretleyicisini hızlıca silmek (geçildi olarak işaretle) için bir onay işareti düğmesi görebilirsiniz. İşaretlenen işaretleyici, işaretleyiciler listesindeki bir sonraki işaretleyici ile değiştirilir. |
| Mesafe formatı | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Üst çubuk widget'ındaki harita işaretleyicileri](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| Etkinleştir | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Bir panel seçin → <Translate android="true" ids="map_markers_bar"/>*|
| Dokunarak | Haritanın görünür kısmı işaretleyici konumuna kayar. |
| Dokunarak | "Mesafe" / "Tahmini varış süresi" arasında geçiş yapma (Mod değiştirme). |
| İşaretleyiciye yaklaş | Konumunuz harita işaretleyicisinin küçük bir yarıçapı içindeyse (**< 50 m**), widget alanında harita işaretleyicisini hızlıca silmek (geçildi olarak işaretle) için bir onay işareti düğmesi görebilirsiniz. İşaretlenen işaretleyici, işaretleyiciler listesindeki bir sonraki işaretleyici ile değiştirilir. |
| Mesafe formatı | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## Panel Widget'ları {#panel-widgets}

**Harita işaretleyicileri** *(Android için)* widget'ı ve **Mesafe göstergesi - Widget'lar** *(iOS için)* şunları görüntüler:

- Mevcut konumunuzdan harita üzerindeki İşaretleyici ile belirtilen seçili noktaya olan *Mesafe* ([Uzunluk birimleri](../personal/profiles/#general-settings) Profil ayarlarında seçilebilir).
- *Tahmini varış süresi veya ETA*.
Bu, aracın veya kişinin varış noktasına varması gereken süredir (ss:dd). İşaretleyiciye olan mesafenin ortalama hıza bölünmesiyle hesaplanır.
Ortalama hız, 15 saniyeden 60 dakikaya kadar seçtiğiniz zaman aralığı için konum noktalarından alınan tüm hız değerlerinin ortalaması olarak hesaplanır.

Ayrıca bir veya iki işaretleyici görüntülemeyi de seçebilirsiniz. Widget ayarları hakkında daha fazla bilgiyi bu [makalede](https://osmand.net/docs/user/personal/markers#map-markers-widgets) okuyun.
:::info
*İşaretleyiciye olan mesafe*, konumunuz (veya harita üzerindeki belirli bir nokta) ile işaretleyici arasındaki düz çizginin uzunluğudur.
:::


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Panel widget'ları](@site/static/img/widgets/map_markers_widget-02.png)

| | |
|------------|------------|
| Etkinleştir | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_markers_item"/>* |
| Dokunarak 1 | "Mesafe" / "Tahmini varış süresi" arasında geçiş yapma (Mod değiştirme). |
| Dokunarak 2 | Haritanın görünür kısmı işaretleyici konumuna kayar (İşaretleyici konumuna gitme modu) |
| Uzun dokunma + taşıma | Harita üzerindeki belirli bir noktadan izlenen işaretleyiciye olan mesafeyi ölçmek ve yönü görmek için, uzun dokunmanız ve hemen harita konumunu hafifçe hareket ettirmeniz gerekir (bağlam menüsü görünmemelidir). |
| Mesafe formatı | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Panel widget'ları](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| Etkinleştir | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Bir panel seçin → <Translate android="true" ids="map_markers_bar"/>* |
| Dokunarak | Haritanın görünür kısmı işaretleyici konumuna kayar. |
| Dokunarak | "Mesafe" / "Tahmini varış süresi" arasında geçiş yapma (Mod değiştirme). |
| Mesafe formatı | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## İşaretleyici Widget'larını Yapılandırma {#configure-marker-widgets}

Harita işaretleyicileri widget ayarları hakkında genel bilgileri bu [sayfada](../personal/markers#map-markers-widgets) okuyabilirsiniz.

**Harita işaretleyicileri çubuğu**
Üst çubuk widget'ı, mevcut konumunuzdan bir sonraki Harita işaretleyicisine olan mesafeyi ve yönü gösterir. Ayarlarda, ekranın üst kısmında bir veya iki işaretleyicinin görüntülenip görüntülenmeyeceğini seçebilirsiniz.

![Haritada görünüm](@site/static/img/widgets/configure-marker-wid-02.png)

**Harita işaretleyicileri**
Widget, Harita işaretleyicileri listesindeki birinci veya ikinci işaretleyici için mesafeyi veya tahmini varış süresini (ETA) gösterir. Ekranda bir işaretleyici, birinci veya ikinci işaretleyici veya her ikisi birden görüntülenecek şekilde seçebilirsiniz.

![Haritada görünüm](@site/static/img/widgets/configure-marker-wid-01.png) ![Haritada görünüm](@site/static/img/widgets/settings-marker-wid-first-01.png)

| | |
| :------------- | :------------- |
| Gösterir | Bu mod, widget'ın hangi bilgiyi görüntüleyeceğini seçmenizi sağlar: *Mesafe* veya *Tahmini varış süresi*. |
| Aralık | 'Göster' bölümünde *Tahmini varış süresi* seçilirse, bu seçenek ETA hesaplaması için zaman seçimiyle (15 saniyeden 60 dakikaya kadar) birlikte görünür. |
| Widget'a tıklayın | Bu ayar, widget'a tıkladığınızda hangi eylemin gerçekleştirileceğini seçmenizi sağlar: *Mod değiştir* veya *İşaretleyici konumuna git*. |


## Haritada Görünüm {#appearance-on-the-map}

Harita işaretleyicilerinin görünümünü yapılandırmak OsmAnd'ın hem Android hem de iOS sürümlerinde mevcuttur. "Haritada Görünüm" menüsü, Harita işaretleyicileri için genel bir ayardır ve widget'ların etkin olup olmamasından bağımsız olarak geçerlidir. Detaylı bilgiyi bu [sayfada](../personal/markers.md#appearance-on-the-map) okuyabilirsiniz.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![Haritada görünüm](@site/static/img/widgets/appearence_on_the_map-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Harita işaretleyici listesindeki ilk bir veya iki işaretleyici hakkında bilgi gösterir. |
| <Translate android="true" ids="show_arrows_on_the_map"/> | İzlenen işaretleyiciye (bir veya iki) giden yönü haritada bir ok olarak gösterir. İşaretleyici haritanın görünür kısmındaysa, ok görüntülenmez. |
| <Translate android="true" ids="show_guide_line"/> | Harita üzerindeki belirli bir noktadan izlenen işaretleyiciye doğru düz bir çizgi olarak yönü kesikli bir çizgi olarak gösterir. |
| <Translate android="true" ids="one_tap_active"/> | Haritadaki gerekli işaretleyiciye tek dokunuşla, bu işaretleyici Bağlam menüsünü açmadan aktif Harita işaretleyicileri listesinin en üstüne taşınır. |
| <Translate android="true" ids="keep_passed_markers"/> | Favoriler veya GPX yol noktaları grubu olarak eklenen Geçildi olarak işaretlenmiş işaretleyiciler haritada kalacaktır. Grup aktif değilse, işaretleyiciler haritadan kaybolacaktır. |

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![Harita işaretleyicileri Görünüm iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Harita işaretleyici listesindeki ilk bir veya iki işaretleyici hakkında bilgi gösterir. |
| <Translate android="true" ids="show_direction"/> | Widget'ların görüntülenip görüntülenmeyeceğini ve nasıl görüneceklerini seçmenizi sağlar: haritanın üstünde (<Translate android="true" ids="shared_string_topbar"/>) veya ekranın sağ tarafında (<Translate android="true" ids="shared_string_widgets"/>). |
| Haritadaki oklar | İzlenen işaretleyiciye (bir veya iki) giden yönü haritada bir ok olarak gösterir. İşaretleyici haritanın görünür kısmındaysa, ok görüntülenmez. |
| Yön çizgisi | Harita üzerindeki belirli bir noktadan izlenen işaretleyiciye doğru düz bir çizgi olarak yönü kesikli bir çizgi olarak gösterir. |

</TabItem>

</Tabs>


## İlgili Makaleler {#related-articles}

- [Ekranı Yapılandır](./configure-screen.md)
- [Harita düğmeleri](./map-buttons.md)
- [Bilgilendirici widget'lar](./info-widgets.md)
- [Navigasyon widget'ları](./nav-widgets.md)
- [Yarıçap-cetvel ve Cetvel](./radius-ruler.md)
- [Hızlı Eylem](./quick-action.md)


> *Son güncelleme: Ekim 2023*