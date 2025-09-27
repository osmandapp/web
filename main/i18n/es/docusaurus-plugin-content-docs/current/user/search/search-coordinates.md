---
source-hash: f338192d8b8c1dbdc1b08667fb4caff3b45c57bc128f5f53a297f3ace1a6b7fa
sidebar_position: 6
title:  Búsqueda por Coordenadas
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

**La búsqueda por coordenadas de OsmAnd** le permite encontrar una ubicación específica por latitud y longitud. Este tipo de búsqueda ayuda a identificar una ubicación con precisión. Es especialmente útil para áreas que no tienen direcciones precisas, o para tareas geográficas específicas como la creación de geovallas o el posicionamiento preciso en espacios abiertos.

OsmAnd proporciona varias formas de llegar a la *herramienta de Búsqueda → [pestaña Búsqueda de dirección](../search/search-address.md)*, donde se encuentra la **Búsqueda por coordenadas**.

- El [botón de Búsqueda](../widgets/map-buttons.md#search) en la pantalla de la aplicación de mapa.
- Vaya al *Menú* principal de Android *→ Búsqueda → Pestaña Dirección → Búsqueda por Coordenadas*.
- Al prepararse para iniciar una ruta, toque *Navegación → Establecer destino → Campo de búsqueda → Pestaña Dirección → Búsqueda por Coordenadas*.  


## Cómo Usar {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Búsqueda por Coordenadas Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Búsqueda por Coordenadas iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Las coordenadas se pueden introducir en cualquier formato disponible, pero la ubicación encontrada se muestra en el formato especificado en *Configurar perfil → Ajustes generales → Unidades y formatos*.

- Para utilizar la búsqueda por coordenadas, puede escribirlas en cada campo correspondiente individualmente, o pegar coordenadas previamente copiadas en el campo de búsqueda o introducirlas en él. La aplicación le pedirá que seleccione una ubicación adecuada.
- La Búsqueda por Coordenadas convierte automáticamente un formato de coordenadas a otro cuando se cambia el formato especificado en el campo con su lista.
- Toque la ubicación sugerida y se abrirá el [menú contextual del mapa](../map/map-context-menu.md#select-any-point-long-tap).
- Puede encontrar más información aquí [Coordenadas geográficas](https://en.wikipedia.org/wiki/Geographic_coordinate_system).


**Alcance de la función de búsqueda por coordenadas**:

- *Ubicación precisa*. La búsqueda por coordenadas proporciona una ubicación exacta. Puede introducir coordenadas precisas obtenidas, por ejemplo, de otras fuentes como un mapa, un dispositivo GPS o servicios en línea.
- *Lugares sin dirección*. Las coordenadas son especialmente útiles cuando se trata de lugares que no tienen una dirección exacta, o cuando la dirección es desconocida. Por ejemplo, puede ser una zona remota, un punto en el mar o la cima de una montaña. Al introducir las coordenadas, puede encontrar y navegar a dichos lugares sin necesidad de conocer la dirección.
- *Compartir ubicación*. La búsqueda por coordenadas proporciona una forma cómoda de introducir información. Puede introducir las coordenadas manualmente o copiarlas de otras fuentes. Esto puede ser útil al compartir ubicaciones con otros o al utilizar coordenadas obtenidas previamente.


## Formato de Coordenadas {#coordinate-format}

Hay varias formas de introducir las coordenadas para la búsqueda. Para utilizar cada una de ellas, es muy importante seguir las reglas de entrada, de lo contrario la aplicación no podrá encontrar la ubicación.

1. **<Translate android="true" ids="navigate_point_format_D"/>**  

    ![Búsqueda por Coordenadas Android](@site/static/img/search/coordinates_search_degrees_andr.png)  

    **Coordenadas decimales (grados)**. En este formato, las coordenadas de latitud y longitud se escriben en formato decimal, por ejemplo, 52.37022° de latitud y 4.89517° de longitud para Ámsterdam. Este método de entrada es fácil de usar y es el más común. Puede leer más sobre el formato de coordenadas decimales [aquí](https://en.wikipedia.org/wiki/Decimal_degrees).  

    - *Reglas de entrada*. Las coordenadas de latitud y longitud se escriben en formato decimal, donde la latitud va de -90 a 90 y la longitud de -180 a 180.
    - *Uso más común*. Las coordenadas decimales se utilizan ampliamente en aplicaciones de navegación, dispositivos GPS, mapas web y otros servicios de geoposicionamiento.  

2. **<Translate android="true" ids="navigate_point_format_DM"/>**  

    ![Búsqueda por Coordenadas Android](@site/static/img/search/coordinates_search_DM_andr.png)  

    **Grados y Minutos (DM)**. En este formato, las coordenadas de latitud y longitud se registran utilizando grados y minutos. Por ejemplo, 37:46.29 de latitud y -122:25.10 de longitud para San Francisco. Este formato puede ser menos preciso y puede llevar más tiempo introducirlo.
    - *Reglas de entrada*. Las coordenadas de latitud y longitud se escriben en un formato que utiliza grados (:) y minutos (:).
    - *Uso más común*. El formato DM se encuentra a menudo en sistemas de navegación marítima, aviación, astronomía y cartografía topográfica.

3. **<Translate android="true" ids="navigate_point_format_DMS"/>**  

    ![Búsqueda por Coordenadas Android](@site/static/img/search/coordinates_search_DMS_andr.png)  

    **Grados, Minutos y Segundos (DMS)**. El formato de coordenadas DMS registra coordenadas geográficas donde los valores se dan en grados, minutos y segundos. Los grados (DDD) pueden tomar valores de 0 a 180 para la longitud y de 0 a 90 para la latitud. Los valores positivos indican longitud este y latitud norte, y los valores negativos indican longitud oeste y latitud sur. Los minutos (MM) pueden tomar valores de 0 a 59. Los segundos (SS.S) representan la fracción decimal de un segundo y también pueden variar de 0 a 59.9.
    - *Reglas de entrada*. Las coordenadas de latitud y longitud se escriben en un formato que utiliza grados (:), minutos (:) y segundos (.).
    - *Uso más común*. El formato DMS se utiliza ampliamente en geodesia, aplicaciones de navegación, cartografía, astronomía y otros campos en los que se requiere una expresión más detallada de las coordenadas de ubicación.

4. **<Translate android="true" ids="navigate_point_format_utm"/>**  

    ![Búsqueda por Coordenadas Android](@site/static/img/search/coordinates_search_UTM_andr.png)  

    **UTM (Sistema Transversal Universal de Mercator)**. En este formato, las coordenadas se especifican utilizando la zona UTM, y las direcciones Este y Norte. Por ejemplo, para Ámsterdam, las coordenadas podrían ser aproximadamente las siguientes: zona 31, dirección Este 581000, dirección Norte 5809000. La introducción de coordenadas en formato UTM puede requerir cierta familiaridad con el sistema y ser más compleja que otros formatos, pero proporciona una buena precisión y cumple con los estándares mundiales de geoposicionamiento. Puede leer más sobre el formato UTM [aquí](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system).
    - *Reglas de entrada*. Las coordenadas se registran en un formato que utiliza la zona UTM y los desplazamientos Este y Norte.
    - *Uso más común*. El formato UTM se utiliza a menudo en topografía, cartografía y sistemas de información geográfica para medición y navegación.

5. **<Translate android="true" ids="navigate_point_format_olc"/>**  ((OLC) - 9F2X4WFJ+7W (Open Location Code representa un área de 9m x 14m))  

    ![Búsqueda por Coordenadas Android](@site/static/img/search/coordinates_search_OLC_andr.png)  

    **Open Location Code (OLC)**, también conocido como **Plus Code**, es un sistema global de codificación de ubicaciones. Es una combinación de letras y números para indicar la latitud y longitud de cualquier lugar del planeta. Ejemplo de un código OLC para Ámsterdam: 9F3WCVWG+FP. En este ejemplo, "9F3WCVWG" indica una cuadrícula gruesa, y "+FP" especifica una ubicación dentro de esa área. Lea más [aquí](https://en.wikipedia.org/wiki/Open_Location_Code).
    - *Reglas de entrada*.  
        - El código OLC consta de 4 a 14 caracteres, que pueden ser letras de la "C" a la "Z" (excepto "I" y "O") y números del "2" al "9".
        - El código comienza con un prefijo global que indica un continente o área.
        - A esto le siguen grupos de caracteres que están separados por puntos. Cada grupo representa un área más estrecha.
        - Para aclarar la ubicación, las letras y los dígitos se complementan con otros caracteres en el código OLC.  
    - *Uso más común*. OLC se utiliza a menudo en áreas donde las direcciones precisas no están disponibles o son difíciles de determinar, como áreas remotas, desiertos u océanos. También se utiliza ampliamente en aplicaciones y servicios relacionados con el geoposicionamiento, la entrega, los servicios de emergencia y otras áreas donde se requiere una ubicación precisa sin el uso de direcciones tradicionales.  

6. **<Translate android="true" ids="navigate_point_mgrs"/>**  

    ![Búsqueda por Coordenadas Android](@site/static/img/search/coordinates_search_MGRS_andr.png)  

    **MGRS (Sistema de Referencia de Cuadrícula Militar)**. Este es un sistema de coordenadas que se utiliza a menudo en aplicaciones militares. Se basa en el sistema UTM y se complementa con una cuadrícula adicional de cuadrados. Un ejemplo de coordenadas en formato MGRS para una ubicación en Australia puede ser el siguiente: 55HBE1234567890. En este ejemplo, "55H" representa la zona MGRS y "BE" representa el cuadrado en el que se encuentra la ubicación. "123456" representa el desplazamiento hacia el este y "7890" representa el desplazamiento hacia el norte dentro de ese cuadrado. Las MGRS se utilizan ampliamente en áreas que requieren alta precisión y georreferenciación. Son particularmente útiles en entornos donde las direcciones pueden no ser claras o no estar disponibles, como operaciones militares o expediciones en áreas remotas. Puede leer más sobre el formato MGRS [aquí](https://en.wikipedia.org/wiki/Military_Grid_Reference_System).  
    - *Reglas de entrada*. Las coordenadas consisten en una zona MGRS, un cuadrado y dos dígitos más que indican los desplazamientos este y norte.
    - *Uso más común*. El formato MGRS se utiliza ampliamente en la navegación y las comunicaciones militares, y también puede ser útil para los entusiastas de las actividades al aire libre y los excursionistas.

7. **Swiss Grid** (CH1903) y **Swiss Grid** (CH1903+)  

    ![Búsqueda por Coordenadas Android](@site/static/img/search/coordinates_search_Swiss_andr.png)  

    **Sistema de coordenadas suizo**. Swiss Grid (CH1903) y Swiss Grid (CH1903+) son sistemas de coordenadas ampliamente utilizados en Suiza para el posicionamiento. Ambos formatos se basan en el sistema CH1903, que se introdujo en 1903 y se basa en la proyección de la Red Internacional Suiza. Ejemplo de coordenadas en formato Swiss Grid (CH1903) — Este: 600000; Norte: 200000. En formato Swiss Grid (CH1903+) — Este: 600300; Norte: 200400. Puede leer más sobre el sistema de coordenadas geográficas Swiss Grid [aquí](https://en.wikipedia.org/wiki/Swiss_coordinate_system).  
    - *Reglas de entrada*.  
        - Las coordenadas en formato CH1903 constan de dos componentes: Este y Norte.
        - El Este se mide en metros desde un punto llamado Eje de Lucerna (cero Este).
        - El Norte se da en metros desde el ecuador.
        - El formato CH1903+ utiliza las mismas reglas de entrada que el CH1903, pero con valores más precisos.
        - CH1903+ incluye correcciones para tener en cuenta los desplazamientos de coordenadas causados por cambios en los movimientos tectónicos en Suiza.
    - *Uso más común*. Los formatos Swiss Grid (CH1903) y Swiss Grid (CH1903+) se utilizan en Suiza para mediciones geodésicas, cartografía, sistemas de información geográfica y construcción e ingeniería. Estos formatos proporcionan un sistema de coordenadas local específico para Suiza.


> Para cada perfil por separado puede establecer un formato de coordenadas diferente. Para ello, vaya a *Ajustes generales → [Formato de coordenadas](../personal/profiles.md#units--formats)*.


<!--

## Troubleshooting {#troubleshooting}

https://github.com/osmandapp/OsmAnd/issues/14081  

https://github.com/osmandapp/OsmAnd/issues/16114  

https://github.com/osmandapp/OsmAnd/issues/14081  

-->


## Artículos Relacionados {#related-articles}

- [Buscar Todo](./search-all.md)
- [Búsqueda de Dirección](./search-address.md)
- [Historial de Búsqueda](./search-history.md)
- [Búsqueda de PDI](./search-poi.md)