---
source-hash: 14db1ff378f43e871dddc04366518dc17627a2aeb32b40272132b8334b11f558
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
- **Yarıçap Cetveli**, haritadaki herhangi bir noktadan bir yarıçap ayarlamanıza olanak tanır ve mesafe aralıklarını temsil eden eşmerkezli daireler gösterir.
- **Dokunarak Mesafe** aracı, haritaya dokunarak — mevcut konumunuzdan veya herhangi iki konum arasında — mesafeleri ölçmenizi sağlar.

Bu araçlar, ister açık hava etkinlikleri ister hassas navigasyon için olsun, rotaları planlamak, önemli noktalara yakınlığı tahmin etmek ve alanları analiz etmek için kullanışlıdır.

![Yarıçap cetveli ekranı](@site/static/img/widgets/radius_ruler_screen.png)


## Cetvel {#ruler}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Cetvel aracı](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cetvel aracı](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

**Cetvel**, ekranın altında, gerçek dünya uzunluğu (örneğin, 100 m veya 500 ft) ile etiketlenmiş bir çizgi segmenti olarak mevcut harita ölçeğini görüntüler. Özellikleri:

- Ölçek, yakınlaştırma veya uzaklaştırma sırasında dinamik olarak ayarlanır.
- Haritadaki nesneler arasındaki gerçek dünya mesafelerini tahmin etmek için görsel bir referans sağlar.
- Segment uzunluğu, sezgisel kullanım için bir başparmak genişliğine kabaca uyacak şekilde uygun birimlere (örneğin, 100 m) yuvarlanır.

Bu araç, işaretleyici veya rota yerleştirmeden nesne boyutları veya mesafeler hakkında hızlı bir anlayışa ihtiyacınız olduğunda kullanışlıdır.

| | |
|------------|------------|
| Biçim | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Yarıçap Cetveli Widget'ı {#radius-ruler-widget}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="radius_ruler_item"/>*

![Görüntüleme konumu Android](@site/static/img/widgets/radius_ruler_widget_new_andr.png)
</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="radius_ruler_item"/>*

![Görüntüleme konumu Android](@site/static/img/widgets/radius_ruler_widget_new_ios.png)

</TabItem>

</Tabs>

