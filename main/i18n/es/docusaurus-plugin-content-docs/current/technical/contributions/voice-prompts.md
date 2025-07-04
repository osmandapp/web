---
source-hash: aa3fd23b95c957def9ede8e26af7d7b5f4e4f85fb050e7a8c1cfc60a5f8eeb64
sidebar_position: 4
---

# Mensajes de voz de navegación {#navigation-voice-prompts}


## 1. Conceptos básicos {#1-some-basics}

* OsmAnd es compatible tanto con los mensajes sintetizados de texto a voz (TTS) como con las voces pregrabadas.
* Se prefiere el uso de una voz TTS, ya que es más flexible y puede, por ejemplo, pronunciar los nombres de lugares o calles.
* Las voces pregrabadas solo se recomiendan como alternativa si el dispositivo no es compatible con TTS en el idioma seleccionado.
* Para usar TTS, el dispositivo debe tener un motor TTS instalado que sea compatible con el idioma que desea escuchar. La mayoría de los dispositivos vienen con uno o dos motores preinstalados. Solo para idiomas menos comunes es posible que deba buscar e instalar un motor TTS de terceros.
* El código del enrutador de voz de OsmAnd rige para qué eventos se ofrecen los mensajes de voz y su tiempo.
* Pero el vocabulario y la construcción de oraciones para cualquier idioma se especifican en un archivo de configuración _xx-yy_tts.js_, donde xx es el código de idioma ISO 639-1 y yy un especificador regional u similar opcional. Solo para voces grabadas se requiere una subcarpeta adicional _voice_ con todas las expresiones grabadas necesarias como archivos _.ogg_.
* La convención de carpeta/archivo en el dispositivo es `voice/xx[-yy]-tts/xx[-yy]_tts.js`.

Los archivos de configuración _tts.js_ deben contener un encabezado como el siguiente, que realice un seguimiento de las características particulares que se han implementado y verificado para el archivo en cuestión:

```
// CARACTERÍSTICAS IMPLEMENTADAS (X) o FALTANTES ( ), (N/A) si no son necesarias en este idioma:
//
// (X) Mensajes de navegación básicos: ruta (re)calculada (con soporte de distancia y tiempo), giros, rotondas, cambios de sentido, recto/seguir, llegada
// (X) Anunciar nombres de puntos cercanos (destino / intermedio / punto de referencia GPX / favoritos / PDI)
// (X) Mensajes de atención: CÁMARA_DE_VELOCIDAD; LÍMITE_DE_VELOCIDAD; CONTROL_DE_FRONTERA; FERROCARRIL; CALMADO_DE_TRÁFICO; CABINA_DE_PEAJE; PARADA; PEATONAL; MÁXIMO; TÚNEL
// (X) Otros mensajes: GPS perdido, fuera de ruta, volver a la ruta
// (X) Soporte de nombre de calle y preposiciones (hacia / en / a) y destino de calle (hacia)
// (X) Soporte de unidad de distancia (metros / pies / yardas)
// (N/A) Gramática especial: (especifique cuál)
// (X) Soporte para anunciar salidas de autopista
```

## 2. Idiomas y variantes de voz {#2-voice-languages-and-variants}

* Algunos paquetes comunes de mensajes de voz de idiomas vienen preinstalados en OsmAnd, otros requieren una descarga única. (Tenga en cuenta que los preinstalados también aparecen como si fueran una descarga).
* Para algunos idiomas, ofrecemos diferentes variantes regionales. Escuchar la pronunciación regional correspondiente depende de las capacidades de su dispositivo.
* Para algunas voces, también ofrecemos variantes adicionales con, por ejemplo, mensajes más cortos ('informales') o algunos mensajes silenciados para reducir la locuacidad.

## 3. Prueba de mensajes de voz {#3-testing-of-voice-prompts}

Puede habilitar temporalmente el complemento de desarrollo de OsmAnd, luego ir a su configuración y usar el botón `Probar mensajes de voz`. Proporciona varios ejemplos de anuncios para cada tipo de mensaje de OsmAnd, utilizando una amplia gama de números para probar el formato y la pronunciación de tiempo/distancia. El título del botón indica el contenido básico del mensaje, la redacción exacta se especifica en el archivo tts.js que está probando.
También hay un botón de prueba que muestra la configuración de su dispositivo y las capacidades de idioma.

Durante la navegación, el mensaje de voz actual siempre se puede activar tocando el widget de flecha de giro.

## 4. Creación de un nuevo idioma/variante de voz TTS {#4-creating-a-new-tts-voice-languagevariant}

Algunas sugerencias:

- OsmAnd solo proporciona la redacción, el orden de las palabras, la gramática en términos de declinaciones, casos, singular/plural, etc., mientras que la pronunciación la realiza el motor TTS que utiliza en el dispositivo (hay motores integrados y de terceros).
- Esto se hace en un único archivo de definición de voz por idioma. En GitHub, los archivos se encuentran <a href="https://github.com/osmandapp/OsmAnd-resources/tree/master/voice">aquí</a>, y consulte la sección anterior para conocer las convenciones de carpeta/archivo en su dispositivo localmente.
- El archivo ahora está en js (migrado del antiguo PROLOG para hacerlo más convencional).
- Para crear un nuevo archivo de configuración, comience clonando desde _en\_tts.js_, es decir, úselo como plantilla.
- Luego, puede ser útil consultar los archivos de configuración existentes para idiomas gramaticalmente más complejos (por ejemplo, alemán, checo o eslovaco) para buscar soluciones existentes para gramática especial, orden de palabras, formación de números, etc. Busque particularmente idiomas similares al suyo.
- Puede probar su propio archivo tts (o sus mejoras a los existentes) usted mismo localmente, antes de una solicitud de extracción, simplemente colóquelo en su dispositivo con la convención de archivo/carpeta correcta.