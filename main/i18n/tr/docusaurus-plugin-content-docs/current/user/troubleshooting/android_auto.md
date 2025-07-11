---
source-hash: e245d0a8d185e0eb4570fd1b908d1c8ccda0b97d189a853407a98e84348a2b57
sidebar_position: 7
title:  Android Auto
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';




## Konum gecikmeleri (ANR çökmeleri) {#location-delays-anr-crashes}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_troubleshooting_1.png)

Android Auto ve OsmAnd, aracın konumunu aynı anda algılayabilir, bu da ilgili widget'larda bilgi görüntülemede 3-5 saniyelik bir gecikmeye veya donmaya neden olabilir. Bunu önlemek için şunları yapmak gerekir:

1. Android Auto ayarlarını açın.
2. Ayarlar altında Konum izinlerini bulun.
3. Bu bölüm, Android Auto'da konum kullanmasına izin verilen uygulamaların bir listesini görüntüler. OsmAnd uygulamasını bulun ve konum kullanımına izin verin.
4. Konum artık Android Auto'da yalnızca OsmAnd uygulaması tarafından algılanacak ve konum bilgilerini görüntülemede gecikmeler önlenecektir.


## Harita yönlendirme sorunu {#map-orientation-issue}

Hareket yönü harita yönlendirmesi [ters dönüyor ve titriyor](https://github.com/osmandapp/OsmAnd/issues/16041). ["Yaklaşık yön"](../navigation/guidance/map-during-navigation.md#map-during-navigation) seçeneği etkinleştirilerek çözülür:

- Yalnızca [OsmAnd Geliştirme](../plugins/development.md) etkinleştirilirse görünür.
- *Menü → Ayarlar → Profil → Navigasyon ayarları → [Navigasyon sırasında harita](../navigation/guidance/map-during-navigation.md) → Yaklaşık yön* konumunda bulunur.


## Ses kontrol sorunu {#volume-control-issue}

Çoğu durumda, tüm **sinyal** türleri sabit tam seste kalır ve eşzamanlı ses çalma ayarlarından etkilenmez. Android Auto kullanırken OsmAnd navigasyon uyarılarının sesini değiştirmek için, araç multimedya sistemi ekranında *Kurulum → Ses → Ses seviyesi* bölümüne gidin.  

Bu yöntem işe yaramazsa, başka bir seçenek vardır. Bildirim sesini ayarlamak için, bir arama sırasında Google Asistan'ı açmanız gerekir. Direksiyon simidindeki Google Asistan'ı açan düğmeyi basılı tutun ve arama sırasında gösterge paneli veya direksiyon simidini kullanarak sesi ayarlayın.