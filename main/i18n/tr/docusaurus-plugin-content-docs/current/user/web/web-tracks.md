---
source-hash: ece3e6010ee14839c5fe53b38593cda3c765a31a9395566df04b16ce2b73c3b4
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

![İz girişi](@site/static/img/web/track_login.png) ![İz girişi](@site/static/img/web/track_login_2.png)

İzler bölümü, izlerle ilgili tüm araçları ve eylemleri içerir. Aşağıdaki seçenekler mevcuttur:

- [OsmAnd Cloud](#cloud-tracks) içindeki izleri göster.
- Haritaya iz ekleme (**Haritada Görünür** klasörü).
- Tüm iz bilgilerini ve grafiği görüntüleme
- İzleri değiştirme ve Buluta ekleme.
- İzleri indirme ve silme.
- Yeni klasörler oluşturma veya silme.
- Klasörleri OSF veya OBF koleksiyonu olarak indirme.


## Haritada Görünür {#visible-on-the-map}

**Haritada Görünür** görünümü, şu anda haritada görüntülenen tüm izleri listeler. Herhangi bir iz, ana İzler panelinden **⋮ → İz'i görünür yap** seçeneği kullanılarak bu listeye eklenebilir.

Haritada görünür olan izler mavi renkle vurgulanır, şu anda gizli olan izler ise gri renkte görünür. Her izin yanındaki anahtar, izi hızlıca gösterme veya gizleme imkanı sağlar. **Tümünü Gizle** düğmesi, tüm görünür izleri bir kerede kapatır.

Ana listenin altında, **Son Görünür** bölümü, daha önce haritada gösterilen izleri görüntüler. Bu, bir izi tekrar klasörlerinizde veya OsmAnd Cloud'da aramadan kolayca tekrar açmanızı sağlar.

![Haritada Görünür](@site/static/img/web/visible_new.png) ![Haritada Görünür](@site/static/img/web/visible_new_2.png)


## İz Klasörü Menüsü {#track-folder-menu}

![İz klasörü menüsü](@site/static/img/web/collection_new.png)

Üç nokta düğmesine (⋮) tıklayarak *İz Klasörü* menüsünü açın. Buradan şunları yapabilirsiniz:

 - OSF olarak indir.
 - OBF Koleksiyonu olarak indir. Klasörü OsmAnd İkili Formatında dışa aktarın, [OBF dosyası](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) veya [Seyahat OBF](https://osmand.net/blog/routes#generated-travel-routes) seçin.
      -  **OBF dosyası**. Çevrimdışı bir OBF haritasını indirip cihazınızda OsmAnd ile açabilirsiniz. Haritada çok sayıda iz görüntülemek için uygundur.
      -  **Seyahat OBF**. İzlerin haritasını bir seyahat kitabı olarak da içe aktarabilirsiniz, bu sayede haritada bireysel izleri seçebilir ve bunları normal GPX dosyaları gibi kullanabilirsiniz. Bir seyahat kitabı ayrıca izleri nokta olarak görüntüleme, izleri aktivite türüne göre filtreleme ve işaret noktalarını filtreleme gibi özellikleri destekler.
 - Yeniden Adlandır. Seçili klasör için yeni bir ad girebileceğiniz bir iletişim kutusu açar. Değişiklik OsmAnd Cloud'a senkronize edilir ve tüm bağlı cihazlarda görünür.
 - Sil. Bir onay iletişim kutusu açar. Bir klasörü silmek, içerdiği tüm izlerle birlikte kalıcı olarak kaldırır. Bu eylem de OsmAnd Cloud üzerinden senkronize edilir.

![İz klasörü menüsü](@site/static/img/web/collection_rename.png) ![İz klasörü menüsü](@site/static/img/web/collection_delete.png)


## Bulut İzleri {#cloud-tracks}

[OsmAnd Cloud](../personal/osmand-cloud.md) içindeki GPX izleriniz, giriş yaptıktan sonra görüntüleme ve düzenleme için kullanılabilir. Yalnızca **Pro kullanıcıları** <ProFeature/> için ve [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) kullanıcıları için (Pro abonelikleri sona erdikten sonra bile verilerini indirebilirler).

Bulut izi seçildikten sonra aşağıdaki özellikler mevcuttur:

![OsmAnd Web bulut GPX düzenleme](@site/static/img/web/cloud_track.png)

- Bilgi ekranları:
  - *Bilgi* - iz verilerini görüntüleme.
  - *Yükseklik* - yükseklik grafiği.
  - *Hız* - hız grafiği.
  - *Eğim* - eğim grafiği.
  - *Ayarlar* - *Rota Oluştur* aracı için navigasyon profilleri listesi.
  - *Dönüşler* - iz geometrisine dayalı yaklaşık dönüş talimatlarının oluşturulan listesi.
  - *Yol tipi* - izi yol sınıflandırmasına göre segmentlere ayırma.
  - *Yüzey* - rota boyunca iz yüzey türlerini gösterme.
  - *Pürüzsüzlük* - OSM etiketlerine dayalı segment pürüzsüzlüğünü görüntüleme.

![OsmAnd Web bulut GPX düzenleme](@site/static/img/web/cloud_track_turns.png) ![OsmAnd Web bulut GPX düzenleme](@site/static/img/web/cloud_track_details.png)

- Eylem düğmeleri:
  - *İz Düzenle* - bulut izini düzenleme için yerel olarak ekleme (_Yerel Düzenle_ panel düğmesi).
  - *GPX İndir* - izi bilgisayara indirir.
  - *Yeniden Hesapla* Yükseklik (Uydu) - seçili izin yükseklik grafiğini görüntüler.
  - *İz Sil* - izi siler.
  - *İz Kapat* - izi kapatır.


## İlgili Makaleler {#related-articles}

- [İzleri Yönetme](../personal/tracks/manage-tracks.md)
- [İz Analizörü](../web/web-tracks-analyzer.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)