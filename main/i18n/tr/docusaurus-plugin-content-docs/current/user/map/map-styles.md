---
source-hash: 383e9a6814a4fe9dfbefeb9e426313df17c79d317898ed48ee3cdc95f7de4d54
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

OsmAnd, farklı etkinlikler için optimize edilmiş birkaç yerleşik stil sağlar. Stilleri [Configure map menu](./configure-map-menu.md) içinde değiştirebilir ve stil parametrelerini ayarlayabilirsiniz. Vektör harita stilleri, gündüz ve gece modları arasında geçişi destekler.

Yerleşik stillerin yanı sıra, OsmAnd özel harita stillerini destekler. Özel stiller, işleme kurallarına dayanır ve ihtiyacınız olan bilgileri vurgulamak için içe aktarılabilir, paylaşılabilir ve değiştirilebilir.


## Varsayılan Harita Stilleri {#default-map-styles}

OsmAnd, varsayılan olarak birçok harita stili ve veri katmanı sunar. Bu bölüm, gündüz ve gece modları için ana olanları tanımlar.

**Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

**iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*

### OsmAnd {#osmand}

![OsmAnd map style](@site/static/img/map/map-style-osmand-with-routes.png)  

OsmAnd'ın standart harita işleme stili, detay ve sadeliği dengeler; bu da onu kentsel ve açık hava keşfi için ideal kılar. Şehir özelliklerini, sokaklar, binalar ve ulaşım durakları gibi detaylandırırken, haritaları daha net hale getirerek görsel karmaşıklığı basitleştirir.  

Temel faydalar arasında rota haritalama, yüzey kalitesi, erişim kısıtlamaları, yol işaretleri, SAC-ölçeği yol işleme, spor tesisleri ve kontur çizgileri gibi topografik detaylar yer alır.

### Touring View {#touring-view}

![Touring view map style](@site/static/img/map/map-style-touring.png)

Yüksek kontrastlı ve maksimum detaylı Touring stili. Varsayılan OsmAnd stilinin tüm seçeneklerini içerirken, özellikle yollar, patikalar ve diğer seyahat yolları gibi mümkün olduğunca fazla detay gösterir. *Tur atlası*nda yol türlerinin net ayrımı. Gündüz, gece ve açık hava kullanımı için uygundur.

### UniRS and LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

UniRS ve LightRS stilleri, temel harita bilgilerini farklı renk şemalarında işleyen yazar stilleridir.  

- **UniRS style**. Bu stil, yaya ve bisiklet yolları için kontrastı artırmak üzere varsayılanın değiştirilmiş bir sürümüdür. Klasik Mapnik renk şemasını korur.  

    ![LightRS map style](@site/static/img/map/map-style-lightrs.png)

- **LightRS style**. Bu, yumuşak bir gece moduna sahip basit bir sürüş stili olup, yolları kontrastlı turuncu renkle vurgular, ikincil harita nesnelerini kısık gösterir ve kontur çizgileri gibi topografik özellikleri görüntüler.

    ![UniRS map style](@site/static/img/map/map-style-unirs.png)

### Nautical {#nautical}

![Nautical map style](@site/static/img/map/map-style-nautical.png)

