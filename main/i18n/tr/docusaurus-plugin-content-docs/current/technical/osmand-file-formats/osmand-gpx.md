---
source-hash: cd85b9f943b1bca0b2953a02a698885ade5850557c59dcce8a6611b292a2962a
sidebar_position: 2
---

# OsmAnd GPX {#osmand-gpx}

## Giriş {#introduction}

GPX (GPS Exchange Format), izler, rotalar ve ara noktalar dahil olmak üzere GPS verilerini depolamak için yaygın olarak kullanılan XML tabanlı bir standarttır. OsmAnd, gezinme için GPS verilerini içe aktarma, dışa aktarma ve özelleştirme için GPX formatını destekleyerek hem başlangıç hem de ileri düzey kullanıcıların deneyimlerini optimize etmelerini sağlar.

#### OsmAnd GPX'i Benzersiz Kılan Nedir? {#what-makes-osmand-gpx-unique}

OsmAnd, kendi özel `osmand:` XML ad alanını tanıtarak standart GPX 1.1 formatını genişletir. Bu ad alanı, aşağıdakiler gibi ek verilerin depolanmasını sağlar:

- İz görsel ayarları (renk, genişlik, oklar).
- Ara nokta gruplama ve simgeler.
- Hesaplanan rotalar ve aktivite türleri dahil olmak üzere ayrıntılı rota özellikleri.

#### Bu Kılavuzda Neler Öğreneceksiniz? {#what-will-you-learn-in-this-guide}

Bu makale, OsmAnd'daki GPX dosya yapısı ve özelliklerine kapsamlı bir genel bakış sunmaktadır. Şunları öğreneceksiniz:

1. GPX etiketlerini kullanarak izleri ve ara noktaları nasıl özelleştireceğiniz.
2. HTML açıklamaları, sensör verileri ve aktivite türleri gibi gelişmiş özellikler.
3. Hesaplanan rotaları nasıl dışa aktaracağınız ve tam işlevselliklerini nasıl koruyacağınız.
4. Optimize edilmiş depolama ve gelişmiş arama yetenekleri için GPX dosyalarını OBF formatına dönüştürme.

#### GPX Yapısına Genel Bakış {#gpx-structure-overview}

OsmAnd'daki GPX dosyaları, verileri hiyerarşik olarak aşağıdaki öğelere göre düzenler:

- `<gpx>` - dosyanın kök öğesi.
- `<trk>` - şunları içeren izleri temsil eder:
  - `<trkseg>` - daha sonra `<trkpt>` (iz noktaları) olarak ayrılan iz segmentleri.
- `<rte>` - ara noktalar ve anahtar noktalar dahil olmak üzere rotaları temsil eder.
- `<wpt>` - bireysel ara noktaları temsil eder.


## İz Özelleştirme {#track-customization}

### İz Görünüm Parametreleri {#track-appearance-parameters}

Bu bölüm, OsmAnd'ın harita üzerinde izleri nasıl görüntülediğini ve görünümlerini ayarlamak için mevcut özelleştirme seçeneklerini açıklar. Aşağıda açıklanan parametreler `<gpx>` etiketi içinde uygulanır ve bir GPX dosyasında bulunan tüm izleri etkiler.

| Etiket Adı | Açıklama / Değerler |
|:----------------------------------------|:---------|
| `<color>` | - Harita üzerindeki iz çizgisinin rengini tanımlar. <br/> - *Dize:* HEX renk kodu `#RRGGBB` veya `#AARRGGBB` |
| `<width>` | - İz çizgisinin genişliğini belirtir. <br/> - *Dize:* `“thin”`, `“medium"`, `“bold”` (`“currentTrackWidth”` özniteliği tarafından tanımlanır) veya tamsayı (1-24) |
| `<show_arrows>` | - İz boyunca yön oklarını etkinleştirir veya devre dışı bırakır. <br/> - *Bool:* `"true"` / `"false"` |
| `<show_start_finish>` | - İzin başlangıcı ve sonu için işaretçileri gösterir veya gizler. <br/> - *Bool:* `"true"` / `"false"` |
| `<split_type>` | - İz için segmentasyon türünü belirtir. <br/> - *Dize:* `"no_split"`, `"distance"`, `"time"` |
| `<split_interval>` | - Seçilen türe göre iz segmentasyonu için aralığı ayarlar. <br/> - *Çift:* Tamsayı (`"distance"` için metre, `"time"` için saniye) |
| `<line_3d_visualization_by_type>` | - İz için 3D görselleştirme türünü belirtir. <br/> - *Dize:* `"none"`, `"altitude"`, `"shared_string_speed"`, `"map_widget_ant_heart_rate"`, `"map_widget_ant_bicycle_cadence"`, `"map_widget_ant_bicycle_power"`, `"shared_string_temperature"`, `"shared_string_speed"`, `"fixed_height"` |
| `<line_3d_visualization_wall_color_type>` | - 3D görselleştirme için duvar rengi türünü tanımlar. <br/> - *Dize:* `"none"`, `"solid"`, `"downward_gradient"`, `"upward_gradient"`, `"altitude"`, `"slope"`, `"speed"` |
| `<line_3d_visualization_position_type>` | - 3D görselleştirmenin ize göre konumunu ayarlar. <br/> - *Dize:* `"top"`, `"bottom"`, `"top_bottom"`|
| `<vertical_exaggeration_scale>` | - `line_3d_visualization_by_type` özniteliğinin değerini ölçeklendirmek için çarpan. <br/> - *Float:* Varsayılan: 1.0 |
| `<elevation_meters>` | - `<line_3d_visualization_by_type>` içinde `"fixed_height"` için metre cinsinden sabit bir yükseltiyi belirtir. <br/> - *Float:* Varsayılan: `1000` |
| `<coloring_type>` | - İz için renklendirme yöntemini belirler. <br/> - *Dize:* `"solid"`, `"speed"`, `"altitude"`, `"slope"`, `"routeInfo_roadClass`, `"routeInfo_surface"`, `"routeInfo_smoothness"` |
| `<color_palette>` | - İz için renk şemasını belirtir. <br/> - *Dize:* `"default"` / [kullanıcı tanımlı şemalar](/docs/user/personal/color-palette-schemes) |

