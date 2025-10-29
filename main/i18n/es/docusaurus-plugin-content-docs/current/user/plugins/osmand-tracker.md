---
source-hash: 135ec49c254081b73e19f0be40cdfb7296889f8a4d91b09b4c6be58544461e26
sidebar_position: 11
title:  OsmAnd Tracker
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

## Vista general {#overview}

OsmAnd Tracker es un cliente de Telegram modificado creado para la monitorización flexible y el envío de mensajes con ubicaciones GPS en tiempo real.

[OsmAnd tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) te ayuda a ver a tus contactos en un mapa en OsmAnd. Tiene un aspecto social, lo que significa que para usarlo, necesitas proporcionar acceso a tus contactos a la plataforma que OsmAnd elija.

Elegimos [Telegram](https://telegram.org/) como la plataforma social más abierta porque tiene una [API Abierta](https://core.telegram.org/api), un SDK Abierto y, además, eventualmente tendrá una implementación de Servidor Abierto (Blockchain).

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My_Location.png)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Map.png)


### Cómo funciona {#how-it-works}

Es importante destacar que existe un alto nivel de compatibilidad entre las aplicaciones. Puedes compartir fácilmente tu ubicación con tus contactos sin tener la aplicación móvil de Telegram (OsmAnd Online GPS Tracker es un cliente de Telegram independiente) y, a la inversa, tus contactos no necesitan tener [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) para ver tu ubicación.

Diseñamos [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) para que puedas seguir utilizando la aplicación de Telegram y la aplicación de OsmAnd de la forma a la que estás acostumbrado, sin restricciones adicionales.

La aplicación envía mensajes de Ubicación en Vivo a los chats seleccionados durante el tiempo que establezcas, muestra una lista de tus contactos y grupos, y revisa los chats en busca de mensajes con tu ubicación, que luego se muestran en el mapa de OsmAnd.
La aplicación no envía ni ve tus mensajes de texto.

Inicia sesión con tu número de teléfono registrado en Telegram para habilitar lo siguiente:

- Gestionar la lista de contactos y grupos que te envían su ubicación.
- Ver la ubicación de los contactos y grupos en tiempo real en un mapa en OsmAnd.
- Establecer el tiempo para compartir la ubicación por separado para cada chat.
- Establecer la frecuencia con la que se actualiza tu ubicación.
- Monitorizar la cronología de tus movimientos y los de tus contactos.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My-location_1.png)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


## Parámetros de configuración requeridos {#required-setup-parameters}

Puedes instalar OsmAnd Online GPS Tracker:

