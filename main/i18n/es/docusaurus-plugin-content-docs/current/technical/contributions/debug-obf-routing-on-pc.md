---
source-hash: 07c0ae968b6fbc9eae5d8ad2f409109fd8923c80ddab63d2f07f3c692f96ba59
sidebar_position: 5
---

# Depurar el enrutamiento OBF en una PC {#debug-obf-routing-on-a-pc}


- Ve a [https://osmand.net](https://osmand.net "https://osmand.net") y descarga [OsmandMapCreator.zip](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip "http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip") desde el enlace en el lado derecho de la pantalla, y descomprímelo.
- Copia el archivo OBF de tu teléfono o tableta a esa carpeta.
- Inicia OsmandMapCreator a través del archivo .bat o .sh.
- Asegúrate de tener conexión a Internet para que mapcreator pueda descargar los mosaicos del mapa, revisa todos los menús y configuraciones dentro de mapcreator.
- Establece el directorio de trabajo de mapcreator en la carpeta donde se encuentran mapcreator y el archivo OBF.
- Desplaza y haz zoom en el mapa hasta el lugar donde tienes problemas de enrutamiento y que está cubierto por el archivo OBF mencionado.
- Haz clic derecho en el mapa para establecer los puntos de inicio y fin y los diferentes motores de enrutamiento.

Encuentra el nombre del lugar al que está asociada una calle en los mapas OBF sin conexión
- Ten un framework Java instalado en tu computadora de escritorio.
- Descarga OsmAndMapCreator, por ejemplo desde [download.osmand.net/releases](https://download.osmand.net/releases/) y descomprímelo en tu PC.
- Toma cualquier archivo de mapa con extensión OBF y colócalo en la misma carpeta donde se encuentran todos los archivos de mapcreator.
- Inicia OsmAndMapCreator en tu PC ejecutando `OsmAndMapCreator.bat` o `OsmAndMapCreator.sh`.
- Asegúrate de tener acceso a Internet en tu PC, y que la configuración de Mapcreator sea que los mosaicos se descarguen cuando arrastres y hagas zoom en el mapa hasta tu ubicación donde se encuentra tu problema.
- Si has hecho zoom en tu área, haz clic derecho con el ratón en el mapa y elige "mostrar dirección" en el menú emergente.
- Normalmente, ahora se mostrarán todos los nombres de las calles del archivo OBF, y el nombre del lugar al que está asociada cada calle en la búsqueda sin conexión de OsmAnd.