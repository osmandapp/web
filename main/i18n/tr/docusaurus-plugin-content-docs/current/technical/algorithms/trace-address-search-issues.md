---
source-hash: 4127321256305d47dce48682c4990b76cec1e4db868aa211746d1c49c5418eb3
sidebar_position: 3
---

# İz Adres Arama Sorunları {#trace-address-search-issues}

## Adres Yanlış Şehirde Bulundu {#address-found-in-the-wrong-city}

Bazı durumlarda, OsmAnd'de yapılan bir adres araması, beklenenden farklı bir şehir için sonuçlar döndürebilir. Bu sorunlar, şehir sınırlarının OpenStreetMap (OSM) içinde nasıl tanımlandığı ve işlendiği nedeniyle ortaya çıkar. Bir kullanıcı, bir şehir belirtmeden bir **sokak adı** veya **ev numaralı bir sokak** ararsa, **tam metin arama algoritması** başka bir şehirden bir eşleşme döndürebilir.

### İlgili Sorunlar {#related-issues}

Yanlış şehir ataması örnekleri aşağıdaki GitHub sorunlarında bildirilmiştir:
[10679](https://github.com/osmandapp/OsmAnd/issues/10679), [10677](https://github.com/osmandapp/OsmAnd/issues/10677), [10699](https://github.com/osmandapp/OsmAnd/issues/10699), [10921](https://github.com/osmandapp/OsmAnd/issues/10921).


## OsmAnd Şehir Sınırlarını Nasıl Tanımlar? {#how-osmand-identifies-city-boundaries}

OsmAnd, bir şehrin sınırını OpenStreetMap'teki **idari ilişkisini** kullanarak belirler. Bir sınırın geçerli sayılması için aşağıdaki kriterleri karşılaması gerekir:

- **Sınır ilişkisi** şu etiketleri içermelidir:
  - **boundary** = *administrative* veya *postal_code*
  - **place** = *[city, town, village, hamlet, vb.]*

- Sınır ilişkisi bir **ilişki üyesi** içermelidir:
  - **label**
  - **admin_centre** veya **admin_center**
  
- **Sınır ilişkisinin adı**, **yer-düğüm adıyla** tam olarak eşleşmelidir.

- Bu koşullar karşılanmazsa, sınır ilişkisi bir şehir sınırı olarak tanınmaz.

- Çakışan sınırlar arasında OsmAnd **en büyük sınırı** seçer.

- **İlişki yolları** sınırı tanımlar. OsmAnd hem **iç** hem de **dış** yolları destekler.


## Tam Ad Eşleşmesi {#exact-name-matching}

Doğru adres işleme için **sokak adları tam olarak eşleşmelidir**, buna şunlar dahildir:

- **Ayırt edici işaretlerdeki** farklılıklar (örn. *Rue André Chenier* ve *Rue André Chénier*).
- **Ön eklerdeki ve kısaltmalardaki** varyasyonlar.

Bir uyumsuzluk meydana gelirse, aşağıdaki sorunlardan biri ortaya çıkabilir:

- Ev **yanlış sokağa atanır**.
- **Aynı sokak** farklı şehir sınırlarında **birden çok kez görünür**.  

Bir örnek için GitHub sorunu [10036](https://github.com/osmandapp/OsmAnd/issues/10036) adresine bakın.


## Yanlış Şehir Atamalarının Olası Nedenleri {#possible-causes-of-incorrect-city-assignments}

### OpenStreetMap'teki Sorunlar {#issues-in-openstreetmap}

1. **Bozuk veya eksik şehir sınırları.**

   - Şehir sınırları eksik, yanlış veya eksikse, adres atamaları güvenilir olmayabilir.  
   - **Çözüm:** [OSM sınır düzeltme kılavuzunu](https://help.openstreetmap.org/questions/1053/how-do-i-fix-inconsistent-boundaries) takip edin.  
   - Örnek: [10699](https://github.com/osmandapp/OsmAnd/issues/10699).

2. **Şehir sınırları doğru şekilde çakışmıyor.**

   - Bir sokak iki şehre aitse ancak yanlış eşlenmişse, OsmAnd çakışmayı tanıyamayabilir.  
   - **Çözüm:** Paylaşılan sokakları doğru şekilde kapsadıklarından emin olmak için OpenStreetMap'teki şehir sınırlarını ayarlayın.

3. **Sınır ilişkisinde gerekli etiketlerin eksik olması.**

   - Bir ilişkide **boundary=administrative** veya **place=city** gibi temel etiketler eksikse, kullanılmayacaktır.  
   - Örnekler:  
     - Sorun [10921](https://github.com/osmandapp/OsmAnd/issues/10921) (eksik etiketler).  
     - Sorun [12548](https://github.com/osmandapp/OsmAnd/issues/12548) (*Erfstadt* sınır sorunu).

### OsmAnd'deki Sorunlar {#issues-in-osmand}

**Komşu şehirlere atanan adresler.**

- Yakınlardaki şehirler, kasabalar, köyler veya banliyöler, sınır çakışmaları veya eksik sınırlar nedeniyle **yanlışlıkla adresleri devralabilir**.
- Bu, şehirlerin idari bölgelere ayrıldığı ancak açıkça tanımlanmış OSM ilişkilerinin olmadığı durumlarda yaygındır.  
- İlgili raporlara bakın: [10559](https://github.com/osmandapp/OsmAnd/issues/10559), [10679](https://github.com/osmandapp/OsmAnd/issues/10679), [10730](https://github.com/osmandapp/OsmAnd/issues/10730).


## Doğrulama Yöntemleri {#verification-methods}

Şehir sınırı sorunlarını doğrulamak ve gidermek için farklı harita araçlarından alınan sonuçları karşılaştırın.

### OpenStreetMap Kullanımı {#using-openstreetmap}

**Örnek:** Aranan adres: *Wolności 223, Zabrze*  

1. OpenStreetMap'i (OSM) açın.
2. **Zabrze**'yi arayın ve bir **idari sınırla** ilişkili sonucu seçin.  
3. Adresin doğru şekilde atanıp atanmadığını onaylamak için şehir sınırını görüntüleyin.

### Nominatim Kullanımı {#using-nominatim}

**Örnek:** Aranan adres: *Wolności 223, Zabrze*  

1. Şehri belirtmeden **sokak ve ev numarasını** arayın.  
2. Arama sonucu adresi başka bir şehre yerleştirirse, önerilen şehir adını not alın.  
3. Nominatim'e **bulunan şehir adını** girin.  
4. **Adres Sıralaması** değerini kontrol edin:
   - Örnek: *Wolności, Maciejów*
   - Maciejów *banliyö/mezra (sıra 20)* olarak listeleniyorsa, başka bir şehrin daha küçük bir idari bölümüdür.

**Önemli:** Arama sonuçlarını seçerken dikkatli olun, çünkü farklı bölgelerde veya ülkelerde benzer isimlere sahip şehirler bulunabilir.


## ABD Adres Arama ve TIGER Verileri {#us-address-search-and-tiger-data}

OsmAnd, adres aramaları için OpenStreetMap verilerini kullanır ve ABD Nüfus Sayım Bürosu'ndan **TIGER (Topolojik Olarak Entegre Coğrafi Kodlama ve Referans Sistemi)** gibi ek veri kaynakları kullanır. Bu veri kümesi aralık tabanlıdır ve kesin ev numaraları içermez. Bazı adresler eksik veya yanlış olabilir.  

ABD adresleriyle ilgili sorunları çözme:

1. Girilen adres **bileşenlere ayrılır**: `[Ev Numarası] [Sokak Adı]`, `[Şehir]`, `[Eyalet]`, `[Posta Kodu]`

2. Sistem **önce OSM'yi** ev numaraları ve sokaklarla tam eşleşme için kontrol eder.

3. OSM'de **eşleşme bulunamazsa**, sistem TIGER verilerini arar, bu veriler şunları içerir:
    - Sokak adları ve sınıflandırmaları.
    - İnterpolasyonlu ev numarası aralıkları.
    - İdari sınırlar.

4. **Ev numarası eksikse**, OsmAnd konumunu yakındaki verilere göre tahmin eder.

5. **Sonuçları döndürme**:
    - Adres OSM'de mevcutsa, tam eşleşme görüntülenir.
    - Yalnızca TIGER verileri mevcutsa, yaklaşık bir sonuç sağlanır.
    - Her iki kaynakta da adres yoksa, arama başarısız olur.


#### TIGER'daki Adres Veri Türleri {#types-of-address-data-in-tiger}

| TIGER Veri Türü            | OsmAnd'de Kullanım    |
|----------------------------|--------------------|
| **Sokak adları**           | Ad tabanlı aramalar için kullanılır. |
| **Ev numarası aralıkları**    | Yaklaşık adres konumları sağlar. |
| **Posta Kodları**              | Adresleri doğru posta bölgeleriyle ilişkilendirmeye yardımcı olur. |
| **İdari sınırlar** | Şehir ve eyalet konumlarını belirler. |

<br/>

#### Bir Adres Bulunduğunda ve Bulunmadığında {#when-an-address-is-found-vs-not-found}

| Arama Senaryosu     | OsmAnd'de Sonuç     |
|---------------------|----------------------|
| Adres OSM'de ev numarası ve sokak ile mevcut | ✅ Tam eşleşme |
| Adres TIGER'da mevcut ancak ev numaraları eksik | ⚠️ İnterpolasyon kullanılarak yaklaşık eşleşme |
| Adres TIGER'da mevcut ancak yanlış veri içeriyor | ⚠️ Hatalarla kısmi eşleşme |
| Adres hem OSM hem de TIGER'da eksik | ❌ Sonuç yok |


#### OsmAnd'de TIGER Verilerinin Sınırlamaları {#limitations-of-tiger-data-in-osmand}

TIGER tabanlı sistemde adres aramalarının doğruluğunu çeşitli faktörler etkiler:

- **Eksik ev numaraları**. TIGER'daki birçok adres **interpolasyona** dayanır ve bu da yaklaşık konumlara yol açar.
  
- **Güncel olmayan sokak adları**. TIGER'daki yol adları, OSM'deki güncel adlandırma kurallarını yansıtmayabilir.

- **Posta Kodu uyumsuzlukları**. TIGER'daki sınırlar yanlış olabilir ve bu da yanlış posta kodu atamalarına neden olabilir.