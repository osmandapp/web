---
source-hash: a5f171a6ac74a9d1a66cb38144cd58900587299bb8ac163d65951bdc9a1ca8f4
sidebar_position: 9
title:  Çevrimiçi Haritalar
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

OsmAnd Çevrimiçi haritalar, uygulamada zaten bulunan OpenStreetMap veritabanına kapsamlı bir ektir. Bu eklentiyle, uydu veya yürüyüş rotaları görünümünden başlayıp yangın musluklarının konumu gibi çok özel verilerle biten farklı bir kaynaktan gelen bilgilerle haritanıza katmanlar ekleyebilirsiniz. Ayrıca haritanın ana kaynağını vektör haritalardan çevrimiçi döşemelere değiştirebilirsiniz.

## Gerekli Kurulum Parametreleri {#required-setup-parameters}

Çevrimiçi haritaları kullanma yeteneği OsmAnd'ın iOS sürümünde otomatik olarak etkinleştirilir. Android'de Çevrimiçi haritaları görüntülemek için aşağıdaki ayarları yapmanız gerekir:

1. *Ana Menü → Eklentiler → Çevrimiçi Haritalar*'da **Çevrimiçi Haritalar** eklentisini [etkinleştirin](../plugins/index.md#enable--disable).
2. Haritayı Yapılandır menüsünün [Harita kaynağı](../map/raster-maps.md#layers) bölümünde gerekli ayarları yapın.
3. *Harita Kaynağı*, *Üst Katman* ve *Alt Katman* haritasını ayarlayın. Tercih ettiğiniz uydu harita sağlayıcısını seçin.
4. Gerekirse seçilen [Çevrimiçi haritayı](#how-to-prepare-raster-maps) indirin.

## Cihazda Raster Haritaları Kullanma {#use-raster-maps-on-device}

Raster haritaları görselleştirme ve özelleştirme hakkında ayrıntılı bilgiyi [Raster Haritalar](../map/raster-maps.md) makalesinde bulabilirsiniz. Nasıl kullanılır:

1. Raster haritayı *Ana*, *Alt Katman* veya *Üst Katman* katmanı olarak [seçin](../map/raster-maps.md#layers).
    - Katman parametrelerini (şeffaflık) [değiştirin](../map/raster-maps.md#overlay).

2. Raster haritaları cihaza [hazırlayın / kopyalayın](../map/raster-maps.md#preparecopy-maps).
    - [Yeni çevrimiçi raster harita kaynağı ekleyin](../map/raster-maps.md#add-new-online-source)
    - Harita kaynağını yüklemek için [Sihirli URL ekleyin](../map/raster-maps.md#magic-url-to-install-map-source).

3. Raster haritaları [yönetin](../map/raster-maps.md#manage-map-data).
    - [Döşemeleri indirin / güncelleyin](../map/raster-maps.md#download--update-tiles).
    - Raster harita parametrelerini [değiştirin](../map/raster-maps.md#change-parameters).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![Android'de alt katmanı / üst katmanı yapılandırın](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![iOS'ta alt katmanı / üst katmanı yapılandırın](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>

## Raster Haritalar Nasıl Hazırlanır {#how-to-prepare-raster-maps}

:::info
Haritaları hazırlamak için ana makaleyi [buradan okuyun](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

Eklentinin *Çevrimiçi Haritalar* olarak adlandırılmasına rağmen, haritaları internet bağlantısı olmadan da kullanabilirsiniz. Sadece haritaların bölümlerini (genellikle döşemeler olarak adlandırılır) daha sonra kullanmak üzere kaydetmeniz gerekir. Bunu yapmak için, OsmAnd ekibi tarafından geliştirilen belirli bir [Harita Oluşturucu aracını](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) indirin.

İndirmeniz gereken alanı seçin, Ön Yükleme alanına tıklayın, ardından görüntülemek istediğiniz en küçük ve en büyük yakınlaştırma seviyelerini ayarlayın ve döşemeleri indirin.
<b>Android sürümü</b> için bunları telefonunuzun <i>osmand/tiles/*döşeme türü*</i> klasörüne kopyalayabilirsiniz. Ayrıca <i>Haritayı Yapılandır - Üst Katman haritasını</i> açmanız ve OsmAnd çevrimiçi döşemelerini seçmeniz gerekir.

<b>iOS sürümü</b> için telefonunuzda SQ Lite dosyasını (herhangi bir mesajlaşma veya dropbox) seçebilirsiniz, OsmAnd bunu eklemeyi önerecektir. Ayrıca <i>Harita → Üst Katman / Alt Katman veya Harita türünü</i> açmanız ve yeni harita kaynağını seçmeniz gerekir.

Android ve iOS OsmAnd sürümlerinde SQ Lite dosyası nasıl eklenir, [<a href="https://anygis.ru/Web/Html/Osmand_en"><b>Anygis projesi</b></a>](https://anygis.ru/Web/Html/Osmand_en)'nde okuyabilirsiniz.

Çevrimiçi döşemeler, haritanın sadece küçük bir bölümüne veya belirli bir türüne sınırlı bir alanda ihtiyaç duyduğunuzda, ancak tüm bölgeyi indirmek istemediğinizde yardımcı olabilir. Sonsuz durumlarda işe yarayabilirler.

![Çevrimiçi Haritalar](@site/static/img/plugins/online-maps/map_creator.jpg)

![Çevrimiçi Haritalar](@site/static/img/plugins/online-maps/map_creator_menu.jpg)

## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Küresel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritalar (Harita Stilleri)](../../user/map/vector-maps.md)

### Yaygın Sorunlar ve Çözümler {#common-issues-and-solutions}

1. Çevrimiçi Haritalar Harita Kaynağı menüsünde görünmüyor:  
  
    - Çevrimiçi Haritalar eklentisinin etkinleştirildiğini doğrulayın: *Menü → Eklentiler → Çevrimiçi Haritalar*.  
    - Uydu görüntülerine erişmek için etkin bir internet bağlantınız olduğundan emin olun.  
    - Seçilen Çevrimiçi Haritanın indirilip indirilmediğini veya [ek ayarlar](../map/raster-maps.md#layers) gerektirip gerektirmediğini kontrol edin.