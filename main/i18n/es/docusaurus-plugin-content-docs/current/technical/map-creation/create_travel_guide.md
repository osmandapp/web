---
source-hash: 257260cc6f5df1e2457058808df69ed24a8aea6a73cb5b7dee08308979c295ac
title: Crear guía de viaje personalizada
versions: '*'
---
import Translate from '@site/src/components/Translate.js';

**_Este artículo necesita ser revisado_**

Usando OsmAnd [MapCreator](../../versions/map-creator.md) puedes crear tu propia [Guía de Viaje](../../user/plan-route/travel-guides.md) personalizada y única. Puedes usar texto de cualquier fuente (desde Wikipedia hasta el blog de tu amigo) como base para una guía y combinarlo con la pista GPX.

### Preparar los archivos {#prepare-the-files}

Guarda tu pista con la extensión *[.GPX](../osmand-file-formats/osmand-gpx.md)* y el archivo de texto como *.html*. Para crear tu *Guía de Viaje* personalizada con éxito, los nombres del archivo GPX y del archivo html deben ser idénticos. Por ejemplo, *Milan.gpx* y *Milan.html*.
Las pistas GPX se pueden descargar de internet o puedes crear una [usando OsmAnd](../../user/plan-route/create-route.md) o cualquier otra herramienta de creación de GPX (Brouter, o una similar).
Añade los puntos que te gustaría visitar en tu ruta y luego guarda esa ruta como una pista GPX.

Elegir la fuente para el texto de tu guía depende completamente de ti. Puede ser un artículo en un blog de viajes, una página de Wikipedia, etc. Simplemente copia el texto, luego pégalo en un editor de texto y guárdalo con una extensión *.html*. Asegúrate de que el nombre de la pista GPX y el archivo HTML sean idénticos.

### Iniciar la herramienta {#launch-the-tool}

Descarga la última versión de [OsmAnd MapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) y extrae los archivos del archivo.

:::note
Cómo usar esta herramienta se describe en el artículo [Crear mapas ráster y vectoriales sin conexión](./create-offline-maps-yourself.md#osmandmapcreator).
:::

Inicia tu consola y abre la carpeta MapCreator.

Ejemplo: `cd /home/user/OsmAndMapCreator-main/`

Para *Linux* ejecuta ./utilites.sh (*Windows*: archivo utilities.bat) travel-guide-creator.

Cuando se te pida que proporciones la ruta, pega la ruta a la carpeta donde tienes tus archivos preparados.

Ejemplo: `cd /home/user/MyCustomGuides/`

No recomendamos ubicar tus archivos en la propia carpeta *OsmAnd MapCreator*. Consulta el archivo *Léame* para ver los comandos paso a paso.

### Importar archivos {#import-files}

Tu archivo debería crearse en segundos. Por defecto, se llamará *travel_guide.sqlite*, pero puedes renombrarlo como quieras. Asegúrate de guardarlo con la extensión de archivo *sqlite*. Por ejemplo, *Milan_weekend_tour.sqlite*. Después de eso, transfiérelo a tu dispositivo. Específicamente, a la carpeta donde se almacenan las guías de viaje de OsmAnd. Puedes verificar la ruta a esa carpeta en *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*. Copia el archivo allí usando cualquier administrador de archivos móvil o conectando tu teléfono a la computadora. Reinicia la aplicación.

### Usar tu guía {#use-your-guide}

Después de iniciar la aplicación, ve al menú *[Guías de viaje](../../user/plan-route/travel-guides.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*). Usa la búsqueda para ver nuevos artículos.