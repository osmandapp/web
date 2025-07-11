---
source-hash: 7669ebc684d82d59a895a98d5dc83c05fad8cf9113b076ddb5dd9660c461ce5e
sidebar_position: 12
title: BRouter
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

## Genel Bakış {#overview}

:::caution SADECE ANDROID
Üçüncü taraf yönlendirme algoritması BRouter, yalnızca OsmAnd uygulamasının Android sürümünde kullanılabilir.
:::

*BRouter*, OsmAnd uygulamasında [çevrimdışı navigasyon modu](../guidance/navigation-settings.md#navigation-type) için kullanılabilen üçüncü taraf bir yönlendirme algoritmasıdır. Bir rotayı zaman, mesafe veya araç tipi gibi farklı parametrelere göre optimize etmek için tasarlanmıştır.

[BRouter](http://brouter.de/) bir rota oluşturmak için OpenStreetMap verilerini kullanır ve ardından belirtilen parametrelere göre ayarlar. Çevrimdışı bir rota oluşturmak için önceden hesaplanmış rotaları kullanır. Ayrıca, rota seçiminde çeşitli faktörleri hesaba katmak için bir dizi parametreyle tanımlanan yönlendirme profillerini özelleştirmenize olanak tanır. [BRouter readme.txt](http://brouter.de/brouter/readme.txt) dosyası, programın nasıl kurulacağını ve kullanılacağını daha ayrıntılı olarak açıklar.

OsmAnd, BRouter ile rotaları seçme ve rotayı ihtiyaçlarınıza göre daha iyi tanımlamak için yönlendirme profillerini yapılandırma yeteneği sağlar.

Daha fazla bilgi için resmi [Brouter web sitesini](http://www.brouter.de/brouter/algorithm.html) ziyaret edebilirsiniz.

BRouter'ın OsmAnd'a entegrasyonu 2019 yazında çok değişti. Bu kılavuz, BRouter Android uygulamasını 1.5.0 veya daha yüksek bir sürümde ve OsmAnd'ı 3.4 veya daha yüksek bir sürümde kullandığınızı varsayar.

:::note
Üçüncü taraf yönlendirme algoritması BRouter, yalnızca OsmAnd uygulamasının Android sürümünde kullanılabilir.
:::

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview2.png').default} alt="BRouter"/></td>
    </tr>
</table>

## Nasıl Yapılandırılır {#how-to-configure}

OsmAnd'da kullanmak için üçüncü taraf *BRouter Çevrimdışı Navigasyon* uygulamasını yüklemek ve yapılandırmak için bu kılavuzu izleyin.

**1.** Başlamak için, BRouter uygulamasını Android cihazınıza [F-Droid](https://f-droid.org/packages/btools.routingapp) veya [Google Play Store](https://play.google.com/store/apps/details?id=btools.routingapp) üzerinden yüklemeniz gerekir.
**2.** Ardından, OsmAnd uygulamasını kullanarak BRouter ile önceden hesaplanmış rotalar boyunca gezinmek için şunları yapmanız gerekir:

- BRouter uygulamasını açın ve *İndirme Yöneticisi*'ne dokunun.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.png').default} alt="BRouter"/></td>
    </tr>
</table>

- Yakınlaştırın ve rota oluşturmak istediğiniz alanları seçin. Ardından "İndirmeyi Başlat"a tıklayın ve BRouter, seçilen alanlar için [segment](http://brouter.de/brouter/segments4/) dosyalarını indirmeye başlayacaktır.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-start-1.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-start.png').default} alt="BRouter"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-downl.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-update.png').default} alt="BRouter"/></td>
    </tr>
</table>

**Not:** Yönlendirme için kullanılan OSM verilerinin güncel bir sürümüne sahip olmak istediğinizde bu adımı periyodik olarak tekrarlamanız gerekecektir.

**3.** Bu işlem tamamlandıktan sonra, BRouter uygulamasını tekrar başlatın ve *Ana Menü*'den "BRouter Uygulaması" girişini seçin. Seyahat modunuza bağlı olarak bir yönlendirme profili seçin. Bu, bisiklet, moped, yürüyüş veya trekking olabilir. *brf* formatında indirilebilecek mevcut profillerin listesini [burada](http://brouter.de/brouter/profiles2/) bulabilirsiniz. Veya [BRouter-online](http://brouter.de/brouter-web/) adresindeki yönlendirme profilini kullanmayı deneyebilirsiniz.
"Servis Modu"na tıklayın. Ardından, bu profili kullanmak istediğiniz yönlendirme modları için kutuları işaretleyin. Ulaşım modu başına iki farklı profil kullanabilirsiniz, bunlar OsmAnd'da "en kısa" ve "en hızlı" ön ayarlarına (bunlar sadece etiketlemedir) eşlenecektir.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.png').default} alt="BRouter"/></td>
    </tr>
</table>

**4.** Daha önce herhangi bir segment yüklediyseniz, bunlar BRouter haritasında görüntülenecektir. Segmentlerin dört durumu vardır:

- *"Yeşil"* kare - İndirilecek yeni segment seçildi.
- *"Mavi"* kare - Güncellenmiş verilere sahip segment.
- *"Gri"* kare - Segment zaten indirilmiş ancak güncellenmesi gerekiyor.
- *"Sarı"* kare - Segment güncelleniyor.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter-downl2.png').default} alt="BRouter"/>
    </tr>
</table>

**5.** BRouter ile gerekli harita segmentlerini yükledikten ve içinde bir yönlendirme profili seçtikten sonra, bu tür navigasyonun tüm sonraki ayarları OsmAnd uygulamasında yapılır.

**6.** OsmAnd'da çevrimdışı yönlendirme için BRouter'ı kullanacak bir "Uygulama profili" oluşturabilirsiniz.
OsmAnd uygulamasındaki herhangi bir [profil](../../personal/profiles.md) ile *BRouter (çevrimdışı)* yönlendirme türünü kullanın. Bunu yapmak için, ana *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_offline,shared_string_external,routing_profile_broutrer"/>* bölümüne gidin ve seçtiğiniz temel profile (burada bisiklet yönlendirmesi için bisiklet) dayalı, kendi seçtiğiniz özel bir adla (aşağıdaki ekran görüntüsünde "BRouter") ve navigasyon için "BRouter (çevrimdışı)" kullanarak yeni bir profil oluşturun.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-2.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-3.png').default} alt="BRouter"/></td>
    </tr>
</table>

BRouter uygulamasının, OsmAnd'da bu özel girişin görünmesi için OsmAnd'dan önce başlatılması gerekir. Bu nedenle, "BRouter (çevrimdışı)" navigasyon seçeneğini bulamıyorsanız, OsmAnd'ı zorla kapatıp yeniden başlatmanız gerekir.

## OsmAnd Sürüm 4.7.1 {#osmand-version-471}

4.7.1 sürümünden itibaren Osmand, eşleme için profil parametresini destekler: Osmand sürüm 3'ten bu yana, Osmand'da birçok profil tanımlanabilir ve bu profiller arasında kolayca geçiş yapabilirsiniz. Yeni bir profil oluşturulmalı, örneğin mevcut *Bisiklet* profilini kopyalayarak ve ona Brouter[fastbike] formatında yeni bir ad vererek. Cihazınızda yüklü olan mevcut BRouter profillerinden herhangi birini adında kullanabilirsiniz. Tüm profil dosyaları 'xxxxxxx.brf' adlandırma formatına sahiptir. Veya kendi yeni profilinizi, örneğin 'myprofile.brf' gibi oluşturabilirsiniz.

OsmAnd profilindeki adlandırma kuralı önemlidir, çünkü o profile dahil edilen BRouter profili, OsmAnd ile BRouter arasında gerçek köprüyü kurar.

- Osmand'da bir profilin navigasyon hizmeti olarak *BRouter* tanımlanmışsa
- VE profil adı "Brouter[mystring]" gibi görünüyorsa

O zaman "mystring" profili Brouter uygulamasında kullanılacaktır. Bu yeni eşleme, bu durumda yukarıda tanımlanan ve "serviceconfig.dat" dosyasına dayalı temel eşlemeyi değiştirir.

### Örnekler: Osmand-profil adı Brouter-uygulaması {#examples-osmand-profile-name-brouter-app}

```xml
Brouter[trekking] "trekking" profili kullanılacak dosya: trekking.brf
Brouter[fastbike] "fastbike" profili kullanılacak dosya: fastbike.brf
....
```

Not:
Şu anda Osmand, Brouter profili (mystring) için tanımlanan adı (büyük/küçük harf duyarlı) kontrol etmiyor.
Eğer bir profil bulunamazsa, yönlendirme "Rota hesaplanamadı.." hatasıyla başarısız olacaktır.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter_profile.png').default} alt="BRouter"/>
    </tr>
</table>

## Nasıl Kullanılır {#how-to-use}

Bu bölüm, BRouter'ın OsmAnd uygulamasının dahili yönlendirmesiyle karşılaştırmasını açıklamaktadır.

BRouter yapılandırıldığında, BRouter yönlendirme verilerinin ön hesaplama hızını dahili OsmAnd yönlendirmesiyle karşılaştırabiliriz. Hollanda'da iki rastgele nokta seçelim ve yolculuğu hesaplamaya başlayalım. Bunun için, temel profil için yükseklik verilerini kullanmadan dengeli bir sürüş stili ayarladık. Bu yolculuk için hesaplama süresi, dahili OsmAnd rotamız için 14,5 saniyedir. BRouter yönlendirmesi kullanılırken rota hesaplama süresi 1 saniyeden azdır.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof21.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof21a.jpg').default} alt="BRouter"/></td>
    </tr>
