---
source-hash: 9157ad0f0a716d1c05272f2fefedef4131754bbfda33b5fd36124e58bb0e2ce1
sidebar_position: 3
title: Ana Menü
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';




## Genel Bakış {#overview}

**Ana Menü**, uygulamada kullanılabilecek birincil seçenekler listesidir. Profil yapılandırmasına, genel ayarlara, aramaya, kişisel verilere, navigasyona ve diğer özelliklere hızlı erişim sağlar.

[Ana Menü](../widgets/map-buttons.md#main-menu) simgesi '&#8801;', Harita ekranının sol alt köşesinde bulunur. Navigasyon modunda bu düğme varsayılan olarak görünmez. Haritaya kısa bir dokunuştan sonra görünür.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ana menü Android](@site/static/img/menu/main_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ana menü iOS](@site/static/img/menu/main_menu_ios.png)

</TabItem>

</Tabs>


## Ana Menü (Yan Menü) {#main-menu-side-menu}

### Özellikler {#features}

- [Harita işaretleri](../personal/markers.md) harita üzerinde yer işaretlemeye olanak tanıyan bir araçtır.
- [Yerlerim](../personal/myplaces.md) varsayılan olarak Favoriler ve parkurları içeren ve ayrıca [A/V notları](../plugins/audio-video-notes.md) ve [OSM düzenlemeleri](../plugins/osm-editing.md) (bu eklentiler açıksa) içerebilen bir menüdür.
- [Arama](../search/index.md) (Android) haritada bulunan yer veya nesneyi bulmanızı sağlayan bir araçtır.
- [Yol Tarifi](../widgets/map-buttons.md#directions) düğmesi bir rota oluşturmanıza ve navigasyonu başlatmanıza olanak tanır.
- [Haritayı yapılandır](../map/configure-map-menu.md) harita görünümünü yapılandırmaya olanak tanıyan bir menüdür.
- [Haritaları indir](../start-with/download-maps.md) indirilebilecek tüm dosyaları içeren bir menüdür.
- [Seyahat rehberleri (Beta)](../plan-route/travel-guides.md) (*Android*) seyahatiniz için Wikivoyage rehberini kullanmanıza olanak tanıyan bir araçtır.
- [Rota planla](../plan-route/create-route.md) harita üzerindeki mesafeleri ölçmenize, GPX parkurları oluşturmanıza veya mevcut olanlara yeni segmentler eklemenize olanak tanıyan bir araçtır.
- [* Seyahat kaydı](../plugins/trip-recording.md) (*Android*) telefonun GPS'ini kullanarak tüm hareketleri parkura kaydetmeye olanak tanıyan bir araçtır.

### Ayarlar {#settings}

- [Ekranı yapılandır](../widgets/configure-screen.md) Harita üzerindeki widget'ları görüntülemeyi yapılandırmaya olanak tanıyan bir menüdür.
- [Eklentiler](../plugins/index.md#configure-plugin) ek işlevsellik ve gelişmiş ayarlar listesidir.
- [Ayarlar](../personal/global-settings.md) ana uygulama parametrelerini yapılandırmaya olanak tanıyan bir menüdür.
- [Yardım](./first-steps.md#offline-help) rehberinize, uygulama sürümü hakkındaki bilgilere hızlı erişim sağlar ve geliştirme ekibiyle hızlı bir şekilde iletişime geçmenizi sağlar.

### Aktif Profil (Android) {#active-profile-android}

*Ana Menü* aktif profili değiştirmek ve [profili özelleştirmek](../personal/profiles.md) için hızlı erişim sağlar. Profillerin temel amacı, navigasyon için farklı uygulama görünümüne sahip olmaktır. Ancak, ekranı ve widget'ları özelleştirmek ve farklı görüntüleme amaçları için profilleri değiştirmek için kullanabilirsiniz. Tüm [ayarlar](../personal/profiles.md) her profil için ayrı ayrı yapılandırılır.

![profile_menu](@site/static/img/menu/profile_menu.png)

Bu menüde aktif profili **değiştirebilir**, aktif profil için **yapılandırabilir** (ayarları değiştirebilir) veya tüm uygulama profillerini **yönetebilirsiniz**.


### Özelleştir (Android'in Gelişmiş Kullanımı) {#customize-advanced-use-of-android}

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,shared_string_drawer"/> → &#65049; → Etkinleştir*.  

![Çekmece menü öğeleri ](@site/static/img/settings/drawer_menu_correct.png)  

- Bu menü, [Çekmecedeki](../personal/profiles.md#drawer) öğelerin sırasını değiştirmenize, gizlemenize veya göstermenize, başka bir profilden öğe listesini kopyalamanıza ve varsayılan ayarları sıfırlamanıza olanak tanır.  

- *Eksi* düğmesi, *Ana Menü*'den bir öğeyi çekmecede siler ve *Gizli* bölümüne taşır. *Taşı* düğmesi, seçilen öğenin listedeki konumunu değiştirir.  

- *Gizli* bölümüne taşınan öğeler Çekmece menüsünde görüntülenmez, ancak bu listedeki tüm seçenekler, ayarlar veya eklentiler çalışmaya devam eder. Öğeleri adlarının solundaki yeşil düğmeye dokunarak geri yükleyebilirsiniz.  
    ![Çekmece menüsü gizli öğeler ](@site/static/img/settings/drawer_menu_hidden_items.png)

> *Son güncelleme: Temmuz 2022*