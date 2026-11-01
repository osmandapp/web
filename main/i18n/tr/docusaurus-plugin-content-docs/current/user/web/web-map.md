---
source-hash: 670b993ab89a49a8c970ddd6ea7f743e8db7a6d237b593694ef4dc494322f65b
sidebar_position: 3
sidebar_label: Harita
title: Web Sitesindeki Küresel Harita
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

<!--
<InfoIncompleteArticle/>


:::info
The *[osmand.net/map](https://osmand.net/map/)* site is currently being developed and tested.  
**Therefore, the layout and operation of some functions on the site may be different from those described in this article.**

We created the [Discussion theme](https://github.com/osmandapp/OsmAnd/discussions/16567) on our GitHub so you can leave feedback there.
:::
-->


## Genel Bakış {#overview}

OsmAnd web haritası, [OpenStreetMap (OSM)](https://www.openstreetmap.org/) verilerine dayalı küresel bir haritadır. Kullanıcıların kendi verilerini (örneğin, parkurlar ve favoriler) görüntülemesine, herhangi bir profil için navigasyon rotaları oluşturmasına ve hava durumu, genel GPX parkurları, POI'ler ve Wikimedia görselleri gibi ek özelliklere erişmesine olanak tanır. Veri deneyiminizi doğrudan tarayıcınızda keşfedin ve özelleştirin.

![OsmAnd Web tümü](@site/static/img/web/web_map_all.png)


## Harita Bağlam Menüsü {#map-context-menu}

Açmak için haritada herhangi bir yere sağ tıklayın. Bu menü aşağıdaki eylemleri içerir:

<!--
- **Where am I** – Quickly find your current location on the map. This feature displays the nearest addresses to the selected point on the map.
-->

- **Hava durumunu aç** – Hava durumu ayrıntılarını görüntülemek için [Hava durumu menüsü](../web/web-weather.md) erişin.
- **Yeni rota oluştur** – Seçilen konumu başlangıç veya varış noktası olarak kullanarak [*Rota planla* aracı](../web/web-navigation.md) açar.
- **Favori Ekle** –  Haritadaki herhangi bir noktada kolay erişim için bir [favori](../web/web-favorites.md#favorites-actions) oluşturmanıza ve kaydetmenize olanak tanır.
- **Buradan yol tarifi** –  Seçilen noktayı navigasyon için [başlangıç konumu](../web/web-navigation.md#start-a-route) olarak ayarlar.
- **Buraya yol tarifi** – Seçilen noktayı [navigasyon için varış noktası](../web/web-navigation.md#start-a-route) olarak ayarlar.
- **Koordinatları kopyala** – Seçilen noktanın koordinatlarını harici kullanım için kopyalar.
- **Bölgeleri göster** – Seçilen konumla ilişkili bölgeleri görüntüler.

<!--
- **Add pin** – Places a pin to mark a location on the map. ([Example](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))

![Harita bağlam menüsü](@site/static/img/web/map_context_menu.png)

Add pin option will be added back once it becomes available again.
-->

![Harita bağlam menüsü](@site/static/img/web/map_context_menu_2_new.png)


## Seçilen Nesne {#selected-object}

Haritadaki bir nesne (örneğin bir POI, favori veya navigasyon noktası) seçildiğinde, daha büyük bir iğne ile vurgulanır. Bir seferde yalnızca bir nesne seçilebilir.

Seçilen nesne zaten ekranda görünüyorsa, harita hareket etmez. Mevcut görünümün dışındaysa, harita yakınlaştırma seviyesini değiştirmeden nesneye odaklanır.

Haritayı yakınlaştırdığınızda seçilen işaretçi görünür kalır.

Seçilen nesneyi daha kolay görmek için yakındaki işaretçiler gizlenebilir.

[OsmAnd vektör (beta)](#map-type) harita türü etkinleştirildiğinde, POI'ler, binalar, kapı numaraları ve toplu taşıma durakları dahil olmak üzere nesneleri doğrudan harita üzerinde seçebilirsiniz. Seçilebilir bir nesnenin üzerine geldiğinizde işaretçi, işaret eden bir ele dönüşür. Adı veya simgesi olmayan nesneler, örneğin adsız yollar ve patikalar, seçilemez.

Bir nesne seçmek, ayrıntılar panelini açar:

- **POI** — panel, [Arama](web-search.md) sonuçlarındaki ve [POI katmanındaki](#poi-overlay) ile aynı bilgileri ve hızlı eylemleri gösterir.
- **POI verisi olmayan nesne** — örneğin bir bina veya kapı numarası. Panel nesne türünü, adresi ve koordinatları gösterir.
- **Toplu taşıma durağı** — panel ayrıca, [Ulaşım durakları](#transport-stops) bölümünde açıklandığı gibi, taşıma türü filtresiyle birlikte Güzergahlar bölümünü de içerebilir.

Seçilen noktada birden fazla nesne bulunuyorsa, panel bunları tek tek gösterir. Aralarında geçiş yapmak için kapat düğmesinin yanındaki okları kullanın. Geri oku ikinci nesneden itibaren görünür, son nesnede ise ileri oku etkin değildir.

![Seçilen nesne](@site/static/img/web/selected_object_favorite.png) ![Seçilen nesne](@site/static/img/web/several_objects.webp)



## Harita Menüsünü Yapılandır {#configure-map-menu}

Harita Menüsünü Yapılandır menüsü, POI katmanları, favoriler, parkurlar, arazi ve harita türü gibi harita verileri için görüntüleme ayarlarını yönetmenize olanak tanır. Bu menü, OsmAnd hesabınıza giriş yaptıktan sonra kullanılabilir. Açmak için **sol üst köşedeki** düğmeye tıklayın veya **Menü** aracılığıyla erişin.

- [POI katmanı...](#poi-overlay). Haritada gerekli POI kategorilerini seçmenize ve göstermenize olanak tanır.
- [Favoriler](#favorites). Haritada favorilerin görüntülenmesini açıp kapatın.
- [Parkurlar](#tracks). Haritada görünen GPX parkurlarını içerir.
- [Ulaşım durakları](#transport-stops). Haritada toplu taşıma duraklarının görüntülenmesini açıp kapatın. 
- [Arazi](#terrain). Haritada arazi renk şemasını etkinleştirin veya devre dışı bırakın.
- [Raster (karolar) / OsmAnd vektör (beta)](#map-type). Kullanılan harita türünü gösterir ve raster ile vektör harita arasında geçiş yapmanızı sağlar.

![İÇN menüsü](@site/static/img/web/configure_map_web_new.webp)


### POI katmanı {#poi-overlay}

POI katmanı özelliği, seçilen kategorilere göre haritada İlgi Noktalarını (POI'leri) görüntülemenize olanak tanır. Bu, harita üzerinde yerleri doğrudan taramak istediğinizde kullanışlıdır.

Katmanı açmak için: *Harita menüsünü yapılandır → POI katmanı*...Katman listesi 18 kategori içerir. Bir kategoriyi etkinleştirebilir veya herhangi bir kombinasyonda birden fazla kategoriyi etkinleştirebilirsiniz. En az bir kategori etkinleştirildiğinde, katman seçimi bir kerede temizlemek için **Tümünü seçimi kaldır** eylemi sağlar.

**Not:** Belirli bir yer arıyorsanız, haritadaki [**Arama bölümünü**](web-search.md) de kullanabilirsiniz.

POI'ler görüntülendikten sonra, haritada bir POI işaretleyicisini seçmek o nesne için mevcut bilgileri gösteren ayrıntı panelini açar. POI'ye bağlı olarak, içerebileceği bilgiler: yer adı ve türü, adres, iletişim alanları, OSM ile ilgili tanımlayıcılar ve koordinatlar, referans bağlantıları (Wikipedia, Wikidata), mevcut olduğunda.

Çevrimiçi fotoğrafları olan POI'ler için ayrıntı paneli, küçük resimler içeren Çevrimiçi fotoğraflar bloğunu gösterir. Hepsini göster, tam fotoğraf listesiyle galeri görünümünü açar. Fotoğraf görüntüleyicide, mevcut olduğunda OsmAnd Web, fotoğraf meta verilerini görüntüler; tarih, yazar, lisans ve açıklama dahil.

POI ayrıntı panelinde, eylem düğmelerinden hızlı eylemler kullanılabilir:
- *Favorilere Ekle* — POI'yi Favorilerinize kaydeder.
- *Paylaş* — POI'yi doğrudan OsmAnd Web'de açan paylaşılabilir bir bağlantı üretir. Bağlantı, POI adı, türü ve koordinatlarını (iğne) içerir.
- *Buradan yol tarifi* — Seçilen POI'yi başlangıç noktası olarak ayarlar ve varış noktası ile profil seçebilmeniz için Rota panelini açar.
- *Navigasyon* — Seçilen POI'yi navigasyon için varış noktası olarak ayarlar.

![İÇN menüsü](@site/static/img/web/poi_categories.png) ![İÇN menüsü](@site/static/img/web/poi_photo_new.png)


### Favoriler {#favorites}

Tek bir tıklamayla, haritada favorileri açıp kapatabilirsiniz. Ancak, yalnızca [**Haritada göster etkin**](../web/web-favorites.md#manage-favorites) olan favoriler görüntülenecektir.


### Parkurlar {#tracks}

Bu bölüm, [**haritada görünen GPX parkurlarınızın**](../web/web-tracks.md#visible-on-the-map) ve **Son görülenler** parkurların bir listesini içerir.

- Parkurları doğrudan açıp kapatabilirsiniz.  
- **Son görülenler** listesinden parkurları açıp kapatın.  

Her parkurun, aşağıdaki komutları içeren bir **Bağlam Menüsü** (⋮ düğmesi aracılığıyla erişilebilir) vardır:

- **Parkuru gizle**: Haritada şu anda görünen parkuru gizler.  
- **Parkuru görünür yap**: Son görülenler listesindeki bir parkuru haritada görüntüler.  
- **Yeniden adlandır**: Daha kolay tanımlama için parkuru yeniden adlandırmanıza olanak tanır.  
- **Çoğalt**: Parkurun bir kopyasını oluşturur.
- **Paylaş**: [Favoriler](../web/web-favorites.md#share) için olanla aynı paylaşım ekranını açar.
- **İndir**: Parkuru yerel cihazınıza kaydeder.  
- **Sil**: Parkuru listeden kalıcı olarak kaldırır.

Bir parkuru açtığınızda, üst eylem çubuğu olan bir panel görüntülenir. Çubuk parkur adını gösterir ve hızlı eylem erişimi sağlar. Üç nokta menüsü komutlarına ek olarak, üst çubuk **Düzenle** içerir. **Görünüm** şu anda aktif değildir.

Parkur paneli aşağıdaki sekmeleri içerir:

- Genel bakış — genel parkur bilgilerini gösterir.
- Parkur — şu anda uygulanmadı.
- Noktalar — türlerine göre gruplandırılmış yol noktaları ve rota noktalarını gösterir.

![Haritayı yapılandır menüsü Parkurlar](@site/static/img/web/configure_map_track_new.png) ![Haritayı yapılandır menüsü Parkurlar](@site/static/img/web/configure_map_track_2_new.png)

### Ulaşım durakları {#transport-stops}

**Ulaşım durakları** seçeneği, toplu taşıma duraklarını doğrudan haritada görüntülemenize olanak tanır. Etkinleştirildiğinde, durak işaretçileri harita genelinde görünür ve toplu taşıma rotalarının durduğu konumları temsil eder. Bir taşıma durağını seçmek, o durak hakkında bilgi ve duraktan geçen taşıma rotaları içeren bir bağlam panelini açar. Durak paneli birkaç bölüm içerir.

**1. Durak bilgisi**

Üst bölüm, seçilen durak hakkında temel bilgileri gösterir, adı ve konumu dahil. Hızlı eylem düğmeleri size şunu yapmanıza izin verir: *Durakı Favorilere Ekle, Durak bağlantısını Paylaş, Duraktan navigasyon başlat, Durakı varış noktası olarak ayarla*.

**2. Rotalar**

Rotalar bölümü, seçilen duraktan geçen tüm toplu taşıma rotalarını listeler. Her öğe: taşıma türünü, rota numarasını ve rota adını gösterir.

Bir rotayı seçmek, o rota hakkında ek bilgi gösteren bir rota ayrıntıları panelini açar, durak sayısı ve araçlar arasındaki ortalama aralık (mevcut olduğunda) dahil.

Rota ayrıntıları paneli ayrıca rotadaki tüm durakların tam listesini gösterir. Şu anda seçilen durak vurgulanır ve haritada konumunu görüntülemek için başka bir durak seçebilirsiniz. Seçilen duraktan önceki duraklar tek bir öğeye daraltılabilir (örneğin “15 durak önce”).

Navigasyon düğmeleri, *Önceki* ve *Sonraki* kontrollerini kullanarak rota boyunca duraklar arasında hareket etmenize olanak tanır. Bir durak seçildiğinde, konumu haritada vurgulanır. Seçilen rota ve durakları da rota yönünü görselleştirmeye yardımcı olmak için haritada görüntülenir.

**3. Taşıma türü filtresi**

Taşıma türü filtresi, listede gösterilen rotaları filtrelemenize olanak tanır. Varsayılan olarak, filtre *Tümü* olarak ayarlanır ve tüm mevcut rotaları gösterir. Yalnızca o türün rotalarını göstermek için belirli bir taşıma türünü (örneğin Otobüs, Tramvay veya Metro) seçebilirsiniz. Filtre, durak paneli her açıldığında *Tümü* olarak sıfırlanır.

**4. Yakındaki rotalar**

Yakındaki rotalar bölümü, seçilen durağa yakın konumdaki ek rotaları görüntüleyebilir. Bu, çevredeki alanda alternatif taşıma seçeneklerini hızlıca keşfetmenize yardımcı olur.

![Ulaşım durakları](@site/static/img/web/configure_map_transport_stops.png)

### Arazi {#terrain}

**Arazi** bölümü ücretli bir özelliktir <ProFeature/>. Bu özelliği kullanmak için öncelikle OsmAnd Pro hesabınıza giriş yapmanız gerekir.

Bu bölümde şunları yapabilirsiniz:

- Arazi için bir **renk şeması** seçin:
  - **Tepe Gölgesi**
  - **Eğim**
  - **Yükseklik**
- Seçilen arazi katmanının görünürlüğünü **%0'dan %100'e** ayarlayın.

![Haritayı yapılandır menüsü Arazi](@site/static/img/web/configure_map_terrain.png)

### Harita türü {#map-type}

Aşağıdakilerden birini seçmek için Haritayı Yapılandır menüsündeki harita türü öğesini seçin:

- **Raster (karolar)** — varsayılan harita türü. Bu harita türünde yalnızca harita üzerinde gösterilen işaretçileri seçebilirsiniz, örneğin [Arama](web-search.md) sonuçları, [POI katmanı](#poi-overlay) işaretçileri, [favoriler](#favorites) ve [taşıma durakları](#transport-stops).
- **OsmAnd vektör (beta)** — vektör harita. Bu harita türünde [nesneleri doğrudan harita üzerinde seçebilirsiniz](#selected-object).

Seçilen harita türü kaydedilir ve haritayı bir sonraki açışınızda uygulanır. Haritayı Yapılandır başlığındaki **Varsayılana sıfırla** haritayı **Raster (karolar)** türüne geri döndürür.

Vektör harita, WebGL destekleyen bir tarayıcı gerektirir. WebGL kullanılamıyorsa harita otomatik olarak **Raster (karolar)** türüne geçer.


## Ayarlar {#settings}

Web Planlayıcı'da, *Genel ayarlar* (Görüntü dili, Uzunluk birimleri, Hız birimi) tüm kullanıcılar için kullanılabilir, giriş yapmış olsanız da olmasanız da. OsmAnd hesabınızla giriş yaptıktan sonra, Ayarlar panelinde ek bir OsmAnd Cloud bölümü görünür. OsmAnd Cloud hakkında [burada](./web-cloud.md) okuyabilirsiniz.

### Dil {#language}

Arayüz dilini değiştirmek için:

*Menü → ⚙ Ayarlar → Görüntü dili'ne gidin*

![Web dili](@site/static/img/web/web_language.png)

### Birimler {#units}

*Menü → ⚙ Ayarlar → Uzunluk birimleri'ne gidin*  
*Menü → ⚙ Ayarlar → Hız birimi'ne gidin*

Haritada, rota ayrıntılarında ve ölçüm araçlarında mesafe, yükseklik ve hızın nasıl görüntüleneceğini seçebilirsiniz. Bu, OsmAnd'ı alışkanlıklarınıza veya bölgesel standartlara uygun tutmanıza yardımcı olur.

**Uzunluk birimleri** seçeneği, yatay mesafe ve yüksekliklerin nasıl gösterileceğini tanımlar:
- Kilometre/metre.
- Mil/ayak.
- Mil/metre.
- Mil/yarda.
- Deniz mili/metre.
- Deniz mili/ayak. 

Örneğin, 10 km mesafe, Mil/... seçeneklerinden birini seçerseniz yaklaşık 6.21 mi olarak, Deniz mili/... seçiliyse yaklaşık 5.40 nmi olarak gösterilir.

**Hız birimi** seçeneği, mevcut hız ve hız limitlerinin nasıl görüntüleneceğini kontrol eder:
- Saatte kilometre.
- Saatte mil.
- Saniyede metre.
- Mil başına dakika.
- Kilometre başına dakika.
- Saatte deniz mili (knot). 

Örneğin, 90 km/h hız, 25 m/s'ye veya yaklaşık 55.92 mph'ye karşılık gelir.

![Web birimleri](@site/static/img/web/web_units_len.png) ![Web birimleri](@site/static/img/web/web_units_spe.png)


<!--
## Harita stili {#map-style}

Menünün bu bölümünde harita stilini değiştirebilirsiniz. Bunun nasıl yapılacağı hakkında daha fazla bilgiyi OsmAnd uygulaması için [Vektör Haritalar (Harita Stilleri)](../map/vector-maps.md) makalesinde okuyabilirsiniz. Web sürümündeki ayarlar farklı değildir.  
**Some examples:**

- Nautical map style

![OsmAnd Web harita stili](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web favori ekleme](@site/static/img/web/web_map_style_topo.png)
-->


## URL Şemaları {#url-schemes}

OsmAnd web hizmetini (ve uygulamasını) kolayca kullanmak için doğrudan bağlantılardan yararlanabilirsiniz. Bunlar, konum verilerini aktarmanıza ve iğneler, parkurlar, hava durumu ve daha fazlası hakkında ayrıntılar eklemenize olanak tanıyan özel URL'lerdir.

Bu URL'ler, cihazınız tarafından desteklenen herhangi bir ortam kullanılarak kopyalanabilir ve paylaşılabilir ve OsmAnd'ın hem Android hem de iOS sürümleriyle uyumludur.

1. **Haritada bir iğne bulunan URL:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web parkur oluşturma](@site/static/img/plan-route/web_url_pin.png)

2. **Haritada iğne bulunmayan URL:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web parkur oluşturma](@site/static/img/plan-route/web_url_without.png)

3. **Navigasyonlu URL:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web parkur oluşturma](@site/static/img/plan-route/web_url_track.png)

Belirtilen parametrelere bağlı olarak, URL dizeleri şunları içerebilir:

- **enlem**: sayı olarak enlem değeri.  
- **boylam**: sayı olarak boylam değeri.  
- **başlangıç-bitiş**: navigasyon için koordinatlar.  
- **profil**: navigasyon profili (örn. araba, bisiklet).  
- **yakınlaştırma**: yakınlaştırma seviyesi.

4. **Hava Durumu**&nbsp; – &nbsp;`osmand.net/map/weather`

***Örneğin***, belirtilen koordinatlarla hava durumu sayfasına doğrudan erişebilirsiniz:  
    [`https://osmand.net/map/weather/#9/52.2394/21.0362`](https://osmand.net/map/weather/#9/52.2394/21.0362)

5. **Hesap**&nbsp; – &nbsp;`osmand.net/map/account`

6. **Haritayı Yapılandır**&nbsp; – &nbsp;`osmand.net/map/configure/`

7. **Parkurlar**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

8. **Favoriler**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

9. **Ayarlar**&nbsp; – &nbsp;`osmand.net/map/settings`

10. **Rota Planla**&nbsp; - &nbsp;`osmand.net/map/plan`

11. Mevcut [**Keşfet sayfasına**](https://osmand.net/docs/user/web/web-search#explore) doğrudan bağlantı&nbsp; - &nbsp;`osmand.net/map/search`

12. **POI ayrıntıları**&nbsp; – &nbsp;`osmand.net/map/poi/`

13. **POI verisi olmayan harita nesnesi** (örneğin bir bina)&nbsp; – &nbsp;`osmand.net/map/obj/`


## İlgili Makaleler {#related-articles}

- [Harita Bağlam Menüsü](../map/map-context-menu.md)
- [OsmAnd Hesabı](./web-cloud.md)
- [Parkurlar](./web-tracks.md)
- [Favoriler](./web-favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)