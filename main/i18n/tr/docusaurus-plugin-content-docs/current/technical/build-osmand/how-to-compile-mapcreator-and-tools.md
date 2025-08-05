---
source-hash: 327829f314cc4f1e24fffee0913b64a5c6b746a367f055b12c2e71f3b9beed22
sidebar_position: 7
---

# OsmAndMapCreator ve Araçları Nasıl Derlenir? {#how-to-compile-osmandmapcreator-and-tools}


## OsmAndMapCreator'ı Derleme {#compile-osmandmapcreator}
1. Öncelikle **[geliştirme ortamını](setup-the-dev-environment.md)** kurun.
2. **Gradle** (komut satırı):
    - Komut satırı ile derleyin
    ```
    cd tools/java-tools && ../gradlew build
    ```
    - Tüm betiklerle birlikte OsmAndMapCreator.zip oluşturulacaktır.
    **Not**: Araçları oluşturmak için android projesi gereklidir (OsmAnd-java projesini kullanır).
3. **Eclipse**:
    - Eclipse projelerini önceden yapılandırın
    ```
    cd tools/java-tools && ../gradlew cleanEclipse eclipse
    ```
    - Eclipse'te 'İçe Aktar' - 'Çalışma Alanındaki Mevcut Projeler' seçeneğini kullanarak 'OsmAnd-java', 'OsmAndMapCreatorutilities', 'OsmAndMapCreator', 'OsmAndServer', 'OsmAndServerUtilties' klasörlerini seçin.
    **Not**: Üst klasör java-tools'u seçmeyin, bunun yerine yukarıda belirtilen projeleri seçin.
4. **IntelliJ IDEA**
    - 'Dosya' > 'Yeni' > 'Mevcut kaynaklardan proje...' seçeneğini seçin ve `java-tools`'a gidin.
    - 'Mevcut modelden projeyi içe aktar' seçeneğini seçin ve listeden 'gradle'ı seçin.
5. IDE'den çalıştırılacak ana sınıflar:
   - net.osmand.MainUtilities - utilities.sh'ı temsil eder ve tüm olası yardımcı programlara yol açar.
   - net.osmand.obf.BinaryInspector - OBF dosyalarını okumak ve hakkında bilgi vermek için inspector.sh yardımcı programı.
   - net.osmand.obf.preparation.IndexCreator - obf dosyası oluşturmak için kısayol.
   - net.osmand.swing.OsmExtractionUI - OsmAndMapCreator

## OsmAndMapCreator için Yerel İşleme Kütüphanesini Derleme {#compile-native-rendering-library-for-osmandmapcreator}
Yerel işleme kütüphanesi, Çevrimdışı İşleme veya Çevrimdışı Yerel Yönlendirmeyi test etmek için kullanılabilir. Bir işleme stilini veya yönlendirme yapılandırmasını hata ayıklamak ve test etmek için çok kullanışlıdır.

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
4. İşletim sistemi için belirli bir [hedef](https://github.com/osmandapp/OsmAnd-core/tree/legacy_core/targets) seçin ve belirli bir 'debug', 'release' veya '' (varsayılan) sürümünü derleyin. Örnek:
  ```
  cd core-legacy/targets
  ./intel-darwin.sh release # macOS sürümü
  ./amd64-linux-clang.sh debug # linux debug - varsayılan
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
Libjpeg-turbo'nun derlenemediğini deneyimlerseniz
```
targets/.cmake/../../externals/skia/upstream.patched/third_party/externals/libjpeg-turbo/jconfigint.h.in mevcut değil.
```
Dosyaları burada bulabilir ve belirtilen klasöre koyabilirsiniz
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfig.h
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfigint.h

## OsmAndMapCreator için qt çekirdek sürümünü derleme {#compile-qt-core-version-for-osmandmapcreator}
1. Öncelikle **[geliştirme ortamını](setup-the-dev-environment.md)** kurun.
2. Belirli bir hedef için derlemeyi (cmake) hazırlayın. Örnek clang / linux:
```
   alias clang='clang -std=c++11'
   build/amd64-linux-clang.sh release
```
3. Kütüphane sürümünü derleyin
```
    (cd "baked/amd64-linux-clang-release.make" && make -j4)
```