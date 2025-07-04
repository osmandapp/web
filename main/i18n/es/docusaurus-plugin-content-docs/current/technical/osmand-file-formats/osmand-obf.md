---
source-hash: d5b7054e046a16fa52c2baf86bbe3278c548299ab710161c6f4e85a0c2933ff7
sidebar_position: 7
---

# Mapas binarios de OsmAnd - .obf {#osmand-binary-maps---obf}

## Introducción {#introduction}
Hablar de *.travel.obf, *.wiki.obf, *.roads.obf, ..

Muchas preguntas se refieren al contenido y los problemas con los datos del mapa en la aplicación. Este tema revela algunos detalles técnicos del formato de datos interno y el procesamiento de datos. Puede ser interesante para los no desarrolladores que estén familiarizados con la estructura de datos de OSM.

Los datos de mapas sin conexión de OsmAnd están contenidos en archivos 'obf'. Los archivos 'obf' tienen una estructura compleja y pueden constar de muchas partes. Es muy recomendable mantener el tamaño de los archivos por debajo de 2 GB. Actualmente, los archivos obf pueden tener muchas partes que consisten en varias partes de PDI, varias partes de datos de enrutamiento, varias partes de mapas, varias partes de transporte y varias partes de datos de direcciones. Esa lista puede ampliarse en el futuro. Para combinar, dividir o eliminar algunas partes del archivo obf, utilice la herramienta de consola 'binary_inspector' que se proporciona con OsmAndMapCreator.
* PDI, parte de transporte
* Parte del mapa
* Parte de la dirección

