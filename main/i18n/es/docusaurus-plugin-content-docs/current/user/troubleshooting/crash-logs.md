---
source-hash: 1a33a1b4a2dedfaff07a0bf3e3e748f9060a255db1a4b2b9c0fb3d363a38cdf0
sidebar_position: 5
title: Registros de fallos
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Descripción general {#overview}

Los registros de fallos son herramientas de diagnóstico valiosas que ayudan a los desarrolladores a identificar y solucionar problemas y errores que causan que la aplicación se bloquee o se comporte de forma inesperada. Es posible compartir los registros de su dispositivo Android con el equipo de desarrollo de OsmAnd. Actualmente, los usuarios de iOS solo tienen una opción de registro de fallos para enviar.

## Registros de fallos y Logcat {#crash-and-logcat-logs}

OsmAnd le permite enviar dos tipos de datos a los desarrolladores:

- **Registros de fallos**. Se generan cuando la aplicación OsmAnd encuentra un error crítico o una excepción que provoca su bloqueo. Estos registros proporcionan información detallada sobre el estado de la aplicación durante el fallo, incluidos los datos de compilación, los seguimientos de pila, los mensajes de error y otros detalles relevantes.
- **Registros de Logcat**. Un registro del flujo de registro de OsmAnd que captura varios eventos y mensajes. Estos registros ayudan a los desarrolladores a monitorear el comportamiento de la aplicación, rastrear el flujo de ejecución, rastrear acciones específicas e investigar problemas no relacionados con fallos. Los registros de Logcat suelen contener registros de actividad desde la última vez que se inició la aplicación.

:::caution Su información privada
Tenga cuidado al enviar registros de logcat, ya que pueden contener información privada como la ubicación del dispositivo, las consultas de búsqueda, los resultados de la creación de rutas y los datos de navegación.
:::

### Enviar registros desde la aplicación OsmAnd (Android) {#send-logs-from-osmand-app-android}

1. Vaya a *<Translate android="true" ids="shared_string_menu,shared_string_help,send_crash_log"/> (<Translate android="true" ids="send_logcat_log"/>)*. Dependiendo de su situación, seleccione el tipo de registro apropiado. Puede consultar la sección [Registros de fallos y Logcat](#crash-and-logcat-logs) para obtener detalles sobre las diferencias entre los tipos de registro.
2. En el menú emergente, elija Gmail o su aplicación de correo electrónico preferida. El correo electrónico se generará automáticamente.
3. Toque el botón *Enviar*.

![Enviar registros de fallos desde Android 1](@site/static/img/troubleshooting/send_logs_andr_5.png) ![Enviar registros de fallos desde Android 2](@site/static/img/troubleshooting/send_logs_andr_2.png)

### Enviar registros desde dispositivos iOS {#send-logs-from-ios-devices}

1. Los registros de dispositivos iOS se pueden enviar:

    - Automáticamente.
        - Navegue a la aplicación OsmAnd *<Translate ios="true" ids="shared_string_menu,shared_string_help,report_an_issues"/> (<Translate ios="true" ids="send_log"/>)*.
        - Luego, usando su aplicación de correo electrónico, le recomendamos enviar los registros a `crash@osmand.net`.

    - Manualmente.
        - Navegue a la aplicación del sistema iOS *Archivos → En mi iPhone (o En mi iPad) → Mapas de OsmAnd → Registros*.

    ![Enviar registros de fallos iOS 1](@site/static/img/troubleshooting/send_logs_ios_1.png) ![Enviar registros de fallos iOS 2](@site/static/img/troubleshooting/send_logs_ios_2.png)

2. Enviar [formato IPS](https://docs.fileformat.com/misc/ips/#formats-for-ios-analytics-data) de registros y datos de autorización:
    - Vaya a *Ajustes de iOS → Análisis → Datos de análisis → Archivo de formato ips de Mapas de OsmAnd* (hasta iOS 17).
    - *Ajustes de iOS → Privacidad y seguridad → Análisis y mejoras → Datos de análisis → Archivo de formato ips de Mapas de OsmAnd* (a partir de iOS 18).
    - Luego, usando su aplicación de correo electrónico, le recomendamos enviar los registros a `crash@osmand.net`.

    ![Enviar registros de fallos iOS 1](@site/static/img/troubleshooting/send_log_ios.png) ![Enviar registros de fallos iOS 2](@site/static/img/troubleshooting/log_1_ios.png)

## Enviar archivos Tombstone (Android) {#send-tombstone-files-android}

:::caution Crucial
¡Solo para usuarios avanzados!
:::

En ciertos casos complejos o inusuales, pueden ser necesarios los *[archivos Tombstone](https://source.android.com/docs/core/tests/debug)*. Estos archivos proporcionan seguimientos de pila detallados para todos los hilos en un proceso que falla (no solo el que causó el error), un mapa de memoria completo y una lista de todos los descriptores de archivo abiertos. Los archivos Tombstone son vitales para depurar y diagnosticar problemas relacionados con el código nativo en la plataforma Android.

### Usando su dispositivo {#using-your-device}

Para exportar archivos tombstone, debe generar un informe de errores utilizando la configuración del sistema Android:

1. Habilite las *Opciones de desarrollador* (esta pantalla está oculta por defecto).
    - Vaya a *Ajustes → Acerca del teléfono → Información del software* (esta ruta es válida para dispositivos Samsung).
    - Toque *Número de compilación* siete veces hasta que una ventana emergente confirme que el modo de desarrollador está activo.

2. Vaya a *Opciones de desarrollador*, generalmente ubicadas en la parte inferior de la lista de ajustes. También puede usar la función de búsqueda.
    - Toque la opción *Tomar informe de errores*.
    - Seleccione el tipo de informe de errores y toque *Informar*.

Una vez que el informe de errores esté listo, recibirá una notificación. Toque el cuadro de notificación para descargar el informe a su dispositivo. Descomprima el archivo y envíe los archivos tombstone al equipo de desarrolladores de OsmAnd (correo electrónico: `crash@osmand.net`).

![Enviar registros de fallos desde Android 3](@site/static/img/troubleshooting/send_logs_andr_3.png) ![Enviar registros de fallos desde Android 4](@site/static/img/troubleshooting/send_logs_andr_4.png)

:::note
Tenga en cuenta que los informes de errores pueden contener datos privados, incluido el uso de la aplicación o la ubicación.
:::

### Usando ADB {#using-adb}

El Android Debugging Bridge (ADB) es una herramienta de línea de comandos que permite a los desarrolladores depurar sus aplicaciones. Para usar ADB para exportar archivos tombstone, primero deberá descargarlo e instalarlo. Siga las instrucciones proporcionadas en el [sitio oficial para desarrolladores de Android](https://developer.android.com/tools/releases/platform-tools).

#### Prepare su dispositivo {#prepare-your-device}

Asegúrese de que las *Opciones de desarrollador* estén habilitadas (esta pantalla está oculta por defecto) y la *depuración USB* esté activada:

- Navegue a *Ajustes → Acerca del teléfono → Información del software*.
- Toque *Número de compilación* siete veces hasta que una ventana emergente confirme que el modo de desarrollador está activo.
- En las *Opciones de desarrollador*, habilite la *depuración USB*.

Luego, conecte su dispositivo a su estación de trabajo a través de USB. Si es la primera vez que se conecta, aparecerá una ventana emergente pidiendo permiso para permitir la depuración.

#### Generar informe de errores {#generate-bug-report}

1. Abra una terminal de línea de comandos. En Mac o Linux, use la aplicación *Terminal*, y en Windows, use la *Línea de comandos*.
2. Navegue a la carpeta de herramientas de la plataforma donde se encuentra ADB usando el comando *cd* (por ejemplo, 'cd /Users/Username/Downloads/Tools').
3. Genere el informe de errores:
   - En Mac: ```adb bugreport```
   - En Windows: ```adb.exe bugreport```
4. Espere unos minutos para que se genere el informe. El archivo resultante se guardará en la carpeta de herramientas de la plataforma.
5. Descomprima el archivo.
6. Busque la carpeta *tombstones* con archivos como *tombstone_00*, *tombstone_01* y similares.
7. Envíe los archivos tombstone a `crash@osmand.net`.

<!--
* Open the terminal and call the command:
```adb bugreport ./output.zip```
where output.zip is the name of the result file

* Unzip the result file:
```unzip file.zip -d destination_folder```

* Find tombstones folder:
```cd FS/data/tombstones```
Where you find files like  -->

### Usando dispositivos rooteados o el emulador de Android Studio {#using-rooted-devices-or-android-studio-emulator}

- Con acceso root a su dispositivo, puede abrir directamente la carpeta */data/tombstones*.

- En Android Studio, use el emulador para navegar al *Explorador de archivos del dispositivo* y encontrar la carpeta /data/tombstones. Dentro, encontrará archivos con nombres como *tombstone_00*, *tombstone_01* y otros. Descargue estos archivos y envíelos a `crash@osmand.net`.

Para obtener más detalles sobre los informes de errores, consulte la [documentación de Android](https://developer.android.com/studio/debug/bug-report).