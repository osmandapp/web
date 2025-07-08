---
source-hash: 23fa8491d55d8126a921b95c8d650a5b5c13376f6c4a630b3c3446e35d19d2c0
sidebar_position: 6
title:  Mensajes de voz / Notificaciones
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

La función de navegación por voz de OsmAnd proporciona instrucciones y alertas habladas en tiempo real que le ayudan a mantenerse informado y seguro mientras se desplaza. Puede adaptar la guía a sus preferencias y necesidades. Para ello, seleccione un perfil de voz adecuado, ya sea un [motor de texto a voz (TTS)](#tts-text-to-speech) que pueda anunciar dinámicamente nombres de calles, distancias y límites de velocidad, o una [voz pregrabada](#recorded-voice-prompts) que ofrezca instrucciones concisas.

Además de las indicaciones giro a giro, la navegación por voz de OsmAnd puede notificarle sobre próximos puntos de interés, cambios en las condiciones del tráfico y cuando excede un límite de velocidad preestablecido. Para obtener más información sobre cómo personalizar estas alertas, consulte [Configuración de la hora de los anuncios](#announcement-time) y [Advertencias de límite de velocidad](#speed-limit).

Con la combinación adecuada de opciones de voz, configuraciones de alerta y ajustes de sonido del dispositivo, recibirá información de navegación oportuna y clara durante toda su ruta.

:::note

- <Translate android="true" ids="voice_announces_info"/>
- Las notificaciones de texto reflejan completamente la hora de activación y los mensajes de las indicaciones de voz.

:::


## Configuración de mensajes de voz {#setting-up-voice-prompts}

OsmAnd ofrece varias opciones para controlar los mensajes de voz para que pueda seguir su ruta con comodidad. Para configurar estos ajustes, comience en las secciones de aplicación apropiadas.

- Active los mensajes de voz desde la sección [Navegación](../guidance/navigation-settings.md) tocando **Ajustes**. También puede habilitar y configurar los mensajes de voz a través de *Configurar perfil* y *Ajustes de navegación*.
- Active o desactive los mensajes de voz usando *Menú → Navegación →* toque *botón Sonido*,
    o *Menú → Navegación →* botón Ajustes *→ Sonido →* activar/desactivar.

Para obtener más información sobre cómo y cuándo se activan los mensajes de voz, consulte la documentación de [Activación de mensajes de voz de navegación](../../../technical/algorithms/voice-prompt-triggering.md).


### Configuración de voz {#voice-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Configuración de navegación por voz Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> botón* *(o <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Elegir perfil → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Configuración de navegación por voz iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

**[Idioma](#voice-prompt-language)**. Seleccione su idioma y tipo preferidos.

**Anuncio**. Le permite configurar los siguientes tipos de avisos:

- *Nombres de calles (TTS), números de salida, advertencias de tráfico, pasos de peatones* y *túneles.*
- *[Radares de velocidad](#speed-cameras)*.
- También configure el **[widget de alerta](../../widgets/nav-widgets.md#alert-widget)** para usar con los anuncios.

**Puntos de usuario**:

- Habilite los mensajes de voz para los [puntos de ruta](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) preestablecidos y añadidos, [favoritos](../../personal/favorites.md) o [PDI](../../map/point-layers-on-map.md#points-of-interest-pois). Mientras conduce, los puntos seleccionados se anunciarán cuando se acerque o pase por ellos.

| Tipo de aviso | Tiempo de espera [s]:<br/>Distancia de espera correspondiente @ Velocidad predeterminada [m] | Límite |
| :- | :- | :- |
| Aproximación | **60 s:**<br/>Conducción: 750 m<br/>Ciclismo: 167 m<br/>Caminata: 67 m | No más de 1 punto a la vez |
| Paso | **15 s:**<br/>Conducción: 188 m<br/>Ciclismo: 42 m<br/>Caminata: 17 m | No más de 3 puntos a la vez |

[**Límite de velocidad**](#speed-limit):

- *Anunciar cuando se excede*.
- *Tolerancia de límite de velocidad*.

**Otros**:

- *Anunciar pérdida y recuperación de señal GPS*. OsmAnd anuncia si se pierde la señal GPS en el dispositivo.
- *Anunciar recálculo de ruta*. OsmAnd informa el recálculo de ruta en caso de [desviación o movimiento en dirección inversa](./navigation-settings.md#recalculate-route).
- *Anunciar desviación de la ruta*. Recibirá información sobre las desviaciones de la ruta de acuerdo con los [parámetros establecidos](./navigation-settings.md#recalculate-route).

**Opciones**:

- *Repetir instrucciones de navegación*. Le permite repetir las instrucciones de navegación a intervalos regulares de 1 min a 30 min. O manualmente: si se pierde un mensaje de voz, puede volver a escucharlo simplemente tocando [la flecha de giro actual](../../widgets/nav-widgets.md#next-turn) en la pantalla de la aplicación.
- *[Tiempo de anuncio](#announcement-time)*.

**Salida** (*solo Android*):

- *[Salida de guía de voz](#voice-guidance-output)*.
- *Pausar música*. Los mensajes de voz detienen la reproducción de música por un tiempo.


### Radares de velocidad {#speed-cameras}

![Temporización de anuncio de navegación por voz Android](@site/static/img/navigation/voice/voice_promt-speed-cameras.png)

Las [alertas de radares de velocidad](../../personal/global-settings.md#uninstall-speed-cameras) le permiten activar o desactivar los PDI con radares de velocidad. Deberá reiniciar la aplicación OsmAnd para aplicar los cambios.

En algunos países o regiones, el uso de aplicaciones de advertencia de radares de velocidad es ilegal. Debe elegir según las leyes de su país. Seleccione **Mantener activo**, y recibirá alertas y notificaciones de radares de velocidad. Seleccione **Desinstalar** y todos los datos relacionados con los radares de velocidad, como advertencias, notificaciones y PDI, se eliminarán hasta que reinstale completamente OsmAnd.


### Límite de velocidad {#speed-limit}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navegación por voz](@site/static/img/navigation/voice/voice_promt_speed_limit_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navegación por voz](@site/static/img/navigation/voice/voice_promt_speed_limit_ios.png)

</TabItem>

</Tabs>

La opción **Límite de velocidad** permite a OsmAnd informarle cuando su velocidad actual excede un umbral especificado. Los datos sobre los límites de velocidad legales máximos se obtienen de OpenStreetMap.

**Anunciar cuando se excede**
La *tolerancia de límite de velocidad* le permite seleccionar una desviación permitida (por ejemplo, de -10 km/h a +20 km/h) del [límite de velocidad legal máximo](https://wiki.openstreetmap.org/wiki/Key:maxspeed) en la carretera actual. Cuando su velocidad excede esta tolerancia, OsmAnd emite un mensaje de voz.

*Reglas para activar los mensajes de voz* cuando se excede el límite de velocidad:

- *Advertencia inicial*. Al detectar que excede el límite de velocidad, OsmAnd espera 5 segundos antes de emitir la primera advertencia de voz.
- *Retraso de repetición de anuncio*. Si continúa excediendo la velocidad, la siguiente advertencia se retrasa 120 segundos para evitar notificaciones demasiado frecuentes.
- *Restablecimiento del temporizador*. El temporizador se restablece si permanece dentro del límite legal durante 30 segundos. Cualquier exceso de velocidad adicional esperará nuevamente 5 segundos antes de que suene la siguiente advertencia.

Esta configuración de **tolerancia de límite de velocidad** afecta la velocidad que se muestra en la parte de *advertencia* del [widget de velocímetro](../../widgets/info-widgets.md#speedometer) en la aplicación OsmAnd, [Android Auto](../../navigation/auto-car.md#speedometer) y [CarPlay](../../navigation/car-play.md#speedometer).


### Tiempo de anuncio {#announcement-time}

![Temporización de anuncio de navegación por voz Android](@site/static/img/navigation/voice/voice_promt-announ-time.png)

El tiempo de anuncio de los diferentes mensajes de voz depende del perfil seleccionado, el tipo de mensaje, la velocidad de navegación actual y la velocidad de navegación predeterminada. Con esta configuración, puede cambiar la distancia antes de que se activen los mensajes de voz aplicando un multiplicador de distancia: *<Translate android="true" ids="arrival_distance_factor_normally" />* - 1.0, *<Translate android="true" ids="arrival_distance_factor_early" />* - 1.5, *<Translate android="true" ids="arrival_distance_factor_late" />* - 0.5, *<Translate android="true" ids="arrival_distance_factor_at_last" />* - 0.25.

En la lista desplegable *Intervalos de tiempo y distancia*, puede ver información detallada sobre la activación de los mensajes para los diferentes multiplicadores de distancia. Para obtener más información, consulte la [Activación de mensajes de voz de navegación](../../../technical/algorithms/voice-prompt-triggering.md).


### Salida de guía de voz {#voice-guidance-output}

<InfoAndroidOnly/>

![Navegación por voz Android](@site/static/img/navigation/voice/voice_promt-1.png)

Para evitar la reproducción de audio en el mismo flujo de salida al mismo tiempo, el enfoque de audio se implementa en Android. OsmAnd utilizará el altavoz seleccionado de la lista en esta configuración para la salida de audio. Otras aplicaciones pausarán la reproducción o bajarán el volumen para que le resulte más fácil escuchar los mensajes de voz de OsmAnd.

- Audio multimedia/de navegación.
- Audio de notificación.
- Audio de llamada telefónica (para interrumpir [equipos de sonido de coche](../auto-car.md) Bluetooth).


### Prueba de mensajes de voz {#testing-of-voice-prompts}

Puede probar los mensajes de voz con:

- [Simular navegación](../../navigation//setup/route-navigation.md#simulated-navigation). Establezca una ruta e inicie la simulación: *Menú de navegación → Ajustes → Simular navegación*.

- [Probar mensajes de voz](../../plugins/development.md#application-testing) (*solo Android*). Utilice el *plugin de desarrollo* para probar los mensajes de voz:
    - Vaya a *Menú → Plugins → Habilitar desarrollo de OsmAnd*.
    - Vaya a *Ajustes → Probar mensajes de voz*.
    - Seleccione un idioma y compruebe si el sistema reproduce los mensajes correctamente.


### Solución de problemas de audio {#solving-audio-issues}

Si no escucha los **mensajes de voz** o las [advertencias de límite de velocidad](#speed-limit):

- Asegúrese de que el volumen de su dispositivo esté activado y subido.
- Confirme que el sonido está habilitado durante la navegación: *Menú → Navegación → Botón de sonido On/Off* o *Menú → Navegación → Botón de ajustes → Sonido* para una configuración de audio detallada.
- Seleccione qué [altavoces](#voice-guidance-output) usar.
- Compruebe qué [guía de voz](#voice-prompt-language) está seleccionada y asegúrese de tener un TTS o una voz grabada capaz de anunciar advertencias de límite de velocidad.
- Verifique que el audio no se dirija a un dispositivo de salida no deseado (por ejemplo, unos auriculares Bluetooth desconectados).

Para obtener pasos de solución de problemas adicionales, consulte la [guía de solución de problemas de navegación](../../troubleshooting/navigation.md#voice-navigation).


## TTS (Texto a voz) {#tts-text-to-speech}

OsmAnd admite voces de **Texto a voz (TTS)**, que proporcionan una guía de voz dinámica y detallada, incluidas instrucciones de giro, nombres de calles y anuncios de PDI. Las voces TTS se incluyen en la aplicación, pero requieren un [motor de texto a voz](https://en.wikipedia.org/wiki/Speech_synthesis) instalado en el dispositivo.

La mayoría de los dispositivos Android e iOS modernos incluyen un motor TTS predeterminado, pero se pueden instalar motores e idiomas adicionales por separado.

Para obtener una lista de los **motores TTS disponibles e idiomas compatibles** en Android, consulte:
[Lista de idiomas con motores TTS disponibles en Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

***Configuración de TTS en su dispositivo:***

**Android:**

1. Abra Ajustes.
2. Navegue a *Accesibilidad → Salida de texto a voz*.
3. Seleccione un **motor TTS** (Google TTS u otro motor instalado).
4. Elija un **idioma preferido** (algunos pueden requerir descargas adicionales).
5. Ajuste la velocidad de habla, el tono y la velocidad de reproducción según sea necesario.
6. Toque **Escuchar ejemplo** para probar la salida de voz.

Para más detalles, consulte:
[Soporte de Google – Configuración de texto a voz de Android](https://support.google.com/accessibility/android/answer/6006983).

**iOS:**

1. Abra Ajustes.
2. Vaya a *Accesibilidad → Contenido hablado*.
3. Toque **Voces** para seleccionar una voz preferida.
4. Ajuste la **Velocidad de habla**, las **Pronunciaciones** y otras configuraciones.
5. Pruebe la voz usando **Leer selección** o **Leer pantalla**.

Para más detalles, consulte:
[Soporte de Apple – Configuración de voz del iPhone](https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios#:~:text=Go%20to%20Settings%20%3E%20Accessibility%20%3E%20Spoken,the%20top%20of%20the%20screen).

***Prueba de mensajes de voz:***

Para comprobar si el TTS funciona correctamente en OsmAnd:

- Habilite el **Plugin de desarrollo**: *Menú → Ajustes → Plugins → Desarrollo de OsmAnd*.
- Abra [Probar mensajes de voz](../../plugins/development.md#application-testing): *Menú → Ajustes → Plugins → Desarrollo de OsmAnd → Probar mensajes de voz*.

Para solucionar problemas, consulte:
[Solución de problemas de navegación por voz](../../troubleshooting/navigation.md#voice-navigation).


### Idioma de los mensajes de voz {#voice-prompt-language}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces,shared_string_language"/>*

![Navegación por voz Android](@site/static/img/navigation/voice/voice_promt-tts.png) ![Navegación por voz Android](@site/static/img/navigation/voice/voice_promt-recorded.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces,shared_string_language"/>*

![Configuración de navegación por voz iOS](@site/static/img/navigation/voice/voice_promt-tts-ios.png)

</TabItem>

</Tabs>

OsmAnd proporciona dos tipos de mensajes de voz:

- **<Translate android="true" ids="tts_title"/>**
    - Utiliza el motor TTS del dispositivo para generar mensajes de voz dinámicamente.
    - Lee nombres de calles, instrucciones de giro, nombres de PDI y otros detalles.
    - Admite varios idiomas y configuraciones de pronunciación.
    - Se puede personalizar con la velocidad de habla, el tono y la configuración de pronunciación.

- **<Translate android="true" ids="shared_string_recorded"/>** (*solo Android*)
    - Utiliza mensajes de voz pregrabados para la navegación.
    - Suena más natural que el TTS, pero tiene limitaciones.
    - No lee nombres de calles ni nombres de PDI.
    - Solo proporciona instrucciones básicas de giro.

> *Se recomienda TTS para una guía de navegación detallada.*

#### Configuración de mensajes de voz a nivel de sistema {#system-level-voice-prompt-settings}

El comportamiento de los mensajes de voz, incluida la *velocidad de reproducción, el tono y las pausas*, solo se puede ajustar en la configuración del sistema del dispositivo.

**Android:**

1. Abra *Ajustes del dispositivo → Accesibilidad → Salida de texto a voz*.
2. Elija su motor TTS y su idioma preferidos.
3. Ajuste la velocidad de habla, el tono y la velocidad de reproducción.

**iOS:**

1. Abra *Ajustes del dispositivo → Accesibilidad → Contenido hablado*.
2. Ajuste: idioma, voces, velocidad de habla, pronunciaciones.

> *Para voces adicionales, descargue paquetes de idiomas desde la configuración del sistema.*


#### Idiomas TTS disponibles {#available-tts-languages}

Actualmente hay un total de 45 idiomas. No todos los idiomas que se enumeran a continuación pueden ser compatibles con todos los motores TTS. Consulte [aquí](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

| | |
| :--- | :--- |
| **A** | Árabe |
| **B** | Bielorruso, Búlgaro |
| **C** | Catalán, Chino, Chino (Hong Kong), Chino (Tradicional), Croata, Checo |
| **D** | Danés, Holandés |
| **E** | Inglés, Inglés (Reino Unido), Estonio |
| **F** | Finlandés, Francés |
| **G** | Alemán, Alemán (informal), Griego, Guaraní |
| **H** | Hindi, Húngaro, Húngaro (formal), Hebreo |
| **I** | Indonesio, Italiano |
| **J** | Japonés |
| **K** | Coreano |
| **L** | Letón |
**N** | Noruego Bokmål |
| **P** | Persa, Polaco, Portugués, Portugués (Brasil) |
| **R** | Rumano, Ruso |
| **S** | Sardo, Serbio (Cirílico), Eslovaco, Esloveno, Español, Español (Argentina), Suajili, Sueco |
| **T** | Turco |
| **U** | Ucraniano |
| **V** | Vietnamita |


## Mensajes de voz grabados {#recorded-voice-prompts}

### Descargar paquetes de voz {#download-voice-packages}

<InfoAndroidOnly />

El uso de voces grabadas en OsmAnd solo debe ser una alternativa. Son bastante limitadas y no pueden pronunciar nombres de calles, nombres de lugares, etc. Puede descargar mensajes de voz de dos conjuntos diferentes de la lista.

- El primer tipo, estos son los recomendados:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,other_location,index_name_tts_voice"/>*

    ![Configuración de navegación por voz Android](@site/static/img/navigation/voice/TTS-preferred-1.png) ![Configuración de navegación por voz Android](@site/static/img/navigation/voice/TTS-preferred-2.png)

- El segundo tipo son mensajes de voz grabados, con un conjunto incompleto de características:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

    ![Configuración de navegación por voz Android](@site/static/img/navigation/voice/TTS-recorded.png)

### Modos de pitido {#beep-modes}

<InfoAndroidOnly />

Puede configurar un perfil de OsmAnd para que emita pitidos en lugar de hablar, de forma similar a un ciclocomputador. Hay tres patrones básicos: *mínimo*, *simple* y *complejo*. Los patrones simple y complejo tienen variantes *fuertes*, que serán considerablemente más fáciles de escuchar en un entorno ruidoso, pero pueden sonar desagradablemente ásperas.

*<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

- **Mínimo**. Adecuado para seguir una ruta conocida a pie con mínimas distracciones, este patrón le avisará al pasar por destinos intermedios, favoritos y PDI, y cuando se haya desviado o regresado a la ruta. No proporcionará ninguna advertencia de audio para los giros.
- **Simple**. Además de las alertas para destinos, favoritos, PDI y otros, el patrón simple le avisa con un pitido más largo cuando necesita girar.
- **Complejo**. Adecuado para el ciclismo de carretera, el patrón complejo utiliza pitidos de diferentes longitudes y tonos para informarle sobre los próximos giros.
    - Un pitido bajo significa giro a la izquierda, mientras que un pitido alto significa giro a la derecha. Una serie de pitidos de tono medio representa la salida a tomar en una rotonda (glorieta). Los tres tonos en secuencia representan un giro en U. En todos estos casos, los pitidos cortos significan prepararse para hacer algo, mientras que los pitidos largos significan hacer algo ahora.


## Notificaciones de texto {#text-notifications}

Una vez que inicie una ruta, puede ver la información en el menú desplegable del sistema en la lista de notificaciones. Las notificaciones silenciosas de OsmAnd contienen información como instrucciones giro a giro, flechas de dirección de giro, hora de llegada y tiempo restante, velocidad actual y distancia al destino.

![Notificación de ruta de navegación Android](@site/static/img/navigation/route/navigation_notifications_android.png)

Botones activos en el menú desplegable del sistema para su navegación:

- *<Translate android="true" ids="stop_navigation_service"/>*. Permite detener su navegación.
- *<Translate android="true" ids="shared_string_pause"/>*. Permite pausar su navegación.
- *<Translate android="true" ids="shared_string_resume"/>*. Permite reanudar su navegación.

### Configurar notificaciones {#configure-notifications}

Puede cambiar la configuración de notificaciones para la aplicación OsmAnd en la configuración del sistema de su dispositivo. Las notificaciones se pueden mostrar en la pantalla de bloqueo, la pantalla de inicio, en el menú desplegable o en la parte superior de la aplicación.

Lea cómo se implementa el control de notificaciones en Android en este [artículo](https://support.google.com/android/answer/9079661?hl=en#zippy=%2Cturn-notifications-on-or-off-for-certain-apps%2Cclear-notifications). Para iOS - [aquí](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.).


## Control de pantalla {#screen-control}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,screen_control"/>*

![Menú de control de pantalla Android](@site/static/img/navigation/route/screen_control_android.png)

Puede controlar la pantalla de su dispositivo para ahorrar energía. Este modo tiene dos configuraciones generales: *<Translate android="true" ids="screen_timeout"/>* y *<Translate android="true" ids="turn_screen_on"/>*.

### Tiempo de espera de pantalla {#screen-timeout}

1. **<Translate android="true" ids="system_screen_timeout"/>**. La pantalla se apaga según la configuración del sistema de su dispositivo. El botón *Cambiar configuración* proporciona acceso rápido al menú del sistema, como *Pantalla y brillo*, donde puede ajustar el tiempo de espera de la pantalla.

    ![Control de pantalla de tiempo de espera del sistema Android](@site/static/img/navigation/route/system_timeout_android.png)

2. **<Translate android="true" ids="wake_time"/>**. Si *Mantener pantalla encendida* está activado, la pantalla del dispositivo no aplica un tiempo de espera después de encenderse. Si está desactivado, puede establecer el tiempo después del cual la pantalla del dispositivo se apagará si no interactúa con ella, de 5 a 60 segundos.

    ![Tiempo de espera después de encender Android](@site/static/img/navigation/route/timeout_after_wakeup_android.png) ![Tiempo de espera después de encender Android](@site/static/img/navigation/route/timeout_after_wakeup_1_android.png)

### Encender pantalla {#turn-screen-on}

![encender pantalla Android](@site/static/img/navigation/voice/voice_navigation_Turnscreenon.png)

Seleccione las opciones de activación de la pantalla y asegúrese de que OsmAnd permanezca en primer plano cuando el dispositivo esté bloqueado.

- *<Translate android="true" ids="turn_screen_on_proximity_sensor"/>*. <Translate android="true" ids="turn_screen_on_sensor_descr"/>
- *<Translate android="true" ids="turn_screen_on_navigation_instructions"/>*. <Translate android="true" ids="turn_screen_on_navigation_instructions_descr"/>
- *<Translate android="true" ids="turn_screen_on_power_button"/>*. <Translate android="true" ids="turn_screen_on_power_button_descr"/>


## Artículos relacionados {#related-articles}

- [Parámetros de ruta](../routing/osmand-routing.md#routing-types)
- [Preparación de ruta](../setup/route-navigation.md)
- [Navegación por pista](../setup/gpx-navigation.md)
- [Navegación por marcadores](../setup/markers-navigation.md)
- [Detalles de la ruta](../setup/route-details.md)
- [Configuración de navegación](./navigation-settings.md)
- [Pantalla del mapa durante la navegación](./map-during-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

### Problemas comunes y soluciones {#common-issues-and-solutions}

1. [Problemas de audio.](#solving-audio-issues)
2. [Prueba de mensajes de voz.](#testing-of-voice-prompts)
3. [¿Por qué debería usar una voz TTS en lugar de una voz grabada?](../../troubleshooting/navigation.md#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice)
4. [¿El TTS no funciona correctamente? Siga estos pasos para solucionarlo.](../../troubleshooting/navigation.md#tts-does-not-function-properly-follow-these-steps-to-fix-it)

> *Última actualización: marzo de 2025*