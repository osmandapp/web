---
source-hash: b7357e6a51f940ace21ac3c4ebf732361180dc9c7f5720e449fa9f0856db537a
sidebar_position: 8
sidebar_label:  Navigation
title: Navigation on the Web
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

Utilice **Navigation on the Web** para crear una ruta en el mapa y obtener una vista previa de la guía paso a paso. Calcula una ruta para el modo de viaje seleccionado, muestra la distancia y el tiempo esperados, y le permite verificar los cambios de elevación y las próximas curvas. Puede ajustar la ruta en los ajustes de Navegación (por ejemplo, permitiendo o evitando ciertos tipos de carreteras o utilizando parámetros del vehículo) y usar múltiples puntos de ruta cuando sea necesario.


## Iniciar una ruta {#start-a-route}

En el estado vacío, Navigation le invita a agregar puntos de ruta: *Haga clic en el mapa para establecer los puntos de Inicio y Destino*.

Los puntos de ruta se pueden proporcionar desde el panel de Ruta. Cuando seleccione **Establecer punto de inicio** o **Establecer destino**, el campo muestra sugerencias como *Ubicación actual* y puntos usados anteriormente del historial. Puede eliminar las sugerencias guardadas utilizando *Borrar historial*.

Navigation sigue un flujo simple: el primer punto se convierte en el Inicio, y el siguiente punto se convierte en el Destino. Tan pronto como se establecen ambos puntos, se calcula y muestra la ruta en el mapa.

![Navegación web](@site/static/img/web/navigation_start.png)

### Administrar puntos de ruta {#manage-route-points}

Puede expandir una ruta más allá de Inicio → Destino agregando puntos intermedios. Utilice el botón de más (+) junto a la lista de puntos para agregar un punto intermedio (se inserta un nuevo punto encima del Destino). Los puntos intermedios se pueden eliminar utilizando el botón de menos (–).

Intercambiar Inicio y Destino — intercambia el Inicio y el Destino manteniendo los puntos intermedios sin cambios. La acción está marcada con un icono que muestra dos flechas en direcciones opuestas.

![Navegación web](@site/static/img/web/navigation_points.png)


## Perfil de enrutamiento {#routing-profile}

En la parte superior del panel de Ruta, puede elegir un perfil de enrutamiento para su ruta. Un conjunto de perfiles comúnmente utilizados se muestra como cuatro iconos. Para acceder a más opciones, abra el menú de tres puntos junto a los iconos del perfil. Esto expande la lista completa de perfiles disponibles.

Cuando cambie el perfil, Navigation actualiza la ruta para que coincida con el modo de viaje seleccionado.

![Navegación web](@site/static/img/web/navigation_profile.png)


## Ajustes de navegación {#navigation-settings}

Para ajustar cómo se calculan las rutas, abra Ajustes utilizando el icono de engranaje en el panel de Ruta. Los ajustes están agrupados en secciones que puede expandir/colapsar. El conjunto de secciones y opciones depende del perfil de enrutamiento seleccionado, por lo que verá parámetros diferentes para diferentes modos de viaje.

Las secciones típicas incluyen:

- **General** — opciones específicas del perfil (por ejemplo, en el perfil de coche puede ver interruptores como *Camino eficiente en combustible* y *Entrega de mercancías*).
- **Permitir** — opciones que permiten tipos específicos de carreteras o caminos durante el enrutamiento.
- **Evitar** — opciones que excluyen ciertos tipos de carreteras o situaciones de la ruta (por ejemplo, evitar peajes, ferries, autopistas, túneles, etc.).
- **[Parámetros del vehículo](../navigation/guidance/vehicle-parameters.md)** — disponible para perfiles basados en vehículos. Le permite especificar restricciones del vehículo (como dimensiones/peso), que pueden influir en el enrutamiento en carreteras restringidas.

![Navegación web](@site/static/img/web/navigation_settings.png) ![Navegación web](@site/static/img/web/navigation_settings_2.png)


