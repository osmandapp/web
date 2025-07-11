---
source-hash: b83a46b082181d9f4c5b16b74c868c131e880e2aad3256067a77098bd5c9ae01
sidebar_position: 3
---

# KML Parçaları - .kml, .km {#kml-tracks---kml-km}

GoogleEarth'te (GE) haritaya kendi Yer İşaretlerinizi ekleyebilir ve bunları bir klasörde toplayabilirsiniz. GE'den klasörü KML formatında kaydedebilirsiniz. Farklı bir formatınız olduğunda, KML formatına dönüştürmek için QGIS veya diğer açık kaynak yazılımları kullanabilirsiniz. Belki de doğrudan OSM'ye dönüştürebilirsiniz. POI'lerinizi içeren herhangi bir formatı, OSM formatına dönüştürebiliyorsanız kullanabilirsiniz. KML'yi GPX'e [buradan](https://kml2gpx.com/) dönüştürebilirsiniz.

## Yerel destek {#native-support}
OsmAnd, KML'yi yerel olarak desteklemez ancak OsmAnd bazılarını içe aktarabilir. İçe aktarma işlemi sırasında dosya GPX'e dönüştürülecek ve daha sonra [OsmAnd GPX](osmand-gpx) olarak işlenecektir.

## KML'yi (veya Diğer Formatları) OSM Formatına Dönüştürme {#converting-kml-or-other-formats-into-the-osm-format}

Bu görevi gerçekleştirmek için gpsbabel kullanmamız gerekiyor. Popüler GPS alıcıları ve haritalama programları arasında yol noktalarını, izleri ve rotaları dönüştürmek için çok kullanışlıdır. Sözdizimi çok basittir ve GPS Babel, sizin için sözdizimini oluşturacak bir arayüze sahiptir:

```
$ gpsbabel -i kml -f my_places.kml -o osm,tagnd="tourism:museum",​created_by -F my_places.osm
```

Oluşturulan dosya şöyle görünür:

```
<?xml version='1.0' encoding='UTF-8'?>
<osm version='0.5' generator='GPSBabel-1.4.0'>
  <node id='-1' visible='true' lat='41.890121' lon='12.492265'>
    <tag k='name' v='place01'/>
    <tag k='note' v='place01'/>
    <tag k='tourism' v='museum'/>
  </node>
  <node id='-2' visible='true' lat='41.892241' lon='12.489031'>>
    <tag k='name' v='place02'/>
    <tag k='note' v='place02'/>
    <tag k='tourism' v='museum'/>
  </node>
</osm>
```

KML dosyasındaki tüm noktalar, turizm kategorisi ve müze türü gibi bazı özellikler atanarak OSM noktalarına dönüştürülür. Eksik değere sahip `created_by=` seçeneği, özelliklerin yok sayılacağı anlamına gelir. POI'niz farklı kategorilere aitse, birden çok OSM dosyası oluşturmanızı ve OsmAnd OBF dosyaları oluşturmanızı ve bunları daha sonra OsmAndMapCreator ile birleştirmenizi veya birden çok OBF dosyası oluşturmanızı öneririm.

## OSM Formatını OBF Formatına Dönüştürme {#converting-osm-format-into-obf-format}

Şimdi son adımı gerçekleştirmeye hazırsınız. Dönüştürme OsmAndMapCreator kullanılarak yapılacaktır. Bu programı indirin, sıkıştırılmış dosyadan çıkarın ve çalıştırın.
- Gösterildiği gibi POI Dizini Oluştur hariç tüm seçimlerin işaretini kaldırın:
- Çalışma dizinini seçin (Dosya/Çalışma dizinini belirt…)
- my_places.osm'yi yükleyin (Dosya/osm dosyasını seç…)

Her şey doğruysa, çalışma dizini klasörünüzde My_places.obf'yi bulacaksınız. Bu dosyayı cihazlarınızın OsmAnd izleri klasörüne yüklemeniz yeterlidir.