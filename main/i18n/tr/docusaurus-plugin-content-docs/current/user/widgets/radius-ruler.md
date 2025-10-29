---
source-hash: 7bcd604be2adee088e0e972171e253a6a74edb5bd00fc30c97ec3fe0031d35e8
sidebar_position: 5
title: Yarıçap Cetveli ve Cetvel
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

OsmAnd'daki **Cetvel araçları**, mesafeleri ölçmenize ve [harita ölçeğini](https://en.wikipedia.org/wiki/Scale_(map)) hassasiyetle anlamanıza yardımcı olmak için tasarlanmıştır.

- **Cetvel** aracı, ekran üzerindeki nesneler arasındaki mesafeleri görsel olarak değerlendirmenize yardımcı olan, metre veya fit gibi birimlerde dinamik bir harita ölçeği görüntüler.
- **Yarıçap Cetveli**, harita üzerindeki herhangi bir noktadan bir yarıçap ayarlamanıza olanak tanır ve mesafe aralıklarını temsil eden eş merkezli daireler gösterir.
- **Dokunarak Mesafe** aracı, haritaya dokunarak mesafeleri ölçmenizi sağlar — ister mevcut konumunuzdan ister herhangi iki konum arasında.

Bu araçlar, rotaları planlamak, önemli noktalara yakınlığı tahmin etmek ve alanları analiz etmek için kullanışlıdır — ister açık hava etkinlikleri ister hassas navigasyon için olsun.

![Yarıçap-cetveli ekranı](@site/static/img/widgets/radius_ruler_screen.png)


## Cetvel {#ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cetvel aracı](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cetvel aracı](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

**Cetvel**, ekranın altında, gerçek dünya uzunluğu (örneğin, 100 m veya 500 ft) ile etiketlenmiş bir çizgi segmenti olarak mevcut harita ölçeğini görüntüler. Özellikleri:

- Ölçek, yakınlaştırma veya uzaklaştırma yaptıkça dinamik olarak uyum sağlar.
- Harita üzerindeki nesneler arasındaki gerçek dünya mesafelerini tahmin etmek için görsel bir referans sağlar.
- Segment uzunluğu uygun birimlere (örneğin, 100 m) yuvarlanır ve kabaca bir başparmağın genişliğine denk gelir.

Bu araç, işaretleyici veya rota yerleştirmeden nesne boyutları veya mesafeler hakkında hızlı bir anlayışa ihtiyacınız olduğunda kullanışlıdır.

