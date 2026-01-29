---
source-hash: efbd8cb409a1e8ef85e36e19d96eeb7a90fa212c810385f1ad6562e2e09d6d40
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

<!--
<InfoIncompleteArticle/>
-->


## Overview {#overview}

OsmAnd Web Rota Planlayıcı, tarayıcınızdan doğrudan navigasyon rotaları oluşturmanıza, parkurları planlamanıza ve yerel dosyaları yönetmenize olanak tanır. Bu web aracı, uygulamanızla senkronize edebileceğiniz veya başkalarıyla paylaşabileceğiniz ayrıntılı seyahat rotaları oluşturmak için kullanışlıdır.


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


## Yeni Rota Oluştur {#create-new-route}

Rota Planla'da yeni bir rota başlatmanın iki yolu vardır. İlk seçenek doğrudan haritadan: haritanın herhangi bir yerine sağ tıklayın ve **Yeni rota oluştur**'u seçin. İkinci seçenek sol panelden: **Parkur oluştur** düğmesine tıklayın.

Rota oluşturulduktan sonra, noktaları doğrudan haritaya ekleyin. Her tıklama bir sonraki noktayı yerleştirir ve planlayıcı noktalar arasında rotayı oluşturur.

![OsmAnd Web Create New Route](@site/static/img/web/create_new_route.png)

### Parkur İçe Aktar {#import-track}

Zaten bir parkur dosyanız varsa, bunu Rota Planla'ya içe aktarabilir ve Web Planlayıcı'da onunla çalışmaya devam edebilirsiniz. **Parkur içe aktar** düğmesine tıklayın ve bilgisayarınızdan bir GPX dosyası seçin. Yükleme tamamlandıktan sonra, parkur yerel listenizde görünür ve planlayıcıda açılır, böylece haritada inceleyebilir ve parkur panellerinde düzenleme ve yönetme işlemlerine devam edebilirsiniz.

### Yerel Dosyalar {#local-files}

Rota Planla'da oluşturduğunuz veya içe aktardığınız tüm rotalar ve parkurlar, sol paneldeki Yerel listesine eklenir. Bu, birden fazla GPX dosyasını tek bir yerde tutmayı ve planlama sırasında aralarında geçiş yapmayı kolaylaştırır.

Listedeki her öğe, parkuru haritada hızlıca gösterip gizlemenize olanak tanıyan bir geçiş anahtarı içerir. Listeden bir parkur seçerek planlayıcıda açın ve onunla çalışmaya devam edin. 

![OsmAnd Web Create New Route](@site/static/img/web/local_files.png)


## Parkuru Yönet {#manage-track}

Rota Planla'da bir rota oluşturduğunuzda veya içe aktardığınızda, dikey bir parkur paneli açılır. Bu paneli, yönlendirme profilini değiştirmek ve rotayı yönetmek için kullanın. Profil denetimine tıklayarak **Profili değiştir** iletişim kutusunu açın, ihtiyacınız olan profili seçin (örneğin, Araba, Bisiklet veya Yaya) ve nasıl uygulanacağını seçin: *Sonraki segmentler* profili yalnızca bu noktadan itibaren eklenen yeni kısımlara uygular, *Tüm segmentler* ise seçilen profille tüm rotayı yeniden hesaplar.

Parkur panelinden ayrıca yaygın dosya işlemlerini gerçekleştirebilirsiniz. Rotayı daha sonra kullanmak için **Buluta Kaydet**'i, dosyaya dışa aktarmak için **GPX İndir**'i, düzenlemeyi durdurmak için **Parkuru Kapat**'ı veya yerel listenizden kaldırmak için **Parkuru Sil**'i kullanabilirsiniz. Bu işlemler ayrıca [Bilgi paneli](#info-panel)'ndeki ilgili denetimlerden de kullanılabilir.

![OsmAnd Web Manage Track](@site/static/img/web/manage_track_new.png) ![OsmAnd Web Manage Track](@site/static/img/web/change_profile.png)


## Parkur Ayrıntı Panelleri {#track-details-panels}

Yerel parkur menüsü, üç panel içerir: **Bilgi**, **Parkur** ve **Yol Noktaları**. Parkur bilgilerini görüntülemek ve rota noktalarını ile yol noktalarını yönetmek için bunları kullanın.

### Bilgi Paneli {#info-panel}

Bilgi paneli, seçili parkuru özetler ve ana rota ile yükseklik verilerini gösterir. Rota istatistiklerinin hızlı bir genel bakışını içerir, ayrıca mevcut harita verilerine dayalı grafik ve ek parkur analizleri sunar.

Özet bölümünde şunlar gösterilir:

- Noktalar — rotayı oluşturmak için kullanılan rota noktalarının sayısı.
- Mesafe — toplam rota uzunluğu.
- Yokuş yukarı / yokuş aşağı — rota boyunca toplam yükselme ve toplam iniş.
- Yükseklik (min/ort/max) — rota için yükseklik istatistikleri.
- Yükseklik verisi eksikse veya güncellenmesi gerekiyorsa, Yükseklik (Uydu) → yeniden hesapla'yı kullanarak yükseklik verilerini uydu verileriyle (kullanılabilir olduğunda) yeniden oluşturun.

Özetin altında, panel grafikler sağlar:

- Yükseklik — rotanın yükseklik profili.
- Eğim — parkur boyunca eğim değişikliklerini gösteren eğim grafiği.

Ek parkur ayrıntıları için analiz bölümlerini açın:

- Yüzey — OSM verilerine dayalı rota boyunca yüzey tiplerini gösterir.
- Pürüzsüzlük — OSM etiketlerine dayalı segment pürüzsüzlüğünü gösterir.

Kaydetme, indirme, kapatma ve silme gibi yaygın parkur işlemleri bu panelde de mevcuttur.

![OsmAnd Web Info Panel](@site/static/img/web/info_panel.png) ![OsmAnd Web Manage Track](@site/static/img/web/info_panel_2.png)

### Parkur Paneli {#track-panel}

Parkur paneli, parkuru oluşturmak için kullanılan rota noktalarının listesini gösterir. Rota yapısını incelemek ve düzenlemek için kullanın: noktaları sürükleyerek yeniden sıralayın, silme simgesini kullanarak noktaları kaldırın veya tüm noktaları kaldırmak ve baştan başlamak için Noktaları Temizle'yi kullanın.

![OsmAnd Web Track Panel](@site/static/img/web/track_panel.png)

### Yol Noktaları Paneli {#waypoints-panel}

Yol Noktaları paneli, seçili parkur için yol noktalarını görüntülemek ve yönetmek için kullanılır. Yol noktaları harita bağlam menüsünden eklenebilir — haritaya sağ tıklayın ve **Yol noktası ekle** seçeneğini seçin, ardından yol noktası ayrıntılarını (ad, simge ve renk gibi) doldurun ve kaydedin.

Yol Noktaları listesinde, yol noktalarının haritada gösterilip gösterilmeyeceğini kontrol edebilir ve gerektiğinde bireysel yol noktalarını kaldırabilirsiniz. Parkurdan tüm yol noktalarını bir kerede kaldırmak için *Tüm yol noktalarını temizle*'yi kullanın.

![OsmAnd Web Waypoints Panel](@site/static/img/web/waypoints_panel.png)


## İlgili Makaleler {#related-articles}

- [Rota Planla](../plan-route/create-route.md)
- [Seyahat Rehberleri](../plan-route/travel-guides.md)
- [Navigasyon](../web/web-navigation.md)