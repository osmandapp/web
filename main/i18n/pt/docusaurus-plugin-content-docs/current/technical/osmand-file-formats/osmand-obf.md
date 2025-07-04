---
source-hash: d5b7054e046a16fa52c2baf86bbe3278c548299ab710161c6f4e85a0c2933ff7
sidebar_position: 7
---

# Mapas Binários do OsmAnd - .obf {#osmand-binary-maps---obf}

## Introdução {#introduction}
Falar sobre *.travel.obf, *.wiki.obf, *.roads.obf, ..

Muitas perguntas são sobre o conteúdo e os problemas com os dados do mapa no aplicativo. Este tópico revela alguns detalhes técnicos do formato de dados interno e do processamento de dados. Pode ser interessante para não-desenvolvedores que estão familiarizados com a estrutura de dados do OSM.

Os dados do mapa offline do OsmAnd estão contidos em arquivos 'obf'. Os arquivos 'obf' têm uma estrutura complexa e podem consistir em muitas partes. É altamente recomendável manter os tamanhos dos arquivos abaixo de 2 Gb. Atualmente, os arquivos obf podem ter muitas partes, consistindo em várias partes de POI, várias partes de dados de roteamento, várias partes de Mapa, várias partes de Transporte e várias partes de dados de Endereço. Essa lista pode ser estendida no futuro. Para combinar, dividir ou excluir algumas partes do arquivo obf, use a ferramenta de console 'binary_inspector' fornecida com o OsmAndMapCreator.
* POI, parte de Transporte
* Parte do Mapa
* Parte do Endereço

