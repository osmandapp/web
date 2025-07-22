---
source-hash: fb9912804ef2b1009e063e1cb1e5c8220b279d2fee5b64bf122b770e595651c9
sidebar_position: 1
title: Rota Planla
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

**Rota planla** (*Menü → Rota planla*) aracı, OsmAnd uygulamasının güçlü bir özelliğidir. Bu özellik, GPX parkurları olarak [yeni rotalar oluşturmanıza](#create-new-route), zaten kaydedilmiş parkurlara [yeni segmentler düzenlemenize ve eklemenize](#segments), harita üzerinde [mesafeleri ölçmenize](#distance-measurement) ve farklı navigasyon profilleri kullanarak [parkur segmentlerini](#attach-track-to-roads) en yakın uygun yola eklemenize olanak tanır. Özellik, *çevrimdışı modda* çalışmak üzere tasarlanmıştır.

Bir rota, belirtilen noktalar arasındaki bir dizi segmentten oluşur. Segmentler düz çizgiler veya seçilen profile uyarlanmış rotalar olabilir. Rota, daha sonra içe aktarma, düzenleme ve [navigasyon](../navigation/setup/gpx-navigation.md) için GPX olarak kaydedilebilir.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Rota planla android](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota planla ios](@site/static/img/plan-route/plan_route_overview_ios.png)

</TabItem>

</Tabs>


## Ana Kullanım Durumları {#main-use-cases}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,plan_a_route"/>*  

