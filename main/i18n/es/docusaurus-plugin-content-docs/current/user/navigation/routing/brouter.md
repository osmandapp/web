---
source-hash: 7669ebc684d82d59a895a98d5dc83c05fad8cf9113b076ddb5dd9660c461ce5e
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




## Descripción general {#overview}

:::caution SOLO ANDROID
El algoritmo de enrutamiento de terceros BRouter solo está disponible para la versión de Android de la aplicación OsmAnd.
:::

*BRouter* es un algoritmo de enrutamiento de terceros que se puede usar en la aplicación OsmAnd para el [modo de navegación sin conexión](../guidance/navigation-settings.md#navigation-type). Está diseñado para optimizar una ruta basada en diferentes parámetros, como el tiempo, la distancia o el tipo de vehículo.

[BRouter](http://brouter.de/) utiliza datos de OpenStreetMap para crear una ruta y luego la ajusta en función de los parámetros especificados. Utiliza rutas precalculadas para construir rápidamente una ruta sin conexión. También le permite personalizar los perfiles de enrutamiento, que se definen mediante un conjunto de parámetros para tener en cuenta varios factores en la selección de rutas. El archivo [BRouter readme.txt](http://brouter.de/brouter/readme.txt) explica con más detalle cómo instalar y usar el programa.

OsmAnd le brinda la capacidad de seleccionar rutas con BRouter y configurar perfiles de enrutamiento para definir mejor la ruta según sus necesidades.

Para obtener más información, puede visitar el [sitio web oficial de Brouter](http://www.brouter.de/brouter/algorithm.html).

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

Siga esta guía para instalar y configurar la aplicación de terceros *BRouter Offline Navigation* para usarla en OsmAnd.

**1.** Para comenzar, debe instalar la aplicación BRouter en su dispositivo Android desde [F-Droid](https://f-droid.org/packages/btools.routingapp) o [Google Play Store](https://play.google.com/store/apps/details?id=btools.routingapp) en su dispositivo.
**2.** Luego, para navegar usando la aplicación OsmAnd a lo largo de rutas precalculadas con BRouter, debe:


  - Abra la aplicación BRouter y toque *Download Manager*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.png').default} alt="BRouter"/></td>
    </tr>
</table>

  - Acérquese y seleccione las áreas en las que desea enrutar. Luego haga clic en "Iniciar descarga" y BRouter comenzará a descargar los archivos de [segmentos](http://brouter.de/brouter/segments4/) para las áreas seleccionadas.

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

**Tenga en cuenta** que deberá repetir este paso periódicamente, cada vez que desee tener una versión actualizada de los datos de OSM utilizados para el enrutamiento.

**3.** Una vez hecho esto, inicie de nuevo la aplicación BRouter y elija la entrada "BRouter App" en el *Menú principal*. Elija un perfil de enrutamiento según su modo de viaje. Podría ser ciclismo, ciclomotor, senderismo o trekking. Una lista de perfiles disponibles para descargar en formato *brf* se puede encontrar [aquí](http://brouter.de/brouter/profiles2/). O puede intentar usar el perfil de enrutamiento en [BRouter-online](http://brouter.de/brouter-web/).
Haga clic en "Modo de servicio". Luego, marque las casillas de los modos de enrutamiento para los que desea usar este perfil. Puede usar dos perfiles diferentes por modo de transporte, que se asignarán a los ajustes preestablecidos "más corto" y "más rápido" (estos son solo etiquetas) en OsmAnd.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.png').default} alt="BRouter"/></td>
    </tr>
</table>

**4.** Si ya ha cargado algún segmento anteriormente, se mostrarán en el mapa de BRouter. Los segmentos tienen cuatro estados:

- Cuadrado *"verde"* - Nuevo segmento seleccionado para descargar.
- Cuadrado *"azul"* - El segmento con datos actualizados.
- Cuadrado *"gris"* - El segmento ya está descargado pero requiere actualización.
- Cuadrado *"amarillo"* - El segmento se está actualizando.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter-downl2.png').default} alt="BRouter"/>
    </tr>
</table>

**5.** Cuando haya cargado los segmentos de mapa requeridos con BRouter y haya seleccionado un perfil de enrutamiento en él, todas las siguientes configuraciones de este tipo de navegación se realizan en la aplicación OsmAnd.

**6.** Puede crear un "Perfil de aplicación" en OsmAnd que usará BRouter para el enrutamiento sin conexión.
Utilice el tipo de enrutamiento *BRouter (sin conexión)* con cualquier [perfil](../../personal/profiles.md) en la aplicación OsmAnd. Para ello, vaya al *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_offline,shared_string_external,routing_profile_broutrer"/>* principal y cree un nuevo perfil basado en el perfil base de su elección (ciclismo aquí, para enrutamiento en bicicleta), con un nombre personalizado de su elección ("BRouter" en la captura de pantalla a continuación) y utilizando "BRouter (sin conexión)" para la navegación.


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-2.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-3.png').default} alt="BRouter"/></td>
    </tr>
</table>

La aplicación BRouter debe iniciarse antes de OsmAnd para que esta entrada específica aparezca en OsmAnd. Por lo tanto, si no puede encontrar la opción de navegación "BRouter (sin conexión)", debe forzar el cierre de OsmAnd y reiniciarlo.

## OsmAnd Versión 4.7.1 {#osmand-version-471}

A partir de la versión 4.7.1, Osmand admite el parámetro de perfil para el mapeo: Desde la versión 3 de Osmand, se pueden definir muchos perfiles en Osmand y se puede cambiar fácilmente entre estos perfiles. Se debe crear un nuevo perfil, por ejemplo, copiando el perfil *Ciclismo* existente y dándole un nuevo nombre en el formato Brouter[fastbike]. Puede usar cualquiera de los perfiles BRouter existentes en el nombre que estén instalados en su dispositivo. Todos los archivos de perfil tienen un formato de nombre de 'xxxxxxx.brf'. O puede crear un nuevo perfil propio, como 'myprofile.brf'.

La convención de nomenclatura en el perfil de OsmAnd es importante ya que el perfil de BRouter incluido en ese perfil establece el puente real entre OsmAnd y BRouter.

- Si en Osmand un perfil tiene *BRouter* definido como servicio de navegación
- Y el nombre del perfil se parece a "Brouter[cadena]"

Entonces se utilizará el perfil "cadena" en la aplicación Brouter. Este nuevo mapeo reemplaza en ese caso el mapeo básico definido anteriormente y basado en el archivo "serviceconfig.dat".

### Ejemplos: Nombre de perfil de Osmand - aplicación Brouter {#examples-osmand-profile-name-brouter-app}

```xml
Brouter[trekking] se utilizará el perfil "trekking" archivo: trekking.brf
Brouter[fastbike] se utilizará el perfil "fastbike" archivo: fastbike.brf
....
```

Observación:
Actualmente, Osmand no verifica el nombre definido (sensible a mayúsculas y minúsculas) para el perfil de Brouter (cadena).
Si no se encuentra ningún perfil, el enrutamiento fallará con "No se pudo calcular la ruta...".

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter_profile.png').default} alt="BRouter"/>
    </tr>
</table>

## Cómo usar {#how-to-use}

Esta sección describe una comparación de BRouter con el enrutamiento interno de la aplicación OsmAnd.

Cuando BRouter está configurado, podemos comparar la velocidad de pre-cálculo de los datos de enrutamiento de BRouter con el enrutamiento interno de OsmAnd. Elegiremos dos puntos aleatorios en los Países Bajos y comenzaremos a calcular el viaje. Para esto, establecemos un estilo de conducción equilibrado sin usar datos de altitud para el perfil base. El tiempo de cálculo para este viaje es de 14.5 segundos para nuestra ruta interna de OsmAnd. El tiempo de cálculo de la ruta al usar el enrutamiento de BRouter es de menos de 1 segundo.

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
| *<Translate android="true" ids="fast_route_mode"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> <Translate android="true" ids="fast_route_mode_descr"/> | En la mayoría de los casos, se sugerirá la ruta más corta. A menudo, esta ruta puede tardar más que si la configuración estuviera deshabilitada |
| *<Translate android="true" ids="temporary_conditional_routing"/>* | Lea sobre la opción Considerar limitaciones temporales en este [artículo](../routing/osmand-routing.md#consider-temporary-limitations). | El algoritmo de enrutamiento considera las restricciones de tiempo especificadas en OpenStreetMap. Tenga en cuenta que, en algunos casos, la información de OSM puede estar desactualizada. |


### Otras configuraciones de enrutamiento {#other-routing-settings}

- ***<Translate android="true" ids="calculate_osmand_route_without_internet"/>*** (*Navegación → Ajustes*, [imagen](../routing/online-routing.md#online-routing-setting)). Si esta opción está habilitada, OsmAnd añade dos segmentos al track Brouter calculado: uno desde *[Mi ubicación](../../map/interact-with-map.md#my-location-and-zoom)* hasta el punto de inicio del track y otro desde el final del track hasta el punto final de su ruta. Esta opción está activa si la distancia hacia o desde el track excede los 60 metros.

- En la sección [*Recalcular ruta*](../../navigation/guidance/navigation-settings.md#recalculate-route) de los *Parámetros de ruta*, puede habilitar y ajustar las opciones de recálculo de ruta.

- En la [*sección de desarrollo*](../guidance/navigation-settings.md#development-settings) de los *Parámetros de ruta*, puede probar nuevas funciones de enrutamiento que se encuentran actualmente en fase de prueba. Tenga en cuenta que estas configuraciones solo están disponibles cuando el [complemento de desarrollo de OsmAnd](../../plugins/development.md) está habilitado.

> *Última actualización: junio de 2024*