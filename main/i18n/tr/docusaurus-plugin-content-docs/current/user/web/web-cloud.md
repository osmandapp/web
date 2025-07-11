---
source-hash: 751ce0d01399c5201cf9fd9a85ce2e3a31e3f473f43bd4237e02b1fda097d4dd
sidebar_position: 2
sidebar_label: OsmAnd Cloud
title: Web Sitesinde OsmAnd Cloud
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


<InfoIncompleteArticle/>

## Genel Bakış {#overview}

[OsmAnd Harita Portalı](https://osmand.net/map), OsmAnd tarafından sağlanan, kullanıcıların haritaları keşfetmesine, verilerini yönetmesine, gezileri planlamasına ve oluşturmasına veya sadece haritada gezinmesine olanak tanıyan tarayıcı tabanlı bir hizmettir.

#### Abonelik Erişimleri {#subscription-accesses}

Harita Portalı kaydolmadan kullanılabilir; ancak bazı özellikler yalnızca OsmAnd Pro ve OsmAnd Start kullanıcıları için mevcuttur:

| Özellikler | Sürümler |
|--- |--- |
| [Navigasyon Rotası](./planner.md) | Ücretsiz |
| [İz oluştur](./planner.md) | Ücretsiz |
| [Hava Durumu](./web-map.md) | Ücretsiz |
| [Favoriler](./web-map.md) | [Osmand Start](https://osmand.net/blog/start) veya <ProFeature/> |
| [OsmAnd Cloud senkronizasyonu](./web-cloud.md) | [Osmand Start](https://osmand.net/blog/start) veya <ProFeature/> |
| [Web Araması](./web-search.md)|[Osmand Start](https://osmand.net/blog/start) veya <ProFeature/>|
| [İzler](./web-map.md) | <ProFeature/> |


## Nasıl Başlanır {#how-to-start}

[OsmAnd Pro](../personal/osmand-cloud.md#login) hesabınız varsa veya [OsmAnd Start](../personal/osmand-cloud.md#osmand-start) hesabı oluşturmak istiyorsanız aşağıdaki adımları uygulamanız gerekir:

- [*OsmAnd Harita Portalı*](https://osmand.net/map) adresine gidin.
- **Hesap** menüsünü açın.
  - *Giriş yap*. Hesabınızı oluşturmak için kullandığınız e-postayı girin. Pro veya Start abonelikleri için.
  - *Hesap oluştur*. OsmAnd Start için.


## Dil Nasıl Değiştirilir {#how-to-change-language}

Görüntüleme dilini değiştirmek isterseniz:

- OsmAnd'ın Web sürümü, tarayıcı ayarlarındaki dili kullanır.
- Chrome için öncelik `chrome://settings/languages` şeklindedir.
- Sistem (menü) dilini manuel olarak seçerek değiştirebilirsiniz:
    *Menü →* ⚙ *→ Dili kapat*.


## Hesabı Yönetme {#managing-account}

*Genel Menü → Hesap*

Web'e kaydolduktan sonra, kullanıcılar hesap bilgilerine erişebilir, yedekleri indirebilir, oturumu kapatabilir, hesaplarını silebilir veya e-posta adreslerini değiştirebilirler.

#### Hesaba Erişim {#access-account}

#### Yedekler {#backups}

#### Oturumu Kapat ve Sil {#log-out-and-delete}

#### E-posta Adresini Değiştir {#change-email-address}


## OsmAnd Pro ve OsmAnd Start Senkronizasyonu {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** [çapraz platform](../troubleshooting/setup.md#cross-platform) ücretli bir aboneliktir.
- **OsmAnd Start** [ücretsiz bir OsmAnd Cloud kaydıdır](https://osmand.net/blog/start).

Çapraz platform özelliği, OsmAnd Pro'yu tüm platformlarda kullanmanıza olanak tanır *([Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map))*. Bunu yapmak için şunları yapmanız gerekir:

1. **OsmAnd Pro**'ya abone olun. Bunun [Android için nasıl yapılacağı](../purchases/android.md#how-to-buy) ve [iOS için nasıl yapılacağı](../purchases/ios.md#how-to-buy) hakkında daha fazla bilgi edinin.
2. **OsmAnd Start** hesabı nasıl oluşturulur, daha fazla bilgiyi [burada](https://osmand.net/blog/start#how-to-create-an-account) okuyun.
3. OsmAnd uygulamasının içinde OsmAnd sunucusunda [Pro veya Start hesabınızı](../troubleshooting/setup.md#cross-platform) kaydedin.
4. Kayıtlı e-posta, web platformunda OsmAnd Pro'yu etkinleştirmek için giriş bilgileriniz olacaktır. İlk kez web portalına girmek için bir parola seçmeniz gerekir (lütfen web portalındaki talimatları kullanın).

- [osmand.net/map](https://osmand.net/map/) için *e-postanızı* ve *şifrenizi* girin.

![OsmAnd Web etkinleştirme görünümü](@site/static/img/web/web_pro_activation.png)

- İzler (OsmAnd Pro) ve favoriler (OsmAnd Pro ve OsmAnd Start) gibi verileriniz, oturum açtıktan sonra menüde görünecektir. Haritada görüntülenmek üzere kullanılabilirler. Ancak bu verileri cihazlarınızdan [senkronize etmeniz gerekir](https://osmand.net/docs/user/personal/osmand-cloud#last-sync).

![OsmAnd Web veri görünümü](@site/static/img/web/web_data.png)

- [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)'dan *YEDEKLEMEYİ İNDİRMEK* için giriş alanına tıklayın. Giriş alanında dosya bilgileri (toplam dosya sayısı, toplam dosya boyutu, kullanılan bulut depolama alanı) ve hesap bilgileri (abonelik türü, aboneliğinizin başlangıç ve bitiş zamanı) görebilirsiniz.

![OsmAnd Web yedekleme dosyası görünümü](@site/static/img/web/web_backup_file.png)

İndirmek için gerekli dosyaları, indirilen dosyaların `.zip` veya `.osf` formatını seçin ve *YEDEKLEMEYİ İNDİR* düğmesine tıklayın:

![OsmAnd Web yedekleme dosyası görünümü](@site/static/img/web/web_backup_file_1.png)

Hesaptan *çıkış yapmak* için de bir düğme bulunur.

- *OTURUMU KAPAT*, *HESABINI SİL* veya *E-postayı değiştir* seçeneklerini de giriş alanında bulabilirsiniz. *HESABINI SİL* veya *E-postayı değiştir* seçeneklerini açmak için *Tehlikeli alan*a tıklamanız gerekir.

![OsmAnd Web yedekleme dosyası görünümü](@site/static/img/web/web_backup_file_2.png)


## Bulut verileri {#cloud-data}

[İzler ve Favoriler](web-map.md#tracks).
<!--
## Harita stili {#map-style}

Menünün bu bölümünde harita stilini değiştirebilirsiniz. Bunun OsmAnd uygulaması için nasıl yapılacağı hakkında daha fazla bilgiyi [Vektör Haritaları (Harita Stilleri)](../map/vector-maps.md) makalesinde okuyabilirsiniz. Web sürümündeki ayarlar farklı değildir.
**Bazı örnekler:**

- Deniz haritası stili

![OsmAnd Web Harita Stili](@site/static/img/web/web_map_style_nautical.png)

- Topo harita stili

![OsmAnd Web Favoriler ekle](@site/static/img/web/web_map_style_topo.png)
-->



> *Son güncelleme: Eylül 2024*