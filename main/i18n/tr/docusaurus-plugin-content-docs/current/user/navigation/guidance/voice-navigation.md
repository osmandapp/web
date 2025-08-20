---
source-hash: f70d6c0f6fdfe641f005afd95ec912d5aa5a23f369e009635f62de9e506c5529
sidebar_position: 6
title: Sesli Komutlar / Bildirimler
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

OsmAnd'ın sesli navigasyon özelliği, hareket halindeyken sizi bilgilendiren ve güvende tutan gerçek zamanlı sözlü talimatlar ve uyarılar sağlar. Rehberliği tercihlerinize ve ihtiyaçlarınıza göre ayarlayabilirsiniz. Bunu yapmak için, sokak adlarını, mesafeleri ve hız sınırlarını dinamik olarak duyurabilen bir [Metin Okuma (TTS) motoru](#tts-text-to-speech) veya kısa talimatlar sunan [önceden kaydedilmiş bir ses](#recorded-voice-prompts) gibi uygun bir ses profili seçin.

Adım adım yol tariflerine ek olarak, OsmAnd'ın sesli navigasyonu sizi yaklaşan ilgi çekici noktalar, trafik koşullarındaki değişiklikler ve önceden belirlenmiş bir hız sınırını aştığınızda bilgilendirebilir. Bu uyarıları özelleştirme hakkında daha fazla bilgi edinmek için [Duyuru zamanı ayarları](#announcement-time) ve [Hız Sınırı uyarıları](#speed-limit) bölümlerine bakın.

Ses seçenekleri, uyarı ayarları ve cihaz ses ayarlamalarının doğru kombinasyonuyla, rotanız boyunca zamanında ve net navigasyon bilgileri alacaksınız.

:::note

- <Translate android="true" ids="voice_announces_info"/>
- Metin bildirimleri, sesli komut mesajlarının tetikleme zamanını ve mesajlarını tam olarak yansıtır.

:::

## Sesli Komutları Ayarlama {#setting-up-voice-prompts}

OsmAnd, rotanızı rahatça takip edebilmeniz için sesli komutları kontrol etmek için çeşitli seçenekler sunar. Bu ayarları yapılandırmak için, uygun uygulama bölümlerinden başlayın.

- [Navigasyon](../guidance/navigation-settings.md) bölümünden **Ayarlar**'a dokunarak sesli komutları etkinleştirin. Sesli komutları *Profili Yapılandır* ve *Navigasyon ayarları* aracılığıyla da etkinleştirebilir ve yapılandırabilirsiniz.
- Sesli komutları *Menü → Navigasyon →* *Ses düğmesine* dokunarak açıp kapatın,
    veya *Menü → Navigasyon →* Ayarlar düğmesi *→ Ses →* açma/kapama düğmesini kullanın.

Sesli komutların nasıl ve ne zaman tetiklendiği hakkında daha fazla bilgi için, [Navigasyon Sesli Komut Tetikleme](../../../technical/algorithms/voice-prompt-triggering.md) belgelerine bakın.

### Ses Ayarları {#voice-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Sesli Navigasyon ayarları Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> düğmesi* *(veya <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Profil Seç → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Sesli Navigasyon ayarları iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

