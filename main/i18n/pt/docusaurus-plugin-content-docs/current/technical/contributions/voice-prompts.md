---
source-hash: aa3fd23b95c957def9ede8e26af7d7b5f4e4f85fb050e7a8c1cfc60a5f8eeb64
sidebar_position: 4
---

# Avisos de Voz de Navegação {#navigation-voice-prompts}


## 1. Algumas Noções Básicas {#1-some-basics}

* O OsmAnd suporta avisos sintetizados de Texto-para-Voz (TTS) e vozes pré-gravadas.
* É preferível usar uma voz TTS, pois é mais flexível e pode, por exemplo, pronunciar os nomes de lugares ou ruas.
* As vozes pré-gravadas são recomendadas apenas como uma alternativa, caso seu dispositivo não seja capaz de suportar TTS no idioma selecionado.
* Para usar o TTS, seu dispositivo precisa ter um mecanismo TTS instalado que suporte o idioma que você gostaria de ouvir. A maioria dos dispositivos já vem com um ou dois mecanismos pré-instalados. Apenas para idiomas menos comuns, pode ser necessário encontrar e instalar um mecanismo TTS de terceiros.
* Para qual evento os avisos de voz são oferecidos, e seu tempo, é governado pelo código do roteador de voz do OsmAnd.
* Mas o vocabulário e a construção de frases para qualquer idioma são especificados em um arquivo de configuração _xx-yy_tts.js_, onde xx é o código de idioma ISO 639-1 e yy um especificador regional ou similar opcional. Apenas para vozes gravadas é necessária uma subpasta adicional _voice_ com todas as expressões gravadas necessárias como arquivos _.ogg_.
* A convenção de pasta/arquivo no dispositivo é `voice/xx[-yy]-tts/xx[-yy]_tts.js`.

Os arquivos de configuração _tts.js_ devem conter um cabeçalho como segue, acompanhando quais recursos específicos foram implementados e verificados para o arquivo em questão:

```
// RECURSOS IMPLEMENTADOS (X) ou AUSENTES ( ), (N/A) se não forem necessários neste idioma:
//
// (X) Avisos básicos de navegação: rota (re)calculada (com suporte a distância e tempo), curvas, rotatórias, retornos, reto/seguir, chegada
// (X) Anunciar nomes de pontos próximos (destino / intermediário / waypoint GPX / favoritos / POI)
// (X) Avisos de atenção: CÂMERA_DE_VELOCIDADE; LIMITE_DE_VELOCIDADE; CONTROLE_DE_FRONTEIRA; FERROVIA; CALMA_DE_TRÁFEGO; PEDÁGIO; PARADA; PEDESTRE; MÁXIMO; TÚNEL
// (X) Outros avisos: gps perdido, fora da rota, de volta à rota
// (X) Suporte a nome de rua e preposições (para / em / a) e destino de rua (em direção a)
// (X) Suporte a unidade de distância (metros / pés / jarda)
// (N/A) Gramática especial: (por favor, especifique qual)
// (X) Suporte a anúncio de saídas de rodovias
```

## 2. Idiomas e Variantes de Voz {#2-voice-languages-and-variants}

* Alguns pacotes comuns de avisos de voz em idiomas são pré-instalados no OsmAnd, outros exigem um download único. (Observe que os pré-instalados também parecem ser um download.)
* Para alguns idiomas, oferecemos diferentes variantes regionais. Ouvir a pronúncia regional correspondente também depende das capacidades do seu dispositivo.
* Para algumas vozes, também oferecemos variantes adicionais com, por exemplo, avisos mais curtos ('casuais') ou alguns avisos silenciados para reduzir a tagarelice.

## 3. Teste de Avisos de Voz {#3-testing-of-voice-prompts}

Você pode habilitar temporariamente o plugin de desenvolvimento do OsmAnd, depois ir às suas configurações e usar o botão `Testar avisos de voz`. Ele fornece vários exemplos de anúncios para cada tipo de aviso do OsmAnd, usando uma ampla gama de números para testar a formatação e pronúncia de tempo/distância. A legenda do botão indica o conteúdo básico do aviso, a redação exata é especificada no arquivo tts.js que você está testando.
Há também um botão de teste mostrando as configurações do seu dispositivo e as capacidades de idioma.

Durante a navegação, o aviso de voz atual pode ser sempre acionado tocando no widget da seta de curva.

## 4. Criando um Novo Idioma/Variante de Voz TTS {#4-creating-a-new-tts-voice-languagevariant}

Algumas dicas:

- O OsmAnd apenas fornece a redação, a ordem das palavras, a gramática em termos de declinações, casos, singular/plural, etc., enquanto a pronúncia é realizada pelo mecanismo TTS que você usa no dispositivo (existem os embutidos e os de terceiros)
- Isso é feito em um único arquivo de definição de voz por idioma. No github, os arquivos estão localizados <a href="https://github.com/osmandapp/OsmAnd-resources/tree/master/voice">aqui</a>, e consulte acima as convenções de pasta/arquivo em seu dispositivo localmente.
- O arquivo agora está em js (migrado do antigo PROLOG para torná-lo mais convencional).
- Para criar um novo arquivo de configuração, comece clonando de _en\_tts.js_, ou seja, use-o como um modelo.
- Pode ser útil então olhar para arquivos de configuração existentes para idiomas gramaticalmente mais complexos (por exemplo, alemão, tcheco ou eslovaco) para procurar soluções existentes para gramática especial, ordem das palavras, formação de números, etc. Olhe particularmente para idiomas semelhantes ao seu.
- Você pode testar seu próprio arquivo tts (ou suas melhorias nos existentes) localmente, antes de uma solicitação pull, basta colocá-lo em seu dispositivo com a convenção correta de arquivo/pasta.