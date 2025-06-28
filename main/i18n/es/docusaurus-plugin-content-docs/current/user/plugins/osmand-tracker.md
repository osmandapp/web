---
source-hash: 652f7e88fdf4d2bae94537d58c7ea9e1d5aa0e57dfb954e058fd661aae10355c
sidebar_position: 11
title:  Rastreador OsmAnd
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


<InfoAndroidOnly />

## Descripción general {#overview}

OsmAnd Tracker es un cliente de Telegram modificado creado para el monitoreo flexible y el envío de mensajes con ubicaciones GPS en tiempo real.

[OsmAnd Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) le ayuda a ver sus contactos en un mapa en OsmAnd. Tiene un aspecto social, lo que significa que para usarlo, debe proporcionar acceso a sus contactos para la plataforma que OsmAnd elija.

Elegimos [Telegram](https://telegram.org/) como la plataforma social más abierta porque tiene una [API abierta](https://core.telegram.org/api), un SDK abierto y, además, eventualmente tendrá una implementación de servidor abierto (Blockchain).

![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/My_Location.png) ![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/Map.png)


### Cómo funciona {#how-it-works}

Es importante destacar que existe un alto nivel de compatibilidad entre las aplicaciones. Puede compartir fácilmente su ubicación con sus contactos sin tener la aplicación móvil de Telegram (OsmAnd Online GPS Tracker es un cliente de Telegram independiente), y a la inversa, sus contactos no necesitan tener [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) para ver su ubicación.

Diseñamos [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) para que pueda seguir usando la aplicación Telegram y la aplicación OsmAnd de la forma a la que está acostumbrado, sin restricciones adicionales.

La aplicación envía mensajes de ubicación en vivo a los chats seleccionados durante el tiempo que usted establezca, muestra una lista de sus contactos y grupos, y verifica los chats en busca de mensajes con su ubicación, que luego se muestran en el mapa en OsmAnd.
La aplicación no envía ni ve sus mensajes de texto.

Inicie sesión con su número de teléfono registrado en Telegram para habilitar lo siguiente:

- Administrar la lista de contactos y grupos que le envían su ubicación.
- Ver la ubicación de contactos y grupos en tiempo real en un mapa en OsmAnd.
- Establecer el tiempo para compartir la ubicación por separado para cada chat.
- Establecer la frecuencia con la que se actualiza su ubicación.
- Monitorear la cronología de sus movimientos y los de sus contactos.

![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/My-location_1.png) ![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/Live.png)


## Parámetros de configuración requeridos {#required-setup-parameters}

Instale el APK de OsmAnd Online GPS Tracker:

- [Tienda Google Play](https://play.google.com/store/apps/details?id=net.osmand.telegram)
- [Servidor OsmAnd](https://download.osmand.net/latest-night-build/OsmAnd-tracker.apk)


## Configuración del complemento {#plugin-settings}

Existen varias configuraciones para administrar la frecuencia de compartir ubicaciones y controlar la visualización de las ubicaciones que se le envían.

Para abrir el menú *Configuración*:

*Pantalla [Mi ubicación](#my-location-screen) → desplazar la pantalla hacia abajo (lista de contactos) → ⋮ → Configuración*
o
*Pantalla [En vivo ahora](#live-now-screen) → ⋮ → Configuración*

![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/tracker_settings.png) ![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/tracker_settings_1.png)


### Posición {#position}

**Enviar mi ubicación** — le permite establecer el intervalo para enviar su posición desde una vez por segundo (para aumentar la precisión) hasta una vez cada 5 minutos (para reducir el consumo de energía).

**Sin movimiento** — le permite establecer el tiempo (de 1 minuto a 1 hora) después del cual la ubicación de un contacto se considera desactualizada. Si una ubicación se vuelve obsoleta, se vuelve gris.

**Historial de ubicaciones** — le permite establecer el tiempo (de 5 minutos a 24 horas) después del cual el contacto con la ubicación eliminada se ocultará de la lista y del mapa de OsmAnd.

**Enviar ubicación como** - le permite elegir una categoría para enviar mensajes sobre su ubicación en Telegram (3 tipos de envío): texto, mapa, texto y mapa.

**Tiempo de caducidad del búfer** - le permite elegir el tiempo de guardado de puntos en el búfer.

**Trabajo en segundo plano** - le permite cambiar la configuración de optimización de la batería para estabilizar el uso compartido de la ubicación.

**Fuente de ubicación** - le permite elegir *Servicios de Google Play* (por defecto) o *API de Android* para determinar la ubicación.

![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/settingstracker.png) ![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/20.jpg)


### Unidades y formatos {#units--formats}

Le permite añadir configuraciones para unidades y formatos. Ahora puede elegir sus valores cómodos para los mensajes de Telegram al compartir datos de ubicación.

![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/22.jpg) ![Rastrador OsmAnd](@site/static/img/plugins/online-tracker/20.jpg)


### Apariencia {#appearance}

Le permite mostrar el número de puntos GPS recibidos de otros contactos, así como los enviados por usted.


### Privacidad {#privacy}

Uso de proxy dentro de OsmAnd Tracker. Vaya a Configuración y escriba sus datos de proxy: *Configuración → Privacidad → Configuración de proxy*

![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/3-1.jpg) ![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/4-1.jpg)


### Configuración de GPS {#gps-settings}

Configuración de puntos de ubicación. Por ejemplo, si permanece en una ubicación durante algún tiempo sin moverse, los datos de su punto de ubicación no se envían y su pista GPX mostrará datos más precisos y exactos.

![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/5-1.jpg)


### Compartir ubicación como {#share-location-as}

Si desea conectar varios dispositivos a una cuenta de Telegram, debe hacer clic en "Añadir dispositivo" y nombrar el dispositivo.

![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/Settings-ShowGPSPoints.png)


### Conexión OsmAnd {#osmand-connect}

Esta configuración le permite seleccionar la versión de OsmAnd en la que sus contactos con su ubicación aparecerán en el mapa.

![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/Settings-2.png)


### Cuenta {#account}

Utilice esta configuración para verificar qué cuenta de Telegram está utilizando actualmente. También en este menú puede salir de la aplicación OsmAnd Telegram simplemente tocando el botón *Cerrar sesión*.


### Búfer de registro {#logcat-buffer}

Aquí puede verificar y compartir registros detallados de la aplicación.


## Pantalla Mi ubicación {#my-location-screen}

En esta pantalla, puede ver sus contactos de Telegram. Puede elegir uno o más de ellos, establecer las opciones para compartir y comenzar a compartir su ubicación.

Después del primer lanzamiento, verá una lista de contactos sugeridos. Estos son los cinco contactos más recientes con los que ha compartido su ubicación. Solo puede hacer clic una vez para continuar compartiendo su ubicación con estos contactos.

Tiempo de uso compartido es el último tiempo de uso compartido que seleccionó para el contacto.

Cuando comience a compartir, verá una lista de contactos sugeridos y un botón *Volver a OsmAnd* en la pantalla *Mi ubicación*.

![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/8.jpg) ![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/9.jpg)


## Pantalla En vivo ahora {#live-now-screen}

En este menú, puede ver todos los contactos que están compartiendo una ubicación con usted. Toque el contacto y mírelo en el **mapa de OsmAnd**.

![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/Live.png)


### Marcador activo en el mapa de OsmAnd {#active-marker-on-the-osmand-map}

Le permite rastrear la distancia, la velocidad y el movimiento angular de sus contactos en el mapa de OsmAnd y en el texto de Telegram. Puede comprender dónde y cómo se mueve su contacto.

![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/6-1.jpg) ![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/7-1.jpg)


## Pantalla de línea de tiempo {#timeline-screen}

Esta es la tercera pestaña de la aplicación. Aquí puede seleccionar un día para ver el historial de ubicaciones compartidas con usted. Al seleccionar un día, se muestran los contactos que mostraron su ubicación ese día.

El monitoreo le permite recopilar información en segundo plano cuando sus contactos la comparten. Para ello, debe habilitarlo.

Para ver toda la información sobre la ubicación de un contacto, toque su icono o abra una pista GPX en OsmAnd y explore la pista con más detalle ([lea más aquí](./trip-recording.md)). También puede compartir la pista GPX durante un período seleccionado: enviándola a un correo electrónico o a cualquier mensajero instantáneo.

![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/4-1-Timeline.png) ![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/Timeline_2.png)

Puede ver el movimiento en línea de sus contactos en el mapa de OsmAnd utilizando la pista GPS en línea. Para ello, debe habilitar *En vivo* en el contacto en la *Línea de tiempo*. Si hay muchos contactos en común en este momento, la aplicación OsmAnd selecciona el color de las pistas al azar.

![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/1.jpg) ![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/2.jpg)

![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/3.jpg) ![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/4.jpg)

Cuando toca "Mostrar en OsmAnd" o en el minimapa, puede seleccionar configuraciones especiales para el seguimiento GPX de su contacto en la aplicación OsmAnd y ver su movimiento en tiempo real en el mapa de OsmAnd.

![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/5.jpg) ![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/6.jpg)

Si no se han recopilado datos en la fecha seleccionada, aparecerá una notificación especial en la pantalla. Puede moverse a la fecha más cercana tocando la flecha hacia adelante o hacia atrás.

![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/7.jpg)


## Widget de rastreador {#tracker-widget}

Para ver el [widget](../widgets/info-widgets.md#tracker-widget-android), primero debe habilitar el complemento OsmAnd Tracker. Después de eso, aparecerá un widget con la palabra *Iniciar* en la esquina superior derecha de la pantalla de OsmAnd.

Para deshabilitarlo, puede ir a *Menú principal → Configurar pantalla*.

![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/tracker_widget_1.png) ![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/tracker_widget_2.png)

El widget tiene varias vistas.

1. La primera es *Iniciar*.
   Cuando toca *Iniciar*, va a [**OsmAnd Online GPS Tracker**](https://play.google.com/store/apps/details?id=net.osmand.telegram), donde puede seleccionar cualquier contacto o tocar Contactos sugeridos.
2. Segundo, cuando comienza a compartir su ubicación, el widget cambia su apariencia.

   - El icono de emoji *OK* verde significa que su ubicación se está compartiendo. Todo es normal, el uso compartido se ejecuta sin errores.
   - Un icono de emoji *OK* naranja significa que su ubicación no se puede enviar. Hay un problema con la conexión a Internet o GPS.

   ![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/11.jpg) ![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/13.jpg)

   - Si no tiene conexión a Internet durante mucho tiempo, sus puntos de ubicación se guardan en el búfer de OsmAnd Tracker. El widget en OsmAnd cambia su apariencia a un icono de emoji gris. Muestra el tiempo de llenado del búfer, cuánto tiempo el búfer ya guarda sus puntos de ubicación.

   ![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/15.jpg) ![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/16.jpg)

3. Tan pronto como se restablezca la conexión a Internet, comenzará a cargar los puntos de ubicación del búfer. El widget de OsmAnd cambiará su apariencia y el número de minutos en él comenzará a disminuir. Cuando todos los puntos de ubicación del búfer se carguen en Telegram, aparecerá el icono de emoji *OK* en el widget.

   ![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/18.jpg) ![Rastreador OsmAnd](@site/static/img/plugins/online-tracker/23.jpg)

4. Si ve el widget como un icono de emoji *OK*, significa que todo está bien. El proceso de intercambio se está llevando a cabo sin ningún problema.


## Asistente de OsmAnd {#osmand-assistant}

La aplicación OsmAnd tiene su propio bot de Telegram llamado "OsmAnd Assistant", que le ayuda a integrar OsmAnd Telegram con rastreadores o API de terceros. Podrá compartir no solo su ubicación, sino también la ubicación de su bicicleta o de un grupo de personas que compiten, disponible a través de la API. OsmAnd Telegram le ofrecerá una bonita presentación de sus ubicaciones en el mapa en el propio OsmAnd.

Por favor, comparta con nosotros lo que piensa sobre esta nueva aplicación en [Twitter](https://twitter.com/osmandapp) y otros canales sociales.

Para ver las posiciones GPS de los contactos en el mapa, necesita la última versión de [OsmAnd o OsmAnd+](./../purchases/android.md). La versión mínima compatible de OsmAnd o OsmAnd+ es la 3.0.4.

> *Última actualización: julio de 2024*