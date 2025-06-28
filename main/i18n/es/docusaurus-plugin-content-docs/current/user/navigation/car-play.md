---
source-hash: ab1bf0f074bc95cb4e2f827ac1233fdf86d268b226686d37920e9eac0ea746ec
sidebar_position: 10
title: CarPlay
android: false
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

## Resumen {#overview}

Conducir un vehículo y usar el teléfono o la tableta al mismo tiempo suele estar prohibido por ley por razones de seguridad. [***CarPlay***](https://www.apple.com/ios/carplay/) es un software que proporciona una versión adaptada y optimizada de la aplicación OsmAnd para un uso seguro durante la conducción, lo que facilita y asegura el acceso a las funciones de navegación de la aplicación.

Para usar *CarPlay* en la pantalla de tu vehículo, sigue estos pasos:

1. *CarPlay* no está disponible en todos los países. Asegúrate de que sea compatible en tu [país o región](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay) y de que *CarPlay* sea compatible con el [modelo de tu vehículo](https://www.apple.com/ios/carplay/available-models/).
2. [Conecta tu dispositivo](https://support.apple.com/en-gb/HT203412) al sistema multimedia de tu vehículo usando un puerto USB o de forma inalámbrica con Wi-Fi o Bluetooth. Al conectarte por primera vez, es posible que necesites permiso para usar *CarPlay* en tu dispositivo.
3. Una vez conectado, la *interfaz de CarPlay* aparecerá automáticamente en la pantalla de tu vehículo con todas las aplicaciones disponibles. Si la *pantalla de inicio de CarPlay* no aparece, selecciona el *logotipo de CarPlay* en la pantalla del vehículo.

#### Interfaz de CarPlay {#carplay-interface}

*CarPlay* **no es una replicación directa** de la aplicación móvil OsmAnd. Tiene una interfaz simplificada, que se centra en las funciones esenciales de navegación para garantizar una conducción segura. Algunas funciones avanzadas no son compatibles debido a las limitaciones de la plataforma.

### Pantalla de conexión {#connection-screen}

![CarPlay](@site/static/img/navigation/auto-car/car_play_connect_screen.png)

Mientras tu dispositivo está conectado a *CarPlay*, el mapa en la pantalla de la aplicación está bloqueado. Esta es una característica de seguridad intencional para garantizar que la navegación se controle exclusivamente desde la pantalla del automóvil, minimizando las distracciones durante la conducción. Consulta las [preguntas frecuentes](#common-issues-and-solutions) sobre la pantalla de conexión.

### Posición de la ubicación en CarPlay {#location-position-in-carplay}

La aplicación OsmAnd para *CarPlay* te permite ajustar la posición del indicador de ubicación actual en la pantalla para evitar que se superponga con la ruta y otros detalles importantes del mapa.

**Cómo cambiar la posición del indicador:**

- Ve a *Menú → Configurar pantalla → Otros → [Posición de la ubicación en pantalla](../widgets/configure-screen.md#display-position-location-position-on-screen)*.
- Selecciona tu ubicación preferida:
    - **Automático (predeterminado)**. La aplicación cambia automáticamente la posición del indicador para el modo de navegación o el movimiento libre.
    - **Centro**. El indicador se coloca en el centro de la pantalla, adecuado para la navegación estándar.
    - **Abajo**. El indicador se posiciona más cerca de la parte inferior de la pantalla, lo que facilita la observación de objetos circundantes e intersecciones complejas.

### Interacción con el mapa {#interaction-with-the-map}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-Interaction(1).png)

*CarPlay* muestra la interfaz de OsmAnd adaptada a la pantalla del sistema multimedia del vehículo. La interacción con el mapa se limita a:

- [Mi ubicación](../widgets/map-buttons.md#my-location-and-zoom). Mueve la parte visible del mapa para que tu ubicación actual esté en el centro de la pantalla.
- [Zoom](../widgets/map-buttons.md#my-location-and-zoom). Te permite acercar y alejar la parte visible del mapa.

## Parámetros de configuración requeridos {#required-setup-parameters}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-select-point-1.png)

- Primero, debes seleccionar y configurar el perfil que se usará al conectarte a *CarPlay*. Puedes leer cómo configurar un perfil en el artículo [Perfiles (Configuración)](../personal/profiles).
    - Un perfil conveniente para usar *CarPlay* puede ser *Conducción*, y el tipo de enrutamiento puede ser [Enrutamiento de automóvil](../navigation/routing/car-based-routing.md).
    - OsmAnd tiene un elemento separado [Perfil de CarPlay](#carplay-profile) para un acceso rápido a la lista de perfiles disponibles para conectarse a *CarPlay*.
- Para que OsmAnd funcione, [conecta tu dispositivo iOS](#overview) al sistema multimedia del vehículo. Para obtener más información sobre cómo conectar y configurar tu dispositivo, puedes visitar el sitio web de [**CarPlay**](https://support.apple.com/en-us/HT205634).
- Debes tener una de las [funciones de pago o suscripción de OsmAnd](../purchases/ios#free-and-paid-features). Compruébalo aquí *Menú → Ajustes → Compras*.
- Una vez conectado, puedes establecer un destino e iniciar la navegación de OsmAnd en *CarPlay*.

:::note
Es posible que necesites una conexión a Internet para usar OsmAnd en *CarPlay*. Si tu dispositivo tiene acceso limitado a Internet, puedes [*precargar o crear rutas*](../personal/tracks/manage-tracks.md) y usarlas sin Internet.
:::

### Iniciar navegación {#start-navigation}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-start(1).png)

Para usar la versión de iOS de la aplicación OsmAnd en *CarPlay*, debes comprar una [versión de pago de la aplicación o suscribirte](../purchases/ios#free-and-paid-features).

1. Para crear una ruta, debes elegir el [punto final de la ruta](#select-a-route-endpoint) en la *pantalla de CarPlay* o en la [aplicación OsmAnd](../navigation/setup/route-navigation.md).
2. Puedes usar [indicaciones de voz](#voice-prompts) para escuchar las direcciones o mensajes sobre problemas en la carretera.
3. Después de seleccionar una ubicación, presiona **Iniciar** para seguir la ruta.
4. Mientras conduces, la pantalla del vehículo mostrará información de OsmAnd sobre tu ubicación actual en el mapa, las indicaciones de conducción, la distancia hasta el siguiente giro, las líneas, la hora de llegada y la distancia hasta tu destino.
    ![CarPlay screen](@site/static/img/navigation/auto-car/car_play_navmode.png)
5. Si deseas cambiar tu ruta o seleccionar una ubicación diferente, puedes presionar el botón correspondiente en la pantalla.
6. Una vez que hayas completado tu ruta, puedes desactivar *CarPlay* desconectando el dispositivo del sistema multimedia de tu vehículo.

:::note
Todas las categorías para la selección del **punto final de la ruta**, *[Historial](#history), [PDI](#poi-categories), [Marcadores](#map-markers), [Búsqueda](#search), [Favoritos](#favorites) y [Rutas](#tracks)* pueden contener no más elementos de lista de los que proporciona el sistema multimedia de tu vehículo. Normalmente, en la mayoría de los vehículos, las listas se limitan dinámicamente a 12 o 24 elementos. Esto significa que la lista en *CarPlay* puede no estar completa. El número total de elementos y el número real de elementos mostrados se indica debajo del nombre de la carpeta.
:::

### Perfil de CarPlay {#carplay-profile}

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*
![General Settings Default profile Android](@site/static/img/personal/profiles/CarPlay_ios.png)

**El perfil de CarPlay** es un perfil específico en la aplicación OsmAnd para un uso conveniente del sistema de audio y video de tu automóvil para una visualización posterior de estos datos en tu teléfono.

Este perfil se utiliza mientras tu dispositivo esté conectado a *CarPlay*. Toca el campo *Perfil de CarPlay* en el menú *Configuración de OsmAnd* y de la lista de [perfiles habilitados para usar](../personal/profiles.md) selecciona el perfil con el que se activará *CarPlay*.

No puedes seleccionar un perfil directamente en *CarPlay* desde la pantalla del vehículo. Primero, selecciona el perfil requerido en tu dispositivo y adjúntale el *perfil de CarPlay*. Debes seleccionar un perfil que corresponda al tipo de vehículo, como *Conducción*, *Camión*, *Coche*, *Motocicleta* o *Ciclomotor*. **La aplicación se activará automáticamente** el *perfil de CarPlay* cuando se conecte a un vehículo.

**Por qué es importante seleccionar el perfil adecuado para tu tipo de vehículo.**

- **Seguridad en la conducción.** Los diferentes tipos de transporte requieren información y configuraciones diferentes al conducir. Por ejemplo, los conductores de camiones pueden tener limitaciones en la altura, el peso y el ancho de sus vehículos, por lo que el perfil *Camión* les proporciona las restricciones y directrices adecuadas. Mientras que los ciclistas y motociclistas necesitan información sobre carriles para bicicletas y rutas, sin datos para camiones.
- **Utilidad y eficiencia.** La navegación debe personalizarse para satisfacer las necesidades de un modo de transporte particular. Esto permite a los usuarios reducir el tiempo que lleva encontrar rutas óptimas y evitar restricciones de tráfico innecesarias.

## Seleccionar un punto final de ruta {#select-a-route-endpoint}

Puedes seleccionar [PDI](../map/point-layers-on-map.md#points-of-interest-pois) o [Favoritos](../personal/favorites.md) o [Marcadores](../personal/markers.md) preestablecidos y añadidos previamente como punto de destino. También es posible seleccionar una [Ruta](../personal/tracks/index.md) grabada o descargada para la ruta, usar la [Búsqueda](../search/index.md) o seleccionar un destino del [Historial](../search/search-history.md) de rutas.

1. Si deseas una ubicación particular en el mapa como punto final, selecciona la categoría de puntos apropiada de la lista, [PDI](#poi-categories), [Favoritos](#favorites) o [Marcadores de mapa](#map-markers).

    - Todas las categorías pueden contener no más elementos de lista de los que proporciona el sistema multimedia de tu vehículo. Esto significa que la lista en *CarPlay* podría estar incompleta, y todas las demás carpetas solo están disponibles en la aplicación OsmAnd en tu dispositivo.
    - La carpeta [Última modificación](#folder-last-modified) contiene una lista de destinos recientes, ordenados por fecha de adición o modificación.
    - La lista de todas las demás carpetas está ordenada por la actualización más reciente, las carpetas nuevas están en la parte superior de la lista. No es posible cambiar su orden manualmente.
    - La lista de puntos dentro de las carpetas está ordenada por la distancia a ellos, comenzando por el más cercano. Cada punto tiene un nombre o coordenadas, un icono con forma (color e icono establecidos por defecto o elegidos por ti en la aplicación OsmAnd), y la distancia desde el punto de la ubicación actual hasta él.
2. Selecciona la categoría [Historial](#history) para encontrar uno de los destinos recientes que están almacenados en la memoria del dispositivo.
3. Selecciona [Buscar](#search) para introducir un destino de las categorías de búsqueda disponibles.

:::note
Mientras conduces, los puntos seleccionados pueden ser [anunciados](#voice-prompts) cuando te acercas o los pasas. Consulta la configuración de [Indicaciones de voz](../navigation/guidance/voice-navigation.md) en el artículo correspondiente para configurar las notificaciones de voz.
:::

### Historial {#history}

![CarPlay screen](@site/static/img/navigation/auto-car/car_play_history.png)

En la **categoría Historial**, puedes seleccionar un destino de una lista de puntos finales.

- Están ordenados por uso más reciente, comenzando por los más nuevos.
- Esto puede ser conveniente para un acceso rápido a rutas usadas con frecuencia.
- Para saber cómo usar o eliminar un destino, lee el artículo [Historial de búsqueda](../search/search-history.md).

### Categorías de PDI {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi_1.png').default} alt="CP"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi.png').default} alt="CP"/></td>
    </tr>
</table>

Los *PDI (Puntos de Interés)* son un tipo de puntos que identifican lugares u objetos en el mapa que son importantes o de interés para los usuarios. Se resaltan con iconos especiales proporcionados en la [configuración de OsmAnd](../map/point-layers-on-map.md#poi-types) y se clasifican en grupos.

Para construir una ruta a un *PDI* en *CarPlay*, sigue estos pasos:

1. Selecciona el *PDI* necesario de la lista de categorías disponibles, o introduce el nombre del PDI usando [Buscar](#search).
2. OsmAnd calcula la ruta y la muestra en la *pantalla de CarPlay*. Toca el botón **Iniciar** para comenzar a navegar a esa ubicación.
3. Dependiendo de la configuración de tu aplicación OsmAnd y de tu vehículo, puedes recibir [indicaciones de voz](#voice-prompts) para guiarte a tu destino.
4. Cuando llegues a la ubicación, la aplicación te notificará que has llegado al *PDI*.

### Favoritos {#favorites}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-favorites(1).png)

**Favoritos** es una de las características de OsmAnd que te permite hacer una especie de notas en el mapa.

- Mientras usas **CarPlay**, no puedes añadir ni modificar *Favoritos*, solo usar los existentes.
- La lista de [Favoritos](../personal/favorites.md#manage-favorites) se puede encontrar en la aplicación OsmAnd *Menú → Mis lugares → Favoritos*.
- Si quieres usarlos para la navegación, configura todo lo que necesites antes de conectar el dispositivo a tu sistema multimedia del vehículo.

### Marcadores de mapa {#map-markers}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-markers(1).png)

- Para definir tu destino final como un *marcador de mapa*, primero debes crear el número requerido de marcadores en la aplicación OsmAnd en tu dispositivo antes de conectarlo al sistema multimedia del vehículo.
- Los *marcadores* deben estar disponibles en la lista *Menú → Marcador de mapa*.
- Esto se describe con más detalle en el artículo [Marcadores](../personal/markers.md).

### Rutas {#tracks}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-tracks(1).png)

Para construir una ruta a un destino, puedes seleccionar una ruta existente disponible en la aplicación OsmAnd. La ruta se puede [descargar](../personal/tracks/manage-tracks.md#import) con antelación, usarla como [grabada](../plugins/trip-recording.md) o crearla en [Planificar una ruta](../plan-route/create-route.md).

De la lista de rutas en *Menú → Mis lugares → [Rutas](../personal/tracks/manage-tracks.md)*, selecciona la requerida antes de conectarte al sistema multimedia del vehículo, y la ruta se construirá hasta el inicio de la ruta o mostrará la dirección actual a lo largo de la ruta.

Las rutas también se pueden seleccionar directamente en la pantalla del vehículo en *CarPlay*. Están organizadas en carpetas que has creado, y para un acceso fácil y rápido a las rutas abiertas recientemente, hay una carpeta especial [Última modificación](#folder-last-modified).

### Búsqueda {#search}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-search(1).png)

Ir a **Buscar** te da acceso rápido a una lista del [historial de destinos](#history) reciente. De manera similar al [menú de navegación](../navigation/setup/route-navigation.md#navigation-menu), donde se recopilan todos los métodos de destino de OsmAnd, como una dirección, PDI o coordenadas.

Puedes usar la *herramienta de búsqueda* para encontrar el lugar requerido en el mapa para la planificación de rutas desde cualquier categoría de búsqueda disponible.

- [Dirección](../search/search-address.md). Comienza a escribir la dirección en el campo de búsqueda.
- [PDI](../search/search-poi.md) y [PDI personalizados](../search/search-poi.md). La lista de nombres similares cercanos también mostrará PDI o sus categorías.
- [Búsqueda de coordenadas](../search/search-address#coordinates-search). Introduce las coordenadas para encontrar el punto en el mapa.

#### Prioridades de búsqueda de direcciones {#address-search-priorities}

La función de búsqueda de CarPlay prioriza las calles y los números de edificios al **buscar direcciones**.

- Las calles y los números de edificios se muestran primero cuando buscas una dirección. Esto garantiza que la información de dirección relevante se muestre antes que otras ubicaciones como carreteras o estaciones.
- Cuando buscas una ciudad, las calles dentro de la ciudad se muestran primero, seguidas de los números de edificios en esas calles.

### Carpeta Última modificación {#folder-last-modified}

![CarPlay screen](@site/static/img/navigation/auto-car/car_play_last_modified.png)

Las categorías *Favoritos* y *Rutas* tienen una carpeta especial **Última modificación**. Dado que la lista en estas categorías puede ser muy grande, ya que contiene todos tus favoritos o rutas existentes, esta carpeta es necesaria para un acceso fácil y rápido a tus destinos más recientes.

## Funciones adicionales {#additional-features}

Además de las funciones básicas de la aplicación OsmAnd en *CarPlay* que proporcionan una navegación conveniente en tu vehículo, hay una serie de funciones adicionales que mejoran tu experiencia y hacen que la navegación sea más personalizada, cómoda y eficiente.

### Indicaciones de voz {#voice-prompts}

La guía de voz para *CarPlay* es una de las funciones de navegación más útiles de OsmAnd, que proporciona guía en tiempo real y permite al conductor mantenerse concentrado en la carretera. Las indicaciones de voz indican claramente los giros, las direcciones y otras instrucciones de navegación, lo que garantiza un uso más seguro y cómodo del sistema de navegación.

Para configurar las indicaciones de voz según el perfil seleccionado, debes hacerlo antes de iniciar una ruta en la aplicación OsmAnd en tu dispositivo. Para ver la configuración recomendada para *CarPlay*, ve al artículo [Indicaciones de voz / Notificaciones](../navigation/guidance/voice-navigation.md).

### Anunciar mensajes de texto entrantes {#announce-incoming-text-messages}

Puedes cambiar la configuración de notificaciones para la aplicación OsmAnd en la configuración del sistema de tu dispositivo. Toca *CarPlay*, luego selecciona uno de los siguientes elementos:

- *Anunciar mensajes nuevos*
- *Silenciar mensajes nuevos*
- *Recordar configuración anterior*

También puedes habilitar o deshabilitar Anunciar mensajes directamente en *CarPlay*. Lee sobre cómo se implementa la gestión de notificaciones en [iOS](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.) y [CarPlay](https://support.apple.com/en-gb/guide/iphone/iph9c8438165/ios).

### Widget de alerta en pantalla {#screen-alert-widget}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-screen-alert(1).png)

Este widget de información combina tipos de alerta como **Pasos de peatones** y **Límite de velocidad**.

- Los tipos de alertas tienen una apariencia diferente, que depende de la **<Translate android="true" ids="driving_region"/>** y se pueden configurar en *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- En *CarPlay* no es posible configurar la visualización de alertas, debes configurar el widget en la aplicación antes de iniciar la navegación y conectar tu dispositivo al vehículo.
- Para una descripción detallada de los tipos de alerta, consulta [este artículo](../widgets/nav-widgets.md#alert-types).
- Para configurar las alertas en pantalla para los perfiles disponibles, consulta el artículo [Configuración de navegación](../navigation/guidance/navigation-settings.md#screen-alerts).

### Velocímetro {#speedometer}

![CarPlay screen](@site/static/img/navigation/auto-car/speedometer_carplay_2_ios.png)

El widget **Velocímetro** es un elemento de interfaz integrado que muestra la *velocidad actual* utilizando datos GPS y el *límite de velocidad* de la [base de datos OSM](https://wiki.openstreetmap.org/wiki/Key:maxspeed) y la [configuración de OsmAnd](../navigation/guidance/voice-navigation.md#speed-limit) en la pantalla del sistema multimedia del vehículo.

- El **widget Velocímetro** es [*dependiente del perfil*](../personal/profiles.md), por lo que si cambias la configuración para un perfil, no se aplicarán a otro.
- No hay opción para configurar la visualización del *Velocímetro* directamente en *CarPlay*. Debes configurarlo para el [perfil de navegación](#carplay-profile) seleccionado en la aplicación OsmAnd antes de iniciar la navegación y conectar tu dispositivo al vehículo.
- Para obtener más información sobre cómo añadir y configurar el widget *Velocímetro* a la pantalla, consulta el artículo [Widgets de información](../widgets/info-widgets.md#speedometer).

### Apariencia del mapa (3D) {#map-appearance-3d}

![Car Play](@site/static/img/navigation/auto-car/car_play_3.png)

La aplicación OsmAnd te permite usar la vista de mapa 3D en la *pantalla de CarPlay* para mostrar tu ruta y navegación.

- El **botón 3D / 2D** se muestra en la *pantalla de CarPlay*.
- Puedes cambiar entre los modos de mapa 3D / 2D tocando este botón.

### Panel de control multifunción {#multifunction-dashboard}

![Car Play](@site/static/img/navigation/auto-car/car_play_4.png)

La aplicación OsmAnd se puede abrir y usar para navegar en *CarPlay* en la pantalla del sistema multimedia del vehículo simultáneamente con aplicaciones de música, mensajes u otras notificaciones.

- Configuración del panel de control multifunción en un teléfono conectado a *CarPlay* o en la pantalla del sistema de tu vehículo.
- Busca el botón de Ventana múltiple y actívalo.

## Problema de control de volumen {#volume-control-issue}

A veces, *CarPlay* no se conecta, o simplemente no puedes escuchar nada aunque esté conectado. Otras veces, la aplicación OsmAnd no se abre correctamente en *CarPlay*. Posibles soluciones:

1. En la mayoría de los casos, todas las **señales** permanecen a un volumen máximo constante, separadas de la configuración de reproducción de audio al mismo tiempo. Para cambiar el volumen de las indicaciones de navegación de OsmAnd al usar *CarPlay*, ve a *Configuración → Voz → Volumen de voz* en la pantalla del sistema multimedia del vehículo.
2. Reinicia el dispositivo.
3. Asegúrate de que *CarPlay* esté habilitado en tu iPhone. Para ello:
   - Ve a la configuración de tu teléfono y luego a *General*.
   - Ve a *CarPlay* en Configuración general y selecciona *Mis coches*. Aquí puedes personalizar tu coche olvidándolo o volviendo a conectarte a él.
4. Asegúrate de que tu Bluetooth esté conectado.
5. Comprueba el cable USB.
6. Actualiza tu sistema operativo regularmente.
7. Comprueba que *CarPlay* sea compatible en tu [región](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay).
8. Si usas una VPN en tu iPhone, puede impedir que *CarPlay* funcione. Intenta deshabilitar la VPN y comprueba si esto ayuda a que *CarPlay* funcione.

## Artículos relacionados {#related-articles}

- [Perfiles (Configuración)](../personal/profiles.md)
- [Importar / Exportar](../personal/import-export.md)

### Problemas comunes y soluciones {#common-issues-and-solutions}

1. Preguntas comunes sobre la pantalla de conexión:
    - *¿Por qué no puedo controlar la aplicación desde mi teléfono cuando está conectado a CarPlay?*
        Por razones de seguridad, la pantalla de la aplicación OsmAnd en tu teléfono está bloqueada mientras está conectada a CarPlay. Solo puedes interactuar con la aplicación a través de la pantalla del coche.
    - *¿Puedo deshabilitar la pantalla bloqueada y usar la aplicación en mi teléfono?*
        No, CarPlay impone esta restricción para evitar distracciones mientras conduces.
    - *¿Qué debo hacer si mi teléfono y la pantalla del coche parecen desconectados?*
        Asegúrate de que tu dispositivo esté conectado correctamente a través de USB o Bluetooth.
        Reinicia el sistema de infoentretenimiento de tu coche y la aplicación OsmAnd si la conexión es inestable.

> *Última actualización: enero de 2025*