---
source-hash: 2c9397af0354174228972ec13437f8fb6f59c51a89e42ac61e3d456e9cee5cc1
sidebar_position: 3
title:  Indicaciones de voz / Notificaciones
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Resumen {#overview}

La función de navegación por voz de OsmAnd proporciona instrucciones y alertas habladas en tiempo real que le ayudan a mantenerse informado y seguro mientras se desplaza. Puede adaptar la guía a sus preferencias y necesidades. Para ello, seleccione un perfil de voz adecuado, ya sea un [motor de texto a voz (TTS)](#tts-text-to-speech) que puede anunciar dinámicamente nombres de calles, distancias y límites de velocidad, o una [voz pregrabada](#recorded-voice-prompts) que ofrece instrucciones concisas.  

Además de las indicaciones giro a giro, la navegación por voz de OsmAnd puede notificarle sobre próximos puntos de interés, cambios en las condiciones del tráfico y cuando exceda un límite de velocidad preestablecido. Para obtener más información sobre cómo personalizar estas alertas, consulte [ajustes de tiempo de anuncio](#announcement-time) y [advertencias de límite de velocidad](#speed-limit).  

Con la combinación adecuada de opciones de voz, ajustes de alerta y ajustes de sonido del dispositivo, recibirá información de navegación clara y oportuna a lo largo de su ruta.

:::note

- <Translate android="true" ids="voice_announces_info"/>
- Las notificaciones de texto reflejan completamente el tiempo de activación y los mensajes de las indicaciones de voz.

:::  


## Configuración de las indicaciones de voz {#setting-up-voice-prompts}

OsmAnd ofrece varias opciones para controlar las indicaciones de voz para que pueda seguir su ruta con comodidad. Para configurar estos ajustes, comience en las secciones apropiadas de la aplicación.  

- Active las indicaciones de voz desde la sección [Navegación](../guidance/navigation-settings.md) pulsando **Ajustes**. También puede activar y configurar las indicaciones de voz a través de *Configurar perfil* y *Ajustes de navegación*.
- Active o desactive las indicaciones de voz usando *Menú → Navegación →* pulsar *botón Sonido*,
    o *Menú → Navegación →* botón Ajustes *→ Sonido →* activar/desactivar.

Para obtener más información sobre cómo y cuándo se activan las indicaciones de voz, consulte la documentación de [Activación de indicaciones de voz de navegación](../../../technical/algorithms/voice-prompt-triggering.md).  


### Ajustes de voz {#voice-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Voice Navigation settings Android](@site/static/img/navigation/voice/voice_promt_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *botón <Translate ios="true" ids="routing_settings"/>* *(o <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Elegir perfil → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Voice Navigation settings iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>  

**[Idioma](#voice-prompt-language)**. Seleccione su idioma y tipo preferidos.

**Anuncio**. Le permite configurar los siguientes [tipos de indicaciones](https://osmand.net/docs/user/navigation/guidance/navigation-settings#voice-prompts):

- *Nombres de calles (TTS), Números de salida, Advertencias de tráfico, Pasos de peatones* y *Túneles.*
- *[Radares de tráfico](#speed-cameras)*.
- Configure también el **[Widget de alerta](../../widgets/nav-widgets.md#alert-widget)** para usar con los anuncios.

**Puntos de usuario**:

- Habilite las indicaciones de voz para los [Waypoints](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) preestablecidos y añadidos, [Favoritos](../../personal/favorites.md) o [PDI](../../map/point-layers-on-map.md#points-of-interest-pois). Mientras conduce, los puntos seleccionados se anunciarán cuando se acerque o los pase.

| Tipo de indicación | Tiempo de antelación [s]:<br/>Distancia de antelación<br/>correspondiente a velocidad predeterminada [m] | Límite |
| :- | :- | :- |
| Acercándose  | **60 s:**<br/>Conducción: 750 m<br/>Ciclismo: 167 m<br/>Caminando: 67 m  |  No más de 1 punto a la vez |
| Pasando | **15 s:**<br/>Conducción: 188 m<br/>Ciclismo: 42 m<br/>Caminando: 17 m | No más de 3 puntos a la vez |

[**Límite de velocidad**](#speed-limit):

- *Anunciar al exceder*.
- *Tolerancia del límite de velocidad*.

**Otros**:

- *Anunciar pérdida y recuperación de la señal GPS*. OsmAnd anuncia si se pierde la señal GPS en el dispositivo.  
- *Anunciar recálculo de ruta*. OsmAnd informa del recálculo de la ruta en caso de [desviación o movimiento en dirección contraria](./navigation-settings.md#recalculate-route).
- *Anunciar desviación de la ruta*. Recibe información sobre desviaciones de la ruta según los [parámetros establecidos](./navigation-settings.md#recalculate-route).

**Opciones**:

- *Repetir instrucciones de navegación*. Le permite repetir las instrucciones de navegación a intervalos regulares de 1 a 30 minutos. O manualmente: si se pierde una indicación de voz, puede volver a escucharla simplemente tocando [la flecha de giro actual](../../widgets/nav-widgets.md#next-turn) en la pantalla de la aplicación.
- *[Tiempo de anuncio](#announcement-time)*.

**Salida** (*solo Android*):

- *[Salida de guía de voz](#voice-guidance-output)*.
- *Pausar música*. Las indicaciones de voz detienen la reproducción de música por un momento.


### Radares de tráfico {#speed-cameras}

![Voice Navigation announcement timing Android](@site/static/img/navigation/voice/voice_promt-speed-cameras.png)

Las [Alertas de radares de tráfico](../../personal/global-settings.md#uninstall-speed-cameras) le permiten activar o desactivar los PDI con radares de tráfico. Deberá reiniciar la aplicación OsmAnd para aplicar los cambios.
  
En algunos países o regiones, el uso de aplicaciones de advertencia de radares de tráfico es ilegal. Debe tomar una decisión dependiendo de las leyes de su país. Seleccione **Mantener activo** y recibirá alertas y notificaciones de radares de tráfico. Seleccione **Desinstalar** y todos los datos relacionados con los radares de tráfico, como advertencias, notificaciones y PDI, se eliminarán hasta que reinstale completamente OsmAnd.  


### Límite de velocidad {#speed-limit}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Voice Navigation](@site/static/img/navigation/voice/voice_promt_speed_limit_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Voice Navigation](@site/static/img/navigation/voice/voice_promt_speed_limit_ios.png)

</TabItem>

</Tabs>  

La opción **Límite de velocidad** permite que OsmAnd le informe cuando su velocidad actual excede un umbral especificado. Los datos sobre los límites máximos de velocidad legales se obtienen de OpenStreetMap.

**Anunciar al exceder**  
*Tolerancia del límite de velocidad* le permite seleccionar una desviación permitida (por ejemplo, de -10 km/h a +20 km/h) del [límite máximo de velocidad legal](https://wiki.openstreetmap.org/wiki/Key:maxspeed) en la carretera actual. Cuando su velocidad excede esta tolerancia, OsmAnd emite una indicación de voz.  

*Reglas para activar las indicaciones de voz* cuando se excede el límite de velocidad:

- *Advertencia inicial*. Al detectar que excede el límite de velocidad, OsmAnd espera 5 segundos antes de emitir la primera advertencia de voz.
- *Retraso de repetición del anuncio*. Si continúa excediendo la velocidad, la siguiente advertencia se retrasa 120 segundos para evitar notificaciones demasiado frecuentes.
- *Reinicio del temporizador*. El temporizador se reinicia si se mantiene dentro del límite legal durante 30 segundos. Cualquier exceso de velocidad posterior esperará nuevamente 5 segundos antes de que suene la siguiente advertencia.

Este ajuste de **Tolerancia del límite de velocidad** afecta la velocidad que se muestra en la parte de *advertencia* del [widget Velocímetro](../../widgets/info-widgets.md#speedometer) en la aplicación OsmAnd, [Android Auto](../../navigation/auto-car.md#speedometer) y [CarPlay](../../navigation/car-play.md#speedometer).


### Tiempo de anuncio {#announcement-time}

![Voice Navigation announcement timing Android](@site/static/img/navigation/voice/voice_promt-announ-time.png)  

El tiempo de anuncio de las diferentes indicaciones de voz depende del perfil seleccionado, el tipo de indicación, la velocidad de navegación actual y la velocidad de navegación predeterminada. Con este ajuste, puede cambiar la distancia antes de que se activen las indicaciones de voz aplicando un multiplicador de distancia: *<Translate android="true" ids="arrival_distance_factor_normally" />* - 1.0, *<Translate android="true" ids="arrival_distance_factor_early" />* - 1.5, *<Translate android="true" ids="arrival_distance_factor_late" />* - 0.5, *<Translate android="true" ids="arrival_distance_factor_at_last" />* - 0.25.  

En la lista desplegable *Intervalos de tiempo y distancia*, puede ver información detallada sobre la activación de las indicaciones para los diferentes multiplicadores de distancia. Para obtener más información, consulte la [Activación de indicaciones de voz de navegación](../../../technical/algorithms/voice-prompt-triggering.md).


### Salida de guía de voz {#voice-guidance-output}

<InfoAndroidOnly/>

![Voice Navigation Android](@site/static/img/navigation/voice/voice_promt-1.png)

Para evitar reproducir audio en el mismo flujo de salida al mismo tiempo, el foco de audio se implementa en Android. OsmAnd utilizará el altavoz seleccionado de la lista en este ajuste para la salida de audio. Otras aplicaciones pausarán la reproducción o bajarán el volumen para que le sea más fácil escuchar las indicaciones de voz de OsmAnd.  

- Audio de medios/navegación.
- Audio de notificación.
- Audio de llamada telefónica (para interrumpir los [estéreos de coche](../auto-car.md) con Bluetooth).


### Prueba de las indicaciones de voz {#testing-of-voice-prompts}

Puede probar las indicaciones de voz con:

- [Simular navegación](../../navigation//setup/route-navigation.md#simulated-navigation). Establezca una ruta e inicie la simulación: *Menú de navegación → Ajustes → Simular navegación*.

- [Probar indicaciones de voz](../../plugins/development.md#application-testing) (*solo Android*). Use el *Plugin de desarrollo* para probar las indicaciones de voz:
    - Vaya a *Menú → Plugins → Activar Desarrollo de OsmAnd*.
    - Vaya a *Ajustes → Probar indicaciones de voz*.
    - Seleccione un idioma y verifique si el sistema reproduce las indicaciones correctamente.


### Solución de problemas de audio {#solving-audio-issues}

Si no escucha las **indicaciones de voz** o las [advertencias de límite de velocidad](#speed-limit):

- Asegúrese de que el volumen de su dispositivo esté activado y subido.
- Confirme que el sonido esté habilitado durante la navegación: *Menú → Navegación → Botón de activar/desactivar sonido* o *Menú → Navegación → Botón de Ajustes → Sonido* para una configuración de audio detallada.  
- Seleccione qué [altavoces](#voice-guidance-output) usar.
- Verifique qué [guía de voz](#voice-prompt-language) está seleccionada y asegúrese de tener una voz TTS o grabada capaz de anunciar advertencias de límite de velocidad.
- Verifique que el audio no se esté enrutando a un dispositivo de salida no deseado (por ejemplo, un auricular Bluetooth desconectado).  

Para pasos adicionales de solución de problemas, consulte la [guía de solución de problemas de navegación](../../troubleshooting/navigation.md#voice-navigation).


## TTS (Texto a voz) {#tts-text-to-speech}

OsmAnd admite voces de **Texto