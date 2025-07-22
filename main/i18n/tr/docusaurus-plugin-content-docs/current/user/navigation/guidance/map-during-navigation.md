---
source-hash: 647711494d62816fdbd45cf8b18ef90488d2e460f73ad6eb67974d9a0645067f
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

Bu makale, navigasyon sırasında haritanın görünümünü nasıl yapılandıracağınızı açıklamaktadır. Bu, [rota boyunca İÇN'leri gösterme](#show-points-along-the-route), [ekran uyarılarını](#screen-alerts) kullanma, renk, genişlik ve dönüş okları dahil olmak üzere [rota çizgisi görünümü](#route-line-appearance) gibi özellikleri içerir. Bu özellikler [rota navigasyon ayarları](../setup/route-navigation.md#settings) ile yakından ilişkilidir.


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

Navigasyon sırasında harita, konumunuzu belirlemek, hedefinizi tanımlamak, rotanızı planlamak ve navigasyon rehberliğini görüntülemek için görsel bir araçtır. Bunu yapmak için yakınlaştırmayı kullanabilir ve haritayı gerektiği gibi sürükleyip döndürebilirsiniz. Harita ayrıca yol bilgilerini, sokak adlarını, binaları ve diğer nesneleri görüntüleyerek rotanızı kolayca belirlemenize yardımcı olabilir.  

Navigasyon sırasında, haritanın görünümü seçilen navigasyon profiline göre ayarlanır. Navigasyona başlamadan önce, haritanın görünümünün sürüş sırasında nasıl çalışması gerektiğine ilişkin tercihlerinize uygun olduğundan emin olun.

| Parametre | Açıklama | Not |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* | Harita görünümünün hareket ettikten sonra mevcut konumla senkronize olduğu süre. | *Değer:* <br /> Asla, 5 sn, 10 sn, 15 sn, 20 sn, 25 sn, 30 sn, 45 sn, 60 sn, 50 sn.|
| *<Translate android="true" ids="auto_zoom_map"/>* | Harita mevcut konumunuzla senkronize olduğu sürece, hızınıza göre haritayı otomatik olarak ölçeklendirin. | *Değer:* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - manuel yakınlaştırma. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - yakınlaştırma 200 m'dir.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - yakınlaştırma 100 m'dir. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - yakınlaştırma 5 m'dir. |
| *<Translate android="true" ids="snap_to_road"/>* | Mevcut konum simgesi, mevcut navigasyon rotasıyla ilişkilendirilecektir. | Bu seçeneği kapatabilirsiniz, ancak şerit gösterimi gibi yolla ilgili tüm seçenekler de navigasyon sırasında görünmez olacaktır. |
| *<Translate android="true" ids="approximate_bearing"/>* | Takip ettiğiniz navigasyon rotasına göre yönü belirler. | Ayar yalnızca [OsmAnd geliştirme eklentisi](../../plugins/development.md) etkinleştirildiğinde görünür. <br /> [Android Auto](../auto-car.md#common-issues-and-solutions) kullanırken yön haritasının yönü tersine dönerse veya titrerse bu ayarlar etkinleştirilmelidir. |


## Rota Boyunca Noktaları Göster {#show-points-along-the-route}

*Rota boyunca göster* ayarı, ek rota parametrelerini yapılandırmanıza olanak tanır ve [Sokak adı](../../widgets/nav-widgets#street-name) ve [Uyarı widget'ı](../../widgets/nav-widgets.md#alert-widget) gibi widget'ların çalışması için gereklidir. Seçenekler arasında rota boyunca [**İÇN'leri**](#points-of-interest-pois) ve [**Favorilerimi**](#my-favorites) görüntüleme veya bunları profil için zaten yapılandırılmış olanlara ek olarak kullanma ve rota boyunca [**Trafik uyarılarının**](#traffic-warnings) tam bir listesini görüntüleme yer alır.  

- Rotadan yakındaki noktalara farklı mesafeler (belirlediğiniz [uzunluk birimine](../../personal/profiles.md#units--formats) bağlı olarak 5 km'ye veya 3,11 mile kadar) ayarlama yeteneği, [Düz Çizgi](../routing/straight-line-routing.md) veya [Noktadan Noktaya](../routing/direct-to-point-routing.md) gibi rota türlerini kullanırken faydalıdır.
- *Rota boyunca göster* ayarı için, navigasyon için [Sesli komutları](../guidance/voice-navigation.md) kullanmanız önerilir.
- *İÇN'ler, Favoriler ve Trafik uyarıları*, daha önce seyahat ettiğiniz bir rota için listede görüntülenmez.


### Noktaları Görüntüleme ve Seçme {#view-and-select-points}

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

[*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-pois) içindeki İÇN ayarları, **Rota boyunca göster** ayarıyla ilişkilidir. Bu, esasen haritada İÇN'leri görüntülemek için doğrudan oluşturulan rotayla ilgili ek bir ayardır.  

*Haritayı yapılandır* bölümünde belirli İÇN'lerin görüntülenmesini belirttiğinizde, kategorileri seçmiş olsanız da, hangi kategorinin önemli olmadığını seçmiş olsanız da, yakındaki İÇN'leri seçmiş olsanız da, indirdiğiniz haritalarda hepsi görüntülenir.  

- İÇN'lerin sayısı ve kimliği *ölçeğe bağlıdır*.

- *Rota boyunca göster* ayarı, *İÇN katmanındaki* ile aynı kategoriyi görüntüler, ancak mevcut konum noktasından rotanızdaki ayarlanan mesafeye kadar seçilen İÇN'lerin *tam listesini* bir kerede görürsünüz.  

- Listeden gereksiz İÇN'leri kaldırabilir veya bunlardan birine dokunarak [Bağlam menüsünde](../../map/map-context-menu.md) düzenleyebilirsiniz.

- Liste, seçilen [İÇN türlerini](../../map/point-layers-on-map.md#poi-types) ve her biri hakkında *tür simgesi, adı, mevcut konum noktasından rota boyunca İÇN'ye olan mesafe* ve *İÇN'nin rotanın hangi tarafında düz bir çizgide ve ne kadar uzakta olduğuna dair göstergeler* gibi kısa bilgileri içerir.  


### Favorilerim {#my-favorites}

Liste, oluşturduğunuz rotanın yakınındaki daha önce eklenmiş tüm [Favori](../../personal/favorites.md#favorite-point) noktalarını içerir. İÇN'lerde olduğu gibi, bu noktaların bulunduğu mesafeyi seçebilirsiniz.  

- [Favorilerin haritada görüntülenmesini kapatırsanız](../../map/configure-map-menu.md), listeden kaybolmazlar ve [widget'ta](../../widgets/nav-widgets.md#street-name) görüntülenmeye ve yaklaştığınızda duyurulmaya devam ederler.

- *Favori noktalarınızı* haritaya sadece önceden değil, bir rota üzerinde gezinirken de ekleyebilirsiniz.

- *Listeyi güncellemek için*, Favorilerimi kapatıp tekrar açın.

- Her nokta bir ad veya koordinat, bir grup, mevcut konum noktasından doğrudan rota çizgisi üzerindeki *Favoriye* olan mesafe, noktanın çizgiden ne kadar sağda veya solda olduğuna dair bilgi ve rotanın yönünü içerir.


### Trafik Uyarıları {#traffic-warnings}

*Trafik uyarıları* doğrudan haritada *İÇN'ler* veya *Favorilerim* gibi görüntülenmez.

- Bu seçeneği **etkinleştirmek** ve uyarıları görmek için önce [Uyarılar widget'ını](../../widgets/nav-widgets.md#alert-widget) etkinleştirmeniz ve yapılandırmanız gerekir.

- Rotanız boyunca *Trafik uyarılarını* görüntüleme seçeneği, rotanıza başlamadan hemen önce tüm listeyi görmenizi sağlar, bu da seyahatinizi planlarken faydalıdır.

- Listeden gereksiz uyarıları kaldırabilir veya uyarı adına dokunarak [konumu düzenleyebilirsiniz](../../map/map-context-menu.md#avoid-road).


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
| **<Translate android="true" ids="screen_alerts"/>** | Trafik uyarıları veya hız sınırları gibi bildirimler, siz gezinirken ekranın sol alt köşesinde bir widget olarak görünecektir. | [Uyarı widget'ı türleri](../../widgets/nav-widgets.md#alert-widget) |


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

Rota çizgisi görünümünü stile göre seçebilir veya rengini, genişliğini ve şeffaflığını manuel olarak seçebilirsiniz. Ayrıca, çizgi üzerinde dönüş okları ve yön okları gösterilip gösterilmeyeceğini de seçebilirsiniz.

**Gelişmiş**: Rota çizgisini özelleştirme ayarı, rota çizgisinin görünümünü yükseklik değişikliklerini, önemli yokuş yukarı veya yokuş aşağı, yoldaki buz, asfalt olmayan yollar, otoyollar ve diğer olası engelleri gösterecek şekilde ayarlamanıza olanak tanır. Ayrıca rota çizgisine uygulanacak özel [renk şemalarını](../../personal/color-palette-schemes.md#routes) seçebilir veya oluşturabilirsiniz.


:::note
 <ProFeature/> Bazı parametreleri yalnızca <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro aboneliği</a> ile kullanabilirsiniz.
:::


### Renk {#color}

**Renk** ayarı, rota çizgilerinin renk tonlarını değiştirir. Genel renkleri, OsmAnd koleksiyonundan seçilen türe ve **Harita Lejantına** göre değişir. Alternatif olarak, renkleri manuel olarak ayarladığınız renk ve şeffaflık olur.

- ***<Translate android="true" id="map_widget_renderer"/>***. Varsayılan renklerle kullanılır. Renklerin tam açıklaması için [Varsayılan Harita stilleri](../../map/vector-maps.md#default-map-styles) bölümüne gidin.  
    ![harita stili](@site/static/img/navigation/route/map_st_2.png)

- ***Özel***. İstediğiniz herhangi bir renk ve şeffaflıkta bir çizgi seçmenizi sağlar. Gündüz haritası için farklı ayarlar ve gece haritası için ayrı ayrı ayarlar seçebilirsiniz.  
    ![özel](@site/static/img/navigation/route/custom.png)   ![özel](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. Rota noktasının yüksekliğini **yeşil-sarı-kırmızı** gradyan olarak gösterir. **Yeşil** rotanın en alçak noktasını, **sarı** noktanın ortalama yüksekliğini ve **kırmızı** en yüksek noktayı gösterir. Rota yükseklik farkı < 100 metreden azsa, gradyan kısmen uygulanır veya uygulanmaz, örneğin 100 metreden 150 metreye basit bir tırmanış için - gradyan **yeşil-sarı** olacaktır. Rengin yüksekliğin mutlak değerini temsil etmediğini unutmayın.  
    ![Yükseklik](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. Rota çizgisi, rotanın yükseklik profiline bağlı olarak farklı renklerde renklendirilir. Ayrıntılı açıklama *Topografi eklentisi* makalesinin [Eğim](../../plugins/topography.md#hillshade-slope-and-altitude-layers) bölümündedir.  
    ![Yükseklik](@site/static/img/navigation/route/Slope.png)   ![Yükseklik](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. Bir rotayı veya iz çizgisini *yol sınıflandırmasına* göre renklendirir. Ayrıntılı açıklama *Vektör Haritalar - [Yol Stili](../../map/vector-maps.md#road-style)* bölümündedir.  
    ![Yükseklik](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. Yolun veya patikanın fiziksel yüzeyi hakkında bilgi sağlar. Ayrıntılı açıklama *Harita Lejantı* bölümündeki *OsmAnd Harita Stili - [Yüzey](../../map-legend/osmand.md#surface-smoothness)* makalesinde bulunabilir.  
    ![Yükseklik](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. Tekerlekli araçlar için yol veya patika manevra kabiliyeti sınıflandırması, özellikle yüzeyin düzenliliği ve pürüzsüzlüğü ile ilgili. Ayrıntılı açıklama *Harita Lejantı* bölümündeki *OsmAnd Harita Stili - [Pürüzsüzlük](../../map-legend/osmand.md#surface-smoothness)* makalesinde bulunabilir.  
    ![Yükseklik](@site/static/img/navigation/route/Smoothness.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. Bir rotayı veya iz çizgisini *kış yolu sınıflandırmasına* göre renklendirir. Ayrıntılı açıklama *Vektör Haritalar* makalesinin [Kış ve buz yolları](../../map/vector-maps.md#winter-and-ski) bölümünde bulunabilir.  
    ![Yükseklik](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. Kaldırım bileşimine göre bir rota veya patika çizgisinin renklendirilmesi. Genellikle yol ağı büyük ölçüde asfalt olmadığında kullanılır. Ayrıntılı açıklama *Harita Lejantı* bölümündeki *OsmAnd Harita Stili - [Yüzey sağlamlığı](../../map-legend/osmand.md#surface-smoothness)* makalesinde bulunabilir.  
    ![Yükseklik](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;At parkurlarının zorluğu***. At parkurlarının zorluğuna göre yolları işler.  
    ![Yükseklik](@site/static/img/navigation/route/firmness.png)


### Genişlik {#width}

Rota çizgisinin genişliğini, haritada görüntülenen yol veya patikayla hizalamak için ayarlayabilirsiniz. Daha net görsel tanımlama için, gerektiğinde çizgi genişliğini manuel olarak artırabilir veya azaltabilirsiniz. Daha fazla ayrıntı için *İzler ve Rotalar — [Görünüm](../../map/tracks/appearance.md) makalesine* bakın.

- ***<Translate android="true" id="map_widget_renderer"/>***. OsmAnd tarafından ayarlanan varsayılan genişlikle kullanılır. Tam açıklama *Vektör Haritalar* makalesinin [Harita stili](../../map/vector-maps.md#default-map-styles) bölümünde bulunabilir.  
    ![harita stili](@site/static/img/navigation/route/map_st_2.png)

- ***İnce, Orta ve Kalın genişlikler***. Çizginin genişliğini yolun genişliğiyle eşleşecek şekilde seçebilir veya rota çizgisini haritada daha güçlü bir şekilde vurgulayabilirsiniz.  
    ![genişlik](@site/static/img/navigation/route/width_med.png)

- ***Özel***. İstediğiniz genişlikte bir çizgi görüntülemenizi sağlar. Genişliği seçmek için kaydırıcıyı kullanın.  
    ![özel](@site/static/img/navigation/route/custom_2.png)  


### Dönüş Okları {#turn-arrows}

Dönüş Okları ayarı, rota çizgisi üzerinde dönüş oklarının görüntülenip görüntülenmeyeceğini seçmenizi sağlar.  

- ***Haritada***  
    ![Yükseklik](@site/static/img/navigation/route/turn_arr_on_map_and.png)   ![turn_arr_ios_map](@site/static/img/navigation/route/turn_arr_ios_on_map.png)  

- ***Uygulamada***  
    ![Yükseklik](@site/static/img/navigation/route/turn_arr.png)   ![turn_arr_ios](@site/static/img/navigation/route/turn_arr_ios.png)


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