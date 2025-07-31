---
source-hash: 918e5cde7ffddb7a99046ea161570b0112d11c17a7525a60f27a26db3726b779
sidebar_position: 2
title: Araç rotalama (Kamyon, Motosiklet)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Genel Bakış {#overview}

Araç tabanlı rotalama, sürücülerin benzersiz ihtiyaçlarına ve tercihlerine göre uyarlanmış özel yol tarifleri sağlayarak yollarda verimli, güvenli ve rahat bir şekilde gezinmelerine yardımcı olmak için tasarlanmıştır. Doğru rotalama ayarları, sürücülerin zamandan ve yakıttan tasarruf etmelerine ve yoldaki tehlikelerden kaçınmalarına yardımcı olabilir. Varsayılan olarak en hızlı rotalama sunulur.

:::info
Motorlu kara taşıtları için rotalama mekanizması yalnızca birkaç ayarda farklılık gösterir. Ortak parametreler bu makalenin [Araç](#route-parameters---car) bölümünde açıklanmıştır. [Kamyon](#route-parameters---truck) ve [Motosiklet](#route-parameters---motorcycle) kendine özgü özelliklere sahiptir.
:::

Rotalama, ilgili profilin (*Sürüş, Kamyon, Motosiklet*) Navigasyon ayarlarının [Rota parametreleri bölümünde](../../navigation/guidance/navigation-settings.md#route-parameters) ihtiyaçlarınıza göre yapılandırılabilir.


## Rota Parametreleri - Araç {#route-parameters---car}

Araç rotalama, sürücülerin varış noktalarına en verimli ve doğrudan rotaları bulmalarına yardımcı olmak için tasarlanmıştır. Tek yönlü yollar, dönüş yasakları, yaya bölgeleri gibi yaygın sürüş kısıtlamalarını dikkate alır ve ayrıca dar yollar veya ağırlık kısıtlamaları olan yollar gibi araçlar için uygun olmayan yollardan kaçınmaya yardımcı olur.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Araç rotalama ayarları Android](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Araç rotalama ayarları iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| Parametre | Açıklama | Not |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Navigasyon sırasında kaçınmak istediğiniz yolları seçin. Ya [harita üzerinde bir yol seçebilir](../../map/map-context-menu/#avoid-road) ya da listeden yol türlerini seçebilirsiniz. </summary>![Yollardan kaçınma Android](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details> | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll).</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface).</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Başka bir ülkeye sınırı geçmekten kaçının).</li><li>[Buz yollarından](https://wiki.openstreetmap.org/wiki/Key:ice_road) (soğuk bölgelerde donmuş su üzerine serilen mevsimlik yollar) ve [geçitlerden](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (bir otoyolun üzerinden su yolunun geçtiği kısımlar) kaçının.</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (araçları su kütleleri üzerinden taşıyan bir tür su taşımacılığı).</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway).</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone).</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (iki yeri birbirine karayoluyla kolayca ulaşılamayan yerleri birbirine bağlayan araç taşıyan trenler).</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel).</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (yalnızca 4WD araçlar için uygundur).</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | Araç rotalaması için, aksi belirtilmedikçe yolların yüzeyinin [asfaltlanmış](https://wiki.openstreetmap.org/wiki/Key:surface) olduğu varsayılır. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Rota hesaplanırken özel erişim kısıtlamaları göz ardı edilecektir. | *[private](https://wiki.openstreetmap.org/wiki/Key:access)* etiketi OSM'de otoyolların ve diğer ulaşım yollarının, binaların, girişlerin, olanakların ve eğlence varlıklarının kullanımındaki kısıtlamaları tanımlamak için kullanılır. |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (yalnızca&nbsp;araç) | <details><summary> Mal teslimatına kapalı yollardan kaçınılacaktır. </summary>![Mal teslimatı Android](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| Bu seçenek yalnızca 3,5 tondan fazla olmayan malları taşıyan araçlar için geçerlidir. Aracınızın ağırlığı 3,5 tondan fazlaysa, [Kamyon profili](#route-parameters---truck) kullanmalısınız. |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | Yakıt verimli rotalamayı hesaplamak için motor, hızı dahili olarak 60 km/saat ile sınırlar, ancak Tahmini Varış Süresini değiştirmez. Bu nedenle, aynı başlangıç-bitiş rotalarının 2'si (120 km/saat) ve ikincil (60 km/saat) durumunda - daha kısa rota seçilecektir. Hız sınırı &lt;60 km/saat olan servis yolları için daha hızlı rota seçilecektir. |


## Rota Parametreleri - Kamyon {#route-parameters---truck}

:::note
Varsayılan olarak, *Kamyon profili* devre dışıdır. Bu profili rotalama için kullanmak için, *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* bölümünde etkinleştirmeniz gerekir.
:::

Kamyon rotalaması, araç rotalamasına benzer, ancak özellikle büyük ticari araç sürücüleri için tasarlanmıştır. Araç [yüksekliği, ağırlığı ve genişlik kısıtlamaları](../guidance/navigation-settings.md#size-parameters) ve tehlikeli madde taşıma olasılığı gibi ek faktörleri dikkate alır (aşağıdaki tabloya bakın). Diğer tüm rotalama ayarları [araç rotalaması](#route-parameters---car) ile aynıdır.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya git: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Kamyon rotalama ayarları Android 2](@site/static/img/navigation/routing/routing_truck_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya git: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Kamyon rotalama ayarları iOS 2](@site/static/img/navigation/routing/truck_routing_ios.png)

</TabItem>

</Tabs>

| Parametre | Açıklama | Not |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="transport_hazmat_title"/>* (**AB bölgesi** için) | <details><summary> Yerel yetkililer, bazı yollarda veya tünellerde tehlikeli madde taşımacılığını yasaklayabilir. </summary> ![Tehlikeli madde taşımacılığı Android](@site/static/img/navigation/routing/routing_truck_hazmat_andr.png) </details> | Etkinleştirildiğinde, kamyon rotalama mekanizması OSM etiketi *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*'ı dikkate alır. **AB kısıtlamalarına** göre beş tehlikeli madde kategorisinden (*A, B, C, D, E*) birini seçebilirsiniz. |
| *<Translate android="true" ids="dangerous_goods"/>* (yalnızca **ABD bölgesi** seçiliyse) | <details><summary> ABD'deki tehlikeli madde taşıma kuralları AB'den farklıdır. Yalnızca Sürüş Bölgesi ABD olarak ayarlanmışsa görüntülenir. Birden fazla sınıf seçebilirsiniz. </summary> ![Tehlikeli madde taşımacılığı Android](@site/static/img/navigation/routing/routing_truck_dangerous_goods_andr.png) </details> | [**ABD kısıtlamalarına**](https://www.iafc.org/topics-and-tools/hazmat/fusion-center/transportation-commodities/dot-hazard-classification-system) göre tehlikeli madde türlerinden birini (1'den 9'a kadar) seçin. Tehlikeli madde taşımacılığı bazı yollarda ve tünellerde yasaktır. <ul><li>1. *Patlayıcılar* </li><li> 2. *Gazlar* </li><li> 3. *Yanıcı Sıvılar* </li><li> 4. *Yanıcı Katılar* </li><li> 5. *Oksitleyici Maddeler ve Organik Peroksitler* </li><li> 6. *Zehirli ve Bulaşıcı Maddeler* </li><li> 7. *Radyoaktif Maddeler* </li><li> 8. *Aşındırıcı Maddeler* </li><li> 9. *Çeşitli* </li></ul> |


## Rota Parametreleri - Motosiklet {#route-parameters---motorcycle}

:::note
Varsayılan olarak, *Motosiklet profili* devre dışıdır. Bu profili rotalama için kullanmak için, *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* bölümünde etkinleştirmeniz gerekir.
:::

Motosiklet rotalaması, özellikle motosiklet seyahati için optimize edilmiş bir rota oluşturma sürecidir. Bu tür rotalama, motosikletçilerin benzersiz ihtiyaçlarını ve tercihlerini dikkate alarak mümkün olan en iyi sürüş koşullarını sağlar. Rotalar, yol yüzeyi seçimi (örneğin, kötü yol koşulları tercih edilebilir veya kaçınılabilir), trafik sıkışıklığından kaçınma, altyapı erişilebilirliği veya güvenlik gibi bir dizi parametre dikkate alınarak düzenlenir.


## Diğer Rotalama Ayarları {#other-routing-settings}

- Rotalama algoritması, OpenStreetMap'te belirtilen geçici kısıtlamaları da dikkate alabilir. Bu, *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)* seçeneği kullanılarak yapılabilir. Bazı durumlarda OSM'den gelen bilgilerin güncel olmayabileceğini unutmayın.

- *Rota parametrelerinin* [*Rotayı yeniden hesapla bölümünde*](../../navigation/guidance/navigation-settings.md#recalculate-route) rota yeniden hesaplama seçeneklerini etkinleştirebilir ve ayarlayabilirsiniz.

- *Rota parametrelerinin* [*Geliştirme bölümünde*](../guidance/navigation-settings.md#development-settings), şu anda test aşamasında olan yeni rotalama özelliklerini deneyebilirsiniz. Bu ayarların yalnızca [OsmAnd geliştirme eklentisi](../../plugins/development.md) etkinleştirildiğinde kullanılabileceğini unutmayın.

- OsmAnd'ın *iOS* sürümündeki *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* ayarı *Navigasyon ayarları → Rota parametreleri* bölümünde bulunur (*Android* için, *Araç parametreleri → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)* bölümünde). Bu ayar, hız sınırı olmayan bilinmeyen yollarda kullanılır. Bu durum genellikle bir parkurda veya çevrimiçi rotada gezinirken geçerlidir. Aracınızın parametrelerine göre ayarlanmalıdır.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Ayarları doğru yapılandırmak, rota oluştururken sorunlardan kaçınmanıza yardımcı olacaktır. Araç tipine ve yol kısıtlamalarına bağlı olarak en uygun rotayı seçebilir ve seyahat süresini hesaplayabilirsiniz.

> *Son güncelleme: Temmuz 2024*