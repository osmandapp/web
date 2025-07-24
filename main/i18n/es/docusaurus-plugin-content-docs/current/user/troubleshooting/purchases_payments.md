---
source-hash: 7c4671ddc27bfd8d4ca740b871d3d605e6d6fb13c5bf804282724603b5068740
sidebar_position: 2
title: Compras y Pagos
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Compras multiplataforma {#cross-platform-purchases}

**OsmAnd Pro** y **Maps+** (*Todos los Mapas del Mundo* para iOS) son **suscripciones multiplataforma** disponibles para Android e iOS a partir de OsmAnd 5.0. Multiplataforma significa que si compras una suscripción, por ejemplo, en una de las tiendas de Android (Google Play, Huawei AppGallery), también puedes usarla en iOS y en la versión web.

- La suscripción multiplataforma se puede usar en múltiples dispositivos y plataformas **si está vinculada a la misma cuenta de OsmAnd Cloud**.

- Las compras únicas, como **OsmAnd+** (Android) y las compras específicas de la tienda, no son transferibles entre plataformas.

- Puedes usar OsmAnd Pro en hasta 6 dispositivos, incluso si ejecutan diferentes sistemas operativos.

- Asegúrate siempre de usar la misma cuenta de OsmAnd Cloud en todos los dispositivos para acceder a tus compras.

- Para más detalles, consulta: [Compras de Android](../purchases/android.md), [Compras de iOS](../purchases/ios.md) y [Portal de Mapas de OsmAnd](https://www.osmand.net/map).


### Cómo vincular tu compra a la cuenta de OsmAnd Cloud {#how-to-link-your-purchase-to-osmand-cloud-account}

1. Si **no tienes** una cuenta de OsmAnd Cloud:

    - Abre la aplicación OsmAnd en el dispositivo donde realizaste la compra.
    - Ve a *Menú → Ajustes → OsmAnd Cloud*.
    - Toca **Crear nueva cuenta**.
    - Después de crear la cuenta, ve a *Menú de OsmAnd → Ajustes → Compras*.
    - Toca **Restaurar compras** para vincular tu compra a una nueva cuenta.

2. Si **ya tienes** una cuenta de OsmAnd Cloud:

    - Asegúrate de haber iniciado sesión en la cuenta de OsmAnd Cloud en el dispositivo donde realizaste la compra.
    - Navega a *Menú de OsmAnd → Ajustes → OsmAnd Cloud → Ya tengo una cuenta*.
    - Después de iniciar sesión en tu cuenta, ve a *Menú de OsmAnd → Ajustes → Compras*.
    - Toca **Restaurar compras** para sincronizar la compra con tu cuenta.


> Para más información, lee el artículo [OsmAnd Cloud](../personal/osmand-cloud.md#cross-platform).


## Cómo comprar y restaurar OsmAnd en Huawei AppGallery sin Huawei Mobile Services {#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services}

1. **Comprar OsmAnd**:
   - Primero, habilita *Instalar desde fuentes desconocidas* en la configuración de tu dispositivo. Normalmente, puedes encontrar esta opción en **Ajustes → Seguridad**.
   - Instala [Huawei Mobile Services (HMS Core)](https://consumer.huawei.com/za/community/details/Download-the-latest-Huawei-HMS-Core-APK-5-3-0-312/topicId-142217/), que es esencial para la compatibilidad de la aplicación.
   - A continuación, abre *Huawei AppGallery* en la página de [OsmAnd](https://appgallery.huawei.com/#/app/C101486545) y descarga la aplicación.
   - Inicialmente, solo la versión gratuita está disponible para descargar. Para realizar una compra, ve a *Menú de OsmAnd → Ajustes → Compras* y selecciona el tipo requerido.
   - Para más detalles, visita [esta página](https://osmand.net/docs/user/purchases/android#install-application).

2. **Restaurar compra**:
   - Para restaurar tu compra, inicia sesión en *Huawei AppGallery* con la misma cuenta asociada a tu compra de OsmAnd.
   - Consulta tu historial de transacciones en el [historial de pedidos de Huawei App Gallery](https://consumer.huawei.com/en/support/content/en-us00694318/).
   - Es posible que necesites actualizar *Huawei AppGallery* y borrar la caché para evitar problemas.
   - Para restaurar tus compras, sigue *Menú → Ajustes → Compras → Restaurar Compras* en OsmAnd.
   - Para más información, consulta el artículo [Compras de Android](https://osmand.net/docs/user/purchases/android#restore-subscription--in-app).

<!--
- Instrucciones para configurar Huawei Mobile Services.
- Cómo comprar OsmAnd sin HMS Core.
- Restaurar compras en Huawei AppGallery.
-->

## La tienda de Amazon está cerrando - qué hacer {#amazon-store-is-closing---what-to-do}

El 20 de agosto de 2025, Amazon cerrará la Amazon Appstore para dispositivos Android — detalles [aquí](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program).

Necesitas transferir las compras realizadas a través de Amazon a otras plataformas.
Actualmente, [es posible transferir suscripciones, compras dentro de la aplicación y la aplicación OsmAnd+](../purchases/cross.md).



## Cómo restaurar la compra del complemento de Topografía (anteriormente Curvas de Nivel) {#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase}

Para restaurar el [complemento de Topografía](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid):

1. Inicia sesión en la misma cuenta de Google Play utilizada para comprar el complemento de Topografía e instala [la aplicación](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
2. Si el botón *Instalar* está inactivo, asegúrate de que tanto Google Play como las aplicaciones de OsmAnd estén actualizadas. Borra su caché, reinicia tu dispositivo e intenta instalar el complemento de nuevo.
3. Después de la instalación, habilita el complemento de Topografía en el *[Menú de OsmAnd → Complementos](../plugins/topography.md)*, descarga los archivos requeridos en *[Mapas y Recursos](../start-with/download-maps.md#maps-and-resources)* y actívalo a través del *[Menú de configuración del mapa](../map/configure-map-menu.md)*.


## Cómo identificar si OsmAnd Unlimited está activo {#how-to-identify-if-osmand-unlimited-is-active}

Navega a *Menú → Descargar mapas* y toca el contador de mapas (el campo etiquetado como *Versión gratuita. X descargas restantes*). Si OsmAnd Unlimited está activo, la pantalla mostrará el almacenamiento restante del dispositivo en lugar del número de descargas gratuitas.


## ¿Puedo obtener la versión completa de OsmAnd como una aplicación separada para iOS? {#can-i-get-the-full-version-of-osmand-as-a-separate-app-for-ios}

Para iOS, solo hay una versión de OsmAnd disponible. Para acceder a la versión completa, necesitas desbloquear funciones adicionales a través de compras dentro de la aplicación.


## ¿Qué significan 5 o 7 descargas gratuitas? {#what-do-5-or-7-free-downloads-mean}

Se te permiten 5 descargas gratuitas en iOS o 7 en Android. Cada descarga, ya sea un mapa, una actualización (las actualizaciones de mapas cuentan como descargas), paquetes de voz u otros elementos, reduce el recuento disponible. Ten en cuenta que eliminar elementos de tus descargas no restaura el recuento de descargas gratuitas.


## ¿Cómo puedo obtener descargas de mapas adicionales en OsmAnd Free? {#how-can-i-get-additional-map-downloads-in-osmand-free}

Si has utilizado todas las 5 (iOS) o 7 (Android) descargas gratuitas, puedes recibir 3 descargas adicionales al *suscribirte a la lista de correo*. Un banner con la opción de suscripción aparecerá una vez que se hayan utilizado todas las descargas gratuitas.


## Código de verificación para OsmAnd Cloud no recibido {#verification-code-for-osmand-cloud-not-received}

Si no recibes el **código de verificación** al crear una cuenta de **OsmAnd Cloud**, sigue estos pasos para resolver el problema:

1. Revisa tu dirección de correo electrónico.
    Asegúrate de haber introducido la **dirección de correo electrónico correcta**. El correo electrónico debe coincidir con el utilizado para comprar **OsmAnd Pro** o registrar tu cuenta de **OsmAnd Cloud**.

2. Revisa las carpetas de spam.
    A veces, el correo electrónico de verificación puede ser filtrado como spam. Busca un correo electrónico de **OsmAnd** en tus carpetas de **Spam**, **Correo no deseado** o **Promociones**.

3. Espera a que llegue el código.
    En algunos casos, el correo electrónico del código de activación puede **retrasarse**. Evita **múltiples intentos de activación** en un corto período, ya que esto puede causar retrasos adicionales.

4. Intenta reenviar el código.
    Vuelve a la **pantalla de inicio de sesión de OsmAnd Cloud** y selecciona **Reenviar código** si está disponible. Espera unos minutos antes de solicitar otro código.

5. Verifica las restricciones del servidor de correo electrónico.
    Si estás utilizando un **dominio de correo electrónico corporativo o personalizado**, consulta con tu **proveedor de correo electrónico** para asegurarte de que el correo electrónico no esté siendo bloqueado. Considera usar un servicio de correo electrónico diferente (por ejemplo, Gmail, Outlook) si los problemas persisten.

<!--
## Compras y Pagos {#purchases--payments}

- Compra no mostrada
- Compra no restaurada
- Problemas de pago
- Política de reembolso
- Soluciones paso a paso a problemas con las compras.
- Instrucciones para borrar la caché de Google Play, Huawei AppGallery.
- Qué hacer si la compra no aparece o la transacción falla.
- Compra no mostrada - recomendaciones sobre cómo revisar tu cuenta y restaurar tus compras.
- Problemas de pago - instrucciones para contactar al Soporte de Google Play en caso de problemas de pago.


## Preguntas Frecuentes {#faq}

- ¿Puedo transferir una compra entre Android e iOS?
- ¿Puedo usar una compra en varios dispositivos?
- ¿Por qué no aparece la compra?
- ¿Dónde puedo encontrar los detalles de pago?
- ¿Puedo transferir OsmAnd+ entre Android e iOS?
- ¿Cómo puedo restaurar las compras después de reinstalar la aplicación?
- ¿Qué es OsmAnd Pro y cuáles son sus ventajas?
- ¿Puedo activar mi suscripción sin Google Play?
- ¿Puedo compartir mi compra con mi familia?
- ¿Cómo transfiero OsmAnd+ a otro teléfono?
- ¿Por qué no aparece mi compra después de reinstalar?
- ¿Por qué no puedo reanudar mi compra?
- ¿Cómo sé si mi suscripción está activa?
- ¿Puedo usar una compra en varios dispositivos?
- ¿Puedo comprar OsmAnd sin Google Play?
- ¿Dónde puedo encontrar mis detalles de pago?
-->