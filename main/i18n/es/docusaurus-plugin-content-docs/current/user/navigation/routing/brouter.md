---
source-hash: 54f960139673d7e63928d90ee9d92e56a29e0041c46723da9fc302c0ac415a0a
sidebar_position: 12
title:  BRouter
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

:::caution SOLO ANDROID
El algoritmo de enrutamiento de terceros BRouter solo está disponible para la versión de Android de la aplicación OsmAnd.
:::

*BRouter* es un algoritmo de enrutamiento de terceros que se puede utilizar en la aplicación OsmAnd para el [modo de navegación sin conexión](../guidance/navigation-settings.md#navigation-type). Está diseñado para optimizar una ruta basándose en diferentes parámetros, como el tiempo, la distancia o el tipo de vehículo.

[BRouter](http://brouter.de/) utiliza datos de OpenStreetMap para crear una ruta y luego la ajusta según los parámetros especificados. Utiliza rutas precalculadas para construir rápidamente una ruta sin conexión. También le permite personalizar perfiles de enrutamiento, que se definen por un conjunto de parámetros para tener en cuenta diversos factores en la selección de la ruta. El archivo [readme.txt de BRouter](http://brouter.de/brouter/readme.txt) explica con más detalle cómo instalar y utilizar el programa.

OsmAnd le brinda la capacidad de seleccionar rutas con BRouter y configurar perfiles de enrutamiento para definir mejor la ruta según sus necesidades.

Para más información puede visitar el [sitio web oficial de Brouter](http://www.brouter.de/brouter/algorithm.html).

La integración de BRouter en OsmAnd cambió mucho durante el verano de 2019. Esta guía asume que está utilizando la aplicación BRouter para Android en la versión 1.5.0 o superior, así como OsmAnd en la versión 3.4 o superior.

:::note
El algoritmo de enrutamiento de terceros BRouter solo está disponible para la versión de Android de la aplicación OsmAnd.
:::  


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview2.png').default} alt="BRouter"/></td>
    </tr>
</table>


## Cómo configurar {#how-to-configure}

Siga esta guía para instalar y configurar la aplicación de terceros *BRouter Offline Navigation* para su uso en OsmAnd.

**1.** Para empezar, necesita instalar la aplicación BRouter en su dispositivo Android desde [F-Droid](https://f-droid.org/packages/btools.routingapp) o [Google Play Store](https://play.google.com/store/apps/details?id=btools.routingapp) en su dispositivo.
**2.** Luego, para navegar usando la aplicación OsmAnd a lo largo de rutas precalculadas con BRouter, necesita:


  - Abrir la aplicación BRouter y tocar *Download Manager*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.png').default} alt="BRouter"/></td>
    </tr>
</table>

  - Hacer zoom y seleccionar las áreas en las que desea enrutar. Luego haga clic en "Start Download" y BRouter comenzará a descargar los archivos de [segmentos](http://brouter.de/brouter/segments4/) para las áreas seleccionadas.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-start-1.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-start.png').default} alt="BRouter"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-downl.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-update.png').default} alt="BRouter"/></td>
    </tr>
</table>

**Nota** que tendrá que repetir este paso periódicamente, siempre que desee tener una versión actualizada de los datos de OSM utilizados para el enrutamiento.

**3.** Una vez hecho esto, inicie de nuevo la aplicación BRouter y elija la entrada "BRouter App" en el *Menú Principal*. Elija un perfil de enrutamiento dependiendo de su modo de viaje. Podría ser ciclismo, ciclomotor, senderismo o trekking. Una lista de perfiles disponibles para descargar en formato *brf* se puede encontrar [aquí](http://brouter.de/brouter/profiles2/). O puede intentar usar el perfil de enrutamiento en [BRouter-online](http://brouter.de/brouter-web/).
Haga clic en "Service-Mode". Luego, marque las casillas de los modos de enrutamiento para los que desea utilizar este perfil. Puede usar dos perfiles diferentes por modo de transporte, que se asignarán a los preajustes "más corto" y "más rápido" (estas son solo etiquetas) en OsmAnd.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.png').default} alt="BRouter"/></td>
    </tr>
</table>  

**4.** Si ya ha cargado algún segmento previamente, se mostrarán en el mapa de BRouter. Los segmentos tienen cuatro estados:

- Cuadrado *"Verde"* - Nuevo segmento seleccionado para descargar.
- Cuadrado *"Azul"* - El segmento con datos actualizados.
- Cuadrado *"Gris"* - El segmento ya está descargado pero requiere actualización.
- Cuadrado *"Amarillo"* - El segmento se está actualizando.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter-downl2.png').default} alt="BRouter"/>
    </tr>
</table>

**5.** Cuando haya cargado los segmentos de mapa requeridos con BRouter y seleccionado un perfil de enrutamiento en él, todos los siguientes ajustes de este tipo de navegación se realizan en la aplicación OsmAnd.

**6.** Puede crear un "Perfil de aplicación" en OsmAnd que utilizará BRouter para el enrutamiento sin conexión.
Use el tipo de enrutamiento *BRouter (sin conexión)* con cualquier [perfil](../../personal/profiles.md) en la aplicación OsmAnd. Para hacer esto, vaya al menú principal *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_offline,shared_string_external,routing_profile_broutrer"/>* y cree un nuevo perfil basado en el perfil base de su elección (ciclismo aquí, para enrutamiento en bicicleta), con un nombre personalizado de su elección ("BRouter" en la captura de pantalla a continuación) y haciendo uso de "BRouter (sin conexión)" para la navegación.


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-2.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-3.png').default} alt="BRouter"/></td>
    </tr>
</table>

La aplicación BRouter debe iniciarse antes que OsmAnd para que esta entrada específica aparezca en OsmAnd. Por lo tanto, si no puede encontrar la opción de navegación "BRouter (sin conexión)", debe forzar el cierre de OsmAnd y reiniciarlo.

## Versión 4.7.1 de OsmAnd {#osmand-version-471}

A partir de la versión 4.7.1, Osmand admite el parámetro de perfil para el mapeo: desde la versión 3 de Osmand, se pueden definir muchos perfiles en Osmand y puede cambiar fácilmente entre estos perfiles. Se debe crear un nuevo perfil, por ejemplo, copiando el perfil existente de *Ciclismo* y dándole un nuevo nombre en el formato Brouter[fastbike]. Puede usar cualquiera de los perfiles de BRouter existentes en el nombre que estén instalados en su dispositivo. Todos los archivos de perfil tienen un formato de nombre de 'xxxxxxx.brf'. O podría crear un nuevo perfil propio, como 'myprofile.brf'.

La convención de nomenclatura en el perfil de OsmAnd es importante ya que el perfil de BRouter incluido en ese perfil establece el puente real entre OsmAnd y BRouter.

- Si en Osmand un perfil tiene *BRouter* definido como servicio de navegación
- Y el nombre del perfil se ve como "Brouter[micadena]"

Entonces el perfil "micadena" se usará en la aplicación Brouter. Este nuevo mapeo reemplaza en ese caso el mapeo básico definido anteriormente y basado en el archivo "serviceconfig.dat".

### Ejemplos: nombre de perfil de Osmand en la aplicación Brouter {#examples-osmand-profile-name-brouter-app}

```xml
Brouter[trekking] se usará el perfil "trekking" archivo: trekking.brf
Brouter[fastbike] se usará el perfil "fastbike" archivo: fastbike.brf
....
```

Observación:
Actualmente Osmand no comprueba el nombre definido (sensible a mayúsculas) para el perfil de Brouter (micadena).
Si no se encuentra ningún perfil, el enrutamiento fallará con "No se pudo calcular la ruta...".

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter_profile.png').default} alt="BRouter"/>
    </tr>
</table>

## Cómo usar {#how-to-use}

Esta sección describe una comparación de BRouter con el enrutamiento interno de la aplicación OsmAnd.

Cuando BRouter está configurado, podemos comparar la velocidad de pre-cálculo de los datos de enrutamiento de BRouter con el enrutamiento interno de OsmAnd. Elijamos dos puntos aleatorios en los Países Bajos y comencemos a calcular el viaje. Para esto, establecemos un estilo de conducción equilibrado sin usar datos de altitud para el perfil base. El tiempo de cálculo para este viaje es de 14.5 segundos para nuestra ruta interna de OsmAnd. El tiempo de cálculo de la ruta al usar el enrutamiento de BRouter es de menos de 1 segundo.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof21.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof21a.jpg').default} alt="BRouter"/></td>
    </tr>
</table>


## Parámetros de ruta {#route-parameters}

*<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2,route_parameters"/>*  

![BRouter](@site/static/img/navigation/routing/BRouter_route_param.png)

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="fast_route_mode"/>* | <Translate android="true" ids="routing_attr_short_way_description"/>  <Translate android="true" ids="fast_route_mode_descr"/> | En la mayoría de los casos, se sugerirá la ruta más corta. A menudo, esta ruta puede tardar más que si la configuración estuviera deshabilitada |
| *<Translate android="true" ids="temporary_conditional_routing"/>* |  Lea sobre la opción Considerar limitaciones temporales en este [artículo](../routing/osmand-routing.md#consider-temporary-limitations).   | El algoritmo de enrutamiento considera las restricciones de tiempo especificadas en OpenStreetMap. Tenga en cuenta que, en algunos casos, la información de OSM puede estar desactualizada.   |


### Otros ajustes de enrutamiento {#other-routing-settings}

- ***<Translate android="true" ids="calculate_osmand_route_without_internet"/>*** (*Navegación → Ajustes*, [imagen](../routing/online-routing.md#online-routing-setting)). Si esta opción está habilitada, OsmAnd agrega dos segmentos a la ruta calculada de Brouter: uno desde *[Mi ubicación](../../map/interact-with-map.md#my-location-and-zoom)* hasta el punto de inicio de la ruta y otro desde el final de la ruta hasta el punto final de su ruta. Esta opción está activa si la distancia hacia o desde la ruta excede los 60 metros.

- En la [sección *Recalcular ruta*](../../navigation/guidance/navigation-settings.md#recalculate-route) de los *Parámetros de ruta*, puede habilitar y ajustar las opciones de recálculo de ruta.

- En la [sección *Desarrollo*](../guidance/navigation-settings.md#development-settings) de los *Parámetros de ruta*, puede probar nuevas funciones de enrutamiento que se encuentran actualmente en fase de prueba. Tenga en cuenta que estos ajustes solo están disponibles cuando el [plugin de desarrollo de OsmAnd](../../plugins/development.md) está habilitado.