![Rota planla android](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,plan_route"/>*  

![Rota planla ios](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>

</Tabs>


### Yeni Rota Oluştur {#create-new-route}

GPX formatında yeni bir parkur oluşturmak için *Rota planla* aracının ana işlevini kullanın. Bir rotayı önceden oluşturmanın, *[Yolculuk kaydı eklentisi](../plugins/trip-recording.md)* ile mevcut parkuru kaydetmeye kıyasla birçok avantajı vardır. Rotaya istediğiniz kadar nokta [ekleyebilir](#adding-points), [silebilir ve taşıyabilir](#point-context-menu), [segmentlere](#route-between-points) göre rota türlerini değiştirebilir ve rota hakkında [ayrıntılı bilgi](#graph) alabilirsiniz.

Varsayılan olarak, rota türü daha önce seçilen profille eşleşecektir, uygulamanın noktaları bağlamak için segmenti nasıl hesaplaması gerektiğini seçmek için rota simgesine dokunun. Mevcut profil [ayrıca](../navigation/routing/osmand-routing.md#routing-types) yapılandırılmalıdır.

Bir parkur oluştururken veya düzenlerken noktaların kolayca yerleştirilmesi için **yakınlaştırıp uzaklaştırabilirsiniz**. **Uzaklaştırdığınızda**, parkurdaki noktalar, parkurun tüm uzunluğunun ve haritanın bir bütün olarak daha iyi görünümü için görünmez hale gelir. Yalnızca son eklenen nokta ve bir sonraki noktayı eklemek için işaretçi görünür kalır.


### Mevcut GPX Parkurunu Değiştir {#modify-existing-gpx-track}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>  

*Rota planla* aracı, mevcut GPX parkurunu ve [içe aktarılmış bir parkuru](../personal/tracks/manage-tracks.md#import) değiştirmeye olanak tanır. Ancak, genel kriterlere göre çok sayıda noktayı dışlamanız gerekiyorsa, [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) daha uygun bir araç olabilir.


### Mesafe Ölçümü {#distance-measurement}

![Rota planla android](@site/static/img/plan-route/plan_route_lines_andr.png)  

*Rota planla*, noktalar arasındaki mesafeyi ölçmenin hızlı ve kolay bir yoludur.

- Rota planlamanın *Düz çizgi* yöntemini seçin. Noktalar arasında kesikli bir çizgi çizilecektir.
- Çizginin çizileceği ilk noktayı harita üzerinde [ekleyin](#adding-points).
- Mesafeyi ve azimutu belirlemek için haritayı hareket ettirin. Bilgi, haritanın altındaki noktalar listesiyle birlikte bir alanda görüntülenecektir.

:::note
*Düz Çizgi*, yol dışı ve parkur dışı alanlar gibi rota verileriyle kapsanmayan alanlar için gereklidir ve kullanılacaktır.
:::


### Yükseklik Verilerini Al {#get-elevation-data}

<InfoAndroidOnly />

![Rota planla android](@site/static/img/plan-route/plan_route_graph_4_andr.png)  

Mevcut bir parkurda [Yükseklik verileri](../map/tracks/track-context-menu.md#calculating-missing-elevation) eksikse, aşağıdaki araçları kullanarak eklemek mümkündür:

- [Yakındaki yolları kullanın](#attach-track-to-roads). Bu mod, bir parkur oluşturmak için çevrimdışı haritaları kullanarak en yakın yolları bulur, böylece yükseklik verileri ekli yollardan alınır. Parkurun geometrisi ayarlanabilir.
- [Arazi haritalarını kullanın](../map/tracks/track-context-menu.md#calculating-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) Modu, Arazi harita verilerine (3D) göre rakımı hesaplar. Cihazınız tarafından kaydedilen rakımlar arasındaki fark, yükseklik düzeltmesi için kullanılabilir. Parkurun geometrisi değişmeden kalır.


### Parkuru Yollara Ekle {#attach-track-to-roads}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Rota planla snap-road-ios](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota planla snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>  

**Yollara ekle** ayarı, ek bilgi almak için kaydedilmiş veya içe aktarılmış bir parkuru OsmAnd çevrimdışı haritalarındaki yollara eklemeye olanak tanır:

- [Parkurla gezinti](../navigation/setup/gpx-navigation.md#how-to-follow-the-track) için doğru dönüş bilgisi (özellikle döner kavşaklarda).
- Sokak adları ve şerit bilgileri.
- Yükseklik verileri.
- [Yol özellikleri](../navigation/setup/route-details.md#road-attributes).

Basitleştirilmiş parkur noktalarının orijinal parkur noktalarından olabileceği mesafe için bir [eşik değeri](../navigation/setup/gpx-navigation.md#attach-to-the-roads) seçebilirsiniz.

:::note Belirtilmemiş profil simgesi
Bir parkur seçerseniz ve *Ayarlar* simgesinin yanında ***belirtilmemiş*** profil simgesi ("?") görüntülenirse, parkuru yollara ekleyip eklemeyeceğinizi veya sadece noktaları düz bir çizgiyle bağlayıp kaydedilmiş bir parkur olarak ele alıp almayacağınızı seçmek için üzerine dokunun.
:::

<!--
### Add Route Points to Navigation from GPX {#add-route-points-to-navigation-from-gpx}

If you import a GPX file containing a route (with `<rtept>` elements), OsmAnd will display the route on the map but will not automatically convert the route points into a turn-by-turn navigation list.

To generate navigation instructions:

1. Open the GPX file from *My Places → Tracks*.
2. Tap the track to open it.
3. Tap the point menu (⋮) and choose **Add to Navigation**.
4. OsmAnd will convert the route points into a full navigation route with instructions.

> **NOTE:** *You may still use [Attach to roads](#attach-track-to-roads) to adjust geometry before converting to navigation.*
-->


## Noktalar ve Segmentler {#points--segments}

### Nokta Ekleme {#adding-points}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Rota planla android](@site/static/img/plan-route/plan_route_points_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota planla ios](@site/static/img/plan-route/plan_route_points_list_ios.png)

</TabItem>

</Tabs>  

Bir mesafeyi ölçmek veya bir gezi planlamak için, *İşaretçi* konumuna tek tek noktalar ekleyin ve *Nokta Ekle* düğmesine dokunun. Aşağıdaki **nokta listesine** erişerek noktaları yeniden sıralayabilir, silebilir veya belirli bir [nokta bağlam menüsüne](#point-context-menu) erişebilirsiniz.

:::note
Rota planlamada yaptığınız her eylemi **Geri al**/**Yinele** de yapabilirsiniz.
:::
  
### Noktalar Arası Rota {#route-between-points}

Düzenleyicide eklenen noktalar düz bir çizgi olarak veya seçilen bir profilin noktaları arasında bir rota olarak bağlanabilir. *Noktalar arası rotaya* birkaç yolla erişilebilir:

1. *Seçenekler* menüsünden *→* *Noktalar arası rota*.
2. Harita ekranının sol alt köşesindeki *profil simgesine* dokunun. Üstteki simgeye değil, Haritayı Yapılandır menüsünü açacaktır.
3. *[Nokta Bağlam menüsünde](#point-context-menu) → Rota türünü önce/sonra değiştir*.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Rota planla android](@site/static/img/plan-route/plan_route_between_points_andr.png) ![Rota planla android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota planla ios](@site/static/img/plan-route/plan_route_between_points_ios.png) ![Rota planla ios](@site/static/img/plan-route/plan_route_change-route-type_ios.png)

</TabItem>

</Tabs>

2 belirli nokta arasında veya birden fazla nokta arasında rotayı değiştirebilirsiniz:

- *Tüm parkur*. Tüm parkur, seçilen profil kullanılarak yeniden hesaplanacaktır.
- *Sonraki segment*. Yalnızca sonraki segment, seçilen profil kullanılarak yeniden hesaplanacaktır.
- *Rota Türünü Noktadan Önce/Sonra Değiştir*. *Nokta bağlam menüsünde*, rotanın bu noktadan en yakına veya uç noktaya kadar olan bölümü için hesaplanma şeklini değiştirebilirsiniz. Ayar, bu noktadan rotanın başlangıcına veya sonuna veya bir sonraki/önceki noktaya olan mesafe hakkında bilgi sağlar.
- *Rotayı yeniden hesapla*. Profil türünü değiştirmeden rotayı yeniden hesaplayabilirsiniz. Araçta planlanan rotada gösterilen profil simgesi değişmeyecek, ancak rota türü seçilenle eşleşecektir. Alternatif rotaları bulmak için buna ihtiyacınız olabilir.

### Segmentler {#segments}

Bir parkur segmenti, **boşluksuz** bağlı bir nokta koleksiyonudur. Bir rota planlama aracında şunlar mümkündür:

- Segmentleri birleştirmek: [Segmentleri birleştir](#point-context-menu) seçeneği, daha önce ayrılmış segmentlere olan boşluğu kaldırır.
- Bir parkurun yeni, bağlantısız bölümlerini bölmek veya oluşturmak. Bir tane oluşturmak için [Yeni segment başlat](#point-context-menu) seçeneğini kullanın veya Nokta bağlam menüsünden [Böl](#point-context-menu) özelliğini seçin.

### Nokta Bağlam Menüsü {#point-context-menu}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Rota planla android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota planla ios](@site/static/img/plan-route/plan_route_points_menu_ios.png)

</TabItem>

</Tabs>

Rotanızdaki her noktanın kendi bağlam menüsü vardır. Noktanın *sıra numarasını*, *rotanın başlangıcından uzaklığını*, harita üzerinde hareket ettirme ve kaldırma işlevini ve bu noktadan önceki ve sonraki rota bölümleriyle ilgili bir dizi eylemi gösterir. Düzenlemek için [nokta listesindeki](#adding-points) veya doğrudan haritadaki gerekli noktaya dokunun.

- ***Nokta hakkında bilgi***. Listedeki nokta sayısı. İlk noktaya olan mesafe, ayarlanan rota türüne göre değişir, *Noktalar arası rota* parametresi değiştirilirse mesafe yeni türe göre yeniden hesaplandığında değişebilir.

- ***<Translate ios="true" ids="move_point"/>***. Bir noktanın harita üzerindeki konumunu değiştirmenizi sağlar. Noktanın konumunu değiştirmek için haritayı hareketlerle taşıyın. Nokta göstergesi, haritanın görünür kısmının merkezinde olacaktır.

- ***<Translate ios="true" ids="add_point_after"/>***. Seçilen noktadan sonra bir nokta eklemek için haritayı hareket ettirin. İptal edene veya uygulayana kadar istediğiniz kadar nokta ekleyebilirsiniz.

- ***<Translate ios="true" ids="add_point_before"/>***. Seçilen noktadan sonra bu nokta ile bir sonraki nokta arasındaki segmente istediğiniz kadar nokta eklemek için haritayı hareket ettirin.

- ***<Translate ios="true" ids="trim_before"/>***. Rotanın tüm bölümünü, noktaları ve segmentleri, başlangıcından seçilen noktaya kadar kırpabilirsiniz. Kırpılacak mesafe seçenek adının altında belirtilmiştir.

- ***<Translate ios="true" ids="trim_after"/>***. Bir rotayı, noktaları ve segmentleri, eklenen son noktadan seçilen noktaya kadar kırpabilirsiniz. Kırpılacak mesafe seçenek adının altında belirtilmiştir.

- ***<Translate ios="true" ids="plan_route_split_before"/>***. Rotayı seçilen noktadan önce ayrı, bağlantısız segmentlere bölmeye olanak tanır.

- ***<Translate ios="true" ids="plan_route_split_after"/>***. Rotayı seçilen noktadan sonra ayrı, bağlantısız segmentlere bölmeye olanak tanır.

- ***<Translate ios="true" ids="join_segments"/>***. Bölünmüş segmentlerden birindeki son nokta ve diğer segmentteki noktalar listesindeki bir sonraki nokta bu bağlantı ayarına sahiptir.

- ***<Translate ios="true" ids="change_route_type_before"/>***. Mevcut bir profil için yapılandırılmış rota türünü, önceki segmentteki noktalar arasında veya rotanın başlangıcından seçilen noktaya kadar tüm segmentler için değiştirebilirsiniz.

- ***<Translate ios="true" ids="change_route_type_after"/>***. Sonraki segmentteki noktalar arasında veya seçilen noktadan eklenen son noktaya kadar tüm segmentler için rota türünü değiştirebilirsiniz.

- ***<Translate ios="true" ids="delete_point"/>***. Seçilen noktayı rotadan kaldırın. Bir listedeki bir noktayı silmeye benzer.

### Çok Modlu Rotalar {#multimodal-routes}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Rota planla android-routeline](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota planla ios-screen](@site/static/img/plan-route/plan-route-routeline-ios.png)

</TabItem>

</Tabs>

*Rota Planla* aracını ve [Noktalar arası rota](#route-between-points) seçeneğini kullanarak, örneğin ilk kısmı *bisiklet* rotası, ikinci kısmı *düz çizgi* rotası ve ardından *yaya* rotası olabilen çok modlu rotalar oluşturabilirsiniz. Çok modlu rotalarda navigasyonun mevcut olmadığını unutmayın, bu nedenle adım adım talimatları takip edebilmek için en uygun profillerden birini seçmeniz gerekir.


## Düzenleyici {#editor}

### Rotayı Kaydet {#save-route}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Rota planla android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota planla ios](@site/static/img/plan-route/plan_route_save_changes_ios.png)

</TabItem>

</Tabs>  


Haritaya en az bir nokta [ekledikten](#adding-points) sonra kaydetme seçeneğini kullanabilirsiniz. *Rota planla*'da kaydedilen tüm parkurlar ana *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)* altında bulunabilir.

Dört farklı kaydetme yöntemi vardır:

- ***Hızlı kaydetme***. Sağ üstteki ***Bitti*** / ***Kaydet*** (mevcut parkurlar için) düğmesi, değişiklikleri hızlı bir şekilde kaydetmenize ve *Rota Planla* aracından çıkmanıza olanak tanır. Ad, geçerli tarihe göre oluşturulur.
- [Seçenekler menüsündeki](#options) ***Değişiklikleri kaydet***, değişiklikleri bir dosyaya kaydetmenize ve rotayı planlamaya devam etmenize olanak tanır.
- [Seçenekler menüsündeki](#options) ***Yeni parkur olarak kaydet***, rotanın adını ve kaydedileceği klasörü belirtebileceğiniz bir iletişim kutusu açar.
- ***Değişiklikleri bir parkura ekle***. Oluşturulan bir parkuru başka bir mevcut parkura [ayrı bir segment](#segments) olarak ekler. Seçilen bir parkurdaki değişiklikler *geri alınamaz*.

:::note Basitleştirilmiş parkur seçeneği
Yeni bir parkuru kaydederken, parkuru diğer üçüncü taraf uygulamalarla uyumlu hale getirmek için ***Basitleştirilmiş*** parkur seçeneğini seçebilirsiniz. Teknik olarak, parkur rota talimatları olmadan tamamen geometrik bir parkur olarak kaydedilecektir.
:::

### Seçenekler {#options}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Rota planla android-options](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota planla ios-options](@site/static/img/plan-route/plan_route_menu_options_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="route_between_points"/>](#route-between-points). Seçilen uygulama profilini gösterir (varsayılan düz çizgidir). Bu eyleme dokunmak, uygulama [profil menüsünü](../personal/profiles.md) açan *Profil* düğmesine dokunmakla aynıdır.
- **<Translate ios="true" ids="gpx_start_new_segment"/>** (*iOS*) veya **<Translate android="true" ids="plan_route_add_new_segment"/>** (*Android*). Önceki segmente bağlanmayan yeni rota segmentleri çizer.
- [<Translate android="true" ids="shared_string_save_changes"/>](#save-route). Mevcut bir parkura bağlantısı olmayan yeni bir parkursa, *Yeni parkur olarak kaydet* menüsü açılır. Açılan veya içe aktarılan bir parkura yeni segmentler eklediğinizde, GPS dosyasını depolamaya kaydetme bildirimi görünür, ardından bir sonraki segmenti oluşturmaya devam edebilirsiniz.
- [<Translate android="true" ids="save_as_new_track"/>](#save-route). Rotanızı GPX parkuru olarak kaydeder.
- [<Translate android="true" ids="add_to_a_track"/>](#save-route). Rotanızı parkur klasörünüzden bir parkura ekleyin ve yeni parkuru kaydedin.
- [<Translate android="true" ids="shared_string_navigation"/>](../navigation/setup/gpx-navigation.md). Çizilen bir rota kullanarak konumunuzdan bitiş noktasına navigasyonu başlatır.
- **<Translate android="true" ids="reverse_route"/>**. Rotanın *Başlangıç* noktasını ve eklenen son noktayı değiştirirsiniz. Ters çevirme uygulandığında rota segmenti ayarları değişmez.
- [<Translate android="true" ids="attach_to_the_roads"/>](#attach-track-to-roads). Yaklaşık bir rota oluşturur. Parkurdaki her nokta, seçilen profile ve eşik mesafesine göre haritadaki en yakın izin verilen yolla eşleştirilir.
- [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) (Yalnızca Android). Seçilen rota türüyle eşleşmeyen rota noktalarını filtreleyebilir, gereksiz verileri silebilir veya yanlış verileri düzeltebilirsiniz. GPS filtresi yalnızca rota türü *Düz Çizgi* olarak belirtilmişse çalışır. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- [<Translate android="true" ids="get_altitude_data"/>](#get-elevation-data) (*Yalnızca Android*). Bu seçenek, menüde yalnızca yükseklik verisi mevcut değilse görüntülenir. Bu [seçenekle](#get-elevation-data), *Arazi harita verilerini* kullanarak rakımı hesaplayabilir veya *yakındaki yolları* bulmak için indirilen haritalardaki verileri kullanabilirsiniz.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. Tüm eylemlerinizi tamamen arşivler. Haritada bir "kalıntı" kalır - yeni temizlenen rotanın kesikli çizgileri. Bir sonraki, yeni noktalar eklendiğinde kaybolur. Tümünü Temizle işlevini Geri Al Eylemi düğmesiyle iptal edebilirsiniz. Özellik, araçta açılan rotaların değişmeyen kısımlarını etkilemez.

### Grafik {#graph}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Rota planla android](@site/static/img/plan-route/plan_route_graph_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota planla snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>

Rota planlama sırasında, [grafik](../navigation/setup/route-details.md#elevation-graph) rota yüksekliği ve eğim yüzdesi bilgilerini görüntüler, ayrıca belirli verilerle bir işaretçi görüntülemek için grafiğin herhangi bir yerine dokunabilirsiniz.

- **Android** için grafik, bir parkur oluştururken veya açarken ve *Rota planla* kullanarak [Navigasyon](../navigation/setup/gpx-navigation.md) sırasında *Grafik* sekmesinde görüntülenir.
- **iOS** için grafik yalnızca *[Seçenekler](#options) → Navigasyon* menüsü aracılığıyla kullanılabilir.

*Rota planla*'da navigasyon için bir rota hesaplarken, [Yükseklik bilgisi](../navigation/setup/route-details.md#elevation-info) ve [Yol özellikleri](../navigation/setup/route-details.md#road-attributes) gibi ek parkur bilgilerini bulabilir ve [Haritada analiz et](../navigation/setup/route-details.md#analyse-on-map) aracını kullanabilirsiniz. Grafiğin altındaki *Ayrıntılar* düğmesine dokunun.


## İlgili Makaleler {#related-articles}

- [Parkuru Haritada Göster](../map/tracks/index.md)
- [Haritada Analiz Et](../map/tracks/index.md#analyze-track-on-map)
- [Parkur Bağlam Menüsü](../map/tracks/track-context-menu.md)
- [Parkurla Navigasyon](../navigation/setup/gpx-navigation.md)
- [Yolculuk Kaydı](../plugins/trip-recording.md)

> *Son güncelleme: Mayıs 2025*