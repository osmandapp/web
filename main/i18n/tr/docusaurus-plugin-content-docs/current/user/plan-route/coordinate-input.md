---
source-hash: 263596e04f0705ae1c8c57f5afa60aa2cbe3498370962ed69729ec73d60d14f6
sidebar_position: 3
title: Koordinat Girişi
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



<InfoAndroidOnly />

## Genel Bakış {#overview}

*Koordinat Girişi*, coğrafi konumlarını belirterek ara noktalar oluşturmak için basit ve kullanımı kolay bir araçtır. Bu özellik, yalnızca koordinatlarını bildiğiniz belirli yerlere gitmek için faydalı olabilir: eklenen noktalar bir GPX parkuru olarak [kaydedilebilir](#save-as-track) ve daha sonra [GPX navigasyonu](../navigation/setup/gpx-navigation.md) veya [işaretleyicilerle navigasyon](../navigation/setup/markers-navigation.md#add-gpx) için kullanılabilir.

![Koordinat girişi genel bakış](@site/static/img/plan-route/coordinates_input/coordinates_input_overview.png)

## Nasıl kullanılır {#how-to-use}

Ara noktaları *[Harita işaretleyicileri](../personal/markers.md#actions)* menüsünden veya [Yerlerim](../personal/myplaces.md) bölümünden (ekran görüntülerine bakın) oluşturabilirsiniz. Koordinat giriş seçeneğine ulaşmak için lütfen şu yolları izleyin:
- *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → Ekranın altındaki Dünya düğmesi*
- *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,coordinate_input"/>*

![Koordinat girişi nasıl bulunur](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_1.png) ![Koordinat girişi nasıl bulunur](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_2.png)

Koordinat giriş ekranını açtıktan sonra:

- &nbsp;Doğru [ölçü birimlerinin](#coordinates-format) kullanıldığından emin olun. Değilse, [Seçenekler](#options) menüsünden koordinat biçimini değiştirin.
- &nbsp;Noktanın koordinatlarını [şablonu](#add-a-point) kullanarak girin. *[Ekle](#add-a-point)* düğmesine bastıktan sonra noktanız *[noktalar listesine](#points-list)* eklenecektir. Gerekirse ek noktalar girebilirsiniz.
- &nbsp;Nokta(lar)ınızı *[Seçenekler menüsünü](#options)* veya &#8592; *(Geri)* düğmesini kullanarak bir *[Parkur](../personal/tracks/manage-tracks.md)* olarak kaydedin.

:::note
Koordinatlarla nokta oluşturmanın sonuçları - ara noktaları olan bir *[GPX parkuru](../personal/tracks/manage-tracks.md)* - [Yerlerim menüsünde](../personal/myplaces.md) (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/> klasörü*) bulunabilir.
:::

## Seçenekler {#options}

Seçenekler menüsünü kullanarak eklenen noktaları bir parkur olarak [kaydedebilir](#save-as-track), gelişmiş giriş seçeneklerini (sistem klavyesi ve iki basamaklı boylam) etkinleştirebilir veya koordinat biçimini değiştirebilirsiniz.

![Koordinat girişi Seçenekler menüsü Android](@site/static/img/plan-route/coordinates_input/coordinates_input_options.png)

- &nbsp;*<Translate android="true" ids="coord_input_save_as_track"/>* - oluşturulan nokta(lar)ı bir GPX parkuru olarak kaydetmenizi sağlayan bir iletişim kutusu açar. Parkurun adını değiştirebilir veya varsayılan olarak bırakabilirsiniz.
- &nbsp;*<Translate android="true" ids="use_system_keyboard"/>* - koordinatları girmek için Android sistem klavyesini kullanmanızı sağlar.
- &nbsp;*<Translate android="true" ids="use_two_digits_longitude"/>* - boylam verilerini yalnızca iki basamakla girmenizi sağlar. Bu, 0° ila 99° arasındaki boylamlar için (örneğin, Avrupa'da) faydalı olabilir.
- &nbsp;*<Translate android="true" ids="coordinates_format"/>* - giriş için koordinat biçimini değiştirmenizi sağlar.

### Koordinat biçimi {#coordinates-format}

Koordinatları girerken, uygun ölçü birimlerinin kullanıldığından emin olmak önemlidir. Ondalık dereceleri (DD), derece ve dakikaları veya derece, dakika ve saniyeleri (DMS) destekliyoruz.

|Koordinat biçimi| Örnek |
|:------|:------|
|<Translate android="true" ids="dd_ddddd_format"/> |23.48125°|
|<Translate android="true" ids="dd_dddddd_format"/> | 23.481251°|
|<Translate android="true" ids="dd_mm_mmm_format"/> | 23°27.215′|
|<Translate android="true" ids="dd_mm_mmmm_format"/> | 23°27.2152′|
|<Translate android="true" ids="dd_mm_ss_format"/> | 23°27′30″|

## Bir nokta ekle {#add-a-point}

Doğru birimleri seçtikten sonra, gelecekteki ara noktaların koordinatlarını girmeye hazırsınız.
Koordinat giriş ekranı aşağıdaki öğelerden oluşur:

![Koordinat girişi menüsü Android](@site/static/img/plan-route/coordinates_input/coordinates_input_add_point.png)

- &nbsp;*<Translate android="true" ids="shared_string_options"/>*. *[Seçenekler](#options)* menüsünü (yukarıda açıklanmıştır) açar.
- &nbsp;*<Translate android="true" ids="navigate_point_latitude"/> / <Translate android="true" ids="navigate_point_longitude"/>*. Seçilen biçimde (D - derece, M - dakika, S - saniye) veri girmek için kullanılır. *[<Translate android="true" ids="shared_string_options"/> menüsünden](#options)* koordinat biçimini değiştirebilirsiniz.
- &nbsp;*<Translate android="true" ids="navigate_point_latitude"/> ve <Translate android="true" ids="navigate_point_longitude"/>* yarım küre düğmeleri. Ufuk çizgilerini değiştirmenize olanak tanır: *Güney - Kuzey* ve *Batı - Doğu*.
- &nbsp;*Nokta adı* alanı. Varsayılan adı bırakabilir veya kendi adınızı oluşturabilirsiniz.
- &nbsp;*X* düğmesi. İlgili satırın giriş alanını temizler.

### Kısa klavye {#short-keyboard}

Veri girmek için kısa klavyeyi (varsayılan) veya sistem (Android) klavyesini kullanabilirsiniz. Giriş yöntemini değiştirmek için *[Seçenekler](#options)* menüsüne gidin. Enlem ve boylamı girdikten sonra, *+Ekle* düğmesini kullanarak noktayı *[listeye](#points-list)* ekleyebilirsiniz.

![Koordinat girişi Nokta Ekle Android](@site/static/img/plan-route/coordinates_input/coordinates_input_keyboard.png)

- *<Translate android="true" ids="shared_string_add"/>* düğmesi, bir noktayı *[Noktalar listesi](#points-list)* içine kaydetmenizi sağlar.
- *<Translate android="true" ids="shared_string_clear"/>* düğmesi, girilen tüm verileri sıfırlar.
- &#9032; bir sonraki değere atlamanızı sağlar.
- *Klavye düğmeleri* veri girmenizi, silmenizi, bir sonraki koordinat değerine atlamanızı, klavyeyi gizlemenizi sağlar.

### Noktalar listesi {#points-list}

Halihazırda oluşturulmuş noktaları gösterir: ad, bu noktaya olan mesafe ve yön.

![Koordinat girişi kaydetme noktası Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_1.png) ![Koordinat girişi kaydetme noktası Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_2.png)

**⁝** düğmesi, seçilen noktayı düzenlemek veya silmek için bir eylem menüsü açar.
Bir noktaya dokunduğunuzda, koordinatlarını değiştirmek mümkün hale gelir. Değişiklikleri kaydetmek için *Uygula* düğmesine dokunun.

## Parkur olarak kaydet {#save-as-track}

Noktalarınızı bir parkur olarak kaydetmek için *Geri* ( &#8592; ) düğmesine dokunun veya *[Seçenekler](#options)* menüsünü kullanın.

![Koordinat girişi kaydetme noktası Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_save.png) ![Koordinat girişi kaydetme noktası Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_my_places_list.png)

Açılır menüde kendi parkur adınızı girebilir veya varsayılan olarak kaydedebilirsiniz. Eklenen noktaları yeni bir parkur olarak kaydetmek için <Translate android="true" ids="shared_string_save"/> düğmesine dokunun.
Parkurunuzu [Yerlerim menüsünde](../personal/myplaces.md) (<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>) bulacaksınız.