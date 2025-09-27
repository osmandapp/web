---
source-hash: e993c17565a6856353f05b6dabe09c469fb505cb96a56e920bca6326fc3eb2e1
sidebar_position: 2
title:  Rastreador de embarcaciones AIS
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



<InfoAndroidOnly />

## Resumen {#overview}

El complemento **Rastreador de embarcaciones AIS** muestra las posiciones del [Sistema de Identificación Automática (AIS)](https://en.wikipedia.org/wiki/Automatic_identification_system) y la información detallada sobre las embarcaciones cercanas. Los datos AIS se reciben a través de una conexión de red desde un receptor AIS externo.

:::caution DESCARGO DE RESPONSABILIDAD
**Este complemento es un proyecto de aficionado y no está diseñado para ser fiable o preciso. NO confíe en este software para la navegación o la seguridad de la vida.**
:::


## Parámetros de configuración requeridos {#required-setup-parameters}

La capacidad de usar mapas en línea se activa automáticamente en la versión de OsmAnd para iOS. Para mostrar mapas en línea en Android, debe realizar los siguientes ajustes:

1. [Activar](../plugins/index.md#enable--disable) el complemento **Rastreador de embarcaciones AIS** en el *Menú principal → Complementos → Rastreador de embarcaciones AIS*.
2. Configurar los [ajustes de AIS](../map/raster-maps.md#select-raster-maps)
3. Configurar una **conexión de servidor AIS** o conectar un **receptor AIS externo**.
4. Comprobar que las embarcaciones se muestran en el mapa de OsmAnd.

## Embarcaciones en el mapa {#vessels-on-the-map}

El AIS opera en *frecuencias VHF* (161.975 MHz y 162.025 MHz) y tiene un alcance de señal limitado debido a la propagación en línea de visión.

***Alcance de recepción AIS típico:***

- 15–20 millas náuticas (28–37 km)
- Depende de la altura de la antena, las condiciones ambientales y los obstáculos

***Visualización de AIS en el mapa:***

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rastreador de embarcaciones AIS](@site/static/img/plugins/ais/ais.png)

</TabItem>

</Tabs>

Cuando se configura correctamente, las posiciones de las embarcaciones aparecerán en el mapa. Características clave:

- Las embarcaciones se mueven según la velocidad y el rumbo en tiempo real.
- Nuevas embarcaciones entran y salen del área visible dinámicamente.
- Al tocar una embarcación se abre información detallada.


### Información de la embarcación AIS {#ais-vessel-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rastreador de embarcaciones AIS](@site/static/img/plugins/ais/ais_menu.png)  
![Rastreador de embarcaciones AIS](@site/static/img/plugins/ais/ais_menu_2.png)

</TabItem>

</Tabs>

Las embarcaciones AIS transmiten tres tipos de datos:

1. Información estática (datos que no cambian).  
    *Enviada cada **6 minutos** o bajo petición.*

    - **Nombre de la embarcación** (*si está configurado*)  
    - **MMSI (Identidad del Servicio Móvil Marítimo)** (*Identificador único de 9 dígitos de la embarcación*)
    - **Número IMO** (*si está disponible*)  
    - **Indicativo de llamada**  
    - **Tipo de embarcación** (*p. ej., Carga, Pasajeros, Pesquero*)  
    - **Dimensiones de la embarcación** (*Eslora y Manga*)  
    - **Posición de la antena AIS** (*Relativa al casco de la embarcación*)  

2. Información dinámica (datos en tiempo real).  
    *Enviada a diferentes intervalos dependiendo de la velocidad y la maniobra.*

    - **Coordenadas de la embarcación (Latitud y Longitud)**  
    - **Rumbo sobre el fondo (COG)**  
    - **Velocidad sobre el fondo (SOG)**  
    - **Rumbo** (*Dirección a la que apunta la proa*)
    - **Estado de la embarcación** (*En navegación, Fondeado, Maniobrando, etc.*)  
    - **Velocidad de giro (ROT)** (*Velocidad de cambio de rumbo*)  
    - **Hora de la última actualización**  

3. Información del viaje (establecida manualmente por la tripulación).  
    *Enviada cada **6 minutos**, establecida manualmente por la tripulación*

    - **Puerto de destino**
    - **Hora estimada de llegada (ETA)**  
    - **Calado** (*Profundidad de la embarcación bajo la superficie del agua*)  
    - **Tipo de carga** (*si se transmite*)
    - **Número de personas a bordo** (*opcional*)  

### Símbolos y leyendas de AIS {#ais-symbols-and-legends}

[Directrices para la presentación de símbolos AIS](https://www.e-navigation.nl/sites/default/files/sn_circ243-rev.2_-_guidelines_for_the_presentation_of_navigation-related_symbols_terms_and_abbreviations.pdf)

| Símbolos             | Descripción   |
|---------------------|---------------|
| | |
| **Símbolos de tipos de embarcación** |    |
| *Triángulo verde*    | Buque de carga    |
| *Triángulo azul*     | Buque de pasajeros |
| *Triángulo negro*    | Pesquero |
| *Triángulo amarillo*   | Remolcador       |
| *Triángulo rojo*      | Buque cisterna        |
| *Triángulo blanco*    | Buque militar |
| *Triángulo naranja*   | Embarcación especial (p. ej., práctico, rompehielos) |
| *Triángulo rojo intermitente* | Embarcación en peligro |
| | |
| **Símbolos de ayudas a la navegación** |    |
| *Boya verde*              | Marca de estribor (lado derecho del canal) |
| *Boya roja*                | Marca de babor (lado izquierdo del canal) |
| *Símbolo de ancla*           | Zona de fondeo |
| *Símbolo de barco (SS)*        | Terminal de ferry o pasajeros |
| *Símbolo de grúa portuaria*       | Puerto de carga |
| *Círculo negro*            | Plataforma offshore |
| | |
| **Indicadores de estado** |    |
| *Triángulo sólido*  | Embarcación en movimiento |
| *Triángulo hueco* | Fondeado o amarrado |
| *Flecha giratoria*  | En maniobra |
| *Icono rojo intermitente* | Alerta de emergencia |
| *Signo de exclamación naranja* | Mensaje de seguridad AIS |
| | |
| **Indicadores de ruta y velocidad** |    |
| *Línea azul delgada*  | Ruta planificada |
| *Línea de puntos*     | Trazado anterior |
| *Icono de reloj*      | Hora estimada de llegada (ETA) |
| *Icono de ola*       | Velocidad sobre el agua |

## Ajustes del complemento {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_ais_tracker_name,shared_string_settings"/>*

![Ajustes de AIS](@site/static/img/plugins/ais/ais_settings_2.png)  

</TabItem>

</Tabs>

El complemento *Rastreador de embarcaciones AIS* ofrece varios ajustes para personalizar la navegación y la interacción para usuarios con discapacidades. Estos ajustes se aplican a todos los [perfiles](../personal/profiles.md) en OsmAnd.

| Ajuste |  Descripción  | Ejemplo  |
|---------|---------------|----------|
| | | |
| **Ajustes de dirección IP** | | |
| Protocolo   | Elija el protocolo para recibir datos AIS | `UDP/TCP` |
| Dirección IP | Defina la IP de la fuente de datos AIS (si se usa TCP) | `192.168.200.16` |
| Puerto TCP   | Defina el número de puerto TCP para los datos AIS | `4001` |
| Puerto UDP   | Defina el puerto UDP para la recepción de AIS en OsmAnd  | `10110` |
| | | |
| **Tiempo de espera de recepción de señal AIS** | |  |
| Tiempo de espera para objetos AIS perdidos     | Las embarcaciones desaparecen si no se recibe señal durante un tiempo determinado | `3 - 20 min` |
| Tiempo de espera para la visibilidad de la embarcación      | Los iconos de las embarcaciones cambiarán de estado cuando no se reciba señal | `2 - 15 min / Desactivado` |
| | | |
| **Alertas de Punto Más Cercano de Aproximación (CPA)** | | |
| Tiempo de advertencia de CPA | La embarcación se marca en rojo si el tiempo hasta el CPA está por debajo de este límite | `1 - 60 min / Desactivado` |
| Distancia de advertencia de CPA | La embarcación se marca en rojo si la distancia al CPA está por debajo de este límite | `0.02 - 2 millas náuticas` |


### Modo de simulación AIS {#ais-simulation-mode}

> *Puede simular posiciones de embarcaciones AIS utilizando el [complemento de Desarrollo de OsmAnd](../plugins/development.md).*

1. **Descargar archivos de texto de datos AIS**:

    - [Prueba AIS 1](https://github.com/user-attachments/files/18689404/ais_test_1.txt)
    - [Prueba AIS 2](https://github.com/user-attachments/files/18689405/ais_test_2.txt)
    - [Único 3](https://github.com/user-attachments/files/18689403/333.txt)

2. **Cargar datos AIS en OsmAnd**  
Abra *<Translate android="true" ids="shared_string_menu,plugins_menu_group,development,shared_string_settings,ais_load_data"/>* y seleccione uno de los archivos descargados.

3. **Ver embarcaciones AIS en el mapa**  
Los iconos de las embarcaciones aparecerán según los datos simulados. Toque el icono de la embarcación para ver información detallada.


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Ajustes globales](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)
- [Complemento Náutico](../../user/plugins/nautical-charts.md)