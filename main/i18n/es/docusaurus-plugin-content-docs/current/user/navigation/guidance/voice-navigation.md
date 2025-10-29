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

- *Indicaciones giro a giro, Nombres de calles (TTS), Números de salida, Advertencias de tráfico, Pasos de peatones* y *Túneles.*
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

OsmAnd admite voces de **Texto a voz (TTS)**, que proporcionan una guía de voz dinámica y detallada, que incluye instrucciones de giro, nombres de calles y anuncios de PDI. Las voces TTS están incluidas en la aplicación, pero requieren un [motor de texto a voz](https://en.wikipedia.org/wiki/Speech_synthesis) instalado en el dispositivo.  

La mayoría de los dispositivos Android e iOS modernos incluyen un motor TTS predeterminado, pero se pueden instalar motores e idiomas adicionales por separado.  

Para obtener una lista de los **motores TTS disponibles y los idiomas admitidos** en Android, consulte:
[Lista de idiomas con motores TTS disponibles en Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

***Configuración de TTS en su dispositivo:***

**Android:**

1. Abra Ajustes.
2. Vaya a *Accesibilidad → Salida de texto a voz*.
3. Seleccione un **motor TTS** (Google TTS u otro motor instalado).
4. Elija un **idioma preferido** (algunos pueden requerir descargas adicionales).
5. Ajuste la velocidad del habla, el tono y la velocidad de reproducción según sea necesario.
6. Toque **Escuchar un ejemplo** para probar la salida de voz.

Para más detalles, consulte:  
[Soporte de Google – Ajustes de texto a voz de Android](https://support.google.com/accessibility/android/answer/6006983).

**iOS:**

1. Abra Ajustes.
2. Vaya a *Accesibilidad → Contenido hablado*.
3. Toque **Voces** para seleccionar una voz preferida.
4. Ajuste la **Velocidad de habla**, **Pronunciaciones** y otros ajustes.
5. Pruebe la voz usando **Leer selección** o **Leer pantalla**.

Para más detalles, consulte:  
[Soporte de Apple – Ajustes de voz del iPhone](https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios#:~:text=Go%20to%20Settings%20%3E%20Accessibility%20%3E%20Spoken,the%20top%20of%20the%20screen).

***Prueba de las indicaciones de voz:***

Para verificar si TTS funciona correctamente dentro de OsmAnd:

- Habilite el **Plugin de desarrollo**: *Menú → Ajustes → Plugins → Desarrollo de OsmAnd*.
- Abra [Probar indicaciones de voz](../../plugins/development.md#application-testing): *Menú → Ajustes → Plugins → Desarrollo de OsmAnd → Probar indicaciones de voz*.

Para la solución de problemas, consulte:  
[Solución de problemas de navegación por voz](../../troubleshooting/navigation.md#voice-navigation).


### Idioma de las indicaciones de voz {#voice-prompt-language}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces,shared_string_language"/>*

![Voice Navigation Android](@site/static/img/navigation/voice/voice_promt-tts.png)  ![Voice Navigation Android](@site/static/img/navigation/voice/voice_promt-recorded.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces,shared_string_language"/>*

![Voice Navigation settings iOS](@site/static/img/navigation/voice/voice_promt-tts-ios.png)

</TabItem>

</Tabs>

OsmAnd ofrece dos tipos de indicaciones de voz:

- **<Translate android="true" ids="tts_title"/>**
    - Utiliza el motor TTS del dispositivo para generar indicaciones de voz dinámicamente.
    - Lee nombres de calles, instrucciones de giro, nombres de PDI y otros detalles.
    - Admite múltiples idiomas y ajustes de pronunciación.
    - Se puede personalizar con ajustes de velocidad de habla, tono y pronunciación.

- **<Translate android="true" ids="shared_string_recorded"/>** (*solo Android*)
    - Utiliza indicaciones de voz pregrabadas para la navegación.
    - Suena más natural que el TTS pero tiene limitaciones.
    - No lee nombres de calles ni nombres de PDI.
    - Solo proporciona instrucciones básicas de giro.

> *Se recomienda TTS para una guía de navegación detallada.*


### Ajustes de indicaciones de voz a nivel de sistema {#system-level-voice-prompt-settings}

El comportamiento de las indicaciones de voz, incluida la *velocidad de reproducción, el tono y las pausas*, solo se puede ajustar en la configuración del sistema del dispositivo.

**Android:**

1. Abra *Ajustes del dispositivo → Accesibilidad → Salida de texto a voz*.
2. Elija su motor TTS e idioma preferidos.
3. Ajuste la velocidad del habla, el tono y la velocidad de reproducción.

**iOS:**

1. Abra *Ajustes del dispositivo → Accesibilidad → Contenido hablado*.
2. Ajuste: idioma, voces, velocidad de habla, pronunciaciones.

> *Para voces adicionales, descargue paquetes de idioma desde los ajustes del sistema.*


### Idiomas TTS disponibles {#available-tts-languages}

Actualmente hay un total de 45 idiomas. No todos los idiomas enumerados a continuación pueden ser compatibles con todos los motores TTS. Consulte [aquí](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

| | |
| :--- | :--- |
| **А** | Árabe |
| **B** | Bielorruso, Búlgaro |
| **C** | Catalán, Chino, Chino (Hong Kong), Chino (Tradicional), Croata, Checo |  
| **D** | Danés, Neerlandés |
| **E** | Inglés, Inglés (Reino Unido), Estonio |
| **F** | Finlandés, Francés |
| **G** | Alemán, Alemán (informal), Griego, Guaraní |
| **H** | Hindi, Húngaro, Húngaro (formal), Hebreo |
| **I** | Indonesio, Italiano |
| **J** | Japonés |
| **K** | Coreano  |
| **L** | Letón |
| **N** | Noruego Bokmål  |
| **P** | Persa, Polaco, Portugués, Portugués (Brasil) |  
| **R** | Rumano, Ruso  |
| **S** | Sardo, Serbio (Cirílico), Eslovaco, Esloveno, Español, Español (Argentina), Suajili, Sueco  |
| **T** | Turco  |
| **U** | Ucraniano  |
| **V** | Vietnamita  |


## Indicaciones de voz grabadas {#recorded-voice-prompts}

### Descargar paquetes de voz {#download-voice-packages}

<InfoAndroidOnly />

El uso de voces grabadas en OsmAnd debe ser solo una alternativa. Son bastante limitadas y no pueden pronunciar nombres de calles, nombres de lugares, etc. Puede descargar indicaciones de voz de dos conjuntos diferentes de la lista.

- El primer tipo, estos son los recomendados:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,other_location,index_name_tts_voice"/>*

    ![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-preferred-1.png)  ![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-preferred-2.png)  

- El segundo tipo son indicaciones de voz grabadas, con un conjunto incompleto de funciones:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*  

    ![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-recorded.png)  


### Modos de pitido {#beep-modes}

<InfoAndroidOnly />

Puede configurar un perfil de OsmAnd para que emita pitidos en lugar de hablar, de manera similar a un ciclocomputador. Hay tres patrones básicos: *mínimo*, *simple* y *complejo*. Los patrones simple y complejo tienen variantes *fuertes*, que serán considerablemente más fáciles de escuchar en un entorno ruidoso pero pueden sonar desagradablemente ásperas.
  
*<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*  

- **Mínimo**. Adecuado para seguir una ruta conocida a pie con mínimas distracciones, este patrón le alertará al pasar por destinos intermedios, favoritos y PDI, y cuando se haya desviado o regresado a la ruta. No proporcionará ninguna advertencia de audio para los giros.
- **Simple**. Además de las alertas para destinos, favoritos, PDI y otros, el patrón simple le alerta con un pitido más largo cuando necesita girar.
- **Complejo**. Adecuado para el ciclismo de carretera, el patrón complejo utiliza pitidos de diferentes longitudes y tonos para informarle sobre los próximos giros.
    - Un pitido bajo significa giro a la izquierda, mientras que un pitido alto significa giro a la derecha. Una serie de pitidos de tono medio representa la salida a tomar en una rotonda. Los tres tonos en secuencia representan un giro en U. En todos estos casos, los pitidos cortos significan prepararse para hacer algo, mientras que los pitidos largos significan hacer algo ahora.


## Notificaciones de texto {#text-notifications}

<InfoAndroidOnly />

Una vez que inicia una ruta, puede ver la información en el menú desplegable del sistema en la lista de notificaciones. Las notificaciones silenciosas de OsmAnd contienen información como instrucciones giro a giro, flechas de dirección de giro, hora de llegada y tiempo restante, velocidad actual y distancia al destino.  

![Navigation route Notification Android](@site/static/img/navigation/route/navigation_notifications_android.png)

Botones activos en el menú desplegable del sistema para su navegación:

- *<Translate android="true" ids="stop_navigation_service"/>*. Permite detener su navegación.
- *<Translate android="true" ids="shared_string_pause"/>*. Permite pausar su navegación.
- *<Translate android="true" ids="shared_string_resume"/>*. Permite reanudar su navegación.  

### Configurar notificaciones {#configure-notifications}

Puede cambiar la configuración de notificaciones para la aplicación OsmAnd en la configuración del sistema de su dispositivo. Las notificaciones se pueden mostrar en la pantalla de bloqueo, la pantalla de inicio, en el menú desplegable o en la parte superior de la aplicación.  

Lea sobre cómo se implementa el control de notificaciones en Android en este [artículo](https://support.google.com/android/answer/9079661?hl=en#zippy=%2Cturn-notifications-on-or-off-for-certain-apps%2Cclear-notifications). Para iOS - [aquí](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.).


## Control de pantalla {#screen-control}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,screen_control"/>*

![Screen control menu Android](@site/static/img/navigation/route/screen_control_android.png)

Puede controlar la pantalla de su dispositivo para ahorrar energía. Este modo tiene dos ajustes generales: *<Translate android="true" ids="screen_timeout"/>* y *<Translate android="true" ids="turn_screen_on"/>*.

### Tiempo de espera de la pantalla {#screen-timeout}

1. **<Translate android="true" ids="system_screen_timeout"/>**. La pantalla se apaga dependiendo de la configuración del sistema de su dispositivo. El botón *Cambiar ajustes* proporciona acceso rápido al menú del sistema, como *Pantalla y brillo*, donde puede ajustar el tiempo de espera de la pantalla.

    ![System timeout screen control Android](@site/static/img/navigation/route/system_timeout_android.png)

2. **<Translate android="true" ids="wake_time"/>**. Si *Mantener pantalla encendida* está activado, la pantalla del dispositivo no aplica un tiempo de espera después de activarse. Si está desactivado, puede establecer el tiempo después del cual la pantalla del dispositivo se apagará si no interactúa con ella, de 5 a 60 segundos.  

    ![Timeout after wakeup Android](@site/static/img/navigation/route/timeout_after_wakeup_android.png) ![Timeout after wakeup Android](@site/static/img/navigation/route/timeout_after_wakeup_1_android.png)

### Encender pantalla {#turn-screen-on}

![turn screen on Android](@site/static/img/navigation/voice/voice_navigation_Turnscreenon.png)

Seleccione las opciones de activación de la pantalla y asegúrese de que OsmAnd permanezca en primer plano cuando el dispositivo esté bloqueado.

- *<Translate android="true" ids="turn_screen_on_proximity_sensor"/>*. <Translate android="true" ids="turn_screen_on_sensor_descr"/>
- *<Translate android="true" ids="turn_screen_on_navigation_instructions"/>*. <Translate android="true" ids="turn_screen_on_navigation_instructions_descr"/>
- *<Translate android="true" ids="turn_screen_on_power_button"/>*. <Translate android="true" ids="turn_screen_on_power_button_descr"/>


## Artículos relacionados {#related-articles}

- [Parámetros de ruta](../routing/osmand-routing.md#routing-types)
- [Preparación de la ruta](../setup/route-navigation.md)
- [Navegación por track](../setup/gpx-navigation.md)
- [Navegación por marcadores](../setup/markers-navigation.md)
- [Detalles de la ruta](../setup/route-details.md)
- [Ajustes de navegación](./navigation-settings.md)
- [Pantalla del mapa durante la navegación](./map-during-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

### Problemas comunes y soluciones {#common-issues-and-solutions}

1. [Problemas de audio.](#solving-audio-issues)
2. [Prueba de las indicaciones de voz.](#testing-of-voice-prompts)
3. [¿Por qué debería usar una voz TTS en lugar de una voz grabada?](../../troubleshooting/navigation.md#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice)
4. [¿El TTS no funciona correctamente? Siga estos pasos para solucionarlo.](../../troubleshooting/navigation.md#tts-does-not-function-properly-follow-these-steps-to-fix-it)