---
source-hash: 848546295eb67d895bd6bd5a48afe6f2f110a62b992de04aa47e91eee03c9082
sidebar_position: 3
title:  Navegación
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Cálculo de ruta {#route-calculation}

### El cálculo de la ruta es lento {#route-calculation-is-slow}

*Android*. OsmAnd utiliza dos **motores de enrutamiento sin conexión** diferentes: un *motor basado en Java* y un *motor Nativo (C++)*.

- El *motor basado en Java* se utiliza en [Modo seguro](../plugins/development.md#overview), pero es aproximadamente 10 veces más lento que el motor nativo. También tiene limitaciones estrictas de memoria, lo que puede provocar errores como *Memoria insuficiente para calcular*. Si se encuentra con este problema, vaya a *Complementos → Desarrollo de OsmAnd → Ajustes →* [*Modo seguro*](../plugins/development.md#overview) y asegúrese de que esta opción está desactivada.
- El *motor Nativo (C++)* ofrece un mejor rendimiento, pero su eficiencia depende de la memoria y la capacidad del procesador de su dispositivo. Por lo general, el enrutamiento nativo funciona bien para rutas de menos de 300 km, con tiempos de cálculo de ruta que van de 15 segundos a 4 minutos. Si el proceso dura más de 4 minutos, es aconsejable detenerlo, ya que la aplicación podría bloquearse.


### Rutas incorrectas o rotas {#incorrect-or-broken-routes}

A veces, OsmAnd puede mostrar resultados de navegación inesperados. En lugar de seguir la red de carreteras, la ruta puede aparecer como una línea punteada recta hacia un punto no relacionado, o la navegación puede fallar por completo. Esto suele indicar que el enrutamiento hacia la ubicación seleccionada no es posible con la configuración actual. Problemas similares han sido reportados por usuarios en [Reddit](https://www.reddit.com/r/OsmAnd/comments/1lu45u2/navigation_problems/) y [más](https://www.reddit.com/r/OsmAnd/comments/1l9233e/navigation_bug_in_certain_countries/).

**Causas:**

- Mapas desactualizados o duplicados. Mapas con fechas de actualización diferentes o duplicados pueden romper la conectividad (especialmente a través de regiones/fronteras).
- Configuraciones de perfil dañadas. Perfiles personalizados/modificados (p. ej., Bicicleta) pueden causar un comportamiento inconsistente.
- Desajuste del motor de enrutamiento: Diferentes motores (HH × Java vs HH × C++) pueden manejar los mismos mapas de manera diferente.

**Soluciones:**

1. Restablecer su perfil.
- Abra *Menú* → *Ajustes* → *Perfil de la aplicación (Perfil de Navegación)*.
- Seleccione *Restablecer a los valores predeterminados*.

2. Eliminar e reinstalar mapas.
- Abra *Menú* → *Mapas y Recursos* → *Local* y elimine todos los mapas para la(s) región(es) afectada(s).
- Luego vaya a *Menú* → *Mapas y Recursos* → *Descargas* y descargue los mapas nuevamente.
- Opcionalmente, verifique *Menú* → *Mapas y Recursos* → *Actualizaciones* para asegurar que todas las regiones compartan la misma fecha de actualización.

3. Cambiar el motor de enrutamiento.
- Active el complemento: *Menú* → *Complementos* → *Desarrollo de OsmAnd*.
- Luego abra *Menú* → *Ajustes* → *Perfil de la aplicación* → *Ajustes de navegación* → *Parámetros de ruta* → *Desarrollo* → *Tipo de enrutamiento* y cambie *HH × C++* ↔ *HH × Java* (también puede probar A* clásico o A* de dos fases).

4. Como último recurso.
- Reinstale la aplicación y descargue los mapas nuevamente (ayuda cuando persisten conflictos ocultos).


### ¿Cómo calcular rutas de más de 250 km? {#how-to-calculate-routes-longer-than-250km}

1. Si la aplicación no muestra una ruta después de 7-8 minutos de tiempo de cálculo, considere [colocar puntos intermedios](../navigation/setup/route-navigation.md#route-recalculation) (elija, por ejemplo, lugares en autopistas). 3-4 puntos intermedios serán suficientes para calcular incluso rutas de 1000 km.

2. Para los dispositivos de gama alta puede aumentar la memoria hasta 512 MB o 1024 MB - [Dispositivos con memoria asignada](../plugins/development.md#memory-settings).

3. Para la versión de Android puede crear un Perfil de Navegación con enrutamiento en línea o de terceros (BRouter). Lea más sobre ello [aquí](../navigation/routing/brouter.md).

### Cálculo de rutas de 50 km para peatones {#calculation-of-50-km-routes-for-pedestrians}

Si está utilizando el perfil **Peatón** en OsmAnd, la aplicación puede bloquearse al calcular rutas de más de 50 km. Este problema se produce específicamente cuando se selecciona el [**Enrutamiento estándar A***](../navigation/guidance/navigation-settings.md#development-settings) en los ajustes de navegación. Varios factores pueden contribuir a este problema:

- La longitud de la ruta supera los 50 km.
- El número de puntos directos en la ruta es superior a 1 millón.
- Está utilizando un dispositivo móvil para calcular la ruta, lo que no se recomienda para rutas de esta longitud. Considere la posibilidad de utilizar la versión web para un mejor rendimiento.

Para evitar bloqueos con rutas de distancias similares, puede que desee cambiar a otros tipos de perfil como **Bicicleta**.


## La ruta calculada no parece correcta {#the-calculated-route-does-not-seem-correct}

Para rastrear problemas con rutas erróneas o subóptimas, por favor abra una nueva publicación en [Discusiones de Github](https://github.com/osmandapp/OsmAnd/discussions) o un [problema de Github](https://github.com/osmandapp/Osmand/issues) y especifique tan detalladamente como sea posible la siguiente información:

- ¿Qué versión de OsmAnd está utilizando y en qué dispositivo?
- ¿Utiliza los mapas sin conexión que se ofrecen para descargar dentro de la aplicación OsmAnd, o mapas en línea (de teselas / ráster)?
- Si utiliza mapas sin conexión, indíquenos el nombre exacto del archivo de mapa en el que se produce el problema de enrutamiento y su fecha de edición.
- Indíquenos si ha utilizado el enrutamiento sin conexión dentro de la aplicación de OsmAnd, o algún proveedor de enrutamiento en línea como YOURS, OpenRouteService u OSRM.
- ¿Qué perfil de enrutamiento se elige en la aplicación OsmAnd (coche, bicicleta o peatón)?
- Especifique con la mayor exactitud posible los puntos de inicio y fin de su ruta. Si es posible, indíquenos el nombre de la ciudad y de la calle de cada uno. También puede ser útil un [Enlace permanente](https://wiki.openstreetmap.org/wiki/Permalink) de openstreetmap.org.
- Díganos la ruta que esperaba y cómo la traza OsmAnd.

## Información de la carretera {#road-information}

### OsmAnd solo muestra algunos radares de velocidad {#osmand-only-shows-some-speed-cams}

Debido a los geodatos tomados del proyecto OpenStreetMap, existen por ahora dos métodos de cómo se integran los radares de velocidad en los datos brutos de OSM:

- Un punto (llamado "nodo" en la terminología de OSM) de una vía se etiqueta con "highway=speed_camera", véase la wiki de OSM en [highway=speed_camera](https://wiki.openstreetmap.org/wiki/Tag%3Ahighway%3Dspeed_camera)
- Un grupo de elementos de datos de OSM se unen en una llamada "relación" que contiene más elementos que un solo nodo para describir la dirección que cubre el radar de velocidad. Véase [Relation:enforcement](https://wiki.openstreetmap.org/wiki/Relation:enforcement).

Actualmente, OsmAnd solo puede hacer uso de los elementos que consisten en un único nodo. El análisis de las relaciones llegará en una futura versión.


## Navegación por voz {#voice-navigation}

### ¿Por qué debería usar una voz TTS en lugar de una voz grabada? {#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice}

Las voces de **Texto a voz (TTS)** generan indicaciones habladas de forma dinámica, lo que les permite pronunciar nombres de calles, nombres de lugares y números de autopistas. Por el contrario, las **voces grabadas** se limitan a frases pregrabadas y no pueden pronunciar nombres o números específicos.

*Ventajas del TTS sobre las voces grabadas:*

- Pronuncia nombres de calles e información dinámica.
- Se actualiza regularmente con nuevas funciones.
- Ofrece una mayor flexibilidad para la navegación.

Para utilizar TTS en OsmAnd, su dispositivo debe tener instalado un **motor TTS**. Muchos dispositivos vienen con un motor TTS preinstalado, pero se pueden instalar otros manualmente si es necesario. [Lista de motores TTS e idiomas compatibles para Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

Para obtener instrucciones detalladas sobre cómo configurar y ajustar las Indicaciones de voz, consulte: [Guía de configuración de la navegación por voz](../navigation/guidance/voice-navigation.md).

### ¿El TTS no funciona correctamente? Siga estos pasos para solucionarlo {#tts-does-not-function-properly-follow-these-steps-to-fix-it}

Los problemas con el **Texto a voz (TTS)** suelen estar relacionados con los **ajustes del sistema Android**, no con la propia aplicación OsmAnd.  

1. Asegúrese de que hay un motor TTS instalado.

    - Abra *Ajustes del dispositivo → Idioma y entrada → Opciones de texto a voz*.
    - Compruebe si hay un **motor TTS** instalado (por ejemplo, Google TTS, Samsung TTS, Pico).
    - Si no hay ningún motor instalado, seleccione *“Instalar más…”* y descargue uno compatible.
    - [Lista de motores TTS e idiomas compatibles.](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/)

2. Verifique la configuración del idioma del TTS.

    - Seleccione el idioma que desea utilizar en *Ajustes de Android → Opciones de texto a voz*.
    - Pulse *“Escuchar un ejemplo”* para comprobar si el motor TTS funciona.
    - Si no oye nada, actualice o reinstale el motor TTS.

3. Ajuste la configuración de la navegación por voz de OsmAnd.

    - Abra *OsmAnd → Menú → Configurar perfil → Ajustes de navegación → Indicaciones de voz*.
    - Seleccione un *Idioma → TTS* compatible.
    - Pruebe las indicaciones de voz navegando a *Menú → Complementos → Activar Desarrollo de OsmAnd → Ajustes → Probar indicaciones de voz*.

#### Pasos adicionales {#additional-steps}

- *Actualizar Google TTS*. Abra Google Play Store, busque **Síntesis de voz de Google** y actualícela.  
- *Simular navegación*. Pulse *Botón de navegación → Ajustes → Simular navegación* para comprobar si se reproduce la guía de voz.  
- *Reinstalar OsmAnd*:  
   - **Hacer copia de seguridad de los ajustes:** *Menú → Ajustes → Exportar a archivo*.  
   - Desinstale OsmAnd y vuelva a instalarlo desde la tienda de aplicaciones.  
   - Restaurar ajustes: *Menú → Ajustes → Importar archivo*.

Para más información sobre la solución de problemas, visite:

- [Guía de navegación por voz](../navigation/guidance/voice-navigation.md)  
- [Importar/Exportar ajustes](../personal/import-export.md)  


## Otros {#other}

### La navegación se detiene cuando la pantalla está apagada {#navigation-stops-while-screen-is-off}

- [El mismo problema](../troubleshooting/track-recording-issues.md#overview) con la grabación de rutas en segundo plano.