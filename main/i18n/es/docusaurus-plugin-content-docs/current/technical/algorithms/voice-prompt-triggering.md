---
source-hash: ce62f6fd113ba54378f5dc39e541fa7e711306a641c814ab9db60c61a6c63dd1
sidebar_position: 4
---
import Translate from '@site/src/components/Translate.js';


# Activación de las indicaciones de voz de navegación {#navigation-voice-prompt-triggering}

                               
**(Compilado por Hardy 2013, reelaborado 2023-08)**
## Principio y configuración relacionada {#principle-and-related-settings}
* Las indicaciones se activan en función de un umbral de **distancia de anticipación**, derivado de la conversión de un tiempo de anticipación especificado a través de la **_<Translate android="true" ids="default_speed_setting_title" />_** del perfil. Para las indicaciones de primer plano, esta distancia de anticipación puede ajustarse en función de la velocidad real: aumentarse para garantizar que el anuncio se active lo suficientemente pronto a altas velocidades, o disminuirse para una mayor precisión a bajas velocidades.
* La **_<Translate android="true" ids="default_speed_setting_title" />_** del perfil es ajustable por el usuario, y cambiarla afectará, por lo tanto, las distancias de activación de las indicaciones de voz.
*Nota*: La _<Translate android="true" ids="default_speed_setting_title" />_ también afecta el tiempo de ruta calculado.
* La sincronización de las indicaciones de voz también puede ajustarse a través de la configuración **_<Translate android="true" ids="arrival_distance" />_**. Consulte la columna 'Configuración de llegada' más abajo para ver qué indicaciones de voz se verán afectadas. La distancia de activación se multiplicará por el siguiente factor:

**<Translate android="true" ids="arrival_distance" />** | Multiplicador de distancia
--- | --- 
**<Translate android="true" ids="arrival_distance_factor_early" />** | 1.5
**<Translate android="true" ids="arrival_distance_factor_normally" />** | 1
**<Translate android="true" ids="arrival_distance_factor_late" />** | 0.5
**<Translate android="true" ids="arrival_distance_factor_at_last" />** | 0.25
* Además, hay un **_Retraso de las indicaciones de voz_** configurable por el usuario (ajustable en el _plugin de desarrollo de OsmAnd_, _Indicaciones de voz de texto_, botón 11.2). Esto es particularmente necesario para el tipo de salida _Audio de llamada telefónica_, donde emulamos una llamada a un estéreo de automóvil que induce cierto retraso, para evitar que se corte el comienzo de las indicaciones. (Todas las distancias anunciadas en las indicaciones anticiparán cualquier _Retraso de las indicaciones de voz_).
* Silenciamos las indicaciones inmediatamente una vez que se refieren a eventos desactualizados, o si su dirección de viaje no parece estar en línea con una ruta actual.

## Velocidades predeterminadas del perfil base {#base-profile-default-speeds}
Aunque estas pueden ser ajustadas por el usuario, los valores predeterminados son:
* Conducción: 12.5 m/s (45 km/h)
* Ciclismo: 2.78 m/s (10 km/h)
* Caminata: 1.11 m/s (4 km/h)
* Barco: 1.39 m/s (5 km/h)
* Esquí: 1.39 m/s (5 km/h)
* Aeronave: 40 m/s (144 km/h)

## Tabla de activación {#trigger-table}

Los activadores se encuentran [aquí en el código](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/routing/data/AnnounceTimeDistances.java#L65). Los valores correspondientes para la configuración predeterminada de OsmAnd son:

Tipo de indicación | Tiempo de anticipación [s]:<br/>Distancia de anticipación<br/>correspondiente a velocidad predeterminada [m] | ¿Distancia de anticipación ajustada por velocidad real? | ¿Ajustable por configuración de llegada? | Comentario |
--- | --- | --- | --- | --- |
Gire ahora | **6.7 s / 3.2 s / 2 s:**<br/>Conducción: 83 m<br/>Ciclismo: 12(8) m<br/>Caminata: 12(2) m | :heavy_check_mark: (Proporcional a *velocidad real / Velocidad predeterminada*) | :heavy_check_mark: | Tiempo de anticipación (heurísticamente) = _máx(8, raíz cuadrada(Velocidad predeterminada * 3.6))_. La distancia de anticipación correspondiente se redondea a 12 m para permitir la imprecisión de la posición. |
Gire en X m | **22 s:**<br/>Conducción: 275 m<br/>Ciclismo: 61 m<br/>Caminata: 24 m | :heavy_check_mark: (Solo aumento) |  | Omitido si < 15 s antes del giro |
Prepárese para girar en X m | **115 s:**<br/>Conducción: 1438 m<br/>Ciclismo: 319 m<br/>Caminata: - |  |  | Omitido si < 150 m antes de "Girar en", omitido para _Velocidad predeterminada_ < 8 km/h |
Preparación larga para girar en X m | **300 s:**<br/>Conducción: -<br/>Ciclismo: -<br/>Caminata: - |  |  | Omitido para _Velocidad predeterminada_ < 108 km/h |
Siga adelante | **>300 s:**<br/>Conducción: 3750 m<br/>Ciclismo: 833 m<br/>Caminata: 333 m | | | Se reproduce después del cálculo de la ruta si no hay otra indicación pendiente, o después de un giro si el siguiente giro está a más de _Preparación larga_ |
Llegada a destino o intermedio | **5 s:**<br/>Conducción: 63 m<br/>Ciclismo: 14 m<br/>Caminata: 6(12) m | |:heavy_check_mark: | Mínimo 12 m |
Acercándose a un punto de referencia / favorito / POI | **60 s:**<br/>Conducción: 750 m<br/>Ciclismo: 167 m<br/>Caminata: 67 m | :heavy_check_mark: (Solo aumento) | :heavy_check_mark: | Limitado a un máximo de 1 punto a la vez |
Pasando un punto de referencia / favorito / POI | **15 s:**<br/>Conducción: 188 m<br/>Ciclismo: 42 m<br/>Caminata: 17 m | :heavy_check_mark: (Solo aumento) | :heavy_check_mark: | Limitado a un máximo de 3 puntos a la vez |
Alarma estándar | **12 s:**<br/>Conducción: 150 m<br/>Ciclismo: 33 m<br/>Caminata: 13 m | :heavy_check_mark: (Solo aumento) | :heavy_check_mark: |
Alarma cercana | **7s:**<br/> Conducción: 88 m<br/>Ciclismo: 20 m<br/>Caminata: 8 m | :heavy_check_mark: (Solo aumento) | :heavy_check_mark: | _Calma de tráfico_ utiliza la alarma de _Paso_ para la indicación de aproximación y filtra duplicados dentro de este radio |
Anuncio fuera de ruta | **20 s:**<br/>Conducción: 250m<br/>Ciclismo: 56m<br/>Caminata: 22m h| | :heavy_check_mark: | Puede deshabilitarse |
Señal GPS perdida | **20 s** | | | Se reproduce después de que la señal GPS se haya perdido durante >= 20 s y esto no haya sido causado por una acción del usuario. |