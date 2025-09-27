---
source-hash: 18d6a31fa10f304cf5ed4712a573c452b11e151b3e929eabeedf23dd67ec220a
sidebar_position: 6
title:  Raster Haritalar (Çevrimiçi / Çevrimdışı)
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


<InfoIncompleteArticle/>

## Genel Bakış {#overview}

Raster haritalar, OsmAnd vektör haritalarına önemli ve kullanışlı eklemelerdir. Çeşitli harita kaynaklarını vektör haritalarla birleştirmenize olanak tanır. Örneğin, tepeler ve yamaçlar hakkındaki bilgiler bir raster katman olarak görüntülenir. Yürüyüş parkurları, yağmur haritaları, gerçek zamanlı trafik verileri ve uydu görüntülerinin saydam bir temel vektör harita üzerinde bir katmanını görüntüleyebilirsiniz. Ayrıca varsayılan haritaları web'deki raster döşemelere de geçirebilirsiniz.


## Kullanım Durumları {#use-cases}

Raster haritaların geniş bir kullanım alanı vardır. İşte en popüler olanlardan bazıları:

- Uydu görüntüleri bir altlık olarak.
- Gerçek zamanlı trafik bilgileri.
- Yağmur tahmini bir katman olarak.
- Tepelerin ve yamaçların gölgelendirmesiyle topografik haritalar.
- Aktif bisiklet ve koşu rotaları bir katman olarak.
- Gerçek zamanlı gemi bilgileri.
- OSM düzenlemesi için çevrimiçi OpenStreetMap döşemeleri.

