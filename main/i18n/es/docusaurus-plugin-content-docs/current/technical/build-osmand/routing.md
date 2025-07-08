---
source-hash: 25c29183922ffa0df481d5ee27894c6a7f4653e20a70b824ecbc3791edaafed7
sidebar_position: 3
---

# Personalizar el motor de enrutamiento {#customize-routing-engine}

En algunos casos, es posible que desee ampliar o ajustar la experiencia de enrutamiento de OsmAnd, de modo que pueda añadir parámetros adicionales, añadir barreras adicionales o cambiar algunas penalizaciones. Consulte [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml). El enrutamiento de OsmAnd utiliza un algoritmo A* bidireccional basado en el tiempo más rápido (= distancia/(velocidad*prioridad) + penalizaciones). Es un formato bastante sencillo. Se divide en 7 secciones (grupos de evaluación):

* acceso (1 permitir, -1 no permitir)
* velocidad (número que representa la velocidad en km/h)
* prioridad (número entre 0 y 1) - un multiplicador de la velocidad que sigue limitado a la velocidad máxima, por lo que se utilizará el mínimo (velocidad * multiplicador, velocidad máxima) para A*
* sentido único (1, -1 o 0) - se utiliza para aclarar el acceso en función de la dirección del movimiento
* penalty_transition (penalización en segundos) - se utiliza para definir la penalización cuando el usuario pasa de una carretera de clase alta a una carretera de clase baja. Por ejemplo, autopista - 10, carretera principal - 15, si el usuario pasa de autopista a carretera principal la penalización será de 5 segundos (=10 - 15). Esta penalización será utilizada por el algoritmo A*. No hay penalización si el usuario pasa de autopista a carretera principal y no hay penalización si la ruta continúa de autopista a autopista.
* obstacle (penalización en segundos) - define la penalización que se añade al tiempo de enrutamiento
* obstacle_time (penalización en segundos) - define la penalización que se muestra al usuario pero que no es considerada por el motor de enrutamiento, es decir, obstacle_time - 2 horas, obstacle - 1 minuto, en la ruta más corta el motor encontrará una ruta utilizando el obstáculo de 1 minuto pero el usuario verá que el tiempo de la ruta es de 2 horas.

Para probar [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml), puede utilizar [OsmAndMapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). Para probar routing.xml en el dispositivo, simplemente puede reemplazar el routing.xml predeterminado en la carpeta raíz de OsmAnd con la tarjeta SD.