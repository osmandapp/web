---
source-hash: eafb2c57934c3fbb3a094db82d063658f9ebd6dc575f16b51dfce4826f7df701
sidebar_position: 2
title: Rastreador de buques AIS
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


<InfoIncompleteArticle/>

<InfoAndroidOnly />

## Descripción general {#overview}

El complemento **Rastreador de buques AIS** muestra las posiciones del [Sistema de Identificación Automática (AIS)](https://en.wikipedia.org/wiki/Automatic_identification_system) e información detallada sobre los buques cercanos. Los datos AIS se reciben a través de una conexión de red desde un receptor AIS externo.

:::caution DESCARGO DE RESPONSABILIDAD
**Este complemento es un proyecto de afición y no está diseñado para la fiabilidad o la precisión. NO confíe en este software para la navegación o la seguridad de la vida.**
:::


## Parámetros de configuración requeridos {#required-setup-parameters}

La capacidad de usar mapas en línea se habilita automáticamente en la versión de iOS de OsmAnd. Para mostrar mapas en línea en Android, debe realizar las siguientes configuraciones:

1. [Habilitar](../plugins/index.md#enable--disable) el complemento **Rastreador de buques AIS** en *Menú principal → Complementos → Rastreador de buques AIS*.
2. Configurar los [ajustes de AIS](../map/raster-maps.md#select-raster-maps)
3. Configurar una **conexión de servidor AIS** o conectar un **receptor AIS externo**.
4. Comprobar que los buques se muestran en el mapa de OsmAnd.

## Buques en el mapa {#vessels-on-the-map}

El AIS opera en *frecuencias VHF* (161.975 MHz y 162.025 MHz) y tiene un rango de señal limitado debido a la propagación en línea de visión.

***Rango de recepción AIS típico:***

- 15–20 millas náuticas (28–37 km)
- Depende de la altura de la antena, las condiciones ambientales y los obstáculos

***Visualización AIS en el mapa:***

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rastreador de buques AIS](@site/static/img/plugins/ais/ais.png)

</TabItem>

</Tabs>

Cuando se configura correctamente, las posiciones de los buques aparecerán en el mapa. Características clave:

- Los buques se mueven según la velocidad y el rumbo en tiempo real.
- Los nuevos buques entran y salen del área visible dinámicamente.
- Al tocar un buque, se abre información detallada.


### Información del buque AIS {#ais-vessel-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rastreador de buques AIS](@site/static/img/plugins/ais/ais_menu.png)
![Rastreador de buques AIS](@site/static/img/plugins/ais/ais_menu_2.png)

</TabItem>

</Tabs>

Los buques AIS transmiten tres tipos de datos:

1. Información estática (datos inmutables).
    *Enviado cada **6 minutos** o bajo petición.*

    - **Nombre del buque** (*si está configurado*)
    - **MMSI (Identidad de Servicio Móvil Marítimo)** (*Identificador único de buque de 9 dígitos*)
    - **Número IMO** (*si está disponible*)
    - **Indicativo de llamada**
    - **Tipo de buque** (*ej., Carga, Pasajeros, Buque de pesca*)
    - **Dimensiones del buque** (*Eslora y manga*)
    - **Posición de la antena AIS** (*Relativa al casco del buque*)

2. Información dinámica (datos en tiempo real).
    *Enviado a diferentes intervalos según la velocidad y la maniobra.*

    - **Coordenadas del buque (Latitud y Longitud)**
    - **Rumbo sobre el fondo (COG)**
    - **Velocidad sobre el fondo (SOG)**
    - **Rumbo** (*Dirección a la que apunta la proa*)
    - **Estado del buque** (*En marcha, Anclado, Maniobrando, etc.*)
    - **Velocidad de giro (ROT)** (*Velocidad de cambio de rumbo*)
    - **Hora de la última actualización**

3. Información de viaje (establecida manualmente por la tripulación).
    *Enviado cada **6 minutos**, establecido manualmente por la tripulación*

    - **Puerto de destino**
    - **Hora estimada de llegada (ETA)**
    - **Calado** (*Profundidad del buque bajo la superficie del agua*)
    - **Tipo de carga** (*si se transmite*)
    - **Número de personas a bordo** (*opcional*)

### Símbolos y leyendas AIS {#ais-symbols-and-legends}

[Directrices para la presentación de símbolos AIS](https://www.e-navigation.nl/sites/default/files/sn_circ243-rev.2_-_guidelines_for_the_presentation_of_navigation-related_symbols_terms_and_abbreviations.pdf)

| Símbolos | Descripción |
|---|---|
| | |
| **Símbolos de tipos de buques** | |
| *Triángulo verde* | Buque de carga |
| *Triángulo azul* | Buque de pasajeros |
| *Triángulo negro* | Buque de pesca |
| *Triángulo amarillo* | Remolcador |
| *Triángulo rojo* | Buque cisterna |
| *Triángulo blanco* | Buque militar |
| *Triángulo naranja* | Embarcación especial (ej., piloto, rompehielos) |
| *Triángulo rojo intermitente* | Buque en peligro |
| | |
| **Símbolos de ayudas a la navegación** | |
| *Boyas verdes* | Baliza de estribor (lado derecho del canal) |
| *Boyas rojas* | Baliza de babor (lado izquierdo del canal) |
| *Símbolo de ancla* | Zona de fondeo |
| *Símbolo de buque (SS)* | Terminal de ferry o pasajeros |
| *Símbolo de grúa portuaria* | Puerto de carga |
| *Círculo negro* | Plataforma offshore |
| | |
| **Indicadores de estado** | |
| *Triángulo sólido* | Buque en movimiento |
| *Triángulo hueco* | Anclado o amarrado |
| *Flecha giratoria* | Realizando maniobra |
| *Icono rojo intermitente* | Alerta de emergencia |
| *Exclamación naranja* | Mensaje de seguridad AIS |
| | |
| **Indicadores de ruta y velocidad** | |
| *Línea azul fina* | Ruta planificada |
| *Línea de puntos* | Trayectoria pasada |
| *Icono de reloj* | Hora estimada de llegada (ETA) |
| *Icono de onda* | Velocidad sobre el agua |

## Configuración del complemento {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_ais_tracker_name,shared_string_settings"/>*

![Configuración de AIS](@site/static/img/plugins/ais/ais_settings_2.png)

</TabItem>

</Tabs>

El complemento *Rastreador de buques AIS* ofrece varias configuraciones para personalizar la navegación y la interacción para usuarios con discapacidades. Estas configuraciones se aplican a todos los [perfiles](../personal/profiles.md) en OsmAnd.

| Configuración | Descripción | Ejemplo |
|---|---|---|
| | | |
| **Configuración de dirección IP** | | |
| Protocolo | Elegir protocolo para recibir datos AIS | `UDP/TCP` |
| Dirección IP | Definir IP de la fuente de datos AIS (si se usa TCP) | `192.168.200.16` |
| Puerto TCP | Definir número de puerto TCP para datos AIS | `4001` |
| Puerto UDP | Definir puerto UDP para recepción AIS de OsmAnd | `10110` |
| | | |
| **Tiempo de espera de recepción de señal AIS** | | |
| Tiempo de espera para objetos AIS perdidos | Los buques desaparecen si no se recibe señal durante un tiempo determinado | `3 - 20 min` |
| Tiempo de espera para la visibilidad del buque | Los iconos de los buques cambiarán de estado cuando no se reciba señal | `2 - 15 min / Deshabilitado` |
| | | |
| **Alertas de Punto de Aproximación Más Cercano (CPA)** | | |
| Tiempo de advertencia de CPA | El buque se marca en rojo si el tiempo hasta el CPA es inferior a este límite | `1 - 60 min / Deshabilitado` |
| Distancia de advertencia de CPA | El buque se marca en rojo si la distancia hasta el CPA es inferior a este límite | `0.02 - 2 millas náuticas` |


### Modo de simulación AIS {#ais-simulation-mode}

> *Puede simular posiciones de buques AIS utilizando el [complemento de desarrollo de OsmAnd](../plugins/development.md).*

1. **Descargar archivos de texto de datos AIS**:

    - [Prueba AIS 1](https://github.com/user-attachments/files/18689404/ais_test_1.txt)
    - [Prueba AIS 2](https://github.com/user-attachments/files/18689405/ais_test_2.txt)
    - [Único 3](https://github.com/user-attachments/files/18689403/333.txt)

2. **Cargar datos AIS en OsmAnd**
Abrir *<Translate android="true" ids="shared_string_menu,plugins_menu_group,development,shared_string_settings,ais_load_data"/>* y seleccionar uno de los archivos descargados.

3. **Ver buques AIS en el mapa**
Aparecerán iconos de buques basados en los datos simulados. Tocar el icono del buque para ver información detallada.


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Configuración global](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)
- [Complemento náutico](../../user/plugins/nautical-charts.md)

> *Última actualización: marzo de 2025*