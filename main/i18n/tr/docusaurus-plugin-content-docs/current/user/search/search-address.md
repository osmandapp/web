---
source-hash: e36caad58f36cfd88f8d8bd575e69fdf2d3e8f63a1d4a934dba6e473f1b95388
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

OsmAnd arama sonuçlarını otomatik olarak sıralar, bu nedenle yakındaki ve daha ilgili sonuçlar listede daha üstte görünür. Android'de sıralamayı, sonuç listesinin üstündeki sıralama çipiyle değiştirebilirsiniz. Çip seçili seçeneği gösterir. Çipe dokunun ve *Sırala* menüsünde aşağıdakilerden birini seçin:
- *Alaka düzeyi* — Sonuçları sorgunuzla ne kadar yakından eşleştiklerine göre sıralar.
- *En yakın* — Sonuçları mesafeye göre sıralar, en yakın sonuçlar önce gösterilir.

Yine Android'de, sonuçların üstünde *Kasaba*, *Şehir*, *Cadde* veya *Posta kodu* gibi nesne türlerine ait çipler görünür. Yalnızca o türdeki sonuçları göstermek için bir çipe dokunun. Daha fazla bilgi için [Arama Sonuçlarını Sıralama](./search-all.md#sorting-search-results) bölümüne bakın.

Android'de harita merkezi konumunuzdan 50 m'den fazla uzaktaysa ve harita konumunuzu takip etmiyorsa, arama harita merkezi çevresinde yapılır ve arama alanında *Arama N km uzakta* yazar. Harita merkezi konumunuzdan 70 km'den fazla uzaktaysa, sıralama çipinin yanında arama alanını gösteren bir çip, *Harita merkezi* veya *Konumum*, görünür. Nerede arama yapılacağını seçmek için ona dokunun. Daha fazla bilgi için [Çevrede Arama](./search-all.md#search-around) bölümüne bakın.

OsmAnd, **Adres Ara** bölümünün bulunduğu *Arama aracına* ulaşmak için çeşitli yollar sunar.

