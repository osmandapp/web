---
source-hash: cab83698857aced02ef3ef257f82a8843950da7227a14609c1fd937c86c5c499
sidebar_position: 2
title:  General
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


Problemas generales relacionados con diversas funciones de OsmAnd.

## Consumo de batería {#battery-consumption}

### Parece que OsmAnd consume demasiada batería {#osmand-seems-to-use-up-too-much-battery-power}

Ha habido informes de usuarios sobre un consumo excesivo de batería por parte de OsmAnd, con casos en los que OsmAnd fue responsable de hasta el 90% del uso de la batería. Sin embargo, hemos realizado muchas pruebas y no hemos podido reproducir dichos resultados.

En circunstancias normales, OsmAnd solo consume energía cuando es necesario para funciones activas como la navegación en vivo o la grabación de rutas. Cuando estos servicios están activos, aparecen en el área de notificaciones de Android. Si no se ve ninguna notificación de este tipo, OsmAnd no está consumiendo energía en segundo plano.

Varios factores influyen en el consumo de batería: la antigüedad del dispositivo, el número de ciclos de carga, la capacidad de la batería, la temperatura y más. A continuación se presentan las tasas típicas de consumo de batería, basadas en pruebas realizadas en un dispositivo de gama media:

| Función del dispositivo | Consumo de batería por hora |
| :--- | :--- |
| Dispositivo típico en reposo solo con aplicaciones estándar activas | 0.5 % |
| Pantalla encendida (típicamente) | 6 % |
| GPS activo (típicamente) | 5 % |
| OsmAnd ejecutándose en segundo plano para la grabación de rutas | 0.5 % |
| OsmAnd sin ejecutar ningún servicio en segundo plano | 0 % |

#### Consumo de batería por función de OsmAnd {#osmand-function-battery-consumption}

| Función de OsmAnd | Consumo de batería por hora |
| :--- | :--- |
| Grabación de ruta con la pantalla apagada | 6 % |
| Navegación con la pantalla encendida | 12 % |

El consumo total de energía debería resultar de la suma de estos componentes según corresponda, dependiendo de cómo use OsmAnd. Por favor, informe si observa desviaciones significativas de estos valores típicos.


### Optimización del consumo de batería {#optimizing-battery-consumption}

Al usar OsmAnd, varias funciones pueden influir en el consumo de batería, especialmente durante actividades como la navegación o la grabación de rutas. Aquí hay algunos consejos para ayudar a gestionar el uso de la batería de manera efectiva:

- **Control de pantalla durante la navegación** (*Android*). Para ahorrar energía, puede configurar OsmAnd para que mantenga la pantalla apagada durante la navegación, a menos que ocurra un giro o un evento importante. Esto es particularmente útil durante la navegación por voz. Para más detalles, consulte *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2"/> → [<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)*.

