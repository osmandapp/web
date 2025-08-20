---
source-hash: 327829f314cc4f1e24fffee0913b64a5c6b746a367f055b12c2e71f3b9beed22
sidebar_position: 7
---

# OsmAndMapCreator und Tools kompilieren {#how-to-compile-osmandmapcreator-and-tools}


## OsmAndMapCreator kompilieren {#compile-osmandmapcreator}
1. Zuerst die **[Entwicklungsumgebung](setup-the-dev-environment.md)** einrichten.
2. **Gradle** (Kommandozeile):
    - Kompilieren mit der Kommandozeile
    ```
    cd tools/java-tools && ../gradlew build
    ```
    - OsmAndMapCreator.zip wird mit allen Skripten darin erstellt
    **Hinweis**: Ein Android-Projekt ist erforderlich, um Tools zu erstellen (es verwendet das OsmAnd-Java-Projekt).
3. **Eclipse**:
    - Eclipse-Projekte vorkonfigurieren
    ```
    cd tools/java-tools && ../gradlew cleanEclipse eclipse
    ```
    - In Eclipse 'Import' - 'Existing projects in workspace' die Ordner 'OsmAnd-java', 'OsmAndMapCreatorutilities', 'OsmAndMapCreator', 'OsmAndServer', 'OsmAndServerUtilties' auswählen.
    **Hinweis**: Wählen Sie nicht den obersten Ordner java-tools, sondern die oben genannten Projekte.
4. **IntelliJ IDEA**
    - 'File' > 'New' > 'Project from existing sources...' und navigieren Sie zu `java-tools`
    - Wählen Sie 'Import project from existing model' und wählen Sie 'gradle' aus der Liste
5. Hauptklassen, die aus der IDE ausgeführt werden sollen:
   - net.osmand.MainUtilities - repräsentiert utilities.sh und führt zu allen möglichen Dienstprogrammen.
   - net.osmand.obf.BinaryInspector - inspector.sh Dienstprogramm zum Lesen von OBF-Dateien und gibt Informationen darüber.
   - net.osmand.obf.preparation.IndexCreator - Verknüpfung zum Generieren einer obf-Datei.
   - net.osmand.swing.OsmExtractionUI - OsmAndMapCreator

## Native Rendering-Bibliothek für OsmAndMapCreator kompilieren {#compile-native-rendering-library-for-osmandmapcreator}
Die native Rendering-Bibliothek kann zum Testen von Offline-Rendering oder Offline-nativer Routenführung verwendet werden. Sie ist sehr nützlich, um einen Rendering-Stil oder eine Routing-Konfiguration zu debuggen und zu testen.

1. Zuerst die **Entwicklungsumgebung** einrichten, siehe [Entwicklungsumgebung](./setup-the-dev-environment).
2. Externe Abhängigkeiten herunterladen
 ```
 cd core-legacy/externals
 ./configure.sh
 ```
3. JAVA_HOME global über $PATH oder in der Kommandozeile angeben
  ```
  export JAVA_HOME=<>
  ```
4. Wählen Sie ein spezifisches [Ziel](https://github.com/osmandapp/OsmAnd-core/tree/legacy_core/targets) für das Betriebssystem und kompilieren Sie eine spezifische Version 'debug', 'release' oder '' (Standard). Beispiel
  ```
  cd core-legacy/targets
  ./intel-darwin.sh release # macOS release
  ./amd64-linux-clang.sh debug # Linux debug - Standard
  cd ....baked # wie intel-darwin-intel-darwin-clang-release.baked oder amd64-linux-amd64-clang-release.baked
  make -j4
  ```
5. Die Binärdateien sind unter core-legacy/binaries/ verfügbar.
Beispiel:
  ```
    core-legacy/binaries/darwin/intel/Debug/libosmand.dylib
  ```

### Fehlerbehebung {#troubleshooting}
- Fehlende Dateien externals/libjpeg-turbo/jconfigint.h.in existiert nicht.
Wenn libjpeg-turbo nicht kompiliert werden kann
```
targets/.cmake/../../externals/skia/upstream.patched/third_party/externals/libjpeg-turbo/jconfigint.h.in existiert nicht.
```
Sie können die Dateien hier finden und in den angegebenen Ordner legen
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfig.h
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfigint.h

## Qt-Core-Version für OsmAndMapCreator kompilieren {#compile-qt-core-version-for-osmandmapcreator}
1. Zuerst die **[Entwicklungsumgebung](setup-the-dev-environment.md)** einrichten.
2. Build (cmake) für ein bestimmtes Ziel vorbereiten. Beispiel clang / linux :
```
   alias clang='clang -std=c++11'
   build/amd64-linux-clang.sh release
```
3. Bibliothek kompilieren (Release)
```
    (cd "baked/amd64-linux-clang-release.make" && make -j4)
```