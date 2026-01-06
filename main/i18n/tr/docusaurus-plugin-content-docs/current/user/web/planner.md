---
source-hash: f973f145e5f4519df92ee087ead534986bb074b9e858cae169c3d3c6b00b1839
sidebar_position: 9
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


## Overview {#overview}

OsmAnd Web Rota Planlayıcı, doğrudan tarayıcınızdan navigasyon rotaları oluşturmanıza, parkurları planlamanıza ve yerel dosyaları yönetmenize olanak tanır. Bu web aracı, uygulamanızla senkronize edebileceğiniz veya başkalarıyla paylaşabileceğiniz ayrıntılı seyahat rotaları oluşturmak için kullanışlıdır.


<!--
## Navigation Route {#navigation-route}

To create a navigation route, follow these steps:

- **Right-click** on the map to add waypoints:

  - *Navigate from*. Set the starting point.
  - *Navigate to*. Set the destination.
  - *Navigate via*. Add intermediate points if needed.

- After setting the start and end points, the route will be displayed on the map.

- In the **Route** block:

  - Move the start and end points if needed.
  - Edit the waypoints and choose the desired route type (e.g., car, bicycle, walking).

  ![OsmAnd Web Create Route](@site/static/img/web/navigation.png)

- Select the appropriate **Route Profile** for different navigation options.

  ![OsmAnd Web Create Route](@site/static/img/web/profile_type.png)

- Click on the orange circles along the route to view detailed navigation instructions.

  ![OsmAnd Web Create Route](@site/static/img/web/nav_instr.png)

- To share the route, copy the URL. Example: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)

-->


## Create Track and Local Files {#create-track-and-local-files}

OsmAnd Web'in [**Rota planla**](../plan-route/create-route.md) aracı, mobil uygulamaya benzer şekilde parkurlar oluşturmanıza ve düzenlemenize olanak tanır. Parkurları nasıl oluşturup yöneteceğiniz aşağıda açıklanmıştır:


***Creating a new route:***

- Haritaya *sağ tıklayın* ve **Yeni Rota Oluştur**'u seçin.
- Alternatif olarak, *Yerel* menüsündeki **Parkur Oluştur** düğmesini kullanın (*Kalem* ve *Yükle* düğmeleriyle birlikte sağ tarafta bulunur).


***Managing tracks:***

- **Navigasyon Profilini Seçin**. Belirli rota bölümleri (*Yeni segmentler*) veya tüm rota (*Tüm segmentler*) için bir profil (örn. yürüyüş, sürüş) seçin.
- **Yol Noktaları Ekle**. Yeni noktalar eklemek için haritaya tıklayın.
- **Rotayı Kaydet**. Rotanızı ileride kullanmak üzere kaydedin.
- **Rota Ayrıntılarını Görüntüle**. Uzunluk, süre ve arazi dahil olmak üzere ayrıntılı parkur bilgilerine erişin.
  ![OsmAnd Web Parkur Oluştur](@site/static/img/web/create_route.png)


***Importing and creating tracks:***

- **Parkuru İçe Aktar**. [osmand.net/map](https://osmand.net/map) adresini ziyaret ederek herhangi bir GPX dosyasını **Yerel** bölümüne yükleyebilirsiniz.
- **Parkur Oluştur**. Yol noktalarını seçerek manuel olarak yeni bir parkur oluşturun.
  ![OsmAnd Web Parkur Oluştur](@site/static/img/web/create_route_2.png)


***Local track actions and information:***

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


***Additional features:***

- **Uygulama ile senkronize et**. Rotaları OsmAnd Cloud'a kaydedin ve mobil uygulamanızdan erişin.
- **Özel rota profilleri**. Bisiklet veya yürüyüş gibi farklı aktivitelere uyacak şekilde profilleri ayarlayın.
- **Paylaşılabilir rotalar**. Ortak planlama için rota URL'lerini kopyalayın ve paylaşın.