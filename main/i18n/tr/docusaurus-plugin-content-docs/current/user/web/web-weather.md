---
source-hash: aa3c29fb6cbe9138714a34b48b5eaee74f61c4713d9c46b72e2d28a1d615ca35
sidebar_position: 4
sidebar_label:  Weather
title: Weather on the Web
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

OsmAnd Web Haritası'ndaki Hava Durumu özelliği, mevcut hava koşullarını ve tahmin verilerini doğrudan harita üzerinde görüntüler. Birden fazla tahmin kaynağından hava bilgilerine erişim sağlar, zaman ayarlamasını destekler ve sıcaklık, rüzgar, basınç, bulut örtüsü ve yağış gibi hava katmanlarını görüntülemeye olanak tanır.

Hava durumu verileri oturum açmadan kullanılabilir. Hava Durumu görünümü, harita arayüzünden doğrudan açılabilir; menü panelindeki şemsiye simgesine tıklayarak veya haritaya sağ tıklayıp bağlam menüsünden Hava Durumunu Aç'ı seçerek.

## Veri Kaynağı {#data-source}

OsmAnd Web, iki tahmin kaynağından hava durumu bilgisi sağlar:

- [**GFS**](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) **(Küresel Tahmin Sistemi)** – NOAA/NWS tarafından işletilen varsayılan kaynak. Sıcaklık, basınç, nem, rüzgar ve bulut katmanlarını içeren tam hava durumu verileri sağlar.  
- [**ECMWF**](https://www.ecmwf.int/) **(Avrupa Orta Vadeli Hava Tahmin Merkezi)** – alternatif bir tahmin kaynağı. Yüksek kaliteli sıcaklık, yağış ve basınç verileri sunar ancak rüzgar veya bulut bilgisi sağlamaz.  

Bunlar arasında geçiş yapmak için Hava Durumu menüsündeki **şemsiye düğmesine** tıklayın.

![OsmAnd Web Hava Durumu](@site/static/img/web/weather_source.png)


## Hava Durumu Menüsü {#weather-menu}

**Hava Durumu menüsü**, haritada seçilen konum için mevcut hava koşullarını ve tahmin verilerini görüntüler. Özet görünüm, zaman kontrolleri ve hava katmanlarını tek bir panelde birleştirir.

Menünün üst kısmında, mevcut konum adı, tarih, saat ve hava sıcaklığı gösterilir. Bunun altında, mevcut aralık içindeki tahmin günleri arasında geçiş yapmaya olanak tanıyan bir gün seçici bulunur.

Seçilen gün içinde tahmin zamanını ayarlamak için bir zaman kaydırıcısı sağlanmıştır. Kaydırıcıyı hareket ettirmek, tüm görüntülenen hava değerlerini ve harita katmanlarını seçilen ana yansıtacak şekilde günceller.

Menü, seçilen konum için aşağıdaki hava parametrelerini gösterir:
- *Sıcaklık*.
- *Yağış*.
- *Rüzgar*.
- *Hava basıncı*.
- *Bulut*.  

Her değer, tahmin zamanı veya tarihi değiştirildiğinde dinamik olarak güncellenir.

Panelin alt kısmında, hava durumu verilerinin oluşturulma zamanı hakkında bilgi gösterilir; bu, tahmin verilerinin son güncellenme zamanını belirtir.

![OsmAnd Web Hava Durumu](@site/static/img/web/weather_menu.png)


## Hava Katmanları {#weather-layers}

Hava katmanları, tahmin verilerini doğrudan harita üzerinde bir katman olarak görselleştirmeye olanak tanır. Tek bir nokta için değerleri görüntülemek yerine, hava koşullarını daha geniş bir alanda hızlıca değerlendirmeye yardımcı olurlar.

Hava katmanları panelini açmak için Hava Durumu menüsündeki katmanlar simgesine tıklayın. Bu, bağımsız olarak etkinleştirilebilir veya devre dışı bırakılabilir mevcut hava örtülerinin bir listesini açar.

Aşağıdaki hava katmanları kullanılabilir:
- *Sıcaklık* — harita üzerinde hava sıcaklığı dağılımını renk gradyanı kullanarak görüntüler.
- *Yağış* — seçilen alanda yağış yoğunluğunu gösterir.
- *Rüzgar* — rüzgar hızını ve yönünü görselleştirir.
- *Hava basıncı* — atmosferik basınç desenlerini görüntüler.
- *Bulut* — bulut örtüsünü gösterir.

Tüm hava katmanları, Hava Durumu menüsündeki seçilen tarih ve saatle senkronize edilir. Tahmin gününü değiştirmek veya zaman kaydırıcısını ayarlamak, harita örtülerini seçilen ana yansıtacak şekilde hemen günceller.

![OsmAnd Web Hava Durumu](@site/static/img/web/weather_layers.png)


## Tahmin Görünümü {#forecast-view}

Hava tahminleri, ileriye dönük en fazla 7 gün için kullanılabilir. Tahmin değerleri 3 saatlik aralıklarla hesaplanır, böylece her gün boyunca kısa vadeli değişiklikleri inceleyebilirsiniz.

7 günlük tahmin, iki tamamlayıcı format kullanılarak görüntülenir:
- **Grafik görünüm**. Seçilen hava parametresi için zaman içindeki tahmin eğilimlerini gösterir. 
- **Liste görünüm**. Günlük tahmin değerlerini yapılandırılmış bir liste formatında görüntüler. 

Farklı hava parametreleri arasında geçiş yapmak için tahmin panelinin üst kısmındaki simgeleri kullanabilirsiniz. 

![OsmAnd Web Hava Durumu](@site/static/img/web/weather_forecast.png)


## İlgili Makale {#related-article}

- [Hava Durumu](../plugins/weather.md)
- [Giriş](../web/web-overview.md)
- [Harita](../web/web-map.md)