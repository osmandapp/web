---
source-hash: 4d94702418502470aad2ca1fbd09659956c170a23f9c5c7ba0cf595f9829be63
sidebar_position: 4
title: Rota Detayları
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Genel Bakış {#overview}

OsmAnd, en iyi rotayı bulmanızı ve detaylarını keşfetmenizi sağlar. Uygulama, mesafe, [seyahat süresi](#distance--time--co2), [yüzey tipi](#road-attributes), [yükseklik farkları](#elevation-info), [CO2 ayak izi verileri](#distance--time--co2) ve [dönüş bilgileri](#turn-by-turn-information) gibi rota hakkında detaylı bilgi sağlar. Ayrıca rotayı harita üzerinde [analiz edebilir](#analyze-on-map), parkur segmentleri hakkında bilgi edinebilir, rota planını [yazdırabilir](#print), rotayı [kaydedebilir](#share--export-actions) ve başkalarıyla paylaşabilirsiniz. Bu işlevsellik sayesinde, rota detaylarını her zaman bilecek ve seyahatinizi daha verimli planlayabileceksiniz.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota detayları Android](@site/static/img/navigation/route/route_detail_overview_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota detayları iOS](@site/static/img/navigation/route/route_detail_overview_4_ios.png)

</TabItem>

</Tabs>


### Nasıl Erişilir {#how-to-access}

[Navigasyon menüsünde](./route-navigation.md#start--stop-navigation) bir rota hesapladıktan sonra, o rotanın "Detayları"na erişebilirsiniz. Bu bilgi, rota planlamasını iyileştirmek için bir yolculuğa başlamadan önce veya sürüş sırasında ilerideki yol hakkında bilgi kontrol etmek için kullanışlıdır.
*Rota Detayları menüsüne* erişmenin üç yolu vardır.

1. Ana *Menü → Navigasyon* bölümüne gidin, rotayı ayarlayın ve *Detaylar* düğmesine dokunun.
2. Harita ekranındaki *Navigasyon* simgesine dokunun, rotayı ayarlayın ve *Detaylar* düğmesine dokunun.
3. *Yerlerim* menüsüne gidin, listedeki herhangi bir mevcut parkura dokunun *Menü → Yerlerim → Parkurlar*, *Genel Bakış*'taki parkur bağlam menüsünde *Navigasyon* simgesini seçin ve *Detaylar*'a dokunun.

Seçilen [profil ayarlarına](../../personal/profiles.md) ve seçilen [rota türüne](../../navigation/routing/osmand-routing.md#routing-types) bağlı olarak, bazı rota detayları görüntülenmeyebilir. Ayrıca, rota detayları büyük ölçüde *OpenStreetMap veri kapsamına* bağlıdır.


## Mesafe / Süre / CO2 {#distance--time--co2}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota detayları](@site/static/img/navigation/route/route_details_distance-time-CO2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon rotası iOS](@site/static/img/navigation/route/route_details_distance-time-CO2_2_ios.png)

</TabItem>

</Tabs>

- ***Toplam mesafe***, seçilen [birimlerde](../../personal/profiles.md#units--formats) ara noktalar dahil tüm rota segmentleri arasında hesaplanır.

- ***Tahmini seyahat süresi***, her segmentteki sürelerin ve belirli noktalardaki zaman cezalarının toplamı olarak hesaplanır. Her navigasyon profilinin, bir segmentteki hızı ve hangi cezaların dahil edilmesi gerektiğini hesaplamak için farklı kuralları vardır ([routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) içinde yapılandırılır). Örneğin, araba ve bisiklet profilleri OpenStreetMap verilerinden segment başına ortalama hızı alır, ancak yaya, tekne ve uçak profilleri [Navigasyon Ayarları'ndan](../guidance/navigation-settings.md#default-speed--road-speeds) *varsayılan* hızı kullanır.

- ***Tahmini varış süresi***, *Tahmini seyahat süresi* kullanılarak başlangıç noktasının yerel saatiyle şimdiki zamandan itibaren bir süre olarak hesaplanır.

- ***CO2 ayak izi verileri***, rotayı takip ederken ne kadar CO2 üretileceğini kabaca tahmin eder. Daha doğru bir yaklaşım elde etmek için Araç parametrelerinde [Yakıt motoru tipini](../guidance/navigation-settings.md#fuel-used-by-motor) yapılandırmanız gerekir.


## Yükseklik Bilgisi {#elevation-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota detayları](@site/static/img/navigation/route/route_details_info-block_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon rotası iOS](@site/static/img/navigation/route/route_details_info-block_ios.png)

</TabItem>

</Tabs>

**Yükseklik bilgisi**, [Düz çizgi navigasyonu](../routing/straight-line-routing.md) kullanan profiller hariç, tüm OsmAnd çevrimdışı rota profillerinde sağlanır. Yükseklik verileri OsmAnd Çevrimdışı Haritalarının bir parçasıdır ve [Genel SRTM kaynaklarına](https://en.wikipedia.org/wiki/Shuttle_Radar_Topography_Mission) göre hesaplanır.

- *Rakım aralığı*. Rotadaki minimum / maksimum yüksekliği gösterir.
- *Ortalama rakım*. Rotadaki ağırlıklı ortalama yüksekliği gösterir.
- *Yokuş yukarı / yokuş aşağı*. Yolun yataylığa oranını gösterir; sıfır yataylığı, derece sayısı ise daha yüksek veya daha dik bir eğimi gösterir. Eğim, konum noktanızdan görünür grafiğin sonuna kadar veya konum noktası ekranda görünmeden rotanın seçilen bölümü için maksimum yol eğimini yüzde olarak gösterir.


***OsmAnd tarafından arazi tespiti için kullanılan DEM verileri için bir lisans***
Haritadaki rakım verileri (70 derece kuzey enlemi ile 70 derece güney enlemi arasında), *Uzay Mekiği Radar Topografya Misyonu (SRTM)* kapsamında yapılan ölçümlerden elde edilmiştir. Bu, *NASA'nın Dünya Gözlem Sistemi*'ndeki birincil görüntüleme aracı olan *Gelişmiş Uzay Tabanlı Termal Emisyon ve Yansıma Radyometresi (ASTER)* kullanılarak yapılmıştır. Tam bilgi için [Lisans](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146) bölümüne bakın.


<details>
<summary>DEM (DSM) verileri</summary>
 - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Bu ürün için kullanılan orijinal veriler JAXA'nın AW3D'si tarafından sağlanmıştır.<br/>
 - <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
 - <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummens, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
 - <a href="https://sonny.4lima.de">Sonny's LiDAR Avrupa Dijital Arazi Modelleri</a> (DTM).

</details>


### Yükseklik Grafiği {#elevation-graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota detayları](@site/static/img/navigation/route/route_details_el_graph_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon rotası iOS](@site/static/img/navigation/route/route_details_el_graph_ios.png)

</TabItem>

</Tabs>

[Grafikler](../../map/tracks/track-context-menu.md#altitude--speed-graphs), navigasyon rotanızın yüksekliği ve eğimi ile bu grafikteki mevcut konumunuzu mevcut yükseklik ve eğimle görsel olarak gösterir. Grafik iki eksen üzerinde çizilir. X ekseni rotanızdaki mesafedir. İlk Y ekseni deniz seviyesinden yüksekliktir, değeri araziye bağlıdır ve ikinci Y ekseni yaklaşık [eğimdir](https://en.wikipedia.org/wiki/Grade_(slope)). Yükseklik grafiğini tüm rota için veya yalnızca seçilen bir aralık için grafiği ölçeklendirerek görüntüleyebilirsiniz.

- ***Yakınlaştır/Uzaklaştır***. Varsayılan olarak, grafik mevcut konumdan hedef noktanıza kadar olan rotayı gösterir. Daha detaylı bir görünüm için [iki parmak hareketlerini](../../map/interact-with-map.md#gestures) kullanarak yakınlaştırıp uzaklaştırabilirsiniz. Ayrıca grafiği sağa, rotada ileriye ve mevcut konuma geriye doğru hareket ettirebilirsiniz. *Bu tür manipülasyonlar, [Yol Nitelikleri](#road-attributes) bloğundaki görsel bilgi bloğunu da ifade eder.*

- ***Konum Pimi***. Rotanızda ileride belirli bir noktadaki bilgiyi görmek isterseniz, grafiğin herhangi bir yerine dokunabilirsiniz ve yükseklik ve eğim yüzdesi ile bir işaretçi belirecektir.


## Haritada Analiz Et {#analyze-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota detayları Android](@site/static/img/navigation/route/navigation_route_analiz_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota detayları iOS](@site/static/img/navigation/route/navigation_route_analiz_ios.png)

</TabItem>

</Tabs>

**Haritada analiz et** aracı, harita üzerindeki [parkur detaylarını](../../map/tracks/index.md#analyze-track-on-map) görüntüleme aracına benzer. Çeşitli grafiklerle görüntülemenize ve görsel olarak etkileşim kurmanıza ve seçilen noktayı harita üzerinde görmenize olanak tanır.

Veri mevcutsa, aşağıdaki türlerden birini seçebilirsiniz:

- *Y ekseni*:
   - [*Rakım*](../../map/tracks/track-context-menu.md#altitude). Bu, sabit bir seviyenin üzerindeki yüksekliği elde etme [sürecidir](https://wiki.openstreetmap.org/wiki/Altitude).
   - [*Eğim*](https://wiki.openstreetmap.org/wiki/Key:incline). [Arazi şeklinin eğimi](https://en.wikipedia.org/wiki/Grade_(slope)), yüzeyin yataylığa göre eğim açısının tanjantını ifade eder.
   - [*Hız*](../../map/tracks/track-context-menu.md#speed). Bir parkurda sürüş yaparken hız değerleri.
   - İki tür veri içeren grafikler: &nbsp;*Rakım/Eğim*, &nbsp;*Rakım/Hız*, &nbsp;*Eğim/Hız*, &nbsp;*Animasyonlu yakınlaştırma/Hız*.
- *X ekseni*:
   - *Mesafe*. Rotanın uzunluğuyla ilgili rota verilerini görüntüleyebilirsiniz.
   - *Süre*. O rota için hesaplanan süreyle ilgili rota verilerini görüntüleyebilirsiniz.
   - *Günün saati*. Günün belirli saatlerindeki rota verilerini görüntüleyebilirsiniz.


### Etkileşim Türleri {#type-of-interactions}

- *Dokun ve Kaydır*. Parkur noktası ve üzerindeki hareket hakkında bilgi görüntülemek için grafiğe dokunun. Grafik, noktanın haritadaki konumunu vurgular ve cetvel üzerinde hakkında bilgi görüntüler.
- *Ölçek*. Grafiği [iki parmak hareketiyle](../../map/interact-with-map.md#gestures) ölçeklendirin.
- *Konumumu Takip Et* (*Yalnızca Android*). Harita görünümünü ve grafiği konumunuzla senkronize etmek için [Konumum'a](../../map/interact-with-map.md#my-location-and-zoom) dokunabilirsiniz. Hareket ettikçe, grafik soldan sağa kayacak ve yolunuzun ilerisindeki bilgileri gösterecektir.


## Yol Nitelikleri {#road-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_details"/>*

![Navigasyon rotası Android](@site/static/img/navigation/route/route_details_attributes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_details,shared_string_analysis"/> sekmesi*

![Navigasyon rotası iOS](@site/static/img/navigation/route/route_details_attributes_ios.png)

</TabItem>

</Tabs>

Yol nitelikleri [Rota Detayları](#how-to-access) bölümünde erişilebilir ve OpenStreetMap ve Yükseklik verilerinden segmentle ilgili bilgileri görüntüler. Renk göstergesi, belirli niteliklerin haritada nasıl işlendiğiyle ilgilidir ([Harita lejantı](../../map-legend/osmand.md#surface-smoothness) bölümüne bakın). Çubuk grafikler de etkileşimlidir ve grafiğe dokunarak belirli bir konumdaki bilgiyi görmek mümkündür.

- [**Yol tipi**](https://wiki.openstreetmap.org/wiki/Key:highway#Roads). Yolun tipi, şerit sayısı, hız limitleri, taşıma kapasitesi, yaya ve bisiklet yollarının varlığı, yol kenarları ve diğer parametreler gibi işlevsel amacı ve özelliklerine göre belirlenir. Farklı yol tipleri farklı kısıtlamalara ve trafik kurallarına sahip olabilir.

   Örneğin, ana [otoyollar](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway) genellikle yüksek hız limitine sahiptir ve şeritlere ayrılabilirken, [yerel yollar](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) düşük hız limitine ve her yönde tek şeride sahip olabilir.

- [**Yüzey**](https://wiki.openstreetmap.org/wiki/Key:surface). Yol yüzeyleri, araç tekerlekleriyle temas eden en üst kaplama katmanıdır. Özelliklerine ve işlevsel amaçlarına bağlı olarak farklı tiplerde olabilirler.

   Örneğin, [asfalt](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) kaplama iyi çekiş ve gürültü yalıtımı sağlarken, [beton](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete) kaplama daha dayanıklıdır ve daha yüksek taşıma kapasitesine sahiptir. Çakıl, kırma taş, ahşap levhalar ve diğer malzemeler de yol yüzeyi oluşturmak için kullanılabilir.

- [**Eğim**](https://wiki.openstreetmap.org/wiki/Key:incline#Common_&_extreme_inclines). Yolun eğim açısının yüzde olarak ifade edilen bir ölçüsüdür. Yolun ufka göre ne kadar dik yukarı veya aşağı eğimli olduğunu gösterir ve yol yüksekliğindeki dikey değişimin yatay mesafeye bölünmesi ve elde edilen değerin 100 ile çarpılmasıyla hesaplanır.

   Örneğin, yolun eğimi %10 ise, bu, yol boyunca her 100 metrelik yatay mesafe için 10 metre yukarı veya aşağı gittiğiniz anlamına gelir. Yolun eğimi, özellikle kışın kaygan yollarda aracınızın hızını, frenlemesini, yakıt tüketimini ve sürüş güvenliğini etkileyebilir.

- [**Yüzey sağlamlığı**](https://wiki.openstreetmap.org/wiki/Key:tracktype). Yol yüzeyi deformasyondan veya yükten kurtulabilir. Yüzey sağlamlığı ne kadar yüksek olursa, araca zarar verme olasılığı o kadar az ve yol o kadar rahat olacaktır. Yüzey sağlamlığı ayrıca araç hızını ve yakıt tüketimini de etkileyebilir.

- [**Eğim**](https://wiki.openstreetmap.org/wiki/Key:incline). Rotanızda yüzde kaç eğim olduğunu gösterir.

- [**Pürüzsüzlük**](https://wiki.openstreetmap.org/wiki/Key:smoothness). Otoyollar, otoparklar, plajlar ve patikalar gibi her türlü yol ve alan için geçerlidir ve rotanın kullanılabilirliğini gösterir. Araç alt takımı gibi önemli hasar riskleri veya düşme gibi yaralanmalar olmadan sürüş yapabileceğiniz hakkında bilgi verir.

- [**Kış ve buz yolları**](https://wiki.openstreetmap.org/wiki/Proposed_features/Winter_roads). Rotanın renk şemasını [kış yolları](../../map/vector-maps.md#winter-and-ski) sınıflandırmasına göre gösterir.

- [**At parkurlarının zorluğu**](https://wiki.openstreetmap.org/wiki/Riding). Bu yol özelliği, at sürerken rotanın zorluğunu gösterir. [Atla rota belirleme](../../navigation/routing/horse-routing.md) için uygundur.


## Adım Adım Bilgiler {#turn-by-turn-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon rotası Android](@site/static/img/navigation/route/navigation_route_android_turn.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon rotası Android](@site/static/img/navigation/route/navigation_route_turn_2_ios.png)

</TabItem>

</Tabs>

Adım adım bilgiler, bir rotada nasıl gezineceğinize dair ayrıntılı [talimatlar](#instructions) sağlar. *Detaylar* menüsüne ek olarak, [*Rota manevraları*](../../widgets/nav-widgets.md#route-maneuvers) ve [*Şeritler*](../../widgets/nav-widgets.md#lanes) widget'larında da görüntülenir. Bu bilgiler, rotanızda daha iyi gezinmenize ve önceden plan yapmanıza yardımcı olur.

Ayrıntılı bilgileri görüntülemek veya gerektiği gibi değişiklik yapmak için listedeki rotanın belirli bir bölümüne dokunun. Harita büyür ve bir [Bağlam menüsü](../../map/map-context-menu.md) açılır.


### Talimatlar {#instructions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon rotası Android](@site/static/img/navigation/route/navigation_turn_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon rotası Android](@site/static/img/navigation/route/navigation_turn_ios.png)

</TabItem>

</Tabs>

Talimatlar, rota boyunca hareket etme hakkında bilgi içerir, örneğin:

- [*Sonraki dönüş oku*](../../widgets/nav-widgets.md#next-turn) ve *yönü*.
- *Manevraya olan mesafe*.
- *Ne yapılacağına dair bir açıklama*, bu açıklama *sokağın veya patikanın adını* içerir.
- *Toplam mesafe* ve *rotanın süresi*.
- Mevcut yol için *[Şeritler](../../widgets/nav-widgets.md#lanes) düzeni*.
- [*Yol kenarı göstergesi*](#roadside-indicator) (*Yalnızca iOS*).


### Yol Kenarı Göstergesi {#roadside-indicator}

:::caution Yalnızca iOS
Bu tür talimatlar şu anda OsmAnd uygulamasının *Android sürümü için mevcut değildir*.
:::

![Yan gösterge](@site/static/img/navigation/route/side_indication.png)

Talimat listesinde, **yol kenarı göstergesi**, mevcut konumunuzdan ve hareket yönünüzden son noktanıza göre hedefinizin hangi yönde olduğunu gösterir; bu sol, sağ ve düz ileri olabilir.

Hedefiniz (*[Son noktadan kerteriz](https://en.wikipedia.org/w/index.php?title=Bearing_(navigation)&oldformat=true)*) ile son segment (*Rotanın son 2 noktasına kerteriz*) arasındaki açı ölçülür, 120 derecelik 3 sektöre bölünür ve sonuç olarak hedefinizin hangi yönde olduğunu görebilirsiniz.

- `-60 °` &nbsp; &nbsp; &nbsp; ila &nbsp; &nbsp;`60 °` &nbsp; &nbsp; &nbsp; - **düz ileri** olarak işaretlenmiştir.
- `-180 °` &nbsp; &nbsp; ila &nbsp; &nbsp;`-60 °` &nbsp; &nbsp; - **sol** taraf olarak işaretlenmiştir.
- `60 °` &nbsp; &nbsp; &nbsp; &nbsp; ila &nbsp; &nbsp;`180 °` &nbsp; &nbsp; - **sağ** taraf olarak işaretlenmiştir.


### Yazdır {#print}

<InfoAndroidOnly/>

![rota detayları](@site/static/img/navigation/route/route_details_print-2.png)

Adım adım rota açıklamasının **Yazdırma** özelliği, elektronik cihazlar yerine rota açıklamanızın fiziksel bir kopyasına sahip olmayı tercih ediyorsanız veya navigasyon uygulamalarına veya GPS navigatörlerine erişiminiz yoksa, İnternet erişiminiz yoksa veya sizinle seyahat eden diğer kişiler için bilgiye ihtiyacınız varsa faydalı olabilir.

Basılı bir rota açıklaması, bir sonraki dönüşe olan mesafe, sürüş yönü ve sokak veya patika adları ile mesafe ve seyahat süresi bilgileri dahil olmak üzere rotanızda nasıl gezineceğinize dair ayrıntılı *adım adım talimatlar* sağlar.

Bu bilgiler, bir gezi planlarken ve rotadaki farklı noktalar arasındaki süreyi ve mesafeyi tahmin etmek ve tahmini varış süresini belirlemek istediğinizde faydalı olabilir.

Adım adım bilgileri **PDF formatında** **yazdırma** veya **kaydetme** yeteneği, özellikle uzun mesafeler kat ederken veya bilmediğiniz yerlerde, rota ve oraya ulaşmak için gereken süre hakkında daha ayrıntılı bir fikre sahip olmanız gerektiğinde kullanışlıdır.


## Paylaş / Dışa Aktar (Eylemler) {#share--export-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon rotası Android](@site/static/img/navigation/route/navigation_route_share_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon rotası iOS](@site/static/img/navigation/route/navigation_route_share_ios.png)

</TabItem>

</Tabs>

Rota Detayları navigasyon bölümü, rota bilgileriyle belirli eylemleri gerçekleştirmenize olanak tanıyan seçeneklere sahiptir.

- [**Yazdır**](#print). Adım adım rota bilgilerini yazdırmanıza veya kaydetmenize olanak tanır.
- **Dışa Aktar/Kaydet**. Rota bilgilerini daha sonra çevrimdışı kullanım için **yeni bir parkur olarak** kaydetmenize olanak tanır. Dışa aktarılan parkur, yol nitelikleri ve dönüş talimatları hakkında tüm bilgileri içerir. Bu nedenle, [bu parkurla navigasyon](./gpx-navigation.md), rotayla navigasyon gibi tüm özellikleri sağlamalıdır.
- **Paylaş**. Dışa aktarılan bir parkuru veya OsmAnd ile başka bir cihazda açılabilecek rotaya bir bağlantıyı paylaşır.


## İlgili Makaleler {#related-articles}

- [Rota parametreleri](../routing/osmand-routing.md#routing-types)
- [Rota hazırlığı](./route-navigation.md)
- [Parkurla navigasyon](./gpx-navigation.md)
- [İşaretçilerle navigasyon](./markers-navigation.md)
- [Navigasyon ayarları](../guidance/navigation-settings.md)
- [Navigasyon sırasında harita ekranı](../guidance/map-during-navigation.md)
- [Sesli komutlar / Bildirimler](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Son güncelleme: Kasım 2024*