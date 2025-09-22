---
source-hash: ad9c1155352c7c8fc6705861acfb7f006ba101d59528a256c0205ba34b62fd80
sidebar_position: 11
title:  Enrutamiento en línea
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

## Resumen {#overview}

<InfoAndroidOnly />

El enrutamiento en línea es una herramienta potente que puede ayudar a los usuarios a ahorrar tiempo y navegar de manera más eficiente. Sin embargo, es importante tener en cuenta que el enrutamiento en línea depende de la conectividad a Internet y puede no estar disponible en áreas con poca cobertura de red. Además, los usuarios siempre deben tener precaución y usar su juicio al seguir cualquier ruta sugerida por un servicio de enrutamiento en línea.

![Enrutamiento en línea Android](@site/static/img/navigation/routing/online_routing_andr.png)

## Parámetros de ruta - Enrutamiento en línea {#route-parameters---online-routing}

El *Enrutamiento en línea* se puede habilitar en la sección [Tipo de navegación](../guidance/navigation-settings.md#overview) de los ajustes de Navegación del *Perfil* seleccionado. En OsmAnd hay dos *motores de enrutamiento en línea* predefinidos ([ZLZK](https://zlzk.biz/) y [OSM DE](https://routing.openstreetmap.de)), que proporcionan tres tipos de *Enrutamiento en línea*: *Bicicleta, Coche y A pie*.

:::note
Los tipos de enrutamiento en línea están diseñados para los perfiles de *Conducción, Ciclismo y Caminata*, aunque también se pueden usar con otros perfiles de OsmAnd (Camión, Motocicleta, Esquí, Equitación). Se proporcionan "tal cual", por lo que no puede personalizarlos según sus necesidades utilizando diferentes opciones de navegación.
:::

### Enrutamiento en línea personalizado {#custom-online-routing}

Además de los tipos de enrutamiento en línea preestablecidos, puede configurar otros mecanismos de enrutamiento en línea.
Toque el botón **+ Añadir motor de enrutamiento en línea** y elija uno de los tipos de enrutamiento en línea propuestos ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Openrouteservice](https://openrouteservice.org)). Seleccione el vehículo apropiado y toque *probar enrutamiento* antes de guardar sus cambios.

![Enrutamiento en línea personalizado Android](@site/static/img/navigation/routing/custom_online_routing_andr_1.png) ![Enrutamiento en línea personalizado Android](@site/static/img/navigation/routing/custom_online_routing_andr_2.png)

:::info
Puede leer sobre las diferencias entre los motores de enrutamiento en línea en [OSMwiki](https://wiki.openstreetmap.org/wiki/Routing/online_routers).
:::

### Enrutamiento GPX en línea personalizado {#custom-online-gpx-routing}

El servidor en línea construye una ruta utilizando su punto de partida y destino. Después de recibir la pista del servidor, OsmAnd crea una ruta utilizando la función *[Ajustar a las carreteras](../setup/gpx-navigation.md#attach-to-the-roads)*. Así, toda la información de enrutamiento necesaria se tomará de nuestros mapas sin conexión, y se proporcionará una guía más precisa a lo largo de la ruta.

![Enrutamiento GPX personalizado Android 1](@site/static/img/navigation/routing/online_routing_gpx_1.png) ![Enrutamiento GPX personalizado Android 1](@site/static/img/navigation/routing/online_routing_gpx_2.png)

## Ajuste de enrutamiento en línea {#online-routing-setting}

Cuando se selecciona el enrutamiento en línea para la navegación, aparece una opción adicional en los ajustes.

![Ajustes de enrutamiento en línea Android](@site/static/img/navigation/routing/settings_online_routing_1.png)

- *<Translate android="true" ids="calculate_osmand_route_without_internet"/>* - Permite usar el enrutamiento sin conexión de OsmAnd, cuando el enrutamiento en línea está seleccionado en los ajustes de navegación. Esta opción puede ser útil si ya se ha construido una ruta en línea, pero luego hubo una desviación de la ruta y al mismo tiempo se perdió la conexión a Internet. En este caso, se utilizará el enrutamiento sin conexión para volver a la ruta, calculada previamente en línea.