---
source-hash: 41206f7aa105ab8fa59a5f824c1e0374750b7232835e5fadfb76637ff0469e77
sidebar_position: 2
title:  Rota ile Navigasyon
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

*Rota ile Navigasyon* (GPX) seçeneği, harita üzerinde önceden tanımlanmış bir rotayı veya izi takip etmenizi sağlar. Özellikle yürüyüş, bisiklet veya arazi sürüşü gibi açık hava etkinlikleri için, planlanmış bir rotaya sahip olmak güvenliği ve verimliliği artırdığı için faydalı olabilir. Organize bir grupla seyahat ediyorsanız, bu özellik sizin ve grubun her üyesinin diğerleriyle aynı rota bilgilerine sahip olmasına yardımcı olur.  

*Rota ile Navigasyon* seçeneği günlük hayatta da kullanılabilir. Daha önce [kaydedilmiş bir izi](../../plugins/trip-recording.md) kullanabilir veya [bir iz oluşturup](../../personal/tracks/manage-tracks.md#create-a-track) onlara rotayı açıklamak yerine aileniz veya arkadaşlarınızla paylaşabilirsiniz. Navigasyon için [OsmAnd haritasındaki rotaları](../../../../blog/routes/) da kullanabilirsiniz. Bunları haritada nasıl vurgulayacağınız ve renklerinin ne anlama geldiği, *Vektör haritaları* makalesinin [Rotalar bölümünde](../../map/vector-maps.md#routes) açıklanmıştır.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Rota ile Navigasyon ekranı Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota ile Navigasyon ekranı iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Rotayı Seçin {#select-the-track}

*Rota ile Navigasyon* seçeneğini kullanmadan önce, izi [haritada görüntülemeniz](../../map/tracks/index.md#display-tracks-on-the-map) gerekir. OsmAnd, izi bir çizgi (**Geometri**) ve izi bir rota (**Rota**) veya bunların birleşimi (**OsmAnd** [Rota planla](../../plan-route/create-route.md) ile) olarak destekler. Eğer iziniz bir **Ara Noktalar** koleksiyonu ise, [İşaretçi navigasyonunu](./markers-navigation.md) kullanabilirsiniz.


- **Geometri** izi varsayılan olarak çok temel bir navigasyona sahip olacak ve doğru dönüşler, sokak adları ve şerit bilgileri sağlamayacaktır. Eksik bilgileri almak için [Yollara bağla](#attach-to-the-roads) aracını kullanmanız gerekir.

- **Rota** izi, seçilen profile göre rota noktaları arasında rota hesaplayacaktır. Temel olarak, tüm rota noktaları ara noktalar olarak kabul edilecektir. İz > 50 nokta içeriyorsa, büyük olasılıkla yanlış yapılandırılmış bir **Geometri** izidir.

- **OsmAnd** izi hem geometri hem de rota kısımlarından oluşur ve varsayılan olarak navigasyonla tamamen aynı rehberliği sağlamaya uygundur. Bu izler [Rota planla](../../plan-route/create-route.md) veya [Web sürümü](../../web/index.md) tarafından üretilir. Bu izi, 3. taraf programlarda kullanılmak üzere [**Basitleştirilmiş**](../../plan-route/create-route.md#save-route) olarak yalnızca **Geometri** izine yeniden kaydedebilirsiniz.


### GPX Navigasyonunu Başlat {#start-gpx-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Navigasyon için iz seç Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Navigasyon için iz seç Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon için iz seç iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Navigasyon için iz seç iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

Bir iz üzerinde navigasyon, [iz bağlam menüsündeki](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) (haritada [vurgulanan izlerden](./route-navigation.md#history-of-previous-routes) birini seçerek veya *Ana Menü*'nün [Yerlerim](../../personal/myplaces.md) bölümündeki bir iz dosyasına dokunarak açılır) hızlı eylem düğmesi kullanılarak veya şu yollardan açılan navigasyon menüsünden başlatılabilir:

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

Navigasyon için, seçilen iz birden fazla segment veya izden oluşuyorsa, belirli bir segmenti veya tüm GPX iz dosyasını seçebilirsiniz. **[İçe aktarırken](../../personal/tracks/manage-tracks.md#import)**, tek bir dosyaya mı yoksa birden fazla dosyaya mı kaydedeceğinizi seçebilirsiniz.


### Rota Takip Seçenekleri {#follow-track-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![Rota ile Navigasyon ekranı Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![Rota ile Navigasyon ekranı iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **Düzenle** (*kalem simgesi* iz adının yanında) — İzi [*Rota planla*](../../plan-route/create-route.md) aracında açar.
- **<Translate android="true" ids="select_another_track"/>** — Navigasyon için farklı bir GPX dosyası seçin.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — Bu ayar etkinleştirilirse, iz boyunca hareket yönü tersine çevrilir.
- **<Translate android="true" ids="attach_to_the_roads"/>** — [İzi yollara bağlamayı](#attach-to-the-roads) yapılandırır.
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — Konumunuzdan ize nasıl gideceğinizi seçebilirsiniz:
izin *<Translate android="true" ids="start_of_the_track"/>* noktasına veya izdeki *<Translate android="true" ids="nearest_point"/>* noktasına.
- İlk ve son segment için **Navigasyon türünü** seçin: ya [*düz bir çizgi*](../routing/straight-line-routing.md) oluşturun ya da mevcut profilden [*rota türünü*](../routing/osmand-routing.md#routing-types) kullanın.


### Yollara Bağla {#attach-to-the-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Yollara bağla 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yollara bağla 1 ios](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

**Yollara Bağla** özelliği, daha doğru bir navigasyon deneyimi için izinizi en yakın yola hizalar. [Rota Takip](#follow-track-options) menüsünde bulunan bu özellik, seçilen *navigasyon profiline* ve **eşik mesafesine** göre rotanızın uygun yol ağını takip etmesini sağlar. Bu, navigasyon sırasında hem [rota ayrıntılarını](../setup/route-details.md) hem de [sesli talimatları](#guidance) geliştirir.

***Nasıl çalışır:***

- OsmAnd, her iz noktasını belirlenen **eşik mesafesi** (varsayılan: **50 metre**) içindeki **en yakın yola** eşleştirir.  
- **Eşik mesafesi**, bir GPS iz noktası ile bir yol arasındaki maksimum izin verilen mesafeyi tanımlar.
- **Otomatik yeniden bağlama** — **Navigasyon profilleri** değiştirildiğinde, OsmAnd izi yeni profile uygun yollara otomatik olarak yeniden bağlar.
- Çok sayıda noktaya sahip büyük izler için, bağlama işlemi biraz daha uzun sürebilir. Bağlama durumunu gösteren bir **ilerleme göstergesi** (*turuncu durum çubuğu*) göreceksiniz.
- Bağlama tamamlandıktan sonra, değiştirilen izi navigasyon için kullanmak üzere **Uygula**'ya dokunun.

### Yollara Otomatik Bağlama {#automatic-attachment-to-the-roads}

OsmAnd, **Rota Planla** aracını kullanırken rotaları otomatik olarak yollara yapıştırır:

- **Ara noktalar** otomatik olarak en yakın mevcut yola hizalanır (*[Düz Çizgi Rotalama](../../navigation/routing/straight-line-routing.md) ve [Noktadan Noktaya Rotalama](../../navigation/routing/direct-to-point-routing.md) hariç*).
- Yol algılanmazsa (örneğin, arazi ortamlarında), rota **düz çizgi segmentlerini** takip edecektir.
- Ara noktaları farklı konumlara sürükleyerek rotayı **manuel olarak ayarlayabilirsiniz**.

Varsayılan olarak, bir iz navigasyon için seçildiğinde **Yollara Bağla** özelliği **otomatik olarak** çalışır. Bu ayarı gerektiği gibi değiştirebilirsiniz. Daha fazla ayrıntı için, *Navigasyon Ayarları* makalesindeki [Ayrıntılı İz Rehberliği](../guidance/navigation-settings.md#detailed-track-guidance) bölümüne bakın.


## Noktalar {#points}

### Başlangıç / Bitiş Noktası {#start--finish-point}

GPX dosyasında belirtilen başlangıç/bitiş noktası dışında bir rota için başlangıç ve bitiş noktası belirleyebilirsiniz. Tıpkı [Navigasyon](../setup/route-navigation.md#select-start-point) için yaptığınız gibi değiştirmeniz yeterlidir.

[Rota takip menüsünde](#follow-track-options), mevcut konumunuzdan izin başlangıç noktasına mı yoksa GPX izindeki en yakın noktaya mı gitmek istediğinizi seçebilirsiniz.  Ayrıca, rotanızın başlangıç ve bitiş segmenti için kullanılacak [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types) seçeneğini de belirleyebilirsiniz.  

### Ara Noktalar {#waypoints}

Eğer iz ara noktalar içeriyorsa, [Rota boyunca göster](../guidance/map-during-navigation.md#show-points-along-the-route) ve [Sesli rehberlik](../guidance/voice-navigation.md#voice-settings) özelliklerini kullanarak İlgi Çekici Noktalar hakkında bildirim alabilirsiniz. Mevcut bir ize [Bağlam menüsü](../../map/map-context-menu.md#-add--edit-track-waypoint) aracılığıyla **Ara Noktalar** ekleyebilirsiniz, izin haritada görünür olması gerekir.

### Ara Noktalar {#intermediate-points}

Bir GPX izi hazırlarken veya gezinirken, o iz içinde geçmeyi planladığınız ara yerleri ekleyemezsiniz. Yalnızca takip etmeyi planladığınız ize veya segmente ek olarak başlangıç ve bitiş noktaları atayabilirsiniz.

## Rehberlik {#guidance}

*GPX izi ile navigasyon*, rota navigasyonu ile aynı [sesli talimatları](../guidance/voice-navigation.md) içerir. Ancak, OsmAnd tarafından oluşturulan GPX dosyaları hariç, GPX'te yol kavşakları hakkında bilgi bulunmadığından bazı dönüşler veya döner kavşaklar doğru yorumlanamayabilir. Bu sorunları ortadan kaldırmak için [Yollara bağla](#attach-to-the-roads) özelliğini kullanmalısınız.  

Navigasyon sırasında, yakınlaştırma veya uzaklaştırma, haritayı kaydırma veya farklı bir harita stiline geçme gibi çeşitli seçenekleri kullanabilirsiniz. İzden saparsanız, OsmAnd sizi ize geri döndürmek için rotayı otomatik olarak yeniden hesaplayacaktır. Ayrıca izin hızını ayarlayabilir ve yaklaşan noktalar veya izden sapmalar için sesli uyarılar ayarlayabilirsiniz.  


## İlgili Makaleler {#related-articles}

- [Rota parametreleri](../routing/osmand-routing.md#routing-types)
- [Rota hazırlığı](./route-navigation.md)
- [Rota ayrıntıları](./route-details.md)
- [İşaretçilerle navigasyon](./markers-navigation.md)
- [Navigasyon ayarları](../guidance/navigation-settings.md)
- [Navigasyon sırasında harita ekranı](../guidance/map-during-navigation.md)
- [Sesli komutlar / Bildirimler](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)