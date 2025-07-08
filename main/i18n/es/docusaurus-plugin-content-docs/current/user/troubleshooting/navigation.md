---
source-hash: 4279e8b0f36e69d2e860ec2e48cb3a48d0b171f309dc5569b62b8e5d94ae87fa
sidebar_position: 3
title: Navegación
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Cálculo de rutas {#route-calculation}

### El cálculo de la ruta es lento {#route-calculation-is-slow}

*Android*. OsmAnd utiliza dos **motores de enrutamiento fuera de línea** diferentes: un *motor basado en Java* y un *motor nativo (C++)*.

- El *motor basado en Java* se utiliza en el [Modo Seguro](../plugins/development.md#safe), pero es aproximadamente 10 veces más lento que el motor nativo. También tiene limitaciones de memoria estrictas, lo que puede provocar errores como *Memoria insuficiente para calcular*. Si encuentra este problema, vaya a *Plugins → Desarrollo de OsmAnd → Ajustes →* [*Modo Seguro*](../plugins/development.md#safe) y asegúrese de que esta opción esté desactivada.
- El *motor nativo (C++)* ofrece un mejor rendimiento, pero su eficiencia depende de la memoria y las capacidades del procesador de su dispositivo. Generalmente, el enrutamiento nativo funciona bien para rutas de menos de 300 km, con tiempos de cálculo de ruta que van de 15 segundos a 4 minutos. Si el proceso tarda más de 4 minutos, es aconsejable detenerse, ya que la aplicación podría fallar.

### ¿Cómo calcular rutas de más de 250 km? {#how-to-calculate-routes-longer-than-250km}

1. Si la aplicación no muestra una ruta después de 7-8 minutos de tiempo de cálculo, considere [colocar puntos de paso](../navigation/setup/route-navigation.md#route-recalculation) (elija, por ejemplo, lugares en autopistas). 3-4 puntos de paso serán suficientes para calcular rutas de incluso 1000 km.

2. Para dispositivos de gama alta, puede aumentar la memoria hasta 512 MB o 1024 MB - [Dispositivos con memoria asignada](../plugins/development.md#memory-allocated-for-routing).

3. Para la versión de Android, puede crear un Perfil de Navegación con enrutamiento en línea o de terceros (BRouter). Lea más al respecto [aquí](../navigation/routing/brouter.md).

### Cálculo de rutas de 50 km para peatones {#calculation-of-50-km-routes-for-pedestrians}

Si está utilizando el perfil **Caminando** en OsmAnd, la aplicación puede fallar al calcular rutas de más de 50 km. Este problema ocurre específicamente cuando el [**Enrutamiento Estándar A***](../navigation/guidance/navigation-settings.md#development-settings) está seleccionado en la configuración de navegación. Varios factores pueden contribuir a este problema:

- La longitud de la ruta supera los 50 km.
- El número de puntos directos en la ruta es superior a 1 millón.
- Está utilizando un dispositivo móvil para calcular la ruta, lo cual no se recomienda para rutas de esta longitud. Considere usar la versión web para un mejor rendimiento.

Para evitar fallos con rutas de distancias similares, es posible que desee cambiar a otros tipos de perfil como **Bicicleta**.

## La ruta calculada no parece correcta {#the-calculated-route-does-not-seem-correct}

Para rastrear problemas con rutas incorrectas o subóptimas, abra una nueva publicación en [Discusiones de Github](https://github.com/osmandapp/OsmAnd/discussions) o [Problema de Github](https://github.com/osmandapp/Osmand/issues) y especifique con el mayor detalle posible la siguiente información:

- ¿Qué versión de OsmAnd está utilizando y en qué dispositivo?
- ¿Utiliza los mapas sin conexión que ofrece la aplicación OsmAnd para descargar, o mapas en línea (de mosaico/ráster)?
- Si utiliza mapas sin conexión, díganos el nombre exacto del archivo de mapa donde ocurre el problema de enrutamiento y su fecha de edición.
- Díganos si ha utilizado el enrutamiento sin conexión integrado de OsmAnd o algún proveedor de enrutamiento en línea como YOURS, OpenRouteService u OSRM.
- ¿Qué perfil de enrutamiento está elegido en la aplicación OsmAnd (coche, bicicleta o peatón)?
- Especifique con la mayor exactitud posible el punto de inicio y fin de su ruta. Si es posible, díganos el nombre de la ciudad y el nombre de la calle para cada uno. También puede ser útil un [Permalink](https://wiki.openstreetmap.org/wiki/Permalink) de openstreetmap.org.
- Díganos su enrutamiento esperado y cómo enruta OsmAnd.

## Información de la carretera {#road-information}

### OsmAnd solo muestra algunos radares {#osmand-only-shows-some-speed-cams}

Debido a los geodatos tomados del proyecto OpenStreetMap, actualmente existen dos métodos para integrar los radares de velocidad en los datos OSM brutos:

- Un punto (llamado "nodo" en la terminología OSM) de una vía se etiqueta con "highway=speed_camera", consulte la wiki de OSM en [highway=speed_camera](https://wiki.openstreetmap.org/wiki/Tag%3Ahighway%3Dspeed_camera)
- Un grupo de elementos de datos OSM se unen en una llamada "relación" que contiene más elementos que un solo nodo para describir la dirección que cubre el radar. Consulte [Relation:enforcement](https://wiki.openstreetmap.org/wiki/Relation:enforcement).

Actualmente, OsmAnd solo puede utilizar los elementos que consisten en un solo nodo. El análisis de las relaciones se incluirá en una futura versión.

## Navegación por voz {#voice-navigation}

### ¿Por qué debería usar una voz TTS en lugar de una voz grabada? {#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice}

Las voces de **Texto a Voz (TTS)** generan indicaciones habladas dinámicamente, lo que les permite pronunciar nombres de calles, nombres de lugares y números de autopistas. Por el contrario, las **voces grabadas** se limitan a frases pregrabadas y no pueden pronunciar nombres o números específicos.

*Ventajas de TTS sobre las voces grabadas:*

- Pronuncia nombres de calles e información dinámica.
- Se actualiza regularmente con nuevas funciones.
- Ofrece mayor flexibilidad para la navegación.

Para usar TTS en OsmAnd, su dispositivo debe tener un **motor TTS** instalado. Muchos dispositivos vienen con un motor TTS preinstalado, pero se pueden instalar otros adicionales manualmente si es necesario. [Lista de motores TTS e idiomas compatibles para Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

Para obtener instrucciones detalladas sobre cómo configurar y ajustar las indicaciones de voz, consulte: [Guía de configuración de navegación por voz](../navigation/guidance/voice-navigation.md).

### ¿El TTS no funciona correctamente? Siga estos pasos para solucionarlo {#tts-does-not-function-properly-follow-these-steps-to-fix-it}

Los problemas con el **Texto a Voz (TTS)** suelen estar relacionados con la **configuración del sistema Android**, no con la propia aplicación OsmAnd.

1. Asegúrese de que un motor TTS esté instalado.

    - Abra *Ajustes del dispositivo → Idioma y entrada → Opciones de texto a voz*.
    - Compruebe si hay un **motor TTS** instalado (por ejemplo, Google TTS, Samsung TTS, Pico).
    - Si no hay ningún motor instalado, seleccione *"Instalar más..."* y descargue uno compatible.
    - [Lista de motores TTS e idiomas compatibles.](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/)

2. Verifique la configuración de idioma de TTS.

    - Seleccione el idioma que desea usar en *Ajustes de Android → Opciones de texto a voz*.
    - Toque *"Escuchar un ejemplo"* para probar si el motor TTS está funcionando.
    - Si no escucha nada, actualice o reinstale el motor TTS.

3. Ajuste la configuración de navegación por voz de OsmAnd.

    - Abra *OsmAnd → Menú → Configurar perfil → Ajustes de navegación → Indicaciones de voz*.
    - Seleccione un *Idioma → TTS* compatible.
    - Pruebe las indicaciones de voz navegando a *Menú → Plugins → Habilitar desarrollo de OsmAnd → Ajustes → Probar indicaciones de voz*.

#### Pasos adicionales {#additional-steps}

- *Actualizar Google TTS*. Abra Google Play Store, busque **Google Text-to-Speech** y actualícelo.
- *Simular navegación*. Toque *Botón de navegación → Ajustes → Simular navegación* para comprobar si se reproduce la guía por voz.
- *Reinstalar OsmAnd*:
   - **Copia de seguridad de la configuración:** *Menú → Ajustes → Exportar a archivo*.
   - Desinstale OsmAnd, luego reinstálelo desde la tienda de aplicaciones.
   - Restaure la configuración: *Menú → Ajustes → Importar archivo*.

Para obtener solución de problemas adicional, visite:

- [Guía de navegación por voz](../navigation/guidance/voice-navigation.md)
- [Importar/Exportar configuración](../personal/import-export.md)

## Otros {#other}

### La navegación se detiene cuando la pantalla está apagada {#navigation-stops-while-screen-is-off}

- [El mismo problema](../troubleshooting/track-recording-issues.md#the-system-may-kill-background-apps-to-save-power) con la grabación de pistas en segundo plano.