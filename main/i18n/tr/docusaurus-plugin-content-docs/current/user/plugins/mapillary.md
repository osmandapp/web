---
source-hash: c1e40198b8d078b7e3678c0105a5dc91442a1ca2f47b65d03facbd7ca77df64a
sidebar_position: 6
title: Mapillary
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

Daha hızlı hareket etmek için OsmAnd'da [Mapillary](https://www.mapillary.com/) tarafından sağlanan rotalarınızın veya ilgi çekici yerlerinizin sokak düzeyindeki görünümlerini kullanabilirsiniz (internet bağlantısı gereklidir).

[Mapillary katmanı](https://www.mapillary.com/) sokak düzeyindeki görüntüleri doğrudan OsmAnd uygulamasına getirir, böylece herhangi bir ilgi çekici yerin veya planladığınız rotanın çevresini kolayca gözden geçirebilirsiniz. Görüntü eksikse, kendiniz ekleyebilirsiniz ve başkaları da kullanabilir. Bu özellik, [Mapillary ekibiyle](https://www.mapillary.com/about) işbirliğimizden doğmuş olup, her iki uygulamanın faydalarını bir araya getirmektedir.

## Gerekli Kurulum Parametreleri {#required-setup-parameters}

OsmAnd haritasında sokak düzeyindeki görüntüleri görüntülemek için aşağıdaki ayarları yapmanız gerekir:

1. *Ana Menü*'nün *Eklentiler* bölümünde [Mapillary eklentisini](../plugins/#enable--disable) etkinleştirin.
2. Haritayı Yapılandır menüsünde gerekli profil için [Sokak düzeyindeki görüntüleri](#enable-layer) haritada görüntüleyin.

## Harita Katmanı {#map-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary eklenti noktaları haritada Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary eklenti noktaları haritada iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

Sokak görüntülerini içeren harita katmanı, OsmAnd haritasında birbirine bağlı yeşil noktalar dizisi olarak görüntülenir.

- Mapillary kullanıcılarının fotoğrafları bu yeşil noktalara eklenir.
- Bir sokak görünümü fotoğrafını açmak için haritadaki yeşil bir noktaya dokunun. Fotoğraflar, mevcutsa [harita bağlam menüsündeki](#map-context-menu) bir listeden de seçilebilir.
- Seçimden sonra, uygulama ekranı OsmAnd haritası ve Mapillary sokak düzeyindeki sokak görüntüleri olarak ikiye ayrılır.
- Haritada görüntülemek istediğiniz fotoğrafları seçmek için [filtreler](#data-filtering) uygulayabilirsiniz.

### Katmanı Etkinleştir {#enable-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary eklentisi Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_1_andr.png) ![Mapillary eklentisi görüntüleri Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary eklentisi iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) ![Mapillary eklentisi görüntüleri iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

</TabItem>

</Tabs>

Mapillary sokak düzeyindeki görüntüleri haritada görüntülemek için, bu katmanı [Haritayı Yapılandır menüsünde](../map/configure-map-menu.md) *Göster* bölümünde etkinleştirmeniz gerekir.

*Erişim: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*.

:::note Mapillary Fotoğraf görüntüleyici

- Seçilen görüntüyü [**Mapillary**](https://www.mapillary.com/mobile-apps) uygulamasında açmak için *üç nokta menüsü* (&#8285;) düğmesine dokunun.
- Görüntüden görüntüye geçmek için oka dokunun.
:::

### Veri Filtreleme {#data-filtering}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary eklentisi filtresi Android](@site/static/img/plugins/mapillary/mapillary_config_map_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary eklentisi filtresi iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

Bir filtre oluşturabilir ve haritada hangi fotoğrafların görüntüleneceğini seçebilirsiniz. Örneğin, yalnızca yeni görüntüleri veya yalnızca 360 derecelik görüntüleri görüntülemeyi seçebilirsiniz.

*Erişim: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*

:::note Önbelleği Yenile
Seçilen görüntüler görüntülenmezse, **Döşeme önbelleği** için **Yenile**'yi kullanın.
:::

## Harita Bağlam Menüsü {#map-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary eklentisi Harita Bağlam menüsü Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary eklentisi Harita Bağlam menüsü iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>

Mapillary eklentisi etkinleştirilirse, haritada seçilen noktanın 40 metrelik yarıçapı içinde bulunan sokak fotoğraflarını görüntüleyebilirsiniz. Fotoğraflar [harita bağlam menüsünde](../map/map-context-menu.md#online-photos) açılır.

## Fotoğraf Ekle {#add-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary eklentisi Harita Bağlam menüsü Android](@site/static/img/plugins/mapillary/mapillary_add_photos_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary eklentisi Harita Bağlam menüsü iOS](@site/static/img/plugins/mapillary/mapillary_add_photos_ios.png)

</TabItem>

</Tabs>

Fotoğraf eklemek için [Mapillary uygulamasına](https://www.mapillary.com/mobile-apps) kaydolmanız gerekir. Ayrıca, harita bağlam menüsünün [Çevrimiçi fotoğraflar](../map/map-context-menu.md#online-photos) bölümündeki *Fotoğraf ekle* düğmesine dokunarak harita bağlam menüsüne fotoğraf ekleyebilirsiniz. Ardından Mapillary uygulaması açılacaktır.

## Mapillary Pencere Öğesi {#mapillary-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Bir panel seçin → <Translate android="true" ids="mapillary"/>*

![Mapillary eklentisi Android](@site/static/img/plugins/mapillary/mapillary_widget_1_andr.png) ![Mapillary eklentisi Harita Bağlam menüsü Android](@site/static/img/plugins/mapillary/mapillary_widget_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Bir panel seçin → <Translate ios="true" ids="mapillary"/>*

![Mapillary eklentisi Harita Bağlam menüsü iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>

[Mapillary pencere öğesi](../widgets/info-widgets.md#mapillary-widget), Mapillary uygulamasına hızlı erişim sağlamak için kullanılır. Pencere öğesi, Mapillary eklentisi etkinleştirildiğinde otomatik olarak ana ekrana eklenir. Mapillary pencere öğesini ve diğer pencere öğelerini [Ekranı Yapılandır](../widgets/configure-screen.md) menüsünde etkinleştirebilir veya devre dışı bırakabilirsiniz.

## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Küresel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritaları (Harita Stilleri)](../../user/map/vector-maps.md)