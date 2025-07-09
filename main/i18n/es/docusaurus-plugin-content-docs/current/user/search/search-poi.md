---
source-hash: 451b8efe0bb4fc8a733a523dde0cd088f5c21c5cb00a83e08ca8410c09e04755
sidebar_position: 4
title: Buscar PDI
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


<InfoIncompleteArticle/>


## Descripción general {#overview}

La funcionalidad de [Puntos de Interés (PDI) de OsmAnd](https://wiki.openstreetmap.org/wiki/Points_of_interest) en OsmAnd proporciona precisión, visibilidad y comodidad para encontrar lugares, rutas y servicios interesantes cerca de su ubicación actual o de un área seleccionada en el mapa.

La barra de búsqueda le permite introducir palabras clave relacionadas con los lugares que le interesan. La búsqueda de PDI también presenta una lista conveniente ordenada por [categoría](#poi-search-by-categories) para ayudarle a encontrar rápidamente lo que busca, y el [filtro](#save-new-custom-filters) le permite seleccionar características específicas de PDI para mostrar solo resultados relevantes.

La [Búsqueda Personalizada](#custom-poi-search) mejora la funcionalidad de búsqueda al permitir múltiples opciones de categorías y subcategorías. Puede guardar los filtros creados para uso futuro, lo que facilita la localización rápida de PDI que cumplan con criterios o preferencias específicos. Para obtener más detalles, consulte la sección sobre cómo guardar filtros personalizados [aquí](#save-new-custom-filters).

OsmAnd ofrece varias formas de acceder a la herramienta de Búsqueda, donde se encuentra la sección de **Búsqueda por Categorías**.

- El [botón de Búsqueda](../widgets/map-buttons.md#search) siempre se muestra en el mapa, y al tocarlo se accederá a la [pantalla general](#how-to-use) de la herramienta, donde podrá encontrar la pestaña *Categorías*.
- Vaya al *Menú principal → Buscar → Pestaña Categorías*.
- Al prepararse para iniciar una ruta, toque [*Navegación → Establecer destino → Campo de búsqueda → Pestaña Categorías*](../navigation/setup/route-navigation.md#set-target-point).
- Vaya al *Menú principal → Configurar mapa → Superposición de PDI → Buscar*.

## Cómo usar {#how-to-use}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Buscar PDI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Buscar PDI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

*Todos los tipos de PDI en OsmAnd se pueden encontrar aquí:* [enlace de GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).

- **Búsqueda de Puntos de Interés (PDI):**
    - Le permite buscar:
       - Puntos de interés (PDI) cercanos o de categorías específicas.
       - [Rutas OSM](../map/routes.md).
       - [Lugares populares (Wikipedia)](../map/map-context-menu.md#details).

    - Es posible filtrar y ordenar los resultados por categoría, distancia o calificación.

    - Los resultados de la búsqueda muestran la ubicación del PDI, su información de contacto, calificaciones y reseñas.

- **Buscar PDI por categoría directamente en el mapa**:
    - Debe seleccionar las categorías requeridas de la [**lista**](../map/point-layers-on-map.md#points-of-interest-pois) en *Configurar mapa → Mostrar superposición de PDI...* y buscar por iconos en la ubicación esperada.

    - *Android*: Puede empezar a buscar PDI en *Menú → Buscar → Categorías*.

- **Búsqueda por marca:**
    - Al introducir el nombre de un establecimiento o marca (como Audi, Starbucks o Aldi), la lista de resultados de búsqueda se ordena con prioridad por el nombre del PDI y se clasifica por distancia desde la ubicación correspondiente.

    - El nombre de la localidad se muestra junto a cada resultado de búsqueda para ayudarle a identificar la ubicación correcta entre otras a una distancia similar de usted.

    - Este tipo de búsqueda es conveniente de usar si un punto de venta minorista se especializa en la venta de bienes o servicios de una marca o si la marca en sí es más conocida y reconocible que el nombre o la categoría del PDI.

    - Para realizar una búsqueda, la etiqueta `brand` y los nombres de las marcas deben agregarse a la descripción del PDI.

    - Ejemplo de una tienda de coches: *Tipo de PDI* - Concesionario de coches, *nombre* - Octo Automobile, [***nombre de la marca***](https://wiki.openstreetmap.org/wiki/Key:brand) - Audi, BMW, Fiat, Jaguar, Land Rover.

    ![Buscar PDI Android](@site/static/img/search/brand_search_andr.png)


:::note
Para realizar algunas de estas tareas (localizar direcciones, PDI) necesitará tener el archivo de mapa vectorial sin conexión. Inicialmente, la búsqueda se basa en los datos ubicados en el mapa en el área visible de la pantalla del dispositivo. Si no encuentra nada, OsmAnd propone aumentar el radio de búsqueda.
:::

## Búsqueda de PDI por categorías {#poi-search-by-categories}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Buscar PDI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Buscar PDI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

La herramienta **Buscar por categorías** le permite encontrar rápidamente objetos, lugares y rutas clasificados en diferentes categorías. Cada categoría tiene un conjunto único de características, y esta herramienta tiene filtros que le permiten refinar los resultados de la búsqueda seleccionando diferentes valores para características adicionales.

Cómo funciona:

- *Selección de categoría* - Selecciona la categoría que le interesa, como restaurantes, hoteles, tiendas, rutas OSM, lugares populares de Wikipedia y otros, de una lista sugerida de categorías.
- *Filtros de características* - Después de seleccionar una categoría, la aplicación muestra características adicionales que se pueden usar para refinar la búsqueda. Por ejemplo, para la categoría Restaurantes, puede seleccionar filtros como tipo de cocina (italiana, china, etc.), rango de precios, calificación y disponibilidad de estacionamiento.
- *Aplicación de filtros* - Selecciona los valores requeridos en los filtros, y luego la aplicación aplica estos filtros a los resultados de la búsqueda para mostrar solo aquellas propiedades que coinciden con las características especificadas.
- *Visualización de resultados* - Después de aplicar los filtros, OsmAnd muestra una lista con información breve que coincide con la categoría y las características establecidas.

Beneficios:

- *Personalización del usuario* - Los filtros de características le permiten personalizar las búsquedas para satisfacer sus necesidades y preferencias específicas.
- *Resultados refinados* - Los filtros ayudan a refinar los resultados de la búsqueda, haciéndolos más relevantes y precisos.
- *Múltiples categorías* - La base de datos de OpenStreetMap tiene un amplio conjunto de categorías de PDI, lo que le permite encontrar sitios de diferentes tipos y categorías.

<!--
La búsqueda de categorías de PDI le permite encontrar y seleccionar rápidamente lugares de interés según sus necesidades. Es una herramienta útil para viajar, encontrar servicios o lugares de interés cercanos y planificar rutas basadas en categorías de PDI seleccionadas.

OsmAnd comienza a encontrar nombres y categorías de PDI por las palabras introducidas. Los primeros resultados serán categorías, los segundos resultados serán PDI con información adicional, nombre completo, nombre de categoría, dirección y distancia al PDI, horario de trabajo. Al pulsar la categoría necesaria se abre la lista de PDI de esta categoría.

Al tocar el PDI elegido en la lista se abre el [menú contextual del mapa](../map/map-context-menu.md#select-an-object-single-tap) del PDI.
-->

### Tipos de filtros {#types-of-filters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Buscar PDI Android](@site/static/img/search/search_poi_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Buscar PDI iOS](@site/static/img/search/search_poi_filter_ios.png)

</TabItem>

</Tabs>

Con la función **Filtro**, puede seleccionar las características necesarias y, como resultado, obtener una lista que contenga solo objetos relevantes. Para usar el filtro:

- Seleccione la categoría que le interesa de la lista de categorías.
- En la pantalla que se abre, toque el icono que muestra el filtro. Se encuentra debajo del campo de entrada, junto a *Mostrar en el mapa*.
- En el filtro, seleccione el tipo de características.

![Buscar PDI Android](@site/static/img/search/search_poi_filter_icon_andr.png)

Un filtro puede constar de un número considerable de elementos, cuya presencia depende de la categoría seleccionada. Cada categoría tiene una serie de filtros específicos para ella, organizados en carpetas por tipo. Hay un total de *22 categorías predeterminadas*. Algunas de ellas se enumeran aquí:

 1. **<Translate android="true" ids="poi_filter_accomodation"/>**. [Alojamiento](https://wiki.openstreetmap.org/wiki/Key:building#Accommodation) incluye instalaciones que proporcionan alojamiento temporal como hoteles, moteles, albergues, casas de huéspedes y campings. Estos lugares ofrecen comodidades y servicios para una estancia confortable durante el viaje.
        Incluye *9* tipos de filtros: **Nevera** (tiene *2* valores), **Calefacción** (tiene *7* valores), **Tipo de acceso a Internet** (tiene *3* valores), **Colchón** (tiene *2* valores), **Tipo de pago** (más de *10* valores), **Ducha** (tiene *1* valor), **Fumar** (tiene *6* valores), **Clasificación por estrellas** (tiene *10* valores), **Accesibilidad para sillas de ruedas** (tiene *4* valores), Abierto ahora / Abierto 24/7.

 2. **Cafetería y restaurante**. [Cafetería](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcafe) y [restaurantes](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant) representan lugares de servicio de alimentos.
        Incluye *16* tipos de filtros: **Cambiador** (tiene *3* valores), **Café** (tiene *2* valores), **Cocina** (más de *10* valores), **Entrega a domicilio** (tiene *1* valor), **Dieta** (tiene *8* valores), **Plato** (más de *10* valores), **Recarga de agua potable** (tiene *1* valor), **Servicio de coche** (tiene *1* valor), **Tipo de acceso a Internet** (tiene *3* valores), **Microcervecería** (tiene *1* valor), **Productos orgánicos** (tiene *2* valores), **Asientos al aire libre** (tiene *1* valor), **Tipo de pago** (más de *10* valores), **Fumar** (tiene *6* valores), **Comida para llevar** (tiene *1* valor), **Accesibilidad para sillas de ruedas** (tiene *4* valores), Abierto ahora / Abierto 24/7.

 3. **Estación de carga**. Una [estación de carga](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcharging_station) es una instalación de infraestructura donde los propietarios de vehículos eléctricos pueden recargar sus coches, motocicletas u otros vehículos eléctricos. Estos puntos proporcionan cargadores y conexiones apropiadas para suministrar energía a las baterías de los vehículos.
        Incluye *35* tipos de filtros: **Acceso para bicicletas** (tiene *1* valor), **Acceso para autobuses** (tiene *1* valor), **Acceso para vehículos pesados** (tiene *5* valores), **Acceso para automóviles** (tiene *1* valor), **Acceso para scooters** (tiene *1* valor), **Autenticación por aplicación** (tiene *1* valor), **Autenticación por tarjeta con chip** (tiene *1* valor), **Autenticación sin contacto** (tiene *1* valor), **Autenticación por clave** (tiene *1* valor), **Autenticación requerida** (tiene *1* valor), **Autenticación por llamada telefónica** (tiene *1* valor), **Autenticación por mensaje corto** (tiene *1* valor), **Tarifa** (tiene *2* valores), **Tipo de acceso a Internet** (tiene *3* valores), **Tipo de acceso a Internet** (tiene *3* valores), **Accesibilidad para sillas de ruedas** (tiene *4* valores), Abierto ahora / Abierto 24/7, y otros.

 4. **Tienda de conveniencia y supermercado**. [Tienda de conveniencia](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dconvenience) y [supermercado](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dsupermarket) representan instalaciones minoristas.
        Incluye *13* tipos de filtros: **Compra a granel** (tiene *2* valores), **Retiro de efectivo** (tiene *5* valores), **Cambiador** (tiene *3* valores), **Café** (tiene *2* valores), **Entrega a domicilio** (tiene *1* valor), **Dieta** (tiene *8* valores), **Helado** (tiene *1* valor), **Productos orgánicos** (tiene *2* valores), **Tipo de pago** (más de *10* valores), **Filtro de segunda mano** (tiene *2* valores), **Auto-pago** (tiene *2* valores), **Accesibilidad para sillas de ruedas** (tiene *4* valores), Abierto ahora / Abierto 24/7.

 5. **<Translate android="true" ids="poi_filter_emergency"/>**. [Emergencia](https://wiki.openstreetmap.org/wiki/Key:emergency) incluye instalaciones y ubicaciones asociadas con servicios de emergencia como hospitales, estaciones de policía, estaciones de bomberos y centros médicos de primeros auxilios.
        No contiene ningún filtro.

 6. **Estación de servicio**. Una [estación de combustible](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfuel), también conocida como gasolinera o estación de gasolina. Es la instalación de tipo minorista donde los vehículos de motor pueden ser repostados.
        Incluye *13* tipos de filtros: **Lavado de coches** (tiene *2* valores), **Retiro de efectivo** (tiene *5* valores), **Aire comprimido** (tiene *1* valor), **Tipo de combustible (aviación)** (tiene más de *20* valores), **Tarjetas de combustible** (tiene *5* valores), **Tipo de pago** (tiene más de *20* valores), **Auto-pago** (tiene *2* valores), **Acceso para motos de nieve** (tiene *3* valores), **Baño** (más de *1* valor), **Aspiradora** (tiene *1* valor), **Surtidor de combustible automático** (tiene *1* valor), **Accesibilidad para sillas de ruedas** (tiene *4* valores), Abierto ahora / Abierto 24/7.

 7. **Finanzas**. [Finanzas](https://wiki.openstreetmap.org/wiki/Tag:office%3Dfinancial) se utiliza para oficinas de empresas del sector financiero.
        Incluye *5* tipos de filtros.

 8. **Comida**. [Comida](https://wiki.openstreetmap.org/wiki/Category:Food_and_beverages) incluye todos los lugares que ofrecen alimentos y bebidas.
        Incluye *24* tipos de filtros.

 9. **Atención médica**. [Atención médica](https://wiki.openstreetmap.org/wiki/Healthcare) incluye servicios proporcionados por diferentes profesionales en diferentes tipos de instalaciones.
        Incluye *13* tipos de filtros.

 10. **Ocio**. [Ocio](https://wiki.openstreetmap.org/wiki/Category:Leisure) incluye varios tipos de lugares e instalaciones para el entretenimiento.
        Incluye *15* tipos de filtros.

 11. **Náutico**. Incluye PDI relacionados con tipos náuticos.
        No contiene ningún filtro.

 12. **<Translate android="true" ids="poi_filter_closest_poi"/>**. Incluye PDI que están cerca de usted.
        Incluye *216* tipos de filtros.

 13. **<Translate android="true" ids="poi_filter_parking"/>**. [Estacionamiento](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking) incluye instalaciones utilizadas por el público, clientes u otros usuarios autorizados para estacionar vehículos como coches y camiones, comúnmente conocidos como aparcamiento (inglés británico) o estacionamiento (inglés americano).
        Incluye *34* tipos de filtros.

 14. **Transporte personal**. Todos los [tipos de vehículos](https://wiki.openstreetmap.org/wiki/Pl:Key:amenity#Transport) pueden estar en su posesión.
        Incluye *38* tipos de filtros.

 15. **Lugares populares (Wikipedia)**. Para buscar en esta categoría, debe descargar el [mapa de Wikipedia](../plugins/wikipedia.md#overview) de la región que le interesa.
        No contiene ningún filtro.

 16. **Acceso privado**.
        Incluye *6* tipos de filtros.

 17. **<Translate android="true" ids="poi_filter_public_transport"/>**. Es un sistema de transporte diseñado para transportar personas con fines públicos, accesible a todos los residentes y visitantes de una ciudad o región.
        Incluye *9* tipos de filtros.

 18. **Rutas**. Incluye [rutas OSM](../map/routes.md) para varios tipos de actividades.
        Incluye *14* tipos de filtros: **Punto de control**, **Nodo de red ciclista**, **Nodo de red de senderismo**, **Red de rutas (ciclismo)**, **Red de rutas (senderismo)**, **Categoría de punto de ruta**, **Deportes aéreos**, **Ciclismo**, **Conducción**, **A pie**, **Motociclismo**, **Otras rutas**, **Deportes acuáticos**, **Deportes de invierno**.

 19. **Turismo**. Es una actividad en la que las personas visitan lugares o sitios interesantes para familiarizarse con ellos y disfrutar de su belleza, historia o significado.
        Incluye *8* tipos de filtros.

 20. **Deporte**. Incluye áreas para actividades deportivas.
        Incluye *11* tipos de filtros.

 21. **Tienda**. [Tienda](https://wiki.openstreetmap.org/wiki/Key:shop) se refiere a una variedad de establecimientos y negocios que ofrecen diversos bienes o servicios a la venta, como tiendas de comestibles, tiendas de ropa, tiendas de electrónica y otros.
        Incluye *36* tipos de filtros.

 22. **Turismo**. [Turismo](https://wiki.openstreetmap.org/wiki/Key:tourism) incluye lugares y cosas de interés específico para los turistas, incluyendo lugares para ver, lugares para alojarse y cosas y lugares que proporcionan información y apoyo a los turistas.
        Incluye *32* tipos de filtros.

 23. **Agua**. Fuentes de [agua potable](https://wiki.openstreetmap.org/wiki/Key:drinking_water) creadas o dispuestas por el hombre.
        No contiene ningún filtro.


### Reorganizar categorías {#rearrange-categories}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Buscar PDI Android](@site/static/img/search/search_poi_rearrange_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Buscar PDI iOS](@site/static/img/search/search_poi_rearrange_ios.png)

</TabItem>

</Tabs>

La función Reorganizar categorías le permite listar solo las categorías que necesita y organizarlas en el orden en que le resulte más cómodo usarlas.

Descripción y cómo usar:

- Inicialmente, *la lista se ordena alfabéticamente*. Las categorías creadas también se añaden en orden alfabético.
- Los cambios en la lista de categorías se realizan para cada perfil por separado.
- Mueva las categorías arrastrándolas y soltándolas en la posición correcta de la lista.
- *Para ocultar* categorías innecesarias, toque el icono de **menos**.
- **Disponible**. Las categorías previamente *ocultas* se pueden volver a la lista mostrada tocando el icono de **más**.
- Use el botón **Restablecer** para volver la lista al estado preestablecido.
- Las categorías creadas con [Búsqueda personalizada](#custom-poi-search) o [Filtros](#save-new-custom-filters) se pueden eliminar usando el icono de **Eliminar**.

![Buscar PDI Android](@site/static/img/search/search_poi_rearrange_del_andr.png)

### Búsqueda en línea {#online-search}

<InfoAndroidOnly />

![Buscar PDI Android](@site/static/img/search/search_online_2_andr.png)

**La búsqueda en línea** permite encontrar ubicaciones, direcciones y puntos de interés en tiempo real. OsmAnd utiliza [Nominatim](https://nominatim.openstreetmap.org/ui/search.html), un geocodificador en línea desarrollado por OpenStreetMap que traduce las consultas de texto de los usuarios en coordenadas geográficas y viceversa ([*ejemplo*](#example-of-online-search-query)).

La búsqueda en línea incluye las siguientes características:

1. **Búsqueda por ubicación**: Puede introducir el nombre de una ciudad, calle, barrio u otra ubicación y OsmAnd le proporcionará resultados que coincidan con la consulta.
2. **Geocodificación**: La búsqueda en línea convierte sus consultas de texto en coordenadas geográficas, lo que permite una ubicación precisa.
3. **Geocodificación inversa**: Puede introducir coordenadas geográficas y la búsqueda devolverá la ubicación correspondiente como nombre de ciudad, nombre de calle o lugar en el mapa.
4. **Búsqueda por puntos de interés**: Le permite buscar diferentes puntos por nombre o categoría.

Uso de la búsqueda en línea:

- La búsqueda en línea garantiza que los datos estén actualizados y que las actualizaciones estén disponibles, ya que el servicio se actualiza constantemente y utiliza fuentes de datos abiertas.
- Proporciona una amplia cobertura de lugares y objetos, lo que le permite encontrar lugares de interés en diferentes regiones del mundo.
- Las búsquedas en línea son en tiempo real, lo que proporciona un acceso rápido a los resultados de la búsqueda.
- Útil en ciudades y en autopistas con buena cobertura de Internet.
- La búsqueda en línea es conveniente de usar si no hay mapas de la región y si es imposible descargarlos.
- *Requiere una conexión a Internet constante y estable.*

![Buscar PDI Android](@site/static/img/search/search_poi_online_increase2_andr.png)

Para mejorar los resultados, antes de usar la herramienta de búsqueda, acerque el mapa para acercarse a donde necesita encontrar una ubicación específica. Y mientras busca, puede **aumentar el radio de búsqueda** para encontrar lugares que estén más lejos de su ubicación. Al buscar sin conexión, si los resultados requeridos no están disponibles, OsmAnd sugiere usar la búsqueda en línea.

Puede encontrar información sobre la navegación en línea en el artículo [Rutas en línea](../navigation/routing/online-routing.md).

#### Ejemplo de consulta de búsqueda en línea {#example-of-online-search-query}

*Nominatim* en OsmAnd se utiliza como motor de búsqueda para datos de OpenStreetMap, con el que puede buscar por nombre (la búsqueda por dirección está actualmente deshabilitada). Cada resultado tiene un enlace a una página de detalles para ver qué datos sobre el objeto se almacenan en la base de datos.

**Archivo XML de ejemplo.** Este archivo XML no contiene ninguna información de estilo asociada a él. El árbol del documento se muestra en el [enlace](https://nominatim.openstreetmap.org/search?format=xml&addressdetails=0&accept-language=en&q=%D0%9C%D1%96%D0%BD%D1%81%D0%BA+%D0%BD%D0%B5%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%B0%D1%81%D1%86%D1%96+72+&addressdetails=1&limit=300).

## Búsqueda de PDI personalizada {#custom-poi-search}

La búsqueda de PDI personalizada es una función de búsqueda avanzada que le permite encontrar PDI de diferentes categorías y combinarlos para una búsqueda más precisa y personalizada. A diferencia de la búsqueda de PDI estándar, que se limita a algunas categorías predefinidas, la búsqueda de PDI personalizada ofrece la flexibilidad de seleccionar y combinar diferentes tipos de PDI.

Por ejemplo, puede buscar restaurantes y farmacias simultáneamente para encontrar el lugar más cercano para cenar y luego tomar su medicamento. O buscar la gasolinera y el servicio de coches más cercanos cuando tenga un problema con su coche.

Esta funcionalidad es especialmente útil en varios casos:

- *Viajes*. Al viajar, utilizando la búsqueda personalizada puede encontrar rápidamente diferentes lugares de interés y combinarlos para crear una ruta óptima.
- *Emergencias*. Si necesita encontrar varios tipos de servicios rápidamente, puede usar una búsqueda de PDI personalizada para obtener toda la información que necesita.
- *Búsqueda de servicios cercanos*. La búsqueda personalizada le permite combinar diferentes categorías de PDI para una búsqueda fácil si necesita encontrar varios tipos de servicios en un determinado vecindario o en una determinada sección de la ruta.

### Filtro de PDI personalizado {#custom-poi-filter}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Búsqueda personalizada Android](@site/static/img/search/search_custom_filter_andr.png) ![Búsqueda personalizada Android](@site/static/img/search/search_custom_filter_second_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!--
![PDI personalizado iOS](@site/static/img/search/custom_poi_ios.png) ![Tipos de PDI personalizados iOS](@site/static/img/search/custom_poi_types_ios.png)
-->

![PDI personalizado iOS](@site/static/img/search/custom_poi_filter_1_ios.png) ![Tipos de PDI personalizados iOS](@site/static/img/search/custom_poi_filter_2_ios.png)

</TabItem>

</Tabs>

El *filtro de PDI personalizado* incluye conjuntos de categorías de servicios que consisten en valores relevantes. OsmAnd le permite recopilar y combinar los tipos de PDI requeridos de una o más categorías sugeridas.

Para crear filtros personalizados para encontrar lugares en el mapa, seleccione las categorías y subcategorías relevantes de interés. Puede [guardar](#save-new-custom-filters) estos filtros para usarlos más tarde o [editarlos](#edit-an-existing-filter) si es necesario. Alternativamente, puede ver los datos filtrados sin guardar tocando el botón *Mostrar*. Sin embargo, tenga en cuenta que si no guarda los filtros, todas las selecciones se cancelarán una vez que cambie de búsqueda o salga de la herramienta de búsqueda.

- Cada categoría de servicio contiene una lista de valores genéricos disponibles para los tipos de PDI.
- Tiene la opción de seleccionarlos o deseleccionarlos individualmente tocando el campo del tipo que le interesa.
- *Seleccionar todo* - Para ello, seleccione el botón de alternancia.
- Refine la lista excluyendo los innecesarios - Empiece a escribir el nombre sugerido en el campo *Buscar tipos de PDI*.

#### Categorías y sus filtros {#categories-and-their-filters}

1. **<Translate android="true" ids="amenity_type_administrative"/>**. Incluye 25 tipos: *Parcelas, Atolón, Distrito, Ciudad, Manzana, País, Palacio de justicia, Aduanas, Oficina diplomática, Granja, Gobierno, Aldea, Isla, Islote, Vivienda aislada, Localidad, Barrio, Policía, Prisión, Cuartel, Zona residencial, Suburbio, Pueblo, Ayuntamiento, Aldea*.

2. **Navidad**. Incluye 5 tipos de filtros:
    *Evento de Navidad, Mercado de Navidad, Pirámide de Navidad, Tienda de Navidad, Árbol de Navidad*.

3. **<Translate android="true" ids="amenity_type_education"/>**. Incluye 16 tipos: *Parcelas, Atolón, Distrito, Ciudad, Manzana, País, Palacio de justicia, Aduanas, Oficina diplomática, Granja, Aldea, Isla, Islote, Vivienda aislada, Localidad, Barrio, Policía, Prisión, Cuartel, Zona residencial, Suburbio, Pueblo, Ayuntamiento, Aldea*.

4. **<Translate android="true" ids="amenity_type_emergency"/>**. Incluye 14 tipos de filtros.

5. **Infraestructura de emergencia**. Incluye 12 tipos de filtros.

6. **<Translate android="true" ids="amenity_type_finance"/>**. Incluye 12 tipos de filtros.

7. **Comida**. Incluye 12 tipos de filtros.

8. **Peligro**. Incluye 5 tipos: *Peligro de avalancha, Peligro de erosión, Peligro de inundación, Peligro nuclear, Carretera resbaladiza*.

9. **<Translate android="true" ids="amenity_type_healthcare"/>**. Incluye 31 tipos de filtros.

10. **<Translate android="true" ids="amenity_type_leisure"/>**. Incluye 148 tipos de filtros.

11. **<Translate android="true" ids="amenity_type_man_made"/>**. Incluye 121 tipos de filtros.

12. **<Translate android="true" ids="amenity_type_military"/>**. Incluye 7 tipos: *Zona de peligro, Búnker militar, Base naval militar, Oficina militar, Campo de tiro militar, Zona militar, Sitio de explosión nuclear*.

13. **<Translate android="true" ids="amenity_type_natural"/>**. Incluye 50 tipos de filtros.

14. **Náutico**. Incluye 41 tipos de filtros.

15. **<Translate android="true" ids="amenity_type_office"/>**. Incluye 39 tipos de filtros.

16. **Lugares populares (Wikipedia)**. Incluye 1 tipo: *Wikipedia*.

17. **Acceso privado**. No incluye ningún filtro.

18. **Rutas**. Incluye 15 tipos de filtros.

19. **Servicio**. Incluye 111 tipos de filtros.

20. **<Translate android="true" ids="amenity_type_sport"/>**. Incluye 119 tipos de filtros.

21. **Tienda**. Incluye 156 tipos de filtros.

22. **<Translate android="true" ids="amenity_type_tourism"/>**. Incluye 103 tipos de filtros.

23. **Transporte**. Incluye 97 tipos de filtros.

24. **Definido por el usuario**. Incluye 1 tipo: *Código postal de otro usuario definido*.

<!--
:::note since OsmAnd 5.0 for Android
Available for search:

- Religious POIs based on the `amenity=place_of_worship` tag are divided into religious-specific locations such as churches, mosques, or synagogues.
- Minor amenities such as “bench”, "youth bench" (`amenity=bench`) are available in the category list.
:::
-->

### Guardar nuevos filtros personalizados {#save-new-custom-filters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Guardar PDI personalizado Android](@site/static/img/search/custom_poi_save_android.png) ![Guardar PDI personalizado Android](@site/static/img/search/custom_poi_save_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Guardar PDI personalizado iOS](@site/static/img/search/custom_poi_save_2_ios.png)

</TabItem>

</Tabs>

Para **guardar** un filtro personalizado, seleccione los tipos de filtro y luego:

- Toque el botón *Mostrar* y seleccione el botón *Guardar* para iOS o el botón con el *icono que indica la acción de guardar* para Android.
- Introduzca un nombre para la nueva categoría.
- Su filtro aparecerá en la lista de la *pestaña Categorías* en la herramienta de búsqueda.

Otra forma de **guardar**:

- Seleccione *[categoría](#poi-search-by-categories) → [icono de filtro](#types-of-filters) →* seleccione *tipos* de características *→ menú de tres puntos → Guardar filtro*.

### Editar un filtro existente {#edit-an-existing-filter}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Eliminar PDI personalizado Android](@site/static/img/search/custom_poi_delete_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Eliminar PDI personalizado iOS](@site/static/img/search/custom_poi_delete_4_ios.png)

</TabItem>

</Tabs>

Desde la pantalla principal:

- Toque el botón de la *Lupa* en la esquina superior izquierda de la pantalla del dispositivo para abrir el menú *Buscar*.
- Seleccione la pestaña *Categorías*.
- Seleccione una categoría personalizada guardada y aparecerá la pantalla de resultados de búsqueda.
- Toque el icono *Filtro* junto a *Mostrar en el mapa* para abrir la pantalla *Filtros*.
- Toque el *menú de tres puntos*.
- En el menú desplegable, seleccione **Editar filtro**.
- Para guardar una búsqueda de PDI personalizada después de editarla:
    - Seleccione las categorías de PDI y los tipos de filtro para ellas *→* toque *Mostrar → menú de tres puntos → Guardar como →* introduzca un nuevo nombre de filtro o *guarde* los cambios en el actual.

### Eliminar filtro de PDI personalizado {#delete-custom-poi-filter}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Eliminar PDI personalizado Android](@site/static/img/search/custom_poi_delete_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Eliminar PDI personalizado iOS](@site/static/img/search/custom_poi_delete_2_ios.png)

</TabItem>

</Tabs>

Solo puede eliminar las categorías que se crearon utilizando filtros o búsqueda personalizada.

- Vaya a la pestaña [Categorías](#poi-search-by-categories) y seleccione la que necesite.
- En el campo junto a *Mostrar en el mapa*, toque el icono que representa el *filtro*.
- En el menú *Filtros*, toque el *menú de tres puntos* ( &#8285; ) ubicado en la esquina superior derecha de la pantalla.
- Seleccione **Eliminar filtro**.
- ***No se puede deshacer la eliminación.***

#### Eliminar categorías personalizadas (iOS) {#delete-custom-categories-ios}

![Eliminar PDI personalizado iOS](@site/static/img/search/custom_poi_delete_3_ios.png)

Una opción adicional solo para la aplicación iOS es **Eliminar categorías personalizadas**.

- Este elemento se encuentra al final de la lista de la pestaña *Categorías*.
- Seleccione las categorías innecesarias una por una o *Seleccionar todo*.
- Toque el botón **Eliminar**.

## Artículos relacionados {#related-articles}

- [Buscar todo](./search-all.md)
- [Buscar dirección](./search-address.md)
- [Historial de búsqueda](./search-history.md)
- [Buscar coordenadas](./search-coordinates.md)

> *Última actualización: mayo de 2025*