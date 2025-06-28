---
source-hash: 0a0e6bbadf34561e82d857c6270b71b1fa26543e35edd9ea4cda96e07711812f
sidebar_position: 2
title: General
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


Problemas generales relacionados con varias características de OsmAnd.

## Consumo de batería {#battery-consumption}

### OsmAnd parece consumir demasiada energía de la batería {#osmand-seems-to-use-up-too-much-battery-power}

Ha habido informes de usuarios de que OsmAnd consume una cantidad excesiva de energía de la batería, con casos en los que OsmAnd fue responsable de hasta el 90% del uso de la batería. Sin embargo, hemos realizado muchas pruebas y no pudimos reproducir tales resultados.

En circunstancias normales, OsmAnd solo consume energía cuando es necesario para funciones activas como la navegación en vivo o la grabación de pistas. Cuando estos servicios están activos, aparecen en el área de notificación de Android. Si no hay ninguna notificación visible, OsmAnd no está consumiendo energía en segundo plano.

Varios factores influyen en el consumo de la batería: la antigüedad del dispositivo, el número de ciclos de carga, la capacidad de la batería, la temperatura y más. A continuación se muestran las tasas de consumo de batería típicas, basadas en pruebas realizadas en un dispositivo de gama media:

| Función del dispositivo | Consumo de batería por hora |
| :--- | :--- |
| Dispositivo típico en reposo con solo aplicaciones estándar activas | 0.5 % |
| Pantalla encendida (típicamente) | 6 % |
| GPS activo (típicamente) | 5 % |
| OsmAnd ejecutándose en segundo plano para grabar pistas | 0.5 % |
| OsmAnd no ejecuta ningún servicio en segundo plano | 0 % |

#### Consumo de batería de la función OsmAnd {#osmand-function-battery-consumption}

| Función de OsmAnd | Consumo de batería por hora |
| :--- | :--- |
| Grabación de pistas con la pantalla apagada | 6 % |
| Navegación con la pantalla encendida | 12 % |

El consumo total de energía debe ser el resultado de sumar estos componentes según corresponda, dependiendo de cómo utilice OsmAnd. Informe si observa desviaciones significativas de estos valores típicos.

### Optimización del consumo de batería {#optimizing-battery-consumption}

Al usar OsmAnd, varias características pueden influir en el consumo de la batería, especialmente durante actividades como la navegación o la grabación de pistas. Aquí hay algunos consejos para ayudar a administrar el uso de la batería de manera efectiva:

- **Control de pantalla durante la navegación** (*Android*). Para ahorrar energía, puede configurar OsmAnd para mantener la pantalla apagada durante la navegación a menos que ocurra un giro o un evento importante. Esto es particularmente útil durante la navegación por voz. Para obtener más detalles, consulte *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2"/> → [<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)*.

