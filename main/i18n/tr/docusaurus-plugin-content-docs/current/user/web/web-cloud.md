---
source-hash: aa7b248df7d6116b19b0428376bb9c1f59b764588678067dd00d7ee9bd820a7a
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

[OsmAnd Harita Portalı](https://osmand.net/map), OsmAnd tarafından sağlanan, kullanıcıların haritaları keşfetmesine, verilerini yönetmesine, geziler planlamasına ve oluşturmasına veya sadece haritada gezinmesine olanak tanıyan tarayıcı tabanlı bir hizmettir.



## Nasıl Başlanır {#how-to-start}

OsmAnd Web özelliklerine erişmek için bir hesaba ihtiyacınız var:

- Zaten bir [**OsmAnd Pro**](../personal/osmand-cloud.md#login) aboneliğiniz varsa veya ücretsiz bir [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) hesabı oluşturmak istiyorsanız, şu adımları izleyin:

  1. [**OsmAnd Harita Portalı**](https://osmand.net/map) adresine gidin.
  2. **Hesap** menüsünü açın.
     - **Giriş yap**: Pro veya Start aboneliğiniz için kullandığınız e-posta adresini girin.
     - **Hesap oluştur**: Ücretsiz bir OsmAnd Start hesabı kaydetmek için bu seçeneği kullanın.

![Web Hesabı](@site/static/img/web/web_account.png)

## Hesabı Yönetme {#managing-account}

Hesabınızı yönetmek için şuraya gidin:
**Genel Menü → Hesap**

Web'e kaydolduktan sonra şunları yapabilirsiniz:

- Hesap bilgilerini görüntüle
- Bulut yedeklerini indir
- Hesabınızdan çıkış yapın
- Hesabınızı silin
- E-posta adresinizi değiştirin
- Ödemelerinizi ve satın alımlarınızı görün

![Web Hesabı](@site/static/img/web/web_account_2.png)

### Verilerim {#my-data}

Mobil cihazınızdan **OsmAnd Cloud** aracılığıyla oluşturulan ve senkronize edilen yedekleri indirebilirsiniz.

- **Genel Menü → Hesap → Verilerim (OsmAnd Cloud) → Tümünü indir**'e gidin.

Bu bölüm şunları gösterir:

- Bulutunuzda depolanan dosya sayısı
- Kullanılan toplam depolama hacmi
- Mevcut bulut depolama alanı

> 💡 Yalnızca **OsmAnd Cloud**'un etkin olduğu cihazlarda oluşturulan yedekler burada görünecektir.

### Ödemeler ve Satın Alımlar {#payments-and-purchases}

- **Genel Menü → Hesap → Ödemeler ve Satın Alımlar**'a gidin.

Bu bölümde, hesabınıza bağlı tüm satın alımları ve abonelikleri görüntüleyebilirsiniz.

Satın alımlarınızı farklı platformlarda kullanma hakkında daha fazla bilgi için, [çapraz platform erişimi](../purchases/cross.md) hakkında okuyun.

### E-posta Adresini Değiştir {#change-email-address}

E-posta adresinizi güncellemek için:

1. **Genel Menü → Hesap → E-posta → ⋮ → E-postayı değiştir**'e gidin.
2. Yeni e-posta adresinizi girin ve onaylayın.

> 🔒 Değişiklik kesinleşmeden önce yeni adrese bir doğrulama e-postası gönderilecektir.

### Çıkış Yap ve Hesabı Sil {#log-out-and-delete}

OsmAnd Web hesabınızdan çıkış yapmak için:

- **Genel Menü → Hesap**'ı açın.
- Mevcut oturumunuzu sonlandırmak için **Çıkış yap** düğmesine tıklayın.

Hesabınızı kalıcı olarak silmek için:

- **Hesap** menüsünün en altına gidin.
- **Hesabı sil** düğmesine tıklayın.
- Silme işlemini onaylayın. Bu işlem geri alınamaz.


## OsmAnd Pro ve OsmAnd Start Senkronizasyonu {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** [çapraz platform](../troubleshooting/setup.md#cross-platform) ücretli bir aboneliktir.
- **OsmAnd Start** [ücretsiz bir OsmAnd Cloud kaydıdır](https://osmand.net/blog/start).

Çapraz platform özelliği, OsmAnd Pro'yu tüm platformlarda kullanmanıza olanak tanır *([Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map))*. Bunu yapmak için şunları yapmanız gerekir:

1. **OsmAnd Pro**'ya abone olun. [Android için buradan](../purchases/android.md#how-to-buy) ve [iOS için buradan](../purchases/ios.md#how-to-buy) nasıl yapılacağı hakkında daha fazla bilgi edinin.
2. **OsmAnd Start** hesabı nasıl oluşturulur, daha fazla bilgi [burada](https://osmand.net/blog/start#how-to-create-an-account).
3. OsmAnd uygulamasının içinde OsmAnd sunucusunda [Pro veya Start hesabınızı](../troubleshooting/setup.md#cross-platform) kaydedin.
4. Kayıtlı e-posta, OsmAnd Pro'yu web platformunda etkinleştirmek için giriş bilgileriniz olacaktır. İlk olarak, web portalına gelecekteki girişler için bir şifre seçmeniz gerekir (lütfen web portalındaki talimatları kullanın).


<!--

- [osmand.net/map](https://osmand.net/map/) için *e-posta* ve *şifrenizi* girin.

![OsmAnd Web aktivasyonunu görüntüle](@site/static/img/web/web_pro_activation.png)

- Parçalar (OsmAnd Pro) ve favoriler (OsmAnd Pro ve OsmAnd Start) gibi verileriniz, giriş yaptıktan sonra menüde görünecektir. Haritada görüntülenmeye hazırdırlar. Ancak bu verileri cihazlarınızdan [senkronize etmeniz gerekir](https://osmand.net/docs/user/personal/osmand-cloud#last-sync).

![OsmAnd Web verilerini görüntüle](@site/static/img/web/web_data.png)

- [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)'dan *YEDEKLEMEYİ İNDİRMEK* için giriş alanına tıklayın. Giriş alanında dosya bilgilerini (toplam dosya sayısı, toplam dosya boyutu, kullanılan bulut depolama alanı) ve hesap bilgilerini (abonelik türü, aboneliğinizin başlangıç zamanı ve bitiş zamanı) görebilirsiniz.

![OsmAnd Web yedekleme dosyasını görüntüle](@site/static/img/web/web_backup_file.png)

İndirmek için gerekli dosyaları, indirilen dosyaların `.zip` veya `.osf` formatını seçin ve *YEDEKLEMEYİ İNDİR* düğmesine tıklayın:

![OsmAnd Web yedekleme dosyasını görüntüle](@site/static/img/web/web_backup_file_1.png)

Hesaptan *çıkış yapmak* için de bir düğme vardır.

- *ÇIKIŞ YAP*, *HESABINIZI SİL* veya *E-postayı değiştir* seçeneklerini de giriş alanında bulabilirsiniz. *HESABINIZI SİL* veya *E-postayı değiştir* seçeneklerini açmak için *Tehlikeli alan*a tıklamanız gerekir.

![OsmAnd Web yedekleme dosyasını görüntüle](@site/static/img/web/web_backup_file_2.png)


## Bulut verileri {#cloud-data}

[Parçalar ve Favoriler](web-map.md#tracks).

## Harita stili {#map-style}

Menünün bu bölümünde harita stilini değiştirebilirsiniz. Bunun nasıl yapılacağı hakkında daha fazla bilgiyi OsmAnd uygulaması için [Vektör Haritaları (Harita Stilleri)](../map/vector-maps.md) makalesinde okuyabilirsiniz. Web sürümündeki ayarlar farklı değildir.
**Bazı örnekler:**

- Deniz haritası stili

![OsmAnd Web Harita Stili](@site/static/img/web/web_map_style_nautical.png)

- Topo harita stili

![OsmAnd Web Favorileri ekle](@site/static/img/web/web_map_style_topo.png)
-->



> *Son güncelleme: Temmuz 2024*