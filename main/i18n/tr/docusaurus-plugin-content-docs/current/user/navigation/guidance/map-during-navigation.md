---
source-hash: 68655a6c7fe1b929b9783bb5b12d4b9eed49a59c076b848011eac29f4e3130f9
sidebar_position: 1
title: Navigasyon Sırasında Harita Ekranı
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

Bu makale, navigasyon sırasında haritanın görünümünün nasıl yapılandırılacağını açıklar. Bu, [rota üzerindeki İÇN'leri](#show-points-along-the-route) görüntüleme, [ekran uyarılarını](#screen-alerts) kullanma, renk, genişlik ve dönüş okları dahil [rota çizgisi görünümü](#route-line-appearance) gibi özellikleri içerir. Bu özellikler, [rota navigasyon ayarları](../setup/route-navigation.md#settings) ile yakından ilişkilidir.


## Navigasyon Sırasında Harita {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

![Navigasyon sırasında harita ekranı](@site/static/img/navigation/configure_map-during-navigation_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Navigasyon sırasında harita ekranı](@site/static/img/navigation/configure_map-during-navigation_ios.png)

</TabItem>

</Tabs>

Navigasyon sırasında harita, konumunuzu bulmak, hedefinizi belirlemek, rotanızı planlamak ve navigasyon rehberliğini görüntülemek için görsel bir araçtır. Bunu yapmak için yakınlaştırma özelliğini kullanabilir ve haritayı gerektiği gibi sürükleyip döndürebilirsiniz. Harita ayrıca yol bilgilerini, sokak adlarını, binaları ve diğer nesneleri de görüntüleyerek rotanızı kolayca belirlemenize yardımcı olabilir.

Navigasyon sırasında, haritanın görünümü seçilen navigasyon profiline göre ayarlanır. Navigasyona başlamadan önce, haritanın görünümünün sürüş sırasında nasıl çalışması gerektiğine dair tercihlerinize uygun olduğundan emin olun.

| Parametre | Açıklama | Not |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* | Harita görünümünün hareket ettikten sonra mevcut konumla senkronize edildiği süre. | *Değer:* <br /> Asla, 5 sn, 10 sn, 15 sn, 20 sn, 25 sn, 30 sn, 45 sn, 60 sn, 50 sn. |
| *<Translate android="true" ids="auto_zoom_map"/>* | Harita mevcut konumunuzla senkronize olduğu sürece, hızınıza göre haritayı otomatik olarak ölçeklendirin. | *Değer:* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - manuel yakınlaştırma. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - yakınlaştırma 200 m'dir.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - yakınlaştırma 100 m'dir. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - yakınlaştırma 5 m'dir. |
| *<Translate android="true" ids="snap_to_road"/>* | Mevcut konum simgesi, mevcut navigasyon rotasıyla ilişkilendirilecektir. | Bu seçeneği kapatabilirsiniz, ancak şerit gösterimi gibi yolla ilgili tüm seçenekler navigasyon sırasında görünür olmayacaktır. |
| *<Translate android="true" ids="approximate_bearing"/>* | Takip ettiğiniz navigasyon rotasına göre yönü belirler. | Ayar yalnızca [OsmAnd geliştirme eklentisi](../../plugins/development.md) etkinleştirildiğinde görünür. <br /> [Android Auto](../auto-car.md#common-issues-and-solutions) kullanırken yönlü haritanın yönü ters dönerse veya titrerse bu ayarlar etkinleştirilmelidir. |


## Rota Üzerindeki Noktaları Göster {#show-points-along-the-route}

*Rota boyunca göster* ayarı, ek rota parametrelerini yapılandırmanıza olanak tanır ve [Sokak adı](../../widgets/nav-widgets#street-name) ve [Uyarı widget'ı](../../widgets/nav-widgets.md#alert-widget) gibi widget'ların çalışması için gereklidir. Seçenekler arasında rota boyunca [**İÇN'leri**](#points-of-interest-pois) ve [**Favorilerimi**](#my-favorites) görüntüleme veya bunları profil için zaten yapılandırılmış olanlara ek olarak kullanma, ayrıca rota boyunca [**Trafik uyarılarının**](#traffic-warnings) tam bir listesini görüntüleme yer alır.

- Rotadan yakındaki noktalara kadar farklı mesafeler (ayarladığınız [uzunluk birimine](../../personal/profiles.md#units--formats) bağlı olarak 5 km'ye veya 3.11 mile kadar) ayarlama yeteneği, [Düz Çizgi](../routing/straight-line-routing.md) veya [Noktadan Noktaya](../routing/direct-to-point-routing.md) yönlendirme türlerini kullanırken faydalıdır.
- *Rota boyunca göster* ayarı için, navigasyon için [Sesli komutları](../guidance/voice-navigation.md) kullanmanız önerilir.
- *İÇN'ler, Favoriler ve Trafik uyarıları*, daha önce kat ettiğiniz bir rota için listede görüntülenmez.


### Noktaları Görüntüle ve Seç {#view-and-select-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,show_along_the_route"/>*

![rota boyunca noktalar](@site/static/img/navigation/show-points-along-4-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>* *→ Rota boyunca göster*

![rota boyunca noktalar](@site/static/img/navigation/show-points-along-4-ios.png)

</TabItem>

</Tabs>

Bir rota oluşturduğunuzda, *Navigasyon* bölümünde rota boyunca görüntülenecek nokta türlerini ayarlayabilirsiniz.


### İlgi Çekici Noktalar (İÇN'ler) {#points-of-interest-pois}

![İÇN katmanı Android](@site/static/img/map/poi_overlay_android.png) ![İÇN katmanı iOS](@site/static/img/map/poi_overlay_ios.png)

[*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-pois) içindeki İÇN ayarları, **Rota boyunca göster** ayarıyla ilişkilidir. Bu, haritada İÇN'leri görüntülemek için esasen ek bir ayardır ve doğrudan oluşturulan rotayla ilgilidir.

*Haritayı yapılandır* bölümünde belirli İÇN'lerin görüntülenmesini belirttiğinizde, indirdiğiniz haritalarda, kategorileri seçmiş olsanız da, hangi kategoriye ait olduğunu umursamadan yakındaki İÇN'leri seçmiş olsanız da, hepsi görüntülenir.

- İÇN'lerin sayısı ve tanımlanması *ölçeğe bağlıdır*.

- *Rota boyunca göster* ayarı, *İÇN katmanındaki* ile aynı kategoriyi görüntüler, ancak seçilen İÇN'lerin *tüm listesini* bir kerede, mevcut konum noktasından rotanızdaki belirlenen mesafeye kadar görürsünüz.

- Gereksiz İÇN'leri listeden kaldırabilir veya bunlardan birine dokunarak [Bağlam menüsünde](../../map/map-context-menu.md) düzenleyebilirsiniz.

- Liste, seçilen [İÇN türlerini](../../map/point-layers-on-map.md#poi-types) ve her biri hakkında *tür simgesi, adı, mevcut konum noktasından İÇN'ye rota boyunca olan mesafe* ve *İÇN'nin rotanın hangi tarafında düz bir çizgide ve ne kadar uzakta olduğuna dair göstergeler* gibi kısa bilgileri içerir.


### Favorilerim {#my-favorites}

Liste, oluşturduğunuz rotanın yakınındaki önceden eklenmiş tüm [Favori](../../personal/favorites.md#favorite-point) noktalarını içerir. İÇN'lerde olduğu gibi, bu noktaların bulunduğu mesafeyi seçebilirsiniz.

- Haritada [Favorilerin gösterimini kapatırsanız](../../map/configure-map-menu.md), listeden kaybolmazlar ve [widget'ta](../../widgets/nav-widgets.md#street-name) görüntülenmeye ve onlara yaklaştığınızda duyurulmaya devam ederler.

- *Favori noktalarınızı* haritaya sadece önceden değil, aynı zamanda bir rota üzerinde navigasyon yaparken de ekleyebilirsiniz.

- *Listeyi güncellemek için*, Favorilerimi kapatıp tekrar açın.

- Her nokta bir ad veya koordinatlar, bir grup, mevcut konum noktasından doğrudan rota çizgisi üzerindeki *Favoriye* olan mesafe, noktanın çizgiden ne kadar sağda veya solda olduğuna dair bilgi ve rotanın yönünü içerir.


### Trafik Uyarıları {#traffic-warnings}

*Trafik uyarıları*, *İÇN'ler* veya *Favorilerim* gibi doğrudan haritada görüntülenmez.

- Bu seçeneği etkinleştirmek ve uyarıları görmek için, önce [Uyarılar widget'ını](../../widgets/nav-widgets.md#alert-widget) etkinleştirmeniz ve yapılandırmanız gerekir.

- Rotanız boyunca *Trafik uyarılarını* görüntüleme seçeneği, seyahatinizi planlarken faydalı olan, rotanıza başlamadan hemen önce tüm listeyi görmenizi sağlar.

- Gereksiz uyarıları listeden kaldırabilir veya konumunu [düzenlemek için](../../map/map-context-menu.md#avoid-road) uyarı adına dokunabilirsiniz.


## Ekran Uyarıları {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

</TabItem>

</Tabs>

| Parametre | Açıklama | Not |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="screen_alerts"/>** | Trafik uyarıları veya hız limitleri gibi bildirimler, bir widget olarak ekranda görünecektir. Navigasyon yaparken sol alt köşede görünürler. | [Uyarı widget'ı türleri](../../widgets/nav-widgets.md#alert-widget) |


## Rota Çizgisi Görünümü {#route-line-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*

![Navigasyon rotası Android](@site/static/img/navigation/route/route_line_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Navigasyon rotası Android](@site/static/img/navigation/route/RLApp_iOS.png)

</TabItem>

</Tabs>

Rota çizgisi görünümünü stile göre seçebilir veya rengini, genişliğini ve çizginin şeffaflığını manuel olarak seçebilirsiniz. Ayrıca, çizgi üzerinde dönüş okları ve yön okları gösterilip gösterilmeyeceğini de seçebilirsiniz.

**Gelişmiş**: Rota çizgisini özelleştirme ayarı, rota çizgisinin görünümünü yükseklik değişikliklerini, önemli yokuş yukarı veya yokuş aşağı, yoldaki buzu, asfalt olmayan yolları, otoyolları ve diğer olası engelleri gösterecek şekilde ayarlamanıza olanak tanır. Ayrıca, rota çizgisine uygulanacak özel [renk şemalarını](../../personal/color-palette-schemes.md#routes) seçebilir veya oluşturabilirsiniz.


:::note
 <ProFeature/> Bazı parametreleri yalnızca <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro aboneliği</a> ile kullanabilirsiniz.
:::


### Renk {#color}

**Renk** ayarı, rota çizgilerinin renk tonlarını değiştirir. Genel renkleri, OsmAnd koleksiyonundan seçilen türe ve **Harita Lejantına** göre değişir. Alternatif olarak, renkleri manuel olarak ayarladığınız renk ve şeffaflıkta olur.

- ***<Translate android="true" id="map_widget_renderer"/>***. Varsayılan renklerle kullanılır. Renklerin tam açıklaması için [Varsayılan Harita stilleri](../../map/vector-maps.md#default-map-styles) bölümüne gidin.
    ![harita stili](@site/static/img/navigation/route/map_st_2.png)

- ***Özel***. Herhangi bir tercih edilen renk ve şeffaflıkta bir çizgi seçmenize olanak tanır. Gündüz haritası için farklı ayarlar ve gece haritası için ayrı ayrı ayarlar seçebilirsiniz.
    ![özel](@site/static/img/navigation/route/custom.png) ![özel](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. Rota noktasının yüksekliğini **yeşil-sarı-kırmızı** gradyan olarak gösterir. **Yeşil**, rotanın en alçak noktasını, **sarı** noktanın ortalama yüksekliğini ve **kırmızı** en yüksek noktayı gösterir. Rota rakım farkı < 100 metreden az ise, gradyan kısmen uygulanır veya uygulanmaz, örneğin 100 metreden 150 metreye basit bir tırmanış için - gradyan **yeşil-sarı** olacaktır. Rengin rakımın mutlak değerini temsil etmediğini unutmayın.
    ![Rakım](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. Rota çizgisi, rotanın yükseklik profiline bağlı olarak farklı renklerde renklendirilir. Ayrıntılı açıklama *Topografi eklentisi* makalesinin [Eğim](../../plugins/topography.md#hillshade-slope-and-altitude-layers) bölümündedir.
    ![Rakım](@site/static/img/navigation/route/Slope.png) ![Rakım](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. Bir rota veya iz çizgisini *yol sınıflandırmasına* göre renklendirir. Ayrıntılı açıklama *Vektör Haritaları - [Yol Stili](../../map/vector-maps.md#road-style)* bölümündedir.
    ![Rakım](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. Yolun veya patikanın fiziksel yüzeyi hakkında bilgi sağlar. Ayrıntılı açıklama *OsmAnd Harita Stili - [Yüzey pürüzsüzlüğü](../../map-legend/osmand.md#surface-smoothness)* makalesinin *Harita Lejantı* bölümünde bulunabilir.
    ![Rakım](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. Tekerlekli araçlar için yol veya patika manevra kabiliyeti sınıflandırması, özellikle yüzeyin düzenliliği ve pürüzsüzlüğü ile ilgili. Ayrıntılı açıklama *OsmAnd Harita Stili - [Pürüzsüzlük](../../map-legend/osmand.md#surface-smoothness)* makalesinin *Harita Lejantı* bölümünde bulunabilir.
    ![Rakım](@site/static/img/navigation/route/Smoothness.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. Bir rota veya iz çizgisini *kış yolu sınıflandırmasına* göre renklendirir. Ayrıntılı açıklama *Vektör Haritaları* makalesinin [Kış ve buz yolları](../../map/vector-maps.md#winter-and-ski) bölümünde bulunabilir.
    ![Rakım](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. Bir rota veya patika çizgisinin kaldırım bileşimine göre renklendirilmesi. Genellikle yol ağı büyük ölçüde asfalt olmadığında kullanılır. Ayrıntılı açıklama *OsmAnd Harita Stili - [Yüzey sağlamlığı](../../map-legend/osmand.md#surface-smoothness)* makalesinin *Harita Lejantı* bölümünde bulunabilir.
    ![Rakım](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;At parkurlarının zorluğu***. Parkurları at parkurlarının zorluğuna göre işler.
    ![Rakım](@site/static/img/navigation/route/firmness.png)


### Genişlik {#width}

Rota çizgisinin genişliğini, haritada görüntülenen yol veya patika ile hizalamak için ayarlayabilirsiniz. Daha net görsel tanımlama için, çizgi genişliğini gerektiği gibi manuel olarak artırabilir veya azaltabilirsiniz. Daha fazla ayrıntı için *İzler ve Rotalar — [Görünüm](../../map/tracks/appearance.md) makalesine* bakın.

- ***<Translate android="true" id="map_widget_renderer"/>***. OsmAnd tarafından ayarlanan varsayılan genişlikle kullanılır. Tam açıklama *Vektör Haritaları* makalesinin [Harita stili](../../map/vector-maps.md#default-map-styles) bölümünde bulunabilir.
    ![harita stili](@site/static/img/navigation/route/map_st_2.png)

- ***İnce, Orta ve Kalın genişlikler***. Çizginin genişliğini yolun genişliğiyle eşleşecek şekilde seçebilir veya rota çizgisini haritada daha güçlü bir şekilde vurgulayabilirsiniz.
    ![genişlik](@site/static/img/navigation/route/width_med.png)

- ***Özel***. İstediğiniz genişlikte bir çizgi görüntülemenize olanak tanır. Genişliği seçmek için kaydırıcıyı kullanın.
    ![özel](@site/static/img/navigation/route/custom_2.png)


### Dönüş Okları {#turn-arrows}

Dönüş Okları ayarı, dönüş oklarının rota çizgisi üzerinde görüntülenip görüntülenmeyeceğini seçmenize olanak tanır.

- ***Haritada***
    ![Rakım](@site/static/img/navigation/route/turn_arr_on_map_and.png) ![dönüş_okları_ios_harita](@site/static/img/navigation/route/turn_arr_ios_on_map.png)

- ***Uygulamada***
    ![Rakım](@site/static/img/navigation/route/turn_arr.png) ![dönüş_okları_ios](@site/static/img/navigation/route/turn_arr_ios.png)


## İlgili Makaleler {#related-articles}

- [Rota parametreleri](../routing/osmand-routing.md#routing-types)
- [Rota hazırlığı](../setup/route-navigation.md)
- [İz ile navigasyon](../setup/gpx-navigation.md)
- [İşaretleyicilerle navigasyon](../setup/markers-navigation.md)
- [Rota detayları](../setup/route-details.md)
- [Navigasyon ayarları](./navigation-settings.md)
- [Sesli komutlar / Bildirimler](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Son güncelleme: Aralık 2024*