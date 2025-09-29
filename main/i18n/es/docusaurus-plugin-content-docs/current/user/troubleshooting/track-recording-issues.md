---
source-hash: 7f2e85f7e22604bcf22bbc6bdb7faf78780ede4bd62e7cd5554ceedacb06dd7d
sidebar_position: 6
title:  Grabación de rutas
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Visión general {#overview}

Este artículo cubre los problemas de grabación de rutas GPX que se han observado durante mucho tiempo en diferentes versiones de Android e iOS. Por **segundo plano**, nos referimos a que la aplicación OsmAnd no aparece en primer plano, especialmente cuando la pantalla del dispositivo está apagada (lo cual es diferente de la definición interna de *segundo plano* en los dispositivos).

**Notas**:

- A partir de Android 11 (2020/12), ya no existe la opción de permiso del sistema *Permitir siempre* el acceso a la ubicación para ser utilizado en segundo plano, pero esto **no limita** la grabación de rutas de OsmAnd en segundo plano. Según la documentación de Google, esto ahora se considera **uso en primer plano** porque el permiso para usar el servicio en primer plano se utiliza internamente y la notificación del sistema de que se está grabando una ruta siempre está visible.

- Tenga en cuenta que la nueva redacción de Android puede ser engañosa:

  - **Permitir solo con la app en uso** significa que la aplicación puede recibir datos de ubicación continuamente siempre que se muestre en la pantalla o tenga una notificación visible en la barra de notificaciones de *Android*, como tiene OsmAnd durante la navegación o la grabación de un viaje. (Técnicamente, esto se llama *modo de primer plano*).

  - **Permitir todo el tiempo**, por otro lado, significa que la aplicación puede en principio obtener su ubicación 'sin que se note' sin que se aplique ninguna de estas condiciones. Pero *Android* limita la frecuencia de acceso a la ubicación en este modo (*segundo plano*) a algo así como una vez por hora, lo que ciertamente no es el modo correcto para una aplicación de navegación.


## Las rutas grabadas tienen ruido {#recorded-tracks-are-noisy}

Hay 2 problemas típicos de precisión que conducen a una ruta grabada *desordenada*.

- Permanecer mucho tiempo en el mismo lugar, o grabar puntos con demasiada frecuencia (el zigzagueo correspondiente exagera los valores reales)
- Señal GPS débil o cambio a la ubicación basada en la señal de la red.

Acciones de mitigación:

- Pause sus grabaciones mientras está parado, o use el filtro *Desplazamiento mínimo* del plugin de Grabación de viaje.
- Seleccione el espaciado de tiempo o desplazamiento de sus puntos grabados apropiado para capturar la sinuosidad de su viaje, pero sin crear muchos puntos extra (cuya dispersión creará ruido y exagerará la distancia y las fluctuaciones de elevación).
- También es posible editar una ruta más tarde y eliminar los puntos *"ruidosos"*.
- O puede usar los ajustes del *Plugin de Grabación de Viaje* para filtrar los puntos *"ruidosos"* ya durante la grabación, basándose en su **experiencia** y **dispositivo de grabación**. Puede filtrar puntos por varios criterios:
  - Puntos con velocidad baja o cero.
  - Puntos con mala precisión (GPS 'hdop').
  - Puntos más cercanos que un umbral en metros.

- **API de Servicios de Google o API de Android**. Puede cambiar aún más cómo OsmAnd recibe los datos de ubicación en los dispositivos Android. En [Ajustes de OsmAnd → Fuente de ubicación](../personal/global-settings.md#location-source) seleccione entre **Servicios de Google Play** y **API de Android**, en muchos casos cambiar a **API de Android** ayuda a mejorar las rutas grabadas y las hace menos ruidosas.


## Las rutas grabadas tienen huecos {#recorded-tracks-have-gaps}

### Configuración de OsmAnd para la grabación de rutas {#configuring-osmand-for-track-recording}

- **Evitar registro autónomo**. Asegúrese de que el ajuste *Evitar registro autónomo* en Plugins/Grabación de viaje esté desactivado para permitir que OsmAnd grabe rutas con la pantalla apagada.
- **Actualizar OsmAnd**. Las versiones de Android utilizan diferentes estrategias para reducir el consumo de energía [matando aplicaciones que se ejecutan en segundo plano](https://dontkillmyapp.com/). La versión 3.9 o superior utiliza un servicio en primer plano, visible en la barra de notificaciones, [para mantener la aplicación funcionando en segundo plano](https://dontkillmyapp.com/) en la mayoría de las versiones de Android. Esto es particularmente efectivo en Android 8+ ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255), [Issue #5587](https://github.com/osmandapp/Osmand/issues/5587)).


### Optimización de Android para la grabación de rutas {#optimizing-android-for-track-recording}

A partir de Android 4.4, las funciones de ahorro de energía pueden limitar el uso de la CPU, reducir el brillo de la pantalla y cerrar aplicaciones en segundo plano cuando la pantalla está apagada. Esto puede afectar el rendimiento de OsmAnd para uso en exteriores, la representación de mapas y la grabación de rutas. Versiones posteriores de Android han añadido comportamientos de ahorro de energía basados en IA como **Batería automática** y **Ahorro de energía automático**, introduciendo un comportamiento dinámico y aún menos predecible. Para evitar problemas de grabación, al menos inicialmente o para depuración, **considere desactivar por completo las funciones de ahorro de energía**. Los usuarios informan que el impacto en la duración de la batería para la mayoría de los dispositivos es tolerable.

- **Excluir OsmAnd de la *Optimización de batería*.** En los *Ajustes* de su dispositivo Android, busque OsmAnd en *Aplicaciones*, *Gestor de aplicaciones* o similar. Localice la sección *Batería*, *Ahorro de energía* o *Consumo de energía*, y excluya a OsmAnd de la optimización de batería. ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255))
  
- **Desactivar el modo *Ahorro de energía*.** Este modo tiene una alta probabilidad de impactar/cerrar incluso los servicios en primer plano, como la grabación de viajes de OsmAnd.

- **Desactivar el *Ahorro de energía adaptable*.** Tener esto 'activado' aplicará políticas a nivel de sistema basadas en patrones de uso para desactivar/activar el modo de 'ahorro de energía' mencionado anteriormente.

- **Desactivar la *Batería adaptable* a menos que use la aplicación OsmAnd regularmente.** La *Batería adaptable* funciona por aplicación, también basada en patrones de uso. Su efecto en una aplicación específica puede reducirse eximiendo esa aplicación de la *Optimización de batería* (como establecerla en *No optimizada*). Sin embargo, la *Batería adaptable* aún puede cerrar servicios en primer plano como la grabación de viajes de OsmAnd, si el dispositivo considera que OsmAnd está en su grupo de aplicaciones 'raramente usadas'.

### Controlar el comportamiento de las aplicaciones en segundo plano de iOS {#control-the-behavior-of-ios-background-apps}

iOS puede suspender o detener aplicaciones en segundo plano automáticamente cuando se reasignan los recursos del sistema. OsmAnd no puede anular este comportamiento. Si la grabación de la ruta se interrumpe cuando el dispositivo está bloqueado, esto puede dejar huecos en la grabación. Puede editar estos huecos utilizando la herramienta [Planificar una ruta](https://docs.osmand.net/docs/user/plan-route/create-route).

Para más detalles sobre cómo iOS maneja el seguimiento de la ubicación, consulte la documentación de Apple [aquí](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1).


### Configuración de energía probada para Android 9, 10 y 11 (Hardy, 2020-08-25) {#tested-power-settings-for-android-9-10-and-11-hardy-2020-08-25}

La siguiente configuración de energía ha sido probada con éxito en Android 9, 10 y posteriormente 11 (en dispositivos Samsung) para hacer que OsmAnd registre rutas sin huecos. Por favor, revise estos **10 ajustes** y configúrelos en consecuencia:

- (1) **Ahorro de energía (modo)** = DESACTIVADO (o *Optimizado* en Android 10)
- (2) **Ahorro de energía adaptable** = DESACTIVADO (Cuando está ACTIVADO, el modo de ahorro de energía puede activarse a veces, lo que impide que OsmAnd registre.)
- (3) **Batería adaptable** = ACTIVADO (No afecta a las aplicaciones exentas de la optimización de la batería de todos modos, ver (9) más abajo, **a menos que la aplicación se use raramente**. Para estar seguro, póngalo en DESACTIVADO.)
- (4) **Poner en suspensión apps no usadas** = ACTIVADO (¡Pero OsmAnd está exento de la optimización de la batería, ver (9) más abajo!)
- (5) **Desactivar automáticamente apps no usadas** = DESACTIVADO (Parece que solo está presente en Android 9.)
- (6) **Optimizar ajustes** = DESACTIVADO (En Android 10 en *Cuidado del dispositivo / Avanzado*, en Android 11 parece haber desaparecido.)
- (7) **Optimización automática (diaria)** = ACTIVADO (No tiene efecto aquí.)
- (8) **Reinicio automático (a horas programadas)** = DESACTIVADO (No tiene efecto aquí.)
- (9) **Optimizar uso de batería** (En *Ajustes de Android / Aplicaciones / OsmAnd / Batería* o *Ajustes / Aplicaciones / 3 puntos / Acceso especial / Optimizar uso de batería / Todas / OsmAnd*) = Excluir a OsmAnd de la optimización de la batería (muy recomendable, aunque no es necesario si la aplicación es iniciada por el usuario con frecuencia).
- (10) **Permitir actividad en segundo plano** = ACTIVADO para OsmAnd en *Aplicaciones / OsmAnd / Batería* para Android 11

Algunos de estos ajustes interactúan, así que sea preciso. La mejor manera es buscar los ajustes anteriores por su nombre (con y sin las expresiones entre paréntesis). Dependiendo de su versión de Android, pueden estar dispersos en estas diversas pantallas de *Ajustes de Android*:

- *Cuidado del dispositivo*
- *Cuidado del dispositivo / 3 puntos / Automatización*
- *Cuidado del dispositivo / Avanzado*
- *Cuidado del dispositivo / Batería*
- *Cuidado del dispositivo / Batería / Ajustes*
- *Cuidado del dispositivo / Batería / Administración de energía de la aplicación*
- *Cuidado del dispositivo / Batería / Más ajustes de batería*


## Cómo registrar la distancia recorrida {#how-to-track-traveled-distance}

OsmAnd no tiene un widget especial similar a un odómetro, puede usar el [plugin de Grabación de viaje](../plugins/trip-recording.md#new-track-recording) para registrar su distancia recorrida y restablecerla cuando sea necesario.


## OsmAnd 3.9: Problemas de altitud al usar los Servicios de Google Play {#osmand-39-altitude-issues-when-using-google-play-services}

Google Play ha cambiado su política y, para cumplirla, OsmAnd, a partir de la versión 3.9 (excluyendo las compilaciones Nightly, F-Droid y Huawei), debe usar los Servicios de Google Play para obtener la ubicación mientras se ejecuta en segundo plano (es decir, en la terminología de Android, como un servicio en primer plano con una notificación visible del sistema).

Después de este cambio, parece haber un problema con el registro de la altitud: Aparentemente, los Servicios de Google Play interpolan la medición de la altitud de manera muy agresiva, ver [issue de GitHub #10864](https://github.com/osmandapp/OsmAnd/issues/10864). Este problema afecta a Android 10, posiblemente no a Android 11. El [problema](https://issuetracker.google.com/issues/180218747) ya ha sido reportado en el sitio web de Google, y probablemente se solucionará el 09-03-2021.

Como solución alternativa, en [*Ajustes de OsmAnd → Fuente de ubicación*](../personal/global-settings.md#location-source) puede cambiar la fuente de ubicación de **Servicios de Google Play** a **API de Android**.


## OsmAnd 3.9: El despertar del GPS ahora se reemplaza por un servicio continuo en primer plano (2020/12) {#osmand-39-gps-wake-up-now-replaced-by-continuous-foreground-service-202012}

A partir de la versión 3.9, cuando se requiere la grabación de rutas o la navegación, OsmAnd soporta continuamente GPX a través del servicio en segundo plano de *Android*, y esto es visible como una notificación del sistema de *Android*.

La estrategia anterior de usar un modo de reposo (doze) y un Despertar del GPS periódico ha sido eliminada de nuestro código (commit [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)), según lo requieren las nuevas restricciones de Google Play sobre el acceso a la ubicación en segundo plano. Como resultado, las siguientes secciones (A) y (B) se aplican solo a las versiones de OsmAnd anteriores a la 3.9:

**<del> (A) Estrategia de Despertar del GPS</del>**

- (A1) Mientras se usa OsmAnd, por ejemplo, en Navegación. Mantenemos el módulo GPS del sistema encendido todo el tiempo, ya que la información de ubicación continua es clave aquí. El efecto en el uso de la batería (orden de magnitud) parece ser de aproximadamente un 5% por hora en sistemas antiguos hasta Android 4.4, y de un 2-3% en sistemas más nuevos.
- (A2) Para la grabación de rutas en *segundo plano* sin navegación simultánea. Para la grabación con intervalos de hasta 15 segundos, también mantenemos el GPS encendido, otras estrategias no ahorrarán mucha energía de la batería.
- (A3) Para intervalos >=30seg, encendemos el GPS solo para cada punto de muestreo. Esto tiene un efecto notable en la precisión de los puntos registrados, pero reduce el uso de la batería a un orden de magnitud de 1.2% por hora para la grabación de rutas de 30 segundos.

**<del> (B) Problemas del Despertar del GPS</del>**

Para lograr el despertar del GPS, hasta ahora usamos el Alarm Manager de Android para despertar el dispositivo periódicamente (también desde el modo Doze, que se introdujo en Android 6). Las nuevas versiones de Android introdujeron los siguientes problemas:

- **(B1) El setRepeating() del Alarm Manager se volvió inexacto a partir de Android 4.4:**  
Mitigación: Ahora usamos *setRepeating()* solo hasta Android 4.2, el nuevo método *setExact()* a partir de Android 4.4, y *setExactAndAllowWhileIdle()* para Android 8+. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) A partir de Android 4.4, los sistemas limitan el número de veces que *setExact()* se ejecuta repetidamente** a, por ejemplo, una vez cada 5 o incluso 15 minutos. (El valor real parece ser muy específico del dispositivo.)  
No se ha encontrado una buena solución por ahora. La mitigación actual es que no usamos el despertar del Alarm Manager, en su lugar mantenemos el GPS siempre encendido para el registro de rutas en segundo plano en dispositivos con Android 5+ para todos los intervalos de grabación inferiores a 5 minutos. Esto produce rutas fiables y precisas a costa de un mayor uso de la batería. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))