---
source-hash: d4fdeaa3f3d1430002a0e679e72ccee20fec335cb9d13974b60c5cadd82a094e
sidebar_position: 7
---

# OsmAndMapCreator und Tools kompilieren {#how-to-compile-osmandmapcreator-and-tools}


## OsmAndMapCreator kompilieren {#compile-osmandmapcreator}
1. Richten Sie zuerst die **[Entwicklungsumgebung](setup-the-dev-environment.md)** ein.
2. **Gradle** (Kommandozeile):
    - Kompilieren mit der Kommandozeile
    ```
    cd tools/java-tools && ../gradlew build
    ```
    - OsmAndMapCreator.zip wird mit allen Skripten darin erstellt
    **Hinweis**: Ein Android-Projekt ist erforderlich, um die Tools zu erstellen (es verwendet das OsmAnd-java-Projekt).
3. **Eclipse**:
    - Eclipse-Projekte vorkonfigurieren
    ```
    cd tools/java-tools && ../gradlew cleanEclipse eclipse
    ```
    - Wählen Sie in Eclipse 'Import' - 'Existing projects in workspace' die Ordner 'OsmAnd-java', 'OsmAndMapCreatorutilities', 'OsmAndMapCreator', 'OsmAndServer', 'OsmAndServerUtilties'.
    **Hinweis**: Wählen Sie nicht den übergeordneten Ordner java-tools, sondern die oben angegebenen Projekte.
4. Android Studio / Idea
    Sie können gerne einen Pull-Request an diese Dokumentation stellen und beschreiben, wie dies gemacht werden kann.
5. Hauptklassen, die aus der IDE ausgeführt werden sollen:
   - net.osmand.MainUtilities - repräsentiert utilities.sh und führt zu allen möglichen Dienstprogrammen.
   - net.osmand.obf.BinaryInspector - inspector.sh-Dienstprogramm zum Lesen von OBF-Dateien und liefert Informationen darüber.
   - net.osmand.obf.preparation.IndexCreator - Verknüpfung zum Generieren einer obf-Datei.
   - net.osmand.swing.OsmExtractionUI - OsmAndMapCreator

## Native Rendering-Bibliothek für OsmAndMapCreator kompilieren {#compile-native-rendering-library-for-osmandmapcreator}
Die native Rendering-Bibliothek kann verwendet werden, um Offline-Rendering oder Offline-Native-Routing zu testen. Sie ist sehr nützlich, um einen Rendering-Stil oder eine Routing-Konfiguration zu debuggen und zu testen.

1. Richten Sie zuerst die **Entwicklungsumgebung** ein, siehe [Entwicklungsumgebung](./setup-the-dev-environment).
2. Externe Abhängigkeiten herunterladen
 ```
 cd core-legacy/externals
 ./configure.sh
 ```
3. Geben Sie JAVA_HOME global über $PATH oder in der Befehlszeile an
  ```
  export JAVA_HOME=<>
  ```
4. Wählen Sie ein bestimmtes [Ziel](https://github.com/osmandapp/OsmAnd-core/tree/legacy_core/targets) für das Betriebssystem und kompilieren Sie eine bestimmte Version 'debug', 'release' oder '' (Standard). Beispiel
  ```
  cd core-legacy/targets
  ./intel-darwin.sh release # macOs release
  ./amd64-linux-clang.sh debug # linux debug - default
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
Wenn Sie feststellen, dass libjpeg-turbo nicht kompiliert werden konnte
```
targets/.cmake/../../externals/skia/upstream.patched/third_party/externals/libjpeg-turbo/jconfigint.h.in does not exist.
```
Sie finden die Dateien hier und legen sie in den angegebenen Ordner
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfig.h
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfigint.h

## Qt-Core-Version für OsmAndMapCreator kompilieren {#compile-qt-core-version-for-osmandmapcreator}
1. Richten Sie zuerst die **[Entwicklungsumgebung](setup-the-dev-environment.md)** ein.
2. Build (cmake) für ein bestimmtes Ziel vorbereiten. Beispiel clang / linux :
```
   alias clang='clang -std=c++11'
   build/amd64-linux-clang.sh release
```
3. Bibliothek release kompilieren
```
    (cd "baked/amd64-linux-clang-release.make" && make -j4)
```