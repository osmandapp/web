---
source-hash: ef13b994168cf04dcf98784cf4ef75aea6eb57a3e4db536a0fa48e3617173008
sidebar_position: 6
sidebar_label: Favoriler
title: Favoriler
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

Web Planlayıcı'daki Favoriler, harita üzerinde önemli yerleri doğrudan kaydetmenize ve yönetmenize olanak tanır. Hızlı erişim istediğiniz konumları işaretlemek, bunları klasörlere organize etmek ve navigasyon veya rota planlama için yeniden kullanmak amacıyla kullanılabilirler. Web arayüzü, haritayı keşfederken favorileri görüntülemek, düzenlemek ve bunlarla çalışmak için kullanışlı araçlar sağlar; tüm güncellemeler [OsmAnd Cloud](../personal/osmand-cloud.md) üzerinden sorunsuz bir şekilde senkronize edilir.


## Favorileri Yönet {#manage-favorites}

![OsmAnd Web bulut Favoriler düzenle](@site/static/img/web/favorites_new.png)

[**OsmAnd Pro**](../personal/osmand-cloud.md#login) kaydı yaptıktan ve [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) için, Web Planlayıcı'daki Favorileriniz klasörlere organize edilir. Her klasör, kaydedilen yerleri gruplar ve Favoriler menüsünden kullanılabilir bir dizi eylem sağlar. 
Aşağıdaki eylemler kullanılabilir:

- *Haritada göster* - seçilen klasördeki favori noktaları haritada göster.
- *Yeniden adlandır* - favori klasörünün adı ve açıklaması.
- *Paylaş* - paylaşım seçeneklerini açar. Bu klasöre kimin erişebileceğini seçebilirsiniz:
- *İndir* - seçilen favori klasörünü indir.
- *Sil* - seçilen favori klasörünü sil.

### Paylaş {#share}

**Paylaş** seçeneğini belirlemek, paylaşım ekranını açar; burada bir Favoriler klasörüne erişim yapılandırılabilir. Aşağıdaki erişim modlarından biri seçilebilir:
- *Özel*. Yalnızca siz klasörü görüntüleyebilirsiniz. Özel'e geçiş, daha önce onaylanmış tüm kullanıcıların erişimini iptal eder. Değişiklik uygulanmadan önce bir onay iletişim kutusu gösterilir.
- *Sadece istek*. Linke sahip herkes erişim isteyebilir. İstekler Bekleyen listesinde görünür; burada onaylanabilir, reddedilebilir veya engellenebilir.
- *Herkes*. Linke sahip herkes, onay olmadan hemen klasörü görüntüleyebilir.  
Seçilen erişim moduna bağlı olarak, **Linki kopyala** düğmesi kullanılabilir hale gelir. Link, görüntüleme veya erişim isteği için paylaşılabilir.

Paylaşım ekranı üç kullanıcı listesi içerir:
- Onaylanmış — klasöre şu anda erişimi olan kullanıcılar.
- Bekleyen — erişim isteyen ve onay veya ret bekleyen kullanıcılar.
- Engellenmiş — erişim veya erişim isteği izin verilmeyen kullanıcılar.  
Her kullanıcı girişi, durumlarını değiştirme veya erişimi kaldırma olanağı sağlayan bir menü içerir.

Erişim yapılandırması sırasında aşağıdaki iletişim kutuları görünebilir:
- *Erişimi değiştir*. Klasörü Özel'e geçirirken görüntülenir. İletişim kutusu, değişikliği onaylamadan önce tüm mevcut kullanıcı erişiminin iptal edileceğini uyarır.
- *Erişim istekleri*. Bekleyen listesinde kullanıcıları yönetirken görüntülenir; erişim isteklerinin onaylanmasına veya reddedilmesine olanak tanır.

![OsmAnd Web bulut Favoriler paylaş](@site/static/img/web/favorites_share.png) ![OsmAnd Web bulut Favoriler paylaş](@site/static/img/web/favorites_share_2.png)


## Favori Detayları {#favorites-details} 

Bir favoriyi seçmek, **Detaylar** panelini açar. Bu panel, harita üzerinde bir favoriye doğrudan tıkladığınızda veya bir favoriler klasöründen seçtiğinizde görünür.

Detaylar görünümü, seçilen yerle ilişkili bilgileri sağlar ve o belirli favori için mevcut verilere bağlıdır. En azından haritadaki konumu ve coğrafi koordinatlarını içerir. OpenStreetMap nesnelerine veya zenginleştirilmiş kaynaklara bağlı yerler için, ek meta veriler gösterilebilir; örneğin isimler, kategoriler, tanımlayıcılar veya referans bağlantıları ([Wikipedia](../plugins/wikipedia.md) veya Wikidata bağlantıları gibi). 

![Web Favori Detayları](@site/static/img/web/favorites_details.png)


## Favori Eylemleri {#favorites-actions}

### Favori Ekle / Düzenle {#add--edit-favorite}

Yeni bir favori nokta [eklemek](../personal/favorites.md#manage-favorites) için ekrana sağ tıklayın. 

Mevcut bir favoriyi düzenlemek için, favori noktasına harita üzerinde doğrudan tıklayın veya bir favoriler klasöründen seçin. Bu, Detaylar panelini açar; burada Düzenle eylemi kullanılabilir. Düzenleme ayrıca Favoriler listesindeki favorinin yanındaki üç nokta menüsünden (⋮) başlatılabilir.

Düzenleme arayüzü, favorinin ana özelliklerini değiştirmenize olanak tanır; örneğin adı, simgesi, rengi ve açıklaması. Düzen ve mevcut alanlar, [OsmAnd mobil uygulamasındaki](../personal/favorites.md#create) düzenleme deneyimiyle tutarlıdır; platformlar arasında tanıdık bir iş akışı sağlar.

![OsmAnd Web Favori ekle](@site/static/img/web/web_favorites_add.png)


### Diğer Eylemler {#other-actions}

Düzenlemenin yanı sıra, her favori Detaylar panelinden veya Favoriler listesindeki üç nokta menüsünden (⋮) erişilebilen birkaç başka eylem sağlar:
- *Sil* - seçilen favoriyi kalıcı olarak kaldırır. Bu eylem hem Detaylar panelinden hem de üç nokta menüsünden kullanılabilir. Silme, senkronizasyondan sonra tüm cihazlardaki favoriyi etkiler.
- *Paylaş* - bu eylem, yere doğrudan bir bağlantı paylaşmanıza olanak tanır.
- *Yol tarifi al* - seçilen favoriyi rota planlama için başlangıç noktası olarak ayarlar. Rota paneli otomatik olarak açılır; hedef seçmenize ve navigasyon profilini belirlemenize olanak tanır.
- *Navigasyon* - seçilen favoriyi hedef noktası olarak ayarlar. 


## İlgili Makaleler {#related-articles}

- [Favoriler](../personal/favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Harita Bağlam Menüsü](../map/map-context-menu.md)
- [Wikipedia](../plugins/wikipedia.md)