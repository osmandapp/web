---
source-hash: 8126842666c1b2fbd00d6cdb9fb5d9a688401ea2ca74976ccf168038defc6772
sidebar_position: 5
sidebar_label: Rota Planla
title: Web Sitesinde Rota Planla
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

OsmAnd Web Rota Planlayıcı, doğrudan tarayıcınızdan navigasyon rotaları oluşturmanıza, parkurları planlamanıza ve yerel dosyaları yönetmenize olanak tanır. Bu web aracı, uygulamanızla senkronize edebileceğiniz veya başkalarıyla paylaşabileceğiniz ayrıntılı seyahat rotaları oluşturmak için kullanışlıdır.


## Navigasyon Rotası {#navigation-route}

Bir navigasyon rotası oluşturmak için şu adımları izleyin:

- Yol noktaları eklemek için haritaya **sağ tıklayın**:

  - *Şuradan git*. Başlangıç noktasını ayarlayın.
  - *Şuraya git*. Hedefi ayarlayın.
  - *Şuradan geç*. Gerekirse ara noktalar ekleyin.

- Başlangıç ve bitiş noktalarını ayarladıktan sonra rota haritada görüntülenecektir.

- **Rota** bloğunda:

  - Gerekirse başlangıç ve bitiş noktalarını hareket ettirin.
  - Yol noktalarını düzenleyin ve istediğiniz rota türünü seçin (örn. araba, bisiklet, yürüme).

  ![OsmAnd Web Rota Oluştur](@site/static/img/web/navigation.png)

- Farklı navigasyon seçenekleri için uygun **Rota Profilini** seçin.

  ![OsmAnd Web Rota Oluştur](@site/static/img/web/profile_type.png)

- Ayrıntılı navigasyon talimatlarını görüntülemek için rota üzerindeki turuncu dairelere tıklayın.

  ![OsmAnd Web Rota Oluştur](@site/static/img/web/nav_instr.png)

- Rotayı paylaşmak için URL'yi kopyalayın. Örnek: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)


## Parkur ve Yerel Dosyalar Oluştur {#create-track-and-local-files}

OsmAnd Web'in [**Rota planla**](../plan-route/create-route.md) aracı, mobil uygulamaya benzer şekilde parkurlar oluşturmanıza ve düzenlemenize olanak tanır. Parkurları nasıl oluşturup yöneteceğiniz aşağıda açıklanmıştır:


***Yeni bir rota oluşturma:***

- Haritaya *sağ tıklayın* ve **Yeni Rota Oluştur**'u seçin.
- Alternatif olarak, *Yerel* menüsündeki **Parkur Oluştur** düğmesini kullanın (*Kalem* ve *Yükle* düğmeleriyle birlikte sağ tarafta bulunur).


***Parkurları yönetme:***

- **Navigasyon Profilini Seçin**. Belirli rota bölümleri (*Yeni segmentler*) veya tüm rota (*Tüm segmentler*) için bir profil (örn. yürüyüş, sürüş) seçin.
- **Yol Noktaları Ekle**. Yeni noktalar eklemek için haritaya tıklayın.
- **Rotayı Kaydet**. Rotanızı ileride kullanmak üzere kaydedin.
- **Rota Ayrıntılarını Görüntüle**. Uzunluk, süre ve arazi dahil olmak üzere ayrıntılı parkur bilgilerine erişin.
  ![OsmAnd Web Parkur Oluştur](@site/static/img/web/create_route.png)


***Parkurları içe aktarma ve oluşturma:***

- **Parkuru İçe Aktar**. [osmand.net/map](https://osmand.net/map) adresini ziyaret ederek herhangi bir GPX dosyasını **Yerel** bölümüne yükleyebilirsiniz.
- **Parkur Oluştur**. Yol noktalarını seçerek manuel olarak yeni bir parkur oluşturun.
  ![OsmAnd Web Parkur Oluştur](@site/static/img/web/create_route_2.png)


***Yerel parkur eylemleri ve bilgileri:***

**Yerel Parkur** menüsü, düzenleme için üç panel sunar: **Bilgi**, **Parkur** ve **Yol Noktaları**.

**Bilgi Paneli**:

- *Buluta Kaydet*. Parkurunuzu cihazlar arası erişim için OsmAnd Cloud'a kaydedin.
- *Açıklama ekle*. Parkur hakkında notlar ekleyin.
- *Yeniden Adlandır*. Parkur adını değiştirin.
- *Yeniden Hesapla*. Yükseklik verilerini ekleyin veya güncelleyin.
- *Yükseklik*. Yükseklik profilini görüntüleyin.
- *Hız grafiği*. Parkur boyunca hız verilerini görüntüleyin.
- *Eğim grafiği*. Rota boyunca eğim değişikliklerini gösterin.
- *Yol ayrıntıları*. Yol tipi, yüzey ve eğim gibi ayrıntılı bilgileri görüntüleyin.
- *GPX İndir*. Parkuru bir GPX dosyası olarak dışa aktarın ([Pro özelliği](../purchases/index.md)).
- *Parkuru Kapat*. Parkur düzenleme görünümünü kapatın.
- *Parkuru Sil*. Parkuru kalıcı olarak silin.
  ![OsmAnd Web Parkur Oluştur](@site/static/img/web/create_route_3.png)

**Parkur Paneli**:

- Parkur noktalarını görüntüleyin ve düzenleyin.
- Gerekirse noktaları yeniden sıralayın veya silin.

**Yol Noktaları Paneli**:

- Parkur yol noktalarını görüntüleyin ve yönetin.
- Yol noktalarının haritadaki görünürlüğünü değiştirin.
- Gerekirse yol noktalarını tek tek silin.

**Dönüşler Paneli**:

- Parkur boyunca dönüşler hakkında ayrıntılı bilgileri görüntüleyin.

  ![OsmAnd Web Parkur Oluştur](@site/static/img/web/create_route_1.png)


***Ek özellikler:***

- **Uygulama ile senkronize et**. Rotaları OsmAnd Cloud'a kaydedin ve mobil uygulamanızdan erişin.
- **Özel rota profilleri**. Bisiklet veya yürüyüş gibi farklı aktivitelere uyacak şekilde profilleri ayarlayın.
- **Paylaşılabilir rotalar**. Ortak planlama için rota URL'lerini kopyalayın ve paylaşın.