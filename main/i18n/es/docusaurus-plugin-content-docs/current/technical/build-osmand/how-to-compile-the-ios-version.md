---
source-hash: 8cfaeb188adf8c1a24d710a5caef6a5cc4eb8a7611ebe74b7f246a1173d8bdbb
sidebar_position: 6
---

# Cómo compilar la versión de iOS {#how-to-compile-the-ios-version}

1. Primero, configure el **[entorno de desarrollo](setup-the-dev-environment.md)**.
2. Instale Xcode desde AppStore (última versión probada 14.2)
3. Instale las herramientas de línea de comandos de Xcode
  ```
  $ xcode-select --install
  ```
  O en caso de errores, intente descargarlo e instalarlo desde: [sitio de Apple](https://developer.apple.com/download/all/?q=xcode>).

4. Inicie sesión en la cuenta de Xcode (opcional)
  En caso de que no tenga una cuenta de desarrollador de Apple. Abra Xcode y vaya a preferencias (a través del menú superior)
  ```
  Preferencias -> Cuentas
  ```
  Presione el botón `+`. Puede iniciar sesión con su AppleID (nombre de usuario y contraseña de sus dispositivos iOS/macOS). Siga las instrucciones de Xcode.
  Para los miembros del equipo de OsmAnd: envíe su nombre de usuario de AppleID para que se le agregue a la lista de desarrolladores. Cuando reciba un correo electrónico con el mensaje de invitación, actívelo.
  Cierre Xcode.

5. Instale las herramientas de línea de comandos: cmake, svn, cocoapods
  ```
  $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  # para intel
  $ echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/usr/local/bin/brew shellenv)"

  # para m1
  $ echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/opt/homebrew/bin/brew shellenv)"

  $ brew install svn
  $ brew install cmake # probado en 3.25.2, 3.19, 3.11

  # para intel
  $ sudo gem install cocoapods

  # para m1
  $ brew install cocoapods
  ```
6. Descargue e instale Java jdk 17
  ```
  # para intel
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-x64_bin.dmg

  # para m1
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-aarch64_bin.dmg
  ```

7. Cree un nuevo archivo de texto. O actualícelo si existe.
  ```
  $ mkdir ~/.gradle
  $ nano ~/.gradle/gradle.properties
  ```

  Pegue este contenido en él. Guarde el archivo y reinicie la computadora.

```
## Configuración de Gradle en todo el proyecto. {#project-wide-gradle-settings}
#
# Para más detalles sobre cómo configurar su entorno de compilación, visite {#for-more-details-on-how-to-configure-your-build-environment-visit}
# http://www.gradle.org/docs/current/userguide/build_environment.html {#httpwwwgradleorgdocscurrentuserguidebuildenvironmenthtml}
#
# Especifica los argumentos de la JVM utilizados para el proceso demonio. {#specifies-the-jvm-arguments-used-for-the-daemon-process}
# La configuración es particularmente útil para ajustar la configuración de memoria. {#the-setting-is-particularly-useful-for-tweaking-memory-settings}
# Valor predeterminado: -Xmx10248m -XX:MaxMetaspaceSize=256m {#default-value--xmx10248m--xxmaxmetaspacesize256m}
# org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8 {#orggradlejvmargs-xmx2048m--xxmaxmetaspacesize512m--xxheapdumponoutofmemoryerror--dfileencodingutf-8}

org.gradle.daemon=true

org.gradle.jvmargs=-Xmx4096m -XX:MaxMetaspaceSize=2048m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8

#
# Cuando se configura, Gradle se ejecutará en modo paralelo incubador. {#when-configured-gradle-will-run-in-incubating-parallel-mode}
# Esta opción solo debe usarse con proyectos desacoplados. Más detalles, visite {#this-option-should-only-be-used-with-decoupled-projects-more-details-visit}
# http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects {#httpwwwgradleorgdocscurrentuserguidemultiprojectbuildshtmlsecdecoupledprojects}

org.gradle.parallel=true
org.gradle.caching=true

#Vie Abr 08 18:47:31 EEST 2016
# android.useDeprecatedNdk=true {#androidusedeprecatedndktrue}
```

8. Ejecute `prepare.sh` para compilar la biblioteca Qt y descargar dependencias externas
  ```
  $ cd ios
  $ ./prepare.sh
  ```

  Error: `Xcode no está configurado correctamente. Es posible que deba confirmar la licencia...`.
  Solución: cambie XcodeCommandLineTools a la aplicación Xcode, confirme la licencia y vuelva a cambiarla.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  $ sudo xcodebuild -license accept
  $ sudo xcode-select --switch /Library/Developer/CommandLineTools
  ```

  Solución 2: compruebe si xcrun está disponible: ``` /usr/bin/xcrun -find xcrun ```. Si obtiene: ``` xcrun: error: no se pudo encontrar la utilidad "xcrun", no es una herramienta de desarrollador o no está en PATH ```. Entonces abra Xcode > Preferencias > Ubicaciones y en el campo "Herramientas de línea de comandos" seleccione sus herramientas de línea de comandos "Xcode XX.X" y ejecute `$ ./prepare.sh` nuevamente.

  Solución 3: Error: `Error de CMake ... iphoneos no es un SDK de iOS`.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  ```

  Solución 4: Si obtiene un error como este: ``` CMake Error at CMakeLists.txt:1 (cmake_minimum_required): Se requiere CMake 3.21.2 o superior. Está ejecutando la versión 3.11.2 ```. Entonces descargue el instalador dmg del sitio web de CMake y realice la instalación manual. Y ejecute `$ ./prepare.sh` nuevamente.
  ```
  https://cmake.org/download/
  ```

  Solución 5: Si obtiene un error como este: ```Failed to configure 'qtbase-ios' for 'ios.simulator.clang.static', aborting...```. Vaya a la carpeta ```core/external/qtbase-ios/``` y elimine todas las carpetas que comienzan con ```upstream```. Y ejecute `$ ./prepare.sh` nuevamente.


9. Abra `osmand.xcworkspace` en Xcode

10. Primera compilación.
  Establezca el objetivo de compilación en `OsmAnd Maps`. (Cerca de los botones de reproducir/detener). Seleccione como objetivo su dispositivo o uno de los simuladores de iOS. Pero no use el predeterminado 'Cualquier dispositivo iOS (arm64)'. Compile el proyecto (botón de reproducir).

11. Destinos de XCode y Sandbox

 - Use "Mi Mac (diseñado para iPad)" para el desarrollo diario (mejor rendimiento)
 - Use destinos de iPhone/iPad para el desarrollo de UI/UX (lento en procesadores M)

 - MacOS podría pedirle que inicie sesión con su ID de Apple cuando OsmAnd esté en funcionamiento
 - Use su cuenta de Sandbox como ID de Apple para evitar solicitudes de inicio de sesión repetidas
 - Use OsmAnd Cloud con su suscripción promocional para obtener mapas ilimitados

 - Pida a su líder de equipo las cuentas de Sandbox y las suscripciones promocionales

## Solución de problemas {#troubleshooting}
### Limpieza de archivos temporales. {#cleaning-temp-files}
  - En caso de errores de compilación, puede presionar en Xcode: ```Producto -> Limpiar carpeta de compilación```
  - Cierre Xcode.
  - Elimine las carpetas `baked` y `binaries` en el directorio `OsmAnd` (si ya existe).
  - Vaya a la carpeta ```core/external/qtbase-ios/``` y elimine todas las carpetas que comienzan con ```upstream```.
  - Elimine la carpeta Xcode DerivedData: ``` rm -rf ~/Library/Developer/Xcode/DerivedData ```
  - Verifique que todos los repositorios estén actualizados y en las ramas correctas.
  - Reinicie su computadora. (Sí, puede ayudar).
  - Luego ejecute `$ ./prepare.sh`
  - Abra XCode e intente compilar el proyecto nuevamente.

### Mac M1 {#m1-mac}
  - En caso de ```ld: library not found for -lOsmAndCore_static_standalone```:
  - Navegador de proyectos -> OsmAnd_projects -> OsmAnd_projects (en la lista de Proyectos/Objetivos) -> Configuración de compilación -> Todo -> Arquitecturas -> Arquitecturas excluidas -> Depuración
  - Agregue un campo de cadena de tipo ```Cualquier SDK de simulador de IOS``` con el valor ```arm64```. (deberá agregarlo después de cada ejecución de prepare.sh)
  - Compile el proyecto. En caso de errores, siga todas las instrucciones de ```11. Solución de problemas - limpieza de archivos temporales.``` y ```prepare.sh``` una vez más.

## Complemento de depuración de Kotlin (opcional) {#kotlin-debug-addon-optional}
```
$ brew install xcode-kotlin
$ xcode-kotlin install
$ xcode-kotlin sync
```

Consulte la sección Archivo de inicialización de LLDB para finalizar la configuración de depuración de Kotlin.

## Complemento de depuración de Qt (opcional). Si desea ver los valores de Qt en modo de depuración, ejecute esto: {#qt-debug-addon-optional-if-you-want-to-see-qt-values-in-debug-mode-run-this}
```
$ mkdir -p ~/qtlldb
$ git clone https://github.com/gbooker/lldb-qt-formatters ~/qtlldb
$ touch  ~/.lldbinit-Xcode
$ echo "" >> ~/.lldbinit-Xcode
$ echo "command script import ~/qtlldb/both.py" >> ~/.lldbinit-Xcode
```

## Archivo de inicialización de LLDB (opcional) {#lldb-init-file-optional}
XCode 16+ no carga `~/.lldbinit-Xcode` automáticamente, así que configúrelo manualmente usando el menú `Producto - Esquema - Editar esquema - Ejecutar - Archivo de inicialización de LLDB`.

Después de configurar estos parámetros, reinicie su computadora.