- desde la [tienda Google Play](https://play.google.com/store/apps/details?id=net.osmand.telegram)
- o desde el [servidor de OsmAnd](https://download.osmand.net/latest-night-build/OsmAnd-tracker.apk) (archivo APK)


## Ajustes del complemento {#plugin-settings}

Hay varias configuraciones para gestionar la frecuencia con la que se comparte la ubicación y controlar la visualización de las ubicaciones que te envían.

Para abrir el menú de *Ajustes*:

*Pantalla [Mi ubicación](#my-location-screen) → deslizar pantalla hacia abajo (lista de contactos) → ⋮ → Ajustes*
o
*Pantalla [En vivo ahora](#live-now-screen) → ⋮ → Ajustes*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings_1.png)


### Posición {#position}

**Enviar mi ubicación** — te permite establecer el intervalo para enviar tu posición desde una vez por segundo (para aumentar la precisión) hasta una vez cada 5 minutos (para reducir el consumo de energía).

**Sin movimiento** — te permite establecer el tiempo (de 1 minuto a 1 hora) después del cual la ubicación de un contacto se considera obsoleta. Si una ubicación se vuelve obsoleta, se vuelve gris.

**Historial de ubicaciones** — te permite establecer el tiempo (de 5 minutos a 24 horas) después del cual el contacto con la ubicación eliminada se ocultará de la lista y del mapa de OsmAnd.

**Enviar ubicación como** - te permite elegir una categoría para enviar mensajes sobre tu ubicación en Telegram (3 tipos de envío): texto, mapa, texto y mapa.

**Tiempo de expiración del búfer** - te permite elegir el tiempo de guardado de los puntos en el búfer.

**Trabajo en segundo plano** - te permite cambiar los ajustes de optimización de la batería para estabilizar el uso compartido de la ubicación.

**Fuente de ubicación** - te permite elegir *Google Play Services* (por defecto) o *Android API* para determinar la ubicación.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/settingstracker.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Unidades y Formatos {#units--formats}

Permite añadir ajustes para unidades y formatos. Ahora puedes elegir tus valores cómodos para los mensajes de Telegram al compartir datos de ubicación.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/22.jpg)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Apariencia {#appearance}

Permite mostrar el número de puntos GPS recibidos de otros contactos, así como los enviados por ti.


### Privacidad {#privacy}

Uso de proxy dentro de OsmAnd Tracker. Ve a Ajustes y escribe los datos de tu proxy: *Ajustes → Privacidad → Ajustes de Proxy*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3-1.jpg)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1.jpg)


### Ajustes de GPS {#gps-settings}

Ajustes de los puntos de ubicación. Por ejemplo, si permaneces en un lugar durante algún tiempo sin moverte, los datos de tu punto de ubicación no se envían y tu trazado GPX mostrará datos más precisos y exactos.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5-1.jpg)


### Compartir ubicación como {#share-location-as}

Si quieres conectar varios dispositivos a una cuenta de Telegram, necesitas hacer clic en "Añadir dispositivo" y nombrar el dispositivo.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-ShowGPSPoints.png)


### OsmAnd Connect {#osmand-connect}

Este ajuste te permite seleccionar la versión de OsmAnd en la que tus contactos con su ubicación aparecerán en el mapa.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-2.png)


### Cuenta {#account}

Usa este ajuste para verificar qué cuenta de Telegram estás usando actualmente. También en este menú puedes salir de la aplicación OsmAnd Telegram simplemente tocando el botón *Cerrar sesión*.


### Búfer Logcat {#logcat-buffer}

Aquí puedes revisar y compartir registros detallados de la aplicación.


## Pantalla Mi ubicación {#my-location-screen}

En esta pantalla, puedes ver tus contactos de Telegram. Puedes elegir uno o más de ellos, establecer las opciones para compartir y empezar a compartir tu ubicación.

Tras el primer inicio, verás una lista de Contactos sugeridos. Estos son los cinco contactos más recientes con los que has compartido tu ubicación. Solo tienes que hacer un clic para seguir compartiendo tu ubicación con estos contactos.

Tiempo de compartición es el último tiempo de compartición que seleccionaste para el contacto.

Cuando empieces a compartir, verás una lista de Contactos sugeridos y un botón *Volver a OsmAnd* en la pantalla *Mi ubicación*.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/8.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/9.jpg)


## Pantalla En vivo ahora {#live-now-screen}

En este menú, puedes ver todos los contactos que están compartiendo una ubicación contigo. Toca el contacto y míralo en el **mapa de OsmAnd**.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


### Marcador activo en el mapa de OsmAnd {#active-marker-on-the-osmand-map}

Permite seguir la distancia, la velocidad y el ángulo de movimiento de tus contactos en el mapa de OsmAnd y en el texto de Telegram. Puedes entender dónde y cómo se está moviendo tu contacto.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7-1.jpg)


## Pantalla Línea de tiempo {#timeline-screen}

Esta es la tercera pestaña de la aplicación. Aquí puedes seleccionar un día para ver el historial de ubicaciones compartidas contigo. Al seleccionar un día se muestran los contactos que mostraron su ubicación ese día.

La monitorización te permite recopilar información en segundo plano cuando tus contactos la comparten. Para ello, debes activarla.