- **Ajustes de navegación para ahorrar energía**. Puede reducir el consumo de batería minimizando la frecuencia de redibujado del mapa y limitando la precisión del GPS. Para ajustar estas configuraciones, vaya a *Navegación → Ajustes → Navegación de ruta*. Para más información, consulte [ahorro de energía durante la navegación](../navigation/setup/route-navigation.md#power-saving-tips).

- **Gestión de capas y detalles del mapa**. Desactive las características del mapa que no necesite, como el relieve 3D, las curvas de nivel o las sombras de colinas. También puede reducir el número de objetos mostrados (etiquetas de PDI, límites, números de casa, etc.) a través del menú *Configurar mapa*. Desactivar estas capas ayuda a reducir la frecuencia de redibujado del mapa, lo que disminuye el consumo de energía.

- **Desactivación del zoom automático**. El zoom automático durante la navegación puede causar frecuentes redibujados del mapa, lo que aumenta el uso de la batería. Desactivar esta función puede ayudar a reducir el consumo de energía. Vaya a *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>* para desactivar el zoom automático. Para más detalles, visite [Mapa durante la navegación](../navigation/guidance/map-during-navigation.md).

- **Optimización de los ajustes de grabación de rutas**. Asegúrese de ajustar la precisión del GPS y el uso de la pantalla durante la grabación de rutas para ahorrar batería. Visite la sección de [solución de problemas de grabación de rutas](../troubleshooting/track-recording-issues.md) para más orientación.


## Privacidad {#privacy}

<!--
Privacy related issues (delete history / check internet usage / permissions).
-->

### Cómo borrar el historial de búsqueda {#how-to-delete-search-history}

Para eliminar el historial de búsqueda en OsmAnd:

1. Abra el menú *Buscar*.
2. Mantenga pulsado cualquier resultado de búsqueda.
3. Seleccione los resultados que desea eliminar, o use la opción *Seleccionar todo* en la esquina superior izquierda para eliminar todos los resultados.
4. Toque el icono de la *Papelera* en la esquina superior derecha para confirmar la eliminación.

Para instrucciones más detalladas sobre la funcionalidad de búsqueda, puede consultar [esta guía](../search/search-history.md).


## Otros {#other}

### Problema con la conexión GPS (Android) {#problem-with-the-gps-connection-android}

OsmAnd depende de los datos de ubicación proporcionados por su dispositivo Android a través de la API de Android.

Para resolver problemas de conexión GPS, siga estos pasos:

1. **Cambiar fuente de ubicación**. Pruebe diferentes opciones como Servicios de Google Play o API de Android en *Ajustes de OsmAnd → Fuente de ubicación*.
2. **Actualizar la API de servicios de Google**. Asegúrese de tener la última versión de [Google Play](https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en&gl=US).
3. **Comprobar los ajustes de ubicación de Android**. Vaya a los Ajustes del sistema de Android y asegúrese de que el Acceso a la ubicación esté activado y configurado en Alta precisión. También puede intentar borrar la caché y reiniciar su dispositivo. Pueden ocurrir problemas de GPS si edificios u objetos grandes interfieren con la señal. Pruebe el rendimiento del GPS y, si la señal es débil, establezca la precisión mínima de grabación en más de 15 metros.
4. **Activar el widget de GPS**. Use el widget de información de GPS para verificar las conexiones de los satélites. Si no hay conexiones de satélites, su dispositivo no determinará la ubicación y el número de satélites será 0. Puede encontrar más detalles en la [guía del widget de GPS](../widgets/info-widgets.md#gps-info).
5. **Usar solo la señal GPS**. Configure su dispositivo para que use solo GPS (desactive la ubicación basada en Wi-Fi o Bluetooth). Las instrucciones están disponibles en el [Soporte de Google](https://support.google.com/android/answer/3467281?hl=en).
6. **Reinstalar OsmAnd**. Si los pasos anteriores no funcionan, intente reinstalar la aplicación OsmAnd para borrar datos incorrectos y resolver problemas de GPS. Antes de hacerlo, exporte todos sus datos guardados.
7. **Verificar la RAM del dispositivo**. Si el problema persiste, puede deberse a una memoria insuficiente, así que asegúrese de que su dispositivo tenga suficiente RAM disponible.


### Problema de discrepancia de correo electrónico durante la compra de OsmAnd Pro {#email-mismatch-issue-during-osmand-pro-purchase}

<!-- ???
or this title:
### Resolving payment account and app email sync issues in OsmAnd {#resolving-payment-account-and-app-email-sync-issues-in-osmand}
-->

Si encuentra un problema en el que el correo electrónico asociado con su compra de OsmAnd Pro no coincide con el correo electrónico de la aplicación OsmAnd, siga estos pasos para resolver el problema:

1. **Verifique las cuentas de Google Play y Pay**. Asegúrese de que el correo electrónico correcto esté vinculado a sus cuentas de Google Play Store y Pay. El proceso de pago es gestionado por estos servicios, y la discrepancia de correo electrónico podría ocurrir debido a que un correo electrónico antiguo todavía está asociado con su perfil de pago.

2. **Verifique el correo electrónico de la aplicación OsmAnd**. Vuelva a verificar la dirección de correo electrónico en su aplicación OsmAnd para asegurarse de que coincida con su correo electrónico actual de Google Play. Esto se puede hacer abriendo la aplicación y navegando a la configuración de la cuenta.

3. **Restaurar compras**. Verifique la disponibilidad y adecuación de su compra. Para ello, vaya a OsmAnd *Menú → Ajustes → Compras*. Si los datos mostrados no coinciden con sus expectativas, intente [Restaurar compras](./purchases_payments.md#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services).

4. **Borrar caché y datos de la aplicación**. Borre la caché y los datos de la aplicación OsmAnd yendo a *Ajustes → Aplicaciones → OsmAnd → Almacenamiento → Borrar caché y Borrar datos* de su dispositivo. Esto actualizará la aplicación y eliminará cualquier problema residual de la cuenta antigua.

5. **Reinstalar OsmAnd**. Si borrar la caché no resuelve el problema, intente desinstalar y reinstalar la aplicación. Antes de hacer esto, asegúrese de hacer una copia de seguridad de cualquier dato importante (rutas, favoritos) yendo a *Menú → Ajustes → Exportar a archivo*. Reinstalar la aplicación asegurará que todos los detalles de la cuenta se actualicen correctamente.

6. **Desactivar el proxy**. Verifique la configuración de proxy de la aplicación y asegúrese de que el proxy esté desactivado yendo a *Menú → Ajustes → Ajustes de OsmAnd → Proxy*. Un proxy o VPN podría interferir con la sincronización de la cuenta.

7. **Volver a iniciar sesión o usar la Web para la gestión de la cuenta**. Si sigue teniendo problemas, intente cerrar sesión y volver a iniciarla para actualizar la conexión de la aplicación a su cuenta actual. Si encuentra algún problema al eliminar la cuenta antigua en la aplicación, considere gestionar su cuenta a través de la versión web de OsmAnd.