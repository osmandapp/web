---
source-hash: 677964c6e30a8d9596ffa45395cb1cc593266a07fbfb2b36d1a6384a00432d7d
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


<InfoIncompleteArticle/>

## Genel Bakış {#overview}

*OsmAnd Adrese Göre Arama*, OpenStreetMap verilerine dayanır ve belirli bir adrese giden konumu ve yol tarifini hazır sıralanmış bir listeden bulmanıza, ayrıca posta kodu veya koordinatlara göre arama yapmanıza olanak tanır. Bu araç, gerekli adresleri birkaç dokunuşla bulmanızı sağlayarak arama süresini azaltır ve tam adresi hatırlamadığınız durumlarda yardımcı olur.

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

Adrese Göre Arama, arama ve navigasyon sürecini basitleştirir, doğruluk ve kullanılabilirlik sağlar ve doğru adresi bulmak için gereken süreyi azaltır.

- **Adres Arama işlevini kullanmak için,** önce gerekli alanın bir [haritasını indirmeniz](../start-with/download-maps.md) gerekir.
- **Arama, cihaz ekranındaki haritanın görünür alanında bulunan verilere dayanır.** Hiçbir şey bulamazsanız, OsmAnd arama yarıçapını artırmayı önerir.
- OsmAnd'daki adres bilgileri tüm [OSM etiket anahtarlarını](https://wiki.openstreetmap.org/w/index.php?title=Key:addr) içerir.

Arama sorgu listesi:

**1.** Listedeki öğelerin **sırası**:

- **Ada göre sıralanır**. *Önce şehir/kasaba/yerleşim yeri belirt* (Android) veya *Şehir seç* (iOS) seçeneğini seçmek, varsa isimsiz öğelerle başlayan, ardından sayısal adlar ve ardından harflere göre adlar gelen bir liste görüntüler.
- **Artan sayısal sıra**. Bir sonraki arama listesinde, şehir ve cadde girildikten sonra ev numaraları artan sırada görüntülenir.

**2.** Adres Arama listesindeki her alan aşağıdaki **bilgileri** içerir:

- Yerleşim yerinin türünü belirten bir simge.
- Bir adresin, posta numarasının veya koordinat alanının bir kısmı.
- Mevcut konumunuzdan veya şehir merkezinden uzaklık.
- Şehrin bölgesi gibi ek bilgiler.

### ABD Adres Araması ve TIGER Verileri {#us-address-search-and-tiger-data}

OsmAnd, OpenStreetMap verilerini kullanarak adres aramalarını destekler, ancak Amerika Birleşik Devletleri'nde, [TIGER verilerinin](https://wiki.openstreetmap.org/wiki/TIGER) kullanılması nedeniyle adres arama sonuçları eksik olabilir.

- **TIGER verileri, tam konumları değil, adres aralıklarını sağlar**, bu da bazı ev numaralarının tanınmayabileceği anlamına gelir.
- **Bir adres bulunamazsa**, belirli bir ev numarası yerine *cadde adına göre* aramayı deneyin.
- Arama sonuçlarınızı iyileştirmek için yakındaki önemli noktalar veya posta kodları gibi *alternatif konum tanımlayıcıları* kullanın.

### Desteklenen formatlar {#supported-formats}

Mevcut sorguların ve desteklenen arama formatlarının bir listesi için [Tümünü Ara](./search-all.md#basic-queries) makalesine bakın.

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

**Şehre göre arama aşağıdaki faydaları sunar:**

- *Kolaylık*. Gerekli şehri listeden hızlıca seçmenize ve tam adresi girmek zorunda kalmadan seçilen şehirde belirli bir cadde, ev veya kavşak belirtmenize olanak tanır. Bu, zaman kazandırır ve doğru yeri bulma sürecini basitleştirir.
- *Hassasiyet.* Mevcut seçeneklerden bir şehir ve cadde seçebilir, adresi manuel olarak girerken hatalardan kaçınabilirsiniz.
- *Filtreleme.* Listeden belirli bir evi seçme yeteneği, özellikle tam adres bilinmediğinde, gerekli konuma doğru bir şekilde gitmeyi kolaylaştırır.

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

- *Adresleri bul*. Bir posta kodu girdiğinizde, OsmAnd ilgili alanı tanımlar ve o alandaki adresleri önerir. Bu, posta kodunu biliyor ancak tam adresi bilmiyorsanız özellikle kullanışlıdır.
- *Navigasyon hassasiyeti*. Adresin kesin olmadığı veya cadde adının farklı bölgelerde tekrarlanabileceği durumlarda, posta kodu kullanmak belirli bir adrese en iyi rotayı sağlayabilir.
- *Kolaylık ve hız*. Posta koduna göre arama, özellikle posta kodunu biliyor ancak adresten emin değilseniz, bilgiyi hızlı bir şekilde bulmanızı sağlar. Tam adresi girmek yerine, sadece kodu girebilir ve ilgili sonuçları alabilirsiniz.

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