---
source-hash: a2a9e792ab8ee0f2ff158933800298acc210697912d8f514205a33fe11063fb8
sidebar_position: 9
title:  Android Auto
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


## Resumen {#overview}

![Pantalla de Android Auto](@site/static/img/navigation/auto-car/android_auto_overview.png)  

[**Android Auto**](https://www.android.com/auto) es un software desarrollado por Google que permite a los usuarios conectar sus dispositivos Android a sistemas multimedia de vehículos compatibles. *Android Auto* proporciona una versión adaptada y optimizada de la aplicación OsmAnd para un uso seguro mientras se conduce, haciendo más fácil y seguro el acceso a las funciones de navegación de la aplicación.  

La función **Android Auto** solo es compatible cuando se utiliza la aplicación OsmAnd disponible en la [Google Play Store](https://play.google.com/store/apps/dev?id=8483587772816822023).

> **NOTA**: *Android Auto no es una réplica directa de la aplicación móvil OsmAnd. Tiene una interfaz simplificada, centrada en las funciones de navegación esenciales para garantizar una conducción segura. Algunas funciones avanzadas no son compatibles debido a las limitaciones de la plataforma.*


### Pantalla de conexión {#connection-screen}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_connect_screen.png)  

Mientras tu dispositivo está conectado a *Android Auto*, el mapa en la pantalla de la aplicación está bloqueado. Esta es una característica de seguridad intencionada para garantizar que la navegación se controle exclusivamente desde la pantalla del coche, minimizando las distracciones durante la conducción. Consulta las [preguntas comunes](#common-issues-and-solutions) sobre la pantalla de conexión.


### Pantalla de inicio {#landing-screen}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_2.png').default} alt="AA"/></td>
    </tr>
</table>

Cuando abres la aplicación, se muestra una lista de categorías. Para facilitar la navegación, puedes ocultarla tocando el botón en la esquina superior derecha de la pantalla.  

- Toca el botón de menú para ocultar la lista de categorías.
- En la esquina superior derecha de la pantalla, toca el botón junto a los botones de función si quieres volver a la lista.


### Interacción con el mapa {#interaction-with-the-map}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_interaction_2.png)

*Android Auto* muestra la interfaz de OsmAnd adaptada a la pantalla del sistema multimedia del vehículo. La interacción con el mapa se limita a botones como:  

- [Menú de OsmAnd](#destination-points). Contiene una lista de opciones disponibles para asignar un punto final de ruta o un viaje libre.
- [Ajustes](#voice-prompts). Este botón es responsable de: 1. acceder para activar/desactivar las *indicaciones de voz* cuando estás navegando por la ruta seleccionada; 2. mostrar los detalles de la ruta (tiempo y distancia) para la siguiente parada.
- [Buscar](#search). Al tocar el botón se abre una pantalla con acceso a las funciones de búsqueda.
- [Mi ubicación](../widgets/map-buttons.md#my-location-and-zoom). Mueve la parte visible del mapa para que tu ubicación actual esté en el centro de la pantalla.
- [Zoom](../widgets/map-buttons.md#my-location-and-zoom). Permite acercar y alejar la parte visible del mapa. El gesto de pellizco para hacer zoom está disponible para escalar el mapa. Si no es compatible con la unidad principal, el ajuste de zoom se realiza mediante gestos de doble toque y deslizamiento.
- [Brújula](../widgets/map-buttons.md#compass). Muestra cuál de los cuatro modos de orientación del mapa disponibles en la pantalla de tu dispositivo está seleccionado.


## Parámetros de configuración requeridos {#required-setup-parameters}

### Iniciar navegación {#start-navigation}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_start_navigation.png)

Para que OsmAnd funcione en *Android Auto*, debes [conectar](#connection-screen) tu dispositivo Android al sistema multimedia de tu vehículo. El sistema operativo Android debe estar actualizado a la versión 6.0 o superior.

- Para saber cómo conectar y configurar tu dispositivo, visita los sitios web de [**Android Auto**](https://support.google.com/androidauto/answer/6348029?hl=en).  

- No todos los vehículos admiten la capacidad de conexión de dispositivos. Consulta la [lista para *Android Auto*](https://www.android.com/auto/compatibility/#compatibility-vehicles).  

- Necesitas comprar una **versión de pago** de la aplicación o contratar una [suscripción](../purchases/android.md#free-and-paid-features). Comprueba tu suscripción actual aquí *Menú → Ajustes → Compras*.  

- *Android Auto* utiliza para la navegación el primer [perfil de Conducción de OsmAnd](#profile-first) en la lista de Perfiles. Establece el perfil preferido en primer lugar, excepto el perfil *Explorar mapa*, que no es leído por *Android Auto*. Para ello, ve a OsmAnd *Menú → Ajustes → Perfiles de la aplicación → Editar lista de perfiles* → mueve tu perfil de [**Conducción**](#profile-first) al primer lugar o después del perfil *Explorar mapa*.  

- Es importante recordar que *Android Auto* es una aplicación que consume muchos datos, incluidos los datos móviles, y la calidad del sistema puede depender de la calidad de tu conexión y de la velocidad de tu acceso a Internet.

### Primer perfil {#profile-first}

No puedes seleccionar un perfil directamente en *Android Auto* en la pantalla del vehículo.  
Si ya tienes un perfil seleccionado en tu dispositivo que corresponde al tipo de vehículo, como *Conducción*, *Camión*, *Coche*, *Motocicleta*, *Ciclomotor*, **la aplicación se activará automáticamente** el perfil apropiado cuando te conectes a Android Auto. Por ejemplo, si tienes un perfil de *Camión* seleccionado y tu dispositivo se conecta a **Android Auto**, la aplicación activará ese perfil.

Si no tienes ningún perfil de *Conducción* seleccionado en tu dispositivo que corresponda a tu tipo de vehículo, entonces OsmAnd cambiará automáticamente al perfil de *Conducción*. Esto se hace para proporcionar una navegación básica y para evitar posibles problemas causados por el uso de un perfil incorrecto para un tipo de vehículo específico.

**Por qué es importante:**

1. **Seguridad en la conducción.** Los diferentes tipos de transporte requieren información y ajustes diferentes al conducir. Por ejemplo, los conductores de camiones pueden estar limitados en la altura, el peso y la anchura de sus vehículos, por lo que el perfil *Camión* les proporciona las restricciones y directrices adecuadas. Mientras que los ciclistas y motociclistas necesitan información sobre carriles bici y rutas, sin datos para camiones.

2. **Utilidad y Eficiencia.** La navegación debe personalizarse para satisfacer las necesidades de un modo de transporte concreto. Esto permite a los usuarios reducir el tiempo que tardan en encontrar rutas óptimas y evitar restricciones de tráfico innecesarias.

3. **Evitar errores.** Cambiar al perfil de *Conducción* cuando no hay un perfil específico para el modo de transporte seleccionado te proporciona acceso constante a los ajustes e información mínimos necesarios, evitando así posibles errores y malentendidos durante la conducción.  


## Puntos de destino {#destination-points}

![Pantalla de Android Auto](@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png)

Puedes seleccionar [PDI](../map/point-layers-on-map.md#points-of-interest-pois) preestablecidos y añadidos, o [Favoritos](../personal/favorites.md), o [Marcadores](../personal/markers.md) como punto de destino. También es posible seleccionar una [Pista](../personal/tracks/manage-tracks.md) grabada o descargada para el trayecto, utilizar la [Búsqueda](../search/index.md), o seleccionar un destino del [Historial](../search/search-history.md) de rutas o realizar un *Viaje libre*.

1. Si deseas una ubicación concreta del mapa como punto final, selecciona la categoría de puntos adecuada de la lista, [PDI](#poi-categories), [Favoritos](#favorites), o [Marcadores de mapa](#map-markers).  
  
    - Todas las categorías no pueden contener más elementos de la lista que los que proporciona el sistema multimedia de tu vehículo. Esto significa que la lista en *Android Auto* podría estar incompleta, y todas las demás carpetas solo están disponibles en la aplicación OsmAnd de tu dispositivo.
    - La carpeta [Última modificación](#folder-last-modified) contiene una lista de destinos recientes, ordenados por fecha de adición o cambio.
    - La lista de todas las demás carpetas se ordena por la actualización más reciente, las carpetas nuevas están en la parte superior de la lista. No es posible cambiar su orden manualmente.
    - La lista de puntos dentro de las carpetas se ordena por la distancia a ellos, empezando por el más cercano. Cada punto tiene un nombre o coordenadas, un icono con forma (color e icono establecidos por defecto o elegidos por ti en la aplicación OsmAnd), y la distancia desde el punto de la ubicación actual hasta él.  

2. Selecciona la categoría [Historial](#history) para encontrar uno de los destinos recientes que están almacenados en la memoria del dispositivo.  

3. Selecciona [Buscar](#search) para introducir un destino de las categorías de búsqueda disponibles.  

4. Elige **Viaje libre** para realizar un trayecto sin un punto final especificado.

:::note
Mientras conduces, los puntos seleccionados pueden ser [anunciados](#voice-prompts) cuando te acerques o pases por ellos. Consulta los ajustes de [Indicaciones de voz](../navigation/guidance/voice-navigation.md) en el artículo correspondiente para configurar las notificaciones de voz.
:::  


### Historial {#history}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_history.png)  

En la categoría Historial, puedes seleccionar un destino de una lista de puntos finales. Están ordenados por uso más reciente, empezando por el más nuevo. Esto puede ser conveniente para un acceso rápido a las rutas de uso frecuente. Para saber cómo utilizar o eliminar un destino, lee el artículo [Historial de búsqueda](../search/search-history.md).  


### Categorías de PDI {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_2.png').default} alt="AA"/></td>
    </tr>
</table>

Los PDI (Puntos de Interés) son un tipo de puntos que identifican lugares u objetos en el mapa que son importantes o de interés para los usuarios. Se resaltan con iconos especiales proporcionados en los [ajustes de OsmAnd](../map/point-layers-on-map.md#poi-types) y se ordenan en grupos.  

Para construir una ruta a un PDI en *Android Auto*, sigue estos pasos:

1. Selecciona el PDI necesario de la lista de categorías disponibles, o introduce el nombre del PDI usando [Buscar](#search).
2. Al tocar una categoría se abre la siguiente pantalla con una lista de PDI.
3. Al tocar un elemento de la lista se abre la pantalla de navegación.
4. OsmAnd calcula la ruta y la muestra en la pantalla de *Android Auto*. Toca el botón **Iniciar** para empezar a navegar hacia esa ubicación.
5. Dependiendo de los [ajustes](../navigation/guidance/navigation-settings.md) de tu aplicación OsmAnd y de tu vehículo, puedes recibir [indicaciones de voz](#voice-prompts) para guiarte hasta un destino.  


### Favoritos {#favorites}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_4.png').default} alt="AA"/></td>
    </tr>
</table>  

*Favoritos* es una de las funciones de OsmAnd que te permite hacer una especie de marcadores (notas) en el mapa. Mientras usas *Android Auto*, no puedes añadir o modificar Favoritos, solo usar los existentes. La lista de [Favoritos](../personal/favorites.md#manage-favorites) se puede encontrar en la aplicación OsmAnd *Menú → Mis lugares → Favoritos*. Si quieres usarlos para la navegación, añade los lugares necesarios en los favoritos antes de conectar el dispositivo al sistema multimedia de tu vehículo.  

Para crear una ruta a un punto favorito en *Android Auto*, sigue los pasos a continuación:  

1. Al tocar una carpeta se abre la siguiente pantalla con una lista de carpetas de favoritos.
2. Al tocar un elemento de la lista se abre la navegación.


### Marcadores de mapa {#map-markers}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_markers_2.png)

Para definir tu destino final como un Marcador de mapa, primero necesitas crear el número requerido de marcadores en la aplicación OsmAnd en tu dispositivo antes de conectarlo al sistema. Los marcadores deben estar disponibles en la lista *Menú → Marcador de mapa*. Esto se describe con más detalle en el artículo [Marcadores](../personal/markers.md).


### Pistas {#tracks}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_tracks.png)  

Para construir una ruta a un destino, puedes seleccionar una pista existente disponible en la aplicación OsmAnd. La pista puede ser [descargada](../personal/tracks/manage-tracks.md#import) con antelación, usada como [grabada](../plugins/trip-recording.md) o creada en [Planificar una ruta](../plan-route/create-route.md).  

De la lista de pistas en *Menú → Mis lugares → [Pistas](../personal/tracks/manage-tracks.md)*, selecciona la requerida antes de conectarte al sistema multimedia del vehículo, y la ruta se construirá hasta el inicio de la pista o mostrará la dirección actual a lo largo de la pista.

Las pistas también se pueden seleccionar directamente en la pantalla del vehículo en *Android Auto*. Están organizadas en carpetas que has creado, y para un acceso fácil y rápido a las pistas abiertas recientemente, hay una carpeta especial [Última modificación](#folder-last-modified).  


### Buscar {#search}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_search.png)

Ir a Buscar te da acceso rápido a una lista del [historial de destinos](#history) reciente. De forma similar al [Menú de navegación](../navigation/setup/route-navigation.md#navigation-menu), donde se recopilan todos los métodos de destino de OsmAnd, como una dirección, PDI o coordenadas.

Puedes usar la herramienta de Búsqueda para encontrar el lugar requerido en el mapa para la planificación de la ruta desde cualquier categoría de búsqueda disponible.

- [Dirección](../search/search-address.md) - empieza a escribir la dirección en el campo de búsqueda.
- [PDI](../search/search-poi.md) y [PDI personalizado](../search/search-poi.md) - la lista de nombres similares cercanos también mostrará PDI o sus categorías.
- [Búsqueda por coordenadas](../search/search-address#coordinates-search) - introduce las coordenadas para encontrar el punto en el mapa.  


### Carpeta Última modificación {#folder-last-modified}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_last_modified.png)  


Las categorías Favoritos y Pistas tienen una carpeta especial *Última modificación*. Dado que la lista en estas categorías puede ser muy grande ya que contiene todos tus favoritos o pistas existentes, esta carpeta es necesaria para un acceso fácil y rápido a tus destinos más recientes.


## Funciones de navegación {#navigation-features}

Además de las características básicas de la aplicación OsmAnd en *Android Auto* que proporcionan una navegación conveniente en tu vehículo, hay una serie de características adicionales que mejoran tu experiencia y hacen la navegación más personalizada, cómoda y eficiente.  


### Próximo giro {#next-turn}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_alert_widget.png)

El widget **Próximo giro** muestra la distancia y el tipo de la [próxima maniobra de giro](../widgets/nav-widgets.md#next-turn) y el [nombre de la calle](../widgets/nav-widgets.md#street-name).

### Información de la ruta {#route-info}

La información de la ruta consiste en:

- [Tiempo estimado de viaje](../widgets/nav-widgets.md#time-to-destination),
- [Hora estimada de llegada](../widgets/nav-widgets.md#time-to-destination),
- [Distancia de viaje](../widgets/nav-widgets.md#distance-to-destination).

Cuando está activado, **[el ajuste del widget](#eta-next-stop)** (Información de la ruta) mostrará los detalles de la ruta para la siguiente parada ([el punto intermedio](../navigation/setup/route-navigation.md#intermediate-destinations)).


### Alertas de navegación {#navigation-alerts}

![Alerta faltante](@site/static/img/navigation/auto-car/missing_alert.png) ![Alerta privada](@site/static/img/navigation/auto-car/private_alert.png)

Las alertas útiles se muestran automáticamente antes de iniciar la navegación si la ruta no se puede construir de manera normal. Esto evita que la ruta se quede cargando y te permite elegir rápidamente cómo continuar.

**Mapas faltantes u obsoletos**

Si tu destino está ubicado fuera de las áreas de mapa descargadas, se muestra un mensaje y puedes elegir una de las siguientes acciones:
- **Usar mapas descargados**. La ruta se construye utilizando solo los mapas ya almacenados en tu dispositivo. (La ruta puede ser incompleta si los datos de mapa requeridos no están disponibles.)
- **Ver en el teléfono**. Se abre la pantalla de descarga de mapas en tu smartphone, donde se pueden descargar las regiones necesarias. Después de la descarga, el cálculo de la ruta se reinicia automáticamente.

Esta alerta se muestra directamente en la pantalla del vehículo, de la misma manera que en la aplicación móvil.

**Advertencia de acceso privado**

Si tu destino está en un área privada o de acceso restringido, se muestra una advertencia y puedes elegir:
- **Permitir**. La navegación continúa utilizando carreteras privadas si está permitido o si tienes acceso.
- **Cancelar**. La solicitud de navegación se descarta y se restaura la pantalla anterior.


### Widget de alertas en pantalla {#screen-alert-widget}

Este widget de información combina tipos de alerta como **Pasos de peatones** y **Límite de velocidad**.

- Los tipos de alertas tienen una apariencia diferente, que depende de la **<Translate android="true" ids="driving_region"/>** y se puede configurar en *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- En *Android Auto* no es posible configurar la visualización de alertas, necesitas configurar el widget en la aplicación antes de iniciar la navegación y conectar tu dispositivo al vehículo.
- Para una descripción detallada de los tipos de alerta, consulta [este artículo](../widgets/nav-widgets.md#alert-types).
- Para configurar las alertas en pantalla para los perfiles disponibles, consulta el artículo [Ajustes de navegación](../navigation/guidance/navigation-settings.md#screen-alerts).  


### Velocímetro {#speedometer}

![Android Auto](@site/static/img/navigation/auto-car/speedometer_3_android.png)

El widget **Velocímetro** es un elemento de interfaz integrado que muestra la *velocidad actual* utilizando datos GPS y el *límite de velocidad* de la [base de datos de OSM](https://wiki.openstreetmap.org/wiki/Key:maxspeed) y los [ajustes de OsmAnd](../navigation/guidance/voice-navigation.md#speed-limit) en la pantalla del sistema multimedia del vehículo.

- El **widget Velocímetro** es [*dependiente del perfil*](../personal/profiles.md), por lo que si cambias los ajustes para un perfil, no se aplicarán a otro.
- No hay opción para personalizar la visualización del **widget Velocímetro** directamente en *Android Auto*, necesitas configurarlo en la aplicación OsmAnd antes de iniciar la navegación y conectar tu dispositivo al vehículo.
- Para más información sobre cómo añadir y configurar el widget *Velocímetro* en la pantalla, por favor lee el [artículo de widgets de información](../widgets/info-widgets.md#speedometer).


### Apariencia del mapa (3D) {#map-appearance-3d}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_appearance_3d_2.png)

La aplicación OsmAnd te permite usar la vista de mapa 3D en la pantalla de *Android Auto* para mostrar tu ruta y navegación.

- Para habilitar esta función, necesitas seleccionar [Motor de renderizado del mapa Versión 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).
- Abre el *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/>* principal directamente en la aplicación OsmAnd.
- Después de configurar los ajustes, el **botón 3D** se mostrará en la pantalla de *Android Auto* cuando la lista de categorías para destinos esté cerrada.
- Puedes cambiar entre los modos de mapa 3D / 2D tocando este botón.

### Finalizar navegación {#finish-navigation}

![Finalizar navegación](@site/static/img/navigation/auto-car/finish_navigation.png)

Cuando la navegación se completa en Android Auto, aparece un diálogo especial de Finalizar Navegación en la pantalla del vehículo. Utiliza el mismo algoritmo de detección de llegada que la aplicación móvil y te ayuda a finalizar rápidamente tu viaje o encontrar un lugar de estacionamiento cercano.

Opciones disponibles:
- **Marcar como ubicación de estacionamiento**. Guarda tu posición actual como una ubicación de estacionamiento y coloca un marcador de estacionamiento en el mapa.
- **Buscar estacionamiento**. Abre la pantalla de Búsqueda con la categoría de Estacionamiento preseleccionada, para que puedas localizar fácilmente áreas de estacionamiento cercanas.
- **Recalcular ruta**. Construye una nueva ruta a tu destino original si te detuviste antes o deseas continuar conduciendo.
- **Finalizar navegación**. Termina la navegación por completo y devuelve OsmAnd a la vista predeterminada del mapa.

Comportamiento al desconectarse de Android Auto:
- Si tu teléfono se desconecta cuando el vehículo ya está a menos de 100 m del destino, OsmAnd detiene automáticamente la navegación, cambia de vuelta al perfil predeterminado y no aparece ninguna notificación de llegada en la pantalla del teléfono.
- Si la desconexión ocurre mientras estás parado o te mueves más lento que 1 m/s (por ejemplo, en una gasolinera), OsmAnd pausa temporalmente la navegación. Se reanuda automáticamente cuando el dispositivo se reconecta a Android Auto.

Esta actualización también asegura que las sesiones de Android Auto ahora se cierren correctamente, evitando el uso innecesario de batería y deteniendo las notificaciones de “viaje en progreso” una vez que finaliza la navegación.


## Ajustes {#settings}

### Indicaciones de voz {#voice-prompts}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

Las indicaciones de voz son una de las características más útiles de OsmAnd mientras se navega para *Android Auto*, dándote guía en tiempo real y permitiendo al conductor mantenerse concentrado en la carretera. Las indicaciones de voz proporcionan instrucciones claras sobre giros, direcciones y otras instrucciones de navegación, proporcionando un uso más seguro y cómodo del sistema de navegación.  

Para configurar las [indicaciones de voz](../navigation/guidance/voice-navigation.md) según el perfil seleccionado, tienes que hacerlo antes de iniciar una ruta en la aplicación OsmAnd de tu dispositivo. En *Android Auto*, solo está disponible el ajuste para activar o desactivar todas las indicaciones de voz seleccionadas al mismo tiempo (*Botón de Ajustes → Indicaciones de voz (activar/desactivar)*).  


### ETA Próxima parada {#eta-next-stop}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

En la aplicación OsmAnd, puedes seleccionar uno o más [puntos intermedios](../navigation/setup/route-navigation.md#intermediate-destinations) para la ruta de navegación.

Para activar o desactivar la [**Información de ruta** para un punto intermedio (próxima parada)](#next-turn), ve a *Android Auto (OsmAnd)→ Botón de Ajustes → Mostrar detalles de la ruta para la próxima parada → Activar/Desactivar*. Esta opción muestra el tiempo y la distancia hasta la siguiente parada en el [*widget de Información de ruta*](#route-info).


### Modo de mapa {#map-mode}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode_2.png').default} alt="AA"/></td>
    </tr>
</table>

*Android Auto* y OsmAnd ofrecen la posibilidad de ajustar el mapa para que coincida con las condiciones de iluminación. En el *Modo de mapa diurno*, la combinación de colores permanece brillante y contrastada, lo que facilita la lectura incluso con luz solar intensa. En el *Modo nocturno*, los mapas se vuelven más oscuros, lo que ayuda al conductor a navegar mejor en la oscuridad.  

OsmAnd tiene opciones de [modo de mapa](../map/vector-maps.md#map-mode), pero cuando usas la aplicación en *Android Auto*, estas opciones se ignoran. En su lugar, se utiliza el modo que seleccionaste en los ajustes del sistema *Android Auto* para los mapas.

- Selecciona el modo Día o el modo Noche para mantener la visualización del mapa sin cambios.
- Si quieres que el modo de visualización del mapa cambie dependiendo de la hora del día, selecciona el modo Automático.  

<!-- ![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_mode.png) -->


### Pantalla dividida {#split-screen}

![Pantalla de Android Auto](@site/static/img/navigation/auto-car/android_auto_map_split_screen.png)

La aplicación OsmAnd se puede abrir y utilizar para navegar en *Android Auto* en la pantalla del sistema multimedia del vehículo simultáneamente con aplicaciones de música, mensajes u otras notificaciones. Configuración de la visualización de pantalla dividida en un teléfono conectado a *Android Auto* o en la pantalla del sistema de tu vehículo.  

1. Desde la pantalla de inicio, toca Aplicaciones.
2. Toca Ajustes.
3. Busca Multiventana y elige el interruptor.
4. Vuelve a la pantalla de inicio.  

<!--
![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_taskbar.png)-->


En los ajustes de Android Auto, puedes cambiar la posición de la barra de tareas y el diseño de la pantalla de inicio:

- **Posición de la barra de tareas:**  
  Ve a *Ajustes de Android Auto → Mostrar controles rápidos para Aplicaciones* y desactiva el interruptor. Esto moverá la barra de tareas de la parte inferior al lateral de la pantalla.

- **Diseño de la pantalla de inicio:**  
  Ve a *Ajustes de Android Auto → Cambiar diseño → Cambiar ubicación del asiento del conductor* para ajustar el diseño según la posición del asiento del conductor.


## Problemas comunes y soluciones {#common-issues-and-solutions}

1. [Problema de orientación del mapa.](../troubleshooting/android_auto.md#map-orientation-issue)
2. [Problema de control de volumen.](../troubleshooting/android_auto.md#volume-control-issue)
3. [Retrasos en la ubicación (fallos ANR).](../troubleshooting/android_auto.md#location-delays-anr-crashes)
4. Preguntas comunes sobre la pantalla de conexión:
    - *¿Por qué no puedo controlar la aplicación desde mi teléfono cuando está conectado a Android Auto?*  
        Por razones de seguridad, la pantalla de la aplicación OsmAnd en tu teléfono se bloquea mientras está conectada a Android Auto. Solo puedes interactuar con la aplicación a través de la pantalla del coche.
    - *¿Puedo desactivar la pantalla bloqueada y usar la aplicación en mi teléfono?*  
        No, Android Auto impone esta restricción para evitar distracciones mientras se conduce.
    - *¿Qué debo hacer si mi teléfono y la pantalla del coche parecen desconectados?*  
        Asegúrate de que tu dispositivo esté correctamente conectado a través de USB o Bluetooth.  
        Reinicia el sistema de infoentretenimiento de tu coche y la aplicación OsmAnd si la conexión es inestable.