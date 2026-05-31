---
source-hash: db70d151504e034314031d79cbef9cd64a6f7a15179603897056aa6b65a3d432
sidebar_position: 5
sidebar_label: İzler
title: İzler
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

Web Planlayıcısı, tarayıcıda kişisel verilerinizle çalışmanın basit bir yolunu sunar. Oturum açtıktan sonra, izlerinizi açabilir, ayarlayabilir, yeni olanlar oluşturabilir veya bilgisayarınızdan dosyaları yükleyebilirsiniz. 

Tüm değişiklikler [OsmAnd Cloud](../personal/osmand-cloud.md) üzerinden otomatik olarak senkronize edilir, bu nedenle web'de güncellediğiniz her şey cihazlarınızda görünür ve telefonunuzda oluşturduğunuz her şey burada da görünür. Bu, platformlar arasında geçiş yapmayı kolaylaştırır ve OsmAnd'ı nerede kullanırsanız kullanın verilerinizi tutarlı tutar.


## Nasıl Kullanılır {#how-to-use}

Bu, ücretli bir özelliktir <ProFeature/>. Kullanmak için OsmAnd Pro hesabınıza giriş yapın.

![Track login](@site/static/img/web/track_login.png) ![Track login](@site/static/img/web/track_login_2.png)

İzler bölümü, izlerle ilgili tüm araçları ve eylemleri içerir. Aşağıdaki seçenekler mevcuttur:

