---
source-hash: f88b26c81cd85ceae10dd091bfd8f3587782fc1e066bd79fe00de8a7ce769b72
sidebar_position: 1
title: Erişilebilirlik
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


:::caution Not
Erişilebilirlik eklentisi yalnızca OsmAnd'ın **Android sürümünde** mevcuttur. [iOS Sürümü](#how-to-use-ios) sistemin varsayılan erişilebilirlik ayarlarına dayanır.
:::

## Genel Bakış {#overview}

Erişilebilirlik, [Android Erişilebilirlik](https://www.android.com/accessibility/) araçlarıyla entegre olarak görme engelli ve az gören kullanıcılar için kullanılabilirliği artırır. Eklenti, navigasyonu daha erişilebilir hale getirmek için **metin okuma, hareket kontrolü, otomatik duyurular** ve **dokunsal geri bildirim** sunar. iOS'ta OsmAnd, VoiceOver gibi Apple'ın yerleşik erişilebilirlik özelliklerini kullanır.


### Nasıl Kullanılır (Android) {#how-to-use-android}

![Erişilebilirlik](@site/static/img/plugins/Accessibility/access_turned_off.png)

***Erişilebilirlik eklentisini etkinleştirin:***

1. **Eklentiyi etkinleştirin**: *Menü → Eklentiler → Erişilebilirlik → Etkinleştir*.

2. **Erişilebilirlik modunu açın**:
   - Android cihazınızda *Sistem Ayarları → Erişilebilirlik*'e gidin.
   - TalkBack'i veya başka bir ekran okuyucuyu etkinleştirin.

3. **Eklenti ayarlarını yapın**:
   - OsmAnd uygulaması içinde [Erişilebilirlik ayarlarına](#plugin-settings) gidin.
   - Konuşma hızı, otomatik duyuru ve dokunsal geri bildirim gibi özellikleri yapılandırın.

<br/>

***Özellikler ve işlevsellik:***

- **Hareket kontrolleri**:
   - Tüm standart [OsmAnd hareketlerini](../map/interact-with-map#gestures) destekler.
   - Hareketleri Android'in **TalkBack** talimatlarına uyacak şekilde ayarlar.

- **TalkBack entegrasyonu**:
   - TalkBack ekran okuyucu, navigasyon ve menü etkileşimleri için sesli rehberlik sunar.
   - TalkBack hareketleri hakkında daha fazla bilgiyi [buradan](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation) edinebilirsiniz.

- **Arka plan işlemleri**. Ekran kapalı veya kilitli olsa bile sesli ve dokunsal geri bildirim devam eder.

- **Pusula düğmesi eylemleri**:

| Hareket | Eylem | TalkBack eşdeğeri |
|-----|-----|-----|
| **Tek dokunuş** | Haritayı **Kuzey**'e döndürür | **Çift dokunuş** |
| **Uzun dokunuş** | [Harita yönlendirme modları](../map/interact-with-map.md#map-orientation-modes) listesini açar | **Çift dokunuş ve basılı tutma** |
| **Çift dokunuş** | *Erişilebilirlik modunda kullanılamaz* | *Desteklenmiyor* |


### Nasıl Kullanılır (iOS) {#how-to-use-ios}

OsmAnd'ın iOS sürümü, sistemin **yerleşik erişilebilirlik araçlarını** kullanır.

1. **VoiceOver'ı etkinleştirin**:
   - *Ayarlar → Erişilebilirlik → VoiceOver*'a gidin.
   - OsmAnd ile kullanmak için **VoiceOver hareketlerini** yapılandırın.

2. **Desteklenen özellikler**:
   - Harita etkileşimleri için **ekran okuyucu desteği**.
   - iOS ayarları aracılığıyla **özelleştirilebilir hareketler**.
   - Tüm standart [OsmAnd hareketleri](../map/interact-with-map#gestures) mevcuttur.

3. **Daha fazla bilgi edinin**:
   - iOS Görme Erişilebilirliği özellikleri hakkında [buradan](https://www.apple.com/accessibility/vision/) okuyun.
   - iPhone için VoiceOver hareketlerini [buradan](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios) keşfedin.


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

OsmAnd'da cihazın erişilebilirlik özelliklerini etkinleştirmek için aşağıdaki ayarları yapmanız gerekir:

1. **[Erişilebilirlik eklentisini](../plugins/index.md#enable--disable) etkinleştirin**: *Menü → Eklentiler → Erişilebilirlik → Etkinleştir*.
2. Cihazınızda **erişilebilirlik modunu etkinleştirin**.
3. Erişilebilirlik eklentisi [ayarlarını](#plugin-settings) yapılandırın.


## Eklenti Ayarları {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Erişilebilirlik](@site/static/img/plugins/Accessibility/access_.png)

Erişilebilirlik eklentisi, engelli kullanıcılar için navigasyon ve etkileşimi kişiselleştirmek üzere çeşitli ayarlar sunar. Bu ayarlar OsmAnd'da [profil başına](../personal/profiles.md) uygulanır.

| Ayar | Açıklama |
|---------------------------|-------------|
| **Erişilebilirlik Modu** | *Yerleşik OsmAnd özelliklerini* etkinleştirir veya **sistem ayarlarını** kullanır. |
| **Konuşma Hızı** | *Metin okuma hızını* **%50'den %200'e** kadar kontrol eder. |
| [Akıllı Otomatik Duyuru](#smart-autoannounce-and-clockwise-directions) | Rotadan sapıldığında *sesli rehberlik* sağlar. |
| **Otomatik Duyuru Periyodu** | Duyurular arasındaki minimum süreyi **5 saniyeden 5 dakikaya** kadar ayarlar. |
| **Yön Stili** | *Yanlamasına (8 yön)* veya [Saat Yönünde](#smart-autoannounce-and-clockwise-directions) (12 yön)* arasında seçim yapın. |
| **Sesli Yönlendirmeler** | Yönü gösteren *sesli rehberlikler* çalar. |
| **Dokunsal Yönlendirmeler** | Dönüşler ve sapmalar için *titreşim geri bildirimi* sağlar. |

<!--
- **Erişilebilirlik Modu**. Engelli kişilerin OsmAnd uygulamasıyla etkileşim kurmasına yardımcı olan özel araçları etkinleştirin. Üç mod vardır: *Açık* - yerleşik OsmAnd özelliklerini açar, *Kapalı* - tüm eklenti özelliklerini kapatır ve *Android sistem ayarlarına göre* - Android sistem ayarlarını açar.

- **Konuşma hızı**. Metin okumanın konuşma hızını %50'den %200'e kadar ayarlayın.

- **Akıllı otomatik duyuru**. Etkinleştirilirse, ayarlanan rotadan saptığınızda sesli duyurular alırsınız.

- **Otomatik duyuru periyodu**. Bu, hedefinize olan yön ve mesafenin otomatik duyurusudur. Duyurular arasında 5 saniyeden 5 dakikaya kadar minimum bir süre seçebilirsiniz.

- **Yön stili**. OsmAnd uygulamasının sizi yönler hakkında nasıl bilgilendireceğini seçin. *Yanlamasına* - dünyanın yanlarına olan yönü gösterir (8 yön), *Saat yönünde* - saat yüzüne göre yönleri gösterir (12 yön).

- **Sesli yönlendirmeler**. Hedef noktaya olan yönü sesle belirterek navigasyon sırasında geri bildirim sağlar.

- **Dokunsal yönlendirmeler**. Bu ayar, navigasyon sırasında dokunsal geri bildirim sağlar. Titreşim, hedef noktaya olan yönü ve rotadan sapmaları gösterir.
-->

<br/>

***Optimize edilmiş erişilebilirlik için ipuçları:***

- **Ekran okuyucu** - Gelişmiş harita etkileşimi için TalkBack (*Android*) veya VoiceOver (*iOS*) kullanın.
- **Sesli navigasyon** - Ekran kapalıyken sesli yönlendirmeler almak için otomatik duyuruyu etkinleştirin.
- **Dokunsal geri bildirim** - Düşük görüş ortamları veya sesli rehberliklerin pratik olmadığı durumlar için idealdir.


#### Akıllı Otomatik Duyuru ve Saat Yönünde Yönlendirmeler {#smart-autoannounce-and-clockwise-directions}

**Akıllı Otomatik Duyuru** özelliği, planlanan rotadan saptığınızda *sesli bildirimler* sağlarken, **Saat Yönünde Yön Stili** *saat yüzüne dayalı navigasyon rehberlikleri* sunar. Bu özellikler, *sesli rehberliğe* güvenen görme engelli kullanıcıları desteklemek için tasarlanmıştır.

- **TalkBack etkin değilse**, hem *Akıllı Otomatik Duyuru* hem de *Saat Yönünde Yönlendirmeler* yalnızca ekranda *metin bildirimleri* gösterecektir.

- **Sesli bildirimler** yalnızca *TalkBack* **cihazın sistem ayarlarında** etkinleştirildiğinde etkinleştirilir.

- Duyuruların sıklığını kontrol etmek için **Otomatik Duyuru Periyodunu** (örn. *10 saniye*) ayarlayın.


## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Genel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritalar (Harita Stilleri)](../../user/map/vector-maps.md)

> *Son güncelleme: Şubat 2025*