**[Dil](#voice-prompt-language)**. Tercih ettiğiniz dili ve türü seçin.

**Duyuru**. Aşağıdaki komut türlerini yapılandırmanıza olanak tanır:

- *Sokak adları (TTS), Çıkış numaraları, Trafik uyarıları, Yaya geçitleri* ve *Tüneller.*
- *[Hız kameraları](#speed-cameras)*.
- Duyurularla birlikte kullanılacak **[Uyarı pencere öğesini](../../widgets/nav-widgets.md#alert-widget)** da yapılandırın.

**Kullanıcı noktaları**:

- Önceden ayarlanmış ve eklenmiş [Ara Noktalar](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track), [Favoriler](../../personal/favorites.md) veya [İÇN'ler](../../map/point-layers-on-map.md#points-of-interest-pois) için sesli komutları etkinleştirin. Sürüş sırasında, seçilen noktalar yaklaştığınızda veya geçtiğinizde duyurulacaktır.

| Komut Türü | Ön Süre [s]:<br/>Karşılık Gelen<br/>Varsayılan Hızda Ön Mesafe [m] | Limit |
| :- | :- | :- |
| Yaklaşma | **60 s:**<br/>Sürüş: 750 m<br/>Bisiklet: 167 m<br/>Yürüme: 67 m | Bir seferde en fazla 1 nokta |
| Geçiş | **15 s:**<br/>Sürüş: 188 m<br/>Bisiklet: 42 m<br/>Yürüme: 17 m | Bir seferde en fazla 3 nokta |

[**Hız limiti**](#speed-limit):

- *Aşıldığında duyur*.
- *Hız limiti toleransı*.

**Diğer**:

- *GPS sinyal kaybı ve kurtarma duyurusu*. OsmAnd, cihazdaki GPS sinyali kaybolduğunda duyuru yapar.
- *Rota yeniden hesaplama duyurusu*. OsmAnd, bir [sapma veya ters yönde hareket](./navigation-settings.md#recalculate-route) durumunda rota yeniden hesaplamasını bildirir.
- *Rotadan sapma duyurusu*. [Ayarlanan parametrelere](./navigation-settings.md#recalculate-route) göre rotadan sapmalar hakkında bilgi alırsınız.

**Seçenekler**:

- *Navigasyon talimatlarını tekrarla*. Navigasyon talimatlarını 1 dakikadan 30 dakikaya kadar düzenli aralıklarla tekrarlamanıza olanak tanır. Veya manuel olarak - bir sesli komutu kaçırırsanız, uygulama ekranındaki [mevcut dönüş okuna](../../widgets/nav-widgets.md#next-turn) dokunarak tekrar dinleyebilirsiniz.
- *[Duyuru zamanı](#announcement-time)*.

**Çıkış** (*Yalnızca Android*):

- *[Sesli rehberlik çıkışı](#voice-guidance-output)*.
- *Müziği duraklat*. Sesli komutlar müzik çalmayı bir süreliğine durdurur.

### Hız Kameraları {#speed-cameras}

![Sesli Navigasyon duyuru zamanlaması Android](@site/static/img/navigation/voice/voice_promt-speed-cameras.png)

[Hız kamerası uyarıları](../../personal/global-settings.md#uninstall-speed-cameras), hız kameralı İÇN'leri etkinleştirmenize veya devre dışı bırakmanıza olanak tanır. Değişiklikleri uygulamak için OsmAnd uygulamasını yeniden başlatmanız gerekecektir.

Bazı ülkelerde veya bölgelerde hız kamerası uyarı uygulamalarını kullanmak yasa dışıdır. Ülkenizin yasalarına göre bir seçim yapmalısınız. **Aktif tut**'u seçerseniz, hız kamerası uyarıları ve bildirimleri alırsınız. **Kaldır**'ı seçerseniz, uyarılar, bildirimler ve İÇN'ler gibi hız kameralarıyla ilgili tüm veriler, OsmAnd'ı tamamen yeniden yükleyene kadar silinecektir.

### Hız Limiti {#speed-limit}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sesli Navigasyon](@site/static/img/navigation/voice/voice_promt_speed_limit_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sesli Navigasyon](@site/static/img/navigation/voice/voice_promt_speed_limit_ios.png)

</TabItem>

</Tabs>

**Hız limiti** seçeneği, OsmAnd'ın mevcut hızınızın belirli bir eşiği aştığında sizi bilgilendirmesini sağlar. Maksimum yasal hız limitleri hakkındaki veriler OpenStreetMap'ten alınmıştır.

**Aşıldığında duyur**
*Hız limiti toleransı*, mevcut yoldaki [yasal maksimum hız limitinden](https://wiki.openstreetmap.org/wiki/Key:maxspeed) izin verilen bir sapmayı (örneğin, -10 km/s ila +20 km/s) seçmenizi sağlar. Hızınız bu toleransı aştığında, OsmAnd bir sesli komut verir.

Hız limiti aşıldığında sesli komutları etkinleştirme kuralları:

- *İlk uyarı*. Hız limitini aştığınızı tespit ettiğinde, OsmAnd ilk sesli uyarıyı vermeden önce 5 saniye bekler.
- *Tekrar duyuru gecikmesi*. Hız yapmaya devam ederseniz, aşırı sık bildirimleri önlemek için bir sonraki uyarı 120 saniye geciktirilir.
- *Zamanlayıcı sıfırlama*. Yasal limit içinde 30 saniye kalırsanız zamanlayıcı sıfırlanır. Daha fazla hız yapma durumunda, bir sonraki uyarı çalmadan önce yine 5 saniye beklenecektir.

Bu **Hız limiti toleransı** ayarı, OsmAnd uygulamasındaki [Hız Göstergesi pencere öğesinin](../../widgets/info-widgets.md#speedometer) *uyarı* bölümünde, [Android Auto](../../navigation/auto-car.md#speedometer) ve [CarPlay](../../navigation/car-play.md#speedometer) uygulamalarında görüntülenen hızı etkiler.

### Duyuru Zamanı {#announcement-time}

![Sesli Navigasyon duyuru zamanlaması Android](@site/static/img/navigation/voice/voice_promt-announ-time.png)

Farklı sesli komutların duyuru zamanı, seçilen profile, komutun türüne, mevcut navigasyon hızına ve varsayılan navigasyon hızına bağlıdır. Bu ayarla, bir mesafe çarpanı uygulayarak sesli komutlar etkinleştirilmeden önceki mesafeyi değiştirebilirsiniz: *<Translate android="true" ids="arrival_distance_factor_normally" />* - 1.0, *<Translate android="true" ids="arrival_distance_factor_early" />* - 1.5, *<Translate android="true" ids="arrival_distance_factor_late" />* - 0.5, *<Translate android="true" ids="arrival_distance_factor_at_last" />* - 0.25.

*Zaman ve Mesafe Aralıkları* açılır listesinde, farklı mesafe çarpanları için komutların etkinleştirilmesi hakkında ayrıntılı bilgi görüntüleyebilirsiniz. Daha fazla bilgi için, [Navigasyon Sesli Komut Tetikleme](../../../technical/algorithms/voice-prompt-triggering.md) bölümüne bakın.

### Sesli Rehberlik Çıkışı {#voice-guidance-output}

<InfoAndroidOnly/>

![Sesli Navigasyon Android](@site/static/img/navigation/voice/voice_promt-1.png)

Aynı anda aynı çıkış akışında ses çalmayı önlemek için, Android'de ses odağı uygulanmıştır. OsmAnd, ses çıkışı için bu ayardaki listeden seçilen hoparlörü kullanacaktır. Diğer uygulamalar, OsmAnd'ın sesli komutlarını daha kolay duymanız için çalmayı duraklatacak veya sesi kısacaktır.

- Medya/navigasyon sesi.
- Bildirim sesi.
- Telefon görüşmesi sesi (Bluetooth [araç stereolarını](../auto-car.md) kesmek için).

### Sesli Komutların Test Edilmesi {#testing-of-voice-prompts}

Sesli komutları şunlarla test edebilirsiniz:

- [Navigasyonu Simüle Et](../../navigation//setup/route-navigation.md#simulated-navigation). Bir rota belirleyin ve simülasyonu başlatın: *Navigasyon menüsü → Ayarlar → Navigasyonu Simüle Et*.

- [Sesli komutları test et](../../plugins/development.md#application-testing) (*Yalnızca Android*). Sesli komutları test etmek için *Geliştirme eklentisini* kullanın:
    - *Menü → Eklentiler → OsmAnd Geliştirme'yi Etkinleştir*'e gidin.
    - *Ayarlar → Sesli komutları test et*'e gidin.
    - Bir dil seçin ve sistemin komutları doğru çalıp çalmadığını kontrol edin.

### Ses Sorunlarını Çözme {#solving-audio-issues}

**Sesli komutları** veya [hız limiti uyarılarını](#speed-limit) duymuyorsanız:

- Cihazınızın sesinin açık ve yüksek olduğundan emin olun.
- Navigasyon sırasında sesin etkinleştirildiğini onaylayın: *Menü → Navigasyon → Ses açma/kapama düğmesi* veya ayrıntılı ses yapılandırması için *Menü → Navigasyon → Ayarlar düğmesi → Ses*.
- Hangi [hoparlörlerin](#voice-guidance-output) kullanılacağını seçin.
- Hangi [sesli rehberliğin](#voice-prompt-language) seçildiğini kontrol edin ve hız limiti uyarılarını duyurabilecek bir TTS veya kayıtlı sesiniz olduğundan emin olun.
- Sesin istenmeyen bir çıkış cihazına (örneğin, bağlantısı kesilmiş bir Bluetooth kulaklık) yönlendirilmediğini doğrulayın.

Ek sorun giderme adımları için, [navigasyon sorun giderme kılavuzuna](../../troubleshooting/navigation.md#voice-navigation) bakın.

## TTS (Metin Okuma) {#tts-text-to-speech}

OsmAnd, dönüş talimatları, sokak adları ve İÇN duyuruları dahil olmak üzere dinamik ve ayrıntılı sesli rehberlik sağlayan **Metin Okuma (TTS)** seslerini destekler. TTS sesleri uygulamaya dahildir ancak cihazda yüklü bir [Metin Okuma motoru](https://en.wikipedia.org/wiki/Speech_synthesis) gerektirir.

Çoğu modern Android ve iOS cihazı varsayılan bir TTS motoru içerir, ancak ek motorlar ve diller ayrı olarak yüklenebilir.

Android'de **mevcut TTS motorları ve desteklenen diller** listesi için şuraya bakın:
[Android'de mevcut TTS motorları olan diller listesi](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

***Cihazınızda TTS'yi yapılandırma:***

**Android:**

1. Ayarları açın.
2. *Erişilebilirlik → Metin Okuma Çıkışı*'na gidin.
3. Bir **TTS motoru** seçin (Google TTS veya yüklü başka bir motor).
4. Bir **tercih edilen dil** seçin (bazıları ek indirmeler gerektirebilir).
5. Konuşma hızını, tonunu ve oynatma hızını gerektiği gibi ayarlayın.
6. Ses çıkışını test etmek için **Örneği Dinle**'ye dokunun.

Daha fazla ayrıntı için şuraya bakın:
[Google Destek – Android Metin Okuma Ayarları](https://support.google.com/accessibility/android/answer/6006983).

**iOS:**

1. Ayarları açın.
2. *Erişilebilirlik → Konuşulan İçerik*'e gidin.
3. Tercih edilen bir ses seçmek için **Sesler**'e dokunun.
4. **Konuşma Hızı**, **Telaffuzlar** ve diğer ayarları yapın.
5. **Seçimi Konuş** veya **Ekranı Konuş**'u kullanarak sesi test edin.

Daha fazla ayrıntı için şuraya bakın:
[Apple Destek – iPhone Konuşma Ayarları](https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios#:~:text=Go%20to%20Settings%20%3E%20Accessibility%20%3E%20Spoken,the%20top%20of%20the%20screen).

***Sesli komutları test etme:***

TTS'nin OsmAnd içinde düzgün çalışıp çalışmadığını kontrol etmek için:

- **Geliştirme Eklentisini** etkinleştirin: *Menü → Ayarlar → Eklentiler → OsmAnd Geliştirme*.
- [Sesli komutları test et](../../plugins/development.md#application-testing) bölümünü açın: *Menü → Ayarlar → Eklentiler → OsmAnd Geliştirme → Sesli Komutları Test Et*.

Sorun giderme için şuraya bakın:
[Sesli navigasyon sorun giderme](../../troubleshooting/navigation.md#voice-navigation).

### Sesli Komut Dili {#voice-prompt-language}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Şuraya gidin: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces,shared_string_language"/>*

![Sesli Navigasyon Android](@site/static/img/navigation/voice/voice_promt-tts.png) ![Sesli Navigasyon Android](@site/static/img/navigation/voice/voice_promt-recorded.png)

</TabItem>

<TabItem value="ios" label="iOS">

Şuraya gidin: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces,shared_string_language"/>*

![Sesli Navigasyon ayarları iOS](@site/static/img/navigation/voice/voice_promt-tts-ios.png)

</TabItem>

</Tabs>

OsmAnd iki tür sesli komut sağlar:

- **<Translate android="true" ids="tts_title"/>**
    - Sesli komutları dinamik olarak oluşturmak için cihazın TTS motorunu kullanır.
    - Sokak adlarını, dönüş talimatlarını, İÇN adlarını ve diğer ayrıntıları okur.
    - Birden çok dili ve telaffuz ayarlarını destekler.
    - Konuşma hızı, ton ve telaffuz ayarlarıyla özelleştirilebilir.

- **<Translate android="true" ids="shared_string_recorded"/>** (*Yalnızca Android*)
    - Navigasyon için önceden kaydedilmiş sesli komutları kullanır.
    - TTS'den daha doğal ses çıkarır ancak sınırlamaları vardır.
    - Sokak adlarını veya İÇN adlarını okumaz
    - Yalnızca temel dönüş talimatları sağlar.

> *Ayrıntılı navigasyon rehberliği için TTS önerilir.*

#### Sistem Düzeyinde Sesli Komut Ayarları {#system-level-voice-prompt-settings}

Sesli komut davranışı, *çalma hızı, ton ve duraklamalar* dahil olmak üzere yalnızca cihazın sistem ayarlarında ayarlanabilir.

**Android:**

1. Cihaz *Ayarları → Erişilebilirlik → Metin okuma çıkışı*'nı açın.
2. Tercih ettiğiniz TTS motorunu ve dilini seçin.
3. Konuşma hızını, tonunu ve oynatma hızını ayarlayın.

**iOS:**

1. Cihaz *Ayarları → Erişilebilirlik → Konuşulan İçerik*'i açın.
2. Ayarlayın: dil, sesler, konuşma hızı, telaffuzlar.

> *Ek sesler için, sistem ayarlarından dil paketlerini indirin.*

#### Mevcut TTS Dilleri {#available-tts-languages}

Şu anda toplam 45 dil bulunmaktadır. Aşağıda listelenen tüm diller her TTS motoru tarafından desteklenmeyebilir. [Buraya](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/) bakın.

| | |
| :--- | :--- |
| **A** | Arapça |
| **B** | Belarusça, Bulgarca |
| **C** | Katalanca, Çince, Çince (Hong Kong), Çince (Geleneksel), Hırvatça, Çekçe |
| **D** | Danca, Hollandaca |
| **E** | İngilizce, İngilizce (Birleşik Krallık), Estonca |
| **F** | Fince, Fransızca |
| **G** | Almanca, Almanca (günlük), Yunanca, Guarani |
| **H** | Hintçe, Macarca, Macarca (resmi), İbranice |
| **I** | Endonezyaca, İtalyanca |
| **J** | Japonca |
| **K** | Korece |
| **L** | Letonca |
| **N** | Norveççe Bokmål |
| **P** | Farsça, Lehçe, Portekizce, Portekizce (Brezilya) |
| **R** | Romence, Rusça |
| **S** | Sardinyaca, Sırpça (Kiril), Slovakça, Slovence, İspanyolca, İspanyolca (Arjantin), Svahili, İsveççe |
| **T** | Türkçe |
| **U** | Ukraynaca |
| **V** | Vietnamca |

## Kaydedilmiş Sesli Komutlar {#recorded-voice-prompts}

### Ses Paketlerini İndir {#download-voice-packages}

<InfoAndroidOnly />

OsmAnd'da kaydedilmiş sesleri kullanmak yalnızca bir yedek olmalıdır. Oldukça sınırlıdırlar ve sokak adlarını, yer adlarını vb. telaffuz edemezler. Listeden iki farklı setten sesli komutları indirebilirsiniz.

- İlk tür, bunlar önerilenlerdir:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,other_location,index_name_tts_voice"/>*

    ![Sesli Navigasyon ayarları Android](@site/static/img/navigation/voice/TTS-preferred-1.png) ![Sesli Navigasyon ayarları Android](@site/static/img/navigation/voice/TTS-preferred-2.png)

- İkinci tür, eksik özellik setine sahip kaydedilmiş sesli komutlardır:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

    ![Sesli Navigasyon ayarları Android](@site/static/img/navigation/voice/TTS-recorded.png)

### Bip Modları {#beep-modes}

<InfoAndroidOnly />

Bir OsmAnd profilini, bir bisiklet bilgisayarına benzer şekilde konuşmak yerine bip sesi çıkarmak üzere yapılandırabilirsiniz. Üç temel desen vardır: *minimal*, *basit* ve *karmaşık*. Basit ve karmaşık desenlerin *yüksek* varyantları vardır, bunlar gürültülü bir ortamda çok daha kolay duyulabilir ancak hoş olmayan bir şekilde sert ses çıkarabilir.

*<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

- **Minimal**. Bilinen bir rotayı minimum dikkat dağıtıcılarla yaya olarak takip etmek için uygundur, bu desen ara varış noktalarını, favorileri ve İÇN'leri geçerken ve rotadan saptığınızda veya rotaya geri döndüğünüzde sizi uyaracaktır. Dönüşler için herhangi bir sesli uyarı sağlamaz.
- **Basit**. Varış noktaları, favoriler, İÇN'ler ve diğerleri için uyarılara ek olarak, basit desen dönmeniz gerektiğinde daha uzun bir bip sesiyle sizi uyarır.
- **Karmaşık**. Yol bisikleti için uygundur, karmaşık desen, yaklaşan dönüşler hakkında sizi bilgilendirmek için farklı uzunluklarda ve tonlarda bip sesleri kullanır.
    - Düşük bir bip sesi sola dönüş anlamına gelirken, yüksek bir bip sesi sağa dönüş anlamına gelir. Orta tonlu bir dizi bip sesi, bir döner kavşakta (trafik çemberi) alınacak çıkışı temsil eder. Sırayla üç ton da U dönüşü anlamına gelir. Tüm bu durumlarda kısa bip sesleri bir şeyler yapmaya hazırlanmak anlamına gelirken, uzun bip sesleri şimdi bir şeyler yapmak anlamına gelir.

## Metin Bildirimleri {#text-notifications}

Bir rotayı başlattığınızda, bildirim listesindeki açılır sistem menüsünde bilgileri görüntüleyebilirsiniz. OsmAnd'ın sessiz bildirimleri, adım adım talimatlar, dönüş yön okları, varış zamanı ve kalan süre, mevcut hız ve hedefe olan mesafe gibi bilgiler içerir.

![Navigasyon rotası Bildirimi Android](@site/static/img/navigation/route/navigation_notifications_android.png)

Navigasyonunuz için Açılır sistem menüsündeki aktif düğmeler:

- *<Translate android="true" ids="stop_navigation_service"/>*. Navigasyonunuzu durdurmanıza olanak tanır.
- *<Translate android="true" ids="shared_string_pause"/>*. Navigasyonunuzu duraklatmanıza olanak tanır.
- *<Translate android="true" ids="shared_string_resume"/>*. Navigasyonunuzu devam ettirmenize olanak tanır.

### Bildirimleri Yapılandır {#configure-notifications}

OsmAnd uygulaması için bildirim ayarlarını cihazınızın sistem ayarlarında değiştirebilirsiniz. Bildirimler kilit ekranında, ana ekranda, açılır menüde veya uygulamanın üst kısmında görüntülenebilir.

Android'de bildirim kontrolünün nasıl uygulandığı hakkında bu [makaleden](https://support.google.com/android/answer/9079661?hl=en#zippy=%2Cturn-notifications-on-or-off-for-certain-apps%2Cclear-notifications) okuyun. iOS için - [buradan](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.).

## Ekran Kontrolü {#screen-control}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,screen_control"/>*

![Ekran kontrol menüsü Android](@site/static/img/navigation/route/screen_control_android.png)

Güç tasarrufu yapmak için cihazınızın ekranını kontrol edebilirsiniz. Bu modun iki genel ayarı vardır: *<Translate android="true" ids="screen_timeout"/>* ve *<Translate android="true" ids="turn_screen_on"/>*.

### Ekran Zaman Aşımı {#screen-timeout}

1. **<Translate android="true" ids="system_screen_timeout"/>**. Ekran, cihazınızın sistem ayarlarına bağlı olarak kapanır. *Ayarları Değiştir* düğmesi, ekran zaman aşımını ayarlayabileceğiniz *Ekran ve Parlaklık* gibi sistem menüsüne hızlı erişim sağlar.

    ![Sistem zaman aşımı ekran kontrolü Android](@site/static/img/navigation/route/system_timeout_android.png)

2. **<Translate android="true" ids="wake_time"/>**. *Ekranı Açık Tut* açıksa, cihazın ekranı uyandıktan sonra zaman aşımına uğramaz. Devre dışı bırakılırsa, cihazın ekranının etkileşimde bulunmazsanız 5 ila 60 saniye sonra kapanacağı süreyi ayarlayabilirsiniz.

    ![Uyandıktan sonra zaman aşımı Android](@site/static/img/navigation/route/timeout_after_wakeup_android.png) ![Uyandıktan sonra zaman aşımı Android](@site/static/img/navigation/route/timeout_after_wakeup_1_android.png)

### Ekranı Aç {#turn-screen-on}

![ekranı aç Android](@site/static/img/navigation/voice/voice_navigation_Turnscreenon.png)

Ekran uyandırma seçeneklerini seçin ve cihaz kilitliyken OsmAnd'ın ön planda kalmasını sağlayın.

- *<Translate android="true" ids="turn_screen_on_proximity_sensor"/>*. <Translate android="true" ids="turn_screen_on_sensor_descr"/>
- *<Translate android="true" ids="turn_screen_on_navigation_instructions"/>*. <Translate android="true" ids="turn_screen_on_navigation_instructions_descr"/>
- *<Translate android="true" ids="turn_screen_on_power_button"/>*. <Translate android="true" ids="turn_screen_on_power_button_descr"/>

## İlgili Makaleler {#related-articles}

- [Rota parametreleri](../routing/osmand-routing.md#routing-types)
- [Rota hazırlığı](../setup/route-navigation.md)
- [İzleme ile navigasyon](../setup/gpx-navigation.md)
- [İşaretleyicilerle navigasyon](../setup/markers-navigation.md)
- [Rota detayları](../setup/route-details.md)
- [Navigasyon ayarları](./navigation-settings.md)
- [Navigasyon sırasında harita ekranı](./map-during-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

### Yaygın Sorunlar ve Çözümler {#common-issues-and-solutions}

1. [Ses Sorunları.](#solving-audio-issues)
2. [Sesli Komutların Test Edilmesi.](#testing-of-voice-prompts)
3. [Neden kaydedilmiş bir ses yerine bir TTS sesi kullanmalıyım?](../../troubleshooting/navigation.md#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice)
4. [TTS düzgün çalışmıyor mu? Düzeltmek için şu adımları izleyin.](../../troubleshooting/navigation.md#tts-does-not-function-properly-follow-these-steps-to-fix-it)

> *Son güncelleme: Mart 2025*