> P: ¿Cómo genera mapcreator su lista de todos los lugares que aparecerán más tarde en la búsqueda de direcciones sin conexión de OsmAnd? ¿Qué objetos se utilizan en detalle para ello? ¿Qué nodos con una etiqueta de lugar se incluyen y cuáles se excluyen?
>
> R: Todos los lugares que son visibles en OsmAnd como Ciudades se toman de nodos que tienen la etiqueta "place" [https://wiki.openstreetmap.org/wiki/Place](https://wiki.openstreetmap.org/wiki/Place "https://wiki.openstreetmap.org/wiki/Place"). Actualmente se utilizan ciudad, pueblo, suburbio, aldea, caserío.
>
> P: ¿Cómo maneja mapcreator un polígono de área que se da a través de una relación con boundary=administrative? ¿Cómo se asocia un lugar dado como un nodo con su límite cuando está presente en los datos de OSM?
>
> R: Simplemente diciendo: actualmente funciona por nombre. Mapcreator intenta visitar todos los límites y crea un límite cerrado (!) a partir de la relación o de vías separadas y lo asocia con un solo nombre. Después de eso, intenta hacer coincidir \*place\* con \*boundary name\* utilizando el algoritmo \*contains of\*. También hay una verificación adicional si ese límite contiene el lugar. Si hay muchos límites de diferente admin_level con el mismo nombre (conteniendo cada uno como distrito/pueblo/región que tienen el mismo nombre), se elegirá el admin_level más alto con una coincidencia exacta. TODO Más detalles deberían estar aquí (sobre los distritos de la ciudad...) ...
>
> P: ¿Dónde está la documentación que describe qué nivel de administración es el correcto para establecer una asociación con un nodo de lugar determinado? ¿Qué países prefieren qué nivel de administración?
>
> R: Actualmente no se utiliza la asociación entre la relación admin_level y admin_centre. Porque solo unas pocas relaciones proporcionan esa información.
>
> P: ¿Cómo sabe MapCreator qué calle pertenece a qué lugar? ¿Hay diferentes casos cuando se da un polígono de límite y cuando no hay ninguno?
>
> R: Hay muchas estrategias para verificar y se priorizan en el siguiente orden:
> - Lo más importante son los lugares y sus límites. Para que el algoritmo de gestión de calles funcione correctamente, los límites coincidentes con el lugar deben ser correctos. Si la calle pertenece a muchos límites, se registrará en todos los lugares apropiados.
> - Etiqueta is_in (está en desuso). Entonces, si una calle tiene la etiqueta is_in, se analizará y dividirá por comas y la calle se adjuntará a todas las ciudades relevantes (por coincidencia exacta de nombre). (PARA VERIFICAR: ¿la calle de verificación básica está en el radio de la ciudad?)
> - Si la calle no pertenece a ningún límite (los límites no cerrados correctamente podrían ser un problema aquí), intenta encontrar la ciudad más cercana/más grande y registrar la calle en esa ciudad (a veces se registra en un pueblo a 1 km de distancia y se pierde el caserío más cercano a solo 100 m de distancia).
>
> La última parte es muy imprecisa. Por eso muchas calles se adjuntan a una ciudad vecina.
>
> En las preferencias de MapCreator tienes cinco configuraciones más para sufijos de calles, zoom, suavidad y renderizado... ¿cuáles son los efectos detallados que puedes lograr con cada una de ellas? ¿Se utilizan realmente esas configuraciones?
>
> Herramientas
>
> - OsmAndMapCreator puede mostrar qué calles están asociadas a qué ciudad (menú contextual -> Mostrar dirección). Los archivos obf locales deben estar presentes y configurados en Configuración.
> - La herramienta de inspección binaria puede mostrar una lista de calles para cada ciudad. Ejecute la herramienta sin parámetros para ver los posibles parámetros.
> - Actualmente, todos los archivos de índice contienen gen.log. Al ver el archivo de registro, puede encontrar errores en el proceso de creación del mapa y eso podría dar una respuesta de por qué algunas calles no están en el lugar correcto del índice de direcciones.
>
> Parte de la dirección - flujo de trabajo
>
> Existen estas relaciones:
>
> ciudad -> 0..1 límite
>
> límite -> 0..** ciudad (utilizado para definir el suburbio de la ciudad)
>
> iterar todos los NODOS de Osm y registrarlos como ciudades si la etiqueta = PLACE está presente:
>
> - extraer ciudades (PUEBLO, CIUDAD).
> - extraer pueblos (cualquier otra cosa).
>
> iterar todas las RELACIONES y VÍAS con type=boundary y registrar todos los límites:
>
> - el límite se llama Entidad (vía o relación) con la etiqueta 'boundary=administrative' o con la etiqueta 'place=...'.
> - el límite debe tener admin_level > 4 o no tener un admin_level.
> - el límite no siempre está asociado con una ciudad (o estado, ...).
> - el límite puede tener 'admin_center', miembro 'label' que apunta a un nodo de ciudad.
> - el límite coincide exactamente por nombre con el nodo de la ciudad y el nodo de la ciudad cae dentro del límite.
> - el límite coincide con el inicio, el final o la subcadena por nombre del nodo de la ciudad y el nodo de la ciudad cae dentro del límite.
>
> Muchos límites pueden asociarse con una ciudad. Aquí está el orden de cómo se toma el límite más importante y se asocia con la ciudad:
>
> - El límite coincide exactamente por nombre y tiene la etiqueta de lugar.
> - El límite coincide exactamente por nombre y tiene admin_level 8 > 7 > 6 > 9 > 10 > 5... o nada.
> - El límite tiene coincidencia de admin_id.
> - Todos los demás casos, incluida la clasificación de admin_level.
>
> si la ciudad no tiene ningún límite asignado, se verificarán todos los límites que no tienen centros de ciudades y que contienen esa ciudad, y se asignará el límite con admin_level >=7.
>
> para cada límite, haga una lista de las ciudades que están dentro de él.
>
> iterar todas las RELACIONES y encontrar direcciones ([Postal_Addresses](https://wiki.openstreetmap.org/wiki/Relations/Proposed/Postal_Addresses)):
>
> relación con tipo de etiqueta "address", y es tipo de dirección "house" o "a6".
>
> buscar la relación de calle asociada y los miembros de la casa.
>
> intentar encontrar la ciudad para la calle y la ciudad para la dirección de la casa.
>
> buscar ciudades (¡ya debemos haberlas encontrado en los pasos anteriores!).
>
> si tenemos ciudad y calle, registrarlo en la base de datos:
>
> para el registro de calles, ver: registrar calle para una ciudad
>
> si la calle está registrada, y estamos procesando la calle:
>
> iterar sobre todos los miembros de la relación:
>
> - encontrar calle -> escribir los nodos de la calle en la base de datos
> - encontrar casa -> escribir la casa en la calle
>
> si la calle está registrada, y estamos procesando la casa:
>
> - encontrar el número de casa
> - encontrar el límite de la casa: si se encuentra, almacenar: edificio para la calle
>
> registrar calle (calle, ubicación de la calle (los), ciudades):
>
> **Nota:** podríamos registrar una calle en más ciudades = esto significa que la calle puede estar en áreas anidadas, suburbio, ciudad, aldea, etc... Para cada área, queremos registrar la calle en la que se encuentra.
>
> para cada ciudad:
>
> encontrar el registro de calle existente dentro de la ciudad:
>
> si la calle existe:
>
> - si la parte de la ciudad es desconocida -> actualizar la parte de la ciudad de la calle existente
> - intentar encontrar la parte de la ciudad para nuestra calle y buscar la calle nuevamente
>
> si la calle no existe: (podría cambiar después de la búsqueda)
>
> - registrar la calle para la ciudad, la parte de la ciudad, la ubicación y el nombre de la calle
>
> encontrarOregistrar calle
>
> - encontrar ciudades cercanas a la calle
> - si la calle está en el límite de la ciudad, agregar la ciudad para la búsqueda
> - si no se encontró ninguna ciudad, usando el límite, encontrar la ciudad más cercana para la calle
> - registrar calle: para las ciudades encontradas
>
> iterar todos los NODOS, luego las VÍAS, luego las RELACIONES (iterar la entidad principal)
>
> encontrar vías - interpolaciones:
>
> - para cada interpolación, encontrarOregistrar una calle con la ubicación de la interpolación
> - para cada dos nodos, crear un edificio que represente la interpolación
>
> para cualquier entidad, encontrar addr:housenumber y addr:street tag (¡también puede ser la interpolación de nodos nuevamente!):
>
> - ¡omitir si el edificio para esta entidad ya existe!
> - encontrarOregistrar calles para la calle
> - encontrar el número de casa
> - si el número de casa contiene '-', intentar crear un número de casa interpolado (¿falta latlon2?)
> - si el número de casa contiene '/', intentar buscar la segunda calle addr:street2 --> parece que solo para [RU osm](https://wiki.openstreetmap.org/wiki/RU:Key:addr):
> - hay más variaciones para esto: adr:housenumber2, addr2:street, addr2:housenumber, etc.
> - para cada calle, almacenar la casa existente
>
> para vía con etiqueta - nombre y etiqueta - highway, pero sin addr:housenumber y addr:street:
>
> - **Nota**: esto podría ser vías para automóviles, con nombres (carretera, o algo así)
> - omitir si dicha calle ya existe
> - encontrarOregistrar la calle para la ciudad
> - escribir los nodos para cada calle encontrada en cada ciudad
>
> Cada relación con "postal_code", almacenar para uso posterior.
>
> **Nota**: esto no incluye el tipo de dirección = pc y addr:postalcode
>
> procesar códigos postales:
>
> - para cada relación de código postal almacenada
> - para cada miembro del edificio, actualizar el código postal
>
> escribir el índice:
>
> dividir las ciudades en: ciudades+pueblos, suburbios (suburbio con etiqueta is_in), aldeas (no ciudad o pueblo)
>
> escribir ciudades+pueblos usando suburbios
>
> leer la calle de ciudades+pueblos + suburbios apropiados para cada pueblo
>
> - aquí, podría haber más calles con el mismo nombre para una ciudad, en tal caso intentamos encontrar una parte de la ciudad para la calle (suburbio), donde se encuentra la calle. ¡No debería haber más calles con el mismo nombre dentro de una parte de la ciudad!
>
> para cada calle
>
> - para cada edificio, registrar/crear/encontrar código postal, registrar la calle
>
> escribir aldeas
>
> - igual que los pueblos...
>
> escribir códigos postales extraídos y sus calles
