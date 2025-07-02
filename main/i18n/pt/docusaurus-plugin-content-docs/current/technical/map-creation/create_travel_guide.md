---
source-hash: 257260cc6f5df1e2457058808df69ed24a8aea6a73cb5b7dee08308979c295ac
title: Criar guia de viagem personalizado
versions: '*'
---
import Translate from '@site/src/components/Translate.js';



**_Este artigo precisa ser revisado_**

Usando o OsmAnd [MapCreator](../../versions/map-creator.md) você pode criar seu próprio [Guia de Viagem](../../user/plan-route/travel-guides.md) personalizado e exclusivo. Você pode usar texto de qualquer fonte (da Wikipédia ao blog de um amigo) como base para um guia e combiná-lo com a trilha GPX.

### Preparar os arquivos {#prepare-the-files}

Salve sua trilha com a extensão *[.GPX](../osmand-file-formats/osmand-gpx.md)* e o arquivo de texto como *.html*. Para criar seu *Guia de Viagem* personalizado com sucesso, os nomes do arquivo GPX e do arquivo html devem ser idênticos. Por exemplo, *Milan.gpx* e *Milan.html*.
As trilhas GPX podem ser baixadas da internet ou você pode criar uma [usando o OsmAnd](../../user/plan-route/create-route.md) ou qualquer outra ferramenta de criação de GPX (Brouter, ou similar).
Adicione os pontos que você gostaria de visitar em sua rota e, em seguida, salve essa rota como uma trilha GPX.

A escolha da fonte para o texto do seu guia é totalmente sua. Pode ser um artigo em um blog de viagens, uma página da Wikipédia, etc. Basta copiar o texto, colá-lo em um editor de texto e salvá-lo com a extensão *.html*. Certifique-se de que o nome da trilha GPX e do arquivo HTML sejam idênticos.

### Iniciar a ferramenta {#launch-the-tool}

Baixe a versão mais recente do [OsmAnd MapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) e extraia os arquivos do arquivo.

:::note
Como usar esta ferramenta é descrito no artigo [Criar Mapas Raster e Vetoriais Offline](./create-offline-maps-yourself.md#osmandmapcreator).
:::

Inicie seu console e abra a pasta MapCreator.

Exemplo: `cd /home/user/OsmAndMapCreator-main/`

Para *Linux* execute ./utilites.sh (*Windows*: arquivo utilities.bat) travel-guide-creator.

Quando solicitado a fornecer o caminho, cole o caminho para a pasta onde você preparou seus arquivos.

Exemplo: `cd /home/user/MyCustomGuides/`

Não recomendamos localizar seus arquivos na própria pasta *OsmAnd MapCreator*. Consulte o arquivo *Read me* para comandos passo a passo.

### Importar arquivos {#import-files}

Seu arquivo deve ser criado em segundos. Por padrão, ele será nomeado *travel_guide.sqlite*, mas você pode renomeá-lo como quiser. Certifique-se de salvá-lo com a extensão de arquivo *sqlite*. Por exemplo, *Milan_weekend_tour.sqlite*. Depois disso, transfira-o para o seu dispositivo. Especificamente, para a pasta onde os guias de viagem do OsmAnd são armazenados. Você pode verificar o caminho para essa pasta em *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*. Copie o arquivo para lá usando qualquer gerenciador de arquivos móvel ou conectando seu telefone ao computador. Reinicie o aplicativo.

### Usar seu guia {#use-your-guide}

Depois de iniciar o aplicativo, vá para o menu *[Guias de viagem](../../user/plan-route/travel-guides.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*). Use a pesquisa para ver novos artigos.