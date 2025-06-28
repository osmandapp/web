---
source-hash: b20d566784f9980fe5e20bf7150aed84f093a993d25503654c0a929b88a08bd6
sidebar_position: 6
title: Grabación de Pistas
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

## Resumen {#overview}

Este artículo cubre los problemas de grabación de pistas GPX que se han observado durante mucho tiempo en diferentes versiones de Android e iOS. Por **Segundo plano**, nos referimos a que la aplicación OsmAnd no aparece en primer plano, especialmente cuando la pantalla del dispositivo está apagada (lo que es diferente de la definición *de segundo plano* interna en los dispositivos).

**Notas**:

- A partir de Android 11 (2020/12), ya no existe la opción de permiso del sistema *Permitir siempre* el acceso a la ubicación para usarlo en segundo plano, pero esto **no limita** la grabación en segundo plano de las pistas de OsmAnd. Según la documentación de Google, esto ahora se considera **uso en primer plano** porque el permiso para usar el servicio en primer plano se usa internamente y la notificación del sistema de que se está grabando una pista siempre está visible.

- Tenga en cuenta que la nueva redacción de Android puede ser engañosa:

  - **Permitir mientras se usa la aplicación** significa que la aplicación puede recibir continuamente datos de ubicación siempre que se muestre en la pantalla o tenga una notificación visible en la barra de notificaciones de *Android*, como la tiene OsmAnd durante la navegación o la grabación de viajes. (Técnicamente, esto se denomina *modo de primer plano*).

  - **Permitir todo el tiempo**, por otro lado, significa que la aplicación puede, en principio, obtener su ubicación 'sin ser detectada' sin que se aplique ninguna de estas condiciones. Pero *Android* limita la frecuencia de acceso a la ubicación en este modo (*de segundo plano*) a algo así como una vez por hora, lo que ciertamente no es el modo correcto para una aplicación de navegación.

## Las pistas grabadas son ruidosas {#recorded-tracks-are-noisy}

Hay 2 problemas típicos de precisión que conducen a una pista grabada *desordenada*.

- Permanecer más tiempo en el mismo lugar.
- Mala señal de GPS y cambio a la ubicación basada en la señal de red.

Acciones que puedes realizar:

- Puedes evitar estos problemas usando **Pausa** para interrumpir la grabación en tales condiciones.
- También es posible editar una pista más tarde y eliminar los puntos *"ruidosos"*.
- O puedes usar la configuración del *Plugin de grabación de viajes* para filtrar puntos *"ruidosos"* ya durante la grabación, basándose en tu **experiencia** y **dispositivo de grabación**. Puedes filtrar puntos por varios criterios:
  - Puntos con velocidad baja o nula.
  - Puntos con mala precisión (GPS 'hdop').
  - Puntos más cercanos que un umbral en metros.

