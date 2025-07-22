---
source-hash: 5b1f516001588d13044bc97b434ef0d12f0f32e20295902b3d61ccfb9d49d0f5
sidebar_position: 2
title:  İz Üzerinde Gezinme
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

*İz üzerinde gezinme* (GPX) seçeneği, önceden tanımlanmış bir rotayı veya izi harita üzerinde takip etmenizi sağlar. Özellikle yürüyüş, bisiklet veya arazi sürüşü gibi açık hava etkinlikleri için faydalı olabilir; bu tür etkinliklerde planlanmış bir rotaya sahip olmak güvenliği ve verimliliği artırır. Organize bir grupta seyahat ediyorsanız, bu özellik sizin ve grubun her üyesinin diğerleriyle aynı rota bilgilerine sahip olmasına yardımcı olur.

*İz üzerinde gezinme* seçeneği günlük hayatta da kullanılabilir. Daha önce [kaydedilmiş bir izi](../../plugins/trip-recording.md) kullanabilir veya bir [iz oluşturup](../../personal/tracks/manage-tracks.md#create-a-track) rotayı onlara açıklamak yerine aileniz veya arkadaşlarınızla paylaşabilirsiniz. Ayrıca navigasyon için [OsmAnd haritasındaki rotaları](../../../../blog/routes/) da kullanabilirsiniz. Bunları haritada nasıl vurgulayacağınız ve renklerinin ne anlama geldiği, *Vektör haritaları* makalesinin [Rotalar bölümünde](../../map/vector-maps.md#routes) açıklanmıştır.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![İz üzerinde gezinme ekranı Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![İz üzerinde gezinme ekranı iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## İzi Seçin {#select-the-track}

*İz üzerinde gezinme* seçeneğini kullanmadan önce, [izi haritada görüntülemeniz](../../map/tracks/index.md#display-tracks-on-the-map) gerekir. OsmAnd, izi bir çizgi (**Geometri**) ve bir rota (**Rota**) veya bunların birleşimi (**OsmAnd** ile [Rota Planla](../../plan-route/create-route.md)) olarak destekler. Eğer iziniz bir koleksiyon **Ara Noktalar** ise, [İşaretçiler navigasyonunu](./markers-navigation.md) kullanabilirsiniz.


- **Geometri** izi varsayılan olarak çok temel bir navigasyona sahip olacak ve doğru dönüşleri, sokak adlarını ve dönüş şeritlerini sağlamayacaktır. Eksik bilgileri almak için [Yollara iliştir](#attach-to-the-roads) aracını kullanmanız gerekir.

- **Rota** izi, seçilen profile göre rota noktaları arasında rota hesaplayacaktır. Temel olarak, tüm rota noktaları ara nokta olarak kabul edilecektir. Rotanız 50'den fazla nokta içeriyorsa, büyük olasılıkla yanlış yapılandırılmış bir **Geometri** izidir.

- **OsmAnd** izi hem geometri hem de rota kısımlarından oluşur ve varsayılan olarak navigasyonla tamamen aynı rehberliği sağlamaya uygundur. Bu izler [Rota Planla](../../plan-route/create-route.md) veya [Web sürümü](../../web/index.md) tarafından üretilir. Bu izi, 3. taraf programlarda kullanılmak üzere [**Basitleştirilmiş**](../../plan-route/create-route.md#save-route) olarak yalnızca **Geometri** izine yeniden kaydetmek mümkündür.


### GPX Navigasyonunu Başlatın {#start-gpx-navigation}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navigasyon için iz seçin Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Navigasyon için iz seçin Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon için iz seçin iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Navigasyon için iz seçin iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

Bir iz üzerinde navigasyon, [iz bağlam menüsündeki](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) (haritada [vurgulanmış izlerden](./route-navigation.md#history-of-previous-routes) birini seçerek veya *Ana Menü*'nün [Yerlerim](../../personal/myplaces.md) bölümündeki bir iz dosyasına dokunarak açılır) hızlı eylem düğmesi kullanılarak veya dokunarak açılan navigasyon menüsünden başlatılabilir:

- Harita ekranındaki [*Navigasyon düğmesi*](../../widgets/map-buttons.md#directions).
- *Ana Menü*'deki *Navigasyon bölümü* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- [*Navigasyon menüsünde*](./route-navigation.md#navigation-menu) *<Translate android="true" ids="shared_string_settings,follow_track"/>* öğesine gidin.

### Segmentleri Seçin {#choose-segments}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Segmentler Android](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segmentler iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

Navigasyon için, seçilen iz birden fazla segment veya izden oluşuyorsa, belirli bir segmenti veya tüm GPX iz dosyasını seçebilirsiniz. [İçe aktarırken](../../personal/tracks/manage-tracks.md#import) tek bir dosyada mı yoksa birden fazla dosyada mı kaydedeceğinizi seçebilirsiniz.


### İzleme Seçeneklerini Takip Et {#follow-track-options}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![İz üzerinde gezinme ekranı Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![İz üzerinde gezinme ekranı iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **Düzenle** (iz adının yanındaki *kalem simgesi*) — İzi [*Rota Planla*](../../plan-route/create-route.md) aracında açar.
- **<Translate android="true" ids="select_another_track"/>** — Navigasyon için farklı bir GPX dosyası seçin.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — Bu ayar etkinleştirilirse, iz boyunca hareket yönü tersine çevrilir.
- **<Translate android="true" ids="attach_to_the_roads"/>** — [İzi yollara iliştirmeyi](#attach-to-the-roads) yapılandırır.
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — Konumunuzdan ize nasıl gideceğinizi seçebilirsiniz:
*<Translate android="true" ids="start_of_the_track"/>* veya iz üzerindeki *<Translate android="true" ids="nearest_point"/>* noktasına.
- İlk ve son segment için **Navigasyon türünü** seçin: ya bir [*düz çizgi*](../routing/straight-line-routing.md) oluşturun ya da mevcut profilden [*rota türünü*](../routing/osmand-routing.md#routing-types) kullanın.


### Yollara İliştir {#attach-to-the-roads}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Yollara iliştir 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yollara iliştir 1 ios](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

**Yollara İliştir** özelliği, daha doğru bir navigasyon deneyimi için izinizi en yakın yolla hizalar. [İzleme seçeneklerini takip et](#follow-track-options) menüsünde bulunan bu özellik, rotanızın seçilen *navigasyon profili* ve **eşik mesafesine** göre uygun yol ağını takip etmesini sağlar. Bu, navigasyon sırasında hem [rota ayrıntılarını](../setup/route-details.md) hem de [sesli talimatları](#guidance) geliştirir.

***Nasıl çalışır:***

- OsmAnd, her iz noktasını ayarlanan **eşik mesafesi** (varsayılan: **50 metre**) içindeki **en yakın yolla** eşleştirir.
- **Eşik mesafesi**, bir GPS iz noktası ile bir yol arasındaki maksimum izin verilen iliştirme mesafesini tanımlar.
- **Otomatik yeniden iliştirme** — **Navigasyon profilleri** değiştirildiğinde, OsmAnd izi otomatik olarak yeni profile uygun yollara yeniden iliştirir.
- Çok sayıda noktaya sahip büyük izler için, iliştirme işlemi biraz daha uzun sürebilir. İliştirme durumunu gösteren bir **ilerleme göstergesi** (*turuncu durum çubuğu*) göreceksiniz.
- İliştirme tamamlandıktan sonra, navigasyon için değiştirilmiş izi kullanmak üzere **Uygula**'ya dokunun.

#### Yollara Otomatik İliştirme {#automatic-attachment-to-the-roads}

OsmAnd, **Rota Planla** aracını kullanırken rotaları otomatik olarak yollara yapıştırır:

- **Ara noktalar** otomatik olarak en yakın uygun yola hizalanır (*[Düz Çizgi Yönlendirme](../../navigation/routing/straight-line-routing.md) ve [Noktadan Noktaya Yönlendirme](../../navigation/routing/direct-to-point-routing.md) hariç*).
- Hiçbir yol algılanmazsa (örneğin, arazi ortamlarında), rota **düz çizgi segmentlerini** takip edecektir.
- Ara noktaları farklı konumlara sürükleyerek rotayı **manuel olarak ayarlayabilirsiniz**.

Varsayılan olarak, **Yollara İliştir** özelliği, navigasyon için bir iz seçildiğinde **otomatik olarak** çalışır. Bu ayarı gerektiği gibi değiştirebilirsiniz. Daha fazla ayrıntı için, *Navigasyon Ayarları* makalesindeki [Ayrıntılı İz Rehberliği](../guidance/navigation-settings.md#detailed-track-guidance) bölümüne bakın.


## Noktalar {#points}

### Başlangıç / Bitiş Noktası {#start--finish-point}

GPX dosyasında belirtilen başlangıç/bitiş noktası dışında bir rota için başlangıç ve bitiş noktası belirleyebilirsiniz. Tıpkı [Navigasyon](../setup/route-navigation.md#select-starting-point) için yaptığınız gibi değiştirmeniz yeterlidir.

[İzleme menüsünde](#follow-track-options), mevcut konumunuzdan izin başlangıç noktasına mı yoksa GPX izindeki en yakın noktaya mı gitmek istediğinizi seçebilirsiniz. Ayrıca, rotanızın başlangıç ve bitiş segmenti için kullanılacak [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types) seçeneğini de belirleyebilirsiniz.

### Ara Noktalar {#waypoints}

İzin ara noktaları varsa, İlgi Çekici Noktalar hakkında bildirim almak için [Rota boyunca göster](../guidance/map-during-navigation.md#show-points-along-the-route) ve [Sesli rehberlik](../guidance/voice-navigation.md#voice-settings) kullanabilirsiniz. Mevcut bir ize [Bağlam menüsü](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint) aracılığıyla **Ara Noktalar** ekleyebilirsiniz, izin haritada görünür olması gerekir.

### Ara Noktalar {#intermediate-points}

Bir GPX izini hazırlarken veya üzerinde gezinirken, o iz içinde geçmeyi planladığınız ara yerler ekleyemezsiniz. Yalnızca takip etmeyi planladığınız ize veya segmente ek olarak başlangıç ve bitiş noktaları atayabilirsiniz.

## Rehberlik {#guidance}

*GPX izi ile navigasyon*, rota navigasyonu ile aynı [sesli talimatları](../guidance/voice-navigation.md) içerir. Ancak, OsmAnd tarafından oluşturulan GPX dosyaları hariç, GPX'te yol kesişimleri hakkında bilgi bulunmadığından bazı dönüşler veya döner kavşaklar doğru yorumlanamayabilir. Bu sorunları ortadan kaldırmak için [Yollara iliştir](#attach-to-the-roads) özelliğini kullanmalısınız.

Navigasyon sırasında, yakınlaştırma veya uzaklaştırma, haritayı kaydırma veya farklı bir harita stiline geçme gibi çeşitli seçenekleri kullanabilirsiniz. İzden saparsanız, OsmAnd sizi tekrar yola sokmak için rotayı otomatik olarak yeniden hesaplayacaktır. Ayrıca iz hızını ayarlayabilir ve yaklaşan noktalar veya rotadan sapmalar için sesli uyarılar ayarlayabilirsiniz.


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