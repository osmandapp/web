---
source-hash: 00c5daf74a16f214549f0a88cc1cb9258c0e4c09765d41d21306b6e11418fa8c
sidebar_position: 2
---

# Creación de una experiencia de usuario consistente {#creating-a-consistent-user-experience}

La usabilidad de nuestras complejas funciones se mejora decisivamente con la redacción y las buenas traducciones, y con la mayor coherencia posible. Vale la pena pensar un poco en muchas expresiones o frases. :)

Tenga en cuenta lo siguiente:

## 1. Redacción coherente {#1-consistent-wording}

Utilice solo **una expresión** para una determinada función, no mezcle dos posibles expresiones. Ejemplos:

* Busque expresiones existentes y reutilícelas en nuevas cadenas.
* Utilice _"navegación"_, no _"enrutamiento"_, en todo momento.
* Utilice _"seguimiento"_, no _"monitoreo"_
* Usamos _"posición"_ para indicar dónde se encuentra, mientras que _"ubicación"_ se refiere a puntos arbitrarios.
* Usamos _"destino"_, no _"objetivo"_
* Usamos _"velocidad"_, no _"celeridad"_
* Conozca la diferencia entre _"elevación"_ y _"altitud"_
* Ahora es _"OsmAnd"_, no _"Osmand"_ :)

## 2. Creación de texto {#2-authoring-text}

* Intente reutilizar las constantes de cadena existentes tanto como sea posible, es bueno para la memoria y el rendimiento.
* Para cadenas 'XXX' altamente reutilizables, a menudo tenemos un `shared_string_XXX`
* ¡Las cadenas a menudo se reutilizan! Al cambiar cadenas existentes, verifique _todas_ sus ocurrencias en el código.
* El texto innecesario abarrota las pantallas sin ayudar mucho. Sea breve y preciso, solo agregue palabras que transmitan información _necesaria_.
* Verifique la apariencia de la redacción en la aplicación, en particular en dispositivos de baja densidad. Demasiados saltos de línea, texto cortado o botones de menú inflados pueden hacer que una pantalla o un diálogo sean inutilizables.
* En algunos casos existen convenciones, que pueden valer la pena verificar, en lugar de "inventar algo". Así que si el 99% de los sistemas de navegación comerciales en su idioma anuncian "ha llegado a su destino", entonces usar "ha llegado a donde quería ir" puede no ser la mejor opción... :)
* Marque claramente todas las funciones que requieren acceso a Internet con la expresión "en línea".
* El idioma base de OsmAnd es el inglés americano. Hay una carpeta de traducción para el inglés británico para todas las expresiones y la ortografía que difiere.

## 3. Representación {#3-rendering}

* Una nota sobre la representación: la apariencia del mapa de nuestros estilos de mapas ha sido probada para su usabilidad y visibilidad en una multitud de ubicaciones de mapas, con muchos dispositivos y tecnologías de pantalla, y bajo diferentes condiciones de luz. Las _"mejoras espontáneas"_ al renderizador son casi siempre cuestionables, pueden requerir al menos más investigación y pruebas de lo que cree... :)