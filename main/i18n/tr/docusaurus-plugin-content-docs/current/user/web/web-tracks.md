---
source-hash: 0c19d193401abb84484ff5570c24cad44445840c466f64041a7446ed6afebfa6
sidebar_position: 5
sidebar_label: Parkurlar
title: Parkurlar
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

Web Planlayıcısı, tarayıcıda kişisel verilerinizle çalışmanın basit bir yolunu sunar. Oturum açtıktan sonra, parkurlarınızı açabilir, ayarlayabilir, yeni olanlar oluşturabilir veya bilgisayarınızdan dosyaları yükleyebilirsiniz. 

Tüm değişiklikler [OsmAnd Cloud](../personal/osmand-cloud.md) üzerinden otomatik olarak senkronize edilir, bu nedenle web'de güncellediğiniz her şey cihazlarınızda görünür ve telefonunuzda oluşturduğunuz her şey burada da görünür. Bu, platformlar arasında geçiş yapmayı kolaylaştırır ve OsmAnd'ı nerede kullanırsanız kullanın verilerinizi tutarlı tutar.


## Nasıl Kullanılır {#how-to-use}

Bu, ücretli bir özelliktir <ProFeature/>. Kullanmak için OsmAnd Pro hesabınıza giriş yapın.

![Parkur girişi](@site/static/img/web/track_login.png) ![Parkur girişi](@site/static/img/web/track_login_2.png)

Parkurlar bölümü, parkurlarla ilgili tüm araçları ve eylemleri içerir. Aşağıdaki seçenekler mevcuttur:

