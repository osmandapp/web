---
source-hash: 872ff87a35bc61fbd415cf02fa9593a1f01ab711832783bd8413d76746b5e729
sidebar_position: 5
title: Vektör Haritalar (Harita Stilleri)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Genel Bakış {#overview}

Vektör haritalar, OsmAnd için varsayılan harita veri kaynağı olarak kullanılmak üzere tasarlanmıştır, bu nedenle **bunları cihazınıza indirmeniz gerekir**. Vektör haritalar, bisiklet, yürüyüş, araba veya kar aracıyla sürüş ve diğerleri gibi farklı etkinlikler için çok sayıda harita stilini destekler.

Her harita stili, belirli nesneleri vurgulamak veya gizlemek ve gündüz ve gece modları arasında geçiş yapmak için özelleştirilebilir. Vektör harita verileri, vektör verileriyle artırılabilir ve varsayılan Harita stilinde görüntülenebilir, örneğin *Kontur çizgisi* bilgileri. Gerekli bilgileri göstermek için *kendi OsmAnd harita stilinizi oluşturabilirsiniz*.


## Kullanım Durumları {#use-cases}

Özelleştirilebilir harita stilleri, OsmAnd'ın ana avantajlarından biridir. Harita görüntüsünü kendinize ve hobilerinize göre özelleştirebilir, belirli harita nesnelerinin görüntülenmesini veya gizlenmesini, bu nesnelerin boyutlarını ve renklerini ayarlayabilir ve belirli nesnelerin görüntü ölçeğini değiştirebilirsiniz.


## Varsayılan Harita Stilleri {#default-map-styles}

OsmAnd size varsayılan olarak uyan birçok harita stili ve veri katmanı sunar. Bu bölüm, gündüz ve gece modları için ana olanları açıklar.

1. **Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

2. **iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*


### OsmAnd {#osmand}

![OsmAnd harita stili](@site/static/img/map/map-style-osmand-with-routes.png)

OsmAnd'ın standart harita oluşturma stili, detay ve sadelik arasında bir denge kurarak şehir içi ve dış mekan keşifleri için idealdir. Sokaklar, binalar ve ulaşım durakları gibi şehir özelliklerini detaylandırırken, görsel karmaşayı azaltarak haritaları daha net hale getirir.

Temel faydaları arasında rota haritalama, yüzey kalitesi, erişim kısıtlamaları, yol işaretleri, SAC ölçekli patika çizimleri, spor tesisleri ve kontur çizgileri gibi topografik detaylar bulunur.


### Gezi Görünümü {#touring-view}

![Gezi görünümü harita stili](@site/static/img/map/map-style-touring.png)

Yüksek kontrast ve maksimum detay içeren gezi stili. Varsayılan OsmAnd stilinin tüm seçeneklerini içerirken, özellikle yollar, patikalar ve diğer seyahat yolları olmak üzere mümkün olduğunca fazla detay gösterir. Bir *gezi atlasında* yol türlerinin net ayrımı. Gündüz, gece ve dış mekan kullanımı için uygundur.

### UniRS ve LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

UniRS ve LightRS stilleri, temel harita bilgilerini farklı renk şemalarında oluşturan yazar stilleridir.

- **UniRS stili**. Bu stil, yaya ve bisiklet yolları için kontrastı artırmak amacıyla varsayılanın değiştirilmiş bir versiyonudur. Klasik Mapnik renk şemasını korur.

    ![LightRS harita stili](@site/static/img/map/map-style-lightrs.png)

- **LightRS stili**. Bu, hafif bir gece moduna sahip basit bir sürüş stilidir. Yolları zıt turuncu renkte vurgular, ikincil harita nesnelerini karartır ve kontur çizgileri gibi topografik özellikleri gösterir.

    ![UniRS harita stili](@site/static/img/map/map-style-unirs.png)

### Denizcilik {#nautical}

![Denizcilik harita stili](@site/static/img/map/map-style-nautical.png)

Bu, şamandıralar, deniz fenerleri, nehir rotaları, deniz yolları, işaretler, limanlar, denizcilik işaretleri ve derinlik konturları içeren bir denizcilik navigasyon stilidir. Daha fazla bilgi için [Deniz Haritası Görünümü](../plugins/nautical-charts.md) makalesine bakın.

### Kış ve Kayak {#winter-and-ski}

![Kış ve Kayak harita stili](@site/static/img/map/map-style-winter-ski.png)

Bu, pistleri, asansörleri ve kros parkurlarını tanımlayan, ayrıca ikincil harita nesnelerini gizleyen bir kayak sporu stilidir. **Kış ve Kayak stili**, kış sporları navigasyonunda size yardımcı olmak için tasarlanmıştır.

Kayak pistlerini ve pistlerin zorluğu ve asansör işaretleri gibi diğer detayları görebilirsiniz. Temel faydaları arasında pistlerin, asansörlerin ve diğer kayak özelliklerinin rahatça görüntülenmesi yer alır. Haritanın dikkat dağıtıcı ikincil nesneleri daha azdır. Daha fazla bilgi için [Kayak Haritaları](../plugins/ski-maps.md) makalesine bakın.

### Topo {#topo}

![Topo harita stili](@site/static/img/map/map-style-topo.png)

Bu stil, doğada yürüyüş, kamp ve bisiklet sürmek için tasarlanmıştır. Zıt yollar ve doğal özellikler, farklı patika türleri, genişletilmiş kontur çizgisi seçenekleri ve ek detaylar içerir. Açık havada okunabilir. *Yüzey Bütünlüğü* ayarı, yolun kalitesini ayırt etmenizi sağlar.

### OSM-carto {#osm-carto}

![OSM-carto harita stili](@site/static/img/map/map-style-osm-carto.png)

Bu stil, varsayılan [OpenStreetMap web stilini](https://www.openstreetmap.org/) taklit eder. Web sürümünün kaynak kodu [Github](https://github.com/gravitystorm/openstreetmap-carto) adresinde mevcuttur, OsmAnd kodu [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml) adresinde mevcuttur.

### Çöl {#desert}

![Çöl harita stili](@site/static/img/map/map-style-desert.png)

Çöller ve diğer seyrek nüfuslu bölgeler için tasarlanmıştır, daha detaylı harita bilgisi sunar.

### Arazi {#offroad}

![Arazi harita stili](@site/static/img/map/map-style-offroad.png)

Arazi navigasyonu için tasarlanan bu stil, [Topo](#topo) harita düzenine dayanır ve uydu görüntüleriyle bir alt katman olarak iyi çalışır. Patikaları, yolları, bisiklet rotalarını ve diğer arazi yollarını vurgulamak için daha ince ana yollara sahiptir, bu da kırsal veya uzak bölgelerdeki asfaltlanmamış rotaları keşfetmek için idealdir.

### Kar Aracı {#snowmobile}

![Kar aracı harita stili](@site/static/img/map/map-style-snowmobile.png)

Kar aracı navigasyonu için özel olarak tasarlanan bu stil, kar aracı dostu patikaları, yolları ve izleri vurgular. Karlı bölgelerdeki özel patikaları vurgular, standart yolların bulunmadığı karla kaplı arazilerde net navigasyon sunar.


## Harita Lejantı {#map-legend}

Harita lejantı, OsmAnd haritalarında kullanılan sembolleri anlamak için bir anahtar görevi görür. Noktalar, çizgiler ve alanlar dahil olmak üzere çeşitli harita sembollerinin anlamını açıklar. Örneğin, mavi kıvrımlı çizgiler nehirleri gösterirken, farklı renkler ve şekiller binaları, patikaları ve rotaları temsil edebilir.

Lejant, kullanıcıların haritada gördüklerini yorumlamasına yardımcı olur. Tam OsmAnd harita lejantına [buradan](../map-legend/index.md) ulaşabilirsiniz.


## Harita Yazı Tipleri (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*

![Harita yazı tipleri Android sürümü](@site/static/img/map/map_fonts.png) ![Harita yazı tipleri sürümü](@site/static/img/map/map_fonts_1.png)

Basitleştirilmiş/geleneksel Çince, Japonca ve Korece haritalar için, cihazınızda gerekli yazı tipleri yoksa yanlış karakterler veya semboller (kareler gibi) görünebilir. Bu sorun yerel adları oluştururken ortaya çıkar ve OsmAnd aracılığıyla gerekli yazı tiplerini indirerek çözülebilir.

Bazı ilgili yazı tipi sorunları GitHub'da belgelenmiştir: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## * Kontur Çizgileri {#-contour-lines}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Kontur çizgileri harita stili](@site/static/img/map/contour_lines.png)

OsmAnd'daki kontur çizgileri, vektör haritalarda yükseklik çizgileri olarak görüntülenir. Bunları kullanmak için öncelikle [Topografya eklentisini](../plugins/topography.md) etkinleştirmeniz, gerekli bölgesel verileri indirmeniz ve görüntüyü yapılandırmanız gerekir. Bu özellik varsayılan olarak etkin değildir ve bir [satın alma](../purchases/index.md) gerektirir.

Kontur çizgileri tüm harita stilleriyle uyumludur ve [Kontur çizgileri menüsü](../plugins/topography.md#contour-lines) aracılığıyla özelleştirilebilir. Daha fazla ayrıntı için [Topografya eklentisi](../plugins/topography.md) makalesini ziyaret edin.


## * Deniz Derinliği {#-nautical-depth}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

Deniz derinliği kontur çizgileri, eşit derinlikteki alanları temsil ederek su altı topografya değişikliklerini görselleştirmeye yardımcı olur. Bu özellik tüm harita stilleri ve modlarında mevcuttur ve Deniz haritası görünümü eklentisi etkin olsun veya olmasın ayarlanabilir.

Deniz haritası görünümü hakkında daha fazla ayrıntı için [Deniz Haritası eklenti sayfasını](../plugins/nautical-charts) ziyaret edin.


## Sınırları Göster {#show-borders}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-andr](@site/static/img/map/show-borders-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

Bu özellik, daha önce indirilen haritaların sınırlarının görünürlüğünü, mevcut haritalar listesinden açıp kapatmanıza olanak tanır. Ana amacı, özellikle çok sayıda harita yüklüyse, indirilen haritaların ana hatlarını gizleyerek ana haritayı düzenlemeye yardımcı olmaktır.

Varsayılan olarak, harita sınırları 7. yakınlaştırma seviyesinde görünür ve 3. yakınlaştırma seviyesinde ve altında kaybolur.

:::tip İndirilen haritaların sınırlarını göster rengi
*İndirilen haritaların sınırlarını göster* özelliği etkinleştirildiğinde, indirilen haritalar OsmAnd'ın hem Android hem de iOS sürümlerinde **Yeşil** renkte gösterilir.

Android'de, arşivlenmiş haritalar **Turuncu** renkte gösterilir. iOS'ta, güncellenebilecek haritalar da **Turuncu** ile işaretlenir.
:::


## Koordinat Izgarası {#coordinates-grid}


Şuraya gidin: *Menü → Haritayı Yapılandır → Göster → Koordinat Izgarası*


<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Koordinat ızgarası menüsü](@site/static/img/map/coordinates_grid_settings_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![show-borders-ios](@site/static/img/map/coordinates_grid_settings_ios.png)

</TabItem>

</Tabs>


**Koordinat Izgarası** özelliği, harita üzerine bir referans ızgarası yerleştirerek farklı koordinat sistemlerine göre enlem ve boylam çizgilerini görselleştirmenizi sağlar. Bu özellik, hassas konum referansı ve jeo-uzamsal navigasyon için kullanışlıdır.

***1. Mevcut koordinat formatları:***

- **DD°MM′SS″** (Derece, Dakika, Saniye)
- **DD.DDDDD°** (Ondalık Derece - WGS84 varsayılan formatı)
- **DD°MM.MMM′** (Derece, Ondalık Dakika)
- **MGRS** (Askeri Izgara Referans Sistemi)
- **UTM** (Evrensel Enine Merkator - bölge tabanlı ızgara sistemi)

:::note

1. *UTM ızgara sınırlamaları:*
    - UTM ızgarasını görüntülemek için minimum yakınlaştırma seviyesi 9'dur.
    - Bölgeler her 6°'de bir meridyenlerle ayrıldığından, aynı anda yalnızca bir UTM bölgesi görüntülenir.

2. *WGS84 ızgarası üç farklı modu destekler:* ondalık derece, derece+dakika ve derece+dakika+saniye.

:::

***Desteklenen koordinat sistemleri:***

OsmAnd, coğrafi ızgara çizgilerini görüntülemek için birden fazla **temel projeksiyonu** destekler:

| **Projeksiyon** | **EPSG Kodu** | **Açıklama** |
|----------------|-------------|----------------|
| **WGS84** | EPSG:4326 | Küresel olarak kullanılan varsayılan enlem/boylam referans sistemi. |
| **Mercator** | EPSG:3857 | Web tabanlı haritalama için kullanılır (Google Haritalar, OpenStreetMap vb.). |
| **UTM** | EPSG:6387 | Dünyayı doğru yerel konumlandırma için **60 bölgeye** ayırır. |
| **MGRS** | - | Askeri Izgara Referans Sistemi (UTM'nin uzantısı). |



***2. Yakınlaştırma seviyesi ayarları:***

- Izgara çizgileri, **2 – 22** arasındaki yakınlaştırma seviyesine göre görünür.
- Çizgiler, yakınlaştırma seviyesine göre koordinat bölümlerini dinamik olarak ayarlar.

**Varsayılan olarak, uygulama [Genel ayarlar](../personal/profiles.md#units--formats) bölümünde seçilen koordinat formatını kullanır.**


***3. Etiket konumu:***
- Kenarlar
- Merkez

***4. Izgara rengi:***
- Gündüz/Gece modu için ızgara renginizi seçin.

## Harita Stilini Yapılandır {#configure-map-style}

### Harita Modu {#map-mode}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*

![Harita Modu](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Harita Modu](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

Harita, seçenekler listesinden seçilen moda göre açık veya koyu bir temada görüntülenebilir. Varsayılan olarak ve tüm yeni kullanıcılar için, [harita stili](#default-map-styles) cihazınızın sistem ayarlarında seçilen temayla uyumludur.

- **<Translate android="true" ids="daynight_mode_day"/>**. Gündüz optimum görünürlük için haritayı her zaman açık bir temada görüntüler.

- **<Translate android="true" ids="daynight_mode_night"/>**. Gece veya düşük ışık koşulları için ideal olan haritayı her zaman koyu bir temada gösterir.

- **Gün Doğumu / Gün Batımı**. Uygulamada ayrıntılı olarak belirtilen yerel gün doğumu ve gün batımı saatlerine göre gündüz ve gece temaları arasında otomatik olarak geçiş yapar.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*Yalnızca Android*). Ortam ışık seviyelerine göre açık ve koyu temalar arasında otomatik geçiş yapmak için cihazın ışık sensörünü kullanır.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. Harita görüntüsü, uygulamanın genel temasına uyum sağlar, açık temada gündüz modunu, koyu temada gece modunu gösterir.


### Detaylar {#details}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">


*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Düşük yakınlaştırmada harita üzerinde çokgenleri, patikaları, noktaları ve işaretleri gösterir. Bu, düşük büyütmede haritada daha fazla ayrıntı görebileceğiniz anlamına gelir. Cihazınızda oluşturmanın hızlı olmayabileceğini unutmayın.
    ![Harita parametresi - Daha detaylı](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Yol yüzeyinin türünü gösterir. Yolun rengi, asfalt, çim veya kum gibi yol yüzeyinin ne olduğunu anlamanıza yardımcı olur. [Harita lejantına](../map-legend/index.md) bakın.
    ![Harita parametresi - Yol yüzeyi](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Yolun kalitesini gösterir. Yolun düzgünlüğünü (eğimini) gösterir. Yollarınız ne kadar düzgün: iyi, kötü, muhtemelen korkunç vb. Yolunuzun düzgünlüğünü belirlemek için [Harita Lejantına](../map-legend/index.md) bakın.
    ![Harita parametresi - Yol düzgünlüğü](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. Yolun erişilebilirliğini gösterir: özel veya izinli, sadece acil durum veya ücretli yol. Mevcut yolları bulmak için [Harita Lejantına](../map-legend/index.md) bakın.
    ![Harita parametresi - Yol erişimi](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. [Düşük Emisyon Bölgeleri (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) özelliği, belirli kirletici araçlar için erişimin kısıtlandığı şehirlerdeki alanlar için haritalarda yeşil sınırlar ve "LEZ" etiketleri gösterir. LEZ'ler, belirli emisyon standartlarını karşılayan araçların girişini sınırlayarak hava kalitesini iyileştirmeyi amaçlar. Bu özelliği kullanmak, kullanıcıların bu yeşil bölgeleri belirleyerek ve etrafından dolaşarak cezaları önlemesine yardımcı olur, şehir merkezlerinde seyahat ederken yerel çevre düzenlemelerine uyumu sağlar.

    ![Harita parametresi - Düşük emisyon bölgeleri](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Konut, endüstriyel ve ticari gibi farklı bina kategorileri renk kodludur. Ayrıntılar için [Harita lejantına](../map-legend/index.md) bakın.
    ![Harita parametresi - Renkli binalar](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Aydınlatılmış ve aydınlatılmamış sokakları, ayrıca yeraltı ve geçici olarak aydınlatılmış yolları gösterir. Ayrıntılar için [Harita lejantına](../map-legend/index.md) bakın.
    ![Harita parametresi - Sokak aydınlatması](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Haritacılar için tasarlanan bu özellik, diğer kullanıcıların referanslarını, açıklamalarını ve yorumlarını harita üzerinde gösterir.
    ![Harita parametresi - Harita asistanı](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Deniz derinliği konturlarını gösterir. [Denizcilik eklentisini](../plugins/nautical-charts) yüklemeniz ve Denizcilik haritalarını indirmeniz gerekir.
    ![Harita parametresi - Derinlik konturları](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. [Doğa koruma alanı](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve) için yeşil pano ve "NR" etiketleri gösterir. Yaban hayatı koruma bölgeleri için korunan alanları yeşil bir sınır ve "NR" etiketiyle vurgular.

    &nbsp;&nbsp;&nbsp;![Harita parametresi - Doğa rezervi](@site/static/img/map/nature-reserve.png)


<!--
| | | |
|--------|--------|--------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Düşük yakınlaştırmada harita üzerinde çokgenleri, patikaları, noktaları ve işaretleri gösterir. Bu, düşük büyütmede haritada daha fazla ayrıntı görebileceğiniz anlamına gelir. Cihazınızda oluşturmanın hızlı olmayabileceğini unutmayın.| ![Harita parametresi - Daha detaylı](@site/static/img/map/map-parameter-more-details.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Yol yüzeyinin türünü gösterir. Yolun rengi, asfalt, çim veya kum gibi yol yüzeyinin ne olduğunu anlamanıza yardımcı olur. [Harita lejantına](../map-legend/index.md) bakın.| ![Harita parametresi - Yol yüzeyi](@site/static/img/map/map-parameter-road-surface.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Yolun kalitesini gösterir. Yolun düzgünlüğünü (eğimini) gösterir. Yollarınız ne kadar düzgün: iyi, kötü, muhtemelen korkunç vb. Yolunuzun düzgünlüğünü belirlemek için [Harita Lejantına](../map-legend/index.md) bakın.| ![Harita parametresi - Yol düzgünlüğü](@site/static/img/map/map-parameter-road-smoothness.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  Yolun erişilebilirliğini gösterir: özel veya izinli, sadece acil durum veya ücretli yol. Mevcut yolları bulmak için [Harita Lejantına](../map-legend/index.md) bakın. | ![Harita parametresi - Yol erişimi](@site/static/img/map/map-parameter-road-access.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [Düşük Emisyon Bölgeleri (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) özelliği, belirli kirletici araçlar için erişimin kısıtlandığı şehirlerdeki alanlar için haritalarda yeşil sınırlar ve "LEZ" etiketleri gösterir. LEZ'ler, belirli emisyon standartlarını karşılayan araçların girişini sınırlayarak hava kalitesini iyileştirmeyi amaçlar. Bu özelliği kullanmak, kullanıcıların bu yeşil bölgeleri belirleyerek ve etrafından dolaşarak cezaları önlemesine yardımcı olur, şehir merkezlerinde seyahat ederken yerel çevre düzenlemelerine uyumu sağlar.| ![Harita parametresi - Düşük emisyon bölgeleri](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. | Konut, endüstriyel ve ticari gibi farklı bina kategorileri renk kodludur. Ayrıntılar için [Harita lejantına](../map-legend/index.md) bakın. | ![Harita parametresi - Renkli binalar](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. | Aydınlatılmış ve aydınlatılmamış sokakları, ayrıca yeraltı ve geçici olarak aydınlatılmış yolları gösterir. Ayrıntılar için [Harita lejantına](../map-legend/index.md) bakın. | ![Harita parametresi - Sokak aydınlatması](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. | Haritacılar için tasarlanan bu özellik, diğer kullanıcıların referanslarını, açıklamalarını ve yorumlarını harita üzerinde gösterir. | ![Harita parametresi - Harita asistanı](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. | Deniz derinliği konturlarını gösterir. [Denizcilik eklentisini](../plugins/nautical-charts) yüklemeniz ve Denizcilik haritalarını indirmeniz gerekir.| ![Harita parametresi - Derinlik konturları](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. | [Doğa koruma alanı](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve) için yeşil pano ve "NR" etiketleri gösterir. Yaban hayatı koruma bölgeleri için korunan alanları yeşil bir sınır ve "NR" etiketiyle vurgular.| ![Harita parametresi - Doğa rezervi](@site/static/img/map/nature-reserve.png)|
-->

### Rotalar {#routes}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Harita rotaları - bisiklet rotaları](@site/static/img/map/map-routes-cycle-routes.png) ![Harita rotaları - yürüyüş ağı](@site/static/img/map/map-routes-hiking-network.png)

Rota, belirli bir hedefe ulaşmak için önceden belirlenmiş ve takip edilmesi gereken bir yoldur. Bir rota, bisiklet, yürüyüş, koşu, toplu taşıma ve diğerleri gibi farklı seyahat türleri için optimize edilebilir. Rotalar ve türleri hakkında daha fazla bilgiyi [Rotalar makalesinde](../map/routes.md) okuyabilirsiniz.


### Ulaşım {#transport}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>

Şehirlerde gezinirken, toplu taşıma ve durakların daha kontrastlı bir görünümüne ihtiyacınız olabilir. Bir toplu taşıma durağına dokunabilir ve listeden rotalardan veya duraklardan birini seçebilirsiniz. Tren rotaları da bu ayarda görüntülenir.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Toplu taşıma duraklarını gösterir.
    ![Harita toplu taşıma durakları](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Otobüs, troleybüs ve servis rotalarını gösterir.
    ![Harita toplu taşıma otobüsü](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Tramvay ve tren rotalarını gösterir.
    ![Harita toplu taşıma tramvayı](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Yeraltı rotalarını gösterir.
    ![Harita toplu taşıma metrosu](@site/static/img/map/map-transport-subway.png)

### Gizle {#hide}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>

Harita görünürlüğünü artırmak için belirli nesneleri gizlemeniz gerekebilir. Örneğin, [Alt Katman katmanıyla Uydu çevrimiçi haritaları](../map/raster-maps.md#select-raster-maps) kullanırken suyu gizleyebilirsiniz.

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Ülkelerin içindeki bölgesel sınırları gizler, ancak eyalet sınırları görünürdür.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Doğal nesnelerin tüm çokgenlerini gizler, [Alt Katman/Üst Katman katmanı](../map/raster-maps.md#select-raster-maps) için özel işlev.
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Binaların tüm çokgenlerini gizler.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Suyun tüm çokgenlerini (denizler, göller, rezervuarlar vb.) gizler.
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Haritadaki ev numaralarını gizler.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Önerilen nesneleri gizler - inşaatı planlanan ancak yalnızca bir projesi olan nesneler (planlanan yollar, kavşaklar, binalar ve diğerleri).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. POI simgelerini haritadan gizler. Ancak, bu POI'lerin etiketleri haritada görünmeye devam edecektir.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. POI etiketlerini haritadan gizler. Ancak, POI simgeleri haritada görünmeye devam edecektir.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Tüneller, geçitler, katlar vb. gibi tüm yeraltı nesnelerini gizler. Şehirlerdeki haritaları gereksiz nesnelerden temizlemek için özeldir.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Tüm yer üstü nesnelerini gizler. Sadece tüneller, geçitler vb. gibi yeraltı nesnelerini görmek için özeldir.

### Yol Stili {#road-style}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Yollar için özel ayarlar, yol atlasına uyacak şekilde renkleri değiştirebilir veya yollar için yüksek kontrastlı yollar veya kalın ana hatlar ekleyebilirsiniz.

- **<Translate android="true" ids="rendering_value_default_name"/>**. Otoyollar için varsayılan stil. [Harita lejantına](../map-legend/index.md) bakın.
![Harita yol stili varsayılan](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Alman yol atlası stili.
![Harita yol stili almanca](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Amerikan yol atlası stili.
![Harita yol stili amerikan](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. Yolların yüksek kontrastı.
![Harita yol stili yüksek kontrast](@site/static/img/map/map-road-style-high-contrast.png)
- **Soluk**. Yolların daha az kontrastlı renkleri.
![Harita yol stili kalın ana hat](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Yollar için kalın ana hat.
![Harita yol stili kalın ana hat](@site/static/img/map/map-road-style-bold-outline.png)


### Metin Boyutu {#text-size}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>

- **%100**
    ![Harita metin boyutu %100](@site/static/img/map/map-text-size-100.png)

- **%200**
    ![Harita metin boyutu %200](@site/static/img/map/map-text-size-200.png)


### Harita Büyüteci {#map-magnifier}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Bu ayarı ekrandaki "+" veya "-" düğmesine uzun basarak veya şuradan seçebilirsiniz:
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Bu ayarı ekrandaki "+" veya "-" düğmesine uzun basarak veya şuradan seçebilirsiniz:
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

Bu ayar, haritanın büyütmesini değiştirmeye yardımcı olur. Raster ve vektör haritalar için geçerlidir. Raster haritalar için bir büyütme efekti uygular, böylece metin etiketleri daha büyük veya daha küçük görünür. Vektör haritalar için, düşük bir değer ayarlarsanız haritanın daha az veya daha fazla ayrıntılı görünmesini sağlar, harita gürültülü/yavaş görünecektir.

- **%75**
    ![Harita büyüteci %75](@site/static/img/map/map-magnifier-75.png)

- **%200**
    ![Harita büyüteci %200](@site/static/img/map/map-magnifier-200.png)


### Harita Dili {#map-language}

**Harita dili** seçeneği, OsmAnd haritasındaki adların yazımını 7-20 dahil olmak üzere yakınlaştırma seviyeleri için yapılandırır. 2-6 yakınlaştırma seviyeleri için adlar, sistem ayarları menüsünde OsmAnd için ayarlanan dilde görüntülenir (bkz. *[Uygulama dili nasıl değiştirilir](../start-with/first-steps.md#how-to-change-app-language)* bölümü).

Haritadaki adlar OSM topluluğu tarafından gerekli dile çevrilmemişse, [transliterasyonlu adları](https://en.wikipedia.org/wiki/Transliteration) kullanabilirsiniz: *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) veya *<Translate ios="true" ids="translit_names"/>* (iOS) anahtarı.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

</TabItem>

</Tabs>

- **Yerel adlar**
    ![Harita dili yerel adlar](@site/static/img/map/map-language-local-names_2.png)

- **Ukraynaca adlar**
    ![Harita dili ukraynaca](@site/static/img/map/map-language-urkanian_2.png)

- **Yerel adları göster**
    ![Harita dili yerel](@site/static/img/map/map-language-show-local_2.png)

- **Adları çevir**
    ![Harita dili çevir](@site/static/img/map/map-language-transliterate_2.png)


## Özel Harita Stili {#custom-map-style}

[Spesifikasyona](../../technical/osmand-file-formats/osmand-rendering-style.md) göre oluşturulmuş kişisel veya üçüncü taraf bir özel harita stiliniz varsa, bunu cihazınıza şu yollarla yükleyebilirsiniz:

- `.render.xml` dosyasını cihazınıza kopyalayın ve OsmAnd ile açın.
- Oluşturma stillerini dışa veya içe aktarmak için [standart içe/dışa aktarma iletişim kutularını](../personal/import-export.md) kullanın. Bir `.osf` paketi oluşturursanız, başkalarıyla paylaşabileceğiniz bir eklenti olarak çalışır.
- Kurulumdan sonra, menüden harita stilini seçebilirsiniz.


## İlgili Makaleler {#related-articles}

- [İçe / Dışa Aktar](../personal/import-export.md)
- [Renk Paleti Şemaları](../personal/color-palette-schemes.md)

> *Son güncelleme: Mart 2025*