---
source-hash: 126bdbfe84f38b892a3c07c56eec4eba2956a96775fa4206e17eba71b6dbd43d
sidebar_position: 2
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

Bu makale, navigasyon sırasında haritanın görünümünü nasıl yapılandıracağınızı açıklar. Bu, [rota boyunca İÇN'leri gösterme](#show-points-along-the-route), [ekran uyarılarını](#screen-alerts) kullanma, renk, genişlik ve dönüş okları dahil olmak üzere [rota çizgisi görünümü](#route-line-appearance) gibi özellikleri içerir. Bu özellikler, [rota navigasyon ayarları](../setup/route-navigation.md#settings) ile yakından ilişkilidir.


## Navigasyon Sırasında Harita {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Navigasyon sırasında harita ekranı](@site/static/img/navigation/map_during_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Navigasyon sırasında harita ekranı](@site/static/img/navigation/map_during_navigation_2_ios.png)

</TabItem>

</Tabs>

Navigasyon sırasında harita, konumunuzu bulmak, hedef planınızı belirlemek ve navigasyon rehberliğini görüntülemek için görsel bir araçtır. Bunu yapmak için yakınlaştırma kullanabilir ve haritayı gerektiği gibi sürükleyip döndürebilirsiniz. Harita ayrıca, rotanızı kolayca belirlemenize yardımcı olmak için yol bilgilerini, sokak adlarını, binaları ve diğer nesneleri de görüntüleyebilir.  

Navigasyon sırasında, haritanın görünümü seçilen navigasyon profiline göre ayarlanır. Navigasyona başlamadan önce, haritanın görünümünün sürüş sırasında nasıl çalışması gerektiğine ilişkin tercihlerinize uygun olduğundan emin olun.

| Parametre | Açıklama | Not |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* | Harita görünümünün hareket ettikten sonra mevcut konumla senkronize edildiği süre. | *Değer:* <br /> Asla, 5 sn, 10 sn, 15 sn, 20 sn, 25 sn, 30 sn, 45 sn, 60 sn, 50 sn. |
| *<Translate android="true" ids="auto_zoom_map"/>* | Harita mevcut konumunuzla senkronize olduğu sürece, haritayı hızınıza göre otomatik olarak ölçeklendirin. | *Değer:* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - manuel yakınlaştırma. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - yakınlaştırma 200 m'dir.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - yakınlaştırma 100 m'dir. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - yakınlaştırma 5 m'dir. |
| *Otomatik yakınlaştırma 3D açısı* | Navigasyon sırasında 3D görünüme geçişte haritanın eğimini ayarlar. Daha yüksek bir açı, ufku daha uzak göstererek daha fazla ileri görüş sağlar. | Yalnızca Otomatik yakınlaştırma etkinleştirildiğinde uygulanır. Değerler: 20°, 25°, 30°, 35°, 40°. Varsayılan: 25°. |
| *Bir sonraki dönüşü önizle* | Navigasyon sırasında bir sonraki dönüşü veya manevrayı göstermek için haritayı biraz önceden otomatik olarak döndürür. Yaklaşan eylemleri öngörmeye yardımcı olur. | Varsayılan olarak etkin. Bir profili dışa aktarıp yeniden içe aktarırsanız, bu ayarı doğruladığınızdan emin olun; bazı eski sürümlerde "etkin" olarak sıfırlanabilir. |
| *<Translate android="true" ids="snap_to_road"/>* | Mevcut konum simgesi, mevcut navigasyon rotasıyla ilişkilendirilecektir. | Bu seçeneği kapatabilirsiniz, ancak şerit gösterimi gibi yolla ilgili tüm seçenekler de navigasyon sırasında görünmeyecektir. |


## Rota Boyunca Noktaları Göster {#show-points-along-the-route}

*Rota boyunca göster* ayarı, ek rota parametrelerini yapılandırmanıza olanak tanır ve [Sokak adı](../../widgets/nav-widgets#street-name) ve [Uyarı widget'ı](../../widgets/nav-widgets.md#alert-widget) gibi widget'ların çalışması için gereklidir. Seçenekler arasında rota boyunca [**İÇN'leri**](#points-of-interest-pois) ve [**Favorilerimi**](#my-favorites) görüntülemek veya bunları profil için zaten yapılandırılmış olanlara ek olarak kullanmak, ayrıca rota boyunca [**Trafik uyarılarının**](#traffic-warnings) tam bir listesini görüntülemek yer alır.  

- Rota boyunca yakın noktalara farklı mesafeler (belirlediğiniz [uzunluk birimine](../../personal/profiles.md#units--formats) bağlı olarak 5 km'ye veya 3,11 mile kadar) ayarlama yeteneği, [Düz Çizgi](../routing/straight-line-routing.md) veya [Noktadan Noktaya](../routing/direct-to-point-routing.md) gibi rota türlerini kullanırken faydalıdır.
- *Rota boyunca göster* ayarı için, navigasyon için [Sesli komutlar](../guidance/voice-navigation.md) kullanılması önerilir.
- *İÇN'ler, Favoriler ve Trafik uyarıları*, zaten kat ettiğiniz bir rota için listede görüntülenmez.

:::info note
**Rota boyunca göster** seçeneği yalnızca İÇN ve Favorilerim listelerini etkiler, haritayı değil. İÇN ve Favori simgeleri, rotadan uzaklıklarına bakılmaksızın haritanın her yerinde görüntülenir.
:::


### Noktaları Görüntüle ve Seç {#view-and-select-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,show_along_the_route"/>*

![rota boyunca noktalar](@site/static/img/navigation/show-points-along-4-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>* *→ Rota boyunca göster*

![rota boyunca noktalar](@site/static/img/navigation/show-points-along-4-ios.png)  

</TabItem>

</Tabs>

Bir rota oluşturduğunuzda, *Navigasyon* bölümünde rota boyunca görüntülenecek nokta türlerini ayarlayabilirsiniz.


### İlgi Çekici Noktalar (İÇN'ler) {#points-of-interest-pois}

![İÇN katmanı Android](@site/static/img/map/poi_overlay_android.png) ![İÇN katmanı iOS](@site/static/img/map/poi_overlay_ios.png)

[*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-pois) içindeki İÇN ayarları, **Rota boyunca göster** ayarıyla ilişkilidir. 

*Haritayı yapılandır* bölümünde belirli İÇN'lerin görüntülenmesini belirttiğinizde, seçtiğiniz kategoriler olsun veya hangi kategorinin önemli olmadığı durumlarda yakındaki İÇN'leri seçmiş olun, indirdiğiniz haritalarda hepsi görüntülenir.  

- İÇN'lerin sayısı ve tanımlanması *ölçeğe bağlıdır*.

- *Rota boyunca göster* ayarı, *İÇN katmanındaki* ile aynı kategoriyi görüntüler, ancak rotanızdaki mevcut konum noktasından ayarlanan mesafede, seçilen İÇN'lerin *tam listesini* bir kerede görürsünüz.  

- Gereksiz İÇN'leri listeden kaldırabilir veya bunlardan birine dokunarak [Bağlam menüsünde](../../map/map-context-menu.md) düzenleyebilirsiniz.

- Liste, seçilen [İÇN türlerini](../../map/point-layers-on-map.md#poi-types) ve her biri hakkında *tür simgesi, adı, mevcut konum noktasından İÇN'ye rota boyunca olan mesafe* ve *İÇN'nin rotanın hangi tarafında düz bir çizgide ve ne kadar uzakta olduğuna dair göstergeler* gibi kısa bilgileri içerir.  


### Favorilerim {#my-favorites}

Liste, oluşturduğunuz rotanın yakınındaki daha önce eklenmiş tüm [Favori](../../personal/favorites.md#favorite-point) noktalarını içerir. İÇN'lerde olduğu gibi, bu noktaların bulunduğu mesafeyi seçebilirsiniz.  

- [Haritada Favorilerin görüntülenmesini kapatırsanız](../../map/configure-map-menu.md), listeden kaybolmazlar ve [widget'ta](../../widgets/nav-widgets.md#street-name) görüntülenmeye devam eder ve onlara yaklaştığınızda duyurulur.

- *Favori noktalarınızı* haritaya sadece önceden değil, aynı zamanda bir rotada gezinirken de ekleyebilirsiniz.

- *Listeyi güncellemek için*, Favorilerimi kapatıp tekrar açın.

- Her nokta bir ad veya koordinatlar, bir grup, mevcut konum noktasından *Favoriye* doğrudan rota çizgisi boyunca olan mesafe, noktanın çizgiden ne kadar sağda veya solda olduğuna dair bilgi ve rotanın yönünü içerir.


### Trafik Uyarıları {#traffic-warnings}

*Trafik uyarıları*, *İÇN'ler* veya *Favorilerim* gibi doğrudan haritada görüntülenmez.

- Bu seçeneği **etkinleştirmek** ve uyarıları görmek için önce [Uyarılar widget'ını](../../widgets/nav-widgets.md#alert-widget) etkinleştirmeniz ve yapılandırmanız gerekir.

- Rotanız boyunca *Trafik uyarılarını* görüntüleme seçeneği, yolculuğunuzu planlarken faydalı olan, rotanıza başlamadan hemen önce tüm listeyi görmenizi sağlar.

- Gereksiz uyarıları listeden kaldırabilir veya konumu [düzenlemek için](../../map/map-context-menu.md#avoid-road) uyarı adına dokunabilirsiniz.


## Ekran Uyarıları {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

</TabItem>

</Tabs>

| Parametre | Açıklama | Not |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="screen_alerts"/>** | Trafik uyarıları veya hız limitleri gibi bildirimler, siz gezinirken ekranın sol alt köşesinde bir widget olarak görünecektir. | [Uyarı widget'ı türleri](../../widgets/nav-widgets.md#alert-widget)   |


## Rota Çizgisi Görünümü {#route-line-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Navigasyon rotası Android](@site/static/img/navigation/route/route_line_appearance_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Navigasyon rotası Android](@site/static/img/navigation/route/RLApp_iOS.png)

</TabItem>

</Tabs>  

Rota çizgisi görünümünü stile göre seçebilir veya çizginin rengini, genişliğini ve şeffaflığını manuel olarak seçebilirsiniz. Ayrıca, çizgide dönüş oklarının ve yön oklarının gösterilip gösterilmeyeceğini de seçebilirsiniz.

**Gelişmiş**: Rota çizgisini özelleştirme ayarı, rota çizgisinin görünümünü yükseklik değişikliklerini, önemli yokuş yukarı veya yokuş aşağı, yolda buz, asfaltlanmamış yollar, otoyollar ve diğer olası engelleri gösterecek şekilde ayarlamanıza olanak tanır. Rota çizgisine uygulanacak özel [renk şemalarını](../../personal/color-palette-schemes.md#routes) da seçebilir veya oluşturabilirsiniz.


:::note
 <ProFeature/> Bazı parametreleri yalnızca <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro aboneliği</a> ile kullanabilirsiniz.
:::


### Renk {#color}

**Renk** ayarı, rota çizgilerinin renk tonlarını değiştirir. Genel renkleri, OsmAnd koleksiyonundan seçilen türe ve **Harita Lejantına** göre değişir. Alternatif olarak, renkleri manuel olarak ayarladığınız renk ve şeffaflık olur.

- ***<Translate android="true" id="map_widget_renderer"/>***. Varsayılan renklerle kullanılır. Renklerin tam açıklaması için [Varsayılan Harita stilleri](../../map/vector-maps.md#default-map-styles) bölümüne gidin.  
    ![harita stili](@site/static/img/navigation/route/map_st_2.png)

- ***Özel***. İstediğiniz renkte ve şeffaflıkta bir çizgi seçmenizi sağlar. Gündüz haritası için farklı ayarlar ve gece haritası için ayrı ayrı ayarlar seçebilirsiniz.  
    ![özel](@site/static/img/navigation/route/custom.png)   ![özel](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. Rota noktasının yüksekliğini **yeşil-sarı-kırmızı** gradyan olarak gösterir. **Yeşil** rotanın en alçak noktasını, **sarı** noktanın ortalama yüksekliğini ve **kırmızı** en yüksek noktayı gösterir. Rota yükseklik farkı < 100 metreden azsa, gradyan kısmen uygulanır veya uygulanmaz, örneğin 100 metreden 150 metreye basit bir tırmanış için - gradyan **yeşil-sarı** olacaktır. Rengin yüksekliğin mutlak değerini temsil etmediğini unutmayın.  
    ![Yükseklik](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. Rota çizgisi, rotanın yükseklik profiline bağlı olarak farklı renklerde renklendirilir. Ayrıntılı bir açıklama *Topografi eklentisi* makalesinin [Eğim](../../plugins/topography.md#hillshade-slope-and-altitude-layers) bölümündedir.  
    ![Yükseklik](@site/static/img/navigation/route/Slope.png)   ![Yükseklik](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. Bir rotayı veya iz çizgisini *yol sınıflandırmasına* göre renklendirir. Ayrıntılı bir açıklama *Vektör Haritalar - [Yol Stili](../../map/vector-maps.md#road-style)* bölümündedir.  
    ![Yükseklik](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. Yolun veya patikanın fiziksel yüzeyi hakkında bilgi sağlar. Ayrıntılı bir açıklama *Harita Lejantı* bölümündeki *OsmAnd Harita Stili - [Yüzey pürüzsüzlüğü](../../map-legend/osmand.md#surface-smoothness)* makalesinde bulunabilir.  
    ![Yükseklik](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. Tekerlekli araçlar için yol veya patika manevra kabiliyeti sınıflandırması, özellikle yüzeyin düzenliliği ve pürüzsüzlüğü ile ilgili. Ayrıntılı bir açıklama *Harita Lejantı* bölümündeki *OsmAnd Harita Stili - [Pürüzsüzlük](../../map-legend/osmand.md#surface-smoothness)* makalesinde bulunabilir.  
    ![Yükseklik](@site/static/img/navigation/route/Smoothness.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. Bir rotayı veya iz çizgisini *kış yolu sınıflandırmasına* göre renklendirir. Ayrıntılı bir açıklama *Vektör Haritalar* makalesinin [Kış ve buz yolları](../../map/vector-maps.md#winter-and-ski) bölümünde bulunabilir.  
    ![Yükseklik](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. Bir rotanın veya patika çizgisinin kaldırım bileşimine göre renklendirilmesi. Genellikle yol ağının büyük ölçüde asfaltlanmamış olduğu durumlarda kullanılır. Ayrıntılı bir açıklama *Harita Lejantı* bölümündeki *OsmAnd Harita Stili - [Yüzey sertliği](../../map-legend/osmand.md#surface-smoothness)* makalesinde bulunabilir.  
    ![Yükseklik](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;At parkurlarının zorluğu***. At parkurlarının zorluğuna göre yolları işler.  
    ![Yükseklik](@site/static/img/navigation/route/firmness.png)


### Genişlik {#width}

Rota çizgisinin genişliğini, haritada görüntülenen yol veya patika ile hizalamak için ayarlayabilirsiniz. Daha net görsel tanımlama için, gerektiğinde çizgi genişliğini manuel olarak artırabilir veya azaltabilirsiniz. Daha fazla ayrıntı için *İzler ve Rotalar — [Görünüm](../../map/tracks/appearance.md) makalesine* bakın.

- ***<Translate android="true" id="map_widget_renderer"/>***. OsmAnd tarafından belirlenen varsayılan genişlikle kullanılır. Tam bir açıklama *Vektör Haritalar* makalesinin [Harita stili](../../map/vector-maps.md#default-map-styles) bölümünde bulunabilir.  
    ![harita stili](@site/static/img/navigation/route/map_st_2.png)

- ***İnce, Orta ve Kalın genişlikler***. Çizginin genişliğini yolun genişliğine uyacak şekilde seçebilir veya rota çizgisini haritada daha güçlü bir şekilde vurgulayabilirsiniz.  
    ![genişlik](@site/static/img/navigation/route/width_med.png)

- ***Özel***. İstediğiniz genişlikte bir çizgi görüntülemenizi sağlar. Genişliği seçmek için kaydırıcıyı kullanın.  
    ![özel](@site/static/img/navigation/route/custom_2.png)  


### Dönüş Okları {#turn-arrows}

Dönüş Okları ayarı, rota çizgisinde dönüş oklarının görüntülenip görüntülenmeyeceğini seçmenizi sağlar.  

- ***Haritada***  
    ![Yükseklik](@site/static/img/navigation/route/turn_arr_on_map_and.png)   ![dönüş_okları_ios_harita](@site/static/img/navigation/route/turn_arr_ios_on_map.png)  

- ***Uygulamada***  
    ![Yükseklik](@site/static/img/navigation/route/turn_arr.png)   ![dönüş_okları_ios](@site/static/img/navigation/route/turn_arr_ios.png)


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