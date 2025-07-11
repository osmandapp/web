---
source-hash: 8cfaeb188adf8c1a24d710a5caef6a5cc4eb8a7611ebe74b7f246a1173d8bdbb
sidebar_position: 6
---

# iOS Sürümü Nasıl Derlenir? {#how-to-compile-the-ios-version}

1. İlk olarak **[geliştirme ortamını](setup-the-dev-environment.md)** kurun.
2. AppStore'dan Xcode'u yükleyin (Son test edilen 14.2)
3. Xcode komut satırı araçlarını yükleyin
  ```
  $ xcode-select --install
  ```
  Veya hatalar durumunda şuradan indirip yüklemeyi deneyin: [Apple sitesi](https://developer.apple.com/download/all/?q=xcode>).

4. Xcode hesabına giriş yapın (isteğe bağlı)
  Apple Geliştirici hesabınız yoksa. Xcode'u açın ve tercihlere gidin (üst menüden)
  ```
  Preferences -> Accounts
  ```
  `+` düğmesine basın. Apple Kimliğinizle (iOS/macOS cihazlarınızdan giriş ve şifre) giriş yapabilirsiniz. Xcode talimatlarını izleyin.
  OsmAnd ekip üyeleri için: Apple Kimliği girişinizi gönderin, böylece geliştiriciler listesine ekleneceksiniz. Davet mesajı içeren bir e-posta aldığınızda etkinleştirin.
  Xcode'u kapatın.

5. Komut satırı araçlarını yükleyin - cmake, svn, cocoapods
  ```
  $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  # intel için
  $ echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/usr/local/bin/brew shellenv)"

  # m1 için
  $ echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/opt/homebrew/bin/brew shellenv)"

  $ brew install svn
  $ brew install cmake # 3.25.2, 3.19, 3.11 üzerinde test edildi

  # intel için
  $ sudo gem install cocoapods

  # m1 için
  $ brew install cocoapods
  ```
6. Java jdk 17'yi indirin ve yükleyin
  ```
  # intel için
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-x64_bin.dmg

  # m1 için
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-aarch64_bin.dmg
  ```

7. Yeni bir metin dosyası oluşturun. Veya varsa güncelleyin.
  ```
  $ mkdir ~/.gradle
  $ nano ~/.gradle/gradle.properties
  ```

  Bu içeriği içine yapıştırın. Dosyayı kaydedin ve bilgisayarı yeniden başlatın.

```
## Proje genelinde Gradle ayarları. {#project-wide-gradle-settings}
#
# Derleme ortamınızı nasıl yapılandıracağınız hakkında daha fazla bilgi için {#for-more-details-on-how-to-configure-your-build-environment-visit}
# http://www.gradle.org/docs/current/userguide/build_environment.html {#httpwwwgradleorgdocscurrentuserguidebuildenvironmenthtml}
#
# Daemon süreci için kullanılan JVM argümanlarını belirtir. {#specifies-the-jvm-arguments-used-for-the-daemon-process}
# Bu ayar özellikle bellek ayarlarını ince ayar yapmak için kullanışlıdır. {#the-setting-is-particularly-useful-for-tweaking-memory-settings}
# Varsayılan değer: -Xmx10248m -XX:MaxMetaspaceSize=256m {#default-value--xmx10248m--xxmaxmetaspacesize256m}
# org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8 {#orggradlejvmargs-xmx2048m--xxmaxmetaspacesize512m--xxheapdumponoutofmemoryerror--dfileencodingutf-8}

org.gradle.daemon=true

org.gradle.jvmargs=-Xmx4096m -XX:MaxMetaspaceSize=2048m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8

#
# Yapılandırıldığında, Gradle kuluçka paralel modunda çalışacaktır. {#when-configured-gradle-will-run-in-incubating-parallel-mode}
# Bu seçenek yalnızca ayrık projelerle kullanılmalıdır. Daha fazla ayrıntı için, ziyaret edin {#this-option-should-only-be-used-with-decoupled-projects-more-details-visit}
# http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects {#httpwwwgradleorgdocscurrentuserguidemultiprojectbuildshtmlsecdecoupledprojects}

org.gradle.parallel=true
org.gradle.caching=true

#Cuma Nisan 08 18:47:31 EEST 2016
# android.useDeprecatedNdk=true {#androidusedeprecatedndktrue}
```

8. Qt kütüphanesini derlemek ve harici bağımlılıkları indirmek için `prepare.sh` dosyasını çalıştırın
  ```
  $ cd ios
  $ ./prepare.sh
  ```

  Hata: `Xcode düzgün ayarlanmadı. Lisansı onaylamanız gerekebilir...`.
  Çözüm: XcodeCommandLineTools'u Xcode uygulamasına geçirin, lisansı onaylayın ve geri geçirin.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  $ sudo xcodebuild -license accept
  $ sudo xcode-select --switch /Library/Developer/CommandLineTools
  ```

  Çözüm 2: xcrun'ın kullanılabilir olup olmadığını kontrol edin: ``` /usr/bin/xcrun -find xcrun ```. Eğer şunu alırsanız: ``` xcrun: hata: "xcrun" yardımcı programı bulunamadı, geliştirici aracı değil veya PATH'de değil ```. O zaman Xcode > Tercihler > Konumlar'ı açın ve "Komut Satırı Araçları" alanında komut satırı araçlarınızı "Xcode XX.X" seçin ve `$ ./prepare.sh` komutunu tekrar çalıştırın.

  Çözüm 3: Hata: `CMake Hatası ... iphoneos bir iOS SDK değil`.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  ```

  Çözüm 4: Eğer şöyle bir hata alırsanız: ``` CMakeLists.txt:1 (cmake_minimum_required) adresinde CMake Hatası: CMake 3.21.2 veya daha yüksek bir sürüm gereklidir. Şu anda 3.11.2 sürümünü kullanıyorsunuz ```. O zaman CMake web sitesinden dmg yükleyicisini indirin ve manuel kurulumu gerçekleştirin. Ve `$ ./prepare.sh` komutunu tekrar çalıştırın.
  ```
  https://cmake.org/download/
  ```

  Çözüm 5: Eğer şöyle bir hata alırsanız: ```'ios.simulator.clang.static' için 'qtbase-ios' yapılandırılamadı, iptal ediliyor...```. ```core/external/qtbase-ios/``` klasörüne gidin ve ```upstream``` ile başlayan tüm klasörleri silin. Ve `$ ./prepare.sh` komutunu tekrar çalıştırın.


9. Xcode'da `osmand.xcworkspace` dosyasını açın

10. İlk derleme.
  Derleme hedefini `OsmAnd Haritalar` olarak ayarlayın. (Oynat/Durdur düğmelerinin yanında). Hedef olarak cihazınızı veya iOS simülatörlerinden birini seçin. Ancak varsayılan 'Herhangi bir iOS Cihazı (arm64)' kullanmayın. Projeyi derleyin (oynat düğmesi).

11. XCode Hedefleri ve Sanal Alan

 - Günlük geliştirme için "Mac'im (iPad için Tasarlandı)" kullanın (en iyi performans)
 - UI/UX geliştirme için iPhone/iPad hedeflerini kullanın (M işlemcilerde yavaş)

 - MacOS, OsmAnd çalışırken Apple Kimliği kullanarak giriş yapmanızı isteyebilir
 - Tekrarlanan giriş isteklerini önlemek için Sanal Alan Hesabınızı Apple Kimliği olarak kullanın
 - Sınırsız harita almak için Promosyon aboneliğinizle OsmAnd Cloud'u kullanın

 - Sanal Alan hesapları ve Promosyon abonelikleri için Ekip Liderinize danışın

## Sorun Giderme {#troubleshooting}
### Geçici dosyaları temizleme. {#cleaning-temp-files}
  - Derleme hataları durumunda Xcode'da şuna basabilirsiniz: ```Ürün -> Derleme klasörünü temizle```
  - Xcode'u kapatın.
  - `OsmAnd` dizinindeki `baked` ve `binaries` klasörlerini silin (zaten varsa).
  - ```core/external/qtbase-ios/``` klasörüne gidin ve ```upstream``` ile başlayan tüm klasörleri silin.
  - Xcode DerivedData klasörünü silin: ``` rm -rf ~/Library/Developer/Xcode/DerivedData ```
  - Tüm depoların güncel ve doğru dallarda olduğundan emin olun.
  - Bilgisayarınızı yeniden başlatın. (Evet, yardımcı olabilir).
  - Ardından `$ ./prepare.sh` komutunu çalıştırın
  - XCode'u açın ve projeyi tekrar derlemeyi deneyin.

### M1 mac {#m1-mac}
  - ```ld: kütüphane bulunamadı -lOsmAndCore_static_standalone``` durumunda:
  - Proje Gezgini -> OsmAnd_projects -> OsmAnd_projects (Proje/Hedefler listesinde) -> Derleme ayarları -> Tümü -> Mimariler -> Hariç Tutulan Mimariler -> Hata Ayıklama
  - ```Any IOS Simulator SDK``` türünde, ```arm64``` değerine sahip bir dize alanı ekleyin. (her prepare.sh çalıştırmasından sonra eklemeniz gerekecektir)
  - Projeyi derleyin. Hatalar durumunda, ```11. Sorun Giderme - geçici dosyaları temizleme.``` ve ```prepare.sh```'deki tüm talimatları tekrar yapın.

## Kotlin hata ayıklama eklentisi (isteğe bağlı) {#kotlin-debug-addon-optional}
```
$ brew install xcode-kotlin
$ xcode-kotlin install
$ xcode-kotlin sync
```

Kotlin hata ayıklama kurulumunu tamamlamak için LLDB Init Dosyası bölümüne bakın.

## Qt hata ayıklama eklentisi (isteğe bağlı). Hata ayıklama modunda Qt değerlerini görmek istiyorsanız şunu çalıştırın: {#qt-debug-addon-optional-if-you-want-to-see-qt-values-in-debug-mode-run-this}
```
$ mkdir -p ~/qtlldb
$ git clone https://github.com/gbooker/lldb-qt-formatters ~/qtlldb
$ touch  ~/.lldbinit-Xcode
$ echo "" >> ~/.lldbinit-Xcode
$ echo "command script import ~/qtlldb/both.py" >> ~/.lldbinit-Xcode
```

## LLDB Başlangıç Dosyası (isteğe bağlı) {#lldb-init-file-optional}
XCode 16+ `~/.lldbinit-Xcode` dosyasını otomatik olarak yüklemez, bu nedenle `Ürün - Şema - Şemayı Düzenle - Çalıştır - LLDB Başlangıç Dosyası` menüsünü kullanarak manuel olarak ayarlayın.

Bu parametreleri ayarladıktan sonra bilgisayarınızı yeniden başlatın.