***Örnek:***

```xml
<gpx version="1.1" creator="OsmAnd~ 5.0.0" xmlns="https://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net/docs/technical/osmand-file-formats/osmand-gpx" xmlns:gpxtpx="https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd" xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://www.topografix.com/GPX/1/1 https://www.topografix.com/GPX/1/1/gpx.xsd">
...
  <extensions>
    <osmand:color>#4e4eff</osmand:color>
    <osmand:width>bold</osmand:width>
    <osmand:show_arrows>true</osmand:show_arrows>
    <osmand:split_type>distance</osmand:split_type>
    <osmand:split_interval>2000.0</osmand:split_interval>
  </extensions>
</gpx>
```

### Etiket 'coloring_type' {#tag-coloringtype}

OsmAnd'daki `<coloring_type>` etiketi, kullanıcıların iz renklendirmesini belirli veri özelliklerine göre özelleştirmesine olanak tanıyarak, iz boyunca temel bilgileri yorumlamak için görsel bir yol sağlar.

| Tür | Açıklama | Kullanım Durumu |
|:-----------------------|:--------|:--------|
| `<solid>` | Tüm iz, `color` etiketiyle belirtilen tek, düz bir renkle görüntülenir. | Net görünürlük için tek tip bir renk gerektiğinde kullanın. |
| `<speed>` | İz, her iz noktasındaki (`<trkpt>`) hız değerlerine göre bir gradyanla renklendirilir. Daha yüksek hızlar farklı renklerle temsil edilir. | Hızdaki değişiklikleri görselleştirmek için bisiklet veya araba sürme gibi aktiviteler için idealdir. |
| `<altitude>` | İz, her `<trkpt>`'deki yükseklik verilerine göre renklendirilir. Farklı yükseklik aralıklarını gösteren bir gradyan uygulanır. | Yükseklik değişikliklerini vurgulamak için yürüyüş veya dağ rotaları için kullanışlıdır. |
| `<slope>` | İz, ardışık iz noktaları arasındaki eğime/inişe göre renklendirilir. Pozitif gradyanlar yokuş yukarı eğimleri, negatif gradyanlar ise yokuş aşağı eğimleri gösterir. | İz zorluğunu analiz eden bisikletçiler veya yürüyüşçüler için uygundur. |
| `<routeInfo_roadClass>` | İz segmentlerini OpenStreetMap (OSM) yol sınıflandırmasına (örn. otoyol, yerleşim yolu) göre renklendirir. | Bir rotayı takip ederken farklı yol türleri arasında ayrım yapmaya yardımcı olur. |
| `<routeInfo_surface>` | İz segmentlerini OSM yüzey tipine (örn. asfalt, çakıl, toprak) göre renklendirir. | Arazi sürüşü gibi aktiviteler sırasında iz koşullarını belirlemek için kullanışlıdır. |
| `<routeInfo_smoothness>` | İzleri OSM düzgünlük derecelendirmelerine göre renklendirir, yolun pürüzlülüğünü veya düzgünlüğünü gösterir (örn. mükemmel, kötü). | Belirli araçlar için iz gezilebilirliğini değerlendirmek için faydalıdır. |

### UI'daki GPX etiketleri {#gpx-tags-in-ui}

İz bağlam menüsünün altında görüntülenen GPX uzantı etiketleri.
Hem `<metadata>` hem de `<gpx>` `<extensions>` listelenir.
Görünüm etiketleri listeden çıkarılır.
OsmAnd Android 5.0'dan beri desteklenmektedir.

