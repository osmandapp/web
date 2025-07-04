---
source-hash: 4d2b414b19a5309ab189a4b85deee780fc65f5fbe7b235b81ae54779300d0e0a

---
# OsmAnd API, SDK - Ejemplos {#osmand-api-sdk---samples}
En caso de que quieras usar OsmAnd como una librería para tu aplicación, podrías considerar usarlo a través de SDK o a través de API. Actualmente, estas opciones solo están disponibles para Android.

Hay 2 formas principales de reutilizar el poder de OsmAnd en tu aplicación:
- Android OsmAnd AIDL API
- Android OsmAnd Full Library SDK

Todo el código para los 2 ejemplos está disponible en [un único repositorio](https://github.com/osmandapp/osmand-api-demo).

## Ejemplos de SDK {#sdk-examples}

Aquí está la lista de ejemplos de cómo usar el SDK dentro de tu producto.

[Mapa simple](./add_mapview.md) - cómo añadir el mapa a una aplicación simple.

## Android OsmAnd AIDL API {#android-osmand-aidl-api}
El concepto principal detrás de este enfoque es que la aplicación de destino se comunica con OsmAnd a través de [AIDL](https://developer.android.com/guide/components/aidl) o la API de intents. OsmAnd tiene una gran variedad de métodos compatibles con la [interfaz AIDL](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/aidl/IOsmAndAidlInterface.aidl). Hay varias aplicaciones construidas usando este enfoque y el concepto principal es que la aplicación contiene varias pantallas y un botón "Ir al mapa"; detrás de escena, la aplicación reconfigura completamente OsmAnd y proporciona una devolución de llamada para operaciones principales como Navegación, ubicación GPS adquirida y también incluye elementos de UI como widgets / botones de cajón, para que el usuario pueda navegar desde el Mapa de vuelta a la API de destino.

La lista de APIs es bastante larga y puedes familiarizarte con ella dentro de la [Aplicación de demostración](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk).

**Pros**
- Sin problemas de licencia - disponible para todos los propósitos posibles
- Siempre compatible, versionado y mantenido por el equipo de OsmAnd
- La integración más fácil requiere la menor cantidad de líneas de código
- Siempre para no mezclar la lógica de OsmAnd y la lógica de negocio de la aplicación
- Tamaño más pequeño (2 MB)

**Contras**
- Requiere que la aplicación OsmAnd esté instalada junto a tu aplicación
- Número limitado de métodos en comparación con el enfoque de SDK de biblioteca completa
- Capacidades de marca limitadas, aunque podría tener un logotipo de marca, perfiles de marca, estilos de mapa, etc. en la aplicación OsmAnd
- No es posible pasar código y elementos de UI a OsmAnd, por lo que toda la interacción solo se puede realizar cambiando pantallas entre aplicaciones y devoluciones de llamada

Por favor, consulta el ejemplo en el [repositorio de Github](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample).

## Android OsmAnd Full Library SDK {#android-osmand-full-library-sdk}
La biblioteca completa de OsmAnd reutiliza OsmAnd completo como una biblioteca. Básicamente, todo el código / todos los fragmentos de UI son parte de esa biblioteca, lo que da la libertad de usar lo que ya está presente en OsmAnd, pero requiere una buena comprensión de cómo es posible combinar varias capas / servicios.

**Pros**
- No es necesario instalar OsmAnd / OsmAnd+
- Todas las funciones / métodos posibles de OsmAnd están disponibles para ser reutilizados
- No requiere mucho código propio para construir una aplicación rica

**Contras**
- No hay documentación completa
- Licencia de código estricta, exactamente la misma que el código de OsmAnd
- La API que utiliza los servidores de OsmAnd requiere un consentimiento directo del equipo de OsmAnd
- La API no es estable (porque no es una API, es básicamente una biblioteca interna)
- Tamaño 70-150 MB (posible reducir eliminando el mapa base mundial de 20 MB). Se pueden realizar otras manipulaciones de tamaño según la intención de la aplicación de destino.

Por favor, consulta el ejemplo en el [repositorio de Github](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample).
Aplicación de demostración [OsmAnd-map-sample.apk](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk).

## Licencia {#license}
Es posible que desees revisar la [Licencia de OsmAnd](https://osmand.net/help-online/license) y la [versión completa](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE).