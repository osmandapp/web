---
source-hash: cf4241ee60d46e0a3cc994e68bbced57d6c99c4266b32eabce60286e84fb0b90
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

*OsmAnd Adres ile Arama*, OpenStreetMap verilerine dayanır ve belirli bir adrese önceden sıralanmış bir listeden konum ve yol tarifi bulmanızı, ayrıca posta kodu veya koordinatlara göre arama yapmanızı sağlar. Bu araç, gerekli adresleri birkaç dokunuşla bulmanızı sağlayarak arama süresini azaltır ve tam adresi hatırlamadığınız durumlarda yardımcı olur.

OsmAnd, **Adres Ara** bölümünün bulunduğu *Arama aracına* ulaşmak için çeşitli yollar sunar.

- [Arama düğmesi](../widgets/map-buttons.md#search) her zaman haritada görüntülenir ve ona dokunmak sizi aracın [genel ekranına](#full-text-search) götürür, burada *Adres* sekmesini bulabilirsiniz.
- Ana Android *Menü → Ara → Adres sekmesine* gidin.
- Bir rota başlatmaya hazırlanırken, *Navigasyon → Hedef belirle → Arama alanı* üzerine dokunun.

## Tam metin arama {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Arama Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Arama iOS](@site/static/img/search/street_search_ios.png)

</TabItem>

</Tabs>

Adres ile Arama, arama ve navigasyon sürecini basitleştirir, doğruluk ve kullanılabilirlik sağlar ve doğru adresi bulma süresini azaltır.

- **Adres Arama işlevini kullanmak için,** öncelikle gerekli alanın bir [haritasını indirmeniz](../start-with/download-maps.md) gerekir.
- **Arama, cihaz ekranındaki haritanın görünür alanında bulunan verilere dayanır.** Hiçbir şey bulamazsanız, OsmAnd arama yarıçapını artırmayı teklif eder.
- OsmAnd'daki adres bilgileri tüm [OSM etiket anahtarlarını](https://wiki.openstreetmap.org/w/index.php?title=Key:addr) içerir.

Arama sorgu listesi:

**1.** Listedeki öğelerin **sırası**:

- **Ada göre sıralanır**. *Önce şehir/kasaba/yerleşim yeri belirt* (Android) veya *Şehir seç* (iOS) seçeneğini belirlemek, varsa isimsiz öğelerle başlayan, ardından sayısal isimler ve ardından harflere göre isimler içeren bir liste görüntüler.
- **Artan sayısal sıra**. Bir sonraki arama listesinde, şehir ve sokak girildikten sonra ev numaraları artan sırada görüntülenir.

**2.** Adres Arama listesindeki her alan aşağıdaki **bilgileri** içerir:

- Yerleşim yerinin türünü belirten bir simge.
- Bir adresin, posta numarasının veya koordinat alanının bir kısmı.
- Mevcut konumunuzdan veya şehir merkezinden uzaklık.
- Şehrin bölgesi gibi ek bilgiler.

#### ABD Adres Araması ve TIGER Verileri {#us-address-search-and-tiger-data}

OsmAnd, OpenStreetMap verilerini kullanarak adres aramalarını destekler, ancak Amerika Birleşik Devletleri'nde, [TIGER verilerinin](https://wiki.openstreetmap.org/wiki/TIGER) kullanılması nedeniyle adres arama sonuçları eksik olabilir.

- **TIGER verileri, kesin konumları değil, adres aralıklarını sağlar**, bu da bazı ev numaralarının tanınmayabileceği anlamına gelir.
- **Bir adres bulunamazsa**, belirli bir ev numarası yerine *sokak adına göre* arama yapmayı deneyin.
- Arama sonuçlarınızı iyileştirmek için *alternatif konum tanımlayıcıları* kullanın, örneğin yakındaki önemli noktalar veya posta kodları.

### Desteklenen formatlar {#supported-formats}

Mevcut sorguların ve desteklenen arama formatlarının bir listesi için [Tümünü Ara](./search-all.md#basic-queries) makalesine bakın.

## Şehir Seç {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sokak Ara Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sokak Ara iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**En yakın şehirler**
Bu, **konumunuzun veya *Sokak seç* veya *Şehir seç* için belirttiğiniz yerleşim yerinin etrafındaki küçük bir şehir listesini görüntüler**. Her alan, şehrin boyutuna karşılık gelen bir simge, şehrin adı, size olan merkezden uzaklığı ve Android için pusula yönünü içerir.

Bu arama şekli, seçilen bir yerleşim yeri içindeki belirli konumları bulmayı kolaylaştırır ve adresleri doğru ve hızlı bir şekilde bulmak için uygun bir yol sağlar. İhtiyaç duyulan adresi, yerleşim yerini belirleyerek aramaya başlayabilirsiniz.

- Bunu yapmak için **Önce şehir/kasaba/yerleşim yeri belirt** (Android) veya **Şehir seç** (iOS) üzerine dokunun.
- Açılan listeden gerekli yerleşim yerini seçin. [Burada](#full-text-search) arama sorgularının hangi sırayla görüntülendiği ve her öğe hakkında hangi bilgilerin mevcut olduğu açıklanmaktadır.
- Bir sonraki ekranda, adresi daha da daraltmaya devam edebilir veya arama giriş alanının altındaki *Haritada göster* düğmesini seçebilirsiniz.
- Aramanızı belirlemek için, aradığınız adresin bulunduğu şehrin, kasabanın veya köyün adının tamamını veya yalnızca bir kısmını girebilirsiniz. Bu, aramanızı daraltmanıza ve daha doğru bir liste almanıza olanak tanır.
- Adresin, ev numarasının veya kavşak adının son öğesine dokunmak, nesnenin [harita bağlam menüsünü](../map/map-context-menu.md#select-an-object-single-tap) açar.

**Şehre göre arama aşağıdaki faydaları sunar:**

- *Kolaylık*. Gerekli şehri listeden hızlıca seçmenizi ve seçilen şehirde belirli bir cadde, ev veya kavşağı tam adresi girmek zorunda kalmadan belirtmenizi sağlar. Bu, zamandan tasarruf sağlar ve doğru yeri bulma sürecini basitleştirir.
- *Hassasiyet*. Mevcut seçeneklerden bir şehir ve cadde seçerek, adresi manuel olarak girerken hatalardan kaçınabilirsiniz.
- *Filtreleme*. Listeden belirli bir evi seçme yeteneği, özellikle tam adres bilinmediğinde, gerekli konuma doğru bir şekilde gitmeyi kolaylaştırır.

:::note Anahtar ve Değer
[**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr) ile *Şehir / Kasaba / Köy araması*
*Sonuç*: Bu ada sahip tüm nesneler görüntülenir.
:::

## Sokak Seç {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sokak Ara Android](@site/static/img/search/street_search.png) ![Sokak Ara Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sokak Ara iOS](@site/static/img/search/address_street_search_3_ios.png) ![Sokak Ara Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

Sokak araması, bulunduğunuz veya daha önce arama yaptığınız yerleşim yerinde veya uygulama ekranındaki görünür haritanın merkezinde bulunan yerde yapılır.

- Bu arama türünü kullanmak için **Sokak Ara** (*Android*) veya **Sokak Seç** (*iOS*) üzerine dokunun.
- Şehir adının yanındaki arama alanına sokak adını yazmaya başlayabilirsiniz ve liste daralacak, size en uygun sonuçları verecektir.
- Diğer öğelerde, sokak araması [Şehir Seç](#select-city) ile aynıdır.

:::note Anahtar ve Değer
[**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr) ile *Sokakları ara*
*Sonuç*: Bu ada sahip tüm sokaklar gösterilir.
:::

## Posta Kodu Arama {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Posta Kodu Ara Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Posta Kodu Ara iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**Posta kodu aramasını kullanmak için, sadece numarayı girmeniz yeterlidir**, bu numara tek bir rakamdan bile oluşabilir ve uygulama mevcut ilgili posta kodlarının bir listesini sunar.

- Gerekli kodu seçin ve üzerine dokunun.
- *Haritada *posta kodu numarasını* göster* özelliğini kullanabilirsiniz. Bu, konum hakkında ek bilgi olmadan seçilen posta koduyla bir [harita bağlam menüsü](../map/map-context-menu.md#select-an-object-single-tap) açar.
- Bu koda göre aramanızı, önce listeden gerekli sokağı ve ardından numarayı seçerek daraltabilirsiniz.

**Posta koduna göre arama aşağıdaki durumlarda faydalı olabilir:**

- *Adres bul*. Bir posta kodu girdiğinizde, OsmAnd ilgili alanı tanımlar ve o alandaki adresleri önerir. Bu, posta kodunu biliyor ancak tam adresi bilmiyorsanız özellikle kullanışlıdır.
- *Navigasyon hassasiyeti*. Adresin kesin olmadığı veya sokak adının farklı alanlarda tekrarlanabileceği durumlarda, posta kodu kullanmak belirli bir adrese en iyi rotayı sağlayabilir.
- *Kolaylık ve hız*. Posta koduna göre arama, özellikle posta kodunu biliyor ancak adresten emin değilseniz, bilgiyi hızlı bir şekilde bulmanızı sağlar. Tam adresi girmek yerine, sadece kodu girebilir ve ilgili sonuçları alabilirsiniz.

:::note
Daha fazla bilgi için, **[Birleşik Krallık Posta Kodu verileri](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**'nı okuyun.
:::

## Koordinat Arama {#coordinates-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Koordinat Ara Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Koordinat Ara iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

[**Koordinat Arama**](../search/search-coordinates.md), belirli bir konumu bulmak için enlem ve boylam gibi coğrafi koordinatları belirtmenizi sağlar. Farklı [koordinat formatlarında](../search/search-coordinates.md#coordinates-search) bir harita üzerinde doğru konumlar sağlar ve ilgili bilgileri almanızı sağlar. Bu özellik, bir adresiniz veya bir konumun tam adı olmadığında faydalı olabilir ve bilinmeyen yerlerde seyahat planlamayı ve navigasyonu kolaylaştırabilir.

## İlgili Makaleler {#related-articles}

- [Tümünü Ara](./search-all.md)
- [Arama Geçmişi](./search-history.md)
- [POI Ara](./search-poi.md)
- [Koordinat Ara](./search-coordinates.md)

> *Son güncelleme: Temmuz 2024*