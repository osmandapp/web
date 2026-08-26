---
source-hash: fdc663d456ec4a461fac3f4ef3baf08d8c7af8e8006a87ec3621c334120d364a
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

Favoriler, Web Planlayıcı'da harita üzerinde önemli yerleri doğrudan kaydetmenize ve yönetmenize olanak tanır. Hızlı erişim istediğiniz konumları işaretlemek, bunları klasörlere organize etmek ve navigasyon veya rota planlama için yeniden kullanmak amacıyla kullanılabilirler. Web arayüzü, haritayı keşfederken favorileri görüntülemek, düzenlemek ve bunlarla çalışmak için kullanışlı araçlar sağlar; tüm güncellemeler [OsmAnd Cloud](../personal/osmand-cloud.md) üzerinden sorunsuz bir şekilde senkronize edilir.


## Favorileri Yönet {#manage-favorites}

![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites_1_new.png)

[**OsmAnd Pro**](../personal/osmand-cloud.md#login) kaydı yaptıktan ve [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) için, Web Planlayıcı'daki Favorileriniz klasörlere organize edilir. Her klasör, kaydedilen yerleri gruplar ve Favoriler menüsünden kullanılabilir bir dizi eylem sağlar. 
Aşağıdaki eylemler kullanılabilir:

- *Haritada göster* - seçilen klasördeki favori noktaları haritada göster.
- *Klasörü sabitle* - bir klasörü Favoriler listesinin üst kısmına hızlı erişim için sabitleyin. Sabitlenmiş klasörler diğer klasörlerden ayrılır. Bir klasörü üst bölümden kaldırmak için *Klasörü sabitlenmeyi kaldır* seçin. Kişisel klasör varsayılan olarak sabitlenmiştir.
- *Yeniden adlandır* - favori klasörünün adı ve açıklaması.
- *Paylaş* - paylaşım seçeneklerini açar. Bu klasöre kimin erişebileceğini seçebilirsiniz.
- *İndir* - seçilen favori klasörünü indir.
- *Sil* - seçilen favori klasörünü sil.

Bir favoriler klasörü seçtiğinizde, harita otomatik olarak ortalanır ve yakınlaştırma düzeyini ayarlayarak o klasördeki tüm favori noktaları görünür harita alanında gösterir.

Ayrıca, seçilen klasörü incelemeyi kolaylaştırmak için diğer tüm favorileri ve izleri haritada gizlemek üzere **Odak** düğmesini kullanabilirsiniz. Odak modunu kapatmak, diğer harita nesnelerinin görünürlüğünü geri yükler.

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

![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites_share.png) ![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites_share_2.png)


## Favori Detayları {#favorites-details} 

Bir favoriyi seçmek, **Detaylar** panelini açar. Bu panel, harita üzerinde bir favoriye doğrudan tıkladığınızda veya bir favoriler klasöründen seçtiğinizde görünür.

Detaylar görünümü, seçilen yerle ilişkili bilgileri sağlar ve o belirli favori için mevcut verilere bağlıdır. En azından haritadaki konumu ve coğrafi koordinatlarını içerir. OpenStreetMap nesnelerine veya zenginleştirilmiş kaynaklara bağlı yerler için, ek meta veriler gösterilebilir; örneğin isimler, kategoriler, tanımlayıcılar veya referans bağlantıları (örneğin, Wikipedia veya Wikidata bağlantıları). 

![Web Favorites Details](@site/static/img/web/favorites_details.png)


## Favori Eylemleri {#favorites-actions}

[Yeni bir favori noktası eklemek](../personal/favorites.md#manage-favorites) için ekrana sağ tıklayın. 

Mevcut bir favoriyi düzenlemek için, favori noktasına harita üzerinde doğrudan tıklayın veya bir favoriler klasöründen seçin. Bu, Detaylar panelini açar; burada Düzenle eylemi kullanılabilir. Düzenleme ayrıca Favoriler listesindeki favorinin yanındaki üç nokta menüsünden (⋮) başlatılabilir.

Düzenleme paneli, favorinin ana özelliklerini değiştirmenize olanak tanır; örneğin adı, adresi, açıklaması, klasörü, simgesi, rengi ve şekli. Seçilen görünüm hem düzenleme panelinde hem de doğrudan harita üzerinde önizlenir.

### Favorileri Düzenle {#edit-favorites}

**Adres** alanı, seçilen harita konumuna göre otomatik adres algılamayı destekler. Alan birkaç durumda görünebilir:

- Aranıyor... — adres otomatik olarak belirlenirken görüntülenir.
- Boş alan — adres temizlendikten sonra görüntülenir. Bu durumda, konumu yeniden otomatik olarak algılamak için konum düğmesi kullanılabilir.
- Doldurulmuş alan — otomatik olarak algılanan adresi veya manuel olarak girilen metni görüntüler.

Adres alanı ayrıca algılanan adresi temizleme veya geri yükleme için hızlı eylemler içerir.

**Açıklama** bölümü, favoriye notlar veya ek bilgiler eklemenize olanak tanır. Not ekle seçilmesi, açıklamayı ikincil bir panelde düzenleyici olarak açar. Zaten bir açıklama eklenmişse, ana panelde kısa bir önizleme görüntülenir ve iki metin satırıyla sınırlıdır. Açıklama düzenleyici zengin metin biçimlendirmesini destekler ve önceki panele dönüldüğünde değişiklikleri otomatik olarak korur.

Favoriler, daha kolay yönetim ve hızlı erişim için klasörler halinde düzenlenebilir. **Klasör** öğesi seçilmesi, mevcut klasörlerin seçilebileceği ikincil bir paneli açar. Önceden kullanılan klasör varsayılan olarak otomatik olarak seçilir. Her klasör ayrıca içinde depolanan favori noktalarının sayısını da gösterir.

Yeni klasörler doğrudan klasör seçim panelinden oluşturulabilir. Klasör ekle düğmesi seçilmesi, klasör adını girebileceğiniz ve Favoriler listesindeki konumunu seçebileceğiniz bir iletişim kutusunu açar.

İletişim kutusu ayrıca Gelişmiş bölümünü içerir; burada klasör için varsayılan görünüm ayarları yapılandırılabilir. Bu ayarlar, bu klasöre eklenen favori noktalarına otomatik olarak uygulanacak varsayılan rengi, simgeyi ve şekli içerir.

![Web Edit Folder](@site/static/img/web/edit_folder.png)

### Görünüm {#appearance}

**Görünüm** bölümü, favorinin harita üzerinde nasıl görüntürüleceğini özelleştirmenize olanak tanır. Aşağıdaki özellikler kullanılabilir: simge, renk, şekil ve simge. 

**Simge** seçilmesi, kategorilere ayrılmış simge gruplarını içeren ikincil bir paneli açar.

- Simgeler kategorilere göre gruplandırılır.
- Son kullanılan simgeler önce görüntülenir.
- Şu anda seçili simge vurgulanır.
- Önizleme seçilen şekli ve rengi kullanır.

**Renk** seçilmesi, renk paleti panelini açar.

- Palet önceden tanımlanmış ve kullanıcı tanımlı renkler içerir.
- Özel renkler renk seçici kullanılarak eklenebilir.
- Renkler bağlam menüsü aracılığıyla düzenlenebilir, çoğaltılabilir veya kaldırılabilir.
- Yeni eklenen renkler kullanıcı paletine kaydedilir ve daha sonra kullanılabilir kalır.

**Şekil** seçeneği, favori işaretçisi için kullanılan arka plan formunu tanımlar.  Aşağıdaki şekiller kullanılabilir: daire, kare ve sekizgen.

Görünüm önizlemesi, simge, renk veya şekil değiştirildiğinde hem düzenleme panelinde hem de harita üzerinde hemen güncellenir.

![Web Edit Appearance](@site/static/img/web/edit_icon.png)

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