</table>

## Rota Parametreleri {#route-parameters}

*<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2,route_parameters"/>*

![BRouter](@site/static/img/navigation/routing/BRouter_route_param.png)

| Parametre | Açıklama | Not |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="fast_route_mode"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> <Translate android="true" ids="fast_route_mode_descr"/> | Çoğu durumda, en kısa rota önerilecektir. Genellikle bu rota, ayar devre dışı bırakılırsa daha uzun sürebilir |
| *<Translate android="true" ids="temporary_conditional_routing"/>* | Bu [makalede](../routing/osmand-routing.md#consider-temporary-limitations) Geçici kısıtlamaları dikkate al seçeneğini okuyun. | Yönlendirme algoritması, OpenStreetMap'te belirtilen zaman kısıtlamalarını dikkate alır. Bazı durumlarda OSM'den gelen bilgilerin güncel olmayabileceğini unutmayın. |

### Diğer Yönlendirme Ayarları {#other-routing-settings}

- ***<Translate android="true" ids="calculate_osmand_route_without_internet"/>*** (*Navigasyon → Ayarlar*, [resim](../routing/online-routing.md#online-routing-setting)). Bu seçenek etkinleştirilirse, OsmAnd hesaplanan Brouter parkuruna iki segment ekler: biri *[Konumum](../../map/interact-with-map.md#my-location-and-zoom)*'dan parkurun başlangıç noktasına, diğeri ise parkurun sonundan rotanızın bitiş noktasına. Bu seçenek, parkura olan veya parkurdan olan mesafe 60 metreyi aşarsa etkindir.

- *Rota parametreleri*'nin [*Rotayı yeniden hesapla bölümünde*](../../navigation/guidance/navigation-settings.md#recalculate-route), rota yeniden hesaplama seçeneklerini etkinleştirebilir ve ayarlayabilirsiniz.

- *Rota parametreleri*'nin [*Geliştirme bölümünde*](../guidance/navigation-settings.md#development-settings), şu anda test aşamasında olan yeni yönlendirme özelliklerini deneyebilirsiniz. Bu ayarların yalnızca [OsmAnd geliştirme eklentisi](../../plugins/development.md) etkinleştirildiğinde kullanılabileceğini unutmayın.

> *Son güncelleme: Haziran 2024*