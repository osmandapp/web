---
source-hash: fe9500be3570d2dbf08995ee5614eb89cd647a44f0360730e48015dced34c738
sidebar_position: 7
sidebar_label: İz Analizörü
title: İz Analizörü
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

**İz Analizörü**, haritada seçilen noktalar arasında tekrar eden iz segmentlerini analiz etmenize yardımcı olan bir web aracıdır. İzlerinizi tarar ve seçilen konum(lar)dan geçen tüm segmentleri bulur, böylece birden fazla aktivite genelinde hız, yükseklik, mesafe ve süreyi karşılaştırmanıza olanak tanır.

## Nasıl Kullanılır {#how-to-use}

İz Analizörü'nü açtıktan sonra (anahtar simgesi olarak gösterilir), araç harita görünümü ve boş bir durumla açılır. Buradan, **İzleri Seç** panelini kullanarak analize dahil edilecek izleri seçebilirsiniz. Analizör, tüm mevcut izlerle çalışmaya veya analizi belirli klasörlerle sınırlamaya izin verir.

Analizi başlatmak için harita üzerinde doğrudan bir veya iki nokta ayarlayın. İstediğiniz konuma sağ tıklayın ve bağlam menüsünden **Nokta A / Nokta B**'yi seçin. Analizör, seçilen noktadan geçen veya iki nokta arasında iz segmentlerini arar.

![İz Analizörü](@site/static/img/web/web_analyzer_select.png) ![İz Analizörü](@site/static/img/web/web_analyzer_points.png)


## Sıralama ve Görünür Parametreler {#sorting-and-visible-parameters}
Analizör eşleşen segmentleri bulduktan sonra, sonuçlar bir liste olarak gösterilir. Liste, **Sırala** seçeneği kullanılarak yeniden sıralanabilir, bu da segmentlerin nasıl listelendiğini değiştirir. Ayrıca, **Alanlar** düğmesi Görünür parametreler panelini açar, burada her segment için hangi analiz parametrelerinin gösterileceğini kontrol edebilirsiniz. Tüm mevcut parametreleri görüntüleyebilir veya yalnızca analizinize ilgili olanları seçebilirsiniz.

Mevcut parametreler türe göre gruplandırılmıştır:

**Hız**
- Maks. hız
- Ortalama hız
- Min. hız

**Yükseklik**
- Maks. yükseklik
- Ortalama yükseklik
- Min. yükseklik

**Yokuş Yukarı / Yokuş Aşağı**

**Tarih ve saat**
- Tarih
- Başlangıç saati
- Bitiş saati
- Zaman aralığı
- Süre
- Hareket süresi

**Uzunluk**

![İz Analizörü](@site/static/img/web/web_analyzer_sort.png) ![İz Analizörü](@site/static/img/web/web_analyzer_fields.png)

## Veri Analizi {#data-analysis}

Sol taraftaki sonuçlar listesinde her eşleşen segment gösterilir. Her segment için, etkinleştirilen Görünür parametrelere bağlı olarak hesaplanmış parametre kümesi görüntülenir.

Her segment ayrıca şu eylemleri içeren üç nokta menüsüne (⋮) sahiptir:
- İz Aç — seçilen segmentle ilgili tam izi açar.
- İz Gizle / İzi Görünür Yap — izin haritada gösterilip gösterilmeyeceğini kontrol eder.
- Hariç Tut — segmenti mevcut analiz sonuçlarından kaldırır.

![İz Analizörü](@site/static/img/web/web_analyzer_menu.png)

### Grafikler {#graphs}

Haritanın altında, analizör seçilen segmentleri görselleştiren bir grafik görüntüler. Grafik, yalnızca seçilen noktalar arasında bulunan segmentler için veri temsil eder, tüm izler değil.

Grafik, farklı veri türleri arasında geçişi destekler:
- Yükseklik.
- Eğim.
- Hız.
Yalnızca bir veri türü aynı anda görüntülenir ve değiştirilmesi grafiği hemen günceller.

Birden fazla segment mevcut olduğunda, grafik birkaç segment için veriyi aynı anda gösterir. Grafiğin üzerindeki bir seçici, kaç segment grafiğinin aynı anda görüntüleneceğini seçmenize ve aralarında geçiş yapmanıza olanak tanır.

![İz Analizörü](@site/static/img/web/web_analyzer_altitude.png) ![İz Analizörü](@site/static/img/web/web_analyzer_tracks.png)

## İlgili Makaleler {#related-articles}

- [İzler](../web/web-tracks.md)
- [İzleri Yönet](../personal/tracks/manage-tracks.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)