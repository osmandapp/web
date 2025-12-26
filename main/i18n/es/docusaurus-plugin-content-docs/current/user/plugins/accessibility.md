---
source-hash: c74ee94364343aaac19d958ab09b3dda962064b21f0cad21692d75b92ec0bf3b
sidebar_position: 1
title:  Accesibilidad
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
El plugin de Accesibilidad solo está disponible en la **versión para Android** de OsmAnd. La [versión para iOS](#how-to-use-ios) se basa en los ajustes de accesibilidad predeterminados del sistema.
:::

## Resumen {#overview}

La accesibilidad mejora la usabilidad para usuarios ciegos y con discapacidad visual al integrarse con las herramientas de [Accesibilidad de Android](https://www.android.com/accessibility/). El plugin ofrece **texto a voz, control por gestos, anuncios automáticos** y **retroalimentación háptica** para hacer la navegación más accesible. En iOS, OsmAnd utiliza las funciones de accesibilidad integradas de Apple, como VoiceOver.


### Cómo usar (Android) {#how-to-use-android}

![Accessibility](@site/static/img/plugins/Accessibility/access_turned_off.png)

***Activar el plugin de Accesibilidad:***  

1. **Activar el plugin**: *Menú → Plugins → Accesibilidad → Activar*.

2. **Activar el modo de accesibilidad**:  
   - Vaya a *Ajustes del sistema → Accesibilidad* en su dispositivo Android.
   - Active TalkBack u otro lector de pantalla.

3. **Ajustar la configuración del plugin**:  
   - Abra los [ajustes de Accesibilidad](#plugin-settings) dentro de la aplicación OsmAnd.
   - Configure funciones como la velocidad de voz, el anuncio automático y la retroalimentación háptica.

<br/>

***Características y funcionalidades:***

- **Controles por gestos**:
   - Soporta todos los [gestos estándar de OsmAnd](../map/interact-with-map.md#gestures).
   - Ajusta los gestos para alinearlos con las instrucciones de **TalkBack** de Android.

- **Integración con TalkBack**:
   - El lector de pantalla TalkBack ofrece guía por audio para la navegación y las interacciones con el menú.
   - Aprenda más sobre los gestos de TalkBack [aquí](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- **Operaciones en segundo plano**. La retroalimentación de audio y háptica continúa incluso cuando la pantalla está apagada o bloqueada.

- **Acciones del botón de la brújula**:

| Gesto | Acción | Equivalente en TalkBack |
|-----|-----|-----|
| **Toque simple** | Gira el mapa hacia el **Norte** | **Doble toque** |
| **Toque largo** | Abre la lista de [orientaciones del mapa](../map/interact-with-map.md#map-orientation-modes) | **Doble toque y mantener** |
| **Doble toque** | *No disponible en modo Accesibilidad* | *No soportado* |


### Cómo usar (iOS) {#how-to-use-ios}

La versión para iOS de OsmAnd utiliza las **herramientas de accesibilidad integradas** del sistema.

1. **Activar VoiceOver**:
   - Vaya a *Ajustes → Accesibilidad → VoiceOver*.
   - Configure los **gestos de VoiceOver** para usarlos con OsmAnd.

2. **Funciones compatibles**:
   - **Soporte de lector de pantalla** para interacciones con el mapa.
   - **Gestos personalizables** a través de los ajustes de iOS.
   - Todos los [gestos estándar de OsmAnd](../map/interact-with-map.md#gestures) están disponibles.

3. **Aprenda más**:
   - Lea sobre las funciones de Accesibilidad Visual de iOS [aquí](https://www.apple.com/accessibility/vision/).
   - Explore los gestos de VoiceOver para iPhone [aquí](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios).


## Parámetros de configuración requeridos {#required-setup-parameters}

Para activar las funciones de accesibilidad del dispositivo en OsmAnd, debe realizar los siguientes ajustes:

1. **Activar el** [plugin de Accesibilidad](../plugins/index.md#enable--disable):  *Menú → Plugins → Accesibilidad → Activar*.  
2. **Activar el modo de accesibilidad** en su dispositivo.
3. Configurar los [ajustes](#plugin-settings) del plugin de Accesibilidad.


## Anuncio automático {#autoannounce}

Para activar:
*Mi ubicación* (Toque largo) → *Mostrar detalles* → *Iniciar/Detener anuncio automático*

- Un toque largo en **Mi ubicación** abre un menú con las opciones ***Mostrar su posición*** y ***Mostrar detalles***. Al seleccionar Mostrar detalles, se muestra información adicional de la ruta y se proporciona el botón ***Iniciar/Detener anuncio automático***.
- Establezca el **Período de anuncio automático** (p. ej., *10 segundos*) para controlar la frecuencia de los anuncios.
- Si **TalkBack** no está activado en los ajustes del sistema del dispositivo, OsmAnd no proporcionará *notificaciones de voz* y solo mostrará *notificaciones de texto* en la pantalla.  

### Anuncio automático inteligente {#smart-autoannounce}

Para activar:
*Plugins* → *Accesibilidad* → *Ajustes* → *Anuncio automático inteligente*

La función **Anuncio automático inteligente** proporciona *notificaciones de audio* cuando se desvía de la ruta planificada. Está diseñada para ayudar a los usuarios con discapacidad visual que dependen de la *guía por voz*.  


## Ajustes del plugin {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Accessibility](@site/static/img/plugins/accessibility/access_new.png)  

El plugin de Accesibilidad ofrece varios ajustes para personalizar la navegación y la interacción para usuarios con discapacidades. Estos ajustes se aplican por [perfil](../personal/profiles.md) en OsmAnd.

| Ajuste                   | Descripción |  
|---------------------------|-------------|  
| **Modo de accesibilidad**    | Activa las *funciones integradas de OsmAnd* o utiliza los **ajustes del sistema**. |  
| **Velocidad de la voz**           | Controla la *velocidad del texto a voz*, desde el **50% al 200%**. |  
| **Aumento de zoom por pellizco**    | Amplía temporalmente el mapa mientras pellizca para hacer zoom y mantiene los dedos en la pantalla, agrandando el texto y los iconos sin cambiar el nivel de zoom real. |
| [Anuncio automático inteligente](#smart-autoannounce)    | Proporciona *guía por voz* al desviarse de la ruta. |  
| **Período de anuncio automático**   | Establece el tiempo mínimo entre anuncios, de **5 segundos a 5 minutos**. |  
| [Estilo de dirección](#direction-style)       | Elija entre *Lateral (8 direcciones)* o *Sentido horario (12 direcciones)*. |  
| **Indicaciones de audio**      | Reproduce *guías de audio* que indican la dirección. |  
| **Indicaciones hápticas**     | Proporciona *retroalimentación por vibración* para giros y desviaciones.|  

***Consejos para una accesibilidad optimizada:***

- **Lector de pantalla** - Use TalkBack (*Android*) o VoiceOver (*iOS*) para una interacción mejorada con el mapa.
- **Navegación por audio** - Active el anuncio automático para recibir indicaciones de voz mientras la pantalla está apagada.
- **Retroalimentación háptica** - Ideal para entornos de baja visibilidad o cuando las guías de audio no son prácticas.


### Estilo de dirección {#direction-style}

El ajuste **Estilo de dirección** define cómo se presentan las instrucciones de navegación:

- Lateral (8 direcciones) – utiliza direcciones clásicas izquierda/derecha o cardinales/intercardinales.
- Sentido horario (12 direcciones) – utiliza guía basada en la esfera del reloj, como “a las 3 en punto” o “a las 10 en punto”.

Esta función está diseñada para mejorar la conciencia espacial, especialmente para usuarios con discapacidad visual que prefieren la orientación basada en el reloj.

Para activar:
*Menú* → *Plugins* → *Accesibilidad* → *Ajustes* → *Estilo de dirección* → elija **Lateral** o **Sentido horario**.

:::info note
El Estilo de dirección es una opción independiente. No está vinculado al Anuncio automático inteligente y funciona independientemente de si el Anuncio automático inteligente está activado.
:::

## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Ajustes globales](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)