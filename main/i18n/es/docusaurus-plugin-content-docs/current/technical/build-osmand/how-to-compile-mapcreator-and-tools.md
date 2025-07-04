---
source-hash: d4fdeaa3f3d1430002a0e679e72ccee20fec335cb9d13974b60c5cadd82a094e
sidebar_position: 7
---

# Cómo compilar OsmAndMapCreator y herramientas {#how-to-compile-osmandmapcreator-and-tools}


## Compilar OsmAndMapCreator {#compile-osmandmapcreator}
1. Primero, configura el **[entorno de desarrollo](setup-the-dev-environment.md)**.
2. **Gradle** (línea de comandos):
    - Compila con la línea de comandos
    ```
    cd tools/java-tools && ../gradlew build
    ```
    - Se producirá OsmAndMapCreator.zip con todos los scripts dentro.
    **Nota**: se requiere un proyecto de Android para construir las herramientas (utiliza el proyecto OsmAnd-java).
3. **Eclipse**:
    - Preconfigura los proyectos de Eclipse
    ```
    cd tools/java-tools && ../gradlew cleanEclipse eclipse
    ```
    - En Eclipse, 'Importar' - 'Proyectos existentes en el espacio de trabajo', selecciona las carpetas 'OsmAnd-java', 'OsmAndMapCreatorutilities', 'OsmAndMapCreator', 'OsmAndServer', 'OsmAndServerUtilties'.
    **Nota**: no selecciones la carpeta superior java-tools y, en su lugar, selecciona los proyectos especificados anteriormente.
4. Android Studio / Idea
    No dudes en hacer una solicitud de extracción a esta documentación y describir cómo se podría hacer.
5. Clases principales para ejecutar desde el IDE:
   - net.osmand.MainUtilities - representa utilities.sh y conduce a todas las utilidades posibles.
   - net.osmand.obf.BinaryInspector - utilidad inspector.sh para leer archivos OBF y proporciona información sobre ellos.
   - net.osmand.obf.preparation.IndexCreator - atajo para generar un archivo obf.
   - net.osmand.swing.OsmExtractionUI - OsmAndMapCreator

## Compilar la biblioteca de renderizado nativo para OsmAndMapCreator {#compile-native-rendering-library-for-osmandmapcreator}
La biblioteca de renderizado nativo se puede usar para probar el renderizado sin conexión o el enrutamiento nativo sin conexión. Es muy útil para depurar y probar un estilo de renderizado o una configuración de enrutamiento.

1. Primero, configura el **entorno de desarrollo**, consulta [entorno de desarrollo](./setup-the-dev-environment).
2. Descarga las dependencias externas
 ```
 cd core-legacy/externals
 ./configure.sh
 ```
3. Especifica JAVA_HOME globalmente a través de $PATH o en la línea de comandos
  ```
  export JAVA_HOME=<>
  ```
4. Elige un [objetivo](https://github.com/osmandapp/OsmAnd-core/tree/legacy_core/targets) específico para el SO y compila una versión específica 'debug', 'release' o '' (predeterminado). Ejemplo
  ```
  cd core-legacy/targets
  ./intel-darwin.sh release # macOs release
  ./amd64-linux-clang.sh debug # linux debug - default
  cd ....baked # like intel-darwin-intel-darwin-clang-release.baked or amd64-linux-amd64-clang-release.baked
  make -j4
  ```
5. Los binarios estarán disponibles en core-legacy/binaries/.
Ejemplo:
  ```
    core-legacy/binaries/darwin/intel/Debug/libosmand.dylib
  ```

### Solución de problemas {#troubleshooting}
- Faltan archivos externals/libjpeg-turbo/jconfigint.h.in no existe.
Si experimentas que libjpeg-turbo no pudo compilar
```
targets/.cmake/../../externals/skia/upstream.patched/third_party/externals/libjpeg-turbo/jconfigint.h.in does not exist.
```
Puedes encontrar los archivos aquí y ponerlos en la carpeta especificada
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfig.h
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfigint.h

## Compilar la versión del núcleo de Qt para OsmAndMapCreator {#compile-qt-core-version-for-osmandmapcreator}
1. Primero, configura el **[entorno de desarrollo](setup-the-dev-environment.md)**.
2. Prepara la compilación (cmake) para un objetivo específico. Ejemplo clang / linux:
```
   alias clang='clang -std=c++11'
   build/amd64-linux-clang.sh release
```
3. Compilar la versión de la biblioteca
```
    (cd "baked/amd64-linux-clang-release.make" && make -j4)
```