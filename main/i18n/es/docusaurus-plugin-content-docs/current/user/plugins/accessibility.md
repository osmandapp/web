---
source-hash: f88b26c81cd85ceae10dd091bfd8f3587782fc1e066bd79fe00de8a7ce769b72
sidebar_position: 1
title: Accesibilidad
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


:::caution Nota
El complemento de Accesibilidad solo está disponible en la **versión de Android** de OsmAnd. La [versión de iOS](#how-to-use-ios) se basa en la configuración de accesibilidad predeterminada del sistema.
:::

## Descripción general {#overview}

La accesibilidad mejora la usabilidad para usuarios ciegos y con discapacidad visual al integrarse con las herramientas de [Accesibilidad de Android](https://www.android.com/accessibility/). El complemento ofrece **texto a voz, control por gestos, anuncios automáticos** y **retroalimentación háptica** para hacer la navegación más accesible. En iOS, OsmAnd utiliza las funciones de accesibilidad integradas de Apple, como VoiceOver.


### Cómo usar (Android) {#how-to-use-android}

![Accesibilidad](@site/static/img/plugins/Accessibility/access_turned_off.png)

***Habilitar el complemento de Accesibilidad:***

1. **Activar el complemento**: *Menú → Complementos → Accesibilidad → Habilitar*.

2. **Activar el modo de accesibilidad**:
   - Navega a *Configuración del sistema → Accesibilidad* en tu dispositivo Android.
   - Habilita TalkBack u otro lector de pantalla.

3. **Ajustar la configuración del complemento**:
   - Abre la [configuración de Accesibilidad](#plugin-settings) dentro de la aplicación OsmAnd.
   - Configura funciones como la velocidad del habla, el anuncio automático y la retroalimentación háptica.

<br/>

***Características y funcionalidad:***

- **Controles por gestos**:
   - Admite todos los [gestos estándar de OsmAnd](../map/interact-with-map#gestures).
   - Ajusta los gestos para alinearlos con las instrucciones de **TalkBack** de Android.

- **Integración con TalkBack**:
   - El lector de pantalla TalkBack ofrece guía de audio para la navegación y las interacciones del menú.
   - Obtén más información sobre los gestos de TalkBack [aquí](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- **Operaciones en segundo plano**. El audio y la retroalimentación háptica continúan incluso cuando la pantalla está apagada o bloqueada.

- **Acciones del botón de la brújula**:

| Gesto | Acción | Equivalente en TalkBack |
|-----|-----|-----|
| **Un toque** | Gira el mapa hacia el **Norte** | **Doble toque** |
| **Toque largo** | Abre la lista de [orientaciones del mapa](../map/interact-with-map.md#map-orientation-modes) | **Doble toque y mantener** |
| **Doble toque** | *No disponible en modo Accesibilidad* | *No compatible* |


### Cómo usar (iOS) {#how-to-use-ios}

La versión de iOS de OsmAnd utiliza las **herramientas de accesibilidad integradas** del sistema.

1. **Habilitar VoiceOver**:
   - Ve a *Configuración → Accesibilidad → VoiceOver*.
   - Configura los **gestos de VoiceOver** para usar con OsmAnd.

2. **Funciones compatibles**:
   - **Soporte de lector de pantalla** para interacciones con el mapa.
   - **Gestos personalizables** a través de la configuración de iOS.
   - Todos los [gestos estándar de OsmAnd](../map/interact-with-map#gestures) están disponibles.

3. **Más información**:
   - Lee sobre las funciones de accesibilidad visual de iOS [aquí](https://www.apple.com/accessibility/vision/).
   - Explora los gestos de VoiceOver para iPhone [aquí](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios).


## Parámetros de configuración requeridos {#required-setup-parameters}

Para activar las funciones de accesibilidad del dispositivo en OsmAnd, debes realizar la siguiente configuración:

1. **Habilitar el** [complemento de Accesibilidad](../plugins/index.md#enable--disable): *Menú → Complementos → Accesibilidad → Habilitar*.
2. **Habilitar el modo de accesibilidad** en tu dispositivo.
3. Configurar los [ajustes del complemento](#plugin-settings) de Accesibilidad.


## Configuración del complemento {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Accesibilidad](@site/static/img/plugins/Accessibility/access_.png)

El complemento de Accesibilidad ofrece varias configuraciones para personalizar la navegación y la interacción para usuarios con discapacidades. Estas configuraciones se aplican por [perfil](../personal/profiles.md) en OsmAnd.

| Configuración | Descripción |
|---------------------------|-------------|
| **Modo de accesibilidad** | Habilita las *funciones integradas de OsmAnd* o utiliza la **configuración del sistema**. |
| **Velocidad del habla** | Controla la *velocidad del texto a voz*, que va del **50% al 200%**. |
| [Anuncio automático inteligente](#smart-autoannounce-and-clockwise-directions) | Proporciona *guía de voz* al desviarse de la ruta. |
| **Período de anuncio automático** | Establece el tiempo mínimo entre anuncios, de **5 segundos a 5 minutos**. |
| **Estilo de dirección** | Elige entre *Lateral (8 direcciones)* o [Sentido horario](#smart-autoannounce-and-clockwise-directions) (12 direcciones)*. |
| **Indicaciones de audio** | Reproduce *guías de audio* que indican la dirección. |
| **Indicaciones hápticas** | Proporciona *retroalimentación por vibración* para giros y desviaciones. |

<!--
- **Modo de accesibilidad**. Habilita herramientas especiales que ayudan a las personas con discapacidades a interactuar con la aplicación OsmAnd. Hay tres modos: *Activado* - activa las funciones integradas de OsmAnd, *Desactivado* - desactiva todas las funciones del complemento, y *Según la configuración del sistema Android* - activa la configuración del sistema Android.

- **Velocidad del habla**. Ajusta la velocidad del habla del texto a voz, que va del 50% al 200%.

- **Anuncio automático inteligente**. Si está habilitado, recibirás anuncios de voz cuando te desvíes de la ruta establecida.

- **Período de anuncio automático**. Este es un anuncio automático de la dirección y la distancia a tu destino. Puedes seleccionar un tiempo mínimo entre anuncios, que va de 5 segundos a 5 minutos.

- **Estilo de dirección**. Elige cómo la aplicación OsmAnd te notificará sobre las direcciones. *Lateral* - indica la dirección a los lados del mundo (8 direcciones), *Sentido horario* - indica las direcciones orientadas a la esfera del reloj (12 direcciones).

- **Indicaciones de audio**. Proporciona retroalimentación al navegar indicando la dirección al punto objetivo con sonido.

- **Indicaciones hápticas**. Esta configuración proporciona retroalimentación háptica al navegar. La vibración indica la dirección al punto objetivo y las desviaciones de la ruta.
-->

<br/>

***Consejos para una accesibilidad optimizada:***

- **Lector de pantalla** - Usa TalkBack (*Android*) o VoiceOver (*iOS*) para una interacción mejorada con el mapa.
- **Navegación por audio** - Habilita el anuncio automático para recibir indicaciones de voz mientras la pantalla está apagada.
- **Retroalimentación háptica** - Ideal para entornos de baja visibilidad o cuando las guías de audio no son prácticas.


#### Anuncio automático inteligente y direcciones en sentido horario {#smart-autoannounce-and-clockwise-directions}

La función de **Anuncio automático inteligente** proporciona *notificaciones de audio* cuando te desvías de la ruta planificada, mientras que el **Estilo de dirección en sentido horario** ofrece *guías de navegación basadas en la esfera del reloj*. Estas funciones están diseñadas para apoyar a los usuarios con discapacidad visual que dependen de la *guía de voz*.

- Si **TalkBack no está habilitado**, tanto el *Anuncio automático inteligente* como las *Direcciones en sentido horario* solo mostrarán *notificaciones de texto* en la pantalla.

- Las **notificaciones de voz** se activan solo cuando *TalkBack* está habilitado en la **configuración del sistema del dispositivo**.

- Establece el **Período de anuncio automático** (por ejemplo, *10 segundos*) para controlar la frecuencia de los anuncios.


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Configuración global](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)

> *Última actualización: Febrero de 2025*