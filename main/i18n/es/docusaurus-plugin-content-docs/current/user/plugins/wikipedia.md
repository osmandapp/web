---
source-hash: 9e8ffc4e9ad66f08b7e397dce821b6b3045def307beb315cd2a5eb994c70479b
sidebar_position: 18
title: Wikipedia
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

:::info Función de pago
El complemento de Wikipedia es una [función de pago](../purchases/index.md) de la aplicación OsmAnd.
:::

Tener Wikipedia en tu viaje te ayuda a aprender más sobre los lugares que visitas. Está disponible sin conexión y muestra Lugares Populares (Android) / artículos de Wikipedia (iOS) relacionados con los puntos de interés directamente en el mapa.

El complemento de Wikipedia es una función separada que se puede habilitar/deshabilitar según sea necesario. Una vez habilitado, te permite cargar datos de Wikipedia [descargados](../personal/maps-resources.md#download-maps-maps) para cada región geográfica. El mapa tiene dos tipos de conocimiento cargado de Wikipedia: información breve y un artículo completo.

La información breve es proporcionada por los PDI de Wikipedia (una abreviatura de "[punto de interés](../map/point-layers-on-map.md)"). Si la opción de Wikipedia está activada en el menú, un PDI de Wikipedia aparece en el mapa. Cuando tocas un punto de interés, se expande para proporcionar información breve de Wikipedia, así como la capacidad de abrir un artículo completo. El PDI de Wikipedia, así como los artículos relacionados, están disponibles sin conexión. Puedes leerlos según sea necesario, cambiar de idioma y buscar otra información en Wikipedia.

[Wikipedia](https://en.wikipedia.org/wiki/Wikipedia) es una enciclopedia en línea gratuita, multilingüe y de colaboración abierta, creada y mantenida por una comunidad de editores voluntarios que utilizan un sistema de edición basado en wiki.

&nbsp;
![Wikipedia](@site/static/img/map/map-wikipedia.png)


## Parámetros de configuración requeridos {#required-setup-parameters}

Para mostrar los datos de Wikipedia en el mapa, debes realizar las siguientes configuraciones:

1. [Comprar](../plugins/index.md#purchase) y [Habilitar](../plugins/index.md#enable--disable) el complemento de Wikipedia en la sección de Complementos del *Menú principal*.
2. Descargar los [paquetes de Wikipedia](#download-wikipedia-packages) para las regiones requeridas.
3. Mostrar los [PDI de Wikipedia](#display-wikipedia-on-the-map) en el mapa para el perfil requerido.
4. Configurar los [idiomas](#set-preferred-language) preferidos para leer artículos.


## Descargar paquetes de Wikipedia {#download-wikipedia-packages}

Los datos de Wikipedia están disponibles para cada región geográfica. Si se cargan para una región y no para otra, en el primer caso puedes trabajar con la información de Wikipedia al ver la región en un mapa, y en el otro caso, la región no tendrá ninguna información de Wikipedia. Una vez cargados, los datos de Wikipedia están disponibles en general, así como sin conexión.

Para descargar los datos de Wikipedia de una región, ve a los [paquetes disponibles para descargar en el *Menú principal*](../start-with/download-maps.md#download---main-menu), busca la región necesaria y ábrela. Los datos de Wikipedia estarán entre otros paquetes.

Puedes abrir los datos de Wikipedia para descargar por región de la siguiente manera:

1. **Android**. Ve a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*
2. **iOS**. Ve a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
3. Selecciona la región requerida. Una vez abierta la región, los datos de Wikipedia estarán entre otros paquetes.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Para ver qué datos ya se han cargado, ve a *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>*

![Descargar Wikipedia en Android](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Para ver qué datos ya se han cargado, ve a *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Descargar Wikipedia en iOS](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png)

</TabItem>

</Tabs>


## Mostrar Wikipedia en el mapa {#display-wikipedia-on-the-map}

Al cargar datos de Wikipedia para las regiones requeridas, puedes controlar la visibilidad de esos datos en el mapa. La visibilidad se controla mediante [Lugares Populares (Wikipedia)](../map/point-layers-on-map.md#-wikipedia) **para Android** / [PDI de Wikipedia](../map/point-layers-on-map.md#-wikipedia) **para iOS**, que se pueden mostrar u ocultar para todas las regiones cargadas mediante un [perfil](../personal/profiles.md) determinado, por ejemplo, un perfil para conducir, un perfil para andar en bicicleta, otro perfil para mostrar el transporte público y otros.

Para mostrar u ocultar los PDI de Wikipedia, primero selecciona un perfil y luego activa/desactiva la opción **Wikipedia**.

Para mostrar/ocultar los PDI de Wikipedia, haz lo siguiente:

1. Ve a:

   **<Translate android="true" ids="android_button_seq"/>**: [*<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*](../map/popular_places.md#popular-places-wikipedia-menu)

   **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

2. Selecciona un perfil y busca la sección de configuración *<Translate android="true" ids="shared_string_show"/>*/*<Translate ios="true" ids="shared_string_show_on_map"/>* en el menú.
3. Activa *<Translate android="true" ids="poi_osmwiki"/>* **para Android** / *<Translate ios="true" ids="download_wikipedia_maps"/>* **para iOS**.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![PDI de Wikipedia en Android](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![PDI de Wikipedia en iOS](@site/static/img/map/map-wikipedia-on-map_ios.png)

</TabItem>

</Tabs>


## Buscar en Wikipedia {#search-wikipedia}

Con los datos de Wikipedia cargados, independientemente del modo de visibilidad de los [PDI de Wikipedia](../map/point-layers-on-map.md#-wikipedia) en el mapa, es posible [buscar](../search/search-poi.md) cualquier información de Wikipedia.

Al tocar el botón Buscar, aparece un panel adicional que te permite [buscar](../search/index.md) todo el texto y/o una categoría específica. En el primer caso, los resultados de la búsqueda mostrarán PDI de Wikipedia con los artículos de Wikipedia correspondientes entre otros tipos de información. En el caso de una [búsqueda por categoría de Wikipedia](../search/search-poi.md#poi-search), los resultados de la búsqueda solo mostrarán información de Wikipedia, ordenada por la ubicación más cercana al área del mapa que se muestra actualmente en la pantalla.

- En la versión de **Android**, puedes abrir [Buscar](../search/index.md) tocando el *icono de búsqueda* en la esquina superior izquierda de la pantalla y/o tocando la *opción de búsqueda* en el menú.
- En la versión de **iOS**, para abrir [Buscar](../search/index.md), el icono de búsqueda se encuentra en la esquina superior izquierda de la pantalla.

<!--
<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Búsqueda en Wikipedia en Android](@site/static/img/map/map-wikipedia-search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda en Wikipedia en iOS](@site/static/img/map/map-wikipedia-search_ios.png)

</TabItem>

</Tabs>

-->

- Para buscar por la [categoría](../search/search-poi.md#poi-search) de Wikipedia, selecciona: *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Categoría de Wikipedia en Android](@site/static/img/map/map-wikipedia-search-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Categoría de Wikipedia en iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

</TabItem>

</Tabs>

- Si es necesario, toca la opción **Mostrar Wikipedia en el mapa** en la parte superior del panel de búsqueda y los resultados de búsqueda de la categoría de Wikipedia aparecerán en el mapa.


## Artículo de Wikipedia {#wikipedia-article}

Para abrir el artículo de Wikipedia:

1. Habilita la [capa de PDI de Wikipedia](../map/point-layers-on-map.md#-wikipedia) para un perfil específico.
2. Toca el PDI en el mapa.
3. En el [menú contextual](../map/map-context-menu.md) de un PDI, toca *Detalles* (o simplemente desliza el *menú contextual* hacia arriba) para ver un resumen del artículo de Wikipedia elegido.
4. Si tocas ese texto (para la versión de iOS), serás redirigido al artículo de Wikipedia sin conexión.
5. Usa el botón *Leer artículo* o *Leer artículo completo* para abrir la versión completa del artículo de Wikipedia.



<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![PDI de Wikipedia en francés en inglés](@site/static/img/plugins/wikipedia/Andr-french-wikipedia-in-eng1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![PDI de Wikipedia en francés en inglés en iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>


## Configuración de Wikipedia {#wikipedia-settings}

Puedes [establecer el idioma (o idiomas)](#set-preferred-language) en el que prefieres leer [artículos](#wikipedia-article) y también configurar las [opciones de descarga de imágenes](#download-images) para cada [perfil](../personal/profiles.md).

### Establecer idioma preferido {#set-preferred-language}

En las versiones de **Android** e **iOS** de la aplicación OsmAnd, puedes establecer tu idioma preferido (o idiomas) para mostrar artículos de Wikipedia utilizando el *menú Configurar mapa*. Si seleccionas más de un idioma, los artículos de *Wikipedia* en el mapa se mostrarán en cualquiera de ellos. Ve a:

1. *<Translate android="true" ids="shared_string_menu,configure_map"/>*.
2. Selecciona el perfil necesario y en la sección *<Translate android="true" ids="shared_string_show"/>* elige *<Translate android="true" ids="poi_osmwiki"/>* para Android / *<Translate ios="true" ids="download_wikipedia_maps"/>* para iOS.
3. Deshabilita la opción *<Translate android="true" ids="shared_string_all_languages"/>*.
4. Selecciona el idioma o idiomas específicos en la lista abierta.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Configuración de un idioma preferido en Android](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configuración de un idioma preferido en iOS](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

:::note
En la versión de **iOS**, también puedes establecer el idioma preferido para los artículos de Wikipedia usando:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/>* → &#x2699

:::

### Cambiar de idioma dentro del artículo {#switch-languages-inside-the-article}

En caso de que el *artículo de Wikipedia* esté disponible en diferentes idiomas, puedes cambiar el idioma mientras lo lees. Después de tocar el icono correspondiente en la esquina superior derecha de la pantalla, se te ofrecerán opciones para elegir.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Cambiar de idioma para un artículo específico](@site/static/img/plugins/wikipedia/and_lang_inside_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cambiar de idioma para un artículo específico](@site/static/img/plugins/wikipedia/switch_languages_ios_1.png)

</TabItem>

</Tabs>


### Descargar imágenes {#download-images}

Puedes elegir si descargar imágenes de Wikipedia en tu dispositivo o no dentro del *artículo de Wikipedia*:

- **Android**. Abre *[Artículo de Wikipedia](#display-wikipedia-on-the-map) → &#8942; → Opciones*
- **iOS**. Abre *[Artículo de Wikipedia](#display-wikipedia-on-the-map) → Icono de imagen*

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Cambiar imágenes](@site/static/img/plugins/wikipedia/images_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cambiar imágenes](@site/static/img/plugins/wikipedia/images_menu_ios_2.png)

</TabItem>

</Tabs>

En la versión de **iOS** de la aplicación, también puedes acceder a las opciones de descarga de imágenes usando la *configuración del complemento de Wikipedia*:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps,wikivoyage_download_pics"/>*
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699 → <Translate ios="true" ids="wikivoyage_download_pics"/>*

![Cambiar imágenes](@site/static/img/plugins/wikipedia/images_menu_ios.png)


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Configuración global](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)

> *Última actualización: mayo de 2025*