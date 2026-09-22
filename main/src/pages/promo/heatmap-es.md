---
title: OsmAnd Heatmap — por dónde se mueve la gente de verdad, en bici, a pie o en coche
---

import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';

![Logo](@site/static/img/promo/logo_osmand_black.png)

# OsmAnd Heatmap: explora millones de trazas GPS reales

**OsmAnd Heatmap** es una nueva herramienta web que muestra por dónde se mueve la gente realmente: a pie, en bici, en coche y más. Se construye a partir de las **trazas GPS públicas de OpenStreetMap**: cada traza subida por los contribuidores de OSM se cuenta por celda del mapa, por actividad y por mes de subida, y se dibuja como un mapa de calor. Cuanto más brillante es la línea, más trazas pasan por ese punto.

Está construida íntegramente sobre datos abiertos, y te permite ver cada traza que hay detrás de la imagen.

La herramienta está actualmente en **pruebas**: [test.osmand.net/map/prototypes/heatmap.html](https://test.osmand.net/map/prototypes/heatmap.html)

![OsmAnd Heatmap alrededor de Cracovia](@site/static/img/promo/heatmap/overview.webp)

:::note Qué contiene
Hay indexadas más de **8,3 millones** de trazas GPX de OSM. Unas **6,7 millones** se muestran por defecto; el resto son trazas muy cortas, dispersas o ilegibles que permanecen ocultas hasta que activas el grupo *Ignored*. Las trazas se agrupan por actividad: coche, ciclismo (carretera, MTB, gravel, e-bike…), a pie (senderismo, correr, caminar…), moto, deportes de invierno, deportes acuáticos, deportes aéreos y otros.
:::

_________________

## La interfaz

El mapa ocupa toda la pantalla y el panel izquierdo tiene cuatro secciones. Las teselas se cargan una sola vez; todos los filtros de abajo se aplican al instante en tu navegador.

### Display

Cómo se ve el mapa de calor.

![Ajustes de Display](@site/static/img/promo/heatmap/display.webp)

- **Algorithm** — *Smooth (Gaussian)* dibuja cintas suaves, *Sharp thin lines* mantiene las líneas nítidas a poco zoom, *Raw cells* muestra la cuadrícula subyacente.
- **Colours** — cuatro paletas: *Vivid* para el mapa claro, *Turbo*, *Hot* y *Blue* para el mapa oscuro.
- **Width** y **Glow** de las líneas.
- **Scale** — *Equalized* reparte los colores de forma uniforme entre las trazas visibles (así 1, 2 y 3 trazas tienen colores distintos), *Log* es la escala logarítmica clásica. Con **Auto** activado la escala se adapta al área visible; desactívalo y fija tu propio **max**.
- **Opacity** de la capa de calor y el estilo del **Map** de fondo: *Grey*, *Dark* o *Colour*.

### Data filter

Qué trazas se cuentan.

![Filtro de datos](@site/static/img/promo/heatmap/filter.webp)

- **OSM upload month** — dos deslizadores limitan el rango de fechas: solo se dibujan las trazas subidas a OpenStreetMap en ese periodo. El rango completo empieza en 2005.
- **Hide cells under N tracks** — el número mínimo de trazas necesario para dibujar una línea. Con **1** se ve cada traza individual; con **5** solo aparecen los lugares donde se superponen al menos cinco trazas: las rutas populares destacan y el ruido desaparece.

### Activities

![Actividades](@site/static/img/promo/heatmap/activities.webp)

Cada grupo de actividad tiene una casilla y un recuento de trazas. Despliega un grupo para elegir actividades concretas, por ejemplo solo *Mountain biking* dentro de *Cycling*. Los botones rápidos **All**, **None**, **Foot + cycling** y **No motor** cambian las combinaciones habituales con un clic. El grupo *Ignored* (trazas cortas, dispersas, ilegibles o sin tiempos) está desactivado por defecto.

### Review tracks

![Revisar trazas](@site/static/img/promo/heatmap/review.webp)

**Para dejar una valoración, inicia sesión primero** con tu cuenta de OsmAnd en [test.osmand.net/map/account](https://test.osmand.net/map/account) y vuelve al mapa de calor. Para ver las trazas no hace falta cuenta.

El mapa de calor no es solo una imagen: puedes llegar a las trazas que hay detrás. Acerca el zoom a **16 o más** y haz clic en una línea del mapa: el panel lista las trazas que pasan bajo tu clic. Elige una para verla en el mapa con sus detalles, descargar el archivo GPX original o dejar una valoración. Cualquiera puede ver las trazas y sus valoraciones.

### Data source

![Fuente de datos](@site/static/img/promo/heatmap/datasource.webp)

Cuántas trazas coinciden con el filtro actual, cuándo se generaron los datos y cómo se calculan los colores. Cada usuario de OSM se cuenta como máximo una vez por celda, actividad y mes, así que un solo usuario muy activo no puede teñir una región entera.

_________________

## Ejemplo: senderos de bicicleta de montaña en Alta Austria

Busquemos las rutas de MTB alrededor de Kallham, Austria (48,38° N, 13,60° E) recorridas en los últimos cinco años.

**1. Elige la actividad.** Pulsa **None**, despliega **Cycling** y marca **Mountain biking**.

**2. Fija el periodo.** Mueve el deslizador izquierdo de fecha a 2021-09: las trazas más antiguas no hacen falta.

**3. Fija la densidad.** Escribe **3** en *Hide cells under … tracks*: solo quedan los senderos recorridos por al menos tres personas.

![Filtro MTB](@site/static/img/promo/heatmap/example-filter.webp)

El mapa muestra ahora la red de senderos que los ciclistas de montaña usan de verdad:

![Mapa de calor MTB cerca de Kallham](@site/static/img/promo/heatmap/example-filter-map.webp)

**4. Acerca el zoom y haz clic en un sendero.** Abre [este punto a zoom 16](https://test.osmand.net/map/prototypes/heatmap.html#16/48.3388/13.6612) y haz clic en una de las líneas.

![Zoom 16](@site/static/img/promo/heatmap/example-zoom16.webp)

La sección **Review tracks** lista las trazas bajo el clic, cada una con su actividad, nombre de archivo, longitud, fecha y distancia al punto:

![Trazas bajo el clic](@site/static/img/promo/heatmap/example-tracks-list.webp)

**5. Selecciona una traza.** Haz clic en un elemento de la lista (o en la línea del mapa): la traza se resalta en el mapa y se abre su ficha: enlace a la traza en OSM, actividad, longitud, fecha, etiquetas y descripción. **Download GPX** te da el archivo original de OpenStreetMap con tiempo y altitud.

![Traza seleccionada](@site/static/img/promo/heatmap/example-track-selected.webp)

**6. Deja una valoración.** Elige un veredicto — *Correct*, *Wrong activity*, *Bad quality*, *Wrong line*, *Simulated* o *Not a track* —, indica opcionalmente la actividad correcta y un comentario, y pulsa **Send review**.

<table class="blogimage">
  <tr>
    <td><img src={require('@site/static/img/promo/heatmap/example-verdict.webp').default} alt="Veredicto"/></td>
    <td><img src={require('@site/static/img/promo/heatmap/example-saved.webp').default} alt="Valoración guardada"/></td>
  </tr>
</table>

Tu veredicto se guarda y se muestra junto a la traza en la lista. Las valoraciones nos ayudan a mejorar la clasificación de actividades y a limpiar los datos.

:::tip Inicia sesión para enviar valoraciones
Las valoraciones van ligadas a tu cuenta de **OsmAnd Cloud**. Antes de enviar una, activa tu cuenta en el servidor de pruebas en [test.osmand.net/map/account](https://test.osmand.net/map/account) — inicia sesión con el mismo correo que usas para OsmAnd Cloud en la app — y vuelve al mapa de calor. Para ver trazas y valoraciones no hace falta cuenta.
:::

_________________

## Consejos

- La URL conserva la posición del mapa (`#zoom/lat/lon`), así que puedes compartir un enlace a cualquier lugar.
- Los ajustes de Display se recuerdan en tu navegador; los filtros se reinician al recargar la página.
- Para el aspecto clásico de mapa de calor usa el mapa *Dark* con la paleta *Hot* o *Blue*.
- En una calle concurrida pueden superponerse miles de trazas; la lista muestra las 60 más cercanas a tu clic.

## Cuéntanos qué opinas

El mapa de calor es un prototipo y tu opinión decide hacia dónde va.

- **Encuesta de 2 minutos** — cómo lo usas y qué falta: [formulario de opinión sobre el Heatmap](https://docs.google.com/forms/d/e/1FAIpQLSdCoeb5zfARGb7fBoFPFBviY-pH-PS53NsvnNAYaessiTClRQ/viewform)
- **Valora las trazas** — acerca el zoom, haz clic en un sendero que conozcas y envía un veredicto. Lleva unos segundos y mejora los datos directamente (inicia sesión antes con tu cuenta de OsmAnd Cloud en [test.osmand.net/map/account](https://test.osmand.net/map/account)).

_________________

<LinksSocial/>
<LinksTelegram/>
