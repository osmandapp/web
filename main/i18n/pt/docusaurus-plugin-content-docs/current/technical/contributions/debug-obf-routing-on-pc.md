---
source-hash: 07c0ae968b6fbc9eae5d8ad2f409109fd8923c80ddab63d2f07f3c692f96ba59
sidebar_position: 5
---

# Depurar Roteamento OBF em um PC {#debug-obf-routing-on-a-pc}


- vá para [https://osmand.net](https://osmand.net "https://osmand.net") e baixe [OsmandMapCreator.zip](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip "http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip") do link no lado direito da tela, e descompacte-o,
- copie o arquivo OBF do seu telefone ou tablet para essa pasta,
- inicie o OsmandMapCreator via arquivo bat ou arquivo sh,
- certifique-se de ter uma conexão com a internet para que o mapcreator possa baixar os blocos de mapa, verifique todos os menus e configurações dentro do mapcreator,
- defina o diretório de trabalho do mapcreator para a pasta onde o próprio mapcreator e o arquivo OBF estão localizados.
- mova e amplie o mapa para o local onde você tem problemas de roteamento e que é coberto pelo arquivo OBF mencionado,
- clique com o botão direito do mouse no mapa para definir os pontos de início e fim e diferentes motores de roteamento

Encontre o nome do local ao qual uma rua está associada em mapas OBF offline
- Tenha uma estrutura Java instalada em seu computador desktop.
- Baixe o OsmAndMapCreator, por exemplo, de [download.osmand.net/releases](https://download.osmand.net/releases/) e descompacte-o em seu PC.
- Pegue qualquer arquivo de mapa com extensão OBF e coloque-o na mesma pasta onde todos os arquivos do mapcreator estão localizados.
- Inicie o OsmAndMapCreator em seu PC executando `OsmAndMapCreator.bat` ou `OsmAndMapCreator.sh`
- Certifique-se de ter acesso à internet em seu PC, e as configurações do Mapcreator são para que os blocos sejam baixados quando você arrasta e amplia o mapa para sua localização onde seu problema está localizado.
- Se você ampliou para sua área, clique com o botão direito do mouse no mapa e escolha "mostrar endereço" no menu pop-up.
- Normalmente, agora todos os nomes das ruas devem ser exibidos a partir do arquivo OBF, e o nome do local ao qual cada rua está associada na pesquisa offline do OsmAnd.