- **API de Google Services o API de Android**. Puedes cambiar aún más la forma en que OsmAnd recibe datos de ubicación en dispositivos Android. En [Configuración de OsmAnd → Fuente de ubicación](../personal/global-settings.md#location-source) selecciona entre **Servicios de Google Play** y **API de Android**, en muchos casos cambiar a **API de Android** ayuda a mejorar las pistas grabadas y las hace menos ruidosas.

## Las pistas grabadas tienen huecos {#recorded-tracks-have-gaps}

A partir de Android 4.4, las funciones de ahorro de energía pueden limitar el uso de la CPU, reducir el brillo de la pantalla y cerrar las aplicaciones en segundo plano cuando la pantalla está apagada. Esto puede afectar el rendimiento de OsmAnd para uso en exteriores, la representación de mapas y la grabación de pistas. Para evitar problemas, considera deshabilitar completamente las funciones de ahorro de energía. Según la experiencia del usuario, esto tiene poco impacto en la duración de la batería para la mayoría de los dispositivos.

### Configuración de OsmAnd para la grabación de pistas {#configuring-osmand-for-track-recording}

- **Evitar el registro independiente**. Asegúrate de que la configuración *Evitar el registro independiente* en Plugins/Grabación de viajes esté desactivada para permitir que OsmAnd grabe pistas con la pantalla apagada.
- **Actualizar OsmAnd**. Las versiones de Android utilizan diferentes estrategias para reducir el consumo de energía [cerrando aplicaciones que se ejecutan en segundo plano](https://dontkillmyapp.com/). La versión 3.9 o superior utiliza un servicio en primer plano, visible en la barra de notificaciones, [para mantener la aplicación ejecutándose en segundo plano](https://dontkillmyapp.com/) en la mayoría de las versiones de Android. Esto es particularmente efectivo en Android 8+ ([Problema #5255](https://github.com/osmandapp/Osmand/issues/5255), [Problema #5587](https://github.com/osmandapp/Osmand/issues/5587)).

### Optimización de Android para la grabación de pistas {#optimizing-android-for-track-recording}

- **Excluir OsmAnd de la optimización de energía**. En la configuración de Energía o Ahorro de energía de tu dispositivo Android, busca OsmAnd en *Aplicaciones*, *Aplicaciones* o *Administrador de aplicaciones*. Localiza *Ahorro de energía* o *Consumo de energía*, y excluye a OsmAnd de la optimización de energía. ([Problema #5255](https://github.com/osmandapp/Osmand/issues/5255))

- **Desactivar el modo de ahorro de energía**. Desactivar completamente el ahorro de energía de Android puede ayudar, especialmente en versiones anteriores de Android. Esto puede resolver problemas de rendimiento durante la grabación de pistas o la navegación.

### Controlar el comportamiento de las aplicaciones en segundo plano de iOS {#control-the-behavior-of-ios-background-apps}

iOS puede suspender o detener automáticamente las aplicaciones en segundo plano cuando se reasignan los recursos del sistema. OsmAnd no puede anular este comportamiento. Si la grabación de la pista se interrumpe cuando el dispositivo está bloqueado, esto puede dejar huecos en la grabación. Puedes editar estos huecos utilizando la herramienta [Planificar una ruta](https://docs.osmand.net/docs/user/plan-route/create-route).

Para obtener más detalles sobre cómo iOS maneja el seguimiento de ubicación, consulta la documentación de Apple [aquí](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1).

### Configuración de energía probada para Android 9, 10 y 11 (Hardy, 2020-08-25) {#tested-power-settings-for-android-9-10-and-11-hardy-2020-08-25}

Las siguientes configuraciones de energía se han probado con éxito en Android 9, 10 y posteriormente 11 (en dispositivos Samsung) para que OsmAnd registre pistas sin interrupciones. Revisa estas **10 configuraciones** y ajústalas en consecuencia:

- (1) **Ahorro de energía (modo)** = DESACTIVADO (o *Optimizado* en Android 10)
- (2) **Ahorro de energía adaptativo** = DESACTIVADO (Cuando está ACTIVADO, el modo de ahorro de energía medio puede activarse a veces, lo que impide que OsmAnd registre)
- (3) **Batería adaptativa** = ACTIVADO (no debería afectar a las aplicaciones exentas de la optimización de la batería de todos modos, ver (9) a continuación)
- (4) **Poner aplicaciones no utilizadas en suspensión** = DESACTIVADO (ACTIVADO probablemente también esté bien si OsmAnd está exento de la optimización de la batería, ver (9) a continuación)
- (5) **Desactivar automáticamente las aplicaciones no utilizadas** = DESACTIVADO (parece que solo está presente en Android 9)
- (6) **Optimizar la configuración** = DESACTIVADO (en Android 10 en *Cuidado del dispositivo / Avanzado*, en Android 11 parece que ha desaparecido)
- (7) **Optimizar automáticamente (diariamente)** = ACTIVADO (probablemente no relevante)
- (8) **Reiniciar automáticamente (a horas establecidas)** = DESACTIVADO (probablemente no relevante)
- (9) **Optimizar el uso de la batería** (en *Aplicaciones / OsmAnd / Batería* o *Aplicaciones / 3 puntos / Acceso especial / Optimizar el uso de la batería / Todas / OsmAnd*) = es aconsejable eximir a OsmAnd de la optimización de la batería (aunque no es necesario en todos los dispositivos)
- (10) **Permitir actividad en segundo plano** = ACTIVADO para OsmAnd en *Aplicaciones / OsmAnd / Batería* para Android 11

Algunas de estas configuraciones interactúan, así que sé preciso. La mejor búsqueda para las configuraciones anteriores por nombre (con y sin las expresiones entre paréntesis). Dependiendo de tu versión de Android, pueden estar dispersas en estas diversas *pantallas de configuración de Android*:

- *Cuidado del dispositivo*
- *Cuidado del dispositivo / 3 puntos / Automatización*
- *Cuidado del dispositivo / Avanzado*
- *Cuidado del dispositivo / Batería*
- *Cuidado del dispositivo / Batería / Configuración*
- *Cuidado del dispositivo / Batería / Gestión de energía de la aplicación*
- *Cuidado del dispositivo / Batería / Más configuraciones de batería*

## Cómo rastrear la distancia recorrida {#how-to-track-traveled-distance}

OsmAnd no tiene un widget especial similar a un odómetro, puedes usar el [plugin de Grabación de Viajes](../plugins/trip-recording.md#new-track-recording) para rastrear tu distancia recorrida y restablecerla cuando sea necesario.

## OsmAnd 3.9: Problemas de altitud al usar los Servicios de Google Play {#osmand-39-altitude-issues-when-using-google-play-services}

Google Play ha cambiado su política, y para cumplirla, OsmAnd, a partir de la versión 3.9 (excluyendo las versiones Nightly, F-Droid y Huawei) debe usar los Servicios de Google Play para obtener correcciones de ubicación mientras se ejecuta en segundo plano (es decir, en la terminología de Android, como un servicio en primer plano con una notificación de sistema visible).

Después de este cambio, parece haber un problema con el registro de altitud: Aparentemente, los Servicios de Google Play interpolan la medición de altitud de manera muy agresiva, ver [problema de GitHub #10864](https://github.com/osmandapp/Osmand/issues/10864). Este problema afecta a Android 10, posiblemente no a Android 11. El [problema](https://issuetracker.google.com/issues/180218747) ya ha sido reportado en el sitio web de Google, y probablemente se solucionará el 09-03-2021.

Como solución alternativa, en [*Configuración de OsmAnd → Fuente de ubicación*](../personal/global-settings.md#location-source) puedes cambiar la fuente de ubicación de **Servicios de Google Play** a **API de Android**.

## OsmAnd 3.9: El despertar del GPS ahora se reemplaza por un servicio continuo en primer plano (2020/12) {#osmand-39-gps-wake-up-now-replaced-by-continuous-foreground-service-202012}

A partir de la versión 3.9, cuando se requiere la grabación de pistas o la navegación, OsmAnd admite continuamente GPX a través del servicio en segundo plano de *Android*, y esto es visible como una notificación del sistema de *Android*.

La estrategia anterior de usar un modo de inactividad y el despertar periódico del GPS se ha eliminado de nuestro código (commit [Eliminar el servicio de navegación de activación por alarma](https://github.com/osmandapp/Osmand/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)), según lo exigen las nuevas restricciones de Google Play sobre el acceso a la ubicación en segundo plano. Como resultado, las siguientes secciones (A) y (B) se aplican solo a versiones de OsmAnd anteriores a la 3.9:

**<del> (A) Estrategia de activación del GPS</del>**

- (A1) Mientras se usa OsmAnd, por ejemplo, Navegación. Mantenemos el módulo GPS del sistema encendido todo el tiempo, ya que la información de ubicación continua es clave aquí. El efecto en el uso de la batería (orden de magnitud) parece ser de aproximadamente el 5% por hora en sistemas más antiguos hasta Android 4.4, y del 2-3% para sistemas más nuevos.
- (A2) Para la grabación de pistas *en segundo plano* sin navegación simultánea. Para la grabación con intervalos de hasta 15 segundos, también mantenemos el GPS encendido, otras estrategias no ahorrarán mucha energía de la batería.
- (A3) Para intervalos >=30 segundos, encendemos el GPS solo para cada punto de muestreo. Esto tiene un efecto notable en la precisión de los puntos registrados, pero reduce el uso de la batería a un orden de magnitud del 1.2% por hora para la grabación de pistas de 30 segundos.

**<del> (B) Problemas de activación del GPS</del>**

Para lograr la activación del GPS, hasta ahora usamos el Administrador de alarmas de Android para activar el dispositivo periódicamente (también desde el modo Doze, que se introdujo en Android 6). Las nuevas versiones de Android introdujeron los siguientes problemas:

- **(B1) `setRepeating()` del Administrador de alarmas se volvió inexacto a partir de Android 4.4:**
  Mitigación: Ahora usamos `setRepeating()` solo hasta Android 4.2, el nuevo método `setExact()` a partir de Android 4.4, y `setExactAndAllowWhileIdle()` para Android 8+. ([Problema #5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) A partir de Android 4.4, los sistemas limitan el número de veces que `setExact()` se ejecuta repetidamente** a, por ejemplo, una vez cada 5 o incluso 15 minutos. (El valor real parece variar mucho según el dispositivo).
  No se ha encontrado una buena solución por ahora. La mitigación actual es que no usamos la activación del Administrador de alarmas, sino que mantenemos el GPS siempre encendido para el registro de pistas en segundo plano en dispositivos con Android 5+ para todos los intervalos de grabación más cortos de 5 minutos. Esto produce pistas confiables y precisas a costa de un mayor uso de la batería. ([Problema #5632](https://github.com/osmandapp/Osmand/issues/5632))