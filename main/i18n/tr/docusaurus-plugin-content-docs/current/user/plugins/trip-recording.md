---
source-hash: bbd8a4068925d6a30bba06c2e75c496a884452d7e338c2615117b76552e9cc2c
sidebar_position: 15
title:  Gezi Kaydı
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

**Gezi Kaydı eklentisi**, rotalarınızı, hareketlerinizi ve antrenmanlarınızı kaydetmek için önemli bir araçtır. Bu özellik, yalnızca gezilerinizi kaydetmenize değil, aynı zamanda parkurlarınızı kolayca yeniden kullanmanıza, değiştirmenize, güncellemenize ve başkalarıyla paylaşmanıza da olanak tanır.  

*Gezi Kaydı eklentisi* ile yeni parkurlar oluşturabilir, kaydedilenleri doğrudan haritada görüntüleyebilir ve mevcut kayıtları yönetebilirsiniz. Hız, yükseklik değişiklikleri, arazi detayları ve harici sensörlerden gelen veriler gibi gezileriniz hakkında değerli bilgiler sunar. Eklenti, gezinizden sonra ayrıntılı analiz ve paylaşım için rotanızı kaydeder.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de kaydedilen gezi](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta kaydedilen gezi](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

Parkurları kaydetmeye başlamak için aşağıdaki ayarları yapmanız gerekir:

1. **Gezi kaydı eklentisini** [etkinleştirin](../plugins/index.md#enable--disable).  
2. Gerekli [profil](../personal/profiles.md) için **kayıt ayarlarını** [yapılandırın](#recording-settings).  
3. Ekrana **Gezi kaydı widget'ları** [ekleyin](#widgets) (isteğe bağlı).
4. Haritadaki parkurları [yönetin](../map/tracks/appearance.md) (isteğe bağlı).


## Yeni Parkur Kaydı {#new-track-recording}

![iOS'ta Mesafe/Başlat-Durdur widget'ı](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Android'de Mesafe/Başlat-Durdur widget'ı](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

OsmAnd'daki Gezi Kaydı eklentisi ile çeşitli uygun seçenekleri kullanarak parkurunuzu kolayca kaydetmeye başlayabilirsiniz. Yolculuğunuza nasıl başlayabileceğiniz aşağıda açıklanmıştır:

- [Mesafe/Başlat-Durdur widget'ı](#distance-start-stop) — Kaydı etkinleştirmek için kullanın.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) — *Ana <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> sekmesindeki* düğmeye dokunun.

- [Hızlı Eylem](../widgets/quick-action.md#add-and-delete-actions) düğmeleri — Bir gezi kaydetmeye başlamak için *Menü → Ekranı Yapılandır → Özel düğmeler → Hızlı eylem → Eylem ekle → Yerlerim*'e gidin ve [Başlat / Duraklat: Gezi kaydı](../widgets/quick-action.md#my-places) öğesini seçin.

- *Yalnızca Android*:
    - *Ana <Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*'e gidin.

    - [Sistem bildirimi](#notifications) — Cihazınızın bildirim alanında kullanın .

    - [Uygulama başlatıcısı](#launcher-android) — Kaydı başlatmak için kullanın .  

**Öneriler:**

- [Hassas konum](../start-with/first-steps.md#permission-to-access-the-location) — Doğru parkur kaydı için OsmAnd'ın bu izne sahip olduğundan emin olun.

- [Sorun giderme](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) — **iOS cihazları** bazen arka planda çalışan uygulamaları geçici olarak **askıya alabilir veya durdurabilir**, bu da parkur kaydını kesintiye uğratabilir.

- **Konum Kaynağı** (*Yalnızca Android*) — Doğru kayıtlar için en uygun GPS sağlayıcısını seçmek üzere OsmAnd'daki ayarları yapın. [Daha fazla bilgiyi buradan edinin](../personal/global-settings.md#location-source).


### Bir İletişim Kutusu Başlat {#start-a-dialog}

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

- **Günlük kaydı aralığı** (*Android/iOS*). Bu ayar, uygulamanın GPS sensöründen yeni noktaları parkurunuza işaretlemek için ne sıklıkta veri istediğini kontrol eder. Aralığı ayarlamak, parkur ayrıntısı ile pil kullanımı arasında denge kurmanızı sağlar. Daha kısa bir aralık, daha ayrıntılı parkurlar ancak daha yüksek pil tüketimi ile sonuçlanırken, daha uzun bir aralık pili korur ancak parkur doğruluğunu azaltır.

- **Çizgi simgesi** (*Android*). [Parkur Görünümü seçeneklerine](../map/tracks/appearance.md) erişmek için bu simgeye dokunun. Burada, çizgi rengi, kalınlığı ve stili dahil olmak üzere parkurunuzun haritada nasıl görüneceğini özelleştirebilirsiniz. Bir parkuru özelleştirilmiş bir görünümle kaydettiğinizde, bu ayarlar gelecekteki kayıtlar için korunacak ve parkuru her görüntülediğinizde veya yeniden etkinleştirdiğinizde tutarlılık sağlayacaktır.

- **Ayarlar menüsü** (*Android*). Kayıt tercihlerinizi ince ayar yapmak için bu menüye erişin. Ayrıntılı bir genel bakış için [Gezi Kaydı Ayarları](#recording-settings) bölümüne bakın.

- **Seçimimi hatırla** (*iOS*). Etkinleştirildiğinde, parkur kaydı ek ayarlar veya onay istemeden otomatik olarak başlar. Yeni bir parkur başlatmadan önce kayıt ayarlarını değiştirmek isterseniz, ayarlar menüsünün yeniden görünmesi için Gezi Kaydı eklentisini yeniden başlatın.


### Başlatıcı (Android) {#launcher-android}

![Simge bağlam menüsü](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Kaydı Başlat simgesi](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

Android cihazınızın ekranından OsmAnd uygulama simgesinin bağlam menüsünü kullanarak yeni bir parkur kaydını doğrudan hızlı bir şekilde başlatabilirsiniz.

- Bağlam menüsünü açmak için OsmAnd uygulama simgesine **uzun dokunun**, burada **Kaydı Başlat** seçeneğini bulabilirsiniz.

- OsmAnd uygulamasını [parkur kayıt ayarları](#overview-screen) ekranda görüntülenerek başlatmak için **Kaydı Başlat** seçeneğine dokunun.

- Daha hızlı erişim için bir kısayol eklemek üzere uygulama simgesi bağlam menüsündeki **Kaydı Başlat** seçeneğine **uzun dokunun**.

Parkur kaydı etkin durumdayken, kaydın devam ettiğini gösteren OsmAnd uygulama simgesinin köşesinde bir bildirim rozeti görünecektir. Bu bildirimi yönetme hakkında daha fazla bilgi için [Bildirim](#notifications) bölümüne bakın.


## Mevcut Parkur Kaydı {#current-track-recording}

*Durdur / Kaydet / Duraklat* için:

- Kaydı **Durdurmak** için [Mesafe/Başlat-Durdur widget'ı](#distance-start-stop) iletişim kutusundaki ilgili düğmeye dokunun.

- (*Yalnızca Android*) Kaydı **Durdurmak** için *Gezi kaydı* Ana Menü öğesine dokunun.

- Bir kayıt parkurunu **Durdurmak** veya **Kaydetmek** için *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/> sekmesi*](../personal/myplaces.md#tracks) öğesine gidin ve *Şu anda kaydedilen parkur* alanındaki uygun düğmeye dokunun.

- Yeni bir segmenti **Kaydetmek, Duraklatmak, Başlatmak** veya kaydı **Bitirmek** için [Hızlı Eylem](../widgets/quick-action.md#add-and-delete-actions) düğmelerini kullanın. *Menü → Ekranı Yapılandır → Özel düğmeler → Hızlı eylem → Eylem ekle → [Yerlerim](../widgets/quick-action.md#my-places)* öğesine gidin ve bir veya daha fazla hızlı eylem düğmesi ekleyin.

- (*Yalnızca Android*) Bir kayıt parkurunu **Duraklatmak** veya **Kaydetmek** için cihazınızın bildirim alanındaki sistem [bildirimini](#notifications) kullanın.<br/><br/> ![durdur-kaydet-duraklat](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### Genel Bakış Ekranı {#overview-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![genel bakış](@site/static/img/plugins/trip-recording/overview_screen_graphs_new_andr.png)  ![genel bakış](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta kaydı bitir](@site/static/img/plugins/trip-recording/start_rec_ios_3.png)  ![iOS'ta kaydı bitir](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_new_ios.png)

</TabItem>

</Tabs>

OsmAnd'da, **Android** ve **iOS** sürümleri parkur kayıt arayüzünü biraz farklı şekilde ele alır. Android'de, *Parkur kaydı* bağlamı için özel bir menü bulacaksınız, iOS'ta ise bu, *Şu anda kaydedilen parkur* bağlam menüsüne entegre edilmiştir.

Bir parkuru kaydederken, yolculuğunuz hakkında gerçek zamanlı görsel veriler sağlayan dinamik grafikler oluşturulur. Bu grafikler, yakınlaştırma seviyenize bağlı olarak tüm rota veya yalnızca seçilen bir segment için bilgileri yansıtabilir.  
Bunlarda bulabilecekleriniz:

- **Veri değerleri**. Grafiğin sağ tarafında, parkurun görünür bölümü için ***en yüksek***, ***en düşük*** ve ***ortalama*** değerler bulunur.

- **Anahtar bilgiler için grafik**:
    - ***Android***. Grafikteki ***Y ekseni*** için, *Rakım*, *Eğim*, *Hız* ve [harici sensör bilgileri](../plugins/external-sensors.md#trip-recording) gibi tüm mevcut verilerden *iki parametreye kadar* seçebilirsiniz. ***X ekseni*** için ise *Mesafe*, *Süre* veya *Günün Saati* görüntülemeyi seçin.
    - ***iOS***. Parametreler *Genel Bakış*, *Rakım* ve *Hız* sekmelerinde, Y ekseni için uygun değerler ve X ekseni için *Mesafe* ile düzenlenmiştir.

- **İstatistik**. Android için, grafik ayarlarından bağımsız olarak sabit bir istatistik veri kümesi görüntüler: *Mesafe*, *Süre*, *Yokuş yukarı*, *Yokuş aşağı*, *Ortalama hız*. iOS için, Genel Bakış, Rakım ve Hız sekmelerinin her birinde farklı bir veri kümesi bulunur.

Daha ayrıntılı bir görünüm için grafiği **ölçeklendirebilirsiniz**:

- Belirli aralıklara odaklanmak için [iki parmak hareketi](../map/interact-with-map.md#gestures) ile yakınlaştırın veya uzaklaştırın.
- O konum için tam değerleri gösteren bir işaretleyici görüntülemek için grafikteki herhangi bir noktaya dokunun.

| |
| ------------- |
|**Genel Bakış** sekmesi iOS (Android için, Y ekseni parametreleri *Rakım*, *Hız* ve X ekseni parametresi *Mesafe*'dir). Bu sekme, parkur boyunca hız ve rakım değişikliklerini gösteren bir grafik ve anahtar parkur ayrıntılarını görüntüler. iOS için parkur verileri: *Mesafe*, *Süre*, *Başlangıç Saati* ve *Bitiş Saati*. Bunu Android ve iOS sürümlerinde nasıl görüntülendiğini aşağıda görebilirsiniz. |
| ![veri](@site/static/img/plugins/trip-recording/graph_overview_new_andr.png)  ![veri](@site/static/img/plugins/trip-recording/graph_overview_new_ios.png) |
| **Rakım** sekmesi iOS (Android için, Y ekseni parametreleri *Rakım*, *Eğim* ve X ekseni parametresi *Mesafe*'dir). Bu sekme, kaydedilen parkurunuzun yükseklik profiline odaklanarak rakım değişiklikleri ve arazi eğimleri hakkında bilgi sağlar. iOS için anahtar metrikler şunları içerir: *Ortalama Rakım*, *Rakım Aralığı*, *Yokuş yukarı* ve *Yokuş aşağı*. Aşağıdaki grafikler, Android ve iOS arayüzleri arasındaki farklılıkları göstermektedir. |
| ![veri](@site/static/img/plugins/trip-recording/graph_altitude_new_andr.png)  ![veri](@site/static/img/plugins/trip-recording/graph_altitude_new_ios.png) |
| **Hız** sekmesi iOS (Android için, Y ekseni parametresi *Hız* ve X ekseni parametresi *Mesafe*'dir). Hız sekmesi, parkur boyunca hızla ilgili verileri vurgular. iOS için, *Ortalama Hız*, *Maksimum Hız*, *Hareket Süresi* ve *Düzeltilmiş Mesafe* gibi bilgileri içerir. Aşağıdaki ekran görüntüleri, bu verilerin her iki platformda nasıl görüntülendiğini göstermektedir. |
| ![veri](@site/static/img/plugins/trip-recording/graph_speed_new_andr.png)  ![veri](@site/static/img/plugins/trip-recording/graph_speed_new_ios.png) |
| **Android** için, mevcut Y ekseni verileri ve X ekseni değerlerinin daha fazla kombinasyonunu oluşturabilirsiniz. |
| ![veri](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Daha fazla ayrıntı için, yeniden adlandırma, silme veya ara noktalar ekleme gibi çeşitli parkurla ilgili seçenekleri yönetebileceğiniz [**Parkurlar Bağlam Menüsü**](../map/tracks/track-context-menu.md#options) öğesini keşfedebilirsiniz. Parkurların haritada nasıl görüneceğini ayarlamak için [**Görünüm**](../map/tracks/appearance.md) bölümünü ziyaret edin. Mevcut parkurunuza belirli ara noktalar eklemek isterseniz, [**Parkur Noktaları**](../map/tracks/track-context-menu.md#points--waypoints) kılavuzuna göz atın. Bir parkuru yeniden adlandırma gibi herhangi bir değişiklik için, Parkurlar Bağlam Menüsü içindeki [**Seçenekler**](https://osmand.net/docs/user/map/track-context-menu#options) sekmesini kullanın.
:::


### Haritada Göster {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![show_tr_onmap_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Harita parkurlarını yapılandır Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![sshow_tr_onmap_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Harita parkurlarını yapılandır iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Haritanızda hangi parkurların görünür olduğunu iki seçenekten birini kullanarak yönetin. *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate ios="true" ids="shared_string_gpx_tracks"/> sekmesi*](../map/tracks/index.md#my-places) öğesine gidin ve görüntülemek veya gizlemek istediğiniz herhangi bir parkur için *Haritada göster* seçeneğini etkinleştirin. Alternatif olarak, tüm parkurlarınızın görünürlüğünü tek bir yerden hızlıca ayarlamak için *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map) öğesine gidebilirsiniz.


### Kaydedilen GPX Dosyası {#recorded-gpx-file}

OsmAnd, yolculuğunuzu yapılandırılmış bir [GPX dosyasına](https://en.wikipedia.org/wiki/GPS_Exchange_Format) kaydeder ve *dosya > parkur > segmentler > noktalar* hiyerarşisini kullanır. İşte nasıl çalıştığı:

- **Noktalar**, kaydedilen yolunuzun her biri koordinatlar, hız, rakım ve yön gibi özelliklerle işaretlenmiş bireysel anlarını temsil eder.
- Bu noktalar, tüm rotanızı temsil eden **parkurlar** oluşturmak üzere gruplandırılır.
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


| Parametre  | Açıklama |
|-----------------|----------------|
| `trkpt` | **Parkur Noktası**, etkinliğiniz sırasında algılanan belirli bir coğrafi konumu temsil eder. Her parkur noktası, kaydedilen yolunuzun temelini oluşturan enlem ve boylam koordinatlarını içerir. |
| `trkseg`  | **Parkur Segmenti**, etkinlikteki duraklamalar veya duruşlar gibi kesintilerle ayrılmış ardışık parkur noktalarını bir araya getirir. Bu, tek bir kayıt içindeki sürekli hareketi boşta kalma sürelerinden ayırmaya yardımcı olur.  |
| `lat` | **Enlem**, bir noktanın Dünya yüzeyindeki kuzey-güney konumunu gösterir. Tam konumunuzu belirlemek için kullanılan koordinat çiftinin yarısıdır.   |
| `lon` | **Boylam**, bir noktanın küre üzerindeki konumunu doğru bir şekilde belirlemek için enlemi tamamlayarak doğu-batı konumunu belirtir. Enlem ve boylam birlikte, kesin coğrafi konumunuzu tanımlar.    |
| `ele` | **Yükseklik**, bir parkur noktasının deniz seviyesinden yüksekliğini metre cinsinden ölçer. Bu, yürüyüşler veya bisiklet gezileri gibi etkinlikleriniz sırasında yükseklik değişikliklerini izlemek için faydalı olabilir.    |
| `time` | **Zaman Damgası**, bir parkur noktasının kaydedildiği tam tarihi ve saati kaydeder. Bu, etkinliğinizin süresini ve zamanlamasını hassasiyetle izlemenizi sağlar.    |
| `hdop` | **Yatay Doğruluk Azaltma (HDOP)**, uyduların konumlarından kaynaklanan konumdaki potansiyel hatayı yansıtan bir GPS doğruluk ölçüsüdür. Standart HDOP'tan farklı olarak, OsmAnd GPX parkurları bu değeri metre cinsinden yatay doğruluğu temsil etmek için kullanır. Lütfen bu uygulamanın tipik HDOP standartlarından farklı olduğunu unutmayın. [Daha fazla bilgi edinin](https://github.com/osmandapp/Osmand/issues/3445).   |
| `speed` | **Hız**, hareket hızınızı saniyede metre cinsinden kaydeder. Etkinliğinizin çeşitli segmentlerindeki hızınız hakkında bilgi sağlar.  |
| `heading`  | **Yön**, aracınızın veya cihazınızın önünün işaret ettiği yönü derece cinsinden gösterir. Rüzgar, akıntılar veya yol koşulları gibi dış etkenler nedeniyle farklılıklar oluşabilen hareketin gerçek yolundan farklıdır. [Yön hakkında daha fazla bilgi](https://en.wikipedia.org/wiki/Heading_(navigation)).  |
| `speed_sensor` | [Harici sensörlerden](../plugins/external-sensors.md) **Hız**, bağlı sensörlerden veri yakalar ve özellikle bisiklet sürerken daha hassas hız bilgisi sağlar. Daha fazla ayrıntı için [GPX dosya formatı belgelerine](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data) bakın.  |
| `cadence` | **Kadans**, [harici sensörler](../plugins/external-sensors.md) kullanılarak kaydedilen dakikadaki pedal devri sayısını ölçer. Bu, özellikle pedal çevirme verimliliklerini izlemeyi ve optimize etmeyi amaçlayan bisikletçiler için kullanışlıdır. [Daha fazlasını okuyun](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |
| `power` | **Bisiklet Gücü**, pedal çevirirken üretilen gücü [harici sensörlerden](../plugins/external-sensors.md) yakalar. Performanslarını ölçmek isteyen ciddi bisikletçiler için önemli bir metriktir. [Daha fazla bilgi edinin](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).   |
| `atemp` | **Hava Sıcaklığı**, etkinliğiniz sırasında ortam hava sıcaklığını [harici sensörler](../plugins/external-sensors.md) kullanılarak kaydeder. Su sıcaklığının desteklenmediğini unutmayın. [Ayrıntılar burada](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).   |
| `hr` | **Kalp Atış Hızı**, bağlı [sensörlerden](../plugins/external-sensors.md) gelen verileri kullanarak dakikadaki kalp atışlarınızı izler. Bu bilgi, antrenmanlar sırasında kardiyovasküler performansınızı izlemek için hayati önem taşıyabilir. [Daha fazlasını öğrenin](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |


## Kayıt Ayarları {#recording-settings}

Gezilerinizi izlemeye başlamadan önce, en iyi performans için **Gezi Kaydı eklentisini** doğru şekilde yapılandırmanız gerekir.

- **Profile özel ayarlar**. Uygulamadaki her profilin kendi benzersiz Gezi Kaydı ayarları olabilir. Bu, sürüş, bisiklet veya hatta farklı yapılandırmalar gerektirebilecek Nordic yürüyüşü gibi etkinliğinize göre kayıt davranışını hassas bir şekilde özelleştirmenize olanak tanır.

- **Kayıt parametrelerini özelleştirin**. Kayıt ayarları, nasıl hareket ettiğinize bağlı olarak değişebilir. Örneğin, uzun mesafeler sürmek daha düşük bir kayıt sıklığı gerektirebilirken, yürüyüş veya yürüyüş daha sık güncellemelerden faydalanabilir.

- **Hassas konum verileri**. Kayıtlarınızın sorunsuz ve gelecekte kullanılabilir olmasını sağlamak için konum noktalarını yakalama şeklinizi özelleştirebilirsiniz. Bu, kayıt sıklığını, verilerinizin biçimini (mesafe birimi başına nokta sayısı gibi) veya kaydedilen noktalar arasındaki boşluğu ayarlamayı içerebilir.

- **Genel ayarlar**. Gezi Kaydı ayarları, uygulamanın genel [ayarlarında](../personal/global-settings.md) yönetebileceğiniz profile göre yapılandırılır. Gezi Kaydı eklentisini özelleştirmeden önce, [profiller](../personal/profiles.md) bölümünden yapılandırmak istediğiniz profili seçin. Oradan, Gezi Kaydı seçeneklerine erişmek için profilin ayarlarına gidin.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Android'de Gezi kaydını yapılandırma](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png)  ![Android'de Gezi kaydını yapılandırma](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta Gezi kaydını yapılandırma](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png)  ![iOS'ta Gezi kaydını yapılandırma](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Parametre | Açıklama |
|---|---|
| **Pil optimizasyonu iletişim kutusu** (*Android*) | [Android pil optimizasyonu ayarlarını](#battery-optimization) açar. Tekrar sorulmak istemiyorsanız *Bir daha sorma* öğesine dokunun. |
| **Başlangıç iletişim kutusunu göster** (*Android*) | Kaydı başlatmadan önce ayarları yapılandırabileceğiniz bir iletişim kutusunu etkinleştirir. Devre dışı bırakılırsa, kayıt otomatik olarak başlar. |
| **Navigasyon sırasında parkuru otomatik kaydet** | Navigasyon sırasında parkuru otomatik olarak kaydeder ve *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>* sekmesine kaydeder.<br />*Not*: Parkur kaydı pil tüketir ve ekran kapalı olsa bile arka planda çalışmaya devam eder. |
| **Genel günlük kaydı aralığı** | Konum noktalarının ne sıklıkta kaydedileceğini tanımlar. Varsayılan 5 saniyedir. *Gezi kaydı widget'ı* ile etkinleştirilir. |
| **Minimum yer değiştirme** | Çok az hareket olduğunda veya hiç hareket olmadığında noktaların kaydedilmesini önlemek için bir filtre. Veri gürültüsünü azaltmaya yardımcı olur.<ul><li>*Yan etkiler*: Dinlenme süreleri kaydedilmeyebilir ve küçük hareketler göz ardı edilebilir. Bu, işlem sonrası verileri azaltabilir ancak GPS hatalarının kaydedilmesini de önleyebilir.</li><li>*Öneri*: Kayıtlarınızda daha az küçük ayrıntı istiyorsanız yer değiştirmeyi 5 metre olarak ayarlayın.</li></ul> |
| **Minimum doğruluk** | Cihaz tarafından bildirilen minimum doğruluk göstergesi eşiğinin altındaki konum noktalarını filtreler.<ul><li>*Yan etkiler*: Zayıf sinyal olan alanlardaki (köprülerin altında, ağaçların arasında, binalar arasında veya bazı hava koşullarında) noktalar eksik olabilir.</li><li>*Öneri*: Emin değilseniz, veri kaybını önlemek için bu filtreyi devre dışı bırakmak daha iyi olabilir.</li></ul><details><summary>*Açıklama*</summary>GPS'in kayıttan hemen önce kapatıldığını varsayalım. Bu durumda, ilk ölçülen noktanın doğruluğu azalabilir, bu nedenle noktayı kaydetmeden önce bir süre beklemek veya art arda 3 noktanın en iyisini kaydetmek daha iyidir.</details> |
| **Minimum hız** | Belirli bir hızın altında kaydedilen noktaları yok saymak için bir eşik belirler.<ul><li>*Yan etkiler*: Hızın belirtilen eşiğin altına düştüğü bölümler kaydedilmeyecektir.</li><li>*Öneri*: Önemli verileri kaybetmeden daha iyi sonuçlar verebileceği için bunun yerine *Minimum yer değiştirme* filtresini kullanın.</li></ul><details><summary>*Açıklama*</summary>Önce hareket algılamayı günlük kaydı minimum yer değiştirme filtresi (B) aracılığıyla kullanmayı deneyin, daha iyi sonuçlar verebilir ve daha az veri kaybedersiniz. Düşük hızlarda parkurlarınız gürültülü kalırsa, burada sıfır olmayan değerleri deneyin. Lütfen bazı ölçümlerin hiçbir hız değeri bildirmeyebileceğini (bazı ağ tabanlı yöntemler) unutmayın, bu durumda hiçbir şey kaydetmezsiniz.<br/><br/>Hız > 0 kontrolü: Çoğu GPS yonga seti, algoritma hareket halinde olduğunuzu belirlerse bir hız değeri bildirir ve değilseniz hiçbir şey bildirmez. Bu nedenle, bu filtrede > 0 ayarını kullanmak, bir anlamda GPS yonga setinin hareket algılamasını kullanır. Ancak kayıt sırasında burada filtrelenmese bile, GPX analizimizde Düzeltilmiş Mesafeyi, yani o alanda görüntülenen değerin hareket halindeyken kaydedilen mesafe olduğunu belirlemek için bu özelliği hala kullanıyoruz.</details> |
| **Boşluktan sonra kayıtları otomatik böl** | Kaydedilen noktalar arasındaki zaman boşluklarına göre parkurları otomatik olarak böler. <ul><li>6 dakikalık bir boşluktan sonra yeni bir segment başlar.</li><li>2 saatlik bir boşluktan sonra yeni bir parkur başlar.</li><li>Tarih değiştiğinde yeni bir dosya başlar.</li><li>Boşluklar GPS sinyal kaybı, düşük hız veya yapılandırma ayarlarından kaynaklanabilir.</li></ul><details><summary>*Açıklama*</summary>Hiçbir nokta kaydedilmediğinde bir boşluk belirlenir. Bu, konum algılanmadığı veya algılandığı ancak kaydedilmediği için olabilir. Zayıf GPS sinyalleri (kötü hava koşulları nedeniyle), veya hareket hızının yapılandırılan eşiğin altına düşmesi gibi çeşitli faktörler buna neden olabilir. Bu gibi durumlarda, cihaz konumu algılasa bile kaydetmez.<br/><br/>Kaydedilen verilerdeki bu boşluklar, aynı parkur içinde yeni bir segmentin, aynı dosya içinde yeni bir parkurun veya tek bir kayıt içinde yeni bir GPX dosyasının oluşturulmasını tetikleyebilir. Bu, tek bir başlatma/durdurma kayıt oturumu içinde yönetilir.</details> |
| **Bağımsız günlük kaydını önle** (*Android*) | OsmAnd uygulaması kapatıldığında (son uygulamalar aracılığıyla) parkur kaydını duraklatır. Arka plan göstergesi Android bildirim panelinde görüntülenmez. |
| **Yönü dahil et** | GPX dosyasındaki her nokta için yönü (hareket yönü) kaydeder. Yön, cihazın baktığı yöndür ve rüzgar veya kayma gibi dış etkenler nedeniyle hareket yönünden farklılık gösterebilir. |
| **Etkinlik**  | Seçenek, bir profil için bir [etkinlik türü](../map/tracks/track-context-menu.md#ttrack-activity-type) önceden seçmenize olanak tanır, bu da daha sonra tüm kaydedilen parkurlara otomatik olarak uygulanır. |
| **Harici sensörler** <br/> *Eklentinin etkinleştirilmesi gerekir* | *<Translate android="true" ids="map_widget_ant_heart_rate"/>* veya *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* gibi [harici sensörlerden](../plugins/external-sensors.md#trip-recording) gelen veriler GPX dosyasına kaydedilir. *Mesafe* verileri Android veya iOS'ta kaydedilmez. Yalnızca [Harici Sensörler eklentisi](../plugins/external-sensors.md) etkinleştirildiğinde görüntülenir. |
| **Araç Metrikleri** <br/> *Eklentinin etkinleştirilmesi gerekir* | [OBD-II tarayıcısından](../plugins/vehicle-metrics.md#trip-recording) gelen veriler GPX dosyasına kaydedilir. Yalnızca [Araç Metrikleri eklentisi](../plugins/vehicle-metrics.md) etkinleştirildiğinde görüntülenir.<br />*Not*: Listeden GPX dosyasına hangi metriklerin kaydedileceğini ekleyebilirsiniz: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **Parkur depolama klasörü** (*Android*) | *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* sekmesinde kaydedilen parkurların nerede depolanacağını tanımlar. Seçenekler arasında tüm parkurları Rec klasöründe depolamak veya bunları Rec/yyyyy-mm gibi aylara göre düzenlemek bulunur. |
| **Bildirim** | Gezileri kaydetmeye başlamanıza olanak tanıyan cihazın bildirim alanında bir [gezi kaydı](#notifications) sistem bildiriminin görüntülenmesini kontrol eder. |
| **Çevrimiçi izleme** (*Android*) | Kaydedilen noktaları belirtilen bir URL'ye göndererek konumunuzun gerçek zamanlı olarak izlenmesine olanak tanır. İzleme aralığı, noktaların ne sıklıkta gönderileceğini belirler ve zaman arabelleği, İnternet bağlantısı olmadığında noktaları depolar.<details><summary>*Açıklama*</summary>Bu seçenek etkinleştirilirse ve parkur kaydı devam ediyorsa, Mesafe/Başlat-Durdur (REC) widget'ı **kırmızı** yerine **yeşil** renge döner ve kaydedilen her noktanın belirtilen bir URL'ye iletildiğini gösterir. **Web adresi** alanı, aşağıdaki parametre formatını kullanarak URL'yi girmenize olanak tanır:<ul><li>`lat={0}`: Enlem</li><li>`lon={1}`: Boylam</li><li>`timestamp={2}`: Zaman damgası (Unix zamanı)</li><li>`hdop={3}`: Yatay doğruluk azaltma</li><li>`altitude={4}`: Rakım</li><li>`speed={5}`: Hız</li><li>`bearing={6}`: Yön (hareket yönü)</li><li>`eta={7}`: Tahmini varış zamanı (Unix zamanı)</li><li>`etfa={8}`: İlk ara noktaya veya bitiş noktasına tahmini süre (Unix zamanı)</li><li>`eda={9}`: Varışa veya bir işaretleyiciye tahmini mesafe (metre cinsinden)</li><li>`edfa={10}`: İlk ara noktaya veya bitiş noktasına tahmini mesafe (metre cinsinden)</li></ul>Konum noktalarının ne sıklıkta gönderileceğini belirtmek için **İzleme Aralığı**nı 0 saniyeden 5 dakikaya kadar seçeneklerle ayarlayabilirsiniz. Ayrıca, **Zaman Arabelleği** parametresi, İnternet bağlantısı olmadığında konum noktalarının ne kadar süreyle depolanacağını belirleyerek, bağlantı geri geldiğinde verilerin kaydedilmesini ve iletilmesini sağlar.</details> |
| **Parkurlar** | Parkurların kaydedildiği klasöre hızlı bir referans *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* sekmesi. |
| **Eklenti ayarlarını varsayılana sıfırla** | Mevcut profil için tüm gezi kaydı ayarlarını varsayılanlarına sıfırlar. |
| **Başka bir profilden kopyala** (*Android*) | Gezi kaydı ayarlarını bir profilden diğerine kopyalar. |


### Pil Optimizasyonu {#battery-optimization}

<InfoAndroidOnly />

![Haritadaki parkur iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png)  ![Haritadaki parkur iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)  

Bu özellik, OsmAnd için pil optimizasyon ayarlarını yönetmenize olanak tanır, böylece uygulama navigasyon veya parkur kaydı sırasında arka planda çalışırken bile konumunuza kesintisiz erişim sağlanır.

- **Pil optimizasyon ayarları**. OsmAnd için pil tasarrufu tercihlerini değiştirebileceğiniz Android ayarlarını açar. [Daha fazla ayrıntı burada](../troubleshooting/general.md#optimizing-battery-consumption).
- **Bir daha sorma**. İletişim kutusunu kalıcı olarak kapatır, böylece bir daha görünmez.
- **Kapat**. İletişim kutusunu geçici olarak kapatır, pil optimizasyonunun dikkat gerektirdiği bir sonraki sefer tekrar görünecektir.


### Bildirimler {#notifications}

![Gezi Kaydı Bildirimi](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)  

Eklenti ayarlarında [Bildirim](#recording-settings) etkinleştirilirse, kayıt etkin olduğunda gezi kaydı bildirimleri her zaman sistem bildirim alanında görüntülenecektir. Bu bildirim, kayıt işleminin sistem tarafından kesintiye uğramamasını sağlar ve aktif bir kayıt sırasında devre dışı bırakılamaz.

- Bildirim alanı, ekranın üstünden aşağı kaydırıldığında açılır ve yukarı kaydırıldığında kapanır. Bu mesajlar, özellikle navigasyon sırasında otomatik kayıt etkinleştirildiğinde, gezi kaydını başlatma/durdurma gibi eylemleri size bildirir.
- Bildirimler, uygulama ön planda, arka planda çalışıyor veya kapalı olsa bile görünür kalır. Artık gerekli değilse eski bildirimi manuel olarak temizleyebilirsiniz, ancak bu devam eden kaydı durdurmaz.

**Önemli not**.

Bu davranış, Android tarafından gezi kaydı gibi herhangi bir ön plan hizmetinin size görünür kalması için gereklidir.

- Bildirim kaldırılırsa, Android kaydı otomatik olarak durduracaktır. [Bağımsız günlük kaydını önle](#recording-settings) ayarını kullanabilirsiniz.
- OsmAnd'daki **Bildirim** ayarı, bildirim çubuğunun aktif bir kayıt olmadığında bir kaydı başlatmak için bir kısayol gösterip göstermediğini etkiler. Aktif bir kayıt sırasında bildirimin görünürlüğünü kontrol etmez.

**Ek Android seçenekleri**.

![Gezi Kaydı Bildirimi](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- ***Android ayarları → Bildirimler ve durum çubuğu → Kilit ekranı bildirimleri*** bölümünde, bildirimlerin kilit ekranında görünmesini önlemek için OsmAnd'ı uygulama listesinden kaldırabilirsiniz, böylece yanlışlıkla ekran etkinleşmesi önlenir. Bu, parkur kaydını etkilemeyecektir. Bildirimler yine de normal bildirim alanında görünecektir.
- **OsmAnd** ayrıca ***Gizlilik → Özel İzinler → Ekranı aç*** altında da görünebilir. Bir bildirim göründüğünde ekranın açılmasını önlemek istiyorsanız, OsmAnd'ı bu listeden kaldırmayı deneyin.

<!--
- OsmAnd, **Gizlilik** *→* **Özel İzinler** → **Alarmlar ve hatırlatıcılar** altında listelenmez.
-->

**Rozet bildirimi**.

![Gezi Kaydı Bildirimi](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

Uygulama simgesi rozeti, parkur kaydı etkin olduğunda OsmAnd simgesinin yanında görünür.

- Bu simge, parkur kaydı tamamlandığında kaybolur. Bir kaydın etkin olup olmadığını kontrol etmek için *Menü → Yerlerim → Parkurlar sekmesi*'ne gidebilir veya kaydı yönetmek için widget'a dokunabilirsiniz.  
- Devam eden bir kayıt yoksa ve rozet hala görüntüleniyorsa, bu, OsmAnd'dan gelen bir mesajın cihaz bildirim panelinde kalmış olabileceği anlamına gelebilir.  
- Android ayarlarında rozetleri devre dışı bırakmak için cihaz *Ayarları → Uygulamalar → OsmAnd → Bildirimler*'e gidin ve bu uygulama için rozet görüntüleme seçeneğini devre dışı bırakın.


## Widget'lar {#widgets}

Widget'lar, *Mesafe*, *Süre*, *Yokuş yukarı* ve *Yokuş aşağı* gibi parkur kaydıyla ilgili temel bilgileri doğrudan ekranda görüntülemenizi sağlar. Android'de ayrıca *Maksimum Hız* ve *Ortalama Eğim* widget'larını ekleyebilirsiniz.

*Gezi kaydı widget'larını* kullanmaya başlamak için aşağıdaki tüm ayarları yapmanız gerekir:

1. Eklentiyi [etkinleştirin](../start-with/first-steps.md#how-to-configure-plugins).
2. Gerekli [profil](../personal/profiles.md) için gezi kaydı ayarlarını yapılandırın.
3. Gerekli **Gezi kaydı widget'larını** ekrana ekleyin. Bu yapılandırmanın **her profile özel** olduğunu unutmayın.


### Kayıt Widget'ı Ekle {#add-recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Bir panel seçin → <Translate android="true" ids="map_widget_monitoring"/>*

![Android'de Mesafe/Başlat-Durdur widget'ı ekleme](@site/static/img/plugins/trip-recording/add_widg_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Bir panel seçin → <Translate android="true" ids="map_widget_monitoring"/>*  

![iOS'ta Mesafe/Başlat-Durdur widget'ı ekleme](@site/static/img/plugins/trip-recording/add_recording_widgets_ios_2.png)

</TabItem>

</Tabs>

[Gezi Kaydı widget'ı](../widgets/info-widgets.md#trip-recording-widgets), kayıt durumunuzu izlemenin ve kayıt ayarlarına ve ayrıntılarına hızlıca erişmenin kolay bir yolunu sunar. Bu widget, Gezi Kaydı eklentisi etkinleştirildiğinde otomatik olarak ekranınıza eklenir.

Arayüzünüzü özelleştirmek için Gezi Kaydı widget'ını ve [diğer widget'ları](../plugins/trip-recording#duration-uphill-downhill) Ekranı Yapılandır menüsü aracılığıyla ekleyebilir veya kaldırabilirsiniz.


### Mesafe (Başlat-Durdur) {#distance-start-stop}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Android'de kaydı bitir](@site/static/img/plugins/trip-recording/distance_start_rec_new_andr.png)
![Gezi kaydı widget'ı](@site/static/img/plugins/trip-recording/trip_rec_widgets_mode.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Gezi kaydı widget'ı](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Gezi kaydı widget'ı](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png)  

</TabItem>

</Tabs>  

Widget'lar haritada görüntülendiğinde, herhangi birine dokunmak ek parkur ayrıntılarını ortaya çıkarır ve kayıtla etkileşime geçmenizi sağlar.
*Mesafe* widget'ı, mevcut kaydedilen gezinizin toplam mesafesini gösterir ve kayıtlarınızı yönetmek için ana arayüz görevi görür. Üzerine dokunmak, kaydı başlatabileceğiniz, durdurabileceğiniz ve parkurunuz hakkında ayrıntılı bilgi görüntüleyebileceğiniz [Gezi Kaydı iletişim kutusunu](#start-a-dialog) ortaya çıkarır.

- Widget, *Gezi kaydı eklentisi* etkinleştirildiğinde otomatik olarak eklenir, ancak [Ekranı Yapılandır menüsü](../widgets/configure-screen.md#overview) aracılığıyla gizlenebilir.
- Gezi Kaydı eklentisi ayarlarında *Başlangıç iletişim kutusunu göster* seçeneği devre dışı bırakılırsa, etkin widget'a dokunmak yine de *Gezi Kaydı iletişim kutusunu* açarak daha fazla seçeneğe ve bilgiye erişmenizi sağlar.  

*Mesafe/Başlat-Durdur* widget'ına ek olarak, **Gezi Kaydı eklentisi** dört başka widget içerir: *Süre*, *Yokuş yukarı*, *Yokuş aşağı*, *Maksimum Hız* ve *Ortalama Eğim* (son ikisi yalnızca Android'de mevcuttur). Bunlar, geziniz hakkında ek bilgi sağlayarak gerçek zamanlı ilerlemeyi izlemenize yardımcı olur.

| |
|-----------|
| **Mesafe/Başlat-Durdur**. Bu widget, devam eden gezi kaydınızın mesafesini gösterir. Gezi Kaydı eklentisi etkinleştirildiğinde otomatik olarak eklenir, ancak Ekranı Yapılandır menüsü aracılığıyla gizleyebilirsiniz. Widget, *Kayıt*, *Duraklatıldı* ve *Etkin Değil* olmak üzere üç farklı duruma sahiptir ve her biri gezi kaydınızın mevcut durumunu gösterir. |
| ![Gezi kaydı (REC) widget'ı](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Etkin olmayan bir widget'a dokunulduğunda [Gezi Kaydı iletişim kutusunu](#start-a-dialog) açmak için, Gezi Kaydı eklentisi ayarlarında *Başlangıç İletişim Kutusunu Göster* seçeneğini etkinleştirin. Seçenek devre dışı bırakılırsa, widget'a dokunulduktan hemen sonra iletişim kutusu açılmadan kayıt başlayacaktır.| 

Android'de Mesafe widget'ı birden fazla görüntüleme modunu destekler:
- **Toplam mesafe** – mevcut kaydın toplam mesafesi (varsayılan).
- **Son yokuş yukarı** – en son yokuş yukarı bölümünün mesafesi.
- **Son yokuş aşağı** – en son yokuş aşağı bölümünün mesafesi.


### Süre, Yokuş Yukarı, Yokuş Aşağı {#duration-uphill-downhill}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| |
|------------|
|**Süre**. Mevcut gezi kaydının toplam süresini saat ve dakika cinsinden gösterir. |
|![widget'lar](@site/static/img/widgets/tr_rec_wid_dur.png)|  
|**Yokuş yukarı**. Seçilen moda bağlı olarak toplam yokuş yukarı veya son yokuş yukarı bölümünü gösterir. |
|![widget'lar](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Yokuş aşağı**. Seçilen moda bağlı olarak toplam yokuş aşağı veya son yokuş aşağı bölümünü gösterir. |
|![widget'lar](@site/static/img/widgets/tr_rec_wid_dow.png)|

</TabItem>

<TabItem value="ios" label="iOS">  

| |
|------------|
|**Süre**. Mevcut gezi kaydının toplam süresini saat ve dakika cinsinden gösterir. |
|![widget'lar](@site/static/img/widgets/tr_rec_wid_dur.png)|  
|**Yokuş yukarı**. Mevcut gezi kaydı için kümülatif yükseklik kazanımını gösterir. |
|![widget'lar](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Yokuş aşağı**. Mevcut gezi kaydı sırasında biriken toplam inişi gösterir. |
|![widget'lar](@site/static/img/widgets/tr_rec_wid_dow.png)|

</TabItem>

</Tabs>

Birden fazla widget seçtiyseniz — *Süre*, *Yokuş yukarı* veya *Yokuş aşağı* — her biri için aynı iletişim kutusuna geçiş yapmanıza veya kapatmanıza gerek kalmadan erişebilirsiniz. Bu birleşik arayüz, ilgili tüm bilgileri sorunsuz bir şekilde görüntülemeyi ve yönetmeyi kolaylaştırır.

### Maksimum Hız & Ortalama Eğim {#max-speed--average-slope}

<InfoAndroidOnly />

![Maksimum Hız Android](@site/static/img/widgets/max_speed_android.png) ![Ortalama Eğim Android](@site/static/img/widgets/average_slope_android.png)  

**Maksimum Hız** widget'ı, şu anda kaydedilen gezi için maksimum hızı gösterir. Widget'a dokunarak genel maksimum hız ile son yokuş yukarı veya yokuş aşağı bölümünden maksimum hız arasında geçiş yapabilirsiniz.

**Ortalama Eğim** widget'ı, mevcut gezinin son yokuş yukarı veya yokuş aşağı bölümünün ortalama eğimini görüntüler. Yükseklik kazancı ve mesafeye dayalı olarak önceki tırmanış veya inişin ne kadar dik olduğunu tahmin etmenize yardımcı olur.


## İlgili Makaleler {#related-articles}

- [Harita Bağlam menüsü](../map/map-context-menu.md)
- [Haritada parkuru göster](../map/tracks/index.md)
- [Haritada analiz et](../map/tracks/index.md#analyze-track-on-map)
- [Parkur Bağlam menüsü](../map/tracks/track-context-menu.md)
- [Parkurla navigasyon](../navigation/setup/gpx-navigation.md)

### Yaygın Sorunlar ve Çözümler {#common-issues-and-solutions}

- Gezi Kaydı başlamıyor.
    - **Gezi Kaydı eklentisinin** etkinleştirildiğinden emin olun: *Menü → Eklentiler → Gezi Kaydı → Etkinleştir*.
    - Ayarların doğru olduğundan emin olun: *Menü → Profili Yapılandır → Eklenti Ayarları → Gezi Kaydı*.
    - Kayıt hala başlamıyorsa, uygulamayı yeniden başlatın ve tekrar deneyin.

- Gezi Kaydı beklenmedik şekilde duruyor.
    - Cihazınızın *pil optimizasyon ayarlarının* kaydı durdurup durdurmadığını kontrol edin. Bazı cihazlar güç tasarrufu yapmak için arka plan etkinliğini duraklatabilir. *Cihaz Ayarları → Pil*'e gidin.

- Kaydedilen mesafe gerçek mesafeyle eşleşmiyor.
    - GPS'in etkinleştirildiğinden ve aktif bir sinyali olduğundan emin olun.  
    - GPS doğruluk eşiğini azaltın: *Menü → Profili Yapılandır → Gezi Kaydı → Minimum Doğruluk*.

- Kaydedilen Parkurlar Gürültülü. [(kontrol edin)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Kaydedilen Parkurlarda Boşluklar Var. [(kontrol edin)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Kat Edilen Mesafeyi Nasıl Takip Ederim. [(kontrol edin)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Ek sorun giderme için şu adresi ziyaret edin: [Parkur Kaydı Sorun Giderme](https://osmand.net/docs/user/troubleshooting/track-recording-issues).