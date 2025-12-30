---
source-hash: 185b7c5e0a93b9b861468e61e8f217ab08bb36e12bb24b2b361b4275de34e673
sidebar_position: 1
title: Ekranı Yapılandır
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

OsmAnd'daki **Ekranı Yapılandır** menüsü, birden çok panelde widget'lar, düğmeler ve hızlı eylemler ekleyerek ve düzenleyerek harita arayüzünü özelleştirmenize olanak tanır.

Şunları yapabilirsiniz:

- [Bilgilendirici](../widgets/info-widgets.md), [navigasyonel](../widgets/nav-widgets.md) ve [işaretçiyle ilgili](../widgets/markers.md) widget'lar ekleyin.
- [Hızlı Eylemler](../widgets/quick-action.md), [Özel düğmeler](../widgets/quick-action.md#custom-buttons) ve [Varsayılan düğmeler](../widgets/map-buttons.md) ekleyin veya düzenleyin.
- Widget'ları panellerde (üst, alt, sol, sağ, orta) düzenleyin.
- Yan panellerde birden çok **sayfa** oluşturun, widget'ların boyutunu seçin.
- Satır yüksekliğini seçin ve widget simgelerini açıp kapatın.

Tüm widget'lar [profile bağımlıdır](../personal/profiles.md) — her profilin kendi düzeni, sırası, görünürlüğü ve ayarları vardır.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Ekranı yapılandır menüsü](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Ekranı yapılandır menüsü](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Ekranı yapılandır menüsü](@site/static/img/widgets/configure_screen_overview_ios_1.png)  

</TabItem>

</Tabs>


## Widget Panelleri {#widget-panels}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Ekranı yapılandır](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Ekranı yapılandır](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs>

OsmAnd, özelleştirilebilir widget panellerini kullanarak harita arayüzünü düzenlemenize olanak tanır.  
Aşağıdaki panellerde widget'ları ekleyebilir, yeniden sıralayabilir, gruplayabilir ve kaldırabilirsiniz:

- **Üst panel**
- **Alt panel**
- **Sol panel**
- **Sağ panel**

Her panel farklı düzen davranışlarını destekler:

- **Üst ve Alt paneller** widget'ları satırlar halinde görüntüler. Satır başına bir veya iki widget yerleştirebilir ve gerekirse birden çok satır ekleyebilirsiniz.
- **Sol ve Sağ paneller** birden çok sayfayı destekler. Widget'ları ayrı sayfalarda gruplayabilir ve aralarında geçiş yapabilirsiniz.


### Widget Kataloğu {#widgets-catalog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ekranı yapılandır menüsü](@site/static/img/widgets/configure_screen_widgets_panels_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ekranı yapılandır menüsü](@site/static/img/widgets/configure_screen_widgets_panels_ios.png)

</TabItem>

</Tabs>

***Navigasyon widget'ları:***  

- [Kerteriz](../widgets/nav-widgets.md#bearing-widget).  
    Bu set, açısal birimlerde bir hedefe olan mutlak veya göreceli kerterizi gösterir.  
    3 widget dahildir: *Göreceli kerteriz*, *Manyetik kerteriz*, *Gerçek kerteriz*.

- [Yükseklik profili](../widgets/nav-widgets#elevation-widget) (*Yalnızca Üst/Alt*, *Yalnızca Android*).  
    Rota yüksekliğini ve eğimini görüntüler.

- [Şeritler](../widgets/nav-widgets#lanes) (*Yalnızca Üst/Alt*).  
    Görsel şerit rehberliği.

- [Harita işaretçileri çubuğu](../widgets/markers.md#configure-marker-widgets) (*Yalnızca Üst/Alt*).  
    Kaydedilen işaretçilere olan mesafeyi/yönü gösterir.  
    1 veya 2 işaretçi için yapılandırılabilir.

- [Navigasyon noktası](../widgets/nav-widgets.md#navigation-points).  
    Set, bir hedefe kalan mesafeyi, ara noktayı, ara noktaya varış zamanını veya hesaplanan bir rota için seyahat süresini gösterir.  
    4 widget dahildir: [Hedefe mesafe](../widgets/nav-widgets.md#distance-to-destination), [Ara noktaya mesafe](../widgets/nav-widgets.md#distance-to-intermediate), [Ara noktaya süre](../widgets/nav-widgets.md#time-to-intermediate), [Hedefe süre](../widgets/nav-widgets.md#time-to-destination).

- [Rota manevraları](../widgets/nav-widgets.md#next-turn) (*Yalnızca Sol/Sağ panel*).  
    Bu set navigasyon sırasında etkinleştirilir ve bir sonraki manevraya olan mesafeyi ve oku gösterir.  
    3 widget dahildir: *Sonraki dönüş*, *Sonraki dönüş (küçük)*, *İkinci sonraki dönüş*.

- [Hız sınırı](../widgets/nav-widgets.md#speed-limit).  
    Yol için mevcut hız sınırını görüntüler.

- [Hız göstergesi](../widgets/info-widgets.md#speedometer).  
    GPS verilerine dayalı mevcut hızı ve [OpenStreetMap verilerine](https://wiki.openstreetmap.org/wiki/Key:maxspeed) dayalı sınırlı hızı gösterir.

- [Sokak Adı](../widgets/nav-widgets#street-name) (*Yalnızca Üst/Alt*).  
    Mevcut veya yaklaşan sokağı görüntüler.

<br/>

***Bilgilendirici widget'lar:***

- [Rakım](../widgets/info-widgets.md#altitude-widgets).  
    Set, mevcut konum veya mevcut harita merkezi için deniz seviyesinden yüksekliği görüntüler.  
    2 widget dahildir: *Rakım: mevcut konum*, *Yükseklik: harita merkezi*.

- [Ortalama hız](../widgets/info-widgets.md#average-speed).  
    Mevcut seyahatin ortalama hızını gösterir.

- [Pil seviyesi](../widgets/info-widgets.md#battery-level).  
    Cihazın pil seviyesini görüntüler.

- [Koordinatlar widget'ları](../widgets/info-widgets#coordinates-widget) (*Yalnızca Üst/Alt*).  
    Bu set, mevcut coğrafi konumun coğrafi koordinatlarını görüntüler.  
    2 widget dahildir: *Koordinatlar: harita merkezi*, *Koordinatlar: mevcut konum*.

- [Mevcut Hız](../widgets/info-widgets.md#current-speed).  
    GPS sensöründen hızı görüntüler.

- [Mevcut zaman](../widgets/info-widgets.md#current-time).  
    Mevcut sistem saatini görüntüler.

- [Süzülme oranı](../widgets/info-widgets.md#glide-ratio).  
    Widget'lar, hedefe olan süzülme oranını ve mevcut uçuş için ortalama süzülme oranını gösterir.  
    2 widget dahildir: *Hedefe süzülme oranı*, *Ortalama süzülme oranı*.

- [GPS bilgisi](../widgets/info-widgets.md#gps-info) (*Yalnızca Android*).  
    Algılanan uydu sayısını gösterir.

- [Harita işaretçileri](../widgets/markers.md).  
    Set, [listede](https://osmand.net/docs/user/personal/markers#itinerary-list) ilk iki işaretçi için mesafeyi veya tahmini varış zamanını (ETA) gösterir.  
    2 widget dahildir: *İlk işaretçi*, *İkinci işaretçi*.

- [Yarıçap cetveli](../widgets/info-widgets.md#radius-ruler).  
    Konumunuz ile [Yarıçap cetveli aracı](../widgets/radius-ruler.md) ile daire içine alınmış haritadaki bir nokta arasındaki mesafeyi gösterir.

- [Gün doğumu, gün batımı](../widgets/info-widgets.md#sun-position).  
    Haritanın merkezi için bir sonraki gün doğumu veya gün batımı zamanını gösterir.  
    2 widget dahildir: *Gün doğumu*, *Gün batımı*.

<br/>

***Eklenti Tabanlı widget'lar:***  

- [Ses/video notları](../widgets/info-widgets.md#audiovideo-notes-widget).  
    Medya yakalamak için hızlı erişim.  
    4 widget dahildir: *İstek üzerine*, *Ses kaydet*, *Video kaydet*, *Fotoğraf çek*.

- [Geliştirici widget'ları](../widgets/info-widgets.md#developer-widgets).  
    İsteğe bağlı bilgileri görüntüler.  
    5 widget dahildir: *Harita oluşturma FPS'si*, *Kamera eğimi*, *Kamera yüksekliği*, *Yakınlaştırma seviyesi*, *Kameradan hedefe uzaklık*, *Kullanılabilir RAM*.  

- [Harici Sensörler widget'ları](../widgets/info-widgets.md#external-sensors-widgets).  
    Set, BLE/ANT+ sensörlerinden gelen verileri gerçek zamanlı olarak izlemeye yardımcı olur.  
    6 widget dahildir: *Kalp Atış Hızı*, *Bisiklet Gücü* (*Yalnızca Android*), *Bisiklet Kadansı*, *Bisiklet Hızı*, *Bisiklet Mesafesi*, *Sıcaklık*.

- [Mapillary](../widgets/info-widgets.md#mapillary-widget).  
    Sokak seviyesi görüntüleri için Mapillary uygulamasını açar.

- [OsmAnd Tracker durumu](../widgets/info-widgets.md#tracker-widget).  
    [OsmAnd Tracker uygulamasına](https://play.google.com/store/apps/details?id=net.osmand.telegram) hızlı erişim.

- [Park widget'ı](../widgets/info-widgets.md#parking-widget).  
    Ekranın merkezinden kaydedilen park konumuna olan mesafe.

- [Yolculuk kaydı](../widgets/info-widgets.md#trip-recording-widgets).  
    Rota kaydını başlatır ve durdurur ve rota kayıt verilerini görüntüler.  
    4 widget dahildir: *Mesafe*, *Süre*, *Yokuş yukarı*, *Yokuş aşağı*.

- [Hava durumu](../widgets/info-widgets.md#weather-widgets).  
    Ayrıntılı hava durumu bilgilerini görüntüler.  
    5 widget dahildir: *Sıcaklık*, *Hava Basıncı*, *Rüzgar*, *Bulut*, *Yağış*.

:::note Panele bağımlı widget'lar

- Yalnızca **Üst ve Alt panellerde** mevcuttur ve ayrı satırlara yerleştirilmelidir: *Koordinatlar widget'ları, Yükseklik Profili widget'ı, Şeritler widget'ı, Harita işaretçileri çubuğu, Sokak Adı widget'ı*.
- Yalnızca **Sol ve Sağ panellerde** mevcuttur: *Rota manevraları*.

:::


### Satırlar {#rows}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ekranı yapılandır menüsü](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png)  ![Ekranı yapılandır menüsü](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ekranı yapılandır menüsü](@site/static/img/widgets/configure_screen_widgets_rows_1_ios.png)  ![Ekranı yapılandır menüsü](@site/static/img/widgets/configure_screen_widgets_rows_ios.png) 

</TabItem>

</Tabs>



**Satır modu** özelliği, üst ve alt panellere gerektiği kadar satır eklemenize olanak tanır. Satır başına birden çok widget görüntüleyebilir, böylece görünür bilgi miktarını artırabilirsiniz.

***Satırlar nasıl yapılandırılır:***

- **Widget ekle**: *Artı* düğmesine (Android) veya *Widget ekle* (iOS) dokunun, ardından mevcut widget'lar listesinden seçin.
- **Widget'ları yeniden sırala**: Widget'ları yeniden düzenlemek için *Kalem* düğmesine (Android) veya *Düzenle* (iOS) dokunun.
- **Satır ekle**: Widget'larınız için yeni satırlar oluşturmak için *Satır ekle* düğmesine dokunun.
- **Widget'ları taşı**: Widget'ları farklı satırlar arasında sürükleyin.
- **Widget ayarlarına erişin**: Widget ayarlarını açmak için *"i"* simgesine (Android) veya *">"* okuna (iOS) dokunun.
- **Değişiklikleri kaydet**: Düzeni kaydetmek için *Uygula* (Android) veya *Bitti* (iOS) dokunun.


#### Widget Türleri ve Kısıtlamaları {#widget-types-and-restrictions}

Mod, gerektiği kadar bilgi görüntülemek için üst ve alt panellerde **tek bir satıra birden fazla widget** eklemenize olanak tanır.  

- **Karmaşık widget'lar**. Satır başına yalnızca bir karmaşık widget eklenebilir. Bunlar şunları içerir:
    - [Harita işaretçileri çubuğu (*Yalnızca Android*)](../widgets/markers.md#configure-marker-widgets)
    - [Sokak adı](../widgets/nav-widgets#street-name)
    - [Koordinatlar widget'ları](../widgets/info-widgets#coordinates-widget)
    - [Şeritler](../widgets/nav-widgets#lanes)
    - [Yükseklik profili (*Yalnızca Android*)](../widgets/nav-widgets#elevation-widget)
    - [Rota manevraları](../widgets/nav-widgets.md#next-turn)

- **Basit widget'lar**. Tek bir satıra birden çok basit widget eklenebilir. Bu widget'lar *Ad*, *Ölçü birimleri*, *Değer* ve *Simge* görüntüleyebilir. 

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Android widget kenarlığı](@site/static/img/widgets/simple_widgets_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS widget kenarlığı](@site/static/img/widgets/simple_widgets_ios.png) 

</TabItem>

</Tabs>


### Sayfalar {#pages}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> → Düzenle → Sayfa ekle*  

![Widget sayfası](@site/static/img/widgets/widget_page_1_andr.png) ![Widget sayfası](@site/static/img/widgets/widget_page_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> → Düzenle → Sayfa ekle*

![Widget sayfası](@site/static/img/widgets/widget_page_1_ios.png) ![Widget sayfası](@site/static/img/widgets/widget_page_2_ios.png)  

</TabItem>

</Tabs>

Sağ ve sol panellerdeki widget'lar **Sayfalar** halinde gruplandırılabilir. **Sayfalar modu** özelliği, sol ve sağ panellere 5 sayfa eklemenize olanak tanır.

***Satırları nasıl yapılandırılır:***

- **Sayfa Ekle**. Sol/Sağ Panel ayarlarına gidin ve *Düzenle → Sayfa Ekle* öğesine dokunun.
- **Widget'ları Sayfaya göre düzenle**. Bu özellik, navigasyon veya harita tarama gibi farklı görevler için farklı widget setleri gerektiğinde kullanışlıdır.
- Sayfalar, belirli senaryolar için **widget setleri** oluşturmanıza olanak tanır, iş akışını iyileştirir ve dağınıklığı azaltır.


## Widget Ayarları {#widget-settings}

![Ekranı yapılandır menüsü](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![Ekranı yapılandır menüsü](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **Widget boyutu seçenekleri** (*tüm paneller için*):  
    **Üst, Alt, Sol ve Sağ panellerdeki** **Basit widget'ların** boyutunu özelleştirebilirsiniz:

    - **Küçük**. Kompakt ekranlar için idealdir, haritalar için daha fazla ekran alanı sağlar.
    - **Orta** (*varsayılan widget boyutu*). Görünürlük ve alan kullanımını dengeler.
    - **Büyük**. Daha büyük, daha görünür widget bilgileri sağlar.  

2. **Widget simgelerini gizleme** (*üst ve alt paneller için*):

    - Netliği artırır ve önemli veriler için alanı en üst düzeye çıkarır.
    - Özellikle aynı **satırda** birçok widget görüntülerken kullanışlıdır.

3. **Widget metin etiketlerini gizleme**:

    - Kompakt düzenlerde sayısal bilgileri tamamen görünür tutmak için metin etiketlerini otomatik olarak gizler.
    - Alan sınırlı olduğunda temiz ve okunabilir bir widget düzenini korumaya yardımcı olur.   

4. **Farklı satırlar için bireysel boyut** (*tüm paneller için*):

    - Widget'lar, satır ve sütun boyutu ayarlanarak ayrı ayrı boyutlandırılabilir.
    - **NOT:** Bir satır/sütundaki bir widget'ın boyutunu değiştirmek, o satır/sütundaki tüm widget'ları yeniden boyutlandıracaktır.

5. **Widget boyutunu ve simge görünürlüğünü değiştirmek için:**

    - Panele zaten eklediğiniz bir widget'ı seçin.  
    - Widget alanının sağ tarafındaki *Ayarlar* simgesine dokunun.
    - *Boyut* ayarına dokunun ve mevcut boyutlardan birini seçin.
    - *Simgeyi göster* alanında Kapalı konumuna geçin.


## Panelleri Özelleştirme {#panels-customization}

### Widget Bağlam Menüsü {#widget-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widget bağlam menüsü](@site/static/img/widgets/widget_context_menu_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget bağlam menüsü](@site/static/img/widgets/widget_context_menu_ios_new.png)

</TabItem>

</Tabs>

**Widget bağlam menüsü**, widget'ları doğrudan harita ekranından yönetmek ve yapılandırmak için hızlı bir yol sağlar. Haritadan ayrılmadan widget'ların düzenini özelleştirmek için herhangi bir widget'a ***uzun dokunarak*** erişebilirsiniz.


- **Sağa/Sola widget ekle** (yalnızca *Üst ve Alt paneller için*)
    - Yeni widget için mevcut olana göre bir konum seçin.
    - [Mevcut widget'lar](#widgets-catalog) listesinden widget'ı seçin.

- **Yukarı/Aşağı widget ekle** (yalnızca *Sol ve Sağ paneller için*)
    - Yeni widget'ı mevcut widget'ın üstüne mi yoksa altına mı konumlandıracağınızı seçin.
    - Belirtilen konuma eklemek için listedeki gerekli widget'a dokunun.

- **Ayarlar**
    - Görünümünü veya davranışını özelleştirmek için widget'ın ayarlarına (varsa) erişin.

- **Sil**
    - Widget'ı panelden kaldırın.
    - Bir onay istemi, eylemin kasıtlı olmasını sağlar.

- **Haritada izi göster** 
    - [Yolculuk Kaydı](../plugins/trip-recording.md) widget'ları için mevcuttur.
    - Şu anda kaydedilen izinizi haritada görüntüler.

- **Ortalama hızı sıfırla** (*Widget'a özel eylemler örneği*)
    - [Ortalama Hız](../widgets/info-widgets.md#average-speed) widget'ı için kullanılabilir.
    - Bir yolculuk sırasında hız değerini anında sıfırlamak için uzun dokunun.


### Widget Kopyaları {#copies-of-widgets}

*OsmAnd menüsü → Ekranı Yapılandır → Widget'lar → Panel*  

![Widget kopyası](@site/static/img/widgets/widget_dublicate.png)  

OsmAnd, aynı widget'ın birden çok örneğini farklı panellere veya sayfalara eklemenize olanak tanır. Bu özellik, farklı görünümler veya profiller arasında tutarlı bilgilere ihtiyacınız olduğunda özellikle kullanışlıdır.  

***Widget'ları çoğaltma:***

- **Widget'ı ekle**. Şuraya gidin: *OsmAnd menüsü → Ekranı Yapılandır → Widget'lar → Panel →* **Widget** *ekle*.
- **Bağlam menüsünü kullanarak çoğaltın**. Widget'a dokunun ve eylemler listesinden **Çoğalt** öğesini seçin.
- **Alternatif yöntem**. *Mevcut widget'lar* listesinden aynı widget'ı seçin ve *Ekle* öğesine dokunun.


### Taşı veya Sil {#move-or-delete}

*OsmAnd menüsü → Ekranı Yapılandır → Widget'lar → Panel*  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ekranı yapılandır menüsü](@site/static/img/widgets/configure_screen_remove_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ekranı yapılandır menüsü](@site/static/img/widgets/configure_screen_remove_ios.png) 

</TabItem>

</Tabs>



**Düzenle** modunu kullanarak widget'ları uygulama ekranından yeniden düzenleyebilir veya kaldırabilirsiniz.  

***Bir widget'ı taşıma:***

- Şuraya gidin: *OsmAnd Menüsü → Ekranı Yapılandır → Widget'lar → Panel → Düzenle düğmesi*.
- Widget'ın **sağındaki simgeye** uzun dokunun.
- Widget listesindeki gerekli konuma sürükleyin.

***Bir widget'ı silme:***  

- Yukarıdaki adımları izleyin.
- Widget adının solundaki **eksi simgesine** dokunun.
- İstendiğinde silmeyi onaylayın.


## Düğmeler {#buttons}

### Özel Düğmeler {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget sayfası](@site/static/img/widgets/conf_screen_buttons_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget sayfası](@site/static/img/widgets/conf_screen_buttons_2_ios.png)

</TabItem>

</Tabs>

**Hızlı Eylem (Özel düğmeler)**, tüm mevcut [Hızlı eylemlerden](../widgets/quick-action.md#custom-buttons) tek eylemlerin bir listesini eklemenize olanak tanır. Bu eylemler, harita ekranındaki bir veya daha fazla widget düğmesine atanabilir. Özel düğmeler, sık kullanılan eylemlere hızlı erişim sağlar.

### Varsayılan Düğmeler {#default-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget sayfası](@site/static/img/widgets/conf_screen_buttons_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget sayfası](@site/static/img/widgets/conf_screen_buttons_3_ios.png)

</TabItem>

</Tabs>

1. **Varsayılan düğmeler**, harita ekranında hangi önceden ayarlanmış harita düğmelerinin görünür olduğunu özelleştirmenize olanak tanır. Aşağıdaki düğmeleri gizlemeyi veya göstermeyi seçebilirsiniz:

    - [3B mod](../widgets/map-buttons.md#3d-mode). iOS için düğme her zaman kullanılabilir. Android için listede görünür ve harita oluşturma motoru [Sürüm 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) seçilirse ayar için kullanılabilir.

    - [Pusula](../widgets/map-buttons.md#display-options). Haritanın cihazda nasıl yönlendirildiğini gösterir.  
    3 görünüm: *Her zaman görünür*, *Her zaman gizli*, *Harita döndürülürse görünür*.

    - [Haritayı yapılandır](../map/configure-map-menu.md). Haritanın stilini, katmanlarını ve ek ayarlarını değiştirmek için seçeneklere erişin.

    - [Menü](../widgets/map-buttons.md#main-menu). Tüm özelliklere erişmek için ana uygulama menüsünü açar.

    - [Konumum](../widgets/map-buttons.md#my-location-and-zoom). Haritayı mevcut konumunuza ortalar.

    - [Navigasyon](../widgets/map-buttons.md#directions). Rota planlama ve navigasyonu başlatmak için gereklidir.

    - [Ara](../widgets/map-buttons.md#search). Konumları bulmak için arama aracını açar.

    - [Yakınlaştır / Uzaklaştır](../widgets/map-buttons.md#my-location-and-zoom). Haritanın yakınlaştırma seviyesini daha fazla veya daha az ayrıntı göstermek için ayarlar.

2. Varsayılan düğmeler ekranındaki **üç nokta menüsü** aşağıdaki eylemleri içerir:

    - *Varsayılana sıfırla*. Düğme ayarlarını orijinal görünümlerine döndürmenize olanak tanır.
    - *Başka bir profilden kopyala*. Sunulan listeden hangi profilden düğme ayarlarını kopyalamak istediğinizi seçin.

3. **Varsayılan düğme görünümü** (*Yalnızca Android*), bu tür düğmeler için çeşitli özelleştirme seçenekleri sunar. Bir düğmenin görünümünü değiştirmek için listeden gerekli düğmeye dokunun ve [Görünüm](#button-appearance) seçeneğini seçin.


### Düğme Görünümü {#button-appearance}

<InfoAndroidOnly/>

![Düğme Görünümü](@site/static/img/widgets/button_appearance_settings_andr.png)

*Düğme görünümü* özelliği, harita arayüzünüzdeki düğmelerin görünümünü tamamen özelleştirmenizi sağlar. Bu özelleştirme seçenekleri hem *Hızlı Eylem (Özel düğmeler)* hem de *Varsayılan düğmeler* için mevcuttur, harita arayüzünün görünümü üzerinde kapsamlı kontrol sağlar ve düğme tasarımında hassas ayarlamalar yapılmasına olanak tanır.

***Özelleştirme seçenekleri***:

- **Simge**. Önceden eklediğiniz eylemleri temsil eden simgeler listesinden seçim yapın, işlevleri bir bakışta tanımlamayı kolaylaştırın.
- **Köşe yarıçapı**. Düğmenin şeklini değiştirmek için bu ayarı yapın, keskin, kare köşelerden pürüzsüz, yuvarlak kenarlara kadar.
- **Boyut**. Ekranınıza en uygun ve gerektiği gibi öne çıkan düğme boyutunu seçin. *Varsayılan düğmeler* için boyutlar önceden ayarlanmıştır ve ayarlanamaz.
- **Arka plan opaklığı**. Düğmenin arka planının görünürlüğünü kontrol edin. Tamamen görünür veya kısmen şeffaf olarak ayarlayabilir veya yalnızca çerçeve gölgesini ve simgeyi görüntüleyebilirsiniz.


## Diğer {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other"/>*

![Widget sayfası](@site/static/img/widgets/conf_screen_other_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Diğer*

![Widget sayfası](@site/static/img/widgets/conf_screen_other_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="display_position"/> / <Translate ios="true" ids="position_on_map"/>](#display-position-location-position-on-screen). [⬇](#display-position-location-position-on-screen)
- [Dokunarak mesafe](../widgets/radius-ruler.md#distance-by-tap). Konumunuzdan seçilen noktaya olan mesafeyi ölçme yeteneği verir.
- [Hız göstergesi](../widgets/info-widgets.md#speedometer). GPS verilerine dayalı mevcut hızı ve [OpenStreetMap verilerine](https://wiki.openstreetmap.org/wiki/Key:maxspeed) dayalı sınırlı hızı gösterir. Görüntülenen veriler ayrıca OsmAnd'ın [Hız Sınırı Toleransı](../navigation/guidance/voice-navigation.md#speed-limit) ayarına da bağlıdır.


### Konumu Görüntüle (Ekrandaki konum konumu) {#display-position-location-position-on-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widget sayfası](@site/static/img/widgets/conf_screen_display_position_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget sayfası](@site/static/img/widgets/conf_screen_display_position_ios.png)

</TabItem>

</Tabs>

> *Ekrandaki konum konumu*, OsmAnd'ın iOS sürümündeki bu ayarın adıdır.  

OsmAnd haritasında imlecin *[Konumum](../map/interact-with-map.md#my-location-and-zoom)* konumunu ayarlamanıza olanak tanır. Üç seçenek mevcuttur:  

- **<Translate android="true" ids="position_on_map_center"/>**. İmleç her zaman ekranın ortasında konumlandırılır.
- **<Translate android="true" ids="position_on_map_bottom"/>**. *Konumum* ekranın ortasının biraz altına yerleştirilir. Bu mod, hareketinizin önünde daha fazla harita bilgisi görmenizi sağlar, bu da navigasyon sırasında kullanışlıdır.
- **<Translate android="true" ids="shared_string_automatic"/>**. *Konumum*'u *[Harita yönü](../map/interact-with-map.md#map-orientation-modes)*'na bağlı olarak yerleştirir (*Alt* - hareket yönü için, *Merkez* - diğer tüm durumlar için).


## Eylemler {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*  

![Widget sayfası](@site/static/img/widgets/widget_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Herhangi bir panel*

![Widget sayfası](@site/static/img/widgets/widget_actions_ios.png)  

</TabItem>

</Tabs>

Ekranı Yapılandır'daki ek eylemlere erişim şunlardır:

- *Android*. Ekranı Yapılandır'da ekranın altındaki *Eylemler* bölümünde bulunur: *Menü → Ekranı Yapılandır → Eylemler*.
- *Android / iOS*. Her Panel'in ekranlarında, ekranın sağ üst köşesindeki *üç nokta menüsünde* bulunur.

Mevcut eylemler:

- **Varsayılana sıfırla**. Bu özellik, baştan başlamak veya OsmAnd'ı başlatırken yalnızca önceden ayarlanmış olanları kullanmak isterseniz tüm ayarları varsayılan değerlere sıfırlamanıza olanak tanır.
- **Başka bir profilden kopyala**. Bu özellik, başka bir profilden ayarları hızlı bir şekilde içe aktarmanıza, listeden gerekli olanları seçmenize ve kopyalamanıza olanak tanır.


## Profili Değiştir {#switch-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ekranı yapılandır menüsü](@site/static/img/widgets/configure_screen_switch_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ekranı yapılandır menüsü](@site/static/img/widgets/configure_screen_switch_ios.png)

</TabItem>

</Tabs>

- **Android** cihazlar için, Ekranı Yapılandır ana ekranının üst kısmında bulunan profil simgelerini kullanarak profilleri değiştirebilirsiniz.  
- Bir **iOS** cihazı kullanıyorsanız, Ekranı Yapılandır ana ekranının üst köşesindeki profil simgesine dokunun ve etkinleştirmek için listeden gerekli profili seçin.  

**Not alın**: *Profili değiştir seçeneği* mevcut tüm profilleri değil, yalnızca Ayarlar menüsünde *açık* olanları görüntüler.


## İlgili Makaleler {#related-articles}

- [Harita düğmeleri](./map-buttons.md)
- [Bilgilendirici widget'lar](./info-widgets.md)
- [Navigasyon widget'ları](./nav-widgets.md)
- [Yarıçap cetveli ve Cetvel](./radius-ruler.md)
- [İşaretçi widget'ları](./markers.md)
- [Hızlı Eylem](./quick-action.md)