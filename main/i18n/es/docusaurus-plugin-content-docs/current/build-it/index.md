---
source-hash: 9eeb971fd6641349b16bc288cd5ac3e907c5976d926bd8f926c804208efa4170

---
import Admonition from '@theme/Admonition';

# Desarrollar con OsmAnd {#build-with-osmand}

Lea la **[documentación técnica](../technical/osmand-api-sdk/index.md)** sobre cómo integrarse con OsmAnd.

## Usar la API de OsmAnd {#use-osmand-api}

La API de OsmAnd le permite controlar la aplicación OsmAnd instalada. Comenzar el desarrollo a través de la API es fácil y directo, y se puede integrar en cualquier aplicación, **sin requisitos de licencia** de la aplicación de destino. El único inconveniente es que ya debe tener OsmAnd instalado.

**Características de la API de OsmAnd:**

* Añadir favoritos y marcadores al mapa
* Navegación entre ubicaciones
* Creación de notas de audio, video y fotos
* Inicio y detención de la grabación de pistas GPX
* Importación de pistas GPX a OsmAnd y navegación a lo largo de ellas
* Muchas otras características ya están presentes o pueden implementarse bajo petición

### Iniciar el desarrollo (API) {#start-development-api}

Puede construir su propio proyecto de la forma que desee. La integración con la API de OsmAnd se realiza utilizando dos tipos de intenciones: silenciosa o visible. Una intención silenciosa no mantiene OsmAnd abierto, mientras que una intención visible lleva OsmAnd a una pantalla específica. Hay planes para añadir comunicación entre procesos de Android en el futuro. Por favor, eche un vistazo al código fuente del proyecto de la API de OsmAnd.

<Admonition type="caution" icon="🛠️&nbsp;" title="Ejemplos">
  <p>
    Explore el código fuente de GitHub e instale la demostración desde Google Play.
  </p>
  <div>
    <a href="https://play.google.com/store/apps/details?id=net.osmand.osmandapidemo"><button class="button button--primary">Google Play</button></a> &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Lea la **[documentación técnica](../technical/osmand-api-sdk/index.md)** para más detalles.

### Licencia (API) {#license-api}

Dado que no hay uso directo de código del proyecto central de OsmAnd, la Licencia es diferente para la API de OsmAnd y para el proyecto central de OsmAnd. Lo más probable es que las aplicaciones que utilicen la API de OsmAnd se escriban desde cero y esta aplicación proporcionada como ejemplo no se utilizará en absoluto. Para la API de OsmAnd se utiliza la licencia menos restrictiva, la licencia MIT.

[https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md](https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md)


## Usar el SDK de OsmAnd {#use-osmand-sdk}

OsmAnd Sample representa una posibilidad de construir una aplicación sobre el núcleo de OsmAnd. OsmAnd proporciona una biblioteca Java con muchas funciones incluidas. [Por favor, eche un vistazo al código fuente](https://github.com/osmandapp/osmand-api-demo). OsmAnd Sample no es un caso de uso de API y la LICENCIA de OsmAnd Sample es la misma que la de la propia aplicación OsmAnd. Ofrece la posibilidad de empaquetarlo y distribuirlo independientemente de OsmAnd.


### Iniciar el desarrollo (SDK) {#start-development-sdk}

<Admonition type="caution" icon="🛠️&nbsp;" title="Ejemplos">
  <p>
    Explore el código fuente de GitHub e instale el APK de demostración.
  </p>
  <div>
    <a href="https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk"><button class="button button--primary">Descargar APK</button></a>
 &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Lea la **[documentación técnica](../technical/osmand-api-sdk/index.md)** para más detalles.


### Licencia (SDK) {#license-sdk}

La [licencia](https://github.com/osmandapp/Osmand/blob/master/LICENSE) para la aplicación OsmAnd es bastante extensa. Hay 2 cosas importantes: OsmAnd utiliza código de terceros solo con licencias permisivas como (LGPL, MIT, Apache) y el propio código de OsmAnd, con derechos de autor de OsmAnd BV, se distribuye bajo la licencia GPLv2 con la excepción de distribuirlo en los mercados de Google Play sin permiso. Esto ofrece la posibilidad de construir cualquier aplicación para uso personal o construir una aplicación de código abierto bajo la licencia GPLv2 (porque OsmAnd no es una plataforma y todo el código construido sobre el núcleo también debe tener licencia GPL).

Si desea construir una aplicación para uso interno, póngase en contacto con <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>; en algunos casos se conceden exenciones del código GPLv2 con derechos de autor de OsmAnd BV. Para el resto del código, compruebe la lista de la [LICENCIA](https://github.com/osmandapp/Osmand/blob/master/LICENSE) que solo contiene licencias permisivas (LGPL, MIT, Apache).

En caso de cualquier pregunta, no dude en ponerse en contacto con <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>. También estaremos encantados de ofrecer ayuda de desarrolladores experimentados de OsmAnd para construir una aplicación con fines especiales.


## Contáctenos para desarrollo {#contact-us-for-development}

En caso de que no esté seguro de qué caso se adapta mejor a usted o si desea solicitar ayuda a desarrolladores con experiencia en la creación de aplicaciones integradas con OsmAnd, ¡no dude en ponerse en contacto con nosotros en <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>!