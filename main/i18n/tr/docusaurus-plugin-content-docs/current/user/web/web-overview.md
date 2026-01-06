---
source-hash: a52737232a71758590dfdb7cfbb68622999fbec373babd2b56b429093731d394
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

<!--
<InfoIncompleteArticle/>
-->

## Genel Bakış {#overview}

**Web Planlayıcı**, aynı zamanda [**OsmAnd Harita Portalı**](https://osmand.net/map) olarak da bilinir, OsmAnd mobil uygulamasının tarayıcı tabanlı bir uzantısıdır. Kullanıcıların küresel haritaları görüntülemesine, rotaları planlamasına, navigasyonu simüle etmesine, kişisel verileri yönetmesine ve cihazlarındaki senkronize içeriğe bulut aracılığıyla erişmesine olanak tanır.

Android ve iOS için OsmAnd'ın çapraz platform arkadaşı olarak tasarlanan Web Portalı, kullanıcıların bir uygulama yüklemeden herhangi bir masaüstü veya tablet tarayıcısını kullanarak gezileri planlamasına, parkurları analiz etmesine, araziyi görüntülemesine ve dosyaları yönetmesine yardımcı olur.

OsmAnd Web, favorileri, parkurları ve yedeklemeleri cihazlar ve platformlar arasında senkronize etmeyi sağlayan **OsmAnd Cloud** hizmetiyle sıkı bir şekilde entegre olur. **OsmAnd Start** (ücretsiz) veya **OsmAnd Pro** (ücretli) hesapları olan kullanıcılar, mobil ve web arasında veri senkronizasyonu yaparak bu ekosistemden tam olarak yararlanabilirler. *Start* ve *Pro* özelliklerinin ayrıntılı bir karşılaştırmasını aşağıda [Abonelik Erişimi](#subscription-access) bölümünde bulabilirsiniz.

> **Not:** Giriş yapmasanız veya hesabınızı doğrulamasanız bile, birkaç temel Web Harita Portalı özelliğini kullanabilirsiniz; bunlar arasında: [Navigasyon Rotası](./planner.md), [Rota Planlayıcı](./planner.md), [Hava durumu katmanları](./web-map.md#weather-on-the-web) ve [Ayarlar](#settings) bulunur.

<!--
After the structure of this section is approved, some links should be updated.
-->

## Temel Özellikler {#key-features}

Web Portalı, tarayıcıda haritalar ve kişisel verilerle çalışmak için aşağıdaki ana yetenekleri sunar: 

- [Harita](./web-map.md), küresel kapsama alanı ve yüksek kaliteli vektör verileriyle.
- [Rota planlama](./planner.md), yaya, araba, bisiklet ve diğer profiller kullanılarak.
- [Navigasyon](./planner.md), adım adım talimatlarla önizleme.
- [Arama](./web-search.md) ve [yakınlardaki popüler yerleri keşfetme](./web-search.md#explore).
- Haritada [Favoriler](./web-map.md#favorites), [Parkurlar](./web-map.md#tracks) ve [POI'ler](./web-map.md#poi-overlay) gösterimi.
- [Hava durumu katmanları](./web-weather.md): rüzgar, sıcaklık ve basınç.
- [Arazi katmanları](./web-map.md#terrain): gölgelendirme, eğimler ve yükseklik görünümü.
- [Parkur Analizörü](./web-tracks-analyzer.md), yükseklik ve hız profilleri için.
- [OsmAnd Cloud](./web-cloud#cloud-sync) aracılığıyla senkronize verilere tam erişim.
- Dosya içe/dışa aktarma desteği (GPX: parkurlar, favoriler).
- **OsmAnd Pro** ve **OsmAnd Start** ile sorunsuz entegrasyon.

<!--
After the structure of this section is approved, some links should be updated.
-->


### Abonelik Erişimi {#subscription-accesses}

![Web Account](@site/static/img/web/web_start.png) ![Web Account](@site/static/img/web/web_pro.png)

Web Harita Portalı, giriş yapmadan, OsmAnd Start ile ve OsmAnd Pro ile olmak üzere birkaç erişim seviyesini destekler. Aşağıdaki tablo, her seviyede hangi özelliklerin mevcut olduğunu özetler; böylece zaten sahip olduklarınızı hızlıca görebilir ve bir hesap veya yükseltmeyle neler elde edebileceğinizi öğrenebilirsiniz. Bu genel bakış, bir hesaba ihtiyacınız olup olmadığını karar vermenize ve eğer varsa, OsmAnd'ı nasıl kullandığınıza en uygun seçeneği belirlemenize yardımcı olmayı amaçlar.

| Özellik | Mevcut Olduğu Yer |
|--------|--------------|
| [Navigasyon Rotası](./planner.md) | Giriş Yapmadan |
| [Rota Planlayıcı](./planner.md) | Giriş Yapmadan |
| [Hava Durumu Katmanları](./web-weather.md) | Giriş Yapmadan |
| [Ayarlar](./web-map.md#settings) | Giriş Yapmadan |
| [Harita Menüsünü Yapılandırma](./web-map.md#configure-map-menu) ([POI'ler](./web-map.md#poi-overlay), [Favoriler](./web-map.md#favorites), [Parkurlar](./web-map.md#tracks))| [OsmAnd Start](https://osmand.net/blog/start) veya <ProFeature/> |
| [Harita Menüsünü Yapılandırma](./web-map.md#configure-map-menu) ([Arazi](./web-map.md#terrain))| <ProFeature/> |
| [OsmAnd Cloud Senkronizasyonu](./web-cloud.md#cloud-sync) | [OsmAnd Start](https://osmand.net/blog/start) veya <ProFeature/> |
| [Web Arama, Popüler Yerler](./web-search.md) | [OsmAnd Start](https://osmand.net/blog/start) veya <ProFeature/> |
| [Parkur klasörleri ve Katman](./web-tracks.md) | <ProFeature/> |

<!--
After the structure of this section is approved, some links should be updated.
-->


## Nasıl Başlanır {#how-to-start}

OsmAnd Web Portalı'nın tam özelliklerine erişmek için bir OsmAnd Cloud hesabı ile oturum açmanız gerekir.

- Zaten bir [**OsmAnd Pro**](../personal/osmand-cloud.md#login) aboneliğiniz varsa veya ücretsiz bir [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) hesabı oluşturmak istiyorsanız, şu adımları izleyin:

1. [**OsmAnd Harita Portalı**](https://osmand.net/map) adresine gidin.
2. **Hesap** menüsünü açın:
   - **Giriş yap**: Pro veya Start aboneliğinizle bağlantılı e-posta adresini girin veya
   - **Hesap oluştur**: Ücretsiz bir OsmAnd Start hesabı için kaydolun. Yeni bir hesap oluşturma için ayrıntılı adım adım rehber için [OsmAnd Hesabı](./web-cloud) makalesine bakın.

![Web Account](@site/static/img/web/web_account.png)

<!--

## Settings {#settings}

### Language {#language}

To switch the interface language:

*Go to: Menu → ⚙ Settings → Display language*

![Web Language](@site/static/img/web/web_language.png)

### Units {#units}

*Go to: Menu → ⚙ Settings → Units of length*  
*Go to: Menu → ⚙ Settings → Unit of speed*

You can choose which units are used to display distance, elevation and speed on the map, in route details and in measurement tools. This helps you keep OsmAnd consistent with your usual habits or regional standards.

The **Units of length** option defines how horizontal distance and elevation are shown:
- Kilometers/meters.
- Miles/feet.
- Miles/meters.
- Miles/yards.
- Nautical miles/meters.
- Nautical miles/feet. 

For example, a distance of 10 km will be shown as about 6.21 mi if you choose one of the Miles/... options, or as about 5.40 nmi when Nautical miles/... is selected.

The **Unit of speed** option controls how current speed and speed limits are displayed:
- Kilometers per hour.
- Miles per hour.
- Meters per second.
- Minutes per mile.
- Minutes per kilometer.
- Nautical miles per hour (knots). 

For example, a speed of 90 km/h corresponds to 25 m/s or about 55.92 mph.

![Web Units](@site/static/img/web/web_units_len.png) ![Web Units](@site/static/img/web/web_units_spe.png)

### OsmAnd Cloud {#osmand-cloud}

![Web Cloud](@site/static/img/web/web_without_acc.png) ![Web Cloud](@site/static/img/web/web_with_acc.png)

In the Web Map Portal, the *General settings* (Display language, Units of length, Unit of speed) are available for all users, whether you are signed in or not. Once you log in with your OsmAnd account, an additional OsmAnd Cloud section appears in the Settings panel. [OsmAnd Cloud](./web-cloud) connects the web map with your cloud backups so that you can manage data synchronized from your Android or iOS devices directly in the browser.

**Changes** option shows a chronological list of files stored in your OsmAnd Cloud account. Items are grouped by month and include the file name, the type of change (for example, added, modified or deleted), the time of the last update and the device that created it. For each entry, you can open the three-dot menu and choose *Download* to save the selected file to your computer, or *Delete*.

**Trash** option contains files that were deleted from OsmAnd Cloud. The list is also grouped by month and shows when each file was removed and from which device. Use the three-dot menu next to a file to *Download* a copy, *Restore from trash* (return the file to OsmAnd Cloud so it becomes available again in your data), or *Delete immediately* to remove it permanently. This helps prevent accidental data loss while still letting you free up cloud storage when you are sure a file is no longer needed. You can also clear all deleted items at once by clicking the Trash icon in the Trash panel header. This opens the **Empty trash** dialog, where you confirm deletion to permanently remove all files from Trash.

![Web Cloud](@site/static/img/web/web_changes.png) ![Web Cloud](@site/static/img/web/web_trash.png)

-->


## İlgili Makaleler {#related-articles}

- [İlk Adımlar](../start-with/first-steps.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Web Satın Almaları](../purchases/web.md)
- [Çapraz Platform Satın Almaları](../purchases/cross.md)