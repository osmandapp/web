---
source-hash: 912ad78d69a9d46cc8391bc3f8411dc7ce9423498430a6854908948053c3f739
sidebar_position: 3
title:  Menú principal
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';




## Resumen {#overview}

**Menú principal** es una lista principal de opciones disponibles para usar en la aplicación. Proporciona acceso rápido a la configuración del perfil, ajustes globales, búsqueda, datos personales, navegación y otras funciones.

El icono del [Menú principal](../widgets/map-buttons.md#main-menu) '&#8801;' se encuentra en la esquina inferior izquierda de la pantalla del Mapa. En el modo de navegación, este botón no es visible por defecto. Aparece después de un toque corto en el mapa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú principal Android](@site/static/img/menu/main_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú principal iOS](@site/static/img/menu/main_menu_ios.png)

</TabItem>

</Tabs>


## Menú principal (Menú lateral) {#main-menu-side-menu}

### Funciones {#features}

- [Marcadores de mapa](../personal/markers.md) es una herramienta que permite marcar un lugar en el mapa.
- [Mis lugares](../personal/myplaces.md) es un menú que incluye por defecto Favoritos y tracks y además puede incluir [Notas de A/V](../plugins/audio-video-notes.md) y [Ediciones OSM](../plugins/osm-editing.md) (si dichos plugins están activados).
- [Buscar](../search/index.md) (Android) es una herramienta que le permite encontrar el lugar u objeto que existe en el mapa.
- El botón [Indicaciones](../widgets/map-buttons.md#directions) permite crear una ruta e iniciar la navegación.
- [Configurar mapa](../map/configure-map-menu.md) es un menú que permite configurar la vista del mapa.
- [Descargar mapas](../start-with/download-maps.md) es un menú que contiene todos los archivos que se pueden descargar.
- [Guías de viaje (Beta)](../plan-route/travel-guides.md) (*Android*) es una herramienta que permite usar la guía de Wikivoyage para su viaje.
- [Planificar ruta](../plan-route/create-route.md) es una herramienta que le permite medir distancias en el mapa, crear tracks GPX o añadir nuevos segmentos a los existentes.
- [* Grabación de viaje](../plugins/trip-recording.md) (*Android*) es una herramienta que permite grabar todos los movimientos en un track utilizando el GPS del teléfono.

### Ajustes {#settings}

- [Configurar pantalla](../widgets/configure-screen.md) es un menú que permite configurar la visualización de widgets en el Mapa.
- [Plugins](../plugins/index.md#configure-plugin) es una lista de funcionalidades adicionales y ajustes avanzados.
- [Ajustes](../personal/global-settings.md) es un menú que permite configurar los parámetros principales de la aplicación.
- [Ayuda](./first-steps.md#offline-help) proporciona acceso rápido a su guía, información sobre la versión de la aplicación y permite contactar rápidamente con el equipo de desarrollo.

### Perfil activo (Android) {#active-profile-android}

*Menú principal* proporciona acceso rápido para cambiar y [personalizar el perfil](../personal/profiles.md). El propósito principal de los perfiles es tener una apariencia y sensación de la aplicación diferente para la navegación. Aunque podría usarlo para personalizar la pantalla y los widgets y cambiar de perfil para diferentes propósitos de visualización. Todos los [ajustes](../personal/profiles.md) se configuran por separado para cada perfil.

![menú_perfil](@site/static/img/menu/profile_menu.png)

En este menú puede **cambiar** el perfil activo, **configurar** (cambiar ajustes) para el perfil activo o **gestionar** todos los perfiles de la aplicación.


### Personalizar (Uso avanzado de Android) {#customize-advanced-use-of-android}

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,shared_string_drawer"/> →  &#65049; → Activar*.  

![Elementos del menú lateral](@site/static/img/settings/drawer_menu_correct.png)  

- Este menú le permite cambiar el orden, ocultar o mostrar elementos del [Menú lateral](../personal/profiles.md#drawer), copiar una lista de elementos de otro perfil y restablecer los ajustes predeterminados.  

- El botón *Menos* elimina un elemento del *Menú principal* en el menú lateral y lo mueve a la sección *Oculto*. El botón *Mover* cambia la posición del elemento seleccionado en la lista.  

- Los elementos movidos a la sección *Oculto* no se muestran en el menú lateral, pero todas las opciones, ajustes o plugins de esta lista continúan funcionando. Puede restaurar los elementos tocando el botón verde a la izquierda de sus nombres.  
    ![Elementos ocultos del menú lateral](@site/static/img/settings/drawer_menu_hidden_items.png)