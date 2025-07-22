---
source-hash: bf99678e5242473057ed7799710f80ba10f57eb3f3795a53a0ac3600858d896c
sidebar_position: 6
title: Buscar Coordenadas
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Resumen {#overview}

La **búsqueda de coordenadas de OsmAnd** le permite encontrar una ubicación específica por latitud y longitud. Este tipo de búsqueda ayuda a identificar una ubicación con precisión. Es especialmente útil para áreas que no tienen direcciones precisas, o para tareas geográficas específicas como la creación de geocercas o el posicionamiento preciso en espacios abiertos.

OsmAnd ofrece varias formas de acceder a la *herramienta de búsqueda → [pestaña de búsqueda de direcciones](../search/search-address.md)*, donde se encuentra la **búsqueda de coordenadas**.

- El [botón de búsqueda](../widgets/map-buttons.md#search) en la pantalla de la aplicación del mapa.
- Vaya al *Menú* principal de Android *→ Buscar → Pestaña de dirección → Búsqueda de coordenadas*.
- Al prepararse para iniciar una ruta, toque *Navegación → Establecer destino → Campo de búsqueda → Pestaña de dirección → Búsqueda de coordenadas*.


## Cómo usar {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Buscar Coordenadas Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Buscar Coordenadas iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Las coordenadas se pueden introducir en cualquier formato disponible, pero la ubicación encontrada se muestra en el formato especificado en *Configurar perfil → Ajustes generales → Unidades y formatos*.

- Para usar la búsqueda de coordenadas, puede escribirlas en cada campo correspondiente individualmente, o pegar coordenadas previamente copiadas en el campo de búsqueda o introducirlas en él. La aplicación le pide que seleccione una ubicación adecuada.
- La búsqueda de coordenadas convierte automáticamente un formato de coordenadas a otro cuando se cambia el formato especificado en el campo con su lista.
- Toque la ubicación sugerida y se abrirá el [menú contextual del mapa](../map/map-context-menu.md#select-any-point-long-tap).
- Puede encontrar más información aquí [Coordenadas geográficas](https://en.wikipedia.org/wiki/Geographic_coordinate_system).


**Alcance de la función de búsqueda de coordenadas**:

- *Ubicación precisa*. La búsqueda de coordenadas proporciona una ubicación precisa. Puede introducir coordenadas precisas obtenidas, por ejemplo, de otras fuentes como un mapa, un dispositivo GPS o servicios en línea.
- *Lugares sin dirección*. Las coordenadas son particularmente útiles cuando se trata de lugares que no tienen una dirección exacta, o cuando la dirección es desconocida. Por ejemplo, puede ser un área remota, un punto en el mar o un pico de montaña. Al introducir coordenadas, puede encontrar y navegar a dichas ubicaciones sin tener que saber la dirección.
- *Compartir ubicación*. La búsqueda por coordenadas proporciona una forma conveniente de introducir información. Puede introducir coordenadas manualmente o copiarlas de otras fuentes. Esto puede ser útil al compartir ubicaciones con otros o al usar coordenadas obtenidas previamente.


## Formato de coordenadas {#coordinate-format}

Hay varias formas de introducir coordenadas para la búsqueda. Para usar cada una de ellas, es muy importante seguir las reglas de entrada, de lo contrario la aplicación no podrá encontrar la ubicación.

1. **<Translate android="true" ids="navigate_point_format_D"/>**

    ![Buscar Coordenadas Android](@site/static/img/search/coordinates_search_degrees_andr.png)

    **Coordenadas decimales (grados)**. En este formato, las coordenadas de latitud y longitud se escriben en formato decimal, por ejemplo, 52.37022° de latitud y 4.89517° de longitud para Ámsterdam. Este método de entrada es fácil de usar y es el más común. Puede leer más sobre el formato de coordenadas decimales [aquí](https://en.wikipedia.org/wiki/Decimal_degrees).

    - *Reglas de entrada*. Las coordenadas de latitud y longitud se escriben en formato decimal, donde la latitud oscila entre -90 y 90 y la longitud oscila entre -180 y 180.
    - *Más comúnmente usado*. Las coordenadas decimales se utilizan ampliamente en aplicaciones de navegación, dispositivos GPS, mapas web y otros servicios de geoposicionamiento.

2. **<Translate android="true" ids="navigate_point_format_DM"/>**

    ![Buscar Coordenadas Android](@site/static/img/search/coordinates_search_DM_andr.png)

    **Grados y minutos (DM)**. En este formato, las coordenadas de latitud y longitud se registran utilizando grados y minutos. Por ejemplo, 37:46.29 de latitud y -122:25.10 de longitud para San Francisco. Este formato puede ser menos preciso y puede tardar más en introducirse.
    - *Reglas de entrada*. Las coordenadas de latitud y longitud se escriben en un formato que utiliza grados (:) y minutos (:).
    - *Más comúnmente usado*. El formato DM se encuentra a menudo en la navegación marina, la aviación, la astronomía y los sistemas de cartografía topográfica.

3. **<Translate android="true" ids="navigate_point_format_DMS"/>**

    ![Buscar Coordenadas Android](@site/static/img/search/coordinates_search_DMS_andr.png)

    **Grados, minutos y segundos (DMS)**. El formato de coordenadas DMS registra las coordenadas geográficas donde los valores se dan en grados, minutos y segundos. Los grados (DDD) pueden tomar valores de 0 a 180 para la longitud y de 0 a 90 para la latitud. Los valores positivos indican longitud este y latitud norte, y los valores negativos indican longitud oeste y latitud sur. Los minutos (MM) pueden tomar valores de 0 a 59. Los segundos (SS.S) representan la fracción decimal de un segundo y también pueden oscilar entre 0 y 59.9.
    - *Reglas de entrada*. Las coordenadas de latitud y longitud se escriben en un formato que utiliza grados (:), minutos (:) y segundos (.).
    - *Más comúnmente usado*. El formato DMS se utiliza ampliamente en geodesia, aplicaciones de navegación, cartografía, astronomía y otros campos donde se requiere una expresión más detallada de las coordenadas de ubicación.

4. **<Translate android="true" ids="navigate_point_format_utm"/>**

    ![Buscar Coordenadas Android](@site/static/img/search/coordinates_search_UTM_andr.png)

    **UTM (Sistema Universal Transversal de Mercator)**. En este formato, las coordenadas se especifican utilizando la zona UTM, las direcciones Este y Norte. Por ejemplo, para Ámsterdam, las coordenadas podrían ser aproximadamente las siguientes: zona 31, dirección Este 581000, dirección Norte 5809000. La introducción de coordenadas en formato UTM puede requerir cierta familiaridad con el sistema y ser más compleja que otros formatos, pero proporciona una buena precisión y cumple con los estándares globales de geoposicionamiento. Puede leer más sobre el formato UTM [aquí](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system).
    - *Reglas de entrada*. Las coordenadas se registran en un formato que utiliza la zona UTM y los desplazamientos Este y Norte.
    - *Más comúnmente usado*. El formato UTM se utiliza a menudo en topografía, cartografía y sistemas de información geográfica para la medición y la navegación.

5. **<Translate android="true" ids="navigate_point_format_olc"/>** ((OLC) - 9F2X4WFJ+7W (Open Location Code representa un área de 9m x 14m))

    ![Buscar Coordenadas Android](@site/static/img/search/coordinates_search_OLC_andr.png)

    **Open Location Code (OLC)**, también conocido como **Plus Code**, es un sistema de codificación de ubicación global. Es una combinación de letras y números para indicar la latitud y longitud de cualquier ubicación en el planeta. Ejemplo de un código OLC para Ámsterdam: 9F3WCVWG+FP. En este ejemplo, "9F3WCVWG" indica una cuadrícula gruesa, y "+FP" especifica una ubicación dentro de esa área. Lea más [aquí](https://en.wikipedia.org/wiki/Open_Location_Code).
    - *Reglas de entrada*.
        - El código OLC consta de 4 a 14 caracteres, que pueden ser letras de "C" a "Z" (excepto "I" y "O") y números de "2" a "9".
        - El código comienza con un prefijo global que indica un continente o área.
        - Le siguen grupos de caracteres separados por puntos. Cada grupo representa un área más estrecha.
        - Para aclarar la ubicación, las letras y los dígitos se complementan con otros caracteres en el código OLC.
    - *Más comúnmente usado*. OLC se utiliza a menudo en áreas donde las direcciones precisas no están disponibles o son difíciles de determinar, como áreas remotas, desiertos u océanos. También se utiliza ampliamente en aplicaciones y servicios relacionados con el geoposicionamiento, la entrega, los servicios de emergencia y otras áreas donde se requiere una ubicación precisa sin el uso de direcciones tradicionales.

6. **<Translate android="true" ids="navigate_point_mgrs"/>**

    ![Buscar Coordenadas Android](@site/static/img/search/coordinates_search_MGRS_andr.png)

    **MGRS (Sistema de Referencia de Cuadrícula Militar)**. Este es un sistema de coordenadas que se utiliza a menudo en aplicaciones militares. Se basa en el sistema UTM y se complementa con una cuadrícula adicional de cuadrados. Un ejemplo de coordenadas en formato MGRS para una ubicación en Australia puede ser el siguiente: 55HBE1234567890. En este ejemplo, "55H" representa la zona MGRS y "BE" representa el cuadrado en el que se encuentra la ubicación. "123456" representa el desplazamiento hacia el este y "7890" representa el desplazamiento hacia el norte dentro de ese cuadrado. Los MGRS se utilizan ampliamente en áreas que requieren alta precisión y georreferenciación. Son particularmente útiles en entornos donde las direcciones pueden no ser claras o estar disponibles, como operaciones militares o expediciones en áreas remotas. Puede leer más sobre el formato MGRS [aquí](https://en.wikipedia.org/wiki/Military_Grid_Reference_System).
    - *Reglas de entrada*. Las coordenadas consisten en una zona MGRS, un cuadrado y dos dígitos más que indican los desplazamientos este y norte.
    - *Más comúnmente usado*. El formato MGRS se utiliza ampliamente en la navegación y las comunicaciones militares, y también puede ser útil para los entusiastas de las actividades al aire libre y los excursionistas.

7. **Swiss Grid** (CH1903) y **Swiss Grid** (CH1903+)

    ![Buscar Coordenadas Android](@site/static/img/search/coordinates_search_Swiss_andr.png)

    **Sistema de coordenadas suizo**. Swiss Grid (CH1903) y Swiss Grid (CH1903+) son sistemas de coordenadas ampliamente utilizados en Suiza para el posicionamiento. Ambos formatos se basan en el sistema CH1903, que se introdujo en 1903 y se basa en la proyección de la cuadrícula internacional suiza. Ejemplo de coordenadas en formato Swiss Grid (CH1903) — Este: 600000; Norte: 200000. En formato Swiss Grid (CH1903+) — Este: 600300; Norte: 200400. Puede leer más sobre el sistema de coordenadas geográficas Swiss Grid [aquí](https://en.wikipedia.org/wiki/Swiss_coordinate_system).
    - *Reglas de entrada*.
        - Las coordenadas en formato CH1903 constan de dos componentes: Este y Norte.
        - El Este se mide en metros desde un punto llamado Eje de Lucerna (Este cero).
        - El Norte se da en metros desde el ecuador.
        - El formato CH1903+ utiliza las mismas reglas de entrada que CH1903, pero con valores más precisos.
        - CH1903+ incluye correcciones para tener en cuenta los cambios en las coordenadas causados por los movimientos tectónicos en Suiza.
    - *Más comúnmente usado*. Los formatos Swiss Grid (CH1903) y Swiss Grid (CH1903+) se utilizan en Suiza para mediciones geodésicas, cartografía, sistemas de información geográfica y construcción e ingeniería. Estos formatos proporcionan un sistema de coordenadas local específico para Suiza.


> Para cada perfil por separado, puede establecer un formato de coordenadas diferente. Para ello, vaya a *Ajustes generales → [Formato de coordenadas](../personal/profiles.md#units--formats)*.


<!--

## Solución de problemas {#troubleshooting}

https://github.com/osmandapp/OsmAnd/issues/14081

https://github.com/osmandapp/OsmAnd/issues/16114

https://github.com/osmandapp/OsmAnd/issues/14081

-->


## Artículos relacionados {#related-articles}

- [Buscar todo](./search-all.md)
- [Buscar dirección](./search-address.md)
- [Historial de búsqueda](./search-history.md)
- [Buscar PDI](./search-poi.md)


> *Última actualización: julio de 2024*