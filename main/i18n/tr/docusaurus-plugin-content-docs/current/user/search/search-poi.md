---
source-hash: 451b8efe0bb4fc8a733a523dde0cd088f5c21c5cb00a83e08ca8410c09e04755
sidebar_position: 4
title: POI Arama
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


<InfoIncompleteArticle/>


## Genel Bakış {#overview}

[OsmAnd İlgi Çekici Nokta](https://wiki.openstreetmap.org/wiki/Points_of_interest) (POI) işlevselliği, OsmAnd'da bulunduğunuz yere veya haritada seçilen bir alana yakın ilginç yerleri, rotaları ve hizmetleri bulmada doğruluk, görünürlük ve kolaylık sağlar.

Arama çubuğu, ilgilendiğiniz yerlerle ilgili anahtar kelimeleri girmenizi sağlar. POI araması ayrıca, aradığınızı hızlı bir şekilde bulmanıza yardımcı olmak için [kategoriye göre](#poi-search-by-categories) sıralanmış uygun bir liste sunar ve [filtre](#save-new-custom-filters) yalnızca ilgili sonuçları görüntülemek için belirli POI özelliklerini seçmenizi sağlar.

[Özel Arama](#custom-poi-search), birden fazla kategori ve alt kategori seçeneğine izin vererek arama işlevselliğini geliştirir. Oluşturulan filtreleri gelecekte kullanmak üzere kaydedebilir, böylece belirli kriterleri veya tercihleri karşılayan POI'leri hızlı bir şekilde bulmayı kolaylaştırabilirsiniz. Daha fazla ayrıntı için, özel filtreleri kaydetme bölümüne [buradan](#save-new-custom-filters) bakın.

OsmAnd, **Kategoriler araması** bölümünün bulunduğu Arama aracına ulaşmak için çeşitli yollar sunar.

- [Arama düğmesi](../widgets/map-buttons.md#search) her zaman haritada görüntülenir ve üzerine dokunmak sizi aracın [genel ekranına](#how-to-use) götürür, burada *Kategoriler* sekmesini bulabilirsiniz.
- Ana *Menü → Arama → Kategoriler sekmesine* gidin.
- Bir rotayı başlatmaya hazırlanırken, [*Navigasyon → Hedef belirle → Arama alanı → Kategoriler sekmesine*](../navigation/setup/route-navigation.md#set-target-point) dokunun.
- Ana [*Menü → Haritayı yapılandır → POI katmanı → Arama*](../map/point-layers-on-map.md#points-of-interest-pois) bölümüne gidin.


## Nasıl Kullanılır {#how-to-use}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![POI Arama Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI Arama iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

*OsmAnd'da bulabileceğiniz tüm POI türleri burada:* [gitHub bağlantısı](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).

- **İlgi Çekici Nokta (POI) araması:**
    - Şunları aramanızı sağlar:
       - yakındaki veya belirli ilgi çekici noktalar (POI) kategorileri için.
       - [OSM rotaları](../map/routes.md) için.
       - [Popüler yerler (Wikipedia)](../map/map-context-menu.md#details) için.

    - Kategorilere, mesafeye veya derecelendirmeye göre filtreleme ve sıralama mümkündür.

    - Arama sonuçları, POI'nin konumunu, iletişim bilgilerini, derecelendirmelerini ve yorumlarını gösterir.

- **POI'leri doğrudan haritada kategoriye göre arayın**:
    - *Haritayı yapılandır → POI katmanını göster...* bölümündeki [**listeden**](../map/point-layers-on-map.md#points-of-interest-pois) gerekli kategorileri seçmeniz ve beklenen konumdaki simgelere göre arama yapmanız gerekir.

    - *Android*: POI aramaya *Menü → Arama → Kategoriler* bölümünden başlayabilirsiniz.

- **Marka araması:**
    - Bir işletme veya marka adı (Audi, Starbucks veya Aldi gibi) girildiğinde, arama sonuçları listesi öncelikli olarak POI adına göre sıralanır ve ilgili konumdan uzaklığa göre sıralanır.

    - Her arama sonucunun yanında, size benzer mesafedeki diğer yerler arasında doğru konumu belirlemenize yardımcı olmak için yerleşim yerinin adı görüntülenir.

    - Bu tür bir arama, bir perakende satış noktasının tek bir markanın mal veya hizmetlerini satmada uzmanlaşması durumunda veya markanın kendisi POI'nin adından veya kategorisinden daha iyi biliniyor ve daha tanınırsa kullanışlıdır.

    - Arama yapmak için, `brand` etiketi ve marka adları POI açıklamasına eklenmelidir.

    - Bir araba dükkanı örneği: *POI türü* - Araba bayisi, *adı* - Octo Automobile, [***marka*** *adı*](https://wiki.openstreetmap.org/wiki/Key:brand) - Audi, BMW, Fiat, Jaguar, Land Rover.

    ![POI Arama Android](@site/static/img/search/brand_search_andr.png)


:::note
Bu görevlerden bazılarını (adresleri, POI'leri bulma) gerçekleştirmek için çevrimdışı vektör harita dosyasına sahip olmanız gerekir. Başlangıçta, arama cihaz ekranının görünür alanındaki haritada bulunan verilere dayanır. Hiçbir şey bulamazsanız, OsmAnd arama yarıçapını artırmayı önerir.
:::


## Kategoriye Göre POI Arama {#poi-search-by-categories}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![POI Arama Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI Arama iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

**Kategorilere Göre Arama** aracı, farklı kategorilere ayrılmış nesneleri, yerleri ve rotaları hızlı bir şekilde bulmanızı sağlar. Her kategorinin benzersiz bir dizi özelliği vardır ve bu araç, ek özellikler için farklı değerler seçerek arama sonuçlarını iyileştirmenizi sağlayan filtrelere sahiptir.

Nasıl çalışır:

- *Kategori Seçimi* - Restoranlar, oteller, mağazalar, OSM rotaları, popüler Wikipedia yerleri ve diğerleri gibi ilgilendiğiniz kategoriyi önerilen kategoriler listesinden seçersiniz.
- *Özellik Filtreleri* - Bir kategori seçtikten sonra, uygulama aramayı iyileştirmek için kullanılabilecek ek özellikleri gösterir. Örneğin, Restoranlar kategorisi için mutfak türü (İtalyan, Çin vb.), fiyat aralığı, derecelendirme ve otopark durumu gibi filtreleri seçebilirsiniz.
- *Filtreleri Uygulama* - Filtrelerde gerekli değerleri seçersiniz ve ardından uygulama, belirtilen özelliklerle eşleşen özellikleri göstermek için bu filtreleri arama sonuçlarına uygular.
- *Sonuçları Görüntüleme* - Filtreleri uyguladıktan sonra, OsmAnd kategori ve özellik ayarına uyan kısa bilgilerle bir liste görüntüler.

Faydaları:

- *Kullanıcı Özelleştirmesi* - Özellik filtreleri, aramaları belirli ihtiyaçlarını ve tercihlerini karşılayacak şekilde özelleştirmenizi sağlar.
- *İyileştirilmiş sonuçlar* - Filtreler, arama sonuçlarını iyileştirmeye yardımcı olarak daha alakalı ve doğru hale getirir.
- *Birden Çok Kategori* - OpenStreetMap veritabanı geniş bir POI kategorileri setine sahiptir, bu da farklı türlerde ve kategorilerde siteler bulmanızı sağlar.

<!--
POI kategori araması, ihtiyaçlarınıza göre ilgi çekici yerleri hızlı bir şekilde bulmanızı ve seçmenizi sağlar. Seyahat etmek, yakındaki hizmetleri veya ilgi çekici yerleri bulmak ve seçilen POI kategorilerine göre rotaları planlamak için kullanışlı bir araçtır.

OsmAnd, girilen kelimelere göre POI adlarını ve kategorilerini bulmaya başlar. İlk sonuçlar kategoriler olacak, ikinci sonuçlar ek bilgi, tam ad, kategori adı, POI'ye yön ve mesafe, çalışma süresi ile POI olacaktır. İstenen kategoriye basmak, bu kategorinin POI listesini açar.

Listedeki seçilen POI'ye dokunmak, POI'nin [Harita Bağlam menüsünü](../map/map-context-menu.md#select-an-object-single-tap) açar.
-->

### Filtre Türleri {#types-of-filters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![POI Arama Android](@site/static/img/search/search_poi_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI Arama iOS](@site/static/img/search/search_poi_filter_ios.png)

</TabItem>

</Tabs>

**Filtre** işleviyle gerekli özellikleri seçebilir ve sonuç olarak yalnızca ilgili nesneleri içeren bir liste elde edebilirsiniz. Filtreyi kullanmak için:

- Kategori listesinden ilgilendiğiniz kategoriyi seçin.
- Açılan ekranda, filtreyi gösteren simgeye dokunun. Giriş alanının altında, *Haritada göster*'in yanında bulunur.
- Filtrede, özellik türünü seçin.

![POI Arama Android](@site/static/img/search/search_poi_filter_icon_andr.png)

Bir filtre oldukça fazla sayıda öğeden oluşabilir, bunların varlığı seçilen kategoriye bağlıdır. Her kategorinin kendisine özgü, türe göre klasörlenmiş bir dizi filtresi vardır. Toplamda *22 varsayılan kategori* bulunmaktadır. Bunlardan bazıları burada listelenmiştir:

1. **<Translate android="true" ids="poi_filter_accomodation"/>**. [Konaklama](https://wiki.openstreetmap.org/wiki/Key:building#Accommodation), oteller, moteller, hosteller, misafirhaneler ve kamp alanları gibi geçici konaklama sağlayan tesisleri içerir. Bu yerler, seyahat ederken konforlu bir konaklama için olanaklar ve hizmetler sunar.
    *9* tür filtre içerir: **Buzdolabı** (*2* değeri vardır), **Isıtma** (*7* değeri vardır), **İnternet erişim türü** (*3* değeri vardır), **Yatak** (*2* değeri vardır), **Ödeme türü** (*10'dan fazla* değeri vardır), **Duş** (*1* değeri vardır), **Sigara içme** (*6* değeri vardır), **Yıldız derecelendirmesi** (*10* değeri vardır), **Tekerlekli sandalye erişilebilirliği** (*4* değeri vardır), Şimdi açık / 7/24 açık.

2. **Kafe ve restoran**. [Kafe](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcafe) ve [restoranlar](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant) yiyecek hizmeti veren yerleri temsil eder.
    *16* tür filtre içerir: **Bebek bezi değiştirme masası** (*3* değeri vardır), **Kahve** (*2* değeri vardır), **Mutfak** (*10'dan fazla* değeri vardır), **Teslimat** (*1* değeri vardır), **Diyet** (*8* değeri vardır), **Yemek** (*10'dan fazla* değeri vardır), **İçme suyu dolumu** (*1* değeri vardır), **Arabaya servis** (*1* değeri vardır), **İnternet erişim türü** (*3* değeri vardır), **Mikro bira fabrikası** (*1* değeri vardır), **Organik ürünler** (*2* değeri vardır), **Açık havada oturma** (*1* değeri vardır), **Ödeme türü** (*10'dan fazla* değeri vardır), **Sigara içme** (*6* değeri vardır), **Paket servis** (*1* değeri vardır), **Tekerlekli sandalye erişilebilirliği** (*4* değeri vardır), Şimdi açık / 7/24 açık.

3. **Şarj istasyonu**. Bir [şarj istasyonu](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcharging_station), elektrikli araç sahiplerinin arabalarını, motosikletlerini veya diğer elektrikli araçlarını şarj edebilecekleri bir altyapı tesisidir. Bu noktalar, araç akülerine enerji sağlamak için şarj cihazları ve uygun bağlantılar sağlar.
    *35* tür filtre içerir: **Bisiklet erişimi** (*1* değeri vardır), **Otobüs erişimi** (*1* değeri vardır), **HGV erişimi** (*5* değeri vardır), **Otomobil erişimi** (*1* değeri vardır), **Scooter erişimi** (*1* değeri vardır), **Uygulama ile kimlik doğrulama** (*1* değeri vardır), **Çip kart ile kimlik doğrulama** (*1* değeri vardır), **Temassız kimlik doğrulama** (*1* değeri vardır), **Anahtar ile kimlik doğrulama** (*1* değeri vardır), **Gerekli kimlik doğrulama** (*1* değeri vardır), **Telefon araması ile kimlik doğrulama** (*1* değeri vardır) **Kısa mesaj ile kimlik doğrulama** (*1* değeri vardır), **Ücret** (*2* değeri vardır), **İnternet erişim türü** (*3* değeri vardır), **İnternet erişim türü** (*3* değeri vardır), **Tekerlekli sandalye erişilebilirliği** (*4* değeri vardır), Şimdi açık / 7/24 açık ve diğerleri.

4. **Bakkal ve süpermarket**. [Bakkal](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dconvenience) ve [süpermarket](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dsupermarket) perakende tesislerini temsil eder.
    *13* tür filtre içerir: **Toplu alım** (*2* değeri vardır), **Nakit çekme** (*5* değeri vardır), **Bebek bezi değiştirme masası** (*3* değeri vardır), **Kahve** (*2* değeri vardır), **Teslimat** (*1* değeri vardır), **Diyet** (*8* değeri vardır), **Dondurma** (*1* değeri vardır), **Organik ürünler** (*2* değeri vardır), **Ödeme türü** (*10'dan fazla* değeri vardır), **İkinci El Filtresi** (*2* değeri vardır), **Self servis ödeme** (*2* değeri vardır), **Tekerlekli sandalye erişilebilirliği** (*4* değeri vardır), Şimdi açık / 7/24 açık.

5. **<Translate android="true" ids="poi_filter_emergency"/>**. [Acil durum](https://wiki.openstreetmap.org/wiki/Key:emergency), hastaneler, polis karakolları, itfaiye istasyonları ve ilk yardım tıbbi merkezleri gibi acil durum hizmetleriyle ilişkili tesisleri ve konumları içerir.
    Herhangi bir filtre içermez.

6. **Akaryakıt istasyonu**. Bir [akaryakıt istasyonu](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfuel), aynı zamanda benzin istasyonu, petrol istasyonu, gaz istasyonu ve benzin garajı olarak da bilinir. Motorlu taşıtların yakıt ikmali yapabileceği perakende tipi tesistir.
    *13* tür filtre içerir: **Araç yıkama** (*2* değeri vardır), **Nakit çekme** (*5* değeri vardır), **Basınçlı hava** (*1* değeri vardır), **Yakıt türü (havacılık)** (*20'den fazla* değeri vardır), **Yakıt kartları** (*5* değeri vardır), **Ödeme türü** (*20'den fazla* değeri vardır), **Self servis ödeme** (*2* değeri vardır), **Kar motosikleti erişimi** (*3* değeri vardır), **Dinlenme odası** (*1'den fazla* değeri vardır), **Elektrik süpürgesi** (*1* değeri vardır), **Otomatik yakıt dağıtıcısı** (*1* değeri vardır), **Tekerlekli sandalye erişilebilirliği** (*4* değeri vardır), Şimdi açık / 7/24 açık.

7. **Finans**. [Finans](https://wiki.openstreetmap.org/wiki/Tag:office%3Dfinancial), finans sektöründeki şirketlerin ofisleri için kullanılır.
    *5* tür filtre içerir.

8. **Yiyecek**. [Yiyecek](https://wiki.openstreetmap.org/wiki/Category:Food_and_beverages), yiyecek ve içecek sağlayan tüm yerleri içerir.
    *24* tür filtre içerir.

9. **Sağlık hizmetleri**. [Sağlık hizmetleri](https://wiki.openstreetmap.org/wiki/Healthcare), farklı tesis türlerinde farklı profesyoneller tarafından sağlanan hizmetleri içerir.
    *13* tür filtre içerir.

10. **Eğlence**. [Eğlence](https://wiki.openstreetmap.org/wiki/Category:Leisure), çeşitli eğlence yerlerini ve tesislerini içerir.
    *15* tür filtre içerir.

11. **Denizcilik**. Denizcilik türleriyle ilgili POI'leri içerir.
    Herhangi bir filtre içermez.

12. **<Translate android="true" ids="poi_filter_closest_poi"/>**. Size yakın olan POI'leri içerir.
    *216* tür filtre içerir.

13. **<Translate android="true" ids="poi_filter_parking"/>**. [Otopark](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking), halk, müşteriler veya diğer yetkili kullanıcılar tarafından otomobil ve kamyon gibi araçları park etmek için kullanılan tesisleri içerir, genellikle otopark (İngiliz İngilizcesi) veya park alanı (Amerikan İngilizcesi) olarak bilinir.
    *34* tür filtre içerir.

14. **Kişisel ulaşım**. Tüm [araç türleri](https://wiki.openstreetmap.org/wiki/Pl:Key:amenity#Transport) sizin mülkiyetinizde olabilir.
    *38* tür filtre içerir.

15. **Popüler yerler (Wikipedia)**. Bu kategoride arama yapmak için, ilgilendiğiniz bölgenin [Wikipedia haritasını](../plugins/wikipedia.md#overview) indirmeniz gerekir.
    Herhangi bir filtre içermez.

16. **Özel erişim**.
    *6* tür filtre içerir.

17. **<Translate android="true" ids="poi_filter_public_transport"/>**. Halkın kullanımı için tasarlanmış, bir şehir veya bölgenin tüm sakinleri ve ziyaretçileri tarafından erişilebilir bir ulaşım sistemidir.
    *9* tür filtre içerir.

18. **Rotalar**. Çeşitli etkinlikler için [OSM rotalarını](../map/routes.md) içerir.
    *14* tür filtre içerir: **Kontrol noktası**, **Bisiklet ağı düğümü**, **Yürüyüş ağı düğümü**, **Rota ağı (bisiklet)**, **Rota ağı (yürüyüş)**, **Rota noktası kategorisi**, **Hava Sporları**, **Bisiklet**, **Sürüş**, **Yaya**, **Motosiklet**, **Diğer rotalar**, **Su sporları**, **Kış sporları**.

19. **Gezilecek yerler**. İnsanların ilgilerini çeken yerleri veya siteleri ziyaret ederek onlarla tanıştığı ve güzelliklerinin, tarihlerinin veya önemlerinin tadını çıkardığı bir faaliyettir.
    *8* tür filtre içerir.

20. **Spor**. Spor etkinlikleri için alanları içerir.
    *11* tür filtre içerir.

21. **Mağaza**. [Mağaza](https://wiki.openstreetmap.org/wiki/Key:shop), marketler, giyim mağazaları, elektronik mağazaları ve diğerleri gibi çeşitli mal veya hizmetleri satan çeşitli işletmeleri ve işyerlerini ifade eder.
    *36* tür filtre içerir.

22. **Turizm**. [Turizm](https://wiki.openstreetmap.org/wiki/Key:tourism), turistler için özel ilgi çekici yerleri ve şeyleri, görülecek yerleri, kalınacak yerleri ve turistlere bilgi ve destek sağlayan şeyleri ve yerleri içerir.
    *32* tür filtre içerir.

23. **Su**. İnsan tarafından oluşturulan veya düzenlenen [içme suyu](https://wiki.openstreetmap.org/wiki/Key:drinking_water) kaynakları.
    Herhangi bir filtre içermez.


### Kategorileri Yeniden Düzenle {#rearrange-categories}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![POI Arama Android](@site/static/img/search/search_poi_rearrange_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI Arama iOS](@site/static/img/search/search_poi_rearrange_ios.png)

</TabItem>

</Tabs>

Kategorileri Yeniden Düzenle özelliği, yalnızca ihtiyacınız olan kategorileri listelemenizi ve bunları en rahat kullanacağınız sıraya göre düzenlemenizi sağlar.

Açıklama ve nasıl kullanılır:

- Başlangıçta, *liste alfabetik olarak sıralanır.* Oluşturulan kategoriler de alfabetik sıraya göre eklenir.
- Kategori listesindeki değişiklikler her profil için ayrı ayrı yapılır.
- Kategorileri sürükleyip bırakarak listedeki doğru konuma taşıyın.
- Gereksiz kategorileri *gizlemek için* **eksi** simgesine dokunun.
- **Mevcut**. Daha önce *Gizli* olan kategoriler, **artı** simgesine dokunarak görüntülenen listeye geri döndürülebilir.
- Listeyi önceden ayarlanmış duruma döndürmek için **Sıfırla** düğmesini kullanın.
- [Özel Arama](#custom-poi-search) veya [Filtreler](#save-new-custom-filters) ile oluşturulan kategoriler, **Sil** simgesi kullanılarak silinebilir.

![POI Arama Android](@site/static/img/search/search_poi_rearrange_del_andr.png)


### Çevrimiçi Arama {#online-search}

<InfoAndroidOnly />

![POI Arama Android](@site/static/img/search/search_online_2_andr.png)

**Çevrimiçi Arama**, konumları, adresleri ve ilgi çekici noktaları gerçek zamanlı olarak bulmanızı sağlar. OsmAnd, OpenStreetMap tarafından geliştirilen ve kullanıcıların metin sorgularını coğrafi koordinatlara ve tersine çeviren bir çevrimiçi coğrafi kodlayıcı olan [Nominatim](https://nominatim.openstreetmap.org/ui/search.html) kullanır ([*çevrimiçi arama sorgusu örneği*](#example-of-online-search-query)).

Çevrimiçi Arama aşağıdaki özellikleri içerir:

1. **Konuma göre arama** - Bir şehir, sokak, mahalle veya başka bir konumun adını girebilirsiniz ve OsmAnd sorguya uyan sonuçları sağlayacaktır.
2. **Coğrafi kodlama** - Çevrimiçi arama, metin sorgularınızı coğrafi koordinatlara dönüştürerek hassas konumlandırma sağlar.
3. **Ters coğrafi kodlama** - Coğrafi koordinatları girebilirsiniz ve Arama, ilgili konumu bir şehir adı, sokak adı veya haritadaki bir yer olarak döndürecektir.
4. **İlgi Çekici Noktalara göre arama** - Farklı noktaları ada veya kategoriye göre aramanızı sağlar.

Çevrimiçi Arama Kullanımı:

- Çevrimiçi arama, verilerin güncel olmasını ve güncellemelerin mevcut olmasını sağlar, çünkü hizmet sürekli güncellenir ve açık veri kaynaklarını kullanır.
- Farklı bölgelerdeki ilgi çekici yerleri bulmanızı sağlayan geniş bir yer ve nesne kapsamı sağlar.
- Çevrimiçi aramalar gerçek zamanlıdır ve arama sonuçlarına hızlı erişim sağlar.
- Şehirlerde ve iyi İnternet kapsama alanına sahip otoyollarda kullanışlıdır.
- Bölgenin haritaları yoksa ve bunları indirmek mümkün değilse çevrimiçi arama kullanışlıdır.
- *Sürekli ve kararlı bir İnternet bağlantısı gerektirir.*

![POI Arama Android](@site/static/img/search/search_poi_online_increase2_andr.png)

Sonuçları iyileştirmek için, Arama aracını kullanmadan önce, belirli bir konumu bulmanız gereken yere daha yakın olmak için haritayı yakınlaştırın. Ve arama yaparken, konumunuzdan daha uzaktaki yerleri bulmak için **arama yarıçapını artırabilirsiniz**. Çevrimdışı arama yaparken, gerekli sonuçlar mevcut değilse, OsmAnd çevrimiçi aramayı kullanmayı önerir.

Çevrimiçi Navigasyon hakkında bilgiyi [Çevrimiçi rota oluşturma](../navigation/routing/online-routing.md) makalesinde bulabilirsiniz.

#### Çevrimiçi Arama Sorgusu Örneği {#example-of-online-search-query}

OsmAnd'da *Nominatim*, OpenStreetMap verileri için bir arama motoru olarak kullanılır, bununla ada göre arama yapabilirsiniz (adrese göre arama şu anda devre dışıdır). Her sonucun, nesne hakkındaki verilerin veritabanında nasıl saklandığını görmek için bir ayrıntı sayfasına bağlantısı vardır.

**Örnek XML dosyası.** Bu XML dosyasıyla ilişkili herhangi bir stil bilgisi içermez. Belge ağacı [bağlantıda](https://nominatim.openstreetmap.org/search?format=xml&addressdetails=0&accept-language=en&q=%D0%9C%D1%96%D0%BD%D1%81%D0%BA+%D0%BD%D0%B5%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%B0%D1%81%D1%86%D1%96+72+&addressdetails=1&limit=300) gösterilmiştir.


## Özel POI Arama {#custom-poi-search}

Özel POI Arama, farklı kategorilerden POI'leri bulmanızı ve daha doğru ve kişiselleştirilmiş bir arama için bunları birleştirmenizi sağlayan gelişmiş bir arama özelliğidir. Standart POI aramasının aksine, önceden tanımlanmış bazı kategorilerle sınırlıdır, Özel POI araması farklı POI türlerini seçme ve birleştirme esnekliği sağlar.

Örneğin, en yakın yemek yenecek yeri bulmak ve ardından ilacınızı almak için aynı anda restoran ve eczane arayabilirsiniz. Veya arabanızla ilgili bir sorun olduğunda en yakın benzin istasyonunu ve araba servisini arayabilirsiniz.

Bu işlevsellik çeşitli durumlarda özellikle kullanışlıdır:

- *Seyahat*. Seyahat ederken, özel aramayı kullanarak farklı ilgi çekici yerleri hızlı bir şekilde bulabilir ve bunları optimal bir rota oluşturmak için birleştirebilirsiniz.
- *Acil durumlar*. Birkaç tür hizmeti hızlı bir şekilde bulmanız gerekiyorsa, ihtiyacınız olan tüm bilgileri almak için özel bir POI araması kullanabilirsiniz.
- *Yakındaki hizmetleri arama*. Özel Arama, belirli bir mahallede veya rotanın belirli bir bölümünde birkaç tür hizmeti bulmanız gerekiyorsa, kolay arama için farklı POI kategorilerini birleştirmenizi sağlar.

### Özel POI Filtresi {#custom-poi-filter}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Özel arama Android](@site/static/img/search/search_custom_filter_andr.png) ![Özel arama Android](@site/static/img/search/search_custom_filter_second_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!--
![Özel POI iOS](@site/static/img/search/custom_poi_ios.png) ![Özel POI türleri iOS](@site/static/img/search/custom_poi_types_ios.png)
-->

![Özel POI iOS](@site/static/img/search/custom_poi_filter_1_ios.png) ![Özel POI türleri iOS](@site/static/img/search/custom_poi_filter_2_ios.png)

</TabItem>

</Tabs>

*Özel POI filtresi*, ilgili değerlerden oluşan tesis kategorileri kümelerini içerir. OsmAnd, bir veya daha fazla önerilen kategoriden gerekli POI türlerini toplamanıza ve birleştirmenize olanak tanır.

Haritada yerleri bulmak için özel filtreler oluşturmak için, ilgili kategori ve alt kategorileri seçin. Bu filtreleri daha sonra kullanmak üzere [kaydedebilir](#save-new-custom-filters) veya gerektiğinde [düzenleyebilirsiniz](#edit-an-existing-filter). Alternatif olarak, *Göster* düğmesine dokunarak filtrelenmiş verileri kaydetmeden görüntüleyebilirsiniz. Ancak, filtreleri kaydetmezseniz, aramaları değiştirdiğinizde veya arama aracından çıktığınızda tüm seçimlerin iptal edileceğini unutmayın.

- Her tesis kategorisi, POI türleri için mevcut genel değerlerin bir listesini içerir.
- İlgilendiğiniz türün alanına dokunarak bunları tek tek seçme veya seçimini kaldırma seçeneğiniz vardır.
- *Tümünü seç* - Bunu yapmak için geçiş düğmesini seçin.
- Gereksiz olanları hariç tutarak listeyi iyileştirin - *POI türlerini ara* alanına önerilen adı yazmaya başlayın.

#### Kategoriler ve Filtreleri {#categories-and-their-filters}

1. **<Translate android="true" ids="amenity_type_administrative"/>**. 25 tür içerir: *Parseller, Mercan Adası, İlçe, Şehir, Şehir bloğu, Ülke, Adliye, Gümrük, Diplomatik ofis, Çiftlik, Hükümet, Mezra, Ada, Adacık, İzole konut, Yerleşim yeri, Mahalle, Polis, Cezaevi, Mahalle, Yerleşim alanı, Banliyö, Kasaba, Belediye binası, Köy*.

2. **Noel**. 5 tür filtre içerir:
    *Noel etkinliği, Noel pazarı, Noel piramidi, Noel dükkanı, Noel ağacı*.

3. **<Translate android="true" ids="amenity_type_education"/>**. 16 tür içerir: *Parseller, Mercan Adası, İlçe, Şehir, Şehir bloğu, Ülke, Adliye, Gümrük, Diplomatik ofis, Çiftlik, Hükümet, Mezra, Ada, Adacık, İzole konut, Yerleşim yeri, Mahalle, Polis, Cezaevi, Mahalle, Yerleşim alanı, Banliyö, Kasaba, Belediye binası, Köy*.

4. **<Translate android="true" ids="amenity_type_emergency"/>**. 14 tür filtre içerir.

5. **Acil durum altyapısı**. 12 tür filtre içerir.

6. **<Translate android="true" ids="amenity_type_finance"/>**. 12 tür filtre içerir.

7. **Yiyecek**. 12 tür filtre içerir.

8. **Tehlike**. 5 tür içerir: *Çığ tehlikesi, Erozyon tehlikesi, Sel tehlikesi, Nükleer tehlike, Kaygan yol*.

9. **<Translate android="true" ids="amenity_type_healthcare"/>**. 31 tür filtre içerir.

10. **<Translate android="true" ids="amenity_type_leisure"/>**. 148 tür filtre içerir.

11. **<Translate android="true" ids="amenity_type_man_made"/>**. 121 tür filtre içerir.

12. **<Translate android="true" ids="amenity_type_military"/>**. 7 tür içerir: *Tehlikeli alan, Askeri sığınak, Askeri deniz üssü, Askeri ofis, Askeri menzil, Askeri bölge, Nükleer patlama alanı*.

13. **<Translate android="true" ids="amenity_type_natural"/>**. 50 tür filtre içerir.

14. **Denizcilik**. 41 tür filtre içerir.

15. **<Translate android="true" ids="amenity_type_office"/>**. 39 tür filtre içerir.

16. **Popüler yerler (Wikipedia)**. 1 tür içerir: *Wikipedia*.

17. **Özel erişim**. Herhangi bir filtre içermez.

18. **Rotalar**. 15 tür filtre içerir.

19. **Hizmet**. 111 tür filtre içerir.

20. **<Translate android="true" ids="amenity_type_sport"/>**. 119 tür filtre içerir.

21. **Mağaza**. 156 tür filtre içerir.

22. **<Translate android="true" ids="amenity_type_tourism"/>**. 103 tür filtre içerir.

23. **Ulaşım**. 97 tür filtre içerir.

24. **Kullanıcı tanımlı**. 1 tür içerir: *Kullanıcı Tanımlı Diğer Posta Kodu*.

<!--
:::note since OsmAnd 5.0 for Android
Aranabilir:

- `amenity=place_of_worship` etiketine dayalı dini POI'ler, kiliseler, camiler veya sinagoglar gibi dini spesifik konumlara ayrılmıştır.
- "bank", "gençlik bankı" (`amenity=bench`) gibi küçük tesisler kategori listesinde mevcuttur.
:::
-->

### Yeni Özel Filtreleri Kaydet {#save-new-custom-filters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Özel POI kaydet Android](@site/static/img/search/custom_poi_save_android.png) ![Özel POI kaydet Android](@site/static/img/search/custom_poi_save_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Özel POI kaydet iOS](@site/static/img/search/custom_poi_save_2_ios.png)

</TabItem>

</Tabs>

Özel bir filtreyi **kaydetmek** için filtre türlerini seçin ve ardından:

- iOS için *Göster* düğmesine ve Android için *kaydetme eylemini gösteren simgeye* sahip düğmeye dokunun.
- Yeni kategori için bir ad girin.
- Filtreniz, Arama aracındaki *Kategoriler sekmesi* listesinde görünecektir.

Başka bir **kaydetme** yolu:

- *[kategori](#poi-search-by-categories) → [filtre simgesi](#types-of-filters) →* özellik *türlerini* seçin *→ üç nokta menüsü → Filtreyi kaydet*.


### Mevcut Bir Filtreyi Düzenle {#edit-an-existing-filter}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Özel POI sil Android](@site/static/img/search/custom_poi_delete_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Özel POI sil iOS](@site/static/img/search/custom_poi_delete_4_ios.png)

</TabItem>

</Tabs>

Ana ekrandan:

- Cihaz ekranının sol üst köşesindeki *Büyüteç* düğmesine dokunarak *Arama* menüsünü açın.
- *Kategoriler* sekmesini seçin.
- Kaydedilmiş bir özel kategori seçin ve arama sonuçları ekranı görünür.
- *Haritada Göster*'in yanındaki *Filtre* simgesine dokunarak *Filtreler* ekranını açın.
- *Üç nokta menüsüne* dokunun.
- Açılır menüden **Filtreyi düzenle**'yi seçin.
- Düzenledikten sonra özel bir POI aramasını kaydetmek için:
    - POI kategorilerini ve bunlar için filtre türlerini seçin *→* *Göster → üç nokta menüsü → Farklı Kaydet →* yeni bir filtre adı girin veya mevcut olana değişiklikleri *kaydedin*.


### Özel POI Filtresini Sil {#delete-custom-poi-filter}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Özel POI sil Android](@site/static/img/search/custom_poi_delete_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Özel POI sil iOS](@site/static/img/search/custom_poi_delete_2_ios.png)

</TabItem>

</Tabs>

Yalnızca filtreler veya özel arama kullanılarak oluşturulan kategorileri silebilirsiniz.

- [Kategoriler](#poi-search-by-categories) sekmesine gidin ve gerekli olanı seçin.
- *Haritada Göster*'in yanındaki alanda, *filtreyi* temsil eden simgeye dokunun.
- *Filtreler* menüsünde, ekranın sağ üst köşesinde bulunan *üç nokta menüsüne* ( &#8285; ) dokunun.
- **Filtreyi Sil**'i seçin.
- ***Silme işlemini geri alamazsınız.***


#### Özel Kategorileri Sil (iOS) {#delete-custom-categories-ios}

![Özel POI sil iOS](@site/static/img/search/custom_poi_delete_3_ios.png)

Yalnızca iOS uygulaması için ek bir seçenek **Özel Kategorileri Sil**'dir.

- Bu öğe, *Kategoriler* sekmesi listesinin sonunda bulunur.
- İstenmeyen kategorileri tek tek veya *Tümünü seç* ile seçin.
- **Sil** düğmesine dokunun.


## İlgili Makaleler {#related-articles}

- [Tümünü Ara](./search-all.md)
- [Adres Ara](./search-address.md)
- [Arama Geçmişi](./search-history.md)
- [Koordinat Ara](./search-coordinates.md)


> *Son güncelleme: Mayıs 2025*