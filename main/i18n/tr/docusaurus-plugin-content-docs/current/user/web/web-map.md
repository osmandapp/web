---
source-hash: d91382fd90471c35f09518fffca8df6e01494de94a597a6b8006d0c7f62c249d
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


<InfoIncompleteArticle/>

:::info
*[osmand.net/map](https://osmand.net/map/)* sitesi şu anda geliştirilmekte ve test edilmektedir.
**Bu nedenle, sitedeki bazı işlevlerin düzeni ve çalışması bu makalede açıklananlardan farklı olabilir.**

Geri bildirimlerinizi bırakabilmeniz için GitHub'ımızda [Tartışma teması](https://github.com/osmandapp/OsmAnd/discussions/16567) oluşturduk.
:::


## Genel Bakış {#overview}

OsmAnd web haritası, [OpenStreetMap (OSM)](https://www.openstreetmap.org/) verilerine dayalı küresel bir haritadır. Kullanıcıların kendi verilerini (örneğin, parkurlar ve favoriler) görüntülemesine, herhangi bir profil için navigasyon rotaları oluşturmasına ve hava durumu, genel GPX parkurları, POI'ler ve Wikimedia görselleri gibi ek özelliklere erişmesine olanak tanır. Veri deneyiminizi doğrudan tarayıcınızda keşfedin ve özelleştirin.

![OsmAnd Web all](@site/static/img/web/web_map_all.png)


## Harita Bağlam Menüsü {#map-context-menu}

Açmak için haritada herhangi bir yere sağ tıklayın. Bu menü aşağıdaki eylemleri içerir:

- **Neredeyim** – Haritadaki mevcut konumunuzu hızla bulun. Bu özellik, haritada seçilen noktaya en yakın adresleri görüntüler.
- **Hava durumunu aç** – Hava durumu ayrıntılarını görüntülemek için [Hava durumu menüsüne](#weather-on-the-web) erişin.
- **Yeni rota oluştur** – Seçilen konumu başlangıç veya varış noktası olarak kullanarak [*Rota planla* aracını](../web/planner.md#navigation-route) açar.
- **Favori Ekle** – Haritadaki herhangi bir noktada kolay erişim için bir [favori](../web/web-userdata.mdx#add--edit-favorite) oluşturmanıza ve kaydetmenize olanak tanır.
- **Buradan yol tarifi** – Seçilen noktayı navigasyon için [başlangıç konumu](../web/planner.md#navigation-route) olarak ayarlar.
- **Buraya yol tarifi** – Seçilen noktayı navigasyon için [varış noktası](../web/planner.md#navigation-route) olarak ayarlar.
- **Koordinatları kopyala** – Seçilen noktanın koordinatlarını harici kullanım için kopyalar.
- **Sabitle** – Haritada bir konumu işaretlemek için bir iğne yerleştirir. ([Örnek](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))
- **Bölgeleri göster** – Seçilen konumla ilişkili bölgeleri görüntüler.

![Map Context menu](@site/static/img/web/map_context_menu.png)


## Web'de Hava Durumu {#weather-on-the-web}

OsmAnd Web, iki tahmin kaynağından hava durumu bilgisi sağlar:

- **GFS (varsayılan)**
- **ECMWF**

Bu tahmin kaynakları arasında geçiş yapmak için Hava Durumu menüsündeki **şemsiye düğmesine** tıklayın.

***Hava durumu menüsünün özellikleri:***

- **Mevcut Hava Durumu Verileri**: Koordinatlarınızı aşağıdaki verilerle birlikte görüntüler:

  - Sıcaklık.
  - Yağış.
  - Rüzgar.
  - Hava Basıncı.
  - Bulut Örtüsü.

- **Zaman Ayarı**: Belirli bir an için hava durumunu görüntülemek üzere Hava Durumu menüsündeki **zaman aracını** kullanarak tarih ve saati değiştirin.

***Haritadaki hava durumu katmanları:***

- Aşağıdaki gibi hava durumu katmanlarını seçmek ve etkinleştirmek için **katmanlar düğmesini** kullanın:

  - Sıcaklık.
  - Basınç.
  - Rüzgar.
  - Bulut Örtüsü.
  - Yağış.

***Tahminleri görüntüleme:***

- Hava durumu tahminleri **7 günlük** tahmin için mevcuttur.
- Ayrıntılı bilgiler için tahmin güncellemeleri **3 saatlik adımlarla** sağlanır.

Bu özelliklere erişmek veya bunları özelleştirmek için arayüzün sol veya sağ tarafındaki menüleri kullanın.

  ![OsmAnd Web Weather](@site/static/img/web/web_weather.png)

***7 Günlük Tahmin***:

Konumunuz için **7 günlük tahmini** görüntülemek üzere menüdeki tahmin verilerine tıklayın. Tahmin şu formatlarda mevcuttur:

- **Grafik formatı**
- **Liste formatı**

  ![OsmAnd Web Weather](@site/static/img/web/web_7day.png)


## Harita Menüsünü Yapılandır {#configure-map-menu}

Haritayı Yapılandır menüsü, POI katmanları, Favoriler, parkurlar ve arazi gibi harita verileri için görüntüleme ayarlarını yönetmenize olanak tanır. Bu menü bölümünü kullanmak için lütfen OsmAnd hesabınıza giriş yapın.

Bu menüyü açmak için **sol üst köşedeki** düğmeye tıklayın veya **Menü** aracılığıyla erişin.

- [POI katmanı...](#poi-overlay-section). Haritada gerekli POI kategorilerini seçmenize ve göstermenize olanak tanır.
- [Favoriler](#favorites-section). Haritada favorilerin görüntülenmesini açıp kapatın.
- [Parkurlar](#tracks-section). Haritada görünen GPX parkurlarını içerir.
- [Arazi](#terrain-section). Haritada arazi renk şemasını etkinleştirin veya devre dışı bırakın.

![POIs menu](@site/static/img/web/configure_map_web.png)


### POI katmanı bölümü {#poi-overlay-section}

Haritada POI'leri göstermek için:

*Harita menüsünü yapılandır → POI katmanı...*. Burada, haritada görüntülenecek kategorileri seçebilirsiniz.

Alternatif olarak, istediğiniz yeri bulmak için [**Arama bölümünü**](web-search.md) kullanabilirsiniz.

![POIs menu](@site/static/img/web/poi_menu.png)


### Favoriler Bölümü {#favorites-section}

Tek bir tıklamayla, haritada favorileri açıp kapatabilirsiniz. Ancak, yalnızca [**Haritada göster etkin**](../web/web-userdata.mdx#favorites-on-the-web) olan favoriler görüntülenecektir.


### Parkurlar bölümü {#tracks-section}

Bu bölüm, [**haritada görünen GPX parkurlarınızın**](../web/web-userdata.mdx#visible-on-the-map) ve **Son Görünür** parkurların bir listesini içerir.

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


### Arazi bölümü {#terrain-section}

**Arazi** bölümü ücretli bir özelliktir <ProFeature/>. Bu özelliği kullanmak için öncelikle OsmAnd Pro hesabınıza giriş yapmanız gerekir.

Bu bölümde şunları yapabilirsiniz:

- Arazi için bir **renk şeması** seçin:
  - **Tepe Gölgesi**
  - **Eğim**
  - **Yükseklik**
- Seçilen arazi katmanının görünürlüğünü **%0'dan %100'e** ayarlayın.

![Configure map menu Terrain](@site/static/img/web/configure_map_terrain.png)


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