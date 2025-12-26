---
source-hash: a52737232a71758590dfdb7cfbb68622999fbec373babd2b56b429093731d394
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

<!--
<InfoIncompleteArticle/>
-->

## Resumen {#overview}

El **Planificador Web**, también conocido como el [**Portal de Mapas de OsmAnd**](https://osmand.net/map), es una extensión basada en navegador de la aplicación móvil OsmAnd. Permite a los usuarios ver mapas globales, planificar rutas, simular la navegación, gestionar datos personales y acceder al contenido sincronizado desde sus dispositivos a través de la nube.

Diseñado como un complemento multiplataforma para OsmAnd en Android e iOS, el Portal Web ayuda a los usuarios a planificar viajes, analizar tracks, ver el terreno y gestionar archivos utilizando cualquier navegador de escritorio o tableta — sin necesidad de instalar una aplicación.

OsmAnd Web se integra estrechamente con el servicio **OsmAnd Cloud**, que permite sincronizar favoritos, tracks y copias de seguridad entre dispositivos y plataformas. Los usuarios con cuentas **OsmAnd Start** (gratuita) o **OsmAnd Pro** (de pago) pueden aprovechar al máximo este ecosistema sincronizando datos entre el móvil y la web. Puede encontrar una comparación detallada de las funciones de *Start* y *Pro* en la sección [Acceso por suscripción](#subscription-access) a continuación.

> **Nota:** Incluso sin iniciar sesión o verificar su cuenta, aún puede usar varias funciones principales del Portal de Mapas Web, incluyendo: [Ruta de navegación](./planner.md), [Planificador de rutas](./planner.md), [Capas meteorológicas](./web-map.md#weather-on-the-web) y [Ajustes](#settings).

<!--
After the structure of this section is approved, some links should be updated.
-->

## Características principales {#key-features}

El Portal Web ofrece las siguientes capacidades principales para trabajar con mapas y datos personales en el navegador: 

- [Mapa](./web-map.md) con cobertura global y datos vectoriales de alta calidad.
- [Planificación de rutas](./planner.md) utilizando perfiles de peatón, coche, bicicleta y otros.
- [Navegación](./planner.md) vista previa con instrucciones paso a paso.
- [Búsqueda](./web-search.md) y [exploración](./web-search.md#explore) de lugares populares cercanos.
- Visualización de [Favoritos](./web-map.md#favorites), [Tracks](./web-map.md#tracks) y [PDI](./web-map.md#poi-overlay) en el mapa.
- [Capas meteorológicas](./web-weather.md): viento, temperatura y presión.
- [Capas de terreno](./web-map.md#terrain): sombreado, pendientes y vista de altitud.
- [Analizador de tracks](./web-tracks-analyzer.md) para perfiles de elevación y velocidad.
- Acceso completo a los datos sincronizados a través de [OsmAnd Cloud](./web-cloud#cloud-sync).
- Soporte para importación/exportación de archivos (GPX: tracks, favoritos).
- Integración perfecta con **OsmAnd Pro** y **OsmAnd Start**.

<!--
After the structure of this section is approved, some links should be updated.
-->


### Acceso por suscripción {#subscription-accesses}

![Cuenta Web](@site/static/img/web/web_start.png) ![Cuenta Web](@site/static/img/web/web_pro.png)

El Portal de Mapas Web admite varios niveles de acceso: sin inicio de sesión, con OsmAnd Start y con OsmAnd Pro. La tabla a continuación resume qué funciones están disponibles en cada nivel para que pueda ver rápidamente qué tiene ya y qué se hace disponible con una cuenta o una actualización. Esta visión general está destinada a ayudarle a decidir si necesita una cuenta en absoluto y, si la necesita, qué opción se ajusta mejor a cómo usa OsmAnd.

| Característica | Disponible en |
|--------|--------------|
| [Ruta de navegación](./planner.md) | Sin inicio de sesión |
| [Planificador de rutas](./planner.md) | Sin inicio de sesión |
| [Capas meteorológicas](./web-weather.md) | Sin inicio de sesión |
| [Ajustes](./web-map.md#settings) | Sin inicio de sesión |
| [Menú de configuración de mapa](./web-map.md#configure-map-menu) ([PDI](./web-map.md#poi-overlay), [Favoritos](./web-map.md#favorites), [Tracks](./web-map.md#tracks))| [OsmAnd Start](https://osmand.net/blog/start) o <ProFeature/> |
| [Menú de configuración de mapa](./web-map.md#configure-map-menu) ([Terreno](./web-map.md#terrain))| <ProFeature/> |
| [Sincronización con OsmAnd Cloud](./web-cloud.md#cloud-sync) | [OsmAnd Start](https://osmand.net/blog/start) o <ProFeature/> |
| [Búsqueda web, Lugares populares](./web-search.md) | [OsmAnd Start](https://osmand.net/blog/start) o <ProFeature/> |
| [Carpetas y capa de Tracks](./web-tracks.md) | <ProFeature/> |

<!--
After the structure of this section is approved, some links should be updated.
-->


## Cómo empezar {#how-to-start}

Para acceder a todas las funciones del Portal Web de OsmAnd, necesita iniciar sesión con una cuenta de OsmAnd Cloud.

- Si ya tiene una suscripción a [**OsmAnd Pro**](../personal/osmand-cloud.md#login) o desea crear una cuenta gratuita de [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), siga estos pasos:

1. Vaya al [**Portal de Mapas de OsmAnd**](https://osmand.net/map).
2. Abra el menú **Cuenta**:
   - **Iniciar sesión**: Ingrese la dirección de correo electrónico vinculada a su suscripción Pro o Start, o
   - **Crear cuenta**: Regístrese para obtener una cuenta gratuita de OsmAnd Start. Para una guía detallada paso a paso para crear una nueva cuenta, consulte el artículo [Cuenta de OsmAnd](./web-cloud).

![Cuenta Web](@site/static/img/web/web_account.png)

<!--

## Settings {#settings}

### Language {#language}

To switch the interface language:

*Go to: Menu → ⚙ Settings → Display language*

![Web Language](@site/static/img/web/web_language.png)

### Units {#units}

*Go to: Menu → ⚙ Settings → Units of length*  
*Go to: Menu → ⚙ Settings → Unit of speed*

You can choose which units are used to display distance, elevation and speed on the map, in route details and in measurement tools. This helps you keep OsmAnd consistent with your usual habits or regional standards.

The **Units of length** option defines how horizontal distance and elevation are shown:
- Kilometers/meters.
- Miles/feet.
- Miles/meters.
- Miles/yards.
- Nautical miles/meters.
- Nautical miles/feet. 

For example, a distance of 10 km will be shown as about 6.21 mi if you choose one of the Miles/... options, or as about 5.40 nmi when Nautical miles/... is selected.

The **Unit of speed** option controls how current speed and speed limits are displayed:
- Kilometers per hour.
- Miles per hour.
- Meters per second.
- Minutes per mile.
- Minutes per kilometer.
- Nautical miles per hour (knots). 

For example, a speed of 90 km/h corresponds to 25 m/s or about 55.92 mph.

![Web Units](@site/static/img/web/web_units_len.png) ![Web Units](@site/static/img/web/web_units_spe.png)

### OsmAnd Cloud {#osmand-cloud}

![Web Cloud](@site/static/img/web/web_without_acc.png) ![Web Cloud](@site/static/img/web/web_with_acc.png)

In the Web Map Portal, the *General settings* (Display language, Units of length, Unit of speed) are available for all users, whether you are signed in or not. Once you log in with your OsmAnd account, an additional OsmAnd Cloud section appears in the Settings panel. [OsmAnd Cloud](./web-cloud) connects the web map with your cloud backups so that you can manage data synchronized from your Android or iOS devices directly in the browser.

**Changes** option shows a chronological list of files stored in your OsmAnd Cloud account. Items are grouped by month and include the file name, the type of change (for example, added, modified or deleted), the time of the last update and the device that created it. For each entry, you can open the three-dot menu and choose *Download* to save the selected file to your computer, or *Delete*.

**Trash** option contains files that were deleted from OsmAnd Cloud. The list is also grouped by month and shows when each file was removed and from which device. Use the three-dot menu next to a file to *Download* a copy, *Restore from trash* (return the file to OsmAnd Cloud so it becomes available again in your data), or *Delete immediately* to remove it permanently. This helps prevent accidental data loss while still letting you free up cloud storage when you are sure a file is no longer needed. You can also clear all deleted items at once by clicking the Trash icon in the Trash panel header. This opens the **Empty trash** dialog, where you confirm deletion to permanently remove all files from Trash.

![Web Cloud](@site/static/img/web/web_changes.png) ![Web Cloud](@site/static/img/web/web_trash.png)

-->


## Artículos relacionados {#related-articles}

- [Primeros pasos](../start-with/first-steps.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Compras web](../purchases/web.md)
- [Compras multiplataforma](../purchases/cross.md)
-->