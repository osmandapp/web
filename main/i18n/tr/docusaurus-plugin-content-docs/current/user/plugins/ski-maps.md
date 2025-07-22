---
source-hash: f14066ee1c93315ba000b7389de0d0c6a42230c90308779a1b3a10e9a16d1fc7
sidebar_position: 13
title: Kayak Haritası Görünümü
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

OsmAnd Kayak Haritası görünümü eklentisi, ünlü ve popüler yamaçları, resmi olarak onaylanmış kayak alanlarını ve çoğu kayak merkezinin parkur haritalarını gösterir. [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) pist haritaları, OsmAnd kayak haritaları için veri kaynağıdır. Vektör haritaları raster haritalarla birleştirildiğinde, OsmAnd kayak haritası çok doğrudur ve eğitmenler, dağcılar ve kış sporları meraklıları için faydalı olacaktır.

OsmAnd kayak haritası vektör haritalarının bir parçasıdır ve ek indirme gerektirmez. Varsayılan olarak devre dışıdır. OsmAnd Kayak Haritası, bazı nesneleri vurgulayarak ve diğerlerini daha az görünür hale getirerek ek özellikler sağlayan [Harita Stillerinden](../map/vector-maps.md) biridir.

Aşağıda iki profil gösterilmiştir: soldaki kayak için, sağdaki ise sürüş içindir. Kayak profili, parkurları, hava yollarını, kış renklerini ve kayak alanında gezinmek için faydalı tüm harita nesnelerini vurgular.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de Kayak haritaları](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![Android'de Kayak haritaları yok](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta Kayak haritaları](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![iOS'ta Kayak haritaları yok](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

Aşağıdaki ayar, OsmAnd Kayak Haritası'nın ekranda görünmesini sağlar:

1. [Kayak haritası görünümü eklentisini](../plugins/index.md#enable--disable) etkinleştirin.
2. Gerekli [profil](../personal/profiles.md) için [Kış ve Kayak](#set-winter-and-ski-map-style) harita stilini ayarlayın.
3. Gerekirse, [haritaları birleştirin](#combine-maps).


### Kış ve Kayak Harita Stilini Ayarla {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*

![Android'de Kış stilini etkinleştir](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![Kayak haritaları eklentisi harita stili Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*

![iOS'ta Kış stilini etkinleştir](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![Kayak haritaları eklentisi harita stili iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

Kış ve Kayak harita stili, parkurları, kayak turu rotalarını, kızak parkurlarını ve kış ve kayakla ilgili bilgileri vurgular. Stili haritada görüntülemek için aşağıdaki ayarları yapmanız gerekir:

1. Gerekli [profili](../personal/profiles.md) seçin.
2. [Haritayı yapılandır](../map/configure-map-menu.md) seçeneğini açın.
3. Harita stili/Harita türü'ne gidin, açın ve **Kış ve Kayak**'ı işaretleyin.

:::tip yapılandırmalar
Kayak profili, Kış ve Kayak stilleriyle birlikte kullanılmak üzere tasarlanmıştır. Ancak, her bir profil için navigasyon türü değiştirilebilir ve ayrı ayrı ayarlanabilir, bu nedenle profilin, harita stilinin ve navigasyonun son yapılandırması tamamen ayarlarınıza bağlıdır.
:::


### Haritaları Birleştir {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de harita birleşimi yok](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![Android'de harita birleşimi var](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta harita birleşimi yok](@site/static/img/plugins/ski-maps/ios_no_contours_hillshade.png) ![iOS'ta harita birleşimi var](@site/static/img/plugins/ski-maps/ios_yes_contours_hillshade.png)

</TabItem>

</Tabs>

[Kış ve Kayak harita stili](../map/vector-maps.md#winter-and-ski) içeren [Vektör haritası](../map/vector-maps.md), [Kontur çizgileri](../plugins/topography.md#show-contour-linesterrain) ve [Gölgelendirme haritası](../plugins/topography.md#hillshade-map) ile tamamlanabilir. Aşağıda iki örnek verilmiştir. Varsayılan vektör haritasındaki parkurlar solda, *Kontur Çizgileri* ve *Gölgelendirme* raster haritasıyla birleştirilmiş vektör haritasındaki parkurlar ise sağda gösterilmiştir. İkinci durumda, harita zorluk, risk ve mesafeyi tahmin etmeye yardımcı olmak için daha fazla yükseklik verisi gösterir.


### Kayak Haritası Stilini Devre Dışı Bırak {#disable-ski-map-style}

Parkurları ve kış renklerini haritadan kaldırmak tercih edilirse veya kayak sezonu bittiyse, aşağıdakilerden birini yapın:

- Gerekli profil için [Kış ve Kayak](#set-winter-and-ski-map-style) harita stilinin işaretini kaldırın.
- [Kayak profilini](../personal/profiles.md) başka bir profile değiştirin.
- [Kayak haritası görünümü eklentisini](../plugins/index.md#enable--disable) devre dışı bırakın.


:::info eklentiyi kaldır
Kayak Haritası Görüntüleyici eklentisi ayrı bir uygulamadır ve ekranının devre dışı bırakılması onu kaldırmaz. Kaldırmanız gerekirse, eklenti menüsündeki *Ayarları Aç* seçeneğini kullanarak Android ayarlarına gidin.
:::


## Kayak Profili {#skiing-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Android'de Denizcilik derinlik konturları](@site/static/img/plugins/ski-maps/and_skiing_profile.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![iOS'ta Derinlik konturları](@site/static/img/plugins/ski-maps/ios_skiing_profile.png)

</TabItem>

</Tabs>

Kış ve Kayak harita stilleri herhangi bir profilde etkinleştirilebilir. Ancak varsayılan olarak ayarlandığı [Kayak profilinde](../personal/profiles.md) en değerlidir. Kayak profili, [Kayak navigasyonu](../navigation/routing/ski-routing.md) için çok rahattır.


## Kayak Haritası Stili {#ski-map-style}

Herhangi bir referans için [Kayak haritası lejantını](../../user/map-legend/ski-map.md) kullanın. Haritadaki pist türlerini, hava yolu türlerini ve haritadan okunabilecek diğer özellikleri belirlemeye yardımcı olur.

Haritayı okuyarak, belirli bir parkurun zorluğu, parkurun türü, bakım yapılıp yapılmadığı ve parkurun geceleri aydınlatılıp aydınlatılmadığı gibi sizin için önemli olan ayrıntıları öğrenebilirsiniz.

Burada açıklanan seçenekler [Kayak navigasyonunda](../navigation/setup/route-navigation.md) mevcuttur. **Kayak navigasyonu**, yalnızca kayak için geçerli olan bireysel rota seçeneklerini ayarlar.


:::info oluşturma stili
OsmAnd Kayak Haritası, haritada hangi nesnelerin gösterileceğini ve nesnelerin görünümünü belirleyen oluşturma stillerinden biri olarak oluşturulmuştur. Tüm oluşturma stilleri [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml) dosyasında açıklanmıştır. XML dosyasının iç yapısını tanımlayan kurallar için [Oluşturma belgelerine](../../technical/osmand-file-formats/osmand-rendering-style.md) bakın.
:::


### Zorluğa Göre Pistler {#pistes-by-difficulty}

| Renk | Açıklama |
| --- | --- |
| ![Başlangıç pisti](@site/static/img/plugins/ski-maps/1c_green_1.png) | Yeşil - Başlangıç pisti |
| ![ Kolay tepeler](@site/static/img/plugins/ski-maps/2c_blue_1.png) | Mavi - Kolay tepeler |
| ![Orta eğimli yamaçlar](@site/static/img/plugins/ski-maps/3c_red_1.png) | Kırmızı - Orta eğimli yamaçlar |
| ![İleri düzey zorluk](@site/static/img/plugins/ski-maps/4c_black_1.png) | Gri - İleri düzey zorluktaki yamaçlar |
| ![Uzman zorluk](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | Sarı - Uzman zorluktaki yamaçlar |

İzlerin zorluğu genellikle belirli renklerle belirtilir. Renkler farklı ülkelerde ve tatil yerlerinde farklılık gösterebilir. Aşağıda bazı pratik yönergeler verilmiştir.

:::tip rehberlik
Her parkur zorluk türü için daha spesifik rehberlik için, [OSM pist zorluk referansına](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) veya yamaçları, engelleri ve tehlikeleri de dikkate alan başka bir kaynağa bakın.
:::


### Türüne Göre Pist {#piste-by-types}

Pistler türe göre farklılık gösterir. Bir tür, farklı kışla ilgili etkinliklerin gereksinimlerini karşılamak için bir pist için farklı özellikler temsil eder: alp disiplini kayak, klasik paten, snowboard, kızakla kayma, kros kayağı, kayak turu, mogul kayak, gece kayağı vb. Haritadaki [pist türünü](https://wiki.openstreetmap.org/wiki/Key:piste:type) anlamak, en uygun navigasyon rotasını oluşturmaya yardımcı olur.

- **Yokuş aşağı/alp disiplini kayak pisti.**
Kayak navigasyonu için kullanılır. Bu [pist türü](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) yön ve zorluğa sahiptir ve çoğu zaman kayak merkezinin sınırlarıyla çevrilidir. Yokuş aşağı bir pist Kayak navigasyonu için seçildiğinde, pistin yönü dikkate alınır. Kalkış ve Varış noktaları pistin yönüne zıt olarak belirlenirse, navigasyon en yakın hava yolu boyunca ilerler.

- **Kuzey/kros kayağı pisti.**
Kayak navigasyonu için de kullanılır. Bu [pist türü](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) zorluğa sahip değildir, yönü olabilir veya olmayabilir ve çoğu zaman kayak merkezinin sınırlarının dışına çıkar. Bu tür pistler boyunca navigasyon yaparken, Kalkış ve Varış noktaları genellikle değiştirilebilir.

- **Kayak turu pisti.**
Genellikle kayakçılar tarafından Kuzey tırmanışı ve yokuş aşağı iniş için kullanılır. Bir kayak turu pistinin zorluğu genellikle ilgili renkle işaretlenir. Kayak navigasyonu, pist türlerini birleştirmenize olanak tanıyan bu tür bir pist boyunca bir rota oluşturabilir.

- **Diğer kayak pisti.**
*Yürüyüş Parkurları* veya *Kızak Parkurları* gibi pist türleri kayak veya yürüyüş profilleri için kullanılabilir.


### Bakım Parkurları {#grooming-trails}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Android'de bakımı etkinleştir](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![Android'de görüntülenen bakım](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![iOS'ta bakımı etkinleştir](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![iOS'ta görüntülenen bakım](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)

</TabItem>

</Tabs>

Haritada belirli bir pistin bakımlı olup olmadığını kontrol etmek için, [Haritayı yapılandır](../map/configure-map-menu.md) menüsünden açılan **<Translate android="true" ids="rendering_category_details"/>** listesindeki **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** seçeneğini etkinleştirmeniz gerekir.
Özel makineler, klasik paten, buz pateni ve diğerleri gibi uygun aktivite için hazırlamak üzere parkurları düzenler. Aynı pist farklı alanlarda farklı şekilde düzenlenebilir.

### Kayak Pisti Rotaları {#ski-slope-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Android'de devre dışı bırakılmış rotalar](@site/static/img/plugins/ski-maps/and_no_routes.png) ![Android'de etkinleştirilmiş rotalar](@site/static/img/plugins/ski-maps/and_yes_routes.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![iOS'ta devre dışı bırakılmış rotalar](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![iOS'ta etkinleştirilmiş rotalar](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>

Kayak merkezi dışındaki hangi pistlerde gezinebileceğinizi öğrenmek için, [Haritayı yapılandır](../map/configure-map-menu.md) menüsünden açılan **<Translate android="true" ids="rendering_category_routes"/>** listesindeki **<Translate android="true" ids="rendering_attr_pisteRoutes_name"/>** seçeneğini etkinleştirmeniz gerekir.

Kayak profili, kayak navigasyonu ve [Kış ve Kayak harita stili](../map/vector-maps.md#winter-and-ski) etkinleştirildiğinde, [Kayak yamaçları](../map/vector-maps.md#routes) rotaları, Kayak navigasyonunun navigasyon rotaları oluşturmak için kullanabileceği tüm pist türlerini gösterir. Bu tür kayak yamacı rotaları, etkinleştirildiğinde, çoğunlukla kayak merkezi sınırları dışında mor renkle çevrelenir.


### Gece ve Aydınlatma {#night-and-lighting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de Gece modunu ve Aydınlatmayı etkinleştir](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![Android'de Gece ve aydınlatma](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta Gece modunu ve Aydınlatmayı etkinleştirme](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![iOS'ta Gece ve Aydınlatma](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

**Kış ve kayak** stili, [Gece veya Gün doğumu/gün batımı modu](../map/vector-maps.md#map-mode) ile kullanılabilir. Karanlık renkleri veya ekranı geceleri karartmayı tercih edenler için, ayrıca gece kayağı yapanlar için rahat bir seçimdir. Gece modu ile birlikte, OsmAnd Kayak Haritaları, [Sokak Aydınlatması](../map/vector-maps.md#details) seçeneği ile hangi pistlerin aydınlatmaya sahip olduğunu da gösterebilir.

Her iki seçenek de [Haritayı yapılandır](../map/configure-map-menu.md) menüsündedir.

- ***Gece modu*** seçeneğini etkinleştirmek için listeyi aşağı kaydırın:
*<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>*

- ***Sokak Aydınlatması*** seçeneğini etkinleştirmek için **<Translate android="true" ids="rendering_category_details"/>** listesini açın ve seçeneği açın:
*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>*


## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Genel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritaları (Harita Stilleri)](../../user/map/vector-maps.md)

> *Son güncelleme: Aralık 2024*