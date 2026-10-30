---
source-hash: b9d29f72bcf2d43d5cc26838609d63efd31b5183a4de6ef652bd49117b2c1149
sidebar_position: 7
sidebar_label: Parkur Analizörü
title: Parkur Analizörü
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

**Parkur Analizörü**, haritada seçilen noktalar arasında tekrar eden parkur segmentlerini analiz etmenize yardımcı olan bir web aracıdır. Örneğin, aynı tırmanışta yaptığınız sürüşleri veya günlük işe gidiş gelişlerinizi karşılaştırmak için kullanabilirsiniz. Kendi verilerinizle bu özelliği kullanmak için, parkurların OsmAnd Cloud'a senkronize edildiği bir OsmAnd Pro hesabına ihtiyacınız var — aksi takdirde, parkurlarınız Web Planlayıcı'da mevcut olmayacaktır. Parkurlarınızı tarar ve seçilen konum(lar)dan geçen tüm segmentleri bulur, böylece birden fazla aktivite genelinde hız, yükseklik, mesafe ve süreyi karşılaştırmanıza olanak tanır.

## Nasıl Kullanılır {#how-to-use}

1. OsmAnd Web Harita Portalı'nda OsmAnd Pro hesabınıza [giriş yapın](./web-cloud.md#login). Parkurlarınız [OsmAnd Cloud](./web-cloud.md#cloud-sync) ile senkronize edilmiş olmalıdır.
2. *Menü → Parkur analizörü* (anahtar simgesi) seçeneğini açın.
3. **Parkurları seç** panelinde **Tüm parkurlar**'i veya yalnızca ihtiyacınız olan klasörleri seçin.
4. Haritaya sağ tıklayın ve **A Noktası**'nı seçin. İki nokta arasındaki bir segmenti analiz etmek için ayrıca **B Noktası**'nı de ayarlayın.
5. Bulunan segmentlerin listesini inceleyin, [sıralayın ve hangi parametrelerin gösterileceğini seçin](#sorting-and-visible-parameters).

Tek nokta ile analizör, seçilen konumdan geçen parkur segmentlerini bulur. İki nokta ile ise A Noktası ve B Noktası arasındaki segmentleri bulur ve analiz eder.

![Parkur Analizörü](@site/static/img/web/web_analyzer_select.png) ![Parkur Analizörü](@site/static/img/web/web_analyzer_points_new.png)


## Sıralama ve Görünür Parametreler {#sorting-and-visible-parameters}
Analizör eşleşen segmentleri bulduktan sonra, sonuçlar bir liste olarak gösterilir. Liste, **Sırala** seçeneği kullanılarak yeniden sıralanabilir, bu da segmentlerin nasıl listelendiğini değiştirir. Ayrıca, **Alanlar** düğmesi Görünür parametreler panelini açar, burada her segment için hangi analiz parametrelerinin gösterileceğini kontrol edebilirsiniz. Tüm mevcut parametreleri görüntüleyebilir veya yalnızca analizinize ilgili olanları seçebilirsiniz.

Mevcut parametreler şunları içerir:

- Maks. hız, Ort. hız ve Min. hız.
- Maks. yükseklik, Ort. yükseklik ve Min. yükseklik.
- Yokuş yukarı ve Yokuş aşağı.
- Tarih.
- Zaman aralığı, Başlangıç saati, Bitiş saati, Süre ve Hareket süresi.
- Uzunluk.

![Parkur Analizörü](@site/static/img/web/web_analyzer_sort.png) ![Parkur Analizörü](@site/static/img/web/web_analyzer_fields.png)

## Veri Analizi {#data-analysis}

Sol taraftaki sonuçlar listesinde her eşleşen segment gösterilir. Her segment için, etkinleştirilen Görünür parametrelere bağlı olarak hesaplanmış parametre kümesi görüntülenir.

Her segment ayrıca şu eylemleri içeren üç nokta menüsüne (⋮) sahiptir:
- Parkur Aç — seçilen segmentle ilgili tam parkuru açar.
- Parkuru gizle / Parkuru görünür yap — parkurun haritada gösterilip gösterilmeyeceğini kontrol eder.
- Hariç Tut — segmenti mevcut analiz sonuçlarından kaldırır.

![Parkur Analizörü](@site/static/img/web/web_analyzer_menu.png)

### Grafikler {#graphs}

Haritanın altında, analizör seçilen segmentleri görselleştiren bir grafik görüntüler. Grafik, yalnızca seçilen noktalar arasında bulunan segmentler için veri temsil eder, tüm parkurlar değil.

Grafik, farklı veri türleri arasında geçişi destekler:
- Yükseklik.
- Eğim.
- Hız.
Yalnızca bir veri türü aynı anda görüntülenir ve değiştirilmesi grafiği hemen günceller.

Birden fazla segment mevcut olduğunda, grafik birkaç segment için veriyi aynı anda gösterir. Grafiğin üzerindeki bir seçici, kaç segment grafiğinin aynı anda görüntüleneceğini seçmenize ve aralarında geçiş yapmanıza olanak tanır.

![Parkur Analizörü](@site/static/img/web/web_analyzer_altitude.png) ![Parkur Analizörü](@site/static/img/web/web_analyzer_tracks.png)

## İlgili Makaleler {#related-articles}

- [Parkurlar](../web/web-tracks.md)
- [Parkurları Yönet](../personal/tracks/manage-tracks.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)