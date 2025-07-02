---
source-hash: 4d2b414b19a5309ab189a4b85deee780fc65f5fbe7b235b81ae54779300d0e0a

---
# API OsmAnd, SDK - Amostras {#osmand-api-sdk---samples}
Caso você queira usar o OsmAnd como uma biblioteca para seu aplicativo, você pode considerar usá-lo via SDK ou via API. Atualmente, essas opções estão disponíveis apenas para Android.

Existem 2 maneiras principais de reutilizar o poder do OsmAnd em seu aplicativo:
- API AIDL do Android OsmAnd
- SDK de Biblioteca Completa do Android OsmAnd

Todo o código para 2 amostras está disponível em [um único repositório](https://github.com/osmandapp/osmand-api-demo).

## Exemplos de SDK {#sdk-examples}

Aqui está a lista de exemplos de como usar o SDK dentro do seu produto.

[Mapa simples](./add_mapview.md) - como adicionar o mapa a um aplicativo simples.

## API AIDL do Android OsmAnd {#android-osmand-aidl-api}
O conceito principal por trás dessa abordagem é que o aplicativo de destino se comunica com o OsmAnd via [AIDL](https://developer.android.com/guide/components/aidl) ou API de intents. O OsmAnd possui uma grande variedade de métodos suportados pela [interface AIDL](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/aidl/IOsmAndAidlInterface.aidl). Existem vários aplicativos construídos usando essa abordagem e o conceito principal é que o aplicativo contém várias telas e um botão "Ir para o mapa" por trás da cena, o aplicativo reconfigura completamente o OsmAnd e fornece um retorno de chamada para operações principais, como Navegação, localização GPS adquirida e também inclui elementos de UI, como widgets / botões de gaveta, para que o usuário possa navegar do Mapa de volta para a API de Destino.

A lista de APIs é bastante longa e você pode se familiarizar com ela dentro do [Aplicativo de Demonstração](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk).

**Prós**
- Sem problemas de Licença - disponível para todos os propósitos possíveis
- Sempre suportado, versionado e mantido pela Equipe OsmAnd
- A integração mais fácil requer o menor número de linhas de código
- Sempre para não misturar a lógica do OsmAnd e a lógica de negócios do aplicativo
- Menor tamanho (2 MB)

**Contras**
- Requer que o aplicativo OsmAnd esteja instalado ao lado do seu aplicativo
- Número limitado de métodos em comparação com a abordagem do SDK de Biblioteca Completa
- Capacidades de branding limitadas, embora possa ter um logotipo de marca, perfis de marca, estilos de mapa e etc. no aplicativo OsmAnd
- Não é possível passar código e elementos de UI para o OsmAnd, então toda a interação só pode ser feita alternando telas entre aplicativos e retornos de chamada

Por favor, verifique o exemplo no [repositório Github](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample).

## SDK de Biblioteca Completa do Android OsmAnd {#android-osmand-full-library-sdk}
A biblioteca completa do OsmAnd reutiliza o OsmAnd completo como uma biblioteca. Basicamente, todo o código / todos os fragmentos de UI fazem parte dessa biblioteca, o que dá a liberdade de usar o que já está presente no OsmAnd, mas requer uma boa compreensão de como é possível combinar várias camadas / serviços.

**Prós**
- Não há necessidade de OsmAnd / OsmAnd+ serem instalados
- Todas as funções / métodos possíveis do OsmAnd estão disponíveis para serem reutilizados
- Não requer muito código próprio para construir um aplicativo rico

**Contras**
- Sem documentação completa
- Licença de código estrita, exatamente a mesma do código do OsmAnd
- A API que usa servidores OsmAnd requer um consentimento direto da equipe OsmAnd
- A API não é estável (porque não é uma API, é basicamente uma biblioteca interna)
- Tamanho 70-150 MB (possível reduzir removendo o mapa base mundial de 20 MB). Outras manipulações de tamanho podem ser feitas com base na intenção do aplicativo de destino.

Por favor, verifique o exemplo no [repositório Github](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample).
Aplicativo de demonstração [OsmAnd-map-sample.apk](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk).

## Licença {#license}
Você pode querer verificar novamente a [Licença do OsmAnd](https://osmand.net/help-online/license) e a [versão completa](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE).