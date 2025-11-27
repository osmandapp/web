---
source-hash: d316c6a306b18280040c2135391d01c55aa7a43411c22e487755810c163d4cb6
sidebar_position: 3
title:  Bilgi Widget'ları
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

Bilgi widget'ları önemli verilere hızlı erişim sağlar. Bu, hız, hava durumu, park konumu, harici sensörlerden gelen veriler ve çok daha fazlası olabilir. Widget'lar özel gereksinimlerinize göre yapılandırılabilir, böylece uygulama ekranında görünürlükleri etkinleştirilebilir veya gerektiğinde devre dışı bırakılabilir.

![Bilgi widget'ları](@site/static/img/widgets/informational_widgets_all.png)


## Rakım Widget'ları   {#altitude-widgets}

Rakım widget'ları, mevcut coğrafi konumun deniz seviyesinden yüksekliğini ve harita merkezinin yüksekliğini gösterir.  


### Rakım: Mevcut Konum   {#altitude-current-location}
  
:::note  Dünya rakım düzeltmesini indirin
Bazı Android cihazlarda rakım yanlış görüntülenebilir. Bu sorunu çözmek için rakım düzeltmeli bir harita indirin.

- Şuraya gidin: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.
- Daha fazla ayrıntı için [Haritalar ve Kaynaklar](../personal/maps-resources.md#downloads-menu) bölümünü ziyaret edin.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rakım widget'ı Android](@site/static/img/widgets/altitude_widget_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Rakım widget'ı iOS](@site/static/img/widgets/altitude_widget_ios.png)  

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Etkinleştir |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_altitude_current_location"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="map_widget_altitude_current_location"/>* |
| Dokunarak | Değişiklik yok |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |
| Biçim | *Menü → Ayarlar → Uygulama profilleri → Genel ayarlar → Birimler ve biçimler → Uzunluk birimleri* |  


### Yükseklik: Harita Merkezi {#elevation-map-center}

:::info Ücretli özellik
&nbsp;<ProFeature/> *Yükseklik: harita merkezi* widget'ını kullanmak için Android için [OsmAnd Pro](../purchases/android.md#pro-features) veya iOS için [OsmAnd Pro](../purchases/ios.md#pro-features) aboneliği edinin.  
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yükseklik widget'ı Android](@site/static/img/widgets/elevation_widget_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Yükseklik widget'ı iOS](@site/static/img/widgets/elevation_widget_2_ios.png)

</TabItem>

</Tabs>

Widget'ı kullanarak mevcut harita merkezinin deniz seviyesinden yüksekliğini öğrenebilirsiniz. **Yükseklik: harita merkezi widget'ında** bilgi görüntülemek için gerekli alanın bir [Arazi haritası (Gölgelendirme ve Eğim)](../plugins/topography.md#download-maps) gereklidir.  

| | |
|:------------|:------------|
| Etkinleştir |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_altitude_map_center"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="map_widget_altitude_map_center"/>* |
| Dokunarak | Değişiklik yok |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |
| Biçim | *Menü → Ayarlar → Uygulama profilleri → Genel ayarlar → Birimler ve biçimler → Uzunluk birimleri* |


## Geçerli Saat {#current-time}

![Geçerli saat widget'ı](@site/static/img/widgets/current_time_widget.png)

Bu widget, cihazınızdan alınan geçerli saati gösterir.  

| | |
|:------------|:------------|
| Etkinleştir |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_plain_time"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="map_widget_plain_time"/>* |
| Dokunarak | Değişiklik yok |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |
| Biçim | Cihaz ayarları Saat ve Biçim'i yapılandırır. |


## Geçerli Hız {#current-speed}

![Hız widget'ı](@site/static/img/widgets/current_speed_widget.png)  

Widget, GPS sensörü tarafından algılanan mevcut hızı gösterir.  

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_current_speed"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="map_widget_current_speed"/>* |
| Dokunarak  | Değişiklik yok |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |
| Biçim | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,default_speed_system"/>* |


## Ortalama Hız {#average-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ortalama hız widget'ı Android](@site/static/img/widgets/average_speed_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ortalama hız widget'ı iOS](@site/static/img/widgets/average_speed_widget_ios_2.png)

</TabItem>

</Tabs>  

**Ortalama Hız** widget'ı, navigasyon veya rota kaydı gerektirmeden seçilen bir zaman aralığındaki ortalama hızınızı hesaplar ve görüntüler. Otoyollarda hız uyumluluğunu izlemek veya bisiklet sürerken son birkaç dakikadaki ortalama hızı takip etmek için kullanışlıdır.

1. ***Widget'ı yapılandırma.***  
   Ayarları yapmak için **Ayarlar** düğmesine (*Android*) veya **widget alanına** (*iOS*) dokunun. Mevcut seçenekler şunlardır:

2. ***Zaman aralığı.***

   - Ortalama hız, **15 saniyeden 60 dakikaya** kadar değişebilen seçilen zaman aralığına göre hesaplanır.  

   - Hesaplama, GPS verilerine dayanır ve şu formülü kullanır:  
   `Ortalama Hız = ORTALAMA(GPS_KONUMU.hız)`.

3. ***Duraklamaları hesaba katın.***

   **Etkin** — Kaydedilen hız saatte 1 birimin altındaysa, göz ardı edilir, bu da trafik ışıklarında dururken veya kısa molalar verirken ortalama hızda gereksiz düşüşleri önler.  

   **Devre dışı** — Duraklamalar hesaplamaya dahil edilir, bu da uzun duraklamaların genel ortalama hızı düşüreceği anlamına gelir.

4. ***Ortalama hızı sıfırla.***
   Ortalama hız hesaplamasını iki şekilde sıfırlayabilirsiniz:

   - Widget'a uzun dokunarak [Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açın ve *Ortalama hızı sıfırla*'yı seçin.
   - [Ekranı Yapılandır menüsü](../widgets/configure-screen.md#widget-settings) aracılığıyla *widget ayarlarını* açın ve sıfırlama seçeneğini seçin.

Sıfırlamadan sonra, ortalama hız yeni GPS verilerinden yeniden hesaplanır. Bu özellik, **ortalama hız denetim kameralarının** olduğu alanlarda hızı takip etmek gibi gerçek zamanlı hız izleme için kullanışlıdır.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ortalama hız](@site/static/img/widgets/average_speed_widget_4.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Ortalama hız widget'ları](@site/static/img/widgets/average_speed_widget_ios_1.png)  ![Ortalama hız widget'ları](@site/static/img/widgets/average_speed_widget_ios_3.png)

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Etkinleştir |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_average_speed"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="map_widget_average_speed"/>* |
| Dokunarak | Değişiklik yok |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar. <br/> Ortalama hızı sıfırlamak için kullanılabilir. |


## Süzülme Oranı {#glide-ratio}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|Widget'lar| Ekrandaki widget'lar|
|:--------|:---------|
|![Süzülme oranı](@site/static/img/widgets/glide_ratio_3.png)|![Süzülme oranı](@site/blog/2023-12-22-android-4-6/img/glide_ratio_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|Widget'lar| Ekrandaki widget'lar|
|:--------|:---------|
|![Süzülme oranı](@site/static/img/widgets/glide_ratio_1_widget_ios.png)|![Süzülme oranı](@site/static/img/widgets/glide_ratio_widget_ios.png)|


</TabItem>

</Tabs>  

[Basit](../widgets/configure-screen.md#widget-panels) *Süzülme Oranı* widget'ları, hava rotalarını planlarken bilinçli kararlar vermeye yardımcı olmak için değerli süzülme oranı bilgileri sağlar. OsmAnd'deki *Süzülme Oranı* widget'ı, belirli bir konuma ([harita üzerindeki işaretçi](../personal/markers.md)) giderken iniş veya çıkışınızın verimliliğini değerlendirmenize yardımcı olur. Süzülme oranını, mevcut konumunuz ile hedeflenen varış noktanız arasındaki yükseklik farkına olan mesafenin oranı olarak hesaplar. Bu konuda daha fazla bilgiyi [burada](https://en.wikipedia.org/wiki/Lift-to-drag_ratio#Glide_ratio) okuyabilirsiniz.


**Widget'ların kullanımı:**

- *Süzülme uçuşlarını planlama.* Süzülme pilotları için *Hedefe süzülme oranı* widget'ı, süzülme uçuşlarını planlarken ve gerçekleştirirken vazgeçilmez bir araç haline gelir. Pilotlar, mevcut koşullar ve gerekli süzülme oranı göz önüne alındığında hedeflerine ne kadar uzağa uçabileceklerini tahmin edebilirler.
- *Tırmanışları ve inişleri optimize etme.* Ortalama süzülme oranı, pilotların mevcut koşullara göre tırmanışları ve inişleri optimize etmelerini sağlar. Pilotlar, uçuş süresini en üst düzeye çıkarmak için tırmanışlar için veya bir hedef noktaya ulaşmak için inişler için en uygun zamanlamayı seçebilirler.
- *Değişen koşullara tepki verme.* Widget, süzülme oranını sürekli olarak güncelleyerek pilotların atmosferik koşullardaki veya rotalardaki değişikliklere anında tepki vermesini sağlar. Güvenliği ve verimliliği sağlamak için uçuş planlarını ayarlayabilirler.
- *Yatay mesafenin maksimum kullanımı.* Süzülme oranını bilmek, pilotların hedefe ulaşmak için yatay mesafeyi en üst düzeye çıkarmasını sağlar, bu da uzun uçuşları planlarken özellikle önemlidir.
- *Risk azaltma*. *Hedefe süzülme oranı* widget'ı, pilotların yetersiz süzülme oranı nedeniyle hedefe ulaşmanın imkansız hale geldiği durumları önlemesine yardımcı olur. Bu, riskleri azaltmaya ve uçuş güvenliğini artırmaya yardımcı olur.


**Pozitif ve Negatif Değerler:**

- **Pozitif değerler**, varış noktanızın mevcut konumunuzdan daha düşük bir rakımda olduğunu ve iniş gerektirdiğini gösterir.
- **Negatif değerler**, varış noktanızın daha yüksek bir rakımda olduğunu ve çıkış gerektirdiğini gösterir. Örneğin, "-90:1" demek, 90 kilometre mesafe kat ettikten sonra varış noktanıza ulaşmak için 1 kilometre yükselmeniz gerektiği anlamına gelir.


**Yuvarlama/Biçimlendirme:**

- Değer **≤ 0.1**:  
  - "0.05" "0" olarak görüntülenir.
- Değer **> 0.1 ve < 100**:  
  - örneğin, "50.7643" "50.8:1" olarak görüntülenir.
- Değer **> 100:**  
  - "102.35" "102:1" olarak görüntülenir.


### Hedefe Süzülme Oranı {#glide-ratio-to-target}

- **Hedefe süzülme oranı**, hedef noktaya ulaşmak için gereken tam süzülme oranını gösterir.
- **Hedef yükseklik**, hedef noktanın yüksekliğini gösterir. [Harita işaretçisi](../personal/markers.md) hedef nokta olarak kullanılmalıdır.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → Süzülme oranı* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → Süzülme oranı* |
| Dokunarak | *Hedefe süzülme oranı* veya *Hedef yükseklik* değiştirir  |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |


### Ortalama Süzülme Oranı {#average-glide-ratio}

- **Ortalama süzülme oranı**, belirtilen bir zaman aralığı için ortalama süzülme oranını gösterir.
- **Ortalama dikey hız**, bir nesnenin belirli bir süre boyunca yükselme veya alçalma hızını gösterir. Değerlendirme için yalnızca zaman aralığının ilk ve son noktaları dikkate alınır. Bu widget için zaman aralığını 15 saniyeden 60 dakikaya kadar ayarlayabilirsiniz. Hedef nokta olarak [Harita işaretçisini](../personal/markers.md) kullanmalısınız.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → Süzülme oranı* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → Süzülme oranı* |
| Dokunarak | *Ortalama süzülme oranı* veya *Ortalama dikey hız* değiştirir  |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |


## Pil Seviyesi {#battery-level}

![Pil seviyesi widget'ı](@site/static/img/widgets/battery_level_widget.png)  

**Pil Seviyesi** widget'ı, cihazınızın pil yüzdesini doğrudan harita ekranında gösterir ve en az dakikada bir otomatik olarak güncellenir.

- **iOS 17 ve sonrası** — **Gizlilik kısıtlamaları** nedeniyle, pil seviyesi verileri yalnızca %5'lik artışlarla (örn. %35, %60 veya %85) kullanılabilir. Bu, Apple tarafından uygulanan bir sistem sınırlamasıdır.

- **Android** cihazlar — Widget, sistem tarafından bildirilen tam pil yüzdesini yuvarlama yapmadan gösterir.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_battery"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="map_widget_battery"/>* |
| Dokunarak | Değişiklik yok |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |


## Koordinatlar Widget'ı {#coordinates-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Koordinatlar widget'ı Android](@site/static/img/widgets/coordinates_widget_1.png) ![Koordinatlar widget'ı Android](@site/static/img/widgets/coordinates_widget_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Koordinatlar widget'ı iOS](@site/static/img/widgets/coordinates_widget_ios_2.png)  

</TabItem>

</Tabs>

OsmAnd iki tür koordinat widget'ı sunar:

- **Koordinatlar: harita merkezi** - mevcut harita merkezinin coğrafi koordinatlarını gösterir.
- **Koordinatlar: mevcut konum** - mevcut coğrafi konumun coğrafi koordinatlarını gösterir.

Koordinatlar widget'ları ekranın üst kısmında görüntülenir. Yeşil arka plana sahip simgeler, haritanın görünür kısmının merkezindeki noktanın enlem ve boylamını gösterirken, mavi arka plana sahip simgeler mevcut konumunuzun koordinatlarını gösterir. Desteklenen *Koordinat biçimleri* hakkında bilgiyi *[Koordinatları ara makalesinde](../search/search-coordinates.md#coordinate-format)* bulabilirsiniz.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="coordinates_widget"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → <Translate ios="true" ids="coordinates"/>* |
| Dokunarak | Koordinatları panoya kopyalar. |
| Biçim | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/> (iOS) veya <Translate android="true" ids="configure_profile"/> (Android) → <br/> <Translate ios="true" ids="general_settings_2,units_and_formats,coords_format"/>* |


## GPS Bilgisi   {#gps-info}

<InfoAndroidOnly />

![GPS Bilgisi Android widget'ı](@site/static/img/widgets/gps_info_widget.png)

GPS (Küresel Konumlandırma Sistemi) bilgi widget'ı, cihazın şu anda algıladığı ve kullandığı uydu sayısını gösterir. Zayıf sinyal durumunda GPS durumunu kontrol etmek için kullanabilirsiniz.  

Mevcut GPS önbelleğini şuradan sıfırlayabilirsiniz:
*<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>*.  

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_gps_info"/>* |  
| Dokunarak | Yerleşik GPS cihazını yapılandırmak için üçüncü taraf araçlarla GPS durum menüsünü açar. |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |


## Güneş Konumu {#sun-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Gün batımı ve gün doğumu widget'ları](@site/static/img/widgets/sun_position.png) ![Gün batımı ve gün doğumu widget'ları](@site/static/img/widgets/sun_position_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Gün batımı ve gün doğumu widget'ları](@site/static/img/widgets/sun_position_4_ios.png) ![Gün batımı ve gün doğumu widget'ları](@site/static/img/widgets/sun_position_3_ios.png)

</TabItem>

</Tabs>  

Güneş konumu widget'ları, haritanın merkezi için bir sonraki gün doğumu ve gün batımı saatlerini gösterir. Dokunulduğunda, beklenen gün batımına veya gün doğumuna kadar kalan süreyi gösterirler. Her iki durumda da, zaman cihazınızın yapılandırılmış zamanına dayanır.

- **<Translate ios="true" ids="map_widget_sun_position"/>**. <Translate ios="true" ids="map_widget_sun_position_desc"/>
- **<Translate ios="true" ids="map_widget_sunrise"/>**. <Translate ios="true" ids="map_widget_sunrise_desc"/>
- **<Translate ios="true" ids="map_widget_sunset"/>**. <Translate ios="true" ids="map_widget_sunset_desc"/>

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_sun_position"/> → <Translate android="true" ids="map_widget_sun_position"/>, <Translate android="true" ids="shared_string_sunrise"/>, <Translate android="true" ids="shared_string_sunset"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="map_widget_sun_position"/> → <Translate ios="true" ids="map_widget_sun_position"/>, <Translate ios="true" ids="map_widget_sunrise"/>, <Translate ios="true" ids="map_widget_sunset"/>* |
| Dokunarak | Kalan süre ile bir sonraki gün doğumu/gün batımı zamanı arasında geçiş yapar. |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |


## Yarıçap Cetveli {#radius-ruler}

:::note  
Daha ayrıntılı bir açıklamayı burada okuyabilirsiniz: **[Yarıçap cetveli ve Cetvel](../widgets/radius-ruler)**.  
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Yarıçap cetveli ekranı](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Yarıçap cetveli"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Yarıçap cetveli"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Yarıçap cetveli"/></td>
    </tr>
</table>

</TabItem>

</Tabs>

Yarıçap Cetveli widget'ı, konumunuz ile Yarıçap Cetveli'nin merkez noktası arasındaki mesafeyi gösterir. İlk çemberin yarıçapı [harita ölçeğine](../widgets/radius-ruler.md#ruler) eşittir.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="map_widget_ruler_control"/>* |
| Dokunarak | Widget'ın durumunu siyah ölçek, gri tonlama ve görünmez modlar arasında değiştirir. |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |
| Biçim | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |


## Hız Göstergesi {#speedometer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Hız göstergesi](@site/static/img/widgets/speedometer_1_andr.png)   ![Hız göstergesi](@site/static/img/widgets/speedometer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Hız göstergesi](@site/static/img/widgets/speedometer_1_ios.png)   ![Hız göstergesi](@site/static/img/widgets/speedometer_2_ios.png)

</TabItem>

</Tabs>

**Hız göstergesi widget'ı**, *GPS'ten alınan verilere* dayalı olarak mevcut araç hızının grafiksel bir göstergesidir. Hızınız ile izin verilen hız sınırı arasındaki uyumu gerçek zamanlı olarak izlemenizi sağlar. İzin verilen hız sınırı, belirli bir yol bölümü için [OpenStreetMap verileri](https://wiki.openstreetmap.org/wiki/Key:maxspeed) ve OsmAnd [Hız Sınırı Toleransı](../navigation/guidance/voice-navigation.md#speed-limit) ayarı tarafından sağlanır.  

- *Hız göstergesi ayarlarında*, widget'ın uygulama ekranındaki boyutunu (**Yükseklik**) *Küçük*, *Orta* veya *Büyük* olarak seçebilirsiniz.
- *Her zaman* veya *Aşıldığında* seçerek **Hız sınırı uyarısını** ne zaman alacağınızı belirtebilirsiniz.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/speedometer_4_andr.png').default} alt="Hız göstergesi"/></td>
        <td><img src={require('@site/static/img/widgets/speedometer_4_ios.png').default} alt="Hız göstergesi"/></td>
    </tr>
</table>

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_other,shared_string_speedometer"/>* |
|        | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location"/>* *→ Hız göstergesi* |
| Biçim | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,default_speed_system"/>*  |


## Eklenti Widget'ları {#plugin-widgets}

Bu widget'lar, ilgili eklentileriyle birlikte etkinleştirilir ve çalışır.


### Yolculuk Kayıt Widget'ları   {#trip-recording-widgets}

:::note  
Daha ayrıntılı bir açıklamayı burada okuyabilirsiniz: **[<Translate android="true" ids="record_plugin_name"/> eklentisi](../plugins/trip-recording.md)**.  
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Yolculuk kayıt widget'ı](@site/static/img/widgets/wid_trip_rec.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Yolculuk kayıt widget'ı](@site/static/img/widgets/widget_trip_recording-_rec_ios.png)

</TabItem>

</Tabs>

Yolculuk kayıt widget'ları [<Translate android="true" ids="record_plugin_name"/> eklentisine](../plugins/trip-recording.md#widgets) atıfta bulunur. Widget'ları kullanarak rota kaydı hakkında kısa bilgileri ekranda görüntüleyebilirsiniz. Örneğin *Mesafe*, *Süre*, *Yokuş yukarı*, *Yokuş aşağı*, *Maksimum Hız* ve *Ortalama Eğim* (son ikisi yalnızca Android'de mevcuttur).

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_monitoring"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_monitoring"/>* |
| Dokunarak | Rota kaydını başlatır/durdurur veya grafiği görüntüler. |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |


### Harici Sensör Widget'ları {#external-sensors-widgets}

:::note
Harici Sensörler widget'larını harita ekranına eklemek için OsmAnd [Harici Sensörler eklentisini](../plugins/external-sensors.md) etkinleştirin.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Harici sensör widget'ları Android](@site/static/img/widgets/external-sensors-widgets_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Harici sensör widget'ları iOS](@site/static/img/widgets/external-sensors-widgets_ios.png)

</TabItem>

</Tabs>

Widget'lar [Harici sensörler eklentisine](../plugins/external-sensors.md#widgets) atıfta bulunur. Harici sensörlerinizden gelen kısa bilgileri görüntülemek için bunları kullanabilirsiniz, örneğin: **<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*yalnızca Android*), **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/>, <Translate android="true" ids="map_widget_ant_bicycle_dist"/>** ve **<Translate android="true" ids="external_device_characteristic_temperature"/>**. Ayrıca bağlı BLE sensörlerinin **pil seviyesini** doğrudan widget'ta görüntülemek için seçebilirsiniz.  

- Widget eklemek için — OsmAnd Harici Sensörler eklentisini [etkinleştirin](../plugins/index.md#enable--disable).

- Sensör eklemek için seçeneklerden birini seçin:
  - *Menü → Eklentiler → Harici Sensörler → Ayarlar → Yeni sensör eşleştir* yolunu izleyin.
  - *Menü → Ekranı Yapılandır → Bir panel seçin → Widget ekle → Harici Sensörler → Sensör seç → Ayarlar → Yeni sensör eşleştir* yolunu izleyin.

- Harici sensör bağlı olmasa bile widget'ları ekleyin.

- **Tüm eklenen widget'lar** harici sensör bağlı olmasa bile görünürdür.

- Sensör verilerini kaydetmek için [Yolculuk kayıt eklentisini](../plugins/trip-recording.md#recording-settings) kullanın.

- Widget'ta hangi sensörün (aynı türden) gösterileceğini nasıl seçeceğinizi [buradan](../plugins/external-sensors.md#widget-settings) okuyun.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="external_sensor_widgets"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="external_sensors_plugin_name"/>* |
| Dokunarak | Değişiklik yok (*Android*) / Sensör verileri ve Pil seviyesi arasında modu değiştirir (*iOS*). |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |


### Araç Metrikleri Widget'ları {#vehicle-metrics-widgets}


:::note
Araç Metrikleri Widget'larını harita ekranına eklemek için OsmAnd [Araç Metrikleri eklentisini](../plugins/vehicle-metrics.md) etkinleştirin.
:::


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Araç metrikleri widget'ları Android](@site/static/img/widgets/vehicle_metrics_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Araç metrikleri widget'ları iOS](@site/static/img/widgets/vehicle_metrics_ios.png)

</TabItem>

</Tabs>


Widget'lar [Araç Metrikleri eklentisine](../plugins/vehicle-metrics.md#widgets) aittir. Bağlı bir OBD-II tarayıcısından gelen bilgileri görüntülemek için bunları kullanabilirsiniz, örneğin (*14 metrik*): **Emme Sıcaklığı**,&nbsp; **Ortam Sıcaklığı**,&nbsp; **Soğutma Suyu Sıcaklığı**,&nbsp; **Motor Yağı Sıcaklığı**,&nbsp; **Motor Hızı** (*ücretsiz*),&nbsp; **Motor Çalışma Süresi**,&nbsp; **Hesaplanan Motor Yükü**,&nbsp; **Yakıt Basıncı**,&nbsp; **Yakıt Tüketimi**,&nbsp; **Kalan Yakıt**,&nbsp; **Pil Seviyesi**,&nbsp; **Adaptör Voltajı**,&nbsp; **Araç Hızı** (*ücretsiz*) ve **Gaz Kelebeği Konumu**.  

- Araç metrikleri widget'larını harita ekranına eklemek için **Araç Metrikleri eklentisini** [etkinleştirin](../plugins/index.md#enable--disable).
- OBD-II tarayıcı bağlı olmasa bile widget'ları ekleyebilirsiniz.
- Tüm eklenen widget'lar, OBD-II tarayıcı bağlı olsun veya olmasın görünürdür.
- Bir widget'ı düzenlemek için panele eklenen widget'a dokunun, ardından *Ayarlar*'a dokunun veya doğrudan widget alanındaki *Ayarlar simgesine* dokunun.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle →  <Translate android="true" ids="obd_widget_group"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle →  <Translate ios="true" ids="obd_plugin_name"/>* |
| Dokunarak | Değişiklik yok |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |


### Hava Durumu Widget'ları {#weather-widgets}

:::note
Hava Durumu widget'larını harita ekranına eklemek için OsmAnd [Hava Durumu eklentisini](../plugins/weather.md) etkinleştirin.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Hava durumu widget'ı Android](@site/static/img/widgets/weather_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Hava durumu widget'ı iOS](@site/static/img/widgets/weather_widgets_ios.png)

</TabItem>

</Tabs>  

Hava durumu widget'ları, harita üzerindeki merkezi bir nokta için mevcut hava durumu bilgilerini gösterir. Eklentiyle birlikte görüntülendiğinde (*Menü → Hava Durumu*) ekranda otomatik olarak etkinleştirilirler ve günlük kullanım için ana ekrana hangilerini koyacağınızı seçebilirsiniz (*Menü → Ekranı Özelleştir*). Bu konuda daha fazla bilgiyi [Hava Durumu eklentisi](../plugins/weather.md) makalesinde okuyabilirsiniz.

- **Sıcaklık**. <Translate android="true" ids="temperature_widget_desc"/>
- **Hava Basıncı**. <Translate android="true" ids="air_pressure_widget_desc"/>
- **Rüzgar**. <Translate android="true" ids="wind_widget_desc"/>
- **Bulut**. <Translate android="true" ids="clouds_widget_desc"/>
- **Yağış**. <Translate android="true" ids="precipitation_widget_desc"/>

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="shared_string_weather"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="shared_string_weather"/>* |  
| Dokunarak | Hava durumu bilgilerinin ilgili olduğu tarih ve saati bir açılır iletişim kutusunda gösterir. |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |
| Biçim | *Menü → Eklentiler → Hava Durumu → Ayarlar* veya *Menü → Ayarlar → Uygulama Profili → Hava Durumu* |  


### Park Widget'ı {#parking-widget}

:::note
Park widget'larını harita ekranına eklemek için OsmAnd [Park konumu eklentisini](../plugins/parking.md) etkinleştirin.
:::  

![Park widget'ı](@site/static/img/plugins/parking/parking_widget.png)  

Park eklentisi widget'ı, ekranın merkezinden park konumuna olan mesafeyi gösterir. Haritada bir park yeri ayarlamak için, gerekli seviyeye yakınlaştırın, ardından bağlam menüsünü açmak için haritadaki yere uzun dokunun. [Bu ayarları](../plugins/parking.md#set-a-spot) izleyin.  

**Not:** Park Widget'ı yalnızca bir park konumu haritaya eklendiğinde görünür. Kaydedilmiş bir park konumu olmadan widget görünmez olacaktır.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_parking"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="parking_place"/>* |
| Dokunarak | Harita görünümünü park konumuna taşır. |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |
| Biçim | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


### Mapillary Widget'ı {#mapillary-widget}

:::note  
Mapillary widget'ını harita ekranına eklemek için OsmAnd [Mapillary eklentisini](../plugins/mapillary.md) etkinleştirin.  
:::  

![Mapillary widget'ı](@site/static/img/widgets/mapillary_widget.png)

Bu, Mapillary uygulamasına hızlı erişim sağlayan bir Mapillary eklentisi widget'ıdır ve [*sokak seviyesi görüntüleri*](../plugins/mapillary.md#enable-layer) eklemenizi sağlar. Eklenti etkinleştirildiğinde widget otomatik olarak haritaya eklenir.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="mapillary"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="mapillary"/>* |
| Dokunarak | [Mapillary](https://www.mapillary.com/) uygulamasını açar. |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |


### Ses/Video Notları Widget'ı {#audiovideo-notes-widget}

<InfoAndroidOnly />

:::note
Ses/Video Notları widget'larını harita ekranına eklemek için OsmAnd [Ses/Video Notları eklentisini](../plugins/audio-video-notes.md) etkinleştirin.
:::

![Ses-video notları widget'ı](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)  

Bunlar, sesli, görüntülü veya fotoğraf notları almaya başlamak/durdurmak için hızlı erişim sağlayan Ses/video notları eklentisi widget'larıdır.  

Hangi eylemin varsayılan olarak seçileceğini yapılandırabilirsiniz:

- *İstek üzerine*. Varsayılan durum. Her seferinde eylem seçim iletişim kutusu görüntülenir.
- *Ses kaydet* - sesli not kaydeder.
- *Video kaydet* - video kaydetmenizi sağlar.
- *Fotoğraf çek* - fotoğraf çekmenizi sağlar.  

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_av_notes"/>*  |
| Dokunarak | Not almaya başlar / durdurur  |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |


### İzleyici Widget'ı {#tracker-widget}

<InfoAndroidOnly />

:::note
İzleyici widget'ını harita ekranına eklemek için OsmAnd [İzleyici eklentisini](../plugins/osmand-tracker.md) etkinleştirin.
:::  

Eklentinin ve widget'ın çalışması için Google Play veya diğer kaynaklardan [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) uygulamasını yüklemeniz gerekir.  

Bu OsmAnd İzleyici eklentisi widget'ı, OsmAnd İzleyici uygulamasına hızlı erişim sağlamak ve konum bilgilerinizi diğer kullanıcılarla paylaşmak için kullanılır. Uygulama, belirli bir süre içinde seçilen sohbetlere *Canlı Konum* mesajları gönderir, kişi ve grup listesini görüntüler ve konumunuzla ilgili mesajlar için sohbetleri kontrol eder, ardından bunlar OsmAnd'de bir harita üzerinde görüntülenir.  

![İzleyici widget'ı](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="tracker_item"/>* |
| Dokunarak | OsmAnd Online GPS Tracker uygulamasını açar. |


### Geliştirici Widget'ları {#developer-widgets}

:::note
Geliştirici widget'larını harita ekranına eklemek için OsmAnd [OsmAnd geliştirme eklentisini](../plugins/development.md) etkinleştirin.
:::

**Geliştirici widget'ları**, harita [oluşturma hızı](../plugins/development.md#map-rendering-fps-widget) ve sanal kamera konumu parametreleri hakkında bilgi sağlar; bunlar arasında [yakınlaştırma seviyesi](../plugins/development.md#zoom-level), harita merkezine olan [mesafe](../plugins/development.md#distance-to-target), [kamera yüksekliği](../plugins/development.md#camera-elevation) ve [eğim açısı](../plugins/development.md#camera-tilt) bulunur.  

#### Harita Oluşturma FPS'si {#map-rendering-fps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![FPS widget'ı Android](@site/static/img/widgets/fps_widgets_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![FPS widget'ı iOS](@site/static/img/widgets/fps_widget_ios.png)

</TabItem>

</Tabs>

[Harita oluşturma FPS widget'ı](../plugins/development.md#map-rendering-fps-widget), haritanın ve öğelerinin saniyedeki kare (FPS) cinsinden oluşturma hızını gösterir. Daha yüksek bir FPS değeri, daha hızlı oluşturma ve daha akıcı görsel performans anlamına gelir.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="map_widget_rendering_fps"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="developer_widgets,map_widget_rendering_fps"/>* |
| Dokunarak | Değişiklik yok |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |


#### Kamera Widget'ları {#camera-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kamera konumu widget'ları](@site/static/img/widgets/camera_position_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kamera konumu Widget'ları 2](@site/static/img/widgets/camera_position_widgets_2_ios.png)

</TabItem>

</Tabs>

**Kamera widget'ları**, OsmAnd haritası ile dünya yüzeyi arasındaki hizalamayı izlemenizi sağlar.

- [Kamera eğimi](../plugins/development.md#camera-tilt). Kameranın perspektif modundaki eğim açısını gösterir. Varsayılan değer 90°'dir (eğim yok).
- [Kamera Yüksekliği](../plugins/development.md#camera-elevation). Kameranın yüzey seviyesinden yüksekliğini gösterir.
- [Yakınlaştırma seviyesi](../plugins/development.md#zoom-level). <Translate android="true" ids="map_widget_zoom_level_desc"/>
- [Kameradan hedefe olan mesafe](../plugins/development.md#distance-to-target). Kamera ile haritadaki hedef konum arasındaki mesafeyi ölçer.

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="developer_widgets"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Bir panel seçin → Widget ekle → <Translate ios="true" ids="developer_widgets"/>* |
| Dokunarak | Modlar arasında geçiş yapar (*Yakınlaştırma Seviyesi*)  / Değişiklik yok (*Diğerleri*) |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |


#### Kullanılabilir RAM {#available-ram}

<InfoAndroidOnly />

![Ortalama hız widget'ları](@site/static/img/widgets/available_RAM_2_andr.png)

**Kullanılabilir RAM** widget'ı, cihazınızın bellek kullanımını OsmAnd ile ilişkili olarak izlemek için bir araçtır. Uygulama performansını optimize etmeye yardımcı olmak için ayrıntılı veriler sağlar.

- **Uygulama RAM'i Kullanılabilir.** OsmAnd'in performans sorunlarına neden olmadan kullanabileceği RAM miktarını gösterir.

- **Uygulama RAM Kullanımı** — OsmAnd tarafından mevcut RAM tüketimini gösterir.

- **Toplam Uygulama RAM'i** — Hem kullanılan hem de kullanılabilir bellek dahil olmak üzere OsmAnd'e ayrılan toplam belleği gösterir.

> **NOT**. *Toplam kullanılabilir RAM*, cihazınızda çalışan arka plan süreçlerine ve diğer uygulamalara bağlı olarak değişebilir. Bu değerler dinamiktir ve tutarlı ve verimli OsmAnd performansı için bellek kullanımını izlemenin ve yönetmenin bir yolunu sunar.*

| | |
|:------------|:------------|
| Etkinleştir | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Bir panel seçin → Widget ekle → <Translate android="true" ids="developer_widgets"/> → *Kullanılabilir RAM* |
| Dokunarak | Değişiklik yok |
| Uzun dokunuş | [Widget'ın Bağlam menüsünü](../widgets/configure-screen.md#widget-context-menu) açar |


## İlgili Makaleler {#related-articles}

- [Ekranı Yapılandır](./configure-screen.md)
- [Harita düğmeleri](./map-buttons.md)
- [Navigasyon widget'ları](./nav-widgets.md)
- [Yarıçap cetveli ve Cetvel](./radius-ruler.md)
- [İşaretçi widget'ları](./markers.md)
- [Hızlı Eylem](./quick-action.md)