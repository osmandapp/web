---
source-hash: 9eeb971fd6641349b16bc288cd5ac3e907c5976d926bd8f926c804208efa4170

---
import Admonition from '@theme/Admonition';

# Desenvolver com OsmAnd {#build-with-osmand}

Leia a **[Documentação técnica](../technical/osmand-api-sdk/index.md)** sobre como integrar com o OsmAnd.

## Usar a API do OsmAnd {#use-osmand-api}

A API do OsmAnd permite controlar o aplicativo OsmAnd instalado. Iniciar o desenvolvimento via API é fácil e direto, e pode ser incorporado em qualquer aplicativo, **sem requisitos de licenciamento** do aplicativo de destino. A única desvantagem é que você já deve ter o OsmAnd instalado.

**Recursos da API do OsmAnd:**

* Adicionar favoritos e marcadores ao mapa
* Navegação entre locais
* Criar notas de áudio, vídeo e foto
* Iniciar e parar a gravação de trilhas GPX
* Importar trilhas GPX para o OsmAnd e navegar por elas
* Muitos outros recursos já estão presentes ou podem ser implementados mediante solicitação

### Iniciar o desenvolvimento (API) {#start-development-api}

Você pode construir seu próprio projeto da maneira que desejar. A integração com a API do OsmAnd é feita usando dois tipos de intenções: silenciosa ou visível. Uma intenção silenciosa não mantém o OsmAnd aberto, enquanto uma intenção visível traz o OsmAnd para uma tela específica. Há planos para adicionar Comunicação Interprocessos do Android no futuro. Por favor, dê uma olhada no código-fonte do projeto da API do OsmAnd.

<Admonition type="caution" icon="🛠️&nbsp;" title="Exemplos">
  <p>
    Navegue pelo código-fonte do GitHub e instale a demonstração do Google Play.
  </p>
  <div>
    <a href="https://play.google.com/store/apps/details?id=net.osmand.osmandapidemo"><button class="button button--primary">Google Play</button></a> &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Leia a **[Documentação técnica](../technical/osmand-api-sdk/index.md)** para mais detalhes.

### Licença (API) {#license-api}

Como não há uso direto de código do projeto principal do OsmAnd, a Licença é diferente para a API do OsmAnd e para o projeto OsmAnd Core. Muito provavelmente, os aplicativos que usam a API do OsmAnd serão escritos do zero e este aplicativo fornecido como exemplo não será usado de forma alguma. Para a API do OsmAnd, é usada a licença menos restritiva, a licença MIT.

[https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md](https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md)


## Usar o SDK do OsmAnd {#use-osmand-sdk}

O Exemplo do OsmAnd representa uma possibilidade de construir um aplicativo sobre o núcleo do OsmAnd. O OsmAnd fornece uma biblioteca Java com muitas funções incluídas. [Por favor, dê uma olhada no código-fonte](https://github.com/osmandapp/osmand-api-demo). O Exemplo do OsmAnd não é um caso de uso da API e a LICENÇA do Exemplo do OsmAnd é a mesma do próprio aplicativo OsmAnd. Ele oferece a possibilidade de empacotá-lo e distribuí-lo independentemente do OsmAnd.


### Iniciar o desenvolvimento (SDK) {#start-development-sdk}

<Admonition type="caution" icon="🛠️&nbsp;" title="Exemplos">
  <p>
    Navegue pelo código-fonte do GitHub e instale o APK de demonstração.
  </p>
  <div>
    <a href="https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk"><button class="button button--primary">Baixar APK</button></a>
 &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Leia a **[documentação técnica](../technical/osmand-api-sdk/index.md)** para mais detalhes.


### Licença (SDK) {#license-sdk}

A [licença](https://github.com/osmandapp/Osmand/blob/master/LICENSE) para o aplicativo OsmAnd é bastante extensa. Há 2 coisas importantes: o OsmAnd usa código de terceiros apenas com licenças permissivas como (LGPL, MIT, Apache) e o próprio código do OsmAnd, protegido por direitos autorais da OsmAnd BV, é distribuído sob a licença GPLv2 com a exceção de distribuí-lo em mercados do Google Play sem permissão. Isso oferece a possibilidade de construir qualquer aplicativo para uso pessoal ou construir um aplicativo de código aberto sob a licença GPLv2 (porque o OsmAnd não é uma plataforma e todo o código construído sobre o núcleo também deve ser licenciado como GPL).

Se você deseja construir um aplicativo para uso interno, entre em contato com <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>, em alguns casos são fornecidas isenções do código GPLv2 protegido por direitos autorais da OsmAnd BV. Para o restante do código, por favor, verifique a lista da [LICENÇA](https://github.com/osmandapp/Osmand/blob/master/LICENSE) que consiste apenas em licenças permissivas (LGPL, MIT, Apache).

Em caso de qualquer dúvida, não hesite em entrar em contato com <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>. Teremos prazer em fornecer ajuda de desenvolvedores experientes do OsmAnd para construir um aplicativo de propósito especial.


## Entre em contato para desenvolvimento {#contact-us-for-development}

Caso você não tenha certeza de qual caso se encaixa melhor ou gostaria de pedir ajuda a desenvolvedores com experiência na construção de aplicativos integrados com o OsmAnd, não hesite em nos contatar <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>!