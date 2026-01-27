---
source-hash: 369df83f8be5a3b6691d0197bb0f13c18822041d0ff5344d4ae6bb2462efa39d
sidebar_position: 5
---

import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Configuración de enrutamiento - .routing.xml {#routing-configuration---routingxml}

<IncompleteArticle/>

Routing.xml es un archivo de configuración que almacena múltiples perfiles de enrutamiento. Cada perfil es independiente y tiene solo el perfil base de OsmAnd como referencia, por lo que no es posible crear una jerarquía de perfiles y deberá copiar todas las secciones de reglas. Cada uno es totalmente configurable a través de routing.xml, lo que significa que no hay constantes en el código y todas las penalizaciones se calculan utilizando esta configuración.

En la aplicación, puede usar múltiples archivos routing.xml personalizados y perfiles que puede seleccionar en Ajustes -> Perfil -> Ajustes de navegación -> Ajustes de enrutamiento.

Por favor, consulte la documentación dentro de routing.xml:

- https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L24
- Other examples https://github.com/osmandapp/OsmAnd-resources/tree/master/routing


### Penalizaciones de los datos de elevación {#penalties-of-elevation-data}


Dependiendo del [modo seleccionado (Menos montañoso, Plano, Montañoso) de enrutamiento basado en bicicleta](../../user/navigation/routing/bicycle-based-routing.md) y la pendiente física (%) de la carretera, se añade una penalización calculada a partir de la diferencia de altura a cada metro horizontal.

La penalización 1:2 asigna un factor de coste de 2.0 a una inclinación del 3%. En consecuencia, un segmento cuesta arriba de 1 km (coste 2.0) se pondera de manera equivalente a un segmento plano de 2 km, pero se prefiere sobre cualquier desvío plano que exceda los 2 km.

**Tablas y gráficos de penalizaciones de enrutamiento en bicicleta:**

|                  **Opción**                 |**Inclinación:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|
|**_Deshabilitado/Cualquiera_** (el más corto pero más difícil)|            |  -  |   -  |  -  |   -  |   -  |   -   |
|**_Plano_** (el más largo pero fácil)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            
|**_Menos montañoso_** (predeterminado, equilibrado)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |     
|**_Montañoso_** (más difícil)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 | 

<img src={require('@site/static/img/technical/bicycle_incline.png').default} alt="Gráfico de Inclinación en Bicicleta" />


|                  **Opción**                 |**Declive:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|------|------|------|------------|
|**_Deshabilitado/Cualquiera_** (el más corto pero más difícil)|            |   -  |   -  |   -  |     -      |
|**_Plano_** (el más largo pero fácil)            |            | 1:6.4| 1:25 | 1:25 | imposible |
|**_Menos montañoso_** (predeterminado, equilibrado)         |            | 1:6.4| 1:25 | 1:25 | imposible |
|**_Montañoso_** (más difícil)                 |            | 1:6.4| 1:25 | 1:25 | imposible |

<img src={require('@site/static/img/technical/bicycle_decline.png').default} alt="Gráfico de Declive en Bicicleta" />

<!--
|                  **Option**                 |**Incline:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |**Decline:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|:-----------|------|------|------|------------|
|**_Disabled/Any_** (the shortest but hardest)|            |  -  |   -  |  -  |   -  |   -  |   -   |            |   -  |   -  |   -  |     -      |
|**_Less hilly_** (default, balanced)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Flat_** (the longest but easy)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Hilly_** (more difficult)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 |            | 1:6.4| 1:25 | 1:25 | impossible |
-->


Dependiendo del [modo seleccionado (Menos montañoso, Plano, Montañoso) de enrutamiento peatonal](../../user/navigation/routing/pedestrian-routing.md) y la pendiente física (%) de la carretera, se añade una penalización calculada a partir de la diferencia de altura a cada metro horizontal.

**Tablas y gráficos de penalizaciones de enrutamiento peatonal:**

|                  **Opción**                 | **Inclinación:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | 
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|
|**_Deshabilitado/Cualquiera_** (el más corto pero más difícil)|              |  -  |  -  |  -  |   -  |   -  |   -   |
|**_Plano_** (el más largo pero fácil)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |      
|**_Menos montañoso_** (predeterminado, equilibrado)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |  
|**_Montañoso_** (más difícil)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |

<img src={require('@site/static/img/technical/pedestrian_incline.png').default} alt="Gráfico de Inclinación para Peatones" />

|                  **Opción**                 | **Declive:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|------|------|------|-------|
|**_Deshabilitado/Cualquiera_** (el más corto pero más difícil)|              |  -  |   -  |   -  |   -  |   -   |
|**_Plano_** (el más largo pero fácil)            |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Menos montañoso_** (predeterminado, equilibrado)         |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Montañoso_** (más difícil)                 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |

<img src={require('@site/static/img/technical/pedestrian_decline.png').default} alt="Gráfico de Declive para Peatones" />

<!--
|                  **Option**                 | **Incline:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | **Decline:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|:-------------|-----|------|------|------|-------|
|**_Disabled/Any_** (the shortest but hardest)|              |  -  |  -  |  -  |   -  |   -  |   -   |              |  -  |   -  |   -  |   -  |   -   |
|**_Less hilly_** (default, balanced)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Flat_** (the longest but easy)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Hilly_** (more difficult)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |
-->