---
source-hash: 7709beb792400753a1f976b6fb02017857a5da0e9d06e235ddb18b6b45b4fb49
sidebar_position: 2
title: Haritalar ve Kaynaklar
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

**Haritalar ve Kaynaklar** bölümünde, OsmAnd'de kullanılan Çevrimiçi ve Çevrimdışı haritaları ve diğer kaynakları yönetebilirsiniz. Örneğin, indirebilir, silebilir, yeniden adlandırabilir, önbelleği temizleyebilir, güncelleyebilir ve boyutunu kontrol edebilir ve farklı eylemler gerçekleştirebilirsiniz.

OsmAnd iki tür harita ile çalışır: [Vektör haritalar](../map/vector-maps.md) ve [Raster haritalar](../map/raster-maps.md). [Yerel](#local) sekmesi tüm haritaları ve kaynakları depolar. Mevcut harita türleri [İndirilenler](#downloads) sekmesinden indirilebilir. [Güncellemeler](#updates) sekmesinde, güncellemeler için mevcut olan haritaları indirebilir ve [Canlı güncellemeleri](#osmand-live) kullanabilirsiniz. Ayrıca kendi harita türlerinizi oluşturmak için [Ek harita](#extra-maps) özelliğine de erişebilirsiniz.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![Maps menu Android](@site/static/img/personal/maps/maps_overview_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Maps menu iOS](@site/static/img/personal/maps/maps_overview_ios.png)

</TabItem>

</Tabs>


## Harita Türleri {#map-types}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Download map menu Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Regionwide maps Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map menu iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Regionwide maps Android](@site/static/img/personal/maps/map_type_2_ios.png)  

</TabItem>

</Tabs>

Haritaları OsmAnd uygulamasına indirmek, navigasyonun işlevselliğini ve verimliliğini belirleyen önemli bir adımdır.

#### Seçilen Konum için Ücretsiz Özellikler {#free-features-for-the-selected-location}

- **Standart harita**. [OpenStreetMap](https://www.openstreetmap.org/) kaynağına dayalı olarak alanın bir genel görünümünü sağlar ve bir harita, rotalar, adresler, POI ve toplu taşıma bilgilerini içerir. Dokunmak, seçilen ülkenin bölgelerinin bir listesini ve bu haritaların cihazınızda ne kadar yer kaplayacağına dair bilgileri içeren bir ekran açar.  
- **Yalnızca yollar** (*Yalnızca Android*). Harita, yalnızca rotalara ve yol altyapısına odaklanmak için yol şebekesi bilgilerini içerir. Binalar ve ilgi çekici yerler gibi ayrıntıları kaldırarak standart bir haritadan daha küçüktür. Dokunmak, seçilen ülkedeki bölgelerin bir listesini ve bu haritaların cihazınızda ne kadar yer kaplayacağına dair bilgileri içeren bir ekran açar.

#### Seçilen Konum için Ücretli Özellikler {#paid-features-for-the-selected-location}

- [Eşyükselti çizgileri](../plugins/topography.md#contour-lines). Araziyi görselleştirmek için eşyükselti çizgileri içeren bir harita.
- [Arazi haritası (Gölgelendirme ve Eğim)](../plugins/topography.md#hillshade-slope-and-altitude-layers). Gölgeler veya eğimlerle haritalar ek arazi bilgileri sağlar.
- [Arazi haritası (3D)](../plugins/topography.md#3d-relief). Çevrenizi daha iyi anlamak için arazinin üç boyutlu gösterimi. [Harita oluşturma motoru Sürüm 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) etkinleştirilmelidir.
- [Wikipedia](../plugins/wikipedia.md). Coğrafi konumlu [Wikipedia](https://wikipedia.org/) makaleleri veya yerler hakkında ek bilgiler içeren vektör haritası.
- [Hava durumu tahmini](../plugins/weather.md). Kolay rota planlaması için harita üzerinde hava durumu bilgileri.
- [Çevrimiçi raster haritalar](../map/raster-maps.md). Haritalar çevrimiçi olarak indirilebilir ve üçüncü taraf haritalar veya OsmAnd Kutucukları olarak yüklenebilir.

#### Dünya Genel Bakış Haritası {#world-overview-map}

OsmAnd'ın 3.8'e kadar olan sürümleri, gezegensel ölçekte görüntüleyebilmeniz için bir dünya haritası indirme imkanı sunar. OsmAnd'ın daha yeni sürümlerinde, hafif bir *Mini Dünya Haritası* uygulamayla birlikte gelir. Uygulama, daha ayrıntılı bilgilere sahip daha büyük bir genel dünya haritası indirmenize olanak tanır.


## Haritalar ve Kaynaklar {#maps--resources}

OsmAnd uygulamasının **Haritalar ve Kaynaklar** *Ana Menü* bölümü, haritaları ve diğer önemli verileri yönetmeye erişim sağlar.

- [Haritaları İndir](#downloads) sekmesi, çevrimdışı kullanım için haritaları indirmenize olanak tanır ve internet olmadan kullanılabilirliğini sağlar.  
- [Yerel](#local) haritalar sekmesinde, favoriler, izler, OSM notları ve cihazınızdaki diğer öğeler dahil olmak üzere haritalar ve yerler hakkında ayrıntılı bilgileri bulabilir ve yönetebilirsiniz.  
- [Güncellemeler](#updates) sekmesi, kullanıcıların haritalara ve diğer kaynaklara yönelik mevcut güncellemeler hakkında bilgi almasını sağlayarak verilerin güncel ve doğru olmasını sağlar.

***Haritalar ve Kaynaklar'da yapabileceğiniz genel eylemler***:

- **Yenile**. OsmAnd sunucusundan mevcut haritaların listesini yeniden yükler.  
- **Ara**. Haritaları **ülke**, **il** veya büyük **şehir**e göre arayın.  
- **Cihaz belleği**. İndirme için ne kadar bellek kaldığını ve kaç haritanın ücretsiz olarak indirilebileceğini göstergede gösterir. Sekmeye bağlı olarak, bazen biraz farklı veriler görüntülenir.  
- **Harita sayacı** (*Ücretsiz sürüm*, yalnızca bir [aboneliğiniz](../purchases/index.md) yoksa görünür). Bölücülü gösterge, *7 mevcut* haritadan kaç tanesini indirdiğinizi gösterir.

:::info monthly map updates
Aylık harita güncellemeleri başka bir harita indirme olarak kabul edilir ve mevcut ücretsiz harita indirme sayısından düşülür.
:::


### İndirilenler {#downloads}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Download map menu general Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Download map menu general iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

**İndirilenler** sekmesi, OsmAnd sunucularından çeşitli harita türlerini indirmenize olanak tanır ve aktif bir İnternet bağlantısı gerektirir.

***Bir harita indirmek için:***

- **İndirilenler** sekmesini açın, gerekli bölümü bulun ve mevcut haritaları görmek için ilgili klasöre dokunun.

- **Mevcut haritalar**, tek bir harita veya [birden çok harita](#multiple-map-loading) için indirme simgelerini görüntüler.

- **İndirilen haritalar** bir menü düğmesiyle yeşil bir simge gösterir:  
    - *Android*: Üç nokta menüsü.  
    - *iOS*: Bilgi (I) simgesi.

- **Yükleme sürecindeki haritalar** bunu görselleştiren bir simgeye sahiptir. İndirmeyi iptal etmek için simgeye dokunun. İndirme kuyruğundaki haritaların listesini görüntülemek ve indirmeleri iptal etmek için İndirilenler ve Güncellemeler sekmelerinin Cihaz belleği bilgi alanındaki İndirme çubuğuna dokunun.

- **Ücretsiz sürümde**, indirme için mevcut olmayan haritalar, satın alma sayfasına bağlantı veren bir [AL](../purchases/index.md) simgesi gösterir.

***İndirilenler sekmesi harita gruplarından oluşur:***

- **Cihaz belleği bilgisi**. Cihazınızdaki dolu ve boş alanı görselleştirin.
- **Harita sayacı** (***Ücretsiz sürüm***). İndirmek için kaç haritanız kaldığını gösterir.
- [Ek haritalar](#extra-maps). [Özel paket](../plugins/custom.md) için harita verilerini görüntüler.
- **Bölgeler**. Kıta ve dünya bölgesine göre liste: *Afrika, Antarktika, Asya, Avustralya ve Okyanusya, Orta Amerika, Avrupa, Kuzey Amerika, Rusya ve Güney Amerika.*
- [Dünya haritaları](#world-maps). Tüm dünyanın haritalarının bir listesi: *Dünya rakım düzeltmesi (Yalnızca Android)*, *Dünya genel bakış haritası*, *Tüm dünya (Hava durumu tahmini)*
- [Deniz haritaları](../plugins/nautical-charts.md) ([*ücretli özellik*](../purchases/index.md)). Yükseltileri nokta veya çizgi olarak gösteren vektör haritaları.
- [Seyahat rehberleri (Wikivoyage)](../plan-route/travel-guides.md) ([*ücretli özellik*](../purchases/index.md)). HTML formatında makale koleksiyonu ve ek olarak GPX dosyaları içeren vektör haritaları.
- **Diğer haritalar**. Desteklenmediği veya gelecek sürümlerde mevcut olacağı için mevcut harita hiyerarşisine atanamayan haritalar.
- [Sesli komutlar](../navigation/guidance/voice-navigation.md) (*Yalnızca Android*). Navigasyon komutlarını seslendirmek için ses paketleri.
- [Harita yazı tipleri](../map/vector-maps.md#map-fonts-android) (*Yalnızca Android*). Harita üzerinde metin görüntülemek için ek yazı tipi dosyaları.

#### Dünya Haritaları {#world-maps}

Haritaları İndir menüsünde, uygulamanın işlevselliğini tamamlayan çeşitli dünya haritalarını indirmeye erişim sağlayan bir **Dünya Haritaları** bölümü bulunur.  

- **Dünya Rakım Düzeltmesi** (*Yalnızca Android*). Özellikle dağlık arazide navigasyon doğruluğunu artırır.
- **Dünya genel bakış haritası**. Uzun vadeli rota planlaması ve gündelik keşifler için faydalı olan dünya yüzeyinin kapsamlı bir genel görünümünü sağlar.
- **Tüm dünya (Hava durumu tahmini)**. Hava durumu bilgileri içeren bir harita indirmenize olanak tanır.

*Haritalar menüsü* ve *eylemler* hakkında bilgi [Haritaları İndir](../start-with/download-maps.md) makalesinde bulunabilir.


#### Çoklu Harita Yükleme {#multiple-map-loading}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Download map menu general Android](@site/static/img/personal/maps/multiple_maps_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map menu general iOS](@site/static/img/personal/maps/multiple_maps_ios.png)

</TabItem>

</Tabs>

**Birden çok bölge haritasından** oluşan ülkeler için, birden çok haritanın toplu yüklemesini kullanabilirsiniz. Bu tür indirme için mevcut haritalar, çift indirme oku simgeleri ve içinde bölge sayısını gösteren bir etiketle (örn. Eşyükselti çizgileri / Tüm Bölgeler: 10) görüntülenir. Kaç harita indireceğinizi seçebilirsiniz.


### Yerel {#local}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Şuraya git: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Local tab Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Local tab Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya git: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Local tab menu iOS](@site/static/img/personal/maps/local_tab_ios.png)

</TabItem>

</Tabs>

Yerel sekmesi, cihazınızdaki tüm OsmAnd verileri için depolama kullanımına genel bir bakış sağlar. Veriler, netlik için üç renk kodlu bölüme ayrılmıştır ve öğeler boyuta göre en büyükten en küçüğe doğru sıralanmıştır. Her bölüm yalnızca indirilen verileri olan öğeleri görüntüler:

- ***Kaynaklar*** (*mavi*).  
    Haritaları ([Standart](../map/vector-maps.md), &nbsp;[Denizcilik](../plugins/nautical-charts.md), &nbsp;[Topografya](../plugins/topography.md), &nbsp;[Hava Durumu](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) ve [Seyahat rehberleri](../plan-route/travel-guides.md), &nbsp;[Canlı güncellemeler](../personal/maps-resources.md#osmand-live), &nbsp;**Yalnızca Yol**,  &nbsp;[Harita kaynakları](../map/raster-maps.md), &nbsp;[Oluşturma stilleri](../map/vector-maps.md#default-map-styles), &nbsp;**Harita yazı tipleri, &nbsp;Sesli komutlar (kaydedilmiş ve TTS), &nbsp;Önbellek** içerir.  

- ***Yerlerim*** (*sarı*).  
    [Favoriler](../personal/favorites.md), &nbsp;[İzler](../personal/tracks/manage-tracks.md), &nbsp;[OSM Notları](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[OSM Düzenlemeleri](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[A/V Notları](../plugins/audio-video-notes.md), &nbsp;[Harita işaretçileri](../personal/markers.md), &nbsp;[Geçmiş](../personal/global-settings.md#history), &nbsp;*Güzergah* içerir.  

- ***Ayarlar*** (*yeşil*).  
    [Profiller](../personal/profiles.md), &nbsp;[Renkler](../personal/color-palette-schemes.md) ve **Diğer** uygulama yapılandırmalarını içerir.


#### Verileri Görüntüleme {#viewing-data}

![Local category overview Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Local category options Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


**Yerel** sekmesindeki herhangi bir öğeye dokunmak, ayrıntılı listesini açar. Bu listenin üst kısmında, seçilen veri türünün toplam OsmAnd depolamasına göre ne kadar yer kapladığını gösteren görsel bir panel görüntülenir.

***Mevcut eylemler:***

- **Ara**. Seçilen klasör içinde ada göre belirli verileri bulun.
- **Üç nokta menüsü**:  
    ***Seç***. *Sil*, *Devre Dışı Bırak* veya *Etkinleştir* gibi eylemler için birden çok öğe seçin.  
    ***İçe Aktar***. Dosyaları içe aktarmak için cihazın depolama alanına erişin.
- [Sıralama seçeneği](#sorting-options). Öğeleri ada, ülkeye, tarihe veya boyuta göre sıralayın (kullanılabilirlik veri türüne bağlıdır).


#### Listedeki Öğeler için Menü {#menu-for-items-from-the-list}

![Local category item actions 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Local category item actions](@site/static/img/personal/maps/local_menu_items_2_andr.png)  

Listedeki her öğe, seçeneklerle birlikte *üç nokta menüsü* sunar:

- **Bilgi**. *[veri öğesi](#local-data-item-overview)* hakkında ayrıntılı bilgileri görüntüleyin.
- **Dışa Aktar**. Verileri *Ayarlar → Dosyaya Aktar* aracılığıyla bir dosyaya kaydedin.

***Haritalar için ek seçenekler:***

- **Devre Dışı Bırak**. Vektör haritalarını silmeden devre dışı bırakın. Depolanmış kalırlar ancak navigasyon, arama veya yönlendirme için kullanılmazlar. Cihaz üzerindeki yükü azaltır ve OsmAnd'ı hızlandırır.
- **Güncelle**. Haritanın en son sürümünü indirin.
- **Yeniden Adlandır**. Daha iyi tanımlama için haritanın adını özelleştirin.
- **Kaldır**. Haritayı cihazınızdan silin.
- **Düzenle** (Çevrimiçi Haritalar için). Çevrimiçi harita yapılandırmasını değiştirin.

#### Harita kaynağı öğeleri menüsü {#map-source-items-menu}

![Map Source items menu](@site/static/img/personal/maps/map_source_items_menu_andr.png)

[Harita kaynağı](../map/raster-maps.md) listesindeki her öğe, cihazınızda depolanan çevrimiçi raster haritayı yönetmek için ayarlar sağlar. Mevcut eylemlere erişmek için *üç nokta menüsünü* açın:

- [Bilgi](#local-data-item-overview). Seçilen harita kaynağı hakkında genel ayrıntıları, formatı ve son güncelleme tarihini görüntüler.  
- **Boyutu Hesapla**. Bu harita kaynağının önbelleğe alınmış kutucuklarının kapladığı depolama alanını tahmin eder. Önbellek *50MB*'ı aşarsa, boyut tam bir sayı yerine *≥50MB* olarak görüntülenebilir.
- **Tüm Kutucukları Temizle**. Seçilen harita kaynağı için tüm önbelleğe alınmış kutucukları siler, depolama alanını boşaltır ve harita kaynağını gelecekteki kullanım için kullanılabilir tutar.  
- **Dışa Aktar**. Yedekleme veya paylaşım için seçilen harita kaynağı yapılandırmasını kaydeder.  
- **Kaldır**. Seçilen harita kaynağını siler. Bu eylem, indirilen çevrimdışı haritaları etkilemez ancak ilişkili önbelleği temizler.


#### Yerel Veri Öğesi Genel Bakışı {#local-data-item-overview}

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)  

Yerel bir veri öğesini görüntülerken şunları görürsünüz:

- **Tür**. **Yerel** listesindeki veri türü.
- **Oluşturuldu**. Öğenin eklendiği tarih.
- **Boyut**. Öğenin boyutu MB cinsinden.

Mevcut **Eylemler** veri türüne bağlıdır ve **Devre Dışı Bırak**, **Güncelle**, **Yeniden Adlandır**, **Dışa Aktar** ve **Sil** içerebilir.

#### Sıralama Seçenekleri {#sorting-options}

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

Harita verilerini düzenlemek için sıralama seçeneklerini kullanın:

- **Ad (A - Z / Z - A)**. Öğeleri alfabetik olarak bulun.
- **Ülke adı (A - Z / Z - A)**. Haritaları coğrafi olarak düzenleyin.
- **En yeni tarih önce** / **En eski tarih önce**. Güncellemeleri veya eski sürümleri görün.
- **Büyük boyut önce** / **Küçük boyut önce**. Depolama alanını boşaltmak için büyük haritaları tanımlayın.


### Güncellemeler {#updates}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Maps menu Update maps Android](@site/static/img/personal/maps/maps_update_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Maps menu Update maps iOS](@site/static/img/personal/maps/maps_update_ios.png)

</TabItem>

</Tabs>

**Güncellemeler** sekmesi, OsmAnd haritalarını aylık olarak yenilemenizi sağlar. Tüm haritaları aynı anda güncellemek için *Tümünü güncelle* düğmesini kullanın veya gerektiğinde tek tek haritaları güncelleyin. Standart ve yalnızca yol haritaları genellikle her ayın iki haftasında yayınlanır. Saatlik güncellemeler için [OsmAnd Live](#osmand-live) abonelik durumunuzu kontrol edin. Etkinleştirilirse, **Canlı Güncellemeler** bölümü, Cihaz Belleği göstergesinin altında, sekmenin üst kısmında görünecektir.


### Ek Haritalar {#extra-maps}

OsmAnd, oluşturma dosyaları, yazı tipleri, rotalar, haritalar ve özel eklentiler dahil olmak üzere profile özgü ayarların ve verilerin aktarımını destekler. Bir `.osf` eklenti dosyası (sıkıştırılmış bir `.zip` formatı) kullanarak özel bir harita klasörü oluşturun.

Bir dosyayı içe aktarmak için:

1. Cihazınızın depolama alanında, mesajlaşma uygulamasında veya e-postada `.osf` dosyasını bulun.
2. OsmAnd ile açmak için dokunun.
3. Eklenti, **Eklenti Listesi** bölümünde görünecek ve etkinleştirilebilecektir.
4. Ardından, **İndirilenler** sekmesinin [Ek Haritalar](#downloads) bölümünde ilgili bir klasör görünecektir.

Daha fazlasını [**Özel paket**](../plugins/custom) makalesinde okuyun.


## OsmAnd Live {#osmand-live}

:::tip Satın Alma
OsmAnd Live ücretli bir özelliktir.  
:::
<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*  

![Maps menu OsmAnd live Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Maps menu OsmAnd live edit Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*

![Maps menu OsmAnd live  iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Maps menu OsmAnd live edit iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>

**OsmAnd Live**, [abonelik](../purchases/index.md) aracılığıyla sık, artımlı harita güncellemeleri sağlar veya [OSM katkıda bulunanları](#free-for-osm-mappers) için ücretsizdir. Güncellemeler OsmAnd sunucularında her 15 dakikada bir gerçekleşir ve saatlik, günlük veya haftalık olarak indirilebilir. Bu güncellemeler, tam harita boyutunun ayda yaklaşık %2-4'ü kadar minimal depolama alanı tüketir.

<!--
Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.
-->

Temel özellikler:

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> Canlı Güncellemeler**. Ayarlardaki bir geçiş düğmesi aracılığıyla yönetin.
- **&#8230; &#124;** düğmesi (*Android*) / **&#62;** düğmesi (*iOS*). *OsmAnd Live* ayarlarını açın.
- **Değiştirici**(*Android*) / **&#43;** düğmesi (*iOS*). *Canlı güncellemeler* için haritalar ekleyin.
- **<Translate android="true" ids="update_frequency"/>**. Harita güncelleme sıklığını (saatlik, günlük veya haftalık) seçin.
- **<Translate android="true" ids="update_now"/>**. *OsmAnd Live* harita güncellemesini başlatın.
- **<Translate android="true" ids="updates_size"/>**(*Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>**(*iOS*). *Canlı güncellemelerin* boyutu.
- **Çöp kutusu düğmesi**(*Android*). Mevcut harita için alınan tüm *canlı güncellemeleri* silin.
- **<Translate android="true" ids="only_download_over_wifi"/>**. Wi-Fi bağlantısı üzerinden *canlı güncellemelerin* indirilmesini yönetin.


### Güncelleme Zaman Damgaları {#update-timestamps}

- **Son OSM güncellemesi.**  
    Son işlenen OpenStreetMap değişikliklerini gösterir.
- **Bölge Güncellendi.**  
    Belirli bölgenin güncellemelerinin en son ne zaman işlendiğini gösterir.
- **Sonraki güncelleme.**  
    Sonraki güncelleme kontrolü için planlanan zamanı görüntüler.


### OsmAnd Live Sınırlamaları {#limitations-of-osmand-live}

Adres değişiklikleri yalnızca aylık güncellemeler aracılığıyla desteklenir.
Güncellenen yolların yükseklik ayrıntıları yoktur, bu da eğim grafiklerini etkiler.
Silinen veya değiştirilen rota referansları hala yanlış görünebilir.


### OSM Haritacıları için Ücretsiz {#free-for-osm-mappers}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

[OpenStreetMap](https://openstreetmap.org/) katkıda bulunanları, ücretsiz sınırsız harita indirme ve canlı güncellemeler için uygundur. Nitelikli olmak için:
[OpenStreetMap Düzenleme eklentisini](../plugins/osm-editing.md) etkinleştirin.
OSM kullanıcı adınızla [giriş yapın](../plugins/osm-editing.md#settings).
Son iki ayda en az [**30 düzenleme**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) sürdürün.

## İlgili Makaleler {#related-articles}

- [Profiller (Ayarlar)](./profiles.md)
- [İçe Aktar / Dışa Aktar](../personal/import-export.md)

### Yaygın Sorunlar ve Çözümler {#common-issues-and-solutions}

- Sesli Navigasyon. [(kontrol et)](../troubleshooting/navigation.md#voice-navigation)
- Arama geçmişi nasıl silinir. [(kontrol et)](../troubleshooting/general.md#how-to-delete-search-history)
- Ek sorun giderme için ziyaret edin: [Haritalar ve Veriler](../troubleshooting/maps-data.md)

> *Son güncelleme: Şubat 2025*