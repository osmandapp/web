---
source-hash: d793188a0617dee4c181a2021483255f3e56c64b9e25db7249b0fb0d19923b4d
sidebar_position: 5
---

# Yokuş yukarı / yokuş aşağı / eğim hesaplaması {#calculation-of-uphill--downhill--slope}

OsmAnd, çevrimdışı haritalara gömülü olan SRTM uydu verilerine ve Kaydedilmiş GPX parkurlarına dayalı olarak **eğim** ve **yokuş yukarı** hesaplamak için farklı algoritmalar kullanır.

**Yokuş yukarı** hesaplamanın temel amacı, yukarı çıkarken ne kadar **ekstra enerji** harcandığına dair ilgili bilgileri sağlamaktır; bu, açıkça araç veya taşıma şekli, yüzey, kişinin ağırlığı ve diğerleri gibi birçok faktöre bağlıdır.
Dolayısıyla, sonunda **yokuş yukarı**, enerji verimli bir rota oluşturmak için Yükseklik temelli rotalama tarafından dikkate alınması gereken bir parametre olmalıdır.

**Eğim** hesaplamanın temel amacı, hangi dik yolların kaçınılması gerektiğini görsel olarak belirtmektir.


## Yokuş yukarı / Yokuş aşağı {#uphill--downhill}

**Yokuş yukarı** hesaplamanın birçok sorunu vardır, çünkü bir standart yoktur ve taşıma şekline ve diğer birçok parametreye bağlı olduğu için kullanıcıya makul bir kontrol sağlamak zordur, bu yüzden çok karmaşık değildir. Genellikle yokuş yukarı diğer programlarla karşılaştırılır, ancak altın standarda sahip hiçbir program yoktur.

OsmAnd 3 adımlı bir algoritma kullanır:

- Gürültülü verileri filtrele. 
- Yerel ekstremumları (minimumlar ve maksimumlar) bul.
- Minimum ve maksimumlar arasındaki farkların toplamını hesapla.

Bazı parkurlar, önce filtrelenmesi gereken çok sayıda gürültülü veri içerir. Şimdilik tüm parkurlara filtreleme uyguluyoruz, ancak Rota Planlama aracı, Navigasyon aracı veya SRTM düzeltmesinden sonra oluşturulan hazırlanmış parkurlarda filtrelemenin herhangi bir etkisi olmamalıdır.


### %70 eğimi filtrele {#filter-70-slope}

Filtreleme, grafikte soldaki 1 komşu noktadan ve sağdaki 1 komşu noktadan önemli ölçüde daha yüksek veya daha düşük olan **aşırı noktaları** bulmaya dayanır. 
Bu **aşırı noktalar** daha fazla hesaplama işleminden hariç tutulur. ```Eşik``` [ %70 eğimdir](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L11) - [kod](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L72).

**Örnek 1**. (tüm noktalar 10m aralıklarla dağıtılmıştır), yükseklik - [5, 3, 10, 3, 5]. 10 aşırı noktadır: çünkü 10 > 3 (%70 eğim).

**Örnek 2**. (tüm noktalar 10m aralıklarla dağıtılmıştır), yükseklik - [5, 3, 10, 13, 15]. 10 aşırı bir nokta değildir: çünkü 10 > 3 ama 10 < 13, yani yerel bir zirvedir.

### Zıplayan noktaları filtrele {#filter-jumping-points}

