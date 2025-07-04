---
source-hash: 3be3e0b1234aafa204632357b26d98724820bfbfafe67f7237cda7aae4d48299
sidebar_position: 9
title: Android Auto
ios: false
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

## Descripción general {#overview}

![Pantalla de Android Auto](@site/static/img/navigation/auto-car/android_auto_overview.png)

[**Android Auto**](https://www.android.com/auto) es un software desarrollado por Google que permite a los usuarios conectar sus dispositivos Android a sistemas multimedia de vehículos compatibles. *Android Auto* proporciona una versión adaptada y optimizada de la aplicación OsmAnd para un uso seguro mientras se conduce, lo que facilita y hace más seguro el acceso a las funciones de navegación de la aplicación.

La función **Android Auto** solo es compatible cuando se utiliza la aplicación OsmAnd disponible en [Google Play Store](https://play.google.com/store/apps/dev?id=8483587772816822023).

> **NOTA**: *Android Auto no es una réplica directa de la aplicación móvil OsmAnd. Tiene una interfaz simplificada, que se centra en las funciones esenciales de navegación para garantizar una conducción segura. Algunas funciones avanzadas no son compatibles debido a las limitaciones de la plataforma.*

### Pantalla de conexión {#connection-screen}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_connect_screen.png)

Mientras el dispositivo está conectado a *Android Auto*, el mapa de la pantalla de la aplicación está bloqueado. Esta es una función de seguridad intencionada para garantizar que la navegación se controle exclusivamente desde la pantalla del coche, minimizando las distracciones durante la conducción. Consulta las [preguntas frecuentes](#common-issues-and-solutions) sobre la pantalla de conexión.

### Pantalla de inicio {#landing-screen}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_2.png').default} alt="AA"/></td>
    </tr>
</table>

Al abrir la aplicación, se muestra una lista de categorías. Para facilitar la navegación, puedes ocultarla tocando el botón en la esquina superior derecha de la pantalla.

- Toca el botón de menú para ocultar la lista de categorías.
- En la esquina superior derecha de la pantalla, toca el botón junto a los botones de función si quieres volver a la lista.

### Interacción con el mapa {#interaction-with-the-map}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_interaction_2.png)

*Android Auto* muestra la interfaz de OsmAnd adaptada a la pantalla del sistema multimedia del vehículo. La interacción con el mapa se limita a botones como:

- [Menú de OsmAnd](#destination-points). Contiene una lista de opciones disponibles para asignar un punto final de ruta o un viaje libre.
- [Ajustes](#voice-prompts). Este botón es responsable de: 1. acceder para activar/desactivar las *indicaciones de voz* cuando se está navegando por la ruta seleccionada; 2. mostrar los detalles de la ruta (tiempo y distancia) para la siguiente parada.
- [Buscar](#search). Al tocar el botón, se abre una pantalla con acceso a las funciones de búsqueda.
- [Mi ubicación](../widgets/map-buttons.md#my-location-and-zoom). Mueve la parte visible del mapa para que tu ubicación actual esté en el centro de la pantalla.
- [Zoom](../widgets/map-buttons.md#my-location-and-zoom). Permite acercar y alejar la parte visible del mapa.
- [Brújula](../widgets/map-buttons.md#compass). Muestra cuál de los cuatro modos de orientación del mapa disponibles en la pantalla de tu dispositivo está seleccionado.

## Parámetros de configuración requeridos {#required-setup-parameters}

### Iniciar navegación {#start-navigation}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_start_navigation.png)

Para que OsmAnd funcione en *Android Auto*, debes [conectar](#connection-screen) tu dispositivo Android al sistema multimedia de tu vehículo. El sistema operativo Android debe estar actualizado a la versión 6.0 o superior.

- Para saber cómo conectar y configurar tu dispositivo, visita los sitios web de [**Android Auto**](https://support.google.com/androidauto/answer/6348029?hl=en).

- No todos los vehículos admiten la capacidad de conexión de dispositivos. Consulta la [lista de compatibilidad de *Android Auto*](https://www.android.com/auto/compatibility/#compatibility-vehicles).

- Debes comprar una **versión de pago** de la aplicación o contratar una [suscripción](../purchases/android.md#free-and-paid-features). Comprueba tu suscripción actual aquí: *Menú → Ajustes → Compras*.

- *Android Auto* utiliza el primer [perfil de conducción de OsmAnd](#profile-first) en la lista de perfiles para la navegación. Establece el perfil preferido como el primero, excepto el perfil *Explorar mapa*, que no es leído por *Android Auto*. Para ello, ve a OsmAnd *Menú → Ajustes → Perfiles de aplicación → Editar lista de perfiles* → mueve tu perfil de [**Conducción**](#profile-first) al primer lugar o después del perfil *Explorar mapa*.

- Es importante recordar que *Android Auto* es una aplicación que consume muchos datos, incluidos los datos móviles, y la calidad del sistema puede depender de la calidad de tu conexión y de la velocidad de tu acceso a Internet.

### Perfil primero {#profile-first}

No puedes seleccionar un perfil directamente en *Android Auto* en la pantalla del vehículo.
Si ya tienes un perfil seleccionado en tu dispositivo que corresponde al tipo de vehículo, como *Conducción*, *Camión*, *Coche*, *Motocicleta*, *Ciclomotor*, **la aplicación activará automáticamente** el perfil apropiado cuando te conectes a Android Auto. Por ejemplo, si tienes un perfil de *Camión* seleccionado y tu dispositivo se conecta a **Android Auto**, la aplicación activará ese perfil.

Si no tienes ningún perfil de *Conducción* seleccionado en tu dispositivo que corresponda a tu tipo de vehículo, OsmAnd cambiará automáticamente al perfil de *Conducción*. Esto se hace para proporcionar una navegación básica y para evitar posibles problemas causados por el uso de un perfil incorrecto para un tipo de vehículo específico.

**Por qué es importante:**

1. **Seguridad en la conducción.** Diferentes tipos de transporte requieren diferente información y configuraciones al conducir. Por ejemplo, los conductores de camiones pueden estar limitados en la altura, el peso y el ancho de sus vehículos, por lo que el perfil de *Camión* les proporciona las restricciones y directrices adecuadas. Mientras que los ciclistas y motociclistas necesitan información sobre carriles bici y rutas, sin datos para camiones.

2. **Utilidad y eficiencia.** La navegación debe personalizarse para satisfacer las necesidades de un modo de transporte particular. Esto permite a los usuarios reducir el tiempo que tardan en encontrar rutas óptimas y evitar restricciones de tráfico innecesarias.

3. **Evitar errores.** Cambiar al perfil de *Conducción* cuando no hay un perfil específico para el modo de transporte seleccionado te proporciona acceso constante a las configuraciones e información mínimas necesarias, evitando así posibles errores y malentendidos durante la conducción.

## Puntos de destino {#destination-points}

![Pantalla de Android Auto](@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png)

Puedes seleccionar [PDI](../map/point-layers-on-map.md#points-of-interest-pois), [Favoritos](../personal/favorites.md) o [Marcadores](../personal/markers.md) previamente establecidos y añadidos como punto de destino. También es posible seleccionar una [Ruta](../personal/tracks/manage-tracks.md) grabada o descargada para la ruta, usar la [Búsqueda](../search/index.md), o seleccionar un destino del [Historial](../search/search-history.md) de rutas o realizar un *Viaje libre*.

1. Si deseas una ubicación particular en el mapa como punto final, selecciona la categoría de puntos apropiada de la lista: [PDI](#poi-categories), [Favoritos](#favorites) o [Marcadores de mapa](#map-markers).

    - Todas las categorías pueden contener no más elementos de lista de los que proporciona el sistema multimedia de tu vehículo. Esto significa que la lista en *Android Auto* podría estar incompleta, y todas las demás carpetas solo están disponibles en la aplicación OsmAnd de tu dispositivo.
    - La carpeta [Última modificación](#folder-last-modified) contiene una lista de destinos recientes, ordenados por fecha de adición o modificación.
    - La lista de todas las demás carpetas se ordena por la actualización más reciente; las carpetas nuevas están en la parte superior de la lista. No es posible cambiar su orden manualmente.
    - La lista de puntos dentro de las carpetas se ordena por la distancia a ellos, comenzando por el más cercano. Cada punto tiene un nombre o coordenadas, un icono con forma (color e icono establecidos por defecto o elegidos por ti en la aplicación OsmAnd), y la distancia desde el punto de la ubicación actual hasta él.

2. Selecciona la categoría [Historial](#history) para encontrar uno de los destinos recientes que están almacenados en la memoria del dispositivo.

3. Selecciona [Buscar](#search) para introducir un destino de las categorías de búsqueda disponibles.

4. Elige **Viaje libre** para realizar un viaje sin un punto final especificado.

:::note
Mientras conduces, los puntos seleccionados pueden ser [anunciados](#voice-prompts) cuando te acercas o los pasas. Consulta la configuración de [indicaciones de voz](../navigation/guidance/voice-navigation.md) en el artículo correspondiente para configurar las notificaciones de voz.
:::

### Historial {#history}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_history.png)

En la categoría Historial, puedes seleccionar un destino de una lista de puntos finales. Se ordenan por uso más reciente, comenzando por el más nuevo. Esto puede ser conveniente para un acceso rápido a rutas utilizadas con frecuencia. Para saber cómo usar o eliminar un destino, lee el artículo [Historial de búsqueda](../search/search-history.md).

### Categorías de PDI {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_2.png').default} alt="AA"/></td>
    </tr>
</table>

Los PDI (Puntos de Interés) son un tipo de puntos que identifican lugares u objetos en el mapa que son importantes o de interés para los usuarios. Se resaltan con iconos especiales proporcionados en la [configuración de OsmAnd](../map/point-layers-on-map.md#poi-types) y se clasifican en grupos.

Para construir una ruta a un PDI en *Android Auto*, sigue estos pasos:

1. Selecciona el PDI necesario de la lista de categorías disponibles, o introduce el nombre del PDI usando [Buscar](#search).
2. Al tocar una categoría, se abre la siguiente pantalla con una lista de PDI.
3. Al tocar un elemento de la lista, se abre la pantalla de navegación.
4. OsmAnd calcula la ruta y la muestra en la pantalla de *Android Auto*. Toca el botón **Iniciar** para comenzar a navegar a esa ubicación.
5. Dependiendo de la [configuración](../navigation/guidance/navigation-settings.md) de tu aplicación OsmAnd y de tu vehículo, puedes recibir [indicaciones de voz](#voice-prompts) para guiarte a un destino.

### Favoritos {#favorites}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_4.png').default} alt="AA"/></td>
    </tr>
</table>

*Favoritos* es una de las funciones de OsmAnd que te permite crear una especie de marcadores (notas) en el mapa. Mientras usas *Android Auto*, no puedes añadir o modificar Favoritos, solo usar los existentes. La lista de [Favoritos](../personal/favorites.md#manage-favorites) se puede encontrar en la aplicación OsmAnd *Menú → Mis lugares → Favoritos*. Si quieres usarlos para la navegación, añade los lugares necesarios a los favoritos antes de conectar el dispositivo al sistema multimedia de tu vehículo.

Para crear una ruta a un punto favorito en *Android Auto*, sigue los pasos a continuación:

1. Al tocar una carpeta, se abre la siguiente pantalla con una lista de carpetas favoritas.
2. Al tocar un elemento de la lista, se abre la navegación.

### Marcadores de mapa {#map-markers}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_markers_2.png)

Para definir tu destino final como un Marcador de Mapa, primero necesitas crear el número requerido de marcadores en la aplicación OsmAnd de tu dispositivo antes de conectarlo al sistema. Los marcadores deben estar disponibles en la lista *Menú → Marcador de mapa*. Esto se describe con más detalle en el artículo [Marcadores](../personal/markers.md).

### Rutas {#tracks}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_tracks.png)

Para construir una ruta a un destino, puedes seleccionar una ruta existente disponible en la aplicación OsmAnd. La ruta se puede [descargar](../personal/tracks/manage-tracks.md#import) con antelación, usar como [grabada](../plugins/trip-recording.md) o crear en [Planificar una ruta](../plan-route/create-route.md).

De la lista de rutas en el *Menú → Mis lugares → [Rutas](../personal/tracks/manage-tracks.md)*, selecciona la que necesites antes de conectarte al sistema multimedia del vehículo, y la ruta se construirá hasta el inicio de la ruta o mostrará la dirección actual a lo largo de la ruta.

Las rutas también se pueden seleccionar directamente en la pantalla del vehículo en *Android Auto*. Están organizadas en carpetas que has creado, y para un acceso fácil y rápido a las rutas abiertas recientemente, hay una carpeta especial [Última modificación](#folder-last-modified).

### Buscar {#search}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_search.png)

Ir a Buscar te da acceso rápido a una lista de [historial de destinos](#history) recientes. De manera similar al [menú de navegación](../navigation/setup/route-navigation.md#navigation-menu), donde se recopilan todos los métodos de destino de OsmAnd, como una dirección, PDI o coordenadas.

Puedes usar la herramienta de búsqueda para encontrar el lugar requerido en el mapa para la planificación de rutas desde cualquier categoría de búsqueda disponible.

- [Dirección](../search/search-address.md) - comienza a escribir la dirección en el campo de búsqueda.
- [PDI](../search/search-poi.md) y [PDI personalizado](../search/search-poi.md) - la lista de nombres similares cercanos también mostrará PDI o sus categorías.
- [Búsqueda de coordenadas](../search/search-address#coordinates-search) - introduce las coordenadas para encontrar el punto en el mapa.

### Carpeta Última modificación {#folder-last-modified}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_last_modified.png)

Las categorías de Favoritos y Rutas tienen una carpeta especial *Última modificación*. Dado que la lista en estas categorías puede ser muy grande, ya que contiene todos tus favoritos o rutas existentes, esta carpeta es necesaria para un acceso fácil y rápido a tus destinos más recientes.

## Funciones de navegación {#navigation-features}

Además de las funciones básicas de la aplicación OsmAnd en *Android Auto* que proporcionan una navegación cómoda en tu vehículo, existen una serie de funciones adicionales que mejoran tu experiencia y hacen que la navegación sea más personalizada, cómoda y eficiente.

### Próximo giro e información de ruta {#next-turn--route-info}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_alert_widget.png)

El widget **Próximo giro** muestra la distancia y el tipo de la [próxima maniobra de giro](../widgets/nav-widgets.md#next-turn) y el [nombre de la calle](../widgets/nav-widgets.md#street-name).

La información de la ruta consiste en:

- [tiempo estimado de viaje](../widgets/nav-widgets.md#time-to-destination),
- [hora estimada de llegada](../widgets/nav-widgets.md#time-to-destination),
- [distancia de viaje](../widgets/nav-widgets.md#distance-to-destination).

Cuando está habilitada, [la configuración del widget](#eta-next-stop) (Información de ruta) mostrará los detalles de la ruta para la siguiente parada ([el punto intermedio](../navigation/setup/route-navigation.md#intermediate-destinations)).

### Widget de alerta en pantalla {#screen-alert-widget}

Este widget de información combina tipos de alerta como **Pasos de peatones** y **Límite de velocidad**.

- Los tipos de alertas tienen una apariencia diferente, que depende de la **<Translate android="true" ids="driving_region"/>** y se pueden configurar en *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- En *Android Auto* no es posible configurar la visualización de alertas, debes configurar el widget en la aplicación antes de iniciar la navegación y conectar tu dispositivo al vehículo.
- Para una descripción detallada de los tipos de alerta, consulta [este artículo](../widgets/nav-widgets.md#alert-types).
- Para configurar las alertas en pantalla para los perfiles disponibles, consulta el artículo [Configuración de navegación](../navigation/guidance/navigation-settings.md#screen-alerts).

### Velocímetro {#speedometer}

![Android Auto](@site/static/img/navigation/auto-car/speedometer_3_android.png)

El widget **Velocímetro** es un elemento de interfaz integrado que muestra la *velocidad actual* utilizando datos GPS y el *límite de velocidad* de la [base de datos OSM](https://wiki.openstreetmap.org/wiki/Key:maxspeed) y la [configuración de OsmAnd](../navigation/guidance/voice-navigation.md#speed-limit) en la pantalla del sistema multimedia del vehículo.

- El **widget Velocímetro** es [*dependiente del perfil*](../personal/profiles.md), por lo que si cambias la configuración de un perfil, no se aplicarán a otro.
- No hay opción para personalizar la visualización del **widget Velocímetro** directamente en *Android Auto*, debes configurarlo en la aplicación OsmAnd antes de iniciar la navegación y conectar tu dispositivo al vehículo.
- Para obtener más información sobre cómo añadir y configurar el widget *Velocímetro* en la pantalla, consulta el artículo [Widgets de información](../widgets/info-widgets.md#speedometer).

### Apariencia del mapa (3D) {#map-appearance-3d}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_appearance_3d_2.png)

La aplicación OsmAnd te permite usar la vista de mapa 3D en la pantalla de *Android Auto* para mostrar tu ruta y navegación.

- Para habilitar esta función, debes seleccionar [Versión de renderizado de mapa 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).
- Abre el *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/>* principal directamente en la aplicación OsmAnd.
- Después de configurar los ajustes, el **botón 3D** se mostrará en la pantalla de *Android Auto* cuando la lista de categorías para destinos esté cerrada.
- Puedes alternar entre los modos de mapa 3D / 2D tocando este botón.

### Indicaciones de voz {#voice-prompts}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

Las indicaciones de voz son una de las características más útiles de OsmAnd al navegar con *Android Auto*, ya que te brindan orientación en tiempo real y permiten al conductor mantenerse concentrado en la carretera. Las indicaciones de voz proporcionan instrucciones claras sobre giros, direcciones y otras instrucciones de navegación, lo que proporciona un uso más seguro y cómodo del sistema de navegación.

Para configurar las [indicaciones de voz](../navigation/guidance/voice-navigation.md) según el perfil seleccionado, debes hacerlo antes de iniciar una ruta en la aplicación OsmAnd de tu dispositivo. En *Android Auto*, solo está disponible la configuración para activar o desactivar todas las indicaciones de voz seleccionadas al mismo tiempo (*Botón de configuración → Indicaciones de voz (activar/desactivar)*).

### ETA Próxima Parada {#eta-next-stop}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

En la aplicación OsmAnd, puedes seleccionar uno o más [puntos intermedios](../navigation/setup/route-navigation.md#intermediate-destinations) para la ruta de navegación.

Para activar o desactivar la [**información de ruta** para un punto intermedio (próxima parada)](#next-turn--route-info), ve a *Android Auto (OsmAnd) → Botón de configuración → Mostrar detalles de ruta para la próxima parada → Activar/Desactivar*. Esta opción muestra el tiempo y la distancia hasta la próxima parada en el widget de [*información de ruta*](#next-turn--route-info).

### Modo mapa {#map-mode}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode_2.png').default} alt="AA"/></td>
    </tr>
</table>

*Android Auto* y OsmAnd ofrecen la posibilidad de ajustar el mapa para que coincida con las condiciones de iluminación. En el *modo de mapa diurno*, la combinación de colores permanece brillante y contrastada, lo que facilita la lectura incluso con luz solar intensa. En el *modo nocturno*, los mapas se oscurecen, lo que ayuda al conductor a navegar mejor en la oscuridad.

OsmAnd tiene opciones de [modo de mapa](../map/vector-maps.md#map-mode), pero cuando usas la aplicación en *Android Auto*, estas opciones se ignoran. En su lugar, se utiliza el modo que seleccionaste en la configuración del sistema *Android Auto* para los mapas.

- Selecciona el modo Día o Noche para mantener la visualización del mapa sin cambios.
- Si quieres que el modo de visualización del mapa cambie según la hora del día, selecciona el modo Automático.

<!-- ![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_mode.png) -->

### Pantalla dividida {#split-screen}

![Pantalla de Android Auto](@site/static/img/navigation/auto-car/android_auto_map_split_screen.png)

La aplicación OsmAnd se puede abrir y usar para navegar en *Android Auto* en la pantalla del sistema multimedia del vehículo simultáneamente con aplicaciones de música, mensajes u otras notificaciones. Configuración de la visualización de pantalla dividida en un teléfono conectado a *Android Auto* o en la pantalla del sistema de tu vehículo.

1. Desde la pantalla de inicio, toca Aplicaciones.
2. Toca Ajustes.
3. Busca Ventana múltiple y elige el interruptor.
4. Vuelve a la pantalla de inicio.

<!--
![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_taskbar.png)-->

En la configuración de Android Auto, puedes cambiar la posición de la barra de tareas y el diseño de la pantalla de inicio:

- **Posición de la barra de tareas:**
  Ve a *Configuración de Android Auto → Mostrar controles rápidos para aplicaciones* y desactiva el interruptor. Esto moverá la barra de tareas de la parte inferior al lateral de la pantalla.

- **Diseño de la pantalla de inicio:**
  Ve a *Configuración de Android Auto → Cambiar diseño → Cambiar ubicación del asiento del conductor* para ajustar el diseño según la posición del asiento del conductor.

## Problemas comunes y soluciones {#common-issues-and-solutions}

1. [Problema de orientación del mapa.](../troubleshooting/android_auto.md#map-orientation-issue)
2. [Problema de control de volumen.](../troubleshooting/android_auto.md#volume-control-issue)
3. [Retrasos de ubicación (fallos de ANR).](../troubleshooting/android_auto.md#location-delays-anr-crashes)
4. Preguntas comunes sobre la pantalla de conexión:
    - *¿Por qué no puedo controlar la aplicación desde mi teléfono cuando está conectado a Android Auto?*
        Por razones de seguridad, la pantalla de la aplicación OsmAnd en tu teléfono está bloqueada mientras está conectada a Android Auto. Solo puedes interactuar con la aplicación a través de la pantalla del coche.
    - *¿Puedo desactivar la pantalla bloqueada y usar la aplicación en mi teléfono?*
        No, Android Auto impone esta restricción para evitar distracciones durante la conducción.
    - *¿Qué debo hacer si mi teléfono y la pantalla del coche parecen desconectados?*
        Asegúrate de que tu dispositivo esté conectado correctamente a través de USB o Bluetooth.
        Reinicia el sistema de infoentretenimiento de tu coche y la aplicación OsmAnd si la conexión es inestable.

> *Última actualización: marzo de 2025*