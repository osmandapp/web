---
source-hash: c74ee94364343aaac19d958ab09b3dda962064b21f0cad21692d75b92ec0bf3b
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

:::caution Note
Erişilebilirlik eklentisi yalnızca OsmAnd'ın **Android sürümünde** mevcuttur. [iOS Sürümü](#how-to-use-ios) sistemin varsayılan erişilebilirlik ayarlarına dayanır.
:::

## Genel Bakış {#overview}

Erişilebilirlik, [Android Erişilebilirlik](https://www.android.com/accessibility/) araçlarıyla entegre olarak görme engelli ve az gören kullanıcılar için kullanılabilirliği artırır. Eklenti, navigasyonu daha erişilebilir hale getirmek için **metin okuma, hareket kontrolü, otomatik duyurular** ve **dokunsal geri bildirim** sunar. iOS'ta OsmAnd, VoiceOver gibi Apple'ın yerleşik erişilebilirlik özelliklerini kullanır.


### Nasıl Kullanılır (Android) {#how-to-use-android}

![Accessibility](@site/static/img/plugins/Accessibility/access_turned_off.png)

***Erişilebilirlik eklentisini etkinleştirin:***  

1. **Eklentiyi etkinleştirin**: *Menü → Eklentiler → Erişilebilirlik → Etkinleştir*.

2. **Erişilebilirlik modunu açın**:  
   - Android cihazınızda *Sistem Ayarları → Erişilebilirlik*'e gidin.
   - TalkBack'i veya başka bir ekran okuyucuyu etkinleştirin.

3. **Eklenti ayarlarını yapın**:  
   - OsmAnd uygulamasında [Erişilebilirlik ayarlarına](#plugin-settings) gidin.
   - Konuşma hızı, otomatik duyuru ve dokunsal geri bildirim gibi özellikleri yapılandırın.

<br/>

***Özellikler ve işlevsellik:***

- **Hareket kontrolleri**:
   - Tüm standart [OsmAnd hareketlerini](../map/interact-with-map.md#gestures) destekler.
   - Hareketleri Android'in **TalkBack** talimatlarına uyacak şekilde ayarlar.

- **TalkBack entegrasyonu**:
   - TalkBack ekran okuyucu, navigasyon ve menü etkileşimleri için sesli rehberlik sunar.
   - TalkBack hareketleri hakkında daha fazla bilgiyi [burada](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation) bulabilirsiniz.

- **Arka plan işlemleri**. Sesli ve dokunsal geri bildirim, ekran kapalı veya kilitli olsa bile devam eder.

- **Pusula düğmesi eylemleri**:

| Hareket | Eylem | TalkBack Karşılığı |
|-----|-----|-----|
| **Tek dokunuş** | Haritayı **Kuzey**'e döndürür | **Çift dokunuş** |
| **Uzun dokunuş** | [Harita yönlendirme modları](../map/interact-with-map.md#map-orientation-modes) listesini açar | **Çift dokunuş ve tut** |
| **Çift dokunuş** | *Erişilebilirlik modunda mevcut değil* | *Desteklenmiyor* |


### Nasıl Kullanılır (iOS) {#how-to-use-ios}

OsmAnd'ın iOS sürümü, sistemin **yerleşik erişilebilirlik araçlarını** kullanır.

1. **VoiceOver'ı etkinleştirin**:
   - *Ayarlar → Erişilebilirlik → VoiceOver*'a gidin.
   - OsmAnd ile kullanmak için **VoiceOver hareketlerini** yapılandırın.

2. **Desteklenen özellikler**:
   - Harita etkileşimleri için **ekran okuyucu desteği**.
   - iOS ayarları aracılığıyla **özelleştirilebilir hareketler**.
   - Tüm standart [OsmAnd hareketleri](../map/interact-with-map.md#gestures) mevcuttur.

3. **Daha fazla bilgi edinin**:
   - iOS Görme Erişilebilirliği özellikleri hakkında [buradan](https://www.apple.com/accessibility/vision/) okuyun.
   - iPhone için VoiceOver hareketlerini [buradan](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios) keşfedin.


## Gerekli Kurulum Parametreleri {#required-setup-parameters}

OsmAnd'da cihazın erişilebilirlik özelliklerini etkinleştirmek için aşağıdaki ayarları yapmanız gerekir:

1. **[Erişilebilirlik eklentisini](../plugins/index.md#enable--disable) etkinleştirin**:  *Menü → Eklentiler → Erişilebilirlik → Etkinleştir*.  
2. Cihazınızda **erişilebilirlik modunu etkinleştirin**.
3. Erişilebilirlik eklentisi [ayarlarını](#plugin-settings) yapılandırın.


## Otomatik Duyuru {#autoannounce}

Etkinleştirmek için:  
*Konumum* (Uzun dokunuş) → *Ayrıntıları göster* → *Otomatik duyuruyu başlat/durdur*

- **Konumum** üzerine uzun dokunuş, ***Konumunuzu göster*** ve ***Ayrıntıları göster*** seçenekleriyle bir menü açar. Ayrıntıları göster'i seçmek ek rota bilgilerini görüntüler ve ***Otomatik duyuruyu başlat/durdur*** düğmesini sağlar.
- Duyuruların sıklığını kontrol etmek için **Otomatik Duyuru Periyodunu** (örn. *10 saniye*) ayarlayın.
- **TalkBack** cihazın sistem ayarlarında etkinleştirilmediyse, OsmAnd *sesli bildirimler* sağlamaz ve yalnızca ekranda *metin bildirimleri* görüntüler.  

### Akıllı Otomatik Duyuru {#smart-autoannounce}

Etkinleştirmek için:  
*Eklentiler* → *Erişilebilirlik* → *Ayarlar* → *Akıllı Otomatik Duyuru*

**Akıllı Otomatik Duyuru** özelliği, planlanan rotadan saptığınızda *sesli bildirimler* sağlar. *Sesli rehberliğe* güvenen görme engelli kullanıcıları desteklemek için tasarlanmıştır.  


## Eklenti Ayarları {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Accessibility](@site/static/img/plugins/accessibility/access_new.png)  

Erişilebilirlik eklentisi, engelli kullanıcılar için navigasyon ve etkileşimi kişiselleştirmek için çeşitli ayarlar sunar. Bu ayarlar OsmAnd'da [profil](../personal/profiles.md) göre uygulanır.

| Ayar                          | Açıklama |  
|-------------------------------|----------|  
| **Erişilebilirlik Modu**      | *Yerleşik OsmAnd özelliklerini* etkinleştirir veya **sistem ayarlarını** kullanır. |  
| **Konuşma Hızı**              | *Metin okuma hızını* **%50 ila %200** arasında kontrol eder. |  
| **Çimdik Yakınlaştırma Büyütmesi**    | Çimdikle yakınlaştırırken ve parmaklarınızı ekranda tutarken haritayı geçici olarak büyütür, metin ve simgeleri gerçek yakınlaştırma seviyesini değiştirmeden büyütür. |
| [Akıllı Otomatik Duyuru](#smart-autoannounce)    | Rotadan sapıldığında *sesli rehberlik* sağlar. |  
| **Otomatik Duyuru Periyodu**  | Duyurular arasındaki minimum süreyi **5 saniyeden 5 dakikaya** ayarlar. |  
| [Yön Stili](#direction-style)       | *Yana doğru (8 yön)* veya *Saat yönünde (12 yön)* arasında seçim yapın. |  
| **Sesli Yönlendirmeler**      | Yönü gösteren *sesli rehberlikler* çalar. |  
| **Dokunsal Yönlendirmeler**   | Dönüşler ve sapmalar için *titreşim geri bildirimi* sağlar.|  

***Optimize edilmiş erişilebilirlik için ipuçları:***

- **Ekran okuyucu** - Gelişmiş harita etkileşimi için TalkBack (*Android*) veya VoiceOver (*iOS*) kullanın.
- **Sesli navigasyon** - Ekran kapalıyken sesli yönlendirmeler almak için otomatik duyuruyu etkinleştirin.
- **Dokunsal geri bildirim** - Düşük görüşlü ortamlar veya sesli rehberliklerin pratik olmadığı durumlar için idealdir.


### Yön Stili {#direction-style}

**Yön Stili** ayarı, navigasyon talimatlarının nasıl sunulacağını tanımlar:

- Yana doğru (8 yön) – klasik sol/sağ veya ana/ara yönleri kullanır.
- Saat yönünde (12 yön) – saat kadranına dayalı rehberlik kullanır, örneğin “saat 3’te” veya “saat 10’da”.

Bu özellik, özellikle saat tabanlı yönelim tercih eden görme engelli kullanıcılar için mekansal farkındalığı iyileştirmek için tasarlanmıştır.

Etkinleştirmek için:
*Menü* → *Eklentiler* → *Erişilebilirlik* → *Ayarlar* → *Yön Stili* → **Yana doğru** veya **Saat yönünde** seçin.

:::info note
Yön Stili bağımsız bir seçenektir. Akıllı Otomatik Duyuru'ya bağlı değildir ve Akıllı Otomatik Duyuru etkinleştirilmiş olsun veya olmasın çalışır.
:::

## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Küresel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritalar (Harita Stilleri)](../../user/map/vector-maps.md)