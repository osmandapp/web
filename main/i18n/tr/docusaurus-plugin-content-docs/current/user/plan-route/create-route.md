---
source-hash: e175b4348c1413c15e33f549f53698ae0970ca70deb9fd83602a6d9dbda79e15
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

**Rota Planla** (*Menü → Rota Planla*) aracı, OsmAnd uygulamasının güçlü bir özelliğidir. Bu araç, GPX izleri olarak [yeni rotalar oluşturmanıza](#create-new-route), zaten kaydedilmiş izlere [yeni segmentler eklemenize ve düzenlemenize](#segments), harita üzerinde [mesafeleri ölçmenize](#distance-measurement) ve farklı navigasyon profilleri kullanarak [iz segmentlerini](#attach-track-to-roads) en yakın mevcut yola bağlamanıza olanak tanır. Özellik, *çevrimdışı modda* çalışmak üzere tasarlanmıştır.

Bir rota, belirtilen noktalar arasındaki bir dizi segmentten oluşur. Segmentler düz çizgiler veya seçilen profile uyarlanmış rotalar olabilir. Rota, daha sonra içe aktarma, düzenleme ve [navigasyon](../navigation/setup/gpx-navigation.md) için GPX olarak kaydedilebilir.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota planla android](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota planla ios](@site/static/img/plan-route/plan_route_overview_ios.png)

</TabItem>

</Tabs>


## Ana Kullanım Durumları {#main-use-cases}

<Tabs groupId="operating-systems" queryString="current-os">

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

