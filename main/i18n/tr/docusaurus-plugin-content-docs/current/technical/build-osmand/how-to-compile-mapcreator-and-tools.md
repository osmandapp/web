---
source-hash: d4fdeaa3f3d1430002a0e679e72ccee20fec335cb9d13974b60c5cadd82a094e
sidebar_position: 7
---

# OsmAndMapCreator ve araçları nasıl derlenir? {#how-to-compile-osmandmapcreator-and-tools}


## OsmAndMapCreator'ı Derle {#compile-osmandmapcreator}
1. Öncelikle **[geliştirme ortamını](setup-the-dev-environment.md)** kurun.
2. **Gradle** (komut satırı):
    - Komut satırıyla derle
    ```
    cd tools/java-tools && ../gradlew build
    ```
    - OsmAndMapCreator.zip tüm betiklerle birlikte oluşturulacaktır.
    **Not**: Araçları oluşturmak için android projesi gereklidir (OsmAnd-java projesini kullanır).
3. **Eclipse**:
    - Eclipse projelerini önceden yapılandırın
    ```
    cd tools/java-tools && ../gradlew cleanEclipse eclipse
    ```
    - Eclipse'te 'İçe Aktar' - 'Çalışma Alanındaki Mevcut Projeler' seçeneğini kullanarak 'OsmAnd-java', 'OsmAndMapCreatorutilities', 'OsmAndMapCreator', 'OsmAndServer', 'OsmAndServerUtilties' klasörlerini seçin.
    **Not**: Üst klasör java-tools'u seçmeyin ve bunun yerine yukarıda belirtilen projeleri seçin.
4. Android Studio / Idea
    Bu belgelere bir çekme isteği yapmaktan ve nasıl yapılabileceğini açıklamaktan çekinmeyin.
5. IDE'den çalıştırılacak ana sınıflar:
   - net.osmand.MainUtilities - utilities.sh'yi temsil eder ve tüm olası yardımcı programlara yol açar.
   - net.osmand.obf.BinaryInspector - OBF dosyalarını okumak ve hakkında bilgi vermek için inspector.sh yardımcı programı.
   - net.osmand.obf.preparation.IndexCreator - obf dosyası oluşturmak için kısayol.
   - net.osmand.swing.OsmExtractionUI - OsmAndMapCreator

## OsmAndMapCreator için Yerel oluşturma kütüphanesini derle {#compile-native-rendering-library-for-osmandmapcreator}
Yerel oluşturma kütüphanesi, Çevrimdışı Oluşturma veya Çevrimdışı Yerel Yönlendirmeyi test etmek için kullanılabilir. Bir oluşturma stilini veya yönlendirme yapılandırmasını hata ayıklamak ve test etmek için çok kullanışlıdır.

1. Öncelikle **geliştirme ortamını** kurun, bkz. [geliştirme ortamı](./setup-the-dev-environment).
2. Harici bağımlılıkları indirin
 ```
 cd core-legacy/externals
 ./configure.sh
 ```
3. JAVA_HOME'u $PATH aracılığıyla veya komut satırında global olarak belirtin
  ```
  export JAVA_HOME=<>
  ```
4. İşletim Sistemi için belirli bir [hedef](https://github.com/osmandapp/OsmAnd-core/tree/legacy_core/targets) seçin ve belirli bir 'debug', 'release' veya '' (varsayılan) sürümünü derleyin. Örnek
  ```
  cd core-legacy/targets
  ./intel-darwin.sh release # macOS sürümü
  ./amd64-linux-clang.sh debug # linux hata ayıklama - varsayılan
  cd ....baked # intel-darwin-intel-darwin-clang-release.baked veya amd64-linux-amd64-clang-release.baked gibi
  make -j4
  ```
5. İkililer core-legacy/binaries/ adresinde bulunacaktır.
Örnek:
  ```
    core-legacy/binaries/darwin/intel/Debug/libosmand.dylib
  ```

### Sorun Giderme {#troubleshooting}
- Eksik dosyalar externals/libjpeg-turbo/jconfigint.h.in mevcut değil.
libjpeg-turbo'nun derlenemediğini deneyimlerseniz
```
targets/.cmake/../../externals/skia/upstream.patched/third_party/externals/libjpeg-turbo/jconfigint.h.in mevcut değil.
```
Dosyaları buradan bulabilir ve belirtilen klasöre koyabilirsiniz
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfig.h
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfigint.h

## OsmAndMapCreator için qt çekirdek sürümünü derle {#compile-qt-core-version-for-osmandmapcreator}
1. Öncelikle **[geliştirme ortamını](setup-the-dev-environment.md)** kurun.
2. Belirli bir hedef için derlemeyi (cmake) hazırlayın. Örnek clang / linux :
```
   alias clang='clang -std=c++11'
   build/amd64-linux-clang.sh release
```
3. Kütüphane sürümünü derle
```
    (cd "baked/amd64-linux-clang-release.make" && make -j4)
```