---
source-hash: ae9687e6f1f23d70428677a5ebd5a73f6a67a71286137aec6ff175aad5589758
sidebar_position: 2
title: Parkur ile Navigasyon
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



## Genel Bakış {#overview}

*Parkur ile Navigasyon* (GPX) seçeneği, önceden tanımlanmış bir rotayı veya parkuru harita üzerinde takip etmenizi sağlar. Özellikle doğa yürüyüşü, bisiklet sürme veya arazi sürüşü gibi açık hava etkinlikleri için faydalı olabilir; bu tür etkinliklerde planlanmış bir rotaya sahip olmak güvenliği ve verimliliği artırır. Organize bir grupla seyahat ediyorsanız, bu özellik sizin ve grubun her üyesinin diğerleriyle aynı rota bilgisine sahip olmasına yardımcı olur.

*Parkur ile Navigasyon* seçeneği günlük hayatta da kullanılabilir. Daha önce [kaydedilmiş bir parkuru](../../plugins/trip-recording.md) kullanabilir veya [bir parkur oluşturup](../../personal/tracks/manage-tracks.md#create-a-track) rotayı onlara açıklamak yerine ailenizle veya arkadaşlarınızla paylaşabilirsiniz. Navigasyon için [OsmAnd haritasındaki rotaları](../../../../blog/routes/) da kullanabilirsiniz. Bunları haritada nasıl vurgulayacağınız ve renklerinin ne anlama geldiği, *Vektör haritalar* makalesinin [Rotalar bölümünde](../../map/vector-maps.md#routes) açıklanmıştır.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Parkur ile Navigasyon ekranı Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parkur ile Navigasyon ekranı iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Parkuru Seçin {#select-the-track}

*Parkur ile Navigasyon* seçeneğini kullanmadan önce, parkuru [haritada görüntülemeniz](../../map/tracks/index.md#display-tracks-on-the-map) gerekir. OsmAnd, parkuru bir çizgi (**Geometri**) ve bir rota (**Rota**) veya bunların birleşimi (**OsmAnd** [Rota planla](../../plan-route/create-route.md) ile) olarak destekler. Parkurunuz bir **Ara Noktalar** koleksiyonu ise, [İşaretçi navigasyonunu](./markers-navigation.md) kullanabilirsiniz.


- **Geometri** parkuru varsayılan olarak çok temel bir navigasyona sahip olacak ve doğru dönüşler, sokak adları ve dönüş şeritleri sağlamayacaktır. Eksik bilgileri almak için [Yollara iliştir](#attach-to-the-roads) aracını kullanmanız gerekir.

- **Rota** parkuru, seçilen profile göre rota noktaları arasında rota hesaplayacaktır. Temel olarak, tüm rota noktaları ara nokta olarak kabul edilecektir. Rotanız > 50 noktadan oluşuyorsa, büyük olasılıkla yanlış yapılandırılmış bir **Geometri** parkurudur.

- **OsmAnd** parkuru hem geometri hem de rota kısımlarından oluşur ve varsayılan olarak navigasyonla tamamen aynı rehberliği sağlamaya uygundur. Bu parkurlar [Rota planla](../../plan-route/create-route.md) veya [Web sürümü](../../web/index.md) tarafından üretilir. Bu parkuru, 3. taraf programlarda kullanılmak üzere [**Basitleştirilmiş**](../../plan-route/create-route.md#save-route) olarak yalnızca **Geometri** parkuru olarak yeniden kaydedebilirsiniz.


### GPX Navigasyonunu Başlatın {#start-gpx-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon için parkur seçin Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Navigasyon için parkur seçin Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon için parkur seçin iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Navigasyon için parkur seçin iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

Bir parkurda navigasyon, [parkur bağlam menüsündeki](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) (haritada [vurgulanan parkurlardan](./route-navigation.md#history-of-previous-routes) birini seçerek veya *Ana Menü*'nün [Yerlerim](../../personal/myplaces.md) bölümündeki bir parkur dosyasına dokunarak açılır) hızlı eylem düğmesi kullanılarak veya dokunarak açılan navigasyon menüsünden başlatılabilir:

- Harita ekranındaki [*Navigasyon düğmesi*](../../widgets/map-buttons.md#directions).
- *Ana Menü*'deki *Navigasyon bölümü* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- [*Navigasyon menüsünde*](./route-navigation.md#navigation-menu) *<Translate android="true" ids="shared_string_settings,follow_track"/>* öğesine gidin.

### Segmentleri Seçin {#choose-segments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Segmentler Android](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segmentler iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

Navigasyon için, seçilen parkur birden fazla segment veya parkurdan oluşuyorsa, belirli bir segmenti veya tüm GPX parkur dosyasını seçebilirsiniz. **[İçe aktarırken](../../personal/tracks/manage-tracks.md#import)**, tek bir dosyaya mı yoksa birden fazla dosyaya mı kaydedileceğini seçebilirsiniz.


### Parkuru Takip Et seçenekleri {#follow-track-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![Parkur ile Navigasyon ekranı Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![Parkur ile Navigasyon ekranı iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **Düzenle** (parkur adının yanındaki *kalem simgesi*) — Parkuru [*Rota planla*](../../plan-route/create-route.md) aracında açar.
- **<Translate android="true" ids="select_another_track"/>** — Navigasyon için farklı bir GPX dosyası seçin.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — Bu ayar etkinleştirilirse, parkur boyunca hareket yönü tersine çevrilir.
- **<Translate android="true" ids="attach_to_the_roads"/>** — [Parkuru yollara iliştirmeyi](#attach-to-the-roads) yapılandırır.
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — Konumumdan parkura nasıl gideceğinizi seçebilirsiniz:
*<Translate android="true" ids="start_of_the_track"/>* veya parkurdaki *<Translate android="true" ids="nearest_point"/>* noktasına.
- İlk ve son segment için **Navigasyon türünü** seçin: ya [*düz bir çizgi*](../routing/straight-line-routing.md) oluşturun ya da mevcut profilden [*rota türünü*](../routing/osmand-routing.md#routing-types) kullanın.


### Yollara İliştir {#attach-to-the-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yollara iliştir 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yollara iliştir 1 ios](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

**Yollara İliştir** özelliği, daha doğru bir navigasyon deneyimi için parkurunuzu en yakın yola hizalar. [Parkuru Takip Et](#follow-track-options) menüsünde bulunan bu özellik, seçilen *navigasyon profiline* ve **eşik mesafesine** göre rotanızın uygun yol ağını takip etmesini sağlar. Bu, navigasyon sırasında hem [rota ayrıntılarını](../setup/route-details.md) hem de [sesli talimatları](#guidance) geliştirir.

***Nasıl çalışır:***

- OsmAnd, her parkur noktasını belirlenen **eşik mesafesi** (varsayılan: **50 metre**) içindeki **en yakın yola** eşleştirir.
- **Eşik mesafesi**, bir GPS parkur noktası ile bir yol arasındaki maksimum izin verilen mesafeyi tanımlar.
- **Otomatik yeniden iliştirme** — **Navigasyon profilleri** değiştirildiğinde, OsmAnd parkuru yeni profile uygun yollara otomatik olarak yeniden iliştirir.
- Birçok noktaya sahip büyük parkurlar için, iliştirme işlemi biraz daha uzun sürebilir. İliştirme durumunu gösteren bir **ilerleme göstergesi** (*turuncu durum çizgisi*) göreceksiniz.
- İliştirme tamamlandıktan sonra, navigasyon için değiştirilmiş parkuru kullanmak üzere **Uygula**'ya dokunun.

#### Yollara Otomatik İliştirme {#automatic-attachment-to-the-roads}

OsmAnd, **Rota Planla** aracını kullanırken rotaları otomatik olarak yollara hizalar:

- **Ara noktalar** otomatik olarak en yakın uygun yola hizalanır (*[Düz Çizgi Yönlendirme](../../navigation/routing/straight-line-routing.md) ve [Noktaya Doğrudan Yönlendirme](../../navigation/routing/direct-to-point-routing.md) hariç*).
- Hiçbir yol algılanmazsa (örneğin, arazi ortamlarında), rota **düz çizgi segmentlerini** takip edecektir.
- Ara noktaları farklı konumlara sürükleyerek rotayı **manuel olarak ayarlayabilirsiniz**.

Varsayılan olarak, bir parkur navigasyon için seçildiğinde **Yollara İliştir** özelliği **otomatik olarak** çalışır. Bu ayarı gerektiği gibi değiştirebilirsiniz. Daha fazla ayrıntı için, *Navigasyon Ayarları* makalesindeki [Ayrıntılı Parkur Rehberliği](../guidance/navigation-settings.md#detailed-track-guidance) bölümüne bakın.


## Noktalar {#points}

### Başlangıç / Bitiş Noktası {#start--finish-point}

GPX dosyasında belirtilen başlangıç/bitiş noktası dışında bir rota için başlangıç ve bitiş noktası belirleyebilirsiniz. Tıpkı [Navigasyon](../setup/route-navigation.md#select-starting-point) için yaptığınız gibi değiştirmeniz yeterlidir.

[Parkuru Takip Et menüsünde](#follow-track-options), mevcut konumunuzdan parkurun başlangıç noktasına mı yoksa GPX parkurundaki en yakın noktaya mı gitmek istediğinizi seçebilirsiniz. Ayrıca, rotanızın başlangıç ve bitiş segmenti için kullanılacak [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types) seçeneğini de belirleyebilirsiniz.

### Ara Noktalar {#waypoints}

Parkurda ara noktalar varsa, İlgi Çekici Noktalar hakkında bildirim almak için [Rota boyunca göster](../guidance/map-during-navigation.md#show-points-along-the-route) ve [Sesli rehberlik](../guidance/voice-navigation.md#voice-settings) seçeneklerini kullanabilirsiniz. Mevcut bir parkura [Bağlam menüsü](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint) aracılığıyla **Ara Noktalar** ekleyebilirsiniz, parkurun haritada görünür olması gerekir.

### Ara Noktalar {#intermediate-points}

Bir GPX parkurunu hazırlarken veya üzerinde gezinirken, o parkur içinde geçmeyi planladığınız ara yerleri ekleyemezsiniz. Yalnızca takip etmeyi planladığınız parkura veya segmente ek olarak başlangıç ve bitiş noktaları atayabilirsiniz.

## Rehberlik {#guidance}

*GPX parkuru ile navigasyon*, rota navigasyonu ile aynı [sesli talimatları](../guidance/voice-navigation.md) içerir. Ancak, bazı dönüşler veya döner kavşaklar doğru yorumlanamayabilir çünkü GPX'te yol kesişimleri hakkında bilgi yoktur, OsmAnd tarafından oluşturulan GPX dosyaları hariç. Bu sorunları ortadan kaldırmak için [Yollara iliştir](#attach-to-the-roads) özelliğini kullanmalısınız.

Navigasyon sırasında, haritayı yakınlaştırma veya uzaklaştırma, kaydırma veya farklı bir harita stiline geçme gibi çeşitli seçenekleri kullanabilirsiniz. Parkurdan saparsanız, OsmAnd sizi tekrar parkura döndürmek için rotayı otomatik olarak yeniden hesaplar. Ayrıca parkurun hızını ayarlayabilir ve yaklaşan noktalar veya rotadan sapmalar için sesli uyarılar ayarlayabilirsiniz.


## İlgili Makaleler {#related-articles}

- [Rota parametreleri](../routing/osmand-routing.md#routing-types)
- [Rota hazırlığı](./route-navigation.md)
- [Rota ayrıntıları](./route-details.md)
- [İşaretçilerle navigasyon](./markers-navigation.md)
- [Navigasyon ayarları](../guidance/navigation-settings.md)
- [Navigasyon sırasında harita ekranı](../guidance/map-during-navigation.md)
- [Sesli uyarılar / Bildirimler](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Son güncelleme: Nisan 2025*