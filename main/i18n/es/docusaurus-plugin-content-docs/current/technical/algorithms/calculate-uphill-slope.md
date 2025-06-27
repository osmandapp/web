---
source-hash: 6f725a1fadd0a2c5cd2626f8424f87e2e54b060d0b683fd33a90f9426413a826
sidebar_position: 5
---

# Cálculo de subida / bajada / pendiente {#calculation-of-uphill--downhill--slope}

OsmAnd utiliza diferentes algoritmos para calcular la **pendiente** y la **subida** basándose en los datos de satélite SRTM incrustados en los mapas sin conexión y en las pistas GPX grabadas.

El objetivo principal de calcular la **subida** es proporcionar información relevante sobre la cantidad de **energía extra** que se gasta al subir. Obviamente, esto depende de múltiples factores como el vehículo o el medio de transporte, la superficie, el peso de la persona y otros.
Así, al final, la **subida** debería ser un parámetro a tener en cuenta por el enrutamiento basado en la elevación, para producir un enrutamiento energéticamente eficiente.

El objetivo principal de calcular la **pendiente** es tener una indicación visual de qué carreteras empinadas deben evitarse.

## Subida / Bajada {#uphill--downhill}

Hay muchos problemas para calcular la **subida** porque no existe un estándar y porque depende del medio de transporte y de muchos otros parámetros, es difícil proporcionar un control razonable al usuario para que no sea demasiado complicado. Normalmente, la subida se compara con otros programas, pero no hay ningún programa que tenga un estándar de oro.

OsmAnd utiliza un algoritmo de 3 pasos:

- Filtrar datos ruidosos.
- Encontrar extremos locales (mínimos y máximos).
- Calcular la suma de las diferencias entre el mínimo y el máximo.

Algunas pistas contienen muchos datos ruidosos que deben filtrarse primero. Por ahora, aplicamos el filtrado a todas las pistas, pero las pistas preparadas, como las construidas con la herramienta Planificar Ruta, la herramienta de Navegación o después de la corrección SRTM, el filtrado no debería tener ningún efecto.

### Filtrar pendiente del 70% {#filter-70-slope}

El filtrado se basa en la búsqueda de **puntos extremos** que son significativamente más altos o más bajos que 1 punto vecino a la izquierda y 1 punto vecino a la derecha en el gráfico.
Esos **puntos extremos** se excluyen de cálculos posteriores. El ```umbral``` es una [pendiente del 70%](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L11) - [código](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L72).

**Ejemplo 1**. (todos los puntos distribuidos por 10m), elevación - [5, 3, 10, 3, 5]. 10 es un punto extremo: porque es 10 > 3 (pendiente del 70%).

**Ejemplo 2**. (todos los puntos distribuidos por 10m), elevación - [5, 3, 10, 13, 15]. 10 no es un punto extremo: porque 10 > 3 pero 10 < 13, por lo que es un pico local.

### Filtrar puntos de salto {#filter-jumping-points}

Los puntos que representan colinas locales ```/\``` se filtran, lo que lleva a un problema: el punto más alto y el más bajo siempre se filtrarán, pero permite lidiar con pistas ruidosas donde la grabación no fue frecuente, por lo que la primera verificación con pendiente extrema no funciona. Referencia al [código](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L49).

**Ejemplo 1**. Elevación - [5, 3, 10, 3, 5] -> [5, 5].

**Ejemplo 2**. Elevación - [5, 6, 10, 7, 5] -> [5, 6, 7, 5].

**Ejemplo 3**. Elevación - [5, 2, 3, 4, 5] -> [5, 3, 4, 5].

### Encontrar extremos {#finding-extremums}

Para encontrar extremos se utiliza el algoritmo [Rames-Dougals-Peucker](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm). No es absolutamente bueno para encontrar exactamente extremos en un gráfico aleatorio, pero en el cálculo de la altitud evita muchos picos pequeños aleatorios que podrían ocurrir durante una subida larga y algunas bajadas cortas imperceptibles en el medio.

El propósito principal del algoritmo es encontrar el número mínimo de líneas rectas que puedan representar el gráfico de altitud. El ```umbral``` es **[7 metros](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationDiffsCalculator.java#L13)**. Así, todos los picos con una diferencia superior a 7 metros se detectarán en superficies planas y no se detectarán si son menores.

Los extremos se muestran en el gráfico como puntos azules con el complemento de desarrollo de OsmAnd activado.

**Ejemplo 1**. Elevación - [0, 0, 10, 0, 0]. El **extremo** es 10.

**Ejemplo 2**. Elevación - [0, 1, 5, 4, -3, -2, -1, 0]. **Ningún extremo** - todos con una diferencia inferior a 7 metros.

### Calcular subida / bajada entre extremos {#calculate-uphill--downhill-between-extremums}

Por ejemplo, si tienes una pista simple que sube y baja, solo tienes 1 máximo en tu camino, por lo que la
```
  Diferencia de elevación inicial = <elevación inicial> - <elevación del extremo>    :
  Diferencia de elevación final = <elevación del extremo> - <elevación final>      : si es positiva - **subida**, si es negativa - **bajada**
```

1. Si *Diferencia de elevación inicial* > 0
  - **subida** = *diferencia de elevación inicial*
  - **bajada** = *diferencia de elevación final*

2. Si *Diferencia de elevación final* > 0
  - **subida** = *diferencia de elevación final*
  - **bajada** = *diferencia de elevación inicial*

Se añadirán más ejemplos.

## Corrección de altitud SRTM {#altitude-srtm-correction}

Hay 2 alternativas que se pueden usar en OsmAnd para obtener la corrección de altitud.

1. Abrir pista en OsmAnd Android y buscar, *Editar pista → Opciones → Corrección de altitud*
1.1 **En línea** procesará la pista a través del servidor y los datos de OsmAnd.
1.2 **Sin conexión** procesará la pista en el dispositivo si se descargan los archivos geotiff 3D.
2. Abrir el sitio web https://osmand.net/map y subir la pista para ver la elevación SRTM.

## Pendiente {#slope}

El gráfico verde se calcula de forma diferente a la subida/bajada y podría tener ligeras variaciones. En teoría, en todos los **extremos**, el gráfico verde debería **cruzar la línea 0**, aunque todos los puntos de pendiente 0 son extremos.

Para calcular la pendiente, todos los datos se dividen en pasos iguales de 20 metros. Para cada punto de esa cuadrícula, se calcula la altitud promedio alrededor del punto (radio de 10 metros). Luego, se calcula la derivada discreta utilizando la [diferencia central finita](https://en.wikipedia.org/wiki/Finite_difference).