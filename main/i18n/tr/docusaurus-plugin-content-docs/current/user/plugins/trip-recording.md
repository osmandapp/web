---
source-hash: 65d58e4d60970c5f1ac65b7011c0c7fe2efa530f4578330a7ac4de7a0624b753
sidebar_position: 15
title: Seyahat Kaydı
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

**Seyahat Kaydı eklentisi**, rotalarınızı, hareketlerinizi ve antrenmanlarınızı kaydetmek için önemli bir araçtır. Bu özellik, seyahatlerinizi kaydetmenize olanak sağlamakla kalmaz, aynı zamanda izlerinizi kolayca yeniden kullanmanıza, değiştirmenize, güncellemenize ve başkalarıyla paylaşmanıza da olanak tanır.

*Seyahat Kaydı eklentisi* ile yeni izler oluşturabilir, kaydedilenleri doğrudan harita üzerinde görüntüleyebilir ve mevcut kayıtları yönetebilirsiniz. Hız, yükseklik değişiklikleri, arazi detayları ve harici sensörlerden gelen veriler gibi seyahatleriniz hakkında değerli bilgiler sunar. Eklenti, seyahatinizden sonra ayrıntılı analiz ve paylaşım için rotanızı kaydeder.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de kaydedilen seyahat](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta kaydedilen seyahat](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

İzleri kaydetmeye başlamak için aşağıdaki ayarları yapmanız gerekir:

1. **Seyahat kaydı eklentisini** [etkinleştirin](../plugins/index.md#enable--disable).
2. Gerekli [profil](../personal/profiles.md) için **kayıt ayarlarını** [yapılandırın](#recording-settings).
3. Ekrana **Seyahat kaydı widget'ları** [ekleyin](#widgets) (isteğe bağlı).
4. Haritadaki izleri [yönetin](../map/tracks/appearance.md) (isteğe bağlı).


## Yeni İz Kaydı {#new-track-recording}

![iOS'ta Mesafe/Başlat-Durdur widget'ı](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Android'de Mesafe/Başlat-Durdur widget'ı](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

OsmAnd'daki Seyahat Kaydı eklentisi ile çeşitli uygun seçenekleri kullanarak iz kaydınızı kolayca başlatabilirsiniz. Yolculuğunuza nasıl başlayabileceğiniz aşağıda açıklanmıştır:

- [Mesafe/Başlat-Durdur widget'ı](#distance-start-stop) — Kaydı etkinleştirmek için kullanın.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) — *Ana <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> sekmesindeki* düğmeye dokunun.

- [Hızlı Eylem](../widgets/quick-action.md#add-and-delete-actions) düğmeleri — Bir seyahat kaydını başlatmak için *Menü → Ekranı Yapılandır → Özel düğmeler → Hızlı eylem → Eylem ekle → Yerlerim*'e gidin ve [Başlat / Duraklat: Seyahat kaydı](../widgets/quick-action.md#my-places) seçeneğini seçin.

- *Yalnızca Android*:
    - *Ana <Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*'e gidin.

    - [Sistem bildirimi](#notifications) — Cihazınızın bildirim alanında kullanın.

    - [Uygulama başlatıcısı](#launcher-android) — Kaydı başlatmak için kullanın.

**Öneriler:**

- [Hassas konum](../start-with/first-steps.md#permission-to-access-the-location) — Doğru iz kaydı için OsmAnd'ın bu izne sahip olduğundan emin olun.

- [Sorun Giderme](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) — **iOS cihazları** bazen arka planda çalışan uygulamaları geçici olarak **askıya alabilir veya durdurabilir**, bu da iz kaydını kesintiye uğratabilir.

- **Konum Kaynağı** (*Yalnızca Android*) — Doğru kayıtlar için en uygun GPS sağlayıcısını seçmek üzere OsmAnd'daki ayarları yapın. [Daha fazla bilgiyi buradan edinin](../personal/global-settings.md#location-source).


### Bir Diyalog Başlatın {#start-a-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Başlat iletişim kutusu, Başlat iletişim kutusunun ayarlar bölümünde **<Translate android="true" ids="show_start_dialog"/>** seçeneği etkinleştirilirse açılır.

![Android'de kaydı başlat](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Başlat iletişim kutusu, **<Translate ios="true" ids="track_interval_remember"/>** seçeneği açık değilse açılır.

![iOS'ta kaydı başlat](@site/static/img/plugins/trip-recording/start_rec_ios_1.png)

</TabItem>

</Tabs>

- **Günlük kaydı aralığı** (*Android/iOS*). Bu ayar, uygulamanın GPS sensöründen izinizdeki yeni noktaları işaretlemek için ne sıklıkta veri istediğini kontrol eder. Aralığı ayarlamak, iz ayrıntısı ile pil kullanımı arasında denge kurmanıza olanak tanır. Daha kısa bir aralık, daha ayrıntılı izler ancak daha yüksek pil tüketimi ile sonuçlanırken, daha uzun bir aralık pili korur ancak iz doğruluğunu azaltır.

- **Çizgi simgesi** (*Android*). [İz Görünümü seçeneklerine](../map/tracks/appearance.md) erişmek için bu simgeye dokunun. Burada, çizgi rengi, kalınlığı ve stili dahil olmak üzere izinizin haritada nasıl görüneceğini özelleştirebilirsiniz. Özelleştirilmiş bir görünümle bir izi kaydettiğinizde, bu ayarlar gelecekteki kayıtlar için korunacak ve izi her görüntülediğinizde veya yeniden etkinleştirdiğinizde tutarlılık sağlayacaktır.

- **Ayarlar menüsü** (*Android*). Kayıt tercihlerinizi ince ayar yapmak için bu menüye erişin. Ayrıntılı bir genel bakış için [Seyahat Kaydı Ayarları](#recording-settings) bölümüne bakın.

- **Seçimimi hatırla** (*iOS*). Etkinleştirildiğinde, iz kaydı ek ayarlar veya onay istemeden otomatik olarak başlar. Yeni bir iz başlatmadan önce kayıt ayarlarını değiştirmek isterseniz, ayarlar menüsünün yeniden görünmesi için Seyahat Kaydı eklentisini yeniden başlatın.


### Başlatıcı (Android) {#launcher-android}

![Simgenin bağlam menüsü](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Kaydı Başlat simgesi](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

Doğrudan Android cihazınızın ekranından OsmAnd uygulama simgesinin bağlam menüsünü kullanarak hızlıca yeni bir iz kaydı başlatabilirsiniz.

- **Uzun dokunuş** ile OsmAnd uygulama simgesine dokunarak bağlam menüsünü açın, burada **Kaydı Başlat** seçeneğini bulabilirsiniz.

- [İz kayıt ayarları](#overview-screen) ekranda görüntülenirken OsmAnd uygulamasını başlatmak için **Kaydı Başlat** seçeneğine dokunun.

- Daha hızlı erişim için bir kısayol eklemek üzere uygulama simgesi bağlam menüsündeki **Kaydı Başlat** seçeneğine **uzun dokunun**.

İz kaydı etkin durumdayken, OsmAnd uygulama simgesinin köşesinde bir bildirim rozeti görünecek ve kaydın devam ettiğini gösterecektir. Bu bildirimi yönetme hakkında daha fazla bilgi için [Bildirim](#notifications) bölümüne bakın.


## Mevcut İz Kaydı {#current-track-recording}

*Durdur / Kaydet / Duraklat* için:

- Kaydı **Durdurmak** için [Mesafe/Başlat-Durdur widget'ı](#distance-start-stop) iletişim kutusundaki ilgili düğmeye dokunun.

- (*Yalnızca Android*) Kaydı **Durdurmak** için *Seyahat kaydı* Ana Menü öğesine dokunun.

- Bir kayıt izini **Durdurmak** veya **Kaydetmek** için *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/> sekmesi*](../personal/myplaces.md#tracks) bölümüne gidin ve *Şu anda kayıt yapan iz* alanındaki uygun düğmeye dokunun.

- Yeni bir segmenti **Kaydetmek, Duraklatmak, Başlatmak** veya kaydı **Bitirmek** için [Hızlı Eylem](../widgets/quick-action.md#add-and-delete-actions) düğmelerini kullanın. *Menü → Ekranı Yapılandır → Özel düğmeler → Hızlı eylem → Eylem ekle → [Yerlerim](../widgets/quick-action.md#my-places)* bölümüne gidin ve bir veya daha fazla hızlı eylem düğmesi ekleyin.

- (*Yalnızca Android*) Bir kayıt izini **Duraklatmak** veya **Kaydetmek** için cihazınızın bildirim alanındaki sistem [bildirimini](#notifications) kullanın.<br/><br/> ![durdur-kaydet-duraklat](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### Genel Bakış Ekranı {#overview-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![genel bakış](@site/static/img/plugins/trip-recording/overview_screen_graphs_andr.png) ![genel bakış](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta kaydı bitir](@site/static/img/plugins/trip-recording/start_rec_ios_3.png) ![iOS'ta kaydı bitir](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_ios.png)

</TabItem>

</Tabs>

OsmAnd'da, **Android** ve **iOS** sürümleri iz kayıt arayüzünü biraz farklı ele alır. Android'de, *İz kaydı* bağlamı için özel bir menü bulurken, iOS'ta bu, *Şu anda kayıt yapan iz* bağlam menüsüne entegre edilmiştir.

Bir iz kaydederken, yolculuğunuz hakkında gerçek zamanlı görsel veriler sağlayan dinamik grafikler oluşturulur. Bu grafikler, yakınlaştırma seviyenize bağlı olarak tüm rota veya yalnızca seçilen bir segment için bilgi yansıtabilir.
Bunlarda bulabilecekleriniz şunlardır:

- **Veri değerleri**. Grafiğin sağ tarafında, izlenebilir bölüm için ***en yüksek***, ***en düşük*** ve ***ortalama*** değerler bulunur.

- **Anahtar bilgi grafiği**:
    - ***Android***. Grafikteki ***Y ekseni*** için, *Rakım*, *Eğim*, *Hız* ve [harici sensör bilgileri](../plugins/external-sensors.md#trip-recording) gibi tüm mevcut verilerden *iki parametreye kadar* seçebilirsiniz. ***X ekseni*** için ise *Mesafe*, *Süre* veya *Günün Saati*ni görüntülemeyi seçin.
    - ***iOS***. Parametreler, Y ekseni için uygun değerler ve X ekseni için *Mesafe* ile *Genel Bakış*, *Rakım* ve *Hız* sekmelerinde düzenlenmiştir.

- **İstatistik**. Android için, grafik ayarlarından bağımsız olarak sabit bir istatistik veri kümesi görüntüler: *Mesafe*, *Süre*, *Yokuş Yukarı*, *Yokuş Aşağı*, *Ortalama Hız*. iOS için, Genel Bakış, Tutum ve Hız sekmelerinin her birinde farklı bir veri kümesi bulunur.

Daha ayrıntılı bir görünüm için grafiği **ölçeklendirebilirsiniz**:

- Yakınlaştırmak veya uzaklaştırmak ve belirli aralıklara odaklanmak için [iki parmak hareketini](../map/interact-with-map.md#gestures) kullanın.
- Grafikteki herhangi bir noktaya dokunarak o konum için tam değerleri gösteren bir işaretleyici görüntüleyin.

| |
| ------------- |
|**Genel Bakış** sekmesi iOS (Android için, Y ekseni parametreleri *Rakım*, *Hız* ve X ekseni parametresi *Mesafe*'dir). Bu sekme, iz boyunca hız ve rakım değişikliklerini gösteren bir grafik ve ana iz ayrıntılarını görüntüler. iOS için iz verileri: *Mesafe*, *Süre*, *Başlangıç Saati* ve *Bitiş Saati*. Bunun Android ve iOS sürümlerinde nasıl görüntülendiğini aşağıda görebilirsiniz. |
| ![veri](@site/static/img/plugins/trip-recording/graph_overview_andr.png) ![veri](@site/static/img/plugins/trip-recording/graph_overview_ios.png) |
| **Rakım** sekmesi iOS (Android için, Y ekseni parametreleri *Rakım*, *Eğim* ve X ekseni parametresi *Mesafe*'dir). Bu sekme, kaydedilen izinizin yükseklik profiline odaklanarak rakım değişiklikleri ve arazi eğimleri hakkında bilgi sağlar. iOS için anahtar metrikler şunları içerir: *Ortalama Rakım*, *Rakım Aralığı*, *Yokuş Yukarı* ve *Yokuş Aşağı*. Aşağıdaki grafikler, Android ve iOS arayüzleri arasındaki farklılıkları göstermektedir. |
| ![veri](@site/static/img/plugins/trip-recording/graph_altitude_andr.png) ![veri](@site/static/img/plugins/trip-recording/graph_altitude_ios.png) |
| **Hız** sekmesi iOS (Android için, Y ekseni parametresi *Hız* ve X ekseni parametresi *Mesafe*'dir). Hız sekmesi, iz boyunca hızla ilgili verileri vurgular. iOS için, *Ortalama Hız*, *Maksimum Hız*, *Hareket Süresi* ve *Düzeltilmiş Mesafe* gibi bilgileri içerir. Aşağıdaki ekran görüntüleri, bu verilerin her iki platformda nasıl görüntülendiğini göstermektedir. |
| ![veri](@site/static/img/plugins/trip-recording/graph_speed_andr.png) ![veri](@site/static/img/plugins/trip-recording/graph_speed_ios.png) |
| **Android** için, mevcut Y ekseni verileri ve X ekseni değerlerinin daha fazla kombinasyonunu oluşturabilirsiniz. |
| ![veri](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Daha fazla ayrıntı için, yeniden adlandırma, silme veya ara noktalar ekleme gibi çeşitli izle ilgili seçenekleri yönetebileceğiniz [**İzler Bağlam Menüsü**](../map/tracks/track-context-menu.md#options) bölümünü inceleyebilirsiniz. İzlerin haritada nasıl görüneceğini ayarlamak için [**Görünüm**](../map/tracks/appearance.md) bölümünü ziyaret edin. Mevcut izlerinize belirli ara noktalar eklemek isterseniz, [**İz Noktaları**](../map/tracks/track-context-menu.md#points--waypoints) kılavuzuna göz atın. Bir izi yeniden adlandırma gibi herhangi bir değişiklik için, İzler Bağlam Menüsü içindeki [**Seçenekler**](https://osmand.net/docs/user/map/track-context-menu#options) sekmesini kullanın.
:::


### Haritada Göster {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![haritada_tr_goster_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Harita izlerini yapılandır Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![haritada_tr_goster_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Harita izlerini yapılandır iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Haritanızda hangi izlerin görünür olduğunu iki seçenekten birini kullanarak yönetin. *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate ios="true" ids="shared_string_gpx_tracks"/> sekmesi*](../map/tracks/index.md#my-places) bölümüne gidin ve görüntülemek veya gizlemek istediğiniz herhangi bir iz için *Haritada göster* seçeneğini etkinleştirin. Alternatif olarak, tüm izlerinizin görünürlüğünü tek bir yerden hızlıca ayarlamak için *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map) bölümüne gidebilirsiniz.


### Kaydedilen GPX Dosyası {#recorded-gpx-file}

OsmAnd, yolculuğunuzu yapılandırılmış bir [GPX dosyasına](https://en.wikipedia.org/wiki/GPS_Exchange_Format) kaydeder ve *dosya > iz > segmentler > noktalar* hiyerarşisini kullanır. İşte nasıl çalıştığı:

- **Noktalar**, kaydedilen yolunuzun bireysel anlarını temsil eder, her biri koordinatlar, hız, yükseklik ve yön gibi özelliklerle işaretlenir.
- Bu noktalar, tüm rotanızı temsil eden **izler** oluşturmak üzere gruplandırılır.
- Kayıtta bir boşluk varsa (örneğin, izleme duraklatıldıysa), aradan sonraki bir sonraki nokta yeni bir **segment** başlatır ve yolculuğunuzdaki ayrımı işaretler.
- Hem **segmentler** hem de **izler** haritada *Başlangıç* ve *Bitiş* simgeleriyle görsel olarak temsil edilir.

```xml
<extensions>
    <gpxtpx:TrackPointExtension>
        <gpxtpx:hr>107</gpxtpx:hr>
        <gpxtpx:atemp>107</gpxtpx:atemp>
        <gpxtpx:cad>107</gpxtpx:cad>
    </gpxtpx:TrackPointExtension>
</extensions>
```

<!-- ![Kaydedilen bir izden GPX dosyası](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm4.png)

![Kaydedilen bir izden GPX dosyası](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm2.png)  -->


| Parametre | Açıklama |
|-----------------|----------------|
| `trkpt` | **İz Noktası**, etkinliğiniz sırasında tespit edilen belirli bir coğrafi konumu temsil eder. Her iz noktası, kaydedilen yolunuzun temelini oluşturan enlem ve boylam koordinatlarını içerir. |
| `trkseg` | **İz Segmenti**, duraklamalar veya duruşlar gibi etkinlikteki kesintilerle ayrılmış ardışık iz noktalarını bir araya getirir. Bu, tek bir kayıt içindeki sürekli hareketi boşta kalma sürelerinden ayırmaya yardımcı olur. |
| `lat` | **Enlem**, bir noktanın Dünya yüzeyindeki kuzey-güney konumunu gösterir. Tam konumunuzu belirlemek için kullanılan koordinat çiftinin yarısıdır. |
| `lon` | **Boylam**, enlemi tamamlayarak bir noktanın dünya üzerindeki konumunu doğru bir şekilde belirlemek için doğu-batı konumunu belirtir. Enlem ve boylam birlikte, tam coğrafi konumunuzu tanımlar. |
| `ele` | **Yükseklik**, bir iz noktasının deniz seviyesinden yüksekliğini metre cinsinden kaydeder. Bu, yürüyüşler veya bisiklet gezintileri gibi etkinlikleriniz sırasında yükseklik değişikliklerini izlemek için faydalı olabilir. |
| `time` | **Zaman Damgası**, bir iz noktasının kaydedildiği tam tarih ve saati kaydeder. Bu, etkinliğinizin süresini ve zamanlamasını hassasiyetle izlemenizi sağlar. |
| `hdop` | **Yatay Doğruluk Azalması (HDOP)**, uydu konumlarından kaynaklanan konumdaki potansiyel hatayı yansıtan bir GPS doğruluk ölçüsüdür. Standart HDOP'tan farklı olarak, OsmAnd GPX izleri bu değeri metre cinsinden yatay doğruluğu temsil etmek için kullanır. Lütfen bu uygulamanın tipik HDOP standartlarından farklı olduğunu unutmayın. [Daha fazla bilgi edinin](https://github.com/osmandapp/Osmand/issues/3445). |
| `speed` | **Hız**, hareket hızınızı saniyede metre cinsinden kaydeder. Etkinliğinizin çeşitli segmentlerindeki hızınız hakkında bilgi sağlar. |
| `heading` | **Yön**, aracınızın veya cihazınızın önünün işaret ettiği yönü derece cinsinden gösterir. Bu, hareketin gerçek yolu olan rotadan farklıdır. Rüzgar, akıntılar veya yol koşulları gibi dış faktörler nedeniyle farklılıklar meydana gelebilir. [Yön hakkında daha fazla bilgi](https://en.wikipedia.org/wiki/Heading_(navigation)). |
| `speed_sensor` | [Harici sensörlerden](../plugins/external-sensors.md) **Hız**, bağlı sensörlerden veri yakalar ve özellikle bisiklet sürerken daha hassas hız bilgisi sağlar. Daha fazla ayrıntı için [GPX dosya formatı belgelerine](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data) bakın. |
| `cadence` | **Kadans**, [harici sensörler](../plugins/external-sensors.md) kullanılarak kaydedilen dakikadaki pedal devri sayısını ölçer. Bu, özellikle pedal çevirme verimliliğini izlemek ve optimize etmek isteyen bisikletçiler için kullanışlıdır. [Daha fazlasını okuyun](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `power` | **Bisiklet Gücü**, pedal çevirirken üretilen gücü [harici sensörlerden](../plugins/external-sensors.md) yakalar. Performanslarını ölçmek isteyen ciddi bisikletçiler için önemli bir metriktir. [Daha fazla bilgi edinin](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `atemp` | **Hava Sıcaklığı**, etkinliğiniz sırasında ortam hava sıcaklığını [harici sensörler](../plugins/external-sensors.md) kullanılarak kaydeder. Su sıcaklığının desteklenmediğini unutmayın. [Ayrıntılar burada](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `hr` | **Kalp Atış Hızı**, bağlı [sensörlerden](../plugins/external-sensors.md) gelen verileri kullanarak dakikadaki kalp atışlarınızı izler. Bu bilgi, antrenmanlar sırasında kardiyovasküler performansınızı izlemek için hayati olabilir. [Daha fazlasını öğrenin](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |


## Kayıt Ayarları {#recording-settings}

Seyahatlerinizi izlemeye başlamadan önce, en iyi performans için **Seyahat Kaydı eklentisini** doğru şekilde yapılandırmanız gerekir.

- **Profile özel ayarlar**. Uygulamadaki her profilin kendi benzersiz Seyahat Kaydı ayarları olabilir. Bu, sürüş, bisiklet veya hatta farklı yapılandırmalar gerektirebilecek İskandinav yürüyüşü gibi etkinliğinize göre kayıt davranışını hassas bir şekilde özelleştirmenize olanak tanır.

- **Kayıt parametrelerini özelleştirin**. Kayıt ayarları, nasıl hareket ettiğinize bağlı olarak değişebilir. Örneğin, uzun mesafeler sürmek daha düşük bir kayıt sıklığı gerektirebilirken, yürüyüş veya yürüyüş daha sık güncellemelerden faydalanabilir.

- **Hassas konum verileri**. Kayıtlarınızın sorunsuz ve gelecekteki kullanım için kullanılabilir olmasını sağlamak için, konum noktalarını yakalama şeklinizi özelleştirebilirsiniz. Bu, kayıt sıklığını, verilerinizin biçimini (mesafe birimi başına nokta sayısı gibi) veya kaydedilen noktalar arasındaki boşluğu ayarlamayı içerebilir.

- **Küresel ayarlar**. Seyahat Kaydı ayarları, uygulamanın küresel [ayarlarında](../personal/global-settings.md) yönetebileceğiniz profile göre yapılandırılır. Seyahat Kaydı eklentisini özelleştirmeden önce, [profiller](../personal/profiles.md) bölümünden yapılandırmak istediğiniz profili seçin. Oradan, Seyahat Kaydı seçeneklerine erişmek için profilin ayarlarına gidin.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de Seyahat kaydını yapılandırma](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png) ![Android'de Seyahat kaydını yapılandırma](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta Seyahat kaydını yapılandırma](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png) ![iOS'ta Seyahat kaydını yapılandırma](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Parametre | Açıklama |
|---|---|
| **Pil optimizasyonu iletişim kutusu** (*Android*) | [Android pil optimizasyonu ayarlarını](#battery-optimization) açar. Tekrar sorulmasını istemiyorsanız *Bir daha sorma* seçeneğine dokunun. |
| **Başlangıç iletişim kutusunu göster** (*Android*) | Kayda başlamadan önce ayarları yapılandırabileceğiniz bir iletişim kutusu etkinleştirir. Devre dışı bırakılırsa, kayıt otomatik olarak başlar. |
| **Navigasyon sırasında izi otomatik kaydet** | Navigasyon sırasında izi otomatik olarak kaydeder ve *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>* sekmesine kaydeder.<br />*Not*: İz kaydı pil tüketir ve ekran kapalı olsa bile arka planda çalışmaya devam eder. |
| **Genel günlük kaydı aralığı** | Konum noktalarının ne sıklıkta kaydedileceğini tanımlar. Varsayılan 5 saniyedir. *Seyahat kaydı widget'ı* ile etkinleştirilir. |
| **Minimum yer değiştirme** | Çok az hareket olduğunda veya hiç hareket olmadığında noktaların kaydedilmesini önlemek için bir filtre. Veri gürültüsünü azaltmaya yardımcı olur.<ul><li>*Yan etkiler*: Dinlenme süreleri kaydedilmeyebilir ve küçük hareketler göz ardı edilebilir. Bu, işlem sonrası verileri azaltabilir ancak GPS hatalarının kaydedilmesini de önleyebilir.</li><li>*Öneri*: Kayıtlarınızda daha az küçük ayrıntı istiyorsanız yer değiştirmeyi 5 metreye ayarlayın.</li></ul> |
| **Minimum doğruluk** | Cihaz tarafından bildirilen minimum doğruluk göstergesi eşiğinin altındaki konum noktalarını filtreler.<ul><li>*Yan etkiler*: Zayıf sinyal alanlarındaki (köprülerin altında, ağaçların arasında, binaların arasında veya bazı hava koşullarında) noktalar eksik olabilir.</li><li>*Öneri*: Emin değilseniz, eksik verileri önlemek için bu filtreyi devre dışı bırakmak daha iyi olabilir.</li></ul><details><summary>*Açıklama*</summary>Kayıttan hemen önce GPS kapatıldıysa. Bu durumda, ilk ölçülen noktanın doğruluğu azalabilir, bu nedenle noktayı kaydetmeden önce bir süre beklemek veya ardışık 3 noktanın en iyisini kaydetmek daha iyidir.</details> |
| **Minimum hız** | Belirli bir hızın altında kaydedilen noktaları göz ardı etmek için bir eşik belirler.<ul><li>*Yan etkiler*: Hızın belirtilen eşiğin altına düştüğü bölümler kaydedilmeyecektir.</li><li>*Öneri*: Bunun yerine *Minimum yer değiştirme* filtresini kullanın, çünkü önemli verileri kaybetmeden daha iyi sonuçlar verebilir.</li></ul><details><summary>*Açıklama*</summary>Önce günlük kaydı minimum yer değiştirme filtresi (B) aracılığıyla hareket algılamayı kullanmayı deneyin, daha iyi sonuçlar verebilir ve daha az veri kaybedersiniz. Düşük hızlarda izleriniz gürültülü kalırsa, burada sıfır olmayan değerleri deneyin. Bazı ölçümlerin hiç hız değeri bildirmeyebileceğini (bazı ağ tabanlı yöntemler) unutmayın, bu durumda hiçbir şey kaydetmezsiniz.<br/><br/>Hız > 0 kontrolü: Çoğu GPS yonga seti, algoritma hareket halinde olduğunuzu belirlerse bir hız değeri bildirir, aksi takdirde hiçbir şey bildirmez. Bu nedenle, bu filtrede > 0 ayarını kullanmak, bir anlamda GPS yonga setinin hareket algılamasını kullanır. Ancak kayıt sırasında burada filtrelenmese bile, GPX analizimizde Düzeltilmiş Mesafe'yi, yani o alanda görüntülenen değeri, hareket halindeyken kaydedilen mesafeyi belirlemek için bu özelliği hala kullanıyoruz.</details> |
| **Boşluktan sonra kayıtları otomatik böl** | Kaydedilen noktalar arasındaki zaman boşluklarına göre izleri otomatik olarak böler. <ul><li>6 dakikalık bir boşluktan sonra yeni bir segment başlar.</li><li>2 saatlik bir boşluktan sonra yeni bir iz başlar.</li><li>Tarih değiştiğinde yeni bir dosya başlar.</li><li>Boşluklar GPS sinyal kaybı, düşük hız veya yapılandırma ayarlarından kaynaklanabilir.</li></ul><details><summary>*Açıklama*</summary>Hiçbir nokta kaydedilmediğinde bir boşluk belirlenir. Bu, konumun algılanmaması veya algılanması ancak kaydedilmemesi nedeniyle olabilir. Zayıf GPS sinyalleri (kötü hava koşulları, hareket hızı yapılandırılan eşiğin altına düşmesi) gibi çeşitli faktörler buna neden olabilir. Bu gibi durumlarda, cihaz konumu algılasa bile kaydetmez.<br/><br/>Kaydedilen verilerdeki bu boşluklar, aynı iz içinde yeni bir segmentin, aynı dosya içinde yeni bir izin veya tek bir kayıt içinde yeni bir GPX dosyasının oluşturulmasını tetikleyebilir. Bu, tek bir başlatma/durdurma kayıt oturumu içinde yönetilir.</details> |
| **Bağımsız günlük kaydını önle** (*Android*) | OsmAnd uygulaması kapatıldığında (son uygulamalar aracılığıyla) iz kaydını duraklatır. Arka plan göstergesi Android bildirim panelinde görüntülenmez. |
| **Yönü dahil et** | GPX dosyasındaki her nokta için yönü (hareket yönü) kaydeder. Yön, cihazın baktığı yöndür, bu da rüzgar veya kayma gibi dış faktörler nedeniyle hareket yönünden farklılık gösterebilir. |
| **Etkinlik** | Seçenek, bir profil için bir [etkinlik türü](../map/tracks/track-context-menu.md#track-information-activity) önceden seçmenize olanak tanır, bu daha sonra tüm kaydedilen izlere otomatik olarak uygulanır. |
| **Harici sensörler** <br/> *Eklentinin etkin olması gerekir* | *<Translate android="true" ids="map_widget_ant_heart_rate"/>* veya *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* gibi [harici sensörlerden](../plugins/external-sensors.md#trip-recording) gelen veriler GPX dosyasına kaydedilir. *Mesafe* verileri Android veya iOS'ta kaydedilmez. Yalnızca [Harici Sensörler eklentisi](../plugins/external-sensors.md) etkinleştirildiğinde görüntülenir. |
| **Araç Metrikleri** <br/> *Eklentinin etkin olması gerekir* | [OBD-II tarayıcısından](../plugins/vehicle-metrics.md#trip-recording) gelen veriler GPX dosyasına kaydedilir. Yalnızca [Araç Metrikleri eklentisi](../plugins/vehicle-metrics.md) etkinleştirildiğinde görüntülenir.<br />*Not*: GPX dosyasına hangi metriklerin kaydedileceğini listeden ekleyebilirsiniz: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **İz depolama klasörü** (*Android*) | *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* sekmesinde kaydedilen izlerin nerede depolanacağını tanımlar. Seçenekler arasında tüm izleri Rec klasöründe depolama veya bunları ay bazında (örneğin Rec/yyyyy-mm) düzenleme bulunur. |
| **Bildirim** | Seyahat kaydı sistem bildiriminin cihazın bildirim alanında görüntülenmesini kontrol eder ve seyahatleri kaydetmenize olanak tanır. |
| **Çevrimiçi izleme** (*Android*) | Kaydedilen noktaları belirtilen bir URL'ye göndererek konumunuzun gerçek zamanlı izlenmesine olanak tanır. İzleme aralığı, noktaların ne sıklıkta gönderileceğini belirler ve zaman arabelleği, İnternet bağlantısı olmadığında noktaları depolar.<details><summary>*Açıklama*</summary>Bu seçenek etkinleştirilirse ve iz kaydı devam ediyorsa, Mesafe/Başlat-Durdur (KAYIT) widget'ı **kırmızı** yerine **yeşil** olur, bu da her kaydedilen noktanın belirtilen bir URL'ye iletildiğini gösterir. **Web adresi** alanı, aşağıdaki parametre biçimini kullanarak URL'yi girmenize olanak tanır:<ul><li>`lat={0}`: Enlem</li><li>`lon={1}`: Boylam</li><li>`timestamp={2}`: Zaman damgası (Unix zamanı)</li><li>`hdop={3}`: Yatay doğruluk azalması</li><li>`altitude={4}`: Yükseklik</li><li>`speed={5}`: Hız</li><li>`bearing={6}`: Yön (hareket yönü)</li><li>`eta={7}`: Tahmini varış zamanı (Unix zamanı)</li><li>`etfa={8}`: İlk ara noktaya veya bitiş noktasına tahmini süre (Unix zamanı)</li><li>`eda={9}`: Varışa veya bir işarete tahmini mesafe (metre cinsinden)</li><li>`edfa={10}`: İlk ara noktaya veya bitiş noktasına tahmini mesafe (metre cinsinden)</li></ul>**İzleme Aralığı**nı, konum noktalarının ne sıklıkta gönderileceğini belirtmek için ayarlayabilirsiniz, seçenekler 0 saniyeden 5 dakikaya kadar değişir. Ayrıca, **Zaman Arabelleği** parametresi, İnternet bağlantısı yoksa konum noktalarının ne kadar süreyle depolanacağını belirler ve bağlantı yeniden sağlandığında verilerin kaydedilmesini ve iletilmesini sağlar.</details> |
| **İzler** | İzlerin kaydedildiği klasöre hızlı bir referans *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* sekmesi. |
| **Eklenti ayarlarını varsayılana sıfırla** | Geçerli profil için tüm seyahat kaydı ayarlarını varsayılanlarına sıfırlar. |
| **Başka bir profilden kopyala** (*Android*) | Seyahat kaydı ayarlarını bir profilden diğerine kopyalar. |


### Pil Optimizasyonu {#battery-optimization}

<InfoAndroidOnly />

![Haritada iz iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png) ![Haritada iz iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)

Bu özellik, OsmAnd için pil optimizasyonu ayarlarını yönetmenize olanak tanır ve navigasyon veya iz kaydı sırasında uygulama arka planda çalışırken bile konumunuza kesintisiz erişim sağlar.

- **Pil optimizasyonu ayarları**. Android ayarlarını açar, burada OsmAnd için pil tasarrufu tercihlerini değiştirebilirsiniz. [Daha fazla ayrıntı burada](../troubleshooting/general.md#optimizing-battery-consumption).
- **Bir daha sorma**. İletişim kutusunu kalıcı olarak kapatır, böylece bir daha görünmez.
- **Kapat**. İletişim kutusunu geçici olarak kapatır, pil optimizasyonunun dikkat gerektirdiği bir sonraki seferde tekrar görünecektir.


### Bildirimler {#notifications}

![Seyahat Kaydı Bildirimi](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)

Eklenti ayarlarında [Bildirim](#recording-settings) etkinleştirilirse, kayıt etkin olduğunda seyahat kaydı bildirimleri sistem bildirim alanında her zaman görüntülenecektir. Bu bildirim, kayıt işleminin sistem tarafından kesintiye uğramamasını sağlar ve aktif bir kayıt sırasında devre dışı bırakılamaz.

- Bildirim alanı, ekranın üstünden aşağı kaydırıldığında açılır ve yukarı kaydırıldığında kapanır. Bu mesajlar, özellikle navigasyon sırasında otomatik kayıt etkinleştirildiğinde, seyahat kaydını başlatma/durdurma gibi eylemleri size bildirir.
- Uygulama ön planda, arka planda çalışıyor veya kapalı olsa bile bildirimler görünür kalır. Artık gerekli değilse eski bildirimi manuel olarak temizleyebilirsiniz, ancak bu devam eden kaydı durdurmaz.

**Önemli not**.

Bu davranış, seyahat kaydı gibi herhangi bir ön plan hizmeti için Android tarafından sizde görünür kalması için gereklidir.

- Bildirim kaldırılırsa, Android kaydı otomatik olarak durduracaktır. [Bağımsız günlük kaydını önle](#recording-settings) ayarını kullanabilirsiniz.
- OsmAnd'daki **Bildirim** ayarı, kayıt etkin olmadığında bildirim çubuğunun kaydı başlatmak için bir kısayol gösterip göstermediğini etkiler. Aktif bir kayıt sırasında bildirimin görünürlüğünü **kontrol etmez**.

**Ek Android seçenekleri**.

![Seyahat Kaydı Bildirimi](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- ***Android ayarları → Bildirimler ve durum çubuğu → Kilit ekranı bildirimleri*** bölümünde, bildirimlerin kilit ekranında görünmesini önlemek ve kazara ekran aktivasyonunu önlemek için OsmAnd'ı uygulama listesinden kaldırabilirsiniz. Bu, iz kaydını etkilemez. Bildirimler yine normal bildirim alanında görünecektir.
- **OsmAnd** ayrıca ***Gizlilik → Özel İzinler → Ekranı aç*** altında da görünebilir. Bir bildirim göründüğünde ekranın açılmasını önlemek istiyorsanız, OsmAnd'ı bu listeden kaldırmayı deneyin.

<!--
- OsmAnd, **Gizlilik** *→* **Özel İzinler** → **Alarmlar ve hatırlatıcılar** altında listelenmiyor.
-->

**Rozet bildirimi**.

![Seyahat Kaydı Bildirimi](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

İz kaydı etkin olduğunda uygulama simgesi rozeti OsmAnd simgesinin yanında görünür.

- İz kaydı tamamlandığında bu simge kaybolur. Bir kaydın etkin olup olmadığını kontrol etmek için *Menü → Yerlerim → İzler sekmesi*'ne gidebilir veya kaydı yönetmek için widget'a dokunabilirsiniz.
- Devam eden bir kayıt yoksa ve rozet hala görüntüleniyorsa, bu, OsmAnd'dan gelen bir mesajın cihaz bildirim panelinde kalmış olabileceği anlamına gelebilir.
- Android ayarlarında rozetleri devre dışı bırakmak için cihaz *Ayarları → Uygulamalar → OsmAnd → Bildirimler*'e gidin ve bu uygulama için rozet görüntüleme seçeneğini devre dışı bırakın.


## Widget'lar {#widgets}

Widget'lar, *Mesafe*, *Süre*, *Yokuş Yukarı* ve *Yokuş Aşağı* gibi iz kaydıyla ilgili temel bilgileri doğrudan ekranda görüntülemenizi sağlar.

*Seyahat kaydı widget'larını* kullanmaya başlamak için aşağıdaki ayarları yapmanız gerekir:

1. [Eklentiyi etkinleştirin](../start-with/first-steps.md#how-to-configure-plugins).
2. Gerekli [profil](../personal/profiles.md) için seyahat kaydı ayarlarını yapılandırın.
3. Gerekli **Seyahat kaydı widget'larını** ekrana ekleyin. Bu yapılandırmanın **her profile özel** olduğunu unutmayın.


### Kayıt Widget'ı Ekle {#add-recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Bir panel seç → <Translate android="true" ids="map_widget_monitoring"/>*

![Android'de Mesafe/Başlat-Durdur widget'ı ekleme](@site/static/img/plugins/trip-recording/add_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Bir panel seç → <Translate android="true" ids="map_widget_monitoring"/>*

![iOS'ta Mesafe/Başlat-Durdur widget'ı ekleme](@site/static/img/plugins/trip-recording/add_recording_widgets_ios.png)

</TabItem>

</Tabs>

[Seyahat Kaydı widget'ı](../widgets/info-widgets.md#trip-recording-widgets), kayıt durumunuzu izlemenin ve kayıt ayarlarına ve ayrıntılarına hızlıca erişmenin kolay bir yolunu sunar. Bu widget, Seyahat Kaydı eklentisi etkinleştirildiğinde ekranınıza otomatik olarak eklenir.

Arayüzünüzü özelleştirmek için, Seyahat Kaydı widget'ını ve [diğer widget'ları](../plugins/trip-recording#duration-uphill-downhill) Ekranı Yapılandır menüsü aracılığıyla ekleyebilir veya kaldırabilirsiniz.


### Mesafe (Başlat-Durdur) {#distance-start-stop}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Seyahat kaydı widget'ı](@site/static/img/plugins/trip-recording/trip_rec_widgets_andr.png)
![Android'de kaydı bitir](@site/static/img/plugins/trip-recording/distance_start_rec_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seyahat kaydı widget'ı](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Seyahat kaydı widget'ı](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png)

</TabItem>

</Tabs>

Widget'lar haritada görüntülendiğinde, herhangi birine dokunmak ek iz ayrıntılarını gösterir ve kayıtla etkileşime olanak tanır.
*Mesafe* widget'ı, mevcut kaydedilen seyahatinizin toplam mesafesini gösterir ve kayıtlarınızı yönetmek için ana arayüz görevi görür. Üzerine dokunmak, iziniz hakkında ayrıntılı bilgileri başlatabileceğiniz, durdurabileceğiniz ve görüntüleyebileceğiniz [Seyahat Kaydı iletişim kutusunu](#start-a-dialog) ortaya çıkarır.

- Widget, *Seyahat kaydı eklentisi* etkinleştirildiğinde otomatik olarak eklenir, ancak [Ekranı Yapılandır menüsü](../widgets/configure-screen.md#configure-screen-menu) aracılığıyla gizlenebilir.
- Seyahat Kaydı eklenti ayarlarında *Başlangıç iletişim kutusunu göster* seçeneği devre dışı bırakılırsa, etkin widget'a dokunmak yine de *Seyahat Kaydı iletişim kutusunu* açacak ve daha fazla seçeneğe ve bilgiye erişmenizi sağlayacaktır.

*Mesafe/Başlat-Durdur* widget'ına ek olarak, **Seyahat Kaydı eklentisi** üç başka widget içerir: *Süre*, *Yokuş Yukarı* ve *Yokuş Aşağı*. Bunlar, seyahatiniz hakkında ek bilgi sağlayarak gerçek zamanlı ilerlemeyi izlemenize yardımcı olur.

| |
|-----------|
| **Mesafe/Başlat-Durdur**. Bu widget, devam eden seyahat kaydınızın mesafesini gösterir. Seyahat Kaydı eklentisi etkinleştirildiğinde otomatik olarak eklenir, ancak Ekranı Yapılandır menüsü aracılığıyla gizleyebilirsiniz. Widget, seyahat kaydınızın mevcut durumunu gösteren üç farklı duruma sahiptir: *Kayıt*, *Duraklatıldı* ve *Etkin Değil*. |
| ![Seyahat kaydı (KAYIT) widget'ı](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Etkin olmayan bir widget'a dokunulduğunda [Seyahat Kaydı iletişim kutusunu](#start-a-dialog) açmak için, Seyahat Kaydı eklenti ayarlarında *Başlangıç İletişim Kutusunu Göster* seçeneğini etkinleştirin. Seçenek devre dışı bırakılırsa, kayıt iletişim kutusunu açmadan widget'a dokunduktan hemen sonra başlayacaktır.|


### Süre, Yokuş Yukarı, Yokuş Aşağı {#duration-uphill-downhill}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">

</TabItem>

</Tabs>

| |
|------------|
|**Süre**. Mevcut seyahat kaydının toplam süresini saat ve dakika cinsinden gösterir. |
|![widget'lar](@site/static/img/widgets/tr_rec_wid_dur.png)|
|**Yokuş Yukarı**. Mevcut seyahat kaydı için kümülatif yükseklik kazanımını gösterir. |
|![widget'lar](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Yokuş Aşağı**. Mevcut seyahat kaydı sırasında biriken toplam inişi gösterir. |
|![widget'lar](@site/static/img/widgets/tr_rec_wid_dow.png)|

Birden fazla widget seçtiyseniz — *Süre*, *Yokuş Yukarı* veya *Yokuş Aşağı* — her biri için aynı iletişim kutusuna geçiş yapmanıza veya kapatmanıza gerek kalmadan erişebilirsiniz. Bu birleşik arayüz, ilgili tüm bilgileri sorunsuz bir şekilde görüntülemeyi ve yönetmeyi kolaylaştırır.


## İlgili Makaleler {#related-articles}

- [Harita Bağlam menüsü](../map/map-context-menu.md)
- [Haritada izi göster](../map/tracks/index.md)
- [Haritada analiz et](../map/tracks/index.md#analyze-track-on-map)
- [İz Bağlam menüsü](../map/tracks/track-context-menu.md)
- [İz ile navigasyon](../navigation/setup/gpx-navigation.md)

### Yaygın Sorunlar ve Çözümler {#common-issues-and-solutions}

- Seyahat Kaydı başlamıyor.
    - **Seyahat Kaydı eklentisinin** etkinleştirildiğinden emin olun: *Menü → Eklentiler → Seyahat Kaydı → Etkinleştir*.
    - Ayarların doğru olduğunu kontrol edin: *Menü → Profili Yapılandır → Eklenti Ayarları → Seyahat Kaydı*.
    - Kayıt hala başlamıyorsa, uygulamayı yeniden başlatın ve tekrar deneyin.

- Seyahat Kaydı beklenmedik şekilde duruyor.
    - Cihazınızın *pil optimizasyonu ayarlarının* kaydı durdurup durdurmadığını kontrol edin. Bazı cihazlar, güç tasarrufu için arka plan etkinliğini duraklatabilir. *Cihaz Ayarları → Pil*'e gidin.

- Kaydedilen mesafe gerçek mesafeyle eşleşmiyor.
    - GPS'in etkinleştirildiğinden ve aktif bir sinyali olduğundan emin olun.
    - GPS doğruluk eşiğini azaltın: *Menü → Profili Yapılandır → Seyahat Kaydı → Minimum Doğruluk*.

- Kaydedilen İzler Gürültülü. [(kontrol et)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Kaydedilen İzlerde Boşluklar Var. [(kontrol et)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Kat Edilen Mesafe Nasıl İzlenir. [(kontrol et)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Ek sorun giderme için ziyaret edin: [İz Kaydı Sorun Giderme](https://osmand.net/docs/user/troubleshooting/track-recording-issues).

> *Son güncelleme: Ocak 2025*