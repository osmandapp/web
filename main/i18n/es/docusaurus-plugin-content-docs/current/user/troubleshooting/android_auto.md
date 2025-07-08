---
source-hash: e245d0a8d185e0eb4570fd1b908d1c8ccda0b97d189a853407a98e84348a2b57
sidebar_position: 7
title: Android Auto
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Retrasos de ubicación (fallos ANR) {#location-delays-anr-crashes}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_troubleshooting_1.png)

Android Auto y OsmAnd pueden detectar simultáneamente la ubicación del vehículo, lo que puede causar un retraso de 3 a 5 segundos en la visualización de la información en los widgets relacionados o un congelamiento. Para evitar esto, es necesario:

1. Abrir la configuración de Android Auto.
2. En Configuración, buscar Permisos de ubicación.
3. Esta sección muestra una lista de aplicaciones a las que se les permite usar la ubicación en Android Auto. Buscar la aplicación OsmAnd y permitir el uso de la ubicación.
4. La ubicación ahora solo será detectada por la aplicación OsmAnd en Android Auto, evitando retrasos en la visualización de la información de ubicación.

## Problema de orientación del mapa {#map-orientation-issue}

La orientación del mapa en dirección de movimiento está [invertida y se tambalea](https://github.com/osmandapp/OsmAnd/issues/16041). Se resuelve activando la opción ["Rumbo aproximado"](../navigation/guidance/map-during-navigation.md#map-during-navigation):

- Visible solo si el [Desarrollo de OsmAnd](../plugins/development.md) está habilitado.
- Ubicado en *Menú → Ajustes → Perfil → Ajustes de navegación → [Mapa durante la navegación](../navigation/guidance/map-during-navigation.md) → Rumbo aproximado*.

## Problema de control de volumen {#volume-control-issue}

En la mayoría de los casos, todos los tipos de **señales** permanecen a un volumen máximo constante, que no se ve afectado por la configuración de reproducción de audio simultánea. Para cambiar el volumen de las indicaciones de navegación de OsmAnd al usar Android Auto, vaya a *Configuración → Voz → Volumen de voz* en la pantalla del sistema multimedia del vehículo.

Si este método no funciona, hay otra opción. Para ajustar el volumen de las notificaciones, debe activar el Asistente de Google durante una llamada. Mantenga presionado el botón del volante que activa el Asistente de Google y, durante la llamada, ajuste el volumen usando el tablero o el volante.