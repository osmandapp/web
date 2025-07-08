---
source-hash: e0173be6fa81b710afb1b4b52c4268f63865918a50d504364df4f0d772bf2d39
title: Creación de un polígono de país
versions: '*'
---
**_Este artículo necesita ser revisado_**

Este artículo describe cómo crear un polígono para un país que falta en geofabrik.de y cómo añadir este polígono al servidor de generación de mapas de OsmAnd.

## Introducción {#introduction}

OsmAnd viene con muchos mapas para muchos países. La mayoría de los mapas se crean a partir de mapas de "datos brutos" descargados de [geofabrik.de](http://download.geofabrik.de). Geofabrik suministra estos mapas de datos brutos de forma gratuita a todo el mundo y ofrecen servicios y productos (comerciales) basados en estos mapas.

Geofabrik.de tiene la estrategia de entregar mapas para los países que son solicitados por un mayor número de usuarios o por sus clientes. Esto significa que algunos mapas nunca llegan a geofabrik porque simplemente no hay suficientes solicitudes (o ninguna), como algunos países exóticos como las Seychelles o Burundi, etc.

## Proceso del servidor {#server-process}
Debido a esta decisión estratégica de geofabrik, OsmAnd tiene una opción para generar mapas para estos países y para ello se utilizan las herramientas [OsmAndMapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-development.zip) y [osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert). Para OsmAndMapCreator, este es un proceso de tres pasos:
- OsmAndMapCreator necesita un polígono que rodee el límite exterior del país.
- OsmAndMapCreator necesita el "mapa de datos brutos" del siguiente nivel superior que incorpore este país. Para Burundi, significa que OsmAndMapCreator necesita el mapa de África. Para Nordrhein-Westfalen, significa que OsmAndMapCreator necesita el mapa de Alemania.
- [Osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert) creará un mapa de "datos brutos" a partir del polígono extrayendo los datos del mapa del mapa "padre".
- OsmAndMapCreator creará un mapa obf de OsmAnd basado en el mapa intermedio de "datos brutos" generado por osmconvert.

## Acciones necesarias {#necessary-actions}
Dependiendo de la complejidad del polígono (generado), esta cadena completa de acciones puede tardar de 10 minutos a 2 horas en total.

### 1. Obtener la relación OpenStreetMap de Nominatim {#1-get-the-openstreetmap-relation-from-nominatim}
- Ir a [nominatim.openstreetmap.org](https://nominatim.openstreetmap.org/)
- Rellenar el nombre de su país
- Una vez encontrado, haga clic en el enlace "(detalles)"
- En Detalles, desplácese hasta "OSM: relación " y anote o copie el número de ID de la relación.

### 2. Generar el polígono {#2-generate-the-polygon}
- Ir a [polygons.openstreetmap.fr](http://polygons.openstreetmap.fr/)
- Rellenar (o pegar) el número de ID de "OSM: relación " que recuperó de Nominatim para el país deseado en el campo "Id de relación".
- Esto creará un polígono predeterminado, que consta de 250 a 3500 nodos (NPoints). El polígono en sí se puede encontrar en la columna "poly".
- En caso de más de 350 nodos, deberá simplificar el polígono. Cuanto más simple sea el polígono, más rápido se podrá crear el mapa del país (por supuesto, dependiendo del contenido).

### 3. Simplificar el polígono {#3-simplify-the-polygon}
El número de puntos de nodo (NPoints) debe ser lo más bajo posible para la creación más rápida posible del mapa por OsmAndMapCreator. Como se mencionó: en caso de más de 350 puntos de nodo, intente reducirlos simplificando el polígono.
- En caso de más de 350 nodos, intente reducirlos "jugando" con la variable X (en mi experiencia, las otras no importan realmente).
- A veces se obtienen grandes resultados (90 NPoints, 200 NPoints, 270 NPoints) y entonces se termina con este paso. A veces, simplemente no se puede bajar de 450 NPoints o así. Entonces, es necesario aplicar pasos manuales adicionales.
- Guarde su polígono final en un archivo. Use el nombre predeterminado correcto para él, como france.poly. Use caracteres en minúscula.

### 4. Modificación y simplificación adicionales del polígono {#4-further-modification-and-simplification-of-the-polygon}
- Abra JOSM (descárguelo si es necesario) y abra el archivo de polígono que creó (¿hizo una copia/copia de seguridad del polígono original que guardó?).
- Agregue un fondo desde el menú "Imágenes" y seleccione el fondo predeterminado "OpenStreetMap (Mapnik)".
- Elimine manualmente los puntos de nodo donde sea posible. \*Nota:\* Mantenga el polígono lo más cerca posible del borde. Necesita cierta superposición, pero intente mantenerla por debajo de 2-5 kilómetros. La superposición en los países se generará dos veces para cada país. Menos superposición significa menos tiempo de renderizado y menos errores de renderizado. En las costas y alrededor de las islas, intente mantener más distancia (20 kilómetros). Esto es ampliamente aceptado y el mar está "vacío" de todos modos.
- Cuando haya hecho lo mejor que pueda, puede guardar el polígono actualizado y corregido. Como se dijo: intente obtener la menor cantidad de puntos de nodo posible, pero a veces la frontera de un país es tan complicada que simplemente necesita más puntos de nodo para describirla y para mantener el polígono lo más cerca posible de la frontera: que así sea.
- **No suba el polígono a OSM**. JOSM le pedirá que suba su trabajo a OpenStreetMap. No haga esto para estos polígonos a menos que sepa exactamente lo que hace. Casi todos los países del mundo ya están perfectamente cubiertos en OpenStreetMap (de lo contrario, nominatim no podría darle los detalles sobre el país, y polygons.openstreetmap.fr no podría generar el polígono basado en la ID de relación de OSM).

### 5. Añadir el polígono al servidor de OsmAnd {#5-adding-the-polygon-to-the-osmand-server}

Para poder hacer esto, debe registrarse como usuario.

Para que la generación de mapas sea posible, se requieren dos pasos:
- Añadir el polígono a la sección de datos del mapa
- Añadir el país al archivo de datos que se utiliza para generar los mapas obf de OsmAnd.

Añadir el polígono a la sección de datos del mapa
- Vaya a la dirección web del servidor de desarrollo de OsmAnd en [https://github.com/osmandapp/](https://github.com/osmandapp/ "https://github.com/osmandapp/")
- Seleccione la sección OsmAnd-misc.
- Seleccione "fork" para crear su propio repositorio personal.
- Cree un nuevo archivo y copie sus datos de polígono dentro. Guarde el archivo.
- Cree una solicitud de extracción.

Añadir la creación de mapas a la lista de lotes
- Vaya a la dirección web del servidor de desarrollo de OsmAnd en [github.com/osmandapp](https://github.com/osmandapp/)
- Seleccione la sección OsmAnd-tools.
- Seleccione "fork" para crear su propio repositorio personal.
- En su repositorio personal, vaya a la carpeta obf-generation/regions.
- Seleccione el archivo indexes.xml y haga clic en editar.
- Añada su país en la ubicación relevante y guarde el archivo.
- Cree una solicitud de extracción.

## Creación de sus propios mapas personales a partir de un polígono {#creating-your-own-personal-maps-from-a-poly}

Puede crear, por ejemplo, polígonos de países, condados/provincias/estados, regiones y ciudades.

Supongamos que su hija va a París por un par de días con una amiga. No le interesa la navegación, caminar o andar en bicicleta (a menos que sea absolutamente necesario), pero quiere saber dónde está, a dónde ir y dónde encontrar los lugares interesantes (PDI). Además, tiene un teléfono pequeño (CPU de gama baja, poca memoria) y una tarjeta SD pequeña (llena de música). Por lo tanto, el mapa debe ser lo más pequeño posible: tanto para el almacenamiento como para el rendimiento. Por supuesto, puede descargar el mapa de france\_ile-de-france.obf que contiene París, pero también puede generar un mapa de París "hecho a medida".
- Deje que su hija descargue OsmAnd, o mejor aún: que compre OsmAnd+
- Obtenga la ID de relación de OSM para París de Nominatim.
- Obtenga el polígono (simplificado) para la ID de París de polygons.openstreetmap.fr
- descargue o compile [osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert)
- descargue el mapa de "datos brutos" de Île-de-France de geofabrik.de
- cree un mapa de datos brutos de París a partir del mapa de Île-de-France y el polígono de París como:
<pre>
$ osmconvert ile-de-france.osm.pbf -B=paris.poly --out-pbf > Paris.osm.pbf
</pre>
- Descargue la aplicación OsmAndMapCreator de [download.osmand.net/latest-night-build/](http://download.osmand.net/latest-night-build/ "https://download.osmand.net/latest-night-build/")
- Cree su mapa obf de OsmAnd a partir de los datos del mapa Paris.osm.pbf usando OsmAndMapCreator.