Para ver toda la información sobre la ubicación de un contacto, toca su icono o abre un trazado GPX en OsmAnd y explora el trazado con más detalle ([lee más aquí](./trip-recording.md)). También puedes compartir el trazado GPX de un período seleccionado: enviándolo a un correo electrónico o a cualquier mensajería instantánea.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1-Timeline.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Timeline_2.png)

Puedes ver el movimiento en línea de tus contactos en el mapa de OsmAnd utilizando el trazado GPS en línea. Para ello, necesitas activar *En vivo* en el contacto en la *Línea de tiempo*. Si hay muchos contactos en común en ese momento, la aplicación OsmAnd selecciona el color de los trazados al azar.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/2.jpg)

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4.jpg)

Cuando tocas "Mostrar en OsmAnd" o en el minimapa, puedes seleccionar ajustes especiales para el seguimiento GPX de tu contacto en la aplicación OsmAnd y ver su movimiento en tiempo real en el mapa de OsmAnd.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6.jpg)

Si no hay datos recopilados en la fecha seleccionada, aparecerá una notificación especial en la pantalla. Puedes moverte a la fecha más cercana tocando la flecha de avance o retroceso.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7.jpg)


## Widget de Tracker {#tracker-widget}

Para ver el [widget](../widgets/info-widgets.md#trip-recording-widgets), primero debes activar el complemento OsmAnd Tracker. Después de eso, aparecerá un widget con la palabra *Iniciar* en la esquina superior derecha de la pantalla de OsmAnd.

Para desactivarlo, puedes ir a *Menú principal → Configurar pantalla*.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_1.png)   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_2.png)

El widget tiene varias vistas.

1. La primera es *Iniciar*.
   Cuando tocas *Iniciar*, vas a [**OsmAnd Online GPS Tracker**](https://play.google.com/store/apps/details?id=net.osmand.telegram), donde puedes seleccionar cualquier contacto o tocar en Contactos sugeridos.
2. Segundo, cuando comienzas a compartir tu ubicación, el widget cambia su apariencia.

   - El icono de emoji *OK* verde significa que tu ubicación se está compartiendo ahora. Todo es normal, la compartición se está ejecutando sin errores.
   - Un icono de emoji *OK* naranja significa que tu ubicación no se puede enviar. Hay un problema con la conexión a Internet o GPS.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/11.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/13.jpg)

   - Si no tienes conexión a Internet durante mucho tiempo, tus puntos de ubicación se guardan en el búfer de OsmAnd Tracker. El widget en OsmAnd cambia su apariencia a un icono de emoji gris. Muestra el tiempo de llenado del búfer, cuánto tiempo lleva el búfer guardando tus puntos de ubicación.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/15.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/16.jpg)

3. Tan pronto como se restablezca la conexión a Internet, comenzará a cargar los puntos de ubicación desde el búfer. El widget de OsmAnd cambiará su apariencia y el número de minutos en él comenzará a disminuir. Cuando todos los puntos de ubicación del búfer se carguen en Telegram, aparecerá el icono de emoji *OK* en el widget.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/18.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/23.jpg)

4. Si ves el widget como un icono de emoji *OK*, significa que todo está bien. El proceso de intercambio se está realizando sin problemas.


## Asistente de OsmAnd {#osmand-assistant}

La aplicación OsmAnd tiene su propio bot de Telegram llamado "OsmAnd Assistant", que te ayuda a integrar OsmAnd Telegram con rastreadores o API de terceros. Podrás compartir no solo tu ubicación, sino también la ubicación de tu bicicleta o de un grupo de personas en una carrera disponible a través de la API. OsmAnd Telegram te ofrecerá una buena presentación de tus ubicaciones en el mapa en el propio OsmAnd.

Por favor, comparte con nosotros lo que piensas sobre esta nueva aplicación en [Twitter](https://x.com/osmandapp) y otros canales sociales.

Para ver las posiciones GPS de los contactos en el mapa, necesitas la última versión de [OsmAnd o OsmAnd+](./../purchases/android.md). La versión mínima compatible de OsmAnd o OsmAnd+ es la 3.0.4.