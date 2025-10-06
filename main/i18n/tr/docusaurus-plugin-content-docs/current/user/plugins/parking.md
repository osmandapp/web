---
source-hash: c31f972d3a691c26a3a583de116eb13a83d2589b7e5d44d3162198717f9b326f
sidebar_position: 12
title: Park Konumu
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Genel Bakış {#overview}

**Park Konumu** eklentisi, aracınızı park ettiğiniz konumu kaydetmenize ve yönetmenize yardımcı olur. Harita üzerinde bir işaretleyici yerleştirmenize, park süresini takip etmenize ve isteğe bağlı olarak park süreniz sona erdiğinde bir takvim hatırlatıcısı ayarlamanıza olanak tanır.

Bu eklenti ücretsizdir ve indirilen OsmAnd haritalarıyla çevrimdışı çalışır. Park edilmiş aracınızı hızlı bir şekilde bulabilir, ona geri yürüme mesafesini tahmin edebilir ve gerekirse park konumunu paylaşabilirsiniz.

- Bağlam menüsü aracılığıyla manuel olarak bir park yeri ekleyebilirsiniz.
- Süre sınırlıysa, eklenti hem başlangıç hem de bitiş zamanını kaydeder.
- Bitiş zamanı, cihazınızın takviminde bir hatırlatıcıyı tetikleyebilir.
- Park detayları daha sonra görüntülenebilir veya navigasyon için kullanılabilir.

İşaretleyici geçicidir ve artık ihtiyaç duyulmadığında kolayca kaldırılabilir.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Park widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Park widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

Haritada bir park yeri kullanmak için aşağıdaki ayarları yapmanız gerekir:

1. *Ana Menü → Eklentiler*'den [Park konumu eklentisini](../plugins/index.md#enable--disable) etkinleştirin.  
2. Bağlam menüsü aracılığıyla harita üzerinde bir [park yeri](#set-a-spot) ayarlayın.
3. (İsteğe bağlı) Daha hızlı erişim için ekrana [Park widget'ını](#parking-widget) ekleyin.  


## Haritada Park Yeri {#parking-spot-on-the-map}

Bir park yeri işaretlediğinizde, OsmAnd coğrafi koordinatlarını bir zaman damgasıyla birlikte kaydeder. Gerekirse, bir zaman sınırı ve takvim hatırlatıcısı da eklenebilir. Park yerleri **Favori noktalar** olarak kaydedilir. Park işaretleyicisinin haritada görünmesini sağlamak için [Favoriler](../personal/favorites.md) etkinleştirilmelidir.


### Bir Yer Ayarlayın {#set-a-spot}

Haritada bir Park yeri ayarlamak için, gerekli seviyeye yakınlaştırın, ardından haritadaki yere uzun dokunun ve açılan [Bağlam menüsünde](../map/map-context-menu.md) ayarları yapın.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de park yeri ayarlayın](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Android'de zaman sınırlarını ayarlayın](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta Eylemlerde Park'ı seçin](@site/static/img/plugins/parking/ios_set_p_point2.png)  ![iOS'ta park noktasını ayarlayın](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Bir park işaretleyicisi yerleştirmek için haritayı yakınlaştırın, istediğiniz konuma uzun dokunun ve [bağlam menüsünü](../map/map-context-menu.md) açın. Ardından:

1. [Eylemler](../map/map-context-menu#actions) öğesine dokunun.
2. **Park konumu olarak işaretle** (*Android*) veya **Park konumu ekle** (*iOS*) öğesini seçin.
3. Mevcut seçeneklerden birini seçin:
   - **Sınırsız zaman** – geri sayım olmadan temel bir işaretleyici ekler.
   - **Sınırlı süreli park** – bir bitiş zamanı ayarlamanıza ve isteğe bağlı olarak cihazınızın takviminde bir hatırlatıcı oluşturmanıza olanak tanır.
4. İşaretleyiciyi yerleştirmek için onaylayın. Başlangıç zamanı otomatik olarak kaydedilir.

:::info Başlangıç Zamanı
Başlangıç zamanı her zaman otomatik olarak ayarlanır. Bitiş zamanını değiştirmeniz gerekirse, park yerini silmeli ve yeniden oluşturmalısınız. Hatırlatıcılar, yalnızca kurulum sırasında bu seçeneği belirlediyseniz takviminize eklenir.
:::


### Bilgilenin {#stay-informed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Park widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Android'de kalan süre](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Park widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![iOS'ta park bilgileri](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

Bir park yeri kaydedildikten sonra, OsmAnd bağlam menüsü veya isteğe bağlı [Park widget'ı](#parking-widget) aracılığıyla konumunu ve zamanlamasını izlemenize yardımcı olur.

Park işaretleyicisini haritayı uzaklaştırarak veya kaydedilen yerin haritasını ortalayan **Park widget'ına** dokunarak görüntüleyebilirsiniz. Widget ayrıca mevcut konumunuzdan (veya harita merkezinden) park konumuna olan mesafeyi de gösterir.

Park işaretleyicisine dokunduğunuzda ek ayrıntılar gösterilir:

- **Başlangıç zamanı** – işaretleyicinin yerleştirildiği an.
- **Kalan süre** veya **Süresi dolmuş süre** – bir zaman sınırı ayarlanmışsa, bu, ne kadar süre kaldığını veya sürenin dolmasından bu yana ne kadar zaman geçtiğini gösterir.
- Takvim hatırlatıcısını etkinleştirdiyseniz, cihazınızın takvim uygulamasında görünecektir.


### Bir Ara Noktaya Navigasyon {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de park noktasına yönlendirme](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta park noktasına yönlendirme](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

Aracınıza kolayca geri dönmek için park yerini bir navigasyon hedefi olarak kullanabilirsiniz. OsmAnd, kaydedilen park konumuna navigasyonu başlatmak için iki ana yol sunar:

**Navigasyon menüsü aracılığıyla**:

  1. **Navigasyon** düğmesine dokunun.  
  2. Bir profil seçin.  
  3. **Hedef ayarla** öğesine dokunun ve kaydedilen noktalar listesinden **Park** öğesini seçin.

**Park widget'ı aracılığıyla**:

  1. **Park widget'ına** dokunun.  
  2. Park yeri işaretleyicisine dokunun.  
  3. **Navigasyon** öğesini seçin ve kullanmak istediğiniz profili seçin.


### Bir Yeri Kaldırın {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de Parkı Sil eylemi](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png) -->
  
![iOS'ta Parkı Sil eylemi](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Bir park işaretleyicisini silmek için:

1. Haritada park yerini bulun veya **Park widget'ına** dokunun.
2. Bağlam menüsünü açmak için işaretleyiciye dokunun.
3. **Sil** veya **Kapat** öğesini seçin.

Bir takvim hatırlatıcısı ayarlanmışsa, o da otomatik olarak kaldırılacaktır.


## Park Widget'ı {#parking-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_parking"/>*  

![Android'de Park widget'ı ekleme](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="parking_place"/>*  

![iOS'ta Park widget'ı ekleme](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

[Park widget'ı](../widgets/info-widgets.md#parking-widget), ekranın merkezinden kaydedilen park konumuna olan mesafeyi gösterir ve haritayı o noktaya hızlı bir şekilde ortalamanıza olanak tanır.

- Widget, yalnızca bir park konumu ayarlandıktan sonra görünür.
- Henüz ekranda değilse, [Ekranı Yapılandır](../widgets/configure-screen.md) menüsü aracılığıyla ekleyebilirsiniz.

Daha fazla bilgi edinmek için bakınız: [Bilgi Widget'ları – Park Widget'ı](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Küresel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritaları (Harita Stilleri)](../../user/map/vector-maps.md)