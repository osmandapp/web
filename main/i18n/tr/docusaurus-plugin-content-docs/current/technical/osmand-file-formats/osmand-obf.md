---
source-hash: d5b7054e046a16fa52c2baf86bbe3278c548299ab710161c6f4e85a0c2933ff7
sidebar_position: 7
---

# OsmAnd İkili Haritaları - .obf {#osmand-binary-maps---obf}

## Giriş {#introduction}
*.travel.obf, *.wiki.obf, *.roads.obf, .. hakkında konuşun.

Birçok soru, uygulamadaki harita verilerinin içeriği ve sorunları hakkındadır. Bu konu, dahili veri formatının ve veri işlemenin bazı teknik detaylarını ortaya koymaktadır. OSM veri yapısına aşina olan geliştirici olmayanlar için ilginç olabilir.

OsmAnd çevrimdışı harita verileri 'obf' dosyalarında bulunur. 'obf' dosyaları karmaşık bir yapıya sahiptir ve birçok bölümden oluşabilir. Dosya boyutlarını 2 GB'ın altında tutmanız şiddetle tavsiye edilir. Şu anda obf dosyaları, birden çok POI bölümü, birden çok yönlendirme veri bölümü, birden çok Harita bölümü, birden çok Ulaşım bölümü ve birden çok Adres veri bölümünden oluşan birçok bölüme sahip olabilir. Bu liste gelecekte genişletilebilir. Obf dosyasından bazı bölümleri birleştirmek veya ayırmak veya silmek için OsmAndMapCreator ile birlikte verilen 'binary\_inspector' konsol aracını kullanın.
* POI, Ulaşım bölümü
* Harita bölümü
* Adres bölümü