## Adjuntar pista {#attaching-track}

El bloque **Adjuntar a carreteras** le permite usar una pista GPX existente como base para la navegación. OsmAnd Web empareja la pista con carreteras cercanas para proporcionar guía paso a paso.

Cuando haga clic en Seleccionar pista, el navegador abre un selector de archivos donde puede elegir un archivo .gpx de su computadora. Después de seleccionar una pista:
- La pista se muestra en el mapa y se utiliza para calcular la ruta.
- El resumen de la ruta (distancia y tiempo) se muestra en el panel de Ruta.
- El archivo seleccionado aparece debajo de Pista seleccionada (con el nombre del archivo de la pista).
- Puede eliminar la pista adjunta utilizando el botón de menos (–) junto a Pista seleccionada.


## Detalles de la ruta {#route-details}

![Navegación web](@site/static/img/web/navigation_info.png) ![Navegación web](@site/static/img/web/navigation_turns.png)

Cuando se calcula una ruta, el panel muestra un resumen básico (distancia, tiempo, subida/bajada) y un botón **Detalles**. Utilice Detalles para abrir la vista de la ruta con dos pestañas: Info y Curvas.

Info resume la ruta y los datos de elevación:
- **Puntos** — el número de puntos de ruta utilizados para construir la ruta.
- **Ruta** — distancia y tiempo.
- **Subida/Bajada** — ascenso y descenso totales.
- **Elevación (mín/prom/máx)** — estadísticas de elevación para la ruta.
- **Elevación (Satélite)** — Recalcular para reconstruir la elevación utilizando datos de satélite (si están disponibles).

Debajo del resumen, el gráfico de elevación le ayuda a inspeccionar el perfil de la ruta. Puede alternar Elevación y Pendiente, y utilizar el deslizador debajo del gráfico para enfocarse en una parte específica de la ruta.

Utilice Curvas para la guía paso a paso. La ruta también está marcada con círculos naranjas a lo largo de la línea. Haga clic en un círculo para abrir un pop-up con la instrucción de navegación correspondiente. El pop-up también puede incluir:
- Evitar — evita ese segmento específico.
- ID de vía — un enlace a la vía OSM subyacente para esa parte de la ruta.

Puede ajustar la ruta directamente en el mapa arrastrando los marcadores de ruta a un lugar diferente. Cuando haga clic y arrastre un marcador a otra carretera (o a una ubicación cercana) y luego lo suelte:
- OsmAnd Web recalcula la ruta para pasar por la nueva posición.
- El marcador movido se convierte en un nuevo punto intermedio.
- El nuevo punto intermedio aparece en el panel de Ruta como un punto adicional insertado encima del Destino, y el resumen de la ruta se actualiza en consecuencia.
- Puede administrar el punto vía agregado de la misma manera que otros [puntos intermedios](#manage-route-points).

![Navegación web](@site/static/img/web/navigation_on_map.png)

### Descargar y guardar {#download-and-save}

Utilice *Descargar* para exportar la ruta como una pista. El diálogo de descarga ofrece dos opciones:
Datos completos de la pista — incluye datos completos, incluidas las instrucciones de navegación.
Pista simplificada — una versión más ligera que es más adecuada para usar con otras aplicaciones.

Puede guardar la ruta como una pista utilizando *Guardar en la nube / Subir a OsmAnd Cloud*. Esto abre un diálogo donde puede confirmar el guardado en pistas de la nube, editar el Nombre, opcionalmente elegir una Carpeta, luego Guardar o Cancelar.

### Compartir una ruta {#share-a-route}

Para compartir la ruta, copie la URL. Ejemplo: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)


## Artículos relacionados {#related-articles}

- [Preparación de rutas](../navigation/setup/route-navigation.md)
- [Ajustes de navegación](../navigation/guidance/navigation-settings.md)
- [Parámetros del vehículo](../navigation/guidance/vehicle-parameters.md)
- [Planificar ruta](../web/planner.md)