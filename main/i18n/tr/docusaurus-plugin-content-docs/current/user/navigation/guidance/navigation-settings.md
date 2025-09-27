---
source-hash: f9e38e1def2598883a41d8eb5b283c10c5578edca311237ba2238da14c92eecd
sidebar_position: 1
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

Başarılı bir navigasyon için, ihtiyaçlarınıza ve seyahat şeklinize (araba, yaya, at veya kayak) göre uygun ayarları doğru bir şekilde yapılandırmak önemlidir. Bu makale, temel rota parametrelerini, [Sesli komutları](#voice-prompts), [Ekran uyarılarını](#screen-alerts), [Navigasyon sırasında harita davranışını](#map-during-navigation) ve [Rota çizgilerinin görünümünü](#customize-route-line) açıklar. Ayrıca varsayılan hız, CO2 hesaplaması için motor tipi, yakıt deposu kapasitesi ve boyut/ağırlık sınırlamaları gibi [Araç Ayarlarını](#vehicle-parameters) detaylandırır. Bu ayarları yapmak, OsmAnd'ı en verimli şekilde kullanmanıza ve gereksiz gecikmeler olmadan hedefinize ulaşmanıza yardımcı olacaktır.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon Ayarları iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### Nasıl Açılır {#how-to-open}

Bu bölüm, seçilen profil için ayarlayabileceğiniz, bir rotayı hesaplamak ve çizmek için gerekli navigasyon ayarlarını sunar. Bu menü, [Rota hazırlığı](../setup/route-navigation.md), [Navigasyon sırasında harita ekranı](../guidance/map-during-navigation.md) ve *Navigasyon ayarlarında* doğrudan ayarladığınız şeylerin [Rota Detayları](../setup/route-details.md) içindeki verilerin görüntülenmesini etkilediği ayarları içerir.

Navigasyon ayarları menüsüne erişmek için üç yol vardır.

- Ana *Menü → Ayarlar*'a gidin, gerekli *Profili* seçin ve *Navigasyon ayarları*'na dokunun.

- Harita ekranındaki *Navigasyon* simgesine dokunun, ardından *Ayarlar simgesi → Navigasyon ayarları*'nı seçin.

- Ana *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*'ye gidin.

:::info
Varsayılan *Haritaya Göz At* profilinin navigasyon ayarları yoktur.
:::


## Navigasyon Türü {#navigation-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png) ![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon Ayarları iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>

Navigasyon, bir seyahatin önemli bir parçasıdır ve *doğru navigasyon türünü* seçmek yolculuğunuzu çok daha kolay hale getirebilir. Seçtiğiniz navigasyon türü, nasıl seyahat ettiğinize ve İnternet bağlantınız olup olmadığına bağlı olabilir.

- **Çevrimiçi navigasyon**
OsmAnd uygulamasının mevcut bilgilere ve diğer faktörlere dayanarak bir rota çizmesini sağlayan özel bir yönlendirme sistemi veya web sitesi kullanır. En iyi çevrimiçi rotayı seçme hakkında [Çevrimiçi yönlendirme](../routing/online-routing.md) makalesinde okuyabilirsiniz. Bu navigasyon türü yalnızca uygulamanın *Android sürümü* için mevcuttur.

- **Çevrimdışı navigasyon**
İnternet erişimi gerektirmez ve bir rotayı hesaplamak için kullanılabilecek daha geniş bir [navigasyon türü](../routing/osmand-routing.md#routing-types) seçeneği sunar. Bunlar arasında *bisiklet, tekne, araba, yaya, kayak* ve *düz çizgi* bulunur. Şu anda 13 temel yönlendirme türü ve ek yönlendirme fırsatları sağlayan harici bir [BRouter](../routing/brouter.md) yönlendirme türü bulunmaktadır.

Navigasyon türü, rotaları hesaplamak için hangi kuralların kullanılacağını belirler. Belirli bir navigasyon türüne ihtiyacınız varsa, **kendi değiştirilmiş *XML* yönlendirme dosyanızı içe aktarabilirsiniz**. Yönlendirme kuralları hakkında daha fazla bilgiyi [GitHub sayfamızda](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing) okuyun. XML formatı ve nasıl kullanılacağı hakkında ayrı bir makale olan [Harita Oluşturma stili](../../../technical/osmand-file-formats/osmand-rendering-style.md), bir rota dosyası oluşturmanıza yardımcı olabilir.


## Rota Parametreleri {#route-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon Ayarları iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>

**<Translate android="true" ids="route_parameters"/>**, uygulamanın bir hedefe ulaşmak için bir rotayı nasıl hesaplayacağını belirleyen ayarlardır; ulaşım türü, yönlendirme öncelikleri, rota koşulları, rota karmaşıklığı ve kullanıcı tercihleri gibi faktörleri dikkate alır.

*Haritaya Göz At* hariç her [profil](../../personal/global-settings.md#default-profile) için OsmAnd, varsayılan olarak en uygun [Navigasyon türünü](#navigation-type) ve ilgili [rota parametrelerini](../routing/osmand-routing.md#routing-types) seçer. Ancak, tercihlerinize ve yaklaşan seyahatin dış koşullarına bağlı olarak istediğiniz türü seçebilir ve parametreleri değiştirebilirsiniz.

Tüm rota parametreleri, belgelemenin ilgili bölümlerinde ayrıntılı olarak açıklanmıştır:
*[Araba yönlendirme (Kamyon, Motosiklet)](../routing/car-based-routing.md), [Bisiklet yönlendirme (MTB)](../routing/bicycle-based-routing.md), [Moped yönlendirme](../routing/moped-routing.md), [Yaya yönlendirme](../routing/pedestrian-routing.md), [Toplu Taşıma yönlendirme](../routing/public-transport-navigation.md), [Atlı yönlendirme](../routing/horse-routing.md), [Kayak yönlendirme](../routing/ski-routing.md), [Tren yönlendirme](../routing/train-routing.md), [Tekne yönlendirme](../routing/boat-navigation.md), [Noktadan noktaya yönlendirme](../routing/direct-to-point-routing.md), [Düz çizgi yönlendirme](../routing/straight-line-routing.md), [Çevrimiçi yönlendirme](../routing/online-routing.md), [BRouter yönlendirme](../routing/brouter.md)*.


### Rotayı Yeniden Hesapla {#recalculate-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_route-recalculation1_andr.png)
![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_route-recalculation2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigasyon Ayarları iOS](@site/static/img/navigation/navigation_settings_route-recalculation1_ios.png)
![Navigasyon Ayarları iOS](@site/static/img/navigation/navigation_settings_route-recalculation2_ios.png)

</TabItem>

</Tabs>

**Rota Hesaplama** parametresi, rotadan saptığınızda veya ters yönde sürdüğünüzde hesaplanan rotayı otomatik olarak değiştirir. Her iki durumda da, bu ayar seyahat yönünüzü korumanıza ve yeni bir rota aramak için manuel olarak zaman kaybetmeden hedefinize ulaşmanıza yardımcı olur.

| Parametre | Açıklama | Not |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> sapma durumunda* | <Translate android="true" ids="recalculate_route_distance_promo"/> | [Sesli komutlar](../guidance/voice-navigation.md#voice-settings) açıksa, OsmAnd rotanın yeniden hesaplandığını duyurur. |
| *Ters yönde rota yeniden hesapla* | Başlangıç noktasına doğru hareket ederseniz rotanız yeniden hesaplanacaktır. | Bu ayar kapalıyken, başlangıç noktasına hareket, yoldan sapma olarak kabul edilmez (hesaplanan rotayı takip ettiği sürece). |


### Geliştirme Ayarları {#development-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *Menü → Ayarlar → uygulama profili → Navigasyon ayarları → Rota parametreleri → Geliştirme*

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *Menü → Ayarlar → uygulama profili → Navigasyon ayarları → Rota parametreleri → Geliştirme*

![Navigasyon Ayarları iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>

**Geliştirme** bölümündeki parametreler esas olarak ileri düzey kullanıcılar içindir ve yalnızca [OsmAnd geliştirme eklentisi](../../plugins/development.md) etkinleştirildiğinde kullanılabilir.

| Parametre | Açıklama |
|:------------|:---------------|
| *Yönlendirme türü* (*Android*) / *Yönlendirme algoritması* (*iOS*) | <ul><li>**A*** 2 fazlı (*Android*) / **A*** (*iOS*), hesaplanan rotanın kalitesini artırmak için varsayılan algoritmaya ek bir faz ekler. Bu seçenek, büyük ve karmaşık yol ağlarında rota bulmak için faydalı olabilir, ancak rota hesaplaması daha uzun sürebilir.</li><li>**A* klasik** (*Android*) / **Otoyol hiyerarşileri** (*iOS*), ana yolları ve otoyolları tercih ederek rota planlamasını optimize eder, rotadaki dönüş ve kavşak sayısını en aza indirir. Özellikle uzun mesafelerde etkilidir.</li><li>**HH (Otoyol Hiyerarşileri) x Java** (*Yalnızca Android*), çalışma zamanı kısıtlamalarını ve cihaz kaynak tüketimini dikkate alarak bir harita üzerinde yol bulmayı optimize etmek için hiyerarşik veri yapılarının uygulanmasına dayanır ve Java platformunda gerçekleştirilir.</li><li>**HH (Otoyol Hiyerarşileri) x C++** (*Yalnızca Android*), yol ağı verilerini verimli bir şekilde işlemek ve hiyerarşik veri yapılarını kullanarak optimal rotalar oluşturmak için C++ programlama dilini kullanan bir algoritmadır. Büyük miktarda verinin hızlı işlenmesi için optimize edilmiştir ve birçok yol ağına sahip haritalarda gezinmek için özellikle etkilidir.</li></ul> |
| *GPX yaklaşımı* (*Yalnızca Android*) | <ul><li>**Yönlendirme tabanlı** GPX yaklaşımı **C++ ve Java**'da, GPS izlerini mevcut yol rotalarıyla yaklaştırmak için rota verilerini kullanır, bu da iz doğruluğunu artırır ve iz boyutunu azaltır.</li><li>**Geometri tabanlı** GPX yaklaşımları **C++ ve Java**'da, GPS izlerini hızlı ve doğru bir şekilde yaklaştırmak için geometrik prensiplere dayanır, bu da büyük miktarda verinin verimli işlenmesini sağlar.</li></ul> |
| *Otomatik yakınlaştırma* | <ul><li>**Ayrık**, haritayı birkaç ayrık adımda ölçülen belirli bir ayrıntı düzeyine yakınlaştırmanıza olanak tanır.</li><li>**Pürüzsüz**, harita ölçeğinde sarsıntısız veya atlamasız, pürüzsüz animasyon efektleriyle kademeli bir değişiklik sağlar.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*Yalnızca Android*) | Yönlendirme sırasında [Canlı güncellemeleri](../../personal/maps-resources.md#live-updates) kullanın. Bu seçeneği yalnızca test amaçlı kullanmanızı öneririz. |

<!--
| Parametre | Açıklama | Not |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>* | Yönlendirme sırasında [Canlı güncellemeleri](../../personal/maps-resources.md#live-updates) kullanmaya izin verir. Bu seçeneği yalnızca test amaçlı kullanmanızı öneririz. |
| *<Translate android="true" ids="use_two_phase_routing"/>* | Hesaplanan rotanın kalitesini artırmak için varsayılan (A*) algoritmaya ek bir faz ekler. Bu seçenek, büyük ve karmaşık yol ağlarında rota bulmak için faydalı olabilir, ancak rota hesaplaması daha uzun sürebilir. |
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/> |
-->


## Sesli Komutlar {#voice-prompts}

<Tabs groupId="operating-systems" queryString="current-os">

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

Navigasyon sırasında sesli talimatlar, seçilen bir rotada gezinirken sürücü veya yaya olarak hedefinize ulaşmanıza yardımcı olur. Dönüşler, sürüş yönleri, yol işaretleri, hedefinize olan mesafeler ve navigasyonunuzu etkileyebilecek diğer faktörler hakkında bilgi içerirler.

Hedef noktanız olarak bir iz seçerseniz, sesli komutların doğru çalışması için [Yollara Bağla](../setup/gpx-navigation.md#attach-to-the-roads) seçeneğini kullanmanız gerekir.

*Sesli komutlar*, yola odaklanmanızı ve harita veya navigasyon cihazı tarafından dikkatinizin dağılmamasını sağlar. Ayrıca sürüş güvenliğini artırır, tanıdık olmayan arazide gezinmek için gereken süreyi azaltır ve farklı [rota türleri](../routing/osmand-routing.md#routing-types) için faydalı olabilir.


## Ekran Uyarıları {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigasyon Ayarları](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Navigasyon Ayarları](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>

**Ekran uyarısı** navigasyon ayarı, [**Uyarılar Widget'ını**](../../widgets/nav-widgets.md#alert-widget) etkinleştirir. *Detaylar:*

- Yoldaki desteklenen engellerden birine yaklaştığınızda, haritanın sol alt köşesinde bildirimler görünür.
- OsmAnd uygulamasında bulunan [*sesli ve yazılı komutları*](../../navigation/guidance/voice-navigation.md) yapılandırırsanız, daha konforlu ve güvenli bir yolculuk yaparsınız.
- Komutların görünümü ve zamanlaması hız ayarlarınıza bağlıdır. Bunları [makalede](../../../technical/algorithms/voice-prompt-triggering.md) bulabilirsiniz.
- *Ekran Uyarılarının* davranışı, [Rota boyunca noktaları göster](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route) ayarından da etkilenir.

Navigasyon sırasında uygulama ekranında görmek istediğiniz ***uyarıları seçebilirsiniz***:

- **Hız sınırı** ([OSM Wiki bilgisi](https://wiki.openstreetmap.org/wiki/Speed_limits)). Ekran uyarıları ayarında, *Hız sınırı* yalnızca *Trafik uyarıları* açıkken ekranda görüntülenir. Diğer uyarılar olmadan navigasyon sırasında hız sınırlarını görmek isterseniz, [widget'ı](../../widgets/nav-widgets.md#speed-limit) kullanın.
- **Trafik uyarıları** ([OSM Wiki bilgisi](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). Ek bilgi [Navigasyon sırasında harita ekranı](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings) makalesinde bulunabilir.
- **Yaya geçitleri** ([OSM Wiki bilgisi](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **Hız kameraları** ([OSM Wiki bilgisi](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). OsmAnd'daki Hız kamerası ayarı hakkında daha fazla bilgi için [Uyarı Türleri](../../widgets/nav-widgets.md#alert-types) ve *Genel ayarlar* makalesinin [Yasal](../../personal/global-settings.md#legal) bölümünü okuyun.
- **Tüneller** ([OSM Wiki bilgisi](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
Uyarı türlerinin, seyahat bölgesine bağlı olarak farklı görsel görünümleri vardır. OsmAnd, %100 aynı yol işaretlerini sunmayı hedeflemez, ancak bazı benzerliklere işaret eder.
:::


## Navigasyon Sırasında Harita {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*

</TabItem>

</Tabs>

![Navigasyon Ayarları Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

**Harita, navigasyon sırasında** konumunuzu belirlemek, rotanızı planlamak ve arazi yönlendirmesi için kullanılır. Navigasyon sırasında, haritayı *otomatik merkezleme* ile görüntüleyebilir, etrafında hareket ettirebilir ve gerekli alanı görmek için *yakınlaştırıp uzaklaştırabilirsiniz*. Harita ayrıca ilgi çekici noktaları, rotaları, hava koşullarını, yol işaretlerini ve gezinmenize yardımcı olacak diğer nesneleri gösteren işaretçileri de görüntüleyebilir. Harita *gerçek zamanlı* olarak güncellenebilir ve rota planlamasını etkileyebilecek *güncel bilgileri* görüntüler.

Navigasyon sırasında haritanın davranışının nasıl değiştiğini [Navigasyon sırasında harita ekranı](../guidance/map-during-navigation.md) makalesinde öğrenebilirsiniz.

## Rota Çizgisini Özelleştir {#customize-route-line}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*

![Navigasyon Ayarları](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Navigasyon Ayarları](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>

**Rota Çizgisini Özelleştir** ayarı ile navigasyon sırasında haritada görünecek rota çizgisinin görünümünü seçebilirsiniz. *Rengi*, *çizginin genişliğini* ve üzerindeki *dönüş oklarının* gösterimini seçebilirsiniz. Her profil için farklı bir çizgi görünümü seçebilirsiniz. Tüm bu parametreler, *Navigasyon sırasında harita ekranı* makalesinin [Rota çizgisi görünümü](../../navigation/guidance/map-during-navigation.md#route-line-appearance) bölümünde ayrıntılı olarak açıklanmıştır.


## Araç Parametreleri {#vehicle-parameters}

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

OsmAnd'ın en uygun rotayı hesaplamasını sağlamak için, aracınızın hız, boyutlar, ağırlık ve yakıt tipi gibi parametrelerini yapılandırmak çok önemlidir. Bu, uygulamanın seyahat süresini doğru bir şekilde tahmin etmesine, yol kısıtlamalarından kaçınmasına ve yakıt tüketimini izlemesine olanak tanır. Bu, [Araç Parametreleri](./vehicle-parameters.md) hakkındaki tam kılavuzumuzda açıklanmıştır.


## Detaylı İz Rehberliği {#detailed-track-guidance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Yollara Bağla 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png) ![Navigasyon Ayarları Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *Detaylı iz rehberliği*

![Navigasyon Ayarları](@site/static/img/navigation/detailed_track_guidance_1_ios.png) ![Navigasyon Ayarları](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

**Detaylı iz rehberliği** özelliği, **iz tabanlı rotalar** kullanırken rota navigasyonunun doğruluğunu artırır. Hedef olarak bir iz seçtiğinizde, [İzi takip et](../setup/gpx-navigation.md#follow-track-options) menüsünden [Yollara Bağla](../setup/gpx-navigation.md#attach-to-the-roads) ayarını etkinleştirebilirsiniz. Bu, izin mevcut yollarla hizalanmasını sağlar, böylece navigasyon, kavşaklar, dönüşler, hız sınırları, dönüş şeritleri ve yolların sokak adları hakkında kesin talimatlar sağlayacaktır.

*Detaylı iz rehberliğini* kullanmak için iki seçenek vardır:

- **<Translate android="true" ids="ask_every_time"/>** (*varsayılan ayarlar*) – *Yollara Bağla* seçeneği, iz tabanlı bir rota her hesaplandığında [Rota Detayları](../setup/route-details.md) bölümünde görünecektir. Bu, her navigasyon oturumu için yol bağlantısını uygulayıp uygulamayacağınıza karar vermenizi sağlar.

- **<Translate android="true" ids="shared_string_always"/>** – Yol bağlantı süreci, manuel onay gerektirmeden her *izle navigasyon* rotası için otomatik olarak uygulanacaktır.

İz tabanlı navigasyon kullanımı hakkında daha fazla bilgi için [İzle Navigasyon](../setup/gpx-navigation.md) bölümünü ziyaret edin.


## İlgili Makaleler {#related-articles}

- [Rota parametreleri](../routing/osmand-routing.md#routing-types)
- [Rota hazırlığı](../setup/route-navigation.md)
- [İzle navigasyon](../setup/gpx-navigation.md)
- [İşaretçilerle navigasyon](../setup/markers-navigation.md)
- [Rota detayları](../setup/route-details.md)
- [Navigasyon sırasında harita ekranı](./map-during-navigation.md)
- [Sesli komutlar / Bildirimler](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)