GPX formatında yeni bir iz oluşturmak için *Rota Planla* aracının ana işlevini kullanın. Bir rotayı önceden oluşturmanın, *[Yolculuk kaydı eklentisi](../plugins/trip-recording.md)* ile mevcut izi kaydetmeye kıyasla birçok avantajı vardır. Rotaya istediğiniz kadar nokta [ekleyebilir](#adding-points), [silebilir ve taşıyabilir](#point-context-menu), [segmentlere](#route-between-points) göre rota türlerini değiştirebilir ve rota hakkında [ayrıntılı bilgi](#graph) alabilirsiniz.  

Varsayılan olarak, yönlendirme türü daha önce seçilen profille eşleşecektir, uygulamanın noktaları bağlamak için segmenti nasıl hesaplaması gerektiğini seçmek için yönlendirme simgesine dokunun. Mevcut profil [ayrıca yapılandırılmalıdır](../navigation/routing/osmand-routing.md#routing-types).  

Bir iz oluştururken veya düzenlerken noktaları kolayca yerleştirmek için **yakınlaştırıp uzaklaştırabilirsiniz**. **Uzaklaştırdığınızda**, iz üzerindeki noktalar, izinin tüm uzunluğunu ve haritayı bir bütün olarak daha iyi görmek için görünmez hale gelir. Yalnızca son eklenen nokta ve bir sonraki noktayı eklemek için işaretçi görünür kalır.


### Mevcut GPX İzini Değiştir {#modify-existing-gpx-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>  

*Rota Planla* aracı, mevcut GPX izini ve [içe aktarılan bir izi](../personal/tracks/manage-tracks.md#import) değiştirmeye olanak tanır. Ancak, genel kriterlere göre çok sayıda noktayı dışlamanız gerekiyorsa, [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) daha uygun bir araç olabilir.


### Mesafe Ölçümü {#distance-measurement}

![Rota planla android](@site/static/img/plan-route/plan_route_lines_andr.png)  

*Rota Planla*, noktalar arasındaki mesafeyi ölçmenin hızlı ve kolay bir yoludur.

- Rota planlamanın *Düz çizgi* yöntemini seçin. Noktalar arasında kesikli bir çizgi çizilecektir.
- Çizginin çizileceği ilk noktayı harita üzerinde [ekleyin](#adding-points).
- Mesafeyi ve azimutu belirlemek için haritayı hareket ettirin. Bilgiler, haritanın altındaki noktalar listesiyle birlikte bir alanda görüntülenecektir.

:::note
*Düz Çizgi*, yol dışı ve iz dışı alanlar gibi yönlendirme verileriyle kapsanmayan alanlar için gereklidir ve kullanılacaktır.
:::


### Yükseklik Verilerini Al {#get-elevation-data}

<InfoAndroidOnly />

![Rota planla android](@site/static/img/plan-route/plan_route_graph_4_andr.png)  

Mevcut bir izde [Yükseklik verileri](../map/tracks/track-context-menu.md#calculate-missing-elevation) eksikse, aşağıdaki araçları kullanarak eklemek mümkündür:

- [Yakındaki yolları kullanın](#attach-track-to-roads). Bu mod, bir iz oluşturmak için en yakın yolları bulmak için çevrimdışı haritaları kullanır, böylece yükseklik verileri bağlı yollardan alınır. İzin geometrisi ayarlanabilir.  
- [Arazi haritalarını kullanın](../map/tracks/track-context-menu.md#calculate-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) Modu, Arazi harita verilerine (3D) göre rakımı hesaplar. Cihazınız tarafından kaydedilen rakımlar arasındaki fark, yükseklik düzeltmesi için kullanılabilir. İzin geometrisi değişmeden kalır.


### İzi Yollara Bağla {#attach-track-to-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota planla snap-road-ios](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota planla snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>  

**Yollara bağla** ayarı, kaydedilmiş veya içe aktarılmış bir izi OsmAnd çevrimdışı haritalarındaki yollara bağlayarak ek bilgi almanızı sağlar:

- [İze göre navigasyon](../navigation/setup/gpx-navigation.md#follow-track-options) için doğru dönüş bilgileri (özellikle döner kavşaklarda).
- Sokak adları ve şerit bilgileri.
- Yükseklik verileri.
- [Yol özellikleri](../navigation/setup/route-details.md#road-attributes).
- Yola dayalı geometriye göre güncellenmiş yükseklik profili.
- İz geometrisinin yeniden hesaplanması mümkün (noktaları basitleştirme veya yol ağına ayarlama).

Bir iz yollara bağlandığında, izin geometrisi ve yükseklisi yeniden hesaplandığı için aşağıdaki parametreler değişebilir: *Mesafe, Tırmanış / İniş, Ortalama hız (ve hız grafiği), Maksimum hız, Hareket süresi* ve *Süre*. Bu değerler, yeniden hesaplanan yola dayalı yükseklik veya geometrinin kaydedilen GPS verilerinden önemli ölçüde sapması durumunda orijinal GPX izinden farklı olabilir.

Basitleştirilmiş iz noktalarının orijinal iz noktalarından olabileceği mesafe için bir [eşik değeri](../navigation/setup/gpx-navigation.md#attach-to-the-roads) seçebilirsiniz.

:::note Belirtilmemiş profil simgesi
Bir iz seçerseniz ve *Ayarlar* simgesinin yanında ***belirtilmemiş*** profil simgesi ("?") görüntülenirse, izi yollara bağlayıp bağlamayacağınızı veya sadece noktaları düz bir çizgiyle bağlayıp kaydedilmiş bir iz olarak ele alıp almayacağınızı seçmek için üzerine dokunun.
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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota planla android](@site/static/img/plan-route/plan_route_points_list_andr.png) ![Rota planla Favoriler android](@site/static/img/plan-route/plan_route_favorites_and.png)

Bir mesafeyi ölçmek veya bir gezi planlamak için, *İşaretçi* konumuna tek tek noktalar ekleyin ve *Ekle* düğmesine dokunun. Aşağıdaki **noktalar listesine** erişerek noktaları yeniden sıralayabilir, silebilir veya belirli bir [nokta bağlam menüsüne](#point-context-menu) erişebilirsiniz.

Ayrıca, bir POI veya Favoriye dokunarak bağlam menüsünü açıp ardından *NOKTA EKLE* düğmesine dokunarak haritadan doğrudan bir geçiş noktası ekleyebilirsiniz. Bu modda, nokta olmayan nesneler için bağlam menüleri gösterilmez. Bir POI/Favori eklediğinizde, adı rota noktası adı olarak korunur; daha sonra bu noktayı haritada taşırsanız, ad sıfırlanır.

</TabItem>

<TabItem value="ios" label="iOS">

![Rota planla ios](@site/static/img/plan-route/plan_route_points_list_ios.png)

Bir mesafeyi ölçmek veya bir gezi planlamak için, *İşaretçi* konumuna tek tek noktalar ekleyin ve *Nokta Ekle* düğmesine dokunun. Aşağıdaki **noktalar listesine** erişerek noktaları yeniden sıralayabilir, silebilir veya belirli bir [nokta bağlam menüsüne](#point-context-menu) erişebilirsiniz.

</TabItem>

</Tabs>  

:::note
Rota planında yaptığınız her eylemi **Geri Al**/**Yinele** de yapabilirsiniz.
:::
  
### Noktalar Arası Rota {#route-between-points}

Düzenleyicide eklenen noktalar, düz bir çizgi olarak veya seçilen bir profilin noktaları arasında bir rota olarak bağlanabilir. *Noktalar arası rota* birkaç şekilde erişilebilir:

1. *Seçenekler* menüsünden *→* *Noktalar arası rota*.
2. Harita ekranının sol alt köşesindeki *profil simgesine* dokunun. Üstteki simgeye değil, Haritayı Yapılandır menüsünü açacaktır.
3. *[Nokta Bağlam menüsünde](#point-context-menu) → Önce/sonra rota türünü değiştir*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota planla android](@site/static/img/plan-route/plan_route_between_points_andr.png) ![Rota planla android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota planla ios](@site/static/img/plan-route/plan_route_between_points_ios.png) ![Rota planla ios](@site/static/img/plan-route/plan_route_change-route-type_ios.png)

</TabItem>

</Tabs>

2 belirli nokta veya birden fazla nokta arasındaki rotayı değiştirebilirsiniz:

- *Tüm iz*. Tüm iz, seçilen profil kullanılarak yeniden hesaplanacaktır.
- *Sonraki segment*. Yalnızca sonraki segment, seçilen profil kullanılarak yeniden hesaplanacaktır.  
- *Noktadan Önce/Sonra Rota Türünü Değiştir*. *Nokta bağlam menüsünde*, rotanın bu noktadan en yakın veya kenar noktaya kadar olan bölümü için nasıl hesaplandığını değiştirebilirsiniz. Ayar, bu noktadan rotanın başlangıcına veya sonuna veya bir sonraki/önceki noktaya olan mesafe hakkında bilgi sağlar.
- *Rotayı yeniden hesapla*. Profil türünü değiştirmeden rota yeniden hesaplamayı kullanabilirsiniz. Araçta planlanan rotada gösterilen profil simgesi değişmeyecek, ancak rota türü seçilenle eşleşecektir. Alternatif rotalar bulmak için buna ihtiyacınız olabilir.  

### Segmentler {#segments}

Bir iz segmenti, **boşluklar** olmadan birbirine bağlı bir nokta koleksiyonudur. Bir rota planlama aracında şunlar mümkündür:

- Segmentleri birleştirmek: [Segmentleri birleştir](#point-context-menu) seçeneği, daha önce ayrılmış segmentlere olan boşluğu kaldırır.
- Bir izi bölmek veya yeni, bağlantısız bölümler oluşturmak. Bir tane oluşturmak için [Yeni segment başlat](#point-context-menu) seçeneğini kullanın veya Nokta bağlam menüsünden [Böl](#point-context-menu) özelliğini seçin.

### Nokta Bağlam Menüsü {#point-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota planla android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota planla ios](@site/static/img/plan-route/plan_route_points_menu_ios.png)

</TabItem>

</Tabs>

Rotanızdaki her noktanın kendi bağlam menüsü vardır. Noktanın *sıra numarasını*, *rotanın başlangıcından olan mesafeyi*, harita üzerinde hareket ettirme ve kaldırma işlevini ve bu noktadan önceki ve sonraki rota bölümleriyle ilgili bir dizi eylemi gösterir. Düzenlemek için, [noktalar listesindeki](#adding-points) veya doğrudan haritadaki gerekli noktaya dokunun.

- ***Nokta hakkında bilgi***. Listedeki nokta sayısı. İlk noktaya olan mesafe, ayarlanan yönlendirme türüne göre belirlenir, *Noktalar arası rota* parametresi değiştirilirse yeni türe yeniden hesaplandığında mesafe değişebilir.  

- ***<Translate ios="true" ids="move_point"/>***. Bir noktanın harita üzerindeki konumunu değiştirmenizi sağlar. Noktanın konumunu değiştirmek için haritayı hareket ettirin. Nokta göstergesi, haritanın görünür kısmının merkezinde olacaktır.  

- ***<Translate ios="true" ids="add_point_after"/>***. Seçilen noktadan sonra bir nokta eklemek için haritayı hareket ettirin. İptal edene veya uygulayana kadar istediğiniz kadar nokta ekleyebilirsiniz.  

- ***<Translate ios="true" ids="add_point_before"/>***. Seçilen noktadan sonra, bu nokta ile bir sonraki nokta arasındaki segmentte istediğiniz kadar nokta eklemek için haritayı hareket ettirin.  

- ***<Translate ios="true" ids="trim_before"/>***. Rotanın tüm bölümünü, noktaları ve segmentleri, başlangıcından seçilen noktaya kadar kırpabilirsiniz. Kırpılacak mesafe, seçenek adının altında belirtilmiştir.  

- ***<Translate ios="true" ids="trim_after"/>***. Bir rotayı, noktaları ve segmentleri, son eklenen noktadan seçilen noktaya kadar kırpabilirsiniz. Kırpılacak mesafe, seçenek adının altında belirtilmiştir.  

- ***<Translate ios="true" ids="plan_route_split_before"/>***. Rotayı seçilen noktadan önce ayrı, bağlantısız segmentlere ayırmanıza olanak tanır.

- ***<Translate ios="true" ids="plan_route_split_after"/>***. Rotayı seçilen noktadan sonra ayrı, bağlantısız segmentlere ayırmanıza olanak tanır.  

- ***<Translate ios="true" ids="join_segments"/>***. Bölünmüş segmentlerden birindeki son nokta ve diğer segmentteki noktalar listesindeki bir sonraki nokta bu bağlantı ayarına sahiptir.  

- ***<Translate ios="true" ids="change_route_type_before"/>***. Mevcut bir profil için yapılandırılmış yönlendirme türünü, önceki segmentteki noktalar arasında veya rotanın başlangıcından seçilen noktaya kadar tüm segmentler için değiştirebilirsiniz.  

- ***<Translate ios="true" ids="change_route_type_after"/>***. Sonraki segmentteki noktalar arasında veya seçilen noktadan son eklenen noktaya kadar tüm segmentler için yönlendirme türünü değiştirebilirsiniz.  

- ***<Translate ios="true" ids="delete_point"/>***. Seçilen noktayı rotadan kaldırın. Bir listedeki bir noktayı silmeye benzer.

### Çok Modlu Rotalar {#multimodal-routes}

<Tabs groupId="operating-systems" queryString="current-os">

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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota planla android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota planla ios](@site/static/img/plan-route/plan_route_save_changes_ios.png)

</TabItem>

</Tabs>  


Haritaya en az bir nokta [ekledikten](#adding-points) sonra kaydetme seçeneğini kullanabilirsiniz. *Rota Planla*'da kaydedilen tüm izler ana *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)* bölümünde bulunabilir.  

Kaydetmenin dört yolu vardır:

- ***Hızlı kaydetme***. Sağ üstteki ***Bitti*** / ***Kaydet*** (mevcut izler için) düğmesi, değişiklikleri hızlı bir şekilde kaydetmenizi ve *Rota Planla* aracından çıkmanızı sağlar. Ad, geçerli tarihe göre oluşturulur.
- [Seçenekler menüsündeki](#options) ***Değişiklikleri kaydet***, değişiklikleri bir dosyaya kaydetmenizi ve rotayı planlamaya devam etmenizi sağlar.
- [Seçenekler menüsündeki](#options) ***Yeni iz olarak kaydet***, izinin adını ve rotanın kaydedileceği klasörü belirttiğiniz bir iletişim kutusu açar.
- ***Değişiklikleri bir ize ekle***. Oluşturulan bir izi, başka bir mevcut ize [ayrı bir segment](#segments) olarak ekler. Seçilen bir izdeki değişiklikler *geri alınamaz*.

:::note Basitleştirilmiş iz seçeneği
Yeni bir iz kaydederken, izi diğer üçüncü taraf uygulamalarla uyumlu hale getirmek için ***Basitleştirilmiş*** iz seçeneğini seçebilirsiniz. Teknik olarak, iz, yalnızca geometrik bir iz olarak rota talimatları olmadan kaydedilecektir.
:::

### Seçenekler {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota planla android-options](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota planla ios-options](@site/static/img/plan-route/plan_route_menu_options_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="route_between_points"/>](#route-between-points). Seçilen uygulama profilini gösterir (varsayılan düz bir çizgidir). Bu eyleme dokunmak, uygulama [profil menüsünü](../personal/profiles.md) açan *Profil* düğmesine dokunmakla aynıdır.
- **<Translate ios="true" ids="gpx_start_new_segment"/>** (*iOS*) veya **<Translate android="true" ids="plan_route_add_new_segment"/>** (*Android*). Önceki segmente bağlanmayan yeni rota segmentleri çizer.
- [<Translate android="true" ids="shared_string_save_changes"/>](#save-route). Mevcut olana bağlanmayan yeni bir iz ise, *Yeni iz olarak kaydet* menüsü açılır. Açılan veya içe aktarılan bir ize yeni segmentler eklediğinizde, GPS dosyasını depolama alanına kaydetme bildirimi görünür, ardından bir sonraki segmenti oluşturmaya devam edebilirsiniz.
- [<Translate android="true" ids="save_as_new_track"/>](#save-route). Rotanızı GPX izi olarak kaydeder.
- [<Translate android="true" ids="add_to_a_track"/>](#save-route). Rotanızı iz klasörünüzden bir ize ekleyin ve yeni izi kaydedin.
- [<Translate android="true" ids="shared_string_navigation"/>](../navigation/setup/gpx-navigation.md). Konumunuzdan bitiş noktasına çizilen bir rota kullanarak navigasyonu başlatır.
- **<Translate android="true" ids="reverse_route"/>**. Rotanın *Başlangıç* noktasını ve son eklenen noktayı değiştirirsiniz. Tersine çevirme uygulandığında rota segmenti ayarları değişmez.
- [<Translate android="true" ids="attach_to_the_roads"/>](#attach-track-to-roads). Yaklaşık bir rota oluşturur. İz üzerindeki her nokta, seçilen profile ve eşik mesafesine göre haritadaki en yakın izin verilen yola eşleştirilir.
- [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) (Yalnızca Android). Seçilen yönlendirme türüyle eşleşmeyen rota noktalarını filtreleyebilir, gereksiz verileri silebilir veya yanlış verileri düzeltebilirsiniz. GPS filtresi yalnızca yönlendirme türü *Düz Çizgi* olarak belirtilmişse çalışır. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- [<Translate android="true" ids="get_altitude_data"/>](#get-elevation-data) (*Yalnızca Android*). Bu seçenek, menüde yalnızca yükseklik verileri mevcut değilse görüntülenir. Bu [seçenekle](#get-elevation-data), *Arazi harita verilerini* kullanarak rakımı hesaplayabilir veya *yakındaki yolları* bulmak için indirilen haritalardaki verileri kullanabilirsiniz.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. Tüm eylemlerinizi tamamen arşivler. Haritada bir "yapaylık" kalır - yeni temizlenen rotanın noktalı çizgileri. Bir sonraki, yeni noktalar eklenirken kaybolur. Tümünü Temizle işlevini Geri Dön Eylemi düğmesiyle iptal edebilirsiniz. Özellik, araçta açılan rotaların değişmeyen kısımlarını etkilemez.

### Grafik {#graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota planla android](@site/static/img/plan-route/plan_route_graph_5_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota planla snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>

Rota planlaması sırasında, [grafik](../navigation/setup/route-details.md#elevation-graph) rota yüksekliği ve eğim yüzdesi bilgilerini görüntüler, ayrıca belirli verilerle bir işaretçi görüntülemek için grafiğin herhangi bir yerine dokunabilirsiniz.  

- **Android** için grafik, bir iz oluştururken veya açarken ve *Rota Planla* kullanarak [Navigasyon](../navigation/setup/gpx-navigation.md) yaparken *Grafik* sekmesinde görüntülenir.
- **iOS** için grafik, yalnızca *[Seçenekler](#options) → Navigasyon* menüsü aracılığıyla kullanılabilir.

*Rota Planla*'da navigasyon için bir rota hesaplarken, [Yükseklik bilgisi](../navigation/setup/route-details.md#elevation-info) ve [Yol özellikleri](../navigation/setup/route-details.md#road-attributes) gibi ek iz bilgilerini bulabilir ve [Haritada analiz et](../navigation/setup/route-details.md#analyze-on-map) aracını kullanabilirsiniz. Grafiğin altındaki *Ayrıntılar* düğmesine dokunun.  


## İlgili Makaleler {#related-articles}

- [Haritada İz Göster](../map/tracks/index.md)
- [Haritada Analiz Et](../map/tracks/index.md#analyze-track-on-map)
- [İz Bağlam Menüsü](../map/tracks/track-context-menu.md)
- [İze Göre Navigasyon](../navigation/setup/gpx-navigation.md)
- [Yolculuk Kaydı](../plugins/trip-recording.md)