Şamandıralar, fenerler, nehir rotaları, deniz yolları, işaretler, limanlar ve nautik işaretler içeren nautik navigasyon stili. Daha fazla bilgi için [Nautical Map Style](../plugins/nautical-charts.md#nautical-map-style) bölümüne bakın.

### Marine {#marine}

![Marine map style](@site/static/img/map/map-style-marine.png)

Işık sektörleri, tam fener özellikleri ve gerçekçi ve doğru deniz navigasyonu için diğer detaylı denizcilik özellikleri içeren gelişmiş nautik harita stili. Daha fazla detay için [Marine Map Style](../plugins/nautical-charts.md#marine-map-style) bölümüne bakın.

### Winter and Ski {#winter-and-ski}

![Winter & Ski map style](@site/static/img/map/map-style-winter-ski.png)

Pistleri, elevatörleri ve cross-country patikaları tanımlayan, ikincil harita nesnelerini gizleyen kayak sporları için bir stil. **Winter and Ski style** , kış sporları navigasyonunda size yardımcı olmak için tasarlanmıştır.  

Kayak pistlerini ve eğim zorluğu ile elevatör işaretleri gibi diğer detayları görebilirsiniz. Temel faydalar arasında pistler, elevatörler ve diğer kayak özelliklerinin uygun gösterimi yer alır. Haritanın dikkat dağıtıcı ikincil nesnelerinin daha azı. Daha fazla bilgi için [Ski Maps](../plugins/ski-maps.md) makalesine bakın.

### Topo {#topo}

![Topo map style](@site/static/img/map/map-style-topo.png)

Doğada yürüyüş, kamp ve bisiklet için tasarlanmış bir stil. Kontrastlı yollar ve doğal özellikler, farklı patika türleri, genişletilmiş kontur çizgisi seçenekleri ve ek detaylar içerir. Açık havada okunabilir. *Surface Integrity* ayarı, yol kalitesini ayırt etmenizi sağlar.

### OSM-carto {#osm-carto}

![OSM-carto map style](@site/static/img/map/map-style-osm-carto.png)

Bu stil, varsayılan [OpenStreetMap web style](https://www.openstreetmap.org/)'ni taklit eder. Web sürümünün kaynak kodu [Github](https://github.com/gravitystorm/openstreetmap-carto)'da, OsmAnd kodu [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml)'da mevcuttur.

### Desert {#desert}

![Desert map style](@site/static/img/map/map-style-desert.png)

Çöller ve diğer seyrek nüfuslu bölgeler için tasarlanmış olup, daha detaylı harita bilgisi sunar.

### Offroad {#offroad}

![Offroad map style](@site/static/img/map/map-style-offroad.png)

Off-road navigasyon için tasarlanmış bu stil, [Topo](#topo) harita düzenine dayanır ve uydu görüntüleriyle alt katman olarak iyi çalışır. Patikaları, izleri, bisiklet rotalarını ve diğer off-road patikalarını vurgulamak için ana yolları inceltir; bu da kırsal veya uzak bölgelerdeki döşememiş rotaları keşfetmek için idealdir.

### Snowmobile {#snowmobile}

![Snowmobile map style](@site/static/img/map/map-style-snowmobile.png)

Kar motoru navigasyonu için uyarlanmış bu stil, kar motoru dostu patikaları, yolları ve izleri vurgular. Karlı bölgelerdeki özel patikaları vurgular ve standart yolların mevcut olmayabileceği karla kaplı arazilerde net navigasyon sağlar. 


## Custom Map Style {#custom-map-style}

[Specification](../../technical/osmand-file-formats/osmand-rendering-style.md)'ye göre oluşturulmuş kişisel veya üçüncü taraf özel harita stiliniz varsa, cihazınıza şu yollarla yükleyebilirsiniz:

- `.render.xml` dosyasını cihazınıza kopyalayın ve OsmAnd ile açın.
- İşleme stillerini dışa aktarmak veya içe aktarmak için [standard import/export dialogs](../personal/import-export.md) kullanın. `.osf` paketi oluşturursanız, başkalarıyla paylaşabileceğiniz bir eklenti olarak çalışır.
- Yükleme sonrası, menüden harita stilini seçebilirsiniz.

Ayrıca, diğer kullanıcılar tarafından oluşturulan özel harita stili örneklerini tarayabilirsiniz. Kamuya açık topluluk stillerinin listesi [here](../troubleshooting/resources.md#map-styles) sağlanmıştır.


## Related Articles {#related-articles}

- [Configure Map](../map/configure-map-menu.md)
- [Vector Maps](../map/vector-maps.md)
- [Resources and Customizations](../troubleshooting/resources.md)