> S: Mapcreator, OsmAnd'ın çevrimdışı adres aramasında daha sonra görünecek tüm yerlerin listesini nasıl oluşturur? Bunun için hangi nesneler ayrıntılı olarak kullanılır? Bir yer etiketi olan hangi düğümler dahil edilir ve hangileri hariç tutulur?
>
> C: OsmAnd'da Şehirler olarak görünen tüm yerler, "place" etiketine sahip düğümlerden alınır [https://wiki.openstreetmap.org/wiki/Place](https://wiki.openstreetmap.org/wiki/Place "https://wiki.openstreetmap.org/wiki/Place"). Şu anda şehir, kasaba, banliyö, köy, mezra kullanılmaktadır.
>
> S: Mapcreator, boundary=administrative ile bir ilişki aracılığıyla verilen bir alan poligonunu nasıl işler? OSM verilerinde mevcut olduğunda bir düğüm olarak verilen bir yeri sınırı ile nasıl ilişkilendirirsiniz?
>
> C: Basitçe söylemek gerekirse: şu anda adıyla çalışıyor. Mapcreator tüm sınırları ziyaret etmeye çalışır ve ilişkiden veya ayrılmış yollardan kapalı (!) bir sınır oluşturur ve bunu yalnızca bir adla ilişkilendirir. Bundan sonra, *içerir* algoritmasını kullanarak *yer* ile *sınır adı* eşleştirmeye çalışır. Ayrıca bu sınırın yeri içerip içermediğine dair ek bir kontrol de vardır. Aynı ada sahip (birbirini içeren ilçe/kasaba/bölge gibi) farklı admin_level'lere sahip birçok sınır varsa, tam eşleşen en yüksek admin_level seçilecektir. YAPILACAKLAR Daha fazla ayrıntı burada olmalı (şehrin ilçeleri hakkında...).
>
> S: Hangi admin seviyesinin belirli bir yer düğümüyle ilişki kurmak için doğru olduğunu açıklayan belgeler nerede? Hangi ülkeler hangi admin seviyesini tercih ediyor?
>
> C: Şu anda admin_level ilişkisi ile admin_centre arasındaki ilişki kullanılmamaktadır. Çünkü çok az ilişki bu bilgiyi sağlamaktadır.
>
> S: MapCreator hangi sokağın hangi yere ait olduğunu nasıl bilir? Bir sınır poligonu verildiğinde ve hiç olmadığında farklı durumlar var mı?
>
> C: Kontrol edilecek birçok strateji vardır ve bunlar aşağıdaki sıraya göre önceliklendirilir:
> - En önemlisi yerler ve sınırlarıdır. Sokak yönetimi algoritmasının doğru çalışması için yer eşleşen sınırların doğru olması gerekir. Sokak birçok sınıra aitse, tüm uygun yerlere kaydedilecektir.
> - is_in etiketi (kullanımdan kaldırılmıştır). Bu nedenle, bir sokağın is_in etiketi varsa, ayrıştırılacak ve virgülle bölünecek ve sokak ilgili tüm şehirlere (tam ad eşleşmesiyle) eklenecektir. (KONTROL EDİLECEK: temel kontrol sokağı şehir yarıçapında mı?)
> - Sokak herhangi bir sınıra ait değilse (düzgün kapanmayan sınırlar burada bir sorun olabilir), en yakın/en büyük şehri bulmaya çalışır ve sokağı o şehre kaydeder (bazen 1 km mesafedeki bir kasabaya kaydeder ve sadece 100m mesafedeki en yakın mezrayı kaçırır).
>
> Son kısım çok yanlış. Bu yüzden birçok sokak komşu bir şehre bağlanır.
>
> MapCreator'ın tercihlerinde sokak son ekleri, yakınlaştırma, pürüzsüzlük ve render için beş ayar daha var... bunların her biriyle elde edebileceğiniz detaylı etkiler nelerdir? Bu ayarlar gerçekten kullanılıyor mu?
>
> Araçlar
>
> - OsmAndMapCreator hangi sokakların hangi şehirle ilişkili olduğunu görüntüleyebilir (bağlam menüsü -> Adresi göster). Yerel obf dosyaları mevcut olmalı ve Ayarlar'da yapılandırılmalıdır.
> - İkili denetleyici aracı her şehir için bir sokak listesi gösterebilir. Olası parametreleri görmek için aracı parametresiz çalıştırın.
> - Şu anda tüm dizin dosyaları gen.log içerir. Günlük dosyasını görüntüleyerek harita oluşturma sürecindeki hataları bulabilir ve bu, bazı sokakların neden doğru adres dizin yerinde olmadığına dair bir cevap verebilir.
>
> Adres Bölümü - iş akışı
>
> Bu ilişkiler vardır:
>
> şehir -> 0..1 sınır
>
> sınır -> 0..** şehir (şehrin banliyösünü tanımlamak için kullanılır)
>
> tüm Osm DÜĞÜMLERİNİ yineleyin ve etiket = PLACE mevcutsa şehir olarak kaydedin:
>
> - şehirleri (KASABA, ŞEHİR) çıkarın.
> - köyleri (başka herhangi bir şey) çıkarın.
>
> type=boundary etiketli tüm İLİŞKİLERİ ve YOLLARI yineleyin ve tüm sınırları kaydedin:
>
> - sınır, 'boundary=administrative' veya 'place=...' etiketli bir Varlık (yol veya ilişki) olarak adlandırılır.
> - sınır admin_level > 4 olmalı veya admin_level'i olmamalıdır.
> - sınır her zaman bir şehirle (veya eyaletle, ...) ilişkili değildir.
> - sınır, bir şehir düğümüne işaret eden 'admin_center', 'label' üyesine sahip olabilir.
> - sınır, adıyla şehir düğümüyle tam olarak eşleşir ve şehir düğümü sınırın içine düşer.
> - sınır, adıyla şehir düğümünün başlangıcını, sonunu veya alt dizesini eşleştirir ve şehir düğümü sınırın içine düşer.
>
> Bir şehirle birçok sınır ilişkilendirilebilir. İşte en önemli sınırın nasıl alındığı ve şehirle ilişkilendirildiği sırası:
>
> - Sınır, adıyla tam olarak eşleşir ve place etiketine sahiptir.
> - Sınır, adıyla tam olarak eşleşir ve admin_level 8 > 7 > 6 > 9 > 10 > 5... veya hiçbir şeye sahip değildir.
> - Sınırın admin_id eşleşmesi vardır.
> - admin_level'in sıralanması dahil diğer tüm durumlar.
>
> Şehrin atanmış bir sınırı yoksa, şehir merkezleri olmayan ve o şehri içeren tüm sınırlar kontrol edilecek ve admin_level >=7 olan sınır atanacaktır.
>
> her sınır için, içinde bulunan şehirlerin bir listesini yapın.
>
> tüm İLİŞKİLERİ yineleyin ve adresleri bulun ([Postal_Addresses](https://wiki.openstreetmap.org/wiki/Relations/Proposed/Postal_Addresses)):
>
> "address" etiket türüne sahip ve "house" veya "a6" address_type olan ilişki.
>
> ilişkili Sokak ilişkisini ve ev üyelerini arayın.
>
> sokak için şehri ve ev adresi için şehri bulmaya çalışın.
>
> şehirleri arayın (daha önceki adımlarda bulmuş olmalıyız!).
>
> şehir ve sokağımız varsa, veritabanına kaydedin:
>
> sokak kaydı için bkz: bir şehir için sokak kaydet
>
> sokak kayıtlıysa ve sokağı işliyorsak:
>
> tüm ilişki üyelerini yineleyin:
>
> - sokak bul -> sokağın düğümlerini db'ye yaz
> - ev bul -> evi sokağa yaz
>
> sokak kayıtlıysa ve evi işliyorsak:
>
> - ev numarasını bul
> - ev sınırını bul: bulunursa, depola: sokak için bina
>
> sokak kaydet (sokak, sokağın konumu (los), şehirler):
>
> **Not:** bir sokağı birden fazla şehre kaydedebiliriz = bu, sokağın iç içe geçmiş alanlarda, banliyöde, şehirde, mezrada vb. olabileceği anlamına gelir... Her alan için, sokağın içinde olduğu sokağı kaydetmek istiyoruz.
>
> her şehir için:
>
> şehir içinde mevcut sokak kaydını bul:
>
> sokak mevcutsa:
>
> - şehir kısmı bilinmiyorsa -> mevcut sokağın şehir kısmını güncelle
> - sokağımız için şehir Bölümünü bulmaya çalışın ve sokağı tekrar arayın
>
> sokak mevcut değilse: (aramadan sonra değişebilir)
>
> - sokak, şehir kısmı, konum ve sokak adı için sokağı kaydet
>
> findOrRegister sokak
>
> - sokağa yakın şehirleri bul
> - sokak şehrin sınırları içindeyse, aramaya şehri ekle
> - sınır kullanılarak hiçbir şehir bulunamazsa, sokak için en yakın şehri bul
> - sokak kaydet: bulunan şehirler için
>
> tüm DÜĞÜMLERİ, sonra YOLLARI, sonra İLİŞKİLERİ yineleyin (ana varlığı yineleyin)
>
> yolları bul - interpolasyonlar:
>
> - her interpolasyon için, interpolasyonun konumuyla bir sokak bulOrKaydet
> - her iki düğüm için interpolasyonu temsil eden bir bina oluştur
>
> herhangi bir varlık için, addr:housenumber ve addr:street etiketini bul (yine düğümlerin interpolasyonu olabilir!!!):
>
> - bu varlık için bina zaten mevcutsa atla!
> - sokak için sokakları bulOrKaydet
> - ev numarasını bul
> - ev numarası '-' içeriyorsa, enterpolasyonlu ev numarası oluşturmaya çalışın (eksik latlon2?)
> - ev numarası '/' içeriyorsa, ikinci sokağı arayın addr:street2 --> sadece [RU osm](https://wiki.openstreetmap.org/wiki/RU:Key:addr) için görünüyor:
> - bunun için daha fazla varyasyon var: adr:housenumber2, addr2:street, addr2:housenumber vb...
> - her sokak için, mevcut evi depola
>
> adı ve highway etiketi olan, ancak addr:housenumber ve addr:street etiketi olmayan yol için:
>
> - **Not**: bu, isimleri olan (otoyol veya benzeri) arabalar için yollar olabilir
> - böyle bir sokak zaten mevcutsa atla
> - şehir için sokağı bulOrKaydet
> - her şehirde bulunan her sokak için düğümleri yaz
>
> "postal_code" etiketli her ilişkiyi daha sonra kullanmak üzere depola.
>
> **Not**: bu, address:type = pc ve addr:postalcode'u içermez
>
> posta kodlarını işle:
>
> - depolanan her postal_code ilişkisi için
> - her bina üyesi için, postal_code'u güncelle
>
> dizini yaz:
>
> şehirleri şunlara ayır: şehirler+kasabalar, banliyöler (is_in etiketli banliyö), köyler (şehir veya kasaba değil)
>
> banliyöleri kullanarak şehirleri+kasabaları yaz
>
> şehirlerden+kasabalardan + her kasaba için uygun banliyölerden sokak oku
>
> - burada, bir şehir için aynı ada sahip daha fazla sokak olabilir, bu durumda sokak için bir şehir Bölümü (banliyö) bulmaya çalışırız, sokağın içinde olduğu yer. Bir şehir bölümünde aynı ada sahip daha fazla sokak olmamalıdır!
>
> her sokak için
>
> - her bina için, posta kodunu kaydet/oluştur/bul, sokağı kaydet
>
> köyleri yaz
>
> - kasabalarla aynı...
>
> çıkarılan posta kodlarını ve sokaklarını yaz