- [OsmAnd Cloud](#cloud-tracks) içindeki izleri göster.
- Haritaya iz ekleme (**Haritada Görünür** klasörü).
- Tüm iz bilgilerini ve grafiğini görüntüleme
- İzleri değiştirme ve Buluta ekleme.
- İzleri indirme ve silme.
- Yeni klasörler oluşturma veya silme.
- Klasörleri OSF veya OBF koleksiyonu olarak indirme.


## Haritada Görünür {#visible-on-the-map}

**Haritada Görünür** görünümü, şu anda haritada görüntülenen tüm izleri listeler. Herhangi bir iz, ana İzler panelinden **⋮ → İz'i görünür yap** seçeneği kullanılarak bu listeye eklenebilir.

Haritada görünür olan izler mavi renkle vurgulanır, şu anda gizli olan izler ise gri renkte görünür. Her izin yanındaki anahtar, izi hızlıca gösterme veya gizleme imkanı sağlar. **Tümünü Gizle** düğmesi, tüm görünür izleri bir kerede kapatır.

Ana listenin altında, **Son Görünür** bölümü, daha önce haritada gösterilen izleri görüntüler. Bu, bir izi tekrar klasörlerinizde veya OsmAnd Cloud'da aramadan kolayca tekrar açmanızı sağlar.

![Visible on the map](@site/static/img/web/visible_new.png) ![Visible on the map](@site/static/img/web/visible_new_2.png)


## İz Klasörü Menüsü {#track-folder-menu}

![Track folder menu](@site/static/img/web/collection_new.png)

Üç nokta düğmesine (⋮) tıklayarak *İz Klasörü* menüsünü açın. Buradan şunları yapabilirsiniz:

 - OSF olarak indir.
 - OBF Koleksiyonu olarak indir. Klasörü OsmAnd İkili Formatında dışa aktarın, [OBF dosyası](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) veya [Seyahat OBF](https://osmand.net/blog/routes#generated-travel-routes) seçin.
      -  **OBF dosyası**. Çevrimdışı bir OBF haritasını indirip cihazınızda OsmAnd ile açabilirsiniz. Haritada çok sayıda iz görüntülemek için uygundur.
      -  **Seyahat OBF**. İzlerin haritasını bir seyahat kitabı olarak da içe aktarabilirsiniz, bu sayede haritada bireysel izleri seçebilir ve bunları normal GPX dosyaları gibi kullanabilirsiniz. Bir seyahat kitabı ayrıca izleri nokta olarak görüntüleme, izleri aktivite türüne göre filtreleme ve işaret noktalarını filtreleme gibi özellikleri destekler.
 - Yeniden Adlandır. Seçili klasör için yeni bir ad girebileceğiniz bir iletişim kutusu açar. Değişiklik OsmAnd Cloud'a senkronize edilir ve tüm bağlı cihazlarda görünür.
 - Sil. Bir onay iletişim kutusu açar. Bir klasörü silmek, içerdiği tüm izlerle birlikte kalıcı olarak kaldırır. Bu eylem de OsmAnd Cloud üzerinden senkronize edilir.

![Track folder menu](@site/static/img/web/collection_rename.png) ![Track folder menu](@site/static/img/web/collection_delete.png)

### Akıllı Klasörler {#smart-folders}

Mobil cihazlarda oluşturulan **Akıllı Klasörler**, OsmAnd Cloud aracılığıyla web sürümünde senkronize edilebilir ve görüntülenebilir. Web'de görünmelerini sağlamak için Cloud ayarlarında [OsmAnd Ayarları](../personal/osmand-cloud.md#select-data-to-back-up) senkronizasyonunun etkinleştirilmesi gerekir.  
Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_data"/>*

Akıllı Klasörler şu anda genel ayarların bir parçası olarak saklandığından, yalnızca Ayarlar senkronizasyonu etkin olduğunda Bulut'a yüklenirler. Bir Akıllı Klasör oluşturduktan veya düzenledikten sonra, verileri güncellemek için el ile senkronizasyon çalıştırmanız önerilir.

Web'de Akıllı Klasörler, normal klasörlerden ayırt edilmelerini sağlayan belirgin bir yıldız simgesiyle iz listesinde görüntülenir. Klasör adı önce senkronize edilirken, iz listesi klasörün cihazda nasıl yapılandırıldığına bağlıdır.

İzler yalnızca Akıllı Klasör yapılandırması web'de destekleniyorsa görüntülenir. Bu, hem [filtre ayarlarını](../personal/tracks/smart-folder.md#search-filter) hem de [gruplandırma seçeneklerini](../personal/tracks/smart-folder.md#managing-smart-folders) içerir. Desteklenmeyen parametreler kullanılırsa (örneğin en yakın şehir), klasör izler olmadan görünebilir. En iyi uyumluluk için etkinlik, tarih, mesafe veya süre gibi yaygın parametreleri kullanın.

Akıllı Klasör senkronizasyonu, platforma ve senkronizasyon yapılandırmasına bağlı olarak değişebilir. En tutarlı sonuçlar için, tüm cihazlarda Cloud senkronizasyonunun etkin ve güncel olduğundan emin olun.

Üç nokta menüsünde (⋮), Akıllı Klasörü OBF koleksiyonu olarak indirebilirsiniz.

![Smart Folders](@site/static/img/web/smart_folder.png) ![Smart Folders](@site/static/img/web/smart_folder_menu.png)


## Bulut İzleri {#cloud-tracks}

[OsmAnd Cloud](../personal/osmand-cloud.md) içindeki GPX izleriniz, giriş yaptıktan sonra görüntüleme ve düzenleme için kullanılabilir. Yalnızca **Pro kullanıcıları** <ProFeature/> için ve [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) kullanıcıları için (Pro abonelikleri sona erdikten sonra bile verilerini indirebilirler).

Bulut izi seçildikten sonra aşağıdaki özellikler mevcuttur:
- *Bilgi* - iz verilerini görüntüleme.
- *Yükseklik* - yükseklik grafiği.
- *Hız* - hız grafiği.
- *Eğim* - eğim grafiği.
- *Yükseklik Yeniden Hesapla (Uydu)* - seçili iz için yükseklik değerlerini yeniden hesaplar ve bunları yükseklik grafiğinde gösterir.
- *Yol tipi* - izi yol sınıflandırmasına göre segmentlere ayırma.
- *Yüzey* - rota boyunca iz yüzey türlerini gösterme.
- *Pürüzsüzlük* - OSM etiketlerine dayalı segment pürüzsüzlüğünü görüntüleme.

![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_new.png) ![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_details_new.png)


## İlgili Makaleler {#related-articles}

- [İzleri Yönetme](../personal/tracks/manage-tracks.md)
- [İz Analizörü](../web/web-tracks-analyzer.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)