---
source-hash: 00c5daf74a16f214549f0a88cc1cb9258c0e4c09765d41d21306b6e11418fa8c
sidebar_position: 2
---

# Criando uma Experiência de Usuário Consistente {#creating-a-consistent-user-experience}

A usabilidade de nossos recursos complexos é decisivamente aprimorada pela redação e boas traduções, e a maior consistência possível. Vale a pena pensar em muitas expressões ou frases por um tempo. :)

Observe o seguinte:

## 1. Redação Consistente {#1-consistent-wording}

Use apenas **uma expressão** para um determinado recurso, não misture duas expressões possíveis. Exemplos:

* Verifique as expressões existentes e reutilize-as em novas strings
* Use _"navegação"_, não _"roteamento"_, em todo o texto.
* Use _"rastreamento"_, não _"monitoramento"_
* Usamos _"posição"_ para onde você está, enquanto _"localização"_ se refere a pontos arbitrários
* Usamos _"destino"_, não _"alvo"_
* Usamos _"velocidade"_, não _"celeridade"_
* Saiba a diferença entre _"elevação"_ e _"altitude"_
* Agora é _"OsmAnd"_, não _"Osmand"_ :)

## 2. Autoria de Texto {#2-authoring-text}

* Por favor, tente reutilizar constantes de string existentes o máximo possível, é bom para a memória e o desempenho.
* Para strings altamente reutilizáveis 'XXX', frequentemente temos um `shared_string_XXX`
* As strings são frequentemente reutilizadas! Ao alterar strings existentes, por favor, verifique novamente _todas_ as suas ocorrências no código
* Texto desnecessário polui as telas sem ajudar muito. Por favor, seja curto e preciso, adicione apenas palavras que transmitam informações _necessárias_.
* Por favor, verifique novamente a aparência da redação no aplicativo, em particular em dispositivos de baixa densidade. Muitas quebras de linha, texto cortado ou botões de menu aumentados podem tornar uma tela ou diálogo inutilizável.
* Em alguns casos, existem convenções que podem valer a pena verificar, em vez de "inventar algo". Então, se 99% dos sistemas de navegação comerciais em seu idioma anunciam "você chegou ao seu destino", usar "você chegou onde queria ir" pode não ser a melhor das escolhas... :)
* Marque claramente todos os recursos que exigem acesso à Internet com a expressão "online".
* O idioma base para o OsmAnd é o inglês americano. Há uma pasta de tradução para o inglês britânico para todas as expressões e grafias que diferem.

## 3. Renderização {#3-rendering}

* Uma nota sobre a renderização: A aparência do mapa de nossos estilos de mapa foi testada quanto à usabilidade e visibilidade em uma infinidade de locais de mapa, com muitos dispositivos e tecnologias de tela, e sob diferentes condições de luz. _"Melhorias espontâneas"_ no renderizador são quase sempre questionáveis, podem pelo menos exigir mais investigação e testes do que você imagina... :)