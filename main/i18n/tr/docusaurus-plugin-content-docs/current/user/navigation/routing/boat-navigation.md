---
source-hash: 1cb08bcd8ee7ef526cb41a67a59668e7c8cf614ee888f222e7e39337a0e136c1
sidebar_position: 8
title:  Tekne rotası
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

Tekne rotası, kanallar, nehirler veya suyolları ile tekne gezintisi veya yelken yapmaktan hoşlanan herkes için değerli bir araç olabilir. OpenStreetMap verilerindeki çoğu suyolunun eksikliği nedeniyle, tekne rotası **açık deniz navigasyonu** için *önerilmez*, bunun yerine **[Noktaya doğrudan rota](#direct-to-point-routing-for-boat)** kullanılması önerilir. Derinlik kontur çizgileri etkinleştirildiğinde, sığ sular, kayalar veya diğer engeller gibi tehlikelerden kaçınarak suda güvende kalmanıza yardımcı olabilir.
OsmAnd Tekne rota motoru ayrıca suyollarının ve teknelerin özelliklerini de dikkate alır.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tekne Navigasyon ekranı Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tekne Navigasyon ekranı iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)

</TabItem>

</Tabs>

## Rota Parametreleri - Tekne {#route-parameters---boat}

:::note
Varsayılan olarak, *Tekne profili* devre dışıdır. Bu profili rota belirlemek için kullanmak üzere, *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* bölümünde etkinleştirmeniz gerekir.
:::

Tekne rotası, Navigasyon ayarlarının [Rota parametreleri bölümünde](../../navigation/guidance/navigation-settings.md#route-parameters) ihtiyaçlarınıza göre yapılandırılabilir.

Tipik olarak, *Tekne rotası* tekne profiliyle (Nautical eklentisiyle birlikte etkinleştirilen son profil) kullanılır. Ancak, tekne rotasını diğer profillerle de kullanmak mümkündür ve tekne profilinde farklı [rota türleri](#other-routing-types-for-boat) de kullanılabilir.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tekne rota ayarları Android](@site/static/img/navigation/routing/boat_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tekne rota ayarları iOS](@site/static/img/navigation/routing/boat_routing_ios.png)

</TabItem>

</Tabs>

| Parametre | Açıklama | Not |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Tekne navigasyonu için akarsu ve drenajları kullanmanıza olanak tanır. Bu seçeneği etkinleştirmek, kano, kayık, sal, kürekli tekne gibi küçük tekneler için faydalı olabilir. | [Akarsular](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) nehir olarak adlandırılamayacak kadar dar, doğal olarak oluşan su yollarıdır. [Drenajlar](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) ise genellikle beton veya benzeri malzemelerle kaplı, fırtına suyu veya gri deşarj gibi fazla suyu taşımak için kullanılan yapay su yollarıdır. |
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* | Bu seçeneği açmak, tekneyle seyir için aralıklı su yollarını kullanmanıza olanak tanır. | [Aralıklı](https://wiki.openstreetmap.org/wiki/Key:intermittent) etiketi, bir su yolunun sürekli olarak su içermediğini belirtmek için kullanılır. |

:::note Su Navigasyonu ve Sınırlaması

1. Tekne profili, nehirler, göller ve diğer su yolları boyunca rota belirlemek için tasarlanmıştır. Aşağıdaki OSM etiketlerini destekler:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, vb.

2. Tekne profili **feribot rotalarını (`route=ferry`) desteklemez**. Bu, haritada mevcut olsa bile feribot rotalarının tekne rotaları hesaplanırken **kullanılmayacağı** anlamına gelir.

3. Bir feribot hattını manuel olarak takip etmek için:

    - [Rota Planla](../../plan-route/create-route.md) aracını kullanın ve ara noktaları manuel olarak yerleştirin.
    - Feribot rotalarını destekleyen Araba profilini kullanın

:::

## Tekne İçin Diğer Rota Türleri {#other-routing-types-for-boat}

[Tekne rotası](#route-parameters---boat) türü, Tekne profili için varsayılan rota algoritmasıdır. Başka bir rota türü seçebilmenize rağmen, bu da tekne navigasyonu için uygundur:

 - [Tekne için noktadan noktaya rota](#direct-to-point-routing-for-boat)
 - [Tekne için düz çizgi rota](#straight-line-routing-for-boat)

*Noktadan noktaya* ve *Düz çizgi* rota türlerinin yalnızca navigasyon için engel veya tehlike bulunmayan açık sularda kullanılması gerektiğini unutmamak önemlidir. Belirli bir kanal veya rota bulunan bir su yolunda seyrediyorsanız, doğru navigasyon kanallarında size rehberlik edecek ve sığ alanlardan veya diğer tehlikelerden kaçınacak olan OsmAnd'deki tekne rota türünü kullanmalısınız.

Tekne profili için bu rota türleri aşağıdaki yolu kullanarak etkinleştirilebilir: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> veya başka bir tane) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.

### Tekne İçin Noktadan Noktaya Rota {#direct-to-point-routing-for-boat}

:::note
Noktadan noktaya ve Tekne navigasyon türlerini kullanırken, *Haritayı Yapılandır* bölümünde etkinleştirilebilen ve ayarlanabilen [Derinlik kontur verilerine](../../plugins/nautical-charts.md#nautical-map-style) ihtiyacınız olacaktır.
:::

[Noktadan noktaya rota türü](./direct-to-point-routing.md), teknenizi belirli bir rota veya su yolunu takip etmeden açık suda seyretmek istediğinizde tekne profiliyle kullanılabilir. Bu rota türü, bir hedef noktası belirlemenize olanak tanır ve OsmAnd, mevcut konumunuzdan o noktaya doğrudan bir yol hesaplar. Bu rota türü, teknenizin minimum ve maksimum hızları, yüksekliği ve genişliği gibi özelliklerini dikkate almaz. Sapma durumunda rotanız yeniden hesaplanmaz.

![Noktadan noktaya Navigasyon türü Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

### Tekne İçin Düz Çizgi Rota {#straight-line-routing-for-boat}

[Düz çizgi rota türü](./straight-line-routing), teknenizi açık suda seyretmek istediğinizde ancak hedef noktanıza kavisli bir rota yerine düz bir çizgiyi takip etmeyi tercih ettiğinizde tekne profiliyle kullanılabilir. Bu, örneğin ufukta görünen uzak bir noktaya seyir yaparken faydalı olabilir.

![Düz çizgi Navigasyon türü Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)