## Ara Nokta Özelleştirme {#waypoints-customization}

Bu bölüm, OsmAnd'ın GPX dosyalarındaki ara noktaları simgeler, renkler ve gruplama kullanarak nasıl özelleştirmeye izin verdiğini açıklar.

### Ara Nokta Simgeleri {#waypoint-icons}

Aşağıdaki etiketler, OsmAnd'daki ara nokta simgelerinin görünümünü kontrol eder:

| GPX etiketi | Varsayılan | Amaç |
|:-------------|:----------|:-----------|
| `<icon>` | *(yok)* | Ara nokta için simgeyi belirtir (örn. `historic_castle`). |
| `<color>` | `"red"` | Simgenin rengini bir HEX kodu (örn. `#FF0000`) veya renk adı (örn. `"blue"`) kullanarak ayarlar. |
| `<background>` | `"circle"` | Simgenin arka plan şeklini tanımlar. Olası değerler: `"circle"`, `"square"`, `"octagon"`. |

***Örnek:***

```xml
<wpt lat="52.5163" lon="13.3779">
  <name>Brandenburg Kapısı</name>
  <extensions>
    <osmand:color>#FF5020</osmand:color>
    <osmand:icon>city_gate</osmand:icon>
    <osmand:background>square</osmand:background>
  </extensions>
</wpt>
```

### Ara Nokta Grupları {#waypoint-groups}

OsmAnd'daki ara noktalar, türlerine göre gruplara ayrılabilir. Bu gruplama, kullanıcının birden çok ara noktayı belirli kategoriler altında düzenlemesine olanak tanıyarak netliği ve harita okunabilirliğini artırır.

- **Nokta grubu tanımı.** `<wpt>` öğesinin içindeki `<type>` etiketi, noktanın grubunu belirtir (örn. `"castle"`, `"aqueduct"`).
- **Grup yapılandırması.** `<gpx>` öğesindeki `<osmand:points_groups>` uzantısı, her grup için `name`, `color`, `icon` ve `background` dahil olmak üzere ayarları tanımlar.

***Örnek:***

```xml
<gpx>
  <wpt lat="1.234" lon="5.678">
    <name>Suyu görmek için yukarı bak</name>
    <type>su kemeri</type>
  </wpt>
  <wpt lat="5.678" lon="1.234">
    <name>Hayaletlere dikkat et</name>
    <type>kale</type>
  </wpt>
  <wpt lat="66.666" lon="66.666">
    <name>Beetlejuice'un evi</name>
    <type>kale</type>
  </wpt>
  <extensions>
    <osmand:points_groups>
      <group name="kale" color="#FF0000" icon="historic_castle" background="circle"/>
      <group name="su kemeri" color="#0000FF" icon="bridge_structure_arch" background="circle"/>
    </osmand:points_groups>
  </extensions>
</gpx>
```


## Gelişmiş GPX Özellikleri {#advanced-gpx-features}

### Aktivite Türü {#activity-type}

