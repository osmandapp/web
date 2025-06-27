---
source-hash: 0ece8e7a1a25127672614cdf13cd0688a67a4cbb64515cc18d60c278f7999862
title: Crear mapas ráster y vectoriales sin conexión
versions: '*'
intro: Con OsmAndMapCreator hay muchas maneras de crear y personalizar mapas ráster y vectoriales según tus necesidades.
---

## OsmAndMapCreator {#osmandmapcreator}

[**OsmAndMapCreator**](https://wiki.openstreetmap.org/wiki/OsmAndMapCreator) se puede utilizar para crear tú mismo cualquier mapa compatible con OsmAnd. Puedes descargar la última versión desde el [sitio web](https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). OsmAndMapCreator tiene capacidades de interfaz de usuario para crear mapas ráster y vectoriales. *Para crear un mapa vectorial, necesitarás un archivo OSM (`*.pbf, *.osm.gz, *.osm.bz2`)* y *para crear un archivo de mapa sqlite en línea, necesitarás una `url de mosaico base`*.

### Mapas ráster (sencillo) {#raster-maps-simple}

Una vez que hayas seleccionado los mosaicos de los que deseas crear un mapa en el menú **Fuente de mosaicos** y se hayan cargado correctamente en OsmAndMapCreator, puedes hacer clic derecho en el área que deseas precargar. Después de eso, puedes crear un archivo `.sqlitedb` en **Fuente de mosaicos** → **Crear base de datos sqlite**.

Para crear un mapa vectorial, necesitarás un archivo OSM (*.pbf, *.osm.gz, *.osm.bz2) y para crear un mapa sqlite en línea, necesitarás la URL del mosaico base.

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-download-raster-maps.png').default} alt="Descargar mapas ráster" />

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-create-raster-maps.png').default} alt="Crear mapas sqlitedb" />

### Mapas vectoriales (sencillo) {#vector-maps-simple}

Pasos para crear un mapa vectorial a través de la interfaz de usuario de OsmAndMapCreator:

1. Archivo OSM
    - Descárgalo de [Geofabrik](https://www.geofabrik.de/data/download.html) o una pequeña exportación de [OpenStreetMap](https://www.openstreetmap.org/export#map=19/48.80672/2.13187)
    - Convierte [Shapefile a OSM](https://wiki.openstreetmap.org/wiki/OGR)
    - Genera [OSM XML](https://wiki.openstreetmap.org/wiki/OSM_XML) tú mismo utilizando cualquier utilidad de programación, puedes proceder convirtiéndolo al [Formato OBF](../osmand-file-formats/osmand-obf.md) que OsmAnd puede entender
2. Selecciona las casillas de verificación si deseas producir mapas que incluyan información de dirección / enrutamiento / transporte / datos de mapa
3. Selecciona en **Archivo** → **Crear .obf desde archivo**.
4. Una vez que el proceso se complete, tendrás un archivo `.obf` en el directorio de trabajo.

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-create-vector-maps.png').default} alt="Crear mapas vectoriales" />

Se pueden especificar más parámetros sobre cómo generar mapas vectoriales en el shell `utilities.sh`.

## Mapas vectoriales (script de shell) {#vector-maps-shell-script}

La forma más típica y potente de crear mapas utilizada por los desarrolladores es a través del script de shell `utilities.sh` empaquetado dentro de OsmAndMapCreator. También tiene muchos otros métodos de utilidad para crear algunos mapas personalizados, como el mapa base o el mapa con nombres y límites de regiones (regions.ocbf).

Ejemplo de script:
```
wget -N http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip
wget  https://creator.osmand.net/osm-extract/albania_europe/albania_europe.pbf
unzip OsmAndMapCreator-main.zip -d OsmAndMapCreator
OsmAndMapCreator/utilities.sh generate-poi albania_europe.pbf --chars-build-poi-nameindex=3
```

El script de generación solo toma 1 archivo OSM para procesar a la vez (.pbf, .osm.gz, osm.bz2, .osm) y muchos parámetros opcionales especificados como `--xxxxxx`.

| Comando principal | Descripción |
|---|---|
| `generate-obf` | Genera un obf completo con información de mapa, dirección, PDI, transporte y enrutamiento |
| `generate-obf-no-address` | Genera un obf completo pero sin información de dirección |
| `generate-address` | Genera un mapa solo con información de dirección |
| `generate-poi` | Genera un mapa solo con información de PDI |
| `generate-map` | Genera un mapa solo con información de renderizado de mapa |
| `generate-roads` | Genera un mapa solo con información de enrutamiento |

Todos los parámetros adicionales se pueden encontrar en el código en caso de que no estén documentados correctamente [Main Utilities](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/MainUtilities.java#L219). ¡Todos los parámetros son opcionales!

| Parámetros | Descripción |
|---|---|
| `--add-region-tags` | Ralentiza el proceso de creación de mapas al agregar a cada vía una etiqueta de nombre de región donde se procesó. Solo es necesario para el mapa base mundial o cuando se procesan regiones multinacionales, en todos los demás casos es más fácil tener un nombre adecuado para su archivo, es decir, germany_..., us_.... Si no tiene este parámetro y no lo especifica, es probable que vea insignias de rutas de carreteras / transporte público no localizadas en OsmAnd. |
| `--keep-only-sea-objects` | Elimina objetos que no forman parte del océano / mar, se utiliza para producir mapas náuticos |
| `--ram-process` | Especifica que la creación utilizará la base de datos SQLite en RAM en lugar del disco - [más información](#ram-to-process-maps). |
| `--srtm=<FOLDER>` | Especifica la carpeta con imágenes TIF-DEM, de modo que la información sobre la altura y la pendiente se codificará en las carreteras |
| `--rendering-types=<FILE>` | Ubicación de rendering_types.xml con reglas y etiquetas OSM que deben codificarse en OBF - [más información](#custom-vector-map-tags). |
| `--poi-types=<FILE>` | Ubicación de poi_types.xml con reglas y etiquetas OSM que deben codificarse en OBF para POI - [más información](#custom-vector-map-tags). |
| `--extra-relations=<FILE>` | Archivo OSM con polígonos como Zonas de Bajas Emisiones cuyas etiquetas deben propagarse a las vías. |

**Nota**: La creación de mapas con batch.xml está obsoleta, utilice los métodos de shell mencionados anteriormente y combínelos con descargas / ciclos for utilizando las capacidades estándar de los scripts de shell.

### RAM para procesar mapas {#ram-to-process-maps}

La creación de mapas consume mucha memoria y es intensiva en E/S. En otras palabras: ¡lleva mucho tiempo y podría quedarse sin memoria! Por favor, compruebe primero la generación en mapas pequeños.
Para dar más memoria a la JVM, puede declarar la variable de entorno JAVA_OPTS.
```
export JAVA_OPTS="-Xms256M -Xmx6400M"
OsmAndMapCreator/utilities.sh generate-obf ....
```

Qué puedes hacer para mejorar el rendimiento:

- Utilizar discos SSD.
- Utilizar varios discos.
- Utilizar procesamiento "en memoria".
Si desea evitar el uso de espacio en disco y usar solo RAM para acelerar el proceso, especifique el parámetro `--ram-process`. Este procesamiento "en memoria" acelerará la generación del mapa entre un 10 y un 50%, pero requiere mucha memoria. Del 10% al 50% depende del tamaño del mapa. Los mapas más pequeños se benefician menos del procesamiento en memoria que los mapas más grandes, ya que el acceso al disco para la lectura inicial y la escritura final del mapa juega un papel más importante, mientras que los mapas más grandes requieren más "cálculo".

En el procesamiento normal "en disco", se crea un archivo *nodes.tmp.odb* a partir de su archivo *.osm* o *.osm.pbf*. Este archivo *nodes.tmp.odb* es un archivo de base de datos sqlite y es aproximadamente de 15 a 25 veces más grande que el archivo *.osm.pbf* original que descargó de [geofabrik.de](http://download.geofabrik.de/). Entonces, si su archivo *.osm.pbf* original es de 300 MB, su archivo *nodes.tmp.odb* será de 5 GB a 6 GB. Tenga en cuenta que los mapas más pequeños estarán alrededor del factor 15x, mientras que los mapas grandes (>350 MB) terminarán con un aumento de espacio de 20x a 25x.

Con el procesamiento "en memoria", este archivo *nodes.tmp.odb* se creará en su memoria de trabajo. Necesitará "el tamaño de nodes.tmp.odb" + 20-25%. Tenga en cuenta que no necesita aumentar el parámetro `-Xmx` porque SQLite en memoria no ocupará la memoria de la JVM y solo usará la memoria operativa nativa.

Ejemplo: para un *.osm.pbf* de 250 MB, se generará un archivo *nodes.tmp.odb* de ~4.5 GB.

### Mapa vectorial personalizado (etiquetas) {#custom-vector-map-tags}

La representación y la búsqueda de PDI de OsmAnd se basan en la información escrita en [OBF](../osmand-file-formats/osmand-obf.md). Tiene una estructura diferente a otros formatos OSM y está optimizada para el uso móvil. Puedes inspeccionar el contenido usando el [Inspector binario](../map-creation/how-to-inspect-an-obf.md). Las 3 partes más importantes del archivo OBF son:

- **Sección de mapa** utilizada para la representación del mapa definida por [Tipos de representación](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml)
- **Sección de PDI** utilizada para la búsqueda de PDI e información de objetos definida por [Tipos de PDI](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/poi_types.xml)
- **Sección de enrutamiento** utilizada para el enrutamiento definida por [Tipos de enrutamiento](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml) - el mismo archivo que los tipos de representación pero tiene su propia sección `<category name="routing"> - routing_type`.

`rendering_types.xml` y `poi_types.xml` podrían ser sobrescritos durante el proceso de creación del mapa en la configuración de la interfaz de usuario de OsmAndMapCreator o como parámetros de línea de comandos `--rendering-types=<path>`, `--poi-types==<path>` para `utilities.sh generate-obf` (empaquetado con OsmAndMapCreator).

- El tipo de objeto de mapa principal (`<type tag="abandoned:highway" value="track" minzoom="13"/>`) se registra por entidad OSM (nodo o vía o multipolígono). Puede haber muchos tipos principales registrados por 1 entidad (es decir, carretera + tranvía + ruta de autobús), la etiqueta `order` ordenará los tipos dentro de la entidad.
- El tipo de objeto de mapa adicional (`<type tag="service" value="driveway" minzoom="13" additional="true"/>`) es información adicional adjunta para la entidad OSM, por lo que en caso de que la entidad OSM no esté registrada con el tipo principal, no se almacenará dentro del OBF. Por lo general, almacena información para mostrar características adicionales como el color, la suavidad.
- El tipo de objeto de mapa de texto (`<type tag="int_ref" additional="text" minzoom="1" order="32"/>`), almacena información de texto sobre el objeto para que pueda mostrarse más tarde en el mapa.
- `entity_convert` representa scripts de transformación de etiquetas simples (`<entity_convert pattern="tag_transform" from_tag="bridge" if_tag1="highway" if_value1="proposed" routing="no"/>`). A menudo se utiliza para combinar etiquetas en tipos específicos, por lo que es más fácil de mostrar con un estilo de renderizado personalizado. También permite realizar transformaciones de etiquetas específicas de la región y permite que diferentes características se representen por país.
- Propagación de etiquetas de relación. OsmAnd no indexa objetos de relación (excepto multipolígonos, almacenados como objetos de área), pero permite propagar, empujar etiquetas de la relación a los miembros. Obviamente, un miembro podría tener múltiples relaciones padre y los conflictos de etiquetas son posibles. OsmAnd admite 3 formas de lidiar con los conflictos:
  - combinar todas las etiquetas como una línea larga separada por comas (bueno para renderizar nombres de rutas de autobús como una cadena larga en la vía - `nameTags`, `namePrefix`).
  - ordenar los valores y mantener el valor más alto (bueno para renderizar rutas locales vs internacionales - `relationGroupSort`, `additionalTags`, `additionalNamePrefix`).
  - genera etiquetas únicas para cada relación (no se usa por ahora, pero almacena información sin pérdida - `relationGroupNameTags`, `relationGroupAdditionalTags`, `relationGroupPrefix`). **Más información** se puede encontrar en [Tipos de renderizado](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml).

**Leer más**: normalmente los mapas vectoriales personalizados se combinan con un [estilo de renderizado personalizado](../osmand-file-formats/osmand-rendering-style.md).

## Mapas ráster (avanzado) {#raster-maps-advanced}

OSM es una gran base de datos de mapas, pero no siempre tiene la información que necesitas (por ejemplo, sobre desiertos). A veces puedes obtener la información que necesitas de otras fuentes, como mapas en papel o imágenes de satélite.

Existen programas especiales para la preparación, conversión y calibración de cualquier mapa fuente (mapas en formato de imagen, formato pdf, mapas ráster en línea) en mapas en línea de OsmAnd.

A continuación, se describen algunos de ellos.

### MOBAC {#mobac}

Mobile Atlas Creator (MOBAC) es un programa de código abierto (GPL) para crear atlas sin conexión. Mobile Atlas Creator puede usar un gran número de mapas en línea diferentes, como OpenStreetMap y otros proveedores de mapas, como fuente para crear un atlas sin conexión.

Simplemente [descarga](https://mobac.sourceforge.io/) el programa y luego ejecútalo.

En el diálogo de elección de formato, selecciona *OsmAnd SQLite* o *OsmAnd tile storage*. SQLite es un solo archivo con el área seleccionada, mientras que los mosaicos son piezas separadas del mapa recopiladas en tu dispositivo. SQLite a menudo resulta más conveniente, ya que se almacena en un solo lugar y ocupa menos espacio de almacenamiento.

Elige la fuente del mapa, los niveles de zoom y otras características. Selecciona un área y luego elige el menú *Selección* -> *Añadir selección*.

Después de eso, puedes crear tu archivo SQLite: 'Atlas' -> 'Crear Atlas'.

### MAPC2MAPC {#mapc2mapc}

[MAPC2MAPC](https://www.the-thorns.org.uk/mapping/) es un programa para Windows que manipula mapas digitales y los convierte entre diferentes plataformas y software.

Por ejemplo, puedes convertir y calibrar cualquier formato de imagen y mapas PDF a mapas en línea de OsmAnd.

[Tutorial en video](https://www.youtube.com/watch?v=Y_fekLfcUOc) sobre el uso del programa.

### SASPlanet {#sasplanet}

SASPlanet es un software de navegación gratuito y de código abierto con la capacidad de ver y descargar mapas e imágenes satelitales de la Tierra de varios servicios en línea a mapas en línea de OsmAnd.

[Descarga](http://www.sasgis.org/download/) el programa, [guía en inglés](https://www.evernote.com/shard/s100/client/snv?noteGuid=e659886a-096c-46b4-8280-b57b77373847&noteKey=dac8148d9a74ed77&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs100%2Fsh%2Fe659886a-096c-46b4-8280-b57b77373847%2Fdac8148d9a74ed77&title=How%2Bto%2Buse%2BSAS.Planet.%2BEnglish%2Bguideline).

### PDF o TIFF geolocalizado {#geolocated-pdf-or-tiff}

Cómo convertir archivos pdf/tif/tiff geolocalizados a [OsmAnd SQLitedb](../osmand-file-formats/osmand-sqlite.md) en Windows.
La georreferenciación de archivos tif/tiff y pdf se puede realizar de forma bastante sencilla en QGIS.

1. **Instalar y ejecutar OSGeo4W**

[OSGeo4W](https://trac.osgeo.org/osgeo4w/) es una distribución binaria de un amplio conjunto de software geoespacial de código abierto para Windows. Incluye QGIS, GDAL/OGR, GRASS, así como muchos otros paquetes (más de 150). Descargue y ejecute el instalador de red de [OSGeo4W](https://trac.osgeo.org/osgeo4w/).

Ahora, desde el menú Inicio, ejecute OSGeo4W Shell. Debería iniciarse en el directorio predeterminado _C:\OSGeo4W_. Navegue a su carpeta de trabajo (o simplemente puede usar _C:\OSGeo4W_ para este propósito).

2. **Convertir tif/pdf a mbtiles**

Para convertir _tif/pdf_ a _mbtiles_ ejecute (reemplazando los nombres de archivo _tif/pdf_ y _mbtiles_ donde sea necesario):

&nbsp;<i>gdal_translate -co "ZLEVEL=9" -of mbtiles map_1.tif map_1.mbtiles --config gdal_pdf_dpi 600</i>&nbsp;

&nbsp;<i>gdaladdo -r nearest map_1.mbtiles</i>&nbsp;

El primer comando permite a _GDAL_ determinar el zoom máximo que puede generar en función de la resolución de la imagen. Y convierte el archivo _tif/pdf_ a _mbtiles_ con el DPI especificado. Siéntase libre de experimentar con esta configuración, pero tenga cuidado ya que los valores altos de DPI harán que el proceso de conversión sea muy largo y el tamaño del archivo resultante muy grande.

El segundo comando permite a _GDAL_ averiguar y generar los niveles de zoom menores basándose en el nivel de zoom máximo que ya existe. No es raro que estos dos comandos tarden un tiempo en completarse.

3. **Instalar Python desde Microsoft Store**

Probablemente la forma más fácil sea ir a [Microsoft Store](https://apps.microsoft.com/detail/9nj46sx7x90p).

Si, al intentar ejecutar el script de Python en el siguiente paso, ocurre este error:

_Traceback (most recent call last):_

_File ```<console>```, line 1, in ```<module>```_

_ImportError: No module named PIL_

Entonces, en PowerShell, ejecute el siguiente comando:

_pip install Pillow_

4. **Convertir el formato mbtiles a sqlitedb (adecuado para OsmAnd y RMaps)**

Encontrarás el script de Python _mbtiles2osmand.py_ en [GitHub](https://github.com/tarwirdur/mbtiles2osmand). Descárgalo en tu carpeta de trabajo y ejecuta el Símbolo del sistema o PowerShell.

**Uso:**

&nbsp;<i>python3_ mbtiles2osmand.py [-h] [-f] [--jpg JPEG_QUALITY] input output</i>&nbsp;

&nbsp;<u>Argumentos posicionales:</u>&nbsp;

**input**&nbsp;&nbsp;&nbsp;&nbsp; archivo de entrada

**output**&nbsp;&nbsp;&nbsp;&nbsp; archivo de salida

&nbsp;<u>Argumentos opcionales:</u>&nbsp;

**-h, --help** &nbsp;&nbsp;&nbsp;&nbsp;mostrar este mensaje de ayuda y salir

**-f, -force** &nbsp;&nbsp;&nbsp;&nbsp;sobrescribir el archivo de salida si existe

**--jpg JPEG_QUALITY** &nbsp;&nbsp;&nbsp;&nbsp;convertir mosaicos a JPEG con la calidad especificada

**Ejemplos:**

Simple:

&nbsp;<i>python3 mbtiles2osmand.py _input.mbtiles output.sqlitedb_</i>&nbsp;

Convertir mosaicos a jpeg con compresión:

&nbsp;<i>python3 mbtiles2osmand.py _--jpg 75 input.mbtiles output.sqlitedb_</i>&nbsp;

5. **Copiar el archivo .sqlitedb a OsmAnd**

Ahora deberías tener un archivo .sqlitedb listo en tu carpeta de trabajo. Cópialo a la carpeta OsmAnd apropiada y úsalo como principal, subyacente o superpuesto. Consulta la [Guía del usuario](../../user/map/raster-maps.md) para más detalles. ¡Hecho!

6. **(OPCIONAL) Unir varios archivos osmand en un solo archivo**

Si lo necesitas, puedes encontrar el archivo de script unite_osmand.py en [GitHub](https://github.com/tarwirdur/mbtiles2osmand). De nuevo, descárgalo en tu carpeta de trabajo y ejecuta el Símbolo del sistema o PowerShell.

**Uso:**

&nbsp;<i>python3 unite_osmand.py [-h] [-f] input [input ...] output</i>&nbsp;

<u>Argumentos posicionales:</u>

**input** &nbsp;&nbsp;&nbsp;&nbsp; archivos de entrada. Si varios archivos contienen un mosaico con las mismas coordenadas, se utilizará el mosaico del primer archivo (de la lista de argumentos)

**output** &nbsp;&nbsp;&nbsp;&nbsp;archivo de salida

<u>Argumentos opcionales:</u>

**-h, --help** &nbsp;&nbsp;&nbsp;&nbsp;mostrar este mensaje de ayuda y salir

**-f, -force** &nbsp;&nbsp;&nbsp;&nbsp;sobrescribir el archivo de salida si existe

7. **EXTRA: Convertir un solo GeoPDF a GeoTIFF**

Si, por cualquier motivo, deseas convertir un solo _geopdf_ a _geotiff_, usa el comando _gdal_translate_ e ingresa tus propios parámetros donde se indique con < >. Puedes usar _gdal_translate_ con o sin parámetros opcionales. Puede tardar mucho tiempo en procesarse y el tiff resultante puede ser realmente grande, especialmente al incluir la ortoimagen y el terreno sombreado. Por lo tanto, podría ser una buena idea excluir algunas de las capas PDF (ver el segundo ejemplo).

**Uso:**

&nbsp;<i>gdal_translate ```<Nombre de archivo GeoPDF> <Nombre de archivo Geotiff de salida>``` -of gtiff --config
gdal_pdf_layers_off “```<nombre de capa pdf 1>,<nombre de capa pdf 2>,<nombre de capa pdf 3>```” --config gdal_pdf_dpi ```<dpi de salida>``` </i>&nbsp;

**Ejemplos:**

Convertir pdf con todas sus capas a un geotiff con DPI predeterminado:

&nbsp;<i>gdal_translate geo_sample_map.pdf output_sample_map.tif -of gtiff</i>&nbsp;

Excluir varias capas de la conversión mediante el parámetro _gdal_pdf_layers_off_ seguido de una lista de nombres de capas separados por comas. El archivo de salida es un geotiff, con 600 DPI especificados:

&nbsp;<i>gdal_translate geo_sample_map.pdf output_sample_map.tif -of gtiff --config gdal_pdf_layers_off “Map_Collar, Map_Frame.Projections_and_Grids, Map_Frame.Terrain.Shaded_Relief, Images.Orthoimage” --config gdal_pdf_dpi 600</i>&nbsp;

8. **Fuentes:**

- [Gdal2mbtiles](https://github.com/tarwirdur/mbtiles2osmandhttps://gist.github.com/jbaranski/0073f7b98bdf1f64f49988853daed67bhttps://github.com/ecometrica/gdal2mbtiles) (solo como referencia),
- [Cómo convertir geopdf a geotiff usando GDAL](https://opengislab.com/blog/2016/4/2/usgs-geopdf-to-geotif-con-gdal),
- Ver también [Creación de mapas superpuestos para OsmAnd en Linux](https://shallowsky.com/blog/mapping/osmand-making-overlay-maps.html).

## Problemas comunes {#common-issues}

### Problema de OutOfMemoryError {#outofmemoryerror-issue}

**Problema**: OsmAndMapCreator falla con el mensaje - OutOfMemoryError.

El archivo que intentas procesar con OsmAndMapCreator es demasiado grande. Intenta procesar un archivo más pequeño o aumenta la memoria para OsmAndMapCreator en el archivo .sh o .bat. El parámetro `-Xmx` especifica cuánta memoria puede consumir el programa. La configuración puede ser diferente para máquinas de 64 bits (más de 1.5 GB) y de 32 bits (máximo alrededor de 1.5 GB).

### Problema de archivo vacío {#empty-file-issue}

**Problema**: Después de convertir un .osm a .obf con solo un índice de PDI, el .obf está vacío, aunque el archivo .osm original sí contenía PDI.

Podría ser que faltara una etiqueta crucial para que OsmAndMapCreator reconociera un PDI cuando convertiste el osm de otra fuente, como Garmin. Si un punto en el archivo OSM se ve así:
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
  </node>
```
cámbialo para que contenga una etiqueta 'amenity' adicional, como:
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
    <tag k='amenity' v='point' />
  </node>
```

Luego, convierte el archivo usando OsmAndMapCreator. Puedes verificar en el sitio de OSM qué etiquetas son buenas para usar y también puedes verificar qué etiquetas son compatibles con [OsmAnd](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/poi_types.xml).