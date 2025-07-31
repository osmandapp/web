---
source-hash: c714e52890d474392987e42babe6eed754ad1dbbaa5e4c8fe091171e272426fe
sidebar_position: 5
title: İz Görünümü
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

**İz Görünümü** özelliği, kullanıcıların izlerin haritada nasıl görüntülendiğini özelleştirmesine olanak tanır. Bu, renk, genişlik, yön göstergeleri ve diğer görsel öğelerin ayarlanmasını içerir. İz görünümünü özelleştirmek, birden çok izi ayırt etmeye, belirli rotaları vurgulamaya ve harita okunabilirliğini artırmaya yardımcı olur.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Track Appearance overview Android](@site/static/img/map/track-appear-and-1.png)  ![Track menu Appearance Android](@site/static/img/map/track_appearence_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Appearance iOS](@site/static/img/map/track_appearence_1_ios.png) ![Track menu Appearance iOS](@site/static/img/map/track_appearence_2_ios.png)  

</TabItem>

</Tabs>


## Menüye Erişim {#access-to-the-menu}

İz görünümünü aşağıdaki yöntemlerden birini kullanarak değiştirebilirsiniz:

- **Yerlerim'den**. *Menü → Yerlerim → İzler*'i açın, bir iz seçin, [iz bağlam menüsündeki](../../map/tracks/track-context-menu.md#overview) *Görünüm simgesine* dokunun.
- **Haritadan**. Doğrudan harita üzerinde bir ize dokunun, ardından *Genel Bakış bölümündeki* *Görünüm simgesine* dokunun.
- **İz kaydından**. Mevcut kaydedilen izin görünümünü [iz kaydı bağlam menüsü](../../plugins/trip-recording.md#сurrent-track-recording) aracılığıyla değiştirin.  
- **Haritayı Yapılandır menüsünden**. *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> →* **&#8942;** *→ <Translate android="true" ids="change_appearance"/>* öğesine gidin.


## İz Görünümü Ayarları {#track-appearance-settings}

### Renk {#color}

:::tip purchases
Bazı ayarları yalnızca *OsmAnd Pro* ile kullanabilirsiniz. <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">Android</a> ve <a href="https://osmand.net/docs/user/purchases/ios#free-and-paid-features">iOS</a> Ücretsiz ve Ücretli özellikler.
:::

![Appearance](@site/static/img/map/appearance_color_andr.png)

İz rengini manuel olarak ayarlayabilir veya **renk tabanlı veri görselleştirmesi** (örn. hız, rakım, eğim) kullanabilirsiniz. Bir izde belirli veriler eksikse, OsmAnd eksik bölümleri gri renkte gösterir.

**Mevcut Renk Seçenekleri:**

- **Ücretsiz ayarlar**: *<Translate android="true" ids="track_coloring_solid"/> renk*, *<Translate android="true" ids="shared_string_speed"/>* (kaydedilmişse) ve *<Translate android="true" ids="altitude"/>* (kaydedilmişse).

    ![Track menu Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_android.png)  ![Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png)  

- [Pro özelliği](../../purchases/index.md)): *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>*.  

Rota çizgisi görünümünü özelleştirme hakkında daha fazla bilgi için bkz. [Navigasyon sırasında harita ekranı](../../navigation/guidance/map-during-navigation.md#color) ve özel renk seçme ve oluşturma hakkında bilgi için bkz. [Renk şemaları](../../personal/color-palette-schemes.md#routes).


### Genişlik {#width}

![Track menu Appearance Track Thickness Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)   ![Track Appearance](@site/static/img/map/track_appearance_width_andr.png)  

Uygulamanın çeşitli menülerinde iz görünümünü özelleştirebilirsiniz:

- [*İz → Görünüm*](../../personal/tracks/manage-tracks.md#track-folder).
- [*Navigasyon ayarları → Rota çizgisini özelleştir*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*Yerlerim → İzler sekmesi → herhangi bir klasör → Varsayılan görünüm*](../../personal/tracks/manage-tracks.md#track-folder).

Harita üzerinde görünürlüğü artırmak için iz genişliğini ayarlayın.

- **Ön ayarlı seçenekler**: **İnce, Orta** ve **Kalın**.

- **Özel genişlik**: Bir kaydırıcı kullanarak 1 ila 24 piksel arasında ayarlanabilir.

- **Profile dayalı genişlik**: *Navigasyon ayarları → [Rota Çizgisini Özelleştir](../../navigation/guidance/navigation-settings.md#customize-route-line)* aracılığıyla ayarlanabilir.


### Bölme Aralığı {#split-interval}

![Track menu Appearance Split interval](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Split interval](@site/static/img/map/track_appearance_menu_split_interval_ios.png)  

İzi **mesafeye veya zamana göre** bölmek isteyip istemediğinizi seçin.

### Yön Okları {#direction-arrows}

![Track menu Appearance direction arrows Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)  

Hareket yönünü belirtmek için iz boyunca **ok işaretleri** ekler.

### Başlangıç ve Bitiş Simgeleri {#start-and-finish-icons}

![Track menu Appearance start and finish icons Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)  

İz segmentleri için **başlangıç ve bitiş simgelerini** gösterip göstermeyeceğinizi seçmenizi sağlar.

### Boşlukları Birleştir {#join-gaps}

GPS kaybı veya kaydın duraklaması nedeniyle kesintiye uğrayan **iz segmentlerini** birleştirir. **<Translate android="true" ids="join_segments"/>** (*Android*) veya **<Translate ios="true" ids="gpx_join_gaps"/>** (*iOS*) özelliği, seçilen GPX izindeki bu boşlukları düz çizgiler kullanarak birleştirmenizi sağlar.

### Orijinale Sıfırla {#reset-to-original}

Tüm **iz görünümü ayarlarını** varsayılan değerlerine geri yükler.


## 3D İz {#3d-track}

:::info Paid feature
**3D İz**, [iOS](../../purchases/ios.md#pro-features) ve [Android](../../purchases/android.md#pro-features) için **OsmAnd Pro** ücretli bir özelliktir <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_ios.png)

</TabItem>

</Tabs>

**3D İz** özelliği, yükseklik verilerini standart 2D izlere entegre ederek üç boyutlu bir görselleştirme oluşturur. Bu işlevsellik, izi araziye göre hassas bir şekilde analiz etmeyi sağlayan derinlik artırılmış bir temsil oluşturur. Yükseklik ayrıntılarını dahil ederek, 3D iz, rotanın topografyası ve coğrafi bağlamı hakkında daha kapsamlı bir görünüm sunar.

### 3D İz Ayarları {#3d-track-settings}

**Duvar yüksekliği**  
3D bir izi, iz içindeki rakım ve diğer mevcut verilere göre veya sabit rakıma göre görselleştirebilirsiniz.

- **<Translate android="true" ids="visualized_by"/>**: &nbsp;*Rakım*, &nbsp;*Hız*, &nbsp;*Sabit Yükseklik*. 3D Sensör verileri: &nbsp;*Kalp Atış Hızı*, &nbsp;*Bisiklet Kadansı*, &nbsp;*Bisiklet Gücü*, &nbsp;*Sıcaklık*, &nbsp;*Bisiklet Hızı*.

- **<Translate android="true" ids="vertical_exaggeration"/>**. *Rakım* veya *Hız* ile görselleştirilirse, 3D iz için daha belirgin bir görselleştirme elde etmek için 3D verileri *Yok* ile *x3.0* aralığında ölçekleyebilirsiniz.

- **<Translate android="true" ids="wall_height"/>**. *Sabit Yükseklik* ile görselleştirilirse, 3D iz için sabit yüksekliği, harita üzerindeki yüksekliğini *Yok* ile *2000 m* aralığında tanımlayarak ayarlayın.

- [3D Kabartma](../../plugins/topography.md#3d-relief) ile birleştirebilirsiniz. 3D verinin kaynağı rakım değilse, 3D temsil, kabartma rakımı ve hız veya kalp atış hızı gibi seçilen verilerin bir kombinasyonu olacaktır.

**<Translate android="true" ids="wall_color"/>**  
Gradyanlar veya veri tabanlı görselleştirme kullanarak **3D iz rengini** özelleştirir.  
Seçenekler: *Yok*, &nbsp;*Düz*, &nbsp;*Aşağı Gradyan*, &nbsp;*Yukarı Gradyan*, &nbsp;*Rakım*, &nbsp;*Eğim*, &nbsp;*Hız*.

**<Translate android="true" ids="track_line"/>**  
3D izin üstüne veya altına [vurgulanmış bir çizgi](#color) ekler.  
Seçenekler: *Üst*, &nbsp;*Alt*, &nbsp;*Üst ve alt*.

> **NOT**: *Uygulamanın **Android sürümü**, 3D iz görselleştirmesini kullanmak için harita işleme motoru [Sürüm 2 (OpenGL)](../../personal/global-settings.md#map-rendering-engine)'nin etkinleştirilmesini gerektirir.*


### Kullanım Durumları {#use-cases}

3D iz özelliği, uçuş yolunuzu görselleştirmenin daha derinlemesine bilgiler sunabileceği yamaç paraşütü gibi aktiviteler için oldukça faydalıdır. İzi 3D olarak işleyerek, analiz için değerli görsel bilgiler elde etmek üzere **Duvar Yüksekliği** ve **Duvar Rengi** gibi özelliklerden yararlanabilirsiniz.

1. **Hız ile 3D Görselleştirme**.  
    Yaygın bir kullanım durumu, hız varyasyonlarını görselleştirmek için 3D izleri kullanmaktır. Bu, iz üzerinde yavaşladığınız veya hızlandığınız belirli bölümleri belirlemenizi sağlar.  

    Eğime dayalı Duvar Rengi ile, arazinin, özellikle tepelerin ve eğimlerin hızınızı nasıl etkilediğini gözlemleyebilirsiniz. Hız ve eğim görselleştirmesinin bu kombinasyonu, aktivite boyunca performansın ayrıntılı bir şekilde anlaşılmasını sağlar.

2. **3D Kabartma ile Kalp Sensörü Görselleştirme**.  
    Başka bir bilgilendirici uygulama, kalp atış hızı sensörü verilerini 3D kabartma haritalarıyla birleştirmektir. Bu, kalp atış hızı dalgalanmalarını doğrudan araziye eşlemenizi sağlar ve rakım değişikliklerinin fiziksel çabanızı nasıl etkilemiş olabileceğine dair kapsamlı bir görünüm sunar.  

    Rakımı abartan 3D kabartma özelliği, 3D iz görünümünden bağımsız çalışır. Kalp atış hızı ve arazi yüksekliği arasındaki korelasyonu daha iyi anlamak için iki dikey abartma parametresi ayarlanabilir.

3. **Düz bir dünya görünümünde İz yüksekliği ve Eğim renk çizgisi görselleştirme.**  
    Rakım verilerini görselleştirirken, GPS hataları gibi sorunları önlemek için düz bir dünya görünümü kullanılması önerilir, bu hatalar iz bölümlerinin yeraltında görünmesine neden olabilir.  

    Bu senaryoda, eğim değişiklikleri iz çizgisi boyunca ayrı ayrı görselleştirilebilirken, Duvar Rengi rakımı temsil etmek için kullanılır. Bu yöntem, potansiyel veri yanlışlıklarına rağmen, eğim ve yüksekliğin net ve doğru bir görselleştirmesini almanızı sağlar.

## Birden Çok İz İçin Görünümü Değiştirme {#change-appearance-for-multiple-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Appearance Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_1_andr.png)  ![Appearance Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Change Appearance](@site/static/img/map/tracks_change_appear_3_ios.png)  ![Change Appearance](@site/static/img/map/tracks_change_appear_2_ios.png)

</TabItem>

</Tabs>  

[İzler](../../personal/tracks/manage-tracks.md) sekmesi, şimdiye kadar kaydedilen, oluşturulan veya içe aktarılan tüm izleri otomatik olarak görüntüler. Bunlar klasöre göre düzenlenir veya altlarında bir liste olarak görüntülenir.  

*Yerlerim → İzler*'de birden çok iz görünümünü değiştirin:

- **Varsayılan görünümü değiştir** - Bir [klasördeki](../../personal/tracks/manage-tracks.md#track-folder) tüm izlere ayarları uygular.
- **Orijinale sıfırla** - Bireysel iz ayarlarını geri yükler.

- [Seçim modu](../../personal/tracks/manage-tracks.md#selection-mode) - Seçilen klasördeki belirli izlerin veya İzler sekmesindeki tüm listenin görünümünü değiştirir.
    - İzler sekmesinin sağ üst köşesindeki *üç nokta menüsüne* dokunun ve *Seç*'e dokunun.
    - Ardından ekranın üst kısmındaki *üç nokta menüsüne* dokunun ve *Görünümü Değiştir*'i seçin.  

Toplu görünüm özelleştirme seçenekleri:

- **Yön okları** - [Hareket göstergeleri](#direction-arrows) ekler.  
    Durumlar: *Değişmedi*, &nbsp;*Orijinal*, &nbsp;*Açık*, &nbsp;*Kapalı*.

- **Başlangıç ve bitiş simgelerini göster** - İz başlangıç ve bitiş noktaları için [işaretçileri görüntüler](#start-and-finish-icons).  
    Durumlar: *Değişmedi*, &nbsp;*Orijinal*, &nbsp;*Açık*, &nbsp;*Kapalı*.

- **Renk** – Manuel veya veri tabanlı [renklendirme](#color) uygulayın.

- **Genişlik** – Ön ayarlar veya manuel olarak [iz çizgisi genişliğini](#width) ayarlayın.

- **Bölme aralığı** – Mesafe / zaman işaretçileri için [aralığı ayarlayın](#split-interval).  
    Durumlar: *Değişmedi*, &nbsp;*Orijinal*, &nbsp;*Seç*: *Zaman* veya *Mesafe*.

Orijinal ve değişmedi:

- **Orijinal** - İz dosyasındaki orijinal parametreleri geri yükler.

- **Değişmedi** - Düzenleme oturumu sırasında mevcut ayarları korur.


## GPX Dosyalarındaki İz Renkleri {#track-colors-in-gpx-files}

OsmAnd, bir `<trk>` öğesinin `<extensions>` bölümündeki `<osmand:color>` etiketini kullanarak GPX dosyalarında **özel iz renklerini** destekler. Bu, kullanıcıların tek tek izler için renkleri tanımlamasına olanak tanır, birden çok iz haritada görüntülendiğinde görsel farklılaşmayı artırır.

Bir iz için renk belirtmek için aşağıdaki formatı kullanın:  

```xml
<trk>
  <name>Example Track</name>
  <extensions>
    <osmand:color>#FF0000</osmand:color>
  </extensions>
</trk>
```

- `<osmand:color>` etiketi **onaltılık renk kodlarını** kabul eder (örn. kırmızı için `#FF0000`).
- Bir GPX dosyasında birden çok iz varsa, her iz kendi `<osmand:color>` etiketine sahip olabilir.


**OsmAnd'daki Davranış:**

1. **Varsayılan renk ataması**:  

    - Bir **GPX izi tek bir iz olarak içe aktarıldığında** (***Tek iz olarak içe aktar*** seçeneği), tüm iz **varsayılan GPX rengine** (kırmızı) atanır.  
    - OsmAnd **4.9.10 ve sonraki sürümlerinde**, bu sorun çözüldü; tek tek iz renkleri artık içe aktarıldığında korunuyor.

2. **Birleştirilmiş izler için tek renkli ekran:**  

    - İzler ***Segmentleri Birleştir*** kullanılarak **birleştirilirse**, ortaya çıkan iz **tek bir segmentli sürekli bir iz** olarak kabul edilir.
    - Birleştirilmiş izler için çok renkli gösterim **desteklenmez**.
    - Birleştirilmiş iz, tek tek iz segmentleri başlangıçta farklı renklere sahip olsa bile **ana GPX rengi** (varsayılan: kırmızı) kullanılarak görüntülenecektir.

3. **Görünüm ayarlarının önceliği:**  

    - OsmAnd şu anda **yalnızca tüm iz için renk ve genişlik ayarlarını** desteklemektedir.
    - Bu görünüm ayarları **üst düzey GPX uzantılarında** saklanır.
    - Bir renk veya genişlik **üst düzeyde ayarlanırsa** (GPX dosyasında veya OsmAnd'da manuel olarak), bu ayar tek tek iz segmentlerine atanan renklerden öncelikli olacaktır.

**Çok Renkli İzler İçin Geçici Çözüm:**

- **Birden çok iz için tek tek renkleri** korumak için, izleri birleştirmek yerine **ayrı ayrı içe aktarın**.

- İz renklerini **İz Görünümü Ayarları**'nda manuel olarak ayarlayın:

  - İzi OsmAnd'da açın.
  - **Bağlam Menüsü**'nü açmak için ize dokunun.
  - **Görünüm**'ü seçin.
  - Tercih edilen rengi seçin.

- Bu, GPX dosyası başlangıçta farklı renklere sahip birden çok segment içerse bile her izin **amaçlanan renk temsilini** korumasını sağlar.


## İlgili Makaleler {#related-articles}

- [Harita Bağlam menüsü](../map-context-menu.md)
- [Haritayı Yapılandır](../configure-map-menu.md)
- [Haritadaki noktalar](../point-layers-on-map.md)
- [İzler](../tracks/index.md)
- [İz Bağlam menüsü](../tracks/track-context-menu.md)
- [Gezi Kaydı](../../plugins/trip-recording.md)

> *Son güncelleme: Şubat 2025*