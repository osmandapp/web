---
source-hash: 887e37d512e29933bbd3ee7af217024887ffcc5ac636c9ddc52e7480299a8d1b
sidebar_position: 6
title:  Map Styles (Vector Maps)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Genel Bakış {#overview}

Harita stilleri, OsmAnd'da vektör harita verilerinin nasıl işleneceğini tanımlar. Bir stil, yollar, binalar, arazi kullanımı, su ve ilgi noktaları gibi harita nesnelerinin görsel görünümünü kontrol eder; renkler, çizgi desenleri ve etiketler dahil.

OsmAnd, farklı etkinlikler için optimize edilmiş birkaç yerleşik stil sağlar. Stilleri [Harita Yapılandırma Menüsü](./configure-map-menu.md) içinde değiştirebilir ve stil parametrelerini ayarlayabilirsiniz. Vektör harita stilleri, gündüz ve gece modları arasında geçişi destekler.

Yerleşik stillerin yanı sıra, OsmAnd özel harita stillerini destekler. Özel stiller, işleme kurallarına dayanır ve ihtiyacınız olan bilgileri vurgulamak için içe aktarılabilir, paylaşılabilir ve değiştirilebilir.


## Varsayılan Harita Stilleri {#default-map-styles}

OsmAnd, varsayılan olarak uyumlu birçok harita stili ve veri katmanı sunar. Bu bölüm, gündüz ve gece modları için ana olanları tanımlar.

**Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

**iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*

### OsmAnd {#osmand}

![OsmAnd harita stili](@site/static/img/map/map-style-osmand-with-routes.png)  

OsmAnd'ın standart harita işleme stili, detay ve sadeliği dengeler; bu da onu kentsel ve açık hava keşfi için ideal kılar. Şehir özelliklerini, sokaklar, binalar ve ulaşım durakları gibi detaylandırırken, haritaları daha net hale getirerek görsel karmaşıklığı basitleştirir.  

Temel faydalar arasında rota haritalama, yüzey kalitesi, erişim kısıtlamaları, yol işaretleri, SAC-ölçeği yol işleme, spor tesisleri ve kontur çizgileri gibi topografik detaylar yer alır.

### Touring Görünümü {#touring-view}

![Touring görünümü harita stili](@site/static/img/map/map-style-touring.png)

Yüksek kontrastlı ve maksimum detaylı Touring stili. Varsayılan OsmAnd stilinin tüm seçeneklerini içerirken, özellikle yollar, patikalar ve diğer seyahat yolları gibi mümkün olduğunca fazla detay gösterir. *Tur atlası*nda yol türlerinin net ayrımı. Gündüz, gece ve açık hava kullanımı için uygundur.

### UniRS ve LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

UniRS ve LightRS stilleri, temel harita bilgilerini farklı renk şemalarında işleyen yazar stilleridir.  

- **UniRS stili**. Bu stil, yaya ve bisiklet yolları için kontrastı artırmak üzere varsayılanın değiştirilmiş bir sürümüdür. Klasik Mapnik renk şemasını korur.  

    ![LightRS harita stili](@site/static/img/map/map-style-lightrs.png)

- **LightRS stili**. Bu, yumuşak bir gece moduna sahip basit bir sürüş stili olup, yolları kontrastlı turuncu renkle vurgular, ikincil harita nesnelerini kısık gösterir ve kontur çizgileri gibi topografik özellikleri görüntüler.

    ![UniRS harita stili](@site/static/img/map/map-style-unirs.png)

### Nautik {#nautical}

![Nautik harita stili](@site/static/img/map/map-style-nautical.png)

Şamandıralar, fenerler, nehir rotaları, deniz yolları, işaretler, limanlar ve nautik işaretler içeren nautik navigasyon stili. Daha fazla bilgi için [Nautik Harita Stili](../plugins/nautical-charts.md#nautical-map-style) bölümüne bakın.

### Deniz {#marine}

![Deniz harita stili](@site/static/img/map/map-style-marine.png)

Işık sektörleri, tam fener özellikleri ve gerçekçi ve doğru deniz navigasyonu için diğer detaylı denizcilik özellikleri içeren gelişmiş nautik harita stili. Daha fazla detay için [Deniz Harita Stili](../plugins/nautical-charts.md#marine-map-style) bölümüne bakın.

### Kış ve Kayak {#winter-and-ski}

![Kış & Kayak harita stili](@site/static/img/map/map-style-winter-ski.png)

Pistleri, elevatörleri ve cross-country patikaları tanımlayan, ikincil harita nesnelerini gizleyen kayak sporları için bir stil. **Kış ve Kayak stili**, kış sporları navigasyonunda size yardımcı olmak için tasarlanmıştır.  

Kayak pistlerini ve eğim zorluğu ile elevatör işaretleri gibi diğer detayları görebilirsiniz. Temel faydalar arasında pistler, elevatörler ve diğer kayak özelliklerinin uygun gösterimi yer alır. Haritanın dikkat dağıtıcı ikincil nesnelerinin daha azı. Daha fazla bilgi için [Kayak Haritaları](../plugins/ski-maps.md) makalesine bakın.

### Topo {#topo}

![Topo harita stili](@site/static/img/map/map-style-topo.png)

Doğada yürüyüş, kamp ve bisiklet için tasarlanmış bir stil. Kontrastlı yollar ve doğal özellikler, farklı patika türleri, genişletilmiş kontur çizgisi seçenekleri ve ek detaylar içerir. Açık havada okunabilir. *Yüzey Bütünlüğü* ayarı, yol kalitesini ayırt etmenizi sağlar.

### OSM-carto {#osm-carto}

![OSM-carto harita stili](@site/static/img/map/map-style-osm-carto.png)

Bu stil, varsayılan [OpenStreetMap web stili](https://www.openstreetmap.org/)'ni taklit eder. Web sürümünün kaynak kodu [Github](https://github.com/gravitystorm/openstreetmap-carto)'da, OsmAnd kodu [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml)'da mevcuttur.

### Çöl {#desert}

![Çöl harita stili](@site/static/img/map/map-style-desert.png)

Çöller ve diğer seyrek nüfuslu bölgeler için tasarlanmış olup, daha detaylı harita bilgisi sunar.

### Offroad {#offroad}

![Offroad harita stili](@site/static/img/map/map-style-offroad.png)

Off-road navigasyon için tasarlanmış bu stil, [Topo](#topo) harita düzenine dayanır ve uydu görüntüleriyle alt katman olarak iyi çalışır. Patikaları, izleri, bisiklet rotalarını ve diğer off-road patikalarını vurgulamak için ana yolları inceltir; bu da kırsal veya uzak bölgelerdeki döşememiş rotaları keşfetmek için idealdir.

### Kar Motoru {#snowmobile}

![Kar motoru harita stili](@site/static/img/map/map-style-snowmobile.png)

Kar motoru navigasyonu için uyarlanmış bu stil, kar motoru dostu patikaları, yolları ve izleri vurgular. Karlı bölgelerdeki özel patikaları vurgular ve standart yolların mevcut olmayabileceği karla kaplı arazilerde net navigasyon sağlar. 


## Özel Harita Stili {#custom-map-style}

[Özelliklendirme](../../technical/osmand-file-formats/osmand-rendering-style.md)'ye göre oluşturulmuş kişisel veya üçüncü taraf özel harita stiliniz varsa, cihazınıza şu yollarla yükleyebilirsiniz:

- `.render.xml` dosyasını cihazınıza kopyalayın ve OsmAnd ile açın.
- İşleme stillerini dışa aktarmak veya içe aktarmak için [standart içe/dışa aktarma diyaloglarını](../personal/import-export.md) kullanın. `.osf` paketi oluşturursanız, başkalarıyla paylaşabileceğiniz bir eklenti olarak çalışır.
- Yükleme sonrası, menüden harita stilini seçebilirsiniz.

Ayrıca, diğer kullanıcılar tarafından oluşturulan özel harita stili örneklerini tarayabilirsiniz. Kamuya açık topluluk stillerinin listesi [burada](../troubleshooting/resources.md#map-styles) sağlanmıştır.


## İlgili Makaleler {#related-articles}

- [Haritayı Yapılandır](../map/configure-map-menu.md)
- [Vektör Haritalar](../map/vector-maps.md)
- [Kaynaklar ve Özelleştirmeler](../troubleshooting/resources.md)