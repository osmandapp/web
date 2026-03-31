---
source-hash: cc7b11b19f0261ab3f9cc12de149c6d268cdaa50b3a828cc60f5dd3ebe0ce868
sidebar_position: 2
title: Adres Ara
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Genel Bakış {#overview}

*OsmAnd Adrese Göre Arama*, OpenStreetMap verilerine dayanır ve belirli bir adrese giden konumu ve yol tarifini hazır sıralanmış bir listeden bulmanıza, ayrıca posta kodu veya koordinatlara göre arama yapmanıza olanak tanır. Bu araç, gerekli adresleri birkaç dokunuşla bulmanızı sağlayarak arama süresini azaltır ve tam adresi hatırlamadığınız durumlarda yardımcı olur.

Adres araması, indirilen haritaları kullanarak çevrimdışı çalışır. Aradığınız bölgenin haritasının yüklü olduğundan emin olun. Sonuçlar, OpenStreetMap'te mevcut olan adres verilerine bağlıdır.

OsmAnd, **Adres Ara** bölümünün bulunduğu *Arama aracına* ulaşmak için çeşitli yollar sunar.

- [Arama düğmesi](../widgets/map-buttons.md#search) her zaman haritada görüntülenir ve ona dokunmak sizi aracın [genel ekranına](#full-text-search) götürür, burada *Adres* sekmesini bulabilirsiniz.
- Ana Android *Menü → Ara → Adres sekmesine* gidin.
- Bir rotayı başlatmaya hazırlanırken, *Navigasyon → Hedef belirle → Arama alanı* üzerine dokunun.  


## Tam metin arama {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

OsmAnd, tam metin adres aramasını destekler. Bu, şehir → cadde → ev numarası adım adım seçmek yerine arama alanına doğrudan adres yazabileceğiniz anlamına gelir. Arama motoru şu adres bileşenlerini tanımaya çalışır:
- şehir;
- cadde;
- ev numarası;
- posta kodu;
- yer adı.

Onları katı bir sırayla girmenize gerek yoktur. **Örnek sorgular**:

`221B Baker Street London`  
`Baker Street 221B`  
`London Baker Street 221B`  
`101 Main Street`  
`Main Street 101`

Tam adres bulunamazsa, OsmAnd konum bulma şansını artırmak için otomatik olarak basitleştirilmiş sorguları (örneğin fazladan kelimeleri kaldırarak) dener.

**NOT:** Adres araması yalnızca indirilen haritalar içinde çalışır. Arama sonuçları şunlara dayanır:
- cihazınıza yüklenmiş haritalar;
- görünür harita alanı;
- mevcut konumunuz. 

Hiçbir şey bulunamazsa, OsmAnd arama yarıçapını artırmayı önerebilir.

### ABD Adres Araması ve TIGER Verileri {#us-address-search-and-tiger-data}

OsmAnd, OpenStreetMap verilerini kullanarak adres aramalarını destekler, ancak Amerika Birleşik Devletleri'nde, [TIGER verilerinin](https://wiki.openstreetmap.org/wiki/TIGER) kullanılması nedeniyle adres arama sonuçları eksik olabilir.  

- **TIGER verileri, tam konumları değil, adres aralıklarını sağlar**, bu da bazı ev numaralarının tanınmayabileceği anlamına gelir.
- **Bir adres bulunamazsa**, belirli bir ev numarası yerine *cadde adına göre* aramayı deneyin.
- Arama sonuçlarınızı iyileştirmek için yakındaki önemli noktalar veya posta kodları gibi *alternatif konum tanımlayıcıları* kullanın.  

### Desteklenen Formatlar {#supported-formats}

OsmAnd, birkaç yaygın adres formatını destekler. Adresi nasıl bildiğinize bağlı olarak farklı sıralarda adres girebilirsiniz.

| Adres formatı | Örnek sorgular |
|---|---|
| Ev numarası + cadde | 221B Baker Street<br />10 Downing Street |
| Cadde + ev numarası | Baker Street 221B<br />Main Street 101 |
| Şehir + cadde + ev numarası | London Baker Street 221B<br />Paris Rue de Rivoli 10 |
| Cadde kesişimleri | Broadway & Wall Street<br />Main Street and High Street |
| Şehir adı | Berlin<br />Vienna<br />San Francisco |
| Posta kodu + adres | 10001 New York<br />75001 Paris Rue de Rivoli 10 |

### Arama İpuçları {#search-tips}

OsmAnd'daki adres araması, farklı giriş formatlarına toleranslıdır. Şunları deneyebilirsiniz:
- kelimelerin sırasını değiştirme;
- fazladan bilgiyi kaldırma;
- yalnızca cadde adına göre arama.

Arama motoru ayrıca farklı kelime sırası, yazım farklılıkları, kısaltmalar veya ev numarası formatları gibi adres formatlamasındaki yaygın varyasyonlara da tolerans gösterir. Aşağıdaki tablo, aynı adresi döndürebilecek tipik arama varyasyonlarını gösterir.

| Arama varyasyonu | Örnek sorgular | İlgili tartışma |
|---|---|---|
| Cadde adı varyasyonları | [Weberstraße](https://osmand.net/map?pin=51.853672,12.042003#13/51.8545/12.0386) <br /> Weberstrasse <br /> Weber-straße <br /> Weber-strasse | [Tartışma](https://github.com/osmandapp/OsmAnd/issues/23709) |
| İsimlerdeki boşlukları yoksayma | [Goethe Straße](https://osmand.net/map?pin=51.85358,12.064447#13/51.8545/12.0386) <br /> Goethestraße | [Tartışma](https://github.com/osmandapp/OsmAnd/issues/13783) |
| Harf sonekli ev numaraları | [30B Dragonder, Valkenswaard](https://osmand.net/map?pin=51.339645,5.4682517#19/51.3398/5.4681) <br /> 30b Dragonder, Valkenswaard <br /> 30-B Dragonder, Valkenswaard <br /> 30-b Dragonder, Valkenswaard | [Tartışma](https://github.com/osmandapp/OsmAnd/issues/23320) |
| Cadde kısaltmaları | [Straelener Straße](https://osmand.net/map?pin=51.443604,6.343231#19/51.4436/6.3432) <br /> Straelener Str. | [Tartışma](https://github.com/osmandapp/OsmAnd/issues/4923) |
| Tam adres vs basitleştirilmiş adres | [221B Baker Street London United Kingdom](https://osmand.net/map/poi/?name=221B+Baker+Street&type=Tourist+attraction&pin=51.52339,-0.1582396) <br /> 221B Baker Street <br /> Baker Street 221B | [Tartışma](https://github.com/osmandapp/OsmAnd/issues/19004) |
| ABD adres formatı | [1500 North Main Avenue, Springfield](https://osmand.net/map?pin=37.226315,-93.296524#11/37.1799/-93.3522) <br /> [4600 Sugar Maple Lane, Nashville](https://osmand.net/map?pin=36.051846,-86.95705#18/36.0516/-86.9561) | [Tartışma](https://github.com/osmandapp/OsmAnd/issues/6824) |
| ABD eyalet kısaltmaları | [Springfield, VA 22150](https://osmand.net/map?pin=36.51995,-86.86385#18/36.5199/-86.8635) <br /> [Manhattan Beach, CA 90266](https://osmand.net/map?pin=33.883938,-118.41048#20/33.8839/-118.4105) | [Tartışma](https://github.com/osmandapp/OsmAnd/issues/6824) |


## Şehir Seç {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search Street Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Street iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**En yakın şehirler**  
    Bu, **konumunuzun veya *Cadde seç* veya *Şehir seç* için belirttiğiniz yerleşim yerinin etrafındaki küçük bir şehir listesini görüntüler**. Her alan, şehrin büyüklüğüne karşılık gelen bir simge, şehrin adı, sizden merkezine olan uzaklık ve Android için pusula yönünü içerir.

Bu arama şekli, seçilen bir yerleşim yeri içindeki belirli konumları bulmayı kolaylaştırır, adresleri doğru ve hızlı bir şekilde bulmak için uygun bir yol sağlar. Gerekli adresi, yerleşim yerini belirleyerek aramaya başlayabilirsiniz.

- Bunu yapmak için **Önce şehir/kasaba/yerleşim yeri belirt** (Android) veya **Şehir seç** (iOS) üzerine dokunun.
- Açılan listeden gerekli yerleşim yerini seçin. [Burada](#full-text-search) arama sorgularının görüntülenme sırası ve her öğe hakkında hangi bilgilerin mevcut olduğu açıklanmaktadır.
- Bir sonraki ekranda, adresi daha da daraltabilir veya arama giriş alanının altındaki *Haritada göster* düğmesini seçebilirsiniz.
- Aramanızı belirtmek için, aradığınız adresin bulunduğu şehrin, kasabanın veya köyün adının tamamını veya yalnızca bir kısmını girebilirsiniz. Bu, aramanızı daraltmanıza ve daha doğru bir liste almanıza olanak tanır.
- Adresin, ev numarasının veya kavşak adının son öğesine dokunmak, nesnenin [harita bağlam menüsünü](../map/map-context-menu.md#select-an-object-single-tap) açar.  

:::note Anahtar ve Değer
[**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr) ile *Şehir / Kasaba / Köy araması*  
*Sonuç*: Bu ada sahip tüm nesneleri görüntüler.
:::


## Cadde Seç {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search Street Android](@site/static/img/search/street_search.png) ![Search Street Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Street iOS](@site/static/img/search/address_street_search_3_ios.png) ![Search Street Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

Cadde araması, bulunduğunuz yerleşim yerinde veya daha önce arama yaptığınız yerde veya uygulama ekranındaki görünür haritanın merkezinde bulunan yerleşim yerinde yapılır.

- Bu arama türünü kullanmak için **Cadde Ara** (*Android*) veya **Cadde Seç** (*iOS*) üzerine dokunun.
- Şehir adının yanındaki arama alanına cadde adını yazmaya başlayabilirsiniz ve liste daralacak, size en uygun sonuçları verecektir.
- Diğer öğelerde, cadde araması [Şehir Seç](#select-city) ile aynıdır.

:::note Anahtar ve Değer
[**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr) ile *Cadde araması*  
*Sonuç*: Bu ada sahip tüm caddeler gösterilir.
:::


## Posta Kodu Ara {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search Postcode Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Postcode iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**Posta kodu aramasını kullanmak için, sadece numarayı girmeniz yeterlidir**, bu tek bir rakamdan bile oluşabilir ve uygulama mevcut ilgili posta kodlarının bir listesini sunar.

- Gerekli kodu seçin ve üzerine dokunun.
- *Haritada posta kodu numarasını göster* özelliğini kullanabilirsiniz. Bu, konum hakkında ek bilgi olmaksızın seçilen posta koduyla bir [harita bağlam menüsü](../map/map-context-menu.md#select-an-object-single-tap) açar.
- Önce listeden gerekli caddeyi ve ardından numarayı seçerek bu koda göre aramanızı daraltabilirsiniz.

**Posta koduna göre arama aşağıdaki durumlarda faydalı olabilir:**

- Cadde adı birkaç şehirde varsa.
- Posta kodunu biliyorsunuz ancak tam adresi bilmiyorsanız.

:::note
Daha fazla bilgi için **[Birleşik Krallık Posta Kodu verileri](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)** bölümünü okuyun.
:::


## Koordinat Arama {#coordinates-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search Coordinates Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Coordinates iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

[**Koordinat Arama**](../search/search-coordinates.md), belirli bir konumu bulmak için enlem ve boylam gibi coğrafi koordinatları belirtmenize olanak tanır. Farklı [koordinat formatlarında](../search/search-coordinates.md#coordinate-format) bir harita üzerinde doğru konumlar sağlar ve ilgili bilgileri almanızı sağlar. Bu özellik, bir adresiniz veya bir konumun tam adı olmadığında faydalı olabilir ve bilinmeyen yerlerde seyahat planlamayı ve navigasyonu kolaylaştırabilir.  


## İlgili Makaleler {#related-articles}

- [Tümünü Ara](./search-all.md)
- [Arama Geçmişi](./search-history.md)
- [POI Ara](./search-poi.md)
- [Koordinat Ara](./search-coordinates.md)