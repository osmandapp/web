---
source-hash: a45f8d3e0c7440482cc20c9fa56b987c3a3c65ecfc717d9d8abb99c630f8d16e
sidebar_position: 14
title: Topografya
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

:::info Ücretli özellik
Topografya eklentisi, OsmAnd uygulamasının [ücretli bir özelliğidir](../purchases/index.md).
:::

Topografya, arazinin rölyefini görsel olarak değerlendirmek için bilgi sağlayan önemli bir haritacılık özelliğidir.
Topografya bilgileri gibi [Eşyükselti eğrileri](#contour-lines), [Arazi](#terrain) (*Gölgelendirme* ve *Eğim*), ve [3B Rölyef](#3d-relief) yükseklik, rölyef, aşırılıklar, diklik veya eşit yükseklikteki noktaları görerek arazinin konumunu görsel olarak değerlendirmeye yardımcı olur.

Bu eklenti tarafından sağlanan her özellik, etkinleştirildiğinde, [ayarlara](../map/raster-maps.md#overlay-layer) bağlı olarak ana harita kaynağının üstünde veya altında görüntülenebilen bağımsız bir harita katmanıdır.  

Topografya eklentisi aşağıdaki harita türlerine erişim sağlar:  

- [Eşyükselti eğrileri](#contour-lines). Bu, [**metre** veya **fit**](#contour-lines-meters-or-feet) cinsinden temsil edilen bir [vektör haritasıdır](../map/vector-maps.md). Eşyükselti eğrileri yükseklik seviyelerini gösterir ve araziyi görselleştirmeye yardımcı olur.
- [Gölgelendirme](#hillshade-slope-and-altitude-layers). Tepelerin ve yamaçların gölgelendirilmesiyle harita türleri, rölyefi daha görünür hale getirir ve araziyi görsel olarak yorumlamaya yardımcı olur.
- [Eğim](#hillshade-slope-and-altitude-layers). Rota planlaması ve güvenlik için önemli olabilecek yamaçların dikliği hakkında bilgi sağlayan [Raster](../map/raster-maps.md) katmanı.
- [3B Rölyef](#3d-relief). Yalnızca [OsmAnd Pro aboneliği](../purchases/index.md) ile kullanılabilen, arazinin üç boyutlu bir temsilini sağlayan bir [vektör haritasıdır](../map/vector-maps.md).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Eşyükselti Eğrileri | Gölgelendirme | Eğim |
|:---|:---|:---|
| ![Contour_lines_android](@site/static/img/plugins/contour-lines/Contour_lines_android.png) | ![Hillshade_android](@site/static/img/plugins/contour-lines/Hillshade_android.png) | ![Slopes_android](@site/static/img/plugins/contour-lines/Slopes_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Eşyükselti Eğrileri | Gölgelendirme | Eğim |
|:---|:---|:---|
| ![Contour_lines_ios](@site/static/img/plugins/contour-lines/Contour_lines_ios.png) | ![Hillshades_ios](@site/static/img/plugins/contour-lines/Hillshades_ios.png) | ![Slopes_ios](@site/static/img/plugins/contour-lines/Slopes_ios.png) |

</TabItem>

</Tabs>

### OsmAnd tarafından arazi tespiti için kullanılan DEM verileri için lisans {#license-for-dem-data-used-by-osmand-for-terrain-detection}

Haritadaki yükseklik verileri (70 derece kuzey enlemi ile 70 derece güney enlemi arasında), *Shuttle Radar Topography Mission (SRTM)* kapsamında yapılan ölçümlerden elde edilmiştir. Bu, *NASA'nın Dünya Gözlem Sistemi*'ndeki birincil görüntüleme aracı olan *Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*'ı kullanmıştır.  
Tam bilgi için [Lisans](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146) bölümüne bakın.


<details>
<summary>DEM (DSM) verileri</summary>
   - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Bu ürün için kullanılan orijinal veriler JAXA'nın AW3D'si tarafından sağlanmıştır.<br/>
	- <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
	- <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummins, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
	- <a href="https://sonny.4lima.de">Sonny's LiDAR Digital Terrain Models of Europe</a> (DTM).

</details>


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

Haritada **Eşyükselti eğrileri** ve **Arazi (Gölgelendirme, Eğim)** verilerini görüntülemek için:

1. **Satın alma**: [OsmAnd+, OsmAnd Maps+ veya OsmAnd Pro satın alma planı](../plugins/index.md#purchase)
2. Eklentiler bölümünde *Ana Menü*'deki Topografya eklentisini [etkinleştirin](../plugins/index.md#enable--disable).
3. [İndirin](#download-maps): Eşyükselti eğrileri, Gölgelendirme, Eğim veya Arazi haritası (3B) haritalarını.
4. **Etkinleştirin ve ayarlayın**: Harita görünümü için Eşyükselti eğrileri, Gölgelendirme veya Eğim.
5. Ayrıca [YouTube eğitim videosunu](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg) izleyebilirsiniz.  

[**3B Rölyef**](#3d-relief) görüntülemek için *OsmAnd Pro* planını satın almanız gerekir; bu plan Topografya eklentisine erişimi içerir.


## Haritaları İndirin {#download-maps}

Eklenti işlevselliği ile çalışmaya başlamak için ilgilendiğiniz haritaları indirmeniz gerekir. Dağlık bölgeler için Eşyükselti Eğrileri gibi bazı haritalar 2 GB'ı aşan oldukça büyük olabilir ve eski cihazlarda desteklenmeyebilir.

Kararlı çalışma ve kaynak tasarrufu için, tüm ülkenin değil, uygulamanın sunduğu belirli bölgelerin haritasını indirebilirsiniz. Her harita türünün boyutu hakkında bilgi, adlarının altında listelenmiştir.


### 3B Rölyef Haritaları {#3d-relief-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*

![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_andr_5.png)  ![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_andr_4.png)

</TabItem>  

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*

![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_1.png) ![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_2.png)

</TabItem>

</Tabs>

Gölgelendirme, Eğim ve 3B Rölyef'i görüntülemek için **Arazi haritası (3B)** haritalarını indirmeniz gerekir. Haritaları indirdikten sonra, *Ana Menü*'nün [Haritayı yapılandır](../map/configure-map-menu.md) bölümünü kullanarak **Eşyükselti eğrileri** ve **Arazi**'yi görüntüleyebilirsiniz.

Ekranda görüntülenen harita indirilmemişse, *Menü → Haritayı yapılandır → Topografya bölümü → Arazi* bölümünde, özellikler listesinin altında, önerilen ek haritalarla birlikte *Haritaları indir* bölümü görüntülenecektir.


### Eşyükselti Eğrileri (Metre veya Fit) {#contour-lines-meters-or-feet}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contour lines download dialog Android](@site/static/img/plugins/contour-lines/contour_lines_download_dialogue_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Contour lines download dialog iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png)

</TabItem>

</Tabs>  

[**Eşyükselti eğrileri**](#contour-lines) için, haritada hangi [birimlerde](../personal/profiles.md#units--formats) (metre veya fit) görüntüleneceklerini belirlemeniz ve haritanın uygun sürümünü cihazınıza indirmeniz gerekir.

**Birim seçenekleri değiştirilemez**, bu nedenle metreden fite veya tersine geçmeniz gerekiyorsa, yeni sürümü indirmek için Eşyükselti eğrileri haritasının önceki sürümünü kaldırmanız gerekir.


## Eşyükselti Eğrileri {#contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,download_srtm_maps"/>*

![Contour lines menu Android](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → Eşyükselti eğrileri*

![Contour lines menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_ios.png)

</TabItem>

</Tabs>  

[Eşyükselti eğrileri](../map/vector-maps.md#-contour-lines), bir harita üzerindeki yüksekliklerin grafiksel bir temsilidir ve vektör haritaları olarak mevcuttur. Aynı rakıma sahip noktaları gösteren çizgiler oluştururlar ve bu çizgiler, yüzeyin hangi yöne ve ne kadar eğimli olduğunu belirlemenizi sağlayan konturlar oluşturur.

[Harita oluşturma motoru](../personal/global-settings.md#map-rendering-engine) kullanılırken:

- **Sürüm 2 (OpenGL)**. Eşyükselti eğrileri hem 3B görünümde hem de 3B rölyef modunda desteklenir.
- **Sürüm 1**. İnternet'ten alınan döşeme haritaları kullanılırken eşyükselti eğrileri desteklenmez.

**Görünüm ayarları**:

- *<Translate android="true" ids="download_srtm_maps"/>*. Eşyükselti eğrilerini açıp kapatın.
- *<Translate android="true" ids="show_from_zoom_level"/>*. Eşyükselti eğrilerinin görünür olduğu [yakınlaştırma seviyelerini](../map/interact-with-map.md#my-location-and-zoom) tanımlayın.
- *<Translate android="true" ids="srtm_color_scheme"/>*. Eşyükselti eğrilerini görüntülemek için rengi seçin.
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>*. Eşyükselti eğrilerinin genişliğini ayarlayın.
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>*. Eşyükselti eğrilerinin yoğunluğunu seçin (Düşük, Orta, Yüksek). Daha yüksek yoğunluklar yükleme hızını etkileyebilir.
- *<Translate android="true" ids="maps_and_resources"/>*. Mevcut bölge ve yakın bölgeler için eşyükselti eğrisi haritalarını görüntüleyin ve indirin.


## Arazi {#terrain}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_andr.png)  ![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_ios.png)   ![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_2_ios.png)

</TabItem>

</Tabs>  

**Arazi** seçeneği, *Gölgelendirme*, *Eğim* ve *Rakım* gibi üç özelliği etkinleştirir ve özelleştirmenize olanak tanır.  
Özel özellikler:  

- Aynı anda yalnızca bir seçenek etkinleştirilebilir: Gölgelendirme, Eğim veya Rakım.
- İlgili haritayı indirip etkinleştirdikten sonra herhangi bir değişiklik görmüyorsanız, uygulamayı yeniden başlatmanız önerilir.

**Arazi** menüsü, [renk şeması](#default-color-scheme) seçimi ile [değiştirme](#modify-color-scheme) seçeneğini ( [Pro aboneleri](../../user/purchases/index.md) için), harita üzerindeki katmanın şeffaflığını değiştirme ([görünürlük](#visibility)) ve görüntülenmesi için [yakınlaştırma seviyesini](#zoom-levels) seçme, [önbelleğe alınmış verilerin](#cache-size) boyutu hakkında bilgi ve katmanı görüntülemek için gereken [haritaların](../../user/personal/maps-resources.md) bir listesini içerir.


## Gölgelendirme, Eğim ve Rakım Katmanları {#hillshade-slope-and-altitude-layers}

| Gölgelendirme | Eğim | Rakım |
| ------ | ------- | ------- |
| ![Hillshade](../../../blog/2023-08-28-terrain/img/hillshade.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) |

**Gölgelendirme**, arazi verilerini kullanarak yüzey aydınlatmasını simüle etmeye dayanır. Bu yöntem, ışık kaynağına göre yüzeyin açısına bağlı olarak gölgeler ve vurgular oluşturmayı içerir. Sonuç olarak, haritada doğal tepeler, vadiler ve diğer arazi detaylarını görürsünüz.  

**Eğim**, haritadaki noktaların yükseklik verilerine göre yüzey eğim açısını belirler. Eğim açısı hesaplamaları, yükseklik değişiklikleri ve noktalar arasındaki mesafeler dikkate alınarak yapılır ve bu değişiklik bir eğim açısı olarak temsil edilir.  

**Rakım**, haritadaki noktaların deniz seviyesine göre yüksekliğini temsil eder. Arazinin yükseklikte nasıl değiştiğini anlamanıza yardımcı olur. Bu özellik, özellikle yükseklik bilgisinin rota planlamasına ve fiziksel eforun yönetilmesine yardımcı olabileceği yürüyüş veya dağ bisikleti gibi aktiviteler için kullanışlıdır. Rakım verileri yükseklik modellerinden türetilir ve yüksek ve alçak noktaların net bir görünümünü sağlayarak bir rotanın zorluğunu değerlendirmeyi veya yol boyunca zirveleri ve vadileri belirlemeyi kolaylaştırır.

**Gölgelendirme**, **Eğim** ve **Rakım** raster haritaları, Sayısal Yükseklik Modelleri (DEM) gibi raster arazi verilerine dayanarak oluşturulur.

**Kullanım:**

- *Navigasyon.* Hem yokuş aşağı hem de yokuş yukarı dik yamaçları belirlemeye yardımcı olur; bu, güvenli navigasyon için çok önemli olabilir.
- *Rota planlama.* Araziyi göz önünde bulundurarak en uygun rotaları seçmeye yardımcı olur.
- *Arazi tahmini.* Özellikle yürüyüş veya bisiklet sürüyorsanız, manzarayı görselleştirmek için uygundur.


### Varsayılan Renk Şeması {#default-color-scheme}

| Gölgelendirme | Eğim | Rakım |
| ------ | ------- | ------- |
|![Hillshade](@site/static/img/plugins/contour-lines/color_scheme_hillshade_menu_2.png)|![Slope](@site/static/img/plugins/contour-lines/color_scheme_slope_menu_2.png)| ![Menu](@site/static/img/plugins/contour-lines/color_scheme_altitude_menu.png) |

- *Gölgelendirme*, yamaçları, zirveleri ve alçak bölgeleri göstermek için koyu tonlar kullanır. Sanal Güneş'in sabit bir azimutu (yönü) 315 derecedir.

- *Eğim*, arazinin dikliğini görselleştirmek için renk kullanır. Daha fazlasını [buradan](https://en.wikipedia.org/wiki/Grade_(slope)) okuyabilirsiniz. Her renk, yataydan bir sapma açısına karşılık gelir. Ek bir *Eğim* renk şeması olan ***Çığ***, **Değiştir** menüsünde mevcuttur.

- *Rakım*. Rakım haritası, tanımlanmış bir renk şemasından gelen gradyanı kullanarak hesaplanan harita yüksekliğine göre her pikseli renklendirir. Genellikle, rakım şemaları konuma çok bağlıdır. Dağlık bölgelerde renkleri daha geniş bir rakım aralığına dağıtmayı tercih ederken, düz alanlarda minimum/maksimum rakım arasında küçük bir aralığa sahip bir renk şeması seçersiniz.


### Renk Şemasını Değiştir {#modify-color-scheme}

:::info Ücretli özellik
*Renk Şemasını Değiştir* özelliği, [iOS](../purchases/ios.md#pro-features) ve [Android](../purchases/android.md#pro-features) için **OsmAnd Pro** ücretli bir özelliktir <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_1_andr.png)   ![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_1_ios.png)   ![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_2_ios.png)

</TabItem>

</Tabs>

*Renk Şemasını Değiştir özelliği* bir renk şeması seçmenize olanak tanır:

- [Önceden tanımlanmış bir listeden](#default-color-scheme).
- Bilgisayarınızda oluşturduğunuz renk paleti dosyalarından. Özel dosyalar, [içe/dışa aktarma aracı](../personal/import-export.md) kullanılarak OsmAnd'a eklenebilir.

Haritaların ve rotaların görünümünü kişiselleştirmek için [bu paletleri düzenleyebilirsiniz](../personal/color-palette-schemes.md#palette-modify).


### Görünürlük {#visibility}

| Görünürlük %31 | Görünürlük %74 |
| ------ | ------- |
| ![Visibility ](../../../blog/2023-08-28-terrain/img/31.png) | ![Visibility ](../../../blog/2023-08-28-terrain/img/74.png) |

*Görünürlük* işlevi, Gölgelendirme için gölgelerin şeffaflığını ve Eğim parametresindeki açıyı temsil etmek için kullanılan renkleri ayarlamak için kullanılır.

### Yakınlaştırma Seviyeleri {#zoom-levels}

![Zoom](../../../blog/2023-08-28-terrain/img/zoom.png)  

*Yakınlaştırma Seviyeleri* işlevi, Gölgelendirme veya Eğim harita katmanlarının görüntüleneceği harita yakınlaştırma seviyelerinin minimum ve maksimum değerlerini 4'ten 19'a kadar ayarlamanıza olanak tanır.

### Önbellek Boyutu {#cache-size}

**Önbellek boyutu**, cihazınızda şu anda *Arazi* verileri için kullanılan bellek miktarını gösteren bir bilgi bölümüdür. Haritada *Gölgelendirme* veya *Eğim* bilgilerini her görüntülediğinizde, tüm bu veriler hızlı erişim ve daha sonra kullanılmak üzere geçici olarak önbellekte depolanır ve cihazınızın işlemcisine ek yük bindirilmez.  

**Önbelleği temizlemek**, bazen cihazınızda yer açmak veya olası performans sorunlarını çözmek için gereklidir. Önbelleği temizlemek için cihazın *Sistem Ayarları*'na gitmeniz gerekir, ardından yol şöyle olabilir: *Uygulamalar → OsmAnd → Depolama → Önbelleği temizle*.


### Oluşturma Motoru (Android) {#rendering-engine-android}

**Gölgelendirme** ve **Eğim**, seçilen herhangi bir [Harita oluşturma motorunda](../personal/global-settings.md#map-rendering-engine) görüntülenir ve ayarlanır.

1. **Harita oluşturma motoru Sürüm 1** kullanıyorsanız, Gölgelendirme ve Eğim raster haritalarının normal [indirmesini](../start-with/download-maps.md) kullanmanız gerekir.

2. **Harita oluşturma motoru Sürüm 2 (OpenGL)** kullanıyorsanız:
    - Normal Gölgelendirme ve Eğim raster harita indirme türünü kullanmaya devam edebilirsiniz. Ancak, bunu yapmak için [OsmAnd geliştirme eklentisini](../plugins/development.md) etkinleştirmeniz ve [Gölgelendirme ve eğim için raster SQLite formatını kullan](../plugins/development.md#terrain) ayarını etkinleştirmeniz gerekir.

    - Alternatif olarak, [Arazi Haritası (3B)](../personal/maps-resources.md#paid-map-content) indirmesini kullanabilirsiniz. Bu, cihazınızda bellek alanından tasarruf sağlar ve Gölgelendirme, Eğim ve 3B Rölyef efektleri cihazınız kullanılarak bunlardan oluşturulur.


### Hızlı Eylemler {#quick-actions}

![QA for Terrain](@site/static/img/plugins/contour-lines/QA_for_terrain.png)

[Eşyükselti Eğrileri](#contour-lines), [Arazi](#terrain) katmanları ve [Arazi renk şeması](#default-color-scheme) görünürlüğünü değiştirmek için harita ekranındaki *Hızlı Eylem* düğmelerini kullanabilirsiniz. Haritayı Yapılandır menüsünde seçilen katmana bağlı olarak, bir *Arazi* eylemini düğmeye atamak *Gölgelendirme*, *Eğim* veya *Rakım*'ı görüntüleyecektir.  

*Harita türlerini Göster veya Gizle* için ana ayarlar, Haritayı Yapılandır menüsünün Topografya bölümündedir. [Hızlı Eylem](../widgets/quick-action.md#configure-map) makalesinde, görüntülenebilecek katmanların bir listesini bulabilirsiniz. Bu harita yapılandırmasına hızlı erişime ihtiyacınız varsa, *Özel Düğme* aracını kullanın.

- [Eylem ekle](../widgets/quick-action.md#custom-buttons) bölümüne gidin: *Menü → Ekranı yapılandır → Özel düğmeler → Hızlı eylem → Eylem ekle → Haritayı yapılandır*.
- Belirli bir topografya katmanının görünürlüğünü değiştirmek için bir veya daha fazla QA düğmesi ekleyin.


## 3B Rölyef {#3d-relief}

:::info Pro özellik
3B Rölyef, [**OsmAnd Pro**](../purchases/index.md) ücretli bir özelliktir <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/>*

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_switch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/>*

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_switch_ios.png)

</TabItem>

</Tabs>  

3B Rölyef özelliği, yükseltilmiş bir rölyef üretir ve manzaranın üç boyutlu bir temsilini sağlar. 3B Rölyef çevrimdışı çalışır ve [OsmAnd vektör haritaları](../map/vector-maps.md) veya herhangi bir [raster harita](../map/raster-maps.md#select-raster-maps) ile [Harita Kaynağı](../map/raster-maps.md#main) veya [Alt Katman/Üst Katman](../map/raster-maps.md#overlay-layer) olarak kullanılabilir.

***Haritada 3B Rölyef nasıl görüntülenir.***

- [iOS](../purchases/ios.md#pro-features) veya [Android](../purchases/android.md#pro-features) için **OsmAnd Pro** aboneliği satın alın.

- [*<Translate Android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md) bölümüne gidin:
    - **Android**: *<Translate android="true" ids="srtm_plugin_name"/> bölümüne ilerleyin → <Translate android="true" ids="relief_3d"/>*.
    - **iOS**: *<Translate ios="true" ids="srtm_plugin_name"/> bölümüne ilerleyin → <Translate ios="true" ids="shared_string_terrain,shared_string_relief_3d"/>*.

- Gerekirse bölgelerin [Arazi haritasını (3B)](#3d-relief-maps) indirin.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Vektör harita katmanı | Raster harita katmanı |
| ------ | ------- |
| ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_1.png) | ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_2.png) |

</TabItem>  

<TabItem value="ios" label="iOS">

| Vektör harita katmanı | Raster harita katmanı |
| ------ | ------- |
| ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_1.png)  | ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_2.png) |

</TabItem>

</Tabs>


### Dikey Abartı {#vertical-exaggeration}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/> → Dikey abartı*

![Vertical exaggeration Android](@site/static/img/plugins/contour-lines/vertical_exag_and.png)

</TabItem>  

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/> → Dikey abartı*

![Vertical exaggeration iOS](@site/static/img/plugins/contour-lines/vertical_exag.png)

</TabItem>

</Tabs>

*Dikey abartı*, *3B rölyef* için özel bir katsayıdır. Ölçeği (*Dikey abartı*) x1'den x3'e değiştirebilirsiniz. Bu özellik, artırılmış detaylarla daha pürüzsüz arazi konturlarını görüntülemenizi sağlar.


### Gölgelendirme ve 3B Rölyef {#hillshade-and-3d-relief}

| Gölgelendirme | 3B Rölyef |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

**Gölgelendirme**, arazinin eğimini ve şeklini görsel olarak temsil eden gölgeler kullanarak araziyi gösteren bir harita türüdür.  
**3B Rölyef**, haritaya üç boyutlu efektler ekleyen bir özelliktir.  

*Gölgelendirme*'yi **devre dışı bırakır** ve *3B Rölyef*'i **etkinleştirirseniz**, rölyef gölgeleri hala görünür olacaktır çünkü *Gölgelendirme* ve *3B Rölyef* haritayı görselleştirmenin iki farklı yoludur. *Gölgelendirme*, araziye dayalı gölgeler oluşturur ve bunları haritaya eklerken, *3B Rölyef*, arazinin derinliğini ve şeklini göstermek için 3B öğeleri modeller ve gölgeler görselleştirmenin bir parçasıdır. Bu özellikler paralel olarak çalışabilir ve *Gölgelendirme*'yi devre dışı bırakmak 3B efektlerin nasıl görüntülendiğini etkilemez.  

**Gölgelendirme** **etkinleştirildiğinde**, rölyef gölgeleri olan bir görüntü, *3B Rölyef* görüntüsünden daha ayrıntılı, daha koyu ve daha basamaklı görünür. Bunun açıklaması, *Gölgelendirme*'nin arazinin gradyanlarını ve kontrastlarını vurgulayarak daha keskin ve daha ayrıntılı bir görüntü oluşturmasıdır. *3B Rölyef* özelliği, haritaya daha akıcı ve pürüzsüz bir görünüm kazandırarak araziyi yumuşatır ve bazı ince detayların görünürlüğünü potansiyel olarak azaltır.


## Katman Türlerini Birleştir {#combine-layer-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contour lines combined with Hillshade](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Contour lines combined with Slope](@site/static/img/plugins/contour-lines/5_slope_n_contour.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Contour lines combined with Hillshade in iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Contour lines combined with Slope in iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>

OsmAnd, daha görsel bir görüntü için birden fazla harita katmanı türünü birleştirmenize olanak tanır.

- **Eşyükselti eğrileri** ve **Gölgelendirme** kombinasyonu, dağ yamacının dikliğini görsel ve sayısal olarak tahmin etmek için en uygunudur.
- **Eşyükselti eğrileri** ve **Eğim** katmanlarının kombinasyonu, yamaç dikliğini tahmin etmek ve aynı yüksekliğe sahip noktaları bulmak için en iyisidir.
- **3B Rölyef** ve **Gölgelendirme** katmanlarının kombinasyonu, arazinin, rölyefin ve manzara detaylarının daha gerçekçi ve görsel bir temsilini elde etmenizi sağlar. Bu kombinasyon özellikle dağlık ve engebeli araziler için uygundur.


## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Genel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritalar (Harita Stilleri)](../../user/map/vector-maps.md)

### Yaygın Sorunlar ve Çözümler {#common-issues-and-solutions}

<!-- Troubleshooting Steps-->

1. Topografya (eski adıyla Eşyükselti eğrileri) eklentisi satın alımını nasıl geri yükleyebilirim. [(kontrol et)](../troubleshooting/purchases_payments.md#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase).
2. Eşyükselti Eğrileri, Yükseklik verileri veya 3B Rölyef görüntülenmiyor. [(kontrol et)](../troubleshooting/maps-data#contour-lines-elevation-data-or-3d-relief-are-not-displayed)
3. Harita navigasyon sırasında otomatik olarak 3B moda geçiyor:  
    - **Menü → Ekranı Yapılandır → Düğmeler → Varsayılan Düğmeler** bölümünde **3B Mod** düğmesinin devre dışı olduğundan emin olun.  
    - **Menü → Haritayı Yapılandır → Topografya** bölümünde 3B efekti tetikleyebilecek herhangi bir Arazi özelliğinin etkin olup olmadığını kontrol edin.