OsmAnd [sürüm 4.9](/blog/osmand-android-4-9-released/#gpx-track-activities) ile başlayarak, izlerinizi daha fazla analiz ve klasörlerde düzenleme için aktivite türüne göre sınıflandırabilirsiniz.

Desteklenen aktivite türlerinin listesi [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json) dosyasında mevcuttur. Her aktivite, benzersiz `ID`'si ile tanımlanır ve GPX dosyasının `<metadata>` uzantılarında saklanır.


***Örnek:***

```xml
  <metadata>
    <extensions>
      <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
    </extensions>
  </metadata>
```

### Açıklamalarda HTML {#html-in-descriptions}

HTML etiketleri, izler veya ara noktalar için biçimlendirilmiş açıklamalar sağlamak üzere `<metadata>` veya `<wpt>` öğelerindeki `<desc>` etiketleri içinde kullanılabilir.

XML sözdizimiyle çakışmaları önlemek için özel karakterleri aşağıdaki gibi değiştirin:

- `<` *→* `&lt;`
- `>` *→* `&gt;`
- `&` *→* `&amp;`

***Örnek:***

```xml
<metadata>
  <desc>
    &lt;p&gt;
        İlk paragraf &lt;b&gt;kısa&lt;/b&gt; açıklama olarak görüntülenecektir.
        HTML etiketleri kısa açıklamalarda kaldırılır.
    &lt;/p&gt;
    &lt;p&gt;
      &lt;h3&gt;İkinci paragraf&lt;/h3&gt;
        &lt;b&gt;Merhaba dünya!&lt;/b&gt;&lt;br/&gt;
        &lt;img src="..."/&gt;&lt;br/&gt;
        &lt;a href="..."&gt;url&lt;/a&gt;&lt;br/&gt;
        &lt;table&gt; ... &lt;/table&gt;
    &lt;/p&gt;
  </desc>
</metadata>
```

***Önemli notlar:***

- OsmAnd, kısa açıklamalar oluştururken tüm HTML etiketlerini kaldırarak düz metin bırakır.
- Özelleştirme için `<b>`, `<i>`, `<p>`, `<br/>`, `<a>`, `<img>` gibi etiketleri ve daha fazlasını kullanabilirsiniz.


### Bağlantı Etiketi {#link-tag}

OsmAnd GPX dosyalarında meta veriler, yazar bilgileri veya ara noktalarla URL'leri ilişkilendirmek için `<link>` etiketini kullanın. Bu etiket, URL bir görüntü dosyasına işaret ettiğinde bir görüntü de görüntüleyebilir.

***Örnekler (Görüntülü meta veri bağlantısı):***

```xml
<metadata>
  <link href="https://osmand.net/img/logo.png">
    <text>OsmAnd Logosu</text>
  </link>
</metadata>
```

***Örnekler (Görüntülü ara nokta bağlantısı):***

```xml
<wpt lat="52.5163" lon="13.3779">
  <link href="https://osmand.net/img/logo.png" />
</wpt>
```

### Sensör Veri Etiketleri {#sensor-data-tags}

İzlerinizi kalp atış hızı monitörleri veya sıcaklık sensörleri gibi fitness sensörlerinden gelen verilerle zenginleştirebilirsiniz. OsmAnd, bu verileri depolamak için Garmin'in [TrackPointExtension](https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd) şemasını kullanır ve bu da onu **Strava** ve **Garmin Basecamp** gibi platformlarla uyumlu hale getirir.

*Desteklenen Sensör Veri Etiketleri:*

- **hr** - kalp atış hızı (dakikadaki vuruş sayısı).
- **cad** - bisiklet kadansı (dakikadaki devir sayısı).
- **atemp** - ortam sıcaklığı (Celsius cinsinden).
- **power** - bisiklet güç çıkışı (watt cinsinden).

***Örnek:***

```xml
<extensions>
  <gpxtpx:TrackPointExtension>
    <gpxtpx:hr>145</gpxtpx:hr>
    <gpxtpx:cad>80</gpxtpx:cad>
    <gpxtpx:atemp>22</gpxtpx:atemp>
    <gpxtpx:power>250</gpxtpx:power>
  </gpxtpx:TrackPointExtension>
</extensions>
```

### İz Noktası Detayları {#track-point-details}

GPX dosyasındaki her `<trkpt>` (iz noktası), hız, yön ve yükseklik gibi verileri yakalamak için ek öznitelikler içerebilir.

*Desteklenen öznitelikler:*

- **speed** - iz noktasındaki hız (saniyede metre cinsinden).
- **heading** - hareket yönü (0-359 derece).
- **ele** - deniz seviyesinden yükseklik (metre cinsinden).
- **time** - iz noktası için zaman damgası.

***Örnek:***

```xml
  <trkpt lat="52.397799" lon="4.575998">
    <ele>203</ele>
    <time>2019-05-08T10:36:43Z</time>
    <hdop>3</hdop>
    <extensions>
      <heading>273</heading>
      <speed>5.02</speed>
    </extensions>
  </trkpt>
```



## Hesaplanan rota(lar) {#calculated-routes}

**OsmAnd**'da rota hesaplayabilir ve tüm verileri GPX'e kaydedebilirsiniz, böylece daha sonra tüm özellik navigasyonu GPX navigasyonu çalışır gibi kullanılabilir, bu nedenle **OsmAnd** gpx'i rota segmentleri, dönüşler, yol adları, yol türleri, kısıtlamalar vb. içerecektir. Rota, ilgili çevrimdışı haritaların yokluğunda bile, sanki yeni inşa edilmiş gibi tamamen geri yüklenebilir.

Bir gpx dosyası birkaç rota içerebilir. Her biri **trkseg** / **extensions** altında belirli bir segmentte yer alır. Bir gpx dosyası, oluşturulmuş bir rotayı dışa aktarırken veya [**Rota planla**](../../user/plan-route/create-route.md) işlevselliği aracılığıyla birkaç ayrı segmentten oluşan bir izi kaydederken bu biçimde kaydedilir.

[**Rota planla**](../../user/plan-route/create-route.md) ayrıca, rota anahtar noktalarını (**rtept**) içeren gpx dosyasına bir (veya birkaç, içerdiği ayrı segment/iz sayısına göre) **rte** bloğu ekler.

#### Gpx yapısı: {#gpx-structure}

```xml
<trk>
  <trkseg>
    // Segment noktalarının listesi. Noktaların sırası, rota segmentlerinin sırasına ve uzunluğuna karşılık gelir (<route><segment length="x" ... />).
    // "length" özniteliğinin değeri, rotanın bu segmentindeki nokta sayısına karşılık gelir.
    <trkpt ... ></trkpt>
    <extensions>
      // Rota segmentlerinin listesi
      <route>
        <segment ... />
      </route>
      // Rotaya dahil edilen segmentlerin özellikleri.
      // Bu veriler, bir rotanın ilk yapımı sırasında çevrimdışı haritalardan alınır.
      <types>
        <type ... />
      </types>
    </extensions>
  </trkseg>
</trk>

// Ara rota noktalarının listesi. Birden çok rota varsa, rte listesinin sırası rota segmentlerinin sırasıyla eşleşir.
<rte>
  <rtept ... />
    // "Rota planla" ile oluşturulan rotalar için anahtar noktaların parametreleri kaydedilir.
    // Eğer rtept ilk ve son değilse, ondan önce (aynı idx ile) trkpt aynı verilerle olacaktır.
    <extensions>
      // Sonraki segment için rota profil türü (araba, bisiklet, yaya vb.).
      <profile>...</profile>
      // Bu segment için hesaplanan rotanın ilk noktasına karşılık gelen gpx segmentindeki noktanın indeksi.
      // Eğer rtept ilk ve son değilse, ondan önce (aynı idx ile) trkpt aynı verilerle olacaktır.
      <trkpt_idx>...</trkpt_idx>
    </extensions>
  </rtept>
</rte>
```

#### Önemli özellikler: {#important-properties}

* **trkseg** içindeki ilk **rtept**'nin **trkpt_idx**'i 0'dır. Dolayısıyla, iki **trkseg** varsa, **trkpt_idx** = 0 olan iki **rtept** olacaktır.
* **trkseg** içindeki son **rtept**'nin **trkpt_idx**'i, **trkseg** içindeki **trkpt** sayısı eksi 1'e eşittir. Örneğin, **trkseg** 12 **trkpt**'ye sahipse, son **rtept**'nin **trkpt_idx**'i 11 olmalıdır.
* Komşu rota **segmentleri** çakışır: önceki **segment**in sonu ve sonraki **segment**in başlangıcı aynı **trkpt**'dir.
* Komşu rota **segmentlerinin** çakışmadığı (aynı **trkpt**'yi paylaşmadığı) istisnalar vardır. Bu, rota **segmentleri** "arasında" **rtept** olduğunda meydana gelir. Önceki rota **segment**inin sonu bir **trkpt**, sonraki rota **segment**inin başlangıcı ise başka bir **rtept**'dir. Ancak bu iki **trkpt**, enlem, boylam ve diğer parametreler açısından tamamen eşittir.
* Rota **segment** çakışması, **length** ve **startTrkptIdx** (ikincisi yalnızca insan okuma kolaylığı için kullanılır) aracılığıyla tespit edilebilir:
  - Önceki rota **segment**inin **startTrkptIdx**'i ve **length**'inin toplamı, sonraki rota **segment**inin **startTrkptIdx**'ine eşitse, rota **segmentleri** çakışmaz.
  - Toplam bir eksikse, rota **segmentleri** çakışır.
* Düz rota **segmentleri** olabilir. Bunlar **id="-1"** ile işaretlenir. İki durumda ortaya çıkabilirler:
  - Çok profilli bir rotadır ve kullanıcı düz bir çizgi seçmiştir.
  - Kullanıcı **rtept**'yi en yakın yoldan çok uzağa yerleştirmiştir, bu nedenle osmand **rtept** ile yol arasında düz bir çizgi yapmıştır.
* trkpts = length - (segments - 1) + (rtepts - 2), burada:
  - trkpts - **trkseg** içindeki **trkpt** miktarı
  - length - **trkseg** içindeki rota **segmentlerinin** tüm **length**'lerinin toplamı
  - segments - **trkseg** içindeki rota **segmentlerinin** miktarı
  - rtepts - **trkseg**'e ait **rtept** miktarı

#### Örnek: {#example}

```xml
<gpx version="1.1" creator="OsmAndRouterV2" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name>Cuma 06 Kasım 2020</name>
  </metadata>
  <trk>
    <name>Cuma 06 Kasım 2020</name>
    <trkseg>
      <trkpt lat="52.3639849" lon="4.8900533">
        <ele>0.801</ele>
      </trkpt>
      <trkpt lat="52.3636917" lon="4.8922849">
        <ele>0.998</ele>
      </trkpt>
      <trkpt lat="52.3636885" lon="4.892309">
        <ele>1</ele>
      </trkpt>
      <trkpt lat="52.3636426" lon="4.8922902">
        <ele>0.963</ele>
      </trkpt>
      <trkpt lat="52.363564" lon="4.8922607">
        <ele>0.899</ele>
      </trkpt>

      ....

      <extensions>
        <route>
          <segment id="7372058" length="3" segmentTime="178.44" speed="1.11" turnType="C" types="0,1,2,3,4,5,6" names="57" />
          <segment id="334164679" length="5" segmentTime="86.11" speed="1.11" turnType="TR" turnAngle="91.88" types="7,8,0,9,10,11,12,13,6" pointTypes=";;14,15;16,17,18;" names="58" />
          <segment id="334603581" length="6" segmentTime="75.5" speed="1.11" types="19,20,21,7,8,0,22,9,10,11,12,13,23,6" pointTypes=";14;16,24;16,24;14;" names="58" />
          <segment id="446707354" length="3" segmentTime="8.32" speed="1.11" turnType="TSLL" turnAngle="-25.44" types="19,25,21,7,8,22,9,1,11,12,13,6" names="58" />
          ...
        </route>
        <types>
          <type t="lit" v="yes" />
          <type t="oneway" v="yes" />
          <type t="highway" v="unclassified" />
          <type t="surface" v="paving_stones" />
          <type t="maxspeed" v="30" />
          ...
        </types>
      </extensions>
    </trkseg>
  </trk>

  <rte>
    <rtept lat="52.3639945" lon="4.8900532">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>0</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3612797" lon="4.8911677">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>24</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.356996" lon="4.8912071">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>89</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3542374" lon="4.8947024">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>121</trkpt_idx>
      </extensions>
    </rtept>
  </rte>
</gpx>
```

## OBF'deki GPX Koleksiyonları {#gpx-collections-in-obf}

OsmAnd, birden çok GPX dosyasını tek bir OBF dosyasına dönüştürmenize olanak tanır. Bu, özel harita simgeleri, iz görünümü özelleştirmesi ve arama işlevselliği gibi özellikleri korurken binlerce GPX izini kompakt, optimize edilmiş bir biçimde depolamayı sağlar. Bu, genellikle toplamda 500 bin noktadan fazlasını işleyemeyen yerel büyük GPX dosyalarının sınırını aşar, ancak GPX izlerinin bazı özellikleri OBF dosyasını görüntülerken eksik olabilir.

GPX'i OBF'ye dönüştürme adımları:

- [OsmAnd Web Haritası](https://osmand.net/map) *→ İzler → Bir klasör seçin → *Menü* (⋮) *→ OBF koleksiyonu olarak indir*

- Ortaya çıkan `<.obf>` dosyası OsmAnd'a aktarılabilir (OsmAnd Android 5.0+ gerektirir).


### İz Çizgi Stili {#track-line-style}

Aşağıdaki etiketlerle iz çizgilerini özelleştirin:

| GPX etiketi | Varsayılan | Amaç |
|:--------------------------|:--------|:---------|
| `<name>` | *(yok)* | İz çizgisinin üzerinde görüntülenen ad. |
| `color` | `red` | Birincil renk (HEX veya metin). |
| `colour`, `displaycolor` | *(yok)* | `color`'ı geçersiz kılmanın alternatif yolları. |
| `shield_waycolor` | *(yok)* | Kalkan iz çizgisi `color`'ı için geçersiz kılma. |
| `translucent_line_colors` | `no` | Yarı saydam renkler için `yes` olarak ayarlayın. |
| `width` | `thin` | Çizgi genişliği: `"thin"`, `"medium"`, `"bold"`, `"1-24"` veya `"roadstyle"` |

**Desteklenen renkler:** black, blue, brown, darkyellow, gray, green, lightblue, lightgreen, orange, purple, red, white, yellow.

***Örnek:***

```xml
<gpx>
  <metadata>
    <name>
      Meta Verilerde bulunan iz adı
    </name>
  </metadata>
  <trk>
    ...
  </trk>
  <extensions>
    <osmand:color>yellow</osmand:color>
    <osmand:width>roadstyle</osmand:width>
    <osmand:translucent_line_colors>yes</osmand:translucent_line_colors>
  </extensions>
</gpx>
```

### İz Çizgi Kalkanları {#track-line-shields}

Kalkanlar, iz çizgisi boyunca görüntülenen simgeler veya sembollerdir. OsmAnd, şunları içerebilen [OSMC-symbol-style](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol) kalkanlarını destekler:

- Arka plan simgesi - ana şekil (örn. daire veya kare).
- Ön plan simgeleri - arka planın üzerine katmanlanmış en fazla iki küçük sembol.
- Metin - `shield_text` veya `ref` etiketlerinden türetilen kısa açıklamalar veya tanımlayıcılar.

Hiçbir kalkan özelliği tanımlanmamışsa, OsmAnd iz için otomatik boyutlandırılmış sarı bir kalkan kullanır.

***Kalkanlar için etiketler:***

| GPX etiketi | Amaç |
|:-------------------|:-----------------------------------------------------------------------|
| `shield_bg` | Kalkan için arka plan simgesini tanımlar. |
| `shield_fg` | İlk ön plan simgesini belirtir (örn. bir ok veya nokta). |
| `shield_fg_2` | İkinci ön plan simgesini belirtir (isteğe bağlı). |
| `shield_text` | Kalkanın üzerinde görüntülenecek kısa metni ayarlar (örn. rota referansı). |
| `shield_textcolor` | Kalkan metninin rengini belirler (isteğe bağlı). |
| `shield_waycolor` | Kalkanın çizgisi için standart iz rengini geçersiz kılar (isteğe bağlı). |
| `ref` | `shield_text` sağlanmazsa yedek metin olarak kullanılır. |

***Örnek:***

```xml
<gpx>
  <trk>
    <name>Örnek Rota</name>
  </trk>
  <extensions>
    <osmand:shield_text>ABC</osmand:shield_text>
    <osmand:shield_fg>osmc_red_dot</osmand:shield_fg>
    <osmand:shield_bg>osmc_white_bg</osmand:shield_bg>
    <osmand:shield_waycolor>red</osmand:shield_waycolor>
    <osmand:shield_textcolor>black</osmand:shield_textcolor>
  </extensions>
</gpx>
```

### Ara Nokta Görüntüleme {#waypoints-display}

Ara nokta simgeleri aşağıdaki etiketlerle özelleştirilebilir:

| GPX etiketi | Varsayılan | Amaç |
|:-------------|:---------|:---------------------------------------------------|
| `icon` | *(yok)* | Ara nokta için simgeyi belirtir (standart OsmAnd ara nokta düzenleyici simgelerini kullanır). |
| `color` | `red` | Bir HEX kodu (örn. `#ffaa00`) veya desteklenen bir renk adı (sınırlı seçenekler) kullanarak simge rengini ayarlar. |
| `background` | `circle` | Simgenin şeklini tanımlar. Desteklenen değerler: `circle`, `square`, `octagon`. |

***`background` şekillerinin davranışı:***

- `circle` - simgeyi dairesel bir arka planla görüntüler.
- `square` - simgeyi kare bir arka planla görüntüler, renk belirtilmezse varsayılan olarak kırmızı olur.
- `octagon` - OsmAnd'da dairesel bir arka plan olarak kabul edilir.

**`background=circle` için desteklenen renkler:** blue, gray, green, lightblue, lightgreen, orange, purple, yellow.

***Ek öğelerle geliştirmeler:***

- [HTML kodu](#html-in-descriptions) kullanarak ara noktalara biçimlendirilmiş açıklamalar ekleyebilirsiniz. Bu, stilize edilmiş metin, bağlantılar veya hatta görüntüler eklemenizi sağlar.
- Ara noktalar, [Görüntü olarak Bağlantı](#link-tag) kullanarak bağlantılı görüntüleri görüntüleyebilir.

***Örnek:***

```xml
<wpt lat="3.1415926" lon="42">
  <name>PI</name>
  <extensions>
    <osmand:icon>historic_archaeological_site</osmand:icon>
    <osmand:background>circle</osmand:background>
    <osmand:color>#ffaa00</osmand:color>
  </extensions>
</wpt>
```


### Ad ve Referanslara Göre Arama {#search-by-name-and-refs}

İzler ve ara noktalar, çeşitli GPX etiketleri kullanılarak bulunabilir.

| GPX etiketi | Konum | Amaç |
|:--------------|:-----------------------|:----------------------------------------------------------------------------|
| `<name>` | `<metadata>` | GPX izinin birincil adı. |
| `ref` | GPX `<extensions>` | Genellikle OSM `ref` etiketinden türetilen kısa bir tanımlayıcı. |
| `shield_text` | GPX `<extensions>` | Kalkanlarda görüntülenen metin (ayrıca `ref` ile de kullanılabilir). |
| `name_-_lang` | GPX/WPT `<extensions>` | Yerelleştirilmiş `name:lang` (örn. İngilizce için `name_-_en`, `:` -> `_-_` ile değiştirin) |
| `<name>` | `<wpt>` | Ara noktanın adı. |

***Örnek:***

```xml
<gpx>
  <metadata>
    <name>Xemxija Miras Yolu</name>
  </metadata>
  <extensions>
    <osmand:ref>XHT</osmand:ref>
  </extensions>
  <wpt lat="35.948477" lon="14.3806796">
    <name>Il-Mighba Rumana</name>
    <extensions>
      <osmand:name_-_en>Roma Arı Kovanı</osmand:name_-_en>
    </extensions>
  </wpt>
</gpx>
```

### Aktivite türüne göre arama {#search-by-activity-type}

OsmAnd, OBF dosyalarındaki izleri **Aktivite Grupları** ve **Aktivite Türleri** halinde düzenler. Bu sınıflandırmalar, izleri POI olarak filtrelemenize veya aktivite tabanlı arama filtreleri oluşturmanıza yardımcı olur.

Aktivite türleri nasıl çalışır:

- Aktivite türleri ve grupları, [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json) dosyasındaki `"id"` ve `"tags"` kullanılarak belirlenir.
- OsmAnd, GPX dosyalarındaki aktiviteleri sınıflandırmak için `osmand:activity` veya `osmand:route` etiketlerini kullanır.


| GPX etiketi | Konum | Amaç |
|:------------------|:---------|:-------------------------------------------------|
| `osmand:activity` | `<metadata>` | Aktivite türünü (ID) depolamak için ana OsmAnd etiketi. |
| `osmand:route` | GPX `<extensions>` | Aktivite türünü tanımlamanın alternatif OSM yolu. |


***Aktivite türüne göre izleri düzenleme örnekleri:***

1. Bu, izi **Motosiklet** grubu altında **Arazi Motosikleti (Kir Bisikleti)** türüyle sınıflandıracaktır.

    ```xml
    <metadata>
      <extensions>
        <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
      </extensions>
    </metadata>
    ```

2. Bu, izi **Bisiklet** grubu altında **Dağ Bisikleti** türüyle düzenleyecektir.

    ```xml
    <gpx>
      <extensions>
        <osmand:route>mtb</osmand:route>
      </extensions>
    </gpx>
    ```

### Arama Bilgisi Etiketleri {#search-information-tags}

OBF dosyaları, kritik iz istatistiklerini ve analizlerini otomatik olarak oluşturur ve depolar.

| OBF etiketi | Amaç |
|:--------------------------------------|:----------------------------------------------------------------------|
| `distance` | Tüm iz segmentleri tarafından kat edilen toplam mesafe. |
| `start_ele`, `ele_graph` | GPX'ten yükseklik verileri, kompakt bir ikili diziye sarılmış. |
| `min_ele`, `avg_ele`, `max_ele` | Minimum, ortalama ve maksimum yükseklik analizleri. |
| `diff_ele_up`, `diff_ele_down` | İz boyunca toplam yükseklik kazanımı ve kaybı. |
| `max_speed`, `avg_speed`, `min_speed` | Maksimum, ortalama ve minimum hız dahil olmak üzere iz hızı analizleri. |
| `time_span`, `time_span_no_gaps` | İz için toplam süre, boşluklar hesaba katılarak ve katılmadan. |
| `time_moving`, `time_moving_no_gaps` | Toplam hareket süresi, boşluklar hesaba katılarak ve katılmadan. |

### Dahili Etiketler {#internal-tags}

Bazı GPX etiketleri OBF dosyalarında dolaylı olarak kullanılır veya depolanır. Uygulama ayrıntıları için [OsmGpxWriteContext.java](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/obf/OsmGpxWriteContext.java) adresine bakın.

| OBF etiketi | Amaç |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------|
| `route_id` | GPX dosyası için benzersiz bir tanımlayıcı, Harita ve POI verilerini bağlar (biçim: `/[A-Z]+[0-9]+/` örn. `OSM12345`). |
| `route_type` | `poi/activities.json` dosyasından türetilen aktivite grubu tanımlayıcısı (`id`) |
| `route_activity_type` | `poi/activities.json` dosyasından türetilen aktivite türü (grup içinde) tanımlayıcısı (`id`) |
| `name`, `ref`, `description` | Yerelleştirilebilir ve aranabilir öznitelikler (POI türlerinde `lang="true"`) |
| `filename` | Bu izi oluşturmak için kullanılan orijinal GPX dosyasının adı. |
| `track_color` | `shield_waycolor`, `color`, `colour` veya `displaycolor`'dan türetilen harita bölümü iz rengi |
| `extensions_extra_tags` | `<gpx><extensions>` için JSON formatında rastgele ekstra etiketler. |
| `metadata_extra_tags` | `<metadata><extensions>` için JSON formatında rastgele ekstra etiketler. |
| `wpt_extra_tags` | Ara noktalar `<wpt><extensions>` için JSON formatında rastgele ekstra etiketler. |
| `route_track_point` | GPX dosyasındaki ara noktalar, POI verilerinde bu türü kullanır. |
| `route_bbox_radius` | POI bölümündeki iz parçalarını aramak için varsayılan yarıçapı belirtir |
| `route_shortlink_tiles` | Geometri verilerini okumayı hızlandırmak için virgülle ayrılmış OSM Shortlink döşemeleri listesini belirtir (isteğe bağlı) |
| `route_segment_index` | Bu noktaya bağlı geometri segmentinin sıra numarasını belirtir (isteğe bağlı) |
| `route_name` | Dahili `searchPoiByName` tarafından kullanılan rota adı (kullanımdan kaldırıldı) |