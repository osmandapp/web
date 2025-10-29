---
source-hash: 4e8a3309a2bf429582c639f9c175de6db52d66c53f5483573c9c43e9ddf5a4ad
sidebar_position: 4
title: Araç parametreleri
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


## Genel Bakış

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

OsmAnd'da optimum rota hesaplaması için aşağıdaki araç parametrelerini göz önünde bulundurmalısınız:

1. Aracın [minimum ve maksimum hızı](#road-speeds) olarak [*Varsayılan Hız* veya *Yol Hızları*](#road-speeds) ayarını yapın. Bu, uygulamanın rotayı tamamlamak için gereken süreyi belirlemesine ve farklı yol segmentlerindeki hız sınırlarını göz önünde bulundurarak en iyi rotayı seçmesine yardımcı olacaktır.
2. Motor tarafından kullanılan yakıtın [*tipini*](#fuel-used-by-motor) belirtin. Bu, uygulamanın CO2 emisyonlarını tahmin etmesini sağlayacaktır.
3. [*Deponuzun kapasitesini*](#fuel-tank-capacity) girin; bu, yakıt seviyenizi ve tüketiminizi doğru bir şekilde takip etmenizi sağlar.
4. Aracınızın [*boyut ve ağırlık parametrelerini*](#size-parameters) tanımlayın; bu, uygulamanın optimum rotayı hesaplamasına ve kısıtlamalar nedeniyle yoldaki engellerden kaçınmasına yardımcı olabilir.

OsmAnd uygulamasındaki parametreleri doğru bir şekilde ayarlamak, bir rotada gezinirken sorunlardan kaçınmanıza, araç tipine ve yol kısıtlamalarına göre en uygun olanı seçmenize ve seyahatiniz için süreyi hesaplamanıza yardımcı olacaktır.


## Boyut Parametreleri {#size-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

Araç parametreleri, yolların, köprülerin, feribotların, barajların ve diğer altyapının kullanılabilirliğini belirledikleri için navigasyonu ve rota oluşturmayı etkiler. Bir aracın yüksekliği, genişliği, uzunluğu veya ağırlığı belirli yol kesimleri için izin verilen değerleri aşarsa, OsmAnd navigasyon sistemi yol boyunca engellerden kaçınmak için alternatif bir rota bulacaktır.  

- Ölçü birimleri, *Genel ayarlar → [Birimler ve formatlar](../../personal/profiles.md#units--formats)* bölümünde seçilen ayarlara karşılık gelecektir.
- Araç parametreleri manuel olarak ayarlanabilir.
- Araç ölçüm parametresini manuel olarak seçerseniz, uygulama size hazır listeden en yakın değeri sunacaktır. Bu, hatalardan kaçınmak ve rotayı daha doğru bir şekilde oluşturmak için gereklidir.
- Hazır bir boyut listesinden araç parametrelerini seçebilirsiniz.
- Boyutu ayarlamayın, *Yok*, yani seçilen parametreye herhangi bir kısıtlama uygulanmayacaktır.  

### Sınırlar {#limits}

**1.** [**<Translate android="true" ids="routing_attr_weight_name"/> sınırı**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> Ağırlık parametresi yalnızca [*Araba, Kamyon* ve *Motosiklet*](../../navigation/routing/car-based-routing.md) gibi navigasyon türlerinde mevcuttur.  

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.**  [**<Translate android="true" ids="routing_attr_height_name"/> sınırı**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> Yükseklik parametresi yalnızca *[Araba, Kamyon, Motosiklet](../../navigation/routing/car-based-routing.md)* ve *[Tekne](../../navigation/routing/boat-navigation.md)* gibi navigasyon türlerinde mevcuttur.  

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)  

**3.** [**<Translate android="true" ids="routing_attr_length_name"/> sınırı**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> Uzunluk parametresi yalnızca [*Araba, Kamyon* ve *Motosiklet*](../../navigation/routing/car-based-routing.md) gibi navigasyon türlerinde mevcuttur.  

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**<Translate android="true" ids="routing_attr_width_name"/> sınırı**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> Genişlik parametresi yalnızca *[Araba, Kamyon, Motosiklet](../../navigation/routing/car-based-routing.md)* ve *[Tekne](../../navigation/routing/boat-navigation.md)* gibi navigasyon türlerinde mevcuttur.  

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

**5.** [**Maksimum aks yükü sınırı**](https://wiki.openstreetmap.org/wiki/Key:maxaxleload) - Araç aks ağırlığı kısıtlamalarına sahip yollar ve köprülerden kaçınmak için aracınızın maksimum aks yükünü belirtin. Bu parametre yalnızca [*Kamyon*](../../navigation/routing/car-based-routing.md) gibi navigasyon türlerinde mevcuttur.  

![Navigasyon Ayarları Android](@site/static/img/navigation/max_axle_load.png)

**6.** [**Tam yüklü maksimum ağırlık**](https://wiki.openstreetmap.org/wiki/Key:maxweightrating) - Genel ağırlık kısıtlamalarına sahip yollar ve köprülerden kaçınmak için tam yüklü aracınızın maksimum toplam ağırlığını belirtin. Bu parametre yalnızca [*Kamyon*](../../navigation/routing/car-based-routing.md) gibi navigasyon türlerinde mevcuttur.  

![Navigasyon Ayarları Android](@site/static/img/navigation/max_weight_at_full_load.png)

Araç parametrelerindeki sınırlar, navigasyon ve yol güvenliği için önemli olabilir. Bu kısıtlamalardan bazıları şunları içerebilir:  

1. Belirli kentsel alanlarda hareket eden araçlara yönelik kısıtlamalar.  
2. Köprüler, sınırlı alana sahip tüneller, alçak üst geçitler, karmaşık dönüşler veya diğer yapılar gibi belirli yol kesimlerinde araç hareketine yönelik kısıtlamalar.  
3. Araç aksı başına ağırlık limitleri, kamyonlar için özellikle önemli olabilir.
4. Yüksek sıcaklıklar, ıslak veya karlı yollar, gece veya sınırlı görüş mesafesine sahip hava koşulları gibi belirli koşullarda hareket eden araçlara yönelik kısıtlamalar.


## Yakıt parametreleri {#fuel-parameters}

### Motor Tarafından Kullanılan Yakıt {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon rotası Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon rotası iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

Araç parametrelerinde motor tipini seçerseniz, [Rota Detayları](../setup/route-details.md) bölümündeki grafiğin üzerinde [***CO2 ayak izi verileri***](../../navigation/setup/route-details.md#elevation-info) görüntülenecektir.
Altı yakıt tipi mevcuttur: ***Benzin, Dizel, LPG, CNG, Elektrik,*** ve ***Hibrit***.  

**Uygulanabilirlik:**

**Motor tarafından kullanılan yakıt** ayarı yalnızca *[Araba, Motosiklet ve Kamyon](../../navigation/routing/car-based-routing.md)* gibi araç tabanlı navigasyonlarda mevcuttur.


### Yakıt deposu kapasitesi {#fuel-tank-capacity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>


**Yakıt deposu kapasitesi** parametresi, deponuzun toplam hacmini sağlayarak aracınızın [yakıt seviyesini](../../widgets/info-widgets.md#vehicle-metrics-widgets) ve [tüketimini](../../widgets/info-widgets.md#vehicle-metrics-widgets) daha doğru bir şekilde takip etmenizi sağlar. Varsayılan değer ~50 ***litre***'dir. Yakıt kapasitesi için ölçü birimi, *Menü → Profili yapılandır → Genel ayarlar → Birimler ve Formatlar → Hacim birimi* bölümünde yapılandırılan [Profil (Ayarlar)](../..//personal/profiles.md#units--formats) tarafından belirlenir.

**Uygulanabilirlik:**

**Yakıt deposu kapasitesi** ayarı yalnızca araç tabanlı navigasyonlarda mevcuttur. *Bisiklet*, *At binme*, *Yaya* ve *Kayak* gibi navigasyon türleri için bu parametre Araç Parametrelerinde görüntülenmez.

## Hız parametreleri

### Varsayılan Hız {#default-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon Ayarları](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon Ayarları](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>  

**Varsayılan hız**, bu ulaşım modu için varsayılan hareket hızıdır ([Varsayılan hız limitleri](https://wiki.openstreetmap.org/wiki/Default_speed_limits)). *Yürüme*, *At binme* ve *Bisiklet* profilleri için 0,1 km/saat (mph) ([Birimler ve formatlar](https://osmand.net/docs/user/personal/profiles#units--formats)) eşdeğeri küçük artışlarla, diğer profiller için ise 1 km/saat (1 mph) eşdeğeri artışlarla. Kullanılır:
- [GPX Navigasyonu](../setup/gpx-navigation.md), [Kayak rotaları](../routing/ski-routing.md), [Tekne rotaları](../routing/boat-navigation.md), [Yaya](../routing/pedestrian-routing.md) ve diğer benzer profiller gibi yollardan hız belirlenemediğinde [rota süresini](../../widgets/nav-widgets.md#time-to-intermediate) tahmin etmek için.
- [Sesli anonsların](../guidance/voice-navigation.md) ne zaman etkinleştirileceğini belirlemek için.
- Ortalama hız henüz hesaplanmadıysa, düz çizgi navigasyonu ile Harita işaretleyicileri için tahmini varış zamanını belirlemek için.



Varış zamanını hesaplamak ve uygulamanın tipik olarak kabul ettiği hareket hızına göre (örneğin, araba, toplu taşıma, yaya veya manuel olarak ayarladığınız hız) en uygun rotayı belirlemek için kullanılır.


### Yol Hızları {#road-speeds}


![Navigasyon Ayarları](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

Bazı navigasyon türleri için minimum ve maksimum izin verilen hız ayarlanabilir. Ayarlanırsa, rota motoru aracın veya ulaşım modunun limitten daha hızlı hareket etmeyeceğini ve minimum hızdan daha yavaş hareket etmeyeceğini varsayar.
Örneğin, yakıt tüketiminin ayarlanan **maksimum hızda** optimal olduğu ve motorun daha uzun ama daha hızlı yollardan kaçınarak daha kısa bir rota bulacağı **yakıt verimli** bir rota oluşturmaya olanak tanır.

- **Minimum hız**  
    Ayar, rotadaki tüm yol türleri için minimum sürüş hızını belirler. Önerilen hızı minimum hızdan daha düşük olan yollar için önceliği artırır.  
- **Maksimum hız**  
    Ayar, maksimum sürüş hızını belirler ve olası hızı maksimumdan daha yüksek olan yollar için önceliği azaltır.




## İlgili Makaleler {#related-articles}

- [Rota parametreleri](../routing/osmand-routing.md#routing-types)
- [Navigasyon ayarları](./navigation-settings.md)
- [Sesli komutlar / Bildirimler](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)