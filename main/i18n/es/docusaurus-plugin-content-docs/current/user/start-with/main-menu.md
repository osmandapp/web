---
source-hash: 9157ad0f0a716d1c05272f2fefedef4131754bbfda33b5fd36124e58bb0e2ce1
sidebar_position: 3
title: Menú principal
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';




## Descripción general {#overview}

El **Menú principal** es una lista primaria de opciones disponibles para usar en la aplicación. Proporciona acceso rápido a la configuración del perfil, la configuración global, la búsqueda, los datos personales, la navegación y otras funciones.

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
- [Mis lugares](../personal/myplaces.md) es un menú que incluye por defecto Favoritos y pistas y, además, puede incluir [Notas A/V](../plugins/audio-video-notes.md) y [Ediciones OSM](../plugins/osm-editing.md) (si dichos complementos están activados).
- [Buscar](../search/index.md) (Android) es una herramienta que permite encontrar el lugar u objeto que existe en el mapa.
- El botón [Direcciones](../widgets/map-buttons.md#directions) permite crear una ruta e iniciar la navegación.
- [Configurar mapa](../map/configure-map-menu.md) es un menú que permite configurar la vista del mapa.
- [Descargar mapas](../start-with/download-maps.md) es un menú que contiene todos los archivos que se pueden descargar.
- [Guías de viaje (Beta)](../plan-route/travel-guides.md) (*Android*) es una herramienta que permite usar la guía Wikivoyage para tu viaje.
- [Planificar ruta](../plan-route/create-route.md) es una herramienta que permite medir distancias en el mapa, crear pistas GPX o añadir nuevos segmentos a los existentes.
- [* Grabación de viaje](../plugins/trip-recording.md) (*Android*) es una herramienta que permite registrar todos los movimientos en una pista usando el GPS del teléfono.

### Ajustes {#settings}

- [Configurar pantalla](../widgets/configure-screen.md) es un menú que permite configurar la visualización de widgets en el Mapa.
- [Plugins](../plugins/index.md#configure-plugin) es una lista de funcionalidades adicionales y configuraciones avanzadas.
- [Ajustes](../personal/global-settings.md) es un menú que permite configurar los parámetros principales de la aplicación.
- [Ayuda](./first-steps.md#offline-help) proporciona acceso rápido a tu guía, información sobre la versión de la aplicación y permite contactar rápidamente con el equipo de desarrollo.

### Perfil activo (Android) {#active-profile-android}

El *Menú principal* proporciona acceso rápido para cambiar y [personalizar el perfil](../personal/profiles.md). El propósito principal de los perfiles es tener una apariencia diferente de la aplicación para la navegación. Sin embargo, puedes usarlo para personalizar la pantalla y los widgets y cambiar de perfil para diferentes propósitos de visualización. Todas las [configuraciones](../personal/profiles.md) se configuran por separado para cada perfil.

![profile_menu](@site/static/img/menu/profile_menu.png)

En este menú puedes **cambiar** el perfil activo, **configurar** (cambiar ajustes) para el perfil activo o **gestionar** todos los perfiles de la aplicación.


### Personalizar (Uso avanzado de Android) {#customize-advanced-use-of-android}

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,shared_string_drawer"/> → &#65049; → Habilitar*.

![Elementos del menú del cajón ](@site/static/img/settings/drawer_menu_correct.png)

- Este menú permite cambiar el orden, ocultar o mostrar elementos del [Cajón](../personal/profiles.md#drawer), copiar una lista de elementos de otro perfil y restablecer la configuración predeterminada.

- El botón *Menos* elimina un elemento del *Menú principal* en el cajón y lo mueve a la sección *Ocultos*. El botón *Mover* cambia la posición del elemento seleccionado en la lista.

- Los elementos movidos a la sección *Ocultos* no se muestran en el menú del Cajón, pero todas las opciones, configuraciones o complementos de esta lista continúan funcionando. Puedes restaurar los elementos tocando el botón verde a la izquierda de sus nombres.
    ![Elementos ocultos del menú del cajón ](@site/static/img/settings/drawer_menu_hidden_items.png)

> *Última actualización: Julio de 2022*