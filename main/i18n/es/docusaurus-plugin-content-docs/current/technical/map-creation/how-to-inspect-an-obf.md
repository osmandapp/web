---
source-hash: b53d59fe9eea1205645cb096e0a18766e1c4aa8cb5c9cbb49cd73ff14655af86
title: Cómo inspeccionar un archivo binario obf
versions: '*'
---

**_Este artículo necesita ser revisado_**

Si desea inspeccionar el contenido de un archivo obf, debe descargar [OsmAndMapCreator](https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). Allí puede encontrar una aplicación de consola Inspector (.sh, .bat). Esta aplicación de consola tiene parámetros opcionales [-vmap, -vaddress, -vtransport] y un parámetro requerido (archivo obf de entrada). Al especificar parámetros opcionales, puede rastrear toda la información del archivo obf (tenga en cuenta: ¡podría ser enorme!).

Ejemplo y paso a paso para usuarios de Windows:
- tener Java Runtime Environment instalado
- descargue o copie cualquier mapa sin conexión de Osmand de su dispositivo a su PC, coloque ese archivo obf idealmente en la carpeta con todos los archivos descomprimidos de Mapcreator
- Abra la línea de comandos de Windows (por ejemplo, presionando la tecla de Windows y "r", luego ingrese cmd y presione enter
- vaya a la carpeta donde ha descomprimido el Osmand-Mapcreator con el comando cd y el nombre de la carpeta
- escriba `dir` para ver si está en la carpeta correcta con el archivo inspector.bat
- escriba `inspector -h` para ver un texto de ayuda
- escriba `inspector -vaddress name_of_your_map.obf \>output.csv`
- si obtiene un error de la consola de Java sobre memoria insuficiente o similar, edite el archivo inspector.bat aumentando el número en el parámetro -Xmx512M (o similar) paso a paso a un valor más alto
- intente cargar ese archivo de texto CSV (eventualmente muy grande) en cualquier editor o programa que pueda cargar archivos muy grandes, como Notepad++ ... o intente importarlo a cualquier programa de hoja de cálculo como Excel o LibreOffice calc (elija TAB como separador de campo)
- use cualquier función de búsqueda para encontrar nombres de lugares o nombres de calles