[Yarıçap Cetveli Widget'ı](../widgets/info-widgets.md#radius-ruler), mevcut konumunuz (*Konumum*) ile haritanın merkezi arasındaki mesafeyi gösterir. Ayrıca herhangi bir özel merkez noktası ayarlamak için haritayı hareket ettirebilirsiniz. Özellikleri:

- Seçilen noktaya merkezlenmiş eşmerkezli daireler görüntüleyin.
- İlk daire, hızlı görsel referans için mevcut [harita ölçeğini](#ruler) yansıtır.
- Doğru yarıçap değerlerini korumak için yakınlaştırma sırasında otomatik olarak ayarlanır.

İlgi çekici noktalara yakınlığı tahmin etmek veya tanımlanmış bir alan etrafında planlama yapmak için bu widget'ı kullanın.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Yarıçap cetveli ekranı](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Yarıçap cetveli"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Yarıçap cetveli"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Yarıçap cetveli"/></td>
    </tr>
</table>

</TabItem>

</Tabs>


## Yarıçap Cetveli için Pusula {#compass-for-radius-ruler}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Pusula cetveli](@site/static/img/widgets/compass_ruler_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pusula cetveli](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

**Yarıçap Cetveli** etkin olduğunda, harita uzayda yönünüzü belirlemenize yardımcı olmak için bir pusula katmanı görüntüler. Katman, haritanın gerçek Kuzey'e göre nasıl hizalandığını gösterir ve cihazın mevcut yönünü gösteren mavi bir üçgen içerebilir.

- Pusula halkası, harita yönünü gösterir — Kuzey'in yukarıda mı yoksa döndürülmüş mü olduğunu.
- Bir **mavi üçgen**, cihazınızın baktığı yönü gösterir.
- Bu özelliği kullanmak için cihazın bir **pusula sensörünü** (GPS pusulası, manyetometre) desteklemesi ve etkinleştirmesi gerekir.
- Cihazı yatay tutmak doğruluğu ve görselleştirmeyi artırır.
- **Mavi üçgen** ve **kırmızı ok** (Kuzey) ikisi de yukarıyı gösteriyorsa, cihaz gerçek Kuzey'e hizalanmıştır.

Bu katman, [harita yönünü](../map/interact-with-map.md#map-orientation--compass) gerçek ortamla eşleştirmenize olanak tanıyan açık hava navigasyonu için kullanışlıdır.

| | |
|------------|------------|
| Etkinleştir | **Android**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="radius_ruler_item"/>* |
| Biçim | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |


## Merkez / Alt Konum {#center--bottom-position}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,display_position"/>*

![Görüntüleme konumu Android](@site/static/img/widgets/radius_ruler_display_position_2_andr.png) ![Yarıçap cetveli aşağı doğru](@site/static/img/widgets/radius_ruler_view_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Diğer → Ekranda konum konumu*

![Görüntüleme konumu Android](@site/static/img/widgets/radius_ruler_display_position_3_ios.png) ![Yarıçap cetveli aşağı doğru](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

Konumunuz etrafındaki görünür yarıçapı artırmak için, Merkez veya Alt seçeneğini belirleyerek Yarıçap Cetveli'nin konumunu değiştirebilirsiniz.

*Ekrandaki konum* hakkında daha fazla bilgi için [Ekranı Yapılandır](../widgets/configure-screen.md#display-position-location-position-on-screen) makalesine bakın.


## 3D Görünüm {#3d-view}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Yarıçap cetveli 3D formatı](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yarıçap cetveli 3D formatı](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

Yarıçap Cetveli'ni kullanırken mesafeleri ve çevredeki araziyi daha iyi görselleştirmek için **3D görünüme** geçebilirsiniz. Bu görünüm haritayı eğerek görünür yarıçapı genişleten bir perspektif efekti sağlar.

- Konumunuza odaklanmak için [konum düğmesine](../map/interact-with-map.md#my-location-and-zoom) dokunun.
- Haritayı 3D moda eğmek için [iki parmakla yukarı kaydırma](../map/interact-with-map.md#gestures) hareketini kullanın.

Yarıçap daireleri derinlikle görünecektir, bu özellikle engebeli alanlarda veya dikey bağlamın önemli olduğu kentsel ortamlarda rota planlaması için kullanışlıdır.


## Dokunarak Mesafe {#distance-by-tap}

![Haritada iki rastgele nokta arasındaki mesafe](@site/static/img/widgets/distance_between_two_random_points.png)

**Dokunarak Mesafe** aracı, Yarıçap Cetveli'ni kullanmadan veya bir rota oluşturmadan haritadaki noktalar arasındaki mesafeleri ölçmenizi sağlar.

İki kullanım durumu vardır:

- **Konumunuzdan bir noktaya olan mesafe**
  Haritada herhangi bir yere dokunun ve mevcut konumunuzdan dokunulan noktaya düz bir çizgi ile birlikte bir mesafe etiketi görünecektir. Başka bir yere dokunsanız bile çizgi ekranda kalır.

- **Herhangi iki nokta arasındaki mesafe**
  Haritada iki noktaya aynı anda dokunun (çoklu dokunuş). İki noktayı bir çizgi birleştirir ve ölçülen mesafe görüntülenir.

| | |
|------------|------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location,map_widget_distance_by_tap"/>* |
| Metin boyutu (Android) | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap,text_size"/>* |
| Birimler Biçimi | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Video Rehberleri {#video-guides}

OsmAnd'da Yarıçap Cetveli ve ilgili araçları nasıl kullanacağınızı öğrenmek için bu kısa eğitimleri izleyin:

<Tabs groupId="operating-systems" queryString="operating-systems">

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
- [Bilgi widget'ları](./info-widgets.md)
- [Navigasyon widget'ları](./nav-widgets.md)
- [Hızlı Eylem](./quick-action.md)
- [İşaretleyici widget'ları](./markers.md)

> *Son güncelleme: Mayıs 2025*