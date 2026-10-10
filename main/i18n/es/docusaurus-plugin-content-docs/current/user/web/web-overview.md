---
source-hash: 5c0ec057fd60df8e67edea1ef3d5a69cce84edf9177789c1998911043f2d9f81
sidebar_position: 1
sidebar_label: Introducción
title: Introducción al Planificador Web
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

El **Planificador Web**, también conocido como el [**Portal de Mapas de OsmAnd**](https://osmand.net/map), es una extensión basada en navegador de la aplicación móvil OsmAnd. Permite a los usuarios ver mapas globales, planificar rutas, simular la navegación, gestionar datos personales y acceder al contenido sincronizado desde sus dispositivos a través de la nube.

Diseñado como un complemento multiplataforma para OsmAnd en Android e iOS, el Portal Web ayuda a los usuarios a planificar viajes, analizar tracks, ver el terreno y gestionar archivos utilizando cualquier navegador de escritorio o tableta — sin necesidad de instalar una aplicación.

OsmAnd Web se integra estrechamente con el servicio **OsmAnd Cloud**, que permite sincronizar favoritos、tracks y copias de seguridad entre dispositivos y plataformas. Los usuarios con cuentas **OsmAnd Start** (gratuita) o **OsmAnd Pro** (de pago) pueden aprovechar al máximo este ecosistema sincronizando datos entre el móvil y la web. Puede encontrar una comparación detallada de las funciones de *Start* y *Pro* en la sección [Acceso por suscripción](#subscription-accesses) a continuación.

> **Nota:** Incluso sin iniciar sesión o verificar su cuenta, aún puede usar varias funciones principales del Portal de Mapas Web, incluyendo: [Ruta de navegación](./web-navigation.md), [Planificador de rutas](./planner.md), [Capas meteorológicas](./web-weather.md) y [Ajustes](./web-map.md#settings).


## Características principales {#key-features}

El Portal Web ofrece las siguientes capacidades principales para trabajar con mapas y datos personales en el navegador: 

- [Mapa](./web-map.md) con cobertura global y datos vectoriales de alta calidad.
- [Planificación de rutas](./planner.md) utilizando perfiles de peatón, coche, bicicleta y otros.
- [Navegación](./web-navigation.md) vista previa con instrucciones paso a paso.
- [Búsqueda](./web-search.md) y [exploración](./web-search.md#explore) de lugares populares cercanos.
- Visualización de [Favoritos](./web-map.md#favorites), [Tracks](./web-map.md#tracks) y [PDI](./web-map.md#poi-overlay) en el mapa.
- [Capas meteorológicas](./web-weather.md): viento, temperatura y presión.
- [Capas de terreno](./web-map.md#terrain): sombreado, pendientes y vista de altitud.
- [Analizador de tracks](./web-tracks-analyzer.md) para perfiles de elevación y velocidad.
- Acceso completo a los datos sincronizados a través de [OsmAnd Cloud](./web-cloud#cloud-sync).
- Soporte para importación/exportación de archivos (GPX: tracks, favoritos).
- Integración perfecta con **OsmAnd Pro** y **OsmAnd Start**.

### Acceso por suscripción {#subscription-accesses}

![Cuenta Web](@site/static/img/web/web_start.png) ![Cuenta Web](@site/static/img/web/web_pro.png)

El Portal de Mapas Web admite varios niveles de acceso: sin inicio de sesión, con OsmAnd Start y con OsmAnd Pro. La tabla a continuación resume qué funciones están disponibles en cada nivel para que pueda ver rápidamente qué tiene ya y qué se hace disponible con una cuenta o una actualización. Esta visión general está destinada a ayudarle a decidir si necesita una cuenta en absoluto y, si la necesita, qué opción se ajusta mejor a cómo usa OsmAnd.

| Característica | Disponible en |
|--------|--------------|
| [Ruta de navegación](./web-navigation.md) | Sin inicio de sesión |
| [Planificador de rutas](./planner.md) | Sin inicio de sesión |
| [Capas meteorológicas](./web-weather.md) | Sin inicio de sesión |
| [Ajustes](./web-map.md#settings) | Sin inicio de sesión |
| [Menú de configuración de mapa](./web-map.md#configure-map-menu) ([PDI](./web-map.md#poi-overlay), [Favoritos](./web-map.md#favorites), [Tracks](./web-map.md#tracks))| [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) o [OsmAnd Pro](https://osmand.net/docs/user/purchases/) |
| [Menú de configuración de mapa](./web-map.md#configure-map-menu) ([Terreno](./web-map.md#terrain))| [OsmAnd Pro](https://osmand.net/docs/user/purchases/) |
| [Sincronización con OsmAnd Cloud](./web-cloud.md#cloud-sync) | [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) o [OsmAnd Pro](https://osmand.net/docs/user/purchases/) |
| [Búsqueda web, Lugares populares](./web-search.md) | [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) o [OsmAnd Pro](https://osmand.net/docs/user/purchases/) |
| [Carpetas y capa de Tracks](./web-tracks.md) | [OsmAnd Pro](https://osmand.net/docs/user/purchases/) |


## Cómo empezar {#how-to-start}

Para acceder a todas las funciones del Portal Web de OsmAnd, necesita iniciar sesión con una cuenta de OsmAnd Cloud.

- Si ya tiene una suscripción a [**OsmAnd Pro**](../personal/osmand-cloud.md#login) o desea crear una cuenta gratuita de [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), siga estos pasos:

1. Vaya al [**Portal de Mapas de OsmAnd**](https://osmand.net/map).
2. Abra el menú **Cuenta**:
   - **Iniciar sesión**: Ingrese la dirección de correo electrónico vinculada a su suscripción Pro o Start, o
   - **Crear cuenta**: Regístrese para obtener una cuenta gratuita de OsmAnd Start. Para una guía detallada paso a paso para crear una nueva cuenta, consulte el artículo [Cuenta de OsmAnd](./web-cloud).

![Cuenta Web](@site/static/img/web/web_account.png)


## Artículos relacionados {#related-articles}

- [Primeros pasos](../start-with/first-steps.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Compras web](../purchases/web.md)
- [Compras multiplataforma](../purchases/cross.md)