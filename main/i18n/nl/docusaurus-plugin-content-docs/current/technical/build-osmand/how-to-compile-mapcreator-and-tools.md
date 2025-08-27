---
source-hash: 327829f314cc4f1e24fffee0913b64a5c6b746a367f055b12c2e71f3b9beed22
sidebar_position: 7
---

# OsmAndMapCreator en tools compileren {#how-to-compile-osmandmapcreator-and-tools}


## OsmAndMapCreator compileren {#compile-osmandmapcreator}
1. Stel eerst de **[ontwikkelomgeving](setup-the-dev-environment.md)** in.
2. **Gradle** (commandoregel):
    - Compileren met commandoregel
    ```
    cd tools/java-tools && ../gradlew build
    ```
    - OsmAndMapCreator.zip wordt geproduceerd met alle scripts erin
    **Opmerking**: Android-project is vereist om tools te bouwen (het gebruikt het OsmAnd-java-project).
3. **Eclipse**:
    - Eclipse-projecten vooraf configureren
    ```
    cd tools/java-tools && ../gradlew cleanEclipse eclipse
    ```
    - Selecteer in Eclipse 'Import' - 'Existing projects in workspace' de mappen 'OsmAnd-java', 'OsmAndMapCreatorutilities', 'OsmAndMapCreator', 'OsmAndServer', 'OsmAndServerUtilties'.
    **Opmerking**: selecteer niet de bovenste map java-tools, maar selecteer de hierboven gespecificeerde projecten.
4. **IntelliJ IDEA**
    - 'File' > 'New' > 'Project from existing sources...' en navigeer naar `java-tools`
    - Selecteer 'Import project from existing model' en kies 'gradle' uit de lijst
5. Hoofdklassen om uit te voeren vanuit IDE:
   - net.osmand.MainUtilities - vertegenwoordigt utilities.sh en leidt naar alle mogelijke hulpprogramma's.
   - net.osmand.obf.BinaryInspector - inspector.sh hulpprogramma om OBF-bestanden te lezen en geeft er informatie over.
   - net.osmand.obf.preparation.IndexCreator - snelkoppeling om obf-bestand te genereren.
   - net.osmand.swing.OsmExtractionUI - OsmAndMapCreator

## Native renderingbibliotheek voor OsmAndMapCreator compileren {#compile-native-rendering-library-for-osmandmapcreator}
Native renderingbibliotheek kan worden gebruikt om offline rendering of offline native routering te testen. Het is erg handig om een renderingstijl of een routeringsconfiguratie te debuggen en te testen.

1. Stel eerst de **ontwikkelomgeving** in, zie [ontwikkelomgeving](./setup-the-dev-environment).
2. Externe afhankelijkheden downloaden
 ```
 cd core-legacy/externals
 ./configure.sh
 ```
3. Specificeer JAVA_HOME globaal via $PATH of in de commandoregel
  ```
  export JAVA_HOME=<>
  ```
4. Kies een specifieke [doel](https://github.com/osmandapp/OsmAnd-core/tree/legacy_core/targets) voor OS en compileer een specifieke versie 'debug', 'release' of '' (standaard). Voorbeeld
  ```
  cd core-legacy/targets
  ./intel-darwin.sh release # macOS release
  ./amd64-linux-clang.sh debug # linux debug - standaard
  cd ....baked # zoals intel-darwin-intel-darwin-clang-release.baked of amd64-linux-amd64-clang-release.baked
  make -j4
  ```
5. Binaire bestanden zijn beschikbaar op core-legacy/binaries/.
Voorbeeld:
  ```
    core-legacy/binaries/darwin/intel/Debug/libosmand.dylib
  ```

### Probleemoplossing {#troubleshooting}
- Ontbrekende bestanden externals/libjpeg-turbo/jconfigint.h.in bestaat niet.
Als u ervaart dat libjpeg-turbo niet kan compileren
```
targets/.cmake/../../externals/skia/upstream.patched/third_party/externals/libjpeg-turbo/jconfigint.h.in bestaat niet.
```
U kunt de bestanden hier vinden en in de opgegeven map plaatsen
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfig.h
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfigint.h

## Qt core-versie voor OsmAndMapCreator compileren {#compile-qt-core-version-for-osmandmapcreator}
1. Stel eerst de **[ontwikkelomgeving](setup-the-dev-environment.md)** in.
2. Bereid de build (cmake) voor een specifiek doel voor. Voorbeeld clang / linux:
```
   alias clang='clang -std=c++11'
   build/amd64-linux-clang.sh release
```
3. Compileer bibliotheekrelease
```
    (cd "baked/amd64-linux-clang-release.make" && make -j4)
```