- [OsmAnd Cloud](#cloud-tracks) içindeki parkurları göster.
- Haritaya parkur ekleme (**Haritada Görünür** klasörü).
- Tüm parkur bilgilerini ve grafiğini görüntüleme
- Parkurları değiştirme ve Buluta ekleme.
- Parkurları indirme ve silme.
- Yeni klasörler oluşturma veya silme.
- Klasörleri OSF veya OBF koleksiyonu olarak indirme.


## Parkurları İçe Aktar {#import-tracks}

GPX parkurlarını Web Planlayıcısı'na İçe Aktar düğmesini kullanarak veya GPX dosyalarını doğrudan haritaya sürükleyip bırakarak aktarabilirsiniz.

Sürükle ve bırak kullanarak bir parkuru içe aktarmak için:
- Parkurlar bölümünü açın.
- Bilgisayarınızdan bir veya daha fazla GPX dosyasını sürükleyin.
- Dosyaları haritaya veya belirli bir parkur klasörüne bırakın.

Bir dosya harita üzerine sürüklendiğinde, mevcut bırakma alanı vurgulanır. Dosyayı doğrudan haritaya bırakırsanız, İçe Aktar klasörüne aktarılır. Mevcut bir klasöre bırakırsanız, bunun yerine o klasöre aktarılır. Etkin bir [OsmAnd Pro](../purchases/index.md) aboneliği olmadan, dosya bırakmak parkur içe aktarmanın OsmAnd Pro gerektirdiğini açıklayan bir diyalog açar.

Azami dosya boyutu GPX ve KML dosyaları için 20 MB, KMZ dosyaları için 2 MB'dır. Daha büyük dosyalar içe aktarılmaz ve bunun yerine bir uyarı görünür. Aynı anda birkaç dosya içe aktardığınızda, reddedilen tüm dosyalar tek bir mesajda listelenir. OsmAnd Cloud'da zaten depolanmış olan 20 MB'tan büyük parkurlar de web üzerinde açılamaz ve bir bildirim bunları OsmAnd uygulamasında açmanızı önerir.

İçe aktarma tamamlandıktan sonra parkur, parkur listesinde görünür, [OsmAnd Cloud](../personal/osmand-cloud.md) ile senkronize edilir ve aynı hesaba bağlı tüm cihazlarda kullanılabilir hale gelir.

Bir parkur içe aktarılamıyorsa veya OsmAnd Cloud'a kaydedilemiyorsa, bir hata diyaloğu dosya adını ve mümkün olduğunda sunucunun bildirdiği nedeni gösterir.

![Sürükle ve bırak](@site/static/img/web/drag_and_drop.png)


## Haritada Görünür {#visible-on-the-map}

**Haritada Görünür** görünümü, şu anda haritada görüntülenen tüm parkurları listeler. Herhangi bir parkur, ana Parkurlar panelinden **⋮ → Parkuru görünür yap** seçeneği kullanılarak bu listeye eklenebilir.

Haritada görünür olan parkurlar mavi renkle vurgulanır, şu anda gizli olan parkurlar ise gri renkte görünür. Her parkurun yanındaki anahtar, parkuru hızlıca gösterme veya gizleme imkanı sağlar. **Tümünü Gizle** düğmesi, tüm görünür parkurları bir kerede kapatır.

Ana listenin altında, **Son görülenler** bölümü, daha önce haritada gösterilen parkurları görüntüler. Bu, bir parkuru tekrar klasörlerinizde veya OsmAnd Cloud'da aramadan kolayca tekrar açmanızı sağlar.

![Haritada görünür](@site/static/img/web/visible_new.png) ![Haritada görünür](@site/static/img/web/visible_new_2.png)


## Parkur Klasörü Menüsü {#track-folder-menu}

![Parkur klasörü menüsü](@site/static/img/web/collection_new.png)

Üç nokta düğmesine (⋮) tıklayarak *Parkur Klasörü* menüsünü açın. Buradan şunları yapabilirsiniz:

 - OSF olarak indir.
 - OBF Koleksiyonu olarak indir. Klasörü OsmAnd İkili Formatında dışa aktarın, [OBF dosyası](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) veya [Seyahat OBF](https://osmand.net/blog/routes#generated-travel-routes) seçin.
      -  **OBF dosyası**. Çevrimdışı bir OBF haritasını indirip cihazınızda OsmAnd ile açabilirsiniz. Haritada çok sayıda parkur görüntülemek için uygundur.
      -  **Seyahat OBF**. Parkurların haritasını bir seyahat kitabı olarak da içe aktarabilirsiniz, bu sayede haritada bireysel parkurları seçebilir ve bunları normal GPX dosyaları gibi kullanabilirsiniz. Bir seyahat kitabı ayrıca parkurları nokta olarak görüntüleme, parkurları aktivite türüne göre filtreleme ve işaret noktalarını filtreleme gibi özellikleri destekler.
 - Yeniden Adlandır. Seçili klasör için yeni bir ad girebileceğiniz bir iletişim kutusu açar. Değişiklik OsmAnd Cloud'a senkronize edilir ve tüm bağlı cihazlarda görünür.
 - Sil. Bir onay iletişim kutusu açar. Bir klasörü silmek, içerdiği tüm parkurlarla birlikte kalıcı olarak kaldırır. Bu eylem de OsmAnd Cloud üzerinden senkronize edilir.

![Parkur klasörü menüsü](@site/static/img/web/collection_rename.png) ![Parkur klasörü menüsü](@site/static/img/web/collection_delete.png)

### Akıllı Klasörler {#smart-folders}

Mobil cihazlarda oluşturulan **Akıllı Klasörler**, OsmAnd Cloud aracılığıyla web sürümünde senkronize edilebilir ve görüntülenebilir. Web'de görünmelerini sağlamak için Cloud ayarlarında [OsmAnd Ayarları](../personal/osmand-cloud.md#select-data-to-back-up) senkronizasyonunun etkinleştirilmesi gerekir.  
Şuraya gidin: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_data"/>*

Akıllı Klasörler şu anda genel ayarların bir parçası olarak saklandığından, yalnızca Ayarlar senkronizasyonu etkin olduğunda Bulut'a yüklenirler. Bir Akıllı Klasör oluşturduktan veya düzenledikten sonra, verileri güncellemek için el ile senkronizasyon çalıştırmanız önerilir.

Web'de Akıllı Klasörler, normal klasörlerden ayırt edilmelerini sağlayan belirgin bir yıldız simgesiyle parkur listesinde görüntülenir. Klasör adı önce senkronize edilirken, parkur listesi klasörün cihazda nasıl yapılandırıldığına bağlıdır.

Parkurlar yalnızca Akıllı Klasör yapılandırması web'de destekleniyorsa görüntülenir. Bu, hem [filtre ayarlarını](../personal/tracks/smart-folder.md#search-filter) hem de [gruplandırma seçeneklerini](../personal/tracks/smart-folder.md#managing-smart-folders) içerir. Desteklenmeyen parametreler kullanılırsa (örneğin en yakın şehir), klasör parkurlar olmadan görünebilir. En iyi uyumluluk için etkinlik, tarih, mesafe veya süre gibi yaygın parametreleri kullanın.

Akıllı Klasör senkronizasyonu, platforma ve senkronizasyon yapılandırmasına bağlı olarak değişebilir. En tutarlı sonuçlar için, tüm cihazlarda Cloud senkronizasyonunun etkin ve güncel olduğundan emin olun.

Üç nokta menüsünde (⋮), Akıllı Klasörü OBF koleksiyonu olarak indirebilir, klasörü yeniden adlandırabilir veya silebilirsiniz.

![Akıllı Klasörler](@site/static/img/web/smart_folder_new.png) ![Akıllı Klasörler](@site/static/img/web/smart_folder_menu_new.png)


## Bulut Parkurları {#cloud-tracks}

[OsmAnd Cloud](../personal/osmand-cloud.md) içindeki GPX parkurlarınız, giriş yaptıktan sonra görüntüleme ve düzenleme için kullanılabilir. Yalnızca **Pro kullanıcıları** <ProFeature/> bunlara erişebilir. [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) kullanıcıları, Pro abonelikleri sona erdikten sonra bile Bulut verilerini indirebilir.

Bir parkur seçtikten sonra harita otomatik olarak ortalanır ve yakınlaştırma düzeyini ayarlayarak tüm parkuru görünür harita alanında gösterir.

Ayrıca **Odak** düğmesini kullanarak haritadaki diğer tüm favorileri ve parkurları gizleyebilirsiniz, bu da seçili parkuru incelemeyi kolaylaştırır. Odak modunu kapatmak diğer harita nesnelerinin görünürlüğünü geri yükler.

Bulut parkuru seçildikten sonra aşağıdaki özellikler mevcuttur:
- *Bilgi* - parkur verilerini görüntüleme.
- *Yükseklik* - yükseklik grafiği.
- *Hız* - hız grafiği.
- *Eğim* - eğim grafiği.
- *Yükseklik Yeniden Hesapla (Uydu)* - seçili parkur için yükseklik değerlerini yeniden hesaplar ve bunları yükseklik grafiğinde gösterir.
- *Yol tipi* - parkuru yol sınıflandırmasına göre segmentlere ayırma.
- *Yüzey* - rota boyunca parkur yüzey türlerini gösterme.
- *Pürüzsüzlük* - OSM etiketlerine dayalı segment pürüzsüzlüğünü görüntüleme.

![OsmAnd Web bulut GPX düzenleme](@site/static/img/web/cloud_track_new.png) ![OsmAnd Web bulut GPX düzenleme](@site/static/img/web/cloud_track_details_new.png)


## İlgili Makaleler {#related-articles}

- [Parkurları Yönetme](../personal/tracks/manage-tracks.md)
- [Parkur Analizörü](../web/web-tracks-analyzer.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)