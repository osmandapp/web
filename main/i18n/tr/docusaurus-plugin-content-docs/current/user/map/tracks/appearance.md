---
source-hash: 90a0b74b4490473745395b99a2752c49185e30cca6fc93a62ca20659393e7eed
sidebar_position: 5
title:  İz Görünümü
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

**İz Görünümü** özelliği, kullanıcıların izlerin haritada nasıl görüntülendiğini özelleştirmesine olanak tanır. Buna renk, genişlik, yön göstergeleri ve diğer görsel öğelerin ayarlanması da dahildir. İz görünümünü özelleştirmek, birden çok izi ayırt etmeye, belirli rotaları vurgulamaya ve harita okunabilirliğini iyileştirmeye yardımcı olur.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![İz Görünümü genel bakış Android](@site/static/img/map/track-appear-and-1.png)  ![İz menüsü Görünüm Android](@site/static/img/map/track_appearence_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![İz menüsü Görünüm iOS](@site/static/img/map/track_appearence_1_ios.png) ![İz menüsü Görünüm iOS](@site/static/img/map/track_appearence_2_ios.png)  

</TabItem>

</Tabs>


## Menüye Erişim {#access-to-the-menu}

İz görünümünü aşağıdaki yöntemlerden birini kullanarak değiştirebilirsiniz:

- **Yerlerim'den**. *Menü → Yerlerim → İzler*'i açın, bir iz seçin, [iz bağlam menüsündeki](../../map/tracks/track-context-menu.md#overview) *Görünüm simgesine* dokunun.
- **Haritadan**. Doğrudan haritadaki bir ize dokunun, ardından *Genel Bakış bölümündeki* *Görünüm simgesine* dokunun.
- **İz kaydından**. Mevcut kaydedilen izin görünümünü [iz kaydı bağlam menüsü](../../plugins/trip-recording.md#сurrent-track-recording) aracılığıyla değiştirin.  
- **Haritayı Yapılandır menüsünden**. Görüntülenen izler için *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> →* **&#8942;** *→ <Translate android="true" ids="change_appearance"/>*'a gidin.


## İz Görünümü Ayarları {#track-appearance-settings}

### Renk {#color}

:::tip purchases
Bazı ayarları yalnızca *OsmAnd Pro* ile kullanabilirsiniz. <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">Android</a> ve <a href="https://osmand.net/docs/user/purchases/ios#free-and-paid-features">iOS</a> Ücretsiz ve Ücretli özellikler.
:::

![Görünüm](@site/static/img/map/appearance_color_andr.png)

İz rengini manuel olarak ayarlayabilir veya **renk tabanlı veri görselleştirmesini** (örn. hız, rakım, eğim) kullanabilirsiniz. Bir izde belirli veriler eksikse, OsmAnd eksik bölümleri gri renkte görüntüler.

**Mevcut Renk Seçenekleri:**

- **Ücretsiz ayarlar**: *<Translate android="true" ids="track_coloring_solid"/> renk*, *<Translate android="true" ids="shared_string_speed"/>* (kaydedilmişse) ve *<Translate android="true" ids="altitude"/>* (kaydedilmişse).

    ![İz menüsü Görünüm İz rengi Android](@site/static/img/map/track_appearance_menu_track_color_android.png)  ![Görünüm İz rengi Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png)  

- [Pro özellik](../../purchases/index.md)): *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>*.  

Rota çizgisi görünümünü özelleştirme hakkında daha fazla bilgi için [Navigasyon sırasında harita ekranı](../../navigation/guidance/map-during-navigation.md#color) ve özel bir renk seçme ve oluşturma hakkında bilgi için [Renk şemaları](../../personal/color-palette-schemes.md#routes) bölümüne bakın.


### Genişlik {#width}

![İz menüsü Görünüm İz Kalınlığı Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)   ![İz Görünümü](@site/static/img/map/track_appearance_width_andr.png)  

Uygulamanın çeşitli menülerinde izin görünümünü özelleştirebilirsiniz:

- [*İz → Görünüm*](../../personal/tracks/manage-tracks.md#track-folder).
- [*Navigasyon ayarları → Rota çizgisini özelleştir*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*Yerlerim → İzler sekmesi → herhangi bir klasör → Varsayılan görünüm*](../../personal/tracks/manage-tracks.md#track-folder).

Haritada görünürlüğü artırmak için iz genişliğini ayarlayın.

- **Ön ayar seçenekleri**: **İnce, Orta** ve **Kalın**.

- **Özel genişlik**: Bir kaydırıcı kullanarak 1 ila 24 piksel arasında ayarlanabilir.

- **Profile dayalı genişlik**: *Navigasyon ayarları → [Rota Çizgisini Özelleştir](../../navigation/guidance/navigation-settings.md#customize-route-line)* aracılığıyla ayarlanabilir.


### Bölme Aralığı {#split-interval}

![İz menüsü Görünüm Bölme aralığı](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Bölme aralığı](@site/static/img/map/track_appearance_menu_split_interval_ios.png)  

İzdeki aralığı **mesafeye göre mi yoksa zamana göre mi** böleceğinizi seçin.

### Yön Okları {#direction-arrows}

![İz menüsü Görünüm yön okları Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)  

Hareket yönünü belirtmek için iz boyunca **ok işaretleri** ekler.

### Başlangıç ve Bitiş Simgeleri {#start-and-finish-icons}

![İz menüsü Görünüm başlangıç ve bitiş simgeleri Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)  

İz segmentleri için **başlangıç ve bitiş simgelerini** gösterip göstermeyeceğinizi seçmenizi sağlar.

### Boşlukları Birleştir {#join-gaps}

GPS kaybı veya kaydın duraklatılması nedeniyle kesintiye uğrayan **iz segmentlerini** birleştirir. **<Translate android="true" ids="join_segments"/>** (*Android*) veya **<Translate ios="true" ids="gpx_join_gaps"/>** (*iOS*) özelliği, seçilen GPX izindeki bu boşlukları düz çizgiler kullanarak birleştirmenize olanak tanır.

### Orijinale Sıfırla {#reset-to-original}

Tüm **iz görünümü ayarlarını** varsayılan değerlerine geri yükler.


## 3B İz {#3d-track}

:::info Ücretli özellik
**3B İz**, [iOS](../../purchases/ios.md#pro-features) ve [Android](../../purchases/android.md#pro-features) için **OsmAnd Pro** ücretli bir özelliktir <ProFeature />.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![İz menüsü Görünüm 3B görselleştirme](@site/static/img/map/3d_track_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![İz menüsü Görünüm 3B görselleştirme](@site/static/img/map/3d_track_appearance_ios.png)

</TabItem>

</Tabs>

**3B İz** özelliği, yükseklik verilerini standart 2B izlere entegre ederek üç boyutlu bir görselleştirme oluşturur. Bu işlevsellik, izi araziye göre hassas bir şekilde analiz etmeyi sağlayan derinlik artırılmış bir temsil oluşturur. Yükseklik detaylarını dahil ederek, 3B iz, rotanın topografyası ve coğrafi bağlamı hakkında daha kapsamlı bir görünüm sunar.

### 3B İz Ayarları {#3d-track-settings}

**Duvar yüksekliği**  
Bir 3B izi, iz içindeki rakım ve diğer mevcut verilere göre veya sabit rakıma göre görselleştirebilirsiniz.

- **<Translate android="true" ids="visualized_by"/>**: &nbsp;*Rakım*, &nbsp;*Hız*, &nbsp;*Sabit Yükseklik*. 3B Sensör verileri: &nbsp;*Kalp Atış Hızı*, &nbsp;*Bisiklet Kadansı*, &nbsp;*Bisiklet Gücü*, &nbsp;*Sıcaklık*, &nbsp;*Bisiklet Hızı*.

- **<Translate android="true" ids="vertical_exaggeration"/>**. *Rakım* veya *Hız* ile görselleştirilirse, 3B iz için daha belirgin bir görselleştirme elde etmek üzere 3B verileri *Yok* ile *x3.0* aralığında ölçekleyebilirsiniz.

- **<Translate android="true" ids="wall_height"/>**. *Sabit Yükseklik* ile görselleştirilirse, 3B iz için haritadaki yüksekliğini *Yok* ile *2000 m* aralığında tanımlayarak sabit yüksekliği ayarlayın.

- [3B Rölyef](../../plugins/topography.md#3d-relief) ile birleştirebilirsiniz. 3B verilerin kaynağı rakım değilse, 3B temsil, rölyef rakımı ve hız veya kalp atış hızı gibi seçilen verilerin bir kombinasyonu olacaktır.

**<Translate android="true" ids="wall_color"/>**  
**3B iz rengini** gradyanlar veya veri tabanlı görselleştirme kullanarak özelleştirir.  
Seçenekler: *Yok*, &nbsp;*Düz*, &nbsp;*Aşağı Gradyan*, &nbsp;*Yukarı Gradyan*, &nbsp;*Rakım*, &nbsp;*Eğim*, &nbsp;*Hız*.

**<Translate android="true" ids="track_line"/>**  
3B izin üstüne veya altına [vurgulanmış bir çizgi](#color) ekler.  
Seçenekler: *Üst*, &nbsp;*Alt*, &nbsp;*Üst ve alt*.

> **NOT**: *Uygulamanın **Android sürümü**, 3B iz görselleştirmesini kullanmak için harita oluşturma motoru [Sürüm 2 (OpenGL)](../../personal/global-settings.md#map-rendering-engine)'nin etkinleştirilmesini gerektirir.*


### Kullanım Alanları {#use-cases}

3B iz özelliği, uçuş yolunuzu görselleştirmenin daha derin bilgiler sunabileceği yamaç paraşütü gibi aktiviteler için oldukça faydalıdır. İzi 3B olarak oluşturarak, analiz için değerli görsel bilgiler elde etmek üzere **Duvar Yüksekliği** ve **Duvar Rengi** gibi özelliklerden yararlanabilirsiniz.

1. **Hız ile 3B Görselleştirme**.  
    Yaygın bir kullanım alanı, hız değişimlerini görselleştirmek için 3B izleri kullanmaktır. Bu, izdeki yavaşladığınız veya hızlandığınız belirli bölümleri belirlemenizi sağlar.  

    Eğime dayalı Duvar Rengi ile, arazinin, özellikle tepelerin ve eğimlerin hızınızı nasıl etkilediğini gözlemleyebilirsiniz. Hız ve eğim görselleştirmesinin bu kombinasyonu, aktivite boyunca performansın ayrıntılı bir şekilde anlaşılmasını sağlar.

2. **Kalp sensörü ile 3B Rölyef Görselleştirme**.  
    Bir diğer faydalı uygulama, kalp atış hızı sensör verilerini 3B rölyef haritalarıyla birleştirmektir. Bu, kalp atış hızı dalgalanmalarını doğrudan araziye eşlemenizi sağlar ve rakım değişikliklerinin fiziksel çabanızı nasıl etkilemiş olabileceğine dair kapsamlı bir görünüm sunar.  

    Rakımı abartan 3B rölyef özelliği, 3B iz görünümünden bağımsız çalışır. Kalp atış hızı ile arazi yüksekliği arasındaki korelasyonu daha iyi anlamak için iki dikey abartma parametresi ayarlanabilir.

3. **Düz dünya görünümünde İz yüksekliği ve Eğim renk çizgisi görselleştirme.**  
    Rakım verilerini görselleştirirken, izlerin yeraltında görünmesine neden olabilecek GPS hataları gibi sorunlardan kaçınmak için düz dünya görünümünün kullanılması önerilir.  

    Bu senaryoda, eğim değişiklikleri iz çizgisi boyunca ayrı ayrı görselleştirilebilirken, Duvar Rengi rakımı temsil etmek için kullanılır. Bu yöntem, potansiyel veri yanlışlıklarına rağmen, eğim ve yüksekliğin net ve doğru bir görselleştirmesini almanızı sağlar.

## Birden Çok İz İçin Görünümü Değiştirme {#change-appearance-for-multiple-tracks}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Görünüm Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_1_andr.png)  ![Görünüm Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Görünümü Değiştir](@site/static/img/map/tracks_change_appear_3_ios.png)  ![Görünümü Değiştir](@site/static/img/map/tracks_change_appear_2_ios.png)

</TabItem>

</Tabs>  

[İzler](../../personal/tracks/manage-tracks.md) sekmesi, şimdiye kadar kaydedilen, oluşturulan veya içe aktarılan tüm izleri otomatik olarak görüntüler. Bunlar klasöre göre düzenlenir veya altlarında liste olarak görüntülenir.  

*Yerlerim → İzler*'de birden çok iz görünümünü değiştirin:

- **Varsayılan görünümü değiştir** - Bir [klasördeki](../../personal/tracks/manage-tracks.md#track-folder) tüm izlere ayarları uygular.
- **Orijinale sıfırla** - Bireysel iz ayarlarını geri yükler.

- [Seçim modu](../../personal/tracks/manage-tracks.md#selection-mode) - Seçilen klasördeki veya İzler sekmesindeki tüm listedeki belirli izlerin görünümünü değiştirir.
    - İzler sekmesinin sağ üst köşesindeki *üç nokta menüsüne* dokunun ve *Seç*'e dokunun.
    - Ardından ekranın üst kısmındaki *üç nokta menüsüne* dokunun ve *Görünümü Değiştir*'i seçin.  

Toplu görünüm özelleştirme seçenekleri:

- **Yön okları** - [Hareket göstergeleri](#direction-arrows) ekler.  
    Durumlar: *Değişmedi*, &nbsp;*Orijinal*, &nbsp;*Açık*, &nbsp;*Kapalı*.

- **Başlangıç ve bitiş simgelerini göster** - İz başlangıç ve bitiş noktaları için [işaretçileri görüntüler](#start-and-finish-icons).  
    Durumlar: *Değişmedi*, &nbsp;*Orijinal*, &nbsp;*Açık*, &nbsp;*Kapalı*.

- **Renk** – Manuel veya veri tabanlı [renklendirme](#color) uygulayın.

- **Genişlik** – Ön ayarları kullanarak veya manuel olarak [iz çizgisi genişliğini](#width) ayarlayın.

- **Bölme aralığı** – Mesafe / zaman işaretleyicileri için [aralığı ayarlayın](#split-interval).  
    Durumlar: *Değişmedi*, &nbsp;*Orijinal*, &nbsp;*Seç*: *Zaman* veya *Mesafe*.

Orijinal ve değişmemiş:

- **Orijinal** - İz dosyasındaki orijinal parametreleri geri yükler.

- **Değişmedi** - Düzenleme oturumu sırasında mevcut ayarları korur.


## GPX Dosyalarındaki İz Renkleri {#track-colors-in-gpx-files}

OsmAnd, bir `<trk>` öğesinin `<extensions>` bölümündeki `<osmand:color>` etiketini kullanarak GPX dosyalarında **özel iz renklerini** destekler. Bu, kullanıcıların tek tek izler için renkleri tanımlamasına olanak tanır ve haritada birden çok iz görüntülendiğinde görsel farklılaşmayı artırır.

Bir iz için renk belirtmek için aşağıdaki biçimi kullanın:  

```xml
<trk>
  <name>Örnek İz</name>
  <extensions>
    <osmand:color>#FF0000</osmand:color>
  </extensions>
</trk>
```

- `<osmand:color>` etiketi **onaltılık renk kodlarını** (örn. kırmızı için `#FF0000`) kabul eder.
- Bir GPX dosyasında birden çok iz varsa, her iz kendi `<osmand:color>` etiketine sahip olabilir.


**OsmAnd'daki Davranış:**

1. **Varsayılan renk ataması**:  

    - Bir **GPX izi tek bir iz olarak içe aktarıldığında** (***Tek iz olarak içe aktar*** seçeneği), tüm ize **varsayılan GPX rengi** (kırmızı) atanır.  
    - OsmAnd **4.9.10 ve sonraki sürümlerinde**, bu sorun çözülmüştür; bireysel iz renkleri artık içe aktarıldığında korunur.

2. **Birleştirilmiş izler için tek renkli görüntüleme:**  

    - İzler ***Segmentleri Birleştir*** kullanılarak **birleştirilirse**, ortaya çıkan iz **tek bir segmentli tek bir sürekli iz** olarak kabul edilir.
    - Birleştirilmiş izler için çok renkli gösterim **desteklenmez**.
    - Birleştirilmiş iz, bireysel iz segmentleri başlangıçta farklı renklere sahip olsa bile **ana GPX rengi** (varsayılan: kırmızı) kullanılarak görüntülenecektir.

3. **Görünüm ayarlarının önceliği:**  

    - OsmAnd şu anda **yalnızca tüm iz için renk ve genişlik ayarlarını** desteklemektedir.
    - Bu görünüm ayarları **üst düzey GPX uzantılarında** saklanır.
    - Bir renk veya genişlik **üst düzeyde ayarlanırsa** (GPX dosyasında veya OsmAnd'da manuel olarak), bu ayar tek tek iz segmentlerine atanan renklere göre öncelikli olacaktır.

**Çok Renkli İzler İçin Geçici Çözüm:**

- **Birden çok iz için bireysel renkleri** korumak için, izleri birleştirmek yerine **ayrı ayrı içe aktarın**.

- **İz Görünümü Ayarları**'nda iz renklerini manuel olarak ayarlayın:

  - OsmAnd'da izi açın.
  - **Bağlam Menüsü**'nü açmak için ize dokunun.
  - **Görünüm**'ü seçin.
  - Tercih edilen rengi seçin.

- Bu, GPX dosyası başlangıçta farklı renklerde birden çok segment içerse bile her izin **amaçlanan renk gösterimini** korumasını sağlar.


## İlgili Makaleler {#related-articles}

- [Harita Bağlam menüsü](../map-context-menu.md)
- [Haritayı Yapılandır](../configure-map-menu.md)
- [Haritadaki noktalar](../point-layers-on-map.md)
- [İzler](../tracks/index.md)
- [İzler Bağlam menüsü](../tracks/track-context-menu.md)
- [Gezi Kaydı](../../plugins/trip-recording.md)

> *Son güncelleme: Şubat 2025*