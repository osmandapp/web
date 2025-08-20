---
source-hash: 974c5e9164a6ee5cc7bedfde90040453285674465b0de9b2b63e46efeb2cc4d4
sidebar_position: 2
title: Harita Düğmeleri
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

Harita düğmeleri; *Yakınlaştır*, *Ara*, *Yol Tarifi*, *Pusula*, *Konumum*, *3D Modu* ve *Menü* dahil olmak üzere haritayla etkileşim kurmak için birincil kontrollerdir. Her düğme, navigasyon ve harita kullanım deneyiminizi geliştirmek için belirli işlevler sunar.


## Konumum ve Yakınlaştır {#my-location-and-zoom}

![Ekran menüsünü yapılandır](@site/static/img/widgets/location_zoom_buttons.png)

Haritanın cihazınızın ekranında nasıl görüntülendiğini kontrol etmek için bu düğmeleri kullanın:

- **Konumum**. Haritanın merkezinin cihazınızın mevcut coğrafi konumuyla senkronize olup olmadığını gösterir.
- **Yakınlaştır**. Haritanın yakınlaştırma düzeyini daha fazla veya daha az ayrıntı sağlayacak şekilde ayarlamanıza olanak tanır.
Bu düğmeleri kullanma hakkında daha fazla bilgi edinmek isterseniz, [Harita ile Etkileşim Kurma](../map/interact-with-map.md#my-location-and-zoom) makalesine bakabilirsiniz.


## Yol Tarifi {#directions}

![Yol Tarifi düğmesi izin verir](@site/static/img/widgets/directions_button_allows.png)

**Yol Tarifi** düğmesi, rota planlama ve navigasyon için çok önemlidir:

- [Bir rota oluşturun](../navigation/index.md). Bir rota oluşturmak için bu düğmeyi kullanın.
- [Navigasyonu başlatın](../navigation/index.md). Adım adım navigasyonu başlatın.
- Navigasyon modunda, *Yol Tarifi* düğmesi varsayılan olarak görünmez ancak haritaya kısa bir dokunuşla görünür hale gelir.

*Yol Tarifi* düğmesinin gösterge durumları:

- *Gri varsayılan simge*, rotanın henüz oluşturulmadığını gösterir. Bu simgeye dokunmak [rota kurulumu](../navigation/setup/route-navigation.md) işlevini açar.
- *Mavi varsayılan simge*, rotanın oluşturulduğunu ancak navigasyonun henüz başlamadığını gösterir. Bu simgeye dokunmak [rota kurulumu](../navigation/setup/route-navigation.md#start--stop-navigation) işlevini açar.
- *Mavi ok simgesi*, navigasyonun etkin olduğunu gösterir. Bu simgeye dokunmak [mevcut rotanın ayrıntılarını](../navigation/setup/route-details.md) açar.


## Haritayı Yapılandır {#configure-map}

![Haritayı Yapılandır](@site/static/img/widgets/configure_map.png)

**Haritayı Yapılandır** düğmesi, [Haritayı Yapılandır menüsüne](../map/configure-map-menu.md) erişim sağlar. Simge aynı zamanda [Mevcut uygulama profilini](../personal/profiles.md) de yansıtır ve farklı profiller arasında geçiş yapmanızı sağlar.


## Ana Menü {#main-menu}

![Ana menü düğmesi](@site/static/img/widgets/main_menu_button.png)

[**Ana Menü**](../start-with/main-menu.md) düğmesi, [tüm uygulama özelliklerine](../start-with/main-menu.md) erişim sağlayan genel menüyü açar. Navigasyon modunda, bu düğme varsayılan olarak gizlidir ve haritaya kısa bir dokunuşla görünür hale gelir.


## Ara {#search}

![Ara düğmesi](@site/static/img/widgets/search_button.png)

Ara düğmesi, [arama özelliklerine](../search/index.md) hızlı erişim sunarak konumları, ilgi çekici yerleri ve diğer bilgileri doğrudan haritadan bulmanızı sağlar.


## Pusula {#compass}

Pusula düğmesi, haritanın cihazınızın ekranındaki yönünü gösterir. Ek bilgi için [Harita ile Etkileşim Kurma](../map/interact-with-map.md#map-orientation--compass) makalesine bakın.


### Harita Yönlendirme Modları {#map-orientation-modes}

- ![Pusula](@site/static/img/widgets/map_butt_manually_ios.png)  
**Manuel olarak döndürüldü**. Bu modda, haritayı tercihinize göre [iki işaretçi hareketiyle (iki parmakla dokunma ve döndürme)](../map/interact-with-map.md#gestures) manuel olarak döndürebilirsiniz. Haritanın yönü, seyahat yönüne veya cihazın pusulasına bağlı değildir, sizin tarafınızdan belirlenir. Manuel döndürme modu varsayılan olarak ayarlanmıştır.

- ![Pusula](@site/static/img/widgets/map_butt_movem_dir_ios.png)  
**Hareket yönü**. Bu modda, harita GPS verilerinden bilinen hareket yönünüze göre yönlendirilir. Örneğin, sağa dönerseniz, harita da ekranın sağ tarafının hareket yönüne karşılık gelecek şekilde döner. Ayrıntılar için [Haritayı Yöne Göre Döndürme](../map/interact-with-map#rotate-map-by-bearing) bölümüne gidin.

- ![Pusula](@site/static/img/widgets/map_butt_compas_dir_ios.png)  
**Pusula yönü**. Düğmedeki simge gerçek Kuzey'i gösterir ve harita cihazınızın pusula yönüne göre hareket eder. Bu şekilde, haritanın kuzeyi gerçek kuzeye karşılık gelir ve haritanın çevredeki araziye göre yönünü görebilirsiniz. Cihazınız mümkün olduğunca yatay konumda olmalıdır. Cihazınızda pusula sensörü yoksa, haritanın yönü değişmeden kalır.

- ![Pusula](@site/static/img/widgets/map_butt_north_up_ios.png)  
**Kuzey yukarı**. Bu modda, harita Kuzey yönünde sabitlenir (sabit bir kilitle), bu da cihazınızın üst kenarıdır. Cihazın hareket ettiği yönden bağımsız olarak, harita statik kalır ve konumunuzu çevrenizle ilişkili olarak görebilirsiniz. Haritanın otomatik veya manuel döndürmesi yoktur.

### Pusula Dokunma Davranışı {#compass-tapping-behavior}

Pusula düğmesi, harita yönünü kontrol etmek için birden fazla eylem sağlar:

- **Tek dokunuş**. [Pusula düğmesine](../widgets/map-buttons.md#compass) (ekranın sol üst köşesinde [görünür](../widgets/map-buttons.md#display-options) olduğunda bulunur) *tek dokunuş*, tüm harita yönlendirme modlarında harita yönünü anında *Kuzey'e* döndürür. Harita *Pusula yönü* modunda olsa bile, bir anlığına döner ve ardından o modun dinamik yönüne geri döner.

- **Çift dokunuş**. GPS yönünü takip etme veya cihazla döndürme gibi harita yönlendirme modları arasında hızlıca geçiş yapmak için [Pusula düğmesine](../widgets/map-buttons.md#compass) ( [görünür](../widgets/map-buttons.md#display-options) olduğunda) *çift dokunun*.

- **Uzun dokunuş**. [Pusula düğmesine](../widgets/map-buttons.md#compass) ( [görünür](../widgets/map-buttons.md#display-options) olduğunda) *uzun dokunuşla* tüm harita yönlendirme modlarının bir listesini açabilir ve gerekli olanı seçebilirsiniz. Bu liste [Profil ayarlarında](../personal/profiles.md#appearance) da açılabilir.


### Görüntüleme Seçenekleri {#display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Pusula widget'ı](@site/static/img/widgets/map_butt_compass_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Pusula widget'ı](@site/static/img/widgets/map_butt_compass_widg_ios.png)

</TabItem>

</Tabs>

Düğmedeki pusula simgesi her zaman Kuzey'i gösterir. Pusula düğmesinin ekranda nasıl görüntüleneceğini seçebilirsiniz.

- **Her zaman görünür**. Düğme ekrandan kaybolmaz.
- **Her zaman gizli**. Bu durumda, harita yönünü hızlı bir şekilde değiştiremezsiniz, ancak düğme ekranda yer kaplamaz.
- **Harita döndürülürse görünür**. Pusula cihazınızın üst kenarında Kuzey'i gösterirken düğme görünmez.  


## 3D Modu {#3d-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*  

![3D modu](@site/static/img/widgets/map_butt_3D_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*  

![3D modu](@site/static/img/widgets/map_butt_3D_mode_ios.png)

</TabItem>

</Tabs>  

- *<Translate android="true" ids="shared_string_hidden"/>*. Bu mod bir düğme için seçilirse, harita görünümünü değiştirmek için bir hareket kullanmanız gerekir. Haritanın eğimini ayarlamak için haritaya iki parmağınızla dokunun ve yukarı ve aşağı hareket ettirin.  
- *<Translate android="true" ids="shared_string_visible"/>*. Düğme her zaman harita ekranında görüntülenir.
- *<Translate android="true" ids="visible_in_3d_mode"/>*. Düğme, harita görünümünü [*iki parmakla hareket ettirme*](../map/interact-with-map.md#gestures) hareketiyle değiştirdiğinizde harita ekranında görüntülenir.  

### Ek Ayarlar {#additional-settings}

1. **Düğmeyi görüntüle**. (*Android için*) *3D Modu* düğmesinin ayarı, Yapılandırma ekranı listesinde yalnızca harita oluşturma motoru [Sürüm 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) seçiliyse görünür.

2. **Açıyı kaydeder**. 3D moda geçtikten ve açıyı manuel olarak bir hareketle değiştirdikten sonra, açı kaydedilir ve 3D modu bir sonraki etkinleştirildiğinde kullanılır. Bu seçenek yalnızca o anda seçilen profil için kaydedilir.

3. **Taşıma**. Düğmeyi cihazınızın ekranında herhangi bir yere yerleştirebilirsiniz. Bunu yapmak için, düğmeyi basılı tutun ve parmağınızı kaldırmadan gerekli yere sürükleyin.

4. **Düğme konumu**. Uygulama ekranındaki harita üzerindeki düğme konumu her profil için ayrı ayrı kaydedilir.

5. **Öneri**. Seçilen bölge için [Hillshade haritasını](../plugins/topography.md#hillshade-slope-and-altitude-layers) indirmeniz ve etkinleştirmeniz önerilir.


## Özel Düğmeler {#custom-buttons}

[Hızlı eylem widget'ı](./quick-action.md), çeşitli eylem türlerinin atanabileceği yapılandırılabilir bir düğmedir. Birden fazla [Özel düğme](./quick-action.md#custom-buttons) olması da mümkündür.


## Harita Düğmesi Görünümü {#map-button-appearance}

<InfoAndroidOnly/>

| Varsayılan düğmeler | Özel düğmeler |
| :--- | :--- |
| ![Harita Düğmesi Görünümü](@site/static/img/widgets/map_butt_appearance_default_andr.png) | ![Harita Düğmesi Görünümü](@site/static/img/widgets/map_butt_appearance_custom_andr.png) |

Harita düğmesi görünümü ayarları aşağıdaki menüler aracılığıyla kullanılabilir:

- *Menü → Ekranı Yapılandır → Düğmeler → Varsayılan düğmeler*
- *Menü → Ekranı Yapılandır → Özel düğmeler → Hızlı eylem → üç nokta menüsü → Görünüm*

Düğmelerin görünümünü özelleştirmek, hem [Hızlı Eylem (Özel düğmeler)](../widgets/quick-action.md#button-appearance) hem de [Varsayılan düğmeler](../widgets/configure-screen.md#button-appearance) için boyutu, şekli, simgeyi ve arka plan opaklığını ayarlamanıza olanak tanır. Bu esneklik, arayüzü tercihlerinize göre kişiselleştirmenize ve kullanılabilirliği artırmanıza olanak tanır.


## İlgili Makaleler {#related-articles}

- [Ekranı Yapılandır](./configure-screen.md)
- [Bilgi widget'ları](./info-widgets.md)
- [Navigasyon widget'ları](./nav-widgets.md)
- [Yarıçap-cetvel ve Cetvel](./radius-ruler.md)
- [İşaretçi widget'ları](./markers.md)
- [Hızlı Eylem](./quick-action.md)

> *Son güncelleme: Şubat 2025*