Yerel tepeleri ```/\``` temsil eden noktalar filtrelenir, bu en yüksek ve en düşük noktanın her zaman filtreleneceği bir soruna yol açar, ancak kaydın sık olmadığı gürültülü parkurlarla başa çıkmaya izin verir, bu nedenle aşırı eğimle ilk kontrol işe yaramaz. [Koda](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L49) referans.

**Örnek 1**. Yükseklik - [5, 3, 10, 3, 5] -> [5, 5].

**Örnek 2**. Yükseklik - [5, 6, 10, 7, 5] -> [5, 6, 7, 5].

**Örnek 3**. Yükseklik - [5, 2, 3, 4, 5] -> [5, 3, 4, 5].


### Ekstremumları bulma {#finding-extremums}

Ekstremumları bulmak için [Rames-Dougals-Peucker](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm) algoritması kullanılır. Rastgele bir grafikte tam olarak ekstremumları bulmak için kesinlikle iyi değildir, ancak yükseklik hesaplamasında, 1 uzun yokuş yukarı ve arada fark edilmeyen kısa yokuş aşağılar sırasında oluşabilecek birçok rastgele küçük zirveyi önler.

Algoritmanın temel amacı, yükseklik grafiğini temsil edebilecek minimum sayıda düz çizgi bulmaktır. ```Eşik``` **[7 metredir](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationDiffsCalculator.java#L13)**. Dolayısıyla 7 metreden fazla farkı olan tüm zirveler düz yüzeylerde tespit edilecek ve daha az ise tespit edilmeyecektir.

Ekstremumlar, OsmAnd geliştirme eklentisi etkinleştirildiğinde grafikte mavi noktalar olarak görüntülenir.

**Örnek 1**. Yükseklik - [0, 0, 10, 0, 0]. **Ekstremum** 10'dur.

**Örnek 2**. Yükseklik - [0, 1, 5, 4, -3, -2, -1, 0]. **Ekstremum yok** - hepsi 7 metreden az fark.


### Ekstremumlar arasında yokuş yukarı / yokuş aşağı hesapla {#calculate-uphill--downhill-between-extremums}

Örneğin, yukarı ve aşağı giden basit bir parkurunuz varsa, yolunuzda yalnızca 1 maksimumunuz vardır, bu nedenle
  ``` 
  Başlangıç yükseklik farkı = <başlangıç yüksekliği> - <Ekstremum yüksekliği>    : 
  Bitiş yükseklik farkı = <Ekstremum yüksekliği> - <bitiş yüksekliği>      : pozitifse - **yokuş yukarı**, negatifse - **yokuş aşağı**
  ```

1. *Başlangıç yükseklik farkı* > 0 ise
  - **yokuş yukarı** = *başlangıç yükseklik farkı*  
  - **yokuş aşağı** = *bitiş yükseklik farkı*  

2. *Bitiş yükseklik farkı* > 0 ise
  - **yokuş yukarı** = *bitiş yükseklik farkı*   
  - **yokuş aşağı** = *başlangıç yükseklik farkı*  


Daha fazla örnek eklenecektir.


## Yükseklik Düzeltmesi {#elevation-correction}

Yükseklik Düzeltmesi, GPX parkurundaki yükseklik değerlerini harici yükseklik kaynaklarını kullanarak ayarlar. İki yükseklik veri kaynağı mevcuttur:

1. Arazi haritalarını kullanın (DEM / SRTM / 3D yükseklik verileri)
- Yükseklik değerlerini indirilen arazi haritalarından (DEM/SRTM veya 3D GeoTIFF dosyaları) gelen verilerle değiştirir.
- Yükseklik karoları yüklüyse cihazda yerel olarak çalışır.
- Bu yöntem orijinal parkur geometrisini korur.

2. Yakındaki yolları kullanın (Yollara yapıştırma)
- Parkur geometrisini yol ağına uydurmak için ayarlar.
- Yükseklik düzeltmesi için yol yükseklik verilerini kullanır.
- Bu yöntem yol yapıştırması nedeniyle parkur şeklini değiştirebilir.

Yükseklik Düzeltmesi uygulandıktan sonra değişebilecek veriler:
- Mesafe
- Boyut
- Tırmanış
- İniş
- Ortalama hız
- Maksimum hız
- Süre
- Hareket süresi

Her iki yükseklik kaynağı kullanıldığında GPX zaman damgaları (tarih/saat) korunur.


## Eğim {#slope}

Yeşil grafik, yokuş yukarı / yokuş aşağıdan farklı hesaplanır ve küçük farklılıklar gösterebilir. Teoride tüm **ekstremumlarda** yeşil grafik **0 çizgisini kesmelidir**, ancak tüm 0 eğim noktaları ekstremumdur.

Eğimi hesaplamak için tüm veriler eşit 20 metrelik adımlara bölünür. Bu ızgaranın her noktası için noktanın etrafındaki ortalama yükseklik (10 metre yarıçap) hesaplanır. Daha sonra [Sonlu merkezi fark](https://en.wikipedia.org/wiki/Finite_difference) kullanılarak ayrık türev hesaplanır.