![Çevrimiçi haritalara genel bakış](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::ipucu
Haritaların ana kaynağını vektör haritalardan çevrimiçi döşemelere de değiştirebilirsiniz.
:::


## Raster Haritalar {#raster-maps}

OsmAnd'daki çevrimiçi haritalar, piksellerden (ızgara hücreleri olarak da adlandırılır) oluşan raster verilerden oluşur - esasen döşemeler olarak bilinen küçük görüntüler kümesidir. Yolları, noktaları ve poligonları ikili bilgiler kullanarak temsil eden vektör haritaların aksine, raster harita döşemeleri bir ızgarada düzenlenir ve her pikselin sabit bir değeri veya sınıfı olduğu için yüksek yakınlaştırma seviyelerinde pikselli görünebilir.

### Varsayılan vektör haritalarla karşılaştırma {#comparison-to-default-vector-maps}

**Avantajlar:**

- Raster haritalar önceden oluşturulduğu için daha hızlı yüklenir, cihazın verileri gerçek zamanlı olarak işlemesi ve oluşturması gerekmez.
- Raster haritalar göz atarken dinamik olarak yüklenebilir.
- Çevrimdışı bir önbellek oluşturabilir ve yalnızca eksik döşemeleri gerektiğinde indirebilirsiniz.
- Raster haritalar için sınırsız sayıda harici web kaynağı kullanabilirsiniz, bu da uydu görünümleri veya özel haritalar gibi farklı harita türleri için esneklik sağlar.
- Trafik bilgileri gibi raster veriler, sona erme süresinden sonra düzenli olarak güncellenebilir (örneğin, yapılandırmaya bağlı olarak her 20-30 dakikada bir).

**Dezavantajlar:**

- Raster haritalar vektör haritalardan önemli ölçüde daha fazla yer kaplar. Örneğin, bir şehir haritası vektör harita olarak 15 MB olabilir, ancak yakınlaştırma seviyesi 15'te 50 MB'a, yakınlaştırma seviyesi 16'da 200 MB'a ve yakınlaştırma seviyesi 17'de 800 MB'a kadar çıkabilir.
- Daha fazla bilgi almak için raster haritalardaki belirli yerlere veya nesnelere dokunamazsınız.
- Raster haritalar belirli nesneleri hariç tutmak için stilize edilemez veya değiştirilemez.
- Çok fazla yakınlaştırma, özellikle yüksek çözünürlüklü döşemeler mevcut değilse, görüntünün pikselli görünmesine neden olabilir.
- Haritayı metni döndürmeden döndürmek mümkün değildir, bu da etiketleri okumayı zorlaştırabilir.


## Raster Haritalar Nasıl Kullanılır {#how-to-use-raster-maps}

**Eklentiyi etkinleştirin**.

- **iOS**. *iOS* için bu özellik varsayılan olarak çalışır.
- **Android**. *Android* için, OsmAnd'da raster haritaları kullanmak için [Çevrimiçi haritalar eklentisini](../plugins/online-map.md) etkinleştirmeniz gerekir. Şu adımları izleyin: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**Katman parametrelerini değiştirin**. Raster harita katmanlarının görünürlüğünü ve karışımını iyileştirmek için, ekran kaydırıcısını kullanarak katman şeffaflığını ayarlayabilirsiniz. Ayrıca, poligonları gizleyerek vektör harita stilini değiştirebilir, böylece alt katmanlar daha görünür hale gelir. Bu, özellikle uydu görüntülerini görüntülerken kullanışlıdır.


## Raster Haritaları Seçin {#select-raster-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Haritaları göster](@site/static/img/plugins/online-maps/show-maps-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Haritaları göster](@site/static/img/plugins/online-maps/show-maps-ios.png)  

</TabItem>

</Tabs>

OsmAnd'da raster haritalar, çevrimdışı kullanım için optimize edilmiş varsayılan vektör haritaların yanı sıra ek bir harita kaynağı olarak hizmet edebilir.  

Temel haritanızı tamamlamak için bir veya iki çevrimiçi döşeme katmanı ekleme esnekliğine sahipsiniz. Bu, ekranınızda aynı anda üç adede kadar harita katmanı görüntülemenizi sağlar. Örneğin, OsmAnd'ın çevrimdışı vektör haritasını temel olarak kullanabilir, üzerine bir uydu görünümü yerleştirebilir ve ek ayrıntı için bir bisiklet yolu haritasını alt katman olarak yerleştirebilirsiniz.  

Katmanlarınızla harmanlamak için temel haritanın şeffaflığını da ayarlayabilirsiniz. Gerekirse, hızlı ayarlamalar için ana ekranda bir şeffaflık kaydırıcısı etkinleştirebilirsiniz.


### Ana {#main}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*  

![Haritaları göster](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,shared_string_online_maps"/>*  

![Haritaları göster](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

Listeden bir harita stili seçebilir veya kendi stilinizi [ekleyebilirsiniz](#add-new-online-raster-map-source).


### Katman Üstü {#overlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*  

![Alt katman / Üst katman Android'i yapılandır](@site/static/img/plugins/online-maps/overlay-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*  

![Alt katman / Üst katman iOS'u yapılandır](@site/static/img/plugins/online-maps/overlay-ios.png)  

</TabItem>

</Tabs>

1. Alt katman haritasını *açın/kapatın*.
2. *Katman üstü şeffaflığı* (*Android*)/ Katman üstü haritasının *Şeffaflığı* (*iOS*).
3. *Şeffaflık kaydırıcısını göster* (*Android*) / *Haritada kaydırıcıyı göster* (*iOS*). Şeffaflık ayarlarına hızlı erişim.
4. *Katman üstü harita kaynağı* (*Android*) / *Mevcut katmanlar* (*iOS*). Yüklemek veya güncellemek için bir döşeme haritası seçebilirsiniz.
5. *Harita sembollerini göster* - metin, yol işaretleri ve diğerleri gibi.  
6. *Çevrimiçi kaynak ekle* (*iOS*).
7. *Belgelerden içe aktar* (*iOS*).


### Alt Katman {#underlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*  

![Alt katman / Üst katman Android'i yapılandır](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Alt katman / Üst katman iOS'u yapılandır](@site/static/img/plugins/online-maps/underlay-ios.png)  

</TabItem>

</Tabs>

1. Alt katman haritasını *açın/kapatın*.
2. *Temel harita şeffaflığı*.
3. *Şeffaflık kaydırıcısını göster* (*Android*) / *Haritada kaydırıcıyı göster* (*iOS*). Şeffaflık ayarlarına hızlı erişim.
4. *Alt katman harita kaynağı* (*Android*) / *Mevcut katmanlar* (*iOS*). Yüklemek veya güncellemek için bir döşeme haritası seçebilirsiniz.
5. *Poligonları göster/gizle*.
6. *Çevrimiçi kaynak ekle* (*iOS*).
7. *Belgelerden içe aktar* (*iOS*).


## Tepe Gölgelendirme / Eğim {#hillshade--slope}

![Arazi katmanları](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**Tepe Gölgelendirme** ve **Eğim**, arazi kabartmasını gösteren çevrimdışı raster haritalardır. Özel bir harita katmanı olarak, temel harita üzerinde ikinci bir katman olarak görüntülenirler. Haritalar, manzaranın eğimini ve gölgelerini daha doğru anlamanıza yardımcı olmak için ek yükseklik bilgileri içerir. *Tepe Gölgelendirme* ve *Eğim* bilgileri, tek bir kaynaktan, *Küresel gezegen dosyasından* alınan verilere dayanır ve bölgelere ayrılmıştır.  

Tepe Gölgelendirme ve Eğim katmanları arasında geçiş yapmanıza gerek yoktur, çünkü otomatik olarak birleştirilirler. Haritada görüntülemek için bu katmanlardan yalnızca birini seçebilirsiniz, ancak araziyi daha görsel bir şekilde temsil etmek için diğer katmanlar üzerinde [alt katman veya üst katman olarak](#select-raster-maps) ikisini de birleştirme seçeneğiniz de vardır.

Tepe Gölgelendirme ve Eğim ile başlamak için şunları yapmanız gerekir:

1. Topografya eklentisini satın alın:
    - [Android satın alımları](../purchases/android.md)
    - [iOS satın alımları](../purchases/ios.md)
2. [Topografya eklentisini](../plugins/topography.md) etkinleştirin:  
    *Menü → Eklentiler → ︙ → Etkinleştir*
3. Gerekli bölgenizi seçin ve **Arazi haritasını (3D)** indirin.
4. İndirme işlemi, seçilen bölgenin boyutuna ve İnternet bağlantınızın hızına bağlı olarak biraz zaman alabilir.


### Tepe Gölgelendirme ve 3D Kabartma {#hillshade-and-3d-relief}

| Tepe Gölgelendirme | 3D Kabartma |
|--------|---------|
| ![Arazi katmanları](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Arazi katmanları](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

Bu ayarlar uygulandığında harita üzerindeki kabartma gösteriminin farkı, **Topografya** makalesinde ilgili bölümde açıklanmıştır [Tepe Gölgelendirme ve 3D Kabartma](../plugins/topography.md#hillshade-and-3d-relief).


### Görüntüleme Seçeneklerini Yapılandır {#configure-display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya gidin: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya gidin: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Arazi katmanları](@site/static/img/plugins/online-maps/terrain_layers.png)

Tepe Gölgelendirme ve Eğim için yakınlaştırma seviyesini ve şeffaflığı özelleştirebilirsiniz. Daha fazla bilgiyi [Topografya makalesinde](../plugins/topography.md#hillshade-slope-and-altitude-layers) bulabilirsiniz.


## 3D Kabartma {#3d-relief}

:::not
[3D Kabartma](../plugins/topography.md#3d-relief) bir [**OsmAnd Pro**](../purchases/index.md) ücretli özelliğidir <ProFeature />.
:::

![Arazi katmanları](@site/static/img/plugins/online-maps/raster_maps_3d.png)

[**3D Kabartma** özelliği](../plugins/topography.md#3d-relief), bir harita üzerinde araziyi üç boyutlu modeller kullanarak görselleştirmeye olanak tanıyan bir haritalama teknolojisidir. Bu özellik, normal iki boyutlu bir haritaya yükseklik bilgisi ekleyerek 3D ve derinlik efekti oluşturur ve araziyi daha iyi görselleştirmenizi sağlar.  

*3D Kabartmayı kullanmaya başlamak için*:  
[OsmAnd Pro satın alma planını](../plugins/index.md#purchase) satın almanız, [Topografya eklentisini](../plugins/topography.md) etkinleştirmeniz ve *Menü → Haritayı Yapılandır* bölümündeki [3D Kabartma](../plugins/topography.md#3d-relief) öğesini açmanız gerekir.


*3D Kabartma özelliği nasıl çalışır*:  
*1.* 3D kabartma oluşturmak için OsmAnd, arazi yüksekliği hakkında bilgi alır.  
*2.* Yükseklik verilerine dayanarak, harita üzerinde dağları, tepeleri, vadileri ve diğer arazi unsurlarını görüntülemek için bir 3D model oluşturulur.  
*3.* OsmAnd daha sonra bu üç boyutlu modelleri düz bir harita üzerinde görüntüler. Harita, araziyi farklı açılardan ve perspektiflerden görüntülemek için yakınlaştırılabilir, uzaklaştırılabilir ve döndürülebilir.  
*4.* Harita üzerindeki kontur çizgilerinin gösterimi, harita kaynağının çevrimiçi mi yoksa çevrimdışı mı olduğuna bağlı değildir.


## Raster Haritaları Cihaza Hazırlama/Kopyalama {#preparecopy-raster-maps-to-device}

Yeni bir raster harita eklemenin, başka bir cihazdan kopyalamanın, bir bilgisayarda hazırlamanın ve çevrimdışı kullanılacak döşemeleri önceden indirmenin birden fazla yolu vardır. Örneğin, [MOBAC, OsmAndMapCreator vb.](../../technical/map-creation/index.md) gibi özel yazılımlar kullanarak bir bilgisayarda kendi harita paketinizi oluşturabilirsiniz. Tipik olarak raster haritalar `.sqlitedb` uzantılı dosyalar olarak dağıtılır.

OsmAnd'da henüz tanımlanmamış yeni bir raster harita kaynağı eklemek için ana yöntemler şunlardır:

- Hazır `.sqlitedb` dosyasını OsmAnd ile açın.
- Başka bir OsmAnd uygulamasından hazırlanmış çevrimiçi haritaları özel bir `.osf` **paketi** olarak [İçe/dışa aktarma işlevselliği](../personal/import-export.md) aracılığıyla içe aktarın.
- Mobil cihazın kendisinde yeni bir çevrimiçi harita kaynağı oluşturun.
- Çevrimiçi harita kaynağı parametreleriyle sihirli bir URL hazırlayın ve OsmAnd ile açın.


### Yeni Çevrimiçi Raster Harita Kaynağı Ekle {#add-new-online-raster-map-source}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![Çevrimiçi kaynak ekle](@site/static/img/plugins/online-maps/add-online-source-2.png)

Bir raster harita kaynağı oluşturmak için, Mercator Projeksiyonunda harita döşemelerini dağıtan belirli bir URL olan bir **döşeme URL'sini** bilmeniz gerekir. Örneğin, bir döşeme URL'si şöyle görünebilir: `https://tile.osmand.net/hd/6/55/25.png`, burada `tile.osmand.net/hd/` temel URL'dir.

Yeni bir çevrimiçi harita kaynağı kurarken yapılandırılacak temel parametreler şunlardır:

| Parametre | Açıklama |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | Yeni çevrimiçi harita kaynağı için bir ad sağlayın. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | Çevrimiçi döşeme kaynağı için URL'yi girin veya yapıştırın. Döşeme URL biçimine uyduğundan emin olun. |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | Bu parametre, haritanın nasıl görüntülendiğini etkiler. <br/><ul><li>Bir *harita türü* olarak, harita seçilen yakınlaştırma seviyeleriyle sınırlı olacaktır.</li><li>Bir *katman üstü/alt katman* olarak, harita seçilen yakınlaştırma seviyelerinde görünecek ve bu seviyelerin dışında büyütme veya küçültme uygulanacaktır.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | Önbelleğe alınmış döşemelerin yenilenme süresini (dakika cinsinden) ayarlayın. Döşemelerin otomatik olarak yeniden yüklenmesini istemiyorsanız bu alanı boş bırakabilirsiniz. <br/><ul><li>1 gün = 1440 dakika</li><li>1 hafta = 10.080 dakika</li><li>30 gün = 43.200 dakika</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | Kaynağa bağlı olarak *Sözde-Mercator projeksiyonu* ve *Eliptik Mercator projeksiyonu* arasında seçim yapın. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | Döşemelerin nasıl depolanacağını seçin: ya bir *SQLiteDB dosyasında* ya da *döşeme başına bir görüntü dosyası* olarak. |


### Harita Kaynağını Yüklemek için Sihirli URL {#magic-url-to-install-map-source}

Çevrimiçi haritalar, OsmAnd Raster harita listesine özel bir bağlantı ile eklenebilir. Bu bağlantıya tıklayın ve açmak için OsmAnd'ı seçin:

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|Bağlantı parametresi|Örnek|
|:--------|:---------------|
| [Sabit kısım]| `http://osmand.net/add-tile-source` |
|[Ayırıcılar]| ?   & |
|[Ad]|name=TEST|
|[URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[Yakınlaştırma seviyeleri]|min_zoom=9 / max_zoom=15|

Eklenen Çevrimiçi haritayı [Ana / Alt Katman / Üst Katman](#select-raster-maps) menüsünün listesinde bulabilirsiniz.


## Raster Haritaları Yönet {#manage-raster-maps}

Raster haritalar önemli miktarda disk alanı kaplayabilir, bu nedenle düzenli olarak kontrol etmeniz gerekebilir. Büyük veri kümeleri için *SQLite raster kaynağı* kullanılması önerilir, çünkü tüm döşemeleri 1 büyük dosyada (SQLite veritabanı) depolayacaktır.

- [**SQ Lite formatı**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Metainfo formatı**](../../technical/osmand-file-formats/osmand-metainfo.md)

Döşeme formatını değiştirmek için, çevrimiçi haritaların düzenleme menüsünde <Translate android="true" ids="storage_format"/> seçeneğini seçebilirsiniz:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → çevrimiçi haritaları seçin →  
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### Raster Harita Önbelleğini Temizle {#clear-raster-map-cache}

![Çevrimiçi kaynaklar listesi](@site/static/img/plugins/online-maps/online-sources-list.png)

Çevrimiçi raster haritaları Ana / Katman Üstü / Alt Katman olarak kullanırken döşemeler önbellekte depolanır. SQ Lite dosyanızın boyutunu çevrimiçi harita adınızın altında listede görebilirsiniz. Bazen döşemelerin görüntülenmesini hızlandırmak veya verileri güncellemek için düzenli temizlik gerekebilir.  

Harita döşeme önbelleğini temizlemek için şunları yapmanız gerekir:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → çevrimiçi haritaları seçin →  
&#8942; → <Translate android="true" ids="clear_tile_data"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*



### Döşemeleri İndir / Güncelle {#download--update-tiles}

Raster haritalara çevrimdışı erişmek istiyorsanız, döşemeleri önceden yüklemeniz gerekebilir. Bu, mobil cihazınızda yapılabilir, ancak bazı hizmetlerin büyük paket indirmelerini engelleyebileceğini unutmayın. Seçilen alanlar için zaten indirilmiş döşemeleri güncellemek için aynı özelliği de kullanabilirsiniz, aksi takdirde OsmAnd önbellekte zaten depolanmış döşemeleri görüntülemeye devam edecektir.  

Haritaların bir süre sonra döşemeleri otomatik olarak güncellemesi için bir [Son Kullanma Süresi](#add-new-online-raster-map-source) ayarlayabilirsiniz, ardından OsmAnd döşemeleri görüntülendiği anda yeniden yükleyecektir.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

<table class="images">
    <tr>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-1.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-2.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-3.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-4.png').default} alt="raster-maps"/></td>
    </tr>
</table>  

<!--

![Döşemeleri indir Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![Döşemeleri indir Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![Döşemeleri indir Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![Döşemeleri indir Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)

-->


</TabItem>

<TabItem value="ios" label="iOS">  

![Döşemeleri indir iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>

- Raster döşemeleri indirmek veya güncellemek için, çevrimiçi haritanın kaynağını [Ana harita kaynağı](#select-raster-maps) (**Android / iOS**) olarak seçmeniz gerekir. Ayrıca [Katman Üstü](#overlay-layer) haritası veya [Alt Katman](#underlay-layer) için çevrimiçi döşemeleri ayrı ayrı seçebilirsiniz (Yalnızca **Android** için).

- OsmAnd uygulamasının **Android** sürümü için, cihazınızın ekran boyutuna göre bir alan seçmeniz ve haritaya uzun dokunmanız gerekir. Ardından harita bağlam menüsünden [*Eylemler*](../map/map-context-menu.md#update--download-online-maps) ve *Haritayı İndir* veya *Haritayı Güncelle* seçeneğini seçin. Harita İndirme ekranında, gerekli ayarlarda değişiklikler yapın ve İndir'e dokunun.  

- OsmAnd uygulamasının **iOS** sürümünde, haritaya uzun dokunmanız, ardından harita bağlam menüsünden [*Eylemler*](../map/map-context-menu.md#update--download-online-maps) ve *Haritayı İndir* veya *Haritayı Güncelle* seçeneğini seçmeniz gerekir. Harita İndirme ekranında, gerekli alanı seçebilir ve gerekli ayarları değiştirebilirsiniz. Tüm parametreleri ayarladıktan sonra, döşeme sayısını ve indirme boyutunu görebilirsiniz.


### Raster Harita Parametrelerini Değiştir {#change-raster-map-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → çevrimiçi haritaları seçin →  &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Raster haritalar, döşemeler zaten eşlenmişse olduğu gibi kullanılabilir. Raster haritalar çevrimiçi olarak sağlanıyorsa, her zaman yapılandırılması gereken bir temel URL vardır. Raster haritalar için değiştirilebilecek birkaç temel parametre daha vardır, bunları makalenin [bu bölümünde](#add-new-online-raster-map-source) okuyabilirsiniz. Daha karmaşık parametreler, [SQ Lite formatının](../../technical/osmand-file-formats/osmand-sqlite.md) dahili bileşenlerinde kodlanmıştır.


## İlgili Makaleler {#related-articles}

- [İçe / Dışa Aktar](../personal/import-export.md)
- [Renk Paleti Şemaları](../personal/color-palette-schemes.md)