---
source-hash: 500ba2b5b26271c7c71fe60664983abc42fa4483e3831b67196c41ebe60e8fd4
sidebar_position: 12
title:  Park Konumu
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Genel Bakış {#overview}

**Park Konumu** eklentisi, aracınızı park ettiğiniz konumu kaydetmenize ve yönetmenize yardımcı olur. Harita üzerine bir işaretleyici yerleştirmenize, park süresini takip etmenize ve isteğe bağlı olarak park süreniz sona erdiğinde bir takvim hatırlatıcısı ayarlamanıza olanak tanır.

Bu eklenti ücretsizdir ve indirilen OsmAnd haritalarıyla çevrimdışı çalışır. Park ettiğiniz aracı hızlıca bulabilir, ona geri yürüme mesafesini tahmin edebilir ve gerekirse park konumunu paylaşabilirsiniz.

- Bağlam menüsü aracılığıyla manuel olarak bir park yeri ekleyebilirsiniz.
- Süreli ise, eklenti hem başlangıç hem de bitiş zamanını kaydeder.
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

1. *Ana Menü → Eklentiler* bölümünden [Park konumu eklentisini](../plugins/index.md#enable--disable) etkinleştirin.
2. Bağlam menüsü aracılığıyla harita üzerinde bir [park yeri](#set-a-spot) ayarlayın.
3. (İsteğe bağlı) Daha hızlı erişim için [Park widget'ını](#parking-widget) ekrana ekleyin.


## Haritadaki Park Yeri {#parking-spot-on-the-map}

Bir park yeri işaretlediğinizde, OsmAnd coğrafi koordinatlarını bir zaman damgasıyla birlikte kaydeder. Gerekirse, bir zaman sınırı ve takvim hatırlatıcısı da eklenebilir.


### Bir Yer Ayarlayın {#set-a-spot}

Harita üzerinde bir Park yeri ayarlamak için, gerekli seviyeye yakınlaştırın, ardından haritadaki yere uzun dokunun ve açılan [Bağlam menüsünde](../map/map-context-menu.md) ayarları yapın.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de Park yeri ayarlayın](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Android'de zaman sınırlarını ayarlayın](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta Eylemlerde Park'ı Seçin](@site/static/img/plugins/parking/ios_set_p_point2.png) ![iOS'ta Park noktası ayarlayın](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Bir park işaretleyici yerleştirmek için haritayı yakınlaştırın, gerekli konuma uzun dokunun ve [bağlam menüsünü](../map/map-context-menu.md) açın. Ardından:

1. [Eylemler](../map/map-context-menu#actions) üzerine dokunun.
2. **Park konumu olarak işaretle** (*Android*) veya **Park konumu ekle** (*iOS*) seçeneğini seçin.
3. Mevcut seçeneklerden birini seçin:
   - **Süresiz** – geri sayım olmadan temel bir işaretleyici ekler.
   - **Süreli park** – bir bitiş zamanı ayarlamanıza ve isteğe bağlı olarak cihazınızın takviminde bir hatırlatıcı oluşturmanıza olanak tanır.
4. İşaretleyiciyi yerleştirmek için onaylayın. Başlangıç zamanı otomatik olarak kaydedilir.

:::info Başlangıç Zamanı
Başlangıç zamanı her zaman otomatik olarak ayarlanır. Bitiş zamanını değiştirmeniz gerekirse, park yerini silmeli ve yeniden oluşturmalısınız. Hatırlatıcılar, yalnızca kurulum sırasında bu seçeneği belirlediyseniz takviminize eklenir.
:::


### Haberdar Olun {#stay-informed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Park widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Android'de kalan süre](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Park widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![iOS'ta park bilgisi](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

Bir park yeri kaydedildikten sonra, OsmAnd bağlam menüsü veya isteğe bağlı [Park widget'ı](#parking-widget) aracılığıyla konumunu ve zamanlamasını izlemenize yardımcı olur.

Park işaretleyicisini haritayı uzaklaştırarak veya kaydedilen yerin haritasını ortalayan **Park widget'ına** dokunarak görüntüleyebilirsiniz. Widget ayrıca mevcut konumunuzdan (veya harita merkezinden) park yerine olan mesafeyi de gösterir.

Park işaretleyicisine dokunulduğunda ek detaylar gösterilir:

- **Başlangıç zamanı** – işaretleyicinin yerleştirildiği an.
- **Kalan süre** veya **Süresi dolmuş süre** – bir zaman sınırı ayarlanmışsa, ne kadar süre kaldığını veya sürenin dolmasından bu yana ne kadar zaman geçtiğini gösterir.
- Takvim hatırlatıcısını etkinleştirdiyseniz, cihazınızın takvim uygulamasında görünecektir.


### Bir Ara Noktaya Gitme {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de Park noktasına gidiliyor](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta Park noktasına gidiliyor](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

Aracınıza kolayca geri dönmek için park yerini bir navigasyon hedefi olarak kullanabilirsiniz. OsmAnd, kaydedilen park konumuna navigasyonu başlatmak için iki ana yol sunar:

**Navigasyon menüsü aracılığıyla**:

  1. **Navigasyon** düğmesine dokunun.
  2. Bir profil seçin.
  3. **Hedef belirle** üzerine dokunun ve kaydedilen noktalar listesinden **Park**'ı seçin.

**Park widget'ı aracılığıyla**:

  1. **Park widget'ına** dokunun.
  2. Park yeri işaretleyicisine dokunun.
  3. **Navigasyon**'u seçin ve kullanmak istediğiniz profili seçin.


### Bir Yeri Kaldırın {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de Parkı Sil Eylemi](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Android'de Parkı Sil Eylemi](@site/static/img/map/context_menu_limited_parking.png) -->

![iOS'ta Parkı Sil Eylemi](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Bir park işaretleyicisini silmek için:

1. Harita üzerinde park yerini bulun veya **Park widget'ına** dokunun.
2. Bağlam menüsünü açmak için işaretleyiciye dokunun.
3. **Sil** veya **Kapat** seçeneğini seçin.

Bir takvim hatırlatıcısı ayarlanmışsa, o da otomatik olarak kaldırılacaktır.


## Park Widget'ı {#parking-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_parking"/>*

![Android'de Park widget'ı ekleniyor](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="parking_place"/>*

![iOS'ta Park widget'ı ekleniyor](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

[Park widget'ı](../widgets/info-widgets.md#parking-widget), ekranın merkezinden kaydedilen park yerine olan mesafeyi gösterir ve haritayı o noktaya hızlıca ortalamanızı sağlar.

- Widget, yalnızca bir park konumu ayarlandıktan sonra görünür.
- Ekranda zaten yoksa, [Ekranı Yapılandır](../widgets/configure-screen.md) menüsü aracılığıyla ekleyebilirsiniz.

Daha fazla bilgi için bakınız: [Bilgi Widget'ları – Park Widget'ı](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Küresel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritaları (Harita Stilleri)](../../user/map/vector-maps.md)

> *Son güncelleme: Mayıs 2025*