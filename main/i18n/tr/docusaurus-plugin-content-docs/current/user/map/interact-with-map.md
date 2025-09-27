---
source-hash: 21283db3b00701562a96fe4d5d41814c5e611b4278089388e11aae43e71649e9
sidebar_position: 2
title:  Harita ile Etkileşim
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

Bu makale, çeşitli düğmeleri ve hareketleri kullanarak haritayı nasıl özelleştireceğinizi ve haritayla nasıl etkileşim kuracağınızı açıklamaktadır. Haritayı döndürme, yakınlaştırma, görüş açısını ayarlama ve haritanın görüş açısını değiştirme, pusulayı kullanarak manuel veya otomatik olarak döndürme veya yönlendirmeye göre döndürme konularını kapsar.


## Hareketler {#gestures}

Hareketler, haritada kolay ve sezgisel gezinmek için çok önemlidir.

| Harita Eylemi | Hareket |
|:------------|:-------------|
| **Taşı** | Haritaya **tek** parmağınızla dokunup basılı tutun, ardından etrafta gezinmek için sürükleyin. |
| **Kaydır** | Haritayı **tek** parmağınızla kaydırın. |
| **Yakınlaştır** | Haritaya **tek** parmağınızla iki kez dokunun. <br/> **Tek** parmağınızla iki kez dokunun ve aşağı kaydırın. <br/> Yakınlaştırmak için **iki** parmağınızla sıkıştırın. |
| **Uzaklaştır** | **İki** parmağınızla iki kez dokunun. <br/> **Tek** parmağınızla iki kez dokunun ve yukarı kaydırın. <br/> Uzaklaştırmak için **iki** parmağınızla sıkıştırın. |
| **Döndür** | Haritaya **iki** parmağınızla dokunun, ardından parmaklarınızı dairesel bir hareketle döndürün. |
| **Eğme (3D)** | **İki** parmağınızla dokunun ve yukarı veya aşağı hareket ettirin. <br/> Yalnızca [Harita Oluşturma Motoru](../personal/global-settings.md#map-rendering-engine) sürüm 2 (OpenGL) ile kullanılabilir. |

Kaydırma animasyonları, ayarlarda [özel bir seçenek](#no-animations) ile devre dışı bırakılabilir.


## Konumum ve Yakınlaştırma {#my-location-and-zoom}

![Ekran menüsünü yapılandır](@site/static/img/widgets/location_zoom_buttons.png)

**Konumum**.
*Konumum* düğmesi, haritanın merkezinin cihazınızın mevcut coğrafi konumuyla senkronize olup olmadığını gösteren dairesel bir simgedir. Genellikle "Neredeyim?" düğmesi olarak adlandırılır, haritadaki konumunuzu hızlı bir şekilde bulmanıza yardımcı olur. Navigasyon sırasında, harita genellikle cihazın konumuyla senkronize kalır, bu nedenle düğme gizli kalır. Ancak, kullanıcı etkileşimi nedeniyle harita ve konumunuz senkronizasyondan çıkarsa görünür hale gelir. Düğmeye dokunmak, haritayı mevcut konumunuza yeniden ortalar ve iki kez dokunmak görünümü 3D moda geçirir.

- *Konumum* düğmesinin aşağıdaki durumları vardır:
  - *Tam mavi simge*. Konum bulundu ancak harita ile senkronize değil.
  - *Beyaz simge*. Konum bulundu ve harita ile senkronize.
  - *Gri simge*. Konum henüz bulunamadı.
  - *Ok simgesi*. 3D modu etkinleştirildi.

- *Konumum* düğmesine **uzun dokunma** (*Android*), konumunuzu paylaşmanıza olanak tanıyan [harita bağlam menüsünü](../map/map-context-menu.md) açar.

<br/>

**Yakınlaştırma düğmeleri**.
*Yakınlaştırma düğmeleri* her zaman *Konumum* düğmesinin yanında görünür ve haritanın yakınlaştırma seviyesini kontrol etmenizi sağlar.

- Yakınlaştırma seviyesini değiştirmek, haritanın konumunuzla senkronizasyonunu etkilemez.
- *Yakınlaştırma düğmelerine* **uzun dokunma**, harita detay seviyelerini ayarlamanıza olanak tanıyan *Harita büyüteci* iletişim kutusunu açar.
- Navigasyon sırasında, yakınlaştırmanın **Otomatik yakınlaştırma** ayarı tarafından otomatik olarak kontrol edilebileceğini unutmayın:
   - *<Translate android="true" ids="android_button_seq"/>:*&nbsp; *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>*  
   - *<Translate ios="true" ids="ios_button_seq"/>:*&nbsp; *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>*  

### Konumum Görünümü {#my-location-appearance}

Profil görünüm ayarlarını kullanarak **Konumum** düğme simgelerini özelleştirebilirsiniz. Bunu nasıl yapacağınız hakkında daha fazla bilgiyi [burada](../personal/profiles.md#profile-appearance) okuyun.


## Harita Büyüteci {#map-magnifier}

*Harita Büyüteci*, kağıt haritalarla kullanılan bir büyüteç gibi haritanın görünürlüğünü artıran bir araçtır. Metni ve ayrıntıları daha net görmek veya aynı ölçeği korurken ayrıntı seviyesini ayarlamak için haritayı yakınlaştırmanıza olanak tanır. Daha fazla bilgi için [Vektör Haritalar](../map/vector-maps.md#map-magnifier) makalesine gidin.


## Harita Yönlendirme Modları {#map-orientation-modes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Pusula widget'ı](@site/static/img/map/map_orientation_mode_2_andr.png)  
  
</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Pusula widget'ı](@site/static/img/map/map_orientation_mode_ios.png)  

</TabItem>

</Tabs>  

*Harita yönlendirme modları*, haritanın cihaz ekranında nasıl görüntüleneceğini seçmenize olanak tanır. OsmAnd, **Manuel Olarak Döndürülmüş**, **Hareket Yönü**, **Pusula Yönü** ve **Kuzey Yukarıda** gibi modlar sunar. Her modu etkinleştirmek, haritanın seçilen seçeneğe göre yönlendirilme şeklini değiştirir. Tüm ayrıntılar için [Harita Düğmeleri](../widgets/map-buttons.md#compass) makalesine bakın.


## Pusula {#compass}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Pusula widget'ı](@site/static/img/widgets/compass_widget.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Pusula widget'ı](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs>

Pusula düğmesi, [haritanın nasıl yönlendirildiğini](#map-orientation-modes) gösterir. Simgelerdeki *kırmızı ok* veya *Hareket yönü* modundaki okun yönü Kuzeyi gösterir. [Pusula düğmesindeki simge](../widgets/map-buttons.md#compass) mevcut harita yönlendirme modunu gösterir. Pusula düğmesi widget'ı üç [etkileşim seçeneği](../widgets/map-buttons.md#compass-tapping-behavior) sunar: *Tek Dokunuş* haritayı Kuzeye döndürür, *Çift Dokunuş* tüm harita yönlendirme modları arasında geçiş yapar ve *Uzun Dokunuş* modlar listesini açar.


## Haritayı Yönlendirmeye Göre Döndür {#rotate-map-by-bearing}

**Haritayı yönlendirmeye göre döndür** modunda ([Hareket yönü](../widgets/map-buttons.md#compass)), harita otomatik olarak hareket yönünüzle hizalanır, böylece önünüzdeki alan ekranın üst kısmında görüntülenir. Bu mod, harita merkezini hafifçe aşağı kaydırarak navigasyonu geliştirir ve ilerideki rotanın daha fazlasını gösterir. Sabit duruyorsanız, harita sabit kalır.

Bu özelliği *Menü → Ayarlar → Profiller → Genel ayarlar → Görünüm → Harita yönlendirme* aracılığıyla veya [Pusula düğmesine](../widgets/map-buttons.md#compass-tapping-behavior) iki kez dokunarak etkinleştirebilirsiniz. Yönlendirme hakkında daha fazla bilgi için [buraya](../widgets/nav-widgets.md#bearing-widget) bakın.


## Harita Eğimi ve Ufuk {#map-tilt-and-horizon}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Eğim android 1](@site/static/img/map/tilt_horizon_andr_1.png)  ![Eğim android 2](@site/static/img/map/tilt_horizon_andr_2.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

![Eğim ios 1](@site/static/img/map/tilt_horizon_ios_1.png) ![Eğim ios 2](@site/static/img/map/tilt_horizon_ios_2.png)  
</TabItem>

</Tabs>  

Yeni harita [oluşturma motoru](../personal/global-settings.md#map-rendering-engine) ile [kamera eğimini](../plugins/development.md#camera-tilt) 90 (eğimsiz) dereceden 10 dereceye kadar değiştirebilirsiniz. Yaklaşık olarak 20-22 dereceden daha az bir harita eğiminde (bu parametre yakınlaştırma seviyesine bağlıdır), hayali ufuk çizgisi görünür hale gelir. Gerçek olandan farklı olarak, program ufku her zaman düzdür.

Ufkun altında, sözde *pus* veya *sis* görebilirsiniz. Haritanın bu alanı gri renkle doldurulur, sadece birkaç harita detayı gözlemlenebilir.
Sis kullanımı gereklidir, çünkü haritadaki uzak nesnelerin gösterimi önemli hesaplama kaynakları gerektirir ve küçük görüş açılarında harita [bozulmaları](../plugins/development.md#comparison-with-a-satellite-imagery) nedeniyle her zaman haklı değildir. Bu nedenle OsmAnd haritasındaki görünür mesafe şu anda 35 döşeme ile sınırlıdır.

:::info
Harita eğimi, ekrana iki parmakla uzun dokunup yukarı/aşağı hareket ettirilerek değiştirilebilir. Ayrıca ekranın sağ alt köşesindeki [Konumum](#my-location-and-zoom) simgesine dokunarak da eğimi değiştirebilirsiniz (yalnızca 45 ve 90 derecelik konumlar mevcuttur).
Eski [harita oluşturma motoru](../personal/global-settings.md#map-rendering-engine) (sürüm 1) açıkken Kamera eğimini değiştiremezsiniz.
:::


## Dokunmatik Ekran Kilidi {#touch-screen-lock}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Hızlı eylem düğmesi Dokunmatik Ekran Kilidi Android](@site/static/img/widgets/qa_touch_lock_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Hızlı eylem düğmesi Dokunmatik Ekran Kilidi iOS](@site/static/img/widgets/qa_touch_lock_ios.png)

</TabItem>

</Tabs>

Navigasyon sırasında yanlışlıkla dokunmaları önlemek için **Dokunmatik Ekran Kilidi** özelliğini kullanın. Bu, bisiklet sürme veya yürüyüş gibi etkinlikler için özellikle yararlıdır, çünkü istenmeyen dokunuşlar rotanızı bozabilir.

**Kilidi Açma**.
Ekrandaki düğmeye dokunun veya kilit etkinleştirilmişse, harici bir düğme (örn. Ses Kısma) aracılığıyla, harici düğmeye basın ve ekrandaki düğmeye dokunun.

**Kurulum**.

- *Menü → Ekranı Yapılandır → Özel düğmeler* bölümüne gidin.
- *+ → Eylem Ekle → Arayüz → Dokunmatik Ekran Kilidi* öğesini seçin.

Ekranı kilitlerken veya kilidini açarken net ekran mesajları size rehberlik edecektir.


## Ayarlar {#settings}

### Ek Pusula Ayarları {#extra-compass-settings}

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> Haritanın dönüşünü daha yavaş bir dönüş animasyonuyla yumuşatır, ancak bu 1 saniyeden fazla olmayan hafif bir gecikme yaratır.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> Haritanın dönüşünü daha yavaş bir dönüş animasyonuyla yumuşatır, ancak bu 1 saniyeden fazla olmayan hafif bir gecikme yaratır.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### Animasyon Yok {#no-animations}

<InfoAndroidOnly/>  

Hareketler ve düğmeler dahil olmak üzere harita etkileşimleri sırasında tüm harita animasyonlarını devre dışı bırakabilirsiniz.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*


### Kendi Konumunu Canlandır {#animate-own-position}

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  
**iOS**: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,routing_settings_2,animate_my_location"/>*  

Hareket halindeyken *[Konumum](../personal/profiles/#profile-appearance)* simgesine göre yumuşak bir harita kaydırma efekti oluşturur. Efekt, gerçek zemine göre yaklaşık 1 saniyelik hafif bir gecikme yaratır. Bunun etkinleştirilmesinin bazı durumlarda belirgin gecikme sorunları yarattığı bildirilmiştir, bu tür sorunlar ortaya çıkarsa devre dışı bırakın.


## Harici Giriş Cihazları {#external-input-devices}

Harici giriş cihazı düğmeleri, harita ve OsmAnd uygulama arayüzü ile etkileşim kurmak için kullanışlı ve verimli bir yol sağlar. **Bluetooth veya diğer klavye türleri**, **araç navigasyon cihazlarındaki özel düğmeler** veya [WunderLINQ](https://blackboxembedded.com/) ve [Parrot](https://www.parrot.com/en) kontrolörleri gibi harici cihazlarda bulunurlar.

Harici giriş cihazlarındaki düğmelerin ana işlevlerinden biri, haritayı yakınlaştırmak ve uzaklaştırmaktır. Ayrıca, ekrana dokunmak ve hareket etmek zorunda kalmadan haritada gezinmenizi ve yönünü değiştirmenizi sağlarlar. Harici giriş cihazlarındaki düğmeler, *Ana Menü*'yü açmak gibi birçok başka işlevi de destekler.

:::note
Klavye, *Harici giriş cihazları* seçeneği kapatıldığında ve *Yok* seçildiğinde bile işlevsel kalır.
:::

### Önceden Yapılandırılmış Giriş Cihazı {#preconfigured-input-device}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![Harici cihazlar](@site/static/img/map/external_menu_android.png) ![Harici cihazlar](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![Harici cihazlar](@site/static/img/map/external_types_ios.png)

</TabItem>

</Tabs>  

Harici bir giriş cihazının ayarlarına erişmek için bu özelliği etkinleştirmeniz gerekir.

- Ana *Menü → Ayarlar →* *Profil → Genel ayarlar → Diğer → Harici giriş cihazları* öğesini seçin ve *Etkin* olarak değiştirin.

- OsmAnd tarafından desteklenen cihazlardan birini listedeki *Tür* öğesine dokunarak seçin:
    **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*yalnızca Android*), veya [**kendi türünüzü**](#custom-input-device-type) oluşturun (*yalnızca Android*).

- Her harici giriş cihazı türü için farklı bir **tanımlanmış eylem-tuş paketi** ataması vardır. Eylemlerin ve tuşların listesini görmek için *<Translate android="true" ids="key_assignments"/>* öğesine dokunun. Tuş tablosu aşağıda gösterilmiştir.

- Harici giriş cihazı eylemleri hakkında daha fazla bilgiyi GitHub'da [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82) paketinde okuyabilirsiniz.

| Tuş | Cihaz | Eylem |
|:---------|:---------------|:---------------|
|**C**| *Klavye* | Taşı - [Konumuma](#my-location-and-zoom) |
|**D**| *Klavye* | Değiştir - [Harita yönlendirmesi](#map-orientation-modes) |
|**N**| *Klavye* | Göster / Gizle - Navigasyon görünümü |
|**S**| *Klavye* | Göster / Gizle - [Arama görünümü](../search/index.md) |
|**P**| *Klavye* | Değiştir - Uygulama profilini sonraki |
|**O**| *Klavye* | Değiştir - Uygulama profilini önceki |
|**&#8593;**| *Klavye* | Taşı - Haritayı yukarı |
|**&#8595;**| *Klavye* | Taşı - Haritayı aşağı |
|**&#8592;**| *Klavye* | Taşı - Haritayı sola |
|**&#8594;**| *Klavye* | Taşı - Haritayı sağa |
|**&#43;** **=**| *Klavye* | Harita - [Yakınlaştır](#my-location-and-zoom) |
|**&#8722;**| *Klavye* | Harita - [Uzaklaştır](#my-location-and-zoom) |
|**Geri tuşuna bas**| *Klavye* | Gezin - Önceki ekran |
|**&#8595;**| *Wunderlinq* | Harita - [Uzaklaştır](#my-location-and-zoom) |
|**&#8593;**| *Wunderlinq* | Harita - [Yakınlaştır](#my-location-and-zoom) |
| **ESC** | *Wunderlinq* | WunderLINQ Veri Izgarasını Aç |
| **M** <br/> (*eski Android*) | *Klavye* | Göster / Gizle - [Yan menü](../start-with/main-menu.md#main-menu-side-menu) |
| **Joystick'e bas** <br/> (*eski Android*) | *Klavye* | Taşı - [Konumuma](#my-location-and-zoom) |
| **Medya düğmesi** <br/> (*yalnızca Android*)| *Klavye* | Göster / Gizle - [AV notları](../plugins/audio-video-notes.md#manage-a-single-note) |
| **&#8592;** <br/> (*yalnızca Android*)| *Parrot* | Harita - [Uzaklaştır](#my-location-and-zoom) |
| **&#8594;** <br/> (*yalnızca Android*) | *Parrot* | Harita - [Yakınlaştır](#my-location-and-zoom) |


### Özel Giriş Cihazı Türü {#custom-input-device-type}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Harici cihazlar](@site/static/img/map/external_mypilot_android.png)  ![Harici cihazlar](@site/static/img/map/external_mypilot2_android.png)

Harici bir giriş cihazı (klavye, joystick veya kontrolör gibi) için tuş atamak istiyorsanız, bir cihaz türü oluşturmanız gerekir: [Harici Giriş Cihazı](#external-input-devices) ayarlarına gidin, listeden **Tür**'ü seçin, &nbsp;"**＋**"&nbsp; öğesine dokunun ve bir ad girin. Her türün aşağıdaki seçenekleri içeren bir menüsü vardır: ***Yeniden Adlandır, Çoğalt*** ve ***Kaldır***.

### Eylem ve Tuş Atamaları Ekle {#add-action--key-asssigments}

![Harici cihazlar](@site/static/img/map/external_custom_4_andr.png)  ![Harici cihazlar](@site/static/img/map/external_custom_3_andr.png)

Özel bir giriş türü oluşturduktan sonra, gerekli eylemleri tuşlara atayabilirsiniz. Hızlı Eylem widget'ından geniş bir [eylem türü](../widgets/quick-action.md#action-types) yelpazesi mevcuttur.

- Bir cihaz türü seçin, ardından **Tuş atamaları** öğesine dokunun.
- Ekranın sağ alt köşesindeki ***Ekle*** düğmesine (&nbsp;"**＋**"&nbsp;) dokunun.
- Gerekli eylemi seçin, ardından ***Tuş ekle*** alanına dokunun ve eyleme atamak için cihazınızdaki düğmeye dokunun.

:::note

- Atadığınız düğme başka bir eylem için zaten kullanılıyorsa, düğmeyi yeniden atama veya atamayı iptal etme seçeneğiyle bir bildirim alırsınız.
- Daha sonra eylemleri ve tuş atamalarını değiştirebilir veya zaten oluşturulmuş eylemler için başka eylemler ekleyebilirsiniz, sadece Tuş atamaları listesinden bir öğe seçin.

:::

### Tuş atamasını sil {#delete-key-assignment}

![Harici cihazlar](@site/static/img/map/external_custom_1_andr.png)

Ekranın sağ üst köşesindeki **Düzenle düğmesini** (*kalem şeklinde*) kullanarak birden fazla gereksiz eylemi aynı anda silebilirsiniz:

- Öğe alanındaki &nbsp;"**−**"&nbsp; düğmesiyle eylem başına ***bir eylemi kaldırın***.
- *Adı düzenle*'nin yanındaki ekranın sağ üst köşesindeki düğmeye dokunarak seçilen tür için ***tüm tuş atamalarını kaldırın***.


## İlgili Makaleler {#related-articles}

- [Harita Bağlam menüsü](./map-context-menu.md)
- [Haritayı Yapılandır](./configure-map-menu.md)
- [Vektör haritalar (Harita stilleri)](./vector-maps.md)
- [Raster Haritalar (Çevrimiçi / Çevrimdışı)](./raster-maps.md)
- [Haritadaki noktalar](./point-layers-on-map.md)
- [İzler ve Rotalar](./tracks/index.md)
- [İzler Bağlam menüsü](./tracks/track-context-menu.md)
- [Toplu taşıma](./public-transport.md)