---
source-hash: 36fa594008d56ae693369164879dccfe01f275c12d52be379ad60b0b9c264d67
sidebar_position: 2
sidebar_label:  OsmAnd Cloud
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

## Resumen {#overview}

El [Portal de Mapas de OsmAnd](https://osmand.net/map) es un servicio basado en navegador proporcionado por OsmAnd, que permite a los usuarios explorar mapas, gestionar sus datos, planificar y crear viajes, o simplemente navegar por el mapa.



## Cómo empezar {#how-to-start}

Para acceder a las funciones de OsmAnd Web, necesita una cuenta:

- Si ya tiene una suscripción a [**OsmAnd Pro**](../personal/osmand-cloud.md#login) o desea crear una cuenta gratuita de [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), siga estos pasos:

  1. Vaya al [**Portal de Mapas de OsmAnd**](https://osmand.net/map).
  2. Abra el menú **Cuenta**.
     - **Iniciar sesión**: Introduzca la dirección de correo electrónico utilizada para su suscripción Pro o Start.
     - **Crear cuenta**: Utilice esta opción para registrarse y obtener una cuenta gratuita de OsmAnd Start.

![Cuenta web](@site/static/img/web/web_account.png)

## Gestionar cuenta {#managing-account}

Para gestionar su cuenta, vaya a:  
**Menú General → Cuenta**

Después de registrarse en la web, puede:

- Ver la información de la cuenta
- Descargar copias de seguridad de la nube
- Cerrar sesión en su cuenta
- Eliminar su cuenta
- Cambiar su dirección de correo electrónico
- Ver sus pagos y compras

![Cuenta web](@site/static/img/web/web_account_2.png)

### Mis datos {#my-data}

Puede descargar copias de seguridad que se crearon y sincronizaron desde su dispositivo móvil a través de **OsmAnd Cloud**.

- Vaya a **Menú General → Cuenta → Mis datos (OsmAnd Cloud) → Descargar todo**.

Esta sección muestra:

- El número de archivos almacenados en su nube
- El volumen total de almacenamiento utilizado
- El espacio de almacenamiento disponible en la nube

> 💡 Solo las copias de seguridad creadas en dispositivos donde **OsmAnd Cloud** está habilitado aparecerán aquí.

### Pagos y compras {#payments-and-purchases}

- Vaya a **Menú General → Cuenta → Pagos y compras**.

En esta sección, puede ver todas las compras y suscripciones vinculadas a su cuenta.

Para más detalles sobre el uso de sus compras en diferentes plataformas, lea sobre el [acceso multiplataforma](../purchases/cross.md).

### Cambiar dirección de correo electrónico {#change-email-address}

Para actualizar su dirección de correo electrónico:

1. Vaya a **Menú General → Cuenta → Correo electrónico → ⋮ → Cambiar correo electrónico**.
2. Introduzca su nueva dirección de correo electrónico y confirme.

> 🔒 Se enviará un correo electrónico de verificación a la nueva dirección antes de que se finalice el cambio.

### Cerrar sesión y eliminar cuenta {#log-out-and-delete}

Para cerrar sesión en su cuenta de OsmAnd Web:

- Abra **Menú General → Cuenta**.
- Haga clic en el botón **Cerrar sesión** para finalizar su sesión actual.

Para eliminar permanentemente su cuenta:

- Desplácese hasta la parte inferior del menú **Cuenta**.
- Haga clic en el botón **Eliminar cuenta**.
- Confirme la eliminación. Esta acción es irreversible.


## Sincronización de OsmAnd Pro y OsmAnd Start {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** es una suscripción de pago [multiplataforma](../troubleshooting/setup.md#initial-setup). 
- **OsmAnd Start** es un [registro gratuito en OsmAnd Cloud](https://osmand.net/blog/start).

La capacidad multiplataforma le permite usar OsmAnd Pro en todas las plataformas *([Android](../purchases/android.md)  ← →  [iOS](../purchases/ios.md)  →  [Web](https://www.osmand.net/map))*. Para ello necesita:

1. Suscribirse a **OsmAnd Pro**. Lea más sobre cómo hacerlo para [Android aquí](../purchases/android.md#how-to-buy), y para [iOS aquí](../purchases/ios.md#how-to-buy).
2. Cómo crear una cuenta de **OsmAnd Start**, lea más [aquí](https://osmand.net/blog/start#how-to-create-an-account).
3. Registre su [cuenta Pro o Start](/docs/user/personal/osmand-cloud/#cross-platform) en el servidor de OsmAnd dentro de la aplicación OsmAnd.
4. El correo electrónico registrado será su inicio de sesión para activar OsmAnd Pro en la plataforma web. La primera vez, es necesario elegir una contraseña para futuros accesos al portal web (por favor, siga las instrucciones en el portal web).


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