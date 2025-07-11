---
source-hash: 0ece8e7a1a25127672614cdf13cd0688a67a4cbb64515cc18d60c278f7999862
title: Çevrimdışı Raster ve Vektör Haritalar Oluşturma
versions: '*'
intro: OsmAndMapCreator ile ihtiyaçlarınıza göre Raster ve Vektör haritalar oluşturmanın ve özelleştirmenin birçok yolu vardır.
---

## OsmAndMapCreator {#osmandmapcreator}

[**OsmAndMapCreator**](https://wiki.openstreetmap.org/wiki/OsmAndMapCreator), OsmAnd tarafından desteklenen herhangi bir haritayı kendiniz oluşturmak için kullanılabilir. En son sürümünü [web sitesinden](https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) indirebilirsiniz. OsmAndMapCreator, raster ve vektör haritalar oluşturmak için kullanıcı arayüzü özelliklerine sahiptir. *Vektör harita oluşturmak için OSM dosyasına (`*.pbf, *.osm.gz, *.osm.bz2`)* ve *çevrimiçi sqlite harita dosyası oluşturmak için `temel döşeme URL'sine`* ihtiyacınız olacaktır.

### Raster haritalar (basit) {#raster-maps-simple}

**Döşeme Kaynağı** menüsünden bir harita oluşturmak istediğiniz döşemeleri seçip OsmAndMapCreator'a başarıyla yüklendikten sonra, ön yüklemek istediğiniz alana sağ tıklayabilirsiniz. Bundan sonra **Döşeme Kaynağı** → **sqlite veritabanı oluştur** bölümünde `.sqlitedb` dosyası oluşturabilirsiniz.

Vektör harita oluşturmak için bir OSM dosyasına (*.pbf, *.osm.gz, *.osm.bz2) ve çevrimiçi sqlite harita oluşturmak için temel döşemenin URL'sine ihtiyacınız olacaktır.

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-download-raster-maps.png').default} alt="Raster haritaları indir" />

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-create-raster-maps.png').default} alt="Sqlitedb haritaları oluştur" />

### Vektör haritalar (basit) {#vector-maps-simple}

OsmAndMapCreator kullanıcı arayüzü aracılığıyla vektör harita oluşturma adımları:

1. OSM Dosyası
    - [Geofabrik](https://www.geofabrik.de/data/download.html) adresinden veya [OpenStreetMap](https://www.openstreetmap.org/export#map=19/48.80672/2.13187) adresinden küçük bir dışa aktarma indirin.
    - [Shapefile'ı OSM'ye dönüştürün](https://wiki.openstreetmap.org/wiki/OGR)
    - Herhangi bir programlama yardımcı programı kullanarak [OSM XML](https://wiki.openstreetmap.org/wiki/OSM_XML) dosyasını kendiniz oluşturun, bunu OsmAnd'ın anlayabileceği [OBF Biçimine](../osmand-file-formats/osmand-obf.md) dönüştürerek devam edebilirsiniz.
2. Adres / Yönlendirme / Ulaşım / Harita verilerini içeren Haritalar üretmek isteyip istemediğinizi onay kutularını seçin.
3. **Dosya** → **Dosyadan .obf oluştur** seçeneğini seçin.
4. İşlem tamamlandığında, çalışma dizininde `.obf` dosyasına sahip olacaksınız.

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-create-vector-maps.png').default} alt="Vektör haritaları oluştur" />

Vektör haritaların nasıl oluşturulacağına dair daha fazla parametre `utilities.sh` kabuğunda belirtilebilir.

## Vektör haritalar (kabuk betiği) {#vector-maps-shell-script}

Geliştiriciler tarafından kullanılan haritaları oluşturmanın en tipik ve en güçlü yolu, OsmAndMapCreator ile birlikte paketlenmiş `utilities.sh` kabuk betiğidir. Ayrıca, temel harita veya bölge adları ve sınırları (regions.ocbf) içeren harita gibi bazı özel haritaları oluşturmak için birçok başka yardımcı yöntem de içerir.

Örnek betik:
```
wget -N http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip
wget  https://creator.osmand.net/osm-extract/albania_europe/albania_europe.pbf
unzip OsmAndMapCreator-main.zip -d OsmAndMapCreator
OsmAndMapCreator/utilities.sh generate-poi albania_europe.pbf --chars-build-poi-nameindex=3
```

Oluşturma betiği, aynı anda işlenecek yalnızca 1 OSM dosyası (.pbf, .osm.gz, osm.bz2, .osm) ve `--xxxxxx` olarak belirtilen birçok isteğe bağlı parametre alır.

| Ana komut | Açıklama |
|---|---|
| `generate-obf` | Harita, adres, ilgi noktası, ulaşım, yönlendirme bilgilerini içeren tam obf oluşturur |
| `generate-obf-no-address` | Tam obf oluşturur ancak adres bilgisi olmadan |
| `generate-address` | Yalnızca adres bilgisi içeren harita oluşturur |
| `generate-poi` | Yalnızca ilgi noktası bilgisi içeren harita oluşturur |
| `generate-map` | Yalnızca harita oluşturma bilgisi içeren harita oluşturur |
| `generate-roads` | Yalnızca yönlendirme bilgisi içeren harita oluşturur |

Tüm ek parametreler, düzgün bir şekilde belgelenmemiş olmaları durumunda kodda bulunabilir [Ana Yardımcı Programlar](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/MainUtilities.java#L219). Tüm parametreler isteğe bağlıdır!

| Parametreler | Açıklama |
|---|---|
| `--add-region-tags` | Harita oluşturma sürecini yavaşlatır, her yola işlendiği bölge adını içeren bir etiket ekler. Bu sadece dünya çapında temel harita veya çok uluslu bölgeleri işlerken gereklidir, diğer tüm durumlarda dosyanız için uygun bir ada sahip olmak daha kolaydır, yani almanya_..., us_.... Bu parametreniz yoksa ve bu parametreyi eklemezseniz, OsmAnd'da yerelleştirilmemiş yol / toplu taşıma rotası rozetleri görmeniz olasıdır. |
| `--keep-only-sea-objects` | Okyanus / deniz parçası olmayan nesneleri kaldırır, deniz haritası üretmek için kullanılır |
| `--ram-process` | Oluşturmanın disk yerine RAM SQlite DB kullanılarak yapılacağını belirtir - [daha fazla bilgi](#ram-to-process-maps). |
| `--srtm=<KLASÖR>` | TIF-DEM görüntülerinin bulunduğu klasörü belirtir, böylece yükseklik ve eğim bilgileri yollara kodlanır |
| `--rendering-types=<DOSYA>` | Kuralları ve OBF'ye kodlanması gereken OSM etiketlerini içeren rendering_types.xml konumu - [daha fazla bilgi](#custom-vector-map-tags). |
| `--poi-types=<DOSYA>` | POI için OBF'ye kodlanması gereken kuralları ve OSM etiketlerini içeren poi_types.xml konumu - [daha fazla bilgi](#custom-vector-map-tags). |
| `--extra-relations=<DOSYA>` | Etiketleri yollara yayılması gereken Düşük Emisyon Bölgeleri gibi çokgenleri içeren OSM dosyası. |

**Not**: Batch.xml ile harita oluşturmak kullanımdan kaldırılmıştır, lütfen yukarıda belirtilen kabuk yöntemlerini kullanın ve standart kabuk betiği yeteneklerini kullanarak indirmeler / döngülerle birleştirin.

### Haritaları işlemek için RAM {#ram-to-process-maps}

Harita oluşturma, bellek yoğun ve G/Ç yoğun bir işlemdir. Başka bir deyişle: çok uzun sürer ve bellek yetersizliği yaşanabilir! Lütfen önce küçük haritalarda oluşturmayı kontrol edin.
JVM'ye daha fazla bellek vermek için env JAVA_OPTS değişkenini bildirebilirsiniz.
```
export JAVA_OPTS="-Xms256M -Xmx6400M"
OsmAndMapCreator/utilities.sh generate-obf ....
```

Performansı artırmak için neler yapabilirsiniz:

- SSD diskler kullanın.
- Birden fazla disk kullanın.
- "Bellek içi" işlemeyi kullanın.
Disk alanı kullanmaktan kaçınmak ve işlemi hızlandırmak için yalnızca RAM kullanmak istiyorsanız `--ram-process` parametresini belirtin. Bu "bellek içi" işlem, harita oluşturmayı %10-50 oranında hızlandıracaktır, ancak çok fazla bellek gerektirir. %10 ila %50, harita boyutuna bağlıdır. Daha küçük haritalar, bellek içi işlemden daha az fayda sağlar çünkü ilk okuma ve son harita yazma için disk erişimi daha büyük bir rol oynarken, daha büyük haritalar daha fazla "hesaplama" gerektirir.

Normal "disk üzerinde" işlemede, *.osm* veya *.osm.pbf* dosyanızdan bir *nodes.tmp.odb* dosyası oluşturulur. Bu *nodes.tmp.odb* dosyası bir sqlite veritabanı dosyasıdır ve [geofabrik.de](http://download.geofabrik.de/) adresinden indirdiğiniz orijinal *.osm.pbf* dosyasından yaklaşık 15 ila 25 kat daha büyüktür. Yani orijinal *.osm.pbf* dosyanız 300MB ise, *nodes.tmp.odb* dosyanız 5GB ila 6GB olacaktır! Daha küçük haritaların yaklaşık 15 kat faktöründe olacağını, büyük haritaların (>350MB) ise 20x ila 25X alan artışına yol açacağını unutmayın.

"Bellek içi" işlemle bu *nodes.tmp.odb* dosyası çalışma belleğinizde oluşturulacaktır. "nodes.tmp.odb'nin boyutu" + %20-25'e ihtiyacınız olacaktır. Lütfen `-Xmx` parametresini artırmanıza gerek olmadığını unutmayın çünkü bellekteki SQLite JVM belleğini işgal etmeyecek ve yalnızca yerel işletim belleğini kullanacaktır.

Örnek: 250MB'lık bir *.osm.pbf* için ~4.5GB'lık bir *nodes.tmp.odb* dosyası oluşturulacaktır.

### Özel vektör harita (etiketler) {#custom-vector-map-tags}

OsmAnd oluşturma ve POI araması, [OBF'ye](../osmand-file-formats/osmand-obf.md) yazılan bilgilere dayanır. Diğer OSM formatlarından farklı bir yapıya sahiptir ve mobil kullanım için optimize edilmiştir. İçeriği [İkili Denetleyici](../map-creation/how-to-inspect-an-obf.md) kullanarak inceleyebilirsiniz. OBF dosyasının en önemli 3 bölümü şunlardır:

- Harita Oluşturma için kullanılan **Harita bölümü**, [Oluşturma türleri](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml) tarafından tanımlanır.
- POI arama ve Nesne bilgileri için kullanılan **POI bölümü**, [POI türleri](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/poi_types.xml) tarafından tanımlanır.
- Yönlendirme için kullanılan **Yönlendirme bölümü**, [Yönlendirme türleri](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml) tarafından tanımlanır - oluşturma türleri ile aynı dosya ancak kendi `<category name="routing"> - routing_type` bölümü vardır.

`rendering_types.xml` ve `poi_types.xml`, OsmAndMapCreator UI ayarlarında veya `utilities.sh generate-obf` (OsmAndMapCreator ile paketlenmiş) için komut satırı parametreleri `--rendering-types=<path>`, `--poi-types==<path>` olarak harita oluşturma sürecinde geçersiz kılınabilir.

- Ana harita nesne türü (`<type tag="abandoned:highway" value="track" minzoom="13"/>`) OSM varlığı (düğüm veya yol veya çokgen) başına kaydedilir. 1 varlık başına birçok ana tür kaydedilebilir (yani yol + tramvay + otobüs güzergahı), `order` etiketi varlık içindeki türleri sıralayacaktır.
- Ek harita nesne türü (`<type tag="service" value="driveway" minzoom="13" additional="true"/>`) OSM varlığına eklenen ek bilgidir, bu nedenle OSM varlığı ana türle kaydedilmezse OBF içinde saklanmayacaktır. Genellikle renk, pürüzsüzlük gibi ekstra özellikleri görüntülemek için bilgi depolar.
- Metin harita nesne türü (`<type tag="int_ref" additional="text" minzoom="1" order="32"/>`), nesne hakkında metin bilgisi depolar, böylece daha sonra haritada görüntülenebilir.
- `entity_convert`, basit etiket dönüştürme betiklerini temsil eder (`<entity_convert pattern="tag_transform" from_tag="bridge" if_tag1="highway" if_value1="proposed" routing="no"/>`). Genellikle etiketleri belirli türlerde birleştirmek için kullanılır, böylece özel oluşturma stiliyle görüntülemek daha kolay olur. Ayrıca bölgeye özgü etiket dönüşümüne izin verir ve ülkeye göre farklı özelliklerin oluşturulmasına olanak tanır.
- İlişki etiketi yayılımı. OsmAnd ilişki nesnelerini indekslemez (çokgenler hariç - alan nesneleri olarak saklanır) ancak etiketleri ilişkiden üyelere yaymaya, itmeye izin verir. Açıkçası 1 üyenin birden fazla üst ilişkisi olabilir ve etiket çakışmaları mümkündür. OsmAnd çakışmalarla başa çıkmak için 3 yolu destekler:
  - tüm etiketleri uzun virgülle ayrılmış bir satır olarak birleştirin (yolda otobüs güzergahı adlarını uzun bir dize olarak oluşturmak için iyi - `nameTags`, `namePrefix`).
  - değerleri sıralayın ve en yüksek değeri tutun (yerel ve uluslararası güzergahları oluşturmak için iyi - `relationGroupSort`, `additionalTags`, `additionalNamePrefix`).
  - her ilişki için benzersiz etiketler oluşturur (şimdilik kullanılmaz ancak bilgiyi kayıpsız depolar - `relationGroupNameTags`, `relationGroupAdditionalTags`, `relationGroupPrefix`). **Daha fazla bilgi** [Oluşturma türlerinde](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml) bulabilirsiniz.

**Daha fazla oku**: genellikle özel vektör haritalar [özel oluşturma stiliyle](../osmand-file-formats/osmand-rendering-style.md) birleştirilir.

## Raster haritalar (gelişmiş) {#raster-maps-advanced}

OSM haritalar için büyük bir veritabanıdır, ancak her zaman ihtiyacınız olan bilgiyi (örneğin, çöller hakkında) içermez. Bazen ihtiyacınız olan bilgiyi kağıt haritalar veya uydu görüntüleri gibi diğer kaynaklardan alabilirsiniz.

Herhangi bir kaynak haritayı (görüntü formatındaki haritalar, pdf formatı, raster çevrimiçi haritalar) OsmAnd çevrimiçi haritalarına hazırlama, dönüştürme, kalibre etme için özel programlar vardır.

Aşağıda bunlardan bazıları hakkında.

### MOBAC {#mobac}

Mobile Atlas Creator (MOBAC), çevrimdışı atlaslar oluşturmak için açık kaynaklı (GPL) bir programdır. Mobile Atlas Creator, OpenStreetMap ve diğer harita sağlayıcıları gibi çok sayıda farklı çevrimiçi haritayı çevrimdışı atlas oluşturmak için kaynak olarak kullanabilir.

Sadece programı [indirin](https://mobac.sourceforge.io/) ve çalıştırın.

Format seçme diyalogunda *OsmAnd SQLite* veya *OsmAnd döşeme depolaması*nı seçin. SQLite, seçilen alanı içeren tek bir dosyadır, döşemeler ise cihazınızda toplanan haritanın ayrı parçalarıdır. SQLite genellikle daha kullanışlıdır çünkü tek bir yerde depolanır ve daha az depolama alanı kaplar.

Harita kaynağını, yakınlaştırma seviyelerini ve diğer özellikleri seçin. Bir alan seçin, ardından *Seçim* -> *Seçim ekle* menüsünü seçin.

Bundan sonra, SQLite dosyanızı oluşturabilirsiniz: 'Atlas' -> 'Atlas Oluştur'.

### MAPC2MAPC {#mapc2mapc}

[MAPC2MAPC](https://www.the-thorns.org.uk/mapping/), dijital haritaları manipüle etmek ve farklı platformlar ve yazılımlar arasında dönüştürmek için bir Windows programıdır.

Örneğin, herhangi bir görüntü formatını ve pdf haritalarını OsmAnd çevrimiçi haritasına dönüştürebilir ve kalibre edebilirsiniz.

Programın kullanımına ilişkin [Video eğitimi](https://www.youtube.com/watch?v=Y_fekLfcUOc).

### SASPlanet {#sasplanet}

SASPlanet, çeşitli çevrimiçi hizmetlerden Dünya'nın haritalarını ve uydu görüntülerini OsmAnd çevrimiçi haritasına görüntüleme ve indirme yeteneğine sahip ücretsiz, açık kaynaklı bir navigasyon yazılımıdır.

Programı [indirin](http://www.sasgis.org/download/), [İngilizce kılavuz](https://www.evernote.com/shard/s100/client/snv?noteGuid=e659886a-096c-46b4-8280-b57b77373847&noteKey=dac8148d9a74ed77&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs100%2Fsh%2Fe659886a-096c-46b4-8280-b57b77373847%2Fdac8148d9a74ed77&title=How%2Bto%2Buse%2BSAS.Planet.%2BEnglish%2Bguideline).

### Coğrafi Konumlu PDF veya TIFF {#geolocated-pdf-or-tiff}

Coğrafi konumlu pdf/tif/tiff dosyalarını Windows'ta [OsmAnd SQLitedb](../osmand-file-formats/osmand-sqlite.md) dosyalarına nasıl dönüştüreceğiniz.
Georeferanslama tif/tiff ve pdf dosyaları QGIS'te oldukça basit bir şekilde yapılabilir.

1. **OSGeo4W'yi kurun ve çalıştırın**

[OSGeo4W](https://trac.osgeo.org/osgeo4w/), Windows için geniş bir açık kaynaklı coğrafi uzamsal yazılım setinin ikili dağıtımıdır. QGIS, GDAL/OGR, GRASS ve diğer birçok paketi (150'den fazla) içerir. [OSGeo4W](https://trac.osgeo.org/osgeo4w/) ağ yükleyicisini indirin ve çalıştırın.

Şimdi, Başlat menüsünden OSGeo4W Kabuğunu çalıştırın. Varsayılan _C:\OSGeo4W_ dizininde başlamalıdır. Ya çalışma klasörünüze gidin (ya da bu amaçla _C:\OSGeo4W_ kullanabilirsiniz).

2. **tif/pdf'yi mbtiles'a dönüştürün**

_tif/pdf_ dosyasını _mbtiles_ dosyasına dönüştürmek için (gerektiğinde _tif/pdf_ ve _mbtiles_ dosya adlarını değiştirerek) şunu çalıştırın:

&nbsp;<i>gdal_translate -co "ZLEVEL=9" -of mbtiles map_1.tif map_1.mbtiles --config gdal_pdf_dpi 600</i>&nbsp;

&nbsp;<i>gdaladdo -r nearest map_1.mbtiles</i>&nbsp;

İlk komut, _GDAL_'ın görüntü çözünürlüğüne göre oluşturabileceği maksimum yakınlaştırmayı bulmasını sağlar. Ve _tif/pdf_ dosyasını belirtilen DPI ile _mbtiles_'a dönüştürür. Bu ayarla oynamaktan çekinmeyin, ancak dikkatli olun çünkü yüksek DPI değerleri dönüştürme sürecini çok uzun ve ortaya çıkan dosya boyutunu çok büyük yapacaktır.

İkinci komut, _GDAL_'ın zaten var olan maksimum yakınlaştırma seviyesine göre daha düşük yakınlaştırma seviyelerini bulmasını ve oluşturmasını sağlar. Bu iki komutun tamamlanması biraz zaman alması alışılmadık bir durum değildir.

3. **Python'ı Microsoft Store'dan yükleyin**

Muhtemelen en kolay yol [Microsoft Store](https://apps.microsoft.com/detail/9nj46sx7x90p)'a gitmektir.

Bir sonraki adımda Python betiğini çalıştırmaya çalışırken şu hata oluşursa:

_Traceback (en son çağrı son):_

_Dosya ```<console>```, satır 1, içinde ```<module>```_

_ImportError: PIL adlı modül yok_

Ardından PowerShell'de şu komutu çalıştırın:

_pip install Pillow_

4. **mbtiles formatını sqlitedb'ye dönüştürün (OsmAnd ve RMaps için uygun)**

_mbtiles2osmand.py_ Python betiğini [GitHub](https://github.com/tarwirdur/mbtiles2osmand) adresinde bulacaksınız. Çalışma klasörünüze indirin ve Komut İstemi veya PowerShell'i çalıştırın.

**Kullanım:**

&nbsp;<i>python3_ mbtiles2osmand.py [-h] [-f] [--jpg JPEG_QUALITY] input output</i>&nbsp;

&nbsp;<u>Konumsal argümanlar:</u>&nbsp;

**input**&nbsp;&nbsp;&nbsp;&nbsp; giriş dosyası

**output**&nbsp;&nbsp;&nbsp;&nbsp; çıkış dosyası

&nbsp;<u>İsteğe bağlı argümanlar:</u>&nbsp;

**-h, --help** &nbsp;&nbsp;&nbsp;&nbsp;bu yardım mesajını göster ve çık

**-f, -force** &nbsp;&nbsp;&nbsp;&nbsp;çıkış dosyası varsa üzerine yaz

**--jpg JPEG_QUALITY** &nbsp;&nbsp;&nbsp;&nbsp;döşemeleri belirtilen kalitede JPEG'e dönüştür

**Örnekler:**

Basit:

&nbsp;<i>python3 mbtiles2osmand.py _input.mbtiles output.sqlitedb_</i>&nbsp;

Döşemeleri sıkıştırma ile jpeg'e dönüştürme:

&nbsp;<i>python3 mbtiles2osmand.py _--jpg 75 input.mbtiles output.sqlitedb_</i>&nbsp;

5. **.sqlitedb dosyasını OsmAnd'a kopyalayın**

Şimdi çalışma klasörünüzde hazır bir .sqlitedb dosyanız olmalı. Bunu uygun OsmAnd klasörüne kopyalayın ve ana, alt katman veya üst katman olarak kullanın. Daha fazla ayrıntı için [Kullanıcı kılavuzuna](../../user/map/raster-maps.md) bakın. Tamamlandı!

6. **(İSTEĞE BAĞLI) Birden fazla osmand dosyasını tek bir dosyada birleştirin**

Gerekiyorsa, unite_osmand.py betik dosyasını [GitHub](https://github.com/tarwirdur/mbtiles2osmand) adresinde bulabilirsiniz. Yine - çalışma klasörünüze indirin ve Komut İstemi veya PowerShell'i çalıştırın.

**Kullanım:**

&nbsp;<i>python3 unite_osmand.py [-h] [-f] input [input ...] output</i>&nbsp;

<u>Konumsal argümanlar:</u>

**input** &nbsp;&nbsp;&nbsp;&nbsp; giriş dosyaları. Birden fazla dosya aynı koordinatlara sahip döşeme içeriyorsa, ilk (argüman listesinden) dosyadan döşeme kullanılacaktır.

**output** &nbsp;&nbsp;&nbsp;&nbsp;çıkış dosyası

<u>İsteğe bağlı argümanlar:</u>

**-h, --help** &nbsp;&nbsp;&nbsp;&nbsp;bu yardım mesajını göster ve çık

**-f, -force** &nbsp;&nbsp;&nbsp;&nbsp;çıkış dosyası varsa üzerine yaz

7. **EKSTRA: Tek Bir GeoPDF'yi GeoTIFF'e Dönüştürme**

Herhangi bir nedenle, tek bir _geopdf_'yi _geotiff_'e dönüştürmek isterseniz, _gdal_translate_ komutunu kullanın ve < > ile belirtilen yerlere kendi parametrelerinizi girin. _gdal_translate_'i isteğe bağlı parametrelerle veya parametresiz kullanabilirsiniz. İşlem uzun sürebilir ve ortaya çıkan tiff, özellikle orto görüntüleme ve gölgeli araziyi içerdiğinde gerçekten büyük olabilir. Bu nedenle, bazı PDF katmanlarını hariç tutmak iyi bir fikir olabilir (ikinci örneğe bakın).

**Kullanım:**

&nbsp;<i>gdal_translate ```<GeoPDF dosya adı> <Çıkış Geotiff Dosya Adı>``` -of gtiff --config
gdal_pdf_layers_off “```<pdf katman adı 1>,<pdf katman adı 2>,<pdf katman adı 3>```” --config gdal_pdf_dpi ```<çıktı dpi>``` </i>&nbsp;

**Örnekler:**

Tüm katmanlarıyla pdf'yi varsayılan DPI'da bir geotiff'e dönüştürme:

&nbsp;<i>gdal_translate geo_sample_map.pdf output_sample_map.tif -of gtiff</i>&nbsp;

_gdal_pdf_layers_off_ parametresi ve ardından virgülle ayrılmış katman adları listesiyle dönüştürmeden birkaç katmanı hariç tutma. Çıkış dosyası, belirtilen 600 DPI'ye sahip bir geotiff'tir:

&nbsp;<i>gdal_translate geo_sample_map.pdf output_sample_map.tif -of gtiff --config gdal_pdf_layers_off “Map_Collar, Map_Frame.Projections_and_Grids, Map_Frame.Terrain.Shaded_Relief, Images.Orthoimage” --config gdal_pdf_dpi 600</i>&nbsp;

8. **Kaynaklar:**

- [Gdal2mbtiles](https://github.com/tarwirdur/mbtiles2osmandhttps://gist.github.com/jbaranski/0073f7b98bdf1f64f49988853daed67bhttps://github.com/ecometrica/gdal2mbtiles) (sadece referans için),
- [GDAL kullanarak geopdf'yi geotiff'e dönüştürme](https://opengislab.com/blog/2016/4/2/usgs-geopdf-to-geotif-with-gdal),
- Ayrıca bkz. [Linux'ta OsmAnd için Katman Haritaları Oluşturma](https://shallowsky.com/blog/mapping/osmand-making-overlay-maps.html).

## Sık Karşılaşılan Sorunlar {#common-issues}

### Bellek Yetersizliği Hatası sorunu {#outofmemoryerror-issue}

**Sorun**: OsmAndMapCreator "OutOfMemoryError" mesajıyla başarısız oluyor.

OsmAndMapCreator ile işlemeye çalıştığınız dosya çok büyük. Ya daha küçük bir dosyayı işlemeyi deneyin ya da .sh veya .bat dosyasında OsmAndMapCreator için belleği artırın. `-Xmx` parametresi, programın ne kadar bellek tüketebileceğini belirtir. Ayarlar 64 bit (1.5 GB'tan fazla) ve 32 bit (maksimum 1.5 GB civarı) makineler için farklı olabilir.

### Boş dosya sorunu {#empty-file-issue}

**Sorun**: Yalnızca bir POI dizini içeren bir .osm dosyasını .obf'ye dönüştürdükten sonra, orijinal .osm dosyası POI'leri içermesine rağmen .obf boş.

OsmAndMapCreator'ın bir POI'yi tanıması için kritik bir etiketin eksik olması olabilir, örneğin osm'yi Garmin gibi başka bir kaynaktan dönüştürdüğünüzde. OSM dosyasındaki bir nokta şöyle görünüyorsa:
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
  </node>
```
ek bir 'amenity' etiketi içerecek şekilde değiştirin, örneğin:
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
    <tag k='amenity' v='point' />
  </node>
```

Ardından dosyayı OsmAndMapCreator kullanarak dönüştürün. OSM sitesinde hangi etiketlerin iyi olduğunu kontrol edebilir ve [OsmAnd](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/poi_types.xml) tarafından hangi etiketlerin desteklendiğini de doğrulayabilirsiniz.