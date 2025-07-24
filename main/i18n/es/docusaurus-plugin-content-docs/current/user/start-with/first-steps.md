---
source-hash: 0cd7fc222e201abda3ee41c3278fe75817181ab14d975d85f25fdb51e7498eae
sidebar_position: 1
title: Primeros pasos
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

Descubre cómo descargar mapas, configurar la aplicación, usar el mapa y crear una ruta, iniciar la navegación y buscar puntos de interés. Familiarízate con los puntos clave de la política de privacidad de OsmAnd y los permisos requeridos.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navegación sin conexión Android](@site/static/img/settings/google_play_screen1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navegación sin conexión iOS](@site/static/img/settings/itunes_screen_ios.png)

</TabItem>

</Tabs>


## Instalar OsmAnd {#install-osmand}

OsmAnd es una aplicación móvil de mapas y navegación disponible para **Android** e **iOS**. Puedes descargarla desde los mercados más populares.

**Mercados de Android**: [Google Play Store](https://play.google.com/store/apps/details?id=net.osmand) y [Huawei AppGallery](https://appgallery.huawei.com/#/app/C101486545).

<AndroidStore/>

**iOS**: [App Store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257).

<AppleStore/>

[Lee más](../purchases/index.md) sobre las versiones y compras de OsmAnd.


## Bienvenido a OsmAnd {#welcome-to-osmand}

Nuestro objetivo es crear una aplicación totalmente funcional orientada a mapas que pueda utilizarse para diversos fines, tanto sin conexión como en línea. La aplicación tiene muchas funciones, por lo que no tendrás que cambiar entre diferentes aplicaciones y todo estará al alcance de tu mano.

- Consulta un mapa mundial con muchos detalles mostrados en [diferentes estilos de mapa](../map/vector-maps.md).
- Muestra, [busca](../search/search-poi.md) y guarda varios [puntos de interés](../map/point-layers-on-map.md).
- [Planifica una ruta](../plan-route/create-route.md) en coche, bicicleta, a pie y combínalas en rutas multimodales.
- Inicia la [navegación guiada por voz](../navigation/guidance/voice-navigation.md) cuando enciendas y apagues la pantalla.
- Enriquece tu viaje turístico con [Wikipedia](../plugins/wikipedia.md) y [Wikivoyage](../plan-route/travel-guides.md) sin conexión.
- Personaliza completamente cómo [se muestra el mapa](../map/configure-map-menu.md) y qué [widgets](../widgets/index.md) se muestran en él.
- Navega [por ruta](../navigation/setup/route-navigation.md), [por una pista determinada](../navigation/setup/gpx-navigation.md), [por transporte público](../navigation/routing/public-transport-navigation.md) y [fuera de carretera](../navigation/setup/markers-navigation.md).
- Todo funciona **sin conexión**.
- Y no olvides contribuir a [OpenStreetMap](https://www.openstreetmap.org/) con el [Complemento de edición de OSM](../plugins/osm-editing.md).


## Guía de acciones {#actions-guide}

### Permiso para acceder a la ubicación {#permission-to-access-the-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ubicación precisa Android](@site/static/img/steps/first_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ubicación precisa iOS](@site/static/img/steps/first_start_ios.png) ![Ubicación precisa iOS](@site/static/img/steps/first_start_ios_1.png)

</TabItem>

</Tabs>

Te recomendamos que concedas a OsmAnd permiso para recibir información sobre la ubicación precisa de tu dispositivo. No recopilamos, usamos ni compartimos tu información privada, por lo que se necesita acceso a la geolocalización precisa para el correcto funcionamiento sin conexión de la búsqueda, la navegación y otras funciones de OsmAnd.


### Cómo descargar mapas {#how-to-download-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mostrar en el mapa](@site/static/img/steps/start_screen_download_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mostrar en el mapa](@site/static/img/steps/start_screen_download_ios.png)

</TabItem>

</Tabs>

La aplicación OsmAnd funciona con diferentes tipos de mapas, pero solo puede funcionar completamente con mapas sin conexión descargados, por lo que después de la pantalla *<Translate android="true" ids="get_started"/>* se te pide que [*descargues el mapa*](../start-with/download-maps.md#initial-setup-screen) de tu región. Puedes elegir una región diferente, restaurar desde [OsmAnd Cloud](../personal/osmand-cloud.md) u omitir este paso y descargar mapas más tarde.
Para otras opciones de descarga de mapas disponibles, consulta el [artículo Descargar mapas](../start-with/download-maps.md).

:::note Empezar a trabajar con mapas sin conexión
OsmAnd no puede funcionar correctamente sin mapas sin conexión descargados. Aunque la aplicación admite mapas [vectoriales](../map/vector-maps.md) y [ráster](../map/raster-maps.md), se recomienda encarecidamente empezar a trabajar con mapas vectoriales sin conexión para que todas las funciones como [Búsqueda](../search/index.md), [Navegación](../navigation/index.md) y [Menú contextual](../map/map-context-menu.md) funcionen correctamente.
:::


### Cómo descargar mapas de todo el mundo {#how-download-maps-for-the-whole-world}

Aunque OsmAnd te permite descargar mapas de todas las regiones disponibles, no existe un único paquete para descargar el mundo entero a la vez. En su lugar, puedes descargar mapas de países o regiones individuales según tus necesidades.

***Puntos clave:***

- **OsmAnd Pro** y **Maps+** ofrecen **descargas ilimitadas de mapas**, pero aun así necesitas descargar los mapas de una región a la vez.
- **Limitaciones de almacenamiento.** Asegúrate de que tu dispositivo tenga suficiente espacio antes de descargar varias regiones.
- **Actualizaciones automáticas.** Una vez descargados, los mapas se pueden actualizar a través de *Menú → Mapas y recursos → Actualizaciones.*


### Cómo cambiar el idioma de la aplicación {#how-to-change-app-language}

La opción *Idioma de visualización* se utiliza para cambiar el idioma de toda la aplicación, incluyendo las indicaciones emergentes, el texto interno, los mensajes y más. Hasta Android 12, OsmAnd te permite personalizar el idioma de visualización según tus preferencias directamente en la aplicación. A partir de Android 13 y en dispositivos iOS, el idioma de visualización solo se puede cambiar en la configuración del sistema (consulta cómo cambiar las preferencias de idioma por aplicación en [Android](https://developer.android.com/guide/topics/resources/app-languages) e [iOS](https://developer.apple.com/news/?id=u2cfuj88)).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ve a: *Ajustes → Aplicaciones → OsmAnd → Idioma*

![Idioma de configuración general Android](@site/static/img/personal/profiles/general_settings_language_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *Ajustes → Mapas de OsmAnd → Idioma*

![Idioma de configuración general iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

:::note Sin opción para configurar los idiomas de la aplicación
En algunos dispositivos Android (Xiaomi con Muiu 14), no hay opción para configurar los idiomas de la aplicación individualmente en la configuración del sistema, por lo que el idioma de OsmAnd solo se puede cambiar con el idioma de todo el sistema. Puedes consultar la discusión en [GitHub discussion](https://github.com/osmandapp/OsmAnd/issues/16990) para obtener información adicional.
:::


### Cómo gestionar tus ajustes {#how-to-manage-your-settings}

Puedes gestionar los ajustes de la aplicación como [Ajustes globales](../personal/global-settings.md) o como [Configuración de perfil](../personal/profiles.md) a través del [Menú principal](../start-with/main-menu.md). La aplicación viene con una lista predefinida de perfiles que se pueden modificar más tarde. Cada perfil puede considerarse una aplicación de mapas personalizada para fines específicos. Por defecto, los perfiles solo se utilizan como diferentes modos de navegación.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Gestionar perfil Android](@site/static/img/settings/manage_profile_android.png) ![Configurar perfil Android](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Gestionar perfil iOS](@site/static/img/settings/manage_profile_ios.png) ![Configurar perfil iOS](@site/static/img/settings/configure_profile_ios.png)

</TabItem>

</Tabs>

[Lee más](../personal/global-settings.md) sobre los ajustes globales.
[Lee más](../personal/profiles.md) sobre los ajustes de perfil.


### Cómo configurar complementos {#how-to-configure-plugins}

Los [complementos](../plugins/index.md#configure-plugin) amplían enormemente la funcionalidad de la aplicación. Casi todos los complementos tienen sus propias [acciones de mapa](../map/map-context-menu.md), [capas de mapa](../map/configure-map-menu.md), [descargas de mapa](../start-with/download-maps.md) y [ajustes](../plugins/#plugin-settings).

Puedes habilitar/deshabilitar complementos a través del [Menú principal](../start-with/main-menu.md) → [Complementos](../plugins/index.md#configure-plugin).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Habilitar complementos Android](@site/static/img/settings/plugins_enable_android.png) ![Ejemplo de complemento Android](@site/static/img/settings/plugin_example_android.png)

Para habilitar/deshabilitar complementos, ve a:
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> → &#65049; → Habilitar

</TabItem>

<TabItem value="ios" label="iOS">

![Habilitar complementos iOS](@site/static/img/settings/plugins_enable_ios.png) ![Ejemplo de complemento iOS](@site/static/img/settings/plugin_example_ios.png)

Para habilitar/deshabilitar complementos, ve a:
<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;

</TabItem>

</Tabs>

[Lee más](../plugins/index.md#configure-plugin) sobre los complementos de OsmAnd.


### Cómo usar un mapa {#how-to-use-a-map}

El mapa es un elemento central de OsmAnd, y es importante saber [cómo usarlo](../map/interact-with-map.md) (gestos, botones, etc.). Puedes [configurar el mapa](../map/configure-map-menu.md) según tus necesidades: [cambiar el estilo del mapa](../map/configure-map-menu.md#map-style-parameters), configurar diferentes [capas del mapa](../map/configure-map-menu.md#map-layers) como favoritos, PDI, transporte público, rutas, curvas de nivel, relieve y otras.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurar mapa Android](@site/static/img/settings/configure_map_menu_android.png) ![Configurar ejemplo de mapa Android](@site/static/img/settings/configure_map_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurar mapa iOS](@site/static/img/settings/configure_map_menu_ios.png) ![Configurar ejemplo de mapa iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

</Tabs>

[Lee más](../map/configure-map-menu.md) sobre la configuración del mapa.


### Cómo configurar la pantalla {#how-to-configure-screen}

[Configurar pantalla](../widgets/configure-screen.md) te permite habilitar widgets [informativos](../widgets/info-widgets.md) (altitud, velocidad, hora actual, etc.) y [de navegación](../widgets/nav-widgets.md) (destino, rumbo, hora de llegada, etc.), [acciones rápidas](../widgets/quick-action.md) y otros elementos que se mostrarán sobre el mapa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurar pantalla Android](@site/static/img/widgets/configure_screen_android.png) ![Configurar ejemplo de pantalla Android](@site/static/img/settings/configure_screen_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurar pantalla iOS](@site/static/img/settings/configure_screen_ios.png) ![Configurar ejemplo de pantalla iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

</Tabs>

[Lee más](../widgets/configure-screen.md) sobre la configuración de la pantalla.


### Cómo añadir datos personales a los mapas {#how-to-add-personal-data-to-maps}

OsmAnd te permite hacer varias marcas en el mapa para tus necesidades personales. Por ejemplo, [Puntos favoritos](../personal/favorites.md) - puntos personales con nombre, icono y categoría, [Marcadores](../personal/markers.md) - puntos añadidos rápidamente como objetivo, [Notas de audio/vídeo](../plugins/audio-video-notes.md) - notas multimedia grabadas en un punto específico, [Rutas](../personal/tracks/manage-tracks.md) - rutas y recorridos grabados e importados.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Añadir datos personales Android](@site/static/img/settings/personal_data_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Añadir datos personales iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

</Tabs>

[Lee más](../map/point-layers-on-map.md) sobre los puntos en el mapa.


### Cómo buscar y encontrar puntos de interés {#how-to-browse--find-point-of-interest}

Los [Puntos de Interés (PDI)](../map/point-layers-on-map.md#points-of-interest-pois) son servicios que se pueden buscar o resaltar en el mapa. Representan lugares interesantes o útiles y se distribuyen como parte de los [Mapas Vectoriales](../map/vector-maps.md). Puedes usarlos para [mostrar en el mapa](../map/point-layers-on-map.md#points-of-interest-pois), [navegar](../navigation/index.md) y [buscar](../search/search-poi.md) los puntos de interés en el mapa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Selección múltiple de PDI](@site/static/img/map/multiple_selection_android.png) ![Buscar y mostrar PDI Android](@site/static/img/map/search_display_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Selección múltiple de PDI](@site/static/img/settings/multiple_selection_iOS.png) ![Buscar y mostrar PDI iOS](@site/static/img/settings/search_display_poi_iOS.png)

</TabItem>

</Tabs>

[Lee más](../search/search-poi.md) sobre la búsqueda de PDI.


### Cómo planificar una ruta {#how-to-plan-a-route}

[Planificar ruta](../plan-route/create-route.md) es una potente herramienta que te permite crear un viaje, editar una ruta existente y medir distancias al instante. Puedes colocar rápidamente puntos intermedios y conectarlos mediante varias líneas de navegación (bicicleta, peatón, línea recta, etc.). Los resultados se pueden guardar en un archivo GPX, para que se puedan [compartir](../personal/tracks/index.md) o [utilizar para la navegación](../navigation/setup/gpx-navigation.md) más tarde.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planificar ruta Android](@site/static/img/settings/plan_route_android.png) ![Planificar gráfico de ruta Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planificar ruta iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

[Lee más](../plan-route/create-route.md) sobre la función de planificación de rutas.


### Cómo buscar por dirección {#how-to-search-by-address}

OsmAnd ofrece muchas capacidades de búsqueda, incluida la búsqueda por dirección. Por defecto, utiliza [datos de OpenStreetMap](https://nominatim.openstreetmap.org/ui/search.html) y debería poder encontrar todas las direcciones utilizando la entrada de Búsqueda Rápida. Además, puedes [buscar](../search/search-address.md) por ciudad, calle, código postal y coordenadas.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Búsqueda de dirección Android](@site/static/img/settings/address_search_android.png) ![Resultado de búsqueda Android](@site/static/img/settings/address_search_result_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda de dirección iOS](@site/static/img/settings/address_search_ios.png) ![Resultado de búsqueda iOS](@site/static/img/settings/address_search_result_ios.png)

</TabItem>

</Tabs>

:::note
Debes descargar el mapa antes de buscar una dirección en él. Además, si tu ubicación actual está demasiado lejos de la dirección que buscas, es posible que debas aumentar el radio de búsqueda.
:::

[Lee más](../search/search-address.md) sobre la búsqueda de direcciones.


### Cómo iniciar la navegación {#how-to-start-navigation}

La [Navegación](../navigation/index.md) te proporciona una guía paso a paso hasta tu destino, mostrando la ruta, ofreciendo instrucciones giro a giro, información adicional sobre la superficie, la suavidad, etc., y guía de voz opcional.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Iniciar navegación Android](@site/static/img/settings/start_navigation_android.png) ![Gráfico de ruta Android](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Iniciar navegación iOS](@site/static/img/settings/start_navigation_ios.png) ![Gráfico de ruta iOS](@site/static/img/settings/route_graph_ios.png)

</TabItem>

</Tabs>

[Lee más](../navigation/index.md) sobre la navegación.


### Cómo grabar tu viaje {#how-to-record-your-trip}

[Grabación de viaje](../plugins/trip-recording.md) es una herramienta especial empaquetada como un complemento de OsmAnd que te permite registrar todos los movimientos en la ruta utilizando el GPS del dispositivo.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Grabación de viaje Android](@site/static/img/settings/trip_recording_android.png) ![Resumen de grabación de viaje Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Iniciar grabación de viaje iOS](@site/static/img/settings/trip_recording_start_ios.png) ![Menú de grabación de viaje iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

[Lee más](../plugins/trip-recording.md) sobre la grabación de viajes.


### Cómo editar mapas {#how-to-edit-maps}

OsmAnd funciona con datos de [OpenStreetMap](https://www.openstreetmap.org/). Los mapas son creados por colaboradores voluntarios, por lo que pueden tener más o menos detalles dependiendo de la cantidad de trabajo realizado en una determinada parte del mapa. Cualquiera puede registrarse como colaborador y añadir o editar mapas de OSM. OsmAnd proporciona un complemento de edición que ayuda a mejorar OpenStreetMap.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nota OSM Android](@site/static/img/settings/osm_note_android.png) ![Crear PDI Android](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nota OSM iOS](@site/static/img/settings/osm_note_ios.png) ![Crear PDI iOS](@site/static/img/settings/create_poi_ios.png)

</TabItem>

</Tabs>

[Lee más](../plugins/osm-editing.md) sobre la edición de OSM.


### Cómo cerrar la aplicación {#how-to-close-the-app}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Hay dos variantes disponibles para cerrar OsmAnd.

1. Cierra una aplicación deslizando hacia arriba y fuera de la pantalla. Para una lista vertical de aplicaciones, desliza hacia la izquierda o hacia la derecha.

2. Es posible que debas realizar los siguientes pasos antes de hacerlo, de lo contrario, OsmAnd se ejecutará en segundo plano:
    - [Descartar navegación](../navigation/setup/route-navigation.md#start--stop-navigation)
    - [Detener descarga y actualización de mapas](../start-with/download-maps.md)
    - [Detener grabación de viaje](../plugins/trip-recording.md#create-new-track)
    - [Detener grabación de notas de audio/video](../plugins/audio-video-notes.md)

3. Función *Forzar detención*:
    - Mantén pulsado el *icono de OsmAnd → botón **i** → Forzar detención*.
    - Abre los ajustes y pulsa *Aplicaciones y notificaciones → OsmAnd → Forzar detención*.

</TabItem>

<TabItem value="ios" label="iOS">

Cierra una aplicación deslizando hacia arriba y fuera de la pantalla. Para una lista vertical de aplicaciones, desliza hacia la izquierda o hacia la derecha.

Es posible que debas realizar los siguientes pasos antes de hacerlo, de lo contrario, OsmAnd se ejecutará en segundo plano:

- [Cancelar navegación](../navigation/setup/route-navigation.md)
- [Detener descarga y actualización de mapas](../start-with/download-maps.md)
- [Detener grabación de viaje](../plugins/trip-recording.md#create-new-track)
- [Detener grabación de notas de audio/video](../plugins/audio-video-notes.md)

</TabItem>

</Tabs>


## Atajos de la aplicación {#app-shortcuts}

<InfoAndroidOnly/>

Los [atajos de aplicación](https://support.google.com/android/answer/9450271) están disponibles para el icono de OsmAnd. Simplemente mantén pulsado el icono de OsmAnd en la pantalla de tu dispositivo para abrir el menú de atajos de aplicación. Aquí, puedes pulsar brevemente para seleccionar las siguientes acciones: *Navegar a casa*, *Navegar al trabajo*, *Iniciar grabación*, *Buscar*, *Mis lugares*, *Navegar a*. Mantener pulsada una acción te permite añadir un nuevo icono de acción a la pantalla de tu dispositivo.

Toca un icono de acción para iniciar inmediatamente la aplicación con la acción seleccionada.

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

En el *menú Ayuda* puedes encontrar artículos de nuestro sitio [www.osmand.net/docs](https://osmand.net/docs/intro/). Después de la descarga inicial (se requiere conexión a Internet), los artículos de ayuda están disponibles sin conexión.
La primera subsección, *Ayuda sin conexión*, contiene los artículos **Más vistos** (o populares) entre nuestros usuarios. Las secciones **Guía del usuario** y **Solución de problemas** tienen la misma estructura que en el sitio web.
En el *menú Ayuda*, también puedes encontrar enlaces útiles a las redes sociales de OsmAnd, información de la versión de tu aplicación, notas de la versión y contactos de soporte. A través de Ayuda, también puedes enviar [registros de logcat y de fallos](../troubleshooting/crash-logs.md#crash-and-logcat-logs).

### Menú {#menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Captura de pantalla de ayuda sin conexión Android](@site/static/img/steps/offline_help_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de mapas iOS](@site/static/img/steps/offline_help_menu_ios.png)

</TabItem>

</Tabs>

- **Enviar registro de fallos** (*para Android*). Permite a los usuarios enviar informes de fallos de la aplicación a los desarrolladores, lo que ayuda a identificar y resolver problemas.
- **Enviar registro de logcat** (*para Android*). Proporciona a los usuarios la capacidad de enviar registros detallados de fallos de la aplicación a los desarrolladores, lo que facilita un análisis y una resolución de problemas más profundos.
- **Enviar registro** (*para iOS*). Realiza una función similar a la función *Enviar registro de fallos* para Android, lo que permite a los usuarios de dispositivos iOS informar de fallos de la aplicación a los desarrolladores para fines de depuración.
- **Copiar versión de compilación**. Permite a los usuarios comunicar de forma rápida y precisa la versión actual de la aplicación a los desarrolladores al informar de problemas, simplificando el proceso de diagnóstico y resolución.


### Más vistos {#most-viewed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Captura de pantalla de ayuda sin conexión Android](@site/static/img/steps/offline_help_most_viewed_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de mapas iOS](@site/static/img/steps/offline_help_most_viewed_ios.png)

</TabItem>

</Tabs>

Los artículos más vistos entre nuestros usuarios se refieren a los artículos de la aplicación o del sitio que han obtenido el mayor número de visitas o interacciones de los usuarios. Esta métrica ayuda a identificar el contenido que es particularmente interesante o útil para tus usuarios. Puede proporcionar información valiosa sobre las preferencias e intereses de los usuarios, lo que permite a los desarrolladores y creadores de contenido adaptar el contenido futuro para satisfacer mejor las necesidades de la audiencia. Además, destacar los artículos populares puede ayudar a los nuevos usuarios a encontrar recursos valiosos dentro de la aplicación.


### Guía del usuario {#user-guide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Captura de pantalla de ayuda sin conexión Android](@site/static/img/steps/guide_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de mapas iOS](@site/static/img/steps/guide_ios.png)

</TabItem>

</Tabs>

La sección **Guía del usuario** del menú Ayuda es un manual completo que sigue la estructura del sitio web de OsmAnd, lo que garantiza la coherencia de la información y la facilidad de navegación entre plataformas. Con Ayuda, puedes navegar fácilmente desde la aplicación al sitio web, encontrando el mismo contenido organizado de forma familiar. Esta coherencia mejora la usabilidad al proporcionar un único recurso de soporte para encontrar respuestas a preguntas y solucionar problemas rápidamente.


### Solución de problemas {#troubleshooting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Captura de pantalla de ayuda sin conexión Android](@site/static/img/steps/offline_help_troubleshooting_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de mapas iOS](@site/static/img/steps/offline_help_troubleshooting_ios.png)

</TabItem>

</Tabs>

Soluciones y consejos para resolver problemas comunes. Si tienes una pregunta específica, consulta [Solución de problemas](../troubleshooting/index.md) para obtener una respuesta.

- [Configuración](../troubleshooting/setup.md). Al configurar una aplicación, estos son los problemas que surgen con mayor frecuencia.
- [Mapas y datos](../troubleshooting/maps-data.md). Problemas relacionados con mapas, búsquedas y el resto de los datos.
- [Navegación](../troubleshooting/navigation.md). Los problemas más comunes que ocurren en el modo de navegación.
- [Grabación de rutas](../troubleshooting/track-recording-issues.md). Problemas comunes relacionados con la grabación de rutas, como ruidos, huecos e imprecisiones.
- [General](../troubleshooting/general.md). Problemas comunes asociados con varias funciones de OsmAnd.
- [Registros de fallos](../troubleshooting/crash-logs.md). Cómo enviar registros de fallos al equipo de OsmAnd.
- [Android Auto](../troubleshooting/android_auto.md) (*solo para Android*). Problemas de navegación automática.

### Contáctanos {#contact-us}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Captura de pantalla de ayuda sin conexión Android](@site/static/img/steps/offline_help_contact_us_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de mapas iOS](@site/static/img/steps/offline_help_contact_us_ios.png)

</TabItem>

</Tabs>

Te permite hacer preguntas o sugerencias.

### Informar de problemas {#report-issues}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Captura de pantalla de ayuda sin conexión Android](@site/static/img/steps/offline_help_report_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de mapas iOS](@site/static/img/steps/offline_help_report_ios.png)

</TabItem>

</Tabs>

- **Abrir incidencia en GitHub**. [Versión de Android GitHub](https://github.com/osmandapp/OsmAnd-Issues/issues), [Versión de iOS GitHub](https://github.com/osmandapp/OsmAnd-iOS/issues): haz preguntas, escribe sobre errores y propone funciones.
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

Puedes conocer a nuestro equipo, ver la versión actual de la aplicación y las novedades, y descargar la versión beta de la aplicación.


## Privacidad {#privacy}

Es una aplicación [de código abierto](https://github.com/osmandapp/osmand), sin anuncios ni rastreadores y centrada en la privacidad. Para preservar la máxima privacidad, OsmAnd ofrece mapas sin conexión como primera opción, de modo que no se filtra ninguna interacción ni información geográfica de tu dispositivo. Somos muy cuidadosos con los datos que se recopilan y los que se transfieren por la red; puedes leer más en nuestra [Política de privacidad](https://osmand.net/help-online/privacy-policy).


## Permisos {#permissions}

OsmAnd no tiene ningún permiso requerido en la versión de iOS/Android.

**Esenciales**:

- **Internet**. Descarga inicial/actualización de mapas sin conexión. Además, podría ser necesario para acceder a funciones en línea como [Imágenes a nivel de calle](../map/point-layers-on-map.md#-street-level-imagery), [Fotos en línea](../map/map-context-menu.md#online-photos) o [Mapas en línea](../map/raster-maps.md).
- **GPS** / **Red GSM**. Determina tu ubicación, te sigue en modo de navegación y registra tu viaje (opcional). Este permiso se solicita cuando haces clic en el [botón de mi ubicación](../widgets/map-buttons.md#my-location-and-zoom) o cuando [inicias la navegación](../navigation/setup/route-navigation.md#start--stop-navigation).

**Opcionales**:

- **Cámara/grabación de voz** (*Android*). Solo utilizado por [las notas de audio/vídeo](../plugins/audio-video-notes.md). Esta función se empaqueta como un complemento y está deshabilitada por defecto. Te permite crear rápidamente notas de audio/vídeo relacionadas con la ubicación durante un viaje.


> *Última actualización: enero de 2025*