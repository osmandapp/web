---
source-hash: c8d86e0d815539ea1395efc415de2d8d02dbf19117cd20b4d4915ea3473d7023
sidebar_position: 7
title: Navigasyon Ayarları
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

Başarılı bir navigasyon için, ihtiyaçlarınıza ve seyahat şeklinize (araba, yaya, at veya kayak) göre uygun ayarları doğru bir şekilde yapılandırmak önemlidir. Bu makale, temel rota parametrelerini, [Sesli komutları](#voice-prompts), [Ekran uyarılarını](#screen-alerts), [Navigasyon sırasında harita davranışını](#map-during-navigation) ve [Rota çizgilerinin görünümünü](#customize-route-line) açıklar. Ayrıca, rotayı etkileyebilecek [Varsayılan hız](#default-speed) ve [Maksimum/minimum hız](#road-speeds), CO2 hesaplaması için [Motor tipi](#fuel-used-by-motor), [Yakıt deposu kapasitesi](#fuel-tank-capacity) ve [Boyut/ağırlık](#size-parameters) gibi araç ayarlarını da detaylandırır. Bu ayarları yapmak, OsmAnd'ı en verimli şekilde kullanmanıza ve gereksiz gecikmeler olmadan hedefinize ulaşmanıza yardımcı olacaktır.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon Ayarları iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### Nasıl Açılır {#how-to-open}

Bu bölüm, seçilen profil için ayarlayabileceğiniz, rota hesaplama ve çizme için gerekli navigasyon ayarlarını sunar. Bu menü, [Rota hazırlığı](../setup/route-navigation.md), [Navigasyon sırasında harita ekranı](../guidance/map-during-navigation.md) ayarlarını içerir ve *Navigasyon ayarları*'nda belirlediğiniz şeyler, [Rota Detayları](../setup/route-details.md)ndaki verilerin doğrudan görüntülenmesini etkiler.

Navigasyon ayarları menüsüne erişmenin üç yolu vardır.

- Ana *Menü → Ayarlar*'a gidin, gerekli *Profil*'i seçin ve *Navigasyon ayarları*'na dokunun.

- Harita ekranındaki *Navigasyon* simgesine dokunun, ardından *Ayarlar simgesi → Navigasyon ayarları*'nı seçin.

- Ana *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*'ya gidin.

:::info
Varsayılan *Haritayı İncele* profilinde navigasyon ayarları bulunmamaktadır.
:::


## Navigasyon Türü {#navigation-type}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png) ![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon Ayarları iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>

Navigasyon, bir seyahatin önemli bir parçasıdır ve *doğru navigasyon türünü* seçmek yolculuğunuzu çok daha kolay hale getirebilir. Seçtiğiniz navigasyon türü, nasıl seyahat ettiğinize ve İnternet bağlantınız olup olmadığına bağlı olabilir.

- **Çevrimiçi navigasyon**
OsmAnd uygulamasının güncel bilgilere ve diğer faktörlere dayanarak bir rota çizmesine olanak tanıyan özel bir yönlendirme sistemi veya web sitesi kullanır. Çevrimiçi en iyi rotayı seçme hakkında [Çevrimiçi yönlendirme](../routing/online-routing.md) makalesinde okuyabilirsiniz. Bu navigasyon türü yalnızca uygulamanın *Android sürümü* için mevcuttur.

- **Çevrimdışı navigasyon**
İnternet erişimi gerektirmez ve bir rota hesaplamak için kullanılabilecek daha geniş bir [navigasyon türü](../routing/osmand-routing.md#routing-types) seçeneği sunar. Bunlar arasında *bisiklet, tekne, araba, yaya, kayak* ve *düz çizgi* bulunur. Şu anda 13 temel yönlendirme türü ve ek yönlendirme fırsatları sağlayan harici bir [BRouter](../routing/brouter.md) yönlendirme türü bulunmaktadır.

Navigasyon türü, rotaları hesaplamak için hangi kuralların kullanılacağını belirler. Belirli bir navigasyon türüne ihtiyacınız varsa, **kendi değiştirilmiş *XML* yönlendirme dosyanızı içe aktarabilirsiniz**. Yönlendirme kuralları hakkında daha fazla bilgiyi [GitHub sayfamızda](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing) okuyabilirsiniz. Ayrıca, XML formatı ve nasıl kullanılacağı hakkında ayrı bir makale olan [Harita Oluşturma stili](../../../technical/osmand-file-formats/osmand-rendering-style.md) de bir rota dosyası oluşturmanıza yardımcı olabilir.


## Rota Parametreleri {#route-parameters}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon Ayarları iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>

**<Translate android="true" ids="route_parameters"/>** uygulama, ulaşım türü, yönlendirme öncelikleri, rota koşulları, rota karmaşıklığı ve kullanıcı tercihleri gibi faktörleri göz önünde bulundurarak bir hedefe ulaşmak için rotayı nasıl hesaplayacağını belirleyen ayarlardır.

*Haritayı İncele* hariç her [profil](../../personal/global-settings.md#default-profile) için OsmAnd, varsayılan olarak en uygun [Navigasyon türünü](#navigation-type) ve ilgili [rota parametrelerini](../routing/osmand-routing.md#routing-types) seçer. Ancak, tercihlerinize ve yaklaşan seyahatin dış koşullarına bağlı olarak istediğiniz türü seçebilir ve parametreleri değiştirebilirsiniz.

Tüm rota parametreleri, belgelemenin ilgili bölümlerinde ayrıntılı olarak açıklanmıştır:
*[Araba yönlendirme (Kamyon, Motosiklet)](../routing/car-based-routing.md), [Bisiklet yönlendirme (MTB)](../routing/bicycle-based-routing.md), [Moped yönlendirme](../routing/moped-routing.md), [Yaya yönlendirme](../routing/pedestrian-routing.md), [Toplu Taşıma yönlendirme](../routing/public-transport-navigation.md), [Atlı yönlendirme](../routing/horse-routing.md), [Kayak yönlendirme](../routing/ski-routing.md), [Tren yönlendirme](../routing/train-routing.md), [Tekne yönlendirme](../routing/boat-navigation.md), [Noktadan noktaya yönlendirme](../routing/direct-to-point-routing.md), [Düz çizgi yönlendirme](../routing/straight-line-routing.md), [Çevrimiçi yönlendirme](../routing/online-routing.md), [BRouter yönlendirme](../routing/brouter.md)*.


### Rotayı Yeniden Hesapla {#recalculate-route}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_route-recalculation1_andr.png)
![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_route-recalculation2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon Ayarları iOS](@site/static/img/navigation/navigation_settings_route-recalculation1_ios.png)
![Navigasyon Ayarları iOS](@site/static/img/navigation/navigation_settings_route-recalculation2_ios.png)

</TabItem>

</Tabs>

**Rota Hesaplama** parametresi, rotadan saptığınızda veya ters yönde sürdüğünüzde hesaplanan rotayı otomatik olarak değiştirir. Her iki durumda da bu ayar, seyahat yönünüzü korumanıza ve yeni bir rota için manuel olarak zaman kaybetmeden hedefinize ulaşmanıza yardımcı olur.

| Parametre | Açıklama | Not |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> sapma durumunda* | <Translate android="true" ids="recalculate_route_distance_promo"/> | [Sesli komutlar](../guidance/voice-navigation.md#voice-settings) açıksa, OsmAnd rotanın yeniden hesaplandığını bildirir. |
| *Ters yönde rotayı yeniden hesapla* | Başlangıç noktasına doğru hareket ederseniz rotanız yeniden hesaplanacaktır. | Bu ayar kapalıyken, başlangıç noktasına hareket, yoldan bir sapma olarak kabul edilmez (hesaplanan rotayı takip ettiği sürece). |


### Geliştirme Ayarları {#development-settings}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *Menü → Ayarlar → uygulama profili → Navigasyon ayarları → Rota parametreleri → Geliştirme*

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *Menü → Ayarlar → uygulama profili → Navigasyon ayarları → Rota parametreleri → Geliştirme*

![Navigasyon Ayarları iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>

**Geliştirme** bölümündeki parametreler esas olarak ileri düzey kullanıcılar içindir ve yalnızca [OsmAnd geliştirme eklentisi](../../plugins/development.md) etkinleştirildiğinde kullanılabilir.

| Parametre | Açıklama |
|:------------|:---------------|
| *Yönlendirme türü* (*Android*) / *Yönlendirme algoritması* (*iOS*) | <ul><li>**A*** 2-fazlı (*Android*) / **A*** (*iOS*), hesaplanan rotanın kalitesini artırmak için varsayılan algoritmaya ek bir faz ekler. Bu seçenek, büyük ve karmaşık yol ağlarında rota bulmak için faydalı olabilir, ancak rota hesaplaması daha uzun sürebilir.</li><li>**A* klasik** (*Android*) / **Otoyol hiyerarşileri** (*iOS*), ana yolları ve otoyolları tercih ederek rota planlamasını optimize eder, rotadaki dönüş ve kavşak sayısını en aza indirir. Özellikle uzun mesafelerde etkilidir.</li><li>**HH (Otoyol Hiyerarşileri) x Java** (*Yalnızca Android*) yol bulmayı optimize etmek için hiyerarşik veri yapılarının uygulanmasına dayanır, çalışma zamanı kısıtlamalarını ve cihaz kaynak tüketimini dikkate alır ve Java platformunda gerçekleştirilir.</li><li>**HH (Otoyol Hiyerarşileri) x C++** (*Yalnızca Android*) C++ programlama dilini kullanarak yol ağı verilerini verimli bir şekilde işleyen ve hiyerarşik veri yapılarını kullanarak optimal rotalar oluşturan bir algoritmadır. Büyük miktarda verinin hızlı işlenmesi için optimize edilmiştir ve birçok yol ağına sahip haritalarda gezinmek için özellikle etkilidir.</li></ul> |
| *GPX yaklaşımı* (*Yalnızca Android*) | <ul><li>**Yönlendirme tabanlı** GPX yaklaşımı **C++ ve Java**'da, GPS izlerini mevcut yol rotalarıyla yaklaştırmak için rota verilerini kullanır, bu da iz doğruluğunu artırır ve iz boyutunu azaltır.</li><li>**Geometri tabanlı** GPX yaklaşımları **C++ ve Java**'da, GPS izlerini hızlı ve doğru bir şekilde yaklaştırmak için geometrik prensiplere dayanır, bu da büyük miktarda verinin verimli bir şekilde işlenmesini sağlar.</li></ul> |
| *Otomatik yakınlaştırma* | <ul><li>**Ayrık**, haritayı birkaç ayrık adımda ölçülen belirli bir detay seviyesine yakınlaştırmanıza olanak tanır.</li><li>**Pürüzsüz**, harita ölçeğinde sarsıntısız veya atlamasız, pürüzsüz animasyon efektleriyle kademeli bir değişiklik sağlar.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*Yalnızca Android*) | Yönlendirme sırasında [OsmAnd Canlı güncellemelerini](../../personal/maps-resources.md#osmand-live) kullanın. Bu seçeneği yalnızca test amaçlı kullanmanızı öneririz. |

<!--
| Parametre | Açıklama | Not |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>* | Yönlendirme sırasında [OsmAnd Canlı güncellemelerini](../../personal/maps-resources.md#osmand-live) kullanmaya izin verir. Bu seçeneği yalnızca test amaçlı kullanmanızı öneririz. |
| *<Translate android="true" ids="use_two_phase_routing"/>* | Hesaplanan rotanın kalitesini artırmak için varsayılan (A*) algoritmaya ek bir faz ekler. Bu seçenek, büyük ve karmaşık yol ağlarında rota bulmak için faydalı olabilir, ancak rota hesaplaması daha uzun sürebilir. |
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/> |
-->


## Sesli Komutlar {#voice-prompts}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Sesli Navigasyon ayarları Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> düğmesi* *(veya <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Profil seç → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Sesli Navigasyon ayarları iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

*[Sesli Komutlar / Bildirimler](./voice-navigation.md)* makalesinin ilk bölümü, sesli komutların nasıl ayrıntılı olarak ayarlanacağını açıklar.

Navigasyon sırasında sesli talimatlar, [seçilen bir rotada gezinirken](../setup/route-navigation.md) sürücü veya yaya olarak hedefinize ulaşmanıza yardımcı olur. Dönüşler, sürüş yönleri, yol işaretleri, hedefinize olan mesafeler ve navigasyonunuzu etkileyebilecek diğer faktörler hakkında bilgi içerirler.

Hedef noktanız olarak bir iz seçerseniz, sesli komutların doğru çalışması için [Yollara iliştir](../setup/gpx-navigation.md#attach-to-the-roads) seçeneğini kullanmanız gerekir.

*Sesli komutlar*, yola odaklanmanızı ve harita veya navigasyon cihazı tarafından dikkatinizin dağılmamasını sağlar. Ayrıca sürüş güvenliğini artırır, bilinmeyen arazide gezinme süresini azaltır ve farklı [rota türleri](../routing/osmand-routing.md#routing-types) için faydalı olabilir.


## Ekran Uyarıları {#screen-alerts}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigasyon Ayarları](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Navigasyon Ayarları](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>

**Ekran uyarısı** navigasyon ayarı, [**Uyarılar Widget'ını**](../../widgets/nav-widgets.md#alert-widget) etkinleştirir. *Detaylar:*

- Yoldaki desteklenen engellerden birine yaklaştığınızda, haritanın sol alt köşesinde bildirimler görünür.
- OsmAnd uygulamasında bulunan [*sesli ve yazılı komutları*](../../navigation/guidance/voice-navigation.md) yapılandırırsanız, daha rahat ve güvenli bir yolculuk yaparsınız.
- Komutların görünümü ve zamanlaması hız ayarlarınıza bağlıdır. Bunları [makalede](../../../technical/algorithms/voice-prompt-triggering.md) bulabilirsiniz.
- *Ekran Uyarıları*'nın davranışı, [Rota boyunca noktaları göster](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route) ayarından da etkilenir.

Navigasyon sırasında uygulama ekranında ***hangi uyarıları görmek istediğinizi seçebilirsiniz***:

- **Hız sınırı** ([OSM Wiki bilgisi](https://wiki.openstreetmap.org/wiki/Speed_limits)). Ekran uyarıları ayarında, *Hız sınırı* yalnızca *Trafik uyarıları* açıkken ekranda görüntülenir. Diğer uyarılar olmadan navigasyon sırasında hız sınırlarını görmek isterseniz, [widget'ı](../../widgets/nav-widgets.md#speed-limit) kullanın.
- **Trafik uyarıları** ([OSM Wiki bilgisi](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). Ek bilgi [Navigasyon sırasında harita ekranı](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings) makalesinde bulunabilir.
- **Yaya geçitleri** ([OSM Wiki bilgisi](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **Hız kameraları** ([OSM Wiki bilgisi](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). OsmAnd'da Hız kamerası ayarı hakkında daha fazla bilgi için [Uyarı Türleri](../../widgets/nav-widgets.md#alert-types) ve *Genel ayarlar* makalesinin [Yasal](../../personal/global-settings.md#legal) bölümünü okuyun.
- **Tüneller** ([OSM Wiki bilgisi](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
Uyarı türleri, seyahat bölgesine bağlı olarak farklı görsel görünümlere sahiptir. OsmAnd, %100 aynı yol işaretlerini sunmayı hedeflemez, ancak bazı benzerliklere işaret eder.
:::


## Navigasyon Sırasında Harita {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*

</TabItem>

</Tabs>

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

**Navigasyon sırasında harita**, konumunuzu belirlemek, rotanızı planlamak ve arazi yönlendirmesi için kullanılır. Navigasyon sırasında, *otomatik merkezleme* ile haritayı görüntüleyebilir, etrafında hareket ettirebilir ve gerekli alanı görmek için *yakınlaştırıp uzaklaştırabilirsiniz*. Harita ayrıca ilgi çekici noktaları, rotaları, hava koşullarını, yol işaretlerini ve gezinmenize yardımcı olacak diğer nesneleri gösteren işaretleyicileri de görüntüleyebilir. Harita *gerçek zamanlı* olarak güncellenebilir ve rota planlamasını etkileyebilecek *güncel bilgileri* gösterir.

Navigasyon sırasında haritanın davranışının nasıl değiştiğini [Navigasyon sırasında harita ekranı](../guidance/map-during-navigation.md) makalesinde öğrenebilirsiniz.

## Rota Çizgisini Özelleştir {#customize-route-line}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*

![Navigasyon Ayarları](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Navigasyon Ayarları](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>

**Rota Çizgisini Özelleştir** ayarı ile navigasyon sırasında haritada görünecek rota çizgisinin görünümünü seçebilirsiniz. *Rengini*, *çizginin genişliğini* ve üzerindeki *dönüş oklarının* gösterimini seçebilirsiniz. Her profil için farklı bir çizgi görünümü seçebilirsiniz. Tüm bu parametreler, *Navigasyon sırasında harita ekranı* makalesinin [Rota çizgisi görünümü](../../navigation/guidance/map-during-navigation.md#route-line-appearance) bölümünde ayrıntılı olarak açıklanmıştır.


## Araç Parametreleri {#vehicle-parameters}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>

OsmAnd'da optimum rota hesaplaması için aşağıdaki araç parametrelerini göz önünde bulundurmalısınız:

1. Aracın [minimum ve maksimum hızı](#road-speeds) olarak [*Varsayılan Hız* veya *Yol Hızları*](#default-speed--road-speeds)nı ayarlayın. Bu, uygulamanın rotayı tamamlamak için gereken süreyi belirlemesine ve farklı yol segmentlerindeki hız sınırlarını göz önünde bulundurarak en iyi rotayı seçmesine yardımcı olacaktır.
2. Motor tarafından kullanılan yakıtın [*tipini*](#fuel-used-by-motor) belirtin. Bu, uygulamanın CO2 emisyonlarını tahmin etmesini sağlayacaktır.
3. Yakıt seviyenizi ve tüketiminizi doğru bir şekilde takip etmek için [*deponuzun kapasitesini*](#fuel-tank-capacity) girin.
4. Aracınızın [*boyut ve ağırlık parametrelerini*](#size-parameters) tanımlayın, bu da uygulamanın optimal rotayı hesaplamasına ve kısıtlamalar nedeniyle yoldaki engellerden kaçınmasına yardımcı olabilir.

OsmAnd uygulamasında parametreleri doğru bir şekilde ayarlamak, bir rotada gezinirken sorunlardan kaçınmanıza, araç tipine ve yol kısıtlamalarına göre en uygun olanı seçmenize ve seyahatiniz için süreyi hesaplamanıza yardımcı olacaktır.


### Boyut Parametreleri {#size-parameters}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

Araç parametreleri, yolların, köprülerin, feribotların, barajların ve diğer altyapının kullanılabilirliğini belirledikleri için navigasyonu ve rota yapısını etkiler. Bir aracın yüksekliği, genişliği, uzunluğu veya ağırlığı belirli yol kesimleri için izin verilen değerleri aşarsa, OsmAnd navigasyon sistemi yol boyunca engellerden kaçınmak için alternatif bir rota bulacaktır.

- Ölçü birimleri, *Genel ayarlar → [Birimler ve formatlar](../../personal/profiles.md#units--formats)* içinde seçilen ayarlara karşılık gelecektir.
- Araç parametreleri manuel olarak ayarlanabilir.
- Araç ölçüm parametresini manuel olarak seçerseniz, uygulama size hazır listeden en yakın değeri sunacaktır. Bu, hataları önlemek ve rotayı daha doğru bir şekilde oluşturmak için gereklidir.
- Hazır boyut listesinden araç parametrelerini seçebilirsiniz.
- Boyutu ayarlamayın, *Yok*, yani seçilen parametre üzerinde hiçbir kısıtlama uygulanmayacaktır.

#### Sınırlar {#limits}

**1.** [**<Translate android="true" ids="routing_attr_weight_name"/> sınırı**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> Ağırlık parametresi yalnızca [*Araba, Kamyon* ve *Motosiklet*](../../navigation/routing/car-based-routing.md) gibi navigasyon türlerinde mevcuttur.

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.** [**<Translate android="true" ids="routing_attr_height_name"/> sınırı**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> Yükseklik parametresi yalnızca *[Araba, Kamyon, Motosiklet](../../navigation/routing/car-based-routing.md)* ve *[Tekne](../../navigation/routing/boat-navigation.md)* gibi navigasyon türlerinde mevcuttur.

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)

**3.** [**<Translate android="true" ids="routing_attr_length_name"/> sınırı**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> Uzunluk parametresi yalnızca [*Araba, Kamyon* ve *Motosiklet*](../../navigation/routing/car-based-routing.md) gibi navigasyon türlerinde mevcuttur.

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**<Translate android="true" ids="routing_attr_width_name"/> sınırı**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> Genişlik parametresi yalnızca *[Araba, Kamyon, Motosiklet](../../navigation/routing/car-based-routing.md)* ve *[Tekne](../../navigation/routing/boat-navigation.md)* gibi navigasyon türlerinde mevcuttur.

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

Araç parametrelerindeki sınırlar, navigasyon ve yol güvenliği için önemli olabilir. Bu kısıtlamalardan bazıları şunları içerebilir:

1. Belirli kentsel alanlarda hareket eden araçlara ilişkin kısıtlamalar.
2. Köprüler, sınırlı alana sahip tüneller, alçak geçitler, karmaşık dönüşler veya diğer yapılar gibi belirli yol kesimlerinde araç hareketine ilişkin kısıtlamalar.
3. Araç aksı başına ağırlık limitleri, özellikle kamyonlar için önemli olabilir.
4. Yüksek sıcaklıklar, ıslak veya karlı yollar, gece veya sınırlı görüş mesafeli hava koşulları gibi belirli koşullarda hareket eden araçlara ilişkin kısıtlamalar.

Bu kısıtlamalar navigasyon için önemli olabilir ve bir rota planlarken dikkate alınmalıdır. Bir araç limitleri aşarsa, yol güvenliği, altyapı hasarı, kaza cezaları ve diğer yasal sonuçlar ortaya çıkabilir. Bu nedenle, sürücülerin rotayı dikkatlice incelemesi ve araçlarının yüksekliğinin limitlere uygun olduğundan emin olması gerekir.


### Yakıt parametreleri {#fuel-parameters}

#### Motor Tarafından Kullanılan Yakıt {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navigasyon rotası Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon rotası iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

Araç parametrelerinde motor tipini seçerseniz, [Rota Detayları](../setup/route-details.md)ndaki grafiğin üzerinde [***CO2 ayak izi verileri***](../../navigation/setup/route-details.md#elevation-info) görüntülenecektir.
Altı yakıt türü mevcuttur: ***Benzin, Dizel, LPG, CNG, Elektrik*** ve ***Hibrit***.

**Uygulanabilirlik:**

**Motor tarafından kullanılan yakıt** ayarı yalnızca *[Araba, Motosiklet ve Kamyon](../../navigation/routing/car-based-routing.md)* gibi araç tabanlı navigasyonlarda mevcuttur.


#### Yakıt deposu kapasitesi {#fuel-tank-capacity}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>




**Yakıt deposu kapasitesi** parametresi, deponuzun toplam hacmini sağlayarak aracınızın yakıt seviyesini ve tüketimini daha doğru bir şekilde takip etmenizi sağlar. Yakıt kapasitesi için ölçü birimi, *Menü → Profili yapılandır → Genel ayarlar → Birimler ve Formatlar → Hacim birimi* içinde yapılandırılan ayarlara göre belirlenir. Birimler ve Formatlar'ı ayarlama hakkında ayrıntılı bilgi için [Profil (Ayarlar)](https://osmand.net/docs/user/personal/profiles#units--formats) makalesine bakın.

OsmAnd, kapasite için aşağıdaki birimleri destekler:

- Galon - **gal**. Bu kısaltma, seçtiğiniz birim tercihlerine bağlı olarak hem **İmparatorluk galonlarını** hem de **ABD galonlarını** temsil etmek için kullanılır.
- Litre - **l**. Kapasite için metrik birim.

**Uygulanabilirlik:**

**Yakıt deposu kapasitesi** ayarı yalnızca araç tabanlı navigasyonlarda mevcuttur. *Bisiklet*, *Atlı gezinti*, *Yaya* ve *Kayak* gibi navigasyon türleri için bu parametre Araç Parametrelerinde görüntülenmez.

Yakıt deponuzun tam kapasitesini girerek, uygulama daha kişiselleştirilmiş bir deneyim sağlayabilir, buna şunlar dahildir:

- Tüketiminize göre kalan yakıtın hassas takibi.
- Depo boyutunuza göre optimize edilmiş yakıt duraklarıyla geliştirilmiş rota planlaması.

Doğru hesaplamalar ve navigasyon önerileri sağlamak için, seçtiğiniz birimin deponuzun ölçüm standardıyla eşleştiğini doğrulayın.


### Varsayılan Hız / Yol Hızları {#default-speed--road-speeds}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navigasyon Ayarları](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon Ayarları](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>

Tüm navigasyon türleri için minimum ve maksimum izin verilen hız, hem varsayılan olarak hem de yola göre, belirli değerlere ([Varsayılan hız sınırları](https://wiki.openstreetmap.org/wiki/Default_speed_limits)) ve araçlar için kısıtlamalara göre farklılık gösterebilir. Hız ayrıca, uygulama ayarlarını maksimum kullanılabilir hale getirmek için belirli artışlarla ayarlanır. *Yürüyüş*, *Atlı gezinti* ve *Bisiklet* profilleri için, 0,1 km/s'ye eşdeğer küçük artışlarla ([Birimler ve formatlar](https://osmand.net/docs/user/personal/profiles#units--formats)), diğer profiller için ise 1 km/s'ye eşdeğer artışlarla.
Hız ayarları, [sesli anonsların](../guidance/voice-navigation.md) ne zaman etkinleştirileceğini belirler.

Bu parametreler, hızın harita verilerinden belirlenemediği durumlarda [varış zamanını](../../widgets/nav-widgets.md#time-to-intermediate) tahmin etmek için hız olarak kullanılır:

- seçilen profil için;
- kullanılan yolların hız sınırı yoksa, bu da yönlendirmeyi etkileyebilir;
- kullanıcı tarafından oluşturulan veya içe aktarılan izler seçiliyse.


#### Varsayılan Hız {#default-speed}

**Varsayılan hız**, önceden ayarlanmış hareket hızıdır. Varış zamanını hesaplamak ve uygulamanın bu ulaşım modu için tipik olarak kabul ettiği hareket hızına göre en uygun rotayı belirlemek için kullanılır. Örneğin, araba, toplu taşıma, yaya veya manuel olarak ayarladığınız hız.


#### Yol Hızları {#road-speeds}

<InfoAndroidOnly />

![Navigasyon Ayarları](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)


<!--
<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navigasyon Ayarları](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon Ayarları](@site/static/img/navigation/navigation_settings_speeds-r_ios.png)

</TabItem>

</Tabs>

:::note
iOS'ta bu ayarlar *Menü → Ayarlar → uygulama profili → Navigasyon ayarları → Rota parametreleri → Yol hızları*'nda mevcuttur.
:::

-->

- **Minimum hız**
Ayar, rotadaki tüm yol türleri için minimum sürüş hızını ayarlar. Önerilen hızı minimum hızdan daha düşük olan yollar için önceliği artırır.
- **Maksimum hız**
Ayar, maksimum sürüş hızını ayarlar ve olası hızı maksimumdan daha yüksek olan yollar için önceliği azaltır.


## Detaylı İz Rehberliği {#detailed-track-guidance}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Yollara iliştir 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png) ![Navigasyon Ayarları Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *Detaylı iz rehberliği*

![Navigasyon Ayarları](@site/static/img/navigation/detailed_track_guidance_1_ios.png) ![Navigasyon Ayarları](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

**Detaylı iz rehberliği** özelliği, **iz tabanlı rotalar** kullanılırken rota navigasyonunun doğruluğunu artırır. Bir izi hedef olarak seçtiğinizde, [İzi takip et](../setup/gpx-navigation.md#follow-track-options) menüsünden [Yollara iliştir](../setup/gpx-navigation.md#attach-to-the-roads) ayarını etkinleştirebilirsiniz. Bu, daha sorunsuz ve daha hassas navigasyon için izin mevcut yollarla hizalanmasını sağlar.

*Detaylı iz rehberliği* kullanmak için iki seçenek vardır:

- **<Translate android="true" ids="ask_every_time"/>** (*varsayılan ayarlar*) – *Yollara iliştir* seçeneği, bir iz tabanlı rota her hesaplandığında [Rota Detayları](../setup/route-details.md) bölümünde görünecektir. Bu, her navigasyon oturumu için yol iliştirmeyi uygulayıp uygulamayacağınıza karar vermenizi sağlar.

- **<Translate android="true" ids="shared_string_always"/>** – Yol iliştirme işlemi, manuel onay gerektirmeden her *izle navigasyon* rotası için otomatik olarak uygulanacaktır.

İz tabanlı navigasyon kullanımı hakkında daha fazla bilgi için [İzle Navigasyon](../setup/gpx-navigation.md) sayfasını ziyaret edin.


## İlgili Makaleler {#related-articles}

- [Rota parametreleri](../routing/osmand-routing.md#routing-types)
- [Rota hazırlığı](../setup/route-navigation.md)
- [İzle navigasyon](../setup/gpx-navigation.md)
- [İşaretleyicilerle navigasyon](../setup/markers-navigation.md)
- [Rota detayları](../setup/route-details.md)
- [Navigasyon sırasında harita ekranı](./map-during-navigation.md)
- [Sesli komutlar / Bildirimler](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Son güncelleme: Nisan 2025*