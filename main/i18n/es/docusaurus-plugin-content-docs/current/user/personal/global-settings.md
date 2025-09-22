---
source-hash: e0b9c6c498f2c53828251f254bb330363192ffddb65ff4939e882c99b223b771
sidebar_position: 3
title:  Ajustes globales
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';




## Resumen {#overview}

Los **Ajustes globales** son los [ajustes](../personal/profiles.md) generales para todos los perfiles en la aplicación OsmAnd. Estos son los ajustes básicos para el sistema OsmAnd, y cualquier cambio realizado afectará a toda la aplicación.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Ajustes generales de perfiles Android](@site/static/img/personal/profiles/global_sett_1_andr.png)  ![Ajustes generales de perfiles Android](@site/static/img/personal/profiles/global_sett_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Ajustes generales de perfiles iOS](@site/static/img/personal/profiles/general_settings_1_ios.png)

</TabItem>

</Tabs>


## General {#general}

Esta sección contiene los ajustes básicos de OsmAnd, como la selección de un [perfil](#default-profile) al cargar la aplicación, la selección del [motor de renderizado](#map-rendering-engine) y la [carpeta](#data-storage-folder) donde se guardarán los datos.  


### Perfil predeterminado {#default-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes generales Perfil predeterminado Android](@site/static/img/personal/profiles/default_profile_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes generales Perfil predeterminado iOS](@site/static/img/personal/profiles/default_profile_ios.png)

</TabItem>

</Tabs>

OsmAnd utiliza el perfil predeterminado, *Explorar mapa*, como el primer perfil para nuevos usuarios, y si este perfil ha sido seleccionado por usted, se utilizará cada vez que se reinicie la aplicación. Puede seleccionar cualquier perfil de la lista predeterminada, incluyendo *Último usado* y *Explorar mapa*.

- **<Translate android="true" ids="shared_string_last_used"/>**. Permite seleccionar el perfil que se utilizó por última vez.
- **<Translate android="true" ids="settings_preset"/>**. Selecciona el perfil que se utilizará al iniciar OsmAnd. Se puede cambiar en los [ajustes](../personal/profiles.md) de la aplicación.  


### Perfil de CarPlay {#carplay-profile}

:::caution SOLO iOS
Esta función está disponible para la versión de iOS de la aplicación OsmAnd.
:::

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*  

![Ajustes generales Perfil predeterminado iOS](@site/static/img/personal/profiles/CarPlay_ios.png)  

El [**<Translate ios="true" ids="carplay_profile"/>**](../navigation/car-play.md) se utiliza cuando se conecta al [software CarPlay](https://support.apple.com/en-gb/HT205634) de su vehículo y le ayuda a aprovechar al máximo la versión optimizada de la aplicación OsmAnd utilizando los sistemas de audio y video para mostrar datos en su teléfono.


### Carpeta de almacenamiento de datos {#data-storage-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Ajustes de almacenamiento de perfiles Android](@site/static/img/personal/profiles/settings_data_storage_andr.png)  

1. **Memoria del dispositivo** muestra cuánto espacio libre queda en su dispositivo. Toque un campo para acceder al menú [*Mapas y Recursos*](../personal/maps-resources.md#maps--resources), donde puede ver y gestionar información detallada sobre sus datos de OsmAnd.

2. En **<Translate android="true" ids="change_data_storage_folder"/>**, puede seleccionar una carpeta para guardar los datos de OsmAnd en su dispositivo.  

    - *Memoria interna de la aplicación*. Solo la aplicación OsmAnd tiene acceso a sus datos y ninguna de las aplicaciones externas.
    - *Memoria compartida*. Ya no está disponible.
    - *Almacenamiento externo 1*. Solo 1 aplicación OsmAnd tiene acceso y las aplicaciones de administrador y USB.
    - *Almacenamiento multiusuario*. Solo 1 aplicación OsmAnd tiene acceso, pero se comparte entre múltiples usuarios de Android.
    - *Especificado manualmente*. Depende de la ruta.

:::note Android 12+ (cambiar carpeta de almacenamiento)
Se han implementado nuevas directrices de acceso al almacenamiento en las versiones 11-12 de Android. Consulte la sección [**Solución de problemas**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card) para obtener más detalles.
:::

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *Dispositivo iOS → Ajustes → General → Almacenamiento del iPhone → OsmAnd Maps*  

![Ajustes generales almacenamiento iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)  

Los archivos de OsmAnd son visibles en la aplicación [*Archivos*](https://apps.apple.com/us/app/files/id1232058109). Puede acceder a todos los archivos de OsmAnd: [tracks](../personal/tracks/manage-tracks.md), [favoritos](../personal/favorites.md), [mapas](../personal/maps-resources.md), [rendering.xml](../../technical/build-osmand/rendering.md), [routing.xmlustom](../../technical/build-osmand/routing.md). Para ello, siga la siguiente ruta:  

Ir a: *Archivos → En mi iPhone → OsmAnd Maps*

<!-- ![Files app iOS](@site/static/img/personal/storage/files_app_ios.png) ![Files app iOS](@site/static/img/personal/storage/files_app_1_ios.png)  -->

![Ajustes generales almacenamiento iOS](@site/static/img/personal/profiles/files-1.png) ![Ajustes generales almacenamiento iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### Motor de renderizado de mapas {#map-rendering-engine}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/> (Solo Android)*

![Ajustes generales motor de renderizado Android](@site/static/img/personal/global-settings/rendering_engine_andr.png)  

- En la versión de **Android** de la aplicación, puede cambiar entre el renderizado de mapas Versión 1, implementado originalmente en la aplicación OsmAnd, y la Versión 2, que utiliza la interfaz de programación OpenGL (Open Graphics Library) para renderizar objetos gráficos bidimensionales y tridimensionales.

- La versión de **iOS** utiliza solo OpenGL para el renderizado de mapas.


| Características | Versión 1 | Versión 2 (OpenGL) |
|:---|:--- |:--- |
| Multiplataforma | No se utiliza en la versión de iOS. | Se adapta a ambas versiones. |
| Dependiente de GPU / CPU | Recomendado para dispositivos de bajo rendimiento u obsoletos. | Potente motor de renderizado. <br /> Solo disponible para [OsmAnd 4.3](https://docs.osmand.net/blog/osmand-android-4-3-released) y versiones posteriores, y en modo de prueba para [OsmAnd 4.2](https://docs.osmand.net/blog/osmand-android-4-2-released). |
| Modo 3D | Es posible ver el mapa en 2D, y puede cambiar el ángulo de visión para obtener una [vista 3D](../widgets/map-buttons.md#3d-mode). | Puede ver el mapa en 2D y [3D](../widgets/map-buttons.md#3d-mode). |
| Visualización del mapa | Todo el mapa se renderiza como un conjunto de teselas, y los marcadores, líneas y texto ya están dentro de estas teselas. | Primero, se renderiza todo el paquete de teselas, y luego los símbolos disponibles se aplican al mapa, [capa por capa](../../technical/algorithms/map-rendering-layers.md). |
| Superposición / subyacencia de símbolos transparentes | Admite todos los ajustes. | No admite una capa ráster sobre texto vectorial. |
| [Terreno 3D](../map/raster-maps.md#3d-relief) | No compatible. | Esta función visualiza el terreno en el mapa añadiendo información de elevación a un mapa 2D normal, lo que crea un efecto 3D y de profundidad. |
| [Tracks 3D](../map/tracks/appearance.md) | No compatible. | Esta función le permite mostrar tracks por altitud sobre el nivel del mar. |
| [Mapa en línea](../plugins/online-map.md) | No admite la visualización de curvas de nivel si la fuente del mapa es cualquier mapa de teselas en línea. | Cuando la fuente del mapa es un mapa en línea, también se utilizan mapas 3D y se admite la visualización de curvas de nivel en el mapa. |
| [Complemento del tiempo](../plugins/weather.md) | No puede utilizar este complemento. | Cómodo de usar con el complemento. |  

La imagen para la vista 3D del mapa se carga tesela por tesela, y luego todos los símbolos. La velocidad de renderizado del mapa depende del número de objetos gráficos 2D y 3D que contenga, y directamente del rendimiento de su hardware. Por lo tanto, la Versión 2 (OpenGL) no se puede utilizar en dispositivos de bajo rendimiento.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_1_andr.png').default} alt="renderizado"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_2_andr.png').default} alt="renderizado"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_3_andr.png').default} alt="renderizado"/></td>
    </tr>
</table>


## Privacidad y Seguridad {#privacy-and-security}

OsmAnd le permite elegir si desea *[compartir su actividad en la aplicación](#analytics)* e [identificadores](#identifiers) (*solo Android*) en la aplicación, la capacidad de editar su *[historial](#history)* y usar un *[proxy](#proxy)* (*solo Android*) de su elección.  

:::note
Puede encontrar más información en la [*Política de privacidad y seguridad de OsmAnd*](../../legal/privacy-policy.md)
:::

### Analíticas {#analytics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*  

![Ajustes generales Analíticas Android](@site/static/img/personal/profiles/general_settings_analitics_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,send_anonymous_data"/>*

![Ajustes generales Enviar datos anónimos iOS](@site/static/img/personal/profiles/general_settings_send_anonymous_data_ios.png)

</TabItem>

</Tabs>

El ajuste **<Translate android="true" ids="analytics_pref_title"/>** (*Android*) o **<Translate ios="true" ids="send_anonymous_data"/>** (*iOS*) le permite elegir si desea proporcionar datos anónimos sobre *Mapas descargados* y *Pantallas visitadas* (*Android*).  

:::note
No se recopilan datos sobre su ubicación o los lugares que ve en el mapa.
:::  

### Identificadores {#identifiers}

<InfoAndroidOnly />

*Menú → Ajustes → Ajustes de OsmAnd → Privacidad y seguridad → Identificadores*  

![UUID Android](@site/static/img/personal/profiles/uuid_android.png)  

Se genera un **UUID** (*Identificador Único de Usuario*) para cada instalación de la aplicación OsmAnd y se envía a los servidores durante la carga del mapa.

- Se utiliza un UUID aleatorio para descargar mapas sin conexión desde los servidores de OsmAnd para controlar el uso racional de los recursos del servidor, predecir el uso del tráfico y proporcionar informes mensuales generales sobre las descargas de mapas.
- El UUID cambia cada 3 meses.  
- A partir de la versión 4.3 de OsmAnd, puede desactivar la recopilación de datos de usuario al usar la aplicación OsmAnd. Entonces, el UUID no se enviará con ninguna solicitud de descarga.  
- Puede leer más información en los [Términos de uso (ToS)](../../legal/terms-of-use.md#6-unique-user-indentifier).


### Historial {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Ajustes generales Historial Android](@site/static/img/personal/profiles/general_settings_history_android.png) ![Ajustes generales Historial Android](@site/static/img/personal/profiles/general_settings_history_android_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Ajustes generales Historial iOS](@site/static/img/personal/profiles/history_settings_ios.png) ![Ajustes generales Historial iOS](@site/static/img/personal/profiles/history_settings_ios_4.png)  

</TabItem>

</Tabs>  

La aplicación registra el historial de datos introducidos previamente (historial) en las siguientes categorías: [Búsqueda](../search/search-history.md), [Navegación](../navigation/setup/route-navigation.md#history-of-previous-routes), [Marcadores de mapa](../personal/markers.md#history). Usando el interruptor en la pestaña apropiada, puede *Activar / Desactivar* el registro para ciertas categorías de entradas. También puede [gestionar](#history) (ver, eliminar y compartir) los datos registrados previamente.  

- ***Copia de seguridad como archivo*** (*Android*) o ***Exportar*** (*iOS*) se utiliza para hacer [un archivo de copia de seguridad](../personal/import-export.md#export) de su historial.
- ***Borrar todo el historial*** (*Android*) o ***Eliminar todo el historial*** (*iOS*) se utiliza para eliminar todas las entradas del historial registradas hasta el momento de la eliminación.

<br/>

**Compartir y eliminar historial.**

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes generales Historial Android](@site/static/img/personal/profiles/general_settings_history_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ajustes generales Historial iOS](@site/static/img/personal/profiles/history_settings_ios_2.png) ![Ajustes generales Historial iOS](@site/static/img/personal/profiles/history_settings_ios_3.png)

</TabItem>

</Tabs>

- Puede eliminar uno o más elementos de la lista del historial o compartirlos como un archivo (para acceder a estas funciones *en iOS*, toque el botón ***Editar***).  
- Para eliminar o exportar varios registros simultáneamente, seleccione las casillas de verificación junto a los registros requeridos y toque los botones **Exportar** o **Eliminar**.  


### Proxy {#proxy}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*  

![Ajustes generales Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)

El ajuste **<Translate android="true" ids="proxy_pref_title"/>** le permite configurar un [proxy HTTP](https://en.wikipedia.org/wiki/Proxy_server) para todas las solicitudes de red. Puede establecer el *Host del proxy* y el *Puerto del proxy*.  


## Otros {#other}

En esta sección de los ajustes de OsmAnd, puede configurar las notificaciones que recibe, el servicio de ubicación y cómo se guardan los ajustes de su aplicación.

### Diálogos y notificaciones {#dialogs-and-notifications}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes generales notificaciones Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes generales Diálogos iOS](@site/static/img/personal/profiles/general_settings_dialogs_2_ios.png)  

</TabItem>

</Tabs>

El ajuste **<Translate android="true" ids="dialogs_and_notifications_title"/>** le permite activar/desactivar ventanas emergentes, diálogos y notificaciones.  

- *Mensaje de inicio* incluye promociones, cuestionarios, eventos y más.
- *<Translate ios="true" ids="do_not_show_discount"/>* (*iOS*) suprime la visualización de descuentos de la aplicación y mensajes de eventos locales especiales.
- El [*Diálogo de descarga de mapa*](../start-with/download-maps.md#download) le informa que se pueden descargar mapas específicos.


### Fuente de ubicación {#location-source}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />* (*Solo Android*)

![Copia de seguridad automática](@site/static/img/personal/profiles/location_source_andr.png)

OsmAnd le ofrece una selección de servicios para determinar su ubicación. Se recomienda que lea más información sobre el [Permiso de ubicación](../start-with/first-steps.md#permission-to-access-the-location) y la [Solución de problemas](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) para esta sección.

***Android***:

- Puede elegir qué servicios de *Google Play* o *API de Android* utilizará OsmAnd para determinar su ubicación. Esto puede ser útil para dispositivos sin *Servicios de Google Play* o en caso de datos de ubicación o altitud inexactos al grabar tracks.
- OsmAnd recibe datos de los recursos *Proveedores de ubicación fusionada de Google* y *Proveedores de GPS y red de Android*. Puede cambiar **<Translate android="true" id="location_source" />** en: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />*.

***iOS***:

- El sistema iOS utiliza la *API de iOS* para determinar la ubicación.  
- Todos los ajustes de Ubicación de OsmAnd se pueden encontrar en los ajustes del dispositivo iOS: *Ajustes → OsmAnd Maps → Ubicación*  
- Privacidad de los servicios de ubicación: *Ajustes → Privacidad → Servicios de ubicación*


### Copia de seguridad automática {#auto-backup}

<InfoAndroidOnly />

![Ajustes generales notificaciones Android](@site/static/img/personal/profiles/auto_backup_2_andr.png)

- Android u OsmAnd Cloud pueden guardar sus datos y los ajustes de la aplicación.

- Por defecto, sus *Ajustes de OsmAnd* y los marcadores de mapa de [*Favoritos*](../personal/favorites.md#automatic-favorites-backup) se respaldan automáticamente por el sistema Android. Esto le permite restaurarlos en nuevos dispositivos o después de reinstalar la aplicación.

- Tenga en cuenta que el tamaño de la copia de seguridad está restringido a *25MB*.

- Para encontrar los archivos de copia de seguridad, utilice una aplicación de gestión de archivos de terceros.  
    *NOTA: Puede encontrar los archivos de copia de seguridad utilizando el gestor de archivos de Android: Android → data → net.osmand → files → backup, pero tenga en cuenta que en las versiones recientes de Android, el acceso a los directorios del sistema está limitado.*  

**Si está utilizando [*OsmAnd Cloud*](../personal/osmand-cloud.md), se recomienda desactivar esta opción de copia de seguridad predeterminada para evitar cualquier confusión durante la reinstalación.**


## Legal {#legal}

OsmAnd puede [advertirle sobre radares de tráfico](../navigation/guidance/navigation-settings.md#screen-alerts), pero solo si las leyes de su país lo permiten.


### Desinstalar radares de tráfico {#uninstall-speed-cameras}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![Ajustes generales Cámaras Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_andr.png)   ![Ajustes generales Cámaras Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![Ajustes generales Cámaras iOS](@site/static/img/personal/profiles/uninstall_speed_camera_1_ios.png)   ![Ajustes generales Cámaras iOS](@site/static/img/personal/profiles/uninstall_speed_camera_2_ios.png)

</TabItem>

</Tabs>

Este ajuste le permite activar o desactivar los PDI con radares de tráfico, necesita reiniciar la aplicación OsmAnd para que los cambios surtan efecto.
  
En algunos países o regiones, el uso de aplicaciones de advertencia de radares de tráfico es ilegal. Debe hacer una elección dependiendo de las leyes de su país. Seleccione **Mantener activo**, y recibirá alertas y notificaciones de radares de tráfico. Seleccione **Desinstalar** y todos los datos relacionados con los radares de tráfico, como advertencias, notificaciones y PDI, se eliminarán hasta que reinstale completamente OsmAnd.  

Lea sobre las alertas de radares de tráfico en su ruta en el artículo Widgets de navegación en la sección *[Widget de alertas](../widgets/nav-widgets.md#alert-widget)*.


## Artículos relacionados {#related-articles}

- [Perfiles (Ajustes)](./profiles.md)
- [Importar / Exportar](../personal/import-export.md)
- [Esquemas de paleta de colores](../personal/color-palette-schemes.md)

### Solución de problemas {#troubleshooting}

- **Android 12+ (cambiar carpeta de almacenamiento)**. Se han implementado nuevas directrices de acceso al almacenamiento en las versiones 11-12 de Android. Estos cambios afectan particularmente al almacenamiento de mapas en tarjetas SD, lo que resulta en un rendimiento de acceso a archivos significativamente más lento y limitaciones de acceso más estrictas a las carpetas de la tarjeta SD en Android 11 y 12. Para saber cómo resolver este problema, consulte la sección [**Solución de problemas**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).

- **Fuente de ubicación para problemas de altitud**. Google Play ha cambiado su política y, para cumplirla, OsmAnd, a partir de la versión 3.9, debe usar los Servicios de Google Play para obtener correcciones de ubicación mientras se ejecuta en segundo plano. Lea más información en la sección [Solución de problemas](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services).