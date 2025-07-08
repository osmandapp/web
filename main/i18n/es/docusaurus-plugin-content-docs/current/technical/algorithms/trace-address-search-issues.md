---
source-hash: 4127321256305d47dce48682c4990b76cec1e4db868aa211746d1c49c5418eb3
sidebar_position: 3
---

# Rastrear problemas de búsqueda de direcciones {#trace-address-search-issues}

## Dirección encontrada en la ciudad equivocada {#address-found-in-the-wrong-city}

En algunos casos, una búsqueda de dirección en OsmAnd puede devolver resultados para una ciudad diferente a la esperada. Estos problemas surgen debido a cómo se definen y procesan los límites de la ciudad en OpenStreetMap (OSM). Si un usuario busca un **nombre de calle** o una **calle con un número de casa** sin especificar una ciudad, el **algoritmo de búsqueda de texto completo** puede devolver una coincidencia de otra ciudad.

### Problemas relacionados {#related-issues}

Se han reportado casos de asignaciones de ciudad incorrectas en los siguientes problemas de GitHub:
[10679](https://github.com/osmandapp/OsmAnd/issues/10679), [10677](https://github.com/osmandapp/OsmAnd/issues/10677), [10699](https://github.com/osmandapp/OsmAnd/issues/10699), [10921](https://github.com/osmandapp/OsmAnd/issues/10921).


## Cómo OsmAnd identifica los límites de la ciudad {#how-osmand-identifies-city-boundaries}

OsmAnd determina el límite de una ciudad utilizando su **relación administrativa** en OpenStreetMap. Para que un límite se considere válido, debe cumplir los siguientes criterios:

- La **relación de límite** debe incluir las etiquetas:
  - **boundary** = *administrative* o *postal_code*
  - **place** = *[ciudad, pueblo, aldea, caserío, etc.]*

- La relación de límite debe contener un **miembro de relación**:
  - **label**
  - **admin_centre** o **admin_center**

- El **nombre de la relación de límite** debe coincidir exactamente con el **nombre del nodo de lugar**.

- Si no se cumplen estas condiciones, la relación de límite no se reconoce como un límite de ciudad.

- Entre los límites superpuestos, OsmAnd selecciona el **límite más grande**.

- Las **vías de relación** definen el límite. OsmAnd admite vías **internas** y **externas**.


## Coincidencia exacta de nombres {#exact-name-matching}

Para un procesamiento preciso de las direcciones, los **nombres de las calles deben coincidir exactamente**, incluyendo:

- Diferencias en los **signos diacríticos** (por ejemplo, *Rue André Chenier* vs. *Rue André Chénier*).
- Variaciones en **prefijos y abreviaturas**.

Si se produce una falta de coincidencia, puede surgir uno de los siguientes problemas:

- La casa se **asigna a la calle equivocada**.
- La **misma calle aparece varias veces** en diferentes límites de la ciudad.

Consulte el problema de GitHub [10036](https://github.com/osmandapp/OsmAnd/issues/10036) para ver un ejemplo.


## Posibles causas de asignaciones de ciudad incorrectas {#possible-causes-of-incorrect-city-assignments}

### Problemas en OpenStreetMap {#issues-in-openstreetmap}

1. **Límites de ciudad rotos o faltantes.**

   - Si los límites de la ciudad están incompletos, incorrectos o faltantes, las asignaciones de direcciones pueden ser poco fiables.
   - **Solución:** Siga la [guía de reparación de límites de OSM](https://help.openstreetmap.org/questions/1053/how-do-i-fix-inconsistent-boundaries).
   - Ejemplo: [10699](https://github.com/osmandapp/OsmAnd/issues/10699).

2. **Los límites de la ciudad no se superponen correctamente.**

   - Si una calle pertenece a dos ciudades pero está mapeada incorrectamente, OsmAnd puede no reconocer la superposición.
   - **Solución:** Ajuste los límites de la ciudad en OpenStreetMap para asegurarse de que abarquen correctamente las calles compartidas.

3. **Faltan etiquetas requeridas en la relación de límite.**

   - Si una relación carece de etiquetas esenciales como **boundary=administrative** o **place=city**, no se utilizará.
   - Ejemplos:
     - Problema [10921](https://github.com/osmandapp/OsmAnd/issues/10921) (etiquetas faltantes).
     - Problema [12548](https://github.com/osmandapp/OsmAnd/issues/12548) (problema de límite de *Erfstadt*).

### Problemas en OsmAnd {#issues-in-osmand}

**Direcciones asignadas a ciudades vecinas.**

- Ciudades, pueblos, aldeas o suburbios cercanos pueden **heredar direcciones incorrectamente** debido a superposiciones de límites o límites faltantes.
- Esto es común cuando las ciudades se dividen en áreas administrativas pero carecen de relaciones OSM claramente definidas.
- Consulte los informes relacionados: [10559](https://github.com/osmandapp/OsmAnd/issues/10559), [10679](https://github.osmandapp/OsmAnd/issues/10679), [10730](https://github.com/osmandapp/OsmAnd/issues/10730).


## Métodos de verificación {#verification-methods}

Para verificar y solucionar problemas de límites de ciudad, compare los resultados de diferentes herramientas de mapas.

### Usando OpenStreetMap {#using-openstreetmap}

**Ejemplo:** Dirección buscada: *Wolności 223, Zabrze*

1. Abra OpenStreetMap (OSM).
2. Busque **Zabrze** y seleccione el resultado asociado con un **límite administrativo**.
3. Vea el límite de la ciudad para confirmar si la dirección está asignada correctamente.

### Usando Nominatim {#using-nominatim}

**Ejemplo:** Dirección buscada: *Wolności 223, Zabrze*

1. Busque la **calle y el número de casa** sin especificar la ciudad.
2. Si el resultado de la búsqueda sitúa la dirección en otra ciudad, anote el nombre de la ciudad sugerida.
3. Introduzca el **nombre de la ciudad encontrada** en Nominatim.
4. Compruebe el valor de **Clasificación de dirección**:
   - Ejemplo: *Wolności, Maciejów*
   - Si Maciejów aparece como *suburbio/aldea (clasificación 20)*, es una división administrativa más pequeña de otra ciudad.

**Importante:** Tenga cuidado al seleccionar los resultados de la búsqueda, ya que pueden existir ciudades con nombres similares en diferentes regiones o países.


## Búsqueda de direcciones en EE. UU. y datos TIGER {#us-address-search-and-tiger-data}

OsmAnd utiliza datos de OpenStreetMap para las búsquedas de direcciones, con fuentes de datos adicionales como **TIGER (Topologically Integrated Geographic Encoding and Referencing System)** de la Oficina del Censo de EE. UU. Este conjunto de datos se basa en rangos y no contiene números de casa precisos. Algunas direcciones pueden faltar o ser inexactas.

Resolución de problemas con direcciones de EE. UU.:

1. La dirección introducida se **divide en componentes**: `[Número de casa] [Nombre de la calle]`, `[Ciudad]`, `[Estado]`, `[Código postal]`

2. El sistema **primero comprueba OSM** para una coincidencia exacta con números de casa y calles.

3. Si **no se encuentra ninguna coincidencia** en OSM, el sistema busca en los datos TIGER, que incluyen:
    - Nombres de calles y clasificaciones.
    - Rangos de números de casa interpolados.
    - Límites administrativos.

4. Si **falta un número de casa**, OsmAnd estima su ubicación basándose en datos cercanos.

5. **Devolución de resultados**:
    - Si la dirección existe en OSM, se muestra una coincidencia exacta.
    - Si solo hay datos TIGER disponibles, se proporciona un resultado aproximado.
    - Si ninguna de las fuentes contiene la dirección, la búsqueda falla.


#### Tipos de datos de dirección en TIGER {#types-of-address-data-in-tiger}

| Tipo de datos TIGER            | Uso en OsmAnd    |
|----------------------------|--------------------|
| **Nombres de calles**           | Se utiliza para búsquedas basadas en nombres. |
| **Rangos de números de casa**    | Proporciona ubicaciones de direcciones aproximadas. |
| **Códigos postales**              | Ayuda a asociar direcciones con las áreas postales correctas. |
| **Límites administrativos** | Determina las ubicaciones de ciudades y estados. |

<br/>

#### Cuando se encuentra una dirección vs. no se encuentra {#when-an-address-is-found-vs-not-found}

| Escenario de búsqueda     | Resultado en OsmAnd     |
|---------------------|----------------------|
| La dirección existe en OSM con número de casa y calle | ✅ Coincidencia exacta |
| La dirección existe en TIGER pero carece de números de casa | ⚠️ Coincidencia aproximada mediante interpolación |
| La dirección existe en TIGER pero contiene datos incorrectos | ⚠️ Coincidencia parcial con errores |
| La dirección falta tanto en OSM como en TIGER | ❌ Sin resultado |


#### Limitaciones de los datos TIGER en OsmAnd {#limitations-of-tiger-data-in-osmand}

Varios factores afectan la precisión de las búsquedas de direcciones en el sistema basado en TIGER:

- **Faltan números de casa**. Muchas direcciones en TIGER se basan en la **interpolación**, lo que lleva a ubicaciones aproximadas.

- **Nombres de calles desactualizados**. Los nombres de carreteras en TIGER pueden no reflejar las convenciones de nomenclatura actuales en OSM.

- **Discrepancias en los códigos postales**. Los límites en TIGER pueden ser incorrectos, lo que provoca asignaciones de códigos postales incorrectas.