> P: Como o mapcreator gera sua lista de todos os lugares que aparecerão posteriormente na pesquisa de endereço offline do OsmAnd? Quais objetos são usados em detalhes para isso? Quais nós com uma tag de lugar são incluídos e quais são excluídos?
>
> R: Todos os lugares que são visíveis no OsmAnd como Cidades são retirados de nós que possuem a tag "place" [https://wiki.openstreetmap.org/wiki/Place](https://wiki.openstreetmap.org/wiki/Place "https://wiki.openstreetmap.org/wiki/Place"). Atualmente, cidade, vila, subúrbio, aldeia, povoado são usados.
>
> P: Como o mapcreator lida com um polígono de área que é dado via uma relação com boundary=administrative? Como você associa um lugar dado como um nó com seu limite quando ele está presente nos dados do OSM?
>
> R: Simplificando: atualmente funciona por nome. O Mapcreator tenta visitar todos os limites e cria um limite fechado (!) a partir da relação ou de vias separadas e o associa a apenas um nome. Depois disso, ele tenta combinar \*lugar\* com \*nome do limite\* usando o algoritmo \*contém de\*. Há também uma verificação adicional se esse limite contém o lugar. Se houver muitos limites de diferentes admin\_level com o mesmo nome (contendo um ao outro como distrito/cidade/região com o mesmo nome), o admin\_level mais alto com correspondência exata será escolhido. TODO Mais detalhes devem estar aqui (sobre distritos da cidade...) ...
>
> P: Onde está a documentação que descreve qual nível de administração é o certo para construir uma associação a um determinado nó de lugar? Quais países preferem qual nível de administração?
>
> R: Atualmente, a associação entre a relação admin\_level e admin\_centre não é usada. Porque poucas relações fornecem essa informação.
>
> P: Como o MapCreator sabe qual rua pertence a qual lugar? Existem diferentes casos quando um polígono de limite é dado e quando não há nenhum?
>
> R: Existem muitas estratégias para verificar e elas são priorizadas na seguinte ordem:
> - Os mais importantes são os lugares e seus limites. Para que o algoritmo de gerenciamento de ruas funcione corretamente, os limites correspondentes ao lugar devem estar corretos. Se a rua pertencer a muitos limites, ela será registrada em todos os lugares apropriados.
> - tag is\_in (está obsoleta). Então, se uma rua tiver a tag is\_in, ela será analisada e dividida por vírgula e a rua será anexada a todas as cidades relevantes (por correspondência exata de nome). (PARA VERIFICAR: verificação básica de que a rua está no raio da cidade?)
> - Se a rua não pertencer a nenhum limite (limites não devidamente fechados podem ser um problema aqui), ela tenta encontrar a cidade mais próxima/maior e registrar a rua nessa cidade (às vezes ela se registra em uma cidade a 1 km de distância e perde o povoado mais próximo a apenas 100m de distância).
>
> A última parte é muito imprecisa. É por isso que muitas ruas são anexadas a uma cidade vizinha.
>
> Nas preferências do MapCreator, você tem mais cinco configurações para sufixos de rua, zoom, suavidade e renderização... quais são os efeitos detalhados que você pode obter com cada uma delas? Essas configurações são realmente usadas?
>
> Ferramentas
>
> -   O OsmAndMapCreator pode exibir quais ruas estão associadas a qual cidade (menu de contexto -> Mostrar endereço). Arquivos obf locais devem estar presentes e configurados em Configurações.
> -   A ferramenta Binary inspector pode mostrar uma lista de ruas para cada cidade. Execute a ferramenta sem parâmetros para ver os parâmetros possíveis.
> -   Atualmente, todos os arquivos de índice contêm gen.log. Ao visualizar o arquivo de log, você pode encontrar erros no processo de criação do mapa e isso pode dar uma resposta sobre por que algumas ruas não estão no local correto do índice de endereços.
>
> Parte do Endereço - fluxo de trabalho
>
> Existem estas relações:
>
> cidade -> 0..1 limite
>
> limite -> 0..\*\* cidade (usado para definir subúrbio da cidade)
>
> iterar todos os NODEs do Osm e registrar como cidades se a tag = PLACE estiver presente:
>
> -   extrair cidades (TOWN, CITY).
> -   extrair vilas (qualquer outra coisa).
>
> iterar todas as RELATIONS e WAYs com type=boundary e registrar todos os limites:
>
> -   limite é chamado de Entidade (via ou relação) com a tag 'boundary=administrative' ou com a tag 'place=...'.
> -   o limite deve ser admin\_level > 4 ou não ter um admin\_level.
> -   o limite nem sempre está associado a uma cidade (ou estado, ...).
> -   o limite pode ter 'admin\_center', 'label' membro apontando para um nó de cidade.
> -   o limite corresponde exatamente por nome ao nó da cidade e o nó da cidade cai dentro do limite.
> -   o limite corresponde ao início, fim ou substring por nome do nó da cidade e o nó da cidade cai dentro do limite.
>
> Muitos limites podem ser associados a uma cidade. Aqui está a ordem de como o limite mais importante é tomado e associado à cidade:
>
> -   O limite é correspondido por nome exatamente e tem a tag place.
> -   O limite é correspondido por nome exatamente e tem admin\_level 8 > 7 > 6 > 9 > 10 > 5... ou nada.
> -   O limite tem correspondência de admin\_id.
> -   Todos os outros casos, incluindo a classificação de admin\_level.
>
> se a cidade não tiver nenhum limite atribuído, todos os limites que não têm centros de cidades e contêm essa cidade serão verificados e o limite com admin\_level >=7 será atribuído.
>
> para cada limite, faça uma lista de cidades que estão dentro dele.
>
> iterar todas as RELATIONS e encontrar endereços ([Postal\_Addresses](https://wiki.openstreetmap.org/wiki/Relations/Proposed/Postal_Addresses)):
>
> relação com tipo de tag "address", e é "house" ou "a6" address\_type.
>
> procurar relação de Rua associada e membros da casa.
>
> tentar encontrar a cidade para a rua e a cidade para o endereço da casa.
>
> procurar cidades (já devemos tê-las encontrado nas etapas anteriores!).
>
> se tivermos cidade e rua, registre-as no banco de dados:
>
> para registro de rua, veja: registrar rua para uma cidade
>
> se a rua estiver registrada e estivermos processando a rua:
>
> iterar sobre todos os membros da relação:
>
> -   encontrar rua -> escrever os nós da rua no db
> -   encontrar casa -> escrever a casa na rua
>
> se a rua estiver registrada e estivermos processando a casa:
>
> -   encontrar número da casa
> -   encontrar limite da casa: se encontrado, armazenar: edifício para a rua
>
> registrar rua (rua, localização da rua (los), cidades):
>
> **Nota:** podemos registrar uma rua em mais cidades = isso significa que a rua pode estar em áreas aninhadas, subúrbio, cidade, povoado, etc... Para cada área, queremos registrar a rua em que ela está.
>
> para cada cidade:
>
> encontrar registro de rua existente dentro da cidade:
>
> se a rua existir:
>
> -   se a parte da cidade for desconhecida -> atualizar a parte da cidade da rua existente
> -   tentar encontrar a parte da cidade para nossa rua e procurar a rua novamente
>
> se a rua não existir: (pode mudar após a pesquisa)
>
> -   registrar a rua para a cidade, parte da cidade, localização e nome da rua
>
> findOrRegister rua
>
> -   encontrar cidades próximas à rua
> -   se a rua estiver no limite da cidade, adicione a cidade para pesquisa
> -   se nenhuma cidade for encontrada, usando o limite, encontre a cidade mais próxima para a rua
> -   registrar rua: para as cidades encontradas
>
> iterar todos os NODES, depois WAYS, depois RELATIONS (iterar entidade principal)
>
> encontrar vias - interpolações:
>
> -   para cada interpolação, findOrRegister uma rua com a localização da interpolação
> -   para cada dois nós, criar um edifício representando a interpolação
>
> para qualquer entidade, encontrar addr:housenumber e addr:street tag (também pode ser a interpolação de nós novamente!!!):
>
> -   pular se o edifício para esta entidade já existir!
> -   findOrRegister ruas para a rua
> -   encontrar o número da casa
> -   se o número da casa contiver '-', tentar criar um número de casa interpolado (faltando latlon2?)
> -   se o número da casa contiver '/', tentar procurar a segunda rua addr:street2 --> parece apenas para [RU osm](https://wiki.openstreetmap.org/wiki/RU:Key:addr):
> -   existem mais variações para isso: adr:housenumber2, addr2:street, addr2:housenumber etc...
> -   para cada rua, armazenar a casa existente
>
> para via com tag - nome e tag - highway, mas sem addr:housenumber e addr:street:
>
> -   **Nota**: isso pode ser vias para carros, com nomes (rodovia, ou algo assim)
> -   pular se tal rua já existir
> -   findOrRegister a rua para a cidade
> -   escrever os nós para cada rua encontrada em cada cidade
>
> Cada relação com "postal\_code", armazenar para uso posterior.
>
> **Nota**: isso não inclui o address:type = pc e addr:postalcode
>
> processar códigos postais:
>
> -   para cada relação de postal\_code armazenada
> -   para cada membro do edifício, atualizar o postal\_code
>
> escrever o índice:
>
> dividir cidades em: cidades+vilas, subúrbios (subúrbio com tag is\_in), vilas (não cidade ou vila)
>
> escrever cidades+vilas usando subúrbios
>
> ler rua de cidades+vilas + subúrbios apropriados para cada vila
>
> -   aqui, pode haver mais ruas com o mesmo nome para uma cidade, nesse caso, tentamos encontrar uma parte da cidade para a rua (subúrbio), onde a rua está. Não deve haver mais ruas com o mesmo nome dentro de uma parte da cidade!
>
> para cada rua
>
> -   para cada edifício, registrar/criar/encontrar código postal, registrar a rua
>
> escrever vilas
>
> -   o mesmo que cidades...
>
> escrever códigos postais extraídos e suas ruas