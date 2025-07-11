---
source-hash: f789f8966a523942fabf582dd575007a0776da10c974c2aa53db7149d09a0cac
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

Bir deniz haritası, kaptanların su üzerinde seçilen bir rota üzerinde bir gemide gezinmelerine yardımcı olmak için oldukça ayrıntılı bir topografik haritadır. Arabayla seyahat edenler için bir yol haritasına benzer. Tarihsel nedenlerden dolayı genellikle *'Harita'* olarak adlandırılır, okyanusların, denizlerin, kıyı bölgelerinin ve nehirlerin ayrıntılı bir grafik temsilidir.

Deniz haritaları, profesyonel denizciler ve şehrin kanallarında seyir yapmak için tekne kiralayan amatörler için önemlidir. Haritalar onlara seyir rotaları, seyir ışıkları, tehlike bölgeleri, yelken açmaya veya demirlemeye izin verilen veya yasaklanan bölgeler vb. gibi çeşitli bilgiler sağlar.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Deniz haritaları](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Deniz haritaları](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>


### Deniz Teması Neden Önemlidir? {#why-the-nautical-theme-matters}

Tüm profesyonel denizcilerin gemilerinde resmi deniz haritaları bulundurmaları gerekmektedir. Bu haritalar yetkili kurumlar tarafından yayınlanır ve oldukça pahalıdır. Kurumlar, haritaları güncel tutmak için yoğun yatırım yaparlar. Haritalara düzenli güncellemeler yayınlarlar, ancak bilgileri doğrulamak ve güncellemeleri işlemek zaman aldığından, deniz haritaları hiçbir zaman tamamen güncel değildir.

[OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap) verilerine dayanarak, OsmAnd Deniz haritaları onları kullanan kişiler tarafından oluşturulur. Her harita kullanıcısı, kendileri için önemli ve faydalı buldukları bilgileri ekleyerek haritaya katkıda bulunabilir, böylece haritayı daha ayrıntılı ve doğru hale getirir, yön bulma veya rota planlama için idealdir.


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

Aşağıdaki kurulum, Deniz haritasının ekranda görünmesini sağlar:

1. Deniz haritası görünümü eklentisini [satın alın](../plugins/index.md#purchase) ve [etkinleştirin](../plugins/index.md#enable--disable).
2. Deniz haritalarını [indirin](#download-nautical-maps).
3. Gerekli [profil](../personal/profiles.md) için [Deniz haritası stilini](#set-nautical-map-style) ayarlayın.


### Deniz Haritası Stilini Ayarla {#set-nautical-map-style}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,nautical_renderer"/>*

![Android'de Deniz Haritası Türü](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline"/>*

![iOS'ta Deniz Haritası Türü](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)

</TabItem>

</Tabs>

Deniz haritasında gösterilen her şey için [Harita lejantını](../../user/map-legend/nautical-map.md) kullanın. Bir deniz haritasındaki sembolik öğeleri açıklar ve şüpheye düştüğünüzde gezinmenize yardımcı olmak için bir referans görevi görür. Deniz haritası stilini ayarlayarak, indirilen ve görüntülenen deniz verilerinin en iyi görünümünü elde edebilirsiniz.

Mevcut harita stilini Deniz olarak değiştirmek için aşağıdaki ayarları yapmanız gerekir:

1. Gerekli [profili](../personal/profiles.md) seçin.
2. [Haritayı Yapılandır](../map/configure-map-menu.md) seçeneğini açın.
3. Harita stiline aşağı kaydırın, açın ve **Deniz** seçeneğini işaretleyin.


### Deniz Haritalarını İndir {#download-nautical-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*

![Android'de Deniz eklentisi haritaları görünümü](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*

![iOS'ta Deniz eklentisi haritaları görünümü](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

Optimum sunum için haritalar mevcut ihtiyaçlara göre uyarlanabilir: işaretler ve semboller derinlik noktalarıyla ve gerektiğinde konturlarla eklenebilir. Öte yandan, belirli bir bölge için iç, kıyı ve kıyıya yakın sular hakkında bilgi içeren standart haritalar, Deniz haritasındaki su yolları hakkındaki bilgilere iyi bir tamamlayıcı olabilir.

Bir deniz haritasını [indirdiğinizde](../start-with/download-maps.md), haritada *Tekne* navigasyonuyla ilgili daha fazla ayrıntı görünür. Bazı [Deniz haritası türleri](../start-with/download-maps.md#type-of-maps) aşağıdaki gibi ayrıntıları içerir:

- **Deniz işaretleri ve sembolleri.**
    İşaretler ve semboller, hem iç hem de kıyı navigasyonu için tüm deniz seyir işaretlerini içerir. Bu işaretleri bilmek, kayaların, engellerin, demirleme yerlerinin, şamandıraların, akıntıların, derin ve sığ suların ve kanalın kenarlarının yerini, yön ne olursa olsun tahmin etmenize yardımcı olacaktır. İşaretler ve semboller tüm dünya için bir kez indirilir.

- **Derinlik noktaları.**
    Derinlik noktası paketlerinden elde edilen deniz verileri, su üzerinde gösterilen ve belirli bir konumdaki en sığ derinliği gösteren sayılarla temsil edilir. Derinlik noktaları her yarım küre ve bazı bölgeler için mevcuttur.

- **Derinlik konturları.**
    Derinlik kontur paketleri, eşit derinlikteki alanları tanımlamanıza olanak tanır. Su yüzeyinin altındaki kabartmadaki değişiklikleri görselleştirmek için tasarlanmıştır. Derinlik konturları belirli alanlar için indirilebilir ve daha sonra ihtiyacınız yoksa kapatılabilir.

:::info Derinlik Numaraları
Deniz Haritalarındaki tüm derinlik numaraları metre cinsindendir.
:::


### Deniz Haritası Stilini Devre Dışı Bırak {#disable-nautical-map-style}

Deniz haritasını kaldırmak ve OsmAnd'ın geleneksel haritalarından birini görüntülemek için aşağıdakilerden herhangi birini yapın:

- Deniz eklentisini devre dışı bırakın.
- Harita stilini *Deniz* dışındaki herhangi bir şeye değiştirin.

:::info NOT
Deniz eklentisini devre dışı bırakmak, yüklenen deniz verilerini kaldırmaz, bu nedenle deniz verileri indirildiğinde oluşturma yöntemini denizden başka bir yönteme değiştirseniz bile haritada görünür kalır.
:::


## Deniz Profili {#nautical-profile}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Android'de Deniz derinlik konturları](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![iOS'ta Derinlik konturları](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>

Deniz haritası herhangi bir profile dahil edilebilir. Ancak, [Tekne profili](../personal/profiles.md) ve özellikle [Tekne navigasyonu](../navigation/routing/boat-navigation.md) için en değerlidir.


## Deniz Haritası Stili {#nautical-map-style}

OsmAnd'daki Deniz eklentisi, vektör katman harita stillerini Deniz haritası stiliyle genişletir. Harita verilerini Deniz haritası kurallarına göre görüntülemenizi sağlar, örneğin: kara ve sığlıklar için sarı alanlar, sığ sular için açık mavi alanlar vb. Daha fazla bilgi için [Harita lejantına](../../user/map-legend/nautical-map.md) bakın.


### Derinlik Noktaları {#depth-points}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Deniz haritaları](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Deniz haritaları](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

Derinlik noktası [paketleri](../start-with/download-maps.md#type-of-maps) Avrupa, Kuzey Yarımküre ve Güney Yarımküre için mevcuttur ve bilgilendiricidir. Derinlik noktaları, su yüzeyinin altındaki topografyadaki değişiklikleri göstererek en sığ derinliği belirtir. Bu, *Tekne* navigasyonu için gereklidir. İndirdikten sonra, haritada görüntülemek için [Derinlik konturlarını](#depth-contours) açmanız gerekir.


### Derinlik Konturları {#depth-contours}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*

![Android'de Deniz derinlik konturları](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![iOS'ta Derinlik konturları](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>

Ekranda bir Deniz haritası görüntülendiğinde, gördüğünüzü ayarlayabilirsiniz:

- *Derinlik konturlarını* göster veya gizle.
- Deniz tabanı bilgilerinin detay seviyesini ayarlama: [*Çizgi genişliği* ve *Çizgi renk şeması*](../map/vector-maps.md#-nautical-depth).

:::info NOT
[OpenSeaMap](https://map.openseamap.org/) kullanarak bilgilerinizi ekleyerek OsmAnd uygulamasının Derinlik konturları veritabanını artırmasına yardımcı olabilirsiniz.
:::


### Deniz Yatağı Detayları {#seabed-details}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*

![Deniz yatağı detayları](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Deniz yatağı detayları](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>

Deniz yatağı verileri, bitki örtüsü ve kayalık kayalar, kabuklar, çakıl, mercan, silt vb. gibi genel yüzey malzemesi hakkında bilgi içerir. Deniz tabanı verilerinin uluslararası sınıflandırması nedeniyle, bu tür ayrıntıları bir haritada görüntülemek için seçenekler vardır: *basit*, *kategori*, *tümü* veya *atla*. Daha fazla bilgi için [Deniz yatağı alanı harita lejantına](../map-legend/nautical-map.md#seabed-area) bakın.

- **Basit** (*Android sürümü için*) - deniz yatağı yüzeyinin doğasını gösteren, INT-1 Ref'e uygun deniz işareti sembollerini gösterir.
- **Kategori** - deniz işareti sembolüne ek olarak, ilgili deniz işareti etiketini de gösterir, doğal malzemeyi veya deniz yosunu ve deniz otu kategorisini belirtir.
- **Tümü** - deniz işareti sembolüne, etiketine veya kategorisine ek olarak, ince, yapışkan, kaba vb. gibi nitelikleri de gösterir. Deniz yosunu ve deniz otu için, *taxon* ve *genus* etiketleriyle işaretlenmiş verileri gösterir.
- **Atla** - deniz tabanının ayrıntılarını göstermez.

:::info NOT
Yüzey detaylarının sınıflandırılması ve oluşturma seçenekleri hakkında daha fazla bilgi için [OSM'nin deniz işareti vikisine](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J) bakın.
:::


## İlgili Makaleler {#related-articles}

- [İçe Aktar / Dışa Aktar](../personal/import-export.md)
- [Renk Paleti Şemaları](../personal/color-palette-schemes.md)

> *Son güncelleme: Haziran 2023*