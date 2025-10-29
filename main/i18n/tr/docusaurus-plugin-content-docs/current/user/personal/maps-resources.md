---
source-hash: ab1e41d88d45cf90e8e97f0efc04df7c72257821a9279cc6ccbc4b8571774469
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

**Haritalar ve Kaynaklar** bölümünde, OsmAnd'de kullanılan hem *Çevrimiçi* hem de *Çevrimdışı* haritaları ve diğer kaynakları yönetebilirsiniz. Örneğin, indirebilir, silebilir, yeniden adlandırabilir, önbelleği temizleyebilir, güncelleyebilir ve boyutunu kontrol edebilir ve farklı eylemler gerçekleştirebilirsiniz.

OsmAnd iki tür harita ile çalışır: [Vektör haritaları](../map/vector-maps.md) ve [Raster haritaları](../map/raster-maps.md). [Yerel](#local-menu) sekmesi tüm haritaları ve kaynakları depolar. Mevcut harita türleri [İndirilenler](#downloads-menu) sekmesinden indirilebilir. [Güncellemeler](#updates-menu) sekmesinde, güncellemeler için mevcut olan haritaları indirebilir ve [Canlı güncellemeleri](#live-updates) kullanabilirsiniz. Kendi harita türlerinizi oluşturmak için [Ek harita](#extra-maps) özelliğine de erişebilirsiniz.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![Haritalar menüsü Android](@site/static/img/personal/maps/maps_overview_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Haritalar menüsü iOS](@site/static/img/personal/maps/maps_overview_ios.png)

</TabItem>

</Tabs>


## Harita Türleri {#map-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Harita indirme menüsü Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Bölgesel haritalar Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Harita indirme menüsü iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Bölgesel haritalar iOS](@site/static/img/personal/maps/map_type_2_ios.png)  

</TabItem>

</Tabs>

Haritaları OsmAnd uygulamasına indirmek, navigasyonun işlevselliğini ve verimliliğini belirleyen önemli bir adımdır.

### Ücretsiz Harita İçeriği {#free-map-content}

- **Standart harita**. [OpenStreetMap](https://www.openstreetmap.org/) kaynağına dayalı olarak alanın genel bir görünümünü sağlar ve bir harita, rotalar, adresler, POI ve toplu taşıma bilgilerini içerir. Dokunulduğunda, seçilen ülkenin bölgelerinin bir listesini ve bu haritaların cihazınızda ne kadar yer kaplayacağına dair bilgileri içeren bir ekran açılır.  
- **Yalnızca yollar** (*Yalnızca Android*). Harita, yalnızca rotalara ve yol altyapısına odaklanmak için yol ağı bilgilerini içerir. Binalar ve ilgi çekici noktalar gibi ayrıntıları kaldırarak standart bir haritadan daha küçüktür. Dokunulduğunda, seçilen ülkedeki bölgelerin bir listesini ve bu haritaların cihazınızda ne kadar yer kaplayacağına dair bilgileri içeren bir ekran açılır.
- **Dünya genel bakış haritası**. OsmAnd'ın 3.8'e kadar olan sürümleri, gezegensel ölçekte görüntüleyebilmeniz için bir dünya haritası indirmeyi teklif eder. OsmAnd'ın daha yeni sürümlerinde, hafif bir *Mini Dünya Haritası* uygulamayla birlikte gelir. Uygulama, daha ayrıntılı bilgi içeren daha büyük bir genel bakış dünya haritası indirmenize olanak tanır. 

:::info aylık harita güncellemeleri
Aylık harita güncellemelerinin başka bir harita indirmesi olarak kabul edildiğini ve mevcut ücretsiz harita indirme sayısından düşüldüğünü lütfen unutmayın.
:::

### Ücretli Harita İçeriği {#paid-map-content}

- [Eşyükselti çizgileri](../plugins/topography.md#contour-lines). Araziyi görselleştirmek için eşyükselti çizgilerini içeren bir harita.
- [Arazi haritası (Gölgelendirme ve Eğim)](../plugins/topography.md#hillshade-slope-and-altitude-layers). Gölgeler veya eğimlerle birlikte haritalar ek arazi bilgileri sağlar.
- [Arazi haritası (3D)](../plugins/topography.md#3d-relief). Çevrenizi daha iyi anlamak için arazinin üç boyutlu gösterimi. [Harita oluşturma motoru Sürüm 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) etkinleştirilmelidir.
- [Deniz derinlikleri ve konturları](../plugins/nautical-charts.md). Kıyı hatları, derinlikler, navigasyon yardımcıları, limanlar ve tehlikeleri gösteren deniz haritaları, güvenli teknecilik ve yelken için.
- [Wikipedia](../plugins/wikipedia.md). Coğrafi konumlu [Wikipedia](https://wikipedia.org/) makaleleriyle dönüm noktaları veya yerler hakkında ek bilgiler içeren vektör haritası.
- [Wikivoyage](../plan-route/travel-guides.md). Kullanıcılara değerli bilgiler, öneriler ve ipuçları sunan sanal seyahat rehberleriyle vektör haritaları sağlar.
- [Hava durumu tahmini](../plugins/weather.md). Kolay rota planlaması için harita üzerinde hava durumu bilgileri.


## İndirilenler Menüsü {#downloads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Genel Android harita indirme menüsü](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Genel iOS harita indirme menüsü](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

**İndir** sekmesi, OsmAnd sunucularından çeşitli harita türlerini indirmenize olanak tanır ve aktif bir İnternet bağlantısı gerektirir.

***Harita indirmek için:***

- **İndir** sekmesini açın, gerekli bölümü bulun ve mevcut haritaları görmek için ilgili klasöre dokunun.

- **Mevcut haritalar** tek bir harita veya [birden çok harita](#multiple-map-loading) için indirme simgelerini gösterir.

- **İndirilen haritalar** menü düğmeli yeşil bir simge gösterir:  
    - *Android*: Üç nokta menüsü.  
    - *iOS*: Bilgi (i) simgesi.

- **Yükleme sürecindeki haritalar** bunu görselleştiren bir simgeye sahiptir. İndirmeyi iptal etmek için simgeye dokunun. İndirme kuyruğundaki haritaların listesini görüntülemek ve indirmeleri iptal etmek için İndirilenler ve Güncellemeler sekmelerinin Cihaz belleği bilgisi alanındaki İndirme çubuğuna dokunun.

- **Ücretsiz sürümde**, indirilemeyen haritalar, satın alma sayfasına bağlantı veren bir [GET](../purchases/index.md) simgesi gösterir.

***İndirilenler sekmesi harita gruplarından oluşur:***

- **Cihaz belleği bilgisi**. Cihazınızdaki dolu ve boş alan miktarını görselleştirin.
- **Harita sayacı** (***Ücretsiz sürüm***). İndirmek için kaç haritanız kaldığını gösterir.
- [Ek haritalar](#extra-maps). [Özel paket](../plugins/custom.md) için harita verilerini gösterir.
- **Bölgeler**. Kıta ve dünya bölgesine göre listeleme: *Afrika, Antarktika, Asya, Avustralya ve Okyanusya, Orta Amerika, Avrupa, Kuzey Amerika, Rusya ve Güney Amerika.*
- [Dünya haritaları](#world-maps). Tüm dünyanın haritalarının bir listesi: *Dünya rakım düzeltmesi (Yalnızca Android)*, *Dünya genel bakış haritası*, *Tüm dünya (Hava durumu tahmini)*
- [Deniz haritaları](../plugins/nautical-charts.md) ([*ücretli özellik*](../purchases/index.md)). Nokta veya çizgi olarak yüksekliklere sahip vektör haritaları.
- [Seyahat rehberleri (Wikivoyage)](../plan-route/travel-guides.md) ([*ücretli özellik*](../purchases/index.md)). HTML formatında makale koleksiyonu ve ayrıca GPX dosyaları içeren vektör haritaları.
- **Diğer haritalar**. Desteklenmedikleri veya gelecekteki sürümlerde mevcut olacakları için mevcut harita hiyerarşisine atanamayan haritalar.
- [Sesli komutlar](../navigation/guidance/voice-navigation.md) (*Yalnızca Android*). Navigasyon komutlarını seslendirmek için ses paketleri.
- [Harita yazı tipleri](../map/vector-maps.md#map-fonts-android) (*Yalnızca Android*). Harita üzerinde metin görüntülemek için ek yazı tipi dosyaları.
- **Şehir veya bölge ara** (*Yalnızca Android*). İndirilenler sekmesinin üst kısmında (büyüteç simgesi) gerekli şehri veya bölgeyi bulmak için hızlı bir arama aracı.

### Dünya Haritaları {#world-maps}

Harita İndir menüsünde, uygulamanın işlevselliğini tamamlayan çeşitli dünya haritalarını indirmeye erişim sağlayan bir **Dünya Haritaları** bölümü bulunmaktadır.  

- **Dünya Rakım Düzeltmesi** (*Yalnızca Android*). Bu dosya, gezegensel eğriliği telafi etmek için rakım düzeltmelerini içerir.
- **Dünya genel bakış haritası**. Uzun vadeli rota planlaması ve gündelik keşifler için faydalı olan dünya yüzeyinin kapsamlı bir genel görünümünü sağlar.
- **Tüm dünya (Hava durumu tahmini)**. Hava durumu bilgileriyle bir harita indirmenize olanak tanır.


### Ek Haritalar {#extra-maps}

OsmAnd, oluşturma dosyaları, yazı tipleri, rotalar, haritalar ve özel eklentiler dahil olmak üzere profile özgü ayarların ve verilerin aktarımını destekler. Bir `.osf` eklenti dosyası (sıkıştırılmış `.zip` formatı) kullanarak özel bir harita klasörü oluşturun.

Bir dosyayı içe aktarmak için:

1. `.osf` dosyasını cihazınızın depolama alanında, mesajlaşma uygulamasında veya e-postada bulun.
2. OsmAnd ile açmak için dokunun.
3. Eklenti, **Eklenti Listesi** bölümünde görünecek ve etkinleştirilebilecektir.
4. Karşılık gelen bir klasör daha sonra [İndirilenler](#downloads-menu) sekmesinin **Ek Haritalar** bölümünde görünecektir.

Daha fazla bilgi için [**Özel paket**](../plugins/custom) makalesine bakın.


### Birden Çok Harita Yükleme {#multiple-map-loading}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Genel Android harita indirme menüsü](@site/static/img/personal/maps/multiple_maps_andr.png) ![Seçimi kaldır menüsü Android](@site/static/img/personal/maps/multiple_maps_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Genel iOS harita indirme menüsü](@site/static/img/personal/maps/multiple_maps_ios.png) ![Seçimi kaldır menüsü iOS](@site/static/img/personal/maps/multiple_maps_2_ios.png)

</TabItem>

</Tabs>

**Birden çok bölge haritasından** oluşan ülkeler için, birden çok haritanın toplu yüklemesini kullanabilirsiniz. Bu tür indirme için mevcut haritalar, çift indirme oku simgeleri ve içinde bölge sayısını gösteren bir etiketle (örneğin Eşyükselti çizgileri / Tüm Bölgeler: 10) görüntülenir. Kaç harita indireceğinizi seçebilirsiniz.


## Yerel Menü {#local-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya git: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Yerel sekme Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Yerel sekme Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

Yerel sekmesi, cihazınızdaki tüm OsmAnd verileri için depolama kullanımına genel bir bakış sağlar. Veriler, netlik için üç renk kodlu bölüme ayrılmıştır ve öğeler en büyükten en küçüğe doğru boyuta göre sıralanmıştır. Her bölüm yalnızca indirilen verilere sahip öğeleri görüntüler:

- ***Kaynaklar*** (*mavi*).  
    Haritalar ([Standart](../map/vector-maps.md), &nbsp;[Denizcilik](../plugins/nautical-charts.md), &nbsp;[Topografya](../plugins/topography.md), &nbsp;[Hava Durumu](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) ve [Seyahat rehberleri](../plan-route/travel-guides.md), &nbsp;[Canlı güncellemeler](../personal/maps-resources.md#live-updates), &nbsp;**Yalnızca yol**,  &nbsp;[Harita kaynakları](../map/raster-maps.md), &nbsp;[Oluşturma stilleri](../map/vector-maps.md#default-map-styles), &nbsp;**Harita yazı tipleri, &nbsp;Sesli komutlar (kaydedilmiş ve TTS), &nbsp;Önbellek** içerir.  

- ***Yerlerim*** (*sarı*).  
    [Favoriler](../personal/favorites.md), &nbsp;[İzler](../personal/tracks/manage-tracks.md), &nbsp;[OSM Notları](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[OSM Düzenlemeleri](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[A/V Notları](../plugins/audio-video-notes.md), &nbsp;[Harita işaretleyicileri](../personal/markers.md), &nbsp;[Geçmiş](../personal/global-settings.md#history), &nbsp;*Seyahat planı* içerir.  

- ***Ayarlar*** (*yeşil*).  
    [Profiller](../personal/profiles.md), &nbsp;[Renkler](../personal/color-palette-schemes.md) ve **Diğer** uygulama yapılandırmalarını içerir.

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya git: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Yerel sekme menüsü iOS](@site/static/img/personal/maps/local_tab_ios.png)

Yerel sekmesi, cihazınızdaki haritalar ve kaynak verileri için depolama kullanımına genel bir bakış sağlar. Üstteki bellek çubuğu üç kategori gösterir:

- ***Yeşil***. Toplam kullanılan cihaz depolama alanı.
- ***Turuncu***. Kullanılan depolama alanının OsmAnd indirmeleri tarafından kaplanan kısmı.
- ***Gri***. Cihazda kullanılabilir boş depolama alanı.

Bellek çubuğunun altında, indirilen tüm OsmAnd haritalarının ve kaynaklarının bir listesi, türleri ve dosya boyutları dahil olmak üzere gösterilir. Çevrimiçi haritalar, akışla aktarıldıkları ve yalnızca geçici olarak önbelleğe alındıkları için bellek çubuğunda sayılmaz.

</TabItem>

</Tabs>


### Verileri Görüntüleme {#viewing-data}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Yerel kategori genel bakış Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Yerel kategori seçenekleri Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


**Yerel** sekmesindeki herhangi bir öğeye dokunmak, ayrıntılı listesini açar. Bu listenin üst kısmında, seçilen veri türünün toplam OsmAnd depolama alanına göre ne kadar yer kapladığını gösteren görsel bir panel bulunur.

***Mevcut eylemler:***

- **Ara**. Seçilen klasör içinde belirli verileri ada göre bulun.
- **Üç nokta menüsü**:  
    ***Seç***. *Sil*, *Devre Dışı Bırak* veya *Etkinleştir* gibi eylemler için birden çok öğe seçin.  
    ***İçe Aktar***. Dosyaları içe aktarmak için cihazın depolama alanına erişin.
- **Sıralama seçeneği**. Öğeleri ada, ülkeye, tarihe veya boyuta göre sıralayın (kullanılabilirlik veri türüne bağlıdır).

Listedeki her öğe, seçeneklerle birlikte bir *üç nokta menüsü* sunar:

- **Bilgi**. *[eylemler](#actions)* hakkında ayrıntılı bilgi görüntüleyin.
- **Dışa Aktar**. Verileri *Ayarlar → Dosyaya Aktar* aracılığıyla bir dosyaya kaydedin.

***Haritalar için ek seçenekler:***

- **Devre Dışı Bırak**. Vektör haritalarını silmeden devre dışı bırakın. Depolanmış kalırlar ancak navigasyon, arama veya yönlendirme için kullanılmazlar. Cihaz üzerindeki yükü azaltır ve OsmAnd'ı hızlandırır.
- **Güncelle**. Haritanın en son sürümünü indirin.
- **Yeniden Adlandır**. Daha iyi tanımlama için haritanın adını özelleştirin.
- **Kaldır**. Haritayı cihazınızdan silin.
- **Düzenle** (Çevrimiçi Haritalar için). Çevrimiçi harita yapılandırmasını değiştirin.

</TabItem>

<TabItem value="ios" label="iOS">  

![Verileri görüntüleme](@site/static/img/personal/maps/viewing_data_ios.png)

**Yerel** sekmesindeki herhangi bir çevrimdışı öğeye dokunmak, aşağıdaki gibi ayrıntılı verilerini açar:

- **Tür**. Veri öğesinin türü, örneğin **Standart harita**, **Wikipedia**, **Eşyükselti çizgileri** vb.
- **Boyut**. Öğenin boyutu MB cinsindendir.
- **Oluşturulma tarihi**. Öğenin eklendiği tarih.

Çevrimiçi haritalar için yalnızca önbelleğe alınmış verilerin türü ve boyutu görüntülenir.

</TabItem>

</Tabs>


### Eylemler {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Harita Kaynağı öğeleri menüsü](@site/static/img/personal/maps/map_source_items_menu_andr.png)

[Harita kaynağı](../map/raster-maps.md) listesindeki her öğe, cihazınızda depolanan çevrimiçi raster haritasını yönetmek için ayarlar sağlar. Mevcut eylemlere erişmek için *üç nokta menüsünü* açın:

- **Bilgi**. Seçilen harita kaynağı hakkında format ve son güncelleme tarihi dahil genel ayrıntıları görüntüler.  
- **Boyutu Hesapla**. Bu harita kaynağının önbelleğe alınmış döşemeleri tarafından kaplanan depolama alanını tahmin eder. Önbellek *50MB*'ı aşarsa, boyut tam bir sayı yerine *≥50MB* olarak görüntülenebilir.
- **Tüm Döşemeleri Temizle**. Seçilen harita kaynağı için tüm önbelleğe alınmış döşemeleri siler, depolama alanını boşaltırken harita kaynağını gelecekteki kullanım için kullanılabilir tutar.  
- **Dışa Aktar**. Yedekleme veya paylaşım için seçilen harita kaynağı yapılandırmasını kaydeder.  
- **Kaldır**. Seçilen harita kaynağını siler. Bu eylem indirilen çevrimdışı haritaları etkilemez ancak ilişkili önbelleği temizler.

Yerel bir veri öğesini görüntülerken şunları görürsünüz:

- **Tür**. **Yerel** listesindeki veri türü.
- **Oluşturuldu**. Öğenin eklendiği tarih.
- **Boyut**. Öğenin boyutu MB cinsindendir.

Mevcut **Eylemler** veri türüne bağlıdır ve **Devre Dışı Bırak**, **Güncelle**, **Yeniden Adlandır**, **Dışa Aktar** ve **Sil** içerebilir.

</TabItem>

<TabItem value="ios" label="iOS">  

![Eylemler iOS](@site/static/img/personal/maps/local_actions_ios.png)

Mevcut **Eylemler** veri türüne bağlıdır:

- **Çevrimdışı öğeler** için yalnızca **Sil** seçeneği mevcuttur.
- **Çevrimiçi haritalar** için eylemler **Önbelleği temizle**, **Düzenle** ve **Sil** içerebilir.

</TabItem>

</Tabs>

<!--
The Local tab provides an overview of the storage usage for all OsmAnd data on your device. Data is divided into three color-coded sections for clarity, with items sorted by size from largest to smallest. Each section displays only items with downloaded data:

- ***Resources*** (*blue*).  
    Includes maps ([Standard](../map/vector-maps.md), &nbsp;[Nautical](../plugins/nautical-charts.md), &nbsp;[Topography](../plugins/topography.md), &nbsp;[Weather](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) and [Travel guides](../plan-route/travel-guides.md), &nbsp;[Live updates](../personal/maps-resources.md#live-updates), &nbsp;**Road only**,  &nbsp;[Map sources](../map/raster-maps.md), &nbsp;[Rendering styles](../map/vector-maps.md#default-map-styles), &nbsp;**Map fonts, &nbsp;Voice prompts (recorded and TTS), &nbsp;Cache**.  

- ***My Places*** (*yellow*).  
    Includes [Favorites](../personal/favorites.md), &nbsp;[Tracks](../personal/tracks/manage-tracks.md), &nbsp;[OSM Notes](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[OSM Edits](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[A/V Notes](../plugins/audio-video-notes.md), &nbsp;[Map markers](../personal/markers.md), &nbsp;[History](../personal/global-settings.md#history), &nbsp;*Itinerary*.  

- ***Settings*** (*green*).  
    Includes [Profiles](../personal/profiles.md), &nbsp;[Colors](../personal/color-palette-schemes.md) and **Other** app configurations.


#### Viewing Data {#viewing-data}

![Local category overview Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Local category options Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Tap any item in the **Local** tab to open its detailed list. At the top of this list, a visual panel displays how much space the selected data type occupies relative to the total OsmAnd storage.

***Available actions:***

- **Search**. Find specific data by name within the selected folder.
- **Three-dot menu**:  
    ***Select***. Choose multiple items for actions like *Delete*, *Deactivate*, or *Activate*.  
    ***Import***. Access the device's storage to import files.
- [Sorting option](#sorting-options). Sort items by name, country, date, or size (availability depends on the data type).


#### Menu for Items from the List {#menu-for-items-from-the-list}

![Local category item actions 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Local category item actions](@site/static/img/personal/maps/local_menu_items_2_andr.png)  

Each item in the list offers a *three-dot menu* with options:

- **Info**. View detailed information on the *[data item](#local-data-item-overview)*.
- **Export**. Save data to a file via *Settings → Export to File*.

***Additional options for maps:***

- **Deactivate**. Disable vector maps without deleting them. They remain stored but are not used for navigation, search, or routing. Reduces the load on the device and speeds up OsmAnd.
- **Update**. Download the latest version of the map.
- **Rename**. Customize the map’s name for better identification.
- **Remove**. Delete the map from your device.
- **Edit** (for Online Maps). Modify the online map configuration.

#### Map source items menu {#map-source-items-menu}

![Map Source items menu](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Each item in the [Map source](../map/raster-maps.md) list provides settings for managing online raster map stored on your device. Open the *three-dot menu* to access the available actions:

- [Info](#local-data-item-overview). Displays general details about the selected map source, including format and last update date.  
- **Calculate Size**. Estimates the storage occupied by the cached tiles of this map source. If the cache exceeds *50MB*, the size can be displayed as *≥50MB* instead of an exact number.
- **Clear All Tiles**. Deletes all cached tiles for the selected map source, freeing up storage while keeping the map source available for future use.  
- **Export**. Saves the selected map source configuration for backup or sharing.  
- **Remove**. Deletes the selected map source. This action does not affect downloaded offline maps but clears the associated cache.


#### Local Data Item Overview {#local-data-item-overview}

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)  

When viewing a local data item, you see:

- **Type**. The data type from the **Local** list.
- **Created**. The date the item was added.
- **Size**. The item’s size is in MB.

Available **Actions** depend on the data type and may include **Deactivate**, **Update**, **Rename**, **Export**, and **Delete**.

#### Sorting Options {#sorting-options}

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

Use sorting options to organize map data:

- **Name (A - Z / Z - A)**. Locate items alphabetically.
- **Country name (A - Z / Z - A)**. Organize maps geographically.
- **Newest date first** / **Oldest date first**. See updates or older versions.
- **Large size first** / **Small size first**. Identify large maps to free storage space.

-->

## Güncellemeler Menüsü {#updates-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Haritalar menüsü Haritaları güncelle Android](@site/static/img/personal/maps/maps_update_andr.png)

**Güncellemeler** sekmesi, OsmAnd haritalarını ve kaynaklarını yenilemenizi sağlar. Standart ve yalnızca yol haritaları ayda bir kez, genellikle ayın 2'si ile 5'i arasında yayınlanır ve önceki ayın son gününe kadar olan OpenStreetMap verilerini içerir (örneğin, Ekim sürümü 30 Eylül'e kadar olan verileri içerir). Wikipedia, arazi veya deniz haritaları gibi diğer veriler farklı, düzensiz güncelleme programlarını takip edebilir. Hava durumu tahmini kendi düzenli güncelleme döngüsüne sahiptir. Ayrıntılar için [Tahmin İndir](../plugins/weather.md#download-forecast) bölümüne bakın. 

Tüm haritaları aynı anda güncellemek için *Tümünü güncelle* düğmesini kullanın veya gerektiğinde tek tek haritaları güncelleyin. Saatlik güncellemeler için [Canlı Güncellemeler](#live-updates) abonelik durumunuzu kontrol edin. Etkinleştirilirse, **Canlı Güncellemeler** bölümü, Cihaz Belleği göstergesinin altında, sekmenin üst kısmında görünecektir.

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Haritalar menüsü Haritaları güncelle iOS](@site/static/img/personal/maps/maps_update_ios.png) ![Hava durumu tahmini Haritaları güncelle iOS](@site/static/img/personal/maps/maps_update_2_ios.png)

**Güncellemeler** sekmesi, OsmAnd haritalarını ve kaynaklarını yenilemenizi sağlar. Standart ve yalnızca yol haritaları ayda bir kez, genellikle ayın 2'si ile 5'i arasında yayınlanır ve önceki ayın son gününe kadar olan OpenStreetMap verilerini içerir (örneğin, Ekim sürümü 30 Eylül'e kadar olan verileri içerir). Wikipedia, arazi veya deniz haritaları gibi diğer veriler farklı, düzensiz güncelleme programlarını takip edebilir. 

Tüm haritaları aynı anda güncellemek için *Tümünü güncelle* düğmesini kullanın veya gerektiğinde tek tek haritaları güncelleyin. Saatlik güncellemeler için [Canlı Güncellemeler](#live-updates) abonelik durumunuzu kontrol edin. Etkinleştirilirse, **Canlı Güncellemeler** bölümü, Cihaz Belleği göstergesinin altında, sekmenin üst kısmında görünecektir.

**Güncellemeler** sekmesi ayrıca bir Hava durumu tahmini bölümü içerir. Seçilen ülkeler için çevrimdışı tahminlerinizi yönetmek üzere tasarlanmıştır:

- Henüz bir tahmin indirilmediyse, ülkeleri seçmeniz istenir. Tahmin verileri 7 güne kadar mevcuttur.
- Bir tahmin indirildikten sonra, ***Çevrimdışı tahmin*** ekranı, son güncelleme zamanı, geçerlilik süresi ve toplam veri boyutu dahil olmak üzere durum bilgileriyle birlikte ülkelerin listesini görüntüler.
- Bir ülkeye dokunmak, son güncelleme zamanı, bir sonraki güncelleme, veri boyutu ve doğruluk gibi ayrıntılı bilgileri açar. Seçenekler arasında ***Şimdi güncelle***, ***Otomatik güncellemeyi*** etkinleştirme veya devre dışı bırakma (Hava durumu tahmini kendi düzenli güncelleme döngüsüne sahiptir. Ayrıntılar için [Tahmin İndir](../plugins/weather.md#download-forecast) bölümüne bakın.) ve ***Tahmini kaldır*** bulunur.


</TabItem>

</Tabs>

## Canlı Güncellemeler {#live-updates}

:::tip Satın Alma
Canlı güncellemeler ücretli bir özelliktir.  
:::
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*  

![Haritalar menüsü OsmAnd canlı Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Haritalar menüsü OsmAnd canlı düzenle Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*

![Haritalar menüsü OsmAnd canlı iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Haritalar menüsü OsmAnd canlı düzenle iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>

**Canlı Güncellemeler**, [abonelik](../purchases/index.md) aracılığıyla sık, artımlı harita güncellemeleri sağlar veya [OSM katkıda bulunanlar](#free-for-osm-mappers) için ücretsizdir. Güncellemeler OsmAnd sunucularında her 15 dakikada bir gerçekleşir ve saatlik, günlük veya haftalık olarak indirilebilir. Bu güncellemeler minimum depolama alanı tüketir - ayda tam harita boyutunun yaklaşık %2-4'ü.

<!--
Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.
-->

Temel özellikler:

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> Canlı Güncellemeler**. Ayarlardaki bir geçiş düğmesi aracılığıyla yönetin.
- **&#8230; &#124;** düğmesi (*Android*) / **&#62;** düğmesi (*iOS*). *Canlı güncellemeler* ayarlarını açın.
- **Anahtar**(*Android*) / **&#43;** düğmesi (*iOS*). *Canlı güncellemeler* için haritalar ekleyin.
- **<Translate android="true" ids="update_frequency"/>**. Harita güncelleme sıklığını seçin (saatlik, günlük veya haftalık).
- **<Translate android="true" ids="update_now"/>**. Harita için *canlı güncellemeleri* başlatın.
- **<Translate android="true" ids="updates_size"/>**(*Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>**(*iOS*). *Canlı güncellemelerin* boyutu.
- **Çöp kutusu düğmesi**(*Android*). Mevcut harita için alınan tüm *canlı güncellemeleri* silin.
- **<Translate android="true" ids="only_download_over_wifi"/>**. Wi-Fi bağlantısı üzerinden *canlı güncellemelerin* indirilmesini yönetin.


### Güncelleme Zaman Damgaları {#update-timestamps}

- **En son OSM güncellemesi.**  
    Son işlenen OpenStreetMap değişikliklerini gösterir.
- **Bölge Güncellendi.**  
    Belirli bölgenin güncellemelerinin en son ne zaman işlendiğini gösterir.
- **Sonraki güncelleme.**  
    Bir sonraki güncelleme kontrolü için planlanan zamanı görüntüler.


### Canlı Güncellemelerin Sınırlamaları {#limitations-of-live-updates}

Adres değişiklikleri yalnızca aylık güncellemeler aracılığıyla desteklenir.
Güncellenen yolların yükseklik ayrıntıları yoktur, bu da eğim grafiklerini etkiler.
Silinen veya değiştirilen rota referansları hala yanlış görünebilir.


### OSM Haritacıları için Ücretsiz {#free-for-osm-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Haritacılar için OsmAnd canlı](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Haritacılar için OsmAnd canlı](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

[OpenStreetMap](https://openstreetmap.org/) katkıda bulunanları, ücretsiz sınırsız harita indirme ve canlı güncellemeler için uygundur. Nitelik kazanmak için:
[OpenStreetMap Düzenleme eklentisini](../plugins/osm-editing.md) etkinleştirin.
OSM kullanıcı adınızla [Giriş yapın](../plugins/osm-editing.md#settings).
Son iki ayda en az [**30 düzenleme**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) sürdürün.

## İlgili Makaleler {#related-articles}

- [Profiller (Ayarlar)](./profiles.md)
- [İçe Aktar / Dışa Aktar](../personal/import-export.md)

### Yaygın Sorunlar ve Çözümler {#common-issues-and-solutions}

- Sesli Navigasyon. [(kontrol et)](../troubleshooting/navigation.md#voice-navigation)
- Arama geçmişi nasıl silinir. [(kontrol et)](../troubleshooting/general.md#how-to-delete-search-history)
- Ek sorun giderme için ziyaret edin: [Haritalar ve Veriler](../troubleshooting/maps-data.md)