- **Configuración de navegación de ahorro de energía**. Puede reducir el consumo de batería minimizando la frecuencia de redibujado del mapa y limitando la precisión del GPS. Para ajustar esta configuración, vaya a *Navegación → Configuración → Navegación de ruta*. Para obtener más información, consulte [ahorro de energía durante la navegación](../navigation/setup/route-navigation.md#saving-power-during-navigation).

- **Gestión de capas y detalles del mapa**. Desactive las funciones innecesarias del mapa, como el relieve 3D, las curvas de nivel o los sombreados. También puede reducir el número de objetos mostrados (etiquetas de PDI, límites, números de casa, etc.) a través del menú *Configurar mapa*. Deshabilitar estas capas ayuda a reducir la frecuencia de redibujado del mapa, lo que disminuye el consumo de energía.

- **Deshabilitar el zoom automático**. El zoom automático durante la navegación puede causar frecuentes redibujados del mapa, lo que aumenta el uso de la batería. Deshabilitar esta función puede ayudar a reducir el consumo de energía. Vaya a *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>* para desactivar el zoom automático. Para obtener más detalles, visite [Mapa durante la navegación](../navigation/guidance/map-during-navigation.md).

- **Optimización de la configuración de grabación de pistas**. Asegúrese de ajustar la precisión del GPS y el uso de la pantalla durante la grabación de pistas para ahorrar batería. Visite la sección [Solución de problemas de grabación de pistas](../troubleshooting/track-recording-issues.md) para obtener más orientación.

## Privacidad {#privacy}

<!--
Problemas relacionados con la privacidad (eliminar historial / verificar uso de Internet / permisos).
-->

### Cómo eliminar el historial de búsqueda {#how-to-delete-search-history}

Para eliminar el historial de búsqueda en OsmAnd:

1. Abra el menú *Buscar*.
2. Mantenga pulsado cualquier resultado de búsqueda.
3. Seleccione los resultados que desea eliminar, o use la opción *Seleccionar todo* en la esquina superior izquierda para eliminar todos los resultados.
4. Toque el icono de la *Papelera* en la esquina superior derecha para confirmar la eliminación.

Para obtener instrucciones más detalladas sobre la funcionalidad de búsqueda, puede consultar [esta guía](../search/search-history.md).

## Otros {#other}

### Problema con la conexión GPS (Android) {#problem-with-the-gps-connection-android}

OsmAnd se basa en los datos de ubicación proporcionados por su dispositivo Android a través de la API de Android.

Para resolver problemas de conexión GPS, siga estos pasos:

1. **Cambiar la fuente de ubicación**. Pruebe diferentes opciones como Google Play Services o Android API en *Configuración de OsmAnd → Fuente de ubicación*.
2. **Actualizar la API de Google Service**. Asegúrese de tener la última versión de [Google Play](https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en&gl=US).
3. **Verificar la configuración de ubicación de Android**. Vaya a la configuración del sistema Android y asegúrese de que el acceso a la ubicación esté activado y configurado en Alta precisión. También puede intentar borrar la caché y reiniciar su dispositivo. Los problemas de GPS pueden ocurrir si los edificios u objetos grandes interfieren con la señal. Pruebe el rendimiento del GPS y, si la señal es débil, establezca la precisión mínima de grabación en más de 15 metros.
4. **Habilitar el widget GPS**. Use el widget de información del GPS para verificar las conexiones satelitales. Si no hay conexiones satelitales, su dispositivo no determinará la ubicación y el número de satélites será 0. Se pueden encontrar más detalles en la [guía del widget GPS](../widgets/info-widgets.md#gps-info-android).
5. **Usar solo señal GPS**. Configure su dispositivo para usar solo GPS (deshabilite la ubicación basada en Wi-Fi o Bluetooth). Las instrucciones están disponibles en [Soporte de Google](https://support.google.com/android/answer/3467281?hl=en).
6. **Reinstalar OsmAnd**. Si los pasos anteriores no funcionan, intente reinstalar la aplicación OsmAnd para borrar datos incorrectos y resolver problemas de GPS. Antes de hacerlo, exporte todos sus datos guardados.
7. **Verificar la RAM del dispositivo**. Si el problema persiste, puede deberse a una memoria insuficiente, así que asegúrese de que su dispositivo tenga suficiente RAM disponible.

### Problema de falta de coincidencia de correo electrónico durante la compra de OsmAnd Pro {#email-mismatch-issue-during-osmand-pro-purchase}

<!-- ???
o este título:
### Resolución de problemas de sincronización de cuentas de pago y correo electrónico de la aplicación en OsmAnd {#resolving-payment-account-and-app-email-sync-issues-in-osmand}
-->

Si encuentra un problema en el que el correo electrónico asociado con su compra de OsmAnd Pro no coincide con el correo electrónico de la aplicación OsmAnd, siga estos pasos para resolver el problema:

1. **Verifique las cuentas de Google Play y Pay**. Asegúrese de que el correo electrónico correcto esté vinculado a sus cuentas de Google Play Store y Pay. El proceso de pago es manejado por estos servicios, y la falta de coincidencia del correo electrónico podría ocurrir debido a un correo electrónico antiguo que aún está asociado con su perfil de pago.

2. **Verifique el correo electrónico de la aplicación OsmAnd**. Vuelva a verificar la dirección de correo electrónico en su aplicación OsmAnd para asegurarse de que coincida con su correo electrónico actual de Google Play. Esto se puede hacer abriendo la aplicación y navegando a la configuración de la cuenta.

3. **Restaurar compras**. Verifique la disponibilidad y la idoneidad de su compra. Para hacer esto, vaya a *Menú de OsmAnd → Configuración → Compras*. Si los datos mostrados no coinciden con sus expectativas, intente [Restaurar compras](./purchases_payments.md#how-to-restore-purchases).

4. **Borrar caché y datos de la aplicación**. Borre la caché y los datos de la aplicación OsmAnd yendo a *Configuración de su dispositivo → Aplicaciones → OsmAnd → Almacenamiento → Borrar caché y Borrar datos*. Esto actualizará la aplicación y eliminará cualquier problema residual de la cuenta anterior.

5. **Reinstalar OsmAnd**. Si borrar la caché no resuelve el problema, intente desinstalar y reinstalar la aplicación. Antes de hacerlo, asegúrese de hacer una copia de seguridad de cualquier dato importante (pistas, favoritos) yendo a *Menú → Configuración → Exportar a archivo*. La reinstalación de la aplicación asegurará que todos los detalles de la cuenta se actualicen correctamente.

6. **Deshabilitar proxy**. Verifique la configuración del proxy de la aplicación y asegúrese de que el proxy esté desactivado yendo a *Menú → Configuración → Configuración de OsmAnd → Proxy*. Un proxy o VPN podría interferir con la sincronización de la cuenta.

7. **Volver a iniciar sesión o usar la Web para la administración de la cuenta**. Si aún tiene problemas, intente cerrar sesión y volver a iniciarla para actualizar la conexión de la aplicación a su cuenta actual. Si encuentra algún problema al eliminar la cuenta anterior en la aplicación, considere administrar su cuenta a través de la versión web de OsmAnd.