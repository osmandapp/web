---
source-hash: 72e0583c731b9fa6013d0075ece872e622be90160d3358a8216e374293cf5f00
sidebar_position: 12
title: Otopark Konumu
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Genel Bakış {#overview}

**Otopark Konumu** eklentisi, aracınızı park ettiğiniz yeri kaydetmenize ve yönetmenize yardımcı olur. Haritaya bir işaretleyici yerleştirmenize, park süresini takip etmenize ve isteğe bağlı olarak park süreniz sona erdiğinde bir takvim hatırlatıcısı ayarlamanıza olanak tanır.

Bu eklenti ücretsizdir ve indirilen OsmAnd haritalarıyla çevrimdışı çalışır. Park edilmiş aracınızın yerini hızlı bir şekilde bulabilir, ona geri yürüme mesafesini tahmin edebilir ve gerekirse park konumunu paylaşabilirsiniz.

- Bağlam menüsü aracılığıyla manuel olarak bir park yeri ekleyebilirsiniz.
- Süre sınırlıysa, eklenti hem başlangıç hem de bitiş zamanını kaydeder.
- Bitiş zamanı, cihazınızın takviminde bir hatırlatıcıyı tetikleyebilir.
- Park detayları daha sonra görüntülenebilir veya navigasyon için kullanılabilir.

İşaretleyici geçicidir ve artık ihtiyaç duyulmadığında kolayca kaldırılabilir.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Otopark widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Otopark widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

Haritada bir park yeri kullanmak için aşağıdaki ayarları yapmanız gerekir:

1. Ana Menü → Eklentiler'den [Otopark konumu eklentisini](../plugins/index.md#enable--disable) etkinleştirin.
2. Haritada bağlam menüsü aracılığıyla bir [park yeri](#set-a-spot) ayarlayın.
3. (İsteğe bağlı) Daha hızlı erişim için ekrana [Otopark widget'ını](#parking-widget) ekleyin.


## Haritadaki Otopark Konumu {#parking-spot-on-the-map}

Bir park yeri işaretlediğinizde, OsmAnd coğrafi koordinatlarını bir zaman damgasıyla birlikte kaydeder. Gerekirse, bir zaman sınırı ve takvim hatırlatıcısı da eklenebilir.


### Bir Konum Ayarlayın {#set-a-spot}

Haritada bir Otopark konumu ayarlamak için, gerekli seviyeye yakınlaştırın, ardından haritadaki yere uzun dokunun ve açılan [Bağlam menüsünde](../map/map-context-menu.md) ayarları yapın.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Android'de Otopark konumu ayarlayın](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Android'de zaman sınırları ayarlayın](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta Eylemlerde Otopark Seçin](@site/static/img/plugins/parking/ios_set_p_point2.png) ![iOS'ta Otopark noktasını ayarlayın](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Bir park işaretleyicisi yerleştirmek için haritayı yakınlaştırın, gerekli konuma uzun dokunun ve [bağlam menüsünü](../map/map-context-menu.md) açın. Ardından:

1. [Eylemler'e](../map/map-context-menu#actions) dokunun.
2. **Otopark konumu olarak işaretle** (*Android*) veya **Otopark konumu ekle** (*iOS*) seçeneğini seçin.
3. Mevcut seçeneklerden birini seçin:
   - **Süresiz** – geri sayım olmadan temel bir işaretleyici ekler.
   - **Süreli park** – bir bitiş zamanı ayarlamanıza ve isteğe bağlı olarak cihazınızın takviminde bir hatırlatıcı oluşturmanıza olanak tanır.
4. İşaretleyiciyi yerleştirmek için onaylayın. Başlangıç zamanı otomatik olarak kaydedilir.

:::info Başlangıç Zamanı
Başlangıç zamanı her zaman otomatik olarak ayarlanır. Bitiş zamanını değiştirmeniz gerekirse, park yerini silip yeniden oluşturmanız gerekir. Hatırlatıcılar, yalnızca kurulum sırasında bu seçeneği seçtiyseniz takviminize eklenir.
:::


### Bilgi Alın {#stay-informed}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Otopark widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Android'de kalan süre](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Otopark widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![iOS'ta otopark bilgisi](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

Bir park yeri kaydedildikten sonra, OsmAnd bağlam menüsü veya isteğe bağlı [Otopark widget'ı](#parking-widget) aracılığıyla konumunu ve zamanlamasını izlemenize yardımcı olur.

Haritayı uzaklaştırarak veya kaydedilen konumunuza haritayı ortalayan **Otopark widget'ına** dokunarak park işaretleyicisini görüntüleyebilirsiniz. Widget ayrıca mevcut konumunuzdan (veya harita merkezinden) park konumuna olan mesafeyi de gösterir.

Park işaretleyicisine dokunduğunuzda ek detaylar gösterilir:

- **Başlangıç zamanı** – işaretleyicinin yerleştirildiği an.
- **Kalan süre** veya **Süresi dolan süre** – bir zaman sınırı belirlenmişse, ne kadar süre kaldığını veya sürenin dolmasından bu yana ne kadar zaman geçtiğini gösterir.
- Takvim hatırlatıcısını etkinleştirdiyseniz, cihazınızın takvim uygulamasında görünecektir.


### Bir Yol Noktasına Gitme {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Android'de Otopark noktasına gidiliyor](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta Otopark noktasına gidiliyor](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

Aracınıza kolayca geri dönmek için park yerini bir navigasyon hedefi olarak kullanabilirsiniz. OsmAnd, kaydedilen park konumuna navigasyonu başlatmak için iki ana yol sunar:

**Navigasyon menüsü aracılığıyla**:

  1. **Navigasyon** düğmesine dokunun.
  2. Bir profil seçin.
  3. **Hedef ayarla**'ya dokunun ve kaydedilen noktalar listesinden **Otopark**'ı seçin.

**Otopark widget'ı aracılığıyla**:

  1. **Otopark widget'ına** dokunun.
  2. Park yeri işaretleyicisine dokunun.
  3. **Navigasyon**'u seçin ve kullanmak istediğiniz profili seçin.


### Bir Konumu Kaldırın {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Android'de Otopark Silme Eylemi](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Android'de Otopark Silme Eylemi](@site/static/img/map/context_menu_limited_parking.png) -->

![iOS'ta Otopark Silme Eylemi](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Bir park işaretleyicisini silmek için:

1. Haritada park yerini bulun veya **Otopark widget'ına** dokunun.
2. Bağlam menüsünü açmak için işaretleyiciye dokunun.
3. **Sil** veya **Kapat**'ı seçin.

Bir takvim hatırlatıcısı ayarlanmışsa, o da otomatik olarak kaldırılacaktır.


## Otopark Widget'ı {#parking-widget}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_parking"/>*

![Android'de Otopark widget'ı ekleniyor](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="parking_place"/>*

![iOS'ta Otopark widget'ı ekleniyor](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

[Otopark widget'ı](../widgets/info-widgets.md#parking-widget), ekranın merkezinden kaydedilen park konumuna olan mesafeyi gösterir ve haritayı o noktaya hızlıca ortalamanızı sağlar.

- Widget, yalnızca bir park konumu ayarlandıktan sonra görünür.
- Ekranda değilse, [Ekranı Yapılandır](../widgets/configure-screen.md) menüsü aracılığıyla ekleyebilirsiniz.

Daha fazla bilgi için bakınız: [Bilgi Widget'ları – Otopark Widget'ı](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Genel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritaları (Harita Stilleri)](../../user/map/vector-maps.md)

> *Son güncelleme: Mayıs 2025*