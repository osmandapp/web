---
source-hash: b83a46b082181d9f4c5b16b74c868c131e880e2aad3256067a77098bd5c9ae01
sidebar_position: 3
---

# Pistas KML - .kml, .km {#kml-tracks---kml-km}

En Google Earth (GE) puedes añadir tus propias marcas de posición en el mapa y agruparlas en una carpeta. Desde GE puedes guardar la carpeta en formato KML. Si tienes un formato diferente, puedes usar QGIS u otro software de código abierto para convertirlo a formato KML. Quizás puedas convertirlo directamente a OSM. Puedes usar cualquier formato que contenga tus PDI, si puedes convertirlo a formato OSM. Puedes formatear KML a GPX [aquí](https://kml2gpx.com/).

## Soporte nativo {#native-support}
OsmAnd no es compatible con KML de forma nativa, pero OsmAnd puede importar algunos de ellos. Durante el proceso de importación, el archivo se transformará en GPX y luego se tratará como [OsmAnd GPX](osmand-gpx).

## Conversión de KML (u otros formatos) al formato OSM {#converting-kml-or-other-formats-into-the-osm-format}

Para realizar esta tarea, necesitamos usar gpsbabel. Es muy útil para convertir puntos de referencia, pistas y rutas entre receptores GPS populares y programas de mapeo. La sintaxis es muy simple, y GPS Babel tiene una interfaz para crear la sintaxis por ti:

```
$ gpsbabel -i kml -f my_places.kml -o osm,tagnd="tourism:museum",​created_by -F my_places.osm
```

El archivo generado se ve así:

```
<?xml version='1.0' encoding='UTF-8'?>
<osm version='0.5' generator='GPSBabel-1.4.0'>
  <node id='-1' visible='true' lat='41.890121' lon='12.492265'>
    <tag k='name' v='place01'/>
    <tag k='note' v='place01'/>
    <tag k='tourism' v='museum'/>
  </node>
  <node id='-2' visible='true' lat='41.892241' lon='12.489031'>>
    <tag k='name' v='place02'/>
    <tag k='note' v='place02'/>
    <tag k='tourism' v='museum'/>
  </node>
</osm>
```

Todos los puntos dentro del archivo KML se convierten en puntos OSM, asignándoles algunas propiedades como la categoría de turismo y el tipo de museo. La opción `created_by=` con valor faltante significa que las propiedades serán ignoradas. Si tu PDI pertenece a diferentes categorías, te sugiero que crees múltiples archivos OSM y crees archivos OBF de OsmAnd y los fusiones más tarde con OsmAndMapCreator, o que crees múltiples archivos OBF.

## Conversión del formato OSM al formato OBF {#converting-osm-format-into-obf-format}

Ahora estás listo para realizar el paso final. La conversión se realizará utilizando OsmAndMapCreator. Descarga, descomprime y ejecuta este programa.
- Deselecciona todas las opciones excepto "Build POI Index" como se muestra:
- Selecciona el directorio de trabajo (Archivo/Especificar directorio de trabajo...)
- Carga my_places.osm (Archivo/Seleccionar archivo osm...)

Si todo está correcto, encontrarás My_places.obf en tu carpeta de trabajo. Simplemente sube este archivo a la carpeta de pistas de OsmAnd de tus dispositivos.