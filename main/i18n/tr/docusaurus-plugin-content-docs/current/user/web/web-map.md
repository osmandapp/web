---
source-hash: bdb9eac116a28f1d5dfc284cdfe30f108124a7c87fbf05c077f70e32504f6445
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

![OsmAnd Web all](@site/static/img/web/web_map_all.png)


## Harita Bağlam Menüsü {#map-context-menu}

Açmak için haritada herhangi bir yere sağ tıklayın. Bu menü aşağıdaki eylemleri içerir:

- **Neredeyim** – Haritadaki mevcut konumunuzu hızla bulun. Bu özellik, haritada seçilen noktaya en yakın adresleri görüntüler.
- **Hava durumunu aç** – Hava durumu ayrıntılarını görüntülemek için [Hava durumu menüsüne](#weather-on-the-web) erişin.
- **Yeni rota oluştur** – Seçilen konumu başlangıç veya varış noktası olarak kullanarak [*Rota planla* aracını](../web/planner.md#navigation-route) açar.
- **Favori Ekle** –  Haritadaki herhangi bir noktada kolay erişim için bir [favori](../web/web-favorites.md#add--edit-favorite) oluşturmanıza ve kaydetmenize olanak tanır.
- **Buradan yol tarifi** –  Seçilen noktayı navigasyon için [başlangıç konumu](../web/planner.md#navigation-route) olarak ayarlar.
- **Buraya yol tarifi** – Seçilen noktayı navigasyon için [varış noktası](../web/planner.md#navigation-route) olarak ayarlar.
- **Koordinatları kopyala** – Seçilen noktanın koordinatlarını harici kullanım için kopyalar.
- **Bölgeleri göster** – Seçilen konumla ilişkili bölgeleri görüntüler.

<!--
- **Add pin** – Places a pin to mark a location on the map. ([Example](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))

![Map Context menu](@site/static/img/web/map_context_menu.png)

Add pin option will be added back once it becomes available again.
-->

![Map Context menu](@site/static/img/web/map_context_menu_new.png)


## Harita Menüsünü Yapılandır {#configure-map-menu}

Harita Menüsünü Yapılandır menüsü, POI katmanları, favoriler, parkurlar ve arazi gibi harita verileri için görüntüleme ayarlarını yönetmenize olanak tanır. Bu menü, OsmAnd hesabınıza giriş yaptıktan sonra kullanılabilir. Açmak için **sol üst köşedeki** düğmeye tıklayın veya **Menü** aracılığıyla erişin.

- [POI katmanı...](#poi-overlay). Haritada gerekli POI kategorilerini seçmenize ve göstermenize olanak tanır.
- [Favoriler](#favorites). Haritada favorilerin görüntülenmesini açıp kapatın.
- [Parkurlar](#tracks). Haritada görünen GPX parkurlarını içerir.  
- [Arazi](#terrain). Haritada arazi renk şemasını etkinleştirin veya devre dışı bırakın.

![POIs menu](@site/static/img/web/configure_map_web.png)


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

![POIs menu](@site/static/img/web/poi_categories.png) ![POIs menu](@site/static/img/web/poi_photo_new.png)


### Favoriler {#favorites}

Tek bir tıklamayla, haritada favorileri açıp kapatabilirsiniz. Ancak, yalnızca [**Haritada göster etkin**](../web/web-favorites.md#manage-favorites) olan favoriler görüntülenecektir.


### Parkurlar {#tracks}

Bu bölüm, [**haritada görünen GPX parkurlarınızın**](../web/web-tracks.md#visible-on-the-map) ve **Son Görünür** parkurların bir listesini içerir.

- Parkurları doğrudan açıp kapatabilirsiniz.  
- **Son Görünür** listesinden parkurları açıp kapatın.  

Her parkurun, aşağıdaki komutları içeren bir **Bağlam Menüsü** (⋮ düğmesi aracılığıyla erişilebilir) vardır:

- **Parkuru gizle**: Haritada şu anda görünen parkuru gizler.  
- **Parkuru görünür yap**: Son Görünür listesindeki bir parkuru haritada görüntüler.  
- **Yeniden adlandır**: Daha kolay tanımlama için parkuru yeniden adlandırmanıza olanak tanır.  
- **Çoğalt**: Parkurun bir kopyasını oluşturur.  
- **İndir**: Parkuru yerel cihazınıza kaydeder.  
- **Sil**: Parkuru listeden kalıcı olarak kaldırır.

![Configure map menu Tracks](@site/static/img/web/configure_map_track.png)


### Arazi {#terrain}

**Arazi** bölümü ücretli bir özelliktir <ProFeature/>. Bu özelliği kullanmak için öncelikle OsmAnd Pro hesabınıza giriş yapmanız gerekir.

Bu bölümde şunları yapabilirsiniz:

- Arazi için bir **renk şeması** seçin:
  - **Tepe Gölgesi**
  - **Eğim**
  - **Yükseklik**
- Seçilen arazi katmanının görünürlüğünü **%0'dan %100'e** ayarlayın.

![Configure map menu Terrain](@site/static/img/web/configure_map_terrain.png)


## Ayarlar {#settings}

Web Planlayıcı'da, *Genel ayarlar* (Görüntü dili, Uzunluk birimleri, Hız birimi) tüm kullanıcılar için kullanılabilir, giriş yapmış olsanız da olmasanız da. OsmAnd hesabınızla giriş yaptıktan sonra, Ayarlar panelinde ek bir OsmAnd Cloud bölümü görünür. OsmAnd Cloud hakkında [burada](./web-cloud.md) okuyabilirsiniz.

### Dil {#language}

Arayüz dilini değiştirmek için:

*Menü → ⚙ Ayarlar → Görüntü dili'ye gidin*

![Web Language](@site/static/img/web/web_language.png)

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

![Web Units](@site/static/img/web/web_units_len.png) ![Web Units](@site/static/img/web/web_units_spe.png)


<!--
## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->


## URL Şemaları {#url-schemes}

OsmAnd web hizmetini (ve uygulamasını) kolayca kullanmak için doğrudan bağlantılardan yararlanabilirsiniz. Bunlar, konum verilerini aktarmanıza ve iğneler, parkurlar, hava durumu ve daha fazlası hakkında ayrıntılar eklemenize olanak tanıyan özel URL'lerdir.

Bu URL'ler, cihazınız tarafından desteklenen herhangi bir ortam kullanılarak kopyalanabilir ve paylaşılabilir ve OsmAnd'ın hem Android hem de iOS sürümleriyle uyumludur.

1. **Haritada bir iğne bulunan URL:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_pin.png)

2. **Haritada iğne bulunmayan URL:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_without.png)

3. **Navigasyonlu URL:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_track.png)

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


## İlgili Makaleler {#related-articles}

- [Harita Bağlam Menüsü](../map/map-context-menu.md)
- [OsmAnd Hesabı](./web-cloud.md)
- [Parkurlar](./web-tracks.md)
- [Favoriler](./web-favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)