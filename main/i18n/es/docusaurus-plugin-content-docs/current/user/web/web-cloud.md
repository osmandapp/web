---
source-hash: a869782aa735dab23fcbaeec7b7c95203ee66ac9003a203ce92de965424802d9
sidebar_position: 2
sidebar_label:  Account
title: OsmAnd Account
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

<!--
<InfoIncompleteArticle/>
-->

## Resumen {#overview}

Iniciar sesión con una cuenta de OsmAnd convierte el [Planificador Web de OsmAnd](https://osmand.net/map) de un simple visor de mapas en su espacio de trabajo personal. La misma cuenta que utiliza en la aplicación móvil conecta el sitio web con sus datos y compras de OsmAnd Cloud, por lo que puede acceder a su contenido guardado y sus suscripciones en un solo lugar en la web.


## Autorización {#authorization}

### Registro {#sign-up}

Para acceder a las funciones de OsmAnd Web, necesita crear una cuenta. Utilice el flujo de Registro:

- Vaya al [**Portal de Mapas de OsmAnd**](https://osmand.net/map).
- Abra el menú **Cuenta**.
- Seleccione **Crear nueva cuenta**. Se abre el diálogo Crear nueva cuenta.
- En el campo **Correo electrónico**, introduzca la dirección de correo electrónico que desea usar para su cuenta de OsmAnd y haga clic en **Continuar**.
- Se envía un código de verificación a esta dirección de correo electrónico. Compruebe su bandeja de entrada (y la carpeta de spam si es necesario).
- En el siguiente diálogo, introduzca el Código de verificación y haga clic en **Continuar** para confirmar su correo electrónico. Si no ha recibido el código, utilice el enlace **No he recibido el código de verificación** y siga las instrucciones.

Después de verificar el código, se crea su cuenta web y se inicia sesión automáticamente.

![Registro Web](@site/static/img/web/web_sign_up.png) ![Registro Web](@site/static/img/web/web_ver_code.png)


### Inicio de sesión {#login}

Si ya tiene una cuenta de OsmAnd, puede iniciar sesión en el [**Portal de Mapas de OsmAnd**](https://osmand.net/map) con el mismo correo electrónico y contraseña. Vaya al menú **Cuenta** y elija la opción **Iniciar sesión**. En el diálogo que se abre, introduzca la dirección de correo electrónico vinculada a su cuenta de OsmAnd, escriba su contraseña y seleccione **Continuar**. Después de un inicio de sesión exitoso, se abre el panel de Cuenta de OsmAnd y puede trabajar con sus datos, compras y configuraciones.


## Gestión de la cuenta {#managing-account}

### Mis datos {#my-data}

Puede descargar copias de seguridad que se crearon y sincronizaron desde su dispositivo móvil a través de **OsmAnd Cloud**.  
Vaya a: *Menú General → Cuenta → Mis datos (OsmAnd Cloud) → Descargar todo*

Esta sección muestra:

- El número de archivos almacenados en su nube.
- El volumen total de almacenamiento utilizado.
- El espacio de almacenamiento disponible en la nube.

> 💡 Solo las copias de seguridad creadas en dispositivos donde **OsmAnd Cloud** está habilitado aparecerán aquí.

Si desea guardar una copia de todos sus datos, utilice **Descargar todo**. Esto abre un diálogo donde puede:

- Seleccionar qué datos exportar (por ejemplo, *Mis lugares, Configuraciones, Recursos, Mapas*),
- Elegir el formato de exportación (*ZIP o OSF*).
- Ver una estimación del tamaño y tiempo de descarga.

Haga clic en **Descargar copia de seguridad** para iniciar la exportación y guardar el archivo en su computadora.

![Cuenta Web](@site/static/img/web/web_download_all.png)

### Pagos y compras {#payments-and-purchases}

Esta sección muestra todos los productos y suscripciones vinculados a su cuenta de OsmAnd. Para abrirla,  
Vaya a: *Menú General → Cuenta → Pagos y compras*

Aquí puede ver una lista de todas las compras asociadas con su correo electrónico:
- Planes gratuitos y de pago (como OsmAnd Start o OsmAnd Pro).
- Productos de pago único (p. ej., Maps+ o ediciones especiales).
- Suscripciones que se renuevan mensualmente o anualmente.

Para cada elemento, la lista muestra:
- Nombre del producto e icono.
- Tipo: suscripción mensual, suscripción anual o pago único.
- Estado: *Activo, Caducado o Cancelado*.
- Información de fecha.

Si hace clic en un producto de la lista, se abre la página de detalles. Allí puede ver dónde se compró el producto (*Google Play, Apple App Store, Huawei AppGallery, Amazon* o *OsmAnd Web*) y encontrar un enlace o instrucciones sobre cómo gestionar o cancelar la suscripción en la tienda correspondiente. Si el producto se compró en OsmAnd Web (FastSpring), la página de detalles muestra un enlace **Gestionar suscripción** que abre el portal de gestión de cuentas de FastSpring, donde puede actualizar su método de pago, cancelar o reactivar la suscripción, cambiar el plan o descargar facturas.

Si no hay compras vinculadas a su cuenta todavía, esta sección muestra un estado vacío con el mensaje **No tiene ninguna compra** y un botón **Más información** que lleva a una página con los planes de OsmAnd disponibles y opciones de actualización.

Para más detalles sobre el uso de sus compras en diferentes plataformas, lea sobre el [acceso multiplataforma](../purchases/cross.md).

![Cuenta Web](@site/static/img/web/web_purchases.png)

### Sincronización en la nube {#cloud-sync}

La Sincronización en la nube le permite acceder a los datos que sincronizó en OsmAnd Cloud directamente en el [Portal de Mapas Web](https://osmand.net/map/). Una vez que inicie sesión con su cuenta de OsmAnd Start o OsmAnd Pro, el sitio web muestra los Favoritos, Pistas y archivos de copia de seguridad que sincronizó previamente desde su aplicación móvil. Es una forma sencilla de ver su contenido en la nube en una pantalla más grande y descargar sus copias de seguridad cuando las necesite.

Estos elementos se vuelven visibles en el menú justo después de iniciar sesión en el sitio web. Para actualizar esta información, necesita sincronizar sus datos desde sus dispositivos utilizando la acción [Sincronizar ahora](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) en la aplicación móvil.

La disponibilidad de Sincronización en la nube depende del tipo de cuenta:
- OsmAnd Start: sincroniza [Favoritos](../web/web-favorites.md) y los muestra en la web.
- OsmAnd Pro: sincroniza [Pistas](../web/web-tracks.md), Favoritos y [Copias de seguridad](#my-data), y desbloquea el acceso completo en la web a los datos en la nube.

![Pista Web](@site/static/img/web/web_track_start.png) ![Pista Web](@site/static/img/web/web_track_pro.png)

### OsmAnd Cloud {#osmand-cloud}

Cuando ha iniciado sesión, la sección de OsmAnd Cloud aparece en Menú → Configuración e incluye Cambios y Papelera.

La opción **Cambios** muestra una lista cronológica de archivos almacenados en su cuenta de OsmAnd Cloud. Los elementos están agrupados por mes e incluyen el nombre del archivo, el tipo de cambio (por ejemplo, añadido, modificado o eliminado), la hora de la última actualización y el dispositivo que lo creó. Para cada entrada, puede abrir el menú de tres puntos y elegir *Descargar* para guardar el archivo seleccionado en su computadora, o *Eliminar*.

La opción **Papelera** contiene archivos que se eliminaron de OsmAnd Cloud. La lista también está agrupada por mes y muestra cuándo se eliminó cada archivo y desde qué dispositivo. Utilice el menú de tres puntos junto a un archivo para *Descargar* una copia, *Restaurar de la papelera* (devolver el archivo a OsmAnd Cloud para que vuelva a estar disponible en sus datos) o *Eliminar inmediatamente* para quitarlo permanentemente. Esto ayuda a prevenir la pérdida accidental de datos mientras aún le permite liberar espacio de almacenamiento en la nube cuando está seguro de que un archivo ya no se necesita. También puede eliminar todos los elementos eliminados a la vez haciendo clic en el icono de Papelera en el encabezado del panel de Papelera. Esto abre el diálogo **Vaciar papelera**, donde confirma la eliminación para quitar permanentemente todos los archivos de la Papelera.

![Nube Web](@site/static/img/web/web_changes.png) ![Nube Web](@site/static/img/web/web_trash.png)


## Solución de problemas {#troubleshooting}

### Restablecer contraseña {#reset-password}

Si no recuerda su contraseña, utilice el enlace **No tengo contraseña o la he olvidado** en el diálogo de inicio de sesión. Esto abre el panel **Cambiar o restablecer contraseña**. Introduzca la dirección de correo electrónico que utilizó para crear su cuenta y haga clic en **Continuar**. Se envía un mensaje con un código de verificación a este correo electrónico. En la siguiente pantalla, escriba el código de verificación y su nueva contraseña, luego seleccione **Continuar** para confirmar. Cuando se acepta el código, se actualiza su contraseña y puede iniciar sesión en OsmAnd Web con las nuevas credenciales.

![Cuenta Web](@site/static/img/web/web_password.png)

### Cambiar dirección de correo electrónico {#change-email-address}

Para actualizar su dirección de correo electrónico,
Vaya a *Menú General → Cuenta → Correo electrónico → ⋮ → Cambiar correo electrónico*

Aparece el diálogo Cambiar correo electrónico. Se envía un código de verificación a la dirección de correo electrónico actual. Introduzca este código en el campo **Código del correo electrónico antiguo**, especifique la nueva dirección en **Nuevo correo electrónico**, luego seleccione **Siguiente**. Por razones de seguridad, se envía un mensaje de confirmación a su nueva dirección de correo electrónico informándole de que se ha actualizado el correo electrónico de la cuenta.

![Cuenta Web](@site/static/img/web/web_email_new.png)

### Cerrar sesión y eliminar cuenta {#logout-and-delete}

![Cuenta Web](@site/static/img/web/web_logout_new.png)

El panel de Cuenta de OsmAnd contiene controles para finalizar la sesión web actual y eliminar permanentemente la cuenta.

Para cerrar sesión, abra Cuenta de OsmAnd y utilice el botón **Cerrar sesión** en la esquina superior derecha del panel (icono con una flecha saliendo de un cuadrado). Seleccionar Cerrar sesión cierra el panel de la cuenta y finaliza la sesión activa en el sitio web.

Para eliminar una cuenta, seleccione **Eliminar cuenta** en la parte inferior del panel de Cuenta de OsmAnd. Aparece un diálogo de confirmación con el mensaje *“¿Está seguro de que desea hacer esto?”* y una breve explicación de que todos los datos y detalles de la cuenta se eliminarán de OsmAnd Cloud y los dispositivos secundarios perderán el acceso a las funciones de pago. Se envía un código de verificación a la dirección de correo electrónico de la cuenta. Introduzca el código en el campo Código del correo electrónico y elija **ELIMINAR ESTA CUENTA** para completar el proceso. Esta operación es permanente e irreversible.

![Cuenta Web](@site/static/img/web/web_delete.png)

<!--
## OsmAnd Pro and OsmAnd Start Sync {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** is a [cross-platform](../troubleshooting/setup.md#initial-setup) paid subscription. 
- **OsmAnd Start** is a [free OsmAnd Cloud registration](https://osmand.net/blog/start).

The cross-platform capability allows you to use OsmAnd Pro on all platforms *([Android](../purchases/android.md)  ← →  [iOS](../purchases/ios.md)  →  [Web](https://www.osmand.net/map))*. To do this you need to:

1. Subscribe to **OsmAnd Pro**. Read more about how to do this for [Android here](../purchases/android.md#how-to-buy), and for [iOS here](../purchases/ios.md#how-to-buy).
2. How to create **OsmAnd Start** account read more [here](https://osmand.net/blog/start#how-to-create-an-account).
3. Register your [Pro or Start account](/docs/user/personal/osmand-cloud/#cross-platform) on the OsmAnd server inside OsmAnd app.
4. The registered email will be your login to activate OsmAnd Pro on the web platform. At first, time needed to choose a password for future entering the web portal (please, use the instruction on the web portal).


- Enter your *email* and *password* for [osmand.net/map](https://osmand.net/map/).

![View OsmAnd Web activation](@site/static/img/web/web_pro_activation.png)  

- Your data, such as tracks (OsmAnd Pro) and favorites(OsmAnd Pro and OsmAnd Start), will appear in the menu after you log in. They are available for display on the map. But you need [to sync this data](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) from your devices.

![View OsmAnd Web data](@site/static/img/web/web_data.png)  

- To *DOWNLOAD BACKUP* from [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), click the login field. On the login field you can see files info (total files number, total files size, cloud storage used) and account info (subscription type, start time and expire time of your subscription).

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file.png)  

Choose needed files for downloading, `.zip` or `.osf` format of downloaded files and click *DOWNLOAD BACKUP* button:

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_1.png)  

There is also a button to *logout* of the account.  

- *LOGOUT*, *DELETE YOUR ACCOUNT* or *Change email* you find on the login field too. For opening *DELETE YOUR ACCOUNT* or *Change email* you need to click *Dangerous area*.

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_2.png)  


## Cloud data {#cloud-data}

[Tracks and Favorites](web-map.md#tracks).

## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->

## Artículos relacionados {#related-articles}

- [Introducción](./web-overview.md)
- [Compras multiplataforma](../purchases/cross.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)