| | |
|------------|------------|
| Biçim | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Yarıçap Cetveli Pencere Öğesi {#radius-ruler-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Bir panel seçin → Pencere öğesi ekle → <Translate android="true" ids="radius_ruler_item"/>*

![Android konum görüntüsü](@site/static/img/widgets/radius_ruler_height_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Bir panel seçin → Pencere öğesi ekle → <Translate android="true" ids="radius_ruler_item"/>*

![Android konum görüntüsü](@site/static/img/widgets/radius_ruler_height_ios.png)

</TabItem>

</Tabs>

[Yarıçap Cetveli Pencere Öğesi](../widgets/info-widgets.md#radius-ruler), mevcut konumunuz (*Konumum*) ile haritanın merkezi arasındaki mesafeyi gösterir. Ayrıca, herhangi bir özel merkez noktası ayarlamak için haritayı hareket ettirebilirsiniz. Özellikleri:

- Seçilen noktaya merkezlenmiş eş merkezli daireler görüntüleyin.
- İlk daire, hızlı görsel referans için mevcut [harita ölçeğini](#ruler) yansıtır.
- Doğru yarıçap değerlerini korumak için yakınlaştırma yaparken otomatik olarak ayarlanır.
- Pencere öğesine dokunarak üç görüntüleme modu arasında geçiş yapın: <Translate android="true" ids="shared_string_hide"/>, <Translate android="true" ids="light_theme"/>, ve <Translate android="true" ids="dark_theme"/>.
- Uzun dokunma, ek seçeneklerle pencere öğesinin bağlam menüsünü açar.
- Pencere öğesi ayarları iki ayarlanabilir parametre içerir: *<Translate android="true" ids="shared_string_height"/>* — pencere öğesinin ekrandaki görsel yüksekliğini kontrol eder; *<Translate android="true" ids="shared_string_show_icon"/>* — pencere öğesinin simgesinin görünürlüğünü açar/kapar.

Bu pencere öğesini, ilgi çekici noktalara yakınlığı tahmin etmek veya belirli bir alan etrafında plan yapmak için kullanın.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yarıçap-cetveli ekranı](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Yarıçap-cetveli"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Yarıçap-cetveli"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Yarıçap-cetveli"/></td>
    </tr>
</table>

</TabItem>

</Tabs>


## Yarıçap Cetveli için Pusula {#compass-for-radius-ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pusula cetveli](@site/static/img/widgets/compass_ruler_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pusula cetveli](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

**Yarıçap Cetveli** etkin olduğunda, harita, uzayda kendinizi yönlendirmenize yardımcı olmak için bir pusula katmanı görüntüler. Katman, haritanın gerçek Kuzey'e göre nasıl hizalandığını gösterir ve cihazın mevcut yönünü gösteren mavi bir üçgen içerebilir.

- Pusula halkası, harita yönünü gösterir — Kuzey yukarıda mı yoksa döndürülmüş mü.
- **Mavi bir üçgen**, cihazınızın baktığı yönü gösterir.
- Bu özelliği kullanmak için cihazın bir **pusula sensörünü** (GPS pusulası, manyetometre) desteklemesi ve etkinleştirmesi gerekir.
- Cihazı yatay tutmak doğruluğu ve görselleştirmeyi artırır.
- Hem **mavi üçgen** hem de **kırmızı ok** (Kuzey) yukarıyı gösteriyorsa, cihaz gerçek Kuzey'e hizalanmıştır.

Bu katman, [harita yönünü](../map/interact-with-map.md#map-orientation-modes) gerçek ortamla eşleştirmenize olanak tanıyan açık hava navigasyonu için kullanışlıdır.  

| | |
|------------|------------|
| Etkinleştir | **Android**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Bir panel seçin → Pencere öğesi ekle → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Bir panel seçin → Pencere öğesi ekle → <Translate android="true" ids="radius_ruler_item"/>* |
| Biçim | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |  


## Merkez / Alt Konum {#center--bottom-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,display_position"/>*

![Android konum görüntüsü](@site/static/img/widgets/radius_ruler_display_position_2_andr.png) ![Yarıçap cetveli aşağı doğru](@site/static/img/widgets/radius_ruler_view_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Diğer → Ekrandaki konum konumu*

![Android konum görüntüsü](@site/static/img/widgets/radius_ruler_display_position_3_ios.png) ![Yarıçap cetveli aşağı doğru](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

Konumunuz etrafındaki görünür yarıçapı artırmak için, Yarıçap Cetveli'nin konumunu *Merkez* veya *Alt* seçeneğini belirleyerek değiştirebilirsiniz.  

*Ekrandaki konum* hakkında daha fazla bilgi için [Ekranı Yapılandır](../widgets/configure-screen.md#display-position-location-position-on-screen) makalesine bakın.


## 3B Görünüm {#3d-view}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yarıçap cetveli 3B biçimi](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yarıçap cetveli 3B biçimi](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

Yarıçap Cetveli'ni kullanırken mesafeleri ve çevredeki araziyi daha iyi görselleştirmek için **3B görünüme** geçebilirsiniz. Bu görünüm, haritayı eğerek görünür yarıçapı genişleten bir perspektif efekti sağlar.

- Konumunuza odaklanmak için [konum düğmesine](../map/interact-with-map.md#my-location-and-zoom) dokunun.
- Haritayı 3B moda eğmek için [iki parmakla yukarı kaydırma](../map/interact-with-map.md#gestures) hareketini kullanın.

Yarıçap daireleri derinlikle görünecektir, bu özellikle engebeli alanlarda veya dikey bağlamın önemli olduğu kentsel ortamlarda rota planlaması için kullanışlıdır.


## Dokunarak Mesafe {#distance-by-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dokunarak Mesafe Android](@site/static/img/widgets/distance_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Dokunarak Mesafe iOS](@site/static/img/widgets/distance_tap_ios.png)

</TabItem>

</Tabs>

**Dokunarak Mesafe** aracı, Yarıçap Cetveli'ni kullanmadan veya bir rota oluşturmadan harita üzerindeki noktalar arasındaki mesafeleri ölçmenizi sağlar.

İki kullanım durumu vardır:

- **Konumunuzdan bir noktaya olan mesafe**  
  Haritada herhangi bir yere dokunun; mevcut konumunuzdan dokunduğunuz noktaya düz bir çizgi ve bir mesafe etiketi görünecektir. Başka bir yere dokunsanız bile çizgi ekranda kalır.

- **Herhangi iki nokta arasındaki mesafe**  
  Haritada iki noktaya aynı anda dokunun (çoklu dokunuş). İki noktayı bir çizgi birleştirir ve ölçülen mesafe görüntülenir.

Mesafe etiketinin metin boyutunu da ayarlayabilirsiniz. *<Translate android="true" ids="shared_string_normal"/>* (varsayılan) ve *<Translate android="true" ids="shared_string_large"/>* (1,5× daha büyük) arasında seçim yapın. Büyük seçenek seçildiğinde, okunabilirliği artırmak için çizgi ile etiket arasında otomatik olarak ekstra boşluk eklenir. Değişiklikler uygulamayı yeniden başlatmadan anında uygulanır.

| | |
|------------|------------|
| Etkinleştir |  **Android:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap"/>* |
|   |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location,map_widget_distance_by_tap"/>* |
| Metin boyutu | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap,text_size"/>* |
| Birim Biçimi | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Video Rehberleri {#video-guides}

OsmAnd'da Yarıçap Cetveli ve ilgili araçları nasıl kullanacağınızı öğrenmek için bu kısa eğitimleri izleyin:

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/MWT20dVtkDc" title="YouTube video oynatıcı" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

<TabItem value="ios" label="iOS">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/C9QLQ52ndiA" title="YouTube video oynatıcı" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

</Tabs>


## İlgili Makaleler {#related-articles}

- [Ekranı Yapılandır](./configure-screen.md)
- [Harita düğmeleri](./map-buttons.md)
- [Bilgi pencere öğeleri](./info-widgets.md)
- [Navigasyon pencere öğeleri](./nav-widgets.md)
- [Hızlı Eylem](./quick-action.md)
- [İşaretleyici pencere öğeleri](./markers.md)