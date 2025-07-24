---
source-hash: 327829f314cc4f1e24fffee0913b64a5c6b746a367f055b12c2e71f3b9beed22
sidebar_position: 7
---

# Come compilare OsmAndMapCreator e gli strumenti {#how-to-compile-osmandmapcreator-and-tools}


## Compilare OsmAndMapCreator {#compile-osmandmapcreator}
1. Per prima cosa, configura l'**[ambiente di sviluppo](setup-the-dev-environment.md)**.
2. **Gradle** (riga di comando):
    - Compila con la riga di comando
    ```
    cd tools/java-tools && ../gradlew build
    ```
    - Verrà prodotto OsmAndMapCreator.zip con tutti gli script all'interno
    **Nota**: il progetto Android è necessario per costruire gli strumenti (utilizza il progetto OsmAnd-java).
3. **Eclipse**:
    - Preconfigura i progetti Eclipse
    ```
    cd tools/java-tools && ../gradlew cleanEclipse eclipse
    ```
    - In Eclipse 'Importa' - 'Progetti esistenti nell'area di lavoro' seleziona le cartelle 'OsmAnd-java', 'OsmAndMapCreatorutilities', 'OsmAndMapCreator', 'OsmAndServer', 'OsmAndServerUtilties'.
    **Nota**: non selezionare la cartella principale java-tools, ma seleziona i progetti specificati sopra.
4. **IntelliJ IDEA**
    - 'File' > 'Nuovo' > 'Progetto da fonti esistenti...' e naviga a `java-tools`
    - Seleziona 'Importa progetto da modello esistente' e scegli 'gradle' dall'elenco
5. Classi principali da eseguire dall'IDE:
   - net.osmand.MainUtilities - rappresenta utilities.sh e porta a tutte le possibili utilità.
   - net.osmand.obf.BinaryInspector - utility inspector.sh per leggere i file OBF e fornire informazioni su di essi.
   - net.osmand.obf.preparation.IndexCreator - scorciatoia per generare file obf.
   - net.osmand.swing.OsmExtractionUI - OsmAndMapCreator

## Compilare la libreria di rendering nativa per OsmAndMapCreator {#compile-native-rendering-library-for-osmandmapcreator}
La libreria di rendering nativa può essere utilizzata per testare il rendering offline o il routing nativo offline. È molto utile per il debug e il test di uno stile di rendering o di una configurazione di routing.

1. Per prima cosa, configura l'**ambiente di sviluppo**, vedi [ambiente di sviluppo](./setup-the-dev-environment).
2. Scarica le dipendenze esterne
 ```
 cd core-legacy/externals
 ./configure.sh
 ```
3. Specifica JAVA_HOME globalmente tramite $PATH o nella riga di comando
  ```
  export JAVA_HOME=<>
  ```
4. Scegli un [target](https://github.com/osmandapp/OsmAnd-core/tree/legacy_core/targets) specifico per il sistema operativo e compila una versione specifica 'debug', 'release' o '' (predefinita). Esempio
  ```
  cd core-legacy/targets
  ./intel-darwin.sh release # macOs release
  ./amd64-linux-clang.sh debug # linux debug - predefinito
  cd ....baked # come intel-darwin-intel-darwin-clang-release.baked o amd64-linux-amd64-clang-release.baked
  make -j4
  ```
5. I binari saranno disponibili in core-legacy/binaries/.
Esempio:
  ```
    core-legacy/binaries/darwin/intel/Debug/libosmand.dylib
  ```

### Risoluzione dei problemi {#troubleshooting}
- Mancano i file externals/libjpeg-turbo/jconfigint.h.in non esiste.
Se riscontri che libjpeg-turbo non può essere compilato
```
targets/.cmake/../../externals/skia/upstream.patched/third_party/externals/libjpeg-turbo/jconfigint.h.in non esiste.
```
Puoi trovare i file qui e metterli nella cartella specificata
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfig.h
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfigint.h

## Compilare la versione core di Qt per OsmAndMapCreator {#compile-qt-core-version-for-osmandmapcreator}
1. Per prima cosa, configura l'**[ambiente di sviluppo](setup-the-dev-environment.md)**.
2. Prepara la build (cmake) per un target specifico. Esempio clang / linux :
```
   alias clang='clang -std=c++11'
   build/amd64-linux-clang.sh release
```
3. Compila la release della libreria
```
    (cd "baked/amd64-linux-clang-release.make" && make -j4)
```