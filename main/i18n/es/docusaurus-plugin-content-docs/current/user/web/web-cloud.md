---
source-hash: 751ce0d01399c5201cf9fd9a85ce2e3a31e3f473f43bd4237e02b1fda097d4dd
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

#### Accesos a la suscripción {#subscription-accesses}

El Portal de Mapas se puede utilizar sin registro; sin embargo, algunas funciones están disponibles exclusivamente para usuarios de OsmAnd Pro y OsmAnd Start:

| Funciones | Versiones |
|--- |--- |
| [Ruta de navegación](./planner.md) | Gratis |
| [Crear pista](./planner.md) | Gratis |
| [Clima](./web-map.md) | Gratis |
| [Favoritos](./web-map.md) | [Osmand Start](https://osmand.net/blog/start) o <ProFeature/> |
| [Sincronización de OsmAnd Cloud](./web-cloud.md) | [Osmand Start](https://osmand.net/blog/start) o <ProFeature/> |
| [Búsqueda web](./web-search.md)|[Osmand Start](https://osmand.net/blog/start) o <ProFeature/>|
| [Pistas](./web-map.md) | <ProFeature/> |


## Cómo empezar {#how-to-start}

Si tienes una cuenta [OsmAnd Pro](../personal/osmand-cloud.md#login) o quieres crear una cuenta [OsmAnd Start](../personal/osmand-cloud.md#osmand-start), debes seguir los siguientes pasos:

- Ve al [*Portal de Mapas de OsmAnd*](https://osmand.net/map).
- Abre el menú **Cuenta**.
  - *Iniciar sesión*. Introduce el correo electrónico que utilizaste para crear tu cuenta. Para suscripciones Pro o Start.
  - *Crear cuenta*. Para OsmAnd Start.


## Cómo cambiar el idioma {#how-to-change-language}

Si quieres cambiar el idioma de visualización:

- La versión web de OsmAnd utiliza el idioma de la configuración del navegador.
- Para Chrome, la prioridad es `chrome://settings/languages`.
- Puedes cambiar el idioma del sistema (menú) manualmente seleccionando:
    *Menú →* ⚙ *→ Desactivar idioma*.


## Gestión de la cuenta {#managing-account}

*Menú general → Cuenta*

Después de registrarse en la web, los usuarios pueden acceder a la información de su cuenta, descargar copias de seguridad, cerrar sesión, eliminar su cuenta o cambiar su dirección de correo electrónico.

#### Acceder a la cuenta {#access-account}

#### Copias de seguridad {#backups}

#### Cerrar sesión y eliminar {#log-out-and-delete}

#### Cambiar dirección de correo electrónico {#change-email-address}


## Sincronización de OsmAnd Pro y OsmAnd Start {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** es una suscripción de pago [multiplataforma](../troubleshooting/setup.md#cross-platform).
- **OsmAnd Start** es un [registro gratuito de OsmAnd Cloud](https://osmand.net/blog/start).

La capacidad multiplataforma te permite usar OsmAnd Pro en todas las plataformas *([Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map))*. Para ello, necesitas:

1. Suscribirte a **OsmAnd Pro**. Lee más sobre cómo hacerlo para [Android aquí](../purchases/android.md#how-to-buy), y para [iOS aquí](../purchases/ios.md#how-to-buy).
2. Para crear una cuenta **OsmAnd Start**, lee más [aquí](https://osmand.net/blog/start#how-to-create-an-account).
3. Registra tu cuenta [Pro o Start](../troubleshooting/setup.md#cross-platform) en el servidor de OsmAnd dentro de la aplicación OsmAnd.
4. El correo electrónico registrado será tu inicio de sesión para activar OsmAnd Pro en la plataforma web. La primera vez, es necesario elegir una contraseña para futuras entradas al portal web (por favor, usa las instrucciones del portal web).

- Introduce tu *correo electrónico* y *contraseña* para [osmand.net/map](https://osmand.net/map/).

![Ver activación de OsmAnd Web](@site/static/img/web/web_pro_activation.png)

- Tus datos, como pistas (OsmAnd Pro) y favoritos (OsmAnd Pro y OsmAnd Start), aparecerán en el menú después de iniciar sesión. Están disponibles para su visualización en el mapa. Pero necesitas [sincronizar estos datos](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) desde tus dispositivos.

![Ver datos de OsmAnd Web](@site/static/img/web/web_data.png)

- Para *DESCARGAR COPIA DE SEGURIDAD* de [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), haz clic en el campo de inicio de sesión. En el campo de inicio de sesión puedes ver información de los archivos (número total de archivos, tamaño total de los archivos, almacenamiento en la nube utilizado) e información de la cuenta (tipo de suscripción, hora de inicio y hora de vencimiento de tu suscripción).

![Ver archivo de copia de seguridad de OsmAnd Web](@site/static/img/web/web_backup_file.png)

Elige los archivos necesarios para descargar, el formato `.zip` o `.osf` de los archivos descargados y haz clic en el botón *DESCARGAR COPIA DE SEGURIDAD*:

![Ver archivo de copia de seguridad de OsmAnd Web](@site/static/img/web/web_backup_file_1.png)

También hay un botón para *cerrar sesión* de la cuenta.

- *CERRAR SESIÓN*, *ELIMINAR TU CUENTA* o *Cambiar correo electrónico* también los encuentras en el campo de inicio de sesión. Para abrir *ELIMINAR TU CUENTA* o *Cambiar correo electrónico* debes hacer clic en *Área peligrosa*.

![Ver archivo de copia de seguridad de OsmAnd Web](@site/static/img/web/web_backup_file_2.png)


## Datos de la nube {#cloud-data}

[Pistas y Favoritos](web-map.md#tracks).
<!--
## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->



> *Última actualización: Septiembre de 2024*