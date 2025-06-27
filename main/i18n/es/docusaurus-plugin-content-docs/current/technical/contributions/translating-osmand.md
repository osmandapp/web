---
source-hash: 393b89f8b1f2e0e68c20954707266d0a590a4377bd6dd4c21ecdbdeb01c7e21b
sidebar_position: 3
---

# Cómo traducir OsmAnd - ¡Necesitamos tu ayuda! {#how-to-translate-osmand---we-need-your-assistance}


¡Apreciamos mucho tu ayuda para traducir OsmAnd! Proporcionar traducciones de texto para la visualización no es muy complicado, la forma preferida de proporcionar traducciones de cadenas se describe aquí: [OsmAnd @ Hosted Weblate](https://hosted.weblate.org/projects/osmand/).

* Si un idioma al que te gustaría ayudar a traducir aún no aparece en la lista, por favor, abre un problema [aquí](https://github.com/osmandapp/Osmand/issues) (requiere una cuenta de GitHub).
* Los archivos de idioma existentes también podrían modificarse editando el archivo `_strings.xml` respectivo directamente en nuestro código a través de los mecanismos de GitHub, pero esta no es la forma preferida.
* Solo como referencia: las cadenas maestras se guardan en el [archivo strings.xml en inglés americano](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/res/values/strings.xml). Los datos de cadena para el extractor de datos del mapa se encuentran en los archivos `swing_messages_{language}.properties` en el proyecto [DataExtractionOsm](https://github.com/osmandapp/Osmand/tree/master/DataExtractionOSM/src/net/osmand/swing) **(NOTA Hardy: ¡el enlace está roto!)**.

¡Gracias por tu ayuda!

## Algunas preguntas y respuestas frecuentes: {#some-frequent-questions-and-answers}

#### P1: ¿Qué cadenas debo traducir? {#q1-which-strings-should-i-translate}
La herramienta Weblate es autoexplicativa. Solo si intentas editar archivos directamente:
* En `strings.xml`, las cadenas se ven así: `<string name="shared_string_save_as_gpx">Guardar como pista GPX</string>`. Traduce solo la parte `Guardar ruta como pista GPX`.
* En `swing_messages.properties`, las cadenas se ven así: `IndexCreator.INDEX_CITIES=Indexando ciudades...`. Traduce solo la parte derecha `Indexando ciudades...`.

#### P2: No quiero crear en Weblate o GitHub, ¿puedo simplemente enviarte el archivo? {#q2-i-dont-want-to-create-in-weblate-or-github-can-i-simply-post-you-the-file}
Sí, puedes enviar el archivo por correo electrónico, pero por favor, intenta las formas preferidas, es fácil.

#### P3: ¿Cómo debo verificar qué ha cambiado en el __strings.xml en inglés__? {#q3-how-should-i-check-what-has-changed-in-the-english-stringsxml}
Por favor, usa Weblate como se describe arriba, te mostrará todos los cambios. Si quieres verificar la fuente manualmente vs. tu archivo: Las nuevas cadenas se suelen añadir al principio del archivo de recursos del idioma maestro. Puedes descargarlo y usar alguna utilidad como pspad o vim para compararlos. También puedes usar *[blame](https://github.com/osmandapp/Osmand/blame/master/OsmAnd/res/values/strings.xml)* o el historial de archivos en GitHub para ver las últimas modificaciones.

## ¿Qué idiomas se incluirán en OsmAnd? {#what-languages-will-be-included-in-osmand}

> Estimados traductores,
>
> ¡Muchas gracias a todos por sus esfuerzos para completar nuestras traducciones de idiomas de visualización, y también para localizar OsmAnd en más y más idiomas en [Weblate](https://hosted.weblate.org/projects/osmand/)!
>
> Tengan en cuenta lo siguiente: Me complace incluir en el menú de selección de idioma de visualización de OsmAnd cualquier idioma nuevo con una tasa de traducción >10% (lo marcaré como "incompleto" hasta que alcance ~80%). Por favor, publiquen un problema con OsmAnd si necesitan que se haga esto, solo esporádicamente miro estas cifras en Weblate.
>
> Desafortunadamente, los idiomas que utilizan códigos ISO 639-2 de 3 letras parecen tener problemas actualmente en Android, véase, por ejemplo: * [https://code.google.com/p/android/issues/detail?id=49120](https://code.google.com/p/android/issues/detail?id=49120)* [https://code.google.com/p/android/issues/detail?id=106574](https://code.google.com/p/android/issues/detail?id=106574)
> Esto significa que, desafortunadamente, cualquier idioma de este tipo puede no mostrarse en los menús de OsmAnd en su dispositivo. (Este problema solo afecta el idioma utilizado en los menús de la aplicación, no en el mapa, por supuesto).
>
> Gracias,
> Dr. Hardy Mueller