- [Arama düğmesi](../widgets/map-buttons.md#search) her zaman haritada görüntülenir ve ona dokunmak sizi aracın [genel ekranına](#full-text-search) götürür, burada *Adres* sekmesini bulabilirsiniz.
- Ana Android *Menü → Ara → Adres sekmesine* gidin.
- Bir rotayı başlatmaya hazırlanırken, *Navigasyon → Hedef belirle → Arama alanı* üzerine dokunun.  


## Adres Sekmesi {#address-tab}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de arama](@site/static/img/search/search_address_2_andr.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta arama](@site/static/img/search/street_search_ios.webp)  

</TabItem>

</Tabs>

*Adres* sekmesi, adrese göre arama yapmanın farklı yolları için düğmeler içerir. Her düğme, aralarından seçim yapabileceğiniz önerilen seçeneklerin bir listesini açar:

- [**&lt;şehir&gt; içinde cadde ara**](#select-street) (*Android*) / **&lt;şehir&gt; içinde cadde seç** (*iOS*) — Daha önce bir şehir aradıysanız görünür. Son aranan şehir zaten ayarlanmıştır, bu nedenle yalnızca cadde adını yazıp önerilen caddeler arasından seçmeniz yeterlidir.
- [**Önce şehir/kasaba/yerleşim yeri belirt**](#select-city) (*Android*) / **Şehir seç** (*iOS*) — Her zaman kullanılabilir. Hemen şehirlerin, kasabaların ve köylerin isme göre sıralanmış bir listesini açar. Yazdıkça liste daralır.
- [**Posta kodu ara**](#postcode-search) — Her zaman kullanılabilir. Arama alanını posta kodu girişine geçirir. En az bir karakter yazana kadar liste boş kalır, ardından eşleşen sonuçlar görünür.
- [**Koordinat arama**](#coordinates-search) — Her zaman kullanılabilir. Koordinat giriş ekranını açar.

**En yakın şehirler** listesi düğmelerin altında görüntülenir ve arama konumunun, yani konumunuzun veya harita merkezinin çevresindeki en fazla 15 şehir ve kasabayı gösterir. Her öğe adı, türünü, *Şehir* veya *Kasaba*, ve arama konumundan uzaklığı ile yönünü gösterir. Android'de bölge de gösterilir.

## Tam metin arama {#full-text-search}

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

Bir sorgu hem bir adres hem de bir POI'ye atıfta bulunuyorsa, OsmAnd bağlam, mesafe ve nesne önemi temelinde en ilgili yorumu otomatik olarak önceliklendirir.

**NOT:** Adres araması yalnızca indirilen haritalar içinde çalışır. Arama sonuçları şunlara dayanır:
- cihazınıza yüklenmiş haritalar;
- [görünür harita alanı](./search-all.md#how-to-use);
- mevcut konumunuz. 

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
| Çift ev numarası + cadde | 243/11 Husova |
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

Ancak, çok kısa veya genel sorgular (örneğin, “Apple”) adresler ve POI'lerin bir karışımını döndürebilir, aynı ada sahip bir marka, cadde adı veya yerleşim yeri dahil. Doğruluğu artırmak için şehir adı, cadde veya POI adı gibi daha fazla detay eklemeyi deneyin.

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

![Android'de cadde arama](@site/static/img/search/town_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta cadde arama](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

Bu arama şekli, seçilen bir yerleşim yeri içindeki belirli konumları bulmayı kolaylaştırır, adresleri doğru ve hızlı bir şekilde bulmak için uygun bir yol sağlar. Gerekli adresi, yerleşim yerini belirleyerek aramaya başlayabilirsiniz.

- Bunu yapmak için **Önce şehir/kasaba/yerleşim yeri belirt** (Android) veya **Şehir seç** (iOS) üzerine dokunun.
- Açılan listeden gerekli yerleşim yerini seçin. [Burada](#full-text-search) arama sorgularının görüntülenme sırası ve her öğe hakkında hangi bilgilerin mevcut olduğu açıklanmaktadır.
- Android'de *Alaka düzeyi* veya *En yakın* seçeneğini belirlemek için sıralama çipine dokunun. Harita merkezi konumunuzdan 70 km'den fazla uzaktaysa, *Harita merkezi* ve *Konumum* arasında seçim yapmak için arama alanı çipini kullanın. Sonuçlarda bulunan *Şehir*, *Kasaba* veya *Köy* gibi yerleşim yeri türlerine ait çipler listenin üstünde görünür. Yalnızca o türdeki sonuçları göstermek için bir çipe dokunun.
- Bir sonraki ekranda, adresi daha da daraltabilir veya yerleşim yerini haritada gösterebilirsiniz. iOS'ta arama alanının altındaki *Haritada göster* düğmesine dokunun. Android'de sağ alt köşedeki yüzen düğme olan *Haritada göster* düğmesine dokunun.
- Aramanızı belirtmek için, aradığınız adresin bulunduğu şehrin, kasabanın veya köyün adının tamamını veya yalnızca bir kısmını girebilirsiniz. Bu, aramanızı daraltmanıza ve daha doğru bir liste almanıza olanak tanır.
- Adresin, ev numarasının veya kavşak adının son öğesine dokunmak, nesnenin [harita bağlam menüsünü](../map/map-context-menu.md#select-an-object-single-tap) açar.  

:::note Anahtar ve Değer
*Şehir / Kasaba / Köy araması* [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr) ile  
*Sonuç*: Bu ada sahip tüm nesneleri görüntüler.
:::


## Cadde Seç {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de cadde arama](@site/static/img/search/street_search.webp) ![Android'de cadde arama](@site/static/img/search/street_search_1.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta cadde arama](@site/static/img/search/address_street_search_3_ios.png) ![iOS'ta cadde arama](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

Cadde araması, en son aradığınız şehirde yapılır. Adı düğmede gösterilir, bu nedenle doğrudan caddeyle başlayabilirsiniz.

- Bu arama türünü kullanmak için **&lt;şehir&gt; içinde cadde ara** (*Android*) veya **&lt;şehir&gt; içinde cadde seç** (*iOS*) üzerine dokunun.
- Şehir adı arama alanına zaten girilmiştir ve şehrin caddelerinin listesi hemen açılır. Şehir adının yanındaki arama alanına cadde adını yazmaya başlayabilirsiniz ve liste daralacak, size en uygun sonuçları verecektir.
- Android'de *Alaka düzeyi* veya *En yakın* seçeneğini belirlemek için sıralama çipine dokunun. Harita merkezi konumunuzdan 70 km'den fazla uzaktaysa, *Harita merkezi* ve *Konumum* arasında seçim yapmak için arama alanı çipini kullanın. Sonuçlarda bulunan *Cadde* veya *Bina* gibi nesne türlerine ait çipler listenin üstünde görünür. Yalnızca o türdeki sonuçları göstermek için bir çipe dokunun.
- Bir caddeyi seçerek binalarının listesini açın. Gerekli ev numarasını seçerek adresin [harita bağlam menüsünü](../map/map-context-menu.md#select-an-object-single-tap) açın.
- Diğer öğelerde, cadde araması [Şehir Seç](#select-city) ile aynıdır.

:::note Anahtar ve Değer
*Cadde araması* [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr) ile  
*Sonuç*: Bu ada sahip tüm caddeler gösterilir.
:::


## Posta Kodu Ara {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de posta kodu arama](@site/static/img/search/postcode_android.webp)

*Adres* sekmesinde **Posta kodu ara** düğmesine dokunun. Yazmaya başlayana kadar liste boş kalır. Posta kodunu, tek bir rakam bile olsa, girin; uygulama eşleşen posta kodlarının bir listesini sunar.

- *Alaka düzeyi* veya *En yakın* seçeneğini belirlemek için sıralama çipine dokunun. Harita merkezi konumunuzdan 70 km'den fazla uzaktaysa, *Harita merkezi* ve *Konumum* arasında seçim yapmak için arama alanı çipini kullanın. Listede yalnızca posta kodlarını göstermek için *Posta kodu* çipine dokunun.
- Gerekli posta kodunu seçin. Bu posta koduna sahip caddelerin listesi açılır ve posta kodu arama alanında kalır.
- Adresi daraltmak için bir cadde ve ardından ev numarasını seçin. Bu, adresin [harita bağlam menüsünü](../map/map-context-menu.md#select-an-object-single-tap) açar.
- Posta kodunun kendisini haritada görmek için sağ alt köşedeki yüzen düğme olan *Haritada göster* düğmesine dokunun. Harita, posta kodunun [bağlam menüsüyle](../map/map-context-menu.md#select-an-object-single-tap) açılır.

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta posta kodu arama](@site/static/img/search/postcode_ios.png)

**Posta kodu aramasını kullanmak için, sadece numarayı girmeniz yeterlidir**, bu tek bir rakamdan bile oluşabilir ve uygulama mevcut ilgili posta kodlarının bir listesini sunar.

- Gerekli kodu seçin ve üzerine dokunun.
- *Haritada &lt;posta kodu&gt; göster* özelliğini kullanabilirsiniz. Bu, konum hakkında ek bilgi olmaksızın seçilen posta koduyla bir [harita bağlam menüsü](../map/map-context-menu.md#select-an-object-single-tap) açar.
- Önce listeden gerekli caddeyi ve ardından numarayı seçerek bu koda göre aramanızı daraltabilirsiniz.

</TabItem>

</Tabs>

**Posta koduna göre arama aşağıdaki durumlarda faydalı olabilir:**

- Cadde adı birkaç şehirde varsa.
- Posta kodunu biliyorsunuz ancak tam adresi bilmiyorsanız.

:::note
Daha fazla bilgi için **[Birleşik Krallık Posta Kodu verileri](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)** bölümünü okuyun.
:::


## Koordinat Arama {#coordinates-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android'de koordinat arama](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS'ta koordinat arama](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

[**Koordinat Arama**](../search/search-coordinates.md), belirli bir konumu bulmak için enlem ve boylam gibi coğrafi koordinatları belirtmenize olanak tanır. Farklı [koordinat formatlarında](../search/search-coordinates.md#coordinate-format) bir harita üzerinde doğru konumlar sağlar ve ilgili bilgileri almanızı sağlar. Bu özellik, bir adresiniz veya bir konumun tam adı olmadığında faydalı olabilir ve bilinmeyen yerlerde seyahat planlamayı ve navigasyonu kolaylaştırabilir.  


## İlgili Makaleler {#related-articles}

- [Tümünü Ara](./search-all.md)
- [Keşfet Ara](./search-history.md)
- [POI Ara](./search-poi.md)
- [Koordinat Ara](./search-coordinates.md)