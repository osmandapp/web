---
source-hash: 2e2bedc5911717de92c663881adf7da2b32d2027a6c8127a8c9d02651753f230
sidebar_position: 10
title:  CarPlay
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



## Descripción general {#overview}

Conducir un vehículo y usar su teléfono o tableta al mismo tiempo suele estar prohibido por ley por razones de seguridad. [***CarPlay***](https://www.apple.com/ios/carplay/) es un software que proporciona una versión adaptada y optimizada de la aplicación OsmAnd para un uso seguro mientras se conduce, haciendo más fácil y seguro el acceso a las funciones de navegación de la aplicación.

Para usar *CarPlay* en la pantalla de su vehículo, siga estos pasos:

1. *CarPlay* no está disponible en todos los países. Asegúrese de que sea compatible en su [país o región](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay) y que *CarPlay* sea compatible con su [modelo de vehículo](https://www.apple.com/ios/carplay/available-models/).
2. [Conecte su dispositivo](https://support.apple.com/en-gb/HT203412) al sistema multimedia de su vehículo mediante un puerto USB o de forma inalámbrica con Wi-Fi o Bluetooth. Al conectarse por primera vez, es posible que necesite permiso para usar *CarPlay* en su dispositivo.
3. Una vez conectado, la *interfaz de CarPlay* aparecerá automáticamente en la pantalla de su vehículo con todas las aplicaciones disponibles. Si la *pantalla de inicio de CarPlay* no aparece, seleccione el *logotipo de CarPlay* en la pantalla del vehículo.

### Interfaz de CarPlay {#carplay-interface}

*CarPlay* **no es una réplica directa** de la aplicación móvil OsmAnd. Tiene una interfaz simplificada, centrada en las funciones de navegación esenciales para garantizar una conducción segura. Algunas funciones avanzadas no son compatibles debido a las limitaciones de la plataforma.

### Pantalla de conexión {#connection-screen}

![CarPlay](@site/static/img/navigation/auto-car/car_play_connect_screen.png)

Mientras su dispositivo está conectado a *CarPlay*, el mapa en la pantalla de la aplicación está bloqueado. Esta es una característica de seguridad intencionada para garantizar que la navegación se controle exclusivamente desde la pantalla del coche, minimizando las distracciones mientras se conduce. Consulte las [preguntas comunes](#common-issues-and-solutions) sobre la pantalla de conexión.


### Interacción con el mapa {#interaction-with-the-map}

![Pantalla de CarPlay](@site/static/img/navigation/auto-car/car-play-Interaction(1).png)

*CarPlay* muestra la interfaz de OsmAnd adaptada a la pantalla del sistema multimedia del vehículo. La interacción con el mapa se limita a:

- [Mi ubicación](../widgets/map-buttons.md#my-location-and-zoom). Mueve la parte visible del mapa para que su ubicación actual esté en el centro de la pantalla.
- [Zoom](../widgets/map-buttons.md#my-location-and-zoom). Le permite acercar y alejar la parte visible del mapa.


## Parámetros de configuración requeridos {#required-setup-parameters}

![Pantalla de CarPlay](@site/static/img/navigation/auto-car/car-play-select-point-1.png)

- Primero, debe seleccionar y configurar el perfil que se utilizará al conectarse a *CarPlay*. Puede leer cómo configurar un perfil en el artículo [Perfiles (Ajustes)](../personal/profiles).
    - Un perfil conveniente para usar *CarPlay* puede ser *Conducción*, y el tipo de enrutamiento puede ser [Enrutamiento para coche](../navigation/routing/car-based-routing.md).
    - OsmAnd tiene un elemento separado [Perfil de CarPlay](#carplay-profile) para un acceso rápido a la lista de perfiles disponibles para conectarse a *CarPlay*.
- Para que OsmAnd funcione, [conecte su dispositivo iOS](#overview) al sistema multimedia del vehículo. Para obtener más información sobre cómo conectar y configurar su dispositivo, puede visitar el sitio web de [**CarPlay**](https://support.apple.com/en-us/HT205634).
- Necesita tener una de las [versiones de pago o suscripción de OsmAnd](../purchases/ios#free-and-paid-features). Compruébelo aquí *Menú → Ajustes → Compras*.
- Una vez conectado, puede establecer un destino e iniciar la navegación de OsmAnd en *CarPlay*.

:::note
Es posible que necesite una conexión a Internet para usar OsmAnd en *CarPlay*. Si su dispositivo tiene acceso limitado a Internet, puede [*precargar o crear rutas*](../personal/tracks/manage-tracks.md) y usarlas sin Internet.
:::


### Iniciar navegación {#start-navigation}

![Pantalla de CarPlay](@site/static/img/navigation/auto-car/car-play-start(1).png)

Para usar la versión de iOS de la aplicación OsmAnd en *CarPlay*, debe comprar una [versión de pago de la aplicación o suscribirse](../purchases/ios#free-and-paid-features).

1. Para crear una ruta, debe elegir el [punto final de la ruta](#select-a-route-endpoint) en la *pantalla de CarPlay* o en la [aplicación OsmAnd](../navigation/setup/route-navigation.md).
2. Puede usar [indicaciones de voz](#voice-prompts) para escuchar las direcciones o los mensajes sobre problemas en la carretera.
3. Después de seleccionar una ubicación, presione **Iniciar** para seguir la ruta.
4. Mientras conduce, la pantalla del vehículo mostrará información de OsmAnd sobre su ubicación actual en el mapa, indicaciones de conducción, distancia hasta el próximo giro, carriles, hora de llegada y distancia a su destino.
    ![Pantalla de CarPlay](@site/static/img/navigation/auto-car/car_play_navmode.png)
5. Si desea cambiar su ruta o seleccionar una ubicación diferente, puede presionar el botón apropiado en la pantalla.
6. Una vez que haya completado su ruta, puede desactivar *CarPlay* desconectando el dispositivo del sistema multimedia de su vehículo.

:::note
Todas las categorías para la selección del **punto final de la ruta**, *[Historial](#history), [PDI](#poi-categories), [Marcadores](#map-markers), [Búsqueda](#search), [Favoritos](#favorites) y [Tracks](#tracks)* no pueden contener más elementos en la lista de los que proporciona el sistema multimedia de su vehículo. Normalmente, en la mayoría de los vehículos, las listas se limitan dinámicamente a 12 o 24 elementos. Esto significa que la lista en *CarPlay* puede no estar completa. El número total de elementos y el número real de elementos mostrados se indica debajo del nombre de la carpeta.
:::


### Perfil de CarPlay {#carplay-profile}

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*
![Ajustes generales Perfil predeterminado Android](@site/static/img/personal/profiles/CarPlay_ios.png)

**Perfil de CarPlay** es un perfil específico en la aplicación OsmAnd para un uso conveniente del sistema de audio y video de su coche para la posterior visualización de estos datos en su teléfono.

Este perfil se utiliza mientras su dispositivo esté conectado a *CarPlay*. Toque el campo *Perfil de CarPlay* en el menú de *Ajustes de OsmAnd* y, de la lista de [perfiles habilitados para su uso](../personal/profiles.md), seleccione el perfil con el que se activará *CarPlay*.

No puede seleccionar un perfil directamente en *CarPlay* desde la pantalla del vehículo. Primero, seleccione el perfil requerido en su dispositivo y adjunte el *Perfil de CarPlay* a él. Debe seleccionar un perfil que corresponda al tipo de vehículo, como *Conducción*, *Camión*, *Coche*, *Motocicleta* o *Ciclomotor*. **La aplicación activará automáticamente** el *Perfil de CarPlay* cuando se conecte a un vehículo.

**Por qué es importante seleccionar el perfil apropiado para su tipo de vehículo.**

- **Seguridad en la conducción.** Diferentes tipos de transporte requieren diferente información y ajustes al conducir. Por ejemplo, los conductores de camiones pueden estar limitados en la altura, peso y anchura de sus vehículos, por lo que el perfil *Camión* les proporciona restricciones y directrices apropiadas. Mientras que los ciclistas y motociclistas necesitan información sobre carriles bici y rutas, sin datos para camiones.
- **Utilidad y Eficiencia.** La navegación debe personalizarse para satisfacer las necesidades de un modo de transporte particular. Esto permite a los usuarios reducir el tiempo que tardan en encontrar rutas óptimas y evitar restricciones de tráfico innecesarias.


## Seleccionar un punto final de la ruta {#select-a-route-endpoint}

Puede seleccionar [PDI](../map/point-layers-on-map.md#points-of-interest-pois) previamente configurados y añadidos, o [Favoritos](../personal/favorites.md), o [Marcadores](../personal/markers.md) como punto de destino. También es posible seleccionar un [Track](../personal/tracks/index.md) grabado o descargado para la ruta, usar la [Búsqueda](../search/index.md), o seleccionar un destino del [Historial](../search/search-history.md) de rutas.

1. Si desea una ubicación particular en el mapa como punto final, seleccione la categoría apropiada de puntos de la lista, [PDI](#poi-categories), [Favoritos](#favorites), o [Marcadores de mapa](#map-markers).

    - Todas las categorías no pueden contener más elementos en la lista de los que proporciona el sistema multimedia de su vehículo. Esto significa que la lista en *CarPlay* podría estar incompleta, y todas las demás carpetas solo están disponibles en la aplicación OsmAnd en su dispositivo.
    - La carpeta [Última modificación](#folder-last-modified) contiene una lista de destinos recientes, ordenados por fecha de adición o cambio.
    - La lista de todas las demás carpetas está ordenada por la actualización más reciente, las carpetas nuevas están en la parte superior de la lista. No es posible cambiar su orden manualmente.
    - La lista de puntos dentro de las carpetas está ordenada por la distancia a ellos, comenzando por el más cercano. Cada punto tiene un nombre o coordenadas, un icono con forma (color e icono establecidos por defecto o elegidos por usted en la aplicación OsmAnd), y la distancia desde el punto de la ubicación actual hasta él.
2. Seleccione la categoría [Historial](#history) para encontrar uno de los destinos recientes que están almacenados en la memoria del dispositivo.
3. Seleccione [Búsqueda](#search) para introducir un destino de las categorías de búsqueda disponibles.

:::note
Mientras conduce, los puntos seleccionados pueden ser [anunciados](#voice-prompts) cuando se acerca o los pasa. Consulte los ajustes de [Indicaciones de voz](../navigation/guidance/voice-navigation.md) en el artículo correspondiente para configurar las notificaciones de voz.
:::


### Historial {#history}

![Pantalla de CarPlay](@site/static/img/navigation/auto-car/car_play_history.png)

En la **categoría Historial**, puede seleccionar un destino de una lista de puntos finales.

- Están ordenados por el uso más reciente, comenzando por los más nuevos.
- Esto puede ser conveniente para un acceso rápido a rutas de uso frecuente.
- Para aprender a usar o eliminar un destino, lea el artículo [Historial de búsqueda](../search/search-history.md).


### Categorías de PDI {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi_1.png').default} alt="CP"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi.png').default} alt="CP"/></td>
    </tr>
</table>

*PDI (Puntos de Interés)* son un tipo de puntos que identifican lugares u objetos en el mapa que son importantes o de interés para los usuarios. Se destacan con iconos especiales proporcionados en los [ajustes de OsmAnd](../map/point-layers-on-map.md#poi-types) y se ordenan en grupos.

Para construir una ruta a un *PDI* en *CarPlay*, siga estos pasos:

1. Seleccione el *PDI* necesario de la lista de categorías disponibles, o introduzca el nombre del PDI usando [Búsqueda](#search).
2. OsmAnd calcula la ruta y la muestra en la *pantalla de CarPlay*. Toque el botón **Iniciar** para comenzar la navegación hacia esa ubicación.
3. Dependiendo de los ajustes de su aplicación OsmAnd y de su vehículo, puede recibir [indicaciones de voz](#voice-prompts) para guiarle a su destino.
4. Cuando llegue a la ubicación, la aplicación le notificará que ha llegado al *PDI*.


### Favoritos {#favorites}

![Pantalla de CarPlay](@site/static/img/navigation/auto-car/car-play-favorites(1).png)

**Favoritos** es una de las características de OsmAnd que le permite hacer una especie de notas en el mapa.

- Mientras usa **CarPlay**, no puede añadir o modificar *Favoritos*, solo usar los existentes.
- La lista de [Favoritos](../personal/favorites.md#manage-favorites) se puede encontrar en la aplicación OsmAnd *Menú → Mis lugares → Favoritos*.
- Si desea usarlos para la navegación, configure todo lo que necesite antes de conectar el dispositivo al sistema multimedia de su vehículo.


### Marcadores de mapa {#map-markers}

![Pantalla de CarPlay](@site/static/img/navigation/auto-car/car-play-markers(1).png)

- Para definir su destino final como un *Marcador de mapa*, primero necesita crear el número requerido de marcadores en la aplicación OsmAnd en su dispositivo antes de conectarlo al sistema multimedia del vehículo.
- Los *Marcadores* deben estar disponibles en la lista *Menú → Marcador de mapa*.
- Esto se describe con más detalle en el artículo [Marcadores](../personal/markers.md).


### Tracks {#tracks}

![Pantalla de CarPlay](@site/static/img/navigation/auto-car/car-play-tracks(1).png)

Para construir una ruta a un destino, puede seleccionar un track existente disponible en la aplicación OsmAnd. El track puede ser [descargado](../personal/tracks/manage-tracks.md#import) con antelación, usado como [grabado](../plugins/trip-recording.md) o creado en [Planificar una ruta](../plan-route/create-route.md).

De la lista de tracks en *Menú → Mis lugares → [Tracks](../personal/tracks/manage-tracks.md)*, seleccione el requerido antes de conectarse al sistema multimedia del vehículo, y la ruta se construirá hasta el inicio del track o mostrará la dirección actual a lo largo del track.

Los tracks también se pueden seleccionar directamente en la pantalla del vehículo en *CarPlay*. Están organizados en carpetas que ha creado, y para un acceso fácil y rápido a los tracks abiertos recientemente, hay una carpeta especial [Última modificación](#folder-last-modified).


### Búsqueda {#search}

![Pantalla de CarPlay](@site/static/img/navigation/auto-car/car-play-search(1).png)

Ir a **Búsqueda** le da acceso rápido a una lista del [historial de destinos](#history) reciente. De manera similar al [menú de Navegación](../navigation/setup/route-navigation.md#navigation-menu), donde se recopilan todos los métodos de destino de OsmAnd, como una dirección, PDI o coordenadas.

Puede usar la *herramienta de Búsqueda* para encontrar el lugar requerido en el mapa para la planificación de rutas desde cualquier categoría de búsqueda disponible.

- [Dirección](../search/search-address.md). Comience a escribir la dirección en el campo de búsqueda.
- [PDI](../search/search-poi.md) y [PDI personalizados](../search/search-poi.md). La lista de nombres similares cercanos también mostrará PDI o sus categorías.
- [Búsqueda por coordenadas](../search/search-address#coordinates-search). Introduzca las coordenadas para encontrar el punto en el mapa.

:::note
Puede seleccionar un edificio específico buscando por el nombre de una calle y seleccionándolo en el cuadro de búsqueda en *CarPlay*. Tenga en cuenta que la lista de resultados está limitada a 25 elementos. Por lo tanto, si falta el edificio que espera, debe escribir el número del edificio.
:::


### Prioridades de búsqueda de direcciones {#address-search-priorities}

La función de búsqueda de CarPlay prioriza las calles y los números de los edificios al **buscar direcciones**.

- Las calles y los números de los edificios se muestran primero cuando busca una dirección. Esto asegura que la información de la dirección relevante se muestre antes que otras ubicaciones como carreteras o estaciones.
- Cuando busca una ciudad, las calles dentro de la ciudad se muestran primero, seguidas de los números de los edificios en esas calles.


### Carpeta Última modificación {#folder-last-modified}

![Pantalla de CarPlay](@site/static/img/navigation/auto-car/car_play_last_modified.png)

Las categorías *Favoritos* y *Tracks* tienen una carpeta especial **Última modificación**. Dado que la lista en estas categorías puede ser muy grande ya que contiene todos sus favoritos o tracks existentes, esta carpeta es necesaria para un acceso fácil y rápido a sus destinos más recientes.


## Funciones adicionales {#additional-features}

Además de las características básicas de la aplicación OsmAnd en *CarPlay* que proporcionan una navegación conveniente en su vehículo, hay una serie de características adicionales que mejoran su experiencia y hacen la navegación más personalizada, cómoda y eficiente.


### Indicaciones de voz {#voice-prompts}

La guía por voz para *CarPlay* es una de las características de navegación más útiles de OsmAnd, proporcionando guía en tiempo real y permitiendo al conductor mantenerse concentrado en la carretera. Las indicaciones de voz indican claramente los giros, las direcciones y otras instrucciones de navegación, garantizando un uso más seguro y cómodo del sistema de navegación.

Para configurar las indicaciones de voz según el perfil seleccionado, debe hacerlo antes de iniciar una ruta en la aplicación OsmAnd en su dispositivo. Para ver los ajustes recomendados para *CarPlay*, vaya al artículo [Indicaciones de voz / Notificaciones](../navigation/guidance/voice-navigation.md).



### Widget de alerta en pantalla {#screen-alert-widget}

![Pantalla de CarPlay](@site/static/img/navigation/auto-car/car-play-screen-alert(1).png)

Este widget de información combina tipos de alerta como **Pasos de peatones** y **Límite de velocidad**.

- Los tipos de alertas tienen una apariencia diferente, que depende de la **<Translate android="true" ids="driving_region"/>** y se pueden configurar en *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- En *CarPlay* no es posible configurar la visualización de las alertas, es necesario configurar el widget en la aplicación antes de iniciar la navegación y conectar el dispositivo al vehículo.
- Para una descripción detallada de los tipos de alerta, consulte [este artículo](../widgets/nav-widgets.md#alert-types).
- Para configurar las alertas en pantalla para los perfiles disponibles, consulte el artículo [Ajustes de navegación](../navigation/guidance/navigation-settings.md#screen-alerts).


### Velocímetro {#speedometer}

![Pantalla de CarPlay](@site/static/img/navigation/auto-car/speedometer_carplay_2_ios.png)

El widget **Velocímetro** es un elemento de interfaz integrado que muestra la *velocidad actual* utilizando datos GPS y el *límite de velocidad* de la [base de datos de OSM](https://wiki.openstreetmap.org/wiki/Key:maxspeed) y los [ajustes de OsmAnd](../navigation/guidance/voice-navigation.md#speed-limit) en la pantalla del sistema multimedia del vehículo.

- El **widget Velocímetro** es [*dependiente del perfil*](../personal/profiles.md), por lo que si cambia los ajustes para un perfil, no se aplicarán a otro.
- No hay opción para configurar la visualización del *Velocímetro* directamente en *CarPlay*. Debe configurarlo para el [perfil de navegación](#carplay-profile) seleccionado en la aplicación OsmAnd antes de iniciar la navegación y conectar su dispositivo al vehículo.
- Para obtener más información sobre cómo añadir y configurar el widget *Velocímetro* en la pantalla, lea el [artículo de widgets de información](../widgets/info-widgets.md#speedometer).


### Apariencia del mapa (3D) {#map-appearance-3d}

![Car Play](@site/static/img/navigation/auto-car/car_play_3.png)

La aplicación OsmAnd le permite usar la vista de mapa 3D en la *pantalla de CarPlay* para mostrar su ruta y navegación.

- El **botón 3D / 2D** se muestra en la *pantalla de CarPlay*.
- Puede cambiar entre los modos de mapa 3D / 2D tocando este botón.


### Panel multifunción {#multifunction-dashboard}

![Car Play](@site/static/img/navigation/auto-car/car_play_4.png)

La aplicación OsmAnd se puede abrir y usar para navegar en *CarPlay* en la pantalla del sistema multimedia del vehículo simultáneamente con aplicaciones de música, mensajes u otras notificaciones.

- Configuración del panel multifunción en un teléfono conectado a *CarPlay* o en la pantalla de su sistema de vehículo.
- Encuentre el botón de Ventana múltiple y actívelo.

## Ajustes {#settings}

### Anunciar mensajes de texto entrantes {#announce-incoming-text-messages}

Puede cambiar los ajustes de notificación para la aplicación OsmAnd en los ajustes del sistema de su dispositivo. Toque *CarPlay*, luego seleccione uno de los siguientes elementos:

- *Anunciar nuevos mensajes*
- *Silenciar nuevos mensajes*
- *Recordar ajuste anterior*

También puede habilitar o deshabilitar el anuncio de mensajes directamente en *CarPlay*. Lea sobre cómo se implementa la gestión de notificaciones en [iOS](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.) y [CarPlay](https://support.apple.com/en-gb/guide/iphone/iph9c8438165/ios).

### Posición de la ubicación en CarPlay {#location-position-in-carplay}

La aplicación OsmAnd para *CarPlay* le permite ajustar la posición del indicador de ubicación actual en la pantalla para evitar que se superponga con la ruta y otros detalles importantes del mapa.

**Cómo cambiar la posición del indicador:**

- Vaya a *Menú → Configurar pantalla → Otros → [Posición de la ubicación en la pantalla](../widgets/configure-screen.md#display-position-location-position-on-screen)*.
- Seleccione su ubicación preferida:
    - **Automático (predeterminado)**. La aplicación cambia automáticamente la posición del indicador para el modo de navegación o el movimiento libre.
    - **Centro**. El indicador se coloca en el centro de la pantalla, adecuado para la navegación estándar.
    - **Inferior**. El indicador se posiciona más cerca de la parte inferior de la pantalla, lo que facilita la observación de objetos circundantes e intersecciones complejas.


### Problema de control de volumen {#volume-control-issue}

A veces *CarPlay* no se conecta, o simplemente no puede oír nada aunque esté conectado. Otras veces, la aplicación OsmAnd no se abre correctamente en *CarPlay*. Posibles soluciones:

1. En la mayoría de los casos, todas las **señales** permanecen a un volumen máximo constante, separado de los ajustes de reproducción de audio al mismo tiempo. Para cambiar el volumen de las indicaciones de navegación de OsmAnd al usar *CarPlay*, vaya a *Configuración → Voz → Volumen de voz* en la pantalla del sistema multimedia del vehículo.
2. Reinicie el dispositivo.
3. Asegúrese de que *CarPlay* esté habilitado en su iPhone. Para hacer esto:
   - Vaya a los ajustes de su teléfono y luego a *General*.
   - Vaya a *CarPlay* en los Ajustes generales y seleccione *Mis coches*. Aquí puede personalizar su coche olvidándolo o volviendo a conectarse a él.
4. Asegúrese de que su Bluetooth esté conectado.
5. Revise el cable USB.
6. Actualice su sistema operativo regularmente.
7. Verifique que *CarPlay* sea compatible en su [región](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay).
8. Si usa una VPN en su iPhone, puede impedir que *CarPlay* funcione. Intente deshabilitar la VPN y vea si esto ayuda a que *CarPlay* funcione.


## Artículos relacionados {#related-articles}

- [Perfiles (Ajustes)](../personal/profiles.md)
- [Importar / Exportar](../personal/import-export.md)

### Problemas comunes y soluciones {#common-issues-and-solutions}

1. Preguntas comunes sobre la pantalla de conexión:
    - *¿Por qué no puedo controlar la aplicación desde mi teléfono cuando está conectado a CarPlay?*
        Por razones de seguridad, la pantalla de la aplicación OsmAnd en su teléfono se bloquea mientras está conectado a CarPlay. Solo puede interactuar con la aplicación a través de la pantalla del coche.
    - *¿Puedo desactivar la pantalla bloqueada y usar la aplicación en mi teléfono?*
        No, CarPlay impone esta restricción para evitar distracciones mientras se conduce.
    - *¿Qué debo hacer si mi teléfono y la pantalla del coche parecen desconectados?*
        Asegúrese de que su dispositivo esté correctamente conectado a través de USB o Bluetooth.
        Reinicie el sistema de infoentretenimiento de su coche y la aplicación OsmAnd si la conexión es inestable.