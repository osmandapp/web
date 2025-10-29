---
source-hash: 22db732c5f66852486fa2129937bfba2c697d211dccbcef555621bf176facb12
sidebar_position: 1
title:  Primeros Pasos
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Resumen {#overview}

¡Bienvenido a OsmAnd (OpenStreetMap Automated Navigation Directions)!  

Explore cómo descargar mapas, cómo configurar la aplicación, cómo usar el mapa y crear una ruta, cómo iniciar la navegación y cómo buscar puntos de interés. Familiarícese con los puntos clave de la política de privacidad de OsmAnd y los permisos requeridos.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navegación sin conexión Android](@site/static/img/settings/google_play_screen1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navegación sin conexión iOS](@site/static/img/settings/itunes_screen_ios.png)

</TabItem>

</Tabs>


## Instalar OsmAnd {#install-osmand}

OsmAnd es una aplicación móvil de Mapas y Navegación disponible para **Android** e **iOS**. Puede descargarla desde las tiendas de aplicaciones más populares.

**Tiendas de Android**: [Google play store](https://play.google.com/store/apps/details?id=net.osmand) y [Huawei AppGallery](https://appgallery.huawei.com/#/app/C101486545).

<AndroidStore/>

**iOS**: [App store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257).

<AppleStore/>

[Leer más](../purchases/index.md) sobre las versiones y compras de OsmAnd.  


## Bienvenido a OsmAnd {#welcome-to-osmand}

Nuestro objetivo es crear una aplicación orientada a mapas totalmente funcional que pueda utilizarse para diversos fines con y sin conexión. La aplicación tiene muchas funciones, por lo que no tendrá que cambiar entre diferentes aplicaciones, y todo estará al alcance de su mano.

- Ver un mapa mundial con gran detalle mostrado en [diferentes estilos de mapa](../map/vector-maps.md).
- Mostrar, [buscar](../search/search-poi.md) y guardar varios [Puntos de interés](../map/point-layers-on-map.md).
- [Planificar una ruta](../plan-route/create-route.md) en coche, bicicleta, a pie y combinar en rutas multimodales.
- Iniciar la [navegación guiada por voz](../navigation/guidance/voice-navigation.md) cuando encienda y apague la pantalla.
- Enriquezca su viaje turístico con [Wikipedia](../plugins/wikipedia.md) y [Wikivoyage](../plan-route/travel-guides.md) sin conexión.
- Personalice completamente cómo [se muestra el mapa](../map/configure-map-menu.md) y qué [widgets](../widgets/index.md) se muestran en él.
- Navegar [por ruta](../navigation/setup/route-navigation.md), [por una traza dada](../navigation/setup/gpx-navigation.md), [en transporte público](../navigation/routing/public-transport-navigation.md) y [fuera de carretera](../navigation/setup/markers-navigation.md).
- Todo funciona **sin conexión**.
- Y no olvide contribuir a [OpenStreetMap](https://www.openstreetmap.org/) con el [Plugin de edición OSM](../plugins/osm-editing.md).


## Guía de Acciones {#actions-guide}

### Permiso para acceder a la ubicación {#permission-to-access-the-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ubicación precisa android](@site/static/img/steps/first_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ubicación precisa iOS](@site/static/img/steps/first_start_ios.png) ![Ubicación precisa iOS](@site/static/img/steps/first_start_ios_1.png)

</TabItem>

</Tabs>

Le recomendamos que conceda a OsmAnd permiso para recibir información sobre la ubicación precisa de su dispositivo. No recopilamos, usamos ni compartimos su información privada, por lo que el acceso a la geolocalización precisa es necesario para el correcto funcionamiento sin conexión de la búsqueda, la navegación y otras funciones de OsmAnd.  


### Cómo descargar mapas {#how-to-download-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mostrar en el mapa](@site/static/img/steps/start_screen_download_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mostrar en el mapa](@site/static/img/steps/start_screen_download_ios.png)

</TabItem>

</Tabs>

La aplicación OsmAnd funciona con diferentes tipos de mapas, pero solo puede funcionar completamente con mapas sin conexión descargados, por lo que después de la pantalla *<Translate android="true" ids="get_started"/>* se le pedirá que [*descargue el mapa*](../start-with/download-maps.md#initial-setup-screen) de su región. Puede elegir una región diferente, restaurar desde [OsmAnd Cloud](../personal/osmand-cloud.md), u omitir este paso y descargar los mapas más tarde.  
Para otras opciones de descarga de mapas disponibles, consulte el [artículo Descargar mapas](../start-with/download-maps.md).

:::note Empezar a trabajar con mapas sin conexión
OsmAnd no puede funcionar correctamente sin mapas sin conexión descargados. Aunque la aplicación admite mapas [Vectoriales](../map/vector-maps.md) y [Raster](../map/raster-maps.md), se recomienda encarecidamente empezar a trabajar con mapas vectoriales sin conexión para que todas las funciones como [Búsqueda](../search/index.md), [Navegación](../navigation/index.md) y [Menú contextual](../map/map-context-menu.md) funcionen correctamente.
:::


### Cómo descargar mapas para todo el mundo {#how-download-maps-for-the-whole-world}

Aunque OsmAnd le permite descargar mapas para todas las regiones disponibles, no existe un único paquete para descargar el mundo entero de una vez. En su lugar, puede descargar mapas de países o regiones individuales según sus necesidades.

***Puntos clave:***

- **OsmAnd Pro** y **Maps+** proporcionan **descargas de mapas ilimitadas**, pero aún así necesita descargar los mapas de una región a la vez.
- **Limitaciones de almacenamiento.** Asegúrese de que su dispositivo tenga suficiente espacio antes de descargar varias regiones.
- **Actualizaciones automáticas.** Una vez descargados, los mapas se pueden actualizar a través de *Menú → Mapas y Recursos → Actualizaciones.*


### Cómo cambiar el idioma de la aplicación {#how-to-change-app-language}

La opción *Idioma de visualización* se utiliza para cambiar el idioma de toda la aplicación, incluidas las ventanas emergentes, el texto interno, los mensajes y más. Hasta Android 12, OsmAnd le permite personalizar el idioma de visualización según sus preferencias directamente en la aplicación. A partir de Android 13 y en dispositivos iOS, el idioma de visualización solo se puede cambiar en la configuración del sistema (vea cómo cambiar las preferences de idioma por aplicación en [Android](https://developer.android.com/guide/topics/resources/app-languages) e [iOS](https://developer.apple.com/news/?id=u2cfuj88)).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *Ajustes → Aplicaciones → OsmAnd → Idioma*

![Ajustes Generales Idioma Android](@site/static/img/personal/profiles/general_settings_language_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *Ajustes → OsmAnd Maps → Idioma*

![Ajustes Generales Idioma iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

:::note Sin opción para configurar los idiomas de la aplicación
En algunos dispositivos Android (Xiaomi con Muiu 14), no hay opción para configurar los idiomas de las aplicaciones individualmente en la configuración del sistema, por lo que el idioma de OsmAnd solo se puede cambiar con el idioma de todo el sistema. Puede consultar la discusión en [Discusión de GitHub](https://github.com/osmandapp/OsmAnd/issues/16990) para obtener información adicional.
:::


### Cómo gestionar sus ajustes {#how-to-manage-your-settings}

Puede gestionar los ajustes de la aplicación como [Ajustes globales](../personal/global-settings.md) o como [Configuración de perfil](../personal/profiles.md) a través del [Menú principal](../start-with/main-menu.md). La aplicación viene con una lista predefinida de perfiles que se pueden modificar más tarde. Cada perfil puede considerarse como una aplicación de mapa personalizada para fines específicos. Por defecto, los perfiles solo sirven como diferentes modos de navegación.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Gestionar perfil Android](@site/static/img/settings/manage_profile_android.png) ![Configurar perfil Android](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Gestionar perfil iOS](@site/static/img/settings/manage_profile_ios.png) ![Configurar perfil iOS](@site/static/img/settings/configure_profile_ios.png)

</TabItem>

</Tabs>

[Leer más](../personal/global-settings.md) sobre los Ajustes globales.
[Leer más](../personal/profiles.md) sobre los Ajustes de perfil.


### Cómo configurar los plugins {#how-to-configure-plugins}

Los [Plugins](../plugins/index.md#configure-plugin) amplían enormemente la funcionalidad de la aplicación. Casi todos los plugins tienen sus propias [Acciones de mapa](../map/map-context-menu.md), [Capas de mapa](../map/configure-map-menu.md), [Descargas de mapas](../start-with/download-maps.md) y [Ajustes](../plugins/#plugin-settings).  

Puede activar/desactivar los plugins a través del [Menú principal](../start-with/main-menu.md) → [Plugins](../plugins/index.md#configure-plugin).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Activar plugins Android](@site/static/img/settings/plugins_enable_android.png) ![Ejemplo de plugin Android](@site/static/img/settings/plugin_example_android.png)

Para activar/desactivar plugins, vaya a:
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Activar

</TabItem>

<TabItem value="ios" label="iOS">

![Activar plugins iOS](@site/static/img/settings/plugins_enable_ios.png) ![Ejemplo de plugin iOS](@site/static/img/settings/plugin_example_ios.png)

Para activar/desactivar plugins, vaya a:
<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;

</TabItem>

</Tabs>

[Leer más](../plugins/index.md#configure-plugin) sobre los plugins de OsmAnd.


### Cómo usar un mapa {#how-to-use-a-map}

El mapa es un elemento central de OsmAnd, y es importante saber [cómo usarlo](../map/interact-with-map.md) (gestos, botones, etc.). Puede [configurar el mapa](../map/configure-map-menu.md) según sus necesidades: [cambiar el estilo del mapa](../map/configure-map-menu.md#map-style-parameters), configurar diferentes [capas del mapa](../map/configure-map-menu.md#map-layers) como favoritos, PDI, transporte público, trazas, curvas de nivel, sombreado de relieve y otros.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurar mapa Android](@site/static/img/settings/configure_map_menu_android.png) ![Ejemplo de configuración de mapa Android](@site/static/img/settings/configure_map_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurar mapa iOS](@site/static/img/settings/configure_map_menu_ios.png) ![Ejemplo de configuración de mapa iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

</Tabs>

[Leer más](../map/configure-map-menu.md) sobre la configuración del mapa.


### Cómo configurar la pantalla {#how-to-configure-screen}

[Configurar pantalla](../widgets/configure-screen.md) le permite activar widgets [Informativos](../widgets/info-widgets.md) (altitud, velocidad, hora actual, etc.) y [de Navegación](../widgets/nav-widgets.md) (destino, rumbo, hora de llegada, etc.), [Acción rápida](../widgets/quick-action.md) y otros elementos que se mostrarán sobre el Mapa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurar pantalla Android](@site/static/img/widgets/configure_screen_android.png) ![Ejemplo de configuración de pantalla Android](@site/static/img/settings/configure_screen_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurar pantalla iOS](@site/static/img/settings/configure_screen_ios.png) ![Ejemplo de configuración de pantalla iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

</Tabs>

[Leer más](../widgets/configure-screen.md) sobre la configuración de la pantalla.


### Cómo añadir datos personales a los mapas {#how-to-add-personal-data-to-maps}

OsmAnd le permite hacer varias marcas en el Mapa para sus necesidades personales. Por ejemplo, [Puntos favoritos](../personal/favorites.md) - puntos personales con nombre, icono y categoría, [Marcadores](../personal/markers.md) - puntos añadidos rápidamente como objetivo, [Notas de audio/vídeo](../plugins/audio-video-notes.md) - notas multimedia grabadas en un punto específico, [Trazas](../personal/tracks/manage-tracks.md) - trazas y recorridos grabados e importados.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Añadir datos personales Android](@site/static/img/settings/personal_data_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Añadir datos personales iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

</Tabs>

[Leer más](../map/point-layers-on-map.md) sobre los puntos en el mapa.


### Cómo navegar y encontrar puntos de interés {#how-to-browse--find-point-of-interest}

Los [Puntos de interés (PDI)](../map/point-layers-on-map.md#points-of-interest-pois) son servicios que se pueden buscar o resaltar en el mapa. Representan lugares interesantes o útiles y se distribuyen como parte de los [Mapas vectoriales](../map/vector-maps.md). Puede usarlos para [mostrarlos en el mapa](../map/point-layers-on-map.md#points-of-interest-pois), [navegar](../navigation/index.md) y [buscar](../search/search-poi.md) los puntos de interés en el Mapa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Selección múltiple de PDI](@site/static/img/map/multiple_selection_android.png) ![Buscar y mostrar PDI Android](@site/static/img/map/search_display_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Selección múltiple de PDI](@site/static/img/settings/multiple_selection_iOS.png) ![Buscar y mostrar PDI iOS](@site/static/img/settings/search_display_poi_iOS.png)

</TabItem>

</Tabs>

[Leer más](../search/search-poi.md) sobre la búsqueda de PDI.


### Cómo planificar una ruta {#how-to-plan-a-route}

[Planificar ruta](../plan-route/create-route.md) es una potente herramienta que le permite crear un viaje, editar una traza existente y medir la distancia sobre la marcha. Puede colocar rápidamente puntos intermedios y conectarlos mediante varias líneas de navegación (bicicleta, peatón, línea recta, etc.). Los resultados se pueden guardar en un archivo GPX, para que pueda ser [compartido](../personal/tracks/index.md) o [utilizado para la navegación](../navigation/setup/gpx-navigation.md) más tarde.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planificar ruta Android](@site/static/img/settings/plan_route_android.png) ![Gráfico de ruta planificada Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planificar ruta iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

[Leer más](../plan-route/create-route.md) sobre la función de planificar ruta.


### Cómo buscar por dirección {#how-to-search-by-address}

OsmAnd ofrece muchas capacidades de búsqueda, incluida la búsqueda de direcciones. Por defecto, utiliza los datos de [OpenStreetMap](https://nominatim.openstreetmap.org/ui/search.html) y debería ser capaz de encontrar todas las direcciones utilizando la entrada de Búsqueda Rápida. Además, puede [buscar](../search/search-address.md) por ciudad, calle, código postal y coordenadas.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Búsqueda de dirección Android](@site/static/img/settings/address_search_android.png) ![Resultado de búsqueda Android](@site/static/img/settings/address_search_result_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda de dirección iOS](@site/static/img/settings/address_search_ios.png) ![Resultado de búsqueda iOS](@site/static/img/settings/address_search_result_ios.png)

</TabItem>

</Tabs>

:::note
Necesita descargar el mapa antes de buscar una dirección en él. Además, si su ubicación actual está demasiado lejos de la dirección que busca, es posible que necesite aumentar el radio de búsqueda.
:::

[Leer más](../search/search-address.md) sobre la búsqueda de direcciones.


### Cómo iniciar la navegación {#how-to-start-navigation}

La [Navegación](../navigation/index.md) le proporciona una guía paso a paso hasta su destino mostrando la ruta, ofreciendo instrucciones giro a giro, información adicional de la carretera sobre la superficie, suavidad, etc., y guía de voz opcional.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Iniciar navegación Android](@site/static/img/settings/start_navigation_android.png) ![Gráfico de ruta Android](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Iniciar navegación iOS](@site/static/img/settings/start_navigation_ios.png) ![Gráfico de ruta iOS](@site/static/img/settings/route_graph_ios.png)

</TabItem>

</Tabs>

[Leer más](../navigation/index.md) sobre la navegación.


### Cómo grabar su viaje {#how-to-record-your-trip}

La [Grabación de viaje](../plugins/trip-recording.md) es una herramienta especial empaquetada como un plugin de OsmAnd que le permite grabar todos los movimientos en una traza utilizando el GPS del dispositivo.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Grabación de viaje Android](@site/static/img/settings/trip_recording_android.png) ![Resumen de grabación de viaje Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Iniciar grabación de viaje iOS](@site/static/img/settings/trip_recording_start_ios.png) ![Menú de grabación de viaje iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

[Leer más](../plugins/trip-recording.md) sobre la grabación de viajes.


### Cómo editar mapas {#how-to-edit-maps}

OsmAnd se basa en los datos de [OpenStreetMap](https://www.openstreetmap.org/). Los mapas son creados por colaboradores voluntarios, por lo que pueden tener más o menos detalles dependiendo de cuánto trabajo se haya realizado en una determinada parte del mapa. Cualquiera puede registrarse como colaborador y añadir o editar mapas de OSM. OsmAnd proporciona un plugin de edición que ayuda a mejorar OpenStreetMap.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nota OSM Android](@site/static/img/settings/osm_note_android.png) ![Crear PDI Android](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nota OSM iOS](@site/static/img/settings/osm_note_ios.png) ![Crear PDI iOS](@site/static/img/settings/create_poi_ios.png)

</TabItem>

</Tabs>

[Leer más](../plugins/osm-editing.md) sobre la edición de OSM.


### Cómo cerrar la aplicación {#how-to-close-the-app}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Hay dos variantes disponibles para cerrar OsmAnd.

1. Cierre una aplicación deslizándola hacia arriba y fuera de la pantalla. Para una lista vertical de aplicaciones, deslice hacia la izquierda o hacia la derecha.  

2. Es posible que deba realizar los siguientes pasos antes de hacerlo, de lo contrario, OsmAnd se ejecutará en segundo plano:
    - [Descartar navegación](../navigation/setup/route-navigation.md#start--stop-navigation)
    - [Detener la descarga y actualización de mapas](../start-with/download-maps.md)
    - [Detener la grabación del viaje](../plugins/trip-recording.md#new-track-recording)
    - [Detener la grabación de notas de audio/vídeo](../plugins/audio-video-notes.md)

3. Función *Forzar detención*:
    - Toque prolongado en el *icono de OsmAnd → botón **i** → Forzar detención*.
    - Abra los ajustes y toque *Aplicaciones y notificaciones → OsmAnd → Forzar detención*.

</TabItem>

<TabItem value="ios" label="iOS">

Cierre una aplicación deslizándola hacia arriba y fuera de la pantalla. Para una lista vertical de aplicaciones, deslice hacia la izquierda o hacia la derecha.  

Es posible que deba realizar los siguientes pasos antes de hacerlo, de lo contrario, OsmAnd se ejecutará en segundo plano:

- [Cancelar navegación](../navigation/setup/route-navigation.md)
- [Detener la descarga y actualización de mapas](../start-with/download-maps.md)
- [Detener la grabación del viaje](../plugins/trip-recording.md#new-track-recording)
- [Detener la grabación de notas de audio/vídeo](../plugins/audio-video-notes.md)

</TabItem>

</Tabs>


## Atajos de la aplicación {#app-shortcuts}

<InfoAndroidOnly/>

Los [Atajos de la aplicación](https://support.google.com/android/answer/9450271) están disponibles para el icono de OsmAnd. Simplemente toque prolongadamente el icono de OsmAnd en la pantalla de su dispositivo para abrir el menú de atajos de la aplicación. Aquí, puede presionar brevemente para seleccionar las siguientes acciones: *Navegar a Casa*, *Navegar al Trabajo*, *Iniciar Grabación*, *Buscar*, *Mis lugares*, *Navegar a*. Un toque prolongado en una acción le permite añadir un nuevo icono de acción a la pantalla de su dispositivo.

Toque un icono de acción para iniciar inmediatamente la aplicación con la acción seleccionada.

![Atajos](@site/static/img/steps/shortcuts_3_andr.png) ![Atajos](@site/static/img/steps/shortcuts_4_andr.png)


## Ayuda sin conexión {#offline-help}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Captura de pantalla de ayuda sin conexión Android](@site/static/img/steps/offline_help_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de mapas iOS](@site/static/img/steps/offline_help_screen_ios.png)

</TabItem>

</Tabs>

En el *Menú de Ayuda* puede encontrar artículos de nuestro sitio [www.osmand.net/docs](https://osmand.net/docs/intro/). Después de la descarga inicial (se requiere conexión a Internet), los artículos de ayuda están disponibles sin conexión.  
La primera subsección, *Ayuda sin conexión* contiene los artículos **Más vistos** (o populares) entre nuestros usuarios. Estos artículos se muestran en el idioma configurado para la aplicación, si este idioma está soportado en nuestro sitio web de documentación. Los idiomas soportados actualmente incluyen: *<Translate android="true" ids="lang_en"/>, <Translate android="true" ids="lang_ar"/>, <Translate android="true" ids="lang_de"/>, <Translate android="true" ids="lang_es"/>, <Translate android="true" ids="lang_fr"/>, <Translate android="true" ids="lang_it"/>, <Translate android="true" ids="lang_nl"/>, <Translate android="true" ids="lang_pl"/>, <Translate android="true" ids="lang_pt"/>, <Translate android="true" ids="lang_tr"/>*, y *<Translate android="true" ids="lang_uk"/>*. Si cambia el idioma de la aplicación, reinicie OsmAnd para que la documentación se abra en el idioma seleccionado. Cuando no hay una traducción disponible, se mostrará automáticamente la versión en inglés de la página. Las secciones **Guía de usuario** y **Solución de problemas** tienen la misma estructura que en el sitio web.  
En el *Menú de Ayuda*, también puede encontrar enlaces útiles a las redes sociales de OsmAnd, información sobre la versión de su aplicación, notas de la versión y contactos de soporte. A través de Ayuda, también puede enviar [registros de logcat y de fallos](../troubleshooting/crash-logs.md#crash-and-logcat-logs).  

### Menú {#menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Captura de pantalla de ayuda sin conexión Android](@site/static/img/steps/offline_help_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de mapas iOS](@site/static/img/steps/offline_help_menu_ios.png)

</TabItem>

</Tabs>  

- **Enviar registro de fallos** (*para Android*). Permite a los usuarios enviar informes de fallos de la aplicación a los desarrolladores, ayudando en la identificación y resolución de problemas.
- **Enviar registro de logcat** (*para Android*). Proporciona a los usuarios la capacidad de enviar registros detallados de fallos de la aplicación a los desarrolladores, facilitando un análisis y solución de problemas más profundos.
- **Enviar registro** (*para iOS*). Realiza una función similar a la característica *Enviar registro de fallos* para Android, permitiendo a los usuarios de dispositivos iOS informar de fallos de la aplicación a los desarrolladores para fines de depuración.
- **Copiar versión de compilación**. Permite a los usuarios comunicar de forma rápida y precisa la versión actual de la aplicación a los desarrolladores al informar problemas, simplificando el proceso de diagnóstico y resolución.


### Más vistos {#most-viewed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Captura de pantalla de ayuda sin conexión Android](@site/static/img/steps/offline_help_most_viewed_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de mapas iOS](@site/static/img/steps/offline_help_most_viewed_ios.png)

</TabItem>

</Tabs>

Los artículos más vistos entre nuestros usuarios se refieren a los artículos en la aplicación o en el sitio que han obtenido la mayor cantidad de vistas o interacciones de los usuarios. Esta métrica ayuda a identificar el contenido que es particularmente interesante o útil para sus usuarios. Puede proporcionar información valiosa sobre las preferencias e intereses de los usuarios, permitiendo a los desarrolladores y creadores de contenido adaptar el contenido futuro para satisfacer mejor las necesidades de la audiencia. Además, destacar los artículos populares puede ayudar a los nuevos usuarios a encontrar recursos valiosos dentro de la aplicación.


### Guía de usuario {#user-guide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Captura de pantalla de ayuda sin conexión Android](@site/static/img/steps/guide_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de mapas iOS](@site/static/img/steps/guide_ios.png)

</TabItem>

</Tabs>

La sección **Guía de usuario** del menú de Ayuda es un manual completo que sigue la estructura del sitio web de OsmAnd, asegurando la consistencia de la información y la facilidad de navegación entre plataformas. Usando la Ayuda, puede navegar fácilmente desde la aplicación al sitio web, encontrando el mismo contenido organizado de manera familiar. Esta consistencia mejora la usabilidad al proporcionar un único recurso de soporte para encontrar respuestas a preguntas y solucionar problemas rápidamente.


### Solución de problemas {#troubleshooting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Captura de pantalla de ayuda sin conexión Android](@site/static/img/steps/offline_help_troubleshooting_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de mapas iOS](@site/static/img/steps/offline_help_troubleshooting_ios.png)

</TabItem>

</Tabs>

Soluciones y consejos para resolver problemas comunes. Si tiene una pregunta específica, por favor consulte [Solución de problemas](../troubleshooting/index.md) para obtener una respuesta.

- [Configuración](../troubleshooting/setup.md). Al configurar una aplicación, estos son los problemas que surgen con más frecuencia.
- [Mapas y datos](../troubleshooting/maps-data.md). Problemas relacionados con mapas, búsqueda y el resto de los datos.
- [Navegación](../troubleshooting/navigation.md). Los problemas más comunes que ocurren en el modo de navegación.
- [Grabación de trazas](../troubleshooting/track-recording-issues.md). Problemas comunes relacionados con la grabación de trazas como ruidos, huecos e imprecisiones.
- [General](../troubleshooting/general.md). Problemas comunes asociados con diversas características de OsmAnd.
- [Registros de fallos](../troubleshooting/crash-logs.md). Cómo enviar registros de fallos al equipo de OsmAnd.
- [Android Auto](../troubleshooting/android_auto.md) (*solo para Android*). Problemas de navegación en Auto.

### Contáctenos {#contact-us}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Captura de pantalla de ayuda sin conexión Android](@site/static/img/steps/offline_help_contact_us_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de mapas iOS](@site/static/img/steps/offline_help_contact_us_ios.png)

</TabItem>

</Tabs>

Le permite hacer preguntas o sugerencias.

### Informar de problemas {#report-issues}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Captura de pantalla de ayuda sin conexión Android](@site/static/img/steps/offline_help_report_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de mapas iOS](@site/static/img/steps/offline_help_report_ios.png)

</TabItem>

</Tabs>

- **Abrir incidencia en GitHub**. [Versión de Android en GitHub](https://github.com/osmandapp/OsmAnd-Issues/issues), [versión de iOS en GitHub](https://github.com/osmandapp/OsmAnd-iOS/issues): haga preguntas, escriba sobre errores y proponga características.
- **Enviar registro de fallos** (*para Android*). Contiene solo información sobre fallos.
- [Enviar registro de logcat](../../user/troubleshooting/crash-logs.md#send-logs-from-osmand-app-android) (*Android*) / [Enviar registro](../../user/troubleshooting/crash-logs.md#send-logs-from-ios-devices) (*iOS*). Archivo de registro detallado.

### Acerca de OsmAnd {#about-osmand}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Captura de pantalla de ayuda sin conexión Android](@site/static/img/steps/offline_about_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de mapas iOS](@site/static/img/steps/offline_about_ios.png)

</TabItem>

</Tabs>

Puede conocer a nuestro equipo, ver la versión actual de la aplicación y las novedades, y descargar la versión beta de la aplicación.


## Privacidad {#privacy}

Es una aplicación de [código abierto](https://github.com/osmandapp/osmand), sin anuncios / sin rastreadores y centrada en la privacidad. Para preservar la máxima privacidad, OsmAnd ofrece mapas sin conexión en primer lugar, por lo que no se filtra ninguna interacción o información geográfica de su dispositivo. Estamos muy atentos a qué datos se recopilan y qué datos se transfieren por la red, puede leer más en nuestra [Política de privacidad](https://osmand.net/help-online/privacy-policy).  


## Permisos {#permissions}

OsmAnd no tiene ningún permiso requerido en la versión de iOS / Android.

**Esencial**:

- **Internet**. Descarga inicial / actualización de mapas sin conexión. Además, podría ser necesario para acceder a funciones en línea como [Imágenes a nivel de calle](../map/point-layers-on-map.md#-street-level-imagery), [Fotos en línea](../map/map-context-menu.md#online-photos) o [Mapas en línea](../map/raster-maps.md).
- **GPS** / **Red GSM**. Determinar su ubicación, seguirle en modo de navegación y grabar su viaje (opcional). Este permiso se solicita cuando hace clic en el [botón de mi ubicación](../widgets/map-buttons.md#my-location-and-zoom) o cuando [inicia la navegación](../navigation/setup/route-navigation.md#start--stop-navigation).

**Opcional**:

- **Cámara/grabación de voz** (*Android*). Solo utilizado por las [Notas de audio/vídeo](../plugins/audio-video-notes.md). Esta característica está empaquetada como un plugin y por defecto está desactivada. Le permite crear rápidamente notas de audio/vídeo relacionadas con la ubicación durante un viaje.