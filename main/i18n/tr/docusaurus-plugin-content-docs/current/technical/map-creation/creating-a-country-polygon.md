---
source-hash: e0173be6fa81b710afb1b4b52c4268f63865918a50d504364df4f0d772bf2d39
title: Ülke Poligonu Oluşturma
versions: '*'
---
**_Bu makalenin gözden geçirilmesi gerekiyor_**

Bu makale, geofabrik.de'de eksik bir ülke için nasıl poligon oluşturulacağını ve bu poligonun OsmAnd harita oluşturma sunucusuna nasıl ekleneceğini açıklamaktadır.

## Giriş {#introduction}

OsmAnd, birçok ülke için birçok harita ile birlikte gelir. Çoğu harita, [geofabrik.de](http://download.geofabrik.de) adresinden indirilen "ham veri" haritalarından oluşturulur. Geofabrik, bu ham veri haritalarını herkese ücretsiz olarak sağlar ve bu haritalara dayalı (ticari) hizmetler ve ürünler sunar.

Geofabrik.de, daha fazla sayıda kullanıcı veya müşterileri tarafından talep edilen ülkeler için harita sunma stratejisine sahiptir. Bu, Seyşeller veya Burundi gibi bazı egzotik ülkeler gibi bazı haritaların geofabrik'e asla ulaşmadığı anlamına gelir, çünkü yeterli talep yoktur (veya hiç yoktur).

## Sunucu süreci {#server-process}
Geofabrik'in bu stratejik kararı nedeniyle, OsmAnd'ın bu ülkeler için harita oluşturma seçeneği vardır ve bunun için [OsmAndMapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-development.zip) ve [osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert) araçları kullanılır. OsmAndMapCreator için bu üç adımlı bir süreçtir:
- OsmAndMapCreator, ülkenin dış sınırını çevreleyen bir poligona ihtiyaç duyar.
- OsmAndMapCreator, bu ülkeyi içeren bir sonraki daha yüksek seviyeden "ham veri haritasına" ihtiyaç duyar. Burundi için bu, OsmAndMapCreator'ın Afrika haritasına ihtiyaç duyduğu anlamına gelir. Kuzey Ren-Vestfalya için bu, OsmAndMapCreator'ın Almanya haritasına ihtiyaç duyduğu anlamına gelir.
- [Osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert), "üst" haritadan harita verilerini çıkararak poligon'dan bir "ham veri" haritası oluşturacaktır.
- OsmAndMapCreator, osmconvert tarafından oluşturulan ara "ham veri" haritasına dayalı bir OsmAnd obf haritası oluşturacaktır.

## Gerekli eylemler {#necessary-actions}
(Oluşturulan) poligonun karmaşıklığına bağlı olarak, bu tam eylem zinciri toplamda 10 dakikadan 2 saate kadar sürebilir.

### 1. Nominatim'den OpenStreetMap ilişkisini alın {#1-get-the-openstreetmap-relation-from-nominatim}
- [nominatim.openstreetmap.org](https://nominatim.openstreetmap.org/) adresine gidin.
- Ülke adınızı girin.
- Bulunduğunda "(details)" bağlantısına tıklayın.
- Detaylarda "OSM: relation " kısmına ilerleyin ve ilişki kimlik numarasını not alın veya kopyalayın.

### 2. Poligonu oluşturun {#2-generate-the-polygon}
- [polygons.openstreetmap.fr](http://polygons.openstreetmap.fr/) adresine gidin.
- Nominatim'den istediğiniz ülke için aldığınız "OSM: relation " kimlik numarasını "Id of relation" alanına girin (veya yapıştırın).
- Bu, 250 ila 3500 düğümden (NPoints) oluşan varsayılan bir poligon oluşturacaktır. Poligonun kendisi "poly" sütununda bulunabilir.
- 350'den fazla düğüm olması durumunda poligonu basitleştirmeniz gerekecektir. Poligon ne kadar basit olursa, ülke haritası o kadar hızlı oluşturulabilir (tabii ki içeriğe bağlı olarak).

### 3. Poligonu basitleştirin {#3-simplify-the-polygon}
OsmAndMapCreator tarafından haritanın mümkün olan en hızlı şekilde oluşturulması için Düğüm Noktası (NPoints) sayısı mümkün olduğunca düşük olmalıdır. Belirtildiği gibi: 350'den fazla düğüm noktası olması durumunda, poligonu basitleştirerek bunları azaltmaya çalışın.
- 350'den fazla düğüm olması durumunda, X değişkeniyle "oynayarak" bunları azaltmaya çalışın (deneyimlerime göre diğerleri pek önemli değil).
- Bazen harika sonuçlar alırsınız (90 NPoints, 200 NPoints, 270 NPoints) ve bu adımı tamamlarsınız. Bazen 450 NPoints'in altına inemezsiniz. O zaman daha fazla manuel adım uygulamanız gerekir.
- Son poligonunuzu dosyaya kaydedin. Bunun için doğru varsayılan adı kullanın, örneğin france.poly. Küçük harflere sadık kalın.

### 4. Poligonun daha fazla değiştirilmesi ve basitleştirilmesi {#4-further-modification-and-simplification-of-the-polygon}
- JOSM'yi açın (gerekirse indirin) ve oluşturduğunuz poligon dosyasını açın (kaydettiğiniz orijinal poligonun bir kopyasını/yedeklemesini yaptınız mı?).
- "Görüntüler" menüsünden bir arka plan ekleyin ve varsayılan "OpenStreetMap (Mapnik)" arka planını seçin.
- Mümkün olduğunca manuel olarak düğüm noktalarını kaldırın. \*Not:\* Poligonu sınıra mümkün olduğunca yakın tutun. Bir miktar örtüşmeye ihtiyacınız var ancak bunu 2-5 kilometrenin altında tutmaya çalışın. Ülkelerdeki örtüşme her ülke için iki kez oluşturulacaktır. Daha az örtüşme, daha az oluşturma süresi ve oluşturma hatası anlamına gelir. Kıyı şeritlerinde ve adaların çevresinde daha fazla mesafe (20 kilometre) bırakmaya çalışın. Bu yaygın olarak kabul edilir ve deniz zaten "boş"tur.
- Elinizden gelenin en iyisini yaptığınızda güncellenmiş, düzeltilmiş poligonu kaydedebilirsiniz. Belirtildiği gibi: mümkün olduğunca az düğüm noktası elde etmeye çalışın, ancak bazen bir ülke sınırı o kadar karmaşıktır ki, onu tanımlamak ve poligonu sınıra mümkün olduğunca yakın tutmak için daha fazla düğüm noktasına ihtiyacınız vardır: öyle olsun.
- **Poligonu OSM'ye yüklemeyin**. JOSM, çalışmanızı OpenStreetMap'e yüklemenizi isteyecektir. Tam olarak ne yaptığınızı bilmiyorsanız bu poligonlar için bunu yapmayın. Dünyadaki hemen hemen her ülke OpenStreetMap'te zaten mükemmel bir şekilde kapsanmıştır (aksi takdirde nominatim size ülke hakkında ayrıntıları veremezdi ve polygons.openstreetmap.fr OSM ilişki kimliğine göre poligonu oluşturamazdı).

### 5. Poligonu OsmAnd sunucusuna ekleme {#5-adding-the-polygon-to-the-osmand-server}

Bunu yapabilmek için kullanıcı olarak kaydolmanız gerekir.

Harita oluşturmayı mümkün kılmak için iki adım gereklidir:
- Poligonu harita veri bölümüne ekleme
- Ülkeyi OsmAnd obf haritalarını oluşturmak için kullanılan veri dosyasına ekleme.

Poligonu harita veri bölümüne ekleme
- OsmAnd geliştirme sunucusunun web adresine gidin: [https://github.com/osmandapp/](https://github.com/osmandapp/ "https://github.com/osmandapp/")
- OsmAnd-misc bölümünü seçin.
- Kendi kişisel deponuzu oluşturmak için "fork"u seçin.
- Yeni bir dosya oluşturun ve poligon verilerinizi içine kopyalayın. Dosyayı kaydedin.
- Bir çekme isteği oluşturun.

Harita oluşturmayı toplu listeye ekleyin
- OsmAnd geliştirme sunucusunun web adresine gidin: [github.com/osmandapp](https://github.com/osmandapp/)
- OsmAnd-tools bölümünü seçin.
- Kendi kişisel deponuzu oluşturmak için "fork"u seçin.
- Kişisel deponuzda obf-generation/regions klasörüne gidin.
- indexes.xml dosyasını seçin ve düzenle'ye tıklayın.
- Ülkenizi ilgili konuma ekleyin ve dosyayı kaydedin.
- Bir çekme isteği oluşturun.

## Bir poligondan kendi kişisel haritalarınızı oluşturma {#creating-your-own-personal-maps-from-a-poly}

Örneğin ülkelerden, illerden/eyaletlerden, bölgelerden ve şehirlerden poligonlar oluşturabilirsiniz.

Diyelim ki kızınız bir arkadaşıyla birkaç günlüğüne Paris'e gidiyor. Navigasyon, yürüme veya bisiklete binme (kesinlikle gerekli olmadıkça) ile ilgilenmiyor, ancak nerede olduğunu, nereye gideceğini ve ilgi çekici yerleri (POI'ler) nerede bulacağını bilmek istiyor. Bunun yanında küçük bir telefonu (düşük uçlu CPU, düşük bellek) ve küçük bir SD kartı (müzikle dolu) var. Bu nedenle haritanın mümkün olduğunca küçük olması gerekiyor: hem depolama hem de performans açısından. Tabii ki Paris'i içeren france_ile-de-france.obf haritasını indirebilirsiniz, ancak "özel yapım" bir Paris haritası da oluşturabilirsiniz.
- Kızınızın OsmAnd'ı indirmesini sağlayın veya daha iyisi: OsmAnd+'ı satın almasını sağlayın.
- Paris için OSM ilişki kimliğini Nominatim'den alın.
- polygons.openstreetmap.fr adresinden Paris kimliği için (basitleştirilmiş) poligonu alın.
- [osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert) uygulamasını indirin veya derleyin.
- geofabrik.de adresinden ile-de-france'ın "ham veri" haritasını indirin.
- ile-de-france haritasından ve Paris poligonundan Paris'in ham veri haritasını aşağıdaki gibi oluşturun:
<pre>
$ osmconvert ile-de-france.osm.pbf -B=paris.poly --out-pbf > Paris.osm.pbf
</pre>
- OsmAndMapCreator uygulamasını [download.osmand.net/latest-night-build/](http://download.osmand.net/latest-night-build/ "https://download.osmand.net/latest-night-build/") adresinden indirin.
- Paris.osm.pbf veri haritasından OsmAndMapCreator kullanarak OsmAnd obf haritanızı oluşturun.