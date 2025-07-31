---
source-hash: ace21cd815c6ef71c8b9254092d4539b0f04bdd2720ce30360e696944166c5eb
sidebar_position: 15
title:  Yolculuk Kaydı
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

**Yolculuk Kaydı eklentisi**, rotalarınızı, hareketlerinizi ve antrenmanlarınızı kaydetmek için önemli bir araçtır. Bu özellik sadece yolculuklarınızı kaydetmenizi sağlamakla kalmaz, aynı zamanda parkurlarınızı kolayca yeniden kullanmanıza, değiştirmenize, güncellemenize ve başkalarıyla paylaşmanıza olanak tanır.

*Yolculuk Kaydı eklentisi* ile yeni parkurlar oluşturabilir, kaydedilenleri doğrudan harita üzerinde görüntüleyebilir ve mevcut kayıtları yönetebilirsiniz. Hız, yükseklik değişiklikleri, arazi detayları ve harici sensörlerden gelen veriler gibi yolculuklarınıza ilişkin değerli bilgiler sunar. Eklenti rotanızı kaydeder ve yolculuğunuzdan sonra ayrıntılı analiz ve paylaşım yapmanızı sağlar.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de kaydedilen yolculuk](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta kaydedilen yolculuk](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

Parkur kaydına başlamak için aşağıdaki ayarları yapmanız gerekir:

1. **Yolculuk kaydı eklentisini** [etkinleştirin](../plugins/index.md#enable--disable).
2. Gerekli [profil](../personal/profiles.md) için **kayıt ayarlarını** [yapılandırın](#recording-settings).
3. Ekrana **Yolculuk kaydı araç takımları** [ekleyin](#widgets) (isteğe bağlı).
4. Haritadaki parkurları [yönetin](../map/tracks/appearance.md) (isteğe bağlı).


## Yeni Parkur Kaydı {#new-track-recording}

![iOS'ta Mesafe/Başlat-Durdur araç takımı](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Android'de Mesafe/Başlat-Durdur araç takımı](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

OsmAnd'daki Yolculuk Kaydı eklentisi ile çeşitli uygun seçenekleri kullanarak parkurunuzu kolayca kaydetmeye başlayabilirsiniz. Yolculuğunuza nasıl başlayabileceğiniz aşağıda açıklanmıştır:

- [Mesafe/Başlat-Durdur araç takımı](#distance-start-stop) — Kaydı etkinleştirmek için kullanın.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) — *Ana <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> sekmesindeki* düğmeye dokunun.

- [Hızlı Eylem](../widgets/quick-action.md#add-and-delete-actions) düğmeleri — Bir yolculuk kaydına başlamak için *Menü → Ekranı Yapılandır → Özel düğmeler → Hızlı eylem → Eylem ekle → Yerlerim* bölümüne gidin ve [Başlat / Duraklat: Yolculuk kaydı](../widgets/quick-action.md#my-places) öğesini seçin.

- *Yalnızca Android*:
    - *Ana <Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>* bölümüne gidin.

    - [Sistem bildirimi](#notifications) — Cihazınızın bildirim alanında kullanın.

    - [Uygulama başlatıcı](#launcher-android) — Kaydı başlatmak için kullanın.

**Öneriler:**

- [Hassas konum](../start-with/first-steps.md#permission-to-access-the-location) — Doğru parkur kaydı için OsmAnd'ın bu izne sahip olduğundan emin olun.

- [Sorun Giderme](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) — **iOS cihazları** bazen arka planda çalışan uygulamaları geçici olarak **askıya alabilir veya durdurabilir**, bu da parkur kaydını kesintiye uğratabilir.

- **Konum Kaynağı** (*Yalnızca Android*) — Doğru kayıtlar için en uygun GPS sağlayıcısını seçmek üzere OsmAnd'daki ayarları yapın. [Daha fazla bilgi için buraya tıklayın](../personal/global-settings.md#location-source).


### Bir Diyalog Başlat {#start-a-dialog}

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

- **Kayıt aralığı** (*Android/iOS*). Bu ayar, uygulamanın parkurunuzdaki yeni noktaları işaretlemek için GPS sensöründen ne sıklıkta veri istediğini kontrol eder. Aralığı ayarlamak, parkur ayrıntısı ile pil kullanımı arasında denge kurmanızı sağlar. Daha kısa bir aralık, daha ayrıntılı parkurlar ancak daha yüksek pil tüketimi ile sonuçlanırken, daha uzun bir aralık pili korur ancak parkur doğruluğunu azaltır.

- **Çizgi simgesi** (*Android*). [Parkur Görünümü seçeneklerine](../map/tracks/appearance.md) erişmek için bu simgeye dokunun. Burada, çizgi rengi, kalınlığı ve stili dahil olmak üzere parkurunuzun haritada nasıl görüneceğini özelleştirebilirsiniz. Bir parkuru özelleştirilmiş bir görünümle kaydettiğinizde, bu ayarlar gelecekteki kayıtlar için korunacak ve parkuru her görüntülediğinizde veya yeniden etkinleştirdiğinizde tutarlılık sağlayacaktır.

- **Ayarlar menüsü** (*Android*). Kayıt tercihlerinizi ince ayar yapmak için bu menüye erişin. Ayrıntılı bir genel bakış için [Yolculuk Kayıt Ayarları](#recording-settings) bölümüne bakın.

- **Seçimimi hatırla** (*iOS*). Etkinleştirildiğinde, parkur kaydı ek ayar veya onay istemeden otomatik olarak başlar. Yeni bir parkur başlatmadan önce kayıt ayarlarını değiştirmek isterseniz, ayarlar menüsünün yeniden görünmesi için Yolculuk Kaydı eklentisini yeniden başlatın.


### Başlatıcı (Android) {#launcher-android}

![Simgenin bağlam menüsü](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Kaydı Başlat simgesi](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

Yeni bir parkur kaydını doğrudan Android cihazınızın ekranından OsmAnd uygulama simgesinin bağlam menüsünü kullanarak hızlıca başlatabilirsiniz.

- **Uzun dokunuşla** OsmAnd uygulama simgesine dokunarak bağlam menüsünü açın, burada **Kaydı Başlat** seçeneğini bulabilirsiniz.

- **Kaydı Başlat** seçeneğine dokunarak OsmAnd uygulamasını [parkur kayıt ayarları](#overview-screen) ekranda görüntülenmiş şekilde başlatın.

- Uygulama simgesi bağlam menüsündeki **Kaydı Başlat** seçeneğine **uzun dokunuşla** daha hızlı erişim için bir kısayol ekleyin.

Parkur kaydı etkin olduğunda, OsmAnd uygulama simgesinin köşesinde bir bildirim rozeti görünecek ve kaydın devam ettiğini belirtecektir. Bu bildirimi yönetme hakkında daha fazla bilgi için [Bildirim](#notifications) bölümüne bakın.


## Mevcut Parkur Kaydı {#current-track-recording}

*Durdur / Kaydet / Duraklat* için:

- Kaydı **Durdurmak** için [Mesafe/Başlat-Durdur araç takımı](#distance-start-stop) iletişim kutusundaki ilgili düğmeye dokunun.

- (*Yalnızca Android*) Kaydı **Durdurmak** için *Yolculuk kaydı* Ana Menü öğesine dokunun.

- Bir kayıt parkurunu **Durdurmak** veya **Kaydetmek** için *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/> sekmesine*](../personal/myplaces.md#tracks) gidin ve *Şu anda kaydedilen parkur* alanındaki uygun düğmeye dokunun.

- Kaydı **Kaydetmek, Duraklatmak, Yeni bir bölüm Başlatmak** veya **Bitirmek** için [Hızlı Eylem](../widgets/quick-action.md#add-and-delete-actions) düğmelerini kullanın. *Menü → Ekranı Yapılandır → Özel düğmeler → Hızlı eylem → Eylem ekle → [Yerlerim](../widgets/quick-action.md#my-places)* bölümüne gidin ve bir veya daha fazla hızlı eylem düğmesi ekleyin.

- (*Yalnızca Android*) Bir kayıt parkurunu **Duraklatmak** veya **Kaydetmek** için cihazınızın bildirim alanındaki sistem [bildirimini](#notifications) kullanın.<br/><br/> ![durdur-kaydet-duraklat](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### Genel Bakış Ekranı {#overview-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![genel bakış](@site/static/img/plugins/trip-recording/overview_screen_graphs_andr.png) ![genel bakış](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta kaydı bitir](@site/static/img/plugins/trip-recording/start_rec_ios_3.png) ![iOS'ta kaydı bitir](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_ios.png)

</TabItem>

</Tabs>

OsmAnd'da, **Android** ve **iOS** sürümleri parkur kayıt arayüzünü biraz farklı şekilde ele alır. Android'de, *Parkur kaydı* bağlamı için özel bir menü bulurken, iOS'ta bu, *Şu anda kaydedilen parkur* bağlam menüsüne basitleştirilmiştir.

Bir parkuru kaydederken, yolculuğunuz hakkında gerçek zamanlı görsel veriler sağlayan dinamik grafikler oluşturulur. Bu grafikler, yakınlaştırma seviyenize bağlı olarak tüm rota veya yalnızca seçilen bir bölüm için bilgileri yansıtabilir.
Bunlarda bulabilecekleriniz şunlardır:

- **Veri değerleri**. Grafiğin sağ tarafında, parkurun görünür bölümü için ***en yüksek***, ***en düşük*** ve ***ortalama*** değerler bulunur.

- **Anahtar bilgiler için grafik**:
    - ***Android***. Grafikteki ***Y ekseni*** için, *Rakım*, *Eğim*, *Hız* ve [harici sensör bilgileri](../plugins/external-sensors.md#trip-recording) gibi tüm mevcut verilerden *ikiye kadar parametre* seçebilirsiniz. ***X ekseni*** için ise *Mesafe*, *Süre* veya *Günün Saati* görüntülemeyi seçin.
    - ***iOS***. Parametreler, Y ekseni için uygun değerler ve X ekseni için *Mesafe* ile *Genel Bakış*, *Rakım* ve *Hız* sekmelerinde düzenlenmiştir.

- **İstatistik**. Android için, grafik ayarlarından bağımsız olarak sabit bir istatistik veri kümesi görüntüler: *Mesafe*, *Süre*, *Yokuş Yukarı*, *Yokuş Aşağı*, *Ortalama hız*. iOS için, her sekme (Genel Bakış, Rakım ve Hız) farklı bir veri kümesine sahiptir.

Daha ayrıntılı bir görünüm için grafiği **ölçeklendirebilirsiniz**:

- Belirli aralıklara odaklanmak için [iki parmak hareketini](../map/interact-with-map.md#gestures) kullanarak yakınlaştırın veya uzaklaştırın.
- Grafikteki herhangi bir noktaya dokunarak o konum için tam değerleri gösteren bir işaretçi görüntüleyin.

| |
| ------------- |
|**Genel Bakış** sekmesi iOS (Android için, Y ekseni parametreleri *Rakım*, *Hız* ve X ekseni parametresi *Mesafe*'dir). Bu sekme, parkurun uzunluğu boyunca hız ve rakım değişikliklerini gösteren bir grafik ve anahtar parkur ayrıntılarını görüntüler. iOS için parkur verileri: *Mesafe*, *Süre*, *Başlangıç Saati* ve *Bitiş Saati*. Bunun Android ve iOS sürümlerinde nasıl görüntülendiğini aşağıda görebilirsiniz. |
| ![veri](@site/static/img/plugins/trip-recording/graph_overview_andr.png) ![veri](@site/static/img/plugins/trip-recording/graph_overview_ios.png) |
| **Rakım** sekmesi iOS (Android için, Y ekseni parametreleri *Rakım*, *Eğim* ve X ekseni parametresi *Mesafe*'dir). Bu sekme, kaydedilen parkurunuzun yükseklik profiline odaklanarak rakım değişiklikleri ve arazi eğimleri hakkında bilgi sağlar. iOS için anahtar metrikler şunları içerir: *Ortalama Rakım*, *Rakım Aralığı*, *Yokuş Yukarı* ve *Yokuş Aşağı*. Aşağıdaki grafikler Android ve iOS arayüzleri arasındaki farklılıkları göstermektedir. |
| ![veri](@site/static/img/plugins/trip-recording/graph_altitude_andr.png) ![veri](@site/static/img/plugins/trip-recording/graph_altitude_ios.png) |
| **Hız** sekmesi iOS (Android için, Y ekseni parametresi *Hız* ve X ekseni parametresi *Mesafe*'dir). Hız sekmesi, parkur boyunca hızla ilgili verileri vurgular. iOS için, *Ortalama Hız*, *Maksimum Hız*, *Hareket Süresi* ve *Düzeltilmiş Mesafe* gibi bilgileri içerir. Aşağıdaki ekran görüntüleri, bu verilerin her iki platformda nasıl görüntülendiğini göstermektedir. |
| ![veri](@site/static/img/plugins/trip-recording/graph_speed_andr.png) ![veri](@site/static/img/plugins/trip-recording/graph_speed_ios.png) |
| **Android** için, mevcut Y ekseni verileri ve X ekseni değerlerinin daha fazla kombinasyonunu oluşturabilirsiniz. |
| ![veri](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Daha fazla ayrıntı için, parkurla ilgili çeşitli seçenekleri (yeniden adlandırma, silme veya ara noktalar ekleme gibi) yönetebileceğiniz [**Parkurlar Bağlam Menüsü**](../map/tracks/track-context-menu.md#options) bölümünü inceleyebilirsiniz. Parkurların haritada nasıl görüneceğini ayarlamak için [**Görünüm**](../map/tracks/appearance.md) bölümünü ziyaret edin. Mevcut parkurunuza belirli ara noktalar eklemek isterseniz, [**Parkur Noktaları**](../map/tracks/track-context-menu.md#points--waypoints) kılavuzuna göz atın. Bir parkuru yeniden adlandırma gibi herhangi bir değişiklik için, Parkurlar Bağlam Menüsü içindeki [**Seçenekler**](https://osmand.net/docs/user/map/track-context-menu#options) sekmesini kullanın.
:::


### Haritada Göster {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![haritada_göster_tr_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Harita parkurlarını yapılandır Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![haritada_göster_tr_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Harita parkurlarını yapılandır iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Haritanızda hangi parkurların görüneceğini iki seçenekten birini kullanarak yönetin. *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate ios="true" ids="shared_string_gpx_tracks"/> sekmesine*](../map/tracks/index.md#my-places) gidin ve görüntülemek veya gizlemek istediğiniz herhangi bir parkur için *Haritada göster* seçeneğini etkinleştirin. Alternatif olarak, tüm parkurlarınızın görünürlüğünü tek bir yerden hızlıca ayarlamak için *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map) bölümüne gidebilirsiniz.


### Kaydedilen GPX Dosyası {#recorded-gpx-file}

OsmAnd, yolculuğunuzu yapılandırılmış bir [GPX dosyasına](https://en.wikipedia.org/wiki/GPS_Exchange_Format) kaydeder ve *dosya > parkur > segmentler > noktalar* hiyerarşisini kullanır. İşte nasıl çalıştığı:

- **Noktalar**, kaydedilen yolunuzun her biri koordinatlar, hız, rakım ve yön gibi özelliklerle işaretlenmiş bireysel anlarını temsil eder.
- Bu noktalar, tüm rotanızı temsil eden **parkurları** oluşturmak için gruplandırılır.
- Kayıtta bir boşluk varsa (örneğin, izleme duraklatıldıysa), aradan sonraki bir sonraki nokta yeni bir **segment** başlatır ve yolculuğunuzdaki ayrımı işaretler.
- Hem **segmentler** hem de **parkurlar** haritada *Başlangıç* ve *Bitiş* simgeleriyle görsel olarak temsil edilir.

```xml
<extensions>
    <gpxtpx:TrackPointExtension>
        <gpxtpx:hr>107</gpxtpx:hr>
        <gpxtpx:atemp>107</gpxtpx:atemp>
        <gpxtpx:cad>107</gpxtpx:cad>
    </gpxtpx:TrackPointExtension>
</extensions>
```

<!-- ![Kaydedilen bir parkurun GPX dosyası](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm4.png)

![Kaydedilen bir parkurun GPX dosyası](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm2.png)  -->


| Parametre | Açıklama |
|---|---|
| `trkpt` | **Parkur Noktası**, etkinliğiniz sırasında tespit edilen belirli bir coğrafi konumu temsil eder. Her parkur noktası, kaydedilen yolunuzun temelini oluşturan enlem ve boylam koordinatlarını içerir. |
| `trkseg` | **Parkur Segmenti**, etkinlikteki duraklamalar veya durmalar gibi kesintilerle ayrılmış ardışık parkur noktalarını bir araya getirir. Bu, tek bir kayıt içindeki sürekli hareketi boşta kalma sürelerinden ayırmaya yardımcı olur. |
| `lat` | **Enlem**, bir noktanın Dünya yüzeyindeki kuzey-güney konumunu gösterir. Tam konumunuzu belirlemek için kullanılan koordinat çiftinin yarısıdır. |
| `lon` | **Boylam**, enlemi tamamlayarak doğu-batı konumunu belirtir ve bir noktanın dünya üzerindeki kesin konumunu doğru bir şekilde belirler. Enlem ve boylam birlikte kesin coğrafi konumunuzu tanımlar. |
| `ele` | **Yükseklik**, bir parkur noktasının deniz seviyesinden yüksekliğini metre cinsinden ölçer. Bu, yürüyüşler veya bisiklet gezintileri gibi etkinlikleriniz sırasında rakım değişikliklerini izlemek için faydalı olabilir. |
| `time` | **Zaman Damgası**, bir parkur noktasının kaydedildiği kesin tarih ve saati kaydeder. Bu, etkinliğinizin süresini ve zamanlamasını hassasiyetle izlemenizi sağlar. |
| `hdop` | **Yatay Hassasiyet Azalması (HDOP)**, uydu konumlarından kaynaklanan konumdaki potansiyel hatayı yansıtan bir GPS doğruluk ölçüsüdür. Standart HDOP'tan farklı olarak, OsmAnd GPX parkurları bu değeri metre cinsinden yatay doğruluğu temsil etmek için kullanır. Bu uygulamanın tipik HDOP standartlarından farklı olduğunu lütfen unutmayın. [Daha fazla bilgi edinin](https://github.com/osmandapp/Osmand/issues/3445). |
| `speed` | **Hız**, hareket hızınızı saniyede metre cinsinden kaydeder. Etkinliğinizin çeşitli bölümlerindeki hızınız hakkında bilgi sağlar. |
| `heading` | **Yön**, aracınızın veya cihazınızın önünün işaret ettiği yönü derece cinsinden gösterir. Bu, rüzgar, akıntılar veya yol koşulları gibi dış etkenlerden dolayı gerçek hareket yolundan farklı olabilir. [Yön hakkında daha fazla bilgi](https://en.wikipedia.org/wiki/Heading_(navigation)). |
| `speed_sensor` | [Harici sensörlerden](../plugins/external-sensors.md) gelen **Hız**, bağlı sensörlerden veri yakalar ve özellikle bisiklet sürerken daha hassas hız bilgisi sağlar. Daha fazla ayrıntı için [GPX dosya formatı belgelerine](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data) bakın. |
| `cadence` | **Kadans**, [harici sensörler](../plugins/external-sensors.md) kullanılarak kaydedilen dakikadaki pedal devri sayısını ölçer. Bu, pedal çevirme verimliliğini izlemeyi ve optimize etmeyi amaçlayan bisikletçiler için özellikle kullanışlıdır. [Daha fazla bilgi edinin](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `power` | **Bisiklet Gücü**, pedal çevirirken üretilen gücü [harici sensörlerden](../plugins/external-sensors.md) yakalar. Performanslarını ölçmek isteyen ciddi bisikletçiler için önemli bir metriktir. [Daha fazla bilgi edinin](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `atemp` | **Hava Sıcaklığı**, etkinliğiniz sırasında ortam hava sıcaklığını [harici sensörler](../plugins/external-sensors.md) kullanılarak kaydeder. Su sıcaklığının desteklenmediğini unutmayın. [Ayrıntılar burada](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `hr` | **Kalp Atış Hızı**, bağlı [sensörlerden](../plugins/external-sensors.md) gelen verileri kullanarak dakikadaki kalp atışlarınızı izler. Bu bilgi, antrenmanlar sırasında kardiyovasküler performansınızı izlemek için hayati olabilir. [Daha fazla bilgi edinin](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |


## Kayıt Ayarları {#recording-settings}

Yolculuklarınızı izlemeye başlamadan önce, en iyi performans için **Yolculuk Kaydı eklentisini** doğru şekilde yapılandırmanız gerekir.

- **Profile özgü ayarlar**. Uygulamadaki her profilin kendine özgü Yolculuk Kaydı ayarları olabilir. Bu, sürüş, bisiklet veya hatta farklı yapılandırmalar gerektirebilecek İskandinav yürüyüşü gibi etkinliğinize göre kayıt davranışını hassas bir şekilde özelleştirmenizi sağlar.

- **Kayıt parametrelerini özelleştirin**. Kayıt ayarları, hareket şeklinize bağlı olarak değişebilir. Örneğin, uzun mesafeler sürmek daha düşük bir kayıt sıklığı gerektirebilirken, yürüyüş veya koşu daha sık güncellemeden faydalanabilir.

- **Hassas konum verileri**. Kayıtlarınızın sorunsuz ve gelecekteki kullanım için kullanılabilir olmasını sağlamak için konum noktalarını yakalama şeklinizi özelleştirebilirsiniz. Bu, kayıt sıklığını, verilerinizin formatını (birim mesafe başına nokta sayısı gibi) veya kaydedilen noktalar arasındaki boşluğu ayarlamayı içerebilir.

- **Genel ayarlar**. Yolculuk Kaydı ayarları, uygulamanın genel [ayarlarında](../personal/global-settings.md) yönetebileceğiniz profile göre yapılandırılır. Yolculuk Kaydı eklentisini özelleştirmeden önce, [profiller](../personal/profiles.md) bölümünden yapılandırmak istediğiniz profili seçin. Oradan, Yolculuk Kaydı seçeneklerine erişmek için profilin ayarlarına gidin.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de Yolculuk kaydını yapılandırma](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png) ![Android'de Yolculuk kaydını yapılandırma](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta Yolculuk kaydını yapılandırma](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png) ![iOS'ta Yolculuk kaydını yapılandırma](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Parametre | Açıklama |
|---|---|
| **Pil optimizasyon diyaloğu** (*Android*) | [Android pil optimizasyon ayarlarına](#battery-optimization) erişir. Tekrar sorulmak istemiyorsanız *Bir daha sorma* seçeneğine dokunun. |
| **Başlangıç diyaloğunu göster** (*Android*) | Kaydı başlatmadan önce ayarları yapılandırabileceğiniz bir diyalog penceresini etkinleştirir. Devre dışı bırakılırsa, kayıt otomatik olarak başlar. |
| **Navigasyon sırasında parkuru otomatik kaydet** | Navigasyon sırasında parkuru otomatik olarak kaydeder ve *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>* sekmesine kaydeder.<br />*Not*: Parkur kaydı pil tüketir ve ekran kapalı olsa bile arka planda çalışmaya devam eder. |
| **Genel kayıt aralığı** | Konum noktalarının ne sıklıkta kaydedileceğini tanımlar. Varsayılan olarak 5 saniyedir. *Yolculuk kaydı araç takımı* ile etkinleştirilir. |
| **Minimum yer değiştirme** | Çok az hareket olduğunda veya hiç hareket olmadığında noktaların kaydedilmesini önlemek için bir filtre. Veri gürültüsünü azaltmaya yardımcı olur.<ul><li>*Yan etkiler*: Dinlenme süreleri kaydedilmeyebilir ve küçük hareketler göz ardı edilebilir. Bu, işlem sonrası verileri azaltabilir ancak GPS hatalarının kaydedilmesini de önleyebilir.</li><li>*Öneri*: Kayıtlarınızda daha az küçük ayrıntı istiyorsanız yer değiştirmeyi 5 metre olarak ayarlayın.</li></ul> |
| **Minimum doğruluk** | Cihaz tarafından bildirilen minimum doğruluk göstergesi eşiğinin altındaki konum noktalarını filtreler.<ul><li>*Yan etkiler*: Zayıf sinyal alanlar (köprülerin altında, ağaçların arasında, binalar arasında veya bazı hava koşullarında) noktalar eksik olabilir.</li><li>*Öneri*: Emin değilseniz, önemli verileri kaybetmemek için bu filtreyi devre dışı bırakmak daha iyi olabilir.</li></ul><details><summary>*Açıklama*</summary>Kayıttan hemen önce GPS kapatıldıysa, ilk ölçülen noktanın doğruluğu azalabilir, bu nedenle noktayı kaydetmeden önce bir süre beklemek veya ardışık 3 noktanın en iyisini kaydetmek daha iyidir.</details> |
| **Minimum hız** | Belirli bir hızın altında kaydedilen noktaları göz ardı etmek için bir eşik belirler.<ul><li>*Yan etkiler*: Hızın belirtilen eşiğin altına düştüğü bölümler kaydedilmeyecektir.</li><li>*Öneri*: Bunun yerine *Minimum yer değiştirme* filtresini kullanın, çünkü bu, önemli verileri kaybetmeden daha iyi sonuçlar verebilir.</li></ul><details><summary>*Açıklama*</summary>Önce kayıt minimum yer değiştirme filtresi (B) aracılığıyla hareket algılamayı kullanmayı deneyin, daha iyi sonuçlar verebilir ve daha az veri kaybedersiniz. Düşük hızlarda parkurlarınız gürültülü kalırsa, burada sıfır olmayan değerleri deneyin. Bazı ölçümlerin hiç hız değeri bildirmeyebileceğini (bazı ağ tabanlı yöntemler) unutmayın, bu durumda hiçbir şey kaydetmezsiniz.<br/><br/>Hız > 0 kontrolü: Çoğu GPS yonga seti, algoritma hareket halinde olduğunuzu belirlerse bir hız değeri bildirir, aksi takdirde bildirmez. Bu nedenle bu filtrede > 0 ayarını kullanmak, GPS yonga setinin hareket algılamasını bir anlamda kullanır. Ancak kayıt sırasında burada filtrelenmese bile, GPX analizimizde Düzeltilmiş Mesafe'yi, yani o alanda görüntülenen değeri, hareket halindeyken kaydedilen mesafeyi belirlemek için bu özelliği hala kullanıyoruz.</details> |
| **Boşluktan sonra kayıtları otomatik böl** | Kaydedilen noktalar arasındaki zaman boşluklarına göre parkurları otomatik olarak böler. <ul><li>6 dakikalık bir boşluktan sonra yeni bir segment başlar.</li><li>2 saatlik bir boşluktan sonra yeni bir parkur başlar.</li><li>Tarih değiştiğinde yeni bir dosya başlar.</li><li>Boşluklar GPS sinyal kaybı, düşük hız veya yapılandırma ayarlarından kaynaklanabilir.</li></ul><details><summary>*Açıklama*</summary>Hiçbir noktanın kaydedilmediği zaman bir boşluk tespit edilir. Bu, konumun algılanmaması veya algılanmasına rağmen kaydedilmemesi nedeniyle olabilir. Zayıf GPS sinyalleri (kötü hava koşulları nedeniyle) veya hareket hızının yapılandırılan eşiğin altına düşmesi gibi çeşitli faktörler buna neden olabilir. Bu gibi durumlarda, cihaz konumu algılasa bile kaydetmez.<br/><br/>Kaydedilen verilerdeki bu boşluklar, aynı parkur içinde yeni bir segmentin, aynı dosya içinde yeni bir parkurun veya tek bir kayıt içinde yeni bir GPX dosyasının oluşturulmasını tetikleyebilir. Bu, tek bir başlatma/durdurma kayıt oturumu içinde yönetilir.</details> |
| **Bağımsız kaydı önle** (*Android*) | OsmAnd uygulaması kapatıldığında (son uygulamalar aracılığıyla) parkur kaydını duraklatır. Arka plan göstergesi Android bildirim panelinde görüntülenmez. |
| **Yönü dahil et** | GPX dosyasındaki her nokta için yönü (hareket yönü) kaydeder. Yön, cihazın baktığı yöndür ve rüzgar veya kayma gibi dış etkenlerden dolayı hareket yönünden farklı olabilir. |
| **Etkinlik** | Seçenek, bir profil için bir [etkinlik türü](../map/tracks/track-context-menu.md#track-information-activity) önceden seçmenize olanak tanır, bu daha sonra kaydedilen tüm parkurlara otomatik olarak uygulanır. |
| **Harici sensörler** <br/> *Eklentinin etkinleştirilmesi gerekir* | *<Translate android="true" ids="map_widget_ant_heart_rate"/>* veya *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* gibi [harici sensörlerden](../plugins/external-sensors.md#trip-recording) gelen veriler GPX dosyasına kaydedilir. *Mesafe* verileri Android veya iOS'ta kaydedilmez. Yalnızca [Harici Sensörler eklentisi](../plugins/external-sensors.md) etkinleştirildiğinde görüntülenir. |
| **Araç Metrikleri** (*Android*) <br/> *Eklentinin etkinleştirilmesi gerekir* | [OBD-II tarayıcısından](../plugins/vehicle-metrics.md#trip-recording) gelen veriler GPX dosyasına kaydedilir. Yalnızca [Araç Metrikleri eklentisi](../plugins/vehicle-metrics.md) etkinleştirildiğinde görüntülenir.<br />*Not*: GPX dosyasına hangi metriklerin kaydedileceğini listeden ekleyebilirsiniz: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **Parkur depolama klasörü** (*Android*) | Kaydedilen parkurların *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* sekmesinde nerede depolanacağını tanımlar. Seçenekler arasında tüm parkurları Rec klasöründe depolamak veya bunları Rec/yyyyy-mm gibi aya göre düzenlemek bulunur. |
| **Bildirim** | Yolculukları kaydetmeye başlamanızı sağlayan cihazın bildirim alanında bir [yolculuk kaydı](#notifications) sistem bildiriminin görüntülenmesini kontrol eder. |
| **Çevrimiçi izleme** (*Android*) | Kaydedilen noktaları belirtilen bir URL'ye göndererek konumunuzun gerçek zamanlı olarak izlenmesine olanak tanır. İzleme aralığı, noktaların ne sıklıkta gönderileceğini belirler ve zaman arabelleği, İnternet bağlantısı olmadığında noktaları depolar.<details><summary>*Açıklama*</summary>Bu seçenek etkinleştirilirse ve parkur kaydı devam ediyorsa, Mesafe/Başlat-Durdur (REC) araç takımı **kırmızı** yerine **yeşil** renge döner ve her kaydedilen noktanın belirtilen bir URL'ye iletildiğini gösterir. **Web adresi** alanı, aşağıdaki parametre formatını kullanarak URL'yi girmenizi sağlar:<ul><li>`lat={0}`: Enlem</li><li>`lon={1}`: Boylam</li><li>`timestamp={2}`: Zaman damgası (Unix zamanı)</li><li>`hdop={3}`: Yatay hassasiyet azalması</li><li>`altitude={4}`: Rakım</li><li>`speed={5}`: Hız</li><li>`bearing={6}`: Yön (hareket yönü)</li><li>`eta={7}`: Tahmini varış zamanı (Unix zamanı)</li><li>`etfa={8}`: İlk ara noktaya veya bitiş noktasına tahmini süre (Unix zamanı)</li><li>`eda={9}`: Varışa veya bir işaretleyiciye tahmini mesafe (metre cinsinden)</li><li>`edfa={10}`: İlk ara noktaya veya bitiş noktasına tahmini mesafe (metre cinsinden)</li></ul>**İzleme Aralığı**nı, konum noktalarının ne sıklıkta gönderileceğini belirtmek için 0 saniyeden 5 dakikaya kadar seçeneklerle ayarlayabilirsiniz. Ayrıca, **Zaman Arabelleği** parametresi, İnternet bağlantısı olmadığında konum noktalarının ne kadar süreyle depolanacağını belirler ve bağlantı geri geldiğinde verilerin kaydedilmesini ve iletilmesini sağlar.</details> |
| **Parkurlar** | Parkurların kaydedildiği klasöre hızlı bir referans *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* sekmesi. |
| **Eklenti ayarlarını varsayılana sıfırla** | Geçerli profil için tüm yolculuk kaydı ayarlarını varsayılanlarına sıfırlar. |
| **Başka bir profilden kopyala** (*Android*) | Yolculuk kaydı ayarlarını bir profilden diğerine kopyalar. |


### Pil Optimizasyonu {#battery-optimization}

<InfoAndroidOnly />

![Haritada parkur iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png) ![Haritada parkur iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)

Bu özellik, OsmAnd için pil optimizasyon ayarlarını yönetmenizi sağlayarak, uygulama navigasyon veya parkur kaydı sırasında arka planda çalışırken bile konumunuza kesintisiz erişim sağlar.

- **Pil optimizasyon ayarları**. OsmAnd için pil tasarrufu tercihlerini değiştirebileceğiniz Android ayarlarına erişir. [Daha fazla ayrıntı burada](../troubleshooting/general.md#optimizing-battery-consumption).
- **Bir daha sorma**. İletişim kutusunu kalıcı olarak kapatır, böylece bir daha görünmez.
- **Kapat**. İletişim kutusunu geçici olarak kapatır, pil optimizasyonunun tekrar dikkat gerektirdiği bir sonraki sefer tekrar görünecektir.


### Bildirimler {#notifications}

![Yolculuk Kaydı Bildirimi](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)

Eklenti ayarlarında [Bildirim](#recording-settings) etkinleştirilirse, yolculuk kaydı bildirimleri, kayıt etkin olduğunda sistem bildirim alanında her zaman görüntülenecektir. Bu bildirim, kayıt işleminin sistem tarafından kesintiye uğramamasını sağlar ve etkin bir kayıt sırasında devre dışı bırakılamaz.

- Bildirim alanı, ekranın üstünden aşağı kaydırıldığında açılır ve yukarı kaydırıldığında kapanır. Bu mesajlar, özellikle navigasyon sırasında otomatik kayıt etkinleştirildiğinde, yolculuk kaydını başlatma/durdurma gibi eylemleri size bildirir.
- Bildirimler, uygulama ön planda, arka planda veya kapalı olsa bile görünür kalır. Artık ihtiyaç duyulmayan eski bildirimi manuel olarak temizleyebilirsiniz, ancak bu, devam eden kaydı durdurmaz.

**Önemli not**.

Bu davranış, Android tarafından, yolculuk kaydı gibi herhangi bir ön plan hizmetinin size görünür kalması için gereklidir.

- Bildirim kaldırılırsa, Android kaydı otomatik olarak durduracaktır. [Bağımsız kaydı önle](#recording-settings) ayarını kullanabilirsiniz.
- OsmAnd'daki **Bildirim** ayarı, kayıt etkin olmadığında bildirim çubuğunun bir kaydı başlatmak için bir kısayol gösterip göstermediğini etkiler. Etkin bir kayıt sırasında bildirimin görünürlüğünü **kontrol etmez**.

**Ek Android seçenekleri**.

![Yolculuk Kaydı Bildirimi](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- ***Android ayarları → Bildirimler ve durum çubuğu → Kilit ekranı bildirimleri*** bölümünde, bildirimlerin kilit ekranında görünmesini önlemek ve yanlışlıkla ekran aktivasyonunu önlemek için OsmAnd'ı uygulama listesinden kaldırabilirsiniz. Bu, parkur kaydını etkilemez. Bildirimler normal bildirim alanında görünmeye devam edecektir.
- **OsmAnd** ayrıca ***Gizlilik → Özel İzinler → Ekranı aç*** altında da görünebilir. Bir bildirim göründüğünde ekranın açılmasını önlemek istiyorsanız, OsmAnd'ı bu listeden kaldırmayı deneyin.

<!--
- OsmAnd, **Gizlilik** *→* **Özel İzinler** → **Alarmlar ve hatırlatıcılar** altında listelenmez.
-->

**Rozet bildirimi**.

![Yolculuk Kaydı Bildirimi](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

Uygulama simgesi rozeti, parkur kaydı etkin olduğunda OsmAnd simgesinin yanında görünür.

- Bu simge, parkur kaydı tamamlandığında kaybolur. Bir kaydın etkin olup olmadığını kontrol etmek için *Menü → Yerlerim → Parkurlar sekmesi* bölümüne gidebilir veya kaydı yönetmek için araç takımına dokunabilirsiniz.
- Devam eden bir kayıt yoksa ve rozet hala görüntüleniyorsa, bu, OsmAnd'dan gelen bir mesajın cihaz bildirim panelinde kalmış olabileceği anlamına gelebilir.
- Android ayarlarında rozetleri devre dışı bırakmak için cihaz *Ayarları → Uygulamalar → OsmAnd → Bildirimler* bölümüne gidin ve bu uygulama için rozet görüntüleme seçeneğini devre dışı bırakın.


## Araç Takımları {#widgets}

Araç takımları, parkur kaydıyla ilgili temel bilgileri (Mesafe, Süre, Yokuş Yukarı ve Yokuş Aşağı gibi) doğrudan ekranda görüntülemenizi sağlar.

*Yolculuk kaydı araç takımlarını* kullanmaya başlamak için aşağıdaki tüm ayarları yapmanız gerekir:

1. [Eklentiyi etkinleştirin](../start-with/first-steps.md#how-to-configure-plugins).
2. Gerekli [profil](../personal/profiles.md) için yolculuk kaydı ayarlarını yapılandırın.
3. Gerekli **Yolculuk kaydı araç takımlarını** ekrana ekleyin. Bu yapılandırmanın **her profile özgü** olduğunu unutmayın.


### Kayıt Araç Takımı Ekle {#add-recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Bir panel seçin → <Translate android="true" ids="map_widget_monitoring"/>*

![Android'de Mesafe/Başlat-Durdur araç takımı ekleme](@site/static/img/plugins/trip-recording/add_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Bir panel seçin → <Translate android="true" ids="map_widget_monitoring"/>*

![iOS'ta Mesafe/Başlat-Durdur araç takımı ekleme](@site/static/img/plugins/trip-recording/add_recording_widgets_ios.png)

</TabItem>

</Tabs>

[Yolculuk Kaydı araç takımı](../widgets/info-widgets.md#trip-recording-widgets), kayıt durumunuzu izlemek ve kayıt ayarlarına ve ayrıntılarına hızlıca erişmek için kolay bir yol sağlar. Bu araç takımı, Yolculuk Kaydı eklentisi etkinleştirildiğinde ekranınıza otomatik olarak eklenir.

Arayüzünüzü özelleştirmek için, Yolculuk Kaydı araç takımını ve [diğer araç takımlarını](../plugins/trip-recording#duration-uphill-downhill) Ekranı Yapılandır menüsü aracılığıyla ekleyebilir veya kaldırabilirsiniz.


### Mesafe (Başlat-Durdur) {#distance-start-stop}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yolculuk kaydı araç takımı](@site/static/img/plugins/trip-recording/trip_rec_widgets_andr.png)
![Android'de kaydı bitir](@site/static/img/plugins/trip-recording/distance_start_rec_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yolculuk kaydı araç takımı](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Yolculuk kaydı araç takımı](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png)

</TabItem>

</Tabs>

Araç takımları haritada görüntülendiğinde, herhangi birine dokunmak ek parkur ayrıntılarını gösterir ve kayıtla etkileşime izin verir.
*Mesafe* araç takımı, mevcut kaydedilen yolculuğunuzun toplam mesafesini görüntüler ve kayıtlarınızı yönetmek için ana arayüz görevi görür. Üzerine dokunmak, [Yolculuk Kaydı iletişim kutusunu](#start-a-dialog) ortaya çıkarır, burada parkurunuz hakkında ayrıntılı bilgileri başlatabilir, durdurabilir ve görüntüleyebilirsiniz.

- Araç takımı, *Yolculuk kaydı eklentisi* etkinleştirildiğinde otomatik olarak eklenir, ancak [Ekranı Yapılandır menüsü](../widgets/configure-screen.md#configure-screen-menu) aracılığıyla gizlenebilir.
- *Başlangıç diyaloğunu göster* seçeneği Yolculuk Kaydı eklenti ayarlarında devre dışı bırakılırsa, etkin araç takımına dokunmak yine de *Yolculuk Kaydı iletişim kutusunu* açacak ve daha fazla seçeneğe ve bilgiye erişmenizi sağlayacaktır.

*Mesafe/Başlat-Durdur* araç takımına ek olarak, **Yolculuk Kaydı eklentisi** üç başka araç takımı içerir: *Süre*, *Yokuş Yukarı* ve *Yokuş Aşağı*. Bunlar, yolculuğunuz hakkında ek bilgi sağlayarak gerçek zamanlı ilerlemeyi izlemenize yardımcı olur.

| |
|-----------|
| **Mesafe/Başlat-Durdur**. Bu araç takımı, devam eden yolculuk kaydınızın mesafesini görüntüler. Yolculuk Kaydı eklentisi etkinleştirildiğinde otomatik olarak eklenir, ancak Ekranı Yapılandır menüsü aracılığıyla gizleyebilirsiniz. Araç takımı, yolculuk kaydınızın mevcut durumunu gösteren üç farklı duruma sahiptir: *Kayıt*, *Duraklatıldı* ve *Etkin Değil*. |
| ![Yolculuk kaydı (REC) araç takımı](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Etkin olmayan bir araç takımına dokunulduğunda [Yolculuk Kaydı iletişim kutusunu](#start-a-dialog) açmak için, Yolculuk Kaydı eklenti ayarlarında *Başlangıç Diyaloğunu Göster* seçeneğini etkinleştirin. Seçenek devre dışı bırakılırsa, iletişim kutusu açılmadan araç takımına dokunulduktan hemen sonra kayıt başlayacaktır. |


### Süre, Yokuş Yukarı, Yokuş Aşağı {#duration-uphill-downhill}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">

</TabItem>

</Tabs>

| |
|------------|
|**Süre**. Mevcut yolculuk kaydının toplam süresini saat ve dakika cinsinden görüntüler. |
|![araç takımları](@site/static/img/widgets/tr_rec_wid_dur.png)|
|**Yokuş Yukarı**. Mevcut yolculuk kaydı için kümülatif yükseklik kazancını gösterir. |
|![araç takımları](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Yokuş Aşağı**. Mevcut yolculuk kaydı sırasında biriken toplam inişi gösterir. |
|![araç takımları](@site/static/img/widgets/tr_rec_wid_dow.png)|

Birden fazla araç takımı seçtiyseniz — *Süre*, *Yokuş Yukarı* veya *Yokuş Aşağı* — her biri için aynı iletişim kutusuna geçiş yapmanıza veya kapatmanıza gerek kalmadan erişebilirsiniz. Bu birleşik arayüz, ilgili tüm bilgileri sorunsuz bir şekilde görüntülemeyi ve yönetmeyi kolaylaştırır.


## İlgili Makaleler {#related-articles}

- [Harita Bağlam menüsü](../map/map-context-menu.md)
- [Haritada parkuru göster](../map/tracks/index.md)
- [Haritada analiz et](../map/tracks/index.md#analyze-track-on-map)
- [Parkur Bağlam menüsü](../map/tracks/track-context-menu.md)
- [Parkura göre navigasyon](../navigation/setup/gpx-navigation.md)

### Yaygın Sorunlar ve Çözümler {#common-issues-and-solutions}

- Yolculuk Kaydı başlamıyor.
    - **Yolculuk Kaydı eklentisinin** etkinleştirildiğinden emin olun: *Menü → Eklentiler → Yolculuk Kaydı → Etkinleştir*.
    - Ayarların doğru olduğundan emin olun: *Menü → Profili Yapılandır → Eklenti Ayarları → Yolculuk Kaydı*.
    - Kayıt hala başlamıyorsa, uygulamayı yeniden başlatın ve tekrar deneyin.

- Yolculuk Kaydı beklenmedik şekilde duruyor.
    - Cihazınızın *pil optimizasyon ayarlarının* kaydı durdurup durdurmadığını kontrol edin. Bazı cihazlar güç tasarrufu yapmak için arka plan etkinliğini duraklatabilir. *Cihaz Ayarları → Pil* bölümüne gidin.

- Kaydedilen mesafe gerçek mesafeyle eşleşmiyor.
    - GPS'in etkinleştirildiğini ve aktif bir sinyali olduğunu doğrulayın.
    - GPS doğruluk eşiğini azaltın: *Menü → Profili Yapılandır → Yolculuk Kaydı → Minimum Doğruluk*.

- Kaydedilen Parkurlar Gürültülü. [(kontrol edin)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Kaydedilen Parkurlarda Boşluklar Var. [(kontrol edin)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Kat Edilen Mesafeyi Nasıl Takip Ederim. [(kontrol edin)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Ek sorun giderme için şu adresi ziyaret edin: [Parkur Kaydı Sorun Giderme](https://osmand.net/docs/user/troubleshooting/track-recording-issues).

> *Son güncelleme: Ocak 2025*