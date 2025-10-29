---
source-hash: 7ec189e5ebc7bca3eaaa66be6d97617ba61c06de602535da3e7881dac213769a
sidebar_position: 7
title: Deniz Haritası Görünümü
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Genel Bakış {#overview}

:::info Ücretli özellik
Deniz Haritası Görünümü eklentisi, OsmAnd uygulamasının [ücretli bir özelliğidir](../purchases/index.md).
:::

Deniz Haritası Görünümü, su üzerinde gezinmenize ve popüler rotaları, su yolunuzdaki engelleri, en yakın limanları, demirleme yerlerini ve diğer önemli yer işaretlerini öğrenmenize yardımcı olan okyanusların, denizlerin, kıyı bölgelerinin ve nehirlerin ayrıntılı bir grafik temsilidir.  

Deniz haritası, kaptanların su üzerinde seçilen bir rota üzerinde bir gemiyi yönlendirmesine yardımcı olan son derece ayrıntılı bir topografik haritadır. Arabayla seyahat edenler için bir yol haritasına benzer. Tarihsel nedenlerle genellikle *'Harita'* olarak adlandırılır, okyanusların, denizlerin, kıyı bölgelerinin ve nehirlerin ayrıntılı bir grafik temsilidir.  

Deniz haritaları, profesyonel denizciler ve şehrin kanallarında seyir için tekne kiralayan amatörler için önemlidir. Haritalar onlara seyir rotaları, seyir ışıkları, tehlike bölgeleri, yelken açmanın veya yanaşmanın izinli veya yasak olduğu bölgeler vb. gibi çeşitli bilgiler sağlar.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Deniz haritaları](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Deniz haritaları](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>


### Deniz Teması Neden Önemlidir? {#why-the-nautical-theme-matters}

Tüm profesyonel denizcilerin gemilerinde resmi deniz haritaları bulundurmaları gerekmektedir. Bu haritalar yetkili kurumlar tarafından yayınlanmakta ve oldukça pahalıdır. Kurumlar, haritaları güncel tutmak için yoğun yatırım yapmaktadır. Haritalara düzenli güncellemeler yayınlarlar, ancak bilgileri doğrulamak ve güncellemeleri işlemek zaman aldığından, deniz haritaları hiçbir zaman tamamen güncel değildir.

[OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap) verilerine dayanarak, OsmAnd Deniz haritaları onları kullanan kişiler tarafından oluşturulur. Her harita kullanıcısı, kendileri için önemli ve faydalı buldukları bilgileri ekleyerek haritaya katkıda bulunabilir, böylece haritayı daha ayrıntılı ve doğru hale getirerek yön bulma veya rota planlama için ideal hale getirir.  


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

Aşağıdaki kurulum, Deniz haritasının ekranda görünmesini sağlar:

1. Deniz haritası görünümü eklentisini [satın alın](../plugins/index.md#purchase) ve [etkinleştirin](../plugins/index.md#enable--disable).  
2. Deniz haritalarını [indirin](#download-nautical-maps).  
3. Gerekli [profil](../personal/profiles.md) için [Deniz](#set-nautical-map-style) harita stilini ayarlayın.


### Deniz Haritası Stilini Ayarla {#set-nautical-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya git: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,nautical_renderer"/>*  

![Android'de Deniz Haritası Türü](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya git: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline"/>*  

![iOS'ta Deniz Haritası Türü](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)

</TabItem>

</Tabs>

Deniz haritasında gösterilenlere referans için [Harita lejantını](../../user/map-legend/nautical-map.md) kullanın. Deniz haritasındaki sembolik öğeleri açıklar ve şüpheye düştüğünüzde gezinmenize yardımcı olacak bir referans görevi görür. Deniz haritası stilini ayarlayarak, indirilen ve görüntülenen deniz verilerinin en iyi görünümünü elde edebilirsiniz.  

Mevcut harita stilini Deniz olarak değiştirmek için aşağıdaki ayarları yapmanız gerekir:  

1. Gerekli [profili](../personal/profiles.md) seçin.  
2. [Haritayı yapılandır](../map/configure-map-menu.md) seçeneğini açın.  
3. Harita stiline ilerleyin, açın ve **Deniz** seçeneğini işaretleyin.


### Deniz Haritalarını İndir {#download-nautical-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya git: *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*  

![Android'de Deniz eklentisi haritaları görünümü](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya git: *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*  

![iOS'ta Deniz eklentisi haritaları görünümü](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

Optimum sunum için haritalar mevcut ihtiyaçlara göre uyarlanabilir: derinlik noktaları ve gerektiğinde konturlarla işaretler ve semboller eklenebilir. Öte yandan, belirli bir bölge için iç, kıyı ve kıyıya yakın sular hakkında bilgi içeren standart haritalar, bir Deniz haritasındaki su yolları hakkındaki bilgilere iyi bir tamamlayıcı olabilir.  

Bir deniz haritası [indirdiğinizde](../start-with/download-maps.md), haritada *Tekne* navigasyonuyla ilgili daha fazla ayrıntı görünür. Bazı [Deniz haritası](../plugins/nautical-charts/#nautical-map-style) türleri aşağıdaki gibi ayrıntıları içerir:  

- **Deniz işaretleri ve sembolleri.**  
    İşaretler ve semboller, hem iç hem de kıyı navigasyonu için tüm deniz navigasyon işaretlerini içerir. Bu işaretleri bilmek, kayaların, engellerin, demirleme yerlerinin, şamandıraların, akıntıların, derin ve sığ suların ve kanalın kenarlarının konumunu, yön ne olursa olsun tahmin etmenize yardımcı olacaktır. İşaretler ve semboller tüm dünya için bir kez indirilir.

- **Derinlik noktaları.**  
    Derinlik noktası paketlerinden gelen deniz verileri, su üzerinde görüntülenen ve belirli bir konumdaki en sığ derinliği gösteren sayılarla temsil edilir. Derinlik noktaları her yarım küre ve bazı bölgeler için mevcuttur.

- **Derinlik konturları.**  
    Derinlik kontur paketleri, eşit derinlikteki alanları tanımlamanıza olanak tanır.  Su yüzeyinin altındaki kabartmadaki değişiklikleri görselleştirmek için tasarlanmıştır. Derinlik konturları belirli alanlar için indirilebilir ve daha sonra ihtiyacınız yoksa kapatılabilir.

:::info Derinlik Numaraları
Deniz Haritalarındaki tüm derinlik numaraları metre cinsinden belirtilmiştir.
:::


### Deniz Haritası Stilini Devre Dışı Bırak {#disable-nautical-map-style}

Deniz haritasını kaldırmak ve OsmAnd'ın geleneksel haritalarından birini görüntülemek için aşağıdakilerden herhangi birini yapın:

- Deniz eklentisini devre dışı bırakın.
- Harita stilini *Deniz* dışındaki herhangi bir şeye değiştirin.

:::info NOT
Deniz eklentisini devre dışı bırakmak, yüklenen deniz verilerini kaldırmaz, bu nedenle deniz verileri indirildiğinde oluşturma yöntemini denizden başka bir yönteme değiştirseniz bile haritada görünür kalır.  
:::


## Deniz Profili {#nautical-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Android'de Deniz derinlik konturları](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![iOS'ta Derinlik konturları](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>

Deniz haritası herhangi bir profile dahil edilebilir. Ancak, en çok [Tekne profili](../personal/profiles.md) ve özellikle [Tekne navigasyonu](../navigation/routing/boat-navigation.md) için değerlidir.  


## Deniz Haritası Stili {#nautical-map-style}

OsmAnd'daki Deniz eklentisi, vektör katmanı harita stillerini Deniz harita stiliyle genişletir. Harita verilerini Deniz harita kurallarına göre görüntülemenizi sağlar, örneğin: kara ve sığlıklar için sarı alanlar, sığ sular için açık mavi alanlar vb. Daha fazla bilgi için [Harita lejantına](../../user/map-legend/nautical-map.md) bakın.  


### Deniz Yatağı Detayı {#seabed-detail}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya git: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*  

![Deniz yatağı detayları](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya git: *Menü → Haritayı yapılandır → Harita stili → Ayrıntılar → Deniz yatağı detayı*

![Deniz yatağı detayları](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>

Deniz yatağı verileri, bitki örtüsü ve kayalık kayalar, kabuklar, çakıl, mercan, silt vb. gibi genel yüzey malzemesi hakkında bilgi içerir. Deniz tabanı verilerinin uluslararası sınıflandırması nedeniyle, bu tür ayrıntıları bir haritada görüntülemek için seçenekler vardır: *basit*, *kategori*, *tümü* veya *atla*. Daha fazla bilgi için [Deniz yatağı alanı harita lejantını](../map-legend/nautical-map.md#seabed-area) kullanın.

- **Basit** (*Android sürümü için*)- INT-1 Ref'e uygun olarak deniz yatağı yüzeyinin doğasını gösteren deniz işareti sembollerini gösterir.  
- **Kategori** - deniz işareti sembolüne ek olarak, doğal malzemeyi veya deniz yosunu ve deniz çayırı kategorisini gösteren ilgili deniz işareti etiketini de gösterir.
- **Tümü** - deniz işareti sembolüne, etiketine veya kategorisine ek olarak, ince, yapışkan, kaba vb. gibi nitelikleri de gösterir. Deniz yosunu ve deniz çayırı için, *taxon* ve *genus* etiketleriyle işaretlenmiş verileri gösterir.  
- **Atla** - deniz yatağının ayrıntılarını göstermez.  

:::info NOT
Yüzey detaylarının sınıflandırılması ve oluşturma seçenekleri hakkında daha fazla bilgi için [OSM'nin deniz işaretleri vikisine](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J) bakın.
:::

### Işık Detayı {#light-detail}

Android Şuraya git: *Menü → Haritayı yapılandır → Harita stili Deniz → Diğer harita öznitelikleri → Işık detayı*

iOS Şuraya git: *Menü → Haritayı yapılandır → Harita türü Deniz → Ayrıntılar → Işık detayı*

Bu seçenek, seyir ışıkları için bilgi seviyesini görüntüler. Her fener veya işaret yakınına ışık özelliklerinin ne kadar ayrıntılı görüneceğini seçebilirsiniz.

- **Basit** – varsayılan deniz işareti adını ve ışık özelliğini gösterir.
- **Sektörler** – tüm görünür ışık sektörleri için tam sektör yaylarını ve ayrıntıları görüntüler.
- **Sektör 1–5** – yalnızca belirli bir sektör numarası için ayrıntıları gösterir.
- **Küçük** – ışık özellikleri için kompakt etiket formatını kullanır.
- **Yalnızca ad** – ışık verisi olmadan yalnızca deniz işareti adını gösterir.
- **Atla** – tüm ışık bilgilerini gizler.


## Deniz Haritası Stili {#marine-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Deniz Android](@site/static/img/plugins/nautical-charts/marine_android.png)

Şuraya git: *Menü* → *Haritayı yapılandır* → *Harita stili* → *Deniz*

</TabItem>

<TabItem value="ios" label="iOS">

![Deniz iOS](@site/static/img/plugins/nautical-charts/marine_ios.png)

Şuraya git: *Menü* → *Haritayı yapılandır* → *Harita türü* → *Deniz*

</TabItem>

</Tabs>

Bu stil, denizcilik navigasyonu için görsel öğeler ekler; INT-1 ışık özelliklerine sahip seyir ışıkları dahil, ki bunlar bir ışık sinyalinin türünü, rengini ve ritmini tanımlar (örneğin, yanıp sönüp sönmediği, rengi ve yanıp sönmeler arasındaki aralık) ve denizden görünen ışığın yönünü ve rengini belirten renkli sektör ışıkları.

Deniz stilinde, fenerler ve işaret yakınına ışık sektörleri görüntülenir: beyaz (haritada sarı olarak gösterilir) navigasyon için güvenli yönü belirtir, kırmızı tehlikeli veya kısıtlı alanları işaretler ve yeşil yardımcı veya yanal yönleri gösterir.

:::info
Bu bilgiyi görüntülemek için, Deniz eklentisi etkinleştirilmelidir ve Dünya Deniz İşaretleri haritası (veya World_seamarks_2.obf) indirilmelidir. Bilgiler resmi navigasyon kullanımı için değildir.
:::


### Harita Öznitelikleri {#map-attributes}
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Android Öznitelikler](@site/static/img/plugins/nautical-charts/marine_details_android.png)

Şuraya git: *Menü* → *Haritayı yapılandır* → *Deniz Harita stili* → *Diğer harita öznitelikleri*

</TabItem>

<TabItem value="ios" label="iOS">

![iOS Öznitelikler](@site/static/img/plugins/nautical-charts/marine_details_ios.png)

Şuraya git: *Menü* → *Haritayı yapılandır* → *Deniz Harita türü* → *Ayrıntılar* → *Işık detayı/Deniz yatağı detayı*

Şuraya git: *Menü* → *Haritayı yapılandır* → *Deniz Harita türü* → Diğer seçenekleri seçin

</TabItem>

</Tabs>

Deniz harita stilini etkinleştirdikten sonra, ek görsel öğeleri ince ayarlayabilirsiniz. Bu seçenekler, navigasyon yardımlarının, derinlik konturlarının, deniz yatağı ayrıntılarının ve renklerin haritada nasıl görüneceğini kontrol etmenize olanak tanır.

- **[Işık detayı](../plugins/nautical-charts/#light-detail)**. Deniz işareti ışık bilgilerinin nasıl görüntüleneceğini tanımlar. Seçenekler: **Varsayılan** (ışık özellikleri ile tam ad), *Küçük* (kompakt format), *Yalnızca ad* (yalnızca ışık adı) veya *Atla* (etiketleri gizle).
- **[Deniz yatağı detayı](../plugins/nautical-charts/#seabed-detail)**. Deniz yatağı hakkında metin bilgisi seviyesini kontrol eder. Seçenekler: Basit (temel bilgi), Kategori (yüzey türü), Tümü (tam veri) veya Atla (metin yok).
- **Su rengi**. Su alanları için temel rengi ayarlar. Seçenekler: *Varsayılan, Mavi, Beyaz* veya *Gri* — farklı aydınlatma modlarında görünürlük ve kontrastı ayarlamak için yararlıdır.
- **Farvater rengi**. Navigasyon farvaterleri ve kanallarının rengini değiştirir. Seçenekler: *Beyaz, Daha Beyaz, Gri, Yeşil* veya *Sarı* harita arka planına göre okunabilirliği iyileştirmek için.
- **Gelgit düzlüğü stili**. Gelgit düzlükleri için kullanılan rengi ve dokuyu ayarlar. Seçenekler: *Açık yeşil, Koyu yeşil, Sulak alan* veya *Gelgit* — her biri sığ gelgit bölgelerini farklı şekilde vurgular.
- **ENC işaretleri**. *Açık/Kapalı* geçişi. Etkinleştirildiğinde, şamandıralar, işaretler ve diğer navigasyon yardımları gibi Elektronik Navigasyon Haritası (ENC) işaretlerini gösterir.
- **Kabuk stili**. Deniz yatağındaki kabuklar veya alt yüzey özelliklerinin nasıl görüneceğini tanımlar. Seçenekler: *Gri, Kayalar, Taşlar* veya *Kırmızı*, tercih edilen görsel stile göre.
- **Kesikli derinlik konturları**. *Açık/Kapalı* geçişi. Etkinleştirildiğinde, derinlik kontur çizgilerini kesikli olarak görüntüler, yoğun alanlarda okunabilirliği artırır.
- **Derinlik renk şeması**. Derinlik bölgeleri için renk şemasını seçer. Seçenekler: *KAĞIT* (geleneksel kağıt harita renkleri) veya *ECDIS* (standart elektronik navigasyon sistemi paleti).
- **Nokta seslendirme boyutu**. Nokta seslendirme numaraları (derinlik değerleri) için yazı tipi boyutunu ayarlar. Seçenekler: *Varsayılan, 10, 12, 14* veya *16* — yüksek çözünürlüklü ekranlarda görünürlüğü iyileştirmek için daha büyük değerler.
- **Nokta seslendirme mesafesi**. Derinlik seslendirmelerinin haritada ne sıklıkta görüneceğini kontrol eder. Seçenekler: *Varsayılan, 0, 5, 10, 15, 30, 60* veya *120*, görüntülenen derinlik noktaları arasındaki aralığı belirler.
- **Güvenlik derinlik konturu**. Güvenlik derinlik eşiğini işaretleyen kontur çizgisini vurgular. Seçenekler: *Kapalı, 0 m, 1 m, 2 m, 3 m, 4 m, 5 m* veya *10 m*. Güvenli navigasyon alanlarını sığ bölgelerden ayırt etmek için yararlıdır.


## Ek Deniz Verileri {#additional-nautical-data}

### Derinlik Noktaları {#depth-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Deniz haritaları](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Deniz haritaları](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

Derinlik noktası [paketleri](../start-with/download-maps.md#overview) Avrupa, Kuzey Yarımküre ve Güney Yarımküre için mevcuttur ve bilgilendiricidir. Derinlik noktaları, su yüzeyinin altındaki topografyadaki değişiklikleri gösterir ve en sığ derinliği belirtir. Bu, *Tekne* navigasyonu için gereklidir. İndirdikten sonra, haritada görüntülemek için [Derinlik konturlarını](#depth-contours) açmanız gerekir.


### Derinlik Konturları {#depth-contours}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya git: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*  

![Android'de Deniz derinlik konturları](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya git: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![iOS'ta Derinlik konturları](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>

Ekranda bir Deniz haritası görüntülendiğinde, gördüğünüzü ayarlayabilirsiniz:

- *Derinlik konturlarını* göster veya gizle.
- Deniz tabanı bilgilerinin detay seviyesini ayarlama: [*Çizgi genişliği* ve *Çizgi renk şeması*](../map/vector-maps.md#-nautical-depth).

:::info NOT
OsmAnd uygulamasının Derinlik konturları veritabanını artırmasına [OpenSeaMap](https://map.openseamap.org/) kullanarak kendi bilgilerinizi ekleyerek yardımcı olabilirsiniz.
:::


## İlgili Makaleler {#related-articles}

- [İçe Aktar / Dışa Aktar](../personal/import-export.md)
- [Renk Paleti Şemaları](../personal/color-palette-schemes.md)