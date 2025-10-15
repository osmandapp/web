---
source-hash: 6cae344524caaf33fb94aa4a15419e9183e99c9b4fa757ffe87fe4fa9acb30b3
sidebar_position: 2
title:  Descargar Mapas
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




## Vista general {#overview}

Subir mapas a la aplicación OsmAnd es un paso clave para garantizar un funcionamiento fluido y el uso de la navegación sin conexión. Sin mapas sin conexión, la aplicación no puede funcionar plenamente. La descarga de mapas le da acceso a mapas de diferentes regiones, lo que le permite navegar sin conexión a Internet.  

Tiene dos formas *principales* de descargar mapas: **1)** empezar desde la [pantalla de configuración inicial](#initial-setup-screen) o [ver la lista de regiones en el *Menú principal*](#maps-and-resources), o **2)** [seleccionar la región requerida directamente en el mapa](#select-on-the-map). Esto le da la flexibilidad de seleccionar las regiones que desee y garantiza que los mapas se ajustarán a sus planes.  

Aunque OsmAnd es compatible tanto con mapas [Vectoriales](../map/vector-maps.md) como [Raster](../map/raster-maps.md), se recomienda empezar a trabajar con mapas vectoriales sin conexión. Este tipo de mapa (lea más sobre los [tipos de Mapas OsmAnd](../personal/maps-resources.md#map-types) aquí) garantiza el funcionamiento fiable de todas las funciones clave de la aplicación, incluyendo [Búsqueda](../search/index.md), [Navegación](../navigation/index.md), y [Menú contextual](../map/map-context-menu.md). Esto es especialmente importante si sus viajes incluyen desplazamientos a lugares remotos o con acceso limitado a Internet.


## Pantalla de configuración inicial {#initial-setup-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Descargar mapa Android](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Descargar mapa iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

Al iniciar la aplicación por primera vez, se le pedirá que descargue un mapa adaptado a su ubicación actual, determinada por su conexión a Internet. Este paso es opcional, lo que le permite omitir la descarga y proceder directamente a la interfaz de mapas locales de su región.  

Si está utilizando una VPN, OsmAnd puede sugerir un mapa basado en la ubicación virtual de la VPN. En tales casos, puede seleccionar manualmente un mapa que se alinee mejor con su región geográfica real.  


### Menú de tres puntos {#three-dot-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Descargar mapa Android](@site/static/img/steps/start_screen_first_screen_location_andr.png)   ![Descargar mapa iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Descargar mapa Android](@site/static/img/steps/start_screen_first_screen_location_ios.png)   ![Descargar mapa iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**Menú de ubicación:**

- *Seleccionar una región diferente.* Abre el menú [Descargar mapas](#maps-and-resources).
- *Permítanos determinar su ubicación.* [Solicita permiso](../start-with/first-steps.md#permission-to-access-the-location) para acceder a la ubicación, y encontrar el mapa requerido usando estos datos.

**Otro menú:**

- *Restaurar desde OsmAnd Cloud.* Abre la pantalla principal de [OsmAnd Cloud](../personal/osmand-cloud.md) o la pantalla de inicio de sesión. Esto es útil si ha reinstalado la aplicación o desea restaurar la experiencia de usuario anterior sin volver a seleccionar regiones y configuraciones.
- *Restaurar desde archivo.* Abre el gestor de archivos del dispositivo para seleccionar e importar un archivo `.osf`.  


## Mapas y Recursos {#maps-and-resources}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Menú general de descarga de mapas Android](@site/static/img/personal/maps/download_menu_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menú general de descarga de mapas iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

La pantalla [Mapas y Recursos](../personal/maps-resources.md) da acceso a las siguientes secciones:

- [Descargas](../personal/maps-resources.md#downloads). Ofrece una completa selección de [tipos de mapas OsmAnd](../personal/maps-resources.md#map-types).
- [Local](../personal/maps-resources.md#local). Muestra todos los datos de mapas almacenados actualmente en su dispositivo, incluidos los recursos personalizados e importados.
- [Actualizaciones](../personal/maps-resources.md#updates). Le permite actualizar los mapas mensualmente para mantener sus datos al día.

### Descargando Mapas {#downloading-maps}

Para descargar un tipo de mapa específico para un país o región:

- Navegue a la carpeta de la región requerida, como África, Europa u otro continente.
- Seleccione su país o región preferida de la lista.
- En la siguiente pantalla, revise y elija entre los tipos de mapa disponibles para esa zona.

Puede encontrar información sobre otros tipos de mapas en la sección [Descargas](../personal/maps-resources.md#downloads) del artículo **Mapas**.

## Opciones del Mapa Mundial {#world-map-options}

OsmAnd incluye dos opciones de mapa mundial:  

1. **Mini Mapa Mundial** (preinstalado). Un mapa ligero que permite la navegación básica y proporciona una visión general del mundo.  
2. **Mapa Mundial Detallado** (descargable). Un mapa global con las principales ciudades, carreteras, ríos y otras características geográficas.

***Notas importantes:***

- El **Mapa Mundial Detallado no sustituye a los mapas de países o regiones individuales.** Es útil para una visión general, pero no contiene el mismo nivel de detalle que los mapas regionales.  
- Si necesita una navegación detallada, **descargue manualmente los mapas de países o regiones específicas** a través de *Menú → Mapas y Recursos → Descargar Mapas.*
- Los usuarios con **OsmAnd Pro o Maps+** pueden descargar un **número ilimitado de mapas** pero deben descargar cada región por separado.  
- **No existe una opción única para descargar todos los mapas del mundo a la vez.**


## Seleccionar en el mapa {#select-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Un toque corto en el mapa del mundo permite descargar el mapa de la región](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Un toque corto en el mapa del mundo permite descargar el mapa de la región](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

Una forma de descargar un mapa es alejar el zoom en el mapa del mundo y tocar brevemente para seleccionar una región para descargar. Esta área se resaltará en amarillo, y aparecerá un panel en la parte inferior con el nombre de la región y una sugerencia para descargarla o seleccionar otros mapas.  

:::tip Color del mapa  
En la pantalla pequeña, el mapa seleccionado para descargar se resaltará en amarillo, los mapas que ya se han descargado se resaltarán en verde y los mapas desactivados se resaltarán en naranja. Los mapas **desactivados** se omiten para acelerar el programa en caso de que tenga muchos mapas cargados.
:::

## Búsqueda {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Función de búsqueda para descargar mapa Android](@site/static/img/settings/search_download_map_3_andr.png) ![Función de búsqueda para descargar mapa Android](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Función de búsqueda para descargar mapa iOS](@site/static/img/settings/search_download_map_1_ios.png) ![Función de búsqueda para descargar mapa iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

La búsqueda facilita la localización de un mapa o una región específicos, proporcionando una forma cómoda y rápida de descargar los datos que necesita. Puede encontrar y descargar el mapa utilizando la [función de búsqueda](../search/index.md).

- Inicie una búsqueda introduciendo el nombre de un país o región en el campo de búsqueda. A continuación, seleccione el mapa deseado de la lista que aparece.
- Los mapas disponibles para descargar se muestran en gris con un icono de descarga, los mapas descargados tienen un color verde y un botón de menú.
- Toque el nombre del resultado requerido y se abrirá la lista de mapas de toda la región.
- Seleccione [tipos de mapa](../personal/maps-resources.md#map-types): *Mapa estándar, Mapa solo de carreteras, Curvas de nivel, Wikipedia*.