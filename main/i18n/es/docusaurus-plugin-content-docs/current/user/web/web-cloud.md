---
source-hash: aa7b248df7d6116b19b0428376bb9c1f59b764588678067dd00d7ee9bd820a7a
sidebar_position: 2
sidebar_label: OsmAnd Cloud
title: OsmAnd Cloud en el sitio web
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


<InfoIncompleteArticle/>

## Descripción general {#overview}

El [Portal de Mapas de OsmAnd](https://osmand.net/map) es un servicio basado en navegador proporcionado por OsmAnd, que permite a los usuarios explorar mapas, gestionar sus datos, planificar y crear viajes, o simplemente navegar por el mapa.



## Cómo empezar {#how-to-start}

Para acceder a las funciones de OsmAnd Web, necesitas una cuenta:

- Si ya tienes una suscripción a [**OsmAnd Pro**](../personal/osmand-cloud.md#login) o quieres crear una cuenta gratuita de [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), sigue estos pasos:

  1. Ve al [**Portal de Mapas de OsmAnd**](https://osmand.net/map).
  2. Abre el menú de **Cuenta**.
     - **Iniciar sesión**: Introduce la dirección de correo electrónico utilizada para tu suscripción Pro o Start.
     - **Crear cuenta**: Utiliza esta opción para registrarte en una cuenta gratuita de OsmAnd Start.

![Web Account](@site/static/img/web/web_account.png)

## Gestión de la cuenta {#managing-account}

Para gestionar tu cuenta, ve a:
**Menú General → Cuenta**

Después de registrarte en la web, puedes:

- Ver la información de la cuenta
- Descargar copias de seguridad en la nube
- Cerrar sesión en tu cuenta
- Eliminar tu cuenta
- Cambiar tu dirección de correo electrónico
- Ver tus pagos y compras

![Web Account](@site/static/img/web/web_account_2.png)

### Mis datos {#my-data}

Puedes descargar las copias de seguridad que se crearon y sincronizaron desde tu dispositivo móvil a través de **OsmAnd Cloud**.

- Ve a **Menú General → Cuenta → Mis datos (OsmAnd Cloud) → Descargar todo**.

Esta sección muestra:

- El número de archivos almacenados en tu nube
- Volumen total de almacenamiento utilizado
- Espacio de almacenamiento en la nube disponible

> 💡 Solo aparecerán aquí las copias de seguridad creadas en dispositivos donde **OsmAnd Cloud** esté habilitado.

### Pagos y compras {#payments-and-purchases}

- Ve a **Menú General → Cuenta → Pagos y compras**.

En esta sección, puedes ver todas las compras y suscripciones vinculadas a tu cuenta.

Para obtener más detalles sobre el uso de tus compras en diferentes plataformas, lee sobre el [acceso multiplataforma](../purchases/cross.md).

### Cambiar dirección de correo electrónico {#change-email-address}

Para actualizar tu dirección de correo electrónico:

1. Ve a **Menú General → Cuenta → Correo electrónico → ⋮ → Cambiar correo electrónico**.
2. Introduce tu nueva dirección de correo electrónico y confirma.

> 🔒 Se enviará un correo electrónico de verificación a la nueva dirección antes de que se finalice el cambio.

### Cerrar sesión y eliminar cuenta {#log-out-and-delete}

Para cerrar sesión en tu cuenta de OsmAnd Web:

- Abre **Menú General → Cuenta**.
- Haz clic en el botón **Cerrar sesión** para finalizar tu sesión actual.

Para eliminar permanentemente tu cuenta:

- Desplázate hasta la parte inferior del menú de **Cuenta**.
- Haz clic en el botón **Eliminar cuenta**.
- Confirma la eliminación. Esta acción es irreversible.


## Sincronización de OsmAnd Pro y OsmAnd Start {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** es una suscripción de pago [multiplataforma](../troubleshooting/setup.md#cross-platform).
- **OsmAnd Start** es un [registro gratuito de OsmAnd Cloud](https://osmand.net/blog/start).

La capacidad multiplataforma te permite usar OsmAnd Pro en todas las plataformas *([Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map))*. Para ello, necesitas:

1. Suscribirte a **OsmAnd Pro**. Lee más sobre cómo hacerlo para [Android aquí](../purchases/android.md#how-to-buy), y para [iOS aquí](../purchases/ios.md#how-to-buy).
2. Cómo crear una cuenta de **OsmAnd Start** lee más [aquí](https://osmand.net/blog/start#how-to-create-an-account).
3. Registrar tu cuenta [Pro o Start](../troubleshooting/setup.md#cross-platform) en el servidor de OsmAnd dentro de la aplicación OsmAnd.
4. El correo electrónico registrado será tu inicio de sesión para activar OsmAnd Pro en la plataforma web. Al principio, se necesita tiempo para elegir una contraseña para futuras entradas al portal web (por favor, usa las instrucciones del portal web).


<!--

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



> *Última actualización: Julio de 2024*