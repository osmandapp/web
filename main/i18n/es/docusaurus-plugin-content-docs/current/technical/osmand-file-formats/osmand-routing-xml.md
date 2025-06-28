---
source-hash: 9a57e167f8c6266f28b4788f50b92e7a169d7f2af0bccb7d225582142c315b68
sidebar_position: 5
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Configuración de enrutamiento - .routing.xml {#routing-configuration---routingxml}

<IncompleteArticle/>

Routing.xml es un archivo de configuración que almacena múltiples perfiles de enrutamiento. Cada perfil es independiente y tiene solo el perfil base de OsmAnd como referencia, por lo que no es posible crear una jerarquía de perfiles y deberá copiar todas las secciones de reglas. Cada una es totalmente configurable a través de routing.xml, lo que significa que no hay constantes en el código y todas las penalizaciones se calculan utilizando esta configuración.

En la aplicación, puede usar múltiples archivos routing.xml personalizados y perfiles que puede seleccionar en Ajustes -> Perfil -> Ajustes de navegación -> Ajustes de enrutamiento.

Por favor, consulte la documentación dentro de routing.xml:

- https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L24
- Otros ejemplos https://github.com/osmandapp/OsmAnd-resources/tree/master/routing


### Penalizaciones de los datos de elevación {#penalties-of-elevation-data}


Dependiendo del [modo seleccionado (Menos montañoso, Plano, Montañoso) de enrutamiento basado en bicicleta](../../user/navigation/routing/bicycle-based-routing.md) y la pendiente física (%) de la carretera, se añade una penalización calculada a partir de la diferencia de altura a cada metro horizontal.

La explicación dada como 3% 1:2 significa que se preferirá una ruta plana de 2 km a una ruta con 3% 1 km, aunque se preferirá una ruta con 3% 1 km a una ruta plana de 2,5 km.

**Tabla de penalizaciones de enrutamiento en bicicleta:**

| **Opción** | **Inclinación:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | **Declive:** | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:---|:---|-----|------|-----|------|------|-------|:---|------|------|------|------------|
|**_Deshabilitado/Cualquiera_** (el más corto pero más difícil)| | - | - | - | - | - | - | | - | - | - | - |
|**_Menos montañoso_** (predeterminado, equilibrado)| | | 1:2 | 1:8 | 1:16 | 1:32 | 1:48 | | 1:6.4| 1:25 | 1:25 | imposible |
|**_Plano_** (el más largo pero fácil)| | | 1:2 | 1:12| 1:30 | 1:50 | 1:74 | | 1:6.4| 1:25 | 1:25 | imposible |
|**_Montañoso_** (más difícil)| | 1:61|1:19.7|1:7.5| 1:3 | 1:0.5| 1:0.3 | | 1:6.4| 1:25 | 1:25 | imposible |


Dependiendo del [modo seleccionado (Menos montañoso, Plano, Montañoso) de enrutamiento peatonal](../../user/navigation/routing/pedestrian-routing.md) y la pendiente física (%) de la carretera, se añade una penalización calculada a partir de la diferencia de altura a cada metro horizontal.

**Tabla de penalizaciones de enrutamiento peatonal:**

| **Opción** | **Inclinación:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | **Declive:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:---|:---|-----|-----|-----|------|------|-------|:---|-----|------|------|------|-------|
|**_Deshabilitado/Cualquiera_** (el más corto pero más difícil)| | - | - | - | - | - | - | | - | - | - | - | - |
|**_Menos montañoso_** (predeterminado, equilibrado)| | | 1:1 | 1:4 | 1:8 | 1:10 | 1:15 | | 1:5 | 1:10 | 1:17 | 1:25 | 1:40 |
|**_Plano_** (el más largo pero fácil)| | | 1:2 | 1:12| 1:30 | 1:50 | 1:74 | | 1:5 | 1:10 | 1:17 | 1:25 | 1:40 |
|**_Montañoso_** (más difícil)| | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 | | 1:5| 1:10 | 1:17 | 1:25 | 1:40 |