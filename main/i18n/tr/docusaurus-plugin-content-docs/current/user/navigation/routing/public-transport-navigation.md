---
source-hash: 666034567fd284a4497490ffa9885eebc102c1d37823e71a52d03c189944eb25
sidebar_position: 5
title: Toplu Taşıma Yönlendirmesi
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';




## Genel Bakış {#overview}

OsmAnd uygulamasındaki toplu taşıma navigasyonu, toplu taşıma araçlarını kullanarak rotaları belirlemenize olanak tanır ve bu da "beton ormanında" daha hızlı hareket etmenize kesinlikle yardımcı olacaktır.

Toplu taşıma rotalarına ilişkin veriler [OpenStreetMap](http://openstreetmap.org/) projesinden alınmıştır. OsmAnd, navigasyon için [PTv2 şemasını](https://wiki.openstreetmap.org/wiki/Public_transport) kullanır. OsmAnd, navigasyon için *otobüs*, *troleybüs*, *paylaşımlı_taksi*, *füniküler*, *metro*, *hafif_raylı*, *monoray*, *tren*, *tramvay*, *feribot* gibi OpenStreetMap rotalarını destekler. Her araç tipi için varsayılan hız [Yönlendirme xml](../../../technical/build-osmand/routing.md) içinde yapılandırılmıştır ve en hızlı rotaları bulmak için kullanılır.

:::note
Toplu taşıma yönlendirmesi test aşamasındadır. Şimdilik, tam navigasyon işlevi olmadan rotanızı oluşturabilir ve görüntüleyebilirsiniz.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon toplu taşıma Android](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigasyon toplu taşıma iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## Nasıl Kullanılır {#how-to-use}

Şehir içinde toplu taşıma ile navigasyona başlamak için, harita ekranındaki [navigasyon düğmesini](../../widgets/map-buttons.md#directions) kullanın veya *Ana Menü*'den navigasyon seçeneğini belirleyin.  

**1.** *Toplu taşıma navigasyon profilini*, başlangıç ve varış noktalarını seçmeniz gerekir.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon toplu taşıma rotaları Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigasyon toplu taşıma rotaları iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** OsmAnd, yürüme süreleri ve toplu taşıma rotaları ile rota seçenekleri sunar; bu rotalarda süre, mesafe, aktarma ve toplu taşıma rotaları hakkında bilgiler bulunur. Gerekli seçeneği belirlemek için navigasyon ekranını kaydırmanız gerekir.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon toplu taşıma yolu Android](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigasyon toplu taşıma yolu iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** *Haritada göster* düğmesini kullanarak tüm olası rota önerilerini harita üzerinde görüntüleyebilirsiniz. Bir sonraki rota seçeneğini görüntülemek için ekranlar arasında kaydırın.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon toplu taşıma Detayları Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigasyon toplu taşıma Detayları iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** Seçilen rotanın tüm durakları ve aktarmalarıyla birlikte bir açıklamasını açmak için "Detaylar" düğmesine dokunun.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigasyon toplu taşıma durakları listesi Android](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigasyon toplu taşıma durakları listesi iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>


## Veri ve Kılavuz {#data-and-guideline}

OsmAnd, OsmAnd Toplu Taşıma navigasyon algoritması için Toplu Taşıma Sürüm 2 (PTv2) olarak da adlandırılan yeni bir toplu taşıma şeması kullanır.

- Toplu taşımanızı [buradan](http://tools.geofabrik.de/osmi/) kontrol edebilirsiniz.
- Toplu taşıma rotalarını oluşturma veya ayarlama kılavuzu [blogumuzda](https://osmand.net/blog/guideline-pt) mevcuttur.
- [2019: OsmAnd ile OpenStreetMap kullanarak Toplu Taşıma Navigasyonu](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap) sunumu.

> *Son güncelleme: Haziran 2024.*