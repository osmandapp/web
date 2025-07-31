---
source-hash: 327829f314cc4f1e24fffee0913b64a5c6b746a367f055b12c2e71f3b9beed22
sidebar_position: 7
---

# Cómo compilar OsmAndMapCreator y herramientas {#how-to-compile-osmandmapcreator-and-tools}


## Compilar OsmAndMapCreator {#compile-osmandmapcreator}
1. Primero, configure el **[entorno de desarrollo](setup-the-dev-environment.md)**.
2. **Gradle** (línea de comandos):
    - Compile con la línea de comandos
    ```
    cd tools/java-tools && ../gradlew build
    ```
    - Se producirá OsmAndMapCreator.zip con todos los scripts dentro.
    **Nota**: se requiere un proyecto de Android para construir herramientas (utiliza el proyecto OsmAnd-java).
3. **Eclipse**:
    - Preconfigure los proyectos de Eclipse
    ```
    cd tools/java-tools && ../gradlew cleanEclipse eclipse
    ```
    - En Eclipse, 'Importar' - 'Proyectos existentes en el espacio de trabajo', seleccione las carpetas 'OsmAnd-java', 'OsmAndMapCreatorutilities', 'OsmAndMapCreator', 'OsmAndServer', 'OsmAndServerUtilties'.
    **Nota**: no seleccione la carpeta superior java-tools y, en su lugar, seleccione los proyectos especificados anteriormente.
4. **IntelliJ IDEA**
    - 'Archivo' > 'Nuevo' > 'Proyecto desde fuentes existentes...' y navegue hasta `java-tools`
    - Seleccione 'Importar proyecto desde modelo existente' y elija 'gradle' de la lista.
5. Clases principales para ejecutar desde el IDE:
   - net.osmand.MainUtilities - representa utilities.sh y conduce a todas las utilidades posibles.
   - net.osmand.obf.BinaryInspector - utilidad inspector.sh para leer archivos OBF y proporciona información sobre ellos.
   - net.osmand.obf.preparation.IndexCreator - atajo para generar un archivo obf.
   - net.osmand.swing.OsmExtractionUI - OsmAndMapCreator

## Compilar la biblioteca de renderizado nativo para OsmAndMapCreator {#compile-native-rendering-library-for-osmandmapcreator}
La biblioteca de renderizado nativo se puede utilizar para probar el renderizado sin conexión o el enrutamiento nativo sin conexión. Es muy útil para depurar y probar un estilo de renderizado o una configuración de enrutamiento.

1. Primero, configure el **entorno de desarrollo**, consulte [entorno de desarrollo](./setup-the-dev-environment).
2. Descargue las dependencias externas
 ```
 cd core-legacy/externals
 ./configure.sh
 ```
3. Especifique JAVA_HOME globalmente a través de $PATH o en la línea de comandos
  ```
  export JAVA_HOME=<>
  ```
4. Elija un [objetivo](https://github.com/osmandapp/OsmAnd-core/tree/legacy_core/targets) específico para el sistema operativo y compile una versión específica 'debug', 'release' o '' (predeterminada). Ejemplo
  ```
  cd core-legacy/targets
  ./intel-darwin.sh release # versión para macOS
  ./amd64-linux-clang.sh debug # depuración para Linux - predeterminado
  cd ....baked # como intel-darwin-intel-darwin-clang-release.baked o amd64-linux-amd64-clang-release.baked
  make -j4
  ```
5. Los binarios estarán disponibles en core-legacy/binaries/.
Ejemplo:
  ```
    core-legacy/binaries/darwin/intel/Debug/libosmand.dylib
  ```

### Solución de problemas {#troubleshooting}
- Faltan archivos externals/libjpeg-turbo/jconfigint.h.in no existe.
Si experimenta que libjpeg-turbo no pudo compilar
```
targets/.cmake/../../externals/skia/upstream.patched/third_party/externals/libjpeg-turbo/jconfigint.h.in no existe.
```
Puede encontrar los archivos aquí y colocarlos en la carpeta especificada
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfig.h
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfigint.h

## Compilar la versión del núcleo qt para OsmAndMapCreator {#compile-qt-core-version-for-osmandmapcreator}
1. Primero, configure el **[entorno de desarrollo](setup-the-dev-environment.md)**.
2. Prepare la compilación (cmake) para un objetivo específico. Ejemplo clang / linux:
```
   alias clang='clang -std=c++11'
   build/amd64-linux-clang.sh release
```
3. Compilar la versión de la biblioteca
```
    (cd "baked/amd64-linux-clang-release.make" && make -j4)
```