---
source-hash: fc1b2c0235716aa50473c8f887e1a5bd1752fd011931da9e6726f958a0e3fca9
sidebar_position: 2
title:  Compras y Pagos
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Compras Multiplataforma {#cross-platform-purchases}

**OsmAnd Pro** y **Maps+** (*Todos los Mapas del Mundo* para iOS) son **suscripciones multiplataforma** disponibles para Android e iOS a partir de OsmAnd 5.0. Multiplataforma significa que si compras una suscripción, por ejemplo, en una de las tiendas de Android (Google Play, Huawei AppGallery), también puedes usarla en iOS y en la versión web.

- La suscripción multiplataforma se puede usar en múltiples dispositivos y plataformas **si está vinculada a la misma cuenta de OsmAnd Cloud**.

- Las compras únicas como **OsmAnd+** (Android) y las compras específicas de la tienda no son transferibles entre plataformas.

- Puedes usar OsmAnd Pro en hasta 6 dispositivos, incluso si ejecutan diferentes sistemas operativos.

- Asegúrate siempre de usar la misma cuenta de OsmAnd Cloud en todos los dispositivos para acceder a tus compras.

- Para más detalles, consulta: [Compras en Android](../purchases/android.md), [Compras en iOS](../purchases/ios.md), [Compras multiplataforma](../purchases/cross.md) y [Portal de Mapas de OsmAnd](../purchases/web.md).


### Cómo vincular tu compra a la cuenta de OsmAnd Cloud {#how-to-link-your-purchase-to-osmand-cloud-account}

1. Si **no tienes** una cuenta de OsmAnd Cloud:

    - Abre la aplicación OsmAnd en el dispositivo donde realizaste la compra.
    - Ve a *Menú → Ajustes → OsmAnd Cloud*.
    - Toca **Crear nueva cuenta**.
    - Después de crear la cuenta, ve a *Menú de OsmAnd → Ajustes → Compras*.
    - Toca **Restaurar compras** para vincular tu compra a una nueva cuenta.

2. Si **ya tienes** una cuenta de OsmAnd Cloud:

    - Asegúrate de haber iniciado sesión en la cuenta de OsmAnd Cloud en el dispositivo donde realizaste la compra.
    - Navega a *Menú de OsmAnd → Ajustes → OsmAnd Cloud → Ya tengo una cuenta*
    - Después de iniciar sesión en tu cuenta, ve a *Menú de OsmAnd → Ajustes → Compras*.
    - Toca **Restaurar compras** para sincronizar la compra con tu cuenta.


> Para más información, lee los artículos [OsmAnd Cloud](../personal/osmand-cloud.md#cross-platform), [Compras multiplataforma](../purchases/cross.md).


### Asociación de Compra con Múltiples Cuentas de OsmAnd Cloud {#purchase-association-with-multiple-osmand-cloud-accounts}


Una compra multiplataforma, como _Maps+_ y _Pro_, se vincula a la cuenta de OsmAnd Cloud que se activó por última vez en el dispositivo que contiene el recibo de compra original (de la App Store o Google Play). Si un usuario en este dispositivo cierra sesión en su cuenta principal (`cuenta de OsmAnd Cloud A`) e inicia sesión en una nueva (`cuenta de OsmAnd Cloud B`), el sistema de OsmAnd transfiere automáticamente la licencia a la nueva `cuenta de OsmAnd Cloud B`. Como resultado, tu cuenta original de OsmAnd Cloud pierde el estado de sus compras en otras plataformas, ya que la licencia solo puede estar activa en una cuenta de OsmAnd Cloud a la vez.

Técnicamente, esto funciona de la siguiente manera: la compra en sí pertenece a tu Apple ID o cuenta de Google, no a una cuenta de OsmAnd. La aplicación OsmAnd en el dispositivo con la compra simplemente informa a nuestro servidor qué cuenta de OsmAnd Cloud está activa actualmente. El servidor, a su vez, otorga acceso multiplataforma a esa cuenta. Por lo tanto, la última cuenta en iniciar sesión en el dispositivo "principal" siempre se convierte en la titular de la licencia.

Para restaurar la compra en la cuenta correcta (`cuenta de OsmAnd Cloud A`), debes realizar la acción inversa. En el mismo dispositivo donde se realizó la compra, debes cerrar sesión en la `cuenta de OsmAnd Cloud B` incorrecta y volver a iniciar sesión en la `cuenta de OsmAnd Cloud A`. Este proceso obligará al sistema a volver a verificar el recibo de compra y a volver a vincular la licencia a la `cuenta de OsmAnd Cloud A` correcta, restaurando su estado multiplataforma.

> Para más información, lee los artículos de [Compras multiplataforma](../purchases/cross.md).

## Cómo Comprar y Restaurar OsmAnd en la Huawei AppGallery sin los Servicios Móviles de Huawei {#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services}

1. **Comprar OsmAnd**:
   - Primero, habilita *Instalar desde fuentes desconocidas* en los ajustes de tu dispositivo. Generalmente puedes encontrar esta opción en **Ajustes → Seguridad**.
   - Instala los [Servicios Móviles de Huawei (HMS Core)](https://consumer.huawei.com/za/community/details/Download-the-latest-Huawei-HMS-Core-APK-5-3-0-312/topicId-142217/), que son esenciales para la compatibilidad de la aplicación.
   - A continuación, abre *Huawei AppGallery* en la página de [OsmAnd](https://appgallery.huawei.com/#/app/C101486545) y descarga la aplicación.
   - Inicialmente, solo la versión gratuita está disponible para descargar. Para realizar una compra, ve a *Menú de OsmAnd → Ajustes → Compras* y selecciona el tipo requerido.
   - Para más detalles, visita [esta página](https://osmand.net/docs/user/purchases/android#install-application).

2. **Restaurar compra**:
   - Para restaurar tu compra, inicia sesión en *Huawei AppGallery* usando la misma cuenta asociada con tu compra de OsmAnd.
   - Verifica tu historial de transacciones en el [historial de pedidos de Huawei App Gallery](https://consumer.huawei.com/en/support/content/en-us00694318/).
   - Es posible que necesites actualizar *Huawei AppGallery* y limpiar la caché para evitar problemas.
   - Para restaurar tus compras, sigue la ruta *Menú → Ajustes → Compras → Restaurar Compras* en OsmAnd.
   - Para más información, consulta el artículo [Compras en Android](https://osmand.net/docs/user/purchases/android#restore-subscription--in-app).

<!--
- Instructions for setting up Huawei Mobile Services.
- How to buy OsmAnd without HMS Core.
- Restore purchases in the Huawei AppGallery.
-->

## La tienda de Amazon va a cerrar - qué hacer {#amazon-store-is-closing---what-to-do}

El **20 de agosto de 2025**, Amazon cerrará la Amazon Appstore para dispositivos Android. Puedes leer el anuncio oficial [aquí](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program).

Si has realizado compras a través de Amazon, necesitarás **transferir tus suscripciones (Pro, Maps+) o compras dentro de la aplicación (Maps+)** a otra plataforma.

➡️ Actualmente, [la transferencia multiplataforma es posible para suscripciones y compras dentro de la aplicación](../purchases/cross.md).
❗ **OsmAnd+** (aplicación independiente) no se puede transferir entre plataformas a través de la cuenta de OsmAnd Cloud. Para obtener ayuda, por favor contacta a **support@osmand.net**.

## Cómo restaurar la compra del complemento Topografía (antes Curvas de nivel) {#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase}

Para restaurar el [complemento Topografía](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid):

1. Inicia sesión en la misma cuenta de Google Play utilizada para comprar el complemento Topografía e instala [la aplicación](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
2. Si el botón *Instalar* está inactivo, asegúrate de que tanto la aplicación de Google Play como la de OsmAnd estén actualizadas. Limpia su caché, reinicia tu dispositivo e intenta instalar el complemento de nuevo.
3. Después de la instalación, activa el complemento Topografía en el *[Menú de OsmAnd → Complementos](../plugins/topography.md)*, descarga los archivos necesarios en *[Mapas y Recursos](../start-with/download-maps.md#maps-and-resources)*, y actívalo a través del *[Menú Configurar mapa](../map/configure-map-menu.md)*.


## Cómo identificar si OsmAnd Ilimitado está activo {#how-to-identify-if-osmand-unlimited-is-active}

Navega a *Menú → Descargar mapas* y toca el contador de mapas (el campo etiquetado como *Versión gratuita. X descargas restantes*). Si OsmAnd Ilimitado está activo, la pantalla mostrará el almacenamiento restante del dispositivo en lugar del número de descargas gratuitas.


## ¿Puedo obtener la versión completa de OsmAnd como una aplicación separada para iOS? {#can-i-get-the-full-version-of-osmand-as-a-separate-app-for-ios}

Para iOS, solo hay una versión de OsmAnd disponible. Para acceder a la versión completa, necesitas desbloquear funciones adicionales a través de compras dentro de la aplicación.


## ¿Qué significan 5 o 7 descargas gratuitas? {#what-do-5-or-7-free-downloads-mean}

Se te permiten 5 descargas gratuitas en iOS o 7 en Android. Cada descarga, ya sea un mapa, una actualización (las actualizaciones de mapas cuentan como descargas), paquetes de voz u otros elementos, reduce el conteo disponible. Ten en cuenta que eliminar elementos de tus descargas no restaura el conteo de descargas gratuitas.


## ¿Cómo puedo obtener descargas de mapas adicionales en OsmAnd Gratuito? {#how-can-i-get-additional-map-downloads-in-osmand-free}

Si has utilizado todas las 5 (iOS) o 7 (Android) descargas gratuitas, puedes recibir 3 descargas adicionales *suscribiéndote a la lista de correo*. Un banner con la opción de suscripción aparecerá una vez que se hayan utilizado todas las descargas gratuitas.


## No he recibido el código de verificación para OsmAnd Cloud {#verification-code-for-osmand-cloud-not-received}

Si no recibes el **código de verificación** al crear una cuenta de **OsmAnd Cloud**, sigue estos pasos para resolver el problema:

1. Revisa tu dirección de correo electrónico.
    Asegúrate de haber introducido la **dirección de correo electrónico correcta**. El correo electrónico debe coincidir con el utilizado para comprar **OsmAnd Pro** o registrar tu cuenta de **OsmAnd Cloud**.

2. Revisa las carpetas de spam.
    A veces, el correo de verificación puede ser filtrado como spam. Busca un correo de **OsmAnd** en tus carpetas de **Spam**, **Correo no deseado** o **Promociones**.

3. Espera a que llegue el código.
    En algunos casos, el correo con el código de activación puede **retrasarse**. Evita **múltiples intentos de activación** en un corto período, ya que esto puede causar retrasos adicionales.

4. Intenta reenviar el código.
    Vuelve a la **pantalla de inicio de sesión de OsmAnd Cloud** y selecciona **Reenviar código** si está disponible. Espera unos minutos antes de solicitar otro código.

5. Verifica las restricciones del servidor de correo.
    Si estás utilizando un **dominio de correo corporativo o personalizado**, consulta con tu **proveedor de correo electrónico** para asegurarte de que el correo no esté siendo bloqueado. Considera usar un servicio de correo diferente (por ejemplo, Gmail, Outlook) si los problemas persisten.

<!--
## Purchases & Payments {#purchases--payments}

- Purchase Not Showing
- Purchase Not Restoring
- Payment Issues
- Refund Policy
- Step-by-step solutions to problems with purchases.
- Instructions for clearing the cache of Google Play, Huawei AppGallery.
- What to do if the purchase does not appear or the transaction fails.
- Purchase not showing up - recommendations on how to check your account and restore your purchases.
- Payment issues - instructions for contacting Google Play Support in case of paymentissues.


## FAQ {#faq}

- Can I transfer a purchase between Android and iOS?
- Can I use a purchase on multiple devices?
- Why does the purchase not appear?
- Where can I find payment details?
- Can I transfer OsmAnd+ between Android and iOS?
- How can I restore purchases after reinstalling the app?
- What is OsmAnd Pro and what are its advantages?
- Can I activate my subscription without Google Play?
- Can I share my purchase with my family?
- How do I transfer OsmAnd+ to another phone?
- Why doesn't my purchase appear after reinstalling?
- Why can't I resume my purchase?
- How do I know if my subscription is active?
- Can I use one purchase on multiple devices?
- Can I buy OsmAnd without Google Play?
- Where can I find my payment details?
-->