---
source-hash: 5c0ec057fd60df8e67edea1ef3d5a69cce84edf9177789c1998911043f2d9f81
sidebar_position: 1
sidebar_label: Giriş
title: Web Planlayıcıya Giriş
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

**Web Planlayıcı**, aynı zamanda [**OsmAnd Harita Portalı**](https://osmand.net/map) olarak da bilinir, OsmAnd mobil uygulamasının tarayıcı tabanlı bir uzantısıdır. Kullanıcıların küresel haritaları görüntülemesine, rotaları planlamasına, navigasyonu simüle etmesine, kişisel verileri yönetmesine ve cihazlarındaki senkronize içeriğe bulut aracılığıyla erişmesine olanak tanır.

Android ve iOS için OsmAnd'ın çapraz platform arkadaşı olarak tasarlanan Web Portalı, kullanıcıların bir uygulama yüklemeden herhangi bir masaüstü veya tablet tarayıcısını kullanarak gezileri planlamasına, parkurları analiz etmesine, araziyi görüntülemesine ve dosyaları yönetmesine yardımcı olur.

OsmAnd Web, favorileri, parkurları ve yedeklemeleri cihazlar ve platformlar arasında senkronize etmeyi sağlayan **OsmAnd Cloud** hizmetiyle sıkı bir şekilde entegre olur. **OsmAnd Start** (ücretsiz) veya **OsmAnd Pro** (ücretli) hesapları olan kullanıcılar, mobil ve web arasında veri senkronizasyonu yaparak bu ekosistemten tam olarak yararlanabilirler. *Start* ve *Pro* özelliklerinin ayrıntılı bir karşılaştırmasını aşağıda [Abonelik Erişimi](#subscription-accesses) bölümünde bulabilirsiniz.

> **Not:** Giriş yapmasanız veya hesabınızı doğrulamasanız bile, birkaç temel Web Harita Portalı özelliğini kullanabilirsiniz; bunlar arasında: [Navigasyon Rotası](./web-navigation.md), [Rota Planlayıcı](./planner.md), [Hava durumu katmanları](./web-weather.md) ve [Ayarlar](./web-map.md#settings) bulunur.


## Temel Özellikler {#key-features}

Web Portalı, tarayıcıda haritalar ve kişisel verilerle çalışmak için aşağıdaki ana yetenekleri sunar: 

- [Harita](./web-map.md), küresel kapsama alanı ve yüksek kaliteli vektör verileriyle.
- [Rota planlama](./planner.md), yaya, araba, bisiklet ve diğer profiller kullanılarak.
- [Navigasyon](./web-navigation.md) adım adım talimatlarla önizleme.
- [Arama](./web-search.md) ve [keşfetme](./web-search.md#explore) yakınlardaki popüler yerleri.
- Haritada [Favoriler](./web-map.md#favorites), [Parkurlar](./web-map.md#tracks) ve [POI'ler](./web-map.md#poi-overlay) gösterimi.
- [Hava durumu katmanları](./web-weather.md): rüzgar, sıcaklık ve basınç.
- [Arazi katmanları](./web-map.md#terrain): gölgelendirme, eğimler ve yükseklik görünümü.
- [Parkur Analizörü](./web-tracks-analyzer.md), yükseklik ve hız profilleri için.
- [OsmAnd Cloud](./web-cloud#cloud-sync) aracılığıyla senkronize verilere tam erişim.
- Dosya içe/dışa aktarma desteği (GPX: parkurlar, favoriler).
- **OsmAnd Pro** ve **OsmAnd Start** ile sorunsuz entegrasyon.

### Abonelik Erişimi {#subscription-accesses}

![Web Account](@site/static/img/web/web_start.png) ![Web Account](@site/static/img/web/web_pro.png)

Web Harita Portalı, giriş yapmadan, OsmAnd Start ile ve OsmAnd Pro ile olmak üzere birkaç erişim seviyesini destekler. Aşağıdaki tablo, her seviyede hangi özelliklerin mevcut olduğunu özetler; böylece zaten sahip olduklarınızı hızlıca görebilir ve bir hesap veya yükseltmeyle neler elde edebileceğinizi öğrenebilirsiniz. Bu genel bakış, bir hesaba ihtiyacınız olup olmadığını karar vermenize ve eğer varsa, OsmAnd'ı nasıl kullandığınıza en uygun seçeneği belirlemenize yardımcı olmayı amaçlar.

| Özellik | Mevcut Olduğu Yer |
|--------|--------------|
| [Navigasyon Rotası](./web-navigation.md) | Giriş Yapmadan |
| [Rota Planlayıcı](./planner.md) | Giriş Yapmadan |
| [Hava Durumu Katmanları](./web-weather.md) | Giriş Yapmadan |
| [Ayarlar](./web-map.md#settings) | Giriş Yapmadan |
| [Harita Menüsünü Yapılandırma](./web-map.md#configure-map-menu) ([POI'ler](./web-map.md#poi-overlay), [Favoriler](./web-map.md#favorites), [Parkurlar](./web-map.md#tracks))| [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) or [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [Harita Menüsünü Yapılandırma](./web-map.md#configure-map-menu) ([Arazi](./web-map.md#terrain))| [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [OsmAnd Cloud Senkronizasyonu](./web-cloud.md#cloud-sync) | [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) or [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [Web Arama, Popüler Yerler](./web-search.md) | [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) or [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [Parkur klasörleri ve Katman](./web-tracks.md) | [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |


## Nasıl Başlanır {#how-to-start}

OsmAnd Web Portalı'nın tam özelliklerine erişmek için bir OsmAnd Cloud hesabı ile oturum açmanız gerekir.

- Zaten bir [**OsmAnd Pro**](../personal/osmand-cloud.md#login) aboneliğiniz varsa veya ücretsiz bir [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) hesabı oluşturmak istiyorsanız, şu adımları izleyin:

1. [**OsmAnd Harita Portalı**](https://osmand.net/map) adresine gidin.
2. **Hesap** menüsünü açın:
   - **Giriş yap**: Pro veya Start aboneliğinizle bağlantılı e-posta adresini girin veya
   - **Hesap oluştur**: Ücretsiz bir OsmAnd Start hesabı için kaydolun. Yeni bir hesap oluşturma için ayrıntılı adım adım rehber için [OsmAnd Hesabı](./web-cloud) makalesine bakın.

![Web Account](@site/static/img/web/web_account.png)


## İlgili Makaleler {#related-articles}

- [İlk Adımlar](../start-with/first-steps.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Web Satın Almaları](../purchases/web.md)
- [Çapraz Platform Satın Almaları](../purchases/cross.md)